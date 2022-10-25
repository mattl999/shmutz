const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema(
  {
    youtubeUrl: String
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Video", videoSchema);
