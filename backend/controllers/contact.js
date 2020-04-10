const Contact = require('../models/contacts')

exports.createContact = (req, res, next) => {
    delete req.body._id
    const contact = new Contact({...req.body})
    contact.save()
          .then(() => res.status(201).json({ message: 'Objet enregistré!' }))
          .catch((error) => res.status(400).json({error}))
}

exports.getOneContact = (req, res, next) => {
    Contact.findOne({ _id: req.params.id })
           .then((contact) => res.status(200).json(contact))
           .catch((error) => res.status(400).json({error}))
}

exports.modifiyContact = (req, res, next) => {
    Contact.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id })
           .then((contact) => res.status(200).json(contact))
           .catch((error) => res.status(400).json({error}))
}

exports.deleteContact = (req, res, next) => {
    Contact.deleteOne({ _id: req.params.id })
           .then(() => res.status(200).json({message: 'Objet supprimé'}))
           .catch((error) => console.log({ error }))
}

exports.getAllContacts = (req, res, next) => {
    Contact.find()
           .then((contacts) => res.status(200).json(contacts))
           .catch((error) => console.log({error}) )
}