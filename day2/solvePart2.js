const data = require("fs").readFileSync("input.txt","UTF-8").split("\n");
var x =0; y = 0; aim = 0;
function move(cmd) {
	[op, v] = cmd.split(" ");
	if (op == "forward") {
		x += parseInt(v);
		y += (aim * parseInt(v));
	} else if (op == "down") {
		aim += parseInt(v);
	} else if (op == "up") {
		aim -= parseInt(v)
	}
}
data.forEach(op => { move(op) });
console.log("Part 2: " + x*y);
