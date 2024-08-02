const connectToDB = require('./utils');
const { User, Post } = require('./models');

const getPost = async (slug) => {
  try {
    await connectToDB();
    const post = await Post.findOne({ slug }).populate('userId');
    return post;
  } catch (error) {
    console.error("Failed to fetch post:", error);
    throw new Error("Failed to fetch post");
  }
};

const getUser = async (id) => {
  try {
    await connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user");
  }
};

const getAllUsers = async () => {
  try {
    await connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.error("Failed to fetch all users:", error);
    throw new Error("Failed to fetch all users");
  }
};

module.exports = { getPost, getUser, getAllUsers };
