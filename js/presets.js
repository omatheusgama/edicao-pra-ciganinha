/* Looks (filters), themes and text styles. */
const FILTERS = {
  none:     { name: 'Original', css: '' },
  vivid:    { name: 'Vibrante',    css: 'saturate(1.45) contrast(1.1)' },
  warm:     { name: 'Quente',     css: 'sepia(0.3) saturate(1.2) brightness(1.03)' },
  cool:     { name: 'Frio',     css: 'hue-rotate(-12deg) saturate(1.1) brightness(1.02) contrast(1.05)' },
  bw:       { name: 'P&B',      css: 'grayscale(1) contrast(1.15)' },
  vintage:  { name: 'Retrô',  css: 'sepia(0.55) contrast(0.9) brightness(1.05) saturate(1.2)' },
  dramatic: { name: 'Dramático', css: 'contrast(1.35) saturate(0.85) brightness(0.92)' },
  fade:     { name: 'Desbotado',     css: 'contrast(0.85) brightness(1.1) saturate(0.8)' },
  punch:    { name: 'Intenso',    css: 'contrast(1.2) saturate(1.3) brightness(0.98)' },
  pastel:   { name: 'Pastel',   css: 'saturate(0.7) brightness(1.12) contrast(0.9)' },
  night:    { name: 'Noturno',    css: 'brightness(0.85) contrast(1.2) hue-rotate(-20deg) saturate(0.9)' },
  golden:   { name: 'Dourado',   css: 'sepia(0.45) saturate(1.5) brightness(1.05)' },
  /* Environment looks, in the spirit of GoPro's snow / water / desert filters */
  snow:     { name: 'Neve',     css: 'brightness(1.08) contrast(1.12) saturate(0.9) hue-rotate(-6deg)' },
  water:    { name: 'Água',    css: 'hue-rotate(-14deg) saturate(1.35) contrast(1.12) brightness(1.02)' },
  desert:   { name: 'Deserto',   css: 'sepia(0.35) saturate(1.3) contrast(1.08) brightness(1.04)' },
  beach:    { name: 'Praia',    css: 'saturate(1.3) brightness(1.06) contrast(1.04) hue-rotate(-4deg)' },
  forest:   { name: 'Floresta',   css: 'saturate(1.25) contrast(1.1) hue-rotate(8deg) brightness(0.98)' },
  urban:    { name: 'Urbano',    css: 'contrast(1.25) saturate(0.8) brightness(0.97)' },
  sunset:   { name: 'Pôr do sol',   css: 'sepia(0.3) saturate(1.6) contrast(1.08) hue-rotate(-8deg)' },
  indoor:   { name: 'Interno',   css: 'brightness(1.1) contrast(1.05) saturate(1.05) hue-rotate(6deg)' },
  dirt:     { name: 'Terra',     css: 'sepia(0.2) saturate(1.15) contrast(1.15) brightness(0.98)' },
  cinema:   { name: 'Cinema', css: 'contrast(1.18) saturate(0.85) sepia(0.12) brightness(0.96)' },
  tealorange: { name: 'Azul e laranja', css: 'sepia(0.25) saturate(1.5) hue-rotate(-18deg) contrast(1.12)' },
  moody:    { name: 'Melancólico',    css: 'contrast(1.2) saturate(0.7) brightness(0.9) hue-rotate(-10deg)' },
  bright:   { name: 'Claro',   css: 'brightness(1.15) saturate(1.2) contrast(1.02)' }
};

