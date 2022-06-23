    const strarr = [];
    let revearr = [];
    let userstr = document.getElementById("Udt1");
    
    userstr.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            ente(e);
        }
    });
    
    function ente(e) {
        tex()
    }
    
    
    
    function tex() {
      console.clear();
      if (userstr.value == "") {
        document.getElementById("udans").innerHTML = "haha nice try :)";
        console.log("Hey feed me some text, I'm hungry")
      }
      else {
        
        let strupr = userstr.value.toUpperCase();
        
        let rege = /[a-z0-9]/gi;
        let renonalp = strupr.match(rege);
        
    
        for (let i = 0; i < renonalp.length; i++) {
          strarr.push(renonalp[i]);
        }
    
        
        for (let i = 0; i < strarr.length; i++) {
          revearr.push(strarr[i]);
        }
        revearr.reverse();
        
        if (JSON.stringify(strarr) == JSON.stringify(revearr)) {
          document.getElementById("udans").innerHTML = "Palindrome";
          console.log("equal");
        }
        else {
          document.getElementById("udans").innerHTML = "Not a Palindrome";
          console.log("no");
        }
    
      }
    
      for (let i = 0; i < strarr.length; i++) {
        revearr.pop(strarr[i]);
      }
      for (let i = 0; i < userstr.value.length; i++) {
        strarr.pop(userstr[i]);
      }
    
    }
