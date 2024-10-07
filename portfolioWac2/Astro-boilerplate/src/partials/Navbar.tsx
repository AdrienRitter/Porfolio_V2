import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      {/*trouver pourquoi on ne peut pas changer le pdf*/}
      <a href="assets/images/Adrien Ritter.pdf" target='_blank'>
        <Logo
          icon={
            <img
              src="assets/images/cv.webp"
              alt="cv"
              className="w-12 h-12"
            />
          }
          name={
            <span className="inline-block transition duration-300 transform hover:-translate-y-1">
              Télécharger mon CV
            </span>
          }
        />
      </a>

      <NavMenu>
        <div className='flex mr-40 gap-8'>
          <NavMenuItem href="https://www.linkedin.com/feed/" >Linkedin</NavMenuItem>
          <NavMenuItem href="https://github.com/">GitHub</NavMenuItem>
        </div>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
