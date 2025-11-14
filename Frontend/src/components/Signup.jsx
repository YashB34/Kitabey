import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Signup(){
    const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm();
        
          const onSubmit = (data) => console.log(data);
    return(
        
        <>
      <div className="flex h-screen items-center justify-center  ">
        <div  className=" border-[1px] rounded-md p-12 shadow-2xl w-110">
          <div className="">
            <form   onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
             <Link to="/">  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl">
                ✕
              </button> 
             </Link>
        
            <h3 className="font-bold text-lg">Signup!</h3>
             {/* Name */}
            <div className="mt-4 space-y-2">
              <span>Name</span> <br />
              <input
                className="w-80 px-3 py-1 border rounded-md outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your fullname"
                {...register("name", { required: true })}
              />
               <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              <br />
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span> <br />
              <input
                className="w-80 px-3 py-1 border rounded-md outline-none"
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                 {...register("email", { required: true })}
              />
               <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              <br />
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span> <br />
              <input
                className="w-80 px-3 py-1 border rounded-md outline-none"
                type="Password"
                name="password"
                id="password"
                placeholder="Enter your password"
                 {...register("password", { required: true })}
              />
               <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
            </div>
            {/* Button */}
            <div className="flex justify-around mt-5">
                <button className="btn bg-secondary text-white rounded-md px-3 py-1 hover:bg-pink-700">Signup</button>
                 <p>Have account?  <Link to="/" className="underline text-blue-500 cursor-pointer">Login</Link></p>
               
            </div>
              </form>

          </div>
        </div>
      </div>
        </>
    )      
}