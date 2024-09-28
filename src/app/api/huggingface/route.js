export async function POST(req) {
  try {
    // Leer el contenido de la solicitud
    const { prompt } = await req.json();

    // Hacer la solicitud a la API de Hugging Face
    const apiRes = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.HF_ACCESS_TOKEN}`, // Usa el token desde el archivo .env
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: prompt }), // El prompt enviado desde el frontend
      }
    );

    // Verifica si la respuesta es válida
    if (!apiRes.ok) {
      const errorText = await apiRes.text();
      throw new Error(`Error en la API de Hugging Face: ${errorText}`);
    }

    // Procesar la respuesta de la API
    const arrayBuffer = await apiRes.arrayBuffer();
    const base64Image = Buffer.from(arrayBuffer).toString('base64');

    // Devolver la imagen codificada en base64
    return new Response(JSON.stringify({ imageUrl: `data:image/png;base64,${base64Image}` }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
