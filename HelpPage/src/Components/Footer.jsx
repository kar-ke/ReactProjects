import React from 'react'
import { SiAbstract } from "react-icons/si";
import {resourceMenu, CommunityMenu, companyMenu} from '../Content/PageContents' 

const Footer = () => {
  return (
		<footer className="bg-black text-[#fff] grid md:grid-cols-2 gap-10 px-10 lg:flex lg:justify-around items-start pt-10">
			<div>
				<h1 className="text-2xl font-medium mb-5">Abstract</h1>
				<a className="hover:text-[#4C5FD5] cursor-pointer">Branches</a>
			</div>
			<div>
				<h1 className="text-2xl font-medium mb-5">Resources</h1>
				<ul>
					{resourceMenu.length > 0 &&
						resourceMenu.map(({ id, link }) => (
							<li
								className="mb-1 hover:text-[#4C5FD5] cursor-pointer"
								key={id}>
								{link}
							</li>
						))}
				</ul>
			</div>
			<div>
				<h1 className="text-2xl font-medium mb-5">Community</h1>
				<ul className="mb-1 ">
					{CommunityMenu.length > 0 &&
						CommunityMenu.map(({ id, link }) => (
							<li
								className="mb-1 hover:text-[#4C5FD5] cursor-pointer"
								key={id}>
								{link}
							</li>
						))}
				</ul>
			</div>
			<div>
				<h1 className="text-2xl font-medium mb-5">Company</h1>
				<ul>
					{companyMenu.length > 0 &&
						companyMenu.map(({ id, link }) => (
							<li
								className="mb-1 hover:text-[#4C5FD5] cursor-pointer"
								key={id}>
								{link}
							</li>
						))}
				</ul>
				<br />
				<h1 className="text-2xl font-medium mb-3 mt-3">Contact Us</h1>
				<p>info@abstract.com</p>
			</div>
			<div className="mt-40 mb-20 text-lg">
				<SiAbstract color="#fff" size={30} className="mb-3" />
				<p>&copy; Copyright 2024</p>
				<p>Abstract Studio Designm Inc.</p>
				<p>All rights reserved</p>
			</div>
		</footer>
  );
}

export default Footer