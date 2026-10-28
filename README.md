## RP2040 / RP2350 Web Uploader v1.2 (no BOOT/SEL access)



![Interface](Interface.png)

This page lets you reboot an RP2040 or RP2350 into BOOTSEL (UF2) mode and flash a `.uf2` file directly from your browser. It is useful after assembly when the hardware BOOT/SEL buttons are not accessible.

**Important**: The board must already run firmware that supports the 1200 bps "touch" method (e.g., CircuitPython, Arduino with native USB). Blank boards or boards without this support require hardware BOOTSEL button access.

### Requirements
- **Browser**: Chrome or Edge (desktop). Safari and Firefox are not supported.
- **APIs**: Web Serial and File System Access (automatically available in Chrome/Edge).
- **Usage**: Simply open the HTML file directly in your browser (double-click or drag to browser tab).

### Quick Start
1. Open `rp2040-uploader.html` in Chrome/Edge (double-click, or drag it into a new tab).
2. **Step 1 - Connect Device**: Click **Pick Device** and select your RP2040 or RP2350 serial device.
3. **Step 2 - Start Bootloader**: Click **Reboot to Bootloader**. This uses the 1200‑bps touch method to reboot the device into BOOTSEL mode. The serial port will disappear when successful.
4. **Step 3 - Confirm/Pick Drive**: After reboot, click **Pick Bootloader Drive** and select the root of the volume that appears on your computer: **RPI-RP2** for an RP2040, **RP2350** for an RP2350. The page reads the drive's `INFO_UF2.TXT` to tell which chip it is.
5. **Step 4 - Upload Firmware**: 
   - Click **Select UF2 File** (or enter a **URL** and click **Fetch from URL**).
   - Click **Write UF2 to Drive**. The board will reboot when the copy completes.
   - The page checks the file first: it won't write a file that isn't a UF2, or a UF2 that has nothing for the board's chip (its UF2 family IDs: the bootrom would ignore it). A UF2 with firmware for both chips is fine.

Optional Query String Parameters:
- `uf2_url`: Fills in the URL in the Upload Firmware step, so the user only needs to click "Fetch from URL" without pasting a link.
  - For example: `https://domain.com/rp2040-uploader.html?uf2_url=https://domain.com/firmware.uf2`
  - URL can also be relative.  For example: `https://domain.com/rp2040-uploader.html?uf2_url=firmware.uf2` will load `https://domain.com/firmware.uf2`

Rebranding: to put your own names on the page, copy `branding.example.js` to `branding.js` (next to `rp2040-uploader.html`) and edit it: the heading, the browser tab title, the badge next to the heading, what the device is called in step 1, and what each chip's drive is called. Anything you leave out keeps its default. `branding.js` is in `.gitignore`, so it's never committed and pulling a newer uploader never conflicts with it. Without it, the page uses its generic RP2040/RP2350 names.

### Alternative: Just Boot (Simpler)

![Just Boot Interface](justboot.png)

For a minimal approach, use `just_boot.html`. This tool only triggers bootloader entry via the 1200-bps touch method. After the device reboots, you manually drag the `.uf2` file to the mounted drive.

**Works with**: RP2040, RP2350 and SAMD21 devices.

**Usage**:
1. Open `just_boot.html` in Chrome/Edge.
2. Click **Boot to Bootloader** and select your device.
3. Wait for the bootloader drive to appear (RPI-RP2 for RP2040, RP2350 for RP2350, or your SAMD21 bootloader drive).
4. Manually drag your `.uf2` file to the drive.

---

### Notes

- Works entirely in the browser; no drivers or installs are required on supported OSes.
- The interface uses color coding: **Green** = active/completed step, **Blue** = available step, **Grey** = disabled step.

### Troubleshooting
- "Web Serial not available": Use Chrome/Edge (desktop). Some managed environments disable it.
- Drive/UF2 write fails on macOS: System Settings → Privacy & Security → Files and Folders → allow Chrome/Edge access to **Removable Volumes**.
- Windows: If Controlled folder access is enabled, allow Chrome/Edge or temporarily disable that protection.
- If the RPI-RP2 or RP2350 drive isn’t detected, make sure you picked the drive’s root and that the device actually rebooted into BOOTSEL.


