describe('divisibility', function() {
	it("test divisibility of the two inputs", function() {
		expect(divisibility(30,5)).to.equal(true);
	});
});

describe('counter', function() {
	it("start at result = 0, increment by value of denominator until result = value of numerator", function() {
		expect(counter(30,5)).to.eql([5,10,15,20,25,30]);
	});
	it("start at result = 0, increment by value of denominator until result = value of numerator", function() {
		expect(counter(10,2)).to.eql([2,4,6,8,10]);
	});
});



// describe ('sanitizer', function() {
// 	it("remove all non alphanumeric characters from input string", function() {
// 		expect(sanitizer("Hello, Mike! Nice to meet you.")).to.equal("hellomikenicetomeetyou");
// 	});
// });
//
// describe ('reverseOrder', function() {
// 	it("reverse the order of a string", function() {
// 		expect(reverseOrder("123456789")).to.equal("987654321");
// 	});
// });
//
// describe ('PalindromeTester', function() {
// 	it("Compare string to reversed version of string. If they are equal return true, else return false", function() {
// 		expect(PalindromeTester("A dog, a plan, a canal: pagoda.")).to.equal(true);
// 	});
// });

//
// 	it ("is true for years divisible by 4", function() {
// 		expect(leapYear(2004)).to.equal(true);
// 	});
//
// 	it ("is false for years divisible by 100", function() {
// 		expect (leapYear(1900)).to.equal(false);
// 	});
//
// 	it ("is true for years divisible by 400", function() {
// 		expect (leapYear(2000)).to.equal(true);
// 	});
//
// 	it ("is false for blank input", function() {
// 		expect (leapYear(NaN)).to.equal(false);
// 	});
//
// 	it ("is false for negavtive integers", function() {
// 		expect (leapYear(-400)).to.equal(false);
// 	});
// });
