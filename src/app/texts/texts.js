const title = "Miscelánea y Papelería Kasema";
const email = "nancyceballes1974@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los productos de ${title} y me gustaría recibir más información. ¡Espero su respuesta!`
);
const numeroWhatsApp = "3104575544";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "*Miscelánea y Papelería Kasema* te ofrece una amplia gama de productos, desde útiles escolares y papelería hasta cosméticos y perfumería. Somos tu tienda de confianza para encontrar todo lo que necesitas en un solo lugar.",
        description2: "Nuestro objetivo es ofrecerte productos de calidad al mejor precio, con un servicio cercano y personalizado. Ya sea que necesites material escolar, artículos de oficina o productos para el hogar, en *Kasema* estamos para atender todas tus necesidades. Visítanos y descubre por qué somos la tienda preferida en la comunidad. ¡En *Kasema*, siempre encontrarás lo que buscas!",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Miscelánea y Papelería Kasema",
            p2: "Todo lo que necesitas, en un solo lugar.",
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61565502966209&mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
