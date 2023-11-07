let firstint = document.getElementById("inp")

function wrote(){
    let R = firstint.value.split(``);
for (let i=0 ; i<R.length ; i++) {
    if (R[i] == "=" ){
        delete R[i] ;
        delete R[i-1];
    }
}
let result = R.join('') ;
alert(result) ;
}

function remove () {
firstint.value = '';
}
alert("salam");