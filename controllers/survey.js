const survey = require('../models/survey');

const getSurvey = () => {
    return survey; // Retourne l'ensemble des questions du survey
};

module.exports = getSurvey;
