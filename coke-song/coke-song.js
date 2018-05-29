function CokeSong() {
	this.verse=function(verseLine){
	 if(verseLine==0){
	 	return "No more cans of coke in the box, no more cans of coke.\nGo to the store and buy some more, 99 cans of coke in the box.\n";
	 }else{
	 	if(verseLine==1){
	 	return '1 can of coke in the box, 1 can of coke.\nTake it down and pass it around, no more cans of coke in the box.\n';
	 	}
	 	if(verseLine==2){
	 		return '2 cans of coke in the box, 2 cans of coke.\nTake one down and pass it around, 1 can of coke in the box.\n';
	 	}
	 	return verseLine+' cans of coke in the box, '+verseLine+' cans of coke.\nTake one down and pass it around, '+(verseLine-1)+' cans of coke in the box.\n';
	 }
	}

	this.sing=function(startLines,endLine){
		if(endLine==undefined || (startLines==undefined && endline==undefined)){
			endLine=0;
			startLines 99;
		}
		var song='';
		for(var i=startLines;i>=endLine;i--){
			if(i!=endLine)
			song=song+this.verse(i)+'\n'
			else
			song=song+this.verse(i)			
		}
		console.log(song);
		return song;
	}
}

module.exports=CokeSong;