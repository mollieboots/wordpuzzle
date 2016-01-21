//Business Logic

var divisibility = function(numerator, denominator) {
  if (numerator % denominator === 0) {
    return true;
  }
}

var counter = function(numerator, denominator) {
  var resultArray = [];
  for (var result = denominator ; result <= numerator; result += denominator)
    resultArray.push(result);
  return resultArray;
}









// sanitizer removes all non alphanumeric characters from a string using the replace method
// with a regex argument for matching all non alphanumeric characters and replacing them with
// nothing
// var sanitizer = function(string) {
//   var sanitizedString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   return sanitizedString;
// }
//
// var reverseOrder = function(string) {
//   var reversedString = string.split("").reverse().join("");
//   return reversedString
// }
//
// var PalindromeTester = function(string) {
//    var originalString = sanitizer(string)
//    var newString = reverseOrder(originalString)
//    if (originalString === newString) {
//      return true;
//    } else {
//      return false;
//    }
// }

// UI Logic

// $(document).ready(function() {
//   $("form#leap-year").submit(function(event) {
//      var year = parseInt($("input#year").val());
//      var result = leapYear(year);
//
//     $(".year").text(year);
//
// 		if (isNaN(year) || year < 0 ) {
// 			alert("OMG INVALID INPUT");
// 			$(".not").text("not");
// 		}
//     else if (!result) {       // same as writing if (result === false)
//       $(".not").text("not");
// 			$("#result").show();
//     } else {
//       $(".not").text("");
// 			$("#result").show();
//     }
//     event.preventDefault();
//   });
// });
