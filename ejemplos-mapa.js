// ===== EJEMPLOS DE USO DEL MAPA INTERACTIVO DE MÉXICO =====

// Este archivo contiene ejemplos de cómo usar las funciones JavaScript
// para modificar dinámicamente el mapa interactivo de México.

// ===== EJEMPLO 1: AGREGAR UN NUEVO ESTADO =====
// Descomenta y ejecuta en la consola del navegador:

/*
const jaliscoData = {
    name: "Jalisco",
    motto: "Jalisco es México",
    capital: "Guadalajara",
    population: "8.3M",
    area: "78,599",
    growth: "1.8%",
    flag: "images/states/jalisco-flag.png",
    highlights: [
        {
            icon: "fas fa-music",
            title: "Música Mexicana",
            description: "Cuna del mariachi y la música ranchera tradicional."
        },
        {
            icon: "fas fa-glass-martini",
            title: "Tequila",
            description: "Región productora del tequila, bebida emblemática de México."
        },
        {
            icon: "fas fa-building",
            title: "Desarrollo Tecnológico",
            description: "Hub tecnológico importante con empresas de software y servicios."
        }
    ],
    presence: [
        {
            icon: "fas fa-building",
            title: "Oficina Regional",
            description: "Centro de Guadalajara"
        },
        {
            icon: "fas fa-users",
            title: "Equipo Local",
            description: "45+ profesionales especializados"
        },
        {
            icon: "fas fa-handshake",
            title: "Proyectos Completados",
            description: "300+ proyectos exitosos"
        }
    ]
};

const jaliscoPosition = {
    top: "45%",
    left: "20%",
    width: "10%",
    height: "8%"
};

addInteractiveState("jalisco", jaliscoData, jaliscoPosition);
*/

// ===== EJEMPLO 2: AGREGAR MÚLTIPLES ESTADOS =====
// Descomenta y ejecuta en la consola del navegador:

/*
const estadosParaAgregar = [
    {
        name: "Nuevo León",
        data: {
            name: "Nuevo León",
            motto: "Semper Ascendens",
            capital: "Monterrey",
            population: "5.8M",
            area: "64,156",
            growth: "2.3%",
            flag: "images/states/nuevo-leon-flag.png",
            highlights: [
                {
                    icon: "fas fa-industry",
                    title: "Centro Industrial",
                    description: "Principal centro industrial y manufacturero del norte de México."
                },
                {
                    icon: "fas fa-graduation-cap",
                    title: "Educación Superior",
                    description: "Excelentes universidades como el ITESM y la UANL."
                },
                {
                    icon: "fas fa-mountain",
                    title: "Naturaleza",
                    description: "Hermosas montañas y parques naturales como Chipinque."
                }
            ],
            presence: [
                {
                    icon: "fas fa-building",
                    title: "Oficina Norte",
                    description: "Centro de Monterrey"
                },
                {
                    icon: "fas fa-users",
                    title: "Equipo Local",
                    description: "35+ profesionales especializados"
                },
                {
                    icon: "fas fa-handshake",
                    title: "Proyectos Completados",
                    description: "200+ proyectos exitosos"
                }
            ]
        },
        position: {
            top: "25%",
            left: "35%",
            width: "8%",
            height: "6%"
        }
    },
    {
        name: "Veracruz",
        data: {
            name: "Veracruz",
            motto: "Plus Ultra",
            capital: "Xalapa",
            population: "8.1M",
            area: "71,820",
            growth: "1.5%",
            flag: "images/states/veracruz-flag.png",
            highlights: [
                {
                    icon: "fas fa-ship",
                    title: "Puerto Principal",
                    description: "Puerto de Veracruz, uno de los más importantes del país."
                },
                {
                    icon: "fas fa-coffee",
                    title: "Café y Agricultura",
                    description: "Principal productor de café y productos agrícolas."
                },
                {
                    icon: "fas fa-music",
                    title: "Cultura",
                    description: "Rica tradición musical con el son jarocho."
                }
            ],
            presence: [
                {
                    icon: "fas fa-building",
                    title: "Oficina Costera",
                    description: "Puerto de Veracruz"
                },
                {
                    icon: "fas fa-users",
                    title: "Equipo Local",
                    description: "20+ profesionales especializados"
                },
                {
                    icon: "fas fa-handshake",
                    title: "Proyectos Completados",
                    description: "120+ proyectos exitosos"
                }
            ]
        },
        position: {
            top: "60%",
            left: "40%",
            width: "12%",
            height: "10%"
        }
    }
];

estadosParaAgregar.forEach(estado => {
    addInteractiveState(estado.name, estado.data, estado.position);
});
*/

