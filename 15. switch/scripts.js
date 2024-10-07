// switch = efficient replacement for too many if else if and else statements

let day = Number(window.prompt(`Enter the day number of the week: `))

switch(day%7){
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Sunday");
        break;
    case 3:
        console.log("Monday");
        break;
    case 4:
        console.log("Tuesday");
        break;
    case 5:
        console.log("Wednesday");
        break;
    case 6:
        console.log(`Thursday`);
        break;
    case 7:
        console.log(`Friday`);
        break;
}
