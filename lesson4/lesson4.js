/*** so if a variable declared with var and it is outside a scope we can apply this variable inside the scope but if this variable declare using let we cant apply it outside the scope** */

{
    var x = 10;
    let y = 10;
}

// x can  be used here
// y can not be used here we can use it just outside the scope


console.log(`x here--> ${x}`);
console.log( `y here--> ${y}`);

/*********Redeclare a variable********** */
// with 'var' we can redeclare a variable


var x = 10;
var x = 20;

// with 'let' we cant redeclare a variable

// let y = 10;
// let y = 20;