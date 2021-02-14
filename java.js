function startTime() {
    var today = new Date();
    var h = today.getHours();
    var hl = today.getHours() - 2;
    var m = today.getMinutes();
    var s = today.getSeconds();
    var now = today.toDateString();

    var m = checkTime(m);
    var s = checkTime(s);

    document.getElementById('data').innerHTML = now;
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    document.getElementById('clocklondon').innerHTML = hl + ":" + m + ":" + s;
    console.log(h + ":" + m + ":" + s);
    var t = setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
};