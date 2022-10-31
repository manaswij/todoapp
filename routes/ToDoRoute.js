const {Router} = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

const router = Router()

router.get('/', getToDo) //fetching from db
router.post('/save', saveToDo) //save to db
router.post('/update', updateToDo) //update to db
router.post('/delete', deleteToDo) //delete from db

module.exports = router;