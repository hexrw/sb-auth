# Vue 3 vs Lit for Web Components

This document compares using Vue 3 versus Lit for creating web components in the sb-auth library.

## Current Implementation (Lit)

The project currently uses **Lit** for building web components.

### Lit Approach

- **File**: `src/components/sb-auth.ts`
- **Framework**: Lit (LitElement)
- **Syntax**: TypeScript with decorators
- **Example**:
  ```typescript
  import { LitElement, css, html } from "lit"
  import { customElement, property } from "lit/decorators.js"

  @customElement("sb-auth")
  export class SbAuth extends LitElement {
    @property({ type: Number })
    count = 0

    render() {
      return html`
        <div class="card">
          <button @click=${this._onClick}>
            count is ${this.count}
          </button>
        </div>
      `
    }

    private _onClick() {
      this.count++
    }
  }
  ```

### Lit Pros
- ✅ Lightweight (~5KB minified)
- ✅ Built specifically for web components
- ✅ Fast rendering with efficient updates
- ✅ Great TypeScript support
- ✅ No virtual DOM overhead
- ✅ Standards-based (uses actual Web Components APIs)

### Lit Cons
- ❌ Less familiar to Vue/React developers
- ❌ Smaller ecosystem compared to Vue/React
- ❌ Different templating syntax from Vue/React

## New Vue 3 Implementation

We've added a **Vue 3** implementation as an alternative/proof-of-concept.

### Vue 3 Approach

- **File**: `src/components/vue/SbAuthVue.vue`
- **Framework**: Vue 3
- **Syntax**: Single File Components (SFC)
- **Conversion**: Uses Vue's `defineCustomElement` API
- **Example**:
  ```vue
  <template>
    <div class="sb-auth-vue">
      <button @click="increment">
        Vue 3 count is {{ count }}
      </button>
    </div>
  </template>

  <script setup lang="ts">
  import { ref } from 'vue'

  const count = ref(0)
  const increment = () => {
    count.value++
  }
  </script>
  ```

### Vue 3 Pros
- ✅ Familiar to Vue developers
- ✅ Rich ecosystem and tooling
- ✅ Single File Components are easy to read
- ✅ Built-in reactivity system
- ✅ Strong TypeScript support
- ✅ Great documentation

### Vue 3 Cons
- ❌ Larger bundle size (~16KB runtime + reactivity)
- ❌ Virtual DOM adds overhead
- ❌ More dependencies to maintain
- ❌ Some Vue features don't work in custom elements (like provide/inject across components)

## Performance Comparison

### Bundle Size
- **Lit**: ~5KB (minified + gzipped)
- **Vue 3**: ~16KB (minified + gzipped) for runtime + reactivity

### Runtime Performance
- **Lit**: Direct DOM updates, no virtual DOM
- **Vue 3**: Virtual DOM with optimized diffing

## Recommendation

### Use Lit if:
- Bundle size is critical
- Building a library/component system
- Team is familiar with web standards
- Maximum performance is needed
- Building standalone web components

### Use Vue 3 if:
- Team is already using Vue
- Developer experience is priority
- Rich ecosystem is needed
- Building complex UI components
- Integration with existing Vue apps

## Current Status

Both implementations are available in this repository:
- **Lit**: `src/components/sb-auth.ts` (primary)
- **Vue 3**: `src/components/vue/SbAuthVue.vue` (proof-of-concept)

The Vue 3 implementation can be registered using:
```typescript
import { registerVueComponent } from './components/vue'
registerVueComponent()
```

This will register the `<sb-auth-vue>` custom element.

## Conclusion

For a library like `sb-auth` that provides authentication components:
- **Lit is recommended** for the production implementation due to smaller bundle size and better web component integration
- **Vue 3 can be offered** as an alternative for projects already using Vue
- Both approaches can coexist in the same package with conditional imports
