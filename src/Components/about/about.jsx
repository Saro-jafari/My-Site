import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const AboutMe = () => {
	return (
		<section className="bg-[##201235] text-white py-12 px-4 sm:px-6 lg:px-12 mt-32">
			<div className="max-w-6xl gap-24 mx-auto">
				<header>
					<h1 className="mb-6 text-4xl font-extrabold text-center text-white sm:text-4xl md:text-5xl">سلام 👋, من سارو ام</h1>
				</header>

				<article>
					<p className="mb-8 text-base font-bold leading-relaxed text-center sm:text-xl font-sahel lg:text-lg">
						به‌عنوان یک توسعه‌دهنده وب، متعهد و پرانرژی به طراحی وب‌سایت‌های استثنایی هستم. با دقت به جزئیات و توانایی عالی در برقراری
						ارتباط، تمرکز من روی ارائه کار با کیفیت بالا و همکاری موثر با مشتریان و اعضای تیم است. هدف من ایجاد وب‌سایت‌هایی است که نه تنها
						از نظر ظاهری جذاب باشند، بلکه تجربه‌ای بی‌نقص و کاربرپسند برای مخاطبان فراهم کنند.
					</p>

					<div className="flex flex-col items-center justify-center mb-8 space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
						<Link href="/contact" className="text-base font-medium text-blue-500 hover:underline sm:text-lg" aria-label="تماس با من">
							📫 Contact Me
						</Link>
					</div>
				</article>

				<article>
					<div className="flex justify-center mb-8 space-x-4">
						<a
							href="https://t.me/Sarojafarii"
							target="_blank"
							rel="noopener noreferrer"
							className="transition-colors hover:text-blue-500"
							aria-label="Telegram">
							<Image
								src="https://upload.wikimedia.org/wikipedia/commons/8/83/Telegram_2019_Logo.svg"
								alt="Telegram"
								width={40}
								height={40}
							/>
						</a>
						<a
							href="https://twitter.com/sarojafarii"
							target="_blank"
							rel="noopener noreferrer"
							className="transition-colors hover:text-blue-500"
							aria-label="Twitter">
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
							className="transition-colors hover:text-blue-500"
							aria-label="LinkedIn">
							<Image
								src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
								alt="LinkedIn"
								width={40}
								height={40}
							/>
						</a>
					</div>
				</article>

				<section>
					<h2 className="mb-6 text-2xl font-bold text-center text-blue-500 sm:text-3xl">Languages and Tools</h2>
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
				</section>
			</div>
		</section>
	);
};

export default AboutMe;
