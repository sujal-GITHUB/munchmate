import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

// Temporary storage for active tokens (use Redis or database in production)
let activeTokens = [];

// Create token
const createToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET);
  activeTokens.push(token); // Store token in active tokens list
  return token;
};

// Remove token (for logout or shutdown)
const removeToken = (token) => {
  activeTokens = activeTokens.filter(activeToken => activeToken !== token);
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = createToken(user._id);
    res.json({ success: true, token });

  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error logging in" });
  }
};

// Register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    // Check if user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Validate email and password strength
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid Email" });
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "Please enter a strong password" });
    }

    // Hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, message: "User created successfully", token });

  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error registering user" });
  }
};

// Handle server shutdown and remove active tokens
const handleShutdown = () => {
  console.log("Server is shutting down, clearing active tokens...");
  activeTokens = []; // Clear all active tokens
};

// Listen for shutdown signals
process.on('SIGINT', handleShutdown);
process.on('SIGTERM', handleShutdown);

export { loginUser, registerUser, removeToken };
