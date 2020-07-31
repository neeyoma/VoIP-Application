$(document).ready(function(){    
    var pusher = new Pusher('3c0d77e77d223cba00f9', {
        cluster: 'us2',
        encrypted: false
    });
    let channel = pusher.subscribe('my-channel');
    channel.bind('my-event', onMessageAdded);
    channel.bind('my-sms-event', onSmsAdded);

    $('#btn-chat').click(function(){
        const message = $("#message").val();
        const phone = $("#phoneBtn").html();
        
        // const number = $("#number").val();
        $("#message").val("");
        //send message
        // $.post( "/chat", { message:message, number:number } );
        $.post( "/chat", { message, phone} );
    });
    
    function onMessageAdded(data) {
        let template = $("#new-message").html();
        template = template.replace("{{body}}", data.message);
        $(".app-message-chats").append(template);
    }

    function onSmsAdded(data) {
        let template = $("#new-sms-message").html();
        template = template.replace("{{body}}", data.message);
        $(".app-message-chats").append(template);
    }
});