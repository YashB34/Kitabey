import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Contact(){
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
        
            <h3 className="font-bold text-2xl">Contact Us</h3>
             {/* Name */}
            <div className="mt-3 space-y-1">
              <span>Name</span>
              <input
                className="w-80 px-3 py-1 border rounded-md outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your Name"
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
            <div className="mt-1 space-y-2">
              <span>Email</span>
              <input
                className="w-80 px-3 py-1 border rounded-md outline-none"
                type="text"
                name="email"
                id="email"
                placeholder="Email address"
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
            <div className="mt-1 space-y-2">
              <span>Message</span> <br />
              <textarea cols={8} rows={5}
                className="w-80 px-3 py-1 border rounded-md outline-none"
                type="text"
                name="text"
                id="text"
                placeholder="Enter your message"
                 {...register("text", { required: true })}
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
                <button className="btn bg-blue-500 text-white rounded-md px-4 py-1 hover:bg-blue-700">Submit</button>
                
            </div>
              </form>

          </div>
        </div>
      </div>
        </>
    )      
}