import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import StepTwoForm from "../forms/StepTwoForm";
import autosave from "../../assets/autosave.svg";
import CompanyHqInfo from "../forms/CompanyHqInfo";

class StepTwo extends Component {
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
            <div className='step-two'>
                <div className="row--flex step-form__info">
                    <div className="step-form__info--text">
                        <h5>General company information</h5>
                    </div>
                    <div className="step-form__info--autosave">
                        <img src={autosave} alt="autosave"/>
                        <span>Autosaved at 12.14 pm</span>
                    </div>
                </div>
                <div className="row--flex">
                    <div className="step-form__info--text">
                        <p>Please enter Company name according to commercial register entry</p>
                    </div>
                </div>
                <div className="row step-form">
                    <form id='stepTwoForm' ref='stepTwoForm' name='stepTwoForm' onSubmit={(e) => {this.handleNext(e)}}>
                        <StepTwoForm/>
                        <div className="step-form__info--text">
                            <h5><b>Company headquarters information</b></h5>
                        </div>
                        <CompanyHqInfo/>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(StepTwo);