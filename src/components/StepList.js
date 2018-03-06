import React, { Component } from 'react';
import StepListItem from "./ui/StepListItem";

class StepList extends Component {

    renderItem = currentStep => {
        let items = [];
        for(let i = 1; i<5; i++) {
            let name;
            if( i === 1 ) {
                name = '1. Contact Person'
            } else if (i === 2) {
                name = '2. Company Details'
            } else if (i === 3) {
                name = '3. Loan Details'
            } else name = '4. Overview';

            if (i === currentStep) {
                items.push(<StepListItem key={i} status='current' name={name}/>)
            } else if (i < currentStep) {
                items.push(<StepListItem key={i} status='passed' name={name}/>)
            } else items.push(<StepListItem key={i} name={name}/>);
        }
        return items;
    };

    render() {
        let currentStep;
        if (this.props.currentStep !== '1' && this.props.currentStep !== '2' && this.props.currentStep !== '3' && this.props.currentStep !== '4') {
            currentStep = 1
        } else {
            currentStep = Number(this.props.currentStep);
        }
        return (
            <div className='row--flex steplist'>
                {this.renderItem(currentStep)}
            </div>
        )
    }
}

export default StepList;