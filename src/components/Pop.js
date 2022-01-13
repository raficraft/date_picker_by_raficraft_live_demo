import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark, atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
            <section className="dev_info">
              <span
                className="close_modal"
                onClick={(e) => {
                  handleClick(e);
                }}
                data-close="true"
              ></span>
              <h1>Date picker by Raficraft</h1>
              <SyntaxHighlighter
                language="javascript"
                style={atomDark}
                useInlineStyles="false"
              >
                {codeString}
              </SyntaxHighlighter>
            </section>
          </>
        )
      )}
    </div>
  );
}

export default Pop;
