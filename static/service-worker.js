self.addEventListener('install', (event) => {
    console.log('Version installing', event);
 
    event.waitUntil(
        caches.open("static-v1").then(cache => cache.add("https://kaiyouhu.github.io/TMESIS/dist/img/TMESIS-logo.35b33ef8.png"))
    );
});
 
self.addEventListener('activate', (event) => {
    console.log('Version now ready to handle');
});
 
self.addEventListener("fetch", event => {
    const url = new URL(event.request.url);
    console.log('fetch', event.request);
});

	if ('serviceWorker' in navigator) {
	    window.addEventListener('load', function () {
	        navigator.serviceWorker.register('/static/service-worker.js', {scope: '/static/'})
	            .then(function (registration) {
	
	                // 注册成功
	                console.log('注册成功 ', registration.scope);
	            })
	            .catch(function (err) {
	
	                // 注册失败:(
	                console.log('注册失败', err);
	            });
	    });
	}

