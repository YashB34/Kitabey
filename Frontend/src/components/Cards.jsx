import React from "react";

export default function Cards({item}) {

  return (
    <>
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 p-4 my-4 ">
        <div className="card bg-base-100 shadow-xl hover:scale-105 duration-300 transition-all ease-in-out ">
  <figure>
    <img className="w-full h-64 object-cover rounded-t-xl"
      src={`${Base_URL}/${item.image}`}
      alt="Book img" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.title}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.name}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline"> {'\u20B9'} {item.price} /-</div>
      <div className="badge badge-outline p-3 hover:bg-pink-500 duration-300">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    
    </>
  )
}
