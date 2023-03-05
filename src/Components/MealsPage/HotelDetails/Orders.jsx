import React from 'react';
import Modal from 'react-modal';
import { Context } from '../../../Context';
import GooglePayButton from '@google-pay/button-react'
export default function Orders({detail}){
    const{hoteldetail,menu,addtoItem,removeItem,additem,user,handleUser}=React.useContext(Context)
    const [localobject,setlocalobject]=React.useState('')
    const[address,setaddress]=React.useState('')
    const totalCost = additem.reduce((acc, item) => {
      return acc + item.cost * item.quantity;
    }, 0);
   

    function handleaddress(){
      setaddress(e.target.value);
    }
    React.useEffect(()=>{
      const key = 'user';
      const value = localStorage.getItem(key)
      if(value){
        setlocalobject(JSON.parse(value))
      }
    },[])
    const customStyles = {
            content: {
              top: '55%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              padding:'10px',
              zIndex:5,
              height: '80%',
            },
        };
    const customStyles2 = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding:'10px',
          zIndex:5
        },
      };
        let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const[modalIsOpen2,setmodalIsOpen2] = React.useState(false);
    const[modalIsOpen3,setmodalIsOpen3] = React.useState(false);
      
      function openModal() {
        setIsOpen(true);
      }
      function open2Modal(){
        setIsOpen(false);
        setmodalIsOpen2(true);
      }
      function open3Modal(event){
        event.preventDefault();
        setmodalIsOpen2(false);
        setmodalIsOpen3(true);
      }
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.backgroundColor = 'black';
      }
      function closeModal() {
        setIsOpen(false);
      }
      function close2Modal() {
        setmodalIsOpen2(false);
      }
      function close3Modal() {
        setmodalIsOpen3(false);
      }
    return(
        <div>
            <button className="place-order-btn position-absolute" onClick={openModal}>View Menu</button>
            {/* modal for menu items */}
            
            <div>
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
                  <div className="position-relative order-template container">
                    <div>
                    </div>
                    <div className='position-sticky-top w-100 px-2'>
                    <i className='fa-solid fa-xmark position-absolute fa-1x' onClick={closeModal} style={{right:'5px',top:"10px"}}></i>
                    <h2>{detail.name}</h2>
                    </div>

                    <div className='position-relative menu-template-section'>
                    {
                        detail.foodlist.map((item)=>{
                          const quantity= additem.map((item)=>{
                            return item.quantity
                          })
                            return(
                                <>
                                <div className='menu-templates container py-3' style={{height:'180px'}}>
                                    <div className='item-name d-flex justify-content-between'>
                                <div>
                                <h5>{item.itemname}</h5>
                                <span>₹{item.cost}</span>
                                <p style={{fontSize:'12px',height:'0px'}} className='w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ratione quibusdam sit iste sed maiores eveniet ipsum voluptate</p>
                                </div>
                                <div className='position-relative d-flex flex-column justify-content-center gap-3' >
                                    <img src={item.img}  alt="" width='120' className='search-img' />
                                    <button className='place-order-btn w-100' onClick={()=>addtoItem(item)}>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    <hr className='mt-5'/>
                                </>
                            )
                        })
                    }
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-4 total-sec'>
                    <div className='d-flex justify-content-between w-25 align-items-center'>
                        <h5 className='fw-bold'>Subtotal</h5>
                        <span className='total-cost fw-bold' style={{fontSize:'22px'}}>{totalCost}</span>
                    </div>
                    <button className="place-order-btn w-25" onClick={open2Modal}>Pay Now</button>
                    </div>
                  </div>
            </Modal>
            {/* modal for details check */}
            <Modal
            isOpen={modalIsOpen2}
            onAfterOpen={afterOpenModal}
            onRequestClose={close2Modal}
            style={customStyles2}
            contentLabel="Example Modal"
            >
                  <div className="position-relative container form-template">
                    <div className='position-sticky-top w-100 px-2'>
                    <i className='fa-solid fa-xmark position-absolute fa-1x' onClick={close2Modal} style={{right:'5px',top:"10px"}}></i>
                    <h2>{detail.name}</h2>
                    </div>
                    <div className='position-relative proceed-sec mt-5'>
                        <form action="">
                        <div class="form-floating mb-3">
                          <input type="text" class="form-control" id="floatingInput" placeholder="Enter your name" name='name'
                           value={localobject.name===''||localobject.name===undefined?'':localobject.name}
                           />
                            <label for="floatingInput">Name</label>
                          </div>
                          <div class="form-floating">
                            <input type="number" class="form-control" id="floatingPassword" placeholder="Enter your number" name='phonenumber'
                            value={localobject.phonenumber===''||localobject.phonenumber===undefined?'':localobject.phonenumber}
                            />
                            <label for="floatingPassword">Phone Number</label>
                          </div>
                          <div class="form-floating mt-4">
                            <textarea type="textarea" class="form-control" id="floatingPassword" placeholder="Address" style={{height:'200px'}} name='address'
                             value={localobject.address===''||localobject.address===undefined?'':localobject.address}
                             />
                            <label for="floatingPassword">Address</label>
                          </div>
                          <input type="submit" className='place-order-btn mt-4' value='Proceed' onClick={open3Modal}/>
                        </form>
                    </div>
                  </div>
            </Modal>




            {/* modal for final payment check */}
            <Modal
             isOpen={modalIsOpen3}
             onAfterOpen={afterOpenModal}
             onRequestClose={close3Modal}
             style={customStyles}
            >
               <div className="position-relative container order-template">
                    <div className='position-sticky-top w-100 px-2'>
                    <i className='fa-solid fa-xmark position-absolute fa-1x' onClick={close3Modal} style={{right:'5px',top:"10px"}}></i>
                    <h4>Orders from {detail.name}</h4>
                    </div>
                    <div className='position-relative mt-5 menu-template-section'>
                      {additem.map(item=>{
                        return(
                          <>
                          <hr />
                          {additem.length===0?<p>No data :)</p>: 
                          <div className='cart-item d-flex  justify-content-between align-items-center py-1'>
                             <div className='d-flex cart-left gap-3 align-items-center'>
                              <img src={item.img} alt="" width='70' />
                              <h5>{item.itemname}</h5>
                             </div>
                             <span>{item.quantity}</span>
                          </div>}
                          <button className='place-order-btn w-25 mt-3' onClick={()=>removeItem(item)}>Remove to cart</button>
                          <hr />
                          </>
                        )
                      })}
                    </div>
                    <div className='total d-flex justify-content-between'>
                          <span>Total Cost:</span>
                          <h4>₹{totalCost.toFixed(2)}</h4>
                    </div>
                    <div className='position-relative'>
                      <button className='place-order-btn w-25 position-absolute' style={{right:'0px',top:'10px'}} >ORDER NOW</button>
                      {/* <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY'],
          allowedCardNetworks: ['MASTERCARD', 'VISA',]
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total  Price',
      totalPrice: `${totalCost}`,
      currencyCode: 'INR',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/> */}
                    </div>
                </div>
            </Modal>
            </div>
        </div>
    )
}