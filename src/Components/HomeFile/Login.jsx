import React from "react";
import Modal from 'react-modal';
import Mailimg from './.././.././.././public/assets/mail.png'
import { Context } from "../../Context";
export default function Login(){ 
  const{user,setuser}=React.useContext(Context);
  const [alert,setalert] = React.useState(false)


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
  };

  // validation for user who is creating account 
  function handleCreateUser(e){
    const phoneNumberRegex = /^[\d\s-]+$/;
    e.preventDefault();
    if(user.email==='' ||(!/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(user.email))&&(!user.name)&&(user.phonenumber===''||(phoneNumberRegex.test(user.phonenumber)))&&(user.password.length<12)&&(!user.address.length<10)){
      setalert(true)
    }
    else{
      setalert(false)
      const updatedUser = { ...user, [e.target.name]: e.target.value };
      setuser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      set2IsOpen(false);   
    }
  }

   // validation for user who is logging in 
   function handleLoginuser(e){
    e.preventDefault();
    const loc=localStorage.getItem('user')
    const usercre = JSON.parse(loc)
     if(usercre.email!= user.email && usercre.password!= user.password){
      setalert(true)
     }
     else{
      setalert(false)
     }
     if(!user.email&&!user.password){
      setalert(true)
     }
  }
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
        <button className="login-btn bg-light btn  px-2 py-2 w-100 text-dark" onClick={open2Modal}>Create account</button>
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
        {/* <Modal
          className='modal-backdrop position-relative'
          isOpen={modallogOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closelogModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div className="">
            <div className="position-absolute sign-in-form   login-sec p-3 mt-5">
              <span className="text-warning text-center" style={{display:alert?'block':'none'}}>Kindly create an account</span>
              <form className="p-3 d-flex flex-column gap-3 justify-content-center">
                <div class="form-floating mb-3">
                  <input type="email" class="form-control w-100" id="floatingInput" placeholder="name@example.com" 
                  name='email' value={user.email} onChange={handleUser}/>
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                  name="password" value={user.password} onChange={handleUser} />
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="d-flex  gap-3 justify-content-center">
                <button className="place-order-btn mt-3" onClick={handleLoginuser}>Submit</button>
                <button type="submit" className="place-order-btn mt-3 p-2" onClick={closelogModal} >Close</button>
                </div>
              </form>
            </div>
        </div>
        </Modal> */}





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
              <span className="text-warning" style={{display:alert?'block':'none'}}>Please check all the fields</span>
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
                  <input type="number" class="form-control" id="floatingNumber" placeholder="Password"
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
                <div class="form-floating mt-4">
                  <textarea type="textarea" class="form-control" id="floatingPassword" placeholder="Address" style={{height:'100px'}} name='address'
                  value={user.address} onChange={handleUser}
                />
                  <label for="floatingPassword">Address</label>
                </div>
                <div className="d-flex  gap-3 justify-content-center">
                <button className="place-order-btn mt-3" onClick={handleCreateUser}>Submit</button>
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