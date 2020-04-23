import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import red from '@material-ui/core/colors/red';
import Divider from '@material-ui/core/Divider';



const red300 = red['500'];
 
const style = {
    fontSize: '12px',
    color: red300,
    position: 'relative',
    paddingTop: '25px',
    paddingBottom: '10px',
};

class FlowInfo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             src_id: '',
             dst_id: ''
        }
    }
    

    handleSrcIDChange = (event) => {
        this.setState({
            src_id:event.target.value
        })
    }

    handleDstIDChange = (event) => {
        this.setState({
            dst_id:event.target.value
        })
    }
    
    render() {
        return (
            <div> 
                <div style={style}>
                    <Divider horizontal />
                </div>
                <div>
                    <TextField
                        id="flow-src-id"
                        label="Src ID"
                        helperText="Example:12345"
                        variant="outlined"
                        value={this.state.src_id}
                        onChange={this.handleSrcIDChange}
                    />
                </div>


                <div>
                    <TextField
                        id="flow-dst-id"
                        label="Dst ID"
                        helperText="Example:12345"
                        variant="outlined"
                        value={this.state.dst_id}
                        onChange={this.handleDstIDChange}
                    />
                </div>
            </div>
        )
    }
}

export default FlowInfo
