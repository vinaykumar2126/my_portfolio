# Next.js Link Component Usage Guide

## Error: Missing `href` prop

If you're seeing this error:

```
Error: Failed prop type: The prop `href` expects a `string` or `object` in `<Link>`, but got `undefined` instead.
```

It means you have a `<Link>` component without the required `href` prop or the `href` value is `undefined`.

## How to Fix

### 1. Always provide an `href` prop

```jsx
// ❌ Wrong - missing href
<Link>
  <a>Click me</a>
</Link>

// ✅ Correct
<Link href="/about">
  <a>Click me</a>
</Link>
```

### 2. Ensure dynamic values are not undefined

```jsx
// ❌ Risky - href could be undefined
<Link href={user?.profile}>View Profile</Link>

// ✅ Correct - with fallback
<Link href={user?.profile || "/default-profile"}>View Profile</Link>
```

### 3. Check conditional rendering

```jsx
// ❌ Risky - props.url might be undefined
<Link href={props.url}>
  <a>{props.text}</a>
</Link>

// ✅ Correct - only render Link when url exists
{props.url && (
  <Link href={props.url}>
    <a>{props.text}</a>
  </Link>
)}
```

### 4. For dynamic routes, use proper objects

```jsx
// ✅ For dynamic routes with query parameters
<Link
  href={{
    pathname: "/posts/[id]",
    query: { id: post.id },
  }}
>
  Read Post
</Link>
```

### 5. For Next.js 13+

In Next.js 13+, the `<Link>` component no longer requires or accepts an `<a>` tag as child:

```jsx
// ❌ Old (pre-Next.js 13)
<Link href="/about">
  <a>About</a>
</Link>

// ✅ New (Next.js 13+)
<Link href="/about">
  About
</Link>
```

## Running Diagnostic Tool

To help find problematic Link components:

```bash
node src/utils/find-missing-href-links.js
```

This will scan your components and pages directories for potential issues.
