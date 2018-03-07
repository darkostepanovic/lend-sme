import React, { Component } from 'react';
import StepOneForm from "../forms/StepOneForm";

class StepOne extends Component {
    render() {
        return (
            <div className="step-one">
                <div className="row--flex">
                    <div className="step-form__info--text">
                        <h5>Contact person information</h5>
                    </div>
                    <div className="step-form__info--autosave">
                        1
                    </div>
                </div>
                <div className="row--flex">
                    <div className="step-form__info--text">
                        <p>The information below refferst to company representatives who will be contacted by LEND if any additional information is reqired for the loan process.</p>
                    </div>
                </div>
                <div className="row step-form">
                    <StepOneForm/>
                </div>
                <div className="row">
                    <h5><a>+ Add contact person</a></h5>
                </div>
            </div>
        )
    }
}

export default StepOne;