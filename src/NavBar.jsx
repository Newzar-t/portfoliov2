import gsap from 'gsap';

function NavItem({ link, item}){

    return (
        <a href={link}>{item}</a>
    );
}

function NavBar(){
    return(
        <header>
            <nav>
                <NavItem link="#home" item="Accueil" />
                <NavItem link="#work" item="Projets" />
                <NavItem link="#aboutme" item="Qui suis-je ?" />
                <NavItem link="#contact" item="Contact" />
            </nav>
        </header>
    )
}

export default NavBar;