$('img.cookie').on('click', function() {
        $('.cookie').toggleClass('active');
    });

var Money = 0;
var cor = new Audio('sound/Tink.mp3');
var icor = new Audio('sound/Dong.mp3');

var Bakers = 0;
var BakersCost = 15;
var BakersPower = 0;

var Grandma = 0;
var GrandmaCost = 100;
var GrandmaPower = 0;

var BakersUpgrade = 0;
var BakersUpgradeCost = 200;

function addMoney(number) {
    Money = Money + number;
    document.getElementById("moneyCount").innerHTML = Money;
}
function BuyBakers() {
    if (Money >= BakersCost) {
        Money -= BakersCost;
        BakersCost = BakersCost + 5;
        Bakers += 1;
        Bakers * BakersPower;
        document.getElementById("Bakers").innerHTML = Bakers;
        document.getElementById("BakersCost").innerHTML = BakersCost;
        document.getElementById("moneyCount").innerHTML = Money;
            BakersPower += 1;
        cor.play();
    }
    else {
      icor.play();
    }
}
function BuyGrandma() {
    if (Money >= GrandmaCost) {
        Money = Money - GrandmaCost;
        GrandmaCost = GrandmaCost + 25;
        Grandma = Grandma + 1;
        Grandma * GrandmaPower;
        document.getElementById("Grandma").innerHTML = Grandma;
        document.getElementById("GrandmaCost").innerHTML = GrandmaCost;
        document.getElementById("moneyCount").innerHTML = Money;
        GrandmaPower = GrandmaPower = 5;
        cor.play();
    }
    else {
      icor.play();
    }
}
function BuyBakersUpgrade() {
    if (Money >= BakersUpgradeCost) {
        Money = Money - BakersUpgradeCost;
        BakersUpgradeCost = BakersUpgradeCost + 300;
        BakersUpgrade = BakersUpgrade + 1;
        BakersPower = BakersPower * 2;
        document.getElementById("BakersUpgrade").innerHTML = BakersUpgrade;
        document.getElementById("BakersUpgradeCost").innerHTML = BakersUpgradeCost;
    }
    else {
      icor.play();
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
    addMoney(Bakers);
}, 1000);

//SHOP
function shopOpen() {
    document.getElementById("shop").style.display = "block";
    document.getElementById("HamO").style.display = "none";
    document.getElementById("HamC").style.display = "table";
}
function shopClose() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("HamC").style.display = "none";
    document.getElementById("HamO").style.display = "table";
}
