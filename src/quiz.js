var name, age, gender, skinType, concern, interest, brand, skin, poll, expo, sleep;
var skinConcerns = [];
var isSensitive, pollution, isSunExposed, sleepHrs;
var count = 0;
var count3 = 0;
var count2 = 0;
var counter = 0;
document.getElementById("submit").disabled = true;
document.getElementById('restart').disabled = true;












// var input1 = document.getElementById("in1");
// input1.addEventListener("keyup", function (event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     document.getElementById("btn-1").click();
//   }
// });


function next1() {
  name = document.getElementById("in1").value;
  if (name.length != 0) {

    document.getElementById("dname").innerHTML = name;
    document.getElementById('dname').style.visibility = "visible";
    document.getElementById('in-col-1').remove();
    document.getElementById('waiting').style.visibility = "visible";

    setTimeout(function () {
      document.getElementById('waiting').remove();
      document.getElementById('quesname').style.visibility = "visible";
      document.getElementById("hdname").innerHTML = "Hello " + name + ", Welcome to GlaMat";
      document.getElementById('q2').style.visibility = "visible";
      document.getElementById('in-col-2').style.visibility = "visible";
      document.getElementById('progress-bar').style.width = "9%";
      document.getElementById('user-data').innerHTML = "Building Glam Profile for " + name;
    }, 2000);

  }

}




function next2(gender) {
  scroll = document.getElementById('right');
  scroll.scrollBy(0, 50);
  if (gender == 'male') {
    document.getElementById('user-image').src = maleGif;
    document.getElementById('progress').style.marginLeft = "150px";
  }
  else {
    document.getElementById('user-image').src = femaleGif;
    document.getElementById("progress").style.marginLeft = "150px";
  }


  document.getElementById('in-col-2').remove();
  document.getElementById("dgender").innerHTML = gender;
  document.getElementById('dgender').style.visibility = "visible";
  document.getElementById('waiting').style.visibility = "visible";
  setTimeout(function () {
    document.getElementById('waiting').remove();
    document.getElementById('q3').style.visibility = "visible";
    document.getElementById('in-col-3').style.visibility = "visible";
    document.getElementById('progress-bar').style.width = "18%";

  }, 2000);
}












// var input2 = document.getElementById("in3");
// input2.addEventListener("keyup", function (event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     document.getElementById("btn-3").click();
//   }
// });


function next3() {
  scroll = document.getElementById('right');
  scroll.scrollBy(0, 450);

  age = document.getElementById("in3").value;

  if (age.length != 0) {
    document.getElementById('in-col-3').remove();
    document.getElementById("dage").innerHTML = age;
    document.getElementById('dage').style.visibility = "visible";
    document.getElementById('waiting').style.visibility = "visible";

    setTimeout(function () {
      document.getElementById('waiting').remove();
      document.querySelector('body').style.zoom = '99%'
      document.getElementById('q4').style.visibility = "visible";
      document.getElementById('in-col-4').style.visibility = "visible";
      document.getElementById('progress-bar').style.width = "27%";
    }, 2000);
  }

}





function next4(type) {
  scroll = document.getElementById('right');
  setTimeout(() => {
    // alert("abc")
    scroll.scrollBy(0, -400);
    scroll.scrollBy(0, 400);
  }, 2050)

  document.getElementById('in-col-4').remove();

  document.getElementById("dtype").innerHTML = type;
  document.getElementById('dtype').style.visibility = "visible";
  document.getElementById('waiting').style.visibility = "visible";
  skinType = type;
  setTimeout(function () {
    document.getElementById('waiting').remove();
    scroll = document.getElementById('right');
    scroll.scrollBy(0, 100);
    document.getElementById('q5').style.visibility = "visible";
    document.getElementById('in-col-5').style.visibility = "visible";
    document.getElementById('btn-concern').style.visibility = "visible";
    document.getElementById('progress-bar').style.width = "36%";
  }, 2000);

}








//==========================select Restriction=========================//


