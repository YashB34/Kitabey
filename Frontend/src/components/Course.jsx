import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import Cards from "./Cards";
// import list from "../components/list.json";
import axios from "axios";
import { Base_URL } from "../configjs/Base_url.js";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function Course() {
  const[book , setBook] = useState([]);
  useEffect(()=>{
      const getBook = async()=>{
        try{
        const res = await axios.get(`${Base_URL}/book`, {
  headers: {
    Authorization: localStorage.getItem("token")
  }
});
          console.log(res.data)
          setBook(res.data)
        }catch(err){
          console.log(err);
        }
      }
      getBook();
  }, [])
  return (
    <>
      <Navbar />
      <div className=" min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4 mt-30">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">
            We're delight o have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <h2 className="text-xl mt-6">
            Welcome to our Book Store Courses — where learning meets
            imagination! 📖
          </h2>
          <p className="mt-4">
            Whether you're a beginner or a passionate reader, our curated
            courses are designed to help you explore literature, writing, and
            creativity in a new way. Dive deep into storytelling, discover
            powerful writing techniques, and gain real-world knowledge from
            expert authors. Every course is crafted to inspire your mind and
            sharpen your skills. Start your journey today — because every great
            reader can become a great thinker!
          </p>
          <Link to="/">
     
            <button className="btn btn-secondary mt-6">Back</button>
          </Link>
        </div>
        <div className=" mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
