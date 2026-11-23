# Edição pra Ciganinha

Editor de vídeo em português, preparado para abrir pelo Safari no iPhone e ser adicionado à Tela de Início. Nesta primeira versão, a edição acontece no próprio aparelho e não usa IA.

## Fluxo

1. Abra o editor e toque em **Escolher vídeos**.
2. Selecione vídeos ou fotos. O primeiro conteúdo escolhido é colocado automaticamente na linha do tempo.
3. Selecione o clipe para aparar, ajustar o enquadramento, incluir texto ou adicionar música.
4. Toque em **Salvar vídeo** e depois escolha **Salvar em Fotos** ou compartilhar.

Os projetos e arquivos importados ficam no armazenamento local do navegador neste aparelho. A exportação pode demorar; mantenha o app aberto. Vídeos curtos em 720p ou 1080p são o melhor ponto de partida para Safari no iPhone.

## Abrir na Tela de Início

Hospede esta pasta em um endereço HTTPS. No iPhone, abra o endereço no Safari, toque em **Compartilhar → Adicionar à Tela de Início** e escolha **Adicionar**. O ícone abre a versão em tela cheia e o editor também pode funcionar sem conexão depois de carregado.

## Desenvolvimento local

O projeto é composto por arquivos estáticos. Na pasta do projeto, rode:

```sh
python3 -m http.server 8000
```

Abra `http://localhost:8000` no navegador. A exportação e o armazenamento offline dependem de contexto seguro (HTTPS ou localhost). Para abrir no iPhone e instalar na Tela de Início, publique a pasta em um endereço HTTPS.

## Base open source e créditos

Este projeto parte de [Quik Web](https://github.com/ittaymiz/quik-web), de Ittay Mizrahi. A licença MIT e os créditos originais foram mantidos em [LICENSE](LICENSE). Componentes vendorizados mantêm seus avisos de licença nos arquivos correspondentes dentro de `js/vendor/`.

## Limitações conhecidas

- O Safari pode limitar a memória disponível para páginas; clipes longos e 4K podem ficar lentos ou falhar durante a exportação.
- Mantenha o editor aberto e em primeiro plano enquanto o vídeo é exportado.
- Este protótipo ainda precisa ser conferido com os iPhones, versões do iOS e vídeos que serão usados no dia a dia.
- O app não envia a mídia para um servidor nem inclui assistente de IA nesta etapa.
