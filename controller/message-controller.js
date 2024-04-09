import message from "../model/message.js"
import conversation from "../model/conversation.js";
export const newMessage = async (req , res) =>{
  
  try{
    const newMessage = new message(req.body);

   await newMessage.save();
   await conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.text})
   return res.status(200).json("Message Has Been send Sucessfully");
  }catch(e){
    return res.status(500).json(e.message);
   
  }

}
export const getMessages = async (req, res) => {
  console.log(req.params.id);
  try {
      const messages = await message.find({ conversationId: req.params.id });
     

      if (!messages) {
          return res.status(404).json({ message: 'No messages found for the specified conversation ID' });
      }

      return res.status(200).json(messages);
  } catch (error) {
      console.error('Error while fetching messages:', error);
      return res.status(500).json({ message: 'Internal server error' });
  }
};