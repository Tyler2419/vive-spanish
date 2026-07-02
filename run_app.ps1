$ErrorActionPreference = "Stop"

$appDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $appDir

$port = 8765
while (Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue) {
  $port += 1
}

$localIp = (Get-NetIPAddress -AddressFamily IPv4 |
  Where-Object { $_.IPAddress -notlike "127.*" -and $_.PrefixOrigin -ne "WellKnown" } |
  Select-Object -First 1 -ExpandProperty IPAddress)

Write-Host "Vive Spanish is running:"
Write-Host "  This PC:  http://localhost:$port"
if ($localIp) {
  Write-Host "  Phone:    http://$localIp`:$port"
}
Write-Host "Press Ctrl+C to stop."

python -m http.server $port --bind 0.0.0.0
