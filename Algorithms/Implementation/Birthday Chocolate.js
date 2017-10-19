process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function solve(n, s, d, m){
    if(s.length < 3) {
        sum = s.reduce( (a, b) => a+b );
        if (sum === d && s.length === m) return s.length;
    }
    
    pieces = 0;
    for( i = 0; i < s.length - 1; i++ ) {
        sum = 0;
        
        for( j = i; j <= i + (m - 1); j++) {            
            sum += s[j];
        }        
        
        if (sum === d) pieces++;
    }    
        
    return pieces;
}

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var d_temp = readLine().split(' ');
    var d = parseInt(d_temp[0]);
    var m = parseInt(d_temp[1]);
    var result = solve(n, s, d, m);
    process.stdout.write(""+result+"\n");

}
