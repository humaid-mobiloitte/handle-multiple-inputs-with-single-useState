import { useState } from 'react';
import {CssBaseline } from '@mui/material';
import TopNavBar from './assets/topNavBar';
import Form from './assets/form';

function App() {
  return (
    <>
      <CssBaseline/>
      <div style={{backgroundColor:'#3B270C', overflow:'auto'}}>
        <TopNavBar/>
        {/* Conditional Rendering for Login and Signup */}
        <Form />
      </div>
    </>
  );
}

export default App;
