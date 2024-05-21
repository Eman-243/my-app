// pages/add-user.tsx
"use client";
// pages/add-user.tsx
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AddUser() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleAddUser = () => {
    // Implement the logic to add the user
    const newUser = {
      firstName,
      lastName,
      phoneNumber,
      address,
      email
    };
    console.log('Add user:', newUser);
    // After adding, redirect back to users page
    router.push('/');
  };

  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl font-semibold">Add User</h2>
      <Input 
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        className="mb-4"
      />
      <Input 
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        className="mb-4"
      />
      <Input 
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
        className="mb-4"
      />
      <Input 
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
        className="mb-4"
      />
      <Input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="mb-4"
      />
      <Button onClick={handleAddUser} variant="default">
        Add User
      </Button>
    </div>
  );
}
