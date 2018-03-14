import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import * as actions from '../../actions';

import $ from 'jquery';

class StepTwoForm extends Component {
    componentDidMount() {
        const industry = ReactDOM.findDOMNode(this.refs.industry);
        const legalForm = ReactDOM.findDOMNode(this.refs.legalForm);
        const numberOfEmployees = ReactDOM.findDOMNode(this.refs.numberOfEmployees);
        const foundationDate = ReactDOM.findDOMNode(this.refs.foundationDate);
        $(industry).material_select();
        $(legalForm).material_select();
        $(numberOfEmployees).material_select();

        $(industry).on('change', this.handleSelectIndustry.bind(this));
        $(legalForm).on('change', this.handleSelectLegalForm.bind(this));
        $(numberOfEmployees).on('change', this.handleSelectNumberOfEmployees.bind(this));
        $(foundationDate).pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 100, // Creates a dropdown of 15 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false, // Close upon selecting a date
            onSet: this.handleDatePicker
        });
    }

    handleSelectIndustry = e => {
        this.props.handleCompanyGeneralInfo('industry', e.target.value);
    };

    handleSelectLegalForm = e => {
        this.props.handleCompanyGeneralInfo('legalForm', e.target.value);
    };

    handleSelectNumberOfEmployees = e => {
        this.props.handleCompanyGeneralInfo('numberOfEmployees', e.target.value);
    };

    handleDatePicker = (e) => {
        this.props.handleCompanyGeneralInfo('foundationDate', e.select);
    };

    render() {
        console.log(this.props.stepTwo);
        return (
            <div className="step-form__form step-form__form--two-columns">
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="company_name"
                        type="text"
                        className="validate"
                        value={this.props.stepTwo.generalInfo.companyName}
                        onChange={(e) => {this.props.handleCompanyGeneralInfo('companyName', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="company_name">Company Name *</label>
                </div>
                <div className="input-field step-form__form--single-input select-input">
                    <select ref='industry' defaultValue={this.props.stepTwo.generalInfo.industry} required={true}>
                        <option value="0" disabled>Industry *</option>
                        <option value="1">Wholesale</option>
                        <option value="2">Retail business</option>
                        <option value="3">Construction section</option>
                        <option value="4">Auto trade</option>
                        <option value="5">Information and communication</option>
                        <option value="6">Arts, Entertainment, Sports and Recreation</option>
                        <option value="7">Machine construction</option>
                        <option value="8">Manufacture and processing of metal products</option>
                        <option value="9">Repair and installation</option>
                        <option value="10">Manufacture of other goods</option>
                        <option value="11">Healthcare</option>
                        <option value="12">Food industry</option>
                        <option value="13">Electronics, watch industry, medical technology</option>
                        <option value="14">Manufacture of electrical equipment</option>
                        <option value="15">Education and Training</option>
                        <option value="16">Gastronomie</option>
                        <option value="17">Wooden goods, paper and printed matter</option>
                        <option value="18">Miscellaneous services</option>
                    </select>
                    <label>Industry *</label>
                </div>
                <div className="input-field step-form__form--single-input select-input">
                    <select ref='legalForm' defaultValue={this.props.stepTwo.generalInfo.legalForm} required={true}>
                        <option value="0" disabled>Legal Form *</option>
                        <option value="1">Individual Company</option>
                        <option value="2">Ltd</option>
                        <option value="3">Limited Company (AG)</option>
                        <option value="4">General Partnership</option>
                        <option value="5">Limited Partnership</option>
                        <option value="6">Foundation</option>
                        <option value="7">Cooperative</option>
                        <option value="8">Foundation</option>
                        <option value="9">Partnership</option>
                        <option value="10">Association</option>
                    </select>
                    <label>Legal form *</label>
                </div>
                <div className="input-field step-form__form--single-input select-input">
                    <select ref='numberOfEmployees' defaultValue={this.props.stepTwo.generalInfo.numberOfEmployees} required={true}>
                        <option value="0" disabled>Number of employees *</option>
                        <option value="1">&lt; 5</option>
                        <option value="2">6 - 10</option>
                        <option value="3">11 - 30</option>
                        <option value="4">31 - 50</option>
                        <option value="5">51 - 100</option>
                        <option value="6">101 - 500</option>
                        <option value="7">&gt; 500</option>
                    </select>
                    <label>Number of employees *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input date-picker">
                    <input required={true} readOnly={true} id="foundationDate" type="text" ref='foundationDate' className="datepicker"/>
                    <label htmlFor="foundationDate" className={this.props.stepTwo.generalInfo.foundationDate !== '' ? 'active' : ''}>Foundation Date *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="companyEmail"
                        type="email"
                        className="validate"
                        value={this.props.stepTwo.generalInfo.companyEmail}
                        onChange={(e) => {this.props.handleCompanyGeneralInfo('companyEmail', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="newPersonEmail" className={this.props.stepTwo.generalInfo.companyEmail !== '' ? 'active' : ''}>Company email *</label>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({stepTwo}) => {
    return {
        stepTwo
    }
};

export default connect(mapStateToProps, actions)(StepTwoForm);