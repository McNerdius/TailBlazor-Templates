start "dotnet" -ArgumentList "watch run --project:Server" #  -nonewwindow

while (!(Test-Path "./Client/obj/scopedcss/bundle/Client.styles.css")) { sleep -ms 100 } # tailwind needs this file
while (!(Test-Path "./node_modules/.install-stamp")) { sleep -ms 100 } # npm run needs this file 

npm run watch