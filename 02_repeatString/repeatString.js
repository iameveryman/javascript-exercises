const repeatString = function(string, number) {
    let repeatedStr = ''; //set variable to contain output
    if (number < 0){ 
        return 'ERROR';
    } //condition to weed out negative numbers
    for (let i = 0; i < number; i++){
        repeatedStr += string;
    }
    return repeatedStr;
};

repeatString('hey', 3); //test 1
repeatString('hello', 10); //test 2
repeatString('hi', 1); //test 3
repeatString('bye', 0); //test 4
repeatString('goodby', -1);  //test 5
repeatString('odin', ); //test 6
repeatString('', 10); //test 7

// Do not edit below this line
module.exports = repeatString;
