// store all number in the range 1-100 which have 2 digits repeated

{
    let arr = new Array();
    for (let i = 1; i<=9; ++i){
        arr.push(parseInt(i.toString()+i.toString()));
    }
    console.log(arr);
}