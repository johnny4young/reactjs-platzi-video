
const Formating  = {
	
	
	leftPad(number) {
		const pad = '00';
		return pad.substr(0,pad.length - number.length) + number
	},
	
	formattedTime(secs) {
		const minutes = parseInt(secs/60, 10);
		const seconds = parseInt( secs % 60 );
	
		return `${this.leftPad(minutes.toString())} : ${ this.leftPad(seconds.toString())}`;
	}
	
	
}

export default Formating