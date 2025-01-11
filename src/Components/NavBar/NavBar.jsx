'use client';
import Link from 'next/link';
import Image from 'next/image';
import LogoSite from '/public/logo.png';
import { useState, useEffect } from 'react';

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	// بررسی اسکرول
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true); // زمانی که صفحه بیشتر از 50 پیکسل اسکرول شود
			} else {
				setIsScrolled(false);
			}
		};

		// اضافه کردن رویداد اسکرول
		window.addEventListener('scroll', handleScroll);

		// حذف رویداد اسکرول هنگام پاکسازی
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header>
			<nav className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled ? 'bg-[#1A1A2E]' : 'bg-transparent'}`}>
				<div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center relative">
					{/* لوگو در سمت راست برای موبایل و سمت چپ برای دسکتاپ */}
					<span className="w-[120px] text-[#EAEAEA] font-bold ml-auto md:mr-0 cursor-pointer">
						<Image src={LogoSite} alt="Logo" />
					</span>

					{/* منوی وسط */}
					<ul className="hidden md:flex font-bold text-xl flex-row space-x-8 justify-center items-center flex-grow gap-5">
						<li>
							<Link href="/" className="text-[#DDD] text-[30px] hover:border-b-[4px]  hover:transition-[2s] ">
								خانه
							</Link>
						</li>
						<li>
							<Link href="/about" className="text-[#DDD] text-[30px] hover:border-b-[4px] hover:transition-[2s]">
								درباره‌ی من
							</Link>
						</li>
					</ul>

					{/* دکمه "تماس با من" فقط در حالت دسکتاپ نمایش داده می‌شود */}
					<div className=" justify-end md:ml-auto hidden md:flex">
						<Link href="/contact">
							<button className="text-[#000] font-bold text-[22px]  px-4 py-2 bg-[#eaeaea] rounded hover:bg-[#ccc]">تماس با من</button>
						</Link>
					</div>

					{/* دکمه منوی موبایل */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-[#EAEAEA] rounded-lg md:hidden hover:bg-[#2E2E3A] focus:outline-none">
						{isOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						) : (
							<svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
							</svg>
						)}
					</button>
				</div>
			</nav>

			{/* منوی موبایل */}
			<div
				className={`fixed top-0 right-0 h-full w-64 bg-[#1A1A2E] shadow-lg transform transition-transform duration-300 z-[50] ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				} md:hidden`}>
				<div className="flex justify-between items-center p-4 border-b border-gray-700">
					<span className="text-2xl text-[#EAEAEA] font-bold">منو</span>
				</div>
				<ul className="font-medium flex flex-col p-4 space-y-4">
					<li>
						<Link href="/" onClick={() => setIsOpen(false)} className="block py-2 px-3 text-[#DDDD] rounded">
							خانه
						</Link>
					</li>
					<li>
						<Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 px-3 text-[#EAEAEA] rounded hover:text-[#8dcccc]">
							درباره‌ی من
						</Link>
					</li>
					<li>
						<Link href="/contact" onClick={() => setIsOpen(false)} className="block py-2 px-3 text-[#EAEAEA] rounded hover:text-[#8dcccc]">
							تماس با من
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default NavBar;
