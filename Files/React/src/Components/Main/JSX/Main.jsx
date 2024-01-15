import React, { useEffect, useState, useRef } from "react";
import "../CSS/Main.css";
// import search from "../images/search.png";
// import notification from "../images/notification-bell.png";
import writing from "../PNG/writing.png";
// import account from "../images/account.png";
import AllQuestion from '../../Message/JSX/AllQuestion'

function WritePage() {
  const [activeTab, setActiveTab] = useState("For You");
  
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    // Update content height whenever content changes
    if (contentRef.current) {
      setContentHeight(contentRef.current.clientHeight);
    }
  }, [activeTab]);

  return (
    <div className="main-write">
      <div className="top-write">
        {/* Your existing code for header */}
        <div className="logo-write"></div>
        <div className="search-write">
          {/* <img src={search} className="image-write" /> */}
          <input type="search" placeholder="Search.." id="search" required />
        </div>
        <div className="side-write">
          <div className="btn-write">
            <img src={writing} />
            Write
          </div>
          <div className="notification-write">
            {/* <img src={notification} /> */}
          </div>
          <div className="account-write">
            {/* <img src={account} /> */}
          </div>
        </div>
      </div>
     
        <div className="tabs-write">
          <div className="tab-header">
            <div
              className={activeTab === "For You" ? "active" : ""}
              onClick={() => handleTabClick("For You")}
            >
              For You
            </div>
            <div
              className={activeTab === "Following" ? "active" : ""}
              onClick={() => handleTabClick("Following")}
            >
              Following
            </div>
          </div>
          <div className="tab-indicator"></div>
          <div className="tab-body" ref={contentRef}>
            <div className={activeTab === "For You" ? "active" : ""}>
              <h1>For You</h1>
              {/* Your content for 'For You' tab */}
              <p>
                <AllQuestion />
                <AllQuestion />
              </p>
            </div>
            <div className={activeTab === "Following" ? "active" : ""}>
              <h1>Following</h1>
              {/* Your content for 'Following' tab */}
              <p>
                <AllQuestion />
              </p>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default WritePage;