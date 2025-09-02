const { signToken } = require('../util/token');
const {comparePassword }= require('../util/password');
const { users } = require('../repository/userRepository');

const login = async (username, password) => {
    const user = users.find(u => u.username === username);
    console.log("users",users);
    if(!user) {
        throw new Error('Wrong username or password');
    }
    if(comparePassword(password, user.password) === false){
        throw new Error('Invalid password');
    };
    
    const token = signToken({
        id: user.id,
        role: user.role,
    });
    
    return {
        token,
        user: {
            id: user.id,
            username: user.username,
            role: user.role, 
        }   
    }

}


module.exports = {
    login,
}