function electionResult( votes ) {

    if ( !Array.isArray(votes) ) {
    
    return "Invalid";
    
    }
    
    let countMangoVote = 0;
    
    let countBananaVote = 0;
    
    for( let vote of votes ){
    
    if ( vote === "mango" ) {
    
    countMangoVote+=1;
    
    }
    
    else if( vote === "banana" ){
    
    countBananaVote+=1;
    
    }
    
    }
    
    if ( countMangoVote > countBananaVote ) {
    
    return "Mango";
    
    }
    
    else if(countBananaVote > countMangoVote){
    
    return "Banana";
    
    }
    
    else if( countMangoVote === countBananaVote ){
    
    return "Draw";
    
    }
    
    
    }

let result1 = electionResult( ["mango","banana","jaker party","nope"]);
console.log(result1);






function calculateWatchTime( times ) {

    if ( !Array.isArray(times)) {
    
    return "Invalid";
    
    }
    
    for( let element of times ){
    
    if ( typeof element !== 'number') {
    
    return "Invalid";
    
    }
    
    }
    
    let totalSec = 0;
    
    for( let sec of times ){
    
    totalSec = totalSec+sec;
    
    }
    
    let hour = parseInt(totalSec/3600);
    
    let hourR = totalSec%3600;
    
    let min = parseInt(hourR/60);
    
    let second = hourR%60;
    
    return { hour: hour, minute: min, second:second, }
    
    }

let result2 = calculateWatchTime([]);
console.log(result2);
