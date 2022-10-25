const music = async (req,res) =>{
    res.render('music')

}
const videos = async (req,res) => {
    res.render('videos');
}

module.exports = {
    music,
    videos,
}