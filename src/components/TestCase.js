import React, { Component } from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import data from "../sample_test"; 
import Divider from '@material-ui/core/Divider';


const style = {
    fontSize: '12px',
    position: 'relative',
    paddingTop: '25px',
};

class TestCase extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tc: data.testCase,
             selectedTc: data.testCase[0].name
        }
    }

    handleChange = (event) => {
        this.setState({
            selectedTc: event.target.value
        })
    }

    render() {
        return (
            <div style={style}>
                <TextField
                    id="tc-name"
                    select
                    value={this.state.selectedTc}
                    onChange={this.handleChange}
                    label="select TC"
                    variant="outlined"
                >
                    {this.state.tc.map((option) => (
                    <MenuItem key={option.name} value={option.name}>
                    {option.name}
                    </MenuItem>
                    ))}
                </TextField>
          </div>
        )
    }
}

export default TestCase
