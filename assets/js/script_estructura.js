const pathname = window.location.pathname;
const directoryPath = pathname.substring(0, pathname.lastIndexOf('/'));

const prop_ventas = [
  {
    nombre: 'Apartamento céntrico elegante',
    src: 'foto1.jpg',
    descripcion: 'Moderno apartamento ubicado en el corazón de la ciudad. Totalmente amueblado y equipado con todas las comodidades para una estancia confortable.',
    ubicacion: 'Centro de la ciudad',
    habitaciones: 2,
    costo: 2500,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Ático con vistas panorámicas',
    src: 'foto2.jpg',
    descripcion: 'Impresionante ático situado en un edificio de lujo con vistas panorámicas a la ciudad. Amplias habitaciones y terraza privada.',
    ubicacion: 'Zona exclusiva',
    habitaciones: 3,
    costo: 4000,
    smoke: false,
    pets: false
  },
  {
    nombre: 'Apartamento junto al mar',
    src: 'foto3.jpg',
    descripcion: 'Encantador apartamento situado a pocos pasos de la playa. Disfruta de la brisa marina y las hermosas vistas al océano desde tu propia terraza.',
    ubicacion: 'Costa',
    habitaciones: 1,
    costo: 1800,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Casa de campo tranquila',
    src: 'foto4.jpg',
    descripcion: 'Acogedora casa de campo ubicada en un entorno rural tranquilo. Ideal para aquellos que buscan escapar del bullicio de la ciudad y disfrutar de la naturaleza.',
    ubicacion: 'Campo',
    habitaciones: 4,
    costo: 3000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Loft moderno en el centro histórico',
    src: 'foto5.jpg',
    descripcion: 'Espacioso loft situado en el corazón del centro histórico. Diseño contemporáneo y comodidades de lujo hacen de este lugar una opción perfecta para los amantes de la vida urbana.',
    ubicacion: 'Centro histórico',
    habitaciones: 1,
    costo: 2000,
    smoke: true,
    pets: false
  },
  {
    nombre: 'Chalet de montaña acogedor',
    src: 'foto6.jpg',
    descripcion: 'Encantador chalet ubicado en las montañas, rodeado de naturaleza. Disfruta del aire fresco y las impresionantes vistas desde tu propia terraza privada.',
    ubicacion: 'Montaña',
    habitaciones: 3,
    costo: 3500,
    smoke: false,
    pets: true
  }
];

const prop_alquiler = [
  {
      nombre: 'Apartamento moderno en el centro',
      src: 'foto7.jpg',
      descripcion: 'Acogedor apartamento ubicado en una zona céntrica de la ciudad. Totalmente amueblado y equipado con todas las comodidades para una estancia cómoda.',
      ubicacion: 'Centro de la ciudad',
      habitaciones: 1,
      costo: 1200,
      smoke: false,
      pets: true
  },
  {
      nombre: 'Piso amplio con terraza',
      src: 'foto8.jpg',
      descripcion: 'Espacioso piso con una gran terraza privada y vistas panorámicas. Ideal para aquellos que buscan un espacio al aire libre en el centro de la ciudad.',
      ubicacion: 'Zona exclusiva',
      habitaciones: 3,
      costo: 2500,
      smoke: false,
      pets: false
  },
  {
      nombre: 'Chalet adosado en urbanización',
      src: 'foto9.jpg',
      descripcion: 'Luminoso chalet adosado situado en una urbanización tranquila. Con jardín privado y piscina comunitaria, perfecto para familias.',
      ubicacion: 'Urbanización',
      habitaciones: 4,
      costo: 3000,
      smoke: false,
      pets: true
  },
  {
      nombre: 'Estudio acogedor cerca de la playa',
      src: 'foto10.jpg',
      descripcion: 'Encantador estudio a pocos pasos de la playa. Ideal para parejas o personas que buscan un lugar tranquilo cerca del mar.',
      ubicacion: 'Costa',
      habitaciones: 1,
      costo: 900,
      smoke: true,
      pets: false
  },
  {
      nombre: 'Ático con vistas al mar',
      src: 'foto11.jpg',
      descripcion: 'Espectacular ático con vistas al mar en todas las habitaciones. Totalmente amueblado y con amplia terraza, perfecto para disfrutar del clima mediterráneo.',
      ubicacion: 'Costa',
      habitaciones: 2,
      costo: 1800,
      smoke: false,
      pets: true
  },
  {
      nombre: 'Casa rural con encanto',
      src: 'foto12.jpg',
      descripcion: 'Acogedora casa rural situada en un entorno natural privilegiado. Ideal para aquellos que buscan desconectar y disfrutar de la tranquilidad del campo.',
      ubicacion: 'Campo',
      habitaciones: 3,
      costo: 2000,
      smoke: false,
      pets: true
  }
];


const propiedadesVentaContainer = document.getElementById('propiedades_venta');
const propiedadesAlquilerContainer = document.getElementById('propiedades_alquiler');

if (pathname.includes('propiedades_venta.html')) {
  mostrarPropiedadesVenta(prop_ventas);
} else if (pathname.includes('propiedades_alquiler.html')) {
  mostrarPropiedadesAlquiler(prop_alquiler);
} else {
  mostrarPropiedadesVenta(prop_ventas.slice(0, 3));
  mostrarPropiedadesAlquiler(prop_alquiler.slice(0, 3));
}


function mostrarPropiedadesVenta(propiedades) {
  propiedadesVentaContainer.innerHTML = `<h2>Propiedades en venta</h2>
    <div class="row"></div>`;

  const row = document.querySelector('.row');

  for (let articulo of propiedades) {
    row.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${directoryPath}/assets/img/${articulo.src}" class="card-img-top" alt="${articulo.nombre}" />
                <div class="card-body">
                    <h5 class="card-title">${articulo.nombre}</h5>
                    <p class="card-text">${articulo.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${articulo.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${articulo.habitaciones} Habitaciones</p>
                    <p><i class="fas fa-dollar-sign"></i> ${articulo.costo}</p>
                    ${articulo.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
                    ${articulo.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'}
                </div>
            </div>
        </div>`;
  }

  if (!pathname.includes('propiedades_venta.html')) {
    propiedadesVentaContainer.innerHTML += `
    <div class="btn-container">
       <a href="./propiedades_venta.html" class="btn btn-dark btn-custom">Ver todas las propiedades en venta</a>
    </div>`;
  }
}


function mostrarPropiedadesAlquiler(propiedades) {
  propiedadesAlquilerContainer.innerHTML = `
    <div class="row"></div>`;

  const row = document.querySelector('#propiedades_alquiler .row');

  row.insertAdjacentHTML('beforebegin', `<h2>Propiedades en alquiler</h2>`);

  for (let articulo of propiedades) {
    row.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${directoryPath}/assets/img/${articulo.src}" class="card-img-top" alt="${articulo.nombre}" />
                <div class="card-body">
                    <h5 class="card-title">${articulo.nombre}</h5>
                    <p class="card-text">${articulo.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${articulo.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${articulo.habitaciones} Habitaciones</p>
                    <p><i class="fas fa-dollar-sign"></i> ${articulo.costo}</p>
                    ${articulo.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
                    ${articulo.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'}
                </div>
            </div>
        </div>`;
  }

  if (!pathname.includes('propiedades_alquiler.html')) {
    propiedadesAlquilerContainer.innerHTML += `
    <div class="btn-container">
    <a href="./propiedades_alquiler.html" class="btn btn-dark btn-custom">Ver todas las propiedades en alquiler</a>
    </div>`;
  }
}

