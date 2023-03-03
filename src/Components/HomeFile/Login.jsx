import React from "react";
import Modal from 'react-modal';
export default function Login(){ 
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const[signIsOpen,setsignIsOpen] = React.useState(false);
  
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
  function closeModal() {
    setIsOpen(false);
  }
  function handlesigopen() {
    setsignIsOpen(true);
  }
    return(
        <div>
        <span className="login-span" onClick={openModal}>Login</span>
        {/* Login */}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div>
            <div className="d-flex justify-content-between">
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Login</h2>
                <span onClick={closeModal}><i className="fa-solid fa-xmark"></i></span>
            </div>
            <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
                <button className="p-2 w-100 mt-3">Continue with Gmail</button>
                <button className="p-2 w-100 mt-3">Continue with Gmail</button>
                <hr  className="w-100"/>
                <span className="text-center mt-5">Don't have an account <span className="text-primary login-btn" onClick={handlesigopen}>Sign Up?</span></span>
            </div>
        </div>
        </Modal>
      </div>
    )
}