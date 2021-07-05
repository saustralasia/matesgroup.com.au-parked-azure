require('./bootstrap');
require('./lib/jquery.mousewheel')
require('./other')
import 'owl.carousel';
// window.Vue = require('vue');


(function () {
    window.addEventListener('DOMContentLoaded', onDOMReady);
    if (document.readyState === 'interactive' || document.readyState === 'complete') onDOMReady();

    function onDOMReady() {
        const loopingImageWrappers = document.querySelectorAll('.looping-images-wrapper');

        for (let i = 0; i < loopingImageWrappers.length; i++) {
            startLooping(loopingImageWrappers[i]);
        }
    }

    function startLooping(wrapper) {
        let currentImageIndex = 0;
        const imageElements = wrapper.querySelectorAll('img');
        const loadedImageElements = [];

        for (let i = 0; i < imageElements.length; i++) {
            const image = imageElements[i];

            if (image.complete) {
                loadedImageElements.push(image);
            } else {
                image.addEventListener('load', function () {
                    loadedImageElements.push(image);
                });
            }
        }

        setInterval(function () {
            if (currentImageIndex + 1 <= loadedImageElements.length) {
                for (let i = 0; i < loadedImageElements.length; i++) {
                    const image = loadedImageElements[i];

                    if (i === currentImageIndex) {
                        image.classList.add('reveal');
                        image.classList.remove('hide');
                    } else {
                        image.classList.remove('reveal');
                        image.classList.add('hide');
                    }
                }

                if (currentImageIndex < imageElements.length - 1) {
                    currentImageIndex++;
                } else {
                    currentImageIndex = 0;
                }
            }
        }, 4000);
    }
})();
