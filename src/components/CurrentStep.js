import React, { Component } from 'react';

import StepList from './StepList';
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";

class CurrentStep extends Component {

    renderCurrentStep = () => {
      switch (this.props.match.params.step) {
          case '1':
              return <StepOne/>;
          case '2':
              return <StepTwo/>;
          case '3':
              return <StepThree/>;
          case '4':
              return <StepFour/>;
          default:
              return <StepOne/>;
      }
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <StepList currentStep={this.props.match.params.step}/>
                        {this.renderCurrentStep()}
                    </div>
                </div>
            </div>
        )
    }
}

export default CurrentStep;