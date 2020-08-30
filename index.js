// init all screens
// $("#first-screen").hide();

$("#second-screen").hide();
$("#third-screen").hide();
$("#fourth-screen").hide();
$("#fifth-screen").hide();

// get the current date
var curday = function(sp){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (dd+sp+mm+sp+yyyy);
};

// first screen button
$("#firstScreenSubmit").click(function(){
    $("#first-screen").hide();
    $("#second-screen").show();

    
    $("#selectedIsmAlbaladia").html( "</p>" + "بلدية " + $("#baladia").val() + "<p>");
    $("#selectedAlmoraqib").text($("#entryUserName").val());
    $("#selectedRaiesAlqism").text($("#raiesAlqism").val());
    $("#selectedRaiesAlbaladia").text($("#raiesAlbaladia").val());

});



// second screen buttons
$("#secondScreenNextButton").click(function(){

    $("#second-screen").hide();
    $("#third-screen").show();

    var hijrahDate = new HijrahDate();
    // console.log(hijrahDate);
    var date = hijrahDate._year + "/" + hijrahDate._monthOfYear + "/" + hijrahDate._dayOfMonth;

    // get the tari5AlraqamAlmoahad in hijri
    // var tari5AlraqamAlmoahad = new HijrahDate($("#tari5AlraqamAlmoahad").val());
    // var newTari5AlraqamAlmoahad = tari5AlraqamAlmoahad._year + "/" + tari5AlraqamAlmoahad._monthOfYear + "/" + tari5AlraqamAlmoahad._dayOfMonth;

    // // get tari5RaqamAlro5sa in hijri
    // var tari5RaqamAlro5sa = new HijrahDate($("#tari5RaqamAlro5sa").val());
    // var newTari5RaqamAlro5sa = tari5RaqamAlro5sa._year + "/" + tari5RaqamAlro5sa._monthOfYear + "/" + tari5RaqamAlro5sa._dayOfMonth;


    // all operations will done here
    $("#selectedAltaqrir").text("التقرير / " + $("#altaqrir").val());
    $("#selectedAltari5").text("التاريخ : " + curday('/') + " التاريخ الهجري : " + date);
    $("#selectedName").text($("#name").val());
    $("#selectedAlsegelAlmadaniOrAltogary").text($("#alsgilAlmadaniOrAltogary").val());
    $("#selectedAlraqamAlmoahad").text($("#alraqamAlmoahad").val());
    $("#selectedTari5AlraqamAlmoahad").text($("#tari5AlraqamAlmoahad").val()); //
    $("#selectedAlhai").text($("#alhai").val());
    $("#selectedRaqamAlqit3a").text($("#raqamAlqit3a").val());
    $("#selectedAlmo5atat").text($("#almo5atat").val());
    $("#selectedNo3Altaqrir").text($("#no3Altaqrir").val());
    $("#selectedAlmabna").text($("#no3Almabna").val());
    $("#selectedRaqamAlro5sa").text($("#raqamAlro5sa").val());
    $("#selectedTari5RaqamAlro5sa").text($("#tari5RaqamAlro5sa").val()); //
    $("#selectedRaqamAlitisal").text($("#raqamAltawasol").val());

});

$("#secondScreenPrevButton").click(function(){
    $("#first-screen").show();
    $("#second-screen").hide();
        
});

// third screen buttons

