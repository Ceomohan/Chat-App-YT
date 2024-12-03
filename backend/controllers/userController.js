import User from "../Models/userModel.js"

export const getUsersForSidebar = async (req,res)=>{
    try {
        const loggedInUser = req.user._id
        const filteredUser = await User.find({_id:{$ne:loggedInUser}}).select("-password")

        return res.status(200).json(filteredUser)
    } catch (error) {
        console.error("Error in the getUsersForSidebar:",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}