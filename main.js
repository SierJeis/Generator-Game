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



function buyuntil10(){
    var need = 10 - gen1bought;
    if(clicks >= (gen1cost*need-gen1bought*gen1cost)){
        gen1bought = 10;
        gen1 += 10;
        clicks -= gen1cost*10;
    }
}

function buyuntil102(){
    var need = 10 - gen2bought;
    if(clicks >= (gen2cost*need-gen2bought*gen2cost)){
        gen2bought = 10;
        gen2 += 10;
        clicks -= gen2cost*10;
    }
}

function buyuntil103(){
    var need = 10 - gen3bought;
    if(clicks >= (gen3cost*need-gen3bought*gen3cost)){
        gen3bought = 10;
        gen3 += 10;
        clicks -= gen3cost*10;
    }
}

function buyuntil104(){
    var need = 10 - gen4bought;
    if(clicks >= (gen4cost*need-gen4bought*gen4cost)){
        gen4bought = 10;
        gen4 += 10;
        clicks -= gen4cost*10;
    }
}

function upgrade(){
    if(clicks >= tickspeedcost){
        clearInterval(myInterval);
        clicks -= tickspeedcost;
        tickspeed /= 1.2;
        tickspeedcost *= 10;
        myInterval = setInterval(mytimer, tickspeed);
    }
}

function buygen(){
    if(clicks >= gen1cost){
        gen1bought += 1;
        gen1 += 1;
        clicks -= gen1cost;
    }
}

function buygen2(){
    if(clicks >= gen2cost){
        gen2bought += 1;
        gen2 += 1;
        clicks -= gen2cost;
    }
}

function buygen3(){
    if(clicks >= gen3cost){
        gen3bought += 1;
        gen3 += 1;
        clicks -= gen3cost;
    }
}

function buygen4(){
    if(clicks >= gen4cost){
        gen4bought += 1;
        gen4 += 1;
        clicks -= gen4cost;
    }
}

function mytimer(){
    clicks += (gen1*gen1multi);
    gen1 += (gen2*gen2multi);
    gen2 += (gen3*gen3multi);
    gen3 += (gen4*gen4multi);
}