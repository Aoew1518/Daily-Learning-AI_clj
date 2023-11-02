window.onload = function() {
    imgLocation('container', 'box')//调用imgLocation函数
  }
  
  // 第一行放了几张图
  // 操作下一张图，将其放在上一行的高度最小的列中
  
  function imgLocation(parent, content) { // 当前有多少张图片要摆放
    var cparent = document.getElementById(parent)
    // cparent 中有多少个box
    var ccontent = getChildElement(cparent, content)//得到的是30张图的class.box
    // 该操作第几张图
    var imgWidth = ccontent[0].offsetWidth//拿到容器（图片）的宽度（包含边框）
    var num = Math.floor(document.documentElement.clientWidth / imgWidth)//一行能放几张图片（当前文档的宽度（不包含边框）/宽度=7.5（Math.floor向下取整））
    cparent.style.width = imgWidth * num + 'px'//.style.width给cparent（类container）设置css的样式
  
    var BoxHeightArr = []
    for (var i = 0; i < ccontent.length; i++) {
      if (i < num) {
        BoxHeightArr[i] = ccontent[i].offsetHeight
        // console.log(BoxHeightArr[i]);//打印前七张（第一行）图片的高度
      } else { // 第二行的图片
        var minHeight = Math.min.apply(null, BoxHeightArr)//看不懂，不去纠结，反正是拿到当前数组的最小高度
        var minIndex = BoxHeightArr.indexOf(minHeight)//是拿到当前数组的最小高度类的下标
  
        ccontent[i].style.position = 'absolute'//修改css样式的定位，即30个的div.box
        ccontent[i].style.top = minHeight + 'px'//将top定位到当前数组的最小高度的下面
        ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px'//将left定位到当前数组的最小高度div.box的下标的位置
  
        BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight
      }
    }
  
    console.log(BoxHeightArr);
  }
  

  function getChildElement(parent, content) { // 找到parent中所有的content
    var allContent = parent.getElementsByTagName('*')//读取标签名，读取parent下所有的标签
    // console.log(allContent);//一共有30*box,box-img,img个标签
    // console.log(allContent[0].className);//打印box
    // console.log(allContent[1].className);//打印box-img
    // console.log(allContent[2].className);//打印null(img标签无类名)

    var contentArr = []
  
    for (var i = 0; i < allContent.length; i++) {
      if (allContent[i].className == content) {
        contentArr.push(allContent[i])//将类名box加入到contentArr数组，最后再返回该数组
      }
    }
    return contentArr
    console.log(contentArr);
  }