function checker(count) {


  if (count == 3) {
    if ($('#check1').hasClass('selected')) {
      document.getElementById('check1').disabled = false;
    }
    else {
      document.getElementById('check1').disabled = true;
    }

    if ($('#check2').hasClass('selected')) {
      document.getElementById('check2').disabled = false;
    }
    else {
      document.getElementById('check2').disabled = true;
    }

    if ($('#check3').hasClass('selected')) {
      document.getElementById('check3').disabled = false;
    }
    else {
      document.getElementById('check3').disabled = true;
    }

    if ($('#check4').hasClass('selected')) {
      document.getElementById('check4').disabled = false;
    }
    else {
      document.getElementById('check4').disabled = true;
    }

    if ($('#check5').hasClass('selected')) {
      document.getElementById('check5').disabled = false;
    }
    else {
      document.getElementById('check5').disabled = true;
    }

    if ($('#check6').hasClass('selected')) {
      document.getElementById('check6').disabled = false;
    }
    else {
      document.getElementById('check6').disabled = true;
    }

    if ($('#check7').hasClass('selected')) {
      document.getElementById('check7').disabled = false;
    }
    else {
      document.getElementById('check7').disabled = true;
    }

    if ($('#check8').hasClass('selected')) {
      document.getElementById('check8').disabled = false;
    }
    else {
      document.getElementById('check8').disabled = true;
    }

    if ($('#check9').hasClass('selected')) {
      document.getElementById('check9').disabled = false;
    }
    else {
      document.getElementById('check9').disabled = true;
    }

    if ($('#check10').hasClass('selected')) {
      document.getElementById('check10').disabled = false;
    }
    else {
      document.getElementById('check10').disabled = true;
    }

    if ($('#check11').hasClass('selected')) {
      document.getElementById('check11').disabled = false;
    }
    else {
      document.getElementById('check11').disabled = true;
    }

    if ($('#check12').hasClass('selected')) {
      document.getElementById('check12').disabled = false;
    }
    else {
      document.getElementById('check12').disabled = true;
    }

    if ($('#check13').hasClass('selected')) {
      document.getElementById('check13').disabled = false;
    }
    else {
      document.getElementById('check13').disabled = true;
    }














  }




  else {
    if ($('#check1').hasClass('selected')) {

    }
    else {
      document.getElementById('check1').disabled = false;
    }

    if ($('#check2').hasClass('selected')) {

    }
    else {
      document.getElementById('check2').disabled = false;
    }

    if ($('#check3').hasClass('selected')) {

    }
    else {
      document.getElementById('check3').disabled = false;
    }

    if ($('#check4').hasClass('selected')) {

    }
    else {
      document.getElementById('check4').disabled = false;
    }

    if ($('#check5').hasClass('selected')) {

    }
    else {
      document.getElementById('check5').disabled = false;
    }

    if ($('#check6').hasClass('selected')) {

    }
    else {
      document.getElementById('check6').disabled = false;
    }

    if ($('#check7').hasClass('selected')) {

    }
    else {
      document.getElementById('check7').disabled = false;
    }

    if ($('#check8').hasClass('selected')) {

    }
    else {
      document.getElementById('check8').disabled = false;
    }

    if ($('#check9').hasClass('selected')) {

    }
    else {
      document.getElementById('check9').disabled = false;
    }

    if ($('#check10').hasClass('selected')) {

    }
    else {
      document.getElementById('check10').disabled = false;
    }

    if ($('#check11').hasClass('selected')) {

    }
    else {
      document.getElementById('check11').disabled = false;
    }

    if ($('#check12').hasClass('selected')) {

    }
    else {
      document.getElementById('check12').disabled = false;
    }

    if ($('#check13').hasClass('selected')) {

    }
    else {
      document.getElementById('check13').disabled = false;
    }

  }

}







//==========================select Restriction END=========================//






jQuery('#check1').click(function () {
  console.log("abc")
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";

    document.getElementById('check1').style.border = "2px solid #FF9676";
    count = count + 1;
    checker(count);

  }
  else {
    document.getElementById('check1').style.border = "2px solid grey";
    count = count - 1;
    checker(count);
  }
});


jQuery('#check2').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('check2').style.border = "2px solid #FF9676";
    count = count + 1;
    checker(count);

  }
  else {
    document.getElementById('check2').style.border = "2px solid grey";
    count = count - 1;
    checker(count);
  }
});


jQuery('#check3').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('check3').style.border = "2px solid #FF9676";
    count = count + 1;
    checker(count);

  }
  else {
    document.getElementById('check3').style.border = "2px solid grey";
    count = count - 1;
    checker(count);
  }
});

jQuery('#check4').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('check4').style.border = "2px solid #FF9676";
    count = count + 1;
    checker(count);

  }
  else {
    document.getElementById('check4').style.border = "2px solid grey";
    count = count - 1;
    checker(count);

  }
});

jQuery('#check5').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('check5').style.border = "2px solid #FF9676";
    count = count + 1;
    checker(count);


  }
  else {
    document.getElementById('check5').style.border = "2px solid grey";
    count = count - 1;
    checker(count);

  }
});

jQuery('#check6').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('check6').style.border = "2px solid #FF9676";
    count = count + 1;
    checker(count);


  }
  else {
    document.getElementById('check6').style.border = "2px solid grey";
    count = count - 1;
    checker(count);

  }
});

jQuery('#check7').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('check7').style.border = "2px solid #FF9676";
    count = count + 1;
    checker(count);


  }
  else {
    document.getElementById('check5').style.border = "2px solid grey";
    count = count - 1;
    checker(count);

  }
});

jQuery('#check8').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('check8').style.border = "2px solid #FF9676";
    count = count + 1;
    checker(count);

  }
  else {
    document.getElementById('check8').style.border = "2px solid grey";
    count = count - 1;
    checker(count);

  }
});

jQuery('#check9').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('check9').style.border = "2px solid #FF9676";
    count = count + 1;
    checker(count);


  }
  else {
    document.getElementById('check9').style.border = "2px solid grey";
    count = count - 1;
    checker(count);

  }
});

jQuery('#check10').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('check10').style.border = "2px solid #FF9676";
    count = count + 1;
    checker(count);


  }
  else {
    document.getElementById('check10').style.border = "2px solid grey";
    count = count - 1;
    checker(count);

  }
});


jQuery('#check11').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('check11').style.border = "2px solid #FF9676";
    count = count + 1;
    checker(count);

  }
  else {
    document.getElementById('check11').style.border = "2px solid grey";
    count = count - 1;
    checker(count);

  }
});


jQuery('#check12').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('check12').style.border = "2px solid #FF9676";
    count = count + 1;
    checker(count);


  }
  else {
    document.getElementById('check12').style.border = "2px solid grey";
    count = count - 1;
    checker(count);
  }
});

jQuery('#check13').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('check13').style.border = "2px solid #FF9676";
    count = count + 1;
    checker(count);


  }
  else {
    document.getElementById('check13').style.border = "2px solid grey";
    count = count - 1;
    checker(count);


  }
});








/*====================================================================*/




