var fibonacci = function(n){
    if(n == 0){return 0;}
    else if (n == 1){return 1;}
    else{return fibonacci(n-1) + fibonacci(n-2);}
};

var value = "" +  fibonacci(0); //-> 0
value += " " + fibonacci(1); //-> 1
value += " "+ fibonacci(2); //-> 1
value += " "+ fibonacci(3); //-> 2
value += " "+ fibonacci(4); //-> 3
console.log(value);

var gcd = function(a, b){
    if (a == 0){return b;}
    else if (b == 0){return a;}
    else{
	max = Math.max(a, b);
	min = Math.min(a, b);
	return gcd(min, max%min);
    }
}


var value = "" +  gcd(36,6); //-> 6
value += " " + gcd(6,36); //-> 6
value += " "+ gcd(17,5); //-> 1
value += " "+ gcd(200,5); //-> 5
value += " "+ gcd(4, 0); //-> 4
console.log(value);

var names = ["Elmo","Big Bird", "Oscar", "Cookie Monster"];
var randomStudent = function(list){
    var len = list.length;
    return list[Math.floor(len*Math.random())];
}

var value = "" +  randomStudent(names); //-> 6
value += " " + randomStudent(names); //-> 6
console.log(value);
