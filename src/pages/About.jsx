import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-blue-950 mt-10">
        เกี่ยวกับRodD
      </h1>
      <hr className="mb-3 mt-3" />

      <div className="mt-10">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl">
            รายละเอียด
            <br />
            <p className="text-lg">
            RodD (รถดี) ศูนย์บริการรถยนต์มือสองบริการด้านรถยนต์มือสองครบวงจร
            ✔️ซื้อ-ขาย แลก-เปลี่ยนรถยนต์มือสอง✔️บริการจัดไฟแนนซ์ด้านสินเชื่อรถยนต์

            </p>
          </h1>
          {/* <div className="cafe w-full">
            <img
              className=" shadow-md rounded-xl"
              src="*"
              alt="Logo"
            />
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default About;
