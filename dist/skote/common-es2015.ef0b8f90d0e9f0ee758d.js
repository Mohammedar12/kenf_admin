(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{f4AX:function(t,e,r){"use strict";r.d(e,"a",function(){return h});var s=r("tk/3"),p=r("lJxs"),i=r("AytR"),n=r("fXoL"),o=r("DYii");let h=(()=>{class t{constructor(t,e){this.http=t,this.authService=e,this.httpOptions={withCredentials:!0,headers:new s.d},this.authService.currentUser.subscribe(t=>{console.log(t)})}getUserGroup(t=1,e=10,r=""){let s=i.a.backend+`/user/group?page=${t}&limit=${e}`;return r&&""!==r.trim()&&encodeURIComponent(r),this.http.get(s,this.httpOptions).pipe(Object(p.a)(t=>t.data))}delUserGroup(t){return this.http.delete(i.a.backend+"/user/group/"+t,this.httpOptions)}updateUserGroup(t,e){return this.http.put(i.a.backend+"/user/group/"+e,t,this.httpOptions)}adduser(t){return this.http.post(i.a.backend+"/user",t,this.httpOptions)}AddUserGroup(t){return this.http.post(i.a.backend+"/user/group",t,this.httpOptions)}getAll(t=1){return this.http.get(i.a.backend+"/user?page="+t,this.httpOptions).pipe(Object(p.a)(t=>t.data))}getFile(t){return this.http.get(i.a.backend+"/getfile?id="+t)}register(t){return this.http.post("/users/register",t)}}return t.\u0275fac=function(e){return new(e||t)(n.lc(s.b),n.lc(o.a))},t.\u0275prov=n.Ub({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);