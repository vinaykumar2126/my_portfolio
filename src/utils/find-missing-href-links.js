const fs = require('fs');
const path = require('path');
const util = require('util');

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const stat = util.promisify(fs.stat);

// Directories to search
const DIRS_TO_SEARCH = [
  path.resolve(__dirname, '../components'),
  path.resolve(__dirname, '../pages'),
];

// File extensions to check
const EXTENSIONS = ['.js', '.jsx', '.tsx'];

// Regex patterns
const IMPORT_LINK_PATTERN = /import\s+(\{[^}]*Link[^}]*\}|Link)\s+from\s+(['"])next\/link\2/;
const LINK_PATTERN = /<Link\s+([^>]*)>/g;
const HREF_ATTRIBUTE_PATTERN = /href\s*=\s*(?:{([^}]+)}|["']([^"']+)["'])/;
const DYNAMIC_HREF_PATTERN = /(href\s*=\s*{)([^}]+)}/g;

async function searchDirectory(dir) {
  const files = await readdir(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = await stat(filePath);
    
    if (stats.isDirectory()) {
      await searchDirectory(filePath);
    } else if (EXTENSIONS.includes(path.extname(file))) {
      await checkFile(filePath);
    }
  }
}

async function checkFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    
    // Check if file imports Link from next/link
    if (!IMPORT_LINK_PATTERN.test(content)) {
      return;
    }
    
    let match;
    let lineNumber = 1;
    let lineStart = 0;
    let hasIssue = false;
    
    // Find line numbers
    for (let i = 0; i < content.length; i++) {
      if (content[i] === '\n') {
        lineNumber++;
        lineStart = i + 1;
      }
    }
    
    // Check each Link component
    LINK_PATTERN.lastIndex = 0;
    while ((match = LINK_PATTERN.exec(content)) !== null) {
      const linkProps = match[1];
      const hasHref = HREF_ATTRIBUTE_PATTERN.test(linkProps);
      
      if (!hasHref) {
        hasIssue = true;
        const pos = match.index;
        
        // Calculate line number
        lineNumber = 1;
        lineStart = 0;
        for (let i = 0; i < pos; i++) {
          if (content[i] === '\n') {
            lineNumber++;
            lineStart = i + 1;
          }
        }
        
        console.log(`\x1b[31mMissing href prop\x1b[0m in ${filePath}:${lineNumber}`);
        console.log(`  \x1b[33m${content.substring(lineStart, content.indexOf('\n', pos)).trim()}\x1b[0m`);
      } else {
        // Check for potentially undefined href values
        const hrefMatch = linkProps.match(DYNAMIC_HREF_PATTERN);
        if (hrefMatch) {
          const hrefValue = hrefMatch[2].trim();
          if (
            hrefValue === 'undefined' ||
            hrefValue.includes('?.') ||
            hrefValue.includes('||') ||
            hrefValue.includes('?')
          ) {
            hasIssue = true;
            const pos = match.index;
            
            // Calculate line number
            lineNumber = 1;
            lineStart = 0;
            for (let i = 0; i < pos; i++) {
              if (content[i] === '\n') {
                lineNumber++;
                lineStart = i + 1;
              }
            }
            
            console.log(`\x1b[33mPossible undefined href\x1b[0m in ${filePath}:${lineNumber}`);
            console.log(`  \x1b[33m${content.substring(lineStart, content.indexOf('\n', pos)).trim()}\x1b[0m`);
            console.log(`  Check if \x1b[36m${hrefValue}\x1b[0m could be undefined`);
          }
        }
      }
    }
    
    if (!hasIssue) {
      // console.log(`✓ ${filePath}`);
    }
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err);
  }
}

async function main() {
  console.log('Searching for Link components with missing or undefined href props...\n');
  
  for (const dir of DIRS_TO_SEARCH) {
    await searchDirectory(dir);
  }
  
  console.log('\nSearch complete. Fix any issues found above by ensuring all Link components have a valid href prop.');
  console.log('If no issues were listed, the problem might be in a dynamically rendered component.');
}

main().catch(console.error);