/* Each theme also carries an `fx` preset: camera motion amount, beat pulse, letterbox, light leaks, grain. */
const THEMES = {
  classic: { name: 'Clássico',  desc: 'Dissoluções suaves e cores reais', filter: 'none',     transition: 'crossfade', pace: 'medium', textStyle: 'bold', transitions: ['crossfade', 'push', 'slide', 'wipe'], fx: { motion: 0.6, pulse: true, letterbox: false, leaks: true, grain: 0.08, particles: 'none' },  swatch: 'linear-gradient(135deg,#4f8cff,#7c5cff)' },
  action:  { name: 'Ação',   desc: 'Cortes rápidos e cores fortes',   filter: 'vivid',    transition: 'flash',     pace: 'fast',   textStyle: 'outline', transitions: ['flash', 'whip', 'zoom', 'push'], fx: { motion: 0.7, pulse: true, letterbox: false, leaks: false, grain: 0.1, particles: 'sparkles' }, swatch: 'linear-gradient(135deg,#ff6b35,#ffb52e)' },
  chill:   { name: 'Tranquilo',    desc: 'Tons quentes e transições leves',       filter: 'warm',     transition: 'fade',      pace: 'slow',   textStyle: 'minimal', transitions: ['fade', 'crossfade', 'push'], fx: { motion: 0.4, pulse: true, letterbox: false, leaks: true, grain: 0.15, particles: 'none' }, swatch: 'linear-gradient(135deg,#f6d365,#fda085)' },
  noir:    { name: 'Noir',     desc: 'Preto e branco com clima dramático',         filter: 'bw',       transition: 'fade',      pace: 'medium', textStyle: 'box', transitions: ['fade', 'crossfade', 'wipe'], fx: { motion: 0.4, pulse: true, letterbox: true, leaks: false, grain: 0.35, particles: 'none' },     swatch: 'linear-gradient(135deg,#222,#999)' },
  retro:   { name: 'Retrô',    desc: 'Visual de filme antigo',       filter: 'vintage',  transition: 'zoom',      pace: 'medium', textStyle: 'box', transitions: ['zoom', 'whip', 'flash', 'crossfade'], fx: { motion: 0.5, pulse: true, letterbox: false, leaks: true, grain: 0.3, particles: 'none' },     swatch: 'linear-gradient(135deg,#c79081,#dfa579)' },
  epic:    { name: 'Épico',     desc: 'Contraste cinematográfico',           filter: 'dramatic', transition: 'zoom',      pace: 'medium', textStyle: 'outline', transitions: ['zoom', 'push', 'fade', 'whip'], fx: { motion: 0.6, pulse: true, letterbox: true, leaks: false, grain: 0.12, particles: 'none' }, swatch: 'linear-gradient(135deg,#0f2027,#2c5364)' },
  dreamy:  { name: 'Sonhador',   desc: 'Suave, leve e em tons pastel',           filter: 'pastel',   transition: 'crossfade', pace: 'slow',   textStyle: 'minimal', transitions: ['crossfade', 'push', 'fade'], fx: { motion: 0.4, pulse: true, letterbox: false, leaks: true, grain: 0.1, particles: 'bokeh' }, swatch: 'linear-gradient(135deg,#a18cd1,#fbc2eb)' },
  snow:    { name: 'Neve',     desc: 'Brancos nítidos e neve caindo',  filter: 'snow',     transition: 'crossfade', pace: 'medium', textStyle: 'minimal', transitions: ['crossfade', 'fade', 'push'], fx: { motion: 0.5, pulse: true, letterbox: false, leaks: false, grain: 0.05, particles: 'snow' }, swatch: 'linear-gradient(135deg,#e0eafc,#cfdef3)' },
  beach:   { name: 'Praia',    desc: 'Sol, cores vivas e brilhos', filter: 'beach',    transition: 'slide',     pace: 'medium', textStyle: 'rounded', transitions: ['slide', 'crossfade', 'push', 'whip'], fx: { motion: 0.6, pulse: true, letterbox: false, leaks: true, grain: 0.03, particles: 'sparkles' }, swatch: 'linear-gradient(135deg,#43cea2,#f8e9a1)' },
  sunset:  { name: 'Pôr do sol',   desc: 'Luz quente e tons suaves',       filter: 'sunset',   transition: 'crossfade', pace: 'slow',   textStyle: 'minimal', transitions: ['crossfade', 'fade', 'push'], fx: { motion: 0.5, pulse: true, letterbox: true, leaks: true, grain: 0.08, particles: 'bokeh' }, swatch: 'linear-gradient(135deg,#ff7e5f,#feb47b)' },
  urban:   { name: 'Urbano',    desc: 'Contraste forte e cortes rápidos',  filter: 'urban',    transition: 'whip',      pace: 'fast',   textStyle: 'outline', transitions: ['whip', 'zoom', 'flash', 'push'], fx: { motion: 0.7, pulse: true, letterbox: true, leaks: false, grain: 0.2, particles: 'none' }, swatch: 'linear-gradient(135deg,#434343,#9e9e9e)' },
  party:   { name: 'Festa',   desc: 'Confete, luzes e energia',   filter: 'punch',    transition: 'flash',     pace: 'fast',   textStyle: 'box',     transitions: ['flash', 'whip', 'zoom', 'push'], fx: { motion: 0.7, pulse: true, letterbox: false, leaks: true, grain: 0.05, particles: 'confetti' }, swatch: 'linear-gradient(135deg,#f953c6,#b91d73)' },
  rain:    { name: 'Dia de chuva', desc: 'Tons frios e clima tranquilo',    filter: 'moody',    transition: 'fade',      pace: 'slow',   textStyle: 'minimal', transitions: ['fade', 'crossfade'], fx: { motion: 0.4, pulse: false, letterbox: true, leaks: false, grain: 0.15, particles: 'rain' }, swatch: 'linear-gradient(135deg,#283e51,#4b79a1)' },
  travel:  { name: 'Viagem',   desc: 'Luz dourada e transições suaves',          filter: 'golden',   transition: 'slide',     pace: 'medium', textStyle: 'lower', transitions: ['slide', 'whip', 'push', 'crossfade'], fx: { motion: 0.6, pulse: true, letterbox: false, leaks: true, grain: 0.05, particles: 'none' },   swatch: 'linear-gradient(135deg,#f7971e,#ffd200)' }
};

/* Target seconds per clip for each pace. */
const PACE = { slow: 6, medium: 4, fast: 2.5 };
/* Auto edits never cut a clip shorter than this (unless the footage itself is shorter). */
const AUTO_MIN_CLIP = 2.5;
