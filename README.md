# Escopa de 15

Jogo de cartas no navegador: contra o computador (2 a 4), no mesmo aparelho (2 a 4, passando o celular)
e online (2 a 4, cada um no seu celular, com código de sala; duplas opcionais com 4).

Pontos por rodada: mais cartas, mais ouros, 7 de ouros, Ás de ouros, Rei de ouros e mais setes, +1 por escopa.

## Arquivos
- `index.html` — o jogo inteiro (regras, computador, tela e modo online).
- `supabase.js` — biblioteca do Supabase (cópia do `@supabase/supabase-js` 2.119.0, licença MIT).
- `api/config.js` — função da Vercel que entrega URL + chave pública do Supabase.
- `manifest.webmanifest`, `icone.svg`, `icone-180.png`, `icone-192.png`, `icone-512.png` — para instalar como app.

## Publicar
1. Vercel → Add New → Project → importar este repositório. Framework: **Other**. Sem comando de build.
2. Vercel → Settings → Environment Variables: `SUPABASE_URL` e `SUPABASE_ANON_KEY` (do Supabase: Project Settings → API).
3. Redeploy. Pronto: o jogo abre no endereço da Vercel; o online usa só o Realtime do Supabase (sem tabelas).

## Testar o online sem Supabase
Abra `index.html?teste=a` e `index.html?teste=b` em duas abas do mesmo navegador: o canal vira BroadcastChannel e as animações ficam rápidas.
