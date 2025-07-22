# Portfolio Versioning System

This project uses a directory-based versioning system to maintain multiple versions of the portfolio while keeping the latest version as the default.

## Structure

```
/
├── index.html          # Latest version (default)
├── files/              # Latest version assets
├── src/                # Latest version source
├── v1/                 # Version 1.0
│   ├── index.html      # Version 1.0 built file
│   ├── files/          # Version 1.0 assets
│   └── src/            # Version 1.0 source
└── build.js            # Build script for all versions
```

## URLs

- **Latest Version**: `https://sudipto-roy.github.io/` (default)
- **Version 1.0**: `https://sudipto-roy.github.io/v1/`

## Build Commands

```bash
# Build all versions
npm run build

# Build specific version
npm run build:v1
npm run build:latest

# Development
npm run dev              # Start development server
npm run serve:latest     # Serve latest version
npm run serve:v1         # Serve v1 version on port 8081
```

## Version Selector

Both versions include a version selector in the top-right corner that allows users to switch between versions seamlessly.

## Adding New Versions

1. Create a new directory (e.g., `v2/`)
2. Copy the current `src/` directory to `v2/src/`
3. Update `build.js` to include the new version
4. Update the version selector in both HTML files
5. Run `npm run build` to build all versions

## Best Practices

- Always keep the latest version at the root level
- Use semantic versioning for version directories
- Test both versions after building
- Update documentation when adding new versions
- Keep version-specific assets in their respective directories 