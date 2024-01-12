import React from 'react';

const CustomModal = ({ closeModal }) => {
    return (
        <>
            <div className="modal-wrapper" onClick={closeModal}> </div>
                <div className='center-write'>
                    <div className="modal-container">
                        <h2>'Can't tolerate court order', says letter found in Goa room rented by Suchana Seth</h2>
                        <h5>A day after Congress leader Sonia Gandhi declined an invite to the Ram temple ‘pran pratishtha’, Rashtriya Swayamsevak Sangh (RSS) mouthpiece Organiser has posted on social media a letter she wrote to Pope Francis in 2016, explaining her inability to attend the canonisation of Mother Teresa.</h5>
                        <button onClick={closeModal} className="btn-write">
                            Send
                        </button>
                    </div>
                </div>
           
        </>
    );
};

export default CustomModal;
