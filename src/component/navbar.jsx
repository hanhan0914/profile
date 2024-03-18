


function Navbar(){
    return (
//         <nav className="bg-black mb-40 mt-20">
//   <div className="container mx-auto flex justify-between items-center">
//     <a href="/" className="text-white text-lg font-bold absolute left-3.5">Logo</a>
//     <ul style={{marginLeft:'110%',display:'flex'}} >
//       <li><a href="#about" className="text-white font-black text-3xl mr-10 hover:text-yellow-300 transition duration-300">About</a></li>
//       <li><a href="#services" className="text-white font-black text-3xl ml-10 hover:text-cyan-300 transition duration-300">Contact</a></li>
//     </ul>
  
//     <button className="md:hidden text-white">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//   </div>
//   <div className="md:hidden">
//           <ul className="flex flex-col mt-2 space-y-2">
//             <li><a href="#about" className="text-white">About Me</a></li>
//             <li><a href="#services" className="text-white">Projects</a></li>
//             <li><a href="#contact" className="text-white">Contact Me</a></li>
//           </ul>
//         </div>
// </nav>

        <nav className="bg-black mb-40 mt-20 ">
        <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-lg font-bold absolute left-3.5">Logo</a>
                <ul className="flex-grow hidden md:flex md:space-x-80 font-black " >
            <li><a href="#about" className="text-white font-black text-3xl hover:text-yellow-300  " style={{marginLeft:'760%'}} >About</a></li>
            <li><a href="#services" className="text-white  font-black text-3xl hover:text-cyan-300 transition duration-300 " style={{marginLeft:'350%'}}>Contact</a></li>
            {/* <li><a href="#contact" className="text-white mx-10 font-black text-3xl hover:text-lime-400 transition duration-300 ">Contact</a></li> */}
          </ul>
          
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        
        <div className="md:hidden">
          <ul className="flex flex-col mt-2 space-y-2">
            <li><a href="#about" className="text-white">About Me</a></li>
            <li><a href="#services" className="text-white">Projects</a></li>
            <li><a href="#contact" className="text-white">Contact Me</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;

