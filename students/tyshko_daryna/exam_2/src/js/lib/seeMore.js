import $ from 'jquery';

function seeMore () {
    const seeMore = document.getElementById('seeMore');
    const moreGallery = document.getElementById('moreGallery');

    moreGallery.style.display = 'none';
    seeMore.addEventListener('click', function (event) {
        event.preventDefault();
        moreGallery.style.display = "block";
})

}

export default seeMore;




