import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class CollateralForm extends Component {
    renderPromisaryNoteInputs = (firstMortgage, secondMortgage, marketValue) => {
        if(this.props.stepThree.collateral.promisaryNote) {
            return (
                <div className="step-form__form--collateral">
                    <div className="input-field step-form__form--single-input text-input">
                        <input
                            id="market_value"
                            type="text"
                            className="validate"
                            value={marketValue}
                            onChange={(e) => {this.props.handleCollateral('marketValue', e.target.value)}}
                            required={true}
                        />
                        <label htmlFor="market_value" className={marketValue !== '' ? 'active' : ''}>Market value (CHF)</label>
                    </div>
                    <div className="input-field step-form__form--single-input text-input">
                        <input
                            id="first_mortgage"
                            type="text"
                            className="validate"
                            value={firstMortgage}
                            onChange={(e) => {this.props.handleCollateral('firstMortgage', e.target.value)}}
                            required={true}
                        />
                        <label htmlFor="first_mortgage" className={firstMortgage !== '' ? 'active' : ''}>1st Mortgage (CHF)</label>
                    </div>
                    <div className="input-field step-form__form--single-input text-input">
                        <input
                            id="second_mortgage"
                            type="text"
                            className="validate"
                            value={secondMortgage}
                            onChange={(e) => {this.props.handleCollateral('secondMortgage', e.target.value)}}
                            required={true}
                        />
                        <label htmlFor="second_mortgage" className={secondMortgage !== '' ? 'active' : ''}>2nd Mortgage (CHF)</label>
                    </div>
                </div>
            )
        }
    };

    render() {
        const {
            promisaryNote,
            bankGuarantee,
            jointGuarantee,
            accountsReceivable,
            firstMortgage,
            secondMortgage,
            marketValue
        } = this.props.stepThree.collateral;

        return (
            <div className="collateral-form">
                <div className="collateral-form__single">
                    <input type="checkbox" className="filled-in" id="promisary_note" checked={promisaryNote} onChange={() => {this.props.handleCollateral('promisaryNote', !promisaryNote)}}/>
                    <label htmlFor="promisary_note">Promisary Note</label>
                </div>
                <div className="collateral-form__single">
                    <input type="checkbox" className="filled-in" id="bank_guarantee" checked={bankGuarantee} onChange={() => {this.props.handleCollateral('bankGuarantee', !bankGuarantee)}}/>
                    <label htmlFor="bank_guarantee">Bank guarantee</label>
                </div>
                <div className="collateral-form__single">
                    <input type="checkbox" className="filled-in" id="joint_guarantee" checked={jointGuarantee} onChange={() => {this.props.handleCollateral('jointGuarantee', !jointGuarantee)}}/>
                    <label htmlFor="joint_guarantee">Joint guarantee</label>
                </div>
                <div className="collateral-form__single">
                    <input type="checkbox" className="filled-in" id="accounts_receivable" checked={accountsReceivable} onChange={() => {this.props.handleCollateral('accountsReceivable', !accountsReceivable)}}/>
                    <label htmlFor="accounts_receivable">Accounts receivable</label>
                </div>
                {this.renderPromisaryNoteInputs(firstMortgage, secondMortgage, marketValue)}
            </div>
        )
    }
}

const mapStateToProps = ({ stepThree }) => {
    return {
        stepThree
    }
};

export default connect(mapStateToProps, actions)(CollateralForm);