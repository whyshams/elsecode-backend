import Contact from "../Models/contactSchema.js";
import asyncHandler from "express-async-handler";

export const createContact = asyncHandler(async (req, res) => {
  try {
    const { name, email, phone, budget, description } = req.body;

    const newContact = new Contact({
      name,
      email,
      phone,
      budget,
      description,
    });

    await newContact.save();

    const contact = await Contact.find();

    res.status(201).json(contact);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
});

export const getContact = asyncHandler(async (req, res) => {
  try {
    const contact = await Contact.find();

    res.status(200).json(contact);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

export const deleteContact = asyncHandler(async (req, res) => {
  const contactId = req.body._id;

  try {
    const deletedPost = await Post.findByIdAndDelete(contactId);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while deleting the user" });
  }
});
