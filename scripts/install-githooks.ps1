# Copia los hooks desde .githooks a .git/hooks para habilitarlos localmente (Windows PowerShell)
# Ejecuta desde la raíz del repositorio: .\scripts\install-githooks.ps1

$sourceDir = Join-Path -Path (Get-Location) -ChildPath ".githooks"
$destDir = Join-Path -Path (Get-Location) -ChildPath ".git\hooks"

if (-not (Test-Path $sourceDir)) {
    Write-Error "No existe la carpeta .githooks en la raíz del repositorio."
    exit 1
}

if (-not (Test-Path $destDir)) {
    Write-Error "No parece existir la carpeta .git/hooks. Asegúrate de haber inicializado el repo git localmente."
    exit 1
}

Get-ChildItem -Path $sourceDir -File | ForEach-Object {
    $dest = Join-Path $destDir $_.Name
    Copy-Item -Path $_.FullName -Destination $dest -Force
    # Intentamos hacer ejecutable (si Git Bash o similar lo respeta)
    try {
        & git update-index --add --chmod=+x ".git/hooks/$($_.Name)" | Out-Null
    } catch {
        # Ignorar si no disponible
    }
    Write-Host "Hook instalado: $($_.Name)"
}

Write-Host "Instalación de githooks completada."
