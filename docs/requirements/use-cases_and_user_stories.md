# Use Cases and User Stories for BeastMode

## 1. Detailed Use-Cases Description

### UC-01: Register/Login

| **Id**                   | **UC-01**                                                                                                                                                                                                                                                                           |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Use Case Name**        | Register/Login                                                                                                                                                                                                                                                                      |
| **Goal**                 | Allow users to create an account and log in securely                                                                                                                                                                                                                                |
| **Actor**                | Standard User                                                                                                                                                                                                                                                                       |
| **Pre-condition**        | User is not logged in                                                                                                                                                                                                                                                               |
| **Post-condition**       | User is logged in; session is active                                                                                                                                                                                                                                                |
| **Main Scenario**        | 1. User navigates to the registration/login page. <br> 2. User enters valid credentials. <br> 3. System validates the input. <br> 4. For registration, a verification email is sent. <br> 5. For login, credentials are authenticated. <br> 6. User is redirected to the dashboard. |
| **Alternative Scenario** | - If credentials are invalid, an error message is displayed. <br> - If an email is already registered, the system prompts the user to recover their password.                                                                                                                       |

---

### UC-02: Manage Profile

| **Id**                   | **UC-02**                                                                                                                                                                                                                                             |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Use Case Name**        | Manage Profile                                                                                                                                                                                                                                        |
| **Goal**                 | Enable users to update profile details and preferences                                                                                                                                                                                                |
| **Actor**                | Standard User                                                                                                                                                                                                                                         |
| **Pre-condition**        | User is logged in                                                                                                                                                                                                                                     |
| **Post-condition**       | Profile details are updated and saved                                                                                                                                                                                                                 |
| **Main Scenario**        | 1. User accesses the profile management section. <br> 2. User edits personal information, fitness goals, and privacy settings. <br> 3. User submits changes. <br> 4. System validates and saves the updates. <br> 5. A confirmation message is shown. |
| **Alternative Scenario** | - If the entered data is invalid, the system shows an error message. <br> - If the session expires during updates, the system prompts the user to log in again.                                                                                       |

---

### UC-03: Log Workout Session

| **Id**                   | **UC-03**                                                                                                                                                                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Use Case Name**        | Log Workout Session                                                                                                                                                                                                                                           |
| **Goal**                 | Record the details of a workout session                                                                                                                                                                                                                       |
| **Actor**                | Standard User                                                                                                                                                                                                                                                 |
| **Pre-condition**        | User is logged in                                                                                                                                                                                                                                             |
| **Post-condition**       | Workout session is recorded                                                                                                                                                                                                                                   |
| **Main Scenario**        | 1. User clicks the "Start Workout" button. <br> 2. System initiates a new workout session with a timestamp. <br> 3. User enters details (sets, reps, weights, optional notes). <br> 4. User saves the workout. <br> 5. System validates and logs the session. |
| **Alternative Scenario** | - If required fields are missing, the system displays an error message. <br> - If a network error occurs during saving, the system prompts the user to retry the submission.                                                                                  |

---

### UC-04: View Workout History

| **Id**                   | **UC-04**                                                                                                                                                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Use Case Name**        | View Workout History                                                                                                                                                                                                     |
| **Goal**                 | Display past workout sessions in chronological order                                                                                                                                                                     |
| **Actor**                | Standard User                                                                                                                                                                                                            |
| **Pre-condition**        | User is logged in                                                                                                                                                                                                        |
| **Post-condition**       | Workout history is displayed                                                                                                                                                                                             |
| **Main Scenario**        | 1. User navigates to the workout history section. <br> 2. System retrieves logged sessions. <br> 3. Sessions are displayed in chronological order. <br> 4. User can apply filters to view data by specific time periods. |
| **Alternative Scenario** | - If no workouts exist, the system displays a message indicating an empty history. <br> - If filters are applied incorrectly, the system reverts to the default view and notifies the user.                              |

---

### UC-05: Duplicate Workout

