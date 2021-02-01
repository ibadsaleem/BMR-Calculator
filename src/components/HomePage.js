import React, { Component } from 'react'
import "../App.css";
import BMR from './bmr';
import BMR_METRIC from './bmr_metric';

export default class HomePage extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            choice:'',
        }
    }
    handleUnit = (event) => {
        console.log(event.target.value);
        this.setState({ choice: event.target.value });
    }
    render() {
        if (this.state.choice == "Imperial") {
            return <BMR />;
        }
        else if (this.state.choice == "Metric") {
        return <BMR_METRIC/>
        }
            
            
        return (
            <div >
                <div>
                    <h1 className="Heading" style={{textDecoration:"underline",textTransform:"capitalize"}}>BMR &amp; Calorie Calculator</h1>
                    </div>
                <div className="Sel">
                <select onChange={this.handleUnit}  className="btn-secondary sel" >
                    <option value="0">Select Any One</option>
                    <option value="Imperial" >Imperial</option>
                    <option value="Metric">Metric</option>
                </select>
                </div>
            </div>
        )
    }
}
