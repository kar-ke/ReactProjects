import React from "react";

const Searchbar = ({ handleChange, handleKeyDown }) => {
	return (
		<div className="flex flex-col w-full xl:w-[40%] lg:w-[60%] justify-center items-center space-y-8 mx-6 md:mx-20 ">
			<h1 className="text-4xl lg:text-6xl text-center">
				How can we help?
			</h1>
			<input
				type="text"
				placeholder="Search"
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				className="py-5 w-full outline outline-1 rounded-sm px-4  hover:outline-[#4C5FD5] duration-200  "
			/>
		</div>
	);
};

export default Searchbar;
