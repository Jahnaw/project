document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const title = document.getElementById("about-title");
    const text = document.getElementById("about-text");
    const nextBtn = document.querySelector(".next-btn");

    let index = 0;

    const texts = [
        { title: "AI-Powered Task Manager", text: "Our tool helps neurodiverse individuals manage their daily tasks efficiently with AI-powered automation and assistance." },
        { title: "Smart Scheduling", text: "Our intelligent AI helps you plan your day by prioritizing tasks based on urgency and importance." },
        { title: "Progress Tracking", text: "Easily monitor your task completion and stay on top of your schedule with real-time progress updates." },
        { title: "Collaborative Task Sharing", text: "Share tasks with teammates, family, or caregivers for improved productivity and collaboration." },
        { title: "Customizable Reminders", text: "Set reminders based on time, location, or activity to ensure you never miss important tasks." }
    ];

    function updateCarousel() {
        cards.forEach((card, i) => {
            if (i === index) {
                card.classList.add("current");
                card.style.zIndex = "10";
                card.style.transform = "translateX(0) scale(1)";
                card.style.opacity = "1";
            } else {
                card.classList.remove("current");
                card.style.zIndex = `${5 - Math.abs(i - index)}`;
                card.style.transform = `translateX(100px) scale(0.9)`;
                card.style.opacity = "0.6";
            }
        });

        // Update text dynamically
        title.innerText = texts[index].title;
        text.innerText = texts[index].text;
    }

    nextBtn.addEventListener("click", function () {
        index = (index + 1) % cards.length; // Move to the next card
        updateCarousel();
    });

    updateCarousel(); // Initialize the carousel at start
});
