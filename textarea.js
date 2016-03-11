// $(document).on('input keyup', 'textarea[maxlength]', function(e) {
$(document).delegate('textarea[maxlength]', 'input keyup' , function(e) {
    // maxlength attribute does not in IE prior to IE10
   
    var $this = $(this);
    var maxlength = $this.attr('maxlength');
    if (!!maxlength) {
        var text = $this.val();

        if (text.length > maxlength) {
            // truncate excess text (in the case of a paste)
            $this.val(text.substring(0,maxlength));
            e.preventDefault();
        }

    }

});