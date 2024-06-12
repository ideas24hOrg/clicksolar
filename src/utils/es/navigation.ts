const navBarLinks = [
  { name: "Home", url: "/es" },
/*   { name: "Products", url: "/es/products" },
  { name: "Services", url: "/es/services" },
  { name: "Blog", url: "/es/blog" },
  { name: "Contact", url: "/es/contact" }, */
];

const footerLinks = [
  {
    section: "Ecosystem",
    links: [
/*       { name: "Documentation", url: "/es/welcome-to-docs/" },
      { name: "Tools and Equipment", url: "/es/products" },
      { name: "Construction Services", url: "/es/services" }, */
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About Us", url: "#" },
      { name: "Blog", url: "/es/blog" },
      { name: "Careers", url: "#" },
      { name: "Clients", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};