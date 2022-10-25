const Song = require("../models/song");
const LoggedIn = require("../models/loggedIn");
const { Howl, Howler } = require("howler");
 
async function createSong(req, res) {
  console.log("create func triggered");
  console.log(req.body);
  let data = req.body;
  songFile = new Howl({
    src: data.mp3File
  })
  // data.songFile.play()
  let newObj = new Song(data);
  await newObj.save();
  res.redirect("/admin/manage-media");
}

async function getEditSongPage(req, res) {
  id = req.params.id;
  // console.log("edit controller function triggered", id);
  let selectedDate = await TourDate.findById(id);
  // console.log(selectedDate);
  res.render("edit", { el: selectedDate });
}

async function editSong(req, res) {
  return res.status(200).json({ formData: "hi there" });
}

async function deleteSong(req, res) {
  console.log("Hey");
  let id = req.params.id;
  console.log(id);
  await Song.deleteOne({ _id: id });
  return res.status(200).json({ formData: "hi there" });
}

module.exports = {
  createSong,
  getEditSongPage,
  editSong,
  deleteSong,
};
