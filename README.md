![commit](https://img.shields.io/github/last-commit/McNerdius/TailBlazor-Templates)
![deploy](https://img.shields.io/github/workflow/status/McNerdius/TailBlazor-Templates/swa-deploy)

# TailBlazor-Templates

.NET project template for Blazor + Tailwind CSS v3.x

Known issue: Sometimes a "clean" build/run will use intermediate/incomplete CSS when the page first loads.  Reload and you're good to go.

get the template here:

[![package](https://img.shields.io/nuget/vpre/McNerdius.TailBlazorTemplates?style=for-the-badge)](https://www.nuget.org/packages/McNerdius.TailBlazorTemplates/)

> NOTE:  I will publish this version as the pluralized "TailBlazorTemplates", but subsequent versions being released as singular "TailBlazorTemplate" and minus the "preview" flag.

---

## TMI 

I hate CSS.  Blazor + Tailwind CSS was the first combo i could stick with, retain sanity, and not throw the table across the room and give up learning web development for another six months or so - the cycle i'd been in since Angular 4.

It takes a bit of tinkering to integrate the two with an optimal "inner loop" that takes advantage of the best both have to offer.  All how-tos i've seen fall short of this level integration, basically showing off Tailwind CSS and... that's it.  That's likely changed by now, but not by much if the "go to" YouTube conference talk falls short.  As a noob, i feel like a jerk for even saying this, and that i have no business offering a template to a community more knowledgeable than i am.  Yet the fact remains that all tutorials and how-to videos i've seen omit what i consider to be essentials in *any* Blazor + Tailwind CSS combo.  So i put together this project for myself and the community.

---

## Fast forward

All of this being said, Blazor is not the right tool for the sort of sites i'm building.  It's just too heavy.  I've moved on to learning [Lit](www.lit.dev) (how did i not hear of this ages ago ?) for these bloggy / jamstack sorts of things.

But i also hate XAML.  Steve Sanderson's [WebWindow](https://blog.stevensanderson.com/2019/11/18/2019-11-18-webwindow-a-cross-platform-webview-for-dotnet-core/) project and subsequent rumors of "Blazor Desktop" got me quite giddy for the future of Blazor.  However, "Blazor Hybrid" is a different beast entirely.

So this leaves me with not much use for Blazor at the moment.  I will get back to it, to supplement Lit-based sites, and keep my eye on [Blazor United](https://www.youtube.com/watch?v=kIH_Py8ytlY).

Getting to the point: i'm trimming this project down to what it was originally: a single template based on `blazorwasm`, fully integrating the features of both Blazor and Tailwind CSS.  The differences between `blazorwasm` and `blazorserver`, etc are pretty straightforward - different paths, imports in different files, and so on.  The pieces are the same, they just go in different places.

I will still be maintaining this template and `tailblazor.dev`, as i do enjoy and use it sometimes, and always with Tailwind CSS.

---

### tailblazor.dev & tailblazor-templates todo:

Both will be moved to .NET 7.  The only functional difference will be making use of the new [progress properties](https://devblogs.microsoft.com/dotnet/asp-net-core-updates-in-dotnet-7-preview-7/#new-blazor-loading-page).

- [ ] Ensure `settings.json` are up to date: things like `explorer.fileNesting`, `terminal.integrated.autoReplies`, etc.
- [ ] Make sure tasks and watch scripts are up to date.

## tailblazor.dev:

- [ ] Setup steps now take advantage of the new empty (bootstrap-free) template.
- [ ] Make home page more of a hybrid TOC / "What's in the box" landing page for `tailblazor-templates` users.
- [ ] Flatten things out a bit, consider breaking it down differently.
  * For instance, put everything related to VS, VS Code, `dotnet` CLI in one location rather than peppered throughout.
- [ ] Make sure to mention suggested vscode settings.
- [ ] Finish the "see also" page and link it.
- [ ] mention wasm tools
- [ ] @import gotcha re: QuickGrid / other external stuff
- [ ] Other current issues
- [ ] ...
