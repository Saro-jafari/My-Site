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
				<section
					className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat md:hidden"
					style={{ backgroundImage: `url(${ImageProfile.src})`, objectFit: 'cover' }}></section>

				<section className="flex flex-col md:justify-end justify-center md:gap-y-2 text-white md:text-black md:p-0 z-10 md:w-1/2 md:static absolute top-[250px] right-4 md:mt-auto">
					<h1 className="text-[35px] md:text-[47px] md:font-semibold font-extrabold md:leading-[48px] text-[#dddd]">
						{' '}
						ساروجعفری&#8204;هستم
					</h1>
					<p className="text-[35px] md:text-[98px] font-bold leading-[60px] text-[#dddd] my-[15px] ">برنامه نویس</p>
					<p className="text-[35px] md:text-[98px] font-bold leading-[60px] text-[#dddd]"> تحت وب</p>
					<section className="flex flex-col md:flex-row items-start md:items-center gap-1 mt-2">
						<span className="text-[12px] md:text-[16px] font-sahel text-[#dddd] mt-4 max-w-[38rem] hidden md:block">
							من سعی می‌کنم تجربه‌ای کاربرپسند خلق کرده و با یادگیری تکنولوژی‌های جدید و همکاری مؤثر، پروژه‌هایی با کیفیت بالا و فراتر از
							انتظارات ارائه دهم.
						</span>
					</section>
					<div className="flex gap-5 mt-5 items-center">
						<section className="flex gap-5 ">
							<a
								href="https://t.me/Sarojafarii"
								className="px-2 py-2  bg-transparent text-white md:border-[#8750f7] border-[2px] rounded-full hover:bg-[#8750F7] cursor-pointer">
								<PiTelegramLogoLight size={25} />
							</a>
							<a
								href="https://github.com/Saro-jafari"
								className="px-2 py-2  bg-transparent text-white md:border-[#8750f7] border-[2px] rounded-full hover:bg-[#8750F7] cursor-pointer">
								<RxGithubLogo size={25} />
							</a>
							<a
								href="https://www.linkedin.com/in/saro-jafari-30a787243/"
								className="px-2 py-2  bg-transparent text-white md:border-[#8750f7] border-[2px] rounded-full hover:bg-[#8750F7] cursor-pointer">
								<FaLinkedinIn size={25} />
							</a>
						</section>
						<div>
							<Link
								href="https://drive.usercontent.google.com/u/0/uc?id=1AP5BRosK0TIF02jQWMUzQnUG6yu0FTYm&export=download"
								className="bg-transparent md:border-[#8750f7] border-[2px] p-4 hover:border-none hover:bg-[#8750F7] text-white rounded-lg font-sahel">
								دانلود رزومه من
							</Link>
						</div>
					</div>
				</section>

				{/* Desktop Image */}
				<section className="hidden md:block">
					<Image src={ImageProfile} alt="saro" width={300} height={300} className="shadow-md rounded-lg object-cover" />
				</section>
			</main>
			<section className="flex justify-center pt-28">
				<MySkills />{' '}
			</section>
		</>
	);
};

export default HomePage;