// ===== EJEMPLO 3: REMOVER UN ESTADO =====
// Descomenta y ejecuta en la consola del navegador:

/*
// Remover Jalisco (si existe)
removeInteractiveState("jalisco");
*/

// ===== EJEMPLO 4: ACTUALIZAR DATOS DE UN ESTADO =====
// Descomenta y ejecuta en la consola del navegador:

/*
// Actualizar población de Aguascalientes
updateStateData("aguascalientes", {
    population: "1.5M",
    area: "5,600"
});

// Actualizar población de CDMX
updateStateData("cdmx", {
    population: "9.5M",
    growth: "2.3%"
});
*/

// ===== EJEMPLO 5: FUNCIÓN PARA AGREGAR ESTADO DESDE OBJETO =====
// Copia y pega esta función en la consola del navegador:

/*
function agregarEstadoCompleto(estadoConfig) {
    const { name, data, position } = estadoConfig;
    
    // Validar datos requeridos
    if (!name || !data || !position) {
        console.error('Faltan datos requeridos para agregar el estado');
        return;
    }
    
    // Validar que la bandera existe
    const img = new Image();
    img.onload = function() {
        addInteractiveState(name, data, position);
        console.log(`✅ Estado ${data.name} agregado exitosamente`);
    };
    img.onerror = function() {
        console.error(`❌ No se pudo cargar la bandera: ${data.flag}`);
    };
    img.src = data.flag;
}

// Uso:
const yucatanConfig = {
    name: "yucatan",
    data: {
        name: "Yucatán",
        motto: "Patria es Humanidad",
        capital: "Mérida",
        population: "2.3M",
        area: "39,524",
        growth: "1.9%",
        flag: "images/states/yucatan-flag.png",
        highlights: [
            {
                icon: "fas fa-pyramid",
                title: "Zonas Arqueológicas",
                description: "Chichén Itzá, una de las 7 maravillas del mundo moderno."
            },
            {
                icon: "fas fa-utensils",
                title: "Gastronomía",
                description: "Cocina maya tradicional con platillos únicos."
            },
            {
                icon: "fas fa-sun",
                title: "Clima",
                description: "Clima cálido y hermosas playas en el Golfo de México."
            }
        ],
        presence: [
            {
                icon: "fas fa-building",
                title: "Oficina Peninsular",
                description: "Centro de Mérida"
            },
            {
                icon: "fas fa-users",
                title: "Equipo Local",
                description: "15+ profesionales especializados"
            },
            {
                icon: "fas fa-handshake",
                title: "Proyectos Completados",
                description: "80+ proyectos exitosos"
            }
        ]
    },
    position: {
        top: "70%",
        left: "60%",
        width: "8%",
        height: "6%"
    }
};

agregarEstadoCompleto(yucatanConfig);
*/

// ===== EJEMPLO 6: FUNCIÓN PARA OBTENER INFORMACIÓN DEL MAPA =====
// Copia y pega esta función en la consola del navegador:

