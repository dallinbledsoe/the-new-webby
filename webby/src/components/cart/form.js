import React, { Component } from 'react';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements'

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    async submit(ev) {
        let {token} = await this.props.stripe.createToken({name: "Name"});
        let response = await fetch("/charge", {
          method: "POST",
          headers: {"Content-Type": "text/plain"},
          body: token.id
        });
      
        if (response.ok) console.log("Purchase Complete!")
      }
    

    render() {
        return (
            <div className="checkout">
             <h1>Would you like to complete the purchase?</h1>
             <CardElement />
             <button onClick={this.submit}>Purchase</button>
            </div>

        )
    }
}

export default class injectStripe{CheckoutForm}