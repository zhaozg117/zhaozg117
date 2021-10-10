// 双指针
/**
 *
 * @param {Array} nums
 * @param {number} targe
 */
function binarySearch(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let m = Math.ceil((left + right) / 2)
    if (nums[m] === target) {
      return m
    }

    if (nums[m] > target) right = m - 1
    if (nums[m] < target) left = m + 1
  }
  return -1
}

// 滑动窗口
function slideWindow(s) {
  let left = 0
  let right = 0
  let res
  let win = new Map()
  while (right < s.length) {
    win.add(s[right])
    right++
    while (isValid) {
      res = resolve(res, window)
      win.remove(s[left])
      left++
    }
  }
  return res
}
