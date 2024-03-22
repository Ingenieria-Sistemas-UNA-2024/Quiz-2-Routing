import React from "react";
import Label from './Label';
import Input from './Input';
import Button from './Button';

const ChangePassword = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Cambio de contraseña</h1>
      <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
        <div className="mb-4">
          <Label htmlFor="name">Nombre</Label>
          <Input id="name" type="text" />
        </div>
        <div className="mb-4">
          <Label htmlFor="lastName">Apellidos</Label>
          <Input id="lastName" type="text" />
        </div>
        <div className="mb-4">
          <Label htmlFor="password">Contraseña</Label>
          <Input id="password" type="password"  />
        </div>
        <div className="mb-4">
          <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
          <Input id="confirm-password" type="password" />
        </div>
        <Button color="indigo">Cambiar contraseña</Button>
      </form>
    </div>
  );
};

export default ChangePassword;