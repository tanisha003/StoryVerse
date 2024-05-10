import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'
function Signup() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
     <div className='flex h-screen items-center justify-center '>
      <div className="w-[600px] ">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br/>
        <input type='text' placeholder='Enter Your full name' className='w-00 px-7 py-1 border rounded-md outline-none' {...register("fullname", { required: true })}/>
        <br /> {errors.fullname && ( <span className="text-sm text-red-500">This field is required</span>)}
    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type='email' placeholder='Enter Your email' className='w-00 px-7 py-1 border rounded-md outline-none' {...register("email", { required: true })}/>
        <br /> {errors.email && ( <span className="text-sm text-red-500">This field is required</span>)}
    </div>
    {/*Password*/}
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br/>
        <input type='password' placeholder='Enter Your Password' className='w-00 px-7 py-1 border rounded-md outline-none' {...register("password", { required: true })}/>
        <br /> {errors.password && ( <span className="text-sm text-red-500">This field is required</span>)}
    </div>
       
    {/*Button*/}
    <div className='flex justify-around mt-4'>
      <button className='bg-blue-500 text-white rounded-md px-5 py-1.5 hover:bg-blue-700 duration-200'>Signup</button>
        <p className='text-xl'>Have Account? <button className='underline text-blue-500 cursor-pointer' onClick={()=> document.getElementById("my_modal_3").showModal()}>
         Login</button>{" "}
        <Login/>
        </p>
      
    </div>
      </div>
     </div>
      </div>
    </>
  )
}

export default Signup