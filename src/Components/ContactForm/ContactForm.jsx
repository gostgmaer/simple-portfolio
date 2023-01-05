import React, { useState } from "react";
import "./contact.scss";
import { v4 as uuidv4 } from 'uuid';
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import { db } from "../../Services/Apicall/Firebase";
import { Fragment } from "react";



const ContactForm = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [info, setInfo] = useState(null);
const [error, setError] = useState(null);



const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const submitContact = async ()=>{
  
 try {
  const data = {
    name:name,email:email,message:message,uuid:uuidv4(),creationTime:serverTimestamp()
  }
  const res = await addDoc(collection(db, "portfolioContacts"), data);
  console.log(res);
  setInfo(res.id)
 } catch (error) {
  console.log(error);
  setError(error.message)
  
 }

} 


const AfterSubmit =()=>{
  return (
   <div className="afterSubmit">{ error?<div className="error">Your Message has Not been Submitted: {error}</div>:<div className="success">your Message has been Submitted Successfully</div>}
   <div className="tryAgain"><button onClick={()=>{
    setError(null);setInfo(null)
   }} className="btn">Send Again</button></div>
   </div>
  )

}

  return (
    <div className="ContactForm" id="contact">
      <div className="heading">
        <h2>Contact</h2>
      </div>
      <div className="content">
        <div className="container">
          <div className="card">
            {error||info?<AfterSubmit/>:<div className="form-inline">
            <div className="row">
            <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  id="name"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Your Email Address"
                />
              </div>
            </div>

             <div className="row"> <div className="form-group area">
                <textarea
                  name="reason" className="form-control"
                  id="reason" placeholder="Your Message" 
                  cols={20}
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                  rows={5}></textarea>{" "}
              </div></div>
              <div className="row">
                <button className="btn" onClick={submitContact}>Send message</button>
              </div>
            </div>}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