function next5() {
  scroll = document.getElementById('right');
  setTimeout(() => {
    // alert("abc")
    scroll.scrollBy(0, -400);
    scroll.scrollBy(0, 400);
  }, 2050)
  document.getElementById('in-col-5').remove();

  document.getElementById('dconcern').innerHTML = "Skin Concern selected !";
  document.getElementById('dconcern').style.visibility = "visible";
  $('#btn-concern').remove();
  document.getElementById('waiting').style.visibility = "visible";
  setTimeout(function () {
    document.getElementById('waiting').remove();
    scroll = document.getElementById('right');
    scroll.scrollBy(0, 200);
    document.getElementById('q6').style.visibility = "visible";
    document.getElementById('in-col-6').style.visibility = "visible";
    document.getElementById('btn-custom').style.visibility = "visible";
    document.getElementById('progress-bar').style.width = "45%";
  }, 2000);

}


















//============================check button in interest===================







function checking(counter) {


  if (counter == 1) {
    if ($('#btn-check1').hasClass('selected')) {
      document.getElementById('btn-check1').disabled = false;

    }
    else {
      document.getElementById('btn-check1').disabled = true;

    }



    if ($('#btn-check2').hasClass('selected')) {
      document.getElementById('btn-check2').disabled = false;
    }
    else {
      document.getElementById('btn-check2').disabled = true;
    }


    if ($('#btn-check3').hasClass('selected')) {
      document.getElementById('btn-check3').disabled = false;
    }
    else {

      document.getElementById('btn-check3').disabled = true;
    }




  }



  else {
    if ($('#btn-check1').hasClass('selected')) {

    }
    else {
      document.getElementById('btn-check1').disabled = false;
    }


    if ($('#btn-check2').hasClass('selected')) {

    }
    else {
      document.getElementById('btn-check2').disabled = false;
    }


    if ($('#btn-check3').hasClass('selected')) {

    }
    else {

      document.getElementById('btn-check3').disabled = false;

    }

  }

}


jQuery('#btn-check1').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";

    document.getElementById('btn-check1').style.border = "2px solid #FF9676";
    counter = counter + 1;
    checking(counter);

  }
  else {
    document.getElementById('btn-check1').style.border = "2px solid grey";
    counter = counter - 1;
    checking(counter);
  }
});





jQuery('#btn-check2').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";

    document.getElementById('btn-check2').style.border = "2px solid #FF9676";
    counter = counter + 1;
    checking(counter);

  }
  else {
    document.getElementById('btn-check2').style.border = "2px solid grey";
    counter = counter - 1;
    checking(counter);
  }
});
let selectedClickk = false
let unselectedClickk = false

jQuery('#btn-check3').click(function () {
  $(this).toggleClass('selected');
  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    scroll = document.getElementById('right');
    if(!selectedClickk){
      scroll.scrollBy(0, 120);
      selectedClickk = true
      unselectedClickk = false
    }

    document.getElementById('btn-check3').style.border = "2px solid #FF9676";
    document.getElementById('in-custom').style.display = "block";
    counter = counter + 1;
    checking(counter);
  }
  else {
    if(!unselectedClickk){
      scroll.scrollBy(0, -120);
      unselectedClickk = true
      selectedClickk = false
    }
    document.getElementById('btn-check3').style.border = "2px solid grey";
    document.getElementById('in-custom').style.display = "none";
    counter = counter - 1;
    checking(counter);
  }
});







// function selectall()
// {

//     $('#button-1').toggleClass('selected');

//     if( $('#button-1').hasClass('selected') ){
//       //data+="&overwrite=on";

//       //var butone = document.getElementById('button-1').value;
//       //alert(butone);

//     }

//     $('#button-2').toggleClass('selected');

//     if( $('#button-2').hasClass('selected') ){
//       //data+="&overwrite=on";

//       //var buttwo = document.getElementById('button-2').value;
//       //alert(buttwo);

//     }


//     $('#button-3').toggleClass('selected');

//     if( $('#button-3').hasClass('selected') ){
//       //data+="&overwrite=on";

//       //var butthree = document.getElementById('button-3').value;
//       //alert(butthree);

//     }


//     $('#button-4').toggleClass('selected');

//     if( $('#button-4').hasClass('selected') ){
//       //data+="&overwrite=on";

//       //var butfour = document.getElementById('button-4').value;
//       //alert(butfour);

//     }


// $('#button-5').toggleClass('selected');

//     if( $('#button-5').hasClass('selected') ){
//       //data+="&overwrite=on";

//       //var butfive = document.getElementById('button-5').value;
//       //alert(butfive);

//     }


// $('#button-6').toggleClass('selected');

//     if( $('#button-6').hasClass('selected') ){
//       //data+="&overwrite=on";

//       //var butsix = document.getElementById('button-6').value;
//       //alert(butsix);

//     }


// $('#button-7').toggleClass('selected');

//     if( $('#button-7').hasClass('selected') ){
//       //data+="&overwrite=on";

//       //var butseven = document.getElementById('button-7').value;
//       //alert(butseven);

//     }


// $('#button-8').toggleClass('selected');

//     if( $('#button-8').hasClass('selected') ){
//       //data+="&overwrite=on";

//       //var buteight = document.getElementById('button-8').value;
//       //alert(buteight);

//     }

// $('#button-9').toggleClass('selected');

//     if( $('#button-9').hasClass('selected') ){
//       //data+="&overwrite=on";

//       //var butnine = document.getElementById('button-9').value;
//       //alert(butnine);

//     }

