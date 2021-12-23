## vNext

* Add VSCode launch configs back in.
* Add WIP Blazor Wasm Hosted project.  Not a template (yet?) as Hot Reload doesn't work well for Hosted project types.

## 2021-12-18

Change `tailblazor-full` solution, namespaces, and generated CSS from "TailBlazor" to "TailBlazorFull". When using the template, `Index.razor`'s informative text would be mangled to include things like "What is Project1?".

## 2021-12-16

Initial NuGet package release with single-project BlazorWasm and BlazorServer templates, and a Multi-Project (Solution) template with BlazorWasm and BlazorServer projects sharing a Razor Class Library.
