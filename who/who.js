function who () {
//    this.name = function (input){
//         if(input==undefined)
//            return "One for you, one for me.";
//         else
//            return "One for "+input+", one for me."
//    }
}

who.prototype.name=function(input){
     if(input==undefined)
            return "One for you, one for me.";
         else
            return "One for "+input+", one for me."
}
module.exports=who;