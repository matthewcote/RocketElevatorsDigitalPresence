// Utilitiy Functions

var verify = function (val) {
  // returns true if number is valid, false if number is invalid
  if (val === 0) {
    return false;
  }
  if (val <= 0) {
    return false;
  }
  if (val % 1 != 0) {
    return false;
  }
  return true;
};

var service = function (product) {
  //returns string value of service choice
  var price = 0;
  if (product === "Standard") {
    price = 7565;
  }
  if (product === "Premium") {
    price = 12345;
  }
  if (product === "Excelium") {
    price = 15400;
  }
  return price;
};

var install = function (price) {
  // returns the percentage for installation depending on price
  var inst = 0;
  if (price === 7565) {
    inst = 0.1;
  }
  if (price === 12345) {
    inst = 0.13;
  }
  if (price === 15400) {
    inst = 0.16;
  }
  return inst;
};

var plural = function (num, message) {
  // takes a number and a string, and returns 1 string if 1, plural strings if more than one.
  var x;
  if (num === 1) {
    x = "1 ";
    message = x + message;
    return message;
  }
  if (num > 1) {
    x = num + " ";
    message = x + message + "s";
    return message;
  }
};

// main functions - collects input, input verification, performs all calculations,presents instructions or results to user. 

var res = function () {
  
  //establish jQuery collections
  var $aptnum = $("#aptnum");
  var $flrnum = $("#flrnum");
  var $bsnum = $("#bsnum");

  //pass values of jQuery collection to variables
  var apt = Number($aptnum.val());
  var flr = Number($flrnum.val());
  var bs = Number($bsnum.val());
  var res = $("input[name=resproduct]:checked", "#resform").val();
  var price = service(res);

  var avg = Math.ceil(apt / flr);
  var shafts = Math.ceil(avg / 6);
  var col = Math.ceil(flr / 20);
  shaft = shafts * col;
  var inst = install(price);
  var x = shaft * price * inst;
  var y = shaft * price;
  var z = x + y;
  //code sourced from stack overflow https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
  x = x.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  y = y.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  z = z.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  price = price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  //code sourced from stack overflow https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string

  //call input verification functions - if a variable passes. perform calculation and change label --> else --> change label
  if (verify(apt)) {
   
    if (verify(flr)) {
      
      if (verify(bs)) {
        
        $("#labelresquote").html(
          "Based on your input, your proposed building should need " +
            plural(col, "column") +
            ". Each column will need " +
            plural(shafts, "elevator shaft") +
            ". For a total of " +
            plural(shaft, "elevator shaft") +
            ".<br><br>The price of each " +
            res +
            " elevator is " +
            "$" +
            price +
            "<br>" +
            plural(shaft, "elevator shaft") +
            " X $" +
            price +
            " = $" +
            y +
            "<br>" +
            "The installation fee is " +
            inst * 100 +
            "%  =  $" +
            x +
            "<br><br>The total estimated " +
            "cost of this project is $" +
            z
        );
      } else {
        $("#labelresquote").text(
          "We need the number of basements that are planned for your residential building. Input must be a positive integer."
        );
      }
    } else {
      $("#labelresquote").text(
        "We need the number of floors that are planned for your residential building. Input must be a positive integer."
      );
    }
  } else {
    $("#labelresquote").text(
      "We need the number of apartments that are planned for your residential building. Input must be a positive integer."
    );
  }
};

