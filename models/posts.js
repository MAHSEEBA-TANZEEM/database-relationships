const mongoose = require("mongoose");
const {Schema} = mongoose;
main()
.then(()=> console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema ({
  username: String,
  email: String
});

const postSchema = new Schema ({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
});

const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);

// const addData = async()=> {
  // let user1 = new User({
  //   username: "rahul Kumar",
  //   email: "rahul@gmail.com"
  // });

  // let post1 = new Post({
  //   content: "Hello World!",
  //   likes: 7
  // });

  // post1.user = user1;

  // await user1.save();
  // await post1.save();

//   let user = await User.findOne({username: "rahul Kumar"});

//   let post2 = new Post({
//     content:"Bye Bye :)",
//     likes: 23,
//   });

//   post2.user = user;
//   await post2.save();
// };

// addData();

// const del = async() => {
//   await Post.findByIdAndDelete("673383276f6fcfbd0862ce98");
//   await User.findByIdAndDelete("67338022690ec979ce7bf0a5");

// }

// del();

const getData = async()=> {
  let result = await Post.findOne({}).populate("user","username");
  console.log(result);
}

getData();