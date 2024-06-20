let number =0;
let sum =0;

for(number = 1; number<=10; number++){
    if(number%3 == 0){
        console.log(number);
        sum=sum+number;
        number++;
    }
}
console.log(`Sum Of the Divisable by 3 is`,{sum});