var com = function () {

  //establish jQuery collections
  var $combiz = $("#combiz");
  var $comflrs = $("#comflrs");
  var $combs = $("#combs");
  var $comspcs = $("#comspcs");
  var $comcgs = $("#comcgs");

  //pass values of jQuery collection to value
  var biz = Number($combiz.val());
  var flr = Number($comflrs.val());
  var bs = Number($combs.val());
  var spcs = Number($comspcs.val());
  var cgs = Number($comcgs.val());
  var com = $("input[name=comproduct]:checked", "#comform").val();
  var price = service(com);
  var inst = install(price);
  var x = cgs * price * inst;
  var y = cgs * price;
  z = x + y;
  //code sourced from stack overflow https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
  x = x.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  y = y.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  z = z.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  price = price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  //code sourced from stack overflow https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string

  //call input verification functions - if a variable passes. perform calculation and change label --> else --> change label
  if (verify(biz)) {
  
    if (verify(flr)) {

      if (verify(bs)) {

        if (verify(spcs)) {

          if (verify(cgs)) {

            $("#labelcomquote").html(
              "Based on your input, your proposed building should need " +
                plural(cgs, "elevator") +
                ".<br><br>" +
                "The price of each " +
                com +
                " elevator is " +
                "$" +
                price +
                "<br>" +
                plural(cgs, "elevator shaft") +
                " X $" +
                price +
                " = $" +
                y +
                "<br>" +
                "The installation fee is " +
                inst * 100 +
                "%  =  $" +
                x +
                "<br><br>The total estimated " +
                "cost of this project is $" +
                z
            );
          } else {
            $("#labelcomquote").text(
              "We need the number of elevator cages that are planned for your commercial building. Input must be a positive integer."
            );
          }
        } else {
          $("#labelcomquote").text(
            "We need the number of parking spaces that are planned for your commercial building. Input must be a positive integer."
          );
        }
      } else {
        $("#labelcomquote").text(
          "We need the number of basements that are planned for your commercial building. Input must be a positive integer."
        );
      }
    } else {
      $("#labelcomquote").text(
        "We need the number of floors that are planned for your commercial building. Input must be a positive integer."
      );
    }
  } else {
    $("#labelcomquote").text(
      "We need the number of distinct businesses that are planned for your commercial building. Input must be a positive integer."
    );
  }
};

var cor = function () {
  
 //establish jQuery collections
  var $corbiz = $("#corbiz");
  var $corflrs = $("#corflrs");
  var $corbs = $("#corbs");
  var $corspcs = $("#corspcs");
  var $cormax = $("#cormax");

  //pass values of jQuery collection to value
  var biz = Number($corbiz.val());
  var flr = Number($corflrs.val());
  var bs = Number($corbs.val());
  var spcs = Number($corspcs.val());
  var max = Number($cormax.val());
  var cor = $("input[name=corproduct]:checked", "#corform").val();
  var price = service(cor);
  var cgs = Math.ceil((max * (flr + bs)) / 1000);
  var inst = install(price);
  var x = cgs * price * inst;
  var y = cgs * price;
  z = x + y;

  //code sourced from stack overflow https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
  x = x.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  y = y.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  z = z.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  price = price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  //code sourced from stack overflow https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string

  //call input verification functions - if a variable passes. perform calculation and change label --> else --> change label
  if (verify(biz)) {
 
    if (verify(flr)) {

      if (verify(bs)) {

        if (verify(spcs)) {

          if (verify(max)) {

            $("#labelcorquote").html(
              "Based on your input, your proposed building should need " +
                plural(cgs, "elevator") +
                ".<br><br>" +
                "The price of each " +
                cor +
                " elevator is " +
                "$" +
                price +
                "<br>" +
                plural(cgs, "elevator shaft") +
                " X $" +
                price +
                " = $" +
                y +
                "<br>" +
                "The installation fee is " +
                inst * 100 +
                "%  =  $" +
                x +
                "<br><br>The total estimated " +
                "cost of this project is $" +
                z
            );
          } else {
            $("#labelcorquote").text(
              "We need the maximum number of occupants per floor that are planned for your corporate building. Input must be a positive integer."
            );
          }
        } else {
          $("#labelcorquote").text(
            "We need the number of parking spaces that are planned for your corporate building. Input must be a positive integer."
          );
        }
      } else {
        $("#labelcorquote").text(
          "We need the number of basements that are planned for your corporate building. Input must be a positive integer."
        );
      }
    } else {
      $("#labelcorquote").text(
        "We need the number of floors that are planned for your corporate building. Input must be a positive integer."
      );
    }
  } else {
    $("#labelcorquote").text(
      "We need the number of distinct businesses that are planned for your corporate building. Input must be a positive integer."
    );
  }
};

