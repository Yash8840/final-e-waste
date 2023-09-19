import React from 'react';
import back from './back.png'
function Awarepage() {
  return (
    <div className="w-full bg-[#4B5F3A] h-[40rem]"  >
        <div style={{ backgroundImage: "url('./back.jpg')" }}>
      <p className='text-[2rem] text-[black] p-[3rem]
      '>Awareness</p>
      <div className='flex justify-between'>
        <p></p>
        <div className="w-[40%] h-[20rem] mr-[2rem]">
        <img src={back} alt="" />
      </div>
      </div>
    </div>
    </div>
  );
}

export default Awarepage;