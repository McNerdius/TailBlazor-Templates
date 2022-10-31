start "dotnet" -ArgumentList "watch" # -nonewwindow

while (!(Test-Path "./obj/net7.0/scopedcss/bundle/TailBlazorServer.styles.css")) { sleep -ms 100 } # tailwind needs this file
while (!(Test-Path "./node_modules/.install-stamp")) { sleep -ms 100 } # npm run needs this file 

npm run watch
