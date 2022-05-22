
const strarr = [];
let revearr = [];
let userstr = document.getElementById("Udt1");
function tex(){
  console.clear();
  if(userstr.value == "") {
    document.getElementById("udans").innerHTML = "haha nice try";
    console.log("enter text")
  }
  else {
    console.log(" leng",userstr.value.length);
    let strupr = userstr.value.toUpperCase();
    console.log(" am i upper", strupr);
    
    
      let rege = /[a-z0-1]/gi;
      let renonalp = strupr.match(rege);
      console.log("removed patterns",renonalp);
    
    for(let i = 0; i < renonalp.length; i++){
      strarr.push(renonalp[i]);
    }
      
      console.log("I should be splited",strarr);
      for(let i = 0; i < strarr.length; i++) {
        revearr.push(strarr[i]);
      }
      revearr.reverse();
    console.log("I should be reversed",revearr);
    console.log("res",JSON.stringify(strarr));
    console.log("Res",JSON.stringify(revearr));
  if(JSON.stringify(strarr) == JSON.stringify(revearr)) {
    document.getElementById("udans").innerHTML = "Palindrome";
    console.log("equal");
  }
  else {
    document.getElementById("udans").innerHTML = "Not a Palindrome";
    console.log("no");
    }
    
  }
  console.log();
  for(let i = 0; i < strarr.length; i++){
    revearr.pop(strarr[i]);
  }
  for(let i = 0; i <userstr.value.length; i++){
    strarr.pop(userstr[i]);
  }

}
