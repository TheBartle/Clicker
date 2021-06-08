var money = 0
var clickPower = 1


// Rounding
function numFormatter(num) {
    if (num > 999){
        return (num/1000).toFixed(2) + 'K';
    } else if(num < 999){
        return num;
    }
}

// Update money
function updateMoney() {
    $("#money").text(numFormatter(money));
}


// Add money after click
$(".cookie").click(function() {
    $(this).toggleClass('clicked');
    money = money + clickPower;
    updateMoney();
})


// Cheat +1000
$("#addMoney").click(function() {
    money = money + 1000;
    updateMoney();
})
// Cheat cp 10
$("#clickPower10").click(function(){
    clickPower = clickPower + 10;
})

// Disable image dragging
$('img').on('dragstart', function(event) { event.preventDefault(); });