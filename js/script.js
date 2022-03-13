$(document).ready(function() {
$(".design").click(function() {
$(this).find('.prod').toggle();
$(this).find('.img').toggle();
    

})
$('.img2').hover(function(){
    $(this).find('.overlay').toggle();

}
    )
});
