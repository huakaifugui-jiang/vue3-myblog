/*
 * @Author: wlj
 * @Date: 2022-06-10 15:36:54
 * @LastEditors: wlj
 * @LastEditTime: 2022-06-11 11:13:11
 * @Description: 
 */
import focus from './focus'
import debounce from './debounce'


export default function (app: any): void {
    focus(app)
    debounce(app)
}