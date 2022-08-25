import React from 'react'
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import PaymentHook from './PaymentHook';
import RecurringPayment from './RecurringPayment';


function App() {

  let date = Date.now()

  let customerDetails = {
    email: import.meta.env.VITE_EMAIL_USER,
    phonenumber: import.meta.env.VITE_PHONE_USER,
    name: 'd-coder'
  }

  let designPhase = {
      title: 'My store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    }

  const config ={
    public_key: import.meta.env.VITE_FLUTTER_PUBLIC_KEY,
    tx_ref: date,
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: customerDetails,
    customizations: designPhase
  }


  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave",
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  }
 
  return (
    <div>
      <div>
        <h4 style={{ textDecoration: "underline", textTransform: "capitalized" }}>First Option. Payment with Flutterwavebutton</h4>
        <FlutterWaveButton {...fwConfig} />
      </div>

      <div >
        <h4 style={{ marginTop: "5em", textDecoration: "underline", textTransform: "capitalized" }}>Second Option. Payment with Flutter React Hooks</h4>
         <PaymentHook config={config} />
      </div>

      <div >
        <h4 style={{ marginTop: "5em", textDecoration: "underline", textTransform: "capitalized" }}>Third Option. Recurring Payments</h4>
         <RecurringPayment />
      </div>
    </div>
  )
}

export default App
