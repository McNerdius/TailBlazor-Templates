![activity](https://img.shields.io/github/commit-activity/m/McNerdius/TailBlazor-Templates)
![commit](https://img.shields.io/github/last-commit/McNerdius/TailBlazor-Templates)
![deploy](https://img.shields.io/github/workflow/status/McNerdius/TailBlazor-Templates/swa-deploy)

---

get the templates here:

[![package](https://img.shields.io/nuget/vpre/McNerdius.TailBlazorTemplates?style=for-the-badge)](https://www.nuget.org/packages/McNerdius.TailBlazorTemplates/)

---

Known issue with the WebAssembly projects(?): Sometimes a "clean" build/run will use intermediate/incomplete CSS when the page first loads.  Just reload and you're good to go.

---

# Next up for the templates:

* A lighter-weight landing page geared toward "getting started" (where ur CSS goes, troubleshooting, ...) rather than the current background/meta stuff.
* A DI setup.  Maybe some form of the "random person card" thing from the old templates.
* ... ?

---

# TailBlazor-Templates

.NET project templates for Blazor + Tailwind CSS v3.1

the `Templates` folder is a set of [runnable project templates](https://github.com/dotnet/templating/wiki/Runnable-Project-Templates), meant to show how i integrate Tailwind CSS into Blazor projects. The template itself is a tl;dr of some of the steps taken to set the project up, and is hosted at [tailblazor.net](https://www.tailblazor.net). More details at [tailblazor.dev](https://www.tailblazor.dev).

The "runnable template" aspect means it can be browsed/cloned/run as-is, but omits the options included in .NET's built-in templates. (Punch in `dotnet new blazorwasm -h` to see _many_ options.) However, once one has seen the steps taken to integrate Tailwind JIT / incremental builds with Blazor's Hot Reload & Scoped CSS, it shouldn't be too hard to transfer over to one created using a built-in template's options.

| path                    | template            | notes                                                                                                                                                                                               |
| :---------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Template/SingleProject/ |                     |                                                                                                                                                                                                     |
| -- TailBlazorWasm       | `tailblazor-wasm`   | `dotnet new blazorwasm` + Tailwind CSS 3                                                                                                                                                            |
| -- TailBlazorServer     | `tailblazor-server` | `dotnet new blazorserver` + Tailwind CSS 3                                                                                                                                                          |
| -- TailBlazorPages      | `tailblazor-pages ` | `dotnet new razor` + Tailwind CSS 3 + [Razor Components integration](https://docs.microsoft.com/en-us/aspnet/core/blazor/components/prerendering-and-integration?view=aspnetcore-6.0&pivots=server) |
| Templates/MultiProject  | `tailblazor-full`   | multiple hosts for Razor Components using Tailwind CSS                                                                                                                                              |
| -- RazorClassLibrary    |                     | where all the UI lives                                                                                                                                                                              |
| -- BlazorWasm           |                     | boilerplate                                                                                                                                                                                         |
| -- BlazorServer         |                     | boilerplate                                                                                                                                                                                         |
| -- BlazorPages          |                     | boilerplate + [integration](https://docs.microsoft.com/en-us/aspnet/core/blazor/components/prerendering-and-integration?view=aspnetcore-6.0&pivots=server)                                          |

---

WIP/Hosted is a tweaked `dotnet new blazorwasm --hosted`, but Hot Reload isn't working.  It will not be in the nuget package unless/until Hot Reload can be made to work. See [issue #5](https://github.com/McNerdius/TailBlazor-Templates/issues/5).

A Blazor Maui subproject for the MultiProject template will happen when the tooling improves.

## Q/A

- What's with the project names ?

The main project names are swapped out when/if the template is used. Any appearance of, say, "TailBlazorWasm" would become "Project1" or whatever you provide using `-n` in `dotnet new` or your IDE's equivalent. This includes filenames and namespaces.
