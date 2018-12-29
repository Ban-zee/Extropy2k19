function gear(){
		gear = document.getElementById('gear');
		r=50;
		k=0;
		setInterval(function(){k=k+1;
			
			    gear.style.transform = "rotate(" + r*k + "deg)";
		   },200);
		fun();
		setInterval( function(){document.getElementById('bt').click();},11000);
    // blink();
	}
gear();
  // function blink(){
  //  document.getElementById("loading"). 
  // }

	function fun(){
		
    ring1 = document.getElementById("ring1");
    ring2 = document.getElementById("ring2");
     filler = document.getElementById("filler");
     bubup1 = document.getElementsByClassName("crc")[0];
	 bubup2 = document.getElementsByClassName("crc")[1];
	 bubup3 = document.getElementsByClassName("crc")[2]; 
     // i=0;
     var clr = ["#1eab9b","#dbbc0f","#6d0409"];
     var ringclr = ["#025178", "#2F4858","#C1C1C1"]
     console.log(clr[0])
     // setInterval(function(){ 
     	           // i=i+1;
                 //   i=i%3;
     	         // filler.setAttribute('fill',clr[i])},2000);
     	        setTimeout(function(){
     	                    bubup1.style.transform = "translate(258px,-500px)";
                            
                            bubup1.style.opacity=0},0);
                 setTimeout(function(){ bubup2.style.transform = "translate(230px,-465px)";
                            filler.setAttribute('fill',clr[1]);
                            ring1.setAttribute('fill',clr[1]);
                            ring2.setAttribute('fill',ringclr[1]);                          
                            bubup2.style.opacity=0;
                        console.log(filler.getAttribute("fill"))},3000);
    
                 setTimeout(function(){bubup3.style.transform = "translate(85px,-500px)";
                            filler.setAttribute('fill',clr[2]);
                            ring1.setAttribute('fill',clr[2]);
                            ring2.setAttribute('fill',ringclr[2]);
                            bubup3.style.opacity=0;
                        console.log(filler.getAttribute("fill"))},6000);

                 setTimeout(function(){bubup1.style.display="none";

                            bubup2.style.display="none"; 
                            bubup3.style.display="none";},8500);

                 setTimeout(function(){bubup1.style.transform = "translate(0px,0px)"; 
                           bubup1.style.display="block";  
                           bubup1.style.opacity=1;   
                           bubup2.style.transform = "translate(0px,0px)"; 
                           bubup2.style.display="block";
                           bubup2.style.opacity=1;   
                           bubup3.style.transform = "translate(0px,0px)";
                           bubup3.style.display="block";
                           bubup3.style.opacity=1;
                           filler.setAttribute('fill',clr[0]);
                           ring1.setAttribute('fill',clr[0]);
                           ring2.setAttribute('fill',ringclr[0]);
                           console.log(filler.getAttribute("fill"))},9000)
 }
     
