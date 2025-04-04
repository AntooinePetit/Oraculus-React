import { create } from "zustand";

const horo = [
   {
     "id": 1,
     "signe": "Bélier",
     "date": "21 mars au 20 avril",
     "amour": "Ce mois-ci, l'amour sera au rendez-vous pour les Béliers. Votre charme naturel sera irrésistible, attirant de nouvelles personnes dans votre vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Vous ressentirez un désir intense et une profonde connexion émotionnelle. Prenez le temps de raviver la flamme et de créer des souvenirs inoubliables avec votre partenaire.",
     "travail": "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Béliers. Votre détermination et votre créativité seront vos atouts principaux. Soyez prêt à saisir de nouvelles opportunités et à relever des défis ambitieux. Votre leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Restez concentré sur vos objectifs et travaillez avec acharnement pour atteindre vos ambitions professionnelles.",
     "argent": "En ce qui concerne vos finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de votre argent. Vous aurez l'opportunité de consolider vos finances et de mettre en place des stratégies d'économie judicieuses. Évitez les dépenses impulsives et concentrez-vous sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Restez vigilant et évitez les prises de risques inutiles pour maintenir une situation financière solide.",
     "sante": "Ce mois-ci, accordez une attention particulière à votre bien-être physique et mental. Pratiquez régulièrement une activité physique pour maintenir votre énergie et votre vitalité. N'oubliez pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
     "famille": "Votre famille et vos amis seront une source de soutien et de réconfort ce mois-ci. Passez du temps de qualité avec vos proches pour renforcer les liens affectifs. Écoutez leurs préoccupations et partagez les vôtres. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
     "conseil": "Ce mois-ci, rappelez-vous que la patience est une vertu. Ne vous précipitez pas dans vos décisions, que ce soit dans votre carrière, vos finances ou vos relations. Prenez le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie vous aidera à éviter les erreurs potentielles et à atteindre vos objectifs de manière plus efficace.",
     "image": "/images/belier.png"
   },
   {
     "id": 2,
     "signe": "Taureau",
     "date": "21 avril au 20 mai",
     "amour": "Les Taureaux connaîtront un renouveau romantique ce mois-ci. Pour les célibataires, de nouvelles rencontres pourraient éveiller leur intérêt. Les couples ressentiront le besoin de renforcer leur complicité par de petites attentions quotidiennes.",
     "travail": "Le domaine professionnel sera stable. Leur persévérance portera ses fruits, notamment dans les projets de longue haleine. Ils devraient se montrer ouverts aux conseils de leurs collègues.",
     "argent": "Une période favorable pour réévaluer leur budget. Des gains inattendus pourraient alléger certaines charges financières.",
     "sante": "Ils devront surveiller leur alimentation et éviter les excès. Privilégier les activités en plein air leur sera bénéfique.",
     "famille": "Des retrouvailles familiales renforceront les liens affectifs. Ils devraient partager leurs préoccupations pour éviter les malentendus",
     "conseil": "Patience et détermination seront leurs meilleurs alliés ce mois-ci.",
     "image": "/images/taureau.png"
   },
   {
     "id": 3,
     "signe": "Gémeaux",
     "date": "21 mai au 20 juin",
     "amour": "Ce mois-ci, les Gémeaux vivront des moments d'amour passionnés et excitants. Leur charme naturel sera irrésistible, attirant de nouvelles personnes dans leur vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Ils ressentiront un désir intense et une profonde connexion émotionnelle. Ils devraient prendre le temps de raviver la flamme et de créer des souvenirs inoubliables avec leur partenaire.",
     "travail": "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Gémeaux. Leur détermination et leur créativité seront leurs atouts principaux. Ils devraient être prêts à saisir de nouvelles opportunités et à relever des défis ambitieux. Leur leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Ils doivent rester concentrés sur leurs objectifs et travailler avec acharnement pour atteindre leurs ambitions professionnelles.",
     "argent": "En ce qui concerne leurs finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de leur argent. Ils auront l'opportunité de consolider leurs finances et de mettre en place des stratégies d'économie judicieuses. Ils devraient éviter les dépenses impulsives et se concentrer sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Ils doivent rester vigilants et éviter les prises de risques inutiles pour maintenir une situation financière solide.",
     "sante": "Ce mois-ci, les Gémeaux devraient accorder une attention particulière à leur bien-être physique et mental. Ils devraient pratiquer régulièrement une activité physique pour maintenir leur énergie et leur vitalité. N'oubliant pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
     "famille": "La famille et les amis des Gémeaux seront une source de soutien et de réconfort ce mois-ci. Les Gémeaux devraient passer du temps de qualité avec leurs proches pour renforcer les liens affectifs. Ils devraient écouter leurs préoccupations et partager les leurs. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
     "conseil": "Ce mois-ci, les Gémeaux devraient se rappeler que la patience est une vertu. Ils ne devraient pas se précipiter dans leurs décisions, que ce soit dans leur carrière, leurs finances ou leurs relations. Ils devraient prendre le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie les aidera à éviter les erreurs potentielles et à atteindre leurs objectifs de manière plus efficace.",
     "image": "/images/cancer.png"
   },
   {
     "id": 4,
     "signe": "Cancer",
     "date": "21 juin au 22 juillet",
     "amour": "Les Cancers vivront des moments passionnés et excitants ce mois-ci. Leur charme naturel sera irrésistible, attirant de nouvelles personnes dans leur vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Ils ressentiront un désir intense et une profonde connexion émotionnelle. Ils devraient prendre le temps de raviver la flamme et de créer des souvenirs inoubliables avec leur partenaire.",
     "travail": "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Cancers. Leur détermination et leur créativité seront leurs atouts principaux. Ils devraient être prêts à saisir de nouvelles opportunités et à relever des défis ambitieux. Leur leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Ils doivent rester concentrés sur leurs objectifs et travailler avec acharnement pour atteindre leurs ambitions professionnelles.",
     "argent": "En ce qui concerne leurs finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de leur argent. Ils auront l'opportunité de consolider leurs finances et de mettre en place des stratégies d'économie judicieuses. Ils devraient éviter les dépenses impulsives et se concentrer sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Ils doivent rester vigilants et éviter les prises de risques inutiles pour maintenir une situation financière solide.",
     "sante": "Ce mois-ci, les Cancers devraient accorder une attention particulière à leur bien-être physique et mental. Ils devraient pratiquer régulièrement une activité physique pour maintenir leur énergie et leur vitalité. N'oubliant pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
     "famille": "La famille et les amis des Cancers seront une source de soutien et de réconfort ce mois-ci. Les Cancers devraient passer du temps de qualité avec leurs proches pour renforcer les liens affectifs. Ils devraient écouter leurs préoccupations et partager les leurs. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
     "conseil": "Ce mois-ci, les Cancers devraient se rappeler que la patience est une vertu. Ils ne devraient pas se précipiter dans leurs décisions, que ce soit dans leur carrière, leurs finances ou leurs relations. Ils devraient prendre le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie les aidera à éviter les erreurs potentielles et à atteindre leurs objectifs de manière plus efficace.",
     "image": "/images/cancer.png"
   },
   {
     "id": 5,
     "signe": "Lion",
     "date": "23 juillet au 22 août",
     "amour": "Les Lions vivront des moments d'amour passionnés et excitants ce mois-ci. Leur charme naturel sera irrésistible, attirant de nouvelles personnes dans leur vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Ils ressentiront un désir intense et une profonde connexion émotionnelle. Ils devraient prendre le temps de raviver la flamme et de créer des souvenirs inoubliables avec leur partenaire.",
     "travail": "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Lions. Leur détermination et leur créativité seront leurs atouts principaux. Ils devraient être prêts à saisir de nouvelles opportunités et à relever des défis ambitieux. Leur leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Ils doivent rester concentrés sur leurs objectifs et travailler avec acharnement pour atteindre leurs ambitions professionnelles.",
     "argent": "En ce qui concerne leurs finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de leur argent. Ils auront l'opportunité de consolider leurs finances et de mettre en place des stratégies d'économie judicieuses. Ils devraient éviter les dépenses impulsives et se concentrer sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Ils doivent rester vigilants et éviter les prises de risques inutiles pour maintenir une situation financière solide.",
     "sante": "Ce mois-ci, les Lions devraient accorder une attention particulière à leur bien-être physique et mental. Ils devraient pratiquer régulièrement une activité physique pour maintenir leur énergie et leur vitalité. N'oubliant pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
     "famille": "La famille et les amis des Lions seront une source de soutien et de réconfort ce mois-ci. Les Lions devraient passer du temps de qualité avec leurs proches pour renforcer les liens affectifs. Ils devraient écouter leurs préoccupations et partager les leurs. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
     "conseil": "Ce mois-ci, les Lions devraient se rappeler que la patience est une vertu. Ils ne devraient pas se précipiter dans leurs décisions, que ce soit dans leur carrière, leurs finances ou leurs relations. Ils devraient prendre le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie les aidera à éviter les erreurs potentielles et à atteindre leurs objectifs de manière plus efficace.",
     "image": "/images/capricorne.png"
   },
   {
     "id": 6,
     "signe": "Vierge",
     "date": "23 août au 22 septembre",
     "amour": "Les Vierges vivront une période harmonieuse en amour. Les couples pourront envisager des projets à deux tandis que les célibataires attireront par leur sincérité.",
     "travail": "Leur rigueur sera appréciée par leurs supérieurs. C’est le moment de proposer de nouvelles idées ou de se lancer dans un projet ambitieux.",
     "argent": "Prudence sur les dépenses. Il est recommandé d’éviter les investissements risqués et de privilégier l’épargne.",
     "sante": "Une énergie renouvelée leur permettra de mener à bien leurs activités quotidiennes. Il serait bénéfique d'intégrer une routine de relaxation pour éviter le stress.",
     "famille": "L’ambiance familiale sera sereine. Ils devront néanmoins éviter les discussions houleuses sur des sujets sensibles.",
     "conseil": "Faire preuve de flexibilité dans leurs relations leur ouvrira de nouvelles perspectives.",
     "image": "/images/vierge.png"
   },
   {
     "id": 7,
     "signe": "Balance",
     "date": "23 septembre au 22 octobre",
     "amour": "Les Balances pourraient traverser une période de questionnements amoureux. Il est important d'écouter leur cœur tout en restant rationnel.",
     "travail": "Leur diplomatie sera un atout majeur pour dénouer des situations complexes au travail. Des opportunités de collaboration enrichissantes pourraient se présenter.",
     "argent": "Ce mois-ci, il est préférable de bien évaluer chaque dépense. Une rentrée d'argent inattendue pourrait leur offrir un peu plus de confort.",
     "sante": "Un regain de vitalité leur permettra d'entreprendre de nouvelles activités physiques. Il est conseillé de ne pas négliger le repos.",
     "famille": "Un soutien familial précieux les aidera à traverser les moments délicats. Ils devraient rester attentifs aux besoins de leurs proches.",
     "conseil": "Faire preuve d'honnêteté, surtout envers eux-mêmes, sera essentiel pour avancer sereinement.",
     "image": "/images/balance.png"
   },
   {
     "id": 8,
     "signe": "Scorpion",
     "date": "23 octobre au 22 novembre",
     "amour": "Les Scorpions vivront des émotions intenses. Pour les célibataires, une rencontre marquante est possible. Les couples devront miser sur la transparence pour éviter les tensions.",
     "travail": "Leur intuition les guidera vers de belles opportunités professionnelles. Ils devraient rester attentifs aux signes autour d’eux.",
     "argent": "Il serait sage de privilégier une gestion prudente de leurs finances. Un conseil avisé pourrait les aider à éviter des erreurs.",
     "sante": "Une légère baisse de régime est possible. Un rythme de vie équilibré leur permettra de retrouver rapidement leur dynamisme.",
     "famille": "La famille sera un refuge apaisant. Ils devraient partager leurs émotions pour renforcer les liens.",
     "conseil": "Ne pas hésiter à demander de l'aide lorsqu'ils en ressentent le besoin.",
     "image": "/images/scorpion.png"
   },
   {
     "id": 9,
     "signe": "Sagittaire",
     "date": "23 novembre au 21 décembre",
     "amour": "Les Sagittaires auront soif d’aventures et de nouveautés en amour. Ils devraient toutefois veiller à ne pas se précipiter dans leurs décisions sentimentales.",
     "travail": "De nouvelles perspectives professionnelles pourraient s’ouvrir à eux. Leur esprit d'initiative sera particulièrement apprécié.",
     "argent": "Ce mois-ci, la prudence sera de mise dans la gestion de leurs finances. Une évaluation minutieuse des investissements potentiels est recommandée.",
     "sante": "Une bonne énergie les accompagnera tout au long du mois. Ils devraient en profiter pour adopter de saines habitudes de vie.",
     "famille": "Des échanges sincères avec leurs proches renforceront les liens familiaux. Ils devraient privilégier la qualité du temps passé ensemble.",
     "conseil": "Faire preuve de discernement avant d'agir leur évitera bien des déconvenues.",
     "image": "/images/sagittaire.png"
   },
   {
     "id": 10,
     "signe": "Capricorne",
     "date": "22 décembre au 20 janvier",
     "amour": "Les Capricornes vivront des moments passionnés et excitants ce mois-ci. Leur charme naturel sera irrésistible, attirant de nouvelles personnes dans leur vie. Pour les couples, la communication sera la clé pour renforcer les liens existants. Ils ressentiront un désir intense et une profonde connexion émotionnelle. Ils devraient prendre le temps de raviver la flamme et de créer des souvenirs inoubliables avec leur partenaire.",
     "travail": "Dans le domaine professionnel, les astres prédisent une période de croissance et d'accomplissement pour les Capricornes. Leur détermination et leur créativité seront leurs atouts principaux. Ils devraient être prêts à saisir de nouvelles opportunités et à relever des défis ambitieux. Leur leadership sera reconnu, ce qui pourrait ouvrir des portes vers l'avancement ou de nouveaux projets passionnants. Ils doivent rester concentrés sur leurs objectifs et travailler avec acharnement pour atteindre leurs ambitions professionnelles.",
     "argent": "En ce qui concerne leurs finances, ce mois-ci s'annonce plutôt stable et propice à la gestion prudente de leur argent. Ils auront l'opportunité de consolider leurs finances et de mettre en place des stratégies d'économie judicieuses. Ils devraient éviter les dépenses impulsives et se concentrer sur la planification financière à long terme. Les investissements réfléchis pourraient porter leurs fruits. Ils doivent rester vigilants et éviter les prises de risques inutiles pour maintenir une situation financière solide.",
     "sante": "Ce mois-ci, les Capricornes devraient accorder une attention particulière à leur bien-être physique et mental. Ils devraient pratiquer régulièrement une activité physique pour maintenir leur énergie et leur vitalité. N'oubliant pas de prendre des moments de relaxation pour gérer le stress. Une alimentation équilibrée et un sommeil suffisant sont essentiels pour maintenir une bonne santé.",
     "famille": "La famille et les amis des Capricornes seront une source de soutien et de réconfort ce mois-ci. Les Capricornes devraient passer du temps de qualité avec leurs proches pour renforcer les liens affectifs. Ils devraient écouter leurs préoccupations et partager les leurs. La communication ouverte sera la clé pour maintenir des relations harmonieuses.",
     "conseil": "Ce mois-ci, les Capricornes devraient se rappeler que la patience est une vertu. Ils ne devraient pas se précipiter dans leurs décisions, que ce soit dans leur carrière, leurs finances ou leurs relations. Ils devraient prendre le temps de réfléchir et d'évaluer toutes les options avant de prendre des décisions importantes. La réflexion approfondie les aidera à éviter les erreurs potentielles et à atteindre leurs objectifs de manière plus efficace.",
     "image": "/images/capricorne.png"
   },
   {
     "id": 11,
     "signe": "Verseau",
     "date": "21 janvier au 18 février",
     "amour": "Les Verseaux ressentiront le besoin de nouveauté dans leur vie amoureuse. Une rencontre inattendue pourrait bousculer leur quotidien.",
     "travail": "Leur créativité sera leur meilleure alliée au travail. Ils devraient partager leurs idées novatrices avec leur équipe.",
     "argent": "Une bonne gestion de leur budget leur permettra de réaliser quelques projets personnels. Ils devraient éviter les dépenses superflues.",
     "sante": "Une attention particulière à leur bien-être mental sera nécessaire. Des moments de détente leur feront le plus grand bien.",
     "famille": "La famille jouera un rôle apaisant. Ils devraient se rendre disponibles pour leurs proches.",
     "conseil": "Faire preuve d'ouverture d'esprit leur permettra de saisir de nouvelles opportunités.",
     "image": "/images/verseau.png"
   },
   {
     "id": 12,
     "signe": "Poissons",
     "date": "19 février au 20 mars",
     "amour": "Les Poissons vivront une période riche en émotions. Pour les couples, des discussions constructives permettront de renforcer les liens. Les célibataires pourraient se laisser surprendre par un coup de foudre.",
     "travail": "Leur sensibilité et leur intuition leur permettront de prendre des décisions éclairées dans leur carrière.",
     "argent": "Il est conseillé de suivre un budget strict pour éviter les imprévus financiers. De petits gains supplémentaires pourraient les aider à équilibrer leur situation.",
     "sante": "Une activité physique douce les aidera à évacuer le stress accumulé. Ils devraient veiller à bien s’hydrater et à maintenir une alimentation équilibrée.",
     "famille": "Leur soutien sera particulièrement apprécié par leurs proches. Ils devraient écouter attentivement les besoins de leur entourage.",
     "conseil": "Faire confiance à leur intuition leur ouvrira de nouvelles perspectives dans tous les domaines de leur vie.",
     "image": "/images/poissons.png"
   }        
 ]


const horoscopeStore = create((set) => ({
   horoscope: horo,
   currentIndex: 0,
   prevIndex : 11,
   nextIndex : 1,
   next : () => set((state) => ({
      currentIndex : state.currentIndex >= state.horoscope.length - 1 ? 0 : state.currentIndex + 1,
      prevIndex : state.prevIndex >= state.horoscope.length - 1  ? 0 : state.prevIndex + 1,
      nextIndex : state.nextIndex >= state.horoscope.length - 1  ? 0 : state.nextIndex + 1,
   })),
   previous: () => set((state) => ({
      currentIndex : state.currentIndex <= 0 ? state.horoscope.length - 1 : state.currentIndex - 1,
      prevIndex : state.prevIndex <= 0 ? state.horoscope.length - 1 : state.prevIndex - 1,
      nextIndex : state.nextIndex <= 0 ? state.horoscope.length - 1 : state.nextIndex - 1
   })),
}))

export default horoscopeStore