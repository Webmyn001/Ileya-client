import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import {  Oval } from 'react-loader-spinner'

function Form() {
  const [Loading, setLoading] =useState(false)
  const [Name, setName] = useState("")
  const [Address, setAddress] = useState("")
  const [PhoneNo, setPhoneNo] = useState("")
  const [BankName, setBankName] = useState("")
  const [AcctName, setAcctName] = useState("")
  const [AcctNo, setAcctNo] = useState("")
  const [NOK, setNOK] = useState("")
  const [Marital, setMarital] = useState("")


  const OnchangeName =(e)=> {
    setName(e.target.value)
  }

  const OnchangeAddress =(e)=> {
    setAddress(e.target.value)
  }

  const OnchangePhoneNo =(e)=> {
    setPhoneNo(e.target.value)
  }

  const OnchangeBankName =(e)=> {
    setBankName(e.target.value)
  }

  const OnchangeAcctName =(e)=> {
    setAcctName(e.target.value)
  }

  const OnchangeAcctNo =(e)=> {
    setAcctNo(e.target.value)
  }

  const OnchangeNOK =(e)=> {
    setNOK(e.target.value)
  }

  const OnchangeMarital =(e)=> {
    setMarital(e.target.value)
  }

  
  const navigate = useNavigate()
  
  const saveForm = async (e) => {
    setLoading(true)
   e.preventDefault();
    axios.post("https://ileya-backend-444vi5q5d-webmyn001s-projects.vercel.app/api/form/add",{Name, Address, PhoneNo, BankName, AcctName, AcctNo, NOK, Marital})
   .then((res)=>
   { 
   console.log("saved succesfully")
   navigate("/");
   window.location.reload() 
   alert("Thank you! Response recieved, We will get back to you on Whatsapp.")

 }).catch((err)=> {
     console.log(err)
     alert("Unable to submit form, kindly complete the form or ensure internet connection.")
     setLoading(false)
   })
   
 }

  return (
    <div className='flex  justify-center items-center'>
        <div className='sm:w-2/3 w-full flex justify-center bg-[#faf9f6] h-[500px]  rounded-b-[50px] shadow-2xl'>
         
        <form className=' w-[200px] sm:w-[280px] mt-[25px]' onSubmit={saveForm} encType="multipart/form-data">
        <h2 className='font-monserat text-center text-[#00008b] text-[15px]  font-bold pb-4'>Kindly fill the form below</h2>
            <input placeholder='Full Name'  value={Name} onChange={OnchangeName} required
                className='w-full border-l-[1px] border-b-[1px] focus:outline-0 px-3 border-r-[1px] text-[14px] pb-[3.5px] mb-4 rounded-md bg-[#f0ffff] border-[#24c4da] text-[#00008b]  '/>

<input placeholder='Home Address'  value={Address} onChange={OnchangeAddress} required
                className='w-full border-l-[1px] border-b-[1px] focus:outline-0 border-r-[1px] px-3 text-[14px] pb-[3.5px] mb-4 rounded-md border-[#24c4da] bg-[#f0ffff] text-[#00008b] '/>

<input placeholder='Phone Number' type="Number"  value={PhoneNo} onChange={OnchangePhoneNo} required
                className='w-full border-l-[1px] border-b-[1px] border-r-[1px] focus:outline-0 px-3 text-[14px] pb-[3.5px] mb-4 rounded-md border-[#24c4da] bg-[#f0ffff] text-[#00008b] '/>

<input placeholder='Bank Name'  value={BankName} onChange={OnchangeBankName} required
                className='w-full border-l-[1px] border-b-[1px] border-r-[1px] focus:outline-0 px-3 text-[14px] pb-[3.5px] mb-4 rounded-md border-[#24c4da] bg-[#f0ffff] text-[#00008b] '/>

<input placeholder='Account Name'  value={AcctName} onChange={OnchangeAcctName} required
                className='w-full border-l-[1px] border-r-[1px] border-b-[1px] focus:outline-0 px-3 text-[14px] pb-[3.5px] mb-4 rounded-md border-[#24c4da] bg-[#f0ffff] text-[#00008b] '/>

<input placeholder='Account Number' type="Number" value={AcctNo} onChange={OnchangeAcctNo} required
                className='w-full border-l-[1px] border-r-[1px] border-b-[1px] focus:outline-0 px-3 mb-4 text-[14px] pb-[3.5px] rounded-md border-[#24c4da] bg-[#f0ffff] text-[#00008b] '/>

<input placeholder='Next Of Kin Contact'  value={NOK} onChange={OnchangeNOK} required
                className='w-full border-l-[1px] border-r-[1px] border-b-[1px] focus:outline-0 px-3 text-[14px] mb-4 pb-[3.5px] rounded-md border-[#24c4da] bg-[#f0ffff] text-[#00008b] '/>

<label for="Marital status" className="font-semibold mb-4 text-[#00008b] text-[14px]">Marital status :</label>
                <select name="Marital status" onChange={OnchangeMarital} className=" focus:outline-0  px-3  " >
                   <option value={false} className ="disabled: text-[#00008b]" >Select</option>
                    <option value="Single" className="text-[#00008b]">Single</option>
                    <option value="Married" className="text-[#00008b]">Married</option>
                    <option value="Divorced" className="text-[#00008b]">Divorced</option>
                    <option value="other" className="text-[#00008b]">Other</option>
                </select>
        
          
            
             {/* Upload button */}
             <div className='flex justify-center items-center mb-2'>
                {Loading ? <div className='pt-5 pb-2'><Oval height="30" width="30" radius="4" color="#0b46a1" ariaLabel="loading"/> </div> : <Button name="Submit"/>}
             </div>
          </form>
        
        </div>
    </div>
  )
}

export default Form