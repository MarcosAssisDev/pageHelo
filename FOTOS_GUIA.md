# 📸 Guia de Fotos - Landing Page Heloisa Fernandes

## 🎯 Resumo Executivo
Você tem UMA foto ótima (foto com arara). Precisa de mais **4-5 fotos** estratégicas para otimizar o site e criar confiança. Vou detalhar exatamente onde cada uma vai e como tirar.

---

## 📍 MAPA DO SITE - Onde Colocar Cada Foto

```
┌─────────────────────────────────────────────────────┐
│                    HEADER/NAV                        │
├─────────────────────────────────────────────────────┤
│                                                      │
│                   HERO SECTION                       │
│  ┌────────────────────┐  ┌──────────────────────┐   │
│  │  Texto + Botões    │  │  FOTO DELA #1        │   │
│  │  (esquerda)        │  │  (Headshot/Perfil)   │   │
│  │                    │  │  ← COLOCAR AQUI      │   │
│  └────────────────────┘  └──────────────────────┘   │
│                                                      │
├─────────────────────────────────────────────────────┤
│                                                      │
│               SOBRE (Seção com foto dela)           │
│  "Quem é Heloisa" + Missão + Formação               │
│  ← PODERIA ADICIONAR FOTO DELA AQUI (Opcional)     │
│                                                      │
├─────────────────────────────────────────────────────┤
│                                                      │
│           ESPECIALIDADES (4 Cards com ícones)       │
│  🩺 Clínica  │  🦷 Odonto  │  🧴 Derma  │  💉 Aplica│
│  (SEM FOTOS - apenas ícones)                        │
│                                                      │
├─────────────────────────────────────────────────────┤
│                                                      │
│          POR QUE ESCOLHER (3 Cards com números)     │
│  01 Caloroso │ 02 Agendamento │ 03 Especialista     │
│  (SEM FOTOS - apenas números)                       │
│                                                      │
├─────────────────────────────────────────────────────┤
│                                                      │
│              LOCALIZAÇÃO & HORÁRIOS                 │
│  Info de contato + MAPA DO GOOGLE                   │
│  ← COLOCAR FOTO DO CONSULTÓRIO AQUI (Opcional)     │
│                                                      │
├─────────────────────────────────────────────────────┤
│                  CTA FINAL + FOOTER                 │
└─────────────────────────────────────────────────────┘
```

---

## 📷 FOTOS NECESSÁRIAS (Ordem de Prioridade)

### 🥇 PRIORIDADE #1: Foto de Perfil/Headshot (HERO SECTION)
**Posição:** Seção Hero (lado direito - 350x350px)  
**Status:** ✅ JÁ TEM (foto com arara é perfeita!)

**Recomendações:**
- ✅ Sua foto atual é EXCELENTE
- Sorrir naturalmente ✅
- Boa iluminação natural ✅
- Fundo limpo (você tem) ✅
- Mostrar segurança e confiança ✅

**Arquivo:**
```
img/heloisa-hero.jpg (ou .webp para melhor performance)
```

---

### 🥈 PRIORIDADE #2: Foto do Consultório (LOCALIZAÇÃO)
**Posição:** Seção "Localização & Horários" (lado direito do mapa)  
**Tamanho:** 400x300px (landscape)

**O que tirar:**
- 📷 Entrada/fachada da clínica Thiago Pagani
- 📷 Recepção aconchegante
- 📷 Sala de atendimento (limpa e bem organizada)
- 📷 Equipamentos veterinários (se possível)

**Dicas de foto:**
- ✅ Boa iluminação (natural de preferência)
- ✅ Ambiente limpo e organizado
- ✅ Cores quentes (combina com paleta dela)
- ❌ Evitar: fotos escuras, bagunçadas, com pessoas de fundo

**Arquivo:**
```
img/consultorio.jpg
```

---

### 🥉 PRIORIDADE #3: Foto Atendendo Animal (GALLERY/CARROSSEL FUTURO)
**Posição:** Seção "Sobre" ou novo carrossel de trabalhos  
**Tamanho:** 400x500px (portrait)

**O que tirar:**
- 📷 Você examinando um cão/gato
- 📷 Acariciando um animal
- 📷 Durante consulta (mantendo privacidade do cliente)
- 📷 Mostrando confiança e cuidado com animal

**Dicas:**
- ✅ Mostrar sua dedução profissional
- ✅ Ambiente de clínica ao fundo
- ✅ Animal confortável
- ❌ Evitar: fotos de procedimentos invasivos

