import './globals.css';
import Footer from '@/Components/Footer/Footer';
import NavBar from '@/Components/NavBar/NavBar';
import { metadata } from '@/metadata';
import Head from 'next/head';

export default function RootLayout({ children }) {
	return (
		<html lang="fa" dir="rtl">
			<Head>
				<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="robots" content="index, follow" />
				<meta name="description" content={metadata.description} />
				<meta name="keywords" content={metadata.keywords} />
				<meta name="author" content={metadata.author} />
				<title>{metadata.title}</title>
				<link rel="icon" href="/logo.png" />
			</Head>
			<body className="flex flex-col min-h-screen">
				<NavBar />
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
