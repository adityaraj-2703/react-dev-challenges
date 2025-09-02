function authorizeRoles(...roles) {
  return (req,res,next) => {
    console.log("Authorizing roles", roles);
    console.log("User role", req.user.role);
    if(roles.includes(req.user.role)) {
        return next();
    }
    else{
        return res.status(403).json({ message: 'Access denied. You do not have the required role.' });
    }
  }
}

module.exports =  authorizeRoles ;