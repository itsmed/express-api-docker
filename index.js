const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
console.log("env: ", process.env)

mongoose.connect('mongodb://mongodb:27017/test')
  .then(() => console.log('mongoose connected'))
  .catch((e) => console.error(`error connecting to monogodb ${e}`));

const userSchema  = new mongoose.Schema({
  lastName: String,
  firstName: String,
});

const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.post('/user-add', async(req, res, next) => {
  const { lastName, firstName } = req.body;
  if (!lastName || ! firstName) {
    res.send('please include first name and last name in request');
  }
  else {
    const user = new User({firstName, lastName});
    try {
      await user.save();
      res.status(201).send(user);
    } catch(e) {
      res.status(400).send(e);
      next();
    }
  }
});

app.get('/users', async(req, res, next) => {
  try {
    const users = await User.find();
    res.send(users);
  }
  catch(e) {
    res.status(404).send('error finding users');
    next();
  }
});

const PORT = 8080;
app.listen(PORT, () => console.log(`server listening on ${PORT}`));
