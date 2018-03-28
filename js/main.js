$(document).on('ready', function pageLoad() {
    window.addEventListener('scroll', scrollBack, false);
    window.addEventListener('load', scrollBack, false);
    window.addEventListener('load', smoothScroll, false);
    window.addEventListener('load', initMap, false);
    window.addEventListener('load', mapClick, false);
    window.addEventListener('load', mobileDevice, false);
    window.addEventListener('load', autoSlide, false);
    window.addEventListener('load', popUp, false);
});

const scrollBack = function () {

    for (let i = 0; i < $('.panel').length; i++) {
        if ($('.panel').eq(i).offset().top < ($(document).scrollTop()) + ($(window).height()) / 5) {
            $('.panel')
                .eq(i)
                .find('.panelContent')
                .addClass('panelContent-active');
        } else {
            $('.panel')
                .eq(i)
                .find('.panelContent')
                .removeClass('panelContent-active');
        }
    }
};

const smoothScroll = function () {
    $('a[href*="#"]:not([href="#carouselExampleIndicators"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 700, function () {

                });

            }
        }
    });
};
//    $('.panel').eq(0).find('.panelContent').addClass('panel_Content--active');

initMap = function initMap() {
    const mapProperties = {
        center: {
            lat: 50.061293,
            lng: 19.938181
        },
        zoom: 12,
        maxZoom: 16,
        minZoom: 6,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "weight": "2.00"
            }
        ]
    },
            {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#9c9c9c"
            }
        ]
    },
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
            }
        ]
    },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
            }
        ]
    },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
            }
        ]
    },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
            }
        ]
    },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
            },
                    {
                        "lightness": 45
            }
        ]
    },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#eeeeee"
            }
        ]
    },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#7b7b7b"
            }
        ]
    },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
            }
        ]
    },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
            }
        ]
    },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
            },
                    {
                        "visibility": "on"
            }
        ]
    },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#c8d7d4"
            }
        ]
    },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#070707"
            }
        ]
    },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
            }
        ]
    }
]
    };

    const map = new google.maps.Map(document.getElementById('googleMap'), mapProperties);


    const markerProperties = {
        position: {
            lat: 50.061293,
            lng: 19.938181
        },
        icon: 'img/google-maps-marker-1.png',
        map: map,
        animation: google.maps.Animation.DROP,
    };

    const marker = new google.maps.Marker(markerProperties);


    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    marker.addListener('click', toggleBounce);
};

const mapClick = function mapClick() {
    $('.map-container')
        .click(function () {
            $(this).find('#googleMap').addClass('clicked');
        })
        .mouseleave(function () {
            $(this).find('#googleMao').removeClass('clicked');
        });

}

const mobileDevice = function hover() {
    $('*').on('touchstart', function () {
        $(this).trigger('hover');
    }).on('touchend', function () {
        $(this).trigger('hover');
    });
}

const popUp = function popUp() {
    $('.skill')
        .mouseenter(function () {
            $(this).find('.popuptext').addClass('showItem')
        })
        .mouseleave(function () {
            $(this).find('.popuptext').removeClass('showItem')
        });

}


const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");
let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


const autoSlide = function autoShowSlides() {

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(autoShowSlides, 5000);
}