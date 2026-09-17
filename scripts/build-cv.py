"""Build the English CV linked from the portfolio homepage."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "SergiyZelinskii.pdf"
FONT_DIR = Path("C:/Windows/Fonts")
pdfmetrics.registerFont(TTFont("Arial", str(FONT_DIR / "arial.ttf")))
pdfmetrics.registerFont(TTFont("Arial-Bold", str(FONT_DIR / "arialbd.ttf")))

PAGE_W, PAGE_H = A4
LEFT = 52
RIGHT = PAGE_W - 52
WIDTH = RIGHT - LEFT
INK = colors.HexColor("#182331")
MUTED = colors.HexColor("#536274")
ACCENT = colors.HexColor("#17627B")
LIGHT = colors.HexColor("#D6DEE5")

cv = canvas.Canvas(str(OUTPUT), pagesize=A4)
cv.setTitle("Sergiy Zelinskii - AI Agentic Engineer")
cv.setAuthor("Sergiy Zelinskii")


def text(x, y, value, size=9.7, bold=False, color=INK):
    cv.setFont("Arial-Bold" if bold else "Arial", size)
    cv.setFillColor(color)
    cv.drawString(x, y, value)


def linked_text(x, y, label, url, size=8.8):
    text(x, y, label, size=size, color=ACCENT)
    width = pdfmetrics.stringWidth(label, "Arial", size)
    cv.linkURL(url, (x, y - 2, x + width, y + size), relative=0)
    return x + width


def wrapped(value, max_width, size=9.3, bold=False):
    font = "Arial-Bold" if bold else "Arial"
    lines = []
    line = ""
    for word in value.split():
        candidate = f"{line} {word}" if line else word
        if line and pdfmetrics.stringWidth(candidate, font, size) > max_width:
            lines.append(line)
            line = word
        else:
            line = candidate
    if line:
        lines.append(line)
    return lines


def paragraph(y, value, size=9.3, leading=13.4, indent=0, color=INK):
    for line in wrapped(value, WIDTH - indent, size):
        text(LEFT + indent, y, line, size=size, color=color)
        y -= leading
    return y


def heading(y, label):
    y -= 13
    text(LEFT, y, label.upper(), size=9.0, bold=True, color=ACCENT)
    y -= 7
    cv.setStrokeColor(LIGHT)
    cv.setLineWidth(0.55)
    cv.line(LEFT, y, RIGHT, y)
    return y - 16


def role(y, title, dates, note):
    text(LEFT, y, title, size=9.8, bold=True)
    text(RIGHT - pdfmetrics.stringWidth(dates, "Arial", 8.8), y, dates, size=8.8, color=MUTED)
    y -= 15
    return paragraph(y, note, size=9.1, leading=13.0, color=MUTED) - 6


def project(y, name, description, technologies, url=None):
    text(LEFT, y, name, size=9.8, bold=True)
    if url:
        linked_text(RIGHT - pdfmetrics.stringWidth("Case study", "Arial", 8.6), y, "Case study", url, size=8.6)
    y -= 15
    y = paragraph(y, description, size=9.1, leading=13.0)
    y = paragraph(y, technologies, size=8.6, leading=12.0, color=MUTED)
    return y - 6


y = PAGE_H - 47
text(LEFT, y, "Sergiy Zelinskii", size=23, bold=True)
y -= 22
text(LEFT, y, "AI Agentic Engineer  |  Python Backend", size=11.5, color=ACCENT)
y -= 24

linked_text(LEFT, y, "sergzels@gmail.com", "mailto:sergzels@gmail.com")
linked_text(LEFT + 133, y, "LinkedIn", "https://www.linkedin.com/in/sergzel/")
linked_text(LEFT + 206, y, "GitHub", "https://github.com/SergZels")
linked_text(LEFT + 271, y, "Telegram", "https://t.me/SZelinsky")
linked_text(LEFT + 357, y, "Portfolio", "https://sergzels.github.io/")
y -= 16
text(LEFT, y, "Terebovlia, Ukraine", size=8.8, color=MUTED)

y = heading(y, "Profile")
y = paragraph(
    y,
    "I build Python backends and AI-enabled products, from agent integrations and RAG systems "
    "to multi-service SaaS platforms. My work spans architecture, implementation and operation "
    "of production systems. I have taken freelance client work since 2023, after programming "
    "intermittently for my own business from 2013.",
)

y = heading(y, "Experience")
y = role(
    y, "LeadB  |  AI Agentic Engineer", "2026 - present",
    "Develop backend and agentic AI systems. Product and client details are protected by NDA.",
)
y = role(
    y, "LeadB  |  Python Backend Developer", "2025 - 2026",
    "Built and maintained Python services and integrations for production workflows; details under NDA.",
)
y = role(
    y, "Freelance software developer", "2023 - present",
    "Deliver client projects in AI, SaaS, civic information systems and business automation.",
)
y = role(
    y, "Independent development", "2013 - 2023",
    "Programmed intermittently, building software for my own business.",
)

y = heading(y, "Selected work")
y = project(
    y, "Community  |  confidential product",
    "Develop and operate a single-tenant platform across many servers. Nearly two years on the project; "
    "its codebase exceeds 100,000 lines. Product details remain confidential.",
    "FastAPI, Telethon, OpenAI, OpenRouter, Elasticsearch, Playwright, ElevenLabs",
    "https://sergzels.github.io/project/community",
)
y = project(
    y, "Community Ecosystem  |  supporting applications",
    "A separate ecosystem that supports Community: one major application with over 200,000 lines "
    "of code and many smaller companion applications. Internal workflows remain confidential.",
    "FastAPI, PostgreSQL, ELK, MCP integrations, S3, gspread",
    "https://sergzels.github.io/project/community-ecosystem",
)
y = project(
    y, "Terebovlia Info AI  |  community information portal",
    "Built FastAPI services, a Telegram assistant and Django admin. The RAG workflow retrieves "
    "curated knowledge from Qdrant for LLM answers; a teammate developed the React frontend.",
    "FastAPI, aiogram, Django, PostgreSQL, Redis, Qdrant, Docker",
    "https://catalog.terebinfo.in.ua/",
)
y = project(
    y, "SUMMYZE  |  AI email analytics SaaS",
    "Built the FastAPI application and gateway for AI ticket analysis, chat and scheduled reports. "
    "Each client runs in an isolated Docker instance; RabbitMQ and Mailu support the email ecosystem.",
    "FastAPI, PostgreSQL, Docker, RabbitMQ, Mailu, JavaScript",
    "https://test.summyze.com/",
)
y = project(
    y, "RRepair CRM  |  repair-shop operations",
    "Delivered a CRM for orders, parts inventory, technician payroll and customer communication "
    "with a Django backend and an aiogram bot interface.",
    "Django, aiogram, PostgreSQL, Docker",
    "https://sergzels.github.io/project/rrepair-crm",
)

y = heading(y, "Technical focus")
y = paragraph(y, "Backend: Python, FastAPI, Django, PostgreSQL, Redis, Docker, Linux, nginx, Git", size=9.1, leading=13.0)
y = paragraph(y, "AI and integration: LLM APIs, RAG, Qdrant, MCP, Elasticsearch, RabbitMQ, Telegram", size=9.1, leading=13.0)

y = heading(y, "Education")
text(LEFT, y, "Bachelor's degree in Computer Systems and Networks", size=9.1, bold=True)
text(RIGHT - pdfmetrics.stringWidth("1999 - 2004", "Arial", 8.8), y, "1999 - 2004", size=8.8, color=MUTED)

if y < 44:
    raise RuntimeError(f"CV is too tall for one page; final baseline: {y:.1f}")

cv.showPage()
cv.save()
print(f"Created {OUTPUT} (final baseline {y:.1f})")
