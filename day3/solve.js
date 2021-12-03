const data = require("fs").readFileSync("input.txt","UTF-8").split("\n");

function part1() {
	var count = get_poscount(data);
	var eps = ""; gam = "";
	for (var i = 0; i < data[0].length; i++) {
		eps = (count[`${i}-0`] < count[`${i}-1`]) ? eps+"0" : eps+"1"
		gam = (count[`${i}-0`] < count[`${i}-1`]) ? gam+"1" : gam+"0"
	}
	return parseInt(eps,2) * parseInt(gam,2);
}

function part2(element) {
	var output = data
	for (var i = 0; i < data[0].length; i++) {
		count = get_poscount(output)
		if ( (element == "o2" && count[`${i}-0`] <= count[`${i}-1`]) || (element == "co2" && count[`${i}-0`] > count[`${i}-1`]) ) {
			output = output.filter(t => t[i] == 1)
		} else {
			output = output.filter(t => t[i] == 0)
		}
		if (output.length == 1) { break }
	}
	return parseInt(output[0],2);
}

function get_poscount(dataset) {
	var count = [];
	dataset.forEach((n,i) => {
		for (var j = 0; j < n.length; j++) {
			count[`${j}-${n[j]}`] = (count[`${j}-${n[j]}`] > 0) ? count[`${j}-${n[j]}`]+1 : 1
		}
	});
	return count;
}

console.log('Part 1: ' + part1())
console.log('Part 2: ' + part2("o2") * part2("co2"))
