var diss = +prompt("Son kiriting Biz uni toq yoki juftligini aniqlaymiz")
while(isNaN(diss)){
    alert("Son kiriting harf emas " )

}
 if (diss%2==0){
     alert("siz juft son kiritdingiz " + diss)
 }else if (diss%4==1){
    alert("siz toq son kiritdingiz " +diss)
 }while(isNaN(diss)){
    alert( " Harf kiritildi, iltimos son kiriting " )
}