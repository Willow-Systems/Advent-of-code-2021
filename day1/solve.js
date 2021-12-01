const data = require("fs").readFileSync("input.txt","UTF-8").split("\n").map(x => parseInt(x)); 
out = 0; p = 0; w = 0;

function part1() {
	for (var i=0; i < data.length; i++) {
		if (i > 0 && data[i] > data[i-1]) {
			out++;
		}
	}
	console.log("p1: " + out);
}

function part2() {
	out=0;
	for (var i=2; i < data.length; i++) {
		p=w;
		w=data[i] + data[i-1] + data[i-2];
		out = (i > 2 && w > p) ? out+1 : out
	}
	console.log("p2: " + out);
}

part1()
part2()
