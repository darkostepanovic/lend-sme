import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import StepThreeForm from "../forms/StepThreeForm";
import autosave from '../../assets/autosave.svg';
import LoanDescriptionForm from "../forms/LoanDescriptionForm";
import CollateralForm from '../forms/CollateralForm';

class StepThree extends Component {

    handleNext = (e) => {
        e.preventDefault();
        const currentStep = Number(this.props.currentStep);
        const nextStep = currentStep + 1;
        if (nextStep < 5) {
            this.props.history.push(`/${nextStep}`);
        }
    };

    render() {
        return (
            <div className='step-three'>
                <div className="row--flex step-form__info">
                    <div className="step-form__info--text">
                        <h5>Loan details</h5>
                    </div>
                    <div className="step-form__info--autosave">
                        <img src={autosave} alt="autosave"/>
                        <span>Autosaved at 12.14 pm</span>
                    </div>
                </div>
                <div className="row step-form">
                    <form id='stepThreeForm' ref='stepThreeForm' name='stepThreeForm' onSubmit={(e) => {this.handleNext(e)}}>
                        <StepThreeForm/>
                        <div className="step-form__info">
                            <div className="step-form__info--text">
                                <h5>Loan description</h5>
                            </div>
                        </div>
                        <div className="step-form__info--text">
                            <p><b>Important note:</b> Tell you loan story as honest and precise as possible,
                                as it is something that will be seen by the potential investor.</p>
                        </div>
                        <LoanDescriptionForm/>
                        <div className="step-form__info">
                            <h4><b>Collateral (optional)</b></h4>
                            <p>If you can provide a collateral for your loan, you increase your chances to get a lower rate for your loan. Please select if you can provide any of the following:</p>
                        </div>
                        <CollateralForm/>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(StepThree);