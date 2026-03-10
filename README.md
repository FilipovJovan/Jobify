# Jobify - MERN SaaS Platform

#### Full-stack job management platform built with React, Express, MongoDB and JWT-based authentication

## 1. Problem

#### Design and implement a secure SaaS platform allowing authenticated users to manage job applications, with proper access control, pagination, filtering, and production-ready authentication architecture.

## 2. System Architecture

- Frontend: React + React Router (nested protected routes)
- Backend: Express REST API
- Database: MongoDB (Mongoose ODM)
- Authentication: JWT (Access + Refresh strategy)
- Security: HTTP-only cookies for refresh tokens

## 3. Authentication Design
#### The application uses JWT-based authentication stored in an HTTP-only cookie.
#### Token characteristics:

- Signed JWT containing userId and role
- Verified on every protected request via Express middleware
- Stored in an HTTP-only cookie to mitigate XSS attacks
- secure flag enabled in production environments

#### Future Improvement: Introduce a short-lived access token and long-lived refresh token strategy to improve session security and enable token rotation.

## 4. Authorization $ Route Protection

- Custom Express middleware verifies JWT
- Role-based access control (admin vs user)
- Protected frontend routes redirect unauthorized users
- Expired tokens handled via refresh flow

## 5. Data Modeling

- Jobs linked to users via ObjectId reference
- Validation enforced through Mongoose schemas
- Enum-based job status & type fields
- Timestamps for audit tracking


## 6. API Design

- RESTful routes using Express Router
- Server-side pagination (page, limit)
- Filtering via query parameters
- Sorting (newest, oldest, A-Z, Z-A)
- Standardized error handling using custom error classes

## 7. Frontend Architecture

- React Router loaders for data fetching
- Centralized API layer (custom fetch wrapper)
- Global loading state handling
- Search container with controlled query params

## 8. Performance Considerations

- Server-side pagination reduces payload size
- Query filtering minimizes unnecessary DB scans
- Protected routes prevent redundant API calls

## 9. Production Deployment

- Frontend built and served statically by Express
- Environment variables for JWT secrets
- Secure cookie configuration in production
- Deployment on Render

## 10. Future Improvements

- Introduce Redis-backed refresh token storage
- Add request rate limiting & monitoring
- Implement integration testing
- Dockerize application