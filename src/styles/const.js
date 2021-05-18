const accentColor = '#6D3AE7';
const accentLightColor = '#926CED';
const accentDarkColor = '#3F16A2';

const statusColors = {
	error: '#E4446D',
	ok: '#8ADD9C',
};
const textColors = {
	primary: '#434343',
};
const backgroundColors = {
	white: '#FFFFFF',
};

const colors = {
	accent: accentColor,
	accentLight: accentLightColor,
	accentDarkColor: accentDarkColor,
};

const colorsArray = (colorList, prefix) =>
	Object.keys(colorList).forEach((color) => {
		colors[`${prefix}_${color}`] = colorList[color];
});

colorsArray(statusColors, "status");
colorsArray(textColors, "text");
colorsArray(backgroundColors, "bg");

export default colors;