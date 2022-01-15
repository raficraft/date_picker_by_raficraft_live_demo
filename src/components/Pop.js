import React, { useState } from "react";
import PopContent from "./PopContent";

function Pop() {
  console.log("render");

  const [show, setShow] = useState("pop");
  const [isContentModal, setIsContentModal] = useState(false);

  const handleClick = (e) => {
    console.log(e.target.dataset.close);
    if (show === "pop") {
      setShow("pop_big anime");

      setTimeout(() => {
        setIsContentModal(true);
      }, 1000);
    } else if ("pop_big anime") {
      setIsContentModal(false);
      setShow("pop_big anime-reverse");

      setTimeout(() => {
        setShow("pop");
      }, 900);
    }
  };

  const codeString = `
    const testHighLight_syntax = ()=> { return true }
    const testHighLight_syntax = ()=> { return true }
    const testHighLight_syntax = ()=> { return true }
  `;
  return (
    <div className={show}>
      {show === "pop" ? (
        <span
          onClick={(e) => {
            handleClick(e);
          }}
        >
          <p className="what">?</p>
        </span>
      ) : (
        isContentModal && (
          <>
            <span
              className="close_modal"
              onClick={(e) => {
                handleClick(e);
              }}
              data-close="true"
            ></span>
            <section className="dev_info">
              <PopContent></PopContent>
            </section>
          </>
        )
      )}
    </div>
  );
}

export default Pop;
