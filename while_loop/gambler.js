
// simulate gamble until zero money or reaches 200
{
    const WIN = 1;
    const LOSE = 0;

    let money = 100;
    let betCount = 0;
    let winCount = 0;
    while (money>0 && money<200){
        betCount++;
        let betResult = Math.floor(Math.random()*10)%2;
        if (betResult==WIN){
            winCount++;
            money++;
        }
        else{
            money--;
        }
    }
    console.log("Total Bets: "+betCount+", Total win: "+winCount);
}