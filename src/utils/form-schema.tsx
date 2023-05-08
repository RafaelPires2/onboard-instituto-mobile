import { z } from "zod";
import { validatePasswordRegex } from "./regex";

export const formSchema = z.object({
    email: z.string().email('Digite um email valido: email@email.com'),
    password: z
      .string()
      .regex(
        validatePasswordRegex,
        'A senha deve conter ao menos 7 caracteres sendo 1 letra maiuscula 1 minuscula 1 numero'
      ),
  });
  
  export type FormData = z.infer<typeof formSchema>;