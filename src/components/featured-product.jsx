import { useEffect } from "react";
import React, { useState } from "react";
import productData from "./products-data";

function FeaturedProducts() {

  const [currentPage, setCurrentPage] = useState(0); // Estado de página actual
  const [itemsPerPage, setItemsPerPage] = useState(3); // Por defecto, 3 productos por página

  useEffect(() => {
      const updateItemsPerPage = () => {
          if (window.innerWidth < 1024) {
              setItemsPerPage(1); // Para pantallas pequeñas (menos de 768px), mostramos 1 producto
          } else {
              setItemsPerPage(3); // Para pantallas más grandes, mostramos 3 productos
          }
      };

      updateItemsPerPage(); // Llamar al inicio para detectar el tamaño de la pantalla
      window.addEventListener("resize", updateItemsPerPage); // Escuchar cambios en el tamaño de la pantalla

      return () => window.removeEventListener("resize", updateItemsPerPage); // Limpiar evento
  }, []);


  const totalPages = Math.ceil(productData.length / itemsPerPage); // Las páginas totales van a ser igual al redondeo del largo de los productos sobre 3

  const startIndex = currentPage * itemsPerPage; // start index es igual a la página actual por 3
  const displayedProducts = productData.slice(startIndex, startIndex + itemsPerPage); 
  // Los productos mostrados van desde startIndex hasta startIndex + 3
  // Por ejemplo, la página 1 (dos) 
  // startIndex = 1 * 3 = 3
  // (3, 3 + 3) = (3, 6)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages); 
    // prev se refiere al estado anterior, la última página
    // % totalPages se asegura de volver a 0
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  
    return (
        <div className="products__container">
            
            <p className="text-center text-3xl">Featured products</p>

            <div className="products__items__container flex flex-wrap justify-center gap-8 pt-10">
        {displayedProducts.map((product) => (
          <div key={product.id} className="product__item flex flex-col items-center p-4  border-2 border-gray-300 rounded-lg">
            <p className="text-lg font-semibold">{product.name}</p>
            <img className="w-[200px] h-[200px] object-cover" src={product.picture} alt={product.name} />
            <p className="text-gray-500">{product.category}</p>
            <p className="text-green-600 font-bold">{product.price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6 mb-11">
        <button onClick={prevPage} className="cursor-pointer px-4 py-2 bg-gray-300 rounded-[8px] hover:bg-gray-400">Previous</button>
        <button onClick={nextPage} className="cursor-pointer px-4 py-2  bg-green-500 text-white rounded-[8px] hover:bg-green-600">Next</button>
      </div>



        </div>
    )
}

export default FeaturedProducts