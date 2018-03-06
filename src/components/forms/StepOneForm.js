import React, { Component } from 'react';
import $ from 'jquery';

class StepOneForm extends Component {
    componentDidMount() {
        $('select').material_select();
        $('.datepicker').click(function () {
          $('.datepicker').pickadate({
              selectMonths: true, // Creates a dropdown to control month
              selectYears: 100, // Creates a dropdown of 15 years to control year,
              today: 'Today',
              clear: 'Clear',
              close: 'Ok',
              closeOnSelect: false // Close upon selecting a date,
          })
        })
    }

    render() {
        return (
            <form className="step-form__form">
                <div className="step-form__form--single-input radio-input" id="radio-input">
                    <label htmlFor="radio-input">Title*</label>
                    <p>
                        <input name="group1" type="radio" id="mr" />
                        <label htmlFor="mr">Mr.</label>
                    </p>
                    <p>
                        <input name="group1" type="radio" id="mrs" />
                        <label htmlFor="mrs">Mrs.</label>
                    </p>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input id="first_name" type="text" className="validate"/>
                    <label htmlFor="first_name">First Name *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input id="last_name" type="text" className="validate"/>
                    <label htmlFor="last_name">Last Name *</label>
                </div>
                <div className="input-field step-form__form--single-input select-input">
                    <select defaultValue={0}>
                        <option value="0" disabled>Signing authority *</option>
                        <option value="1">Single</option>
                        <option value="2">Collective</option>
                        <option value="3">None</option>
                    </select>
                    <label>Signing authority *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input id="function" type="text" className="validate"/>
                    <label htmlFor="function">Function *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input date-picker">
                    <input id="dob" type="text" className="datepicker"/>
                    <label htmlFor="function">Date of birth *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input id="street" type="text" className="validate"/>
                    <label htmlFor="function">Street address *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input id="number" type="text" className="validate"/>
                    <label htmlFor="function">Address number *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input id="postcode" type="text" className="validate"/>
                    <label htmlFor="postcode">Postcode *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input id="city" type="text" className="validate"/>
                    <label htmlFor="city">City *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input id="country" type="text" className="validate"/>
                    <label htmlFor="country">Country *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input id="phone" type="text" className="validate"/>
                    <label htmlFor="phone">Phone No. *</label>
                </div>
            </form>
        )
    }
}

export default StepOneForm;