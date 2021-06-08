var money = 0;
var coal = 0;
var coalPrice = 0.2;

var clickPower = 1;


// Rounding
function numFormatter(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 999){
        return num; // if value < 1000, nothing to do
    }
}

// Coal price
$(document).ready(function(){
    setInterval(function(){
        coalPrice = (Math.random() * (2.5 - 0.2) + 0.2).toFixed(2);
        document.getElementById("coalPrice").innerHTML = coalPrice;
    }, 2000);
})




// Update money
function updateCoal() {
    $("#coal").text(numFormatter(coal));
}


// Add coal after click
$(".cookie").click(function() {
    $(this).toggleClass('clicked');
    // parseInt(money)
    coal = coal + clickPower;
    updateCoal();
})

// Sell money
$(".sell").click(function(){
    money = money + (coal*coalPrice);
    coal = 0;
    document.getElementById("coal").innerHTML = coal;
    document.getElementById("money").innerHTML = money;
    
})


// Cheat +1000
$("#addMoney").click(function() {
    money = money + 100000;
    updateMoney();
})
// Cheat cp 10
$("#clickPower10").click(function(){
    clickPower = clickPower + 10;
})

// Disable image dragging
$('img').on('dragstart', function(event) { event.preventDefault(); });

// Save

$("#save").click(function(){save()});
$("#load").click(function(){load()});

function save() {
    localStorage.setItem("Money", money);
}

function load() {
    money = parseInt(localStorage.getItem("Money"));
    document.getElementById("money").innerHTML = money;
}