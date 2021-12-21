vNext:

- PWA for `tailblazor-wasm`
- Add Razor Pages projects back in
- VSC Watch/Debug configs

vNextNextish:

- Add Hosted BlazorWasm template, pending a Hot Reload solution. (See issue [#5](https://github.com/McNerdius/TailBlazor-Templates/issues/5))
- Blazor Maui / Hybrid templates ("TailBlaui" ? lol)
  - Windows + Android

Longer Term:

- Keep up with Minor versions of both .NET and Tailwind, major versions of C#.
  - "Breaking Changes" are determined by release dates of the above, so the template package versioning will be by date: `DateTime.Now.ToString(yyyy.M.d-Hmm)` / 2021.12.4-058
- How to DRY things up ? Currently i'm using a script to sync up the projects locally but no way to test and it may be a bit fragile. Five or more copies of certain content will still be in the repo because self-contained [Runnable Project Templates](https://github.com/dotnet/templating/wiki/Runnable-Project-Templates) is a goal. Some is trivial to keep in sync, only differing in filenames and/or namespaces. Other cases are more complex, `index.html` vs `_Layout.cshtml` for instance.
