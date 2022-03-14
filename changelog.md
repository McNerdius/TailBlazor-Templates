## 2021-3-14

Misc:

- C# 10 more things where possible
- Latest tailwindcss (3.0.23)
- Update `tailwindcss.targets` files as described [here](https://github.com/McNerdius/TailBlazor/discussions/107#discussioncomment-1920484)

(Projects in `WIP` have not been updated.)

## 2021-1-8

Functional:
- Add (most) VSCode launch configs back in.
- Make `.vscode` folder and `watch` scripts optional:  `vsc` and `ps1` boolean parameters for CLI, default to `true`.  VS integration TBD.
- Trim down DarkSwitch code.  JS code came from a multi-themed project hence the unneeded switch; dark/light theme initialization moved from component's backing code to JS.
- Add WIP Blazor Wasm Hosted project.  Not a template (yet?) as Hot Reload doesn't work well for Hosted project types.
- Add "Blazor Pages" projects: Razor Pages + Tailwind 3 + [Razor Component integration](https://docs.microsoft.com/en-us/aspnet/core/blazor/components/prerendering-and-integration?view=aspnetcore-6.0&pivots=server).  Both single project and an addition to the MultiProject.  Use `_Layout.cshtml` rather than Blazor `MainLayout`.  Hot Reload TBD: might end up in "WIP" folder with Hosted.
- Remove `typography` dependency.
- Update `DarkSwitch` to use explicit values; remove outer padding.
- Add `'!**/{bin,obj,node_modules}/**'` content filter to `tailwind.config.js` 


Content:
-  Split single page in two: 
  1. Landing page.  Meant to use project type's "native" page: `cshtml` for Razor Pages this release, `xaml` for MAUI upcoming, ...
  2. Usage info.  Routable (Razor) Component.
-  Extract "app" CSS to share in `index.html` / `_Layout.cshtml`
-  Add filename footers to pages to visualize layouts.

Misc:
  - Improve site loader a bit: Spinny radial gradient but not face; add text.
  - Remove `<AppendTargetFrameworkToOutputPath>false</AppendTargetFrameworkToOutputPath>` from the `csproj` files and docs: MAUI needs this.

## 2021-12-18

Change `tailblazor-full` solution, namespaces, and generated CSS from "TailBlazor" to "TailBlazorFull". When using the template, `Index.razor`'s informative text would be mangled to include things like "What is Project1?".

## 2021-12-16

Initial NuGet package release with single-project BlazorWasm and BlazorServer templates, and a Multi-Project (Solution) template with BlazorWasm and BlazorServer projects sharing a Razor Class Library.
