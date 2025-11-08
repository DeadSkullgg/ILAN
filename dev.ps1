<#
  PowerShell helper to start the dev server and open the browser.
  Usage: ./dev.ps1  (run from the project root in PowerShell)
#>

# Open default browser on localhost:3000
Start-Process "http://localhost:3000"

# Spawn a new PowerShell window and run the dev server there.
# -NoExit keeps the window open so you can see logs.
Start-Process -FilePath "powershell" -ArgumentList '-NoProfile','-ExecutionPolicy','Bypass','-NoExit','-Command','pnpm dev'
