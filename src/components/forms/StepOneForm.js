import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import $ from 'jquery';

class StepOneForm extends Component {
    constructor(props) {
        super(props);
        this.handleDatePicker = this.handleDatePicker.bind(this);
    };

    handleDatePicker = (e) => {
        console.log('HERE');
        this.props.handleFormData('dob', e.select);
    };

    handleRadioButtons = (e) => {
        this.props.handleFormData('title', e.target.value);
    };

    handleSelectSigningAuthority = e => {
        this.props.handleFormData('signingAuthority', e.target.value);
    };

    handleSelectCountry = e => {
        this.props.handleFormData('country', e.target.value);
    };

    componentDidMount() {
        const signingAuthority = ReactDOM.findDOMNode(this.refs.signingAuthority);
        const country = ReactDOM.findDOMNode(this.refs.country);
        const datepicker = ReactDOM.findDOMNode(this.refs.datepicker);
        $(signingAuthority).material_select();
        $(country).material_select();
        $(signingAuthority).on('change', this.handleSelectSigningAuthority.bind(this));
        $(country).on('change', this.handleSelectCountry.bind(this));

        $(datepicker).pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 100, // Creates a dropdown of 15 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false, // Close upon selecting a date
            onSet: this.handleDatePicker
        });
    }

    render() {
        console.log(this.props.stepOne.formData);
        return (
            <form className="step-form__form">
                <div className="step-form__form--single-input radio-input" id="radio-input">
                    <label htmlFor="radio-input">Title*</label>
                    <p>
                        <input
                            name="group1"
                            type="radio"
                            id="mr"
                            checked={this.props.stepOne.formData.title === '1'}
                            onChange={this.handleRadioButtons}
                            value={1} />
                        <label htmlFor="mr">Mr.</label>
                    </p>
                    <p>
                        <input
                            name="group1"
                            type="radio"
                            id="mrs"
                            value={2}
                            checked={this.props.stepOne.formData.title === '2'}
                            onChange={this.handleRadioButtons}
                        />
                        <label htmlFor="mrs">Mrs.</label>
                    </p>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="first_name"
                        type="text"
                        className="validate"
                        value={this.props.stepOne.formData.firstName}
                        onChange={(e) => {this.props.handleFormData('firstName', e.target.value)}}
                    />
                    <label htmlFor="first_name">First Name *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="last_name"
                        type="text"
                        className="validate"
                        value={this.props.stepOne.formData.lastName}
                        onChange={(e) => {this.props.handleFormData('lastName', e.target.value)}}
                    />
                    <label htmlFor="last_name">Last Name *</label>
                </div>
                <div className="input-field step-form__form--single-input select-input">
                    <select ref='signingAuthority' defaultValue='0'>
                        <option value="0" disabled>Signing authority *</option>
                        <option value="1">Single</option>
                        <option value="2">Collective</option>
                        <option value="3">None</option>
                    </select>
                    <label>Signing authority *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="function"
                        type="text"
                        className="validate"
                        value={this.props.stepOne.formData.function}
                        onChange={(e) => {this.props.handleFormData('function', e.target.value)}}
                    />
                    <label htmlFor="function">Function *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input date-picker">
                    <input id="dob" type="text" ref='datepicker' className="datepicker"/>
                    <label htmlFor="function">Date of birth *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="streetAddress"
                        type="text"
                        className="validate"
                        value={this.props.stepOne.formData.streetAddress}
                        onChange={(e) => {this.props.handleFormData('streetAddres', e.target.value)}}
                    />
                    <label htmlFor="function">Street address *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="addressNumber"
                        type="text"
                        className="validate"
                        value={this.props.stepOne.formData.addressNumber}
                        onChange={(e) => {this.props.handleFormData('addressNumber', e.target.value)}}
                    />
                    <label htmlFor="function">Address number *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="postcode"
                        type="text"
                        className="validate"
                        value={this.props.stepOne.formData.postcode}
                        onChange={(e) => {this.props.handleFormData('postcode', e.target.value)}}
                    />
                    <label htmlFor="postcode">Postcode *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="city"
                        type="text"
                        className="validate"
                        value={this.props.stepOne.formData.city}
                        onChange={(e) => {this.props.handleFormData('city', e.target.value)}}
                    />
                    <label htmlFor="city">City *</label>
                </div>
                <div className="input-field step-form__form--single-input select-input">
                    <select ref='country' defaultValue='0'>
                        <option value="0" disabled>Choose country: *</option>
                        <option value="1">Switzerland</option>
                        <option value="2">Lichtenstein</option>
                    </select>
                    <label>Country *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <div className="prefix"><span>+381</span></div>
                    <input id="phone" type="text" className="validate"/>
                    <label htmlFor="phone">Phone No. *</label>
                </div>
            </form>
        )
    }
}

const mapStateToProps = ({stepOne}) => {
    return {
        stepOne
    }
};

export default connect(mapStateToProps, actions)(StepOneForm);