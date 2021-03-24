// jshint esversion:10


let StaffSlideShow = () => {
    let slides= $('.info-slide').children('div');
    let numberOfSlides = slides.length;

    let count = 0;
    
    $('.previous-btn').click(()=>{

        if (count < 1) {
            $('.next-btn').prop('disabled', false);
            $('.info-container').removeClass('slide-right');

            if (count < numberOfSlides-1) {
                $('.info-container').addClass('slide-left');
                count ++;
            } else {
                $('.previous-btn').prop('disabled', true);
            } 
        }

        
    });

    $('.next-btn').click(() => {

        if (count >= 1) {
            $('.previous-btn').prop('disabled', false);
            $('.info-container').removeClass('slide-left');

            if (numberOfSlides-1 > count) {
                $('.next-btn').prop('disabled', true);
            } else {
                $('.info-container').addClass('slide-right');
                count --;
            }
        } 


    });

};


export {StaffSlideShow};