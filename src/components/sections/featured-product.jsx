import { useEffect } from "react";
import { useState } from "react";
import productData from "../data/products-data";

function FeaturedProducts() {

  const [currentPage, setCurrentPage] = useState(0); // Estado de página actual
  const [itemsPerPage, setItemsPerPage] = useState(4); // Por defecto, 3 productos por página

  useEffect(() => {
      const updateItemsPerPage = () => {
          if (window.innerWidth < 768) {
              setItemsPerPage(1); // Para pantallas pequeñas (menos de 768px), mostramos 1 producto
          }

          else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
            setItemsPerPage(2)
          }

          else if (window.innerWidth >= 1024 && window.innerWidth <= 1196) {
          setItemsPerPage(3);
          }

          
          else {
              setItemsPerPage(4); // Para pantallas más grandes, mostramos 4 productos
          }
      };

      updateItemsPerPage(); // Llamar al inicio para detectar el tamaño de la pantalla
      window.addEventListener("resize", updateItemsPerPage); // Escuchar cambios en el tamaño de la pantalla

      return () => window.removeEventListener("resize", updateItemsPerPage); // Limpiar evento
  }, []);


  const totalPages = Math.ceil(productData.length / itemsPerPage); // Las páginas totales van a ser igual al redondeo del largo de los productos sobre 3

  const startIndex = currentPage * itemsPerPage; // start index es igual a la página actual por 4
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
        <div id="featured" className="products__container pt-5 md:mt-20 p-6 scroll-mt-25 md:scroll-mt-50 lg:md:scroll-mt-45  mx-auto">
            
            <p className="text-3xl border-b-3 p-4 w-max mx-auto md:max-w-[1470px]">Featured products</p>

            <div className="products__items__container flex flex-wrap justify-center gap-8  pt-10">
        {displayedProducts.map((product) => (
          <div key={product.id} className="product__item flex flex-col items-center p-4 w-[280px] lg:w-[300px] border-2 bg-white border-emerald-600 rounded-lg">
            <img className="w-[150px] h-[150px]  md:w-[200px] md:h-[200px] p-2 " src={`./${product.picture}`} alt={product.name} />

            <p className="text-md  lg:text-lg font-semibold">{product.name}</p>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-green-600 font-bold">{product.price}</p>

          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6 mb-11">
        <button onClick={prevPage} className="cursor-pointer px-4 py-2 bg-gray-300 rounded-[8px] hover:bg-gray-400">Previous</button>
        <button onClick={nextPage} className="cursor-pointer px-4 py-2  bg-emerald-500 text-white rounded-[8px] hover:bg-emerald-600">Next</button>
      </div>


      <div className="fullcatalog bg-emerald-600 lg:mt-20 flex justify-between items-center p-5 space-y-4 flex-col rounded-lg lg:flex-row text-white max-w-[1470px] mx-auto">

        <div className="fullcatalog__text p-4 space-y-3">
          <p className="text-xl md:text-2xl">We have more products in our catalog</p>
          <p className="text-md md:text-lg">Didn't find what you were looking for? Explore our <a href="" className="underline font-semibold hover:text-emerald-300">full catalog</a> for more options!</p> 
        </div>

        <div className="fullcatalog__img lg:mr-30">
            <img src="./catalog.png" className="w-20 lg:w-30"/>
        </div>

      </div>


        </div>
    )
}

export default FeaturedProducts