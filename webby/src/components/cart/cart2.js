import * as React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements'

export default class CartTwo extends React.Component {

    render() {
        return (
            <div>
            <StripeProvider apiKey="pk_test_DZQdOlPEToyFbbjaHjUht9q4">
            <Elements>
                <Form />

            </Elements>

            </StripeProvider>
            </div>
        )
    }
}