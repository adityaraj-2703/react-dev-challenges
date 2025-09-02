

const authService = require("../service/authService");


const login = async (req, res) => {  
    const { username, password } = req.body || {};
    
    try{
        const {token,user} =  await authService.login(username, password);
        console.log("in auth controller, user:", user);
        res.cookie('token',token),{
            httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
        };
        res.status(200).json({
            message: 'Login successful',
            //jwt: signToken(userInfo),  // In a real application, you would generate a JWT here
            user,
        });
    }
    catch(error) {
        if(error.message === 'Wrong username or password') {
            return res.status(401).json({ message: error.message });
        }
        return res.status(500).json({ message: error.message });
    }



    //this approache gives too much information about the user
    
    
    // if(!user || user.password !== password) {
    //     return res.status(401).json({ message: 'Wrong username or password' });
    // }

    // const {id,role} = user; // Exclude password from the response

    // two ways to store token
    // 1. in http-only cookie,
    // 2. in local storage or session storage
    

};

const logout = async (req, res) => {  
    res.clearCookie('token'); // Clear the cookie
    res.status(200).json({ message: 'Logout successful' });
};

module.exports = {
    login,
    logout,
};