$(document).ready(function () {

    $("#men").css("backgroundColor", "#fc636b");
    $("li:first .triangle").css("border-top", "20px solid #fc636b");

    $("#men").click(function () {

        $("li:first .triangle").css("border-top", "20px solid #fc636b");

        $("#women>.triangle , #bag>.triangle ,  #footwear>.triangle  ").css("border-top", "transparent");

        $("#men").css("backgroundColor", "#fc636b");
        $("#women,#footwear,#bag").css("backgroundColor", "transparent");
        $(".women ,.footwear , .bags ").css("display", "none");
        $(".mens").css("display", "block");
    })

    $("#women").click(function () {

        $("#men>.triangle , #bag>.triangle ,  #footwear>.triangle  ").css("border-top", "transparent");
        $("#women>.triangle").css("border-top", "20px solid #fc636b");

        $("#footwear ,#men ,#bag ").css("backgroundColor", "transparent");
        $("#women").css("backgroundColor", "#fc636b");

        $(".bags , .footwear , .mens ").css("display", "none");
        $(".women").css("display", "block");
    })

    $("#bag").click(function () {
        $("#men>.triangle , #women>.triangle ,  #footwear>.triangle  ").css("border-top", "transparent");
        $("#bag>.triangle").css("border-top", "20px solid #fc636b");

        $("#men ,#footwear  ,#women").css("backgroundColor", "transparent");
        $("#bag").css("backgroundColor", "#fc636b");

        $(".footwear , .mens , .women ").css("display", "none");
        $(".bags").css("display", "block");
    })

    $("#footwear").click(function () {
        $("#men>.triangle , #bag>.triangle ,  #women>.triangle  ").css("border-top", "transparent");
        $("#footwear>.triangle").css("border-top", "20px solid #fc636b");

        $("#men ,#bag  ,#women  ").css("backgroundColor", "transparent");
        $("#footwear").css("backgroundColor", "#fc636b");

        $(".bags , .mens , .women").css("display", "none");
        $(".footwear").css("display", "block");
    })

})