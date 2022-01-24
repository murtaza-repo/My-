// Portfolio

import collegifyImg from '../img/Collegify.png';
import todoApp from '../img/todoApp.png';
import hms from '../img/hms.png';
import recipeBook from '../img/recipeBook.png';
import burgerBuilder from '../img/burgerBuilder.png';
import como from '../img/como.png';
import rajmachinery from '../img/rajmachinery.png';
import marioplan from '../img/marioPlan.png';
import comeNplay from '../img/comeNplay.png';

// Activities & achievements
import Angular from '../img/certificates/Angular.png';
import cpp from '../img/certificates/cpp.png';
import java from '../img/certificates/Java.png';
import nptel from '../img/certificates/NPTEL.jpg';
import problemSolving from '../img/certificates/ProblemSolving.png';
import python from '../img/certificates/PythonHR.png';
import react from '../img/certificates/React.png';
import rest from '../img/certificates/Rest.png';
import smartIndia from '../img/certificates/SIH.png';
import tcsData from '../img/certificates/tcsData.png';
import devOps from '../img/certificates/tcsDevOps.png';
import flask from '../img/certificates/tcsFlask.png';

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
            {image:collegifyImg,name:'Collegify App',des:'A Modern Javascript Application developed to provide common platform to students where they can find inter-college events and placements/campus-drives details and register for the same via App.',link:'https://collegify-me.web.app/'},
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
    Activities:{
        ActivitiesTitle:'Activities & Achievements',
        ActivitiesItems:[
            {image:problemSolving,name:'Problem Solving'},
            {image:Angular,name:'Angular Training'},
            {image:nptel,name:'NPTEL Training'},
            {image:python,name:'Python(Basic)'},
            {image:cpp,name:'C & CPP'},
            {image:smartIndia,name:'Smart India Hackathon'},
            {image:java,name:'Java'},
            {image:tcsData,name:'Data Warehouse'},
            {image:react,name:'React Training'},
            {image:flask,name:'Python Flask'},
            {image:rest,name:'Rest APIs'},
            {image:devOps,name:'DevOps Training'}
        ]
    },
    About:{
        AboutTitle:'About Me',
        AboutMe1Sec:`Hi Aliens! I am Murtaza Khachrodwala. I am a Software Engineer, Tech enthusiast, always keen to take new challenges that makes my skills strong and always keep me motivated towards my goal. My objective is to achieve high career growth through a continuous learning process, keeping myself dynamic, visionary and
        competitive with the changing scenario of the world.`,
        AboutMe2Sec:`I have completed my graduation with an honours degree in the field of Information Technology. After graduation, I had done several Internships and Tech trainings as well that helped me alot to stand firm in this corporate world. Currently, I am working as a System Engineer in a renowned organization driven by technology.`,
        ButtonName:'Resume',
        ButtonIconFontAwesome:'fas fa-download mr-2',
        ButtonSite:'https://firebasestorage.googleapis.com/v0/b/murtaza-k.appspot.com/o/Murtaza_Resume_2022.pdf?alt=media&token=984bb9e0-8bb7-46aa-a399-38d1ad0e32c2'
    },
    Footer:{
        section2:{
            title:'Around the Web',
            hackerrank:'https://www.hackerrank.com/murtaza_khachrod',
            twitter:'https://twitter.com/Murtaza_kh53',
            linkedin:'https://in.linkedin.com/in/murtaza-khachrodwala',
            github:'https://github.com/murtaza-repo',
            dev:'https://dev.to/murtaza_k'
        }
    }
}
