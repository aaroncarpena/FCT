import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProductos from "../../../../hooks/useProductos";
import "./Tienda.css";

const formatearPrecio = (precio) =>
  precio.toLocaleString("es-ES", { style: "currency", currency: "EUR" });

const normalizarCantidad = (valor) => {
  const cantidadNumerica = Number(valor);
  return Number.isFinite(cantidadNumerica) && cantidadNumerica > 0
    ? Math.floor(cantidadNumerica)
    : 1;
};

const Producto = () => {
  const { id } = useParams();
  const { productos, anadirAlCarrito, carrito, totalCarrito } = useProductos();
  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState("");

  const producto = useMemo(
    () => productos.find((item) => item.id === Number(id)),
    [id, productos],
  );

  if (!producto) {
    return (
      <section className="producto-detalle producto-no-encontrado">
        <h1>Producto no encontrado</h1>
        <Link className="tienda-producto-btn" to="/tienda">
          Volver a la tienda
        </Link>
      </section>
    );
  }

  const anadirProducto = () => {
    anadirAlCarrito(producto, cantidad);
    setMensaje(`${cantidad} producto(s) añadido(s) al carrito.`);
  };

  return (
    <section className="producto-detalle">
      <Link className="producto-volver" to="/tienda">
        Volver a la tienda
      </Link>
      <div className="producto-detalle-grid">
        <img src={producto.imagen} alt={producto.nombre} />
        <div className="producto-detalle-info">
          <span className="tienda-producto-etiqueta">{producto.etiqueta}</span>
          <h1>{producto.nombre}</h1>
          <p>{producto.descripcion}</p>
          <p>{producto.detalle}</p>
          <strong>{formatearPrecio(producto.precio)}</strong>

          <div className="producto-cantidad">
            <button onClick={() => setCantidad((valor) => Math.max(1, valor - 1))}>
              -
            </button>
            <input
              type="number"
              min="1"
              value={cantidad}
              onChange={(evento) => setCantidad(normalizarCantidad(evento.target.value))}
              aria-label="Cantidad"
            />
            <button onClick={() => setCantidad((valor) => valor + 1)}>+</button>
          </div>

          <button
            className="tienda-producto-btn tienda-producto-btn-compra"
            onClick={anadirProducto}
          >
            Añadir al carrito
          </button>
          {mensaje && <p className="producto-mensaje">{mensaje}</p>}
        </div>
      </div>

      <aside className="producto-resumen">
        <h2>Resumen del carrito</h2>
        <span>{carrito.length} productos distintos</span>
        <strong>{formatearPrecio(totalCarrito)}</strong>
        <Link className="tienda-producto-btn" to="/tienda">
          Ir al pago
        </Link>
      </aside>
    </section>
  );
};

export default Producto;
