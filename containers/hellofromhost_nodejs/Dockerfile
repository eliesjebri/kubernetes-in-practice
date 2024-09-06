# Utilise une image Node.js officielle
FROM node:18

# Définit le répertoire de travail à /usr/src/app
WORKDIR /usr/src/app

# Copie package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste du code de l'application dans le répertoire de travail
COPY . .

# Expose le port 3000
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "app.js"]
