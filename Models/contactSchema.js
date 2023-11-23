import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    name: {
      type: String,

      min: 6,
    },
    email: {
      type: String,

      min: 7,
      max: 50,
    },
    phone: {
      type: String,
    },
    budget: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", postSchema);
export default Contact;
