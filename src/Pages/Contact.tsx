import React,{useState} from 'react'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar';

const Contact = () => {
  const [isCreate,setIsCreate]=useState(false);
  
  function handleCreateContact(){
    setIsCreate(!isCreate);
  }

  return (
    
    <div>
      <Navbar/>
      {!isCreate?
        <button onClick={handleCreateContact}>Create Contact</button>:
        <></>
      }
      {isCreate?
        <ContactForm isCreated={isCreate} />:
        <></>
      }
    </div>
  )
}

export default Contact