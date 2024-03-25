import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import Label from "./Label";
import Input from "./Input";
import Select from "./Select";
import { User } from "@/app/model/user"

async function getUser(id: number) {
  const res = await fetch(`http://localhost:3000/api/users/${id}`)
  return await res.json()
}
async function createUser(user:User | null, event: Event){
  event.preventDefault()
  const res = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const data = await res.json();
  return data;
}
function Form({ userID }: { userID: number }) {
  const [user, setUser] = useState<User | null>(null);
  const formRef = useRef(null)
  useEffect(() => {
    async function fetchData() {
      try {
        const userData: User = await getUser(userID);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center pt-4">
      <form className="w-full max-w-lg p-8" ref={formRef}>
        <h1 className="text-2xl font-bold mb-6 text-center">
          Edición de perfil
        </h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" type="text" value={user ? user.name : ""} onChange={(e) => setUser(user ? { ...user, name: e.target.value } : null)} />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <Label htmlFor="lastName">Apellidos</Label>
            <Input id="lastName" type="text" value={user ? user.lastname : ""} onChange={(e) => setUser(user ? { ...user, lastname: e.target.value } : null)} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <Label htmlFor="residence">Lugar de residencia</Label>
          <Input id="residence" type="text" value={user ? user.place_of_residence : ""} onChange={(e) => setUser(user ? { ...user, place_of_residence: e.target.value } : null)} />
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <Label htmlFor="gender">Género</Label>
          <Select id="gender" options={["Masculino", "Femenino"]} value={user ? user.gender : "Masculino"} onChange={(e) => setUser(user ? { ...user, gender: e.target.value } : null)} />
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <Label htmlFor="birthday">Fecha de nacimiento</Label>
          <Input id="birthday" type="date" value={user ? user.birthdate : ""} onChange={(e) => setUser(user ? { ...user, birthdate: e.target.value } : null)} />
        </div>
        <div className="my-6 w-full text-gray-600">
          <Button id="submit-changes" color="blue" onClick={(e:any) => createUser(user,e)}>Guardar cambios</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
