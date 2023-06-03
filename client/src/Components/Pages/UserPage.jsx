import React from 'react'
import '../Styling/UserPage.css'
import Header from '../Header'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function UserPage() {

    const details = [
        { title: 'sgfdsfg', description: 'asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre', date: '23/1/2023', duration: '12', status: 'confirmed' },
        { title: 'sgfdsfg', description: 'asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre', date: '23/1/2023', duration: '12', status: 'confirmed' },
        { title: 'sgfdsfg', description: 'asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre', date: '23/1/2023', duration: '12', status: 'confirmed' },
        { title: 'sgfdsfg', description: 'asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre', date: '23/1/2023', duration: '12', status: 'confirmed' },
        { title: 'sgfdsfg', description: 'asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre', date: '23/1/2023', duration: '12', status: 'confirmed' },
        { title: 'sgfdsfg', description: 'asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre', date: '23/1/2023', duration: '12', status: 'confirmed' },
    ]

    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    const [open1, setOpen1] = React.useState(false);

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    return (
        <div>
            <div className='maindiv'>
                <div onClick={handleClickOpen1} className='creatediv'>
                    <AddCircleOutlineIcon style={{ fontSize: '80px', marginLeft: '45%', marginTop: '4.5%' }} />
                </div>
                <Dialog open={open1} onClose={handleClose1}>
                    <DialogTitle>Enter The Details</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="title"
                            label="Title"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="description"
                            label="Description"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <br />
                        <br />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="date"
                            type="date"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="duration"
                            label="Duration of event"
                            type="number"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button variant='contained' color='error' onClick={handleClose1}>Cancel</Button>
                        <Button variant='contained' color='success' onClick={handleClose1}>Submit</Button>
                        <br />
                        <br />
                    </DialogActions>
                </Dialog>
                <Header />
                <div className='container row' style={{ paddingLeft: '120px' }}>

                    {details.map((detail) => (
                        <div className='col-md-4 mt-2'>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {detail.title}
                                    </Typography>
                                    <p>Posted on: {detail.date}</p>
                                    <Typography variant="body2" color="text.secondary">
                                        {detail.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant='contained' color='error' size="small">Delete</Button>
                                    <Button onClick={handleClickOpen2} variant='contained' color='success' size="small">Edit</Button>
                                </CardActions>
                                <p style={{ float: 'right', marginRight: '20px' }}><b>Duration:</b> {detail.duration} hours</p>
                            </Card>
                            <Dialog open={open2} onClose={handleClose2}>
                                <DialogTitle>Enter The Details</DialogTitle>
                                <DialogContent>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        value={detail.title}
                                        id="title"
                                        label="Title"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="description"
                                        value={detail.description}
                                        label="Description"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                    />
                                    <br />
                                    <br />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        value={detail.date}
                                        id="date"
                                        type="date"
                                        fullWidth
                                        variant="standard"
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="duration"
                                        value={detail.duration}
                                        label="Duration of event"
                                        type="number"
                                        fullWidth
                                        variant="standard"
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button variant='contained' color='error' onClick={handleClose2}>Cancel</Button>
                                    <Button variant='contained' color='success' onClick={handleClose2}>Submit</Button>
                                    <br />
                                    <br />
                                </DialogActions>
                            </Dialog>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserPage