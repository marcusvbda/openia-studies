import { config } from "dotenv";
import OpenAI from "openai";
config();

const openai = new OpenAI();

async function executeGPT(prompt) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "Você é um assistente criado para retornar arquivos JSON com os atributos sempre em inglês",
      },
      { role: "user", content: prompt },
    ],
    model: "gpt-3.5-turbo-1106",
    response_format: { type: "json_object" },
  });

  const response = completion.choices[0].message.content;

  return response;
}

(async () => {
  const response = await executeGPT(
    "lista de todos os vencedores da formula 1 com ano, equipe e piloto"
  );
  console.log(response);
})();
