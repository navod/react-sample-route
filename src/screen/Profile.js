import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import { Button, Fab, Typography } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
const Profile = () => {
  const styles = usetStyle();
  return (
    <div style={{ padding: 25, paddingTop: 0 }}>
      <div style={{ height: 70 }}></div>
      <div style={{ height: 281, width: "100%", position: "relative" }}>
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 20,
          }}
          src="https://images.unsplash.com/photo-1581850518616-bcb8077a2336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <div className={styles.avatar}>
          <img
            style={{ width: "100%", height: "100%", borderRadius: "100%" }}
            src="https://images.unsplash.com/photo-1587987501183-33e43fdde781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=584&q=80"
          />
        </div>
      </div>
      <div style={{ marginTop: 60 }}>
        <Typography
          fontWeight="bolder"
          textAlign={"center"}
          variant="h4"
          style={{ marginBottom: 20 }}
        >
          BoredApeYachtClub
        </Typography>
        <div
          class="d-flex justify-content-center"
          style={{ alignItems: "center", marginBottom: 20 }}
        >
          <Typography
            style={{
              background:
                "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            variant="h5"
            fontWeight="bolder"
          >
            @boredapeyachtclub
          </Typography>
          <Button
            variant="contained"
            component="span"
            style={{
              backgroundColor: "#EBEBEB",
              color: "gray",
              borderRadius: 20,
              marginLeft: 20,
            }}
          >
            0xEBEBEB
          </Button>
        </div>
        <div style={{ textAlign: "center", fontWeight: "bold", color: "gray" }}>
          https://boredapeyachtclub.com/
        </div>

        <div class="d-flex justify-content-center" style={{ marginTop: 20 }}>
          <Fab
            size="medium"
            color="white"
            aria-label="add"
            style={{ backgroundColor: "white" }}
          >
            <FileUploadOutlinedIcon />
          </Fab>
          <Fab
            size="medium"
            color="white"
            aria-label="add"
            style={{ backgroundColor: "white", marginLeft: 20 }}
          >
            <MoreHorizTwoToneIcon />
          </Fab>
        </div>
      </div>
    </div>
  );
};

const usetStyle = makeStyles({
  avatar: {
    borderRadius: "100%",
    width: 150,
    backgroundColor: "white",
    height: 150,
    position: "absolute",
    right: 0,
    left: 0,
    margin: "auto",
    bottom: -50,
    padding: 20,
  },
});

export default Profile;
