# Ejecutar este proyecto en local

Instrucciones mínimas para levantar la aplicación Next.js (app router) en Windows PowerShell.

Requisitos previos
- Node.js (v18+ recommended)
- pnpm (recomendado). Instálalo globalmente si no lo tienes:

```powershell
npm install -g pnpm
```

Pasos rápidos

```powershell
# instalar dependencias
pnpm install

# levantar en modo desarrollo (localhost:3000)
pnpm dev
```

Scripts útiles (definidos en `package.json`)
- `pnpm dev` — `next dev`
- `pnpm build` — `next build`
- `pnpm start` — `next start`
- `pnpm lint` — `eslint .`

Notas del proyecto
- Router: usa Next.js App Router. Las rutas están en la carpeta `app/`.
- Estilo/UI: Tailwind + componentes en `components/ui/` (usa CVA y `cn()` para mezclar clases).
- Alias de import: `@/` mapea a la raíz del proyecto (ver `tsconfig.json`).
- `next.config.mjs` tiene `typescript.ignoreBuildErrors: true`, por lo que "build" puede pasar aun con errores de TS.

Archivos de entorno
- No hay variables secretas requeridas descubiertas en el código. Si necesitas un archivo de entorno, copia `.env.local.example` a `.env.local` y edítalo.

Problemas comunes
- Si la app no inicia, confirma la versión de Node y que `pnpm install` terminó sin errores.
- Si ves errores de TypeScript en el editor pero la compilación funciona, recuerda la configuración de `next.config.mjs`.

Si quieres, puedo añadir scripts de ayuda (por ejemplo, un `dev.ps1` que abra el navegador, o configuración para Docker). Pídemelo y lo agrego.

Archivos añadidos / comandos útiles

- `dev.ps1` — abre el navegador y lanza `pnpm dev` (PowerShell). Usa `./dev.ps1` desde la raíz del repo.
- `pnpm run dev:open` — atajo definido en `package.json` que abre el navegador y ejecuta `pnpm dev`.
- `pnpm run typecheck` — ejecuta `tsc --noEmit` para verificar tipos sin compilar.
- `pnpm run check` — combinación `typecheck` + `lint`.
- `Dockerfile` + `docker-compose.yml` — ejemplos para ejecutar el proyecto en Docker (dev mode via compose).

Usar Docker (desarrollo)

```powershell
# construir la imagen y levantar con docker-compose
docker compose up --build

# o, en segundo plano
docker compose up --build -d
```

Usar Docker (producción, local)

```powershell
docker build -t my-v0-project .
docker run -p 3000:3000 my-v0-project

CI / Badge
---------------

Puedes añadir un badge de GitHub Actions en la parte superior del `README.md`. Sustituye `OWNER` y `REPO` por los valores reales de tu repositorio:

```md
[![CI](https://github.com/OWNER/REPO/actions/workflows/pr-check.yml/badge.svg)](https://github.com/OWNER/REPO/actions/workflows/pr-check.yml)
```

Instalación rápida de herramientas en Windows
-------------------------------------------

He añadido `setup-windows.ps1` que intenta instalar o comprobar `node`, `pnpm` y `git` usando `winget` cuando está disponible. Si no usas `winget`, instala manualmente:

```powershell
# Node: https://nodejs.org/
# Git: https://git-scm.com/downloads
# pnpm: npm install -g pnpm

# O ejecutar el helper (recomendado si tienes winget):
.\n+./setup-windows.ps1
```
```
