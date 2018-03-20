import React, { Component } from 'react';
import { connect } from 'react-redux';
import InterestRate from "./InterestRate";

class LoanRequest extends Component {
    render() {
        return (
            <div className="loan-request">
                <div className="loan-request__title">
                    <h4>Your loan request</h4>
                    <hr/>
                </div>
                <div className="loan-request__terms">
                    <div className="loan-request__terms--details">
                        <p><small>Loan Amount</small></p>
                        <p>24000 CHF</p>
                    </div>
                    <div className="loan-request__terms--details">
                        <p><small>Category</small></p>
                        <p>Refinancing</p>
                    </div>
                    <div className="loan-request__terms--details">
                        <p><small>Loan term</small></p>
                        <p>60 Months</p>
                    </div>
                </div>
                <div className="row">
                    <InterestRate/>
                </div>

                <div className="loan-request__checkbox">
                    <div>
                        <input type="checkbox" className="filled-in" id="terms"/>
                        <label htmlFor="terms">I agree with <a>Terms and conditions</a></label>
                    </div>
                    <div>
                        <input type="checkbox" className="filled-in" id="promise"/>
                        <label htmlFor="promise">I promise I entered all data truthfully</label>
                    </div>
                </div>
                <div className="loan-request__radio">
                    <div className="loan-request__radio--text">
                        <p>Would you like to present your company name to investors publically?</p>
                    </div>
                    <div className="step-form__form--single-input radio-input" id="public_company_name">
                        <p>
                            <input
                                name="public_company_name"
                                type="radio"
                                id="yes"
                            />
                            <label htmlFor="yes">Yes</label>
                        </p>
                        <p>
                            <input
                                name="public_company_name"
                                type="radio"
                                id="no"
                            />
                            <label htmlFor="no">No</label>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({stepThree}) => {
  return {
      stepThree
  }
};

export default connect(mapStateToProps, null)(LoanRequest);