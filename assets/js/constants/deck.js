// Déclaration des cartes
export const deck = [
  {
    categorie: 'Comploteurs',
    groupe: 'Inutile',
    force: 1,
    nom: 'sibeth', // <- la carte sibeth.jpeg
    perso: 'Sibeth Ndiaye', // <- Le nom qui s'affiche dans la phrase de résultat
    info:`Ne sait pas mettre un masque mais y en avait pas donc c'est pas grave.`, // <- info principale du perso
    effet:`Sème le doute.` // <- Effet du perso qui s'affiche après un saut de ligne
  },
  {
    categorie: 'Comploteurs',
    groupe: 'Tueur',
    force: 1,
    nom: 'linky',
    perso: 'Linky',
    info:`Compteur jaune intelligent communiquant.`,
    effet:`Sous ses airs inoffensifs envoie du courant dans le cerveau de ses adversaires.` 
  },
  {
    categorie: 'Comploteurs',
    groupe: 'Inutile',
    force: 2,
    nom: 'castex',
    perso: 'Jean Castex',
    info:`Monsieur déconfinement. Puis reconfinement. Puis re-déconfinement…`,
    effet:`Répand confusion sur l’adversaire.`
  },
  {
    categorie: 'Comploteurs',
    groupe: 'Tueur',
    force: 2,
    nom: 'masque',
    perso: 'Le masque',
    info:`Protège de la mauvaise haleine (et des virus accessoirement).`,
    effet:`Asphyxie les sachants.`
  },
  {
    categorie: 'Comploteurs',
    groupe: 'Inutile',
    force: 3,
    nom: 'mouton',
    perso: 'Le troupeau de moutons',
    info:`Les fameux moutons dirigés par les médias. En troupeau vont tous dans la même direction.`,
    effet:`Gare aux coups de sabots ils sont nombreux.`
  },
  {
    categorie: 'Comploteurs',
    groupe: 'Lobby',
    force: 3,
    nom: 'bigpharma',
    perso: 'Big Pharma',
    info:`Compte ses sous et ce n'est pas suffisant, vraiment pas.`,
    effet:`Son argent fait interdire les remèdes miracles.`
  },
  {
    categorie: 'Comploteurs',
    groupe: 'Milliardaire',
    force: 4,
    nom: 'soros',
    perso: 'George Soros',
    info:`Le big boss du complot. 153 ans.`,
    effet:`Il manipule son adversaire mieux qu’un marionnettiste.`
  },
  {
    categorie: 'Comploteurs',
    groupe: 'Tueur',
    force: 4,
    nom: 'pcr',
    perso: 'Le test PCR',
    info:`Pas très fiable mais trop utilisé quand même.`,
    effet:`Perfore le cerveau à travers le nez.`
  },
  {
    categorie: 'Comploteurs',
    groupe: 'Média',
    force: 4,
    nom: 'house',
    perso: 'Dr House',
    info:`Médecin fictif de fiction qui ne respecte pas les protocoles réels ce qui outre réellement les téléspectateurs réels.`,
    effet:`Dégaine la maladie auto-immune.`
  },
  {
    categorie: 'Comploteurs',
    groupe: 'Tueur',
    force: 5,
    nom: '5g',
    perso: 'La 5G',
    info:`Propage des ondes partout.`,
    effet: `Rend les adversaires hypersensibles, sauf ceux vaccinés.`
  },
  {
    categorie: 'Comploteurs',
    groupe: 'Milliardaire',
    force: 5,
    nom: 'gates',
    perso: 'Bill Gates',
    info:`Apparaît dans tous les complots, son nom est devenu une marque.`,
    effet: `Réduit le nombre d’adversaires à l’aide de vaccins.`
  },
  {
    categorie: 'Comploteurs',
    groupe: 'Média',
    force: 6,
    nom: 'bfm',
    perso: 'BFM TV',
    info:`Bergerie Française pour Moutons. 24/7 de propagande des multi-millionnaires à la solde du gouvernement ou l’inverse.`,
    effet:`Répand le buzz qui rend sourd l’adversaire.`
  },
  {
    categorie: 'Comploteurs',
    groupe: 'Tueur',
    force: 6,
    nom: 'vaccin',
    perso: 'Le vaccin',
    info:`Tue les antivax, épargne les moutons et transforme l'ADN.`,
    effet:`Régulateur de population mondiale.`
  },
  {
    categorie: 'Comploteurs',
    groupe: 'Société secrète',
    force: 7,
    nom: 'illuminatis',
    perso: 'La société des illuminatis',
    info:`Imbattables, ils dirigent tout depuis la nuit des temps. Si c’est pas eux, c’est quand même eux.`,
    effet:`Tuent les adversaires avant leur naissance.`
  },
  {
    categorie: 'Comploteurs',
    groupe: 'Religieux',
    force: 7,
    nom: 'satan',
    perso: 'Satan',
    info:`Prépare les pires complots grâce aux sacrifices d’enfants.`,
    effet:`Les flammes de l’enfer brûleront l’adversaire.`
  },
  {
    categorie: 'Comploteurs',
    groupe: 'Société secrète',
    force: 8,
    nom: 'francmacon',
    perso: 'La franc-maçonnerie',
    info:`Il ne construisent rien malgré leur nom.`,
    effet:`Par contre ils détruisent les adversaires à coup de truelle.`
  },
  {
    categorie: 'Comploteurs',
    groupe: 'Société secrète',
    force: 8,
    nom: 'deepstate',
    perso: `L'état profond`,
    info:`Tellement profond qu’on ne l’a jamais vu.`,
    effet:`Lance des pédophiles sur ses adversaires.`
  },
  {
    categorie: 'Comploteurs',
    groupe: 'Tueur',
    force: 9,
    nom: 'toux',
    perso: `La quinte de toux`,
    info:`Toux sèche qui donne envie de se graisser la gorge avec de l'huile de vidange.`,
    effet:`Disperse des postillons contaminés dans l'air.`
  },
  {
    categorie: 'Comploteurs',
    groupe: 'Religieux',
    force: 9,
    nom: 'pape',
    perso: `Le pape`,
    info:`Possède suffisamment d'argent pour éradiquer la faim dans le monde mais Dieu ne lui a pas demandé.`,
    effet:`Libera te tutemet ex inferis.`
  },
  {
    categorie: 'Comploteurs',
    groupe: 'Joker',
    force: 10,
    nom: 'chuck',
    perso: `Chuck Norris`,
    info:`Une carte ne peut pas présenter Chuck Norris. Internet n'est pas assez puissant pour Chuck Norris.`,
    effet:`Met les pieds où il veut, et c'est souvent dans la gueule.`
  },
  {
    categorie: 'Comploteurs',
    groupe: 'Joker',
    force: 10,
    nom: 'vague',
    perso: `La 2ème vague`,
    info:`Personne ne l’avait vu venir. Enfin si mais pas sur les chaines Youtube obscures.`,
    effet:`Fais chavirer les âmes des adversaires.`
  },
  {
    categorie: 'Complotistes',
    groupe: 'Média',
    force: 1,
    nom: 'holdup',
    perso: 'Hold Up',
    info:`Ouvre les yeux des non moutons.`,
    effet:`Propage la maladie "crédulité".`
  },
  {
    categorie: 'Complotistes',
    groupe: 'Média',
    force: 1,
    nom: 'cnews',
    perso: 'CNews',
    info:`Canal privilégié pour relayer les complots.`,
    effet:`Jette des intox sur son adversaire pendant qu’il s’enfuie.`
  },
  {
    categorie: 'Complotistes',
    groupe: 'Milliardaire',
    force: 2,
    nom: 'trump',
    perso: 'Donald Trump',
    info:`Agent orange infiltré contre le nouvel ordre mondial.`,
    effet:`S'accroche à sa cible jusqu'à la mort.`
  },
  {
    categorie: 'Complotistes',
    groupe: 'Patron de PMU',
    force: 2,
    nom: 'praud',
    perso: 'Pascal Praud',
    info:`On ne peut plus rien dire mais lui y arrive.`,
    effet:`Crie tout ce qui lui passe par la tête plus fort que l’adversaire.`
  },
  {
    categorie: 'Complotistes',
    groupe: 'Média',
    force: 3,
    nom: 'sudradio',
    perso: 'Sud Radio',
    info:`Radio écoutée uniquement par Eric Zemmour et le RN.`,
    effet:`Lance des phrases choc. Quel genre ? Genre des phrases choc.`
  },
  {
    categorie: 'Complotistes',
    groupe: `Lanceur d'alerte`,
    force: 3,
    nom: 'q',
    perso: 'Q',
    info:`Lanceur d'alerte anonyme sans preuve de l'alerte à lancer.`,
    effet:`Répand la sectite aigüe.`
  },
  {
    categorie: 'Complotistes',
    groupe: 'Prophète',
    force: 4,
    nom: 'perronne',
    perso: 'Christian Perronne',
    info:`Le lyme il le déteste, il le préfère dans son verre.`,
    effet:`Frappe les journalistes sur les plateaux TV armé de ses livres.`
  },
  {
    categorie: 'Complotistes',
    groupe: 'Patron de PMU',
    force: 4,
    nom: 'bigard',
    perso: 'Jean-Marie Bigard',
    info:`Connu pour ses sketches, il en est devenu un.`,
    effet:`Gueule sur ses adversaires jusqu’à explosion de leurs tympans.`
  },
  {
    categorie: 'Complotistes',
    groupe: `Lanceur d'alerte`,
    force: 5,
    nom: 'krusi',
    perso: 'Ema Krusi',
    info:`Ne connait pas la neutralité Suisse. Elle lui dit merde.`,
    effet:`Détruit les lois pro-masque.`
  },
  {
    categorie: 'Complotistes',
    groupe: `Lanceur d'alerte`,
    force: 5,
    nom: 'engerer',
    perso: 'Eve Engerer',
    info:`Elle a tout compris ! TOUT ! C’est compris ?`,
    effet:`Voit au travers de l’adversaire grâce à ses dons de voyance.`
  },
  {
    categorie: 'Complotistes',
    groupe: `Milliardaire`,
    force: 5,
    nom: 'jair',
    perso: 'Jair Bolsonaro',
    info:`N'aime pas les femmes, les homosexuels, les Noirs et les peuples indigènes. Ça tombe bien au Brésil pas grand monde ne l'aime.`,
    effet:`Balance de l'hydroxychloroquine dans les yeux de son adversaire.`
  },
  {
    categorie: 'Complotistes',
    groupe: `Patron de PMU`,
    force: 6,
    nom: 'zemmour',
    perso: 'Eric Zemmour',
    info:`Pied noir à la parole libre contre les juifs et l’islam.`,
    effet:`Envoie des faux chiffres sur les conséquences de l’immigration pour effrayer son adversaire.`
  },
  {
    categorie: 'Complotistes',
    groupe: `Prophète`,
    force: 6,
    nom: 'raoult',
    perso: 'Didier Raoult',
    info:`Le covid 19 c'est du fantasme, il n'y croit pas.`,
    effet:`Ses prophéties sont fausses mais redoutables.`
  },
  {
    categorie: 'Complotistes',
    groupe: `Tueur`,
    force: 7,
    nom: 'hcq',
    perso: "L'hydroxychloroquine",
    info:`Utilisé dans des pays où il est interdit.`,
    effet:`Soigne les covid+ en bonne santé.`
  },
  {
    categorie: 'Complotistes',
    groupe: `Patron de PMU`,
    force: 7,
    nom: 'soral',
    perso: "Alain Soral",
    info:`Youtubeur musclé sur canapé.`,
    effet:`Fais apparaître des leurres juifs pour étourdir l’adversaire.`
  },
  {
    categorie: 'Complotistes',
    groupe: `Prophète`,
    force: 8,
    nom: 'trotta',
    perso: 'Sylvano Trotta',
    info:`Star lunaire sur Youtube.`,
    effet:`Avec lui tout est creux même ses théories.`
  },
  {
    categorie: 'Complotistes',
    groupe: `Prophète`,
    force: 8,
    nom: 'dieudonne',
    perso: 'Dieudonné',
    info:`Humoriste censuré reconverti en fabricant de quenelles.`,
    effet:`Fais des incantations vaudous pour transformer l’adversaire en Jean-Marie Le Pen.`
  },
  {
    categorie: 'Complotistes',
    groupe: `Joker`,
    force: 10,
    nom: 'youtube',
    perso: 'Youtube',
    info:`Si c’est sur Youtube c’est forcément vrai, renseigne-toi !`,
    effet:`Propage la folie sur ses adversaires.`
  },
  {
    categorie: 'Complotistes',
    groupe: `Joker`,
    force: 10,
    nom: 'lancetgate',
    perso: 'Le Lancetgate',
    info:`Les études scientifiques sont corrompues par les labos à la solde de la CIA.`,
    effet:`Jette un froid sur la recherche.`
  },
]