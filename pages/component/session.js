import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function FacultyDrawer() {
  const [email, setEmail] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const session = sessionStorage.getItem('email');
      if (session) {
        setEmail(session);
      }
    }
  }, []);

  const handleSignOut = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('http://localhost:5000/faculty/signout');
      console.log(response.data);
      sessionStorage.removeItem('email');
      setEmail(null);
      router.push('/signin');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {email !== null ? (
        <>
          <div className="flex md:order-2">
            <a href="#" className="pr-3 pt-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">
              {email}
            </a>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleSignOut}
            >
              Sign out
            </button>
            <Link
              href="/faculty/dashboard"
              className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Dashboard
            </Link>
          </div>
        </>
      ) : (
        <div className="flex md:order-2">
          <Link
            href="/signin"
            className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign in
          </Link>
        </div>
      )}
    </>
  );
}
