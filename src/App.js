import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

function App() {
  const form = useRef();
  const [data,setData] = useState({
    name: '',
    subject:"",
    gmail:'',
    message:''
})

const {name,subject,gmail,message} = data
const changeHandlers = event => {
  setData({...data,[event.target.name]:event.target.value});
}
const submitHandler = () =>{
  emailjs.sendForm('service_9hu5se2', 'template_kt5wrdu', form.current, '5PN7RyCd8gX9kwnUv')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  // form.current.reset();
}


  return (
    <div className="App">
      <header className="App-header">
        <form ref={form} className='form' onSubmit={submitHandler} autoComplete='off'>
        <label for="name">Name</label>
        <input type='text' name="name" value={name}
        onChange={changeHandlers} placeholder='Subject'></input><br/>
        <label for="subject">Subject</label>
        <input type='text' name="subject" value={subject}
        onChange={changeHandlers} placeholder='Subject'></input>
        <label for="message">Message</label><br/>
        <input type='text' name="message" value={message}
        onChange={changeHandlers} placeholder='Message'></input><br/>
        <label for="gmail">Gmail</label>
        <input type='gmail' name="gmail" value={gmail}
        onChange={changeHandlers} placeholder='Gmail'></input><br/>
        <button type="submit" name='submit'>Send</button>
        </form>
      </header>
    </div>
  );
}

export default App;
