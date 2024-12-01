// Lista de pontos turísticos e lazer por região no Rio de Janeiro
const locations = [
    // Zona Norte
    {
        name: "Maracanã",
        lat: -22.912160,
        lng: -43.230220,
        address: "Av. Pres. Castelo Branco, Maracanã, Rio de Janeiro - RJ",
        hours: "Diariamente, das 9h às 17h (exceto em dias de jogos)",
        price: "R$ 65,00 (tour pelo estádio)",
        description: "O maior estádio do Brasil, palco de eventos históricos."
    },
    {
        name: "Quinta da Boa Vista",
        lat: -22.906541,
        lng: -43.222569,
        address: "São Cristóvão, Rio de Janeiro - RJ",
        hours: "Diariamente, 24h",
        price: "Gratuito",
        description: "Um enorme parque público com jardins, lagos e o Museu Nacional."
    },
    {
        name: "Norte Shopping",
        lat: -22.880715,
        lng: -43.297691,
        address: "Av. Dom Hélder Câmara, 5474 - Cachambi, Rio de Janeiro - RJ",
        hours: "Diariamente, das 10h às 22h",
        price: "Gratuito para entrada",
        description: "Um dos maiores shoppings da Zona Norte, com cinemas, lojas e praça de alimentação."
    },
    // Zona Sul
    {
        name: "Cristo Redentor",
        lat: -22.951916,
        lng: -43.210487,
        address: "Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ",
        hours: "Diariamente, das 8h às 19h",
        price: "R$ 31,00 a R$ 88,00",
        description: "Uma das Sete Maravilhas do Mundo Moderno, com vista espetacular do Rio."
    },
    {
        name: "Praia de Copacabana",
        lat: -22.971177,
        lng: -43.182543,
        address: "Av. Atlântica, Copacabana, Rio de Janeiro - RJ",
        hours: "Acesso livre, 24 horas",
        price: "Gratuito",
        description: "Famosa praia carioca conhecida por suas areias brancas e animado calçadão."
    },
    {
        name: "Parque Lage",
        lat: -22.966750,
        lng: -43.211181,
        address: "R. Jardim Botânico, 414 - Jardim Botânico, Rio de Janeiro - RJ",
        hours: "Diariamente, das 8h às 17h",
        price: "Gratuito",
        description: "Parque histórico com jardins, trilhas e uma cafeteria popular."
    },
    // Zona Oeste
    {
        name: "Barra Shopping",
        lat: -22.999623,
        lng: -43.360054,
        address: "Av. das Américas, 4666 - Barra da Tijuca, Rio de Janeiro - RJ",
        hours: "Diariamente, das 10h às 22h",
        price: "Gratuito para entrada",
        description: "O maior shopping do Rio, com diversas opções de lazer."
    },
    {
        name: "Praia do Recreio dos Bandeirantes",
        lat: -23.027506,
        lng: -43.470774,
        address: "Av. Lúcio Costa, Recreio dos Bandeirantes, Rio de Janeiro - RJ",
        hours: "Livre, 24h",
        price: "Gratuito",
        description: "Praia tranquila, ideal para surf e famílias."
    },
    {
        name: "Bosque da Barra",
        lat: -22.998675,
        lng: -43.384951,
        address: "Av. das Américas, 6000 - Barra da Tijuca, Rio de Janeiro - RJ",
        hours: "Diariamente, das 6h às 18h",
        price: "Gratuito",
        description: "Parque ecológico ideal para caminhadas e piqueniques."
    },
    // Centro
    {
        name: "Museu do Amanhã",
        lat: -22.895854,
        lng: -43.181416,
        address: "Praça Mauá, 1 - Centro, Rio de Janeiro - RJ",
        hours: "Terça a domingo, das 10h às 18h",
        price: "R$ 20,00 (inteira)",
        description: "Museu interativo sobre ciência e sustentabilidade."
    },
    {
        name: "AquaRio",
        lat: -22.895893,
        lng: -43.194437,
        address: "Praça Muhammad Ali, Gamboa, Rio de Janeiro - RJ",
        hours: "Diariamente, das 9h às 17h",
        price: "R$ 50,00 a R$ 140,00",
        description: "O maior aquário marinho da América do Sul."
    },
    // Baixada Fluminense
    {
        name: "Shopping Nova Iguaçu",
        lat: -22.756279,
        lng: -43.460841,
        address: "Av. Abílio Augusto Távora, 1111 - Nova Iguaçu, RJ",
        hours: "Diariamente, das 10h às 22h",
        price: "Gratuito para entrada",
        description: "Shopping moderno com cinema, restaurantes e lojas populares."
    }
];

// Inicializando o mapa
const map = L.map('map').setView([-22.9068, -43.1729], 11);

// Adicionando mapa do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Criando marcadores e populando lista
locations.forEach(location => {
    const marker = L.marker([location.lat, location.lng]).addTo(map);
    marker.bindPopup(`
        <strong>${location.name}</strong><br>
        <em>${location.address}</em><br>
        <strong>Horário:</strong> ${location.hours}<br>
        <strong>Preço:</strong> ${location.price}<br>
        <p>${location.description}</p>
    `);

    const listItem = document.createElement('li');
    listItem.textContent = location.name;
    listItem.addEventListener('click', () => {
        map.setView([location.lat, location.lng], 15);
        marker.openPopup();
    });
    document.getElementById('locations-list').appendChild(listItem);
});
