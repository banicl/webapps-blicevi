function pol(unos) {
    let x;
    if (unos.length % 2 == 0) {
        x = (unos.length / 2);
    } else {
        x = (unos.length / 2) - 1;
    }
    var rj = unos.substring(0, x);
    console.log(rj)
}

console.log(pol("Javascript i nije tolko los"));