import { useState } from 'react'
import axios from 'axios'
import MyLayout from "./component/layout"
import { useRouter } from 'next/router';

export default function FacultySignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post('http://localhost:5000/faculty/signin', { email, password })
      console.log("res: " + response.data)

      sessionStorage.setItem('email', response.data);
      router.push('/faculty');

    } catch (error) {
      console.log("error: " + error.message)
      setError("Invalid login")
    }
  }

  return (
    <>
      <MyLayout title="Faculty Sign In" />

      <div className="p-24 ">
        <section className="text-gray-600 body-font mx-auto w-96">
          <form onSubmit={handleSubmit}>

            <div className="bg-blue-300 rounded-lg p-8 md:ml-auto w-auto mt-10 md:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Faculty Sign In</h2>
              <div className="relative mb-4">
                <label htmlFor="faculty-email" className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  id="faculty-email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="faculty-password" className="leading-7 text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  id="faculty-password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
              >
                Sign In
              </button>
              {error && (
                <div>
                  <p id="faculty_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span className="font-medium">{error}</span>
                  </p>
                </div>
              )}
            </div>
          </form>
        </section>
      </div>
    </>
  )
}
