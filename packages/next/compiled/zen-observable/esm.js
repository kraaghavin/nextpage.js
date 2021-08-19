module.exports=(()=>{"use strict";var e={343:(e,t,r)=>{r.r(t);r.d(t,{Observable:()=>Observable,combineLatest:()=>combineLatest,default:()=>l,merge:()=>merge,zip:()=>zip});const n=()=>typeof Symbol==="function";const o=e=>n()&&Boolean(Symbol[e]);const i=e=>o(e)?Symbol[e]:"@@"+e;if(n()&&!o("observable")){Symbol.observable=Symbol("observable")}const s=i("iterator");const u=i("observable");const c=i("species");function getMethod(e,t){let r=e[t];if(r==null)return undefined;if(typeof r!=="function")throw new TypeError(r+" is not a function");return r}function getSpecies(e){let t=e.constructor;if(t!==undefined){t=t[c];if(t===null){t=undefined}}return t!==undefined?t:Observable}function isObservable(e){return e instanceof Observable}function hostReportError(e){if(hostReportError.log){hostReportError.log(e)}else{setTimeout(()=>{throw e})}}function enqueue(e){Promise.resolve().then(()=>{try{e()}catch(e){hostReportError(e)}})}function cleanupSubscription(e){let t=e._cleanup;if(t===undefined)return;e._cleanup=undefined;if(!t){return}try{if(typeof t==="function"){t()}else{let e=getMethod(t,"unsubscribe");if(e){e.call(t)}}}catch(e){hostReportError(e)}}function closeSubscription(e){e._observer=undefined;e._queue=undefined;e._state="closed"}function flushSubscription(e){let t=e._queue;if(!t){return}e._queue=undefined;e._state="ready";for(let r=0;r<t.length;++r){notifySubscription(e,t[r].type,t[r].value);if(e._state==="closed")break}}function notifySubscription(e,t,r){e._state="running";let n=e._observer;try{let o=getMethod(n,t);switch(t){case"next":if(o)o.call(n,r);break;case"error":closeSubscription(e);if(o)o.call(n,r);else throw r;break;case"complete":closeSubscription(e);if(o)o.call(n);break}}catch(e){hostReportError(e)}if(e._state==="closed")cleanupSubscription(e);else if(e._state==="running")e._state="ready"}function onNotify(e,t,r){if(e._state==="closed")return;if(e._state==="buffering"){e._queue.push({type:t,value:r});return}if(e._state!=="ready"){e._state="buffering";e._queue=[{type:t,value:r}];enqueue(()=>flushSubscription(e));return}notifySubscription(e,t,r)}class Subscription{constructor(e,t){this._cleanup=undefined;this._observer=e;this._queue=undefined;this._state="initializing";let r=new SubscriptionObserver(this);try{this._cleanup=t.call(undefined,r)}catch(e){r.error(e)}if(this._state==="initializing")this._state="ready"}get closed(){return this._state==="closed"}unsubscribe(){if(this._state!=="closed"){closeSubscription(this);cleanupSubscription(this)}}}class SubscriptionObserver{constructor(e){this._subscription=e}get closed(){return this._subscription._state==="closed"}next(e){onNotify(this._subscription,"next",e)}error(e){onNotify(this._subscription,"error",e)}complete(){onNotify(this._subscription,"complete")}}class Observable{constructor(e){if(!(this instanceof Observable))throw new TypeError("Observable cannot be called as a function");if(typeof e!=="function")throw new TypeError("Observable initializer must be a function");this._subscriber=e}subscribe(e){if(typeof e!=="object"||e===null){e={next:e,error:arguments[1],complete:arguments[2]}}return new Subscription(e,this._subscriber)}forEach(e){return new Promise((t,r)=>{if(typeof e!=="function"){r(new TypeError(e+" is not a function"));return}function done(){n.unsubscribe();t()}let n=this.subscribe({next(t){try{e(t,done)}catch(e){r(e);n.unsubscribe()}},error:r,complete:t})})}map(e){if(typeof e!=="function")throw new TypeError(e+" is not a function");let t=getSpecies(this);return new t(t=>this.subscribe({next(r){try{r=e(r)}catch(e){return t.error(e)}t.next(r)},error(e){t.error(e)},complete(){t.complete()}}))}filter(e){if(typeof e!=="function")throw new TypeError(e+" is not a function");let t=getSpecies(this);return new t(t=>this.subscribe({next(r){try{if(!e(r))return}catch(e){return t.error(e)}t.next(r)},error(e){t.error(e)},complete(){t.complete()}}))}reduce(e){if(typeof e!=="function")throw new TypeError(e+" is not a function");let t=getSpecies(this);let r=arguments.length>1;let n=false;let o=arguments[1];let i=o;return new t(t=>this.subscribe({next(o){let s=!n;n=true;if(!s||r){try{i=e(i,o)}catch(e){return t.error(e)}}else{i=o}},error(e){t.error(e)},complete(){if(!n&&!r)return t.error(new TypeError("Cannot reduce an empty sequence"));t.next(i);t.complete()}}))}concat(...e){let t=getSpecies(this);return new t(r=>{let n;let o=0;function startNext(i){n=i.subscribe({next(e){r.next(e)},error(e){r.error(e)},complete(){if(o===e.length){n=undefined;r.complete()}else{startNext(t.from(e[o++]))}}})}startNext(this);return()=>{if(n){n.unsubscribe();n=undefined}}})}flatMap(e){if(typeof e!=="function")throw new TypeError(e+" is not a function");let t=getSpecies(this);return new t(r=>{let n=[];let o=this.subscribe({next(o){if(e){try{o=e(o)}catch(e){return r.error(e)}}let i=t.from(o).subscribe({next(e){r.next(e)},error(e){r.error(e)},complete(){let e=n.indexOf(i);if(e>=0)n.splice(e,1);completeIfDone()}});n.push(i)},error(e){r.error(e)},complete(){completeIfDone()}});function completeIfDone(){if(o.closed&&n.length===0)r.complete()}return()=>{n.forEach(e=>e.unsubscribe());o.unsubscribe()}})}[u](){return this}static from(e){let t=typeof this==="function"?this:Observable;if(e==null)throw new TypeError(e+" is not an object");let r=getMethod(e,u);if(r){let n=r.call(e);if(Object(n)!==n)throw new TypeError(n+" is not an object");if(isObservable(n)&&n.constructor===t)return n;return new t(e=>n.subscribe(e))}if(o("iterator")){r=getMethod(e,s);if(r){return new t(t=>{enqueue(()=>{if(t.closed)return;for(let n of r.call(e)){t.next(n);if(t.closed)return}t.complete()})})}}if(Array.isArray(e)){return new t(t=>{enqueue(()=>{if(t.closed)return;for(let r=0;r<e.length;++r){t.next(e[r]);if(t.closed)return}t.complete()})})}throw new TypeError(e+" is not observable")}static of(...e){let t=typeof this==="function"?this:Observable;return new t(t=>{enqueue(()=>{if(t.closed)return;for(let r=0;r<e.length;++r){t.next(e[r]);if(t.closed)return}t.complete()})})}static get[c](){return this}}if(n()){Object.defineProperty(Observable,Symbol("extensions"),{value:{symbol:u,hostReportError:hostReportError},configurable:true})}function merge(...e){return new Observable(t=>{if(e.length===0)return Observable.from([]);let r=e.length;let n=e.map(e=>Observable.from(e).subscribe({next(e){t.next(e)},error(e){t.error(e)},complete(){if(--r===0)t.complete()}}));return()=>n.forEach(e=>e.unsubscribe())})}function combineLatest(...e){return new Observable(t=>{if(e.length===0)return Observable.from([]);let r=e.length;let n=new Set;let o=false;let i=e.map(()=>undefined);let s=e.map((s,u)=>Observable.from(s).subscribe({next(r){i[u]=r;if(!o){n.add(u);if(n.size!==e.length)return;n=null;o=true}t.next(Array.from(i))},error(e){t.error(e)},complete(){if(--r===0)t.complete()}}));return()=>s.forEach(e=>e.unsubscribe())})}function zip(...e){return new Observable(t=>{if(e.length===0)return Observable.from([]);let r=e.map(()=>[]);function done(){return r.some((e,t)=>e.length===0&&n[t].closed)}let n=e.map((e,n)=>Observable.from(e).subscribe({next(e){r[n].push(e);if(r.every(e=>e.length>0)){t.next(r.map(e=>e.shift()));if(done())t.complete()}},error(e){t.error(e)},complete(){if(done())t.complete()}}));return()=>n.forEach(e=>e.unsubscribe())})}const l=Observable}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var n=t[r]={exports:{}};var o=true;try{e[r](n,n.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return n.exports}(()=>{__nccwpck_require__.d=((e,t)=>{for(var r in t){if(__nccwpck_require__.o(t,r)&&!__nccwpck_require__.o(e,r)){Object.defineProperty(e,r,{enumerable:true,get:t[r]})}}})})();(()=>{__nccwpck_require__.o=((e,t)=>Object.prototype.hasOwnProperty.call(e,t))})();(()=>{__nccwpck_require__.r=(e=>{if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})})})();__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(343)})();