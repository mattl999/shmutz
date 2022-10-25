var express = require('express');
var router = express.Router();
var admin = require('../controllers/admin');
var songCrud = require('../controllers/songCrud');
var videoCrud = require('../controllers/videoCrud');

// Auth Routes
router.get('/', admin.getAuthPage );
router.post('/', admin.authUser);
router.get('/manage-media', admin.manageMedia);
router.post('/logout', admin.logout)

// Song CRUD Routes
router.post('/createSong', songCrud.createSong)
router.get('/editSong/:id', songCrud.getEditSongPage)
router.put('/editSong/:id', songCrud.editSong)
router.delete('/deleteSong/:id', songCrud.deleteSong)

// Video CRUD Routes
router.post('/createVideo', videoCrud.createVideo)
router.get('/editVideo/:id', videoCrud.getEditVideoPage)
router.put('/editVideo/:id', videoCrud.editVideo)
router.delete('/deleteVideo/:id', videoCrud.deleteVideo)


module.exports = router;
