"""Generate website favicon/icon files from a source image.

Usage: python scripts/gen-icons.py <source_image>
Writes into public/ : favicon.ico, favicon-16x16.png, favicon-32x32.png,
                    favicon-96x96.png, favicon-180x180.png, apple-touch-icon.png
"""
import sys
from pathlib import Path
from PIL import Image

PUBLIC = Path(__file__).resolve().parent.parent / "public"


def main(src: str) -> None:
    img = Image.open(src).convert("RGBA")
    # Resize with high-quality LANCZOS for crisp small icons.
    def sized(n: int) -> Image.Image:
        return img.resize((n, n), Image.LANCZOS)

    targets = {
        "favicon-16x16.png": 16,
        "favicon-32x32.png": 32,
        "favicon-96x96.png": 96,
        "favicon-180x180.png": 180,
        "apple-touch-icon.png": 180,
    }

    for name, n in targets.items():
        sized(n).save(PUBLIC / name, format="PNG")
        print(f"wrote {name} ({n}x{n})")

    # Multi-size ICO (16, 32, 48, 64) for broad browser support.
    ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
    sized(64).save(
        (PUBLIC / "favicon.ico"),
        format="ICO",
        sizes=ico_sizes,
    )
    print(f"wrote favicon.ico {ico_sizes}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print(__doc__)
        sys.exit(1)
    main(sys.argv[1])