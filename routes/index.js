const express = require('express');
const router = express.Router();
const getSurvey = require('../controllers/survey');
const getFreelances = require('../controllers/freelances');
const getFreelance = require('../controllers/freelance');
const getResults = require('../controllers/results');

// Route pour obtenir les données du survey
router.get('/survey', (req, res) => {
    const surveyData = getSurvey();
    if (!surveyData) {
        return res.status(404).send('Survey not found.');
    }
    res.send({ surveyData });
});

// Route pour obtenir les données d'un freelance spécifique
router.get('/freelance', (req, res) => {
    const { id } = req.query; // Récupère l'id depuis les paramètres de la requête
    const freelanceData = getFreelance(id);
    if (!freelanceData) {
        return res.status(404).send('Freelance not found.');
    }
    res.send({ freelanceData });
});

// Route pour obtenir les résultats basés sur les paramètres fournis
router.get('/results', (req, res) => {
    const { a1, a2, a3, a4, a5, a6 } = req.query;
    const resultsData = getResults(a1, a2, a3, a4, a5, a6);
    if (!resultsData) {
        return res.status(404).send('Results not found.');
    }
    res.send({ resultsData });
});

// Route pour obtenir la liste de tous les freelances
router.get('/freelances', (req, res) => {
    const freelancersList = getFreelances();
    res.send({ freelancersList });
});

// Route par défaut (pour l'index ou la documentation)
router.get('/', (req, res) => {
    res.send('Welcome to the API - React intermédiaire');
});

// Exporter le routeur
module.exports = router;
