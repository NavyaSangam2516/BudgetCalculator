import React from 'react';
import { Box, Typography } from '@mui/material';
import './Trends.css';

const Trends = () => {
  const trendsData = [
    {
      location: 'Mumbai',
      budget: '₹1.5 Cr',
      description: 'Spacious 3 BHK in a prime locality with sea view.',
    },
    {
      location: 'Bangalore',
      budget: '₹1.2 Cr',
      description: 'Modern 2 BHK in a gated community with all amenities.',
    },
    {
      location: 'Delhi',
      budget: '₹90 Lac',
      description: 'Affordable 2 BHK in a central location with great connectivity.',
    },
  ];

  return (
    <section className="trends-section">
      <Typography variant="h4" className="trends-heading">
        Present Trends of Houses Under Budget
      </Typography>
      <div className="trends-list">
        {trendsData.map((trend, index) => (
          <Box
            key={index}
            className="trend-item"
            sx={{
              padding: '15px',
              borderRadius: '10px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#ffffff',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <Typography variant="h6" className="trend-location">
              {trend.location}
            </Typography>
            <Typography variant="body1" className="trend-budget">
              <strong>Budget:</strong> {trend.budget}
            </Typography>
            <Typography variant="body2" className="trend-description">
              {trend.description}
            </Typography>
          </Box>
        ))}
      </div>
    </section>
  );
};

export default Trends;
