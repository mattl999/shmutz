const LoggedIn = require("../models/loggedIn");
const Song = require("../models/song");
const Video = require("../models/video");


async function getAuthPage(req, res) {
  console.log("getauthpagefunctriggered");
  let currentlyLoggedIn = await LoggedIn.find({});
  let loginState = currentlyLoggedIn[0].loggedIn;
  loginState
    ? res.redirect("/admin/manage-media")
    : res.render("../views/admin/admin", { incorrect: false });
}

async function authUser(req, res) {
  console.log("authuser func triggered");
  let user = req.body.user;
  let pass = req.body.pass;
  let currentlyLoggedIn = await LoggedIn.find({});
  let loggedInState = currentlyLoggedIn[0].loggedIn;
  console.log(req.body);
  if (user === process.env.USERNAME && pass === process.env.PASS) {
      await login();
      res.redirect("/admin/manage-dates");
    } else {
        res.render("admin", { incorrect: true });
    }
}
async function login() {
    let currentlyLoggedIn = await LoggedIn.findOne({});
    currentlyLoggedIn.loggedIn = true;
    currentlyLoggedIn.save();
  }


async function manageMedia(req, res) {
  console.log("manage media func hit");
  let currentlyLoggedIn = await LoggedIn.find({});
  let loginState = currentlyLoggedIn[0].loggedIn;
  // console.log(currentlyLoggedIn);
  console.log("loggedin:", loginState);
  if (loginState) {
    let songs = await Song.find({});
    let videos = await Video.find({});
    res.render("../views/admin/manageMedia", { songs, videos });
  } else {
    res.redirect("/");
  }
}
async function logout(req, res) {
  let currentlyLoggedIn = await LoggedIn.findOne({});
  currentlyLoggedIn.loggedIn = false;
  currentlyLoggedIn.save(function (err) {
      if (err) return console.log(err);
    return res.redirect("/admin");
  });
}


//pseudo logout
// async function logout(req,res){
//     let newObj = new LoggedIn();
//     await newObj.save();
//   res.redirect("/");

// }

module.exports = {
  manageMedia,
  getAuthPage,
  authUser,
  logout,
};
