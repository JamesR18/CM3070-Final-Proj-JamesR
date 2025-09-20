# CM3070 Identity & Access Management

A Next.js application for identity and access management with admin dashboard and user authentication.

## Quick Start

### Install Bun (if not already installed)

**macOS/Linux:**
```bash
curl -fsSL https://bun.sh/install | bash
```

**Windows:**
```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```

**Alternative (using npm):**
```bash
npm install -g bun
```

### Install Dependencies
```bash
bun install
```

### Setup Database
```bash
bun run prisma:migrate
```

### Run Development Server
```bash
bun run dev
```
Visit [http://localhost:3000](http://localhost:3000)

## Testing

### Run All Tests
```bash
bun run test:run
```

## Build & Deploy

### Production Build
```bash
bun run build
bun run start
```

### Linting
```bash
bun run lint
```
