$('img.cookie').on('click', function() {
        $('.cookie').toggleClass('active');
    });

var Money = 0;

var Bakers = 0;
var BakersCost = 15;
var BakersPower = 0;

var Grandma = 0;
var GrandmaCost = 100;
var GrandmaPower = 0;

function addMoney(number) {
    Money = Money + number;
    document.getElementById("moneyCount").innerHTML = Money;
}
function BuyBakers() {
    if (Money >= BakersCost) {
        Money = Money - BakersCost;
        BakersCost = BakersCost + 5;
        Bakers = Bakers + 1;
        BakersPower = BakersPower = 1;
        document.getElementById("Bakers").innerHTML = Bakers
        document.getElementById("BakersCost").innerHTML = BakersCost
        document.getElementById("moneyCount").innerHTML = Money
    }
}
function BuyGrandma() {
    if (Money >= GrandmaCost) {
        Money = Money - GrandmaCost;
        GrandmaCost = GrandmaCost + 25;
        Grandma = Grandma + 1;
        GrandmaPower = GrandmaPower = 5;
        document.getElementById("Grandma").innerHTML = Grandma
        document.getElementById("GrandmaCost").innerHTML = GrandmaCost
        document.getElementById("moneyCount").innerHTML = Money
    }
}
//Grandmas
window.setInterval(
    function(){
    addMoney(GrandmaPower);
}, 975);
//Bakers
window.setInterval(
    function(){
    addMoney(BakersPower);
}, 1000);

//SHOP
function shopOpen() {
    document.getElementById("shop").style.display = "block";
    document.getElementById("HamO").style.display = "none";
    document.getElementById("HamC").style.display = "block";
}
function shopClose() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("shop").style.position = "relative";
    document.getElementById("HamC").style.display = "none";
    document.getElementById("HamO").style.display = "block";
}