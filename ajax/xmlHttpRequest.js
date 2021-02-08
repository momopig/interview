const xhr = new XMLHttpRequest()
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {

    // 结果返回
    console.log('result:', xhr.responseText)
  }
}
xhr.setRequestHeader ('Content-type', 'application/x-www-form-urlencoded');

// 第三个参数为true时，表示异步，ajax必须设置为true
xhr.open('post', '/ajax/demo_post', true)
xhr.send("fname=bill&name=gates")
