import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import $ from 'jquery';

class LoanDescriptionForm extends Component {
    componentDidMount() {
        const textarea = ReactDOM.findDOMNode(this.refs.loanDescription);
        const charLeft = ReactDOM.findDOMNode(this.refs.charLeft);
        $(textarea).keyup(function () {
            $(charLeft).text('(characters remaining ' + (250 - $(this).val().length) + ')');
        })
    }

    render() {
        return (
            <div className="step-form__form step-form__form--one-column">
                <div className="input-field step-form__form--single-input text-input textarea-input">
                    <textarea
                        id="loan_description"
                        ref="loanDescription"
                        className="materialize-textarea"
                        maxLength="250"
                        required={true}
                        value={this.props.stepThree.loanDescription}
                        onChange={(e) => {this.props.handleLoanDetails('loanDescription', e.target.value)}}
                    />
                    <label htmlFor="loan_description">Click here to type...</label>
                    <span ref='charLeft'>(characters remaining 250)</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({stepThree}) => {
    return {
        stepThree
    }
};

export default connect(mapStateToProps, actions)(LoanDescriptionForm);