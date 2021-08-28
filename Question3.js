function CheckPrime (UserInput){
    if (UserInput == 0 || UserInput == 1)
    {
        console.log(`${UserInput} is NOT a prime number`);
    }
    else
    {
        for (var a = 2; a <= UserInput/2; a++)
        {
            if (UserInput%a == 0)
            {
                console.log(`${UserInput} is NOT a prime number`);
                return;
            }
        }
        console.log(`${UserInput} is a prime number`);
    }
};
CheckPrime(121);