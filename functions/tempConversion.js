
// function to temperature conversion
{
    function degFToDegC(x){
        return (x-32)*5/9;
    }
    function degCToDegF(x){
        return (x*9/5) + 32;
    }

    const args = process.argv.slice(2);
    let temp = parseInt(args[0]);
    let unit = args[1];

    switch(unit){
        case "degC":
            if (temp>=0 && temp<=100) console.log(degCToDegF(temp)+" degF");
            else console.log("invalid temperature");
            break;
        case "degF":
            if (temp>=32 && temp<=212) console.log(degFToDegC(temp)+" degC");
            else console.log("invalid temperature");
            break;
        default:
            console.log("invalid temperature unit");
    }
}