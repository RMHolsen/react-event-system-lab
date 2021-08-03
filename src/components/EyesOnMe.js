// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {
    render() {
        return(
            <button onFocus={this.focusHandler} onBlur={this.blurHandler}>
                Focus Button
            </button>
        )
    }

    focusHandler = () => {
        console.log('Good!');
    }

    blurHandler = () => {
        console.log('Hey! Eyes on me!');
    }
}