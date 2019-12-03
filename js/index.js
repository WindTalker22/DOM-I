const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Update navbar
const navbar = document.querySelectorAll('a')
navbar.forEach((element, i) => {
  element.textContent = siteContent['nav'][`nav-item-${i+1}`];
});

// Prepend Hello link
const nav = document.querySelector('nav')
const firstNewLink = document.createElement('a')
firstNewLink.textContent = 'Hello'
firstNewLink.classList.add('a')
nav.prepend(firstNewLink)
firstNewLink.style.color = 'green'

// Append Goodbye link
const navTwo = document.querySelector('nav')
const lastNewLink = document.createElement('a')
lastNewLink.textContent = 'Goodbye'
lastNewLink.classList.add('a')
nav.append(lastNewLink)
lastNewLink.style.color = 'green'

// Gave navbar a color of green
navbar.forEach(item => item.style.color = 'green')


// Adding image to header
const headImg = document.getElementById('cta-img')
headImg.setAttribute ('src', siteContent['cta']['img-src']);


// Adding main-content
const textCont = document.querySelectorAll('.text-content');

textCont[0].children[0].textContent = siteContent['main-content']['features-h4']
textCont[0].children[1].textContent = siteContent['main-content']['features-content']
textCont[1].children[0].textContent = siteContent['main-content']['about-h4']
textCont[1].children[1].textContent = siteContent['main-content']['about-content']
textCont[2].children[0].textContent = siteContent['main-content']['services-h4']
textCont[2].children[1].textContent = siteContent['main-content']['services-content']
textCont[3].children[0].textContent = siteContent['main-content']['product-h4']
textCont[3].children[1].textContent = siteContent['main-content']['product-content']
textCont[4].children[0].textContent = siteContent['main-content']['vision-h4']
textCont[4].children[1].textContent = siteContent['main-content']['vision-content']

// Adding main-content image
const mainContImg = document.getElementById('middle-img')
mainContImg.setAttribute('src', siteContent['main-content']['middle-img-src'])


// Adding contact info
const contactInfo = document.querySelector('.contact')

contactInfo.children[0].textContent = siteContent['contact']['contact-h4']
contactInfo.children[1].textContent = siteContent['contact']['address']
contactInfo.children[2].textContent = siteContent['contact']['phone']
contactInfo.children[3].textContent = siteContent['contact']['email']

// Adding Footer
const foot = document.querySelector('footer');

foot.children[0].textContent = siteContent['footer']['copyright']


// Header
const header = document.querySelector('h1');
header.setAttribute('style', 'white-space: pre;');
header.textContent = 'Dom \r\n Is \r\n Awesome';
header.style.color = 'limegreen';
header.style.backgroundColor = 'black';
header.style.width = '20rem'

//Button
const getButt = document.querySelector('button');
getButt.style.color = 'limegreen';
getButt.style.backgroundColor = 'black';
getButt.style.borderRadius = '20px';
getButt.textContent = 'Get Started';