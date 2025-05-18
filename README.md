# Auth Microservice

## Overview
This is an authentication microservice built using Node.js and Express, designed to handle user registration, login, and authentication in a scalable and secure way. It’s deployed on AWS Elastic Container Service (ECS) behind an Application Load Balancer (ALB) for high availability and performance.

## Features
- User registration and login
- Password hashing using bcrypt
- JWT-based authentication and authorization
- Health check endpoint for load balancer monitoring
- Deployed using Docker and AWS ECS
- CI/CD pipeline using GitHub Actions

## Technologies Used
- Node.js
- Express.js
- PostgreSQL (AWS RDS)
- Docker
- AWS ECS & ALB
- GitHub Actions for CI/CD
- JWT & bcrypt for security

## Architecture
- Docker container for the service
- ECS cluster hosting the container instances
- Application Load Balancer routing traffic to healthy containers
- Target groups with health checks for monitoring container health
- Security groups configured for secure communication between ALB and ECS tasks

## Setup and Installation

### Prerequisites
- Node.js & npm installed
- Docker installed
- AWS account with ECS, RDS, and ALB configured
- AWS CLI configured with access keys

### Running Locally
1. Clone the repo:
   ```bash
   git clone <repo-url>
   cd auth-microservice
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file based on .env.example with your database credentials and secrets.
4. Start the server:
   ```bash
   npm start
   ```
5. Test health endpoint:
   ```bash
   curl http://localhost:5000/health
   ```
## Docker Build and Run
```bash
docker build -t auth-microservice .
docker run -p 5000:5000 auth-microservice
```
## AWS Deployment
- Service runs on AWS Elastic Container Service (ECS) behind an Application Load Balancer (ALB).
- The ALB performs health checks on the `/health` endpoint to monitor container health and availability.
- A CI/CD pipeline is configured to automatically build the Docker image, push it to Docker Hub, and update the ECS service upon every push to the `main` branch.

## CI/CD Pipeline
- Utilizes GitHub Actions workflow to build and push Docker images to Docker Hub.
- Automatically deploys the updated Docker image to the AWS ECS service.
- Runs automated tests before deployment to ensure code stability and prevent broken builds from reaching production.

## Security
- Passwords are securely hashed using **bcrypt** before storage.
- Authentication and user sessions are managed using **JWT (JSON Web Tokens)**.
- Security groups are configured to restrict traffic between the Application Load Balancer and ECS tasks, ensuring only authorized communication.
- Sensitive configuration and secrets are stored securely using environment variables in `.env` files locally and GitHub Secrets for CI/CD workflows.

## Testing
- Testing is done using **Jest** and **Supertest** for unit and integration tests.
- To run tests locally, use the following command:

```bash
NODE_ENV=test npm test
```
## Folder Structure
```
controllers/     # Request handlers
DB/              # Database connection and setup
models/          # Database models
routes/          # API routes
server.js        # Application entry point
Dockerfile       # Docker build instructions
```

## Next Steps / Future Improvements

- Add more microservices to build a full application ecosystem (e.g., user profile service, product catalog service).
- Implement role-based access control (RBAC) to manage permissions and user roles securely.
- Integrate AWS API Gateway for enhanced security, throttling, and API management.
- Add monitoring and alerting using AWS CloudWatch to track application health and receive proactive notifications.
