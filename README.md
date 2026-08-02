# DSA Journey in JavaScript

This repository documents my step-by-step Data Structures and Algorithms (DSA) journey using JavaScript.

I have completed core practice in **Arrays**, moved through **Recursion**, strengthened fundamentals with **Searching and Sorting**, worked through **Linked List** implementation and design, and progressed through **Strings**, **Stack and Queue**, **Hashing**, and several other patterns. Hashing is also reflected across other modules through frequency-based and lookup-oriented problems. I also keep milestone snapshots in the **Milestones** folder as I continue building this repo.

---

## Journey Roadmap (Current Progress)

- [x] Arrays
- [x] Recursion
- [x] Searching and Sorting
- [x] Binary Search Algorithm
- [x] Linked List
- [x] Strings
- [x] Stack
- [x] Queue
- [x] Hashing
- [ ] Trees (Binary Tree / BST)
- [ ] Heap / Priority Queue
- [ ] Graphs
- [ ] Dynamic Programming
- [ ] Advanced Strings 
- [x] Binary Search Algorithm
- [x] Two-Pointers / Sliding Window

---

## Repository Structure

```text
00-Interview-Questions/
01-arrays/
02-Recursion/
03-Searching-and-Sorting/
04-Linked-List/
05-Strings/
06-Stack-and-Queue/
07-Binary-Search-Algorithm/
08-Two-Pointers-&-Sliding-Window/
Extras/
Milestones/
```

---

## Recent updates

- Added alternate approaches to several problems (see file headers/comments for details).
- New problems added under `08-Two-Pointers-&-Sliding-Window` and `Extras`.
- Additional interview questions added to `00-Interview-Questions`.

---

## Phase 1: Arrays

Folder: `01-arrays/`

This phase focused on building confidence with indexing, in-place updates, two-pointer style thinking, and basic bit-manipulation exposure.

Problems solved:

- `01-leetcode26.js` - Remove Duplicates from Sorted Array
- `02-leetcode27.js` - Remove Element
- `03-leetcode344.js` - Reverse String
- `04-leetcode121.js` - Best Time to Buy and Sell Stock
- `05-leetcode88.js` - Merge Sorted Array
- `06-leetcode283.js` - Move Zeroes
- `07-leetcode485.js` - Max Consecutive Ones
- `08-leetcode268.js` - Missing Number
- `09-leetcode136.js` - Single Number

### Key learnings from Arrays

- In-place array transformations
- Two-pointer and scan-based solutions
- Frequency/bitwise style problem solving
- Time-space tradeoff awareness

---

## Phase 2: Recursion

Folder: `02-Recursion/`

This phase established recursive thinking with base case design, recursive calls, and reduction of problems into smaller subproblems.

Problems solved:

- `01-basicRecursion.js`
- `02-one-To-n-Print.js`
- `03-sum-of-n.js`
- `04-sum-of-element-array.js`
- `05-sum-of-odd-element.js`
- `06-factorial.js`
- `07-leetcode231.js` - Power of Two
- `08-leetcode509.js` - Fibonacci Number

### Key learnings from Recursion

- Base condition clarity
- Recursive call structure
- Backtracking of call stack
- Converting iterative thought into recursive flow

---

## Phase 3: Searching and Sorting

Folder: `03-Searching-and-Sorting/`

This phase focused on fundamentals that are used in both interviews and real-world optimization: searching patterns and sorting mechanics.

Problems solved:

- `01-linearSearch.js`
- `02-binarySearch(leetcode-704).js`
- `03-bubbleSort.js`
- `04-selectionSort.js`
- `05-insertionSort.js`
- `06-mergeSort(leetcode912).js`

### Key learnings from Searching and Sorting

- Difference between linear and logarithmic search
- Stability and behavior of elementary sorting algorithms
- Divide-and-conquer with merge sort
- Practical complexity comparison across approaches

---

## Phase 4: Linked List

Folder: `04-Linked-List/`

This phase now covers core linked-list design, traversal, reversal, cycle detection, merging, deletion, and pointer-based manipulation. It marks the transition from index-based structures (arrays) to pointer/reference-based data structures.

Problems solved:

- `01-design-linkedlist-(leetcode-707).js` - Design Linked List
- `02-leetcode876.js` - Middle of the Linked List
- `03-leetcode206.js` - Reverse Linked List
- `04-leetcode141.js` - Linked List Cycle
- `05-leetcode234.js` - Palindrome Linked List
- `06-leetcode160.js` - Intersection of Two Linked Lists
- `07-leetcode203.js` - Remove Linked List Elements
- `08-leetcode19.js` - Remove Nth Node From End of List
- `09-leetcode83.js` - Remove Duplicates from Sorted List
- `10-leetcode328.js` - Odd Even Linked List
- `11-leetcode02.js` - Add Two Numbers
- `12-leetcode21.js` - Merge Two Sorted Lists
- `13-leetcode61.js` - Rotate List
- `14-leetcode24.js` - Swap Nodes in Pairs

### Focus areas right now

- Node design and memory links
- Traversal and indexing simulation
- Insert/delete at head, tail, and middle
- Fast/slow pointer patterns
- List reversal and structural rewiring
- Handling edge cases cleanly

---

## Phase 5: Strings

Folder: `05-Strings/`

This phase focuses on string traversal, filtering, matching, frequency counting, prefix handling, and anagram-style reasoning.

Problems solved:

