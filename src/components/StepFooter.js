import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class StepFooter extends Component {

    handleBack = () => {
        const currentStep = Number(this.props.currentStep);
        const prevStep = currentStep - 1;
        if (prevStep > 0) {
            this.props.history.goBack();
        }
    };

    // TEMPORARY FORM NAVIGATION!!! WILL REMOVE AFTER ADD STEP TWO, THREE, AND FOUR FORMS
    // handleNext = (e) => {
    //     e.preventDefault();
    //     const currentStep = Number(this.props.currentStep);
    //     const nextStep = currentStep + 1;
    //     if (nextStep < 5) {
    //         this.props.history.push(`/${nextStep}`);
    //     }
    // };

    currentForm = (currentStep) => {
      if(currentStep === 2) {
          return 'stepTwoForm'
      } else if (currentStep === 3) {
          return 'stepThreeForm';
      } else if (currentStep === 4) {
          return 'stepFourForm'
      } else return 'stepOneForm';
    };

    renderButtons = (currentStep) => {
        console.log(currentStep);
      if(currentStep === 1) {
          return (
              <div className="step-footer__btn">
                  <button type='submit' className='btn' form='stepOneForm'>Next <i className="material-icons">chevron_right</i></button>
              </div>
          )
      } else if(currentStep === 4) {
          return (
              <div className="step-footer__btn">
                  <button className='btn' onClick={this.handleBack}><i className="material-icons">chevron_left</i> Back</button>
                  <button type='submit' className='btn' form={this.currentForm(currentStep)}>Confirm &amp; Send <i className="material-icons">chevron_right</i></button>

              </div>
          )
      } else {
          return (
              <div className="step-footer__btn">
                  <button className='btn' onClick={this.handleBack}><i className="material-icons">chevron_left</i> Back</button>
                  <button type='submit' className='btn' form={this.currentForm(currentStep)}>Next <i className="material-icons">chevron_right</i></button>
              </div>
          )
      }
    };

    render() {
        let currentStep;
        if (this.props.currentStep !== '1' && this.props.currentStep !== '2' && this.props.currentStep !== '3' && this.props.currentStep !== '4') {
            currentStep = 1
        } else {
            currentStep = Number(this.props.currentStep);
        }
        return (
            <div className="step-footer">
                <div className="row">
                    <div className="divider">123</div>
                </div>
                <div className="row--flex step-footer__buttons">
                    <div className="step-footer--save">
                        <a>Save &amp; Go to Dashboard</a>
                    </div>
                    {this.renderButtons(currentStep)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({stepOne}) => {
    return {
        stepOne
    }
};

export default withRouter(connect(mapStateToProps, null)(StepFooter));