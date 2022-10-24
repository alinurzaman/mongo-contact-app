const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/wpu", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// const contact1 = new Contact({
//   nama: "Muhamad Ali",
//   nohp: "08123456789",
//   email: "ali@gmail.com",
// });

// contact1.save().then((contact) => console.log(contact));
