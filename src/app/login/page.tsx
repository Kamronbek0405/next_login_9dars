"use client"
import { NextPage } from 'next';
import React from 'react'
import { useForm } from 'react-hook-form'
import {signIn} from 'next-auth/react'

interface inputs {
    email: string;
    password: string
}

const Login: NextPage = () => {
    const { handleSubmit, register, reset } = useForm<inputs>()
    const submit = (data: inputs) => {
        signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: true,
            callbackUrl: "/profile",
        })
        reset()
    }
    return (
        <div className='w-[100%] h-[100vh] shadow-lg shadow-gray-300 flex items-center justify-center flex-col '>
            <form onSubmit={handleSubmit(submit)} className='flex flex-col w-[400px] border-2 h-[400px] shadow-lg shadow-gray-400 rounded-xl items-center justify-center' >
                <h1 className='font-bold text-2xl text-blue-500 py-7'>Login</h1>
                <input className='w-[300px] h-[50px] outline-gray-600 border-2 border-gray-400 rounded-full px-3 mt-3' {...register("email", { required: true })} type="email" placeholder='email' />
                <input className='w-[300px] h-[50px] outline-gray-600 border-2 border-gray-400 rounded-full px-3 mt-3' {...register("password", { required: true })} type="password" placeholder='password' />
                <button className='w-[300px] h-[50px] rounded-full flex items-center justify-center text-white font-medium bg-blue-600 hover:bg-transparent hover:border-2 hover:border-blue-600 hover:text-blue-600 mt-3' type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login