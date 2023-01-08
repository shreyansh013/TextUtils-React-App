import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    // console.log("upclicked");
    // let newText = text.toUpperCase();
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleCopyClick = (event) => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            <h3>{props.heading}</h3>
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            value={text}
            onChange={changeHandler}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          type="button"
          className={`btn btn-outline-${
            props.mode === "light" ? "secondary" : "primary"
          } mx-1`}
          onClick={handleUpClick}
        >
          <b>Convert to UpperCase</b>
        </button>
        <button
          type="button"
          className={`btn btn-outline-${
            props.mode === "light" ? "secondary" : "primary"
          } mx-1`}
          onClick={handleLowClick}
        >
          <b>Convert to LowerCase</b>
        </button>
        <button
          type="button"
          className={`btn btn-outline-${
            props.mode === "light" ? "secondary" : "primary"
          } mx-1`}
          onClick={handleClearClick}
        >
          <b>Clear Text</b>
        </button>
        <button
          type="button"
          className={`btn btn-outline-${
            props.mode === "light" ? "secondary" : "primary"
          } mx-1`}
          onClick={handleCopyClick}
        >
          <b>Copy Text</b>
        </button>
        <button
          type="button"
          className={`btn btn-outline-${
            props.mode === "light" ? "secondary" : "primary"
          } mx-1`}
          onClick={handleExtraSpaceClick}
        >
          <b>Remove Extra Space</b>
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h3>Text Summary</h3>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>Time taken to read Text: {text.split(" ").length * 0.008} Minutes</p>
        <h4>Text Preview:</h4>
        <p>
          {text.length > 0
            ? text
            : "Enter something in text box to preview here"}
        </p>
      </div>
    </div>
  );
}
