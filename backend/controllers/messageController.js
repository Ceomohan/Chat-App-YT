import Conversation from "../Models/conversationModel.js";
import Message from "../Models/messageModel.js";


export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    // Validate input
    if (!message || !receiverId) {
      return res.status(400).json({ error: "Message and receiver ID are required" });
    }

    // Find or create conversation
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
        messages: [], // Ensure `message` field is initialized as an array
      });
    }

    // Create a new message
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    // Push the new message ID to the conversation
    if (!conversation.message) {
      conversation.messages = []; // Initialize `message` array if undefined
    }
    conversation.messages.push(newMessage._id);

    // Save both the conversation and the message
    await Promise.all([conversation.save(), newMessage.save()]);

    // Respond with the new message
    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error in the sendMessage controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const getMessages = async (req,res)=>{
  try {
    const {id:userToChatId} = req.params
    const senderId = req.user._id

    const conversation = await Conversation.findOne({
      participants:{$all:[senderId,userToChatId]}
    }).populate("messages")

    if (!conversation) {
      return res.status(404).json({ error: "No conversation found" });
    }


    const messages = conversation.messages || []

    res.status(200).json(messages)

  } catch (error) {
    console.error("Error in the getMessage controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}