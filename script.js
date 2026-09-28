/* =========================================
   MY SISTER BIRTHDAY WEBSITE
========================================= */


/* =========================================
   CORRECT BIRTHDAY
========================================= */

const correctBirthday = {
    day: "28",
    month: "09",
    year: "2007"
};


/* =========================================
   ELEMENTS
========================================= */

const pages = document.querySelectorAll(".page");

const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const unlockButton =
    document.getElementById("unlockButton");

const errorMessage =
    document.getElementById("errorMessage");

const particles =
    document.getElementById("particles");

const replayButton =
    document.getElementById("replayButton");


/* =========================================
   SHOW PAGE
========================================= */

function showPage(pageId) {

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const target =
        document.getElementById(pageId);

    if (target) {

        target.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti(amount = 80) {

    const symbols = [
        "✦",
        "♡",
        "✧",
        "◆",
        "♥",
        "•"
    ];

    for (let i = 0; i < amount; i++) {

        const particle =
            document.createElement("span");

        particle.classList.add("particle");

        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.fontSize =
            8 + Math.random() * 16 + "px";

        particle.style.color =
            [
                "#f3a9c5",
                "#e9d48b",
                "#d5b9e8",
                "#ffffff"
            ][
                Math.floor(Math.random() * 4)
            ];

        particle.style.animationDelay =
            Math.random() * 0.8 + "s";

        particles.appendChild(particle);

        setTimeout(() => {

            particle.remove();

        }, 4500);

    }

}


/* =========================================
   CHECK BIRTHDAY
========================================= */

function checkBirthday() {

    const day =
        dayInput.value.trim();

    const month =
        monthInput.value.trim();

    const year =
        yearInput.value.trim();


    if (
        day === correctBirthday.day &&
        month === correctBirthday.month &&
        year === correctBirthday.year
    ) {

        errorMessage.textContent =
            "Correct! Your surprise is ready. ✨";

        errorMessage.style.color =
            "#4c8a67";


        createConfetti(100);


        setTimeout(() => {

            showPage("welcome");

        }, 800);

    } else {

        errorMessage.textContent =
            "Hmm... that's not the right date. Try again. 🤍";

        errorMessage.style.color =
            "#bd5063";


        const inputs = [
            dayInput,
            monthInput,
            yearInput
        ];


        inputs.forEach(input => {

            input.animate(
                [
                    {
                        transform: "translateX(0)"
                    },
                    {
                        transform: "translateX(-6px)"
                    },
                    {
                        transform: "translateX(6px)"
                    },
                    {
                        transform: "translateX(0)"
                    }
                ],
                {
                    duration: 300
                }
            );

        });

    }

}
/* =========================================
   INPUT AUTO MOVE
========================================= */

const dateInputs = [
    dayInput,
    monthInput,
    yearInput
];


dateInputs.forEach(
    (input, index) => {

        input.addEventListener(
            "input",
            () => {

                input.value =
                    input.value.replace(
                        /\D/g,
                        ""
                    );


                if (
                    input.value.length ===
                    input.maxLength &&
                    index <
                    dateInputs.length - 1
                ) {

                    dateInputs[
                        index + 1
                    ].focus();

                }

            }
        );


        input.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter"
                ) {

                    checkBirthday();

                }

            }
        );

    }
);


/* =========================================
   UNLOCK BUTTON
========================================= */

unlockButton.addEventListener(
    "click",
    checkBirthday
);


/* =========================================
   NEXT BUTTONS
========================================= */

const nextButtons =
    document.querySelectorAll(
        "[data-next]"
    );


nextButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const nextPage =
                button.dataset.next;

            showPage(nextPage);


            if (
                nextPage === "dua" ||
                nextPage === "final"
            ) {

                createConfetti(70);

            }

        }
    );

});


/* =========================================
   REPLAY
========================================= */

replayButton.addEventListener(
    "click",
    () => {

        dayInput.value = "";
        monthInput.value = "";
        yearInput.value = "";

        errorMessage.textContent = "";

        showPage("gate");

    }
);


/* =========================================
   RANDOM FLOATING DECORATIONS
========================================= */

function createFloatingStars() {

    const symbols = [
        "✦",
        "✧",
        "♡"
    ];

    for (let i = 0; i < 25; i++) {

        const star =
            document.createElement("span");

        star.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        star.style.position =
            "fixed";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.color =
            "rgba(255,255,255,.15)";

        star.style.fontSize =
            8 + Math.random() * 15 + "px";

        star.style.pointerEvents =
            "none";

        star.style.zIndex = "1";

        star.style.animation =
            "float " +
            (4 + Math.random() * 5) +
            "s ease-in-out infinite";

        document.body.appendChild(star);

    }

}

createFloatingStars();