import React, { useState } from 'react'
import { SiAbstract } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const Header = () => {
	const [nav, setNav] = useState(true)
	const [search, setSearch] = useState(true)

	const navHandler = function(){
		setNav(!nav)
	}

  return (
		<nav
			className={`${
				nav ? "bg-[#191A1B]" : "bg-black"
			} text-[#fff]  text-xl flex justify-between items-center px-4 md:px-10 lg:px-16 xl:px-28 py-5`}>
			<div className="flex items-center gap-3">
				<div className="hover:opacity-70 cursor-pointer flex items-center space-x-2">
					<SiAbstract color="#fff" size={35} />
					<h1>Abstract</h1>
				</div>
				<span className="text-2xl hidden md:flex">|</span>
				<a className=" hidden md:flex font-thin hover:underline cursor-pointer">
					Help Center
				</a>
			</div>

			<div className="flex gap-4 items-center lg:hidden cursor-pointer">
				<IoSearch size={27} onClick={()=>{setSearch(!search)}}/>
				{nav ? (
					<IoCloseOutline size={30} onClick={navHandler} />
				) : (
					<RxHamburgerMenu size={30} onClick={navHandler} />
				)}
			</div>

			<div className="hidden lg:flex items-center space-x-4">
				<button
					type="button"
					className="outline outline-1 rounded-lg px-5 py-2 bg-[#191A1B]">
					Submit a request
				</button>
				<button
					type="button"
					className="bg-[#4C5FD5] px-5 py-2 rounded-lg hover:text-black hover:bg-[#fff] duration-200">
					Sign up
				</button>
			</div>

			{search && (
				<div className="lg:hidden absolute w-full bg-[#fff] top-0 left-0 right-0 pt-5 pb-5 px-4 flex items-center gap-4 z-10">
					<input
						type="text"
						placeholder="Search"
						className="outline outline-1 outline-black text-black w-full text-sm py-2 px-4 rounded-sm"
					/>
					<IoCloseOutline size={30} color='black' onClick={()=>{setSearch(!search)}} />
				</div>
			)}

			{nav && (
				<div className="lg:hidden h-auto absolute w-full top-[4rem] left-0 right-0 pb-8 pt-3 bg-[#191A1B]">
					<hr className="mb-10" />
					<ul className="text-[#fff] flex flex-col justify-center items-center gap-4 ">
						<li className="hover:opacity-60 cursor-pointer">
							Submit a request
						</li>
						<hr className="w-40 opacity-60" />
						<li className="hover:opacity-60 cursor-pointer">
							Sign up
						</li>
					</ul>
				</div>
			)}
		</nav>
  );
}

export default Header