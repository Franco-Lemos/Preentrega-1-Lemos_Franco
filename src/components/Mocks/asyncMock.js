const products = [
  {
    id: 1,
    title: "Funda Skyrim Logo",
    price: 19.99,
    description: "La funda que estabas buscando para tu iphone 15.",
    image: "https://i.etsystatic.com/46228296/r/il/f7d5df/5597062106/il_794xN.5597062106_pthn.jpg",
    category: "coleccionables",
    stock: 7,
  },
  {
    id: 2,
    title: "Alduin FunkoPop",
    price: 60.00,
    description: "El Funko Pop de Alduin representa al Devorador de Mundos en el famoso juego de Skyrim. Alduin es el Dios de la asolación para el pueblo nórdico y se encarga de devorar las almas de aquellos nórdicos que han fallecido. Su figura mide alrededor de 16 cm de altura y está diseñada con detalles icónicos del personaje.",
    image: "https://www.somosxbox.com/wp-content/uploads/2016/11/9af9461c-04c3-47b3-a80c-ba2c7ade4151.jpg",
    category: "funko-pop",
    stock: 4,
  },
  {
    id: 3,
    title: "Libro \"Historias de Skyrim\"",
    price: 29.50,
    description: "Este lujoso volumen ilustrado recopila los textos clave para entender el universo de Skyrim. El hogar de los Nórdicos, una orgullosa raza guerrera, se enfrenta a su hora más oscura. Destruido por una guerra civil y bajo la amenaza del regreso de los legendarios dragones, el futuro de Skyrim pende de un hilo",
    image: "https://www.somosxbox.com/wp-content/uploads/2016/11/86274c0e-2631-4405-8725-f05d70cff34d.jpg",
    category: "libros",
    stock: 6,
  },
  {
    id: 4,
    title: "Llavero de Mará",
    price: 5.50,
    description: "Llavero Escudo de Mará, dinosaurio triángulo cosplay Obliviion Morrowind Prop colgante.",
    image: "https://http2.mlstatic.com/D_NQ_NP_782715-MLA47444790374_092021-O.webp",
    category: "coleccionables",
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
    category: "indumentaria",
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
    category: "indumentaria",
    stock: 4,
  },
  {
    id: 10,
    title: "Piluso blanco",
    price: 12.99,
    description: "Piluso blanco con logo de \"Dark Brotherhood\"",
    image: "https://ih1.redbubble.net/image.3154673308.4831/ssrco,baseball_cap,product,FFFFFF:97ab1c12de,front_three_quarter,wide_portrait,750x1000-bg,f8f8f8.u1.jpg",
    category: "indumentaria",
    stock: 8,
  },
  {
    id: 11,
    title: "Septim Skyrim",
    price: 1.00,
    description: "La moneda oficial utilizada en la provincia de Skyrim. Cada Septim está hecho de oro y presenta un grabado del dragón Alduin en un lado y el perfil del Emperador en el otro.",
    image: "https://www.geekcore.co.uk/cdn/shop/products/fanattik-coin-skyrim_1024x1024.jpg?v=1601283223",
    category: "coleccionables",
    stock: 99,
  },
  {
    id: 12,
    title: "Morral Mapa Skyrim",
    price: 65.99,
    description: "Descripción: Un morral resistente y espacioso con un diseño único que presenta el mapa detallado de la provincia de Skyrim.",
    image: "https://static.thcdn.com/images/large/original//productimg/1600/1600/12359400-5954718894965569.jpg",
    category: "indumentaria",
    stock: 9,
  },
  {
    id: 13,
    title: "Libro \"Libro Rojo de Skyrim\"",
    price: 19.50,
    description: "Este lujoso volumen ilustrado recopila los textos clave para entender el universo de Skyrim. El hogar de los Nórdicos, una orgullosa raza guerrera, se enfrenta a su hora más oscura. Destruido por una guerra civil y bajo la amenaza del regreso de los legendarios dragones, el futuro de Skyrim pende de un hilo",
    image: "https://static.wikia.nocookie.net/elderscrolls/images/b/b9/Book06a.png/revision/latest?cb=20121231021400",
    category: "libros",
    stock: 12,
  },
  {
    id: 14,
    title: "Libro \"Clarividencia básica\"",
    price: 14.50,
    description: "Este lujoso volumen ilustrado recopila los textos clave para entender el universo de Skyrim. El hogar de los Nórdicos, una orgullosa raza guerrera, se enfrenta a su hora más oscura. Destruido por una guerra civil y bajo la amenaza del regreso de los legendarios dragones, el futuro de Skyrim pende de un hilo",
    image: "https://i.pinimg.com/736x/d4/84/ed/d484edfb78339eb5086b8b419f562c6c.jpg",
    category: "libros",
    stock: 22,
  },
  {
    id: 15,
    title: "Libro \"Ilusión avanzada\"",
    price: 29.30,
    description: "Este lujoso volumen ilustrado recopila los textos clave para entender el universo de Skyrim. El hogar de los Nórdicos, una orgullosa raza guerrera, se enfrenta a su hora más oscura. Destruido por una guerra civil y bajo la amenaza del regreso de los legendarios dragones, el futuro de Skyrim pende de un hilo",
    image: "https://p7.hiclipart.com/preview/118/807/800/the-elder-scrolls-v-skyrim-dragonborn-the-elder-scrolls-online-mod-tamriel-video-game-others.jpg",
    category: "libros",
    stock: 12,
  },
  {
    id: 16,
    title: "Libro \"Destrucción Nivel medio\"",
    price: 16.40,
    description: "Este lujoso volumen ilustrado recopila los textos clave para entender el universo de Skyrim. El hogar de los Nórdicos, una orgullosa raza guerrera, se enfrenta a su hora más oscura. Destruido por una guerra civil y bajo la amenaza del regreso de los legendarios dragones, el futuro de Skyrim pende de un hilo",
    image: "https://p7.hiclipart.com/preview/565/535/801/the-elder-scrolls-v-skyrim-batman-arkham-city-the-elder-scrolls-online-video-game-mod-destruction.jpg",
    category: "libros",
    stock: 15,
  },
  {
    id: 17,
    title: "Libro \"Luz de Vela\"",
    price: 29.50,
    description: "Este lujoso volumen ilustrado recopila los textos clave para entender el universo de Skyrim. El hogar de los Nórdicos, una orgullosa raza guerrera, se enfrenta a su hora más oscura. Destruido por una guerra civil y bajo la amenaza del regreso de los legendarios dragones, el futuro de Skyrim pende de un hilo",
    image: "https://ih1.redbubble.net/image.651525942.0661/sn,x600-pad,600x600,f8f8f8.u3.jpg",
    category: "libros",
    stock: 8,
  },
  {
    id: 18,
    title: "Libro \"Historias de Skyrim II\"",
    price: 39.80,
    description: "Este lujoso volumen ilustrado recopila los textos clave para entender el universo de Skyrim. El hogar de los Nórdicos, una orgullosa raza guerrera, se enfrenta a su hora más oscura. Destruido por una guerra civil y bajo la amenaza del regreso de los legendarios dragones, el futuro de Skyrim pende de un hilo",
    image: "https://p7.hiclipart.com/preview/565/912/918/the-elder-scrolls-v-skyrim-dragonborn-book-hardcover-paperback-the-elder-scrolls-v-skyrim-die-skyrim-bibliothek-teil-1-historische-werke-book.jpg",
    category: "libros",
    stock: 14,
  },
  {
    id: 19,
    title: "Libro \"Nigromancia Experta\"",
    price: 120.10,
    description: "Este lujoso volumen ilustrado recopila los textos clave para entender el universo de Skyrim. El hogar de los Nórdicos, una orgullosa raza guerrera, se enfrenta a su hora más oscura. Destruido por una guerra civil y bajo la amenaza del regreso de los legendarios dragones, el futuro de Skyrim pende de un hilo",
    image: "https://skyrim.wiki.fextralife.com/file/Skyrim/Conjuration_Spell-Tome_1.png",
    category: "libros",
    stock: 2,
  },
  {
    id: 20,
    title: "Nordic FunkoPop",
    price: 50.00,
    description: "El Funko Pop del Nórdico representa al Devorador de Mundos en el famoso juego de Skyrim. El Nórdico es el Dios de la asolación para el pueblo nórdico y se encarga de devorar las almas de aquellos nórdicos que han fallecido. Su figura mide alrededor de 16 cm de altura y está diseñada con detalles icónicos del personaje.",
    image: "https://funko.com/on/demandware.static/-/Sites-FunkoUS-Library/default/dwf9ad4308/images/funko/blog/craftassets/20190625_5270_ElderScrolls_Nord_med_large.jpg",
    category: "funko-pop",
    stock: 4,
  },
  {
    id: 21,
    title: "Dovahkiin FunkoPop",
    price: 70.00,
    description: "El Funko Pop del Dovahkiin representa al Devorador de Mundos en el famoso juego de Skyrim. Dovahkiin es el Dios de la asolación para el pueblo nórdico y se encarga de devorar las almas de aquellos nórdicos que han fallecido. Su figura mide alrededor de 16 cm de altura y está diseñada con detalles icónicos del personaje.",
    image: "https://m.media-amazon.com/images/I/71-ey2rcjxL._AC_SL1200_.jpg",
    category: "funko-pop",
    stock: 4,
  },
  {
    id: 22,
    title: "Whiterun Guard FunkoPop",
    price: 40.00,
    description: "El Funko Pop del guardia representa al Devorador de Mundos en el famoso juego de Skyrim. El guardia es el Dios de la asolación para el pueblo nórdico y se encarga de devorar las almas de aquellos nórdicos que han fallecido. Su figura mide alrededor de 16 cm de altura y está diseñada con detalles icónicos del personaje.",
    image: "https://m.media-amazon.com/images/I/51ccZ7RvvVL.jpg",
    category: "funko-pop",
    stock: 4,
  },
  {
    id: 23,
    title: "Sheogorath FunkoPop",
    price: 60.00,
    description: "El Funko Pop de Sheogorath representa al Devorador de Mundos en el famoso juego de Skyrim. Sheogorath es el Dios de la asolación para el pueblo nórdico y se encarga de devorar las almas de aquellos nórdicos que han fallecido. Su figura mide alrededor de 16 cm de altura y está diseñada con detalles icónicos del personaje.",
    image: "https://www.thegeekinme.co.uk/cdn/shop/files/image_1200x1200_83f0253d-56dc-4850-a1c3-f9f599d41ce9.webp?v=1705871524",
    category: "funko-pop",
    stock: 4,
  },
  {
    id: 24,
    title: "Colossus FunkoPop",
    price: 45.00,
    description: "El Funko Pop del coloso representa al Devorador de Mundos en el famoso juego de Skyrim. Coloso es el Dios de la asolación para el pueblo nórdico y se encarga de devorar las almas de aquellos nórdicos que han fallecido. Su figura mide alrededor de 16 cm de altura y está diseñada con detalles icónicos del personaje.",
    image: "https://cconnect.s3.amazonaws.com/wp-content/uploads/2017/06/2017-Funko-San-Diego-Comic-Con-Exclusives-Funko-Pop-Elder-Scrolls-Morrowind-222-Dwarven-Colossus-6.jpg",
    category: "funko-pop",
    stock: 4,
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000)
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === id));
    }, 2000);
  })
}

export const getProductByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
    },2000);
  });
}