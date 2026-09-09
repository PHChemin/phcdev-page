# Deploy — GitHub Pages e domínio

## 1. Ativar Pages com Actions (uma vez por repo)

1. No GitHub: **Settings → Pages**
2. Em **Build and deployment → Source**, escolha **GitHub Actions**
3. Faça push na `main` (ou rode o workflow manualmente em **Actions**)
4. O workflow `.github/workflows/deploy.yml` faz: `npm ci` → `npm run build` → publica `dist/`

Site padrão: `https://SEU_USER.github.io/NOME_DO_REPO/`

> Se a URL for *project page* (`/NOME_DO_REPO/`) e os CSS/JS quebrarem, descomente `VITE_BASE_PATH` no workflow com o nome do repo. Com domínio custom e `base: './'`, em geral não precisa.

## 2. Domínio personalizado

Documentação oficial: [Configuring a custom domain](https://docs.github.com/pt/pages/configuring-a-custom-domain-for-your-github-pages-site).

### No GitHub

1. **Settings → Pages → Custom domain**
2. Digite o domínio (ex.: `www.cliente.com.br` ou `linktree.cliente.com.br`)
3. Salve e aguarde a checagem DNS
4. Depois de ok, marque **Enforce HTTPS**

### No DNS do domínio (registrador)

**Subdomínio (recomendado para linktree / vitrine)**

| Tipo | Nome | Valor |
| --- | --- | --- |
| CNAME | linktree (ou www) | `SEU_USER.github.io` |

**Opção apex (cliente.com.br)**

| Tipo | Nome | Valor |
| --- | --- | --- |
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |
| CNAME | www | `SEU_USER.github.io` |

Propagação: minutos a 48h. Enquanto isso o `*.github.io` já funciona.

### Atenção

- Domínio tem custo anual (geralmente do cliente) — hospedagem Pages é R$ 0.
- Se desativar o Pages com DNS ainda apontando, risco de *domain takeover*. Remova o custom domain e limpe o DNS ao encerrar o projeto.

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
- [ ] WhatsApp / e-mail / redes testados no ar