// $('#button-10').toggleClass('selected');

//     if( $('#button-10').hasClass('selected') ){
//       //data+="&overwrite=on";

//       //var butten = document.getElementById('button-10').value;
//       //alert(butten);

//     }



// }

jQuery('#selectAlll').click(function () {
  console.log('abc')
  selectall()
});
function selectall() {



  if ($('#button-1').hasClass('selected')) {
    //data+="&overwrite=on";

    //var butone = document.getElementById('button-1').value;
    //alert(butone);

  }
  else {
    $('#button-1').toggleClass('selected');
  }


  if ($('#button-2').hasClass('selected')) {
    //data+="&overwrite=on";

    //var butone = document.getElementById('button-2').value;
    //alert(butone);

  }
  else {
    $('#button-2').toggleClass('selected');
  }


  if ($('#button-3').hasClass('selected')) {
    //data+="&overwrite=on";

    //var butone = document.getElementById('button-3').value;
    //alert(butone);

  }
  else {
    $('#button-3').toggleClass('selected');
  }


  if ($('#button-4').hasClass('selected')) {
    //data+="&overwrite=on";

    //var butone = document.getElementById('button-4').value;
    //alert(butone);

  }
  else {
    $('#button-4').toggleClass('selected');
  }


  if ($('#button-5').hasClass('selected')) {
    //data+="&overwrite=on";

    //var butone = document.getElementById('button-5').value;
    //alert(butone);

  }
  else {
    $('#button-5').toggleClass('selected');
  }


  if ($('#button-6').hasClass('selected')) {
    //data+="&overwrite=on";

    //var butone = document.getElementById('button-6').value;
    //alert(butone);

  }
  else {
    $('#button-6').toggleClass('selected');
  }


  if ($('#button-7').hasClass('selected')) {
    //data+="&overwrite=on";

    //var butone = document.getElementById('button-7').value;
    //alert(butone);

  }
  else {
    $('#button-7').toggleClass('selected');
  }


  if ($('#button-8').hasClass('selected')) {
    //data+="&overwrite=on";

    //var butone = document.getElementById('button-8').value;
    //alert(butone);

  }
  else {
    $('#button-8').toggleClass('selected');
  }


  if ($('#button-9').hasClass('selected')) {
    //data+="&overwrite=on";

    //var butone = document.getElementById('button-9').value;
    //alert(butone);

  }
  else {
    $('#button-9').toggleClass('selected');
  }


  if ($('#button-10').hasClass('selected')) {
    //data+="&overwrite=on";

    //var butone = document.getElementById('button-10').value;
    //alert(butone);

  }
  else {
    $('#button-10').toggleClass('selected');
  }





}




function next6() {

  if ($('#btn-check1').hasClass('selected')) {
    interest = document.getElementById('btn-check1').value;
    document.getElementById('in-col-6').remove();
    $('#btn-custom').remove();
    document.getElementById("dinterest").innerHTML = interest;
    document.getElementById('dinterest').style.visibility = "visible";
    document.getElementById('waiting').style.visibility = "visible";
    setTimeout(function () {
      document.getElementById('waiting').remove();
      document.getElementById('q7').style.visibility = "visible";
      document.getElementById('in-col-7').style.visibility = "visible";
      document.getElementById('progress-bar').style.width = "54%";
    }, 2000);
  }
  else if ($('#btn-check2').hasClass('selected')) {
    interest = document.getElementById('btn-check2').value;
    document.getElementById('in-col-6').remove();
    $('#btn-custom').remove();
    document.getElementById("dinterest").innerHTML = interest;
    document.getElementById('dinterest').style.visibility = "visible";
    document.getElementById('waiting').style.visibility = "visible";
    setTimeout(function () {
      document.getElementById('waiting').remove();
      document.getElementById('q7').style.visibility = "visible";
      document.getElementById('in-col-7').style.visibility = "visible";
      document.getElementById('progress-bar').style.width = "54%";
    }, 2000);
  }
  else if ($('#btn-check3').hasClass('selected')) {
    interest = document.getElementById('btn-check3').value;
    document.getElementById('in-col-6').remove();
    document.getElementById('in-custom').remove();
    $('#btn-custom').remove();
    document.getElementById('dinterest').innerHTML = interest;
    document.getElementById('dinterest').style.visibility = "visible";
    document.getElementById('waiting').style.visibility = "visible";
    setTimeout(function () {
      document.getElementById('waiting').remove();
      document.getElementById('q7').style.visibility = "visible";
      document.getElementById('in-col-7').style.visibility = "visible";
      document.getElementById('progress-bar').style.width = "54%";
    }, 2000);
  }


}






//============================check button in interest END===================




function next7(brand) {

  document.getElementById('in-col-7').remove();

  document.getElementById("dbrand").innerHTML = brand;
  document.getElementById('dbrand').style.visibility = "visible";
  document.getElementById('waiting').style.visibility = "visible";
  setTimeout(function () {
    scroll = document.getElementById('right');
    scroll.scrollBy(0, 100);
    document.getElementById('waiting').remove();
    document.getElementById('q8').style.visibility = "visible";
    document.getElementById('in-col-img').style.visibility = "visible";
    document.getElementById('in-col-8').style.visibility = "visible";
    document.getElementById('progress-bar').style.width = "63%";
  }, 2000);

}


