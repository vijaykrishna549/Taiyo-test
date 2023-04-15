import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Search from "./Search";

function Read() {
  const [data, setData] = useState([]);

  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
  };
  function getData() {
    axios
      .get("https://642ea6b52b883abc641367d5.mockapi.io/ayio")
      .then((res) => {
        console.log(res.data, "resporty");
        setData(res.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }
  const handleDelete = (id) => {
    axios
      .delete(`https://642ea6b52b883abc641367d5.mockapi.io/ayio/${id}`)
      .then(() => {
        getData();
      });
  };
  const setToLocalStorage = (id, firstName, lastName) => {
    localStorage.setItem("id", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    // localStorage.setItem("phone", phone);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <Link to="/">
          <button className="btn btn-secondary">Add Contact</button>
        </Link>
      </div>
      <div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label"></label>
          <input
            onChange={inputHandler}
            type="search"
            id="exampleInputEmail1"
            placeholder="search here..."
            aria-describedby="emailHelp"
          ></input>
        </div>
      </div>

      <table className={`table `}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            {/* <th scope="col">Email</th> */}
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data
          .filter((element) => {
            console.log(element, "elele");
            if (element === "") {
              return element;
            } else {
              return (
                element.firstName.toLowerCase().includes(inputText) ||
                element.lastName.toLowerCase().includes(inputText)
              );
            }
          })
          .map((data) => {
            console.log(data, "kjgfdxcfvbhnk");
            return (
              <>
                <tbody>
                  <tr>
                    <th scope="row">{data.id}</th>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    {/* <td>{data.email}</td> */}

                    <td>
                      <Link to="/update">
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => {
                            setToLocalStorage(
                              data.id,
                              data.firstName,
                              data.lastName
                              // data.phone
                            );
                          }}
                        >
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDelete(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
      </table>
    </>
  );
}

export default Read;
