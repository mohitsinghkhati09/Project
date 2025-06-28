// project-client/src/pages/NewUserRegister.js
import React, { useState } from 'react';
import {
  Container, Paper, Typography, TextField, Button, Box,
  Link as MuiLink, IconButton, InputAdornment, CircularProgress,
  Grid, Avatar, Alert, Stack
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

// Configure your server link (ensure it's correct for your setup)
const serverLink = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";
const REGISTRATION_ENDPOINT = "/api/auth/new-register"; // Ensure this matches your backend route

export default function NewUserRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({}); // For client-side validation errors
  const [apiError, setApiError] = useState(''); // For API submission errors
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear specific error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
    setApiError(''); // Clear general API error
    setSuccessMessage('');
  };

  const handleTogglePasswordVisibility = () => setShowPassword(!showPassword);
  const handleToggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  // Basic Client-Side Validation (can be enhanced)
  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required.";
    else if (formData.username.length < 3) newErrors.username = "Username too short (min 3).";
    else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) newErrors.username = "Username invalid characters.";


    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format.";

    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 8) newErrors.password = "Password too short (min 8).";

    if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm password is required.";
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";

    // Optional fields don't need presence validation unless they have format requirements if filled
    if (formData.phoneNumber.trim() && !/^\+?[0-9\s-()]*$/.test(formData.phoneNumber)) {
        newErrors.phoneNumber = "Invalid phone number format.";
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    setSuccessMessage('');

    if (!validateForm()) {
      setApiError("Please correct the errors highlighted below.");
      return;
    }

    setLoading(true);

    // Data to send (excluding confirmPassword)
    const dataToSubmit = {
      username: formData.username.trim(),
      email: formData.email.trim(),
      password: formData.password,
      firstName: formData.firstName.trim() || undefined, // Send undefined if empty
      lastName: formData.lastName.trim() || undefined,   // Send undefined if empty
      phoneNumber: formData.phoneNumber.trim() || undefined,
    };

    try {
      const response = await axios.post(`${serverLink}${REGISTRATION_ENDPOINT}`, dataToSubmit);
      
      setSuccessMessage(response.data.message || "Registration successful! Please proceed to login.");
      setFormData({ username: '', email: '', password: '', confirmPassword: '', firstName: '', lastName: '', phoneNumber: '' }); // Clear form
      // Optionally redirect after a delay
      setTimeout(() => navigate('/user-login'), 3000); // Adjust as needed

    } catch (err) {
      console.error("Registration API Error:", err);
      if (err.response && err.response.data && err.response.data.errors) {
        // Handle array of error objects from backend
        const backendErrors = err.response.data.errors;
        let errorMsg = backendErrors.map(e => e.msg).join(' ');
        setApiError(errorMsg || 'Registration failed. Please check your input.');
        // Optional: Map backend errors to specific fields
        // const fieldErrors = {};
        // backendErrors.forEach(e => { if(e.param) fieldErrors[e.param] = e.msg; });
        // setErrors(prev => ({...prev, ...fieldErrors}));
      } else if (err.response && err.response.data && err.response.data.message) {
        setApiError(err.response.data.message);
      } else if (err.request) {
        setApiError('No response from server. Please check your network connection.');
      } else {
        setApiError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ py: { xs: 2, md: 4 }, mt: {xs: 2, md:4} }}>
      <Paper elevation={3} sx={{ padding: { xs: 2, sm: 3, md: 4 }, borderRadius: 2 }}>
        <Stack alignItems="center" spacing={2} mb={3}>
          <Avatar sx={{ bgcolor: 'secondary.main', width: 56, height: 56 }}>
            <PersonAddIcon fontSize="large" />
          </Avatar>
          <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
            Create New Account
          </Typography>
        </Stack>

        {apiError && (
          <Alert severity="error" sx={{ width: '100%', mb: 2 }} onClose={() => setApiError('')}>
            {apiError}
          </Alert>
        )}
        {successMessage && (
          <Alert severity="success" sx={{ width: '100%', mb: 2 }}>
            {successMessage}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={formData.username}
                onChange={handleChange}
                error={!!errors.username}
                helperText={errors.username}
                disabled={loading}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                disabled={loading}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password (min 8 characters)"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                disabled={loading}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility" onClick={handleTogglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                disabled={loading}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle confirm password visibility" onClick={handleToggleConfirmPasswordVisibility} edge="end">
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="firstName"
                label="First Name (Optional)"
                name="firstName"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
                disabled={loading}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                label="Last Name (Optional)"
                name="lastName"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
                disabled={loading}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="phoneNumber"
                label="Phone Number (Optional)"
                name="phoneNumber"
                type="tel"
                autoComplete="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
                disabled={loading}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            sx={{ mt: 3, mb: 2, py: 1.5, fontSize: '1rem', fontWeight: 'bold' }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Create Account'}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <MuiLink component={RouterLink} to="/user-login" variant="body2">
                Already have an account? Sign in
              </MuiLink>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
        By creating an account, you agree to our Terms of Service.
      </Typography>
    </Container>
  );
}