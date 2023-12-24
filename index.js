window.onload = function () {
    fetch('https://yojijukugo-api.vercel.app/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('yojijukugo').textContent = data[0];
            document.getElementById('yomi').textContent = data[1];
            document.getElementById('meaning').textContent = data[2];

            document.getElementById('word').style.display = 'block';

            const paragraph = document.querySelector("#yojijukugo");

            const textContent = paragraph.textContent;

            const newTextContent = [...textContent]
                    .map((char) => `<span>${char}</span>`)
                    .join("");
            paragraph.innerHTML = newTextContent;

            gsap.fromTo(
                    "#yojijukugo span",
                    {
                        autoAlpha: 0,
                        y: 10,
                    },
                    {
                        autoAlpha: 1,
                        y: 0,
                        stagger: 0.3,
                    }
            );

            ////////////////


            gsap.fromTo("#yomi", {
                scale: 0,
                yPercent: 100,
                autoAlpha: 0,
            }, {
                scale: 1,
                yPercent: 0,
                autoAlpha: 1,
                ease: 'expo.in',
                duration: 1.5,
            });

            ////////////////


            gsap.fromTo("hr", {
                scale: 0,
                yPercent: 200,
                autoAlpha: 0,
            }, {
                scale: 1,
                yPercent: 0,
                autoAlpha: 1,
                duration: 2,
            });

            ////////////////


            gsap.fromTo("#meaning", {
                scale: 0,
                xPercent: 100,
                yPercent: 100,
                autoAlpha: 0,
            }, {
                scale: 1,
                xPercent: 0,
                yPercent: 1,
                autoAlpha: 1,
                delay: 1,
                duration: 3,
                ease: 'elastic.inOut',
            });

            ////////////////
        }
    );
};
