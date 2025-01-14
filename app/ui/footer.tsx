'use client'

import { FaFacebookF, FaInstagram, FaLinkedin, FaSkype, FaTwitter } from "react-icons/fa"
import { MdKeyboardArrowRight } from "react-icons/md"

export default function Footer() {
  return (
    <section className="p-6 bg-black mt-10">
      <div className="max-w-[1150px] mx-auto testimonials">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
          <div className="">
            <div className="flex flex-col space-y-3">
              <p className="font-bold text-xl text-white">MyNews</p>
              <div>
                <p className="text-white">A108 Adam Street
                </p>
                <p className="text-white">NY 535022, USA</p>
              </div>
              <div>
                <p className="text-white">Phone: +1 5589 55488 55</p>
                <p className="text-white">Email: info@example.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-red-700 flex items-center justify-center rounded-md p-2">
                  <FaTwitter className="w-6 h-6" color="white"/>
                </div>
                <div className="w-8 h-8 bg-red-700 flex items-center justify-center rounded-md p-2">
                  <FaFacebookF className="w-6 h-6" color="white"/>
                </div>
                <div className="w-8 h-8 bg-red-700 flex items-center justify-center rounded-md p-2">
                  <FaInstagram className="w-6 h-6" color="white"/>
                </div>
                <div className="w-8 h-8 bg-red-700 flex items-center justify-center rounded-md p-2">
                  <FaSkype className="w-6 h-6" color="white"/>
                </div>
                <div className="w-8 h-8 bg-red-700 flex items-center justify-center rounded-md p-2">
                  <FaLinkedin className="w-6 h-6" color="white"/>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-xl font-bold mb-3 text-white">Useful Links</p>
            <div className="flex flex-col space-y-3">
              <div className="flex space-x-1 items-center">
                <MdKeyboardArrowRight className="w-5 h-5" color="white" />
                <span className="w-full text-white">Home</span>
              </div>
              <div className="flex space-x-1 items-center">
                <MdKeyboardArrowRight className="w-5 h-5" color="white" />
                <span className="w-full text-white"> About us</span>
              </div>
              <div className="flex space-x-1 items-center">
                <MdKeyboardArrowRight className="w-5 h-5" color="white" />
                <span className="w-full text-white">Services</span>
              </div>
              <div className="flex space-x-1 items-center">
                <MdKeyboardArrowRight className="w-5 h-5" color="white" />
                <span className="w-full text-white">Home</span>
              </div>
              <div className="flex space-x-1 items-center">
                <MdKeyboardArrowRight className="w-5 h-5" color="white" />
                <span className="w-full text-white"> Terms of service</span>
              </div>
              <div className="flex space-x-1 items-center">
                <MdKeyboardArrowRight className="w-5 h-5" color="white" />
                <span className="w-full text-white">Privacy policy</span>
              </div>
            </div>
          </div>
          <div className="">
            
            <p className="text-xl font-bold mb-3 text-white">Our Services</p>
            <div className="flex flex-col space-y-3">
              <div className="flex space-x-1 items-center">
                <MdKeyboardArrowRight className="w-5 h-5" color="white" />
                <span className="w-full text-white">Web Design</span>
              </div>
              <div className="flex space-x-1 items-center">
                <MdKeyboardArrowRight className="w-5 h-5" color="white" />
                <span className="w-full text-white">Web Development</span>
              </div>
              <div className="flex space-x-1 items-center">
                <MdKeyboardArrowRight className="w-5 h-5" color="white" />
                <span className="w-full text-white">Product Management</span>
              </div>
              <div className="flex space-x-1 items-center">
                <MdKeyboardArrowRight className="w-5 h-5" color="white" />
                <span className="w-full text-white">Marketing</span>
              </div>
              <div className="flex space-x-1 items-center">
                <MdKeyboardArrowRight className="w-5 h-5" color="white" />
                <span className="w-full text-white"> Graphic Design</span>
              </div>
            </div>
          </div>
          <div className="">
          <p className="text-xl font-bold mb-3">Our Newsletter</p>
            <div className="felx flex-col space-y-3">
            <p className="text-white">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <div className="flex items-center space-x-0">
              <input type="text" className="p-2 bg-white border-[1px] border-gray-500 rounded-l-md"></input>
              <button className="rounded-r-md p-2 bg-red-700 text-center text-white border-[1px] border-gray-500">Subscribe</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}