var userAuth = function (req, res, next) {
     var user = req.query.age;
     if (user >= 18) {
          console.log("pleas enter valid age");
          next();
     }else{
          console.log("not enter");
          return res.send("sufiyan")
     }
}
module.exports = userAuth;