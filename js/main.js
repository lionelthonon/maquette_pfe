$(document).ready(function(){

    // Dropzone.js
    $("div#drop").dropzone({
        url: "/img/post",
        dictDefaultMessage: "Glissez vos images ici",
    });
    Dropzone.autoDiscover = false;


});