function next8(skin) {
  scroll = document.getElementById('right');
  setTimeout(() => {
    // alert("abc")
    scroll.scrollBy(0, -400);
    scroll.scrollBy(0, 400);
  }, 2050)
  if (skin === 'Yes')
    isSensitive = true;
  else if (skin === 'No')
    isSensitive = false;

  document.getElementById('in-col-8').remove();
  document.getElementById('in-col-img').remove();

  document.getElementById("dskin").innerHTML = skin;
  document.getElementById('dskin').style.visibility = "visible";
  document.getElementById('waiting').style.visibility = "visible";
  setTimeout(function () {
    document.getElementById('waiting').remove();
    scroll = document.getElementById('right');
    scroll.scrollBy(0, 100);
    document.getElementById('q9').style.visibility = "visible";
    document.getElementById('in-col-9').style.visibility = "visible";
    document.getElementById('progress-bar').style.width = "72%";
  }, 2000);

}

function next9(poll) {
  scroll = document.getElementById('right');
  setTimeout(() => {
    // alert("abc")
    scroll.scrollBy(0, -400);
    scroll.scrollBy(0, 400);
  }, 2050)
  pollution = poll;

  document.getElementById('in-col-9').remove();

  document.getElementById("dpol").innerHTML = poll;
  document.getElementById('dpol').style.visibility = "visible";
  document.getElementById('waiting').style.visibility = "visible";
  setTimeout(function () {
    document.getElementById('waiting').remove();
    scroll = document.getElementById('right');
    scroll.scrollBy(0, 100);
    document.getElementById('q10').style.visibility = "visible";
    document.getElementById('in-col-10').style.visibility = "visible";
    document.getElementById('progress-bar').style.width = "81%";
  }, 2000);

}




function next10(expo) {
  if (expo === 'Yes')
    isSunExposed = true;
  else if (expo === 'No')
    isSunExposed = false;

  document.getElementById('in-col-10').remove();

  document.getElementById("dexpo").innerHTML = expo;
  document.getElementById('dexpo').style.visibility = "visible";
  document.getElementById('waiting').style.visibility = "visible";
  setTimeout(function () {
    document.getElementById('waiting').remove();
    scroll = document.getElementById('right');
    scroll.scrollBy(0, 100);
    document.getElementById('q11').style.visibility = "visible";
    document.getElementById('in-col-11').style.visibility = "visible";
    document.getElementById('progress-bar').style.width = "90%";
  }, 2000);

}


function next11(sleep) {
  sleepHrs = sleep;
  scroll = document.getElementById('right');
  scroll.scrollBy(0, 100);
  document.getElementById('in-col-11').remove();

  document.getElementById("dsleep").innerHTML = sleep;
  document.getElementById('dsleep').style.visibility = "visible";
  document.getElementById('waiting').style.visibility = "visible";
  setTimeout(function () {
    document.getElementById('waiting').remove();
    document.getElementById('submit').style.visibility = "visible";
    document.getElementById('restart').style.visibility = "visible";
    document.getElementById("submit").disabled = false;
    document.getElementById("restart").disabled = false;
    document.getElementById('progress-bar').style.width = "100%";

  }, 2000);

}



















































//===========================Button with in button===============================


jQuery('#button-1').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";

    //var butone = document.getElementById('button-1').value;
    //alert(butone);

  }

});

jQuery('#button-2').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";

    //var buttwo = document.getElementById('button-2').value;
    //alert(buttwo);

  }

});

jQuery('#button-3').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";

    //var butthree = document.getElementById('button-3').value;
    //alert(butthree);

  }

});


jQuery('#button-4').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";

    //var butfour = document.getElementById('button-4').value;
    //alert(butfour);

  }

});

jQuery('#button-5').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";

    //var butfive = document.getElementById('button-5').value;
    //alert(butfive);

  }

});

jQuery('#button-6').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";

    //var butsix = document.getElementById('button-6').value;
    //alert(butsix);

  }

});


jQuery('#button-7').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";

    //var butseven = document.getElementById('button-7').value;
    //alert(butseven);

  }

});


jQuery('#button-8').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";

    //var buteight = document.getElementById('button-8').value;
    //alert(buteight);

  }

});


jQuery('#button-9').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";

    //var butnine = document.getElementById('button-9').value;
    //alert(butnine);

  }

});



jQuery('#button-10').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";

    //var butten = document.getElementById('button-10').value;
    //alert(butten);

  }

});

function concernHandler(concern) {
  skinConcerns.push(concern);
}

function submitHandler() {

//   var formData = new FormData();
//   formData.append("skinType", skinType);
//   formData.append("skinConcerns", JSON.stringify(skinConcerns));
//   formData.append("age", age);
//   formData.append("isSensitive", isSensitive);
//   formData.append("sleepHrs", sleepHrs);
//   formData.append("isSunExposed", isSunExposed);
//   formData.append("pollution", pollution);
//   var xhttp = new XMLHttpRequest();

//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       var response = JSON.parse(this.response);
//       setCookie("skinType", response['skinType'], 1);
//       setCookie("skinConcerns", response['skinConcerns'], 1);
//       setCookie("age", response['age'], 1);
//       setCookie("isSensitive", response['isSensitive'], 1);
//       setCookie("sleepHrs", response['sleepHrs'], 1);
//       setCookie("isSunExposed", response['isSunExposed'], 1);
//       setCookie("pollution", response['pollution'], 1);
//       if (response['authenticated'])
//         window.location = '/suggestions';
//       else
//         window.location = '/signup/?quiz=1';
//     }
//   };
//   xhttp.open("POST", '/quiz-submit/ ', true);
//   xhttp.setRequestHeader("X-CSRFToken", csrftoken);
//   xhttp.send(formData);

}
//========================================================================================

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// next1()
// next2()
// next3()
// next4()
// next5()
// next6()
// next7()
// next8()
// nex

