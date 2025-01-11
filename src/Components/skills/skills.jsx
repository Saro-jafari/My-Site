import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MySkills = () => (
	<div className="grid gap-6 grid-cols-3 md:grid-cols-6">
		{[
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
		].map(({ value, text }) => (
			<div key={text} className="w-24 flex flex-col items-center font-sans">
				<CircularProgressbar value={value} text={`${value}%`} />
				<span className="mt-2 text-sm text-[#fff]">{text}</span>
			</div>
		))}
	</div>
);

export default MySkills;
