import React, { useState } from 'react';
import { Button, TextField, Box, Stepper, Step, StepLabel } from '@mui/material';
import axios from 'axios';

const steps = ['Personal Details', 'Identity Proof', 'Documents'];

const RegistrationForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
    adharcard: '',
    pan: '',
    document: null,
  });
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    if (validateStep()) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: files ? files[0] : value,
    }));
  };

  const validateStep = () => {
    const newErrors = {};
    switch (activeStep) {
      case 0:
        if (!formValues.name) newErrors.name = 'Name is required';
        if (!formValues.phone) newErrors.phone = 'Phone number is required';
        if (!formValues.email) newErrors.email = 'Email is required';
        break;
      case 1:
        if (!formValues.adharcard) newErrors.adharcard = 'Aadhaar card number is required';
        if (!formValues.pan) newErrors.pan = 'PAN number is required';
        break;
      case 2:
        if (!formValues.document) newErrors.document = 'Document is required';
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateStep()) {
      try {
        const formData = new FormData();
        Object.keys(formValues).forEach((key) => {
          formData.append(key, formValues[key]);
        });
        console.log('Submitting form data:', formData);

        await axios.post('/api/register', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        alert('Registration successful');
      } catch (error) {
        console.error('Error registering:', error);
        alert('Registration failed');
      }
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ p: 3 }}>
        {activeStep === 0 && (
          <Box>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
              error={Boolean(errors.phone)}
              helperText={errors.phone}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              margin="normal"
            />
          </Box>
        )}
        {activeStep === 1 && (
          <Box>
            <TextField
              fullWidth
              label="Aadhaar Card Number"
              name="adharcard"
              value={formValues.adharcard}
              onChange={handleChange}
              error={Boolean(errors.adharcard)}
              helperText={errors.adharcard}
              margin="normal"
            />
            <TextField
              fullWidth
              label="PAN Number"
              name="pan"
              value={formValues.pan}
              onChange={handleChange}
              error={Boolean(errors.pan)}
              helperText={errors.pan}
              margin="normal"
            />
          </Box>
        )}
        {activeStep === 2 && (
          <Box>
            <TextField
              fullWidth
              label="Upload Document (PDF only)"
              name="document"
              type="file"
              inputProps={{ accept: '.pdf' }}
              onChange={handleChange}
              error={Boolean(errors.document)}
              helperText={errors.document}
              margin="normal"
            />
          </Box>
        )}
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
          >
            Next
          </Button>
          <Button
            variant="contained"
            color="secondary"





            
            onClick={handleBack}
            sx={{ ml: 2 }}
            disabled={activeStep === 0}
          >
            Back
          </Button>
          {activeStep === steps.length - 1 && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ ml: 2 }}
            >
              Submit
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default RegistrationForm;
