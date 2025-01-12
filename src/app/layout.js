import './globals.css';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';
import Head from 'next/head';

export const metadata = {
	title: 'سارو جعفری - برنامه نویس وب با تخصص در React و Next.js',
	description: 'پورتفولیو شخصی سارو جعفری، برنامه‌نویس وب متخصص در React و Next.js.',
	keywords:
		'سارو جعفری, برنامه نویس وب, توسعه‌دهنده React, توسعه‌دهنده Next.js, برنامه نویسی فرانت‌اند, جاوا اسکریپت, پورتفولیو, طراحی وب, توسعه اپلیکیشن, آموزش React, وب‌سایت، پروژه‌های وب',
	author: 'سارو جعفری',
	metadataBase: new URL('https://Sarodev.ir'), // اضافه کردن metadataBase
	openGraph: {
		title: 'سارو جعفری - برنامه نویس وب با تخصص در React و Next.js',
		description: 'پورتفولیو شخصی سارو جعفری، برنامه‌نویس وب متخصص در React و Next.js.',
		url: 'https://Sarodev.ir',
		site_name: 'سارو جعفری',
		images: [
			{
				url: '/logo.png',
				alt: 'لوگوی سارو جعفری',
				width: 800,
				height: 600,
			},
		],
	},
	github: {
		url: 'https://github.com/Saro-jafari',
		title: 'گیت‌هاب سارو جعفری - برنامه نویس وب',
		description: 'پورتفولیو پروژه‌ها و کدهای گیت‌هاب سارو جعفری.',
		image: '/logo.png',
	},
	linkedin: {
		url: 'https://www.linkedin.com/in/saro-jafari-30a787243/',
		title: 'لینکدین سارو جعفری - برنامه نویس وب',
		description: 'پروفایل لینکدین سارو جعفری، برنامه‌نویس وب با تجربه در React و Next.js.',
		image: '/logo.png',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="fa" dir="rtl">
			<head>
				<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="robots" content="index, follow" />
				<link rel="icon" href="/logo.png" />
				<Head>
					{/* متا اطلاعات عمومی */}
					<meta name="description" content={metadata.description} />
					<meta name="keywords" content={metadata.keywords} />
					<meta name="author" content={metadata.author} />

					{/* Open Graph */}
					<meta property="og:title" content={metadata.openGraph.title} />
					<meta property="og:description" content={metadata.openGraph.description} />
					<meta property="og:url" content={metadata.openGraph.url} />
					<meta property="og:site_name" content={metadata.openGraph.site_name} />
					<meta property="og:image" content={metadata.openGraph.images[0].url} />
					<meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

					{/* GitHub */}
					<meta property="og:title" content={metadata.github.title} />
					<meta property="og:description" content={metadata.github.description} />
					<meta property="og:image" content={metadata.github.image} />
					<meta property="og:url" content={metadata.github.url} />

					{/* LinkedIn */}
					<meta property="og:title" content={metadata.linkedin.title} />
					<meta property="og:description" content={metadata.linkedin.description} />
					<meta property="og:image" content={metadata.linkedin.image} />
					<meta property="og:url" content={metadata.linkedin.url} />

					{/* Title */}
					<title>{metadata.title}</title>

					{/* Canonical Link */}
					<link rel="canonical" href="https://Sarodev.ir" />
				</Head>
			</head>
			<body className="flex flex-col min-h-screen">
				<NavBar />
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
