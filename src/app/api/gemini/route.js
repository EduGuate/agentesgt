// root/src/app/api/gemini/route.js

export async function POST(req) {
  try {
    // Leer el contenido de la solicitud
    const { input } = await req.json();

    // Hacer la solicitud a la API de Google Gemini
    const apiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`, // Usa la clave de API desde el archivo .env
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: input }] }],
        }),
      }
    );

    // Procesar la respuesta de la API de Gemini
    const data = await apiRes.json();
    const responseText = data.candidates[0]?.content?.parts[0]?.text || 'No response';

    // Devolver la respuesta al cliente
    return new Response(JSON.stringify({ response: responseText }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
