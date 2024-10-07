import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        <GradientText>Projets</GradientText> récents
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="E-Commerce"
        description="Projet de fin de première année visant à créer une plateforme de vente en ligne, tout en appliquant une méthodologie Agile (sprints, user stories).
         Implémentation de fonctionnalités clés : gestion des produits, panier, et commande. "
        link="https://github.com/AdrienRitter/E-commerce"
        img={{
          src: '/assets/images/e_commerce.webp',
          alt: 'Project e-commerce',
        }}
        category={
          <>
            <Tags color={ColorTags.INDIGO}>React-native</Tags>
            <Tags color={ColorTags.LIME}>Node</Tags>
            <Tags color={ColorTags.SLATE}>Express</Tags>
            <Tags color={ColorTags.YELLOW}>MongoDB</Tags>
          </>
        }
      />
      <Project
        name="HTML 5 Gaming"
        description="Ce projet avait comme but but de réaliser un jeu vidéo avec le phramer phaser,
         un framework de développement de jeux vidéo en HTML5 et JavaScript aisni que la création des effets sonores et des assets graphiques."
        link="https://github.com/AdrienRitter/My_IdleOn"
        img={{
          src: '/assets/images/Html5gaming.webp',
          alt: 'Projet html5 gaming',
        }}
        category={
          <>
            {/*<Tags color={ColorTags.FUCHSIA}>PHP</Tags>*/}
            <Tags color={ColorTags.RED}>Javascript</Tags>
            <Tags color={ColorTags.ORANGE}>HTML5</Tags>
            <Tags color={ColorTags.EMERALD}>Framework(Phaser)</Tags>
            <Tags color={ColorTags.SKY}>UI/UX</Tags>
          </>
        }
      />
      <Project
        name="Projet my_snapchat"
        description="C'est mon premier projet mobile qui avait pour but de nous faire recréer l'application snapchat, avec la possibilité de prendre des photos, de les envoyer à ses amis, et de les recevoir.
        Le tout avec react-native."
        link="https://github.com/AdrienRitter/My_snapchat"
        img={{ src: '/assets/images/snapchat_icone.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.RED}>Javascript</Tags>
            <Tags color={ColorTags.INDIGO}>React-native</Tags>
            <Tags color={ColorTags.EMERALD}>Framework</Tags>
            <Tags color={ColorTags.FUCHSIA}>Mobile</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
