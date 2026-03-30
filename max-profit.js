function maxProfitDP(n) {
  const buildings = [
    { type: "T", time: 5, earn: 1500 },
    { type: "P", time: 4, earn: 1000 },
    { type: "C", time: 10, earn: 2000 },
  ];

  const dp = new Array(n + 1).fill(-Infinity);

  
  const count = new Array(n + 1).fill(null);

  dp[0] = 0;
  count[0] = { T: 0, P: 0, C: 0 };

 
  for (let t = 1; t <= n; t++) {
    for (let b of buildings) {
      if (t >= b.time && dp[t - b.time] !== -Infinity) {
        const currentProfit = dp[t - b.time] + (n - t) * b.earn;

        if (currentProfit > dp[t]) {
          dp[t] = currentProfit;

          count[t] = {
            ...count[t - b.time],
            [b.type]: count[t - b.time][b.type] + 1,
          };
        }
      }
    }
  }

  let maxEarnings = 0;
  let solutions = [];


  for (let t = 1; t <= n; t++) {
    if (dp[t] > maxEarnings) {
      maxEarnings = dp[t];
      solutions = [count[t]];
    } else if (dp[t] === maxEarnings) {
      solutions.push(count[t]);
    }
  }


  solutions.sort((a, b) => {
    if (b.T !== a.T) return b.T - a.T;
    if (b.P !== a.P) return b.P - a.P;
    return b.C - a.C;
  });


  console.log("Earnings: $" + maxEarnings);
  console.log("Solutions:");

  solutions.forEach((sol, index) => {
    console.log(`${index + 1}. T: ${sol.T} P: ${sol.P} C: ${sol.C}`);
  });
}


console.log("Test Case 1");
maxProfitDP(7);

console.log("-----");

console.log("Test Case 2");
maxProfitDP(8);

console.log("-----");

console.log("Test Case 3");
maxProfitDP(13);
