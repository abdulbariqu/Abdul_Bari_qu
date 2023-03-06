import Micahguru from './assets/images/Micahguru.png'
import tradexco from './assets/images/tradexco.png'
import Airtap  from './assets/images/airtap.png'
import Cladius from './assets/images/cladius.png'
import Mambie from './assets/images/membie.png'
const logotext = "ABDUL BARI";
const meta = {
    title: "Abdul Bari",
    description: "I’m Abdul BAri _ Full stack devloper",
};

const introdata = {
    title: "I’m Abdul Bari",
    animated: {
        first: "Crafting dynamic and interactive website is what i love to do.",
        second: "Coding immersive digital experiences through website design and development is a passion of mine.",
    },
    description: "An attractive website can enhance your online presence, attract more visitors, and ultimately lead to increased sales.",
    your_img_url: "https://media.licdn.com/dms/image/D4D03AQH49lFZBnTJpQ/profile-displayphoto-shrink_800_800/0/1667817355737?e=2147483647&v=beta&t=pBiJOXMli2sLuSeCZBU52vD6aIq_JKrCTpthuZJ-0Pk",
};

const dataabout = {
    title: "About MySelf ",
    aboutme: "As a Full Stack Developer with a strong understanding of the fundamentals, I always strive to do things the right way, even when no one is watching. This commitment to excellence has allowed me to consistently deliver exceptional results in my work. With years of experience planning, designing, and developing SAAS applications for clients of all sizes, industries, and budgets, I have gained valuable expertise in a range of programming languages, frameworks, and web technologies. Specifically, I am proficient in JavaScript, and have experience working with frameworks such as Angular, Node Js, Next Js, React. In addition, I have experience working with popular DevOps tools such as AWS, DigitalOcean, Heroku, and Docker, and am skilled in working with databases such as PostgreSQL, MySQL, SQLite3, and NoSQL. I am also familiar with a range of web technologies, including HTML, CSS, SCSS, JavaScript, JQuery, TypeScript, AJAX. As a bonus, I have experience working with design tools such as Figma and AdobeXd, which allows me to create attractive and user-friendly interfaces for web applications. Whether working alone or as part of a team, I am always available to help clients solve their software development challenges. If you have a project that needs attention, let's talk and work together to quickly find a solution",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "ReactJS",
        value: 90,
    },
    {
        name: "NodeJS",
        value: 85,
    },
    {
        name: "ExpressJs",
        value: 80,
    },
    {
        name: "MangoDB",
        value: 80,
    },
    {
        name: "Javascript",
        value: 75,
    },
    {
        name: "Typescript",
        value: 70,
    },
    {
        name: "Wordpress",
        value: 50,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "As a UI/UX designer, my role is to create visually appealing and user-friendly digital products. UI design involves creating the look and feel of the product, while in UX design i focuses on creating a seamless and enjoyable user experience and i focus on factors like accessibility, branding, and user psychology when designing UI elements, and conduct user research and testing to ensure the product meets the user's needs.",
    },
    {
        title: "Mobile Apps",
        description: "In Mobile app UI/UX design i provides unique approach due to the constraints of smaller screens and touch-based interactions. Icreatet create visually appealing and intuitive interfaces that provide a seamless and engaging experience for the user.",
    },
    {
        title: "Wordpress Design",
        description: "WordPress is a popular and flexible content management system (CMS) that powers over 40% of websites on the internet. I can highly customize it, with thousands of themes and plugins available, and create a customer friendly website",
    },
];

const dataportfolio = [{
        img: Micahguru,
        desctiption: "Developed an attractive and interactive web application with payment gateway added.",
        link: "https://micahguru.co.uk/",
    },
    {
        img: tradexco,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "https://tradexco.com.au/",
    },
    {
        img: Airtap,
        desctiption: "Developed API,s and worked on it's layout.",
        link: "https://airtap.ca/",
    },
    {
        img: Cladius,
        desctiption: "Developed an attractive website and layout for the products",
        link: "https://claudiusculmerconstruction.com/",
    },
    {
        img: Mambie,
        desctiption: "Developed an attractive website and layout for the products",
        link: "https://mambiecustomcabinet.com/",
    },
    
 
];


