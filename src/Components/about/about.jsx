// components/AboutMe.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutMe = () => {
	return (
		<div className="bg-[##201235] text-white py-12 px-4 sm:px-6 lg:px-12 mt-32 ">
			<div className="max-w-6xl mx-auto gap-24">
				<h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-center text-white mb-6">سلام 👋, من سارو ام</h1>

				<p className="text-base sm:text-xl font-sahel lg:text-lg font-bold text-center mb-8 leading-relaxed">
					به‌عنوان یک توسعه‌دهنده وب، من متعهد و مشتاق ایجاد وب‌سایت‌های استثنایی هستم. با توجه دقیق به جزئیات و مهارت‌های قوی در برقراری
					ارتباط، تمرکز من بر ارائه کار با کیفیت بالا و همکاری موثر با مشتریان و اعضای تیم است. هدف من ایجاد وب‌سایت‌هایی است که از نظر
					ظاهری جذاب و کاربرپسند باشند و تجربه‌ای بدون نقص برای کاربران فراهم کنند.
				</p>

				<div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 space-y-4 sm:space-y-0 mb-8">
					<Link href="/contact" className="text-blue-500 hover:underline font-medium text-base sm:text-lg">
						📫 Contact Me
					</Link>
				</div>

				<div className="flex justify-center space-x-4 mb-8">
					<a href="https://t.me/Sarojafarii" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
						<Image src="https://upload.wikimedia.org/wikipedia/commons/8/83/Telegram_2019_Logo.svg" alt="Telegram" width={40} height={40} />
					</a>
					<a
						href="https://twitter.com/sarojafarii"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-blue-500 transition-colors">
						<Image
							src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
							alt="Twitter"
							width={40}
							height={40}
						/>
					</a>
					<a
						href="https://linkedin.com/in/saro-jafari-30a787243"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-blue-500 transition-colors">
						<Image
							src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
							alt="LinkedIn"
							width={40}
							height={40}
						/>
					</a>
				</div>

				<h2 className="text-2xl sm:text-3xl font-bold text-blue-500 text-center mb-6">Languages and Tools</h2>
				<div className="flex flex-wrap justify-center gap-4">
					<div className="flex flex-wrap justify-center gap-4">
						<Image
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
							alt="React"
							width={50}
							height={50}
						/>
						<Image
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
							alt="Redux"
							width={50}
							height={50}
						/>
						<Image
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
							alt="JavaScript"
							width={50}
							height={50}
						/>
						<Image
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
							alt="TypeScript"
							width={50}
							height={50}
						/>
						<Image src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind CSS" width={50} height={50} />
						<Image
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
							alt="HTML5"
							width={50}
							height={50}
						/>
						<Image
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
							alt="CSS3"
							width={50}
							height={50}
						/>
						<Image
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
							alt="MongoDB"
							width={50}
							height={50}
						/>
						<Image src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="SQL Server" width={50} height={50} />
						<Image src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js" width={50} height={50} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
