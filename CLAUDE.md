# CLAUDE.md - Project Guidelines

This file contains project-specific guidelines to prevent common issues and maintain code quality for the InSourceful website.

## 1. PROJECT DIRECTORY RULES

**CRITICAL:** This project is located at:
/Users/melchor/Downloads/WebDev/insourceful.io

- NEVER work on files outside this directory
- NEVER open or modify files from other projects
- Before making ANY changes, verify you're in the correct project by checking the current working directory
- If asked to work on files not in this path, STOP and ask for confirmation

**To verify correct project:**
- Check that package.json exists in root
- Check that /components, /app directories exist
- Confirm project name is "insourceful.io"

## 2. Project-Specific Rules

### Framework & Version
- **Next.js 14.2.33** with React 18.3.1
- Uses App Router architecture
- TypeScript enabled

### Animation Library
- **NEVER use WOW.js** - It's incompatible with Next.js webpack and causes `originalFactory.call` errors
- **Use AOS (Animate On Scroll)** library - Already installed and configured
- AOS is initialized in `/components/layout/Layout.tsx`

### Animation Patterns
```typescript
// ✅ Correct AOS usage
<div data-aos="fade-up" data-aos-delay="100">
<div data-aos="slide-left" data-aos-delay="200">
<div data-aos="fade-down" data-aos-delay="300">

// ❌ Never use WOW.js patterns
<div className="wow fadeInUp" data-wow-delay="100ms">
```

## 3. Common Pitfalls to Avoid

### Library Compatibility Issues
- **Don't try to "fix" imports** for incompatible libraries - replace them entirely
- If you see `originalFactory.call` errors, it's likely an incompatible library
- Research Next.js compatibility before adding new animation/UI libraries

### Build & Cache Issues
- **Next.js cache issues?** → Delete `.next` folder and restart dev server
- **HMR (Hot Module Reload) errors?** → Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
- **Webpack errors?** → Check for incompatible require() statements in client components

### Development Workflow
- Always use `'use client'` directive for components with browser APIs
- Server components should not use `useEffect`, `useState`, or browser APIs
- Check console for hydration mismatches

## 4. When Making Changes

### File-by-File Approach
- **Always test one file at a time** when making bulk changes
- Show proposed changes before applying them
- Wait for approval on structural changes (new dependencies, architecture changes)

### Error Recovery
- **Don't repeat the same fix more than twice** - reassess the approach
- If a solution doesn't work after 2 attempts, step back and analyze the root cause
- Document failed approaches to avoid repeating them

### Code Review Process
- Preview changes before saving files
- Test builds after significant changes
- Verify dev server runs without errors

## 5. Animation Guidelines

### AOS Library Usage
- **Initialization**: AOS is auto-initialized in `Layout.tsx`
- **Import**: AOS CSS is imported via `/lib/aos.ts`
- **Configuration**: Duration 1000ms, easing ease-in-out, once: true

### Common Animation Patterns
```typescript
// Fade animations
data-aos="fade-up"          // Element fades in from bottom
data-aos="fade-down"        // Element fades in from top  
data-aos="fade-left"        // Element fades in from right
data-aos="fade-right"       // Element fades in from left
data-aos="fade"             // Simple fade in

// Slide animations  
data-aos="slide-up"         // Element slides in from bottom
data-aos="slide-down"       // Element slides in from top
data-aos="slide-left"       // Element slides in from right
data-aos="slide-right"      // Element slides in from left

// Zoom animations
data-aos="zoom-in"          // Element zooms in
data-aos="zoom-out"         // Element zooms out
```

### Delay Patterns
```typescript
// ✅ Correct delay format (no "ms")
data-aos-delay="100"        // 100ms delay
data-aos-delay="200"        // 200ms delay
data-aos-delay="300"        // 300ms delay

// ❌ Incorrect WOW.js format
data-wow-delay="100ms"      // Don't use this
```

### Staggered Animations
For lists or grids, use incremental delays:
```typescript
<div data-aos="fade-up" data-aos-delay="100">Item 1</div>
<div data-aos="fade-up" data-aos-delay="200">Item 2</div>
<div data-aos="fade-up" data-aos-delay="300">Item 3</div>
<div data-aos="fade-up" data-aos-delay="400">Item 4</div>
```

## 6. Development Commands

### Essential Commands
```bash
# Start development server
npm run dev

# Clear Next.js cache (fixes many issues)
rm -rf .next

# Clear all caches
rm -rf .next && rm -rf node_modules/.cache

# Test production build
npm run build

# Start production server
npm run start
```

### Debugging Commands
```bash
# Check installed packages
npm ls

# Check for outdated packages
npm outdated

# Audit for vulnerabilities
npm audit

# Clean install
rm -rf node_modules package-lock.json && npm install
```

### Port Management
- Default port: 3000
- If port busy, Next.js auto-assigns: 3001, 3002, 3003, etc.
- Current dev server typically runs on port 3001-3003

## 7. File Structure Notes

### Key Files
- `/lib/aos.ts` - AOS initialization configuration
- `/components/layout/Layout.tsx` - Main layout with AOS init
- `/app/page.tsx` - Homepage using sections from `/components/sections/home1/`

### Component Patterns
- All section components in `/components/sections/home1/`
- Layout components in `/components/layout/`
- Shared elements in `/components/elements/`

### Asset Management
- Images in `/public/assets/images/`
- CSS in `/public/assets/css/`
- Brand logos in `/public/assets/images/brand/`

## 8. Brand Assets

### Logo Files
- Company logos stored as SVG in `/public/assets/images/brand/`
- White versions available for dark backgrounds
- Include: Pfizer, Kinross Gold, ExxonMobil, Mallinckrodt, Newmont

### Usage
```typescript
<img src="assets/images/brand/company-white.svg" alt="Company Name" style={{height: '60px'}} />
```

## 9. Emergency Procedures

### If Build Fails
1. Check console for specific error
2. Delete `.next` folder: `rm -rf .next`
3. Restart dev server: `npm run dev`
4. If still failing, check for syntax errors in recent changes

### If Animations Stop Working
1. Verify AOS is initialized in Layout.tsx
2. Check browser console for AOS errors
3. Confirm `data-aos` attributes are properly formatted
4. Test with simple `data-aos="fade-up"` first

### If Server Won't Start
1. Check if port is in use: `lsof -i :3000`
2. Kill existing processes: `killall node`
3. Clear cache: `rm -rf .next`
4. Restart: `npm run dev`

---

**Last Updated**: October 2025
**Next.js Version**: 14.2.33
**Animation Library**: AOS 2.3.4