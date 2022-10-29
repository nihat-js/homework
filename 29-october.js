function bir(num) {
   let min = Math.floor(num / 1000);
   let yuz = Math.floor((num - min * 1000) / 100);
   let on = Math.floor((num - min * 1000 - yuz * 100) / 10);
   let bir = Math.floor(num - min * 1000 - yuz * 100 - on * 10)

   let output = min + yuz + on + bir;
   return output;

}


function bir_(num) {
   num = num.toString();
   let output = parseInt(num[0], 10) + parseInt(num[1], 10) + parseInt(num[2], 10) + parseInt(num[3], 10);
   return output;
}

function iki(num) {
   let output = "Butun reqemler bir birine beraber deyil";


   if (parseInt(num.toString()[0], 10) !== parseInt(num.toString()[1], 10)) {
      return output;
   }
   if (parseInt(num.toString()[0], 10) !== parseInt(num.toString()[2], 10)) {
      return output;
   }
   if (parseInt(num.toString()[1], 10) !== parseInt(num.toString()[2], 10)) {
      return output;
   }

   output = "Butun reqemler bir birine beraberdir";
   return output;

}


function uc(inp) {
   if (input === 'a' || input === 'A') {
      return 'Azerbaycan dili secildi';
   }
   else if (input === 'r' || input === 'R') {
      return 'Rus dili secildi';
   } else {
      return 'Yanlis sorgu'
   }
}


function uc_(inp) {
   inp = inp.toLowerCase();
   if (inp == 'a') {
      return 'Azerbaycan dili secildi';
   } else if (inp == 'r') {
      return 'Rus dili secildi';
   } else {
      return 'yanlis sorgu';
   }
}




function dort(inp) {
   // Wrong Input hali qeyd olunmayib

   inp = inp.toLowerCase();
   if (inp == "february") {
      return 28
   } else if (inp == 'april' || inp == 'june' || inp == 'september' || inp == "november") {
      return 30;
   } else {
      return 31
   }
}



function dort_(input) {
   switch (input.toLowerCase()) {
      default:
         return false;
         break;
      case "january":
         return 31;
         break;
      case "february":
         return 28;
         break;
      case "march":
         return 31;
         break;
      case "april":
         return 30;
         break;
      case "may":
         return 31;
         break;
      case "june":
         return 30;
         break;
      case "july":
         return 31;
         break;
      case "august":
         return 31;
         break;
      case "september":
         return 30;
         break;
      case "october":
         return 31;
         break;
      case "november":
         return 30;
         break;
      case "december":
         return 31;
         break;
   }
}



console.log(dort('July'));