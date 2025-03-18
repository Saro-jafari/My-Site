import Link from 'next/link';
import Image from 'next/image';
import LogoSite from '/public/logo.png';

const Footer = () => {
	return (
		<footer className="pt-40 shadow">
			<div className="w-full max-w-screen-xl p-4 mx-auto md:py-6">
				<nav className="sm:flex sm:items-center sm:justify-between">
					<i className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse w-[120px]">
						<Image src={LogoSite} alt="لوگوی سارو" className="cursor-pointer" />
					</i>
					<ul className="flex flex-wrap items-center gap-6 mb-6 text-sm font-bold text-gray-500 sm:mb-0 dark:text-gray-400">
						<li>
							<Link
								href="https://github.com/Saro-jafari"
								className="hover:underline me-4 md:me-6 text-[30px]"
								aria-label="مشاهده پروژه‌های سارو در GitHub"
								title="پروژه‌های GitHub سارو">
								پروژه ها
							</Link>
						</li>

						<li>
							<Link
								href="https://saro-resume-2004.storage.c2.liara.space/Saro%20jafari%20persian.pdf"
								className="hover:underline me-4 md:me-6 text-[30px]"
								aria-label="بارگیری رزومه سارو"
								title="بارگیری رزومه سارو">
								بارگیری رزومه
							</Link>
						</li>
						<li>
							<Link href="/contact" className="text-[30px]" aria-label="ارتباط با سارو" title="ارتباط با سارو">
								ارتباط با من
							</Link>
						</li>
					</ul>
				</nav>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
					<p className="text-[30px]">© 2024 سارو. تمام حقوق محفوظ است.</p>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