const contactConfig = {
    YOUR_EMAIL: "abdulbariqureshi95@gmail.com",
    YOUR_FONE: "+92 3081279010",
    description: "If any queries related to web application, software application can contact me 24/7 ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://www.facebook.com/abdul.b.qureshi1/",
    linkedin: "https://www.linkedin.com/in/abari12",
    twitter: "https://twitter.com/a_bari123",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
function image (){
    return(
        <div>
            <div class="row">
          <div class="p">
            <div class="p-browser">
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="details-text w-75 mb-1">Beasty</div>
            </div>

            <a href="https://beasty.app/" target="_blank" rel="noreferrer">
              <img src="./assets/img/BST.png" alt="demo" class="p-img" />
            </a>
          </div>
          <div class="p">
            <div class="p-browser">
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="details-text w-75 mb-1">Micahguru</div>
            </div>

            <a href="https://micahguru.co.uk/" target="_blank" rel="noreferrer">
              <img src="./assets/img/Micahguru.png" alt="demo" class="p-img" />
            </a>
          </div>
          <div class="p">
            <div class="p-browser">
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="details-text w-75 mb-1">Airtap</div>
            </div>

            <a href="https://airtap.ca/" target="_blank" rel="noreferrer">
              <img src="./assets/img/airtap.png" alt="demo" class="p-img" />
            </a>
          </div>
          <div class="p">
            <div class="p-browser">
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="details-text w-75 mb-1">Walletly</div>
            </div>

            <a href="https://walletly.ai/" target="_blank" rel="noreferrer">
              <img src="./assets/img/walletly.png" alt="demo" class="p-img" />
            </a>
          </div>
          <div class="p">
            <div class="p-browser">
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="details-text w-75 mb-1">Tradexco</div>
            </div>

            <a href="https://tradexco.com.au/" target="_blank" rel="noreferrer">
              <img src="assets/img/tradexco.png" alt="demo" class="p-img" />
            </a>
          </div>
           <div class="p">
            <div class="p-browser">
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="details-text w-75 mb-1">Zod</div>
            </div>

            <a href="https://zod.media/" target="_blank" rel="noreferrer">
              <img src="assets/img/zod.png" alt="demo" class="p-img" />
            </a>
          </div> 
          <div class="p">
            <div class="p-browser">
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="details-text w-75 mb-1">Rently</div>
            </div>

            <a href="https://www.rently.pk/" target="_blank" rel="noreferrer">
              <img src="assets/img/rently.png" alt="demo" class="p-img" />
            </a>
          </div> 
          <div class="p">
            <div class="p-browser">
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="details-text w-75 mb-1">Portfolio</div>
            </div>

            <a
              href="https://ziaarsalan.github.io"
              target="_blank"
              rel="noreferrer"
            >
              <img src="assets/img/portfolio.png" alt="demo" class="p-img" />
            </a>
          </div>
          <div class="p">
            <div class="p-browser">
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="details-text w-75 mb-1">Snap that home</div>
            </div>

            <a
              href="https://snapthathome.com.au/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="assets/img/snapthathome.png" alt="demo" class="p-img" />
            </a>
          </div>
          <div class="p">
            <div class="p-browser">
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="details-text w-75 mb-1">Coding School</div>
            </div>

            <a href="https://the-cs.org/" target="_blank" rel="noreferrer">
              <img src="assets/img/codingschool.png" alt="demo" class="p-img" />
            </a>
          </div>
          <div class="p">
            <div class="p-browser">
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="details-text w-75 mb-1">Zara Ebrahim</div>
            </div>

            <a
              href="https://zahraebrahim.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="assets/img/zara-ebrahim.png" alt="demo" class="p-img" />
            </a>
          </div> 
           <div class="p">
            <div class="p-browser">
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="details-text w-75 mb-1">Takaful Bazaar</div>
            </div>

            <a
              href="https://takafulbazaar.pk/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="assets/img/takafulbazar.png" alt="demo" class="p-img" />
            </a>
          </div> 
          <div class="p">
            <div class="p-browser">
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="p-circle"></div>
              <div class="details-text w-75 mb-1">Monsterhub</div>
            </div>

            <a href="https://monsterhub.io/" target="_blank" rel="noreferrer">
              <img src="assets/img/monsterhub.png" alt="demo" class="p-img" />
            </a>
          </div>
        </div>
        </div>
    )
}

export default image