# Members Section Setup Guide

## Adding Member Images

To display the member photos in the Members section, you need to add 10 member images to the `public` folder.

### Image Requirements:

- **File names:** `member1.jpg`, `member2.jpg`, `member3.jpg`, ..., `member10.jpg`
- **Location:** Place all images in the `public` folder (same location as dharsha.jpg, ramya.jpg, etc.)
- **Recommended size:** 800x800 pixels or similar square/portrait format
- **Format:** JPG or PNG

### Current Member Names and Positions:

1. **Naveen Pandian** - Full Stack Developer
2. **Sunil S** - Full Stack Developer
3. **Rajan R** - Blockchain Developer
4. **Ganesh P** - Web Developer
5. **Vishal Akash** - Frontend Developer
6. **Priya Sharma** - Backend Developer
7. **Arun Kumar** - UI/UX Designer
8. **Sneha Reddy** - Mobile Developer
9. **Karthik Raj** - DevOps Engineer
10. **Lakshmi Menon** - Data Scientist

### Updating Member Information:

To change member names, positions, or links, edit the `members` array in:
`src/components/Teams/Teams.jsx`

Update the following fields for each member:

- `name`: Member's full name
- `position`: Job title/role
- `image`: Image file path (e.g., "/member1.jpg")
- `github`: GitHub profile URL
- `linkedin`: LinkedIn profile URL
- `portfolio`: Personal portfolio/website URL

### Features Implemented:

✅ Members section with "Members" heading
✅ Grid layout showing 10 member cards
✅ Member photos with hover effects
✅ Name and position display
✅ Social media icons (GitHub, LinkedIn, Portfolio)
✅ Clickable icons that open links in new tabs
✅ Matching website color scheme (dark background with green/blue accents)
✅ Responsive design for mobile and desktop
✅ Smooth animations on scroll
