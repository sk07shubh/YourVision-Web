#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOURCE="$ROOT/public/images/liquid-glass-background.jpg"
OUTPUT="$ROOT/public/videos/liquid-glass-bg.mp4"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg is required. Install it on macOS with: brew install ffmpeg" >&2
  exit 1
fi
if [[ ! -f "$SOURCE" ]]; then
  echo "Expected background image at: $SOURCE" >&2
  exit 1
fi

mkdir -p "$(dirname "$OUTPUT")"
# A restrained, sinusoidal zoom breathes in and out over exactly one 8-second
# cycle, so the final frame returns to the same scale and framing as the first.
ffmpeg -hide_banner -y \
  -loop 1 -framerate 30 -i "$SOURCE" \
  -vf "scale=2200:-2, crop=1920:1080, zoompan=z='1.015+0.012*sin(2*PI*on/240)':x='(iw-iw/zoom)/2+4*sin(2*PI*on/240)':y='(ih-ih/zoom)/2':d=240:s=1920x1080:fps=30,format=yuv420p" \
  -frames:v 240 -an -c:v libx264 -preset medium -crf 25 \
  -movflags +faststart -pix_fmt yuv420p "$OUTPUT"

echo "Created: $OUTPUT"
ls -lh "$OUTPUT"
