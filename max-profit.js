

function maxProfit(n) {
  const buildings = [
    { name: 'T', time: 5, earn: 3000 },
    { name: 'P', time: 4, earn: 4500 },
    { name: 'C', time: 10, earn: 16500 }
  ];


  const dp = Array(n + 1).fill(0);
  const choice = Array(n + 1).fill(null);

  for (let i = 1; i <= n; i++) {
    for (const b of buildings) {
      if (i >= b.time) {
        if (dp[i] < dp[i - b.time] + b.earn) {
          dp[i] = dp[i - b.time] + b.earn;
          choice[i] = b.name;
        }
      }
    }
  }

  const counts = { T: 0, P: 0, C: 0 };
  let timeLeft = n;
  while (timeLeft > 0 && choice[timeLeft]) {
    const bName = choice[timeLeft];
    const bTime = buildings.find(b => b.name === bName).time;
    counts[bName]++;
    timeLeft -= bTime;
  }

  return { earnings: dp[n], solution: counts };
}


const testCases = [7, 8, 13];
for (const n of testCases) {
  const { earnings, solution } = maxProfit(n);
  console.log(`Time Unit: ${n}`);
  console.log(`Earnings: $${earnings}`);
  console.log(`Solutions: T:${solution.T} P:${solution.P} C:${solution.C}`);
  console.log('-----------------------');
}