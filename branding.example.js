// Your own names for the uploader page.  To use it:
//
//     cp branding.example.js branding.js
//
// then edit branding.js.  branding.js is in .gitignore, so it is never
// committed, and updating the uploader never conflicts with it.  Without
// branding.js, the page uses its generic RP2040/RP2350 defaults.  Leave out
// anything you don't want to change: it keeps its default.
window.UPLOADER_BRANDING = {
    title: 'Example Firmware Uploader',     // heading
    tab: 'Example Firmware Uploader',       // browser tab
    badge: 'v1.0',                          // next to the heading
    device: 'Example board',                // "Select your ... via serial port"
    // What each chip's bootloader drive is called on the page.
    chips: { rp2040: 'RPI-RP2 (Example Mini)', rp2350: 'RP2350 (Example Pro)' },
};
