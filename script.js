const accQuestions = document.querySelectorAll(".accordion__question");

function closeAllExcept(clickedElement) {
    accQuestions.forEach((accQuestion) => {
        const accAnswer = accQuestion.nextElementSibling;
        const arrow = accQuestion.querySelector(".question__item-icon");
        const accQuestionsItem = accQuestion.querySelector(".question__item");
        const accQuestionsItemTitle = accQuestion.querySelector(".question__item-title");

        if (accQuestion !== clickedElement) {
            accAnswer.classList.remove("opened");
            arrow.classList.remove("up");
            accQuestionsItem.style.padding = "19px 0 18px 1px";
            accQuestion.style.borderBottom = "1px solid #E8E8EA";
            accQuestionsItemTitle.style.fontWeight = "400";
        }
    });
}

accQuestions.forEach((accQuestion, index) => {
    const accAnswer = accQuestion.nextElementSibling;
    const arrow = accQuestion.querySelector(".question__item-icon");
    const accQuestionsItem = accQuestion.querySelector(".question__item");
    const accQuestionsItemTitle = accQuestion.querySelector(".question__item-title");

    if (index === 1) {
        accAnswer.classList.add("opened");
        arrow.classList.add("up");
        accQuestionsItem.style.padding = "19px 0 7px 1px";
        accQuestion.style.borderBottom = "none";
        accQuestionsItemTitle.style.fontWeight = "700";
    }

    accQuestion.addEventListener("click", (event) => {
        event.stopPropagation();

        accAnswer.classList.toggle("opened");
        arrow.classList.toggle("up");

        if (accAnswer.classList.contains("opened")) {
            accQuestionsItem.style.padding = "19px 0 7px 1px";
            accQuestion.style.borderBottom = "none";
            accQuestionsItemTitle.style.fontWeight = "700";
        } else {
            accQuestionsItem.style.padding = "19px 0 18px 1px";
            accQuestion.style.borderBottom = "1px solid #E8E8EA";
            accQuestionsItemTitle.style.fontWeight = "400";
        }

        closeAllExcept(accQuestion);
    });
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".accordion__question")) {
        accQuestions.forEach((accQuestion) => {
            const accAnswer = accQuestion.nextElementSibling;
            const arrow = accQuestion.querySelector(".question__item-icon");
            const accQuestionsItem = accQuestion.querySelector(".question__item");
            const accQuestionsItemTitle = accQuestion.querySelector(".question__item-title");

            if (accAnswer.classList.contains("opened")) {
                accAnswer.classList.remove("opened");
                arrow.classList.remove("up");
                accQuestionsItem.style.padding = "19px 0 18px 1px";
                accQuestion.style.borderBottom = "1px solid #E8E8EA";
                accQuestionsItemTitle.style.fontWeight = "400";
            }
        });
    }
});
