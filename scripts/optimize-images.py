from PIL import Image
import os

base = 'src/assets/images'

images = [
    ('aurex-laptop-hero.png', 700, 85),
    ('dark-blue.jpg', 1200, 80),
    ('headset.jpg', 500, 80),
    ('laptop-3-4.jpg', 500, 80),
    ('watch.jpg', 500, 80),
]

for filename, max_width, quality in images:
    path = os.path.join(base, filename)
    img = Image.open(path)
    original_size = os.path.getsize(path)

    if img.width > max_width:
        ratio = max_width / img.width
        new_height = int(img.height * ratio)
        img = img.resize((max_width, new_height), Image.LANCZOS)

    if filename.endswith('.png'):
        img.save(path, 'PNG', optimize=True)
    else:
        img.save(path, 'JPEG', quality=quality, optimize=True, progressive=True)

    new_size = os.path.getsize(path)
    print(f'{filename}: {original_size / 1024:.1f}KB -> {new_size / 1024:.1f}KB')