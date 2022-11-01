const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};
let navAnchorList = document.querySelectorAll("nav a")
let footerAnchor = document.querySelector("footer a")

let logo = document.querySelector("#logo-img")
let ctaImage = document.querySelector("#cta-img")
let middleCodeSnippet = document.querySelector("#middle-img")

let firstSection = document.querySelector(".cta .cta-text")
let mainContent = document.querySelector(".main-content")
let contactSection = document.querySelector(".contact")


//Header Elements
navAnchorList.forEach((el,i) => {
  el.classList.add("italic")
  el.textContent = siteContent.nav[`nav-item-${i + 1}`]
})

//Image Elements
logo.setAttribute("src",siteContent.images["logo-img"])
ctaImage.setAttribute("src",siteContent.images["cta-img"])
middleCodeSnippet.setAttribute("src",siteContent.images["accent-img"])

//First Section Elements
firstSection.children[0].textContent = siteContent.cta.h1
firstSection.children[1].textContent = siteContent.cta.button

//Main Content Features
mainContent.querySelector(".top-content").querySelectorAll(".text-content")[0].children[0].textContent = siteContent["main-content"]["features-h4"]
mainContent.querySelector(".top-content").querySelectorAll(".text-content")[0].children[1].textContent = siteContent["main-content"]["features-content"]

//Main Content About
mainContent.querySelector(".top-content").querySelectorAll(".text-content")[1].children[0].textContent = siteContent["main-content"]["about-h4"]
mainContent.querySelector(".top-content").querySelectorAll(".text-content")[1].children[1].textContent = siteContent["main-content"]["about-content"]

//Main Content Services
mainContent.querySelector(".bottom-content").querySelectorAll(".text-content")[0].children[0].textContent = siteContent["main-content"]["services-h4"]
mainContent.querySelector(".bottom-content").querySelectorAll(".text-content")[0].children[1].textContent = siteContent["main-content"]["services-content"]

//Main Content Product
mainContent.querySelector(".bottom-content").querySelectorAll(".text-content")[1].children[0].textContent = siteContent["main-content"]["product-h4"]
mainContent.querySelector(".bottom-content").querySelectorAll(".text-content")[1].children[1].textContent = siteContent["main-content"]["product-content"]

//Main Vision Product
mainContent.querySelector(".bottom-content").querySelectorAll(".text-content")[2].children[0].textContent = siteContent["main-content"]["vision-h4"]
mainContent.querySelector(".bottom-content").querySelectorAll(".text-content")[2].children[1].textContent = siteContent["main-content"]["vision-content"]

//Contact Elements
contactSection.querySelector("h4").textContent = siteContent.contact["contact-h4"]
contactSection.querySelectorAll("p")[0].textContent = siteContent.contact["address"]
contactSection.querySelectorAll("p")[1].textContent = siteContent.contact["phone"]
contactSection.querySelectorAll("p")[2].textContent = siteContent.contact["email"]

//Footer Element
footerAnchor.classList.add("bold")
footerAnchor.textContent = siteContent.footer.copyright
console.log('project wired!')
