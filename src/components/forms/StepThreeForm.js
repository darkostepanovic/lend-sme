import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import $ from 'jquery';
import InterestRate from "../ui/InterestRate";

class StepThreeForm extends Component {
    componentDidMount() {
        const loanCategory = ReactDOM.findDOMNode(this.refs.loanCategory);
        $(loanCategory).material_select();
        $(loanCategory).on('change', this.handleLoanCategorySelect.bind(this));
    }

    handleLoanCategorySelect = e => {
      this.props.handleLoanDetails('loanCategory', e.target.value);
    };

    handleLoanTermRadioButtons = e => {
        this.props.handleLoanDetails('loanTerm', e.target.value);
    };

    render() {
        return (
            <div className="step-form__form step-form__form--two-columns">
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="loan_amount"
                        type="text"
                        className="validate"
                        required={true}
                        value={this.props.stepThree.loanAmount}
                        onChange={(e) => {this.props.handleLoanDetails('loanAmount', e.target.value)}}
                    />
                    <label htmlFor="loan_amount" className={this.props.stepThree.loanAmount !== '' ? 'active' : ''}>Loan category (CHF) *</label>
                </div>
                <div className="input-field step-form__form--single-input select-input">
                    <select ref='loanCategory' defaultValue={this.props.stepThree.loanCategory} required={true}>
                        <option value="0" disabled>Loan category *</option>
                        <option value="1">Liquidity</option>
                        <option value="2">Growth</option>
                        <option value="3">Fixed assets investment</option>
                        <option value="4">Real estate investment</option>
                        <option value="5">Research and development</option>
                        <option value="6">Pre-financing of current assets</option>
                        <option value="7">Debt rescheduling</option>
                        <option value="8">Refinancing</option>
                    </select>
                    <label>Loan category *</label>
                </div>
                <div className="step-form__form--single-input radio-input" id="loan-term-radio-input">
                    <label htmlFor="radio-input">Loan Term *</label>
                    <p>
                        <input
                            name="loanTerm"
                            type="radio"
                            id="12"
                            checked={this.props.stepThree.loanTerm === '12'}
                            onChange={this.handleLoanTermRadioButtons}
                            value={12}
                        />
                        <label htmlFor="12">12</label>
                    </p>
                    <p>
                        <input
                            name="loanTerm"
                            type="radio"
                            id="24"
                            checked={this.props.stepThree.loanTerm === '24'}
                            onChange={this.handleLoanTermRadioButtons}
                            value={24}
                        />
                        <label htmlFor="24">24</label>
                    </p>
                    <p>
                        <input
                            name="loanTerm"
                            type="radio"
                            id="36"
                            checked={this.props.stepThree.loanTerm === '36'}
                            onChange={this.handleLoanTermRadioButtons}
                            value={36}
                        />
                        <label htmlFor="36">36</label>
                    </p>
                    <p>
                        <input
                            name="loanTerm"
                            type="radio"
                            id="48"
                            checked={this.props.stepThree.loanTerm === '48'}
                            onChange={this.handleLoanTermRadioButtons}
                            value={48}
                        />
                        <label htmlFor="48">48</label>
                    </p>
                    <p>
                        <input
                            name="loanTerm"
                            type="radio"
                            id="60"
                            checked={this.props.stepThree.loanTerm === '60'}
                            onChange={this.handleLoanTermRadioButtons}
                            value={60}
                        />
                        <label htmlFor="60">60</label>
                    </p>
                    <p>
                        <input
                            name="loanTerm"
                            type="radio"
                            id="72"
                            checked={this.props.stepThree.loanTerm === '72'}
                            onChange={this.handleLoanTermRadioButtons}
                            value={72}
                        />
                        <label htmlFor="72">72</label>
                    </p>
                    <p>
                        <input
                            name="loanTerm"
                            type="radio"
                            id="84"
                            checked={this.props.stepThree.loanTerm === '84'}
                            onChange={this.handleLoanTermRadioButtons}
                            value={84}
                        />
                        <label htmlFor="84">84</label>
                    </p>
                    <p>
                        <input
                            name="loanTerm"
                            type="radio"
                            id="96"
                            checked={this.props.stepThree.loanTerm === '96'}
                            onChange={this.handleLoanTermRadioButtons}
                            value={96}
                        />
                        <label htmlFor="96">96</label>
                    </p>
                </div>
                <InterestRate/>
            </div>
        )
    }
}

const mapStateToProps = ({stepThree}) => {
    return {
        stepThree
    }
};

export default connect(mapStateToProps, actions)(StepThreeForm);