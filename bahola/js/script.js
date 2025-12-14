addEventListener("DOMContentLoaded", function () {

    const select = document.getElementById("date");
    const pillars = document.querySelectorAll(".pillar");

    function updatePillars() {
        let visibleCount = 0;

        if (select.value === "week1") visibleCount = 7;
        else if (select.value === "week2") visibleCount = 14;
        else if (select.value === "week3") visibleCount = 21;
        else if (select.value === "week4") visibleCount = 28;

        pillars.forEach((pillar, index) => {
            pillar.style.display = index < visibleCount ? "block" : "none";
        });
    }

    // run once on load
    updatePillars();

    // run when selection changes
    select.addEventListener("change", updatePillars);


})