$('#nav').affix({
    offset: {     
      top: $('#nav').offset().top -30,
      bottom: ($('.secondrow').outerHeight(true) + $('.thirdrow').outerHeight(true)) + 40
    }
});