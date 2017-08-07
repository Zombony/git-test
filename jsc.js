function btn(){
	var a = +(document.getElementById('Fact').value);
	var sum = 0;
	var i=1;
	while ( a > 9 ){
		i++;
		a /= 10;
	}
	alert(i);


	document.getElementById('show').value = sum;
}