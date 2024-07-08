import React from 'react'
import Button from '../Button'
import Inputbox from '../Inputbox'

const Form = () => {
  return (
          <form className=" pb-5 bg-gray-100 rounded-md  mb-5">
          <div className="h-14 rounded-t-2xl text-lg uppercase font-bold text-[#191970] flex items-center justify-center bg-[#FDDF49]">
            {" "}
            enquire now!{" "}
          </div>

          <div className="flex items-center space-x-3 ml-5 md:ml-7 space-y-4">
            <p className="pt-3">Academic Year</p>
            <div className="px-5 md:px-7 text-white w-60  text-center  py-3 rounded-md bg-[#191970]">
              2024-2026
            </div>
          </div>

          <div className="flex space-y-4 items-center ml-5 md:ml-7">
            <p className="mt-4">
              Your Relationship <br /> with the Child
            </p>
            <div className="px-7 ml-4 text-white py-2 rounded-md bg-[#191970]">
              Father
            </div>
            <div className="px-9  py-2 rounded-md border-t-2 border-b-2 border-r-2">
              Mother
            </div>
          </div>

          <div className="flex space-x-2 md:space-x-0 mt-5 mx-5">
            <Inputbox
              type="text"
              label={"Child's First Name"}
              placeholder="Type Here"
              classes="border-2 py-2.5  rounded-md pl-1"
            />
            <Inputbox
              type="text"
              label={"Child's Last Name"}
              placeholder="Type Here"
              classes="border-2 py-2.5 rounded-md pl-1 "
            />
          </div>

          <div className="flex space-x-2 md:space-x-0  mt-5 mx-5">
            <Inputbox
              type="text"
              label={"Your First Name"}
              placeholder="Type Here"
              classes="border-2 py-2.5 rounded-md pl-1"
            />
            <Inputbox
              type="text"
              label={"Your Last Name"}
              placeholder="Type Here"
              classes="border-2 py-2.5 rounded-md pl-1"
            />
          </div>

          <div className="mt-5 mx-5">
            <Inputbox
              type="text"
              label={"Mobile Number"}
              placeholder="+91 | Enter your Mobile Number"
              classes="border-2 py-2.5 rounded-md pl-4 w-full"
            />
          </div>

          <div className="mt-5 mx-5">
            <Inputbox
              type="email"
              label={"Email Address"}
              placeholder="yourname@example.com"
              classes="border-2 py-2.5 rounded-md pl-4 w-full "
            />
          </div>

          <div className="flex justify-center items-center mt-5">
            <Button
              classes={"px-6 py-2 bg-[#292967] text-white rounded-full"}
              label={"Enquire Now"}
            />
          </div>

          {/* <Dropdown label="Course Applying For" optionValues={["BCA","BBA","MCA"]} placeholder="choose course" /> */}
        </form>
  )
}

export default Form