function InterLineal() {
    var x = document.getElementById("x").value;
    var x0 = document.getElementById("x0").value;
    var x1 = document.getElementById("x1").value;
    var fx0 = document.getElementById("fx0").value;
    var fx1 = document.getElementById("fx1").value;
    var fx;
    let part1 = fx0;
    let part2 = fx1 - fx0;
    let part3 = x - x0;
    let part4 = x1 - x0;
    let part5 = part2 / part4;
    let part6 = part5 * part3;
    fx = parseFloat(fx0) + parseFloat(part6);
    if (x > x1 || x < x0) {
        document.getElementById("resultado").innerHTML = ("Esta extrapolado");
    } else {
        document.getElementById("resultado").innerHTML = ("f(x)= " + fx);
    }
}

function errorLineal() {
    var x = document.getElementById("x").value;
    var x0 = document.getElementById("x0").value;
    var x1 = document.getElementById("x1").value;
    var fx0 = document.getElementById("fx0").value;
    var fx1 = document.getElementById("fx1").value;
    var fx;
    let part1 = fx0;
    let part2 = fx1 - fx0;
    let part3 = x - x0;
    let part4 = x1 - x0;
    let part5 = part2 / part4;
    let part6 = part5 * part3;
    fx = parseFloat(fx0) + parseFloat(part6);
    var E = document.getElementById("Exacto").value;
    var Exacto = parseFloat(E) - parseFloat(fx);
    var Exacto1 = parseFloat(Exacto) / parseFloat(E);
    var Efinal = Exacto1 * 100;
    if (x > x1 || x < x0) {
        document.getElementById("result2").innerHTML = ("Esta extrapolado");
    } else {
        document.getElementById("result2").innerHTML = ("El porcentaje de error es igual a: " + Efinal + "%");
    }
}

function InterCuadra() {
    var x = document.getElementById("x").value;
    var x0 = document.getElementById("x0").value;
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var fx0 = document.getElementById("fx0").value;
    var fx1 = document.getElementById("fx1").value;
    var fx2 = document.getElementById("fx2").value;
    var f2x;
    var b0 = fx0;

    var par1 = fx1 - fx0;
    var par2 = x1 - x0;
    var b1 = par1 / par2;

    var par3 = fx2 - fx1;
    var par4 = x2 - x1;
    var par5 = par3 / par4;

    var par6 = par5 - b1;
    var par7 = x2 - x0;
    var b2 = par6 / par7;

    var par9 = x - x0;
    var par10 = b1 * par9;

    var par11 = x - x1;
    var par12 = par9 * par11;
    var par13 = b2 * par12;
    f2x = parseFloat(b0) + parseFloat(par10) + parseFloat(par13);
    if (f2x > fx2 || f2x < fx0) {
        document.getElementById("resultado").innerHTML = ("Esta extrapolado");
    } else {
        document.getElementById("resultado").innerHTML = ("f2(x)= " + f2x);
    }
}

function errorCuadra() {
    var x = document.getElementById("x").value;
    var x0 = document.getElementById("x0").value;
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var fx0 = document.getElementById("fx0").value;
    var fx1 = document.getElementById("fx1").value;
    var fx2 = document.getElementById("fx2").value;
    var f2x;
    var b0 = fx0;

    var par1 = fx1 - fx0;
    var par2 = x1 - x0;
    var b1 = par1 / par2;

    var par3 = fx2 - fx1;
    var par4 = x2 - x1;
    var par5 = par3 / par4;

    var par6 = par5 - b1;
    var par7 = x2 - x0;
    var b2 = par6 / par7;

    var par9 = x - x0;
    var par10 = b1 * par9;

    var par11 = x - x1;
    var par12 = par9 * par11;
    var par13 = b2 * par12;
    f2x = parseFloat(b0) + parseFloat(par10) + parseFloat(par13);

    var E = document.getElementById("Exacto").value;
    var Exacto = parseFloat(E) - parseFloat(f2x);
    var Exacto1 = parseFloat(Exacto) / parseFloat(E);
    var Efinal = Exacto1 * 100;
    if (x > x2 || x < x0) {
        document.getElementById("result2").innerHTML = ("Esta extrapolado");
    } else {
        document.getElementById("result2").innerHTML = ("El porcentaje de error es igual a: " + Efinal + "%");
    }
}

