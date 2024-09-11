"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

interface inputs {
    name: string;
    email: string;
    password: string
}

 const Register = () => {
    const {handleSubmit, register, reset} = useForm<inputs>()
    const router = useRouter()
    const submit = (data: inputs) =>{
        fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",

            },
            body: JSON.stringify(data)
        }).then((res) => res.json()).then((data) => {
            console.log(data);
            
            router.push("/login")
        }
        )
    }
  return (
    <div className='w-[100%] h-[100vh] shadow-lg shadow-gray-300 flex items-center justify-center flex-col '>
        <form onSubmit={handleSubmit(submit)} className='flex flex-col w-[400px] border-2 rounded-xl h-[500px] shadow-lg shadow-gray-500 items-center justify-center gap-3' >
        <h1 className='font-bold text-2xl text-blue-600 py-7'>Register</h1>
        <input className='w-[300px] h-[50px] outline-gray-600 border-2 border-gray-400 rounded-full px-3 mt-3' {...register("name", {required: true})} type="text" placeholder='name' />
        <input className='w-[300px] h-[50px] outline-gray-600 border-2 border-gray-400 rounded-full px-3 mt-3' {...register("email", {required: true})} type="email" placeholder='email' />
        <input className='w-[300px] h-[50px] outline-gray-600 border-2 border-gray-400 rounded-full px-3 mt-3' {...register("password", {required: true})} type="password" placeholder='password' />
        <button className='w-[300px] h-[50px] rounded-full flex items-center justify-center text-white font-medium bg-blue-600 hover:bg-transparent hover:border-2 hover:border-blue-600 hover:text-blue-600 mt-3' type='submit'>send</button>
        </form>
    </div>
  )
}

export default Register