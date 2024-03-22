import React from "react";
import Button from './Button';
import Label from './Label';
import Input from './Input';
import Select from './Select';
import Checkbox from './Checkbox';

const FormAdmin = () => {
  return (
    <div className="flex items-center justify-center pt-4">
      <form className="w-full max-w-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Configuración de perfil
        </h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <Label htmlFor="lastName">Apellidos</Label>
            <Input id="lastName" type="text" />
          </div>
        </div>
        <div className="w-full md:w-full px-3">
          <Label htmlFor="residence">Lugar de residencia</Label>
          <Input id="residence" type="text" />
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Label htmlFor="gender">Género</Label>
            <Select id="gender" options={["Masculino", "Femenino"]} />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <Label htmlFor="privacy-settings">Configuración de privacidad</Label>
            <Select
              id="privacy-settings"
              options={["Pública", "Solo amigos", "Privado"]}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <Label htmlFor="birthdate">Fecha de nacimiento</Label>
            <Input id="birthdate" type="date" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password"  />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <Label htmlFor="isAdmin">Administrador</Label>
            <Checkbox id="isAdmin" label="Es administrador" />
          </div>
        </div>
        <div className="my-6 w-full text-gray-600">
          <Button color="blue">Guardar cambios</Button>
        </div>
        <div className="w-full px-3">
          <Label htmlFor="account-deletion">Eliminar cuenta</Label>
          <div className="my-6 w-full text-gray-600">
            <Button id="account-deletion" color="red">
              Eliminar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormAdmin;