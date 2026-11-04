let num = 7;
let es_primo =true;

for(let i =2; i<num; i++){
    if(num % i === 0){
        es_primo= false;
    }
}

if (num<=1){
    es_primo=false;
}

if(es_primo){
    console.log(num+  " es primo ");
}else{
    console.log(num+  " no es primo ");
}