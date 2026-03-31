# Platform Components: Infrastructure and Orchestration

### Student Information
- **Student Name**: Dilsara Thiranjaya
- **Student Number**: 2301692050
- **Slack Handle**: Dilsara Thiranjaya
- **GCP Project ID**: dilsara

---

## Project Description
This repository contains the foundational platform components for the Library Management System. These services provide the necessary infrastructure for service discovery, centralized configuration, and request routing within the microservices ecosystem.

## Components
- **Service Registry (Eureka)**: Handles dynamic service discovery.
- **Config Server**: Provides centralized configuration management.
- **API Gateway**: Acts as the single entry point for all client requests.

## Technology Stack
- **Framework**: Spring Boot 4.0.3
- **Microservices Orchestration**: Spring Cloud 2025.1.0
- **Build Tool**: Maven
- **Environment**: Java 25

## Setup / Getting Started
To run the platform components:
1. Ensure Java 25 and Maven are installed.
2. Start the `config-server` first.
3. Start the `service-registry`.
4. Start the `api-gateway`.