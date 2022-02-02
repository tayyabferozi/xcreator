import React, { useState } from "react";

import Modal from "../components/Modal";
import MainLayout from "../layouts/MainLayout";

const Modals = () => {
  const [successModalState, setSuccessModalState] = useState(false);
  const [failureModalState, setFailureModalState] = useState(false);
  const [paymentModalState, setPaymentModalState] = useState(false);

  const toggleModal = (setModalState) => {
    setModalState((prevState) => !prevState);
  };

  return (
    <MainLayout>
      <button
        className="py-3 btn d-block"
        onClick={() => {
          toggleModal(setSuccessModalState);
        }}
      >
        Show success modal
      </button>
      <button
        className="py-3 btn d-block"
        onClick={() => {
          toggleModal(setFailureModalState);
        }}
      >
        Show failure modal
      </button>
      <button
        className="py-3 btn d-block"
        onClick={() => {
          toggleModal(setPaymentModalState);
        }}
      >
        Show payment modal
      </button>
      <Modal
        activeState={successModalState}
        toggleModal={setSuccessModalState}
        feedback
        vector="./assets/img/modal-payment-success-icon.png"
        vectorClassName="success-vector"
        title="Payment Success"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis nisi imperdiet arcu orci sed"
      />
      <Modal
        activeState={failureModalState}
        toggleModal={setFailureModalState}
        feedback
        vector="./assets/img/modal-payment-failed-icon.png"
        title="Payment Success"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis nisi imperdiet arcu orci sed"
      />
      <Modal
        activeState={paymentModalState}
        toggleModal={setPaymentModalState}
        payment
        title="Payment Method"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis nisi imperdiet arcu orci sed"
        amount="11"
        transactions={[
          {
            title: "Ending in: . . . .8845",
            subTitle: "Last time used: Thu, Mar 18 2021",
            bankVector: "./assets/vectors/bank-amex.svg",
          },
          {
            title: "Ending in: . . . .2271",
            subTitle: "Never Used",
            bankVector: "./assets/vectors/bank-mastercard.svg",
          },
          {
            title: "Ending in: . . . .2271",
            subTitle: "Never Used",
            bankVector: "./assets/vectors/bank-mastercard.svg",
          },
          {
            title: "Ending in: . . . .2271",
            subTitle: "Never Used",
            bankVector: "./assets/vectors/bank-mastercard.svg",
          },
          {
            title: "Ending in: . . . .2271",
            subTitle: "Never Used",
            bankVector: "./assets/vectors/bank-mastercard.svg",
          },
        ]}
      />
    </MainLayout>
  );
};

export default Modals;
