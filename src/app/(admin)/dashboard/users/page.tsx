"use client";
import { useState , useEffect} from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { user } from 'prisma/prisma-client';
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState<user[]>([])
  const [isLoading, setLoading] = useState(true);

  const router = useRouter();

  const handleDelete = (id: number) => {
    axios.delete(`/api/users/${id}`).then(() => {
      setUsers(users.filter(user => user.UserID !== id));
    });
  };

  useEffect(() => {
    axios.get('/api/users').then(response => {
      setUsers(response.data.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
          <li key={user.UserID} className="flex items-center justify-between mb-2 p-2 border rounded ">
            <div className='flex gap-2 flex-col'>
              <span className="text-lg font-bold">User ID:{user.UserID}</span>
              <span className="text-lg">User Email: {user.Email}</span>
            </div>
            <div className="flex gap-2 flex-col">
              <Button variant="outline" size="sm" onClick={() => router.push(`users/${user.UserID}`)}>
                Edit
              </Button>
              <Button onClick={() => handleDelete(user.UserID)} variant="outline" size="sm" color="danger">
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
