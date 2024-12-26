import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
let MyForm = () => {
  let [len, setLen] = useState("30");
  let [passLen, setpassLen] = useState("14");
  let email = (e) => {
    let alert = document.querySelector(".notification");
    let emailInp = e.target.value;
    // console.log(emailInp);
    // console.log(emailInp.length);
    let emaillabel = document.querySelector(".emaillabel");
    if (emailInp.length > len) {
      console.warn("length is complete");
      emaillabel.innerHTML = "length completed";
      emaillabel.classList.add("red");
      alert.innerHTML = "email must be in 30 character & password < 16";
    } else {
      emaillabel.innerHTML = "email ";
      emaillabel.classList.remove("red");
      alert.innerHTML = "";
    }
    return emailInp;
  };

  function password(p) {
    let passval = p.target.value;
    let passlabel = document.querySelector(".passlabel");
    // console.log(passval);
    if (passval.length > passLen) {
      passlabel.innerHTML = "password  length completed";
      passlabel.classList.add("red");
      alert.innerHTML = "email must be in 30 character & password < 16";
    } else {
      passlabel.innerHTML = "password ";
      passlabel.classList.remove("red");
      alert.innerHTML = "";
    }
    return passval;
  }
  let submit = () => {
    let msg = document.querySelector(".corection");
    let finalmail = document.querySelector(".email").value;
    let finalpass = document.querySelector(".password").value;

    if (finalmail !== "" && finalpass !== "") {
      if (finalmail.includes(".com") && finalmail.includes("@")) {
        if (finalmail.length > 15) {
          if (finalpass.length > 8) {
            msg.textContent = "succesfully submitted your record";
            console.warn(`email => ${finalmail} , pasword => ${finalpass}`);
             document.querySelector(".email").value=''
            document.querySelector(".password").value='';
            
          } else {
            msg.textContent = "pasword must be 8 character";
          }
        } else {
          msg.textContent = "email length is less";
        }
      } else {
        console.warn("your email is in correct use @ ,com");
        msg.textContent = "your email is in correct use @ ,com";
      }
    } else {
      console.warn("please fill properly");
      msg.textContent = "please fill properly";
    
    }
  };

  return (
    <>
      <h1 className="h1">login </h1>
      <div className="container">
        <form className="form">
          <label className="notification red"></label>
          <label className="emaillabel">email</label>
          <input
            onChange={email}
            className="email"
            placeholder="email: abc@mail.com"
          ></input>
          <label className="passlabel">password</label>
          <input
            onChange={password}
            className="password"
            placeholder="password: ab3#^3"
          ></input>
          <p className="corection"></p>
        </form>
        <button onClick={submit} className="sub">
          submit
        </button>
      </div>
    </>
  );
};

export default MyForm;
