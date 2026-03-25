function getMaxProfit(costProfit, oil) {
	let dp = new Array(costProfit.length + 1).fill(0).map(() => new Array(oil + 1).fill(0));

	for (let i = 1; i <= costProfit.length; i++) {
		let [cost, profit] = costProfit[i - 1];
		for (let j = 1; j <= oil; j++) {
			dp[i][j] = dp[i - 1][j];
			if (j >= cost) {
				dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - cost] + profit);
			}
		}
	}
	console.log(dp)

	return dp[costProfit.length][oil];
}

const dps = [[1, 1], [7, 9], [6, 10], [2, 4], [3, 5], [6, 10]];

let maxProfit = getMaxProfit(dps, 10);
console.log(maxProfit);
