import React,{useEffect, useState} from 'react'
import './Contact.css'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [error, setError] = useState('')


  function onSubmit(e){
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/0y9EVaXaHIx", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        alert("We received your submission, thank you!");
      }
      else if(response.code === 422){

        setError(response.message)
      }
      else {

        setError(response.message)
      }
    })
    .catch(error => {

      setError(error.message ? error.message : error);
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hideSec = document.querySelectorAll('.hide');
    hideSec.forEach((el) => observer.observe(el));

    return () => {

      hideSec.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  function showDiv(event) {
  
      const info = document.getElementById('info');
      const info2 = document.getElementById('info2');
    
      if (info.style.display === 'flex') {
        info.style.display = 'none';
      } else {
        info.style.display = 'flex';
        info2.style.display = 'none';
      }
      event.preventDefault();
    }

  return (
    <div id="contact" className="contact-section hide">
      <div className="contact-header">
        <h2>Contact <span>Me</span></h2>
        <p>let's get the ball rolling</p>
        <img src="./images/bball.png" className="bball-img"/>
      </div>
      <form type="submit"
      className='contact-form'
      onSubmit={(e) => onSubmit(e)}
      >
        <div className='top-half'>

          <label htmlFor="name">
            Name
          <input
              type='text'
              name='name'
              id="name"
              placeholder='Full name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
          />
          </label>
          <label htmlFor="email">
            Email
          <input 
           type='email'
           name='email'
           id="email"
           placeholder='Email'
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
          />
          </label>
          <label htmlFor="message">
            Messsage
          <textarea
          name='message'
          id='message'
          placeholder='Your message here'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          >
          </textarea>
          </label>
          <button
          type='submit'
          className='submit'
          >
            Submit
            </button>
        </div>
      </form>
      <script id="ratufa_loader" src="https://www.ratufa.io/c/ld.js?f=uorsalqa&n=n1.ratufa.io"></script>
    </div>
  )
}

export default Contact