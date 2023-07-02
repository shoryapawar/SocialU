import bcrypt from "bcrypt"; //encrypt our pass
import jwt from "jsonwebtoken";
import User from "../models/User.js";
// Register user
export const register = async (req, res) => {
  try {
    // destructuring
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    // using Encyption
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    //  storing user with encrypt password
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser); // all works fine then save it
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// // loging in
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     //  checking if user exists using email for that
//     const user = await User.findOne({ email: email }); // mongoose email
//     if (!user) return res.status(400).json({ msg: "User does not exist" });

//     // password matching
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });
    
//     //  JWT token
//     const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
//     delete user.password;
//     res.status(200).json({ token, user });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};