import React from 'react';
import { phoneData } from '@/data/server';
import { ProfileCard } from '@/components/profile-card';

const Profile = () => {
  return (
    <div className='flex items-center justify-center w-[100%] h-[100vh] gap-5'>
      {phoneData.map((item) => ( 
         <ProfileCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Profile;
