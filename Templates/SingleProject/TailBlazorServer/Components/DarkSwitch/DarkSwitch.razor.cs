
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace TailBlazorServer.Components;

public partial class DarkSwitch : ComponentBase
{
    [Inject] IJSRuntime JSRuntime { get; set; }

    private Task<IJSObjectReference> module;
    private Task<IJSObjectReference> Module => module ??= JSRuntime.InvokeAsync<IJSObjectReference>( "import", "./Components/DarkSwitch/DarkSwitch.razor.js" ).AsTask();

    private async Task switchTheme()
    {
        var module = await Module;
        await module.InvokeAsync<object>( "toggleTheme" );

    }

    protected override async Task OnAfterRenderAsync( bool firstRender )
    {
        var module = await Module;
        await module.InvokeAsync<object>( "loadTheme" );
        await base.OnAfterRenderAsync( firstRender );
    }
}
