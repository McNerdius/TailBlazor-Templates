![activity](https://img.shields.io/github/commit-activity/m/McNerdius/TailBlazor-Templates)
![commit](https://img.shields.io/github/last-commit/McNerdius/TailBlazor-Templates)
![deploy](https://img.shields.io/github/workflow/status/McNerdius/TailBlazor-Templates/swa-deploy)

---

get the templates here:

[![package](https://img.shields.io/nuget/vpre/McNerdius.TailBlazorTemplates?style=for-the-badge)](https://www.nuget.org/packages/McNerdius.TailBlazorTemplates/)

---

# TailBlazor-Templates

.NET project templates for Blazor + Tailwind CSS v3

the `Templates` folder is a set of [runnable project templates](https://github.com/dotnet/templating/wiki/Runnable-Project-Templates), meant to show how i integrate Tailwind CSS into Blazor projects. The template itself is a tl;dr of some of the steps taken to set the project up, and is hosted at [tailblazor.net](https://www.tailblazor.net). More details at [tailblazor.dev](https://www.tailblazor.dev).

The "runnable template" aspect means it can be browsed/cloned/run as-is, but omits the options included in .NET's built-in templates. (Punch in `dotnet new blazorwasm -h` to see _many_ options.) However, once one has seen the steps taken to integrate Tailwind JIT / incremental builds with Blazor's Hot Reload & Scoped CSS, it shouldn't be too hard to transfer over to one created using a built-in template's options.

| path                    | template            | notes                                                  |
| :---------------------- | :------------------ | :----------------------------------------------------- |
| Template/SingleProject/ |                     |                                                        |
| -- TailBlazorWasm       | `tailblazor-wasm`   | Tailwind CSS 3 version of `dotnet new blazorwasm`      |
| -- TailBlazorServer     | `tailblazor-server` | Tailwind CSS 3 version of `dotnet new blazorserver`    |
| Templates/MultiProject  | `tailblazor-full`   | multiple hosts for Razor Components using Tailwind CSS |
| -- RazorClassLibrary    |                     | where all the UI lives                                 |
| -- BlazorWasm           |                     | boilerplate                                            |
| -- BlazorServer         |                     | boilerplate                                            |

---

There is a `hosted-template` branch, a tweaked `dotnet new blazorwasm --hosted`, but Hot Reload isn't working. When i get the branch current i will merge it but it will not be in the nuget package unless/until Hot Reload can be made to work. See [issue #5](https://github.com/McNerdius/TailBlazor-Templates/issues/5).

More single-project templates and subprojects for the `tailblazor-full` template will be added. Blazor/MAUI hybrid stuff as well.
