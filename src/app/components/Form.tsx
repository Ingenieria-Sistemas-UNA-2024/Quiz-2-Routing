import React from "react";
import Button from "./Button";
import Label from "./Label";
import Input from "./Input";
import Select from "./Select";

const Form = () => {
  return (
    <div className="flex items-center justify-center pt-4">
      <form className="w-full max-w-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Edición de perfil
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
        <div className="flex flex-wrap -mx-3 mb-6">
          <Label htmlFor="residence">Lugar de residencia</Label>
          <Input id="residence" type="text" />
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <Label htmlFor="gender">Género</Label>
            <Select id="gender" options={["Masculino", "Femenino"]} />
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <Label htmlFor="birthday">Fecha de nacimiento</Label>
            <Input id="birthday" type="date" />
        </div>
        <div className="my-6 w-full text-gray-600">
          <Button id="submit-changes" color="blue">Guardar cambios</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
