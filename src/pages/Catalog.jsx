import productData from '../components/data/full-catalog'
import { useState } from "react";


function Catalog()  {
    return (
        // Buscador
        //Filtros
        <div className="catalog-container h-full px-2 pt-10 lg:pt-20 ">

          <div className="products__items__container flex flex-wrap justify-center gap-8  pt-10">

            {productData.map((product) => (
              <div key={product.id} className="product__item flex flex-col items-center p-4 w-[120px] h-[200px] md:w-[160px] md:h-[240px] lg:h-[300px] border-2 bg-white border-emerald-600 rounded-lg">

                <img className="w-[120px] h-[120px] object-contain  md:w-[200px] md:h-[200px] p-2 " src={`./${product.picture}`} alt={product.name} />

                <p className="text-sm text-center  lg:text-lg font-semibold">{product.name}</p>
                <p className="text-gray-500 text-sm hidden lg:block">{product.category}</p>
                <p className="text-green-600 font-bold text-sm">{product.price}</p>

              </div>
          ))}
          </div>

        </div>
    )
}

export default Catalog;