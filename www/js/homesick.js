function autoScroll() {
    setTimeout(function(){
        jQuery('.chat-block').stop().animate ({
          scrollTop: jQuery('.chat-block')[0].scrollHeight
        });
    }, 700);
}
function autoScrollForum() {
    setTimeout(function(){
        jQuery('.forum-block').stop().animate ({
          scrollTop: jQuery('.forum-block')[0].scrollHeight
        });
    }, 700);
} 


