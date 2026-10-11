# 0-based vs 1-based Indexing — Mental Model

> **One rule to remember:** My loop variable belongs to the array; if the problem talks about 1-based position, convert it with `i + 1`.

## Core idea

Separate **"position in the problem"** from **"index in the programming language."**
Don't change how you loop — translate the problem's position into the array's index.

## Two worlds

```
nums = [10, 20, 30, 40]

Problem position (1-based):  1   2   3   4
Array index    (0-based):    0   1   2   3
                             ↑ difference is always 1
```

## Conversions

| What you want            | Formula                                     |
| ------------------------ | ------------------------------------------- |
| Index → position         | `problem position = i + 1`                  |
| Position → index         | `array index = p - 1`                       |
| Read the element's value | `nums[i]` (always use the array index)      |

## Two questions to always ask

1. **What position is this?** → `i + 1`
2. **What array element is this?** → `nums[i]`

## Common mistake

```js
nums[i + 1]   // ❌ wrong
```

This mixes the two worlds — it shifts **both** the position and the element.
You only convert for the position/condition, never for reading the value.

```js
if (n % (i + 1) === 0) {        // ✅ convert only for the condition
  final += nums[i] * nums[i];   // ✅ read the value with the array index
}
```

## Your loop still starts at 0

Even when the problem is 1-indexed, JavaScript arrays stay 0-based:

```js
for (let i = 0; i < n; i++) {   // correct — convert to position only inside the condition
```

## General framework

- **Step 1 — Traversal:** visit every array index `0 → n-1`.
- **Step 2 — Condition:** does the corresponding 1-based position (`i + 1`) satisfy the rule?

| Concept          | Expression        |
| ---------------- | ----------------- |
| Array index      | `i`               |
| Problem position | `i + 1`           |
| Condition        | `n % (i + 1) === 0` |
| Element          | `nums[i]`         |

## Applied example — LeetCode 2778

**Problem:** `nums[i]` is special if its 1-based position `i` divides `n` (the array length). Return the sum of squares of the special elements.

```js
n % (i + 1) === 0  ->  final += nums[i] * nums[i];
```

**Reasoning:** loop with 0-based `i` over the array, convert `i` to the 1-based position with `i + 1` only for the divisibility check, and read the value with `nums[i]`.
