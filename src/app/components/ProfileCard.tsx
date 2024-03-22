import React from "react";
import ProfileField from "./ProfileField";
const ProfileCard = () => {
  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="md:grid grid-cols-4 grid-rows-2 bg-white gap-2 p-4 rounded-xl">
        <div className="md:col-span-1 h-48 shadow-xl">
          <div className="flex w-full h-full relative"></div>
        </div>
        <div className="md:col-span-3 h-48 shadow-xl p-4 space-y-2 p-3">
          <ProfileField label="Nombre" value="James" />
          <ProfileField label="Apellidos" value="Rivera" />
          <ProfileField label="Privacidad" value="Público" />
          <ProfileField label="Rol" value="Admin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
