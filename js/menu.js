function menu(){
    var menuShow = document.querySelector('.menu-action');
    var show = true;
    function toggle(){
        var menu = document.querySelector('.menu-hollie');
        document.body.style.overflow = show ? 'hidden' : 'initial';
        menu.classList.toggle('active',show)
        console.log(show)
        show = !show
        
    }
    menuShow.addEventListener('click',toggle);
}
menu()
