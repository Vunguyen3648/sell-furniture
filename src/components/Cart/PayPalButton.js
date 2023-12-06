import React from 'react';

export default class PayPalButton extends React.Component {
  redirectToPayPal = () => {
    const { total } = this.props;
    const clientId = process.env.REACT_APP_APP_ID;
    const currency = 'USD';
    const returnUrl = `${window.location.origin}/success`;
    const cancelUrl = `${window.location.origin}/cancel`;

    const paypalUrl = `https://www.paypal.com/vn/home?locale.x=vi_VN`;

    window.location.href = paypalUrl;
  };

  render() {
    return (
      <button onClick={this.redirectToPayPal} className="paypal-button">
        Pay with PayPal
      </button>
    );
  }
}