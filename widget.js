var accordian = function() {
    addEventListener();

    function addEventListener() {
        let acc =  document.querySelectorAll('.header');
        console.log(acc);
        acc.forEach(function(item) {
            item.addEventListener('click', function() {
                this.parentNode.classList.toggle('active');
                
            });
        });
    }
};
accordian();