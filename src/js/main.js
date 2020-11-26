import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

(() => {
    const overlay = document.getElementById("overlay"),
        sectionFeedback = document.getElementById("feedback"),
        header = document.getElementById("header"),
        headerNav = document.getElementById("header__nav"),
        headerContainer = document.getElementById("header__container"),
        headerMenuBtn = document.getElementById("header__menu_mob-btn"),
        headerLogo = document.getElementById("header__logo"),
        headerMenuBtnWrap = document.getElementById("header__menu_mob"),
        popUp = document.getElementById("popUp"),
        timerBar = document.getElementById("timer"),
        newsBlock = document.getElementById("news"),
        mainBlock = document.getElementById("main");

    const timeCount = () => {
        const countDownDate = new Date("Mar 20, 2021 00:00:00").getTime();
        const daysBlock = document.getElementById("timer__days"),
            hoursBlock = document.getElementById("timer__hours"),
            minutesBlock = document.getElementById("timer__minutes"),
            secondsBlock = document.getElementById("timer__seconds");

        function showTimeLeft() {
            let now = new Date().getTime();

            // Find the distance between now an the count down date
            let distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            daysBlock.innerHTML = days;
            hoursBlock.innerHTML = hours;
            minutesBlock.innerHTML = minutes;
            secondsBlock.innerHTML = seconds;
        }

        setInterval(showTimeLeft, 1000);
    };

    function toggleMobileMenu() {
        header.classList.toggle("active");
        headerNav.classList.toggle("active");
        headerMenuBtnWrap.classList.toggle("active");
        headerMenuBtn.classList.toggle("active");
        headerLogo.classList.toggle("active");
        headerContainer.classList.toggle("active");
        overlay.classList.toggle("active");
    }

    const showMobileMenu = () => {
        document.addEventListener("DOMContentLoaded", function () {

            headerMenuBtn.addEventListener("click", toggleMobileMenu, false);
            overlay.addEventListener("click", () => {
                if (header.classList.contains("active")) {
                    toggleMobileMenu();
                    overlay.classList.remove("active");
                }
            });
        });
    };

    const initPopUp = () => {
        const headerBtn = document.getElementById("header__btnForm"),
            introBtn = document.getElementById("intro__button"),
            timerBtn = document.getElementById("timer__button"),
            close = document.getElementById("popUp__close");

        function tooglePopUp() {
            overlay.classList.toggle("active");
            popUp.classList.toggle("active");
        }

        headerBtn.addEventListener("click", tooglePopUp, false);
        introBtn.addEventListener("click", tooglePopUp, false);
        timerBtn.addEventListener("click", tooglePopUp, false);
        close.addEventListener("click", tooglePopUp, false);
        overlay.addEventListener("click", () => {
            if (popUp.classList.contains("active")) {
                popUp.classList.remove("active");
                overlay.classList.remove("active");
            }
        });
    };

    const stickyHeader = () => {
        document.addEventListener("DOMContentLoaded", function () {
            const body = document.body;

            let lastScroll = 0;
            let sticky = header.offsetTop;

            function checkHeaderPosition() {
                if (window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                } else {
                    header.classList.remove("sticky");
                }
            }

            window.addEventListener("scroll", () => {
                const currentScroll = window.pageYOffset;

                if (currentScroll == 0 || currentScroll < 0) {
                    body.classList.remove("scroll-up");
                    body.classList.add("default-state");
                    return;
                }

                if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
                    // down
                    body.classList.remove("scroll-up");
                    body.classList.remove("default-state");
                    body.classList.add("scroll-down");
                } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
                    // up
                    body.classList.remove("scroll-down");
                    body.classList.remove("default-state");
                    body.classList.add("scroll-up");
                }
                lastScroll = currentScroll;
            });

            window.onscroll = () => {
                checkHeaderPosition();
            };
        });
    };

    const stickyTimerBar = () => {
        window.addEventListener("scroll", function () {
            let newsBlockOffSetTop = newsBlock.getBoundingClientRect().top;
            let sectionFeedbackOffsetTop = sectionFeedback.getBoundingClientRect().top;
            /* newsBlockOffSetTop needed for detecting if first 
            screen scrolled and setting sticky class for timebar */
            if (newsBlockOffSetTop < 0 && sectionFeedbackOffsetTop > 500) {
                timerBar.classList.add("sticky");
            } else {
                timerBar.classList.remove("sticky");
            }
        });
    };

    const initializeSmoothlyScroll = () => {
        document.addEventListener("DOMContentLoaded", function () {
            const headerBtnNews = document.getElementById("header__nav_news");
            const headerBtnSolutions = document.getElementById("header__nav_solutions");
            const headerBtnAdvantages = document.getElementById("header__nav_advantages");
            const headerBtnAboutUs = document.getElementById("header__nav_aboutUs");
            const headerBtnReviews = document.getElementById("header__nav_reviews");
            const headerBtnContacts = document.getElementById("header__nav_contacts");
            // nav menu items

            const news = document.getElementById("news");
            const solutions = document.getElementById("solutions");
            const advantages = document.getElementById("advantages");
            const aboutUs = document.getElementById("aboutUs");
            const reviews = document.getElementById("reviews");
            const feedback = document.getElementById("feedback");
            // html section of site

            function toNews() {
                news.scrollIntoView({ block: "start", behavior: "smooth" });
            }

            function toSolutions() {
                solutions.scrollIntoView({ block: "start", behavior: "smooth" });
            }

            function toAdvantages() {
                advantages.scrollIntoView({ block: "start", behavior: "smooth" });
            }

            function toAboutUs() {
                aboutUs.scrollIntoView({ block: "start", behavior: "smooth" });
            }

            function toReviews() {
                reviews.scrollIntoView({ block: "start", behavior: "smooth" });
            }

            function toFeedback() {
                feedback.scrollIntoView({ block: "start", behavior: "smooth" });
            }

            // scroll functions

            headerBtnNews.addEventListener("click", toNews);
            headerBtnSolutions.addEventListener("click", toSolutions);
            headerBtnAdvantages.addEventListener("click", toAdvantages);
            headerBtnAboutUs.addEventListener("click", toAboutUs);
            headerBtnReviews.addEventListener("click", toReviews);
            headerBtnContacts.addEventListener("click", toFeedback);

            // adding eventListeners for buttons on click for smooth-scroll effect;
        });
    };

    const Slider = () => {
        document.addEventListener("DOMContentLoaded", function () {
            /* eslint-disable no-unused-vars */
            const mySwiper = new Swiper(".swiper-container", {
                loop: true,
                speed: 1000,
                grabCursor: true,
                mousewheelControl: true,
                keyboardControl: true,
                fadeEffect: {
                    crossFade: true
                },
                autoplay: {
                    delay: 5000,
                },
                navigation: {
                    nextEl: ".reviews__button_next",
                    prevEl: ".reviews__button_prev"
                },
            });
            /* eslint-enable no-unused-vars */
        });
    };


    const sendDatatoEmail = () => {
        document.addEventListener("DOMContentLoaded", () => {

            const ajaxSend = async (formData) => {
                const fetchResp = await fetch("../mail.php", {
                    method: "POST",
                    body: formData
                });
                if (!fetchResp.ok) {
                    throw new Error(`статус ошибки ${fetchResp.status}`);
                }
                return await fetchResp.text();
            };

            const forms = document.querySelectorAll("form");
            forms.forEach(form => {
                form.addEventListener("submit", function (e) {
                    e.preventDefault();
                    const formData = new FormData(this);
                    let statusMessage = document.createElement("div");
                    statusMessage.classList.add("statusMessage");
                    mainBlock.appendChild(statusMessage);

                    ajaxSend(formData)
                        .then((response) => {
                            statusMessage.innerHTML = response;
                            statusMessage.classList.add("success");
                            form.reset();
                        })
                        .catch((response) => statusMessage.innerHTML = response)
                        .finally(() => {
                            this.reset();
                            setTimeout(() => {
                                statusMessage.remove();
                                popUp.classList.remove("active");
                                overlay.classList.remove("active");
                            }, 5000);
                        });
                });
            });

        });
    };
    timeCount();
    stickyHeader();
    initPopUp();
    showMobileMenu();
    Slider();
    stickyTimerBar();
    initializeSmoothlyScroll();
    sendDatatoEmail();
})();

