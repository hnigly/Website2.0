/* =========================================================
   VIRGINIA MUSKIE
   Main JavaScript
   ========================================================= */


/* ================= MOBILE NAVIGATION ================= */

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        const isOpen =
            navigation.classList.contains("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuButton.textContent =
            isOpen ? "✕" : "☰";
    });


    /* Close mobile menu after clicking a link */

    document
        .querySelectorAll(".main-nav a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navigation.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.textContent = "☰";
            });

        });
}


/* ================= CURRENT YEAR ================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {
    yearElement.textContent =
        new Date().getFullYear();
}


/* ================= HEADER EFFECT ================= */

const header =
    document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(5, 14, 10, 0.99)";

    } else {

        header.style.background =
            "rgba(7, 17, 13, 0.96)";
    }

});


/* ================= REVEAL ANIMATION ================= */

const revealElements =
    document.querySelectorAll(
        ".water-card, .tactic-card, .season-row, .gear-item"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* ================= BACK TO TOP ================= */

document
    .querySelectorAll('a[href="#home"]')
    .forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    });
