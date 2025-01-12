/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {}, // اضافه کردن autoprefixer برای اطمینان از سازگاری با مرورگرهای مختلف
	},
};

export default config;
