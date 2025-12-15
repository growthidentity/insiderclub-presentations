#!/bin/bash
# Build presentation from modular files

cd "$(dirname "$0")"

python3 - << 'EOF'
import os

# Read CSS
with open('css/styles.css', 'r') as f:
    css = f.read()

# Read all slides in order (starting from 0)
slides_html = ''
for i in range(0, 31):
    slide_file = f'slides/slide-{i:02d}.html'
    with open(slide_file, 'r') as f:
        slide_content = f.read()
        # Fix image paths: ../LOGOS/ -> LOGOS/
        slide_content = slide_content.replace('../LOGOS/', 'LOGOS/')
        slides_html += slide_content + '\n\n'

# Read JS
with open('js/script.js', 'r') as f:
    js = f.read()

# Create complete HTML
html = f'''<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crypque & Mobicryp - Presentación Profesional</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
{css}
    </style>
</head>
<body>
    <div class="presentation">
{slides_html}
    </div>

    <div class="nav-controls">
        <button class="nav-btn" onclick="prevSlide()">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button class="nav-btn" onclick="nextSlide()">
            <i class="fas fa-chevron-right"></i>
        </button>
    </div>

    <div class="slide-counter">
        <span id="currentSlide">1</span> / <span id="totalSlides">31</span>
    </div>

    <script>
{js}
    </script>
</body>
</html>'''

# Write complete presentation
with open('presentation.html', 'w') as f:
    f.write(html)

print('✅ presentation.html construido exitosamente!')
EOF
