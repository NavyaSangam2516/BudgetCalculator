// src/HomeBudgetPopup.js

import React, { useState } from 'react';
import {
  Box,
  Slider,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import './HomeBudgetPopup.css'

const HomeBudgetPopup = ({ open, onClose }) => {
  const [savings, setSavings] = useState(0);
  const [emi, setEmi] = useState(20000);
  const [loanTenure, setLoanTenure] = useState(20);

  const calculateBudget = () => {
    const minBudget = (emi * loanTenure) + savings;
    const maxBudget = (emi * (loanTenure + 5)) + savings;

    const formatAmount = (amount) => {
      if (amount >= 10000000) {
        return `${(amount / 10000000).toFixed(2)} Cr`; // Convert to Crores
      } else {
        return `${(amount / 100000).toFixed(2)} Lacs`; // Convert to Lacs
      }
    };

    return `${formatAmount(minBudget)} - ${formatAmount(maxBudget)}`;
  };


  return (
    <Dialog open={open}
      onClose={onClose}
      maxWidth="md"  // Adjust the max width of the dialog
      fullWidth
      PaperProps={{
        style: {
          overflow: 'hidden',
          // maxWidth: '90vw'
        },
      }}
    >
      <DialogTitle className="dialog-title">Check your home buying budget</DialogTitle>
      <DialogContent className="dialog-content">
        <Box className="slider-box">
          <Typography gutterBottom>
            Savings for buying home: ₹{savings.toLocaleString()}
          </Typography>
          <Slider
            value={savings}
            onChange={(e, val) => setSavings(val)}
            min={0}
            max={200000000}
            step={10000}
            valueLabelDisplay="auto"
            marks={[
              { value: 0, label: '₹0' },
              { value: 200000000, label: '₹20 Cr' },
            ]}
          />
        </Box>
        <Box className="slider-box">
          <Typography gutterBottom>
            EMI you can afford: ₹{emi.toLocaleString()}
          </Typography>
          <Slider
            value={emi}
            onChange={(e, val) => setEmi(val)}
            min={1000}
            max={1000000}
            step={1000}
            valueLabelDisplay="auto"
            marks={[
              { value: 1000, label: '₹1,000' },
              { value: 1000000, label: '₹10 L' },
            ]}
          />
        </Box>
        <Box className="slider-box">
          <Typography gutterBottom>
            Preferred loan tenure: {loanTenure} Years
          </Typography>
          <Slider
            value={loanTenure}
            onChange={(e, val) => setLoanTenure(val)}
            min={1}
            max={30}
            step={1}
            valueLabelDisplay="auto"
            marks={[
              { value: 1, label: '1 yr' },
              { value: 30, label: '30 yrs' },
            ]}
          />
        </Box>
        <Typography className="budget-result" variant="h6">
          Your home budget: {calculateBudget()}
        </Typography>
        <Typography className="budget-estimation" variant="body2">
          *Estimated budget is calculated at an average interest rate of 8.75%
        </Typography>
      </DialogContent>
      <DialogActions className="dialog-actions">
        <Button onClick={onClose} color="primary" className="close-button">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default HomeBudgetPopup;
