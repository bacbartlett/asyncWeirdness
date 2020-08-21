const fetch = require("node-fetch");




 function main(){
    first();
    second();
    third();
    fourth();
}


function first(){
    console.log("I am first")
}

async function second(){
    console.log("I am second");
    let fromFetch;
    try{
        fromFetch = await fetching();
    }catch(error){
        console.log(error)
    }
    console.log('at the bottom of second');
    console.log("what from fetch is defined as at the bottom of the second ", fromFetch)
}


function third(){
    console.log("I am third")
}

async function fourth(){
    console.log("Starting the fourth")
    let fromFetch = await fetching2();
    console.log('End of fourth')
}


function fetching(){
    fetch("http://localhost:3000/five").then(data=> console.log("I am printing within the fetch function.", data.url))
}

function fetching2(){
    return fetch("http://localhost:3000/three").then(data=> console.log("I am printing within the fetch2 function.", data.url));
}


main();