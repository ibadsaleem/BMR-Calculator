import React, { Component } from "react";
import "../App.css";
class bmr_metric extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Gender: "",
      Weight: "",
      Height_cm: "",
      Age: "",
      Activity: "",
      bmr: "",
      error: "",
      Cerror: "",
      calorie: "",
    };
  }
  handleAge = (event) => {
    this.setState({
      Age: event.target.value,
    });
  };

  handleWeight = (event) => {
    this.setState({
      Weight: event.target.value,
    });
    console.log(this.state.Weight);
  };
  handleHeight_cm = (event) => {
    this.setState({
      Height_cm: event.target.value,
    });
  };

  handleGender = (event) => {
    this.setState({
      Gender: event.target.value,
    });
  };

  handleActivity = (event) => {
    this.setState({
      Activity: event.target.value,
    });
    };
    
//   Man BMR = 66.5 + ( 13.75 × weight in kg ) + ( 5.003 × height in cm ) – ( 6.755 × age in years )
//   Woman BMR = BMR = 655 + ( 9.563 × weight in kg ) + ( 1.850 × height in cm ) – ( 4.676 × age in years )
    
  calculateBMR() {
    let age = this.state.Age;
    let Gender = this.state.Gender;
    let Weight = this.state.Weight;
    let Heightcm = this.state.Height_cm;
    let Act = this.state.Activity;
    let Bmr = "";
    let Error = "All Fields Are Required!";
    if (
      age == "" ||
      Gender == "" ||
      Weight == "" ||
      Heightcm == "" 
    ) {
      this.setState({ error: Error });
      return;
    }

    if (Gender == "1") {
      this.setState({ error: "" ,Cerror:""});
      Bmr =
        66.50 + 13.75 * Weight + 5.003 * (Heightcm) - 6.755 * age;
    }

    if (Gender == "2") {
      this.setState({ error: "",Cerror:"" });
      Bmr = 655 + 9.563 * Weight + 1.850 * (Heightcm) - 4.676 * age;
    }
    this.setState({ bmr: Bmr });
    console.log(Bmr);
  }

  // 1. Little to no exercise	Daily kilocalories needed = BMR x 1.2
  // 2. Light exercise (1–3 days per week)	Daily kilocalories needed = BMR x 1.375
  // 3. Moderate exercise (3–5 days per week)	Daily kilocalories needed = BMR x 1.55
  // 4. Heavy exercise (6–7 days per week)	Daily kilocalories needed = BMR x 1.725
  // 5. Very heavy exercise (twice per day, extra heavy workouts)	Daily kilocalories needed = BMR x 1.9
  calorieCalculator() {
    let activity = this.state.Activity;
    let BMR = this.state.bmr;
    let Error = "Kindly Choose The Correct Options";

    let caloriecalc;
    if (BMR == "")
    {
      let Error_BMR = "KINDLY CALCULATE BMR FIRST!";
      this.setState({ Cerror: Error_BMR }); 
      return;
    }
    if (activity == "1") {
      this.setState({ Cerror: "" });
      caloriecalc = BMR * 1.2;
    } else if (activity == "2") {
      this.setState({ Cerror: "" });
      caloriecalc = BMR * 1.375;
    } else if (activity == "3") {
      this.setState({ Cerror: "" });
      caloriecalc = BMR * 1.55;
    } else if (activity == "4") {
      this.setState({ Cerror: "" });
      caloriecalc = BMR * 1.725;
    } else if (activity == "5") {
      this.setState({ Cerror: "" });
      caloriecalc = BMR * 1.9;
    } else {
      this.setState({ Cerror:Error });  
    }
    this.setState({ calorie: caloriecalc });
  }

  render() {
    let result;
    let Cresult;
    let errormsg;
    let Cerrormsg;
    if (this.state.bmr) {
      result = <div className="result">BMR: {this.state.bmr}</div>;
    }
    if (this.state.calorie) {
      Cresult = <div className="result">Calorie: {this.state.calorie}</div>;
    }
    if (this.state.error) {
      errormsg = <div className="error">{this.state.error}</div>;
    }
    if (this.state.Cerror) {
      Cerrormsg = <div className="error">{this.state.Cerror}</div>;
    }
    return (
      <div className="main1">
        <div className="Heading">
          <h3>BMR &amp; DAILY CALORIE CALCULATOR (Metric)</h3>
          {errormsg}
          {Cerrormsg}
        </div>
        <div className="Gender">
          <label>Gender</label>
          <br />
          <label>
            <input
              type="radio"
              checked={this.state.Gender === "1"}
              onChange={this.handleGender}
              className="MGender"
              id=""
              value="1"
            />{" "}
            Male
          </label>
          <br />
          <label>
            <input
              type="radio"
              className="FGender"
              checked={this.state.Gender === "2"}
              onChange={this.handleGender}
              value="2"
            />{" "}
            Female
          </label>
        </div>
        <div className="Weight">
          <label>
            Weight in Kgs <br />
            <input type="number" onChange={this.handleWeight} name="" id="" />
          </label>
        </div>
        <div className="Height">
          <label>
            Height in cm<br />
            <input
              type="number"
              onChange={this.handleHeight_cm}
              name=""
              id=""
            />
          </label>
        </div>
        <div className="Age">
          <label>
            Age In Years <br />
            <input type="number" onChange={this.handleAge} name="" id="" />
          </label>
        </div>
        <div className="Calculate_BMR btn1">
          <button onClick={() => this.calculateBMR()} className="btn">
            CALCULATE BMR
          </button>
          {result}
        </div>
        <div className="Activity">
          <label style={{ marginTop: 10 }}>Workout In A Week</label>
          <br />
          <select
            className="Selector"
            onChange={this.handleActivity}
            name=""
            id=""
          >
            <option value="0">Select your Activity</option>
            <option value="1">Little to no exercise</option>
            <option value="2">Light exercise (1–3 days per week)</option>
            <option value="3">Moderate exercise (3–5 days per week)</option>
            <option value="4">Heavy exercise (6–7 days per week)</option>
            <option value="5"> Very heavy exercise (twice per day, extra heavy workouts)</option>
          </select>
        </div>
        <br />
        <div className="Calculate_Calories btn1">
          <button className="btn" onClick={() => this.calorieCalculator()}>
            CALCULATE CALORIES
          </button>
         {Cresult}
        </div>
      </div>
    );
  }
}

export default bmr_metric;
