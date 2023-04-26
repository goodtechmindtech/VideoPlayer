import "./sidebar.css";

import LiveTvIcon from "@mui/icons-material/LiveTv";
import EngineeringIcon from "@mui/icons-material/Engineering";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Dashboard</h3> */}
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LiveTvIcon className="sidebarIcon" />
                Players
              </li>
            </Link>
            <Link to="/contentUnits" className="link">
              <li className="sidebarListItem">
                <EngineeringIcon className="sidebarIcon" />
                Content Units
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
