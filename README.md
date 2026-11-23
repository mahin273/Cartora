# Cartora

Cartora is a modular, high-performance e-commerce backend built with TypeScript and Node.js. It is designed to provide core e-commerce capabilities—including catalog discovery, inventory reservation, cart management, and order orchestration—with an emphasis on clean architecture, strict typing, and reliable data consistency.

---

## Key Features

- **Product Catalog & Categorization:** Fast and structured retrieval of products, categories, filtering, and pagination.
- **Inventory Management:** Accurate stock tracking with atomic operations to prevent overselling.
- **Shopping Cart & Checkout:** Stateful cart management and seamless transition into order creation.
- **Order Lifecycle & State Machine:** Managed transitions from placement, simulated payment processing, fulfillment, to completion.
- **Asynchronous Processing:** Event-driven architecture for background tasks such as order confirmation and notification dispatch.
- **Observability & Security:** Strict boundary validations, centralized error handling, and structured logging.

---

## Tech Stack & Architecture

- **Language & Runtime:** [TypeScript](https://www.typescriptlang.org/) / [Node.js](https://nodejs.org/)
- **Core Framework:** [NestJS](https://nestjs.com/) / Express
- **Database & Data Modeling:** [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
- **Cache & Rate Limiting:** [Redis](https://redis.io/)
- **Event Streaming:** [Apache Kafka](https://kafka.apache.org/)
- **Internal RPC:** [gRPC](https://grpc.io/) with Protocol Buffers
- **Containers & Orchestration:** [Docker](https://www.docker.com/) & [Kubernetes](https://kubernetes.io/)
- **Testing:** [Jest](https://jestjs.io/)

---

## Getting Started

### Prerequisites

Ensure you have the following installed locally:
- **Node.js** (v20.x or higher)
- **npm** (v10.x or higher)

### Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd Cartora
npm install
```

### Configuration

Create an environment configuration file:

```bash
cp .env.example .env
```

Configure any required database and service connection parameters in `.env`.

---

## Development & Build Scripts

| Command | Description |
|---|---|
| `npm run dev` | Runs the development server with live reload (`tsx watch`) |
| `npm run build` | Compiles TypeScript source to production JavaScript (`dist/`) |
| `npm start` | Executes the compiled production bundle (`dist/index.js`) |
| `npm test` | Runs the test suite |

---

## Project Structure

```text
Cartora/
├── src/
│   ├── config/         # Centralized configuration and env validation
│   ├── modules/        # Domain modules (products, cart, orders, etc.)
│   ├── common/         # Shared utilities, filters, guards, and decorators
│   └── index.ts        # Application entrypoint
├── dist/               # Compiled JavaScript artifacts
├── .gitignore          # Git exclusion rules
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript compiler configuration
└── README.md           # Project documentation
```

---

## Engineering Standards

1. **Strict Type Safety:** Strict compiler settings are enforced (`noImplicitAny`, `strictNullChecks`). No runtime unchecked types.
2. **Layered Separation of Concerns:** Handlers/Controllers delegate to business domain Services, which in turn access Repositories/Data Access Layers.
3. **Financial Precision:** Currency and prices are modeled using integer minor units (e.g., cents) to eliminate floating-point calculation discrepancies.
4. **Resilience & Transactions:** Atomic multi-step operations (e.g., checkout and inventory reduction) are bound within database transactions.

---

## License

This project is licensed under the [MIT License](LICENSE).
