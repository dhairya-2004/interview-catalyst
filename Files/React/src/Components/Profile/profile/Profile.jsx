import React, { useState, useEffect } from "react";
import "../profile/Profile.css";
import SearchIcon from "@mui/icons-material/Search";
import SchoolIcon from "@mui/icons-material/School";
import AssessmentIcon from "@mui/icons-material/Assessment";
import EditProfile from "../EditProfile/EditProfile";
import axios from "axios";
import AddQuestion from "../../Message/JSX/AllQuestion";
import Back from './back-image.jpg'

const Profile = () => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [cusername, setCUsername] = useState("");
  const [profile, setProfile] = useState({});
  const [questionData, setQuestionData] = useState([]);

  const openEditModal = () => {
    setEditModalOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching login...");

      try {
        const res = await axios.get("http://localhost:8000/user/login", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setCUsername(res.data.cusername);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data...111");

      try {
        const res = await axios.post(
          'http://localhost:8000/user/getprofile',{cusername}
        );
        const newData = res.data;
        console.log(newData);
        setProfile(newData.profile);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cusername]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching question...");

      try {
        const res = await axios.get("http://localhost:8000/user/question", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const newData = res.data.question;
        console.log("hii");
        console.log(newData);
        setQuestionData(newData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <nav className="nav-profile">
        <div className="name-profile">Interview Catalyst</div>

        <div className="search-write">
          <SearchIcon className="image-main" />
          <input
            type="search"
            placeholder="Search Username"
            id="searchprofile"
            // onChange={onSearch}
            required
          />
        </div>

        <div className="btn-profile" onClick={openEditModal}>
          <button className="btn-prof">Edit Profile</button>
        </div>
      </nav>
      <section className="profile-all">
        {/* <div className="container-profile">
          <div className="overlap-profile">
            
          </div>

          <div className="top-profile">
          <div className="user-profile">
              <img
                src="https://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg"
                alt=""
              />
            </div>
            <div className="info-profile">
              <h1 className="profile-name">{profile.name}</h1>
              <div className="web">
                <SchoolIcon className="profile-icon" />
                <h4 className="profile-name">{profile.college_name}</h4>
              </div>
              <div className="location">
                <AssessmentIcon className="profile-icon" />
                <h4 className="profile-name">{profile.bio}</h4>
              </div>
            </div>
          </div>
        </div> */}

        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={Back}
                alt=""
              />
              <img
                className="profileUserImg"
                src="https://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg"
                alt=""
              />
              <div className="profileInfo">
                <h4 className="profileInfoName"> {profile.name}</h4>
                <span className="profileInfoDesc">{profile.college_name}</span>
                <span className="profileInfoDesc">{profile.bio}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="question-bar-profile">
          {questionData.map((value, index) =>
            value.username === cusername ? (
              <AddQuestion key={index} currentValue={value} />
            ) : (
              <div></div>
            )
          )}
        </div>
        {isEditModalOpen && (
          <EditProfile
            closeModal={() => setEditModalOpen(false)}
            cusername={cusername}
          />
        )}
      </section>
    </>
  );
};

export default Profile;
