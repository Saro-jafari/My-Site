import AboutMe from '@/Components/about/about';

const AboutPage = () => {
	return <AboutMe />;
};
export function generateMetadata({ params }) {
	return {
		title: 'درباره سارو',
		description: 'آشنایی با سارو و مهارت‌های توسعه وب',
		keywords: 'درباره سارو, توسعه‌دهنده وب, سارو',
		openGraph: {
			title: 'درباره سارو',
			description: 'آشنایی با سارو و مهارت‌های توسعه وب',
			url: 'https://Sarodev.ir/about',
			site_name: 'سارو',
		},
	};
}
export default AboutPage;
