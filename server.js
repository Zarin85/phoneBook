const mongoose = require('mongoose');

const app = require('./app');

const db =
  'mongodb+srv://niloy:j4mpgbLd7rP9jeTh@cluster0.jhwwd.mongodb.net/interview?retryWrites=true&w=majority';

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connected successfully');
  });

const port = 3000;

const server = app.listen(port, () => {
  console.log('listening at port ' + port);
});
