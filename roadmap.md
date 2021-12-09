vNext:

- PWA for `tailblazor-wasm`
- Razor Pages project in `tailblazor-full`
- VSC Watch/Debug configs
- Push templates to nuget.org
- deprecate the Tailblazor-Lite repo

vNextNextish:

- Blazor Maui / Hybrid templates ("TailBlaui" ? lol)
  - Windows + Android

Longer Term:

- Keep up with Minor versions of both .NET and Tailwind, major versions of C#.
  - "Breaking Changes" are determined by release dates of the above, so the template package versioning will be by date: `DateTime.Now.ToString(yyyy.M.d-Hmm)` / 2021.12.4-058
- How to DRY things up ? The above will help, but five or more copies of this content will still be in the repo because self-contained [Runnable Project Templates](https://github.com/dotnet/templating/wiki/Runnable-Project-Templates) is a goal. They share quite a bit:
  - `.razor` Components/Pages will differ only in `namespace`/`using` ?
  - project-level `.css`/`.min.css` will differ only in filename ?
    - `package.json`'s scripts point to these files
  - identical `tailwind.config.js`, `postcss.config.js`, `tailwindcss.targets`, ... ?
  - ... ?
- ... ?
