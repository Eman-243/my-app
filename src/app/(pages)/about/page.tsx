"use client";
import { useEffect } from 'react';

export default function Component() {
  useEffect(() => {
    window.location.href = '/NexcelProfile.pdf';
  }, []);

  return (
    <h1>Page</h1>
  );
}
