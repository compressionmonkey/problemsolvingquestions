// my solution 
// const arr = [[11,2,4],[4,5,6],[10,8,-12]]
// let sum1 = 0
// let sum2 = 0
// arr.map((row, rowindex) => {
//     row.map((column, columnindex) => {
//         if(column == row[rowindex]) sum1 += column
//         if(column == row[2- rowindex]) sum2 += column
//     })
// })
// const finalSum = Math.abs(sum1 - sum2)
// console.log(finalSum)

// others solution
function processData(input) {
    var lines = input.split("\n");
    var N = parseInt(lines[0]);
    var t = 0;
    for(i = 1; i <= N; i++) {
        var line = lines[i].split(" ");
        console.log(t)
        t += parseInt(line[i - 1]) - parseInt(line[N - i]);
    }
    return Math.abs(t)
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});