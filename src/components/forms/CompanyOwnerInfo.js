import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import moment from "moment/moment";
import $ from 'jquery';
import ReactDOM from "react-dom";

class CompanyOwnerInfo extends Component {
    componentDidMount() {
        const companyOwnerDatepicker = ReactDOM.findDOMNode(this.refs.companyOwnerDatepicker);
        const companyOwnerCountry = ReactDOM.findDOMNode(this.refs.companyOwnerCountry);
        $(companyOwnerDatepicker).pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 100, // Creates a dropdown of 15 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false, // Close upon selecting a date
            onSet: this.handleDatePicker
        });
        $(companyOwnerCountry).material_select();
        $(companyOwnerCountry).on('change', this.handleSelectCountry.bind(this));
    }

    handleDatePicker = (e) => {
        this.props.handleCompanyOwnerData('dob', e.select);
    };

    handleSelectCountry = e => {
        this.props.handleCompanyOwnerData('country', e.target.value);
    };

    render() {
        return (
            <div className="step-form__form company-owner">
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="company_owner_first_name"
                        type="text"
                        className="validate"
                        value={this.props.stepOne.formData.companyOwnerInfo.firstName}
                        onChange={(e) => {this.props.handleCompanyOwnerData('firstName', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="company_owner_first_name" className={this.props.stepOne.formData.companyOwnerInfo.firstName !== '' ? 'active' : ''}>First Name *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="company_owner_last_name"
                        type="text"
                        className="validate"
                        value={this.props.stepOne.formData.companyOwnerInfo.lastName}
                        onChange={(e) => {this.props.handleCompanyOwnerData('lastName', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="company_owner_last_name" className={this.props.stepOne.formData.companyOwnerInfo.lastName !== '' ? 'active' : ''}>Last Name *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input date-picker">
                    <input readOnly={true} id="companyOwnerDob" type="text" ref='companyOwnerDatepicker' className="datepicker companyOwnerDatepicker" value={moment(this.props.stepOne.formData.companyOwnerInfo.dob).format('D MMMM, YYYY')}/>
                    <label htmlFor="companyOwnerDob" className={this.props.stepOne.formData.companyOwnerInfo.dob !== '' ? 'active' : ''}>Date of birth *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="companyOwnerStreetAddress"
                        type="text"
                        className="validate"
                        value={this.props.stepOne.formData.companyOwnerInfo.streetAddress}
                        onChange={(e) => {this.props.handleCompanyOwnerData('streetAddress', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="companyOwnerStreetAddress" className={this.props.stepOne.formData.companyOwnerInfo.streetAddress !== '' ? 'active' : ''}>Street address *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="companyOwnerAddressNumber"
                        type="text"
                        className="validate"
                        value={this.props.stepOne.formData.companyOwnerInfo.addressNumber}
                        onChange={(e) => {this.props.handleCompanyOwnerData('addressNumber', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="companyOwnerAddressNumber" className={this.props.stepOne.formData.companyOwnerInfo.addressNumber !== '' ? 'active' : ''}>Address number *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="companyOwnerPostcode"
                        type="text"
                        className="validate"
                        value={this.props.stepOne.formData.companyOwnerInfo.postcode}
                        onChange={(e) => {this.props.handleCompanyOwnerData('postcode', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="companyOwnerPostcode" className={this.props.stepOne.formData.companyOwnerInfo.postcode !== '' ? 'active' : ''}>Postcode *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="companyOwnerCity"
                        type="text"
                        className="validate"
                        value={this.props.stepOne.formData.companyOwnerInfo.city}
                        onChange={(e) => {this.props.handleCompanyOwnerData('city', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="companyOwnerCity" className={this.props.stepOne.formData.companyOwnerInfo.city !== '' ? 'active' : ''}>City *</label>
                </div>
                <div className="input-field step-form__form--single-input select-input" >
                    <select ref='companyOwnerCountry' defaultValue='0' required={true}>
                        <option value="0" disabled>Choose country: *</option>
                        <option value="1">Switzerland</option>
                        <option value="2">Lichtenstein</option>
                    </select>
                    <label>Country *</label>
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

export default connect(mapStateToProps, actions)(CompanyOwnerInfo);