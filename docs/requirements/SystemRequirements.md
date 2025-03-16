# System Requirements Specification (SRS) for BeastMode

## 1. **Introduction**

### 1.1 Purpose

This SRS document defines the requirements for BeastMode, a comprehensive workout tracker application. BeastMode enables users to log workouts, track progress, manage exercises, and engage with a supportive fitness community. The document outlines the system’s functional and non-functional requirements, system architecture, use cases, assumptions, user roles, constraints, and dependencies in accordance with IEEE 830 standards.

### 1.2 Scope

BeastMode will be a web application that offers:

- **Workout Logging:** Easy creation, editing, and tracking of workout sessions.
- **Exercise Management:** A searchable database and management system for exercises.
- **Progress Tracking:** Visual analytics through graphs and performance summaries.
- **User Profiles:** Personalized profiles with privacy settings.
- **Social Features:** Community engagement through workout sharing.
- **Data Synchronization:** Real-time data updates and cloud backup.

### 1.3 Definitions, Acronyms, and Abbreviations

- **SRS:** System Requirements Specification.
- **IEEE:** Institute of Electrical and Electronics Engineers.
- **JWT:** JSON Web Token, used for secure authentication.
- **UI:** User Interface.
- **UX:** User Experience.
- **BRD:** Business Requirements Document.
- **BeastMode:** The workout tracker application.

## **2. Overall Description**

### 2.1 **Product Perspective**

BeastMode is a standalone web application that integrates with cloud-based services for data storage, authentication, and analytics. The application will follow a monolithic architecture.

### 2.2 Product Functions

- **Workout Logging:** Initiate, log, and duplicate workout sessions; record sets, reps, weights, and notes.
- **Exercise Management:** Create, edit, delete, and search exercises from a predefined database.
- **Progress Tracking:** Display chronological workout history and provide graphical progress reports.
- **User Profile Management:** Register, manage profiles, and set fitness goals with adjustable privacy settings.
- **Social Features:** Share workout logs and interact with community members.
- **Data Synchronization:** Maintain up-to-date user data across multiple devices with real-time cloud sync.

### 2.3 User Characteristics

- **Standard Users:** Fitness enthusiasts and athletes who log workouts, monitor progress, and participate in community engagement.
- **Administrators:** Responsible for managing user accounts, moderating content, and configuring system parameters.

### 2.4 **Constraints**

- Workout logs must load within 2 seconds.
- Secure authentication (using JWT) and data encryption are mandatory.
- The system must support at least 1000 concurrent users.
- The UI must be accessible and compatible with a variety of devices and screen resolutions.

### 2.5 Assumptions and Dependencies

- **Assumptions:**
  - Users possess a basic understanding of web applications.
  - Stable internet connectivity is available for data synchronization.
- **Dependencies:**
  - Compatibility with modern web browsers and mobile operating systems.

## 3. Specific Requirements

### 3.1 Functional Requirements

#### 3.1.1 User Profile Management

- **FR1:** The system shall allow users to register, login, and manage their profiles.
- **FR2:** The system shall permit users to set and update their fitness goals and workout preferences.
- **FR3:** The system shall offer configurable privacy settings for profile visibility.

#### 3.1.2 Exercise Management

- **FR4:** The system shall enable users to create new exercises with fields such as name, primary muscle group, and required equipment.
- **FR5:** The system shall allow users to edit and delete existing exercise records.
- **FR6:** The system shall provide access to a pre-populated exercise database.
- **FR7:** The system shall include search and filtering functionality for exercises.
- **FR8:** Data validation rules must ensure that all required fields (e.g., exercise name) are provided.

#### 3.1.3 Workout Logging

- **FR9:** The system shall allow users to start and record new workout sessions.
- **FR10:** The system shall capture details such as sets, reps, weights, and optional notes.
- **FR11:** Each workout session shall be timestamped with the date and time.
- **FR12:** Users shall be able to duplicate past workout sessions for recurring routines.
- **FR13:** Workout logs shall be editable and deletable by the user.

