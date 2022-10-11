var myobject1 = {
    A: 1
}
var myobject2 = {
    C: 1,
    A: 2
}
var myobject3 = {
    C: 2
}


var comp = function (myobject1, myobject2, myobject3) {
    var myobject1len = Object.keys(myobject1).length;
    var myobject2len = Object.keys(myobject2).length;
    var myobject3len = Object.keys(myobject3).length;

    if (myobject1len == 1) {
        return myobject1;
    }
    if (myobject2len == 1) {
        return myobject2;
    }
    if (myobject3len == 1) {
        return myobject3;
    }

}
console.log(comp(myobject1, myobject2, myobject3));