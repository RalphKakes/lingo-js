//Scoping is het gedeelte van de code waarin de variabele 'leeft'
var random  = Math.floor(Math.random() * words.length);
var answer = words[random];
var answerArray = answer.split('');
var rowCount = 0;
var win = document.getElementById("win")
console.log(answer)

// Eerste letter
function Start() {
    var res = answer.charAt(0)
	document.getElementById("letter0_0").value = res;
}

function Check(){

	// Woord goed is
	var correct = true;
	for(var i = 0 ; i < 5; i++){
		input = document.getElementById('letter'+rowCount+'_'+i);
		if (input.value != answerArray[i]){
			correct = false;
			document.getElementById('letter'+rowCount+'_'+i).readOnly = true;
		}
	}
	var input;
    for(var i = 0 ; i < 5; i++){
        input = document.getElementById('letter'+rowCount+'_'+i);
   		// Maakt letter geel
   		if (answerArray[1].includes(input.value)) {
            input.style.backgroundColor = 'yellow';
            input.style.borderRadius = '50px'
		}
		if (answerArray[2].includes(input.value)) {
            input.style.backgroundColor = 'yellow';
            input.style.borderRadius = '50px'
		}
		if (answerArray[3].includes(input.value)) {
            input.style.backgroundColor = 'yellow';
            input.style.borderRadius = '50px'
		}
		if (answerArray[4].includes(input.value)) {
            input.style.backgroundColor = 'yellow';
            input.style.borderRadius = '50px'
		}
         // Maakt letter rood
        if (input.value == answerArray[i]){
            input.style.backgroundColor = 'red';
            input.style.borderRadius = '5px';
            document.getElementById('letter'+rowCount+'_'+i).readOnly = true;
            var temp = document.getElementById("letter" + (rowCount+1) + "_" + i);
            if(temp != null && !correct) {
            	temp.value = input.value;
            	temp.style.backgroundColor = 'red';
            	temp.style.borderRadius = '5px';
            }
        }
	}
	if(correct) {
		win.innerHTML = "Je hebt het woord geraden!"
		for (var i = 0; i < 5; i++){
			document.getElementById('letter'+rowCount+'_'+i).readOnly = true;
		}
	} else{
		rowCount++;
		if(rowCount == 5){
			win.innerHTML = "Je hebt het woord niet geraden! Het woord was: " + answer
		} else{
			for (var i = 0; i < 5; i++){
				document.getElementById('letter'+rowCount+'_'+i).readOnly = false;
			}
			document.getElementById('letter'+rowCount+'_0').value = answer[0];
		}
	}
}

function Reload(){
	location.reload();
}

window.onkeyup = function() {
	for (var i = 0 ; i < 5; i++){
		var input = document.getElementById('letter'+rowCount+'_'+i);
    	input.value = input.value.toLowerCase();
	}
}	