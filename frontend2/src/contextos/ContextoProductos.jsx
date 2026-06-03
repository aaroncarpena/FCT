import React, { createContext, useEffect, useMemo, useState } from "react";

const contextoProductos = createContext();

const productosIniciales = [
  {
    id: 1,
    nombre: "Guía de alimentación saludable",
    imagen:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Una guía práctica para ordenar tus comidas, comprar mejor y construir hábitos sostenibles sin complicarte.",
    detalle:
      "Incluye pautas de organización semanal, listas de compra, ejemplos de platos equilibrados y consejos para adaptar el plan a tus horarios.",
    precio: 19.99,
    etiqueta: "PDF descargable",
  },
  {
    id: 2,
    nombre: "Pack de recetas saludables",
    imagen:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Recetas sencillas para desayunos, comidas y cenas con ingredientes fáciles de encontrar.",
    detalle:
      "El pack viene organizado por tiempo de preparación e incluye alternativas vegetarianas, batch cooking y pequeños trucos de conservación.",
    precio: 24.99,
    etiqueta: "35 recetas",
  },
  {
    id: 3,
    nombre: "Plan de menú semanal",
    imagen:
      "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Un menú de siete días pensado para ahorrar tiempo y comer variado durante la semana.",
    detalle:
      "Encontrarás desayuno, comida, cena y snacks para cada día, junto con una lista de la compra agrupada por secciones.",
    precio: 14.99,
    etiqueta: "7 dias",
  },
  {
    id: 4,
    nombre: "Recetario de desayunos nutritivos",
    imagen:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Ideas rápidas para empezar el día con energía y evitar desayunos improvisados.",
    detalle:
      "Incluye tostadas completas, bowls, opciones dulces, opciones saladas y preparaciones que puedes dejar listas la noche anterior.",
    precio: 12.99,
    etiqueta: "20 ideas",
  },
  {
    id: 5,
    nombre: "Guía de snacks saludables",
    imagen:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Alternativas para media mañana y merienda que sacian sin depender de ultraprocesados.",
    detalle:
      "Agrupa snacks por objetivo: más proteína, más fibra, dulce saludable, salado rápido y opciones para llevar fuera de casa.",
    precio: 9.99,
    etiqueta: "Ideas rapidas",
  },
  {
    id: 6,
    nombre: "Plan depurativo de 7 días",
    imagen:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Una propuesta ligera y equilibrada para volver a la rutina después de días desordenados.",
    detalle:
      "No es un plan restrictivo: combina platos frescos, cenas ligeras, hidratación y recetas fáciles para recuperar estructura.",
    precio: 22.99,
    etiqueta: "Rutina guiada",
  },
  {
    id: 7,
    nombre: "Recetario vegano completo",
    imagen:
      "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Platos vegetales completos con foco en proteína, sabor y variedad.",
    detalle:
      "Incluye legumbres, cereales, tofu, tempeh, salsas base y combinaciones para que los menús no se vuelvan repetitivos.",
    precio: 17.99,
    etiqueta: "100% vegetal",
  },
  {
    id: 8,
    nombre: "Guía de alimentación deportiva",
    imagen:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Recomendaciones para organizar comidas alrededor del entrenamiento y mejorar recuperación.",
    detalle:
      "Incluye ejemplos de pre-entreno, post-entreno, hidratación, proteína diaria y menús según intensidad de actividad.",
    precio: 21.99,
    etiqueta: "Rendimiento",
  },
  {
    id: 9,
    nombre: "Plan de alimentación antiinflamatoria",
    imagen:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Una selección de platos ricos en verduras, grasas saludables, legumbres y especias.",
    detalle:
      "El plan prioriza alimentos frescos, preparaciones sencillas y combinaciones suaves para crear una rutina mas estable.",
    precio: 18.99,
    etiqueta: "Bienestar",
  },
  {
    id: 10,
    nombre: "Recetario de postres saludables",
    imagen:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Postres caseros con menos azúcar y porciones pensadas para disfrutar sin perder equilibrio.",
    detalle:
      "Encontrarás mousses, bizcochos, frutas preparadas, yogures completos y opciones para preparar en menos de 20 minutos.",
    precio: 11.99,
    etiqueta: "Dulce equilibrado",
  },
];

const obtenerCarritoInicial = () => {
  try {
    const carritoGuardado = localStorage.getItem("carritoTienda");
    const carritoParseado = carritoGuardado ? JSON.parse(carritoGuardado) : [];
    return Array.isArray(carritoParseado) ? carritoParseado : [];
  } catch {
    return [];
  }
};

const normalizarCantidad = (cantidad) => {
  const cantidadNumerica = Number(cantidad);
  return Number.isFinite(cantidadNumerica) && cantidadNumerica > 0
    ? Math.floor(cantidadNumerica)
    : 1;
};

const ContextoProductos = ({ children }) => {
  const [carrito, setCarrito] = useState(obtenerCarritoInicial);

  useEffect(() => {
    localStorage.setItem("carritoTienda", JSON.stringify(carrito));
  }, [carrito]);

  const anadirAlCarrito = (producto, cantidad = 1) => {
    const cantidadSegura = normalizarCantidad(cantidad);

    setCarrito((carritoActual) => {
      const productoEnCarrito = carritoActual.find((item) => item.id === producto.id);

      if (productoEnCarrito) {
        return carritoActual.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidadSegura }
            : item,
        );
      }

      return [...carritoActual, { ...producto, cantidad: cantidadSegura }];
    });
  };

  const actualizarCantidad = (id, cantidad) => {
    const cantidadSegura = normalizarCantidad(cantidad);

    setCarrito((carritoActual) =>
      carritoActual.map((item) =>
        item.id === id ? { ...item, cantidad: cantidadSegura } : item,
      ),
    );
  };

  const quitarProducto = (id) => {
    setCarrito((carritoActual) => carritoActual.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const totalCarrito = useMemo(
    () => carrito.reduce((total, item) => total + item.precio * item.cantidad, 0),
    [carrito],
  );

  const totalUnidades = useMemo(
    () => carrito.reduce((total, item) => total + item.cantidad, 0),
    [carrito],
  );

  const datosAExportar = {
    productos: productosIniciales,
    carrito,
    anadirAlCarrito,
    actualizarCantidad,
    quitarProducto,
    vaciarCarrito,
    totalCarrito,
    totalUnidades,
  };

  return (
    <contextoProductos.Provider value={datosAExportar}>
      {children}
    </contextoProductos.Provider>
  );
};

export default ContextoProductos;
export { contextoProductos };
