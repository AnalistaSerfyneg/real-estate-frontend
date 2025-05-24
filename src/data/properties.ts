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
    id: "14",
    title: "LOTE # 2 DE LA ZONA DE RESERVA # 3 CAVASA - CORREGIMIENTO EL CARMELO",
    price: 2351675760,
    address: "KM 14 VÍA CALI - CANDELARIA",
    city: "CANDELARIA",
    state: "VALLE DEL CAUCA",
    zipCode: " ",
    description: "Ubicado en el Corregimiento El Carmelo, sobre el KM 14 de la vía Cali - Candelaria, en el municipio de Candelaria, Valle del Cauca, este lote hace parte de la Zona de Reserva #3 de CAVASA. Con una extensión total de 55.992 m², esta propiedad se destaca por su topografía completamente plana, lo que la hace ideal para desarrollos agroindustriales, logísticos o proyectos de inversión. El lote no cuenta con construcciones ni cultivos, lo que facilita el aprovechamiento total del terreno según tus necesidades. Gracias a su estratégica ubicación y amplias dimensiones, representa una excelente oportunidad para inversionistas y empresas que buscan un espacio versátil y bien ubicado en el corazón del Valle del Cauca.",
    bedrooms: 0,
    bathrooms: 0,
    squareFeet: 55992,
    propertyType: "LOTE",
    features: [
      "Tipografina plana",
       "Sin construcciones",
       "Sin cultivos"
    ],
    images: [
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/c883eb82-d988-4a8a-8fa4-4bbb1839f941-xM2N1bA3ts5XJ8YNZ7yxXJbphdaHt3gvEvUvTr22HwM38d40wtNJ9CwLLEoLJM2ZtrtmUHsNQ7hbhugdpDQ1fJWuXtEsrgYXHr6/IMG-20241125-WA0006.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/8612fcc2-a55f-4773-8cbb-7151683792bd-bYRjenVO6iX0wyuzjsFITd7e0Z5368xIfQO6Nvi2a7fNJSM631AnC5Zp1LmkJr3zrRJa9O2Dk4cMiW5uAeuJPOohLkF7mMJOGqR/IMG-20241125-WA0001.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/26c25df7-6d7c-401c-bcf4-999eac6ce508-lTMaEebBpauOifLjYoVGtwQORk1huvve1F2fTeLOExNoWbI40WLKMd6XIdkxHj49VsW7KqfBAWTUflCVyxL5P50iskVKloKzgPh/Imagen-de-WhatsApp-2025-02-17-a-las-09.51.26_dfa41cae.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/ce3c5cb9-dbd8-4407-8dac-efee810dc935-fJqKJKVUkkgZqrIeC5XOSmH9jPVlubeDF3hJC0Lb4HzYXDUk5OVhDmk6bH9VAuDfFdeNaqEst6aKDlwM7slNGA3S66m6yGMH0ad/Imagen-de-WhatsApp-2025-02-17-a-las-09.51.26_1c79a97e.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/f1a05a13-a0f9-494c-be15-8e72480313d6-TgJyzTVqRuZT8mzMc0HI5otiGriLhtraLF939MM2W9D9tX8so1pNb6NmGyUlmpjDL89d2WaeLSIE7lBX0R7BlLO2anwVSQrOjrP/Imagen-de-WhatsApp-2025-02-17-a-las-09.51.26_8f1c9c37.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/2acd608c-3ccf-4338-913c-29c3dfa34b55-wB2ok1ajt54zGpB30NjgYHpNiawSGzb9I3QEBJ9AmTh8YoQkJw4nwkG3fTaK0QcZPUAoxoBKn1IUpI5ajjNGsIVlSISFRdyjN3O/Imagen-de-WhatsApp-2025-02-17-a-las-09.51.25_810e5ee0.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/e08f676c-a909-4bf6-8642-226f4bc44c97-ysDJXQ5sK2Z4Olk6mIMwPZPjJ2u4ITaKlx7jqvxnRYraKfSXTxTFkKuWu7d8f2l432ldIQ0qwMqQnQn8lL4LWN7w5EJO4bXwAdk/Imagen-de-WhatsApp-2025-02-17-a-las-09.51.25_8e4e0964.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/8e87f6e6-1acd-4cd4-b634-00622b18e0de-RqmVsA49lZzrPItINatWaiMab1MUxHx7d5WAeEL9BavKi52feNkI15dWOgwamShU6tVLXGmgcE2SBwkjR505Tuqjz9MCE35NUgo/Imagen-de-WhatsApp-2025-02-17-a-las-09.51.25_8f3d2d4e.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/48a5c998-80f7-4de3-9367-b94638b82061-sU0uHc3lhttVFKMhw3u453jgyfEaCnFMnxt2AlrjFhAr3jeRh909flMeZmJnurbYFNZRPMT1mvxvAOAeRw4CC8dWrV0gruZqxpV/IMG-20241125-WA0002.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/ee17b73e-dbf7-412a-a37b-2bbffc3272af-AHZ7HO7H08PVnyUrryROf2k34Gufp9R2XPDJs97jb0vOJ8p5ZGqqRydBNcsoP1hk06abHhvdojX3uDswUKqAkQggfWo19zSTwSx/Imagen-de-WhatsApp-2025-02-17-a-las-09.51.25_1ed23547.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/e5ffe11e-3bcc-47a8-bae5-f1af4e3d300c-g9arV956l801qABKSVYDiUhrcBb2P4T8QVAjb9gMRs7sj95yotV2fu3BGkQyn8EvLO8QypXzrhp8PhwZdJX7nSPc8NCb8GCDNqj/IMG-20241125-WA0004.jpg"
    ],
    isFeatured: false,
    isNewListing: false,
    mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4574.9717795276465!2d-76.43364745542036!3d3.412389813511791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3a098d9312eed5%3A0x7975049629c4d634!2sAuto.%20Cali%20-%20Candelaria%20%2314%2C%20Candelaria%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1748076259290!5m2!1ses!2sco" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
 
  },
  {
    id: "21",
    title: "EDIFICIO MULTIFAMILIAR KATARY 3 P.H.",
    price: 429394314,
    address: "CRA 26A # 62-32 APTO 502 GARAJE 11",
    city: "BOGOTÁ",
    state: "BOGOTÁ",
    zipCode: " ",
    description: "Ubicado en el Edificio Multifamiliar Katary 3 P.H., en la ciudad de Bogotá, este moderno apartamento en el quinto piso (Apto 502) ofrece una excelente distribución y comodidad en sus 57 m². Cuenta con 2 habitaciones, 2 baños, una acogedora sala, comedor, cocina funcional, zona de ropas, vestier y un balcón ideal para disfrutar de la vista y la ventilación natural.  Incluye garaje privado (No. 11), lo que aporta comodidad y seguridad adicional. La propiedad se encuentra en un sector residencial con buena conectividad, ideal para quienes buscan calidad de vida en la capital.",
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 57,
    propertyType: "APARTAMENTO",
    features: [
      "Sala",
      "Comedor",
      "Cocina",
      "Zona de ropas",
      "Vestier",
      "Balcon",
      
    ],
    images: [
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/2f11ae69-913f-4632-afdc-ce0788399e6f-r3DyOrmhlrFAuxZ2xKAp3p8LoYvcHluZh7SP2ETrCVxTIbwUXNsFlDlBLI1CVijvP8lf04dtv4rfWxyxWfaKj07v85GoOezmGPy/Imagen-de-WhatsApp-2025-02-17-a-las-09.56.41_9e0e9bf6.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/f1b51867-c23f-4cfc-85e7-fb23cca9a3d8-CKYW7soB6TD6G6JrE12UpiAKumjGB8kNdAVzHEzHPSHw5aRw0SQScKQN8euc77oDoeZxQz765uQ2otDK8IQSNvSHxiM19Oqq8gI/Imagen-de-WhatsApp-2025-02-17-a-las-09.56.40_7abafebe.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/97f5d750-ce3b-4cf0-9f06-46a42278d85a-THWOe7vdAaf6RoEEV5yzebm9agZvdUsSQpCgRgh8D8K4WURd2sauU3DUJXzEpglVGfDyy6vZuuTwY3CbB7KSe0LHuoK33XGNjBH/IMG-20241212-WA0005.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/da4dbb15-6a66-4197-817e-72cdf9c7456f-Tm6lCibCea27ImJqcKaVda2pwrJuISI2Yc8kF0EITo0EJIBNPQGLhkCty0Qfb7P9afjq2flAv8DkmEGeWzCrbhuV1KyOpplsiSZ/Imagen-de-WhatsApp-2025-02-17-a-las-09.56.58_1ebc4340.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/623d02e2-ba47-4ae6-aa71-41a92521d7c2-jeAVQuEuIQltB92bcvZ7tu9jygqshfxJ32EWD8vGF2J9lwlyA1QIHG7TrM9uOZwfT6rKZtLPxAQKPdNFJbZFQEgwHGKDrIib7Ry/Imagen-de-WhatsApp-2025-02-20-a-las-09.21.47_befec3c4.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/53e80382-1ef9-4c80-8605-0b52c6fafebc-xJ1l4q8Aykzc7PhAy9XPfzJxU3aAUym58tXXgvEOtAlGWYMZnduLxvGIMlnVAzsuqEoNy8WrE7rDLH8mW3En154WeRVgLIICFC3/Imagen-de-WhatsApp-2025-02-17-a-las-09.56.59_4683da8e.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/bfe6f1c8-0919-4ba1-91a1-d836f103cfb4-KA6fbKbutlIwNezq4MPpNZRfm7KFdW7HVONXYWzGlu8ApY3gWnrnrpnVTNUvVs5Px0nWYe8PC3lkegZdjJy8LhSL2tTOJ2O31oK/Imagen-de-WhatsApp-2025-02-20-a-las-09.21.45_7481cb57.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/bbdd05f3-1a86-4f9e-b996-60d49764e081-u9yDSBlUzM3KEkaKBsdYM5ob86rgwGIRk9JnLSIalxa0p3fLEkZ4g2qyhTTajzSKsU3z3lmgYsksYM2Tm3t6kVKjL3OVVRVfBGD/IMG-20241212-WA0008.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/c4a95218-0f09-44f5-850e-a72c1f7c87f4-FLraVsLMvCPx8OcRNcwIxxAfwFwTUKGqrUP276OIz3TGSWKLyuBmuWcnUinBrhUX2bqHjOx85ZKVMlPOdLd3znw3odBDQxgQ42e/IMG-20241212-WA0006.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/99261404-366f-4cc6-9cef-88f8e3186065-IacIRiVXHiO1zxtmW5KAH2tTCxycGCIiYDoqn1FbunCQ0q7Z1nYwkLO6LNW1jUgMVky6TAhhi8ilCJ4FhScwhlFp4s967U9dWqL/Imagen-de-WhatsApp-2025-02-17-a-las-09.57.00_b054dea8.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/a34d1045-2d44-4cb2-acaa-45faa19f5e81-fSnr9fm4PrsQfCVVckCuVCUNA59aGjfifrT7t4AOrmQRpNtNVlZrKwJ3ciObzgCz2HRF9kdr2vIvKxCNnvk8eKRJzPLUkIBUnNV/IMG-20241212-WA0001.jpg"
    ],
    isFeatured: true,
    isNewListing: false,
    mapIframe:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.681464945093!2d-74.07653702528775!3d4.65078234208882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a4b9ddec43f%3A0xff2b83d1acc78d9d!2sCra.%2026a%20%2362-32%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1748079111035!5m2!1ses!2sco" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  },
  {
    id: "22",
    title: "EDIFICIO TERRA",
    price: 217902281,
    address: "CARRERA 16# 47-76 APTO 401 GARAJE 2 DEPOSITO 5",
    city: "TUNJA",
    state: "BOYACA",
    zipCode: " ",
    description: "Ubicado en el Edificio Terra, en la ciudad de Tunja, Boyacá, este apartamento en el cuarto piso (Apto 401) ofrece una excelente combinación de comodidad, funcionalidad y ubicación estratégica. Con un área de 62 m², cuenta con 3 habitaciones, 2 baños, una sala comedor acogedora, cocina, zona de ropas y una encantadora terraza ideal para disfrutar del aire libre. Además, la propiedad incluye 2 garajes y 1 depósito privado (Depósito 5), lo que brinda un valor agregado en términos de espacio y almacenamiento. El edificio ofrece un entorno residencial tranquilo y seguro, perfecto para familias o quienes buscan una excelente inversión en la capital boyacense.",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 62,
    propertyType: "APARTAMENTO",
    features: [
      "Sala comedor",
      "Cocina",
      "zona de ropas",
      "Terraza",
    ],
    images: [
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/ac19d31f-2fc8-4357-8bc7-801d3951d7f6-0uvExbTqyERv0dUGSAQnIiEqRCfWA251oSJjSOQAj0It5mIJ6GCnoCJ58qteaUMCwEOUFQXrHpkWzwCbxnfx9u9Fq3xtTCqdRjF/Imagen-de-WhatsApp-2025-02-08-a-las-08.26.02_82216bfe.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/34900f1a-ae39-4ef0-8a70-fb1882c9fe3f-BygEGB6OdHkok5uYvm3cSedGAomGJuBsvUfDwu53Al8lX32cBuxKSCOggG36F18YK6tYSIVV3FQtGQbKl4u2CXt87OWepEDWSOd/Imagen-de-WhatsApp-2025-02-24-a-las-14.44.27_ee1ea501.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/635346dc-69fe-4f5f-a5c7-aee9d3c66116-ScgmJCnEEYLvG1EL1eF6RQEeC2GwsSkT5XDxj6mAgpdIiEzKEusx1GTCIyFkPVAKrKARalUu7MTXpVF28PsleXrWrgPli7SYyQ1/Imagen-de-WhatsApp-2025-02-24-a-las-14.44.24_5d1cfbdb.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/941eca1e-a107-486d-b595-98913f0a4f14-FSALd4rqXyQ2WdVqxJGJOPi1R5dRy620i8HSDj9hCbRol1uPbuylLhzlfgBOsJI2LbEytFgm0o7VMdWaqIr2t3zHMcRqMyGGU1c/Imagen-de-WhatsApp-2025-02-08-a-las-08.26.02_2085761d.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/66b7ce01-d9c2-465d-8ff7-c45c86914c32-CKlVgXY9m1KHqtdLW1dOK2y4G3ioCgKUTVrucnvlfdIXJ2xGC8o5CnKsO9G0tC6VYNJjsAR7Qs0kCUeg7ybehFprLoO5WIOD8JM/Imagen-de-WhatsApp-2025-02-24-a-las-14.44.27_2a292429.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/aacc27ea-43d1-4c53-9da6-4a92c5f0eec7-JedAZBNb8Itfywo3grcWe6qPQTV7yI6Ft6wyPaK12NGnPr5jGDY1sNtuSkY7zd96f9wc5oUxH9HDO1Z9tYwWHAJgkQN6xtUzi2I/Imagen-de-WhatsApp-2025-02-08-a-las-08.26.25_1e701773.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/6ebba5cb-5970-4740-88f1-44b0326b544e-hwNQKceSYnbjO3oe7NVLsyT1URvqRrX1pA65FOBGOyJ30LzhuwzQp4BAtqL7BLZp2NcSjoC7CmoWownv0yor1CYJBi8zBIy6CfN/Imagen-de-WhatsApp-2025-02-08-a-las-08.26.23_8f8836e4.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/92c09213-8a3c-4a06-bd13-3df9f5ff556a-Q0l0M1fqzIme1cuLHMe156YcmGU57wDsSNjCq9G3QSp4t6rjiKIghBuDU3drUYP2q30CipPds040cRmQDkhJMNgz5cLHytblPOH/Imagen-de-WhatsApp-2025-02-24-a-las-14.44.17_d8e10f59.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/96d91ffb-13da-40fe-bf90-04ca38114c76-wm4f1iBWX4v9457mLlmj1WNKmhBAA7LadIpgOIhcvlf3BYDwUnPsOFKmVoRVDHUgxucOhIGyNAbDG5m2pxithVYGCPMfa9K67vp/Imagen-de-WhatsApp-2025-02-24-a-las-14.44.16_1f17b2a0.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/031d4553-502d-42c5-b5f4-2d7da70cb157-ip6uDaV7Q1O00Sl41aFjA2EJDKS8Zy65bVPprwLMjJxANm5wJvTss1thzjxzjyZmuSP8h6QV7AYC4P4S1zF3qSYeWy9Hvj9D1Ml/Imagen-de-WhatsApp-2025-02-08-a-las-08.26.01_733604b0.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/d60fe1e1-89a4-40b2-b451-83018d208430-Mmt1u6vlOM50iVpvxZoKWZRqGOj3Ud6RbL5VwkkzBcWszrMlL0ubUnBgmaJ1ChHZ9YHnM6bfIe1Im5lABfK7yxNlRKq5VoVKHQh/Imagen-de-WhatsApp-2025-02-24-a-las-14.45.17_7a70325a.jpg"
    ],
    isFeatured: false,
    isNewListing: true,
    mapIframe:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.053437917372!2d-73.36103392280299!3d5.559098319259543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a7c10fd645b57%3A0x8b0e6c46a22a1c40!2sCra.%2016%20%23%2047-76%2C%20Tunja%2C%20Boyac%C3%A1!5e0!3m2!1ses!2sco!4v1748079581912!5m2!1ses!2sco" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  

  },
  {
    id: "24",
    title: "PORTANOVA PROPIEDAD HORIZONTAL",
    price: 193211315,
    address: "CARRERA 6 # 20-35 APTO 1014 TORRE B",
    city: "PIEDECUESTA",
    state: "SANTANDER",
    zipCode: " ",
    description: "Ubicado en la Torre B del conjunto residencial Portanova en Piedecuesta, Santander, este cómodo apartamento en el piso 10 (Apto 1014) ofrece una excelente distribución de 67 m². La propiedad cuenta con 2 habitaciones, 2 baños, sala, comedor, estudio, una práctica cocina y un balcón con vista despejada, ideal para relajarse y disfrutar del entorno. Diseñado pensando en la funcionalidad y el confort, este apartamento es ideal tanto para vivir como para invertir. El conjunto residencial ofrece un entorno seguro y familiar, con fácil acceso a servicios, comercio y vías principales de la ciudad.",
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 67,
    propertyType: "APARTAMENTO",
    features: [
      "Sala",
      "Balcón",
      "Comerdor",
      "Cocina",
      "Estudio",
    ],
    images: [
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/0aba2bb5-50db-4672-8e51-a174f4637626-sfQ8uWg4t6lZ97VWxt1fnDh82rvsnTcd6wYZjNSJmCB0ornzvoBJnGEBlyfHisAME8TGAuNDmfSWLGrJH3WGszWTtQkaJqEQodB/Imagen-de-WhatsApp-2025-02-23-a-las-22.35.58_8b577ad4.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/de88a01f-1e36-4fdd-9fbd-baf1b2810181-U2aQ8m3XplzthNELkbQuzq2Djsg8OyMClQNVDPOFrkMdLG8sut2jY4vPpnvuxMeGaA4XtShXXCerfbBmXPmKcFqPVUKoRND0Cwu/Imagen-de-WhatsApp-2025-02-13-a-las-17.42.42_87ee0204.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/6d25dede-1d8e-4082-bfea-223cdadc6616-QjzHuK7NM71XKkxvlCnHfm8HFh0cEAj5s5oAwPXpHrJcub6PUbJUq9bd1V3SJnyCFfTbzDtUJZksCvmtIvgMHrkqdqC4hUvFPL4/Imagen-de-WhatsApp-2025-02-23-a-las-22.35.58_164eb003.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/7f42bcb1-af0b-4bde-bfbd-9464d388eca6-NJW73l6FpiBG3kZhDVjSQF8lNd5QQKuSCu6H053oGl0HH7H0GO1iRKgUQVhpYWDtYXg7CfOXgkonbRfST1B1xaq1KifiVuFOlvg/Imagen-de-WhatsApp-2025-02-13-a-las-17.42.42_d2110e98.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/f8a79986-7876-44b6-b0ea-93e3bb820d00-m4kEscDdDYKUdBA7HJwk3eq8NjfRdi7q1SOQsLuJJrCbsL55TRF8VJ1tPAHLPSDmZqEZCpV7junda2pV1gYlb5dXXWXrqoSxHUq/Imagen-de-WhatsApp-2025-02-13-a-las-17.42.40_21c7ed76.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/0a375124-3e1c-432d-ad01-83707d977aaa-5CvcRjT1qR8vio8pTljmYhCDLsoLHMiVI8Bkdt5gcDx46EMcCtlbOwpC7BOINffPOHCQQrkgGzTpyoaZ8FlLjYdiO7SfSHSXpFy/Imagen-de-WhatsApp-2025-03-19-a-las-08.17.05_2ef3fa25.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/ecb4cd50-c85b-45de-994c-60dbdaf6dd35-R9tQJ2BAsvxfbl2zNJO1pCCdGcgMHjLKrbmCcaUmLxHkTmguTN0FNctSoFJW46yoiTxCqRHZo6ArOtKukJLhAkanoCjo9E7OujX/Imagen-de-WhatsApp-2025-02-23-a-las-22.35.56_00a83001.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/f0afa122-fbee-4ff4-9318-8350f09865cf-qYEl0QcRt39IQLHBxnvDNViFvSNovvntDqZ8vR8VznV6ylOnZu1x8jNEzxT2QUaXVqL2xNMyScvEqtteg4HmLOKqoGTaJM9Wp2F/Imagen-de-WhatsApp-2025-03-19-a-las-08.17.04_8e23bd31.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/dea900e2-66bc-4b62-9409-8ffe5cf261e0-N6aSlPTiqmmZ9VtiUla2iMuOch3QXW8q93TmzuqHjeYsdniN7w9SSrKwByRN5GzRFxIzQ43Uqg2AaGgMHQQFsvh62QkcAa5Eb9Q/Imagen-de-WhatsApp-2025-02-23-a-las-22.38.12_e3e03dd0.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/b40bfff4-1a2c-4a85-9236-b06dbcccef0c-ZDFj3lu0wHDSZkt5whu7Mr0pG9nT88oMcmvFxOZ6iV7zYd6J2B2g70yrucXAyMoXMp53ZGQULK37M1fIcEVcXUJrUqMvtCkBXSx/Imagen-de-WhatsApp-2025-02-23-a-las-22.38.12_5e7aa456.jpg",


      
    ],
    isFeatured: true,
    isNewListing: false,
    mapIframe:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.5560970385895!2d-73.99399622528675!3d5.013124738870491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e407031b1fe1543%3A0x65e8d9264933d420!2sDg.%204b%20Bis%20%2330-26%2C%20Zipaquir%C3%A1%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1748080080737!5m2!1ses!2sco" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',

  },
  {
    id: "28",
    title: "CONJUNTO RESIDENCIAL LAS AMERICAS",
    price: 111461006,
    address: "CASA BIFAMILIAR 12 APTO 112 BARRIO RINCON DE LAS AMERICAS",
    city: "IBAGUE",
    state: "TOLIMA",
    zipCode: " ",
    description: "Ubicado en el Barrio Rincón de Las Américas en Ibagué, Tolima, este apartamento tipo bifamiliar (Casa 12, Apto 112) hace parte del Conjunto Residencial Las Américas. Con un área de 56 m², la propiedad ofrece una distribución práctica con 3 habitaciones, 1 baño, sala, comedor, cocina y un patio ideal para ventilación natural o zona de lavandería. Gracias a su ubicación en un sector residencial consolidado, esta vivienda es perfecta para familias que buscan comodidad, tranquilidad y fácil acceso a servicios esenciales. Además, representa una excelente oportunidad de inversión por su precio accesible y potencial de valorización.",
    bedrooms: 3,
    bathrooms: 1,
    squareFeet: 56,
    propertyType: "APARTAMENTO",
    features: [
      "Sala",
      "Comerdor",
      "Cocina",
      "Patio",
    ],
    images: [
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/bc9843e2-cc50-4ba5-80a7-5203a961cbb0-tUQ6OmqCntELfStQRIgKBpwjtbE7PFXGTxUseh72Yn0PDgDJxAJ4xRRUfd2sAVk4riO9JmvqtBZpfEeLx3o1P9l0d0zYXW56nPO/id-28.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/10d1c695-4d6d-489f-b030-899df6cad691-NND1gjmEsEYhld6WOV6Byn4Bof4Ssyb1qQKwr6oa6mraZtFeGhsh65KSuyEqHVbUCCr24SYtGmCAAnfMmTTb7sKApbHLF0eSem0/lavadero-28.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/ca2bf60a-0ba3-46c8-a4fc-0d935992c25b-hcP68B7QKZ4egm23WqCotWfTszvbpS1srEf8TPPEXTXi0KXS2gF5syU9GfK1Hh2mJ9GcC1jhhn2aoHk8mY8Hswnb77HpR3PikSe/id-28-cocicna.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/b9c75271-a6f5-481f-a5ea-f990b7062afb-uh4yja5MfX5xIUtEM3Z8JTNC5BFHqX86oucmTMvxeznL1A2Y398KsC3WJQQG4GymPX71t8SNrrRFushZAAkNDSEcNBP8dtGci83/baAo-id-28.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/ffa6a96b-439f-4950-ae39-0c1ab3a96040-lmHe6jQ2K89sPcW79DgszCrkHsAuaqhYpgWCuORDDgXA9sWvjIzKdHmrNfOlnTEt5HKcwN9GXf2tCfQEl0LpxwVovnXVZHV20Pk/Imagen-de-WhatsApp-2024-10-21-a-las-17.01.57_805019e0.jpg",
      "https://prod-fillout-oregon-s3.s3.us-west-2.amazonaws.com/orgid-93755/flowpublicid-h72USHfGwsus/663cbc62-53bc-431a-a65b-d02a08253879-pHtQrEtCi7DeXM1XGJ0zLIxjjtYUNLVzCWv4xOcoWgnaF2rnoM0aMxgkJTwYrMtTtOoqJma4VUk2AVH0LI9dhkkcOsrYxBSuFFv/Imagen-de-WhatsApp-2024-10-21-a-las-17.01.57_dccae497.jpg"
    ],
    isFeatured: false,
    isNewListing: true,
    mapIframe:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.6257150807897!2d-75.14384444518183!3d4.4089561996686575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38d19da4af0c5d%3A0x6beefe980e545404!2sParque%20BioSaludable%20Rinc%C3%B3n%20de%20las%20Am%C3%A9ricas!5e0!3m2!1ses!2sco!4v1748080985021!5m2!1ses!2sco" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',


  }
];

export default properties;