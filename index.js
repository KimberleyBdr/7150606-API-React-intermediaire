const express = require('express');
const cors = require('cors'); // Si tu l'utilises
const cookieParser = require('cookie-parser'); // Si tu l'utilises
const routes = require('./routes'); // Assurez-vous que le chemin est correct

const app = express();

app.use(cors()); // Utilisation de CORS si nécessaire
app.use(cookieParser()); // Utilisation de cookie-parser si nécessaire
app.use(express.json()); // Pour le traitement des JSON
app.use(express.urlencoded({ extended: true })); // Pour le traitement des données URL-encoded

// Utilisation des routes
app.use('/api', routes); // Notez que vous ajoutez un préfixe /api

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
