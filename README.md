# Site e-commerce simplifié - Projet DevOps

*Je tiens à remercier chaleureusement le Pr. Soufiane HAMIDA pour la qualité de ses enseignements et son accompagnement tout au long de ce module DevOps.*

[![CI/CD Pipeline](https://github.com/stefchrif/devopsUIT/actions/workflows/ci.yml/badge.svg)](https://github.com/stefchrif/devopsUIT/actions/workflows/ci.yml)

## 📦 À propos du projet
Ce projet est un site e-commerce simplifié développé en **Node.js (Express)** avec une base de données **SQLite**. Il a été conçu de manière incrémentale pour mettre en pratique les concepts de la culture DevOps.

**Déroulement du développement :**
- **Semaine 1** : Modélisation et création de la base de données (Tables Utilisateurs, Produits, Catégories).
- **Semaine 2** : Développement du Front-Office (Catalogue, vues produits, gestion du panier et simulation de commande).
- **Semaine 3** : Mise en place de l'authentification et développement du Back-Office (Dashboard admin, gestion du catalogue).
- **Semaine 4** : Conteneurisation (Docker), tests automatisés (Jest), intégration continue (GitHub Actions) et orchestration (Kubernetes).

## 🚀 Lancement rapide (Docker)
1. Clonez ce dépôt.
2. Démarrez l'infrastructure locale :
   \`\`\`bash
   docker compose up --build
   \`\`\`
3. L'application est disponible sur \`http://localhost:3000\`.

**Identifiants de test :**
- Administrateur : \`admin\` / \`admin\`
- Client : \`user\` / \`user\`

## 🛠️ Stack Technique & DevOps
- **Workflow Git** : Branches \`main\` et \`develop\` avec fusions via Pull Requests simulées.
- **CI/CD** : Pipeline GitHub Actions (Linter, Tests, Build Docker, Push sur GHCR).
- **Conteneurisation** : \`Dockerfile\` multi-stage optimisé.
- **Kubernetes** : Manifestes (Deployment & Service) disponibles dans le dossier \`k8s/\`.
