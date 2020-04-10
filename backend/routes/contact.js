const express = require('express')
const router = express.Router()
const contactCtrl = require('../controllers/contact')
router.post('/',  contactCtrl.createContact)
router.get('/:id', contactCtrl.getOneContact)

router.put('/:id', contactCtrl.modifiyContact)
router.delete('/:id', contactCtrl.deleteContact)
router.get('/', contactCtrl.getAllContacts)

module.exports = router