/*
function obtenerInfoMapa() {
    const estados = document.querySelectorAll('.state-interactive');
    const panelAbierto = document.getElementById('stateInfoPanel').style.display !== 'none';
    const estadoActual = document.getElementById('stateTitle')?.textContent || 'Ninguno';
    
    const info = {
        totalEstados: estados.length,
        panelAbierto: panelAbierto,
        estadoSeleccionado: estadoActual,
        estados: []
    };
    
    estados.forEach((estado, index) => {
        const stateName = estado.getAttribute('data-state');
        const className = estado.className;
        const isVisible = estado.style.display !== 'none';
        
        info.estados.push({
            indice: index,
            nombre: stateName,
            clase: className,
            visible: isVisible,
            posicion: {
                top: estado.style.top,
                left: estado.style.left,
                width: estado.style.width,
                height: estado.style.height
            }
        });
    });
    
    console.log('=== INFORMACIÓN DEL MAPA INTERACTIVO ===');
    console.log(`Total de estados: ${info.totalEstados}`);
    console.log(`Panel abierto: ${info.panelAbierto}`);
    console.log(`Estado seleccionado: ${info.estadoSeleccionado}`);
    console.log('Estados:', info.estados);
    
    return info;
}

// Uso:
// obtenerInfoMapa();
*/

// ===== EJEMPLO 7: FUNCIÓN PARA LIMPIAR TODOS LOS ESTADOS =====
// Copia y pega esta función en la consola del navegador:

/*
function limpiarTodosEstados() {
    const estados = document.querySelectorAll('.state-interactive');
    const estadosAEliminar = [];
    
    estados.forEach(estado => {
        const stateName = estado.getAttribute('data-state');
        if (stateName !== 'aguascalientes' && stateName !== 'cdmx') {
            estadosAEliminar.push(stateName);
        }
    });
    
    estadosAEliminar.forEach(stateName => {
        removeInteractiveState(stateName);
        console.log(`🗑️ Estado ${stateName} eliminado`);
    });
    
    console.log(`✅ Se eliminaron ${estadosAEliminar.length} estados`);
}

// Uso:
// limpiarTodosEstados();
*/

// ===== EJEMPLO 8: FUNCIÓN PARA VALIDAR ESTADOS =====
// Copia y pega esta función en la consola del navegador:

/*
function validarEstados() {
    const estados = document.querySelectorAll('.state-interactive');
    const errores = [];
    const exitosos = [];
    
    estados.forEach(estado => {
        const stateName = estado.getAttribute('data-state');
        const details = document.getElementById(`${stateName}-details`);
        const flag = details?.querySelector('.state-flag img');
        
        if (!details) {
            errores.push({
                estado: stateName,
                error: 'No tiene contenido en el panel'
            });
        } else if (!flag) {
            errores.push({
                estado: stateName,
                error: 'No tiene bandera'
            });
        } else {
            // Verificar si la bandera carga correctamente
            const testImg = new Image();
            testImg.onload = function() {
                exitosos.push({
                    estado: stateName,
                    bandera: flag.src
                });
            };
            testImg.onerror = function() {
                errores.push({
                    estado: stateName,
                    error: 'Bandera no carga correctamente',
                    bandera: flag.src
                });
            };
            testImg.src = flag.src;
        }
    });
    
    setTimeout(() => {
        console.log('=== VALIDACIÓN DE ESTADOS ===');
        console.log(`✅ Estados exitosos: ${exitosos.length}`);
        console.log(`❌ Estados con errores: ${errores.length}`);
        
        if (errores.length > 0) {
            console.log('Errores encontrados:', errores);
        }
        
        if (exitosos.length > 0) {
            console.log('Estados exitosos:', exitosos);
        }
    }, 2000);
}

// Uso:
// validarEstados();
*/

// ===== CONFIGURACIONES PREDEFINIDAS =====

// Configuración para estados del norte
const configuracionNorte = {
    top: "15%",
    left: "30%",
    width: "8%",
    height: "6%"
};

// Configuración para estados del centro
const configuracionCentro = {
    top: "40%",
    left: "25%",
    width: "10%",
    height: "8%"
};

