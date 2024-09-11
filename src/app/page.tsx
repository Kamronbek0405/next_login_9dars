"use client"
import {useSession} from 'next-auth/react'
import { phoneData } from '@/data/server';
import { ProfileCard } from '@/components/profile-card';
export default function Home() {
  const data = useSession()
  console.log(data);
  
  return (
    <div className='flex items-center justify-center flex-wrap mt-20   w-[100%] h-[100vh] gap-5'>
      {phoneData.map((item) => ( 
         <ProfileCard key={item.id} {...item} />
      ))}
    </div>
  );
}
