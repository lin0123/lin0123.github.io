webpackJsonp([31],{1140:function(t,e,a){var s=a(835);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(477)("7c749541",s,!0)},1307:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-common-use"},[a("table",{staticClass:"table"},[a("caption",[t._v("table title and/or explanatory text")]),t._v(" "),t._m(0),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("datasdsfsd")]),t._v(" "),a("td",[t._v("datasdsfsd")]),t._v(" "),a("td",[a("span",{ref:"testSpan"},[t._v("datasdssdfsdrewrefewrwerewdsfdsfdfsd")])]),t._v(" "),a("td",[t._v("datasdsfsd")]),t._v(" "),a("td",[t._v("datasdsfsd")]),t._v(" "),a("td",[t._v("datasdsfsd")])])])]),t._v(" "),a("button",{attrs:{type:"button"},on:{click:t.getSpan}},[t._v("huoqu")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("标题1")]),t._v(" "),a("th",[t._v("标题2")]),t._v(" "),a("th",[t._v("标题3")]),t._v(" "),a("th",[t._v("标题4")]),t._v(" "),a("th",[t._v("标题5")]),t._v(" "),a("th",[t._v("标题6")])])])}]}},487:function(t,e,a){a(1140);var s=a(178)(a(774),a(1307),"data-v-c991e2b6",null);t.exports=s.exports},774:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"table-common-use",props:{},components:{},created:function(){},mounted:function(){},data:function(){return{}},methods:{getSpan:function(){}}}},835:function(t,e,a){e=t.exports=a(476)(),e.push([t.i,".table-common-use table[data-v-c991e2b6]{width:100%;border:1px solid #ccc;border-collapse:collapse;table-layout:auto}.table-common-use table tr td[data-v-c991e2b6],.table-common-use table tr th[data-v-c991e2b6]{border:1px solid #ccc;width:.4rem}.table-common-use table tr td span[data-v-c991e2b6],.table-common-use table tr th span[data-v-c991e2b6]{width:10em;display:block;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}",""])}});          4、valign\n          5、bgcolor\n          6、colspan\n            设置单元格跨列\n          7、rowspan\n            设置单元格跨行\n    3、表格中的其他标记\n      1、<caption></caption>\n        作用：为表格定义标题\n        位置：表格正上方居中显示\n        <table>\n          <caption>标题</caption>\n          <tr>\n            <td></td>\n            <td></td>\n          </tr>\n        </table>\n      2、行标题或列标题\n        列标题：第一行中的每一列，加粗，水平居中的效果显示\n        行标题：每行里面的第一列, 加粗，水平居中的效果显示\n        行(列)标题:<th></th>\n        <th></th>作用 与 <td></td>一模一样\n      3、表格的复杂应用\n        1、行分组\n          表格可以被划分成3个部分\n          1、表头  <thead></thead>\n          2、表主体<tbody></tbody>\n          3、表尾  <tfoot></tfoot>\n            <table>\n              <tbody>\n                <tr></tr>\n                <tr></tr>\n              </tbody>\n            </table>\n             注意：如果不对表格行进行分组的话，那么默认都属于 tbody 中\n        2、不规则表格\n          每行中的列数，不是统一化的。\n          1、跨列\n            合并列，让指定的单元格，横向向右，合并几个单元格(包含自己)\n            语法：td 的 colspan 属性\n            2、跨行\n              合并行，让指定的单元格，纵向向下，合并几个单元格(包含自己)\n              语法：td 的 rowspan 属性\n              注意：无论是跨行还是跨列，被合并的单元格一定从代码中删除出去\n        3、表格的嵌套\n          在一个表格中，又嵌入了另外一个表格\n          被嵌套的表格必须出现在 td 中\n          <table>\n            <tr>\n              <td>\n                <table>\n                  <tr>\n                    <td>\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n        4.表格特有的样式属性\n          1、边框合并\n            属性：border-collapse\n            取值：\n              1、separate\n                默认值，分离边框模式\n              2、collapse\n                边框合并模式\n          2、边框边距\n            1、作用\n              设置相邻单元格边框之间的距离(类似于cellspacing)\n            2、属性\n              border-spacing\n              取值：\n                1、取1个值\n                  表示水平和垂直间距相等\n                2、取2个值\n                  第一个值表示的 水平间距\n                  第二个值表示的 垂直间距\n                  两个值之间用 空格 隔开\n            3、要求\n              border-collapse 必须为 separate 即必须为分离边框模式时有效\n          3、标题位置\n            <caption></caption>\n            作用：将标题位置由默认的位置改到表格之下\n            属性：caption-side\n            取值：\n            1、top\n              默认\n            2、bottom\n              标题位于表格之下\n          4、显示规则\n            1、作用\n              指定浏览器以什么样的方式来布局一个表格。实际是指定了单元格的算法规则\n              默认算法：单元格的宽由内容来决定，不受设置的width值来限定。\n            2、属性\n              table-layout\n              取值：\n              1、auto\n                默认值，自动，列宽由内容来决定\n              2、fixed\n                固定表格布局，列宽由设定的值决定。\n            3、自动表格布局&固定表格布局\n              1、自动表格布局(auto)\n                单元格的大小会适应内容大小\n                在表格复杂时，加载会比较慢\n                适用于不确定每列大小时使用\n                传统表格表现方式\n              2、固定表格布局(fixed)\n                单元格的大小由设定的值来决定，与内容无关\n                会加速显示表格，浏览器在加载完第一行的时候就不用再计算了。 \n    4、隐藏的显示效果\n      属性：  visibility:collapse\n      用在表格元素上，删除一行或一列，不影响表格整个布局\n  ")])])}]}},502:function(n,t,e){e(1114);var o=e(178)(e(791),e(1281),"data-v-28a1284c",null);n.exports=o.exports},791:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"table-common-use",props:{},components:{},created:function(){},mounted:function(){},data:function(){return{}},methods:{}}},809:function(n,t,e){t=n.exports=e(476)(),t.push([n.i,"",""])}});