// component import
import NavLink from "@/app/component/navbar/navlink";
import A_Accordion from "@/app/component/accordion/accordion";
// icon import
import {
  ArrowRightAlt,
  Instagram,
  SearchOutlined,
  ShoppingBagOutlined,
  Facebook,
  YouTube,
} from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import SendToMobileOutlinedIcon from "@mui/icons-material/SendToMobileOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import HourglassEmptyRoundedIcon from "@mui/icons-material/HourglassEmptyRounded";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

// image import
import trophy from "@/public/assets/images/trophy.png";
import banner from "@/public/assets/images/banner1.png";
import icon0 from "@/public/assets/images/0.png";
import icon1 from "@/public/assets/images/1.png";
import icon2 from "@/public/assets/images/2.png";
import icon3 from "@/public/assets/images/3.png";
import icon4 from "@/public/assets/images/4.png";
import icon5 from "@/public/assets/images/5.png";
import icon6 from "@/public/assets/images/6.png";
import icon7 from "@/public/assets/images/7.png";

import cardIcon1 from "@/public/assets/images/card-icon1.png";
import cardIcon2 from "@/public/assets/images/card-icon2.png";
import cardIcon3 from "@/public/assets/images/card-icon3.png";
import cardIcon4 from "@/public/assets/images/card-icon4.png";

import pattern1 from "@/public/assets/images/pattern1.png";
import pattern2 from "@/public/assets/images/pattern2.png";
import pattern3 from "@/public/assets/images/pattern3.png";
import mapPattern from "@/public/assets/images/mapPattern.png";
import timeline from "@/public/assets/images/timeline.png";
import upperFooter from "@/public/assets/images/upper-footer.png";

import ai from "@/public/assets/images/ai.png";
import ux from "@/public/assets/images/UX.png";
import web from "@/public/assets/images/web.png";
import graphics from "@/public/assets/images/graphics.png";

