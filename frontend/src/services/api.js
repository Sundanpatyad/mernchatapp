import axios from 'axios';


const url = `${window.location.origin}`;

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);
    } catch (error) {
        console.error("Error:", error.message);
    }
};

export const getUsers = async () =>{
    try{
       let response = await axios.get(`${url}/users`);
       return response.data;
    } catch(e){
        console.log("error while calling",e.message)
    }
}
export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log('Error while calling setConversation API ', error);
    }
}
export const getConversation = async (users) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, users);
        return response.data;
    } catch (error) {
        console.log('Error while calling getConversation API ', error);
    }
}

export const newMessage = async (data) =>{
    try{
       await axios.post (`${url}/message/add`, data)

    }catch(e){
        console.log("Error While calling newMessage api", e.message)
    }
}

export const getMessages = async (id) => {
    console.log(id);
    try {
        
        let response = await axios.get (`${url}/message/get/${id}`);
        return response.data
    } catch (error) {
        console.log('Error while calling getMessages API ', error.message);
    }
}

 export const uploadFile = async (data) => {
  
    try {
        return await axios.post(`${url}/file/upload`, data);
    } catch (error) {
        console.log('Error while uploading file: ', error);
        throw error; 
    }
};
