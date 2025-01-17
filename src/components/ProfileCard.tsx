import React, { useEffect, useState } from "react";
import ProfileField from "./ProfileField";
import { getUser } from "@/lib/apiClientConsumer";
import { User } from "@/model/user"

function ProfileCard ({ userID }: { userID: number }) {
  const [user, setUser] = useState<User | null>(null);
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
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="justify-center items-center md:grid grid-cols-4 grid-rows-2 bg-white gap-2 p-4 rounded-x1">
        <div className="justify-center items-center md:col-span-3 shadow-xl p-4 m-2 space-y-2 bg-gray-200">
          <ProfileField label="Nombre" value={user? user.name:""} />
          <ProfileField label="Apellidos" value={user? user.lastname:""} />
          <ProfileField label="Privacidad" value={user? user.privacy:""} />
          <ProfileField label="Rol" value={user? user.role:""} />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
