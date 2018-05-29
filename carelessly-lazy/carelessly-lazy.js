function lazyGuy(){
	this.hey=function(text){
		if(text.trim().length==0){
			return "Fine. Be that way!";
		}
		if(text.charAt(text.length-1)=='?'){
			text=text.substring(0,text.length-1);
			if(!(/[a-z]/.test(text))){
				if(!(/[0-9]/.test(text)))
				return "Calm down, I know what I'm doing!";
			}
			return 'Sure.';
		}
		if(text.charAt(text.length-1)=='.' || text.charAt(text.length-1)=='!'){
			text=text.substring(0,text.length-1);
			if(!(/[a-z]/.test(text))){
				return "Whoa, chill out!";
			}	
		}
		if(!(/[a-z ]/.test(text))&& text.length>0){
			return "Whoa, chill out!"
		}
		return "Whatever."
	}
}

module.exports=lazyGuy;