// AuthPage.jsx
import  { useState } from 'react';
import { TextField, Button, Typography, Alert } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './AuthPage.css'; // Import CSS file for custom styling

// Define the custom primary color
const theme = createTheme({
  palette: {
    primary: {
      main: '#1565c0', // Blue color
    },
  },
});

const AuthPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // If all validations pass
    setError(null);
    setSuccess("User Created Succesfully")
    
    // Log form data to console
    console.log('Form data:', formData);
    
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="auth-page">
        <Typography variant="h4" color="primary" gutterBottom>
          <div className="signup-text">
            <span className="signup">SignUp</span> to Continue
          </div>
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
       
        <form onSubmit={handleSubmit} className="auth-form">
          <TextField
            name="firstName"
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            name="lastName"
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default AuthPage;
