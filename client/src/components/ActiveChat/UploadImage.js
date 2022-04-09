import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Box from '@material-ui/core/Box';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField, Input } from '@material-ui/core';

export const UploadImage = ({ open, setOpen }) => {

    const handleClose = () => {
        setOpen(false);
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
                    />
                </Box>
                <Box style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                    Image:
                    <Input type="file"
                        id="avatar" name="avatar"
                        accept="image/png, image/jpeg"
                        style={{ paddingLeft: '10px' }}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Upload
                </Button>
            </DialogActions>
        </Dialog >
    )
}