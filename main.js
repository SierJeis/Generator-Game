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
var gen1multi = 1;
var gen2multi = 1;
var gen3multi = 1;
var gen4multi = 1;
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
        document.querySelector("#gen1").innerHTML = "Tier 1 Generator: "+formatter.format(gen1)+" {"+formatter.format(gen1bought)+"} ×"+gen1multi+"<br> Cost: "+formatter.format(gen1cost);+" Clicks";
        document.querySelector("#gen2").innerHTML = "Tier 2 Generator: "+formatter.format(gen2)+" {"+formatter.format(gen2bought)+"} ×"+gen2multi+"<br> Cost: "+formatter.format(gen2cost);+" Clicks";
        document.querySelector("#gen3").innerHTML = "Tier 3 Generator: "+formatter.format(gen3)+" {"+formatter.format(gen3bought)+"} ×"+gen3multi+"<br> Cost: "+formatter.format(gen3cost);+" Clicks";
        document.querySelector("#gen4").innerHTML = "Tier 4 Generator: "+formatter.format(gen4)+" {"+formatter.format(gen4bought)+"} ×"+gen4multi+"<br> Cost: "+formatter.format(gen4cost);+" Clicks";
        document.querySelector("#cps").innerHTML = "Clicks Per Tick: "+formatter.format((gen1*gen1multi));
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
        gen1 += 1;
        clicks -= gen1cost;
    }
    if(gen1bought >= 10){
        gen1bought = 0;
        gen1multi *= 2;
        gen1cost *= 10;
    }
}

function buygen2(){
    if(clicks >= gen2cost){
        gen2bought += 1;
        gen2 += 1;
        clicks -= gen2cost;
    }
    if(gen2bought >= 10){
        gen2bought = 0;
        gen2multi *= 2;
        gen2cost *= 10;
    }
}

function buygen3(){
    if(clicks >= gen3cost){
        gen3bought += 1;
        gen3 += 1;
        clicks -= gen3cost;
    }
    if(gen3bought >= 10){
        gen3bought = 0;
        gen3multi *= 2;
        gen3cost *= 10;
    }
}

function buygen4(){
    if(clicks >= gen4cost){
        gen4bought += 1;
        gen4 += 1;
        clicks -= gen4cost;
    }
    if(gen4bought >= 10){
        gen4bought = 0;
        gen4multi *= 2;
        gen4cost *= 10;
    }
}

function mytimer(){
    clicks += (gen1*gen1multi);
    gen1 += (gen2*gen2multi);
    gen2 += (gen3*gen3multi);
    gen3 += (gen4*gen4multi);
}