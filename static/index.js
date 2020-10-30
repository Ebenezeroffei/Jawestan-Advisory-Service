// A class that will manage all the page functions
class Control{
    constructor(){
        // Hide the phone menu
        $('#phone-menu').slideUp(0);
        // Hide the phone menu submenu
        $('.special-phone-menu').find('ul').slideUp(0);
        this.windowSize();
        this.toggleSubMenu();
        this.togglePhoneMenuSubMenu();
    }
    
    windowSize(){
        window.onresize = () => {
            if(window.innerWidth > 700){
                // Hide the phone menu
                $('#phone-menu').slideUp(0);
                // Hide the phone menu submenu
                $('.special-phone-menu').find('ul').slideUp(0);
                // Close the phone menu
                $('#hamburger').find('p').removeClass('open');
            }
        }
    }
    
    // A function that opens the submenu
    toggleSubMenu(){
        $('#hamburger').click(function(){
            let hasClass = $(this).find('p').hasClass('open');
            if(hasClass){
                // Close the phone menu
                $(this).find('p').removeClass('open');
                // Hide the phone menu
                $('#phone-menu').slideUp(300);
                // Hide the phone menu submenu
        $('.special-phone-menu').find('ul').slideUp(300);
            }
            else{
                // Open the phone menu
                $(this).find('p').attr('class','open');
                $('#phone-menu').slideDown(300);
            }
        });
    }
    
    // A function that slide toggles the phone menu's submenu
    togglePhoneMenuSubMenu(){
        $('.special-phone-menu').click(function(){
            $(this).find('ul').slideToggle();
        });
    }
}


let control  = new Control()