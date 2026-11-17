var Br={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bf=0,Ch=1,Hf=2;var rf=1,kf=2,Ps=3,ir=0,Zn=1,Yn=2;var os=0,ba=1,Ei=2,Ph=3,Lh=4,Vf=5,Cr=100,Gf=101,Wf=102,Ih=103,Uh=104,Xf=200,qf=201,Yf=202,Zf=203,Rc=204,Cc=205,Jf=206,Kf=207,$f=208,jf=209,Qf=210,ed=211,td=212,nd=213,id=214,sd=0,rd=1,ad=2,nl=3,od=4,ld=5,cd=6,hd=7,dh=0,ud=1,fd=2,tr=0,ph=1,mh=2,gh=3,vo=4,dd=5,xh=6;var af=300,Aa=301,Ra=302,Pc=303,Lc=304,Ll=306,Ic=1e3,Wi=1001,Uc=1002,Pn=1003,Dh=1004;var Yl=1005;var hi=1006,pd=1007;var oo=1008;var nr=1009,md=1010,gd=1011,_h=1012,of=1013,Qs=1014,er=1015,Xi=1016,lf=1017,cf=1018,Ir=1020,xd=1021,Mi=1023,_d=1024,vd=1025,Ur=1026,Ca=1027,yd=1028,hf=1029,Md=1030,uf=1031,ff=1033,Zl=33776,Jl=33777,Kl=33778,$l=33779,Nh=35840,Oh=35841,Fh=35842,zh=35843,df=36196,Bh=37492,Hh=37496,kh=37808,Vh=37809,Gh=37810,Wh=37811,Xh=37812,qh=37813,Yh=37814,Zh=37815,Jh=37816,Kh=37817,$h=37818,jh=37819,Qh=37820,eu=37821,jl=36492,tu=36494,nu=36495,Ed=36283,iu=36284,su=36285,ru=36286;var il=2300,sl=2301,Ql=2302,au=2400,ou=2401,lu=2402;var pf=3e3,Dr=3001,Sd=3200,bd=3201,mf=0,wd=1,Ui="",Kt="srgb",Us="srgb-linear",vh="display-p3",Il="display-p3-linear",rl="linear",on="srgb",al="rec709",ol="p3";var ta=7680;var cu=519,Td=512,Ad=513,Rd=514,gf=515,Cd=516,Pd=517,Ld=518,Id=519,Dc=35044;var hu="300 es",Nc=1035,Ls=2e3,ll=2001,ls=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uu=1234567,io=Math.PI/180,lo=180/Math.PI;function Is(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wn[i&255]+Wn[i>>8&255]+Wn[i>>16&255]+Wn[i>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[t&63|128]+Wn[t>>8&255]+"-"+Wn[t>>16&255]+Wn[t>>24&255]+Wn[n&255]+Wn[n>>8&255]+Wn[n>>16&255]+Wn[n>>24&255]).toLowerCase()}function On(i,e,t){return Math.max(e,Math.min(t,i))}function yh(i,e){return(i%e+e)%e}function Ud(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Dd(i,e,t){return i!==e?(t-i)/(e-i):0}function so(i,e,t){return(1-t)*i+t*e}function Nd(i,e,t,n){return so(i,e,1-Math.exp(-t*n))}function Od(i,e=1){return e-Math.abs(yh(i,e*2)-e)}function Fd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function zd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Bd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Hd(i,e){return i+Math.random()*(e-i)}function kd(i){return i*(.5-Math.random())}function Vd(i){i!==void 0&&(uu=i);let e=uu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gd(i){return i*io}function Wd(i){return i*lo}function Oc(i){return(i&i-1)===0&&i!==0}function Xd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qd(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),p=o((e-n)/2),x=r((n-e)/2),y=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*p,a*l);break;case"YZY":i.set(c*p,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*p,a*h,a*l);break;case"XZX":i.set(a*h,c*y,c*x,a*l);break;case"YXY":i.set(c*x,a*h,c*y,a*l);break;case"ZYZ":i.set(c*y,c*x,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function as(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xf={DEG2RAD:io,RAD2DEG:lo,generateUUID:Is,clamp:On,euclideanModulo:yh,mapLinear:Ud,inverseLerp:Dd,lerp:so,damp:Nd,pingpong:Od,smoothstep:Fd,smootherstep:zd,randInt:Bd,randFloat:Hd,randFloatSpread:kd,seededRandom:Vd,degToRad:Gd,radToDeg:Wd,isPowerOfTwo:Oc,ceilPowerOfTwo:Xd,floorPowerOfTwo:cl,setQuaternionFromProperEuler:qd,normalize:rn,denormalize:as},Ye=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(On(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],x=n[5],y=n[8],v=s[0],g=s[3],d=s[6],L=s[1],M=s[4],H=s[7],P=s[2],F=s[5],N=s[8];return r[0]=o*v+a*L+c*P,r[3]=o*g+a*M+c*F,r[6]=o*d+a*H+c*N,r[1]=l*v+h*L+u*P,r[4]=l*g+h*M+u*F,r[7]=l*d+h*H+u*N,r[2]=p*v+x*L+y*P,r[5]=p*g+x*M+y*F,r[8]=p*d+x*H+y*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,p=a*c-h*r,x=l*r-o*c,y=t*u+n*p+s*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/y;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=p*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=x*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ec.makeScale(e,t)),this}rotate(e){return this.premultiply(ec.makeRotation(-e)),this}translate(e,t){return this.premultiply(ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ec=new Ht;function _f(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yd(){let i=hl("canvas");return i.style.display="block",i}var fu={};function ro(i){i in fu||(fu[i]=!0,console.warn(i))}var du=new Ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pu=new Ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ro={[Us]:{transfer:rl,primaries:al,toReference:i=>i,fromReference:i=>i},[Kt]:{transfer:on,primaries:al,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Il]:{transfer:rl,primaries:ol,toReference:i=>i.applyMatrix3(pu),fromReference:i=>i.applyMatrix3(du)},[vh]:{transfer:on,primaries:ol,toReference:i=>i.convertSRGBToLinear().applyMatrix3(pu),fromReference:i=>i.applyMatrix3(du).convertLinearToSRGB()}},Zd=new Set([Us,Il]),en={enabled:!0,_workingColorSpace:Us,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Zd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Ro[e].toReference,s=Ro[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ro[i].primaries},getTransfer:function(i){return i===Ui?rl:Ro[i].transfer}};function wa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var na,ul=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{na===void 0&&(na=hl("canvas")),na.width=e.width,na.height=e.height;let n=na.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=na}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=hl("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wa(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wa(t[n]/255)*255):t[n]=wa(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jd=0,fl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Is(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nc(s[o].image)):r.push(nc(s[o]))}else r=nc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ul.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Kd=0,Si=class i extends ls{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wi,s=Wi,r=hi,o=oo,a=Mi,c=nr,l=i.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Is(),this.name="",this.source=new fl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Dr?Kt:Ui),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==af)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ic:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case Uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ic:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case Uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Kt?Dr:pf}set encoding(e){ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Dr?Kt:Ui}};Si.DEFAULT_IMAGE=null;Si.DEFAULT_MAPPING=af;Si.DEFAULT_ANISOTROPY=1;var nn=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],p=c[1],x=c[5],y=c[9],v=c[2],g=c[6],d=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-v)<.01&&Math.abs(y-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+v)<.1&&Math.abs(y+g)<.1&&Math.abs(l+x+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,H=(x+1)/2,P=(d+1)/2,F=(h+p)/4,N=(u+v)/4,le=(y+g)/4;return M>H&&M>P?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=F/n,r=N/n):H>P?H<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(H),n=F/s,r=le/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=N/r,s=le/r),this.set(n,s,r,t),this}let L=Math.sqrt((g-y)*(g-y)+(u-v)*(u-v)+(p-h)*(p-h));return Math.abs(L)<.001&&(L=1),this.x=(g-y)/L,this.y=(u-v)/L,this.z=(p-h)/L,this.w=Math.acos((l+x+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fc=class extends ls{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(ro("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Dr?Kt:Ui),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Si(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new fl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},si=class extends Fc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},dl=class extends Si{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zc=class extends Si{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],p=r[o+0],x=r[o+1],y=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=x,e[t+2]=y,e[t+3]=v;return}if(u!==v||c!==p||l!==x||h!==y){let g=1-a,d=c*p+l*x+h*y+u*v,L=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let P=Math.sqrt(M),F=Math.atan2(P,d*L);g=Math.sin(g*F)/P,a=Math.sin(a*F)/P}let H=a*L;if(c=c*g+p*H,l=l*g+x*H,h=h*g+y*H,u=u*g+v*H,g===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],p=r[o+1],x=r[o+2],y=r[o+3];return e[t]=a*y+h*u+c*x-l*p,e[t+1]=c*y+h*p+l*u-a*x,e[t+2]=l*y+h*x+a*p-c*u,e[t+3]=h*y-a*u-c*p-l*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),p=c(n/2),x=c(s/2),y=c(r/2);switch(o){case"XYZ":this._x=p*h*u+l*x*y,this._y=l*x*u-p*h*y,this._z=l*h*y+p*x*u,this._w=l*h*u-p*x*y;break;case"YXZ":this._x=p*h*u+l*x*y,this._y=l*x*u-p*h*y,this._z=l*h*y-p*x*u,this._w=l*h*u+p*x*y;break;case"ZXY":this._x=p*h*u-l*x*y,this._y=l*x*u+p*h*y,this._z=l*h*y+p*x*u,this._w=l*h*u-p*x*y;break;case"ZYX":this._x=p*h*u-l*x*y,this._y=l*x*u+p*h*y,this._z=l*h*y-p*x*u,this._w=l*h*u+p*x*y;break;case"YZX":this._x=p*h*u+l*x*y,this._y=l*x*u+p*h*y,this._z=l*h*y-p*x*u,this._w=l*h*u-p*x*y;break;case"XZY":this._x=p*h*u-l*x*y,this._y=l*x*u-p*h*y,this._z=l*h*y+p*x*u,this._w=l*h*u+p*x*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],p=n+a+u;if(p>0){let x=.5/Math.sqrt(p+1);this._w=.25/x,this._x=(h-c)*x,this._y=(r-l)*x,this._z=(o-s)*x}else if(n>a&&n>u){let x=2*Math.sqrt(1+n-a-u);this._w=(h-c)/x,this._x=.25*x,this._y=(s+o)/x,this._z=(r+l)/x}else if(a>u){let x=2*Math.sqrt(1+a-n-u);this._w=(r-l)/x,this._x=(s+o)/x,this._y=.25*x,this._z=(c+h)/x}else{let x=2*Math.sqrt(1+u-n-a);this._w=(o-s)/x,this._x=(r+l)/x,this._y=(c+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(On(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let x=1-t;return this._w=x*o+t*this._w,this._x=x*n+t*this._x,this._y=x*s+t*this._y,this._z=x*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(On(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ic=new U,mu=new Rn,Ds=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hi):Hi.fromBufferAttribute(r,o),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ya),Po.subVectors(this.max,Ya),ia.subVectors(e.a,Ya),sa.subVectors(e.b,Ya),ra.subVectors(e.c,Ya),Zs.subVectors(sa,ia),Js.subVectors(ra,sa),br.subVectors(ia,ra);let t=[0,-Zs.z,Zs.y,0,-Js.z,Js.y,0,-br.z,br.y,Zs.z,0,-Zs.x,Js.z,0,-Js.x,br.z,0,-br.x,-Zs.y,Zs.x,0,-Js.y,Js.x,0,-br.y,br.x,0];return!sc(t,ia,sa,ra,Po)||(t=[1,0,0,0,1,0,0,0,1],!sc(t,ia,sa,ra,Po))?!1:(Lo.crossVectors(Zs,Js),t=[Lo.x,Lo.y,Lo.z],sc(t,ia,sa,ra,Po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ws[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ws[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ws[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ws[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ws[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ws[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ws[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ws[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ws),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ws=[new U,new U,new U,new U,new U,new U,new U,new U],Hi=new U,Co=new Ds,ia=new U,sa=new U,ra=new U,Zs=new U,Js=new U,br=new U,Ya=new U,Po=new U,Lo=new U,wr=new U;function sc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wr.fromArray(i,r);let a=s.x*Math.abs(wr.x)+s.y*Math.abs(wr.y)+s.z*Math.abs(wr.z),c=e.dot(wr),l=t.dot(wr),h=n.dot(wr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var $d=new Ds,Za=new U,rc=new U,Nr=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):$d.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Za.subVectors(e,this.center);let t=Za.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Za,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Za.copy(e.center).add(rc)),this.expandByPoint(Za.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ts=new U,ac=new U,Io=new U,Ks=new U,oc=new U,Uo=new U,lc=new U,Pa=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ts)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ts.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ts.copy(this.origin).addScaledVector(this.direction,t),Ts.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ac.copy(e).add(t).multiplyScalar(.5),Io.copy(t).sub(e).normalize(),Ks.copy(this.origin).sub(ac);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Io),a=Ks.dot(this.direction),c=-Ks.dot(Io),l=Ks.lengthSq(),h=Math.abs(1-o*o),u,p,x,y;if(h>0)if(u=o*c-a,p=o*a-c,y=r*h,u>=0)if(p>=-y)if(p<=y){let v=1/h;u*=v,p*=v,x=u*(u+o*p+2*a)+p*(o*u+p+2*c)+l}else p=r,u=Math.max(0,-(o*p+a)),x=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(o*p+a)),x=-u*u+p*(p+2*c)+l;else p<=-y?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-c),r),x=-u*u+p*(p+2*c)+l):p<=y?(u=0,p=Math.min(Math.max(-r,-c),r),x=p*(p+2*c)+l):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-c),r),x=-u*u+p*(p+2*c)+l);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),x=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ac).addScaledVector(Io,p),x}intersectSphere(e,t){Ts.subVectors(e.center,this.origin);let n=Ts.dot(this.direction),s=Ts.dot(Ts)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ts)!==null}intersectTriangle(e,t,n,s,r){oc.subVectors(t,e),Uo.subVectors(n,e),lc.crossVectors(oc,Uo);let o=this.direction.dot(lc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ks.subVectors(this.origin,e);let c=a*this.direction.dot(Uo.crossVectors(Ks,Uo));if(c<0)return null;let l=a*this.direction.dot(oc.cross(Ks));if(l<0||c+l>o)return null;let h=-a*Ks.dot(lc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zt=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,p,x,y,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,p,x,y,v,g)}set(e,t,n,s,r,o,a,c,l,h,u,p,x,y,v,g){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=p,d[3]=x,d[7]=y,d[11]=v,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/aa.setFromMatrixColumn(e,0).length(),r=1/aa.setFromMatrixColumn(e,1).length(),o=1/aa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let p=o*h,x=o*u,y=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=x+y*l,t[5]=p-v*l,t[9]=-a*c,t[2]=v-p*l,t[6]=y+x*l,t[10]=o*c}else if(e.order==="YXZ"){let p=c*h,x=c*u,y=l*h,v=l*u;t[0]=p+v*a,t[4]=y*a-x,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=x*a-y,t[6]=v+p*a,t[10]=o*c}else if(e.order==="ZXY"){let p=c*h,x=c*u,y=l*h,v=l*u;t[0]=p-v*a,t[4]=-o*u,t[8]=y+x*a,t[1]=x+y*a,t[5]=o*h,t[9]=v-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let p=o*h,x=o*u,y=a*h,v=a*u;t[0]=c*h,t[4]=y*l-x,t[8]=p*l+v,t[1]=c*u,t[5]=v*l+p,t[9]=x*l-y,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let p=o*c,x=o*l,y=a*c,v=a*l;t[0]=c*h,t[4]=v-p*u,t[8]=y*u+x,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=x*u+y,t[10]=p-v*u}else if(e.order==="XZY"){let p=o*c,x=o*l,y=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=p*u+v,t[5]=o*h,t[9]=x*u-y,t[2]=y*u-x,t[6]=a*h,t[10]=v*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jd,e,Qd)}lookAt(e,t,n){let s=this.elements;return vi.subVectors(e,t),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),$s.crossVectors(n,vi),$s.lengthSq()===0&&(Math.abs(n.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),$s.crossVectors(n,vi)),$s.normalize(),Do.crossVectors(vi,$s),s[0]=$s.x,s[4]=Do.x,s[8]=vi.x,s[1]=$s.y,s[5]=Do.y,s[9]=vi.y,s[2]=$s.z,s[6]=Do.z,s[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],x=n[13],y=n[2],v=n[6],g=n[10],d=n[14],L=n[3],M=n[7],H=n[11],P=n[15],F=s[0],N=s[4],le=s[8],S=s[12],C=s[1],O=s[5],ae=s[9],Ae=s[13],k=s[2],J=s[6],ie=s[10],xe=s[14],ue=s[3],re=s[7],_e=s[11],Re=s[15];return r[0]=o*F+a*C+c*k+l*ue,r[4]=o*N+a*O+c*J+l*re,r[8]=o*le+a*ae+c*ie+l*_e,r[12]=o*S+a*Ae+c*xe+l*Re,r[1]=h*F+u*C+p*k+x*ue,r[5]=h*N+u*O+p*J+x*re,r[9]=h*le+u*ae+p*ie+x*_e,r[13]=h*S+u*Ae+p*xe+x*Re,r[2]=y*F+v*C+g*k+d*ue,r[6]=y*N+v*O+g*J+d*re,r[10]=y*le+v*ae+g*ie+d*_e,r[14]=y*S+v*Ae+g*xe+d*Re,r[3]=L*F+M*C+H*k+P*ue,r[7]=L*N+M*O+H*J+P*re,r[11]=L*le+M*ae+H*ie+P*_e,r[15]=L*S+M*Ae+H*xe+P*Re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],p=e[10],x=e[14],y=e[3],v=e[7],g=e[11],d=e[15];return y*(+r*c*u-s*l*u-r*a*p+n*l*p+s*a*x-n*c*x)+v*(+t*c*x-t*l*p+r*o*p-s*o*x+s*l*h-r*c*h)+g*(+t*l*u-t*a*x-r*o*u+n*o*x+r*a*h-n*l*h)+d*(-s*a*h-t*c*u+t*a*p+s*o*u-n*o*p+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],p=e[10],x=e[11],y=e[12],v=e[13],g=e[14],d=e[15],L=u*g*l-v*p*l+v*c*x-a*g*x-u*c*d+a*p*d,M=y*p*l-h*g*l-y*c*x+o*g*x+h*c*d-o*p*d,H=h*v*l-y*u*l+y*a*x-o*v*x-h*a*d+o*u*d,P=y*u*c-h*v*c-y*a*p+o*v*p+h*a*g-o*u*g,F=t*L+n*M+s*H+r*P;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/F;return e[0]=L*N,e[1]=(v*p*r-u*g*r-v*s*x+n*g*x+u*s*d-n*p*d)*N,e[2]=(a*g*r-v*c*r+v*s*l-n*g*l-a*s*d+n*c*d)*N,e[3]=(u*c*r-a*p*r-u*s*l+n*p*l+a*s*x-n*c*x)*N,e[4]=M*N,e[5]=(h*g*r-y*p*r+y*s*x-t*g*x-h*s*d+t*p*d)*N,e[6]=(y*c*r-o*g*r-y*s*l+t*g*l+o*s*d-t*c*d)*N,e[7]=(o*p*r-h*c*r+h*s*l-t*p*l-o*s*x+t*c*x)*N,e[8]=H*N,e[9]=(y*u*r-h*v*r-y*n*x+t*v*x+h*n*d-t*u*d)*N,e[10]=(o*v*r-y*a*r+y*n*l-t*v*l-o*n*d+t*a*d)*N,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*x-t*a*x)*N,e[12]=P*N,e[13]=(h*v*s-y*u*s+y*n*p-t*v*p-h*n*g+t*u*g)*N,e[14]=(y*a*s-o*v*s-y*n*c+t*v*c+o*n*g-t*a*g)*N,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*p+t*a*p)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,p=r*l,x=r*h,y=r*u,v=o*h,g=o*u,d=a*u,L=c*l,M=c*h,H=c*u,P=n.x,F=n.y,N=n.z;return s[0]=(1-(v+d))*P,s[1]=(x+H)*P,s[2]=(y-M)*P,s[3]=0,s[4]=(x-H)*F,s[5]=(1-(p+d))*F,s[6]=(g+L)*F,s[7]=0,s[8]=(y+M)*N,s[9]=(g-L)*N,s[10]=(1-(p+v))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=aa.set(s[0],s[1],s[2]).length(),o=aa.set(s[4],s[5],s[6]).length(),a=aa.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ki.copy(this);let l=1/r,h=1/o,u=1/a;return ki.elements[0]*=l,ki.elements[1]*=l,ki.elements[2]*=l,ki.elements[4]*=h,ki.elements[5]*=h,ki.elements[6]*=h,ki.elements[8]*=u,ki.elements[9]*=u,ki.elements[10]*=u,t.setFromRotationMatrix(ki),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ls){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),x,y;if(a===Ls)x=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===ll)x=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ls){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),p=(t+e)*l,x=(n+s)*h,y,v;if(a===Ls)y=(o+r)*u,v=-2*u;else if(a===ll)y=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-x,c[2]=0,c[6]=0,c[10]=v,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},aa=new U,ki=new zt,jd=new U(0,0,0),Qd=new U(1,1,1),$s=new U,Do=new U,vi=new U,gu=new zt,xu=new Rn,cs=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(On(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-On(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,x),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(On(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,x),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-On(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,x),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(On(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,x));break;case"XZY":this._z=Math.asin(-On(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xu.setFromEuler(this),this.setFromQuaternion(xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cs.DEFAULT_ORDER="XYZ";var co=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ep=0,_u=new U,oa=new Rn,As=new zt,No=new U,Ja=new U,tp=new U,np=new Rn,vu=new U(1,0,0),yu=new U(0,1,0),Mu=new U(0,0,1),ip={type:"added"},sp={type:"removed"},Jn=class i extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new cs,n=new Rn,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new zt},normalMatrix:{value:new Ht}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oa.setFromAxisAngle(e,t),this.quaternion.multiply(oa),this}rotateOnWorldAxis(e,t){return oa.setFromAxisAngle(e,t),this.quaternion.premultiply(oa),this}rotateX(e){return this.rotateOnAxis(vu,e)}rotateY(e){return this.rotateOnAxis(yu,e)}rotateZ(e){return this.rotateOnAxis(Mu,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vu,e)}translateY(e){return this.translateOnAxis(yu,e)}translateZ(e){return this.translateOnAxis(Mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(As.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?No.copy(e):No.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?As.lookAt(Ja,No,this.up):As.lookAt(No,Ja,this.up),this.quaternion.setFromRotationMatrix(As),s&&(As.extractRotation(s.matrixWorld),oa.setFromRotationMatrix(As),this.quaternion.premultiply(oa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ip)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),As.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),As.multiply(e.parent.matrixWorld)),e.applyMatrix4(As),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,e,tp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),p=o(e.skeletons),x=o(e.animations),y=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),x.length>0&&(n.animations=x),y.length>0&&(n.nodes=y)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Jn.DEFAULT_UP=new U(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vi=new U,Rs=new U,cc=new U,Cs=new U,la=new U,ca=new U,Eu=new U,hc=new U,uc=new U,fc=new U,Oo=!1,Lr=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Vi.subVectors(e,t),s.cross(Vi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Vi.subVectors(s,t),Rs.subVectors(n,t),cc.subVectors(e,t);let o=Vi.dot(Vi),a=Vi.dot(Rs),c=Vi.dot(cc),l=Rs.dot(Rs),h=Rs.dot(cc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,x=(l*c-a*h)*p,y=(o*h-a*c)*p;return r.set(1-x-y,y,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Cs)===null?!1:Cs.x>=0&&Cs.y>=0&&Cs.x+Cs.y<=1}static getUV(e,t,n,s,r,o,a,c){return Oo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Oo=!0),this.getInterpolation(e,t,n,s,r,o,a,c)}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Cs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Cs.x),c.addScaledVector(o,Cs.y),c.addScaledVector(a,Cs.z),c)}static isFrontFacing(e,t,n,s){return Vi.subVectors(n,t),Rs.subVectors(e,t),Vi.cross(Rs).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),Rs.subVectors(this.a,this.b),Vi.cross(Rs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Oo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Oo=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;la.subVectors(s,n),ca.subVectors(r,n),hc.subVectors(e,n);let c=la.dot(hc),l=ca.dot(hc);if(c<=0&&l<=0)return t.copy(n);uc.subVectors(e,s);let h=la.dot(uc),u=ca.dot(uc);if(h>=0&&u<=h)return t.copy(s);let p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(la,o);fc.subVectors(e,r);let x=la.dot(fc),y=ca.dot(fc);if(y>=0&&x<=y)return t.copy(r);let v=x*l-c*y;if(v<=0&&l>=0&&y<=0)return a=l/(l-y),t.copy(n).addScaledVector(ca,a);let g=h*y-x*u;if(g<=0&&u-h>=0&&x-y>=0)return Eu.subVectors(r,s),a=(u-h)/(u-h+(x-y)),t.copy(s).addScaledVector(Eu,a);let d=1/(g+v+p);return o=v*d,a=p*d,t.copy(n).addScaledVector(la,o).addScaledVector(ca,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},js={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function dc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,en.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=en.workingColorSpace){return this.r=e,this.g=t,this.b=n,en.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=en.workingColorSpace){if(e=yh(e,1),t=On(t,0,1),n=On(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=dc(o,r,e+1/3),this.g=dc(o,r,e),this.b=dc(o,r,e-1/3)}return en.toWorkingColorSpace(this,s),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let n=vf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}copyLinearToSRGB(e){return this.r=tc(e.r),this.g=tc(e.g),this.b=tc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return en.fromWorkingColorSpace(Xn.copy(this),e),Math.round(On(Xn.r*255,0,255))*65536+Math.round(On(Xn.g*255,0,255))*256+Math.round(On(Xn.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=en.workingColorSpace){en.fromWorkingColorSpace(Xn.copy(this),t);let n=Xn.r,s=Xn.g,r=Xn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=en.workingColorSpace){return en.fromWorkingColorSpace(Xn.copy(this),t),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=Kt){en.fromWorkingColorSpace(Xn.copy(this),e);let t=Xn.r,n=Xn.g,s=Xn.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(js),this.setHSL(js.h+e,js.s+t,js.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(js),e.getHSL(Fo);let n=so(js.h,Fo.h,t),s=so(js.s,Fo.s,t),r=so(js.l,Fo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xn=new De;De.NAMES=vf;var rp=0,sr=class extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=ba,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Cc,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ta,this.stencilZFail=ta,this.stencilZPass=ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ba&&(n.blending=this.blending),this.side!==ir&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rc&&(n.blendSrc=this.blendSrc),this.blendDst!==Cc&&(n.blendDst=this.blendDst),this.blendEquation!==Cr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==nl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ta&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ta&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ta&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ut=class extends sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var An=new U,zo=new Ye,ui=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zo.fromBufferAttribute(this,t),zo.applyMatrix3(e),this.setXY(t,zo.x,zo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix3(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=as(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=as(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=as(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=as(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=as(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dc&&(e.usage=this.usage),e}};var pl=class extends ui{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ml=class extends ui{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var En=class extends ui{constructor(e,t,n){super(new Float32Array(e),t,n)}};var ap=0,Ii=new zt,pc=new Jn,ha=new U,yi=new Ds,Ka=new Ds,Nn=new U,bi=class i extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_f(e)?ml:pl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,t,n){return Ii.makeTranslation(e,t,n),this.applyMatrix4(Ii),this}scale(e,t,n){return Ii.makeScale(e,t,n),this.applyMatrix4(Ii),this}lookAt(e){return pc.lookAt(e),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ha).negate(),this.translate(ha.x,ha.y,ha.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new En(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];yi.setFromBufferAttribute(r),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ka.setFromBufferAttribute(a),this.morphTargetsRelative?(Nn.addVectors(yi.min,Ka.min),yi.expandByPoint(Nn),Nn.addVectors(yi.max,Ka.max),yi.expandByPoint(Nn)):(yi.expandByPoint(Ka.min),yi.expandByPoint(Ka.max))}yi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Nn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Nn.fromBufferAttribute(a,l),c&&(ha.fromBufferAttribute(e,l),Nn.add(ha)),s=Math.max(s,n.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let C=0;C<a;C++)l[C]=new U,h[C]=new U;let u=new U,p=new U,x=new U,y=new Ye,v=new Ye,g=new Ye,d=new U,L=new U;function M(C,O,ae){u.fromArray(s,C*3),p.fromArray(s,O*3),x.fromArray(s,ae*3),y.fromArray(o,C*2),v.fromArray(o,O*2),g.fromArray(o,ae*2),p.sub(u),x.sub(u),v.sub(y),g.sub(y);let Ae=1/(v.x*g.y-g.x*v.y);isFinite(Ae)&&(d.copy(p).multiplyScalar(g.y).addScaledVector(x,-v.y).multiplyScalar(Ae),L.copy(x).multiplyScalar(v.x).addScaledVector(p,-g.x).multiplyScalar(Ae),l[C].add(d),l[O].add(d),l[ae].add(d),h[C].add(L),h[O].add(L),h[ae].add(L))}let H=this.groups;H.length===0&&(H=[{start:0,count:n.length}]);for(let C=0,O=H.length;C<O;++C){let ae=H[C],Ae=ae.start,k=ae.count;for(let J=Ae,ie=Ae+k;J<ie;J+=3)M(n[J+0],n[J+1],n[J+2])}let P=new U,F=new U,N=new U,le=new U;function S(C){N.fromArray(r,C*3),le.copy(N);let O=l[C];P.copy(O),P.sub(N.multiplyScalar(N.dot(O))).normalize(),F.crossVectors(le,O);let Ae=F.dot(h[C])<0?-1:1;c[C*4]=P.x,c[C*4+1]=P.y,c[C*4+2]=P.z,c[C*4+3]=Ae}for(let C=0,O=H.length;C<O;++C){let ae=H[C],Ae=ae.start,k=ae.count;for(let J=Ae,ie=Ae+k;J<ie;J+=3)S(n[J+0]),S(n[J+1]),S(n[J+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ui(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,x=n.count;p<x;p++)n.setXYZ(p,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let p=0,x=e.count;p<x;p+=3){let y=e.getX(p+0),v=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,y),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let p=0,x=t.count;p<x;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nn.fromBufferAttribute(e,t),Nn.normalize(),e.setXYZ(t,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(c.length*h),x=0,y=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?x=c[v]*a.data.stride+a.offset:x=c[v]*h;for(let d=0;d<h;d++)p[y++]=l[x++]}return new ui(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let p=l[h],x=e(p,n);c.push(x)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){let x=l[u];h.push(x.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let p=0,x=u.length;p<x;p++)h.push(u[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Su=new zt,Tr=new Pa,Bo=new Nr,bu=new U,ua=new U,fa=new U,da=new U,mc=new U,Ho=new U,ko=new Ye,Vo=new Ye,Go=new Ye,wu=new U,Tu=new U,Au=new U,Wo=new U,Xo=new U,vt=class extends Jn{constructor(e=new bi,t=new Ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ho.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(mc.fromBufferAttribute(u,e),o?Ho.addScaledVector(mc,h):Ho.addScaledVector(mc.sub(t),h))}t.add(Ho)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(r),Tr.copy(e.ray).recast(e.near),!(Bo.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Bo,bu)===null||Tr.origin.distanceToSquared(bu)>(e.far-e.near)**2))&&(Su.copy(r).invert(),Tr.copy(e.ray).applyMatrix4(Su),!(n.boundingBox!==null&&Tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Tr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,x=r.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,v=p.length;y<v;y++){let g=p[y],d=o[g.materialIndex],L=Math.max(g.start,x.start),M=Math.min(a.count,Math.min(g.start+g.count,x.start+x.count));for(let H=L,P=M;H<P;H+=3){let F=a.getX(H),N=a.getX(H+1),le=a.getX(H+2);s=qo(this,d,e,n,l,h,u,F,N,le),s&&(s.faceIndex=Math.floor(H/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,x.start),v=Math.min(a.count,x.start+x.count);for(let g=y,d=v;g<d;g+=3){let L=a.getX(g),M=a.getX(g+1),H=a.getX(g+2);s=qo(this,o,e,n,l,h,u,L,M,H),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let y=0,v=p.length;y<v;y++){let g=p[y],d=o[g.materialIndex],L=Math.max(g.start,x.start),M=Math.min(c.count,Math.min(g.start+g.count,x.start+x.count));for(let H=L,P=M;H<P;H+=3){let F=H,N=H+1,le=H+2;s=qo(this,d,e,n,l,h,u,F,N,le),s&&(s.faceIndex=Math.floor(H/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,x.start),v=Math.min(c.count,x.start+x.count);for(let g=y,d=v;g<d;g+=3){let L=g,M=g+1,H=g+2;s=qo(this,o,e,n,l,h,u,L,M,H),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function op(i,e,t,n,s,r,o,a){let c;if(e.side===Zn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===ir,a),c===null)return null;Xo.copy(a),Xo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Xo);return l<t.near||l>t.far?null:{distance:l,point:Xo.clone(),object:i}}function qo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ua),i.getVertexPosition(c,fa),i.getVertexPosition(l,da);let h=op(i,e,t,n,ua,fa,da,Wo);if(h){s&&(ko.fromBufferAttribute(s,a),Vo.fromBufferAttribute(s,c),Go.fromBufferAttribute(s,l),h.uv=Lr.getInterpolation(Wo,ua,fa,da,ko,Vo,Go,new Ye)),r&&(ko.fromBufferAttribute(r,a),Vo.fromBufferAttribute(r,c),Go.fromBufferAttribute(r,l),h.uv1=Lr.getInterpolation(Wo,ua,fa,da,ko,Vo,Go,new Ye),h.uv2=h.uv1),o&&(wu.fromBufferAttribute(o,a),Tu.fromBufferAttribute(o,c),Au.fromBufferAttribute(o,l),h.normal=Lr.getInterpolation(Wo,ua,fa,da,wu,Tu,Au,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new U,materialIndex:0};Lr.getNormal(ua,fa,da,u.normal),h.face=u}return h}var Ns=class i extends bi{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],p=0,x=0;y("z","y","x",-1,-1,n,t,e,o,r,0),y("z","y","x",1,-1,n,t,-e,o,r,1),y("x","z","y",1,1,e,n,t,s,o,2),y("x","z","y",1,-1,e,n,-t,s,o,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new En(l,3)),this.setAttribute("normal",new En(h,3)),this.setAttribute("uv",new En(u,2));function y(v,g,d,L,M,H,P,F,N,le,S){let C=H/N,O=P/le,ae=H/2,Ae=P/2,k=F/2,J=N+1,ie=le+1,xe=0,ue=0,re=new U;for(let _e=0;_e<ie;_e++){let Re=_e*O-Ae;for(let I=0;I<J;I++){let W=I*C-ae;re[v]=W*L,re[g]=Re*M,re[d]=k,l.push(re.x,re.y,re.z),re[v]=0,re[g]=0,re[d]=F>0?1:-1,h.push(re.x,re.y,re.z),u.push(I/N),u.push(1-_e/le),xe+=1}}for(let _e=0;_e<le;_e++)for(let Re=0;Re<N;Re++){let I=p+Re+J*_e,W=p+Re+J*(_e+1),oe=p+(Re+1)+J*(_e+1),Pe=p+(Re+1)+J*_e;c.push(I,W,Pe),c.push(W,oe,Pe),ue+=6}a.addGroup(x,ue,S),x+=ue,p+=xe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function La(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function ii(i){let e={};for(let t=0;t<i.length;t++){let n=La(i[t]);for(let s in n)e[s]=n[s]}return e}function lp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yf(i){return i.getRenderTarget()===null?i.outputColorSpace:en.workingColorSpace}var ar={clone:La,merge:ii},cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cp,this.fragmentShader=hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=La(e.uniforms),this.uniformsGroups=lp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},gl=class extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Ls}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qn=class extends gl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lo*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(io*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},pa=-90,ma=1,Bc=class extends Jn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qn(pa,ma,e,t);s.layers=this.layers,this.add(s);let r=new qn(pa,ma,e,t);r.layers=this.layers,this.add(r);let o=new qn(pa,ma,e,t);o.layers=this.layers,this.add(o);let a=new qn(pa,ma,e,t);a.layers=this.layers,this.add(a);let c=new qn(pa,ma,e,t);c.layers=this.layers,this.add(c);let l=new qn(pa,ma,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ls)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ll)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,p,x),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},xl=class extends Si{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Aa,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hc=class extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(ro("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Dr?Kt:Ui),this.texture=new xl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ns(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:La(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zn,blending:os});r.uniforms.tEquirect.value=t;let o=new vt(s,r),a=t.minFilter;return t.minFilter===oo&&(t.minFilter=hi),new Bc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},gc=new U,up=new U,fp=new Ht,Gi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=gc.subVectors(n,t).cross(up.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(gc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||fp.getNormalMatrix(e),s=this.coplanarPoint(gc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ar=new Nr,Yo=new U,ho=class{constructor(e=new Gi,t=new Gi,n=new Gi,s=new Gi,r=new Gi,o=new Gi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ls){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],p=s[7],x=s[8],y=s[9],v=s[10],g=s[11],d=s[12],L=s[13],M=s[14],H=s[15];if(n[0].setComponents(c-r,p-l,g-x,H-d).normalize(),n[1].setComponents(c+r,p+l,g+x,H+d).normalize(),n[2].setComponents(c+o,p+h,g+y,H+L).normalize(),n[3].setComponents(c-o,p-h,g-y,H-L).normalize(),n[4].setComponents(c-a,p-u,g-v,H-M).normalize(),t===Ls)n[5].setComponents(c+a,p+u,g+v,H+M).normalize();else if(t===ll)n[5].setComponents(a,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Yo.x=s.normal.x>0?e.max.x:e.min.x,Yo.y=s.normal.y>0?e.max.y:e.min.y,Yo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Mf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function dp(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,p=l.usage,x=u.byteLength,y=i.createBuffer();i.bindBuffer(h,y),i.bufferData(h,u,p),l.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:y,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:x}}function r(l,h,u){let p=h.array,x=h._updateRange,y=h.updateRanges;if(i.bindBuffer(u,l),x.count===-1&&y.length===0&&i.bufferSubData(u,0,p),y.length!==0){for(let v=0,g=y.length;v<g;v++){let d=y[v];t?i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}x.count!==-1&&(t?i.bufferSubData(u,x.offset*p.BYTES_PER_ELEMENT,p,x.offset,x.count):i.bufferSubData(u,x.offset*p.BYTES_PER_ELEMENT,p.subarray(x.offset,x.offset+x.count)),x.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let p=n.get(l);(!p||p.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var ri=class i extends bi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,p=t/c,x=[],y=[],v=[],g=[];for(let d=0;d<h;d++){let L=d*p-o;for(let M=0;M<l;M++){let H=M*u-r;y.push(H,-L,0),v.push(0,0,1),g.push(M/a),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let L=0;L<a;L++){let M=L+l*d,H=L+l*(d+1),P=L+1+l*(d+1),F=L+1+l*d;x.push(M,H,F),x.push(H,P,F)}this.setIndex(x),this.setAttribute("position",new En(y,3)),this.setAttribute("normal",new En(v,3)),this.setAttribute("uv",new En(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mp=`#ifdef USE_ALPHAHASH
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
#endif`,gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yp=`#ifdef USE_AOMAP
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
#endif`,Mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ep=`#ifdef USE_BATCHING
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
#endif`,Sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ap=`#ifdef USE_IRIDESCENCE
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
#endif`,Rp=`#ifdef USE_BUMPMAP
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
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fp=`#define PI 3.141592653589793
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
} // validated`,zp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bp=`vec3 transformedNormal = objectNormal;
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
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xp=`
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
}`,qp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tm=`#ifdef USE_GRADIENTMAP
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
}`,nm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,am=`uniform bool receiveShadow;
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
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fm=`PhysicalMaterial material;
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
#endif`,dm=`struct PhysicalMaterial {
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
}`,pm=`
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
#endif`,mm=`#if defined( RE_IndirectDiffuse )
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
#endif`,gm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_m=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ym=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bm=`#if defined( USE_POINTS_UV )
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
#endif`,wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Am=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rm=`#ifdef USE_MORPHNORMALS
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
#endif`,Cm=`#ifdef USE_MORPHTARGETS
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
#endif`,Pm=`#ifdef USE_MORPHTARGETS
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
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
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
#endif`,Fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jm=`float getShadowMask() {
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
}`,Qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eg=`#ifdef USE_SKINNING
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
#endif`,tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ng=`#ifdef USE_SKINNING
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
#endif`,ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ag=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,og=`#ifdef USE_TRANSMISSION
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
#endif`,lg=`#ifdef USE_TRANSMISSION
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pg=`uniform sampler2D t2D;
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`#include <common>
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
}`,yg=`#if DEPTH_PACKING == 3200
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
}`,Mg=`#define DISTANCE
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
}`,Eg=`#define DISTANCE
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`uniform float scale;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Cg=`#define LAMBERT
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
}`,Pg=`#define LAMBERT
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
}`,Lg=`#define MATCAP
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
}`,Ig=`#define MATCAP
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
}`,Ug=`#define NORMAL
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
}`,Dg=`#define NORMAL
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
}`,Ng=`#define PHONG
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
}`,Og=`#define PHONG
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
}`,Fg=`#define STANDARD
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
}`,zg=`#define STANDARD
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
}`,Bg=`#define TOON
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
}`,Hg=`#define TOON
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
}`,kg=`uniform float size;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Gg=`#include <common>
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
}`,Wg=`uniform vec3 color;
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
}`,Xg=`uniform float rotation;
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
}`,qg=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:pp,alphahash_pars_fragment:mp,alphamap_fragment:gp,alphamap_pars_fragment:xp,alphatest_fragment:_p,alphatest_pars_fragment:vp,aomap_fragment:yp,aomap_pars_fragment:Mp,batching_pars_vertex:Ep,batching_vertex:Sp,begin_vertex:bp,beginnormal_vertex:wp,bsdfs:Tp,iridescence_fragment:Ap,bumpmap_pars_fragment:Rp,clipping_planes_fragment:Cp,clipping_planes_pars_fragment:Pp,clipping_planes_pars_vertex:Lp,clipping_planes_vertex:Ip,color_fragment:Up,color_pars_fragment:Dp,color_pars_vertex:Np,color_vertex:Op,common:Fp,cube_uv_reflection_fragment:zp,defaultnormal_vertex:Bp,displacementmap_pars_vertex:Hp,displacementmap_vertex:kp,emissivemap_fragment:Vp,emissivemap_pars_fragment:Gp,colorspace_fragment:Wp,colorspace_pars_fragment:Xp,envmap_fragment:qp,envmap_common_pars_fragment:Yp,envmap_pars_fragment:Zp,envmap_pars_vertex:Jp,envmap_physical_pars_fragment:om,envmap_vertex:Kp,fog_vertex:$p,fog_pars_vertex:jp,fog_fragment:Qp,fog_pars_fragment:em,gradientmap_pars_fragment:tm,lightmap_fragment:nm,lightmap_pars_fragment:im,lights_lambert_fragment:sm,lights_lambert_pars_fragment:rm,lights_pars_begin:am,lights_toon_fragment:lm,lights_toon_pars_fragment:cm,lights_phong_fragment:hm,lights_phong_pars_fragment:um,lights_physical_fragment:fm,lights_physical_pars_fragment:dm,lights_fragment_begin:pm,lights_fragment_maps:mm,lights_fragment_end:gm,logdepthbuf_fragment:xm,logdepthbuf_pars_fragment:_m,logdepthbuf_pars_vertex:vm,logdepthbuf_vertex:ym,map_fragment:Mm,map_pars_fragment:Em,map_particle_fragment:Sm,map_particle_pars_fragment:bm,metalnessmap_fragment:wm,metalnessmap_pars_fragment:Tm,morphcolor_vertex:Am,morphnormal_vertex:Rm,morphtarget_pars_vertex:Cm,morphtarget_vertex:Pm,normal_fragment_begin:Lm,normal_fragment_maps:Im,normal_pars_fragment:Um,normal_pars_vertex:Dm,normal_vertex:Nm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:zm,clearcoat_pars_fragment:Bm,iridescence_pars_fragment:Hm,opaque_fragment:km,packing:Vm,premultiplied_alpha_fragment:Gm,project_vertex:Wm,dithering_fragment:Xm,dithering_pars_fragment:qm,roughnessmap_fragment:Ym,roughnessmap_pars_fragment:Zm,shadowmap_pars_fragment:Jm,shadowmap_pars_vertex:Km,shadowmap_vertex:$m,shadowmask_pars_fragment:jm,skinbase_vertex:Qm,skinning_pars_vertex:eg,skinning_vertex:tg,skinnormal_vertex:ng,specularmap_fragment:ig,specularmap_pars_fragment:sg,tonemapping_fragment:rg,tonemapping_pars_fragment:ag,transmission_fragment:og,transmission_pars_fragment:lg,uv_pars_fragment:cg,uv_pars_vertex:hg,uv_vertex:ug,worldpos_vertex:fg,background_vert:dg,background_frag:pg,backgroundCube_vert:mg,backgroundCube_frag:gg,cube_vert:xg,cube_frag:_g,depth_vert:vg,depth_frag:yg,distanceRGBA_vert:Mg,distanceRGBA_frag:Eg,equirect_vert:Sg,equirect_frag:bg,linedashed_vert:wg,linedashed_frag:Tg,meshbasic_vert:Ag,meshbasic_frag:Rg,meshlambert_vert:Cg,meshlambert_frag:Pg,meshmatcap_vert:Lg,meshmatcap_frag:Ig,meshnormal_vert:Ug,meshnormal_frag:Dg,meshphong_vert:Ng,meshphong_frag:Og,meshphysical_vert:Fg,meshphysical_frag:zg,meshtoon_vert:Bg,meshtoon_frag:Hg,points_vert:kg,points_frag:Vg,shadow_vert:Gg,shadow_frag:Wg,sprite_vert:Xg,sprite_frag:qg},Oe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},rs={basic:{uniforms:ii([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:ii([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new De(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:ii([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:ii([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:ii([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new De(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:ii([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:ii([Oe.points,Oe.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:ii([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:ii([Oe.common,Oe.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:ii([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:ii([Oe.sprite,Oe.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:ii([Oe.common,Oe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:ii([Oe.lights,Oe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};rs.physical={uniforms:ii([rs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var Zo={r:0,b:0,g:0};function Yg(i,e,t,n,s,r,o){let a=new De(0),c=r===!0?0:1,l,h,u=null,p=0,x=null;function y(g,d){let L=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?t:e).get(M)),M===null?v(a,c):M&&M.isColor&&(v(M,1),L=!0);let H=i.xr.getEnvironmentBlendMode();H==="additive"?n.buffers.color.setClear(0,0,0,1,o):H==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||L)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Ll)?(h===void 0&&(h=new vt(new Ns(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:La(rs.backgroundCube.uniforms),vertexShader:rs.backgroundCube.vertexShader,fragmentShader:rs.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,F,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=en.getTransfer(M.colorSpace)!==on,(u!==M||p!==M.version||x!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,p=M.version,x=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new vt(new ri(2,2),new xn({name:"BackgroundMaterial",uniforms:La(rs.background.uniforms),vertexShader:rs.background.vertexShader,fragmentShader:rs.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=en.getTransfer(M.colorSpace)!==on,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||p!==M.version||x!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,p=M.version,x=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function v(g,d){g.getRGB(Zo,yf(i)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(g,d=1){a.set(g),c=d,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,v(a,c)},render:y}}function Zg(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=g(null),l=c,h=!1;function u(k,J,ie,xe,ue){let re=!1;if(o){let _e=v(xe,ie,J);l!==_e&&(l=_e,x(l.object)),re=d(k,xe,ie,ue),re&&L(k,xe,ie,ue)}else{let _e=J.wireframe===!0;(l.geometry!==xe.id||l.program!==ie.id||l.wireframe!==_e)&&(l.geometry=xe.id,l.program=ie.id,l.wireframe=_e,re=!0)}ue!==null&&t.update(ue,i.ELEMENT_ARRAY_BUFFER),(re||h)&&(h=!1,le(k,J,ie,xe),ue!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ue).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function x(k){return n.isWebGL2?i.bindVertexArray(k):r.bindVertexArrayOES(k)}function y(k){return n.isWebGL2?i.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function v(k,J,ie){let xe=ie.wireframe===!0,ue=a[k.id];ue===void 0&&(ue={},a[k.id]=ue);let re=ue[J.id];re===void 0&&(re={},ue[J.id]=re);let _e=re[xe];return _e===void 0&&(_e=g(p()),re[xe]=_e),_e}function g(k){let J=[],ie=[],xe=[];for(let ue=0;ue<s;ue++)J[ue]=0,ie[ue]=0,xe[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ie,attributeDivisors:xe,object:k,attributes:{},index:null}}function d(k,J,ie,xe){let ue=l.attributes,re=J.attributes,_e=0,Re=ie.getAttributes();for(let I in Re)if(Re[I].location>=0){let oe=ue[I],Pe=re[I];if(Pe===void 0&&(I==="instanceMatrix"&&k.instanceMatrix&&(Pe=k.instanceMatrix),I==="instanceColor"&&k.instanceColor&&(Pe=k.instanceColor)),oe===void 0||oe.attribute!==Pe||Pe&&oe.data!==Pe.data)return!0;_e++}return l.attributesNum!==_e||l.index!==xe}function L(k,J,ie,xe){let ue={},re=J.attributes,_e=0,Re=ie.getAttributes();for(let I in Re)if(Re[I].location>=0){let oe=re[I];oe===void 0&&(I==="instanceMatrix"&&k.instanceMatrix&&(oe=k.instanceMatrix),I==="instanceColor"&&k.instanceColor&&(oe=k.instanceColor));let Pe={};Pe.attribute=oe,oe&&oe.data&&(Pe.data=oe.data),ue[I]=Pe,_e++}l.attributes=ue,l.attributesNum=_e,l.index=xe}function M(){let k=l.newAttributes;for(let J=0,ie=k.length;J<ie;J++)k[J]=0}function H(k){P(k,0)}function P(k,J){let ie=l.newAttributes,xe=l.enabledAttributes,ue=l.attributeDivisors;ie[k]=1,xe[k]===0&&(i.enableVertexAttribArray(k),xe[k]=1),ue[k]!==J&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,J),ue[k]=J)}function F(){let k=l.newAttributes,J=l.enabledAttributes;for(let ie=0,xe=J.length;ie<xe;ie++)J[ie]!==k[ie]&&(i.disableVertexAttribArray(ie),J[ie]=0)}function N(k,J,ie,xe,ue,re,_e){_e===!0?i.vertexAttribIPointer(k,J,ie,ue,re):i.vertexAttribPointer(k,J,ie,xe,ue,re)}function le(k,J,ie,xe){if(n.isWebGL2===!1&&(k.isInstancedMesh||xe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();let ue=xe.attributes,re=ie.getAttributes(),_e=J.defaultAttributeValues;for(let Re in re){let I=re[Re];if(I.location>=0){let W=ue[Re];if(W===void 0&&(Re==="instanceMatrix"&&k.instanceMatrix&&(W=k.instanceMatrix),Re==="instanceColor"&&k.instanceColor&&(W=k.instanceColor)),W!==void 0){let oe=W.normalized,Pe=W.itemSize,ge=t.get(W);if(ge===void 0)continue;let He=ge.buffer,lt=ge.type,Ke=ge.bytesPerElement,at=n.isWebGL2===!0&&(lt===i.INT||lt===i.UNSIGNED_INT||W.gpuType===of);if(W.isInterleavedBufferAttribute){let yt=W.data,$=yt.stride,Wt=W.offset;if(yt.isInstancedInterleavedBuffer){for(let tt=0;tt<I.locationSize;tt++)P(I.location+tt,yt.meshPerAttribute);k.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let tt=0;tt<I.locationSize;tt++)H(I.location+tt);i.bindBuffer(i.ARRAY_BUFFER,He);for(let tt=0;tt<I.locationSize;tt++)N(I.location+tt,Pe/I.locationSize,lt,oe,$*Ke,(Wt+Pe/I.locationSize*tt)*Ke,at)}else{if(W.isInstancedBufferAttribute){for(let yt=0;yt<I.locationSize;yt++)P(I.location+yt,W.meshPerAttribute);k.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let yt=0;yt<I.locationSize;yt++)H(I.location+yt);i.bindBuffer(i.ARRAY_BUFFER,He);for(let yt=0;yt<I.locationSize;yt++)N(I.location+yt,Pe/I.locationSize,lt,oe,Pe*Ke,Pe/I.locationSize*yt*Ke,at)}}else if(_e!==void 0){let oe=_e[Re];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(I.location,oe);break;case 3:i.vertexAttrib3fv(I.location,oe);break;case 4:i.vertexAttrib4fv(I.location,oe);break;default:i.vertexAttrib1fv(I.location,oe)}}}}F()}function S(){ae();for(let k in a){let J=a[k];for(let ie in J){let xe=J[ie];for(let ue in xe)y(xe[ue].object),delete xe[ue];delete J[ie]}delete a[k]}}function C(k){if(a[k.id]===void 0)return;let J=a[k.id];for(let ie in J){let xe=J[ie];for(let ue in xe)y(xe[ue].object),delete xe[ue];delete J[ie]}delete a[k.id]}function O(k){for(let J in a){let ie=a[J];if(ie[k.id]===void 0)continue;let xe=ie[k.id];for(let ue in xe)y(xe[ue].object),delete xe[ue];delete ie[k.id]}}function ae(){Ae(),h=!0,l!==c&&(l=c,x(l.object))}function Ae(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:ae,resetDefaultState:Ae,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:O,initAttributes:M,enableAttribute:H,disableUnusedAttributes:F}}function Jg(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,p){if(p===0)return;let x,y;if(s)x=i,y="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](r,h,u,p),t.update(u,r,p)}function l(h,u,p){if(p===0)return;let x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<p;y++)this.render(h[y],u[y]);else{x.multiDrawArraysWEBGL(r,h,0,u,0,p);let y=0;for(let v=0;v<p;v++)y+=u[v];t.update(y,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Kg(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),L=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,H=o||e.has("OES_texture_float"),P=M&&H,F=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:L,vertexTextures:M,floatFragmentTextures:H,floatVertexTextures:P,maxSamples:F}}function $g(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Gi,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let x=u.length!==0||p||n!==0||s;return s=p,n=u.length,x},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,x){let y=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,d=i.get(u);if(!s||y===null||y.length===0||r&&!g)r?h(null):l();else{let L=r?0:n,M=L*4,H=d.clippingState||null;c.value=H,H=h(y,p,M,x);for(let P=0;P!==M;++P)H[P]=t[P];d.clippingState=H,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=L}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,x,y){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=c.value,y!==!0||g===null){let d=x+v*4,L=p.matrixWorldInverse;a.getNormalMatrix(L),(g===null||g.length<d)&&(g=new Float32Array(d));for(let M=0,H=x;M!==v;++M,H+=4)o.copy(u[M]).applyMatrix4(L,a),o.normal.toArray(g,H),g[H+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function jg(i){let e=new WeakMap;function t(o,a){return a===Pc?o.mapping=Aa:a===Lc&&(o.mapping=Ra),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Pc||a===Lc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Hc(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ia=class extends gl{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ea=4,Ru=[.125,.215,.35,.446,.526,.582],Pr=20,xc=new Ia,Cu=new De,_c=null,vc=0,yc=0,Rr=(1+Math.sqrt(5))/2,ga=1/Rr,Pu=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Rr,ga),new U(0,Rr,-ga),new U(ga,0,Rr),new U(-ga,0,Rr),new U(Rr,ga,0),new U(-Rr,ga,0)],_l=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,vc,yc),e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Aa||e.mapping===Ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:Xi,format:Mi,colorSpace:Us,depthBuffer:!1},s=Lu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qg(r)),this._blurMaterial=e0(r,e,t)}return s}_compileMaterial(e){let t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,xc)}_sceneToCubeUV(e,t,n,s){let a=new qn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Cu),h.toneMapping=tr,h.autoClear=!1;let x=new Ut({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),y=new vt(new Ns,x),v=!1,g=e.background;g?g.isColor&&(x.color.copy(g),e.background=null,v=!0):(x.color.copy(Cu),v=!0);for(let d=0;d<6;d++){let L=d%3;L===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):L===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let M=this._cubeSize;Jo(s,L*M,d>2?M:0,M,M),h.setRenderTarget(s),v&&h.render(y,a),h.render(e,a)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Aa||e.mapping===Ra;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Jo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,xc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Pu[(s-1)%Pu.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new vt(this._lodPlanes[s],l),p=l.uniforms,x=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*x):2*Math.PI/(2*Pr-1),v=r/y,g=isFinite(r)?1+Math.floor(h*v):Pr;g>Pr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Pr}`);let d=[],L=0;for(let N=0;N<Pr;++N){let le=N/v,S=Math.exp(-le*le/2);d.push(S),N===0?L+=S:N<g&&(L+=2*S)}for(let N=0;N<d.length;N++)d[N]=d[N]/L;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:M}=this;p.dTheta.value=y,p.mipInt.value=M-n;let H=this._sizeLods[s],P=3*H*(s>M-Ea?s-M+Ea:0),F=4*(this._cubeSize-H);Jo(t,P,F,3*H,2*H),c.setRenderTarget(t),c.render(u,xc)}};function Qg(i){let e=[],t=[],n=[],s=i,r=i-Ea+1+Ru.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Ea?c=Ru[o-i+Ea-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],x=6,y=6,v=3,g=2,d=1,L=new Float32Array(v*y*x),M=new Float32Array(g*y*x),H=new Float32Array(d*y*x);for(let F=0;F<x;F++){let N=F%3*2/3-1,le=F>2?0:-1,S=[N,le,0,N+2/3,le,0,N+2/3,le+1,0,N,le,0,N+2/3,le+1,0,N,le+1,0];L.set(S,v*y*F),M.set(p,g*y*F);let C=[F,F,F,F,F,F];H.set(C,d*y*F)}let P=new bi;P.setAttribute("position",new ui(L,v)),P.setAttribute("uv",new ui(M,g)),P.setAttribute("faceIndex",new ui(H,d)),e.push(P),s>Ea&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lu(i,e,t){let n=new si(i,e,t);return n.texture.mapping=Ll,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function e0(i,e,t){let n=new Float32Array(Pr),s=new U(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function Iu(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function Uu(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function Mh(){return`

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
	`}function t0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Pc||c===Lc,h=c===Aa||c===Ra;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new _l(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new _l(i));let p=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function n0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function i0(i,e,t,n){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&e.remove(p.index);for(let y in p.attributes)e.remove(p.attributes[y]);for(let y in p.morphAttributes){let v=p.morphAttributes[y];for(let g=0,d=v.length;g<d;g++)e.remove(v[g])}p.removeEventListener("dispose",o),delete s[p.id];let x=r.get(p);x&&(e.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function c(u){let p=u.attributes;for(let y in p)e.update(p[y],i.ARRAY_BUFFER);let x=u.morphAttributes;for(let y in x){let v=x[y];for(let g=0,d=v.length;g<d;g++)e.update(v[g],i.ARRAY_BUFFER)}}function l(u){let p=[],x=u.index,y=u.attributes.position,v=0;if(x!==null){let L=x.array;v=x.version;for(let M=0,H=L.length;M<H;M+=3){let P=L[M+0],F=L[M+1],N=L[M+2];p.push(P,F,F,N,N,P)}}else if(y!==void 0){let L=y.array;v=y.version;for(let M=0,H=L.length/3-1;M<H;M+=3){let P=M+0,F=M+1,N=M+2;p.push(P,F,F,N,N,P)}}else return;let g=new(_f(p)?ml:pl)(p,1);g.version=v;let d=r.get(u);d&&e.remove(d),r.set(u,g)}function h(u){let p=r.get(u);if(p){let x=u.index;x!==null&&p.version<x.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function s0(i,e,t,n){let s=n.isWebGL2,r;function o(x){r=x}let a,c;function l(x){a=x.type,c=x.bytesPerElement}function h(x,y){i.drawElements(r,y,a,x*c),t.update(y,r,1)}function u(x,y,v){if(v===0)return;let g,d;if(s)g=i,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](r,y,a,x*c,v),t.update(y,r,v)}function p(x,y,v){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<v;d++)this.render(x[d]/c,y[d]);else{g.multiDrawElementsWEBGL(r,y,0,a,x,0,v);let d=0;for(let L=0;L<v;L++)d+=y[L];t.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=p}function r0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function a0(i,e){return i[0]-e[0]}function o0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function l0(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new nn,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let p=l.morphTargetInfluences;if(e.isWebGL2===!0){let x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=x!==void 0?x.length:0,v=r.get(h);if(v===void 0||v.count!==y){let k=function(){ae.dispose(),r.delete(h),h.removeEventListener("dispose",k)};v!==void 0&&v.texture.dispose();let L=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,H=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],N=h.morphAttributes.color||[],le=0;L===!0&&(le=1),M===!0&&(le=2),H===!0&&(le=3);let S=h.attributes.position.count*le,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let O=new Float32Array(S*C*4*y),ae=new dl(O,S,C,y);ae.type=er,ae.needsUpdate=!0;let Ae=le*4;for(let J=0;J<y;J++){let ie=P[J],xe=F[J],ue=N[J],re=S*C*4*J;for(let _e=0;_e<ie.count;_e++){let Re=_e*Ae;L===!0&&(o.fromBufferAttribute(ie,_e),O[re+Re+0]=o.x,O[re+Re+1]=o.y,O[re+Re+2]=o.z,O[re+Re+3]=0),M===!0&&(o.fromBufferAttribute(xe,_e),O[re+Re+4]=o.x,O[re+Re+5]=o.y,O[re+Re+6]=o.z,O[re+Re+7]=0),H===!0&&(o.fromBufferAttribute(ue,_e),O[re+Re+8]=o.x,O[re+Re+9]=o.y,O[re+Re+10]=o.z,O[re+Re+11]=ue.itemSize===4?o.w:1)}}v={count:y,texture:ae,size:new Ye(S,C)},r.set(h,v),h.addEventListener("dispose",k)}let g=0;for(let L=0;L<p.length;L++)g+=p[L];let d=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",p),u.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let x=p===void 0?0:p.length,y=n[h.id];if(y===void 0||y.length!==x){y=[];for(let M=0;M<x;M++)y[M]=[M,0];n[h.id]=y}for(let M=0;M<x;M++){let H=y[M];H[0]=M,H[1]=p[M]}y.sort(o0);for(let M=0;M<8;M++)M<x&&y[M][1]?(a[M][0]=y[M][0],a[M][1]=y[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(a0);let v=h.morphAttributes.position,g=h.morphAttributes.normal,d=0;for(let M=0;M<8;M++){let H=a[M],P=H[0],F=H[1];P!==Number.MAX_SAFE_INTEGER&&F?(v&&h.getAttribute("morphTarget"+M)!==v[P]&&h.setAttribute("morphTarget"+M,v[P]),g&&h.getAttribute("morphNormal"+M)!==g[P]&&h.setAttribute("morphNormal"+M,g[P]),s[M]=F,d+=F):(v&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),g&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),s[M]=0)}let L=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",L),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function c0(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var vl=class extends Si{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Ur,h!==Ur&&h!==Ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ur&&(n=Qs),n===void 0&&h===Ca&&(n=Ir),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pn,this.minFilter=c!==void 0?c:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ef=new Si,Sf=new vl(1,1);Sf.compareFunction=gf;var bf=new dl,wf=new zc,Tf=new xl,Du=[],Nu=[],Ou=new Float32Array(16),Fu=new Float32Array(9),zu=new Float32Array(4);function Da(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Du[s];if(r===void 0&&(r=new Float32Array(s),Du[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ln(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function In(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ul(i,e){let t=Nu[e];t===void 0&&(t=new Int32Array(e),Nu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function h0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function u0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;i.uniform2fv(this.addr,e),In(t,e)}}function f0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ln(t,e))return;i.uniform3fv(this.addr,e),In(t,e)}}function d0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;i.uniform4fv(this.addr,e),In(t,e)}}function p0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ln(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),In(t,e)}else{if(Ln(t,n))return;zu.set(n),i.uniformMatrix2fv(this.addr,!1,zu),In(t,n)}}function m0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ln(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),In(t,e)}else{if(Ln(t,n))return;Fu.set(n),i.uniformMatrix3fv(this.addr,!1,Fu),In(t,n)}}function g0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ln(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),In(t,e)}else{if(Ln(t,n))return;Ou.set(n),i.uniformMatrix4fv(this.addr,!1,Ou),In(t,n)}}function x0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;i.uniform2iv(this.addr,e),In(t,e)}}function v0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ln(t,e))return;i.uniform3iv(this.addr,e),In(t,e)}}function y0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;i.uniform4iv(this.addr,e),In(t,e)}}function M0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function E0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;i.uniform2uiv(this.addr,e),In(t,e)}}function S0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ln(t,e))return;i.uniform3uiv(this.addr,e),In(t,e)}}function b0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;i.uniform4uiv(this.addr,e),In(t,e)}}function w0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Sf:Ef;t.setTexture2D(e||r,s)}function T0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wf,s)}function A0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Tf,s)}function R0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bf,s)}function C0(i){switch(i){case 5126:return h0;case 35664:return u0;case 35665:return f0;case 35666:return d0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return x0;case 35667:case 35671:return _0;case 35668:case 35672:return v0;case 35669:case 35673:return y0;case 5125:return M0;case 36294:return E0;case 36295:return S0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return R0}}function P0(i,e){i.uniform1fv(this.addr,e)}function L0(i,e){let t=Da(e,this.size,2);i.uniform2fv(this.addr,t)}function I0(i,e){let t=Da(e,this.size,3);i.uniform3fv(this.addr,t)}function U0(i,e){let t=Da(e,this.size,4);i.uniform4fv(this.addr,t)}function D0(i,e){let t=Da(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function N0(i,e){let t=Da(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function O0(i,e){let t=Da(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function F0(i,e){i.uniform1iv(this.addr,e)}function z0(i,e){i.uniform2iv(this.addr,e)}function B0(i,e){i.uniform3iv(this.addr,e)}function H0(i,e){i.uniform4iv(this.addr,e)}function k0(i,e){i.uniform1uiv(this.addr,e)}function V0(i,e){i.uniform2uiv(this.addr,e)}function G0(i,e){i.uniform3uiv(this.addr,e)}function W0(i,e){i.uniform4uiv(this.addr,e)}function X0(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);Ln(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ef,r[o])}function q0(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);Ln(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||wf,r[o])}function Y0(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);Ln(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Tf,r[o])}function Z0(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);Ln(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||bf,r[o])}function J0(i){switch(i){case 5126:return P0;case 35664:return L0;case 35665:return I0;case 35666:return U0;case 35674:return D0;case 35675:return N0;case 35676:return O0;case 5124:case 35670:return F0;case 35667:case 35671:return z0;case 35668:case 35672:return B0;case 35669:case 35673:return H0;case 5125:return k0;case 36294:return V0;case 36295:return G0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return Z0}}var kc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=C0(t.type)}},Vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J0(t.type)}},Gc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Mc=/(\w+)(\])?(\[|\.)?/g;function Bu(i,e){i.seq.push(e),i.map[e.id]=e}function K0(i,e,t){let n=i.name,s=n.length;for(Mc.lastIndex=0;;){let r=Mc.exec(n),o=Mc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Bu(t,l===void 0?new kc(a,i,e):new Vc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Gc(a),Bu(t,u)),t=u}}}var Ta=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);K0(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Hu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var $0=37297,j0=0;function Q0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function ex(i){let e=en.getPrimaries(en.workingColorSpace),t=en.getPrimaries(i),n;switch(e===t?n="":e===ol&&t===al?n="LinearDisplayP3ToLinearSRGB":e===al&&t===ol&&(n="LinearSRGBToLinearDisplayP3"),i){case Us:case Il:return[n,"LinearTransferOETF"];case Kt:case vh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ku(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Q0(i.getShaderSource(e),o)}else return s}function tx(i,e){let t=ex(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function nx(i,e){let t;switch(e){case ph:t="Linear";break;case mh:t="Reinhard";break;case gh:t="OptimizedCineon";break;case vo:t="ACESFilmic";break;case xh:t="AgX";break;case dd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ix(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sa).join(`
`)}function sx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Sa).join(`
`)}function rx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ax(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Sa(i){return i!==""}function Vu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(i){return i.replace(ox,cx)}var lx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cx(i,e){let t=Nt[e];if(t===void 0){let n=lx.get(e);if(n!==void 0)t=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wc(t)}var hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wu(i){return i.replace(hx,ux)}function ux(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ps&&(e="SHADOWMAP_TYPE_VSM"),e}function dx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Aa:case Ra:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function px(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ra:e="ENVMAP_MODE_REFRACTION";break}return e}function mx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dh:e="ENVMAP_BLENDING_MULTIPLY";break;case ud:e="ENVMAP_BLENDING_MIX";break;case fd:e="ENVMAP_BLENDING_ADD";break}return e}function gx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function xx(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=fx(t),l=dx(t),h=px(t),u=mx(t),p=gx(t),x=t.isWebGL2?"":ix(t),y=sx(t),v=rx(r),g=s.createProgram(),d,L,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Sa).join(`
`),d.length>0&&(d+=`
`),L=[x,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Sa).join(`
`),L.length>0&&(L+=`
`)):(d=[Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),L=[x,Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?Nt.tonemapping_pars_fragment:"",t.toneMapping!==tr?nx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,tx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sa).join(`
`)),o=Wc(o),o=Vu(o,t),o=Gu(o,t),a=Wc(a),a=Vu(a,t),a=Gu(a,t),o=Wu(o),a=Wu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,L=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+L);let H=M+d+o,P=M+L+a,F=Hu(s,s.VERTEX_SHADER,H),N=Hu(s,s.FRAGMENT_SHADER,P);s.attachShader(g,F),s.attachShader(g,N),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function le(ae){if(i.debug.checkShaderErrors){let Ae=s.getProgramInfoLog(g).trim(),k=s.getShaderInfoLog(F).trim(),J=s.getShaderInfoLog(N).trim(),ie=!0,xe=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,F,N);else{let ue=ku(s,F,"vertex"),re=ku(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+Ae+`
`+ue+`
`+re)}else Ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Ae):(k===""||J==="")&&(xe=!1);xe&&(ae.diagnostics={runnable:ie,programLog:Ae,vertexShader:{log:k,prefix:d},fragmentShader:{log:J,prefix:L}})}s.deleteShader(F),s.deleteShader(N),S=new Ta(s,g),C=ax(s,g)}let S;this.getUniforms=function(){return S===void 0&&le(this),S};let C;this.getAttributes=function(){return C===void 0&&le(this),C};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(g,$0)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=F,this.fragmentShader=N,this}var _x=0,Xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qc(e),t.set(e,n)),n}},qc=class{constructor(e){this.id=_x++,this.code=e,this.usedTimes=0}};function vx(i,e,t,n,s,r,o){let a=new co,c=new Xc,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,p=s.vertexTextures,x=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function g(S,C,O,ae,Ae){let k=ae.fog,J=Ae.geometry,ie=S.isMeshStandardMaterial?ae.environment:null,xe=(S.isMeshStandardMaterial?t:e).get(S.envMap||ie),ue=xe&&xe.mapping===Ll?xe.image.height:null,re=y[S.type];S.precision!==null&&(x=s.getMaxPrecision(S.precision),x!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",x,"instead."));let _e=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Re=_e!==void 0?_e.length:0,I=0;J.morphAttributes.position!==void 0&&(I=1),J.morphAttributes.normal!==void 0&&(I=2),J.morphAttributes.color!==void 0&&(I=3);let W,oe,Pe,ge;if(re){let cn=rs[re];W=cn.vertexShader,oe=cn.fragmentShader}else W=S.vertexShader,oe=S.fragmentShader,c.update(S),Pe=c.getVertexShaderID(S),ge=c.getFragmentShaderID(S);let He=i.getRenderTarget(),lt=Ae.isInstancedMesh===!0,Ke=Ae.isBatchedMesh===!0,at=!!S.map,yt=!!S.matcap,$=!!xe,Wt=!!S.aoMap,tt=!!S.lightMap,rt=!!S.bumpMap,Fe=!!S.normalMap,Vt=!!S.displacementMap,_t=!!S.emissiveMap,R=!!S.metalnessMap,E=!!S.roughnessMap,Q=S.anisotropy>0,we=S.clearcoat>0,ve=S.iridescence>0,Se=S.sheen>0,Ge=S.transmission>0,Ue=Q&&!!S.anisotropyMap,Ne=we&&!!S.clearcoatMap,Xe=we&&!!S.clearcoatNormalMap,nt=we&&!!S.clearcoatRoughnessMap,pe=ve&&!!S.iridescenceMap,Ct=ve&&!!S.iridescenceThicknessMap,D=Se&&!!S.sheenColorMap,Ee=Se&&!!S.sheenRoughnessMap,Te=!!S.specularMap,be=!!S.specularColorMap,ke=!!S.specularIntensityMap,Mt=Ge&&!!S.transmissionMap,dt=Ge&&!!S.thicknessMap,pt=!!S.gradientMap,fe=!!S.alphaMap,G=S.alphaTest>0,Ie=!!S.alphaHash,he=!!S.extensions,qe=!!J.attributes.uv1,Ze=!!J.attributes.uv2,Et=!!J.attributes.uv3,ut=tr;return S.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(ut=i.toneMapping),{isWebGL2:h,shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:W,fragmentShader:oe,defines:S.defines,customVertexShaderID:Pe,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:x,batching:Ke,instancing:lt,instancingColor:lt&&Ae.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:He===null?i.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:Us,map:at,matcap:yt,envMap:$,envMapMode:$&&xe.mapping,envMapCubeUVHeight:ue,aoMap:Wt,lightMap:tt,bumpMap:rt,normalMap:Fe,displacementMap:p&&Vt,emissiveMap:_t,normalMapObjectSpace:Fe&&S.normalMapType===wd,normalMapTangentSpace:Fe&&S.normalMapType===mf,metalnessMap:R,roughnessMap:E,anisotropy:Q,anisotropyMap:Ue,clearcoat:we,clearcoatMap:Ne,clearcoatNormalMap:Xe,clearcoatRoughnessMap:nt,iridescence:ve,iridescenceMap:pe,iridescenceThicknessMap:Ct,sheen:Se,sheenColorMap:D,sheenRoughnessMap:Ee,specularMap:Te,specularColorMap:be,specularIntensityMap:ke,transmission:Ge,transmissionMap:Mt,thicknessMap:dt,gradientMap:pt,opaque:S.transparent===!1&&S.blending===ba,alphaMap:fe,alphaTest:G,alphaHash:Ie,combine:S.combine,mapUv:at&&v(S.map.channel),aoMapUv:Wt&&v(S.aoMap.channel),lightMapUv:tt&&v(S.lightMap.channel),bumpMapUv:rt&&v(S.bumpMap.channel),normalMapUv:Fe&&v(S.normalMap.channel),displacementMapUv:Vt&&v(S.displacementMap.channel),emissiveMapUv:_t&&v(S.emissiveMap.channel),metalnessMapUv:R&&v(S.metalnessMap.channel),roughnessMapUv:E&&v(S.roughnessMap.channel),anisotropyMapUv:Ue&&v(S.anisotropyMap.channel),clearcoatMapUv:Ne&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:D&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&v(S.sheenRoughnessMap.channel),specularMapUv:Te&&v(S.specularMap.channel),specularColorMapUv:be&&v(S.specularColorMap.channel),specularIntensityMapUv:ke&&v(S.specularIntensityMap.channel),transmissionMapUv:Mt&&v(S.transmissionMap.channel),thicknessMapUv:dt&&v(S.thicknessMap.channel),alphaMapUv:fe&&v(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Fe||Q),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUv1s:qe,vertexUv2s:Ze,vertexUv3s:Et,pointsUvs:Ae.isPoints===!0&&!!J.attributes.uv&&(at||fe),fog:!!k,useFog:S.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Ae.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:I,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ut,useLegacyLights:i._useLegacyLights,decodeVideoTexture:at&&S.map.isVideoTexture===!0&&en.getTransfer(S.map.colorSpace)===on,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Yn,flipSided:S.side===Zn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:he&&S.extensions.derivatives===!0,extensionFragDepth:he&&S.extensions.fragDepth===!0,extensionDrawBuffers:he&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){let C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(let O in S.defines)C.push(O),C.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(L(C,S),M(C,S),C.push(i.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function L(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function M(S,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),S.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function H(S){let C=y[S.type],O;if(C){let ae=rs[C];O=ar.clone(ae.uniforms)}else O=S.uniforms;return O}function P(S,C){let O;for(let ae=0,Ae=l.length;ae<Ae;ae++){let k=l[ae];if(k.cacheKey===C){O=k,++O.usedTimes;break}}return O===void 0&&(O=new xx(i,C,S,r),l.push(O)),O}function F(S){if(--S.usedTimes===0){let C=l.indexOf(S);l[C]=l[l.length-1],l.pop(),S.destroy()}}function N(S){c.remove(S)}function le(){c.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:H,acquireProgram:P,releaseProgram:F,releaseShaderCache:N,programs:l,dispose:le}}function yx(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Mx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function qu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,p,x,y,v,g){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:p,material:x,groupOrder:y,renderOrder:u.renderOrder,z:v,group:g},i[e]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=x,d.groupOrder=y,d.renderOrder=u.renderOrder,d.z=v,d.group=g),e++,d}function a(u,p,x,y,v,g){let d=o(u,p,x,y,v,g);x.transmission>0?n.push(d):x.transparent===!0?s.push(d):t.push(d)}function c(u,p,x,y,v,g){let d=o(u,p,x,y,v,g);x.transmission>0?n.unshift(d):x.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,p){t.length>1&&t.sort(u||Mx),n.length>1&&n.sort(p||qu),s.length>1&&s.sort(p||qu)}function h(){for(let u=e,p=i.length;u<p;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Ex(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Yu,i.set(n,[o])):s>=r.length?(o=new Yu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new De};break;case"SpotLight":t={position:new U,direction:new U,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function bx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var wx=0;function Tx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ax(i,e){let t=new Sx,n=bx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,o=new zt,a=new zt;function c(h,u){let p=0,x=0,y=0;for(let ae=0;ae<9;ae++)s.probe[ae].set(0,0,0);let v=0,g=0,d=0,L=0,M=0,H=0,P=0,F=0,N=0,le=0,S=0;h.sort(Tx);let C=u===!0?Math.PI:1;for(let ae=0,Ae=h.length;ae<Ae;ae++){let k=h[ae],J=k.color,ie=k.intensity,xe=k.distance,ue=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)p+=J.r*ie*C,x+=J.g*ie*C,y+=J.b*ie*C;else if(k.isLightProbe){for(let re=0;re<9;re++)s.probe[re].addScaledVector(k.sh.coefficients[re],ie);S++}else if(k.isDirectionalLight){let re=t.get(k);if(re.color.copy(k.color).multiplyScalar(k.intensity*C),k.castShadow){let _e=k.shadow,Re=n.get(k);Re.shadowBias=_e.bias,Re.shadowNormalBias=_e.normalBias,Re.shadowRadius=_e.radius,Re.shadowMapSize=_e.mapSize,s.directionalShadow[v]=Re,s.directionalShadowMap[v]=ue,s.directionalShadowMatrix[v]=k.shadow.matrix,H++}s.directional[v]=re,v++}else if(k.isSpotLight){let re=t.get(k);re.position.setFromMatrixPosition(k.matrixWorld),re.color.copy(J).multiplyScalar(ie*C),re.distance=xe,re.coneCos=Math.cos(k.angle),re.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),re.decay=k.decay,s.spot[d]=re;let _e=k.shadow;if(k.map&&(s.spotLightMap[N]=k.map,N++,_e.updateMatrices(k),k.castShadow&&le++),s.spotLightMatrix[d]=_e.matrix,k.castShadow){let Re=n.get(k);Re.shadowBias=_e.bias,Re.shadowNormalBias=_e.normalBias,Re.shadowRadius=_e.radius,Re.shadowMapSize=_e.mapSize,s.spotShadow[d]=Re,s.spotShadowMap[d]=ue,F++}d++}else if(k.isRectAreaLight){let re=t.get(k);re.color.copy(J).multiplyScalar(ie),re.halfWidth.set(k.width*.5,0,0),re.halfHeight.set(0,k.height*.5,0),s.rectArea[L]=re,L++}else if(k.isPointLight){let re=t.get(k);if(re.color.copy(k.color).multiplyScalar(k.intensity*C),re.distance=k.distance,re.decay=k.decay,k.castShadow){let _e=k.shadow,Re=n.get(k);Re.shadowBias=_e.bias,Re.shadowNormalBias=_e.normalBias,Re.shadowRadius=_e.radius,Re.shadowMapSize=_e.mapSize,Re.shadowCameraNear=_e.camera.near,Re.shadowCameraFar=_e.camera.far,s.pointShadow[g]=Re,s.pointShadowMap[g]=ue,s.pointShadowMatrix[g]=k.shadow.matrix,P++}s.point[g]=re,g++}else if(k.isHemisphereLight){let re=t.get(k);re.skyColor.copy(k.color).multiplyScalar(ie*C),re.groundColor.copy(k.groundColor).multiplyScalar(ie*C),s.hemi[M]=re,M++}}L>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=x,s.ambient[2]=y;let O=s.hash;(O.directionalLength!==v||O.pointLength!==g||O.spotLength!==d||O.rectAreaLength!==L||O.hemiLength!==M||O.numDirectionalShadows!==H||O.numPointShadows!==P||O.numSpotShadows!==F||O.numSpotMaps!==N||O.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=d,s.rectArea.length=L,s.point.length=g,s.hemi.length=M,s.directionalShadow.length=H,s.directionalShadowMap.length=H,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=F,s.spotShadowMap.length=F,s.directionalShadowMatrix.length=H,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=F+N-le,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=le,s.numLightProbes=S,O.directionalLength=v,O.pointLength=g,O.spotLength=d,O.rectAreaLength=L,O.hemiLength=M,O.numDirectionalShadows=H,O.numPointShadows=P,O.numSpotShadows=F,O.numSpotMaps=N,O.numLightProbes=S,s.version=wx++)}function l(h,u){let p=0,x=0,y=0,v=0,g=0,d=u.matrixWorldInverse;for(let L=0,M=h.length;L<M;L++){let H=h[L];if(H.isDirectionalLight){let P=s.directional[p];P.direction.setFromMatrixPosition(H.matrixWorld),r.setFromMatrixPosition(H.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),p++}else if(H.isSpotLight){let P=s.spot[y];P.position.setFromMatrixPosition(H.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(H.matrixWorld),r.setFromMatrixPosition(H.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),y++}else if(H.isRectAreaLight){let P=s.rectArea[v];P.position.setFromMatrixPosition(H.matrixWorld),P.position.applyMatrix4(d),a.identity(),o.copy(H.matrixWorld),o.premultiply(d),a.extractRotation(o),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),v++}else if(H.isPointLight){let P=s.point[x];P.position.setFromMatrixPosition(H.matrixWorld),P.position.applyMatrix4(d),x++}else if(H.isHemisphereLight){let P=s.hemi[g];P.direction.setFromMatrixPosition(H.matrixWorld),P.direction.transformDirection(d),g++}}}return{setup:c,setupView:l,state:s}}function Zu(i,e){let t=new Ax(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Rx(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new Zu(i,e),t.set(r,[c])):o>=a.length?(c=new Zu(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var Yc=class extends sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zc=class extends sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Px=`uniform sampler2D shadow_pass;
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
}`;function Lx(i,e,t){let n=new ho,s=new Ye,r=new Ye,o=new nn,a=new Yc({depthPacking:bd}),c=new Zc,l={},h=t.maxTextureSize,u={[ir]:Zn,[Zn]:ir,[Yn]:Yn},p=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:Cx,fragmentShader:Px}),x=p.clone();x.defines.HORIZONTAL_PASS=1;let y=new bi;y.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new vt(y,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rf;let d=this.type;this.render=function(F,N,le){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||F.length===0)return;let S=i.getRenderTarget(),C=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),ae=i.state;ae.setBlending(os),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);let Ae=d!==Ps&&this.type===Ps,k=d===Ps&&this.type!==Ps;for(let J=0,ie=F.length;J<ie;J++){let xe=F[J],ue=xe.shadow;if(ue===void 0){console.warn("THREE.WebGLShadowMap:",xe,"has no shadow.");continue}if(ue.autoUpdate===!1&&ue.needsUpdate===!1)continue;s.copy(ue.mapSize);let re=ue.getFrameExtents();if(s.multiply(re),r.copy(ue.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,ue.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,ue.mapSize.y=r.y)),ue.map===null||Ae===!0||k===!0){let Re=this.type!==Ps?{minFilter:Pn,magFilter:Pn}:{};ue.map!==null&&ue.map.dispose(),ue.map=new si(s.x,s.y,Re),ue.map.texture.name=xe.name+".shadowMap",ue.camera.updateProjectionMatrix()}i.setRenderTarget(ue.map),i.clear();let _e=ue.getViewportCount();for(let Re=0;Re<_e;Re++){let I=ue.getViewport(Re);o.set(r.x*I.x,r.y*I.y,r.x*I.z,r.y*I.w),ae.viewport(o),ue.updateMatrices(xe,Re),n=ue.getFrustum(),H(N,le,ue.camera,xe,this.type)}ue.isPointLightShadow!==!0&&this.type===Ps&&L(ue,le),ue.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(S,C,O)};function L(F,N){let le=e.update(v);p.defines.VSM_SAMPLES!==F.blurSamples&&(p.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,p.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new si(s.x,s.y)),p.uniforms.shadow_pass.value=F.map.texture,p.uniforms.resolution.value=F.mapSize,p.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(N,null,le,p,v,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(N,null,le,x,v,null)}function M(F,N,le,S){let C=null,O=le.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(O!==void 0)C=O;else if(C=le.isPointLight===!0?c:a,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let ae=C.uuid,Ae=N.uuid,k=l[ae];k===void 0&&(k={},l[ae]=k);let J=k[Ae];J===void 0&&(J=C.clone(),k[Ae]=J,N.addEventListener("dispose",P)),C=J}if(C.visible=N.visible,C.wireframe=N.wireframe,S===Ps?C.side=N.shadowSide!==null?N.shadowSide:N.side:C.side=N.shadowSide!==null?N.shadowSide:u[N.side],C.alphaMap=N.alphaMap,C.alphaTest=N.alphaTest,C.map=N.map,C.clipShadows=N.clipShadows,C.clippingPlanes=N.clippingPlanes,C.clipIntersection=N.clipIntersection,C.displacementMap=N.displacementMap,C.displacementScale=N.displacementScale,C.displacementBias=N.displacementBias,C.wireframeLinewidth=N.wireframeLinewidth,C.linewidth=N.linewidth,le.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let ae=i.properties.get(C);ae.light=le}return C}function H(F,N,le,S,C){if(F.visible===!1)return;if(F.layers.test(N.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===Ps)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,F.matrixWorld);let Ae=e.update(F),k=F.material;if(Array.isArray(k)){let J=Ae.groups;for(let ie=0,xe=J.length;ie<xe;ie++){let ue=J[ie],re=k[ue.materialIndex];if(re&&re.visible){let _e=M(F,re,S,C);F.onBeforeShadow(i,F,N,le,Ae,_e,ue),i.renderBufferDirect(le,null,Ae,_e,F,ue),F.onAfterShadow(i,F,N,le,Ae,_e,ue)}}}else if(k.visible){let J=M(F,k,S,C);F.onBeforeShadow(i,F,N,le,Ae,J,null),i.renderBufferDirect(le,null,Ae,J,F,null),F.onAfterShadow(i,F,N,le,Ae,J,null)}}let ae=F.children;for(let Ae=0,k=ae.length;Ae<k;Ae++)H(ae[Ae],N,le,S,C)}function P(F){F.target.removeEventListener("dispose",P);for(let le in l){let S=l[le],C=F.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}function Ix(i,e,t){let n=t.isWebGL2;function s(){let G=!1,Ie=new nn,he=null,qe=new nn(0,0,0,0);return{setMask:function(Ze){he!==Ze&&!G&&(i.colorMask(Ze,Ze,Ze,Ze),he=Ze)},setLocked:function(Ze){G=Ze},setClear:function(Ze,Et,ut,Gt,cn){cn===!0&&(Ze*=Gt,Et*=Gt,ut*=Gt),Ie.set(Ze,Et,ut,Gt),qe.equals(Ie)===!1&&(i.clearColor(Ze,Et,ut,Gt),qe.copy(Ie))},reset:function(){G=!1,he=null,qe.set(-1,0,0,0)}}}function r(){let G=!1,Ie=null,he=null,qe=null;return{setTest:function(Ze){Ze?Ke(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(Ze){Ie!==Ze&&!G&&(i.depthMask(Ze),Ie=Ze)},setFunc:function(Ze){if(he!==Ze){switch(Ze){case sd:i.depthFunc(i.NEVER);break;case rd:i.depthFunc(i.ALWAYS);break;case ad:i.depthFunc(i.LESS);break;case nl:i.depthFunc(i.LEQUAL);break;case od:i.depthFunc(i.EQUAL);break;case ld:i.depthFunc(i.GEQUAL);break;case cd:i.depthFunc(i.GREATER);break;case hd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=Ze}},setLocked:function(Ze){G=Ze},setClear:function(Ze){qe!==Ze&&(i.clearDepth(Ze),qe=Ze)},reset:function(){G=!1,Ie=null,he=null,qe=null}}}function o(){let G=!1,Ie=null,he=null,qe=null,Ze=null,Et=null,ut=null,Gt=null,cn=null;return{setTest:function(K){G||(K?Ke(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(K){Ie!==K&&!G&&(i.stencilMask(K),Ie=K)},setFunc:function(K,de,me){(he!==K||qe!==de||Ze!==me)&&(i.stencilFunc(K,de,me),he=K,qe=de,Ze=me)},setOp:function(K,de,me){(Et!==K||ut!==de||Gt!==me)&&(i.stencilOp(K,de,me),Et=K,ut=de,Gt=me)},setLocked:function(K){G=K},setClear:function(K){cn!==K&&(i.clearStencil(K),cn=K)},reset:function(){G=!1,Ie=null,he=null,qe=null,Ze=null,Et=null,ut=null,Gt=null,cn=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,p={},x={},y=new WeakMap,v=[],g=null,d=!1,L=null,M=null,H=null,P=null,F=null,N=null,le=null,S=new De(0,0,0),C=0,O=!1,ae=null,Ae=null,k=null,J=null,ie=null,xe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ue=!1,re=0,_e=i.getParameter(i.VERSION);_e.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(_e)[1]),ue=re>=1):_e.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),ue=re>=2);let Re=null,I={},W=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),Pe=new nn().fromArray(W),ge=new nn().fromArray(oe);function He(G,Ie,he,qe){let Ze=new Uint8Array(4),Et=i.createTexture();i.bindTexture(G,Et),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ut=0;ut<he;ut++)n&&(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ie,0,i.RGBA,1,1,qe,0,i.RGBA,i.UNSIGNED_BYTE,Ze):i.texImage2D(Ie+ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ze);return Et}let lt={};lt[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(lt[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ke(i.DEPTH_TEST),c.setFunc(nl),_t(!1),R(Ch),Ke(i.CULL_FACE),Fe(os);function Ke(G){p[G]!==!0&&(i.enable(G),p[G]=!0)}function at(G){p[G]!==!1&&(i.disable(G),p[G]=!1)}function yt(G,Ie){return x[G]!==Ie?(i.bindFramebuffer(G,Ie),x[G]=Ie,n&&(G===i.DRAW_FRAMEBUFFER&&(x[i.FRAMEBUFFER]=Ie),G===i.FRAMEBUFFER&&(x[i.DRAW_FRAMEBUFFER]=Ie)),!0):!1}function $(G,Ie){let he=v,qe=!1;if(G)if(he=y.get(Ie),he===void 0&&(he=[],y.set(Ie,he)),G.isWebGLMultipleRenderTargets){let Ze=G.texture;if(he.length!==Ze.length||he[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,ut=Ze.length;Et<ut;Et++)he[Et]=i.COLOR_ATTACHMENT0+Et;he.length=Ze.length,qe=!0}}else he[0]!==i.COLOR_ATTACHMENT0&&(he[0]=i.COLOR_ATTACHMENT0,qe=!0);else he[0]!==i.BACK&&(he[0]=i.BACK,qe=!0);qe&&(t.isWebGL2?i.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Wt(G){return g!==G?(i.useProgram(G),g=G,!0):!1}let tt={[Cr]:i.FUNC_ADD,[Gf]:i.FUNC_SUBTRACT,[Wf]:i.FUNC_REVERSE_SUBTRACT};if(n)tt[Ih]=i.MIN,tt[Uh]=i.MAX;else{let G=e.get("EXT_blend_minmax");G!==null&&(tt[Ih]=G.MIN_EXT,tt[Uh]=G.MAX_EXT)}let rt={[Xf]:i.ZERO,[qf]:i.ONE,[Yf]:i.SRC_COLOR,[Rc]:i.SRC_ALPHA,[Qf]:i.SRC_ALPHA_SATURATE,[$f]:i.DST_COLOR,[Jf]:i.DST_ALPHA,[Zf]:i.ONE_MINUS_SRC_COLOR,[Cc]:i.ONE_MINUS_SRC_ALPHA,[jf]:i.ONE_MINUS_DST_COLOR,[Kf]:i.ONE_MINUS_DST_ALPHA,[ed]:i.CONSTANT_COLOR,[td]:i.ONE_MINUS_CONSTANT_COLOR,[nd]:i.CONSTANT_ALPHA,[id]:i.ONE_MINUS_CONSTANT_ALPHA};function Fe(G,Ie,he,qe,Ze,Et,ut,Gt,cn,K){if(G===os){d===!0&&(at(i.BLEND),d=!1);return}if(d===!1&&(Ke(i.BLEND),d=!0),G!==Vf){if(G!==L||K!==O){if((M!==Cr||F!==Cr)&&(i.blendEquation(i.FUNC_ADD),M=Cr,F=Cr),K)switch(G){case ba:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ei:i.blendFunc(i.ONE,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ba:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ei:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}H=null,P=null,N=null,le=null,S.set(0,0,0),C=0,L=G,O=K}return}Ze=Ze||Ie,Et=Et||he,ut=ut||qe,(Ie!==M||Ze!==F)&&(i.blendEquationSeparate(tt[Ie],tt[Ze]),M=Ie,F=Ze),(he!==H||qe!==P||Et!==N||ut!==le)&&(i.blendFuncSeparate(rt[he],rt[qe],rt[Et],rt[ut]),H=he,P=qe,N=Et,le=ut),(Gt.equals(S)===!1||cn!==C)&&(i.blendColor(Gt.r,Gt.g,Gt.b,cn),S.copy(Gt),C=cn),L=G,O=!1}function Vt(G,Ie){G.side===Yn?at(i.CULL_FACE):Ke(i.CULL_FACE);let he=G.side===Zn;Ie&&(he=!he),_t(he),G.blending===ba&&G.transparent===!1?Fe(os):Fe(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);let qe=G.stencilWrite;l.setTest(qe),qe&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Q(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Ke(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(G){ae!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),ae=G)}function R(G){G!==Bf?(Ke(i.CULL_FACE),G!==Ae&&(G===Ch?i.cullFace(i.BACK):G===Hf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),Ae=G}function E(G){G!==k&&(ue&&i.lineWidth(G),k=G)}function Q(G,Ie,he){G?(Ke(i.POLYGON_OFFSET_FILL),(J!==Ie||ie!==he)&&(i.polygonOffset(Ie,he),J=Ie,ie=he)):at(i.POLYGON_OFFSET_FILL)}function we(G){G?Ke(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function ve(G){G===void 0&&(G=i.TEXTURE0+xe-1),Re!==G&&(i.activeTexture(G),Re=G)}function Se(G,Ie,he){he===void 0&&(Re===null?he=i.TEXTURE0+xe-1:he=Re);let qe=I[he];qe===void 0&&(qe={type:void 0,texture:void 0},I[he]=qe),(qe.type!==G||qe.texture!==Ie)&&(Re!==he&&(i.activeTexture(he),Re=he),i.bindTexture(G,Ie||lt[G]),qe.type=G,qe.texture=Ie)}function Ge(){let G=I[Re];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ue(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function D(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(G){Pe.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Pe.copy(G))}function Mt(G){ge.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),ge.copy(G))}function dt(G,Ie){let he=u.get(Ie);he===void 0&&(he=new WeakMap,u.set(Ie,he));let qe=he.get(G);qe===void 0&&(qe=i.getUniformBlockIndex(Ie,G.name),he.set(G,qe))}function pt(G,Ie){let qe=u.get(Ie).get(G);h.get(Ie)!==qe&&(i.uniformBlockBinding(Ie,qe,G.__bindingPointIndex),h.set(Ie,qe))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},Re=null,I={},x={},y=new WeakMap,v=[],g=null,d=!1,L=null,M=null,H=null,P=null,F=null,N=null,le=null,S=new De(0,0,0),C=0,O=!1,ae=null,Ae=null,k=null,J=null,ie=null,Pe.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ke,disable:at,bindFramebuffer:yt,drawBuffers:$,useProgram:Wt,setBlending:Fe,setMaterial:Vt,setFlipSided:_t,setCullFace:R,setLineWidth:E,setPolygonOffset:Q,setScissorTest:we,activeTexture:ve,bindTexture:Se,unbindTexture:Ge,compressedTexImage2D:Ue,compressedTexImage3D:Ne,texImage2D:Te,texImage3D:be,updateUBOMapping:dt,uniformBlockBinding:pt,texStorage2D:D,texStorage3D:Ee,texSubImage2D:Xe,texSubImage3D:nt,compressedTexSubImage2D:pe,compressedTexSubImage3D:Ct,scissor:ke,viewport:Mt,reset:fe}}function Ux(i,e,t,n,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,p=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,E){return x?new OffscreenCanvas(R,E):hl("canvas")}function v(R,E,Q,we){let ve=1;if((R.width>we||R.height>we)&&(ve=we/Math.max(R.width,R.height)),ve<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let Se=E?cl:Math.floor,Ge=Se(ve*R.width),Ue=Se(ve*R.height);u===void 0&&(u=y(Ge,Ue));let Ne=Q?y(Ge,Ue):u;return Ne.width=Ge,Ne.height=Ue,Ne.getContext("2d").drawImage(R,0,0,Ge,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ge+"x"+Ue+")."),Ne}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function g(R){return Oc(R.width)&&Oc(R.height)}function d(R){return a?!1:R.wrapS!==Wi||R.wrapT!==Wi||R.minFilter!==Pn&&R.minFilter!==hi}function L(R,E){return R.generateMipmaps&&E&&R.minFilter!==Pn&&R.minFilter!==hi}function M(R){i.generateMipmap(R)}function H(R,E,Q,we,ve=!1){if(a===!1)return E;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Se=E;if(E===i.RED&&(Q===i.FLOAT&&(Se=i.R32F),Q===i.HALF_FLOAT&&(Se=i.R16F),Q===i.UNSIGNED_BYTE&&(Se=i.R8)),E===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(Se=i.R8UI),Q===i.UNSIGNED_SHORT&&(Se=i.R16UI),Q===i.UNSIGNED_INT&&(Se=i.R32UI),Q===i.BYTE&&(Se=i.R8I),Q===i.SHORT&&(Se=i.R16I),Q===i.INT&&(Se=i.R32I)),E===i.RG&&(Q===i.FLOAT&&(Se=i.RG32F),Q===i.HALF_FLOAT&&(Se=i.RG16F),Q===i.UNSIGNED_BYTE&&(Se=i.RG8)),E===i.RGBA){let Ge=ve?rl:en.getTransfer(we);Q===i.FLOAT&&(Se=i.RGBA32F),Q===i.HALF_FLOAT&&(Se=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(Se=Ge===on?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(Se=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(Se=i.RGB5_A1)}return(Se===i.R16F||Se===i.R32F||Se===i.RG16F||Se===i.RG32F||Se===i.RGBA16F||Se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function P(R,E,Q){return L(R,Q)===!0||R.isFramebufferTexture&&R.minFilter!==Pn&&R.minFilter!==hi?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function F(R){return R===Pn||R===Dh||R===Yl?i.NEAREST:i.LINEAR}function N(R){let E=R.target;E.removeEventListener("dispose",N),S(E),E.isVideoTexture&&h.delete(E)}function le(R){let E=R.target;E.removeEventListener("dispose",le),O(E)}function S(R){let E=n.get(R);if(E.__webglInit===void 0)return;let Q=R.source,we=p.get(Q);if(we){let ve=we[E.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&C(R),Object.keys(we).length===0&&p.delete(Q)}n.remove(R)}function C(R){let E=n.get(R);i.deleteTexture(E.__webglTexture);let Q=R.source,we=p.get(Q);delete we[E.__cacheKey],o.memory.textures--}function O(R){let E=R.texture,Q=n.get(R),we=n.get(E);if(we.__webglTexture!==void 0&&(i.deleteTexture(we.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(Q.__webglFramebuffer[ve]))for(let Se=0;Se<Q.__webglFramebuffer[ve].length;Se++)i.deleteFramebuffer(Q.__webglFramebuffer[ve][Se]);else i.deleteFramebuffer(Q.__webglFramebuffer[ve]);Q.__webglDepthbuffer&&i.deleteRenderbuffer(Q.__webglDepthbuffer[ve])}else{if(Array.isArray(Q.__webglFramebuffer))for(let ve=0;ve<Q.__webglFramebuffer.length;ve++)i.deleteFramebuffer(Q.__webglFramebuffer[ve]);else i.deleteFramebuffer(Q.__webglFramebuffer);if(Q.__webglDepthbuffer&&i.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let ve=0;ve<Q.__webglColorRenderbuffer.length;ve++)Q.__webglColorRenderbuffer[ve]&&i.deleteRenderbuffer(Q.__webglColorRenderbuffer[ve]);Q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ve=0,Se=E.length;ve<Se;ve++){let Ge=n.get(E[ve]);Ge.__webglTexture&&(i.deleteTexture(Ge.__webglTexture),o.memory.textures--),n.remove(E[ve])}n.remove(E),n.remove(R)}let ae=0;function Ae(){ae=0}function k(){let R=ae;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),ae+=1,R}function J(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function ie(R,E){let Q=n.get(R);if(R.isVideoTexture&&Vt(R),R.isRenderTargetTexture===!1&&R.version>0&&Q.__version!==R.version){let we=R.image;if(we===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(we.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(Q,R,E);return}}t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+E)}function xe(R,E){let Q=n.get(R);if(R.version>0&&Q.__version!==R.version){Pe(Q,R,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+E)}function ue(R,E){let Q=n.get(R);if(R.version>0&&Q.__version!==R.version){Pe(Q,R,E);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+E)}function re(R,E){let Q=n.get(R);if(R.version>0&&Q.__version!==R.version){ge(Q,R,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+E)}let _e={[Ic]:i.REPEAT,[Wi]:i.CLAMP_TO_EDGE,[Uc]:i.MIRRORED_REPEAT},Re={[Pn]:i.NEAREST,[Dh]:i.NEAREST_MIPMAP_NEAREST,[Yl]:i.NEAREST_MIPMAP_LINEAR,[hi]:i.LINEAR,[pd]:i.LINEAR_MIPMAP_NEAREST,[oo]:i.LINEAR_MIPMAP_LINEAR},I={[Td]:i.NEVER,[Id]:i.ALWAYS,[Ad]:i.LESS,[gf]:i.LEQUAL,[Rd]:i.EQUAL,[Ld]:i.GEQUAL,[Cd]:i.GREATER,[Pd]:i.NOTEQUAL};function W(R,E,Q){if(Q?(i.texParameteri(R,i.TEXTURE_WRAP_S,_e[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,_e[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,_e[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Re[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Re[E.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Wi||E.wrapT!==Wi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,F(E.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,F(E.minFilter)),E.minFilter!==Pn&&E.minFilter!==hi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let we=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Pn||E.minFilter!==Yl&&E.minFilter!==oo||E.type===er&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Xi&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(R,we.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function oe(R,E){let Q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",N));let we=E.source,ve=p.get(we);ve===void 0&&(ve={},p.set(we,ve));let Se=J(E);if(Se!==R.__cacheKey){ve[Se]===void 0&&(ve[Se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),ve[Se].usedTimes++;let Ge=ve[R.__cacheKey];Ge!==void 0&&(ve[R.__cacheKey].usedTimes--,Ge.usedTimes===0&&C(E)),R.__cacheKey=Se,R.__webglTexture=ve[Se].texture}return Q}function Pe(R,E,Q){let we=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(we=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(we=i.TEXTURE_3D);let ve=oe(R,E),Se=E.source;t.bindTexture(we,R.__webglTexture,i.TEXTURE0+Q);let Ge=n.get(Se);if(Se.version!==Ge.__version||ve===!0){t.activeTexture(i.TEXTURE0+Q);let Ue=en.getPrimaries(en.workingColorSpace),Ne=E.colorSpace===Ui?null:en.getPrimaries(E.colorSpace),Xe=E.colorSpace===Ui||Ue===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let nt=d(E)&&g(E.image)===!1,pe=v(E.image,nt,!1,s.maxTextureSize);pe=_t(E,pe);let Ct=g(pe)||a,D=r.convert(E.format,E.colorSpace),Ee=r.convert(E.type),Te=H(E.internalFormat,D,Ee,E.colorSpace,E.isVideoTexture);W(we,E,Ct);let be,ke=E.mipmaps,Mt=a&&E.isVideoTexture!==!0&&Te!==df,dt=Ge.__version===void 0||ve===!0,pt=P(E,pe,Ct);if(E.isDepthTexture)Te=i.DEPTH_COMPONENT,a?E.type===er?Te=i.DEPTH_COMPONENT32F:E.type===Qs?Te=i.DEPTH_COMPONENT24:E.type===Ir?Te=i.DEPTH24_STENCIL8:Te=i.DEPTH_COMPONENT16:E.type===er&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ur&&Te===i.DEPTH_COMPONENT&&E.type!==_h&&E.type!==Qs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Qs,Ee=r.convert(E.type)),E.format===Ca&&Te===i.DEPTH_COMPONENT&&(Te=i.DEPTH_STENCIL,E.type!==Ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ir,Ee=r.convert(E.type))),dt&&(Mt?t.texStorage2D(i.TEXTURE_2D,1,Te,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,Te,pe.width,pe.height,0,D,Ee,null));else if(E.isDataTexture)if(ke.length>0&&Ct){Mt&&dt&&t.texStorage2D(i.TEXTURE_2D,pt,Te,ke[0].width,ke[0].height);for(let fe=0,G=ke.length;fe<G;fe++)be=ke[fe],Mt?t.texSubImage2D(i.TEXTURE_2D,fe,0,0,be.width,be.height,D,Ee,be.data):t.texImage2D(i.TEXTURE_2D,fe,Te,be.width,be.height,0,D,Ee,be.data);E.generateMipmaps=!1}else Mt?(dt&&t.texStorage2D(i.TEXTURE_2D,pt,Te,pe.width,pe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,D,Ee,pe.data)):t.texImage2D(i.TEXTURE_2D,0,Te,pe.width,pe.height,0,D,Ee,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Mt&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Te,ke[0].width,ke[0].height,pe.depth);for(let fe=0,G=ke.length;fe<G;fe++)be=ke[fe],E.format!==Mi?D!==null?Mt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,be.width,be.height,pe.depth,D,be.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,Te,be.width,be.height,pe.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,be.width,be.height,pe.depth,D,Ee,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,Te,be.width,be.height,pe.depth,0,D,Ee,be.data)}else{Mt&&dt&&t.texStorage2D(i.TEXTURE_2D,pt,Te,ke[0].width,ke[0].height);for(let fe=0,G=ke.length;fe<G;fe++)be=ke[fe],E.format!==Mi?D!==null?Mt?t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,be.width,be.height,D,be.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,Te,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?t.texSubImage2D(i.TEXTURE_2D,fe,0,0,be.width,be.height,D,Ee,be.data):t.texImage2D(i.TEXTURE_2D,fe,Te,be.width,be.height,0,D,Ee,be.data)}else if(E.isDataArrayTexture)Mt?(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Te,pe.width,pe.height,pe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,D,Ee,pe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,pe.width,pe.height,pe.depth,0,D,Ee,pe.data);else if(E.isData3DTexture)Mt?(dt&&t.texStorage3D(i.TEXTURE_3D,pt,Te,pe.width,pe.height,pe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,D,Ee,pe.data)):t.texImage3D(i.TEXTURE_3D,0,Te,pe.width,pe.height,pe.depth,0,D,Ee,pe.data);else if(E.isFramebufferTexture){if(dt)if(Mt)t.texStorage2D(i.TEXTURE_2D,pt,Te,pe.width,pe.height);else{let fe=pe.width,G=pe.height;for(let Ie=0;Ie<pt;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Te,fe,G,0,D,Ee,null),fe>>=1,G>>=1}}else if(ke.length>0&&Ct){Mt&&dt&&t.texStorage2D(i.TEXTURE_2D,pt,Te,ke[0].width,ke[0].height);for(let fe=0,G=ke.length;fe<G;fe++)be=ke[fe],Mt?t.texSubImage2D(i.TEXTURE_2D,fe,0,0,D,Ee,be):t.texImage2D(i.TEXTURE_2D,fe,Te,D,Ee,be);E.generateMipmaps=!1}else Mt?(dt&&t.texStorage2D(i.TEXTURE_2D,pt,Te,pe.width,pe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,D,Ee,pe)):t.texImage2D(i.TEXTURE_2D,0,Te,D,Ee,pe);L(E,Ct)&&M(we),Ge.__version=Se.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ge(R,E,Q){if(E.image.length!==6)return;let we=oe(R,E),ve=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+Q);let Se=n.get(ve);if(ve.version!==Se.__version||we===!0){t.activeTexture(i.TEXTURE0+Q);let Ge=en.getPrimaries(en.workingColorSpace),Ue=E.colorSpace===Ui?null:en.getPrimaries(E.colorSpace),Ne=E.colorSpace===Ui||Ge===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let Xe=E.isCompressedTexture||E.image[0].isCompressedTexture,nt=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let fe=0;fe<6;fe++)!Xe&&!nt?pe[fe]=v(E.image[fe],!1,!0,s.maxCubemapSize):pe[fe]=nt?E.image[fe].image:E.image[fe],pe[fe]=_t(E,pe[fe]);let Ct=pe[0],D=g(Ct)||a,Ee=r.convert(E.format,E.colorSpace),Te=r.convert(E.type),be=H(E.internalFormat,Ee,Te,E.colorSpace),ke=a&&E.isVideoTexture!==!0,Mt=Se.__version===void 0||we===!0,dt=P(E,Ct,D);W(i.TEXTURE_CUBE_MAP,E,D);let pt;if(Xe){ke&&Mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,dt,be,Ct.width,Ct.height);for(let fe=0;fe<6;fe++){pt=pe[fe].mipmaps;for(let G=0;G<pt.length;G++){let Ie=pt[G];E.format!==Mi?Ee!==null?ke?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G,0,0,Ie.width,Ie.height,Ee,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G,be,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G,0,0,Ie.width,Ie.height,Ee,Te,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G,be,Ie.width,Ie.height,0,Ee,Te,Ie.data)}}}else{pt=E.mipmaps,ke&&Mt&&(pt.length>0&&dt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,dt,be,pe[0].width,pe[0].height));for(let fe=0;fe<6;fe++)if(nt){ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,pe[fe].width,pe[fe].height,Ee,Te,pe[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,be,pe[fe].width,pe[fe].height,0,Ee,Te,pe[fe].data);for(let G=0;G<pt.length;G++){let he=pt[G].image[fe].image;ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G+1,0,0,he.width,he.height,Ee,Te,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G+1,be,he.width,he.height,0,Ee,Te,he.data)}}else{ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ee,Te,pe[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,be,Ee,Te,pe[fe]);for(let G=0;G<pt.length;G++){let Ie=pt[G];ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G+1,0,0,Ee,Te,Ie.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G+1,be,Ee,Te,Ie.image[fe])}}}L(E,D)&&M(i.TEXTURE_CUBE_MAP),Se.__version=ve.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function He(R,E,Q,we,ve,Se){let Ge=r.convert(Q.format,Q.colorSpace),Ue=r.convert(Q.type),Ne=H(Q.internalFormat,Ge,Ue,Q.colorSpace);if(!n.get(E).__hasExternalTextures){let nt=Math.max(1,E.width>>Se),pe=Math.max(1,E.height>>Se);ve===i.TEXTURE_3D||ve===i.TEXTURE_2D_ARRAY?t.texImage3D(ve,Se,Ne,nt,pe,E.depth,0,Ge,Ue,null):t.texImage2D(ve,Se,Ne,nt,pe,0,Ge,Ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Fe(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,we,ve,n.get(Q).__webglTexture,0,rt(E)):(ve===i.TEXTURE_2D||ve>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,we,ve,n.get(Q).__webglTexture,Se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(R,E,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let we=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Q||Fe(E)){let ve=E.depthTexture;ve&&ve.isDepthTexture&&(ve.type===er?we=i.DEPTH_COMPONENT32F:ve.type===Qs&&(we=i.DEPTH_COMPONENT24));let Se=rt(E);Fe(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,we,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,we,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,we,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){let we=rt(E);Q&&Fe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,i.DEPTH24_STENCIL8,E.width,E.height):Fe(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{let we=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ve=0;ve<we.length;ve++){let Se=we[ve],Ge=r.convert(Se.format,Se.colorSpace),Ue=r.convert(Se.type),Ne=H(Se.internalFormat,Ge,Ue,Se.colorSpace),Xe=rt(E);Q&&Fe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Ne,E.width,E.height):Fe(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe,Ne,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ke(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ie(E.depthTexture,0);let we=n.get(E.depthTexture).__webglTexture,ve=rt(E);if(E.depthTexture.format===Ur)Fe(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,we,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,we,0);else if(E.depthTexture.format===Ca)Fe(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,we,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,we,0);else throw new Error("Unknown depthTexture format")}function at(R){let E=n.get(R),Q=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Ke(E.__webglFramebuffer,R)}else if(Q){E.__webglDepthbuffer=[];for(let we=0;we<6;we++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[we]),E.__webglDepthbuffer[we]=i.createRenderbuffer(),lt(E.__webglDepthbuffer[we],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),lt(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(R,E,Q){let we=n.get(R);E!==void 0&&He(we.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&at(R)}function $(R){let E=R.texture,Q=n.get(R),we=n.get(E);R.addEventListener("dispose",le),R.isWebGLMultipleRenderTargets!==!0&&(we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture()),we.__version=E.version,o.memory.textures++);let ve=R.isWebGLCubeRenderTarget===!0,Se=R.isWebGLMultipleRenderTargets===!0,Ge=g(R)||a;if(ve){Q.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(a&&E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[Ue]=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)Q.__webglFramebuffer[Ue][Ne]=i.createFramebuffer()}else Q.__webglFramebuffer[Ue]=i.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)Q.__webglFramebuffer[Ue]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Se)if(s.drawBuffers){let Ue=R.texture;for(let Ne=0,Xe=Ue.length;Ne<Xe;Ne++){let nt=n.get(Ue[Ne]);nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Fe(R)===!1){let Ue=Se?E:[E];Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Ue.length;Ne++){let Xe=Ue[Ne];Q.__webglColorRenderbuffer[Ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[Ne]);let nt=r.convert(Xe.format,Xe.colorSpace),pe=r.convert(Xe.type),Ct=H(Xe.internalFormat,nt,pe,Xe.colorSpace,R.isXRRenderTarget===!0),D=rt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,D,Ct,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,Q.__webglColorRenderbuffer[Ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(Q.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,we.__webglTexture),W(i.TEXTURE_CUBE_MAP,E,Ge);for(let Ue=0;Ue<6;Ue++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)He(Q.__webglFramebuffer[Ue][Ne],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ne);else He(Q.__webglFramebuffer[Ue],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);L(E,Ge)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){let Ue=R.texture;for(let Ne=0,Xe=Ue.length;Ne<Xe;Ne++){let nt=Ue[Ne],pe=n.get(nt);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),W(i.TEXTURE_2D,nt,Ge),He(Q.__webglFramebuffer,R,nt,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,0),L(nt,Ge)&&M(i.TEXTURE_2D)}t.unbindTexture()}else{let Ue=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?Ue=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ue,we.__webglTexture),W(Ue,E,Ge),a&&E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)He(Q.__webglFramebuffer[Ne],R,E,i.COLOR_ATTACHMENT0,Ue,Ne);else He(Q.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,Ue,0);L(E,Ge)&&M(Ue),t.unbindTexture()}R.depthBuffer&&at(R)}function Wt(R){let E=g(R)||a,Q=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let we=0,ve=Q.length;we<ve;we++){let Se=Q[we];if(L(Se,E)){let Ge=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ue=n.get(Se).__webglTexture;t.bindTexture(Ge,Ue),M(Ge),t.unbindTexture()}}}function tt(R){if(a&&R.samples>0&&Fe(R)===!1){let E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],Q=R.width,we=R.height,ve=i.COLOR_BUFFER_BIT,Se=[],Ge=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(R),Ne=R.isWebGLMultipleRenderTargets===!0;if(Ne)for(let Xe=0;Xe<E.length;Xe++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Xe=0;Xe<E.length;Xe++){Se.push(i.COLOR_ATTACHMENT0+Xe),R.depthBuffer&&Se.push(Ge);let nt=Ue.__ignoreDepthValues!==void 0?Ue.__ignoreDepthValues:!1;if(nt===!1&&(R.depthBuffer&&(ve|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ve|=i.STENCIL_BUFFER_BIT)),Ne&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Xe]),nt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ge]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ge])),Ne){let pe=n.get(E[Xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,Q,we,0,0,Q,we,ve,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ne)for(let Xe=0;Xe<E.length;Xe++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Xe]);let nt=n.get(E[Xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,nt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}}function rt(R){return Math.min(s.maxSamples,R.samples)}function Fe(R){let E=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Vt(R){let E=o.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function _t(R,E){let Q=R.colorSpace,we=R.format,ve=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Nc||Q!==Us&&Q!==Ui&&(en.getTransfer(Q)===on?a===!1?e.has("EXT_sRGB")===!0&&we===Mi?(R.format=Nc,R.minFilter=hi,R.generateMipmaps=!1):E=ul.sRGBToLinear(E):(we!==Mi||ve!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),E}this.allocateTextureUnit=k,this.resetTextureUnits=Ae,this.setTexture2D=ie,this.setTexture2DArray=xe,this.setTexture3D=ue,this.setTextureCube=re,this.rebindTextures=yt,this.setupRenderTarget=$,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=He,this.useMultisampledRTT=Fe}function Dx(i,e,t){let n=t.isWebGL2;function s(r,o=Ui){let a,c=en.getTransfer(o);if(r===nr)return i.UNSIGNED_BYTE;if(r===lf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===cf)return i.UNSIGNED_SHORT_5_5_5_1;if(r===md)return i.BYTE;if(r===gd)return i.SHORT;if(r===_h)return i.UNSIGNED_SHORT;if(r===of)return i.INT;if(r===Qs)return i.UNSIGNED_INT;if(r===er)return i.FLOAT;if(r===Xi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===xd)return i.ALPHA;if(r===Mi)return i.RGBA;if(r===_d)return i.LUMINANCE;if(r===vd)return i.LUMINANCE_ALPHA;if(r===Ur)return i.DEPTH_COMPONENT;if(r===Ca)return i.DEPTH_STENCIL;if(r===Nc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===yd)return i.RED;if(r===hf)return i.RED_INTEGER;if(r===Md)return i.RG;if(r===uf)return i.RG_INTEGER;if(r===ff)return i.RGBA_INTEGER;if(r===Zl||r===Jl||r===Kl||r===$l)if(c===on)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Zl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Kl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$l)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Zl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Kl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$l)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Nh||r===Oh||r===Fh||r===zh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Nh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Oh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===zh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===df)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Bh||r===Hh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Bh)return c===on?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Hh)return c===on?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===kh||r===Vh||r===Gh||r===Wh||r===Xh||r===qh||r===Yh||r===Zh||r===Jh||r===Kh||r===$h||r===jh||r===Qh||r===eu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===kh)return c===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vh)return c===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gh)return c===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wh)return c===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xh)return c===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qh)return c===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Yh)return c===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zh)return c===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jh)return c===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kh)return c===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$h)return c===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jh)return c===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qh)return c===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===eu)return c===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jl||r===tu||r===nu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===jl)return c===on?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===tu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ed||r===iu||r===su||r===ru)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===jl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===iu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===su)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ru)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ir?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Jc=class extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Hn=class extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nx={type:"move"},ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),d=this._getHandJoint(l,v);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),x=.02,y=.005;l.inputState.pinching&&p>x+y?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=x-y&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Kc=class extends ls{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,p=null,x=null,y=null,v=t.getContextAttributes(),g=null,d=null,L=[],M=[],H=new Ye,P=null,F=new qn;F.layers.enable(1),F.viewport=new nn;let N=new qn;N.layers.enable(2),N.viewport=new nn;let le=[F,N],S=new Jc;S.layers.enable(1),S.layers.enable(2);let C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let oe=L[W];return oe===void 0&&(oe=new ao,L[W]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(W){let oe=L[W];return oe===void 0&&(oe=new ao,L[W]=oe),oe.getGripSpace()},this.getHand=function(W){let oe=L[W];return oe===void 0&&(oe=new ao,L[W]=oe),oe.getHandSpace()};function ae(W){let oe=M.indexOf(W.inputSource);if(oe===-1)return;let Pe=L[oe];Pe!==void 0&&(Pe.update(W.inputSource,W.frame,l||o),Pe.dispatchEvent({type:W.type,data:W.inputSource}))}function Ae(){s.removeEventListener("select",ae),s.removeEventListener("selectstart",ae),s.removeEventListener("selectend",ae),s.removeEventListener("squeeze",ae),s.removeEventListener("squeezestart",ae),s.removeEventListener("squeezeend",ae),s.removeEventListener("end",Ae),s.removeEventListener("inputsourceschange",k);for(let W=0;W<L.length;W++){let oe=M[W];oe!==null&&(M[W]=null,L[W].disconnect(oe))}C=null,O=null,e.setRenderTarget(g),x=null,p=null,u=null,s=null,d=null,I.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(H.width,H.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return p!==null?p:x},this.getBinding=function(){return u},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",ae),s.addEventListener("selectstart",ae),s.addEventListener("selectend",ae),s.addEventListener("squeeze",ae),s.addEventListener("squeezestart",ae),s.addEventListener("squeezeend",ae),s.addEventListener("end",Ae),s.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(H),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let oe={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),d=new si(x.framebufferWidth,x.framebufferHeight,{format:Mi,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let oe=null,Pe=null,ge=null;v.depth&&(ge=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=v.stencil?Ca:Ur,Pe=v.stencil?Ir:Qs);let He={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=new XRWebGLBinding(s,t),p=u.createProjectionLayer(He),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new si(p.textureWidth,p.textureHeight,{format:Mi,type:nr,depthTexture:new vl(p.textureWidth,p.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let lt=e.properties.get(d);lt.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),I.setContext(s),I.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function k(W){for(let oe=0;oe<W.removed.length;oe++){let Pe=W.removed[oe],ge=M.indexOf(Pe);ge>=0&&(M[ge]=null,L[ge].disconnect(Pe))}for(let oe=0;oe<W.added.length;oe++){let Pe=W.added[oe],ge=M.indexOf(Pe);if(ge===-1){for(let lt=0;lt<L.length;lt++)if(lt>=M.length){M.push(Pe),ge=lt;break}else if(M[lt]===null){M[lt]=Pe,ge=lt;break}if(ge===-1)break}let He=L[ge];He&&He.connect(Pe)}}let J=new U,ie=new U;function xe(W,oe,Pe){J.setFromMatrixPosition(oe.matrixWorld),ie.setFromMatrixPosition(Pe.matrixWorld);let ge=J.distanceTo(ie),He=oe.projectionMatrix.elements,lt=Pe.projectionMatrix.elements,Ke=He[14]/(He[10]-1),at=He[14]/(He[10]+1),yt=(He[9]+1)/He[5],$=(He[9]-1)/He[5],Wt=(He[8]-1)/He[0],tt=(lt[8]+1)/lt[0],rt=Ke*Wt,Fe=Ke*tt,Vt=ge/(-Wt+tt),_t=Vt*-Wt;oe.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(_t),W.translateZ(Vt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let R=Ke+Vt,E=at+Vt,Q=rt-_t,we=Fe+(ge-_t),ve=yt*at/E*R,Se=$*at/E*R;W.projectionMatrix.makePerspective(Q,we,ve,Se,R,E),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ue(W,oe){oe===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(oe.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;S.near=N.near=F.near=W.near,S.far=N.far=F.far=W.far,(C!==S.near||O!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,O=S.far);let oe=W.parent,Pe=S.cameras;ue(S,oe);for(let ge=0;ge<Pe.length;ge++)ue(Pe[ge],oe);Pe.length===2?xe(S,F,N):S.projectionMatrix.copy(F.projectionMatrix),re(W,S,oe)};function re(W,oe,Pe){Pe===null?W.matrix.copy(oe.matrixWorld):(W.matrix.copy(Pe.matrixWorld),W.matrix.invert(),W.matrix.multiply(oe.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(oe.projectionMatrix),W.projectionMatrixInverse.copy(oe.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=lo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&x===null))return c},this.setFoveation=function(W){c=W,p!==null&&(p.fixedFoveation=W),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=W)};let _e=null;function Re(W,oe){if(h=oe.getViewerPose(l||o),y=oe,h!==null){let Pe=h.views;x!==null&&(e.setRenderTargetFramebuffer(d,x.framebuffer),e.setRenderTarget(d));let ge=!1;Pe.length!==S.cameras.length&&(S.cameras.length=0,ge=!0);for(let He=0;He<Pe.length;He++){let lt=Pe[He],Ke=null;if(x!==null)Ke=x.getViewport(lt);else{let yt=u.getViewSubImage(p,lt);Ke=yt.viewport,He===0&&(e.setRenderTargetTextures(d,yt.colorTexture,p.ignoreDepthValues?void 0:yt.depthStencilTexture),e.setRenderTarget(d))}let at=le[He];at===void 0&&(at=new qn,at.layers.enable(He),at.viewport=new nn,le[He]=at),at.matrix.fromArray(lt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(lt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),He===0&&(S.matrix.copy(at.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ge===!0&&S.cameras.push(at)}}for(let Pe=0;Pe<L.length;Pe++){let ge=M[Pe],He=L[Pe];ge!==null&&He!==void 0&&He.update(ge,oe,l||o)}_e&&_e(W,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),y=null}let I=new Mf;I.setAnimationLoop(Re),this.setAnimationLoop=function(W){_e=W},this.dispose=function(){}}};function Ox(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,yf(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,L,M,H){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),u(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d)):d.isMeshStandardMaterial?(r(g,d),p(g,d),d.isMeshPhysicalMaterial&&x(g,d,H)):d.isMeshMatcapMaterial?(r(g,d),y(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),v(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?c(g,d,L,M):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Zn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Zn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let L=e.get(d).envMap;if(L&&(g.envMap.value=L,g.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;let M=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*M,t(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,L,M){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*L,g.scale.value=M*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function p(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function x(g,d,L){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Zn&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=L.texture,g.transmissionSamplerSize.value.set(L.width,L.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,d){d.matcap&&(g.matcap.value=d.matcap)}function v(g,d){let L=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(L.matrixWorld),g.nearDistance.value=L.shadow.camera.near,g.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fx(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(L,M){let H=M.program;n.uniformBlockBinding(L,H)}function l(L,M){let H=s[L.id];H===void 0&&(y(L),H=h(L),s[L.id]=H,L.addEventListener("dispose",g));let P=M.program;n.updateUBOMapping(L,P);let F=e.render.frame;r[L.id]!==F&&(p(L),r[L.id]=F)}function h(L){let M=u();L.__bindingPointIndex=M;let H=i.createBuffer(),P=L.__size,F=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,H),i.bufferData(i.UNIFORM_BUFFER,P,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,H),H}function u(){for(let L=0;L<a;L++)if(o.indexOf(L)===-1)return o.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(L){let M=s[L.id],H=L.uniforms,P=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let F=0,N=H.length;F<N;F++){let le=Array.isArray(H[F])?H[F]:[H[F]];for(let S=0,C=le.length;S<C;S++){let O=le[S];if(x(O,F,S,P)===!0){let ae=O.__offset,Ae=Array.isArray(O.value)?O.value:[O.value],k=0;for(let J=0;J<Ae.length;J++){let ie=Ae[J],xe=v(ie);typeof ie=="number"||typeof ie=="boolean"?(O.__data[0]=ie,i.bufferSubData(i.UNIFORM_BUFFER,ae+k,O.__data)):ie.isMatrix3?(O.__data[0]=ie.elements[0],O.__data[1]=ie.elements[1],O.__data[2]=ie.elements[2],O.__data[3]=0,O.__data[4]=ie.elements[3],O.__data[5]=ie.elements[4],O.__data[6]=ie.elements[5],O.__data[7]=0,O.__data[8]=ie.elements[6],O.__data[9]=ie.elements[7],O.__data[10]=ie.elements[8],O.__data[11]=0):(ie.toArray(O.__data,k),k+=xe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ae,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(L,M,H,P){let F=L.value,N=M+"_"+H;if(P[N]===void 0)return typeof F=="number"||typeof F=="boolean"?P[N]=F:P[N]=F.clone(),!0;{let le=P[N];if(typeof F=="number"||typeof F=="boolean"){if(le!==F)return P[N]=F,!0}else if(le.equals(F)===!1)return le.copy(F),!0}return!1}function y(L){let M=L.uniforms,H=0,P=16;for(let N=0,le=M.length;N<le;N++){let S=Array.isArray(M[N])?M[N]:[M[N]];for(let C=0,O=S.length;C<O;C++){let ae=S[C],Ae=Array.isArray(ae.value)?ae.value:[ae.value];for(let k=0,J=Ae.length;k<J;k++){let ie=Ae[k],xe=v(ie),ue=H%P;ue!==0&&P-ue<xe.boundary&&(H+=P-ue),ae.__data=new Float32Array(xe.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=H,H+=xe.storage}}}let F=H%P;return F>0&&(H+=P-F),L.__size=H,L.__cache={},this}function v(L){let M={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(M.boundary=4,M.storage=4):L.isVector2?(M.boundary=8,M.storage=8):L.isVector3||L.isColor?(M.boundary=16,M.storage=12):L.isVector4?(M.boundary=16,M.storage=16):L.isMatrix3?(M.boundary=48,M.storage=48):L.isMatrix4?(M.boundary=64,M.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),M}function g(L){let M=L.target;M.removeEventListener("dispose",g);let H=o.indexOf(M.__bindingPointIndex);o.splice(H,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(let L in s)i.deleteBuffer(s[L]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var uo=class{constructor(e={}){let{canvas:t=Yd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;let x=new Uint32Array(4),y=new Int32Array(4),v=null,g=null,d=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this._useLegacyLights=!1,this.toneMapping=tr,this.toneMappingExposure=1;let M=this,H=!1,P=0,F=0,N=null,le=-1,S=null,C=new nn,O=new nn,ae=null,Ae=new De(0),k=0,J=t.width,ie=t.height,xe=1,ue=null,re=null,_e=new nn(0,0,J,ie),Re=new nn(0,0,J,ie),I=!1,W=new ho,oe=!1,Pe=!1,ge=null,He=new zt,lt=new Ye,Ke=new U,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function yt(){return N===null?xe:1}let $=n;function Wt(T,Y){for(let j=0;j<T.length;j++){let te=T[j],ee=t.getContext(te,Y);if(ee!==null)return ee}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),$===null){let Y=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&Y.shift(),$=Wt(Y,T),$===null)throw Wt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let tt,rt,Fe,Vt,_t,R,E,Q,we,ve,Se,Ge,Ue,Ne,Xe,nt,pe,Ct,D,Ee,Te,be,ke,Mt;function dt(){tt=new n0($),rt=new Kg($,tt,e),tt.init(rt),be=new Dx($,tt,rt),Fe=new Ix($,tt,rt),Vt=new r0($),_t=new yx,R=new Ux($,tt,Fe,_t,rt,be,Vt),E=new jg(M),Q=new t0(M),we=new dp($,rt),ke=new Zg($,tt,we,rt),ve=new i0($,we,Vt,ke),Se=new c0($,ve,we,Vt),D=new l0($,rt,R),nt=new $g(_t),Ge=new vx(M,E,Q,tt,rt,ke,nt),Ue=new Ox(M,_t),Ne=new Ex,Xe=new Rx(tt,rt),Ct=new Yg(M,E,Q,Fe,Se,p,c),pe=new Lx(M,Se,rt),Mt=new Fx($,Vt,rt,Fe),Ee=new Jg($,tt,Vt,rt),Te=new s0($,tt,Vt,rt),Vt.programs=Ge.programs,M.capabilities=rt,M.extensions=tt,M.properties=_t,M.renderLists=Ne,M.shadowMap=pe,M.state=Fe,M.info=Vt}dt();let pt=new Kc(M,$);this.xr=pt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let T=tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(T){T!==void 0&&(xe=T,this.setSize(J,ie,!1))},this.getSize=function(T){return T.set(J,ie)},this.setSize=function(T,Y,j=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=T,ie=Y,t.width=Math.floor(T*xe),t.height=Math.floor(Y*xe),j===!0&&(t.style.width=T+"px",t.style.height=Y+"px"),this.setViewport(0,0,T,Y)},this.getDrawingBufferSize=function(T){return T.set(J*xe,ie*xe).floor()},this.setDrawingBufferSize=function(T,Y,j){J=T,ie=Y,xe=j,t.width=Math.floor(T*j),t.height=Math.floor(Y*j),this.setViewport(0,0,T,Y)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(_e)},this.setViewport=function(T,Y,j,te){T.isVector4?_e.set(T.x,T.y,T.z,T.w):_e.set(T,Y,j,te),Fe.viewport(C.copy(_e).multiplyScalar(xe).floor())},this.getScissor=function(T){return T.copy(Re)},this.setScissor=function(T,Y,j,te){T.isVector4?Re.set(T.x,T.y,T.z,T.w):Re.set(T,Y,j,te),Fe.scissor(O.copy(Re).multiplyScalar(xe).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(T){Fe.setScissorTest(I=T)},this.setOpaqueSort=function(T){ue=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(T=!0,Y=!0,j=!0){let te=0;if(T){let ee=!1;if(N!==null){let ze=N.texture.format;ee=ze===ff||ze===uf||ze===hf}if(ee){let ze=N.texture.type,et=ze===nr||ze===Qs||ze===_h||ze===Ir||ze===lf||ze===cf,ft=Ct.getClearColor(),ot=Ct.getClearAlpha(),Pt=ft.r,St=ft.g,bt=ft.b;et?(x[0]=Pt,x[1]=St,x[2]=bt,x[3]=ot,$.clearBufferuiv($.COLOR,0,x)):(y[0]=Pt,y[1]=St,y[2]=bt,y[3]=ot,$.clearBufferiv($.COLOR,0,y))}else te|=$.COLOR_BUFFER_BIT}Y&&(te|=$.DEPTH_BUFFER_BIT),j&&(te|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),Ne.dispose(),Xe.dispose(),_t.dispose(),E.dispose(),Q.dispose(),Se.dispose(),ke.dispose(),Mt.dispose(),Ge.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",cn),pt.removeEventListener("sessionend",K),ge&&(ge.dispose(),ge=null),de.stop()};function fe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;let T=Vt.autoReset,Y=pe.enabled,j=pe.autoUpdate,te=pe.needsUpdate,ee=pe.type;dt(),Vt.autoReset=T,pe.enabled=Y,pe.autoUpdate=j,pe.needsUpdate=te,pe.type=ee}function Ie(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function he(T){let Y=T.target;Y.removeEventListener("dispose",he),qe(Y)}function qe(T){Ze(T),_t.remove(T)}function Ze(T){let Y=_t.get(T).programs;Y!==void 0&&(Y.forEach(function(j){Ge.releaseProgram(j)}),T.isShaderMaterial&&Ge.releaseShaderCache(T))}this.renderBufferDirect=function(T,Y,j,te,ee,ze){Y===null&&(Y=at);let et=ee.isMesh&&ee.matrixWorld.determinant()<0,ft=fn(T,Y,j,te,ee);Fe.setMaterial(te,et);let ot=j.index,Pt=1;if(te.wireframe===!0){if(ot=ve.getWireframeAttribute(j),ot===void 0)return;Pt=2}let St=j.drawRange,bt=j.attributes.position,Zt=St.start*Pt,Xt=(St.start+St.count)*Pt;ze!==null&&(Zt=Math.max(Zt,ze.start*Pt),Xt=Math.min(Xt,(ze.start+ze.count)*Pt)),ot!==null?(Zt=Math.max(Zt,0),Xt=Math.min(Xt,ot.count)):bt!=null&&(Zt=Math.max(Zt,0),Xt=Math.min(Xt,bt.count));let gn=Xt-Zt;if(gn<0||gn===1/0)return;ke.setup(ee,te,ft,j,ot);let Kn,jt=Ee;if(ot!==null&&(Kn=we.get(ot),jt=Te,jt.setIndex(Kn)),ee.isMesh)te.wireframe===!0?(Fe.setLineWidth(te.wireframeLinewidth*yt()),jt.setMode($.LINES)):jt.setMode($.TRIANGLES);else if(ee.isLine){let mt=te.linewidth;mt===void 0&&(mt=1),Fe.setLineWidth(mt*yt()),ee.isLineSegments?jt.setMode($.LINES):ee.isLineLoop?jt.setMode($.LINE_LOOP):jt.setMode($.LINE_STRIP)}else ee.isPoints?jt.setMode($.POINTS):ee.isSprite&&jt.setMode($.TRIANGLES);if(ee.isBatchedMesh)jt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else if(ee.isInstancedMesh)jt.renderInstances(Zt,gn,ee.count);else if(j.isInstancedBufferGeometry){let mt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Oi=Math.min(j.instanceCount,mt);jt.renderInstances(Zt,gn,Oi)}else jt.render(Zt,gn)};function Et(T,Y,j){T.transparent===!0&&T.side===Yn&&T.forceSinglePass===!1?(T.side=Zn,T.needsUpdate=!0,At(T,Y,j),T.side=ir,T.needsUpdate=!0,At(T,Y,j),T.side=Yn):At(T,Y,j)}this.compile=function(T,Y,j=null){j===null&&(j=T),g=Xe.get(j),g.init(),L.push(g),j.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(g.pushLight(ee),ee.castShadow&&g.pushShadow(ee))}),T!==j&&T.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(g.pushLight(ee),ee.castShadow&&g.pushShadow(ee))}),g.setupLights(M._useLegacyLights);let te=new Set;return T.traverse(function(ee){let ze=ee.material;if(ze)if(Array.isArray(ze))for(let et=0;et<ze.length;et++){let ft=ze[et];Et(ft,j,ee),te.add(ft)}else Et(ze,j,ee),te.add(ze)}),L.pop(),g=null,te},this.compileAsync=function(T,Y,j=null){let te=this.compile(T,Y,j);return new Promise(ee=>{function ze(){if(te.forEach(function(et){_t.get(et).currentProgram.isReady()&&te.delete(et)}),te.size===0){ee(T);return}setTimeout(ze,10)}tt.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let ut=null;function Gt(T){ut&&ut(T)}function cn(){de.stop()}function K(){de.start()}let de=new Mf;de.setAnimationLoop(Gt),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(T){ut=T,pt.setAnimationLoop(T),T===null?de.stop():de.start()},pt.addEventListener("sessionstart",cn),pt.addEventListener("sessionend",K),this.render=function(T,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(Y),Y=pt.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,Y,N),g=Xe.get(T,L.length),g.init(),L.push(g),He.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),W.setFromProjectionMatrix(He),Pe=this.localClippingEnabled,oe=nt.init(this.clippingPlanes,Pe),v=Ne.get(T,d.length),v.init(),d.push(v),me(T,Y,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(ue,re),this.info.render.frame++,oe===!0&&nt.beginShadows();let j=g.state.shadowsArray;if(pe.render(j,T,Y),oe===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ct.render(v,T),g.setupLights(M._useLegacyLights),Y.isArrayCamera){let te=Y.cameras;for(let ee=0,ze=te.length;ee<ze;ee++){let et=te[ee];ct(v,T,et,et.viewport)}}else ct(v,T,Y);N!==null&&(R.updateMultisampleRenderTarget(N),R.updateRenderTargetMipmap(N)),T.isScene===!0&&T.onAfterRender(M,T,Y),ke.resetDefaultState(),le=-1,S=null,L.pop(),L.length>0?g=L[L.length-1]:g=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function me(T,Y,j,te){if(T.visible===!1)return;if(T.layers.test(Y.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(Y);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){te&&Ke.setFromMatrixPosition(T.matrixWorld).applyMatrix4(He);let et=Se.update(T),ft=T.material;ft.visible&&v.push(T,et,ft,j,Ke.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){let et=Se.update(T),ft=T.material;if(te&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ke.copy(T.boundingSphere.center)):(et.boundingSphere===null&&et.computeBoundingSphere(),Ke.copy(et.boundingSphere.center)),Ke.applyMatrix4(T.matrixWorld).applyMatrix4(He)),Array.isArray(ft)){let ot=et.groups;for(let Pt=0,St=ot.length;Pt<St;Pt++){let bt=ot[Pt],Zt=ft[bt.materialIndex];Zt&&Zt.visible&&v.push(T,et,Zt,j,Ke.z,bt)}}else ft.visible&&v.push(T,et,ft,j,Ke.z,null)}}let ze=T.children;for(let et=0,ft=ze.length;et<ft;et++)me(ze[et],Y,j,te)}function ct(T,Y,j,te){let ee=T.opaque,ze=T.transmissive,et=T.transparent;g.setupLightsView(j),oe===!0&&nt.setGlobalState(M.clippingPlanes,j),ze.length>0&&$e(ee,ze,Y,j),te&&Fe.viewport(C.copy(te)),ee.length>0&&Je(ee,Y,j),ze.length>0&&Je(ze,Y,j),et.length>0&&Je(et,Y,j),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function $e(T,Y,j,te){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;let ze=rt.isWebGL2;ge===null&&(ge=new si(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")?Xi:nr,minFilter:oo,samples:ze?4:0})),M.getDrawingBufferSize(lt),ze?ge.setSize(lt.x,lt.y):ge.setSize(cl(lt.x),cl(lt.y));let et=M.getRenderTarget();M.setRenderTarget(ge),M.getClearColor(Ae),k=M.getClearAlpha(),k<1&&M.setClearColor(16777215,.5),M.clear();let ft=M.toneMapping;M.toneMapping=tr,Je(T,j,te),R.updateMultisampleRenderTarget(ge),R.updateRenderTargetMipmap(ge);let ot=!1;for(let Pt=0,St=Y.length;Pt<St;Pt++){let bt=Y[Pt],Zt=bt.object,Xt=bt.geometry,gn=bt.material,Kn=bt.group;if(gn.side===Yn&&Zt.layers.test(te.layers)){let jt=gn.side;gn.side=Zn,gn.needsUpdate=!0,It(Zt,j,te,Xt,gn,Kn),gn.side=jt,gn.needsUpdate=!0,ot=!0}}ot===!0&&(R.updateMultisampleRenderTarget(ge),R.updateRenderTargetMipmap(ge)),M.setRenderTarget(et),M.setClearColor(Ae,k),M.toneMapping=ft}function Je(T,Y,j){let te=Y.isScene===!0?Y.overrideMaterial:null;for(let ee=0,ze=T.length;ee<ze;ee++){let et=T[ee],ft=et.object,ot=et.geometry,Pt=te===null?et.material:te,St=et.group;ft.layers.test(j.layers)&&It(ft,Y,j,ot,Pt,St)}}function It(T,Y,j,te,ee,ze){T.onBeforeRender(M,Y,j,te,ee,ze),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ee.onBeforeRender(M,Y,j,te,T,ze),ee.transparent===!0&&ee.side===Yn&&ee.forceSinglePass===!1?(ee.side=Zn,ee.needsUpdate=!0,M.renderBufferDirect(j,Y,te,ee,T,ze),ee.side=ir,ee.needsUpdate=!0,M.renderBufferDirect(j,Y,te,ee,T,ze),ee.side=Yn):M.renderBufferDirect(j,Y,te,ee,T,ze),T.onAfterRender(M,Y,j,te,ee,ze)}function At(T,Y,j){Y.isScene!==!0&&(Y=at);let te=_t.get(T),ee=g.state.lights,ze=g.state.shadowsArray,et=ee.state.version,ft=Ge.getParameters(T,ee.state,ze,Y,j),ot=Ge.getProgramCacheKey(ft),Pt=te.programs;te.environment=T.isMeshStandardMaterial?Y.environment:null,te.fog=Y.fog,te.envMap=(T.isMeshStandardMaterial?Q:E).get(T.envMap||te.environment),Pt===void 0&&(T.addEventListener("dispose",he),Pt=new Map,te.programs=Pt);let St=Pt.get(ot);if(St!==void 0){if(te.currentProgram===St&&te.lightsStateVersion===et)return Yt(T,ft),St}else ft.uniforms=Ge.getUniforms(T),T.onBuild(j,ft,M),T.onBeforeCompile(ft,M),St=Ge.acquireProgram(ft,ot),Pt.set(ot,St),te.uniforms=ft.uniforms;let bt=te.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(bt.clippingPlanes=nt.uniform),Yt(T,ft),te.needsLights=_n(T),te.lightsStateVersion=et,te.needsLights&&(bt.ambientLightColor.value=ee.state.ambient,bt.lightProbe.value=ee.state.probe,bt.directionalLights.value=ee.state.directional,bt.directionalLightShadows.value=ee.state.directionalShadow,bt.spotLights.value=ee.state.spot,bt.spotLightShadows.value=ee.state.spotShadow,bt.rectAreaLights.value=ee.state.rectArea,bt.ltc_1.value=ee.state.rectAreaLTC1,bt.ltc_2.value=ee.state.rectAreaLTC2,bt.pointLights.value=ee.state.point,bt.pointLightShadows.value=ee.state.pointShadow,bt.hemisphereLights.value=ee.state.hemi,bt.directionalShadowMap.value=ee.state.directionalShadowMap,bt.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,bt.spotShadowMap.value=ee.state.spotShadowMap,bt.spotLightMatrix.value=ee.state.spotLightMatrix,bt.spotLightMap.value=ee.state.spotLightMap,bt.pointShadowMap.value=ee.state.pointShadowMap,bt.pointShadowMatrix.value=ee.state.pointShadowMatrix),te.currentProgram=St,te.uniformsList=null,St}function $t(T){if(T.uniformsList===null){let Y=T.currentProgram.getUniforms();T.uniformsList=Ta.seqWithValue(Y.seq,T.uniforms)}return T.uniformsList}function Yt(T,Y){let j=_t.get(T);j.outputColorSpace=Y.outputColorSpace,j.batching=Y.batching,j.instancing=Y.instancing,j.instancingColor=Y.instancingColor,j.skinning=Y.skinning,j.morphTargets=Y.morphTargets,j.morphNormals=Y.morphNormals,j.morphColors=Y.morphColors,j.morphTargetsCount=Y.morphTargetsCount,j.numClippingPlanes=Y.numClippingPlanes,j.numIntersection=Y.numClipIntersection,j.vertexAlphas=Y.vertexAlphas,j.vertexTangents=Y.vertexTangents,j.toneMapping=Y.toneMapping}function fn(T,Y,j,te,ee){Y.isScene!==!0&&(Y=at),R.resetTextureUnits();let ze=Y.fog,et=te.isMeshStandardMaterial?Y.environment:null,ft=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Us,ot=(te.isMeshStandardMaterial?Q:E).get(te.envMap||et),Pt=te.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,St=!!j.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),bt=!!j.morphAttributes.position,Zt=!!j.morphAttributes.normal,Xt=!!j.morphAttributes.color,gn=tr;te.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(gn=M.toneMapping);let Kn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,jt=Kn!==void 0?Kn.length:0,mt=_t.get(te),Oi=g.state.lights;if(oe===!0&&(Pe===!0||T!==S)){let Un=T===S&&te.id===le;nt.setState(te,T,Un)}let We=!1;te.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==Oi.state.version||mt.outputColorSpace!==ft||ee.isBatchedMesh&&mt.batching===!1||!ee.isBatchedMesh&&mt.batching===!0||ee.isInstancedMesh&&mt.instancing===!1||!ee.isInstancedMesh&&mt.instancing===!0||ee.isSkinnedMesh&&mt.skinning===!1||!ee.isSkinnedMesh&&mt.skinning===!0||ee.isInstancedMesh&&mt.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&mt.instancingColor===!1&&ee.instanceColor!==null||mt.envMap!==ot||te.fog===!0&&mt.fog!==ze||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==nt.numPlanes||mt.numIntersection!==nt.numIntersection)||mt.vertexAlphas!==Pt||mt.vertexTangents!==St||mt.morphTargets!==bt||mt.morphNormals!==Zt||mt.morphColors!==Xt||mt.toneMapping!==gn||rt.isWebGL2===!0&&mt.morphTargetsCount!==jt)&&(We=!0):(We=!0,mt.__version=te.version);let $n=mt.currentProgram;We===!0&&($n=At(te,Y,ee));let us=!1,bn=!1,Fi=!1,dn=$n.getUniforms(),Ai=mt.uniforms;if(Fe.useProgram($n.program)&&(us=!0,bn=!0,Fi=!0),te.id!==le&&(le=te.id,bn=!0),us||S!==T){dn.setValue($,"projectionMatrix",T.projectionMatrix),dn.setValue($,"viewMatrix",T.matrixWorldInverse);let Un=dn.map.cameraPosition;Un!==void 0&&Un.setValue($,Ke.setFromMatrixPosition(T.matrixWorld)),rt.logarithmicDepthBuffer&&dn.setValue($,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&dn.setValue($,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,bn=!0,Fi=!0)}if(ee.isSkinnedMesh){dn.setOptional($,ee,"bindMatrix"),dn.setOptional($,ee,"bindMatrixInverse");let Un=ee.skeleton;Un&&(rt.floatVertexTextures?(Un.boneTexture===null&&Un.computeBoneTexture(),dn.setValue($,"boneTexture",Un.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ee.isBatchedMesh&&(dn.setOptional($,ee,"batchingTexture"),dn.setValue($,"batchingTexture",ee._matricesTexture,R));let Fn=j.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0&&rt.isWebGL2===!0)&&D.update(ee,j,$n),(bn||mt.receiveShadow!==ee.receiveShadow)&&(mt.receiveShadow=ee.receiveShadow,dn.setValue($,"receiveShadow",ee.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Ai.envMap.value=ot,Ai.flipEnvMap.value=ot.isCubeTexture&&ot.isRenderTargetTexture===!1?-1:1),bn&&(dn.setValue($,"toneMappingExposure",M.toneMappingExposure),mt.needsLights&&Mn(Ai,Fi),ze&&te.fog===!0&&Ue.refreshFogUniforms(Ai,ze),Ue.refreshMaterialUniforms(Ai,te,xe,ie,ge),Ta.upload($,$t(mt),Ai,R)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ta.upload($,$t(mt),Ai,R),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&dn.setValue($,"center",ee.center),dn.setValue($,"modelViewMatrix",ee.modelViewMatrix),dn.setValue($,"normalMatrix",ee.normalMatrix),dn.setValue($,"modelMatrix",ee.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let Un=te.uniformsGroups;for(let st=0,kr=Un.length;st<kr;st++)if(rt.isWebGL2){let fs=Un[st];Mt.update(fs,$n),Mt.bind(fs,$n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $n}function Mn(T,Y){T.ambientLightColor.needsUpdate=Y,T.lightProbe.needsUpdate=Y,T.directionalLights.needsUpdate=Y,T.directionalLightShadows.needsUpdate=Y,T.pointLights.needsUpdate=Y,T.pointLightShadows.needsUpdate=Y,T.spotLights.needsUpdate=Y,T.spotLightShadows.needsUpdate=Y,T.rectAreaLights.needsUpdate=Y,T.hemisphereLights.needsUpdate=Y}function _n(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,Y,j){_t.get(T.texture).__webglTexture=Y,_t.get(T.depthTexture).__webglTexture=j;let te=_t.get(T);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=j===void 0,te.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,Y){let j=_t.get(T);j.__webglFramebuffer=Y,j.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(T,Y=0,j=0){N=T,P=Y,F=j;let te=!0,ee=null,ze=!1,et=!1;if(T){let ot=_t.get(T);ot.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer($.FRAMEBUFFER,null),te=!1):ot.__webglFramebuffer===void 0?R.setupRenderTarget(T):ot.__hasExternalTextures&&R.rebindTextures(T,_t.get(T.texture).__webglTexture,_t.get(T.depthTexture).__webglTexture);let Pt=T.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(et=!0);let St=_t.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(St[Y])?ee=St[Y][j]:ee=St[Y],ze=!0):rt.isWebGL2&&T.samples>0&&R.useMultisampledRTT(T)===!1?ee=_t.get(T).__webglMultisampledFramebuffer:Array.isArray(St)?ee=St[j]:ee=St,C.copy(T.viewport),O.copy(T.scissor),ae=T.scissorTest}else C.copy(_e).multiplyScalar(xe).floor(),O.copy(Re).multiplyScalar(xe).floor(),ae=I;if(Fe.bindFramebuffer($.FRAMEBUFFER,ee)&&rt.drawBuffers&&te&&Fe.drawBuffers(T,ee),Fe.viewport(C),Fe.scissor(O),Fe.setScissorTest(ae),ze){let ot=_t.get(T.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ot.__webglTexture,j)}else if(et){let ot=_t.get(T.texture),Pt=Y||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,ot.__webglTexture,j||0,Pt)}le=-1},this.readRenderTargetPixels=function(T,Y,j,te,ee,ze,et){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=_t.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&et!==void 0&&(ft=ft[et]),ft){Fe.bindFramebuffer($.FRAMEBUFFER,ft);try{let ot=T.texture,Pt=ot.format,St=ot.type;if(Pt!==Mi&&be.convert(Pt)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let bt=St===Xi&&(tt.has("EXT_color_buffer_half_float")||rt.isWebGL2&&tt.has("EXT_color_buffer_float"));if(St!==nr&&be.convert(St)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&!(St===er&&(rt.isWebGL2||tt.has("OES_texture_float")||tt.has("WEBGL_color_buffer_float")))&&!bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=T.width-te&&j>=0&&j<=T.height-ee&&$.readPixels(Y,j,te,ee,be.convert(Pt),be.convert(St),ze)}finally{let ot=N!==null?_t.get(N).__webglFramebuffer:null;Fe.bindFramebuffer($.FRAMEBUFFER,ot)}}},this.copyFramebufferToTexture=function(T,Y,j=0){let te=Math.pow(2,-j),ee=Math.floor(Y.image.width*te),ze=Math.floor(Y.image.height*te);R.setTexture2D(Y,0),$.copyTexSubImage2D($.TEXTURE_2D,j,0,0,T.x,T.y,ee,ze),Fe.unbindTexture()},this.copyTextureToTexture=function(T,Y,j,te=0){let ee=Y.image.width,ze=Y.image.height,et=be.convert(j.format),ft=be.convert(j.type);R.setTexture2D(j,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,j.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,j.unpackAlignment),Y.isDataTexture?$.texSubImage2D($.TEXTURE_2D,te,T.x,T.y,ee,ze,et,ft,Y.image.data):Y.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,te,T.x,T.y,Y.mipmaps[0].width,Y.mipmaps[0].height,et,Y.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,te,T.x,T.y,et,ft,Y.image),te===0&&j.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(T,Y,j,te,ee=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ze=T.max.x-T.min.x+1,et=T.max.y-T.min.y+1,ft=T.max.z-T.min.z+1,ot=be.convert(te.format),Pt=be.convert(te.type),St;if(te.isData3DTexture)R.setTexture3D(te,0),St=$.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)R.setTexture2DArray(te,0),St=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,te.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,te.unpackAlignment);let bt=$.getParameter($.UNPACK_ROW_LENGTH),Zt=$.getParameter($.UNPACK_IMAGE_HEIGHT),Xt=$.getParameter($.UNPACK_SKIP_PIXELS),gn=$.getParameter($.UNPACK_SKIP_ROWS),Kn=$.getParameter($.UNPACK_SKIP_IMAGES),jt=j.isCompressedTexture?j.mipmaps[ee]:j.image;$.pixelStorei($.UNPACK_ROW_LENGTH,jt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,jt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,T.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,T.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,T.min.z),j.isDataTexture||j.isData3DTexture?$.texSubImage3D(St,ee,Y.x,Y.y,Y.z,ze,et,ft,ot,Pt,jt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(St,ee,Y.x,Y.y,Y.z,ze,et,ft,ot,jt.data)):$.texSubImage3D(St,ee,Y.x,Y.y,Y.z,ze,et,ft,ot,Pt,jt),$.pixelStorei($.UNPACK_ROW_LENGTH,bt),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Zt),$.pixelStorei($.UNPACK_SKIP_PIXELS,Xt),$.pixelStorei($.UNPACK_SKIP_ROWS,gn),$.pixelStorei($.UNPACK_SKIP_IMAGES,Kn),ee===0&&te.generateMipmaps&&$.generateMipmap(St),Fe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Fe.unbindTexture()},this.resetState=function(){P=0,F=0,N=null,Fe.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ls}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===vh?"display-p3":"srgb",t.unpackColorSpace=en.workingColorSpace===Il?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Kt?Dr:pf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Dr?Kt:Us}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},$c=class extends uo{};$c.prototype.isWebGL1Renderer=!0;var yl=class extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},jc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Is()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Is()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Is()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ni=new U,Ml=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ni.fromBufferAttribute(this,t),ni.applyMatrix4(e),this.setXYZ(t,ni.x,ni.y,ni.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ni.fromBufferAttribute(this,t),ni.applyNormalMatrix(e),this.setXYZ(t,ni.x,ni.y,ni.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ni.fromBufferAttribute(this,t),ni.transformDirection(e),this.setXYZ(t,ni.x,ni.y,ni.z);return this}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=as(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=as(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=as(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=as(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ui(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fi=class extends sr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xa,$a=new U,_a=new U,va=new U,ya=new Ye,ja=new Ye,Af=new zt,Ko=new U,Qa=new U,$o=new U,Ju=new Ye,Ec=new Ye,Ku=new Ye,wi=class extends Jn{constructor(e=new fi){if(super(),this.isSprite=!0,this.type="Sprite",xa===void 0){xa=new bi;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jc(t,5);xa.setIndex([0,1,2,0,2,3]),xa.setAttribute("position",new Ml(n,3,0,!1)),xa.setAttribute("uv",new Ml(n,2,3,!1))}this.geometry=xa,this.material=e,this.center=new Ye(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_a.setFromMatrixScale(this.matrixWorld),Af.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),va.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_a.multiplyScalar(-va.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;jo(Ko.set(-.5,-.5,0),va,o,_a,s,r),jo(Qa.set(.5,-.5,0),va,o,_a,s,r),jo($o.set(.5,.5,0),va,o,_a,s,r),Ju.set(0,0),Ec.set(1,0),Ku.set(1,1);let a=e.ray.intersectTriangle(Ko,Qa,$o,!1,$a);if(a===null&&(jo(Qa.set(-.5,.5,0),va,o,_a,s,r),Ec.set(0,1),a=e.ray.intersectTriangle(Ko,$o,Qa,!1,$a),a===null))return;let c=e.ray.origin.distanceTo($a);c<e.near||c>e.far||t.push({distance:c,point:$a.clone(),uv:Lr.getInterpolation($a,Ko,Qa,$o,Ju,Ec,Ku,new Ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function jo(i,e,t,n,s,r){ya.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ja.x=r*ya.x-s*ya.y,ja.y=s*ya.x+r*ya.y):ja.copy(ya),i.copy(e),i.x+=ja.x,i.y+=ja.y,i.applyMatrix4(Af)}var El=class extends Si{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Pn,h=Pn,u,p){super(null,o,a,c,l,h,s,r,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Or=class extends ui{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ma=new zt,$u=new zt,Qo=[],ju=new Ds,zx=new zt,eo=new vt,to=new Nr,ln=class extends vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Or(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ds),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ma),ju.copy(e.boundingBox).applyMatrix4(Ma),this.boundingBox.union(ju)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ma),to.copy(e.boundingSphere).applyMatrix4(Ma),this.boundingSphere.union(to)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(eo.geometry=this.geometry,eo.material=this.material,eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(n),e.ray.intersectsSphere(to)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ma),$u.multiplyMatrices(n,Ma),eo.matrixWorld=$u,eo.raycast(e,Qo);for(let o=0,a=Qo.length;o<a;o++){let c=Qo[o];c.instanceId=r,c.object=this,t.push(c)}Qo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Or(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ai=class extends Si{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qc=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,x=(o-h)/p;return(s+x)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Ye:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new U,s=[],r=[],o=[],a=new U,c=new zt;for(let x=0;x<=e;x++){let y=x/e;s[x]=this.getTangentAt(y,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let x=1;x<=e;x++){if(r[x]=r[x-1].clone(),o[x]=o[x-1].clone(),a.crossVectors(s[x-1],s[x]),a.length()>Number.EPSILON){a.normalize();let y=Math.acos(On(s[x-1].dot(s[x]),-1,1));r[x].applyMatrix4(c.makeRotationAxis(a,y))}o[x].crossVectors(s[x],r[x])}if(t===!0){let x=Math.acos(On(r[0].dot(r[e]),-1,1));x/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(x=-x);for(let y=1;y<=e;y++)r[y].applyMatrix4(c.makeRotationAxis(s[y],x*y)),o[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Eh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let p=(o-r)/l-(a-r)/(l+h)+(a-o)/h,x=(a-o)/h-(c-o)/(h+u)+(c-a)/u;p*=h,x*=h,s(o,a,p,x)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var el=new U,Sc=new Eh,bc=new Eh,wc=new Eh,Sl=class extends Qc{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(el.subVectors(s[0],s[1]).add(s[0]),l=el);let u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(el.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=el),this.curveType==="centripetal"||this.curveType==="chordal"){let x=this.curveType==="chordal"?.5:.25,y=Math.pow(l.distanceToSquared(u),x),v=Math.pow(u.distanceToSquared(p),x),g=Math.pow(p.distanceToSquared(h),x);v<1e-4&&(v=1),y<1e-4&&(y=v),g<1e-4&&(g=v),Sc.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,y,v,g),bc.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,y,v,g),wc.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,y,v,g)}else this.curveType==="catmullrom"&&(Sc.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),bc.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),wc.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return n.set(Sc.calc(c),bc.calc(c),wc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var fo=class i extends bi{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],x=[],y=0,v=[],g=n/2,d=0;L(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new En(u,3)),this.setAttribute("normal",new En(p,3)),this.setAttribute("uv",new En(x,2));function L(){let H=new U,P=new U,F=0,N=(t-e)/n;for(let le=0;le<=r;le++){let S=[],C=le/r,O=C*(t-e)+e;for(let ae=0;ae<=s;ae++){let Ae=ae/s,k=Ae*c+a,J=Math.sin(k),ie=Math.cos(k);P.x=O*J,P.y=-C*n+g,P.z=O*ie,u.push(P.x,P.y,P.z),H.set(J,N,ie).normalize(),p.push(H.x,H.y,H.z),x.push(Ae,1-C),S.push(y++)}v.push(S)}for(let le=0;le<s;le++)for(let S=0;S<r;S++){let C=v[S][le],O=v[S+1][le],ae=v[S+1][le+1],Ae=v[S][le+1];h.push(C,O,Ae),h.push(O,ae,Ae),F+=6}l.addGroup(d,F,0),d+=F}function M(H){let P=y,F=new Ye,N=new U,le=0,S=H===!0?e:t,C=H===!0?1:-1;for(let ae=1;ae<=s;ae++)u.push(0,g*C,0),p.push(0,C,0),x.push(.5,.5),y++;let O=y;for(let ae=0;ae<=s;ae++){let k=ae/s*c+a,J=Math.cos(k),ie=Math.sin(k);N.x=S*ie,N.y=g*C,N.z=S*J,u.push(N.x,N.y,N.z),p.push(0,C,0),F.x=J*.5+.5,F.y=ie*.5*C+.5,x.push(F.x,F.y),y++}for(let ae=0;ae<s;ae++){let Ae=P+ae,k=O+ae;H===!0?h.push(k,k+1,Ae):h.push(k+1,k,Ae),le+=3}l.addGroup(d,le,H===!0?1:2),d+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},rr=class i extends fo{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var po=class i extends bi{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new U,p=new U,x=[],y=[],v=[],g=[];for(let d=0;d<=n;d++){let L=[],M=d/n,H=0;d===0&&o===0?H=.5/t:d===n&&c===Math.PI&&(H=-.5/t);for(let P=0;P<=t;P++){let F=P/t;u.x=-e*Math.cos(s+F*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+F*r)*Math.sin(o+M*a),y.push(u.x,u.y,u.z),p.copy(u).normalize(),v.push(p.x,p.y,p.z),g.push(F+H,1-M),L.push(l++)}h.push(L)}for(let d=0;d<n;d++)for(let L=0;L<t;L++){let M=h[d][L+1],H=h[d][L],P=h[d+1][L],F=h[d+1][L+1];(d!==0||o>0)&&x.push(M,H,F),(d!==n-1||c<Math.PI)&&x.push(H,P,F)}this.setIndex(x),this.setAttribute("position",new En(y,3)),this.setAttribute("normal",new En(v,3)),this.setAttribute("uv",new En(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var bl=class i extends bi{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new U,u=new U,p=new U;for(let x=0;x<=n;x++)for(let y=0;y<=s;y++){let v=y/s*r,g=x/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(y/s),l.push(x/n)}for(let x=1;x<=n;x++)for(let y=1;y<=s;y++){let v=(s+1)*x+y-1,g=(s+1)*(x-1)+y-1,d=(s+1)*(x-1)+y,L=(s+1)*x+y;o.push(v,g,L),o.push(g,d,L)}this.setIndex(o),this.setAttribute("position",new En(a,3)),this.setAttribute("normal",new En(c,3)),this.setAttribute("uv",new En(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var wl=class extends xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var qt=class extends sr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mf,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function tl(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Bx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ua=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},eh=class extends Ua{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:au,endingEnd:au}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ou:r=e,a=2*t-n;break;case lu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ou:o=e,c=2*n-t;break;case lu:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,x=this._weightNext,y=(n-t)/(s-t),v=y*y,g=v*y,d=-p*g+2*p*v-p*y,L=(1+p)*g+(-1.5-2*p)*v+(-.5+p)*y+1,M=(-1-x)*g+(1.5+x)*v+.5*y,H=x*g-x*v;for(let P=0;P!==a;++P)r[P]=d*o[h+P]+L*o[l+P]+M*o[c+P]+H*o[u+P];return r}},th=class extends Ua{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let p=0;p!==a;++p)r[p]=o[l+p]*u+o[c+p]*h;return r}},nh=class extends Ua{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=tl(t,this.TimeBufferType),this.values=tl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:tl(e.times,Array),values:tl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case il:t=this.InterpolantFactoryMethodDiscrete;break;case sl:t=this.InterpolantFactoryMethodLinear;break;case Ql:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return il;case this.InterpolantFactoryMethodLinear:return sl;case this.InterpolantFactoryMethodSmooth:return Ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Bx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ql,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,p=u-n,x=u+n;for(let y=0;y!==n;++y){let v=t[u+y];if(v!==t[p+y]||v!==t[x+y]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,p=o*n;for(let x=0;x!==n;++x)t[p+x]=t[u+x]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};qi.prototype.TimeBufferType=Float32Array;qi.prototype.ValueBufferType=Float32Array;qi.prototype.DefaultInterpolation=sl;var Fr=class extends qi{};Fr.prototype.ValueTypeName="bool";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=il;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var ih=class extends qi{};ih.prototype.ValueTypeName="color";var sh=class extends qi{};sh.prototype.ValueTypeName="number";var rh=class extends Ua{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Rn.slerpFlat(r,0,o,l-a,o,l,c);return r}},mo=class extends qi{InterpolantFactoryMethodLinear(e){return new rh(this.times,this.values,this.getValueSize(),e)}};mo.prototype.ValueTypeName="quaternion";mo.prototype.DefaultInterpolation=sl;mo.prototype.InterpolantFactoryMethodSmooth=void 0;var zr=class extends qi{};zr.prototype.ValueTypeName="string";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=il;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;var ah=class extends qi{};ah.prototype.ValueTypeName="vector";var oh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){let x=l[u],y=l[u+1];if(x.global&&(x.lastIndex=0),x.test(h))return y}return null}}},Hx=new oh,lh=class{constructor(e){this.manager=e!==void 0?e:Hx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};lh.DEFAULT_MATERIAL_NAME="__DEFAULT";var go=class extends Jn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Tl=class extends go{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Tc=new zt,Qu=new U,ef=new U,Al=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ho,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Qu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qu),ef.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ef),t.updateMatrixWorld(),Tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var tf=new zt,no=new U,Ac=new U,ch=class extends Al{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new nn(2,1,1,1),new nn(0,1,1,1),new nn(3,1,1,1),new nn(1,1,1,1),new nn(3,0,1,1),new nn(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),no.setFromMatrixPosition(e.matrixWorld),n.position.copy(no),Ac.copy(n.position),Ac.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ac),n.updateMatrixWorld(),s.makeTranslation(-no.x,-no.y,-no.z),tf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tf)}},xo=class extends go{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ch}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},hh=class extends Al{constructor(){super(new Ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rl=class extends go{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jn.DEFAULT_UP),this.updateMatrix(),this.target=new Jn,this.shadow=new hh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Cl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=nf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function nf(){return(typeof performance>"u"?Date:performance).now()}var Sh="\\[\\]\\.:\\/",kx=new RegExp("["+Sh+"]","g"),bh="[^"+Sh+"]",Vx="[^"+Sh.replace("\\.","")+"]",Gx=/((?:WC+[\/:])*)/.source.replace("WC",bh),Wx=/(WCOD+)?/.source.replace("WCOD",Vx),Xx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bh),qx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bh),Yx=new RegExp("^"+Gx+Wx+Xx+qx+"$"),Zx=["material","materials","bones","map"],uh=class{constructor(e,t,n){let s=n||mn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kx,"")}static parseTrackName(e){let t=Yx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Zx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mn.Composite=uh;mn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mn.prototype.GetterByBindingType=[mn.prototype._getValue_direct,mn.prototype._getValue_array,mn.prototype._getValue_arrayElement,mn.prototype._getValue_toArray];mn.prototype.SetterByBindingTypeAndVersioning=[[mn.prototype._setValue_direct,mn.prototype._setValue_direct_setNeedsUpdate,mn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_array,mn.prototype._setValue_array_setNeedsUpdate,mn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_arrayElement,mn.prototype._setValue_arrayElement_setNeedsUpdate,mn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_fromArray,mn.prototype._setValue_fromArray_setNeedsUpdate,mn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var r_=new Float32Array(1);var Pl=class{constructor(e,t,n=0,s=1/0){this.ray=new Pa(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return fh(e,this,n,t),n.sort(sf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)fh(e[s],this,n,t);return n.sort(sf),n}};function sf(i,e){return i.distance-e.distance}function fh(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)fh(s[r],e,t,!0)}}var _o=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(On(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Rf={type:"change"},Th={type:"start"},Cf={type:"end"},Dl=new Pa,Pf=new Gi,Jx=Math.cos(70*xf.DEG2RAD),Nl=class extends ls{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Br.ROTATE,MIDDLE:Br.DOLLY,RIGHT:Br.PAN},this.touches={ONE:Hr.ROTATE,TWO:Hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",Se),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Se),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Rf),n.update(),r=s.NONE},this.update=(function(){let D=new U,Ee=new Rn().setFromUnitVectors(e.up,new U(0,1,0)),Te=Ee.clone().invert(),be=new U,ke=new Rn,Mt=new U,dt=2*Math.PI;return function(fe=null){let G=n.object.position;D.copy(G).sub(n.target),D.applyQuaternion(Ee),a.setFromVector3(D),n.autoRotate&&r===s.NONE&&O(S(fe)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Ie=n.minAzimuthAngle,he=n.maxAzimuthAngle;isFinite(Ie)&&isFinite(he)&&(Ie<-Math.PI?Ie+=dt:Ie>Math.PI&&(Ie-=dt),he<-Math.PI?he+=dt:he>Math.PI&&(he-=dt),Ie<=he?a.theta=Math.max(Ie,Math.min(he,a.theta)):a.theta=a.theta>(Ie+he)/2?Math.max(Ie,a.theta):Math.min(he,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&F||n.object.isOrthographicCamera?a.radius=re(a.radius):a.radius=re(a.radius*l),D.setFromSpherical(a),D.applyQuaternion(Te),G.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let qe=!1;if(n.zoomToCursor&&F){let Ze=null;if(n.object.isPerspectiveCamera){let Et=D.length();Ze=re(Et*l);let ut=Et-Ze;n.object.position.addScaledVector(H,ut),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let Et=new U(P.x,P.y,0);Et.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),qe=!0;let ut=new U(P.x,P.y,0);ut.unproject(n.object),n.object.position.sub(ut).add(Et),n.object.updateMatrixWorld(),Ze=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ze!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ze).add(n.object.position):(Dl.origin.copy(n.object.position),Dl.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Dl.direction))<Jx?e.lookAt(n.target):(Pf.setFromNormalAndCoplanarPoint(n.object.up,n.target),Dl.intersectPlane(Pf,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),qe=!0);return l=1,F=!1,qe||be.distanceToSquared(n.object.position)>o||8*(1-ke.dot(n.object.quaternion))>o||Mt.distanceToSquared(n.target)>0?(n.dispatchEvent(Rf),be.copy(n.object.position),ke.copy(n.object.quaternion),Mt.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ne),n.domElement.removeEventListener("pointerdown",_t),n.domElement.removeEventListener("pointercancel",E),n.domElement.removeEventListener("wheel",ve),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",E),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Se),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new _o,c=new _o,l=1,h=new U,u=new Ye,p=new Ye,x=new Ye,y=new Ye,v=new Ye,g=new Ye,d=new Ye,L=new Ye,M=new Ye,H=new U,P=new Ye,F=!1,N=[],le={};function S(D){return D!==null?2*Math.PI/60*n.autoRotateSpeed*D:2*Math.PI/60/60*n.autoRotateSpeed}function C(D){let Ee=Math.abs(D)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*Ee)}function O(D){c.theta-=D}function ae(D){c.phi-=D}let Ae=(function(){let D=new U;return function(Te,be){D.setFromMatrixColumn(be,0),D.multiplyScalar(-Te),h.add(D)}})(),k=(function(){let D=new U;return function(Te,be){n.screenSpacePanning===!0?D.setFromMatrixColumn(be,1):(D.setFromMatrixColumn(be,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(Te),h.add(D)}})(),J=(function(){let D=new U;return function(Te,be){let ke=n.domElement;if(n.object.isPerspectiveCamera){let Mt=n.object.position;D.copy(Mt).sub(n.target);let dt=D.length();dt*=Math.tan(n.object.fov/2*Math.PI/180),Ae(2*Te*dt/ke.clientHeight,n.object.matrix),k(2*be*dt/ke.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Ae(Te*(n.object.right-n.object.left)/n.object.zoom/ke.clientWidth,n.object.matrix),k(be*(n.object.top-n.object.bottom)/n.object.zoom/ke.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function ie(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function xe(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ue(D,Ee){if(!n.zoomToCursor)return;F=!0;let Te=n.domElement.getBoundingClientRect(),be=D-Te.left,ke=Ee-Te.top,Mt=Te.width,dt=Te.height;P.x=be/Mt*2-1,P.y=-(ke/dt)*2+1,H.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function re(D){return Math.max(n.minDistance,Math.min(n.maxDistance,D))}function _e(D){u.set(D.clientX,D.clientY)}function Re(D){ue(D.clientX,D.clientX),d.set(D.clientX,D.clientY)}function I(D){y.set(D.clientX,D.clientY)}function W(D){p.set(D.clientX,D.clientY),x.subVectors(p,u).multiplyScalar(n.rotateSpeed);let Ee=n.domElement;O(2*Math.PI*x.x/Ee.clientHeight),ae(2*Math.PI*x.y/Ee.clientHeight),u.copy(p),n.update()}function oe(D){L.set(D.clientX,D.clientY),M.subVectors(L,d),M.y>0?ie(C(M.y)):M.y<0&&xe(C(M.y)),d.copy(L),n.update()}function Pe(D){v.set(D.clientX,D.clientY),g.subVectors(v,y).multiplyScalar(n.panSpeed),J(g.x,g.y),y.copy(v),n.update()}function ge(D){ue(D.clientX,D.clientY),D.deltaY<0?xe(C(D.deltaY)):D.deltaY>0&&ie(C(D.deltaY)),n.update()}function He(D){let Ee=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?ae(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(0,n.keyPanSpeed),Ee=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?ae(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(0,-n.keyPanSpeed),Ee=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(n.keyPanSpeed,0),Ee=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(-n.keyPanSpeed,0),Ee=!0;break}Ee&&(D.preventDefault(),n.update())}function lt(D){if(N.length===1)u.set(D.pageX,D.pageY);else{let Ee=Ct(D),Te=.5*(D.pageX+Ee.x),be=.5*(D.pageY+Ee.y);u.set(Te,be)}}function Ke(D){if(N.length===1)y.set(D.pageX,D.pageY);else{let Ee=Ct(D),Te=.5*(D.pageX+Ee.x),be=.5*(D.pageY+Ee.y);y.set(Te,be)}}function at(D){let Ee=Ct(D),Te=D.pageX-Ee.x,be=D.pageY-Ee.y,ke=Math.sqrt(Te*Te+be*be);d.set(0,ke)}function yt(D){n.enableZoom&&at(D),n.enablePan&&Ke(D)}function $(D){n.enableZoom&&at(D),n.enableRotate&&lt(D)}function Wt(D){if(N.length==1)p.set(D.pageX,D.pageY);else{let Te=Ct(D),be=.5*(D.pageX+Te.x),ke=.5*(D.pageY+Te.y);p.set(be,ke)}x.subVectors(p,u).multiplyScalar(n.rotateSpeed);let Ee=n.domElement;O(2*Math.PI*x.x/Ee.clientHeight),ae(2*Math.PI*x.y/Ee.clientHeight),u.copy(p)}function tt(D){if(N.length===1)v.set(D.pageX,D.pageY);else{let Ee=Ct(D),Te=.5*(D.pageX+Ee.x),be=.5*(D.pageY+Ee.y);v.set(Te,be)}g.subVectors(v,y).multiplyScalar(n.panSpeed),J(g.x,g.y),y.copy(v)}function rt(D){let Ee=Ct(D),Te=D.pageX-Ee.x,be=D.pageY-Ee.y,ke=Math.sqrt(Te*Te+be*be);L.set(0,ke),M.set(0,Math.pow(L.y/d.y,n.zoomSpeed)),ie(M.y),d.copy(L);let Mt=(D.pageX+Ee.x)*.5,dt=(D.pageY+Ee.y)*.5;ue(Mt,dt)}function Fe(D){n.enableZoom&&rt(D),n.enablePan&&tt(D)}function Vt(D){n.enableZoom&&rt(D),n.enableRotate&&Wt(D)}function _t(D){n.enabled!==!1&&(N.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",R),n.domElement.addEventListener("pointerup",E)),Xe(D),D.pointerType==="touch"?Ge(D):Q(D))}function R(D){n.enabled!==!1&&(D.pointerType==="touch"?Ue(D):we(D))}function E(D){nt(D),N.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",E)),n.dispatchEvent(Cf),r=s.NONE}function Q(D){let Ee;switch(D.button){case 0:Ee=n.mouseButtons.LEFT;break;case 1:Ee=n.mouseButtons.MIDDLE;break;case 2:Ee=n.mouseButtons.RIGHT;break;default:Ee=-1}switch(Ee){case Br.DOLLY:if(n.enableZoom===!1)return;Re(D),r=s.DOLLY;break;case Br.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;I(D),r=s.PAN}else{if(n.enableRotate===!1)return;_e(D),r=s.ROTATE}break;case Br.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;_e(D),r=s.ROTATE}else{if(n.enablePan===!1)return;I(D),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Th)}function we(D){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;W(D);break;case s.DOLLY:if(n.enableZoom===!1)return;oe(D);break;case s.PAN:if(n.enablePan===!1)return;Pe(D);break}}function ve(D){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(D.preventDefault(),n.dispatchEvent(Th),ge(D),n.dispatchEvent(Cf))}function Se(D){n.enabled===!1||n.enablePan===!1||He(D)}function Ge(D){switch(pe(D),N.length){case 1:switch(n.touches.ONE){case Hr.ROTATE:if(n.enableRotate===!1)return;lt(D),r=s.TOUCH_ROTATE;break;case Hr.PAN:if(n.enablePan===!1)return;Ke(D),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Hr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;yt(D),r=s.TOUCH_DOLLY_PAN;break;case Hr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;$(D),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Th)}function Ue(D){switch(pe(D),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Wt(D),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;tt(D),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Fe(D),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Vt(D),n.update();break;default:r=s.NONE}}function Ne(D){n.enabled!==!1&&D.preventDefault()}function Xe(D){N.push(D.pointerId)}function nt(D){delete le[D.pointerId];for(let Ee=0;Ee<N.length;Ee++)if(N[Ee]==D.pointerId){N.splice(Ee,1);return}}function pe(D){let Ee=le[D.pointerId];Ee===void 0&&(Ee=new Ye,le[D.pointerId]=Ee),Ee.set(D.pageX,D.pageY)}function Ct(D){let Ee=D.pointerId===N[0]?N[1]:N[0];return le[Ee]}n.domElement.addEventListener("contextmenu",Ne),n.domElement.addEventListener("pointerdown",_t),n.domElement.addEventListener("pointercancel",E),n.domElement.addEventListener("wheel",ve,{passive:!1}),this.update()}};var Ol={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ti=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Kx=new Ia(-1,1,1,-1,0,1),Ah=class extends bi{constructor(){super(),this.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new En([0,2,0,0,2,0],2))}},$x=new Ah,or=class{constructor(e){this._mesh=new vt($x,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Kx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Fl=class extends Ti{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof xn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ar.clone(e.uniforms),this.material=new xn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new or(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var yo=class extends Ti{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},zl=class extends Ti{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Bl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ye);this._width=n.width,this._height=n.height,t=new si(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fl(Ol),this.copyPass.material.blending=os,this.clock=new Cl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}yo!==void 0&&(o instanceof yo?n=!0:o instanceof zl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Hl=class extends Ti{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new De}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Lf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new De(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Na=class i extends Ti{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ye(e.x,e.y):new Ye(256,256),this.clearColor=new De(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new si(r,o,{type:Xi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let p=new si(r,o,{type:Xi});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let x=new si(r,o,{type:Xi});x.texture.name="UnrealBloomPass.v"+u,x.texture.generateMipmaps=!1,this.renderTargetsVertical.push(x),r=Math.round(r/2),o=Math.round(o/2)}let a=Lf;this.highPassUniforms=ar.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ye(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ol;this.copyUniforms=ar.clone(h.uniforms),this.blendMaterial=new xn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ei,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new De,this.oldClearAlpha=1,this.basic=new Ut,this.fsQuad=new or(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ye(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new xn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ye(.5,.5)},direction:{value:new Ye(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new xn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Na.BlurDirectionX=new Ye(1,0);Na.BlurDirectionY=new Ye(0,1);var If={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var kl=class extends Ti{constructor(){super();let e=If;this.uniforms=ar.clone(e.uniforms),this.material=new wl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new or(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},en.getTransfer(this._outputColorSpace)===on&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ph?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===mh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===gh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Yi=Math.PI*2;function Uf(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}var Bt={lot:0,res:1,apt:2,ind:3,mall:4,park:5,golf:6,air:7,port:8,arena:9,hwy:10,ring:11},an={rw:{x0:-492,x1:-196,z:-280,hw:9},twz:-253,apron:{x0:-440,x1:-276,z0:-249,z1:-212},field:{x:-220,z:32,hx:19,hz:12},port:{x0:-40,x1:84,z0:-292,z1:-148},lake:{x:-76,z:176,w:40,d:32},hwyX:-132,hwyZ:122,isle:{x:208,z:128,r:40},metro:{x0:-96,x1:74,z0:-96,z1:96,r:16,y:12}},Vl=i=>i*36+14;function Df(i,e){let t=Uf(4242),n=33,s=new Uint8Array(n*n*4),r=new Set,o=(h,u,p)=>{if(Math.abs(h)>16||Math.abs(u)>16)return;let x=((u+16)*n+h+16)*4;s[x]=p,s[x+3]=255},a=(h,u)=>Math.abs(h)>16||Math.abs(u)>16?0:s[((u+16)*n+h+16)*4],c=(h,u,p,x,y)=>{for(let v=h;v<=u;v++)for(let g=p;g<=x;g++)o(v,g,y),r.add(v+","+g)};c(-14,-6,-9,-6,Bt.air),c(-1,1,-8,-5,Bt.port),c(-7,-6,0,1,Bt.arena),c(-9,-7,5,7,Bt.golf),c(-3,-2,4,5,Bt.park),c(-5,-5,-2,-2,Bt.mall),c(-10,-10,2,2,Bt.mall),c(-1,-1,8,8,Bt.mall);for(let h=-16;h<=16;h++)r.has("-4,"+h)||c(-4,-4,h,h,Bt.hwy),h<=1&&!r.has(h+",3")&&c(h,h,3,3,Bt.hwy);for(let h=-16;h<=16;h++)for(let u=-16;u<=16;u++){if(r.has(h+","+u))continue;let p=Vl(h),x=Vl(u),y=Math.hypot(p,x);if(Math.abs(p)<i+26&&Math.abs(x)<i+26){o(h,u,Bt.ring);continue}if(p>e+12||y>600){o(h,u,Bt.lot);continue}let v=t(),g=u<=-5||h<=-10,d=u>=4;o(h,u,g?v<.3?Bt.ind:v<.66?Bt.res:v<.8?Bt.apt:v<.9?Bt.park:Bt.lot:d?v<.58?Bt.res:v<.74?Bt.apt:v<.88?Bt.park:Bt.lot:v<.38?Bt.apt:v<.78?Bt.res:v<.9?Bt.park:Bt.lot)}let l=new El(s,n,n,Mi);return l.magFilter=l.minFilter=Pn,l.needsUpdate=!0,{tex:l,get:a}}function Nf(i){let{scene:e,col:t,voxMesh:n,boxGeo:s,mobile:r,HALF:o,PITCH:a,NB:c,BEACH_X:l,PIER_Z:h,roofs:u,ants:p,site:x,zones:y,spark:v,seaMat:g,cam:d,rr:L,loadIcon:M,mono:H}=i,P=Uf(9137),F=r,N=new zt,le=new zt,S=new Rn,C=new U,O=new U,ae=new cs(0,0,0,"YXZ"),Ae=new De,k=new U,J=new U,ie=new U,xe=new U(0,1,0),ue=new U(0,-1,0),re=new U(0,0,1),_e=new zt().makeScale(0,0,0),Re=new De(1,1,1),I=(f,b,A,X,se,Le,it,je,ht,Lt)=>({x:f,y:b,z:A,w:X,h:se,d:Le,c:typeof it=="string"?t(it):it,ry:je,rx:ht,rz:Lt}),W=(f,b,A)=>new De(f,b,A),oe=f=>f[Math.floor(P()*f.length)],Pe=(f,b,A)=>new U(f,b,A),ge={x:0,y:0,z:0,yaw:0,pitch:0},He={x:0,y:0,z:0,yaw:0,pitch:0},lt=new Hn;e.add(lt);function Ke(f,b=lt){let A=new ln(s(),new Ut({toneMapped:!1}),Math.max(1,f.length));return f.forEach((X,se)=>{S.setFromEuler(ae.set(X.rx||0,X.ry||0,X.rz||0)),N.compose(C.set(X.x,X.y+X.h/2,X.z),S,O.set(X.w,X.h,X.d)),A.setMatrixAt(se,N),A.setColorAt(se,X.c)}),A.count=f.length,A.frustumCulled=!1,b.add(A),A}function at(f,b){let A=new ln(s(),new qt,Math.max(1,f.length));return f.forEach((X,se)=>{S.setFromEuler(ae.set(X.rx||0,X.ry||0,X.rz||0)),N.compose(C.set(X.x,X.y+X.h/2,X.z),S,O.set(X.w,X.h,X.d)),A.setMatrixAt(se,N),A.setColorAt(se,X.c)}),A.count=f.length,A.frustumCulled=!1,b.add(A),A}function yt(f,b){let A=f.map(([se,Le,it,je,ht])=>{let Lt=!ht&&typeof je=="string",ne=new ln(s(),ht?new Ut({toneMapped:!1}):new qt(Lt?{color:je}:{}),b);ne.frustumCulled=!1,e.add(ne);for(let Me=0;Me<b;Me++)ne.setMatrixAt(Me,_e),Lt||ne.setColorAt(Me,ht&&je?je:Re);return{k:se,m:ne,L:new zt().compose(new U(...Le),new Rn,new U(...it))}}),X=Object.fromEntries(A.map(se=>[se.k,se]));return{by:X,set(se,Le,it,je,ht=0,Lt=0,ne=0,Me=1){S.setFromEuler(ae.set(Lt,ht,ne)),N.compose(C.set(Le,it,je),S,O.set(Me,Me,Me));for(let Qe of A)le.multiplyMatrices(N,Qe.L),Qe.m.setMatrixAt(se,le)},hide(se){for(let Le of A)Le.m.setMatrixAt(se,_e)},paint(se,Le,it){X[se].m.setColorAt(Le,it)},flush(){for(let se of A)se.m.instanceMatrix.needsUpdate=!0,se.m.instanceColor&&(se.m.instanceColor.needsUpdate=!0)}}}function $(f){let b=[],A=0;for(let X=0;X<f.length;X++){let se=f[X],Le=f[(X+1)%f.length],it=Math.hypot(Le[0]-se[0],Le[1]-se[1],Le[2]-se[2])||.001;b.push({a:se,b:Le,l:it,at:A}),A+=it}return{seg:b,len:A}}function Wt(f,b,A=ge){b=(b%f.len+f.len)%f.len;let X=0,se=f.seg.length-1;for(;X<se;){let ne=X+se+1>>1;f.seg[ne].at<=b?X=ne:se=ne-1}let Le=f.seg[X],it=(b-Le.at)/Le.l,je=Le.b[0]-Le.a[0],ht=Le.b[1]-Le.a[1],Lt=Le.b[2]-Le.a[2];return A.x=Le.a[0]+je*it,A.y=Le.a[1]+ht*it,A.z=Le.a[2]+Lt*it,A.yaw=Math.atan2(je,Lt),A.pitch=-Math.atan2(ht,Math.hypot(je,Lt)),A}function tt(f,b,A,X,se,Le,it=6){let je=[],ht=(Lt,ne,Me)=>{for(let Qe=0;Qe<=it;Qe++){let xt=Me+Qe/it*Math.PI/2;je.push([Lt+Math.cos(xt)*se,Le,ne+Math.sin(xt)*se])}};return ht(b-se,A+se,-Math.PI/2),ht(b-se,X-se,0),ht(f+se,X-se,Math.PI/2),ht(f+se,A+se,Math.PI),je}let rt=(f,b)=>{let A=document.createElement("canvas");A.width=f,A.height=b;let X=A.getContext("2d"),se=new ai(A);return se.colorSpace=Kt,{c:A,g:X,tex:se}},Fe=(f,b,A)=>{for(;f.measureText(b).width>A&&b.length>3;)b=b.slice(0,-2)+"\u2026";return b},Vt=[W(3.4,.5,1.8),W(.5,2.2,3.4),W(3.4,2.6,.5),W(2.2,.6,3.4),W(.5,3.2,1.6)],_t=["#ffd6e8","#d8fff0","#e8dcff","#ffe6cc","#d6ecff","#fff6d6","#f4f0ff","#ffc9a0"].map(t),R=["#5a5288","#4a4478","#6a5a94","#3d3a6e","#8a6a9a","#2f3a70","#8f86b8","#a49ccb"].map(t),E=["#6a6a8a","#58607e","#7a7290","#4e5a74","#8a8296"].map(t),Q=["#ffd23f","#5fc8ff","#ff9ec9","#9ff0d0","#c8a8ff","#f4f0ff","#ff6a5a","#2a2a44"].map(t),we=["#2fa86a","#26985e","#38b874","#2c8f5a"].map(t),ve=[],Se=[],Ge=[],Ue=[];function Ne(f,b,A=1,X=0){let se=oe(we);ve.push(I(f,X,b,.7*A,2.2*A,.7*A,"#6a4630"),I(f,X+2*A,b,3.4*A,1.7*A,3.4*A,se),I(f,X+3.6*A,b,2.4*A,1.3*A,2.4*A,se),I(f,X+4.8*A,b,1.2*A,.9*A,1.2*A,se))}function Xe(f,b,A=1,X=0){let se=Math.round(7+P()*4),Le=(P()-.5)*.25;for(let ht=0;ht<se;ht++)Se.push(I(f+Le*ht*ht*.08,X+ht*.9*A,b,.7*A,.9*A,.7*A,ht%2?"#8a5a3a":"#7a4e30"));let it=f+Le*se*se*.08,je=X+se*.9*A;for(let ht=0;ht<6;ht++){let Lt=ht/6*Yi+P()*.4;for(let ne=1;ne<=5;ne++)Se.push(I(it+Math.cos(Lt)*ne*.8*A,je+(ne<3?.3:-(ne-2)*.55)*A,b+Math.sin(Lt)*ne*.8*A,.75*A,.35*A,.75*A,ne%2?"#2fbf6e":"#26a85e"))}Se.push(I(it,je-.3,b,1.1*A,.8*A,1.1*A,"#2fbf6e"))}let nt=[],pe=[],Ct=[],D=[],Ee=[],Te=[],be=F?430:600,ke=l-6;for(let f=-16;f<=16;f++)for(let b=-16;b<=16;b++){let A=y.get(f,b),X=Vl(f),se=Vl(b),Le=Math.hypot(X,se);if(Le>be)continue;let it=Math.min(1,Le/600);if(A===Bt.res)for(let je of[-10,0,10])for(let ht of[-10,0,10]){if(P()<.14)continue;let Lt=X+je+(P()-.5)*1.4,ne=se+ht+(P()-.5)*1.4;if(Lt>ke)continue;let Me=4.6+P()*2.2,Qe=4.6+P()*2.2,xt=P()<.32?5.4:3.2,Rt=oe(_t);nt.push(I(Lt,0,ne,Me,xt,Qe,Rt)),P()<.3&&nt.push(I(Lt+(P()-.5),xt,ne+(P()-.5),Me*.5,1.2,Qe*.5,Rt)),P()<.42?D.push(I(Lt+(P()<.5?1:-1)*(Me/2+1.5),0,ne+(P()-.5)*2,2.2,.14,3,W(.16,.85,1.2))):P()<.55&&Ne(Lt+(P()<.5?1:-1)*(Me/2+1.7),ne+(P()-.5)*3,.65+P()*.3)}else if(A===Bt.apt){let je=2+Math.floor(P()*3),ht=[[-8,-8],[8,-8],[-8,8],[8,8]].sort(()=>P()-.5).slice(0,je);for(let[Lt,ne]of ht){let Me=X+Lt,Qe=se+ne;if(Me>ke-2)continue;let xt=7+Math.round(P()*5),Rt=7+Math.round(P()*5),un=9+Math.round(P()*(12+it*26)),ci=oe(R);pe.push(I(Me,0,Qe,xt,un,Rt,ci)),un>18&&P()<.5&&pe.push(I(Me,un,Qe,xt-2,2+Math.round(P()*4),Rt-2,ci)),P()<.3&&Ge.push(I(Me,un+.05,Qe-Rt/2+.9,xt-1.6,.3,.3,oe(Vt)))}P()<.5&&Ne(X+(P()-.5)*6,se+(P()-.5)*6)}else if(A===Bt.ind){let je=P()<.55;for(let ht of je?[-7.5,7.5]:[0]){let Lt=22+Math.round(P()*6),ne=je?10:18,Me=5+Math.round(P()*4),Qe=oe(E);Ct.push(I(X,0,se+ht,Lt,Me,ne,Qe));for(let xt=-Lt/2+3;xt<Lt/2-2;xt+=4)Ct.push(I(X+xt,Me,se+ht,1.2,.45,ne-2,"#c8c4dc"))}if(P()<.55){let ht=X+12,Lt=se+(je?0:11),ne=15+Math.round(P()*10);Ct.push(I(ht,0,Lt,2,ne,2,"#8a3a4a"),I(ht,ne-3,Lt,2.3,1,2.3,"#f0eaff")),Te.push([ht,ne,Lt]),Ge.push(I(ht,ne,Lt,.5,.4,.5,W(4,.3,.3)))}}else if(A===Bt.mall){let je=oe(_t);pe.push(I(X-2,0,se-7,24,7,14,je),I(X-2,7,se-7,12,2,8,je)),Ge.push(I(X-2,4.4,se+.12,20,.6,.2,oe(Vt)));for(let ht=0;ht<3;ht++)for(let Lt=0;Lt<8;Lt++)P()<.7&&Ee.push(I(X-12.5+Lt*3.2,0,se+4+ht*4.4,1.5,1.1,3,oe(Q)))}else if(A===Bt.park){if(f>=-3&&f<=-2&&b>=4&&b<=5)continue;for(let je=0;je<(F?4:8);je++)Ne(X+(P()-.5)*26,se+(P()-.5)*26,.8+P()*.5)}else if(A===Bt.lot)X<ke&&P()<.3&&Ne(X+(P()-.5)*20,se+(P()-.5)*20);else if(A===Bt.hwy&&P()<.5){let je=X+(P()-.5)*24,ht=se+(P()-.5)*24;Math.abs(je-an.hwyX)>10&&Math.abs(ht-an.hwyZ)>10&&je<ke&&Ne(je,ht,.9)}}n(nt,!0),n(pe,!0),n(Ct,!0),n(Ee),Ke(D);let Mt=Math.min(F?12:28,Te.length),dt=5,pt=new ln(s(),new qt({color:"#5a4a7a",transparent:!0,opacity:.5,depthWrite:!1}),Math.max(1,Mt*dt));pt.frustumCulled=!1,e.add(pt);let fe=an.lake,G=new vt(new ri(fe.w,fe.d).rotateX(-Math.PI/2),g);G.position.set(fe.x,.22,fe.z),e.add(G);let Ie=[I(fe.x,0,fe.z-fe.d/2-.6,fe.w+2.4,.5,1.2,"#d8d2f0"),I(fe.x,0,fe.z+fe.d/2+.6,fe.w+2.4,.5,1.2,"#d8d2f0"),I(fe.x-fe.w/2-.6,0,fe.z,1.2,.5,fe.d,"#d8d2f0"),I(fe.x+fe.w/2+.6,0,fe.z,1.2,.5,fe.d,"#d8d2f0"),I(fe.x,0,fe.z,3.4,.9,3.4,"#e8e4f4"),I(fe.x,.9,fe.z,1.2,1.4,1.2,"#e8e4f4")];for(let f=0;f<(F?14:30);f++){let b=-108+P()*64,A=144+P()*64;Math.abs(b-fe.x)<fe.w/2+3&&Math.abs(A-fe.z)<fe.d/2+3||Ne(b,A,.8+P()*.6)}n(Ie),Ge.push(I(fe.x,.95,fe.z,3.6,.1,3.6,W(.6,1.8,2.6)));let he=an.rw,qe=an.twz,Ze=[],Et=[];Ze.push(I(-358,0,-204,128,9,16,"#c9c3e8"),I(-358,9,-204,120,2.2,12,"#4a3a8a"));for(let f=0;f<6;f++)Ze.push(I(-262,f*4.5,-204,5.6-f*.3,4.5,5.6-f*.3,f%2?"#d8d2f0":"#bdb6e0"));Ze.push(I(-262,27,-204,9,4.6,9,"#2c3c96"),I(-262,31.6,-204,10,.9,10,"#e8e2f8"),I(-226,0,-205,30,7,16,"#7a72a8"));for(let f=0;f<5;f++)Et.push(I(-413+f*25,4.4,-217,2.4,2.4,10,"#bdb6e0"));for(let f of[-474,-446])Et.push(I(f,0,-212,24,10,22,"#8f86b8"),I(f,10,-212,18,3,22,"#a49ccb"),I(f,13,-212,10,2,22,"#b3a9d6"));for(let f=0;f<3;f++)Et.push(I(-500+f*8,0,-236,6,5,6,"#e8e4f4"));n(Ze,!0),n(Et);let ut=[];for(let f=he.x0+4;f<=he.x1-4;f+=12)for(let b of[-1,1])ut.push(I(f,0,he.z+b*(he.hw+.4),.5,.35,.5,W(3.4,3.2,2.8)));for(let f=-3;f<=3;f++)ut.push(I(he.x0+1,0,he.z+f*2.4,.5,.35,.5,W(.4,3.6,1)),I(he.x1-1,0,he.z+f*2.4,.5,.35,.5,W(3.6,.4,.4)));for(let f=he.x0+20;f<=he.x1-20;f+=16)for(let b of[-1,1])ut.push(I(f,0,qe+b*4.6,.4,.3,.4,W(.5,1,4)));ut.push(I(-262,32.5,-204,.8,.8,.8,W(.5,4,1.4)),I(-358,11.2,-204,116,.3,.2,W(.5,2.2,3.4))),Ke(ut);let Gt=Ke(Array.from({length:7},(f,b)=>I(he.x0-14-b*11,0,he.z,.9,.5,.9,W(5,5,5.5)))),cn=F?8:10,K=F?[7]:[7,8,9],de=yt([["body",[0,2.4,0],[2.6,2.6,21],"#f4f2fb"],["nose",[0,2.25,11.4],[2,2,1.8],"#f4f2fb"],["wing",[0,1.9,-.5],[21,.4,4.2],"#d8d4ea"],["stab",[0,3.3,-9.4],[8.2,.35,2.2],"#d8d4ea"],["fin",[0,5.5,-9],[.45,4.4,3.4],null],["engL",[-4.8,1.15,.6],[1.5,1.5,3.2],"#a8a4c4"],["engR",[4.8,1.15,.6],[1.5,1.5,3.2],"#a8a4c4"],["win",[0,2.95,.6],[2.66,.42,15],W(3,2.4,1.5),!0],["navL",[-10.5,1.95,-.5],[.5,.5,.5],W(5,.3,.3),!0],["navR",[10.5,1.95,-.5],[.5,.5,.5],W(.3,5,.9),!0],["strobe",[0,7.9,-10.4],[.45,.45,.45],W(6,6,6),!0],["bcn",[0,.95,1.5],[.6,.3,.6],W(5,.4,.3),!0]],cn),me=["#ff4f9e","#5fc8ff","#ffd23f","#8a3fe2","#2ee6a6"].map(t);for(let f=0;f<cn;f++)de.paint("fin",f,me[f%me.length]);for(let f=0;f<5;f++)de.set(f,-410+f*25,0,-234,0);let ct=new Sl([[-470,0,he.z],[-330,0,he.z],[-240,9,he.z],[-120,36,he.z],[10,62,he.z-14],[100,80,he.z-70],[80,96,he.z-170],[-80,104,he.z-200],[-420,104,he.z-200],[-700,94,he.z-170],[-820,74,he.z-90],[-770,44,he.z-10],[-660,22,he.z],[-560,6,he.z],[-500,0,he.z]].map(f=>new U(...f)),!0,"centripetal");ct.arcLengthDivisions=800;let $e=ct.getLength(),Je=[0,0],It=[0,0],At=[],$t=[],Yt=-99;function fn(f){let{c:b,g:A,tex:X}=rt(560,200),se=it=>{A.clearRect(0,0,560,200),A.fillStyle="rgba(6,24,52,.94)",L(A,6,6,548,150,40),A.fill(),A.beginPath(),A.moveTo(250,150),A.lineTo(280,194),A.lineTo(312,150),A.closePath(),A.fill(),A.strokeStyle="#5fc8ff",A.lineWidth=6,L(A,6,6,548,150,40),A.stroke(),A.save(),A.beginPath(),A.arc(84,81,50,0,Yi),A.clip(),it?A.drawImage(it,34,31,100,100):H(A,84,81,50,f.symbol,f.mint),A.restore(),A.textAlign="left",A.fillStyle="#5fc8ff",A.font="900 23px Inter, sans-serif",A.fillText("MIGRATED \xB7 TAKING OFF",156,58),A.fillStyle="#fff",A.font="900 42px Inter, sans-serif",A.fillText(Fe(A,"$"+f.symbol,370),156,104),A.fillStyle="rgba(200,230,255,.85)",A.font="700 22px Inter, sans-serif",A.fillText("graduated to PumpSwap",156,136),X.needsUpdate=!0};se(null),M(f.iconUrl,se);let Le=new wi(new fi({map:X,transparent:!0,depthTest:!1}));return Le.renderOrder=8,Le.userData={kind:"coin",key:f.mint,coin:f},e.add(Le),Le}function Mn(f){!f||!f.mint||!f.symbol||At.some(b=>b.t.mint===f.mint)||$t.some(b=>b.mint===f.mint)||($t.push(f),$t.length>6&&$t.shift())}let _n=["#c8324a","#2f6fd8","#2fa86a","#e8902f","#1fa8b8","#e8e4f4","#8a2f6a","#d8b030"].map(t),T=[I(64,-1.2,-220,36,1.8,140,"#8a86a0")],Y=[];for(let f of[-36,-8,18])for(let b of[-286,-262,-238,-214,-190,-166])for(let A=0;A<4;A++)for(let X=0;X<6;X++){if(F&&(A+X)%2)continue;let se=P()<.12?0:1+Math.floor(P()*P()*4.2);for(let Le=0;Le<se;Le++)Y.push(I(f+3.2+A*6.4,Le*2.62,b+1.35+X*2.7,6.05,2.58,2.5,oe(_n)))}let j=89;for(let f of[-252,-186]){T.push(I(j,-2.4,f,13,7,58,"#24306a"),I(j,-.4,f,13.2,1.1,58.2,"#b02a40"),I(j,-2.4,f+30.5,8,7,3,"#24306a"),I(j,4.6,f-23,12,9,7,"#f0ecfa"),I(j,13.6,f-26,3,4.5,3,"#c8324a"));for(let b=0;b<5;b++)for(let A=0;A<7;A++){let X=1+Math.floor(P()*3);for(let se=0;se<X;se++)Y.push(I(j+(b-2)*2.6,4.6+se*2.62,f-16+A*6.4,2.5,2.58,6.05,oe(_n)))}}let te=[-272,-238,-204,-170],ee=[],ze=[];for(let f of te){for(let b of[66,78])for(let A of[-1,1])ee.push(I(b,.6,f+A*5,1.2,29,1.2,"#d8324a"));for(let b of[-1,1])ee.push(I(72,27.6,f+b*5,13.2,1.6,1.2,"#e8e4f4"));ee.push(I(82,29.6,f,50,1.8,3.6,"#e8e4f4"),I(63,31.4,f,6,3.2,5,"#d8324a"),I(66,31.4,f,1.2,12,1.2,"#d8324a"),I(86,37.15,f,41.8,.5,.5,"#e8e4f4",0,0,-.291)),ze.push(I(66,43.4,f,.7,.6,.7,W(5,.3,.3)),I(106.6,29.8,f,.6,.6,.6,W(5,.3,.3)))}let et=[];for(let f of[-22,4,30])for(let b of[-266,-218,-170])T.push(I(f,0,b,1,24,1,"#8a84a8")),et.push(I(f,24,b,3.4,.8,3.4,W(3.4,3,2.4)));n(T,!0),n(Y),n(ee),Ke(ze),Ke(et);let ft=te.length,ot=f=>{let b=new ln(s(),new qt(f?{color:f}:{}),ft);return b.frustumCulled=!1,e.add(b),b},Pt=ot("#3a3654"),St=ot("#1a1638"),bt=ot("#ffd23f"),Zt=ot(null);for(let f=0;f<ft;f++)Zt.setColorAt(f,_n[f*3%_n.length]);let Xt=f=>f<.5?2*f*f:1-Math.pow(-2*f+2,2)/2;function gn(f){let b=j+2.6,A=70,X=26,se=12.6,Le=3.2;return f<3?[b,X+(se-X)*Xt(f/3),0]:f<4?[b,se,f>3.5]:f<7?[b,se+(X-se)*Xt((f-4)/3),1]:f<10?[b+(A-b)*Xt((f-7)/3),X,1]:f<13?[A,X+(Le-X)*Xt((f-10)/3),1]:f<14?[A,Le,f<13.5]:f<16?[A,Le+(X-Le)*Xt((f-14)/2),0]:[A+(b-A)*Xt((f-16)/2),X,0]}let Kn=$(tt(50,60,-286,-154,4,.6,4)),jt=6,mt=yt([["cab",[0,1.3,2.7],[2.3,2,1.8],"#ffd23f"],["chas",[0,.55,-.6],[2.1,.5,6.8],"#3a3654"],["box",[0,2.1,-1.1],[2.5,2.58,6],null],["lt",[0,1.1,3.62],[1.8,.25,.1],W(4,3.8,3.2),!0]],jt);for(let f=0;f<jt;f++)mt.paint("box",f,_n[(f*5+1)%_n.length]);let Oi=yt([["hull",[0,.5,0],[3.2,1.4,7.4],"#e8e4f4"],["cab",[0,1.9,-.6],[2.2,1.4,2.8],"#c8324a"],["lt",[0,2.8,-.6],[.4,.4,.4],W(4,3.6,2),!0]],2),We=an.field,$n=[],us=[],bn=[],Fi=[],dn=64;for(let f=0;f<dn;f++){let b=(f+.5)/dn*Yi,A=Math.cos(b),X=Math.sin(b),se=f%16===0||f%16===15;for(let Le=0;Le<7;Le++){if(se&&Le<5)continue;let it=25+Le*2.3,je=18+Le*2.3,ht=We.x+A*it,Lt=We.z+X*je,ne=Math.atan2(je*A,it*X),Me=Math.hypot(it*X,je*A)*Yi/dn+.3,Qe=Le===6?13:1+Le*1.5;if($n.push(I(ht,0,Lt,Me,Qe,2.4,Le===6?"#e8e4f4":Math.floor(f/4)%2?"#ff4f9e":"#3a5ae0",ne)),Le<6&&!se)for(let xt of F?[0]:[-.25,.25])us.push({x:ht+Math.cos(ne)*Me*xt,y:Qe,z:Lt-Math.sin(ne)*Me*xt,a:b})}}for(let[f,b]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let A=We.x+f*36,X=We.z+b*28;bn.push(I(A,0,X,1.4,36,1.4,"#c8c0e8")),Fi.push(I(A-f*.6,36,X-b*.6,5,2.6,1.2,W(2.1,2.1,2),Math.atan2(-f,-b)));let se=new vt(new rr(9,1,20,1,!0).translate(0,-.5,0),new Ut({color:new De(.8,.85,1),transparent:!0,opacity:.06,blending:Ei,depthWrite:!1,side:Yn}));k.set(A,37,X),J.set(We.x-f*6,0,We.z-b*4);let Le=k.distanceTo(J);se.position.copy(k),se.scale.set(1,Le,1),se.quaternion.setFromUnitVectors(ue,ie.subVectors(J,k).normalize()),lt.add(se)}for(let f of[-1,1])bn.push(I(We.x+f*23.5,10,We.z,1,9,15,"#1a1638"));bn.push(I(We.x+41.2,13,We.z,1,13,24,"#1a1638")),n($n,!0),n(bn),Ke(Fi);let Ai=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#ffffff","#8a3fe2","#ff8a4a"].map(t),Fn=new ln(s(),new qt,us.length);Fn.frustumCulled=!1,e.add(Fn),us.forEach((f,b)=>Fn.setColorAt(b,Ai[b%Ai.length]));let Un=rt(1024,512),st=Un.g,kr=Un.tex,fs=null,wn=null,Vr=null,pi=-9,Oa=new Ut({map:kr,toneMapped:!1,color:new De(1.25,1.25,1.25)}),Wl=[];for(let f of[-1,1]){let b=new vt(new ri(14,7),Oa);b.position.set(We.x+f*22.9,14.5,We.z),b.rotation.y=f>0?-Math.PI/2:Math.PI/2,e.add(b),Wl.push(b)}let Ri=new vt(new ri(23,11.5),Oa);Ri.position.set(We.x+41.8,19.5,We.z),Ri.rotation.y=Math.PI/2,e.add(Ri),Ri.userData={kind:"arena"};function Os(f,b,A,X,se){st.fillStyle="rgba(255,255,255,.06)",L(st,f,b,296,168,22),st.fill(),st.fillStyle=se,st.fillRect(f+22,b+22,34,6),st.fillStyle="rgba(220,214,255,.8)",st.font="800 23px Inter, sans-serif",st.textAlign="left",st.fillText(A,f+22,b+60),st.fillStyle="#fff",st.font="900 76px Inter, sans-serif",st.fillText(X,f+20,b+140)}function Fa(){let f=fs||{};st.fillStyle="#07041a",st.fillRect(0,0,1024,512);let b=st.createLinearGradient(0,0,1024,0);b.addColorStop(0,"#2f3fe4"),b.addColorStop(.5,"#8a3fe2"),b.addColorStop(1,"#ff4f9e"),st.fillStyle=b,st.fillRect(0,0,1024,70),st.fillStyle="#fff",st.font="900 34px Inter, sans-serif",st.textAlign="left",st.fillText("VICE ARENA",30,47),st.textAlign="right",st.font="800 24px Inter, sans-serif",st.fillText("\u25CF LIVE FROM PUMP.FUN",994,45),Os(24,96,"NEW COINS / MIN",f.perMin==null?"\u2014":String(f.perMin),"#ffd23f"),Os(364,96,"MIGRATED \xB7 YOU SAW",f.migrated==null?"\u2014":String(f.migrated),"#5fc8ff"),Os(704,96,"MOOD",f.mood==null?"\u2014":Math.round(f.mood*100)+"%",f.mood!=null&&f.mood>=.5?"#2ee6a6":"#ff4f9e");let A=f.hot;st.fillStyle="rgba(255,255,255,.06)",L(st,24,290,976,196,26),st.fill(),A?(st.save(),st.beginPath(),st.arc(124,388,74,0,Yi),st.clip(),wn?st.drawImage(wn,50,314,148,148):H(st,124,388,74,A.symbol,A.mint),st.restore(),st.textAlign="left",st.fillStyle="#2ee6a6",st.font="900 26px Inter, sans-serif",st.fillText("#1 HOTTEST RIGHT NOW",226,352),st.fillStyle="#fff",st.font="900 78px Inter, sans-serif",st.fillText(Fe(st,"$"+A.symbol,520),222,432),st.textAlign="right",st.fillStyle=(A.chg||0)>=0?"#2ee6a6":"#ff4f9e",st.font="900 64px Inter, sans-serif",st.fillText(A.chg==null?"":(A.chg>0?"+":"")+A.chg.toFixed(1)+"%",976,420),st.fillStyle="rgba(220,214,255,.75)",st.font="800 22px Inter, sans-serif",st.fillText(A.tf?"in "+A.tf:"",976,458)):(st.textAlign="center",st.fillStyle="rgba(255,255,255,.7)",st.font="800 34px Inter, sans-serif",st.fillText("Waiting for the trenches\u2026",512,400)),kr.needsUpdate=!0}Fa();function Xl(f){fs=f;let b=f&&f.hot;b&&b.mint!==Vr&&(Vr=b.mint,wn=null,M(b.iconUrl,A=>{Vr===b.mint&&(wn=A,Fa())})),Ri.userData=b?{kind:"coin",key:b.mint,coin:b}:{kind:"arena"},performance.now()-pi>900&&(pi=performance.now(),Fa())}let za=[];for(let f=0;f<9;f++){let b=-318+P()*88,A=196+P()*80;za.push(I(b,0,A,.2,4,.2,"#f4f0ff"),I(b+.6,3.1,A,1.2,.8,.1,f%2?"#ff4f6e":"#ffd23f"))}za.push(I(-240,0,188,14,5,9,"#f4f0ff"),I(-240,5,188,15,.8,10,"#3a5ae0")),n(za,!0);for(let f=0;f<(F?8:18);f++)Ne(-324+P()*100,180+P()*100,.9+P()*.5);let vn=an.hwyX,Dt=an.hwyZ,jn=[],cr=[],ds="#3a3654",Ci="#8a84a8",Fs="#c8c4dc",Dn=F?-460:-640,zs=F?460:640;for(let f=Dn;f<zs;f+=12)jn.push(I(vn,7,f+6,15,1,12.1,ds),I(vn-7.3,8,f+6,.4,.9,12.1,Fs),I(vn+7.3,8,f+6,.4,.9,12.1,Fs),I(vn,8,f+6,.5,.7,12.1,Fs));for(let f=Dn+6;f<zs;f+=24)Math.abs(f-Dt)<9||(jn.push(I(vn,0,f,2.2,7,2.2,Ci),I(vn,6.2,f,12,.8,2.4,Ci)),Ue.push([vn,f,1.7]));for(let f=Dn+18;f<zs;f+=36)jn.push(I(vn,8,f,.3,6.5,.3,"#2a2648")),cr.push(I(vn,14.4,f,2.6,.3,.7,W(3.6,2.4,1.2)));for(let f=Dn;f<140;f+=12)jn.push(I(f+6,13,Dt,12.1,1,15,ds),I(f+6,14,Dt-7.3,12.1,.9,.4,Fs),I(f+6,14,Dt+7.3,12.1,.9,.4,Fs),I(f+6,14,Dt,12.1,.7,.5,Fs));for(let f=Dn+6;f<48;f+=24)Math.abs(f-vn)<10||(jn.push(I(f,0,Dt,2.2,13,2.2,Ci),I(f,12.2,Dt,2.4,.8,12,Ci)),Ue.push([f,Dt,1.7]));for(let f=Dn+18;f<140;f+=36)jn.push(I(f,14,Dt,.3,6.5,.3,"#2a2648")),cr.push(I(f,20.4,Dt,.7,.3,2.6,W(3.6,2.4,1.2)));jn.push(I(155,6.75,Dt,32.5,1,15,ds,0,0,-.395),I(186,1.4,Dt,32,.12,12,"#2a2840"));for(let f of[56,92,128])jn.push(I(f,-1,Dt,3,14,7,Ci)),Ue.push([f,Dt-2,2.4],[f,Dt+2,2.4]);let hr=[72,108],Ba=[];for(let f of hr){for(let b of[-1,1])jn.push(I(f,-1,Dt+b*8.6,2.4,55,2.4,"#e8e4f4"));jn.push(I(f,11.4,Dt,2.4,1.6,19.6,"#e8e4f4"),I(f,40,Dt,2,1.4,19.6,"#e8e4f4"),I(f,52.6,Dt,2.4,1.6,19.6,"#e8e4f4")),cr.push(I(f,54.2,Dt-8.6,.6,.6,.6,W(5,.3,.3)),I(f,54.2,Dt+8.6,.6,.6,.6,W(5,.3,.3)));for(let b of[-1,1])for(let A of[-1,1])for(let X=1;X<=4;X++)Ba.push([f,50-X*1.8,Dt+b*8.6,f+A*X*7.6,14.3,Dt+b*7.1])}cr.push(I(94,13.15,Dt-7.7,92,.25,.25,W(.5,2.2,3.6)),I(94,13.15,Dt+7.7,92,.25,.25,W(.5,2.2,3.6)),I(94,12.7,Dt,92,.22,10,W(2.6,.5,1.8))),n(jn),Ke(cr);let Gr=new ln(s(),new Ut({color:new De(1.5,1.45,1.8),toneMapped:!1}),Ba.length);Gr.frustumCulled=!1,Ba.forEach(([f,b,A,X,se,Le],it)=>{k.set(f,b,A),J.set(X,se,Le);let je=k.distanceTo(J);S.setFromUnitVectors(re,ie.subVectors(J,k).normalize()),N.compose(C.addVectors(k,J).multiplyScalar(.5),S,O.set(.16,.16,je)),Gr.setMatrixAt(it,N)}),lt.add(Gr);let Zi=$([[vn+3.4,8,Dn-12],[vn+3.4,8,zs+12],[vn-3.4,8,zs+12],[vn-3.4,8,Dn-12]]),Mo=$([[Dn-12,14,Dt+3.4],[140,14,Dt+3.4],[170,1.55,Dt+3.4],[198,1.55,Dt+3.4],[201.4,1.55,Dt],[198,1.55,Dt-3.4],[170,1.55,Dt-3.4],[140,14,Dt-3.4],[Dn-12,14,Dt-3.4]]),Bs=F?30:64,ur=F?24:50,Hs=Bs+ur,fr=yt([["body",[0,.75,0],[1.9,1.1,4.2],null],["cab",[0,1.55,-.3],[1.6,.6,2.1],"#1a1638"],["head",[0,.75,2.12],[1.5,.22,.1],W(4.5,4.2,3.6),!0],["tail",[0,.8,-2.12],[1.5,.22,.1],W(3.4,.2,.3),!0]],Hs),ps=[];for(let f=0;f<Hs;f++){let b=f<Bs,A=b?Zi:Mo,X=b?Bs:ur,se=b?f:f-Bs,Le=P()<.16;ps.push({pa:A,d:(se+P()*.45)/X*A.len,sc:Le?1.5:1,sp:b?24:20}),fr.paint("body",f,oe(Le?[t("#ffd23f"),t("#f4f0ff"),t("#2ee6a6")]:Q))}let kn=an.metro,zn=kn.y,Vn=$(tt(kn.x0,kn.x1,kn.z0,kn.z1,kn.r,zn,6)),Ji=[],ks=[];for(let f=0;f<Vn.len;f+=6){Wt(Vn,f+3);let b=Math.cos(ge.yaw),A=Math.sin(ge.yaw);Ji.push(I(ge.x,zn-1,ge.z,7.8,.9,6.4,"#5a5480",ge.yaw));for(let X of[-2.65,-1.15,1.15,2.65])Ji.push(I(ge.x+X*b,zn-.1,ge.z-X*A,.22,.22,6.4,"#c8c4dc",ge.yaw));ks.push(I(ge.x+3.95*b,zn-.95,ge.z-3.95*A,.18,.26,6.4,W(3.2,.5,2),ge.yaw),I(ge.x-3.95*b,zn-.95,ge.z+3.95*A,.18,.26,6.4,W(.5,2.2,3.4),ge.yaw))}for(let f=0;f<Vn.len;f+=18)Wt(Vn,f),!(ge.x>60&&Math.abs(ge.z-h)<7)&&(Ji.push(I(ge.x,0,ge.z,1.6,zn-1.8,1.6,"#8a84a8",ge.yaw),I(ge.x,zn-2,ge.z,7,1,1.8,"#8a84a8",ge.yaw)),Ue.push([ge.x,ge.z,1.3]));let ms=[W(3.4,.5,1.8),W(.5,2.2,3.4),W(3.4,2.6,.5),W(2.2,.6,3.4)];[[-11,kn.z0,Math.PI/2],[kn.x1,-20,0],[-11,kn.z1,Math.PI/2],[kn.x0,0,0]].forEach(([f,b,A],X)=>{let se=Math.cos(A),Le=Math.sin(A);for(let it of[-5.6,5.6])Ji.push(I(f+it*se,zn-1.2,b-it*Le,3.4,1.2,26,"#bdb6e0",A));Ji.push(I(f,zn+3.4,b,14.6,.5,24,"#8f86b8",A));for(let it of[-6.6,6.6])for(let je of[-10,0,10])Ji.push(I(f+it*se+je*Le,zn,b-it*Le+je*se,.3,3.4,.3,"#8a84a8",A));for(let it of[-7.3,7.3])ks.push(I(f+it*se,zn+3.4,b-it*Le,.25,.5,24,ms[X],A))}),n(Ji),Ke(ks);let Ki=5,Vs=yt([["body",[0,1.7,0],[2.8,2.6,7.2],"#e8e6f4"],["roof",[0,3.15,0],[2.4,.4,6.8],"#a8a4c4"],["win",[0,2.15,0],[2.9,.7,6.4],W(2.6,2.1,1.5),!0],["stripe",[0,1.05,0],[2.9,.28,7],null,!0]],Ki*2);for(let f=0;f<Ki*2;f++)Vs.paint("stripe",f,f<Ki?W(3.4,.5,1.8):W(.5,2.2,3.4));let Bn=an.isle,gs=[],xs=[],_s=[];for(let f=-Bn.r+1;f<Bn.r;f+=2){let b=Math.sqrt(Bn.r*Bn.r-f*f);gs.push(I(Bn.x,-1.4,Bn.z+f,b*2,2.2,2.05,"#e8cc98")),b>6&&gs.push(I(Bn.x-.5,.8,Bn.z+f,(b-4.5)*2,.6,2.05,"#2fa86a"))}for(let f=0;f<8;f++){let b=f/8*Yi+.3,A=Bn.x+Math.cos(b)*25,X=Bn.z+Math.sin(b)*24;if(A<Bn.x-12&&Math.abs(X-Dt)<16)continue;let se=oe(_t),Le=Math.PI/2-b;xs.push(I(A,1.4,X,11,3.6,8,"#f4f2fb",Le),I(A-Math.cos(b)*1.2,5,X-Math.sin(b)*1.2,7,3.2,6,se,Le)),Ge.push(I(A+Math.cos(b)*7.5,1.42,X+Math.sin(b)*7.5,6,.16,3,W(.16,.9,1.3),Le)),Xe(A+Math.cos(b+1.1)*8,X+Math.sin(b+1.1)*8,.9,1.4),F||Xe(A+Math.cos(b-1.1)*8,X+Math.sin(b-1.1)*8,.8,1.4)}for(let f of[-.7,0,.7]){let b=Math.PI/2-f,A=Bn.x+Math.cos(f)*45,X=Bn.z+Math.sin(f)*45,se=-Math.sin(f)*3.2,Le=Math.cos(f)*3.2;gs.push(I(A,-.2,X,2.2,.6,12,"#9a6a48",b)),_s.push(I(A+se,-.4,X+Le,2.8,1.8,9,"#f4f2fb",b),I(A+se,1.4,X+Le,2,1.2,4.4,"#2a2648",b))}for(let[f,b,A]of[[246,-30,7],[236,-152,9],[178,236,6]]){for(let X=-A+1;X<A;X+=2){let se=Math.sqrt(A*A-X*X);gs.push(I(f,-1.4,b+X,se*2,2.1,2.05,"#e8cc98"))}Xe(f+1,b,.9,.7),A>7&&Xe(f-2,b+2,.7,.7)}n(gs),n(xs,!0),n(_s);let mi=new Hn;e.add(mi);let Ha=[I(0,-3,0,16,9,90,"#f4f2fb"),I(0,1.8,0,16.2,.8,90.2,"#2f3fe4"),I(0,-3,47,11,9,5,"#f4f2fb"),I(0,-3,51,6,8.6,3,"#f4f2fb")];for(let f=0;f<6;f++)Ha.push(I(0,6+f*2.8,-5-f*2,14.4-f*1.3,2.8,72-f*9,f%2?"#e8e6f4":"#fbfaff"));Ha.push(I(0,22.8,-26,5,8,7,"#c8324a"),I(0,22.8,18,11,2.6,6,"#e8e6f4")),at(Ha,mi);let ka=[I(0,30.8,-26,5.2,.5,7.2,W(3.4,1,.6))];for(let f=0;f<6;f++){let b=14.4-f*1.3,A=72-f*9,X=-5-f*2,se=6+f*2.8;for(let Le of[-1,1])ka.push(I(Le*(b/2+.06),se+1,X,.1,.55,A-3,W(2.6,2,1.3)),I(Le*(b/2+.1),se+2.6,X,.18,.18,A,f%2?W(3.2,.5,1.8):W(.5,2.2,3.4)))}for(let f of[-1,1])ka.push(I(f*8.06,-.6,0,.1,.5,84,W(2.4,1.9,1.2)));Ke(ka,mi);let Gn=0,dr=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#ff8a4a","#c8a8ff","#f4f0ff"].map(t),pr=[];for(let f=-o+12.8;f<o-4;f+=9)for(let b of[58.4,64.4]){if(Math.abs(f-h)<7||Math.abs(f+40)<6||Math.abs(f-52)<6||P()<.3)continue;let A=f+(P()-.5)*1.5,X=oe(dr);pr.push(I(b,0,A,.2,2.8,.2,"#f4f0ff"),I(b,2.6,A,2.8,.3,2.8,X),I(b,2.9,A,1.5,.3,1.5,X),I(b+1.7,0,A+.3,1.1,.06,2.1,oe(dr)))}for(let f of[-57.5,-21.5,14.5,59.5]){let A=oe(_t);for(let X of[-.9,.9])for(let se of[-.9,.9])pr.push(I(66.6+X,0,f+se,.3,2.8,.3,"#f4f0ff"));pr.push(I(66.6,2.8,f,2.6,2,2.6,A),I(66.6,4.8,f,3.2,.3,3.2,"#ff4f6e"),I(66.6+1.3,4.8,f,.12,2.4,.12,"#f4f0ff"),I(66.6+1.8,6.5,f,1,.6,.08,"#ff4f6e"))}for(let f of[-40,52])pr.push(I(62,0,f-4,.2,2.6,.2,"#f4f0ff"),I(62,0,f+4,.2,2.6,.2,"#f4f0ff"),I(62,1.8,f,.06,.8,8,"#e8e4f4"));n(pr);let Wr=yt([["hull",[0,.45,0],[1.1,.6,2.6],null],["seat",[0,.9,-.3],[.6,.35,1.2],"#1a1638"],["rider",[0,1.5,-.1],[.5,.9,.4],null],["head",[0,2.15,-.1],[.36,.36,.36],"#f0c9a0"]],4),Xr=[[150,-48,12,18,.32,0],[158,-30,10,14,.38,2],[150,44,13,16,.3,4],[160,62,9,12,.36,1]];Xr.forEach((f,b)=>{Wr.paint("hull",b,oe(dr)),Wr.paint("rider",b,oe(dr))});let qr=yt([["hull",[0,.5,0],[2.4,1.2,6.6],"#f4f2fb"],["cab",[0,1.5,-.6],[1.8,1,2.2],"#2a2648"]],1),vs=yt([["c1",[-2.6,-.5,0],[2.4,.4,2.6],"#ff4f9e"],["c2",[0,0,0],[3,.4,2.6],"#ffd23f"],["c3",[2.6,-.5,0],[2.4,.4,2.6],"#5fc8ff"],["man",[0,-4.6,0],[.5,1,.4],"#2a2648"]],1),Yr=new ln(s(),new Ut({color:new De(.8,.8,.9)}),2);Yr.frustumCulled=!1,e.add(Yr);let ys=[];{for(let b=0;b<=16;b++){let A=-300+b/16*360;ys.push([88,30,A])}for(let b=1;b<16;b++){let A=Math.PI-b/16*Math.PI;ys.push([128+Math.cos(A)*40,30,60+Math.sin(A)*40])}for(let b=0;b<=16;b++)ys.push([168,30,60-b/16*360]);for(let b=1;b<16;b++){let A=-b/16*Math.PI;ys.push([128+Math.cos(A)*40,30,-300+Math.sin(A)*40])}}let oi=$(ys),Va=yt([["body",[0,0,0],[1,1,6.4],"#f4f2fb"],["wing",[0,.3,.6],[10,.22,1.5],"#ff4f9e"],["stab",[0,.5,-2.9],[3,.18,.9],"#ff4f9e"],["fin",[0,1.1,-2.9],[.16,1.3,1],"#ff4f9e"],["prop",[0,0,3.3],[1.8,1.8,.06],W(.5,.5,.6),!0],["nav",[0,-.6,0],[.3,.3,.3],W(5,.4,.4),!0]],1),Pi=rt(1024,236),Ga=Pi.tex,Tt=new Ut({map:Ga,toneMapped:!1,color:new De(1.15,1.15,1.15)}),Qn=new vt(new ri(26,6),Tt),Gs=new vt(new ri(26,6),Tt);e.add(Qn),e.add(Gs);let $i=null,mr=null;function Zr(){let f=Pi.g,b=$i;if(f.fillStyle="#ff4f9e",f.fillRect(0,0,1024,236),f.fillStyle="#fff6fb",f.fillRect(10,10,1004,216),!b){f.fillStyle="#2a1270",f.font="900 92px Inter, sans-serif",f.textAlign="center",f.fillText("VICE \xB7 THE TRENCHES",512,150),Ga.needsUpdate=!0;return}f.save(),f.beginPath(),f.arc(118,118,88,0,Yi),f.clip(),mr?f.drawImage(mr,30,30,176,176):H(f,118,118,88,b.symbol,b.mint),f.restore(),f.textAlign="left",f.fillStyle="#ff2f8e",f.font="900 34px Inter, sans-serif",f.fillText("#1 TRENDING ON PUMP.FUN",232,68),f.fillStyle="#1a0a50",f.font="900 112px Inter, sans-serif",f.fillText(Fe(f,"$"+b.symbol,540),226,186),f.textAlign="right",f.fillStyle=(b.chg||0)>=0?"#10a070":"#e0306a",f.font="900 64px Inter, sans-serif",f.fillText(b.chg==null?"":(b.chg>0?"+":"")+b.chg.toFixed(0)+"%",1e3,120),f.fillStyle="#5a4a90",f.font="800 28px Inter, sans-serif",f.fillText(b.tf?"in "+b.tf:"",1e3,172),Ga.needsUpdate=!0}Zr();function Jr(f){if(!f)return;let b=$i&&$i.mint===f.mint;b&&$i.chg===f.chg||($i=f,Qn.userData=Gs.userData={kind:"coin",key:f.mint,coin:f},b||(mr=null,M(f.iconUrl,A=>{$i&&$i.mint===f.mint&&(mr=A,Zr())})),Zr())}let gr=Yr,ei=rt(256,256),Jt=ei.g;{let f=Jt.createRadialGradient(128,128,6,128,128,128);f.addColorStop(0,"rgba(255,244,252,1)"),f.addColorStop(.33,"rgba(255,232,248,1)"),f.addColorStop(.37,"rgba(255,170,224,.42)"),f.addColorStop(.6,"rgba(190,120,255,.14)"),f.addColorStop(1,"rgba(120,80,255,0)"),Jt.fillStyle=f,Jt.fillRect(0,0,256,256);for(let[b,A,X]of[[112,108,9],[146,134,7],[118,150,5],[140,100,4]])Jt.fillStyle="rgba(232,196,236,.5)",Jt.beginPath(),Jt.arc(b,A,X,0,Yi),Jt.fill();ei.tex.needsUpdate=!0}let gi=new wi(new fi({map:ei.tex,transparent:!0,depthWrite:!1,toneMapped:!1,color:new De(1.7,1.6,1.7)}));gi.position.copy(Pe(.82,.3,-.49).normalize().multiplyScalar(2100)),gi.scale.setScalar(360),gi.renderOrder=-1,e.add(gi);let Ws=[],xr=["#6a4a9a","#7a5aa8","#5a3a8a","#8a6ab8"].map(t);for(let f=0;f<(F?8:18);f++){let b=P()*Yi,A=280+P()*700,X=Math.cos(b)*A,se=Math.sin(b)*A,Le=160+P()*90,it=7+Math.floor(P()*6);for(let je=0;je<it;je++)Ws.push({x:X+(P()-.5)*40,y:Le+(P()-.5)*6,z:se+(P()-.5)*22,w:10+P()*14,h:3+P()*3,d:8+P()*10,c:oe(xr)})}let Cn=new ln(s(),new qt({emissive:new De("#2a1450"),transparent:!0,opacity:.6,depthWrite:!1}),Ws.length);Cn.frustumCulled=!1,e.add(Cn),Ws.forEach((f,b)=>Cn.setColorAt(b,f.c));let zi=new vt(s(),new Ut({color:new De(4,3.8,4.4),toneMapped:!1,transparent:!0,opacity:0,depthWrite:!1}));e.add(zi);let Ms=6,ji=0,Kr=new U,Qt=new U,yn=f=>-o+f*a-2,Eo=[],So=[],_r=[];for(let f=1;f<c;f++)for(let b=1;b<=c;b++){let A=yn(f),X=yn(b);A>l-3||(Eo.push(I(A+2.5,0,X+2.5,.26,6,.26,"#2a2648"),I(A+1.9,5.85,X+1.9,1.5,.16,.16,"#2a2648",-Math.PI/4),I(A-2.5,0,X-2.5,.22,4.4,.22,"#1a1830"),I(A-2.5,4.2,X-2.5,.7,1.1,.7,"#141226")),So.push(I(A+1.35,5.62,X+1.35,.9,.24,.9,W(3.6,2.4,1.2))),_r.push([A-2.5,X-2.5,P()*10]))}let vr=[];for(let f of u)f.big&&vr.push(I(f.x+f.w/2-.4,f.y,f.z+f.d/2-.4,.45,.45,.45,W(4,.3,.35)),I(f.x-f.w/2+.4,f.y,f.z-f.d/2+.4,.45,.45,.45,W(4,.3,.35)));for(let[f,b,A]of p)vr.push(I(f,b,A,.5,.5,.5,W(4,.3,.35)));let $r=u.filter(f=>!f.big&&f.y>=8&&f.x<l-14),Qi=[],Xs=[];for(let f=0;f<Math.min(F?18:40,$r.length);f++){let b=$r[Math.floor(P()*$r.length)],A=P()<.5?1:-1,X=3+P()*4,se=2.4+P()*2;P()<.5?Qi.push(I(b.x+A*(b.w/2+.3),se,b.z+(P()-.5)*(b.d-3),.3,X,1,oe(Vt))):Qi.push(I(b.x+(P()-.5)*(b.w-3),se,b.z+A*(b.d/2+.3),1,X,.3,oe(Vt)))}for(let f of $r)if(P()<.12){let b=f.x+(P()-.5)*(f.w-4),A=f.z+(P()-.5)*(f.d-4);for(let X of[-.8,.8])for(let se of[-.8,.8])Xs.push(I(b+X,f.y,A+se,.25,1.6,.25,"#5a3a28"));Xs.push(I(b,f.y+1.6,A,2.4,2.6,2.4,"#8a5a3a"),I(b,f.y+4.2,A,1.6,.6,1.6,"#6a4630"))}n(Eo),n(Xs),Ke(So);let qs=Ke(_r.map(([f,b])=>I(f,5.3,b,.55,.14,.55,W(.3,3,1))),e),yr=Ke(vr,e),Wa=Ke(Qi),bo=Qi.map(f=>f.c.clone());Ke(Ge);let es=x.x,xi=x.z,li=es-1.6,ti=xi+1.6,ts=es+4.6,Es=xi-4.6,jr=22,Ot=66,pn=[I(es,0,xi,13.4,.1,13.4,"#6a5040")];for(let f of[-1,1])pn.push(I(es+f*6.7,0,xi,.15,1.4,13.4,"#ff8a3a"),I(es,0,xi+f*6.7,13.4,1.4,.15,"#ff8a3a"));for(let f=0;f<3;f++)pn.push(I(ts-.2,f*.7,xi+4.4,3,.6,3,"#a8a2c4"));pn.push(I(ts,0,Es,1.6,Ot,1.6,"#ffd23f"));for(let f=4;f<Ot;f+=4)pn.push(I(ts,f,Es,1.8,.3,1.8,"#e0b020"));n(pn);let tn=[];for(let f=0;f<jr;f++){let b=f*2.6;tn.push(I(li,b+2.1,ti,9.4,.5,9.4,"#b8b2d4"),I(li,b,ti,3,2.1,3,"#9a94b8"));for(let A of[-1,1])for(let X of[-1,1])tn.push(I(li+A*4.2,b,ti+X*4.2,.5,2.1,.5,"#8a84a8"))}let hn=n(tn,!1,!1),Tn=3,_i=0,gt=0,ns=-1;hn.count=Tn*6;let Li=new vt(s(),new Ut({color:new De(4,3.4,2.2),toneMapped:!1}));Li.scale.set(9.6,.25,.25),e.add(Li);let Ss=new Hn;Ss.position.set(ts,Ot,Es),e.add(Ss);let Qr=new qt({color:"#ffd23f"}),Ys=new qt({color:"#8a84a8"}),Mr=new qt({color:"#2a2648"}),Bi=(f,b,A,X,se,Le,it)=>{let je=new vt(s(),f);return je.scale.set(b,A,X),je.position.set(se,Le,it),Ss.add(je),je};Bi(Qr,30,1.2,1.2,9,1.2,0),Bi(Qr,9,1,1,-8.5,1.2,0),Bi(Ys,3,2.6,2.4,-11.5,.6,0),Bi(Mr,2.4,2.4,2.4,0,-.6,1.6),Bi(Qr,.8,6,.8,0,4.2,0);let is=Bi(Mr,1.6,.7,1.6,10,.3,0),ss=Bi(Mr,.12,1,.12,10,-5,0),wo=Bi(Ys,1.2,.8,1.2,10,-10,0),To=Bi(new qt({color:"#b8b2d4"}),3,.6,3,10,-11,0),Er=new vt(s(),new Ut({color:new De(5,.3,.3),toneMapped:!1}));Er.scale.setScalar(.5),Er.position.set(23.8,1.9,0),Ss.add(Er);let ea=(f,b)=>Math.atan2(-(b-Es),f-ts),Sr=[ts-.2,xi+4.4],m=ea(Sr[0],Sr[1]),_=Math.hypot(Sr[0]-ts,Sr[1]-Es),w=ea(li,ti),B=Math.hypot(li-ts,ti-Es),Z=rt(512,220),V=-9,q=new wi(new fi({map:Z.tex,transparent:!0}));q.position.set(es+3.8,8.5,xi+4.6),q.scale.set(7.6,3.25,1),e.add(q);function Ce(){let f=Z.g;f.clearRect(0,0,512,220),f.fillStyle="rgba(10,5,32,.92)",L(f,6,6,500,208,28),f.fill(),f.strokeStyle="#ffd23f",f.lineWidth=5,L(f,6,6,500,208,28),f.stroke(),f.textAlign="center",f.fillStyle="#ffd23f",f.font="900 24px Inter, sans-serif",f.fillText(ns>=0?"TOPPED OUT \xB7 A NEW ONE STARTS":"VICE TOWER \xB7 1 FLOOR PER LAUNCH",256,54),f.fillStyle="#fff",f.font="900 76px Inter, sans-serif",f.fillText(gt.toLocaleString("en-US"),256,138),f.fillStyle="rgba(220,214,255,.85)",f.font="800 22px Inter, sans-serif",f.fillText("pump.fun launches since you arrived",256,182),Z.tex.needsUpdate=!0}Ce();function Be(){_i++,gt++,performance.now()-V>700&&(V=performance.now(),Ce())}let z=d.position,ce=0,ye=0,Ve=0,wt=!1;function Ft(f,b){de.by.strobe.m.material.color.setScalar(Math.sin(b*9)>.7?1:.04),de.by.bcn.m.material.color.setScalar(Math.sin(b*3.1)>.2?1:.05);for(let ne=0;ne<2;ne++){let Me=Math.min(.99999,Math.max(0,((b*34/$e+ne*.5)%1+1)%1));ct.getPointAt(Me,k),ct.getTangentAt(Me,J);let Qe=Math.atan2(J.x,J.z),xt=-Math.asin(Math.max(-1,Math.min(1,J.y))),Rt=Qe-Je[ne];Rt=Math.atan2(Math.sin(Rt),Math.cos(Rt)),Je[ne]=Qe,It[ne]+=(Math.max(-.6,Math.min(.6,-Rt/Math.max(f,.001)*.9))-It[ne])*Math.min(1,f*3),de.set(5+ne,k.x,Math.max(0,k.y),k.z,Qe,xt,It[ne])}if($t.length&&b-Yt>7){let ne=K.find(Me=>!At.some(Qe=>Qe.slot===Me));if(ne!=null){let Me=$t.shift();At.push({t:Me,slot:ne,s:0,v:0,sp:fn(Me)}),Yt=b}}for(let ne=At.length-1;ne>=0;ne--){let Me=At[ne];Me.v=Math.min(62,Me.v+6.5*f),Me.s+=Me.v*f;let Qe=Math.max(0,Me.s-170),xt=he.x0+22+Me.s,Rt=Math.min(320,Qe*.22);de.set(Me.slot,xt,Rt,he.z,Math.PI/2,-Math.min(.21,Qe*.006)),Me.sp.position.set(xt,Rt+10,he.z);let un=Math.max(.42,Math.min(3.2,z.distanceTo(Me.sp.position)/90));Me.sp.scale.set(10.8*un,3.86*un,1),xt>1150&&(de.hide(Me.slot),e.remove(Me.sp),Me.sp.material.map.dispose(),Me.sp.material.dispose(),At.splice(ne,1))}de.flush();{let ne=Math.floor(b*14)%9;for(let Me=0;Me<7;Me++)Gt.setColorAt(Me,Ae.setScalar(Me===6-ne?6:.04));Gt.instanceColor.needsUpdate=!0}for(let ne=0;ne<ft;ne++){let Me=te[ne],[Qe,xt,Rt]=gn((b+ne*4.5)%18);N.compose(C.set(Qe,28.8,Me),S.identity(),O.set(3.4,1.6,4.4)),Pt.setMatrixAt(ne,N);let un=28,ci=xt+.5;N.compose(C.set(Qe,(un+ci)/2,Me),S,O.set(.14,Math.max(.01,un-ci),.14)),St.setMatrixAt(ne,N),N.compose(C.set(Qe,xt+.25,Me),S,O.set(2.9,.5,6.3)),bt.setMatrixAt(ne,N),Rt?N.compose(C.set(Qe,xt-1.29,Me),S,O.set(2.5,2.58,6.05)):N.copy(_e),Zt.setMatrixAt(ne,N)}Pt.instanceMatrix.needsUpdate=St.instanceMatrix.needsUpdate=bt.instanceMatrix.needsUpdate=Zt.instanceMatrix.needsUpdate=!0;for(let ne=0;ne<jt;ne++)Wt(Kn,b*8+ne/jt*Kn.len),mt.set(ne,ge.x,.6,ge.z,ge.yaw);mt.flush();for(let ne=0;ne<2;ne++){let Me=b*.09+ne*Math.PI,Qe=124+Math.cos(Me)*14,xt=-220+Math.sin(Me)*52,Rt=Math.atan2(-Math.sin(Me)*14,Math.cos(Me)*52);Oi.set(ne,Qe,.1+Math.sin(b*1.6+ne)*.12,xt,Rt),Math.random()<f*6&&v(C.set(Qe-Math.sin(Rt)*3.6,.5,xt-Math.cos(Rt)*3.6),ie.set((Math.random()-.5)*1.4,.6,(Math.random()-.5)*1.4),[2.2,2.4,2.8],1,.3,2.5)}Oi.flush();for(let ne=0;ne<Hs;ne++){let Me=ps[ne];Me.d+=Me.sp*f,Wt(Me.pa,Me.d),fr.set(ne,ge.x,ge.y,ge.z,ge.yaw,ge.pitch,0,Me.sc)}fr.flush();{let ne=b*15,Me=-b*15+Vn.len/2;for(let Qe=0;Qe<Ki;Qe++){Wt(Vn,ne-Qe*7.7);let xt=Math.cos(ge.yaw),Rt=Math.sin(ge.yaw);Vs.set(Qe,ge.x+1.9*xt,zn-.1,ge.z-1.9*Rt,ge.yaw),Wt(Vn,Me+Qe*7.7),xt=Math.cos(ge.yaw),Rt=Math.sin(ge.yaw),Vs.set(Ki+Qe,ge.x-1.9*xt,zn-.1,ge.z+1.9*Rt,ge.yaw+Math.PI)}Vs.flush()}Xr.forEach(([ne,Me,Qe,xt,Rt,un],ci)=>{let bs=b*Rt+un,Xa=ne+Qe*Math.sin(bs),qa=Me+xt*Math.sin(2*bs),Ao=Qe*Rt*Math.cos(bs),zf=2*xt*Rt*Math.cos(2*bs),ql=Math.atan2(Ao,zf);Wr.set(ci,Xa,.1+Math.abs(Math.sin(b*5+ci))*.12,qa,ql,-.05,Math.max(-.4,Math.min(.4,-Math.sin(2*bs)*.4))),Math.random()<f*12&&v(C.set(Xa-Math.sin(ql)*1.4,.45,qa-Math.cos(ql)*1.4),ie.set((Math.random()-.5)*1.6,.9+Math.random()*.6,(Math.random()-.5)*1.6),[2.4,2.6,3],.8,.26,2.6)}),Wr.flush();{let ne=b*.06,Me=186+Math.sin(ne)*10,Qe=-10+Math.sin(ne*2)*70,xt=Math.cos(ne)*10,Rt=Math.cos(ne*2)*140,un=Math.atan2(xt,Rt),ci=Math.sin(un),bs=Math.cos(un);qr.set(0,Me,.1,Qe,un),qr.flush();let Xa=Me-ci*26,qa=24+Math.sin(b*.7)*1.2,Ao=Qe-bs*26;vs.set(0,Xa,qa,Ao,un,0,Math.sin(b*.9)*.08),vs.flush(),k.set(Me-ci*3,1.4,Qe-bs*3),J.set(Xa,qa-4,Ao),S.setFromUnitVectors(re,ie.subVectors(J,k).normalize()),N.compose(C.addVectors(k,J).multiplyScalar(.5),S,O.set(.07,.07,k.distanceTo(J))),Yr.setMatrixAt(0,N),Math.random()<f*8&&v(C.set(Me-ci*3.4,.5,Qe-bs*3.4),ie.set((Math.random()-.5)*1.4,.7,(Math.random()-.5)*1.4),[2.2,2.4,2.8],1,.3,2.5)}{let ne=b*16;Wt(oi,ne);let Me=ge.x,Qe=ge.z,xt=ge.yaw;Va.set(0,Me,30+Math.sin(b*.8)*.6,Qe,xt,0,0),Va.flush(),Wt(oi,ne-27,He);let Rt=29.4+Math.sin(b*.8-.4)*.6;Qn.position.set(He.x,Rt,He.z),Qn.rotation.set(0,He.yaw-Math.PI/2,Math.sin(b*2.2)*.03),Gs.position.copy(Qn.position),Gs.rotation.set(0,He.yaw+Math.PI/2,-Math.sin(b*2.2)*.03),Wt(oi,ne-14,He),k.set(Me-Math.sin(xt)*3.2,30,Qe-Math.cos(xt)*3.2),J.set(He.x,Rt+.4,He.z),S.setFromUnitVectors(re,ie.subVectors(J,k).normalize()),N.compose(C.addVectors(k,J).multiplyScalar(.5),S,O.set(.06,.06,k.distanceTo(J))),gr.setMatrixAt(1,N),gr.instanceMatrix.needsUpdate=!0}{let ne=-26*Math.sin(Gn),Me=420*Math.cos(Gn);Gn+=f*6/Math.max(1,Math.hypot(ne,Me));let Qe=300+26*Math.cos(Gn),xt=420*Math.sin(Gn),Rt=Math.atan2(ne,Me);mi.position.set(Qe,Math.sin(b*.5)*.15,xt),mi.rotation.y=Rt,Math.random()<f*10&&v(C.set(Qe-Math.sin(Rt)*46+(Math.random()-.5)*8,.6,xt-Math.cos(Rt)*46),ie.set((Math.random()-.5)*2,.8,(Math.random()-.5)*2),[2.2,2.4,2.8],1.4,.45,2)}if((ce=(ce+1)%2)===0){let ne=b*2.1;us.forEach((Me,Qe)=>{let xt=Math.max(0,Math.sin(Me.a*2-ne))**6*.9;N.compose(C.set(Me.x,Me.y+.5+xt,Me.z),S.identity(),O.set(.55,.9,.55)),Fn.setMatrixAt(Qe,N)}),Fn.instanceMatrix.needsUpdate=!0}for(let ne=0;ne<_r.length;ne++){let Me=(b+_r[ne][2])%10;qs.setColorAt(ne,Me<4.2?Ae.setRGB(.3,3.4,1.1):Me<5?Ae.setRGB(3.6,2.4,.3):Ae.setRGB(3.6,.3,.35))}qs.instanceColor.needsUpdate=!0,yr.material.color.setScalar(Math.sin(b*2.6)>.35?1:.07);for(let ne=0;ne<Qi.length;ne+=5){let Me=(b*1.7+ne*.37)%7,Qe=Me>3.1&&Me<3.2||Me>3.35&&Me<3.5?.15:1;Wa.setColorAt(ne,Ae.copy(bo[ne]).multiplyScalar(Qe))}Wa.instanceColor.needsUpdate=!0;for(let ne=0;ne<Mt;ne++){let[Me,Qe,xt]=Te[ne];for(let Rt=0;Rt<dt;Rt++){let un=(b*.15+Rt/dt+ne*.37)%1,ci=(.9+un*3.4)*(un>.85?(1-un)/.15:1);N.compose(C.set(Me+un*8,Qe+.8+un*16,xt+un*2.5),S.setFromEuler(ae.set(un*2,ne+un,0)),O.setScalar(Math.max(.01,ci))),pt.setMatrixAt(ne*dt+Rt,N)}}if(pt.instanceMatrix.needsUpdate=!0,Ws.forEach((ne,Me)=>{ne.x+=f*3,ne.x>1e3&&(ne.x-=2e3),N.compose(C.set(ne.x,ne.y,ne.z),S.identity(),O.set(ne.w,ne.h,ne.d)),Cn.setMatrixAt(Me,N)}),Cn.instanceMatrix.needsUpdate=!0,Ms-=f,Ms<=0){Ms=9+Math.random()*12,ji=1;let ne=Math.random()*Yi;Qt.set(Math.cos(ne)*1500,420+Math.random()*200,Math.sin(ne)*1500),Kr.set(Math.cos(ne+2)*900,-160,Math.sin(ne+2)*900)}for(ji>0?(ji=Math.max(0,ji-f*1.6),Qt.addScaledVector(Kr,f),zi.position.copy(Qt),S.setFromUnitVectors(re,ie.copy(Kr).normalize()),zi.quaternion.copy(S),zi.scale.set(1.4,1.4,70),zi.material.opacity=ji,zi.visible=!0):zi.visible=!1,ye+=f*(F?14:30);ye>=1;)ye--,v(C.set(fe.x+(Math.random()-.5)*.4,2.2,fe.z+(Math.random()-.5)*.4),ie.set((Math.random()-.5)*2.4,11+Math.random()*4,(Math.random()-.5)*2.4),[1.3,2.2,3.2],1.6,.3,.4);Ve+=f;let A=Ve%9,X=Tn*2.6,se=Math.max(X,4)+6,Le=m,it=_,je=se,ht=!1;if(A<1.6)je=se+(2.4-se)*Xt(A/1.6);else if(A<2.1)je=2.4,ht=A>1.85;else if(A<3.6)je=2.4+(se-2.4)*Xt((A-2.1)/1.5),ht=!0;else if(A<5.6){let ne=Xt((A-3.6)/2);Le=m+(w-m)*ne,it=_+(B-_)*ne,ht=!0}else if(A<6.6)Le=w,it=B,je=se+(X+.55-se)*Xt(A-5.6),ht=!0;else if(A<7)Le=w,it=B,je=X+.55,ht=A<6.8;else if(A<8)Le=w,it=B,je=X+.55+(se-X-.55)*Xt(A-7);else{let ne=Xt(A-8);Le=w+(m-w)*ne,it=B+(_-B)*ne}if(A>=6.8&&A<7&&!wt&&(wt=!0,ns<0&&_i>0)){let ne=Math.min(_i,3);_i-=ne,Tn=Math.min(jr,Tn+ne),hn.count=Tn*6;for(let Me=0;Me<26;Me++)v(C.set(li+(Math.random()-.5)*8,Tn*2.6+1,ti+(Math.random()-.5)*8),ie.set((Math.random()-.5)*6,3+Math.random()*5,(Math.random()-.5)*6),[3.6,2.6,.5],1,.4,1.6);if(Tn>=jr){ns=b,Ce();for(let Me=0;Me<120;Me++){let Qe=Math.random()*Yi,xt=Math.acos(2*Math.random()-1),Rt=14+Math.random()*8;v(C.set(li,Tn*2.6+4,ti),ie.set(Math.sin(xt)*Math.cos(Qe)*Rt,Math.abs(Math.cos(xt))*Rt+4,Math.sin(xt)*Math.sin(Qe)*Rt),Me%3?[3.6,2.6,.5]:[3.4,.6,2],1.8,.7,1.4)}}}A<6.8&&(wt=!1),ns>=0&&b-ns>7&&(ns=-1,Tn=3,hn.count=Tn*6,Ce());let Lt=Ot-je;Ss.rotation.y=Le,is.position.x=it,ss.position.set(it,-(Lt-1)/2,0),ss.scale.y=Math.max(.1,Lt-1),wo.position.set(it,-Lt+.6,0),To.position.set(it,-Lt-.2,0),To.visible=ht,Li.position.set(li,X+.4,ti),Er.visible=Math.sin(b*3)>0}return{step:Ft,takeoff:Mn,setBanner:Jr,setArena:Xl,launched:Be,shots:{site:()=>[Pe(es+34,62,xi-52),Pe(li,Math.max(12,Tn*2.6*.55),ti)],airport:()=>[Pe(-232,30,-214),Pe(-350,6,-280)],arena:()=>[Pe(We.x+44,66,We.z+64),Pe(We.x,4,We.z)],port:()=>[Pe(130,46,-122),Pe(52,8,-222)],bridge:()=>[Pe(26,36,176),Pe(108,22,122)],beach:()=>{let f=Qn.position,b=f.x<128;return[Pe(f.x+(b?-46:-40),38,f.z+(b?-30:30)),Pe(f.x,27,f.z)]}},glowG:lt,tower:()=>({x:li,y:Tn*2.6,z:ti}),bannerPos:()=>Qn.position,posts:Ue,pickables:()=>{let f=[Qn,Gs,Ri];for(let b of At)f.push(b.sp);return f}}}var hs=(i,e,t)=>Math.max(e,Math.min(t,i)),Gl=(i,e,t)=>{let n=hs((t-i)/(e-i),0,1);return n*n*(3-2*n)},jx=(i,e,t)=>{let n=e-i;return n=Math.atan2(Math.sin(n),Math.cos(n)),i+n*t};function Of(i){let{scene:e,cam:t,canvas:n,target:s,HALF:r,PITCH:o,BLK:a,BEACH_X:c,zones:l,homeLot:h,WHEEL:u,helis:p,cars:x,more:y,mobile:v,hotMint:g}=i,d=new Ns(1,1,1),L=new Hn;e.add(L);let M=K=>new qt({color:K}),H=(K,de,me)=>new Ut({color:new De(K,de,me),toneMapped:!1}),P=(K,de,me,ct,$e,Je,It)=>{let At=new vt(d,K);return At.scale.set(de,me,ct),At.position.set($e,Je,It),L.add(At),At},F=M("#ff2f8e"),N=M("#160c3a");P(F,2.3,.62,4.8,0,.72,0),P(F,2.1,.26,1.5,0,1.12,1.35),P(N,1.92,.62,2.2,0,1.3,-.35),P(F,1.98,.12,2.1,0,1.66,-.35),P(M("#1a1030"),2.3,.12,.5,0,1.3,-2.3),P(M("#1a1030"),.14,.4,.3,.8,1.06,-2.3),P(M("#1a1030"),.14,.4,.3,-.8,1.06,-2.3);for(let[K,de]of[[1.13,1.55],[-1.13,1.55],[1.13,-1.55],[-1.13,-1.55]])P(M("#0c0a14"),.42,.78,.8,K,.39,de);P(H(4.6,4.3,3.8),.52,.18,.08,.72,.84,2.42),P(H(4.6,4.3,3.8),.52,.18,.08,-.72,.84,2.42),P(H(4,.3,.55),1.9,.14,.08,0,.92,-2.42);let le=(K,de,me)=>{let ct=document.createElement("canvas");ct.width=ct.height=128;let $e=ct.getContext("2d"),Je=$e.createRadialGradient(64,64,4,64,64,64);Je.addColorStop(0,`rgba(${K},${de},${me},1)`),Je.addColorStop(.45,`rgba(${K},${de},${me},.35)`),Je.addColorStop(1,`rgba(${K},${de},${me},0)`),$e.fillStyle=Je,$e.fillRect(0,0,128,128);let It=new ai(ct);return It.colorSpace=Kt,It},S=(K,de,me,ct,$e)=>{let Je=new vt(new ri(de,me).rotateX(-Math.PI/2),new Ut({map:K,transparent:!0,depthWrite:!1,blending:Ei,toneMapped:!1,color:new De($e,$e,$e)}));return Je.position.set(0,.08,ct),Je.renderOrder=2,L.add(Je),Je};S(le(255,60,200),5,7.6,0,1.5);let C=S(le(255,236,200),8,15,10.5,.9),O={x:-80,z:7,yaw:Math.PI/2,v:0,steer:0};function ae(){L.position.set(O.x,0,O.z),L.rotation.set(0,O.yaw,0),L.rotateZ(-O.steer*hs(O.v/40,-1,1)*.07)}let[Ae,k]=h,J=[[-423,-293,-213,-195],[-268,-256,-210,-198],[-242,-210,-214,-196],[-487,-433,-224,-200],[-504,-480,-240,-232],[-422,-298,-247,-220],[-248,-232,182,194],[-98,-54,158,194]];function ie(K,de){for(let[Je,It,At]of y.posts)if((K-Je)*(K-Je)+(de-It)*(de-It)<At*At)return!1;if(Math.hypot(K,de)>560||K>c+13.2||K>-40&&K<84&&de>-292&&de<-148)return!1;if(Math.abs(K)<=r&&Math.abs(de)<=r){if(K>c+2.2||Math.abs(K-Ae)<7&&Math.abs(de-k)<7)return!0;let Je=((K+r)%o+o)%o,It=((de+r)%o+o)%o;return Je>=a-.15||It>=a-.15}if(K>c+2.2||Math.abs(K)<r+26&&Math.abs(de)<r+26)return!0;for(let[Je,It,At,$t]of J)if(K>Je&&K<It&&de>At&&de<$t)return!1;let me=((K+2)%36+36)%36,ct=((de+2)%36+36)%36;if(me>=31.6||ct>=31.6)return!0;let $e=l.get(Math.floor((K+2)/36),Math.floor((de+2)/36));return $e===Bt.lot||$e===Bt.ring||$e===Bt.hwy||$e===Bt.park||$e===Bt.golf||$e===Bt.air}let xe=(K,de,me,ct,$e)=>ie(K,de)&&ie(K+me*2.2*$e,de+ct*2.2*$e)&&ie(K+ct*1.1,de-me*1.1)&&ie(K-ct*1.1,de+me*1.1),ue=Ae-9,re=Ae+9,_e=["streets","hot","drops","graduates","pulse","whales","safehouse","harbor","trending","x","roam"],Re=[[[-86,7],[-34,7]],[[-11,7],[-11,-21]],[[-11,-29],[-4,-29]],[[25,-29],[25,-112],[-184,-112],[-184,-280],[-222,-280]],[[-286,-280],[-286,-184],[-148,-184],[-148,26]],[[-148,32],[-100,32],[-100,25],[-29,25]],[[ue,25],[ue,k],[Ae-2,k]],[[re,k],[re,7],[64.5,7]],[[64.5,18]],[[64.5,28]],[[64.5,46]]],I=[],W=[],oe=[],Pe=0;for(let K of Re){let de=Pe;for(let me of K)I.length&&(Pe+=Math.hypot(me[0]-I[I.length-1][0],me[1]-I[I.length-1][1])),I.push(me);W.push(Pe),oe.push(Pe-de)}let ge=[0];for(let K=1;K<I.length;K++)ge.push(ge[K-1]+Math.hypot(I[K][0]-I[K-1][0],I[K][1]-I[K-1][1]));function He(K,de){K=hs(K,0,Pe);let me=1;for(;me<I.length-1&&ge[me]<K;)me++;let ct=I[me-1],$e=I[me],Je=ge[me]-ge[me-1]||1,It=hs((K-ge[me-1])/Je,0,1);return de[0]=ct[0]+($e[0]-ct[0])*It,de[1]=ct[1]+($e[1]-ct[1])*It,de}let lt=[0,0],Ke=[0,0],at=K=>(He(K-2.5,lt),He(K+2.5,Ke),Math.atan2(Ke[0]-lt[0],Ke[1]-lt[1])),yt=y.tower,$=new U,Wt={hot:()=>Xe&&Xe.pos?$.set(Xe.pos[0],1.2,Xe.pos[1]):null,drops:()=>{let K=yt();return $.set(K.x,Math.max(10,K.y*.7),K.z)},graduates:()=>$.set(-430,9,-280),pulse:()=>$.set(-178,18,32),whales:()=>p[0]?$.copy(p[0].g.position):null,safehouse:()=>$.set(Ae,2,k),harbor:()=>$.set(c+46,3,-6),trending:()=>$.copy(y.bannerPos()),x:()=>$.set(u.x,17,u.z)},tt=new U,rt=new U,Fe=new U,Vt=new U,_t=new U,R=new U,E=new U,Q=new U;function we(K,de,me,ct,$e,Je=12,It=5.2){let At=Math.sin(me),$t=Math.cos(me);ct.set(K-At*Je,It,de-$t*Je),$e.set(K+At*14,2.2,de+$t*14)}let ve={streets:"chase",hot:"front",drops:"road",graduates:"poi",pulse:"pulse",whales:"up",safehouse:"road",harbor:"beach",trending:"beach",x:"beach",roam:"chase"};function Se(K,de,me,ct,$e,Je){let It=_e[K],At=ve[It]||"chase",$t=Wt[It],Yt=$t&&$t(),fn=Math.sin(ct),Mn=Math.cos(ct),_n=Mn,T=-fn;if(At==="chase"||!Yt&&At!=="pulse")return we(de,me,ct,$e,Je);if(At==="front"){$e.set(de-fn*8+_n*1.4,3.9,me-Mn*8+T*1.4),Je.set(de+fn*7+_n*1.4,2.6,me+Mn*7+T*1.4);return}if(At==="road"){$e.set(de-fn*12,8.5,me-Mn*12),Je.set(de+(Yt.x-de)*.5,2+(Yt.y-2)*.5,me+(Yt.z-me)*.5);return}if(At==="up"){let et=t.aspect<.8?0:6;$e.set(de-fn*7,2.2,me-Mn*7),Je.set(de+fn*24-_n*et,11,me+Mn*24-T*et);return}if(At==="pulse"){$e.set(de+7,8,me-9),Je.set(-174,15,32);return}if(At==="beach"){$e.set(c+2.8,Yt.y>20?13:22,me+(Yt.z>me?-9:9)),Je.set(de+(Yt.x-de)*.6,1.5+(Yt.y-1.5)*.6,me+(Yt.z-me)*.6);return}let Y=Yt.x-de,j=Yt.z-me,te=Math.hypot(Y,j)||1;Y/=te,j/=te;let ee=13+Math.min(10,te*.06),ze=5+Math.min(16,Math.max(0,Yt.y-6)*.4);$e.set(de-Y*ee-j*4,ze,me-j*ee+Y*4),Je.set(de+(Yt.x-de)*.55,2+(Yt.y-2)*.55,me+(Yt.z-me)*.55)}let Ge=[0,0];function Ue(K){let de=_e.length;K=hs(K,0,de-1);let me=Math.floor(K),ct=Math.min(de-1,me+1),$e=K-me,Je=Gl(.12,.88,$e),It=W[me]+(W[ct]-W[me])*Je;return He(It,Ge),{i:me,j:ct,f:$e,d:It,x:Ge[0],z:Ge[1],yaw:at(It)}}function Ne(K){let de=Ue(K);return O.x=de.x,O.z=de.z,O.yaw=de.yaw,ae(),Se(K,de.x,de.z,de.yaw,E,Q),[E.clone(),Q.clone()]}let Xe=null,nt=null,pe=!1;function Ct(K,de){pe=!0;let me=Ue(K),ct=me.d!==O.d;O.v=ct&&de>0?hs(Math.abs(me.d-(O.d??me.d))/de,0,400):0,O.d=me.d,O.x=me.x,O.z=me.z,O.yaw=jx(O.yaw,me.yaw,1-Math.exp(-de*9)),O.steer=0,ae();let $e=Math.round(hs(K,0,_e.length-1)),Je=Math.abs(K-$e)<.55,It=Je&&{hot:"hot",drops:"new",graduates:"migrated"}[_e[$e]]||null;It!==nt&&(nt=It,Xe=null),nt&&(!Xe||!Xe.coin||nt==="hot"&&g&&g()&&Xe.coin.mint!==g())&&(Xe=D(nt));let At=1-Gl(0,.3,me.f),$t=Gl(.7,1,me.f),Yt=Math.max(0,1-At-$t);Se(me.i,me.x,me.z,O.yaw,tt,rt),Se(me.j,me.x,me.z,O.yaw,Fe,Vt);let fn=hs((oe[me.j]-150)*.42,0,230)*Math.sin(Math.PI*Gl(.1,.9,me.f));we(me.x,me.z,O.yaw,_t,R,12+fn*.55,5.2+fn),fn>1&&R.lerp($.set(me.x,0,me.z),Math.min(1,fn/50)),E.set(0,0,0).addScaledVector(tt,At).addScaledVector(Fe,$t).addScaledVector(_t,Yt),Q.set(0,0,0).addScaledVector(rt,At).addScaledVector(Vt,$t).addScaledVector(R,Yt);let Mn=(ve[_e[me.i]]==="up"?At:0)+(ve[_e[me.j]]==="up"?$t:0);t.aspect<.8&&(E.y+=4*(1-Mn),Q.lerp($.set(me.x,-6,me.z),.55*(1-Mn)));let _n=1-Math.exp(-de*3.4);t.position.lerp(E,_n),s.lerp(Q,_n),Gt(46,de)}function D(K){let de=K==="hot"&&g&&g();if(de){let $e=x.find(Je=>Je.coin&&!Je.mine&&Je.coin.mint===de);if($e)return $e}let me=null,ct=-1/0;for(let $e of x){if(!$e.coin||$e.police||$e.mine)continue;let Je=$e.coin,It=K==="hot"?Je.cat!=="new"?Je.heat||0:-1:K==="new"?Je.cat==="new"?Je.created||0:-1/0:Je.cat==="migrated"?Je.grad||0:-1/0;It>ct&&(ct=It,me=$e)}return ct===-1/0?null:me}function Ee(K,de){if(!pe||K!==Xe||!nt)return null;let me=Math.sin(O.yaw),ct=Math.cos(O.yaw),$e=ct,Je=-me;return[O.x+$e*2.9+me*.5,O.z+Je*2.9+ct*.5,O.yaw-Math.PI/2,Math.abs(O.v||0)]}let Te={},be={x:0,y:0,on:!1},ke=null,Mt=0,dt=0,pt=-9,fe=()=>{let K=document.activeElement;return K&&/INPUT|TEXTAREA|SELECT/.test(K.tagName)},G=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space"]);addEventListener("keydown",K=>{fe()||K.metaKey||K.ctrlKey||G.has(K.code)&&(Te[K.code]=!0,Ie&&K.code!=="ShiftLeft"&&K.code!=="ShiftRight"&&K.preventDefault(),he&&/^Key[WASD]$/.test(K.code)&&he())}),addEventListener("keyup",K=>{Te[K.code]=!1}),addEventListener("blur",()=>{for(let K in Te)Te[K]=!1}),n.addEventListener("pointerdown",K=>{!Ie||K.pointerType!=="mouse"||(ke=[K.clientX,K.clientY])}),addEventListener("pointermove",K=>{ke&&(Mt-=(K.clientX-ke[0])*.006,dt=hs(dt+(K.clientY-ke[1])*.004,-.35,.9),ke=[K.clientX,K.clientY],pt=performance.now())}),addEventListener("pointerup",()=>{ke=null});let Ie=!1,he=null,qe=document.createElement("div");qe.className="joy",qe.innerHTML="<i></i>",document.body.appendChild(qe);let Ze=qe.firstChild;qe.addEventListener("pointerdown",K=>{be.on=!0;try{qe.setPointerCapture(K.pointerId)}catch{}ut(K),K.preventDefault()}),qe.addEventListener("pointermove",K=>{be.on&&ut(K)});let Et=()=>{be.on=!1,be.x=be.y=0,Ze.style.transform=""};qe.addEventListener("pointerup",Et),qe.addEventListener("pointercancel",Et);function ut(K){let de=qe.getBoundingClientRect(),me=de.width/2;if(me<4)return;let ct=(K.clientX-de.left-me)/me,$e=(K.clientY-de.top-me)/me,Je=Math.hypot(ct,$e);Je>1&&(ct/=Je,$e/=Je),be.x=ct,be.y=$e,Ze.style.transform=`translate(${ct*me*.55}px,${$e*me*.55}px)`,he&&he()}function Gt(K,de){let me=t.fov+(K-t.fov)*Math.min(1,de*3);Math.abs(me-t.fov)>.01&&(t.fov=me,t.updateProjectionMatrix())}function cn(K){let de=Te.KeyW||Te.ArrowUp||be.y<-.22,me=Te.KeyS||Te.ArrowDown||be.y>.4,ct=Te.ShiftLeft||Te.ShiftRight,$e=(Te.KeyA||Te.ArrowLeft?1:0)-(Te.KeyD||Te.ArrowRight?1:0);be.on&&($e=-be.x);let Je=ct?58:36,It=ct?36:22;de?O.v+=(O.v<0?42:It)*K:me?O.v-=(O.v>0?46:14)*K:O.v-=Math.sign(O.v)*Math.min(Math.abs(O.v),10*K),O.v>Je&&(O.v=Math.max(Je,O.v-30*K)),O.v=hs(O.v,-13,60),Te.Space&&(O.v*=Math.max(0,1-K*3)),isFinite($e)||($e=0),O.steer+=($e-O.steer)*Math.min(1,K*8),isFinite(O.yaw)||(O.yaw=0),isFinite(O.v)||(O.v=0),O.yaw+=O.steer*K*2.2*Math.min(1,Math.abs(O.v)/9)*Math.sign(O.v||1)*(1-Math.min(.5,Math.abs(O.v)/120));let At=Math.sin(O.yaw),$t=Math.cos(O.yaw),Yt=O.x+At*O.v*K,fn=O.z+$t*O.v*K,Mn=Math.sign(O.v)||1;xe(Yt,fn,At,$t,Mn)?(O.x=Yt,O.z=fn):xe(Yt,O.z,At,$t,Mn)?(O.x=Yt,O.v*=1-K*2):xe(O.x,fn,At,$t,Mn)?(O.z=fn,O.v*=1-K*2):O.v*=-.2,ae(),!ke&&performance.now()-pt>1600&&(Mt*=1-Math.min(1,K*2),dt*=1-Math.min(1,K*2));let _n=Math.abs(O.v),T=O.yaw+Mt,Y=11.5+_n*.07,j=4.4+_n*.025+dt*9;E.set(O.x-Math.sin(T)*Y*Math.cos(dt*.6),j,O.z-Math.cos(T)*Y*Math.cos(dt*.6)),Q.set(O.x+At*7,1.9,O.z+$t*7);let te=1-Math.exp(-K*6);t.position.lerp(E,te),s.lerp(Q,te),Gt(52+_n*.3,K),C.material.color.setScalar(.9+Math.min(.5,_n*.01))}return{story:Ct,free:cn,shot:Ne,pinPos:Ee,pose:ae,S:O,names:_e,place(K){let de=Ue(K);O.x=de.x,O.z=de.z,O.yaw=de.yaw,O.v=0,ae()},setActive(K,de){Ie=K,he=de||null,K&&(pe=!1,nt=null,Xe=null),qe.classList.toggle("on",K&&(matchMedia("(pointer:coarse)").matches||v)),K||Et()},chasePose(K,de){we(O.x,O.z,O.yaw,K,de)},open:ie}}var lr=Math.PI*2;function Qx(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}var Di=9,Ni=14,Ff=4,di=Ni+Ff,Sn=Di*di/2,sn=Sn-di*1.4,e_=`
attribute float aSeed; varying vec3 vW; varying vec3 vN; varying vec3 vC; varying float vS; varying float vTop; varying float vBot;
void main(){
  vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
  vW = w.xyz; vN = normalize(mat3(modelMatrix * instanceMatrix) * normal); vC = instanceColor; vS = aSeed;
  vTop = (modelMatrix * instanceMatrix * vec4(0.0, 0.5, 0.0, 1.0)).y; vBot = (modelMatrix * instanceMatrix * vec4(0.0, -0.5, 0.0, 1.0)).y;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,t_=`
uniform vec3 uFog; uniform float uFogD; uniform vec3 uSun; uniform float uWin; uniform float uTime; uniform float uFlash;
varying vec3 vW; varying vec3 vN; varying vec3 vC; varying float vS; varying float vTop; varying float vBot;
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main(){
  vec3 n = normalize(vN);
  vec2 uv = abs(n.y) > .5 ? vW.xz : (abs(n.x) > .5 ? vec2(vW.z, vW.y) : vec2(vW.x, vW.y));
  vec2 f = fract(uv + .0001), id = floor(uv + .0001);
  float seam = smoothstep(0., .07, min(min(f.x, 1. - f.x), min(f.y, 1. - f.y)));
  float shade = .82 + .3 * h21(id * 1.31 + vS * 17.);
  vec3 base = vC * shade;
  float dif = max(dot(n, uSun), 0.);
  vec3 col = base * (.42 + .62 * dif + .18 * max(n.y, 0.));
  col *= mix(.55, 1., seam);
  if (uWin > .5 && abs(n.y) < .5 && vW.y > vBot + 1.5 && vW.y < vTop - .6) {
    float r = h21(id + vS * 91.7 + sign(n.x + n.z) * 3.7);
    float row = step(.5, fract(id.y * .5));
    float win = step(.18, f.x) * step(f.x, .82) * step(.2, f.y) * step(f.y, .8) * row;
    float lit = step(.52, r) * step(.15, h21(vec2(id.y, vS)));
    vec3 wc = pow(mix(vec3(1., .78, .45), mix(vec3(1., .45, .8), vec3(.45, .8, 1.), step(.5, h21(id + 2.))), step(.7, h21(id * 3.))), vec3(2.2));
    float fl = .85 + .15 * sin(uTime * 2. + r * 40.);
    col = mix(col, mix(base * .25, wc * 1.7 * fl, lit), win);
  }
  col *= 1. + uFlash * .9;
  float d = length(vW - cameraPosition), fo = 1. - exp(-uFogD * uFogD * d * d);
  gl_FragColor = vec4(mix(col, uFog * (1. + uFlash * 1.5), fo), 1.);
}`,n_=`
uniform vec3 uFog; uniform float uFogD; uniform float uPitch; uniform float uBlk; uniform float uHalf; uniform float uBeach; uniform float uTime; uniform float uFlash;
uniform sampler2D uZone; uniform vec4 uRw; uniform float uTwz; uniform vec4 uApron; uniform vec4 uField; uniform vec4 uPortR;
varying vec3 vW;
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main(){
  vec2 p = vW.xz; vec2 id = floor(p), f = fract(p);
  float seam = smoothstep(0., .06, min(min(f.x, 1. - f.x), min(f.y, 1. - f.y)));
  float r = h21(id); vec3 col; vec3 gl = vec3(0.);
  vec3 SOD = vec3(1., .58, .27);
  if (abs(p.x) <= uHalf && abs(p.y) <= uHalf) {
    vec2 q = mod(p + uHalf, uPitch);
    float road = step(uBlk, q.x) + step(uBlk, q.y);
    float side = (step(uBlk - 1., q.x) * step(q.x, uBlk) + step(uBlk - 1., q.y) * step(q.y, uBlk) + step(0., q.x) * step(q.x, 1.) + step(0., q.y) * step(q.y, 1.));
    col = mix(vec3(.16, .42, .3), vec3(.2, .5, .34), r);
    if (side > .5) col = mix(vec3(.55, .52, .62), vec3(.62, .6, .7), r);
    if (road > .5) {
      col = mix(vec3(.11, .1, .16), vec3(.14, .13, .2), r);
      float cx = abs(q.x - (uBlk + uPitch) * .5), cy = abs(q.y - (uBlk + uPitch) * .5);
      if (step(uBlk, q.x) > .5 && cx < .12 && fract(p.y * .25) < .5 && step(uBlk, q.y) < .5) col = vec3(.95, .78, .3);
      if (step(uBlk, q.y) > .5 && cy < .12 && fract(p.x * .25) < .5 && step(uBlk, q.x) < .5) col = vec3(.95, .78, .3);
      float zb = 0.;
      if (q.x >= uBlk && q.y < uBlk && ((q.y > uBlk - 2.7 && q.y < uBlk - .7) || (q.y > .7 && q.y < 2.7))) zb = step(.5, fract(q.x * 1.4));
      if (q.y >= uBlk && q.x < uBlk && ((q.x > uBlk - 2.7 && q.x < uBlk - .7) || (q.x > .7 && q.x < 2.7))) zb = step(.5, fract(q.y * 1.4));
      col = mix(col, vec3(.86, .84, .92), zb * .8);
    }
    float ic = (uBlk + uPitch) * .5; vec2 dq = mod(q - ic + uPitch * .5, uPitch) - uPitch * .5;
    float hh = h21(floor((p + uHalf - ic + uPitch * .5) / uPitch) + 3.1);
    vec3 lc = hh < .72 ? SOD : hh < .88 ? vec3(.62, .78, 1.) : vec3(1., .42, .82);
    gl += lc * exp(-dot(dq, dq) * .045) * .34;
  } else {
    vec2 cell = floor((p + 2.) / 36.);
    float z = floor(texture2D(uZone, (cell + 16.5) / 33.).r * 255. + .5);
    if (abs(cell.x) > 16. || abs(cell.y) > 16.) z = 0.;
    vec2 q2 = mod(p + 2., 36.);
    float rd = step(32., q2.x) + step(32., q2.y);
    col = mix(vec3(.15, .26, .24), vec3(.19, .31, .27), r);
    if (z == 1.) col = mix(vec3(.17, .33, .25), vec3(.21, .38, .28), r);
    else if (z == 2.) col = mix(vec3(.24, .22, .32), vec3(.28, .26, .36), r);
    else if (z == 3.) col = mix(vec3(.17, .16, .22), vec3(.2, .19, .25), r);
    else if (z == 4.) { col = mix(vec3(.13, .12, .18), vec3(.15, .14, .2), r); if (q2.y > 18. && q2.y < 31. && q2.x > 1. && q2.x < 31.) col = mix(col, vec3(.78, .78, .84), step(.86, fract(q2.x / 3.2)) * step(fract((q2.y - 18.) / 4.4), .7)); }
    else if (z == 5.) col = mix(vec3(.16, .4, .26), vec3(.2, .46, .3), r);
    else if (z == 6.) { col = mix(vec3(.2, .5, .28), vec3(.24, .56, .32), step(.5, fract((p.x + p.y) / 10.))); vec2 bq = fract(p / 13.) - .5; if (h21(floor(p / 13.)) > .8 && length(bq) < .24) col = vec3(.9, .8, .58); }
    else if (z == 7.) col = mix(vec3(.18, .3, .22), vec3(.21, .34, .25), r);
    else if (z == 8.) col = mix(vec3(.3, .29, .36), vec3(.34, .33, .4), r);
    else if (z == 9.) col = mix(vec3(.26, .22, .34), vec3(.3, .26, .38), r);
    else if (z == 10.) col = mix(vec3(.15, .28, .23), vec3(.18, .32, .26), r);
    bool open = z < 4.5 || z > 9.5;
    if (open) {
      if (rd > .5) {
        col = mix(vec3(.12, .11, .18), vec3(.15, .14, .21), r);
        if (rd < 1.5) { float c2 = q2.x >= 32. ? abs(q2.x - 34.) : abs(q2.y - 34.); float al = q2.x >= 32. ? p.y : p.x; if (c2 < .1 && fract(al * .25) < .5) col = vec3(.85, .7, .3); }
      }
      vec2 dq2 = mod(q2 - 34. + 18., 36.) - 18.;
      gl += SOD * exp(-dot(dq2, dq2) * .03) * .3;
    }
    if (z == 8.) { vec2 dp = vec2(mod(p.x + 35., 26.) - 13., mod(p.y + 290., 48.) - 24.); gl += vec3(1., .9, .75) * exp(-dot(dp, dp) * .006) * .32; }
    if (z == 9.) gl += vec3(.7, .75, 1.) * .04;
  }
  // Vice International: the runway with its markings, the taxiway and its links, the apron with lead-in lines
  float dz = p.y - uRw.z;
  if (p.x > uRw.x && p.x < uRw.y && abs(dz) < uRw.w) {
    col = mix(vec3(.09, .09, .13), vec3(.11, .11, .15), r);
    float m = step(abs(dz), .3) * step(.5, fract(p.x / 14.));
    m = max(m, step(uRw.w - .7, abs(dz)) * step(abs(dz), uRw.w - .3));
    m = max(m, step(min(p.x - uRw.x, uRw.y - p.x), 12.) * step(.45, fract(dz / 1.8)) * step(abs(dz), uRw.w - 1.4));
    m = max(m, (step(abs(p.x - uRw.x - 46.), 6.) + step(abs(p.x - uRw.y + 46.), 6.)) * step(1.6, abs(dz)) * step(abs(dz), 4.2));
    col = mix(col, vec3(.9, .9, .96), min(1., m));
  }
  if (p.x > uRw.x + 12. && p.x < uRw.y - 12. && abs(p.y - uTwz) < 4.2) { col = mix(vec3(.11, .11, .15), vec3(.13, .13, .17), r); if (abs(p.y - uTwz) < .16) col = vec3(.95, .78, .3); }
  if ((abs(p.x - uRw.x - 26.) < 4. || abs(p.x - uRw.y + 26.) < 4. || abs(p.x - (uRw.x + uRw.y) * .5) < 4.) && p.y > uRw.z + uRw.w && p.y < uTwz) col = mix(vec3(.11, .11, .15), vec3(.13, .13, .17), r);
  if (p.x > uApron.x && p.x < uApron.y && p.y > uApron.z && p.y < uApron.w) { col = mix(vec3(.3, .29, .36), vec3(.33, .32, .4), r); float gx = mod(p.x + 410., 25.); if (min(gx, 25. - gx) < .16) col = vec3(.95, .78, .3); gl += vec3(1., .85, .6) * .05; }
  // the arena: a red running track round a striped, floodlit pitch
  vec2 fd = p - uField.xy;
  if (length(fd / vec2(uField.z + 5.5, uField.w + 5.5)) < 1.) col = mix(vec3(.62, .22, .3), vec3(.68, .26, .34), r);
  if (abs(fd.x) < uField.z && abs(fd.y) < uField.w) {
    col = mix(vec3(.16, .52, .26), vec3(.2, .6, .3), step(.5, fract(fd.x / 4.)));
    float ln = step(abs(abs(fd.x) - (uField.z - .4)), .14) + step(abs(abs(fd.y) - (uField.w - .4)), .14) + step(abs(fd.x), .12) + step(abs(length(fd) - 4.5), .14);
    col = mix(col, vec3(.95), min(1., ln)); gl += vec3(.85, .9, 1.) * .22;
  }
  // the beach, with wet sand and surf at the waterline; concrete where the port meets the sea
  bool port = p.x > uPortR.x && p.x < uPortR.y && p.y > uPortR.z && p.y < uPortR.w;
  if (p.x > uBeach && !port) {
    col = mix(vec3(.93, .78, .58), vec3(.98, .84, .64), r);
    float wet = smoothstep(uBeach + 10.5, uBeach + 13.6, p.x);
    col = mix(col, vec3(.66, .58, .54), wet * .55);
    col = mix(col, vec3(1., .98, 1.), wet * step(.86, sin(uTime * 1.3 + p.y * .21 + sin(p.y * .047) * 3.) * .5 + .5) * .75);
  } else if (port && p.x > uBeach) col = mix(vec3(.3, .29, .36), vec3(.34, .33, .4), r);
  col *= mix(.62, 1., seam); col = pow(col, vec3(2.2)) * (1. + uFlash * .7);
  vec3 c2 = col * .78 + gl * mix(.7, 1., seam);
  float d = length(vW - cameraPosition), fo = 1. - exp(-uFogD * uFogD * d * d);
  gl_FragColor = vec4(mix(c2, uFog, fo), 1.);
}`,Rh="varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",i_=`
uniform vec3 uFog; uniform float uFogD; uniform float uTime; uniform float uFlash; varying vec3 vW;
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main(){
  vec2 id = floor(vW.xz * .5); float r = h21(id), w = .5 + .5 * sin(uTime * 1.3 + r * 6.28 + vW.x * .2);
  vec3 col = mix(vec3(.16, .2, .62), vec3(.32, .26, .78), w * .7);
  col += vec3(1., .5, .8) * pow(w, 12.) * .7;
  vec2 f = fract(vW.xz * .5); col *= mix(.8, 1., smoothstep(0., .05, min(min(f.x, 1. - f.x), min(f.y, 1. - f.y)))); col = pow(col, vec3(2.2)) * (1. + uFlash);
  float d = length(vW - cameraPosition), fo = 1. - exp(-uFogD * uFogD * d * d);
  gl_FragColor = vec4(mix(col, uFog, fo), 1.);
}`,s_=`
varying vec3 vW; uniform float uTime; uniform float uFlash; uniform float uMood;
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main(){
  vec3 d = normalize(vW - cameraPosition); float y = d.y;
  vec3 top = vec3(.18, .25, .89), mid = vec3(.54, .25, .89), hor = mix(vec3(.62, .12, .3), vec3(1., .31, .62), smoothstep(.25, .5, uMood));
  hor = mix(hor, vec3(1., .55, .5), smoothstep(.6, .85, uMood) * .6); mid = mix(vec3(.36, .14, .58), mid, smoothstep(.2, .5, uMood));
  vec3 c = mix(hor, mid, smoothstep(-.02, .22, y)); c = mix(c, top, smoothstep(.22, .75, y));
  vec2 sp = floor(d.xz / max(.05, d.y + .3) * 160.); float st = step(.9965, h21(sp)) * smoothstep(.15, .5, y);
  c = pow(c, vec3(2.2)); c += uFlash * vec3(.45, .4, .9) * smoothstep(-.1, .5, y); c += st * (.6 + .4 * sin(uTime * 2. + h21(sp + 1.) * 30.));
  gl_FragColor = vec4(c, 1.);
}`;function Y_(i,e={}){let t=matchMedia("(pointer:coarse)").matches||innerWidth<760,n=new uo({canvas:i,antialias:!1,powerPreference:"high-performance"});n.toneMapping=vo,n.toneMappingExposure=1.05,n.outputColorSpace=Kt;let s=Math.min(devicePixelRatio||1,t?1.25:1.5),r=new yl,o=new De("#4a2a8a"),a={uFog:{value:o},uFogD:{value:.0031},uTime:{value:0},uFlash:{value:0},uMood:{value:.5}},c=new qn(42,1,.5,5200),l=Qx(20261119),h=new U(-.45,.75,.5).normalize();r.add(new vt(new po(2600,32,16),new xn({side:Zn,depthWrite:!1,uniforms:{uTime:a.uTime,uFlash:a.uFlash,uMood:a.uMood},vertexShader:Rh,fragmentShader:s_})));let u=Df(Sn,sn),p=new vt(new ri(5e3,5e3,1,1).rotateX(-Math.PI/2),new xn({uniforms:{...a,uPitch:{value:di},uBlk:{value:Ni},uHalf:{value:Sn},uBeach:{value:sn},uZone:{value:u.tex},uRw:{value:new nn(an.rw.x0,an.rw.x1,an.rw.z,an.rw.hw)},uTwz:{value:an.twz},uApron:{value:new nn(an.apron.x0,an.apron.x1,an.apron.z0,an.apron.z1)},uField:{value:new nn(an.field.x,an.field.z,an.field.hx,an.field.hz)},uPortR:{value:new nn(an.port.x0,an.port.x1,an.port.z0,an.port.z1)}},vertexShader:Rh,fragmentShader:n_}));r.add(p);let x=new vt(new ri(2600,5e3).rotateX(-Math.PI/2).translate(sn+14+1300,.35,0),new xn({uniforms:a,vertexShader:Rh,fragmentShader:i_}));r.add(x);let y=m=>new xn({uniforms:{...a,uSun:{value:h},uWin:{value:m?1:0}},vertexShader:e_,fragmentShader:t_}),v=()=>new Ns(1,1,1),g=[],d=e.gate&&!e.reduced?0:99;function L(m,_=!1,w=!0){let B=v(),Z=new Float32Array(m.length),V=new ln(B,y(_),m.length);w&&g.push({m:V,list:m});let q=new zt,Ce=new Rn,Be=new U,z=new U,ce=new cs;return m.forEach((ye,Ve)=>{Be.set(ye.x,ye.y+ye.h/2,ye.z),z.set(ye.w,ye.h,ye.d),Ce.setFromEuler(ce.set(ye.rx||0,ye.ry||0,ye.rz||0)),q.compose(Be,Ce,z),V.setMatrixAt(Ve,q),V.setColorAt(Ve,ye.c),Z[Ve]=l()}),B.setAttribute("aSeed",new Or(Z,1)),V.instanceMatrix.needsUpdate=!0,V.instanceColor.needsUpdate=!0,V.frustumCulled=!1,r.add(V),V}let M=m=>new De(m),H=["#ff9ec9","#9ff0d0","#c8a8ff","#ffc9a0","#a8d8ff","#fff0a8"].map(M),P=["#2a2f7a","#3a2a8a","#28407a","#4a2f8f","#232a66"].map(M),F=["#8f86b8","#a49ccb","#7a72a8","#b3a9d6"].map(M),N=[],le=[],S=[],C=[],O=[],ae=null,Ae=m=>-Sn+m*di+Ni/2;for(let m=0;m<Di;m++)for(let _=0;_<Di;_++){let w=Ae(m),B=Ae(_);if(w>sn-2)continue;if(m===4&&_===2){ae={x:w,z:B};continue}let Z=Math.hypot(w,B)/Sn,V=w>sn-di-2;if(!V&&l()<.08){S.push([w,B]);continue}let q=V?2:l()<.45?1:4,Ce=q===1?[[0,0,Ni-2,Ni-2]]:q===2?[[0,-3.5,Ni-3,6],[0,3.5,Ni-3,6]]:[[-3.5,-3.5,6,6],[3.5,-3.5,6,6],[-3.5,3.5,6,6],[3.5,3.5,6,6]];for(let[Be,z,ce,ye]of Ce){let Ve=Math.max(3,Math.round(ce-l()*2)),wt=Math.max(3,Math.round(ye-l()*2)),Ft=V?5+Math.round(l()*5):Z<.35?22+Math.round(l()*30):Z<.65?9+Math.round(l()*14):4+Math.round(l()*7),kt=V?H[Math.floor(l()*H.length)]:Ft>20?P[Math.floor(l()*P.length)]:l()<.5?F[Math.floor(l()*F.length)]:H[Math.floor(l()*H.length)],f=w+Be,b=B+z;if(N.push({x:f,y:0,z:b,w:Ve,d:wt,h:Ft,c:kt}),Ft>22&&(N.push({x:f,y:Ft,z:b,w:Math.max(2,Ve-2),d:Math.max(2,wt-2),h:Math.round(3+l()*6),c:kt}),l()<.6)){let A=7+l()*6;le.push({x:f,y:Ft+3,z:b,w:.4,d:.4,h:A,c:M("#c8c0e8")}),O.push([f,Ft+3+A,b])}if(l()<.55&&le.push({x:f+(l()-.5)*(Ve-2),y:Ft,z:b+(l()-.5)*(wt-2),w:1.6,d:1.2,h:1,c:M("#5a5280")}),C.push({x:f,y:Ft,z:b,w:Ve,d:wt,big:Ft>20}),V)for(let A of[-1,1])le.push({x:f-Ve/2-.02,y:2+(A+1)*1.6,z:b,w:.3,d:wt*.8,h:.35,c:M(A>0?"#ff4f9e":"#5fd8ff"),neon:!0})}}L(N,!0);let k=le.filter(m=>m.neon),J=le.filter(m=>!m.neon);L(J);let ie=new ln(v(),new Ut({toneMapped:!1}),k.length);{let m=ie,_=new zt;k.forEach((w,B)=>{_.compose(new U(w.x,w.y,w.z),new Rn,new U(w.w,w.h,w.d)),m.setMatrixAt(B,_),m.setColorAt(B,w.c.clone().multiplyScalar(3))}),r.add(m)}let xe=[];function ue(m,_,w=1){let B=Math.round(7+l()*4),Z=(l()-.5)*.25;for(let Ce=0;Ce<B;Ce++)xe.push({x:m+Z*Ce*Ce*.08,y:Ce*.9*w,z:_,w:.7*w,d:.7*w,h:.9*w,c:M(Ce%2?"#8a5a3a":"#7a4e30")});let V=m+Z*B*B*.08,q=B*.9*w;for(let Ce=0;Ce<6;Ce++){let Be=Ce/6*lr+l()*.4;for(let z=1;z<=5;z++)xe.push({x:V+Math.cos(Be)*z*.8*w,y:q+(z<3?.3:-(z-2)*.55)*w,z:_+Math.sin(Be)*z*.8*w,w:.75*w,d:.75*w,h:.35*w,c:M(z%2?"#2fbf6e":"#26a85e")})}xe.push({x:V,y:q-.3,z:_,w:1.1*w,d:1.1*w,h:.8*w,c:M("#2fbf6e")})}for(let m=-Sn+6;m<Sn;m+=9)ue(sn+5+l()*2,m+l()*3),l()<.6&&ue(sn+10+l()*3,m+4);let re=S.slice().sort((m,_)=>Math.hypot(m[0]-30,m[1]-30)-Math.hypot(_[0]-30,_[1]-30))[0]||[sn-30,30];for(let m of S){if(m===re)continue;let[_,w]=m;ue(_-3,w-2),ue(_+3,w+3),ue(_+2,w-4,.8)}for(let m=-3;m<=3;m++)ue(-Sn-8,m*20+4);L(xe);let _e=[];for(let m=0;m<26;m++){let _=Math.PI*(.55+m/25*.95),w=640+l()*260,B=Math.cos(_)*w,Z=Math.sin(_)*w*1.1,V=70+l()*110,q=50+l()*130;for(let Ce=0;Ce<5;Ce++){let Be=1-Ce/5;_e.push({x:B,y:q*Ce/5,z:Z,w:V*Be+10,d:V*Be*.8+10,h:q/5+.5,c:M(Ce>3?"#4a3c86":"#2c2160")})}}L(_e,!1,!1);let Re=34,I=new U(sn+60,21,Re),W=[];for(let m=sn+10;m<=sn+74;m+=2)W.push({x:m,y:1.4,z:Re,w:2.02,d:9,h:.5,c:M(m%4?"#9a6a48":"#8a5c3c")});for(let m=sn+16;m<=sn+74;m+=8)for(let _ of[-4,4])W.push({x:m,y:-1,z:Re+_,w:.7,d:.7,h:2.5,c:M("#5a3a28")});for(let m of[-4.4,4.4])for(let _=sn+10;_<=sn+74;_+=4)W.push({x:_,y:1.9,z:Re+m,w:.25,d:.25,h:1.1,c:M("#e8e0f4")});for(let m of[-3,3])W.push({x:I.x-4,y:1.9,z:I.z+m*1.6,w:1,d:1,h:18,c:M("#d8d0ec"),ry:0}),W.push({x:I.x+4,y:1.9,z:I.z+m*1.6,w:1,d:1,h:18,c:M("#d8d0ec")});L(W);let oe=new Hn,Pe=new Hn;oe.position.copy(I),r.add(oe),oe.add(Pe);let ge=56,He=new ln(v(),new Ut({toneMapped:!1}),ge);He.frustumCulled=!1,Pe.add(He);{let m=new zt,_=new Rn;for(let w=0;w<ge;w++){let B=w/ge*lr;_.setFromAxisAngle(new U(0,0,1),B),m.compose(new U(Math.cos(B)*15,Math.sin(B)*15,0),_,new U(.7,1.8,.7)),He.setMatrixAt(w,m),He.setColorAt(w,new De(1,1,1))}}let lt=new qt({color:"#cfc6ee"});for(let m=0;m<8;m++){let _=new vt(v(),lt);_.scale.set(30,.35,.35),_.rotation.z=m/8*Math.PI,Pe.add(_)}let Ke=new vt(v(),new Ut({color:new De(3,1.2,2.4),toneMapped:!1}));Ke.scale.set(2.2,2.2,3),Pe.add(Ke);let at=[],yt=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#c8a8ff","#ff8a4a"];for(let m=0;m<12;m++){let _=new vt(v(),new qt({color:yt[m%yt.length]}));_.scale.set(2,2.2,2.4),oe.add(_),at.push(_)}oe.rotation.y=Math.PI/2;let $=new U(sn+26,0,Sn+70),Wt=[];for(let m=0;m<9;m++)Wt.push({x:$.x,y:m*2.6,z:$.z,w:5-m*.25,d:5-m*.25,h:2.6,c:M(m%2?"#ff4f6e":"#f4f0ff")});Wt.push({x:$.x,y:23.4,z:$.z,w:3.4,d:3.4,h:2.4,c:M("#2a2060")}),L(Wt,!1,!1);let tt=new vt(v(),new Ut({color:new De(4,3.6,2.4),toneMapped:!1}));tt.scale.set(2.2,1.6,2.2),tt.position.set($.x,24.6,$.z),r.add(tt);let rt=new vt(new rr(9,260,24,1,!0).rotateZ(-Math.PI/2).translate(130,0,0),new Ut({color:new De(1,.92,.7),transparent:!0,opacity:.07,blending:Ei,depthWrite:!1,side:Yn}));rt.position.set($.x,24.6,$.z),r.add(rt);let Fe=m=>-Sn+m*di-Ff/2;function Vt(){let m=1+Math.floor(l()*(Di-2)),_=1+Math.floor(l()*(Di-2)),w=Math.min(Di,m+1+Math.floor(l()*3)),B=Math.min(Di,_+1+Math.floor(l()*3)),Z=[[Fe(m),Fe(_)],[Fe(w),Fe(_)],[Fe(w),Fe(B)],[Fe(m),Fe(B)]].map(([Ce,Be])=>[Math.min(Ce,sn-1),Be]);l()<.5&&Z.reverse();let V=[],q=0;for(let Ce=0;Ce<4;Ce++){let Be=Z[Ce],z=Z[(Ce+1)%4],ce=Math.hypot(z[0]-Be[0],z[1]-Be[1])||1;V.push({a:Be,b:z,l:ce,at:q}),q+=ce}return{segs:V,len:q}}function _t(m,_,w){_=(_%m.len+m.len)%m.len;for(let B of m.segs)if(_<=B.at+B.l){let Z=(_-B.at)/B.l,V=(B.b[0]-B.a[0])/B.l,q=(B.b[1]-B.a[1])/B.l;return[B.a[0]+(B.b[0]-B.a[0])*Z-q*w,B.a[1]+(B.b[1]-B.a[1])*Z+V*w,Math.atan2(V,q)]}return[m.segs[0].a[0],m.segs[0].a[1],0]}let R=t?44:76,E=6,Q=[["body",[0,.55,0],[1.1,.6,2.2]],["cab",[0,1.05,-.15],[1,.45,1.2]],["w1",[.5,.25,.7],[.25,.5,.5]],["w2",[-.5,.25,.7],[.25,.5,.5]],["w3",[.5,.25,-.7],[.25,.5,.5]],["w4",[-.5,.25,-.7],[.25,.5,.5]]],we={};for(let[m]of Q){let _=new ln(v(),m==="body"?new qt:new qt({color:m==="cab"?"#1a1638":"#0c0a14"}),R);_.frustumCulled=!1,r.add(_),we[m]=_}let ve=new ln(v(),new Ut({toneMapped:!1}),R*4);ve.frustumCulled=!1,r.add(ve);let Se=[];for(let m=0;m<R;m++)Se.push({r:Vt(),d:l()*400,sp:6+l()*6,side:1,coin:null,police:m>=R-E,color:M(["#e8e4f4","#ffcf4a","#ff7aa8","#7ad8ff","#a8ff9e","#ff9a5a"][Math.floor(l()*6)])});let Ge={cars:Se},Ue=new Map;function Ne(m,_){if(!m)return;let w=Ue.get(m);if(w){w.im?_(w.im):w.cbs.push(_);return}w={im:null,cbs:[_],tries:0},Ue.set(m,w);let B=()=>{let Z=new Image;Z.crossOrigin="anonymous",Z.referrerPolicy="no-referrer",Z.onload=()=>{w.im=Z;for(let V of w.cbs.splice(0))V(Z)},Z.onerror=()=>{++w.tries<2&&setTimeout(B,1e4)},Z.src=w.tries?m+(m.includes("?")?"&":"?")+"r="+Date.now()%1e5:m};B()}let Xe=m=>{let _=0;m=String(m||"");for(let w=0;w<m.length;w++)_=_*31+m.charCodeAt(w)>>>0;return _%360};function nt(m,_,w,B,Z,V){let q=Xe(V||Z),Ce=m.createLinearGradient(_-B,w-B,_+B,w+B);Ce.addColorStop(0,`hsl(${q},80%,62%)`),Ce.addColorStop(1,`hsl(${(q+48)%360},72%,38%)`),m.fillStyle=Ce,m.fillRect(_-B,w-B,B*2,B*2),m.fillStyle="#fff",m.font=`900 ${Math.round(B*.8)}px Inter, sans-serif`,m.textAlign="center",m.textBaseline="middle",m.fillText(String(Z||"?").slice(0,2).toUpperCase(),_,w+B*.05),m.textBaseline="alphabetic"}let pe=new Map;function Ct(m,_,w,B,Z){let V=document.createElement("canvas");V.width=256,V.height=160;let q=V.getContext("2d"),Ce=ce=>{q.clearRect(0,0,256,160),q.fillStyle="rgba(12,6,36,.82)",D(q,28,98,200,42,21),q.fill(),q.fillStyle="#fff",q.font="900 26px Inter, sans-serif",q.textAlign="center",q.fillText("$"+m.symbol.slice(0,9),128,129),q.beginPath(),q.arc(128,50,44,0,lr),q.fillStyle=B?"#ffd23f":Z==="migrated"?"#5fc8ff":w?"#2ee6a6":"#ff4f9e",q.fill(),q.save(),q.beginPath(),q.arc(128,50,38,0,lr),q.clip(),ce?q.drawImage(ce,90,12,76,76):nt(q,128,50,38,m.symbol,m.mint),q.restore(),q.textAlign="center";for(let ye=0;ye<5;ye++){let Ve=6+ye*3;q.fillStyle=ye<_?["#ffd23f","#ffb13f","#ff8a4a","#ff5f7a","#ff4f9e"][ye]:"rgba(255,255,255,.25)",D(q,104+ye*10,158-Ve,7,Ve,2),q.fill()}B?(q.fillStyle="#ff4f9e",D(q,160,4,66,28,14),q.fill(),q.fillStyle="#fff",q.font="900 18px Inter, sans-serif",q.fillText("NEW",193,25)):Z==="migrated"&&(q.fillStyle="#2f8fd8",D(q,150,4,100,28,14),q.fill(),q.fillStyle="#fff",q.font="900 16px Inter, sans-serif",q.fillText("MIGRATED",200,24)),Be.needsUpdate=!0},Be=new ai(V);Be.colorSpace=Kt,Ce(null),Ne(m.iconUrl,Ce);let z=new wi(new fi({map:Be,depthTest:!0,transparent:!0}));return z.scale.set(6.4,4,1),z.renderOrder=5,z}function D(m,_,w,B,Z,V){m.beginPath(),m.moveTo(_+V,w),m.arcTo(_+B,w,_+B,w+Z,V),m.arcTo(_+B,w+Z,_,w+Z,V),m.arcTo(_,w+Z,_,w,V),m.arcTo(_,w,_+B,w,V),m.closePath()}let Ee=t?70:110,Te=10,be=Ee+Te,ke=new zt().makeScale(0,0,0),Mt=document.createElement("canvas");Mt.width=Mt.height=2048;let dt=Mt.getContext("2d"),pt=new ai(Mt);pt.colorSpace=Kt,pt.generateMipmaps=!1,pt.minFilter=hi;let fe=!1,G=Array.from({length:256},(m,_)=>_);function Ie(m,_,w){let B=m%16*128,Z=Math.floor(m/16)*128;dt.clearRect(B,Z,128,128),_?(dt.fillStyle="#120a30",dt.fillRect(B,Z,128,128),dt.drawImage(_,B+5,Z+5,118,118)):nt(dt,B+64,Z+64,64,w.symbol,w.mint),fe=!0}let he=v(),qe=new Or(new Float32Array(be*2),2);he.setAttribute("aCell",qe);let Ze=new qt({map:pt});Ze.onBeforeCompile=m=>{m.vertexShader=m.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
attribute vec2 aCell;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = (vMapUv + aCell) / 16.0;`)};let Et=(m,_,w)=>{let B=new ln(m,_,be);B.frustumCulled=!1;for(let Z=0;Z<be;Z++)B.setMatrixAt(Z,ke),w&&B.setColorAt(Z,M("#ffffff"));return r.add(B),B},ut={head:Et(he,Ze),body:Et(v(),new qt,1),armL:Et(v(),new qt,1),armR:Et(v(),new qt,1),legL:Et(v(),new qt({color:"#1a1638"})),legR:Et(v(),new qt({color:"#1a1638"})),ring:Et(v(),new Ut({toneMapped:!1,transparent:!0,opacity:.55,depthWrite:!1}),1)},Gt=Array.from({length:be},(m,_)=>({k:_,coin:null,mine:_>=Ee,pos:null,yaw:0,d:0,sp:1,L:Ni-1,x0:0,z0:0,ph:l()*6.28,scale:1,cell:-1,by:6})),cn=new Map,K=m=>{let _=0;for(let w=0;w<m.length;w++)_=_*31+m.charCodeAt(w)>>>0;return _},de=[];for(let m=0;m<Di;m++)for(let _=0;_<Di;_++)-Sn+m*di+Ni>sn+1||de.push([m,_]);function me(m,_){m.cell<0&&(m.cell=G.shift()),Ie(m.cell,null,_),qe.setXY(m.k,m.cell%16,15-Math.floor(m.cell/16)),qe.needsUpdate=!0;let w=m.cell,B=_.mint;m.icon=_.iconUrl||"",Ne(_.iconUrl,Z=>{m.coin&&m.coin.mint===B&&m.cell===w&&Ie(w,Z,_)})}function ct(m){m.cell>=0&&(G.push(m.cell),m.cell=-1),m.coin=null}function $e(m,_){let w=Math.min(Fe(m),sn-1),B=Math.min(Fe(m+1),sn-1),Z=Fe(_),V=Fe(_+1),q=[[w,Z],[B,Z],[B,V],[w,V]],Ce=[],Be=0;for(let z=0;z<4;z++){let ce=q[z],ye=q[(z+1)%4],Ve=Math.hypot(ye[0]-ce[0],ye[1]-ce[1])||1;Ce.push({a:ce,b:ye,l:Ve,at:Be}),Be+=Ve}return{segs:Ce,len:Be}}let Je=null,It=null;function At(m){let _=m.slice(0,Ee),w=new Set(_.map(V=>V.mint));for(let[V,q]of cn)w.has(V)||(ct(q),cn.delete(V));for(let[V,q]of pe)!w.has(V)&&!(q.car&&q.car.mine)&&(r.remove(q.sp),q.sp.material.map.dispose(),q.sp.material.dispose(),pe.delete(V));let B=Gt.filter(V=>!V.mine&&!V.coin);for(let V of _){let q=cn.get(V.mint),Ce=!1;if(!q){if(q=B.shift(),!q)break;cn.set(V.mint,q),Ce=!0;let z=K(V.mint),[ce,ye]=de[z%de.length];q.bi=ce,q.bj=ye,q.x0=-Sn+ce*di+.5,q.z0=-Sn+ye*di+.5,q.d=(z>>>8)%52,q.dir=z&1?1:-1,q.spawn=gt,q.fx=gt>4&&(V.isNew||V.cat==="migrated")?V.cat==="migrated"?1:0:null,q.coin=V,me(q,V)}q.coin=V,q.icon!==(V.iconUrl||"")&&me(q,V),q.sp=(1.1+(V.heat||0)*2.8)*q.dir,q.scale=.92+(V.heat||0)*.48;let Be=pe.get(V.mint);(!Be||Be.up!==V.up||Be.stars!==V.stars||Be.isNew!==!!V.isNew||Be.cat!==V.cat||Be.icon!==(V.iconUrl||""))&&(Be&&(r.remove(Be.sp),Be.sp.material.map.dispose()),Be={sp:Ct(V,V.stars,V.up,!!V.isNew,V.cat),up:V.up,stars:V.stars,isNew:!!V.isNew,cat:V.cat,icon:V.iconUrl||"",born:Be?Be.born:gt},Be.sp.userData={kind:"coin",key:V.mint},r.add(Be.sp),pe.set(V.mint,Be)),Be.car=q}Xl(_.filter(V=>V.cat!=="new")),Ai(_.filter(V=>V.cat==="hot"&&V.chg!=null).sort((V,q)=>(q.heat||0)-(V.heat||0))[0]||null);let Z=Gt.filter(V=>V.coin&&!V.mine&&!V.coin.isNew&&V.coin.chg!=null&&V.coin.chg<-3).sort((V,q)=>V.coin.chg-q.coin.chg)[0]||null;Z!==Je&&(Je=Z,It=Z?{r:$e(Z.bi,Z.bj),d:0}:null),Se.filter(V=>V.police).forEach((V,q)=>{V.chase=q<3?It:null,V.gap=4+q*7}),Yt=Z?Z.coin:null}let $t=m=>cn.get(m)||null,Yt=null,fn=[],Mn={new:M("#ffd23f"),migrated:M("#5fc8ff"),up:M("#2ee6a6"),dn:M("#ff4f9e")},_n={new:new De(3.4,2.5,.5),migrated:new De(.6,2.2,3.6),up:new De(.4,3.2,1.8),dn:new De(3.4,.5,1.7)},T=new zt,Y=new zt,j=new zt,te=new zt,ee=new U,ze=new U,et=new Rn,ft=new cs;function ot(m,_,w,B,Z,V,q,Ce,Be,z){Y.makeTranslation(w,B,Z),j.makeRotationX(V),te.makeTranslation(0,q,0),ze.set(Ce,Be,z),Ot.copy(T).multiply(Y).multiply(j).multiply(te).scale(ze),m.setMatrixAt(_,Ot)}function Pt(m){It&&(It.d+=11*m);for(let _ of Gt){let w=_.k,B=_.coin;if(!B){for(let A of Object.values(ut))A.setMatrixAt(w,ke);_.pos=null;continue}let Z,V,q,Ce=!0,Be=!1,z=1,ce=Qt.pinPos(_,gt);if(ce)Z=ce[0],V=ce[1],q=ce[2],Ce=ce[3]>1.5,Be=!Ce,z=Math.min(3,1+ce[3]/8);else if(_.mine)Z=_.gx,V=_.gz,q=_.gyaw,Ce=!1;else{let A=_.L*4;_.d=((_.d+_.sp*m)%A+A)%A;let X=Math.floor(_.d/_.L),se=_.d-X*_.L;Z=X===0?_.x0+se:X===1?_.x0+_.L:X===2?_.x0+_.L-se:_.x0,V=X===0?_.z0:X===1?_.z0+se:X===2?_.z0+_.L:_.z0+_.L-se,q=[Math.PI/2,0,-Math.PI/2,Math.PI][X]+(_.sp<0?Math.PI:0)}let ye=0,Ve=(gt-(_.spawn||-9))/.9;Ve<1?ye=16*(1-Ve)*(1-Ve):_.fx!=null&&(fn.push([Z,V,_.fx]),_.fx=null);let wt=_.scale,Ft=(5.2+Math.abs(_.sp)*1.5)*z,kt=Ce?Math.sin(gt*Ft+_.ph)*.62:0,f=Ce?Math.abs(Math.cos(gt*Ft+_.ph))*.12:Math.sin(gt*2.2+_.ph)*.03;T.compose(ee.set(Z,ye+f,V),et.setFromEuler(ft.set(0,q,0)),ze.set(wt,wt,wt)),ot(ut.legL,w,-.32,1.1,0,kt,-.55,.42,1.1,.46),ot(ut.legR,w,.32,1.1,0,-kt,-.55,.42,1.1,.46),ot(ut.body,w,0,1.66,0,0,0,1.2,1.12,.72),ot(ut.armL,w,-.79,2.12,0,-kt*.9,-.5,.34,1,.38),ot(ut.armR,w,.79,2.12,0,Be?-2.75+Math.sin(gt*9+_.ph)*.35:kt*.9,-.5,.34,1,.38),ot(ut.head,w,0,2.84,0,Math.sin(gt*1.7+_.ph)*.06,0,1.28,1.28,1.28);let b=B.cat==="new"||B.isNew?"new":B.cat==="migrated"?"migrated":B.up?"up":"dn";if(ut.body.setColorAt(w,Mn[b]),ut.armL.setColorAt(w,Mn[b]),ut.armR.setColorAt(w,Mn[b]),Ot.compose(ee.set(Z,.05,V),et.identity(),ze.set(2.3*wt,.04,2.3*wt)),ut.ring.setMatrixAt(w,ye>.5?ke:Ot),ut.ring.setColorAt(w,_n[b]),_.pos=[Z,V],_.yaw=q,_.by=ye+3.6*wt+(ce?1.3:2.4),!_.mine&&B.s5m){for(_.pb=(_.pb||0)+m*Math.min(3,(B.s5m.numBuys||0)/300),_.ps=(_.ps||0)+m*Math.min(3,(B.s5m.numSells||0)/300);_.pb>=1;)_.pb--,mi(tn.set(Z,3.2*wt,V),ms.set((l()-.5)*2,4+l()*2.5,(l()-.5)*2),[.3,3,1.7],.9,.34,2);for(;_.ps>=1;)_.ps--,mi(tn.set(Z,3.2*wt,V),ms.set((l()-.5)*2,3+l()*2,(l()-.5)*2),[3.2,.45,1.6],.9,.34,2)}}for(let _ of Object.values(ut))_.instanceMatrix.needsUpdate=!0,_.instanceColor&&(_.instanceColor.needsUpdate=!0);fe&&Ys%20===0&&(fe=!1,pt.needsUpdate=!0)}let St=t?140:320,bt=[],Zt=new ln(v(),new qt,St),Xt=new ln(v(),new qt({color:"#f0c9a0"}),St);Zt.frustumCulled=Xt.frustumCulled=!1,r.add(Zt),r.add(Xt);let gn=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#ffffff","#8a3fe2","#ff8a4a","#1a1638"].map(M),Kn=["#f0c9a0","#c98e62","#8a5a3a","#ffdcc0"].map(M);for(let m=0;m<St;m++){let _=Math.floor(l()*Di),w=Math.floor(l()*Di),B=-Sn+_*di+.5,Z=-Sn+w*di+.5,V=Ni-1;if(B>sn-2){m--;continue}bt.push({x0:B,z0:Z,L:V,d:l()*V*4,sp:(l()<.5?-1:1)*(.9+l()*.9),ph:l()*6.3}),Zt.setColorAt(bt.length-1,gn[Math.floor(l()*gn.length)]),Xt.setColorAt(bt.length-1,Kn[Math.floor(l()*Kn.length)])}Zt.instanceColor.needsUpdate=!0,Xt.instanceColor.needsUpdate=!0;function jt(m){bt.forEach((_,w)=>{_.d=((_.d+_.sp*m)%(_.L*4)+_.L*4)%(_.L*4);let B=Math.floor(_.d/_.L),Z=_.d-B*_.L,V=B===0?_.x0+Z:B===1?_.x0+_.L:B===2?_.x0+_.L-Z:_.x0,q=B===0?_.z0:B===1?_.z0+Z:B===2?_.z0+_.L:_.z0+_.L-Z,Ce=Math.abs(Math.sin(gt*7+_.ph))*.08,Be=(B%2?0:Math.PI/2)+(_.sp<0?Math.PI:0);pn.setFromEuler(Tn.set(0,Be,Math.sin(gt*7+_.ph)*.06)),tn.set(V,.62+Ce,q),hn.set(.42,.82,.3),Ot.compose(tn,pn,hn),Zt.setMatrixAt(w,Ot),tn.set(V,1.24+Ce,q),hn.set(.34,.34,.34),Ot.compose(tn,pn,hn),Xt.setMatrixAt(w,Ot)}),Zt.instanceMatrix.needsUpdate=!0,Xt.instanceMatrix.needsUpdate=!0}let mt=new Hn;r.add(mt);{let m=new qt({color:"#e8e2f8"}),_=new qt({color:"#2a2060"});[[4,4],[7.5,7],[9,8.4],[9,8.4],[7.5,7],[4.5,4.2]].forEach(([Z,V],q)=>{let Ce=new vt(v(),m);Ce.scale.set(5.2,V,Z),Ce.position.x=-12.5+q*5,mt.add(Ce)});for(let[Z,V]of[[4,0],[0,4],[0,-4]]){let q=new vt(v(),_);q.scale.set(4,Z?4:.4,V?4:.4),q.position.set(-14,Z*.9,V*.9),mt.add(q)}let w=new vt(v(),_);w.scale.set(7,1.8,2.6),w.position.set(1,-5,0),mt.add(w);let B=new vt(v(),new Ut({color:new De(4,.4,1.6),toneMapped:!1}));B.scale.setScalar(.8),B.position.set(15.6,0,0),mt.add(B),mt.userData.tip=B}let Oi=document.createElement("canvas");Oi.width=512,Oi.height=160;let We=Oi.getContext("2d"),$n=new ai(Oi);$n.colorSpace=Kt;let us=new Ut({map:$n,toneMapped:!1,color:new De(1.6,1.6,1.6)});for(let m of[4.32,-4.32]){let _=new vt(new ri(16,5),us);_.position.set(1,.4,m),_.rotation.y=m>0?0:Math.PI,mt.add(_)}let bn=null,Fi=null;function dn(){We.fillStyle="#0a0520",We.fillRect(0,0,512,160);let m=bn;if(We.fillStyle="#ff4f9e",We.fillRect(0,0,512,8),We.fillRect(0,152,512,8),!m){We.fillStyle="#fff",We.font="900 44px Inter, sans-serif",We.textAlign="center",We.fillText("THE TRENCHES",256,96),$n.needsUpdate=!0;return}We.save(),We.beginPath(),We.arc(80,80,52,0,lr),We.clip(),Fi?We.drawImage(Fi,28,28,104,104):nt(We,80,80,52,m.symbol,m.mint),We.restore(),We.textAlign="left",We.fillStyle="#ffd23f",We.font="900 22px Inter, sans-serif",We.fillText("#1 HOT RIGHT NOW",152,50),We.fillStyle="#fff",We.font="900 52px Inter, sans-serif";let _="$"+m.symbol;for(;We.measureText(_).width>340&&_.length>3;)_=_.slice(0,-2)+"\u2026";We.fillText(_,152,104),We.fillStyle=(m.chg||0)>=0?"#2ee6a6":"#ff4f9e",We.font="800 28px Inter, sans-serif",We.fillText(m.chg==null?"":(m.chg>0?"+":"")+m.chg.toFixed(1)+"% in 5 min",152,140),$n.needsUpdate=!0}dn();function Ai(m){if(!m||bn&&bn.mint===m.mint&&bn.chg===m.chg)return;let _=bn&&bn.mint===m.mint;if(bn=m,!_){Fi=null;let w=m.mint;Ne(m.iconUrl,B=>{bn&&bn.mint===w&&(Fi=B,dn())})}dn()}let Fn=[],Un={new:["#ffd23f","#2a1270"],migrated:["#5fc8ff","#062a4a"],bond:["#ff4f9e","#fff"],x:["#ffffff","#120a30"],hot:["#2ee6a6","#04261a"]};function st(m){let _=document.createElement("canvas");_.width=560,_.height=210;let w=_.getContext("2d"),[B]=Un[m.kind]||Un.x,Z=q=>{w.clearRect(0,0,560,210),w.fillStyle="rgba(10,5,32,.94)",D(w,6,6,548,150,40),w.fill(),w.beginPath(),w.moveTo(250,150),w.lineTo(280,196),w.lineTo(312,150),w.closePath(),w.fill(),w.strokeStyle=B,w.lineWidth=6,D(w,6,6,548,150,40),w.stroke(),w.save(),w.beginPath(),w.arc(84,81,50,0,lr),w.clip(),q?w.drawImage(q,34,31,100,100):m.mint?nt(w,84,81,50,m.mark,m.mint):(w.fillStyle=B,w.fillRect(34,31,100,100),w.fillStyle="#120a30",w.font="900 44px Inter, sans-serif",w.textAlign="center",w.fillText(m.mark||"?",84,97)),w.restore(),w.textAlign="left",w.fillStyle=B,w.font="900 24px Inter, sans-serif",w.fillText(m.kicker.toUpperCase(),156,58),w.fillStyle="#fff",w.font="900 40px Inter, sans-serif";let Ce=m.title;for(;w.measureText(Ce).width>380&&Ce.length>3;)Ce=Ce.slice(0,-2)+"\u2026";if(w.fillText(Ce,156,104),m.sub){w.fillStyle="rgba(220,210,255,.85)",w.font="700 24px Inter, sans-serif";let Be=m.sub;for(;w.measureText(Be).width>380&&Be.length>3;)Be=Be.slice(0,-2)+"\u2026";w.fillText(Be,156,138)}V.needsUpdate=!0},V=new ai(_);return V.colorSpace=Kt,Z(null),Ne(m.iconUrl,Z),V}function kr(m){for(;Fn.length>=(t?3:5);){let Z=Fn.shift();r.remove(Z.sp),Z.sp.material.map.dispose(),Z.sp.material.dispose()}let _=new wi(new fi({map:st(m),transparent:!0,depthTest:!1}));_.renderOrder=8,_.userData=m.mint?{kind:"coin",key:m.mint}:{kind:"bubble",key:m.title};let w=m.mint?$t(m.mint):null,B=m.at||(()=>{let Z=C[Math.floor(l()*C.length)];return[Z.x,Z.z,Z.y+14]})();r.add(_),Fn.push({sp:_,car:w,x:B[0],z:B[1],y:B[2]||12,t:0,life:m.life||6.5})}let fs=t?16:30,wn=[],Vr=[["hull",[0,.45,0],[2.4,.9,5.6],"#efeaff"],["trim",[0,.95,0],[2.5,.18,5.7],"#2f3fe4"],["deck",[0,1.35,-.9],[1.7,.8,2.2],"#241a5c"],["mast",[0,3.3,.7],[.24,4.4,.24],"#cfc6ee"],["sail",[0,3.5,1.35],[.14,3.4,1.9],"#ffffff"]],pi={};for(let[m,,,_]of Vr){let w=new ln(v(),new qt({color:_}),fs);w.frustumCulled=!1,w.count=0,r.add(w),pi[m]=w}pi.sail.material=new Ut({toneMapped:!1});function Oa(m){let _=document.createElement("canvas");_.width=256,_.height=92;let w=_.getContext("2d");w.fillStyle="rgba(8,18,48,.86)",D(w,6,8,244,76,22),w.fill(),w.strokeStyle="rgba(95,200,255,.8)",w.lineWidth=3,D(w,6,8,244,76,22),w.stroke(),w.fillStyle="#fff",w.font="900 30px Inter, sans-serif",w.textAlign="left",w.fillText(m.name.slice(0,8),22,52);let B=m.chg==null?"\u2014":(m.chg>0?"+":"")+m.chg.toFixed(1)+"%";w.textAlign="right",w.fillStyle=m.chg>=0?"#2ee6a6":"#ff4f9e",w.font="800 26px Inter, sans-serif",w.fillText(B,234,52),w.fillStyle="rgba(160,220,255,.85)",w.font="800 13px Inter, sans-serif",w.textAlign="left",w.fillText("PERP \xB7 "+(m.oi>=1e9?(m.oi/1e9).toFixed(1)+"B":(m.oi/1e6).toFixed(0)+"M")+" OI",22,74);let Z=new ai(_);Z.colorSpace=Kt;let V=new wi(new fi({map:Z,transparent:!0,depthTest:!0}));return V.renderOrder=5,V.userData={kind:"perp",key:m.name},V}function Wl(m){let _=m.filter(Z=>Z&&Z.oi>0).sort((Z,V)=>V.oi-Z.oi).slice(0,fs);if(wn.length&&_.length===wn.length&&_.every(Z=>wn.some(V=>V.p.name===Z.name))){for(let Z of _){let V=wn.find(Ce=>Ce.p.name===Z.name);V.p=Z;let q=Oa(Z);V.sp.material.map.dispose(),V.sp.material.map=q.material.map,V.sp.material.needsUpdate=!0,q.material.dispose()}return}for(let Z of wn)r.remove(Z.sp),Z.sp.material.map.dispose(),Z.sp.material.dispose();wn.length=0;let w=t?2:3,B=Math.ceil(fs/w);_.forEach((Z,V)=>{let q=V%w,Ce=Math.floor(V/w),Be=q%2?-1:1,z=.75+.6*Math.min(1,Math.max(0,Math.log10(Z.oi/1e6)/3));wn.push({p:Z,x:sn+30+q*15,dir:Be,sz:z,sp:Oa(Z),ph:l()*6.28,d:Ce/B*2*(2*Sn-12)+l()*4,pos:null,wake:0})});for(let Z of wn)r.add(Z.sp);for(let Z in pi)pi[Z].count=wn.length}let Ri=[],Os=[];for(let m of C.filter(_=>_.big).sort((_,w)=>w.y-_.y)){if(Ri.length>=5)break;Ri.every(_=>Math.hypot(_.x-m.x,_.z-m.z)>30)&&Ri.push(m)}function Fa(m,_){let w=document.createElement("canvas");w.width=384,w.height=176;let B=w.getContext("2d"),Z=B.createLinearGradient(0,0,384,176);Z.addColorStop(0,"#2f3fe4"),Z.addColorStop(.5,"#8a3fe2"),Z.addColorStop(1,"#ff4f9e");let V=Ce=>{B.clearRect(0,0,384,176),B.fillStyle=Z,D(B,4,4,376,168,26),B.fill(),B.fillStyle="rgba(10,5,32,.88)",D(B,12,12,360,152,20),B.fill(),B.save(),B.beginPath(),B.arc(88,88,52,0,lr),B.clip(),Ce?B.drawImage(Ce,36,36,104,104):nt(B,88,88,52,m.symbol,m.mint),B.restore(),B.textAlign="left",B.fillStyle="#ffd23f",B.font="900 20px Inter, sans-serif",B.fillText("#"+_+" ON THE STREETS",160,58),B.fillStyle="#fff",B.font="900 44px Inter, sans-serif",B.fillText("$"+m.symbol.slice(0,8),160,106);let Be=m.mcap||0;B.fillStyle="rgba(220,210,255,.9)",B.font="800 22px Inter, sans-serif",B.fillText((Be>=1e9?"$"+(Be/1e9).toFixed(2)+"B":"$"+(Be/1e6).toFixed(1)+"M")+" cap",160,140),q.needsUpdate=!0},q=new ai(w);return q.colorSpace=Kt,V(null),Ne(m.iconUrl,V),q}function Xl(m){m.filter(w=>!w.isNew&&w.mcap).sort((w,B)=>B.mcap-w.mcap).slice(0,Ri.length).forEach((w,B)=>{let Z=Os[B];if(Z&&Z.mint===w.mint&&Z.icon===(w.iconUrl||"")){Z.coin=w,Z.sp.userData.coin=w;return}if(!Z){Z=Os[B]={sp:new wi(new fi({transparent:!0,depthTest:!0}))},Z.sp.renderOrder=4;let V=Ri[B];Z.sp.position.set(V.x,V.y+10,V.z),Z.sp.scale.set(17,7.8,1),r.add(Z.sp)}Z.sp.material.map&&Z.sp.material.map.dispose(),Z.sp.material.map=Fa(w,B+1),Z.sp.material.needsUpdate=!0,Z.mint=w.mint,Z.icon=w.iconUrl||"",Z.coin=w,Z.sp.userData={kind:"bill",key:w.mint,coin:w}})}let za=Te,vn=[],Dt=new vt(new fo(3.4,3.4,140,24,1,!0).translate(0,70,0),new Ut({color:new De(1.6,.45,1.1),transparent:!0,opacity:.14,blending:Ei,depthWrite:!1,side:Yn}));Dt.position.set(re[0],0,re[1]),Dt.visible=!1,r.add(Dt);let jn=(()=>{let m=document.createElement("canvas");m.width=320,m.height=120;let _=m.getContext("2d");_.fillStyle="rgba(10,5,32,.9)",D(_,6,8,308,104,26),_.fill(),_.strokeStyle="#ff4f9e",_.lineWidth=4,D(_,6,8,308,104,26),_.stroke(),_.fillStyle="#ff9ec9",_.font="900 16px Inter, sans-serif",_.textAlign="center",_.fillText("YOUR SAFEHOUSE",160,44),_.fillStyle="#fff",_.font="900 25px Inter, sans-serif",_.fillText("Connect to park your bag",160,82);let w=new ai(m);w.colorSpace=Kt;let B=new wi(new fi({map:w,transparent:!0}));return B.position.set(re[0],7,re[1]),B.scale.set(10,3.75,1),B.userData={kind:"safehouse",key:"home"},r.add(B),B})();function cr(m){for(let B of vn)r.remove(B.sp),B.sp.material.map.dispose(),B.sp.material.dispose();for(let B of Gt)B.mine&&ct(B);vn.length=0;let _=(m||[]).slice(0,za),w=Gt.filter(B=>B.mine);_.forEach((B,Z)=>{let V=re[0]-5.2+Z%5*2.6,q=re[1]-2.5+Math.floor(Z/5)*5,Ce=w[Z],Be={mint:B.mint,symbol:B.sym||"?",iconUrl:B.iconUrl||"",up:(B.ch||0)>=0,cat:"mine"},z=Ct(Be,0,Be.up,!1);Ce.coin=Be,Ce.gx=V,Ce.gz=q,Ce.gyaw=-Math.PI/2,Ce.scale=.9,Ce.spawn=-9,Ce.fx=null,me(Ce,Be),z.userData={kind:"mine",key:B.mint,row:B},z.position.set(V,3.6*.9+1.7,q),z.scale.set(4.2,2.6,1),r.add(z),vn.push({r:B,x:V,z:q,sp:z})}),Dt.visible=vn.length>0,jn.visible=!vn.length}let ds=C.filter(m=>m.big),Ci=[];for(let m=0;m<Math.min(6,ds.length);m++){let _=ds[Math.floor(l()*ds.length)];Ci.push({x:_.x+(l()-.5)*(_.w-2),y:_.y+(_.big,0),z:_.z+(l()-.5)*(_.d-2)})}for(let m of Ci){let _=new xo("#ff7a3a",60,40,1.6);_.position.set(m.x,m.y+3,m.z),r.add(_),m.light=_}let Fs=Ci.length*10,Dn=new ln(v(),new Ut({toneMapped:!1}),Fs);Dn.frustumCulled=!1,r.add(Dn);let zs=t?160:320,hr=new ln(v(),new qt({color:"#3a2a5a",transparent:!0,opacity:.82}),zs);hr.frustumCulled=!1,r.add(hr);let Ba=Array.from({length:zs},(m,_)=>({f:Ci[_%Ci.length],t:l()*9,life:7+l()*3,ox:(l()-.5)*2,oz:(l()-.5)*2,s:.8+l()*.8})),Gr=160,Zi=new ln(v(),new Ut({toneMapped:!1}),Gr);Zi.frustumCulled=!1,r.add(Zi);let Mo=Array.from({length:Gr},()=>({t:9,p:new U,v:new U,c:new De})),Bs=new xo("#ffd0a0",0,120,1.4);r.add(Bs);let ur=new vt(new po(1,16,12),new Ut({color:new De(6,3.6,1.8),transparent:!0,opacity:0,toneMapped:!1}));r.add(ur);let Hs=new vt(new bl(1,.08,6,48).rotateX(Math.PI/2),new Ut({color:new De(3,2,2.6),transparent:!0,opacity:0,toneMapped:!1}));r.add(Hs);let fr=2,ps=9,kn=new U,zn=t?700:1600,Vn=new ln(v(),new Ut({toneMapped:!1}),zn);Vn.frustumCulled=!1,r.add(Vn);let Ji=Array.from({length:zn},()=>({t:9,life:1,p:new U,v:new U,c:new De,s:.4,drag:1})),ks=[[.3,3.4,2.1],[3.6,2.6,.5],[3.2,3.2,3.4],[3.6,.9,2.4],[1,1.8,3.8]],ms=new U,Ki=[],Vs=0,Bn=3.4,gs=8+l()*6,xs=9,_s=.5;function mi(m,_,w,B,Z,V){let q=Ji[Vs];Vs=(Vs+1)%zn,q.t=0,q.life=B,q.p.copy(m),q.v.copy(_),q.c.setRGB(w[0],w[1],w[2]),q.s=Z,q.drag=V}function Ha(){let m=Gt.filter(w=>w.coin&&!w.mine&&w.coin.up&&w.pos);if(!m.length)return;m.sort((w,B)=>(B.coin.chg||0)-(w.coin.chg||0));let _=m[Math.floor(l()*l()*Math.min(m.length,10))];Ki.push({p:new U(_.pos[0],2.5,_.pos[1]),v:new U((l()-.5)*4,36+l()*14,(l()-.5)*4),t:0,fuse:1.2+l()*.5,col:l()<.6?0:Math.floor(l()*ks.length)})}function ka(){let m=C[Math.floor(l()*C.length)];kn.set(m.x,m.y+1,m.z),ps=0;let _=0;for(let w of Mo){if(_>40)break;w.t>2.5&&(w.t=0,w.p.copy(kn),w.v.set((l()-.5)*22,8+l()*18,(l()-.5)*22),w.c.setRGB(3,1.2+l(),.3+l()*.4),_++)}}let Gn=[],dr=new U,pr=new Ut({color:new De(.7,.75,1),transparent:!0,opacity:.1,blending:Ei,depthWrite:!1,side:Yn});for(let m=0;m<3;m++){let _=new Hn,w=new qt({color:"#16123a"}),B=new vt(v(),w);B.scale.set(2.4,1.6,4),_.add(B);let Z=new vt(v(),w);Z.scale.set(.6,.6,4),Z.position.set(0,.3,-3.6),_.add(Z);let V=new vt(v(),new Ut({color:"#0c0a1e"}));V.scale.set(9,.12,.5),V.position.y=1.1,_.add(V);let q=new vt(new rr(9,60,24,1,!0).translate(0,-30,0),pr);q.position.y=-.6,_.add(q);let Ce=new vt(v(),new Ut({color:new De(4,.3,.4),toneMapped:!1}));Ce.scale.setScalar(.35),Ce.position.set(0,-.9,-1.6),_.add(Ce),r.add(_),Gn.push({g:_,rot:V,cone:q,red:Ce,r:30+m*18,h:46+m*9,spd:.12+m*.05,ph:m*2.1})}function Wr(m){Gn.forEach((_,w)=>{let B=m[w];if(_.sp&&(_.g.remove(_.sp),_.sp.material.map.dispose(),_.sp.material.dispose(),_.sp=null),!B)return;let Z=document.createElement("canvas");Z.width=300,Z.height=106;let V=Z.getContext("2d");V.fillStyle="rgba(10,5,32,.9)",D(V,6,8,288,90,22),V.fill(),V.strokeStyle="rgba(255,210,63,.9)",V.lineWidth=3,D(V,6,8,288,90,22),V.stroke(),V.fillStyle="#ffd23f",V.font="900 14px Inter, sans-serif",V.textAlign="left",V.fillText("PUMP.FUN WHALE",22,33),B.sol!=null&&(V.textAlign="right",V.fillStyle="rgba(220,214,255,.9)",V.font="800 15px Inter, sans-serif",V.fillText(Math.round(B.sol).toLocaleString("en-US")+" SOL",278,33)),V.textAlign="left",V.fillStyle="#fff",V.font="900 28px Inter, sans-serif",V.fillText(String(B.n||"").slice(0,14),22,65);let q=B.last;if(q){V.fillStyle=q.side==="buy"?"#2ee6a6":"#ff4f9e",V.font="800 15px Inter, sans-serif";let Be=(q.side==="buy"?"Bought $":"Sold $")+(q.sym||"\u2026")+" \xB7 "+(+q.sol||0).toFixed(1)+" SOL";for(;V.measureText(Be).width>256&&Be.length>4;)Be=Be.slice(0,-2)+"\u2026";V.fillText(Be,22,88)}let Ce=new ai(Z);Ce.colorSpace=Kt,_.sp=new wi(new fi({map:Ce,transparent:!0,depthTest:!1})),_.sp.renderOrder=6,_.sp.position.set(0,4.4,0),_.sp.scale.set(8.6,3.04,1),_.sp.userData={kind:"whale",key:B.a,whale:B},_.g.add(_.sp)})}let Xr=[];for(let m=0;m<5;m++){let _=ds[m*7%Math.max(1,ds.length)]||{x:0,y:30,z:0},w=new vt(new rr(6,220,20,1,!0).rotateX(Math.PI).translate(0,110,0),new Ut({color:new De(.9,.85,1),transparent:!0,opacity:.06,blending:Ei,depthWrite:!1,side:Yn}));w.position.set(_.x,_.y+1,_.z),r.add(w),Xr.push({cone:w,ph:m*1.3,sp:.25+m*.06})}let qr=t?500:1100,vs=new ln(v(),new Ut({color:new De(.55,.62,1.1),transparent:!0,opacity:.32,depthWrite:!1}),qr);vs.frustumCulled=!1,vs.count=0,r.add(vs);let Yr=Array.from({length:qr},()=>({x:(l()-.5)*170,y:l()*80,z:(l()-.5)*170,v:55+l()*25})),ys=0,oi=Nf({scene:r,col:M,voxMesh:L,boxGeo:v,U:a,mobile:t,HALF:Sn,PITCH:di,BLK:Ni,NB:Di,BEACH_X:sn,PIER_Z:Re,WHEEL:I,roofs:C,ants:O,site:ae,zones:u,spark:mi,seaMat:x.material,cam:c,rr:D,loadIcon:Ne,mono:nt});r.add(new Tl("#8a8aff","#3a1a4a",1.5));let Va=new Rl("#ffd0f0",1.5);Va.position.copy(h).multiplyScalar(100),r.add(Va),r.fog=null;let Pi=new Bl(n);Pi.addPass(new Hl(r,c));let Ga=new Na(new Ye(256,256),t?.38:.45,.42,.92);Pi.addPass(Ga),Pi.addPass(new kl);let Tt=new Nl(c,i);Tt.enableDamping=!0,Tt.dampingFactor=.06,Tt.minDistance=25,Tt.maxDistance=260,Tt.maxPolarAngle=1.32,Tt.minPolarAngle=.35,Tt.target.set(0,4,0),Tt.autoRotate=!0,Tt.autoRotateSpeed=.35,Tt.enablePan=!0,Tt.screenSpacePanning=!1;let Qn=.0031,Gs=new U(98,56,118),$i=new U(0,4,0),mr=new U,Zr=new U,Jr=Gs.clone(),gr=$i.clone(),ei=!!e.gate,Jt=ei?"gate":"drive",gi=0,Ws=0,xr=0,Cn=null,zi=Qn,Ms=0,ji=[],Kr=null,Qt=Of({scene:r,cam:c,canvas:i,target:Tt.target,HALF:Sn,PITCH:di,BLK:Ni,BEACH_X:sn,zones:u,homeLot:re,WHEEL:I,helis:Gn,cars:Gt,more:oi,mobile:t,hotMint:()=>Kr});Tt.enabled=!1,Tt.autoRotate=!1,ei?a.uFogD.value=.0018:(Qt.place(0),Qt.chasePose(c.position,Tt.target),Qt.setActive(!0)),Tt.addEventListener("start",()=>{xr=0,Tt.autoRotate=!1,gi=0,a.uFogD.value=Qn});let yn=(m,_,w)=>new U(m,_,w),Eo=()=>Gt.filter(m=>m.coin&&!m.mine&&m.pos&&m.coin.cat!=="new").sort((m,_)=>(_.coin.heat||0)-(m.coin.heat||0))[0],So={streets:()=>[yn(66+Math.sin(gt*.08)*8,36,76),yn(8,2,10)],hot:()=>{let m=Eo();return m?[yn(m.pos[0]+26,24,m.pos[1]+28),yn(m.pos[0],2,m.pos[1])]:So.streets()},drops:()=>[yn(-58+Math.sin(gt*.1)*6,62,18),yn(-4,2,-30)],migrated:()=>[yn(-78,60,64),yn(0,26,0)],harbor:()=>[yn(sn-16,27,48),yn(sn+44,0,-6)],pier:()=>[yn(sn+14+Math.sin(gt*.1)*4,12,Re+50),yn(I.x,15,I.z)],whales:()=>{let m=Gn[0]?Gn[0].g.position:yn(0,50,0);return[yn(m.x+24,m.y+3,m.z+24),yn(m.x,m.y-3,m.z)]},safehouse:()=>[yn(re[0]+26,21,re[1]+30),yn(re[0],2,re[1])],mood:()=>[yn(-180+Math.sin(gt*.05)*20,128,-150),yn(0,0,0)],roam:()=>[Gs.clone(),$i.clone()],...oi.shots},_r=m=>Qt.shot(m);function vr(m,_){mr.copy(c.position),Zr.copy(Tt.target),Jr.copy(m),gr.copy(_),zi=a.uFogD.value,e.reduced?(c.position.copy(m),Tt.target.copy(_),a.uFogD.value=Qn,gi=0):(gi=1,Ws=0),xr=0}function $r(){if(ei)if(ei=!1,ji.length){Jt="story",Tt.enabled=!1,Qt.setActive(!1,e.onWheel);let[m,_]=_r(Math.round(Ms));vr(m,_)}else qs(!0)}let Qi=new U,Xs=new U;function qs(m){Jt="drive",Tt.enabled=!1,Tt.autoRotate=!1,Cn=null,Qt.setActive(!0),m&&(Qt.chasePose(Qi,Xs),vr(Qi.clone(),Xs.clone()))}function yr(){Jt="map",Tt.enabled=!0,Qt.setActive(!1);let m=Qt.S;vr(new U(m.x+46,62,m.z+58),new U(m.x,2,m.z))}addEventListener("keydown",m=>{m.code!=="KeyV"||m.metaKey||m.ctrlKey||/INPUT|TEXTAREA|SELECT/.test((document.activeElement||{}).tagName||"")||(Jt==="drive"?yr():Jt==="map"&&qs(!1))});function Wa(){let m=i.clientWidth||innerWidth,_=i.clientHeight||innerHeight;n.setPixelRatio(s),n.setSize(m,_,!1),Pi.setPixelRatio(s),Pi.setSize(m,_),c.aspect=m/_,c.fov=m/_<.8?58:42,c.updateProjectionMatrix()}Wa(),addEventListener("resize",Wa);try{t||(Pi.renderTarget1.samples=4,Pi.renderTarget2.samples=4)}catch{}let bo=new Pl,es=new Ye,xi=null,li=null,ti=null,ts=()=>{let m=[];for(let _ of pe.values())m.push(_.sp);for(let _ of wn)m.push(_.sp);for(let _ of Os)m.push(_.sp);for(let _ of vn)m.push(_.sp);for(let _ of Fn)m.push(_.sp);jn.visible&&m.push(jn);for(let _ of Gn)_.sp&&m.push(_.sp);for(let _ of oi.pickables())m.push(_);return m};function Es(m,_){let w=i.getBoundingClientRect();es.set((m-w.left)/w.width*2-1,-(_-w.top)/w.height*2+1),bo.setFromCamera(es,c);let B=bo.intersectObjects(ts(),!1);return B.length?B[0].object.userData:null}function jr(m){if(!m)return null;if(m.kind==="coin"){let _=pe.get(m.key);return _&&_.car&&_.car.coin?{kind:"coin",coin:_.car.coin}:m.coin?{kind:"coin",coin:m.coin}:null}if(m.kind==="bill")return{kind:"coin",coin:pe.get(m.key)&&pe.get(m.key).car&&pe.get(m.key).car.coin||m.coin};if(m.kind==="perp"){let _=wn.find(w=>w.p.name===m.key);return _?{kind:"perp",perp:_.p}:null}return m.kind==="whale"?{kind:"whale",whale:m.whale}:m.kind==="mine"?{kind:"mine",row:m.row}:m.kind==="safehouse"?{kind:"safehouse"}:(m.kind==="bubble",null)}i.addEventListener("pointermove",m=>{if(m.pointerType&&m.pointerType!=="mouse")return;let _=Es(m.clientX,m.clientY),w=_?_.kind+":"+_.key:null,B=jr(_);xi=B&&B.kind==="coin"?B.coin.mint:null,w!==li&&(li=w,i.style.cursor=w?"pointer":"grab"),e.onHover&&e.onHover(B,m.clientX,m.clientY)}),i.addEventListener("pointerdown",m=>{ti=[m.clientX,m.clientY]}),i.addEventListener("pointerup",m=>{if(!ti||Math.hypot(m.clientX-ti[0],m.clientY-ti[1])>8)return;let _=jr(Es(m.clientX,m.clientY));if(_&&_.kind==="coin"){let w=pe.get(_.coin.mint);Cn=w&&w.car?w.car:null,Tt.autoRotate=!1}else _&&_.kind==="perp"?(Cn=wn.find(w=>w.p.name===_.perp.name)||null,Tt.autoRotate=!1):Cn=null;e.onPick&&e.onPick(_)});let Ot=new zt,pn=new Rn,tn=new U,hn=new U,Tn=new cs,_i=new De,gt=0,ns=performance.now(),Li=0,Ss=!1,Qr=!1,Ys=0;function Mr(m){gt+=m,a.uTime.value=gt,Ys++;let _=0;for(Se.forEach((z,ce)=>{z.d+=z.sp*m,z.police&&z.chase&&(z.r=z.chase.r,z.d=z.chase.d-z.gap);let[ye,Ve,wt]=_t(z.r,z.d,1);pn.setFromEuler(Tn.set(0,wt,0));let Ft=Math.sin(wt),kt=Math.cos(wt);for(let[b,A,X]of Q)tn.set(ye+A[0]*kt+A[2]*Ft,A[1],Ve-A[0]*Ft+A[2]*kt),hn.set(...X),Ot.compose(tn,pn,hn),we[b].setMatrixAt(ce,Ot);z.police?_i.set(Math.sin(gt*10+ce)>0?"#1a1a2e":"#f4f4ff"):_i.copy(z.color),we.body.setColorAt(ce,_i);let f=z.police?[[.3,1.35,-.1,Math.sin(gt*12+ce)>0?[5,.3,.4]:[.3,.5,5]],[-.3,1.35,-.1,Math.sin(gt*12+ce)>0?[.3,.5,5]:[5,.3,.4]]]:[[.35,.6,1.12,[4,3.8,3.2]],[-.35,.6,1.12,[4,3.8,3.2]],[.38,.6,-1.12,[3,.2,.25]],[-.38,.6,-1.12,[3,.2,.25]]];for(let[b,A,X,se]of f)tn.set(ye+b*kt+X*Ft,A,Ve-b*Ft+X*kt),hn.set(.28,.16,.1),Ot.compose(tn,pn,hn),ve.setMatrixAt(_,Ot),ve.setColorAt(_,_i.setRGB(...se)),_++;z.pos=[ye,Ve]});_<R*4;_++)Ot.makeScale(0,0,0),ve.setMatrixAt(_,Ot);Pt(m);for(let z of Object.values(we))z.instanceMatrix.needsUpdate=!0;we.body.instanceColor.needsUpdate=!0,ve.instanceMatrix.needsUpdate=!0,ve.instanceColor.needsUpdate=!0;let w=Jt==="story"||Jt==="drive";for(let[z,ce]of pe){if(!ce.car||!ce.car.pos)continue;let ye=Math.min(1,(gt-ce.born)*2);ce.sp.position.set(ce.car.pos[0],ce.car.by+.2*Math.sin(gt*2+ce.car.ph),ce.car.pos[1]);let Ve=1,wt=1;if(w){let Ft=c.position.distanceTo(ce.sp.position),kt=Qt.pinPos(ce.car,gt)!=null;Ve=kt?Math.max(.62,Math.min(1,(Ft-3)/22)):Math.max(.22,Math.min(1,(Ft-3)/30)),wt=kt?1:Math.max(0,Math.min(1,(Ft-5)/7))}ce.sp.material.opacity=wt,ce.sp.scale.set(6.4*ye*Ve*(xi===z?1.25:1),4*ye*Ve*(xi===z?1.25:1),1)}wn.forEach((z,ce)=>{z.d+=m*1.6;let ye=2*Sn-12,Ve=(z.d+(z.dir<0?ye:0))%(2*ye)/ye,wt=Ve<=1,Ft=-Sn+6+(wt?Ve:2-Ve)*ye,kt=z.x+Math.sin(gt*.3+z.ph)*1.5,f=.25+Math.sin(gt*1.6+z.ph)*.18,b=wt?0:Math.PI;pn.setFromEuler(Tn.set(Math.sin(gt*1.3+z.ph)*.05,b,Math.sin(gt*1.1+z.ph)*.06));let A=Math.sin(b),X=Math.cos(b);for(let[Le,it,je]of Vr)tn.set(kt+it[2]*A*z.sz,f+it[1]*z.sz,Ft+it[2]*X*z.sz),hn.set(je[0]*z.sz,je[1]*z.sz,je[2]*z.sz),Ot.compose(tn,pn,hn),pi[Le].setMatrixAt(ce,Ot);pi.sail.setColorAt(ce,_i.setRGB(...z.p.chg>=0?[.14,1.2,.72]:[1.35,.2,.66])),z.sp.position.set(kt,7.6*z.sz+.3,Ft);let se=li==="perp:"+z.p.name?1.2:1;for(z.sp.scale.set(6.6*se,2.4*se,1),z.pos=[kt,Ft],z.wake+=m*7;z.wake>=1;)z.wake--,mi(tn.set(kt-A*2.8*z.sz+(l()-.5),.5,Ft-X*2.8*z.sz),ms.set((l()-.5)*1.5,.6+l()*.6,(l()-.5)*1.5),[2.2,2.4,2.8],.9+l()*.4,.3,2.5)});for(let z in pi)pi[z].instanceMatrix.needsUpdate=!0;for(pi.sail.instanceColor&&(pi.sail.instanceColor.needsUpdate=!0);fn.length;){let[z,ce,ye]=fn.pop(),Ve=ye?[.8,2.4,3.8]:[3.6,2.6,.5];for(let wt=0;wt<(ye?90:40);wt++)mi(tn.set(z,3,ce),ms.set((l()-.5)*(ye?22:14),6+l()*(ye?18:10),(l()-.5)*(ye?22:14)),wt%4?Ve:[3.4,3.4,3.6],1.1+l()*.7,ye?.6:.45,1.6)}let B=0;Ci.forEach((z,ce)=>{for(let ye=0;ye<10;ye++){let Ve=.5+.9*Math.abs(Math.sin(gt*(6+ye)+ye*1.7+ce));tn.set(z.x+(ye*37%5-2)*.45,z.y+Ve*.5+ye%3*.3,z.z+(ye*13%5-2)*.45),hn.set(.7,Ve,.7),Ot.compose(tn,pn.identity(),hn),Dn.setMatrixAt(B,Ot),Dn.setColorAt(B,_i.setRGB(4,1.2+ye%3*.6,.2)),B++}z.light.intensity=45+25*Math.sin(gt*13+ce)}),Dn.instanceMatrix.needsUpdate=!0,Dn.instanceColor.needsUpdate=!0,Ba.forEach((z,ce)=>{z.t+=m,z.t>z.life&&(z.t=0);let ye=z.t/z.life,Ve=(z.s+ye*3.2)*(ye<.1?ye*10:ye>.85?(1-ye)/.15:1);tn.set(z.f.x+z.ox+ye*ye*16,z.f.y+2+ye*34,z.f.z+z.oz+ye*3),hn.setScalar(Math.max(.001,Ve)),pn.setFromEuler(Tn.set(ye*2+ce,ye*3,0)),Ot.compose(tn,pn,hn),hr.setMatrixAt(ce,Ot)}),hr.instanceMatrix.needsUpdate=!0,fr-=m,fr<=0&&d>2.6&&(ka(),fr=(2.6+l()*3)*(.45+_s*1.3)),ps+=m;let Z=Math.max(0,1-ps/.9);Bs.position.copy(kn),Bs.intensity=Z*900,ur.position.copy(kn),ur.scale.setScalar(1+ps*9),ur.material.opacity=Z,Hs.position.copy(kn),Hs.scale.setScalar(1+ps*22),Hs.material.opacity=Math.max(0,1-ps/1.1)*.45,Mo.forEach((z,ce)=>{if(z.t+=m,z.t>2.5){Ot.makeScale(0,0,0),Zi.setMatrixAt(ce,Ot);return}z.v.y-=26*m,z.p.addScaledVector(z.v,m),z.p.y<.2&&(z.p.y=.2,z.v.multiplyScalar(.4),z.v.y=Math.abs(z.v.y)*.3);let ye=.45*(1-z.t/2.5);Ot.compose(z.p,pn.setFromEuler(Tn.set(z.t*7,z.t*5,0)),hn.setScalar(ye)),Zi.setMatrixAt(ce,Ot),Zi.setColorAt(ce,z.c)}),Zi.instanceMatrix.needsUpdate=!0,Zi.instanceColor&&(Zi.instanceColor.needsUpdate=!0),Bn-=m,Bn<=0&&(Ha(),Bn=(1.5+l()*2.2)*(1.6-_s*1.1));for(let z=Ki.length-1;z>=0;z--){let ce=Ki[z];if(ce.t+=m,ce.v.y-=9*m,ce.p.addScaledVector(ce.v,m),mi(ce.p,ms.set((l()-.5)*1.5,-2-l()*2,(l()-.5)*1.5),[3,2.4,1.4],.45+l()*.3,.26,2.5),ce.t>=ce.fuse){let ye=ks[ce.col],Ve=ks[(ce.col+2)%ks.length],wt=t?60:110,Ft=19+l()*8;for(let kt=0;kt<wt;kt++){let f=l()*Math.PI*2,b=Math.acos(2*l()-1),A=Ft*(.75+l()*.3);ms.set(Math.sin(b)*Math.cos(f)*A,Math.cos(b)*A,Math.sin(b)*Math.sin(f)*A),mi(ce.p,ms,kt%5===0?Ve:ye,1.6+l()*.9,.85+l()*.4,1.5)}Ki.splice(z,1)}}Ji.forEach((z,ce)=>{if(z.t>=z.life){z.t<50&&(z.t=99,Ot.makeScale(0,0,0),Vn.setMatrixAt(ce,Ot));return}z.t+=m,z.v.y-=7*m,z.v.multiplyScalar(Math.max(0,1-z.drag*m)),z.p.addScaledVector(z.v,m);let ye=Math.max(0,1-z.t/z.life),Ve=ye*ye*(Math.sin(gt*40+ce)>-.6?1:.3);Ot.compose(z.p,pn.identity(),hn.setScalar(z.s*(.4+.6*ye))),Vn.setMatrixAt(ce,Ot),Vn.setColorAt(ce,_i.setRGB(z.c.r*Ve,z.c.g*Ve,z.c.b*Ve))}),Vn.instanceMatrix.needsUpdate=!0,Vn.instanceColor&&(Vn.instanceColor.needsUpdate=!0),ys+=(Math.max(0,Math.min(1,(.38-_s)/.22))-ys)*Math.min(1,m*.5),a.uMood.value+=(_s-a.uMood.value)*Math.min(1,m*.4);let V=e.reduced?0:Math.floor(qr*ys);if(vs.count=V,V){let z=Tt.target.x,ce=Tt.target.z;for(let ye=0;ye<V;ye++){let Ve=Yr[ye];Ve.y-=Ve.v*m,Ve.y<0&&(Ve.y+=80,Ve.x=(l()-.5)*170,Ve.z=(l()-.5)*170),tn.set(z+Ve.x,Ve.y,ce+Ve.z),hn.set(.07,1.6,.07),Ot.compose(tn,pn.set(.08,0,.04,1).normalize(),hn),vs.setMatrixAt(ye,Ot)}vs.instanceMatrix.needsUpdate=!0}gs-=m,gs<=0&&(xs=0,gs=(9+l()*9)*(.5+_s*1.1)),xs+=m,a.uFlash.value=e.reduced?0:xs<.07?.5:xs<.14?.08:xs<.22?.38:Math.max(0,.38-(xs-.22)*1.6),d<99&&Bi(m),oi.step(m,gt),oi.glowG.visible=d>2.2;let q=d>2.6;ie.visible=d>1.6,Dn.visible=hr.visible=q;for(let z of Xr)z.cone.visible=q;for(let z of Os)z.sp.visible=q;Pe.rotation.z=gt*.16,at.forEach((z,ce)=>{let ye=ce/at.length*lr+gt*.16;z.position.set(Math.cos(ye)*15,Math.sin(ye)*15-1.8,0)});{let z=Math.floor(gt*9);for(let ce=0;ce<ge;ce++){let ye=(ce+z)%8;He.setColorAt(ce,_i.setRGB(...ye<2?[3,.5,1.8]:ye<4?[.5,2,3.2]:ye<6?[3.2,2.6,.6]:[1.4,.6,3]))}He.instanceColor.needsUpdate=!0}rt.rotation.y=gt*.55,jt(m);{let z=gt*.045;mt.position.set(Math.cos(z)*118,74+Math.sin(gt*.3)*2,Math.sin(z)*118),mt.rotation.y=-z-Math.PI/2,mt.userData.tip.visible=Math.sin(gt*5)>0}for(let z=Fn.length-1;z>=0;z--){let ce=Fn[z];ce.t+=m;let ye=ce.t/ce.life;if(ye>=1){r.remove(ce.sp),ce.sp.material.map.dispose(),ce.sp.material.dispose(),Fn.splice(z,1);continue}let Ve=Math.min(1,ce.t/.38),wt=1+2.70158*Math.pow(Ve-1,3)+1.70158*Math.pow(Ve-1,2),Ft=ye>.84?(1-ye)/.16:1,kt=ce.car&&ce.car.pos?ce.car.pos[0]:ce.x,f=ce.car&&ce.car.pos?ce.car.pos[1]:ce.z,b=(ce.car?8:ce.y)+ce.t*.45;ce.sp.position.set(kt,b,f);let A=c.position.distanceTo(ce.sp.position),X=Math.max(.32,Math.min(2.6,A/95))*wt;ce.sp.scale.set(10.8*X,4.05*X,1),ce.sp.material.opacity=Ft}{let z=a.uMood.value,ce=Math.min(1,Math.max(0,(z-.25)/.25)),ye=Math.min(1,Math.max(0,(z-.6)/.25))*.6,Ve=.62+.38*ce,wt=.12+.19*ce,Ft=.3+.32*ce;Ve+=(1-Ve)*ye,wt+=(.55-wt)*ye,Ft+=(.5-Ft)*ye;let kt=[.068,.023,.25];o.setRGB(kt[0]+(Math.pow(Ve,2.2)*.7-kt[0])*.42,kt[1]+(Math.pow(wt,2.2)*.7-kt[1])*.42,kt[2]+(Math.pow(Ft,2.2)*.7-kt[2])*.42)}let Ce=Qt.names.indexOf("whales"),Be=Jt==="story"&&ji.length&&Ce>=0?Math.max(0,Math.min(1,1.6-Math.abs(Ms-Ce)*2)):0;Gn.forEach((z,ce)=>{let ye=gt*z.spd+z.ph;z.g.position.set(Math.cos(ye)*z.r,z.h+Math.sin(gt*1.3+z.ph)*1.5,Math.sin(ye)*z.r);let Ve=-ye;if(z.hk=(z.hk||0)+((ce<2?Be:0)-(z.hk||0))*(1-Math.exp(-m*1.3)),z.hk>.002){let wt=Qt.S,Ft=Math.sin(wt.yaw),kt=Math.cos(wt.yaw),f=c.aspect<.8,b=ce?30:14,A=f?ce?-.3:.3:ce?-1.8:1.6,X=z.hk*z.hk*(3-2*z.hk);dr.set(wt.x+Ft*b+kt*A,(ce?14.3:11)+Math.sin(gt*1.3+z.ph)*.6,wt.z+kt*b-Ft*A),z.g.position.lerp(dr,X);let se=wt.yaw+Math.PI+(ce?.35:-.3);Ve+=(((se-Ve)%6.2832+9.4248)%6.2832-3.1416)*X}if(z.sp){let wt=1-(c.aspect<.8?.4:0)*(z.hk>.002?z.hk*z.hk*(3-2*z.hk):0);z.sp.scale.set(8.6*wt,3.04*wt,1)}z.g.rotation.y=Ve,z.rot.rotation.y=gt*30,z.cone.rotation.z=Math.sin(gt*.7+z.ph)*.35*(1-(z.hk||0)*.8),z.red.visible=Math.sin(gt*6+z.ph)>0});for(let z of Xr)z.cone.rotation.set(Math.sin(gt*z.sp+z.ph)*.5,0,Math.cos(gt*z.sp*.8+z.ph)*.5);if(ei){let z=gt*.04+.9;c.position.set(Math.cos(z)*228,138,Math.sin(z)*228),Tt.target.set(0,4,-10)}else if(gi>0){Ws+=m;let z=Math.min(1,Ws/3.4),ce=z<.5?4*z*z*z:1-Math.pow(-2*z+2,3)/2;if(Jt==="story"){let[ye,Ve]=_r(Math.round(Ms));Jr.lerp(ye,.1),gr.lerp(Ve,.1)}else Jt==="drive"&&(Qt.chasePose(Qi,Xs),Jr.lerp(Qi,.1),gr.lerp(Xs,.1));c.position.lerpVectors(mr,Jr,ce),Tt.target.lerpVectors(Zr,gr,ce),a.uFogD.value=zi+(Qn-zi)*ce,z>=1&&(gi=0)}else Jt==="story"&&ji.length?Qt.story(Ms,m):Jt==="drive"?Qt.free(m):Cn&&Cn.pos?Tt.target.lerp(tn.set(Cn.pos[0],2,Cn.pos[1]),.08):(xr+=m,xr>18&&!e.reduced?To(m):xr>10&&!Tt.autoRotate&&(Tt.autoRotate=!0));Jt==="map"&&!gi?Tt.update():c.lookAt(Tt.target),e.onFrame&&Ys%3===0&&e.onFrame({cars:Se,coins:Gt,boats:wn,helis:Gn,garage:vn.length,cam:c,controls:Tt,half:Sn,beach:sn,pitch:di,me:Qt.S,mode:Jt})}function Bi(m){d+=m;let _=!0;for(let{m:w,list:B}of g){let Z=!1;for(let V=0;V<B.length;V++){let q=B[V];q.rd==null&&(q.rd=.15+Math.hypot(q.x,q.z)/300*2.2+l()*.35);let Ce=Math.min(1,Math.max(0,(d-q.rd)/.75));if(Ce<1&&(_=!1),q.rk===Ce)continue;q.rk=Ce,Z=!0;let Be=Ce>=1?1:1+2.70158*Math.pow(Ce-1,3)+1.70158*Math.pow(Ce-1,2),z=Math.max(.001,Be);tn.set(q.x,(q.y+q.h/2)*z,q.z),hn.set(q.w,q.h*z,q.d),pn.setFromEuler(Tn.set(q.rx||0,q.ry||0,q.rz||0)),Ot.compose(tn,pn,hn),w.setMatrixAt(V,Ot)}Z&&(w.instanceMatrix.needsUpdate=!0)}_&&(d=99)}let is=new U,ss=new U,wo=0;function To(m){Tt.autoRotate=!1,wo+=m;let _=Math.floor(wo/9)%10,w=gt*.07;if(_>=5){let[Z,V]=oi.shots[["airport","port","arena","bridge","site"][_-5]](),q=1-Math.exp(-m*.9);Tt.target.lerp(V,q),c.position.lerp(Z,q*.8);return}if(_===1){let Z=Gt.filter(V=>V.coin&&!V.mine&&V.pos&&!V.coin.isNew).sort((V,q)=>(q.coin.heat||0)-(V.coin.heat||0))[0];Z?(is.set(Z.pos[0],2,Z.pos[1]),ss.set(Math.cos(w)*30,17,Math.sin(w)*30)):(is.set(0,6,0),ss.set(Math.cos(w)*150,85,Math.sin(w)*150))}else _===2?(is.set(sn+38,3,Math.sin(gt*.08)*55),ss.set(-62,32,46)):_===3?(is.set(I.x,15,I.z),ss.set(-34+Math.sin(w)*10,-2,44)):_===4&&Gn[0]?(is.copy(Gn[0].g.position),ss.set(Math.cos(w)*38,10,Math.sin(w)*38)):(is.set(0,6,0),ss.set(Math.cos(w)*150,85,Math.sin(w)*150));let B=1-Math.exp(-m*.9);Tt.target.lerp(is,B),c.position.lerp(ss.add(is),B*.8)}function Er(m){if(Li=0,Ss)return;let _=Math.max(0,Math.min(.05,(m-ns)/1e3));ns=m,!Qr||Ys%2===0?(Mr(e.reduced?_*.3:_),Pi.render()):Ys++,Li=requestAnimationFrame(Er)}let ea=()=>{!Li&&!Ss&&(ns=performance.now(),Li=requestAnimationFrame(Er))};document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(Li),Li=0):ea()}),Mr(0),ea();let Sr={setCoins:At,setPerps:Wl,setWhales:Wr,setGarage:cr,home:()=>re,setMood(m){_s=Math.max(0,Math.min(1,m))},chased:()=>Yt,follow(m){let _=pe.get(m);_&&(Jt==="drive"&&yr(),Cn=_.car,Tt.autoRotate=!1)},followPerp(m){let _=wn.find(w=>w.p.name===m);_&&(Jt==="drive"&&yr(),Cn=_,Tt.autoRotate=!1)},unfollow(){Cn=null},pause(m){Ss=m,m?(cancelAnimationFrame(Li),Li=0):ea()},slow(m){Qr=m},enter:$r,entered:()=>!ei,bubble:kr,setStory(m){ji=m.slice()},story(m){Ms=m,!ei&&Jt!=="story"&&(Jt="story",Tt.enabled=!1,Cn=null,Qt.setActive(!1,e.onWheel))},roam(){ei||Jt==="drive"||qs(!1)},mode:()=>Jt,overview(){ei||(Cn=null,yr())},toggleMap(){Jt==="drive"?yr():Jt==="map"&&qs(!1)},skip(){ei=!1,gi=0,a.uFogD.value=Qn,Qt.place(0),Qt.chasePose(c.position,Tt.target),qs(!1),d=99;for(let{m,list:_}of g)_.forEach((w,B)=>{tn.set(w.x,w.y+w.h/2,w.z),hn.set(w.w,w.h,w.d),pn.setFromEuler(Tn.set(w.rx||0,w.ry||0,w.rz||0)),Ot.compose(tn,pn,hn),m.setMatrixAt(B,Ot)}),m.instanceMatrix.needsUpdate=!0},shot(m){let _=Math.round(m*30);for(let w=0;w<_;w++)Mr(1/30);Pi.render()},info:()=>({calls:n.info.render.calls,tris:n.info.render.triangles}),car:()=>({x:Qt.S.x,z:Qt.S.z,yaw:Qt.S.yaw,v:Qt.S.v,mode:Jt}),canDrive:(m,_)=>Qt.open(m,_),launched:m=>oi.launched(m),takeoff:m=>oi.takeoff(m),setBanner:m=>oi.setBanner(m),setArena:m=>{Kr=m&&m.hot?m.hot.mint:null,oi.setArena(m)},view(m,_){ei=!1,Jt="map",Tt.enabled=!0,Qt.setActive(!1),gi=0,a.uFogD.value=Qn,c.position.set(...m),Tt.target.set(..._),Tt.update()}};return window.__bloxWorld=Sr,Sr}export{Y_ as startWorld};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
