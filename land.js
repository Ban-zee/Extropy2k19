window.onload =  function init(){
	
	document.getElementById("loadercont").style.display ="none";
	document.getElementById("landingcont").style.display="block";
  
	i=0;
	start=-1;
 	setInterval(function(){
 		Ele = document.getElementById("landingmain");
		clr=["#f41b07","#87f707","#06dbd7","#fff"];
		Ele.style.stroke = clr[i%4];
		document.getElementsByClassName("text")[0].style.color = clr[i%4];
		document.getElementsByClassName("text")[1].style.color = clr[i%4];
		document.getElementsByClassName("text")[2].style.color = clr[i%4];
		document.getElementsByClassName("text")[3].style.color = clr[i%4];
		document.getElementsByClassName("text")[4].style.color = clr[i%4];

	
		i+=1;
	},2000);
 shuffletter(start,"EXTROPY'19","Ext");
 setTimeout(function(){document.getElementById("dates").style.opacity=1},1500);
 timer();
 window.addEventListener("orientationchange", function() {
        console.log(screen.orientation);
        location.reload(true);
}, false);
}

/*Letter animation*/
function shuffle(start,text,id){
	var fps = 25;
	    step = 10;
	    txt=text;
	    types=[];
	    letters=[];
        ele = document.getElementById(id);
        srt = start;
// console.log(srt);
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
    if(srt > len*len){
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
         },1000/50);},1000/7)
     }

      

function timer(){
   const second = 1000;
         minute = second * 60;
         hour = minute * 60;
         day = hour * 24;
   let countDown = new Date('Feb 01, 2019 10:00:00').getTime();
   console.log(countDown);
               // x = setInterval(function() {
   let now = new Date().getTime();
       distance = countDown - now;
       console.log(distance);
    document.getElementById("31").innerText = Math.floor((distance % (hour)) / (minute*10));
    document.getElementById('22').innerText = Math.floor(((distance % day) / (hour))%10);
    document.getElementById('21').innerText = Math.floor((distance % day) / (hour*10));
    document.getElementById('12').innerText = Math.floor((distance / day)%10);
    document.getElementById('11').innerText = Math.floor((distance / (10*day)));
    // console.log(Math.floor((distance / (10*day))));
   let s =Math.floor((distance % (minute)) / second);
   let s10 = (Math.floor(((distance % minute )/ (second*10))));
   let s01 = (Math.floor(((distance % minute )/ (second)) % 10));
   let m01 = Math.floor(((distance % hour) / minute)%10);

       console.log(m01);
    document.getElementById("42").style.animationDelay = (s01+2) +'s';
    document.getElementById("41").style.animationDelay = (s+1.5) +'s';
    document.getElementById("32").style.animationDelay = (((m01)*60)) +'s';
// ***********Seconds ones***********
   var s01t =  setInterval(function(){ 
   	                       if(s01>-2){var i=s01;}
   	                       document.getElementById("42").style.transform = 'translateY(' + (10-i)*(-180) + 'px)';
   	                       s01=i-1;
               },1000);
   setTimeout(function(){  clearInterval(s01t)},(s01+2)*1000);

// ************Tens Second****************
   document.getElementById("41").style.transform = 'translateY(' + (6-s10)*(-180) + 'px)';
   setTimeout(function(){
   	                     document.getElementById("41").style.transform = 'translateY(' + (6-s10+1)*(-180) + 'px)';
                         var s10t =  setInterval(function(){ 
                         	                    if(s10>1){var i=s10-1 ;}
   	                              document.getElementById("41").style.transform = 'translateY(' + (7-i)*(-180) + 'px)';
   	                                            s10=i;},10000);
                        setTimeout(function(){  
                        	        clearInterval(s10t);
                        	      },(s10+1)*10000);
                    },(s01+1)*1000);
   console.log(Math.floor((distance % (hour)) / (minute)));
  // *************Minutes ones ************	                     
   document.getElementById("32").style.transform = 'translateY(' + (10-m01)*(-180) + 'px)';
   setTimeout(function(){
   	                     document.getElementById("32").style.transform = 'translateY(' + (10-m01+1)*(-180) + 'px)';
                         var m01t =  setInterval(function(){ 
                         	                    if(m01>0){var i=m01-1;
                         	                    console.log(i);
   	                             document.getElementById("32").style.transform = 'translateY(' + (11-i)*(-180) + 'px)';
   	                                            m01=i;}},60000);
   	                     setTimeout(function(){
   	                                clearInterval(m01t);
   	                                console.log("exited");
   	                            },(m01)*60000);
   	                 },1000 *(s));
    } 
    setInterval(function(){
       const second = 1000;
         minute = second * 60;
         hour = minute * 60;
         day = hour * 24;
       let countDown = new Date('Feb 01, 2019 10:00:00').getTime();
    	 let now = new Date().getTime(),
           distance = countDown - now;
          // min = Math.floor((distance % (hour)) / (minute*10));
          
          // console.log(min);
    document.getElementById("31").innerText = Math.floor((distance % (hour)) / (minute*10));
    document.getElementById('22').innerText = Math.floor(((distance % day) / (hour))%10);
    document.getElementById('21').innerText = Math.floor((distance % day) / (hour*10));
    document.getElementById('12').innerText = Math.floor((distance / day)%10);
    document.getElementById('11').innerText = Math.floor((distance / (10*day)));
    },2000) ;

 function active(){
var element = document.getElementsByClassName("text")[0];
    style = window.getComputedStyle(element),
    color = style.getPropertyValue('color');
  console.log(color);
  document.getElementById(event.target.id).style.color = color;
 }