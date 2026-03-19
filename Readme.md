# Mars Land Max Profit Problem

## Problem Description

Mr. X owns a large strip of land in Mars Land. He can develop each parcel of land as one of the following:

| Building           | Build Time | Earnings | Notes                           |
|-------------------|------------|----------|--------------------------------|
| Theatre (T)        | 5 units    | $3000    | Covers 2x1 parcel               |
| Pub (P)            | 4 units    | $4500    | Covers 1x1 parcel               |
| Commercial Park (C)| 10 units   | $16500   | Covers 3x1 parcel, 6 commercial spaces |

**Constraints:**

- Only **one building can be developed at a time**.
- Earnings are counted **after the building is completed**.
- Goal: **maximize total earnings** for a given total time `n`.

---

## Solution Approach

This problem is a variation of the **Unbounded Knapsack problem**:

1. **Dynamic Programming (DP)** is used to track the **maximum earnings** for each unit of time.
2. `dp[i]` stores the **max profit** achievable with `i` units of time.
3. `choice[i]` stores which building contributed to the max profit at time `i`.
4. After computing `dp[n]`, **backtracking** is used to find the number of each building built.

---
## ⚙️ Installation & Setup

 Clone the repo
   ```bash
   git clone https://github.com/arunjo96/Max-Profit.git
