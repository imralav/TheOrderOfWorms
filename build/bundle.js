var app=function(){"use strict";function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function r(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(r)}function s(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function f(t,n,e,r,o,i,s){const u=function(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(void 0===n.dirty)return o;if("object"==typeof o){const t=[],e=Math.max(n.dirty.length,o.length);for(let r=0;r<e;r+=1)t[r]=n.dirty[r]|o[r];return t}return n.dirty|o}return n.dirty}(n,r,o,i);if(u){const o=c(n,e,r,s);t.p(o,u)}}const l="undefined"!=typeof window;let a=l?()=>window.performance.now():()=>Date.now(),h=l?t=>requestAnimationFrame(t):t;const p=new Set;function d(t){p.forEach((n=>{n.c(t)||(p.delete(n),n.f())})),0!==p.size&&h(d)}function b(t,n){t.appendChild(n)}function y(t,n,e){t.insertBefore(n,e||null)}function v(t){t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function _(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function x(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function E(t,n,e,r){t.style.setProperty(n,e,r?"important":"")}let $,S;function O(){if(void 0===$){$=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){$=!0}}return $}function T(t){S=t}function A(){if(!S)throw new Error("Function called outside component initialization");return S}function I(t){A().$$.on_mount.push(t)}function j(){const t=A();return(n,e)=>{const r=t.$$.callbacks[n];if(r){const o=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);r.slice().forEach((n=>{n.call(t,o)}))}}}const k=[],P=[],N=[],C=[],D=Promise.resolve();let V=!1;function z(t){N.push(t)}let H=!1;const M=new Set;function Y(){if(!H){H=!0;do{for(let t=0;t<k.length;t+=1){const n=k[t];T(n),U(n.$$)}for(T(null),k.length=0;P.length;)P.pop()();for(let t=0;t<N.length;t+=1){const n=N[t];M.has(n)||(M.add(n),n())}N.length=0}while(k.length);for(;C.length;)C.pop()();V=!1,H=!1,M.clear()}}function U(t){if(null!==t.fragment){t.update(),i(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}const W=new Set;let F;function L(t,n){t&&t.i&&(W.delete(t),t.i(n))}function q(t,n,e,r){if(t&&t.o){if(W.has(t))return;W.add(t),F.c.push((()=>{W.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function R(t){t&&t.c()}function B(t,n,e,o){const{fragment:u,on_mount:c,on_destroy:f,after_update:l}=t.$$;u&&u.m(n,e),o||z((()=>{const n=c.map(r).filter(s);f?f.push(...n):i(n),t.$$.on_mount=[]})),l.forEach(z)}function K(t,n){const e=t.$$;null!==e.fragment&&(i(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function G(t,n){-1===t.$$.dirty[0]&&(k.push(t),V||(V=!0,D.then(Y)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function J(n,e,r,s,u,c,f=[-1]){const l=S;T(n);const a=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:e.context||[]),callbacks:o(),dirty:f,skip_bound:!1};let h=!1;if(a.ctx=r?r(n,e.props||{},((t,e,...r)=>{const o=r.length?r[0]:e;return a.ctx&&u(a.ctx[t],a.ctx[t]=o)&&(!a.skip_bound&&a.bound[t]&&a.bound[t](o),h&&G(n,t)),e})):[],a.update(),h=!0,i(a.before_update),a.fragment=!!s&&s(a.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);a.fragment&&a.fragment.l(t),t.forEach(v)}else a.fragment&&a.fragment.c();e.intro&&L(n.$$.fragment),B(n,e.target,e.anchor,e.customElement),Y()}T(l)}class Q{$destroy(){K(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var X=function(t,n){return(X=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};function Z(t,n){function e(){this.constructor=t}X(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function tt(t){return"function"==typeof t}var nt=!1,et={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;nt=t},get useDeprecatedSynchronousErrorHandling(){return nt}};function rt(t){setTimeout((function(){throw t}),0)}var ot={closed:!0,next:function(t){},error:function(t){if(et.useDeprecatedSynchronousErrorHandling)throw t;rt(t)},complete:function(){}},it=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}();function st(t){return null!==t&&"object"==typeof t}var ut=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,n){return n+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}(),ct=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var n;if(!this.closed){var e=this,r=e._parentOrParents,o=e._ctorUnsubscribe,i=e._unsubscribe,s=e._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,r instanceof t)r.remove(this);else if(null!==r)for(var u=0;u<r.length;++u){r[u].remove(this)}if(tt(i)){o&&(this._unsubscribe=void 0);try{i.call(this)}catch(t){n=t instanceof ut?ft(t.errors):[t]}}if(it(s)){u=-1;for(var c=s.length;++u<c;){var f=s[u];if(st(f))try{f.unsubscribe()}catch(t){n=n||[],t instanceof ut?n=n.concat(ft(t.errors)):n.push(t)}}}if(n)throw new ut(n)}},t.prototype.add=function(n){var e=n;if(!n)return t.EMPTY;switch(typeof n){case"function":e=new t(n);case"object":if(e===this||e.closed||"function"!=typeof e.unsubscribe)return e;if(this.closed)return e.unsubscribe(),e;if(!(e instanceof t)){var r=e;(e=new t)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+n+" added to Subscription.")}var o=e._parentOrParents;if(null===o)e._parentOrParents=this;else if(o instanceof t){if(o===this)return e;e._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return e;o.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[e]:i.push(e),e},t.prototype.remove=function(t){var n=this._subscriptions;if(n){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function ft(t){return t.reduce((function(t,n){return t.concat(n instanceof ut?n.errors:n)}),[])}var lt=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),at=function(t){function n(e,r,o){var i=t.call(this)||this;switch(i.syncErrorValue=null,i.syncErrorThrown=!1,i.syncErrorThrowable=!1,i.isStopped=!1,arguments.length){case 0:i.destination=ot;break;case 1:if(!e){i.destination=ot;break}if("object"==typeof e){e instanceof n?(i.syncErrorThrowable=e.syncErrorThrowable,i.destination=e,e.add(i)):(i.syncErrorThrowable=!0,i.destination=new ht(i,e));break}default:i.syncErrorThrowable=!0,i.destination=new ht(i,e,r,o)}return i}return Z(n,t),n.prototype[lt]=function(){return this},n.create=function(t,e,r){var o=new n(t,e,r);return o.syncErrorThrowable=!1,o},n.prototype.next=function(t){this.isStopped||this._next(t)},n.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},n.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},n.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},n}(ct),ht=function(t){function n(n,e,r,o){var i,s=t.call(this)||this;s._parentSubscriber=n;var u=s;return tt(e)?i=e:e&&(i=e.next,r=e.error,o=e.complete,e!==ot&&(tt((u=Object.create(e)).unsubscribe)&&s.add(u.unsubscribe.bind(u)),u.unsubscribe=s.unsubscribe.bind(s))),s._context=u,s._next=i,s._error=r,s._complete=o,s}return Z(n,t),n.prototype.next=function(t){if(!this.isStopped&&this._next){var n=this._parentSubscriber;et.useDeprecatedSynchronousErrorHandling&&n.syncErrorThrowable?this.__tryOrSetError(n,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},n.prototype.error=function(t){if(!this.isStopped){var n=this._parentSubscriber,e=et.useDeprecatedSynchronousErrorHandling;if(this._error)e&&n.syncErrorThrowable?(this.__tryOrSetError(n,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(n.syncErrorThrowable)e?(n.syncErrorValue=t,n.syncErrorThrown=!0):rt(t),this.unsubscribe();else{if(this.unsubscribe(),e)throw t;rt(t)}}},n.prototype.complete=function(){var t=this;if(!this.isStopped){var n=this._parentSubscriber;if(this._complete){var e=function(){return t._complete.call(t._context)};et.useDeprecatedSynchronousErrorHandling&&n.syncErrorThrowable?(this.__tryOrSetError(n,e),this.unsubscribe()):(this.__tryOrUnsub(e),this.unsubscribe())}else this.unsubscribe()}},n.prototype.__tryOrUnsub=function(t,n){try{t.call(this._context,n)}catch(t){if(this.unsubscribe(),et.useDeprecatedSynchronousErrorHandling)throw t;rt(t)}},n.prototype.__tryOrSetError=function(t,n,e){if(!et.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{n.call(this._context,e)}catch(n){return et.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=n,t.syncErrorThrown=!0,!0):(rt(n),!0)}return!1},n.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},n}(at);var pt=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function dt(t){return t}function bt(t){return 0===t.length?dt:1===t.length?t[0]:function(n){return t.reduce((function(t,n){return n(t)}),n)}}var yt=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(n){var e=new t;return e.source=this,e.operator=n,e},t.prototype.subscribe=function(t,n,e){var r=this.operator,o=function(t,n,e){if(t){if(t instanceof at)return t;if(t[lt])return t[lt]()}return t||n||e?new at(t,n,e):new at(ot)}(t,n,e);if(r?o.add(r.call(o,this.source)):o.add(this.source||et.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),et.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){et.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=n),!function(t){for(;t;){var n=t,e=n.closed,r=n.destination,o=n.isStopped;if(e||o)return!1;t=r&&r instanceof at?r:null}return!0}(t)?console.warn(n):t.error(n)}},t.prototype.forEach=function(t,n){var e=this;return new(n=vt(n))((function(n,r){var o;o=e.subscribe((function(n){try{t(n)}catch(t){r(t),o&&o.unsubscribe()}}),r,n)}))},t.prototype._subscribe=function(t){var n=this.source;return n&&n.subscribe(t)},t.prototype[pt]=function(){return this},t.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return 0===t.length?this:bt(t)(this)},t.prototype.toPromise=function(t){var n=this;return new(t=vt(t))((function(t,e){var r;n.subscribe((function(t){return r=t}),(function(t){return e(t)}),(function(){return t(r)}))}))},t.create=function(n){return new t(n)},t}();function vt(t){if(t||(t=Promise),!t)throw new Error("no Promise impl found");return t}var wt=function(){function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t}(),mt=function(t){function n(n,e){var r=t.call(this)||this;return r.subject=n,r.subscriber=e,r.closed=!1,r}return Z(n,t),n.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,n=t.observers;if(this.subject=null,n&&0!==n.length&&!t.isStopped&&!t.closed){var e=n.indexOf(this.subscriber);-1!==e&&n.splice(e,1)}}},n}(ct),gt=function(t){function n(n){var e=t.call(this,n)||this;return e.destination=n,e}return Z(n,t),n}(at),_t=function(t){function n(){var n=t.call(this)||this;return n.observers=[],n.closed=!1,n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return Z(n,t),n.prototype[lt]=function(){return new gt(this)},n.prototype.lift=function(t){var n=new xt(this,this);return n.operator=t,n},n.prototype.next=function(t){if(this.closed)throw new wt;if(!this.isStopped)for(var n=this.observers,e=n.length,r=n.slice(),o=0;o<e;o++)r[o].next(t)},n.prototype.error=function(t){if(this.closed)throw new wt;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var n=this.observers,e=n.length,r=n.slice(),o=0;o<e;o++)r[o].error(t);this.observers.length=0},n.prototype.complete=function(){if(this.closed)throw new wt;this.isStopped=!0;for(var t=this.observers,n=t.length,e=t.slice(),r=0;r<n;r++)e[r].complete();this.observers.length=0},n.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},n.prototype._trySubscribe=function(n){if(this.closed)throw new wt;return t.prototype._trySubscribe.call(this,n)},n.prototype._subscribe=function(t){if(this.closed)throw new wt;return this.hasError?(t.error(this.thrownError),ct.EMPTY):this.isStopped?(t.complete(),ct.EMPTY):(this.observers.push(t),new mt(this,t))},n.prototype.asObservable=function(){var t=new yt;return t.source=this,t},n.create=function(t,n){return new xt(t,n)},n}(yt),xt=function(t){function n(n,e){var r=t.call(this)||this;return r.destination=n,r.source=e,r}return Z(n,t),n.prototype.next=function(t){var n=this.destination;n&&n.next&&n.next(t)},n.prototype.error=function(t){var n=this.destination;n&&n.error&&this.destination.error(t)},n.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},n.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):ct.EMPTY},n}(_t),Et=function(t){function n(n,e){var r=t.call(this,n,e)||this;return r.scheduler=n,r.work=e,r.pending=!1,r}return Z(n,t),n.prototype.schedule=function(t,n){if(void 0===n&&(n=0),this.closed)return this;this.state=t;var e=this.id,r=this.scheduler;return null!=e&&(this.id=this.recycleAsyncId(r,e,n)),this.pending=!0,this.delay=n,this.id=this.id||this.requestAsyncId(r,this.id,n),this},n.prototype.requestAsyncId=function(t,n,e){return void 0===e&&(e=0),setInterval(t.flush.bind(t,this),e)},n.prototype.recycleAsyncId=function(t,n,e){if(void 0===e&&(e=0),null!==e&&this.delay===e&&!1===this.pending)return n;clearInterval(n)},n.prototype.execute=function(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var e=this._execute(t,n);if(e)return e;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(t,n){var e=!1,r=void 0;try{this.work(t)}catch(t){e=!0,r=!!t&&t||new Error(t)}if(e)return this.unsubscribe(),r},n.prototype._unsubscribe=function(){var t=this.id,n=this.scheduler,e=n.actions,r=e.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&e.splice(r,1),null!=t&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null},n}(function(t){function n(n,e){return t.call(this)||this}return Z(n,t),n.prototype.schedule=function(t,n){return this},n}(ct)),$t=function(){function t(n,e){void 0===e&&(e=t.now),this.SchedulerAction=n,this.now=e}return t.prototype.schedule=function(t,n,e){return void 0===n&&(n=0),new this.SchedulerAction(this,t).schedule(e,n)},t.now=function(){return Date.now()},t}();function St(t){return t&&"function"==typeof t.schedule}var Ot=function(t){return function(n){for(var e=0,r=t.length;e<r&&!n.closed;e++)n.next(t[e]);n.complete()}};function Tt(t,n){return new yt((function(e){var r=new ct,o=0;return r.add(n.schedule((function(){o!==t.length?(e.next(t[o++]),e.closed||r.add(this.schedule())):e.complete()}))),r}))}function At(t,n){return n?Tt(t,n):new yt(Ot(t))}function It(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=t[t.length-1];return St(e)?(t.pop(),Tt(t,e)):At(t)}var jt=new(function(t){function n(e,r){void 0===r&&(r=$t.now);var o=t.call(this,e,(function(){return n.delegate&&n.delegate!==o?n.delegate.now():r()}))||this;return o.actions=[],o.active=!1,o.scheduled=void 0,o}return Z(n,t),n.prototype.schedule=function(e,r,o){return void 0===r&&(r=0),n.delegate&&n.delegate!==this?n.delegate.schedule(e,r,o):t.prototype.schedule.call(this,e,r,o)},n.prototype.flush=function(t){var n=this.actions;if(this.active)n.push(t);else{var e;this.active=!0;do{if(e=t.execute(t.state,t.delay))break}while(t=n.shift());if(this.active=!1,e){for(;t=n.shift();)t.unsubscribe();throw e}}},n}($t))(Et);var kt=function(){function t(t,n){this.project=t,this.thisArg=n}return t.prototype.call=function(t,n){return n.subscribe(new Pt(t,this.project,this.thisArg))},t}(),Pt=function(t){function n(n,e,r){var o=t.call(this,n)||this;return o.project=e,o.count=0,o.thisArg=r||o,o}return Z(n,t),n.prototype._next=function(t){var n;try{n=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(n)},n}(at);function Nt(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var Ct=Nt(),Dt=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function Vt(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}var zt=function(t){if(t&&"function"==typeof t[pt])return r=t,function(t){var n=r[pt]();if("function"!=typeof n.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return n.subscribe(t)};if(Dt(t))return Ot(t);if(Vt(t))return e=t,function(t){return e.then((function(n){t.closed||(t.next(n),t.complete())}),(function(n){return t.error(n)})).then(null,rt),t};if(t&&"function"==typeof t[Ct])return n=t,function(t){for(var e=n[Ct]();;){var r=void 0;try{r=e.next()}catch(n){return t.error(n),t}if(r.done){t.complete();break}if(t.next(r.value),t.closed)break}return"function"==typeof e.return&&t.add((function(){e.return&&e.return()})),t};var n,e,r,o=st(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+o+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function Ht(t,n){if(null!=t){if(function(t){return t&&"function"==typeof t[pt]}(t))return function(t,n){return new yt((function(e){var r=new ct;return r.add(n.schedule((function(){var o=t[pt]();r.add(o.subscribe({next:function(t){r.add(n.schedule((function(){return e.next(t)})))},error:function(t){r.add(n.schedule((function(){return e.error(t)})))},complete:function(){r.add(n.schedule((function(){return e.complete()})))}}))}))),r}))}(t,n);if(Vt(t))return function(t,n){return new yt((function(e){var r=new ct;return r.add(n.schedule((function(){return t.then((function(t){r.add(n.schedule((function(){e.next(t),r.add(n.schedule((function(){return e.complete()})))})))}),(function(t){r.add(n.schedule((function(){return e.error(t)})))}))}))),r}))}(t,n);if(Dt(t))return Tt(t,n);if(function(t){return t&&"function"==typeof t[Ct]}(t)||"string"==typeof t)return function(t,n){if(!t)throw new Error("Iterable cannot be null");return new yt((function(e){var r,o=new ct;return o.add((function(){r&&"function"==typeof r.return&&r.return()})),o.add(n.schedule((function(){r=t[Ct](),o.add(n.schedule((function(){if(!e.closed){var t,n;try{var o=r.next();t=o.value,n=o.done}catch(t){return void e.error(t)}n?e.complete():(e.next(t),this.schedule())}})))}))),o}))}(t,n)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}var Mt=function(t){function n(n){var e=t.call(this)||this;return e.parent=n,e}return Z(n,t),n.prototype._next=function(t){this.parent.notifyNext(t)},n.prototype._error=function(t){this.parent.notifyError(t),this.unsubscribe()},n.prototype._complete=function(){this.parent.notifyComplete(),this.unsubscribe()},n}(at),Yt=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return Z(n,t),n.prototype.notifyNext=function(t){this.destination.next(t)},n.prototype.notifyError=function(t){this.destination.error(t)},n.prototype.notifyComplete=function(){this.destination.complete()},n}(at);function Ut(t,n){if(!n.closed){if(t instanceof yt)return t.subscribe(n);var e;try{e=zt(t)(n)}catch(t){n.error(t)}return e}}function Wt(t,n,e){return void 0===e&&(e=Number.POSITIVE_INFINITY),"function"==typeof n?function(r){return r.pipe(Wt((function(e,r){return(o=t(e,r),i?Ht(o,i):o instanceof yt?o:new yt(zt(o))).pipe(function(t,n){return function(e){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return e.lift(new kt(t,n))}}((function(t,o){return n(e,t,r,o)})));var o,i}),e))}:("number"==typeof n&&(e=n),function(n){return n.lift(new Ft(t,e))})}var Ft=function(){function t(t,n){void 0===n&&(n=Number.POSITIVE_INFINITY),this.project=t,this.concurrent=n}return t.prototype.call=function(t,n){return n.subscribe(new Lt(t,this.project,this.concurrent))},t}(),Lt=function(t){function n(n,e,r){void 0===r&&(r=Number.POSITIVE_INFINITY);var o=t.call(this,n)||this;return o.project=e,o.concurrent=r,o.hasCompleted=!1,o.buffer=[],o.active=0,o.index=0,o}return Z(n,t),n.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},n.prototype._tryNext=function(t){var n,e=this.index++;try{n=this.project(t,e)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(n)},n.prototype._innerSub=function(t){var n=new Mt(this),e=this.destination;e.add(n);var r=Ut(t,n);r!==n&&e.add(r)},n.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},n.prototype.notifyNext=function(t){this.destination.next(t)},n.prototype.notifyComplete=function(){var t=this.buffer;this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},n}(Yt);function qt(){return void 0===(t=1)&&(t=Number.POSITIVE_INFINITY),Wt(dt,t);var t}function Rt(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return qt()(It.apply(void 0,t))}function Bt(t,n){var e;return void 0===t&&(t=0),void 0===n&&(n=jt),(it(e=t)||!(e-parseFloat(e)+1>=0)||t<0)&&(t=0),n&&"function"==typeof n.schedule||(n=jt),new yt((function(e){return e.add(n.schedule(Kt,t,{subscriber:e,counter:0,period:t})),e}))}function Kt(t){var n=t.subscriber,e=t.counter,r=t.period;n.next(e),this.schedule({subscriber:n,counter:e+1,period:r},r)}var Gt=function(){function t(t){this.notifier=t}return t.prototype.call=function(t,n){var e=new Jt(t),r=Ut(this.notifier,new Mt(e));return r&&!e.seenValue?(e.add(r),n.subscribe(e)):e},t}(),Jt=function(t){function n(n){var e=t.call(this,n)||this;return e.seenValue=!1,e}return Z(n,t),n.prototype.notifyNext=function(){this.seenValue=!0,this.complete()},n.prototype.notifyComplete=function(){},n}(Yt);const Qt=[];function Xt(t){return"[object Date]"===Object.prototype.toString.call(t)}function Zt(t,n){if(t===n||t!=t)return()=>t;const e=typeof t;if(e!==typeof n||Array.isArray(t)!==Array.isArray(n))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const e=n.map(((n,e)=>Zt(t[e],n)));return t=>e.map((n=>n(t)))}if("object"===e){if(!t||!n)throw new Error("Object cannot be null");if(Xt(t)&&Xt(n)){t=t.getTime();const e=(n=n.getTime())-t;return n=>new Date(t+n*e)}const e=Object.keys(n),r={};return e.forEach((e=>{r[e]=Zt(t[e],n[e])})),t=>{const n={};return e.forEach((e=>{n[e]=r[e](t)})),n}}if("number"===e){const e=n-t;return n=>t+n*e}throw new Error(`Cannot interpolate ${e} values`)}function tn(r,o={}){const i=function(n,e=t){let r;const o=[];function i(t){if(u(n,t)&&(n=t,r)){const t=!Qt.length;for(let t=0;t<o.length;t+=1){const e=o[t];e[1](),Qt.push(e,n)}if(t){for(let t=0;t<Qt.length;t+=2)Qt[t][0](Qt[t+1]);Qt.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(s,u=t){const c=[s,u];return o.push(c),1===o.length&&(r=e(i)||t),s(n),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}(r);let s,c=r;function f(t,u){if(null==r)return i.set(r=t),Promise.resolve();c=t;let f=s,l=!1,{delay:b=0,duration:y=400,easing:v=n,interpolate:w=Zt}=e(e({},o),u);if(0===y)return f&&(f.abort(),f=null),i.set(r=c),Promise.resolve();const m=a()+b;let g;return s=function(t){let n;return 0===p.size&&h(d),{promise:new Promise((e=>{p.add(n={c:t,f:e})})),abort(){p.delete(n)}}}((n=>{if(n<m)return!0;l||(g=w(r,t),"function"==typeof y&&(y=y(r,t)),l=!0),f&&(f.abort(),f=null);const e=n-m;return e>y?(i.set(r=t),!1):(i.set(r=g(v(e/y))),!0)})),s.promise}return{set:f,update:(t,n)=>f(t(c,r),n),subscribe:i.subscribe}}function nn(n){let e;return{c(){e=w("div"),E(e,"top",n[0]+"px"),E(e,"left",n[3]+"px"),E(e,"width",n[1]+"px"),E(e,"height",n[1]/2+"px"),x(e,"class","svelte-150z7x6")},m(t,n){y(t,e,n)},p(t,[n]){1&n&&E(e,"top",t[0]+"px"),8&n&&E(e,"left",t[3]+"px"),2&n&&E(e,"width",t[1]+"px"),2&n&&E(e,"height",t[1]/2+"px")},i:t,o:t,d(t){t&&v(e)}}}function en(n,e,r){let o,i=t,s=()=>(i(),i=function(n,...e){if(null==n)return t;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}(p,(t=>r(3,o=t))),p);n.$$.on_destroy.push((()=>i()));let{x:u}=e,{y:c}=e,{size:f}=e,{speed:l}=e,{skyWidth:a}=e;const h=4e3;let p,d;function b(){var t;s(r(2,p=tn(c,{duration:h}))),d=p.subscribe((t=>r(4,c=t))),Bt(h).pipe((t=v,function(n){return n.lift(new Gt(t))}),function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=t[t.length-1];return St(e)?(t.pop(),function(n){return Rt(t,n,e)}):function(n){return Rt(t,n)}}(0)).subscribe((()=>{r(4,c-=l),c<-2*f&&(console.log("Cloud out of bound",c,f),y("cloud-left-the-sky"),r(4,c=a),v.next(),b()),p.set(c)}))}const y=j(),v=new _t;var w;return v.subscribe((()=>d())),I((()=>{b()})),w=()=>{v.next(),v.complete()},A().$$.on_destroy.push(w),n.$$set=t=>{"x"in t&&r(0,u=t.x),"y"in t&&r(4,c=t.y),"size"in t&&r(1,f=t.size),"speed"in t&&r(5,l=t.speed),"skyWidth"in t&&r(6,a=t.skyWidth)},[u,f,p,o,c,l,a,h]}class rn extends Q{constructor(t){super(),J(this,t,en,nn,u,{x:0,y:4,size:1,speed:5,skyWidth:6,CLOUD_MOVEMENT_TICK_INTERVAL:7})}get CLOUD_MOVEMENT_TICK_INTERVAL(){return this.$$.ctx[7]}}const on=(t,n)=>t+Math.random()*(n-t);function sn(t,n,e){const r=t.slice();return r[7]=n[e],r[9]=e,r}function un(t){let n,r;const o=[t[7],{skyWidth:t[0]}];let i={};for(let t=0;t<o.length;t+=1)i=e(i,o[t]);return n=new rn({props:i}),{c(){R(n.$$.fragment)},m(t,e){B(n,t,e),r=!0},p(t,e){const r=5&e?function(t,n){const e={},r={},o={$$scope:1};let i=t.length;for(;i--;){const s=t[i],u=n[i];if(u){for(const t in s)t in u||(r[t]=1);for(const t in u)o[t]||(e[t]=u[t],o[t]=1);t[i]=u}else for(const t in s)o[t]=1}for(const t in r)t in e||(e[t]=void 0);return e}(o,[4&e&&(i=t[7],"object"==typeof i&&null!==i?i:{}),1&e&&{skyWidth:t[0]}]):{};var i;n.$set(r)},i(t){r||(L(n.$$.fragment,t),r=!0)},o(t){q(n.$$.fragment,t),r=!1},d(t){K(n,t)}}}function cn(t){let n,e,r,o=t[2],s=[];for(let n=0;n<o.length;n+=1)s[n]=un(sn(t,o,n));const u=t=>q(s[t],1,1,(()=>{s[t]=null}));return{c(){n=w("main");for(let t=0;t<s.length;t+=1)s[t].c();x(n,"class","svelte-zixska"),z((()=>t[3].call(n)))},m(o,i){y(o,n,i);for(let t=0;t<s.length;t+=1)s[t].m(n,null);e=function(t,n){"static"===getComputedStyle(t).position&&(t.style.position="relative");const e=w("iframe");e.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),e.setAttribute("aria-hidden","true"),e.tabIndex=-1;const r=O();let o;return r?(e.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=_(window,"message",(t=>{t.source===e.contentWindow&&n()}))):(e.src="about:blank",e.onload=()=>{o=_(e.contentWindow,"resize",n)}),b(t,e),()=>{(r||o&&e.contentWindow)&&o(),v(e)}}(n,t[3].bind(n)),r=!0},p(t,[e]){if(5&e){let r;for(o=t[2],r=0;r<o.length;r+=1){const i=sn(t,o,r);s[r]?(s[r].p(i,e),L(s[r],1)):(s[r]=un(i),s[r].c(),L(s[r],1),s[r].m(n,null))}for(F={r:0,c:[],p:F},r=o.length;r<s.length;r+=1)u(r);F.r||i(F.c),F=F.p}},i(t){if(!r){for(let t=0;t<o.length;t+=1)L(s[t]);r=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)q(s[t]);r=!1},d(t){t&&v(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(s,t),e()}}}function fn(t,n,e){let r,o,i=[];function s(t=1){return Array(t).fill(0).map((()=>{return{y:t||on(0,r),x:on(0,window.innerHeight),size:on(20,150),speed:on(80,120)};var t}))}return I((()=>{e(2,i=s(30))})),[r,o,i,function(){r=this.clientWidth,o=this.clientHeight,e(0,r),e(1,o)}]}class ln extends Q{constructor(t){super(),J(this,t,fn,cn,u,{})}}function an(t){let n,e,r,o,i,s;const u=t[1].default,l=function(t,n,e,r){if(t){const o=c(t,n,e,r);return t[0](o)}}(u,t,t[0],null),a=l||function(t){let n;return{c(){n=m("Algorithm input")},m(t,e){y(t,n,e)},d(t){t&&v(n)}}}();return{c(){n=w("main"),e=w("section"),r=g(),o=w("section"),a&&a.c(),i=m("\r\n>"),x(e,"class","grass svelte-lba3dg"),x(o,"class","earth svelte-lba3dg"),x(n,"class","svelte-lba3dg")},m(t,u){y(t,n,u),b(n,e),b(n,r),b(n,o),a&&a.m(o,null),y(t,i,u),s=!0},p(t,[n]){l&&l.p&&1&n&&f(l,u,t,t[0],n,null,null)},i(t){s||(L(a,t),s=!0)},o(t){q(a,t),s=!1},d(t){t&&v(n),a&&a.d(t),t&&v(i)}}}function hn(t,n,e){let{$$slots:r={},$$scope:o}=n;return t.$$set=t=>{"$$scope"in t&&e(0,o=t.$$scope)},[o,r]}class pn extends Q{constructor(t){super(),J(this,t,hn,an,u,{})}}function dn(n){let e,r,o,i;return e=new ln({}),o=new pn({}),{c(){R(e.$$.fragment),r=g(),R(o.$$.fragment)},m(t,n){B(e,t,n),y(t,r,n),B(o,t,n),i=!0},p:t,i(t){i||(L(e.$$.fragment,t),L(o.$$.fragment,t),i=!0)},o(t){q(e.$$.fragment,t),q(o.$$.fragment,t),i=!1},d(t){K(e,t),t&&v(r),K(o,t)}}}return new class extends Q{constructor(t){super(),J(this,t,null,dn,u,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
