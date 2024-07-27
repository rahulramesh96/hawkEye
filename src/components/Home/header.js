import React from "react"
import Fade from "react-reveal/Fade"
import Input from "../Atoms/input"
import Button from "../Atoms/button"

// Assets
import HeaderImage from "../../images/header-main.jpg"

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Fade>
        <div>
          <h2 className="text-white font-poppins opacity-50 font-semibold mt-20 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-xl">
            We deliver premium cybersecurity solutions
          </h2>

          <h1 className="text-white font-poppins font-semibold text-2xl xxs:text-2xl xs:text-2xl sm:text-lg md:text-2xl lg:text-4xl xl:text-7xl 2xl:text-8xl">
            Ensure Holistic Security <br></br> {" "}
            <span class="text-gradient bg-gradient-to-r from-pink to-purple">
            every time.
            </span>
          </h1>
        </div>
      </Fade>



      <div className="max-w-7xl mx-auto mt-10">
        <div className="w-full h-auto overflow-hidden rounded-xl">
          <img className="w-full h-full" src={HeaderImage} alt="Header"></img>
        </div>
      </div>
    </div>
  )
}

export default Header
