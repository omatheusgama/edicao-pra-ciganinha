# Edição pra Ciganinha

## Objetivo

Criar um editor de vídeo simples, gratuito para uso pessoal e instalável na tela inicial do iPhone. Ao tocar no ícone, a pessoa deve chegar rapidamente à importação e edição do vídeo. A primeira versão não terá IA; os arquivos e projetos devem permanecer no aparelho.

## Projeto-base escolhido

**Quik Web** — <https://github.com/ittaymiz/quik-web>

Ele já oferece uma PWA pensada para Safari no iPhone, importação de vídeos e fotos, armazenamento local, cortes, divisão e organização de clipes, texto, música, formatos vertical/quadrado/horizontal e exportação de MP4. O repositório declara licença MIT. Isso o torna mais próximo do fluxo desejado do que o OpenReel, que é voltado principalmente ao navegador/desktop e ainda lista otimização móvel como trabalho planejado.

Vamos adaptar o Quik Web como um produto próprio, mantendo os avisos e atribuições da licença MIT e respeitando as licenças dos componentes empacotados. Não vamos fundir vários editores inteiros: aproveitaremos ideias pontuais quando houver necessidade e compatibilidade.

## Princípios

- Interface em português do Brasil, com linguagem direta e botões grandes.
- Formato vertical 9:16 como ponto de partida para vídeos gravados no iPhone.
- Prioridade para uso no iPhone e Safari; desktop continua útil para desenvolvimento.
- Importação, edição, armazenamento e renderização no aparelho sempre que possível.
- Sem conta, sem marca d'água e sem cobrança de assinatura no produto inicial.
- Evitar prometer que exportações longas/4K funcionarão em todo iPhone; a memória disponível no Safari varia.
- Preservar os créditos, a licença MIT e os avisos das dependências originais.
- Deixar IA para uma etapa futura, depois que a edição manual for confiável.

## Plano em cinco etapas

### 1. Personalizar a experiência

- Trocar nome, textos, ícone e identidade visual para **Edição pra Ciganinha**.
- Traduzir os fluxos principais para português do Brasil.
- Fazer a primeira tela destacar claramente **Escolher vídeo** e **Continuar projeto**.
- Reduzir elementos que confundam quem só quer importar, editar e salvar.

**Pronto quando:** a pessoa consegue entender a primeira ação sem precisar conhecer o Quik Web ou termos de edição.

### 2. Importar e organizar mídia

- Escolher vídeos e fotos da biblioteca do iPhone pelo seletor do Safari.
- Mostrar os itens importados e permitir adicionar/remover conteúdo.
- Manter projetos e mídia no armazenamento local do navegador, com aviso claro sobre esse comportamento.
- Tratar projeto vazio, falta de espaço e mídia incompatível com mensagens simples.

**Pronto quando:** um vídeo selecionado aparece na área de edição e o projeto continua disponível ao voltar ao ícone.

### 3. Fazer a edição essencial

- Aparar início e fim, dividir, excluir e reorganizar clipes.
- Escolher formato vertical para Reels/Stories, horizontal ou quadrado.
- Adicionar texto/título e música, com controles simples.
- Oferecer prévia e desfazer/refazer alterações.

**Pronto quando:** é possível montar um vídeo curto com cortes, ordem, formato, título e música sem sair do iPhone.

### 4. Exportar e instalar no iPhone

- Exportar MP4 em opções adequadas a celular, começando por 720p e 1080p.
- Oferecer **Salvar em Fotos**/**Compartilhar** pelo fluxo nativo de compartilhamento do iOS.
- Publicar por HTTPS como site estático/PWA e documentar **Compartilhar → Adicionar à Tela de Início**.
- Abrir o ícone diretamente na área de projetos/importação.

**Pronto quando:** a Ciganinha abre pelo ícone, edita um clipe e consegue salvar o MP4 em Fotos.

### 5. Validar no uso real e preparar a evolução

- Conferir o fluxo em Safari num iPhone real com vídeos típicos da família, inclusive áudio e formatos verticais.
- Ajustar tempo de espera, consumo de memória, persistência e mensagens de erro.
- Registrar limitações conhecidas para clipes longos/4K e recomendar manter o app aberto durante a exportação.
- Só depois definir a fase de IA: converter pedidos em português em alterações explícitas na linha do tempo, com prévia e confirmação antes de aplicar.

**Pronto quando:** o fluxo principal for compreensível e confiável nos aparelhos e nos tamanhos de vídeo que serão usados.

## Fora da primeira versão

- Assistente de IA ou edição por prompt.
- Contas, sincronização em nuvem, colaboração ou upload dos vídeos.
- Clonagem/geração de voz, transcrição automática e busca de melhores momentos.
- Recursos profissionais complexos como múltiplas câmeras, máscaras avançadas e correção de cor detalhada.

## Riscos e limites a acompanhar

- Safari pode limitar memória e interromper abas em exportações pesadas; começar com clipes curtos/1080p e exportar com a tela aberta.
- Capacidades de codecs variam por versão do iOS e aparelho; validar H.264/AAC e fluxo para Fotos no iPhone alvo.
- O repositório-base é um projeto independente de porte pequeno; vamos manter mudanças graduais e fáceis de revisar.
- Esta cópia de trabalho conserva o histórico e a licença do projeto-base. Antes de publicar uma versão própria, revisar também as licenças das bibliotecas e arquivos de mídia empacotados.

## Estado inicial

- Repositório-base clonado em `outputs/edicao-pra-ciganinha`.
- Etapa 1 implementada no protótipo: nome, ícone, cores, textos principais em pt-BR e tela vazia com botão direto para escolher mídia.
- Etapas 2 a 4 têm o fluxo-base implementado: primeiro vídeo importado é adicionado à linha do tempo, recursos manuais de edição seguem disponíveis, edição padrão começa em 9:16 e a exportação/compartilhamento do projeto-base permanece disponível.
- Nenhuma IA nem análise automática de mídia é acionada no fluxo inicial; os controles de montagem automática estão ocultos.
- A licença MIT original e os avisos de dependências foram mantidos. `README.md` documenta a atribuição e instalação no iPhone.
- O cache offline foi versionado para a nova identidade e passou a incluir o módulo de tradução.
- Ainda falta validar manualmente em Safari/iPhone real, hospedar em HTTPS para o ícone ser instalável e ajustar eventuais limitações encontradas nos aparelhos-alvo.