function InterLagrange1() {
    var x = document.getElementById("x").value;
    var x0 = document.getElementById("x0").value;
    var x1 = document.getElementById("x1").value;
    var fx0 = document.getElementById("fx0").value;
    var fx1 = document.getElementById("fx1").value;

    let part1 = x - x1;
    let part2 = x0 - x1;
    let part3 = part1 / part2;
    let part4 = part3 * fx0;

    let part5 = x - x0;
    let part6 = x1 - x0;
    let part7 = part5 / part6;
    let part8 = part7 * fx1;

    let part9 = parseFloat(part4) + parseFloat(part8);

    if (x > x1 || x < x0) {
        document.getElementById("resultado").innerHTML = ("Esta extrapolado");
    } else {
        document.getElementById("resultado").innerHTML = ("f1(x) = " + part9);
    }
}

function errorPG() {
    var x = document.getElementById("x").value;
    var x0 = document.getElementById("x0").value;
    var x1 = document.getElementById("x1").value;
    var fx0 = document.getElementById("fx0").value;
    var fx1 = document.getElementById("fx1").value;
    var err1 = document.getElementById("err1").value;

    let part1 = x - x1;
    let part2 = x0 - x1;
    let part3 = part1 / part2;
    let part4 = part3 * fx0;

    let part5 = x - x0;
    let part6 = x1 - x0;
    let part7 = part5 / part6;
    let part8 = part7 * fx1;

    let part9 = parseFloat(part4) + parseFloat(part8);
    var err11 = parseFloat(err1) - parseFloat(part9);
    var err12 = parseFloat(err11) / parseFloat(err1);
    if (x > x1 || x < x0) {
        document.getElementById("result2").innerHTML = ("Esta extrapolado");
    } else {
        document.getElementById("result2").innerHTML = ("El porcentaje de error es igual a: " + err12 + " % ");
    }
}

function InterLagrange2() {
    var x = document.getElementById("x").value;
    var x0 = document.getElementById("x0").value;
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var fx0 = document.getElementById("fx0").value;
    var fx1 = document.getElementById("fx1").value;
    var fx2 = document.getElementById("fx2").value;

    let part10 = x - x1;
    let part11 = x0 - x1;
    let part12 = part10 / part11;

    let part13 = x - x2;
    let part14 = x0 - x2;
    let part15 = part13 / part14;

    let part16 = part12 * part15;
    let part17 = part16 * fx0;
    ///////////////////////////////////
    let part18 = x - x0;
    let part19 = x1 - x0;
    let part20 = part18 / part19;

    let part21 = x - x2;
    let part22 = x1 - x2;
    let part23 = part21 / part22;

    let part24 = part20 * part23;
    let part25 = part24 * fx1;
    ///////////////////////////////////
    let part26 = x - x0;
    let part27 = x2 - x0;
    let part28 = part26 / part27;

    let part29 = x - x1;
    let part30 = x2 - x1;
    let part31 = part29 / part30;

    let part32 = part28 * part31;
    let part33 = part32 * fx2;

    let part34 = part17 + part25 + part33;

    // FIN DE F2X

    if (x > x2 || x < x0) {
        document.getElementById("resultado").innerHTML = ("Esta extrapolado");
    } else {
        document.getElementById("resultado").innerHTML = ("f2(x) = " + part34);
    }
}

function errorSG() {
    var x = document.getElementById("x").value;
    var x0 = document.getElementById("x0").value;
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var fx0 = document.getElementById("fx0").value;
    var fx1 = document.getElementById("fx1").value;
    var fx2 = document.getElementById("fx2").value;
    var err2 = document.getElementById("err2").value;

    let part10 = x - x1;
    let part11 = x0 - x1;
    let part12 = part10 / part11;

    let part13 = x - x2;
    let part14 = x0 - x2;
    let part15 = part13 / part14;

    let part16 = part12 * part15;
    let part17 = part16 * fx0;
    ///////////////////////////////////
    let part18 = x - x0;
    let part19 = x1 - x0;
    let part20 = part18 / part19;

    let part21 = x - x2;
    let part22 = x1 - x2;
    let part23 = part21 / part22;

    let part24 = part20 * part23;
    let part25 = part24 * fx1;
    ///////////////////////////////////
    let part26 = x - x0;
    let part27 = x2 - x0;
    let part28 = part26 / part27;

    let part29 = x - x1;
    let part30 = x2 - x1;
    let part31 = part29 / part30;

    let part32 = part28 * part31;
    let part33 = part32 * fx2;


    let part34 = part17 + part25 + part33;

    let err22 = parseFloat(err2) - parseFloat(part34);
    let err23 = parseFloat(err22) / parseFloat(err2);
    if (x > x2 || x < x0) {
        document.getElementById("result2").innerHTML = ("Esta extrapolado");
    } else {
        document.getElementById("result2").innerHTML = ("El porcentaje de error es igual a: " + err23 + " % ");
    }
}