| **Id**                   | **UC-05**                                                                                                                                                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Use Case Name**        | Duplicate Workout                                                                                                                                                                                                                           |
| **Goal**                 | Quickly replicate a previous workout session                                                                                                                                                                                                |
| **Actor**                | Standard User                                                                                                                                                                                                                               |
| **Pre-condition**        | User is logged in; previous workout exists                                                                                                                                                                                                  |
| **Post-condition**       | A new workout session is created as a duplicate                                                                                                                                                                                             |
| **Main Scenario**        | 1. User selects an existing workout session. <br> 2. User clicks "Duplicate Workout". <br> 3. System copies the workout details into a new session. <br> 4. User reviews and confirms the duplicated session. <br> 5. New session is saved. |
| **Alternative Scenario** | - If the duplication fails due to data inconsistency, the system notifies the user and logs the error.                                                                                                                                      |

---

### UC-06: Share Workout

| **Id**                   | **UC-06**                                                                                                                                                                                                                                       |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Use Case Name**        | Share Workout                                                                                                                                                                                                                                   |
| **Goal**                 | Share a workout session with the community or on social media                                                                                                                                                                                   |
| **Actor**                | Standard User                                                                                                                                                                                                                                   |
| **Pre-condition**        | User is logged in; workout is marked as shareable                                                                                                                                                                                               |
| **Post-condition**       | Workout is shared on the community feed or social media                                                                                                                                                                                         |
| **Main Scenario**        | 1. User selects a workout session. <br> 2. User clicks "Share Workout". <br> 3. System verifies the workout's privacy settings. <br> 4. Workout is posted on the community feed or shared on social media. <br> 5. A confirmation is displayed. |
| **Alternative Scenario** | - If privacy settings prevent sharing, the system displays an appropriate message. <br> - If a network issue occurs, the system prompts the user to retry sharing later.                                                                        |

---

### UC-07: View Progress

| **Id**                   | **UC-07**                                                                                                                                                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Use Case Name**        | View Progress                                                                                                                                                                                                       |
| **Goal**                 | Show visual progress analytics and performance summaries                                                                                                                                                            |
| **Actor**                | Standard User                                                                                                                                                                                                       |
| **Pre-condition**        | User is logged in with workout data                                                                                                                                                                                 |
| **Post-condition**       | Progress analytics and charts are displayed                                                                                                                                                                         |
| **Main Scenario**        | 1. User selects "View Progress" from the dashboard. <br> 2. System retrieves relevant workout data. <br> 3. Graphs and summary statistics are generated. <br> 4. Visual progress charts are displayed for the user. |
| **Alternative Scenario** | - If no workout data is available, the system shows a "No progress data available" message. <br> - If there is an error in generating graphs, the system displays fallback statistics.                              |

---

### UC-08: Create/Edit Exercise

| **Id**                   | **UC-08**                                                                                                                                                                                                                                                                           |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Use Case Name**        | Create/Edit Exercise                                                                                                                                                                                                                                                                |
| **Goal**                 | Allow users to add or modify exercise details in the database                                                                                                                                                                                                                       |
| **Actor**                | Standard User                                                                                                                                                                                                                                                                       |
| **Pre-condition**        | User is logged in                                                                                                                                                                                                                                                                   |
| **Post-condition**       | New or updated exercise details are saved                                                                                                                                                                                                                                           |
| **Main Scenario**        | 1. User navigates to the exercise management section. <br> 2. User selects "Create Exercise" or "Edit Exercise". <br> 3. User enters or updates exercise details (name, muscle group, equipment). <br> 4. System validates and saves the exercise. <br> 5. A confirmation is shown. |
| **Alternative Scenario** | - If mandatory fields are missing, the system displays an error message. <br> - If another user is editing the same record, the system locks the record and notifies the user of the conflict.                                                                                      |

---

### UC-09: Search and Filter Exercises

