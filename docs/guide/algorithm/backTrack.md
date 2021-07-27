# 回溯递归

## 回溯算法框架
```
backTrack(路径, 选择列表){
  if(终止条件) {
    存放结果
    return 
  }

  for(选择 in 选择列表){
    //排除不合法选择
     if(不合法条件) {
       continue;
     }
    // 执行选择
    路径.add(选择)
    // 进行下一轮决策
    backTrack（路径, 选择列表）
    // 撤销选择
    路径.remove(选择)
  }
}

```

## 全排列

```
function fullArray(arr) {
  let result = []
  function backTrack(track, nums) {
    if (track.length === nums.length) {
      result.push(track.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (track.includes(nums[i])) continue
      track.push(nums[i])
      backTrack(track, nums)
      track.pop()
    }
  }
  backTrack([], arr)
  return result
}

```
## N皇后

```
// N皇后
let result = []
function resolveNqueen(n) {
  let board = Array.from({ length: n }, () => {
    return new Array(n).fill('.')
  })
  backTrack(board, 0)
  console.log('N Queen:', result)
}

// * @param {Array} board 路径，记录上次的已选择
//  * @param {int} row  选择列表，整个行所在的列都可选
//  * @description 中断条件：
function backTrack(board, row) {
  // 结束触发条件
  if (board.length === row) {
    result.push(transformChessBoard(board))
    return false
  }

  let n = board.length
  for (let col = 0; col < n; col++) {
    //排除不合法路径
    if (!isValid(board, row, col)) continue
    // 执行选择
    board[row][col] = 'Q'
    //进入下一决策
    backTrack(board, row + 1)
    // 撤销选择
    board[row][col] = '.'
  }
}

function isValid(board, row, col) {
  let n = board.length
  // 列是否有冲突
  for (let i = 0; i < n; i++) {
    if (board[i][col] === 'Q') return false
  }
  //右前方是否有冲突
  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === 'Q') return false
  }
  //左前方是否有冲突
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 'Q') return false
  }
  return true
}

function transformChessBoard(chessBoard) {
  let chessBoardBack = []
  chessBoard.forEach((row) => {
    let rowStr = ''
    row.forEach((value) => {
      rowStr += value
    })
    chessBoardBack.push(rowStr)
  })
  return chessBoardBack
}
```