// Check for user-provided token.

// function authorization(req, res, next) {
// //   If token, decode it.
// //   If valid token, find books.
// //   Else 401

//     console.log(req.headers);
//     if (!req.headers.authorization) {
//       return res.status(401).json({
//         error: true,
//         data: null,
//         message: "Unauthorized.",
//       });
//     }
//     jwt.verify(req.headers.authorization, process.env.SECRET, (err, decoded) => {
//       if (err) {
//         console.log(err);
//         return res.status(401).json({
//           error: true,
//           data: null,
//           message: "Invalid token.",
//         });
//       } else {
//     console.log(decoded);
//       }