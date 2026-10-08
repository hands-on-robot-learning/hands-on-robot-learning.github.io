Week 06 — Standalone interactive demos

Quick start
Open index.html to browse the demos, or open any individual HTML file directly.
all-demos.html contains every chapter in a single self-contained file.
Each numbered HTML file opens only its own demo, with no chapter navigation.
embedding-example.html is a working iframe example that references
03-reverse-sampling.html. It is an integration example, not a standalone demo.

Hosting
Upload any individual HTML file to any static host (including GitHub Pages).
No build step, package installation, server-side code, external scripts, remote
fonts, API keys, network access, or companion asset folders are required.
Keep JavaScript enabled. Current desktop Chrome, Safari, Firefox, and Edge can
run the canvas demos. Small screens can pan across the figure.

Embedding example (replace the example path to match your site)
<iframe src="/demos/week06/03-reverse-sampling.html?embed=1"
  title="Diffusion: reverse sampling" width="100%" height="900"
  style="border:0;display:block" loading="lazy"></iframe>

The optional ?embed=1 mode hides the course header/footer and collapses the
explanation. It retains the controls, an About section, and an Open full view
link. It does not communicate with or modify its parent page. Adjust iframe
height for your layout; inner scrolling remains available. No parent scripts
are needed. The all-in-one file supports chapter hashes, for example:
all-demos.html?embed=1#08-flow-matching

If your website has a strict Content Security Policy, the standalone file needs
inline scripts/styles and data: fonts permitted within its own document.
If adding an iframe sandbox, permit scripts, same-origin for local embedded-font
loading, and popups for reference / full-view links. No sandbox is required.

Controls
Play/Pause runs the scripted walkthrough. The progress slider and Step button
scrub that walkthrough. Changing a parameter switches to manual exploration.
Reset restores the parameter defaults. Presentation view hides surrounding text.
When focus is outside a control: Space plays/pauses, arrows step, R resets.
Escape exits presentation view. Native keyboard controls work on sliders.

Scientific scope
The analytic Gaussian-mixture denoiser is exact for the toy distribution.
The diffusion and flow models contain actual learned weights. Action paths,
Ambient intuition, and execution examples are teaching illustrations; they do
not reproduce full robot-policy implementations. Per-demo explanations state
the assumptions, scope, and paper references.

Fonts
Embedded Lato / Lato Light (Lato project) and STIXGeneral (STIX Fonts project).
Lato: https://www.latofonts.com/
STIX: https://github.com/stipub/stixfonts
The embedded math font keeps notation independent of fonts on the viewer's PC.
Font copyright and license metadata are retained in the unmodified embedded
fonts, in each demo's HTML source, and in FONT-NOTICES.txt.

Files
01-multimodality.html — What should the policy predict?
02-forward-noise.html — What does adding noise do to a distribution?
03-reverse-sampling.html — Can we turn noise into a useful sample?
04-learned-denoiser.html — What does the network actually learn?
05-sampling-steps.html — How many model calls do we need?
06-action-chunks.html — Denoising an entire action chunk
07-conditioning.html — Same noise, different observations
08-flow-matching.html — Learning a velocity field
09-ambient.html — Which parts of an imperfect demonstration are useful?
10-noise-tickets.html — One policy, several noise inputs
11-guidance-composition.html — Choosing where generated actions should go
12-execution.html — The robot keeps moving during inference
13-rtc.html — Connecting the next chunk to the current one
14-continuity.html — Smoothness and reactivity are different measurements
