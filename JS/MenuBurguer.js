// Criando classe para atribuir elementos do menu mobile
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);

    }
    //Método que verifica e atribui animação a cada link
    animateLinks(){
        this.navLinks.forEach((link, index) => {
            //operador ternário verifica se link possui animação
            link.style.animation
            ? (link.style.animation = "") // se possuir retira
            : (link.style.animation = `navLinkFade 0.5s ease forwards 
            ${index / 7 + 0.3}s`); // atribui animação com delay de acordo 
                                   //a posição (index) do elemento
        });
    }
    //método atribui classe active ao menu classe: nav-list quando
    //ocorre o clique no ícone hamburguer classe: menu-mobile
    handleClick() {
        //atribuindo classe ativa ao nav-list
        this.navList.classList.toggle(this.activeClass); 
        //atribuindo classe ativa ao menu-mobile (efeito x)       
       // this.mobileMenu.classList.toggle(this.activeClass);
        //chamando método de animação dos links
        this.animateLinks();

    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
        
    }
    // iniciando evento click
    init(){
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",

);

mobileNavbar.init();