var hyb = function () {

  //establish jQuery collections
  var $hybbiz = $("#hybbiz");
  var $hybflrs = $("#hybflrs");
  var $hybbs = $("#hybbs");
  var $hybspcs = $("#hybspcs");
  var $hybmax = $("#hybmax");
  var $hybhrs = $("#hybhrs");

  //pass values of jQuery collection to value
  var biz = Number($hybbiz.val());
  var flr = Number($hybflrs.val());
  var bs = Number($hybbs.val());
  var spcs = Number($hybspcs.val());
  var max = Number($hybmax.val());
  var hrs = Number($hybhrs.val());
  var hyb = $("input[name=hybproduct]:checked", "#hybform").val();
  var price = service(hyb);
  var cgs = Math.ceil((max * (flr + bs)) / 1000);
  var inst = install(price);
  var x = cgs * price * inst;
  var y = cgs * price;
  z = x + y;
  //code sourced from stack overflow https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
  x = x.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  y = y.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  z = z.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  price = price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  //code sourced from stack overflow https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string

  //call input verification functions - if a variable passes. perform calculation and change label --> else --> change label
  if (verify(biz)) {

    if (verify(flr)) {

      if (verify(bs)) {

        if (verify(spcs)) {

          if (verify(max)) {

            if (verify(hrs) && hrs < 25) {

              $("#labelhybquote").html(
                "Based on your input, your proposed building should need " +
                  plural(cgs, "elevator") +
                  ".<br><br>" +
                  "The price of each " +
                  hyb +
                  " elevator is " +
                  "$" +
                  price +
                  "<br>" +
                  plural(cgs, "elevator shaft") +
                  " X $" +
                  price +
                  " = $" +
                  y +
                  "<br>" +
                  "The installation fee is " +
                  inst * 100 +
                  "%  =  $" +
                  x +
                  "<br><br>The total estimated " +
                  "cost of this project is $" +
                  z
              );
            } else {
              $("#labelhybquote").text(
                "We need the number of hours of activity that are planned for your hybrid building. Input must be a positive integer between 1 and 24 inclusive."
              );
            }
          } else {
            $("#labelhybquote").text(
              "We need the maximum number of occupants per floor that are planned for your hybrid building. Input must be a positive integer."
            );
          }
        } else {
          $("#labelhybquote").text(
            "We need the number of parking spaces that are planned for your hybrid building. Input must be a positive integer."
          );
        }
      } else {
        $("#labelhybquote").text(
          "We need the number of basements that are planned for your hybrid building. Input must be a positive integer."
        );
      }
    } else {
      $("#labelhybquote").text(
        "We need the number of floors that are planned for your hybrid building. Input must be a positive integer."
      );
    }
  } else {
    $("#labelhybquote").text(
      "We need the number of distinct businesses that are planned for your hybrid building. Input must be a positive integer."
    );
  }
};

//hide all divs until a choice on building type has been made
$("#quote").hide();
$("#resform").hide();
$("#comform").hide();
$("#corform").hide();
$("#hybform").hide();

//event handlers

$("#building-type").on("change", function (event) {
  // building type selector Event Handler
  event.preventDefault();
  var $answer = $("#building-type"); //takes the dom element #quiz-answer and creates a Jquery collection.
  var answer = $answer.val(); // takes the value of the user input of this Jquery collection and passes it to a variable answer

  if (answer === "Residential") {
    $("#resform").show();
    $("#comform").hide();
    $("#corform").hide();
    $("#hybform").hide();
    $("#labelresquote").text("Start by completing all required fields.");
  }

  if (answer === "Commercial") {
    $("#resform").hide();
    $("#comform").show();
    $("#corform").hide();
    $("#hybform").hide();
    $("#labelcomquote").text("Start by completing all required fields.");
  }

  if (answer === "Corporate") {
    $("#resform").hide();
    $("#comform").hide();
    $("#corform").show();
    $("#hybform").hide();
    $("#labelcorquote").text("Start by completing all required fields.");
  }

  if (answer === "Hybrid") {
    $("#resform").hide();
    $("#comform").hide();
    $("#corform").hide();
    $("#hybform").show();
    $("#labelhybquote").text("Start by completing all required fields.");
  }
});

$("#resform").on("change", function (event) {
  //
  event.preventDefault();
  res();
  event.preventDefault();
});

$("#comform").on("change", function (event) {
  event.preventDefault();
  com();
  event.preventDefault();
});

$("#corform").on("change", function (event) {
  event.preventDefault();
  cor();
  event.preventDefault();
});

$("#hybform").on("change", function (event) {
  event.preventDefault();
  hyb();
  event.preventDefault();
});
