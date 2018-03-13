import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import $ from "jquery";

class AddNewPerson extends Component {
    componentDidMount() {
        const newPersonSigningAuthority = ReactDOM.findDOMNode(this.refs.newPersonSigningAuthority);
        $(newPersonSigningAuthority).material_select();
        $(newPersonSigningAuthority).on('change', this.handleSelectSigningAuthority.bind(this));

        const newPersonCountry = ReactDOM.findDOMNode(this.refs.newPersonCountry);
        $(newPersonCountry).material_select();
        $(newPersonCountry).on('change', this.handleSelectCountry.bind(this));
    }

    handleNewPersonRadioButtons = (e) => {
        this.props.handleNewPersonData('title', e.target.value);
    };

    handleSelectSigningAuthority = e => {
        this.props.handleNewPersonData('signingAuthority', e.target.value);
    };

    handleSelectCountry = e => {
        this.props.handleNewPersonData('country', e.target.value);
    };

    render() {
        return (
            <div className="step-form__form">
                <div className="step-form__form--single-input radio-input" id="newPersonRadioInput">
                    <label htmlFor="newPersonRadioInput">Title*</label>
                    <p>
                        <input
                            name="newPersonTitle"
                            type="radio"
                            id="newPersonMr"
                            checked={this.props.stepOne.formData.newPersonInfo.title === '1'}
                            onChange={this.handleNewPersonRadioButtons}
                            value={1} />
                        <label htmlFor="newPersonMr">Mr.</label>
                    </p>
                    <p>
                        <input
                            name="newPersonTitle"
                            type="radio"
                            id="newPersonMrs"
                            value={2}
                            checked={this.props.stepOne.formData.newPersonInfo.title === '2'}
                            onChange={this.handleNewPersonRadioButtons}
                        />
                        <label htmlFor="newPersonMrs">Mrs.</label>
                    </p>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="newPersonFirstName"
                        type="text"
                        className="validate"
                        value={this.props.stepOne.formData.newPersonInfo.firstName}
                        onChange={(e) => {this.props.handleNewPersonData('firstName', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="first_name" className={this.props.stepOne.formData.newPersonInfo.firstName !== '' ? 'active' : ''}>First Name *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="newPersonLastName"
                        type="text"
                        className="validate"
                        value={this.props.stepOne.formData.newPersonInfo.lastName}
                        onChange={(e) => {this.props.handleNewPersonData('lastName', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="last_name" className={this.props.stepOne.formData.newPersonInfo.lastName !== '' ? 'active' : ''}>Last Name *</label>
                </div>
                <div className="input-field step-form__form--single-input select-input">
                    <select ref='newPersonSigningAuthority' defaultValue='0' required={true}>
                        <option value="0" disabled>Signing authority *</option>
                        <option value="1">Single</option>
                        <option value="2">Collective</option>
                        <option value="3">None</option>
                    </select>
                    <label>Signing authority *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="newPersonFunction"
                        type="text"
                        className="validate"
                        value={this.props.stepOne.formData.newPersonInfo.function}
                        onChange={(e) => {this.props.handleNewPersonData('function', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="function" className={this.props.stepOne.formData.newPersonInfo.function !== '' ? 'active' : ''}>Function *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input phone-number">
                    {this.props.stepOne.formData.newPersonInfo.country === '2' ?
                        <div className="prefix"><span>+423</span></div> :
                        <div className="prefix"><span>+41</span></div>
                    }
                    <input
                        id="newPersonPhone"
                        type="text"
                        className="validate"
                        value={this.props.stepOne.formData.newPersonInfo.phone}
                        onChange={(e) => {this.props.handleNewPersonData('phone', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="newPersonPhone" className={this.props.stepOne.formData.newPersonInfo.phone !== '' ? 'active' : ''}>Phone No. *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="newPersonStreetAddress"
                        type="text"
                        className="validate"
                        value={this.props.stepOne.formData.newPersonInfo.streetAddress}
                        onChange={(e) => {this.props.handleNewPersonData('streetAddress', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="newPersonStreetAddress" className={this.props.stepOne.formData.newPersonInfo.streetAddress !== '' ? 'active' : ''}>Street address *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="newPersonAddressNumber"
                        type="text"
                        className="validate"
                        value={this.props.stepOne.formData.newPersonInfo.addressNumber}
                        onChange={(e) => {this.props.handleNewPersonData('addressNumber', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="newPersonAddressNumber" className={this.props.stepOne.formData.newPersonInfo.addressNumber !== '' ? 'active' : ''}>Address number *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="newPersonPostcode"
                        type="text"
                        className="validate"
                        value={this.props.stepOne.formData.newPersonInfo.postcode}
                        onChange={(e) => {this.props.handleNewPersonData('postcode', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="newPersonPostcode" className={this.props.stepOne.formData.newPersonInfo.postcode !== '' ? 'active' : ''}>Postcode *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="newPersonCity"
                        type="text"
                        className="validate"
                        value={this.props.stepOne.formData.newPersonInfo.city}
                        onChange={(e) => {this.props.handleNewPersonData('city', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="newPersonCity" className={this.props.stepOne.formData.newPersonInfo.city !== '' ? 'active' : ''}>City *</label>
                </div>
                <div className="input-field step-form__form--single-input select-input">
                    <select ref='newPersonCountry' defaultValue='0' required={true}>
                        <option value="0" disabled>Choose country: *</option>
                        <option value="1">Switzerland</option>
                        <option value="2">Lichtenstein</option>
                    </select>
                    <label>Country *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="newPersonEmail"
                        type="email"
                        className="validate"
                        value={this.props.stepOne.formData.newPersonInfo.email}
                        onChange={(e) => {this.props.handleNewPersonData('email', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="newPersonEmail" className={this.props.stepOne.formData.newPersonInfo.email !== '' ? 'active' : ''}>Email *</label>
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

export default connect(mapStateToProps, actions)(AddNewPerson);