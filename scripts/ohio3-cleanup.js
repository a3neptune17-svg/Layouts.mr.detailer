/**
 * Ohio 3 Precise Cleanup
 * Handles hero video removal, video optimization, and external link stripping.
 * Operates directly on the raw file strings to avoid encoding issues.
 */

const fs = require('fs');
const path = require('path');

const DIR = 'C:/website-prototype/src/components/ohio-3';

function readFile(name) {
  return fs.readFileSync(path.join(DIR, name), 'utf8');
}

function writeFile(name, content) {
  fs.writeFileSync(path.join(DIR, name), content, 'utf8');
}

// ============================================================
// PART 1: HERO — Remove video, replace with static image
// ============================================================
{
  let content = readFile('ohio-3-hero.tsx');
  
  // The video element is stored literally in the JS string.
  // In the file it appears as:
  // <div class=\"elementor-background-video-container\" bis_skin_checked=\"1\">\n\t\t\t\t\t\t\t<video ...></video>\n\t\t\t\t\t</div>
  // (with actual escape chars in the JS source)
  
  // Strategy: find the video container block and replace it
  // The block starts with `class=\\"elementor-background-video-container\\"` 
  // and ends with `\u003c/div\u003e` or `</div>`
  
  // Find in raw content using substring approach
  const START_MARKER = 'elementor-background-video-container';
  const VIDEO_END = '</video>';
  
  const startIdx = content.indexOf(START_MARKER);
  if (startIdx === -1) {
    console.error('❌ HERO: Could not find video container start marker');
  } else {
    // Find the opening < of this div (search backwards from START_MARKER)
    let divStart = startIdx;
    while (divStart > 0 && content[divStart] !== '<') divStart--;
    
    // Find the </div> that closes this container (after the video tag)
    const videoEnd = content.indexOf('</video>', startIdx);
    if (videoEnd === -1) {
      console.error('❌ HERO: Could not find </video> tag');
    } else {
      // Find the closing </div> of the video container (right after </video>)
      const containerEnd = content.indexOf('</div>', videoEnd) + '</div>'.length;
      
      // The replacement: static image div with same class
      const replacement = `<div class=\\"elementor-background-video-container\\" bis_skin_checked=\\"1\\" style=\\"position:absolute;inset:0;overflow:hidden;z-index:0;\\">\\r\\n<img src=\\"/images/IMG_20260809_182226.jpg.jpeg\\" alt=\\"Mr. Detailer Premium Studio\\" loading=\\"eager\\" fetchpriority=\\"high\\" style=\\"width:100%;height:100%;object-fit:cover;object-position:center center;\\" />\\r\\n<div style=\\"position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,0,0,0.75) 0%,rgba(0,0,0,0.38) 60%,rgba(0,0,0,0.28) 100%);z-index:1;\\" bis_skin_checked=\\"1\\"></div>\\r\\n</div>`;
      
      const before = content.substring(0, divStart);
      const after = content.substring(containerEnd);
      content = before + replacement + after;
      
      console.log('✅ HERO: Video block replaced with static image at index', divStart);
    }
  }
  
  // Also strip the background_video_link from data-settings
  content = content.replace(
    /background_background&quot;:&quot;video&quot;,&quot;background_video_link&quot;:&quot;[^&"]*&quot;,&quot;background_play_on_mobile&quot;:&quot;yes&quot;/g,
    'background_background&quot;:&quot;classic&quot;'
  );
  
  // Remove _video_section class that triggers video behavior
  content = content.replace(/ _video_section /g, ' ');
  
  writeFile('ohio-3-hero.tsx', content);
  console.log('✅ HERO: Static image applied, video CSS class removed');
}

// ============================================================
// PART 2: PROJECTS — External links + video optimization
// ============================================================
{
  let content = readFile('ohio-3-projects.tsx');
  
  // Remove all ohio.clbthemes.com links
  content = content.replace(/https:\/\/ohio\.clbthemes\.com\/demo21\/project\/[^"\\]*/g, '#');
  content = content.replace(/https:\/\/ohio\.clbthemes\.com\/demo21\/portfolio-category\/[^"\\]*/g, '#');
  content = content.replace(/https:\/\/ohio\.clbthemes\.com\/demo21\/[^"\\]*/g, '#');
  content = content.replace(/https:\/\/ohio\.clbthemes\.com\/[^"\\]*/g, '#');
  
  // Optimize video preload: metadata -> none (don't preload until needed)
  // Videos that autoplay should still get poster images for instant display
  content = content.replace(/preload=\\"metadata\\"/g, 'preload=\\"none\\"');
  
  writeFile('ohio-3-projects.tsx', content);
  console.log('✅ PROJECTS: Demo links removed, preload=none applied');
}

// ============================================================
// PART 3: BLOG — External links + Gravatar removal
// ============================================================
{
  let content = readFile('ohio-3-blog.tsx');
  
  // Blog post article links
  content = content.replace(/https:\/\/ohio\.clbthemes\.com\/demo21\/cutting-costs-[^"\\]*/g, '#blog-ppf');
  content = content.replace(/https:\/\/ohio\.clbthemes\.com\/demo21\/definitive-guide-[^"\\]*/g, '#blog-coatings');
  content = content.replace(/https:\/\/ohio\.clbthemes\.com\/demo21\/category\/insights\/[^"\\]*/g, '#blog-insights');
  content = content.replace(/https:\/\/ohio\.clbthemes\.com\/demo21\/category\/podcasts\/[^"\\]*/g, '#blog-products');
  content = content.replace(/https:\/\/ohio\.clbthemes\.com\/demo21\/[^"\\]*/g, '#blog');
  content = content.replace(/https:\/\/ohio\.clbthemes\.com\/[^"\\]*/g, '#');
  
  // Replace Gravatar avatar URLs with local logo
  content = content.replace(/https:\/\/secure\.gravatar\.com\/avatar\/[^"\\]*/g, '/logo.png');
  // Fix srcset gravatar
  content = content.replace(/srcset=\\"https:\/\/secure\.gravatar\.com\/avatar\/[^"\\]*\\"/g, 'srcset=\\"/logo.png\\"');
  
  writeFile('ohio-3-blog.tsx', content);
  console.log('✅ BLOG: Demo links removed, Gravatar replaced with local logo');
}

// ============================================================
// PART 4: CONTACT — Fix CTA button
// ============================================================
{
  let content = readFile('ohio-3-contact.tsx');
  
  content = content.replace(/https:\/\/ohio\.clbthemes\.com\/about-ver6[^"\\]*/g, 'https://wa.me/');
  content = content.replace(/https:\/\/ohio\.clbthemes\.com\/[^"\\]*/g, '#contact');
  
  writeFile('ohio-3-contact.tsx', content);
  console.log('✅ CONTACT: CTA now links to WhatsApp');
}

// ============================================================
// PART 5: FOOTER — Fix Colabrio copyright + form action
// ============================================================
{
  let content = readFile('ohio-3-footer.tsx');
  
  // Fix WP Contact Form 7 action URL
  content = content.replace(/\/demo21\/homedemo21-elementor\/#wpcf7-f5-o1/g, '#footer-subscribe');
  
  // Replace Colabrio links
  content = content.replace(/http:\/\/clbthemes\.com/g, '/ohio-3');
  content = content.replace(/https:\/\/clbthemes\.com/g, '/ohio-3');
  content = content.replace(/https:\/\/ohio\.clbthemes\.com\/[^"\\]*/g, '#');
  
  // Remove themeforest Purchase link
  content = content.replace(
    /&nbsp;&nbsp;\|&nbsp;&nbsp;<a[^>]*themeforest[^<]*<\/a>/g,
    ''
  );
  content = content.replace(/https:\/\/themeforest\.net[^"\\]*/g, '#');
  
  writeFile('ohio-3-footer.tsx', content);
  console.log('✅ FOOTER: Colabrio/themeforest links replaced');
}

// ============================================================
// PART 6: HEADER — Fix sidebar nav copyright
// ============================================================
{
  let content = readFile('ohio-3-header.tsx');
  
  content = content.replace(/http:\/\/clbthemes\.com/g, '/ohio-3');
  content = content.replace(/https:\/\/clbthemes\.com/g, '/ohio-3');
  content = content.replace(/https:\/\/ohio\.clbthemes\.com\/[^"\\]*/g, '#');
  content = content.replace(/https:\/\/themeforest\.net[^"\\]*/g, '#');
  
  writeFile('ohio-3-header.tsx', content);
  console.log('✅ HEADER: Sidebar copyright links fixed');
}

// ============================================================
// PART 7: POPUPS — External links + preload optimization
// ============================================================
{
  let content = readFile('ohio-3-popups.tsx');
  
  content = content.replace(/https:\/\/ohio\.clbthemes\.com\/demo21\/project\/[^"\\]*/g, '#');
  content = content.replace(/https:\/\/ohio\.clbthemes\.com\/demo21\/portfolio-category\/[^"\\]*/g, '#');
  content = content.replace(/https:\/\/ohio\.clbthemes\.com\/demo21\/[^"\\]*/g, '#');
  content = content.replace(/https:\/\/ohio\.clbthemes\.com\/[^"\\]*/g, '#');
  content = content.replace(/http:\/\/clbthemes\.com[^"\\]*/g, '#');
  content = content.replace(/https:\/\/themeforest\.net[^"\\]*/g, '#');
  
  // Optimize video preload in lightbox popups
  content = content.replace(/preload=\\"metadata\\"/g, 'preload=\\"none\\"');
  content = content.replace(/preload=\\"auto\\"/g, 'preload=\\"none\\"');
  
  writeFile('ohio-3-popups.tsx', content);
  console.log('✅ POPUPS: Demo links removed, video preload optimized');
}

// ============================================================
// FINAL VERIFICATION
// ============================================================
console.log('\n--- Final verification ---');
const filesToCheck = [
  'ohio-3-hero.tsx', 'ohio-3-projects.tsx', 'ohio-3-blog.tsx',
  'ohio-3-contact.tsx', 'ohio-3-footer.tsx', 'ohio-3-header.tsx', 'ohio-3-popups.tsx'
];

let totalRemaining = 0;
for (const f of filesToCheck) {
  const c = readFile(f);
  const demoMatches = (c.match(/ohio\.clbthemes\.com|clbthemes\.com|demo21|homedemo21|themeforest/g) || []);
  const videoMatches = (c.match(/preload=\\"metadata\\"/g) || []);
  if (demoMatches.length > 0 || videoMatches.length > 0) {
    console.log(`  ⚠️  ${f}: ${demoMatches.length} demo refs, ${videoMatches.length} metadata preloads remaining`);
    totalRemaining += demoMatches.length;
  } else {
    console.log(`  ✅ ${f}: Clean`);
  }
}
if (totalRemaining === 0) {
  console.log('\n✅ ALL CLEAR — No external demo references remaining.');
} else {
  console.log(`\n⚠️  ${totalRemaining} external references still remain — check above.`);
}

// Check hero has no video element
const heroFinal = readFile('ohio-3-hero.tsx');
if (heroFinal.includes('<video') || heroFinal.includes('\\u003cvideo') || heroFinal.includes('video-project-2')) {
  console.log('❌ HERO: Video element still present!');
} else {
  console.log('✅ HERO: Video element confirmed removed');
}

if (heroFinal.includes('IMG_20260809_182226')) {
  console.log('✅ HERO: Static image /images/IMG_20260809_182226.jpg.jpeg confirmed');
} else {
  console.log('❌ HERO: Static image NOT found in hero');
}
