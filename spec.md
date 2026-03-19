# Budding Blooms Preparatory School

## Current State
Fully built school website with hero, about, programs, gallery, testimonials, admissions, and contact sections. Forms open email app pre-filled.

## Requested Changes (Diff)

### Add
- Admission Open popup modal that appears automatically when the site loads (after a short delay)
- Popup content: "Admissions Open for Session 2026-2027" with school branding
- A "Get Details" button inside the popup that opens the user's email app pre-filled to buddingbloomsschool@gmail.com with subject "Admission Enquiry - Session 2026-2027" and a short body asking for details
- Close button on the popup
- Show-once logic: popup appears on first visit (or every visit, simpler approach)

### Modify
- Nothing else changed

### Remove
- Nothing

## Implementation Plan
1. Create an AdmissionPopup component that shows on mount with a short delay (1-1.5s)
2. Style it with the school's brand colors (royal blue, yellow, red-orange)
3. "Get Details" button uses mailto: link to buddingbloomsschool@gmail.com with pre-filled subject and body
4. Close (X) button and optional backdrop click to dismiss
5. Use sessionStorage to show only once per session
