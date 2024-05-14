const products = [
  {
    id: 1,
    title: "Funda Skyrim Logo",
    price: 19.99,
    description: "La funda que estabas buscando para tu iphone 15.",
    image: "https://i.etsystatic.com/46228296/r/il/f7d5df/5597062106/il_794xN.5597062106_pthn.jpg",
    stock: 7,
  },
  {
    id: 2,
    title: "Alduin FunkoPop",
    price: 60.00,
    description: "El Funko Pop de Alduin representa al Devorador de Mundos en el famoso juego de Skyrim. Alduin es el Dios de la asolación para el pueblo nórdico y se encarga de devorar las almas de aquellos nórdicos que han fallecido. Su figura mide alrededor de 16 cm de altura y está diseñada con detalles icónicos del personaje.",
    image: "https://www.somosxbox.com/wp-content/uploads/2016/11/9af9461c-04c3-47b3-a80c-ba2c7ade4151.jpg",
    stock: 4,
  },
  {
    id: 3,
    title: "Libro \"Historias de Skyrim\"",
    price: 29.50,
    description: "Este lujoso volumen ilustrado recopila los textos clave para entender el universo de Skyrim. El hogar de los Nórdicos, una orgullosa raza guerrera, se enfrenta a su hora más oscura. Destruido por una guerra civil y bajo la amenaza del regreso de los legendarios dragones, el futuro de Skyrim pende de un hilo",
    image: "https://www.somosxbox.com/wp-content/uploads/2016/11/86274c0e-2631-4405-8725-f05d70cff34d.jpg",
    stock: 6,
  },
  {
    id: 4,
    title: "Llavero de Mará",
    price: 5.50,
    description: "Llavero Escudo de Mará, dinosaurio triángulo cosplay Obliviion Morrowind Prop colgante.",
    image: "https://http2.mlstatic.com/D_NQ_NP_782715-MLA47444790374_092021-O.webp",
    stock: 11,
  },
  {
    id: 5,
    title: "Billetera Skyrim",
    price: 14.99,
    description: "Extrabagante billetera de cuero negro y tachas de metal para guardar tus septims",
    image: "https://m.media-amazon.com/images/I/51roXWBQxjL._SS400_.jpg",
    stock: 3,
  },
  {
    id: 6,
    title: "Pullover rosa",
    price: 83.00,
    description: "Pullover rosado de algodón, estampado con la imágen del videojuegos The Elder Scrolls: Skyrim",
    image: "https://i5.walmartimages.com/seo/The-Elder-Scrolls-V-Skyrim-Hoodies-Hooded-Men-Women-Long-Sleeve-Pullover-Game-Merch_9f57ae88-82b2-481d-93c9-e42735cc5649.9ffd7e38e2895e044c94237dc34a754e.jpeg",
    stock: 5,
  },
  {
    id: 7,
    title: "Botella ecológica",
    price: 44.50,
    description: "Eco botella de metal grabada con el logo de Skyrim",
    image: "https://imusic.b-cdn.net/images/item/original/393/5028486484393.jpg?skyrim-2020-skyrim-dragon-symbol-500ml-eco-bottle-mug&class=scaled&v=1682533691",
    stock: 9,
  },
  {
    id: 8,
    title: "Juego tazas x2 unidades",
    price: 12.60,
    description: "Juego de tazas para compartir un rico café con tu camarada nórdico",
    image: "https://www.sddistribuciones.com/Portadas/GAESKGE2067.JPG",
    stock: 2,
  },
  {
    id: 9,
    title: "Pullover Winterhold",
    price: 48.00,
    description: "Pullover del colegio de mágia de Winterhold",
    image: "https://i.pinimg.com/originals/fd/2f/10/fd2f10d464436906ecdb6c91b433e4ba.png",
    stock: 4,
  },
  {
    id: 10,
    title: "Piluso blanco",
    price: 12.99,
    description: "Piluso blanco con logo de \"Dark Brotherhood\"",
    image: "https://ih1.redbubble.net/image.3154673308.4831/ssrco,baseball_cap,product,FFFFFF:97ab1c12de,front_three_quarter,wide_portrait,750x1000-bg,f8f8f8.u1.jpg",
    stock: 8,
  },
  {
    id: 11,
    title: "Septim Skyrim",
    price: 1.00,
    description: "La moneda oficial utilizada en la provincia de Skyrim. Cada Septim está hecho de oro y presenta un grabado del dragón Alduin en un lado y el perfil del Emperador en el otro.",
    image: "https://www.geekcore.co.uk/cdn/shop/products/fanattik-coin-skyrim_1024x1024.jpg?v=1601283223",
    stock: 99,
  },
  {
    id: 12,
    title: "Morral Mapa Skyrim",
    price: 65.99,
    description: "Descripción: Un morral resistente y espacioso con un diseño único que presenta el mapa detallado de la provincia de Skyrim.",
    image: "https://static.thcdn.com/images/large/original//productimg/1600/1600/12359400-5954718894965569.jpg",
    stock: 9,
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000)
  });
};