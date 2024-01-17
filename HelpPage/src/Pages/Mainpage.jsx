import React, { useState } from "react";
import Searchbar from "../Components/Searchbar";
import { mainData } from "../Content/PageContents";
import { IoIosArrowRoundForward } from "react-icons/io";

const Mainpage = () => {
	const [updatedsearchdata, updateSearchdata] = useState("");
	const [queryData, updateQueryData] = useState("");

	const handleChange = (event) => {
		updateSearchdata(event.target.value);
	};

	const handleKeyDown = (event) => {
		if ((event.key = "Enter")) {
			updateQueryData(updatedsearchdata);
		}
	};

	console.log(queryData);
	return (
		<div>
			<div className="flex justify-center items-center h-96 bg-[#dadbf1]  w-full">
				<Searchbar
					handleChange={handleChange}
					handleKeyDown={handleKeyDown}
				/>
			</div>
			<div className="grid md:grid-cols-2 mx-10 xl:mx-[14%] lg:mx-[8%] md:mx-[4%] my-20 gap-20">
				{mainData.map((data) => (
					<div key={data.id} className="flex gap-4">
						<img
							src={data.imgUrl}
							alt={data.title}
							className="h-[6rem]"
						/>
						<div>
							<h2 className="text-2xl font-semibold">
								{data.title}
							</h2>
							<p className="text-lg mb-3">{data.text}</p>
							<span className="text-[#4C5FD5] flex space-x-2">
								<a className="cursor-pointer hover:underline">
									Learn more
								</a>
								<IoIosArrowRoundForward size={28} />
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Mainpage;
