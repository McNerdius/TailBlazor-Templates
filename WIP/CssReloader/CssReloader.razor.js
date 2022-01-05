const styleFallback = document.querySelector("#flickerPreventerFallback");
const style = document.querySelector("link[id='override']");

export function initializeCssReload()
{
    setInterval(() =>
    {
        const stylesheet = Array.from(document.styleSheets).filter(x => x.ownerNode === style)[0];
        const content = Array.from(stylesheet.cssRules).map(rule => rule.cssText).join(' ');

        styleFallback.innerHTML = content;
        const oldHref = style.href;
        style.href = "";
        style.href = oldHref;
    }, 500)
}