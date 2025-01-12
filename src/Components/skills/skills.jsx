import { useEffect, useState } from 'react';

const MySkills = () => {
	const skills = [
		{ value: 20, text: 'PHP' },
		{ value: 30, text: 'C#' },
		{ value: 89, text: 'Sass & Scss' },
		{ value: 90, text: 'Framework CSS' },
		{ value: 50, text: 'Adobe Xd' },
		{ value: 40, text: 'Photoshop' },
		{ value: 95, text: 'jQuery' },
		{ value: 100, text: 'Git & GitHub' },
		{ value: 89, text: 'Redux.js' },
		{ value: 58, text: 'TypeScript' },
		{ value: 90, text: 'Next.js' },
		{ value: 81, text: 'React.js' },
		{ value: 85, text: 'JavaScript' },
		{ value: 93, text: 'CSS' },
		{ value: 95, text: 'HTML' },
	];

	const [animated, setAnimated] = useState(false);

	useEffect(() => {
		const handleScroll = entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setAnimated(true);
				}
			});
		};

		const observer = new IntersectionObserver(handleScroll, {
			threshold: 0.5, // نمایش ۵۰ درصد بخش
		});

		const section = document.querySelector('#skills-section');
		if (section) observer.observe(section);

		return () => observer.disconnect();
	}, []);

	return (
		<div id="skills-section" className="grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
			{skills.map(({ value, text }, index) => (
				<div key={index} className="flex flex-col items-center font-sans">
					<div className="relative w-28 h-28 flex items-center justify-center">
						{/* حلقه دور دایره */}
						<div
							className="absolute w-full h-full rounded-full"
							style={{
								background: animated ? `conic-gradient(#8750F7 ${value}%, #e0e0e0 ${value}%)` : 'conic-gradient(#e0e0e0 100%, #e0e0e0 0%)',
								transition: animated ? 'background 1.5s ease-in-out' : 'none',
							}}></div>
						{/* دایره داخلی برای خالی کردن وسط */}
						<div className="absolute w-24 h-24 bg-gray-900 rounded-full"></div>
						{/* متن درصد */}
						<span className="absolute text-lg font-bold text-white">{`${value}%`}</span>
					</div>
					{/* متن نام مهارت */}
					<span className="mt-4 text-lg text-white font-medium">{text}</span>
				</div>
			))}
		</div>
	);
};

export default MySkills;
