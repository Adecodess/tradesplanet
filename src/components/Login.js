import React, { useState } from 'react';
import validate from '../validatInfo';
import httpClient from '../api/index';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [person, setPerson] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(validate(person));
    // if no error
    const { email, password } = person;

    if (email && password) {
      console.log(email, password);
      const encodedToken = Buffer.from(email + ':' + password).toString(
        'base64'
      );

      var config = {
        method: 'get',
        url: 'http://tradesplanetservice.herokuapp.com/api/v1/authenticate',
        headers: {
          '': '',
          Authorization: 'Basic Z29nQGdtYWlsLmNvbToxMjM0NTY=',
        },
      };

      try {
        const res = await http.get('api/v1/authenticate', [], {
          headers: {
            Authorization: 'Basic ' + encodedToken,
          },
        });
        if (res.data.status === 'success') {
          setMessage('logged in successfully');

          console.log(res);
        } else if (res.data.status === 'error') {
          setMessage(res.data.message);
        }
        history.push('/dashboard');
        setPerson(res.data);
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    } else {
      // alert('inavlid input');
    }
  };
  //   await axios.post(BASE_URL+'/users', data, { auth: {
  //   username: USERNAME,
  //   password: PASSWORD
  // }})
  const http = httpClient();
  return (
    <main className=" flex items-center justify-center bg-blue-500 py-12 px-4 sm:px-6 lg:px-8 ">
      {message && <div>{message}</div>}
      <section className="max-w-md w-full h-screen">
        <h1 className="text-gray-100 text-center capitalize  ">
          welcome back! sign in into your account
        </h1>
        <form className="mt-8 space-y-6" action="#" method="POST" error={error}>
          <div className="rounded-md  ">
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              />
              {error.email && (
                <p className="text-red-500 text-base capitalize">
                  {error.email}
                </p>
              )}
            </div>
            <div className="m-8">
              <label htmlFor="name" className="sr-only capitalize text-red-500">
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
          </div>
          <div>
            <button
              onClick={handleSubmit}
              type="submit"
              className=" w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Login
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
