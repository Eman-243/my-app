"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import { user } from 'prisma/prisma-client';

export default function EditUser() {
  const pathname = usePathname();
  const id = pathname.split('/').pop() || '';

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');

  const [successMessage, setSuccessMessage] = useState('');


  const handleEditUser = () => {
    
    axios.patch(`/api/users/${id}`, {
      username: username,
      email: email,
      address:address,
      phone: telephone,
    }).then(() => {
    setSuccessMessage('User information successfully updated.');
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000); // Hide success message after 3 seconds
  })};

  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl font-semibold">Edit User</h2>
      {successMessage && <p className="text-green-600">{successMessage}</p>}
      <Input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
        className="mb-4"
      />
      <Input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        className="mb-4"
      />
      <Input
        value={address}
        onChange={e => setAddress(e.target.value)}
        placeholder="Address"
        className="mb-4"
      />
      <Input
        value={telephone}
        onChange={e => setTelephone(e.target.value)}
        placeholder="Telephone"
        className="mb-4"
      />
      <Button onClick={handleEditUser} variant="default">
        Save Changes
      </Button>
    </div>
  );
}
