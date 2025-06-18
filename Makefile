# File: Makefile

# Default target
.PHONY: all
all: up

# Start PostgreSQL and Next.js app
.PHONY: up
dev:
	docker-compose -f docker-compose.db.yml up -d
	# docker-compose up -d
	npm run dev

# Stop all services
.PHONY: down
down:
	docker-compose -f docker-compose.db.yml down
	docker-compose down

# Restart services
.PHONY: restart
restart: down up

# Show logs
.PHONY: logs
logs:
	docker-compose -f docker-compose.db.yml logs -f
	docker-compose logs -f

# Rebuild containers
.PHONY: build
build:
	docker-compose -f docker-compose.db.yml up -d --build
	docker-compose up -d --build
