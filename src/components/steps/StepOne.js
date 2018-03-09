import React, { Component } from 'react';
import StepOneForm from "../forms/StepOneForm";
import { connect } from 'react-redux';
import * as actions from '../../actions';
import CompanyOwnerInfo from "../forms/CompanyOwnerInfo";
import AddNewPerson from "../forms/AddNewPerson";

class StepOne extends Component {

    renderCompanyOwnerInfo = () => {
        if(this.props.stepOne.formData.signingAuthority === '3') {
            return <CompanyOwnerInfo/>
        }
    };

    renderFormTitle = () => {
        if(this.props.stepOne.formData.signingAuthority === '3') {
            return (
                <div className="row">
                    <div className="step-form__info--text">
                        <h5><b>Company owner information</b></h5>
                    </div>
                </div>
            )
        }
    };

    renderNewPersonTitle = () => {
        if(this.props.stepOne.addNewPerson) {
            return (
                <div className="row--flex step-one__new-person-title">
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
                <div className="row--flex">
                    <div className="step-form__info--text">
                        <h5>Contact person information</h5>
                    </div>
                    <div className="step-form__info--autosave">
                        1
                    </div>
                </div>
                <div className="row--flex">
                    <div className="step-form__info--text">
                        <p>The information below refferst to company representatives who will be contacted by LEND if any additional information is reqired for the loan process.</p>
                    </div>
                </div>
                <div className="row step-form">
                    <StepOneForm/>
                </div>

                {this.renderFormTitle()}

                <div className="row step-form">
                    {this.renderCompanyOwnerInfo()}
                </div>

                {this.renderNewPersonTitle()}

                <div className="row step-form">
                    {this.renderNewPerson()}
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

export default connect(mapStateToProps, actions)(StepOne);