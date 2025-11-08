<#
  setup-windows.ps1
  Helper script to ensure Node, pnpm and Git are available on Windows.
  It will attempt to use winget when available, otherwise it will print instructions.

  Usage: Run in an elevated PowerShell or normal PowerShell and follow prompts.
#>

function Command-Exists {
  param([string]$cmd)
  $null -ne (Get-Command $cmd -ErrorAction SilentlyContinue)
}

Write-Host "Comprobando herramientas necesarias..." -ForegroundColor Cyan

if (-not (Command-Exists node)) {
  Write-Host "Node.js no está instalado." -ForegroundColor Yellow
  if (Command-Exists winget) {
    Write-Host "Instalando Node.js LTS con winget..." -ForegroundColor Green
    winget install --id OpenJS.NodeJS.LTS -e --accept-package-agreements --accept-source-agreements
  } else {
    Write-Host "Por favor instala Node.js LTS manualmente desde https://nodejs.org/" -ForegroundColor Red
  }
} else {
  Write-Host "Node.js encontrado:" (node --version)
}

if (-not (Command-Exists pnpm)) {
  Write-Host "pnpm no está instalado. Intentando instalar via npm..." -ForegroundColor Yellow
  if (Command-Exists npm) {
    npm install -g pnpm
    Write-Host "pnpm instalado:" (pnpm --version)
  } else {
    Write-Host "npm no está disponible; instala Node.js primero." -ForegroundColor Red
  }
} else {
  Write-Host "pnpm encontrado:" (pnpm --version)
}

if (-not (Command-Exists git)) {
  Write-Host "Git no está instalado." -ForegroundColor Yellow
  if (Command-Exists winget) {
    Write-Host "Instalando Git con winget..." -ForegroundColor Green
    winget install --id Git.Git -e --accept-package-agreements --accept-source-agreements
  } else {
    Write-Host "Por favor instala Git desde https://git-scm.com/downloads" -ForegroundColor Red
  }
} else {
  Write-Host "Git encontrado:" (git --version)
}

Write-Host "Instalación/Comprobación finalizada. Ejecuta: pnpm install && pnpm dev" -ForegroundColor Cyan
