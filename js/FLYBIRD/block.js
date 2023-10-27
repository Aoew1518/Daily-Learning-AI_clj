function Block() {
    this.upDivWrap = null//上方管道
    this.downDivWrap = null//下方管道
    this.gapHeight = baseObj.randomNum(150, 160) // 间隙区间的随机值
    this.downHeight = baseObj.randomNum(0, 150) //下方管道的高度随机值
    this.upHeight = 312 - this.downHeight - this.gapHeight//上方高度=总高度-间隙-下方管道的高度
  
    // 生成div
    this.createDiv = function(url, height, positionType, left, top) {
      var newDiv = document.createElement('div')
      newDiv.style.width = '62px'
      newDiv.style.height = height
      newDiv.style.position = positionType
      newDiv.style.left = left
      newDiv.style.top = top
      newDiv.style.backgroundImage = url
      return newDiv
    }
    
  // 移动管道
    this.moveBlock = function() {
      this.upDivWrap.style.left = this.upDivWrap.offsetLeft - 3 + 'px'
      this.downDivWrap.style.left = this.downDivWrap.offsetLeft - 3 + 'px'
    }

    // 生成管道
    this.createBlock = function() {
      // 上方
      var upDiv1 = this.createDiv('url(img/up_mod.png)', this.upHeight + 'px')//管道身子div
      var upDiv2 = this.createDiv('url(img/up_pipe.png)', '60px')//管道口子
      this.upDivWrap = this.createDiv(null, null, 'absolute', '450px', '0px')
      this.upDivWrap.appendChild(upDiv1)
      this.upDivWrap.appendChild(upDiv2)
      
      //连接管道
      // this.upDivWrap.appendChild(upDiv1)
      // this.upDivWrap.appendChild(upDiv2)

      //下方管道
      var downDiv1 = this.createDiv('url(img/down_mod.png)',this.downHeight+'px') 
      var downDiv2 = this.createDiv('url(img/down_pipe.png)','60px')
      this.downDivWrap= this.createDiv(null,null,'absolute','450px',363-this.downHeight+'px')
      this.downDivWrap.appendChild(downDiv2)//管道口
      this.downDivWrap.appendChild(downDiv1)//管道体

      jsWrapBg.appendChild(this.upDivWrap)
      jsWrapBg.appendChild(this.downDivWrap)
        
    }
  }
  
  
  
  // this.createDiv()
  // var b = new Block()