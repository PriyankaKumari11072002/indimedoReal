export function convertDateFormat(dateTimeString) {
	if (dateTimeString === '') {
		return '';
	}
	const targetFormat = localStorage.getItem('DATE_FORMAT');
	const date = new Date(dateTimeString);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	const shortYear = String(year).slice(-2);
	if (targetFormat?.toUpperCase() === 'YYYY-MM-DD') {
		return `${year}-${month}-${day}`;
	} else if (targetFormat?.toUpperCase() === 'DD/MM/YYYY') {
		return `${day}/${month}/${year}`;
	} else if (targetFormat?.toUpperCase() === 'MM/DD/YYYY') {
		return `${month}/${day}/${year}`;
	} else if (targetFormat?.toUpperCase() === 'DD/MM/YY') {
		return `${day}/${month}/${shortYear}`;
	} else if (targetFormat?.toUpperCase() === 'YYYY/MM/DD') {
		return `${year}/${month}/${day}`;
	} else {
		return 'Invalid target format';
	}
}