
dotnet build -p:TailwindBuild=false
start "dotnet" -ArgumentList "watch" 
while (!(Test-Path "./obj/scopedcss/bundle/TailBlazorWasm.styles.css")) { sleep -ms 100 } 
while (!(Test-Path "./node_modules/.package-lock.json")) { sleep -ms 100 } 
npm run watch
