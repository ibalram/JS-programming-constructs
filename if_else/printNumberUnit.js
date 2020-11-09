
// print week day
{
    const args = process.argv.slice(2);
    let num = args[0];
    const unit = new Array("None","Unit","Ten", "Hundred", "Thousand", "Ten Thousand", "Lakh", "Ten Lac");
    if (num.length<=7 && num.length>=1)
        console.log(unit[num.length]);
}