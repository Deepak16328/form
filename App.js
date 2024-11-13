import { useState } from 'react';
import './App.css';

function App() {

  const[values, setValues]=useState({
    firstname:"",
    lastname:"",
    email:"",
    contact:"",
    gender:"",
    subject:"",
    resume:"",
    url:"",
    about:"",
  });
 const handleChanges=(e)=>{
  setValues({...values,[e.target.name]:[e.target.value]})

 }
 const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(values)
 }
   
  return (
    <div className="container">
      <h1>Form in React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name*</label>
        <input type="text"  placeholder="Enter First Name" name="firstname" onChange={(e)=>handleChanges(e)}required/>
        <label htmlFor="lastname">Last Name*</label>
        <input type="text" placeholder="Enter Last Name" name="lastname" onChange={(e)=>handleChanges(e)}required/>
        <label htmlFor="email">Email*</label>
        <input type="email" placeholder="Enter Email" name="email" onChange={(e)=>handleChanges(e)}required/>
        <label htmlFor="contact">Contact*</label>
        <input type="text" placeholder="Enter Phone n#" name="contact" onChange={(e)=>handleChanges(e)}/>
        <label htmlFor="gender">Gender</label>
        <input type="radio" name="gender"onChange={(e)=>handleChanges(e)}/>Male
        <input type="radio" name="gender"onChange={(e)=>handleChanges(e)}/>Female
        <input type="radio" name="gender"onChange={(e)=>handleChanges(e)}/>Other

        <label htmlFor="subject">Subject</label>
        <select name="subject" id="subject"onChange={(e)=>handleChanges(e)}>
          <option value="math">Math</option>
          <option value="Physic">Physics</option>
          <option value="English">English</option>

        </select>
        <label htmlFor="resume">Resume</label>
        <input type="file" name="Select Resume"  name="resume" onChange={(e)=>handleChanges(e)}/>

        <label htmlFor="url">URL</label>
        <input type="text" name="url"  placeholder='Enter image url' onChange={(e)=>handleChanges(e)}/>

        <label htmlFor="about">About</label>
        
        <textarea name="about" id="about"  cols="30" rows="10" onChange={(e)=>handleChanges(e)} placeholder='Enter description'></textarea>

        <button type="button">Reset</button>
        <button type="submit">Submit</button>
        <button></button>
        
      </form>
    </div>
    <div></div>
  );
}

export default App;
