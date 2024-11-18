"use client";
import React from "react";
// component import
import NavLink from "@/app/component/navbar/navlink";
// icon import
import { SearchOutlined, ShoppingBagOutlined } from "@mui/icons-material";

import star from "@/public/assets/images/star.png";
import lesson from "@/public/assets/images/lesson.png";
import monitor from "@/public/assets/images/monitor.png";
import history from "@/public/assets/images/history.png";
import Navbar from "../component/navbar/navbar";

export default function Home() {
  const [category, setCategory] = React.useState("View All →");
  return (
    <div className="">
      <Navbar />
      {/* Banner part  */}
      <div className=" px-24  flex flex-col text-center gap-4 justify-between items-center py-16 ">
        <div className="text-4xl font-semibold">Course List</div>
        <div className="flex gap-4">
          <NavLink url="/" title="Home" />-<NavLink url="/" title="Pages" />
          -<NavLink url="/courses" title="Course List" />
        </div>
      </div>
      <div className="section1 text-center px-24 py-16">
        <span className="text-white bg-secondaryBlue px-8 py-2 rounded-full">
          Design Course
        </span>
        <div className="text-4xl mt-4 mb-6 font-semibold">Popular Courses</div>
        <div className="">
          There are many variations of passages of Lorem Ipsum available
        </div>
        <div className="grid grid-cols-6 gap-4 mt-12">
          {[
            "Web Design",
            "Web Development",
            "Digital Science",
            "Digital Marketing",
            "Mobile App",
            "View All →",
          ].map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-4 py-2 border rounded-full text-secondaryBlue border-secondaryBlue hover:bg-secondaryBlue hover:text-white ${
                category.toLocaleLowerCase() === item.toLocaleLowerCase()
                  ? "bg-secondaryBlue text-white"
                  : ""
              }`}
            >
              {item === "all" ? "View All →" : item}
            </button>
          ))}
        </div>
      </div>
      <div className="px-24 grid grid-cols-4 my-16 gap-4">
        {[
          ...Array.from({ length: 20 }).map((card) => (
            <div key={card} className="rounded-lg shadow-lg p-4">
              <div className="h-60 w-full bg-[#F6F2FF] rounded-lg"></div>
              <div className="grid grid-cols-3 my-4">
                <span className="col-span-2 text-2xl font-semibold">
                  Web Designer For Beginner
                </span>
                <span className="text-xl">$26.00</span>
              </div>
              <div className="flex">
                {[
                  ...Array.from({ length: 5 }).map((item) => (
                    <span key={item}>
                      <img src={star.src} />
                    </span>
                  )),
                ]}
                <div className="">4.5+ Reviews</div>
              </div>
              <div className="py-4">
                The majority have suffered alteration The majority{" "}
              </div>
              <hr />
              <div className="my-4 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <img src={lesson.src} alt="" /> 13 lessons
                </div>
                <div className="flex gap-2 items-center">
                  <img src={monitor.src} alt="" /> Intermediate
                </div>
                <div className="flex gap-2 items-center">
                  <img src={history.src} alt="" /> 5hrs
                </div>
              </div>
            </div>
          )),
        ]}
      </div>
      <hr />
      <footer className="flex px-24 py-24 gap-36 bg-black">
        <div className="w-1/4">
          <div className="logo px-0">
            <img
              src="https://wayspire.in/wp-content/uploads/2023/09/new-logo-wayspire-copy-600x315-removebg-preview.png"
              alt="Logo"
              className="h-24"
            />
          </div>
          <div className="mt-12">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment,{" "}
          </div>
        </div>
        <div className="w-3/4 grid grid-cols-4 text-white">
          <div className="Resources flex flex-col gap-4">
            <div className="text-lg font-semibold mb-4">Resources</div>
            <div className="">Articles</div>
            <div className="">Blogs</div>
            <div className="">Challenges</div>
            <div className="">Projects</div>
            <div className="">Videos</div>
            <div className="">Workspaces</div>
          </div>
          <div className="Plans flex flex-col gap-4">
            <div className="text-lg font-semibold mb-4">Plans</div>
            <div className="">For Individuals</div>
            <div className="">For Students</div>
            <div className="">For Teams</div>
            <div className="">Discounts</div>
          </div>
          <div className="Support flex flex-col gap-4">
            <div className="text-lg font-semibold mb-4">Support</div>
            <div className="">24X7 Call</div>
            <div className="">Report</div>
            <div className="">Help Center</div>
            <div className="">Terms & Conditions</div>
            <div className="">Forums</div>
          </div>
          <div className="Subjects flex flex-col gap-4">
            <div className="text-lg font-semibold mb-4">Subjects</div>
            <div className="">IT</div>
            <div className="">Machine Learning</div>
            <div className="">Mobile Development</div>
            <div className="">Web Design</div>
            <div className="">Web Development</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
