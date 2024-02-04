function Solve(val) {
    var v = document.getElementById('jan');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('jan').value;
    var num2 = eval(num1);
    document.getElementById('jan').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('jan');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('jan');
    ev.value = ev.value.slice(0,-1);
 }