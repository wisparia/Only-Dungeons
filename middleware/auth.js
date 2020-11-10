const jwt = require('jsonwebtoken');

function auth(req, res, next){
console.log(req.headers);
    if (!req.headers.authorization) {
      return res.status(401).json({
        error: true,
        data: null,
        message: "Unauthorized.",
      });
    }
    jwt.verify(
      req.headers.authorization,
      process.env.REACT_APP_SECRET,
      (err, decoded) => {
        if (err) {
          console.log(err);
          return res.status(401).json({
            error: true,
            data: null,
            message: "Invalid token.",
          });
        } else {
          console.log(decoded);
          next();
          
        }
      }
    );
}

module.exports = auth;