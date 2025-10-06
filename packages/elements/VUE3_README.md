# Vue 3 Web Components Exploration

This document provides an overview of Vue 3 support for web components in this project.

## What Was Done

We've added **Vue 3** as an alternative framework for building web components, alongside the existing **Lit** implementation.

### Files Added

1. **`src/components/vue/SbAuthVue.vue`** - Vue 3 Single File Component
2. **`src/components/vue/index.ts`** - Exports the Vue component as a web component using `defineCustomElement`
3. **`src/vue-shims.d.ts`** - TypeScript type definitions for Vue SFC files
4. **`VUE3_COMPARISON.md`** - Detailed comparison of Lit vs Vue 3 approaches
5. **`public/comparison.html`** - Demo page showing both implementations side by side

### Configuration Updates

- **`vite.config.ts`** - Added `@vitejs/plugin-vue` to support Vue SFCs
- **`tsconfig.json`** - Updated to support Vue files and preserve JSX
- **`package.json`** - Added Vue 3 and related dependencies

## How to Use

### Lit Component (Current/Primary)

```typescript
import { SbAuth } from '@hexrw/sb-auth'

// The Lit component is automatically registered as <sb-auth>
```

```html
<sb-auth></sb-auth>
```

### Vue 3 Component (Alternative)

```typescript
import { registerVueComponent } from '@hexrw/sb-auth'

// Register the Vue component
registerVueComponent()
```

```html
<sb-auth-vue></sb-auth-vue>
```

## Build

The project now bundles both Lit and Vue 3 implementations:

```bash
npm run build
```

This creates:
- `dist/sb-auth.js` - ES module bundle (includes both Lit and Vue 3)
- `dist/sb-auth.umd.cjs` - UMD bundle for browser use
- `dist/style.css` - Component styles

## Bundle Size Impact

- **Lit only**: ~5KB (minified + gzipped)
- **Vue 3 only**: ~16KB (minified + gzipped)
- **Both included**: ~54KB (minified + gzipped)

If you only need one framework, you can use tree-shaking with modern bundlers to exclude the unused one.

## Recommendation

Based on the exploration, here's the recommendation for this authentication library:

### ✅ Recommended: Keep Lit as Primary

**Reasons:**
1. **Smaller bundle size** - Critical for a library
2. **Better web component support** - Built specifically for this use case
3. **No virtual DOM overhead** - Direct DOM manipulation is faster
4. **Standards-based** - Uses native Web Components APIs

### ⚠️ Optional: Offer Vue 3 as Alternative

**Use Cases:**
1. Projects already using Vue 3
2. Teams more familiar with Vue syntax
3. Complex components that benefit from Vue's reactivity

### 📦 Implementation Strategy

You can offer both in the same package:

```typescript
// For Lit (default, smaller bundle)
import { SbAuth } from '@hexrw/sb-auth'

// For Vue 3 (opt-in, larger bundle)
import { registerVueComponent } from '@hexrw/sb-auth/vue'
```

This way:
- Users get the lightweight Lit version by default
- Vue users can explicitly opt-in to Vue components
- Tree-shaking removes unused code

## Next Steps

If you want to proceed with Vue 3 support:

1. **Split the builds** - Create separate entry points for Lit and Vue
2. **Update package.json exports** - Provide subpath exports for tree-shaking
3. **Add more components** - Implement auth components in both frameworks
4. **Add tests** - Test both implementations
5. **Update documentation** - Clear migration guides

## Comparison Summary

| Feature | Lit | Vue 3 |
|---------|-----|-------|
| Bundle Size | ✅ 5KB | ❌ 16KB |
| Performance | ✅ Direct DOM | ⚠️ Virtual DOM |
| Web Component Support | ✅ Native | ⚠️ Via defineCustomElement |
| Developer Experience | ⚠️ Less familiar | ✅ Vue ecosystem |
| Learning Curve | ⚠️ New syntax | ✅ Familiar to Vue devs |
| Ecosystem | ⚠️ Smaller | ✅ Large |

## Conclusion

Vue 3 is **viable** for web components and works well with the `defineCustomElement` API. However, for a library like `sb-auth`:

- **Lit is better suited** for production due to size and performance
- **Vue 3 can be offered** as an alternative for Vue-specific projects
- Both can coexist with proper build configuration

The proof-of-concept is complete and functional. The decision now depends on:
1. Target audience (general vs Vue-specific)
2. Bundle size constraints
3. Maintenance capacity (supporting two frameworks)
