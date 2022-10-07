var colors = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'violet', 'Gray', 'White', 'Gold', 'Silver', '#ece4b4'];
var tolCol = ['Brown', 'Red', 'Green', 'Blue', 'violet', 'Gray', 'Gold', 'Silver', '#ece4b4'];

var mul = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 0.1, 0.01];
//                 0  0  0   K     K     K       M       M        M         G      
var tol = [1, 2, 0.5, 0.25, 0.1, 0.05, 5, 10, 20];

function colorChange(v, b) {
    var x = document.getElementById(v).selectedIndex - 1;
    var y = document.getElementById(b);

    if (b == "tol")
        y.style.fill = tolCol[x];
    else
        y.style.fill = colors[x];

}

function calc() {
    var w = document.getElementById('sel_band1').selectedIndex - 1 + "";
    var x = document.getElementById('sel_band2').selectedIndex - 1 + "";
    var y = document.getElementById('sel_mul').selectedIndex - 1;
    var z = document.getElementById('sel_tol').selectedIndex - 1 + "";
    var res = document.getElementById('res');

    if (w == '-1' || x == '-1' || y == -1 || z == '-1') {
        res.innerHTML = "Select Colors";
    } else {
        var v = parseInt(w + x) * mul[y];
        //+" "+tol[z]+"%";
        if (v / 1000000000 > 1)
            v = v / 1000000000 + "G";
        else if (v / 1000000 > 1)
            v = v / 1000000 + "M";
        else if (v / 1000 > 1)
            v = v / 1000 + "K";
        res.innerHTML = v + "Ω " + tol[z] + "%";
    }
}