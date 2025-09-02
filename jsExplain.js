let arr = [1, 2, 3, 4, 5, 6, 7, 8, 2, 5];
/* 
    Challenge: 
    find the Duplicate
    bring the Expected Output: 2, 5 
*/


for (let i=0; i < arr.length; i++) {
    // console.log(arr[i]);
    console.log();

    for (let x=0; x < arr.length; x++) {

        if (i !== x      &&         x > i - 1        &&     arr[i] === arr[x]) {
            console.log(`i = ${i} Value: ${arr[i]},           j = ${x} Value: ${arr[x]}`);
        }
    }
}


/*
    Challenge:
    reverse the variable value h
*/
const h = `Hello World!`;

// With Built-in method
const splitH = h.split("");
const reverse = splitH.reverse();
console.log(`With Built-in method:`,reverse.join(""));


// WithOut Built-in method
let reverseHere = [];

const n = h.length - 1;
for (let i=n; i >= 0; i--) {
    reverseHere.push(h[i]);
} 
console.log(`With-Out using .split`, reverse);
console.log(`WithOut Built-in method:`, reverseHere.join(''));


const arrNum = [5, 6, 7, 5, 8, 4, 2, 6];

// find the DuplicateinaArray
function findDuplicate(arr) {
    const result = [];

    for (let i=0; i<arr.length; i++) {
        // console.log(); // add new line every compete iteration of i
        for (let j=i+1; j<arr.length; j++) {
            // console.log(`i = ${i} Value: ${arr[i]},           j = ${j} Value: ${arr[j]}`);

            if (arr[i] == arr[j]) {
                // console.log(arr[i]);
                result.push(arr[i]);
            }
        }
    }
    return result;
}

console.log(findDuplicate(arrNum));  //[5, 6]
// console.log(findDuplicate(arrNum).join(' ')); // 5 6


const arrs = ["a", "b", 18, "d", 100, 10];
// console.log(arrs); // OP: [ 'a', 'b', 18, 'd', 100, 10 ]

// function that separate an elements of char of one array & numbers elements of different array 


function separateString_Number(array) {
    const arrNum = array.filter(item => typeof item !== 'string');
    const arrChar = array.filter(item => typeof item === 'string');

    console.log('Array Number:', arrNum);
    console.log('Array Char:', arrChar);

    // const arrNum = [];
    // const arrchar = [];

    // array.filter(arr => {
    //     if (typeof arr !== 'string') {
    //         arrNum.push(arr);
    //     } else {
    //         arrchar.push(arr);
    //     }
    // });
    // console.log('Array Number:', arrNum);
    // console.log('Array char:', arrchar);
}

// console.log(arrs.filter(arr => {
//     return typeof arr !== 'string';
// }));

// const arrJoin = arrs.join();
// const arrSplit = arrJoin.split(","); // [ 'a', 'b', '18', 'd', '100', '10' ] 
// console.log(arrSplit);

separateString_Number(arrs);



const column = 7;
const row = 5;
let z = 1;

const space = " ";
const symbol = '*';

console.log(space.repeat(5), symbol);
console.log(space.repeat(3), symbol.repeat(3).split('').join(' '));
console.log(space.repeat(2), symbol.repeat(4).split('').join(' '));
console.log(space.repeat(1), symbol.repeat(5).split('').join(' '));
console.log(space.repeat(0), symbol.repeat(6).split('').join(' '));
console.log( symbol.repeat(7).split('').join(' '));

for (let i = 0; i < row; i++) {
    // you can use j < i+1
    for (let j = 0; j < z; j++) {
        
        // console.log(`i = ${i}    z = ${z}      j = ${j}`);
        if (z < column) {
            process.stdout.write('* ');
        }
    }
    z = z + 1;
    console.log();
}

// create star in Terminal using for nested for-loop
const thisColumn = 9;
const thisRow = 7;
const dividedColumn = thisColumn / 2;
console.log(dividedColumn);

for (let i = 0; i < thisRow; i++) {
    console.log();

    for (let j = 0; j < thisColumn; j++) {
        
        if (j > dividedColumn) {
            // console.log(`i = ${i}       j = ${j}`);
        } else {
            // process.stdout.write('* ');
        }
        // process.stdout.write('* ');
    }
}

function printTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log(' '.repeat(rows - i) + '*'.repeat(i));
    }
}

printTriangle(5);


const name = 'Gabriel llacuna';
console.log(name.length);