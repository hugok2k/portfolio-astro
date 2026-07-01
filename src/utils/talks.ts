export interface Talk {
  title: string
  event: string
  date: string
  description: string
  tags: string[]
  github: string
  linkedin: string
}

export const talks: Talk[] = [
  {
    title: "Potenciando Burp Suite con MCP y Claude",
    event: "ThreatX Security Meetup, UTN Buenos Aires",
    date: "Mayo 2026",
    description:
      "Charla como speaker junto a Maximiliano Soler sobre cómo potenciar Burp Suite con MCP y Claude. Foco en personalizar un agente de IA, definir sus skills e integrarlo al día a día del hacking para automatizar tareas y llevar las auditorías a otro nivel.",
    tags: ["Burp Suite", "MCP", "Claude", "AI Agents", "Bug Bounty", "Infosec"],
    github: "https://github.com/artssec/BurpSuite_con_MCP_y_Claude",
    linkedin:
      "https://www.linkedin.com/posts/devhugoavila_ciberseguridad-cybersecurity-burpsuite-activity-7477856279336521729-6pjJ",
  },
  {
    title: "Burp Suite con MCP y VS Code",
    event: "Bug Bounty Argentina",
    date: "Febrero 2026",
    description:
      "Integración de Burp Suite, MCP y VS Code para convertir a GitHub Copilot en un miembro del equipo de seguridad: agentes con roles específicos (Web-Crawler, Burp-Analyst) definidos vía agent.md, Skills modulares por vector de ataque, y MCP como puente para operar tráfico de Burp y filesystem en tiempo real.",
    tags: ["Burp Suite", "MCP", "VS Code", "GitHub Copilot", "AI Agents", "Bug Bounty"],
    github: "https://github.com/artssec/BurpSuite_con_MCP_y_VSCode",
    linkedin:
      "https://www.linkedin.com/posts/devhugoavila_burp-suite-con-mcp-y-vs-code-hugo-avila-activity-7432136996438876160-Ebds",
  },
  {
    title: "Hacking Asistido por IA: Automatizando Pentesting con VSCode, Copilot y MCP",
    event: "Hacking Day 2025, Paraná",
    date: "Agosto 2025",
    description:
      "Laboratorio de 2 horas para automatizar las fases repetitivas de un pentest delegándolas a IA: VSCode + GitHub Copilot + MCP como puente entre el LLM y herramientas locales (Playwright para reconocimiento, Burp para tráfico, Filesystem para reportes). Metodología paso a paso hasta generar un informe completo sin salir del editor.",
    tags: ["MCP", "GitHub Copilot", "VS Code", "Burp Suite", "Playwright", "Pentesting"],
    github: "https://github.com/artssec/mcp_lab",
    linkedin:
      "https://www.linkedin.com/posts/devhugoavila_en-representaci%C3%B3n-de-artssec-tuve-el-privilegio-activity-7361100874565206016-aiaR",
  },
]
