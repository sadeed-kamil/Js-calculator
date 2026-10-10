let opt  = `y`;

while(opt == `y`|| opt == `Y`){
    let num1 = parseInt(prompt("Enter first no 01: "));
    let num2 = parseInt(prompt("Enter first no 02: "));
    let char  = prompt("Select one; +, -, *, /: ");
      switch(char){
    case `+`:
        console.log("Addition: ", num1 + num2);
    break;
    case `-`:
        console.log("Subtraction: ", num1 - num2);
    break;
    case `*`:
        console.log("Multiplication: ", num1 * num2);
    break;
    case `/`:
        console.log("Divide: ", num1 / num2);
    break;
    default:
        console.log("invalid key !");
}
    opt = prompt("Do you want to continue ? (y/n)")
}