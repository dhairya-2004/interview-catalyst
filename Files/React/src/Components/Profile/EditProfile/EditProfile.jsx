import React, { useState, useRef, useEffect } from "react";
import "./EditProfile.css";
import axios from "axios";

const EditProfile = ({ closeModal,cusername }) => {
  const [name, setName] = useState("");
  const [collegename, setCollegeName] = useState("");
  const [bio, setBio] = useState("");
  const modalRef = useRef(null);

  const capitalizeFirstLetter = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const handleNameChange = (e) => {
    setName(capitalizeFirstLetter(e.target.value));
  };
  const handleCollegeNameChange = (e) => {
    setCollegeName(capitalizeFirstLetter(e.target.value));
  };

  const handleBioChange = (e) => {
    setBio(capitalizeFirstLetter(e.target.value));
  };


  const sendProfile=async()=>{
    try{

      const res=await axios.post('http://localhost:8000/user/profile',{cusername,name,collegename,bio})
      console.log(res)
      closeModal();
    }catch(e)
    {
      console.log("error",e);
    }
  }

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <>
    <div className="modal-wrapper2" onClick={closeModal}> </div>
      <div className="edit-container" ref={modalRef}>
        <div className="edit-top">
          <h2 className="edit-color">PROFILE INFORMATION</h2>
        </div>
        <div className="edit-bottom">
          <div className="prof-pic">
            <h3 className="edit-color">Profile Photo</h3>
          </div>
          <div className="container-mng">
            <div className="profile-pic">
              <img
                src="https://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg"
                alt="Profile"
              />
              <div className="btn-row">
                <button className="btn-up">Change</button>
                {/* <button className="btn-rm">Remove</button> */}
              </div>
            </div>
            <div className='edit-info-upper'>
              <div className="edit-name">
                <h4 className="edit-color-name">Name </h4>
                <input
                  className="edit-input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={handleNameChange}
                  required
                />

                <div className="text">
                  <h5 className="edit-color-text">
                    Appears on your Profile Page.
                  </h5>
                  <div className="input-char-name">{name.length}/50</div>
                </div>
              </div>
              <div className="edit-name">
                <h4 className="edit-color-name">College Name </h4>
                <input
                  className="edit-input"
                  type="text"
                  name="name"
                  placeholder="College Name"
                  value={collegename}
                  onChange={handleCollegeNameChange}
                  required
                />

                <div className="text">
                  <h5 className="edit-color-text">
                    Appears on your Profile Page.
                  </h5>
                  <div className="input-char-name">{collegename.length}/50</div>
                </div>
              </div>
            </div>
          </div>

          <div className="edit-info">
            <div className="edit-name">
              <h4 className="edit-color-name">Bio</h4>
              <textarea
                className="edit-textarea"
                placeholder="Put your bio...."
                type="text"
                name="bio"
                required
                value={bio}
                onChange={handleBioChange}
              />
              <div className="text">
                <h5 className="edit-color-text">
                  Appears on your Profile Page and next to your stories.
                </h5>
                <div className="input-char-bio">{bio.length}/100</div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="final-edit">
            <button className="save" onClick={sendProfile}>Save</button>
            <button className="cancel" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
