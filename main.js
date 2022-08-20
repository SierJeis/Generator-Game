var clicks = 0;
var gen1bought = 0;
var gen2bought = 0;
var gen3bought = 0;
var gen4bought = 0;
var gen1 = 0;
var gen2 = 0;
var gen3 = 0;
var gen4 = 0;
var gen1cost = 10;
var gen2cost = 100;
var gen3cost = 1000;
var gen4cost = 10000;
var tickspeed = 1000;
var tickspeedcost = 100;
var myInterval = setInterval(mytimer, tickspeed);
const formatter = new Intl.NumberFormat('en', {
    notation: 'compact'
});

function clicked(){
   clicks += 1;
}

function updatecount(){
    setInterval(() => {
        document.querySelector("#clicks").innerHTML = "Clicks: "+formatter.format(clicks);
        document.querySelector("#gen1").innerHTML = "Tier 1 Generator: "+formatter.format(gen1)+" {"+formatter.format(gen1bought)+"} <br> Cost: "+formatter.format(gen1cost);+" Clicks"
        document.querySelector("#gen2").innerHTML = "Tier 2 Generator: "+formatter.format(gen2)+" {"+formatter.format(gen2bought)+"} <br> Cost: "+formatter.format(gen2cost);+" Clicks"
        document.querySelector("#gen3").innerHTML = "Tier 3 Generator: "+formatter.format(gen3)+" {"+formatter.format(gen3bought)+"} <br> Cost: "+formatter.format(gen3cost);+" Clicks"
        document.querySelector("#gen4").innerHTML = "Tier 4 Generator: "+formatter.format(gen4)+" {"+formatter.format(gen4bought)+"} <br> Cost: "+formatter.format(gen4cost);+" Clicks"
        document.querySelector("#cps").innerHTML = "Clicks Per Tick: "+formatter.format((gen1+gen1bought));
        document.querySelector("#tickspeed").innerHTML = "Upgrade Tickspeed <br> Cost: "+formatter.format(tickspeedcost)+"<br> Tickspeed: "+Math.round(tickspeed);
    }, 10);
}

function upgrade(){
    if(clicks >= tickspeedcost){
        clearInterval(myInterval);
        clicks -= tickspeedcost;
        tickspeed /= 1.2;
        tickspeedcost *= 3;
        myInterval = setInterval(mytimer, tickspeed);
    }
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

function buygen4(){
    if(clicks >= gen4cost){
        gen4bought += 1;
        clicks -= gen4cost;
        gen4cost *= 2.9;
    }
}

function mytimer(){
    clicks += gen1bought+gen1;
    gen1 += gen2+gen2bought;
    gen2 += gen3+gen3bought;
    gen3 += gen4+gen4bought;
}