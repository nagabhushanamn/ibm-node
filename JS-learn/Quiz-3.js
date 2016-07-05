function Person(name, age) {
	this.name = name;
	this.age = age;

	var self = this;

	setInterval(function() {
		self.age++;
		console.log(self.name + "-->" + self.age);
	}, 5000);

}

var p = new Person('Ria', 0);