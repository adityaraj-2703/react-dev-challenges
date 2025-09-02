const { createUser } = require('../service/userService');

const register = async (req, res) => {    
    const { username, password, role } = req.body;
    if(!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    try{
        const user = await createUser({
        username,
        password,
        role, // Optional role, can be set to "user" by default in the service
        });
        res.status(201).json({
            message: 'User registered successfully',
            user,
        }); 

    }
    catch(error) {
        if(error.message === 'Username already exists') {
            return res.status(409).json({ message: error.message });
        }
        return res.status(500).json({ message: error.message });
    }
    

         
};

module.exports = {
    register,
}