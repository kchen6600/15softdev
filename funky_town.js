//should be var fib = function(n){
//fib(10)

function fibonacci (n){
    
    var start = 0;
    var next = 1;
    var k;
    
    while (n >= 0){
	k = next;
	next = next +start;
	start = k;
	n = n-1;
    }
    
    return start;
    
}

var y = fibonacci(10)

function gcd( n, d )
{
    var a, b, x;

    a = n;
    b = d;

    while( a % b != 0 ) {
	x = a;
	a = b;
	b = x % b;
    }

    return b;
}

var anotha = gcd(10, 15);

function randomStudent()
{
    students = ["Karen", "Connie", "Clive", "Sasha", "Manahal", "Ryan", "Alex", "George", "Bob", "Amelia", "Fred", "Hermione"]
    var pos = Math.floor(Math.random() * students.length);
    return students[pos];
}
var hi = randomStudent();
