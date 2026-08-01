<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
<script src="script.js"></script>
const text = `

> Initializing Friendship...

Loading Memories.......100%
Loading Trust..........100%
Loading Support........100%
Loading Happiness......100%

Connection Established ✔

Searching Best Friend...

Friend Found ✔

System.out.println("Happy Friendship Day!");

Dear Friend,

Friends are like good code.

They support us,
fix our bugs,
help us grow,
and never leave us during system crashes.

Thank you for being an important part of my life.

Happy Friendship Day ❤️
`;

let i = 0;

function typing() {

    if (i < text.length) {

        document.getElementById("output").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 35);

    } else {

        celebrate();

    }

}

typing();

function celebrate() {

    confetti({
        particleCount: 200,
        spread: 180,
        origin: { y: 0.6 }
    });

}