- `01-leetcode58.js` - Length of Last Word
- `02-leetcode2942.js` - Find Words Containing Character
- `03-leetcode771.js` - Jewels and Stones
- `04-leetcode3541.js` - Max Frequency Sum
- `05-leetcode1221.js` - Split a String in Balanced Strings
- `06-leetcode541.js` - Reverse String II
- `07-leetcode125.js` - Valid Palindrome
- `08-leetcode1903.js` - Largest Odd Number in String
- `09-leetcode14.js` - Longest Common Prefix
- `10-leetcode242.js` - Valid Anagram
- `11-leetcode205.js` - Isomorphic Strings
- `12-leetcode49.js` - Group Anagrams

### Focus areas right now

- Two-pointer string scanning
- Character filtering and normalization
- Prefix and substring reasoning
- Frequency counting with maps and sets
- Grouping and matching patterns

---

## Phase 6: Stack and Queue (Current Stage)

Folder: `06-Stack-and-Queue/`

This phase focuses on stack and queue behavior, monotonic patterns, parentheses validation, and classic stack-based problem solving.

Problems solved:

- `01-playing.js`
- `02-leetcode225.js` - Implement Stack using Queues
- `03-leetcode232.js` - Implement Queue using Stacks
- `04-leetcode20.js` - Valid Parentheses
- `05-leetcode155.js` - Min Stack
- `06-leetcode1021.js` - Remove Outermost Parentheses
- `07-leetcode150.js` - Evaluate Reverse Polish Notation
- `08-leetcode496.js` - Next Greater Element I
- `09-leetcode739.js` - Daily Temperatures
- `10-leetcode503.js` - Next Greater Element II
- `11-leetcode994.js` - Rotting Oranges
- `12-leetcode2390.js` - Removing Stars From a String

### Focus areas from Stack and Queue

- LIFO and FIFO behavior
- Stack simulation with arrays and queues
- Parentheses and expression parsing
- Monotonic stack patterns
- Breadth-first style queue processing

---

## Phase 7: Binary Search Algorithm

Folder: `07-Binary-Search-Algorithm/`

This phase focuses on binary search patterns and variations including lower/upper bound, rotated arrays, peak-finding, and predicate-based searches.

Problems solved:

- `01-leetcode69.js` - Sqrt(x)
- `02-leetcode374.js` - Guess Number Higher or Lower
- `03-leetcode33.js` - Search in Rotated Sorted Array
- `04-leetcode278.js` - First Bad Version
- `05-leetcode162.js` - Find Peak Element
- `06-leetcode153.js` - Find Minimum in Rotated Sorted Array
- `07-leetcode34.js` - Find First and Last Position of Element in Sorted Array
- `08-leetcode852.js` - Peak Index in a Mountain Array
- `09-leetcode540.js` - Single Element in a Sorted Array
- `10-leetcode658.js` - Find K Closest Elements

### Key learnings from Binary Search Algorithm

- Template-based binary search patterns (left/right mid)
- Adapting binary search for rotated arrays and predicate-based searches
- Boundary and off-by-one handling
- Using binary search for optimization problems

---

## Phase 8: Two Pointers and Sliding Window

Folder: `08-Two-Pointers-&-Sliding-Window/`

This phase focused on two-pointer movement, window expansion/shrinking, and pattern recognition for subarray and substring problems. It built on earlier array and string work by introducing more efficient linear-time solutions.

Problems solved:

- `01-leetcode01.js` - Two Sum
- `02-leetcode167.js` - Two Sum II - Input Array Is Sorted
- `03-leetcode392.js` - Is Subsequence
- `04-leetcode28.js` - Find the Index of the First Occurrence in a String
- `05-leetcode11.js` - Container With Most Water
- `06-leetcode15.js` - 3Sum
- `07-leetcode42.js` - Trapping Rain Water
- `08-leetcode03.js` - Longest Substring Without Repeating Characters
- `09-leetcode424.js` - Longest Repeating Character Replacement
- `10-leetcode567.js` - Permutation in String
- `11-leetcode239.js` - Sliding Window Maximum

### Key learnings from Two Pointers and Sliding Window

- Using two pointers to reduce nested loops
- Expanding and shrinking windows efficiently
- Tracking boundaries and invariants in subarrays
- Recognizing when a sliding window is the right approach

---

## Self Achievements

Folder: `Milestones/`

This folder stores milestone visuals and personal progress snapshots for the repository.

Current milestone:

- `leetcode50-(19 July 2026).png` - celebrates reaching 50 solved problems

---

## Interview Questions Section

Folder: `00-Interview-Questions/`

- `01-mergeIntervals.js`
- `02-divisorGame(leetcode-1025).js`

Some interview files have been expanded with alternate approaches and additional comments to explain trade-offs.

This section tracks pattern-based interview questions solved outside the strict topic sequence.

---

## Why This Repository Exists

- To track progress with consistency
- To build strong DSA fundamentals before advanced topics
- To keep solutions organized topic-by-topic
- To maintain a revision-friendly personal knowledge base

---

## What’s Next

From here, I will continue after Strings with:

1. Hashing and map/set based patterns
2. Trees and traversal strategies
3. Graph fundamentals (BFS/DFS)
4. Dynamic Programming patterns
5. Advanced interview-level mixed problems

---

## Long-Term Goal

To become interview-ready with strong problem-solving fundamentals, clean implementation skills, and confidence in explaining time and space complexity for every approach.

---

## Notes

- Language used: **JavaScript**
- This repository is actively updated as I progress.
- Completed the **Stack and Queue**, **Binary Search**, and **Two-Pointers / Sliding Window** phases.
- A milestone snapshot for the 50-problem achievement is stored in the **Milestones** folder.
