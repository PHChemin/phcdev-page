# Deploy — GitHub Pages e domínio

## 1. Ativar Pages com Actions (uma vez por repo)

1. No GitHub: **Settings → Pages**
2. Em **Build and deployment → Source**, escolha **GitHub Actions**
3. Faça push na `main` (ou rode o workflow manualmente em **Actions**)
4. O workflow `.github/workflows/deploy.yml` faz: `npm ci` → `npm run build` → publica `dist/`

Site padrão: `https://PHChemin.github.io/phcdev-page/`

> Se a URL for *project page* (`/phcdev-page/`) e os CSS/JS quebrarem, descomente `VITE_BASE_PATH` no workflow com o nome do repo. Com domínio custom e `base: './'`, em geral não precisa.

## 2. Domínio personalizado

Documentação oficial: [Configuring a custom domain](https://docs.github.com/pt/pages/configuring-a-custom-domain-for-your-github-pages-site).

### Domínios Phc.Dev (orientação)

| Site | Repo | Domínio sugerido |
| --- | --- | --- |
| One-page (este) | `phcdev-page` | `www.phcdev.com.br` (a confirmar) |
| Presença / bio | `phcdev` | `linktree.phcdev.com.br` |

### No GitHub

1. **Settings → Pages → Custom domain**
2. Digite o domínio (ex.: `www.phcdev.com.br`)
3. Salve e aguarde a checagem DNS
4. Depois de ok, marque **Enforce HTTPS**

### No DNS do domínio (registrador)

**Opção A — só www (mais simples)**

| Tipo | Nome | Valor |
| --- | --- | --- |
| CNAME | www | `PHChemin.github.io` |

**Opção B — apex (phcdev.com.br)**

| Tipo | Nome | Valor |
| --- | --- | --- |
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |
| CNAME | www | `PHChemin.github.io` |

Propagação: minutos a 48h. Enquanto isso o `*.github.io` já funciona.

### Atenção

- Domínio tem custo anual — hospedagem Pages é R$ 0.
- Se desativar o Pages com DNS ainda apontando, risco de *domain takeover*. Remova o custom domain e limpe o DNS ao encerrar.

## 3. Fluxo local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # testa o build
```

## 4. Checklist de entrega

- [ ] Source do Pages = GitHub Actions
- [ ] Último workflow em verde
- [ ] Domínio configurado (se houver) + HTTPS
- [ ] WhatsApp / redes testados no ar
