var person = {
    firstname : 'Default',
    lastname : 'Default',
    getfullname : function(){
        console.log('Who Am I -> ', this);
        console.log(this.firstname + ' ' + this.lastname);
    }
}

var hemant = {
    firstname : 'Hemant',
    lastname : 'Kumar',
}

hemant.__proto__ = person

hemant.getfullname();


var john = {
    firstname: 'John'
}

john.__proto__ = person

john.getfullname(); // John default