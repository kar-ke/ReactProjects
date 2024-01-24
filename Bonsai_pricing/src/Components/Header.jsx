import React, { useState } from "react";
import { navMenu } from "../Contents/Menuitems";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
	const [isdropthere, setIsdropthere] = useState(false);

	const handleHover = () => {
		setIsdropthere(true);
	};

	const handleUnhover = () => {
		setIsdropthere(false);
	};
	return (
		<nav className="flex flex-row justify-between items-center px-80 py-5 bg-white drop-shadow-lg">
			<div>
				<img
					src="https://web.archive.org/web/20221117021714im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
					alt="logo"
					className="h-8"
				/>
			</div>
			<div>
				<ul className="flex flex-row space-x-12 ">
					{navMenu.map((data, index) => (
						<li
							key={index}
							className="flex items-center gap-1 cursor-pointer">
							{data.title}

							{data.submenu && (
								<MdKeyboardArrowDown
									size={22}
									onMouseOver={handleHover}
									onMouseOut={handleUnhover}
								/>
							)}
						</li>
					))}
				</ul>
			</div>

			{isdropthere && (
				<div className="absolute top-[76px] translate-x-60 h-96 w-96 bg-black"></div>
			)}

			<div className="flex flex-row space-x-6">
				<button
					className="text-[#00b289] text-sm font-medium outline outline-1 py-2 px-4 rounded-[3px]"
					type="button">
					LOG IN
				</button>
				<button
					className="bg-[#00b289] hover:bg-[#00a189] duration-200 text-white px-4 py-2 text-sm font-medium rounded-[3px]"
					type="button">
					START FREE
				</button>
			</div>
		</nav>
	);
};

export default Header;
