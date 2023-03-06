import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Products } from '../pages/Products';
import { ProductDetails } from '../pages/ProductDetails';
import { Container, Header, Logo, StyledNavLink } from './App.styled';
import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';
import { SharedLayout } from './SharedLayout';
// import { NotFound } from '../pages/NotFound';



export const App = () => {
  return (

    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>


        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetails />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>

  );
};



/*
! Відстеження змін

?Якщо змінюється рядок запиту, хук useSearchParams повертає нове значення параметрів і компонентів оновлюється, тому можна зреагувати на це і запустити ефект.
*/

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const username = searchParams.get("username");

//   useEffect(() => {
//     // Тут виконуємо асинхронну операцію,
//     // наприклад HTTP-запит за інформацією про користувача
//     if (username === "") return;

//     async function fetchUser() {
//       const user = await FakeAPI.getUser(username);
//       setUser(user);
//     }

//     fetchUser();
//   }, [username]);

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     setSearchParams({ username: form.elements.username.value });
//     form.reset();
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="username" />
//         <button type="submit">Search</button>
//       </form>
//       {user && <UserInfo user={user} />}
//     </>
//   );
// };