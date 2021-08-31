import React, { useState } from 'react';
import validate from './validatInfo';

function Form() {
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(person));
  };

  return (
    <main className=" flex items-center justify-center bg-blue-500 py-12 px-4 sm:px-6 lg:px-8 ">
      <section className="max-w-md w-full h-screen">
        <h1 className="text-gray-100 text-center capitalize  ">
          create your own account
        </h1>
        <form className="mt-8 space-y-6" action="#" method="POST" error={error}>
          <div className="rounded-md  ">
            <div className="m-8">
              <label
                htmlFor="firstName"
                className="sr-only capitalize tet-red-500">
                first name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="first name* "
                autoComplete="first name"
                required
                name="firstName"
                value={person.firstName}
                onChange={handleChange}
                className="appearance-none rounded-none   w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 capitalize "
              />
              {error.firstName && (
                <p className="text-red-500 text-base capitalize">
                  {error.firstName}
                </p>
              )}
            </div>
            <div className="m-8">
              <label
                htmlFor="lastName"
                className="sr-only capitalize tet-red-500">
                last name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="last name* "
                autoComplete="last name"
                name="lastName"
                value={person.lastName}
                required
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 capitalize"
              />
              {error.lastName && (
                <p className="text-red-500 text-base capitalize">
                  {error.lastName}
                </p>
              )}
            </div>
            <div className="m-8">
              <label htmlFor="email" className="sr-only capitalize tet-red-500">
                email
              </label>
              <input
                type="email"
                id="email"
                placeholder="email* "
                autoComplete="email"
                required
                name="email"
                value={person.email}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 capitalize"
              />
              {error.email && (
                <p className="text-red-500 text-base capitalize">
                  {error.email}
                </p>
              )}
            </div>
            <div className="m-8">
              <label htmlFor="name" className="sr-only capitalize tet-red-500">
                password
              </label>
              <input
                type="password"
                id="password"
                placeholder="password* "
                value={person.password}
                name="password"
                required
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 capitalize"
              />
              {error.password && (
                <p className="text-red-500 text-base capitalize">
                  {error.password}
                </p>
              )}
            </div>
            <div className="m-8">
              <label htmlFor="name" className="sr-only">
                password2
              </label>
              <input
                type="password"
                id="password2"
                placeholder="confirm password* "
                value={person.password2}
                name="password2"
                required
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 capitalize "
              />
              {error.password2 && (
                <p className="text-red-500 text-base capitalize">
                  {error.password2}
                </p>
              )}
            </div>
          </div>
          <div>
            <button
              onClick={handleSubmit}
              type="submit"
              className=" w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Register
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Form;

// import React from 'react'

// const Form = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default Form
