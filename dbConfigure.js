import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://elsecode:elsecode12@cluster0.uwpnxyn.mongodb.net/elsecodedb?retryWrites=true&w=majority"
    );
    //User.insertMany(users);
    //Post.insertMany(posts);

    console.log(`MongoDB Connected to ${conn.connection.host} ,biatch!`);
  } catch (error) {
    console.log(`${error.message}`);
    process.exit(1);
  }
};

export default dbConnect;
