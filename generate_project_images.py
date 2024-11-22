from PIL import Image, ImageDraw, ImageFont
import random
import math

def create_image(width, height, bg_color):
    image = Image.new('RGB', (width, height), bg_color)
    return image, ImageDraw.Draw(image)

def create_battleship_game():
    width, height = 800, 600
    image, draw = create_image(width, height, '#0A192F')
    
    # Create a more sophisticated water background
    for y in range(height):
        for x in range(width):
            noise = random.randint(0, 15)
            wave = int(5 * math.sin((x + y) / 20))
            color = (10 + noise + wave, 25 + noise + wave, 47 + noise + wave)
            draw.point((x, y), fill=color)
    
    # Draw larger grid
    cell_size = 45
    grid_size = 10
    start_x = (width - grid_size * cell_size) // 2
    start_y = 50
    
    # Draw grid with better visibility
    for i in range(grid_size + 1):
        x = start_x + i * cell_size
        y = start_y + i * cell_size
        # Horizontal lines
        draw.line([(start_x, start_y + i * cell_size), 
                  (start_x + grid_size * cell_size, start_y + i * cell_size)],
                 fill='#64ffda', width=1)
        # Vertical lines
        draw.line([(start_x + i * cell_size, start_y),
                  (start_x + i * cell_size, start_y + grid_size * cell_size)],
                 fill='#64ffda', width=1)
    
    # Draw ships with better design
    ships = [(4, 2, 'h'), (3, 4, 'v'), (3, 7, 'h'), (2, 1, 'v')]
    for length, pos_x, orientation in ships:
        pos_y = random.randint(0, grid_size - length) if orientation == 'v' else random.randint(0, grid_size - 1)
        
        if orientation == 'h':
            # Draw horizontal ship
            draw.rectangle([
                start_x + pos_x * cell_size + 2,
                start_y + pos_y * cell_size + 2,
                start_x + (pos_x + length) * cell_size - 2,
                start_y + (pos_y + 1) * cell_size - 2
            ], fill='#64ffda', outline='#ffffff', width=1)
        else:
            # Draw vertical ship
            draw.rectangle([
                start_x + pos_x * cell_size + 2,
                start_y + pos_y * cell_size + 2,
                start_x + (pos_x + 1) * cell_size - 2,
                start_y + (pos_y + length) * cell_size - 2
            ], fill='#64ffda', outline='#ffffff', width=1)
    
    # Draw hits and misses with better effects
    hits = [(3, 3), (5, 6), (7, 2)]
    misses = [(1, 1), (4, 4), (6, 6), (8, 8)]
    
    # Draw hits with explosion effect
    for x, y in hits:
        center_x = start_x + (x + 0.5) * cell_size
        center_y = start_y + (y + 0.5) * cell_size
        for size in range(15, 5, -2):
            draw.ellipse([
                center_x - size, center_y - size,
                center_x + size, center_y + size
            ], outline='#ff4444', width=2)
    
    # Draw misses with ripple effect
    for x, y in misses:
        center_x = start_x + (x + 0.5) * cell_size
        center_y = start_y + (y + 0.5) * cell_size
        for size in range(12, 4, -2):
            draw.ellipse([
                center_x - size, center_y - size,
                center_x + size, center_y + size
            ], outline='#ffffff', width=1)
    
    return image

