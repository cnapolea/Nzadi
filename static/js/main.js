//jshint esversion:10 
import {navbarSlide, toTopDisplay, toTop} from './pageScroll.js';
import {StaffSlideShow} from './staffSlideShow.js';

(function pageBaseScript() {

    $(document).ready(()=> {
        
        navbarSlide();
        toTopDisplay();
        toTop();
    
        StaffSlideShow();
        
    });    

})();