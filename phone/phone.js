function phone(inputnumber){
	this.number=function(){
		number = inputnumber.replace(/[^0-9]+/g,"");
		if(number.length>10 || number.length<10){
			if(number.length==11 && number.charAt(0)==1){
					return number=number.slice(1);
			}

			return null;
		}
		return number;
	}
}

module.exports=phone;