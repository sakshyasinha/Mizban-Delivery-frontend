
import {useState} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';
import {FcGoogle} from 'react-icons/fc';
import {FiMail, FiLock, FiEye, FiEyeOff} from "react-icons/fi";
import toast from 'react-hot-toast';
const Login = () => {
    const {form,errors,loading,setField,setErrors,loginUser}=useAuthStore();

    const [showPassword,setShowPassword]=useState(false);
    const navigate= useNavigate();

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setField(name,value);

        if(errors[name]){
            setErrors({
                ...errors,
                [name]:""
            });
        }
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        loginUser(navigate,toast);
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 md:px-10 w-full">
      <div className="grid md:grid-cols-2 items-center gap-6 md:gap-10 max-w-6xl w-full">

        {/* LEFT SIDE */}
        <div className="grid place-items-center relative">
          <img
            src="/svg/circles.svg"
            alt="circles"
            className="w-[300px] md:w-[500px] mx-auto"
          />

          <img
            src="/svg/phone.svg"
            alt="phone"
            className="absolute w-36 sm:w-42 md:w-52 lg:w-64 top-1/2 left-1/2 
            -translate-x-[60%] -translate-y-[40%] drop-shadow-2xl"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="max-w-md w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
            Welcome Back 👋
          </h2>
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            Login to your account
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1 text-sm font-bold">
                Email
              </label>

              <div className="relative">
                <FiMail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                  strokeWidth={1.5}
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="Enter your email"
                  className={`w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1
                  ${
                    errors.email
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-orange-400"
                  }`}
                />
              </div>

              <p className={`${errors.email ? "text-red-500" : ""} text-xs pt-1`}>
                {errors.email || "\u00A0"}
              </p>
            </div>

            {/* Password */}
            <div>
             <div className="flex items-center justify-between mb-1">
                <label className="text-sm font-bold text-gray-700">
                Password
                </label>

               <button
                type="button"
                className="text-sm text-gray-500 hover:text-orange-500 hover:border-orange-500 focus:text-orange-500 focus:border-orange-500 cursor-pointer transition-colors duration-200"
                >
                Forgot Password
                </button>
            </div>

              <div className="relative">
                <FiLock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                  strokeWidth={1.5}
                />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-1
                  ${
                    errors.password
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-orange-400"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={!form.password}
                  
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer hover:text-gray-700"
                >
                  {form.password &&
                    (showPassword ? (
                      <FiEyeOff size={16} strokeWidth={1.5} />
                    ) : (
                      <FiEye size={16} strokeWidth={1.5} />
                    ))}
                </button>
              </div>

              <p className={`${errors.password ? "text-red-500" : ""} text-xs pt-1`}>
                {errors.password || "\u00A0"}
              </p>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 text-white font-semibold rounded-md transition flex items-center justify-center gap-2
              ${
                loading
                  ? "bg-orange-400 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600 cursor-pointer"
              }`}
            >
              {loading && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}

              {loading ? "Signing in..." : "Login"}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-5">
              <div className="flex-1 h-[1px] bg-gray-200"></div>
              <span className="text-gray-400 text-sm">OR</span>
              <div className="flex-1 h-[1px] bg-gray-200"></div>
            </div>

            {/* Google Login */}
            <button
              type="button"
              className="w-full py-2 border border-gray-300 rounded-md flex items-center justify-center gap-3 hover:bg-gray-50 cursor-pointer"
            >
              <FcGoogle size={18} />
              Continue with Google
            </button>

            <p className="text-center text-sm text-gray-400">
              Don’t have an account?
              <Link to="/signup" className="text-orange-500 ml-2">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
