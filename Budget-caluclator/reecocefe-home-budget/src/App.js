// // src/App.js

// import React, { useState } from 'react';
// import { Button } from '@mui/material';
// import HomeBudgetPopup from '../src/HomeBudgetPopup/HomeBudgetPopup';

// function App() {
//   const [openPopup, isPopupOpen, setOpenPopup] = useState(false);

//   const handleOpen = () => setOpenPopup(true);
//   const handleClose = () => setOpenPopup(false);

//   return (
//     <div>
//       <Button variant="contained" color="primary" onClick={handleOpen}>
//         Check Home Budget
//       </Button>
     
//       <HomeBudgetPopup open={openPopup} onClose={handleClose} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Header from './Header/Header';  // Adjust the import path as needed
import HomeBudgetPopup from './HomeBudgetPopup/HomeBudgetPopup';
import './App.css'; 
import Trends from './Trends/Trends';
import RegistrationForm from './RegistrationForm/RegistrationForm';
function App() {
  const [openPopup, setOpenPopup] = useState(false); // Corrected useState usage

  const handleOpen = () => setOpenPopup(true);
  const handleClose = () => setOpenPopup(false);

  return (
    <div>
      <Header/>
      
      <main className="main-content">
        <h1 className="main-heading">Creating Strong & Lasting Trust in Every Build</h1>
        <button className='calculate-button' onClick={handleOpen}>
           Calculate Home Budget
        </button>
        <HomeBudgetPopup open={openPopup} onClose={handleClose} />
        <Trends/>
        <RegistrationForm/>
      </main>
    </div>
  );
}

export default App;

