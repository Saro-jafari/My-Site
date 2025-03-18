'use client';
import { TfiEmail } from 'react-icons/tfi';
import { CiLocationOn, CiMobile3 } from 'react-icons/ci';
import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

interface ContactItem {
	icon: React.ElementType;
	label: string;
	description: string;
	id: string;
}

const ContactMe = () => {
	const items: ContactItem[] = [
		{ icon: CiLocationOn, label: 'موقعیت من:', description: 'Karaj, Iran', id: '500' },
		{ icon: TfiEmail, label: 'ایمیل من:', description: 'Sarojafari2004@gmail.com', id: '501' },
		{ icon: CiMobile3, label: 'تماس من:', description: '09019909546', id: '502' },
	];

	const form = useRef<HTMLFormElement>(null);

	const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			if (form.current) {
				await emailjs.sendForm('service_andd1ga', 'template_qksicnb', form.current, {
					publicKey: '8QPW9A0NjT8p8-8h5',
				});
				toast.success('با موفقیت ارسال شد');
				form.current.reset();
			}
		} catch (error) {
			toast.error('مشکلی در ارسال پیش آمده است ');
		}
	};

	return (
		<>
			<section className="px-4 mx-auto my-20 md:px-8 lg:px-12 max-w-7xl mt-28 f" id="contact">
				<hr className="border-t-2 border-gray-300" />

				<section className="flex flex-col justify-between gap-10 mt-12 lg:flex-row">
					<section className="flex flex-col justify-around w-full gap-6 lg:w-1/2" aria-label="Contact Information">
						{items.map(item => (
							<section key={item.id} className="flex items-start gap-6">
								<item.icon
									className="text-[50px] bg-[#fff] text-[#8750F7] p-4 rounded-2xl transition-all duration-300 hover:text-white hover:bg-[#8750F7] transform hover:scale-125 shadow-md"
									aria-label={item.label}
								/>
								<section>
									<span className="font-bold text-[22px] text-white block mb-1">{item.label}</span>
									<p className="text-white font-sans text-[18px]">{item.description}</p>
								</section>
							</section>
						))}
					</section>

					<section className="w-full lg:w-1/2">
						<form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[20px] font-bold" ref={form} onSubmit={sendEmail}>
							<input
								type="text"
								name="user_name"
								placeholder="نام شما"
								required
								className="p-3 rounded-lg border border-gray-300 focus:ring focus:ring-[#8750F7] focus:outline-none text-black"
								aria-label="نام شما"
							/>
							<input
								type="email"
								name="user_email"
								placeholder="ایمیل شما"
								required
								className="p-3 rounded-lg border border-gray-300 focus:ring focus:ring-[#8750F7] focus:outline-none text-black"
								aria-label="ایمیل شما"
							/>
							<input
								type="text"
								name="subject"
								id="subject"
								placeholder="موضوع"
								required
								className="col-span-1 md:col-span-2 p-3 rounded-lg border border-gray-300 focus:ring focus:ring-[#8750F7] focus:outline-none text-black"
								aria-label="موضوع"
							/>
							<textarea
								name="message"
								rows={5}
								placeholder="پیام شما"
								required
								className="col-span-1 md:col-span-2 p-3 rounded-lg border border-gray-300 focus:ring focus:ring-[#8750F7] focus:outline-none text-black"
								aria-label="پیام شما"
							/>
							<div className="col-span-1 text-center md:col-span-2">
								<button
									type="submit"
									className="bg-[#8750F7] p-4 text-white rounded-xl hover:bg-[#8750F7] transition-all duration-300 shadow-lg">
									ارسال پیام
								</button>
							</div>
						</form>
					</section>
				</section>
			</section>
		</>
	);
};

export default ContactMe;
