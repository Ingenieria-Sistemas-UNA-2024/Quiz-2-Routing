import { User } from "@/model/user";
import { postUser } from "./apiClientConsumer";

export function createUser(user: User | null, formData: FormData | null): User | null {
    try {
      if (user !== null && formData !== null) {
        const newUser = new User(
          user.id,
          formData.get("name") as string,
          user.password,
          formData.get("lastName") as string,
          user.privacy,
          user.role,
          formData.get("gender") as string,
          formData.get("residence") as string,
          formData.get("birthday") as string
        )
        return user
      }
      return null
    } catch (error) {
      console.log("Error guardando usuario")
    }
  }