export default function Home() {
  return (
    <div className="">
      <div className="min-h-screen py-4 flex flex-col bg-gradient-60 from-[#303d65] via-[#2C313B] to-[#48372c] via-60% to-70% ">
        <div className="flex justify-between item-enter p-3 px-16 ">
          <div className="">
            <span className="text-primaryYellow">475092+ </span>
            No. of Students Counselled
          </div>
          <div className="">
            <span className="text-primaryYellow">475092+ </span>
            No. of Assisted in Placement
          </div>
        </div>
        <hr className="bg-gray-50 h-[1px] opacity-15" />
        <div className="flex flex-col justify-center items-between h-full">
          <div className="flex justify-between items-center px-4">
            <div className="logo">
              <img
                src="https://wayspire.in/wp-content/uploads/2023/09/new-logo-wayspire-copy-600x315-removebg-preview.png"
                alt="Logo"
                className="h-24"
              />
            </div>
            <div className="redirection flex gap-4 item-center justify-center">
              <NavLink url="/" title={"Home"} showArrow={true} />
              <NavLink url="/courses" title={"Program"} showArrow={true} />
              <NavLink url="/career" title={"Career"} showArrow={true} />
              <NavLink
                url="/contact-us"
                title={"Contact Us"}
                showArrow={false}
              />
              <NavLink url="about" title={"About"} showArrow={false} />
              <NavLink url="blogs" title={"Blogs"} showArrow={false} />
            </div>
            <div className="auth flex gap-4 items-center">
              <div className="search">
                <SearchOutlined />
              </div>
              <div className="cart">
                <ShoppingBagOutlined />
              </div>
              <div className="btn-auth bg-primaryYellow px-4 py-1 rounded-full font-semibold flex items-center gap-1 text-black">
                Sign in →
              </div>
            </div>
          </div>
          {/* Banner part  */}
          <div className="banner px-24 flex-1 h-full w-full flex gap-16 justify-between items-center py-16">
            <div className="hero-text flex-1">
              <div className=" ">
                <div className="tags  my-2 inline  bg-gradient-to-r px-3 py-2 from-secondaryBlue  to-gray-400 rounded-full gap-4 font-medium">
                  <img src={trophy.src} alt="" className="inline" />
                  <div className="inline whitespace-nowrap px-2">
                    Design Course
                  </div>
                </div>

                <div className="text-9xl font-bold my-2">UI/UX</div>
                <div className="my-2 text-2xl">
                  There Are Many Variations of Passages Of Lorem Ipsum
                  Available, But The Majority Have Suffered Alteration in Some,
                  Form
                </div>
                <button
                  type="submit"
                  className="my-4 bg-orange-500 hover:bg-orange-600 text-black  py-2 px-4 rounded-full"
                >
                  View Courses →
                </button>
              </div>
            </div>
            <div className="banner-image relative">
              <img src={banner.src} alt="" />
              <div className="h-16 w-16 bg-primaryYellow absolute bottom-4 left-4"></div>
            </div>
            <div className="hero-form flex-1 flex flex-col gap-2 justify-center">
              <div className="inline-flex justify-center">
                <div className="tags   h-auto  bg-gradient-to-r px-3 py-2 from-secondaryBlue  to-gray-400 rounded-full gap-4 font-medium">
                  <img src={trophy.src} alt="" className="inline" />
                  <div className="inline whitespace-nowrap px-2">
                    Trusted By 1 Crore+ Customers
                  </div>
                </div>
              </div>
              <div className="">
                <form className="bg-white shadow-md rounded-3xl px-8 py-8 ">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 w-full text-center py-6">
                    Interested Course?
                  </h2>
                  <div className="flex flex-col gap-4">
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2 ">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Your Name"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Your Email Address"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-3 py-2 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Your Phone Number"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="checkbox"
                        id="discount"
                        name="discount"
                        className="mr-2"
                      />
                      <label className="text-gray-700">
                        Do you have a discount coupon?
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-black  py-2 px-4 rounded-full"
                    >
                      Send Message →
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section1 flex p-24 justify-between gap-16 ">
        <div className="section-text ">
          <h1 className="text-6xl">What We Offer</h1>
          <div className="text-4xl mt-12">
            It&apos;s All About Design Courses.
          </div>
          <div className="text-4xl mb-12">Because Thats What We Do.</div>
          <div className="inline-flex bg-primaryYellow px-4 py-2 rounded-full  items-center gap-1 text-black">
            Explore More →
          </div>
        </div>
        <div className="section-cards flex-1">
          <div className="flex flex-col md:flex-row gap-4 min-h-96">
            <div className="bg-gray-800 rounded-lg  text-white flex flex-col justify-between py-16 px-12 ">
              <div className="">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-6xl font-light">
                    <SendToMobileOutlinedIcon
                      fontSize="inherit"
                      fontWeight={"light"}
                    />
                  </span>
                  <ExpandMoreOutlinedIcon />
                </div>
                <h3 className="text-4xl font-bold mb-6">
                  Career Navigation Program
                </h3>
              </div>

              <p className=" text-xl">
                There Are Many Variations Of Passages Of Lorem Ipsum Available,
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 text-white flex flex-col justify-between py-16 px-12 hover:bg-secondaryBlue cursor-pointer">
              <div className="">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-6xl">
                    <HourglassEmptyRoundedIcon fontSize="inherit" />
                  </span>
                  <ExpandMoreOutlinedIcon />
                </div>
                <h3 className="text-4xl font-bold mb-6">
                  Placement Assistance
                </h3>
              </div>

              <p className="text-xl">
                There Are Many Variations Of Passages Of Lorem Ipsum Available,
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 text-white flex flex-col justify-between py-16 px-12 hover:bg-secondaryBlue cursor-pointer">
              <div className="">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-6xl">
                    <LightbulbOutlinedIcon fontSize="inherit" />
                  </span>
                  <ExpandMoreOutlinedIcon />
                </div>
                <h3 className="text-4xl font-bold mb-6">Internship</h3>
              </div>
              <p className="text-xl">
                There Are Many Variations Of Passages Of Lorem Ipsum Available,
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section2 p-24 flex gap-8 relative mb-16">
        <div className="collaboration1 w-2/5">
          <span className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-800 to-primaryBlue">
            Our Partner
          </span>
          <div className="collaboration text-5xl my-4 font-semibold">
            Collaboration
          </div>
          <div className="subtitle text-md">
            Classical Latin Literature From 45 BC, Making it Over 2000 Years
            old. Richard McClintock, A Latin Professor At Hampden Sydney College
            in Virginia
          </div>
          <div className="icon-card-grid grid grid-cols-2 mt-8 gap-4">
            {[
              { icon: icon0, title: "Next Ace" },
              { icon: icon2, title: "Cubic Course" },
              { icon: icon5, title: "Spirtual School" },
              { icon: icon1, title: "Circuit Course" },
            ].map((iconItem) => (
              <div
                key={iconItem?.title}
                className="border rounded-3xl bg-primaryBlue flex flex-col items-center justify-center gap-4 py-16 px-4"
              >
                <img src={iconItem?.icon?.src} alt="" />
                <span className="text-3xl font-semibold">
                  {iconItem?.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="collaboration1 w-2/5">
          <div className="icon-card-grid grid grid-cols-2 gap-y-4 gap-4">
            {[
              { icon: icon7, title: "Dream Ace" },
              { icon: icon3, title: "Global Tech" },
              { icon: icon6, title: "Circle Course" },
              { icon: icon4, title: "One Course" },
            ].map((iconItem) => (
              <div
                key={iconItem.title}
                className="border rounded-3xl bg-primaryBlue flex flex-col items-center justify-center gap-4 py-16 px-4"
              >
                <img src={iconItem?.icon?.src} alt="" />
                <span className="text-3xl font-semibold">
                  {iconItem?.title}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 right-24">
            <img src={pattern1.src} alt="" />
          </div>
        </div>
      </div>
      <div className="section3 px-24 mb-16 relative">
        <div className="absolute right-0">
          <img src={pattern2.src} alt="" />
        </div>
        <span className="inline-block  rounded-full bg-secondaryBlue px-8 py-2 my-8">
          What we done
        </span>
        <div className="content flex justify-between mt-4">
          <div className="">
            <div className="text-4xl font-semibold w-2/3 ">
              Why People Choose Our Courses
            </div>
          </div>
          <div className="text-2xl w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            beatae repellat aperiam fugiat minima.
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-12">
          {[
            {
              id: 1,
              icon: cardIcon1,
              title: (
                <>
                  Learn UI <div className="font-bold">Fundamentals</div>
                </>
              ),
            },
            {
              id: 2,
              icon: cardIcon2,
              title: (
                <>
                  Master Modern <div className="font-bold">UI Trends</div>
                </>
              ),
            },
            {
              id: 3,
              icon: cardIcon3,
              title: (
                <>
                  4 Mentor <div className="font-bold">Sessions</div>
                </>
              ),
            },
            {
              id: 4,
              icon: cardIcon4,
              title: (
                <>
                  Certificate Of <div className="font-bold">Completion</div>
                </>
              ),
            },
          ].map((cardItem) => (
            <div
              key={cardItem.id}
              className="group grid-item bg-white hover:bg-secondaryBlue rounded-md min-h-32 flex flex-col justify-center items-start py-4 w-full px-8"
            >
              <img src={cardItem?.icon?.src} className="h-36" alt="" />
              <div className="text-primaryBlue text-xl my-4 group-hover:text-white ">
                {cardItem.title}
              </div>
              <div className="h-10 text-white aspect-square rounded-full group-hover:bg-primaryYellow flex justify-center items-center">
                <ArrowRightAlt />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section4 px-24 mb-16 flex justify-between items-center">
        <div className="content w-1/2">
          <div className=" text-white ">
            <div className="container mx-auto py-12 ">
              <span className="text-secondaryBlue bg-gray-100 px-8 py-2 rounded-full">
                UpScale
              </span>
              <h1 className="text-5xl font-bold mt-4">Wants To UpScale</h1>
              <div className="mt-6">
                <select
                  defaultValue={"Select Your Course"}
                  className="bg-white border  text-xl font-medium text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6  "
                >
                  <option value={"Select Your Course"}>
                    Select Your Course
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>

              <div className="mt-12 mx-6">
                <button className="bg-primaryYellow text-black   font-bold py-2 px-8 rounded-full">
                  Explore More →
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="banner w-2/5">
          <img className="" src={pattern3.src} alt="" />
        </div>
      </div>
      <div className="section5 px-24 my-36 relative">
        <span className="inline-block  rounded-full bg-secondaryBlue px-8 py-2 my-8">
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
              className="group relative bg-white min-h-96 rounded-lg"
            >
              {/* <!-- Social media icons --> */}
              <div className="absolute rounded-md right-0 p-2 gap-2 shadow-2xl flex flex-col justify-center  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
      <div className="section6 px-24 my-36 text-center relative">
        <span className="px-8 py-2 bg-secondaryBlue rounded-full">Journey</span>
        <div className="mt-8 text-5xl font-semibold">Our Student Journey</div>
        <div className="flex mt-16 gap-12 text-left items-center">
          <div className="w-1/2 h-96 bg-white rounded-lg"></div>
          <div className=" w-1/3">
            <span className="text-2xl text-secondaryBlue">2024</span>
            <div className="text-4xl ">
              Presenting one million Joiner Through Online Ai Course Service
            </div>
            <div className="text-justify my-4">
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
      <div className="section7 px-24 mb-16 flex justify-between items-center">
        <div className="banner w-2/5">
          <img className="" src={pattern3.src} alt="" />
        </div>
        <div className="content w-1/2">
          <div className=" text-white ">
            <div className="container mx-auto py-12 ">
              <span className="text-white bg-secondaryBlue px-8 py-2 rounded-full">
                FAQuestions
              </span>
              <h1 className="text-5xl font-bold mt-4">
                Frequently Asked Questions
              </h1>
              <h1 className="text-5xl font-bold mt-4">
                (About AI Study In UI Design)
              </h1>
              <h1 className="text-lg  mt-4">
                On The Other Hand, We Denounce With Righteous Indignation And
                Dislike
              </h1>
              <div className="mt-6 flex flex-col gap-4">
                {[
                  {
                    title: "Human-Computer Interaction (HCI)",
                    content:
                      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment",
                  },
                  {
                    title: "Data Visualization and Communication",
                    content:
                      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment",
                  },
                  {
                    title: "Natural Language Processing (NLP)",
                    content:
                      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment",
                  },
                  {
                    title: "What kind of jobs can UI/UX Design skills get me?",
                    content:
                      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment",
                  },
                ].map((accordion, index) => (
                  <A_Accordion
                    key={index}
                    title={accordion.title}
                    content={accordion.content}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section8 relative py-36  flex flex-col justify-center items-center gap-24">
        <div className="text-4xl  font-bold w-1/3 text-center">
          Our Completed AI Certificate Through One Course
        </div>
        <div className="inline-flex bg-primaryYellow px-4 py-2 rounded-full  items-center gap-1 text-black">
          Get Your Certificate →
        </div>
        <img className="absolute -z-10" src={upperFooter.src} alt="" />
      </div>
      <footer className="flex px-24 py-24 gap-36">
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
