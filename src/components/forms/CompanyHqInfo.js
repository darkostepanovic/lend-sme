import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import moment from "moment/moment";
import $ from 'jquery';
import ReactDOM from "react-dom";


class CompanyHqInfo extends Component {
    componentDidMount() {
        const hqCountry = ReactDOM.findDOMNode(this.refs.hqCountry);
        $(hqCountry).material_select();
    }

    render() {
        return (
            <div className="step-form__form step-form__form--two-columns">
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="address"
                        type="text"
                        className="validate"
                        value={this.props.stepTwo.headquartersInfo.address}
                        onChange={(e) => {this.props.handleCompanyHeadquartersInfo('address', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="address" className={this.props.stepTwo.headquartersInfo.address !== '' ? 'active' : ''}>Company's seat (Address) *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input text-input--small">
                    <input
                        id="addressNumber"
                        type="text"
                        className="validate"
                        value={this.props.stepTwo.headquartersInfo.addressNumber}
                        onChange={(e) => {this.props.handleCompanyHeadquartersInfo('addressNumber', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="addressNumber" className={this.props.stepTwo.headquartersInfo.addressNumber !== '' ? 'active' : ''}>Number *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input text-input--small">
                    <input
                        id="postcode"
                        type="text"
                        className="validate"
                        value={this.props.stepTwo.headquartersInfo.postcode}
                        onChange={(e) => {this.props.handleCompanyHeadquartersInfo('postcode', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="postcode" className={this.props.stepTwo.headquartersInfo.postcode !== '' ? 'active' : ''}>Post code *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="city"
                        type="text"
                        className="validate"
                        value={this.props.stepTwo.headquartersInfo.city}
                        onChange={(e) => {this.props.handleCompanyHeadquartersInfo('city', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="city" className={this.props.stepTwo.headquartersInfo.city !== '' ? 'active' : ''}>City *</label>
                </div>
                <div className="input-field step-form__form--single-input select-input">
                    <select ref='hqCountry' required={true}>
                        <option value="0" disabled>Choose country: *</option>
                        <option value="1">Switzerland</option>
                        <option value="2">Lichtenstein</option>
                    </select>
                    <label>Country *</label>
                </div>
                <div className="input-field step-form__form--single-input text-input">
                    <input
                        id="uid"
                        type="text"
                        className="validate"
                        value={this.props.stepTwo.headquartersInfo.uid}
                        onChange={(e) => {this.props.handleCompanyHeadquartersInfo('uid', e.target.value)}}
                        required={true}
                    />
                    <label htmlFor="uid" className={this.props.stepTwo.headquartersInfo.address !== '' ? 'active' : ''}>UID *</label>
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

export default connect(mapStateToProps, actions)(CompanyHqInfo);