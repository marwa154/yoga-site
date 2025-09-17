# Yoga Website - ReactJS Version

Une application web responsive pour un site de yoga, développée avec ReactJS et utilisant Framer Motion pour les animations.

## 🚀 Fonctionnalités

### Partie 2 - Transformation ReactJS
- ✅ Application ReactJS avec composants réutilisables
- ✅ Composants : Header, Hero, ServiceCard, Footer
- ✅ Services générés dynamiquement depuis un fichier JSON
- ✅ Toggle Dark/Light mode avec sauvegarde localStorage
- ✅ Routing avec React Router (Home et Contact)

### Partie 3 - Challenge Avancé
- ✅ **Option A** - Formulaire interactif avec validation
- ✅ **Option B** - Animations avec Framer Motion

## 🛠️ Technologies Utilisées

- **React** 18.2.0 - Framework JavaScript
- **React Router DOM** 6.x - Routing côté client
- **Framer Motion** 10.x - Animations et transitions
- **Bootstrap** 5.3.2 - Framework CSS responsive
- **Remix Icon** 2.5.0 - Icônes
- **Vite** - Build tool et serveur de développement

## 📦 Installation et Lancement

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [url-du-repo]

# Aller dans le dossier react-app
cd react-app

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

### Build pour la production
```bash
npm run build
```

## 🏗️ Structure du Projet

```
react-app/
├── public/
│   └── assets/          # Images et CSS réutilisés
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Newsletter.jsx
│   │   └── ContactForm.jsx
│   ├── pages/           # Pages de l'application
│   │   ├── Home.jsx
│   │   └── Contact.jsx
│   ├── hooks/           # Hooks personnalisés
│   │   └── useTheme.js
│   ├── data/            # Données JSON
│   │   └── services.json
│   ├── App.jsx          # Composant principal
│   └── main.jsx         # Point d'entrée
```

## 🎨 Fonctionnalités Détaillées

### Dark/Light Mode
- Toggle disponible dans le header (desktop et mobile)
- Préférence sauvegardée dans localStorage
- Transition fluide entre les thèmes
- Icônes dynamiques (lune/soleil)

### Formulaire de Contact
- Validation en temps réel
- Messages d'erreur personnalisés
- Validation email avec regex
- Message de succès après soumission
- Champs requis : nom, email, message
- Animation de chargement

### Animations Framer Motion
- **Hero Section** : Fade-in avec décalage vertical
- **Service Cards** : Apparition séquentielle avec délai
- **Hover Effects** : Scale sur les boutons et cartes
- **Form Animations** : Transitions fluides
- **Page Transitions** : Animations d'entrée

### Responsive Design
- Mobile-first approach
- Breakpoints Bootstrap
- Navigation mobile avec menu hamburger
- Images adaptatives
- Grille flexible

## 📱 Captures d'Écran

### Desktop - Light Mode
![Desktop Light](screenshots/desktop-light.png)

### Desktop - Dark Mode
![Desktop Dark](screenshots/desktop-dark.png)

### Mobile - Light Mode
![Mobile Light](screenshots/mobile-light.png)

### Mobile - Dark Mode
![Mobile Dark](screenshots/mobile-dark.png)

### Page Contact
![Contact Page](screenshots/contact-page.png)

## 🎯 Options du Challenge Avancé

### Option A - Formulaire Interactif ✅
- **Validation en temps réel** : Les erreurs s'affichent/disparaissent pendant la saisie
- **Validation email** : Regex pour vérifier le format email
- **Messages personnalisés** : Erreurs spécifiques pour chaque champ
- **Feedback visuel** : Bordures rouges pour les champs en erreur
- **Message de succès** : Confirmation après soumission réussie
- **État de chargement** : Animation pendant l'envoi

### Option B - Animations & Transitions ✅
- **Framer Motion** : Bibliothèque d'animation moderne
- **Fade-in séquentiel** : Les cartes apparaissent une par une
- **Hover animations** : Scale et transitions sur les interactions
- **Page transitions** : Animations d'entrée fluides
- **Micro-interactions** : Détails d'animation sur les boutons

## 🔧 Personnalisation

### Ajouter un nouveau service
Modifier le fichier `src/data/services.json` :
```json
{
  "id": 4,
  "number": "#04",
  "title": "Nouveau Service",
  "description": "Description du service...",
  "image": "/assets/img/nouveau-service.png",
  "decorativeImage": "/assets/img/decoration.svg"
}
```

### Modifier les couleurs
Les variables CSS sont définies dans `/public/assets/css/styles.css` :
```css
:root {
  --first-color: hsl(260, 100%, 66%);
  --second-color: hsl(328, 100%, 66%);
  /* ... autres variables */
}
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

Développé avec ❤️ pour le test technique Yoga Website

---

**Note** : Ce projet réutilise les assets CSS et images du projet HTML/CSS original pour maintenir la cohérence visuelle et éviter la duplication de code.