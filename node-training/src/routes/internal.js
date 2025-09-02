const { Router } = require("express");
const shortid = require("shortid");
const authorizeRoles = require("../middlewares/authorizeRoles");


const router = Router();


//application logic
//admin can do everything
//mod can ban users

//admin only
router.get('/control-board',authorizeRoles("admin"), (req, res) => {
    // if(req.user.role !== 'admin') {
    //     return res.status(403).json({ message: 'Access denied. Admins only.' });
    // }
    // Logic to fetch and return control board data would go here
    return res.status(200).json(
        { 
            message: 'Welcome to the admin control board',
            data: {
                users: 100,
                todos: 200,
                activeSessions: 50,
                systemHealth: 'All systems operational'
            },

        });
});

//admin and mod
router.patch("/ban-user/:id",authorizeRoles("admin","mod"), (req, res) => {
    // if(req.user.role !== 'admin' && req.user.role !== 'mod') {
    //     return res.status(403).json({ message: 'Access denied. Admins and Mods only.' });
    // }
    console.log("Ban user request received");
    // Logic to ban the user would go here
    return res.status(200).json({
        message: `User with ID ${req.params.id} has been banned successfully`
    });
    
});




module.exports = router;