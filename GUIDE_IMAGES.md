# 📸 Guide pour ajouter des photos au portfolio

## Structure des dossiers

Créez les dossiers suivants dans `public/images/` :

```
public/images/
├── profile/
│   └── profile-photo.jpg
└── projects/
    ├── project-1.jpg
    ├── project-2.jpg
    ├── project-3.jpg
    └── project-4.jpg
```

## 1. Photo de profil

**Emplacement** : `public/images/profile/profile-photo.jpg`

**Spécifications recommandées** :
- Format : JPG ou PNG
- Dimensions : Carré (1:1), minimum 400x400px
- Taille fichier : < 500KB (optimisé)
- Qualité : Professionnelle, bonne résolution

**Exemple de nommage** :
- `profile-photo.jpg`
- `photo-profil.png`
- `moi.jpg`

## 2. Images de projets

**Emplacement** : `public/images/projects/`

**Spécifications recommandées** :
- Format : JPG ou PNG
- Dimensions : Paysage (16:9), minimum 1200x675px
- Taille fichier : < 1MB par image (optimisé)
- Qualité : Haute résolution pour un rendu net

**Nommage** :
- `project-1.jpg` → Projet 1
- `project-2.jpg` → Projet 2
- `project-3.jpg` → Projet 3
- `project-4.jpg` → Projet 4

## 3. Optimisation des images

### Outils recommandés :

1. **TinyPNG** (https://tinypng.com/)
   - Compression sans perte de qualité visible
   - Support JPG et PNG

2. **Squoosh** (https://squoosh.app/)
   - Compression avancée
   - Support WebP

3. **ImageOptim** (Mac)
   - Application desktop
   - Compression automatique

### Format WebP (recommandé)

Si vous voulez utiliser WebP pour une meilleure compression :
- Modifiez les extensions dans les composants : `.jpg` → `.webp`
- Ajoutez un fallback pour les navigateurs non compatibles

## 4. Mise à jour des chemins

Les chemins sont déjà configurés dans les composants :

- **Photo de profil** : `/images/profile/profile-photo.jpg`
- **Projets** : `/images/projects/project-1.jpg`, etc.

Si vous utilisez des noms différents, modifiez les chemins dans :
- `src/components/About.jsx` (ligne ~86)
- `src/components/Projects.jsx` (ligne ~12, 24, 36, 48)

## 5. Fallback automatique

Le portfolio inclut un système de fallback :
- Si une image n'existe pas, un placeholder s'affiche automatiquement
- Pour les projets, un placeholder coloré s'affiche
- Aucune erreur ne sera visible pour les visiteurs

## 6. Exemple de structure complète

```
public/
├── images/
│   ├── profile/
│   │   └── profile-photo.jpg (400x400px, 250KB)
│   └── projects/
│       ├── project-1.jpg (1200x675px, 800KB)
│       ├── project-2.jpg (1200x675px, 750KB)
│       ├── project-3.jpg (1200x675px, 900KB)
│       └── project-4.jpg (1200x675px, 700KB)
```

## 7. Vérification

Après avoir ajouté vos images :

1. Redémarrez le serveur de développement : `npm start`
2. Vérifiez que les images s'affichent correctement
3. Testez le responsive (mobile, tablette, desktop)
4. Vérifiez les temps de chargement

## 💡 Astuces

- **Lazy loading** : Les images de projets utilisent `loading="lazy"` pour un chargement optimisé
- **Alt text** : Les textes alternatifs sont automatiquement générés
- **Responsive** : Les images s'adaptent automatiquement à la taille de l'écran
- **Performance** : Compressez toujours vos images avant de les ajouter

## ❓ Problèmes courants

**L'image ne s'affiche pas** :
- Vérifiez le chemin exact dans le dossier `public/images/`
- Vérifiez que le nom du fichier correspond exactement (sensible à la casse)
- Redémarrez le serveur de développement

**L'image est trop lourde** :
- Compressez l'image avec TinyPNG ou Squoosh
- Réduisez la résolution si nécessaire
- Utilisez le format WebP si possible

**L'image est floue** :
- Utilisez une résolution plus élevée
- Vérifiez que l'image source est de bonne qualité
- Évitez d'agrandir une petite image


