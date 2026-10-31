# Meridian planning explorer

Serve this directory with any static HTTP server, then open index.html. Internet access is required for Three.js, Chart.js, Tailwind and Google Fonts.

The responsive explorer provides Map, Scenarios and Community views below 900px and side panels on larger screens. The Station Road case compares the supplied algorithm and community scenarios. Demo data & methods explains the provenance and limitations.

All scenario values, reports and geography are illustrative and unverified. Resource and commute deltas are calculated from communityData.js through the existing metrics engine. There is no production backend or secure authentication. Submitted reports are not shared across users.

Original ZIP was preserved. Main changes are in index.html, css/improvements.css, js/improvements.js, js/app.js and the login disclaimer.

## Real geography view
Open real-map.html for OpenStreetMap roads and building footprints served by OpenFreeMap and rendered with MapLibre GL JS 5.6.1. Internet access is required. Heights may be inferred/defaulted and footprints may be incomplete. The original scenario model is separate and does not operate on this real road network. Sources: https://openfreemap.org/quick_start/ and https://maplibre.org/ .

## Real road comparison and field notes
The real-map page now calculates shortest walking distances over an OSM-derived graph of 955 nodes and 1,041 segments near Kurla station. Select endpoints, close one segment, and compare an alternative. The bundled example uses a hypothetical closure on A H Wadia Marg (not a real closure report). Its original route is approximately 405 m and its alternative is approximately 1,384 m.

The source extract was retrieved directly from the OSM API on 2026-10-30 and is distributed in data/kurla-roads.json with provenance, bounding box and ODbL attribution. Routes are bounded to that study area. Endpoint gaps, traffic, full turn/barrier restrictions, conditional access and accessibility are not modeled. See the in-app assumptions for details. The real graph powers this comparison only; the older sample scenario dashboard remains separate.

Local notes support coordinates, observation text, optional evidence URL, persistent browser storage, removal and JSON export. Notes remain unverified and are not uploaded. No shared backend or authority workflow is implemented. Detailed photographic buildings and verified heights still require additional sources.

Validation: original and detour distance sums checked; detour excludes blocked edge; same-point, disconnected and out-of-range snapping checked; foot one-way and private-way exclusion checked. Browser checks covered example comparison, 2D/3D controls, local-note persistence after reload, removal and responsive layouts. No browser console errors observed.

## Vidyavihar support
Use the top-bar Area selector or open real-map.html?area=vidyavihar. Both Kurla and Vidyavihar have area-specific road extracts, examples, home locations, downloads and local-note storage. The 2D/3D toggle is always available in the top bar.

Vidyavihar: OSM extract retrieved 2026-10-30; 1,335 graph nodes and 1,472 segments. Station centre comes from the retrieved OSM station node (72.8971169, 19.0795422). Example route: approximately 233 m versus 496 m with a hypothetical 35 m segment closure on an unnamed living street. This is not a reported real closure. Coverage is limited to the supplied study area, and estimated building-height and routing limitations still apply.

Validated both area examples and switching between areas; Vidyavihar 3D map renders without browser console errors.
