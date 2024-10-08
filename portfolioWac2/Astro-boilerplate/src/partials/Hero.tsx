import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from "astro-boilerplate-components";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Bonjour et bienvenue, sur mon <GradientText>Portfolio</GradientText>
        </>
      }
      description={
        <>
          Fraichement diplômé en tant que développeur et intégrateur web.<br></br> Découvrez
          mon{" "}
          <a className="text-cyan-400 hover:underline" href="/">
            portfolio
          </a>{" "}
          ! <br/> Explorez mes{" "}
          <a className="text-red-400 hover:underline" href="/">
            compétences
          </a>{" "}
          ,
          <a className="text-purple-400 hover:underline" href="/">
            projets
          </a>{" "}
          et{" "}
          <a className="text-green-400 hover:underline" href="/">
            passions
          </a>{" "}
          pour la création de sites web.{""}
        </>
      }
      avatar={
        <div className="container">
          <div className="ml-auto right" data-tilt>
            <img
              className="w-45 h-40 rounded-full"
              src="assets/images/adrien.ritterepitech.eu.jpg" alt="photo de profil"
            />
            
            <h2 className="text-4xl font-semibold">Adrien Ritter</h2>
            <h1 className="text-2xl text-cyan-400 hover:underlinefont-semibold">A la recherche d'une nouvelle<br/> opportunité d'emploie</h1>
            <br />
            <p className="text-lg mx-auto max-w-xs">
              06 67 16 10 32
            
              adrien.ritter.dev@gmail.com
            </p>
            <a
              href="#contact-form"
              className="text-decoration-none inline-block text-lg font-bold bg-black text-pink-500 px-8 py-3 rounded-full mt-8 hover:bg-pink-500 hover:text-black "
            >
              Contactez-moi
            </a>
          </div>
        </div>
      }
      socialButtons={
        <>
          <a href="https://github.com/" target="_blank">
            <HeroSocial
              src="/assets/images/github_icone.png"
              alt="Github icon"
            />
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
