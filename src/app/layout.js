import './globals.css';
import Footer from '@/Components/Footer/Footer';
import NavBar from '@/Components/NavBar/NavBar';

export const metadata = {
	title: 'Saro Jafari',
	description: 'bio',
};

export default function RootLayout({ children }) {
	return (
		<html lang="fa" dir="rtl">
			<head>
				<link rel="icon" href="/logo.png" />
			</head>
			<body className="flex flex-col min-h-screen">
				<NavBar />
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
