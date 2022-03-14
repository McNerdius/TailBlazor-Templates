WIP - Might be a version or two behind the nuget-packaged templates:

- Hosted BlazorWasm - needs a Hot Reload solution. (See issue [#5](https://github.com/McNerdius/TailBlazor-Templates/issues/5))

---

On Hold / Might not happen anytime soon:


- Blazor Hybrid:  There's a lot going on with the default templates, lots of moving parts.  Adapting the default `maui-blazor` is fairly straightforward, much like `blazorwasm`.  WIP is a minimal/single project, multiproject/sln subproject TBD.  Not having any Xamarin/MAUI experience doesn't help; i'd hoped Blazor Hybrid wouldn't be so tied to it.

- PWA for `tailblazor-wasm`.  Original intent was to change the template to include PWA functionality.  Instead, when this happens it will be made a template option.

---

Longer Term:

- Keep up with Minor versions of both .NET and Tailwind, major versions of C#.
  - "Breaking Changes" are determined by release dates of the above, so the template package versioning will be by date: `DateTime.Now.ToString(yyyy.M.d-Hmm)` / 2021.12.4-058
- Nothing that requires preview versions of Visual Studio.  Mostly applies to MAUI stuff as i write this.
- How to DRY things up ? Currently i'm using a script to sync up the projects locally but no way to test and it may be a bit fragile. Five or more copies of certain content will still be in the repo because self-contained [Runnable Project Templates](https://github.com/dotnet/templating/wiki/Runnable-Project-Templates) is a goal. Some is trivial to keep in sync, only differing in filenames and/or namespaces. Other cases are more complex, `index.html` vs `_Layout.cshtml` for instance.
