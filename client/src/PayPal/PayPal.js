import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class PayPal extends React.Component {
    render() {
        const client = {
            sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
            production: 'sandbox',
        }
        return (
            <PaypalExpressBtn client={client} currency={'USD'} total={10.00} />
        );
    }
}

export default PayPal;