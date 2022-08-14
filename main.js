var clicks = 0;
var gen1bought = 0;
var gen2bought = 0;
var gen3bought = 0;
var gen1 = 0;
var gen2 = 0;
var gen3 = 0;
var gen1cost = 100;
var gen2cost = 1000;
var gen3cost = 10000;

function clicked(){
   clicks += 1;
}

function updatecount(){
    setInterval(() => {
        document.querySelector("#clicks").innerHTML = "Clicks: "+clicks;
        document.querySelector("#gen1").innerHTML = "Tier 1 Generator: "+gen1+" {"+gen1bought+"} <br> Cost: "+Math.round(gen1cost)+" Clicks"
        document.querySelector("#gen2").innerHTML = "Tier 2 Generator: "+gen2+" {"+gen2bought+"} <br> Cost: "+Math.round(gen2cost)+" Clicks"
        document.querySelector("#gen3").innerHTML = "Tier 3 Generator: "+gen3+" {"+gen3bought+"} <br> Cost: "+Math.round(gen3cost)+" Clicks"
        document.querySelector("#cps").innerHTML = "Clicks Per Second: "+(gen1+gen1bought);
    }, 10);
    setInterval(() => {
        clicks += gen1bought+gen1;
        gen1 += gen2+gen2bought;
        gen2 += gen3+gen3bought;
    }, 1000);
}

function buygen(){
    if(clicks >= gen1cost){
        gen1bought += 1;
        clicks -= gen1cost;
        gen1cost *= 1.2;
    }
}

function buygen2(){
    if(clicks >= gen2cost){
        gen2bought += 1;
        clicks -= gen2cost;
        gen2cost *= 1.5;
    }
}

function buygen3(){
    if(clicks >= gen3cost){
        gen3bought += 1;
        clicks -= gen3cost;
        gen3cost *= 2.3;
    }
}