| **Id**                   | **UC-09**                                                                                                                                                                                                                                                                                                                                                |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Use Case Name**        | Search and Filter Exercises                                                                                                                                                                                                                                                                                                                              |
| **Goal**                 | Allow users to search for and filter exercises in the database                                                                                                                                                                                                                                                                                           |
| **Actor**                | Standard User                                                                                                                                                                                                                                                                                                                                            |
| **Pre-condition**        | User is logged in and in the Exercise Management section                                                                                                                                                                                                                                                                                                 |
| **Post-condition**       | A list of exercises matching the search/filter criteria is shown                                                                                                                                                                                                                                                                                         |
| **Main Scenario**        | 1. User navigates to the Exercise Management section. <br> 2. User enters keywords and/or selects filter criteria (e.g., muscle group, equipment). <br> 3. System processes the criteria and retrieves a filtered list of exercises. <br> 4. Filtered results are displayed for the user to review. <br> 5. User can click an exercise for more details. |
| **Alternative Scenario** | - If no exercises match the criteria, the system displays a “No results found” message. <br> - If the criteria are invalid, the system offers suggestions or defaults to showing all available exercises.                                                                                                                                                |

---

### UC-10: Manage Workout Routines

| **Id**                   | **UC-10**                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Use Case Name**        | Manage Workout Routines                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Goal**                 | Enable users to create, view, edit, and delete workout routines for quick access to workout sessions                                                                                                                                                                                                                                                                                                                                                               |
| **Actor**                | Standard User                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Pre-condition**        | User is logged in and has access to the Routine Management section                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Post-condition**       | Routine is created, updated, or deleted and becomes available for quick workout initiation                                                                                                                                                                                                                                                                                                                                                                         |
| **Main Scenario**        | 1. User navigates to the Routine Management section. <br> 2. User clicks on "Create Routine" and the system displays a form with fields (e.g., routine name, list of exercises, exercise order, optional durations or notes). <br> 3. User fills in the required details and submits the form. <br> 4. The system validates the inputs and saves the routine. <br> 5. A confirmation message is displayed, and the new routine appears in the user's routine list. |
| **Alternative Scenario** | - If required fields are missing, an error message is displayed. <br> - If a routine with the same name already exists, the system warns the user and suggests editing the existing routine or choosing a new name. <br> - If a network error occurs during submission, the system retains the data locally and prompts the user to retry saving once connectivity is restored.                                                                                    |

---

### UC-11: Manage User Accounts

| **Id**                   | **UC-11**                                                                                                                                                                                                                                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Use Case Name**        | Manage User Accounts                                                                                                                                                                                                                                                           |
| **Goal**                 | Manage and control user accounts to maintain system security and compliance                                                                                                                                                                                                    |
| **Actor**                | Administrator                                                                                                                                                                                                                                                                  |
| **Pre-condition**        | Administrator is logged in                                                                                                                                                                                                                                                     |
| **Post-condition**       | User accounts are updated accordingly                                                                                                                                                                                                                                          |
| **Main Scenario**        | 1. Administrator navigates to the user management section. <br> 2. Administrator searches for a specific user. <br> 3. Administrator views and edits user details. <br> 4. Administrator updates the user status or account settings. <br> 5. Changes are saved and confirmed. |
| **Alternative Scenario** | - If invalid user data is entered, the system displays an error message. <br> - If the update fails, the system logs the error and notifies the administrator.                                                                                                                 |

## 2. User Stories and Acceptance Criteria

### 2.1 Standard User Stories

**Story 1: User Profile Management**

**User Story:**

“As a Standard User, I want to register, log in, and manage my profile so that I can personalize my experience and track my progress.”

**Acceptance Criteria:**

- **Registration & Login:**
  - Users can sign up using email or social authentication.
  - Passwords are securely stored, and email verification is required.
  - Error messages are displayed for invalid inputs.
- **Profile Management:**
  - Users can update personal information, fitness goals, and workout preferences.
  - Privacy settings allow users to control who can view their profile and workout logs.
  - A confirmation message is displayed after updates.

**Story 2: Workout Logging**

**User Story:**

“As a Standard User, I want to log my workout sessions so that I can monitor my performance over time.”

**Acceptance Criteria:**

- **Session Start:**
  - A “Start Workout” button initiates a new workout session.
  - The system records the current timestamp automatically.
- **Workout Details:**
  - Users can enter sets, reps, weights, and optional notes.
  - All entries must be validated (e.g., numeric values for sets/reps).
- **Editing & Deletion:**
  - Logged workouts can be edited or deleted.
  - Duplicate functionality is available to replicate past sessions quickly.
