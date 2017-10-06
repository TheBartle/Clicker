$('img.cookie').on('click', function() {
        $('.cookie').toggleClass('active');
    });

var Money = 0;
var Click = 1;
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
    document.getElementById("MoneyCount").innerHTML = Money;
}
function BuyBakers() {
    if (Money >= BakersCost) {
        Money -= BakersCost;
        BakersCost = BakersCost + 5;
        Bakers += 1;
        BakersPower += 1;
        document.getElementById("Bakers").innerHTML = Bakers;
        document.getElementById("BakersCost").innerHTML = BakersCost;
        document.getElementById("MoneyCount").innerHTML = Money;
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
        document.getElementById("Grandma").innerHTML = Grandma;
        document.getElementById("GrandmaCost").innerHTML = GrandmaCost;
        document.getElementById("MoneyCount").innerHTML = Money;
        GrandmaPower = GrandmaPower + 5;
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
      addMoney(BakersPower);
  }, 1000);


//SHOP
function shopOpen() {
    document.getElementById("shop").style.display = "block";
    document.getElementById("HamO").style.display = "none";
    document.getElementById("HamC").style.display = "block";
}
function shopClose() {
    document.getElementById("HamC").style.display = "none";
    document.getElementById("HamO").style.display = "block";
    document.getElementById("shop").style.display = "none";
}
//SAVE
function Save() {
    cor.play();
    localStorage.setItem("money", Money);
    localStorage.setItem("bakers", Bakers);
    localStorage.setItem("bakersCost", BakersCost);
    localStorage.setItem("bakersPower", BakersPower);
    localStorage.setItem("grandma", Grandma);
    localStorage.setItem("grandmaCost", GrandmaCost);
    localStorage.setItem("grandmaPower", GrandmaPower);              
    localStorage.setItem("bakersUpgrade", BakersUpgrade);
    localStorage.setItem("bakersUpgradeCost", BakersUpgradeCost);
}
function Load() {
    cor.play();
    Money = Money = localStorage.getItem("money"); Money++; Money--;
    Bakers = Bakers = localStorage.getItem("bakers"); Bakers++; Bakers--;
    BakersCost = BakersCost = localStorage.getItem("bakersCost"); BakersCost++; BakersCost--;
    BakersPower = BakersPower = localStorage.getItem("bakersPower"); BakersPower++; BakersPower--;
    Grandma = Grandma = localStorage.getItem("grandma"); Grandma++; Grandma--;
    GrandmaCost = GrandmaCost = localStorage.getItem("grandmaCost"); GrandmaCost++; GrandmaCost--;
    GrandmaPower = GrandmaPower = localStorage.getItem("grandmaPower"); GrandmaPower++; GrandmaPower--;
    BakersUpgrade = BakersUpgrade = localStorage.getItem("bakersUpgrade"); BakersUpgrade++; BakersUpgrade--;
    BakersUpgradeCost = BakersUpgradeCost = localStorage.getItem("bakersUpgradeCost"); BakersUpgradeCost++; BakersUpgradeCost--;
    //-------------------------------------------------------//
    document.getElementById("MoneyCount").innerHTML = Money;
    document.getElementById("Bakers").innerHTML = Bakers;
    document.getElementById("BakersCost").innerHTML = BakersCost;
    document.getElementById("Grandma").innerHTML = Grandma;
    document.getElementById("GrandmaCost").innerHTML = GrandmaCost;
    document.getElementById("BakersUpgrade").innerHTML = BakersUpgrade;
    document.getElementById("BakersUpgradeCost").innerHTML = BakersUpgradeCost;
}