

function primeNumberChecker() {   
  
    let flag = true;        
    let num = document.primeform.num.value; 
    if(!num) {
        window.alert("Please enter a number");
        return 0;
    } 
    if(num<=1) {
        flag=false;
    }
    for(let i = 2; i <= num - 1; i++) 
        if (num % i == 0) { 
            flag = false; 
            break; 
        } 
    if (flag == true) {
        document.getElementById("attempts").innerHTML  += '<li class="is-prime">' + num + ' is Prime' + '</li>';
        }
    else
        document.getElementById("attempts").innerHTML += '<li class="not-prime">' + num + ' is Not Prime' + '</li>'; 
} 