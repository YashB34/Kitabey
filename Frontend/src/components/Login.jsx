import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Base_URL } from "../config";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post(`${Base_URL}/user/login`, userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Successfully Login!");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error : " + err.response.data.message);
           setTimeout(() => {}, 2000);
        }
      });
  };
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            {/* close button */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </button>

              <h3 className="font-bold text-lg">Login!</h3>
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
                <button className="btn bg-secondary text-white rounded-md px-3 py-1 hover:bg-pink-700">
                  Login
                </button>
                <p>
                  Not registered?{" "}
                  <Link
                    to="/signup"
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}
