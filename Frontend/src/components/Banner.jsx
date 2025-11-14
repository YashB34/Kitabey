import React from "react";
export default function () {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className=" order-2 md:order-1 mt-12 md:mt-30 p-4 md:w-1/2">
          <h1 className="text-4xl ">
            Hello , welcome here to learn something 
            <span className="text-pink-500"> new everyday!!!</span>
          </h1>
          <p className="text-xl mt-5 mb-5">
            Welcome to Kitabey, your one-stop destination for every kind of
            reader. From timeless classics to the latest bestsellers, we bring
            you a world of stories, ideas, and imagination — all in one place.
            Whether you’re a student, a dreamer, or a lifelong learner, we have
            something special waiting for you.
          </p>
          <label className="input validator mt-15">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="hello@mail.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
          <button className="btn btn-secondary mt-10 flex p-5 hover:bg-pink-400 duration-300">Login</button>
        </div>




        <div className="order-1 md:w-1/2 md:mt-18 p-4">
          <img className="md:w-122 md:h-100 md:m-15 my-5" src="/Banner.jpg" alt="Banner" />
      

        </div>
      </div>
    </>
  );
}
