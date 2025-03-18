import Head from 'next/head';

const NotFound: React.FC = () => {
	return (
		<>
			<Head>
				<title>صفحه مورد نظر پیدا نشد - سارو جعفری</title>
				<meta name="description" content="صفحه‌ای که به دنبالش بودید یافت نشد. لطفاً صفحه‌ی درست را از طریق منو انتخاب کنید." />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="bg-[#201235] relative overflow-hidden h-screen">
				<div className="inset-0 bg-black opacity-25 absolute"></div>
				<div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
					<div className="w-full font-mono flex flex-col items-center relative z-10">
						<h1 className="font-extrabold text-5xl text-center text-white leading-normal mt-4 font-sahel">
							جای اشتباه! <br /> آدم اشتباه!
						</h1>
						<p className="font-extrabold text-8xl my-44 text-white animate-bounce">404</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default NotFound;
