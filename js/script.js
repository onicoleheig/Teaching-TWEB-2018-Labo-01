$.fn.extend({
    toggleText: function(a, b){
        return this.text(this.text() == b ? a : b);
    }
});

$(".user-profile-left button").click(function() {
    $(this).toggleClass('user-profile-follow user-profile-unfollow', 5000)
           .toggleText('FOLLOW', 'UNFOLLOW');
});