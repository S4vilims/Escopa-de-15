// Entrega ao jogo o endereço do Supabase e a chave PÚBLICA (anon).
// Os valores ficam nas variáveis de ambiente da Vercel, não no GitHub:
//   SUPABASE_URL       (ex.: https://xxxx.supabase.co)
//   SUPABASE_ANON_KEY  (a chave "anon" / "publishable")
// O jogo usa só o canal ao vivo (Realtime broadcast); não cria tabelas nem grava dados.
export default function handler(req, res) {
  const url = process.env.SUPABASE_URL;
  const chave = process.env.SUPABASE_ANON_KEY;
  res.setHeader("Cache-Control", "no-store");
  if (!url || !chave) return res.status(503).json({ erro: "Faltam SUPABASE_URL e SUPABASE_ANON_KEY na Vercel" });
  res.status(200).json({ url, chave });
}
