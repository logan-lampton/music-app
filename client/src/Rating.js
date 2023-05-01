import axios from "axios";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Alert from "@mui/material/Alert";

// Submit the rating
// Update the database existing entry with a patch request
// Display the rating on the screen after it's given

function Rating({ id, rating, setData }) {
  const handleYeah = () => {
    axios
      .patch(`/api/videos/${id}`, {
        rating: "Let's add to the playlist!",
      })
      .then(
        (response) => {
          console.log("This is my response:", response);
          axios.get("/api/videos").then((response) => setData(response.data));
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const handleNo = () => {
    axios
      .patch(`/api/videos/${id}`, {
        rating: "Not at my wedding!!!",
      })
      .then(
        (response) => {
          console.log(response);
          axios.get("/api/videos").then((response) => setData(response.data));
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          component: "nav",
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <Divider />
          <h2>Worth Playing at our wedding?</h2>
          <nav>
            <List>
              <ListItem disablePadding>
                <Stack direction='row' spacing={2}>
                  <Button
                    variant='contained'
                    color='success'
                    className='yes'
                    onClick={handleYeah}
                  >
                    Heck yeah!
                  </Button>
                  <Button
                    variant='outlined'
                    color='error'
                    className='no'
                    onClick={handleNo}
                  >
                    No way!
                  </Button>
                </Stack>
              </ListItem>
            </List>
          </nav>
        </div>
      </Box>
      <div
        className='approval'
        style={{ position: "absolute", top: "20%", left: "0", width: "100%" }}
      >
        {rating && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            {rating === "Let's add to the playlist!" ? (
              <Alert
                severity='success'
                style={{ fontWeight: "bold", backgroundColor: "#00e676" }}
              >
                <h2>THE BRIDE HAS SPOKEN!</h2> <h3>{rating}</h3>
              </Alert>
            ) : (
              <Alert
                severity='error'
                style={{ fontWeight: "bold", backgroundColor: "#ff1744" }}
              >
                <h2>THE BRIDE HAS SPOKEN!</h2> <h3>{rating}</h3>
              </Alert>
            )}
          </Stack>
        )}
      </div>
    </>
  );
}

export default Rating;
