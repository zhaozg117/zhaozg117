/**
 * 动态规划
 *  1、重叠子问题   2、状态转移方程  3、最有子结构
 *
 * 解题套路
 * 1、明确状态   2、明确选择   3、确立dp函数/数组的定义  4、明确base case
 */

/**
 * 动态规划框架
 * @param {*} a
 * @param {*} b
 */
function fib(n) {
  let dp = new Array(n + 1)
  dp[0] = 0
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp
}
function coinChange(arr, amount) {}

function lcs(str1, str2) {
  let s1 = str1.length
  let s2 = str2.length

  let memo = new Map()

  function dp(i, j) {
    if (i === -1 || j === -1) {
      return 0
    }
    let key = `${i}-${j}`
    if (memo.has(key)) {
      return memo.get(key)
    }
    let res
    if (str1[i] === str2[j]) {
      res = dp(i - 1, j - 1) + 1
      memo.set(key, res)
    } else {
      res = Math.max(dp(i - 1, j), dp(j - 1, i))
    }
    return res
  }
  return dp(s1 - 1, s2 - 1)
}

function lcsDPTable(str1, str2) {
  let s1 = str1.length
  let s2 = str2.length
  // base case
  let dp = Array.from({ length: s1 + 1 }, () => {
    return new Array(s2 + 1).fill(0)
  })

  for (let i = 1; i < s1 + 1; i++) {
    for (let j = 1; j < s2 + 1; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  // 状态转移
  return dp[s1][s2]
}

console.log(lcsDPTable('adbeopqzmkg', 'bmg'))
