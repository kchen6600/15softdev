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

var x = fibonacci(10)