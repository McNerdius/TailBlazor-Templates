## vNext

* Add VSCode launch configs back in.
* Make `.vscode` folder and `watch` scripts optional.
* Improve site loader a bit: Spinny radial gradient but not face; add text.
* Trim down DarkSwitch code.  JS code came from a multi-themed project hence the unneeded switch; dark/light theme initialization moved from component's backing code to JS.
* Add WIP Blazor Wasm Hosted project.  Not a template (yet?) as Hot Reload doesn't work well for Hosted project types.
* Add "Blazor Pages" projects: Razor Pages + Tailwind 3 + [Razor Component integration](https://docs.microsoft.com/en-us/aspnet/core/blazor/components/prerendering-and-integration?view=aspnetcore-6.0&pivots=server).  Both single project and an addition to the MultiProject.  Hot Reload TBD: might end up in "WIP" folder with Hosted.

## 2021-12-18

Change `tailblazor-full` solution, namespaces, and generated CSS from "TailBlazor" to "TailBlazorFull". When using the template, `Index.razor`'s informative text would be mangled to include things like "What is Project1?".

## 2021-12-16

Initial NuGet package release with single-project BlazorWasm and BlazorServer templates, and a Multi-Project (Solution) template with BlazorWasm and BlazorServer projects sharing a Razor Class Library.
