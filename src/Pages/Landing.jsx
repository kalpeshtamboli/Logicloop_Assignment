import React from "react";
import landingPic from "../assets/smiling_indian_student_with_glasses_and_backpack_standing_alone_on.png";
import schoolLogo from "../assets/pace-logo-png-1.svg";
import Button from "../Components/Button";
import Inputbox from "../Components/Inputbox";
import img1 from "../assets/1.svg";
import img2 from "../assets/2.svg";
import img3 from "../assets/3.svg";
import img4 from "../assets/4.svg";
import buildingImg from "../assets/Group 991.png";
import teamImg from "../assets/Rectangle 740.png";
import inSchoolPrepration from "../assets/Rectangle 683.svg";
import topperStud from "../assets/Group 1117.png";
import thirdTopper from "../assets/Rectangle 741.png";
import secondTopperStud from "../assets/Rectangle 692.png";
import FourthTopperStud from "../assets/Rectangle 741.png";
import asset1 from "../assets/asset1.png";
import asset2 from "../assets/asset2.png";
import asset3 from "../assets/asset3.png";
import asset4 from "../assets/assets4.png";
import asset5 from "../assets/assets5.png";
import asset6 from "../assets/asset6.png";
import asset7 from "../assets/asset7.png";
import asset8 from "../assets/asset8.png";
import asset9 from "../assets/asset9.png";
import asset10 from "../assets/asset10.png";

import Footer from "../Components/Footer";
import CarouselCompo from "../Components/Carousel";
import MasonryCompo from "../Components/Mansoury";

const multiCarasuolImages = [
  asset1,
  asset2,
  asset3,
  asset4,
  // asset5,
  // asset6,
  // asset7,
  // asset8,
  // asset9,
  // asset10,
];

const learningApproach = [
  {
    img: img1,
    title: "Classes are conducted during school hours on school premises",
  },
  {
    img: img2,
    title: "ISC curriculum is covered fully with competitive exams",
  },

  {
    img: img3,
    title: "Saves precious time for self-study",
  },

  {
    img: img4,
    title: "Experienced faculty powered by PACE IIT & MEDICAL",
  },
];

const ourProgramData = [
  {
    title: "ISC + NEET",
    bgColor: "bg-custom-yellow", // Assuming Tailwind CSS custom color
    content1:
      "NEET is a national-level examination conducted by NTA. The candidates who want to get admission to medical courses must qualify for the entrance test. NEET questions only come from Physics, Chemistry, Zoology, and Botany.",
    content2:
      "Powered by IITPACE, Universal High School Dahisar will prepare students for both ISC and NEET (and other Medical exams)  within the comfort of their school premises. Our coursework is specially created for the ISC curriculum to create a synergy between Board and NEET exam preparations during school hours.",
  },
  {
    title: "ISC + IIT JEE",
    bgColor: "bg-blue-200", // Tailwind CSS class
    content1:
      "IITs are one of the most prestigious colleges in the country. All Engineering aspirants wish to get into one of the IITs, but getting into  lot of hard work andhard and dedication is required to ace JEE Main and JEE Advanced to get into IIT or some other top educational institution in the country.",
    content2:
      "Powered by IITPACE, Universal High School Dahisar will prepare students for both ISC and IITJEE ( and other engineering exams) within the comfort synergy between Board and NEET exam preparations during school hours",
  },
];

const schoolPrepration = [
  { id: 1, content: "In School Prepration" },
  { id: 2, content: "Revision" },
  { id: 3, content: "Mock Tests" },
  { id: 4, content: "Feedback" },
  { id: 5, content: "Study Material" },
  { id: 6, content: "Couselling" },
  { id: 7, content: "Career Guidance" },
];

