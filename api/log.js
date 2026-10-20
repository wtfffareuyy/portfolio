export default function handler(req, res) {
  // Abilita CORS per il tuo sito GitHub Pages
  res.setHeader('Access-Control-Allow-Origin', 'wtfffareuyy.github.io');
  
  if (req.method === 'POST') {
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
    
    // Qui salvi l'IP: puoi usare un database (Supabase, Firebase) o anche un file temporaneo
    console.log('Visitatore:', ip);
    
    res.status(200).json({ ok: true });
  } else {
    res.status(405).end();
  }
}
