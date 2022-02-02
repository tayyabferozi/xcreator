import React, { useState } from "react";
import clsx from "clsx";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Input from "./Input";

const Modal = ({
  activeState,
  toggleModal,
  payment,
  feedback,
  vector,
  title,
  subTitle,
  vectorClassName,
  transactions,
  amount,
}) => {
  const [recentActive, setRecentActive] = useState(true);

  return (
    <div
      className={clsx(
        "custom-modal",
        { feedback: feedback },
        { active: activeState }
      )}
    >
      <div
        onClick={() => {
          toggleModal((prevState) => !prevState);
        }}
        className="close"
      >
        <img className="" src="./assets/vectors/modal-close.svg" alt="close" />
      </div>

      {feedback && (
        <div className="feedback-content">
          <img
            className={clsx("feedback-vector", vectorClassName)}
            src={vector}
            alt={title}
          />
          <h1 className="title">{title}</h1>
          <p className="sub-title">{subTitle}</p>

          <Button primary label="Back to Home" />
        </div>
      )}

      {payment && (
        <div className="payment-content">
          <div className="head">
            <div className="main">
              <h1 className="title">{title}</h1>
              <p className="sub-title light">{subTitle}</p>
            </div>
          </div>
          <div className="body">
            <div className="tabs">
              <button
                onClick={() => setRecentActive(true)}
                className={clsx("btn tab", { active: recentActive })}
              >
                Recently use
              </button>
              <button
                onClick={() => setRecentActive(false)}
                className={clsx("btn tab", { active: !recentActive })}
              >
                New Card
              </button>
            </div>

            <div className="tab-content">
              {recentActive ? (
                <div className="transactions">
                  {transactions.map((el, idx) => {
                    const { title, subTitle, bankVector } = el;

                    return (
                      <div key={"transaction" + idx} className="transaction">
                        <Checkbox>
                          <h6 className="title">{title}</h6>
                          <p className="sub-title small light">{subTitle}</p>
                        </Checkbox>
                        <img src={bankVector} alt="title" />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="new-card">
                  <Input label="Enter Card Number*" placeholder="111222333" />
                  <div className="container-fluid px-0">
                    <div className="row">
                      <div className="col">
                        <Input
                          label="Valid Date"
                          select
                          placeholder="MM"
                          options={[{ text: "" }]}
                        />
                      </div>
                      <div className="col">
                        <Input
                          label="&nbsp;"
                          select
                          placeholder="MM"
                          options={[{ text: "" }]}
                        />
                      </div>
                    </div>
                  </div>
                  <Input label="CVV*" placeholder="1234" />
                  <Input label="Postal zip*" placeholder="1234" />
                  <p className="small light">Admin fee inclued $1</p>
                </div>
              )}
            </div>

            <div className="d-flex justify-content-end pay-btn-container">
              <Button primary rootClassName="me-0">
                <div className="d-flex justify-content-between align-items-center me-0">
                  <div>Pay</div>
                  <div className="amount">${amount}</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
