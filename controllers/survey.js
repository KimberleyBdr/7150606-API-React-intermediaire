const surveyData = {
    id: 1,
    title: "Survey Title",
    questions: [
        { question: "Question 1?", options: ["Option 1", "Option 2"] },
        // Ajoute d'autres questions ici
    ]
};

const getSurvey = () => {
    return surveyData; // ou une logique pour récupérer des données réelles
};

module.exports = getSurvey;
