import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Dashboard = ({ children }) => {
  const [text, setText] = useState();
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/new video",
      name: "New Video",
    },
    {
      path: "/home",
      name: "Home",
    },
    {
      path: "/template",
      name: "Template",
    },
    {
      path: "/all video",
      name: "All Video",
    },
  ];
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
      <div>
        <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            style={{
            marginLeft: "50px",
            marginTop: "50px",
            width: "1000px",
            padding: "5px",
            }}
        />
      </div>
      <div>
        <button
            style={{
                marginLeft:'-1010px',
                marginTop: '120px',
                width: "100px",
                padding: "5px",
            }}
            >
            Create Project
            </button>   
      </div>
      <div>
        <button
            style={{
                marginLeft: "-880px",
                marginTop: "120px",
                width: "100px",
                padding: "4px",
            }}
            >
                Record Project
            </button> 
      </div>
      <div style={{ marginTop: "130px", fontSize: "20px" }}>
        <Link
          href=""
          onClick={() => {
            alert("To View All Videos");
          }}
        >
          AllVideos
        </Link>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Dashboard;