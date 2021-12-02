const data = require("fs").readFileSync("input.txt","UTF-8").split("\n");
var x =0; y = 0;
function move(cmd) {
	var op = cmd.split(" ");
	if (op[0] == "forward") {
		x += parseInt(op[1]);
	} else if (op[0] == "down") {
		y += parseInt(op[1]);
	} else if (op[0] == "up") {
		y -= parseInt(op[1])
	}
}
data.forEach(op => {
	move(op)
});
console.log("Part 1: " + x*y);
