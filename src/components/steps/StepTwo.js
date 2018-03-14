import React, { Component } from 'react';
import StepTwoForm from "../forms/StepTwoForm";
import autosave from "../../assets/autosave.svg";

class StepTwo extends Component {
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
                    </form>
                </div>
            </div>
        )
    }
}

export default StepTwo;