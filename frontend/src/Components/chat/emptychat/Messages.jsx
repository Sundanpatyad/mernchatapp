import React, { useEffect, useContext, useState ,useRef } from 'react';
import { Box, styled } from '@mui/material';
import Footer from './Footer';
import { AccountContext } from '../../../context/AccountProvieder';
import { getMessages, newMessage } from '../../../services/api';
import Message from './Message';

const Wrapper = styled(Box)`
    background-image: url("");
    background-color:#1a1a1a;
`;

const Component = styled(Box)`
    height: 76vh;
    overflow-y: scroll;
    backgorund-color:#1a1a1a;
    padding-bottom:10px;
`;

function Messages({ person, conversation }) {
    const { account , socket ,setNewMessageFlag , newMessageFlag } = useContext(AccountContext);
    const [messages, setMessages] = useState([]);
    const [file , setFile] = useState();
    const [incomingMessage, setIncomingMessage] = useState(null);


    const scrollRef = useRef();

    console.log(conversation._id);

    useEffect(()=>{
        socket.current.on('getMessage',data =>{
        setIncomingMessage({
            ...data,
            createdAt: Date.now()
        })
        })
    },[socket])
  
    useEffect(() => {
        const getMessageDetails = async () => {
            if (conversation._id) {
                let data = await getMessages(conversation._id);
                setMessages(data);
            }
        };
        getMessageDetails();
    }, [conversation._id, person._id , newMessageFlag]  );

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({ transition:'smooth'})
    },[messages])


    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && 
            setMessages((prev) => [...prev, incomingMessage]);
        
    }, [incomingMessage, conversation]);



    const [value, setValue] = useState('');

    const sendText = async (e) => {
        const code = e.keyCode || e.which;
        if (code === 13) {
            let message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: 'text',
                text: value,
            };

            socket.current.emit('sendMessage' , message )

            await newMessage(message);

            setValue('');
            setNewMessageFlag(prev => !prev);
        }
    };

    return (
        <Wrapper>
            <Component>
                {messages.map((message, index) => (
                    <Box ref={scrollRef}>
                        <Message key={index} message={message} />
                    </Box>
                ))}
            </Component>
            <Footer 
            sendText={sendText} 
            setValue={setValue} 
            value={value}
            file={file}
            setFile={setFile} />
        </Wrapper>
    );
}

export default Messages;
