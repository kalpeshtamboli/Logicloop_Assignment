import React from "react";
import map from "../assets/Rectangle 671.png";
import Button from "./Button";
import GoogleMap from "./GoogleMap/GoogleMap";
const Footer = () => {
  return (
    <footer className="bgColorr w-full  h-[66vh] md:h-[60vh] mt-14">
      <section className="flex flex-col md:flex-row items-center justify-between mx-32 pt-16">
        <div className="">
          <h4 className="uppercase text-white">dahisar</h4>
          <h1 className="uppercase text-2xl text-[#FDDF49]">
            universal high school
          </h1>

          <div className="flex mt-5 text-white gap-x-3">
            <div className="h-8 w-12 md:h-9 md:w-9 bg-[#FDDF49] flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>{" "}
            </div>
            <div>
              <h3 className="uppercase font-semibold">Address</h3>
              <p className="text-sm">
                Ashok Van, Shiv Vallabh Road, Dahisar East, Mumbai – 400 068
              </p>
            </div>
          </div>

          {/* contact for admission */}

          <div className="flex mt-5   text-white gap-x-3">
            <div className="h-8 w-12 md:h-9 md:w-9 bg-[#FDDF49] flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </div>
            <div>
              <h3 className="uppercase font-semibold">admission enquiery</h3>
              <p className="text-sm">
                +91 224 194 7733 | admissions.dahisar@universal.edu.in
              </p>
            </div>
          </div>
          <div className="mt-5 flex">
            <Button
              classes={
                "pr-12 pl-3 py-2 bg-[#FDDF49] text-[#292967] font-semibold rounded-full"
              }
              label={"Get In Touch"}
            />
            <div className="bg-[#292967] h-7  w-7 relative top-2 right-8 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
        <GoogleMap />
      </section>
      <div className="bg-black text-white h-16 mt-12 flex justify-center items-center text-sm ">
        Copyright © 2024 Universal Academy. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
