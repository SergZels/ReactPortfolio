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
LEFT = 48
RIGHT = PAGE_W - 48
WIDTH = RIGHT - LEFT
INK = colors.HexColor("#172238")
MUTED = colors.HexColor("#526077")
ACCENT = colors.HexColor("#176B8A")
LIGHT = colors.HexColor("#DCE4EA")

cv = canvas.Canvas(str(OUTPUT), pagesize=A4)
cv.setTitle("Sergiy Zelinskii - Python Backend and AI Engineer")
cv.setAuthor("Sergiy Zelinskii")


def text(x, y, value, size=9, bold=False, color=INK):
    cv.setFont("Arial-Bold" if bold else "Arial", size)
    cv.setFillColor(color)
    cv.drawString(x, y, value)


def linked_text(x, y, label, url, size=8.4):
    text(x, y, label, size=size, color=ACCENT)
    width = pdfmetrics.stringWidth(label, "Arial", size)
    cv.linkURL(url, (x, y - 2, x + width, y + size), relative=0)
    return x + width


def wrapped(value, max_width, size=8.8, bold=False):
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


def paragraph(y, value, size=8.8, leading=12, indent=0, color=INK):
    for line in wrapped(value, WIDTH - indent, size):
        text(LEFT + indent, y, line, size=size, color=color)
        y -= leading
    return y


def heading(y, label):
    y -= 9
    text(LEFT, y, label.upper(), size=8.3, bold=True, color=ACCENT)
    y -= 6
    cv.setStrokeColor(LIGHT)
    cv.setLineWidth(0.55)
    cv.line(LEFT, y, RIGHT, y)
    return y - 13


def role(y, title, dates, note):
    text(LEFT, y, title, size=9.1, bold=True)
    text(RIGHT - pdfmetrics.stringWidth(dates, "Arial", 8.2), y, dates, size=8.2, color=MUTED)
    y -= 12
    return paragraph(y, note, size=8.5, leading=11.2, color=MUTED) - 3


def project(y, name, year, description, technologies, url=None):
    text(LEFT, y, f"{name}  |  {year}", size=9.1, bold=True)
    if url:
        linked_text(RIGHT - pdfmetrics.stringWidth("View project", "Arial", 8.0), y, "View project", url, size=8.0)
    y -= 12
    y = paragraph(y, description, size=8.5, leading=11.2)
    y = paragraph(y, technologies, size=8.0, leading=10.8, color=MUTED)
    return y - 6


y = PAGE_H - 43
text(LEFT, y, "Sergiy Zelinskii", size=20, bold=True)
y -= 18
text(LEFT, y, "Python Backend & AI Engineer", size=10.5, color=MUTED)
y -= 19

linked_text(LEFT, y, "sergzels@gmail.com", "mailto:sergzels@gmail.com")
linked_text(LEFT + 133, y, "LinkedIn", "https://www.linkedin.com/in/sergzel/")
linked_text(LEFT + 203, y, "GitHub", "https://github.com/SergZels")
linked_text(LEFT + 265, y, "Telegram", "https://t.me/SZelinsky")
linked_text(LEFT + 348, y, "Portfolio", "https://sergzels.github.io/ReactPortfolio/")
y -= 14
text(LEFT, y, "Terebovlia, Ukraine", size=8.2, color=MUTED)

y = heading(y, "Profile")
y = paragraph(
    y,
    "Python backend and agentic AI engineer building production web services, Telegram bots, "
    "business automation and AI-assisted workflows. Commercial client projects since 2023, "
    "with earlier software built for my own business since 2012. Experienced with API design, "
    "RAG, service integration, containerized deployment and operational tools.",
    size=8.8,
    leading=12,
)

y = heading(y, "Experience")
y = role(y, "LeadB  |  Middle+ Agentic Engineer", "2026 - present", "Python backend and agentic AI engineering. Product details are confidential under NDA.")
y = role(y, "LeadB  |  Middle Python Backend Developer", "2025 - 2026", "Backend development and service integration; project specifics are confidential under NDA.")
y = role(y, "Independent software developer", "2023 - present", "Delivered client-facing Python services, Telegram bots, CRMs and AI applications across civic, education and SaaS use cases.")

