

/*Letter animation*/
function shuffle(start,text,id){
	var fps = 25;
	    step = 10;
	    txt=text;
	    types=[];
	    letters=[];
        ele = document.getElementById(id);
        srt = start;
console.log(srt);
	    for(var i=0;i<txt.length;i++){

            var ch = txt[i];

            if(ch == " "){
                types[i] = "space";
                continue;
            }
            else if(/[a-z]/.test(ch)){
                types[i] = "lowerLetter";
            }
            else if(/[A-Z]/.test(ch)){
                types[i] = "upperLetter";
            }
            else {
                types[i] = "number";
            }

            letters.push(i);
            // console.log(types);
        }
  		function randomChar(type){
        	var pool = "";

    		if (type == "lowerLetter"){
       			 pool = "abcdefghijklmnopqrstuvwxyz0123456789";
   			}
    		else if (type == "upperLetter"){
       			 pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    		}
   			else if (type == "number"){
     			 pool = "0123456789";
   			}

   			 var arr = pool.split('');
    	         k = arr[Math.floor(Math.random()*arr.length)];
    	         // console.log(k);
    	    return k ;
		}
    var i;
        len = letters.length;
        // console.log(len);
    var strCopy = txt.split('');
        // console.log(strCopy); // Fresh copy of the string
            // All the work gets done here
    if(srt > len*len){console.log('exited');
                return;
            } 
    for(i=Math.max(srt,0); i < len; i++){
                // the characters we will be working on at once
         if( i < srt+step){
                    l  = randomChar(types[letters[i]]);
                    // console.log(strCopy[letters[i]]);
                    strCopy[letters[i]] = l;
                }

    else {
           strCopy[letters[i]] = "";
             }
        }
        // console.log(strCopy.join(""));
    ele.innerHTML = strCopy.join("") ;

      };        

function shuffletter(start,text,id){
console.log(start);
         setInterval(function(){ setTimeout(function(){
         shuffle(start+1,text,id);
         start+=1;
         },1000/50);},1000/10)
     }

      
 
function init(){
		
	i=0;
	start=-1;
 	setInterval(function(){
 		Ele = document.getElementById("main");
		clr=["#f41b07","#87f707","#06dbd7","#fff"];
		Ele.style.stroke = clr[i%4];
		i+=1;
	},2000);
 shuffletter(start,"EXTROPY'19","Ext");
 setTimeout(function(){document.getElementById("dates").style.opacity=1},1500);
}
window.onload = init();
