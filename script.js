// Substitua o 'SEU_TOKEN_AQUI' pelo seu token real do Mapbox
mapboxgl.accessToken = 'SEU_TOKEN_AQUI';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v12', // Estilo de mapa ideal para natureza
    center: [-44.05, -20.15], // Coordenadas aproximadas de Casa Branca
    zoom: 13
});

// Exemplo de um ponto de registro
const marker = new mapboxgl.Marker()
    .setLngLat([-44.05, -20.15])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Espécie: Lobo-guará</h3><p>Estado de saúde: Aparentemente saudável.</p>"))
    .addTo(map);
