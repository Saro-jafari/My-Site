'use client';
import Link from 'next/link';
import Image from 'next/image';
import LogoSite from '/public/logo.png';
import { useState, useEffect } from 'react';

const NavBar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header>
			<nav className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled ? 'bg-[#1A1A2E]' : 'bg-transparent'}`}>
				<div className="relative flex items-center justify-between max-w-screen-xl p-4 mx-auto">
					<span className="w-[120px] text-[#EAEAEA] font-bold ml-auto md:mr-0 cursor-pointer">
						<Image src={LogoSite} alt="Logo of the website" priority />
					</span>

					<ul className="flex-row items-center justify-center flex-grow hidden gap-5 space-x-8 text-xl font-bold md:flex">
						<li>
							<Link href="/" aria-label="Go to home page" className="text-[#DDD] text-[35px] hover:border-b-[4px]  hover:transition-[2s]">
								خانه
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								aria-label="Go to about page"
								className="text-[#DDD] text-[35px] hover:border-b-[4px] hover:transition-[2s]">
								درباره‌ی من
							</Link>
						</li>
					</ul>

					<div className="justify-end hidden md:ml-auto md:flex">
						<Link href="/contact" aria-label="Go to contact page">
							<button className="text-[#000] font-bold text-[24px] px-4 py-2 bg-[#eaeaea] rounded hover:bg-[#ccc]">تماس با من</button>
						</Link>
					</div>

					<button
						onClick={() => setIsOpen(!isOpen)}
						type="button"
						role="button"
						aria-label="Toggle navigation menu"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-[#EAEAEA] rounded-lg md:hidden hover:bg-[#2E2E3A] focus:outline-none">
						{isOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-6 h-6"
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

			<div
				className={`fixed top-0 right-0 h-full w-64 bg-[#1A1A2E] shadow-lg transform transition-transform duration-300 z-[50] ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				} md:hidden`}>
				<div className="flex items-center justify-between p-4 border-b border-gray-700">
					<span className="text-2xl text-[#EAEAEA] font-bold">منو</span>
				</div>
				<ul className="flex flex-col p-4 space-y-4 font-medium">
					<li>
						<Link href="/" onClick={() => setIsOpen(false)} aria-label="Go to home page" className="block py-2 px-3 text-[#DDDD] rounded">
							خانه
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							onClick={() => setIsOpen(false)}
							aria-label="Go to about page"
							className="block py-2 px-3 text-[#EAEAEA] rounded hover:text-[#8dcccc]">
							درباره‌ی من
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							onClick={() => setIsOpen(false)}
							aria-label="Go to contact page"
							className="block py-2 px-3 text-[#EAEAEA] rounded hover:text-[#8dcccc]">
							تماس با من
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default NavBar;
