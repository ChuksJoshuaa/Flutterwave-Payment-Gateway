import React from "react";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';


const PaymentHook = ({ config }) => {

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

export default PaymentHook;
