import jwt from "jsonwebtoken";
import User from "../Models/userModel.js";

const protectRoutes = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      console.log(token)
      return res.status(401).json({ error: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized Token" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;
   
    next();
  } catch (error) {
    console.log("Error in the protectRoutes:", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoutes;
