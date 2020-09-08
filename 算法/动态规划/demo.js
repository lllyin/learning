/**
 * 最大子序列
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 示例: 输入: [-2,1,-3,4,-1,2,1,-5,4], 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */
function maxArraySum(nums) {
  let dp = new Array(nums.length);
  dp[0] = nums[0];
  let sum = nums[0];
  for (let i = 1; i < dp.length; i++) {
    dp[i] = Math.max(dp[i - 1], 0) + nums[i];

    sum = Math.max(sum, dp[i]);
  }
  return sum;
}

/**
 * 凑硬币问题
 * 给你 k 种面值的硬币，每种硬币的数量无限
 * 再给一个总金额 amount，问你最少需要几枚硬币凑出这个金额，如果不可能凑出，算法返回 -1
 *
 * 比如说  [1，2，5]，总金额 amount = 11，返回3 [5,5,1]
 *
 * @param {*} coins
 * @param {*} amount
 */
function coinChange2(coins, amount) {
  const memo = {};
  function dp(n) {
    if (n === 0) return 0;
    if (n < 0) return -1;
    if (memo[n]) return memo[n];
    let res = Infinity;
    for (let coin of coins) {
      let subproblem = dp(n - coin);
      if (subproblem === -1) continue;
      res = Math.min(res, 1 + subproblem);
    }

    memo[n] = res === Infinity ? -1 : res;
    return memo[n];
  }
  const r = dp(amount);
  return r === Infinity ? -1 : r;
}

const coinChange = (coins, amount) => {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

/**
 * 动态规划处理斐波那契数列
 *
 * @param {*} n
 * @returns
 */
function fib(n) {
  const temp = new Array(n);
  temp[0] = 0;
  temp[1] = temp[2] = 1;
  for (let i = 3; i < n; i++) {
    temp[i] = temp[i - 1] + temp[i - 2];
  }
  return temp[n - 1];
}

/**
 * 动态规划处理斐波那契数列2
 *
 * @param {*} n
 * @returns
 */
function fib2(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  let pre = 1;
  let curr = 1;
  for (let i = 3; i <= n; i++) {
    const sum = pre + curr;
    pre = curr;
    curr = sum;
  }
  return pre;
}

function run() {
  // console.log('最大子序列:', maxArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
  // console.log('斐波那契:', fib(100));
  // console.log('斐波那契2:', fib2(100));
  console.log('凑硬币', coinChange2([1, 2, 5], 100));
}

run();