**Arquivo:**
```
img/heloisa-atendimento.jpg
```

---

### 💎 PRIORIDADE #4: Foto de Depoimento/Social Proof (FUTURO)
**Posição:** Nova seção "Depoimentos" (se adicionar)  
**Tamanho:** 150x150px (circular/avatar)

**O que tirar:**
- 📷 Clientes com seus pets (com permissão!)
- 📷 Donos felizes com seus animais saudáveis
- 📷 Pet antes e depois de tratamento

**Nota:** Colher depoimentos com nomes + foto do cliente

---

### ⭐ BÔNUS: Certificados/Formação
**Posição:** Seção "Sobre" (para credibilidade)
**O que tirar:**
- 📷 Diploma UNIP (desfocado por privacidade)
- 📷 Certificados de especializações
- 📷 Badges de formação

---

## 🛠️ Como Adicionar Fotos ao Projeto

### Estrutura de Pastas
```
/home/user/pageHelo/
├── img/
│   ├── heloisa-hero.jpg          ← Foto com arara (HERO)
│   ├── consultorio.jpg           ← Fachada/recepção
│   ├── heloisa-atendimento.jpg   ← Atendendo animal
│   └── [outras fotos]
├── index.html
├── css/styles.css
└── js/main.js
```

### Adicionar no HTML
No `index.html`, substitua o `image-placeholder` por:

```html
<!-- HERO SECTION -->
<div class="hero-image">
    <img src="img/heloisa-hero.jpg" alt="Heloisa Fernandes - Médica Veterinária em Bauru" class="hero-photo">
</div>

<!-- LOCALIZAÇÃO (Opcional) -->
<div class="localizacao-photo">
    <img src="img/consultorio.jpg" alt="Consultório - Clínica Thiago Pagani" class="consultorio-photo">
</div>
```

### CSS para Fotos (adicione em `css/styles.css`)
```css
.hero-photo,
.consultorio-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
}

.hero-photo {
    animation: slideInRight 0.8s ease-out;
}
```

---

## 📊 Formato e Qualidade Recomendados

| Foto | Tamanho | Formato | Qualidade | Peso |
|------|---------|---------|-----------|------|
| Hero | 350x350px | JPEG/WebP | 85% | < 100KB |
| Consultório | 400x300px | JPEG/WebP | 85% | < 80KB |
| Atendimento | 400x500px | JPEG/WebP | 85% | < 120KB |
| Avatar | 150x150px | JPEG/WebP | 85% | < 30KB |

### Compressão Online (Grátis)
- **TinyPNG** (tinypng.com) - Excelente qualidade
- **Compressor.io** - Mantém cores vibrantes
- **ImageOptim** (Mac) ou **FileOptimizer** (Windows)

---

## 🎨 Dicas de Estilo para Fotos

### Paleta de Cores
Suas fotos devem combinar com:
- Fundo teal/azul-petróleo (#2d7a7a)
- Tons quentes (pêssego #e8b9a4)
- Verde menta (#a8d5d5)

**Dica:** Roupas em tons verde, azul, branco ou tons quentes vão combinar PERFEITAMENTE com a paleta do site.

### Exemplos
- ✅ Verde escuro (como sua foto atual) = ÓTIMO
- ✅ Branco/Off-white = ÓTIMO
- ✅ Tons de azul = ÓTIMO
- ❌ Laranja vibrante = Evitar
- ❌ Roxo = Evitar

---

## 🚀 Próximas Etapas

1. **Envie as fotos** quando tiver:
   - [ ] Foto com arara (✅ JÁ TEM)
   - [ ] Foto do consultório
   - [ ] Foto atendendo animal
   - [ ] Certificados/formação

2. **Vou integrar** tudo ao site

3. **Otimizarei** para:
   - ✅ SEO (alt text, meta tags)
   - ✅ Performance (lazy loading)
   - ✅ Mobile (responsive)
   - ✅ Velocidade (compressão)

---

## 📝 Checklist - Fotos Ideais

- [ ] Foto de perfil: Sorrir, bem iluminada, confiante
- [ ] Consultório: Limpo, bem iluminado, aconchegante
- [ ] Atendimento: Profissional, cuidadoso com animal
- [ ] Depoimentos: Cliente + pet feliz (com permissão)
- [ ] Certificados: Legíveis (pode desfocar dados pessoais)

---

**Dúvidas sobre como tirar fotos?** Me manda um preview e dou feedback! 📸