def create_memorization_game():
    width, height = 800, 600
    image, draw = create_image(width, height, '#0A192F')
    
    # Create a larger 4x4 grid of colored squares
    grid_size = 4
    cell_size = 120
    padding = 8
    start_x = (width - grid_size * cell_size) // 2
    start_y = (height - grid_size * cell_size) // 2
    
    # Modern, vibrant colors
    colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFEEAD']
    pattern = []
    
    # Draw subtle background grid
    for i in range(grid_size + 1):
        x = start_x + i * cell_size
        y = start_y + i * cell_size
        draw.line([(start_x, y), (start_x + grid_size * cell_size, y)], 
                 fill='#1E3A5F', width=1)
        draw.line([(x, start_y), (x, start_y + grid_size * cell_size)], 
                 fill='#1E3A5F', width=1)
    
    # Draw cells with better effects
    for i in range(grid_size):
        for j in range(grid_size):
            x = start_x + j * cell_size
            y = start_y + i * cell_size
            
            if random.random() < 0.3:  # 30% chance of being lit
                color = random.choice(colors)
                pattern.append((i, j))
                # Draw glowing effect
                for offset in range(4, 0, -1):
                    draw.rectangle([
                        x + padding - offset,
                        y + padding - offset,
                        x + cell_size - padding + offset,
                        y + cell_size - padding + offset
                    ], outline=color, width=1)
            else:
                color = '#1E3A5F'  # Darker shade for unlit cells
            
            # Draw main cell
            draw.rectangle([
                x + padding,
                y + padding,
                x + cell_size - padding,
                y + cell_size - padding
            ], fill=color, outline='#ffffff', width=1)
    
    # Draw sequence numbers with better styling
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 48)
    except:
        font = ImageFont.load_default()
    
    for idx, (i, j) in enumerate(pattern[:4], 1):
        x = start_x + j * cell_size + cell_size // 2
        y = start_y + i * cell_size + cell_size // 2
        text = str(idx)
        bbox = draw.textbbox((x, y), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        
        # Draw text shadow
        draw.text((x - text_width//2 + 2, y - text_height//2 + 2), 
                 text, fill='#000000', font=font)
        draw.text((x - text_width//2, y - text_height//2), 
                 text, fill='#ffffff', font=font)
    
    # Add game title
    title_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 36)
    title = "MEMORIZATION GAME"
    bbox = draw.textbbox((0, 0), title, font=title_font)
    text_width = bbox[2] - bbox[0]
    draw.text((width//2 - text_width//2, 30), title, 
              fill='#64ffda', font=title_font)
    
    return image

def create_aqi_analysis():
    width, height = 800, 600
    image, draw = create_image(width, height, '#0A192F')
    
    # Draw coordinate system with better styling
    margin = 80
    graph_width = width - 2 * margin
    graph_height = height - 2 * margin
    
    # Draw grid lines
    for i in range(11):
        y = margin + (i * graph_height) // 10
        x = margin + (i * graph_width) // 10
        # Horizontal grid lines
        draw.line([(margin, y), (width - margin, y)], 
                 fill='#1E3A5F', width=1)
        # Vertical grid lines
        draw.line([(x, margin), (x, height - margin)], 
                 fill='#1E3A5F', width=1)
    
    # Draw axes with better visibility
    draw.line([(margin, height - margin), (width - margin, height - margin)], 
              fill='#64ffda', width=2)  # x-axis
    draw.line([(margin, margin), (margin, height - margin)], 
              fill='#64ffda', width=2)  # y-axis
    
    # Generate smoother data points
    def generate_smooth_data(num_points):
        points = []
        y = random.randint(graph_height//4, 3*graph_height//4)
        for i in range(num_points):
            x = margin + (i * graph_width) // (num_points - 1)
            y += random.randint(-20, 20)
            y = max(margin, min(height - margin, y))
            points.append((x, y))
        return points
    
    # Draw AQI trend with gradient
    aqi_points = generate_smooth_data(20)
    for i in range(len(aqi_points) - 1):
        # Draw line with gradient effect
        for w in range(3):
            draw.line([aqi_points[i], aqi_points[i + 1]], 
                     fill='#FF6B6B', width=3-w)
        # Draw points with glow
        x, y = aqi_points[i]
        for size in range(6, 2, -1):
            draw.ellipse([x - size, y - size, x + size, y + size], 
                        fill='#FF6B6B')
    
    # Draw EV sales data with better styling
    ev_points = generate_smooth_data(20)
    for i in range(len(ev_points) - 1):
        # Draw connecting lines
        draw.line([ev_points[i], ev_points[i + 1]], 
                 fill='#4ECDC4', width=2)
        # Draw data points with glow effect
        x, y = ev_points[i]
        for size in range(8, 3, -1):
            draw.ellipse([x - size, y - size, x + size, y + size], 
                        outline='#4ECDC4', width=1)
        draw.ellipse([x - 4, y - 4, x + 4, y + 4], 
                    fill='#4ECDC4')
    
    # Add labels with better positioning and styling
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 24)
    except:
        font = ImageFont.load_default()
    
    # Title
    title_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 36)
    title = "AQI vs EV Adoption Analysis"
    bbox = draw.textbbox((0, 0), title, font=title_font)
    text_width = bbox[2] - bbox[0]
    draw.text((width//2 - text_width//2, 20), title, 
              fill='#64ffda', font=title_font)
    
    # Legend
    legend_x = width - margin - 200
    legend_y = margin + 30
    # AQI legend
    draw.line([(legend_x, legend_y + 10), (legend_x + 30, legend_y + 10)], 
              fill='#FF6B6B', width=3)
    draw.text((legend_x + 40, legend_y), "AQI Trend", 
              fill='#FF6B6B', font=font)
    # EV legend
    draw.ellipse([legend_x + 8, legend_y + 48, legend_x + 22, legend_y + 62], 
                 fill='#4ECDC4')
    draw.text((legend_x + 40, legend_y + 40), "EV Sales", 
              fill='#4ECDC4', font=font)
    
    # Axis labels
    draw.text((width//2 - 30, height - margin + 20), "Time", 
              fill='#ffffff', font=font)
    draw.text((margin - 70, height//2 - 10), "Value", 
              fill='#ffffff', font=font)
    
    return image

def create_breakout_game():
    width, height = 800, 600
    image, draw = create_image(width, height, '#0A192F')  # Darker navy background
    
    # Draw bricks - taking up more space
    brick_width = 80
    brick_height = 30
    brick_margin = 4
    rows = 6
    cols = 8
    start_x = (width - (cols * (brick_width + brick_margin))) // 2
    start_y = 80
    
    # Modern color palette
    colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A5A5']
    
    for row in range(rows):
        y = start_y + row * (brick_height + brick_margin)
        for col in range(cols):
            x = start_x + col * (brick_width + brick_margin)
            color = colors[row % len(colors)]
            # Add gradient effect to bricks
            draw.rectangle([x, y, x + brick_width, y + brick_height], 
                         fill=color, outline='#ffffff', width=1)
    
    # Draw paddle - larger and more visible
    paddle_width = 140
    paddle_height = 20
    paddle_x = width // 2 - paddle_width // 2
    paddle_y = height - 80
    # Draw paddle with gradient effect
    draw.rectangle([paddle_x, paddle_y, paddle_x + paddle_width, paddle_y + paddle_height],
                  fill='#64ffda', outline='#ffffff', width=2)
    
    # Draw ball - larger and with glow effect
    ball_size = 15
    ball_x = width // 2
    ball_y = height // 2 + 50
    # Draw ball glow
    for size in range(ball_size + 6, ball_size - 2, -2):
        alpha = int(255 * (size - ball_size + 2) / 8)
        color = (255, 255, 255, alpha)
        draw.ellipse([ball_x - size, ball_y - size, 
                     ball_x + size, ball_y + size],
                    fill='#ffffff')
    
    # Draw score with better font and position
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 36)
    except:
        font = ImageFont.load_default()
    
    score_text = "SCORE: 450"
    bbox = draw.textbbox((0, 0), score_text, font=font)
    text_width = bbox[2] - bbox[0]
    draw.text((width - text_width - 30, 30), score_text, 
              fill='#64ffda', font=font)
    
    return image

def main():
    # Create Battleship Game image
    battleship_img = create_battleship_game()
    battleship_img.save('assets/images/battleship-game.jpg', quality=95)
    
    # Create Memorization Game image
    memorization_img = create_memorization_game()
    memorization_img.save('assets/images/memorization-game.jpg', quality=95)
    
    # Create AQI vs EV Analysis image
    aqi_img = create_aqi_analysis()
    aqi_img.save('assets/images/aqi-ev-analysis.jpg', quality=95)
    
    # Create Breakout Game image
    breakout_img = create_breakout_game()
    breakout_img.save('assets/images/breakout-game.jpg', quality=95)
    
    print("Created all project images!")

if __name__ == "__main__":
    main()
