// component import
import NavLink from "@/app/component/navbar/navlink";
// icon import
import {
  Facebook,
  Instagram,
  SearchOutlined,
  ShoppingBagOutlined,
  YouTube,
} from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";

// image import
import userIcon from "@/public/assets/images/user-icon.png";
import degreeIcon from "@/public/assets/images/degree-icon.png";
import fileIcon from "@/public/assets/images/file-icon.png";
import aboutPattern1 from "@/public/assets/images/about-pattern1.png";

import student from "@/public/assets/images/student.png";
import classroom from "@/public/assets/images/classroom.png";
import like from "@/public/assets/images/like.png";
import book from "@/public/assets/images/book.png";

import mapPattern from "@/public/assets/images/mapPattern.png";
import timeline from "@/public/assets/images/timeline.png";

import ai from "@/public/assets/images/ai.png";
import ux from "@/public/assets/images/UX.png";
import web from "@/public/assets/images/web.png";
import graphics from "@/public/assets/images/graphics.png";
import Navbar from "../component/navbar/navbar";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className=" px-24  flex flex-col text-center gap-4 justify-between items-center py-16">
        <div className="text-4xl font-semibold">About Us</div>
        <div className="flex gap-4">
          <NavLink url="/" title="Home" />-<NavLink url="/" title="Pages" />
          -<NavLink url="/" title="About Us" />
        </div>
      </div>
      <div className="section1 px-24 my-16 flex justify-between items-center">
        <div className="content w-1/2">
          <div className=" text-white ">
            <div className="container mx-auto py-12 ">
              <span className="text-white bg-secondaryBlue px-8 py-2 rounded-full">
                E-Learning Course
              </span>
              <h1 className="text-5xl font-bold mt-12">
                About Our Next Level E- Learning
              </h1>

              <h1 className="text-lg  mt-4">
                Nunc eu hendrerit turpis. Fusce non lectus sem. In pellentesque
                nunc
              </h1>
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex gap-4 items-center text-[#1AB69D] bg-green-100 rounded-lg p-12">
                  <div className="bg-white rounded-full p-4 text-3xl">
                    <img src={userIcon.src} alt="" />
                  </div>
                  <div className=" ">
                    <div className="text-xl font-semibold">Create Account</div>
                    <div className="">
                      Because he will ab hold, uniess but through concer,
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center text-[#8E56FF] bg-purple-100 rounded-lg p-12">
                  <div className="bg-white rounded-full p-4 text-3xl">
                    <img src={fileIcon.src} alt="" />
                  </div>
                  <div className=" ">
                    <div className="text-xl font-semibold">
                      Register Student Details
                    </div>
                    <div className="">
                      Because he will ab hold, uniess but through concer,
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center text-[#F2B31D] bg-yellow-100 rounded-lg p-12">
                  <div className="bg-white rounded-full p-4 text-3xl">
                    <img src={degreeIcon.src} alt="" />
                  </div>
                  <div className=" ">
                    <div className="text-xl font-semibold">
                      Get Certification
                    </div>
                    <div className="">
                      Because he will ab hold, uniess but through concer,
                    </div>
                  </div>
                </div>
                <div className="">
                  {" "}
                  <div className="inline-flex btn-auth bg-primaryYellow px-8 py-2 rounded-full  items-center gap-1 text-black">
                    Get Started →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner w-2/5">
          <img className="" src={aboutPattern1.src} alt="" />
        </div>
      </div>
      <div className="section2 grid grid-cols-4 gap-8 px-24">
        <div className="px-12 py-8 bg-green-100 border-green-300 text-[#1AB69D] rounded-lg flex flex-col gap-2 justify-center items-center">
          <div className="text-4xl font-semibold">12.3K</div>
          <div className="font-semibold">Student Enrolled</div>
          <img src={student.src} alt="" />
        </div>
        <div className="px-12 py-8 bg-red-100 border-red-300 text-red-500 rounded-lg flex flex-col gap-2 justify-center items-center">
          <div className="text-4xl font-semibold">12.3K</div>
          <div className="font-semibold">Student Enrolled</div>
          <img src={classroom.src} alt="" />
        </div>
        <div className="px-12 py-8 bg-purple-100 border-purple-300 text-purple-500 rounded-lg flex flex-col gap-2 justify-center items-center">
          <div className="text-4xl font-semibold">12.3K</div>
          <div className="font-semibold">Student Enrolled</div>
          <img src={like.src} alt="" />
        </div>
        <div className="px-12 py-8 bg-yellow-100 border-yellow-300 text-yellow-500 rounded-lg flex flex-col gap-2 justify-center items-center">
          <div className="text-4xl font-semibold">12.3K</div>
          <div className="font-semibold">Student Enrolled</div>
          <img src={book.src} alt="" />
        </div>
      </div>
      <div className="section3 px-24 my-36 py-24 text-center relative ">
        <span className="px-8 py-2 border text-secondaryBlue border-secondaryBlue rounded-full">
          Our Story
        </span>
        <div className="mt-8 text-5xl font-semibold ">Our Student Journey</div>
        <div className="flex mt-16 gap-12 text-left items-center">
          <div className="w-1/2 h-96 bg-white rounded-lg"></div>
          <div className=" w-1/3 ">
            <span className="text-2xl text-secondaryBlue">2024</span>
            <div className="text-4xl ">
              Presenting one million Joiner Through Online Ai Course Service
            </div>
            <div className="text-justify my-12">
              Classical Latin literature from 45 BC, making it over 2000 years
              old. Richard McClintock, a Latin professor at Hampden Sydney
              College in Virginia.
            </div>
            <div className="inline-flex bg-primaryYellow px-4 py-2 rounded-full  items-center gap-1 text-black">
              Join Now →
            </div>
          </div>
        </div>
        <div className="timeline mt-36 h-80 flex flex-col justify-center ">
          <img src={timeline.src} alt="" />
        </div>
        <div className="flex -z-10 top-1/4 left-0 justify-center  absolute inset-y-0 w-full h-full items-center  bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-gray-700 to-30% to-primaryBlue">
          <img src={mapPattern.src} alt="" />
        </div>
      </div>
      <div className="section4 px-24 my-36 relative ">
        <span className="inline-block  rounded-full bg-secondaryBlue px-8 py-2 my-8 text-white">
          Free Courses
        </span>
        <div className="content flex justify-between mt-4">
          <div className="">
            <div className="text-4xl font-semibold w-full ">
              Meet The Instructors
            </div>
          </div>
          <div className="text-right w-1/2">
            <button className="bg-primaryYellow rounded-full text-black px-6 py-2">
              View All Instructors →
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-12">
          {[
            {
              id: 1,
              icon: ai,
              title: "AI Expert",
              subtitle: "5 Experts",
            },
            {
              id: 2,
              icon: ux,
              title: "UI/UX Trainer",
              subtitle: "4 Trainer",
            },
            {
              id: 3,
              icon: web,
              title: "Web Trainer",
              subtitle: "5 Experts",
            },
            {
              id: 4,
              icon: graphics,
              title: "Creative Graphics",
              subtitle: "3 Practitioner",
            },
          ].map((cardItem) => (
            <div
              key={cardItem.id}
              className="hover:bg-secondaryBlue rounded-lg flex w-full items-center gap-4 px-4 py-6"
            >
              <div className="icon rounded-full bg-secondaryBlue inline  p-4">
                <img src={cardItem.icon.src} alt="" />
              </div>
              <div className="content">
                <h1 className="text-4xl font-medium">{cardItem?.title}</h1>
                <span className="text-xl">{cardItem?.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-8 mt-12">
          {[
            {
              id: 1,
              icon: ai,
              title: "AI Expert",
              subtitle: "5 Experts",
            },
            {
              id: 2,
              icon: ux,
              title: "UI/UX Trainer",
              subtitle: "4 Trainer",
            },
            {
              id: 3,
              icon: web,
              title: "Web Trainer",
              subtitle: "5 Experts",
            },
            {
              id: 4,
              icon: graphics,
              title: "Creative Graphics",
              subtitle: "3 Practitioner",
            },
          ].map((cardItem) => (
            <div
              key={cardItem.id}
              className="group relative bg-gray-200 min-h-96 rounded-lg"
            >
              {/* <!-- Social media icons --> */}
              <div className="absolute rounded-md bg-white right-2 top-2 p-2 gap-2 shadow-2xl flex flex-col justify-center  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-gray-500 hover:text-blue-500">
                  <Facebook />
                </span>
                <hr />
                <span className="text-gray-500 hover:text-blue-500">
                  <XIcon />
                </span>
                <hr />
                <span className="text-gray-500 hover:text-blue-500">
                  <Instagram />
                </span>
                <hr />
                <span className="text-gray-500 hover:text-blue-500">
                  <YouTube />
                </span>
              </div>

              {/* <!-- Card content --> */}
              <div className="group relative  p-6 rounded-lg  transition-shadow duration-300"></div>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <footer className="flex px-24 py-24 gap-36 ">
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
