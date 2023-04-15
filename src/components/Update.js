import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const header = { "Access-Control-Allow-Origin": "*" };
// import { Link } from "react-router-dom";

function Update() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");

  const navigate = useNavigate();
  const url = "https://642ea6b52b883abc641367d5.mockapi.io/ayio";

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://642ea6b52b883abc641367d5.mockapi.io/ayio/${id}`, {
        firstName: firstName,
        lastName: lastName,
        // email: email,
      })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            First Name
          </label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            value={firstName}
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
            value={lastName}
            className="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to="/read">
          <button className="btn btn-secondary">Back</button>
        </Link>
        {/* <div className="d-flex justify-content-between m-2"></div> */}
      </form>
    </>
  );
}

export default Update;