- **Feedback:**
  - A success message is shown upon saving.
  - Incomplete or invalid data prompts error messages.

**Story 3: Progress Tracking**

**User Story:**

“As a Standard User, I want to view my workout history and progress graphs so that I can analyze improvements and adjust my training.”

**Acceptance Criteria:**

- **Workout History:**
  - All logged sessions are displayed in chronological order.
  - Users can filter history by week, month, or year.
- **Analytics:**
  - Graphs and charts are generated from workout data.
  - Summary statistics (e.g., total workouts, personal bests) are provided.
- **Responsiveness:**
  - The progress dashboard is accessible on various devices with consistent performance.

**Story 4: Exercise Management**

**User Story:**

“As a Standard User, I want to create and manage custom exercises so that I can tailor my workouts to my specific needs.”

**Acceptance Criteria:**

- **Creation & Editing:**
  - A form allows the creation of new exercises (fields include name, primary muscle group, and equipment).
  - Users can edit or delete existing custom exercises.
- **Database Integration:**
  - Users have access to a predefined exercise database with search and filtering capabilities.
- **Validation:**
  - Mandatory fields are enforced and validated.
  - Users receive error messages when required data is missing.

**Story 5: Sharing Workouts**

**User Story:**

“As a Standard User, I want to share my workouts with the community so that I can receive feedback and stay motivated.”

**Acceptance Criteria:**

- **Sharing Options:**
  - Privacy settings are respected (only public workouts are shared).
  - Users can post workouts to share them on social media.
- Notifications:
  - Users receive confirmations when a workout is successfully shared.

### 2.2 Administrator Stories

**Story 6: User Account Management**

**User Story:**

“As an Administrator, I want to manage user accounts so that I can maintain a secure and compliant system.”

**Acceptance Criteria:**

- **Account Controls:**
  - Admins can view, edit, or deactivate user accounts.
  - A searchable list of users is available with filtering by role or status.
- **Audit Trails:**
  - All admin actions are logged for audit purposes.
- **Security:**
  - Access is restricted to authenticated administrators only.

## 3. Detailed Scenarios

### 3.1 Scenario for Workout Logging

**Happy Path:**

- **Step 1:** The user logs in and clicks the “Start Workout” button.
- **Step 2:** The system starts a new session, automatically recording the current timestamp.
- **Step 3:** The user enters valid data for sets, reps, and weights.
- **Step 4:** The user saves the session and receives a confirmation message.
- **Step 5:** The session appears in the workout history.

**Edge Cases:**

- **Incomplete Data:**
  - User omits required fields (e.g., sets) and attempts to save.
  - The system prevents saving and displays an error message specifying missing fields.
- **Network Failure:**
  - During data entry or submission, a network error occurs.
  - The system displays a network error message and offers an option to retry.

### 3.2 Scenario for User Profile Management

**Happy Path:**

- **Step 1:** The user accesses the login page, fills out all required fields, and submits the form.
- **Step 2:** An email verification is sent; upon verification, the user logs in successfully.
- **Step 3:** The user updates their profile details (e.g., fitness goals) and saves the changes.
- **Step 4:** A confirmation message indicates that the profile update was successful.

**Edge Cases:**

- **Invalid Email Format:**
  - The user enters an improperly formatted email.
  - The system immediately flags the error with a clear message.
- **Missing Mandatory Fields:**
  - The user enters an improperly formatted data.
  - The system immediately flags the error with a clear message.
- **Session Timeout:**
  - The user is inactive during profile updates, leading to a session timeout.
  - The system warns the user and saves data if possible, or prompts re-authentication.

### 3.3 Scenario for Exercise Management

**Happy Path:**

- **Step 1:** The user selects “Create Exercise” from the exercise management section.
- **Step 2:** The user enters valid exercise details (name, muscle group, equipment).
- **Step 3:** The system validates the data and creates the new exercise record.
- **Step 4:** The new exercise is available in both custom and search views.

**Edge Cases:**

- **Missing Mandatory Fields:**
  - User leaves the exercise name blank.
  - The system prevents creation and displays an error message.
