'use client';
import Head from 'next/head';
import { PiTelegramLogoLight } from 'react-icons/pi';
import { RxGithubLogo } from 'react-icons/rx';
import { FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import ImageProfile from '../../../public/hero-bg.jpg';
import Link from 'next/link';
import MySkills from '../skills/skills';

const HomePage = () => {
	return (
		<>
			<>
				<Head>
					{/* Meta Information */}
					<meta
						name="description"
						content="ساروجعفری هستم، برنامه‌نویس تحت وب با تخصص در React و Next.js. در پروژه‌های طراحی وب‌سایت و توسعه اپلیکیشن فعالیت دارم."
					/>
					<meta name="keywords" content="ساروجعفری, برنامه نویس وب, توسعه‌دهنده React, توسعه‌دهنده Next.js, طراحی وب" />
					<meta name="robots" content="index, follow" />

					{/* Open Graph Meta Tags */}
					<meta property="og:title" content="ساروجعفری - برنامه نویس تحت وب" />
					<meta property="og:description" content="پورتفولیو و رزومه آنلاین ساروجعفری، برنامه‌نویس وب متخصص در React و Next.js" />
					<meta property="og:image" content="/hero-bg.jpg" />
					<meta property="og:url" content="https://sarodev.ir" />
					<meta property="og:type" content="website" />

					{/* Twitter Card Meta Tags */}
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content="ساروجعفری - برنامه نویس تحت وب" />
					<meta name="twitter:description" content="پورتفولیو و رزومه آنلاین ساروجعفری، برنامه‌نویس وب متخصص در React و Next.js" />
					<meta name="twitter:image" content="/hero-bg.jpg" />

					{/* Favicon */}
					<link rel="icon" href="/favicon.ico" />

					{/* Additional Meta Tags */}
					<meta name="author" content="ساروجعفری" />
				</Head>

				<main className="relative flex flex-col-reverse md:flex-row md:justify-around md:items-center h-screen md:h-[70vh]">
					{/* Mobile Background Image */}
					<section
						className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat md:hidden"
						style={{
							backgroundImage: `url(${ImageProfile.src})`,
							objectFit: 'cover',
						}}></section>

					{/* Content Section */}
					<section className="flex flex-col md:justify-end justify-center md:gap-y-2 text-white md:text-black md:p-0 z-10 md:w-1/2 md:static absolute top-[250px] right-4 md:mt-auto">
						<header>
							<h1 className="text-[35px] md:text-[47px] md:font-semibold font-extrabold md:leading-[48px] text-[#dddd]">ساروجعفری هستم</h1>
						</header>
						<h2 className="text-[35px] md:text-[98px] font-bold leading-[60px] text-[#dddd] my-[15px]">برنامه نویس</h2>
						<h2 className="text-[35px] md:text-[98px] font-bold leading-[60px] text-[#dddd]">تحت وب</h2>
						<section className="flex flex-col md:flex-row items-start md:items-center gap-1 mt-2">
							<p className="text-[12px] md:text-[16px] font-sahel text-[#dddd] mt-4 max-w-[38rem] hidden md:block">
								من ساروجعفری هستم، برنامه‌نویس تحت وب و متخصص در React و Next.js. من در پروژه‌های مختلفی که شامل طراحی رابط کاربری و توسعه
								وب‌سایت‌های مدرن است، تجربه دارم.
							</p>
						</section>
						<div className="flex gap-5 mt-5 items-center">
							<section className="flex gap-5">
								<a
									href="https://t.me/Sarojafarii"
									className="px-2 py-2 bg-transparent text-white md:border-[#8750f7] border-[2px] rounded-full hover:bg-[#8750F7] cursor-pointer"
									aria-label="Telegram"
									title="Telegram - ارتباط با ساروجعفری در تلگرام">
									<PiTelegramLogoLight size={25} />
								</a>
								<a
									href="https://github.com/Saro-jafari"
									className="px-2 py-2 bg-transparent text-white md:border-[#8750f7] border-[2px] rounded-full hover:bg-[#8750F7] cursor-pointer"
									aria-label="GitHub"
									title="GitHub - مشاهده پروفایل ساروجعفری در گیت‌هاب">
									<RxGithubLogo size={25} />
								</a>
								<a
									href="https://www.linkedin.com/in/saro-jafari-30a787243/"
									className="px-2 py-2 bg-transparent text-white md:border-[#8750f7] border-[2px] rounded-full hover:bg-[#8750F7] cursor-pointer"
									aria-label="LinkedIn"
									title="LinkedIn - مشاهده پروفایل ساروجعفری در لینکدین">
									<FaLinkedinIn size={25} />
								</a>
							</section>
							<div>
								<Link
									href="https://drive.usercontent.google.com/u/0/uc?id=1AP5BRosK0TIF02jQWMUzQnUG6yu0FTYm&export=download"
									className="bg-transparent md:border-[#8750f7] border-[2px] p-4 hover:border-none hover:bg-[#8750F7] text-white rounded-lg font-sahel"
									title="دانلود رزومه ساروجعفری">
									دانلود رزومه من
								</Link>
							</div>
						</div>
					</section>

					{/* Desktop Image */}
					<section className="hidden md:block">
						<Image
							priority
							src={ImageProfile}
							alt="ساروجعفری در حال برنامه‌نویسی وب با تخصص در React و Next.js"
							width={300}
							height={300}
							className="shadow-md rounded-lg object-cover"
							placeholder="blur"
							blurDataURL="data:image/svg+xml;base64,..."
						/>
					</section>
				</main>

				<section className="flex justify-center pt-28">
					<MySkills />
				</section>
			</>
		</>
	);
};

export default HomePage;
