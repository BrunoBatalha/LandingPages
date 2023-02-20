(() => {
    function manageAnimations() {
        const elements = document.querySelectorAll("[data-anime]");
        const onScroll = () => {
            console.log('tewste')
            let amountElementsAnimated = 0;
            elements.forEach(el => {
                if (el.classList.contains("anime")) {
                    amountElementsAnimated += 1;
                }

                if (isElementInViewport(el)) {
                    el.classList.add("anime")
                }
            });
            if (elements.length === amountElementsAnimated) {
                document.removeEventListener('scroll', onScroll)
            }
        }

        document.addEventListener("scroll", onScroll)

        function isElementInViewport(el) {
            var top = el.offsetTop;
            var left = el.offsetLeft;
            var width = el.offsetWidth;
            var height = el.offsetHeight;

            while (el.offsetParent) {
                el = el.offsetParent;
                top += el.offsetTop;
                left += el.offsetLeft;
            }

            return (
                top < (window.pageYOffset + window.innerHeight) &&
                left < (window.pageXOffset + window.innerWidth) &&
                (top + height) > window.pageYOffset &&
                (left + width) > window.pageXOffset
            );
        }
    }

    function manageNavbar() {
        const headerEl = document.querySelector('.js-header');
        const onScroll = () => {
            headerEl.setAttribute('style', window.pageYOffset === 0 ? '' : 'background-color: #0d1c22a1')
        }

        document.addEventListener("scroll", onScroll)
    }

    manageNavbar();
    manageAnimations()
})()
