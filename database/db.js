import mongoose from "mongoose";

const URL ="mongodb+srv://user1:xyz123abc@cluster0.vrj0gwa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&tls=true";
const Connection  = async ()=>{
try{ 
    await mongoose.connect(URL);
    console.log("DataBase Connected SocessFully")
} catch(error){
    console.log("Error While Connection ", error.message);

}
}
export default Connection;