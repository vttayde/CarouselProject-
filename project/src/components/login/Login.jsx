import React from 'react'
import { useState, Suspense } from 'react';
import { Grid, Paper, Avatar, TextField, Button, } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import EmailIcon from '@mui/icons-material/Email';

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {

    const paperStyle = { padding: 20, height: 'auto', width: 400, margin: "6% auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }

    const [userNameError, SetUserNameError] = useState(false);
    const [userPassError, SetUserPassError] = useState(false);
    const [userName, SetUserName] = useState("");
    const [userPass, SetUserPass] = useState("");
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const userNameInput = e => {
        // console.log("user name", e.target.value)
        SetUserName(e.target.value);
        if (e.target.value.length === 0) {
            SetUserNameError(true)
        } else {
            SetUserNameError(false)
        }
    }
    const userPassInput = e => {
        console.log("user pass", e.target.value)
        SetUserPass(e.target.value);
        if (e.target.value.length === 0) {
            SetUserPassError(true)
        } else {
            SetUserPassError(false)
        }
    }

    const authondication = e => {
        if (userName === "" || userName !== "admin") {
            SetUserNameError(true)
        } else {
            SetUserNameError(false)
        }
        if (userPass === "" || userPass !== "admin") {
            SetUserPassError(true)
        } else {
            SetUserPassError(false)
        }
        if (userName === "admin" && userPass === "admin") {
            localStorage.setItem('appToken', "userLogin");
            window.location.href = ('/dashboard');
        }
    }

    return (
        <Suspense fallback={<h3>Loading....</h3>}>
            <Grid container
                spacing={0}
                align="center"
                justify="center"
                direction="column">
                <Grid item>
                    <Paper elevation={12} style={paperStyle} >
                        <Grid>
                            <Grid item align='center'>
                                <Avatar style={avatarStyle}>
                                    <AccountCircleIcon />
                                </Avatar>
                                <h2>Login</h2>
                            </Grid>
                            <TextField
                                error={userNameError}
                                helperText={userNameError ? "Please enter user Name " : ""}
                                label='Username'
                                placeholder='Enter username'
                                variant="outlined"
                                id="outlined-start-adornment"
                                fullWidth
                                required
                                onChange={(e) => userNameInput(e)}
                                sx={{ mb: 2, }}
                                // endIcon={EmailIcon}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">
                                        <IconButton>
                                            <EmailIcon />
                                        </IconButton>
                                    </InputAdornment>,
                                }}
                            />
                            <TextField
                                error={userPassError}
                                helperText={userPassError ? "Please enter Password " : ""}
                                label='Password'
                                placeholder='Enter password'
                                type={showPassword ? 'text' : 'password'}
                                variant="outlined"
                                id="outlined-start-adornment"
                                fullWidth
                                onChange={(e) => userPassInput(e)}
                                required
                                sx={{ mb: 2, }}
                                value={userPass}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={(e) => handleClickShowPassword(e)}
                                            onMouseDown={(e) => handleMouseDownPassword(e)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>,
                                }}
                            />
                            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth endIcon={<KeyboardDoubleArrowRightIcon />} onClick={(e) => authondication(e)}>LOGIN </Button>
                        </Grid>

                    </Paper>
                </Grid>
            </Grid>
        </Suspense>
    )
}

export default Login