$("#thirdScreenNextButton").click(function(){
    $("#third-screen").hide();
    $("#fourth-screen").show();

    // all operations will done here
    $("#selectedRo5saHododNorth").text($("#hododShemalRo5sa").val());
    $("#selectedRo5saHododEast").text($("#hododSharqRo5sa").val());
    $("#selectedRo5saHododSouth").text($("#hododGanobRo5sa").val());
    $("#selectedRo5saHododWest").text($("#hododGharbRo5sa").val());

    $("#selectedRo5saAb3adNorth").text($("#ab3adShemalRo5sa").val());
    $("#selectedRo5saAb3adEast").text($("#ab3adSharqRo5sa").val());
    $("#selectedRo5saAb3adSouth").text($("#ab3adGanobRo5sa").val());
    $("#selectedRo5saAb3adWest").text($("#ab3adGharbRo5sa").val());
    
    $("#selectedTabi3aHododNorth").text($("#hododShemalRo5sa").val());
    $("#selectedTabi3aHododEast").text($("#hododSharqRo5sa").val());
    $("#selectedTabi3aHododSouth").text($("#hododGanobRo5sa").val());
    $("#selectedTabi3aHododWest").text($("#hododGharbRo5sa").val());

    $("#selectedTabi3aAb3adNorth").text($("#ab3adShemalTabe3a").val());
    $("#selectedTabi3aAb3adEast").text($("#ab3adSharqTabe3a").val());
    $("#selectedTabi3aAb3adSouth").text($("#ab3adGanobTabe3a").val());
    $("#selectedTabi3aAb3adWest").text($("#ab3adGharbTabe3a").val());
    
    // $("#selectedAlehdathiat").text($("#alehdathiat").val());

    // load the image into the bigger image preview
    var reader = new FileReader();
    reader.readAsDataURL(document.getElementById("alsoraAlkabira").files[0]);
    reader.onload = function (oFREvent) {
        document.getElementById("selectedBiggestImage").src = oFREvent.target.result;
    };
});

$("#thirdScreenPrevButton").click(function(){
    $("#second-screen").show();
    $("#third-screen").hide();
});


// fourth screen buttons

$("#fourthScreenNextButton").click(function(){
    $("#fourth-screen").hide();
    $("#fifth-screen").show();

    var innerNotes = $("#notes").val().replace('\n', '<br>');

    // all operations will done here
    $("#selectedComment1").text($("#image1Comment").val());
    $("#selectedComment2").text($("#image2Comment").val());
    $("#selectedComment3").text($("#image3Comment").val());
    $("#innerNoteSelected").html($("#notes").val().replace(/\n/g, '<br>'));

    var reade1 = new FileReader();
    reade1.readAsDataURL(document.getElementById("image1").files[0]);
    reade1.onload = function (oFREvent) {
        document.getElementById("selectedImage1").src = oFREvent.target.result;
    };

    var reader2 = new FileReader();
    reader2.readAsDataURL(document.getElementById("image2").files[0]);
    reader2.onload = function (oFREvent) {
        document.getElementById("selectedImage2").src = oFREvent.target.result;
    };

    var reader3 = new FileReader();
    reader3.readAsDataURL(document.getElementById("image3").files[0]);
    reader3.onload = function (oFREvent) {
        document.getElementById("selectedImage3").src = oFREvent.target.result;
    };
});

$("#fourthScreenPrevButton").click(function(){
    $("#third-screen").show();
    $("#fourth-screen").hide();
});

$("#fourthScreenPrintButton").click(function(){
    $("#fourth-screen").hide();
    $("#fifth-screen").show();

    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if(isIOS)
    {
        $("#selectedBiggestImage").height(250);
        $("#selectedImage1").height(250);
        $("#selectedImage2").height(250);
        $("#selectedImage3").height(250);
        $("table").css({'margin-top': '10px', 'margin-bottom': '10px'});
        $("#secondHeader").css({'margin-top': '20px', 'margin-bottom': '20px'});
        window.print();

    }
    else
    {
        window.print();
    }    

});

// fifth screen buttons

$("#fifthScreenPrintButton").click(function(){
    // var ua = navigator.userAgent.toLowerCase();
    // var isAndroid = ua.indexOf("android") > -1;
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if(isIOS)
    {
        $("#selectedBiggestImage").height(250);
        $("#selectedImage1").height(250);
        $("#selectedImage2").height(250);
        $("#selectedImage3").height(250);
        $("table").css({'margin-top': '10px', 'margin-bottom': '10px'});
        $("#secondHeader").css({'margin-top': '20px', 'margin-bottom': '20px'});
        window.print();

    }
    else
    {
        window.print();
    }
});

$("#fifthScreenPrevButton").click(function(){
    $("#fourth-screen").show();
    $("#fifth-screen").hide();
});
