
interface DeepCloneObj {
    [propName: string]: Object
  };

let deepClone = function (target: DeepCloneObj):DeepCloneObj {
    if (typeof target !== "object") {
      return target;
    } else {
      let deepTarget:any = Array.isArray(target) ? [] : {};
      let key: (keyof DeepCloneObj);
      for (key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          if (typeof target[key] == "object") {
            deepTarget[key] = deepClone(target[key] as DeepCloneObj);
          } else {
            deepTarget[key] = target[key];
          }
        }
      }
      return deepTarget;
    }
  };
 export default deepClone;