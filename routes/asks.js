var express = require('express');
var router = express.Router();
const askCtrl = require("../controllers/asks")
/* GET users listing. */
router.get('/new', askCtrl.new);
router.post('/', askCtrl.create);
router.post("/search", askCtrl.search);
router.get('/:id', askCtrl.show);




// router.get("");

// router.get("/new", askCtrl.new);
// router.post('/', askCtrl.create);
// router.get('/:id', askCtrl.show);



module.exports = router;