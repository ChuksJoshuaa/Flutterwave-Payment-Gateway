import React from "react";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

const RecurringPayment = () => {
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
    customizations: designPhase,
    meta: { counsumer_id: "7898", consumer_mac: "kjs9s8ss7dd" },
  }

  const handleFlutterPayment = useFlutterwave(config);


  return <div>
            <button
                onClick={() => {
                    handleFlutterPayment({
                    callback: (response) => {
                        console.log(response);
                        closePaymentModal() // this will close the modal programmatically
                    },
                    onClose: () => {},
                    });
                }}
                >
                Payment with React hooks
                </button>
      </div>;
};

export default RecurringPayment;
