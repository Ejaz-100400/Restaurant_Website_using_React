import React from 'react';
import Modal from 'react-modal';
import {Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
export default function Gallery({detail}){
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const customStyles = {
        content: {
          top: '55%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding:'10px',
          height:'90%',
          width:'100%',
          zIndex:'5',
          backgroundColor:'#191919'
        },
    };
    let subtitle;
    function openModal() {
        setIsOpen(true);
      }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.backgroundColor = 'black';
    }
    function closeModal() {
        setIsOpen(false);
    }
    return(
        <div>
            <button className='img-glry-btn position-absolute py-1' onClick={openModal}>Gallery</button>
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
                <div className="position-relative  container">
                    <div className='position-sticky-top w-100 px-2'>
                    <i className='fa-solid fa-xmark position-absolute fa-1x close-img-glry' onClick={closeModal} style={{right:'5px',top:"10px"}}></i>
                    </div>
                    <div className='d-flex justtify-content-center align-items-center position-absolute overflow-hidden w-100 img-glry-section' style={{top:'50%'}}>
                    <Swiper
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper "> 
                         {detail.foodlist.map((item)=>{
                            return(
                                <SwiperSlide className='d-flex justify-content-center align-items-center'>
                                    <img src={item.img} alt=""  width='440' className='glry-img'/>
                                </SwiperSlide>
                            )
                         })}
                    </Swiper>
                    </div>
                </div>
            </Modal>
        </div>
    )
}