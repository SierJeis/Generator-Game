function updatecount(){
    var need = 10 - gen1bought;
    var need2 = 10 - gen2bought;
    var need3 = 10 - gen3bought;
    var need4 = 10 - gen4bought
    setInterval(() => {
        document.querySelector("#clicks").innerHTML = "Clicks: "+formatter.format(clicks);
        document.querySelector("#gen1").innerHTML = "Tier 1 Generator: "+formatter.format(gen1)+" {"+formatter.format(gen1bought)+"} ×"+gen1multi+"<br> Cost: "+formatter.format(gen1cost);+" Clicks";
        document.querySelector("#gen2").innerHTML = "Tier 2 Generator: "+formatter.format(gen2)+" {"+formatter.format(gen2bought)+"} ×"+gen2multi+"<br> Cost: "+formatter.format(gen2cost);+" Clicks";
        document.querySelector("#gen3").innerHTML = "Tier 3 Generator: "+formatter.format(gen3)+" {"+formatter.format(gen3bought)+"} ×"+gen3multi+"<br> Cost: "+formatter.format(gen3cost);+" Clicks";
        document.querySelector("#gen4").innerHTML = "Tier 4 Generator: "+formatter.format(gen4)+" {"+formatter.format(gen4bought)+"} ×"+gen4multi+"<br> Cost: "+formatter.format(gen4cost);+" Clicks";
        document.querySelector("#cps").innerHTML = "Clicks Per Tick: "+formatter.format((gen1*gen1multi));
        document.querySelector("#tickspeed").innerHTML = "Upgrade Tickspeed <br> Cost: "+formatter.format(tickspeedcost)+"<br> Tickspeed: "+Math.round(tickspeed);
        document.querySelector("#until10").innerHTML = "Buy Until 10 <br> Cost: "+formatter.format((gen1cost*need-gen1bought*gen1cost))+" {"+(need-gen1bought)+"}";
        document.querySelector("#until102").innerHTML = "Buy Until 10 <br> Cost: "+formatter.format((gen2cost*need2-gen2bought*gen2cost))+" {"+(need2-gen2bought)+"}";
        document.querySelector("#until103").innerHTML = "Buy Until 10 <br> Cost: "+formatter.format((gen3cost*need3-gen3bought*gen3cost))+" {"+(need3-gen3bought)+"}";
        document.querySelector("#until104").innerHTML = "Buy Until 10 <br> Cost: "+formatter.format((gen4cost*need4-gen4bought*gen4cost))+" {"+(need4-gen4bought)+"}";
        if(gen1bought >= 10){
            gen1bought = 0;
            gen1multi *= 2;
            gen1cost *= 10;
        }
        if(gen2bought >= 10){
            gen2bought = 0;
            gen2multi *= 2;
            gen2cost *= 100;
        }
        if(gen3bought >= 10){
            gen3bought = 0;
            gen3multi *= 2;
            gen3cost *= 1000;
        }
        if(gen4bought >= 10){
            gen4bought = 0;
            gen4multi *= 2;
            gen4cost *= 10000;
        }
        if(clicks >= gen1cost){
            document.querySelector("#gen1").style.borderColor = "green";
        } else {
            document.querySelector("#gen1").style.borderColor = "red";
        }
        if(clicks >= gen2cost){
            document.querySelector("#gen2").style.borderColor = "green";
        } else {
            document.querySelector("#gen2").style.borderColor = "red";
        }
        if(clicks >= gen3cost){
            document.querySelector("#gen3").style.borderColor = "green";
        } else {
            document.querySelector("#gen3").style.borderColor = "red";
        }
        if(clicks >= gen4cost){
            document.querySelector("#gen4").style.borderColor = "green";
        } else {
            document.querySelector("#gen4").style.borderColor = "red";
        }
        if(clicks >= tickspeedcost){
            document.querySelector("#tickspeed").style.borderColor = "green";
        } else {
            document.querySelector("#tickspeed").style.borderColor = "red";
        }
        if(clicks >= (gen1cost*need-gen1bought*gen1cost)){
            document.querySelector("#until10").style.borderColor = "green";
        } else {
            document.querySelector("#until10").style.borderColor = "red";
        }
        if(clicks >= (gen2cost*need-gen2bought*gen2cost)){
            document.querySelector("#until102").style.borderColor = "green";
        } else {
            document.querySelector("#until102").style.borderColor = "red";
        }
        if(clicks >= (gen3cost*need-gen3bought*gen3cost)){
            document.querySelector("#until103").style.borderColor = "green";
        } else {
            document.querySelector("#until103").style.borderColor = "red";
        }
        if(clicks >= (gen4cost*need-gen4bought*gen4cost)){
            document.querySelector("#until104").style.borderColor = "green";
        } else {
            document.querySelector("#until104").style.borderColor = "red";
        }
    }, 10);
}