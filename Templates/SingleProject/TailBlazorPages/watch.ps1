start "dotnet" -ArgumentList "watch" # -nonewwindow

while (!(Test-Path "./obj/net6.0/scopedcss/bundle/TailBlazorPages.styles.css")) { sleep -ms 100 } # tailwind needs this file
while (!(Test-Path "./node_modules/.install-stamp")) { sleep -ms 100 } # npm run needs this file 

npm run watch