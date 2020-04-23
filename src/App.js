import React from 'react';
import './App.css';
import FlowInfo from './components/FlowInfo';
import Drop from './components/Drop';
import TestCase from './components/TestCase';
import Button from '@material-ui/core/Button';


function App() {
  return (
    <div className="App">
      <div style={{
          paddingTop: '50px',
        }}>
        <Button variant="contained" color="primary" disableElevation>
          Save
        </Button>
        <Button variant="contained" color="primary" disableElevation>
          Cancel
        </Button>
      </div>
      <TestCase/>
      <FlowInfo/>
      <Drop/>
    </div>
  );
}

export default App;
