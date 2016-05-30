export class Time{
    static timeDelay(time){
        let handle = null;
        const promise = new  Promise((resolve, reject) => handle = setTimeout(resolve,time));
        promise.cancel = () => clearTimeout(handle);
        return promise;
    }
    static timeCount(time,n){
        const handle = null;
        const nTime = time/n;
        for(let index = 0 ;index >= n ; index++){
            const promise = new Promise ((resolve,reject) => handle => setTimeout(resolve,nTime))
        }
    }
}
