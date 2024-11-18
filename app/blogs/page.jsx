import React from "react";
import Navbar from "../component/navbar/navbar";

function page() {
  return (
    <>
      <div class=" min-h-screen text-gray-400">
        <Navbar />
        <div class="container mx-auto py-8">
          <div class=" p-6 rounded-lg shadow-md">
            <div className="h-96 w-full bg-gray-100 rounded-md"></div>
            <div className="flex justify-between text-nowrap  my-16">
              <div className="">March 2024</div>
              <div className="w-min flex gap-16">
                <span>Admin By Akash</span>
                <span>Comment (30)</span>
              </div>
            </div>
            <h1 class="text-3xl font-bold mb-4">
              Manufactured On A Large Scale Using Machinery, Contrary To Popular
              Belief, Lorem
            </h1>

            <p class=" mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div class="mb-8 flex gap-4">
              <div
                alt="Blog Image"
                class="w-1/2 rounded-lg h-[60vh] bg-gray-200"
              />{" "}
              <div
                alt="Blog Image"
                class="w-1/2 rounded-lg h-[60vh] bg-gray-200"
              />
            </div>

            <p class=" mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div class="bg-gray-200 p-4 rounded-lg mb-8">
              <h2 class="text-xl font-bold mb-2">Comments (30)</h2>
              <div class="mb-4">
                <div class="flex items-center">
                  <img
                    src="https://via.placeholder.com/30"
                    alt="Avatar"
                    class="w-10 h-10 rounded-full"
                  />
                  <div class="ml-4">
                    <h4 class="text-gray-800">John Doe</h4>
                    <p class="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <div class="flex items-center">
                  <img
                    src="https://via.placeholder.com/30"
                    alt="Avatar"
                    class="w-10 h-10 rounded-full"
                  />
                  <div class="ml-4">
                    <h4 class="text-gray-800">Jane Smith</h4>
                    <p class="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gray-200 p-4 rounded-lg" />
            <h2 class="text-xl font-bold mb-2">Leave a Reply</h2>
            <form>
              <textarea class="border border-gray-300 p-2 w-full rounded-md mb-4" />
              <button
                type="submit"
                class="bg-primaryBlue  text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>{" "}
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
    </>
  );
}

export default page;
