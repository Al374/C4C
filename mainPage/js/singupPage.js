// Selecting elements

$(function () {
  // $('.modal').on('keyup blur focus', function (e) {
  //   $(this).find('form').reset();
  // });

  $('.modal')
    .find('input, textarea')
    .on('keyup blur focus', function (e) {
      var $this = $(this),
        label = $this.prev('.form__label');

      if (e.type === 'keyup') {
        if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
      } else if (e.type === 'blur') {
        if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.removeClass('highlight');
        }
      } else if (e.type === 'focus') {
        if ($this.val() === '') {
          label.removeClass('highlight');
        } else if ($this.val() !== '') {
          label.addClass('highlight');
        }
      }
    });

  $('.tab a').on('click', function (e) {
    e.preventDefault();
    // $('#myForm')[0].reset();
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);
  });
});

//*******INITIALIZATION */
$(function () {
  $('#restart').on('click', function () {
    /* Single line Reset function executes on click of Reset Button */
    if ($('#login').css('display') !== 'none') {
      var target = $('#login').find('#myForm');
      target[0].reset();
      $('#login')
        .find('input, textarea')
        .prev('.form__label')
        .removeClass('active highlight');
    } else {
      var target = $('#signup').find('#myForm');
      target[0].reset();
      $('#signup')
        .find('input, textarea')
        .prev('.form__label')
        .removeClass('active highlight');
    }
  });
});

//*******Show Password  //***********Toggle Password Visibility */*/
$(function () {
  $('#showPass').on('click', function () {
    var $this = $('#showPass').siblings('input').attr('type');
    if ($this === 'password') {
      $('#showPass').siblings('input').attr('type', 'text');
    } else {
      $('#showPass').siblings('input').attr('type', 'password');
    }
  });
});
$(function () {
  $('#showPass1').on('click', function () {
    var $this = $('#showPass1').siblings('input').attr('type');
    if ($this === 'password') {
      $('#showPass1').siblings('input').attr('type', 'text');
    } else {
      $('#showPass1').siblings('input').attr('type', 'password');
    }
  });
});
