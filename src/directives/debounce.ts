
/*
 * @Author: wlj
 * @Date: 2022-06-10 16:46:39
 * @LastEditors: wlj
 * @LastEditTime: 2022-06-11 08:31:05
 * @Description: 
 */
export default function (app:any){
    app.directive('debounce',{
        mounted(el:any,binding:any) {
            const delay:number = binding.value.delay;
            const event:string = binding.value.event;
            const fn:Function = binding.value.fn;
           el.handler = function(this:any):void{
              el.time = null;
              if(el.time){
                clearTimeout(el.time)
                  el.time = null
                  return
                }
                el.time = setTimeout(()=>{
                    el.time = null;
                    fn.apply(this,arguments)
              },delay)
            }
            el.addEventListener(event,el.handler)
        },
        beforeMount(el:any, binding:any) {
             if (el.time) {
             clearTimeout(el.time);
             el.time = null;
            }
          el.removeEventListener(binding.value.event, el.handler)
             }
    })
}