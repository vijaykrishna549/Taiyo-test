import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
const header = { "Access-Control-Allow-Origin": "*" };

function CreateContact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const history = useNavigate();
  const url = "https://642ea6b52b883abc641367d5.mockapi.io/ayio";
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit clicked");
    axios
      .post(url, {
        firstName: firstName,
        lastName: lastName,
        // email: email,

        header,
      })
      .then(() => {
        history("/read");
      });
  };
  return (
    <div>
      {/* <Sidebar></Sidebar> */}
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            First Name
          </label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Last Name
          </label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          ></input>
          <label class="form-check-label" for="flexRadioDefault1">
            Active
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          ></input>
          <label class="form-check-label" for="flexRadioDefault2">
            Inactive
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Save Contact
        </button>
      </form>
    </div>
  );
}

export default CreateContact;
