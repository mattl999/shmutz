const LoggedIn = require("../models/loggedIn");
const Video = require("../models/video");

async function createVideo(req, res) {
    console.log("create func triggered");
    console.log(req.body);
 
    let newObj = new Video(data);
    await newObj.save();
    res.redirect("/admin/manage-media");
  }

async function getEditVideoPage(req, res) {
  id = req.params.id;
  // console.log("edit controller function triggered", id);
  let selectedDate = await TourDate.findById(id);
  // console.log(selectedDate);
  res.render("edit", { el: selectedDate });
}
async function editVideo(req, res) {
  return res.status(200).json({ formData: "hi there" });
}

async function deleteVideo(req, res) {
    console.log("Hey");
    let id = req.params.id;
    console.log(id);
    await Video.deleteOne({ _id: id })
    return res.status(200).json({ formData: "hi there" });
  
  }
  

module.exports = {
  createVideo,
  getEditVideoPage,
  editVideo,
  deleteVideo,
};
