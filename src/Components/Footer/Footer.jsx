import Link from 'next/link';
import Image from 'next/image';
import LogoSite from '/public/logo.png';

const Footer = () => {
	return (
		<footer className="shadow pt-40">
			<div className="w-full max-w-screen-xl mx-auto p-4 md:py-6">
				<div className="sm:flex sm:items-center sm:justify-between">
					<i className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse w-[120px]">
						<Image src={LogoSite} alt="Logo of Saro's Portfolio" className="cursor-pointer" />
					</i>
					<ul className="flex flex-wrap items-center mb-6 text-sm font-bold text-gray-500 sm:mb-0 dark:text-gray-400 gap-6">
						<li>
							<Link
								href="https://github.com/Saro-jafari"
								className="hover:underline me-4 md:me-6 text-[25px]"
								aria-label="View Saro's GitHub Projects"
								title="Saro's GitHub Projects">
								پروژه ها
							</Link>
						</li>

						<li>
							<Link
								href="https://drive.usercontent.google.com/u/0/uc?id=1AP5BRosK0TIF02jQWMUzQnUG6yu0FTYm&export=download"
								className="hover:underline me-4 md:me-6 text-[25px]"
								aria-label="Download Saro's Resume"
								title="Download Saro's Resume">
								بارگیری رزومه
							</Link>
						</li>
						<li>
							<Link href="/contact" className="text-[25px]" aria-label="Contact Saro" title="Contact Saro">
								ارتباط با من
							</Link>
						</li>
					</ul>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
					<p className="text-[25px]">© 2024 سارو. تمام حقوق محفوظ است.</p>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
