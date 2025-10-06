# Project Structure - Vue 3 Integration

```
sb-auth/
├── README.md                           # Updated with Vue 3 info
├── IMPLEMENTATION_SUMMARY.md           # Summary of Vue 3 exploration
├── .gitignore                          # Excludes node_modules, dist, etc.
│
└── packages/
    └── elements/
        ├── package.json                # Added Vue 3 dependencies
        ├── tsconfig.json               # Updated for Vue support
        ├── vite.config.ts              # Added @vitejs/plugin-vue
        │
        ├── VUE3_COMPARISON.md          # Lit vs Vue 3 comparison
        ├── VUE3_README.md              # Vue 3 implementation guide
        │
        ├── public/
        │   ├── comparison.html         # Side-by-side demo
        │   └── vue-demo.html           # Vue 3 specific demo
        │
        └── src/
            ├── index.ts                # Exports both Lit & Vue components
            ├── types.ts                # Shared types
            ├── vue-shims.d.ts          # TypeScript Vue support
            │
            └── components/
                ├── sb-auth.ts          # Lit implementation (5KB)
                │
                ├── vue/
                │   ├── SbAuthVue.vue   # Vue 3 SFC component
                │   └── index.ts        # defineCustomElement wrapper
                │
                └── ui/                 # Existing Lit UI components
                    ├── Anchor.ts
                    ├── Button.ts
                    ├── Container.ts
                    ├── Divider.ts
                    ├── Input.ts
                    ├── Label.ts
                    ├── Loader.ts
                    └── Message.ts
```

## Key Files

### Vue 3 Implementation
- **`src/components/vue/SbAuthVue.vue`** - Vue 3 Single File Component
- **`src/components/vue/index.ts`** - Web component wrapper using `defineCustomElement()`

### Configuration
- **`vite.config.ts`** - Added Vue plugin for SFC support
- **`tsconfig.json`** - JSX set to "preserve", includes Vue files
- **`src/vue-shims.d.ts`** - TypeScript definitions for .vue files

### Documentation
- **`VUE3_COMPARISON.md`** - Detailed technical comparison
- **`VUE3_README.md`** - Usage guide and recommendations
- **`IMPLEMENTATION_SUMMARY.md`** - Overview of changes made

### Demo Pages
- **`public/comparison.html`** - Side-by-side Lit vs Vue 3 demo
- **`public/vue-demo.html`** - Vue 3 specific demo and guide

## Build Output

```
dist/
├── sb-auth.js          # ES module (177KB uncompressed, 54KB gzipped)
├── sb-auth.umd.cjs     # UMD bundle (120KB uncompressed, 44KB gzipped)
└── style.css           # Component styles (0.67KB)
```

## Usage Examples

### Lit (Default - Smaller)
```typescript
import { SbAuth } from '@hexrw/sb-auth'
// <sb-auth> automatically registered
```

### Vue 3 (Opt-in)
```typescript
import { registerVueComponent } from '@hexrw/sb-auth'
registerVueComponent()
// <sb-auth-vue> now available
```

## Bundle Size Comparison

| Framework | Size (gzipped) | Use Case |
|-----------|----------------|----------|
| Lit only | ~5KB | Production (recommended) |
| Vue 3 only | ~16KB | Vue projects |
| Both | ~54KB | Current implementation |

## Recommendations

✅ **Keep Lit as primary** - Smaller, faster, built for web components
✅ **Offer Vue 3 as alternative** - For Vue-specific projects
✅ **Consider split builds** - Separate entry points for tree-shaking

The proof-of-concept is complete and functional!
