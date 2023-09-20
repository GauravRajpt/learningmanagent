const CacheData="appV1";
this.addEventListener("install",(event)=>{
event.waitUntil(caches.open(CacheData).then((cache)=>{
    cache.addAll([
        "/ws",
        "/static/js/bundle.js",
        "/manifest.json",
        "/index.html",
        "/",
        "/Users",
    ])
}))
})
this.addEventListener('fetch',(event)=>{
    if(!navigator.onLine){
    event.respondWith(
        caches.match(event.request).then((resp)=>{
            if(resp){
                return resp;
            }
        }
        )
    )
    }
})
