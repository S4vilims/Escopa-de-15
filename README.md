# Escopa de 15

Jogo de cartas no navegador: contra o computador (2 a 4), no mesmo aparelho (2 a 4, passando o celular)
e online (2 a 4, cada um no seu celular; duplas opcionais com 4).

Pontos por rodada: mais cartas, mais ouros, 7 de ouros, Ás de ouros, Rei de ouros e mais setes, +1 por escopa.

## Arquivos
- `index.html` — o jogo inteiro (regras, computador, tela, login e modo online).
- `supabase.js` — biblioteca do Supabase (cópia do `@supabase/supabase-js` 2.119.0, licença MIT).
- `api/config.js` — função da Vercel que entrega URL + chave pública do Supabase.
- `supabase.sql` — permissão do canal ao vivo só para quem está logado (rodar uma vez).
- `manifest.webmanifest`, `icone.svg`, `icone-180.png`, `icone-192.png`, `icone-512.png` — para instalar como app.

## Publicar (uma vez só)
1. Vercel → Add New → Project → importar este repositório. Framework: **Other**. Sem comando de build.
2. Vercel → Settings → Environment Variables: `SUPABASE_URL` e `SUPABASE_ANON_KEY` (do Supabase: Project Settings → API).
3. Supabase → SQL Editor → rodar `supabase.sql`.
4. Supabase → Realtime → Settings: desligar **Allow public access** (se existir).
5. Supabase → Authentication → Sign In / Providers → Email: para testes, desligar **Confirm email**.
   Para ninguém de fora criar conta: desligar **Allow new users to sign up** e criar as contas em Authentication → Users → Add user.
6. Vercel → Deployments → ⋯ → Redeploy.

## Online
Login com e-mail e senha → tela "Salas online": lista ao vivo das salas abertas (botão Entrar),
"Criar sala e entrar" e campo para código. Quem cria a sala é o anfitrião e precisa ficar com o jogo aberto até o fim.

## Testar sem Supabase
Abra `index.html?teste=a` e `index.html?teste=b` em duas abas do mesmo navegador: o canal vira BroadcastChannel,
o login é pulado e as animações ficam rápidas.
