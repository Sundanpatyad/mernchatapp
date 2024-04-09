import { useEffect } from 'react';

import { EmojiEmotions,  Mic } from '@mui/icons-material';
import { Box, styled, InputBase } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { uploadFile } from '../../../services/api';

const Container = styled(Box)`
height: 55px;
display: flex;
align-items: center;

padding: 0px 20px;
& > * {
    margin: 5px;
}
`;

const Search = styled(Box)`
    border-radius: 18px;
    background-color:#1f1f1f;
    width: calc(94% - 100px);
`;

const Input = styled(InputBase)`

padding: 20px;
height: 20px; /* This height might be too small for input, consider increasing */
padding-left: 20px;
font-size: 14px; /* Changed font-size-14px to font-size: 14px */
color: #dadada;
`;


const ClipIcon = styled(AddCircleIcon)`
    transform: 'rotate(40deg)'
`;


const Footer = ({ sendText, value, setValue, setFile, file, setImage }) => {
    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append('file', file);

                try {
                    const response = await uploadFile(data);
                    setImage(response.data);
                } catch (error) {
                    console.error('Error uploading file:', error);
                }
            }
        };
        getImage();
    }, [file, setImage]);

    const onFileChange = (e) => {
        setValue(e.target.files[0].name);
        setFile(e.target.files[0]);
    };

    return (
        <Container>
            <EmojiEmotions />
            <label htmlFor="fileInput">
                <ClipIcon />
            </label>
            <input
                type='file'
                id="fileInput"
                style={{ display: 'none' }}
                onChange={(e) => onFileChange(e)}
            />
            
            
            

            <Search>
                <Input
                    placeholder="Type a message"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e) => sendText(e)}
                    value={value}
                />
            </Search>
            <Mic />
        </Container>
    )
}

export default Footer;