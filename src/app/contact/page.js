import ContactMe from '@/Components/contact/ContactMe';
import React from 'react';

const Contact = () => {
	return <ContactMe />;
};
export function generateMetadata() {
	return {
		title: 'تماس با سارو',
		description: 'برای تماس با سارو، توسعه‌دهنده وب، از این فرم استفاده کنید.',
		keywords: 'تماس با سارو, توسعه‌دهنده وب, ایمیل, شماره تماس',
		author: 'سارو',
		openGraph: {
			title: 'تماس با سارو',
			description: 'برای تماس با سارو، توسعه‌دهنده وب، از این فرم استفاده کنید.',
			url: 'https://Sarodev.ir/contact',
		},
		twitter: {
			title: 'تماس با سارو',
			description: 'برای تماس با سارو، توسعه‌دهنده وب، از این فرم استفاده کنید.',
			url: 'https://Sarodev.ir/contact',
		},
	};
}
export default Contact;
