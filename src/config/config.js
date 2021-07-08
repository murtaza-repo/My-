import collegifyImg from '../img/Collegify.png';
import todoApp from '../img/todoApp.png';
import hms from '../img/hms.png';
import recipeBook from '../img/recipeBook.png';
import burgerBuilder from '../img/burgerBuilder.png';
import como from '../img/como.png';

export const configuration = {
    Navbar:{
        NavbarTitle:'MK',
        NabarOptions:['Projects', 'Activities','about','contact']
    },
    Masthead:{
        MastheadTitle:'Murtaza Khachrodwala',
        Labels:['An I.T. Professional','A FullStack Developer','A Web Designer & Developer', 'A System Engineer']
    },
    Portfolio:{
        PortfolioTitle:'my work',
        PortfolioItems:[
            {image:collegifyImg,name:'Collegify App',des:'A Modern Javascript Application developed to provide common platform to students where they can find inter-college events and placements/campus-drives details and register for the same via App.',link:'https://wwwsaiftechtk.000webhostapp.com/'},
            {image:todoApp,name:'Todo App',des:'A compact todo app created using latest React features that makes it handy to use.',link:'https://todoappreact53.web.app/'},
            {image:hms,name:'HMS App',des:'A Hospital Managment System design and developed using Python Flask Framework. This project comprises of self-created APIs endpoints that guides the App flow. It uses Flask SQlAlchemy as the database library which is based on object manipulation which makes the project easy to integrate in an Object Oriented Environment.', link:'https://murtaza.pythonanywhere.com/'},
            {image:recipeBook,name:'RecipeBook App',des:'An Angular CRUD App which allow users to Create, Read, Update & Delete Recipes and Ingredients required for respective recipes. It also help to create a shopping list with an ease by simply going through recipes.',link:'https://angularrecipebook-a0067.web.app/'},
            {image:burgerBuilder,name:'BurgerBuilder App',des:'Do you have craving for a delicious burger? Check out this Burgerbuilder App that lets you create your own burger with ease before actually ordering it.', link:'https://burger-builder5.web.app/'},
            {image:como,name:'CoMo App',des:'A CoMo (COVID Monitor) App that help users to monitor spread of COVID-19 globally and specifically with different charts and records.', link:'https://comoapp1.web.app/'},
        ]
    },
    About:{
        AboutTitle:'About Me',
        AboutMe1Sec:`Hi! My name is Murtaza Khachrodwala.`,
        AboutMe2Sec:`About to go...`,
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
