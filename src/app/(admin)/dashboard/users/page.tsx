"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Users() {
  const [users, setUsers] = useState([
    { id: 1, username: 'Ali Ahmed', email: 'ali@example.com', address: '123 Main St', telephone: '123-456-7890' },
    { id: 2, username: 'Eman Nayel', email: 'eman@example.com', address: '456 Oak St', telephone: '987-654-3210' },
    { id: 3, username: 'Ahmed', email: 'ahmed@example.com', address: '789 Pine St', telephone: '555-555-5555' },
    // Add more users as needed
  ]);
  const router = useRouter();

  const handleDelete = (id: number) => {
    // Implement the delete functionality here
    console.log(`Delete user with id: ${id}`);
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Users</h2>
        <Link href="users/add-user/">
          <Button>
            Add User
          </Button>
        </Link>
      </div>
      <ul>
        {users.map(user => (
          <li key={user.id} className="flex items-center justify-between mb-2 p-2 border rounded ">
            <div className='flex gap-2 flex-col'>
              <span className="text-lg font-bold">User ID:{user.id}</span>
              <span className="text-lg">User Name: {user.username}</span>
            </div>
            <div className="flex gap-2 flex-col">
              <Button variant="outline" size="sm" onClick={() => router.push(`users/${user.id}`)}>
                Edit
              </Button>
              <Button onClick={() => handleDelete(user.id)} variant="outline" size="sm" color="danger">
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
