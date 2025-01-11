const NotFound = () => {
	return (
		<div class="bg-[#201235] relative overflow-hidden h-screen">
			        <div class="inset-0 bg-black opacity-25 absolute">    </div>   {' '}
			<div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
				       {' '}
				<div class="w-full font-mono flex flex-col items-center relative z-10">
					           {' '}
					<h1 class="font-extrabold text-5xl text-center text-white leading-normal mt-4 font-sahel">
						  جای اشتباه! <br /> آدم اشتباه!          {' '}
					</h1>
					            <p class="font-extrabold text-8xl my-44 text-white animate-bounce">                404             </p>       {' '}
				</div>
				   {' '}
			</div>
		</div>
	);
};

export default NotFound;
