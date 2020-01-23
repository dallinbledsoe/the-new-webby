import React from 'react';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements'

class Form extends Component {
    render() {
        return (
        <h1>form</h1>
        )
    }
}

export default injectStripe(Form)