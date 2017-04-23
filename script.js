/**
 * Created by spiros.dimopulos on 4/23/17.
 */
function timeToColorText(time) {
    var $text = $('#text'),
        $bg = $('#bg'),
        $color = $('#color');
    switch (time) {
        case 14:
            $text.text('παιχνίδια ασπρόμαυρα');
            break;
        case 25:
            $text.text('χρώματα');
            $bg.removeClass('bw');
            break;
        case 38:
        case 86:
        case 133:
        case 156:
            $text.text('απ´ το δικό σου ροζ');
            $bg.removeClass('bw');
            $color.css('backgroundColor','#ff748c');
            break;
        case 45:
        case 93:
        case 140:
            $text.text('από το μωβ σου');
            $color.css('backgroundColor','purple');
            break;
        case 59:
            $text.text('λαμπερό πορτοκαλί σου');
            $color.css('backgroundColor','orange');
            break;
        case 72:
            $text.text('πάνω στο πράσινο');
            $color.css('backgroundColor','green');
            break;
        case 107:
            $text.text('πόσο μακριά στο θαλασσί σου');
            $color.css('backgroundColor','#009cff');
            break;
        case 117:
            $text.text('μέσα στο χρύσοκοκκινό σου');
            $color.css('backgroundColor','#ff6743');
            break;


    }
}

function detectmob() {
    if(window.innerWidth <= 800 || window.innerHeight <= 600) {
        return true;
    } else {
        return false;
    }
}

if (detectmob()) {
    $('#arleta')[0].pause();
    $('.mobile-play').show();
    $('.mobile-play').click(function() {
        $('#arleta')[0].play();
        $('.mobile-play').hide();
    });
}