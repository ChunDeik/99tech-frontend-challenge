# 🚀 99Tech Frontend Code Challenge

A comprehensive response to the 99Tech Frontend Engineer code challenge, featuring algorithmic problem-solving, a professional currency swap interface, and a deep-dive React refactoring task.

## 🛠️ Tech Stack

* **Problem 1 & 2**: Vanilla JavaScript, HTML5, CSS3 (Tailwind CSS via CDN).
* **Problem 3**: React, TypeScript.
* **Icons**: Lucide React & Switcheo Token Icons.

---

## 📁 Project Structure

```text
/
├── problem1/         # Three ways to sum to n (JavaScript)
├── problem2/         # Fancy Form: Currency Swap (HTML/JS/Tailwind)
└── problem3/         # Messy React: Analysis & Refactored Solution (TSX)

```

---

## 📝 Solution Overview

### **Problem 1: Three Ways to Sum to N**

Provided three unique JavaScript implementations:

1. **Iterative**: Standard loop for readability.
2. **Mathematical**: Gauss's formula for  efficiency.
3. **Recursive**: Functional approach (noted with recursion depth limits).

### **Problem 2: Fancy Form (Currency Swap)**

A professional DeFi-style swap interface.

* **Key Features**: Real-time exchange rate calculation, token filtering (omitting tokens without prices), and a simulated backend loading state.
* **Validation**: Interactive error handling for invalid amounts.

### **Problem 3: Messy React Refactoring**

Identified and resolved several critical "code smells":

* **Bug Fixes**: Corrected the `lhsPriority` undefined variable and fixed the filtering logic that was inadvertently hiding valid balances.
* **Performance**: Optimized `useMemo` by removing unnecessary dependencies (`prices`) to prevent redundant re-renders.
* **Type Safety**: Introduced a robust `WalletBalance` interface and eliminated `any` types to leverage TypeScript's full power.

---

## ⚙️ Installation & Usage

### **Run Problem 2 (Fancy Form)**

Simply open `problem2/index.html` in any modern browser. It uses the Tailwind CDN, so no local build step is required.

### **Run Problem 3 (React)**

If you used the Vite template provided earlier:

1. `cd problem3`
2. `npm install`
3. `npm run dev`

---
