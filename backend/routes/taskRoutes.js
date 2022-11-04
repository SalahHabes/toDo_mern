const express = require('express')
const {
    task_index,
    task_details,
    task_create,
    task_delete,
    task_update
} = require('../controllers/taskController')
const router = express.Router()

router.get('/', task_index)
router.get('/:id', task_details)
router.post('/', task_create)
router.delete('/:id', task_delete)
router.patch('/:id', task_update)

module.exports = router