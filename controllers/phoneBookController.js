const Phonebook = require('../models/phoneBookModel');

exports.getAllContact = async (req, res) => {
  try {
    const phoneBook = await Phonebook.find();

    res.status(200).json({
      status: 'success',
      data: phoneBook,
    });
  } catch (err) {
    res.stats(404).json({
      status: 'fail',
      err,
    });
  }
};

exports.createContact = async (req, res) => {
  try {
    const newPhoneBook = await Phonebook.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        phoneBook: newPhoneBook,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      err,
    });
  }
};

exports.getContact = async (req, res) => {
  try {
    const phoneBook = await Phonebook.findOne({ phone: req.params.phone });

    if (!phoneBook) {
      return res.status(404).json({
        status: 'fail',
        message: 'there is no contact saved with this phone no',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        phoneBook,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      err,
    });
  }
};

exports.updateContact = async (req, res) => {
  const phoneBook = await Phonebook.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!phoneBook) {
    return res.status(404).json({
      status: 'fail',
      message: 'there is no contact with this phone',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      phoneBook,
    },
  });
};

exports.deleteContact = async (req, res) => {
  const phoneBook = await Phonebook.findByIdAndDelete(req.params.id);

  if (!phoneBook) {
    return res.status(404).json({
      message: 'there is no contact with this phone no',
    });
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
};
