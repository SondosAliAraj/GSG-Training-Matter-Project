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
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
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
  const [cookie, setCookie] = useCookies();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };
  const handleLoginButton = async (e) => {
    // e.preventDefault();
    console.log(formData);

    // const data =
    await axios.post(
      "http://restapi.adequateshop.com/api/authaccount/login",
      formData
    );
    // console.log({ data });
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
          value={formData.email}
          label="Email"
          placeholder="Enter email"
          fullWidth
          required
          onChange={handleEmailChange}
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
            onClick={async () => {
              console.log(formData);

              const {
                data: {
                  data: { Token, Name, Id },
                },
              } = await axios.post(
                "http://restapi.adequateshop.com/api/authaccount/login",
                formData
              );

              console.log({ Token, Name, Id });
              setCookie("token", Token);
              setCookie("name", Name);
              setCookie("id", Id);
              navigate("/");
            }}
          >
            Sign in
          </Button>
        {/* <button onClick={handleLoginButton}>submit</button> */}
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
