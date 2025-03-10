# Medi-Connect Project Overview

Author: Himchan Bae

## Application: Medi-Connect

### Overview:

The primary goal of Medi-Connect is to digitize and improve the traditional analog healthcare system, making it more efficient and accessible. This app provides an intuitive platform where patients can easily schedule medical appointments, and healthcare providers (physicians) can review patient medical records in advance.

Users can sign up by selecting their role as either a patient or a physician. Patients can input essential medical information and choose convenient time slots for their appointments, streamlining the booking process. Physicians can establish their available consultation times (session slots) and review patient medical information in advance, allowing for more efficient and well-prepared consultations. By bridging the connection between patients and healthcare providers, Medi-Connect aims to create a more convenient and streamlined healthcare process.

---

### Development Environment

- **Browser:** Chrome
- **Device:** MacBook Air 13-inch M1
- **Editor:** Visual Studio Code
  _All development and testing were conducted exclusively on Chrome; Chrome is recommended for best performance._

---

### Test Usernames and Passwords

**Patient Accounts**

- `patient_1@medi-c.com`
- `patient_2@medi-c.com`

**Physician Accounts**

- `physician_1@medi-c.com`
- `physician_2@medi-c.com`

All accounts have the same password: `Test12`.  
_It’s recommended to try signing up and logging in as a new user to review the registration and login logic._

---

### Target Users

#### A. Patients

Patients often experience the inconvenience of filling out medical records each time they visit a new hospital. They may have to explain previous treatments and medications, which is cumbersome and risks critical information—like allergies or vaccination history—being overlooked, potentially leading to incorrect prescriptions. This app enables patients to manage their medical records, avoiding the need to re-enter information at each visit. This enhances the consultation process and ensures that essential medical details are accurately communicated, resulting in safer and more effective care.

#### B. Physicians

For physicians, having a patient’s full medical history is essential for effective consultations. Yet, when patients fail to communicate crucial details, it can hinder proper diagnosis and treatment planning. This app allows physicians to view messages and preliminary judgments from family physicians, enabling efficient communication among specialists and general practitioners. This improves accuracy in prescription and treatment. Medi-Connect enables physicians to review patient medical records ahead of time, improving consultation efficiency, reducing repetitive questioning, and allowing for more personalized and accurate treatment.

---

### Data Source:

Medi-Connect adheres to **FHIR (Fast Healthcare Interoperability Resources)** standards, which provide a standardized framework for electronic healthcare information exchange. While FHIR contains an extensive array of data, the implementation will focus only on essential components (e.g., appointment workflows, clinical background data).

**Benefits of Using FHIR**

- **Interoperability:** FHIR enables the app to integrate with other healthcare systems, facilitating smoother data exchange.
- **Standardization:** FHIR’s structure ensures that healthcare data is consistent with global standards.
- **Scalability:** FHIR’s modular design lets us begin with essential features and expand capabilities as needed.

**Primary Data Sources** include patient-input information like vaccination records, allergy details, existing conditions, and past medical history, all of which are essential for informed and effective care.

---

### MVP Functionality

Medi-Connect implements **Role-Based Access Control** to deliver specific functionalities based on the user’s role (patient or physician).

#### Shared Features

1. Users can sign up with basic personal information; passwords are securely encrypted with bcrypt.
2. Secure login is provided via JWT tokens (valid for 1 hour).
3. Through the global header menu, users can access “My Info” to update personal information or log out.

#### A. Patients

1. In “My Information,” patients can register and view allergy and vaccination records (CRUD permissions vary by role: **Create/Read** for patients, **Update** for physicians, **Delete** for admins).
2. Patients can view available slots on specific dates in the “Scheduling” page and book their appointments.
3. Appointment status is managed as: **Available**, **Pending**, **Booked**, and **Finished**.
4. Pending appointments can be deleted in the patient’s “Appointment” page. Once confirmed by a physician, appointments become **Booked** and can no longer be canceled.
5. Patients can view diagnostic notes left by physicians in **Booked** or **Finished** appointments.

#### B. Physicians

