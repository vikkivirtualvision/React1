import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';


 
const style = {
    position: 'relative',
    paddingTop: '25px',
    paddingBottom: '10px',
};


class Drop extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ul_drop_values: [],
             ul_drop: "",
             dl_drop_values: [],
             dl_drop: ""
        }
    }
    

    handleULDropChange = (event) => {
        this.setState({
            ul_drop:event.target.value
        })
    }

    handleDLDropChange = (event) => {
        this.setState({
            dl_drop:event.target.value,
            dl_drop_values: event.target.value
            .split(',')
        })
        console.log(this.state.dl_drop_values)
    }
 

    render() {
        return (
            <div>
                <div style={style}>
                    <Divider horizontal />
                </div>
                <div>
                    <TextField
                        id="ul-drop"
                        label="Uplink Drop"
                        helperText="Example:1, 2, 3, 4, 5"
                        variant="outlined"
                        value={this.state.ul_drop}
                        onChange={this.handleULDropChange}
                        validat
                    />
                </div>


                <div>
                    <TextField
                        id="dl-drop"
                        label="Downlink Drop"
                        helperText="Example:1, 2, 3, 4"
                        variant="outlined"
                        value={this.state.dl_drop}
                        onChange={this.handleDLDropChange}
                    />
                </div>
            </div>
        )
    }
}

export default Drop
