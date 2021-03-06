import React, { Component } from 'react';

import StepList from './StepList';
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import StepFooter from "./StepFooter";

class CurrentStep extends Component {

    renderCurrentStep = () => {
      switch (this.props.match.params.step) {
          case '1':
              return <StepOne currentStep={this.props.match.params.step}/>;
          case '2':
              return <StepTwo currentStep={this.props.match.params.step}/>;
          case '3':
              return <StepThree currentStep={this.props.match.params.step}/>;
          case '4':
              return <StepFour currentStep={this.props.match.params.step}/>;
          default:
              return <StepOne currentStep='1'/>;
      }
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <StepList currentStep={this.props.match.params.step}/>
                        {this.renderCurrentStep()}
                        <StepFooter currentStep={this.props.match.params.step}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CurrentStep;