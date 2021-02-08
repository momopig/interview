function decrypt(pwd) {
  /**
   * 此处写代码逻辑
   */
  const result = []
  let total = 0


  while(total < pwd.length) {
    result.push(pwd[total])
    pwd = pwd.slice(total + 1)
    total = total + 1
  }
  return result.join('')
}
