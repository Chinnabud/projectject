import React from 'react'
import Layout from '../components/Layout'; 
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <Layout>
      
      <h1 className="font-bold text-4xl text-blue-950 mt-10 text-alin:center">ช่องทางการติดต่อ</h1>
      <hr className='mt-5 mb-5' />

      <div className="card shadow rounded-md p-10 bg-slate-100">
      <h2>062-9387887,087-898989</h2>
      <h2>90 ถนน เทศา ตำบลพระปฐมเจดีย์ อำเภอเมืองนครปฐม นครปฐม 73000</h2>
      <h2>rodde@gmail.com</h2>
   

      </div>
  
      <h1 className="font-bold text-4xl text-blue-950 mt-10 text-alin:center">ช่องทางออนไลน์</h1>
      <NavLink to="https://www.instagram.com/" > <img className="object-cover  h-16 rounded-t-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png" alt="instargram" /></NavLink>
      <br />
      <NavLink to="https://www.facebook.com/profile.php?id=100086497086766&locale=th_TH" > <img className="object-cover  h-16 rounded-t-lg " src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="facebook" /> </NavLink> 
      <br />
      {/*   <img className="object-cover  h-16 rounded-t-lg " src="https://parspng.com/wp-content/uploads/2022/03/telephonepng.parspng.com-3.png" alt="tell " /> */}
         </Layout>
  )
}

export default Contact