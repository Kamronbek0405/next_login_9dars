"use client"
import React from 'react'
import {useSession} from 'next-auth/react'
import Link from 'next/link'

export const Header = () => {
    const {data: session} = useSession()
  return (
    <div className='p-[30px] shadow-lg shadow-gray-400 font-medium  flex items-center justify-center gap-10 '>
     <Link className='hover:text-blue-500 hover:scale-110' href={"/"}>Home</Link>
     {session && <Link className='hover:text-blue-500 hover:scale-110' href={"/profile"}>Profile</Link>}
     <Link className='hover:text-blue-500 hover:scale-110' href={"/register"}>Register</Link>
     <Link className='hover:text-blue-500 hover:scale-110' href={"/login"}>Login</Link>
    </div>
  )
}
