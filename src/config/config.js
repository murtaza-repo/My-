import collegifyImg from '../img/Collegify.png';
import todoApp from '../img/todoApp.png';
import comeNplay from '../img/comeNplay.png';
import recipeBook from '../img/recipeBook.png';
import burgerBuilder from '../img/burgerBuilder.png';
import como from '../img/como.png';

export const configuration = {
    Navbar:{
        NavbarTitle:'MK',
        NabarOptions:['portfolio','about','contact']
    },
    Masthead:{
        MastheadTitle:'Murtaza Khachrodwala',
        Labels:['An I.T. Professional','A FullStack Developer','A Data Analyst', 'A Python Developer']
    },
    Portfolio:{
        PortfolioTitle:'my work',
        PortfolioItems:[
            {image:collegifyImg,name:'Collegify App',des:'des cabin'},
            {image:todoApp,name:'Todo App',des:'des cake'},
            {image:comeNplay,name:'Come-N-play App',des:'des circus'},
            {image:recipeBook,name:'RecipeBook App',des:'des game'},
            {image:burgerBuilder,name:'BurgerBuilder App',des:'des safe'},
            {image:como,name:'CoMo App',des:'des submaribe'},
        ]
    },
    About:{
        AboutTitle:'About Me',
        AboutMe1Sec:`Hi! My name is Murtaza Khachrodwala.`,
        AboutMe2Sec:`You can create your own custom avatar for the masthead, change the icon in the dividers,
        and add your email address to the contact form to make it fully functional!`,
        ButtonName:'Resume',
        ButtonIconFontAwesome:'fas fa-download mr-2',
        ButtonSite:'https://drive.google.com/file/d/1TnwnY2CeMUVttXSE0atMsd6j_vzjFTFi/view?usp=sharing'
    },
    Footer:{
        section2:{
            title:'Around the Web',
            facebook:'https://www.facebook.com/murtaza.khachrod',
            twitter:'https://twitter.com/Murtaza_kh53',
            linkedin:'https://in.linkedin.com/in/murtaza-khachrodwala',
            github:'https://github.com/murtaza-repo'
        }
    }
}
