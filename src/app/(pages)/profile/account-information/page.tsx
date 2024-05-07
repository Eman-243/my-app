"use client";
import { ChangeEvent } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Profile() {
    const [isLoading, setIsLoading] = useState(true); // Add this line

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Handle first name change
  };

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Handle last name change
  };

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Handle phone number change
  };

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Handle address change
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Handle username change
  };
  const handleSave = () => {
    // Handle save action
  };
  useEffect(() => {
    setIsLoading(false); // Update the loading state when the products are ready
});
  if (isLoading) {
    return(
        <div className="max-w-5xl max-h-full min-h-screen bg-zinc-100 shadow-md rounded-sm font-sans ml-2 mt-2 flex-shrink-0 flex-grow py-4 px-4">
        
<div className="flex items-center justify-center h-screen">
<div className="flex flex-col items-center space-y-4">
<div className="animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 h-12 w-12" />
<p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Loading...</p>
</div>
</div>

</div>
    )
}

  return (
    <div className="max-w-5xl h-80 max-h-dvh bg-zinc-100 shadow-md rounded-sm font-sans ml-2 mt-2 content-center  px-4 ">
    <div className=" px-4 grid grid-cols-2 gap-4">
        
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" className="w-full h-10 px-2 rounded-md border border-gray-200" disabled />
      </div>  
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" className="w-full h-10 px-2 rounded-md" onChange={handleUsernameChange} />
      </div>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" className="w-full h-10 px-2 rounded-md" onChange={handleFirstNameChange} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" className="w-full h-10 px-2 rounded-md" onChange={handleLastNameChange} />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" className="w-full h-10 px-2 rounded-md" onChange={handlePhoneNumberChange} />
      </div>
      <div>
          <label htmlFor="address">Address:</label>
          <div className="grid grid-cols-2 gap-2">
            <input type="text" id="area" className="w-full h-10 px-2 rounded-md" placeholder="Area" onChange={handleAddressChange} />
            <input type="text" id="building" className="w-full h-10 px-2 rounded-md" placeholder="Building" onChange={handleAddressChange} />
          </div>
        </div>
     
      <div >
        </div>
              <button onClick={handleSave} className="mt-4 px-4 py-2 bg-[#F9B823] text-white rounded-md  hover:bg-black">Save</button>
    </div>
    </div>
  );
}

