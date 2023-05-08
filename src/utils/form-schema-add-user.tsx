import { z } from "zod";
import { birthDateRegex, validatePasswordRegex } from "./regex";

export const formSchemaAddUser = z.object({
    name: z.string().max(50),
    phone: z
      .string()
      .min(10, 'Digite seu numero com DDD sem espaços ou caracteres.')
      .max(11, 'Digite seu numero com DDD sem espaços ou caracteres.'),
    birthDate: z
      .string()
      .regex(birthDateRegex, 'A data deve ter o formato Dia/Mês/Ano')
      .transform((birthDate) => birthDate.replace(/(\d{2})\/(\d{2})\/(\d{4})/g, '$3-$2-$1')),
    email: z.string().email('Digite um email valido: email@email.com'),
    password: z
      .string()
      .regex(
        validatePasswordRegex,
        'A senha deve conter ao menos 7 caracteres sendo 1 letra maiuscula 1 minuscula 1 numero'
      ),
  });
  
  export type FormData = z.infer<typeof formSchemaAddUser>;