// Configuración para estados del sur
const configuracionSur = {
    top: "65%",
    left: "45%",
    width: "12%",
    height: "10%"
};

// Configuración para estados de la península
const configuracionPeninsular = {
    top: "70%",
    left: "60%",
    width: "8%",
    height: "6%"
};

/*
// Uso de configuraciones:
addInteractiveState("baja-california", bajaCaliforniaData, configuracionNorte);
addInteractiveState("queretaro", queretaroData, configuracionCentro);
addInteractiveState("oaxaca", oaxacaData, configuracionSur);
addInteractiveState("quintana-roo", quintanaRooData, configuracionPeninsular);
*/

// ===== NOTAS IMPORTANTES =====

/*
1. Todas las funciones están disponibles globalmente una vez que se carga la página
2. Las funciones se pueden ejecutar desde la consola del navegador (F12)
3. Asegúrate de que las rutas de las banderas sean correctas
4. Las banderas deben estar en la carpeta images/states/
5. Recomendado: usar banderas de 120x80 píxeles para mejor rendimiento
6. Las funciones mantienen la funcionalidad del mapa intacta
7. Los cambios son dinámicos y no requieren recargar la página
8. Siempre verifica que las imágenes existan antes de agregar estados
*/

// ===== DATOS DE EJEMPLO PARA ESTADOS POPULARES =====

const datosEstadosEjemplo = {
    "baja-california": {
        name: "Baja California",
        motto: "Trabajo y Justicia Social",
        capital: "Mexicali",
        population: "3.8M",
        area: "71,450",
        growth: "2.8%",
        flag: "images/states/baja-california-flag.png",
        highlights: [
            {
                icon: "fas fa-industry",
                title: "Industria Maquiladora",
                description: "Importante centro de manufactura y exportación."
            },
            {
                icon: "fas fa-wine-glass",
                title: "Vinos",
                description: "Valle de Guadalupe, principal región vinícola de México."
            },
            {
                icon: "fas fa-sun",
                title: "Turismo",
                description: "Hermosas playas y clima mediterráneo."
            }
        ],
        presence: [
            {
                icon: "fas fa-building",
                title: "Oficina Fronteriza",
                description: "Tijuana"
            },
            {
                icon: "fas fa-users",
                title: "Equipo Local",
                description: "30+ profesionales especializados"
            },
            {
                icon: "fas fa-handshake",
                title: "Proyectos Completados",
                description: "180+ proyectos exitosos"
            }
        ]
    },
    
    "queretaro": {
        name: "Querétaro",
        motto: "Trabajo y Libertad",
        capital: "Santiago de Querétaro",
        population: "2.4M",
        area: "11,699",
        growth: "3.1%",
        flag: "images/states/queretaro-flag.png",
        highlights: [
            {
                icon: "fas fa-car",
                title: "Industria Automotriz",
                description: "Centro importante de manufactura automotriz."
            },
            {
                icon: "fas fa-church",
                title: "Centro Histórico",
                description: "Patrimonio Cultural de la Humanidad por la UNESCO."
            },
            {
                icon: "fas fa-rocket",
                title: "Aeroespacial",
                description: "Industria aeroespacial en desarrollo."
            }
        ],
        presence: [
            {
                icon: "fas fa-building",
                title: "Oficina Central",
                description: "Centro de Querétaro"
            },
            {
                icon: "fas fa-users",
                title: "Equipo Local",
                description: "25+ profesionales especializados"
            },
            {
                icon: "fas fa-handshake",
                title: "Proyectos Completados",
                description: "140+ proyectos exitosos"
            }
        ]
    }
};

/*
// Uso de datos de ejemplo:
addInteractiveState("baja-california", datosEstadosEjemplo["baja-california"], {
    top: "10%",
    left: "15%",
    width: "15%",
    height: "12%"
});

addInteractiveState("queretaro", datosEstadosEjemplo["queretaro"], {
    top: "42%",
    left: "28%",
    width: "6%",
    height: "4%"
});
*/ 