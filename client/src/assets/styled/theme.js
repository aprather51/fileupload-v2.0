// Theme colors
const colors = {
	primary: '#333',
	secondary: '#f4f4f4',

	/* Text Color */
	txtPrimary: '#4a4a4a',
	txtSecondary: '#7d7d7d',

	/*Basic Color */
	blk: '#222',
	wht: '#f3f3f3',

	/* Link Color */
	link: '#1e90ff'
};

// @media
const breakpoints = {
	xs: '320px', //320px — small mobile screen
	mobile: '600px', // 600px — Minimum mobile screen
	tablet: '768px', // 768px
	desktop: '1000px', // 1000px — Minimun desktop screen
	lg: '1280px' //1280px — full desktop screen
};

// import/export
const theme = {
	breakpoints,
	colors
};

export default theme;