document.documentElement.addEventListener('touchmove', function (event) {
  event.preventDefault();
}, false);



//skdhasuidhasidasids



function checker2(count) {


  if (count == 3) {
    if ($('#checktwo1').hasClass('selected')) {
      document.getElementById('checktwo1').disabled = false;
    }
    else {
      document.getElementById('checktwo1').disabled = true;
    }

    if ($('#checktwo2').hasClass('selected')) {
      document.getElementById('checktwo2').disabled = false;
    }
    else {
      document.getElementById('checktwo2').disabled = true;
    }

    if ($('#checktwo3').hasClass('selected')) {
      document.getElementById('checktwo3').disabled = false;
    }
    else {
      document.getElementById('checktwo3').disabled = true;
    }

    if ($('#checktwo4').hasClass('selected')) {
      document.getElementById('checktwo4').disabled = false;
    }
    else {
      document.getElementById('checktwo4').disabled = true;
    }

    if ($('#checktwo5').hasClass('selected')) {
      document.getElementById('checktwo5').disabled = false;
    }
    else {
      document.getElementById('checktwo5').disabled = true;
    }

    if ($('#checktwo6').hasClass('selected')) {
      document.getElementById('checktwo6').disabled = false;
    }
    else {
      document.getElementById('checktwo6').disabled = true;
    }

    if ($('#checktwo7').hasClass('selected')) {
      document.getElementById('checktwo7').disabled = false;
    }
    else {
      document.getElementById('checktwo7').disabled = true;
    }

    if ($('#checktwo8').hasClass('selected')) {
      document.getElementById('checktwo8').disabled = false;
    }
    else {
      document.getElementById('checktwo8').disabled = true;
    }

    if ($('#checktwo9').hasClass('selected')) {
      document.getElementById('checktwo9').disabled = false;
    }
    else {
      document.getElementById('checktwo9').disabled = true;
    }

    if ($('#checktwo10').hasClass('selected')) {
      document.getElementById('checktwo10').disabled = false;
    }
    else {
      document.getElementById('checktwo10').disabled = true;
    }

    if ($('#checktwo11').hasClass('selected')) {
      document.getElementById('checktwo11').disabled = false;
    }
    else {
      document.getElementById('checktwo11').disabled = true;
    }

    if ($('#checktwo12').hasClass('selected')) {
      document.getElementById('checktwo12').disabled = false;
    }
    else {
      document.getElementById('checktwo12').disabled = true;
    }

    if ($('#checktwo13').hasClass('selected')) {
      document.getElementById('checktwo13').disabled = false;
    }
    else {
      document.getElementById('checktwo13').disabled = true;
    }














  }




  else {
    if ($('#checktwo1').hasClass('selected')) {

    }
    else {
      document.getElementById('checktwo1').disabled = false;
    }

    if ($('#checktwo2').hasClass('selected')) {

    }
    else {
      document.getElementById('checktwo2').disabled = false;
    }

    if ($('#checktwo3').hasClass('selected')) {

    }
    else {
      document.getElementById('checktwo3').disabled = false;
    }

    if ($('#checktwo4').hasClass('selected')) {

    }
    else {
      document.getElementById('checktwo4').disabled = false;
    }

    if ($('#checktwo5').hasClass('selected')) {

    }
    else {
      document.getElementById('checktwo5').disabled = false;
    }

    if ($('#checktwo6').hasClass('selected')) {

    }
    else {
      document.getElementById('checktwo6').disabled = false;
    }

    if ($('#checktwo7').hasClass('selected')) {

    }
    else {
      document.getElementById('checktwo7').disabled = false;
    }

    if ($('#checktwo8').hasClass('selected')) {

    }
    else {
      document.getElementById('checktwo8').disabled = false;
    }

    if ($('#checktwo9').hasClass('selected')) {

    }
    else {
      document.getElementById('checktwo9').disabled = false;
    }

    if ($('#checktwo10').hasClass('selected')) {

    }
    else {
      document.getElementById('checktwo10').disabled = false;
    }

    if ($('#checktwo11').hasClass('selected')) {

    }
    else {
      document.getElementById('checktwo11').disabled = false;
    }

    if ($('#checktwo12').hasClass('selected')) {

    }
    else {
      document.getElementById('checktwo12').disabled = false;
    }

    if ($('#checktwo13').hasClass('selected')) {

    }
    else {
      document.getElementById('checktwo13').disabled = false;
    }

  }

}







//==========================select Restriction END=========================//






jQuery('#checktwo1').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";

    document.getElementById('checktwo1').style.border = "2px solid #FF9676";
    count2 = count2 + 1;
    checker2(count2);

  }
  else {
    document.getElementById('checktwo1').style.border = "2px solid grey";
    count2 = count2 - 1;
    checker2(count2);
  }
});


jQuery('#checktwo2').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checktwo2').style.border = "2px solid #FF9676";
    count2 = count2 + 1;
    checker2(count2);

  }
  else {
    document.getElementById('checktwo2').style.border = "2px solid grey";
    count2 = count2 - 1;
    checker2(count2);
  }
});


jQuery('#checktwo3').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checktwo3').style.border = "2px solid #FF9676";
    count2 = count2 + 1;
    checker2(count2);

  }
  else {
    document.getElementById('checktwo3').style.border = "2px solid grey";
    count2 = count2 - 1;
    checker2(count2);
  }
});

