import User from "../Models/userModel.js";
import bcyrptjs from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signUp = async (req, res) => {
  try {
    const { fullName, username, password, gender, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      res.status(400).json({ error: "password don't match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      res.status(400).json({ error: "Username already exists" });
    }

    const boyProfilePic = `https://avatar-placeholder.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar-placeholder.iran.liara.run/public/girl?username=${username}`;
    const salt = await bcyrptjs.genSalt(10);
    const hashedPassword = await bcyrptjs.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "no users exists" });
    }
  } catch (error) {
    console.log("error in the controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcyrptjs.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid Password or Username" });
    }
    generateTokenAndSetCookie(user._id, res);
    return res.status(201).json({
      _id:user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("error in the controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt","",{maxAge:0})
    res.status(200).json({message:"LoggedOut successfully"})
  } catch (error) {
    console.log("error in the logout controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// https://avatar-placeholder.iran.liara.run/
