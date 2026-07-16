const message = process.argv[2];

const pattern = /^(feat|fix|docs|style|refactor|test|chore): .+/;

if (!pattern.test(message)) {
  console.error(`
❌ Invalid commit message.

Use format:
type: message

Examples:
feat: add dashboard page
fix: resolve login issue
  `);

  process.exit(1);
}

console.log("✅ Commit message valid");