#### 3.1.4 Progress Tracking

- **FR14:** The system shall display workout history in chronological order.
- **FR15:** The system shall generate visual progress reports (e.g., graphs, charts).
- **FR16:** Users shall be able to filter progress data by time intervals (week, month, year).
- **FR17:** Summary statistics (e.g., total workouts, personal bests) shall be provided.

#### 3.1.5 Social and Community Features

- **FR18:** The system shall enable users to share workout logs on social media platforms.
- **FR19:** Users shall be able to view community workout logs and profiles.
- **FR20:** The system shall include content moderation features to ensure a supportive community environment.

#### 3.1.6 Data Synchronization and Backup

- **FR21:** The system shall synchronize data across multiple devices in real time.
- **FR22:** Regular backups shall be performed to protect against data loss.

### 3.2 Non-Functional Requirements

#### 3.2.1 Performance Requirements

- **NFR1:** The application shall load workout logs within 2 seconds.
- **NFR2:** The system must support a minimum of 1000 concurrent users without performance degradation.

#### 3.2.2 Security Requirements

- **NFR3:** All user data must be encrypted in transit and at rest.
- **NFR4:** The system shall use secure authentication protocols (e.g., JWT).
- **NFR5:** Role-based access control must be implemented for administrative functions.

#### 3.2.3 Scalability and Reliability

- **NFR6:** The architecture must support horizontal scaling to accommodate increasing user numbers.
- **NFR7:** The system must ensure an uptime of at least 99.9%.
- **NFR8:** Regular system maintenance and monitoring are required to sustain performance.

#### 3.2.4 Usability and Accessibility

- **NFR9:** The UI must be intuitive, responsive, and adhere to accessibility standards.
- **NFR10:** Context-sensitive help and documentation should be available within the application.

#### 3.2.5 Maintainability and Extensibility

- **NFR11:** The system design must facilitate straightforward updates and the integration of new features.
- **NFR12:** Comprehensive documentation must be maintained for all system components.

### 3.3 **System Architecture**

BeastMode employs a multi-tier architecture to separate concerns and enhance scalability:

#### 3.3.1 Presentation Layer

- **Components:** Web interfaces.
- **Technologies:**
  - Framework: Next.js (React), TypeScript
  - State Management: Redux.js
  - Component library: Shadcn
  - Hosting: Vercel

#### 3.3.2 Application Layer

- **Components:** Business logic, workout logging, progress tracking, and social features.
- **Technologies:**
  - Framework: NestJS, Node.js, TypeScript
  - Authentication: OAuth, JWT
  - Hosting: Azure App Service

#### 3.3.3 Data Layer

- **Components:** Databases for storing user profiles, workout logs, and exercise details.
- **Technologies:** MongoDB Atlas.
- **Dependencies:** Cloud-based storage services for data backup and synchronization.

#### 3.3.4 Integration Layer

- **Components:** APIs for third-party authentication, social media, and wearable device integration.
- **Dependencies:** External service providers ensuring secure authentication and data exchange.

#### 3.3.5 System Architecture Diagram

![System Architecture Diagram.svg](https://raw.githubusercontent.com/Ahmed-M-Aboutaleb/2025-BeastMode-Monorepo/refs/heads/main/docs/diagrams/System_Architecture_Diagram.svg)

## 3.4 User Roles

- **Standard User:**
  - Can log workouts, manage personal data, and engage with community features.
  - Has access to progress tracking and exercise management functionalities.
- **Administrator:**
  - Has full control over user accounts and system configurations.
  - Responsible for content moderation and ensuring compliance with system policies.

## 4. Appendices

### 4.1 Glossary

- **Workout Session:** A recorded period in which a user logs exercises and related performance data.
- **Exercise Database:** A collection of predefined exercises from which users can select or add to.

### 4.2 Supporting Information

- The functional and non-functional requirements in this SRS are derived from the business objectives and key features outlined in the BeastMode BRD.
- This document will be reviewed and updated iteratively to accommodate evolving requirements.
