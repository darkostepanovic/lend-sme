import React, { Component } from 'react';
import StepOneForm from "../forms/StepOneForm";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import CompanyOwnerInfo from "../forms/CompanyOwnerInfo";
import AddNewPerson from "../forms/AddNewPerson";

import autosave from '../../assets/autosave.svg';

class StepOne extends Component {

    handleNext = (e) => {
        e.preventDefault();
        const currentStep = Number(this.props.currentStep);
        const nextStep = currentStep + 1;
        if (nextStep < 5) {
            this.props.history.push(`/${nextStep}`);
        }
    };

    renderCompanyOwnerInfo = () => {
        if(this.props.stepOne.formData.signingAuthority === '3') {
            return <CompanyOwnerInfo/>
        }
    };

    renderFormTitle = () => {
        if(this.props.stepOne.formData.signingAuthority === '3') {
            return (
                <div className="step-form__info--text">
                    <h5><b>Company owner information</b></h5>
                </div>
            )
        }
    };

    renderNewPersonTitle = () => {
        if(this.props.stepOne.addNewPerson) {
            return (
                <div className="step-one__new-person-title">
                    <div className="step-form__info--text">
                        <h5>Aditional contact person</h5>
                    </div>
                    <div className="step-form__info--remove">
                        <a onClick={() => {this.props.newPersonToggle()}}>Remove person</a>
                    </div>
                </div>
            )
        }
    };

    renderNewPerson = () => {
        if(this.props.stepOne.addNewPerson) {
            return (
                <AddNewPerson/>
            )
        } else {
            return (
                <h5><a className="color-secondary" onClick={() => {this.props.newPersonToggle()}}><b>+ Add contact person</b></a></h5>
            )
        }
    };

    render() {
        return (
            <div className="step-one">
                <div className="row--flex step-form__info">
                    <div className="step-form__info--text">
                        <h5>Contact person information</h5>
                    </div>
                    <div className="step-form__info--autosave">
                        <img src={autosave} alt="autosave"/>
                        <span>Autosaved at 12.14 pm</span>
                    </div>
                </div>
                <div className="row--flex">
                    <div className="step-form__info--text">
                        <p>The information below refferst to company representatives who will be contacted by LEND if any additional information is reqired for the loan process.</p>
                    </div>
                </div>
                <div className="row step-form">
                    <form id='stepOneForm' ref='stepForm' name='stepForm' onSubmit={(e) => {this.handleNext(e)}}>
                        <StepOneForm/>
                        {this.renderFormTitle()}
                        {this.renderCompanyOwnerInfo()}
                        {this.renderNewPersonTitle()}
                        {this.renderNewPerson()}
                    </form>
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

export default withRouter(connect(mapStateToProps, actions)(StepOne));