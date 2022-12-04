const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");

const checkNumberBtn = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function checkBirthdateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    console.log(sum);

}

function calculateSum(dob){
    dob = dob.replaceAll("/","");
    let sum = 0;
    for (let i =0 ; i<dob.length;i++){
      sum = sum+Number(dob.charAt(i));
  
    }
  }

checkNumberBtn.addEventListener("click",function getValues(){

} )
