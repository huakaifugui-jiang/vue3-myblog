/*
 * @Author: wlj
 * @Date: 2022-06-10 15:13:33
 * @LastEditors: wlj
 * @LastEditTime: 2022-06-10 16:43:48
 * @Description: 
 */
export default  function focus(app:any):void{
    app.directive('focus', {
        mounted(el:HTMLElement) {
          el.focus()
        }
      })
}