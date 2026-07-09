# Privacy

DOMShot captures selected webpage elements as PNG images.

## Chrome Extension

The Chrome extension can access visible website content when you start a capture. It uses that access to highlight elements, capture the selected DOM node, render a preview, and export a PNG.

Website content may include text, images, links, and visual styling from the selected page element. The generated PNG is saved to your computer when you download it.

DOMShot may store your theme preference and may temporarily store the most recent capture in Chrome local extension storage so the preview can be reopened in the same browser.

## Agent Package

The agent package runs in the user or developer environment where it is installed. It can access pages through Playwright, Chrome DevTools Protocol, or an explicit browser profile chosen by the user.

Any page content, screenshots, paths, browser profiles, cookies, or login state involved in that workflow remain in the local automation environment unless the user, agent host, or surrounding application stores or shares them separately.

DOMShot does not operate a hosted screenshot service for agent captures.

## Data Sharing

DOMShot does not sell user data. DOMShot does not use user data for advertising, analytics dashboards, creditworthiness, or lending purposes.

## Remote Code

The Chrome extension does not load or execute remotely hosted code. All JavaScript used by the extension is packaged with the extension.

The agent package depends on standard npm dependencies installed in the local project environment.

## Contact

For privacy questions about DOMShot, contact `me@rubenruiz.dev`.

