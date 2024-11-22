from PIL import Image, ImageDraw, ImageFont
import random
import colorsys
import os

def create_gradient_background(width, height, color1, color2):
    image = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(image)
    
    for y in range(height):
        r = int(color1[0] + (color2[0] - color1[0]) * y / height)
        g = int(color1[1] + (color2[1] - color1[1]) * y / height)
        b = int(color1[2] + (color2[2] - color1[2]) * y / height)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    
    return image

def add_tech_pattern(image, num_shapes=50):
    draw = ImageDraw.Draw(image)
    width, height = image.size
    
    for _ in range(num_shapes):
        shape_type = random.choice(['circle', 'rectangle', 'line'])
        x = random.randint(0, width)
        y = random.randint(0, height)
        size = random.randint(5, 20)
        opacity = random.randint(30, 100)
        color = (100, 255, 218, opacity)  # Teal color with varying opacity
        
        if shape_type == 'circle':
            draw.ellipse([x-size, y-size, x+size, y+size], 
                        fill=None, outline=color, width=1)
        elif shape_type == 'rectangle':
            draw.rectangle([x-size, y-size, x+size, y+size], 
                         fill=None, outline=color, width=1)
        else:
            end_x = x + random.randint(-50, 50)
            end_y = y + random.randint(-50, 50)
            draw.line([x, y, end_x, end_y], fill=color, width=1)

def create_project_image(name, color1, color2, output_path):
    width, height = 800, 600
    image = create_gradient_background(width, height, color1, color2)
    add_tech_pattern(image)
    
    # Add project name
    draw = ImageDraw.Draw(image)
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 60)
    except:
        font = ImageFont.load_default()
    
    text_bbox = draw.textbbox((0, 0), name, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    # Add text shadow
    shadow_offset = 3
    draw.text((x + shadow_offset, y + shadow_offset), name, 
              fill=(0, 0, 0, 128), font=font)
    draw.text((x, y), name, fill=(255, 255, 255), font=font)
    
    image.save(output_path, quality=95)

def main():
    # Create images directory if it doesn't exist
    output_dir = 'assets/images'
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # Project configurations
    projects = [
        {
            'name': 'Memorization\nGame',
            'colors': ((25, 25, 112), (0, 0, 50)),  # Dark blue gradient
            'filename': 'memorization-game.jpg'
        },
        {
            'name': 'Battleship\nGame',
            'colors': ((47, 79, 79), (25, 25, 25)),  # Dark green gradient
            'filename': 'battleship-game.jpg'
        },
        {
            'name': 'AQI vs EV\nAnalysis',
            'colors': ((75, 0, 130), (25, 0, 50)),  # Purple gradient
            'filename': 'aqi-ev-analysis.jpg'
        },
        {
            'name': 'Breakout\nGame',
            'colors': ((139, 0, 0), (50, 0, 0)),  # Dark red gradient
            'filename': 'breakout-game.jpg'
        }
    ]
    
    for project in projects:
        output_path = os.path.join(output_dir, project['filename'])
        create_project_image(project['name'], 
                           project['colors'][0], 
                           project['colors'][1], 
                           output_path)
        print(f"Created {project['filename']}")

if __name__ == "__main__":
    main()