1. In “My Information,” physicians can register and manage medical qualifications (CRUD permissions vary by role).
2. In “Scheduling,” physicians can select dates, set start and end times, break times, and session duration to create session slots.
3. Physicians can manage all created schedule slots in the “Appointment” page, deleting any **Available** slot as needed.
4. Physicians can confirm **Pending** appointments, making them **Booked**. They can then view patient details, leave notes on allergies, and update vaccination information.
5. Physicians can mark sessions as **Finished**, at which point records can no longer be modified, only viewed.

---

### Design

Medi-Connect is designed using IBM’s **Carbon Design System** for a modern and clean user interface that promotes user trust and maintains design consistency.

- Common layout elements like headers and footers facilitate efficient navigation. A breadcrumb trail in each page guides users, while modals enhance user experience by handling data updates and significant actions.
- All pages are responsive, providing a consistent experience across devices.

---

### Project Milestones

- **Sprint 1**

  - Built the wireframe using Figma and reviewed the workflow.
  - Developed registration and login with JWT tokens and bcrypt encryption.

- **Sprint 2**

  - Created the app mockup using Figma.
  - Developed datasets for patient medical records and ensured MongoDB storage.
  - Conducted initial tests to verify routing and data storage.

- **Sprint 3**

  - Added CSS for registration, login, and main interface pages.
  - Developed the patient appointment interface, enabling date-based slot selection.
  - Implemented physician scheduling capabilities.

- **Sprint 4**

  - Conducted user manual testing and implemented functionality for appointment notes.
  - Finished CSS for scheduling and appointment pages.

- **Final Sprint**
  - Refined CSS for a consistent experience.
  - Verified feature functionality across all roles, addressed bugs, and enhanced validation.

---

### Project Source Code Guide

#### 1. Root Directory

Contains `frontend` and `backend` folders with necessary configuration files for setup and deployment.

- **frontend/** - Client application (React/Next.js)
- **backend/** - Server application (Express.js and MongoDB)

#### 2. Frontend Structure

`frontend` directory contains all UI interaction code.

- `/public` - Icons and image assets
- `/src`
  - `/components` - Reusable UI components
  - `/app` - Handles routing with Next.js
    - `providers.js` - Manages AuthContext, header, footer, and theme settings
    - `layout.js` and `globals.scss` - Global styles and configuration
  - `/context` - Global state using AuthContext API
  - `/services` - API services

#### 3. Backend Structure

`backend` is Express-based and handles server-side processing.

- `/middleware` - Authentication
- `/models` - MongoDB schema files
- `/routes` - API endpoints
- `app.js` - Express app setup
- `server.js` - Server start file with environment port settings

#### 4. Key Files

- `frontend/package.json` - Manages frontend dependencies and scripts.
- `backend/package.json` - Manages backend dependencies and scripts.
- `frontend/.env` - Fontend environment variables (ignored).
- `backend/.env` - Backend environment variables (ignored).
- `.github/workflows/ci.yml` - CI configuration for GitHub Actions.

---

### Next Steps

1. **Enhanced Loading Indicators**

   - Use Carbon’s Skeletal components to clearly show loading states.

2. **Improved Schedule Deletion Logic**

   - Automatically delete entire schedules when all associated slots are removed.

3. **Cross-Browser Compatibility**

   - Optimize performance across multiple browsers and platforms (e.g., Safari, Firefox).

4. **Multi-language Support**

   - Expand language options for accessibility and user experience.

5. **Dark/Light Mode Support**

   - Add theme-switching capabilities to accommodate user preferences.

6. **Notification Feature**

   - Notification scenarios:
     - Patient books a slot: Notify the physician.
     - Patient cancels a slot: Notify the physician.
     - Physician changes status to **Booked**: Notify the patient.
     - Physician changes status to **Finished**: Notify the patient.
   - Notification types:

     - Green for **Booked/Finished**
     - Yellow for new bookings
     - Red for cancellations

   - **Sample Schema**
     ```javascript
     const notificationSchema = new mongoose.Schema({
       type: { type: String, required: true },
       message: { type: String, required: true },
       createdAt: { type: Date, default: Date.now },
       read: { type: Boolean, default: false },
     });
     ```

7. **Extended Healthcare Role Support**
   - Add roles like pharmacists, insurers, and government agencies to broaden the platform’s ecosystem.
