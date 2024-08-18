import React, { useEffect, useState } from "react";
import img from "../images/login.jpg";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("");
    const [showPass, setShowPass]=useState(false)
    const [pass, setPass] = useState("");
    const [error, setError]=useState(false)
    const confirmPass = "Montrims@789"
    const confirmEmail="admin@admin.com"
    console.log(email, pass);
    const navigate = useNavigate()
    const handleShow = () => {
        setShowPass(!showPass)
    }
    const loggedUser = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
      if (loggedUser?.isLoggedIn) {
        navigate("/");
      }
    }, []);
  const handleSubmit = (e) => {
      e.preventDefault();
      if (email !== confirmEmail) {
          setError(true);
          return
      }
      if (pass !== confirmPass) {
          setError(true)
          return
      }
      if (email === confirmEmail && pass === confirmPass) {
        
        localStorage.setItem("user",JSON.stringify({isLoggedIn:true, email:email}));
          navigate("/");
          setEmail("")
          setError(false)
        setPass("")
              
      }
  };
  return (
    <div className="h-screen">
      <div className="flex md:flex-row flex-col justify-around items-center h-full ">
        <div>
          <img className="h-[500px]" src={img} height="500" alt="" />
        </div>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col space-y-5"
        >
          <h1 className="text-3xl text-[#FD6F61]">Login Here</h1>
          <div className="flex flex-col text-start">
            <label htmlFor="">Email Address</label>
            <input
              className="border-2 border-[#484CF6] rounded-lg ps-2 bg-[#EBEEFF]"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id=""
            />
          </div>
          <div className="flex flex-col text-start">
            <label className="text-start">Password</label>
            <div className="relative">
              <input
                className="border-2 border-[#484CF6] rounded-lg ps-2 bg-[#EBEEFF]"
                onChange={(e) => setPass(e.target.value)}
                type={showPass ? "text" : "password"}
              />
              <span
                className="absolute pl-2 text-[#484CF6] cursor-pointer text-sm pt-1 right-0 pr-2"
                onClick={handleShow}
              >
                {showPass ? "hide" : "show"}
              </span>
            </div>
          </div>
          {error && (
            <p className="text-start font-light text-sm text-red-600">
              Wrong Email & Password
            </p>
          )}
          <div className="flex flex-col text-start">
            <button
              className="bg-[#FD6F61] text-white rounded-md py-1 hover:bg-[#484CF6]"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
