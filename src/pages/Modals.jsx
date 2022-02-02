import React from "react";

import Modal from "../components/Modal";
import MainLayout from "../layouts/MainLayout";

const Modals = () => {
  return (
    <MainLayout>
      <Modal
        feedback
        vector="./assets/img/modal-payment-success-icon.png"
        vectorClassName="success-vector"
        title="Payment Success"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis nisi imperdiet arcu orci sed"
      />
      {/* <Modal
        feedback
        vector="./assets/img/modal-payment-failed-icon.png"
        title="Payment Success"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis nisi imperdiet arcu orci sed"
      /> */}
      <Modal
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
