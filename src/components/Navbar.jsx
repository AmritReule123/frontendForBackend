// function Navbar(){
//     return(
// <nav x-data="{ open: false }" className="px-5 pt-5 flex  justify-between md:justify-around items-center relative shadow pb-4  bg-gray-800 text-white">
//   <button onClick="open = !open" className="md:hidden focus:outline-none text-white">
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
//       <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
//     </svg>
//   </button>
//   {/* <div className="hidden md:flex space-x-6">
//     <a className="hover:text-bluegreen hover:underline" href="/">Home</a>
//     <a className="hover:text-bluegreen hover:underline" href="/services">Services</a>
//     <a className="hover:text-bluegreen hover:underline" href="/project">Project</a>
//     <a className="hover:text-bluegreen hover:underline" href="/about-us">About us</a>
//   </div> */}
//   <div className="hidden md:flex space-x-4">
//     {/* <a className="rounded-xl p-3 border-2 border-white hover:bg-white hover:text-black" href="/talk">+ Create</a> */}
//   </div>
//   <div x-cloak x-show="open" x-transition className="absolute top-full left-0 w-full bg-gray-800 lg:hidden flex flex-col items-center py-5 space-y-4 ">
//     {/* <a className="hover:text-bluegreen hover:underline" href="/">Home</a>
//     <a className="hover:text-bluegreen hover:underline" href="/services">Services</a>
//     <a className="hover:text-bluegreen hover:underline" href="/project">Project</a>
//     <a className="hover:text-bluegreen hover:underline" href="/about-us">About us</a> */}
//     <a className="rounded-xl p-3 border-2 border-white hover:bg-blue hover:text-white" href="/talk">+ Create</a>
//   </div>
// </nav>


//     )
// }
// export default Navbar;




import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-5 pt-5 flex justify-between md:justify-around items-center relative shadow pb-4 bg-gray-800 text-white">
      
      {/* Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden focus:outline-none text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Desktop Button */}
      <div className="hidden md:flex space-x-4">
        <a
          className="rounded-xl p-3 border-2 border-white hover:bg-white hover:text-black"
          href="/talk"
        >
          + Create
        </a>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-gray-800 lg:hidden flex flex-col items-center py-5 space-y-4">
          <a
            className="rounded-xl p-3 border-2 border-white hover:bg-blue-500 hover:text-white"
            href="/talk"
          >
            + Create
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;