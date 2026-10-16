# 🎓 Personal Developer Portfolio - College Mini Project

A modern, responsive, and customizable Personal Portfolio Website built with **HTML5, CSS3, and JavaScript**. Designed specifically for college students and engineering candidates to showcase their academic qualifications, projects, technical skills, and contact details.

---

## 🌟 Features

- **Semantic HTML5**: Clean, well-structured, and accessible markup with informative comments.
- **Modern CSS3**:
  - CSS custom properties (variables) for easy color theme personalization.
  - Fully responsive layout across mobile, tablet, and desktop (Flexbox & CSS Grid).
  - Glassmorphic card styling, floating badges, and smooth hover effects.
- **Dark / Light Mode**: Instant theme switching saved in browser `localStorage`.
- **Interactive UI**:
  - Responsive mobile drawer navigation with hamburger toggle.
  - Active navigation indicator that highlights the current section while scrolling.
  - Interactive skill progress indicators.
  - Education qualification timeline.
  - Functional contact form simulation with instant validation feedback.
- **Ready for GitHub Pages**: Zero build process or bundlers required—pure web standards.

---

## 📁 Project Structure

```text
college-portfolio/
│
├── index.html        # Main HTML structure & content sections
├── style.css         # Styling, CSS variables, dark/light themes, animations
├── script.js         # Navigation toggle, scrollspy, theme toggle, form handler
└── README.md         # Documentation & GitHub deployment guide
```

---

## 🚀 How to Run Locally

1. Open File Explorer and navigate to the project directory:
   ```text
   C:\Users\Hpp\.gemini\antigravity\scratch\college-portfolio
   ```
2. Double-click **`index.html`** to open it directly in any web browser (Chrome, Edge, Firefox, Brave).
3. Alternatively, if you use VS Code, right-click `index.html` and click **"Open with Live Server"**.

---

## ✏️ How to Customize with Your Own Details

Open `index.html` in your favorite code editor and customize:

1. **Name & Titles**:
   - Search for `Alex Sharma` in `index.html` and replace it with your full name.
   - Update your college name, degree (e.g. B.Tech / BCA / BSc CS), and year of study.
2. **Profile Picture**:
   - Replace the `home__img` source (`src="..."`) with your own photo link or place `profile.jpg` in the folder and set `src="profile.jpg"`.
3. **Education**:
   - Under `<section class="education">`, update your school/college names, grades/CGPA, and dates.
4. **Skills**:
   - Under `<section class="skills">`, change or add skills and adjust the percentage bars (`style="width: 90%"`).
5. **Projects**:
   - In `<section class="projects">`, replace project titles, descriptions, and GitHub/Demo URLs with your actual work.
6. **Social & Contact Links**:
   - Update your email, LinkedIn URL, GitHub URL, and location in the `<section class="contact">` and `<footer class="footer">`.

---

## 🌐 Step-by-Step Guide: Upload to GitHub & Get a Free Live Link

Follow these steps to host your portfolio online for free using **GitHub Pages** so you can submit the live URL to your college:

### Option A: Using GitHub Website (Simplest - No CLI needed)

1. **Log in to GitHub**:
   - Go to [github.com](https://github.com) and log into your account.
2. **Create a New Repository**:
   - Click the **`+`** icon in the top right corner and select **New repository**.
   - Name your repository (e.g., `portfolio` or `mini-project-portfolio`).
   - Set repository visibility to **Public** *(required for free GitHub Pages)*.
   - Leave "Initialize with README" unchecked (since you already have a README).
   - Click **Create repository**.
3. **Upload Files**:
   - On the new repository page, click the link: **"uploading an existing file"**.
   - Drag and drop `index.html`, `style.css`, `script.js`, and `README.md` into the box.
   - In the "Commit changes" section at the bottom, type `Initial commit - College Portfolio`.
   - Click **Commit changes**.
4. **Enable GitHub Pages (Live Link)**:
   - In your repository, click on **Settings** (tab on the top right).
   - On the left sidebar, click on **Pages**.
   - Under **Build and deployment > Branch**:
     - Change from `None` to **`main`** (or `master`).
     - Folder should stay as `/(root)`.
     - Click **Save**.
   - Wait 1-2 minutes and refresh the page.
   - At the top of the Pages section, you will see:
     > **Your site is live at `https://<your-username>.github.io/<repo-name>/`**
   - Copy this URL and submit it to your college/professors! 🎉

---

### Option B: Using Git Command Line (Terminal / PowerShell)

```bash
# Navigate to the portfolio folder
cd "C:\Users\Hpp\.gemini\antigravity\scratch\college-portfolio"

# Initialize Git
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit for college mini project portfolio"

# Rename branch to main
git branch -M main

# Link with your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/<your-username>/<repo-name>.git

# Push code to GitHub
git push -u origin main
```
*Then follow step 4 above to enable GitHub Pages in your repository settings.*

---

## 📜 Submission Checklist for College

- [x] Responsive layout tested on desktop and mobile.
- [x] Dark / Light mode toggle working.
- [x] Name, college, degree, and coursework updated.
- [x] Project links and descriptions updated.
- [x] Contact links verified (email, LinkedIn, GitHub).
- [x] Code uploaded to GitHub repository.
- [x] GitHub Pages activated and live link generated.
