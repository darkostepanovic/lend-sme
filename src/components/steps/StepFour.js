import React, { Component } from 'react';
import autosave from '../../assets/autosave.svg';
import LoanRequest from "../ui/LoanRequest";

class StepFour extends Component {
    render() {
        return (
            <div className="step-four">
                <div className="row--flex step-form__info">
                    <div className="step-form__info--text">
                        <h5>Please review information and submit your request</h5>
                    </div>
                    <div className="step-form__info--autosave">
                        <img src={autosave} alt="autosave"/>
                        <span>Autosaved at 12.14 pm</span>
                    </div>
                </div>
                <div className="row">
                    <LoanRequest/>
                </div>
                <div className="row--flex">
                    <div className="step-form__info--text">
                        <p>You have to agree with Terms & Conditions and
                            to promise you entered all data truthfully to send a loan request.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default StepFour;