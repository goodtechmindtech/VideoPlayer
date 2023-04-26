import React from "react";
import "./Players.css";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import playIcon from "../../../assets/play-button-icon.jpg";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Link } from "react-router-dom";

export default function Players() {
  return (
    <div className="palyers">
      <Navbar />
      <div className="palyers-main">
        <Sidebar />
        <div className="palyers-main-container">
          <Link to="/addPlayer" className="newPlayerButton">
            Add New Player
          </Link>
          <div className="programsContainer">
            <div className="programsBox">
              <img className="playIcon" src={playIcon} alt=""></img>
              <div className="programsBox-main">
                <div className="programsBox-title-div">
                  <span className="programsBox-title">Player 1</span>
                  <div className="programsBox-button-div">
                    <span className="programsBox-button">Edit</span>
                  </div>
                </div>
                <div style={{ margin: "5px 0px", display: "flex", alignItems: "center" }}>
                  <span>Player Id</span>
                </div>

                <span className="programBox-details">
                  <Link to="/dashboard" className="link">
                    <li className="sidebarListItem active">
                      <BorderColorIcon className="sidebarIcon" />
                    </li>
                  </Link>
                  <Link to="/pendingApprovalsAdmin" className="link">
                    <li className="sidebarListItem">
                      <AssessmentIcon className="sidebarIcon" />
                    </li>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
