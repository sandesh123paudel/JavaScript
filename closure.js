//closure =>  A function defined inside of another function, 
//            the innner function has access ot the variables 
//                 and scope of the outer function. 
//              Allow fro private variables and state maintenance 
//             Used frequently in JS framework: React, Vue, Angular



// function outer()
// {
//     let message="Hello";

//     function inner(){
//         console.log(message);
//     }

//     inner();
// }
// outer();





// function creatCounter(){

//     let count=0;
//     function increment(){
//         count++;
//         console.log(`Count increased to ${count} `);
//     }

//     function getCount(){
//         return count;
//     }

//     return {increment,getCount};
// }

// const counter=creatCounter();

// counter.increment();
// counter.increment();
// counter.increment();


// console.log(`The current count is ${counter.getCount()}`);

function createGame(){

    let score=0;

    function increaseScore(points){
        score+=points;
        console.log(`+${points}pts`);
    }

    function decreaeScore(points){
        score -=points;
        console.log(`-${points}pts`);
    }

    function getScore(points){
    return score;
    }

    return{increaseScore,decreaeScore,getScore}
}

// increaseScore(5);
// increaseScore(10);
// decreaeScore(10);
// console.log(getScore());

const game= createGame();
game.increaseScore(5);
game.increaseScore(10);
game.decreaeScore(10);
console.log(game.getScore());
