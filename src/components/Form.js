import React, { useState } from 'react';
import validate from '../validatInfo';
import httpClient from '../api/index';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Form() {
  const [person, setPerson] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const history = useHistory();
  const http = httpClient();
  const [error, setError] = useState({});

  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(validate(person));
    // if no error
    const { first_name, last_name, email, password, password_confirmation } =
      person;
    if (first_name && last_name && email && password && password_confirmation) {
      // axios
      //   .post(
      //     'https://tradesplanetservice.herokuapp.com/api/v1/register',
      //     person
      //   )
      //   .then((res) => {
      //     console.log(res);
      //   });
      try {
        const res = await http.post('api/v1/register', person);
        if (res.data.status === 'success') {
          setMessage('Sucessfully created, please login');
        } else if (res.data.status === 'error') {
          setMessage(res.data.message.email[0]);
        }
        // history.push('/login');
        setPerson(res.data);
        console.log(res);
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    } else {
      // alert('inavlid input');
    }
    // const res = await axios.post(
    //   'https://tradesplanetservice.herokuapp.com/api/v1/register',
    //   item
    // );
    // console.log(res);

    // try {
    //   axios
    //     .post('https://tradesplanetservice.herokuapp.com/api/v1/register', item)
    //     .then((res) => {
    //       console.log(res);
    //     });
    // } catch (error) {
    //   console.log(error);
    // }
    // axios
    //   .post('https://tradesplanetservice.herokuapp.com/api/v1/register', item)
    //   .then((res) => {
    //     console.log(res);
    //   });
  };
  return (
    <main className=" flex items-center justify-center bg-blue-500 py-12 px-4 sm:px-6 lg:px-8 ">
      <section className="max-w-md w-full h-screen">
        {message && <div>{message}</div>}
        <h1 className="text-gray-100 text-center capitalize  ">
          create your own account
        </h1>
        <form className="mt-8 space-y-6" action="#" error={error}>
          <div className="rounded-md  ">
            <div className="m-8">
              <label
                htmlFor="first_name"
                className="sr-only capitalize tet-red-500">
                first name
              </label>
              <input
                type="text"
                id="first_name"
                placeholder="first name* "
                autoComplete="first name"
                required
                name="first_name"
                value={person.first_name}
                onChange={handleChange}
                className="appearance-none rounded-none   w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 capitalize "
              />
              {error.first_name && (
                <p className="text-red-500 text-base capitalize">
                  {error.first_name}
                </p>
              )}
            </div>
            <div className="m-8">
              <label
                htmlFor="last_name"
                className="sr-only capitalize tet-red-500">
                last name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="last name* "
                autoComplete="last name"
                name="last_name"
                value={person.last_name}
                required
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 capitalize"
              />
              {error.last_name && (
                <p className="text-red-500 text-base capitalize">
                  {error.last_name}
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 "
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 "
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
                value={person.password_confirmation}
                name="password_confirmation"
                required
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 "
              />
              {error.password_confirmation && (
                <p className="text-red-500 text-base capitalize">
                  {error.password_confirmation}
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
            <button>
              <Link to="/login">Login</Link>
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Form;
