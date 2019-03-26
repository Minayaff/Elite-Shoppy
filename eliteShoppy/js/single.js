 function Show_Info_Descrip_Review(){
    $("#_description").css("backgroundColor" , "#fc636b") ;
    $("li:first .triangle").css("border-top" , "20px solid #fc636b");

     $("#_description").click(function(){

        $("li:first .triangle").css("border-top" , "20px solid #fc636b"); 
        
        $("#_reviews>.triangle , #_information>.triangle ").css("border-top" , "transparent");

        $("#_description").css("backgroundColor" , "#fc636b") ;
        $("#_reviews , #_information").css("backgroundColor" , "transparent") ;
         $("._reviews , ._information ").css("display","none");
         $("._description").css("display","block");  
  })


    $("#_reviews").click(function(){ 

        $("#_description>.triangle , #_information>.triangle ").css("border-top" , "transparent");            
        $("#_reviews>.triangle").css("border-top" , "20px solid #fc636b");

        $("#_information ,#_description ").css("backgroundColor" , "transparent") ;
        $("#_reviews").css("backgroundColor" , "#fc636b") ;

        $("._information , ._description ").css("display","none");
         $("._reviews").css("display","block");
     })

    $("#_information").click(function(){ 
        $("#_description>.triangle , #_reviews>.triangle").css("border-top" , "transparent");            
        $("#_information>.triangle").css("border-top" , "20px solid #fc636b");

        $("#_description,#_reviews").css("backgroundColor" , "transparent") ;
        $("#_information").css("backgroundColor" , "#fc636b") ;

        $("._description , ._reviews ").css("display","none");
         $("._information").css("display","block");
     })

    }


    function Mobile_show(){
        let header_description = document.querySelector(".header_description");
        let header_reviews = document.querySelector(".header_reviews");
        let header_information = document.querySelector(".header_information");


        $(".header_description").click(function () {
            $("._description").toggle(200);
            $("._information").hide(200);
            $("._reviews").hide(200);

            $(".header_reviews").css("backgroundColor", "rgba(0, 0, 0, 0)");
            $(".header_information").css("backgroundColor", "rgba(0, 0, 0, 0)");
            if (window.getComputedStyle(header_description).backgroundColor == "rgba(0, 0, 0, 0)") {
                $(".header_description").css("backgroundColor", "#fc636b");
            } else {
                $(".header_description").css("backgroundColor", "rgba(0, 0, 0, 0)");
            }

        })

        $(".header_reviews").click(function () {
            $("._reviews").toggle(200);
            $("._description").hide(200);
            $("._information").hide(200);

            $(".header_description").css("backgroundColor", "rgba(0, 0, 0, 0)");
            $(".header_information").css("backgroundColor", "rgba(0, 0, 0, 0)");

            if (window.getComputedStyle(header_reviews).backgroundColor == "rgba(0, 0, 0, 0)") {
                $(".header_reviews").css("backgroundColor", "#fc636b");
            } else {
                $(".header_reviews").css("backgroundColor", "rgba(0, 0, 0, 0)");
            }

        })

        $(".header_information").click(function () {
            $("._information").toggle(200);
            $("._reviews").hide(200);
            $("._description").hide(200);
            $(".header_description").css("backgroundColor", "rgba(0, 0, 0, 0)");
            $(".header_reviews").css("backgroundColor", "rgba(0, 0, 0, 0)");

            if (window.getComputedStyle(header_information).backgroundColor == "rgba(0, 0, 0, 0)") {
                $(".header_information").css("backgroundColor", "#fc636b");
            } else {
                $(".header_information").css("backgroundColor", "rgba(0, 0, 0, 0)");
            }
        })


    }


function media_query(){

    let _description = document.querySelector("._description");
    let _reviews = document.querySelector("._reviews");
    let _information = document.querySelector("._information");

   function myFunction(x) {
       if (x.matches) { // If media query matches
           _description.style.display = "none";
           _reviews.style.display = "none";
           _information.style.display = "none";     
       }else{
           _description.style.display = "block";   
       }
   }

   function myFunction2(y) {
       if (y.matches) { 
            if(_description.style.display == "block"){
               _reviews.style.display = "none";
           _information.style.display = "none";
           }
           else if(_reviews.style.display == "block"){
           _information.style.display = "none";
           _description.style.display = "none";
       } else if(_information.style.display == "block"){
           _description.style.display = "none";
           _reviews.style.display = "none";
       }
   }

}

   var x = window.matchMedia("(max-width: 769px)")
   var y = window.matchMedia("(min-width: 770px)") 
   myFunction(x) 
   x.addListener(myFunction)

   myFunction2(y);
   y.addListener(myFunction2)
}

