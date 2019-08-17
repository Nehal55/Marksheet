
function gpaCalculate(marks){

       var marks = parseInt(marks);

       if(marks>= 80 && marks <= 100)
       	  {
       	  	return 5 + '@ A+';
       	  }
       else if(marks >= 70 && marks <= 79){
             
             return 4+ '@ A';
       }

       else if(marks >= 60 && marks <= 69){
             
             return 3.5 + '@ A-';
       }

       else if(marks >= 50 && marks <= 59){
             
             return 3 + '@ B';
       }
       else if(marks >= 40 && marks <= 49){
             
             return 2 + '@ C';
       }
       else if(marks >= 33 && marks <= 39){
             
             return 1 + '@ D';
       }
       else{

       	  return 0 + '@ F';
       }
}


function getMarks(value, LG, GP){

	var get_result = gpaCalculate(value);

    var result = get_result.split("@");

         
	document.getElementById(GP).innerHTML = result[0];
	document.getElementById(LG).innerHTML = result[1];

}

function total(){

	var ban = document.getElementById("gpa_bangla").innerHTML;
	var en = document.getElementById("en_gp").innerHTML;
    
    var gpa =  ( parseFloat(ban) + parseFloat(en) ) / 2;
     
     if(ban == 0 || en == 0 ){

       gpa = 0;
     }
     
    document.getElementById("total_GPA").innerHTML = gpa;

    document.getElementById("AVG_GP").innerHTML = finalGPA(gpa);
  
    
}

function finalGPA(marks){
   
   if(marks ==5){
       
       return 'A+';
   }
   else if(marks >= 4 && marks <= 4.99){
        return 'A';
   }

   else if(marks >= 3.5 && marks <= 3.99){
        return 'A-';
   }


   else if(marks >= 3 && marks <= 3.49){
        return 'B';
   }

   else if(marks >= 2 && marks <= 2.99){
        return 'C';
   }

   else if(marks >= 1 && marks <= 1.99){
        return 'D';
   }
   else{

   	return 'F';

   }
}