y = heading(y, "Selected projects")
y = project(
    y,
    "Terebovlia Info AI", "2025",
    "Built a community information platform with FastAPI APIs, aiogram assistant and Django admin. "
    "RAG combines multilingual embeddings, Qdrant semantic retrieval and an LLM to answer from curated knowledge and catalog data. "
    "The React frontend was developed by a teammate.",
    "Python, FastAPI, aiogram, Django, PostgreSQL, Redis, Qdrant, Docker",
    "https://catalog.terebinfo.in.ua/",
)
y = project(
    y,
    "SUMMYZE", "2025",
    "Developed an AI email analytics SaaS with ticket summaries, categorization, search, chat and scheduled reports. "
    "Built the FastAPI app and gateway; isolated client Docker instances are provisioned with PostgreSQL, "
    "RabbitMQ-backed email processing and a self-hosted Mailu server.",
    "Python, FastAPI, PostgreSQL, Docker, RabbitMQ, Mailu, JavaScript",
    "https://test.summyze.com/",
)
y = project(
    y,
    "RRepair CRM", "2023",
    "Built a custom repair-shop CRM covering orders, parts inventory, technician payroll and customer communication. "
    "A Django backend and aiogram bot operate over PostgreSQL in a service-based architecture.",
    "Python, Django, aiogram, PostgreSQL, Docker",
    "https://sergzels.github.io/ReactPortfolio/project/rrepair-crm",
)
y = project(
    y,
    "HVAC School Bot", "2026",
    "Created a Telegram learning platform with one-time invitations, video lessons, quizzes, progress tracking "
    "and teacher review of written answers. Built the aiogram bot, Django admin and FastAPI webhook service.",
    "Python, aiogram 3, Django, FastAPI, Docker, nginx",
    "https://t.me/HVAC_SCH00L_BOT",
)
y = project(
    y,
    "Water Bot v2", "2026",
    "Built a Telegram and web service for submitting water-meter readings, monthly reminders and staff workflows "
    "with filtering, processing status and Excel export for a local utility.",
    "Python, aiogram 3, FastAPI, SQLite, Docker Compose",
    "https://sergzels.github.io/ReactPortfolio/project/water-bot-v2",
)
y = project(
    y,
    "SmartSES", "2026",
    "Built solar-station monitoring across ESP32 firmware and a FastAPI service: BLE battery telemetry, "
    "MQTT transport, a live WebSocket dashboard, charge scheduling, Telegram alerts and read-only MCP tools for AI agents.",
    "Python, FastAPI, ESP32, BLE, MQTT, WebSocket, MCP",
    "https://sergzels.github.io/ReactPortfolio/project/smartses",
)

y = heading(y, "Technical skills")
y = paragraph(y, "Core: Python, FastAPI, Django, aiogram, PostgreSQL, SQL, REST APIs, Docker, Linux, nginx, Git", size=8.5, leading=11.3)
y = paragraph(y, "AI and integration: RAG, Qdrant, LLM integration, MCP, Redis, RabbitMQ, Telegram Bot API", size=8.5, leading=11.3)
y = paragraph(y, "Frontend and other: JavaScript, HTML, CSS, Bootstrap, HTMX; working knowledge of Go and React", size=8.5, leading=11.3)

y = heading(y, "Education")
text(LEFT, y, "Bachelor's degree in Computer Systems and Networks", size=8.8, bold=True)
text(RIGHT - pdfmetrics.stringWidth("1999 - 2004", "Arial", 8.2), y, "1999 - 2004", size=8.2, color=MUTED)

if y < 42:
    raise RuntimeError(f"CV is too tall for one page; final baseline: {y:.1f}")

cv.showPage()
cv.save()
print(f"Created {OUTPUT} (final baseline {y:.1f})")
