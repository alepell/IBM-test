$(document).ready(function() {
  // Get images.
  var images = $(".slider > img");

  // Set starting index.
  var index = images.index($(".ativa"));
  $("#counter")
    .text(index + 1 + " / " + images.length)
    .css("color", "rgb(2, 96, 158)");

  $(".next").on("click", function() {
    var currentImg = $(".ativa");
    var nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass("ativa").css("z-index", -10);
      nextImg.addClass("ativa").css("z-index", 10);

      // Find the index of the image.
      var index = images.index(nextImg);
      $("#counter")
        .text(index + 1 + " / " + images.length)
        .css("color", "rgb(2, 96, 158)");
    }
  });

  $(".prev").on("click", function() {
    var currentImg = $(".ativa");
    var prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass("ativa").css("z-index", -10);
      prevImg.addClass("ativa").css("z-index", 10);

      // Find the index of the image.
      var index = images.index(prevImg);
      $("#counter").text(index + 1 + " / " + images.length);
    }
  });
  //
  // Get images1.
  var images1 = $(".slider1 > img");

  // Set starting index.
  var index1 = images1.index($(".ativa1"));
  $("#counter1")
    .text(index1 + 1 + " / " + images1.length)
    .css("color", "rgb(2, 96, 158)");

  $(".next1").on("click", function() {
    var currentImg1 = $(".ativa1");
    var nextImg1 = currentImg1.next();

    if (nextImg1.length) {
      currentImg1.removeClass("ativa1").css("z-index", -10);
      nextImg1.addClass("ativa1").css("z-index", 10);

      // Find the index of the image.
      var index1 = images1.index(nextImg1);
      $("#counter1")
        .text(index1 + 1 + " / " + images1.length)
        .css("color", "rgb(2, 96, 158)");
    }
  });

  $(".prev1").on("click", function() {
    var currentImg1 = $(".ativa1");
    var prevImg1 = currentImg1.prev();

    if (prevImg1.length) {
      currentImg1.removeClass("ativa1").css("z-index", -10);
      prevImg1.addClass("ativa1").css("z-index", 10);

      // Find the index of the image.
      var index1 = images1.index(prevImg1);
      $("#counter1").text(index1 + 1 + " / " + images1.length);
    }
  });
  //
  // Get images2.
  var images2 = $(".slider2 > img");

  // Set starting index.
  var index2 = images2.index($(".ativa2"));
  $("#counter2")
    .text(index2 + 1 + " / " + images2.length)
    .css("color", "rgb(2, 96, 158)");

  $(".next2").on("click", function() {
    var currentImg2 = $(".ativa2");
    var nextImg2 = currentImg2.next();

    if (nextImg2.length) {
      currentImg2.removeClass("ativa2").css("z-index", -10);
      nextImg2.addClass("ativa2").css("z-index", 10);

      // Find the index of the image.
      var index2 = images2.index(nextImg2);
      $("#counter2")
        .text(index2 + 1 + " / " + images2.length)
        .css("color", "rgb(2, 96, 158)");
    }
  });

  $(".prev2").on("click", function() {
    var currentImg2 = $(".ativa2");
    var prevImg2 = currentImg2.prev();

    if (prevImg2.length) {
      currentImg2.removeClass("ativa2").css("z-index", -10);
      prevImg2.addClass("ativa2").css("z-index", 10);

      // Find the index of the image.
      var index2 = images2.index(prevImg2);
      $("#counter2").text(index2 + 1 + " / " + images2.length);
    }
  });
  // Get images3.
  var images3 = $(".slider3 > img");

  // Set starting index.
  var index3 = images3.index($(".ativa3"));
  $("#counter3")
    .text(index3 + 1 + " / " + images3.length)
    .css("color", "rgb(2, 96, 158)");

  $(".next3").on("click", function() {
    var currentImg3 = $(".ativa3");
    var nextImg3 = currentImg3.next();

    if (nextImg3.length) {
      currentImg3.removeClass("ativa3").css("z-index", -10);
      nextImg3.addClass("ativa3").css("z-index", 10);

      // Find the index of the image.
      var index3 = images3.index(nextImg3);
      $("#counter3")
        .text(index3 + 1 + " / " + images3.length)
        .css("color", "rgb(2, 96, 158)");
    }
  });

  $(".prev3").on("click", function() {
    var currentImg3 = $(".ativa3");
    var prevImg3 = currentImg3.prev();

    if (prevImg3.length) {
      currentImg3.removeClass("ativa3").css("z-index", -10);
      prevImg3.addClass("ativa3").css("z-index", 10);

      // Find the index of the image.
      var index3 = images3.index(prevImg3);
      $("#counter3").text(index3 + 1 + " / " + images3.length);
    }
  });
  //
  // Get images4.
  var images4 = $(".slider4 > img");

  // Set starting index.
  var index4 = images4.index($(".ativa4"));
  $("#counter4")
    .text(index4 + 1 + " / " + images4.length)
    .css("color", "rgb(2, 96, 158)");

  $(".next4").on("click", function() {
    var currentImg4 = $(".ativa4");
    var nextImg4 = currentImg4.next();

    if (nextImg4.length) {
      currentImg4.removeClass("ativa4").css("z-index", -10);
      nextImg4.addClass("ativa4").css("z-index", 10);

      // Find the index of the image.
      var index4 = images4.index(nextImg4);
      $("#counter4")
        .text(index4 + 1 + " / " + images4.length)
        .css("color", "rgb(2, 96, 158)");
    }
  });

  $(".prev4").on("click", function() {
    var currentImg4 = $(".ativa4");
    var prevImg4 = currentImg4.prev();

    if (prevImg4.length) {
      currentImg4.removeClass("ativa4").css("z-index", -10);
      prevImg4.addClass("ativa4").css("z-index", 10);

      // Find the index of the image.
      var index4 = images4.index(prevImg4);
      $("#counter4").text(index4 + 1 + " / " + images4.length);
    }
  });
  // Get images5.
  var images5 = $(".slider5 > img");

  // Set starting index.
  var index5 = images5.index($(".ativa5"));
  $("#counter5")
    .text(index5 + 1 + " / " + images5.length)
    .css("color", "rgb(2, 96, 158)");

  $(".next5").on("click", function() {
    var currentImg5 = $(".ativa5");
    var nextImg5 = currentImg5.next();

    if (nextImg5.length) {
      currentImg5.removeClass("ativa5").css("z-index", -10);
      nextImg5.addClass("ativa5").css("z-index", 10);

      // Find the index of the image.
      var index5 = images5.index(nextImg5);
      $("#counter5")
        .text(index5 + 1 + " / " + images5.length)
        .css("color", "rgb(2, 96, 158)");
    }
  });

  $(".prev5").on("click", function() {
    var currentImg5 = $(".ativa5");
    var prevImg5 = currentImg5.prev();

    if (prevImg5.length) {
      currentImg5.removeClass("ativa5").css("z-index", -10);
      prevImg5.addClass("ativa5").css("z-index", 10);

      // Find the index of the image.
      var index5 = images5.index(prevImg5);
      $("#counter5").text(index5 + 1 + " / " + images5.length);
    }
  });
  // Get images6.
  var images6 = $(".slider6 > img");

  // Set starting index.
  var index6 = images6.index($(".ativa6"));
  $("#counter6")
    .text(index6 + 1 + " / " + images6.length)
    .css("color", "rgb(2, 96, 168)");

  $(".next6").on("click", function() {
    var currentImg6 = $(".ativa6");
    var nextImg6 = currentImg6.next();

    if (nextImg6.length) {
      currentImg6.removeClass("ativa6").css("z-index", -10);
      nextImg6.addClass("ativa6").css("z-index", 10);

      // Find the index of the image.
      var index6 = images6.index(nextImg6);
      $("#counter6")
        .text(index6 + 1 + " / " + images6.length)
        .css("color", "rgb(2, 96, 168)");
    }
  });

  $(".prev6").on("click", function() {
    var currentImg6 = $(".ativa6");
    var prevImg6 = currentImg6.prev();

    if (prevImg6.length) {
      currentImg6.removeClass("ativa6").css("z-index", -10);
      prevImg6.addClass("ativa6").css("z-index", 10);

      // Find the index of the image.
      var index6 = images6.index(prevImg6);
      $("#counter6").text(index6 + 1 + " / " + images6.length);
    }
  });
  // Get images7.
  var images7 = $(".slider7 > img");

  // Set starting index.
  var index7 = images7.index($(".ativa7"));
  $("#counter7")
    .text(index7 + 1 + " / " + images7.length)
    .css("color", "rgb(2, 97, 178)");

  $(".next7").on("click", function() {
    var currentImg7 = $(".ativa7");
    var nextImg7 = currentImg7.next();

    if (nextImg7.length) {
      currentImg7.removeClass("ativa7").css("z-index", -10);
      nextImg7.addClass("ativa7").css("z-index", 10);

      // Find the index of the image.
      var index7 = images7.index(nextImg7);
      $("#counter7")
        .text(index7 + 1 + " / " + images7.length)
        .css("color", "rgb(2, 97, 178)");
    }
  });

  $(".prev7").on("click", function() {
    var currentImg7 = $(".ativa7");
    var prevImg7 = currentImg7.prev();

    if (prevImg7.length) {
      currentImg7.removeClass("ativa7").css("z-index", -10);
      prevImg7.addClass("ativa7").css("z-index", 10);

      // Find the index of the image.
      var index7 = images7.index(prevImg7);
      $("#counter7").text(index7 + 1 + " / " + images7.length);
    }
  });
  // Get images8.
  var images8 = $(".slider8 > img");

  // Set starting index.
  var index8 = images8.index($(".ativa8"));
  $("#counter8")
    .text(index8 + 1 + " / " + images8.length)
    .css("color", "rgb(2, 98, 188)");

  $(".next8").on("click", function() {
    var currentImg8 = $(".ativa8");
    var nextImg8 = currentImg8.next();

    if (nextImg8.length) {
      currentImg8.removeClass("ativa8").css("z-index", -10);
      nextImg8.addClass("ativa8").css("z-index", 10);

      // Find the index of the image.
      var index8 = images8.index(nextImg8);
      $("#counter8")
        .text(index8 + 1 + " / " + images8.length)
        .css("color", "rgb(2, 98, 188)");
    }
  });

  $(".prev8").on("click", function() {
    var currentImg8 = $(".ativa8");
    var prevImg8 = currentImg8.prev();

    if (prevImg8.length) {
      currentImg8.removeClass("ativa8").css("z-index", -10);
      prevImg8.addClass("ativa8").css("z-index", 10);

      // Find the index of the image.
      var index8 = images8.index(prevImg8);
      $("#counter8").text(index8 + 1 + " / " + images8.length);
    }
  });
  // Get images9.
  var images9 = $(".slider9 > img");

  // Set starting index.
  var index9 = images9.index($(".ativa9"));
  $("#counter9")
    .text(index9 + 1 + " / " + images9.length)
    .css("color", "rgb(2, 99, 188)");

  $(".next9").on("click", function() {
    var currentImg9 = $(".ativa9");
    var nextImg9 = currentImg9.next();

    if (nextImg9.length) {
      currentImg9.removeClass("ativa9").css("z-index", -10);
      nextImg9.addClass("ativa9").css("z-index", 10);

      // Find the index of the image.
      var index9 = images9.index(nextImg9);
      $("#counter9")
        .text(index9 + 1 + " / " + images9.length)
        .css("color", "rgb(2, 98, 188)");
    }
  });

  $(".prev9").on("click", function() {
    var currentImg9 = $(".ativa9");
    var prevImg9 = currentImg9.prev();

    if (prevImg9.length) {
      currentImg9.removeClass("ativa9").css("z-index", -10);
      prevImg9.addClass("ativa9").css("z-index", 10);

      // Find the index of the image.
      var index9 = images9.index(prevImg9);
      $("#counter9").text(index9 + 1 + " / " + images9.length);
    }
  });
  // Get images10.
  var images10 = $(".slider10 > img");

  // Set starting index.
  var index10 = images10.index($(".ativa10"));
  $("#counter10")
    .text(index10 + 1 + " / " + images10.length)
    .css("color", "rgb(2, 99, 188)");

  $(".next10").on("click", function() {
    var currentImg10 = $(".ativa10");
    var nextImg10 = currentImg10.next();

    if (nextImg10.length) {
      currentImg10.removeClass("ativa10").css("z-index", -10);
      nextImg10.addClass("ativa10").css("z-index", 10);

      // Find the index of the image.
      var index10 = images10.index(nextImg10);
      $("#counter10")
        .text(index10 + 1 + " / " + images10.length)
        .css("color", "rgb(2, 98, 188)");
    }
  });

  $(".prev10").on("click", function() {
    var currentImg10 = $(".ativa10");
    var prevImg10 = currentImg10.prev();

    if (prevImg10.length) {
      currentImg10.removeClass("ativa10").css("z-index", -10);
      prevImg10.addClass("ativa10").css("z-index", 10);

      // Find the index of the image.
      var index10 = images10.index(prevImg10);
      $("#counter10").text(index10 + 1 + " / " + images10.length);
    }
  });
  // Get images11.
  var images11 = $(".slider11 > img");

  // Set starting index.
  var index11 = images11.index($(".ativa11"));
  $("#counter11")
    .text(index11 + 1 + " / " + images11.length)
    .css("color", "rgb(2, 99, 188)");

  $(".next11").on("click", function() {
    var currentImg11 = $(".ativa11");
    var nextImg11 = currentImg11.next();

    if (nextImg11.length) {
      currentImg11.removeClass("ativa11").css("z-index", -10);
      nextImg11.addClass("ativa11").css("z-index", 10);

      // Find the index of the image.
      var index11 = images11.index(nextImg11);
      $("#counter11")
        .text(index11 + 1 + " / " + images11.length)
        .css("color", "rgb(2, 98, 188)");
    }
  });

  $(".prev11").on("click", function() {
    var currentImg11 = $(".ativa11");
    var prevImg11 = currentImg11.prev();

    if (prevImg11.length) {
      currentImg11.removeClass("ativa11").css("z-index", -10);
      prevImg11.addClass("ativa11").css("z-index", 10);

      // Find the index of the image.
      var index11 = images11.index(prevImg11);
      $("#counter11").text(index11 + 1 + " / " + images11.length);
    }
  });
  // Get images12.
  var images12 = $(".slider12 > img");

  // Set starting index.
  var index12 = images12.index($(".ativa12"));
  $("#counter12")
    .text(index12 + 1 + " / " + images12.length)
    .css("color", "rgb(2, 99, 188)");

  $(".next12").on("click", function() {
    var currentImg12 = $(".ativa12");
    var nextImg12 = currentImg12.next();

    if (nextImg12.length) {
      currentImg12.removeClass("ativa12").css("z-index", -10);
      nextImg12.addClass("ativa12").css("z-index", 10);

      // Find the index of the image.
      var index12 = images12.index(nextImg12);
      $("#counter12")
        .text(index12 + 1 + " / " + images12.length)
        .css("color", "rgb(2, 98, 188)");
    }
  });

  $(".prev12").on("click", function() {
    var currentImg12 = $(".ativa12");
    var prevImg12 = currentImg12.prev();

    if (prevImg12.length) {
      currentImg12.removeClass("ativa12").css("z-index", -10);
      prevImg12.addClass("ativa12").css("z-index", 10);

      // Find the index of the image.
      var index12 = images12.index(prevImg12);
      $("#counter12").text(index12 + 1 + " / " + images12.length);
    }
  });
  // Get images13.
  var images13 = $(".slider13 > img");

  // Set starting index.
  var index13 = images13.index($(".ativa13"));
  $("#counter13")
    .text(index13 + 1 + " / " + images13.length)
    .css("color", "rgb(2, 99, 188)");

  $(".next13").on("click", function() {
    var currentImg13 = $(".ativa13");
    var nextImg13 = currentImg13.next();

    if (nextImg13.length) {
      currentImg13.removeClass("ativa13").css("z-index", -10);
      nextImg13.addClass("ativa13").css("z-index", 10);

      // Find the index of the image.
      var index13 = images13.index(nextImg13);
      $("#counter13")
        .text(index13 + 1 + " / " + images13.length)
        .css("color", "rgb(2, 98, 188)");
    }
  });

  $(".prev13").on("click", function() {
    var currentImg13 = $(".ativa13");
    var prevImg13 = currentImg13.prev();

    if (prevImg13.length) {
      currentImg13.removeClass("ativa13").css("z-index", -10);
      prevImg13.addClass("ativa13").css("z-index", 10);

      // Find the index of the image.
      var index13 = images13.index(prevImg13);
      $("#counter13").text(index13 + 1 + " / " + images13.length);
    }
  });
});

//
