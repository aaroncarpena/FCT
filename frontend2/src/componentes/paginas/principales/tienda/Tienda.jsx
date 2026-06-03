import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Paginator } from "primereact/paginator";
import useProductos from "../../../../hooks/useProductos";
import "./Tienda.css";

const PRODUCTOS_POR_PAGINA = 4;

const formularioInicial = {
  nombre: "",
  email: "",
  metodo: "Pago simulado",
};

const formatearPrecio = (precio) =>
  precio.toLocaleString("es-ES", { style: "currency", currency: "EUR" });

const Tienda = () => {
  const {
    productos,
    carrito,
    anadirAlCarrito,
    actualizarCantidad,
    quitarProducto,
    vaciarCarrito,
    totalCarrito,
    totalUnidades,
  } = useProductos();
  const [first, setFirst] = useState(0);
  const [productoPreview, setProductoPreview] = useState(null);
  const [formularioPago, setFormularioPago] = useState(formularioInicial);
  const [pedido, setPedido] = useState(null);

  const productosVisibles = productos.slice(first, first + PRODUCTOS_POR_PAGINA);

  const cambiarFormulario = (evento) => {
    const { name, value } = evento.target;
    setFormularioPago((formularioActual) => ({
      ...formularioActual,
      [name]: value,
    }));
  };

  const finalizarPedido = (evento) => {
    evento.preventDefault();

    if (carrito.length === 0) {
      return;
    }

    setPedido({
      numero: `FCT-${Date.now().toString().slice(-6)}`,
      nombre: formularioPago.nombre,
      total: totalCarrito,
    });
    setFormularioPago(formularioInicial);
    vaciarCarrito();
  };

  return (
    <>
      <section className="tienda-hero">
        <h1>Tienda</h1>
        <p className="tienda-intro">
          Recursos digitales para ayudarte a mejorar tu alimentación desde casa.
        </p>
      </section>

      <div className="tienda-layout">
        <section className="tienda-catalogo" aria-label="Catalogo de productos">
          <div className="tienda-contenedor">
            {productosVisibles.map((producto) => (
              <article key={producto.id} className="tienda-producto">
                <img src={producto.imagen} alt={producto.nombre} />
                <div className="tienda-producto-info">
                  <span className="tienda-producto-etiqueta">{producto.etiqueta}</span>
                  <h3>{producto.nombre}</h3>
                  <p>{producto.descripcion}</p>
                  <span className="tienda-producto-precio">
                    {formatearPrecio(producto.precio)}
                  </span>
                  <div className="tienda-producto-acciones">
                    <Link className="tienda-producto-btn" to={`/tienda/${producto.id}`}>
                      Ver producto
                    </Link>
                    <button
                      className="tienda-producto-btn tienda-producto-btn-secundario"
                      onClick={() => setProductoPreview(producto)}
                    >
                      Previsualizar
                    </button>
                    <button
                      className="tienda-producto-btn tienda-producto-btn-compra"
                      onClick={() => anadirAlCarrito(producto)}
                    >
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <Paginator
            first={first}
            rows={PRODUCTOS_POR_PAGINA}
            totalRecords={productos.length}
            onPageChange={(e) => setFirst(e.first)}
          />
        </section>

        <aside className="tienda-carrito" aria-label="Carrito y pago">
          <div className="tienda-carrito-cabecera">
            <h2>Carrito</h2>
            <span>{totalUnidades} productos</span>
          </div>

          {carrito.length === 0 ? (
            <p className="tienda-carrito-vacio">
              Todavía no has añadido productos al carrito.
            </p>
          ) : (
            <div className="tienda-carrito-lista">
              {carrito.map((item) => (
                <div key={item.id} className="tienda-carrito-item">
                  <img src={item.imagen} alt={item.nombre} />
                  <div>
                    <h3>{item.nombre}</h3>
                    <span>{formatearPrecio(item.precio)}</span>
                    <div className="tienda-carrito-controles">
                      <button onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}>
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.cantidad}
                        onChange={(evento) =>
                          actualizarCantidad(item.id, evento.target.value)
                        }
                        aria-label={`Cantidad de ${item.nombre}`}
                      />
                      <button onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}>
                        +
                      </button>
                    </div>
                    <button
                      className="tienda-carrito-quitar"
                      onClick={() => quitarProducto(item.id)}
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="tienda-carrito-total">
            <span>Total</span>
            <strong>{formatearPrecio(totalCarrito)}</strong>
          </div>

          <form className="tienda-pago" onSubmit={finalizarPedido}>
            <h2>Pago</h2>
            <label>
              Nombre
              <input
                type="text"
                name="nombre"
                value={formularioPago.nombre}
                onChange={cambiarFormulario}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formularioPago.email}
                onChange={cambiarFormulario}
                required
              />
            </label>
            <label>
              Método
              <select
                name="metodo"
                value={formularioPago.metodo}
                onChange={cambiarFormulario}
              >
                <option>Pago simulado</option>
                <option>Bizum simulado</option>
                <option>Transferencia de prueba</option>
              </select>
            </label>
            <p>
              Esta pasarela es de prueba y no solicita datos de tarjeta. Al confirmar
              se genera un pedido simulado.
            </p>
            <button className="tienda-pago-btn" type="submit" disabled={carrito.length === 0}>
              Confirmar pedido
            </button>
          </form>

          {pedido && (
            <div className="tienda-pedido-ok" role="status">
              Pedido {pedido.numero} confirmado para {pedido.nombre}. Total{" "}
              {formatearPrecio(pedido.total)}.
            </div>
          )}
        </aside>
      </div>

      {productoPreview && (
        <div className="tienda-preview-fondo" role="dialog" aria-modal="true">
          <div className="tienda-preview">
            <button
              className="tienda-preview-cerrar"
              onClick={() => setProductoPreview(null)}
              aria-label="Cerrar previsualización"
            >
              x
            </button>
            <img src={productoPreview.imagen} alt={productoPreview.nombre} />
            <div>
              <span className="tienda-producto-etiqueta">{productoPreview.etiqueta}</span>
              <h2>{productoPreview.nombre}</h2>
              <p>{productoPreview.detalle}</p>
              <strong>{formatearPrecio(productoPreview.precio)}</strong>
              <button
                className="tienda-producto-btn tienda-producto-btn-compra"
                onClick={() => {
                  anadirAlCarrito(productoPreview);
                  setProductoPreview(null);
                }}
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tienda;
