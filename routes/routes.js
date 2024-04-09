import  express  from "express";
import { addUser, getUsers } from "../controller/user-controller.js";
import { newConversation,getConversation } from "../controller/conversation.js";
import { newMessage , getMessages} from "../controller/message-controller.js";
import { uploadImage , getImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";

const route = express.Router();

route.post('/add', addUser);
route.get('/users',getUsers);

route.post('/conversation/add', newConversation);

route.post('/conversation/get', getConversation);
route.post('/message/add', newMessage)
route.get('/message/get/:id', getMessages);

route.post('/upload', upload.single('file'), async (req, res) => {
    const { filename, path, originalname, mimetype, size } = req.file;

    try {
        const fileData = new File({
            filename,
            path,
            originalname,
            mimetype,
            size
        });
        await fileData.save();
        console.log('File metadata saved to the database');
    } catch (error) {
        console.error('Error saving file metadata:', error);
        return res.status(500).send('Error saving file metadata');
    }

    res.send('File uploaded and metadata saved to the database!');
});

route.get('/file/:filenam', getImage);

export default route;