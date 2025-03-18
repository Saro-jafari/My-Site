import HomePage from '../Components/Home/HomePage';

// Define the props type for the generateMetadata function
interface GenerateMetadataParams {
	params: Record<string, string | undefined>;
}

export default function Home() {
	return (
		<>
			<HomePage />
		</>
	);
}

// Define the return type for generateMetadata
export function generateMetadata({ params }: GenerateMetadataParams) {
	return {
		title: 'سارو - فرانت‌اند',
		description: 'برنامه‌نویس فرانت‌اند.',
		keywords: 'سارو, فرانت‌اند, توسعه وب',
		author: 'سارو',
		metadataBase: new URL('https://Sarodev.ir'),
		openGraph: {
			title: 'سارو - فرانت‌اند',
			description: 'برنامه‌نویس فرانت‌اند.',
			url: 'https://Sarodev.ir',
			site_name: 'سارو',
			images: [
				{
					url: '/logo.png',
					alt: 'لوگوی سارو',
					width: 800,
					height: 600,
				},
			],
		},
		github: {
			url: 'https://github.com/Saro-jafari',
			title: 'گیت‌هاب سارو',
			description: 'کدها و پروژه‌ها.',
			image: '/logo.png',
		},
		linkedin: {
			url: 'https://www.linkedin.com/in/saro-jafari-30a787243/',
			title: 'لینکدین سارو',
			description: 'پروفایل لینکدین.',
			image: '/logo.png',
		},
	};
}