jQuery('#checktwo4').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checktwo4').style.border = "2px solid #FF9676";
    count2 = count2 + 1;
    checker2(count2);

  }
  else {
    document.getElementById('checktwo4').style.border = "2px solid grey";
    count2 = count2 - 1;
    checker2(count2);

  }
});

jQuery('#checktwo5').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checktwo5').style.border = "2px solid #FF9676";
    count2 = count2 + 1;
    checker2(count2);


  }
  else {
    document.getElementById('checktwo5').style.border = "2px solid grey";
    count2 = count2 - 1;
    checker2(count2);

  }
});

jQuery('#checktwo6').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checktwo6').style.border = "2px solid #FF9676";
    count2 = count2 + 1;
    checker2(count2);


  }
  else {
    document.getElementById('checktwo6').style.border = "2px solid grey";
    count2 = count2 - 1;
    checker2(count2);

  }
});

jQuery('#checktwo7').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checktwo7').style.border = "2px solid #FF9676";
    count2 = count2 + 1;
    checker2(count2);


  }
  else {
    document.getElementById('checktwo5').style.border = "2px solid grey";
    count2 = count2 - 1;
    checker2(count2);

  }
});

jQuery('#checktwo8').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checktwo8').style.border = "2px solid #FF9676";
    count2 = count2 + 1;
    checker2(count2);

  }
  else {
    document.getElementById('checktwo8').style.border = "2px solid grey";
    count2 = count2 - 1;
    checker2(count2);

  }
});

jQuery('#checktwo9').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checktwo9').style.border = "2px solid #FF9676";
    count2 = count2 + 1;
    checker2(count2);


  }
  else {
    document.getElementById('checktwo9').style.border = "2px solid grey";
    count2 = count2 - 1;
    checker2(count2);

  }
});

jQuery('#checktwo10').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checktwo10').style.border = "2px solid #FF9676";
    count2 = count2 + 1;
    checker2(count2);


  }
  else {
    document.getElementById('checktwo10').style.border = "2px solid grey";
    count2 = count2 - 1;
    checker2(count2);

  }
});


jQuery('#checktwo11').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checktwo11').style.border = "2px solid #FF9676";
    count2 = count2 + 1;
    checker2(count2);

  }
  else {
    document.getElementById('checktwo11').style.border = "2px solid grey";
    count2 = count2 - 1;
    checker2(count2);

  }
});


jQuery('#checktwo12').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checktwo12').style.border = "2px solid #FF9676";
    count2 = count2 + 1;
    checker2(count2);


  }
  else {
    document.getElementById('checktwo12').style.border = "2px solid grey";
    count2 = count2 - 1;
    checker2(count2);
  }
});

jQuery('#checktwo13').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checktwo13').style.border = "2px solid #FF9676";
    count2 = count2 + 1;
    checker2(count2);


  }
  else {
    document.getElementById('checktwo13').style.border = "2px solid grey";
    count2 = count2 - 1;
    checker2(count2);


  }
});




function checker3(count) {


  if (count == 3) {
    if ($('#checkkk1').hasClass('selected')) {
      document.getElementById('checkkk1').disabled = false;
    }
    else {
      document.getElementById('checkkk1').disabled = true;
    }

    if ($('#checkkk2').hasClass('selected')) {
      document.getElementById('checkkk2').disabled = false;
    }
    else {
      document.getElementById('checkkk2').disabled = true;
    }

    if ($('#checkkk3').hasClass('selected')) {
      document.getElementById('checkkk3').disabled = false;
    }
    else {
      document.getElementById('checkkk3').disabled = true;
    }

    if ($('#checkkk4').hasClass('selected')) {
      document.getElementById('checkkk4').disabled = false;
    }
    else {
      document.getElementById('checkkk4').disabled = true;
    }

    if ($('#checkkk5').hasClass('selected')) {
      document.getElementById('checkkk5').disabled = false;
    }
    else {
      document.getElementById('checkkk5').disabled = true;
    }

    if ($('#checkkk6').hasClass('selected')) {
      document.getElementById('checkkk6').disabled = false;
    }
    else {
      document.getElementById('checkkk6').disabled = true;
    }

    if ($('#checkkk7').hasClass('selected')) {
      document.getElementById('checkkk7').disabled = false;
    }
    else {
      document.getElementById('checkkk7').disabled = true;
    }

    if ($('#checkkk8').hasClass('selected')) {
      document.getElementById('checkkk8').disabled = false;
    }
    else {
      document.getElementById('checkkk8').disabled = true;
    }

    if ($('#checkkk9').hasClass('selected')) {
      document.getElementById('checkkk9').disabled = false;
    }
    else {
      document.getElementById('checkkk9').disabled = true;
    }

    if ($('#checkkk10').hasClass('selected')) {
      document.getElementById('checkkk10').disabled = false;
    }
    else {
      document.getElementById('checkkk10').disabled = true;
    }

    if ($('#checkkk11').hasClass('selected')) {
      document.getElementById('checkkk11').disabled = false;
    }
    else {
      document.getElementById('checkkk11').disabled = true;
    }

    if ($('#checkkk12').hasClass('selected')) {
      document.getElementById('checkkk12').disabled = false;
    }
    else {
      document.getElementById('checkkk12').disabled = true;
    }

    if ($('#checkkk13').hasClass('selected')) {
      document.getElementById('checkkk13').disabled = false;
    }
    else {
      document.getElementById('checkkk13').disabled = true;
    }














  }




  else {
    if ($('#checkkk1').hasClass('selected')) {

    }
    else {
      document.getElementById('checkkk1').disabled = false;
    }

    if ($('#checkkk2').hasClass('selected')) {

    }
    else {
      document.getElementById('checkkk2').disabled = false;
    }

    if ($('#checkkk3').hasClass('selected')) {

    }
    else {
      document.getElementById('checkkk3').disabled = false;
    }

    if ($('#checkkk4').hasClass('selected')) {

    }
    else {
      document.getElementById('checkkk4').disabled = false;
    }

    if ($('#checkkk5').hasClass('selected')) {

    }
    else {
      document.getElementById('checkkk5').disabled = false;
    }

    if ($('#checkkk6').hasClass('selected')) {

    }
    else {
      document.getElementById('checkkk6').disabled = false;
    }

    if ($('#checkkk7').hasClass('selected')) {

    }
    else {
      document.getElementById('checkkk7').disabled = false;
    }

    if ($('#checkkk8').hasClass('selected')) {

    }
    else {
      document.getElementById('checkkk8').disabled = false;
    }

    if ($('#checkkk9').hasClass('selected')) {

    }
    else {
      document.getElementById('checkkk9').disabled = false;
    }

    if ($('#checkkk10').hasClass('selected')) {

    }
    else {
      document.getElementById('checkkk10').disabled = false;
    }

    if ($('#checkkk11').hasClass('selected')) {

    }
    else {
      document.getElementById('checkkk11').disabled = false;
    }

    if ($('#checkkk12').hasClass('selected')) {

    }
    else {
      document.getElementById('checkkk12').disabled = false;
    }

    if ($('#checkkk13').hasClass('selected')) {

    }
    else {
      document.getElementById('checkkk13').disabled = false;
    }

  }

}







