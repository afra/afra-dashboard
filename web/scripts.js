spaceapi = {}

function spaceapi_update() {
    $.getJSON('https://spaceapi.afra-berlin.de/v1/status.json', function(data) {
        spaceapi = data;

        console.log(data.open);

        if (data.open) {
            $('h1').addClass('open');
        } else {
            $('h1').removeClass('open')
        }
    });
}

$(function(){
    spaceapi_update();

    setInterval(spaceapi_update, 10000);
});
