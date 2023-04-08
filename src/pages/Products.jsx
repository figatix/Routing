import { ProductList } from "../components/ProductList";
import { getProducts } from '../fakeApi';
import { useSearchParams } from "react-router-dom";

import { SearchBox } from "../components/SearchBox";


export const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(productName.toLowerCase()))

  const updateQueryString = (name) => {
    const nextParams = name === '' ? {} : { name: name };
    setSearchParams(nextParams)
  }

  return (
    <main>
      <SearchBox onChange={updateQueryString} value={productName} />
      <ProductList products={filteredProducts} />
    </main>
  )


  // const products = getProducts();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const productName = searchParams.get("name") ?? "";

  // const visibleProducts = products.filter((product) =>
  //   product.name.toLowerCase().includes(productName.toLowerCase())
  // );

  // const updateQueryString = (name) => {
  //   const nextParams = name !== "" ? { name } : {};
  //   setSearchParams(nextParams);
  // };

  // return (
  //   <main>
  //     <SearchBox value={productName} onChange={updateQueryString} />
  //     <ProductList products={visibleProducts} />
  //   </main>
  // );
};

/*
  !!!
  ???
  * * * * * * * * * * * * * * * * * *
*/

// export const Products = () => {
//   const products = getProducts();
//   return (
//     <main>
//       <ProductList products={products} />
//     </main>
//   );
// };




// ? ?name=hoodie&maxPrice=500&inStock=true

// const Products = () => {
//   const [searchParams] = useSearchParams();
//   const name = searchParams.get("name"); // "hoodie"
//   const color = Number(searchParams.get("color")); // 500
//   const maxPrice = Boolean(searchParams.get("maxPrice")); // true

//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Color: {color}</p>
//       <p>Maximum price: {maxPrice}</p>
//     </div>
//   )

// }

/*
? Параметри як об'єкт/ Якщо рядок запиту містить кілька параметрів, постійно використовувати метод get() може бути незручно.Ось простий спосіб перетворити екземпляр класу URLSearchParams у звичайний об'єкт із властивостями.
*/
// const FakeFunc = () => {

//   const [searchParams] = useSearchParams();
//   const params = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);

//   const { name, maxPrice, inStock } = params;
// }


/*
  ? Для зміни параметрів використовуємо функцію, яку useSearchParams повертає другим елементом масиву. Їй необхідно передати об'єкт нових параметрів, який повністю замінить поточний рядок запиту.
*/

// export const Products = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const name = searchParams.get('name');

//   return (
//     <div>
//       <h1>Products</h1>
//       <input
//         type="text"
//         value={name}
//         onChange={e => setSearchParams({ name: e.target.value })}
//       />
//     </div>
//   )
// }


