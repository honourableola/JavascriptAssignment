
function PrintArrayElements (UserInput)
{
    for (var num = 0; num <= UserInput.length-1 ; num++)
    {
        console.log(UserInput[num]);
    }
};

console.log(PrintArrayElements([45,8,0,45,3]));