- **Editing Conflict:**
  - Two sessions attempt to edit the same exercise simultaneously.
  - The system locks the record and informs the second user to wait.

### 3.4 Viewing Progress

**Happy Path:**

- **Step 1:** User accesses the progress tracking section.
- **Step 2:** Selects a timeframe (weekly, monthly, yearly).
- **Step 3:** System retrieves the data and displays graphs/charts.
- **Step 4:** User interacts with filters to view different aspects of progress.

**Edge Cases:**

- **No Workout Data:**
  - User navigates to progress tracking.
  - System detects no logged workouts.
  - A friendly message (“No data available. Please log a workout to see progress.”) is displayed.
- **Partial Data Retrieval:**
  - System retrieves data, but some records are missing or corrupt.
  - Partial graphs are rendered with a notification indicating data issues.
  - The user is prompted to check data integrity or contact support.

### 3.5 Creating and Managing a Workout Routine

**Happy Path:**

- **Step 1:** The user logs in and navigates to the “Routines” section from the main menu.
- **Step 2:** The user selects “Create New Routine.” and the system displays a routine creation form with fields for routine name, description, and other details.
- **Step 3:** The system presents a list of available exercises from the exercise database.
- **Step 4:** The user clicks “Save Routine.” then the system validates the input (ensuring required fields like the routine name are not empty and that valid numbers are entered).

**Edge Cases:**

- **Routine Creation Error:**
  - The user leaves the routine name field empty or enters invalid characters.
  - The system highlights the missing/invalid field with an inline error message (e.g., “Routine name is required”).
- **Duplicate Routine Name:**
  - The user enters a routine name that already exists in their list.
  - The system warns the user with a message (e.g., “A routine with this name already exists. Please choose a different name.”)
- **Exercise Selection Error:**
  - The user tries to add an exercise that is no longer available in the database or enters an invalid value (e.g., negative sets or reps).
  - The system flags the error for the specific exercise entry.
  - A clear message prompts the user to either select a valid exercise or correct the data (e.g., “Please enter a valid number of sets”).
- **Network Interruption during Saving:**
  - The network connection is lost as the user attempts to save the routine.
  - The system alerts the user that the routine couldn’t be saved due to connectivity issues.

## 4. Use Case Diagrams

### 4.1 Use Case Diagram for Standard User Interactions

![Standard_User_Interactions.svg](https://raw.githubusercontent.com/Ahmed-M-Aboutaleb/2025-BeastMode-Monorepo/refs/heads/main/docs/diagrams/usecases/Standard_User_Interactions.svg)

### 4.2 Use Case Diagram for Administrators

![Administrator_Interactions.svg](https://raw.githubusercontent.com/Ahmed-M-Aboutaleb/2025-BeastMode-Monorepo/refs/heads/main/docs/diagrams/usecases/Administrator_Interactions.svg)

### 4.3 Use Case Diagram for manage routines

![Manage_Routines.svg](https://raw.githubusercontent.com/Ahmed-M-Aboutaleb/2025-BeastMode-Monorepo/refs/heads/main/docs/diagrams/usecases/Manage_Routines.svg)

### 4.4 Use Case Diagram for manage workouts

![Manage_Workouts.svg](https://raw.githubusercontent.com/Ahmed-M-Aboutaleb/2025-BeastMode-Monorepo/refs/heads/main/docs/diagrams/usecases/Manage_Workouts.svg)

### 4.5 Use Case Diagram for manage exercises

![Manage_Exercises.svg](https://raw.githubusercontent.com/Ahmed-M-Aboutaleb/2025-BeastMode-Monorepo/refs/heads/main/docs/diagrams/usecases/Manage_Exercises.svg)

### 4.6 Use Case Diagram for manage profile

![Manage_Profile.svg](https://raw.githubusercontent.com/Ahmed-M-Aboutaleb/2025-BeastMode-Monorepo/refs/heads/main/docs/diagrams/usecases/Manage_Profile.svg)

### 4.7 Use Case Diagram for view progress

![View_Progress.svg](https://raw.githubusercontent.com/Ahmed-M-Aboutaleb/2025-BeastMode-Monorepo/refs/heads/main/docs/diagrams/usecases/View_Progress.svg)
