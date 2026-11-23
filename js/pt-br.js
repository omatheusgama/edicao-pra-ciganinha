/* Portuguese (Brazil) interface translations for Edição pra Ciganinha. */
(() => {
  'use strict';
  const words = {
    'Quik Web': 'Ciganinha', 'Untitled project': 'Meu vídeo', 'Aspect ratio': 'Formato do vídeo',
    '16:9 Landscape': '16:9 Horizontal', '9:16 Vertical': '9:16 Vertical', '1:1 Square': '1:1 Quadrado', '4:5 Portrait': '4:5 Retrato',
    'Your video starts here': 'Seu vídeo começa aqui', 'Pick a video to start editing': 'Escolha um vídeo para começar a editar', 'Share → Add to Home Screen': 'Compartilhar → Adicionar à Tela de Início',
    'Undo (Ctrl+Z)': 'Desfazer', 'Redo (Ctrl+Y)': 'Refazer', 'Start a new empty project': 'Começar um novo projeto', 'New': 'Novo projeto', 'Export': 'Salvar vídeo',
    'Media': 'Mídia', '+ Add': '+ Adicionar', 'Drop videos & photos here': 'Adicione vídeos e fotos aqui', 'or click “+ Add”': 'ou toque em “+ Adicionar”',
    'Add all to timeline': 'Adicionar tudo à edição', '🧹 Remove duplicate files': '🧹 Remover arquivos repetidos', '✨ Auto Create': '✨ Criar vídeo automático',
    'Go to start (Home)': 'Ir para o início', 'Play / Pause (Space)': 'Reproduzir / pausar', 'Go to end (End)': 'Ir para o fim',
    'Split selected clip at playhead (S)': 'Dividir clipe neste ponto', '✂ Split': '✂ Dividir', 'Save the current frame as a photo': 'Salvar este quadro como foto', '📷 Frame grab': '📷 Salvar quadro',
    'Clip': 'Clipe', 'Style': 'Visual', 'Text': 'Texto', 'FX': 'Efeitos', 'Stickers': 'Adesivos', 'Music': 'Música', 'Theme': 'Estilo',
    'Select a clip on the timeline to edit it.': 'Selecione um clipe na linha do tempo para editar.', 'Select a clip to style it, or apply a look to every clip.': 'Selecione um clipe para ajustar ou aplique o visual em todos.', 'Select a clip to add text on it.': 'Selecione um clipe para adicionar texto.',
    'Trim': 'Cortar', '[ Set start': '[ Marcar início', 'Set end ]': 'Marcar fim ]', '⭐ HiLight this moment': '⭐ Marcar este momento',
    'Photo duration': 'Duração da foto', 'Ken Burns motion': 'Movimento suave na foto', 'Speed': 'Velocidade', 'Speed ramp': 'Variação de velocidade',
    'None (constant speed)': 'Normal (velocidade constante)', 'Slow-mo in the middle': 'Câmera lenta no meio', 'Slow-mo at the start': 'Câmera lenta no início', 'Slow-mo at the end': 'Câmera lenta no fim', 'Ramp up (slow → fast)': 'Acelerar aos poucos', 'Ramp down (fast → slow)': 'Desacelerar aos poucos', 'Freeze frame at the start': 'Congelar no início', 'Freeze frame in the middle': 'Congelar no meio', 'Freeze frame at the end': 'Congelar no fim',
    'Clip volume': 'Volume do clipe', 'Transition (into this clip)': 'Transição para este clipe', 'Cut': 'Corte seco', 'Crossfade': 'Dissolver', 'Fade through black': 'Transição pelo preto', 'White flash': 'Clarão branco', 'Slide': 'Deslizar', 'Zoom': 'Zoom', 'Wipe': 'Revelar', 'Push in': 'Aproximar', 'Whip': 'Movimento rápido', 'Transition length': 'Duração da transição',
    'Reframe': 'Enquadramento', 'Fill': 'Preencher', 'Fit': 'Ajustar', 'Zoom': 'Zoom', 'Pan X': 'Deslocar na horizontal', 'Pan Y': 'Deslocar na vertical', 'Level horizon': 'Endireitar horizonte', '↻ Rotate 90°': '↻ Girar 90°', '⇆ Flip': '⇆ Espelhar na horizontal', '⇅ Flip': '⇅ Espelhar na vertical', 'Order': 'Ordem dos clipes', '◀ Move earlier': '◀ Mover para antes', 'Move later ▶': 'Mover para depois ▶', 'Duplicate': 'Duplicar', 'Delete': 'Excluir',
    'Filter': 'Filtro', 'Brightness': 'Brilho', 'Contrast': 'Contraste', 'Saturation': 'Saturação', 'Temperature': 'Temperatura', 'Tint': 'Matiz', 'Fade': 'Desbotar', 'Vignette': 'Vinheta', 'Apply look to all clips': 'Aplicar visual a todos os clipes',
    'Position': 'Posição', 'Top': 'Em cima', 'Center': 'Centro', 'Bottom': 'Embaixo', 'Font': 'Fonte', 'Sans (clean)': 'Sem serifa (simples)', 'Display (bold impact)': 'Impacto (marcante)', 'Serif (classic)': 'Serifada (clássica)', 'Rounded (friendly)': 'Arredondada (amigável)', 'Mono (technical)': 'Monoespaçada (técnica)', 'Script (handwritten)': 'Manuscrita', 'Style': 'Estilo', 'Bold': 'Negrito', 'Outline': 'Contorno', 'Box': 'Tarja', 'Lower third': 'Legenda inferior', 'Minimal': 'Minimalista', 'Size': 'Tamanho', 'Color': 'Cor', 'Accent / outline color': 'Cor de destaque ou contorno', 'Animation': 'Animação', 'None': 'Nenhuma', 'Fade in': 'Aparecer aos poucos', 'Slide up': 'Subir', 'Pop': 'Surgir', 'Typewriter': 'Máquina de escrever', 'Zoom in': 'Aproximar', 'Slide from right': 'Entrar pela direita', 'Bounce': 'Quicar', 'Show for': 'Exibir por', 'Add a title…': 'Escreva um título…',
    'Smooth mode': 'Modo suave', 'Smooth mode – no flashes, pulses or light leaks': 'Modo suave — sem clarões nem efeitos piscantes', 'Camera motion': 'Movimento de câmera', 'This clip’s move': 'Movimento deste clipe', 'This clip\'s move': 'Movimento deste clipe', 'Auto (varies per clip)': 'Automático (varia por clipe)', 'Custom (keyframes)': 'Personalizado', 'Set start = current reframe': 'Definir início neste enquadramento', 'Set end = current reframe': 'Definir fim neste enquadramento', 'Auto slow-mo on the best action moment': 'Câmera lenta automática nos melhores momentos', 'Light leak at the start of this clip': 'Clarão no início deste clipe', '🎲 Randomize effects per clip': '🎲 Variar efeitos entre os clipes', 'Pulse on the beat': 'Pulsar no ritmo da música', 'Cinematic letterbox bars': 'Barras de cinema', 'Light leaks at each cut': 'Clarões nas transições', 'Particles': 'Partículas', 'Snow': 'Neve', 'Bokeh lights': 'Luzes desfocadas', 'Sparkles': 'Brilhos', 'Confetti': 'Confete', 'Rain': 'Chuva', 'Floating dust': 'Poeira',
    'No music. Pick a built-in track or add your own to unlock beat sync.': 'Escolha uma música da lista ou adicione a sua.', 'Built-in tracks': 'Músicas disponíveis', '🎵 Add your own music file': '🎵 Escolher uma música', 'Music volume': 'Volume da música', 'Start offset': 'Ponto de início', 'Fade in': 'Entrada gradual', 'Fade out': 'Saída gradual', 'Loop if shorter than video': 'Repetir se a música acabar antes', 'Lower clip audio under music': 'Reduzir o som do vídeo sob a música', '🥁 Sync cuts to beats': '🥁 Sincronizar cortes com a música', 'Fit video length to music': 'Ajustar vídeo à duração da música', 'Remove music': 'Remover música',
    'Project title': 'Nome do vídeo', 'Start a new project': 'Começar outro vídeo', 'A theme sets the look, the transitions and the pace for the whole edit. Auto Create uses the selected theme.': 'O estilo define as cores, transições e o ritmo do vídeo.', 'Video length': 'Duração do vídeo', '↻ Re-arrange to this length': '↻ Reorganizar para esta duração', 'Fit current clips to this length': 'Ajustar clipes a esta duração', 'Pace': 'Ritmo', 'Slow': 'Calmo', 'Medium': 'Moderado', 'Fast': 'Rápido',
    'Export video': 'Salvar vídeo', 'Quality': 'Qualidade', 'Share – fast, 720p · 30 fps (WhatsApp, Instagram)': 'Compartilhar — rápido, 720p · 30 fps', 'High – 1080p · 30 fps': 'Alta — 1080p · 30 fps', 'Max – 1080p · 60 fps (slowest)': 'Máxima — 1080p · 60 fps (mais lento)', 'The video is rendered frame by frame at full quality, with a clean audio mix. A 1‑minute video takes a minute or two. Keep the app open while it renders.': 'O vídeo será preparado no aparelho. A exportação pode levar alguns minutos; mantenha o app aberto.', 'Technical report': 'Relatório técnico', 'Copy report': 'Copiar relatório', 'Save to Photos / Share…': 'Salvar em Fotos / Compartilhar…', 'Download file': 'Baixar arquivo', 'Cancel': 'Cancelar', 'Render': 'Exportar vídeo', 'Loading…': 'Carregando…',
    'Select a clip first': 'Selecione um clipe primeiro', 'Add clips first': 'Adicione clipes primeiro', 'Add a music track first to use its length': 'Adicione uma música para usar a duração dela', 'Welcome back – your project was restored': 'Que bom ter você de volta! Seu projeto foi recuperado.', 'Export cancelled': 'Exportação cancelada', 'Report copied': 'Relatório copiado', 'Every clip got its own effects': 'Os efeitos foram variados entre os clipes', 'Look applied to all clips': 'Visual aplicado a todos os clipes', 'HiLights removed': 'Marcações removidas', 'Start keyframe set': 'Início do movimento definido', 'End keyframe set': 'Fim do movimento definido', 'Unsupported file type:': 'Tipo de arquivo não compatível:', 'No files were selected': 'Nenhum arquivo foi selecionado',
    'Select a clip to add stickers to it.': 'Selecione um clipe para adicionar adesivos.', '0 = whole clip, otherwise share of the clip.': '0 = clipe inteiro; ou escolha uma parte do clipe.', '– no flashes, pulses or light leaks': '— sem clarões nem efeitos piscantes', 'Keeps camera moves, transitions and particles, but removes everything that blinks.': 'Mantém movimentos e transições, mas remove os efeitos piscantes.', 'Slow zooms and pans on every clip. 0 turns it off.': 'Movimentos suaves em cada clipe. Use 0 para desativar.', 'Gives every clip its own camera move, strength, transition and light leak. Auto Create does this automatically.': 'Varia os movimentos e efeitos em cada clipe.', 'Vary per clip (some clips get particles, some don\'t, some get a different kind)': 'Variar entre clipes', 'This clip\'s particles': 'Partículas deste clipe', 'Adjust Zoom / Pan in the Clip tab, then set the start and end keyframes. The clip moves from one to the other.': 'Ajuste zoom e posição na aba Clipe e defina os quadros inicial e final.',
    'Prefer moments with': 'Dar preferência a', 'People': 'Pessoas', 'Views': 'Paisagens', 'Action': 'Ação', 'Add project title on the first clip': 'Adicionar título no primeiro clipe', 'Add the theme\'s music automatically': 'Adicionar música automaticamente', 'Apply theme look to current clips': 'Aplicar estilo aos clipes', '🔀 Shuffle order': '🔀 Misturar a ordem', 'Troubleshooting': 'Ajuda', '🛠 Share diagnostics report': '🛠 Compartilhar relatório de diagnóstico', 'Timeline · drag clips to reorder · tap to select · S split · Del delete': 'Linha do tempo · arraste para reorganizar · toque para selecionar',
    '½× slow-mo': '½× câmera lenta', '¼× slow-mo': '¼× câmera lenta', '⅛× slow-mo': '⅛× câmera lenta', '0.5s freeze': 'Congelar por 0,5 s', '1s freeze': 'Congelar por 1 s', '2s freeze': 'Congelar por 2 s', '3s freeze': 'Congelar por 3 s', 'Pan left': 'Mover para a esquerda', 'Pan right': 'Mover para a direita', 'Auto (randomized)': 'Automático (variado)', 'Film grain': 'Granulado de filme', 'Reset to the theme\'s look': 'Restaurar estilo do tema', 'Emoji': 'Emoji', 'Aa Text': 'Aa Texto', '📅 Date': '📅 Data', '🕒 Time': '🕒 Horário', 'Tap a sticker in the preview and drag it to move it.': 'Toque no adesivo na prévia e arraste para mover.', 'Stickers on this clip': 'Adesivos neste clipe', 'Pop in': 'Surgir', 'Spin in': 'Girar ao entrar',
  };
  const attrs = ['placeholder', 'title', 'aria-label'];
  const translateNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const original = node.nodeValue;
      const key = original.trim();
      let replacement = words[key];
      if (!replacement) {
        let match = key.match(/^Importing (\d+)\/(\d+):\s*(.*)$/);
        if (match) replacement = `Importando ${match[1]} de ${match[2]}: ${match[3]}`;
        match = key.match(/^Added (\d+) files? to the media bin$/);
        if (match) replacement = `${match[1]} ${Number(match[1]) === 1 ? 'arquivo adicionado' : 'arquivos adicionados'} à edição`;
        match = key.match(/^Skipped (\d+) duplicate files? \(already imported\)$/);
        if (match) replacement = `${match[1]} ${Number(match[1]) === 1 ? 'arquivo repetido ignorado' : 'arquivos repetidos ignorados'}`;
        match = key.match(/^Could not open (\d+) files? – (.*)$/);
        if (match) replacement = `Não foi possível abrir ${match[1]} ${Number(match[1]) === 1 ? 'arquivo' : 'arquivos'} — ${match[2]}`;
        if (!replacement && key.startsWith('Unsupported file type:')) replacement = key.replace('Unsupported file type:', 'Tipo de arquivo não compatível:');
        if (!replacement && key.startsWith('Error:')) replacement = key.replace('Error:', 'Erro:');
        if (!replacement && key.startsWith('Fitted to ')) replacement = key.replace('Fitted to ', 'Duração ajustada para ');
        if (!replacement && key.endsWith(' theme applied')) replacement = key.replace(' theme applied', ' aplicado');
        if (!replacement && key.startsWith('Exported ')) replacement = key.replace('Exported ', 'Vídeo exportado: ');
        if (!replacement && key.startsWith('Export stopped because the app went to the background.')) replacement = 'A exportação foi interrompida porque o app foi para segundo plano. Mantenha-o aberto durante a exportação.';
      }
      if (replacement) node.nodeValue = original.replace(key, replacement);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE && node !== document) return;
    if (node.nodeType === Node.ELEMENT_NODE) {
      for (const attr of attrs) {
        const value = node.getAttribute(attr);
        if (value && words[value]) node.setAttribute(attr, words[value]);
      }
    }
    for (const child of node.childNodes) translateNode(child);
  };
  translateNode(document.body);
  new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'characterData') translateNode(record.target);
      else for (const node of record.addedNodes) translateNode(node);
    }
  }).observe(document.body, { subtree: true, childList: true, characterData: true });
})();
