// component import
import NavLink from "@/app/component/navbar/navlink";
// icon import
import { Instagram, YouTube } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";

import Navbar from "../component/navbar/navbar";
import A_Accordion from "../component/accordion/accordion";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className=" px-24  flex flex-col text-center gap-4 justify-between items-center py-16">
        <div className="text-4xl font-semibold">Contact Us</div>
        <div className="flex gap-4">
          <NavLink url="/" title="Home" />-<NavLink url="/" title="Pages" />
          -<NavLink url="/contact-us" title="Contact Us" />
        </div>
      </div>
      <div className="section2 grid grid-cols-3 px-48 gap-16 py-16 ">
        <div className="flex bg-green-100 text-green-600 rounded-lg px-6 py-8 justify-between gap-4">
          <div className="description flex flex-col gap-4">
            <div className="title text-2xl">Australia</div>
            <div className="address">
              45 Folgate Street Canberra Looloith E1 6GL.
              <div className="mobile">+91-0987654321</div>
            </div>
            <div className="email">info@example.com</div>
          </div>
          <div className="image-block w-36 bg-gray-200 rounded-lg"></div>
        </div>
        <div className="flex bg-purple-100 text-purple-600 rounded-lg px-6 py-8 justify-between gap-4">
          <div className="description flex flex-col gap-4">
            <div className="title text-2xl">Australia</div>
            <div className="address">
              45 Folgate Street Canberra Looloith E1 6GL.
              <div className="mobile">+91-0987654321</div>
            </div>
            <div className="email">info@example.com</div>
          </div>
          <div className="image-block w-36 bg-gray-200 rounded-lg"></div>
        </div>
        <div className="flex bg-yellow-100 text-yellow-600 rounded-lg px-6 py-8 justify-between gap-4">
          <div className="description flex flex-col gap-4">
            <div className="title text-2xl">Australia</div>
            <div className="address">
              45 Folgate Street Canberra Looloith E1 6GL.
              <div className="mobile">+91-0987654321</div>
            </div>
            <div className="email">info@example.com</div>
          </div>
          <div className="image-block w-36 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
      <div className="section3 flex px-40 gap-36 justify-between">
        <div className="contact-content  flex flex-col gap-8 ">
          <div className="chip rounded-full w-min text-nowrap px-4 py-1 bg-purple-300 my-4">
            Learn With Us
          </div>
          <div className="text-5xl text-bold ">Happy To Hear Your Query!</div>
          <div className="">
            <div className="text-lg font-semibold">Address</div>
            <div className="">
              300 Arizona Ave, Holton, KS 66436, United States
            </div>
          </div>
          <div className="">
            <div className="text-lg font-semibold">Email</div>
            <div className="">Info@example.com</div>
          </div>
          <div className="">
            <div className="text-lg font-semibold">Phone</div>
            <div className="">+91-0987654321</div>
          </div>
          <div className="flex gap-2 my-4">
            <div className="border border-white rounded-full p-2">
              <Instagram />
            </div>
            <div className="border border-white rounded-full p-2">
              <XIcon />
            </div>
            <div className="border border-white rounded-full p-2">
              <YouTube />
            </div>
          </div>
          <div className="">
            <A_Accordion title={"Frequently Asked Questions"} content="Rest" />
          </div>
          <div className="">
            <A_Accordion title={"All Course Pricing"} content="Rest" />
          </div>

          <div className=" pb-2">
            <A_Accordion title={"Upcoming Online Courses"} content="Rest" />
          </div>
        </div>
        <div className="contact-form bg-white p-8 rounded-lg shadow-md w-1/3 mb-2">
          <div className="bg-yellow-400 text-white p-4 rounded-lg pb-16">
            <h2 className="text-2xl font-bold ">24/7 Service Support</h2>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold text-black">Can Join With Us.</h3>
            <form className="flex flex-col gap-4">
              {/* <label className="block text-gray-700 mt-2">Name</label> */}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="border border-gray-300 p-2 rounded-md w-full"
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="border border-gray-300 p-2 rounded-md w-full"
                required
              />

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="border border-gray-300 p-2 rounded-md w-full"
              />

              <textarea
                id="message"
                name="message"
                rows={4}
                className="border border-gray-300 p-2 rounded-md w-full"
              ></textarea>

              <button
                type="submit"
                className="bg-primaryBlue  text-white font-bold  rounded-full px-6 py-2 mt-4 w-min text-nowrap "
              >
                Submit Now
              </button>
            </form>
          </div>
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
