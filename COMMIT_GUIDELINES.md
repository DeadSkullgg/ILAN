# Guía de mensajes de commit (Español)

Por favor escribe tus mensajes de commit en español.
A continuación tienes una plantilla y ejemplos recomendados.

Formato sugerido (convenio tipo conventional commits, en español):

- feat: añadir funcionalidad nueva
- fix: corregir bug
- docs: actualizar documentación
- chore: tareas de mantenimiento (formato, dependencias)
- refactor: reestructuración sin cambio de comportamiento
- test: añadir/actualizar tests

Ejemplos:

- feat(login): mejorar diseño de la página de inicio de sesión
- fix(api): validar correctamente el token en /api/auth
- docs: añadir guía de commits en español

Instalación de hooks (recomendado):
1. Ejecuta el script para copiar los githooks a tu carpeta local de git:

   PowerShell:
   ```powershell
   .\scripts\install-githooks.ps1
   ```

Esto colocará un hook que muestra un recordatorio para escribir los commits en español.

Notas:
- El hook incluido solo muestra un recordatorio y no bloquea commits.
- Si quieres un hook más estricto (bloqueo), puedo implementarlo al pedirlo.
