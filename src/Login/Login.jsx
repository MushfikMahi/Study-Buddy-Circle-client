import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const Login = () => {
  const { emailPassLogIn, googleCreateUser, gitHubCreateUser } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const hadleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    emailPassLogIn(email, password)
      .then( () => 
      toast("You have sucessfully loged in", {
        className: "mt-20",
      }),
      navigate(location?.state ? location.state : "/")
        
      )
      .catch((error) => toast.error(error.message));
  };
  const handelGoogleSignIn = () => {
    googleCreateUser()
      .then(() => {
        toast("You have sucessfully loged in", {
          className: "mt-20",
        }),
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log(error));
  };
  const handleGitHubSignIn = () => {
    gitHubCreateUser()
      .then(() => {
        toast("You have sucessfully loged in", {
          className: "mt-20",
        }),
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log(error));
  };
  const [showPass, setShowPass] = useState(false);
  return (
    <div>
<div className='flex justify-center items-center min-h-[calc(100vh-306px)] mb-12'>
      <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
        <div
          className='hidden bg-cover bg-center lg:block lg:w-1/2'
          style={{
            backgroundImage: 'url(https://img.freepik.com/free-photo/smiling-student-playing-with-his-magnifying-glass_1098-3432.jpg?t=st=1715310240~exp=1715313840~hmac=b82c006755557fec44c5a7a31090d56af0ad9d662b12824595f1e658f3185420&w=996)',
          }}
        ></div>

        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
          <div className='flex justify-center mx-auto'>
            <img className='w-auto h-7 sm:h-8' src='' alt='' />
          </div>

          <p className='mt-3 text-xl text-center text-gray-600 '>
            Welcome back!
          </p>

          <div
            onClick={handelGoogleSignIn}
            className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '
          >
            <div className='px-4 py-2'>
              <FaGoogle></FaGoogle>
            </div>

            <span className='w-5/6 px-4 py-3 font-bold text-center'>
              Sign in with Google
            </span>
          </div>
          <div
            onClick={handleGitHubSignIn}
            className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '
          >
            <div className='px-4 py-2'>
              <FaGithub></FaGithub>
            </div>

            <span className='w-5/6 px-4 py-3 font-bold text-center'>
              Sign in with GitHub
            </span>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b  lg:w-1/4'></span>

            <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
              or login with email
            </div>

            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
          </div>
          <form onSubmit={hadleLogin}>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='LoggingEmailAddress'
              >
                Email Address
              </label>
              <input
                id='LoggingEmailAddress'
                autoComplete='email'
                name='email'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='email'
              />
            </div>

            <div className='mt-4 relative'>
              <div className='flex justify-between'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='loggingPassword'
                >
                  Password
                </label>
              </div>

              <input
                id='loggingPassword'
                autoComplete='current-password'
                name='password'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type={showPass ? "text" : "password"}
              />
              <span
                    className="absolute right-3 bottom-4 text-black "
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
                  </span>
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
              >
                Sign In
              </button>
            </div>
          </form>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b  md:w-1/4'></span>

            <Link
              to='/registration'
              className='text-xs text-gray-500 uppercase  hover:underline'
            >
              or Register
            </Link>

            <span className='w-1/5 border-b  md:w-1/4'></span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;