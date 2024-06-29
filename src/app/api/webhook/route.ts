import axios from "axios";
import { z } from "zod";

const bodySchema = z.object({
  username: z.string(),
  email: z.string().email(),
  content: z.string(),
});

const WEBHOOK_URL = process.env.WEBHOOK_URL!;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, email, content } = bodySchema.parse(body);

    const messageData = {
      embeds: [
        {
          title: "Mensagem de Contato",
          color: 0x4ade80,
          fields: [
            {
              name: "Nome",
              value: username,
              inline: true,
            },
            {
              name: "E-mail",
              value: email,
              inline: true,
            },
            {
              name: "Mensagem",
              value: content,
            },
          ],
        },
      ],
    };

    await axios.post(WEBHOOK_URL, messageData);

    return Response.json({
      message: "Mensagem enviada com sucesso!",
    });
  } catch (error) {
    console.log(error);
    return Response.error();
  }
}
