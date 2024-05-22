"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { usePathname } from 'next/navigation';

export default function EditUser() {
  const pathname = usePathname();
  const id = pathname.split('/').pop() || '';

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [users, setUsers] = useState([
    { id: 1, username: 'Ali Ahmed', email: 'ali@example.com', address: '123 Main St', telephone: '123-456-7890' },
    { id: 2, username: 'Eman Nayel', email: 'eman@example.com', address: '456 Oak St', telephone: '987-654-3210' },
    { id: 3, username: 'Ahmed', email: 'ahmed@example.com', address: '789 Pine St', telephone: '555-555-5555' },
    // Add more users as needed
  ]);

  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (id) {
      const user = users.find(user => user.id === parseInt(id));
      if (user) {
        setUsername(user.username);
        setEmail(user.email);
        setAddress(user.address);
        setTelephone(user.telephone);
      } else {
        console.log(`User with id: ${id} not found`);
      }
    }
  }, [id, users]);

  const handleEditUser = () => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === parseInt(id) ? { ...user, username, email, address, telephone } : user
      )
    );
    setSuccessMessage('User information successfully updated.');
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000); // Hide success message after 3 seconds
  };

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
