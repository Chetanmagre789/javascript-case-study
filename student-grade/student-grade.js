function School(){
    this.class={};

    this.roster=function(){
        var keys = Object.keys(this.class);
    if (keys.length > 0) {
        keys.forEach(function(key) {
            this.class[key].sort();
        }, this);
    }   
    return this.class;
    };

    this.add=function(studentName,studentGrade){
        if (this.class[studentGrade]) {
        this.class[studentGrade].push(studentName);
    } else {
        this.class[studentGrade] = [studentName];
    }
    };

    this.grade=function(grade){
        if(this.class[grade]) {
        return this.class[grade].sort();
    }
    return [];
    };
}
module.exports=School;