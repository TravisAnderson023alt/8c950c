import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Box from '@material-ui/core/Box';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField, Input } from '@material-ui/core';

export const UploadImage = ({ open, setOpen, otherUser,
    postMessage,
    conversationId,
    user, }) => {
    const [formState, setFormState] = useState({ caption: '', image: [] });

    const handleClose = () => {
        setOpen(false);
    };

    const handleUpload = async () => {
        let formData = new FormData()
        formState.image.forEach(file => {
            formData.append('image', file)
        })
        try {
            const images = formData.getAll('image')
            const tasks = images.map(async (image) => {
                const response = await fetch('https://api.imgur.com/3/image', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Client-ID 9b53c90f4ae19d0',
                    },
                    body: image
                })
                return await response.json()
            })
            const data = await Promise.all(tasks)
            const links = data.map(image => image.data.link)
            const reqBody = {
                text: formState.caption,
                recipientId: otherUser.id,
                conversationId,
                sender: conversationId ? null : user,
                attachments: links,
            };
            await postMessage(reqBody);
            setOpen(false);
        } catch (e) {
            console.log(e)
            setOpen(false);
        }

    };




    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Upload an image</DialogTitle>

            <DialogContent>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    Caption:
                    <TextField
                        autoFocus
                        style={{ paddingLeft: '10px', width: '40vw' }}
                        onChange={(e) => setFormState({ ...formState, caption: e.target.value })}
                    />
                </Box>
                <Box style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                    Image:
                    <Input type="file"
                        id="file" name="file"
                        onChange={(e) => setFormState({ ...formState, image: Object.values(e.target.files) })}
                        accept="image/png, image/jpeg"
                        style={{ paddingLeft: '10px' }}
                        inputProps={{ multiple: true }}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => handleUpload()} color="primary" autoFocus>
                    Upload
                </Button>
            </DialogActions>
        </Dialog >
    )
}