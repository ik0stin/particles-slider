(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xl="160",Jf=0,Nc=1,Qf=2,Yd=1,ep=2,Zn=3,ii=0,jt=1,Nn=2,Ei=0,Os=1,dl=2,Oc=3,Uc=4,tp=5,Wi=100,np=101,ip=102,Fc=103,Bc=104,sp=200,rp=201,ap=202,op=203,hl=204,fl=205,lp=206,cp=207,up=208,dp=209,hp=210,fp=211,pp=212,mp=213,gp=214,_p=0,vp=1,xp=2,Ia=3,yp=4,Sp=5,Ep=6,Mp=7,qd=0,bp=1,Tp=2,Mi=0,wp=1,Ap=2,Cp=3,Rp=4,Lp=5,Pp=6,zc="attached",Dp="detached",jd=300,Hs=301,Gs=302,pl=303,ml=304,Ka=306,Vs=1e3,_n=1001,Na=1002,Ct=1003,gl=1004,wa=1005,qt=1006,Kd=1007,ss=1008,bi=1009,Ip=1010,Np=1011,$l=1012,Zd=1013,gi=1014,ti=1015,Dr=1016,Jd=1017,Qd=1018,Ki=1020,Op=1021,vn=1023,Up=1024,Fp=1025,Zi=1026,Ws=1027,Bp=1028,eh=1029,zp=1030,th=1031,nh=1033,co=33776,uo=33777,ho=33778,fo=33779,kc=35840,Hc=35841,Gc=35842,Vc=35843,ih=36196,Wc=37492,Xc=37496,$c=37808,Yc=37809,qc=37810,jc=37811,Kc=37812,Zc=37813,Jc=37814,Qc=37815,eu=37816,tu=37817,nu=37818,iu=37819,su=37820,ru=37821,po=36492,au=36494,ou=36495,kp=36283,lu=36284,cu=36285,uu=36286,Ir=2300,Xs=2301,mo=2302,du=2400,hu=2401,fu=2402,Hp=2500,Gp=0,sh=1,_l=2,rh=3e3,Ji=3001,Vp=3200,Wp=3201,ah=0,Xp=1,xn="",at="srgb",St="srgb-linear",Yl="display-p3",Za="display-p3-linear",Oa="linear",rt="srgb",Ua="rec709",Fa="p3",fs=7680,pu=519,$p=512,Yp=513,qp=514,oh=515,jp=516,Kp=517,Zp=518,Jp=519,vl=35044,mu="300 es",xl=1035,ni=2e3,Ba=2001;class ir{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gu=1234567;const Mr=Math.PI/180,$s=180/Math.PI;function Ln(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[s&255]+Ut[s>>8&255]+Ut[s>>16&255]+Ut[s>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Bt(s,e,t){return Math.max(e,Math.min(t,s))}function ql(s,e){return(s%e+e)%e}function Qp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function em(s,e,t){return s!==e?(t-s)/(e-s):0}function br(s,e,t){return(1-t)*s+t*e}function tm(s,e,t,n){return br(s,e,1-Math.exp(-t*n))}function nm(s,e=1){return e-Math.abs(ql(s,e*2)-e)}function im(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function sm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function rm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function am(s,e){return s+Math.random()*(e-s)}function om(s){return s*(.5-Math.random())}function lm(s){s!==void 0&&(gu=s);let e=gu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cm(s){return s*Mr}function um(s){return s*$s}function yl(s){return(s&s-1)===0&&s!==0}function dm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function za(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hm(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),p=r((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*d,l*h,o*c);break;case"YZY":s.set(l*h,o*u,l*d,o*c);break;case"ZXZ":s.set(l*d,l*h,o*u,o*c);break;case"XZX":s.set(o*u,l*_,l*p,o*c);break;case"YXY":s.set(l*p,o*u,l*_,o*c);break;case"ZYZ":s.set(l*_,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function On(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Je(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const fm={DEG2RAD:Mr,RAD2DEG:$s,generateUUID:Ln,clamp:Bt,euclideanModulo:ql,mapLinear:Qp,inverseLerp:em,lerp:br,damp:tm,pingpong:nm,smoothstep:im,smootherstep:sm,randInt:rm,randFloat:am,randFloatSpread:om,seededRandom:lm,degToRad:cm,radToDeg:um,isPowerOfTwo:yl,ceilPowerOfTwo:dm,floorPowerOfTwo:za,setQuaternionFromProperEuler:hm,normalize:Je,denormalize:On};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,i,r,a,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],_=n[8],g=i[0],m=i[3],f=i[6],x=i[1],v=i[4],y=i[7],b=i[2],M=i[5],T=i[8];return r[0]=a*g+o*x+l*b,r[3]=a*m+o*v+l*M,r[6]=a*f+o*y+l*T,r[1]=c*g+u*x+d*b,r[4]=c*m+u*v+d*M,r[7]=c*f+u*y+d*T,r[2]=h*g+p*x+_*b,r[5]=h*m+p*v+_*M,r[8]=h*f+p*y+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,p=c*r-a*l,_=t*d+n*h+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=h*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(go.makeScale(e,t)),this}rotate(e){return this.premultiply(go.makeRotation(-e)),this}translate(e,t){return this.premultiply(go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const go=new ke;function lh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Nr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pm(){const s=Nr("canvas");return s.style.display="block",s}const _u={};function Tr(s){s in _u||(_u[s]=!0,console.warn(s))}const vu=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xu=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zr={[St]:{transfer:Oa,primaries:Ua,toReference:s=>s,fromReference:s=>s},[at]:{transfer:rt,primaries:Ua,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Za]:{transfer:Oa,primaries:Fa,toReference:s=>s.applyMatrix3(xu),fromReference:s=>s.applyMatrix3(vu)},[Yl]:{transfer:rt,primaries:Fa,toReference:s=>s.convertSRGBToLinear().applyMatrix3(xu),fromReference:s=>s.applyMatrix3(vu).convertLinearToSRGB()}},mm=new Set([St,Za]),Ye={enabled:!0,_workingColorSpace:St,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!mm.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Zr[e].toReference,i=Zr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Zr[s].primaries},getTransfer:function(s){return s===xn?Oa:Zr[s].transfer}};function Us(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _o(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ps;class ch{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ps===void 0&&(ps=Nr("canvas")),ps.width=e.width,ps.height=e.height;const n=ps.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Us(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Us(t[n]/255)*255):t[n]=Us(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gm=0;class uh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Ln(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(vo(i[a].image)):r.push(vo(i[a]))}else r=vo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function vo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ch.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _m=0;class It extends ir{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=_n,i=_n,r=qt,a=ss,o=vn,l=bi,c=It.DEFAULT_ANISOTROPY,u=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Ln(),this.name="",this.source=new uh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ji?at:xn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===at?Ji:rh}set encoding(e){Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ji?at:xn}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=jd;It.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(p+1)/2,b=(f+1)/2,M=(u+h)/4,T=(d+g)/4,C=(_+m)/4;return v>y&&v>b?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=M/n,r=T/n):y>b?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=M/i,r=C/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=T/r,i=C/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(d-g)/x,this.z=(h-u)/x,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vm extends ir{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Tr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ji?at:xn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new It(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new uh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends vm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dh extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xm extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Li{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==h||c!==p||u!==_){let m=1-o;const f=l*h+c*p+u*_+d*g,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const b=Math.sqrt(v),M=Math.atan2(b,f*x);m=Math.sin(m*M)/b,o=Math.sin(o*M)/b}const y=o*x;if(l=l*m+h*y,c=c*m+p*y,u=u*m+_*y,d=d*m+g*y,m===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[a],h=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*d+l*p-c*h,e[t+1]=l*_+u*h+c*d-o*p,e[t+2]=c*_+u*p+o*h-l*d,e[t+3]=u*_-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(r/2),h=l(n/2),p=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"YXZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"ZXY":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"ZYX":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"YZX":this._x=h*u*d+c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d-h*p*_;break;case"XZY":this._x=h*u*d-c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=i+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xo.copy(this).projectOnVector(e),this.sub(xo)}reflect(e){return this.sub(xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xo=new G,yu=new Li;class ai{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jr.copy(n.boundingBox)),Jr.applyMatrix4(e.matrixWorld),this.union(Jr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),Qr.subVectors(this.max,ur),ms.subVectors(e.a,ur),gs.subVectors(e.b,ur),_s.subVectors(e.c,ur),li.subVectors(gs,ms),ci.subVectors(_s,gs),Ni.subVectors(ms,_s);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ni.z,Ni.y,li.z,0,-li.x,ci.z,0,-ci.x,Ni.z,0,-Ni.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ni.y,Ni.x,0];return!yo(t,ms,gs,_s,Qr)||(t=[1,0,0,0,1,0,0,0,1],!yo(t,ms,gs,_s,Qr))?!1:(ea.crossVectors(li,ci),t=[ea.x,ea.y,ea.z],yo(t,ms,gs,_s,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new G,new G,new G,new G,new G,new G,new G,new G],wn=new G,Jr=new ai,ms=new G,gs=new G,_s=new G,li=new G,ci=new G,Ni=new G,ur=new G,Qr=new G,ea=new G,Oi=new G;function yo(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Oi.fromArray(s,r);const o=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),u=n.dot(Oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ym=new ai,dr=new G,So=new G;class Gn{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ym.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const t=dr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(dr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(So.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(So)),this.expandByPoint(dr.copy(e.center).sub(So))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new G,Eo=new G,ta=new G,ui=new G,Mo=new G,na=new G,bo=new G;class Ja{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Eo.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(Eo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ta),o=ui.dot(this.direction),l=-ui.dot(ta),c=ui.lengthSq(),u=Math.abs(1-a*a);let d,h,p,_;if(u>0)if(d=a*l-o,h=a*o-l,_=r*u,d>=0)if(h>=-_)if(h<=_){const g=1/u;d*=g,h*=g,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Eo).addScaledVector(ta,h),p}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),i=$n.dot($n)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,i,r){Mo.subVectors(t,e),na.subVectors(n,e),bo.crossVectors(Mo,na);let a=this.direction.dot(bo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,e);const l=o*this.direction.dot(na.crossVectors(ui,na));if(l<0)return null;const c=o*this.direction.dot(Mo.cross(ui));if(c<0||l+c>a)return null;const u=-o*ui.dot(bo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,n,i,r,a,o,l,c,u,d,h,p,_,g,m){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,d,h,p,_,g,m)}set(e,t,n,i,r,a,o,l,c,u,d,h,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,p=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,_=c*u,g=c*d;t[0]=h+g*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=g+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,_=c*u,g=c*d;t[0]=h-g*o,t[4]=-a*d,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=g-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+g,t[1]=l*d,t[5]=g*c+h,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-h*d,t[8]=_*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+_,t[10]=h-g*d}else if(e.order==="XZY"){const h=a*l,p=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+g,t[5]=a*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=o*u,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sm,e,Em)}lookAt(e,t,n){const i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),di.crossVectors(n,nn),di.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),di.crossVectors(n,nn)),di.normalize(),ia.crossVectors(nn,di),i[0]=di.x,i[4]=ia.x,i[8]=nn.x,i[1]=di.y,i[5]=ia.y,i[9]=nn.y,i[2]=di.z,i[6]=ia.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],x=n[3],v=n[7],y=n[11],b=n[15],M=i[0],T=i[4],C=i[8],S=i[12],E=i[1],N=i[5],P=i[9],D=i[13],A=i[2],O=i[6],F=i[10],I=i[14],U=i[3],H=i[7],X=i[11],k=i[15];return r[0]=a*M+o*E+l*A+c*U,r[4]=a*T+o*N+l*O+c*H,r[8]=a*C+o*P+l*F+c*X,r[12]=a*S+o*D+l*I+c*k,r[1]=u*M+d*E+h*A+p*U,r[5]=u*T+d*N+h*O+p*H,r[9]=u*C+d*P+h*F+p*X,r[13]=u*S+d*D+h*I+p*k,r[2]=_*M+g*E+m*A+f*U,r[6]=_*T+g*N+m*O+f*H,r[10]=_*C+g*P+m*F+f*X,r[14]=_*S+g*D+m*I+f*k,r[3]=x*M+v*E+y*A+b*U,r[7]=x*T+v*N+y*O+b*H,r[11]=x*C+v*P+y*F+b*X,r[15]=x*S+v*D+y*I+b*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+r*l*d-i*c*d-r*o*h+n*c*h+i*o*p-n*l*p)+g*(+t*l*p-t*c*h+r*a*h-i*a*p+i*c*u-r*l*u)+m*(+t*c*d-t*o*p-r*a*d+n*a*p+r*o*u-n*c*u)+f*(-i*o*u-t*l*d+t*o*h+i*a*d-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],x=d*m*c-g*h*c+g*l*p-o*m*p-d*l*f+o*h*f,v=_*h*c-u*m*c-_*l*p+a*m*p+u*l*f-a*h*f,y=u*g*c-_*d*c+_*o*p-a*g*p-u*o*f+a*d*f,b=_*d*l-u*g*l-_*o*h+a*g*h+u*o*m-a*d*m,M=t*x+n*v+i*y+r*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=x*T,e[1]=(g*h*r-d*m*r-g*i*p+n*m*p+d*i*f-n*h*f)*T,e[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*f+n*l*f)*T,e[3]=(d*l*r-o*h*r-d*i*c+n*h*c+o*i*p-n*l*p)*T,e[4]=v*T,e[5]=(u*m*r-_*h*r+_*i*p-t*m*p-u*i*f+t*h*f)*T,e[6]=(_*l*r-a*m*r-_*i*c+t*m*c+a*i*f-t*l*f)*T,e[7]=(a*h*r-u*l*r+u*i*c-t*h*c-a*i*p+t*l*p)*T,e[8]=y*T,e[9]=(_*d*r-u*g*r-_*n*p+t*g*p+u*n*f-t*d*f)*T,e[10]=(a*g*r-_*o*r+_*n*c-t*g*c-a*n*f+t*o*f)*T,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*p-t*o*p)*T,e[12]=b*T,e[13]=(u*g*i-_*d*i+_*n*h-t*g*h-u*n*m+t*d*m)*T,e[14]=(_*o*i-a*g*i-_*n*l+t*g*l+a*n*m-t*o*m)*T,e[15]=(a*d*i-u*o*i+u*n*l-t*d*l-a*n*h+t*o*h)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,p=r*u,_=r*d,g=a*u,m=a*d,f=o*d,x=l*c,v=l*u,y=l*d,b=n.x,M=n.y,T=n.z;return i[0]=(1-(g+f))*b,i[1]=(p+y)*b,i[2]=(_-v)*b,i[3]=0,i[4]=(p-y)*M,i[5]=(1-(h+f))*M,i[6]=(m+x)*M,i[7]=0,i[8]=(_+v)*T,i[9]=(m-x)*T,i[10]=(1-(h+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=vs.set(i[0],i[1],i[2]).length();const a=vs.set(i[4],i[5],i[6]).length(),o=vs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],An.copy(this);const c=1/r,u=1/a,d=1/o;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,t.setFromRotationMatrix(An),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=ni){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let p,_;if(o===ni)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ba)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=ni){const l=this.elements,c=1/(t-e),u=1/(n-i),d=1/(a-r),h=(t+e)*c,p=(n+i)*u;let _,g;if(o===ni)_=(a+r)*d,g=-2*d;else if(o===Ba)_=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vs=new G,An=new He,Sm=new G(0,0,0),Em=new G(1,1,1),di=new G,ia=new G,nn=new G,Su=new He,Eu=new Li;class Qa{constructor(e=0,t=0,n=0,i=Qa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Su,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eu.setFromEuler(this),this.setFromQuaternion(Eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qa.DEFAULT_ORDER="XYZ";class hh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mm=0;const Mu=new G,xs=new Li,Yn=new He,sa=new G,hr=new G,bm=new G,Tm=new Li,bu=new G(1,0,0),Tu=new G(0,1,0),wu=new G(0,0,1),wm={type:"added"},Am={type:"removed"};class dt extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new G,t=new Qa,n=new Li,i=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new ke}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(bu,e)}rotateY(e){return this.rotateOnAxis(Tu,e)}rotateZ(e){return this.rotateOnAxis(wu,e)}translateOnAxis(e,t){return Mu.copy(e).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bu,e)}translateY(e){return this.translateOnAxis(Tu,e)}translateZ(e){return this.translateOnAxis(wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sa.copy(e):sa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(hr,sa,this.up):Yn.lookAt(sa,hr,this.up),this.quaternion.setFromRotationMatrix(Yn),i&&(Yn.extractRotation(i.matrixWorld),xs.setFromRotationMatrix(Yn),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Am)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,bm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Tm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new G(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new G,qn=new G,To=new G,jn=new G,ys=new G,Ss=new G,Au=new G,wo=new G,Ao=new G,Co=new G;let ra=!1;class Rn{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Cn.subVectors(e,t),i.cross(Cn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Cn.subVectors(i,t),qn.subVectors(n,t),To.subVectors(e,t);const a=Cn.dot(Cn),o=Cn.dot(qn),l=Cn.dot(To),c=qn.dot(qn),u=qn.dot(To),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getUV(e,t,n,i,r,a,o,l){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static isFrontFacing(e,t,n,i){return Cn.subVectors(n,t),qn.subVectors(e,t),Cn.cross(qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Cn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),Rn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Rn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;ys.subVectors(i,n),Ss.subVectors(r,n),wo.subVectors(e,n);const l=ys.dot(wo),c=Ss.dot(wo);if(l<=0&&c<=0)return t.copy(n);Ao.subVectors(e,i);const u=ys.dot(Ao),d=Ss.dot(Ao);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ys,a);Co.subVectors(e,r);const p=ys.dot(Co),_=Ss.dot(Co);if(_>=0&&p<=_)return t.copy(r);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Ss,o);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return Au.subVectors(r,i),o=(d-u)/(d-u+(p-_)),t.copy(i).addScaledVector(Au,o);const f=1/(m+g+h);return a=g*f,o=h*f,t.copy(n).addScaledVector(ys,a).addScaledVector(Ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},aa={h:0,s:0,l:0};function Ro(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=ql(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ro(a,r,e+1/3),this.g=Ro(a,r,e),this.b=Ro(a,r,e-1/3)}return Ye.toWorkingColorSpace(this,i),this}setStyle(e,t=at){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){const n=fh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return Ye.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Bt(Ft.r*255,0,255))*65536+Math.round(Bt(Ft.g*255,0,255))*256+Math.round(Bt(Ft.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Ft.copy(this),t);const n=Ft.r,i=Ft.g,r=Ft.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=at){Ye.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,i=Ft.b;return e!==at?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(aa);const n=br(hi.h,aa.h,t),i=br(hi.s,aa.s,t),r=br(hi.l,aa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Te;Te.NAMES=fh;let Cm=0;class Bn extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=Os,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hl,this.blendDst=fl,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hl&&(n.blendSrc=this.blendSrc),this.blendDst!==fl&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ia&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yi extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new G,oa=new Xe;class Lt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oa.fromBufferAttribute(this,t),oa.applyMatrix3(e),this.setXY(t,oa.x,oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vl&&(e.usage=this.usage),e}}class ph extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mh extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zn extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rm=0;const pn=new He,Lo=new dt,Es=new G,sn=new ai,fr=new ai,At=new G;class Tn extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lh(e)?mh:ph)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return Lo.lookAt(e),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new zn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(sn.min,fr.min),sn.expandByPoint(At),At.addVectors(sn.max,fr.max),sn.expandByPoint(At)):(sn.expandByPoint(fr.min),sn.expandByPoint(fr.max))}sn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(e,c),At.add(Es)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<o;E++)c[E]=new G,u[E]=new G;const d=new G,h=new G,p=new G,_=new Xe,g=new Xe,m=new Xe,f=new G,x=new G;function v(E,N,P){d.fromArray(i,E*3),h.fromArray(i,N*3),p.fromArray(i,P*3),_.fromArray(a,E*2),g.fromArray(a,N*2),m.fromArray(a,P*2),h.sub(d),p.sub(d),g.sub(_),m.sub(_);const D=1/(g.x*m.y-m.x*g.y);isFinite(D)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(D),x.copy(p).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(D),c[E].add(f),c[N].add(f),c[P].add(f),u[E].add(x),u[N].add(x),u[P].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let E=0,N=y.length;E<N;++E){const P=y[E],D=P.start,A=P.count;for(let O=D,F=D+A;O<F;O+=3)v(n[O+0],n[O+1],n[O+2])}const b=new G,M=new G,T=new G,C=new G;function S(E){T.fromArray(r,E*3),C.copy(T);const N=c[E];b.copy(N),b.sub(T.multiplyScalar(T.dot(N))).normalize(),M.crossVectors(C,N);const D=M.dot(u[E])<0?-1:1;l[E*4]=b.x,l[E*4+1]=b.y,l[E*4+2]=b.z,l[E*4+3]=D}for(let E=0,N=y.length;E<N;++E){const P=y[E],D=P.start,A=P.count;for(let O=D,F=D+A;O<F;O+=3)S(n[O+0]),S(n[O+1]),S(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new G,r=new G,a=new G,o=new G,l=new G,c=new G,u=new G,d=new G;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let f=0;f<u;f++)h[_++]=c[p++]}return new Lt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cu=new He,Ui=new Ja,la=new Gn,Ru=new G,Ms=new G,bs=new G,Ts=new G,Po=new G,ca=new G,ua=new Xe,da=new Xe,ha=new Xe,Lu=new G,Pu=new G,Du=new G,fa=new G,pa=new G;class Sn extends dt{constructor(e=new Tn,t=new Yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Po.fromBufferAttribute(d,e),a?ca.addScaledVector(Po,u):ca.addScaledVector(Po.sub(t),u))}t.add(ca)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),Ui.copy(e.ray).recast(e.near),!(la.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(la,Ru)===null||Ui.origin.distanceToSquared(Ru)>(e.far-e.near)**2))&&(Cu.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(Cu),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],f=a[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,b=v;y<b;y+=3){const M=o.getX(y),T=o.getX(y+1),C=o.getX(y+2);i=ma(this,f,e,n,c,u,d,M,T,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const x=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);i=ma(this,a,e,n,c,u,d,x,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],f=a[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,b=v;y<b;y+=3){const M=y,T=y+1,C=y+2;i=ma(this,f,e,n,c,u,d,M,T,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const x=m,v=m+1,y=m+2;i=ma(this,a,e,n,c,u,d,x,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Lm(s,e,t,n,i,r,a,o){let l;if(e.side===jt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===ii,o),l===null)return null;pa.copy(o),pa.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(pa);return c<t.near||c>t.far?null:{distance:c,point:pa.clone(),object:s}}function ma(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ms),s.getVertexPosition(l,bs),s.getVertexPosition(c,Ts);const u=Lm(s,e,t,n,Ms,bs,Ts,fa);if(u){i&&(ua.fromBufferAttribute(i,o),da.fromBufferAttribute(i,l),ha.fromBufferAttribute(i,c),u.uv=Rn.getInterpolation(fa,Ms,bs,Ts,ua,da,ha,new Xe)),r&&(ua.fromBufferAttribute(r,o),da.fromBufferAttribute(r,l),ha.fromBufferAttribute(r,c),u.uv1=Rn.getInterpolation(fa,Ms,bs,Ts,ua,da,ha,new Xe),u.uv2=u.uv1),a&&(Lu.fromBufferAttribute(a,o),Pu.fromBufferAttribute(a,l),Du.fromBufferAttribute(a,c),u.normal=Rn.getInterpolation(fa,Ms,bs,Ts,Lu,Pu,Du,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new G,materialIndex:0};Rn.getNormal(Ms,bs,Ts,d.normal),u.face=d}return u}class Xr extends Tn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new zn(c,3)),this.setAttribute("normal",new zn(u,3)),this.setAttribute("uv",new zn(d,2));function _(g,m,f,x,v,y,b,M,T,C,S){const E=y/T,N=b/C,P=y/2,D=b/2,A=M/2,O=T+1,F=C+1;let I=0,U=0;const H=new G;for(let X=0;X<F;X++){const k=X*N-D;for(let V=0;V<O;V++){const z=V*E-P;H[g]=z*x,H[m]=k*v,H[f]=A,c.push(H.x,H.y,H.z),H[g]=0,H[m]=0,H[f]=M>0?1:-1,u.push(H.x,H.y,H.z),d.push(V/T),d.push(1-X/C),I+=1}}for(let X=0;X<C;X++)for(let k=0;k<T;k++){const V=h+k+O*X,z=h+k+O*(X+1),J=h+(k+1)+O*(X+1),K=h+(k+1)+O*X;l.push(V,z,K),l.push(z,J,K),U+=6}o.addGroup(p,U,S),p+=U,h+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Xt(s){const e={};for(let t=0;t<s.length;t++){const n=Ys(s[t]);for(const i in n)e[i]=n[i]}return e}function Pm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function gh(s){return s.getRenderTarget()===null?s.outputColorSpace:Ye.workingColorSpace}const Dm={clone:Ys,merge:Xt};var Im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Im,this.fragmentShader=Nm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=Pm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _h extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $t extends _h{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ws=-90,As=1;class Om extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $t(ws,As,e,t);i.layers=this.layers,this.add(i);const r=new $t(ws,As,e,t);r.layers=this.layers,this.add(r);const a=new $t(ws,As,e,t);a.layers=this.layers,this.add(a);const o=new $t(ws,As,e,t);o.layers=this.layers,this.add(o);const l=new $t(ws,As,e,t);l.layers=this.layers,this.add(l);const c=new $t(ws,As,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class vh extends It{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Hs,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Um extends rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Tr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ji?at:xn),this.texture=new vh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Xr(5,5,5),r=new Ai({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Ei});r.uniforms.tEquirect.value=t;const a=new Sn(i,r),o=t.minFilter;return t.minFilter===ss&&(t.minFilter=qt),new Om(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Do=new G,Fm=new G,Bm=new ke;class Hi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Do.subVectors(n,t).cross(Fm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Do),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bm.getNormalMatrix(e),i=this.coplanarPoint(Do).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new Gn,ga=new G;class jl{constructor(e=new Hi,t=new Hi,n=new Hi,i=new Hi,r=new Hi,a=new Hi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],p=i[8],_=i[9],g=i[10],m=i[11],f=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-r,h-c,m-p,y-f).normalize(),n[1].setComponents(l+r,h+c,m+p,y+f).normalize(),n[2].setComponents(l+a,h+u,m+_,y+x).normalize(),n[3].setComponents(l-a,h-u,m-_,y-x).normalize(),n[4].setComponents(l-o,h-d,m-g,y-v).normalize(),t===ni)n[5].setComponents(l+o,h+d,m+g,y+v).normalize();else if(t===Ba)n[5].setComponents(o,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ga.x=i.normal.x>0?e.max.x:e.min.x,ga.y=i.normal.y>0?e.max.y:e.min.y,ga.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xh(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function zm(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,h=c.usage,p=d.byteLength,_=s.createBuffer();s.bindBuffer(u,_),s.bufferData(u,d,h),c.onUploadCallback();let g;if(d instanceof Float32Array)g=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=s.SHORT;else if(d instanceof Uint32Array)g=s.UNSIGNED_INT;else if(d instanceof Int32Array)g=s.INT;else if(d instanceof Int8Array)g=s.BYTE;else if(d instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,u,d){const h=u.array,p=u._updateRange,_=u.updateRanges;if(s.bindBuffer(d,c),p.count===-1&&_.length===0&&s.bufferSubData(d,0,h),_.length!==0){for(let g=0,m=_.length;g<m;g++){const f=_[g];t?s.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):s.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(t?s.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):s.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,i(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,u),d.version=c.version}}return{get:a,remove:o,update:l}}class Kl extends Tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,p=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const x=f*h-a;for(let v=0;v<c;v++){const y=v*d-r;_.push(y,-x,0),g.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const v=x+c*f,y=x+c*(f+1),b=x+1+c*(f+1),M=x+1+c*f;p.push(v,y,M),p.push(y,b,M)}this.setIndex(p),this.setAttribute("position",new zn(_,3)),this.setAttribute("normal",new zn(g,3)),this.setAttribute("uv",new zn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.width,e.height,e.widthSegments,e.heightSegments)}}var km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$m=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qm=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ug=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",_g=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ag=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ig=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Og=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$g=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,t_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,n_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,i_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,s_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,r_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,l_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,c_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,m_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,__=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,E_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,M_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,b_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,T_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,A_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,R_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,I_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,N_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,B_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Y_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,q_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,j_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ev=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,av=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ov=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_v=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:km,alphahash_pars_fragment:Hm,alphamap_fragment:Gm,alphamap_pars_fragment:Vm,alphatest_fragment:Wm,alphatest_pars_fragment:Xm,aomap_fragment:$m,aomap_pars_fragment:Ym,batching_pars_vertex:qm,batching_vertex:jm,begin_vertex:Km,beginnormal_vertex:Zm,bsdfs:Jm,iridescence_fragment:Qm,bumpmap_pars_fragment:eg,clipping_planes_fragment:tg,clipping_planes_pars_fragment:ng,clipping_planes_pars_vertex:ig,clipping_planes_vertex:sg,color_fragment:rg,color_pars_fragment:ag,color_pars_vertex:og,color_vertex:lg,common:cg,cube_uv_reflection_fragment:ug,defaultnormal_vertex:dg,displacementmap_pars_vertex:hg,displacementmap_vertex:fg,emissivemap_fragment:pg,emissivemap_pars_fragment:mg,colorspace_fragment:gg,colorspace_pars_fragment:_g,envmap_fragment:vg,envmap_common_pars_fragment:xg,envmap_pars_fragment:yg,envmap_pars_vertex:Sg,envmap_physical_pars_fragment:Ig,envmap_vertex:Eg,fog_vertex:Mg,fog_pars_vertex:bg,fog_fragment:Tg,fog_pars_fragment:wg,gradientmap_pars_fragment:Ag,lightmap_fragment:Cg,lightmap_pars_fragment:Rg,lights_lambert_fragment:Lg,lights_lambert_pars_fragment:Pg,lights_pars_begin:Dg,lights_toon_fragment:Ng,lights_toon_pars_fragment:Og,lights_phong_fragment:Ug,lights_phong_pars_fragment:Fg,lights_physical_fragment:Bg,lights_physical_pars_fragment:zg,lights_fragment_begin:kg,lights_fragment_maps:Hg,lights_fragment_end:Gg,logdepthbuf_fragment:Vg,logdepthbuf_pars_fragment:Wg,logdepthbuf_pars_vertex:Xg,logdepthbuf_vertex:$g,map_fragment:Yg,map_pars_fragment:qg,map_particle_fragment:jg,map_particle_pars_fragment:Kg,metalnessmap_fragment:Zg,metalnessmap_pars_fragment:Jg,morphcolor_vertex:Qg,morphnormal_vertex:e_,morphtarget_pars_vertex:t_,morphtarget_vertex:n_,normal_fragment_begin:i_,normal_fragment_maps:s_,normal_pars_fragment:r_,normal_pars_vertex:a_,normal_vertex:o_,normalmap_pars_fragment:l_,clearcoat_normal_fragment_begin:c_,clearcoat_normal_fragment_maps:u_,clearcoat_pars_fragment:d_,iridescence_pars_fragment:h_,opaque_fragment:f_,packing:p_,premultiplied_alpha_fragment:m_,project_vertex:g_,dithering_fragment:__,dithering_pars_fragment:v_,roughnessmap_fragment:x_,roughnessmap_pars_fragment:y_,shadowmap_pars_fragment:S_,shadowmap_pars_vertex:E_,shadowmap_vertex:M_,shadowmask_pars_fragment:b_,skinbase_vertex:T_,skinning_pars_vertex:w_,skinning_vertex:A_,skinnormal_vertex:C_,specularmap_fragment:R_,specularmap_pars_fragment:L_,tonemapping_fragment:P_,tonemapping_pars_fragment:D_,transmission_fragment:I_,transmission_pars_fragment:N_,uv_pars_fragment:O_,uv_pars_vertex:U_,uv_vertex:F_,worldpos_vertex:B_,background_vert:z_,background_frag:k_,backgroundCube_vert:H_,backgroundCube_frag:G_,cube_vert:V_,cube_frag:W_,depth_vert:X_,depth_frag:$_,distanceRGBA_vert:Y_,distanceRGBA_frag:q_,equirect_vert:j_,equirect_frag:K_,linedashed_vert:Z_,linedashed_frag:J_,meshbasic_vert:Q_,meshbasic_frag:ev,meshlambert_vert:tv,meshlambert_frag:nv,meshmatcap_vert:iv,meshmatcap_frag:sv,meshnormal_vert:rv,meshnormal_frag:av,meshphong_vert:ov,meshphong_frag:lv,meshphysical_vert:cv,meshphysical_frag:uv,meshtoon_vert:dv,meshtoon_frag:hv,points_vert:fv,points_frag:pv,shadow_vert:mv,shadow_frag:gv,sprite_vert:_v,sprite_frag:vv},re={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},In={basic:{uniforms:Xt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Xt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Te(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Xt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Xt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Xt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Te(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Xt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Xt([re.points,re.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Xt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Xt([re.common,re.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Xt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Xt([re.sprite,re.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Xt([re.common,re.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Xt([re.lights,re.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};In.physical={uniforms:Xt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const _a={r:0,b:0,g:0};function xv(s,e,t,n,i,r,a){const o=new Te(0);let l=r===!0?0:1,c,u,d=null,h=0,p=null;function _(m,f){let x=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?g(o,l):v&&v.isColor&&(g(v,1),x=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ka)?(u===void 0&&(u=new Sn(new Xr(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Ys(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Ye.getTransfer(v.colorSpace)!==rt,(d!==v||h!==v.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,p=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Sn(new Kl(2,2),new Ai({name:"BackgroundMaterial",uniforms:Ys(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(v.colorSpace)!==rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(_a,gh(s)),n.buffers.color.setClear(_a.r,_a.g,_a.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function yv(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function d(A,O,F,I,U){let H=!1;if(a){const X=g(I,F,O);c!==X&&(c=X,p(c.object)),H=f(A,I,F,U),H&&x(A,I,F,U)}else{const X=O.wireframe===!0;(c.geometry!==I.id||c.program!==F.id||c.wireframe!==X)&&(c.geometry=I.id,c.program=F.id,c.wireframe=X,H=!0)}U!==null&&t.update(U,s.ELEMENT_ARRAY_BUFFER),(H||u)&&(u=!1,C(A,O,F,I),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(A){return n.isWebGL2?s.bindVertexArray(A):r.bindVertexArrayOES(A)}function _(A){return n.isWebGL2?s.deleteVertexArray(A):r.deleteVertexArrayOES(A)}function g(A,O,F){const I=F.wireframe===!0;let U=o[A.id];U===void 0&&(U={},o[A.id]=U);let H=U[O.id];H===void 0&&(H={},U[O.id]=H);let X=H[I];return X===void 0&&(X=m(h()),H[I]=X),X}function m(A){const O=[],F=[],I=[];for(let U=0;U<i;U++)O[U]=0,F[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:F,attributeDivisors:I,object:A,attributes:{},index:null}}function f(A,O,F,I){const U=c.attributes,H=O.attributes;let X=0;const k=F.getAttributes();for(const V in k)if(k[V].location>=0){const J=U[V];let K=H[V];if(K===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(K=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(K=A.instanceColor)),J===void 0||J.attribute!==K||K&&J.data!==K.data)return!0;X++}return c.attributesNum!==X||c.index!==I}function x(A,O,F,I){const U={},H=O.attributes;let X=0;const k=F.getAttributes();for(const V in k)if(k[V].location>=0){let J=H[V];J===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(J=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(J=A.instanceColor));const K={};K.attribute=J,J&&J.data&&(K.data=J.data),U[V]=K,X++}c.attributes=U,c.attributesNum=X,c.index=I}function v(){const A=c.newAttributes;for(let O=0,F=A.length;O<F;O++)A[O]=0}function y(A){b(A,0)}function b(A,O){const F=c.newAttributes,I=c.enabledAttributes,U=c.attributeDivisors;F[A]=1,I[A]===0&&(s.enableVertexAttribArray(A),I[A]=1),U[A]!==O&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,O),U[A]=O)}function M(){const A=c.newAttributes,O=c.enabledAttributes;for(let F=0,I=O.length;F<I;F++)O[F]!==A[F]&&(s.disableVertexAttribArray(F),O[F]=0)}function T(A,O,F,I,U,H,X){X===!0?s.vertexAttribIPointer(A,O,F,U,H):s.vertexAttribPointer(A,O,F,I,U,H)}function C(A,O,F,I){if(n.isWebGL2===!1&&(A.isInstancedMesh||I.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const U=I.attributes,H=F.getAttributes(),X=O.defaultAttributeValues;for(const k in H){const V=H[k];if(V.location>=0){let z=U[k];if(z===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(z=A.instanceColor)),z!==void 0){const J=z.normalized,K=z.itemSize,ie=t.get(z);if(ie===void 0)continue;const ce=ie.buffer,ye=ie.type,we=ie.bytesPerElement,pe=n.isWebGL2===!0&&(ye===s.INT||ye===s.UNSIGNED_INT||z.gpuType===Zd);if(z.isInterleavedBufferAttribute){const De=z.data,$=De.stride,bt=z.offset;if(De.isInstancedInterleavedBuffer){for(let _e=0;_e<V.locationSize;_e++)b(V.location+_e,De.meshPerAttribute);A.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let _e=0;_e<V.locationSize;_e++)y(V.location+_e);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let _e=0;_e<V.locationSize;_e++)T(V.location+_e,K/V.locationSize,ye,J,$*we,(bt+K/V.locationSize*_e)*we,pe)}else{if(z.isInstancedBufferAttribute){for(let De=0;De<V.locationSize;De++)b(V.location+De,z.meshPerAttribute);A.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let De=0;De<V.locationSize;De++)y(V.location+De);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let De=0;De<V.locationSize;De++)T(V.location+De,K/V.locationSize,ye,J,K*we,K/V.locationSize*De*we,pe)}}else if(X!==void 0){const J=X[k];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(V.location,J);break;case 3:s.vertexAttrib3fv(V.location,J);break;case 4:s.vertexAttrib4fv(V.location,J);break;default:s.vertexAttrib1fv(V.location,J)}}}}M()}function S(){P();for(const A in o){const O=o[A];for(const F in O){const I=O[F];for(const U in I)_(I[U].object),delete I[U];delete O[F]}delete o[A]}}function E(A){if(o[A.id]===void 0)return;const O=o[A.id];for(const F in O){const I=O[F];for(const U in I)_(I[U].object),delete I[U];delete O[F]}delete o[A.id]}function N(A){for(const O in o){const F=o[O];if(F[A.id]===void 0)continue;const I=F[A.id];for(const U in I)_(I[U].object),delete I[U];delete F[A.id]}}function P(){D(),u=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:P,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:y,disableUnusedAttributes:M}}function Sv(s,e,t,n){const i=n.isWebGL2;let r;function a(u){r=u}function o(u,d){s.drawArrays(r,u,d),t.update(d,r,1)}function l(u,d,h){if(h===0)return;let p,_;if(i)p=s,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](r,u,d,h),t.update(d,r,h)}function c(u,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h;_++)this.render(u[_],d[_]);else{p.multiDrawArraysWEBGL(r,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=d[g];t.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Ev(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),h=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=a||e.has("OES_texture_float"),b=v&&y,M=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:M}}function Mv(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Hi,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||i;return i=h,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!i||_===null||_.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,v=x*4;let y=f.clippingState||null;l.value=y,y=u(_,h,v,p);for(let b=0;b!==v;++b)y[b]=t[b];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,y=p;v!==g;++v,y+=4)a.copy(d[v]).applyMatrix4(x,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function bv(s){let e=new WeakMap;function t(a,o){return o===pl?a.mapping=Hs:o===ml&&(a.mapping=Gs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===pl||o===ml)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Um(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Zl extends _h{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ps=4,Iu=[.125,.215,.35,.446,.526,.582],Xi=20,Io=new Zl,Nu=new Te;let No=null,Oo=0,Uo=0;const Gi=(1+Math.sqrt(5))/2,Cs=1/Gi,Ou=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Gi,Cs),new G(0,Gi,-Cs),new G(Cs,0,Gi),new G(-Cs,0,Gi),new G(Gi,Cs,0),new G(-Gi,Cs,0)];class Uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){No=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(No,Oo,Uo),e.scissorTest=!1,va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),No=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Dr,format:vn,colorSpace:St,depthBuffer:!1},i=Fu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tv(r)),this._blurMaterial=wv(r,e,t)}return i}_compileMaterial(e){const t=new Sn(this._lodPlanes[0],e);this._renderer.compile(t,Io)}_sceneToCubeUV(e,t,n,i){const o=new $t(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Nu),u.toneMapping=Mi,u.autoClear=!1;const p=new Yi({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),_=new Sn(new Xr,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Nu),g=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;va(i,x*v,f>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Hs||e.mapping===Gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Sn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;va(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Io)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Ou[(i-1)%Ou.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Sn(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Xi-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):Xi;m>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);const f=[];let x=0;for(let T=0;T<Xi;++T){const C=T/g,S=Math.exp(-C*C/2);f.push(S),T===0?x+=S:T<m&&(x+=2*S)}for(let T=0;T<f.length;T++)f[T]=f[T]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-n;const y=this._sizeLods[i],b=3*y*(i>v-Ps?i-v+Ps:0),M=4*(this._cubeSize-y);va(t,b,M,3*y,2*y),l.setRenderTarget(t),l.render(d,Io)}}function Tv(s){const e=[],t=[],n=[];let i=s;const r=s-Ps+1+Iu.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Ps?l=Iu[a-s+Ps-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,g=3,m=2,f=1,x=new Float32Array(g*_*p),v=new Float32Array(m*_*p),y=new Float32Array(f*_*p);for(let M=0;M<p;M++){const T=M%3*2/3-1,C=M>2?0:-1,S=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];x.set(S,g*_*M),v.set(h,m*_*M);const E=[M,M,M,M,M,M];y.set(E,f*_*M)}const b=new Tn;b.setAttribute("position",new Lt(x,g)),b.setAttribute("uv",new Lt(v,m)),b.setAttribute("faceIndex",new Lt(y,f)),e.push(b),i>Ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fu(s,e,t){const n=new rs(s,e,t);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function va(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function wv(s,e,t){const n=new Float32Array(Xi),i=new G(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Bu(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function zu(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Jl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Av(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===pl||l===ml,u=l===Hs||l===Gs;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Uu(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new Uu(s));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Cv(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Rv(s,e,t,n){const i={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}h.removeEventListener("dispose",a),delete i[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],s.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],s.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let v=0,y=x.length;v<y;v+=3){const b=x[v+0],M=x[v+1],T=x[v+2];h.push(b,M,M,T,T,b)}}else if(_!==void 0){const x=_.array;g=_.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const b=v+0,M=v+1,T=v+2;h.push(b,M,M,T,T,b)}}else return;const m=new(lh(h)?mh:ph)(h,1);m.version=g;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Lv(s,e,t,n){const i=n.isWebGL2;let r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function u(p,_){s.drawElements(r,_,o,p*l),t.update(_,r,1)}function d(p,_,g){if(g===0)return;let m,f;if(i)m=s,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,_,o,p*l,g),t.update(_,r,g)}function h(p,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(p[f]/l,_[f]);else{m.multiDrawElementsWEBGL(r,_,0,o,p,0,g);let f=0;for(let x=0;x<g;x++)f+=_[x];t.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function Pv(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Dv(s,e){return s[0]-e[0]}function Iv(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Nv(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new et,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(u);if(m===void 0||m.count!==g){let O=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),b===!0&&(S=3);let E=u.attributes.position.count*S,N=1;E>e.maxTextureSize&&(N=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const P=new Float32Array(E*N*4*g),D=new dh(P,E,N,g);D.type=ti,D.needsUpdate=!0;const A=S*4;for(let F=0;F<g;F++){const I=M[F],U=T[F],H=C[F],X=E*N*4*F;for(let k=0;k<I.count;k++){const V=k*A;v===!0&&(a.fromBufferAttribute(I,k),P[X+V+0]=a.x,P[X+V+1]=a.y,P[X+V+2]=a.z,P[X+V+3]=0),y===!0&&(a.fromBufferAttribute(U,k),P[X+V+4]=a.x,P[X+V+5]=a.y,P[X+V+6]=a.z,P[X+V+7]=0),b===!0&&(a.fromBufferAttribute(H,k),P[X+V+8]=a.x,P[X+V+9]=a.y,P[X+V+10]=a.z,P[X+V+11]=H.itemSize===4?a.w:1)}}m={count:g,texture:D,size:new Xe(E,N)},r.set(u,m),u.addEventListener("dispose",O)}let f=0;for(let v=0;v<h.length;v++)f+=h[v];const x=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",h),d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let y=0;y<_;y++)g[y]=[y,0];n[u.id]=g}for(let y=0;y<_;y++){const b=g[y];b[0]=y,b[1]=h[y]}g.sort(Iv);for(let y=0;y<8;y++)y<_&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Dv);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const b=o[y],M=b[0],T=b[1];M!==Number.MAX_SAFE_INTEGER&&T?(m&&u.getAttribute("morphTarget"+y)!==m[M]&&u.setAttribute("morphTarget"+y,m[M]),f&&u.getAttribute("morphNormal"+y)!==f[M]&&u.setAttribute("morphNormal"+y,f[M]),i[y]=T,x+=T):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),f&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const v=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Ov(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class yh extends It{constructor(e,t,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:Zi,u!==Zi&&u!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Zi&&(n=gi),n===void 0&&u===Ws&&(n=Ki),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Sh=new It,Eh=new yh(1,1);Eh.compareFunction=oh;const Mh=new dh,bh=new xm,Th=new vh,ku=[],Hu=[],Gu=new Float32Array(16),Vu=new Float32Array(9),Wu=new Float32Array(4);function sr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ku[i];if(r===void 0&&(r=new Float32Array(i),ku[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Et(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Mt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function eo(s,e){let t=Hu[e];t===void 0&&(t=new Int32Array(e),Hu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Uv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Fv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2fv(this.addr,e),Mt(t,e)}}function Bv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;s.uniform3fv(this.addr,e),Mt(t,e)}}function zv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4fv(this.addr,e),Mt(t,e)}}function kv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(Et(t,n))return;Wu.set(n),s.uniformMatrix2fv(this.addr,!1,Wu),Mt(t,n)}}function Hv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(Et(t,n))return;Vu.set(n),s.uniformMatrix3fv(this.addr,!1,Vu),Mt(t,n)}}function Gv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(Et(t,n))return;Gu.set(n),s.uniformMatrix4fv(this.addr,!1,Gu),Mt(t,n)}}function Vv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Wv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2iv(this.addr,e),Mt(t,e)}}function Xv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3iv(this.addr,e),Mt(t,e)}}function $v(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4iv(this.addr,e),Mt(t,e)}}function Yv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function qv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2uiv(this.addr,e),Mt(t,e)}}function jv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3uiv(this.addr,e),Mt(t,e)}}function Kv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4uiv(this.addr,e),Mt(t,e)}}function Zv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Eh:Sh;t.setTexture2D(e||r,i)}function Jv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||bh,i)}function Qv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Th,i)}function e0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Mh,i)}function t0(s){switch(s){case 5126:return Uv;case 35664:return Fv;case 35665:return Bv;case 35666:return zv;case 35674:return kv;case 35675:return Hv;case 35676:return Gv;case 5124:case 35670:return Vv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return $v;case 5125:return Yv;case 36294:return qv;case 36295:return jv;case 36296:return Kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Zv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return e0}}function n0(s,e){s.uniform1fv(this.addr,e)}function i0(s,e){const t=sr(e,this.size,2);s.uniform2fv(this.addr,t)}function s0(s,e){const t=sr(e,this.size,3);s.uniform3fv(this.addr,t)}function r0(s,e){const t=sr(e,this.size,4);s.uniform4fv(this.addr,t)}function a0(s,e){const t=sr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function o0(s,e){const t=sr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function l0(s,e){const t=sr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function c0(s,e){s.uniform1iv(this.addr,e)}function u0(s,e){s.uniform2iv(this.addr,e)}function d0(s,e){s.uniform3iv(this.addr,e)}function h0(s,e){s.uniform4iv(this.addr,e)}function f0(s,e){s.uniform1uiv(this.addr,e)}function p0(s,e){s.uniform2uiv(this.addr,e)}function m0(s,e){s.uniform3uiv(this.addr,e)}function g0(s,e){s.uniform4uiv(this.addr,e)}function _0(s,e,t){const n=this.cache,i=e.length,r=eo(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Sh,r[a])}function v0(s,e,t){const n=this.cache,i=e.length,r=eo(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||bh,r[a])}function x0(s,e,t){const n=this.cache,i=e.length,r=eo(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Th,r[a])}function y0(s,e,t){const n=this.cache,i=e.length,r=eo(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Mh,r[a])}function S0(s){switch(s){case 5126:return n0;case 35664:return i0;case 35665:return s0;case 35666:return r0;case 35674:return a0;case 35675:return o0;case 35676:return l0;case 5124:case 35670:return c0;case 35667:case 35671:return u0;case 35668:case 35672:return d0;case 35669:case 35673:return h0;case 5125:return f0;case 36294:return p0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return y0}}class E0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=t0(t.type)}}class M0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S0(t.type)}}class b0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Fo=/(\w+)(\])?(\[|\.)?/g;function Xu(s,e){s.seq.push(e),s.map[e.id]=e}function T0(s,e,t){const n=s.name,i=n.length;for(Fo.lastIndex=0;;){const r=Fo.exec(n),a=Fo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Xu(t,c===void 0?new E0(o,s,e):new M0(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new b0(o),Xu(t,d)),t=d}}}class Aa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);T0(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function $u(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const w0=37297;let A0=0;function C0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function R0(s){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(s);let n;switch(e===t?n="":e===Fa&&t===Ua?n="LinearDisplayP3ToLinearSRGB":e===Ua&&t===Fa&&(n="LinearSRGBToLinearDisplayP3"),s){case St:case Za:return[n,"LinearTransferOETF"];case at:case Yl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Yu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+C0(s.getShaderSource(e),a)}else return i}function L0(s,e){const t=R0(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function P0(s,e){let t;switch(e){case wp:t="Linear";break;case Ap:t="Reinhard";break;case Cp:t="OptimizedCineon";break;case Rp:t="ACESFilmic";break;case Pp:t="AgX";break;case Lp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function D0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ds).join(`
`)}function I0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ds).join(`
`)}function N0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function O0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ds(s){return s!==""}function qu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ju(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(s){return s.replace(U0,B0)}const F0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function B0(s,e){let t=Oe[e];if(t===void 0){const n=F0.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sl(t)}const z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ku(s){return s.replace(z0,k0)}function k0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Zu(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function H0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Yd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ep?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function G0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hs:case Gs:e="ENVMAP_TYPE_CUBE";break;case Ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function W0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case qd:e="ENVMAP_BLENDING_MULTIPLY";break;case bp:e="ENVMAP_BLENDING_MIX";break;case Tp:e="ENVMAP_BLENDING_ADD";break}return e}function X0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function $0(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=H0(t),c=G0(t),u=V0(t),d=W0(t),h=X0(t),p=t.isWebGL2?"":D0(t),_=I0(t),g=N0(r),m=i.createProgram();let f,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ds).join(`
`),f.length>0&&(f+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ds).join(`
`),x.length>0&&(x+=`
`)):(f=[Zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),x=[p,Zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Mi?P0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,L0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),a=Sl(a),a=qu(a,t),a=ju(a,t),o=Sl(o),o=qu(o,t),o=ju(o,t),a=Ku(a),o=Ku(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=v+f+a,b=v+x+o,M=$u(i,i.VERTEX_SHADER,y),T=$u(i,i.FRAGMENT_SHADER,b);i.attachShader(m,M),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function C(P){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(m).trim(),A=i.getShaderInfoLog(M).trim(),O=i.getShaderInfoLog(T).trim();let F=!0,I=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,M,T);else{const U=Yu(i,M,"vertex"),H=Yu(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+D+`
`+U+`
`+H)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(A===""||O==="")&&(I=!1);I&&(P.diagnostics={runnable:F,programLog:D,vertexShader:{log:A,prefix:f},fragmentShader:{log:O,prefix:x}})}i.deleteShader(M),i.deleteShader(T),S=new Aa(i,m),E=O0(i,m)}let S;this.getUniforms=function(){return S===void 0&&C(this),S};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(m,w0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=T,this}let Y0=0;class q0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new j0(e),t.set(e,n)),n}}class j0{constructor(e){this.id=Y0++,this.code=e,this.usedTimes=0}}function K0(s,e,t,n,i,r,a){const o=new hh,l=new q0,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,E,N,P,D){const A=P.fog,O=D.geometry,F=S.isMeshStandardMaterial?P.environment:null,I=(S.isMeshStandardMaterial?t:e).get(S.envMap||F),U=I&&I.mapping===Ka?I.image.height:null,H=_[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const X=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,k=X!==void 0?X.length:0;let V=0;O.morphAttributes.position!==void 0&&(V=1),O.morphAttributes.normal!==void 0&&(V=2),O.morphAttributes.color!==void 0&&(V=3);let z,J,K,ie;if(H){const Gt=In[H];z=Gt.vertexShader,J=Gt.fragmentShader}else z=S.vertexShader,J=S.fragmentShader,l.update(S),K=l.getVertexShaderID(S),ie=l.getFragmentShaderID(S);const ce=s.getRenderTarget(),ye=D.isInstancedMesh===!0,we=D.isBatchedMesh===!0,pe=!!S.map,De=!!S.matcap,$=!!I,bt=!!S.aoMap,_e=!!S.lightMap,Ae=!!S.bumpMap,de=!!S.normalMap,Ke=!!S.displacementMap,Re=!!S.emissiveMap,L=!!S.metalnessMap,w=!!S.roughnessMap,Y=S.anisotropy>0,Q=S.clearcoat>0,ee=S.iridescence>0,te=S.sheen>0,me=S.transmission>0,le=Y&&!!S.anisotropyMap,he=Q&&!!S.clearcoatMap,Ee=Q&&!!S.clearcoatNormalMap,Ue=Q&&!!S.clearcoatRoughnessMap,ne=ee&&!!S.iridescenceMap,Ze=ee&&!!S.iridescenceThicknessMap,Ge=te&&!!S.sheenColorMap,Le=te&&!!S.sheenRoughnessMap,ve=!!S.specularMap,fe=!!S.specularColorMap,Ne=!!S.specularIntensityMap,qe=me&&!!S.transmissionMap,ht=me&&!!S.thicknessMap,Be=!!S.gradientMap,se=!!S.alphaMap,B=S.alphaTest>0,ae=!!S.alphaHash,oe=!!S.extensions,Me=!!O.attributes.uv1,xe=!!O.attributes.uv2,tt=!!O.attributes.uv3;let nt=Mi;return S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(nt=s.toneMapping),{isWebGL2:u,shaderID:H,shaderType:S.type,shaderName:S.name,vertexShader:z,fragmentShader:J,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:ie,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:we,instancing:ye,instancingColor:ye&&D.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:St,map:pe,matcap:De,envMap:$,envMapMode:$&&I.mapping,envMapCubeUVHeight:U,aoMap:bt,lightMap:_e,bumpMap:Ae,normalMap:de,displacementMap:h&&Ke,emissiveMap:Re,normalMapObjectSpace:de&&S.normalMapType===Xp,normalMapTangentSpace:de&&S.normalMapType===ah,metalnessMap:L,roughnessMap:w,anisotropy:Y,anisotropyMap:le,clearcoat:Q,clearcoatMap:he,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ue,iridescence:ee,iridescenceMap:ne,iridescenceThicknessMap:Ze,sheen:te,sheenColorMap:Ge,sheenRoughnessMap:Le,specularMap:ve,specularColorMap:fe,specularIntensityMap:Ne,transmission:me,transmissionMap:qe,thicknessMap:ht,gradientMap:Be,opaque:S.transparent===!1&&S.blending===Os,alphaMap:se,alphaTest:B,alphaHash:ae,combine:S.combine,mapUv:pe&&g(S.map.channel),aoMapUv:bt&&g(S.aoMap.channel),lightMapUv:_e&&g(S.lightMap.channel),bumpMapUv:Ae&&g(S.bumpMap.channel),normalMapUv:de&&g(S.normalMap.channel),displacementMapUv:Ke&&g(S.displacementMap.channel),emissiveMapUv:Re&&g(S.emissiveMap.channel),metalnessMapUv:L&&g(S.metalnessMap.channel),roughnessMapUv:w&&g(S.roughnessMap.channel),anisotropyMapUv:le&&g(S.anisotropyMap.channel),clearcoatMapUv:he&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Le&&g(S.sheenRoughnessMap.channel),specularMapUv:ve&&g(S.specularMap.channel),specularColorMapUv:fe&&g(S.specularColorMap.channel),specularIntensityMapUv:Ne&&g(S.specularIntensityMap.channel),transmissionMapUv:qe&&g(S.transmissionMap.channel),thicknessMapUv:ht&&g(S.thicknessMap.channel),alphaMapUv:se&&g(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(de||Y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Me,vertexUv2s:xe,vertexUv3s:tt,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(pe||se),fog:!!A,useFog:S.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:V,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:pe&&S.map.isVideoTexture===!0&&Ye.getTransfer(S.map.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Nn,flipSided:S.side===jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:oe&&S.extensions.derivatives===!0,extensionFragDepth:oe&&S.extensions.fragDepth===!0,extensionDrawBuffers:oe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)E.push(N),E.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(x(E,S),v(E,S),E.push(s.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function x(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function v(S,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function y(S){const E=_[S.type];let N;if(E){const P=In[E];N=Dm.clone(P.uniforms)}else N=S.uniforms;return N}function b(S,E){let N;for(let P=0,D=c.length;P<D;P++){const A=c[P];if(A.cacheKey===E){N=A,++N.usedTimes;break}}return N===void 0&&(N=new $0(s,E,S,r),c.push(N)),N}function M(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),S.destroy()}}function T(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:b,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:C}}function Z0(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function J0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ju(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,h,p,_,g,m){let f=s[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},s[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=g,f.group=m),e++,f}function o(d,h,p,_,g,m){const f=a(d,h,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(d,h,p,_,g,m){const f=a(d,h,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||J0),n.length>1&&n.sort(h||Ju),i.length>1&&i.sort(h||Ju)}function u(){for(let d=e,h=s.length;d<h;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function Q0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Qu,s.set(n,[a])):i>=r.length?(a=new Qu,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function ex(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Te};break;case"SpotLight":t={position:new G,direction:new G,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new G,halfWidth:new G,halfHeight:new G};break}return s[e.id]=t,t}}}function tx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let nx=0;function ix(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function sx(s,e){const t=new ex,n=tx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new G);const r=new G,a=new He,o=new He;function l(u,d){let h=0,p=0,_=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let g=0,m=0,f=0,x=0,v=0,y=0,b=0,M=0,T=0,C=0,S=0;u.sort(ix);const E=d===!0?Math.PI:1;for(let P=0,D=u.length;P<D;P++){const A=u[P],O=A.color,F=A.intensity,I=A.distance,U=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=O.r*F*E,p+=O.g*F*E,_+=O.b*F*E;else if(A.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(A.sh.coefficients[H],F);S++}else if(A.isDirectionalLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity*E),A.castShadow){const X=A.shadow,k=n.get(A);k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,i.directionalShadow[g]=k,i.directionalShadowMap[g]=U,i.directionalShadowMatrix[g]=A.shadow.matrix,y++}i.directional[g]=H,g++}else if(A.isSpotLight){const H=t.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(O).multiplyScalar(F*E),H.distance=I,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,i.spot[f]=H;const X=A.shadow;if(A.map&&(i.spotLightMap[T]=A.map,T++,X.updateMatrices(A),A.castShadow&&C++),i.spotLightMatrix[f]=X.matrix,A.castShadow){const k=n.get(A);k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,i.spotShadow[f]=k,i.spotShadowMap[f]=U,M++}f++}else if(A.isRectAreaLight){const H=t.get(A);H.color.copy(O).multiplyScalar(F),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),i.rectArea[x]=H,x++}else if(A.isPointLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity*E),H.distance=A.distance,H.decay=A.decay,A.castShadow){const X=A.shadow,k=n.get(A);k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,k.shadowCameraNear=X.camera.near,k.shadowCameraFar=X.camera.far,i.pointShadow[m]=k,i.pointShadowMap[m]=U,i.pointShadowMatrix[m]=A.shadow.matrix,b++}i.point[m]=H,m++}else if(A.isHemisphereLight){const H=t.get(A);H.skyColor.copy(A.color).multiplyScalar(F*E),H.groundColor.copy(A.groundColor).multiplyScalar(F*E),i.hemi[v]=H,v++}}x>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=_;const N=i.hash;(N.directionalLength!==g||N.pointLength!==m||N.spotLength!==f||N.rectAreaLength!==x||N.hemiLength!==v||N.numDirectionalShadows!==y||N.numPointShadows!==b||N.numSpotShadows!==M||N.numSpotMaps!==T||N.numLightProbes!==S)&&(i.directional.length=g,i.spot.length=f,i.rectArea.length=x,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=S,N.directionalLength=g,N.pointLength=m,N.spotLength=f,N.rectAreaLength=x,N.hemiLength=v,N.numDirectionalShadows=y,N.numPointShadows=b,N.numSpotShadows=M,N.numSpotMaps=T,N.numLightProbes=S,i.version=nx++)}function c(u,d){let h=0,p=0,_=0,g=0,m=0;const f=d.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const y=u[x];if(y.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),h++}else if(y.isSpotLight){const b=i.spot[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),_++}else if(y.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),o.identity(),a.copy(y.matrixWorld),a.premultiply(f),o.extractRotation(a),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function ed(s,e){const t=new sx(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function rx(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new ed(s,e),t.set(r,[l])):a>=o.length?(l=new ed(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class ax extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ox extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ux(s,e,t){let n=new jl;const i=new Xe,r=new Xe,a=new et,o=new ax({depthPacking:Wp}),l=new ox,c={},u=t.maxTextureSize,d={[ii]:jt,[jt]:ii,[Nn]:Nn},h=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:lx,fragmentShader:cx}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Tn;_.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Sn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yd;let f=this.type;this.render=function(M,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const S=s.getRenderTarget(),E=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Ei),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const D=f!==Zn&&this.type===Zn,A=f===Zn&&this.type!==Zn;for(let O=0,F=M.length;O<F;O++){const I=M[O],U=I.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const H=U.getFrameExtents();if(i.multiply(H),r.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/H.x),i.x=r.x*H.x,U.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/H.y),i.y=r.y*H.y,U.mapSize.y=r.y)),U.map===null||D===!0||A===!0){const k=this.type!==Zn?{minFilter:Ct,magFilter:Ct}:{};U.map!==null&&U.map.dispose(),U.map=new rs(i.x,i.y,k),U.map.texture.name=I.name+".shadowMap",U.camera.updateProjectionMatrix()}s.setRenderTarget(U.map),s.clear();const X=U.getViewportCount();for(let k=0;k<X;k++){const V=U.getViewport(k);a.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),P.viewport(a),U.updateMatrices(I,k),n=U.getFrustum(),y(T,C,U.camera,I,this.type)}U.isPointLightShadow!==!0&&this.type===Zn&&x(U,C),U.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(S,E,N)};function x(M,T){const C=e.update(g);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new rs(i.x,i.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(T,null,C,h,g,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(T,null,C,p,g,null)}function v(M,T,C,S){let E=null;const N=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(N!==void 0)E=N;else if(E=C.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const P=E.uuid,D=T.uuid;let A=c[P];A===void 0&&(A={},c[P]=A);let O=A[D];O===void 0&&(O=E.clone(),A[D]=O,T.addEventListener("dispose",b)),E=O}if(E.visible=T.visible,E.wireframe=T.wireframe,S===Zn?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:d[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const P=s.properties.get(E);P.light=C}return E}function y(M,T,C,S,E){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===Zn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const D=e.update(M),A=M.material;if(Array.isArray(A)){const O=D.groups;for(let F=0,I=O.length;F<I;F++){const U=O[F],H=A[U.materialIndex];if(H&&H.visible){const X=v(M,H,S,E);M.onBeforeShadow(s,M,T,C,D,X,U),s.renderBufferDirect(C,null,D,X,M,U),M.onAfterShadow(s,M,T,C,D,X,U)}}}else if(A.visible){const O=v(M,A,S,E);M.onBeforeShadow(s,M,T,C,D,O,null),s.renderBufferDirect(C,null,D,O,M,null),M.onAfterShadow(s,M,T,C,D,O,null)}}const P=M.children;for(let D=0,A=P.length;D<A;D++)y(P[D],T,C,S,E)}function b(M){M.target.removeEventListener("dispose",b);for(const C in c){const S=c[C],E=M.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function dx(s,e,t){const n=t.isWebGL2;function i(){let B=!1;const ae=new et;let oe=null;const Me=new et(0,0,0,0);return{setMask:function(xe){oe!==xe&&!B&&(s.colorMask(xe,xe,xe,xe),oe=xe)},setLocked:function(xe){B=xe},setClear:function(xe,tt,nt,Tt,Gt){Gt===!0&&(xe*=Tt,tt*=Tt,nt*=Tt),ae.set(xe,tt,nt,Tt),Me.equals(ae)===!1&&(s.clearColor(xe,tt,nt,Tt),Me.copy(ae))},reset:function(){B=!1,oe=null,Me.set(-1,0,0,0)}}}function r(){let B=!1,ae=null,oe=null,Me=null;return{setTest:function(xe){xe?we(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(xe){ae!==xe&&!B&&(s.depthMask(xe),ae=xe)},setFunc:function(xe){if(oe!==xe){switch(xe){case _p:s.depthFunc(s.NEVER);break;case vp:s.depthFunc(s.ALWAYS);break;case xp:s.depthFunc(s.LESS);break;case Ia:s.depthFunc(s.LEQUAL);break;case yp:s.depthFunc(s.EQUAL);break;case Sp:s.depthFunc(s.GEQUAL);break;case Ep:s.depthFunc(s.GREATER);break;case Mp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=xe}},setLocked:function(xe){B=xe},setClear:function(xe){Me!==xe&&(s.clearDepth(xe),Me=xe)},reset:function(){B=!1,ae=null,oe=null,Me=null}}}function a(){let B=!1,ae=null,oe=null,Me=null,xe=null,tt=null,nt=null,Tt=null,Gt=null;return{setTest:function(it){B||(it?we(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(it){ae!==it&&!B&&(s.stencilMask(it),ae=it)},setFunc:function(it,Vt,Pn){(oe!==it||Me!==Vt||xe!==Pn)&&(s.stencilFunc(it,Vt,Pn),oe=it,Me=Vt,xe=Pn)},setOp:function(it,Vt,Pn){(tt!==it||nt!==Vt||Tt!==Pn)&&(s.stencilOp(it,Vt,Pn),tt=it,nt=Vt,Tt=Pn)},setLocked:function(it){B=it},setClear:function(it){Gt!==it&&(s.clearStencil(it),Gt=it)},reset:function(){B=!1,ae=null,oe=null,Me=null,xe=null,tt=null,nt=null,Tt=null,Gt=null}}}const o=new i,l=new r,c=new a,u=new WeakMap,d=new WeakMap;let h={},p={},_=new WeakMap,g=[],m=null,f=!1,x=null,v=null,y=null,b=null,M=null,T=null,C=null,S=new Te(0,0,0),E=0,N=!1,P=null,D=null,A=null,O=null,F=null;const I=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,H=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(X)[1]),U=H>=1):X.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),U=H>=2);let k=null,V={};const z=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),K=new et().fromArray(z),ie=new et().fromArray(J);function ce(B,ae,oe,Me){const xe=new Uint8Array(4),tt=s.createTexture();s.bindTexture(B,tt),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let nt=0;nt<oe;nt++)n&&(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)?s.texImage3D(ae,0,s.RGBA,1,1,Me,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(ae+nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return tt}const ye={};ye[s.TEXTURE_2D]=ce(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=ce(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ye[s.TEXTURE_2D_ARRAY]=ce(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=ce(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),we(s.DEPTH_TEST),l.setFunc(Ia),Re(!1),L(Nc),we(s.CULL_FACE),de(Ei);function we(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function pe(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function De(B,ae){return p[B]!==ae?(s.bindFramebuffer(B,ae),p[B]=ae,n&&(B===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=ae),B===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=ae)),!0):!1}function $(B,ae){let oe=g,Me=!1;if(B)if(oe=_.get(ae),oe===void 0&&(oe=[],_.set(ae,oe)),B.isWebGLMultipleRenderTargets){const xe=B.texture;if(oe.length!==xe.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let tt=0,nt=xe.length;tt<nt;tt++)oe[tt]=s.COLOR_ATTACHMENT0+tt;oe.length=xe.length,Me=!0}}else oe[0]!==s.COLOR_ATTACHMENT0&&(oe[0]=s.COLOR_ATTACHMENT0,Me=!0);else oe[0]!==s.BACK&&(oe[0]=s.BACK,Me=!0);Me&&(t.isWebGL2?s.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function bt(B){return m!==B?(s.useProgram(B),m=B,!0):!1}const _e={[Wi]:s.FUNC_ADD,[np]:s.FUNC_SUBTRACT,[ip]:s.FUNC_REVERSE_SUBTRACT};if(n)_e[Fc]=s.MIN,_e[Bc]=s.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(_e[Fc]=B.MIN_EXT,_e[Bc]=B.MAX_EXT)}const Ae={[sp]:s.ZERO,[rp]:s.ONE,[ap]:s.SRC_COLOR,[hl]:s.SRC_ALPHA,[hp]:s.SRC_ALPHA_SATURATE,[up]:s.DST_COLOR,[lp]:s.DST_ALPHA,[op]:s.ONE_MINUS_SRC_COLOR,[fl]:s.ONE_MINUS_SRC_ALPHA,[dp]:s.ONE_MINUS_DST_COLOR,[cp]:s.ONE_MINUS_DST_ALPHA,[fp]:s.CONSTANT_COLOR,[pp]:s.ONE_MINUS_CONSTANT_COLOR,[mp]:s.CONSTANT_ALPHA,[gp]:s.ONE_MINUS_CONSTANT_ALPHA};function de(B,ae,oe,Me,xe,tt,nt,Tt,Gt,it){if(B===Ei){f===!0&&(pe(s.BLEND),f=!1);return}if(f===!1&&(we(s.BLEND),f=!0),B!==tp){if(B!==x||it!==N){if((v!==Wi||M!==Wi)&&(s.blendEquation(s.FUNC_ADD),v=Wi,M=Wi),it)switch(B){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dl:s.blendFunc(s.ONE,s.ONE);break;case Oc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Uc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Oc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Uc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,b=null,T=null,C=null,S.set(0,0,0),E=0,x=B,N=it}return}xe=xe||ae,tt=tt||oe,nt=nt||Me,(ae!==v||xe!==M)&&(s.blendEquationSeparate(_e[ae],_e[xe]),v=ae,M=xe),(oe!==y||Me!==b||tt!==T||nt!==C)&&(s.blendFuncSeparate(Ae[oe],Ae[Me],Ae[tt],Ae[nt]),y=oe,b=Me,T=tt,C=nt),(Tt.equals(S)===!1||Gt!==E)&&(s.blendColor(Tt.r,Tt.g,Tt.b,Gt),S.copy(Tt),E=Gt),x=B,N=!1}function Ke(B,ae){B.side===Nn?pe(s.CULL_FACE):we(s.CULL_FACE);let oe=B.side===jt;ae&&(oe=!oe),Re(oe),B.blending===Os&&B.transparent===!1?de(Ei):de(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),o.setMask(B.colorWrite);const Me=B.stencilWrite;c.setTest(Me),Me&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Y(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?we(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Re(B){P!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),P=B)}function L(B){B!==Jf?(we(s.CULL_FACE),B!==D&&(B===Nc?s.cullFace(s.BACK):B===Qf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),D=B}function w(B){B!==A&&(U&&s.lineWidth(B),A=B)}function Y(B,ae,oe){B?(we(s.POLYGON_OFFSET_FILL),(O!==ae||F!==oe)&&(s.polygonOffset(ae,oe),O=ae,F=oe)):pe(s.POLYGON_OFFSET_FILL)}function Q(B){B?we(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function ee(B){B===void 0&&(B=s.TEXTURE0+I-1),k!==B&&(s.activeTexture(B),k=B)}function te(B,ae,oe){oe===void 0&&(k===null?oe=s.TEXTURE0+I-1:oe=k);let Me=V[oe];Me===void 0&&(Me={type:void 0,texture:void 0},V[oe]=Me),(Me.type!==B||Me.texture!==ae)&&(k!==oe&&(s.activeTexture(oe),k=oe),s.bindTexture(B,ae||ye[B]),Me.type=B,Me.texture=ae)}function me(){const B=V[k];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function le(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ze(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ge(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(B){K.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),K.copy(B))}function qe(B){ie.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),ie.copy(B))}function ht(B,ae){let oe=d.get(ae);oe===void 0&&(oe=new WeakMap,d.set(ae,oe));let Me=oe.get(B);Me===void 0&&(Me=s.getUniformBlockIndex(ae,B.name),oe.set(B,Me))}function Be(B,ae){const Me=d.get(ae).get(B);u.get(ae)!==Me&&(s.uniformBlockBinding(ae,Me,B.__bindingPointIndex),u.set(ae,Me))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},k=null,V={},p={},_=new WeakMap,g=[],m=null,f=!1,x=null,v=null,y=null,b=null,M=null,T=null,C=null,S=new Te(0,0,0),E=0,N=!1,P=null,D=null,A=null,O=null,F=null,K.set(0,0,s.canvas.width,s.canvas.height),ie.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:we,disable:pe,bindFramebuffer:De,drawBuffers:$,useProgram:bt,setBlending:de,setMaterial:Ke,setFlipSided:Re,setCullFace:L,setLineWidth:w,setPolygonOffset:Y,setScissorTest:Q,activeTexture:ee,bindTexture:te,unbindTexture:me,compressedTexImage2D:le,compressedTexImage3D:he,texImage2D:ve,texImage3D:fe,updateUBOMapping:ht,uniformBlockBinding:Be,texStorage2D:Ge,texStorage3D:Le,texSubImage2D:Ee,texSubImage3D:Ue,compressedTexSubImage2D:ne,compressedTexSubImage3D:Ze,scissor:Ne,viewport:qe,reset:se}}function hx(s,e,t,n,i,r,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,w){return p?new OffscreenCanvas(L,w):Nr("canvas")}function g(L,w,Y,Q){let ee=1;if((L.width>Q||L.height>Q)&&(ee=Q/Math.max(L.width,L.height)),ee<1||w===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const te=w?za:Math.floor,me=te(ee*L.width),le=te(ee*L.height);d===void 0&&(d=_(me,le));const he=Y?_(me,le):d;return he.width=me,he.height=le,he.getContext("2d").drawImage(L,0,0,me,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+me+"x"+le+")."),he}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function m(L){return yl(L.width)&&yl(L.height)}function f(L){return o?!1:L.wrapS!==_n||L.wrapT!==_n||L.minFilter!==Ct&&L.minFilter!==qt}function x(L,w){return L.generateMipmaps&&w&&L.minFilter!==Ct&&L.minFilter!==qt}function v(L){s.generateMipmap(L)}function y(L,w,Y,Q,ee=!1){if(o===!1)return w;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let te=w;if(w===s.RED&&(Y===s.FLOAT&&(te=s.R32F),Y===s.HALF_FLOAT&&(te=s.R16F),Y===s.UNSIGNED_BYTE&&(te=s.R8)),w===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(te=s.R8UI),Y===s.UNSIGNED_SHORT&&(te=s.R16UI),Y===s.UNSIGNED_INT&&(te=s.R32UI),Y===s.BYTE&&(te=s.R8I),Y===s.SHORT&&(te=s.R16I),Y===s.INT&&(te=s.R32I)),w===s.RG&&(Y===s.FLOAT&&(te=s.RG32F),Y===s.HALF_FLOAT&&(te=s.RG16F),Y===s.UNSIGNED_BYTE&&(te=s.RG8)),w===s.RGBA){const me=ee?Oa:Ye.getTransfer(Q);Y===s.FLOAT&&(te=s.RGBA32F),Y===s.HALF_FLOAT&&(te=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(te=me===rt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function b(L,w,Y){return x(L,Y)===!0||L.isFramebufferTexture&&L.minFilter!==Ct&&L.minFilter!==qt?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function M(L){return L===Ct||L===gl||L===wa?s.NEAREST:s.LINEAR}function T(L){const w=L.target;w.removeEventListener("dispose",T),S(w),w.isVideoTexture&&u.delete(w)}function C(L){const w=L.target;w.removeEventListener("dispose",C),N(w)}function S(L){const w=n.get(L);if(w.__webglInit===void 0)return;const Y=L.source,Q=h.get(Y);if(Q){const ee=Q[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(L),Object.keys(Q).length===0&&h.delete(Y)}n.remove(L)}function E(L){const w=n.get(L);s.deleteTexture(w.__webglTexture);const Y=L.source,Q=h.get(Y);delete Q[w.__cacheKey],a.memory.textures--}function N(L){const w=L.texture,Y=n.get(L),Q=n.get(w);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(Y.__webglFramebuffer[ee]))for(let te=0;te<Y.__webglFramebuffer[ee].length;te++)s.deleteFramebuffer(Y.__webglFramebuffer[ee][te]);else s.deleteFramebuffer(Y.__webglFramebuffer[ee]);Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer[ee])}else{if(Array.isArray(Y.__webglFramebuffer))for(let ee=0;ee<Y.__webglFramebuffer.length;ee++)s.deleteFramebuffer(Y.__webglFramebuffer[ee]);else s.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ee=0;ee<Y.__webglColorRenderbuffer.length;ee++)Y.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(Y.__webglColorRenderbuffer[ee]);Y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ee=0,te=w.length;ee<te;ee++){const me=n.get(w[ee]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(w[ee])}n.remove(w),n.remove(L)}let P=0;function D(){P=0}function A(){const L=P;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),P+=1,L}function O(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function F(L,w){const Y=n.get(L);if(L.isVideoTexture&&Ke(L),L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){const Q=L.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(Y,L,w);return}}t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+w)}function I(L,w){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){K(Y,L,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+w)}function U(L,w){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){K(Y,L,w);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+w)}function H(L,w){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){ie(Y,L,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+w)}const X={[Vs]:s.REPEAT,[_n]:s.CLAMP_TO_EDGE,[Na]:s.MIRRORED_REPEAT},k={[Ct]:s.NEAREST,[gl]:s.NEAREST_MIPMAP_NEAREST,[wa]:s.NEAREST_MIPMAP_LINEAR,[qt]:s.LINEAR,[Kd]:s.LINEAR_MIPMAP_NEAREST,[ss]:s.LINEAR_MIPMAP_LINEAR},V={[$p]:s.NEVER,[Jp]:s.ALWAYS,[Yp]:s.LESS,[oh]:s.LEQUAL,[qp]:s.EQUAL,[Zp]:s.GEQUAL,[jp]:s.GREATER,[Kp]:s.NOTEQUAL};function z(L,w,Y){if(Y?(s.texParameteri(L,s.TEXTURE_WRAP_S,X[w.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,X[w.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,X[w.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,k[w.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,k[w.minFilter])):(s.texParameteri(L,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(L,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==_n||w.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,s.TEXTURE_MAG_FILTER,M(w.magFilter)),s.texParameteri(L,s.TEXTURE_MIN_FILTER,M(w.minFilter)),w.minFilter!==Ct&&w.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,V[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ct||w.minFilter!==wa&&w.minFilter!==ss||w.type===ti&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Dr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function J(L,w){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",T));const Q=w.source;let ee=h.get(Q);ee===void 0&&(ee={},h.set(Q,ee));const te=O(w);if(te!==L.__cacheKey){ee[te]===void 0&&(ee[te]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ee[te].usedTimes++;const me=ee[L.__cacheKey];me!==void 0&&(ee[L.__cacheKey].usedTimes--,me.usedTimes===0&&E(w)),L.__cacheKey=te,L.__webglTexture=ee[te].texture}return Y}function K(L,w,Y){let Q=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=s.TEXTURE_3D);const ee=J(L,w),te=w.source;t.bindTexture(Q,L.__webglTexture,s.TEXTURE0+Y);const me=n.get(te);if(te.version!==me.__version||ee===!0){t.activeTexture(s.TEXTURE0+Y);const le=Ye.getPrimaries(Ye.workingColorSpace),he=w.colorSpace===xn?null:Ye.getPrimaries(w.colorSpace),Ee=w.colorSpace===xn||le===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ue=f(w)&&m(w.image)===!1;let ne=g(w.image,Ue,!1,i.maxTextureSize);ne=Re(w,ne);const Ze=m(ne)||o,Ge=r.convert(w.format,w.colorSpace);let Le=r.convert(w.type),ve=y(w.internalFormat,Ge,Le,w.colorSpace,w.isVideoTexture);z(Q,w,Ze);let fe;const Ne=w.mipmaps,qe=o&&w.isVideoTexture!==!0&&ve!==ih,ht=me.__version===void 0||ee===!0,Be=b(w,ne,Ze);if(w.isDepthTexture)ve=s.DEPTH_COMPONENT,o?w.type===ti?ve=s.DEPTH_COMPONENT32F:w.type===gi?ve=s.DEPTH_COMPONENT24:w.type===Ki?ve=s.DEPTH24_STENCIL8:ve=s.DEPTH_COMPONENT16:w.type===ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Zi&&ve===s.DEPTH_COMPONENT&&w.type!==$l&&w.type!==gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=gi,Le=r.convert(w.type)),w.format===Ws&&ve===s.DEPTH_COMPONENT&&(ve=s.DEPTH_STENCIL,w.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ki,Le=r.convert(w.type))),ht&&(qe?t.texStorage2D(s.TEXTURE_2D,1,ve,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,ve,ne.width,ne.height,0,Ge,Le,null));else if(w.isDataTexture)if(Ne.length>0&&Ze){qe&&ht&&t.texStorage2D(s.TEXTURE_2D,Be,ve,Ne[0].width,Ne[0].height);for(let se=0,B=Ne.length;se<B;se++)fe=Ne[se],qe?t.texSubImage2D(s.TEXTURE_2D,se,0,0,fe.width,fe.height,Ge,Le,fe.data):t.texImage2D(s.TEXTURE_2D,se,ve,fe.width,fe.height,0,Ge,Le,fe.data);w.generateMipmaps=!1}else qe?(ht&&t.texStorage2D(s.TEXTURE_2D,Be,ve,ne.width,ne.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne.width,ne.height,Ge,Le,ne.data)):t.texImage2D(s.TEXTURE_2D,0,ve,ne.width,ne.height,0,Ge,Le,ne.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){qe&&ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,ve,Ne[0].width,Ne[0].height,ne.depth);for(let se=0,B=Ne.length;se<B;se++)fe=Ne[se],w.format!==vn?Ge!==null?qe?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,fe.width,fe.height,ne.depth,Ge,fe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,ve,fe.width,fe.height,ne.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,fe.width,fe.height,ne.depth,Ge,Le,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,ve,fe.width,fe.height,ne.depth,0,Ge,Le,fe.data)}else{qe&&ht&&t.texStorage2D(s.TEXTURE_2D,Be,ve,Ne[0].width,Ne[0].height);for(let se=0,B=Ne.length;se<B;se++)fe=Ne[se],w.format!==vn?Ge!==null?qe?t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,fe.width,fe.height,Ge,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,se,ve,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(s.TEXTURE_2D,se,0,0,fe.width,fe.height,Ge,Le,fe.data):t.texImage2D(s.TEXTURE_2D,se,ve,fe.width,fe.height,0,Ge,Le,fe.data)}else if(w.isDataArrayTexture)qe?(ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,ve,ne.width,ne.height,ne.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Ge,Le,ne.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ve,ne.width,ne.height,ne.depth,0,Ge,Le,ne.data);else if(w.isData3DTexture)qe?(ht&&t.texStorage3D(s.TEXTURE_3D,Be,ve,ne.width,ne.height,ne.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Ge,Le,ne.data)):t.texImage3D(s.TEXTURE_3D,0,ve,ne.width,ne.height,ne.depth,0,Ge,Le,ne.data);else if(w.isFramebufferTexture){if(ht)if(qe)t.texStorage2D(s.TEXTURE_2D,Be,ve,ne.width,ne.height);else{let se=ne.width,B=ne.height;for(let ae=0;ae<Be;ae++)t.texImage2D(s.TEXTURE_2D,ae,ve,se,B,0,Ge,Le,null),se>>=1,B>>=1}}else if(Ne.length>0&&Ze){qe&&ht&&t.texStorage2D(s.TEXTURE_2D,Be,ve,Ne[0].width,Ne[0].height);for(let se=0,B=Ne.length;se<B;se++)fe=Ne[se],qe?t.texSubImage2D(s.TEXTURE_2D,se,0,0,Ge,Le,fe):t.texImage2D(s.TEXTURE_2D,se,ve,Ge,Le,fe);w.generateMipmaps=!1}else qe?(ht&&t.texStorage2D(s.TEXTURE_2D,Be,ve,ne.width,ne.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ge,Le,ne)):t.texImage2D(s.TEXTURE_2D,0,ve,Ge,Le,ne);x(w,Ze)&&v(Q),me.__version=te.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ie(L,w,Y){if(w.image.length!==6)return;const Q=J(L,w),ee=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Y);const te=n.get(ee);if(ee.version!==te.__version||Q===!0){t.activeTexture(s.TEXTURE0+Y);const me=Ye.getPrimaries(Ye.workingColorSpace),le=w.colorSpace===xn?null:Ye.getPrimaries(w.colorSpace),he=w.colorSpace===xn||me===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ee=w.isCompressedTexture||w.image[0].isCompressedTexture,Ue=w.image[0]&&w.image[0].isDataTexture,ne=[];for(let se=0;se<6;se++)!Ee&&!Ue?ne[se]=g(w.image[se],!1,!0,i.maxCubemapSize):ne[se]=Ue?w.image[se].image:w.image[se],ne[se]=Re(w,ne[se]);const Ze=ne[0],Ge=m(Ze)||o,Le=r.convert(w.format,w.colorSpace),ve=r.convert(w.type),fe=y(w.internalFormat,Le,ve,w.colorSpace),Ne=o&&w.isVideoTexture!==!0,qe=te.__version===void 0||Q===!0;let ht=b(w,Ze,Ge);z(s.TEXTURE_CUBE_MAP,w,Ge);let Be;if(Ee){Ne&&qe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ht,fe,Ze.width,Ze.height);for(let se=0;se<6;se++){Be=ne[se].mipmaps;for(let B=0;B<Be.length;B++){const ae=Be[B];w.format!==vn?Le!==null?Ne?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,B,0,0,ae.width,ae.height,Le,ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,B,fe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,B,0,0,ae.width,ae.height,Le,ve,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,B,fe,ae.width,ae.height,0,Le,ve,ae.data)}}}else{Be=w.mipmaps,Ne&&qe&&(Be.length>0&&ht++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ht,fe,ne[0].width,ne[0].height));for(let se=0;se<6;se++)if(Ue){Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ne[se].width,ne[se].height,Le,ve,ne[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,fe,ne[se].width,ne[se].height,0,Le,ve,ne[se].data);for(let B=0;B<Be.length;B++){const oe=Be[B].image[se].image;Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,B+1,0,0,oe.width,oe.height,Le,ve,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,B+1,fe,oe.width,oe.height,0,Le,ve,oe.data)}}else{Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Le,ve,ne[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,fe,Le,ve,ne[se]);for(let B=0;B<Be.length;B++){const ae=Be[B];Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,B+1,0,0,Le,ve,ae.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,B+1,fe,Le,ve,ae.image[se])}}}x(w,Ge)&&v(s.TEXTURE_CUBE_MAP),te.__version=ee.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ce(L,w,Y,Q,ee,te){const me=r.convert(Y.format,Y.colorSpace),le=r.convert(Y.type),he=y(Y.internalFormat,me,le,Y.colorSpace);if(!n.get(w).__hasExternalTextures){const Ue=Math.max(1,w.width>>te),ne=Math.max(1,w.height>>te);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,te,he,Ue,ne,w.depth,0,me,le,null):t.texImage2D(ee,te,he,Ue,ne,0,me,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),de(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,ee,n.get(Y).__webglTexture,0,Ae(w)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,ee,n.get(Y).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(L,w,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,L),w.depthBuffer&&!w.stencilBuffer){let Q=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Y||de(w)){const ee=w.depthTexture;ee&&ee.isDepthTexture&&(ee.type===ti?Q=s.DEPTH_COMPONENT32F:ee.type===gi&&(Q=s.DEPTH_COMPONENT24));const te=Ae(w);de(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,Q,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,te,Q,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,Q,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,L)}else if(w.depthBuffer&&w.stencilBuffer){const Q=Ae(w);Y&&de(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,w.width,w.height):de(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,L)}else{const Q=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0;ee<Q.length;ee++){const te=Q[ee],me=r.convert(te.format,te.colorSpace),le=r.convert(te.type),he=y(te.internalFormat,me,le,te.colorSpace),Ee=Ae(w);Y&&de(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,he,w.width,w.height):de(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,he,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,he,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F(w.depthTexture,0);const Q=n.get(w.depthTexture).__webglTexture,ee=Ae(w);if(w.depthTexture.format===Zi)de(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(w.depthTexture.format===Ws)de(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function pe(L){const w=n.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");we(w.__webglFramebuffer,L)}else if(Y){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]=s.createRenderbuffer(),ye(w.__webglDepthbuffer[Q],L,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),ye(w.__webglDepthbuffer,L,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(L,w,Y){const Q=n.get(L);w!==void 0&&ce(Q.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&pe(L)}function $(L){const w=L.texture,Y=n.get(L),Q=n.get(w);L.addEventListener("dispose",C),L.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=w.version,a.memory.textures++);const ee=L.isWebGLCubeRenderTarget===!0,te=L.isWebGLMultipleRenderTargets===!0,me=m(L)||o;if(ee){Y.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[le]=[];for(let he=0;he<w.mipmaps.length;he++)Y.__webglFramebuffer[le][he]=s.createFramebuffer()}else Y.__webglFramebuffer[le]=s.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let le=0;le<w.mipmaps.length;le++)Y.__webglFramebuffer[le]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(te)if(i.drawBuffers){const le=L.texture;for(let he=0,Ee=le.length;he<Ee;he++){const Ue=n.get(le[he]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&de(L)===!1){const le=te?w:[w];Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let he=0;he<le.length;he++){const Ee=le[he];Y.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[he]);const Ue=r.convert(Ee.format,Ee.colorSpace),ne=r.convert(Ee.type),Ze=y(Ee.internalFormat,Ue,ne,Ee.colorSpace,L.isXRRenderTarget===!0),Ge=Ae(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,Ze,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,Y.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(Y.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),z(s.TEXTURE_CUBE_MAP,w,me);for(let le=0;le<6;le++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let he=0;he<w.mipmaps.length;he++)ce(Y.__webglFramebuffer[le][he],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,he);else ce(Y.__webglFramebuffer[le],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);x(w,me)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const le=L.texture;for(let he=0,Ee=le.length;he<Ee;he++){const Ue=le[he],ne=n.get(Ue);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture),z(s.TEXTURE_2D,Ue,me),ce(Y.__webglFramebuffer,L,Ue,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),x(Ue,me)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?le=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,Q.__webglTexture),z(le,w,me),o&&w.mipmaps&&w.mipmaps.length>0)for(let he=0;he<w.mipmaps.length;he++)ce(Y.__webglFramebuffer[he],L,w,s.COLOR_ATTACHMENT0,le,he);else ce(Y.__webglFramebuffer,L,w,s.COLOR_ATTACHMENT0,le,0);x(w,me)&&v(le),t.unbindTexture()}L.depthBuffer&&pe(L)}function bt(L){const w=m(L)||o,Y=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let Q=0,ee=Y.length;Q<ee;Q++){const te=Y[Q];if(x(te,w)){const me=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,le=n.get(te).__webglTexture;t.bindTexture(me,le),v(me),t.unbindTexture()}}}function _e(L){if(o&&L.samples>0&&de(L)===!1){const w=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],Y=L.width,Q=L.height;let ee=s.COLOR_BUFFER_BIT;const te=[],me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=n.get(L),he=L.isWebGLMultipleRenderTargets===!0;if(he)for(let Ee=0;Ee<w.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ee=0;Ee<w.length;Ee++){te.push(s.COLOR_ATTACHMENT0+Ee),L.depthBuffer&&te.push(me);const Ue=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Ue===!1&&(L.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),he&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]),Ue===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[me]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[me])),he){const ne=n.get(w[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ne,0)}s.blitFramebuffer(0,0,Y,Q,0,0,Y,Q,ee,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let Ee=0;Ee<w.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]);const Ue=n.get(w[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,Ue,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ae(L){return Math.min(i.maxSamples,L.samples)}function de(L){const w=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ke(L){const w=a.render.frame;u.get(L)!==w&&(u.set(L,w),L.update())}function Re(L,w){const Y=L.colorSpace,Q=L.format,ee=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===xl||Y!==St&&Y!==xn&&(Ye.getTransfer(Y)===rt?o===!1?e.has("EXT_sRGB")===!0&&Q===vn?(L.format=xl,L.minFilter=qt,L.generateMipmaps=!1):w=ch.sRGBToLinear(w):(Q!==vn||ee!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),w}this.allocateTextureUnit=A,this.resetTextureUnits=D,this.setTexture2D=F,this.setTexture2DArray=I,this.setTexture3D=U,this.setTextureCube=H,this.rebindTextures=De,this.setupRenderTarget=$,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=de}function fx(s,e,t){const n=t.isWebGL2;function i(r,a=xn){let o;const l=Ye.getTransfer(a);if(r===bi)return s.UNSIGNED_BYTE;if(r===Jd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Qd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Ip)return s.BYTE;if(r===Np)return s.SHORT;if(r===$l)return s.UNSIGNED_SHORT;if(r===Zd)return s.INT;if(r===gi)return s.UNSIGNED_INT;if(r===ti)return s.FLOAT;if(r===Dr)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Op)return s.ALPHA;if(r===vn)return s.RGBA;if(r===Up)return s.LUMINANCE;if(r===Fp)return s.LUMINANCE_ALPHA;if(r===Zi)return s.DEPTH_COMPONENT;if(r===Ws)return s.DEPTH_STENCIL;if(r===xl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Bp)return s.RED;if(r===eh)return s.RED_INTEGER;if(r===zp)return s.RG;if(r===th)return s.RG_INTEGER;if(r===nh)return s.RGBA_INTEGER;if(r===co||r===uo||r===ho||r===fo)if(l===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===co)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===uo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===co)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===uo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ho)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kc||r===Hc||r===Gc||r===Vc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===kc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ih)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Wc||r===Xc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Wc)return l===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Xc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===$c||r===Yc||r===qc||r===jc||r===Kc||r===Zc||r===Jc||r===Qc||r===eu||r===tu||r===nu||r===iu||r===su||r===ru)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===$c)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qc)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===eu)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===tu)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nu)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===iu)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===su)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ru)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===po||r===au||r===ou)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===po)return l===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===au)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ou)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===kp||r===lu||r===cu||r===uu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===po)return o.COMPRESSED_RED_RGTC1_EXT;if(r===lu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===cu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===uu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ki?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class px extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qi extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mx={type:"move"};class Bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new qi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class gx extends ir{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,_=null;const g=t.getContextAttributes();let m=null,f=null;const x=[],v=[],y=new Xe;let b=null;const M=new $t;M.layers.enable(1),M.viewport=new et;const T=new $t;T.layers.enable(2),T.viewport=new et;const C=[M,T],S=new px;S.layers.enable(1),S.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let J=x[z];return J===void 0&&(J=new Bo,x[z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(z){let J=x[z];return J===void 0&&(J=new Bo,x[z]=J),J.getGripSpace()},this.getHand=function(z){let J=x[z];return J===void 0&&(J=new Bo,x[z]=J),J.getHandSpace()};function P(z){const J=v.indexOf(z.inputSource);if(J===-1)return;const K=x[J];K!==void 0&&(K.update(z.inputSource,z.frame,c||a),K.dispatchEvent({type:z.type,data:z.inputSource}))}function D(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",A);for(let z=0;z<x.length;z++){const J=v[z];J!==null&&(v[z]=null,x[z].disconnect(J))}E=null,N=null,e.setRenderTarget(m),p=null,h=null,d=null,i=null,f=null,V.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",D),i.addEventListener("inputsourceschange",A),g.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new rs(p.framebufferWidth,p.framebufferHeight,{format:vn,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,K=null,ie=null;g.depth&&(ie=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=g.stencil?Ws:Zi,K=g.stencil?Ki:gi);const ce={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(ce),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new rs(h.textureWidth,h.textureHeight,{format:vn,type:bi,depthTexture:new yh(h.textureWidth,h.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ye=e.properties.get(f);ye.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),V.setContext(i),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function A(z){for(let J=0;J<z.removed.length;J++){const K=z.removed[J],ie=v.indexOf(K);ie>=0&&(v[ie]=null,x[ie].disconnect(K))}for(let J=0;J<z.added.length;J++){const K=z.added[J];let ie=v.indexOf(K);if(ie===-1){for(let ye=0;ye<x.length;ye++)if(ye>=v.length){v.push(K),ie=ye;break}else if(v[ye]===null){v[ye]=K,ie=ye;break}if(ie===-1)break}const ce=x[ie];ce&&ce.connect(K)}}const O=new G,F=new G;function I(z,J,K){O.setFromMatrixPosition(J.matrixWorld),F.setFromMatrixPosition(K.matrixWorld);const ie=O.distanceTo(F),ce=J.projectionMatrix.elements,ye=K.projectionMatrix.elements,we=ce[14]/(ce[10]-1),pe=ce[14]/(ce[10]+1),De=(ce[9]+1)/ce[5],$=(ce[9]-1)/ce[5],bt=(ce[8]-1)/ce[0],_e=(ye[8]+1)/ye[0],Ae=we*bt,de=we*_e,Ke=ie/(-bt+_e),Re=Ke*-bt;J.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Re),z.translateZ(Ke),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const L=we+Ke,w=pe+Ke,Y=Ae-Re,Q=de+(ie-Re),ee=De*pe/w*L,te=$*pe/w*L;z.projectionMatrix.makePerspective(Y,Q,ee,te,L,w),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function U(z,J){J===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(J.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;S.near=T.near=M.near=z.near,S.far=T.far=M.far=z.far,(E!==S.near||N!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,N=S.far);const J=z.parent,K=S.cameras;U(S,J);for(let ie=0;ie<K.length;ie++)U(K[ie],J);K.length===2?I(S,M,T):S.projectionMatrix.copy(M.projectionMatrix),H(z,S,J)};function H(z,J,K){K===null?z.matrix.copy(J.matrixWorld):(z.matrix.copy(K.matrixWorld),z.matrix.invert(),z.matrix.multiply(J.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(J.projectionMatrix),z.projectionMatrixInverse.copy(J.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=$s*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)};let X=null;function k(z,J){if(u=J.getViewerPose(c||a),_=J,u!==null){const K=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ie=!1;K.length!==S.cameras.length&&(S.cameras.length=0,ie=!0);for(let ce=0;ce<K.length;ce++){const ye=K[ce];let we=null;if(p!==null)we=p.getViewport(ye);else{const De=d.getViewSubImage(h,ye);we=De.viewport,ce===0&&(e.setRenderTargetTextures(f,De.colorTexture,h.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(f))}let pe=C[ce];pe===void 0&&(pe=new $t,pe.layers.enable(ce),pe.viewport=new et,C[ce]=pe),pe.matrix.fromArray(ye.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(ye.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(we.x,we.y,we.width,we.height),ce===0&&(S.matrix.copy(pe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ie===!0&&S.cameras.push(pe)}}for(let K=0;K<x.length;K++){const ie=v[K],ce=x[K];ie!==null&&ce!==void 0&&ce.update(ie,J,c||a)}X&&X(z,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const V=new xh;V.setAnimationLoop(k),this.setAnimationLoop=function(z){X=z},this.dispose=function(){}}}function _x(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,gh(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,x,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===jt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===jt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===jt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vx(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=i[x.id];y===void 0&&(_(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",m));const b=v.program;n.updateUBOMapping(x,b);const M=e.render.frame;r[x.id]!==M&&(h(x),r[x.id]=M)}function u(x){const v=d();x.__bindingPointIndex=v;const y=s.createBuffer(),b=x.__size,M=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,b,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=i[x.id],y=x.uniforms,b=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let M=0,T=y.length;M<T;M++){const C=Array.isArray(y[M])?y[M]:[y[M]];for(let S=0,E=C.length;S<E;S++){const N=C[S];if(p(N,M,S,b)===!0){const P=N.__offset,D=Array.isArray(N.value)?N.value:[N.value];let A=0;for(let O=0;O<D.length;O++){const F=D[O],I=g(F);typeof F=="number"||typeof F=="boolean"?(N.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,P+A,N.__data)):F.isMatrix3?(N.__data[0]=F.elements[0],N.__data[1]=F.elements[1],N.__data[2]=F.elements[2],N.__data[3]=0,N.__data[4]=F.elements[3],N.__data[5]=F.elements[4],N.__data[6]=F.elements[5],N.__data[7]=0,N.__data[8]=F.elements[6],N.__data[9]=F.elements[7],N.__data[10]=F.elements[8],N.__data[11]=0):(F.toArray(N.__data,A),A+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,P,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,v,y,b){const M=x.value,T=v+"_"+y;if(b[T]===void 0)return typeof M=="number"||typeof M=="boolean"?b[T]=M:b[T]=M.clone(),!0;{const C=b[T];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return b[T]=M,!0}else if(C.equals(M)===!1)return C.copy(M),!0}return!1}function _(x){const v=x.uniforms;let y=0;const b=16;for(let T=0,C=v.length;T<C;T++){const S=Array.isArray(v[T])?v[T]:[v[T]];for(let E=0,N=S.length;E<N;E++){const P=S[E],D=Array.isArray(P.value)?P.value:[P.value];for(let A=0,O=D.length;A<O;A++){const F=D[A],I=g(F),U=y%b;U!==0&&b-U<I.boundary&&(y+=b-U),P.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=I.storage}}}const M=y%b;return M>0&&(y+=b-M),x.__size=y,x.__cache={},this}function g(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}class wh{constructor(e={}){const{canvas:t=pm(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=at,this._useLegacyLights=!1,this.toneMapping=Mi,this.toneMappingExposure=1;const v=this;let y=!1,b=0,M=0,T=null,C=-1,S=null;const E=new et,N=new et;let P=null;const D=new Te(0);let A=0,O=t.width,F=t.height,I=1,U=null,H=null;const X=new et(0,0,O,F),k=new et(0,0,O,F);let V=!1;const z=new jl;let J=!1,K=!1,ie=null;const ce=new He,ye=new Xe,we=new G,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return T===null?I:1}let $=n;function bt(R,W){for(let j=0;j<R.length;j++){const Z=R[j],q=t.getContext(Z,W);if(q!==null)return q}return null}try{const R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xl}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",ae,!1),$===null){const W=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&W.shift(),$=bt(W,R),$===null)throw bt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let _e,Ae,de,Ke,Re,L,w,Y,Q,ee,te,me,le,he,Ee,Ue,ne,Ze,Ge,Le,ve,fe,Ne,qe;function ht(){_e=new Cv($),Ae=new Ev($,_e,e),_e.init(Ae),fe=new fx($,_e,Ae),de=new dx($,_e,Ae),Ke=new Pv($),Re=new Z0,L=new hx($,_e,de,Re,Ae,fe,Ke),w=new bv(v),Y=new Av(v),Q=new zm($,Ae),Ne=new yv($,_e,Q,Ae),ee=new Rv($,Q,Ke,Ne),te=new Ov($,ee,Q,Ke),Ge=new Nv($,Ae,L),Ue=new Mv(Re),me=new K0(v,w,Y,_e,Ae,Ne,Ue),le=new _x(v,Re),he=new Q0,Ee=new rx(_e,Ae),Ze=new xv(v,w,Y,de,te,h,l),ne=new ux(v,te,Ae),qe=new vx($,Ke,Ae,de),Le=new Sv($,_e,Ke,Ae),ve=new Lv($,_e,Ke,Ae),Ke.programs=me.programs,v.capabilities=Ae,v.extensions=_e,v.properties=Re,v.renderLists=he,v.shadowMap=ne,v.state=de,v.info=Ke}ht();const Be=new gx(v,$);this.xr=Be,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const R=_e.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=_e.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(R){R!==void 0&&(I=R,this.setSize(O,F,!1))},this.getSize=function(R){return R.set(O,F)},this.setSize=function(R,W,j=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,F=W,t.width=Math.floor(R*I),t.height=Math.floor(W*I),j===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(O*I,F*I).floor()},this.setDrawingBufferSize=function(R,W,j){O=R,F=W,I=j,t.width=Math.floor(R*j),t.height=Math.floor(W*j),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(X)},this.setViewport=function(R,W,j,Z){R.isVector4?X.set(R.x,R.y,R.z,R.w):X.set(R,W,j,Z),de.viewport(E.copy(X).multiplyScalar(I).floor())},this.getScissor=function(R){return R.copy(k)},this.setScissor=function(R,W,j,Z){R.isVector4?k.set(R.x,R.y,R.z,R.w):k.set(R,W,j,Z),de.scissor(N.copy(k).multiplyScalar(I).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(R){de.setScissorTest(V=R)},this.setOpaqueSort=function(R){U=R},this.setTransparentSort=function(R){H=R},this.getClearColor=function(R){return R.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(R=!0,W=!0,j=!0){let Z=0;if(R){let q=!1;if(T!==null){const ue=T.texture.format;q=ue===nh||ue===th||ue===eh}if(q){const ue=T.texture.type,ge=ue===bi||ue===gi||ue===$l||ue===Ki||ue===Jd||ue===Qd,Se=Ze.getClearColor(),Ce=Ze.getClearAlpha(),Fe=Se.r,Pe=Se.g,Ie=Se.b;ge?(p[0]=Fe,p[1]=Pe,p[2]=Ie,p[3]=Ce,$.clearBufferuiv($.COLOR,0,p)):(_[0]=Fe,_[1]=Pe,_[2]=Ie,_[3]=Ce,$.clearBufferiv($.COLOR,0,_))}else Z|=$.COLOR_BUFFER_BIT}W&&(Z|=$.DEPTH_BUFFER_BIT),j&&(Z|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),he.dispose(),Ee.dispose(),Re.dispose(),w.dispose(),Y.dispose(),te.dispose(),Ne.dispose(),qe.dispose(),me.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Gt),Be.removeEventListener("sessionend",it),ie&&(ie.dispose(),ie=null),Vt.stop()};function se(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=Ke.autoReset,W=ne.enabled,j=ne.autoUpdate,Z=ne.needsUpdate,q=ne.type;ht(),Ke.autoReset=R,ne.enabled=W,ne.autoUpdate=j,ne.needsUpdate=Z,ne.type=q}function ae(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function oe(R){const W=R.target;W.removeEventListener("dispose",oe),Me(W)}function Me(R){xe(R),Re.remove(R)}function xe(R){const W=Re.get(R).programs;W!==void 0&&(W.forEach(function(j){me.releaseProgram(j)}),R.isShaderMaterial&&me.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,j,Z,q,ue){W===null&&(W=pe);const ge=q.isMesh&&q.matrixWorld.determinant()<0,Se=qf(R,W,j,Z,q);de.setMaterial(Z,ge);let Ce=j.index,Fe=1;if(Z.wireframe===!0){if(Ce=ee.getWireframeAttribute(j),Ce===void 0)return;Fe=2}const Pe=j.drawRange,Ie=j.attributes.position;let gt=Pe.start*Fe,tn=(Pe.start+Pe.count)*Fe;ue!==null&&(gt=Math.max(gt,ue.start*Fe),tn=Math.min(tn,(ue.start+ue.count)*Fe)),Ce!==null?(gt=Math.max(gt,0),tn=Math.min(tn,Ce.count)):Ie!=null&&(gt=Math.max(gt,0),tn=Math.min(tn,Ie.count));const wt=tn-gt;if(wt<0||wt===1/0)return;Ne.setup(q,Z,Se,j,Ce);let Wn,lt=Le;if(Ce!==null&&(Wn=Q.get(Ce),lt=ve,lt.setIndex(Wn)),q.isMesh)Z.wireframe===!0?(de.setLineWidth(Z.wireframeLinewidth*De()),lt.setMode($.LINES)):lt.setMode($.TRIANGLES);else if(q.isLine){let ze=Z.linewidth;ze===void 0&&(ze=1),de.setLineWidth(ze*De()),q.isLineSegments?lt.setMode($.LINES):q.isLineLoop?lt.setMode($.LINE_LOOP):lt.setMode($.LINE_STRIP)}else q.isPoints?lt.setMode($.POINTS):q.isSprite&&lt.setMode($.TRIANGLES);if(q.isBatchedMesh)lt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)lt.renderInstances(gt,wt,q.count);else if(j.isInstancedBufferGeometry){const ze=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ro=Math.min(j.instanceCount,ze);lt.renderInstances(gt,wt,ro)}else lt.render(gt,wt)};function tt(R,W,j){R.transparent===!0&&R.side===Nn&&R.forceSinglePass===!1?(R.side=jt,R.needsUpdate=!0,Kr(R,W,j),R.side=ii,R.needsUpdate=!0,Kr(R,W,j),R.side=Nn):Kr(R,W,j)}this.compile=function(R,W,j=null){j===null&&(j=R),m=Ee.get(j),m.init(),x.push(m),j.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),R!==j&&R.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(v._useLegacyLights);const Z=new Set;return R.traverse(function(q){const ue=q.material;if(ue)if(Array.isArray(ue))for(let ge=0;ge<ue.length;ge++){const Se=ue[ge];tt(Se,j,q),Z.add(Se)}else tt(ue,j,q),Z.add(ue)}),x.pop(),m=null,Z},this.compileAsync=function(R,W,j=null){const Z=this.compile(R,W,j);return new Promise(q=>{function ue(){if(Z.forEach(function(ge){Re.get(ge).currentProgram.isReady()&&Z.delete(ge)}),Z.size===0){q(R);return}setTimeout(ue,10)}_e.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let nt=null;function Tt(R){nt&&nt(R)}function Gt(){Vt.stop()}function it(){Vt.start()}const Vt=new xh;Vt.setAnimationLoop(Tt),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(R){nt=R,Be.setAnimationLoop(R),R===null?Vt.stop():Vt.start()},Be.addEventListener("sessionstart",Gt),Be.addEventListener("sessionend",it),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(W),W=Be.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,W,T),m=Ee.get(R,x.length),m.init(),x.push(m),ce.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),z.setFromProjectionMatrix(ce),K=this.localClippingEnabled,J=Ue.init(this.clippingPlanes,K),g=he.get(R,f.length),g.init(),f.push(g),Pn(R,W,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(U,H),this.info.render.frame++,J===!0&&Ue.beginShadows();const j=m.state.shadowsArray;if(ne.render(j,R,W),J===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(g,R),m.setupLights(v._useLegacyLights),W.isArrayCamera){const Z=W.cameras;for(let q=0,ue=Z.length;q<ue;q++){const ge=Z[q];Cc(g,R,ge,ge.viewport)}}else Cc(g,R,W);T!==null&&(L.updateMultisampleRenderTarget(T),L.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(v,R,W),Ne.resetDefaultState(),C=-1,S=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function Pn(R,W,j,Z){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||z.intersectsSprite(R)){Z&&we.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ce);const ge=te.update(R),Se=R.material;Se.visible&&g.push(R,ge,Se,j,we.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||z.intersectsObject(R))){const ge=te.update(R),Se=R.material;if(Z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),we.copy(R.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),we.copy(ge.boundingSphere.center)),we.applyMatrix4(R.matrixWorld).applyMatrix4(ce)),Array.isArray(Se)){const Ce=ge.groups;for(let Fe=0,Pe=Ce.length;Fe<Pe;Fe++){const Ie=Ce[Fe],gt=Se[Ie.materialIndex];gt&&gt.visible&&g.push(R,ge,gt,j,we.z,Ie)}}else Se.visible&&g.push(R,ge,Se,j,we.z,null)}}const ue=R.children;for(let ge=0,Se=ue.length;ge<Se;ge++)Pn(ue[ge],W,j,Z)}function Cc(R,W,j,Z){const q=R.opaque,ue=R.transmissive,ge=R.transparent;m.setupLightsView(j),J===!0&&Ue.setGlobalState(v.clippingPlanes,j),ue.length>0&&Yf(q,ue,W,j),Z&&de.viewport(E.copy(Z)),q.length>0&&jr(q,W,j),ue.length>0&&jr(ue,W,j),ge.length>0&&jr(ge,W,j),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Yf(R,W,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const ue=Ae.isWebGL2;ie===null&&(ie=new rs(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Dr:bi,minFilter:ss,samples:ue?4:0})),v.getDrawingBufferSize(ye),ue?ie.setSize(ye.x,ye.y):ie.setSize(za(ye.x),za(ye.y));const ge=v.getRenderTarget();v.setRenderTarget(ie),v.getClearColor(D),A=v.getClearAlpha(),A<1&&v.setClearColor(16777215,.5),v.clear();const Se=v.toneMapping;v.toneMapping=Mi,jr(R,j,Z),L.updateMultisampleRenderTarget(ie),L.updateRenderTargetMipmap(ie);let Ce=!1;for(let Fe=0,Pe=W.length;Fe<Pe;Fe++){const Ie=W[Fe],gt=Ie.object,tn=Ie.geometry,wt=Ie.material,Wn=Ie.group;if(wt.side===Nn&&gt.layers.test(Z.layers)){const lt=wt.side;wt.side=jt,wt.needsUpdate=!0,Rc(gt,j,Z,tn,wt,Wn),wt.side=lt,wt.needsUpdate=!0,Ce=!0}}Ce===!0&&(L.updateMultisampleRenderTarget(ie),L.updateRenderTargetMipmap(ie)),v.setRenderTarget(ge),v.setClearColor(D,A),v.toneMapping=Se}function jr(R,W,j){const Z=W.isScene===!0?W.overrideMaterial:null;for(let q=0,ue=R.length;q<ue;q++){const ge=R[q],Se=ge.object,Ce=ge.geometry,Fe=Z===null?ge.material:Z,Pe=ge.group;Se.layers.test(j.layers)&&Rc(Se,W,j,Ce,Fe,Pe)}}function Rc(R,W,j,Z,q,ue){R.onBeforeRender(v,W,j,Z,q,ue),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(v,W,j,Z,R,ue),q.transparent===!0&&q.side===Nn&&q.forceSinglePass===!1?(q.side=jt,q.needsUpdate=!0,v.renderBufferDirect(j,W,Z,q,R,ue),q.side=ii,q.needsUpdate=!0,v.renderBufferDirect(j,W,Z,q,R,ue),q.side=Nn):v.renderBufferDirect(j,W,Z,q,R,ue),R.onAfterRender(v,W,j,Z,q,ue)}function Kr(R,W,j){W.isScene!==!0&&(W=pe);const Z=Re.get(R),q=m.state.lights,ue=m.state.shadowsArray,ge=q.state.version,Se=me.getParameters(R,q.state,ue,W,j),Ce=me.getProgramCacheKey(Se);let Fe=Z.programs;Z.environment=R.isMeshStandardMaterial?W.environment:null,Z.fog=W.fog,Z.envMap=(R.isMeshStandardMaterial?Y:w).get(R.envMap||Z.environment),Fe===void 0&&(R.addEventListener("dispose",oe),Fe=new Map,Z.programs=Fe);let Pe=Fe.get(Ce);if(Pe!==void 0){if(Z.currentProgram===Pe&&Z.lightsStateVersion===ge)return Pc(R,Se),Pe}else Se.uniforms=me.getUniforms(R),R.onBuild(j,Se,v),R.onBeforeCompile(Se,v),Pe=me.acquireProgram(Se,Ce),Fe.set(Ce,Pe),Z.uniforms=Se.uniforms;const Ie=Z.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ie.clippingPlanes=Ue.uniform),Pc(R,Se),Z.needsLights=Kf(R),Z.lightsStateVersion=ge,Z.needsLights&&(Ie.ambientLightColor.value=q.state.ambient,Ie.lightProbe.value=q.state.probe,Ie.directionalLights.value=q.state.directional,Ie.directionalLightShadows.value=q.state.directionalShadow,Ie.spotLights.value=q.state.spot,Ie.spotLightShadows.value=q.state.spotShadow,Ie.rectAreaLights.value=q.state.rectArea,Ie.ltc_1.value=q.state.rectAreaLTC1,Ie.ltc_2.value=q.state.rectAreaLTC2,Ie.pointLights.value=q.state.point,Ie.pointLightShadows.value=q.state.pointShadow,Ie.hemisphereLights.value=q.state.hemi,Ie.directionalShadowMap.value=q.state.directionalShadowMap,Ie.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ie.spotShadowMap.value=q.state.spotShadowMap,Ie.spotLightMatrix.value=q.state.spotLightMatrix,Ie.spotLightMap.value=q.state.spotLightMap,Ie.pointShadowMap.value=q.state.pointShadowMap,Ie.pointShadowMatrix.value=q.state.pointShadowMatrix),Z.currentProgram=Pe,Z.uniformsList=null,Pe}function Lc(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Aa.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Pc(R,W){const j=Re.get(R);j.outputColorSpace=W.outputColorSpace,j.batching=W.batching,j.instancing=W.instancing,j.instancingColor=W.instancingColor,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function qf(R,W,j,Z,q){W.isScene!==!0&&(W=pe),L.resetTextureUnits();const ue=W.fog,ge=Z.isMeshStandardMaterial?W.environment:null,Se=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:St,Ce=(Z.isMeshStandardMaterial?Y:w).get(Z.envMap||ge),Fe=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Pe=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ie=!!j.morphAttributes.position,gt=!!j.morphAttributes.normal,tn=!!j.morphAttributes.color;let wt=Mi;Z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(wt=v.toneMapping);const Wn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,lt=Wn!==void 0?Wn.length:0,ze=Re.get(Z),ro=m.state.lights;if(J===!0&&(K===!0||R!==S)){const fn=R===S&&Z.id===C;Ue.setState(Z,R,fn)}let ft=!1;Z.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==ro.state.version||ze.outputColorSpace!==Se||q.isBatchedMesh&&ze.batching===!1||!q.isBatchedMesh&&ze.batching===!0||q.isInstancedMesh&&ze.instancing===!1||!q.isInstancedMesh&&ze.instancing===!0||q.isSkinnedMesh&&ze.skinning===!1||!q.isSkinnedMesh&&ze.skinning===!0||q.isInstancedMesh&&ze.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ze.instancingColor===!1&&q.instanceColor!==null||ze.envMap!==Ce||Z.fog===!0&&ze.fog!==ue||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ue.numPlanes||ze.numIntersection!==Ue.numIntersection)||ze.vertexAlphas!==Fe||ze.vertexTangents!==Pe||ze.morphTargets!==Ie||ze.morphNormals!==gt||ze.morphColors!==tn||ze.toneMapping!==wt||Ae.isWebGL2===!0&&ze.morphTargetsCount!==lt)&&(ft=!0):(ft=!0,ze.__version=Z.version);let Di=ze.currentProgram;ft===!0&&(Di=Kr(Z,W,q));let Dc=!1,cr=!1,ao=!1;const Ot=Di.getUniforms(),Ii=ze.uniforms;if(de.useProgram(Di.program)&&(Dc=!0,cr=!0,ao=!0),Z.id!==C&&(C=Z.id,cr=!0),Dc||S!==R){Ot.setValue($,"projectionMatrix",R.projectionMatrix),Ot.setValue($,"viewMatrix",R.matrixWorldInverse);const fn=Ot.map.cameraPosition;fn!==void 0&&fn.setValue($,we.setFromMatrixPosition(R.matrixWorld)),Ae.logarithmicDepthBuffer&&Ot.setValue($,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ot.setValue($,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,cr=!0,ao=!0)}if(q.isSkinnedMesh){Ot.setOptional($,q,"bindMatrix"),Ot.setOptional($,q,"bindMatrixInverse");const fn=q.skeleton;fn&&(Ae.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),Ot.setValue($,"boneTexture",fn.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(Ot.setOptional($,q,"batchingTexture"),Ot.setValue($,"batchingTexture",q._matricesTexture,L));const oo=j.morphAttributes;if((oo.position!==void 0||oo.normal!==void 0||oo.color!==void 0&&Ae.isWebGL2===!0)&&Ge.update(q,j,Di),(cr||ze.receiveShadow!==q.receiveShadow)&&(ze.receiveShadow=q.receiveShadow,Ot.setValue($,"receiveShadow",q.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Ii.envMap.value=Ce,Ii.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),cr&&(Ot.setValue($,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&jf(Ii,ao),ue&&Z.fog===!0&&le.refreshFogUniforms(Ii,ue),le.refreshMaterialUniforms(Ii,Z,I,F,ie),Aa.upload($,Lc(ze),Ii,L)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Aa.upload($,Lc(ze),Ii,L),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ot.setValue($,"center",q.center),Ot.setValue($,"modelViewMatrix",q.modelViewMatrix),Ot.setValue($,"normalMatrix",q.normalMatrix),Ot.setValue($,"modelMatrix",q.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const fn=Z.uniformsGroups;for(let lo=0,Zf=fn.length;lo<Zf;lo++)if(Ae.isWebGL2){const Ic=fn[lo];qe.update(Ic,Di),qe.bind(Ic,Di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Di}function jf(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Kf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,W,j){Re.get(R.texture).__webglTexture=W,Re.get(R.depthTexture).__webglTexture=j;const Z=Re.get(R);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=j===void 0,Z.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,W){const j=Re.get(R);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,j=0){T=R,b=W,M=j;let Z=!0,q=null,ue=!1,ge=!1;if(R){const Ce=Re.get(R);Ce.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer($.FRAMEBUFFER,null),Z=!1):Ce.__webglFramebuffer===void 0?L.setupRenderTarget(R):Ce.__hasExternalTextures&&L.rebindTextures(R,Re.get(R.texture).__webglTexture,Re.get(R.depthTexture).__webglTexture);const Fe=R.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ge=!0);const Pe=Re.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Pe[W])?q=Pe[W][j]:q=Pe[W],ue=!0):Ae.isWebGL2&&R.samples>0&&L.useMultisampledRTT(R)===!1?q=Re.get(R).__webglMultisampledFramebuffer:Array.isArray(Pe)?q=Pe[j]:q=Pe,E.copy(R.viewport),N.copy(R.scissor),P=R.scissorTest}else E.copy(X).multiplyScalar(I).floor(),N.copy(k).multiplyScalar(I).floor(),P=V;if(de.bindFramebuffer($.FRAMEBUFFER,q)&&Ae.drawBuffers&&Z&&de.drawBuffers(R,q),de.viewport(E),de.scissor(N),de.setScissorTest(P),ue){const Ce=Re.get(R.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ce.__webglTexture,j)}else if(ge){const Ce=Re.get(R.texture),Fe=W||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ce.__webglTexture,j||0,Fe)}C=-1},this.readRenderTargetPixels=function(R,W,j,Z,q,ue,ge){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){de.bindFramebuffer($.FRAMEBUFFER,Se);try{const Ce=R.texture,Fe=Ce.format,Pe=Ce.type;if(Fe!==vn&&fe.convert(Fe)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Pe===Dr&&(_e.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Pe!==bi&&fe.convert(Pe)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===ti&&(Ae.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-Z&&j>=0&&j<=R.height-q&&$.readPixels(W,j,Z,q,fe.convert(Fe),fe.convert(Pe),ue)}finally{const Ce=T!==null?Re.get(T).__webglFramebuffer:null;de.bindFramebuffer($.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(R,W,j=0){const Z=Math.pow(2,-j),q=Math.floor(W.image.width*Z),ue=Math.floor(W.image.height*Z);L.setTexture2D(W,0),$.copyTexSubImage2D($.TEXTURE_2D,j,0,0,R.x,R.y,q,ue),de.unbindTexture()},this.copyTextureToTexture=function(R,W,j,Z=0){const q=W.image.width,ue=W.image.height,ge=fe.convert(j.format),Se=fe.convert(j.type);L.setTexture2D(j,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,j.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,j.unpackAlignment),W.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Z,R.x,R.y,q,ue,ge,Se,W.image.data):W.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Z,R.x,R.y,W.mipmaps[0].width,W.mipmaps[0].height,ge,W.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,Z,R.x,R.y,ge,Se,W.image),Z===0&&j.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(R,W,j,Z,q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=R.max.x-R.min.x+1,ge=R.max.y-R.min.y+1,Se=R.max.z-R.min.z+1,Ce=fe.convert(Z.format),Fe=fe.convert(Z.type);let Pe;if(Z.isData3DTexture)L.setTexture3D(Z,0),Pe=$.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)L.setTexture2DArray(Z,0),Pe=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,Z.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ie=$.getParameter($.UNPACK_ROW_LENGTH),gt=$.getParameter($.UNPACK_IMAGE_HEIGHT),tn=$.getParameter($.UNPACK_SKIP_PIXELS),wt=$.getParameter($.UNPACK_SKIP_ROWS),Wn=$.getParameter($.UNPACK_SKIP_IMAGES),lt=j.isCompressedTexture?j.mipmaps[q]:j.image;$.pixelStorei($.UNPACK_ROW_LENGTH,lt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,lt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,R.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,R.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,R.min.z),j.isDataTexture||j.isData3DTexture?$.texSubImage3D(Pe,q,W.x,W.y,W.z,ue,ge,Se,Ce,Fe,lt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Pe,q,W.x,W.y,W.z,ue,ge,Se,Ce,lt.data)):$.texSubImage3D(Pe,q,W.x,W.y,W.z,ue,ge,Se,Ce,Fe,lt),$.pixelStorei($.UNPACK_ROW_LENGTH,Ie),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,gt),$.pixelStorei($.UNPACK_SKIP_PIXELS,tn),$.pixelStorei($.UNPACK_SKIP_ROWS,wt),$.pixelStorei($.UNPACK_SKIP_IMAGES,Wn),q===0&&Z.generateMipmaps&&$.generateMipmap(Pe),de.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),de.unbindTexture()},this.resetState=function(){b=0,M=0,T=null,de.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Yl?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===Za?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===at?Ji:rh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ji?at:St}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class xx extends wh{}xx.prototype.isWebGL1Renderer=!0;class yx extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Sx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new G;class Ql{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ql(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const td=new G,nd=new et,id=new et,Ex=new G,sd=new He,xa=new G,zo=new Gn,rd=new He,ko=new Ja;class Mx extends Sn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zc,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ai),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xa),this.boundingBox.expandByPoint(xa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xa),this.boundingSphere.expandByPoint(xa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zo.copy(this.boundingSphere),zo.applyMatrix4(i),e.ray.intersectsSphere(zo)!==!1&&(rd.copy(i).invert(),ko.copy(e.ray).applyMatrix4(rd),!(this.boundingBox!==null&&ko.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ko)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Dp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;nd.fromBufferAttribute(i.attributes.skinIndex,e),id.fromBufferAttribute(i.attributes.skinWeight,e),td.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=id.getComponent(r);if(a!==0){const o=nd.getComponent(r);sd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ex.copy(td).applyMatrix4(sd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Ah extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class bx extends It{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ct,u=Ct,d,h){super(null,a,o,l,c,u,i,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ad=new He,Tx=new He;class ec{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Tx;ad.multiplyMatrices(o,t[r]),ad.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ec(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new bx(t,e,e,vn,ti);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ah),this.bones.push(a),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class El extends Lt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rs=new He,od=new He,ya=[],ld=new ai,wx=new He,pr=new Sn,mr=new Gn;class Ax extends Sn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new El(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,wx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),ld.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(ld)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),mr.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mr.copy(this.boundingSphere),mr.applyMatrix4(n),e.ray.intersectsSphere(mr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Rs),od.multiplyMatrices(n,Rs),pr.matrixWorld=od,pr.raycast(e,ya);for(let a=0,o=ya.length;a<o;a++){const l=ya[a];l.instanceId=r,l.object=this,t.push(l)}ya.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new El(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ch extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cd=new G,ud=new G,dd=new He,Ho=new Ja,Sa=new Gn;class tc extends dt{constructor(e=new Tn,t=new Ch){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)cd.fromBufferAttribute(t,i-1),ud.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=cd.distanceTo(ud);e.setAttribute("lineDistance",new zn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(i),Sa.radius+=r,e.ray.intersectsSphere(Sa)===!1)return;dd.copy(i).invert(),Ho.copy(e.ray).applyMatrix4(dd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new G,u=new G,d=new G,h=new G,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const f=Math.max(0,a.start),x=Math.min(_.count,a.start+a.count);for(let v=f,y=x-1;v<y;v+=p){const b=_.getX(v),M=_.getX(v+1);if(c.fromBufferAttribute(m,b),u.fromBufferAttribute(m,M),Ho.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(h);C<e.near||C>e.far||t.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let v=f,y=x-1;v<y;v+=p){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),Ho.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(h);M<e.near||M>e.far||t.push({distance:M,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const hd=new G,fd=new G;class Cx extends tc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)hd.fromBufferAttribute(t,i),fd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hd.distanceTo(fd);e.setAttribute("lineDistance",new zn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rx extends tc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Rh extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pd=new He,Ml=new Ja,Ea=new Gn,Ma=new G;class Lh extends dt{constructor(e=new Tn,t=new Rh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(i),Ea.radius+=r,e.ray.intersectsSphere(Ea)===!1)return;pd.copy(i).invert(),Ml.copy(e.ray).applyMatrix4(pd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=h,g=p;_<g;_++){const m=c.getX(_);Ma.fromBufferAttribute(d,m),md(Ma,m,l,i,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=h,g=p;_<g;_++)Ma.fromBufferAttribute(d,_),md(Ma,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function md(s,e,t,n,i,r,a){const o=Ml.distanceSqToPoint(s);if(o<t){const l=new G;Ml.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class nc extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oi extends nc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ba(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Lx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Px(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function gd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Ph(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class $r{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Dx extends $r{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:du,endingEnd:du}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case hu:r=e,o=2*t-n;break;case fu:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hu:a=e,l=2*n-t;break;case fu:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,f=-h*m+2*h*g-h*_,x=(1+h)*m+(-1.5-2*h)*g+(-.5+h)*_+1,v=(-1-p)*m+(1.5+p)*g+.5*_,y=p*m-p*g;for(let b=0;b!==o;++b)r[b]=f*a[u+b]+x*a[c+b]+v*a[l+b]+y*a[d+b];return r}}class Ix extends $r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}}class Nx extends $r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Vn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ba(t,this.TimeBufferType),this.values=ba(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ba(e.times,Array),values:ba(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Nx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ix(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ir:t=this.InterpolantFactoryMethodDiscrete;break;case Xs:t=this.InterpolantFactoryMethodLinear;break;case mo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return Xs;case this.InterpolantFactoryMethodSmooth:return mo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Lx(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===mo,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const d=o*n,h=d-n,p=d+n;for(let _=0;_!==n;++_){const g=t[d+_];if(g!==t[h+_]||g!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,h=a*n;for(let p=0;p!==n;++p)t[h+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Xs;class rr extends Vn{}rr.prototype.ValueTypeName="bool";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Ir;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;class Dh extends Vn{}Dh.prototype.ValueTypeName="color";class qs extends Vn{}qs.prototype.ValueTypeName="number";class Ox extends $r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Li.slerpFlat(r,0,a,c-o,a,c,l);return r}}class as extends Vn{InterpolantFactoryMethodLinear(e){return new Ox(this.times,this.values,this.getValueSize(),e)}}as.prototype.ValueTypeName="quaternion";as.prototype.DefaultInterpolation=Xs;as.prototype.InterpolantFactoryMethodSmooth=void 0;class ar extends Vn{}ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Ir;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;class js extends Vn{}js.prototype.ValueTypeName="vector";class Ux{constructor(e,t=-1,n,i=Hp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ln(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Bx(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Vn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Px(l);l=gd(l,1,u),c=gd(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new qs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,p,_,g){if(p.length!==0){const m=[],f=[];Ph(p,m,f,_),m.length!==0&&g.push(new d(h,m,f))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let _;for(_=0;_<h.length;_++)if(h[_].morphTargets)for(let g=0;g<h[_].morphTargets.length;g++)p[h[_].morphTargets[g]]=-1;for(const g in p){const m=[],f=[];for(let x=0;x!==h[_].morphTargets.length;++x){const v=h[_];m.push(v.time),f.push(v.morphTarget===g?1:0)}i.push(new qs(".morphTargetInfluence["+g+"]",m,f))}l=p.length*a}else{const p=".bones["+t[d].name+"]";n(js,p+".position",h,"pos",i),n(as,p+".quaternion",h,"rot",i),n(js,p+".scale",h,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Fx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qs;case"vector":case"vector2":case"vector3":case"vector4":return js;case"color":return Dh;case"quaternion":return as;case"bool":case"boolean":return rr;case"string":return ar}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Bx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Fx(s.type);if(s.times===void 0){const t=[],n=[];Ph(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const _i={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class zx{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const kx=new zx;class us{constructor(e){this.manager=e!==void 0?e:kx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}us.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class Hx extends Error{constructor(e,t){super(e),this.response=t}}class ka extends us{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=_i.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:n,onError:i});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Kn[e],d=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=h?parseInt(h):0,_=p!==0;let g=0;const m=new ReadableStream({start(f){x();function x(){d.read().then(({done:v,value:y})=>{if(v)f.close();else{g+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let M=0,T=u.length;M<T;M++){const C=u[M];C.onProgress&&C.onProgress(b)}f.enqueue(y),x()}})}}});return new Response(m)}else throw new Hx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{_i.add(e,c);const u=Kn[e];delete Kn[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Kn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Kn[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Gx extends us{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=_i.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Nr("img");function l(){u(),_i.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Vx extends us{constructor(e){super(e)}load(e,t,n,i){const r=new It,a=new Gx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ic extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Go=new He,_d=new G,vd=new G;class sc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jl,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_d.setFromMatrixPosition(e.matrixWorld),t.position.copy(_d),vd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vd),t.updateMatrixWorld(),Go.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wx extends sc{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=$s*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Xx extends ic{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Wx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const xd=new He,gr=new G,Vo=new G;class $x extends sc{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gr.setFromMatrixPosition(e.matrixWorld),n.position.copy(gr),Vo.copy(n.position),Vo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Vo),n.updateMatrixWorld(),i.makeTranslation(-gr.x,-gr.y,-gr.z),xd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xd)}}class Yx extends ic{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new $x}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qx extends sc{constructor(){super(new Zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jx extends ic{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new qx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Kx extends us{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=_i.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return _i.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),_i.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});_i.add(e,l),r.manager.itemStart(e)}}const rc="\\[\\]\\.:\\/",Zx=new RegExp("["+rc+"]","g"),ac="[^"+rc+"]",Jx="[^"+rc.replace("\\.","")+"]",Qx=/((?:WC+[\/:])*)/.source.replace("WC",ac),ey=/(WCOD+)?/.source.replace("WCOD",Jx),ty=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ac),ny=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ac),iy=new RegExp("^"+Qx+ey+ty+ny+"$"),sy=["material","materials","bones","map"];class ry{constructor(e,t,n){const i=n||je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class je{constructor(e,t,n){this.path=t,this.parsedPath=n||je.parseTrackName(t),this.node=je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new je.Composite(e,t,n):new je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zx,"")}static parseTrackName(e){const t=iy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);sy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}je.Composite=ry;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class $i{constructor(e){this.value=e}clone(){return new $i(this.value.clone===void 0?this.value:this.value.clone())}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xl);function yd(s,e){if(e===Gp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===_l||e===sh){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===_l)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class ay extends us{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new dy(t)}),this.register(function(t){return new yy(t)}),this.register(function(t){return new Sy(t)}),this.register(function(t){return new Ey(t)}),this.register(function(t){return new fy(t)}),this.register(function(t){return new py(t)}),this.register(function(t){return new my(t)}),this.register(function(t){return new gy(t)}),this.register(function(t){return new uy(t)}),this.register(function(t){return new _y(t)}),this.register(function(t){return new hy(t)}),this.register(function(t){return new xy(t)}),this.register(function(t){return new vy(t)}),this.register(function(t){return new ly(t)}),this.register(function(t){return new My(t)}),this.register(function(t){return new by(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=wr.extractUrlBase(e);a=wr.resolveURL(c,this.path)}else a=wr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ka(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ih){try{a[We.KHR_BINARY_GLTF]=new Ty(e)}catch(d){i&&i(d);return}r=JSON.parse(a[We.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new By(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const d=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(d){case We.KHR_MATERIALS_UNLIT:a[d]=new cy;break;case We.KHR_DRACO_MESH_COMPRESSION:a[d]=new wy(r,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:a[d]=new Ay;break;case We.KHR_MESH_QUANTIZATION:a[d]=new Cy;break;default:h.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function oy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ly{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Te(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],St);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new jx(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Yx(u),c.distance=d;break;case"spot":c=new Xx(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,mi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class cy{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return Yi}extendParams(e,t,n){const i=[];e.color=new Te(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],St),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,at))}return Promise.all(i)}}class uy{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class dy{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(o,o)}return Promise.all(r)}}class hy{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class fy{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],St)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,at)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class py{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class my{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(o[0],o[1],o[2],St),Promise.all(r)}}class gy{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class _y{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(o[0],o[1],o[2],St),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,at)),Promise.all(r)}}class vy{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class xy{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class yy{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Sy{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ey{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class My{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,h,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(p),u,d,h,i.mode,i.filter),p})})}else return null}}class by{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==gn.TRIANGLES&&c.mode!==gn.TRIANGLE_STRIP&&c.mode!==gn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,p=[];for(const _ of d){const g=new He,m=new G,f=new Li,x=new G(1,1,1),v=new Ax(_.geometry,_.material,h);for(let y=0;y<h;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,y),l.SCALE&&x.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,g.compose(m,f,x));for(const y in l)if(y==="_COLOR_0"){const b=l[y];v.instanceColor=new El(b.array,b.itemSize,b.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&_.geometry.setAttribute(y,l[y]);dt.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Ih="glTF",_r=12,Sd={JSON:1313821514,BIN:5130562};class Ty{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,_r),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ih)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-_r,r=new DataView(e,_r);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Sd.JSON){const c=new Uint8Array(e,_r+a,o);this.content=n.decode(c)}else if(l===Sd.BIN){const c=_r+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class wy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const d=bl[u]||u.toLowerCase();o[d]=a[u]}for(const u in e.attributes){const d=bl[u]||u.toLowerCase();if(a[u]!==void 0){const h=n.accessors[e.attributes[u]],p=Fs[h.componentType];c[d]=p.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,h){i.decodeDracoFile(u,function(p){for(const _ in p.attributes){const g=p.attributes[_],m=l[_];m!==void 0&&(g.normalized=m)}d(p)},o,c,St,h)})})}}class Ay{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Cy{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class Nh extends $r{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,d=(n-t)/u,h=d*d,p=h*d,_=e*c,g=_-c,m=-2*p+3*h,f=p-h,x=1-m,v=f-h+d;for(let y=0;y!==o;y++){const b=a[g+y+o],M=a[g+y+l]*u,T=a[_+y+o],C=a[_+y]*u;r[y]=x*b+v*M+m*T+f*C}return r}}const Ry=new Li;class Ly extends Nh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Ry.fromArray(r).normalize().toArray(r),r}}const gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ed={9728:Ct,9729:qt,9984:gl,9985:Kd,9986:wa,9987:ss},Md={33071:_n,33648:Na,10497:Vs},Wo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},bl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Py={CUBICSPLINE:void 0,LINEAR:Xs,STEP:Ir},Xo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Dy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new nc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ii})),s.DefaultMaterial}function Bi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function mi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Iy(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(h)}if(i){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(h)}if(r){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=h),s.morphTargetsRelative=!0,s})}function Ny(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Oy(s){let e;const t=s.extensions&&s.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$o(t.attributes):e=s.indices+":"+$o(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+$o(s.targets[n]);return e}function $o(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Tl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Uy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Fy=new He;class By{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new oy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Vx(this.options.manager):this.textureLoader=new Kx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ka(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Bi(r,o,i),mi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(wr.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Wo[i.type],o=Fs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Lt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Wo[i.type],c=Fs[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(p&&p!==d){const f=Math.floor(h/p),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let v=t.cache.get(x);v||(g=new c(o,f*p,i.count*p/u),v=new Sx(g,p/u),t.cache.add(x,v)),m=new Ql(v,l,h%p/u,_)}else o===null?g=new c(i.count*l):g=new c(o,h,i.count*l),m=new Lt(g,l,_);if(i.sparse!==void 0){const f=Wo.SCALAR,x=Fs[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,b=new x(a[1],v,i.sparse.count*f),M=new c(a[2],y,i.sparse.count*l);o!==null&&(m=new Lt(m.array.slice(),m.itemSize,m.normalized));for(let T=0,C=b.length;T<C;T++){const S=b[T];if(m.setX(S,M[T*l]),l>=2&&m.setY(S,M[T*l+1]),l>=3&&m.setZ(S,M[T*l+2]),l>=4&&m.setW(S,M[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(r.samplers||{})[a.sampler]||{};return u.magFilter=Ed[h.magFilter]||qt,u.minFilter=Ed[h.minFilter]||ss,u.wrapS=Md[h.wrapS]||Vs,u.wrapT=Md[h.wrapT]||Vs,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,p){let _=h;t.isImageBitmapLoader===!0&&(_=function(g){const m=new It(g);m.needsUpdate=!0,h(m)}),t.load(wr.resolveURL(d,r.path),_,void 0,p)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),d.userData.mimeType=a.mimeType||Uy(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[We.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Rh,Bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ch,Bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return nc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[We.KHR_MATERIALS_UNLIT]){const d=i[We.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new Te(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],St),o.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,at)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Nn);const u=r.alphaMode||Xo.OPAQUE;if(u===Xo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Xo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Yi&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Xe(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Yi&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Yi){const d=r.emissiveFactor;o.emissive=new Te().setRGB(d[0],d[1],d[2],St)}return r.emissiveTexture!==void 0&&a!==Yi&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,at)),Promise.all(c).then(function(){const d=new a(o);return r.name&&(d.name=r.name),mi(d,r),t.associations.set(d,{materials:e}),r.extensions&&Bi(i,d,r),d})}createUniqueName(e){const t=je.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return bd(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=Oy(c),d=i[u];if(d)a.push(d.promise);else{let h;c.extensions&&c.extensions[We.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=bd(new Tn,c,t),i[u]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?Dy(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let p=0,_=u.length;p<_;p++){const g=u[p],m=a[p];let f;const x=c[p];if(m.mode===gn.TRIANGLES||m.mode===gn.TRIANGLE_STRIP||m.mode===gn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new Mx(g,x):new Sn(g,x),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===gn.TRIANGLE_STRIP?f.geometry=yd(f.geometry,sh):m.mode===gn.TRIANGLE_FAN&&(f.geometry=yd(f.geometry,_l));else if(m.mode===gn.LINES)f=new Cx(g,x);else if(m.mode===gn.LINE_STRIP)f=new tc(g,x);else if(m.mode===gn.LINE_LOOP)f=new Rx(g,x);else if(m.mode===gn.POINTS)f=new Lh(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Ny(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),mi(f,r),m.extensions&&Bi(i,f,m),t.assignFinalMaterial(f),d.push(f)}for(let p=0,_=d.length;p<_;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return r.extensions&&Bi(i,d[0],r),d[0];const h=new qi;r.extensions&&Bi(i,h,r),t.associations.set(h,{meshes:e});for(let p=0,_=d.length;p<_;p++)h.add(d[p]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(fm.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Zl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),mi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const d=a[c];if(d){o.push(d);const h=new He;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ec(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let d=0,h=i.channels.length;d<h;d++){const p=i.channels[d],_=i.samplers[p.sampler],g=p.target,m=g.node,f=i.parameters!==void 0?i.parameters[_.input]:_.input,x=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",x)),c.push(_),u.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],p=d[1],_=d[2],g=d[3],m=d[4],f=[];for(let x=0,v=h.length;x<v;x++){const y=h[x],b=p[x],M=_[x],T=g[x],C=m[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const S=n._createAnimationTracks(y,b,M,T,C);if(S)for(let E=0;E<S.length;E++)f.push(S[E])}return new Ux(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,Fy)});for(let p=0,_=d.length;p<_;p++)u.add(d[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Ah:c.length>1?u=new qi:c.length===1?u=c[0]:u=new dt,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=a),mi(u,r),r.extensions&&Bi(n,u,r),r.matrix!==void 0){const d=new He;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new qi;n.name&&(r.name=i.createUniqueName(n.name)),mi(r,n),n.extensions&&Bi(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);const c=u=>{const d=new Map;for(const[h,p]of i.associations)(h instanceof Bn||h instanceof It)&&d.set(h,p);return u.traverse(h=>{const p=i.associations.get(h);p!=null&&d.set(h,p)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];fi[r.path]===fi.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(o);let c;switch(fi[r.path]){case fi.weights:c=qs;break;case fi.rotation:c=as;break;case fi.position:case fi.scale:c=js;break;default:switch(n.itemSize){case 1:c=qs;break;case 2:case 3:default:c=js;break}break}const u=i.interpolation!==void 0?Py[i.interpolation]:Xs,d=this._getArrayFromAccessor(n);for(let h=0,p=l.length;h<p;h++){const _=new c(l[h]+"."+fi[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Tl(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof as?Ly:Nh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function zy(s,e,t){const n=e.attributes,i=new ai;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new G(l[0],l[1],l[2]),new G(c[0],c[1],c[2])),o.normalized){const u=Tl(Fs[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new G,l=new G;for(let c=0,u=r.length;c<u;c++){const d=r[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],p=h.min,_=h.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),h.normalized){const g=Tl(Fs[h.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Gn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function bd(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=bl[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ye.workingColorSpace!==St&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),mi(s,e),zy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Iy(s,e.targets,t):s})}const Yo=new WeakMap;class ky extends us{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new ka(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,at).catch(n)}decodeDracoFile(e,t,n,i,r=St,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Yo.has(e)){const l=Yo.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Yo.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new Tn;e.index&&t.setIndex(new Lt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,a=i.array,o=i.itemSize,l=new Lt(a,o);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==at)return;const n=new Te;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new ka(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=Hy.toString(),a=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const a=r.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Hy(){let s,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":s=o.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(d){u({draco:d})},DracoDecoderModule(s)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(u=>{const d=u.draco,h=new d.Decoder;try{const p=t(d,h,new Int8Array(l),c),_=p.attributes.map(g=>g.array.buffer);p.index&&_.push(p.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:p},_)}catch(p){console.error(p),self.postMessage({type:"error",id:o.id,error:p.message})}finally{d.destroy(h)}});break}};function t(a,o,l,c){const u=c.attributeIDs,d=c.attributeTypes;let h,p;const _=o.GetEncodedGeometryType(l);if(_===a.TRIANGULAR_MESH)h=new a.Mesh,p=o.DecodeArrayToMesh(l,l.byteLength,h);else if(_===a.POINT_CLOUD)h=new a.PointCloud,p=o.DecodeArrayToPointCloud(l,l.byteLength,h);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||h.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const g={index:null,attributes:[]};for(const m in u){const f=self[d[m]];let x,v;if(c.useUniqueIDs)v=u[m],x=o.GetAttributeByUniqueId(h,v);else{if(v=o.GetAttributeId(h,a[u[m]]),v===-1)continue;x=o.GetAttribute(h,v)}const y=i(a,o,h,m,f,x);m==="color"&&(y.vertexColorSpace=c.vertexColorSpace),g.attributes.push(y)}return _===a.TRIANGULAR_MESH&&(g.index=n(a,o,h)),a.destroy(h),g}function n(a,o,l){const u=l.num_faces()*3,d=u*4,h=a._malloc(d);o.GetTrianglesUInt32Array(l,d,h);const p=new Uint32Array(a.HEAPF32.buffer,h,u).slice();return a._free(h),{array:p,itemSize:1}}function i(a,o,l,c,u,d){const h=d.num_components(),_=l.num_points()*h,g=_*u.BYTES_PER_ELEMENT,m=r(a,u),f=a._malloc(g);o.GetAttributeDataArrayForAllPoints(l,d,m,g,f);const x=new u(a.HEAPF32.buffer,f,_).slice();return a._free(f),{name:c,array:x,itemSize:h}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */let or=class Ca{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Ca.nextNameID=Ca.nextNameID||0,this.$name.id=`lil-gui-name-${++Ca.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}};class Gy extends or{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function wl(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Vy={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:wl,toHexString:wl},Or={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},Wy={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,e,t=1){const n=Or.fromHexString(s);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([s,e,t],n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return Or.toHexString(i)}},Xy={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const n=Or.fromHexString(s);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:s,g:e,b:t},n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return Or.toHexString(i)}},$y=[Vy,Or,Wy,Xy];function Yy(s){return $y.find(e=>e.match(s))}class qy extends or{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Yy(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=wl(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class qo extends or{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class jy extends or{constructor(e,t,n,i,r,a){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},n=x=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+x),this.$input.value=this.getValue())},i=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x)*-1))},r=x=>{this._inputFocused&&(x.preventDefault(),n(this._step*this._normalizeMouseWheel(x)))};let a=!1,o,l,c,u,d;const h=5,p=x=>{o=x.clientX,l=c=x.clientY,a=!0,u=this.getValue(),d=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",g)},_=x=>{if(a){const v=x.clientX-o,y=x.clientY-l;Math.abs(y)>h?(x.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>h&&g()}if(!a){const v=x.clientY-c;d-=v*this._step*this._arrowKeyMultiplier(x),u+d>this._max?d=this._max-u:u+d<this._min&&(d=this._min-u),this._snapClampSetValue(u+d)}c=x.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(f,x,v,y,b)=>(f-x)/(v-x)*(b-y)+y,t=f=>{const x=this.$slider.getBoundingClientRect();let v=e(f,x.left,x.right,this._min,this._max);this._snapClampSetValue(v)},n=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=f=>{t(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let a=!1,o,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),a=!1},u=f=>{f.touches.length>1||(this._hasScrollBar?(o=f.touches[0].clientX,l=f.touches[0].clientY,a=!0):c(f),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",h))},d=f=>{if(a){const x=f.touches[0].clientX-o,v=f.touches[0].clientY-l;Math.abs(x)>Math.abs(v)?c(f):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",h))}else f.preventDefault(),t(f.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",h)},p=this._callOnFinishChange.bind(this),_=400;let g;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const v=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(p,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Ky extends or{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class Zy extends or{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Jy=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Qy(s){const e=document.createElement("style");e.innerHTML=s;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Td=!1;class oc{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Td&&o&&(Qy(Jy),Td=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=a}add(e,t,n,i,r){if(Object(n)===n)return new Ky(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new jy(this,e,t,n,i,r);case"boolean":return new Gy(this,e,t);case"string":return new Zy(this,e,t);case"function":return new qo(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new qy(this,e,t,n)}addFolder(e){const t=new oc({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof qo||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof qo)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function Jn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Oh(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var dn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ks={duration:.5,overwrite:!1,delay:0},lc,kt,ot,En=1e8,st=1/En,Al=Math.PI*2,eS=Al/4,tS=0,Uh=Math.sqrt,nS=Math.cos,iS=Math.sin,Pt=function(e){return typeof e=="string"},pt=function(e){return typeof e=="function"},si=function(e){return typeof e=="number"},cc=function(e){return typeof e>"u"},Hn=function(e){return typeof e=="object"},Kt=function(e){return e!==!1},uc=function(){return typeof window<"u"},Ta=function(e){return pt(e)||Pt(e)},Fh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ht=Array.isArray,Cl=/(?:-?\.?\d|\.)+/gi,Bh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Is=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,jo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zh=/[+-]=-?[.\d]+/,kh=/[^,'"\[\]\s]+/gi,sS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ct,Dn,Rl,dc,hn={},Ha={},Hh,Gh=function(e){return(Ha=os(e,hn))&&en},hc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ur=function(e,t){return!t&&console.warn(e)},Vh=function(e,t){return e&&(hn[e]=t)&&Ha&&(Ha[e]=t)||hn},Fr=function(){return 0},rS={suppressEvents:!0,isStart:!0,kill:!1},Ra={suppressEvents:!0,kill:!1},aS={suppressEvents:!0},fc={},Ti=[],Ll={},Wh,an={},Ko={},wd=30,La=[],pc="",mc=function(e){var t=e[0],n,i;if(Hn(t)||pt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=La.length;i--&&!La[i].targetTest(t););n=La[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new mf(e[i],n)))||e.splice(i,1);return e},Qi=function(e){return e._gsap||mc(Mn(e))[0]._gsap},Xh=function(e,t,n){return(n=e[t])&&pt(n)?e[t]():cc(n)&&e.getAttribute&&e.getAttribute(t)||n},Zt=function(e,t){return(e=e.split(",")).forEach(t)||e},vt=function(e){return Math.round(e*1e5)/1e5||0},Rt=function(e){return Math.round(e*1e7)/1e7||0},Bs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},oS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ga=function(){var e=Ti.length,t=Ti.slice(0),n,i;for(Ll={},Ti.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},$h=function(e,t,n,i){Ti.length&&!kt&&Ga(),e.render(t,n,kt&&t<0&&(e._initted||e._startAt)),Ti.length&&!kt&&Ga()},Yh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(kh).length<2?t:Pt(e)?e.trim():e},qh=function(e){return e},bn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},lS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},os=function(e,t){for(var n in t)e[n]=t[n];return e},Ad=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Hn(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Va=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ar=function(e){var t=e.parent||ct,n=e.keyframes?lS(Ht(e.keyframes)):bn;if(Kt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},cS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},jh=function(e,t,n,i,r){var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},to=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Ci=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},es=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},uS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Pl=function(e,t,n,i){return e._startAt&&(kt?e._startAt.revert(Ra):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},dS=function s(e){return!e||e._ts&&s(e.parent)},Cd=function(e){return e._repeat?Zs(e._tTime,e=e.duration()+e._rDelay)*e:0},Zs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Wa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},no=function(e){return e._end=Rt(e._start+(e._tDur/Math.abs(e._ts||e._rts||st)||0))},io=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Rt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),no(e),n._dirty||es(n,e)),e},Kh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Wa(e.rawTime(),t),(!t._dur||Yr(0,t.totalDuration(),n)-t._tTime>st)&&t.render(n,!0)),es(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-st}},Un=function(e,t,n,i){return t.parent&&Ci(t),t._start=Rt((si(n)?n:n||e!==ct?mn(e,n,t):e._time)+t._delay),t._end=Rt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),jh(e,t,"_first","_last",e._sort?"_start":0),Dl(t)||(e._recent=t),i||Kh(e,t),e._ts<0&&io(e,e._tTime),e},Zh=function(e,t){return(hn.ScrollTrigger||hc("scrollTrigger",t))&&hn.ScrollTrigger.create(t,e)},Jh=function(e,t,n,i,r){if(_c(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!kt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Wh!==ln.frame)return Ti.push(e),e._lazy=[r,i],1},hS=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Dl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},fS=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&hS(e)&&!(!e._initted&&Dl(e))||(e._ts<0||e._dp._ts<0)&&!Dl(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=Yr(0,e._tDur,t),u=Zs(l,o),e._yoyo&&u&1&&(a=1-a),u!==Zs(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||kt||i||e._zTime===st||!t&&e._zTime){if(!e._initted&&Jh(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?st:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Pl(e,t,n,!0),e._onUpdate&&!n&&cn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&cn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ci(e,1),!n&&!kt&&(cn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},pS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Js=function(e,t,n,i){var r=e._repeat,a=Rt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Rt(a*(r+1)+e._rDelay*r):a,o>0&&!i&&io(e,e._tTime=e._tDur*o),e.parent&&no(e),n||es(e.parent,e),e},Rd=function(e){return e instanceof Yt?es(e):Js(e,e._dur)},mS={_start:0,endTime:Fr,totalDuration:Fr},mn=function s(e,t,n){var i=e.labels,r=e._recent||mS,a=e.duration()>=En?r.endTime(!1):e._dur,o,l,c;return Pt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Ht(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Cr=function(e,t,n){var i=si(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Kt(l.vars.inherit)&&l.parent;a.immediateRender=Kt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new yt(t[0],a,t[r+1])},Pi=function(e,t){return e||e===0?t(e):t},Yr=function(e,t,n){return n<e?e:n>t?t:n},zt=function(e,t){return!Pt(e)||!(t=sS.exec(e))?"":t[1]},gS=function(e,t,n){return Pi(n,function(i){return Yr(e,t,i)})},Il=[].slice,Qh=function(e,t){return e&&Hn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Hn(e[0]))&&!e.nodeType&&e!==Dn},_S=function(e,t,n){return n=[],e.forEach(function(i){var r;return Pt(i)&&!t||Qh(i,1)?(r=n).push.apply(r,Mn(i)):n.push(i)})||n},Mn=function(e,t,n){return ot&&!t&&ot.selector?ot.selector(e):Pt(e)&&!n&&(Rl||!Qs())?Il.call((t||dc).querySelectorAll(e),0):Ht(e)?_S(e,n):Qh(e)?Il.call(e,0):e?[e]:[]},Nl=function(e){return e=Mn(e)[0]||Ur("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Mn(t,n.querySelectorAll?n:n===e?Ur("Invalid scope")||dc.createElement("div"):e)}},ef=function(e){return e.sort(function(){return .5-Math.random()})},tf=function(e){if(pt(e))return e;var t=Hn(e)?e:{each:e},n=ts(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return Pt(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,p,_){var g=(_||t).length,m=a[g],f,x,v,y,b,M,T,C,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,En])[1],!S){for(T=-En;T<(T=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=a[g]=[],f=l?Math.min(S,g)*u-.5:i%S,x=S===En?0:l?g*d/S-.5:i/S|0,T=0,C=En,M=0;M<g;M++)v=M%S-f,y=x-(M/S|0),m[M]=b=c?Math.abs(c==="y"?y:v):Uh(v*v+y*y),b>T&&(T=b),b<C&&(C=b);i==="random"&&ef(m),m.max=T-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=zt(t.amount||t.each)||0,n=n&&g<0?hf(n):n}return g=(m[h]-m.min)/m.max||0,Rt(m.b+(n?n(g):g)*m.v)+m.u}},Ol=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Rt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(si(n)?0:zt(n))}},nf=function(e,t){var n=Ht(e),i,r;return!n&&Hn(e)&&(i=n=e.radius||En,e.values?(e=Mn(e.values),(r=!si(e[0]))&&(i*=i)):e=Ol(e.increment)),Pi(t,n?pt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=En,u=0,d=e.length,h,p;d--;)r?(h=e[d].x-o,p=e[d].y-l,h=h*h+p*p):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:a,r||u===a||si(a)?u:u+zt(a)}:Ol(e))},sf=function(e,t,n,i){return Pi(Ht(e)?!t:n===!0?!!(n=0):!i,function(){return Ht(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},vS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},xS=function(e,t){return function(n){return e(parseFloat(n))+(t||zt(n))}},yS=function(e,t,n){return af(e,t,0,1,n)},rf=function(e,t,n){return Pi(n,function(i){return e[~~t(i)]})},SS=function s(e,t,n){var i=t-e;return Ht(e)?rf(e,s(0,e.length),t):Pi(n,function(r){return(i+(r-e)%i)%i+e})},ES=function s(e,t,n){var i=t-e,r=i*2;return Ht(e)?rf(e,s(0,e.length-1),t):Pi(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Br=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?kh:Cl),n+=e.substr(t,i-t)+sf(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},af=function(e,t,n,i,r){var a=t-e,o=i-n;return Pi(r,function(l){return n+((l-e)/a*o||0)})},MS=function s(e,t,n,i){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var a=Pt(e),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Ht(e)&&!Ht(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(s(e[c-1],e[c]));d--,r=function(_){_*=d;var g=Math.min(h,~~_);return u[g](_-g)},n=t}else i||(e=os(Ht(e)?[]:{},e));if(!u){for(l in t)gc.call(o,e,l,"get",t[l]);r=function(_){return yc(_,o)||(a?e.p:e)}}}return Pi(n,r)},Ld=function(e,t,n){var i=e.labels,r=En,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},cn=function(e,t,n){var i=e.vars,r=i[t],a=ot,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ti.length&&Ga(),o&&(ot=o),u=l?r.apply(c,l):r.call(c),ot=a,u},xr=function(e){return Ci(e),e.scrollTrigger&&e.scrollTrigger.kill(!!kt),e.progress()<1&&cn(e,"onInterrupt"),e},Ns,of=[],lf=function(e){if(e)if(e=!e.name&&e.default||e,uc()||e.headless){var t=e.name,n=pt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Fr,render:yc,add:gc,kill:zS,modifier:BS,rawVars:0},a={targetTest:0,get:0,getSetter:xc,aliases:{},register:0};if(Qs(),e!==i){if(an[t])return;bn(i,bn(Va(e,r),a)),os(i.prototype,os(r,Va(e,a))),an[i.prop=t]=i,e.targetTest&&(La.push(i),fc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Vh(t,i),e.register&&e.register(en,i,Jt)}else of.push(e)},Qe=255,yr={aqua:[0,Qe,Qe],lime:[0,Qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qe],navy:[0,0,128],white:[Qe,Qe,Qe],olive:[128,128,0],yellow:[Qe,Qe,0],orange:[Qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qe,0,0],pink:[Qe,192,203],cyan:[0,Qe,Qe],transparent:[Qe,Qe,Qe,0]},Zo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Qe+.5|0},cf=function(e,t,n){var i=e?si(e)?[e>>16,e>>8&Qe,e&Qe]:0:yr.black,r,a,o,l,c,u,d,h,p,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),yr[e])i=yr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Qe,i&Qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Qe,e&Qe]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Cl),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=Zo(l+1/3,r,a),i[1]=Zo(l,r,a),i[2]=Zo(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Bh),n&&i.length<4&&(i[3]=1),i}else i=e.match(Cl)||yr.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/Qe,a=i[1]/Qe,o=i[2]/Qe,d=Math.max(r,a,o),h=Math.min(r,a,o),u=(d+h)/2,d===h?l=c=0:(p=d-h,c=u>.5?p/(2-d-h):p/(d+h),l=d===r?(a-o)/p+(a<o?6:0):d===a?(o-r)/p+2:(r-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},uf=function(e){var t=[],n=[],i=-1;return e.split(wi).forEach(function(r){var a=r.match(Is)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Pd=function(e,t,n){var i="",r=(e+i).match(wi),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!r)return e;if(r=r.map(function(h){return(h=cf(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=uf(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(wi,"1").split(Is),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(wi),d=c.length-1;o<d;o++)i+=c[o]+r[o];return i+c[d]},wi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in yr)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),bS=/hsl[a]?\(/,df=function(e){var t=e.join(" "),n;if(wi.lastIndex=0,wi.test(t))return n=bS.test(t),e[1]=Pd(e[1],n),e[0]=Pd(e[0],n,uf(e[1])),!0},zr,ln=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,d,h,p,_=function g(m){var f=s()-i,x=m===!0,v,y,b,M;if((f>e||f<0)&&(n+=f-t),i+=f,b=i-n,v=b-a,(v>0||x)&&(M=++d.frame,h=b-d.time*1e3,d.time=b=b/1e3,a+=v+(v>=r?4:r-v),y=1),x||(l=c(g)),y)for(p=0;p<o.length;p++)o[p](b,h,M,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Hh&&(!Rl&&uc()&&(Dn=Rl=window,dc=Dn.document||{},hn.gsap=en,(Dn.gsapVersions||(Dn.gsapVersions=[])).push(en.version),Gh(Ha||Dn.GreenSockGlobals||!Dn.gsap&&Dn||{}),of.forEach(lf)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,a-d.time*1e3+1|0)},zr=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),zr=0,c=Fr},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){r=1e3/(m||240),a=d.time*1e3+r},add:function(m,f,x){var v=f?function(y,b,M,T){m(y,b,M,T),d.remove(v)}:m;return d.remove(m),o[x?"unshift":"push"](v),Qs(),v},remove:function(m,f){~(f=o.indexOf(m))&&o.splice(f,1)&&p>=f&&p--},_listeners:o},d}(),Qs=function(){return!zr&&ln.wake()},$e={},TS=/^[\d.\-M][\d.\-,\s]/,wS=/["']/g,AS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(wS,"").trim():+c,i=l.substr(o+1).trim();return t},CS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},RS=function(e){var t=(e+"").split("("),n=$e[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[AS(t[1])]:CS(e).split(",").map(Yh)):$e._CE&&TS.test(e)?$e._CE("",e):n},hf=function(e){return function(t){return 1-e(1-t)}},ff=function s(e,t){for(var n=e._first,i;n;)n instanceof Yt?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ts=function(e,t){return e&&(pt(e)?e:$e[e]||RS(e))||t},ds=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Zt(e,function(o){$e[o]=hn[o]=r,$e[a=o.toLowerCase()]=n;for(var l in r)$e[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=$e[o+"."+l]=r[l]}),r},pf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Jo=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Al*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*iS((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:pf(o);return r=Al/r,l.config=function(c,u){return s(e,c,u)},l},Qo=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:pf(n);return i.config=function(r){return s(e,r)},i};Zt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;ds(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});$e.Linear.easeNone=$e.none=$e.Linear.easeIn;ds("Elastic",Jo("in"),Jo("out"),Jo());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};ds("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);ds("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});ds("Circ",function(s){return-(Uh(1-s*s)-1)});ds("Sine",function(s){return s===1?1:-nS(s*eS)+1});ds("Back",Qo("in"),Qo("out"),Qo());$e.SteppedEase=$e.steps=hn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-st;return function(o){return((i*Yr(0,a,o)|0)+r)*n}}};Ks.ease=$e["quad.out"];Zt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return pc+=s+","+s+"Params,"});var mf=function(e,t){this.id=tS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Xh,this.set=t?t.getSetter:xc},kr=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Js(this,+t.duration,1,1),this.data=t.data,ot&&(this._ctx=ot,ot.data.push(this)),zr||ln.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Js(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Qs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(io(this,n),!r._dp||r.parent||Kh(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Un(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===st||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),$h(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Cd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Cd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Zs(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-st?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Wa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-st?0:this._rts,this.totalTime(Yr(-Math.abs(this._delay),this._tDur,r),i!==!1),no(this),uS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==st&&(this._tTime-=st)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Un(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Kt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=aS);var i=kt;return kt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),kt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Rd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Rd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(mn(this,n),Kt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Kt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-st:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-st,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-st)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=pt(n)?n:qh,o=function(){var c=i.then;i.then=null,pt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){xr(this)},s}();bn(kr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-st,_prom:0,_ps:!1,_rts:1});var Yt=function(s){Oh(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Kt(n.sortChildren),ct&&Un(n.parent||ct,Jn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Zh(Jn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Cr(0,arguments,this),this},t.from=function(i,r,a){return Cr(1,arguments,this),this},t.fromTo=function(i,r,a,o){return Cr(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Ar(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new yt(i,r,mn(this,a),1),this},t.call=function(i,r,a){return Un(this,yt.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new yt(i,a,mn(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,Ar(a).immediateRender=Kt(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},t.staggerFromTo=function(i,r,a,o,l,c,u,d){return o.startAt=a,Ar(o).immediateRender=Kt(o.immediateRender),this.staggerTo(i,r,o,l,c,u,d)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Rt(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,p,_,g,m,f,x,v,y,b,M,T;if(this!==ct&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,y=this._start,v=this._ts,f=!v,d&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(h=Rt(u%m),u===l?(g=this._repeat,h=c):(g=~~(u/m),g&&g===u/m&&(h=c,g--),h>c&&(h=c)),b=Zs(this._tTime,m),!o&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),M&&g&1&&(h=c-h,T=1),g!==b&&!this._lock){var C=M&&b&1,S=C===(M&&g&1);if(g<b&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(T?0:Rt(g*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&cn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;ff(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=pS(this,Rt(o),Rt(h)),x&&(u-=h-(h=x._start))),this._tTime=u,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!r&&!g&&(cn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||h>=p._start)&&p._ts&&x!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,r,a),h!==this._time||!this._ts&&!f){x=0,_&&(u+=this._zTime=-st);break}}p=_}else{p=this._last;for(var E=i<0?i:h;p;){if(_=p._prev,(p._act||E<=p._end)&&p._ts&&x!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(E-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(E-p._start)*p._ts,r,a||kt&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!f){x=0,_&&(u+=this._zTime=E?-st:st);break}}p=_}}if(x&&!r&&(this.pause(),x.render(h>=o?0:-st)._zTime=h>=o?1:-1,this._ts))return this._start=y,no(this),this.render(i,r,a);this._onUpdate&&!r&&cn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ci(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(cn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(si(r)||(r=mn(this,r,i)),!(i instanceof kr)){if(Ht(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Pt(i))return this.addLabel(i,r);if(pt(i))i=yt.delayedCall(0,i);else return this}return this!==i?Un(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-En);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof yt?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return Pt(i)?this.removeLabel(i):pt(i)?this.killTweensOf(i):(to(this,i),i===this._recent&&(this._recent=this._last),es(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rt(ln.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=mn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=yt.delayedCall(0,r||Fr,a);return o.data="isPause",this._hasPause=1,Un(this,o,mn(this,i))},t.removePause=function(i){var r=this._first;for(i=mn(this,i);r;)r._start===i&&r.data==="isPause"&&Ci(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)vi!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=Mn(i),l=this._first,c=si(r),u;l;)l instanceof yt?oS(l._targets,o)&&(c?(!vi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=mn(a,i),l=r,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,p,_=yt.to(a,bn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||st,onStart:function(){if(a.pause(),!p){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Js(_,m,0,1).render(_._time,!0,!0),p=1}u&&u.apply(_,d||[])}},r));return h?_.render(0):_},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,bn({startAt:{time:mn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Ld(this,mn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Ld(this,mn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+st)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return es(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),es(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=En,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Un(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Js(a,a===ct&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(ct._ts&&($h(ct,Wa(i,ct)),Wh=ln.frame),ln.frame>=wd){wd+=dn.autoSleep||120;var r=ct._first;if((!r||!r._ts)&&dn.autoSleep&&ln._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ln.sleep()}}},e}(kr);bn(Yt.prototype,{_lock:0,_hasPause:0,_forcing:0});var LS=function(e,t,n,i,r,a,o){var l=new Jt(this._pt,e,t,0,1,Sf,null,r),c=0,u=0,d,h,p,_,g,m,f,x;for(l.b=n,l.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=Br(i)),a&&(x=[n,i],a(x,e,t),n=x[0],i=x[1]),h=n.match(jo)||[];d=jo.exec(i);)_=d[0],g=i.substring(c,d.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Bs(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},c=jo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(zh.test(i)||f)&&(l.e=0),this._pt=l,l},gc=function(e,t,n,i,r,a,o,l,c,u){pt(i)&&(i=i(r||0,e,a));var d=e[t],h=n!=="get"?n:pt(d)?c?e[t.indexOf("set")||!pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,p=pt(d)?c?OS:xf:vc,_;if(Pt(i)&&(~i.indexOf("random(")&&(i=Br(i)),i.charAt(1)==="="&&(_=Bs(h,i)+(zt(h)||0),(_||_===0)&&(i=_))),!u||h!==i||Ul)return!isNaN(h*i)&&i!==""?(_=new Jt(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?FS:yf,0,p),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(t in e)&&hc(t,i),LS.call(this,e,t,h,i,p,l||dn.stringFilter,c))},PS=function(e,t,n,i,r){if(pt(e)&&(e=Rr(e,r,t,n,i)),!Hn(e)||e.style&&e.nodeType||Ht(e)||Fh(e))return Pt(e)?Rr(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=Rr(e[o],r,t,n,i);return a},gf=function(e,t,n,i,r,a){var o,l,c,u;if(an[e]&&(o=new an[e]).init(r,o.rawVars?t[e]:PS(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Jt(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Ns))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},vi,Ul,_c=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,p=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,f=e.parent,x=f&&f.data==="nested"?f.vars.targets:m,v=e._overwrite==="auto"&&!lc,y=e.timeline,b,M,T,C,S,E,N,P,D,A,O,F,I;if(y&&(!h||!r)&&(r="none"),e._ease=ts(r,Ks.ease),e._yEase=d?hf(ts(d===!0?r:d,Ks.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!i.runBackwards,!y||h&&!i.stagger){if(P=m[0]?Qi(m[0]).harness:0,F=P&&i[P.prop],b=Va(i,fc),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!p?g.render(-1,!0):g.revert(u&&_?Ra:rS),g._lazy=0),a){if(Ci(e._startAt=yt.set(m,bn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!g&&Kt(l),startAt:null,delay:0,onUpdate:c&&function(){return cn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(kt||!o&&!p)&&e._startAt.revert(Ra),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),T=bn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Kt(l),immediateRender:o,stagger:0,parent:f},b),F&&(T[P.prop]=F),Ci(e._startAt=yt.set(m,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(kt?e._startAt.revert(Ra):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,st,st);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Kt(l)||l&&!_,M=0;M<m.length;M++){if(S=m[M],N=S._gsap||mc(m)[M]._gsap,e._ptLookup[M]=A={},Ll[N.id]&&Ti.length&&Ga(),O=x===m?M:x.indexOf(S),P&&(D=new P).init(S,F||b,e,O,x)!==!1&&(e._pt=C=new Jt(e._pt,S,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(U){A[U]=C}),D.priority&&(E=1)),!P||F)for(T in b)an[T]&&(D=gf(T,b,e,O,S,x))?D.priority&&(E=1):A[T]=C=gc.call(e,S,T,"get",b[T],O,x,0,i.stringFilter);e._op&&e._op[M]&&e.kill(S,e._op[M]),v&&e._pt&&(vi=e,ct.killTweensOf(S,A,e.globalTime(t)),I=!e.parent,vi=0),e._pt&&l&&(Ll[N.id]=1)}E&&Ef(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!I,h&&t<=0&&y.render(En,!0,!0)},DS=function(e,t,n,i,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,p;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(u=h[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ul=1,e.vars[t]="+=0",_c(e,o),Ul=0,l?Ur(t+" not eligible for reset"):1;c.push(u)}for(p=c.length;p--;)d=c[p],u=d._pt||d,u.s=(i||i===0)&&!r?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=vt(n)+zt(d.e)),d.b&&(d.b=u.s+zt(d.b))},IS=function(e,t){var n=e[0]?Qi(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=os({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},NS=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(Ht(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},Rr=function(e,t,n,i,r){return pt(e)?e.call(t,n,i,r):Pt(e)&&~e.indexOf("random(")?Br(e):e},_f=pc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",vf={};Zt(_f+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return vf[s]=1});var yt=function(s){Oh(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Ar(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,x=i.parent||ct,v=(Ht(n)||Fh(n)?si(n[0]):"length"in i)?[n]:Mn(n),y,b,M,T,C,S,E,N;if(o._targets=v.length?mc(v):Ur("GSAP target "+n+" not found. https://gsap.com",!dn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||h||Ta(c)||Ta(u)){if(i=o.vars,y=o.timeline=new Yt({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:v}),y.kill(),y.parent=y._dp=Jn(o),y._start=0,h||Ta(c)||Ta(u)){if(T=v.length,E=h&&tf(h),Hn(h))for(C in h)~_f.indexOf(C)&&(N||(N={}),N[C]=h[C]);for(b=0;b<T;b++)M=Va(i,vf),M.stagger=0,f&&(M.yoyoEase=f),N&&os(M,N),S=v[b],M.duration=+Rr(c,Jn(o),b,S,v),M.delay=(+Rr(u,Jn(o),b,S,v)||0)-o._delay,!h&&T===1&&M.delay&&(o._delay=u=M.delay,o._start+=u,M.delay=0),y.to(S,M,E?E(b,S,v):0),y._ease=$e.none;y.duration()?c=u=0:o.timeline=0}else if(_){Ar(bn(y.vars.defaults,{ease:"none"})),y._ease=ts(_.ease||i.ease||"none");var P=0,D,A,O;if(Ht(_))_.forEach(function(F){return y.to(v,F,">")}),y.duration();else{M={};for(C in _)C==="ease"||C==="easeEach"||NS(C,_[C],M,_.easeEach);for(C in M)for(D=M[C].sort(function(F,I){return F.t-I.t}),P=0,b=0;b<D.length;b++)A=D[b],O={ease:A.e,duration:(A.t-(b?D[b-1].t:0))/100*c},O[C]=A.v,y.to(v,O,P),P+=O.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return p===!0&&!lc&&(vi=Jn(o),ct.killTweensOf(v),vi=0),Un(x,Jn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!_&&o._start===Rt(x._time)&&Kt(d)&&dS(Jn(o))&&x.data!=="nested")&&(o._tTime=-st,o.render(Math.max(0,-u)||0)),m&&Zh(Jn(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-st&&!u?l:i<st?0:i,h,p,_,g,m,f,x,v,y;if(!c)fS(this,i,r,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=d,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,a);if(h=Rt(d%g),d===l?(_=this._repeat,h=c):(_=~~(d/g),_&&_===Rt(d/g)&&(h=c,_--),h>c&&(h=c)),f=this._yoyo&&_&1,f&&(y=this._yEase,h=c-h),m=Zs(this._tTime,g),h===o&&!a&&this._initted&&_===m)return this._tTime=d,this;_!==m&&(v&&this._yEase&&ff(v,f),this.vars.repeatRefresh&&!f&&!this._lock&&this._time!==g&&this._initted&&(this._lock=a=1,this.render(Rt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Jh(this,u?i:h,a,r,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(h/c),this._from&&(this.ratio=x=1-x),h&&!o&&!r&&!_&&(cn(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(x,p.d),p=p._next;v&&v.render(i<0?i:v._dur*v._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Pl(this,i,r,a),cn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&cn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Pl(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ci(this,1),!r&&!(u&&!o)&&(d||o||f)&&(cn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,l){zr||ln.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||_c(this,c),u=this._ease(c/this._dur),DS(this,i,r,a,o,u,c,l)?this.resetTo(i,r,a,o,1):(io(this,0),this.parent||jh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?xr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,vi&&vi.vars.overwrite!==!0)._first||xr(this),this.parent&&a!==this.timeline.totalDuration()&&Js(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Mn(i):o,c=this._ptLookup,u=this._pt,d,h,p,_,g,m,f;if((!r||r==="all")&&cS(o,l))return r==="all"&&(this._pt=0),xr(this);for(d=this._op=this._op||[],r!=="all"&&(Pt(r)&&(g={},Zt(r,function(x){return g[x]=1}),r=g),r=IS(o,r)),f=o.length;f--;)if(~l.indexOf(o[f])){h=c[f],r==="all"?(d[f]=r,_=h,p={}):(p=d[f]=d[f]||{},_=r);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&to(this,m,"_pt"),delete h[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&u&&xr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Cr(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return Cr(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return ct.killTweensOf(i,r,a)},e}(kr);bn(yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Zt("staggerTo,staggerFrom,staggerFromTo",function(s){yt[s]=function(){var e=new Yt,t=Il.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var vc=function(e,t,n){return e[t]=n},xf=function(e,t,n){return e[t](n)},OS=function(e,t,n,i){return e[t](i.fp,n)},US=function(e,t,n){return e.setAttribute(t,n)},xc=function(e,t){return pt(e[t])?xf:cc(e[t])&&e.setAttribute?US:vc},yf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},FS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Sf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},yc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},BS=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},zS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?to(this,t,"_pt"):t.dep||(n=1),t=i;return!n},kS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Ef=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Jt=function(){function s(t,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||yf,this.d=l||this,this.set=c||vc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=kS,this.m=n,this.mt=r,this.tween=i},s}();Zt(pc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return fc[s]=1});hn.TweenMax=hn.TweenLite=yt;hn.TimelineLite=hn.TimelineMax=Yt;ct=new Yt({sortChildren:!1,defaults:Ks,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});dn.stringFilter=df;var ns=[],Pa={},HS=[],Dd=0,GS=0,el=function(e){return(Pa[e]||HS).map(function(t){return t()})},Fl=function(){var e=Date.now(),t=[];e-Dd>2&&(el("matchMediaInit"),ns.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Dn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),el("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Dd=e,el("matchMedia"))},Mf=function(){function s(t,n){this.selector=n&&Nl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=GS++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){pt(n)&&(r=i,i=n,n=pt);var a=this,o=function(){var c=ot,u=a.selector,d;return c&&c!==a&&c.data.push(a),r&&(a.selector=Nl(r)),ot=a,d=i.apply(a,arguments),pt(d)&&a._r.push(d),ot=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===pt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=ot;ot=null,n(this),ot=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof yt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Yt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof yt)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ns.length;a--;)ns[a].id===this.id&&ns.splice(a,1)},e.revert=function(n){this.kill(n||{})},s}(),VS=function(){function s(t){this.contexts=[],this.scope=t,ot&&ot.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Hn(n)||(n={matches:n});var a=new Mf(0,r||this.scope),o=a.conditions={},l,c,u;ot&&!a.selector&&(a.selector=ot.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Dn.matchMedia(n[c]),l&&(ns.indexOf(a)<0&&ns.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Fl):l.addEventListener("change",Fl)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Xa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return lf(i)})},timeline:function(e){return new Yt(e)},getTweensOf:function(e,t){return ct.getTweensOf(e,t)},getProperty:function(e,t,n,i){Pt(e)&&(e=Mn(e)[0]);var r=Qi(e||{}).get,a=n?qh:Yh;return n==="native"&&(n=""),e&&(t?a((an[t]&&an[t].get||r)(e,t,n,i)):function(o,l,c){return a((an[o]&&an[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Mn(e),e.length>1){var i=e.map(function(u){return en.quickSetter(u,t,n)}),r=i.length;return function(u){for(var d=r;d--;)i[d](u)}}e=e[0]||{};var a=an[t],o=Qi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;Ns._pt=0,d.init(e,n?u+n:u,Ns,0,[e]),d.render(1,d),Ns._pt&&yc(1,Ns)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=en.to(e,os((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return ct.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ts(e.ease,Ks.ease)),Ad(Ks,e||{})},config:function(e){return Ad(dn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!an[o]&&!hn[o]&&Ur(t+" effect requires "+o+" plugin.")}),Ko[t]=function(o,l,c){return n(Mn(o),bn(l||{},r),c)},a&&(Yt.prototype[t]=function(o,l,c){return this.add(Ko[t](o,Hn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){$e[e]=ts(t)},parseEase:function(e,t){return arguments.length?ts(e,t):$e},getById:function(e){return ct.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Yt(e),i,r;for(n.smoothChildTiming=Kt(e.smoothChildTiming),ct.remove(n),n._dp=0,n._time=n._tTime=ct._time,i=ct._first;i;)r=i._next,(t||!(!i._dur&&i instanceof yt&&i.vars.onComplete===i._targets[0]))&&Un(n,i,i._start-i._delay),i=r;return Un(ct,n,0),n},context:function(e,t){return e?new Mf(e,t):ot},matchMedia:function(e){return new VS(e)},matchMediaRefresh:function(){return ns.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Fl()},addEventListener:function(e,t){var n=Pa[e]||(Pa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Pa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:SS,wrapYoyo:ES,distribute:tf,random:sf,snap:nf,normalize:yS,getUnit:zt,clamp:gS,splitColor:cf,toArray:Mn,selector:Nl,mapRange:af,pipe:vS,unitize:xS,interpolate:MS,shuffle:ef},install:Gh,effects:Ko,ticker:ln,updateRoot:Yt.updateRoot,plugins:an,globalTimeline:ct,core:{PropTween:Jt,globals:Vh,Tween:yt,Timeline:Yt,Animation:kr,getCache:Qi,_removeLinkedListItem:to,reverting:function(){return kt},context:function(e){return e&&ot&&(ot.data.push(e),e._ctx=ot),ot},suppressOverwrites:function(e){return lc=e}}};Zt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Xa[s]=yt[s]});ln.add(Yt.updateRoot);Ns=Xa.to({},{duration:0});var WS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},XS=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=WS(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},tl=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Pt(r)&&(l={},Zt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}XS(o,r)}}}},en=Xa.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)kt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},tl("roundProps",Ol),tl("modifiers"),tl("snap",nf))||Xa;yt.version=Yt.version=en.version="3.12.5";Hh=1;uc()&&Qs();$e.Power0;$e.Power1;$e.Power2;$e.Power3;$e.Power4;$e.Linear;$e.Quad;$e.Cubic;$e.Quart;$e.Quint;$e.Strong;$e.Elastic;$e.Back;$e.SteppedEase;$e.Bounce;$e.Sine;$e.Expo;$e.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Id,xi,zs,Sc,ji,Nd,Ec,$S=function(){return typeof window<"u"},ri={},Vi=180/Math.PI,ks=Math.PI/180,Ls=Math.atan2,Od=1e8,Mc=/([A-Z])/g,YS=/(left|right|width|margin|padding|x)/i,qS=/[\s,\(]\S/,Fn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Bl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},KS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ZS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},bf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Tf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},JS=function(e,t,n){return e.style[t]=n},QS=function(e,t,n){return e.style.setProperty(t,n)},eE=function(e,t,n){return e._gsap[t]=n},tE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},nE=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},iE=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},ut="transform",Qt=ut+"Origin",sE=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in ri&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Fn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Qn(i,o)}):this.tfm[e]=a.x?a[e]:Qn(i,e),e===Qt&&(this.tfm.zOrigin=a.zOrigin);else return Fn.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(ut)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Qt,t,"")),e=ut}(r||t)&&this.props.push(e,t,r[e])},wf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},rE=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Mc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Ec(),(!r||!r.isStart)&&!n[ut]&&(wf(n),i.zOrigin&&n[Qt]&&(n[Qt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Af=function(e,t){var n={target:e,props:[],revert:rE,save:sE};return e._gsap||en.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Cf,zl=function(e,t){var n=xi.createElementNS?xi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):xi.createElement(e);return n&&n.style?n:xi.createElement(e)},kn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Mc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,er(t)||t,1)||""},Ud="O,Moz,ms,Ms,Webkit".split(","),er=function(e,t,n){var i=t||ji,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Ud[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Ud[a]:"")+e},kl=function(){$S()&&window.document&&(Id=window,xi=Id.document,zs=xi.documentElement,ji=zl("div")||{style:{}},zl("div"),ut=er(ut),Qt=ut+"Origin",ji.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Cf=!!er("perspective"),Ec=en.core.reverting,Sc=1)},nl=function s(e){var t=zl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(zs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),zs.removeChild(t),this.style.cssText=r,a},Fd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Rf=function(e){var t;try{t=e.getBBox()}catch{t=nl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===nl||(t=nl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Fd(e,["x","cx","x1"])||0,y:+Fd(e,["y","cy","y1"])||0,width:0,height:0}:t},Lf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Rf(e))},ls=function(e,t){if(t){var n=e.style,i;t in ri&&t!==Qt&&(t=ut),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Mc,"-$1").toLowerCase())):n.removeAttribute(t)}},yi=function(e,t,n,i,r,a){var o=new Jt(e._pt,t,n,0,1,a?Tf:bf);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Bd={deg:1,rad:1,turn:1},aE={grid:1,flex:1},Ri=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=ji.style,l=YS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",p=i==="%",_,g,m,f;if(i===a||!r||Bd[i]||Bd[a])return r;if(a!=="px"&&!h&&(r=s(e,t,n,"px")),f=e.getCTM&&Lf(e),(p||a==="%")&&(ri[t]||~t.indexOf("adius")))return _=f?e.getBBox()[l?"width":"height"]:e[u],vt(p?r/_*d:r/100*_);if(o[l?"width":"height"]=d+(h?a:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,f&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===xi||!g.appendChild)&&(g=xi.body),m=g._gsap,m&&p&&m.width&&l&&m.time===ln.time&&!m.uncache)return vt(r/m.width*d);if(p&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=d+i,_=e[u],x?e.style[t]=x:ls(e,t)}else(p||a==="%")&&!aE[kn(g,"display")]&&(o.position=kn(e,"position")),g===e&&(o.position="static"),g.appendChild(ji),_=ji[u],g.removeChild(ji),o.position="absolute";return l&&p&&(m=Qi(g),m.time=ln.time,m.width=g[u]),vt(h?_*r/d:_&&r?d/_*r:0)},Qn=function(e,t,n,i){var r;return Sc||kl(),t in Fn&&t!=="transform"&&(t=Fn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ri[t]&&t!=="transform"?(r=Gr(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ya(kn(e,Qt))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=$a[t]&&$a[t](e,t,n)||kn(e,t)||Xh(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ri(e,t,r,n)+n:r},oE=function(e,t,n,i){if(!n||n==="none"){var r=er(t,e,1),a=r&&kn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=kn(e,"borderTopColor"))}var o=new Jt(this._pt,e.style,t,0,1,Sf),l=0,c=0,u,d,h,p,_,g,m,f,x,v,y,b;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=kn(e,t)||i,g?e.style[t]=g:ls(e,t)),u=[n,i],df(u),n=u[0],i=u[1],h=n.match(Is)||[],b=i.match(Is)||[],b.length){for(;d=Is.exec(i);)m=d[0],x=i.substring(l,d.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),m!==(g=h[c++]||"")&&(p=parseFloat(g)||0,y=g.substr((p+"").length),m.charAt(1)==="="&&(m=Bs(p,m)+y),f=parseFloat(m),v=m.substr((f+"").length),l=Is.lastIndex-v.length,v||(v=v||dn.units[t]||y,l===i.length&&(i+=v,o.e+=v)),y!==v&&(p=Ri(e,t,g,v)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:p,c:f-p,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Tf:bf;return zh.test(i)&&(o.e=0),this._pt=o,o},zd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},lE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=zd[n]||n,t[1]=zd[i]||i,t.join(" ")},cE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],ri[o]&&(l=1,o=o==="transformOrigin"?Qt:ut),ls(n,o);l&&(ls(n,ut),a&&(a.svg&&n.removeAttribute("transform"),Gr(n,1),a.uncache=1,wf(i)))}},$a={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Jt(e._pt,t,n,0,0,cE);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Hr=[1,0,0,1,0,0],Pf={},Df=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},kd=function(e){var t=kn(e,ut);return Df(t)?Hr:t.substr(7).match(Bh).map(vt)},bc=function(e,t){var n=e._gsap||Qi(e),i=e.style,r=kd(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Hr:r):(r===Hr&&!e.offsetParent&&e!==zs&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,zs.appendChild(e)),r=kd(e),l?i.display=l:ls(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):zs.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Hl=function(e,t,n,i,r,a){var o=e._gsap,l=r||bc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],f=l[4],x=l[5],v=t.split(" "),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,M,T,C,S;n?l!==Hr&&(T=p*m-_*g)&&(C=y*(m/T)+b*(-g/T)+(g*x-m*f)/T,S=y*(-_/T)+b*(p/T)-(p*x-_*f)/T,y=C,b=S):(M=Rf(e),y=M.x+(~v[0].indexOf("%")?y/100*M.width:y),b=M.y+(~(v[1]||v[0]).indexOf("%")?b/100*M.height:b)),i||i!==!1&&o.smooth?(f=y-c,x=b-u,o.xOffset=d+(f*p+x*g)-f,o.yOffset=h+(f*_+x*m)-x):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Qt]="0px 0px",a&&(yi(a,o,"xOrigin",c,y),yi(a,o,"yOrigin",u,b),yi(a,o,"xOffset",d,o.xOffset),yi(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},Gr=function(e,t){var n=e._gsap||new mf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=kn(e,Qt)||"0",u,d,h,p,_,g,m,f,x,v,y,b,M,T,C,S,E,N,P,D,A,O,F,I,U,H,X,k,V,z,J,K;return u=d=h=g=m=f=x=v=y=0,p=_=1,n.svg=!!(e.getCTM&&Lf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ut]!=="none"?l[ut]:"")),i.scale=i.rotate=i.translate="none"),T=bc(e,n.svg),n.svg&&(n.uncache?(U=e.getBBox(),c=n.xOrigin-U.x+"px "+(n.yOrigin-U.y)+"px",I=""):I=!t&&e.getAttribute("data-svg-origin"),Hl(e,I||c,!!I||n.originIsAbsolute,n.smooth!==!1,T)),b=n.xOrigin||0,M=n.yOrigin||0,T!==Hr&&(N=T[0],P=T[1],D=T[2],A=T[3],u=O=T[4],d=F=T[5],T.length===6?(p=Math.sqrt(N*N+P*P),_=Math.sqrt(A*A+D*D),g=N||P?Ls(P,N)*Vi:0,x=D||A?Ls(D,A)*Vi+g:0,x&&(_*=Math.abs(Math.cos(x*ks))),n.svg&&(u-=b-(b*N+M*D),d-=M-(b*P+M*A))):(K=T[6],z=T[7],X=T[8],k=T[9],V=T[10],J=T[11],u=T[12],d=T[13],h=T[14],C=Ls(K,V),m=C*Vi,C&&(S=Math.cos(-C),E=Math.sin(-C),I=O*S+X*E,U=F*S+k*E,H=K*S+V*E,X=O*-E+X*S,k=F*-E+k*S,V=K*-E+V*S,J=z*-E+J*S,O=I,F=U,K=H),C=Ls(-D,V),f=C*Vi,C&&(S=Math.cos(-C),E=Math.sin(-C),I=N*S-X*E,U=P*S-k*E,H=D*S-V*E,J=A*E+J*S,N=I,P=U,D=H),C=Ls(P,N),g=C*Vi,C&&(S=Math.cos(C),E=Math.sin(C),I=N*S+P*E,U=O*S+F*E,P=P*S-N*E,F=F*S-O*E,N=I,O=U),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,f=180-f),p=vt(Math.sqrt(N*N+P*P+D*D)),_=vt(Math.sqrt(F*F+K*K)),C=Ls(O,F),x=Math.abs(C)>2e-4?C*Vi:0,y=J?1/(J<0?-J:J):0),n.svg&&(I=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Df(kn(e,ut)),I&&e.setAttribute("transform",I))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(p*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=vt(p),n.scaleY=vt(_),n.rotation=vt(g)+o,n.rotationX=vt(m)+o,n.rotationY=vt(f)+o,n.skewX=x+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Qt]=Ya(c)),n.xOffset=n.yOffset=0,n.force3D=dn.force3D,n.renderTransform=n.svg?dE:Cf?If:uE,n.uncache=0,n},Ya=function(e){return(e=e.split(" "))[0]+" "+e[1]},il=function(e,t,n){var i=zt(t);return vt(parseFloat(t)+parseFloat(Ri(e,"x",n+"px",i)))+i},uE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,If(e,t)},zi="0deg",vr="0px",ki=") ",If=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,f=n.force3D,x=n.target,v=n.zOrigin,y="",b=f==="auto"&&e&&e!==1||f===!0;if(v&&(d!==zi||u!==zi)){var M=parseFloat(u)*ks,T=Math.sin(M),C=Math.cos(M),S;M=parseFloat(d)*ks,S=Math.cos(M),a=il(x,a,T*S*-v),o=il(x,o,-Math.sin(M)*-v),l=il(x,l,C*S*-v+v)}m!==vr&&(y+="perspective("+m+ki),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(b||a!==vr||o!==vr||l!==vr)&&(y+=l!==vr||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ki),c!==zi&&(y+="rotate("+c+ki),u!==zi&&(y+="rotateY("+u+ki),d!==zi&&(y+="rotateX("+d+ki),(h!==zi||p!==zi)&&(y+="skew("+h+", "+p+ki),(_!==1||g!==1)&&(y+="scale("+_+", "+g+ki),x.style[ut]=y||"translate(0, 0)"},dE=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,f=n.yOffset,x=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,M,T,C,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ks,c*=ks,b=Math.cos(l)*d,M=Math.sin(l)*d,T=Math.sin(l-c)*-h,C=Math.cos(l-c)*h,c&&(u*=ks,S=Math.tan(c-u),S=Math.sqrt(1+S*S),T*=S,C*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),b*=S,M*=S)),b=vt(b),M=vt(M),T=vt(T),C=vt(C)):(b=d,C=h,M=T=0),(v&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(v=Ri(p,"x",a,"px"),y=Ri(p,"y",o,"px")),(_||g||m||f)&&(v=vt(v+_-(_*b+g*T)+m),y=vt(y+g-(_*M+g*C)+f)),(i||r)&&(S=p.getBBox(),v=vt(v+i/100*S.width),y=vt(y+r/100*S.height)),S="matrix("+b+","+M+","+T+","+C+","+v+","+y+")",p.setAttribute("transform",S),x&&(p.style[ut]=S)},hE=function(e,t,n,i,r){var a=360,o=Pt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Vi:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=r.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Od)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Od)%a-~~(c/a)*a)),e._pt=h=new Jt(e._pt,t,n,i,c,jS),h.e=u,h.u="deg",e._props.push(n),h},Hd=function(e,t){for(var n in t)e[n]=t[n];return e},fE=function(e,t,n){var i=Hd({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,p,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ut]=t,o=Gr(n,1),ls(n,ut),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ut],a[ut]=t,o=Gr(n,1),a[ut]=c);for(l in ri)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(p=zt(c),_=zt(u),d=p!==_?Ri(n,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new Jt(e._pt,o,l,d,h-d,Bl),e._pt.u=_||0,e._props.push(l));Hd(o,i)};Zt("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});$a[e>1?"border"+s:s]=function(o,l,c,u,d){var h,p;if(arguments.length<4)return h=a.map(function(_){return Qn(o,_,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},a.forEach(function(_,g){return p[_]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(l,p,d)}});var Nf={name:"css",register:kl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,p,_,g,m,f,x,v,y,b,M,T,C;Sc||kl(),this.styles=this.styles||Af(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(an[g]&&gf(g,t,n,i,e,r)))){if(p=typeof u,_=$a[g],p==="function"&&(u=u.call(n,i,e,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Br(u)),_)_(this,e,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",wi.lastIndex=0,wi.test(c)||(m=zt(c),f=zt(u)),f?m!==f&&(c=Ri(e,g,c,f)+f):m&&(u+=m),this.add(o,"setProperty",c,u,i,r,0,0,g),a.push(g),C.push(g,0,o[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],Pt(c)&&~c.indexOf("random(")&&(c=Br(c)),zt(c+"")||c==="auto"||(c+=dn.units[g]||zt(Qn(e,g))||""),(c+"").charAt(1)==="="&&(c=Qn(e,g))):c=Qn(e,g),h=parseFloat(c),x=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),d=parseFloat(u),g in Fn&&(g==="autoAlpha"&&(h===1&&Qn(e,"visibility")==="hidden"&&d&&(h=0),C.push("visibility",0,o.visibility),yi(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Fn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in ri,v){if(this.styles.save(g),y||(b=e._gsap,b.renderTransform&&!t.parseTransform||Gr(e,t.parseTransform),M=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new Jt(this._pt,o,ut,0,1,b.renderTransform,b,0,-1),y.dep=1),g==="scale")this._pt=new Jt(this._pt,b,"scaleY",b.scaleY,(x?Bs(b.scaleY,x+d):d)-b.scaleY||0,Bl),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Qt,0,o[Qt]),u=lE(u),b.svg?Hl(e,u,0,M,0,this):(f=parseFloat(u.split(" ")[2])||0,f!==b.zOrigin&&yi(this,b,"zOrigin",b.zOrigin,f),yi(this,o,g,Ya(c),Ya(u)));continue}else if(g==="svgOrigin"){Hl(e,u,1,M,0,this);continue}else if(g in Pf){hE(this,b,g,h,x?Bs(h,x+u):u);continue}else if(g==="smoothOrigin"){yi(this,b,"smooth",b.smooth,u);continue}else if(g==="force3D"){b[g]=u;continue}else if(g==="transform"){fE(this,u,e);continue}}else g in o||(g=er(g)||g);if(v||(d||d===0)&&(h||h===0)&&!qS.test(u)&&g in o)m=(c+"").substr((h+"").length),d||(d=0),f=zt(u)||(g in dn.units?dn.units[g]:m),m!==f&&(h=Ri(e,g,c,f)),this._pt=new Jt(this._pt,v?b:o,g,h,(x?Bs(h,x+d):d)-h,!v&&(f==="px"||g==="zIndex")&&t.autoRound!==!1?ZS:Bl),this._pt.u=f||0,m!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=KS);else if(g in o)oE.call(this,e,g,c,x?x+u:u);else if(g in e)this.add(e,g,c||e[g],x?x+u:u,i,r);else if(g!=="parseTransform"){hc(g,u);continue}v||(g in o?C.push(g,0,o[g]):C.push(g,1,c||e[g])),a.push(g)}}T&&Ef(this)},render:function(e,t){if(t.tween._time||!Ec())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Qn,aliases:Fn,getSetter:function(e,t,n){var i=Fn[t];return i&&i.indexOf(",")<0&&(t=i),t in ri&&t!==Qt&&(e._gsap.x||Qn(e,"x"))?n&&Nd===n?t==="scale"?tE:eE:(Nd=n||{})&&(t==="scale"?nE:iE):e.style&&!cc(e.style[t])?JS:~t.indexOf("-")?QS:xc(e,t)},core:{_removeProperty:ls,_getMatrix:bc}};en.utils.checkPrefix=er;en.core.getStyleSaver=Af;(function(s,e,t,n){var i=Zt(s+","+e+","+t,function(r){ri[r]=1});Zt(e,function(r){dn.units[r]="deg",Pf[r]=1}),Fn[i[13]]=s+","+e,Zt(n,function(r){var a=r.split(":");Fn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Zt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){dn.units[s]="px"});en.registerPlugin(Nf);var Of=en.registerPlugin(Nf)||en;Of.core.Tween;var pE=`uniform vec2 uResolution;
uniform float uSize;
uniform float uProgress;
uniform vec3 uColorA;
uniform vec3 uColorB;

attribute vec3 aPositionTarget;
attribute float aSize;

varying vec3 vColor;

vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

float simplexNoise3d(vec3 v)
{
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    
    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1. + 3.0 * C.xxx;

    
    i = mod(i, 289.0 ); 
    vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))  + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    
    
    float n_ = 1.0/7.0; 
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
}

void main()
{
    
    float noiseOrigin = simplexNoise3d(position * 0.2);
    float noiseTarget = simplexNoise3d(aPositionTarget * 0.2);
    float noise = mix(noiseOrigin, noiseTarget, uProgress);
    noise = smoothstep(-1.0, 1.0, noise);
    
    float duration = 0.4;
    float delay = (1.0 - duration) * noise;
    float end = delay + duration;
    float progress = smoothstep(delay, end, uProgress);
    vec3 mixedPosition = mix(position, aPositionTarget, progress);

    
    vec4 modelPosition = modelMatrix * vec4(mixedPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    
    gl_PointSize = aSize * uSize * uResolution.y;
    gl_PointSize *= (1.0 / - viewPosition.z);

    
    vColor = mix(uColorA, uColorB, noise);
}`,mE=`varying vec3 vColor;

void main()
{
    vec2 uv = gl_PointCoord;
    float distanceToCenter = length(uv - 0.5);
    float alpha = 0.05 / distanceToCenter - 0.1;
    
    gl_FragColor = vec4(vColor, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`;function Gd(s){return s!==null&&typeof s=="object"&&"constructor"in s&&s.constructor===Object}function Tc(s,e){s===void 0&&(s={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{typeof s[t]>"u"?s[t]=e[t]:Gd(e[t])&&Gd(s[t])&&Object.keys(e[t]).length>0&&Tc(s[t],e[t])})}const Uf={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Nt(){const s=typeof document<"u"?document:{};return Tc(s,Uf),s}const gE={document:Uf,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(s){return typeof setTimeout>"u"?(s(),null):setTimeout(s,0)},cancelAnimationFrame(s){typeof setTimeout>"u"||clearTimeout(s)}};function mt(){const s=typeof window<"u"?window:{};return Tc(s,gE),s}function pi(s){return s===void 0&&(s=""),s.trim().split(" ").filter(e=>!!e.trim())}function _E(s){const e=s;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function cs(s,e){return e===void 0&&(e=0),setTimeout(s,e)}function yn(){return Date.now()}function vE(s){const e=mt();let t;return e.getComputedStyle&&(t=e.getComputedStyle(s,null)),!t&&s.currentStyle&&(t=s.currentStyle),t||(t=s.style),t}function Gl(s,e){e===void 0&&(e="x");const t=mt();let n,i,r;const a=vE(s);return t.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(o=>o.replace(",",".")).join(", ")),r=new t.WebKitCSSMatrix(i==="none"?"":i)):(r=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=r.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?i=r.m41:n.length===16?i=parseFloat(n[12]):i=parseFloat(n[4])),e==="y"&&(t.WebKitCSSMatrix?i=r.m42:n.length===16?i=parseFloat(n[13]):i=parseFloat(n[5])),i||0}function Sr(s){return typeof s=="object"&&s!==null&&s.constructor&&Object.prototype.toString.call(s).slice(8,-1)==="Object"}function xE(s){return typeof window<"u"&&typeof window.HTMLElement<"u"?s instanceof HTMLElement:s&&(s.nodeType===1||s.nodeType===11)}function on(){const s=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const n=t<0||arguments.length<=t?void 0:arguments[t];if(n!=null&&!xE(n)){const i=Object.keys(Object(n)).filter(r=>e.indexOf(r)<0);for(let r=0,a=i.length;r<a;r+=1){const o=i[r],l=Object.getOwnPropertyDescriptor(n,o);l!==void 0&&l.enumerable&&(Sr(s[o])&&Sr(n[o])?n[o].__swiper__?s[o]=n[o]:on(s[o],n[o]):!Sr(s[o])&&Sr(n[o])?(s[o]={},n[o].__swiper__?s[o]=n[o]:on(s[o],n[o])):s[o]=n[o])}}}return s}function Er(s,e,t){s.style.setProperty(e,t)}function Ff(s){let{swiper:e,targetPosition:t,side:n}=s;const i=mt(),r=-e.translate;let a=null,o;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const c=t>r?"next":"prev",u=(h,p)=>c==="next"&&h>=p||c==="prev"&&h<=p,d=()=>{o=new Date().getTime(),a===null&&(a=o);const h=Math.max(Math.min((o-a)/l,1),0),p=.5-Math.cos(h*Math.PI)/2;let _=r+p*(t-r);if(u(_,t)&&(_=t),e.wrapperEl.scrollTo({[n]:_}),u(_,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:_})}),i.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=i.requestAnimationFrame(d)};d()}function hs(s){return s.querySelector(".swiper-slide-transform")||s.shadowRoot&&s.shadowRoot.querySelector(".swiper-slide-transform")||s}function Dt(s,e){return e===void 0&&(e=""),[...s.children].filter(t=>t.matches(e))}function qa(s){try{console.warn(s);return}catch{}}function un(s,e){e===void 0&&(e=[]);const t=document.createElement(s);return t.classList.add(...Array.isArray(e)?e:pi(e)),t}function ja(s){const e=mt(),t=Nt(),n=s.getBoundingClientRect(),i=t.body,r=s.clientTop||i.clientTop||0,a=s.clientLeft||i.clientLeft||0,o=s===e?e.scrollY:s.scrollTop,l=s===e?e.scrollX:s.scrollLeft;return{top:n.top+o-r,left:n.left+l-a}}function yE(s,e){const t=[];for(;s.previousElementSibling;){const n=s.previousElementSibling;e?n.matches(e)&&t.push(n):t.push(n),s=n}return t}function SE(s,e){const t=[];for(;s.nextElementSibling;){const n=s.nextElementSibling;e?n.matches(e)&&t.push(n):t.push(n),s=n}return t}function Si(s,e){return mt().getComputedStyle(s,null).getPropertyValue(e)}function Vr(s){let e=s,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function is(s,e){const t=[];let n=s.parentElement;for(;n;)e?n.matches(e)&&t.push(n):t.push(n),n=n.parentElement;return t}function Lr(s,e){function t(n){n.target===s&&(e.call(s,n),s.removeEventListener("transitionend",t))}e&&s.addEventListener("transitionend",t)}function Vl(s,e,t){const n=mt();return s[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(s,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(s,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function Ve(s){return(Array.isArray(s)?s:[s]).filter(e=>!!e)}let sl;function EE(){const s=mt(),e=Nt();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in s||s.DocumentTouch&&e instanceof s.DocumentTouch)}}function Bf(){return sl||(sl=EE()),sl}let rl;function ME(s){let{userAgent:e}=s===void 0?{}:s;const t=Bf(),n=mt(),i=n.navigator.platform,r=e||n.navigator.userAgent,a={ios:!1,android:!1},o=n.screen.width,l=n.screen.height,c=r.match(/(Android);?[\s\/]+([\d.]+)?/);let u=r.match(/(iPad).*OS\s([\d_]+)/);const d=r.match(/(iPod)(.*OS\s([\d_]+))?/),h=!u&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=i==="Win32";let _=i==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&_&&t.touch&&g.indexOf(`${o}x${l}`)>=0&&(u=r.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),_=!1),c&&!p&&(a.os="android",a.android=!0),(u||h||d)&&(a.os="ios",a.ios=!0),a}function zf(s){return s===void 0&&(s={}),rl||(rl=ME(s)),rl}let al;function bE(){const s=mt(),e=zf();let t=!1;function n(){const o=s.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(n()){const o=String(s.navigator.userAgent);if(o.includes("Version/")){const[l,c]=o.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));t=l<16||l===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),r=n(),a=r||i&&e.ios;return{isSafari:t||r,needPerspectiveFix:t,need3dFix:a,isWebView:i}}function TE(){return al||(al=bE()),al}function wE(s){let{swiper:e,on:t,emit:n}=s;const i=mt();let r=null,a=null;const o=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(r=new ResizeObserver(d=>{a=i.requestAnimationFrame(()=>{const{width:h,height:p}=e;let _=h,g=p;d.forEach(m=>{let{contentBoxSize:f,contentRect:x,target:v}=m;v&&v!==e.el||(_=x?x.width:(f[0]||f).inlineSize,g=x?x.height:(f[0]||f).blockSize)}),(_!==h||g!==p)&&o()})}),r.observe(e.el))},c=()=>{a&&i.cancelAnimationFrame(a),r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",o),i.addEventListener("orientationchange",u)}),t("destroy",()=>{c(),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",u)})}function AE(s){let{swiper:e,extendParams:t,on:n,emit:i}=s;const r=[],a=mt(),o=function(u,d){d===void 0&&(d={});const h=a.MutationObserver||a.WebkitMutationObserver,p=new h(_=>{if(e.__preventObserver__)return;if(_.length===1){i("observerUpdate",_[0]);return}const g=function(){i("observerUpdate",_[0])};a.requestAnimationFrame?a.requestAnimationFrame(g):a.setTimeout(g,0)});p.observe(u,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:typeof d.childList>"u"?!0:d.childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),r.push(p)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=is(e.hostEl);for(let d=0;d<u.length;d+=1)o(u[d])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},c=()=>{r.forEach(u=>{u.disconnect()}),r.splice(0,r.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",c)}var CE={on(s,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const i=t?"unshift":"push";return s.split(" ").forEach(r=>{n.eventsListeners[r]||(n.eventsListeners[r]=[]),n.eventsListeners[r][i](e)}),n},once(s,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;function i(){n.off(s,i),i.__emitterProxy&&delete i.__emitterProxy;for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];e.apply(n,a)}return i.__emitterProxy=e,n.on(s,i,t)},onAny(s,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof s!="function")return t;const n=e?"unshift":"push";return t.eventsAnyListeners.indexOf(s)<0&&t.eventsAnyListeners[n](s),t},offAny(s){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(s);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(s,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||s.split(" ").forEach(n=>{typeof e>"u"?t.eventsListeners[n]=[]:t.eventsListeners[n]&&t.eventsListeners[n].forEach((i,r)=>{(i===e||i.__emitterProxy&&i.__emitterProxy===e)&&t.eventsListeners[n].splice(r,1)})}),t},emit(){const s=this;if(!s.eventsListeners||s.destroyed||!s.eventsListeners)return s;let e,t,n;for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return typeof r[0]=="string"||Array.isArray(r[0])?(e=r[0],t=r.slice(1,r.length),n=s):(e=r[0].events,t=r[0].data,n=r[0].context||s),t.unshift(n),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{s.eventsAnyListeners&&s.eventsAnyListeners.length&&s.eventsAnyListeners.forEach(c=>{c.apply(n,[l,...t])}),s.eventsListeners&&s.eventsListeners[l]&&s.eventsListeners[l].forEach(c=>{c.apply(n,t)})}),s}};function RE(){const s=this;let e,t;const n=s.el;typeof s.params.width<"u"&&s.params.width!==null?e=s.params.width:e=n.clientWidth,typeof s.params.height<"u"&&s.params.height!==null?t=s.params.height:t=n.clientHeight,!(e===0&&s.isHorizontal()||t===0&&s.isVertical())&&(e=e-parseInt(Si(n,"padding-left")||0,10)-parseInt(Si(n,"padding-right")||0,10),t=t-parseInt(Si(n,"padding-top")||0,10)-parseInt(Si(n,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(s,{width:e,height:t,size:s.isHorizontal()?e:t}))}function LE(){const s=this;function e(E,N){return parseFloat(E.getPropertyValue(s.getDirectionLabel(N))||0)}const t=s.params,{wrapperEl:n,slidesEl:i,size:r,rtlTranslate:a,wrongRTL:o}=s,l=s.virtual&&t.virtual.enabled,c=l?s.virtual.slides.length:s.slides.length,u=Dt(i,`.${s.params.slideClass}, swiper-slide`),d=l?s.virtual.slides.length:u.length;let h=[];const p=[],_=[];let g=t.slidesOffsetBefore;typeof g=="function"&&(g=t.slidesOffsetBefore.call(s));let m=t.slidesOffsetAfter;typeof m=="function"&&(m=t.slidesOffsetAfter.call(s));const f=s.snapGrid.length,x=s.slidesGrid.length;let v=t.spaceBetween,y=-g,b=0,M=0;if(typeof r>"u")return;typeof v=="string"&&v.indexOf("%")>=0?v=parseFloat(v.replace("%",""))/100*r:typeof v=="string"&&(v=parseFloat(v)),s.virtualSize=-v,u.forEach(E=>{a?E.style.marginLeft="":E.style.marginRight="",E.style.marginBottom="",E.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(Er(n,"--swiper-centered-offset-before",""),Er(n,"--swiper-centered-offset-after",""));const T=t.grid&&t.grid.rows>1&&s.grid;T?s.grid.initSlides(u):s.grid&&s.grid.unsetSlides();let C;const S=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(E=>typeof t.breakpoints[E].slidesPerView<"u").length>0;for(let E=0;E<d;E+=1){C=0;let N;if(u[E]&&(N=u[E]),T&&s.grid.updateSlide(E,N,u),!(u[E]&&Si(N,"display")==="none")){if(t.slidesPerView==="auto"){S&&(u[E].style[s.getDirectionLabel("width")]="");const P=getComputedStyle(N),D=N.style.transform,A=N.style.webkitTransform;if(D&&(N.style.transform="none"),A&&(N.style.webkitTransform="none"),t.roundLengths)C=s.isHorizontal()?Vl(N,"width"):Vl(N,"height");else{const O=e(P,"width"),F=e(P,"padding-left"),I=e(P,"padding-right"),U=e(P,"margin-left"),H=e(P,"margin-right"),X=P.getPropertyValue("box-sizing");if(X&&X==="border-box")C=O+U+H;else{const{clientWidth:k,offsetWidth:V}=N;C=O+F+I+U+H+(V-k)}}D&&(N.style.transform=D),A&&(N.style.webkitTransform=A),t.roundLengths&&(C=Math.floor(C))}else C=(r-(t.slidesPerView-1)*v)/t.slidesPerView,t.roundLengths&&(C=Math.floor(C)),u[E]&&(u[E].style[s.getDirectionLabel("width")]=`${C}px`);u[E]&&(u[E].swiperSlideSize=C),_.push(C),t.centeredSlides?(y=y+C/2+b/2+v,b===0&&E!==0&&(y=y-r/2-v),E===0&&(y=y-r/2-v),Math.abs(y)<1/1e3&&(y=0),t.roundLengths&&(y=Math.floor(y)),M%t.slidesPerGroup===0&&h.push(y),p.push(y)):(t.roundLengths&&(y=Math.floor(y)),(M-Math.min(s.params.slidesPerGroupSkip,M))%s.params.slidesPerGroup===0&&h.push(y),p.push(y),y=y+C+v),s.virtualSize+=C+v,b=C,M+=1}}if(s.virtualSize=Math.max(s.virtualSize,r)+m,a&&o&&(t.effect==="slide"||t.effect==="coverflow")&&(n.style.width=`${s.virtualSize+v}px`),t.setWrapperSize&&(n.style[s.getDirectionLabel("width")]=`${s.virtualSize+v}px`),T&&s.grid.updateWrapperSize(C,h),!t.centeredSlides){const E=[];for(let N=0;N<h.length;N+=1){let P=h[N];t.roundLengths&&(P=Math.floor(P)),h[N]<=s.virtualSize-r&&E.push(P)}h=E,Math.floor(s.virtualSize-r)-Math.floor(h[h.length-1])>1&&h.push(s.virtualSize-r)}if(l&&t.loop){const E=_[0]+v;if(t.slidesPerGroup>1){const N=Math.ceil((s.virtual.slidesBefore+s.virtual.slidesAfter)/t.slidesPerGroup),P=E*t.slidesPerGroup;for(let D=0;D<N;D+=1)h.push(h[h.length-1]+P)}for(let N=0;N<s.virtual.slidesBefore+s.virtual.slidesAfter;N+=1)t.slidesPerGroup===1&&h.push(h[h.length-1]+E),p.push(p[p.length-1]+E),s.virtualSize+=E}if(h.length===0&&(h=[0]),v!==0){const E=s.isHorizontal()&&a?"marginLeft":s.getDirectionLabel("marginRight");u.filter((N,P)=>!t.cssMode||t.loop?!0:P!==u.length-1).forEach(N=>{N.style[E]=`${v}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let E=0;_.forEach(P=>{E+=P+(v||0)}),E-=v;const N=E-r;h=h.map(P=>P<=0?-g:P>N?N+m:P)}if(t.centerInsufficientSlides){let E=0;if(_.forEach(N=>{E+=N+(v||0)}),E-=v,E<r){const N=(r-E)/2;h.forEach((P,D)=>{h[D]=P-N}),p.forEach((P,D)=>{p[D]=P+N})}}if(Object.assign(s,{slides:u,snapGrid:h,slidesGrid:p,slidesSizesGrid:_}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){Er(n,"--swiper-centered-offset-before",`${-h[0]}px`),Er(n,"--swiper-centered-offset-after",`${s.size/2-_[_.length-1]/2}px`);const E=-s.snapGrid[0],N=-s.slidesGrid[0];s.snapGrid=s.snapGrid.map(P=>P+E),s.slidesGrid=s.slidesGrid.map(P=>P+N)}if(d!==c&&s.emit("slidesLengthChange"),h.length!==f&&(s.params.watchOverflow&&s.checkOverflow(),s.emit("snapGridLengthChange")),p.length!==x&&s.emit("slidesGridLengthChange"),t.watchSlidesProgress&&s.updateSlidesOffset(),s.emit("slidesUpdated"),!l&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const E=`${t.containerModifierClass}backface-hidden`,N=s.el.classList.contains(E);d<=t.maxBackfaceHiddenSlides?N||s.el.classList.add(E):N&&s.el.classList.remove(E)}}function PE(s){const e=this,t=[],n=e.virtual&&e.params.virtual.enabled;let i=0,r;typeof s=="number"?e.setTransition(s):s===!0&&e.setTransition(e.params.speed);const a=o=>n?e.slides[e.getSlideIndexByData(o)]:e.slides[o];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(o=>{t.push(o)});else for(r=0;r<Math.ceil(e.params.slidesPerView);r+=1){const o=e.activeIndex+r;if(o>e.slides.length&&!n)break;t.push(a(o))}else t.push(a(e.activeIndex));for(r=0;r<t.length;r+=1)if(typeof t[r]<"u"){const o=t[r].offsetHeight;i=o>i?o:i}(i||i===0)&&(e.wrapperEl.style.height=`${i}px`)}function DE(){const s=this,e=s.slides,t=s.isElement?s.isHorizontal()?s.wrapperEl.offsetLeft:s.wrapperEl.offsetTop:0;for(let n=0;n<e.length;n+=1)e[n].swiperSlideOffset=(s.isHorizontal()?e[n].offsetLeft:e[n].offsetTop)-t-s.cssOverflowAdjustment()}function IE(s){s===void 0&&(s=this&&this.translate||0);const e=this,t=e.params,{slides:n,rtlTranslate:i,snapGrid:r}=e;if(n.length===0)return;typeof n[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let a=-s;i&&(a=s),n.forEach(l=>{l.classList.remove(t.slideVisibleClass,t.slideFullyVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let o=t.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*e.size:typeof o=="string"&&(o=parseFloat(o));for(let l=0;l<n.length;l+=1){const c=n[l];let u=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(u-=n[0].swiperSlideOffset);const d=(a+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+o),h=(a-r[0]+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+o),p=-(a-u),_=p+e.slidesSizesGrid[l],g=p>=0&&p<=e.size-e.slidesSizesGrid[l];(p>=0&&p<e.size-1||_>1&&_<=e.size||p<=0&&_>=e.size)&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l),n[l].classList.add(t.slideVisibleClass)),g&&n[l].classList.add(t.slideFullyVisibleClass),c.progress=i?-d:d,c.originalProgress=i?-h:h}}function NE(s){const e=this;if(typeof s>"u"){const u=e.rtlTranslate?-1:1;s=e&&e.translate&&e.translate*u||0}const t=e.params,n=e.maxTranslate()-e.minTranslate();let{progress:i,isBeginning:r,isEnd:a,progressLoop:o}=e;const l=r,c=a;if(n===0)i=0,r=!0,a=!0;else{i=(s-e.minTranslate())/n;const u=Math.abs(s-e.minTranslate())<1,d=Math.abs(s-e.maxTranslate())<1;r=u||i<=0,a=d||i>=1,u&&(i=0),d&&(i=1)}if(t.loop){const u=e.getSlideIndexByData(0),d=e.getSlideIndexByData(e.slides.length-1),h=e.slidesGrid[u],p=e.slidesGrid[d],_=e.slidesGrid[e.slidesGrid.length-1],g=Math.abs(s);g>=h?o=(g-h)/_:o=(g+_-p)/_,o>1&&(o-=1)}Object.assign(e,{progress:i,progressLoop:o,isBeginning:r,isEnd:a}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(s),r&&!l&&e.emit("reachBeginning toEdge"),a&&!c&&e.emit("reachEnd toEdge"),(l&&!r||c&&!a)&&e.emit("fromEdge"),e.emit("progress",i)}const ol=(s,e,t)=>{e&&!s.classList.contains(t)?s.classList.add(t):!e&&s.classList.contains(t)&&s.classList.remove(t)};function OE(){const s=this,{slides:e,params:t,slidesEl:n,activeIndex:i}=s,r=s.virtual&&t.virtual.enabled,a=s.grid&&t.grid&&t.grid.rows>1,o=d=>Dt(n,`.${t.slideClass}${d}, swiper-slide${d}`)[0];let l,c,u;if(r)if(t.loop){let d=i-s.virtual.slidesBefore;d<0&&(d=s.virtual.slides.length+d),d>=s.virtual.slides.length&&(d-=s.virtual.slides.length),l=o(`[data-swiper-slide-index="${d}"]`)}else l=o(`[data-swiper-slide-index="${i}"]`);else a?(l=e.filter(d=>d.column===i)[0],u=e.filter(d=>d.column===i+1)[0],c=e.filter(d=>d.column===i-1)[0]):l=e[i];l&&(a||(u=SE(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!u&&(u=e[0]),c=yE(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(d=>{ol(d,d===l,t.slideActiveClass),ol(d,d===u,t.slideNextClass),ol(d,d===c,t.slidePrevClass)}),s.emitSlidesClasses()}const Da=(s,e)=>{if(!s||s.destroyed||!s.params)return;const t=()=>s.isElement?"swiper-slide":`.${s.params.slideClass}`,n=e.closest(t());if(n){let i=n.querySelector(`.${s.params.lazyPreloaderClass}`);!i&&s.isElement&&(n.shadowRoot?i=n.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(i=n.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},ll=(s,e)=>{if(!s.slides[e])return;const t=s.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},Wl=s=>{if(!s||s.destroyed||!s.params)return;let e=s.params.lazyPreloadPrevNext;const t=s.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const n=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(s.params.slidesPerView),i=s.activeIndex;if(s.params.grid&&s.params.grid.rows>1){const a=i,o=[a-e];o.push(...Array.from({length:e}).map((l,c)=>a+n+c)),s.slides.forEach((l,c)=>{o.includes(l.column)&&ll(s,c)});return}const r=i+n-1;if(s.params.rewind||s.params.loop)for(let a=i-e;a<=r+e;a+=1){const o=(a%t+t)%t;(o<i||o>r)&&ll(s,o)}else for(let a=Math.max(i-e,0);a<=Math.min(r+e,t-1);a+=1)a!==i&&(a>r||a<i)&&ll(s,a)};function UE(s){const{slidesGrid:e,params:t}=s,n=s.rtlTranslate?s.translate:-s.translate;let i;for(let r=0;r<e.length;r+=1)typeof e[r+1]<"u"?n>=e[r]&&n<e[r+1]-(e[r+1]-e[r])/2?i=r:n>=e[r]&&n<e[r+1]&&(i=r+1):n>=e[r]&&(i=r);return t.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function FE(s){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:n,params:i,activeIndex:r,realIndex:a,snapIndex:o}=e;let l=s,c;const u=p=>{let _=p-e.virtual.slidesBefore;return _<0&&(_=e.virtual.slides.length+_),_>=e.virtual.slides.length&&(_-=e.virtual.slides.length),_};if(typeof l>"u"&&(l=UE(e)),n.indexOf(t)>=0)c=n.indexOf(t);else{const p=Math.min(i.slidesPerGroupSkip,l);c=p+Math.floor((l-p)/i.slidesPerGroup)}if(c>=n.length&&(c=n.length-1),l===r&&!e.params.loop){c!==o&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===r&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=u(l);return}const d=e.grid&&i.grid&&i.grid.rows>1;let h;if(e.virtual&&i.virtual.enabled&&i.loop)h=u(l);else if(d){const p=e.slides.filter(g=>g.column===l)[0];let _=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(_)&&(_=Math.max(e.slides.indexOf(p),0)),h=Math.floor(_/i.grid.rows)}else if(e.slides[l]){const p=e.slides[l].getAttribute("data-swiper-slide-index");p?h=parseInt(p,10):h=l}else h=l;Object.assign(e,{previousSnapIndex:o,snapIndex:c,previousRealIndex:a,realIndex:h,previousIndex:r,activeIndex:l}),e.initialized&&Wl(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(a!==h&&e.emit("realIndexChange"),e.emit("slideChange"))}function BE(s,e){const t=this,n=t.params;let i=s.closest(`.${n.slideClass}, swiper-slide`);!i&&t.isElement&&e&&e.length>1&&e.includes(s)&&[...e.slice(e.indexOf(s)+1,e.length)].forEach(o=>{!i&&o.matches&&o.matches(`.${n.slideClass}, swiper-slide`)&&(i=o)});let r=!1,a;if(i){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===i){r=!0,a=o;break}}if(i&&r)t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=a;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var zE={updateSize:RE,updateSlides:LE,updateAutoHeight:PE,updateSlidesOffset:DE,updateSlidesProgress:IE,updateProgress:NE,updateSlidesClasses:OE,updateActiveIndex:FE,updateClickedSlide:BE};function kE(s){s===void 0&&(s=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:n,translate:i,wrapperEl:r}=e;if(t.virtualTranslate)return n?-i:i;if(t.cssMode)return i;let a=Gl(r,s);return a+=e.cssOverflowAdjustment(),n&&(a=-a),a||0}function HE(s,e){const t=this,{rtlTranslate:n,params:i,wrapperEl:r,progress:a}=t;let o=0,l=0;const c=0;t.isHorizontal()?o=n?-s:s:l=s,i.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?o:l,i.cssMode?r[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-o:-l:i.virtualTranslate||(t.isHorizontal()?o-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),r.style.transform=`translate3d(${o}px, ${l}px, ${c}px)`);let u;const d=t.maxTranslate()-t.minTranslate();d===0?u=0:u=(s-t.minTranslate())/d,u!==a&&t.updateProgress(s),t.emit("setTranslate",t.translate,e)}function GE(){return-this.snapGrid[0]}function VE(){return-this.snapGrid[this.snapGrid.length-1]}function WE(s,e,t,n,i){s===void 0&&(s=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:a,wrapperEl:o}=r;if(r.animating&&a.preventInteractionOnTransition)return!1;const l=r.minTranslate(),c=r.maxTranslate();let u;if(n&&s>l?u=l:n&&s<c?u=c:u=s,r.updateProgress(u),a.cssMode){const d=r.isHorizontal();if(e===0)o[d?"scrollLeft":"scrollTop"]=-u;else{if(!r.support.smoothScroll)return Ff({swiper:r,targetPosition:-u,side:d?"left":"top"}),!0;o.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(r.setTransition(0),r.setTranslate(u),t&&(r.emit("beforeTransitionStart",e,i),r.emit("transitionEnd"))):(r.setTransition(e),r.setTranslate(u),t&&(r.emit("beforeTransitionStart",e,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(h){!r||r.destroyed||h.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,t&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var XE={getTranslate:kE,setTranslate:HE,minTranslate:GE,maxTranslate:VE,translateTo:WE};function $E(s,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${s}ms`,t.wrapperEl.style.transitionDelay=s===0?"0ms":""),t.emit("setTransition",s,e)}function kf(s){let{swiper:e,runCallbacks:t,direction:n,step:i}=s;const{activeIndex:r,previousIndex:a}=e;let o=n;if(o||(r>a?o="next":r<a?o="prev":o="reset"),e.emit(`transition${i}`),t&&r!==a){if(o==="reset"){e.emit(`slideResetTransition${i}`);return}e.emit(`slideChangeTransition${i}`),o==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}function YE(s,e){s===void 0&&(s=!0);const t=this,{params:n}=t;n.cssMode||(n.autoHeight&&t.updateAutoHeight(),kf({swiper:t,runCallbacks:s,direction:e,step:"Start"}))}function qE(s,e){s===void 0&&(s=!0);const t=this,{params:n}=t;t.animating=!1,!n.cssMode&&(t.setTransition(0),kf({swiper:t,runCallbacks:s,direction:e,step:"End"}))}var jE={setTransition:$E,transitionStart:YE,transitionEnd:qE};function KE(s,e,t,n,i){s===void 0&&(s=0),t===void 0&&(t=!0),typeof s=="string"&&(s=parseInt(s,10));const r=this;let a=s;a<0&&(a=0);const{params:o,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:h,wrapperEl:p,enabled:_}=r;if(!_&&!n&&!i||r.destroyed||r.animating&&o.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=r.params.speed);const g=Math.min(r.params.slidesPerGroupSkip,a);let m=g+Math.floor((a-g)/r.params.slidesPerGroup);m>=l.length&&(m=l.length-1);const f=-l[m];if(o.normalizeSlideIndex)for(let v=0;v<c.length;v+=1){const y=-Math.floor(f*100),b=Math.floor(c[v]*100),M=Math.floor(c[v+1]*100);typeof c[v+1]<"u"?y>=b&&y<M-(M-b)/2?a=v:y>=b&&y<M&&(a=v+1):y>=b&&(a=v)}if(r.initialized&&a!==d&&(!r.allowSlideNext&&(h?f>r.translate&&f>r.minTranslate():f<r.translate&&f<r.minTranslate())||!r.allowSlidePrev&&f>r.translate&&f>r.maxTranslate()&&(d||0)!==a))return!1;a!==(u||0)&&t&&r.emit("beforeSlideChangeStart"),r.updateProgress(f);let x;if(a>d?x="next":a<d?x="prev":x="reset",h&&-f===r.translate||!h&&f===r.translate)return r.updateActiveIndex(a),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),o.effect!=="slide"&&r.setTranslate(f),x!=="reset"&&(r.transitionStart(t,x),r.transitionEnd(t,x)),!1;if(o.cssMode){const v=r.isHorizontal(),y=h?f:-f;if(e===0){const b=r.virtual&&r.params.virtual.enabled;b&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),b&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[v?"scrollLeft":"scrollTop"]=y})):p[v?"scrollLeft":"scrollTop"]=y,b&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1})}else{if(!r.support.smoothScroll)return Ff({swiper:r,targetPosition:y,side:v?"left":"top"}),!0;p.scrollTo({[v?"left":"top"]:y,behavior:"smooth"})}return!0}return r.setTransition(e),r.setTranslate(f),r.updateActiveIndex(a),r.updateSlidesClasses(),r.emit("beforeTransitionStart",e,n),r.transitionStart(t,x),e===0?r.transitionEnd(t,x):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(y){!r||r.destroyed||y.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(t,x))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function ZE(s,e,t,n){s===void 0&&(s=0),t===void 0&&(t=!0),typeof s=="string"&&(s=parseInt(s,10));const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);const r=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=s;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let o;if(r){const h=a*i.params.grid.rows;o=i.slides.filter(p=>p.getAttribute("data-swiper-slide-index")*1===h)[0].column}else o=i.getSlideIndexByData(a);const l=r?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c}=i.params;let u=i.params.slidesPerView;u==="auto"?u=i.slidesPerViewDynamic():(u=Math.ceil(parseFloat(i.params.slidesPerView,10)),c&&u%2===0&&(u=u+1));let d=l-o<u;if(c&&(d=d||o<Math.ceil(u/2)),n&&c&&i.params.slidesPerView!=="auto"&&!r&&(d=!1),d){const h=c?o<i.activeIndex?"prev":"next":o-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:h,slideTo:!0,activeSlideIndex:h==="next"?o+1:o-l+1,slideRealIndex:h==="next"?i.realIndex:void 0})}if(r){const h=a*i.params.grid.rows;a=i.slides.filter(p=>p.getAttribute("data-swiper-slide-index")*1===h)[0].column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,e,t,n)}),i}function JE(s,e,t){e===void 0&&(e=!0);const n=this,{enabled:i,params:r,animating:a}=n;if(!i||n.destroyed)return n;typeof s>"u"&&(s=n.params.speed);let o=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(o=Math.max(n.slidesPerViewDynamic("current",!0),1));const l=n.activeIndex<r.slidesPerGroupSkip?1:o,c=n.virtual&&r.virtual.enabled;if(r.loop){if(a&&!c&&r.loopPreventsSliding)return!1;if(n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft,n.activeIndex===n.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{n.slideTo(n.activeIndex+l,s,e,t)}),!0}return r.rewind&&n.isEnd?n.slideTo(0,s,e,t):n.slideTo(n.activeIndex+l,s,e,t)}function QE(s,e,t){e===void 0&&(e=!0);const n=this,{params:i,snapGrid:r,slidesGrid:a,rtlTranslate:o,enabled:l,animating:c}=n;if(!l||n.destroyed)return n;typeof s>"u"&&(s=n.params.speed);const u=n.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}const d=o?n.translate:-n.translate;function h(f){return f<0?-Math.floor(Math.abs(f)):Math.floor(f)}const p=h(d),_=r.map(f=>h(f));let g=r[_.indexOf(p)-1];if(typeof g>"u"&&i.cssMode){let f;r.forEach((x,v)=>{p>=x&&(f=v)}),typeof f<"u"&&(g=r[f>0?f-1:f])}let m=0;if(typeof g<"u"&&(m=a.indexOf(g),m<0&&(m=n.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(m=m-n.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&n.isBeginning){const f=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(f,s,e,t)}else if(i.loop&&n.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{n.slideTo(m,s,e,t)}),!0;return n.slideTo(m,s,e,t)}function eM(s,e,t){e===void 0&&(e=!0);const n=this;if(!n.destroyed)return typeof s>"u"&&(s=n.params.speed),n.slideTo(n.activeIndex,s,e,t)}function tM(s,e,t,n){e===void 0&&(e=!0),n===void 0&&(n=.5);const i=this;if(i.destroyed)return;typeof s>"u"&&(s=i.params.speed);let r=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,r),o=a+Math.floor((r-a)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[o]){const c=i.snapGrid[o],u=i.snapGrid[o+1];l-c>(u-c)*n&&(r+=i.params.slidesPerGroup)}else{const c=i.snapGrid[o-1],u=i.snapGrid[o];l-c<=(u-c)*n&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,s,e,t)}function nM(){const s=this;if(s.destroyed)return;const{params:e,slidesEl:t}=s,n=e.slidesPerView==="auto"?s.slidesPerViewDynamic():e.slidesPerView;let i=s.clickedIndex,r;const a=s.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(s.animating)return;r=parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?i<s.loopedSlides-n/2||i>s.slides.length-s.loopedSlides+n/2?(s.loopFix(),i=s.getSlideIndex(Dt(t,`${a}[data-swiper-slide-index="${r}"]`)[0]),cs(()=>{s.slideTo(i)})):s.slideTo(i):i>s.slides.length-n?(s.loopFix(),i=s.getSlideIndex(Dt(t,`${a}[data-swiper-slide-index="${r}"]`)[0]),cs(()=>{s.slideTo(i)})):s.slideTo(i)}else s.slideTo(i)}var iM={slideTo:KE,slideToLoop:ZE,slideNext:JE,slidePrev:QE,slideReset:eM,slideToClosest:tM,slideToClickedSlide:nM};function sM(s){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;const i=()=>{Dt(n,`.${t.slideClass}, swiper-slide`).forEach((d,h)=>{d.setAttribute("data-swiper-slide-index",h)})},r=e.grid&&t.grid&&t.grid.rows>1,a=t.slidesPerGroup*(r?t.grid.rows:1),o=e.slides.length%a!==0,l=r&&e.slides.length%t.grid.rows!==0,c=u=>{for(let d=0;d<u;d+=1){const h=e.isElement?un("swiper-slide",[t.slideBlankClass]):un("div",[t.slideClass,t.slideBlankClass]);e.slidesEl.append(h)}};if(o){if(t.loopAddBlankSlides){const u=a-e.slides.length%a;c(u),e.recalcSlides(),e.updateSlides()}else qa("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(t.loopAddBlankSlides){const u=t.grid.rows-e.slides.length%t.grid.rows;c(u),e.recalcSlides(),e.updateSlides()}else qa("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();e.loopFix({slideRealIndex:s,direction:t.centeredSlides?void 0:"next"})}function rM(s){let{slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:i,activeSlideIndex:r,byController:a,byMousewheel:o}=s===void 0?{}:s;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:d,slidesEl:h,params:p}=l,{centeredSlides:_}=p;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&p.virtual.enabled){t&&(!p.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):p.centeredSlides&&l.snapIndex<p.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=d,l.emit("loopFix");return}let g=p.slidesPerView;g==="auto"?g=l.slidesPerViewDynamic():(g=Math.ceil(parseFloat(p.slidesPerView,10)),_&&g%2===0&&(g=g+1));const m=p.slidesPerGroupAuto?g:p.slidesPerGroup;let f=m;f%m!==0&&(f+=m-f%m),f+=p.loopAdditionalSlides,l.loopedSlides=f;const x=l.grid&&p.grid&&p.grid.rows>1;c.length<g+f?qa("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):x&&p.grid.fill==="row"&&qa("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const v=[],y=[];let b=l.activeIndex;typeof r>"u"?r=l.getSlideIndex(c.filter(D=>D.classList.contains(p.slideActiveClass))[0]):b=r;const M=n==="next"||!n,T=n==="prev"||!n;let C=0,S=0;const E=x?Math.ceil(c.length/p.grid.rows):c.length,P=(x?c[r].column:r)+(_&&typeof i>"u"?-g/2+.5:0);if(P<f){C=Math.max(f-P,m);for(let D=0;D<f-P;D+=1){const A=D-Math.floor(D/E)*E;if(x){const O=E-A-1;for(let F=c.length-1;F>=0;F-=1)c[F].column===O&&v.push(F)}else v.push(E-A-1)}}else if(P+g>E-f){S=Math.max(P-(E-f*2),m);for(let D=0;D<S;D+=1){const A=D-Math.floor(D/E)*E;x?c.forEach((O,F)=>{O.column===A&&y.push(F)}):y.push(A)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),T&&v.forEach(D=>{c[D].swiperLoopMoveDOM=!0,h.prepend(c[D]),c[D].swiperLoopMoveDOM=!1}),M&&y.forEach(D=>{c[D].swiperLoopMoveDOM=!0,h.append(c[D]),c[D].swiperLoopMoveDOM=!1}),l.recalcSlides(),p.slidesPerView==="auto"?l.updateSlides():x&&(v.length>0&&T||y.length>0&&M)&&l.slides.forEach((D,A)=>{l.grid.updateSlide(A,D,l.slides)}),p.watchSlidesProgress&&l.updateSlidesOffset(),t){if(v.length>0&&T){if(typeof e>"u"){const D=l.slidesGrid[b],O=l.slidesGrid[b+C]-D;o?l.setTranslate(l.translate-O):(l.slideTo(b+Math.ceil(C),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-O,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-O))}else if(i){const D=x?v.length/p.grid.rows:v.length;l.slideTo(l.activeIndex+D,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(y.length>0&&M)if(typeof e>"u"){const D=l.slidesGrid[b],O=l.slidesGrid[b-S]-D;o?l.setTranslate(l.translate-O):(l.slideTo(b-S,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-O,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-O))}else{const D=x?y.length/p.grid.rows:y.length;l.slideTo(l.activeIndex-D,0,!1,!0)}}if(l.allowSlidePrev=u,l.allowSlideNext=d,l.controller&&l.controller.control&&!a){const D={slideRealIndex:e,direction:n,setTranslate:i,activeSlideIndex:r,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(A=>{!A.destroyed&&A.params.loop&&A.loopFix({...D,slideTo:A.params.slidesPerView===p.slidesPerView?t:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...D,slideTo:l.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}l.emit("loopFix")}function aM(){const s=this,{params:e,slidesEl:t}=s;if(!e.loop||s.virtual&&s.params.virtual.enabled)return;s.recalcSlides();const n=[];s.slides.forEach(i=>{const r=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;n[r]=i}),s.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),n.forEach(i=>{t.append(i)}),s.recalcSlides(),s.slideTo(s.realIndex,0)}var oM={loopCreate:sM,loopFix:rM,loopDestroy:aM};function lM(s){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=s?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function cM(){const s=this;s.params.watchOverflow&&s.isLocked||s.params.cssMode||(s.isElement&&(s.__preventObserver__=!0),s[s.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",s.isElement&&requestAnimationFrame(()=>{s.__preventObserver__=!1}))}var uM={setGrabCursor:lM,unsetGrabCursor:cM};function dM(s,e){e===void 0&&(e=this);function t(n){if(!n||n===Nt()||n===mt())return null;n.assignedSlot&&(n=n.assignedSlot);const i=n.closest(s);return!i&&!n.getRootNode?null:i||t(n.getRootNode().host)}return t(e)}function Vd(s,e,t){const n=mt(),{params:i}=s,r=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return r&&(t<=a||t>=n.innerWidth-a)?r==="prevent"?(e.preventDefault(),!0):!1:!0}function hM(s){const e=this,t=Nt();let n=s;n.originalEvent&&(n=n.originalEvent);const i=e.touchEventsData;if(n.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==n.pointerId)return;i.pointerId=n.pointerId}else n.type==="touchstart"&&n.targetTouches.length===1&&(i.touchId=n.targetTouches[0].identifier);if(n.type==="touchstart"){Vd(e,n,n.targetTouches[0].pageX);return}const{params:r,touches:a,enabled:o}=e;if(!o||!r.simulateTouch&&n.pointerType==="mouse"||e.animating&&r.preventInteractionOnTransition)return;!e.animating&&r.cssMode&&r.loop&&e.loopFix();let l=n.target;if(r.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(l)||"which"in n&&n.which===3||"button"in n&&n.button>0||i.isTouched&&i.isMoved)return;const c=!!r.noSwipingClass&&r.noSwipingClass!=="",u=n.composedPath?n.composedPath():n.path;c&&n.target&&n.target.shadowRoot&&u&&(l=u[0]);const d=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,h=!!(n.target&&n.target.shadowRoot);if(r.noSwiping&&(h?dM(d,l):l.closest(d))){e.allowClick=!0;return}if(r.swipeHandler&&!l.closest(r.swipeHandler))return;a.currentX=n.pageX,a.currentY=n.pageY;const p=a.currentX,_=a.currentY;if(!Vd(e,n,p))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=p,a.startY=_,i.touchStartTime=yn(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,r.threshold>0&&(i.allowThresholdMove=!1);let g=!0;l.matches(i.focusableElements)&&(g=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),t.activeElement&&t.activeElement.matches(i.focusableElements)&&t.activeElement!==l&&t.activeElement.blur();const m=g&&e.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||m)&&!l.isContentEditable&&n.preventDefault(),r.freeMode&&r.freeMode.enabled&&e.freeMode&&e.animating&&!r.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",n)}function fM(s){const e=Nt(),t=this,n=t.touchEventsData,{params:i,touches:r,rtlTranslate:a,enabled:o}=t;if(!o||!i.simulateTouch&&s.pointerType==="mouse")return;let l=s;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(n.touchId!==null||l.pointerId!==n.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].filter(M=>M.identifier===n.touchId)[0],!c||c.identifier!==n.touchId)return}else c=l;if(!n.isTouched){n.startMoving&&n.isScrolling&&t.emit("touchMoveOpposite",l);return}const u=c.pageX,d=c.pageY;if(l.preventedByNestedSwiper){r.startX=u,r.startY=d;return}if(!t.allowTouchMove){l.target.matches(n.focusableElements)||(t.allowClick=!1),n.isTouched&&(Object.assign(r,{startX:u,startY:d,currentX:u,currentY:d}),n.touchStartTime=yn());return}if(i.touchReleaseOnEdges&&!i.loop){if(t.isVertical()){if(d<r.startY&&t.translate<=t.maxTranslate()||d>r.startY&&t.translate>=t.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else if(u<r.startX&&t.translate<=t.maxTranslate()||u>r.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(n.focusableElements)){n.isMoved=!0,t.allowClick=!1;return}n.allowTouchCallbacks&&t.emit("touchMove",l),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=u,r.currentY=d;const h=r.currentX-r.startX,p=r.currentY-r.startY;if(t.params.threshold&&Math.sqrt(h**2+p**2)<t.params.threshold)return;if(typeof n.isScrolling>"u"){let M;t.isHorizontal()&&r.currentY===r.startY||t.isVertical()&&r.currentX===r.startX?n.isScrolling=!1:h*h+p*p>=25&&(M=Math.atan2(Math.abs(p),Math.abs(h))*180/Math.PI,n.isScrolling=t.isHorizontal()?M>i.touchAngle:90-M>i.touchAngle)}if(n.isScrolling&&t.emit("touchMoveOpposite",l),typeof n.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(n.startMoving=!0),n.isScrolling||l.type==="touchmove"&&n.preventTouchMoveFromPointerMove){n.isTouched=!1;return}if(!n.startMoving)return;t.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let _=t.isHorizontal()?h:p,g=t.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;i.oneWayMovement&&(_=Math.abs(_)*(a?1:-1),g=Math.abs(g)*(a?1:-1)),r.diff=_,_*=i.touchRatio,a&&(_=-_,g=-g);const m=t.touchesDirection;t.swipeDirection=_>0?"prev":"next",t.touchesDirection=g>0?"prev":"next";const f=t.params.loop&&!i.cssMode,x=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!n.isMoved){if(f&&x&&t.loopFix({direction:t.swipeDirection}),n.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const M=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(M)}n.allowMomentumBounce=!1,i.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}let v;if(new Date().getTime(),n.isMoved&&n.allowThresholdMove&&m!==t.touchesDirection&&f&&x&&Math.abs(_)>=1){Object.assign(r,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:n.currentTranslate}),n.loopSwapReset=!0,n.startTranslate=n.currentTranslate;return}t.emit("sliderMove",l),n.isMoved=!0,n.currentTranslate=_+n.startTranslate;let y=!0,b=i.resistanceRatio;if(i.touchReleaseOnEdges&&(b=0),_>0?(f&&x&&!v&&n.allowThresholdMove&&n.currentTranslate>(i.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>t.minTranslate()&&(y=!1,i.resistance&&(n.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+n.startTranslate+_)**b))):_<0&&(f&&x&&!v&&n.allowThresholdMove&&n.currentTranslate<(i.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]:t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(i.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),n.currentTranslate<t.maxTranslate()&&(y=!1,i.resistance&&(n.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-n.startTranslate-_)**b))),y&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(n.currentTranslate=n.startTranslate),i.threshold>0)if(Math.abs(_)>i.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,n.currentTranslate=n.startTranslate,r.diff=t.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{n.currentTranslate=n.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&t.freeMode||i.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(n.currentTranslate),t.setTranslate(n.currentTranslate))}function pM(s){const e=this,t=e.touchEventsData;let n=s;n.originalEvent&&(n=n.originalEvent);let i;if(n.type==="touchend"||n.type==="touchcancel"){if(i=[...n.changedTouches].filter(b=>b.identifier===t.touchId)[0],!i||i.identifier!==t.touchId)return}else{if(t.touchId!==null||n.pointerId!==t.pointerId)return;i=n}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(n.type)&&!(["pointercancel","contextmenu"].includes(n.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:a,touches:o,rtlTranslate:l,slidesGrid:c,enabled:u}=e;if(!u||!a.simulateTouch&&n.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",n),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&a.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}a.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const d=yn(),h=d-t.touchStartTime;if(e.allowClick){const b=n.path||n.composedPath&&n.composedPath();e.updateClickedSlide(b&&b[0]||n.target,b),e.emit("tap click",n),h<300&&d-t.lastClickTime<300&&e.emit("doubleTap doubleClick",n)}if(t.lastClickTime=yn(),cs(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||o.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let p;if(a.followFinger?p=l?e.translate:-e.translate:p=-t.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:p});return}const _=p>=-e.maxTranslate()&&!e.params.loop;let g=0,m=e.slidesSizesGrid[0];for(let b=0;b<c.length;b+=b<a.slidesPerGroupSkip?1:a.slidesPerGroup){const M=b<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[b+M]<"u"?(_||p>=c[b]&&p<c[b+M])&&(g=b,m=c[b+M]-c[b]):(_||p>=c[b])&&(g=b,m=c[c.length-1]-c[c.length-2])}let f=null,x=null;a.rewind&&(e.isBeginning?x=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(f=0));const v=(p-c[g])/m,y=g<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(h>a.longSwipesMs){if(!a.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(v>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?f:g+y):e.slideTo(g)),e.swipeDirection==="prev"&&(v>1-a.longSwipesRatio?e.slideTo(g+y):x!==null&&v<0&&Math.abs(v)>a.longSwipesRatio?e.slideTo(x):e.slideTo(g))}else{if(!a.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(n.target===e.navigation.nextEl||n.target===e.navigation.prevEl)?n.target===e.navigation.nextEl?e.slideTo(g+y):e.slideTo(g):(e.swipeDirection==="next"&&e.slideTo(f!==null?f:g+y),e.swipeDirection==="prev"&&e.slideTo(x!==null?x:g))}}function Wd(){const s=this,{params:e,el:t}=s;if(t&&t.offsetWidth===0)return;e.breakpoints&&s.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:i,snapGrid:r}=s,a=s.virtual&&s.params.virtual.enabled;s.allowSlideNext=!0,s.allowSlidePrev=!0,s.updateSize(),s.updateSlides(),s.updateSlidesClasses();const o=a&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&s.isEnd&&!s.isBeginning&&!s.params.centeredSlides&&!o?s.slideTo(s.slides.length-1,0,!1,!0):s.params.loop&&!a?s.slideToLoop(s.realIndex,0,!1,!0):s.slideTo(s.activeIndex,0,!1,!0),s.autoplay&&s.autoplay.running&&s.autoplay.paused&&(clearTimeout(s.autoplay.resizeTimeout),s.autoplay.resizeTimeout=setTimeout(()=>{s.autoplay&&s.autoplay.running&&s.autoplay.paused&&s.autoplay.resume()},500)),s.allowSlidePrev=i,s.allowSlideNext=n,s.params.watchOverflow&&r!==s.snapGrid&&s.checkOverflow()}function mM(s){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&s.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(s.stopPropagation(),s.stopImmediatePropagation())))}function gM(){const s=this,{wrapperEl:e,rtlTranslate:t,enabled:n}=s;if(!n)return;s.previousTranslate=s.translate,s.isHorizontal()?s.translate=-e.scrollLeft:s.translate=-e.scrollTop,s.translate===0&&(s.translate=0),s.updateActiveIndex(),s.updateSlidesClasses();let i;const r=s.maxTranslate()-s.minTranslate();r===0?i=0:i=(s.translate-s.minTranslate())/r,i!==s.progress&&s.updateProgress(t?-s.translate:s.translate),s.emit("setTranslate",s.translate,!1)}function _M(s){const e=this;Da(e,s.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function vM(){const s=this;s.documentTouchHandlerProceeded||(s.documentTouchHandlerProceeded=!0,s.params.touchReleaseOnEdges&&(s.el.style.touchAction="auto"))}const Hf=(s,e)=>{const t=Nt(),{params:n,el:i,wrapperEl:r,device:a}=s,o=!!n.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;t[l]("touchstart",s.onDocumentTouchStart,{passive:!1,capture:o}),i[l]("touchstart",s.onTouchStart,{passive:!1}),i[l]("pointerdown",s.onTouchStart,{passive:!1}),t[l]("touchmove",s.onTouchMove,{passive:!1,capture:o}),t[l]("pointermove",s.onTouchMove,{passive:!1,capture:o}),t[l]("touchend",s.onTouchEnd,{passive:!0}),t[l]("pointerup",s.onTouchEnd,{passive:!0}),t[l]("pointercancel",s.onTouchEnd,{passive:!0}),t[l]("touchcancel",s.onTouchEnd,{passive:!0}),t[l]("pointerout",s.onTouchEnd,{passive:!0}),t[l]("pointerleave",s.onTouchEnd,{passive:!0}),t[l]("contextmenu",s.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&i[l]("click",s.onClick,!0),n.cssMode&&r[l]("scroll",s.onScroll),n.updateOnWindowResize?s[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Wd,!0):s[c]("observerUpdate",Wd,!0),i[l]("load",s.onLoad,{capture:!0})};function xM(){const s=this,{params:e}=s;s.onTouchStart=hM.bind(s),s.onTouchMove=fM.bind(s),s.onTouchEnd=pM.bind(s),s.onDocumentTouchStart=vM.bind(s),e.cssMode&&(s.onScroll=gM.bind(s)),s.onClick=mM.bind(s),s.onLoad=_M.bind(s),Hf(s,"on")}function yM(){Hf(this,"off")}var SM={attachEvents:xM,detachEvents:yM};const Xd=(s,e)=>s.grid&&e.grid&&e.grid.rows>1;function EM(){const s=this,{realIndex:e,initialized:t,params:n,el:i}=s,r=n.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const a=s.getBreakpoint(r,s.params.breakpointsBase,s.el);if(!a||s.currentBreakpoint===a)return;const l=(a in r?r[a]:void 0)||s.originalParams,c=Xd(s,n),u=Xd(s,l),d=s.params.grabCursor,h=l.grabCursor,p=n.enabled;c&&!u?(i.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),s.emitContainerClasses()):!c&&u&&(i.classList.add(`${n.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&n.grid.fill==="column")&&i.classList.add(`${n.containerModifierClass}grid-column`),s.emitContainerClasses()),d&&!h?s.unsetGrabCursor():!d&&h&&s.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(v=>{if(typeof l[v]>"u")return;const y=n[v]&&n[v].enabled,b=l[v]&&l[v].enabled;y&&!b&&s[v].disable(),!y&&b&&s[v].enable()});const _=l.direction&&l.direction!==n.direction,g=n.loop&&(l.slidesPerView!==n.slidesPerView||_),m=n.loop;_&&t&&s.changeDirection(),on(s.params,l);const f=s.params.enabled,x=s.params.loop;Object.assign(s,{allowTouchMove:s.params.allowTouchMove,allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev}),p&&!f?s.disable():!p&&f&&s.enable(),s.currentBreakpoint=a,s.emit("_beforeBreakpoint",l),t&&(g?(s.loopDestroy(),s.loopCreate(e),s.updateSlides()):!m&&x?(s.loopCreate(e),s.updateSlides()):m&&!x&&s.loopDestroy()),s.emit("breakpoint",l)}function MM(s,e,t){if(e===void 0&&(e="window"),!s||e==="container"&&!t)return;let n=!1;const i=mt(),r=e==="window"?i.innerHeight:t.clientHeight,a=Object.keys(s).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const l=parseFloat(o.substr(1));return{value:r*l,point:o}}return{value:o,point:o}});a.sort((o,l)=>parseInt(o.value,10)-parseInt(l.value,10));for(let o=0;o<a.length;o+=1){const{point:l,value:c}=a[o];e==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(n=l):c<=t.clientWidth&&(n=l)}return n||"max"}var bM={setBreakpoint:EM,getBreakpoint:MM};function TM(s,e){const t=[];return s.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(i=>{n[i]&&t.push(e+i)}):typeof n=="string"&&t.push(e+n)}),t}function wM(){const s=this,{classNames:e,params:t,rtl:n,el:i,device:r}=s,a=TM(["initialized",t.direction,{"free-mode":s.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:n},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...a),i.classList.add(...e),s.emitContainerClasses()}function AM(){const s=this,{el:e,classNames:t}=s;e.classList.remove(...t),s.emitContainerClasses()}var CM={addClasses:wM,removeClasses:AM};function RM(){const s=this,{isLocked:e,params:t}=s,{slidesOffsetBefore:n}=t;if(n){const i=s.slides.length-1,r=s.slidesGrid[i]+s.slidesSizesGrid[i]+n*2;s.isLocked=s.size>r}else s.isLocked=s.snapGrid.length===1;t.allowSlideNext===!0&&(s.allowSlideNext=!s.isLocked),t.allowSlidePrev===!0&&(s.allowSlidePrev=!s.isLocked),e&&e!==s.isLocked&&(s.isEnd=!1),e!==s.isLocked&&s.emit(s.isLocked?"lock":"unlock")}var LM={checkOverflow:RM},$d={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function PM(s,e){return function(n){n===void 0&&(n={});const i=Object.keys(n)[0],r=n[i];if(typeof r!="object"||r===null){on(e,n);return}if(s[i]===!0&&(s[i]={enabled:!0}),i==="navigation"&&s[i]&&s[i].enabled&&!s[i].prevEl&&!s[i].nextEl&&(s[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&s[i]&&s[i].enabled&&!s[i].el&&(s[i].auto=!0),!(i in s&&"enabled"in r)){on(e,n);return}typeof s[i]=="object"&&!("enabled"in s[i])&&(s[i].enabled=!0),s[i]||(s[i]={enabled:!1}),on(e,n)}}const cl={eventsEmitter:CE,update:zE,translate:XE,transition:jE,slide:iM,loop:oM,grabCursor:uM,events:SM,breakpoints:bM,checkOverflow:LM,classes:CM},ul={};class rn{constructor(){let e,t;for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?t=i[0]:[e,t]=i,t||(t={}),t=on({},t),e&&!t.el&&(t.el=e);const a=Nt();if(t.el&&typeof t.el=="string"&&a.querySelectorAll(t.el).length>1){const u=[];return a.querySelectorAll(t.el).forEach(d=>{const h=on({},t,{el:d});u.push(new rn(h))}),u}const o=this;o.__swiper__=!0,o.support=Bf(),o.device=zf({userAgent:t.userAgent}),o.browser=TE(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],t.modules&&Array.isArray(t.modules)&&o.modules.push(...t.modules);const l={};o.modules.forEach(u=>{u({params:t,swiper:o,extendParams:PM(t,l),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const c=on({},$d,l);return o.params=on({},c,ul,t),o.originalParams=on({},o.params),o.passedParams=on({},t),o.params&&o.params.on&&Object.keys(o.params.on).forEach(u=>{o.on(u,o.params.on[u])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:n}=this,i=Dt(t,`.${n.slideClass}, swiper-slide`),r=Vr(i[0]);return Vr(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:n}=e;e.slides=Dt(t,`.${n.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const i=n.minTranslate(),a=(n.maxTranslate()-i)*e+i;n.translateTo(a,typeof t>"u"?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(n=>{const i=e.getSlideClasses(n);t.push({slideEl:n,classNames:i}),e.emit("_slideClass",n,i)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const n=this,{params:i,slides:r,slidesGrid:a,slidesSizesGrid:o,size:l,activeIndex:c}=n;let u=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let d=r[c]?Math.ceil(r[c].swiperSlideSize):0,h;for(let p=c+1;p<r.length;p+=1)r[p]&&!h&&(d+=Math.ceil(r[p].swiperSlideSize),u+=1,d>l&&(h=!0));for(let p=c-1;p>=0;p-=1)r[p]&&!h&&(d+=r[p].swiperSlideSize,u+=1,d>l&&(h=!0))}else if(e==="current")for(let d=c+1;d<r.length;d+=1)(t?a[d]+o[d]-a[c]<l:a[d]-a[c]<l)&&(u+=1);else for(let d=c-1;d>=0;d-=1)a[c]-a[d]<l&&(u+=1);return u}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&Da(e,a)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function i(){const a=e.rtlTranslate?e.translate*-1:e.translate,o=Math.min(Math.max(a,e.maxTranslate()),e.minTranslate());e.setTranslate(o),e.updateActiveIndex(),e.updateSlidesClasses()}let r;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)i(),n.autoHeight&&e.updateAutoHeight();else{if((n.slidesPerView==="auto"||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){const a=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;r=e.slideTo(a.length-1,0,!1,!0)}else r=e.slideTo(e.activeIndex,0,!1,!0);r||i()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const n=this,i=n.params.direction;return e||(e=i==="horizontal"?"vertical":"horizontal"),e===i||e!=="horizontal"&&e!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${i}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(r=>{e==="vertical"?r.style.width="":r.style.height=""}),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(i()):Dt(n,i())[0];return!a&&t.params.createElements&&(a=un("div",t.params.wrapperClass),n.append(a),Dt(n,`.${t.params.slideClass}`).forEach(o=>{a.append(o)})),Object.assign(t,{el:n,wrapperEl:a,slidesEl:t.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:a,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||Si(n,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||Si(n,"direction")==="rtl"),wrongRTL:Si(a,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const i=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(r=>{r.complete?Da(t,r):r.addEventListener("load",a=>{Da(t,a.target)})}),Wl(t),t.initialized=!0,Wl(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const n=this,{params:i,el:r,wrapperEl:a,slides:o}=n;return typeof n.params>"u"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),i.loop&&n.loopDestroy(),t&&(n.removeClasses(),r.removeAttribute("style"),a.removeAttribute("style"),o&&o.length&&o.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(l=>{n.off(l)}),e!==!1&&(n.el.swiper=null,_E(n)),n.destroyed=!0),null}static extendDefaults(e){on(ul,e)}static get extendedDefaults(){return ul}static get defaults(){return $d}static installModule(e){rn.prototype.__modules__||(rn.prototype.__modules__=[]);const t=rn.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>rn.installModule(t)),rn):(rn.installModule(e),rn)}}Object.keys(cl).forEach(s=>{Object.keys(cl[s]).forEach(e=>{rn.prototype[e]=cl[s][e]})});rn.use([wE,AE]);function DM(s){let{swiper:e,extendParams:t,on:n,emit:i}=s;t({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let r;const a=Nt();e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const o=a.createElement("div");function l(_,g){const m=e.params.virtual;if(m.cache&&e.virtual.cache[g])return e.virtual.cache[g];let f;return m.renderSlide?(f=m.renderSlide.call(e,_,g),typeof f=="string"&&(o.innerHTML=f,f=o.children[0])):e.isElement?f=un("swiper-slide"):f=un("div",e.params.slideClass),f.setAttribute("data-swiper-slide-index",g),m.renderSlide||(f.innerHTML=_),m.cache&&(e.virtual.cache[g]=f),f}function c(_,g){const{slidesPerView:m,slidesPerGroup:f,centeredSlides:x,loop:v,initialSlide:y}=e.params;if(g&&!v&&y>0)return;const{addSlidesBefore:b,addSlidesAfter:M}=e.params.virtual,{from:T,to:C,slides:S,slidesGrid:E,offset:N}=e.virtual;e.params.cssMode||e.updateActiveIndex();const P=e.activeIndex||0;let D;e.rtlTranslate?D="right":D=e.isHorizontal()?"left":"top";let A,O;x?(A=Math.floor(m/2)+f+M,O=Math.floor(m/2)+f+b):(A=m+(f-1)+M,O=(v?m:f)+b);let F=P-O,I=P+A;v||(F=Math.max(F,0),I=Math.min(I,S.length-1));let U=(e.slidesGrid[F]||0)-(e.slidesGrid[0]||0);v&&P>=O?(F-=O,x||(U+=e.slidesGrid[0])):v&&P<O&&(F=-O,x&&(U+=e.slidesGrid[0])),Object.assign(e.virtual,{from:F,to:I,offset:U,slidesGrid:e.slidesGrid,slidesBefore:O,slidesAfter:A});function H(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),i("virtualUpdate")}if(T===F&&C===I&&!_){e.slidesGrid!==E&&U!==N&&e.slides.forEach(K=>{K.style[D]=`${U-Math.abs(e.cssOverflowAdjustment())}px`}),e.updateProgress(),i("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:U,from:F,to:I,slides:function(){const ie=[];for(let ce=F;ce<=I;ce+=1)ie.push(S[ce]);return ie}()}),e.params.virtual.renderExternalUpdate?H():i("virtualUpdate");return}const X=[],k=[],V=K=>{let ie=K;return K<0?ie=S.length+K:ie>=S.length&&(ie=ie-S.length),ie};if(_)e.slides.filter(K=>K.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(K=>{K.remove()});else for(let K=T;K<=C;K+=1)if(K<F||K>I){const ie=V(K);e.slides.filter(ce=>ce.matches(`.${e.params.slideClass}[data-swiper-slide-index="${ie}"], swiper-slide[data-swiper-slide-index="${ie}"]`)).forEach(ce=>{ce.remove()})}const z=v?-S.length:0,J=v?S.length*2:S.length;for(let K=z;K<J;K+=1)if(K>=F&&K<=I){const ie=V(K);typeof C>"u"||_?k.push(ie):(K>C&&k.push(ie),K<T&&X.push(ie))}if(k.forEach(K=>{e.slidesEl.append(l(S[K],K))}),v)for(let K=X.length-1;K>=0;K-=1){const ie=X[K];e.slidesEl.prepend(l(S[ie],ie))}else X.sort((K,ie)=>ie-K),X.forEach(K=>{e.slidesEl.prepend(l(S[K],K))});Dt(e.slidesEl,".swiper-slide, swiper-slide").forEach(K=>{K.style[D]=`${U-Math.abs(e.cssOverflowAdjustment())}px`}),H()}function u(_){if(typeof _=="object"&&"length"in _)for(let g=0;g<_.length;g+=1)_[g]&&e.virtual.slides.push(_[g]);else e.virtual.slides.push(_);c(!0)}function d(_){const g=e.activeIndex;let m=g+1,f=1;if(Array.isArray(_)){for(let x=0;x<_.length;x+=1)_[x]&&e.virtual.slides.unshift(_[x]);m=g+_.length,f=_.length}else e.virtual.slides.unshift(_);if(e.params.virtual.cache){const x=e.virtual.cache,v={};Object.keys(x).forEach(y=>{const b=x[y],M=b.getAttribute("data-swiper-slide-index");M&&b.setAttribute("data-swiper-slide-index",parseInt(M,10)+f),v[parseInt(y,10)+f]=b}),e.virtual.cache=v}c(!0),e.slideTo(m,0)}function h(_){if(typeof _>"u"||_===null)return;let g=e.activeIndex;if(Array.isArray(_))for(let m=_.length-1;m>=0;m-=1)e.params.virtual.cache&&(delete e.virtual.cache[_[m]],Object.keys(e.virtual.cache).forEach(f=>{f>_&&(e.virtual.cache[f-1]=e.virtual.cache[f],e.virtual.cache[f-1].setAttribute("data-swiper-slide-index",f-1),delete e.virtual.cache[f])})),e.virtual.slides.splice(_[m],1),_[m]<g&&(g-=1),g=Math.max(g,0);else e.params.virtual.cache&&(delete e.virtual.cache[_],Object.keys(e.virtual.cache).forEach(m=>{m>_&&(e.virtual.cache[m-1]=e.virtual.cache[m],e.virtual.cache[m-1].setAttribute("data-swiper-slide-index",m-1),delete e.virtual.cache[m])})),e.virtual.slides.splice(_,1),_<g&&(g-=1),g=Math.max(g,0);c(!0),e.slideTo(g,0)}function p(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),c(!0),e.slideTo(0,0)}n("beforeInit",()=>{if(!e.params.virtual.enabled)return;let _;if(typeof e.passedParams.virtual.slides>"u"){const g=[...e.slidesEl.children].filter(m=>m.matches(`.${e.params.slideClass}, swiper-slide`));g&&g.length&&(e.virtual.slides=[...g],_=!0,g.forEach((m,f)=>{m.setAttribute("data-swiper-slide-index",f),e.virtual.cache[f]=m,m.remove()}))}_||(e.virtual.slides=e.params.virtual.slides),e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,c(!1,!0)}),n("setTranslate",()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(r),r=setTimeout(()=>{c()},100)):c())}),n("init update resize",()=>{e.params.virtual.enabled&&e.params.cssMode&&Er(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:u,prependSlide:d,removeSlide:h,removeAllSlides:p,update:c})}function IM(s){let{swiper:e,extendParams:t,on:n,emit:i}=s;const r=Nt(),a=mt();e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function o(u){if(!e.enabled)return;const{rtlTranslate:d}=e;let h=u;h.originalEvent&&(h=h.originalEvent);const p=h.keyCode||h.charCode,_=e.params.keyboard.pageUpDown,g=_&&p===33,m=_&&p===34,f=p===37,x=p===39,v=p===38,y=p===40;if(!e.allowSlideNext&&(e.isHorizontal()&&x||e.isVertical()&&y||m)||!e.allowSlidePrev&&(e.isHorizontal()&&f||e.isVertical()&&v||g))return!1;if(!(h.shiftKey||h.altKey||h.ctrlKey||h.metaKey)&&!(r.activeElement&&r.activeElement.nodeName&&(r.activeElement.nodeName.toLowerCase()==="input"||r.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(g||m||f||x||v||y)){let b=!1;if(is(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&is(e.el,`.${e.params.slideActiveClass}`).length===0)return;const M=e.el,T=M.clientWidth,C=M.clientHeight,S=a.innerWidth,E=a.innerHeight,N=ja(M);d&&(N.left-=M.scrollLeft);const P=[[N.left,N.top],[N.left+T,N.top],[N.left,N.top+C],[N.left+T,N.top+C]];for(let D=0;D<P.length;D+=1){const A=P[D];if(A[0]>=0&&A[0]<=S&&A[1]>=0&&A[1]<=E){if(A[0]===0&&A[1]===0)continue;b=!0}}if(!b)return}e.isHorizontal()?((g||m||f||x)&&(h.preventDefault?h.preventDefault():h.returnValue=!1),((m||x)&&!d||(g||f)&&d)&&e.slideNext(),((g||f)&&!d||(m||x)&&d)&&e.slidePrev()):((g||m||v||y)&&(h.preventDefault?h.preventDefault():h.returnValue=!1),(m||y)&&e.slideNext(),(g||v)&&e.slidePrev()),i("keyPress",p)}}function l(){e.keyboard.enabled||(r.addEventListener("keydown",o),e.keyboard.enabled=!0)}function c(){e.keyboard.enabled&&(r.removeEventListener("keydown",o),e.keyboard.enabled=!1)}n("init",()=>{e.params.keyboard.enabled&&l()}),n("destroy",()=>{e.keyboard.enabled&&c()}),Object.assign(e.keyboard,{enable:l,disable:c})}function NM(s){let{swiper:e,extendParams:t,on:n,emit:i}=s;const r=mt();t({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let a,o=yn(),l;const c=[];function u(v){let T=0,C=0,S=0,E=0;return"detail"in v&&(C=v.detail),"wheelDelta"in v&&(C=-v.wheelDelta/120),"wheelDeltaY"in v&&(C=-v.wheelDeltaY/120),"wheelDeltaX"in v&&(T=-v.wheelDeltaX/120),"axis"in v&&v.axis===v.HORIZONTAL_AXIS&&(T=C,C=0),S=T*10,E=C*10,"deltaY"in v&&(E=v.deltaY),"deltaX"in v&&(S=v.deltaX),v.shiftKey&&!S&&(S=E,E=0),(S||E)&&v.deltaMode&&(v.deltaMode===1?(S*=40,E*=40):(S*=800,E*=800)),S&&!T&&(T=S<1?-1:1),E&&!C&&(C=E<1?-1:1),{spinX:T,spinY:C,pixelX:S,pixelY:E}}function d(){e.enabled&&(e.mouseEntered=!0)}function h(){e.enabled&&(e.mouseEntered=!1)}function p(v){return e.params.mousewheel.thresholdDelta&&v.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&yn()-o<e.params.mousewheel.thresholdTime?!1:v.delta>=6&&yn()-o<60?!0:(v.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),i("scroll",v.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),i("scroll",v.raw)),o=new r.Date().getTime(),!1)}function _(v){const y=e.params.mousewheel;if(v.direction<0){if(e.isEnd&&!e.params.loop&&y.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&y.releaseOnEdges)return!0;return!1}function g(v){let y=v,b=!0;if(!e.enabled||v.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;const M=e.params.mousewheel;e.params.cssMode&&y.preventDefault();let T=e.el;e.params.mousewheel.eventsTarget!=="container"&&(T=document.querySelector(e.params.mousewheel.eventsTarget));const C=T&&T.contains(y.target);if(!e.mouseEntered&&!C&&!M.releaseOnEdges)return!0;y.originalEvent&&(y=y.originalEvent);let S=0;const E=e.rtlTranslate?-1:1,N=u(y);if(M.forceToAxis)if(e.isHorizontal())if(Math.abs(N.pixelX)>Math.abs(N.pixelY))S=-N.pixelX*E;else return!0;else if(Math.abs(N.pixelY)>Math.abs(N.pixelX))S=-N.pixelY;else return!0;else S=Math.abs(N.pixelX)>Math.abs(N.pixelY)?-N.pixelX*E:-N.pixelY;if(S===0)return!0;M.invert&&(S=-S);let P=e.getTranslate()+S*M.sensitivity;if(P>=e.minTranslate()&&(P=e.minTranslate()),P<=e.maxTranslate()&&(P=e.maxTranslate()),b=e.params.loop?!0:!(P===e.minTranslate()||P===e.maxTranslate()),b&&e.params.nested&&y.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const D={time:yn(),delta:Math.abs(S),direction:Math.sign(S),raw:v};c.length>=2&&c.shift();const A=c.length?c[c.length-1]:void 0;if(c.push(D),A?(D.direction!==A.direction||D.delta>A.delta||D.time>A.time+150)&&p(D):p(D),_(D))return!0}else{const D={time:yn(),delta:Math.abs(S),direction:Math.sign(S)},A=l&&D.time<l.time+500&&D.delta<=l.delta&&D.direction===l.direction;if(!A){l=void 0;let O=e.getTranslate()+S*M.sensitivity;const F=e.isBeginning,I=e.isEnd;if(O>=e.minTranslate()&&(O=e.minTranslate()),O<=e.maxTranslate()&&(O=e.maxTranslate()),e.setTransition(0),e.setTranslate(O),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!F&&e.isBeginning||!I&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:D.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(a),a=void 0,c.length>=15&&c.shift();const U=c.length?c[c.length-1]:void 0,H=c[0];if(c.push(D),U&&(D.delta>U.delta||D.direction!==U.direction))c.splice(0);else if(c.length>=15&&D.time-H.time<500&&H.delta-D.delta>=1&&D.delta<=6){const X=S>0?.8:.2;l=D,c.splice(0),a=cs(()=>{e.slideToClosest(e.params.speed,!0,void 0,X)},0)}a||(a=cs(()=>{l=D,c.splice(0),e.slideToClosest(e.params.speed,!0,void 0,.5)},500))}if(A||i("scroll",y),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),M.releaseOnEdges&&(O===e.minTranslate()||O===e.maxTranslate()))return!0}}return y.preventDefault?y.preventDefault():y.returnValue=!1,!1}function m(v){let y=e.el;e.params.mousewheel.eventsTarget!=="container"&&(y=document.querySelector(e.params.mousewheel.eventsTarget)),y[v]("mouseenter",d),y[v]("mouseleave",h),y[v]("wheel",g)}function f(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",g),!0):e.mousewheel.enabled?!1:(m("addEventListener"),e.mousewheel.enabled=!0,!0)}function x(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,g),!0):e.mousewheel.enabled?(m("removeEventListener"),e.mousewheel.enabled=!1,!0):!1}n("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&x(),e.params.mousewheel.enabled&&f()}),n("destroy",()=>{e.params.cssMode&&f(),e.mousewheel.enabled&&x()}),Object.assign(e.mousewheel,{enable:f,disable:x})}function wc(s,e,t,n){return s.params.createElements&&Object.keys(n).forEach(i=>{if(!t[i]&&t.auto===!0){let r=Dt(s.el,`.${n[i]}`)[0];r||(r=un("div",n[i]),r.className=n[i],s.el.append(r)),t[i]=r,e[i]=r}}),t}function OM(s){let{swiper:e,extendParams:t,on:n,emit:i}=s;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function r(_){let g;return _&&typeof _=="string"&&e.isElement&&(g=e.el.querySelector(_),g)?g:(_&&(typeof _=="string"&&(g=[...document.querySelectorAll(_)]),e.params.uniqueNavElements&&typeof _=="string"&&g&&g.length>1&&e.el.querySelectorAll(_).length===1?g=e.el.querySelector(_):g&&g.length===1&&(g=g[0])),_&&!g?_:g)}function a(_,g){const m=e.params.navigation;_=Ve(_),_.forEach(f=>{f&&(f.classList[g?"add":"remove"](...m.disabledClass.split(" ")),f.tagName==="BUTTON"&&(f.disabled=g),e.params.watchOverflow&&e.enabled&&f.classList[e.isLocked?"add":"remove"](m.lockClass))})}function o(){const{nextEl:_,prevEl:g}=e.navigation;if(e.params.loop){a(g,!1),a(_,!1);return}a(g,e.isBeginning&&!e.params.rewind),a(_,e.isEnd&&!e.params.rewind)}function l(_){_.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function c(_){_.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function u(){const _=e.params.navigation;if(e.params.navigation=wc(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(_.nextEl||_.prevEl))return;let g=r(_.nextEl),m=r(_.prevEl);Object.assign(e.navigation,{nextEl:g,prevEl:m}),g=Ve(g),m=Ve(m);const f=(x,v)=>{x&&x.addEventListener("click",v==="next"?c:l),!e.enabled&&x&&x.classList.add(..._.lockClass.split(" "))};g.forEach(x=>f(x,"next")),m.forEach(x=>f(x,"prev"))}function d(){let{nextEl:_,prevEl:g}=e.navigation;_=Ve(_),g=Ve(g);const m=(f,x)=>{f.removeEventListener("click",x==="next"?c:l),f.classList.remove(...e.params.navigation.disabledClass.split(" "))};_.forEach(f=>m(f,"next")),g.forEach(f=>m(f,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?p():(u(),o())}),n("toEdge fromEdge lock unlock",()=>{o()}),n("destroy",()=>{d()}),n("enable disable",()=>{let{nextEl:_,prevEl:g}=e.navigation;if(_=Ve(_),g=Ve(g),e.enabled){o();return}[..._,...g].filter(m=>!!m).forEach(m=>m.classList.add(e.params.navigation.lockClass))}),n("click",(_,g)=>{let{nextEl:m,prevEl:f}=e.navigation;m=Ve(m),f=Ve(f);const x=g.target;if(e.params.navigation.hideOnClick&&!f.includes(x)&&!m.includes(x)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===x||e.pagination.el.contains(x)))return;let v;m.length?v=m[0].classList.contains(e.params.navigation.hiddenClass):f.length&&(v=f[0].classList.contains(e.params.navigation.hiddenClass)),i(v===!0?"navigationShow":"navigationHide"),[...m,...f].filter(y=>!!y).forEach(y=>y.classList.toggle(e.params.navigation.hiddenClass))}});const h=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),o()},p=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:h,disable:p,update:o,init:u,destroy:d})}function ei(s){return s===void 0&&(s=""),`.${s.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function UM(s){let{swiper:e,extendParams:t,on:n,emit:i}=s;const r="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),e.pagination={el:null,bullets:[]};let a,o=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function c(f,x){const{bulletActiveClass:v}=e.params.pagination;f&&(f=f[`${x==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${v}-${x}`),f=f[`${x==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${v}-${x}-${x}`)))}function u(f){const x=f.target.closest(ei(e.params.pagination.bulletClass));if(!x)return;f.preventDefault();const v=Vr(x)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===v)return;e.slideToLoop(v)}else e.slideTo(v)}function d(){const f=e.rtl,x=e.params.pagination;if(l())return;let v=e.pagination.el;v=Ve(v);let y,b;const M=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,T=e.params.loop?Math.ceil(M/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(b=e.previousRealIndex||0,y=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(y=e.snapIndex,b=e.previousSnapIndex):(b=e.previousIndex||0,y=e.activeIndex||0),x.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const C=e.pagination.bullets;let S,E,N;if(x.dynamicBullets&&(a=Vl(C[0],e.isHorizontal()?"width":"height"),v.forEach(P=>{P.style[e.isHorizontal()?"width":"height"]=`${a*(x.dynamicMainBullets+4)}px`}),x.dynamicMainBullets>1&&b!==void 0&&(o+=y-(b||0),o>x.dynamicMainBullets-1?o=x.dynamicMainBullets-1:o<0&&(o=0)),S=Math.max(y-o,0),E=S+(Math.min(C.length,x.dynamicMainBullets)-1),N=(E+S)/2),C.forEach(P=>{const D=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(A=>`${x.bulletActiveClass}${A}`)].map(A=>typeof A=="string"&&A.includes(" ")?A.split(" "):A).flat();P.classList.remove(...D)}),v.length>1)C.forEach(P=>{const D=Vr(P);D===y?P.classList.add(...x.bulletActiveClass.split(" ")):e.isElement&&P.setAttribute("part","bullet"),x.dynamicBullets&&(D>=S&&D<=E&&P.classList.add(...`${x.bulletActiveClass}-main`.split(" ")),D===S&&c(P,"prev"),D===E&&c(P,"next"))});else{const P=C[y];if(P&&P.classList.add(...x.bulletActiveClass.split(" ")),e.isElement&&C.forEach((D,A)=>{D.setAttribute("part",A===y?"bullet-active":"bullet")}),x.dynamicBullets){const D=C[S],A=C[E];for(let O=S;O<=E;O+=1)C[O]&&C[O].classList.add(...`${x.bulletActiveClass}-main`.split(" "));c(D,"prev"),c(A,"next")}}if(x.dynamicBullets){const P=Math.min(C.length,x.dynamicMainBullets+4),D=(a*P-a)/2-N*a,A=f?"right":"left";C.forEach(O=>{O.style[e.isHorizontal()?A:"top"]=`${D}px`})}}v.forEach((C,S)=>{if(x.type==="fraction"&&(C.querySelectorAll(ei(x.currentClass)).forEach(E=>{E.textContent=x.formatFractionCurrent(y+1)}),C.querySelectorAll(ei(x.totalClass)).forEach(E=>{E.textContent=x.formatFractionTotal(T)})),x.type==="progressbar"){let E;x.progressbarOpposite?E=e.isHorizontal()?"vertical":"horizontal":E=e.isHorizontal()?"horizontal":"vertical";const N=(y+1)/T;let P=1,D=1;E==="horizontal"?P=N:D=N,C.querySelectorAll(ei(x.progressbarFillClass)).forEach(A=>{A.style.transform=`translate3d(0,0,0) scaleX(${P}) scaleY(${D})`,A.style.transitionDuration=`${e.params.speed}ms`})}x.type==="custom"&&x.renderCustom?(C.innerHTML=x.renderCustom(e,y+1,T),S===0&&i("paginationRender",C)):(S===0&&i("paginationRender",C),i("paginationUpdate",C)),e.params.watchOverflow&&e.enabled&&C.classList[e.isLocked?"add":"remove"](x.lockClass)})}function h(){const f=e.params.pagination;if(l())return;const x=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let v=e.pagination.el;v=Ve(v);let y="";if(f.type==="bullets"){let b=e.params.loop?Math.ceil(x/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&b>x&&(b=x);for(let M=0;M<b;M+=1)f.renderBullet?y+=f.renderBullet.call(e,M,f.bulletClass):y+=`<${f.bulletElement} ${e.isElement?'part="bullet"':""} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?y=f.renderFraction.call(e,f.currentClass,f.totalClass):y=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?y=f.renderProgressbar.call(e,f.progressbarFillClass):y=`<span class="${f.progressbarFillClass}"></span>`),e.pagination.bullets=[],v.forEach(b=>{f.type!=="custom"&&(b.innerHTML=y||""),f.type==="bullets"&&e.pagination.bullets.push(...b.querySelectorAll(ei(f.bulletClass)))}),f.type!=="custom"&&i("paginationRender",v[0])}function p(){e.params.pagination=wc(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const f=e.params.pagination;if(!f.el)return;let x;typeof f.el=="string"&&e.isElement&&(x=e.el.querySelector(f.el)),!x&&typeof f.el=="string"&&(x=[...document.querySelectorAll(f.el)]),x||(x=f.el),!(!x||x.length===0)&&(e.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(x)&&x.length>1&&(x=[...e.el.querySelectorAll(f.el)],x.length>1&&(x=x.filter(v=>is(v,".swiper")[0]===e.el)[0])),Array.isArray(x)&&x.length===1&&(x=x[0]),Object.assign(e.pagination,{el:x}),x=Ve(x),x.forEach(v=>{f.type==="bullets"&&f.clickable&&v.classList.add(...(f.clickableClass||"").split(" ")),v.classList.add(f.modifierClass+f.type),v.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(v.classList.add(`${f.modifierClass}${f.type}-dynamic`),o=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&v.classList.add(f.progressbarOppositeClass),f.clickable&&v.addEventListener("click",u),e.enabled||v.classList.add(f.lockClass)}))}function _(){const f=e.params.pagination;if(l())return;let x=e.pagination.el;x&&(x=Ve(x),x.forEach(v=>{v.classList.remove(f.hiddenClass),v.classList.remove(f.modifierClass+f.type),v.classList.remove(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&(v.classList.remove(...(f.clickableClass||"").split(" ")),v.removeEventListener("click",u))})),e.pagination.bullets&&e.pagination.bullets.forEach(v=>v.classList.remove(...f.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const f=e.params.pagination;let{el:x}=e.pagination;x=Ve(x),x.forEach(v=>{v.classList.remove(f.horizontalClass,f.verticalClass),v.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?m():(p(),h(),d())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),n("snapIndexChange",()=>{d()}),n("snapGridLengthChange",()=>{h(),d()}),n("destroy",()=>{_()}),n("enable disable",()=>{let{el:f}=e.pagination;f&&(f=Ve(f),f.forEach(x=>x.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{d()}),n("click",(f,x)=>{const v=x.target,y=Ve(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&y&&y.length>0&&!v.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&v===e.navigation.nextEl||e.navigation.prevEl&&v===e.navigation.prevEl))return;const b=y[0].classList.contains(e.params.pagination.hiddenClass);i(b===!0?"paginationShow":"paginationHide"),y.forEach(M=>M.classList.toggle(e.params.pagination.hiddenClass))}});const g=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=Ve(f),f.forEach(x=>x.classList.remove(e.params.pagination.paginationDisabledClass))),p(),h(),d()},m=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=Ve(f),f.forEach(x=>x.classList.add(e.params.pagination.paginationDisabledClass))),_()};Object.assign(e.pagination,{enable:g,disable:m,render:h,update:d,init:p,destroy:_})}function FM(s){let{swiper:e,extendParams:t,on:n,emit:i}=s;const r=Nt();let a=!1,o=null,l=null,c,u,d,h;t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function p(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:P,rtlTranslate:D}=e,{dragEl:A,el:O}=P,F=e.params.scrollbar,I=e.params.loop?e.progressLoop:e.progress;let U=u,H=(d-u)*I;D?(H=-H,H>0?(U=u-H,H=0):-H+u>d&&(U=d+H)):H<0?(U=u+H,H=0):H+u>d&&(U=d-H),e.isHorizontal()?(A.style.transform=`translate3d(${H}px, 0, 0)`,A.style.width=`${U}px`):(A.style.transform=`translate3d(0px, ${H}px, 0)`,A.style.height=`${U}px`),F.hide&&(clearTimeout(o),O.style.opacity=1,o=setTimeout(()=>{O.style.opacity=0,O.style.transitionDuration="400ms"},1e3))}function _(P){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${P}ms`)}function g(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:P}=e,{dragEl:D,el:A}=P;D.style.width="",D.style.height="",d=e.isHorizontal()?A.offsetWidth:A.offsetHeight,h=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?u=d*h:u=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?D.style.width=`${u}px`:D.style.height=`${u}px`,h>=1?A.style.display="none":A.style.display="",e.params.scrollbar.hide&&(A.style.opacity=0),e.params.watchOverflow&&e.enabled&&P.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function m(P){return e.isHorizontal()?P.clientX:P.clientY}function f(P){const{scrollbar:D,rtlTranslate:A}=e,{el:O}=D;let F;F=(m(P)-ja(O)[e.isHorizontal()?"left":"top"]-(c!==null?c:u/2))/(d-u),F=Math.max(Math.min(F,1),0),A&&(F=1-F);const I=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*F;e.updateProgress(I),e.setTranslate(I),e.updateActiveIndex(),e.updateSlidesClasses()}function x(P){const D=e.params.scrollbar,{scrollbar:A,wrapperEl:O}=e,{el:F,dragEl:I}=A;a=!0,c=P.target===I?m(P)-P.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,P.preventDefault(),P.stopPropagation(),O.style.transitionDuration="100ms",I.style.transitionDuration="100ms",f(P),clearTimeout(l),F.style.transitionDuration="0ms",D.hide&&(F.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),i("scrollbarDragStart",P)}function v(P){const{scrollbar:D,wrapperEl:A}=e,{el:O,dragEl:F}=D;a&&(P.preventDefault&&P.cancelable?P.preventDefault():P.returnValue=!1,f(P),A.style.transitionDuration="0ms",O.style.transitionDuration="0ms",F.style.transitionDuration="0ms",i("scrollbarDragMove",P))}function y(P){const D=e.params.scrollbar,{scrollbar:A,wrapperEl:O}=e,{el:F}=A;a&&(a=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",O.style.transitionDuration=""),D.hide&&(clearTimeout(l),l=cs(()=>{F.style.opacity=0,F.style.transitionDuration="400ms"},1e3)),i("scrollbarDragEnd",P),D.snapOnRelease&&e.slideToClosest())}function b(P){const{scrollbar:D,params:A}=e,O=D.el;if(!O)return;const F=O,I=A.passiveListeners?{passive:!1,capture:!1}:!1,U=A.passiveListeners?{passive:!0,capture:!1}:!1;if(!F)return;const H=P==="on"?"addEventListener":"removeEventListener";F[H]("pointerdown",x,I),r[H]("pointermove",v,I),r[H]("pointerup",y,U)}function M(){!e.params.scrollbar.el||!e.scrollbar.el||b("on")}function T(){!e.params.scrollbar.el||!e.scrollbar.el||b("off")}function C(){const{scrollbar:P,el:D}=e;e.params.scrollbar=wc(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const A=e.params.scrollbar;if(!A.el)return;let O;if(typeof A.el=="string"&&e.isElement&&(O=e.el.querySelector(A.el)),!O&&typeof A.el=="string"){if(O=r.querySelectorAll(A.el),!O.length)return}else O||(O=A.el);e.params.uniqueNavElements&&typeof A.el=="string"&&O.length>1&&D.querySelectorAll(A.el).length===1&&(O=D.querySelector(A.el)),O.length>0&&(O=O[0]),O.classList.add(e.isHorizontal()?A.horizontalClass:A.verticalClass);let F;O&&(F=O.querySelector(ei(e.params.scrollbar.dragClass)),F||(F=un("div",e.params.scrollbar.dragClass),O.append(F))),Object.assign(P,{el:O,dragEl:F}),A.draggable&&M(),O&&O.classList[e.enabled?"remove":"add"](...pi(e.params.scrollbar.lockClass))}function S(){const P=e.params.scrollbar,D=e.scrollbar.el;D&&D.classList.remove(...pi(e.isHorizontal()?P.horizontalClass:P.verticalClass)),T()}n("changeDirection",()=>{if(!e.scrollbar||!e.scrollbar.el)return;const P=e.params.scrollbar;let{el:D}=e.scrollbar;D=Ve(D),D.forEach(A=>{A.classList.remove(P.horizontalClass,P.verticalClass),A.classList.add(e.isHorizontal()?P.horizontalClass:P.verticalClass)})}),n("init",()=>{e.params.scrollbar.enabled===!1?N():(C(),g(),p())}),n("update resize observerUpdate lock unlock changeDirection",()=>{g()}),n("setTranslate",()=>{p()}),n("setTransition",(P,D)=>{_(D)}),n("enable disable",()=>{const{el:P}=e.scrollbar;P&&P.classList[e.enabled?"remove":"add"](...pi(e.params.scrollbar.lockClass))}),n("destroy",()=>{S()});const E=()=>{e.el.classList.remove(...pi(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...pi(e.params.scrollbar.scrollbarDisabledClass)),C(),g(),p()},N=()=>{e.el.classList.add(...pi(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...pi(e.params.scrollbar.scrollbarDisabledClass)),S()};Object.assign(e.scrollbar,{enable:E,disable:N,updateSize:g,setTranslate:p,init:C,destroy:S})}function BM(s){let{swiper:e,extendParams:t,on:n}=s;t({parallax:{enabled:!1}});const i="[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",r=(l,c)=>{const{rtl:u}=e,d=u?-1:1,h=l.getAttribute("data-swiper-parallax")||"0";let p=l.getAttribute("data-swiper-parallax-x"),_=l.getAttribute("data-swiper-parallax-y");const g=l.getAttribute("data-swiper-parallax-scale"),m=l.getAttribute("data-swiper-parallax-opacity"),f=l.getAttribute("data-swiper-parallax-rotate");if(p||_?(p=p||"0",_=_||"0"):e.isHorizontal()?(p=h,_="0"):(_=h,p="0"),p.indexOf("%")>=0?p=`${parseInt(p,10)*c*d}%`:p=`${p*c*d}px`,_.indexOf("%")>=0?_=`${parseInt(_,10)*c}%`:_=`${_*c}px`,typeof m<"u"&&m!==null){const v=m-(m-1)*(1-Math.abs(c));l.style.opacity=v}let x=`translate3d(${p}, ${_}, 0px)`;if(typeof g<"u"&&g!==null){const v=g-(g-1)*(1-Math.abs(c));x+=` scale(${v})`}if(f&&typeof f<"u"&&f!==null){const v=f*c*-1;x+=` rotate(${v}deg)`}l.style.transform=x},a=()=>{const{el:l,slides:c,progress:u,snapGrid:d,isElement:h}=e,p=Dt(l,i);e.isElement&&p.push(...Dt(e.hostEl,i)),p.forEach(_=>{r(_,u)}),c.forEach((_,g)=>{let m=_.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(m+=Math.ceil(g/2)-u*(d.length-1)),m=Math.min(Math.max(m,-1),1),_.querySelectorAll(`${i}, [data-swiper-parallax-rotate]`).forEach(f=>{r(f,m)})})},o=function(l){l===void 0&&(l=e.params.speed);const{el:c,hostEl:u}=e,d=[...c.querySelectorAll(i)];e.isElement&&d.push(...u.querySelectorAll(i)),d.forEach(h=>{let p=parseInt(h.getAttribute("data-swiper-parallax-duration"),10)||l;l===0&&(p=0),h.style.transitionDuration=`${p}ms`})};n("beforeInit",()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),n("init",()=>{e.params.parallax.enabled&&a()}),n("setTranslate",()=>{e.params.parallax.enabled&&a()}),n("setTransition",(l,c)=>{e.params.parallax.enabled&&o(c)})}function zM(s){let{swiper:e,extendParams:t,on:n,emit:i}=s;const r=mt();t({zoom:{enabled:!1,limitToOriginalSize:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let a=1,o=!1,l,c;const u=[],d={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},h={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},p={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let _=1;Object.defineProperty(e.zoom,"scale",{get(){return _},set(k){if(_!==k){const V=d.imageEl,z=d.slideEl;i("zoomChange",k,V,z)}_=k}});function g(){if(u.length<2)return 1;const k=u[0].pageX,V=u[0].pageY,z=u[1].pageX,J=u[1].pageY;return Math.sqrt((z-k)**2+(J-V)**2)}function m(){const k=e.params.zoom,V=d.imageWrapEl.getAttribute("data-swiper-zoom")||k.maxRatio;if(k.limitToOriginalSize&&d.imageEl&&d.imageEl.naturalWidth){const z=d.imageEl.naturalWidth/d.imageEl.offsetWidth;return Math.min(z,V)}return V}function f(){if(u.length<2)return{x:null,y:null};const k=d.imageEl.getBoundingClientRect();return[(u[0].pageX+(u[1].pageX-u[0].pageX)/2-k.x-r.scrollX)/a,(u[0].pageY+(u[1].pageY-u[0].pageY)/2-k.y-r.scrollY)/a]}function x(){return e.isElement?"swiper-slide":`.${e.params.slideClass}`}function v(k){const V=x();return!!(k.target.matches(V)||e.slides.filter(z=>z.contains(k.target)).length>0)}function y(k){const V=`.${e.params.zoom.containerClass}`;return!!(k.target.matches(V)||[...e.hostEl.querySelectorAll(V)].filter(z=>z.contains(k.target)).length>0)}function b(k){if(k.pointerType==="mouse"&&u.splice(0,u.length),!v(k))return;const V=e.params.zoom;if(l=!1,c=!1,u.push(k),!(u.length<2)){if(l=!0,d.scaleStart=g(),!d.slideEl){d.slideEl=k.target.closest(`.${e.params.slideClass}, swiper-slide`),d.slideEl||(d.slideEl=e.slides[e.activeIndex]);let z=d.slideEl.querySelector(`.${V.containerClass}`);if(z&&(z=z.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),d.imageEl=z,z?d.imageWrapEl=is(d.imageEl,`.${V.containerClass}`)[0]:d.imageWrapEl=void 0,!d.imageWrapEl){d.imageEl=void 0;return}d.maxRatio=m()}if(d.imageEl){const[z,J]=f();d.originX=z,d.originY=J,d.imageEl.style.transitionDuration="0ms"}o=!0}}function M(k){if(!v(k))return;const V=e.params.zoom,z=e.zoom,J=u.findIndex(K=>K.pointerId===k.pointerId);J>=0&&(u[J]=k),!(u.length<2)&&(c=!0,d.scaleMove=g(),d.imageEl&&(z.scale=d.scaleMove/d.scaleStart*a,z.scale>d.maxRatio&&(z.scale=d.maxRatio-1+(z.scale-d.maxRatio+1)**.5),z.scale<V.minRatio&&(z.scale=V.minRatio+1-(V.minRatio-z.scale+1)**.5),d.imageEl.style.transform=`translate3d(0,0,0) scale(${z.scale})`))}function T(k){if(!v(k)||k.pointerType==="mouse"&&k.type==="pointerout")return;const V=e.params.zoom,z=e.zoom,J=u.findIndex(K=>K.pointerId===k.pointerId);J>=0&&u.splice(J,1),!(!l||!c)&&(l=!1,c=!1,d.imageEl&&(z.scale=Math.max(Math.min(z.scale,d.maxRatio),V.minRatio),d.imageEl.style.transitionDuration=`${e.params.speed}ms`,d.imageEl.style.transform=`translate3d(0,0,0) scale(${z.scale})`,a=z.scale,o=!1,z.scale>1&&d.slideEl?d.slideEl.classList.add(`${V.zoomedSlideClass}`):z.scale<=1&&d.slideEl&&d.slideEl.classList.remove(`${V.zoomedSlideClass}`),z.scale===1&&(d.originX=0,d.originY=0,d.slideEl=void 0)))}let C;function S(){e.touchEventsData.preventTouchMoveFromPointerMove=!1}function E(){clearTimeout(C),e.touchEventsData.preventTouchMoveFromPointerMove=!0,C=setTimeout(()=>{S()})}function N(k){const V=e.device;if(!d.imageEl||h.isTouched)return;V.android&&k.cancelable&&k.preventDefault(),h.isTouched=!0;const z=u.length>0?u[0]:k;h.touchesStart.x=z.pageX,h.touchesStart.y=z.pageY}function P(k){if(!v(k)||!y(k))return;const V=e.zoom;if(!d.imageEl||!h.isTouched||!d.slideEl)return;h.isMoved||(h.width=d.imageEl.offsetWidth||d.imageEl.clientWidth,h.height=d.imageEl.offsetHeight||d.imageEl.clientHeight,h.startX=Gl(d.imageWrapEl,"x")||0,h.startY=Gl(d.imageWrapEl,"y")||0,d.slideWidth=d.slideEl.offsetWidth,d.slideHeight=d.slideEl.offsetHeight,d.imageWrapEl.style.transitionDuration="0ms");const z=h.width*V.scale,J=h.height*V.scale;if(z<d.slideWidth&&J<d.slideHeight){S();return}if(h.minX=Math.min(d.slideWidth/2-z/2,0),h.maxX=-h.minX,h.minY=Math.min(d.slideHeight/2-J/2,0),h.maxY=-h.minY,h.touchesCurrent.x=u.length>0?u[0].pageX:k.pageX,h.touchesCurrent.y=u.length>0?u[0].pageY:k.pageY,Math.max(Math.abs(h.touchesCurrent.x-h.touchesStart.x),Math.abs(h.touchesCurrent.y-h.touchesStart.y))>5&&(e.allowClick=!1),!h.isMoved&&!o){if(e.isHorizontal()&&(Math.floor(h.minX)===Math.floor(h.startX)&&h.touchesCurrent.x<h.touchesStart.x||Math.floor(h.maxX)===Math.floor(h.startX)&&h.touchesCurrent.x>h.touchesStart.x)){h.isTouched=!1,S();return}if(!e.isHorizontal()&&(Math.floor(h.minY)===Math.floor(h.startY)&&h.touchesCurrent.y<h.touchesStart.y||Math.floor(h.maxY)===Math.floor(h.startY)&&h.touchesCurrent.y>h.touchesStart.y)){h.isTouched=!1,S();return}}k.cancelable&&k.preventDefault(),k.stopPropagation(),E(),h.isMoved=!0;const ie=(V.scale-a)/(d.maxRatio-e.params.zoom.minRatio),{originX:ce,originY:ye}=d;h.currentX=h.touchesCurrent.x-h.touchesStart.x+h.startX+ie*(h.width-ce*2),h.currentY=h.touchesCurrent.y-h.touchesStart.y+h.startY+ie*(h.height-ye*2),h.currentX<h.minX&&(h.currentX=h.minX+1-(h.minX-h.currentX+1)**.8),h.currentX>h.maxX&&(h.currentX=h.maxX-1+(h.currentX-h.maxX+1)**.8),h.currentY<h.minY&&(h.currentY=h.minY+1-(h.minY-h.currentY+1)**.8),h.currentY>h.maxY&&(h.currentY=h.maxY-1+(h.currentY-h.maxY+1)**.8),p.prevPositionX||(p.prevPositionX=h.touchesCurrent.x),p.prevPositionY||(p.prevPositionY=h.touchesCurrent.y),p.prevTime||(p.prevTime=Date.now()),p.x=(h.touchesCurrent.x-p.prevPositionX)/(Date.now()-p.prevTime)/2,p.y=(h.touchesCurrent.y-p.prevPositionY)/(Date.now()-p.prevTime)/2,Math.abs(h.touchesCurrent.x-p.prevPositionX)<2&&(p.x=0),Math.abs(h.touchesCurrent.y-p.prevPositionY)<2&&(p.y=0),p.prevPositionX=h.touchesCurrent.x,p.prevPositionY=h.touchesCurrent.y,p.prevTime=Date.now(),d.imageWrapEl.style.transform=`translate3d(${h.currentX}px, ${h.currentY}px,0)`}function D(){const k=e.zoom;if(!d.imageEl)return;if(!h.isTouched||!h.isMoved){h.isTouched=!1,h.isMoved=!1;return}h.isTouched=!1,h.isMoved=!1;let V=300,z=300;const J=p.x*V,K=h.currentX+J,ie=p.y*z,ce=h.currentY+ie;p.x!==0&&(V=Math.abs((K-h.currentX)/p.x)),p.y!==0&&(z=Math.abs((ce-h.currentY)/p.y));const ye=Math.max(V,z);h.currentX=K,h.currentY=ce;const we=h.width*k.scale,pe=h.height*k.scale;h.minX=Math.min(d.slideWidth/2-we/2,0),h.maxX=-h.minX,h.minY=Math.min(d.slideHeight/2-pe/2,0),h.maxY=-h.minY,h.currentX=Math.max(Math.min(h.currentX,h.maxX),h.minX),h.currentY=Math.max(Math.min(h.currentY,h.maxY),h.minY),d.imageWrapEl.style.transitionDuration=`${ye}ms`,d.imageWrapEl.style.transform=`translate3d(${h.currentX}px, ${h.currentY}px,0)`}function A(){const k=e.zoom;d.slideEl&&e.activeIndex!==e.slides.indexOf(d.slideEl)&&(d.imageEl&&(d.imageEl.style.transform="translate3d(0,0,0) scale(1)"),d.imageWrapEl&&(d.imageWrapEl.style.transform="translate3d(0,0,0)"),d.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),k.scale=1,a=1,d.slideEl=void 0,d.imageEl=void 0,d.imageWrapEl=void 0,d.originX=0,d.originY=0)}function O(k){const V=e.zoom,z=e.params.zoom;if(!d.slideEl){k&&k.target&&(d.slideEl=k.target.closest(`.${e.params.slideClass}, swiper-slide`)),d.slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?d.slideEl=Dt(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:d.slideEl=e.slides[e.activeIndex]);let te=d.slideEl.querySelector(`.${z.containerClass}`);te&&(te=te.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),d.imageEl=te,te?d.imageWrapEl=is(d.imageEl,`.${z.containerClass}`)[0]:d.imageWrapEl=void 0}if(!d.imageEl||!d.imageWrapEl)return;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),d.slideEl.classList.add(`${z.zoomedSlideClass}`);let J,K,ie,ce,ye,we,pe,De,$,bt,_e,Ae,de,Ke,Re,L,w,Y;typeof h.touchesStart.x>"u"&&k?(J=k.pageX,K=k.pageY):(J=h.touchesStart.x,K=h.touchesStart.y);const Q=typeof k=="number"?k:null;a===1&&Q&&(J=void 0,K=void 0);const ee=m();V.scale=Q||ee,a=Q||ee,k&&!(a===1&&Q)?(w=d.slideEl.offsetWidth,Y=d.slideEl.offsetHeight,ie=ja(d.slideEl).left+r.scrollX,ce=ja(d.slideEl).top+r.scrollY,ye=ie+w/2-J,we=ce+Y/2-K,$=d.imageEl.offsetWidth||d.imageEl.clientWidth,bt=d.imageEl.offsetHeight||d.imageEl.clientHeight,_e=$*V.scale,Ae=bt*V.scale,de=Math.min(w/2-_e/2,0),Ke=Math.min(Y/2-Ae/2,0),Re=-de,L=-Ke,pe=ye*V.scale,De=we*V.scale,pe<de&&(pe=de),pe>Re&&(pe=Re),De<Ke&&(De=Ke),De>L&&(De=L)):(pe=0,De=0),Q&&V.scale===1&&(d.originX=0,d.originY=0),d.imageWrapEl.style.transitionDuration="300ms",d.imageWrapEl.style.transform=`translate3d(${pe}px, ${De}px,0)`,d.imageEl.style.transitionDuration="300ms",d.imageEl.style.transform=`translate3d(0,0,0) scale(${V.scale})`}function F(){const k=e.zoom,V=e.params.zoom;if(!d.slideEl){e.params.virtual&&e.params.virtual.enabled&&e.virtual?d.slideEl=Dt(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:d.slideEl=e.slides[e.activeIndex];let z=d.slideEl.querySelector(`.${V.containerClass}`);z&&(z=z.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),d.imageEl=z,z?d.imageWrapEl=is(d.imageEl,`.${V.containerClass}`)[0]:d.imageWrapEl=void 0}!d.imageEl||!d.imageWrapEl||(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),k.scale=1,a=1,d.imageWrapEl.style.transitionDuration="300ms",d.imageWrapEl.style.transform="translate3d(0,0,0)",d.imageEl.style.transitionDuration="300ms",d.imageEl.style.transform="translate3d(0,0,0) scale(1)",d.slideEl.classList.remove(`${V.zoomedSlideClass}`),d.slideEl=void 0,d.originX=0,d.originY=0)}function I(k){const V=e.zoom;V.scale&&V.scale!==1?F():O(k)}function U(){const k=e.params.passiveListeners?{passive:!0,capture:!1}:!1,V=e.params.passiveListeners?{passive:!1,capture:!0}:!0;return{passiveListener:k,activeListenerWithCapture:V}}function H(){const k=e.zoom;if(k.enabled)return;k.enabled=!0;const{passiveListener:V,activeListenerWithCapture:z}=U();e.wrapperEl.addEventListener("pointerdown",b,V),e.wrapperEl.addEventListener("pointermove",M,z),["pointerup","pointercancel","pointerout"].forEach(J=>{e.wrapperEl.addEventListener(J,T,V)}),e.wrapperEl.addEventListener("pointermove",P,z)}function X(){const k=e.zoom;if(!k.enabled)return;k.enabled=!1;const{passiveListener:V,activeListenerWithCapture:z}=U();e.wrapperEl.removeEventListener("pointerdown",b,V),e.wrapperEl.removeEventListener("pointermove",M,z),["pointerup","pointercancel","pointerout"].forEach(J=>{e.wrapperEl.removeEventListener(J,T,V)}),e.wrapperEl.removeEventListener("pointermove",P,z)}n("init",()=>{e.params.zoom.enabled&&H()}),n("destroy",()=>{X()}),n("touchStart",(k,V)=>{e.zoom.enabled&&N(V)}),n("touchEnd",(k,V)=>{e.zoom.enabled&&D()}),n("doubleTap",(k,V)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&I(V)}),n("transitionEnd",()=>{e.zoom.enabled&&e.params.zoom.enabled&&A()}),n("slideChange",()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&A()}),Object.assign(e.zoom,{enable:H,disable:X,in:O,out:F,toggle:I})}function kM(s){let{swiper:e,extendParams:t,on:n}=s;t({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0};function i(c,u){const d=function(){let g,m,f;return(x,v)=>{for(m=-1,g=x.length;g-m>1;)f=g+m>>1,x[f]<=v?m=f:g=f;return g}}();this.x=c,this.y=u,this.lastIndex=c.length-1;let h,p;return this.interpolate=function(g){return g?(p=d(this.x,g),h=p-1,(g-this.x[h])*(this.y[p]-this.y[h])/(this.x[p]-this.x[h])+this.y[h]):0},this}function r(c){e.controller.spline=e.params.loop?new i(e.slidesGrid,c.slidesGrid):new i(e.snapGrid,c.snapGrid)}function a(c,u){const d=e.controller.control;let h,p;const _=e.constructor;function g(m){if(m.destroyed)return;const f=e.rtlTranslate?-e.translate:e.translate;e.params.controller.by==="slide"&&(r(m),p=-e.controller.spline.interpolate(-f)),(!p||e.params.controller.by==="container")&&(h=(m.maxTranslate()-m.minTranslate())/(e.maxTranslate()-e.minTranslate()),(Number.isNaN(h)||!Number.isFinite(h))&&(h=1),p=(f-e.minTranslate())*h+m.minTranslate()),e.params.controller.inverse&&(p=m.maxTranslate()-p),m.updateProgress(p),m.setTranslate(p,e),m.updateActiveIndex(),m.updateSlidesClasses()}if(Array.isArray(d))for(let m=0;m<d.length;m+=1)d[m]!==u&&d[m]instanceof _&&g(d[m]);else d instanceof _&&u!==d&&g(d)}function o(c,u){const d=e.constructor,h=e.controller.control;let p;function _(g){g.destroyed||(g.setTransition(c,e),c!==0&&(g.transitionStart(),g.params.autoHeight&&cs(()=>{g.updateAutoHeight()}),Lr(g.wrapperEl,()=>{h&&g.transitionEnd()})))}if(Array.isArray(h))for(p=0;p<h.length;p+=1)h[p]!==u&&h[p]instanceof d&&_(h[p]);else h instanceof d&&u!==h&&_(h)}function l(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}n("beforeInit",()=>{if(typeof window<"u"&&(typeof e.params.controller.control=="string"||e.params.controller.control instanceof HTMLElement)){const c=document.querySelector(e.params.controller.control);if(c&&c.swiper)e.controller.control=c.swiper;else if(c){const u=d=>{e.controller.control=d.detail[0],e.update(),c.removeEventListener("init",u)};c.addEventListener("init",u)}return}e.controller.control=e.params.controller.control}),n("update",()=>{l()}),n("resize",()=>{l()}),n("observerUpdate",()=>{l()}),n("setTranslate",(c,u,d)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTranslate(u,d)}),n("setTransition",(c,u,d)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTransition(u,d)}),Object.assign(e.controller,{setTranslate:a,setTransition:o})}function HM(s){let{swiper:e,extendParams:t,on:n}=s;t({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),e.a11y={clicked:!1};let i=null,r,a,o=new Date().getTime();function l(I){const U=i;U.length!==0&&(U.innerHTML="",U.innerHTML=I)}function c(I){const U=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(I).replace(/x/g,U)}function u(I){I=Ve(I),I.forEach(U=>{U.setAttribute("tabIndex","0")})}function d(I){I=Ve(I),I.forEach(U=>{U.setAttribute("tabIndex","-1")})}function h(I,U){I=Ve(I),I.forEach(H=>{H.setAttribute("role",U)})}function p(I,U){I=Ve(I),I.forEach(H=>{H.setAttribute("aria-roledescription",U)})}function _(I,U){I=Ve(I),I.forEach(H=>{H.setAttribute("aria-controls",U)})}function g(I,U){I=Ve(I),I.forEach(H=>{H.setAttribute("aria-label",U)})}function m(I,U){I=Ve(I),I.forEach(H=>{H.setAttribute("id",U)})}function f(I,U){I=Ve(I),I.forEach(H=>{H.setAttribute("aria-live",U)})}function x(I){I=Ve(I),I.forEach(U=>{U.setAttribute("aria-disabled",!0)})}function v(I){I=Ve(I),I.forEach(U=>{U.setAttribute("aria-disabled",!1)})}function y(I){if(I.keyCode!==13&&I.keyCode!==32)return;const U=e.params.a11y,H=I.target;if(!(e.pagination&&e.pagination.el&&(H===e.pagination.el||e.pagination.el.contains(I.target))&&!I.target.matches(ei(e.params.pagination.bulletClass)))){if(e.navigation&&e.navigation.prevEl&&e.navigation.nextEl){const X=Ve(e.navigation.prevEl);Ve(e.navigation.nextEl).includes(H)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?l(U.lastSlideMessage):l(U.nextSlideMessage)),X.includes(H)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?l(U.firstSlideMessage):l(U.prevSlideMessage))}e.pagination&&H.matches(ei(e.params.pagination.bulletClass))&&H.click()}}function b(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{nextEl:I,prevEl:U}=e.navigation;U&&(e.isBeginning?(x(U),d(U)):(v(U),u(U))),I&&(e.isEnd?(x(I),d(I)):(v(I),u(I)))}function M(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function T(){return M()&&e.params.pagination.clickable}function C(){const I=e.params.a11y;M()&&e.pagination.bullets.forEach(U=>{e.params.pagination.clickable&&(u(U),e.params.pagination.renderBullet||(h(U,"button"),g(U,I.paginationBulletMessage.replace(/\{\{index\}\}/,Vr(U)+1)))),U.matches(ei(e.params.pagination.bulletActiveClass))?U.setAttribute("aria-current","true"):U.removeAttribute("aria-current")})}const S=(I,U,H)=>{u(I),I.tagName!=="BUTTON"&&(h(I,"button"),I.addEventListener("keydown",y)),g(I,H),_(I,U)},E=I=>{a&&a!==I.target&&!a.contains(I.target)&&(r=!0),e.a11y.clicked=!0},N=()=>{r=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},P=I=>{o=new Date().getTime()},D=I=>{if(e.a11y.clicked||new Date().getTime()-o<100)return;const U=I.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!U||!e.slides.includes(U))return;a=U;const H=e.slides.indexOf(U)===e.activeIndex,X=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(U);H||X||I.sourceCapabilities&&I.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,requestAnimationFrame(()=>{r||(e.slideTo(e.slides.indexOf(U),0),r=!1)}))},A=()=>{const I=e.params.a11y;I.itemRoleDescriptionMessage&&p(e.slides,I.itemRoleDescriptionMessage),I.slideRole&&h(e.slides,I.slideRole);const U=e.slides.length;I.slideLabelMessage&&e.slides.forEach((H,X)=>{const k=e.params.loop?parseInt(H.getAttribute("data-swiper-slide-index"),10):X,V=I.slideLabelMessage.replace(/\{\{index\}\}/,k+1).replace(/\{\{slidesLength\}\}/,U);g(H,V)})},O=()=>{const I=e.params.a11y;e.el.append(i);const U=e.el;I.containerRoleDescriptionMessage&&p(U,I.containerRoleDescriptionMessage),I.containerMessage&&g(U,I.containerMessage);const H=e.wrapperEl,X=I.id||H.getAttribute("id")||`swiper-wrapper-${c(16)}`,k=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";m(H,X),f(H,k),A();let{nextEl:V,prevEl:z}=e.navigation?e.navigation:{};V=Ve(V),z=Ve(z),V&&V.forEach(K=>S(K,X,I.nextSlideMessage)),z&&z.forEach(K=>S(K,X,I.prevSlideMessage)),T()&&Ve(e.pagination.el).forEach(ie=>{ie.addEventListener("keydown",y)}),Nt().addEventListener("visibilitychange",P),e.el.addEventListener("focus",D,!0),e.el.addEventListener("focus",D,!0),e.el.addEventListener("pointerdown",E,!0),e.el.addEventListener("pointerup",N,!0)};function F(){i&&i.remove();let{nextEl:I,prevEl:U}=e.navigation?e.navigation:{};I=Ve(I),U=Ve(U),I&&I.forEach(X=>X.removeEventListener("keydown",y)),U&&U.forEach(X=>X.removeEventListener("keydown",y)),T()&&Ve(e.pagination.el).forEach(k=>{k.removeEventListener("keydown",y)}),Nt().removeEventListener("visibilitychange",P),e.el.removeEventListener("focus",D,!0),e.el.removeEventListener("pointerdown",E,!0),e.el.removeEventListener("pointerup",N,!0)}n("beforeInit",()=>{i=un("span",e.params.a11y.notificationClass),i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true")}),n("afterInit",()=>{e.params.a11y.enabled&&O()}),n("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&A()}),n("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&b()}),n("paginationUpdate",()=>{e.params.a11y.enabled&&C()}),n("destroy",()=>{e.params.a11y.enabled&&F()})}function GM(s){let{swiper:e,extendParams:t,on:n}=s;t({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let i=!1,r={};const a=p=>p.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),o=p=>{const _=mt();let g;p?g=new URL(p):g=_.location;const m=g.pathname.slice(1).split("/").filter(y=>y!==""),f=m.length,x=m[f-2],v=m[f-1];return{key:x,value:v}},l=(p,_)=>{const g=mt();if(!i||!e.params.history.enabled)return;let m;e.params.url?m=new URL(e.params.url):m=g.location;const f=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${_}"]`):e.slides[_];let x=a(f.getAttribute("data-history"));if(e.params.history.root.length>0){let y=e.params.history.root;y[y.length-1]==="/"&&(y=y.slice(0,y.length-1)),x=`${y}/${p?`${p}/`:""}${x}`}else m.pathname.includes(p)||(x=`${p?`${p}/`:""}${x}`);e.params.history.keepQuery&&(x+=m.search);const v=g.history.state;v&&v.value===x||(e.params.history.replaceState?g.history.replaceState({value:x},null,x):g.history.pushState({value:x},null,x))},c=(p,_,g)=>{if(_)for(let m=0,f=e.slides.length;m<f;m+=1){const x=e.slides[m];if(a(x.getAttribute("data-history"))===_){const y=e.getSlideIndex(x);e.slideTo(y,p,g)}}else e.slideTo(0,p,g)},u=()=>{r=o(e.params.url),c(e.params.speed,r.value,!1)},d=()=>{const p=mt();if(e.params.history){if(!p.history||!p.history.pushState){e.params.history.enabled=!1,e.params.hashNavigation.enabled=!0;return}if(i=!0,r=o(e.params.url),!r.key&&!r.value){e.params.history.replaceState||p.addEventListener("popstate",u);return}c(0,r.value,e.params.runCallbacksOnInit),e.params.history.replaceState||p.addEventListener("popstate",u)}},h=()=>{const p=mt();e.params.history.replaceState||p.removeEventListener("popstate",u)};n("init",()=>{e.params.history.enabled&&d()}),n("destroy",()=>{e.params.history.enabled&&h()}),n("transitionEnd _freeModeNoMomentumRelease",()=>{i&&l(e.params.history.key,e.activeIndex)}),n("slideChange",()=>{i&&e.params.cssMode&&l(e.params.history.key,e.activeIndex)})}function VM(s){let{swiper:e,extendParams:t,emit:n,on:i}=s,r=!1;const a=Nt(),o=mt();t({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(h,p){if(e.virtual&&e.params.virtual.enabled){const _=e.slides.filter(m=>m.getAttribute("data-hash")===p)[0];return _?parseInt(_.getAttribute("data-swiper-slide-index"),10):0}return e.getSlideIndex(Dt(e.slidesEl,`.${e.params.slideClass}[data-hash="${p}"], swiper-slide[data-hash="${p}"]`)[0])}}});const l=()=>{n("hashChange");const h=a.location.hash.replace("#",""),p=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],_=p?p.getAttribute("data-hash"):"";if(h!==_){const g=e.params.hashNavigation.getSlideIndex(e,h);if(typeof g>"u"||Number.isNaN(g))return;e.slideTo(g)}},c=()=>{if(!r||!e.params.hashNavigation.enabled)return;const h=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],p=h?h.getAttribute("data-hash")||h.getAttribute("data-history"):"";e.params.hashNavigation.replaceState&&o.history&&o.history.replaceState?(o.history.replaceState(null,null,`#${p}`||""),n("hashSet")):(a.location.hash=p||"",n("hashSet"))},u=()=>{if(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)return;r=!0;const h=a.location.hash.replace("#","");if(h){const _=e.params.hashNavigation.getSlideIndex(e,h);e.slideTo(_||0,0,e.params.runCallbacksOnInit,!0)}e.params.hashNavigation.watchState&&o.addEventListener("hashchange",l)},d=()=>{e.params.hashNavigation.watchState&&o.removeEventListener("hashchange",l)};i("init",()=>{e.params.hashNavigation.enabled&&u()}),i("destroy",()=>{e.params.hashNavigation.enabled&&d()}),i("transitionEnd _freeModeNoMomentumRelease",()=>{r&&c()}),i("slideChange",()=>{r&&e.params.cssMode&&c()})}function WM(s){let{swiper:e,extendParams:t,on:n,emit:i,params:r}=s;e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let a,o,l=r&&r.autoplay?r.autoplay.delay:3e3,c=r&&r.autoplay?r.autoplay.delay:3e3,u,d=new Date().getTime(),h,p,_,g,m,f,x;function v(U){!e||e.destroyed||!e.wrapperEl||U.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",v),!x&&E())}const y=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?h=!0:h&&(c=u,h=!1);const U=e.autoplay.paused?u:d+c-new Date().getTime();e.autoplay.timeLeft=U,i("autoplayTimeLeft",U,U/l),o=requestAnimationFrame(()=>{y()})},b=()=>{let U;return e.virtual&&e.params.virtual.enabled?U=e.slides.filter(X=>X.classList.contains("swiper-slide-active"))[0]:U=e.slides[e.activeIndex],U?parseInt(U.getAttribute("data-swiper-autoplay"),10):void 0},M=U=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),y();let H=typeof U>"u"?e.params.autoplay.delay:U;l=e.params.autoplay.delay,c=e.params.autoplay.delay;const X=b();!Number.isNaN(X)&&X>0&&typeof U>"u"&&(H=X,l=X,c=X),u=H;const k=e.params.speed,V=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(k,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,k,!0,!0),i("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(k,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,k,!0,!0),i("autoplay")),e.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{M()})))};return H>0?(clearTimeout(a),a=setTimeout(()=>{V()},H)):requestAnimationFrame(()=>{V()}),H},T=()=>{d=new Date().getTime(),e.autoplay.running=!0,M(),i("autoplayStart")},C=()=>{e.autoplay.running=!1,clearTimeout(a),cancelAnimationFrame(o),i("autoplayStop")},S=(U,H)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(a),U||(f=!0);const X=()=>{i("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",v):E()};if(e.autoplay.paused=!0,H){m&&(u=e.params.autoplay.delay),m=!1,X();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-d),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),X())},E=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(d=new Date().getTime(),f?(f=!1,M(u)):M(),e.autoplay.paused=!1,i("autoplayResume"))},N=()=>{if(e.destroyed||!e.autoplay.running)return;const U=Nt();U.visibilityState==="hidden"&&(f=!0,S(!0)),U.visibilityState==="visible"&&E()},P=U=>{U.pointerType==="mouse"&&(f=!0,x=!0,!(e.animating||e.autoplay.paused)&&S(!0))},D=U=>{U.pointerType==="mouse"&&(x=!1,e.autoplay.paused&&E())},A=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",P),e.el.addEventListener("pointerleave",D))},O=()=>{e.el.removeEventListener("pointerenter",P),e.el.removeEventListener("pointerleave",D)},F=()=>{Nt().addEventListener("visibilitychange",N)},I=()=>{Nt().removeEventListener("visibilitychange",N)};n("init",()=>{e.params.autoplay.enabled&&(A(),F(),T())}),n("destroy",()=>{O(),I(),e.autoplay.running&&C()}),n("_freeModeStaticRelease",()=>{(_||f)&&E()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?C():S(!0,!0)}),n("beforeTransitionStart",(U,H,X)=>{e.destroyed||!e.autoplay.running||(X||!e.params.autoplay.disableOnInteraction?S(!0,!0):C())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){C();return}p=!0,_=!1,f=!1,g=setTimeout(()=>{f=!0,_=!0,S(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!p)){if(clearTimeout(g),clearTimeout(a),e.params.autoplay.disableOnInteraction){_=!1,p=!1;return}_&&e.params.cssMode&&E(),_=!1,p=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||(m=!0)}),Object.assign(e.autoplay,{start:T,stop:C,pause:S,resume:E})}function XM(s){let{swiper:e,extendParams:t,on:n}=s;t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let i=!1,r=!1;e.thumbs={swiper:null};function a(){const c=e.thumbs.swiper;if(!c||c.destroyed)return;const u=c.clickedIndex,d=c.clickedSlide;if(d&&d.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof u>"u"||u===null)return;let h;c.params.loop?h=parseInt(c.clickedSlide.getAttribute("data-swiper-slide-index"),10):h=u,e.params.loop?e.slideToLoop(h):e.slideTo(h)}function o(){const{thumbs:c}=e.params;if(i)return!1;i=!0;const u=e.constructor;if(c.swiper instanceof u)e.thumbs.swiper=c.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(Sr(c.swiper)){const d=Object.assign({},c.swiper);Object.assign(d,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new u(d),r=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",a),!0}function l(c){const u=e.thumbs.swiper;if(!u||u.destroyed)return;const d=u.params.slidesPerView==="auto"?u.slidesPerViewDynamic():u.params.slidesPerView;let h=1;const p=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(h=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(h=1),h=Math.floor(h),u.slides.forEach(m=>m.classList.remove(p)),u.params.loop||u.params.virtual&&u.params.virtual.enabled)for(let m=0;m<h;m+=1)Dt(u.slidesEl,`[data-swiper-slide-index="${e.realIndex+m}"]`).forEach(f=>{f.classList.add(p)});else for(let m=0;m<h;m+=1)u.slides[e.realIndex+m]&&u.slides[e.realIndex+m].classList.add(p);const _=e.params.thumbs.autoScrollOffset,g=_&&!u.params.loop;if(e.realIndex!==u.realIndex||g){const m=u.activeIndex;let f,x;if(u.params.loop){const v=u.slides.filter(y=>y.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];f=u.slides.indexOf(v),x=e.activeIndex>e.previousIndex?"next":"prev"}else f=e.realIndex,x=f>e.previousIndex?"next":"prev";g&&(f+=x==="next"?_:-1*_),u.visibleSlidesIndexes&&u.visibleSlidesIndexes.indexOf(f)<0&&(u.params.centeredSlides?f>m?f=f-Math.floor(d/2)+1:f=f+Math.floor(d/2)-1:f>m&&u.params.slidesPerGroup,u.slideTo(f,c?0:void 0))}}n("beforeInit",()=>{const{thumbs:c}=e.params;if(!(!c||!c.swiper))if(typeof c.swiper=="string"||c.swiper instanceof HTMLElement){const u=Nt(),d=()=>{const p=typeof c.swiper=="string"?u.querySelector(c.swiper):c.swiper;if(p&&p.swiper)c.swiper=p.swiper,o(),l(!0);else if(p){const _=g=>{c.swiper=g.detail[0],p.removeEventListener("init",_),o(),l(!0),c.swiper.update(),e.update()};p.addEventListener("init",_)}return p},h=()=>{if(e.destroyed)return;d()||requestAnimationFrame(h)};requestAnimationFrame(h)}else o(),l(!0)}),n("slideChange update resize observerUpdate",()=>{l()}),n("setTransition",(c,u)=>{const d=e.thumbs.swiper;!d||d.destroyed||d.setTransition(u)}),n("beforeDestroy",()=>{const c=e.thumbs.swiper;!c||c.destroyed||r&&c.destroy()}),Object.assign(e.thumbs,{init:o,update:l})}function $M(s){let{swiper:e,extendParams:t,emit:n,once:i}=s;t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function r(){if(e.params.cssMode)return;const l=e.getTranslate();e.setTranslate(l),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function a(){if(e.params.cssMode)return;const{touchEventsData:l,touches:c}=e;l.velocities.length===0&&l.velocities.push({position:c[e.isHorizontal()?"startX":"startY"],time:l.touchStartTime}),l.velocities.push({position:c[e.isHorizontal()?"currentX":"currentY"],time:yn()})}function o(l){let{currentPos:c}=l;if(e.params.cssMode)return;const{params:u,wrapperEl:d,rtlTranslate:h,snapGrid:p,touchEventsData:_}=e,m=yn()-_.touchStartTime;if(c<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(c>-e.maxTranslate()){e.slides.length<p.length?e.slideTo(p.length-1):e.slideTo(e.slides.length-1);return}if(u.freeMode.momentum){if(_.velocities.length>1){const C=_.velocities.pop(),S=_.velocities.pop(),E=C.position-S.position,N=C.time-S.time;e.velocity=E/N,e.velocity/=2,Math.abs(e.velocity)<u.freeMode.minimumVelocity&&(e.velocity=0),(N>150||yn()-C.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=u.freeMode.momentumVelocityRatio,_.velocities.length=0;let f=1e3*u.freeMode.momentumRatio;const x=e.velocity*f;let v=e.translate+x;h&&(v=-v);let y=!1,b;const M=Math.abs(e.velocity)*20*u.freeMode.momentumBounceRatio;let T;if(v<e.maxTranslate())u.freeMode.momentumBounce?(v+e.maxTranslate()<-M&&(v=e.maxTranslate()-M),b=e.maxTranslate(),y=!0,_.allowMomentumBounce=!0):v=e.maxTranslate(),u.loop&&u.centeredSlides&&(T=!0);else if(v>e.minTranslate())u.freeMode.momentumBounce?(v-e.minTranslate()>M&&(v=e.minTranslate()+M),b=e.minTranslate(),y=!0,_.allowMomentumBounce=!0):v=e.minTranslate(),u.loop&&u.centeredSlides&&(T=!0);else if(u.freeMode.sticky){let C;for(let S=0;S<p.length;S+=1)if(p[S]>-v){C=S;break}Math.abs(p[C]-v)<Math.abs(p[C-1]-v)||e.swipeDirection==="next"?v=p[C]:v=p[C-1],v=-v}if(T&&i("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(h?f=Math.abs((-v-e.translate)/e.velocity):f=Math.abs((v-e.translate)/e.velocity),u.freeMode.sticky){const C=Math.abs((h?-v:v)-e.translate),S=e.slidesSizesGrid[e.activeIndex];C<S?f=u.speed:C<2*S?f=u.speed*1.5:f=u.speed*2.5}}else if(u.freeMode.sticky){e.slideToClosest();return}u.freeMode.momentumBounce&&y?(e.updateProgress(b),e.setTransition(f),e.setTranslate(v),e.transitionStart(!0,e.swipeDirection),e.animating=!0,Lr(d,()=>{!e||e.destroyed||!_.allowMomentumBounce||(n("momentumBounce"),e.setTransition(u.speed),setTimeout(()=>{e.setTranslate(b),Lr(d,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(n("_freeModeNoMomentumRelease"),e.updateProgress(v),e.setTransition(f),e.setTranslate(v),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,Lr(d,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(v),e.updateActiveIndex(),e.updateSlidesClasses()}else if(u.freeMode.sticky){e.slideToClosest();return}else u.freeMode&&n("_freeModeNoMomentumRelease");(!u.freeMode.momentum||m>=u.longSwipesMs)&&(n("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:r,onTouchMove:a,onTouchEnd:o}})}function YM(s){let{swiper:e,extendParams:t,on:n}=s;t({grid:{rows:1,fill:"column"}});let i,r,a,o;const l=()=>{let g=e.params.spaceBetween;return typeof g=="string"&&g.indexOf("%")>=0?g=parseFloat(g.replace("%",""))/100*e.size:typeof g=="string"&&(g=parseFloat(g)),g},c=g=>{const{slidesPerView:m}=e.params,{rows:f,fill:x}=e.params.grid,v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:g.length;a=Math.floor(v/f),Math.floor(v/f)===v/f?i=v:i=Math.ceil(v/f)*f,m!=="auto"&&x==="row"&&(i=Math.max(i,m*f)),r=i/f},u=()=>{e.slides&&e.slides.forEach(g=>{g.swiperSlideGridSet&&(g.style.height="",g.style[e.getDirectionLabel("margin-top")]="")})},d=(g,m,f)=>{const{slidesPerGroup:x}=e.params,v=l(),{rows:y,fill:b}=e.params.grid,M=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:f.length;let T,C,S;if(b==="row"&&x>1){const E=Math.floor(g/(x*y)),N=g-y*x*E,P=E===0?x:Math.min(Math.ceil((M-E*y*x)/y),x);S=Math.floor(N/P),C=N-S*P+E*x,T=C+S*i/y,m.style.order=T}else b==="column"?(C=Math.floor(g/y),S=g-C*y,(C>a||C===a&&S===y-1)&&(S+=1,S>=y&&(S=0,C+=1))):(S=Math.floor(g/r),C=g-S*r);m.row=S,m.column=C,m.style.height=`calc((100% - ${(y-1)*v}px) / ${y})`,m.style[e.getDirectionLabel("margin-top")]=S!==0?v&&`${v}px`:"",m.swiperSlideGridSet=!0},h=(g,m)=>{const{centeredSlides:f,roundLengths:x}=e.params,v=l(),{rows:y}=e.params.grid;if(e.virtualSize=(g+v)*i,e.virtualSize=Math.ceil(e.virtualSize/y)-v,e.params.cssMode||(e.wrapperEl.style[e.getDirectionLabel("width")]=`${e.virtualSize+v}px`),f){const b=[];for(let M=0;M<m.length;M+=1){let T=m[M];x&&(T=Math.floor(T)),m[M]<e.virtualSize+m[0]&&b.push(T)}m.splice(0,m.length),m.push(...b)}},p=()=>{o=e.params.grid&&e.params.grid.rows>1},_=()=>{const{params:g,el:m}=e,f=g.grid&&g.grid.rows>1;o&&!f?(m.classList.remove(`${g.containerModifierClass}grid`,`${g.containerModifierClass}grid-column`),a=1,e.emitContainerClasses()):!o&&f&&(m.classList.add(`${g.containerModifierClass}grid`),g.grid.fill==="column"&&m.classList.add(`${g.containerModifierClass}grid-column`),e.emitContainerClasses()),o=f};n("init",p),n("update",_),e.grid={initSlides:c,unsetSlides:u,updateSlide:d,updateWrapperSize:h}}function qM(s){const e=this,{params:t,slidesEl:n}=e;t.loop&&e.loopDestroy();const i=r=>{if(typeof r=="string"){const a=document.createElement("div");a.innerHTML=r,n.append(a.children[0]),a.innerHTML=""}else n.append(r)};if(typeof s=="object"&&"length"in s)for(let r=0;r<s.length;r+=1)s[r]&&i(s[r]);else i(s);e.recalcSlides(),t.loop&&e.loopCreate(),(!t.observer||e.isElement)&&e.update()}function jM(s){const e=this,{params:t,activeIndex:n,slidesEl:i}=e;t.loop&&e.loopDestroy();let r=n+1;const a=o=>{if(typeof o=="string"){const l=document.createElement("div");l.innerHTML=o,i.prepend(l.children[0]),l.innerHTML=""}else i.prepend(o)};if(typeof s=="object"&&"length"in s){for(let o=0;o<s.length;o+=1)s[o]&&a(s[o]);r=n+s.length}else a(s);e.recalcSlides(),t.loop&&e.loopCreate(),(!t.observer||e.isElement)&&e.update(),e.slideTo(r,0,!1)}function KM(s,e){const t=this,{params:n,activeIndex:i,slidesEl:r}=t;let a=i;n.loop&&(a-=t.loopedSlides,t.loopDestroy(),t.recalcSlides());const o=t.slides.length;if(s<=0){t.prependSlide(e);return}if(s>=o){t.appendSlide(e);return}let l=a>s?a+1:a;const c=[];for(let u=o-1;u>=s;u-=1){const d=t.slides[u];d.remove(),c.unshift(d)}if(typeof e=="object"&&"length"in e){for(let u=0;u<e.length;u+=1)e[u]&&r.append(e[u]);l=a>s?a+e.length:a}else r.append(e);for(let u=0;u<c.length;u+=1)r.append(c[u]);t.recalcSlides(),n.loop&&t.loopCreate(),(!n.observer||t.isElement)&&t.update(),n.loop?t.slideTo(l+t.loopedSlides,0,!1):t.slideTo(l,0,!1)}function ZM(s){const e=this,{params:t,activeIndex:n}=e;let i=n;t.loop&&(i-=e.loopedSlides,e.loopDestroy());let r=i,a;if(typeof s=="object"&&"length"in s){for(let o=0;o<s.length;o+=1)a=s[o],e.slides[a]&&e.slides[a].remove(),a<r&&(r-=1);r=Math.max(r,0)}else a=s,e.slides[a]&&e.slides[a].remove(),a<r&&(r-=1),r=Math.max(r,0);e.recalcSlides(),t.loop&&e.loopCreate(),(!t.observer||e.isElement)&&e.update(),t.loop?e.slideTo(r+e.loopedSlides,0,!1):e.slideTo(r,0,!1)}function JM(){const s=this,e=[];for(let t=0;t<s.slides.length;t+=1)e.push(t);s.removeSlide(e)}function QM(s){let{swiper:e}=s;Object.assign(e,{appendSlide:qM.bind(e),prependSlide:jM.bind(e),addSlide:KM.bind(e),removeSlide:ZM.bind(e),removeAllSlides:JM.bind(e)})}function lr(s){const{effect:e,swiper:t,on:n,setTranslate:i,setTransition:r,overwriteParams:a,perspective:o,recreateShadows:l,getEffectParams:c}=s;n("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),o&&o()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const d=a?a():{};Object.assign(t.params,d),Object.assign(t.originalParams,d)}),n("setTranslate",()=>{t.params.effect===e&&i()}),n("setTransition",(d,h)=>{t.params.effect===e&&r(h)}),n("transitionEnd",()=>{if(t.params.effect===e&&l){if(!c||!c().slideShadows)return;t.slides.forEach(d=>{d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(h=>h.remove())}),l()}});let u;n("virtualUpdate",()=>{t.params.effect===e&&(t.slides.length||(u=!0),requestAnimationFrame(()=>{u&&t.slides&&t.slides.length&&(i(),u=!1)}))})}function qr(s,e){const t=hs(e);return t!==e&&(t.style.backfaceVisibility="hidden",t.style["-webkit-backface-visibility"]="hidden"),t}function so(s){let{swiper:e,duration:t,transformElements:n,allSlides:i}=s;const{activeIndex:r}=e,a=o=>o.parentElement?o.parentElement:e.slides.filter(c=>c.shadowRoot&&c.shadowRoot===o.parentNode)[0];if(e.params.virtualTranslate&&t!==0){let o=!1,l;i?l=n:l=n.filter(c=>{const u=c.classList.contains("swiper-slide-transform")?a(c):c;return e.getSlideIndex(u)===r}),l.forEach(c=>{Lr(c,()=>{if(o||!e||e.destroyed)return;o=!0,e.animating=!1;const u=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(u)})})}}function eb(s){let{swiper:e,extendParams:t,on:n}=s;t({fadeEffect:{crossFade:!1}}),lr({effect:"fade",swiper:e,on:n,setTranslate:()=>{const{slides:a}=e,o=e.params.fadeEffect;for(let l=0;l<a.length;l+=1){const c=e.slides[l];let d=-c.swiperSlideOffset;e.params.virtualTranslate||(d-=e.translate);let h=0;e.isHorizontal()||(h=d,d=0);const p=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(c.progress),0):1+Math.min(Math.max(c.progress,-1),0),_=qr(o,c);_.style.opacity=p,_.style.transform=`translate3d(${d}px, ${h}px, 0px)`}},setTransition:a=>{const o=e.slides.map(l=>hs(l));o.forEach(l=>{l.style.transitionDuration=`${a}ms`}),so({swiper:e,duration:a,transformElements:o,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function tb(s){let{swiper:e,extendParams:t,on:n}=s;t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const i=(l,c,u)=>{let d=u?l.querySelector(".swiper-slide-shadow-left"):l.querySelector(".swiper-slide-shadow-top"),h=u?l.querySelector(".swiper-slide-shadow-right"):l.querySelector(".swiper-slide-shadow-bottom");d||(d=un("div",`swiper-slide-shadow-cube swiper-slide-shadow-${u?"left":"top"}`.split(" ")),l.append(d)),h||(h=un("div",`swiper-slide-shadow-cube swiper-slide-shadow-${u?"right":"bottom"}`.split(" ")),l.append(h)),d&&(d.style.opacity=Math.max(-c,0)),h&&(h.style.opacity=Math.max(c,0))};lr({effect:"cube",swiper:e,on:n,setTranslate:()=>{const{el:l,wrapperEl:c,slides:u,width:d,height:h,rtlTranslate:p,size:_,browser:g}=e,m=e.params.cubeEffect,f=e.isHorizontal(),x=e.virtual&&e.params.virtual.enabled;let v=0,y;m.shadow&&(f?(y=e.wrapperEl.querySelector(".swiper-cube-shadow"),y||(y=un("div","swiper-cube-shadow"),e.wrapperEl.append(y)),y.style.height=`${d}px`):(y=l.querySelector(".swiper-cube-shadow"),y||(y=un("div","swiper-cube-shadow"),l.append(y))));for(let M=0;M<u.length;M+=1){const T=u[M];let C=M;x&&(C=parseInt(T.getAttribute("data-swiper-slide-index"),10));let S=C*90,E=Math.floor(S/360);p&&(S=-S,E=Math.floor(-S/360));const N=Math.max(Math.min(T.progress,1),-1);let P=0,D=0,A=0;C%4===0?(P=-E*4*_,A=0):(C-1)%4===0?(P=0,A=-E*4*_):(C-2)%4===0?(P=_+E*4*_,A=_):(C-3)%4===0&&(P=-_,A=3*_+_*4*E),p&&(P=-P),f||(D=P,P=0);const O=`rotateX(${f?0:-S}deg) rotateY(${f?S:0}deg) translate3d(${P}px, ${D}px, ${A}px)`;N<=1&&N>-1&&(v=C*90+N*90,p&&(v=-C*90-N*90),e.browser&&e.browser.need3dFix&&Math.abs(v)/90%2===1&&(v+=.001)),T.style.transform=O,m.slideShadows&&i(T,N,f)}if(c.style.transformOrigin=`50% 50% -${_/2}px`,c.style["-webkit-transform-origin"]=`50% 50% -${_/2}px`,m.shadow)if(f)y.style.transform=`translate3d(0px, ${d/2+m.shadowOffset}px, ${-d/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${m.shadowScale})`;else{const M=Math.abs(v)-Math.floor(Math.abs(v)/90)*90,T=1.5-(Math.sin(M*2*Math.PI/360)/2+Math.cos(M*2*Math.PI/360)/2),C=m.shadowScale,S=m.shadowScale/T,E=m.shadowOffset;y.style.transform=`scale3d(${C}, 1, ${S}) translate3d(0px, ${h/2+E}px, ${-h/2/S}px) rotateX(-89.99deg)`}const b=(g.isSafari||g.isWebView)&&g.needPerspectiveFix?-_/2:0;c.style.transform=`translate3d(0px,0,${b}px) rotateX(${e.isHorizontal()?0:v}deg) rotateY(${e.isHorizontal()?-v:0}deg)`,c.style.setProperty("--swiper-cube-translate-z",`${b}px`)},setTransition:l=>{const{el:c,slides:u}=e;if(u.forEach(d=>{d.style.transitionDuration=`${l}ms`,d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(h=>{h.style.transitionDuration=`${l}ms`})}),e.params.cubeEffect.shadow&&!e.isHorizontal()){const d=c.querySelector(".swiper-cube-shadow");d&&(d.style.transitionDuration=`${l}ms`)}},recreateShadows:()=>{const l=e.isHorizontal();e.slides.forEach(c=>{const u=Math.max(Math.min(c.progress,1),-1);i(c,u,l)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function tr(s,e,t){const n=`swiper-slide-shadow${t?`-${t}`:""}${s?` swiper-slide-shadow-${s}`:""}`,i=hs(e);let r=i.querySelector(`.${n.split(" ").join(".")}`);return r||(r=un("div",n.split(" ")),i.append(r)),r}function nb(s){let{swiper:e,extendParams:t,on:n}=s;t({flipEffect:{slideShadows:!0,limitRotation:!0}});const i=(l,c)=>{let u=e.isHorizontal()?l.querySelector(".swiper-slide-shadow-left"):l.querySelector(".swiper-slide-shadow-top"),d=e.isHorizontal()?l.querySelector(".swiper-slide-shadow-right"):l.querySelector(".swiper-slide-shadow-bottom");u||(u=tr("flip",l,e.isHorizontal()?"left":"top")),d||(d=tr("flip",l,e.isHorizontal()?"right":"bottom")),u&&(u.style.opacity=Math.max(-c,0)),d&&(d.style.opacity=Math.max(c,0))};lr({effect:"flip",swiper:e,on:n,setTranslate:()=>{const{slides:l,rtlTranslate:c}=e,u=e.params.flipEffect;for(let d=0;d<l.length;d+=1){const h=l[d];let p=h.progress;e.params.flipEffect.limitRotation&&(p=Math.max(Math.min(h.progress,1),-1));const _=h.swiperSlideOffset;let m=-180*p,f=0,x=e.params.cssMode?-_-e.translate:-_,v=0;e.isHorizontal()?c&&(m=-m):(v=x,x=0,f=-m,m=0),e.browser&&e.browser.need3dFix&&(Math.abs(m)/90%2===1&&(m+=.001),Math.abs(f)/90%2===1&&(f+=.001)),h.style.zIndex=-Math.abs(Math.round(p))+l.length,u.slideShadows&&i(h,p);const y=`translate3d(${x}px, ${v}px, 0px) rotateX(${f}deg) rotateY(${m}deg)`,b=qr(u,h);b.style.transform=y}},setTransition:l=>{const c=e.slides.map(u=>hs(u));c.forEach(u=>{u.style.transitionDuration=`${l}ms`,u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(d=>{d.style.transitionDuration=`${l}ms`})}),so({swiper:e,duration:l,transformElements:c})},recreateShadows:()=>{e.params.flipEffect,e.slides.forEach(l=>{let c=l.progress;e.params.flipEffect.limitRotation&&(c=Math.max(Math.min(l.progress,1),-1)),i(l,c)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function ib(s){let{swiper:e,extendParams:t,on:n}=s;t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),lr({effect:"coverflow",swiper:e,on:n,setTranslate:()=>{const{width:a,height:o,slides:l,slidesSizesGrid:c}=e,u=e.params.coverflowEffect,d=e.isHorizontal(),h=e.translate,p=d?-h+a/2:-h+o/2,_=d?u.rotate:-u.rotate,g=u.depth;for(let m=0,f=l.length;m<f;m+=1){const x=l[m],v=c[m],y=x.swiperSlideOffset,b=(p-y-v/2)/v,M=typeof u.modifier=="function"?u.modifier(b):b*u.modifier;let T=d?_*M:0,C=d?0:_*M,S=-g*Math.abs(M),E=u.stretch;typeof E=="string"&&E.indexOf("%")!==-1&&(E=parseFloat(u.stretch)/100*v);let N=d?0:E*M,P=d?E*M:0,D=1-(1-u.scale)*Math.abs(M);Math.abs(P)<.001&&(P=0),Math.abs(N)<.001&&(N=0),Math.abs(S)<.001&&(S=0),Math.abs(T)<.001&&(T=0),Math.abs(C)<.001&&(C=0),Math.abs(D)<.001&&(D=0),e.browser&&e.browser.need3dFix&&(Math.abs(T)/90%2===1&&(T+=.001),Math.abs(C)/90%2===1&&(C+=.001));const A=`translate3d(${P}px,${N}px,${S}px)  rotateX(${C}deg) rotateY(${T}deg) scale(${D})`,O=qr(u,x);if(O.style.transform=A,x.style.zIndex=-Math.abs(Math.round(M))+1,u.slideShadows){let F=d?x.querySelector(".swiper-slide-shadow-left"):x.querySelector(".swiper-slide-shadow-top"),I=d?x.querySelector(".swiper-slide-shadow-right"):x.querySelector(".swiper-slide-shadow-bottom");F||(F=tr("coverflow",x,d?"left":"top")),I||(I=tr("coverflow",x,d?"right":"bottom")),F&&(F.style.opacity=M>0?M:0),I&&(I.style.opacity=-M>0?-M:0)}}},setTransition:a=>{e.slides.map(l=>hs(l)).forEach(l=>{l.style.transitionDuration=`${a}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${a}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function sb(s){let{swiper:e,extendParams:t,on:n}=s;t({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=o=>typeof o=="string"?o:`${o}px`;lr({effect:"creative",swiper:e,on:n,setTranslate:()=>{const{slides:o,wrapperEl:l,slidesSizesGrid:c}=e,u=e.params.creativeEffect,{progressMultiplier:d}=u,h=e.params.centeredSlides;if(h){const p=c[0]/2-e.params.slidesOffsetBefore||0;l.style.transform=`translateX(calc(50% - ${p}px))`}for(let p=0;p<o.length;p+=1){const _=o[p],g=_.progress,m=Math.min(Math.max(_.progress,-u.limitProgress),u.limitProgress);let f=m;h||(f=Math.min(Math.max(_.originalProgress,-u.limitProgress),u.limitProgress));const x=_.swiperSlideOffset,v=[e.params.cssMode?-x-e.translate:-x,0,0],y=[0,0,0];let b=!1;e.isHorizontal()||(v[1]=v[0],v[0]=0);let M={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};m<0?(M=u.next,b=!0):m>0&&(M=u.prev,b=!0),v.forEach((D,A)=>{v[A]=`calc(${D}px + (${i(M.translate[A])} * ${Math.abs(m*d)}))`}),y.forEach((D,A)=>{let O=M.rotate[A]*Math.abs(m*d);e.browser&&e.browser.need3dFix&&Math.abs(O)/90%2===1&&(O+=.001),y[A]=O}),_.style.zIndex=-Math.abs(Math.round(g))+o.length;const T=v.join(", "),C=`rotateX(${y[0]}deg) rotateY(${y[1]}deg) rotateZ(${y[2]}deg)`,S=f<0?`scale(${1+(1-M.scale)*f*d})`:`scale(${1-(1-M.scale)*f*d})`,E=f<0?1+(1-M.opacity)*f*d:1-(1-M.opacity)*f*d,N=`translate3d(${T}) ${C} ${S}`;if(b&&M.shadow||!b){let D=_.querySelector(".swiper-slide-shadow");if(!D&&M.shadow&&(D=tr("creative",_)),D){const A=u.shadowPerProgress?m*(1/u.limitProgress):m;D.style.opacity=Math.min(Math.max(Math.abs(A),0),1)}}const P=qr(u,_);P.style.transform=N,P.style.opacity=E,M.origin&&(P.style.transformOrigin=M.origin)}},setTransition:o=>{const l=e.slides.map(c=>hs(c));l.forEach(c=>{c.style.transitionDuration=`${o}ms`,c.querySelectorAll(".swiper-slide-shadow").forEach(u=>{u.style.transitionDuration=`${o}ms`})}),so({swiper:e,duration:o,transformElements:l,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}function rb(s){let{swiper:e,extendParams:t,on:n}=s;t({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),lr({effect:"cards",swiper:e,on:n,setTranslate:()=>{const{slides:a,activeIndex:o,rtlTranslate:l}=e,c=e.params.cardsEffect,{startTranslate:u,isTouched:d}=e.touchEventsData,h=l?-e.translate:e.translate;for(let p=0;p<a.length;p+=1){const _=a[p],g=_.progress,m=Math.min(Math.max(g,-4),4);let f=_.swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&(e.wrapperEl.style.transform=`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(f-=a[0].swiperSlideOffset);let x=e.params.cssMode?-f-e.translate:-f,v=0;const y=-100*Math.abs(m);let b=1,M=-c.perSlideRotate*m,T=c.perSlideOffset-Math.abs(m)*.75;const C=e.virtual&&e.params.virtual.enabled?e.virtual.from+p:p,S=(C===o||C===o-1)&&m>0&&m<1&&(d||e.params.cssMode)&&h<u,E=(C===o||C===o+1)&&m<0&&m>-1&&(d||e.params.cssMode)&&h>u;if(S||E){const A=(1-Math.abs((Math.abs(m)-.5)/.5))**.5;M+=-28*m*A,b+=-.5*A,T+=96*A,v=`${-25*A*Math.abs(m)}%`}if(m<0?x=`calc(${x}px ${l?"-":"+"} (${T*Math.abs(m)}%))`:m>0?x=`calc(${x}px ${l?"-":"+"} (-${T*Math.abs(m)}%))`:x=`${x}px`,!e.isHorizontal()){const A=v;v=x,x=A}const N=m<0?`${1+(1-b)*m}`:`${1-(1-b)*m}`,P=`
        translate3d(${x}, ${v}, ${y}px)
        rotateZ(${c.rotate?l?-M:M:0}deg)
        scale(${N})
      `;if(c.slideShadows){let A=_.querySelector(".swiper-slide-shadow");A||(A=tr("cards",_)),A&&(A.style.opacity=Math.min(Math.max((Math.abs(m)-.5)/.5,0),1))}_.style.zIndex=-Math.abs(Math.round(g))+a.length;const D=qr(c,_);D.style.transform=P}},setTransition:a=>{const o=e.slides.map(l=>hs(l));o.forEach(l=>{l.style.transitionDuration=`${a}ms`,l.querySelectorAll(".swiper-slide-shadow").forEach(c=>{c.style.transitionDuration=`${a}ms`})}),so({swiper:e,duration:a,transformElements:o})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}const ab=[DM,IM,NM,OM,UM,FM,BM,zM,kM,HM,GM,VM,WM,XM,$M,YM,QM,eb,tb,nb,ib,sb,rb];rn.use(ab);let Pr;new oc({width:340});const ob=document.querySelector("canvas.webgl"),Ac=new yx,Gf=new ky;Gf.setDecoderPath("./draco/");const Vf=new ay;Vf.setDRACOLoader(Gf);const _t={width:window.innerWidth,height:window.innerHeight,pixelRatio:Math.min(window.devicePixelRatio,2)};window.addEventListener("resize",()=>{_t.width=window.innerWidth,_t.height=window.innerHeight,_t.pixelRatio=Math.min(window.devicePixelRatio,2),be&&be.material.uniforms.uResolution.value.set(_t.width*_t.pixelRatio,_t.height*_t.pixelRatio),nr.aspect=_t.width/_t.height,nr.updateProjectionMatrix(),Wr.setSize(_t.width,_t.height),Wr.setPixelRatio(_t.pixelRatio)});const nr=new $t(35,_t.width/_t.height,.1,100);nr.position.set(0,10,15*2);Ac.add(nr);nr.position.y=-3;const Wr=new wh({canvas:ob,antialias:!0});Wr.setSize(_t.width,_t.height);Wr.setPixelRatio(_t.pixelRatio);let be=null;Vf.load("./models.glb",s=>{be={},be.index=0;const e=s.scene.children.map(n=>n.geometry.attributes.position);be.maxCount=0;for(const n of e)n.count>be.maxCount&&(be.maxCount=n.count);be.positions=[];for(const n of e){const i=n.array,r=new Float32Array(be.maxCount*3);for(let a=0;a<be.maxCount;a++){const o=a*3;if(o<i.length)r[o+0]=i[o+0],r[o+1]=i[o+1],r[o+2]=i[o+2];else{const l=Math.floor(n.count*Math.random())*3;r[o+0]=i[l+0],r[o+1]=i[l+1],r[o+2]=i[l+2]}}be.positions.push(new zn(r,3))}const t=new Float32Array(be.maxCount);for(let n=0;n<be.maxCount;n++)t[n]=Math.random();be.geometry=new Tn,be.geometry.setAttribute("position",be.positions[be.index]),be.geometry.setAttribute("aPositionTarget",be.positions[3]),be.geometry.setAttribute("aSize",new Lt(t,1)),be.colorA="#ff7300",be.colorB="#0091ff",be.material=new Ai({vertexShader:pE,fragmentShader:mE,uniforms:{uSize:new $i(.4),uResolution:new $i(new Xe(_t.width*_t.pixelRatio,_t.height*_t.pixelRatio)),uProgress:new $i(0),uColorA:new $i(new Te(be.colorA)),uColorB:new $i(new Te(be.colorB))},blending:dl,depthWrite:!1}),be.points=new Lh(be.geometry,be.material),be.points.frustumCulled=!1,Ac.add(be.points),Pr=new rn(".swiper",{loop:!0,speed:1200,allowTouchMove:!1,effect:"fade",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),be.morph=n=>{be.geometry.attributes.position=be.positions[be.index],be.geometry.attributes.aPositionTarget=be.positions[n],Of.fromTo(be.material.uniforms.uProgress,{value:0},{value:1,duration:3,ease:"linear",onStart:()=>{console.log("GSAP animation start - Locking buttons")},onComplete:()=>{console.log("GSAP animation complete - Unlocking buttons"),Pr.allowSlideNext=!0,Pr.allowSlidePrev=!0}}),be.index=n}});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".swiper-button-prev"),e=document.querySelector(".swiper-button-next");let t=0;s.addEventListener("click",()=>{Pr.allowSlidePrev&&(t>0?t--:t=3,be.morph(t))}),e.addEventListener("click",()=>{Pr.allowSlideNext&&(t<3?t++:t=0,be.morph(t))})});let Wf=0,Xf=0;document.addEventListener("mousemove",s=>{const e=s.clientX/window.innerWidth-.5,t=s.clientY/window.innerHeight-.5;Wf=e*Math.PI*.05,Xf=t*Math.PI*.05});const $f=()=>{be&&be.points&&(be.points.rotation.y+=(Wf-be.points.rotation.y)*.05,be.points.rotation.x+=(Xf-be.points.rotation.x)*.05),Wr.render(Ac,nr),window.requestAnimationFrame($f)};$f();
//# sourceMappingURL=index-CKghj70Q.js.map
