import React, { Component } from 'react';

class InterestRate extends Component {
    render() {
        return (
            <div className="interest-rate">
                <div className="interest-rate__header">
                    <div className="interest-rate__header--title">
                        <p>Interest rate*:</p>
                    </div>
                    <div className="interest-rate__header--text">
                        <p>from <b>4.50%</b></p>
                        <p>to <b>9.80%</b></p>
                    </div>
                </div>
                <hr/>
                <div className="interest-rate__monthly">
                    <p className="title">Monthly Rate (CHF*):</p>
                    <div className="interest-rate__monthly--values">
                        <p>1000</p>
                        <p>1200</p>
                    </div>
                </div>
                <div className="interest-rate__insurance">
                    <p className="title">of which insurance;</p>
                    <div className="interest-rate__insurance--values">
                        <p>455</p>
                        <p>543</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default InterestRate;