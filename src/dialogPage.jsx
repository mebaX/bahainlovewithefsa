import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

class DialogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.box = "/box-close.png"
    }

    handleOpen = () => {
        this.setState({ open: true });
        this.box = "/box-open.png"
    }

    handleClose = () => {
        this.setState({ open: false });
    }


    render() {
        const { media = "/efsaandbaha/5 ekim starbucks.mp4", description = "" } = this.props;
        if (media.includes(".mp4")) {
            var type = "video";
        } else {
            var type = "img";
        }
        return (
            <>
                <Button
                    onClick={this.handleOpen}
                >
                    <img width='300px' height='300px' src={this.box} alt="" />
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <DialogContent style={{ maxWidth: '600px', overflowWrap: 'break-word' }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '600px'
                        }}>
                            <Card style={{ maxWidth: '100%' }}>
                                <CardMedia
                                    component={type}
                                    src={media}
                                    height="500"
                                    style={{ width: '100%' }}
                                    controls
                                    autoPlay
                                />
                            </Card>
                            <Typography
                                variant="subtitle1"
                                style={{
                                    maxWidth: '350px',
                                    wordBreak: 'break-word',
                                    marginTop: '10px',
                                    textAlign: 'center'
                                }}
                            >
                                {description}
                            </Typography>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose}>Kapat</Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
}

export default DialogPage;
