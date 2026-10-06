/** Caminho de arquivo em `public/`, respeitando o `base` do Vite (GitHub Pages em subpasta ou domínio próprio). */
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`
}
