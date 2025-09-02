const express = require('express');
const cors = require('cors');
const shortid = require('shortid');
const app = express()
const port = 3000
const todosRoute = require('./routes/todosRoute');
const authRoute = require('./routes/authRoute');
const internalRoute = require('./routes/internal');
const userRoute = require('./routes/userRoute');

const cookieParser = require('cookie-parser');
const authenticate = require('./middlewares/authenticate');

app.use(cookieParser());

app.use(express.json());

function middleware1(req, res, next) {
  console.log('Middleware executed');
  next();
}


function middleware2(req, res, next) {
  console.log('Middleware 2 executed');
  next();
}



app.use(
  cors({
    origin: '*',
  })
);

//public routes
app.use('/auth',middleware1 ,authRoute);
app.use("/users",userRoute);

// app.use(authenticate); // Apply authentication middleware to all routes after todos
//private routes
app.use('/todos',middleware2, todosRoute);

app.use("/internal", internalRoute);


app.get('/private', (req, res) => {
  // const authHeader = req.headers['authorization'];
  // const token = authHeader && authHeader.split(' ')[1]; // Assuming Bearer token format
  // const token = req.cookies.token;
  // if(!token) {
  //   return res.status(401).json({ message: 'Please login' });
  // } 
  // try{
  //   verifyToken(token);
  res.status(200).json({message:'This is a private route'})
  // }
  // catch (error) {
  //   return res.status(401).json({ message: 'Unauthorized access' });
  // }
  
  // If the token is valid, proceed to the private route
  

});

app.get('/admin', (req, res) => {
  // const authHeader = req.headers['authorization'];
  // const token = authHeader && authHeader.split(' ')[1]; // Assuming Bearer token format

  const token = req.cookies.token; // Assuming token is stored in a cookie
  if(!token) {
    return res.status(401).json({ message: 'Please login' });
  }
  try{
    const payload = verifyToken(token);
    if(payload.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden: Admins only' });
    }
    res.status(200).json({message:'This is a private route'})
  }
  catch (error) {
    return res.status(401).json({ message: 'Unauthorized access' });
  }
  
  // If the token is valid, proceed to the private route

});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
