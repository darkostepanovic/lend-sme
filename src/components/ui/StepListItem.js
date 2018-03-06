import React, { Component } from 'react';

class StepListItem extends Component {
    renderItem = () => {
        if(this.props.status === 'current') {
            return (
                <div className='col-sm-3 steplist__single current'>
                    <p>{this.props.name}</p>
                </div>
            )
        } else if (this.props.status === 'passed') {
            return (
                <div className='col-sm-3 steplist__single passed'>
                    <p>{this.props.name}</p>
                </div>
            )
        } else return (
            <div className='col-sm-3 steplist__single'>
                <p>{this.props.name}</p>
            </div>
        )
    };

    render() {
        return (
            this.renderItem()
        )
    }
}

export default StepListItem;