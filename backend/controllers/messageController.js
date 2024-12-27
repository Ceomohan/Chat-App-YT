import Conversation from "../Models/conversationModel.js";
import Message from "../Models/messageModel.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // await conversation.save();
    // await newMessage.save();

    // this will run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    // Respond with the new message
    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error in the sendMessage controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation || !conversation.messages) {
      return res.status(200).json([]); // Return an empty array if no messages found
    }

    const messages = conversation.messages;

    res.status(200).json(messages);
   
  } catch (error) {
    console.error("Error in the getMessage controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
