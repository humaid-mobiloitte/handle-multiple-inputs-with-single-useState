import { Typography, Button, Card, CardContent, TextField, Grid, Container, Box } from '@mui/material';
import styles from './styling/styles';
import ImageContent from './imageContent';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react';

export default function Form() {
  const initialFormState = {
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    gender: 'female',
    subjects: {
      english: false,
      physics: false,
      chemistry: false,
    },
    countryCode: '+1',
  };

  const [formState, setFormState] = useState(initialFormState);

  const countryCodes = [
    { code: '+1', country: 'USA' },
    { code: '+44', country: 'UK' },
    { code: '+91', country: 'IND' },
    { code: '+61', country: 'AUS' },
    { code: '+81', country: 'JPN' }
  ];

  // Handle text field changes
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      subjects: {
        ...prevState.subjects,
        [name]: checked,
      },
    }));
  };

  // Handle gender radio button change
  const handleGenderChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      gender: e.target.value,
    }));
  };

  // Handle country code change
  const handleCountryCodeChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      countryCode: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log(formState);
  };

  // Reset form to initial state
  const resetForm = () => {
    setFormState(initialFormState);
  };

  return (
    <Container maxWidth="md" sx={styles.container}>
      <Card sx={styles.card}>
        <Grid container>
          {/* Left Side - Image */}
          <ImageContent />
          
          {/* Right Side - Login Form */}
          <Grid item xs={12} md={6} sx={styles.formContainer}>
            <CardContent>
              <Typography variant="h4" sx={styles.title}>Login</Typography>

              {/* Name Section */}
              <Box sx={styles.inputGroup}>
                <TextField
                  fullWidth
                  label="Please enter your name"
                  variant="outlined"
                  name="name"
                  value={formState.name}
                  onChange={handleTextChange}
                />
              </Box>

              {/* Email Section */}
              <Box sx={styles.inputGroup}>
                <TextField
                  fullWidth
                  label="Please enter your email"
                  variant="outlined"
                  name="email"
                  value={formState.email}
                  onChange={handleTextChange}
                />
              </Box>

              {/* Password Section */}
              <Box sx={styles.inputGroup}>
                <TextField
                  fullWidth
                  label="Please enter your password"
                  type="password"
                  variant="outlined"
                  name="password"
                  value={formState.password}
                  onChange={handleTextChange}
                />
              </Box>

              {/* Phone Number Section */}
              <Box sx={styles.inputGroup}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Select
                      value={formState.countryCode}
                      onChange={handleCountryCodeChange}
                    >
                      {countryCodes.map((item) => (
                        <MenuItem key={item.code} value={item.code}>
                          {item.country} ({item.code})
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <TextField
                      fullWidth
                      label="Please enter your mobile number"
                      variant="outlined"
                      name="phoneNumber"
                      value={formState.phoneNumber}
                      onChange={handleTextChange}
                    />
                  </Grid>
                </Grid>
              </Box>

              {/* Gender Section */}
              <Box>
                <RadioGroup
                  row
                  value={formState.gender}
                  onChange={handleGenderChange}
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
              </Box>

              {/* Subjects Section */}
              <Box>
                <FormControlLabel
                  control={<Checkbox name="english" checked={formState.subjects.english} onChange={handleCheckboxChange} />}
                  label="English"
                />
                <FormControlLabel
                  control={<Checkbox name="physics" checked={formState.subjects.physics} onChange={handleCheckboxChange} />}
                  label="Physics"
                />
                <FormControlLabel
                  control={<Checkbox name="chemistry" checked={formState.subjects.chemistry} onChange={handleCheckboxChange} />}
                  label="Chemistry"
                />
              </Box>

              {/* Centered Submit and Refresh Button */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                <Button variant="contained" color="primary" sx={styles.button} onClick={handleSubmit}>
                  SIGN UP
                </Button>
                <Button variant="contained" color="secondary" sx={{ mt: 2 }} onClick={resetForm}>
                  Refresh Form
                </Button>
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
