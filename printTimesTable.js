//function to print table for given number

function printTimesTable(n){

  //check if the input is number and integer only
  var num = n.toString();
  var i = 0;
  while(i<=num.length){
    if(num.charCodeAt(i) < 48 || num.charCodeAt(i)> 57){
        //If the input is not a number, then return false and print error
        console.log("Input is not a integer. Please enter a valid integer.")
        return;
        }
        i++;
    }

    for(i=1;i<=10;i++){
        console.log(n + " * " + i + " = " + n*i);
    }

}

printTimesTable(5);