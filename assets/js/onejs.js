//Selfmade
var changecount=0;

//var count = document.getElementsByClassName('team-member_div').length
var memberdiv = document.getElementsByClassName('team-member_div'); 
let count = memberdiv.length;
var showstart=0;
var showend=3;

var array2 = ['first', 'second', , 'fourth'];
// Gibt ['first', 'second', 'fourth'] zurück.
array2.forEach(e => {
  console.log(e);
})
console.log(count)

showTeamMember();


function showTeamMember(){ 
	Array.from(memberdiv).forEach((e,i) => {
		if(i<showstart || i>=showend) {e.style.display = 'none'} else e.style.display ='inline';
	});	

	
}



function diashowNext(){
	if(showend+3 < count){
	showstart+=3;
	showend+=3;
	
	} else { 
		showend=count;
		showstart=count-3;
		
	}
	showTeamMember();
}
function diashowPrevious(){
	if(showstart-3 >= 0){
		showstart-=3;
		showend-=3;
	}else{
		showend=3;
		showstart=0;
	}
		showTeamMember();
	
}
function showAll(){
	showstart=0;
	showend=count;
	showTeamMember();
}
function show3(){
	showstart=0;
	showend=3;
	showTeamMember();
}


function myfunction(){
	
    var element = document.getElementById('testelement');
    element.innerHTML = 'schon das ' +changecount+' hier geklickt!';
    changecount++;

}