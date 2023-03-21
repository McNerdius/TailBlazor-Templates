dotnet new blazorwasm-empty
npm init --yes 
npm install -D tailwindcss
tailwindcss init --postcss
set tailwind.config.js `content`

* CLARIFY TAILBLAZOR.DEV SETUP SECTION SPECIFYING CSHTML

postcss.config.js defaults
create boilerplate css

DEMONSTRATE MANUAL CLI FOR BUILDING IT

add npm scripts
add targets file
add targets to csproj
add watch.ps1

<IntermediateOutputPath>obj</IntermediateOutputPath> and friends

@import "./obj/net6.0/scopedcss/bundle/site.styles.css";

^^ nuke net6.0

update watch script
add nesting to postcss config
mention tailwindcss-debug-screens & usage

DUMP RCL RAMBLINGS.  Merge tailwindcss-debug-screens elsewhere and dump "Next" page altogether ? 

scoped or no ?
* point out the build-order issue thingy here












IMPROVE APP DIV LOADER BC EMPTY NO HAZ
