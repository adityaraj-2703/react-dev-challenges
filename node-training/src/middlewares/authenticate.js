const { verifyToken } = require('../util/token');

function authenticate(req, res, next) {
  const token = req.cookies.token; // Assuming token is stored in a cookie
  if (!token) {
    return res.status(401).json({ message: 'Please login' });
  }
  try {
    const user = verifyToken(token);
    req.user = user; // Attach user info to the request object
    console.log('Authenticated user:', user);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized access' });
  }
}

module.exports =  authenticate ;