//==========================select Restriction END=========================//






jQuery('#checkkk1').click(function () {
  console.log("abc")
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";

    document.getElementById('checkkk1').style.border = "2px solid #FF9676";
    count = count + 1;
    checker3(count3);

  }
  else {
    document.getElementById('checkkk1').style.border = "2px solid grey";
    count = count - 1;
    checker3(count3);
  }
});


jQuery('#checkkk2').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checkkk2').style.border = "2px solid #FF9676";
    count = count + 1;
    checker3(count3);

  }
  else {
    document.getElementById('checkkk2').style.border = "2px solid grey";
    count = count - 1;
    checker3(count3);
  }
});


jQuery('#checkkk3').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checkkk3').style.border = "2px solid #FF9676";
    count = count + 1;
    checker3(count3);

  }
  else {
    document.getElementById('checkkk3').style.border = "2px solid grey";
    count = count - 1;
    checker3(count3);
  }
});

jQuery('#checkkk4').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checkkk4').style.border = "2px solid #FF9676";
    count = count + 1;
    checker3(count3);

  }
  else {
    document.getElementById('checkkk4').style.border = "2px solid grey";
    count = count - 1;
    checker3(count3);

  }
});

jQuery('#checkkk5').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checkkk5').style.border = "2px solid #FF9676";
    count = count + 1;
    checker3(count3);


  }
  else {
    document.getElementById('checkkk5').style.border = "2px solid grey";
    count = count - 1;
    checker3(count3);

  }
});

jQuery('#checkkk6').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checkkk6').style.border = "2px solid #FF9676";
    count = count + 1;
    checker3(count3);


  }
  else {
    document.getElementById('checkkk6').style.border = "2px solid grey";
    count = count - 1;
    checker3(count3);

  }
});

jQuery('#checkkk7').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checkkk7').style.border = "2px solid #FF9676";
    count = count + 1;
    checker3(count3);


  }
  else {
    document.getElementById('check5').style.border = "2px solid grey";
    count = count - 1;
    checker3(count3);

  }
});

jQuery('#checkkk8').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checkkk8').style.border = "2px solid #FF9676";
    count = count + 1;
    checker3(count3);

  }
  else {
    document.getElementById('checkkk8').style.border = "2px solid grey";
    count = count - 1;
    checker3(count3);

  }
});

jQuery('#checkkk9').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checkkk9').style.border = "2px solid #FF9676";
    count = count + 1;
    checker3(count3);


  }
  else {
    document.getElementById('checkkk9').style.border = "2px solid grey";
    count = count - 1;
    checker3(count3);

  }
});

jQuery('#checkkk10').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checkkk10').style.border = "2px solid #FF9676";
    count = count + 1;
    checker3(count3);


  }
  else {
    document.getElementById('checkkk10').style.border = "2px solid grey";
    count = count - 1;
    checker3(count3);

  }
});


jQuery('#checkkk11').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checkkk11').style.border = "2px solid #FF9676";
    count = count + 1;
    checker3(count3);

  }
  else {
    document.getElementById('checkkk11').style.border = "2px solid grey";
    count = count - 1;
    checker3(count3);

  }
});


jQuery('#checkkk12').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checkkk12').style.border = "2px solid #FF9676";
    count = count + 1;
    checker3(count3);


  }
  else {
    document.getElementById('checkkk12').style.border = "2px solid grey";
    count = count - 1;
    checker3(count3);
  }
});

jQuery('#checkkk13').click(function () {
  $(this).toggleClass('selected');

  if ($(this).hasClass('selected')) {
    //data+="&overwrite=on";
    document.getElementById('checkkk13').style.border = "2px solid #FF9676";
    count = count + 1;
    checker3(count3);


  }
  else {
    document.getElementById('checkkk13').style.border = "2px solid grey";
    count = count - 1;
    checker3(count3);


  }
});


