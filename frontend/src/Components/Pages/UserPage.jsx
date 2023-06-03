import React from "react";
import "../Styling/UserPage.css";
import Header from "../Header";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
function UserPage() {
  const details = [
    {
      title: "sgfdsfg",
      description:
        "asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre",
      date: "23/1/2023",
      duration: "12",
      status: "confirmed",
    },
    {
      title: "sgfdsfg",
      description:
        "asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre",
      date: "23/1/2023",
      duration: "12",
      status: "confirmed",
    },
    {
      title: "sgfdsfg",
      description:
        "asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre",
      date: "23/1/2023",
      duration: "12",
      status: "confirmed",
    },
    {
      title: "sgfdsfg",
      description:
        "asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre",
      date: "23/1/2023",
      duration: "12",
      status: "confirmed",
    },
    {
      title: "sgfdsfg",
      description:
        "asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre",
      date: "23/1/2023",
      duration: "12",
      status: "confirmed",
    },
    {
      title: "sgfdsfg",
      description:
        "asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre asdfhkj jqjqewhr qwer ewqrqwe rwqer qwerqr qre",
      date: "23/1/2023",
      duration: "12",
      status: "confirmed",
    },
  ];

  const [open2, setOpen2] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState("");
  const [duration, setDuration] = React.useState("");

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open1, setOpen1] = React.useState(false);

  const [limit, setLimit] = React.useState("");
  const handleLimitChange = (e) => {
    setLimit(e.target.value);
  };
  const [status, setStatus] = React.useState("");
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  const [location, setLocation] = React.useState("");
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };
  const handleSubmit1 = () => {
    axios
      .post("http://localhost:3000/create-event", {
        title: title,
        description: description,
        date: date,
        duration: duration,
        limit: limit,
        status: status,
        location: location,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <div className="maindiv">
        <div onClick={handleClickOpen1} className="creatediv">
          <AddCircleOutlineIcon
            style={{ fontSize: "80px", marginLeft: "45%", marginTop: "4.5%" }}
          />
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
              onChange={handleTitleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleDescriptionChange}
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
              onChange={handleDateChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="duration"
              label="Duration of event"
              type="number"
              fullWidth
              variant="standard"
              onChange={handleDurationChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="Limit"
              label="Limit of event"
              type="number"
              fullWidth
              variant="standard"
              onChange={handleLimitChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="Status"
              label="Status of event"
              type="number"
              fullWidth
              variant="standard"
              onChange={handleStatusChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="Location"
              label="Location of event"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleLocationChange}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="error" onClick={handleClose1}>
              Cancel
            </Button>
            <Button variant="contained" color="success" onClick={handleSubmit1}>
              Submit
            </Button>
            <br />
            <br />
          </DialogActions>
        </Dialog>
        <Header />
        <div className="container row" style={{ paddingLeft: "120px" }}>
          {details.map((detail) => (
            <div className="col-md-4 mt-2">
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
                  <Button variant="contained" color="error" size="small">
                    Delete
                  </Button>
                  <Button
                    onClick={handleClickOpen2}
                    variant="contained"
                    color="success"
                    size="small"
                  >
                    Edit
                  </Button>
                </CardActions>
                <p style={{ float: "right", marginRight: "20px" }}>
                  <b>Duration:</b> {detail.duration} hours
                </p>
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
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleClose2}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleClose2}
                  >
                    Submit
                  </Button>
                  <br />
                  <br />
                </DialogActions>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserPage;
