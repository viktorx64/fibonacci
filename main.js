console.log("fibonaci");

var i = 1;

var preNum = 0;
var newNum = 1;
var num;

while(i<10) {
	num = (preNum + newNum);
	preNum = newNum;
	newNum = num;
	console.log(num);	
	i++;
}
