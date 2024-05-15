import React, { useState } from 'react'
import "./Modal.css"

const ModalDetail = () => {
        
    const [ isModalOpen , setModal] = useState(false)
    const [Username , setUsername] = useState("")
    const [email , setEmail] = useState("")
    const [phone , setPhone] = useState("")
    const [dob , setDob] = useState("")



  const  handleOpenModal = ()=>{

         setModal(true);
  }

  const closeModal = ()=>{

       setModal(false)
  }


  const handleCloseModal= (e)=>{

        if(e.target.className === "Modal"){

              closeModal();
        }
  }


   const handleSubmit =(e)=>{
           
            e.preventDefault();
        
            
           if(!validateEmail(email)){

            alert('Invalid email. Please check your email address.');
            return;
           }


          else if (!validatePhone(phone)) {
            alert('Invalid phone number. Please enter a 10-digit phone number.');
            return;
          }
            
          else if (!validateDob(dob)) {
            alert('Invalid Date of Birth. Please enter a valid date.');
            return;
          }


             // Process form submission logic here
    alert('Form submitted successfully!');
               



        closeModal();
   }

   
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    return phone.length === 10 && /^\d+$/.test(phone);
  };

  const validateDob = (dob) => {
    // Simple date validation (additional checks can be added)
    return  Date.now() > dob; 
  };




  return (
    <div>
         <div className="Modal" onClick={handleCloseModal}>
            <h1>User Details Modal</h1>
            <button className="openModal" onClick={handleOpenModal}>Open Form</button>

            {isModalOpen && (
            <div className="Modal-content">
                  <form onSubmit={handleSubmit}>
                           <div className='open-modal'>   
                     <label htmlFor="Username:">Username:</label>
                            <input type="text" id="Username"  value={Username}    onChange={(e)=> setUsername(e.target.value)} required/>
                            </div> 

                            <div className='open-modal'> 
                            <label htmlFor="Email ">Email Address:</label>
                            <input type="email" id="Email" value={email}  onChange={(e)=> setEmail(e.target.value)} required/>
                            </div>
                                
                            <div className='open-modal'> 
                            <label htmlFor="Phone">Phone Number:</label>
                            <input type="number" id="Phone" value={phone} onChange={(e)=> setPhone(e.target.value)} required/>
                                 </div>
                               
                                 <div className='open-modal'> 
                            <label htmlFor="Date">Date of Birth:</label>
                            <input type="date" id="Date" value= {dob} onChange={(e)=> setDob(e.target.value)} required/>

                                </div>
                            <button type='submit'>Submit</button>
                  </form>
            </div>
            )}

            </div>
        
    </div>
  )
}

export default ModalDetail