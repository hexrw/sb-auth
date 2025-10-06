# Unofficial Supabase Authentication Library

Disclaimer: This is an unofficial library for Supabase authentication. It is not affiliated with Supabase in any way.

> ⚠️ 🚧 **This library is still under development and is not yet ready for production use.**

## Framework Support

This library now supports building web components with both:

- **Lit** (Primary) - Lightweight, fast, built for web components (~5KB)
- **Vue 3** (Alternative) - Familiar Vue syntax with composition API (~16KB)

### Quick Start

#### Using Lit (Recommended)

```typescript
import { SbAuth } from '@hexrw/sb-auth'

// Component automatically registered as <sb-auth>
```

```html
<sb-auth></sb-auth>
```

#### Using Vue 3

```typescript
import { registerVueComponent } from '@hexrw/sb-auth'

registerVueComponent()
```

```html
<sb-auth-vue></sb-auth-vue>
```

## Documentation

- [Vue 3 Comparison](./packages/elements/VUE3_COMPARISON.md) - Detailed comparison of Lit vs Vue 3
- [Vue 3 README](./packages/elements/VUE3_README.md) - Vue 3 implementation guide
- [Demo Pages](./packages/elements/public/) - Interactive examples

## Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Build
cd packages/elements
npm run build

# Develop
npm run dev
```

## Why Two Frameworks?

We've explored both Lit and Vue 3 to give you options:

- **Lit** - Best for libraries, smaller bundles, better web component support
- **Vue 3** - Best for Vue projects, familiar DX, rich ecosystem

Choose based on your project needs!
