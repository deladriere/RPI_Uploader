## RP2040 Web Uploader (no BOOT/SEL access)

This page lets you reboot an RP2040 into BOOTSEL (UF2) mode and flash a `.uf2` file directly from your browser. It is useful after assembly when the hardware BOOT/SEL buttons are not accessible.

### Requirements
- **Browser**: Chrome or Edge (desktop). Safari is not supported.
- **APIs**: Web Serial and File System Access (automatically available in Chrome/Edge).
- **Context**: Prefer `https://` or `http://localhost/` so the File System Access API works fully.

### Quick Start
1. Open `rp2040-uploader.html` in Chrome/Edge (double-click, or drag it into a new tab).
2. Click **Pick device** and select your RP2040 serial device.
3. Try one of the reboot methods to reach BOOTSEL:
   - **1200-bps touch**: Click **Try 1200-bps touch**. Works if your bootloader/firmware supports the 1200‑bps reset convention.
   - **Custom command**: In "Send custom reboot command", enter the command your firmware expects (e.g. `BOOTSEL` or `REBOOT-BOOTSEL`) and click **Open & send**. Your firmware must call `reset_usb_boot()` when it receives this command.
4. After a successful reboot, the board should reappear as a mass‑storage drive named **RPI-RP2**.
5. Flash firmware:
   - Click **Select UF2 file…** (or enter a **URL** and **Fetch from URL**).
   - Click **Pick RPI-RP2 drive…** and choose the root of the RPI‑RP2 volume.
   - Click **Write UF2 to drive**. The board will reboot when the copy completes.

### Notes
- This tool does not require hardware BOOT/SEL access, but your current firmware must support either the **1200‑bps touch** reset or a **software command** that triggers `reset_usb_boot()`.
- Works entirely in the browser; no drivers or installs are required on supported OSes.

### Troubleshooting
- "Web Serial not available": Use Chrome/Edge (desktop). Some managed environments disable it.
- Drive/UF2 write fails on macOS: System Settings → Privacy & Security → Files and Folders → allow Chrome/Edge access to **Removable Volumes**.
- Windows: If Controlled folder access is enabled, allow Chrome/Edge or temporarily disable that protection.
- If the RPI-RP2 drive isn’t detected, make sure you picked the drive’s root and that the device actually rebooted into BOOTSEL.


