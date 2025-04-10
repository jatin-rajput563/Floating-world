function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    // SVG for Minus icon
    const minusSVG = `
     <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M9.5 11.2695L10.3828 10.3867L17.8828 2.88672L18.7695 2L17 0.230469L16.1172 1.11328L9.5 7.73047L2.88281 1.11719L2 0.230469L0.230469 2L1.11328 2.88281L8.61328 10.3828L9.5 11.2695Z" fill="black"/>
     </svg>

    `;

    // SVG for Plus icon
    const plusSVG = `
     <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M9.5 11.2695L10.3828 10.3867L17.8828 2.88672L18.7695 2L17 0.230469L16.1172 1.11328L9.5 7.73047L2.88281 1.11719L2 0.230469L0.230469 2L1.11328 2.88281L8.61328 10.3828L9.5 11.2695Z" fill="black"/>
     </svg>

    `;

    // Toggle the content's max-height for smooth opening and closing
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0';
        icon.innerHTML = plusSVG;
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.innerHTML = minusSVG;
    }
};

$('.slider').slick({
    infinite: true,
    slidesToShow: 7,
    autoplay: true,
    autoplaySpeed: 1,
    speed: 10000,
    slidesToScroll: 4,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 920,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 685,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 510,
            settings: {
                slidesToShow: 1.8,
                slidesToScroll: 1.8,
            }
        }
    ]
});