import React, { useState } from "react";
import "./contact.scss";
import { v4 as uuidv4 } from 'uuid';




const ContactForm = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [info, setInfo] = useState(null);

const submitContact =()=>{
  const data = {
    name:name,email:email,message:message,uuid:uuidv4()
  }
  console.log(data);
  setInfo(data)

} 

  return (
    <div className="ContactForm" id="contact">
      <div className="heading">
        <h2>Contact</h2>
      </div>
      <div className="content">
        <div className="container">
          <div className="card">
            <div className="form-inline">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