const Landing = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const topperStudentCarasuol = [
    topperStud,
    secondTopperStud,
    thirdTopper,
    FourthTopperStud,
  ];
  return (
    <div className="pb-20 backgroundImg relative h-[115vh] bg-cover bg-no-repeat bg-center mb-20">
      <header className="flex flex-col lg:flex-row items-center px-2 md:px-20 pt-10  ">
        <div>
          <p className=" text-[24px] uppercase text-center md:text-left font-semibold text-black">
            kickstart your
          </p>
          <h1 className="text-[#191970] text-[30px] md:text-[50px] font-bold">
            IIT JEE/NEET Test Prep,
          </h1>
          <div className="text-[#191970] gap-x-5 text-[15px] md:text-[50px] font-bold flex flex-col md:flex-row items-center ">
            <h1>Powered by</h1>
            <img src={schoolLogo} alt="" className="h-8 md:h-10 mt-3 md:mt-5" />
          </div>

          <div className="flex items-center gap-x-7 pt-10">
            <p className="font-bold uppercase">admission open</p>
            <div className="flex">
              <Button
                classes={"pr-12 pl-3 py-2 bg-[#191970] text-white rounded-full"}
                label={"Enquire Now"}
              />
              <div className="bg-[#FDDF49] h-7  w-7 relative top-2 right-8 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 mx-auto pt-1"
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
        </div>
        <img
          src={landingPic}
          alt="smiling_girl"
          className="w-[20rem] md:w-[27rem] pt-5 md:pt-40"
        />

        <div className="rounded-full text-sm px-2 md:px-0 w-96 md:-mt-4 ">
          <form className=" pb-5 bg-gray-100 rounded-md  mb-5">
            <div className="h-14 rounded-t-2xl text-lg uppercase font-bold text-[#191970] flex items-center justify-center bg-[#FDDF49]">
              {" "}
              enquire now!{" "}
            </div>

            <div className="flex items-center     space-x-3 ml-5 md:ml-7 space-y-4">
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
                classes="border-2 py-2.5 rounded-md pl-2"
              />
              <Inputbox
                type="text"
                label={"Child's Last Name"}
                placeholder="Type Here"
                classes="border-2 py-2.5 rounded-md pl-2"
              />
            </div>

            <div className="flex space-x-2 md:space-x-0  mt-5 mx-5">
              <Inputbox
                type="text"
                label={"Your First Name"}
                placeholder="Type Here"
                classes="border-2 py-2.5 rounded-md pl-2"
              />
              <Inputbox
                type="text"
                label={"Your Last Name"}
                placeholder="Type Here"
                classes="border-2 py-2.5 rounded-md pl-2"
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
        </div>
      </header>

      {/* learning approach */}
      <section className="bg-[#292967] text-white py-5 mx-3 md:mx-[90px] relative  rounded-3xl  w-auto ">
        <h1 className="text-center uppercase font-semibold">Our</h1>
        <h1 className="text-center text-[#FDDF49] pb-8 uppercase text-2xl font-semibold">
          Learning Approach
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 justify-center px-5 md:px-0 gap-x-14 md:gap-x-40">
          {learningApproach?.map((values, index) => (
            <div key={index} className="relative flex flex-col items-center ">
              <div className="bg-[#FDDF49] w-14 rounded-full flex items-center justify-center h-14">
                <img src={values?.img} alt="" className="h-10 w-10" />
              </div>
              <p className="w-40 text-center text-sm md:text-md ">
                {values?.title}
              </p>
              {index !== learningApproach.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-52px] h-full transform translate-x-1/2 -translate-y-1/2">
                  <div className=" h-full border-r-2 border-dashed border-gray-400"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className=" flex justify-center items-center mt-10 mb-5">
          <Button
            classes={
              "pl-4 pr-10 py-2 bg-[#FDDF49] text-[#292967] font-semibold rounded-full"
            }
            label={"Enquire Now"}
          />
          <div className="bg-blue-900 h-7  w-7 relative top-1 right-8 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* About section */}

      <div className="bg-[#FFF9DA]  lg:w-[55rem] rounded-3xl mt-14 mx-auto p-5">
        <section className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex items-center flex-col-reverse md:flex-row mt-10 mx-10 md:mx-0">
            <img
              src={buildingImg}
              alt="about us building img"
              className="mx-auto md:relative md:right-32 w-[15rem] md:w-[70rem] h-44 md:h-60"
            />
            <div className="">
              <h4 className="hidden md:block mt-5 font-semibold text-center md:text-left">
                ABOUT
              </h4>
              <h4 className="block md:hidden mt-5 font-semibold text-center md:text-left">
                BEST
              </h4>

              <h1 className="text-2xl font-bold uppercase text-center md:text-left text-[#292967] px-5 md:px-0">
                Universal High School
              </h1>
              <p className="w-80 px-5 md:px-0 text-center md:text-left md:w-11/12 text-sm leading-6 mt-3">
                Universal High School, Dahisar equips every student with the
                right attitude and skills to help them find their unique place
                in the world by providing a wholesome and ever-evolving learning
                environment. So that they can fearlessly pursue a better
                tomorrow. In line with this mission, Universal is launching the
                best IIT JEE/ NEET test prep program powered by PACE IIT &
                MEDICAL. PACE IIT & Medical is India’s best IIT JEE/ NEET test
                prep program and has helped more than xxx+ students prepare for
                IIT JEE and xxx students in NEET for the last few years.
              </p>
              <div className="mt-6 flex justify-center md:justify-start mb-5">
                <Button
                  classes="pl-3 pr-12 py-2 bg-[#292967] text-[white] font-semibold rounded-full"
                  label="Enquire Now"
                />
                <div className="bg-[#FDDF49] h-7  w-7 relative top-2 right-8 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 mx-auto pt-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>

              {/* <div className=" flex justify-center items-center mt-10 mb-5">
          <Button
            classes={
              "pl-4 pr-10 py-2 bg-[#FDDF49] text-[#292967] font-semibold rounded-full"
            }
            label={"Enquire Now"}
          />
        
        </div> */}
            </div>
          </div>
        </section>
      </div>

      <div className="bgColor h-[44rem] md:h-96 w-80 md:w-[62rem]  rounded-3xl mt-10 md:mx-52 mx-10">
        <section className=" flex  md:flex-row justify-center   items-center ">
          <div className="flex flex-col md:flex-row mt-1 md:mt-10 mx-10">
            <div className="ml-0 md:ml-32">
              <h4 className="mt-5 font-semibold text-center md:text-left">
                ABOUT
              </h4>
              <h1 className="text-2xl font-semibold uppercase text-center md:text-left text-[#292967]">
                ABOUT US
              </h1>
              <p className="w-96 md:w-9/12 text-sm leading-6 mt-3 text-center md:text-left px-10 md:px-0">
                Founded by Mr. Praveen Tyagi, for over two decades, PACE IIT &
                Medical has embarked on a remarkable journey, transforming the
                lives of students and shaping the landscape of competitive exam
                coaching. It all began in 1999, with a humble vision to bridge
                the gap between aspirations and achievements. PACE IIT & Medical
                has become synonymous with success in competitive exams and
                helped xxx students to crack IIT and xxx students to crack NEET/
                Medical exams.
              </p>
              <div className="mt-6 flex justify-center md:justify-start">
                <Button
                  classes={
                    "pl-4 pr-12 py-2 bg-[#292967] text-[white] font-semibold rounded-full"
                  }
                  label={"Enquire Now"}
                />
                <div className="bg-[#FDDF49] h-7  w-7 relative top-2 right-8 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 mx-auto pt-1"
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

            <div className="relative md:w-[55rem] h-52  right-0 mx-auto md:right-34 ">
              <img
                src={teamImg}
                alt="about us building img"
                className="relative  w-60 md:w-full top-8  h-60"
              />
            </div>
          </div>
        </section>
      </div>

      <main className="mt-10 md:mt-20 ">
        <h4 className="text-center font-semibold">OUR</h4>
        <h1 className="uppercase text-[#292967] font-semibold text-center text-3xl">
          programs
        </h1>

        <div className="flex flex-col md:flex-row gap-x-10 mx-10 md:mx-28 mt-20 space-y-24 md:space-y-0">
          {ourProgramData?.map((data, index) => (
            <div
              key={index}
              className={`w-80 md:w-1/2 rounded-3xl ${data?.bgColor}`}
            >
              <div className="bg-[#292967] flex py-4 w-44 md:w-72 relative rounded-t-2xl bottom-5 mx-auto justify-center items-center">
                <h4 className="text-white">{data?.title}</h4>
              </div>
              <div className="w-11/12">
                <p className="px-8 text-sm  ">{data?.content1}</p>
                <p className="mt-5 px-8 text-sm ">{data?.content2}</p>
              </div>
              <div className="flex justify-center relative top-5 inset-x-0">
                {" "}
                <Button
                  classes={
                    "pl-2 pr-12 py-2 bg-[#292967] text-white    font-semibold rounded-full"
                  }
                  label={"Enquire Now"}
                />
                <div className="bg-[#FDDF49] h-7  w-7 relative top-2 right-8 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 mx-auto pt-1"
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
          ))}
        </div>
      </main>

      {/* In school prepration */}

      <div className="mt-20 mx-10 md:mx-20 text-sm md:text-md">
        <div className="grid md:grid-cols-7 grid-cols-2 gap-x-3 gap-y-4 md:gap-y-0 text-center">
          {schoolPrepration?.map((data) => (
            <div
              className={`rounded-t-3xl px-8 font-semibold h-14 flex justify-center items-center pt-0 md:pt-2 ${
                data?.id === 1 ? "bg-[#292967] text-white" : "bg-[#E8E8F7]"
              }`}
            >
              {data?.content}
            </div>
          ))}
        </div>

        <div className="flex  flex-col md:flex-row items-center mx-5 md:mx-32 relative z-10 bg-white  shadow-slate-200 shadow-md py-10 px-5 rounded-3xl">
          <div className="">
            <h1 className="mt-2 text-xl text-center md:text-left  md:text-2xl font-bold text-[#292967]">
              In School Preparation
            </h1>
            <p className="w-11/12  md:w-9/12 mt-3 text-sm text-center md:text-left">
              Lectures will happen on campus during school hours with our
              esteemed faculty powered by PACE, so students don’t need to go
              anywhere for extra coaching or tuition classes.{" "}
            </p>
            <div className="mt-5 flex">
              <Button
                classes={
                  "pr-12 pl-3 py-3 bg-[#292967] text-white    font-semibold rounded-full"
                }
                label={"Enquire Now"}
              />
              <div className="bg-[#FDDF49] h-7  w-7 relative top-2 right-8 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 mx-auto pt-1"
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

          <div>
            <img
              src={inSchoolPrepration}
              alt="In school prepration"
              className="h-40"
            />
          </div>
        </div>
        <div className="backgroundImage  relative h-[25vh] md:h-[30vh] bg-cover bottom-32 md:bottom-44 bg-no-repeat bg-center">
          {" "}
        </div>
      </div>

      {/* Carasuol */}

      <div className="">
        <section className="flex justify-around md:justify-between mx-0 md:mx-40 items-center">
          <div className="uppercase">
            <h1>Success</h1>
            <p className="text-[#292967] text-2xl font-semibold">Stories</p>
          </div>
          <div className="flex">
            <Button
              classes={
                "pr-12  pl-3 py-2 bg-[#292967] text-white    font-semibold rounded-full"
              }
              label={"Enquire Now"}
            />
            <div className="bg-[#FDDF49] h-7  w-7 relative top-2 right-8 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 mx-auto pt-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </section>

        <CarouselCompo
          autoPlay={true}
          autoPlaySpeed={4000}
          swipeable={true}
          responsive={responsive}
          arrows={true}
          showDots={true}
          infinite={true}
        >
          {topperStudentCarasuol?.map((data, index) => (
            <div key={index} className="slider">
              <div className="mx-10 md:flex justify-center items-center">
                <img src={data} alt="" className="h-64" />
              </div>
            </div>
          ))}
        </CarouselCompo>
      </div>

      {/* multi image carasuol */}

      <div className=" bg-no-repeat bg-center bg-cover">
        <div className="flex justify-around">
          <p>Success</p>

          <div className="flex">
            <Button
              classes={
                "pl-2 pr-12 py-2 bg-[#292967] text-white    font-semibold rounded-full"
              }
              label={"Enquire Now"}
            />
            <div className="bg-[#FDDF49] h-7  w-7 relative top-2 right-8 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 mx-auto pt-1"
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

        <CarouselCompo
          autoPlay={true}
          autoPlaySpeed={4000}
          swipeable={true}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
              slidesToSlide: 1, // optional, default to 1.
            },
            tablet: {
              breakpoint: { max: 1024, min: 768 },
              items: 3,
              slidesToSlide: 2, // optional, default to 1.
            },
            mobile: {
              breakpoint: { max: 767, min: 464 },
              items: 2,
              slidesToSlide: 1, // optional, default to 1.
            },
          }}
          arrows={true}
          showDots={true}
          infinite={true}
        >
         <div className="m-[10%]">
         {[...new Array(1)]?.map((_, index) => {
            return <MasonryCompo images={multiCarasuolImages} />;
          })}
         </div>
        </CarouselCompo>
      </div>

      <Footer />
    </div>
  );
};

export default Landing;
