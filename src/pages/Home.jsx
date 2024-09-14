import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <Layout>
      <br />
      <img
            className="object-cover max-w-max"
            src="./Image/Rod_D.png"
            alt="รูป"
          />
      <section className=" mt-950 ">
      <h1 className="font-bold text-4xl text-blue-950 mt-10">
        สินค้าเกี่ยวกับRodD
      </h1>
      <hr className="mb-3 mt-3" />
 
      <div className="mt-10">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl">
            รายละเอียด
            <br />
            <p className="text-lg">
              รถมือสองในตอนนี้มีด้วยกัน6คัน รถมือสองสภาพดีหลากยี่ห้อ ผ่านการตรวจสภาพโดยสถาบันชั้นนำ

            </p>
          </h1>
          </div>
         
        <div className="flex items-center mx-auto justify-center mt-5">
        <div className="grid grid-cols-3 gap-4">
        <div className="max-w-sm p-6 bg-white shadow-md rounded-lg mt-4">
  <img
    className="object-cover w-full h-36 rounded-t-lg"
    src="Image/toyota.jpg"
    alt="Toyota Logo"
  />
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-2">TOYOTA</h2>
    <p className="text-gray-600 mb-4">Explore our range of Toyota vehicles. </p>
    <NavLink 
      to="/ToyotaVellfire" 
      className="inline-block px-4 py-2 bg-amber-500 text-white font-semibold rounded hover:bg-amber-600 transition duration-300"
    >
      View Details And Sale
    </NavLink>
  </div>
</div>

<div className="max-w-sm p-6 bg-white shadow-md rounded-lg mt-4">
  <img
    className="object-cover w-full h-36 rounded-t-lg"
    src="Image/nissan.jpg"
    alt="Nissan Logo"
  />
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-2">Nissan</h2>
    <p className="text-gray-600 mb-4">Discover our range of Nissan vehicles.</p>
    <NavLink 
      to="/NissanDetails" 
      className="inline-block px-4 py-2 bg-amber-500 text-white font-semibold rounded hover:bg-amber-600 transition duration-300"
    >
      View Details And Sale
    </NavLink>
  </div>
</div>


<div className="max-w-sm p-6 bg-white shadow-md rounded-lg mt-4">
  <img
    className="object-cover w-full h-36 rounded-t-lg"
    src="Image/mazda.jpg"
    alt="Mazda Logo"
  />
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-2">Mazda</h2>
    <p className="text-gray-600 mb-4">Explore our range of Mazda vehicles.</p>
    <NavLink 
      to="/MazdaDetails" 
      className="inline-block px-4 py-2 bg-amber-500 text-white font-semibold rounded hover:bg-amber-600 transition duration-300"
    >
      View Details And Sale
    </NavLink>
  </div>
</div>


<div className="max-w-sm p-6 bg-white shadow-md rounded-lg mt-4">
  <img
    className="object-cover w-full h-36 rounded-t-lg"
    src="Image/honda.jpg"
    alt="Honda Logo"
  />
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-2">Honda</h2>
    <p className="text-gray-600 mb-4">Discover our range of Honda vehicles.</p>
    <NavLink 
      to="/HondaDetails" 
      className="inline-block px-4 py-2 bg-amber-500 text-white font-semibold rounded hover:bg-amber-600 transition duration-300"
    >
      View Details And Sale
    </NavLink>
  </div>
</div>


<div className="max-w-sm p-6 bg-white shadow-md rounded-lg mt-4">
  <img
    className="object-cover w-full h-36 rounded-t-lg"
    src="Image/isuzu.jpg"
    alt="Isuzu Logo"
  />
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-2">Isuzu</h2>
    <p className="text-gray-600 mb-4">Explore our range of Isuzu vehicles.</p>
    <NavLink 
      to="/IsuzuDetails" 
      className="inline-block px-4 py-2 bg-amber-500 text-white font-semibold rounded hover:bg-amber-600 transition duration-300"
    >
      View Details And Sale
    </NavLink>
  </div>
</div>


<div className="max-w-sm p-6 bg-white shadow-md rounded-lg mt-4">
  <img
    className="object-cover w-full h-36 rounded-t-lg"
    src="Image/hyundai.jpg"
    alt="Hyundai Logo"
  />
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-2">Hyundai</h2>
    <p className="text-gray-600 mb-4">Explore our range of Hyundai vehicles.</p>
    <NavLink 
      to="/HyundaiDetails" 
      className="inline-block px-4 py-2 bg-amber-500 text-white font-semibold rounded hover:bg-amber-600 transition duration-300"
    >
     View Details And Sale
    </NavLink>
  </div>
</div>

        </div>
      </div>
      </div>
      </section>
    </Layout>
  );
};
export default Home;
