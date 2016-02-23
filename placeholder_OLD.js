function fixplaceholder() {

if ($.browser.msie) {
$('input[placeholder]').each(function () {

var input = $(this);

/* if postback, we dont want to overwrite the value! */
if($(input).val() != '')
return;

$(input).val(input.attr('placeholder'));

$(input).focus(function () {
if (input.val() == input.attr('placeholder')) {
input.val('');
}
});

$(input).blur(function () {
if (input.val() == '' || input.val() == input.attr('placeholder')) {
input.val(input.attr('placeholder'));
}
});
});
}
}
