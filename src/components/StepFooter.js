import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class StepFooter extends Component {

    handleNext = (e) => {
        const currentStep = Number(this.props.currentStep);
        const nextStep = currentStep + 1;
        if (nextStep < 5) {
            this.props.history.push(`/${nextStep}`);
        }
    };

    handleBack = () => {
        const currentStep = Number(this.props.currentStep);
        const prevStep = currentStep - 1;
        if (prevStep > 0) {
            this.props.history.push(`/${prevStep}`);
        }
    };

    checkValidity = () => {
        if(this.props.currentStep === '1') {
            const formData = this.props.stepOne.formData;
            const newPerson = this.props.stepOne.addNewPerson;
            if(formData.signingAuthority !== '3' && !newPerson) {
                const { addressNumber, signingAuthority, dob, city, country, firstName, lastName, phone, postcode, streetAddress} = formData;
                const personFunction = formData.function;
                if (addressNumber !== '' && city !== '' && country !== '' && signingAuthority !== 0 && firstName !== '' && lastName !== '' && phone !== '' && postcode !== '' && streetAddress !== '' && personFunction !== '') {
                    return false;
                } else {
                    return true;
                }
            } else if (formData.signingAuthority !== '3' && newPerson) {
                const { addressNumber, signingAuthority, dob, city, country, firstName, lastName, phone, postcode, streetAddress} = formData;
                const personFunction = formData.function;
                if (
                    addressNumber !== '' &&
                    city !== '' &&
                    country !== '' &&
                    signingAuthority !== 0 &&
                    firstName !== '' &&
                    lastName !== '' &&
                    phone !== '' &&
                    postcode !== '' &&
                    streetAddress !== '' &&
                    personFunction !== '' &&
                    formData.newPersonInfo.addressNumber !== '' &&
                    formData.newPersonInfo.city !== '' &&
                    formData.newPersonInfo.country !== '' &&
                    formData.newPersonInfo.email !== '' &&
                    formData.newPersonInfo.firstName !== '' &&
                    formData.newPersonInfo.lastName !== '' &&
                    formData.newPersonInfo.phone !== '' &&
                    formData.newPersonInfo.postcode !== '' &&
                    formData.newPersonInfo.streetAddress !== '' &&
                    formData.newPersonInfo.emailValid !== false
                ) {
                    return false;
                } else {
                    return true;
                }
            } else if (formData.signingAuthority === '3' && !newPerson) {
                const { addressNumber, signingAuthority, dob, city, country, firstName, lastName, phone, postcode, streetAddress} = formData;
                const personFunction = formData.function;
                if (
                    addressNumber !== '' &&
                    city !== '' &&
                    country !== '' &&
                    signingAuthority !== 0 &&
                    firstName !== '' &&
                    lastName !== '' &&
                    phone !== '' &&
                    postcode !== '' &&
                    streetAddress !== '' &&
                    personFunction !== '' &&
                    formData.companyOwnerInfo.addressNumber !== '' &&
                    formData.companyOwnerInfo.city !== '' &&
                    formData.companyOwnerInfo.country !== '' &&
                    formData.companyOwnerInfo.firstName !== '' &&
                    formData.companyOwnerInfo.lastName !== '' &&
                    formData.companyOwnerInfo.postcode !== '' &&
                    formData.companyOwnerInfo.streetAddress !== ''
                ) {
                    return false;
                } else {
                    return true;
                }
            } else {
                const { addressNumber, signingAuthority, dob, city, country, firstName, lastName, phone, postcode, streetAddress} = formData;
                const personFunction = formData.function;
                if (
                    addressNumber !== '' &&
                    city !== '' &&
                    country !== '' &&
                    signingAuthority !== 0 &&
                    firstName !== '' &&
                    lastName !== '' &&
                    phone !== '' &&
                    postcode !== '' &&
                    streetAddress !== '' &&
                    personFunction !== '' &&
                    formData.newPersonInfo.addressNumber !== '' &&
                    formData.newPersonInfo.city !== '' &&
                    formData.newPersonInfo.country !== '' &&
                    formData.newPersonInfo.email !== '' &&
                    formData.newPersonInfo.firstName !== '' &&
                    formData.newPersonInfo.lastName !== '' &&
                    formData.newPersonInfo.phone !== '' &&
                    formData.newPersonInfo.postcode !== '' &&
                    formData.newPersonInfo.streetAddress !== '' &&
                    formData.newPersonInfo.emailValid !== false &&
                    formData.companyOwnerInfo.addressNumber !== '' &&
                    formData.companyOwnerInfo.city !== '' &&
                    formData.companyOwnerInfo.country !== '' &&
                    formData.companyOwnerInfo.firstName !== '' &&
                    formData.companyOwnerInfo.lastName !== '' &&
                    formData.companyOwnerInfo.postcode !== '' &&
                    formData.companyOwnerInfo.streetAddress !== ''
                ) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    };

    renderButtons = () => {
      if(this.props.currentStep === '1') {
          return (
              <div className="step-footer__btn">
                  <button type='submit' className='btn' onClick={this.handleNext} disabled={this.checkValidity()}>Next <i className="material-icons">chevron_right</i></button>
              </div>
          )
      } else if(this.props.currentStep === '4') {
          return (
              <div className="step-footer__btn">
                  <button className='btn' onClick={this.handleBack}><i className="material-icons">chevron_left</i> Back</button>
              </div>
          )
      } else {
          return (

              <div className="step-footer__btn">
                  <button className='btn' onClick={this.handleBack}><i className="material-icons">chevron_left</i> Back</button>
                  <button className='btn' onClick={this.handleNext}>Next <i className="material-icons">chevron_right</i></button>
              </div>

          )
      }
    };

    render() {
        return (
            <div className="step-footer">
                <div className="row">
                    <div className="divider">123</div>
                </div>
                <div className="row--flex step-footer__buttons">
                    <div className="step-footer--save">
                        <a>Save &amp; Go to Dashboard</a>
                    </div>
                    {this.renderButtons()}
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

export default withRouter(connect(mapStateToProps, null)(StepFooter));