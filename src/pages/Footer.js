import React from "react";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import tiktok from "./tiktok.png";

function Footer() {
  return (
    <div className="bg-[#c8c8c8] flex  h-[15rem]">
      <div className="w-[60%]">
        <p className="text-[black] text-[40px] font-[Merriweather] pl-[4rem] pt-[2rem]">
          {" "}
          TrashToTreasure.<span style={{ color: "red" }}>com</span>
        </p>
        <div className="flex mx-[4rem]  w-[30%] gap-[1rem] pt-[1rem]">
          <i class="fa-brands fa-square-facebook"></i>
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
          <img src={tiktok} alt="" />
        </div>
      </div>
      <div className="flex w-[50%] text-[black] mx-auto pr-[2rem] py-[4rem] justify-between">
        <div className="">
          <p className="text-[18px]">Products</p>
          <div className="text-[black] text-[13px]">
            <p>Ervas</p>
            <p>Flores</p>
            <p>Cactos</p>
          </div>
        </div>
        <div>
          <p className="text-[18px]">Sobre nós</p>
          <div className="text-[black] text-[13px]">
            <p>Quem somos?</p>
            <p>FAQ</p>
            <p>Cactos</p>
          </div>
        </div>
        <div>
          <p className="text-[18px]">Trabalhe com a gente</p>
          <div className="text-[black] text-[13px]">
            <p>Entre em contato com nosso email</p>
            <p>EnvironmentalHealth@hv.sistem.com</p>
            <p>Cactos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
