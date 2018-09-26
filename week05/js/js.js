$(document).ready(function() {
    //once click #submit-btn get the input from #city-type
    $("#submit-btn").click(function(){
        event.preventDefault();
        
        //get the input from #city-type
            var name = $( "#city-type" ).val();
            $( "#city-type" ).val();
            
        //if the user puts Los Angeles change the bg to la.jpg
        if (name == 'Los Angeles') {
            $('body').css('background', 'url(../images/la.jpg)');
        }
        //if the user puts Austin change the bg to austin.jpg
        else if (name == 'Austin') {
            $('body').css('background', 'url(../images/austin.jpg)');
        }
        //if the user puts New York change the bg to nyc.jpg
        else if (name == 'New York') {
            $('body').css('background', 'url(../images/nyc.jpg)');
        }
        //if the user puts San Fransisco change the bg to sf.jpg
        else if (name == 'San Fransisco') {
            $('body').css('background', 'url(../images/sf.jpg)');
        }
        //if the user puts Sydney change the bg to sydney.jpg
        else if (name == 'Sydney) {
            $('body').css('background', 'url(../images/sydney.jpg)');
        }
    });
});