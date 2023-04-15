import React from "react";
import Sidebar from "./Sidebar";
import "../App.css";
import { Link } from "react-router-dom";

function MainContent() {
  return (
    <div>
      <div className="main-ContentArea">
        <Sidebar />
        <div className="contentArea">
          <Link to="/create">
            <button type="button" class="cbtn btn btn-secondary">
              create contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
