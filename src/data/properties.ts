export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  propertyType: string;
  features: string[];
  images: string[];
  isFeatured: boolean;
  isNewListing: boolean;
 

  mapIframe?: string; // Campo opcional para el iframe
}

const properties: Property[] = [
  {
  id: "9",
  title: "(ID 9) CONJUNTO CERRADO PALESTINA REAL",
  price: 423698688,
  address: "AVENIDA 10 CL 48 INT. 4 INT 2-5A LOTE # 5A MANZANA 2 BR. LA PALESTINA",
  city: "LOS PATIOS",
  state: "NORTE DE SANTANDER",
  zipCode: " ",
  description: "Ubicada en el Conjunto Cerrado Palestina Real, en el municipio de Los Patios, Norte de Santander, esta hermosa casa combina comodidad, funcionalidad y un entorno residencial tranquilo. Con una construcción de 190 m², esta propiedad cuenta con 3 habitaciones, 4 baños (incluyendo 3 privados y un baño social), además de espacios amplios como sala, comedor, cocina y una práctica zona de ropas con balcón. La casa también ofrece múltiples armarios (tres closets) y un diseño moderno pensado para la vida familiar. Gracias a su ubicación en conjunto cerrado, disfrutarás de mayor seguridad y privacidad.",
  bedrooms: 3,
  bathrooms: 4,
  squareFeet: 190,
  propertyType: "CASA",
  features: [
    "Sala",
    "Cocina",
    "Comedor",
    "sala",
    "cocina",
    "comedor",
    "baño social",
    "tres closet",
    "tres habitaciones",
    "tres baños privados",
    "zona de ropas y balcon",
  ],
  images: [
    "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/1eef7250-ba73-445e-b3ac-3117524033f0-b4414pcA9vMCrMI1S3r8ScEMbx8PwynBWe8eG0APNUzyDdPjG7Y34uRg1O1GdXiuflC9fqT7rdaRTwFoEvuObHz4N3jHjqoZQy0/Imagen-de-WhatsApp-2025-02-07-a-las-21.36.18_64ef2f53.jpg",
    "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/3755b97f-604f-446e-858d-62c82e2041b0-zmcmhBYL335LgbBUYO3s17rL6ENiXq2JPTZANlyox7I56C1MxN2nvl8HI89qpuzXuPvzMoKzW4yoIIVkP41vI4O8OjwlGmZmF4H/Imagen-de-WhatsApp-2025-02-07-a-las-21.36.19_a832c05c.jpg",
    "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/4fad570a-cc53-4581-a803-c2cdbc48a2f5-xzd4xCT9FsZtfgUl32qWSafO29Wz3sObNmlhFSs8OJFx50sJqUlppIuuD845W4kIExrcOKb4C20Z8jtpbVKl3IROJOwOjlc2psI/Imagen-de-WhatsApp-2025-02-07-a-las-21.37.27_326f3337.jpg",
    "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/fd70f9f0-a31f-4099-b461-85398c37e1d5-IZgE4tKzZ6UpFuAL8SHWtzhRj5ZIq3nfsje1hYPG1SYPi0Xrzix8veVS5kbvElKYTJRtYw8ThclmRkYhMyoHuYirEgh2bDmxqDn/Imagen-de-WhatsApp-2025-02-07-a-las-21.36.16_e7541a0b.jpg",
    "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/ed5b8c12-1ca2-48e0-bd4f-6bc0a3b272ce-FTDtadeP2i7fvjdoibm6lUH3kF0ufxGsQUxPCfyn7mHuDfqk6obFcNQ26TZlnkAUgHF5v1rDaNkNIaIKbd3uVYC6Z4HXhB3igVd/Imagen-de-WhatsApp-2025-02-07-a-las-21.36.19_b6febf78.jpg",
    "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/4be441db-008f-4387-868d-4d837fd57656-9z9FygbqQkpBtKnvFGnDzu3G92VmjXcdg64xLhqoaJzJ4PWjgBLG9fuITPxcsvzxNuXsV6JMIgzxcC9hN3HOXVRBphHIK2uvhi7/Imagen-de-WhatsApp-2025-02-07-a-las-21.36.16_c0ae9215.jpg",
    "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/e2d3f1f8-5171-4d68-aace-17b241fd46a1-je1rW4PDjWXluGJRjRBJyMLOEB2CPWsP5KBmE2q2Fofx3SedTxfKmLcW9G1E605zuJ95zyOMBLozvtDJqqPhcVlMZNc9Pp7dxNM/Imagen-de-WhatsApp-2025-02-07-a-las-21.36.15_053fca40.jpg",
    "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/95960cac-e189-43a0-a10d-f4f961159fb1-CEQKQYzDlf0Mx3c1xusqZXdChp1L3fgnYzmxSug1leQA4grvDEmYDc9HBaPPAUchGebJR67OM5TXHK9NgHGIbbTP2K8ro7HVXiz/Imagen-de-WhatsApp-2025-02-07-a-las-21.36.19_029e1190.jpg",
    "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/ff5915a9-dc2b-4234-a593-ce0d52c283eb-RDYLFErMJtQHnbzRWM1GL1A00fUxegAAyZNe7djiboAXAtQlmvKGqiT0kQNbLvnsD8aE4XQ8WKivx9mtXcZLjOhkXr59NkJu5D6/Imagen-de-WhatsApp-2025-02-07-a-las-21.37.25_1398e77d.jpg",
    "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/9b0ca60f-4c78-4441-8169-da6b80eb32ce-6xW6EwFzzT2YE2ml6G2JokxQyNgzKSUGEguw7ZDYaHuzNRi1cV0ty8xP9rlMAIq1uQDBcZMYKdGTV2zimiUeZUnFJIWE9ho6859/Imagen-de-WhatsApp-2025-02-07-a-las-21.36.16_ea45391c.jpg",
    "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/a77eb60b-8cc3-496e-affb-7c906acf8561-HImF2JShMSyP0Z8j1YjMuIH9I3hdA7dcUAauWtwYo1UrpJAYjNVh7Bp7fzR9ouxqrEaCbg0KPfaB1ATPWGUvMI8Amkks7NWwBr0/Imagen-de-WhatsApp-2025-02-07-a-las-21.36.16_c1e5360a.jpg",
  ],
  isFeatured: true,
  isNewListing: false,
  mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.4041594309915!2d-72.5078601252729!3d7.8527006062921485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e664530e9307a1b%3A0x15ddd99daef3485e!2sCondominio%20Palestina%20Real!5e0!3m2!1ses!2sco!4v1748051852795!5m2!1ses!2sco" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación de Conjunto Cerrado Palestina Real"></iframe>'
},
  {
    id: "2",
    title: "Modern Downtown Penthouse",
    price: 2850000,
    address: "456 Skyline Avenue",
    city: "New York",
    state: "NY",
    zipCode: "10022",
    description: "Breathtaking penthouse in the heart of Manhattan with floor-to-ceiling windows offering spectacular city views. This modern masterpiece features custom designer finishes, smart home technology, and a private rooftop terrace. Perfect for entertaining with an open concept layout and chef's kitchen.",
    bedrooms: 3,
    bathrooms: 3.5,
    squareFeet: 3200,
    propertyType: "Penthouse",
    features: [
      "Panoramic Views",
      "Private Elevator",
      "Rooftop Terrace",
      "Floor-to-ceiling Windows",
      "Smart Home Technology",
      "Concierge Service",
      "Fitness Center",
      "Wine Storage"
    ],
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
    ],
    isFeatured: true,
    isNewListing: true,
 
  },
  {
    id: "3",
    title: "Mediterranean Estate",
    price: 4250000,
    address: "789 Hillcrest Road",
    city: "Beverly Hills",
    state: "CA",
    zipCode: "90210",
    description: "Magnificent Mediterranean estate nestled in the exclusive Beverly Hills neighborhood. This elegant property boasts exquisite architectural details, lush landscaped gardens, and resort-style amenities. Features include a grand foyer, formal dining room, library, and luxurious primary suite with spa-like bathroom.",
    bedrooms: 6,
    bathrooms: 7,
    squareFeet: 8500,
    propertyType: "Estate",
    features: [
      "Swimming Pool",
      "Tennis Court",
      "Home Gym",
      "Guest House",
      "Wine Cellar",
      "Theater Room",
      "Outdoor Kitchen",
      "5-Car Garage"
    ],
    images: [
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
    ],
    isFeatured: true,
    isNewListing: false,
  

  },
  {
    id: "4",
    title: "Beachfront Condo",
    price: 1950000,
    address: "101 Coastal Highway",
    city: "Miami",
    state: "FL",
    zipCode: "33139",
    description: "Spectacular beachfront condo offering unobstructed ocean views and direct beach access. This luxurious residence features high-end finishes, an open floor plan, and a spacious balcony perfect for enjoying the sunset. Building amenities include a pool, spa, fitness center, and 24-hour security.",
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1800,
    propertyType: "Condo",
    features: [
      "Beachfront",
      "Ocean Views",
      "Private Balcony",
      "Pool & Spa",
      "Fitness Center",
      "Valet Parking",
      "Concierge Service",
      "Pet Friendly"
    ],
    images: [
      "https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg"
    ],
    isFeatured: false,
    isNewListing: true,
  

  },
  {
    id: "5",
    title: "Historic Brownstone",
    price: 3250000,
    address: "222 Heritage Lane",
    city: "Boston",
    state: "MA",
    zipCode: "02116",
    description: "Exquisite historic brownstone in Boston's prestigious Back Bay neighborhood. This meticulously renovated property preserves its historic charm while offering modern amenities. Features include original hardwood floors, ornate fireplaces, custom millwork, and a private garden. A rare opportunity to own a piece of history.",
    bedrooms: 4,
    bathrooms: 3.5,
    squareFeet: 4200,
    propertyType: "Townhouse",
    features: [
      "Historic Architecture",
      "Multiple Fireplaces",
      "Private Garden",
      "Gourmet Kitchen",
      "Wine Cellar",
      "Library",
      "Roof Deck",
      "Elevator"
    ],
    images: [
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
    ],
    isFeatured: false,
    isNewListing: false,
 

  },
  {
    id: "6",
    title: "Mountain View Retreat",
    price: 2950000,
    address: "333 Summit Ridge",
    city: "Aspen",
    state: "CO",
    zipCode: "81611",
    description: "Stunning mountain retreat offering breathtaking views and luxury amenities. This custom-built home features vaulted ceilings, floor-to-ceiling windows, and a stone fireplace. Enjoy outdoor living with expansive decks, a hot tub, and easy access to hiking trails and ski resorts.",
    bedrooms: 4,
    bathrooms: 4.5,
    squareFeet: 5000,
    propertyType: "Chalet",
    features: [
      "Mountain Views",
      "Stone Fireplace",
      "Hot Tub",
      "Game Room",
      "Heated Floors",
      "Ski Storage",
      "Wraparound Deck",
      "Smart Home System"
    ],
    images: [
      "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg",
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
    ],
    isFeatured: true,
    isNewListing: true,


  }
];

export default properties;