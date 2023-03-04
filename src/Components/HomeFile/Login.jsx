import React from "react";
import Modal from 'react-modal';
import Mailimg from './.././.././.././public/assets/mail.png'
export default function Login(){ 
  const[user,setuser]=React.useState({
    name:'',
    email:'',
    password:'',
    phonenumber:'',
    address:''
  })
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#eee'
        },
      };
      let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modal2IsOpen, set2IsOpen] = React.useState(false);
  const[modallogOpen,setmodelsOpen] = React.useState(false);
  
  const handleUser = (event) => {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    setuser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));   
  };
  console.log(user)


  function openModal() {
    setIsOpen(true);
  }
  function open2Modal() {
    set2IsOpen(true);
    setIsOpen(false);
  }
  function logModel(){
    setIsOpen(false);
    setmodelsOpen(true)
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
  function closeModal() {
    setIsOpen(false);
  }
  function close2Modal() {
    set2IsOpen(false);
  }

  function closelogModal() {
    setmodelsOpen(false);
  }
    return(
        <div>
        <div className="d-flex align-items-center gap-4">
        <span className="login-span text-light" onClick={openModal}>Login</span>
        <button className="login-btn btn p-3 w-100 text-light" onClick={open2Modal}>Create account</button>
        </div>
        {/* Login */}

        
        <Modal
        className='modal-backdrop'
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
        <div className="sign-in-form p-4">
            <div className="d-flex justify-content-between ">
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Login</h2>
                <span onClick={closeModal}><i className="fa-solid fa-xmark"></i></span>
            </div>
            <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
                <button className="p-2 w-100 mt-3 d-flex justify-content-around align-items-center" style={{border:'1px solid black'}} onClick={logModel}>
                  <img src={Mailimg} alt="" width='40' />
                  <span>Continue with Gmail</span>
                </button>
                <hr  className="w-100"/>
                <span className="text-center mt-5">Don't have an account <span className="text-primary" onClick={open2Modal}>Sign Up?</span></span>
            </div>
        </div>
        </Modal>


        {/* Log In*/}
        <Modal
          className='modal-backdrop position-relative'
          isOpen={modallogOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closelogModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div className="">
            <div className="position-absolute sign-in-form   login-sec p-3 mt-5">
              <form className="p-3 d-flex flex-column gap-3 justify-content-center">
                <div class="form-floating mb-3">
                  <input type="email" class="form-control w-100" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="d-flex  gap-3 justify-content-center">
                <button className="place-order-btn mt-3" >Submit</button>
                <button type="submit" className="place-order-btn mt-3 p-2" onClick={closelogModal} >Close</button>
                </div>
              </form>
            </div>
        </div>
        </Modal>





        {/* Sign Up */}
        <Modal
          className='modal-backdrop position-relative'
          isOpen={modal2IsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={close2Modal}
          contentLabel="Example Modal"
        >
        <div className="">
            <div className="position-absolute sign-in-form sign-in-form-2 p-3">
              <form className="p-3 d-flex flex-column gap-3 justify-content-center">
                <div class="form-floating mb-3">
                  <input type="test" class="form-control w-100" id="floatingInput" placeholder="name@example.com"
                  name="name" value={user.name} onChange={handleUser}/>
                  <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="email" class="form-control w-100" id="floatingInput" placeholder="name@example.com"
                  name='email'
                   value={user.email} onChange={handleUser}/>
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                  <input type="phonenumber" class="form-control" id="floatingNumber" placeholder="Password"
                  name='phonenumber'
                   value={user.phonemnumber} onChange={handleUser}/>
                  <label for="floatingNumber">Phone Number</label>
                </div>
                <div class="form-floating">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                  name='password'
                   value={user.password} onChange={handleUser}/>
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="d-flex  gap-3 justify-content-center">
                <button className="place-order-btn mt-3" >Submit</button>
                <button type="submit" className="place-order-btn mt-3 p-2" onClick={close2Modal} >
                Close
                </button>
                </div>
              </form>
            </div>
        </div>
        </Modal>
      </div>
    )
}