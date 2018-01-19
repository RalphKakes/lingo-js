var random = Math.floor( Math.random() * 479 );
var answer = words[random];
var answerArray = answer.split('');
console.log(answer);
var rowCount = 0
var 


function check() {
    for(var i = 0; i < 5; i++){
        var input = document.getElementById("letter"+rowCount+'_'+i);
        console.log(input.value);

        if (attempt<=4){
        	correct = 0;
        }

        //Maakt geel
       if (answerArray.includes(input.value)) {
            input.style.backgroundColor = 'yellow';
            input.style.borderRadius = '0px';
        } 

        //Maakt rood
        if(input.value == answerArray[i]){
            input.style.backgroundColor = "red";
            input.style.borderRadius = '0px';
        }
    }
    rowCount++;
}


document.getElementById("letter0_0").value = answerArray[0];
document.getElementById("letter1_0").value = answerArray[0];
document.getElementById("letter2_0").value = answerArray[0];
document.getElementById("letter3_0").value = answerArray[0];
document.getElementById("letter4_0").value = answerArray[0];