/*
 * @Author: wlj
 * @Date: 2022-06-10 15:36:54
 * @LastEditors: wlj
 * @LastEditTime: 2022-06-10 16:52:49
 * @Description: 
 */
import focus from'./focus'
import debounce from './debounce'


export default function<App>(app:any):void{
    focus(app)
    debounce(app)
}