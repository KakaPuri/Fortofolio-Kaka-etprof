from pathlib import Path

path = Path('src/components/sections/AboutSection.tsx')
text = path.read_text(encoding='utf-8')
print('LENGTH', len(text))
print('FIRST 40 LINES:')
for i, line in enumerate(text.splitlines(), start=1):
    if i <= 40:
        print(f'{i:02d}: {repr(line)}')
    else:
        break
print('---')
print('BAD CHARS:')
for i, ch in enumerate(text[:500]):
    if ord(ch) < 32 and ch not in '\n\r\t':
        print(i, ord(ch), repr(ch))
print('---')
print('LAST 20 CHARS BEFORE SECTION:')
idx = text.find('<section id="about"')
print(idx)
print(repr(text[max(0,idx-40):idx+40]))
