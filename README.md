# Apotheoz Wines — Site web

Site vitrine statique (HTML / CSS / JS, pas de framework) pour Apotheoz Wines.

## Structure du projet

```
Apotheoz_Wines/
├── README.md              ← ce fichier
└── front/
    ├── index.html         ← page d'accueil
    ├── prestations.html    ← page des prestations
    ├── semaine.html        ← page "L'Apothéoz de la semaine"
    └── assets/
        ├── css/
        │   └── style.css   ← tout le style du site
        ├── js/
        │   └── script.js   ← carrousel, menu burger, header au scroll
        └── img/            ← mets tes photos ici
```

---

## Guide pour Théo — voir et modifier le site sur Mac

Ce guide part du principe que :
- VS Code est déjà installé
- Le repo GitHub est déjà cloné sur ton Mac, dans `/Users/theo/Apotheoz-s-Wine`
- Le dossier `theo` est épinglé dans le Finder pour y accéder rapidement

### 1. Ouvrir le projet dans VS Code

**Option A — depuis VS Code directement :**
- Ouvre VS Code
- `File > Open Folder...` (ou `Cmd + O`)
- Navigue jusqu'à `Apotheoz-s-Wine` (dans ton dossier personnel `theo`) et sélectionne-le

**Option B — depuis le Terminal :**
- Ouvre le Terminal
- Tape :
  ```
  code /Users/theo/Apotheoz-s-Wine
  ```
- Le dossier s'ouvre directement dans VS Code

**Option C — depuis le Finder :**
- Ouvre le Finder, clique sur `theo` dans la barre latérale (épinglé)
- Repère le dossier `Apotheoz-s-Wine`
- Fais un clic droit dessus > `Ouvrir avec` > `Visual Studio Code` (si l'option n'apparaît pas, glisse simplement le dossier sur l'icône de VS Code dans le Dock)

### 2. Voir le site dans ton navigateur (aperçu en direct)

- Installe l'extension **Live Server** si tu ne l'as pas déjà :
  - Clique sur l'icône des extensions dans la barre de gauche (les 4 petits carrés), ou `Cmd + Shift + X`
  - Cherche "Live Server" (par Ritwick Dey), clique "Install"
- Dans l'explorateur de fichiers à gauche, va dans `front/`, clique droit sur `index.html`
- Choisis **"Open with Live Server"**
- Ton navigateur s'ouvre automatiquement sur le site, avec rechargement auto à chaque sauvegarde

### 3. Modifier le site

- Les fichiers à modifier sont dans `front/` (les pages `.html`) et `front/assets/` (le style et le comportement)
- Sauvegarde avec `Cmd + S` — si Live Server tourne, le navigateur se recharge tout seul

### 4. Envoyer tes modifications sur GitHub (commit + push)

Comme ton Mac est trop ancien pour installer GitHub Desktop, on passe par le **Terminal intégré de VS Code** — c'est le même résultat, juste en tapant quelques commandes au lieu de cliquer des boutons.

**Ouvrir le terminal dans VS Code :**
- Menu `Terminal > New Terminal` (ou `` Ctrl + ` ``)
- Un panneau s'ouvre en bas de VS Code — c'est le Terminal Mac classique, juste intégré à l'éditeur

**Les 4 commandes à connaître :**

1. **Voir ce que t'as changé**
   ```
   git status
   ```
   Ça liste les fichiers modifiés en rouge.

2. **Ajouter tes changements**
   ```
   git add .
   ```
   Le `.` veut dire "tous les fichiers modifiés". Cette commande ne fait qu'une chose : préparer les fichiers pour l'étape suivante, rien n'est encore envoyé.

3. **Créer un commit (un "instantané" de tes changements, avec un message qui décrit ce que t'as fait)**
   ```
   git commit -m "ce que t'as changé, en quelques mots"
   ```
   Exemple concret :
   ```
   git commit -m "ajout des photos de la cave sur la page prestations"
   ```

4. **Envoyer sur GitHub**
   ```
   git push
   ```

**Résumé du workflow, à chaque fois que tu veux envoyer tes modifs :**
```
git add .
git commit -m "description de ce que t'as fait"
git push
```

### 5. Récupérer les modifications de Tom

Avant de commencer à coder une session, pense à récupérer les dernières modifs de Tom, pour éviter les conflits :
```
git pull
```

À taper dans le Terminal de VS Code, dans le dossier du projet, avant de commencer à travailler.

---

## En cas de blocage

- **"git n'est pas reconnu comme une commande"** → Git n'est probablement pas installé sur ta machine. Tape `git --version` dans le Terminal — s'il n'est pas installé, macOS proposera de l'installer automatiquement (via les outils en ligne de commande Xcode).
- **Un message d'erreur au `git push` du genre "rejected" / "non-fast-forward"** → ça veut dire que Tom a poussé des changements que tu n'as pas encore récupérés. Fais un `git pull` d'abord, puis retente `git push`.
- **Un conflit après un `git pull`** → appelle Tom, on regarde ensemble plutôt que de risquer d'écraser du travail.