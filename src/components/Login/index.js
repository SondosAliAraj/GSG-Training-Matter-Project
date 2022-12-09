import React, { useState } from "react";
import axios from "axios";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "75vh",
    width: 300,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const [formData, setFormData] = useState({});

  const handleUserNameChange = (e) => {
    setFormData({ ...formData, userName: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };
  const handleLoginButton = async() => {
      console.log(formData);

    const data= await axios.get(
      "https://restapi.adequateshop.com/api/authaccount/login",
      formData
          );
      console.log({data})
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          value={formData.userName}
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          onChange={handleUserNameChange}
        />
        <TextField
          value={formData.password}
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          onChange={handlePasswordChange}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />

        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
                  onClick={async() => {
              console.log(formData);

    const data= await axios.post(
      "https://restapi.adequateshop.com/api/authaccount/login",
      formData
          );
      console.log({data})
          }}
        >
          Sign in
              </Button>
              <button onClick={handleLoginButton}>submit</button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        {/* <Typography>
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography> */}
      </Paper>
    </Grid>
  );
};

export default Login;
