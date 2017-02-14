function Clock(ctx, obj) {
    this.ctx = ctx;
    this.obj = obj;
    return new Clock.fn.init();
};
Clock.fn = Clock.prototype = {
    constructor: Clock,
    //初始化函数
    init: function () {
        this.eachRadian = 2 * Math.PI / 60;//每一格的弧度
        for (var value in obj) {//混入继承属性
            Clock.prototype[value] = obj[value];
        }
        this.drawBigCircle();//绘制大圆
        this.drawAllScale();//绘制刻度线
        this.drawCenterDot();//绘制中心点
        this.drawIndicator();//绘制指针
    },
    // 绘制大表盘
    drawBigCircle: function () {
        ctx.beginPath();
        ctx.save();
        ctx.lineWidth = 20;
        ctx.arc(this.bigX, this.bigY, this.bigRadius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.restore();
    },
    // 绘制所有刻度线
    drawAllScale: function () {
        var longLineWidth = this.longLineWidth, shortLineWidth = this.shortLineWidth, longLength = this.longLength, shortLength = this.shortLength, longLineColor = this.longLineColor, shortLineColor = this.shortLineColor, startRadian = -Math.PI / 2, eachRadian = this.eachRadian;
        for (var i = 0; i < 60; i++) {
            if ((i + 1) % 5 == 0) {//满足条件的画长线
                this.drawScale(startRadian, longLineWidth, longLineColor, longLength);
                this.drawText((i + 1) / 5, startRadian);
                // console.log(i);
            } else {//其余的画短线
                this.drawScale(startRadian, shortLineWidth, shortLineColor, shortLength);
            }
            startRadian += eachRadian;
        }
    },
    /**
     * 绘制单根刻度线方法
     * @param startRadian 每次开始弧度
     * @param line_width 刻度线宽
     * @param lineColor 刻度线颜色
     * @param lineLength 刻度线长度
     */
    drawScale: function (startRadian, line_width, lineColor, lineLength) {
        var bigRadius = this.bigRadius - 10, bigX = this.bigX, bigY = this.bigY, eachRadian = this.eachRadian;
        var beginX = bigX + bigRadius * Math.cos(startRadian + eachRadian);
        var beginY = bigY + bigRadius * Math.sin(startRadian + eachRadian);
        var endX = bigX + (bigRadius - lineLength) * Math.cos(startRadian + eachRadian);
        var endY = bigY + (bigRadius - lineLength) * Math.sin(startRadian + eachRadian);
        // console.log(beginX + "|" + beginY);
        ctx.beginPath();
        ctx.save();
        ctx.strokeStyle = lineColor;
        ctx.lineCap = "round";
        ctx.lineWidth = line_width;
        ctx.moveTo(beginX, beginY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.restore();
    },
    /**
     * 绘制文字
     * @param textContent 文字内容
     * @param startRadian 文字每次开始的弧度
     */
    drawText: function (textContent, startRadian) {
        var bigRadius = this.bigRadius, bigX = this.bigX, bigY = this.bigY, textGap = this.textGap, eachRadian = this.eachRadian;

        var textX = bigX + (bigRadius - textGap) * Math.cos(startRadian + eachRadian);
        var textY = bigY + (bigRadius - textGap) * Math.sin(startRadian + eachRadian);
        ctx.beginPath();
        ctx.font = "28px 黑体";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(textContent, textX, textY);
    },
    //绘制时钟
    drawIndicator: function () {
        var date = new Date();
        var s = date.getSeconds(), min = date.getMinutes() - 1, h = date.getHours() % 12, _self = this, s_eachRadian = 0.75 * Math.PI / 180, s_startRadian = 8 * s * s_eachRadian - Math.PI / 2, min_eachRadian = 6 * Math.PI / 180, min_startRadian = min * min_eachRadian - Math.PI / 2, count = Math.floor(min / 12), h_eachRadian = 6 * Math.PI / 180, h_startRadian = (5 * h + count) * h_eachRadian - Math.PI / 2;

        var sId = setInterval(function () {
            // 进来就清除画布内容
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            _self.drawCenterDot();//绘制中心点
            _self.drawBigCircle();//绘制大圆
            _self.drawAllScale();//绘制刻度线
            _self.drawLinePointer(_self.hourLine, h_startRadian, h_eachRadian, 4, "red");
            _self.drawLinePointer(_self.minuLine, min_startRadian, min_eachRadian, 6, "orange");
            _self.drawLinePointer(_self.secondLine, s_startRadian, s_eachRadian, 8, "black");
            if (s == 60) {
                console.log("进来了没");
                min_startRadian += min_eachRadian;
                s = 0;
                s_startRadian = -Math.PI / 2;
                min++;
            }
            if (min % 12 == 0) {
                count++;
            }
            if (min == 60) {
                h_startRadian += h_eachRadian;
                min = 0;
                min_startRadian = -Math.PI / 2;
                h++;
            }
            s += 0.125;
            s_startRadian += s_eachRadian;
        }, 125);
    },
    // 绘制中心点
    drawCenterDot: function () {
        var bigX = this.bigX, bigY = this.bigY;
        ctx.beginPath();
        ctx.save();
        ctx.arc(bigX, bigY, this.clockCenter, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.restore();
    },
    /**
     * 绘制时钟,分钟,秒钟线
     * @param pointerRadius 指针长度
     * @param startRadian 指针开始弧度
     * @param eachRadian 指针每次转动弧度
     * @param pointerWidth 指针宽度
     * @param pointerColor 指针颜色
     */
    drawLinePointer: function (pointerRadius, startRadian, eachRadian, pointerWidth, pointerColor) {
        var bigX = this.bigX, bigY = this.bigY;

        var pointerX = bigX + pointerRadius * Math.cos(startRadian + eachRadian);
        var pointerY = bigY + pointerRadius * Math.sin(startRadian + eachRadian);

        ctx.beginPath();
        ctx.save();
        ctx.lineWidth = pointerWidth;
        ctx.strokeStyle = pointerColor;
        ctx.lineCap = "round";
        // ctx.globalCompositeOperation = "source-atop";
        ctx.moveTo(bigX, bigY);
        ctx.lineTo(pointerX, pointerY);
        ctx.stroke();
        ctx.restore();
    }
};
Clock.fn.init.prototype = Clock.fn;