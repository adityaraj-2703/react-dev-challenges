jwt = require('jsonwebtoken');

const JWT_SECRET =  "my-secret-key"; // Replace with your actual secret key
const REFRESH_SECRET = "my-refresh-token-secret"; // Replace with your actual secret key


//access token valid for 5 minutes
const signToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET,{
        expiresIn: '10m' // Token expiration time
    });
};


const verifyToken = (token) => {
    
    var decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
    
};


// const refreshToken = (payload) => {
//     return jwt.sign(payload, REFRESH_SECRET,{
//         expiresIn: '7d' // Token expiration time
//     });
// };
// const verifyRefreshToken = (token) => {
    
//     var decoded = jwt.verify(token, REFRESH_SECRET);
//     return decoded;
    
// };

module.exports = {
    signToken,
    // refreshToken,
    verifyToken,
    // verifyRefreshToken,
};