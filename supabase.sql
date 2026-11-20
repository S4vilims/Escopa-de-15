-- Escopa de 15: o canal ao vivo (salas e saguão) só aceita quem está logado.
-- Rode UMA vez no Supabase: SQL Editor → New query → colar tudo → Run.
-- Não cria tabela nem guarda dados do jogo; só dá permissão ao canal.

drop policy if exists "escopa: logados recebem" on realtime.messages;
drop policy if exists "escopa: logados enviam" on realtime.messages;

create policy "escopa: logados recebem" on realtime.messages
  for select to authenticated
  using (realtime.topic() like 'escopa15-%');

create policy "escopa: logados enviam" on realtime.messages
  for insert to authenticated
  with check (realtime.topic() like 'escopa15-%');
