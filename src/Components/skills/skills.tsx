import { useEffect, useRef, useState } from 'react';

interface Skill {
	value: number;
	text: string;
}

const MySkills = () => {
	const skills: Skill[] = [
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

	const sectionRef = useRef<HTMLDivElement | null>(null); // تعیین نوع ریفرنس
	const [animated, setAnimated] = useState<boolean>(false);
	const [isClient, setIsClient] = useState<boolean>(false);

	// بررسی رندر در کلاینت
	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (!isClient) return;

		const handleScroll = (entries: IntersectionObserverEntry[]) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setAnimated(true);
				}
			});
		};

		const observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
		if (sectionRef.current) observer.observe(sectionRef.current);

		return () => observer.disconnect();
	}, [isClient]);

	if (!isClient) return null;

	return (
		<div ref={sectionRef} id="skills-section" className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
			<h2 className="sr-only">مهارت‌های من</h2> {/* این تگ برای بهبود دسترسی است */}
			{skills.map(({ value, text }, index) => (
				<div
					key={index}
					className="flex flex-col items-center font-sans"
					role="progressbar"
					aria-label={`${text} مهارت`}
					aria-valuenow={value}
					aria-valuemin={0}
					aria-valuemax={100}>
					<div className="relative flex items-center justify-center w-28 h-28">
						<div
							className={`absolute w-full h-full rounded-full ${animated ? '' : 'bg-gray-300'}`}
							style={{
								background: animated ? `conic-gradient(#8750F7 ${value}%, #e0e0e0 ${value}%)` : 'conic-gradient(#e0e0e0 100%, #e0e0e0 0%)',
								transition: 'background 1.5s ease-in-out',
							}}></div>

						<div className="absolute w-24 h-24 bg-gray-900 rounded-full"></div>

						<span className="absolute text-lg font-bold text-white">{`${value}%`}</span>
					</div>

					<span className="mt-4 text-lg font-medium text-white">{text}</span>
				</div>
			))}
		</div>
	);
};

export default MySkills;
