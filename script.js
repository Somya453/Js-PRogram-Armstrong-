
let num=153;
let sum=0;
let temp=num;

//Armstrong Number
while (temp>0) {
    a=temp%10;
    sum+=a**3;
    temp=parseInt(temp/10);
    
}

console.log(num);

if(num==sum){
    console.log("Yes, this is an Armstrong number.");
    
}else{
    console.log("Not an Armstrong number.");
}

//Table of n natural number
for (let i = 1; i <=10; i++){
    console.log("Table:", i*num);
    
    
}

//Factors of n natural number

for (let i=1;  i<= num; i++) {
    if(num%i==0);
        console.log("Factors:",i);
        
    
}

//Sum of digits
let n=153;
let s=0;

while (n>0) {
    y=n%10;  //remainder
    s=s+y;
    n=Math.floor(n/10);


    
}

console.log("Sum of digits:", s);

//Table of n numbers


//Prime or Composite number
if(num==1){
    console.log("Canbe Prime or Composite ");
    
}else if(num<1){
    console.log(".");
    

}
else{

    for (i=2; i<num; i++) {
        if(num%i==0 ){

            console.log("Prime number!");
            break;
        }else{
            console.log("Not a Prime number!");
            break;
        
            
        }



}
}

