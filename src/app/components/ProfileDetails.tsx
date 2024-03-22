import React from "react";
import ProfileField from "./ProfileField";

const ProfileDetails = () => {
  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="md:grid grid-cols-4 grid-rows-2 bg-white gap-2 p-4 rounded-xl w-full max-w-4xl">
        <div className="md:col-span-1">
          <div className="flex w-full h-full relative"></div>
        </div>
        <div className="md:col-span-3 p-4 space-y-2 p-3">
          <ProfileField label="Nombre" value="James" />
          <ProfileField label="Apellidos" value="Rivera" />
          <ProfileField label="Privacidad" value="Público" />
          <ProfileField label="Rol" value="Admin" />
          <ProfileField label="Género" value="Masculino" />
          <ProfileField label="Lugar de residencia" value="San José, Costa Rica" />
          <ProfileField label="Fecha de nacimiento" value="17/10/2003" />
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
