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

function getRecord(s){
    let highest = [],
        lowest  = [],
        highest_breaked = 0,
        lowest_breaked = 0;
    
    
    for (var i = 0; i < s.length; i++) {
        let element = s[i];

        if( i === 0 ) {
            lowest.push(element);
            highest.push(element);
            continue;
        }

        if(element > s[i - 1]) {
            if( highest.length && element > highest[highest.length - 1]) {
                highest.push(element);
                highest_breaked++;
            } 
            if(!highest.length) {
                highest.push(element);
                highest_breaked++;
            }
        }

        if(element < s[i - 1]) {
            if( lowest.length && element < lowest[lowest.length - 1]) {
                lowest.push(element);
                lowest_breaked++;
            }
            if(!lowest.length) {
                lowest.push(element);
                lowest_breaked++;
            }
        }
    }

    return [highest_breaked, lowest_breaked];
}

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var result = getRecord(s);
    console.log(result.join(" "));

}
