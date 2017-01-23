document.addEventListener("DOMContentLoaded", function () {
    var el_list = document.querySelectorAll('.filter-element aside');

    function closeAllElements() {
        for (var i=0; i<el_list.length; i++) {
            el_list[i].classList.remove('close-icon');
        }
    }

    function toggleFilterElement() {
        if (this.classList.contains('close-icon')) {
            this.classList.remove('close-icon');
        } else {
            closeAllElements();
            this.classList.add('close-icon');
        }
    }

    var el_list = document.querySelectorAll('.filter-element aside');
    for (var i=0; i<el_list.length; i++) {
        el_list[i].onclick = toggleFilterElement;
    }
});
