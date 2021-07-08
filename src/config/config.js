import collegifyImg from '../img/Collegify.png';
import todoApp from '../img/todoApp.png';
import hms from '../img/hms.png';
import recipeBook from '../img/recipeBook.png';
import burgerBuilder from '../img/burgerBuilder.png';
import como from '../img/como.png';
import rajmachinery from '../img/rajmachinery.png';
import marioplan from '../img/marioPlan.png';
import comeNplay from '../img/comeNplay.png';

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
            {image:rajmachinery,name:'Web Profile',des:'A Raj Machinery is a webprofile created to promote retail business online. Its an effective alternative to traditional visiting cards.', link:'https://rajmachinery.web.app/'},
            {image:marioplan,name:'CRUD React App',des:'A simple react app created while learning CRUD functionality using React Library. This app also has a feature of realtime notification which notifies updates in the app.', link:'https://marioplan-53.web.app/'},
            {image:comeNplay,name:'Come-N-Play App',des:'Come-N-Play is a react app that makes use of Youtube Data API to parse videos based on search input parameter. It provides simple video searching interface where user can easily & quickly find videos of there choice neglecting bulky youtube interface.', link:'https://come-n-play.web.app/'}
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
