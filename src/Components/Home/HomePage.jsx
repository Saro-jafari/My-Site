'use client';
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
			<main className="relative flex flex-col-reverse md:flex-row md:justify-around md:items-center h-screen md:h-[70vh]">
				{/* Mobile Background Image */}
				<section
					className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover md:hidden"
					style={{
						backgroundImage: `url(${ImageProfile.src})`,
						objectFit: 'cover',
					}}></section>

				{/* Content Section */}
				<section className="flex flex-col md:justify-end justify-center md:gap-y-2 text-white md:text-black md:p-0 z-10 md:w-1/2 md:static absolute top-[250px] right-4 md:mt-auto">
					<header>
						<h1 className="text-[35px] md:text-[47px] md:font-semibold font-extrabold md:leading-[48px] text-[#dddd]">سارو جعفری هستم</h1>
					</header>
					<h2 className="text-[35px] md:text-[98px] font-bold leading-[60px] text-[#dddd] my-[15px]">برنامه نویس</h2>
					<h2 className="text-[35px] md:text-[98px] font-bold leading-[60px] text-[#dddd]">تحت وب</h2>
					<section className="flex flex-col items-start gap-1 mt-2 md:flex-row md:items-center">
						<p className="text-[12px] md:text-[16px] font-sahel text-[#dddd] mt-4 max-w-[38rem] hidden md:block">
							متخصص در React و Next.js، مشتاق به همکاری در پروژه‌های وب مقیاس‌پذیر که تمرکز بر تجربه کاربری و عملکرد دارند. علاقه‌مند به
							ایجاد وب‌سایت‌های مدرن و کاربرپسند با بالاترین کیفیت ممکن.
						</p>
					</section>
					<div className="flex items-center gap-5 mt-5">
						<section className="flex gap-5">
							<a
								href="https://t.me/Sarojafarii"
								className="px-2 py-2 bg-transparent text-white md:border-[#8750f7] border-[2px] rounded-full hover:bg-[#8750F7] cursor-pointer"
								aria-label="Telegram"
								title="Telegram - ارتباط با سارو جعفری در تلگرام">
								<PiTelegramLogoLight size={25} />
							</a>
							<a
								href="https://github.com/Saro-jafari"
								className="px-2 py-2 bg-transparent text-white md:border-[#8750f7] border-[2px] rounded-full hover:bg-[#8750F7] cursor-pointer"
								aria-label="GitHub"
								title="GitHub - مشاهده پروفایل سارو جعفری در گیت‌هاب">
								<RxGithubLogo size={25} />
							</a>
							<a
								href="https://www.linkedin.com/in/saro-jafari-30a787243/"
								className="px-2 py-2 bg-transparent text-white md:border-[#8750f7] border-[2px] rounded-full hover:bg-[#8750F7] cursor-pointer"
								aria-label="LinkedIn"
								title="LinkedIn - مشاهده پروفایل سارو جعفری در لینکدین">
								<FaLinkedinIn size={25} />
							</a>
						</section>
						<div>
							<Link
								href="https://saro-resume-2004.storage.c2.liara.space/Saro%20jafari%20persian.pdf"
								className="bg-transparent md:border-[#8750f7] border-[2px] p-4 hover:border-none hover:bg-[#8750F7] text-white rounded-lg font-sahel"
								title="دانلود رزومه سارو جعفری">
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
						alt="سارو جعفری، برنامه‌نویس حرفه‌ای وب با تخصص در React و Next.js، در حال توسعه و بهینه‌سازی وب‌سایت‌های مدرن"
						width={300}
						height={300}
						className="object-cover rounded-lg shadow-md"
						placeholder="blur"
						blurDataURL="data:image/svg+xml;base64,..."
					/>
				</section>
			</main>

			<section className="flex justify-center pt-28">
				<MySkills />
			</section>
		</>
	);
};

export default HomePage;
