import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class StepFooter extends Component {

    handleNext = () => {
        const currentStep = Number(this.props.currentStep);
        const nextStep = currentStep + 1;
        if (nextStep < 5) {
            this.props.history.push(`/${nextStep}`);
        }
    };

    handleBack = () => {
        const currentStep = Number(this.props.currentStep);
        const prevStep = currentStep - 1;
        if (prevStep > 0) {
            this.props.history.push(`/${prevStep}`);
        }
    };

    renderButtons = () => {
      if(this.props.currentStep === '1') {
          return (
              <div className="step-footer__btn">
                  <button className='btn' onClick={this.handleNext}>Next <i className="material-icons">chevron_right</i></button>
              </div>
          )
      } else if(this.props.currentStep === '4') {
          return (
              <div className="step-footer__btn">
                  <button className='btn' onClick={this.handleBack}><i className="material-icons">chevron_left</i> Back</button>
              </div>
          )
      } else {
          return (

              <div className="step-footer__btn">
                  <button className='btn' onClick={this.handleBack}><i className="material-icons">chevron_left</i> Back</button>
                  <button className='btn' onClick={this.handleNext}>Next <i className="material-icons">chevron_right</i></button>
              </div>

          )
      }
    };

    render() {
        return (
            <div className="step-footer">
                <div className="row">
                    <div className="divider">123</div>
                </div>
                <div className="row--flex step-footer__buttons">
                    <div className="step-footer--save">
                        <a>Save &amp; Go to Dashboard</a>
                    </div>
                    {this.renderButtons()}
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