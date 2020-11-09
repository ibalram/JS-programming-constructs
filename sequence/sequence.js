// random digit
{
    let digit = Math.floor(Math.random()*10);
    console.log("random digit: "+digit);
}

// random dice number
{
    let num = (Math.floor(Math.random() * 10) % 6) + 1;
    console.log("random dice number: " + num);
}

// Add two random dice number

{    
    let first = (Math.floor(Math.random() * 10) % 6) + 1;
    let second = (Math.floor(Math.random() * 10) % 6) + 1;
    console.log("Sum of two random dice numbers: " + (first + second));
}

// Read 5 numbers and find sum and average
{   
    let args = process.argv; 
    let arr = args.slice(2);  // first two are "node" and "fileName"
    let sum = 0;
    for(let i = 0; i<arr.length; ++i){
        sum+=parseInt(arr[i]);
    }
    console.log("sum: " + sum + ", average: " + sum / 5);
}

// unit conversion
{
    // a.
    const FEET_INCH = 12;
    console.log("42 inches: "+ (42/FEET_INCH)+" ft");

    // b.
    const FEET_METER = 0.3048;
    let areaOfPlot = (60*FEET_METER)*(40*FEET_METER);
    console.log("Area of plot : "+ areaOfPlot + " square meter");

    //c. 
    const ACRE_SQUAREMETER = 4046.86;
    console.log("Area of 25 plots : "+ 25*areaOfPlot/ACRE_SQUAREMETER + " acre");
}
