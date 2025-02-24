import { ProductType } from "../types/ProductType"

type ProductProp5 = {
    product: ProductType
}
export default function Product({ product } : ProductProp5){
 return (
   <div className="flex flex-col shadow-lg h-96 bg-slate-900 p-5">
    <div className="relative max-h-72 flex-1 text-gray-300">IMG</div>
    <div className="flex justify-between font-bold my-3 p-5 text-gray-300 ">{product.title}</div>
    <div className="text-gray-300 p-3">R$ 00,00</div>
    <button className="rounded-md  bg-teal-700 text-white px-3.5 py-2.5 text-sm text-center">Adicionar ao carrinho</button>
     
   </div>
 )
    
 
}