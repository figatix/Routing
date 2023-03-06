/*
  ? Перший спосіб це хук useNavigate. Він надає нам функцію navigate якій під час виклику передаємо шлях, куди необхідно виконати навігацію. Цей спосіб імперативний, але більш гнучкий і вимагає менше коду.
*/


// import { useNavigate } from "react-router-dom";

// export const Login = () => {

//   const navigate = useNavigate();

//   const handleSubmit = async values => {
//     const response = await FakeApi.login(values);

//     if (response.success) {
//       navigate('/profile', { replace: true });
//     }
//   };

//   return (
//     <div>
//       <h1>Login page</h1>
//       <LoginForm onSubmit={handleSubmit} />
//     </div>
//   )
// }

/*
  ? Другий спосіб це компонент Navigate - обгортка над хуком useNavigate. Він виконує навігацію у момент рендеру. Шлях для навігації та необов'язкові параметри передаються окремими пропсами. Такий спосіб більш декларативний, але менш гнучкий і вимагає більше коду.
*/

// import { Navigate, useState } from "react-router-dom";

// export const Login = () => {
//   const [isLoginSuccess, setIsLoginSuccess] = useState(false);

//   const handleSubmit = async values => {
//     const response = await FakeApi.login(values);
//     setIsLoginSuccess(response.success);
//   };

//   if (isLoginSuccess) {
//     return <Navigate to="/profile" replace />
//   }

//   return (
//     <div>
//       <h1>Login page</h1>
//       <LoginForm onSubmit={handleSubmit} />
//     </div>
//   );
// };

