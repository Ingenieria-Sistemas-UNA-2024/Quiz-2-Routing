// Home.tsx
import React from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import Form from "../components/Form";
import TableUser from "../components/TableUser";
import ProfileCard from "../components/ProfileCard";
import ProfileDetails from "../components/ProfileDetails";
import ChangePassword from "../components/ConfigProfile";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-4">¡Bienvenido a nuestra página web!</h1>
      <div className="text-center">
        <h2 className="text-xl mb-2">
          Para moverte por nuestra página puedes usar las siguientes rutas:
        </h2>
        <h3>
          Perfil de usuario /users/profile/id por ejemplo:
        </h3>
          <a href="/users/profile/1" className="text-blue-500 mb-2">/users/profile/1</a>
        <h3>
          Configuracion de usuario /users/config/id por ejemplo:
        </h3>
          <a href="/users/config/1" className="text-blue-500 mb-2">/users/config/1</a>
        <h3>
          Detalles de usuario /users/details/id por ejemplo:
        </h3>
          <a href="/users/details/1" className="text-blue-500 mb-4">/users/details/1</a>
      </div>
      <div className="text-center">
        <h2 className="text-xl mb-2">
          Como administrador puedes usar las siguientes rutas:
        </h2>
        <h3>
          Consultar usuarios:
        </h3>
          <a href="/admin" className="text-blue-500 mb-2">/admin</a>
        <h3>
          Editar usuario /admin/config/id ejemplo:
        </h3>
          <a href="/admin/config/1" className="text-blue-500 mb-4">/admin/config/1</a>
      </div>
    </div>
  );
}
