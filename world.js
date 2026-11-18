var Br={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bf=0,Ch=1,Hf=2;var rf=1,kf=2,Rs=3,ir=0,qn=1,Xn=2;var rs=0,ba=1,yi=2,Ph=3,Lh=4,Vf=5,Cr=100,Gf=101,Wf=102,Ih=103,Uh=104,Xf=200,qf=201,Yf=202,Zf=203,Rc=204,Cc=205,Jf=206,Kf=207,$f=208,jf=209,Qf=210,ed=211,td=212,nd=213,id=214,sd=0,rd=1,ad=2,nl=3,od=4,ld=5,cd=6,hd=7,dh=0,ud=1,fd=2,tr=0,ph=1,mh=2,gh=3,vo=4,dd=5,xh=6;var af=300,Aa=301,Ra=302,Pc=303,Lc=304,Ll=306,Ic=1e3,Vi=1001,Uc=1002,Rn=1003,Dh=1004;var Yl=1005;var ci=1006,pd=1007;var oo=1008;var nr=1009,md=1010,gd=1011,_h=1012,of=1013,Qs=1014,er=1015,Gi=1016,lf=1017,cf=1018,Ir=1020,xd=1021,vi=1023,_d=1024,vd=1025,Ur=1026,Ca=1027,yd=1028,hf=1029,Md=1030,uf=1031,ff=1033,Zl=33776,Jl=33777,Kl=33778,$l=33779,Nh=35840,Oh=35841,Fh=35842,zh=35843,df=36196,Bh=37492,Hh=37496,kh=37808,Vh=37809,Gh=37810,Wh=37811,Xh=37812,qh=37813,Yh=37814,Zh=37815,Jh=37816,Kh=37817,$h=37818,jh=37819,Qh=37820,eu=37821,jl=36492,tu=36494,nu=36495,Ed=36283,iu=36284,su=36285,ru=36286;var il=2300,sl=2301,Ql=2302,au=2400,ou=2401,lu=2402;var pf=3e3,Dr=3001,Sd=3200,bd=3201,mf=0,wd=1,Ii="",Jt="srgb",Ls="srgb-linear",vh="display-p3",Il="display-p3-linear",rl="linear",rn="srgb",al="rec709",ol="p3";var ta=7680;var cu=519,Td=512,Ad=513,Rd=514,gf=515,Cd=516,Pd=517,Ld=518,Id=519,Dc=35044;var hu="300 es",Nc=1035,Cs=2e3,ll=2001,as=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uu=1234567,io=Math.PI/180,lo=180/Math.PI;function Ps(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vn[i&255]+Vn[i>>8&255]+Vn[i>>16&255]+Vn[i>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[t&63|128]+Vn[t>>8&255]+"-"+Vn[t>>16&255]+Vn[t>>24&255]+Vn[n&255]+Vn[n>>8&255]+Vn[n>>16&255]+Vn[n>>24&255]).toLowerCase()}function Dn(i,e,t){return Math.max(e,Math.min(t,i))}function yh(i,e){return(i%e+e)%e}function Ud(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Dd(i,e,t){return i!==e?(t-i)/(e-i):0}function so(i,e,t){return(1-t)*i+t*e}function Nd(i,e,t,n){return so(i,e,1-Math.exp(-t*n))}function Od(i,e=1){return e-Math.abs(yh(i,e*2)-e)}function Fd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function zd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Bd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Hd(i,e){return i+Math.random()*(e-i)}function kd(i){return i*(.5-Math.random())}function Vd(i){i!==void 0&&(uu=i);let e=uu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gd(i){return i*io}function Wd(i){return i*lo}function Oc(i){return(i&i-1)===0&&i!==0}function Xd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qd(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),p=o((e-n)/2),x=r((n-e)/2),y=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*f,l*p,a*c);break;case"YZY":i.set(l*p,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*p,a*h,a*c);break;case"XZX":i.set(a*h,l*y,l*x,a*c);break;case"YXY":i.set(l*x,a*h,l*y,a*c);break;case"ZYZ":i.set(l*y,l*x,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ss(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xf={DEG2RAD:io,RAD2DEG:lo,generateUUID:Ps,clamp:Dn,euclideanModulo:yh,mapLinear:Ud,inverseLerp:Dd,lerp:so,damp:Nd,pingpong:Od,smoothstep:Fd,smootherstep:zd,randInt:Bd,randFloat:Hd,randFloatSpread:kd,seededRandom:Vd,degToRad:Gd,radToDeg:Wd,isPowerOfTwo:Oc,ceilPowerOfTwo:Xd,floorPowerOfTwo:cl,setQuaternionFromProperEuler:qd,normalize:nn,denormalize:ss},Je=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],p=n[2],x=n[5],y=n[8],v=s[0],g=s[3],d=s[6],L=s[1],M=s[4],H=s[7],P=s[2],F=s[5],N=s[8];return r[0]=o*v+a*L+l*P,r[3]=o*g+a*M+l*F,r[6]=o*d+a*H+l*N,r[1]=c*v+h*L+f*P,r[4]=c*g+h*M+f*F,r[7]=c*d+h*H+f*N,r[2]=p*v+x*L+y*P,r[5]=p*g+x*M+y*F,r[8]=p*d+x*H+y*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,p=a*l-h*r,x=c*r-o*l,y=t*f+n*p+s*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/y;return e[0]=f*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=p*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=x*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ec.makeScale(e,t)),this}rotate(e){return this.premultiply(ec.makeRotation(-e)),this}translate(e,t){return this.premultiply(ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ec=new Bt;function _f(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yd(){let i=hl("canvas");return i.style.display="block",i}var fu={};function ro(i){i in fu||(fu[i]=!0,console.warn(i))}var du=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pu=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ro={[Ls]:{transfer:rl,primaries:al,toReference:i=>i,fromReference:i=>i},[Jt]:{transfer:rn,primaries:al,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Il]:{transfer:rl,primaries:ol,toReference:i=>i.applyMatrix3(pu),fromReference:i=>i.applyMatrix3(du)},[vh]:{transfer:rn,primaries:ol,toReference:i=>i.convertSRGBToLinear().applyMatrix3(pu),fromReference:i=>i.applyMatrix3(du).convertLinearToSRGB()}},Zd=new Set([Ls,Il]),jt={enabled:!0,_workingColorSpace:Ls,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Zd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Ro[e].toReference,s=Ro[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ro[i].primaries},getTransfer:function(i){return i===Ii?rl:Ro[i].transfer}};function wa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var na,ul=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{na===void 0&&(na=hl("canvas")),na.width=e.width,na.height=e.height;let n=na.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=na}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=hl("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wa(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wa(t[n]/255)*255):t[n]=wa(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jd=0,fl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Ps(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nc(s[o].image)):r.push(nc(s[o]))}else r=nc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ul.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Kd=0,Mi=class i extends as{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Vi,s=Vi,r=ci,o=oo,a=vi,l=nr,c=i.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Ps(),this.name="",this.source=new fl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Dr?Jt:Ii),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==af)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ic:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case Uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ic:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case Uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Jt?Dr:pf}set encoding(e){ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Dr?Jt:Ii}};Mi.DEFAULT_IMAGE=null;Mi.DEFAULT_MAPPING=af;Mi.DEFAULT_ANISOTROPY=1;var en=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],p=l[1],x=l[5],y=l[9],v=l[2],g=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-v)<.01&&Math.abs(y-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+v)<.1&&Math.abs(y+g)<.1&&Math.abs(c+x+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,H=(x+1)/2,P=(d+1)/2,F=(h+p)/4,N=(f+v)/4,le=(y+g)/4;return M>H&&M>P?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=F/n,r=N/n):H>P?H<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(H),n=F/s,r=le/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=N/r,s=le/r),this.set(n,s,r,t),this}let L=Math.sqrt((g-y)*(g-y)+(f-v)*(f-v)+(p-h)*(p-h));return Math.abs(L)<.001&&(L=1),this.x=(g-y)/L,this.y=(f-v)/L,this.z=(p-h)/L,this.w=Math.acos((c+x+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fc=class extends as{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(ro("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Dr?Jt:Ii),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Mi(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new fl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends Fc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},dl=class extends Mi{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zc=class extends Mi{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],p=r[o+0],x=r[o+1],y=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=p,e[t+1]=x,e[t+2]=y,e[t+3]=v;return}if(f!==v||l!==p||c!==x||h!==y){let g=1-a,d=l*p+c*x+h*y+f*v,L=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let P=Math.sqrt(M),F=Math.atan2(P,d*L);g=Math.sin(g*F)/P,a=Math.sin(a*F)/P}let H=a*L;if(l=l*g+p*H,c=c*g+x*H,h=h*g+y*H,f=f*g+v*H,g===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=P,c*=P,h*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],p=r[o+1],x=r[o+2],y=r[o+3];return e[t]=a*y+h*f+l*x-c*p,e[t+1]=l*y+h*p+c*f-a*x,e[t+2]=c*y+h*x+a*p-l*f,e[t+3]=h*y-a*f-l*p-c*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),p=l(n/2),x=l(s/2),y=l(r/2);switch(o){case"XYZ":this._x=p*h*f+c*x*y,this._y=c*x*f-p*h*y,this._z=c*h*y+p*x*f,this._w=c*h*f-p*x*y;break;case"YXZ":this._x=p*h*f+c*x*y,this._y=c*x*f-p*h*y,this._z=c*h*y-p*x*f,this._w=c*h*f+p*x*y;break;case"ZXY":this._x=p*h*f-c*x*y,this._y=c*x*f+p*h*y,this._z=c*h*y+p*x*f,this._w=c*h*f-p*x*y;break;case"ZYX":this._x=p*h*f-c*x*y,this._y=c*x*f+p*h*y,this._z=c*h*y-p*x*f,this._w=c*h*f+p*x*y;break;case"YZX":this._x=p*h*f+c*x*y,this._y=c*x*f+p*h*y,this._z=c*h*y-p*x*f,this._w=c*h*f-p*x*y;break;case"XZY":this._x=p*h*f-c*x*y,this._y=c*x*f-p*h*y,this._z=c*h*y+p*x*f,this._w=c*h*f+p*x*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],p=n+a+f;if(p>0){let x=.5/Math.sqrt(p+1);this._w=.25/x,this._x=(h-l)*x,this._y=(r-c)*x,this._z=(o-s)*x}else if(n>a&&n>f){let x=2*Math.sqrt(1+n-a-f);this._w=(h-l)/x,this._x=.25*x,this._y=(s+o)/x,this._z=(r+c)/x}else if(a>f){let x=2*Math.sqrt(1+a-n-f);this._w=(r-c)/x,this._x=(s+o)/x,this._y=.25*x,this._z=(l+h)/x}else{let x=2*Math.sqrt(1+f-n-a);this._w=(o-s)/x,this._x=(r+c)/x,this._y=(l+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let x=1-t;return this._w=x*o+t*this._w,this._x=x*n+t*this._x,this._y=x*s+t*this._y,this._z=x*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ic=new U,mu=new Tn,Is=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zi):zi.fromBufferAttribute(r,o),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ya),Po.subVectors(this.max,Ya),ia.subVectors(e.a,Ya),sa.subVectors(e.b,Ya),ra.subVectors(e.c,Ya),Zs.subVectors(sa,ia),Js.subVectors(ra,sa),br.subVectors(ia,ra);let t=[0,-Zs.z,Zs.y,0,-Js.z,Js.y,0,-br.z,br.y,Zs.z,0,-Zs.x,Js.z,0,-Js.x,br.z,0,-br.x,-Zs.y,Zs.x,0,-Js.y,Js.x,0,-br.y,br.x,0];return!sc(t,ia,sa,ra,Po)||(t=[1,0,0,0,1,0,0,0,1],!sc(t,ia,sa,ra,Po))?!1:(Lo.crossVectors(Zs,Js),t=[Lo.x,Lo.y,Lo.z],sc(t,ia,sa,ra,Po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ss),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ss=[new U,new U,new U,new U,new U,new U,new U,new U],zi=new U,Co=new Is,ia=new U,sa=new U,ra=new U,Zs=new U,Js=new U,br=new U,Ya=new U,Po=new U,Lo=new U,wr=new U;function sc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wr.fromArray(i,r);let a=s.x*Math.abs(wr.x)+s.y*Math.abs(wr.y)+s.z*Math.abs(wr.z),l=e.dot(wr),c=t.dot(wr),h=n.dot(wr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var $d=new Is,Za=new U,rc=new U,Nr=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):$d.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Za.subVectors(e,this.center);let t=Za.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Za,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Za.copy(e.center).add(rc)),this.expandByPoint(Za.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},bs=new U,ac=new U,Io=new U,Ks=new U,oc=new U,Uo=new U,lc=new U,Pa=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bs.copy(this.origin).addScaledVector(this.direction,t),bs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ac.copy(e).add(t).multiplyScalar(.5),Io.copy(t).sub(e).normalize(),Ks.copy(this.origin).sub(ac);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Io),a=Ks.dot(this.direction),l=-Ks.dot(Io),c=Ks.lengthSq(),h=Math.abs(1-o*o),f,p,x,y;if(h>0)if(f=o*l-a,p=o*a-l,y=r*h,f>=0)if(p>=-y)if(p<=y){let v=1/h;f*=v,p*=v,x=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=r,f=Math.max(0,-(o*p+a)),x=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(o*p+a)),x=-f*f+p*(p+2*l)+c;else p<=-y?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-l),r),x=-f*f+p*(p+2*l)+c):p<=y?(f=0,p=Math.min(Math.max(-r,-l),r),x=p*(p+2*l)+c):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-l),r),x=-f*f+p*(p+2*l)+c);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),x=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ac).addScaledVector(Io,p),x}intersectSphere(e,t){bs.subVectors(e.center,this.origin);let n=bs.dot(this.direction),s=bs.dot(bs)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,bs)!==null}intersectTriangle(e,t,n,s,r){oc.subVectors(t,e),Uo.subVectors(n,e),lc.crossVectors(oc,Uo);let o=this.direction.dot(lc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ks.subVectors(this.origin,e);let l=a*this.direction.dot(Uo.crossVectors(Ks,Uo));if(l<0)return null;let c=a*this.direction.dot(oc.cross(Ks));if(c<0||l+c>o)return null;let h=-a*Ks.dot(lc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ft=class i{constructor(e,t,n,s,r,o,a,l,c,h,f,p,x,y,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,f,p,x,y,v,g)}set(e,t,n,s,r,o,a,l,c,h,f,p,x,y,v,g){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=p,d[3]=x,d[7]=y,d[11]=v,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/aa.setFromMatrixColumn(e,0).length(),r=1/aa.setFromMatrixColumn(e,1).length(),o=1/aa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=o*h,x=o*f,y=a*h,v=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=x+y*c,t[5]=p-v*c,t[9]=-a*l,t[2]=v-p*c,t[6]=y+x*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*h,x=l*f,y=c*h,v=c*f;t[0]=p+v*a,t[4]=y*a-x,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=x*a-y,t[6]=v+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*h,x=l*f,y=c*h,v=c*f;t[0]=p-v*a,t[4]=-o*f,t[8]=y+x*a,t[1]=x+y*a,t[5]=o*h,t[9]=v-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*h,x=o*f,y=a*h,v=a*f;t[0]=l*h,t[4]=y*c-x,t[8]=p*c+v,t[1]=l*f,t[5]=v*c+p,t[9]=x*c-y,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,x=o*c,y=a*l,v=a*c;t[0]=l*h,t[4]=v-p*f,t[8]=y*f+x,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=x*f+y,t[10]=p-v*f}else if(e.order==="XZY"){let p=o*l,x=o*c,y=a*l,v=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=p*f+v,t[5]=o*h,t[9]=x*f-y,t[2]=y*f-x,t[6]=a*h,t[10]=v*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jd,e,Qd)}lookAt(e,t,n){let s=this.elements;return xi.subVectors(e,t),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),$s.crossVectors(n,xi),$s.lengthSq()===0&&(Math.abs(n.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),$s.crossVectors(n,xi)),$s.normalize(),Do.crossVectors(xi,$s),s[0]=$s.x,s[4]=Do.x,s[8]=xi.x,s[1]=$s.y,s[5]=Do.y,s[9]=xi.y,s[2]=$s.z,s[6]=Do.z,s[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],p=n[9],x=n[13],y=n[2],v=n[6],g=n[10],d=n[14],L=n[3],M=n[7],H=n[11],P=n[15],F=s[0],N=s[4],le=s[8],b=s[12],C=s[1],O=s[5],ae=s[9],Re=s[13],k=s[2],J=s[6],se=s[10],_e=s[14],ue=s[3],re=s[7],Me=s[11],Ce=s[15];return r[0]=o*F+a*C+l*k+c*ue,r[4]=o*N+a*O+l*J+c*re,r[8]=o*le+a*ae+l*se+c*Me,r[12]=o*b+a*Re+l*_e+c*Ce,r[1]=h*F+f*C+p*k+x*ue,r[5]=h*N+f*O+p*J+x*re,r[9]=h*le+f*ae+p*se+x*Me,r[13]=h*b+f*Re+p*_e+x*Ce,r[2]=y*F+v*C+g*k+d*ue,r[6]=y*N+v*O+g*J+d*re,r[10]=y*le+v*ae+g*se+d*Me,r[14]=y*b+v*Re+g*_e+d*Ce,r[3]=L*F+M*C+H*k+P*ue,r[7]=L*N+M*O+H*J+P*re,r[11]=L*le+M*ae+H*se+P*Me,r[15]=L*b+M*Re+H*_e+P*Ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],p=e[10],x=e[14],y=e[3],v=e[7],g=e[11],d=e[15];return y*(+r*l*f-s*c*f-r*a*p+n*c*p+s*a*x-n*l*x)+v*(+t*l*x-t*c*p+r*o*p-s*o*x+s*c*h-r*l*h)+g*(+t*c*f-t*a*x-r*o*f+n*o*x+r*a*h-n*c*h)+d*(-s*a*h-t*l*f+t*a*p+s*o*f-n*o*p+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],p=e[10],x=e[11],y=e[12],v=e[13],g=e[14],d=e[15],L=f*g*c-v*p*c+v*l*x-a*g*x-f*l*d+a*p*d,M=y*p*c-h*g*c-y*l*x+o*g*x+h*l*d-o*p*d,H=h*v*c-y*f*c+y*a*x-o*v*x-h*a*d+o*f*d,P=y*f*l-h*v*l-y*a*p+o*v*p+h*a*g-o*f*g,F=t*L+n*M+s*H+r*P;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/F;return e[0]=L*N,e[1]=(v*p*r-f*g*r-v*s*x+n*g*x+f*s*d-n*p*d)*N,e[2]=(a*g*r-v*l*r+v*s*c-n*g*c-a*s*d+n*l*d)*N,e[3]=(f*l*r-a*p*r-f*s*c+n*p*c+a*s*x-n*l*x)*N,e[4]=M*N,e[5]=(h*g*r-y*p*r+y*s*x-t*g*x-h*s*d+t*p*d)*N,e[6]=(y*l*r-o*g*r-y*s*c+t*g*c+o*s*d-t*l*d)*N,e[7]=(o*p*r-h*l*r+h*s*c-t*p*c-o*s*x+t*l*x)*N,e[8]=H*N,e[9]=(y*f*r-h*v*r-y*n*x+t*v*x+h*n*d-t*f*d)*N,e[10]=(o*v*r-y*a*r+y*n*c-t*v*c-o*n*d+t*a*d)*N,e[11]=(h*a*r-o*f*r-h*n*c+t*f*c+o*n*x-t*a*x)*N,e[12]=P*N,e[13]=(h*v*s-y*f*s+y*n*p-t*v*p-h*n*g+t*f*g)*N,e[14]=(y*a*s-o*v*s-y*n*l+t*v*l+o*n*g-t*a*g)*N,e[15]=(o*f*s-h*a*s+h*n*l-t*f*l-o*n*p+t*a*p)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,p=r*c,x=r*h,y=r*f,v=o*h,g=o*f,d=a*f,L=l*c,M=l*h,H=l*f,P=n.x,F=n.y,N=n.z;return s[0]=(1-(v+d))*P,s[1]=(x+H)*P,s[2]=(y-M)*P,s[3]=0,s[4]=(x-H)*F,s[5]=(1-(p+d))*F,s[6]=(g+L)*F,s[7]=0,s[8]=(y+M)*N,s[9]=(g-L)*N,s[10]=(1-(p+v))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=aa.set(s[0],s[1],s[2]).length(),o=aa.set(s[4],s[5],s[6]).length(),a=aa.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Bi.copy(this);let c=1/r,h=1/o,f=1/a;return Bi.elements[0]*=c,Bi.elements[1]*=c,Bi.elements[2]*=c,Bi.elements[4]*=h,Bi.elements[5]*=h,Bi.elements[6]*=h,Bi.elements[8]*=f,Bi.elements[9]*=f,Bi.elements[10]*=f,t.setFromRotationMatrix(Bi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Cs){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),x,y;if(a===Cs)x=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===ll)x=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Cs){let l=this.elements,c=1/(t-e),h=1/(n-s),f=1/(o-r),p=(t+e)*c,x=(n+s)*h,y,v;if(a===Cs)y=(o+r)*f,v=-2*f;else if(a===ll)y=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-x,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},aa=new U,Bi=new Ft,jd=new U(0,0,0),Qd=new U(1,1,1),$s=new U,Do=new U,xi=new U,gu=new Ft,xu=new Tn,os=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],p=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(Dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,x),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,x),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,x),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,x));break;case"XZY":this._z=Math.asin(-Dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xu.setFromEuler(this),this.setFromQuaternion(xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};os.DEFAULT_ORDER="XYZ";var co=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ep=0,_u=new U,oa=new Tn,ws=new Ft,No=new U,Ja=new U,tp=new U,np=new Tn,vu=new U(1,0,0),yu=new U(0,1,0),Mu=new U(0,0,1),ip={type:"added"},sp={type:"removed"},Yn=class i extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new os,n=new Tn,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Bt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oa.setFromAxisAngle(e,t),this.quaternion.multiply(oa),this}rotateOnWorldAxis(e,t){return oa.setFromAxisAngle(e,t),this.quaternion.premultiply(oa),this}rotateX(e){return this.rotateOnAxis(vu,e)}rotateY(e){return this.rotateOnAxis(yu,e)}rotateZ(e){return this.rotateOnAxis(Mu,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vu,e)}translateY(e){return this.translateOnAxis(yu,e)}translateZ(e){return this.translateOnAxis(Mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ws.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?No.copy(e):No.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ws.lookAt(Ja,No,this.up):ws.lookAt(No,Ja,this.up),this.quaternion.setFromRotationMatrix(ws),s&&(ws.extractRotation(s.matrixWorld),oa.setFromRotationMatrix(ws),this.quaternion.premultiply(oa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ip)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ws.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ws.multiply(e.parent.matrixWorld)),e.applyMatrix4(ws),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,e,tp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),p=o(e.skeletons),x=o(e.animations),y=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),x.length>0&&(n.animations=x),y.length>0&&(n.nodes=y)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Yn.DEFAULT_UP=new U(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hi=new U,Ts=new U,cc=new U,As=new U,la=new U,ca=new U,Eu=new U,hc=new U,uc=new U,fc=new U,Oo=!1,Lr=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hi.subVectors(e,t),s.cross(Hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Hi.subVectors(s,t),Ts.subVectors(n,t),cc.subVectors(e,t);let o=Hi.dot(Hi),a=Hi.dot(Ts),l=Hi.dot(cc),c=Ts.dot(Ts),h=Ts.dot(cc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let p=1/f,x=(c*l-a*h)*p,y=(o*h-a*l)*p;return r.set(1-x-y,y,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,As)===null?!1:As.x>=0&&As.y>=0&&As.x+As.y<=1}static getUV(e,t,n,s,r,o,a,l){return Oo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Oo=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,As)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,As.x),l.addScaledVector(o,As.y),l.addScaledVector(a,As.z),l)}static isFrontFacing(e,t,n,s){return Hi.subVectors(n,t),Ts.subVectors(e,t),Hi.cross(Ts).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),Ts.subVectors(this.a,this.b),Hi.cross(Ts).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Oo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Oo=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;la.subVectors(s,n),ca.subVectors(r,n),hc.subVectors(e,n);let l=la.dot(hc),c=ca.dot(hc);if(l<=0&&c<=0)return t.copy(n);uc.subVectors(e,s);let h=la.dot(uc),f=ca.dot(uc);if(h>=0&&f<=h)return t.copy(s);let p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(la,o);fc.subVectors(e,r);let x=la.dot(fc),y=ca.dot(fc);if(y>=0&&x<=y)return t.copy(r);let v=x*c-l*y;if(v<=0&&c>=0&&y<=0)return a=c/(c-y),t.copy(n).addScaledVector(ca,a);let g=h*y-x*f;if(g<=0&&f-h>=0&&x-y>=0)return Eu.subVectors(r,s),a=(f-h)/(f-h+(x-y)),t.copy(s).addScaledVector(Eu,a);let d=1/(g+v+p);return o=v*d,a=p*d,t.copy(n).addScaledVector(la,o).addScaledVector(ca,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},js={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function dc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=jt.workingColorSpace){if(e=yh(e,1),t=Dn(t,0,1),n=Dn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=dc(o,r,e+1/3),this.g=dc(o,r,e),this.b=dc(o,r,e-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(e,t=Jt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){let n=vf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}copyLinearToSRGB(e){return this.r=tc(e.r),this.g=tc(e.g),this.b=tc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return jt.fromWorkingColorSpace(Gn.copy(this),e),Math.round(Dn(Gn.r*255,0,255))*65536+Math.round(Dn(Gn.g*255,0,255))*256+Math.round(Dn(Gn.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=jt.workingColorSpace){jt.fromWorkingColorSpace(Gn.copy(this),t);let n=Gn.r,s=Gn.g,r=Gn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=jt.workingColorSpace){return jt.fromWorkingColorSpace(Gn.copy(this),t),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Jt){jt.fromWorkingColorSpace(Gn.copy(this),e);let t=Gn.r,n=Gn.g,s=Gn.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(js),this.setHSL(js.h+e,js.s+t,js.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(js),e.getHSL(Fo);let n=so(js.h,Fo.h,t),s=so(js.s,Fo.s,t),r=so(js.l,Fo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gn=new De;De.NAMES=vf;var rp=0,sr=class extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=ba,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Cc,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ta,this.stencilZFail=ta,this.stencilZPass=ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ba&&(n.blending=this.blending),this.side!==ir&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rc&&(n.blendSrc=this.blendSrc),this.blendDst!==Cc&&(n.blendDst=this.blendDst),this.blendEquation!==Cr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==nl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ta&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ta&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ta&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ut=class extends sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var wn=new U,zo=new Je,hi=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zo.fromBufferAttribute(this,t),zo.applyMatrix3(e),this.setXY(t,zo.x,zo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix3(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ss(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dc&&(e.usage=this.usage),e}};var pl=class extends hi{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ml=class extends hi{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var yn=class extends hi{constructor(e,t,n){super(new Float32Array(e),t,n)}};var ap=0,Li=new Ft,pc=new Yn,ha=new U,_i=new Is,Ka=new Is,Un=new U,Ei=class i extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_f(e)?ml:pl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,t,n){return Li.makeTranslation(e,t,n),this.applyMatrix4(Li),this}scale(e,t,n){return Li.makeScale(e,t,n),this.applyMatrix4(Li),this}lookAt(e){return pc.lookAt(e),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ha).negate(),this.translate(ha.x,ha.y,ha.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new yn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];_i.setFromBufferAttribute(r),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ka.setFromBufferAttribute(a),this.morphTargetsRelative?(Un.addVectors(_i.min,Ka.min),_i.expandByPoint(Un),Un.addVectors(_i.max,Ka.max),_i.expandByPoint(Un)):(_i.expandByPoint(Ka.min),_i.expandByPoint(Ka.max))}_i.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Un.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Un));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Un.fromBufferAttribute(a,c),l&&(ha.fromBufferAttribute(e,c),Un.add(ha)),s=Math.max(s,n.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let C=0;C<a;C++)c[C]=new U,h[C]=new U;let f=new U,p=new U,x=new U,y=new Je,v=new Je,g=new Je,d=new U,L=new U;function M(C,O,ae){f.fromArray(s,C*3),p.fromArray(s,O*3),x.fromArray(s,ae*3),y.fromArray(o,C*2),v.fromArray(o,O*2),g.fromArray(o,ae*2),p.sub(f),x.sub(f),v.sub(y),g.sub(y);let Re=1/(v.x*g.y-g.x*v.y);isFinite(Re)&&(d.copy(p).multiplyScalar(g.y).addScaledVector(x,-v.y).multiplyScalar(Re),L.copy(x).multiplyScalar(v.x).addScaledVector(p,-g.x).multiplyScalar(Re),c[C].add(d),c[O].add(d),c[ae].add(d),h[C].add(L),h[O].add(L),h[ae].add(L))}let H=this.groups;H.length===0&&(H=[{start:0,count:n.length}]);for(let C=0,O=H.length;C<O;++C){let ae=H[C],Re=ae.start,k=ae.count;for(let J=Re,se=Re+k;J<se;J+=3)M(n[J+0],n[J+1],n[J+2])}let P=new U,F=new U,N=new U,le=new U;function b(C){N.fromArray(r,C*3),le.copy(N);let O=c[C];P.copy(O),P.sub(N.multiplyScalar(N.dot(O))).normalize(),F.crossVectors(le,O);let Re=F.dot(h[C])<0?-1:1;l[C*4]=P.x,l[C*4+1]=P.y,l[C*4+2]=P.z,l[C*4+3]=Re}for(let C=0,O=H.length;C<O;++C){let ae=H[C],Re=ae.start,k=ae.count;for(let J=Re,se=Re+k;J<se;J+=3)b(n[J+0]),b(n[J+1]),b(n[J+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,x=n.count;p<x;p++)n.setXYZ(p,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,f=new U;if(e)for(let p=0,x=e.count;p<x;p+=3){let y=e.getX(p+0),v=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,y),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,x=t.count;p<x;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Un.fromBufferAttribute(e,t),Un.normalize(),e.setXYZ(t,Un.x,Un.y,Un.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,p=new c.constructor(l.length*h),x=0,y=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?x=l[v]*a.data.stride+a.offset:x=l[v]*h;for(let d=0;d<h;d++)p[y++]=c[x++]}return new hi(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let p=c[h],x=e(p,n);l.push(x)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){let x=c[f];h.push(x.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let p=0,x=f.length;p<x;p++)h.push(f[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Su=new Ft,Tr=new Pa,Bo=new Nr,bu=new U,ua=new U,fa=new U,da=new U,mc=new U,Ho=new U,ko=new Je,Vo=new Je,Go=new Je,wu=new U,Tu=new U,Au=new U,Wo=new U,Xo=new U,vt=class extends Yn{constructor(e=new Ei,t=new Ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(mc.fromBufferAttribute(f,e),o?Ho.addScaledVector(mc,h):Ho.addScaledVector(mc.sub(t),h))}t.add(Ho)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(r),Tr.copy(e.ray).recast(e.near),!(Bo.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Bo,bu)===null||Tr.origin.distanceToSquared(bu)>(e.far-e.near)**2))&&(Su.copy(r).invert(),Tr.copy(e.ray).applyMatrix4(Su),!(n.boundingBox!==null&&Tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Tr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,x=r.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,v=p.length;y<v;y++){let g=p[y],d=o[g.materialIndex],L=Math.max(g.start,x.start),M=Math.min(a.count,Math.min(g.start+g.count,x.start+x.count));for(let H=L,P=M;H<P;H+=3){let F=a.getX(H),N=a.getX(H+1),le=a.getX(H+2);s=qo(this,d,e,n,c,h,f,F,N,le),s&&(s.faceIndex=Math.floor(H/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,x.start),v=Math.min(a.count,x.start+x.count);for(let g=y,d=v;g<d;g+=3){let L=a.getX(g),M=a.getX(g+1),H=a.getX(g+2);s=qo(this,o,e,n,c,h,f,L,M,H),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,v=p.length;y<v;y++){let g=p[y],d=o[g.materialIndex],L=Math.max(g.start,x.start),M=Math.min(l.count,Math.min(g.start+g.count,x.start+x.count));for(let H=L,P=M;H<P;H+=3){let F=H,N=H+1,le=H+2;s=qo(this,d,e,n,c,h,f,F,N,le),s&&(s.faceIndex=Math.floor(H/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,x.start),v=Math.min(l.count,x.start+x.count);for(let g=y,d=v;g<d;g+=3){let L=g,M=g+1,H=g+2;s=qo(this,o,e,n,c,h,f,L,M,H),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function op(i,e,t,n,s,r,o,a){let l;if(e.side===qn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ir,a),l===null)return null;Xo.copy(a),Xo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Xo);return c<t.near||c>t.far?null:{distance:c,point:Xo.clone(),object:i}}function qo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ua),i.getVertexPosition(l,fa),i.getVertexPosition(c,da);let h=op(i,e,t,n,ua,fa,da,Wo);if(h){s&&(ko.fromBufferAttribute(s,a),Vo.fromBufferAttribute(s,l),Go.fromBufferAttribute(s,c),h.uv=Lr.getInterpolation(Wo,ua,fa,da,ko,Vo,Go,new Je)),r&&(ko.fromBufferAttribute(r,a),Vo.fromBufferAttribute(r,l),Go.fromBufferAttribute(r,c),h.uv1=Lr.getInterpolation(Wo,ua,fa,da,ko,Vo,Go,new Je),h.uv2=h.uv1),o&&(wu.fromBufferAttribute(o,a),Tu.fromBufferAttribute(o,l),Au.fromBufferAttribute(o,c),h.normal=Lr.getInterpolation(Wo,ua,fa,da,wu,Tu,Au,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new U,materialIndex:0};Lr.getNormal(ua,fa,da,f.normal),h.face=f}return h}var Us=class i extends Ei{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],p=0,x=0;y("z","y","x",-1,-1,n,t,e,o,r,0),y("z","y","x",1,-1,n,t,-e,o,r,1),y("x","z","y",1,1,e,n,t,s,o,2),y("x","z","y",1,-1,e,n,-t,s,o,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new yn(c,3)),this.setAttribute("normal",new yn(h,3)),this.setAttribute("uv",new yn(f,2));function y(v,g,d,L,M,H,P,F,N,le,b){let C=H/N,O=P/le,ae=H/2,Re=P/2,k=F/2,J=N+1,se=le+1,_e=0,ue=0,re=new U;for(let Me=0;Me<se;Me++){let Ce=Me*O-Re;for(let I=0;I<J;I++){let W=I*C-ae;re[v]=W*L,re[g]=Ce*M,re[d]=k,c.push(re.x,re.y,re.z),re[v]=0,re[g]=0,re[d]=F>0?1:-1,h.push(re.x,re.y,re.z),f.push(I/N),f.push(1-Me/le),_e+=1}}for(let Me=0;Me<le;Me++)for(let Ce=0;Ce<N;Ce++){let I=p+Ce+J*Me,W=p+Ce+J*(Me+1),oe=p+(Ce+1)+J*(Me+1),Le=p+(Ce+1)+J*Me;l.push(I,W,Le),l.push(W,oe,Le),ue+=6}a.addGroup(x,ue,b),x+=ue,p+=_e}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function La(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function ti(i){let e={};for(let t=0;t<i.length;t++){let n=La(i[t]);for(let s in n)e[s]=n[s]}return e}function lp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yf(i){return i.getRenderTarget()===null?i.outputColorSpace:jt.workingColorSpace}var ar={clone:La,merge:ti},cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cp,this.fragmentShader=hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=La(e.uniforms),this.uniformsGroups=lp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},gl=class extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Cs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wn=class extends gl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lo*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(io*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},pa=-90,ma=1,Bc=class extends Yn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wn(pa,ma,e,t);s.layers=this.layers,this.add(s);let r=new Wn(pa,ma,e,t);r.layers=this.layers,this.add(r);let o=new Wn(pa,ma,e,t);o.layers=this.layers,this.add(o);let a=new Wn(pa,ma,e,t);a.layers=this.layers,this.add(a);let l=new Wn(pa,ma,e,t);l.layers=this.layers,this.add(l);let c=new Wn(pa,ma,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Cs)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ll)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,p,x),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},xl=class extends Mi{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Aa,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hc=class extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(ro("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Dr?Jt:Ii),this.texture=new xl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ci}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Us(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:La(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qn,blending:rs});r.uniforms.tEquirect.value=t;let o=new vt(s,r),a=t.minFilter;return t.minFilter===oo&&(t.minFilter=ci),new Bc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},gc=new U,up=new U,fp=new Bt,ki=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=gc.subVectors(n,t).cross(up.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(gc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||fp.getNormalMatrix(e),s=this.coplanarPoint(gc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ar=new Nr,Yo=new U,ho=class{constructor(e=new ki,t=new ki,n=new ki,s=new ki,r=new ki,o=new ki){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cs){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],p=s[7],x=s[8],y=s[9],v=s[10],g=s[11],d=s[12],L=s[13],M=s[14],H=s[15];if(n[0].setComponents(l-r,p-c,g-x,H-d).normalize(),n[1].setComponents(l+r,p+c,g+x,H+d).normalize(),n[2].setComponents(l+o,p+h,g+y,H+L).normalize(),n[3].setComponents(l-o,p-h,g-y,H-L).normalize(),n[4].setComponents(l-a,p-f,g-v,H-M).normalize(),t===Cs)n[5].setComponents(l+a,p+f,g+v,H+M).normalize();else if(t===ll)n[5].setComponents(a,f,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Yo.x=s.normal.x>0?e.max.x:e.min.x,Yo.y=s.normal.y>0?e.max.y:e.min.y,Yo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Mf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function dp(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let f=c.array,p=c.usage,x=f.byteLength,y=i.createBuffer();i.bindBuffer(h,y),i.bufferData(h,f,p),c.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:y,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:x}}function r(c,h,f){let p=h.array,x=h._updateRange,y=h.updateRanges;if(i.bindBuffer(f,c),x.count===-1&&y.length===0&&i.bufferSubData(f,0,p),y.length!==0){for(let v=0,g=y.length;v<g;v++){let d=y[v];t?i.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):i.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}x.count!==-1&&(t?i.bufferSubData(f,x.offset*p.BYTES_PER_ELEMENT,p,x.offset,x.count):i.bufferSubData(f,x.offset*p.BYTES_PER_ELEMENT,p.subarray(x.offset,x.offset+x.count)),x.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);if(f===void 0)n.set(c,s(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:l}}var ii=class i extends Ei{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=e/a,p=t/l,x=[],y=[],v=[],g=[];for(let d=0;d<h;d++){let L=d*p-o;for(let M=0;M<c;M++){let H=M*f-r;y.push(H,-L,0),v.push(0,0,1),g.push(M/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let L=0;L<a;L++){let M=L+c*d,H=L+c*(d+1),P=L+1+c*(d+1),F=L+1+c*d;x.push(M,H,F),x.push(H,P,F)}this.setIndex(x),this.setAttribute("position",new yn(y,3)),this.setAttribute("normal",new yn(v,3)),this.setAttribute("uv",new yn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},pp=`#ifdef USE_ALPHAHASH
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
}`,Nt={alphahash_fragment:pp,alphahash_pars_fragment:mp,alphamap_fragment:gp,alphamap_pars_fragment:xp,alphatest_fragment:_p,alphatest_pars_fragment:vp,aomap_fragment:yp,aomap_pars_fragment:Mp,batching_pars_vertex:Ep,batching_vertex:Sp,begin_vertex:bp,beginnormal_vertex:wp,bsdfs:Tp,iridescence_fragment:Ap,bumpmap_pars_fragment:Rp,clipping_planes_fragment:Cp,clipping_planes_pars_fragment:Pp,clipping_planes_pars_vertex:Lp,clipping_planes_vertex:Ip,color_fragment:Up,color_pars_fragment:Dp,color_pars_vertex:Np,color_vertex:Op,common:Fp,cube_uv_reflection_fragment:zp,defaultnormal_vertex:Bp,displacementmap_pars_vertex:Hp,displacementmap_vertex:kp,emissivemap_fragment:Vp,emissivemap_pars_fragment:Gp,colorspace_fragment:Wp,colorspace_pars_fragment:Xp,envmap_fragment:qp,envmap_common_pars_fragment:Yp,envmap_pars_fragment:Zp,envmap_pars_vertex:Jp,envmap_physical_pars_fragment:om,envmap_vertex:Kp,fog_vertex:$p,fog_pars_vertex:jp,fog_fragment:Qp,fog_pars_fragment:em,gradientmap_pars_fragment:tm,lightmap_fragment:nm,lightmap_pars_fragment:im,lights_lambert_fragment:sm,lights_lambert_pars_fragment:rm,lights_pars_begin:am,lights_toon_fragment:lm,lights_toon_pars_fragment:cm,lights_phong_fragment:hm,lights_phong_pars_fragment:um,lights_physical_fragment:fm,lights_physical_pars_fragment:dm,lights_fragment_begin:pm,lights_fragment_maps:mm,lights_fragment_end:gm,logdepthbuf_fragment:xm,logdepthbuf_pars_fragment:_m,logdepthbuf_pars_vertex:vm,logdepthbuf_vertex:ym,map_fragment:Mm,map_pars_fragment:Em,map_particle_fragment:Sm,map_particle_pars_fragment:bm,metalnessmap_fragment:wm,metalnessmap_pars_fragment:Tm,morphcolor_vertex:Am,morphnormal_vertex:Rm,morphtarget_pars_vertex:Cm,morphtarget_vertex:Pm,normal_fragment_begin:Lm,normal_fragment_maps:Im,normal_pars_fragment:Um,normal_pars_vertex:Dm,normal_vertex:Nm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:zm,clearcoat_pars_fragment:Bm,iridescence_pars_fragment:Hm,opaque_fragment:km,packing:Vm,premultiplied_alpha_fragment:Gm,project_vertex:Wm,dithering_fragment:Xm,dithering_pars_fragment:qm,roughnessmap_fragment:Ym,roughnessmap_pars_fragment:Zm,shadowmap_pars_fragment:Jm,shadowmap_pars_vertex:Km,shadowmap_vertex:$m,shadowmask_pars_fragment:jm,skinbase_vertex:Qm,skinning_pars_vertex:eg,skinning_vertex:tg,skinnormal_vertex:ng,specularmap_fragment:ig,specularmap_pars_fragment:sg,tonemapping_fragment:rg,tonemapping_pars_fragment:ag,transmission_fragment:og,transmission_pars_fragment:lg,uv_pars_fragment:cg,uv_pars_vertex:hg,uv_vertex:ug,worldpos_vertex:fg,background_vert:dg,background_frag:pg,backgroundCube_vert:mg,backgroundCube_frag:gg,cube_vert:xg,cube_frag:_g,depth_vert:vg,depth_frag:yg,distanceRGBA_vert:Mg,distanceRGBA_frag:Eg,equirect_vert:Sg,equirect_frag:bg,linedashed_vert:wg,linedashed_frag:Tg,meshbasic_vert:Ag,meshbasic_frag:Rg,meshlambert_vert:Cg,meshlambert_frag:Pg,meshmatcap_vert:Lg,meshmatcap_frag:Ig,meshnormal_vert:Ug,meshnormal_frag:Dg,meshphong_vert:Ng,meshphong_frag:Og,meshphysical_vert:Fg,meshphysical_frag:zg,meshtoon_vert:Bg,meshtoon_frag:Hg,points_vert:kg,points_frag:Vg,shadow_vert:Gg,shadow_frag:Wg,sprite_vert:Xg,sprite_frag:qg},Oe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},is={basic:{uniforms:ti([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:ti([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new De(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:ti([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:ti([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:ti([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new De(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:ti([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:ti([Oe.points,Oe.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:ti([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:ti([Oe.common,Oe.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:ti([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:ti([Oe.sprite,Oe.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:ti([Oe.common,Oe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:ti([Oe.lights,Oe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};is.physical={uniforms:ti([is.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var Zo={r:0,b:0,g:0};function Yg(i,e,t,n,s,r,o){let a=new De(0),l=r===!0?0:1,c,h,f=null,p=0,x=null;function y(g,d){let L=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?t:e).get(M)),M===null?v(a,l):M&&M.isColor&&(v(M,1),L=!0);let H=i.xr.getEnvironmentBlendMode();H==="additive"?n.buffers.color.setClear(0,0,0,1,o):H==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||L)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Ll)?(h===void 0&&(h=new vt(new Us(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:La(is.backgroundCube.uniforms),vertexShader:is.backgroundCube.vertexShader,fragmentShader:is.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,F,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=jt.getTransfer(M.colorSpace)!==rn,(f!==M||p!==M.version||x!==i.toneMapping)&&(h.material.needsUpdate=!0,f=M,p=M.version,x=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new vt(new ii(2,2),new gn({name:"BackgroundMaterial",uniforms:La(is.background.uniforms),vertexShader:is.background.vertexShader,fragmentShader:is.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=jt.getTransfer(M.colorSpace)!==rn,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||x!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,p=M.version,x=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,d){g.getRGB(Zo,yf(i)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(g,d=1){a.set(g),l=d,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(a,l)},render:y}}function Zg(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=g(null),c=l,h=!1;function f(k,J,se,_e,ue){let re=!1;if(o){let Me=v(_e,se,J);c!==Me&&(c=Me,x(c.object)),re=d(k,_e,se,ue),re&&L(k,_e,se,ue)}else{let Me=J.wireframe===!0;(c.geometry!==_e.id||c.program!==se.id||c.wireframe!==Me)&&(c.geometry=_e.id,c.program=se.id,c.wireframe=Me,re=!0)}ue!==null&&t.update(ue,i.ELEMENT_ARRAY_BUFFER),(re||h)&&(h=!1,le(k,J,se,_e),ue!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ue).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function x(k){return n.isWebGL2?i.bindVertexArray(k):r.bindVertexArrayOES(k)}function y(k){return n.isWebGL2?i.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function v(k,J,se){let _e=se.wireframe===!0,ue=a[k.id];ue===void 0&&(ue={},a[k.id]=ue);let re=ue[J.id];re===void 0&&(re={},ue[J.id]=re);let Me=re[_e];return Me===void 0&&(Me=g(p()),re[_e]=Me),Me}function g(k){let J=[],se=[],_e=[];for(let ue=0;ue<s;ue++)J[ue]=0,se[ue]=0,_e[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:se,attributeDivisors:_e,object:k,attributes:{},index:null}}function d(k,J,se,_e){let ue=c.attributes,re=J.attributes,Me=0,Ce=se.getAttributes();for(let I in Ce)if(Ce[I].location>=0){let oe=ue[I],Le=re[I];if(Le===void 0&&(I==="instanceMatrix"&&k.instanceMatrix&&(Le=k.instanceMatrix),I==="instanceColor"&&k.instanceColor&&(Le=k.instanceColor)),oe===void 0||oe.attribute!==Le||Le&&oe.data!==Le.data)return!0;Me++}return c.attributesNum!==Me||c.index!==_e}function L(k,J,se,_e){let ue={},re=J.attributes,Me=0,Ce=se.getAttributes();for(let I in Ce)if(Ce[I].location>=0){let oe=re[I];oe===void 0&&(I==="instanceMatrix"&&k.instanceMatrix&&(oe=k.instanceMatrix),I==="instanceColor"&&k.instanceColor&&(oe=k.instanceColor));let Le={};Le.attribute=oe,oe&&oe.data&&(Le.data=oe.data),ue[I]=Le,Me++}c.attributes=ue,c.attributesNum=Me,c.index=_e}function M(){let k=c.newAttributes;for(let J=0,se=k.length;J<se;J++)k[J]=0}function H(k){P(k,0)}function P(k,J){let se=c.newAttributes,_e=c.enabledAttributes,ue=c.attributeDivisors;se[k]=1,_e[k]===0&&(i.enableVertexAttribArray(k),_e[k]=1),ue[k]!==J&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,J),ue[k]=J)}function F(){let k=c.newAttributes,J=c.enabledAttributes;for(let se=0,_e=J.length;se<_e;se++)J[se]!==k[se]&&(i.disableVertexAttribArray(se),J[se]=0)}function N(k,J,se,_e,ue,re,Me){Me===!0?i.vertexAttribIPointer(k,J,se,ue,re):i.vertexAttribPointer(k,J,se,_e,ue,re)}function le(k,J,se,_e){if(n.isWebGL2===!1&&(k.isInstancedMesh||_e.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();let ue=_e.attributes,re=se.getAttributes(),Me=J.defaultAttributeValues;for(let Ce in re){let I=re[Ce];if(I.location>=0){let W=ue[Ce];if(W===void 0&&(Ce==="instanceMatrix"&&k.instanceMatrix&&(W=k.instanceMatrix),Ce==="instanceColor"&&k.instanceColor&&(W=k.instanceColor)),W!==void 0){let oe=W.normalized,Le=W.itemSize,ge=t.get(W);if(ge===void 0)continue;let He=ge.buffer,ht=ge.type,je=ge.bytesPerElement,lt=n.isWebGL2===!0&&(ht===i.INT||ht===i.UNSIGNED_INT||W.gpuType===of);if(W.isInterleavedBufferAttribute){let yt=W.data,$=yt.stride,Vt=W.offset;if(yt.isInstancedInterleavedBuffer){for(let nt=0;nt<I.locationSize;nt++)P(I.location+nt,yt.meshPerAttribute);k.isInstancedMesh!==!0&&_e._maxInstanceCount===void 0&&(_e._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let nt=0;nt<I.locationSize;nt++)H(I.location+nt);i.bindBuffer(i.ARRAY_BUFFER,He);for(let nt=0;nt<I.locationSize;nt++)N(I.location+nt,Le/I.locationSize,ht,oe,$*je,(Vt+Le/I.locationSize*nt)*je,lt)}else{if(W.isInstancedBufferAttribute){for(let yt=0;yt<I.locationSize;yt++)P(I.location+yt,W.meshPerAttribute);k.isInstancedMesh!==!0&&_e._maxInstanceCount===void 0&&(_e._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let yt=0;yt<I.locationSize;yt++)H(I.location+yt);i.bindBuffer(i.ARRAY_BUFFER,He);for(let yt=0;yt<I.locationSize;yt++)N(I.location+yt,Le/I.locationSize,ht,oe,Le*je,Le/I.locationSize*yt*je,lt)}}else if(Me!==void 0){let oe=Me[Ce];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(I.location,oe);break;case 3:i.vertexAttrib3fv(I.location,oe);break;case 4:i.vertexAttrib4fv(I.location,oe);break;default:i.vertexAttrib1fv(I.location,oe)}}}}F()}function b(){ae();for(let k in a){let J=a[k];for(let se in J){let _e=J[se];for(let ue in _e)y(_e[ue].object),delete _e[ue];delete J[se]}delete a[k]}}function C(k){if(a[k.id]===void 0)return;let J=a[k.id];for(let se in J){let _e=J[se];for(let ue in _e)y(_e[ue].object),delete _e[ue];delete J[se]}delete a[k.id]}function O(k){for(let J in a){let se=a[J];if(se[k.id]===void 0)continue;let _e=se[k.id];for(let ue in _e)y(_e[ue].object),delete _e[ue];delete se[k.id]}}function ae(){Re(),h=!0,c!==l&&(c=l,x(c.object))}function Re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ae,resetDefaultState:Re,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:O,initAttributes:M,enableAttribute:H,disableUnusedAttributes:F}}function Jg(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,f){i.drawArrays(r,h,f),t.update(f,r,1)}function l(h,f,p){if(p===0)return;let x,y;if(s)x=i,y="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](r,h,f,p),t.update(f,r,p)}function c(h,f,p){if(p===0)return;let x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<p;y++)this.render(h[y],f[y]);else{x.multiDrawArraysWEBGL(r,h,0,f,0,p);let y=0;for(let v=0;v<p;v++)y+=f[v];t.update(y,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Kg(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),L=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,H=o||e.has("OES_texture_float"),P=M&&H,F=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:L,vertexTextures:M,floatFragmentTextures:H,floatVertexTextures:P,maxSamples:F}}function $g(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ki,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let x=f.length!==0||p||n!==0||s;return s=p,n=f.length,x},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,x){let y=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,d=i.get(f);if(!s||y===null||y.length===0||r&&!g)r?h(null):c();else{let L=r?0:n,M=L*4,H=d.clippingState||null;l.value=H,H=h(y,p,M,x);for(let P=0;P!==M;++P)H[P]=t[P];d.clippingState=H,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=L}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,p,x,y){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=l.value,y!==!0||g===null){let d=x+v*4,L=p.matrixWorldInverse;a.getNormalMatrix(L),(g===null||g.length<d)&&(g=new Float32Array(d));for(let M=0,H=x;M!==v;++M,H+=4)o.copy(f[M]).applyMatrix4(L,a),o.normal.toArray(g,H),g[H+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function jg(i){let e=new WeakMap;function t(o,a){return a===Pc?o.mapping=Aa:a===Lc&&(o.mapping=Ra),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Pc||a===Lc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Hc(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ia=class extends gl{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ea=4,Ru=[.125,.215,.35,.446,.526,.582],Pr=20,xc=new Ia,Cu=new De,_c=null,vc=0,yc=0,Rr=(1+Math.sqrt(5))/2,ga=1/Rr,Pu=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Rr,ga),new U(0,Rr,-ga),new U(ga,0,Rr),new U(-ga,0,Rr),new U(Rr,ga,0),new U(-Rr,ga,0)],_l=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,vc,yc),e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Aa||e.mapping===Ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:Gi,format:vi,colorSpace:Ls,depthBuffer:!1},s=Lu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qg(r)),this._blurMaterial=e0(r,e,t)}return s}_compileMaterial(e){let t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,xc)}_sceneToCubeUV(e,t,n,s){let a=new Wn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Cu),h.toneMapping=tr,h.autoClear=!1;let x=new Ut({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),y=new vt(new Us,x),v=!1,g=e.background;g?g.isColor&&(x.color.copy(g),e.background=null,v=!0):(x.color.copy(Cu),v=!0);for(let d=0;d<6;d++){let L=d%3;L===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):L===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let M=this._cubeSize;Jo(s,L*M,d>2?M:0,M,M),h.setRenderTarget(s),v&&h.render(y,a),h.render(e,a)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Aa||e.mapping===Ra;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Jo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,xc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Pu[(s-1)%Pu.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new vt(this._lodPlanes[s],c),p=c.uniforms,x=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*x):2*Math.PI/(2*Pr-1),v=r/y,g=isFinite(r)?1+Math.floor(h*v):Pr;g>Pr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Pr}`);let d=[],L=0;for(let N=0;N<Pr;++N){let le=N/v,b=Math.exp(-le*le/2);d.push(b),N===0?L+=b:N<g&&(L+=2*b)}for(let N=0;N<d.length;N++)d[N]=d[N]/L;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:M}=this;p.dTheta.value=y,p.mipInt.value=M-n;let H=this._sizeLods[s],P=3*H*(s>M-Ea?s-M+Ea:0),F=4*(this._cubeSize-H);Jo(t,P,F,3*H,2*H),l.setRenderTarget(t),l.render(f,xc)}};function Qg(i){let e=[],t=[],n=[],s=i,r=i-Ea+1+Ru.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ea?l=Ru[o-i+Ea-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],x=6,y=6,v=3,g=2,d=1,L=new Float32Array(v*y*x),M=new Float32Array(g*y*x),H=new Float32Array(d*y*x);for(let F=0;F<x;F++){let N=F%3*2/3-1,le=F>2?0:-1,b=[N,le,0,N+2/3,le,0,N+2/3,le+1,0,N,le,0,N+2/3,le+1,0,N,le+1,0];L.set(b,v*y*F),M.set(p,g*y*F);let C=[F,F,F,F,F,F];H.set(C,d*y*F)}let P=new Ei;P.setAttribute("position",new hi(L,v)),P.setAttribute("uv",new hi(M,g)),P.setAttribute("faceIndex",new hi(H,d)),e.push(P),s>Ea&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lu(i,e,t){let n=new ni(i,e,t);return n.texture.mapping=Ll,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function e0(i,e,t){let n=new Float32Array(Pr),s=new U(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Iu(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Uu(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Mh(){return`

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
	`}function t0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Pc||l===Lc,h=l===Aa||l===Ra;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new _l(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(c&&f&&f.height>0||h&&f&&s(f)){t===null&&(t=new _l(i));let p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function n0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function i0(i,e,t,n){let s={},r=new WeakMap;function o(f){let p=f.target;p.index!==null&&e.remove(p.index);for(let y in p.attributes)e.remove(p.attributes[y]);for(let y in p.morphAttributes){let v=p.morphAttributes[y];for(let g=0,d=v.length;g<d;g++)e.remove(v[g])}p.removeEventListener("dispose",o),delete s[p.id];let x=r.get(p);x&&(e.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(f){let p=f.attributes;for(let y in p)e.update(p[y],i.ARRAY_BUFFER);let x=f.morphAttributes;for(let y in x){let v=x[y];for(let g=0,d=v.length;g<d;g++)e.update(v[g],i.ARRAY_BUFFER)}}function c(f){let p=[],x=f.index,y=f.attributes.position,v=0;if(x!==null){let L=x.array;v=x.version;for(let M=0,H=L.length;M<H;M+=3){let P=L[M+0],F=L[M+1],N=L[M+2];p.push(P,F,F,N,N,P)}}else if(y!==void 0){let L=y.array;v=y.version;for(let M=0,H=L.length/3-1;M<H;M+=3){let P=M+0,F=M+1,N=M+2;p.push(P,F,F,N,N,P)}}else return;let g=new(_f(p)?ml:pl)(p,1);g.version=v;let d=r.get(f);d&&e.remove(d),r.set(f,g)}function h(f){let p=r.get(f);if(p){let x=f.index;x!==null&&p.version<x.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function s0(i,e,t,n){let s=n.isWebGL2,r;function o(x){r=x}let a,l;function c(x){a=x.type,l=x.bytesPerElement}function h(x,y){i.drawElements(r,y,a,x*l),t.update(y,r,1)}function f(x,y,v){if(v===0)return;let g,d;if(s)g=i,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](r,y,a,x*l,v),t.update(y,r,v)}function p(x,y,v){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<v;d++)this.render(x[d]/l,y[d]);else{g.multiDrawElementsWEBGL(r,y,0,a,x,0,v);let d=0;for(let L=0;L<v;L++)d+=y[L];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function r0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function a0(i,e){return i[0]-e[0]}function o0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function l0(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new en,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,f){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=x!==void 0?x.length:0,v=r.get(h);if(v===void 0||v.count!==y){let k=function(){ae.dispose(),r.delete(h),h.removeEventListener("dispose",k)};v!==void 0&&v.texture.dispose();let L=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,H=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],N=h.morphAttributes.color||[],le=0;L===!0&&(le=1),M===!0&&(le=2),H===!0&&(le=3);let b=h.attributes.position.count*le,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let O=new Float32Array(b*C*4*y),ae=new dl(O,b,C,y);ae.type=er,ae.needsUpdate=!0;let Re=le*4;for(let J=0;J<y;J++){let se=P[J],_e=F[J],ue=N[J],re=b*C*4*J;for(let Me=0;Me<se.count;Me++){let Ce=Me*Re;L===!0&&(o.fromBufferAttribute(se,Me),O[re+Ce+0]=o.x,O[re+Ce+1]=o.y,O[re+Ce+2]=o.z,O[re+Ce+3]=0),M===!0&&(o.fromBufferAttribute(_e,Me),O[re+Ce+4]=o.x,O[re+Ce+5]=o.y,O[re+Ce+6]=o.z,O[re+Ce+7]=0),H===!0&&(o.fromBufferAttribute(ue,Me),O[re+Ce+8]=o.x,O[re+Ce+9]=o.y,O[re+Ce+10]=o.z,O[re+Ce+11]=ue.itemSize===4?o.w:1)}}v={count:y,texture:ae,size:new Je(b,C)},r.set(h,v),h.addEventListener("dispose",k)}let g=0;for(let L=0;L<p.length;L++)g+=p[L];let d=h.morphTargetsRelative?1:1-g;f.getUniforms().setValue(i,"morphTargetBaseInfluence",d),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let x=p===void 0?0:p.length,y=n[h.id];if(y===void 0||y.length!==x){y=[];for(let M=0;M<x;M++)y[M]=[M,0];n[h.id]=y}for(let M=0;M<x;M++){let H=y[M];H[0]=M,H[1]=p[M]}y.sort(o0);for(let M=0;M<8;M++)M<x&&y[M][1]?(a[M][0]=y[M][0],a[M][1]=y[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(a0);let v=h.morphAttributes.position,g=h.morphAttributes.normal,d=0;for(let M=0;M<8;M++){let H=a[M],P=H[0],F=H[1];P!==Number.MAX_SAFE_INTEGER&&F?(v&&h.getAttribute("morphTarget"+M)!==v[P]&&h.setAttribute("morphTarget"+M,v[P]),g&&h.getAttribute("morphNormal"+M)!==g[P]&&h.setAttribute("morphNormal"+M,g[P]),s[M]=F,d+=F):(v&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),g&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),s[M]=0)}let L=h.morphTargetsRelative?1:1-d;f.getUniforms().setValue(i,"morphTargetBaseInfluence",L),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function c0(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var vl=class extends Mi{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Ur,h!==Ur&&h!==Ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ur&&(n=Qs),n===void 0&&h===Ca&&(n=Ir),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Rn,this.minFilter=l!==void 0?l:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ef=new Mi,Sf=new vl(1,1);Sf.compareFunction=gf;var bf=new dl,wf=new zc,Tf=new xl,Du=[],Nu=[],Ou=new Float32Array(16),Fu=new Float32Array(9),zu=new Float32Array(4);function Da(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Du[s];if(r===void 0&&(r=new Float32Array(s),Du[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Cn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ul(i,e){let t=Nu[e];t===void 0&&(t=new Int32Array(e),Nu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function h0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function u0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;i.uniform2fv(this.addr,e),Pn(t,e)}}function f0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Cn(t,e))return;i.uniform3fv(this.addr,e),Pn(t,e)}}function d0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;i.uniform4fv(this.addr,e),Pn(t,e)}}function p0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Cn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pn(t,e)}else{if(Cn(t,n))return;zu.set(n),i.uniformMatrix2fv(this.addr,!1,zu),Pn(t,n)}}function m0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Cn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pn(t,e)}else{if(Cn(t,n))return;Fu.set(n),i.uniformMatrix3fv(this.addr,!1,Fu),Pn(t,n)}}function g0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Cn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pn(t,e)}else{if(Cn(t,n))return;Ou.set(n),i.uniformMatrix4fv(this.addr,!1,Ou),Pn(t,n)}}function x0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;i.uniform2iv(this.addr,e),Pn(t,e)}}function v0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Cn(t,e))return;i.uniform3iv(this.addr,e),Pn(t,e)}}function y0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;i.uniform4iv(this.addr,e),Pn(t,e)}}function M0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function E0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;i.uniform2uiv(this.addr,e),Pn(t,e)}}function S0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Cn(t,e))return;i.uniform3uiv(this.addr,e),Pn(t,e)}}function b0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;i.uniform4uiv(this.addr,e),Pn(t,e)}}function w0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Sf:Ef;t.setTexture2D(e||r,s)}function T0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wf,s)}function A0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Tf,s)}function R0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bf,s)}function C0(i){switch(i){case 5126:return h0;case 35664:return u0;case 35665:return f0;case 35666:return d0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return x0;case 35667:case 35671:return _0;case 35668:case 35672:return v0;case 35669:case 35673:return y0;case 5125:return M0;case 36294:return E0;case 36295:return S0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return R0}}function P0(i,e){i.uniform1fv(this.addr,e)}function L0(i,e){let t=Da(e,this.size,2);i.uniform2fv(this.addr,t)}function I0(i,e){let t=Da(e,this.size,3);i.uniform3fv(this.addr,t)}function U0(i,e){let t=Da(e,this.size,4);i.uniform4fv(this.addr,t)}function D0(i,e){let t=Da(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function N0(i,e){let t=Da(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function O0(i,e){let t=Da(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function F0(i,e){i.uniform1iv(this.addr,e)}function z0(i,e){i.uniform2iv(this.addr,e)}function B0(i,e){i.uniform3iv(this.addr,e)}function H0(i,e){i.uniform4iv(this.addr,e)}function k0(i,e){i.uniform1uiv(this.addr,e)}function V0(i,e){i.uniform2uiv(this.addr,e)}function G0(i,e){i.uniform3uiv(this.addr,e)}function W0(i,e){i.uniform4uiv(this.addr,e)}function X0(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);Cn(n,r)||(i.uniform1iv(this.addr,r),Pn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ef,r[o])}function q0(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);Cn(n,r)||(i.uniform1iv(this.addr,r),Pn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||wf,r[o])}function Y0(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);Cn(n,r)||(i.uniform1iv(this.addr,r),Pn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Tf,r[o])}function Z0(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);Cn(n,r)||(i.uniform1iv(this.addr,r),Pn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||bf,r[o])}function J0(i){switch(i){case 5126:return P0;case 35664:return L0;case 35665:return I0;case 35666:return U0;case 35674:return D0;case 35675:return N0;case 35676:return O0;case 5124:case 35670:return F0;case 35667:case 35671:return z0;case 35668:case 35672:return B0;case 35669:case 35673:return H0;case 5125:return k0;case 36294:return V0;case 36295:return G0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return Z0}}var kc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=C0(t.type)}},Vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J0(t.type)}},Gc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Mc=/(\w+)(\])?(\[|\.)?/g;function Bu(i,e){i.seq.push(e),i.map[e.id]=e}function K0(i,e,t){let n=i.name,s=n.length;for(Mc.lastIndex=0;;){let r=Mc.exec(n),o=Mc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bu(t,c===void 0?new kc(a,i,e):new Vc(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Gc(a),Bu(t,f)),t=f}}}var Ta=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);K0(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Hu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var $0=37297,j0=0;function Q0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function ex(i){let e=jt.getPrimaries(jt.workingColorSpace),t=jt.getPrimaries(i),n;switch(e===t?n="":e===ol&&t===al?n="LinearDisplayP3ToLinearSRGB":e===al&&t===ol&&(n="LinearSRGBToLinearDisplayP3"),i){case Ls:case Il:return[n,"LinearTransferOETF"];case Jt:case vh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ku(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Q0(i.getShaderSource(e),o)}else return s}function tx(i,e){let t=ex(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function nx(i,e){let t;switch(e){case ph:t="Linear";break;case mh:t="Reinhard";break;case gh:t="OptimizedCineon";break;case vo:t="ACESFilmic";break;case xh:t="AgX";break;case dd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ix(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sa).join(`
`)}function sx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Sa).join(`
`)}function rx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ax(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Sa(i){return i!==""}function Vu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(i){return i.replace(ox,cx)}var lx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cx(i,e){let t=Nt[e];if(t===void 0){let n=lx.get(e);if(n!==void 0)t=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wc(t)}var hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wu(i){return i.replace(hx,ux)}function ux(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rs&&(e="SHADOWMAP_TYPE_VSM"),e}function dx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Aa:case Ra:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function px(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ra:e="ENVMAP_MODE_REFRACTION";break}return e}function mx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dh:e="ENVMAP_BLENDING_MULTIPLY";break;case ud:e="ENVMAP_BLENDING_MIX";break;case fd:e="ENVMAP_BLENDING_ADD";break}return e}function gx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function xx(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=fx(t),c=dx(t),h=px(t),f=mx(t),p=gx(t),x=t.isWebGL2?"":ix(t),y=sx(t),v=rx(r),g=s.createProgram(),d,L,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Sa).join(`
`),d.length>0&&(d+=`
`),L=[x,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Sa).join(`
`),L.length>0&&(L+=`
`)):(d=[Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),L=[x,Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?Nt.tonemapping_pars_fragment:"",t.toneMapping!==tr?nx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,tx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sa).join(`
`)),o=Wc(o),o=Vu(o,t),o=Gu(o,t),a=Wc(a),a=Vu(a,t),a=Gu(a,t),o=Wu(o),a=Wu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,L=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+L);let H=M+d+o,P=M+L+a,F=Hu(s,s.VERTEX_SHADER,H),N=Hu(s,s.FRAGMENT_SHADER,P);s.attachShader(g,F),s.attachShader(g,N),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function le(ae){if(i.debug.checkShaderErrors){let Re=s.getProgramInfoLog(g).trim(),k=s.getShaderInfoLog(F).trim(),J=s.getShaderInfoLog(N).trim(),se=!0,_e=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,F,N);else{let ue=ku(s,F,"vertex"),re=ku(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+Re+`
`+ue+`
`+re)}else Re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Re):(k===""||J==="")&&(_e=!1);_e&&(ae.diagnostics={runnable:se,programLog:Re,vertexShader:{log:k,prefix:d},fragmentShader:{log:J,prefix:L}})}s.deleteShader(F),s.deleteShader(N),b=new Ta(s,g),C=ax(s,g)}let b;this.getUniforms=function(){return b===void 0&&le(this),b};let C;this.getAttributes=function(){return C===void 0&&le(this),C};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(g,$0)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=F,this.fragmentShader=N,this}var _x=0,Xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qc(e),t.set(e,n)),n}},qc=class{constructor(e){this.id=_x++,this.code=e,this.usedTimes=0}};function vx(i,e,t,n,s,r,o){let a=new co,l=new Xc,c=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,p=s.vertexTextures,x=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function g(b,C,O,ae,Re){let k=ae.fog,J=Re.geometry,se=b.isMeshStandardMaterial?ae.environment:null,_e=(b.isMeshStandardMaterial?t:e).get(b.envMap||se),ue=_e&&_e.mapping===Ll?_e.image.height:null,re=y[b.type];b.precision!==null&&(x=s.getMaxPrecision(b.precision),x!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));let Me=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ce=Me!==void 0?Me.length:0,I=0;J.morphAttributes.position!==void 0&&(I=1),J.morphAttributes.normal!==void 0&&(I=2),J.morphAttributes.color!==void 0&&(I=3);let W,oe,Le,ge;if(re){let on=is[re];W=on.vertexShader,oe=on.fragmentShader}else W=b.vertexShader,oe=b.fragmentShader,l.update(b),Le=l.getVertexShaderID(b),ge=l.getFragmentShaderID(b);let He=i.getRenderTarget(),ht=Re.isInstancedMesh===!0,je=Re.isBatchedMesh===!0,lt=!!b.map,yt=!!b.matcap,$=!!_e,Vt=!!b.aoMap,nt=!!b.lightMap,ot=!!b.bumpMap,Fe=!!b.normalMap,Ht=!!b.displacementMap,_t=!!b.emissiveMap,A=!!b.metalnessMap,E=!!b.roughnessMap,ee=b.anisotropy>0,Te=b.clearcoat>0,Ee=b.iridescence>0,be=b.sheen>0,Ge=b.transmission>0,Ue=ee&&!!b.anisotropyMap,Ne=Te&&!!b.clearcoatMap,ke=Te&&!!b.clearcoatNormalMap,st=Te&&!!b.clearcoatRoughnessMap,me=Ee&&!!b.iridescenceMap,Pt=Ee&&!!b.iridescenceThicknessMap,D=be&&!!b.sheenColorMap,Se=be&&!!b.sheenRoughnessMap,Ae=!!b.specularMap,we=!!b.specularColorMap,Ve=!!b.specularIntensityMap,Mt=Ge&&!!b.transmissionMap,dt=Ge&&!!b.thicknessMap,pt=!!b.gradientMap,fe=!!b.alphaMap,G=b.alphaTest>0,Ie=!!b.alphaHash,he=!!b.extensions,qe=!!J.attributes.uv1,Ke=!!J.attributes.uv2,Et=!!J.attributes.uv3,ft=tr;return b.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(ft=i.toneMapping),{isWebGL2:h,shaderID:re,shaderType:b.type,shaderName:b.name,vertexShader:W,fragmentShader:oe,defines:b.defines,customVertexShaderID:Le,customFragmentShaderID:ge,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:je,instancing:ht,instancingColor:ht&&Re.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:He===null?i.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:Ls,map:lt,matcap:yt,envMap:$,envMapMode:$&&_e.mapping,envMapCubeUVHeight:ue,aoMap:Vt,lightMap:nt,bumpMap:ot,normalMap:Fe,displacementMap:p&&Ht,emissiveMap:_t,normalMapObjectSpace:Fe&&b.normalMapType===wd,normalMapTangentSpace:Fe&&b.normalMapType===mf,metalnessMap:A,roughnessMap:E,anisotropy:ee,anisotropyMap:Ue,clearcoat:Te,clearcoatMap:Ne,clearcoatNormalMap:ke,clearcoatRoughnessMap:st,iridescence:Ee,iridescenceMap:me,iridescenceThicknessMap:Pt,sheen:be,sheenColorMap:D,sheenRoughnessMap:Se,specularMap:Ae,specularColorMap:we,specularIntensityMap:Ve,transmission:Ge,transmissionMap:Mt,thicknessMap:dt,gradientMap:pt,opaque:b.transparent===!1&&b.blending===ba,alphaMap:fe,alphaTest:G,alphaHash:Ie,combine:b.combine,mapUv:lt&&v(b.map.channel),aoMapUv:Vt&&v(b.aoMap.channel),lightMapUv:nt&&v(b.lightMap.channel),bumpMapUv:ot&&v(b.bumpMap.channel),normalMapUv:Fe&&v(b.normalMap.channel),displacementMapUv:Ht&&v(b.displacementMap.channel),emissiveMapUv:_t&&v(b.emissiveMap.channel),metalnessMapUv:A&&v(b.metalnessMap.channel),roughnessMapUv:E&&v(b.roughnessMap.channel),anisotropyMapUv:Ue&&v(b.anisotropyMap.channel),clearcoatMapUv:Ne&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ke&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:D&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(b.sheenRoughnessMap.channel),specularMapUv:Ae&&v(b.specularMap.channel),specularColorMapUv:we&&v(b.specularColorMap.channel),specularIntensityMapUv:Ve&&v(b.specularIntensityMap.channel),transmissionMapUv:Mt&&v(b.transmissionMap.channel),thicknessMapUv:dt&&v(b.thicknessMap.channel),alphaMapUv:fe&&v(b.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Fe||ee),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUv1s:qe,vertexUv2s:Ke,vertexUv3s:Et,pointsUvs:Re.isPoints===!0&&!!J.attributes.uv&&(lt||fe),fog:!!k,useFog:b.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Re.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:I,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,useLegacyLights:i._useLegacyLights,decodeVideoTexture:lt&&b.map.isVideoTexture===!0&&jt.getTransfer(b.map.colorSpace)===rn,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Xn,flipSided:b.side===qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:he&&b.extensions.derivatives===!0,extensionFragDepth:he&&b.extensions.fragDepth===!0,extensionDrawBuffers:he&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){let C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(let O in b.defines)C.push(O),C.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(L(C,b),M(C,b),C.push(i.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function L(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function M(b,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),b.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function H(b){let C=y[b.type],O;if(C){let ae=is[C];O=ar.clone(ae.uniforms)}else O=b.uniforms;return O}function P(b,C){let O;for(let ae=0,Re=c.length;ae<Re;ae++){let k=c[ae];if(k.cacheKey===C){O=k,++O.usedTimes;break}}return O===void 0&&(O=new xx(i,C,b,r),c.push(O)),O}function F(b){if(--b.usedTimes===0){let C=c.indexOf(b);c[C]=c[c.length-1],c.pop(),b.destroy()}}function N(b){l.remove(b)}function le(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:H,acquireProgram:P,releaseProgram:F,releaseShaderCache:N,programs:c,dispose:le}}function yx(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Mx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function qu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,p,x,y,v,g){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:p,material:x,groupOrder:y,renderOrder:f.renderOrder,z:v,group:g},i[e]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=x,d.groupOrder=y,d.renderOrder=f.renderOrder,d.z=v,d.group=g),e++,d}function a(f,p,x,y,v,g){let d=o(f,p,x,y,v,g);x.transmission>0?n.push(d):x.transparent===!0?s.push(d):t.push(d)}function l(f,p,x,y,v,g){let d=o(f,p,x,y,v,g);x.transmission>0?n.unshift(d):x.transparent===!0?s.unshift(d):t.unshift(d)}function c(f,p){t.length>1&&t.sort(f||Mx),n.length>1&&n.sort(p||qu),s.length>1&&s.sort(p||qu)}function h(){for(let f=e,p=i.length;f<p;f++){let x=i[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Ex(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Yu,i.set(n,[o])):s>=r.length?(o=new Yu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new De};break;case"SpotLight":t={position:new U,direction:new U,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function bx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var wx=0;function Tx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ax(i,e){let t=new Sx,n=bx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,o=new Ft,a=new Ft;function l(h,f){let p=0,x=0,y=0;for(let ae=0;ae<9;ae++)s.probe[ae].set(0,0,0);let v=0,g=0,d=0,L=0,M=0,H=0,P=0,F=0,N=0,le=0,b=0;h.sort(Tx);let C=f===!0?Math.PI:1;for(let ae=0,Re=h.length;ae<Re;ae++){let k=h[ae],J=k.color,se=k.intensity,_e=k.distance,ue=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)p+=J.r*se*C,x+=J.g*se*C,y+=J.b*se*C;else if(k.isLightProbe){for(let re=0;re<9;re++)s.probe[re].addScaledVector(k.sh.coefficients[re],se);b++}else if(k.isDirectionalLight){let re=t.get(k);if(re.color.copy(k.color).multiplyScalar(k.intensity*C),k.castShadow){let Me=k.shadow,Ce=n.get(k);Ce.shadowBias=Me.bias,Ce.shadowNormalBias=Me.normalBias,Ce.shadowRadius=Me.radius,Ce.shadowMapSize=Me.mapSize,s.directionalShadow[v]=Ce,s.directionalShadowMap[v]=ue,s.directionalShadowMatrix[v]=k.shadow.matrix,H++}s.directional[v]=re,v++}else if(k.isSpotLight){let re=t.get(k);re.position.setFromMatrixPosition(k.matrixWorld),re.color.copy(J).multiplyScalar(se*C),re.distance=_e,re.coneCos=Math.cos(k.angle),re.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),re.decay=k.decay,s.spot[d]=re;let Me=k.shadow;if(k.map&&(s.spotLightMap[N]=k.map,N++,Me.updateMatrices(k),k.castShadow&&le++),s.spotLightMatrix[d]=Me.matrix,k.castShadow){let Ce=n.get(k);Ce.shadowBias=Me.bias,Ce.shadowNormalBias=Me.normalBias,Ce.shadowRadius=Me.radius,Ce.shadowMapSize=Me.mapSize,s.spotShadow[d]=Ce,s.spotShadowMap[d]=ue,F++}d++}else if(k.isRectAreaLight){let re=t.get(k);re.color.copy(J).multiplyScalar(se),re.halfWidth.set(k.width*.5,0,0),re.halfHeight.set(0,k.height*.5,0),s.rectArea[L]=re,L++}else if(k.isPointLight){let re=t.get(k);if(re.color.copy(k.color).multiplyScalar(k.intensity*C),re.distance=k.distance,re.decay=k.decay,k.castShadow){let Me=k.shadow,Ce=n.get(k);Ce.shadowBias=Me.bias,Ce.shadowNormalBias=Me.normalBias,Ce.shadowRadius=Me.radius,Ce.shadowMapSize=Me.mapSize,Ce.shadowCameraNear=Me.camera.near,Ce.shadowCameraFar=Me.camera.far,s.pointShadow[g]=Ce,s.pointShadowMap[g]=ue,s.pointShadowMatrix[g]=k.shadow.matrix,P++}s.point[g]=re,g++}else if(k.isHemisphereLight){let re=t.get(k);re.skyColor.copy(k.color).multiplyScalar(se*C),re.groundColor.copy(k.groundColor).multiplyScalar(se*C),s.hemi[M]=re,M++}}L>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=x,s.ambient[2]=y;let O=s.hash;(O.directionalLength!==v||O.pointLength!==g||O.spotLength!==d||O.rectAreaLength!==L||O.hemiLength!==M||O.numDirectionalShadows!==H||O.numPointShadows!==P||O.numSpotShadows!==F||O.numSpotMaps!==N||O.numLightProbes!==b)&&(s.directional.length=v,s.spot.length=d,s.rectArea.length=L,s.point.length=g,s.hemi.length=M,s.directionalShadow.length=H,s.directionalShadowMap.length=H,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=F,s.spotShadowMap.length=F,s.directionalShadowMatrix.length=H,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=F+N-le,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=le,s.numLightProbes=b,O.directionalLength=v,O.pointLength=g,O.spotLength=d,O.rectAreaLength=L,O.hemiLength=M,O.numDirectionalShadows=H,O.numPointShadows=P,O.numSpotShadows=F,O.numSpotMaps=N,O.numLightProbes=b,s.version=wx++)}function c(h,f){let p=0,x=0,y=0,v=0,g=0,d=f.matrixWorldInverse;for(let L=0,M=h.length;L<M;L++){let H=h[L];if(H.isDirectionalLight){let P=s.directional[p];P.direction.setFromMatrixPosition(H.matrixWorld),r.setFromMatrixPosition(H.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),p++}else if(H.isSpotLight){let P=s.spot[y];P.position.setFromMatrixPosition(H.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(H.matrixWorld),r.setFromMatrixPosition(H.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),y++}else if(H.isRectAreaLight){let P=s.rectArea[v];P.position.setFromMatrixPosition(H.matrixWorld),P.position.applyMatrix4(d),a.identity(),o.copy(H.matrixWorld),o.premultiply(d),a.extractRotation(o),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),v++}else if(H.isPointLight){let P=s.point[x];P.position.setFromMatrixPosition(H.matrixWorld),P.position.applyMatrix4(d),x++}else if(H.isHemisphereLight){let P=s.hemi[g];P.direction.setFromMatrixPosition(H.matrixWorld),P.direction.transformDirection(d),g++}}}return{setup:l,setupView:c,state:s}}function Zu(i,e){let t=new Ax(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(f){n.push(f)}function a(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Rx(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Zu(i,e),t.set(r,[l])):o>=a.length?(l=new Zu(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Yc=class extends sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zc=class extends sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Cx=`void main() {
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
}`;function Lx(i,e,t){let n=new ho,s=new Je,r=new Je,o=new en,a=new Yc({depthPacking:bd}),l=new Zc,c={},h=t.maxTextureSize,f={[ir]:qn,[qn]:ir,[Xn]:Xn},p=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Cx,fragmentShader:Px}),x=p.clone();x.defines.HORIZONTAL_PASS=1;let y=new Ei;y.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new vt(y,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rf;let d=this.type;this.render=function(F,N,le){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||F.length===0)return;let b=i.getRenderTarget(),C=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),ae=i.state;ae.setBlending(rs),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);let Re=d!==Rs&&this.type===Rs,k=d===Rs&&this.type!==Rs;for(let J=0,se=F.length;J<se;J++){let _e=F[J],ue=_e.shadow;if(ue===void 0){console.warn("THREE.WebGLShadowMap:",_e,"has no shadow.");continue}if(ue.autoUpdate===!1&&ue.needsUpdate===!1)continue;s.copy(ue.mapSize);let re=ue.getFrameExtents();if(s.multiply(re),r.copy(ue.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,ue.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,ue.mapSize.y=r.y)),ue.map===null||Re===!0||k===!0){let Ce=this.type!==Rs?{minFilter:Rn,magFilter:Rn}:{};ue.map!==null&&ue.map.dispose(),ue.map=new ni(s.x,s.y,Ce),ue.map.texture.name=_e.name+".shadowMap",ue.camera.updateProjectionMatrix()}i.setRenderTarget(ue.map),i.clear();let Me=ue.getViewportCount();for(let Ce=0;Ce<Me;Ce++){let I=ue.getViewport(Ce);o.set(r.x*I.x,r.y*I.y,r.x*I.z,r.y*I.w),ae.viewport(o),ue.updateMatrices(_e,Ce),n=ue.getFrustum(),H(N,le,ue.camera,_e,this.type)}ue.isPointLightShadow!==!0&&this.type===Rs&&L(ue,le),ue.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(b,C,O)};function L(F,N){let le=e.update(v);p.defines.VSM_SAMPLES!==F.blurSamples&&(p.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,p.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ni(s.x,s.y)),p.uniforms.shadow_pass.value=F.map.texture,p.uniforms.resolution.value=F.mapSize,p.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(N,null,le,p,v,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(N,null,le,x,v,null)}function M(F,N,le,b){let C=null,O=le.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(O!==void 0)C=O;else if(C=le.isPointLight===!0?l:a,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let ae=C.uuid,Re=N.uuid,k=c[ae];k===void 0&&(k={},c[ae]=k);let J=k[Re];J===void 0&&(J=C.clone(),k[Re]=J,N.addEventListener("dispose",P)),C=J}if(C.visible=N.visible,C.wireframe=N.wireframe,b===Rs?C.side=N.shadowSide!==null?N.shadowSide:N.side:C.side=N.shadowSide!==null?N.shadowSide:f[N.side],C.alphaMap=N.alphaMap,C.alphaTest=N.alphaTest,C.map=N.map,C.clipShadows=N.clipShadows,C.clippingPlanes=N.clippingPlanes,C.clipIntersection=N.clipIntersection,C.displacementMap=N.displacementMap,C.displacementScale=N.displacementScale,C.displacementBias=N.displacementBias,C.wireframeLinewidth=N.wireframeLinewidth,C.linewidth=N.linewidth,le.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let ae=i.properties.get(C);ae.light=le}return C}function H(F,N,le,b,C){if(F.visible===!1)return;if(F.layers.test(N.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===Rs)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,F.matrixWorld);let Re=e.update(F),k=F.material;if(Array.isArray(k)){let J=Re.groups;for(let se=0,_e=J.length;se<_e;se++){let ue=J[se],re=k[ue.materialIndex];if(re&&re.visible){let Me=M(F,re,b,C);F.onBeforeShadow(i,F,N,le,Re,Me,ue),i.renderBufferDirect(le,null,Re,Me,F,ue),F.onAfterShadow(i,F,N,le,Re,Me,ue)}}}else if(k.visible){let J=M(F,k,b,C);F.onBeforeShadow(i,F,N,le,Re,J,null),i.renderBufferDirect(le,null,Re,J,F,null),F.onAfterShadow(i,F,N,le,Re,J,null)}}let ae=F.children;for(let Re=0,k=ae.length;Re<k;Re++)H(ae[Re],N,le,b,C)}function P(F){F.target.removeEventListener("dispose",P);for(let le in c){let b=c[le],C=F.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function Ix(i,e,t){let n=t.isWebGL2;function s(){let G=!1,Ie=new en,he=null,qe=new en(0,0,0,0);return{setMask:function(Ke){he!==Ke&&!G&&(i.colorMask(Ke,Ke,Ke,Ke),he=Ke)},setLocked:function(Ke){G=Ke},setClear:function(Ke,Et,ft,kt,on){on===!0&&(Ke*=kt,Et*=kt,ft*=kt),Ie.set(Ke,Et,ft,kt),qe.equals(Ie)===!1&&(i.clearColor(Ke,Et,ft,kt),qe.copy(Ie))},reset:function(){G=!1,he=null,qe.set(-1,0,0,0)}}}function r(){let G=!1,Ie=null,he=null,qe=null;return{setTest:function(Ke){Ke?je(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(Ke){Ie!==Ke&&!G&&(i.depthMask(Ke),Ie=Ke)},setFunc:function(Ke){if(he!==Ke){switch(Ke){case sd:i.depthFunc(i.NEVER);break;case rd:i.depthFunc(i.ALWAYS);break;case ad:i.depthFunc(i.LESS);break;case nl:i.depthFunc(i.LEQUAL);break;case od:i.depthFunc(i.EQUAL);break;case ld:i.depthFunc(i.GEQUAL);break;case cd:i.depthFunc(i.GREATER);break;case hd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=Ke}},setLocked:function(Ke){G=Ke},setClear:function(Ke){qe!==Ke&&(i.clearDepth(Ke),qe=Ke)},reset:function(){G=!1,Ie=null,he=null,qe=null}}}function o(){let G=!1,Ie=null,he=null,qe=null,Ke=null,Et=null,ft=null,kt=null,on=null;return{setTest:function(K){G||(K?je(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(K){Ie!==K&&!G&&(i.stencilMask(K),Ie=K)},setFunc:function(K,de,pe){(he!==K||qe!==de||Ke!==pe)&&(i.stencilFunc(K,de,pe),he=K,qe=de,Ke=pe)},setOp:function(K,de,pe){(Et!==K||ft!==de||kt!==pe)&&(i.stencilOp(K,de,pe),Et=K,ft=de,kt=pe)},setLocked:function(K){G=K},setClear:function(K){on!==K&&(i.clearStencil(K),on=K)},reset:function(){G=!1,Ie=null,he=null,qe=null,Ke=null,Et=null,ft=null,kt=null,on=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,f=new WeakMap,p={},x={},y=new WeakMap,v=[],g=null,d=!1,L=null,M=null,H=null,P=null,F=null,N=null,le=null,b=new De(0,0,0),C=0,O=!1,ae=null,Re=null,k=null,J=null,se=null,_e=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ue=!1,re=0,Me=i.getParameter(i.VERSION);Me.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Me)[1]),ue=re>=1):Me.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Me)[1]),ue=re>=2);let Ce=null,I={},W=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),Le=new en().fromArray(W),ge=new en().fromArray(oe);function He(G,Ie,he,qe){let Ke=new Uint8Array(4),Et=i.createTexture();i.bindTexture(G,Et),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<he;ft++)n&&(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ie,0,i.RGBA,1,1,qe,0,i.RGBA,i.UNSIGNED_BYTE,Ke):i.texImage2D(Ie+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ke);return Et}let ht={};ht[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ht[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),je(i.DEPTH_TEST),l.setFunc(nl),_t(!1),A(Ch),je(i.CULL_FACE),Fe(rs);function je(G){p[G]!==!0&&(i.enable(G),p[G]=!0)}function lt(G){p[G]!==!1&&(i.disable(G),p[G]=!1)}function yt(G,Ie){return x[G]!==Ie?(i.bindFramebuffer(G,Ie),x[G]=Ie,n&&(G===i.DRAW_FRAMEBUFFER&&(x[i.FRAMEBUFFER]=Ie),G===i.FRAMEBUFFER&&(x[i.DRAW_FRAMEBUFFER]=Ie)),!0):!1}function $(G,Ie){let he=v,qe=!1;if(G)if(he=y.get(Ie),he===void 0&&(he=[],y.set(Ie,he)),G.isWebGLMultipleRenderTargets){let Ke=G.texture;if(he.length!==Ke.length||he[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,ft=Ke.length;Et<ft;Et++)he[Et]=i.COLOR_ATTACHMENT0+Et;he.length=Ke.length,qe=!0}}else he[0]!==i.COLOR_ATTACHMENT0&&(he[0]=i.COLOR_ATTACHMENT0,qe=!0);else he[0]!==i.BACK&&(he[0]=i.BACK,qe=!0);qe&&(t.isWebGL2?i.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Vt(G){return g!==G?(i.useProgram(G),g=G,!0):!1}let nt={[Cr]:i.FUNC_ADD,[Gf]:i.FUNC_SUBTRACT,[Wf]:i.FUNC_REVERSE_SUBTRACT};if(n)nt[Ih]=i.MIN,nt[Uh]=i.MAX;else{let G=e.get("EXT_blend_minmax");G!==null&&(nt[Ih]=G.MIN_EXT,nt[Uh]=G.MAX_EXT)}let ot={[Xf]:i.ZERO,[qf]:i.ONE,[Yf]:i.SRC_COLOR,[Rc]:i.SRC_ALPHA,[Qf]:i.SRC_ALPHA_SATURATE,[$f]:i.DST_COLOR,[Jf]:i.DST_ALPHA,[Zf]:i.ONE_MINUS_SRC_COLOR,[Cc]:i.ONE_MINUS_SRC_ALPHA,[jf]:i.ONE_MINUS_DST_COLOR,[Kf]:i.ONE_MINUS_DST_ALPHA,[ed]:i.CONSTANT_COLOR,[td]:i.ONE_MINUS_CONSTANT_COLOR,[nd]:i.CONSTANT_ALPHA,[id]:i.ONE_MINUS_CONSTANT_ALPHA};function Fe(G,Ie,he,qe,Ke,Et,ft,kt,on,K){if(G===rs){d===!0&&(lt(i.BLEND),d=!1);return}if(d===!1&&(je(i.BLEND),d=!0),G!==Vf){if(G!==L||K!==O){if((M!==Cr||F!==Cr)&&(i.blendEquation(i.FUNC_ADD),M=Cr,F=Cr),K)switch(G){case ba:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yi:i.blendFunc(i.ONE,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ba:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}H=null,P=null,N=null,le=null,b.set(0,0,0),C=0,L=G,O=K}return}Ke=Ke||Ie,Et=Et||he,ft=ft||qe,(Ie!==M||Ke!==F)&&(i.blendEquationSeparate(nt[Ie],nt[Ke]),M=Ie,F=Ke),(he!==H||qe!==P||Et!==N||ft!==le)&&(i.blendFuncSeparate(ot[he],ot[qe],ot[Et],ot[ft]),H=he,P=qe,N=Et,le=ft),(kt.equals(b)===!1||on!==C)&&(i.blendColor(kt.r,kt.g,kt.b,on),b.copy(kt),C=on),L=G,O=!1}function Ht(G,Ie){G.side===Xn?lt(i.CULL_FACE):je(i.CULL_FACE);let he=G.side===qn;Ie&&(he=!he),_t(he),G.blending===ba&&G.transparent===!1?Fe(rs):Fe(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),a.setMask(G.colorWrite);let qe=G.stencilWrite;c.setTest(qe),qe&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ee(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?je(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(G){ae!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),ae=G)}function A(G){G!==Bf?(je(i.CULL_FACE),G!==Re&&(G===Ch?i.cullFace(i.BACK):G===Hf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),Re=G}function E(G){G!==k&&(ue&&i.lineWidth(G),k=G)}function ee(G,Ie,he){G?(je(i.POLYGON_OFFSET_FILL),(J!==Ie||se!==he)&&(i.polygonOffset(Ie,he),J=Ie,se=he)):lt(i.POLYGON_OFFSET_FILL)}function Te(G){G?je(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function Ee(G){G===void 0&&(G=i.TEXTURE0+_e-1),Ce!==G&&(i.activeTexture(G),Ce=G)}function be(G,Ie,he){he===void 0&&(Ce===null?he=i.TEXTURE0+_e-1:he=Ce);let qe=I[he];qe===void 0&&(qe={type:void 0,texture:void 0},I[he]=qe),(qe.type!==G||qe.texture!==Ie)&&(Ce!==he&&(i.activeTexture(he),Ce=he),i.bindTexture(G,Ie||ht[G]),qe.type=G,qe.texture=Ie)}function Ge(){let G=I[Ce];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ue(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function st(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function D(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(G){Le.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Le.copy(G))}function Mt(G){ge.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),ge.copy(G))}function dt(G,Ie){let he=f.get(Ie);he===void 0&&(he=new WeakMap,f.set(Ie,he));let qe=he.get(G);qe===void 0&&(qe=i.getUniformBlockIndex(Ie,G.name),he.set(G,qe))}function pt(G,Ie){let qe=f.get(Ie).get(G);h.get(Ie)!==qe&&(i.uniformBlockBinding(Ie,qe,G.__bindingPointIndex),h.set(Ie,qe))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},Ce=null,I={},x={},y=new WeakMap,v=[],g=null,d=!1,L=null,M=null,H=null,P=null,F=null,N=null,le=null,b=new De(0,0,0),C=0,O=!1,ae=null,Re=null,k=null,J=null,se=null,Le.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:je,disable:lt,bindFramebuffer:yt,drawBuffers:$,useProgram:Vt,setBlending:Fe,setMaterial:Ht,setFlipSided:_t,setCullFace:A,setLineWidth:E,setPolygonOffset:ee,setScissorTest:Te,activeTexture:Ee,bindTexture:be,unbindTexture:Ge,compressedTexImage2D:Ue,compressedTexImage3D:Ne,texImage2D:Ae,texImage3D:we,updateUBOMapping:dt,uniformBlockBinding:pt,texStorage2D:D,texStorage3D:Se,texSubImage2D:ke,texSubImage3D:st,compressedTexSubImage2D:me,compressedTexSubImage3D:Pt,scissor:Ve,viewport:Mt,reset:fe}}function Ux(i,e,t,n,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,p=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,E){return x?new OffscreenCanvas(A,E):hl("canvas")}function v(A,E,ee,Te){let Ee=1;if((A.width>Te||A.height>Te)&&(Ee=Te/Math.max(A.width,A.height)),Ee<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let be=E?cl:Math.floor,Ge=be(Ee*A.width),Ue=be(Ee*A.height);f===void 0&&(f=y(Ge,Ue));let Ne=ee?y(Ge,Ue):f;return Ne.width=Ge,Ne.height=Ue,Ne.getContext("2d").drawImage(A,0,0,Ge,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ge+"x"+Ue+")."),Ne}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function g(A){return Oc(A.width)&&Oc(A.height)}function d(A){return a?!1:A.wrapS!==Vi||A.wrapT!==Vi||A.minFilter!==Rn&&A.minFilter!==ci}function L(A,E){return A.generateMipmaps&&E&&A.minFilter!==Rn&&A.minFilter!==ci}function M(A){i.generateMipmap(A)}function H(A,E,ee,Te,Ee=!1){if(a===!1)return E;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let be=E;if(E===i.RED&&(ee===i.FLOAT&&(be=i.R32F),ee===i.HALF_FLOAT&&(be=i.R16F),ee===i.UNSIGNED_BYTE&&(be=i.R8)),E===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(be=i.R8UI),ee===i.UNSIGNED_SHORT&&(be=i.R16UI),ee===i.UNSIGNED_INT&&(be=i.R32UI),ee===i.BYTE&&(be=i.R8I),ee===i.SHORT&&(be=i.R16I),ee===i.INT&&(be=i.R32I)),E===i.RG&&(ee===i.FLOAT&&(be=i.RG32F),ee===i.HALF_FLOAT&&(be=i.RG16F),ee===i.UNSIGNED_BYTE&&(be=i.RG8)),E===i.RGBA){let Ge=Ee?rl:jt.getTransfer(Te);ee===i.FLOAT&&(be=i.RGBA32F),ee===i.HALF_FLOAT&&(be=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(be=Ge===rn?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(be=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(be=i.RGB5_A1)}return(be===i.R16F||be===i.R32F||be===i.RG16F||be===i.RG32F||be===i.RGBA16F||be===i.RGBA32F)&&e.get("EXT_color_buffer_float"),be}function P(A,E,ee){return L(A,ee)===!0||A.isFramebufferTexture&&A.minFilter!==Rn&&A.minFilter!==ci?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function F(A){return A===Rn||A===Dh||A===Yl?i.NEAREST:i.LINEAR}function N(A){let E=A.target;E.removeEventListener("dispose",N),b(E),E.isVideoTexture&&h.delete(E)}function le(A){let E=A.target;E.removeEventListener("dispose",le),O(E)}function b(A){let E=n.get(A);if(E.__webglInit===void 0)return;let ee=A.source,Te=p.get(ee);if(Te){let Ee=Te[E.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&C(A),Object.keys(Te).length===0&&p.delete(ee)}n.remove(A)}function C(A){let E=n.get(A);i.deleteTexture(E.__webglTexture);let ee=A.source,Te=p.get(ee);delete Te[E.__cacheKey],o.memory.textures--}function O(A){let E=A.texture,ee=n.get(A),Te=n.get(E);if(Te.__webglTexture!==void 0&&(i.deleteTexture(Te.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++){if(Array.isArray(ee.__webglFramebuffer[Ee]))for(let be=0;be<ee.__webglFramebuffer[Ee].length;be++)i.deleteFramebuffer(ee.__webglFramebuffer[Ee][be]);else i.deleteFramebuffer(ee.__webglFramebuffer[Ee]);ee.__webglDepthbuffer&&i.deleteRenderbuffer(ee.__webglDepthbuffer[Ee])}else{if(Array.isArray(ee.__webglFramebuffer))for(let Ee=0;Ee<ee.__webglFramebuffer.length;Ee++)i.deleteFramebuffer(ee.__webglFramebuffer[Ee]);else i.deleteFramebuffer(ee.__webglFramebuffer);if(ee.__webglDepthbuffer&&i.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&i.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let Ee=0;Ee<ee.__webglColorRenderbuffer.length;Ee++)ee.__webglColorRenderbuffer[Ee]&&i.deleteRenderbuffer(ee.__webglColorRenderbuffer[Ee]);ee.__webglDepthRenderbuffer&&i.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Ee=0,be=E.length;Ee<be;Ee++){let Ge=n.get(E[Ee]);Ge.__webglTexture&&(i.deleteTexture(Ge.__webglTexture),o.memory.textures--),n.remove(E[Ee])}n.remove(E),n.remove(A)}let ae=0;function Re(){ae=0}function k(){let A=ae;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),ae+=1,A}function J(A){let E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function se(A,E){let ee=n.get(A);if(A.isVideoTexture&&Ht(A),A.isRenderTargetTexture===!1&&A.version>0&&ee.__version!==A.version){let Te=A.image;if(Te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(ee,A,E);return}}t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+E)}function _e(A,E){let ee=n.get(A);if(A.version>0&&ee.__version!==A.version){Le(ee,A,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+E)}function ue(A,E){let ee=n.get(A);if(A.version>0&&ee.__version!==A.version){Le(ee,A,E);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+E)}function re(A,E){let ee=n.get(A);if(A.version>0&&ee.__version!==A.version){ge(ee,A,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+E)}let Me={[Ic]:i.REPEAT,[Vi]:i.CLAMP_TO_EDGE,[Uc]:i.MIRRORED_REPEAT},Ce={[Rn]:i.NEAREST,[Dh]:i.NEAREST_MIPMAP_NEAREST,[Yl]:i.NEAREST_MIPMAP_LINEAR,[ci]:i.LINEAR,[pd]:i.LINEAR_MIPMAP_NEAREST,[oo]:i.LINEAR_MIPMAP_LINEAR},I={[Td]:i.NEVER,[Id]:i.ALWAYS,[Ad]:i.LESS,[gf]:i.LEQUAL,[Rd]:i.EQUAL,[Ld]:i.GEQUAL,[Cd]:i.GREATER,[Pd]:i.NOTEQUAL};function W(A,E,ee){if(ee?(i.texParameteri(A,i.TEXTURE_WRAP_S,Me[E.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Me[E.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Me[E.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ce[E.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ce[E.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Vi||E.wrapT!==Vi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,F(E.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,F(E.minFilter)),E.minFilter!==Rn&&E.minFilter!==ci&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Te=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Rn||E.minFilter!==Yl&&E.minFilter!==oo||E.type===er&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Gi&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(A,Te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function oe(A,E){let ee=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",N));let Te=E.source,Ee=p.get(Te);Ee===void 0&&(Ee={},p.set(Te,Ee));let be=J(E);if(be!==A.__cacheKey){Ee[be]===void 0&&(Ee[be]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,ee=!0),Ee[be].usedTimes++;let Ge=Ee[A.__cacheKey];Ge!==void 0&&(Ee[A.__cacheKey].usedTimes--,Ge.usedTimes===0&&C(E)),A.__cacheKey=be,A.__webglTexture=Ee[be].texture}return ee}function Le(A,E,ee){let Te=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Te=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Te=i.TEXTURE_3D);let Ee=oe(A,E),be=E.source;t.bindTexture(Te,A.__webglTexture,i.TEXTURE0+ee);let Ge=n.get(be);if(be.version!==Ge.__version||Ee===!0){t.activeTexture(i.TEXTURE0+ee);let Ue=jt.getPrimaries(jt.workingColorSpace),Ne=E.colorSpace===Ii?null:jt.getPrimaries(E.colorSpace),ke=E.colorSpace===Ii||Ue===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let st=d(E)&&g(E.image)===!1,me=v(E.image,st,!1,s.maxTextureSize);me=_t(E,me);let Pt=g(me)||a,D=r.convert(E.format,E.colorSpace),Se=r.convert(E.type),Ae=H(E.internalFormat,D,Se,E.colorSpace,E.isVideoTexture);W(Te,E,Pt);let we,Ve=E.mipmaps,Mt=a&&E.isVideoTexture!==!0&&Ae!==df,dt=Ge.__version===void 0||Ee===!0,pt=P(E,me,Pt);if(E.isDepthTexture)Ae=i.DEPTH_COMPONENT,a?E.type===er?Ae=i.DEPTH_COMPONENT32F:E.type===Qs?Ae=i.DEPTH_COMPONENT24:E.type===Ir?Ae=i.DEPTH24_STENCIL8:Ae=i.DEPTH_COMPONENT16:E.type===er&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ur&&Ae===i.DEPTH_COMPONENT&&E.type!==_h&&E.type!==Qs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Qs,Se=r.convert(E.type)),E.format===Ca&&Ae===i.DEPTH_COMPONENT&&(Ae=i.DEPTH_STENCIL,E.type!==Ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ir,Se=r.convert(E.type))),dt&&(Mt?t.texStorage2D(i.TEXTURE_2D,1,Ae,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Ae,me.width,me.height,0,D,Se,null));else if(E.isDataTexture)if(Ve.length>0&&Pt){Mt&&dt&&t.texStorage2D(i.TEXTURE_2D,pt,Ae,Ve[0].width,Ve[0].height);for(let fe=0,G=Ve.length;fe<G;fe++)we=Ve[fe],Mt?t.texSubImage2D(i.TEXTURE_2D,fe,0,0,we.width,we.height,D,Se,we.data):t.texImage2D(i.TEXTURE_2D,fe,Ae,we.width,we.height,0,D,Se,we.data);E.generateMipmaps=!1}else Mt?(dt&&t.texStorage2D(i.TEXTURE_2D,pt,Ae,me.width,me.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,D,Se,me.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,me.width,me.height,0,D,Se,me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Mt&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Ae,Ve[0].width,Ve[0].height,me.depth);for(let fe=0,G=Ve.length;fe<G;fe++)we=Ve[fe],E.format!==vi?D!==null?Mt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,we.width,we.height,me.depth,D,we.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,Ae,we.width,we.height,me.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,we.width,we.height,me.depth,D,Se,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,Ae,we.width,we.height,me.depth,0,D,Se,we.data)}else{Mt&&dt&&t.texStorage2D(i.TEXTURE_2D,pt,Ae,Ve[0].width,Ve[0].height);for(let fe=0,G=Ve.length;fe<G;fe++)we=Ve[fe],E.format!==vi?D!==null?Mt?t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,we.width,we.height,D,we.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,Ae,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?t.texSubImage2D(i.TEXTURE_2D,fe,0,0,we.width,we.height,D,Se,we.data):t.texImage2D(i.TEXTURE_2D,fe,Ae,we.width,we.height,0,D,Se,we.data)}else if(E.isDataArrayTexture)Mt?(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Ae,me.width,me.height,me.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,D,Se,me.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,me.width,me.height,me.depth,0,D,Se,me.data);else if(E.isData3DTexture)Mt?(dt&&t.texStorage3D(i.TEXTURE_3D,pt,Ae,me.width,me.height,me.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,D,Se,me.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,me.width,me.height,me.depth,0,D,Se,me.data);else if(E.isFramebufferTexture){if(dt)if(Mt)t.texStorage2D(i.TEXTURE_2D,pt,Ae,me.width,me.height);else{let fe=me.width,G=me.height;for(let Ie=0;Ie<pt;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Ae,fe,G,0,D,Se,null),fe>>=1,G>>=1}}else if(Ve.length>0&&Pt){Mt&&dt&&t.texStorage2D(i.TEXTURE_2D,pt,Ae,Ve[0].width,Ve[0].height);for(let fe=0,G=Ve.length;fe<G;fe++)we=Ve[fe],Mt?t.texSubImage2D(i.TEXTURE_2D,fe,0,0,D,Se,we):t.texImage2D(i.TEXTURE_2D,fe,Ae,D,Se,we);E.generateMipmaps=!1}else Mt?(dt&&t.texStorage2D(i.TEXTURE_2D,pt,Ae,me.width,me.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,D,Se,me)):t.texImage2D(i.TEXTURE_2D,0,Ae,D,Se,me);L(E,Pt)&&M(Te),Ge.__version=be.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ge(A,E,ee){if(E.image.length!==6)return;let Te=oe(A,E),Ee=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+ee);let be=n.get(Ee);if(Ee.version!==be.__version||Te===!0){t.activeTexture(i.TEXTURE0+ee);let Ge=jt.getPrimaries(jt.workingColorSpace),Ue=E.colorSpace===Ii?null:jt.getPrimaries(E.colorSpace),Ne=E.colorSpace===Ii||Ge===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ke=E.isCompressedTexture||E.image[0].isCompressedTexture,st=E.image[0]&&E.image[0].isDataTexture,me=[];for(let fe=0;fe<6;fe++)!ke&&!st?me[fe]=v(E.image[fe],!1,!0,s.maxCubemapSize):me[fe]=st?E.image[fe].image:E.image[fe],me[fe]=_t(E,me[fe]);let Pt=me[0],D=g(Pt)||a,Se=r.convert(E.format,E.colorSpace),Ae=r.convert(E.type),we=H(E.internalFormat,Se,Ae,E.colorSpace),Ve=a&&E.isVideoTexture!==!0,Mt=be.__version===void 0||Te===!0,dt=P(E,Pt,D);W(i.TEXTURE_CUBE_MAP,E,D);let pt;if(ke){Ve&&Mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,dt,we,Pt.width,Pt.height);for(let fe=0;fe<6;fe++){pt=me[fe].mipmaps;for(let G=0;G<pt.length;G++){let Ie=pt[G];E.format!==vi?Se!==null?Ve?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G,0,0,Ie.width,Ie.height,Se,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G,we,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G,0,0,Ie.width,Ie.height,Se,Ae,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G,we,Ie.width,Ie.height,0,Se,Ae,Ie.data)}}}else{pt=E.mipmaps,Ve&&Mt&&(pt.length>0&&dt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,dt,we,me[0].width,me[0].height));for(let fe=0;fe<6;fe++)if(st){Ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,me[fe].width,me[fe].height,Se,Ae,me[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,we,me[fe].width,me[fe].height,0,Se,Ae,me[fe].data);for(let G=0;G<pt.length;G++){let he=pt[G].image[fe].image;Ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G+1,0,0,he.width,he.height,Se,Ae,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G+1,we,he.width,he.height,0,Se,Ae,he.data)}}else{Ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Se,Ae,me[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,we,Se,Ae,me[fe]);for(let G=0;G<pt.length;G++){let Ie=pt[G];Ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G+1,0,0,Se,Ae,Ie.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G+1,we,Se,Ae,Ie.image[fe])}}}L(E,D)&&M(i.TEXTURE_CUBE_MAP),be.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function He(A,E,ee,Te,Ee,be){let Ge=r.convert(ee.format,ee.colorSpace),Ue=r.convert(ee.type),Ne=H(ee.internalFormat,Ge,Ue,ee.colorSpace);if(!n.get(E).__hasExternalTextures){let st=Math.max(1,E.width>>be),me=Math.max(1,E.height>>be);Ee===i.TEXTURE_3D||Ee===i.TEXTURE_2D_ARRAY?t.texImage3D(Ee,be,Ne,st,me,E.depth,0,Ge,Ue,null):t.texImage2D(Ee,be,Ne,st,me,0,Ge,Ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Fe(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,Ee,n.get(ee).__webglTexture,0,ot(E)):(Ee===i.TEXTURE_2D||Ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Te,Ee,n.get(ee).__webglTexture,be),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(A,E,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let Te=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(ee||Fe(E)){let Ee=E.depthTexture;Ee&&Ee.isDepthTexture&&(Ee.type===er?Te=i.DEPTH_COMPONENT32F:Ee.type===Qs&&(Te=i.DEPTH_COMPONENT24));let be=ot(E);Fe(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,Te,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,be,Te,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,Te,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){let Te=ot(E);ee&&Fe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,i.DEPTH24_STENCIL8,E.width,E.height):Fe(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let Te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Ee=0;Ee<Te.length;Ee++){let be=Te[Ee],Ge=r.convert(be.format,be.colorSpace),Ue=r.convert(be.type),Ne=H(be.internalFormat,Ge,Ue,be.colorSpace),ke=ot(E);ee&&Fe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Ne,E.width,E.height):Fe(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke,Ne,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function je(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),se(E.depthTexture,0);let Te=n.get(E.depthTexture).__webglTexture,Ee=ot(E);if(E.depthTexture.format===Ur)Fe(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Te,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Te,0);else if(E.depthTexture.format===Ca)Fe(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Te,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function lt(A){let E=n.get(A),ee=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");je(E.__webglFramebuffer,A)}else if(ee){E.__webglDepthbuffer=[];for(let Te=0;Te<6;Te++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Te]),E.__webglDepthbuffer[Te]=i.createRenderbuffer(),ht(E.__webglDepthbuffer[Te],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),ht(E.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(A,E,ee){let Te=n.get(A);E!==void 0&&He(Te.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&lt(A)}function $(A){let E=A.texture,ee=n.get(A),Te=n.get(E);A.addEventListener("dispose",le),A.isWebGLMultipleRenderTargets!==!0&&(Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture()),Te.__version=E.version,o.memory.textures++);let Ee=A.isWebGLCubeRenderTarget===!0,be=A.isWebGLMultipleRenderTargets===!0,Ge=g(A)||a;if(Ee){ee.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(a&&E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer[Ue]=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)ee.__webglFramebuffer[Ue][Ne]=i.createFramebuffer()}else ee.__webglFramebuffer[Ue]=i.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)ee.__webglFramebuffer[Ue]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(be)if(s.drawBuffers){let Ue=A.texture;for(let Ne=0,ke=Ue.length;Ne<ke;Ne++){let st=n.get(Ue[Ne]);st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Fe(A)===!1){let Ue=be?E:[E];ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Ue.length;Ne++){let ke=Ue[Ne];ee.__webglColorRenderbuffer[Ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[Ne]);let st=r.convert(ke.format,ke.colorSpace),me=r.convert(ke.type),Pt=H(ke.internalFormat,st,me,ke.colorSpace,A.isXRRenderTarget===!0),D=ot(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,D,Pt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,ee.__webglColorRenderbuffer[Ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(ee.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(i.TEXTURE_CUBE_MAP,Te.__webglTexture),W(i.TEXTURE_CUBE_MAP,E,Ge);for(let Ue=0;Ue<6;Ue++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)He(ee.__webglFramebuffer[Ue][Ne],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ne);else He(ee.__webglFramebuffer[Ue],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);L(E,Ge)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){let Ue=A.texture;for(let Ne=0,ke=Ue.length;Ne<ke;Ne++){let st=Ue[Ne],me=n.get(st);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),W(i.TEXTURE_2D,st,Ge),He(ee.__webglFramebuffer,A,st,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,0),L(st,Ge)&&M(i.TEXTURE_2D)}t.unbindTexture()}else{let Ue=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?Ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ue,Te.__webglTexture),W(Ue,E,Ge),a&&E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)He(ee.__webglFramebuffer[Ne],A,E,i.COLOR_ATTACHMENT0,Ue,Ne);else He(ee.__webglFramebuffer,A,E,i.COLOR_ATTACHMENT0,Ue,0);L(E,Ge)&&M(Ue),t.unbindTexture()}A.depthBuffer&&lt(A)}function Vt(A){let E=g(A)||a,ee=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Te=0,Ee=ee.length;Te<Ee;Te++){let be=ee[Te];if(L(be,E)){let Ge=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ue=n.get(be).__webglTexture;t.bindTexture(Ge,Ue),M(Ge),t.unbindTexture()}}}function nt(A){if(a&&A.samples>0&&Fe(A)===!1){let E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],ee=A.width,Te=A.height,Ee=i.COLOR_BUFFER_BIT,be=[],Ge=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(A),Ne=A.isWebGLMultipleRenderTargets===!0;if(Ne)for(let ke=0;ke<E.length;ke++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let ke=0;ke<E.length;ke++){be.push(i.COLOR_ATTACHMENT0+ke),A.depthBuffer&&be.push(Ge);let st=Ue.__ignoreDepthValues!==void 0?Ue.__ignoreDepthValues:!1;if(st===!1&&(A.depthBuffer&&(Ee|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Ee|=i.STENCIL_BUFFER_BIT)),Ne&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[ke]),st===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ge]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ge])),Ne){let me=n.get(E[ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,me,0)}i.blitFramebuffer(0,0,ee,Te,0,0,ee,Te,Ee,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ne)for(let ke=0;ke<E.length;ke++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[ke]);let st=n.get(E[ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,st,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}}function ot(A){return Math.min(s.maxSamples,A.samples)}function Fe(A){let E=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ht(A){let E=o.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function _t(A,E){let ee=A.colorSpace,Te=A.format,Ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Nc||ee!==Ls&&ee!==Ii&&(jt.getTransfer(ee)===rn?a===!1?e.has("EXT_sRGB")===!0&&Te===vi?(A.format=Nc,A.minFilter=ci,A.generateMipmaps=!1):E=ul.sRGBToLinear(E):(Te!==vi||Ee!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),E}this.allocateTextureUnit=k,this.resetTextureUnits=Re,this.setTexture2D=se,this.setTexture2DArray=_e,this.setTexture3D=ue,this.setTextureCube=re,this.rebindTextures=yt,this.setupRenderTarget=$,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=He,this.useMultisampledRTT=Fe}function Dx(i,e,t){let n=t.isWebGL2;function s(r,o=Ii){let a,l=jt.getTransfer(o);if(r===nr)return i.UNSIGNED_BYTE;if(r===lf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===cf)return i.UNSIGNED_SHORT_5_5_5_1;if(r===md)return i.BYTE;if(r===gd)return i.SHORT;if(r===_h)return i.UNSIGNED_SHORT;if(r===of)return i.INT;if(r===Qs)return i.UNSIGNED_INT;if(r===er)return i.FLOAT;if(r===Gi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===xd)return i.ALPHA;if(r===vi)return i.RGBA;if(r===_d)return i.LUMINANCE;if(r===vd)return i.LUMINANCE_ALPHA;if(r===Ur)return i.DEPTH_COMPONENT;if(r===Ca)return i.DEPTH_STENCIL;if(r===Nc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===yd)return i.RED;if(r===hf)return i.RED_INTEGER;if(r===Md)return i.RG;if(r===uf)return i.RG_INTEGER;if(r===ff)return i.RGBA_INTEGER;if(r===Zl||r===Jl||r===Kl||r===$l)if(l===rn)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Zl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Kl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$l)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Zl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Kl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$l)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Nh||r===Oh||r===Fh||r===zh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Nh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Oh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===zh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===df)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Bh||r===Hh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Bh)return l===rn?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Hh)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===kh||r===Vh||r===Gh||r===Wh||r===Xh||r===qh||r===Yh||r===Zh||r===Jh||r===Kh||r===$h||r===jh||r===Qh||r===eu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===kh)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vh)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gh)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wh)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xh)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qh)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Yh)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zh)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jh)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kh)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$h)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jh)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qh)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===eu)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jl||r===tu||r===nu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===jl)return l===rn?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===tu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ed||r===iu||r===su||r===ru)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===jl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===iu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===su)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ru)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ir?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Jc=class extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},zn=class extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nx={type:"move"},ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),d=this._getHandJoint(c,v);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),x=.02,y=.005;c.inputState.pinching&&p>x+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=x-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Kc=class extends as{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,p=null,x=null,y=null,v=t.getContextAttributes(),g=null,d=null,L=[],M=[],H=new Je,P=null,F=new Wn;F.layers.enable(1),F.viewport=new en;let N=new Wn;N.layers.enable(2),N.viewport=new en;let le=[F,N],b=new Jc;b.layers.enable(1),b.layers.enable(2);let C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let oe=L[W];return oe===void 0&&(oe=new ao,L[W]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(W){let oe=L[W];return oe===void 0&&(oe=new ao,L[W]=oe),oe.getGripSpace()},this.getHand=function(W){let oe=L[W];return oe===void 0&&(oe=new ao,L[W]=oe),oe.getHandSpace()};function ae(W){let oe=M.indexOf(W.inputSource);if(oe===-1)return;let Le=L[oe];Le!==void 0&&(Le.update(W.inputSource,W.frame,c||o),Le.dispatchEvent({type:W.type,data:W.inputSource}))}function Re(){s.removeEventListener("select",ae),s.removeEventListener("selectstart",ae),s.removeEventListener("selectend",ae),s.removeEventListener("squeeze",ae),s.removeEventListener("squeezestart",ae),s.removeEventListener("squeezeend",ae),s.removeEventListener("end",Re),s.removeEventListener("inputsourceschange",k);for(let W=0;W<L.length;W++){let oe=M[W];oe!==null&&(M[W]=null,L[W].disconnect(oe))}C=null,O=null,e.setRenderTarget(g),x=null,p=null,f=null,s=null,d=null,I.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(H.width,H.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return p!==null?p:x},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",ae),s.addEventListener("selectstart",ae),s.addEventListener("selectend",ae),s.addEventListener("squeeze",ae),s.addEventListener("squeezestart",ae),s.addEventListener("squeezeend",ae),s.addEventListener("end",Re),s.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(H),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let oe={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),d=new ni(x.framebufferWidth,x.framebufferHeight,{format:vi,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let oe=null,Le=null,ge=null;v.depth&&(ge=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=v.stencil?Ca:Ur,Le=v.stencil?Ir:Qs);let He={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(He),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new ni(p.textureWidth,p.textureHeight,{format:vi,type:nr,depthTexture:new vl(p.textureWidth,p.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let ht=e.properties.get(d);ht.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),I.setContext(s),I.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function k(W){for(let oe=0;oe<W.removed.length;oe++){let Le=W.removed[oe],ge=M.indexOf(Le);ge>=0&&(M[ge]=null,L[ge].disconnect(Le))}for(let oe=0;oe<W.added.length;oe++){let Le=W.added[oe],ge=M.indexOf(Le);if(ge===-1){for(let ht=0;ht<L.length;ht++)if(ht>=M.length){M.push(Le),ge=ht;break}else if(M[ht]===null){M[ht]=Le,ge=ht;break}if(ge===-1)break}let He=L[ge];He&&He.connect(Le)}}let J=new U,se=new U;function _e(W,oe,Le){J.setFromMatrixPosition(oe.matrixWorld),se.setFromMatrixPosition(Le.matrixWorld);let ge=J.distanceTo(se),He=oe.projectionMatrix.elements,ht=Le.projectionMatrix.elements,je=He[14]/(He[10]-1),lt=He[14]/(He[10]+1),yt=(He[9]+1)/He[5],$=(He[9]-1)/He[5],Vt=(He[8]-1)/He[0],nt=(ht[8]+1)/ht[0],ot=je*Vt,Fe=je*nt,Ht=ge/(-Vt+nt),_t=Ht*-Vt;oe.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(_t),W.translateZ(Ht),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let A=je+Ht,E=lt+Ht,ee=ot-_t,Te=Fe+(ge-_t),Ee=yt*lt/E*A,be=$*lt/E*A;W.projectionMatrix.makePerspective(ee,Te,Ee,be,A,E),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ue(W,oe){oe===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(oe.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;b.near=N.near=F.near=W.near,b.far=N.far=F.far=W.far,(C!==b.near||O!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,O=b.far);let oe=W.parent,Le=b.cameras;ue(b,oe);for(let ge=0;ge<Le.length;ge++)ue(Le[ge],oe);Le.length===2?_e(b,F,N):b.projectionMatrix.copy(F.projectionMatrix),re(W,b,oe)};function re(W,oe,Le){Le===null?W.matrix.copy(oe.matrixWorld):(W.matrix.copy(Le.matrixWorld),W.matrix.invert(),W.matrix.multiply(oe.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(oe.projectionMatrix),W.projectionMatrixInverse.copy(oe.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=lo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&x===null))return l},this.setFoveation=function(W){l=W,p!==null&&(p.fixedFoveation=W),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=W)};let Me=null;function Ce(W,oe){if(h=oe.getViewerPose(c||o),y=oe,h!==null){let Le=h.views;x!==null&&(e.setRenderTargetFramebuffer(d,x.framebuffer),e.setRenderTarget(d));let ge=!1;Le.length!==b.cameras.length&&(b.cameras.length=0,ge=!0);for(let He=0;He<Le.length;He++){let ht=Le[He],je=null;if(x!==null)je=x.getViewport(ht);else{let yt=f.getViewSubImage(p,ht);je=yt.viewport,He===0&&(e.setRenderTargetTextures(d,yt.colorTexture,p.ignoreDepthValues?void 0:yt.depthStencilTexture),e.setRenderTarget(d))}let lt=le[He];lt===void 0&&(lt=new Wn,lt.layers.enable(He),lt.viewport=new en,le[He]=lt),lt.matrix.fromArray(ht.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(ht.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(je.x,je.y,je.width,je.height),He===0&&(b.matrix.copy(lt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ge===!0&&b.cameras.push(lt)}}for(let Le=0;Le<L.length;Le++){let ge=M[Le],He=L[Le];ge!==null&&He!==void 0&&He.update(ge,oe,c||o)}Me&&Me(W,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),y=null}let I=new Mf;I.setAnimationLoop(Ce),this.setAnimationLoop=function(W){Me=W},this.dispose=function(){}}};function Ox(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,yf(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,L,M,H){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),f(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d)):d.isMeshStandardMaterial?(r(g,d),p(g,d),d.isMeshPhysicalMaterial&&x(g,d,H)):d.isMeshMatcapMaterial?(r(g,d),y(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),v(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,L,M):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===qn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===qn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let L=e.get(d).envMap;if(L&&(g.envMap.value=L,g.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;let M=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*M,t(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,L,M){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*L,g.scale.value=M*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function p(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function x(g,d,L){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===qn&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=L.texture,g.transmissionSamplerSize.value.set(L.width,L.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,d){d.matcap&&(g.matcap.value=d.matcap)}function v(g,d){let L=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(L.matrixWorld),g.nearDistance.value=L.shadow.camera.near,g.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fx(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(L,M){let H=M.program;n.uniformBlockBinding(L,H)}function c(L,M){let H=s[L.id];H===void 0&&(y(L),H=h(L),s[L.id]=H,L.addEventListener("dispose",g));let P=M.program;n.updateUBOMapping(L,P);let F=e.render.frame;r[L.id]!==F&&(p(L),r[L.id]=F)}function h(L){let M=f();L.__bindingPointIndex=M;let H=i.createBuffer(),P=L.__size,F=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,H),i.bufferData(i.UNIFORM_BUFFER,P,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,H),H}function f(){for(let L=0;L<a;L++)if(o.indexOf(L)===-1)return o.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(L){let M=s[L.id],H=L.uniforms,P=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let F=0,N=H.length;F<N;F++){let le=Array.isArray(H[F])?H[F]:[H[F]];for(let b=0,C=le.length;b<C;b++){let O=le[b];if(x(O,F,b,P)===!0){let ae=O.__offset,Re=Array.isArray(O.value)?O.value:[O.value],k=0;for(let J=0;J<Re.length;J++){let se=Re[J],_e=v(se);typeof se=="number"||typeof se=="boolean"?(O.__data[0]=se,i.bufferSubData(i.UNIFORM_BUFFER,ae+k,O.__data)):se.isMatrix3?(O.__data[0]=se.elements[0],O.__data[1]=se.elements[1],O.__data[2]=se.elements[2],O.__data[3]=0,O.__data[4]=se.elements[3],O.__data[5]=se.elements[4],O.__data[6]=se.elements[5],O.__data[7]=0,O.__data[8]=se.elements[6],O.__data[9]=se.elements[7],O.__data[10]=se.elements[8],O.__data[11]=0):(se.toArray(O.__data,k),k+=_e.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ae,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(L,M,H,P){let F=L.value,N=M+"_"+H;if(P[N]===void 0)return typeof F=="number"||typeof F=="boolean"?P[N]=F:P[N]=F.clone(),!0;{let le=P[N];if(typeof F=="number"||typeof F=="boolean"){if(le!==F)return P[N]=F,!0}else if(le.equals(F)===!1)return le.copy(F),!0}return!1}function y(L){let M=L.uniforms,H=0,P=16;for(let N=0,le=M.length;N<le;N++){let b=Array.isArray(M[N])?M[N]:[M[N]];for(let C=0,O=b.length;C<O;C++){let ae=b[C],Re=Array.isArray(ae.value)?ae.value:[ae.value];for(let k=0,J=Re.length;k<J;k++){let se=Re[k],_e=v(se),ue=H%P;ue!==0&&P-ue<_e.boundary&&(H+=P-ue),ae.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=H,H+=_e.storage}}}let F=H%P;return F>0&&(H+=P-F),L.__size=H,L.__cache={},this}function v(L){let M={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(M.boundary=4,M.storage=4):L.isVector2?(M.boundary=8,M.storage=8):L.isVector3||L.isColor?(M.boundary=16,M.storage=12):L.isVector4?(M.boundary=16,M.storage=16):L.isMatrix3?(M.boundary=48,M.storage=48):L.isMatrix4?(M.boundary=64,M.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),M}function g(L){let M=L.target;M.removeEventListener("dispose",g);let H=o.indexOf(M.__bindingPointIndex);o.splice(H,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(let L in s)i.deleteBuffer(s[L]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var uo=class{constructor(e={}){let{canvas:t=Yd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;let x=new Uint32Array(4),y=new Int32Array(4),v=null,g=null,d=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this._useLegacyLights=!1,this.toneMapping=tr,this.toneMappingExposure=1;let M=this,H=!1,P=0,F=0,N=null,le=-1,b=null,C=new en,O=new en,ae=null,Re=new De(0),k=0,J=t.width,se=t.height,_e=1,ue=null,re=null,Me=new en(0,0,J,se),Ce=new en(0,0,J,se),I=!1,W=new ho,oe=!1,Le=!1,ge=null,He=new Ft,ht=new Je,je=new U,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function yt(){return N===null?_e:1}let $=n;function Vt(w,q){for(let j=0;j<w.length;j++){let ne=w[j],te=t.getContext(ne,q);if(te!==null)return te}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),$===null){let q=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&q.shift(),$=Vt(q,w),$===null)throw Vt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let nt,ot,Fe,Ht,_t,A,E,ee,Te,Ee,be,Ge,Ue,Ne,ke,st,me,Pt,D,Se,Ae,we,Ve,Mt;function dt(){nt=new n0($),ot=new Kg($,nt,e),nt.init(ot),we=new Dx($,nt,ot),Fe=new Ix($,nt,ot),Ht=new r0($),_t=new yx,A=new Ux($,nt,Fe,_t,ot,we,Ht),E=new jg(M),ee=new t0(M),Te=new dp($,ot),Ve=new Zg($,nt,Te,ot),Ee=new i0($,Te,Ht,Ve),be=new c0($,Ee,Te,Ht),D=new l0($,ot,A),st=new $g(_t),Ge=new vx(M,E,ee,nt,ot,Ve,st),Ue=new Ox(M,_t),Ne=new Ex,ke=new Rx(nt,ot),Pt=new Yg(M,E,ee,Fe,be,p,l),me=new Lx(M,be,ot),Mt=new Fx($,Ht,ot,Fe),Se=new Jg($,nt,Ht,ot),Ae=new s0($,nt,Ht,ot),Ht.programs=Ge.programs,M.capabilities=ot,M.extensions=nt,M.properties=_t,M.renderLists=Ne,M.shadowMap=me,M.state=Fe,M.info=Ht}dt();let pt=new Kc(M,$);this.xr=pt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let w=nt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=nt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(w){w!==void 0&&(_e=w,this.setSize(J,se,!1))},this.getSize=function(w){return w.set(J,se)},this.setSize=function(w,q,j=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,se=q,t.width=Math.floor(w*_e),t.height=Math.floor(q*_e),j===!0&&(t.style.width=w+"px",t.style.height=q+"px"),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(J*_e,se*_e).floor()},this.setDrawingBufferSize=function(w,q,j){J=w,se=q,_e=j,t.width=Math.floor(w*j),t.height=Math.floor(q*j),this.setViewport(0,0,w,q)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(Me)},this.setViewport=function(w,q,j,ne){w.isVector4?Me.set(w.x,w.y,w.z,w.w):Me.set(w,q,j,ne),Fe.viewport(C.copy(Me).multiplyScalar(_e).floor())},this.getScissor=function(w){return w.copy(Ce)},this.setScissor=function(w,q,j,ne){w.isVector4?Ce.set(w.x,w.y,w.z,w.w):Ce.set(w,q,j,ne),Fe.scissor(O.copy(Ce).multiplyScalar(_e).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(w){Fe.setScissorTest(I=w)},this.setOpaqueSort=function(w){ue=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(w=!0,q=!0,j=!0){let ne=0;if(w){let te=!1;if(N!==null){let Be=N.texture.format;te=Be===ff||Be===uf||Be===hf}if(te){let Be=N.texture.type,Ye=Be===nr||Be===Qs||Be===_h||Be===Ir||Be===lf||Be===cf,ct=Pt.getClearColor(),it=Pt.getClearAlpha(),Lt=ct.r,St=ct.g,bt=ct.b;Ye?(x[0]=Lt,x[1]=St,x[2]=bt,x[3]=it,$.clearBufferuiv($.COLOR,0,x)):(y[0]=Lt,y[1]=St,y[2]=bt,y[3]=it,$.clearBufferiv($.COLOR,0,y))}else ne|=$.COLOR_BUFFER_BIT}q&&(ne|=$.DEPTH_BUFFER_BIT),j&&(ne|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),Ne.dispose(),ke.dispose(),_t.dispose(),E.dispose(),ee.dispose(),be.dispose(),Ve.dispose(),Mt.dispose(),Ge.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",on),pt.removeEventListener("sessionend",K),ge&&(ge.dispose(),ge=null),de.stop()};function fe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;let w=Ht.autoReset,q=me.enabled,j=me.autoUpdate,ne=me.needsUpdate,te=me.type;dt(),Ht.autoReset=w,me.enabled=q,me.autoUpdate=j,me.needsUpdate=ne,me.type=te}function Ie(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function he(w){let q=w.target;q.removeEventListener("dispose",he),qe(q)}function qe(w){Ke(w),_t.remove(w)}function Ke(w){let q=_t.get(w).programs;q!==void 0&&(q.forEach(function(j){Ge.releaseProgram(j)}),w.isShaderMaterial&&Ge.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,j,ne,te,Be){q===null&&(q=lt);let Ye=te.isMesh&&te.matrixWorld.determinant()<0,ct=hn(w,q,j,ne,te);Fe.setMaterial(ne,Ye);let it=j.index,Lt=1;if(ne.wireframe===!0){if(it=Ee.getWireframeAttribute(j),it===void 0)return;Lt=2}let St=j.drawRange,bt=j.attributes.position,qt=St.start*Lt,Wt=(St.start+St.count)*Lt;Be!==null&&(qt=Math.max(qt,Be.start*Lt),Wt=Math.min(Wt,(Be.start+Be.count)*Lt)),it!==null?(qt=Math.max(qt,0),Wt=Math.min(Wt,it.count)):bt!=null&&(qt=Math.max(qt,0),Wt=Math.min(Wt,bt.count));let mn=Wt-qt;if(mn<0||mn===1/0)return;Ve.setup(te,ne,ct,j,it);let Zn,Kt=Se;if(it!==null&&(Zn=Te.get(it),Kt=Ae,Kt.setIndex(Zn)),te.isMesh)ne.wireframe===!0?(Fe.setLineWidth(ne.wireframeLinewidth*yt()),Kt.setMode($.LINES)):Kt.setMode($.TRIANGLES);else if(te.isLine){let mt=ne.linewidth;mt===void 0&&(mt=1),Fe.setLineWidth(mt*yt()),te.isLineSegments?Kt.setMode($.LINES):te.isLineLoop?Kt.setMode($.LINE_LOOP):Kt.setMode($.LINE_STRIP)}else te.isPoints?Kt.setMode($.POINTS):te.isSprite&&Kt.setMode($.TRIANGLES);if(te.isBatchedMesh)Kt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else if(te.isInstancedMesh)Kt.renderInstances(qt,mn,te.count);else if(j.isInstancedBufferGeometry){let mt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ni=Math.min(j.instanceCount,mt);Kt.renderInstances(qt,mn,Ni)}else Kt.render(qt,mn)};function Et(w,q,j){w.transparent===!0&&w.side===Xn&&w.forceSinglePass===!1?(w.side=qn,w.needsUpdate=!0,At(w,q,j),w.side=ir,w.needsUpdate=!0,At(w,q,j),w.side=Xn):At(w,q,j)}this.compile=function(w,q,j=null){j===null&&(j=w),g=ke.get(j),g.init(),L.push(g),j.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(g.pushLight(te),te.castShadow&&g.pushShadow(te))}),w!==j&&w.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(g.pushLight(te),te.castShadow&&g.pushShadow(te))}),g.setupLights(M._useLegacyLights);let ne=new Set;return w.traverse(function(te){let Be=te.material;if(Be)if(Array.isArray(Be))for(let Ye=0;Ye<Be.length;Ye++){let ct=Be[Ye];Et(ct,j,te),ne.add(ct)}else Et(Be,j,te),ne.add(Be)}),L.pop(),g=null,ne},this.compileAsync=function(w,q,j=null){let ne=this.compile(w,q,j);return new Promise(te=>{function Be(){if(ne.forEach(function(Ye){_t.get(Ye).currentProgram.isReady()&&ne.delete(Ye)}),ne.size===0){te(w);return}setTimeout(Be,10)}nt.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let ft=null;function kt(w){ft&&ft(w)}function on(){de.stop()}function K(){de.start()}let de=new Mf;de.setAnimationLoop(kt),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(w){ft=w,pt.setAnimationLoop(w),w===null?de.stop():de.start()},pt.addEventListener("sessionstart",on),pt.addEventListener("sessionend",K),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(q),q=pt.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,q,N),g=ke.get(w,L.length),g.init(),L.push(g),He.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),W.setFromProjectionMatrix(He),Le=this.localClippingEnabled,oe=st.init(this.clippingPlanes,Le),v=Ne.get(w,d.length),v.init(),d.push(v),pe(w,q,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(ue,re),this.info.render.frame++,oe===!0&&st.beginShadows();let j=g.state.shadowsArray;if(me.render(j,w,q),oe===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset(),Pt.render(v,w),g.setupLights(M._useLegacyLights),q.isArrayCamera){let ne=q.cameras;for(let te=0,Be=ne.length;te<Be;te++){let Ye=ne[te];ut(v,w,Ye,Ye.viewport)}}else ut(v,w,q);N!==null&&(A.updateMultisampleRenderTarget(N),A.updateRenderTargetMipmap(N)),w.isScene===!0&&w.onAfterRender(M,w,q),Ve.resetDefaultState(),le=-1,b=null,L.pop(),L.length>0?g=L[L.length-1]:g=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function pe(w,q,j,ne){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){ne&&je.setFromMatrixPosition(w.matrixWorld).applyMatrix4(He);let Ye=be.update(w),ct=w.material;ct.visible&&v.push(w,Ye,ct,j,je.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||W.intersectsObject(w))){let Ye=be.update(w),ct=w.material;if(ne&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),je.copy(w.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),je.copy(Ye.boundingSphere.center)),je.applyMatrix4(w.matrixWorld).applyMatrix4(He)),Array.isArray(ct)){let it=Ye.groups;for(let Lt=0,St=it.length;Lt<St;Lt++){let bt=it[Lt],qt=ct[bt.materialIndex];qt&&qt.visible&&v.push(w,Ye,qt,j,je.z,bt)}}else ct.visible&&v.push(w,Ye,ct,j,je.z,null)}}let Be=w.children;for(let Ye=0,ct=Be.length;Ye<ct;Ye++)pe(Be[Ye],q,j,ne)}function ut(w,q,j,ne){let te=w.opaque,Be=w.transmissive,Ye=w.transparent;g.setupLightsView(j),oe===!0&&st.setGlobalState(M.clippingPlanes,j),Be.length>0&&Qe(te,Be,q,j),ne&&Fe.viewport(C.copy(ne)),te.length>0&&$e(te,q,j),Be.length>0&&$e(Be,q,j),Ye.length>0&&$e(Ye,q,j),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Qe(w,q,j,ne){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;let Be=ot.isWebGL2;ge===null&&(ge=new ni(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")?Gi:nr,minFilter:oo,samples:Be?4:0})),M.getDrawingBufferSize(ht),Be?ge.setSize(ht.x,ht.y):ge.setSize(cl(ht.x),cl(ht.y));let Ye=M.getRenderTarget();M.setRenderTarget(ge),M.getClearColor(Re),k=M.getClearAlpha(),k<1&&M.setClearColor(16777215,.5),M.clear();let ct=M.toneMapping;M.toneMapping=tr,$e(w,j,ne),A.updateMultisampleRenderTarget(ge),A.updateRenderTargetMipmap(ge);let it=!1;for(let Lt=0,St=q.length;Lt<St;Lt++){let bt=q[Lt],qt=bt.object,Wt=bt.geometry,mn=bt.material,Zn=bt.group;if(mn.side===Xn&&qt.layers.test(ne.layers)){let Kt=mn.side;mn.side=qn,mn.needsUpdate=!0,It(qt,j,ne,Wt,mn,Zn),mn.side=Kt,mn.needsUpdate=!0,it=!0}}it===!0&&(A.updateMultisampleRenderTarget(ge),A.updateRenderTargetMipmap(ge)),M.setRenderTarget(Ye),M.setClearColor(Re,k),M.toneMapping=ct}function $e(w,q,j){let ne=q.isScene===!0?q.overrideMaterial:null;for(let te=0,Be=w.length;te<Be;te++){let Ye=w[te],ct=Ye.object,it=Ye.geometry,Lt=ne===null?Ye.material:ne,St=Ye.group;ct.layers.test(j.layers)&&It(ct,q,j,it,Lt,St)}}function It(w,q,j,ne,te,Be){w.onBeforeRender(M,q,j,ne,te,Be),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),te.onBeforeRender(M,q,j,ne,w,Be),te.transparent===!0&&te.side===Xn&&te.forceSinglePass===!1?(te.side=qn,te.needsUpdate=!0,M.renderBufferDirect(j,q,ne,te,w,Be),te.side=ir,te.needsUpdate=!0,M.renderBufferDirect(j,q,ne,te,w,Be),te.side=Xn):M.renderBufferDirect(j,q,ne,te,w,Be),w.onAfterRender(M,q,j,ne,te,Be)}function At(w,q,j){q.isScene!==!0&&(q=lt);let ne=_t.get(w),te=g.state.lights,Be=g.state.shadowsArray,Ye=te.state.version,ct=Ge.getParameters(w,te.state,Be,q,j),it=Ge.getProgramCacheKey(ct),Lt=ne.programs;ne.environment=w.isMeshStandardMaterial?q.environment:null,ne.fog=q.fog,ne.envMap=(w.isMeshStandardMaterial?ee:E).get(w.envMap||ne.environment),Lt===void 0&&(w.addEventListener("dispose",he),Lt=new Map,ne.programs=Lt);let St=Lt.get(it);if(St!==void 0){if(ne.currentProgram===St&&ne.lightsStateVersion===Ye)return Gt(w,ct),St}else ct.uniforms=Ge.getUniforms(w),w.onBuild(j,ct,M),w.onBeforeCompile(ct,M),St=Ge.acquireProgram(ct,it),Lt.set(it,St),ne.uniforms=ct.uniforms;let bt=ne.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(bt.clippingPlanes=st.uniform),Gt(w,ct),ne.needsLights=xn(w),ne.lightsStateVersion=Ye,ne.needsLights&&(bt.ambientLightColor.value=te.state.ambient,bt.lightProbe.value=te.state.probe,bt.directionalLights.value=te.state.directional,bt.directionalLightShadows.value=te.state.directionalShadow,bt.spotLights.value=te.state.spot,bt.spotLightShadows.value=te.state.spotShadow,bt.rectAreaLights.value=te.state.rectArea,bt.ltc_1.value=te.state.rectAreaLTC1,bt.ltc_2.value=te.state.rectAreaLTC2,bt.pointLights.value=te.state.point,bt.pointLightShadows.value=te.state.pointShadow,bt.hemisphereLights.value=te.state.hemi,bt.directionalShadowMap.value=te.state.directionalShadowMap,bt.directionalShadowMatrix.value=te.state.directionalShadowMatrix,bt.spotShadowMap.value=te.state.spotShadowMap,bt.spotLightMatrix.value=te.state.spotLightMatrix,bt.spotLightMap.value=te.state.spotLightMap,bt.pointShadowMap.value=te.state.pointShadowMap,bt.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.currentProgram=St,ne.uniformsList=null,St}function Zt(w){if(w.uniformsList===null){let q=w.currentProgram.getUniforms();w.uniformsList=Ta.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function Gt(w,q){let j=_t.get(w);j.outputColorSpace=q.outputColorSpace,j.batching=q.batching,j.instancing=q.instancing,j.instancingColor=q.instancingColor,j.skinning=q.skinning,j.morphTargets=q.morphTargets,j.morphNormals=q.morphNormals,j.morphColors=q.morphColors,j.morphTargetsCount=q.morphTargetsCount,j.numClippingPlanes=q.numClippingPlanes,j.numIntersection=q.numClipIntersection,j.vertexAlphas=q.vertexAlphas,j.vertexTangents=q.vertexTangents,j.toneMapping=q.toneMapping}function hn(w,q,j,ne,te){q.isScene!==!0&&(q=lt),A.resetTextureUnits();let Be=q.fog,Ye=ne.isMeshStandardMaterial?q.environment:null,ct=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ls,it=(ne.isMeshStandardMaterial?ee:E).get(ne.envMap||Ye),Lt=ne.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,St=!!j.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),bt=!!j.morphAttributes.position,qt=!!j.morphAttributes.normal,Wt=!!j.morphAttributes.color,mn=tr;ne.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(mn=M.toneMapping);let Zn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Kt=Zn!==void 0?Zn.length:0,mt=_t.get(ne),Ni=g.state.lights;if(oe===!0&&(Le===!0||w!==b)){let Ln=w===b&&ne.id===le;st.setState(ne,w,Ln)}let We=!1;ne.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==Ni.state.version||mt.outputColorSpace!==ct||te.isBatchedMesh&&mt.batching===!1||!te.isBatchedMesh&&mt.batching===!0||te.isInstancedMesh&&mt.instancing===!1||!te.isInstancedMesh&&mt.instancing===!0||te.isSkinnedMesh&&mt.skinning===!1||!te.isSkinnedMesh&&mt.skinning===!0||te.isInstancedMesh&&mt.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&mt.instancingColor===!1&&te.instanceColor!==null||mt.envMap!==it||ne.fog===!0&&mt.fog!==Be||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==st.numPlanes||mt.numIntersection!==st.numIntersection)||mt.vertexAlphas!==Lt||mt.vertexTangents!==St||mt.morphTargets!==bt||mt.morphNormals!==qt||mt.morphColors!==Wt||mt.toneMapping!==mn||ot.isWebGL2===!0&&mt.morphTargetsCount!==Kt)&&(We=!0):(We=!0,mt.__version=ne.version);let Jn=mt.currentProgram;We===!0&&(Jn=At(ne,q,te));let cs=!1,En=!1,Oi=!1,un=Jn.getUniforms(),wi=mt.uniforms;if(Fe.useProgram(Jn.program)&&(cs=!0,En=!0,Oi=!0),ne.id!==le&&(le=ne.id,En=!0),cs||b!==w){un.setValue($,"projectionMatrix",w.projectionMatrix),un.setValue($,"viewMatrix",w.matrixWorldInverse);let Ln=un.map.cameraPosition;Ln!==void 0&&Ln.setValue($,je.setFromMatrixPosition(w.matrixWorld)),ot.logarithmicDepthBuffer&&un.setValue($,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&un.setValue($,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,En=!0,Oi=!0)}if(te.isSkinnedMesh){un.setOptional($,te,"bindMatrix"),un.setOptional($,te,"bindMatrixInverse");let Ln=te.skeleton;Ln&&(ot.floatVertexTextures?(Ln.boneTexture===null&&Ln.computeBoneTexture(),un.setValue($,"boneTexture",Ln.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}te.isBatchedMesh&&(un.setOptional($,te,"batchingTexture"),un.setValue($,"batchingTexture",te._matricesTexture,A));let Nn=j.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0&&ot.isWebGL2===!0)&&D.update(te,j,Jn),(En||mt.receiveShadow!==te.receiveShadow)&&(mt.receiveShadow=te.receiveShadow,un.setValue($,"receiveShadow",te.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(wi.envMap.value=it,wi.flipEnvMap.value=it.isCubeTexture&&it.isRenderTargetTexture===!1?-1:1),En&&(un.setValue($,"toneMappingExposure",M.toneMappingExposure),mt.needsLights&&pn(wi,Oi),Be&&ne.fog===!0&&Ue.refreshFogUniforms(wi,Be),Ue.refreshMaterialUniforms(wi,ne,_e,se,ge),Ta.upload($,Zt(mt),wi,A)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ta.upload($,Zt(mt),wi,A),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&un.setValue($,"center",te.center),un.setValue($,"modelViewMatrix",te.modelViewMatrix),un.setValue($,"normalMatrix",te.normalMatrix),un.setValue($,"modelMatrix",te.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){let Ln=ne.uniformsGroups;for(let rt=0,kr=Ln.length;rt<kr;rt++)if(ot.isWebGL2){let hs=Ln[rt];Mt.update(hs,Jn),Mt.bind(hs,Jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Jn}function pn(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function xn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,q,j){_t.get(w.texture).__webglTexture=q,_t.get(w.depthTexture).__webglTexture=j;let ne=_t.get(w);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=j===void 0,ne.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,q){let j=_t.get(w);j.__webglFramebuffer=q,j.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(w,q=0,j=0){N=w,P=q,F=j;let ne=!0,te=null,Be=!1,Ye=!1;if(w){let it=_t.get(w);it.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer($.FRAMEBUFFER,null),ne=!1):it.__webglFramebuffer===void 0?A.setupRenderTarget(w):it.__hasExternalTextures&&A.rebindTextures(w,_t.get(w.texture).__webglTexture,_t.get(w.depthTexture).__webglTexture);let Lt=w.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(Ye=!0);let St=_t.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(St[q])?te=St[q][j]:te=St[q],Be=!0):ot.isWebGL2&&w.samples>0&&A.useMultisampledRTT(w)===!1?te=_t.get(w).__webglMultisampledFramebuffer:Array.isArray(St)?te=St[j]:te=St,C.copy(w.viewport),O.copy(w.scissor),ae=w.scissorTest}else C.copy(Me).multiplyScalar(_e).floor(),O.copy(Ce).multiplyScalar(_e).floor(),ae=I;if(Fe.bindFramebuffer($.FRAMEBUFFER,te)&&ot.drawBuffers&&ne&&Fe.drawBuffers(w,te),Fe.viewport(C),Fe.scissor(O),Fe.setScissorTest(ae),Be){let it=_t.get(w.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+q,it.__webglTexture,j)}else if(Ye){let it=_t.get(w.texture),Lt=q||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,it.__webglTexture,j||0,Lt)}le=-1},this.readRenderTargetPixels=function(w,q,j,ne,te,Be,Ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ct=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ye!==void 0&&(ct=ct[Ye]),ct){Fe.bindFramebuffer($.FRAMEBUFFER,ct);try{let it=w.texture,Lt=it.format,St=it.type;if(Lt!==vi&&we.convert(Lt)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let bt=St===Gi&&(nt.has("EXT_color_buffer_half_float")||ot.isWebGL2&&nt.has("EXT_color_buffer_float"));if(St!==nr&&we.convert(St)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&!(St===er&&(ot.isWebGL2||nt.has("OES_texture_float")||nt.has("WEBGL_color_buffer_float")))&&!bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-ne&&j>=0&&j<=w.height-te&&$.readPixels(q,j,ne,te,we.convert(Lt),we.convert(St),Be)}finally{let it=N!==null?_t.get(N).__webglFramebuffer:null;Fe.bindFramebuffer($.FRAMEBUFFER,it)}}},this.copyFramebufferToTexture=function(w,q,j=0){let ne=Math.pow(2,-j),te=Math.floor(q.image.width*ne),Be=Math.floor(q.image.height*ne);A.setTexture2D(q,0),$.copyTexSubImage2D($.TEXTURE_2D,j,0,0,w.x,w.y,te,Be),Fe.unbindTexture()},this.copyTextureToTexture=function(w,q,j,ne=0){let te=q.image.width,Be=q.image.height,Ye=we.convert(j.format),ct=we.convert(j.type);A.setTexture2D(j,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,j.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,j.unpackAlignment),q.isDataTexture?$.texSubImage2D($.TEXTURE_2D,ne,w.x,w.y,te,Be,Ye,ct,q.image.data):q.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,ne,w.x,w.y,q.mipmaps[0].width,q.mipmaps[0].height,Ye,q.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,ne,w.x,w.y,Ye,ct,q.image),ne===0&&j.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(w,q,j,ne,te=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Be=w.max.x-w.min.x+1,Ye=w.max.y-w.min.y+1,ct=w.max.z-w.min.z+1,it=we.convert(ne.format),Lt=we.convert(ne.type),St;if(ne.isData3DTexture)A.setTexture3D(ne,0),St=$.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)A.setTexture2DArray(ne,0),St=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,ne.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,ne.unpackAlignment);let bt=$.getParameter($.UNPACK_ROW_LENGTH),qt=$.getParameter($.UNPACK_IMAGE_HEIGHT),Wt=$.getParameter($.UNPACK_SKIP_PIXELS),mn=$.getParameter($.UNPACK_SKIP_ROWS),Zn=$.getParameter($.UNPACK_SKIP_IMAGES),Kt=j.isCompressedTexture?j.mipmaps[te]:j.image;$.pixelStorei($.UNPACK_ROW_LENGTH,Kt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Kt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,w.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,w.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,w.min.z),j.isDataTexture||j.isData3DTexture?$.texSubImage3D(St,te,q.x,q.y,q.z,Be,Ye,ct,it,Lt,Kt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(St,te,q.x,q.y,q.z,Be,Ye,ct,it,Kt.data)):$.texSubImage3D(St,te,q.x,q.y,q.z,Be,Ye,ct,it,Lt,Kt),$.pixelStorei($.UNPACK_ROW_LENGTH,bt),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,qt),$.pixelStorei($.UNPACK_SKIP_PIXELS,Wt),$.pixelStorei($.UNPACK_SKIP_ROWS,mn),$.pixelStorei($.UNPACK_SKIP_IMAGES,Zn),te===0&&ne.generateMipmaps&&$.generateMipmap(St),Fe.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Fe.unbindTexture()},this.resetState=function(){P=0,F=0,N=null,Fe.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===vh?"display-p3":"srgb",t.unpackColorSpace=jt.workingColorSpace===Il?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Jt?Dr:pf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Dr?Jt:Ls}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},$c=class extends uo{};$c.prototype.isWebGL1Renderer=!0;var yl=class extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},jc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ps()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ps()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ps()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ei=new U,Ml=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ei.fromBufferAttribute(this,t),ei.applyMatrix4(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ei.fromBufferAttribute(this,t),ei.applyNormalMatrix(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ei.fromBufferAttribute(this,t),ei.transformDirection(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ss(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ss(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ss(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ss(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new hi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ui=class extends sr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xa,$a=new U,_a=new U,va=new U,ya=new Je,ja=new Je,Af=new Ft,Ko=new U,Qa=new U,$o=new U,Ju=new Je,Ec=new Je,Ku=new Je,Si=class extends Yn{constructor(e=new ui){if(super(),this.isSprite=!0,this.type="Sprite",xa===void 0){xa=new Ei;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jc(t,5);xa.setIndex([0,1,2,0,2,3]),xa.setAttribute("position",new Ml(n,3,0,!1)),xa.setAttribute("uv",new Ml(n,2,3,!1))}this.geometry=xa,this.material=e,this.center=new Je(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_a.setFromMatrixScale(this.matrixWorld),Af.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),va.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_a.multiplyScalar(-va.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;jo(Ko.set(-.5,-.5,0),va,o,_a,s,r),jo(Qa.set(.5,-.5,0),va,o,_a,s,r),jo($o.set(.5,.5,0),va,o,_a,s,r),Ju.set(0,0),Ec.set(1,0),Ku.set(1,1);let a=e.ray.intersectTriangle(Ko,Qa,$o,!1,$a);if(a===null&&(jo(Qa.set(-.5,.5,0),va,o,_a,s,r),Ec.set(0,1),a=e.ray.intersectTriangle(Ko,$o,Qa,!1,$a),a===null))return;let l=e.ray.origin.distanceTo($a);l<e.near||l>e.far||t.push({distance:l,point:$a.clone(),uv:Lr.getInterpolation($a,Ko,Qa,$o,Ju,Ec,Ku,new Je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function jo(i,e,t,n,s,r){ya.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ja.x=r*ya.x-s*ya.y,ja.y=s*ya.x+r*ya.y):ja.copy(ya),i.copy(e),i.x+=ja.x,i.y+=ja.y,i.applyMatrix4(Af)}var El=class extends Mi{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Rn,h=Rn,f,p){super(null,o,a,l,c,h,s,r,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Or=class extends hi{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ma=new Ft,$u=new Ft,Qo=[],ju=new Is,zx=new Ft,eo=new vt,to=new Nr,an=class extends vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Or(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Is),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ma),ju.copy(e.boundingBox).applyMatrix4(Ma),this.boundingBox.union(ju)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ma),to.copy(e.boundingSphere).applyMatrix4(Ma),this.boundingSphere.union(to)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(eo.geometry=this.geometry,eo.material=this.material,eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(n),e.ray.intersectsSphere(to)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ma),$u.multiplyMatrices(n,Ma),eo.matrixWorld=$u,eo.raycast(e,Qo);for(let o=0,a=Qo.length;o<a;o++){let l=Qo[o];l.instanceId=r,l.object=this,t.push(l)}Qo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Or(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var si=class extends Mi{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qc=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,x=(o-h)/p;return(s+x)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Je:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new U,s=[],r=[],o=[],a=new U,l=new Ft;for(let x=0;x<=e;x++){let y=x/e;s[x]=this.getTangentAt(y,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let x=1;x<=e;x++){if(r[x]=r[x-1].clone(),o[x]=o[x-1].clone(),a.crossVectors(s[x-1],s[x]),a.length()>Number.EPSILON){a.normalize();let y=Math.acos(Dn(s[x-1].dot(s[x]),-1,1));r[x].applyMatrix4(l.makeRotationAxis(a,y))}o[x].crossVectors(s[x],r[x])}if(t===!0){let x=Math.acos(Dn(r[0].dot(r[e]),-1,1));x/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(x=-x);for(let y=1;y<=e;y++)r[y].applyMatrix4(l.makeRotationAxis(s[y],x*y)),o[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Eh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,x=(a-o)/h-(l-o)/(h+f)+(l-a)/f;p*=h,x*=h,s(o,a,p,x)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var el=new U,Sc=new Eh,bc=new Eh,wc=new Eh,Sl=class extends Qc{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(el.subVectors(s[0],s[1]).add(s[0]),c=el);let f=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(el.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=el),this.curveType==="centripetal"||this.curveType==="chordal"){let x=this.curveType==="chordal"?.5:.25,y=Math.pow(c.distanceToSquared(f),x),v=Math.pow(f.distanceToSquared(p),x),g=Math.pow(p.distanceToSquared(h),x);v<1e-4&&(v=1),y<1e-4&&(y=v),g<1e-4&&(g=v),Sc.initNonuniformCatmullRom(c.x,f.x,p.x,h.x,y,v,g),bc.initNonuniformCatmullRom(c.y,f.y,p.y,h.y,y,v,g),wc.initNonuniformCatmullRom(c.z,f.z,p.z,h.z,y,v,g)}else this.curveType==="catmullrom"&&(Sc.initCatmullRom(c.x,f.x,p.x,h.x,this.tension),bc.initCatmullRom(c.y,f.y,p.y,h.y,this.tension),wc.initCatmullRom(c.z,f.z,p.z,h.z,this.tension));return n.set(Sc.calc(l),bc.calc(l),wc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var fo=class i extends Ei{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],p=[],x=[],y=0,v=[],g=n/2,d=0;L(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new yn(f,3)),this.setAttribute("normal",new yn(p,3)),this.setAttribute("uv",new yn(x,2));function L(){let H=new U,P=new U,F=0,N=(t-e)/n;for(let le=0;le<=r;le++){let b=[],C=le/r,O=C*(t-e)+e;for(let ae=0;ae<=s;ae++){let Re=ae/s,k=Re*l+a,J=Math.sin(k),se=Math.cos(k);P.x=O*J,P.y=-C*n+g,P.z=O*se,f.push(P.x,P.y,P.z),H.set(J,N,se).normalize(),p.push(H.x,H.y,H.z),x.push(Re,1-C),b.push(y++)}v.push(b)}for(let le=0;le<s;le++)for(let b=0;b<r;b++){let C=v[b][le],O=v[b+1][le],ae=v[b+1][le+1],Re=v[b][le+1];h.push(C,O,Re),h.push(O,ae,Re),F+=6}c.addGroup(d,F,0),d+=F}function M(H){let P=y,F=new Je,N=new U,le=0,b=H===!0?e:t,C=H===!0?1:-1;for(let ae=1;ae<=s;ae++)f.push(0,g*C,0),p.push(0,C,0),x.push(.5,.5),y++;let O=y;for(let ae=0;ae<=s;ae++){let k=ae/s*l+a,J=Math.cos(k),se=Math.sin(k);N.x=b*se,N.y=g*C,N.z=b*J,f.push(N.x,N.y,N.z),p.push(0,C,0),F.x=J*.5+.5,F.y=se*.5*C+.5,x.push(F.x,F.y),y++}for(let ae=0;ae<s;ae++){let Re=P+ae,k=O+ae;H===!0?h.push(k,k+1,Re):h.push(k+1,k,Re),le+=3}c.addGroup(d,le,H===!0?1:2),d+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},rr=class i extends fo{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var po=class i extends Ei{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new U,p=new U,x=[],y=[],v=[],g=[];for(let d=0;d<=n;d++){let L=[],M=d/n,H=0;d===0&&o===0?H=.5/t:d===n&&l===Math.PI&&(H=-.5/t);for(let P=0;P<=t;P++){let F=P/t;f.x=-e*Math.cos(s+F*r)*Math.sin(o+M*a),f.y=e*Math.cos(o+M*a),f.z=e*Math.sin(s+F*r)*Math.sin(o+M*a),y.push(f.x,f.y,f.z),p.copy(f).normalize(),v.push(p.x,p.y,p.z),g.push(F+H,1-M),L.push(c++)}h.push(L)}for(let d=0;d<n;d++)for(let L=0;L<t;L++){let M=h[d][L+1],H=h[d][L],P=h[d+1][L],F=h[d+1][L+1];(d!==0||o>0)&&x.push(M,H,F),(d!==n-1||l<Math.PI)&&x.push(H,P,F)}this.setIndex(x),this.setAttribute("position",new yn(y,3)),this.setAttribute("normal",new yn(v,3)),this.setAttribute("uv",new yn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var bl=class i extends Ei{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new U,f=new U,p=new U;for(let x=0;x<=n;x++)for(let y=0;y<=s;y++){let v=y/s*r,g=x/n*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(v),f.y=(e+t*Math.cos(g))*Math.sin(v),f.z=t*Math.sin(g),a.push(f.x,f.y,f.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),p.subVectors(f,h).normalize(),l.push(p.x,p.y,p.z),c.push(y/s),c.push(x/n)}for(let x=1;x<=n;x++)for(let y=1;y<=s;y++){let v=(s+1)*x+y-1,g=(s+1)*(x-1)+y-1,d=(s+1)*(x-1)+y,L=(s+1)*x+y;o.push(v,g,L),o.push(g,d,L)}this.setIndex(o),this.setAttribute("position",new yn(a,3)),this.setAttribute("normal",new yn(l,3)),this.setAttribute("uv",new yn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var wl=class extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Xt=class extends sr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mf,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function tl(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Bx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ua=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},eh=class extends Ua{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:au,endingEnd:au}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ou:r=e,a=2*t-n;break;case lu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ou:o=e,l=2*n-t;break;case lu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,x=this._weightNext,y=(n-t)/(s-t),v=y*y,g=v*y,d=-p*g+2*p*v-p*y,L=(1+p)*g+(-1.5-2*p)*v+(-.5+p)*y+1,M=(-1-x)*g+(1.5+x)*v+.5*y,H=x*g-x*v;for(let P=0;P!==a;++P)r[P]=d*o[h+P]+L*o[c+P]+M*o[l+P]+H*o[f+P];return r}},th=class extends Ua{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),f=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*f+o[l+p]*h;return r}},nh=class extends Ua{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=tl(t,this.TimeBufferType),this.values=tl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:tl(e.times,Array),values:tl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case il:t=this.InterpolantFactoryMethodDiscrete;break;case sl:t=this.InterpolantFactoryMethodLinear;break;case Ql:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return il;case this.InterpolantFactoryMethodLinear:return sl;case this.InterpolantFactoryMethodSmooth:return Ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Bx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ql,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*n,p=f-n,x=f+n;for(let y=0;y!==n;++y){let v=t[f+y];if(v!==t[p+y]||v!==t[x+y]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,p=o*n;for(let x=0;x!==n;++x)t[p+x]=t[f+x]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Wi.prototype.TimeBufferType=Float32Array;Wi.prototype.ValueBufferType=Float32Array;Wi.prototype.DefaultInterpolation=sl;var Fr=class extends Wi{};Fr.prototype.ValueTypeName="bool";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=il;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var ih=class extends Wi{};ih.prototype.ValueTypeName="color";var sh=class extends Wi{};sh.prototype.ValueTypeName="number";var rh=class extends Ua{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Tn.slerpFlat(r,0,o,c-a,o,c,l);return r}},mo=class extends Wi{InterpolantFactoryMethodLinear(e){return new rh(this.times,this.values,this.getValueSize(),e)}};mo.prototype.ValueTypeName="quaternion";mo.prototype.DefaultInterpolation=sl;mo.prototype.InterpolantFactoryMethodSmooth=void 0;var zr=class extends Wi{};zr.prototype.ValueTypeName="string";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=il;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;var ah=class extends Wi{};ah.prototype.ValueTypeName="vector";var oh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=c.length;f<p;f+=2){let x=c[f],y=c[f+1];if(x.global&&(x.lastIndex=0),x.test(h))return y}return null}}},Hx=new oh,lh=class{constructor(e){this.manager=e!==void 0?e:Hx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};lh.DEFAULT_MATERIAL_NAME="__DEFAULT";var go=class extends Yn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Tl=class extends go{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Tc=new Ft,Qu=new U,ef=new U,Al=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ho,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Qu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qu),ef.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ef),t.updateMatrixWorld(),Tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var tf=new Ft,no=new U,Ac=new U,ch=class extends Al{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new en(2,1,1,1),new en(0,1,1,1),new en(3,1,1,1),new en(1,1,1,1),new en(3,0,1,1),new en(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),no.setFromMatrixPosition(e.matrixWorld),n.position.copy(no),Ac.copy(n.position),Ac.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ac),n.updateMatrixWorld(),s.makeTranslation(-no.x,-no.y,-no.z),tf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tf)}},xo=class extends go{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ch}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},hh=class extends Al{constructor(){super(new Ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rl=class extends go{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yn.DEFAULT_UP),this.updateMatrix(),this.target=new Yn,this.shadow=new hh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Cl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=nf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function nf(){return(typeof performance>"u"?Date:performance).now()}var Sh="\\[\\]\\.:\\/",kx=new RegExp("["+Sh+"]","g"),bh="[^"+Sh+"]",Vx="[^"+Sh.replace("\\.","")+"]",Gx=/((?:WC+[\/:])*)/.source.replace("WC",bh),Wx=/(WCOD+)?/.source.replace("WCOD",Vx),Xx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bh),qx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bh),Yx=new RegExp("^"+Gx+Wx+Xx+qx+"$"),Zx=["material","materials","bones","map"],uh=class{constructor(e,t,n){let s=n||dn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kx,"")}static parseTrackName(e){let t=Yx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Zx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dn.Composite=uh;dn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dn.prototype.GetterByBindingType=[dn.prototype._getValue_direct,dn.prototype._getValue_array,dn.prototype._getValue_arrayElement,dn.prototype._getValue_toArray];dn.prototype.SetterByBindingTypeAndVersioning=[[dn.prototype._setValue_direct,dn.prototype._setValue_direct_setNeedsUpdate,dn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dn.prototype._setValue_array,dn.prototype._setValue_array_setNeedsUpdate,dn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dn.prototype._setValue_arrayElement,dn.prototype._setValue_arrayElement_setNeedsUpdate,dn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dn.prototype._setValue_fromArray,dn.prototype._setValue_fromArray_setNeedsUpdate,dn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var r_=new Float32Array(1);var Pl=class{constructor(e,t,n=0,s=1/0){this.ray=new Pa(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return fh(e,this,n,t),n.sort(sf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)fh(e[s],this,n,t);return n.sort(sf),n}};function sf(i,e){return i.distance-e.distance}function fh(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)fh(s[r],e,t,!0)}}var _o=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Dn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Rf={type:"change"},Th={type:"start"},Cf={type:"end"},Dl=new Pa,Pf=new ki,Jx=Math.cos(70*xf.DEG2RAD),Nl=class extends as{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Br.ROTATE,MIDDLE:Br.DOLLY,RIGHT:Br.PAN},this.touches={ONE:Hr.ROTATE,TWO:Hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",be),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",be),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Rf),n.update(),r=s.NONE},this.update=(function(){let D=new U,Se=new Tn().setFromUnitVectors(e.up,new U(0,1,0)),Ae=Se.clone().invert(),we=new U,Ve=new Tn,Mt=new U,dt=2*Math.PI;return function(fe=null){let G=n.object.position;D.copy(G).sub(n.target),D.applyQuaternion(Se),a.setFromVector3(D),n.autoRotate&&r===s.NONE&&O(b(fe)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ie=n.minAzimuthAngle,he=n.maxAzimuthAngle;isFinite(Ie)&&isFinite(he)&&(Ie<-Math.PI?Ie+=dt:Ie>Math.PI&&(Ie-=dt),he<-Math.PI?he+=dt:he>Math.PI&&(he-=dt),Ie<=he?a.theta=Math.max(Ie,Math.min(he,a.theta)):a.theta=a.theta>(Ie+he)/2?Math.max(Ie,a.theta):Math.min(he,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&F||n.object.isOrthographicCamera?a.radius=re(a.radius):a.radius=re(a.radius*c),D.setFromSpherical(a),D.applyQuaternion(Ae),G.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let qe=!1;if(n.zoomToCursor&&F){let Ke=null;if(n.object.isPerspectiveCamera){let Et=D.length();Ke=re(Et*c);let ft=Et-Ke;n.object.position.addScaledVector(H,ft),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let Et=new U(P.x,P.y,0);Et.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),qe=!0;let ft=new U(P.x,P.y,0);ft.unproject(n.object),n.object.position.sub(ft).add(Et),n.object.updateMatrixWorld(),Ke=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ke!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ke).add(n.object.position):(Dl.origin.copy(n.object.position),Dl.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Dl.direction))<Jx?e.lookAt(n.target):(Pf.setFromNormalAndCoplanarPoint(n.object.up,n.target),Dl.intersectPlane(Pf,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),qe=!0);return c=1,F=!1,qe||we.distanceToSquared(n.object.position)>o||8*(1-Ve.dot(n.object.quaternion))>o||Mt.distanceToSquared(n.target)>0?(n.dispatchEvent(Rf),we.copy(n.object.position),Ve.copy(n.object.quaternion),Mt.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ne),n.domElement.removeEventListener("pointerdown",_t),n.domElement.removeEventListener("pointercancel",E),n.domElement.removeEventListener("wheel",Ee),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",E),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",be),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new _o,l=new _o,c=1,h=new U,f=new Je,p=new Je,x=new Je,y=new Je,v=new Je,g=new Je,d=new Je,L=new Je,M=new Je,H=new U,P=new Je,F=!1,N=[],le={};function b(D){return D!==null?2*Math.PI/60*n.autoRotateSpeed*D:2*Math.PI/60/60*n.autoRotateSpeed}function C(D){let Se=Math.abs(D)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*Se)}function O(D){l.theta-=D}function ae(D){l.phi-=D}let Re=(function(){let D=new U;return function(Ae,we){D.setFromMatrixColumn(we,0),D.multiplyScalar(-Ae),h.add(D)}})(),k=(function(){let D=new U;return function(Ae,we){n.screenSpacePanning===!0?D.setFromMatrixColumn(we,1):(D.setFromMatrixColumn(we,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(Ae),h.add(D)}})(),J=(function(){let D=new U;return function(Ae,we){let Ve=n.domElement;if(n.object.isPerspectiveCamera){let Mt=n.object.position;D.copy(Mt).sub(n.target);let dt=D.length();dt*=Math.tan(n.object.fov/2*Math.PI/180),Re(2*Ae*dt/Ve.clientHeight,n.object.matrix),k(2*we*dt/Ve.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Re(Ae*(n.object.right-n.object.left)/n.object.zoom/Ve.clientWidth,n.object.matrix),k(we*(n.object.top-n.object.bottom)/n.object.zoom/Ve.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function se(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function _e(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ue(D,Se){if(!n.zoomToCursor)return;F=!0;let Ae=n.domElement.getBoundingClientRect(),we=D-Ae.left,Ve=Se-Ae.top,Mt=Ae.width,dt=Ae.height;P.x=we/Mt*2-1,P.y=-(Ve/dt)*2+1,H.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function re(D){return Math.max(n.minDistance,Math.min(n.maxDistance,D))}function Me(D){f.set(D.clientX,D.clientY)}function Ce(D){ue(D.clientX,D.clientX),d.set(D.clientX,D.clientY)}function I(D){y.set(D.clientX,D.clientY)}function W(D){p.set(D.clientX,D.clientY),x.subVectors(p,f).multiplyScalar(n.rotateSpeed);let Se=n.domElement;O(2*Math.PI*x.x/Se.clientHeight),ae(2*Math.PI*x.y/Se.clientHeight),f.copy(p),n.update()}function oe(D){L.set(D.clientX,D.clientY),M.subVectors(L,d),M.y>0?se(C(M.y)):M.y<0&&_e(C(M.y)),d.copy(L),n.update()}function Le(D){v.set(D.clientX,D.clientY),g.subVectors(v,y).multiplyScalar(n.panSpeed),J(g.x,g.y),y.copy(v),n.update()}function ge(D){ue(D.clientX,D.clientY),D.deltaY<0?_e(C(D.deltaY)):D.deltaY>0&&se(C(D.deltaY)),n.update()}function He(D){let Se=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?ae(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(0,n.keyPanSpeed),Se=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?ae(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(0,-n.keyPanSpeed),Se=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(n.keyPanSpeed,0),Se=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(-n.keyPanSpeed,0),Se=!0;break}Se&&(D.preventDefault(),n.update())}function ht(D){if(N.length===1)f.set(D.pageX,D.pageY);else{let Se=Pt(D),Ae=.5*(D.pageX+Se.x),we=.5*(D.pageY+Se.y);f.set(Ae,we)}}function je(D){if(N.length===1)y.set(D.pageX,D.pageY);else{let Se=Pt(D),Ae=.5*(D.pageX+Se.x),we=.5*(D.pageY+Se.y);y.set(Ae,we)}}function lt(D){let Se=Pt(D),Ae=D.pageX-Se.x,we=D.pageY-Se.y,Ve=Math.sqrt(Ae*Ae+we*we);d.set(0,Ve)}function yt(D){n.enableZoom&&lt(D),n.enablePan&&je(D)}function $(D){n.enableZoom&&lt(D),n.enableRotate&&ht(D)}function Vt(D){if(N.length==1)p.set(D.pageX,D.pageY);else{let Ae=Pt(D),we=.5*(D.pageX+Ae.x),Ve=.5*(D.pageY+Ae.y);p.set(we,Ve)}x.subVectors(p,f).multiplyScalar(n.rotateSpeed);let Se=n.domElement;O(2*Math.PI*x.x/Se.clientHeight),ae(2*Math.PI*x.y/Se.clientHeight),f.copy(p)}function nt(D){if(N.length===1)v.set(D.pageX,D.pageY);else{let Se=Pt(D),Ae=.5*(D.pageX+Se.x),we=.5*(D.pageY+Se.y);v.set(Ae,we)}g.subVectors(v,y).multiplyScalar(n.panSpeed),J(g.x,g.y),y.copy(v)}function ot(D){let Se=Pt(D),Ae=D.pageX-Se.x,we=D.pageY-Se.y,Ve=Math.sqrt(Ae*Ae+we*we);L.set(0,Ve),M.set(0,Math.pow(L.y/d.y,n.zoomSpeed)),se(M.y),d.copy(L);let Mt=(D.pageX+Se.x)*.5,dt=(D.pageY+Se.y)*.5;ue(Mt,dt)}function Fe(D){n.enableZoom&&ot(D),n.enablePan&&nt(D)}function Ht(D){n.enableZoom&&ot(D),n.enableRotate&&Vt(D)}function _t(D){n.enabled!==!1&&(N.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",E)),ke(D),D.pointerType==="touch"?Ge(D):ee(D))}function A(D){n.enabled!==!1&&(D.pointerType==="touch"?Ue(D):Te(D))}function E(D){st(D),N.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",E)),n.dispatchEvent(Cf),r=s.NONE}function ee(D){let Se;switch(D.button){case 0:Se=n.mouseButtons.LEFT;break;case 1:Se=n.mouseButtons.MIDDLE;break;case 2:Se=n.mouseButtons.RIGHT;break;default:Se=-1}switch(Se){case Br.DOLLY:if(n.enableZoom===!1)return;Ce(D),r=s.DOLLY;break;case Br.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;I(D),r=s.PAN}else{if(n.enableRotate===!1)return;Me(D),r=s.ROTATE}break;case Br.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;Me(D),r=s.ROTATE}else{if(n.enablePan===!1)return;I(D),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Th)}function Te(D){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;W(D);break;case s.DOLLY:if(n.enableZoom===!1)return;oe(D);break;case s.PAN:if(n.enablePan===!1)return;Le(D);break}}function Ee(D){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(D.preventDefault(),n.dispatchEvent(Th),ge(D),n.dispatchEvent(Cf))}function be(D){n.enabled===!1||n.enablePan===!1||He(D)}function Ge(D){switch(me(D),N.length){case 1:switch(n.touches.ONE){case Hr.ROTATE:if(n.enableRotate===!1)return;ht(D),r=s.TOUCH_ROTATE;break;case Hr.PAN:if(n.enablePan===!1)return;je(D),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Hr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;yt(D),r=s.TOUCH_DOLLY_PAN;break;case Hr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;$(D),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Th)}function Ue(D){switch(me(D),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Vt(D),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;nt(D),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Fe(D),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ht(D),n.update();break;default:r=s.NONE}}function Ne(D){n.enabled!==!1&&D.preventDefault()}function ke(D){N.push(D.pointerId)}function st(D){delete le[D.pointerId];for(let Se=0;Se<N.length;Se++)if(N[Se]==D.pointerId){N.splice(Se,1);return}}function me(D){let Se=le[D.pointerId];Se===void 0&&(Se=new Je,le[D.pointerId]=Se),Se.set(D.pageX,D.pageY)}function Pt(D){let Se=D.pointerId===N[0]?N[1]:N[0];return le[Se]}n.domElement.addEventListener("contextmenu",Ne),n.domElement.addEventListener("pointerdown",_t),n.domElement.addEventListener("pointercancel",E),n.domElement.addEventListener("wheel",Ee,{passive:!1}),this.update()}};var Ol={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var bi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Kx=new Ia(-1,1,1,-1,0,1),Ah=class extends Ei{constructor(){super(),this.setAttribute("position",new yn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new yn([0,2,0,0,2,0],2))}},$x=new Ah,or=class{constructor(e){this._mesh=new vt($x,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Kx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Fl=class extends bi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof gn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ar.clone(e.uniforms),this.material=new gn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new or(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var yo=class extends bi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},zl=class extends bi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Bl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Je);this._width=n.width,this._height=n.height,t=new ni(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fl(Ol),this.copyPass.material.blending=rs,this.clock=new Cl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}yo!==void 0&&(o instanceof yo?n=!0:o instanceof zl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Je);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Hl=class extends bi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new De}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Lf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new De(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Na=class i extends bi{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Je(e.x,e.y):new Je(256,256),this.clearColor=new De(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ni(r,o,{type:Gi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let p=new ni(r,o,{type:Gi});p.texture.name="UnrealBloomPass.h"+f,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let x=new ni(r,o,{type:Gi});x.texture.name="UnrealBloomPass.v"+f,x.texture.generateMipmaps=!1,this.renderTargetsVertical.push(x),r=Math.round(r/2),o=Math.round(o/2)}let a=Lf;this.highPassUniforms=ar.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new gn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Je(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ol;this.copyUniforms=ar.clone(h.uniforms),this.blendMaterial=new gn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:yi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new De,this.oldClearAlpha=1,this.basic=new Ut,this.fsQuad=new or(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Je(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new gn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Je(.5,.5)},direction:{value:new Je(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new gn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Na.BlurDirectionX=new Je(1,0);Na.BlurDirectionY=new Je(0,1);var If={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var kl=class extends bi{constructor(){super();let e=If;this.uniforms=ar.clone(e.uniforms),this.material=new wl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new or(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},jt.getTransfer(this._outputColorSpace)===rn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ph?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===mh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===gh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Xi=Math.PI*2;function Uf(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}var zt={lot:0,res:1,apt:2,ind:3,mall:4,park:5,golf:6,air:7,port:8,arena:9,hwy:10,ring:11},sn={rw:{x0:-492,x1:-196,z:-280,hw:9},twz:-253,apron:{x0:-440,x1:-276,z0:-249,z1:-212},field:{x:-220,z:32,hx:19,hz:12},port:{x0:-40,x1:84,z0:-292,z1:-148},lake:{x:-76,z:176,w:40,d:32},hwyX:-132,hwyZ:122,isle:{x:208,z:128,r:40},metro:{x0:-96,x1:74,z0:-96,z1:96,r:16,y:12}},Vl=i=>i*36+14;function Df(i,e){let t=Uf(4242),n=33,s=new Uint8Array(n*n*4),r=new Set,o=(h,f,p)=>{if(Math.abs(h)>16||Math.abs(f)>16)return;let x=((f+16)*n+h+16)*4;s[x]=p,s[x+3]=255},a=(h,f)=>Math.abs(h)>16||Math.abs(f)>16?0:s[((f+16)*n+h+16)*4],l=(h,f,p,x,y)=>{for(let v=h;v<=f;v++)for(let g=p;g<=x;g++)o(v,g,y),r.add(v+","+g)};l(-14,-6,-9,-6,zt.air),l(-1,1,-8,-5,zt.port),l(-7,-6,0,1,zt.arena),l(-9,-7,5,7,zt.golf),l(-3,-2,4,5,zt.park),l(-5,-5,-2,-2,zt.mall),l(-10,-10,2,2,zt.mall),l(-1,-1,8,8,zt.mall);for(let h=-16;h<=16;h++)r.has("-4,"+h)||l(-4,-4,h,h,zt.hwy),h<=1&&!r.has(h+",3")&&l(h,h,3,3,zt.hwy);for(let h=-16;h<=16;h++)for(let f=-16;f<=16;f++){if(r.has(h+","+f))continue;let p=Vl(h),x=Vl(f),y=Math.hypot(p,x);if(Math.abs(p)<i+26&&Math.abs(x)<i+26){o(h,f,zt.ring);continue}if(p>e+12||y>600){o(h,f,zt.lot);continue}let v=t(),g=f<=-5||h<=-10,d=f>=4;o(h,f,g?v<.3?zt.ind:v<.66?zt.res:v<.8?zt.apt:v<.9?zt.park:zt.lot:d?v<.58?zt.res:v<.74?zt.apt:v<.88?zt.park:zt.lot:v<.38?zt.apt:v<.78?zt.res:v<.9?zt.park:zt.lot)}let c=new El(s,n,n,vi);return c.magFilter=c.minFilter=Rn,c.needsUpdate=!0,{tex:c,get:a}}function Nf(i){let{scene:e,col:t,voxMesh:n,boxGeo:s,mobile:r,HALF:o,PITCH:a,NB:l,BEACH_X:c,PIER_Z:h,roofs:f,ants:p,site:x,zones:y,spark:v,seaMat:g,cam:d,rr:L,loadIcon:M,mono:H}=i,P=Uf(9137),F=r,N=new Ft,le=new Ft,b=new Tn,C=new U,O=new U,ae=new os(0,0,0,"YXZ"),Re=new De,k=new U,J=new U,se=new U,_e=new U(0,1,0),ue=new U(0,-1,0),re=new U(0,0,1),Me=new Ft().makeScale(0,0,0),Ce=new De(1,1,1),I=(u,S,R,X,Q,xe,Ze,tt,at,Tt)=>({x:u,y:S,z:R,w:X,h:Q,d:xe,c:typeof Ze=="string"?t(Ze):Ze,ry:tt,rx:at,rz:Tt}),W=(u,S,R)=>new De(u,S,R),oe=u=>u[Math.floor(P()*u.length)],Le=(u,S,R)=>new U(u,S,R),ge={x:0,y:0,z:0,yaw:0,pitch:0},He={x:0,y:0,z:0,yaw:0,pitch:0},ht=new zn;e.add(ht);function je(u,S=ht){let R=new an(s(),new Ut({toneMapped:!1}),Math.max(1,u.length));return u.forEach((X,Q)=>{b.setFromEuler(ae.set(X.rx||0,X.ry||0,X.rz||0)),N.compose(C.set(X.x,X.y+X.h/2,X.z),b,O.set(X.w,X.h,X.d)),R.setMatrixAt(Q,N),R.setColorAt(Q,X.c)}),R.count=u.length,R.frustumCulled=!1,S.add(R),R}function lt(u,S){let R=new an(s(),new Xt,Math.max(1,u.length));return u.forEach((X,Q)=>{b.setFromEuler(ae.set(X.rx||0,X.ry||0,X.rz||0)),N.compose(C.set(X.x,X.y+X.h/2,X.z),b,O.set(X.w,X.h,X.d)),R.setMatrixAt(Q,N),R.setColorAt(Q,X.c)}),R.count=u.length,R.frustumCulled=!1,S.add(R),R}function yt(u,S){let R=u.map(([Q,xe,Ze,tt,at])=>{let Tt=!at&&typeof tt=="string",ie=new an(s(),at?new Ut({toneMapped:!1}):new Xt(Tt?{color:tt}:{}),S);ie.frustumCulled=!1,e.add(ie);for(let ye=0;ye<S;ye++)ie.setMatrixAt(ye,Me),Tt||ie.setColorAt(ye,at&&tt?tt:Ce);return{k:Q,m:ie,L:new Ft().compose(new U(...xe),new Tn,new U(...Ze))}}),X=Object.fromEntries(R.map(Q=>[Q.k,Q]));return{by:X,set(Q,xe,Ze,tt,at=0,Tt=0,ie=0,ye=1){b.setFromEuler(ae.set(Tt,at,ie)),N.compose(C.set(xe,Ze,tt),b,O.set(ye,ye,ye));for(let et of R)le.multiplyMatrices(N,et.L),et.m.setMatrixAt(Q,le)},hide(Q){for(let xe of R)xe.m.setMatrixAt(Q,Me)},paint(Q,xe,Ze){X[Q].m.setColorAt(xe,Ze)},flush(){for(let Q of R)Q.m.instanceMatrix.needsUpdate=!0,Q.m.instanceColor&&(Q.m.instanceColor.needsUpdate=!0)}}}function $(u){let S=[],R=0;for(let X=0;X<u.length;X++){let Q=u[X],xe=u[(X+1)%u.length],Ze=Math.hypot(xe[0]-Q[0],xe[1]-Q[1],xe[2]-Q[2])||.001;S.push({a:Q,b:xe,l:Ze,at:R}),R+=Ze}return{seg:S,len:R}}function Vt(u,S,R=ge){S=(S%u.len+u.len)%u.len;let X=0,Q=u.seg.length-1;for(;X<Q;){let ie=X+Q+1>>1;u.seg[ie].at<=S?X=ie:Q=ie-1}let xe=u.seg[X],Ze=(S-xe.at)/xe.l,tt=xe.b[0]-xe.a[0],at=xe.b[1]-xe.a[1],Tt=xe.b[2]-xe.a[2];return R.x=xe.a[0]+tt*Ze,R.y=xe.a[1]+at*Ze,R.z=xe.a[2]+Tt*Ze,R.yaw=Math.atan2(tt,Tt),R.pitch=-Math.atan2(at,Math.hypot(tt,Tt)),R}function nt(u,S,R,X,Q,xe,Ze=6){let tt=[],at=(Tt,ie,ye)=>{for(let et=0;et<=Ze;et++){let xt=ye+et/Ze*Math.PI/2;tt.push([Tt+Math.cos(xt)*Q,xe,ie+Math.sin(xt)*Q])}};return at(S-Q,R+Q,-Math.PI/2),at(S-Q,X-Q,0),at(u+Q,X-Q,Math.PI/2),at(u+Q,R+Q,Math.PI),tt}let ot=(u,S)=>{let R=document.createElement("canvas");R.width=u,R.height=S;let X=R.getContext("2d"),Q=new si(R);return Q.colorSpace=Jt,{c:R,g:X,tex:Q}},Fe=(u,S,R)=>{for(;u.measureText(S).width>R&&S.length>3;)S=S.slice(0,-2)+"\u2026";return S},Ht=[W(3.4,.5,1.8),W(.5,2.2,3.4),W(3.4,2.6,.5),W(2.2,.6,3.4),W(.5,3.2,1.6)],_t=["#ffd6e8","#d8fff0","#e8dcff","#ffe6cc","#d6ecff","#fff6d6","#f4f0ff","#ffc9a0"].map(t),A=["#5a5288","#4a4478","#6a5a94","#3d3a6e","#8a6a9a","#2f3a70","#8f86b8","#a49ccb"].map(t),E=["#6a6a8a","#58607e","#7a7290","#4e5a74","#8a8296"].map(t),ee=["#ffd23f","#5fc8ff","#ff9ec9","#9ff0d0","#c8a8ff","#f4f0ff","#ff6a5a","#2a2a44"].map(t),Te=["#2fa86a","#26985e","#38b874","#2c8f5a"].map(t),Ee=[],be=[],Ge=[],Ue=[];function Ne(u,S,R=1,X=0){let Q=oe(Te);Ee.push(I(u,X,S,.7*R,2.2*R,.7*R,"#6a4630"),I(u,X+2*R,S,3.4*R,1.7*R,3.4*R,Q),I(u,X+3.6*R,S,2.4*R,1.3*R,2.4*R,Q),I(u,X+4.8*R,S,1.2*R,.9*R,1.2*R,Q))}function ke(u,S,R=1,X=0){let Q=Math.round(7+P()*4),xe=(P()-.5)*.25;for(let at=0;at<Q;at++)be.push(I(u+xe*at*at*.08,X+at*.9*R,S,.7*R,.9*R,.7*R,at%2?"#8a5a3a":"#7a4e30"));let Ze=u+xe*Q*Q*.08,tt=X+Q*.9*R;for(let at=0;at<6;at++){let Tt=at/6*Xi+P()*.4;for(let ie=1;ie<=5;ie++)be.push(I(Ze+Math.cos(Tt)*ie*.8*R,tt+(ie<3?.3:-(ie-2)*.55)*R,S+Math.sin(Tt)*ie*.8*R,.75*R,.35*R,.75*R,ie%2?"#2fbf6e":"#26a85e"))}be.push(I(Ze,tt-.3,S,1.1*R,.8*R,1.1*R,"#2fbf6e"))}let st=[],me=[],Pt=[],D=[],Se=[],Ae=[],we=F?430:600,Ve=c-6;for(let u=-16;u<=16;u++)for(let S=-16;S<=16;S++){let R=y.get(u,S),X=Vl(u),Q=Vl(S),xe=Math.hypot(X,Q);if(xe>we)continue;let Ze=Math.min(1,xe/600);if(R===zt.res)for(let tt of[-10,0,10])for(let at of[-10,0,10]){if(P()<.14)continue;let Tt=X+tt+(P()-.5)*1.4,ie=Q+at+(P()-.5)*1.4;if(Tt>Ve)continue;let ye=4.6+P()*2.2,et=4.6+P()*2.2,xt=P()<.32?5.4:3.2,Ct=oe(_t);st.push(I(Tt,0,ie,ye,xt,et,Ct)),P()<.3&&st.push(I(Tt+(P()-.5),xt,ie+(P()-.5),ye*.5,1.2,et*.5,Ct)),P()<.42?D.push(I(Tt+(P()<.5?1:-1)*(ye/2+1.5),0,ie+(P()-.5)*2,2.2,.14,3,W(.16,.85,1.2))):P()<.55&&Ne(Tt+(P()<.5?1:-1)*(ye/2+1.7),ie+(P()-.5)*3,.65+P()*.3)}else if(R===zt.apt){let tt=2+Math.floor(P()*3),at=[[-8,-8],[8,-8],[-8,8],[8,8]].sort(()=>P()-.5).slice(0,tt);for(let[Tt,ie]of at){let ye=X+Tt,et=Q+ie;if(ye>Ve-2)continue;let xt=7+Math.round(P()*5),Ct=7+Math.round(P()*5),cn=9+Math.round(P()*(12+Ze*26)),li=oe(A);me.push(I(ye,0,et,xt,cn,Ct,li)),cn>18&&P()<.5&&me.push(I(ye,cn,et,xt-2,2+Math.round(P()*4),Ct-2,li)),P()<.3&&Ge.push(I(ye,cn+.05,et-Ct/2+.9,xt-1.6,.3,.3,oe(Ht)))}P()<.5&&Ne(X+(P()-.5)*6,Q+(P()-.5)*6)}else if(R===zt.ind){let tt=P()<.55;for(let at of tt?[-7.5,7.5]:[0]){let Tt=22+Math.round(P()*6),ie=tt?10:18,ye=5+Math.round(P()*4),et=oe(E);Pt.push(I(X,0,Q+at,Tt,ye,ie,et));for(let xt=-Tt/2+3;xt<Tt/2-2;xt+=4)Pt.push(I(X+xt,ye,Q+at,1.2,.45,ie-2,"#c8c4dc"))}if(P()<.55){let at=X+12,Tt=Q+(tt?0:11),ie=15+Math.round(P()*10);Pt.push(I(at,0,Tt,2,ie,2,"#8a3a4a"),I(at,ie-3,Tt,2.3,1,2.3,"#f0eaff")),Ae.push([at,ie,Tt]),Ge.push(I(at,ie,Tt,.5,.4,.5,W(4,.3,.3)))}}else if(R===zt.mall){let tt=oe(_t);me.push(I(X-2,0,Q-7,24,7,14,tt),I(X-2,7,Q-7,12,2,8,tt)),Ge.push(I(X-2,4.4,Q+.12,20,.6,.2,oe(Ht)));for(let at=0;at<3;at++)for(let Tt=0;Tt<8;Tt++)P()<.7&&Se.push(I(X-12.5+Tt*3.2,0,Q+4+at*4.4,1.5,1.1,3,oe(ee)))}else if(R===zt.park){if(u>=-3&&u<=-2&&S>=4&&S<=5)continue;for(let tt=0;tt<(F?4:8);tt++)Ne(X+(P()-.5)*26,Q+(P()-.5)*26,.8+P()*.5)}else if(R===zt.lot)X<Ve&&P()<.3&&Ne(X+(P()-.5)*20,Q+(P()-.5)*20);else if(R===zt.hwy&&P()<.5){let tt=X+(P()-.5)*24,at=Q+(P()-.5)*24;Math.abs(tt-sn.hwyX)>10&&Math.abs(at-sn.hwyZ)>10&&tt<Ve&&Ne(tt,at,.9)}}n(st,!0),n(me,!0),n(Pt,!0),n(Se),je(D);let Mt=Math.min(F?12:28,Ae.length),dt=5,pt=new an(s(),new Xt({color:"#5a4a7a",transparent:!0,opacity:.5,depthWrite:!1}),Math.max(1,Mt*dt));pt.frustumCulled=!1,e.add(pt);let fe=sn.lake,G=new vt(new ii(fe.w,fe.d).rotateX(-Math.PI/2),g);G.position.set(fe.x,.22,fe.z),e.add(G);let Ie=[I(fe.x,0,fe.z-fe.d/2-.6,fe.w+2.4,.5,1.2,"#d8d2f0"),I(fe.x,0,fe.z+fe.d/2+.6,fe.w+2.4,.5,1.2,"#d8d2f0"),I(fe.x-fe.w/2-.6,0,fe.z,1.2,.5,fe.d,"#d8d2f0"),I(fe.x+fe.w/2+.6,0,fe.z,1.2,.5,fe.d,"#d8d2f0"),I(fe.x,0,fe.z,3.4,.9,3.4,"#e8e4f4"),I(fe.x,.9,fe.z,1.2,1.4,1.2,"#e8e4f4")];for(let u=0;u<(F?14:30);u++){let S=-108+P()*64,R=144+P()*64;Math.abs(S-fe.x)<fe.w/2+3&&Math.abs(R-fe.z)<fe.d/2+3||Ne(S,R,.8+P()*.6)}n(Ie),Ge.push(I(fe.x,.95,fe.z,3.6,.1,3.6,W(.6,1.8,2.6)));let he=sn.rw,qe=sn.twz,Ke=[],Et=[];Ke.push(I(-358,0,-204,128,9,16,"#c9c3e8"),I(-358,9,-204,120,2.2,12,"#4a3a8a"));for(let u=0;u<6;u++)Ke.push(I(-262,u*4.5,-204,5.6-u*.3,4.5,5.6-u*.3,u%2?"#d8d2f0":"#bdb6e0"));Ke.push(I(-262,27,-204,9,4.6,9,"#2c3c96"),I(-262,31.6,-204,10,.9,10,"#e8e2f8"),I(-226,0,-205,30,7,16,"#7a72a8"));for(let u=0;u<5;u++)Et.push(I(-413+u*25,4.4,-217,2.4,2.4,10,"#bdb6e0"));for(let u of[-474,-446])Et.push(I(u,0,-212,24,10,22,"#8f86b8"),I(u,10,-212,18,3,22,"#a49ccb"),I(u,13,-212,10,2,22,"#b3a9d6"));for(let u=0;u<3;u++)Et.push(I(-500+u*8,0,-236,6,5,6,"#e8e4f4"));n(Ke,!0),n(Et);let ft=[];for(let u=he.x0+4;u<=he.x1-4;u+=12)for(let S of[-1,1])ft.push(I(u,0,he.z+S*(he.hw+.4),.5,.35,.5,W(3.4,3.2,2.8)));for(let u=-3;u<=3;u++)ft.push(I(he.x0+1,0,he.z+u*2.4,.5,.35,.5,W(.4,3.6,1)),I(he.x1-1,0,he.z+u*2.4,.5,.35,.5,W(3.6,.4,.4)));for(let u=he.x0+20;u<=he.x1-20;u+=16)for(let S of[-1,1])ft.push(I(u,0,qe+S*4.6,.4,.3,.4,W(.5,1,4)));ft.push(I(-262,32.5,-204,.8,.8,.8,W(.5,4,1.4)),I(-358,11.2,-204,116,.3,.2,W(.5,2.2,3.4))),je(ft);let kt=je(Array.from({length:7},(u,S)=>I(he.x0-14-S*11,0,he.z,.9,.5,.9,W(5,5,5.5)))),on=F?8:10,K=F?[7]:[7,8,9],de=yt([["body",[0,2.4,0],[2.6,2.6,21],"#f4f2fb"],["nose",[0,2.25,11.4],[2,2,1.8],"#f4f2fb"],["wing",[0,1.9,-.5],[21,.4,4.2],"#d8d4ea"],["stab",[0,3.3,-9.4],[8.2,.35,2.2],"#d8d4ea"],["fin",[0,5.5,-9],[.45,4.4,3.4],null],["engL",[-4.8,1.15,.6],[1.5,1.5,3.2],"#a8a4c4"],["engR",[4.8,1.15,.6],[1.5,1.5,3.2],"#a8a4c4"],["win",[0,2.95,.6],[2.66,.42,15],W(3,2.4,1.5),!0],["navL",[-10.5,1.95,-.5],[.5,.5,.5],W(5,.3,.3),!0],["navR",[10.5,1.95,-.5],[.5,.5,.5],W(.3,5,.9),!0],["strobe",[0,7.9,-10.4],[.45,.45,.45],W(6,6,6),!0],["bcn",[0,.95,1.5],[.6,.3,.6],W(5,.4,.3),!0]],on),pe=["#ff4f9e","#5fc8ff","#ffd23f","#8a3fe2","#2ee6a6"].map(t);for(let u=0;u<on;u++)de.paint("fin",u,pe[u%pe.length]);for(let u=0;u<5;u++)de.set(u,-410+u*25,0,-234,0);let ut=new Sl([[-470,0,he.z],[-330,0,he.z],[-240,9,he.z],[-120,36,he.z],[10,62,he.z-14],[100,80,he.z-70],[80,96,he.z-170],[-80,104,he.z-200],[-420,104,he.z-200],[-700,94,he.z-170],[-820,74,he.z-90],[-770,44,he.z-10],[-660,22,he.z],[-560,6,he.z],[-500,0,he.z]].map(u=>new U(...u)),!0,"centripetal");ut.arcLengthDivisions=800;let Qe=ut.getLength(),$e=[0,0],It=[0,0],At=[],Zt=[],Gt=-99;function hn(u){let{c:S,g:R,tex:X}=ot(560,200),Q=Ze=>{R.clearRect(0,0,560,200),R.fillStyle="rgba(6,24,52,.94)",L(R,6,6,548,150,40),R.fill(),R.beginPath(),R.moveTo(250,150),R.lineTo(280,194),R.lineTo(312,150),R.closePath(),R.fill(),R.strokeStyle="#5fc8ff",R.lineWidth=6,L(R,6,6,548,150,40),R.stroke(),R.save(),R.beginPath(),R.arc(84,81,50,0,Xi),R.clip(),Ze?R.drawImage(Ze,34,31,100,100):H(R,84,81,50,u.symbol,u.mint),R.restore(),R.textAlign="left",R.fillStyle="#5fc8ff",R.font="900 23px Inter, sans-serif",R.fillText("MIGRATED \xB7 TAKING OFF",156,58),R.fillStyle="#fff",R.font="900 42px Inter, sans-serif",R.fillText(Fe(R,"$"+u.symbol,370),156,104),R.fillStyle="rgba(200,230,255,.85)",R.font="700 22px Inter, sans-serif",R.fillText("graduated to PumpSwap",156,136),X.needsUpdate=!0};Q(null),M(u.iconUrl,Q);let xe=new Si(new ui({map:X,transparent:!0,depthTest:!1}));return xe.renderOrder=8,xe.userData={kind:"coin",key:u.mint,coin:u},e.add(xe),xe}function pn(u){!u||!u.mint||!u.symbol||At.some(S=>S.t.mint===u.mint)||Zt.some(S=>S.mint===u.mint)||(Zt.push(u),Zt.length>6&&Zt.shift())}let xn=["#c8324a","#2f6fd8","#2fa86a","#e8902f","#1fa8b8","#e8e4f4","#8a2f6a","#d8b030"].map(t),w=[I(64,-1.2,-220,36,1.8,140,"#8a86a0")],q=[];for(let u of[-36,-8,18])for(let S of[-286,-262,-238,-214,-190,-166])for(let R=0;R<4;R++)for(let X=0;X<6;X++){if(F&&(R+X)%2)continue;let Q=P()<.12?0:1+Math.floor(P()*P()*4.2);for(let xe=0;xe<Q;xe++)q.push(I(u+3.2+R*6.4,xe*2.62,S+1.35+X*2.7,6.05,2.58,2.5,oe(xn)))}let j=89;for(let u of[-252,-186]){w.push(I(j,-2.4,u,13,7,58,"#24306a"),I(j,-.4,u,13.2,1.1,58.2,"#b02a40"),I(j,-2.4,u+30.5,8,7,3,"#24306a"),I(j,4.6,u-23,12,9,7,"#f0ecfa"),I(j,13.6,u-26,3,4.5,3,"#c8324a"));for(let S=0;S<5;S++)for(let R=0;R<7;R++){let X=1+Math.floor(P()*3);for(let Q=0;Q<X;Q++)q.push(I(j+(S-2)*2.6,4.6+Q*2.62,u-16+R*6.4,2.5,2.58,6.05,oe(xn)))}}let ne=[-272,-238,-204,-170],te=[],Be=[];for(let u of ne){for(let S of[66,78])for(let R of[-1,1])te.push(I(S,.6,u+R*5,1.2,29,1.2,"#d8324a"));for(let S of[-1,1])te.push(I(72,27.6,u+S*5,13.2,1.6,1.2,"#e8e4f4"));te.push(I(82,29.6,u,50,1.8,3.6,"#e8e4f4"),I(63,31.4,u,6,3.2,5,"#d8324a"),I(66,31.4,u,1.2,12,1.2,"#d8324a"),I(86,37.15,u,41.8,.5,.5,"#e8e4f4",0,0,-.291)),Be.push(I(66,43.4,u,.7,.6,.7,W(5,.3,.3)),I(106.6,29.8,u,.6,.6,.6,W(5,.3,.3)))}let Ye=[];for(let u of[-22,4,30])for(let S of[-266,-218,-170])w.push(I(u,0,S,1,24,1,"#8a84a8")),Ye.push(I(u,24,S,3.4,.8,3.4,W(3.4,3,2.4)));n(w,!0),n(q),n(te),je(Be),je(Ye);let ct=ne.length,it=u=>{let S=new an(s(),new Xt(u?{color:u}:{}),ct);return S.frustumCulled=!1,e.add(S),S},Lt=it("#3a3654"),St=it("#1a1638"),bt=it("#ffd23f"),qt=it(null);for(let u=0;u<ct;u++)qt.setColorAt(u,xn[u*3%xn.length]);let Wt=u=>u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2;function mn(u){let S=j+2.6,R=70,X=26,Q=12.6,xe=3.2;return u<3?[S,X+(Q-X)*Wt(u/3),0]:u<4?[S,Q,u>3.5]:u<7?[S,Q+(X-Q)*Wt((u-4)/3),1]:u<10?[S+(R-S)*Wt((u-7)/3),X,1]:u<13?[R,X+(xe-X)*Wt((u-10)/3),1]:u<14?[R,xe,u<13.5]:u<16?[R,xe+(X-xe)*Wt((u-14)/2),0]:[R+(S-R)*Wt((u-16)/2),X,0]}let Zn=$(nt(50,60,-286,-154,4,.6,4)),Kt=6,mt=yt([["cab",[0,1.3,2.7],[2.3,2,1.8],"#ffd23f"],["chas",[0,.55,-.6],[2.1,.5,6.8],"#3a3654"],["box",[0,2.1,-1.1],[2.5,2.58,6],null],["lt",[0,1.1,3.62],[1.8,.25,.1],W(4,3.8,3.2),!0]],Kt);for(let u=0;u<Kt;u++)mt.paint("box",u,xn[(u*5+1)%xn.length]);let Ni=yt([["hull",[0,.5,0],[3.2,1.4,7.4],"#e8e4f4"],["cab",[0,1.9,-.6],[2.2,1.4,2.8],"#c8324a"],["lt",[0,2.8,-.6],[.4,.4,.4],W(4,3.6,2),!0]],2),We=sn.field,Jn=[],cs=[],En=[],Oi=[],un=64;for(let u=0;u<un;u++){let S=(u+.5)/un*Xi,R=Math.cos(S),X=Math.sin(S),Q=u%16===0||u%16===15;for(let xe=0;xe<7;xe++){if(Q&&xe<5)continue;let Ze=25+xe*2.3,tt=18+xe*2.3,at=We.x+R*Ze,Tt=We.z+X*tt,ie=Math.atan2(tt*R,Ze*X),ye=Math.hypot(Ze*X,tt*R)*Xi/un+.3,et=xe===6?13:1+xe*1.5;if(Jn.push(I(at,0,Tt,ye,et,2.4,xe===6?"#e8e4f4":Math.floor(u/4)%2?"#ff4f9e":"#3a5ae0",ie)),xe<6&&!Q)for(let xt of F?[0]:[-.25,.25])cs.push({x:at+Math.cos(ie)*ye*xt,y:et,z:Tt-Math.sin(ie)*ye*xt,a:S})}}for(let[u,S]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let R=We.x+u*36,X=We.z+S*28;En.push(I(R,0,X,1.4,36,1.4,"#c8c0e8")),Oi.push(I(R-u*.6,36,X-S*.6,5,2.6,1.2,W(2.1,2.1,2),Math.atan2(-u,-S)));let Q=new vt(new rr(9,1,20,1,!0).translate(0,-.5,0),new Ut({color:new De(.8,.85,1),transparent:!0,opacity:.06,blending:yi,depthWrite:!1,side:Xn}));k.set(R,37,X),J.set(We.x-u*6,0,We.z-S*4);let xe=k.distanceTo(J);Q.position.copy(k),Q.scale.set(1,xe,1),Q.quaternion.setFromUnitVectors(ue,se.subVectors(J,k).normalize()),ht.add(Q)}for(let u of[-1,1])En.push(I(We.x+u*23.5,10,We.z,1,9,15,"#1a1638"));En.push(I(We.x+41.2,13,We.z,1,13,24,"#1a1638")),n(Jn,!0),n(En),je(Oi);let wi=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#ffffff","#8a3fe2","#ff8a4a"].map(t),Nn=new an(s(),new Xt,cs.length);Nn.frustumCulled=!1,e.add(Nn),cs.forEach((u,S)=>Nn.setColorAt(S,wi[S%wi.length]));let Ln=ot(1024,512),rt=Ln.g,kr=Ln.tex,hs=null,Sn=null,Vr=null,di=-9,Oa=new Ut({map:kr,toneMapped:!1,color:new De(1.25,1.25,1.25)}),Wl=[];for(let u of[-1,1]){let S=new vt(new ii(14,7),Oa);S.position.set(We.x+u*22.9,14.5,We.z),S.rotation.y=u>0?-Math.PI/2:Math.PI/2,e.add(S),Wl.push(S)}let Ti=new vt(new ii(23,11.5),Oa);Ti.position.set(We.x+41.8,19.5,We.z),Ti.rotation.y=Math.PI/2,e.add(Ti),Ti.userData={kind:"arena"};function Ds(u,S,R,X,Q){rt.fillStyle="rgba(255,255,255,.06)",L(rt,u,S,296,168,22),rt.fill(),rt.fillStyle=Q,rt.fillRect(u+22,S+22,34,6),rt.fillStyle="rgba(220,214,255,.8)",rt.font="800 23px Inter, sans-serif",rt.textAlign="left",rt.fillText(R,u+22,S+60),rt.fillStyle="#fff",rt.font="900 76px Inter, sans-serif",rt.fillText(X,u+20,S+140)}function Fa(){let u=hs||{};rt.fillStyle="#07041a",rt.fillRect(0,0,1024,512);let S=rt.createLinearGradient(0,0,1024,0);S.addColorStop(0,"#2f3fe4"),S.addColorStop(.5,"#8a3fe2"),S.addColorStop(1,"#ff4f9e"),rt.fillStyle=S,rt.fillRect(0,0,1024,70),rt.fillStyle="#fff",rt.font="900 34px Inter, sans-serif",rt.textAlign="left",rt.fillText("VICE ARENA",30,47),rt.textAlign="right",rt.font="800 24px Inter, sans-serif",rt.fillText("\u25CF LIVE FROM PUMP.FUN",994,45),Ds(24,96,"NEW COINS / MIN",u.perMin==null?"\u2014":String(u.perMin),"#ffd23f"),Ds(364,96,"MIGRATED \xB7 YOU SAW",u.migrated==null?"\u2014":String(u.migrated),"#5fc8ff"),Ds(704,96,"MOOD",u.mood==null?"\u2014":Math.round(u.mood*100)+"%",u.mood!=null&&u.mood>=.5?"#2ee6a6":"#ff4f9e");let R=u.hot;rt.fillStyle="rgba(255,255,255,.06)",L(rt,24,290,976,196,26),rt.fill(),R?(rt.save(),rt.beginPath(),rt.arc(124,388,74,0,Xi),rt.clip(),Sn?rt.drawImage(Sn,50,314,148,148):H(rt,124,388,74,R.symbol,R.mint),rt.restore(),rt.textAlign="left",rt.fillStyle="#2ee6a6",rt.font="900 26px Inter, sans-serif",rt.fillText("#1 HOTTEST RIGHT NOW",226,352),rt.fillStyle="#fff",rt.font="900 78px Inter, sans-serif",rt.fillText(Fe(rt,"$"+R.symbol,520),222,432),rt.textAlign="right",rt.fillStyle=(R.chg||0)>=0?"#2ee6a6":"#ff4f9e",rt.font="900 64px Inter, sans-serif",rt.fillText(R.chg==null?"":(R.chg>0?"+":"")+R.chg.toFixed(1)+"%",976,420),rt.fillStyle="rgba(220,214,255,.75)",rt.font="800 22px Inter, sans-serif",rt.fillText(R.tf?"in "+R.tf:"",976,458)):(rt.textAlign="center",rt.fillStyle="rgba(255,255,255,.7)",rt.font="800 34px Inter, sans-serif",rt.fillText("Waiting for the trenches\u2026",512,400)),kr.needsUpdate=!0}Fa();function Xl(u){hs=u;let S=u&&u.hot;S&&S.mint!==Vr&&(Vr=S.mint,Sn=null,M(S.iconUrl,R=>{Vr===S.mint&&(Sn=R,Fa())})),Ti.userData=S?{kind:"coin",key:S.mint,coin:S}:{kind:"arena"},performance.now()-di>900&&(di=performance.now(),Fa())}let za=[];for(let u=0;u<9;u++){let S=-318+P()*88,R=196+P()*80;za.push(I(S,0,R,.2,4,.2,"#f4f0ff"),I(S+.6,3.1,R,1.2,.8,.1,u%2?"#ff4f6e":"#ffd23f"))}za.push(I(-240,0,188,14,5,9,"#f4f0ff"),I(-240,5,188,15,.8,10,"#3a5ae0")),n(za,!0);for(let u=0;u<(F?8:18);u++)Ne(-324+P()*100,180+P()*100,.9+P()*.5);let _n=sn.hwyX,Dt=sn.hwyZ,Kn=[],cr=[],us="#3a3654",Ai="#8a84a8",Ns="#c8c4dc",In=F?-460:-640,Os=F?460:640;for(let u=In;u<Os;u+=12)Kn.push(I(_n,7,u+6,15,1,12.1,us),I(_n-7.3,8,u+6,.4,.9,12.1,Ns),I(_n+7.3,8,u+6,.4,.9,12.1,Ns),I(_n,8,u+6,.5,.7,12.1,Ns));for(let u=In+6;u<Os;u+=24)Math.abs(u-Dt)<9||(Kn.push(I(_n,0,u,2.2,7,2.2,Ai),I(_n,6.2,u,12,.8,2.4,Ai)),Ue.push([_n,u,1.7]));for(let u=In+18;u<Os;u+=36)Kn.push(I(_n,8,u,.3,6.5,.3,"#2a2648")),cr.push(I(_n,14.4,u,2.6,.3,.7,W(3.6,2.4,1.2)));for(let u=In;u<140;u+=12)Kn.push(I(u+6,13,Dt,12.1,1,15,us),I(u+6,14,Dt-7.3,12.1,.9,.4,Ns),I(u+6,14,Dt+7.3,12.1,.9,.4,Ns),I(u+6,14,Dt,12.1,.7,.5,Ns));for(let u=In+6;u<48;u+=24)Math.abs(u-_n)<10||(Kn.push(I(u,0,Dt,2.2,13,2.2,Ai),I(u,12.2,Dt,2.4,.8,12,Ai)),Ue.push([u,Dt,1.7]));for(let u=In+18;u<140;u+=36)Kn.push(I(u,14,Dt,.3,6.5,.3,"#2a2648")),cr.push(I(u,20.4,Dt,.7,.3,2.6,W(3.6,2.4,1.2)));Kn.push(I(155,6.75,Dt,32.5,1,15,us,0,0,-.395),I(186,1.4,Dt,32,.12,12,"#2a2840"));for(let u of[56,92,128])Kn.push(I(u,-1,Dt,3,14,7,Ai)),Ue.push([u,Dt-2,2.4],[u,Dt+2,2.4]);let Fs=[72,108],Ba=[];for(let u of Fs){for(let S of[-1,1])Kn.push(I(u,-1,Dt+S*8.6,2.4,55,2.4,"#e8e4f4"));Kn.push(I(u,11.4,Dt,2.4,1.6,19.6,"#e8e4f4"),I(u,40,Dt,2,1.4,19.6,"#e8e4f4"),I(u,52.6,Dt,2.4,1.6,19.6,"#e8e4f4")),cr.push(I(u,54.2,Dt-8.6,.6,.6,.6,W(5,.3,.3)),I(u,54.2,Dt+8.6,.6,.6,.6,W(5,.3,.3)));for(let S of[-1,1])for(let R of[-1,1])for(let X=1;X<=4;X++)Ba.push([u,50-X*1.8,Dt+S*8.6,u+R*X*7.6,14.3,Dt+S*7.1])}cr.push(I(94,13.15,Dt-7.7,92,.25,.25,W(.5,2.2,3.6)),I(94,13.15,Dt+7.7,92,.25,.25,W(.5,2.2,3.6)),I(94,12.7,Dt,92,.22,10,W(2.6,.5,1.8))),n(Kn),je(cr);let Gr=new an(s(),new Ut({color:new De(1.5,1.45,1.8),toneMapped:!1}),Ba.length);Gr.frustumCulled=!1,Ba.forEach(([u,S,R,X,Q,xe],Ze)=>{k.set(u,S,R),J.set(X,Q,xe);let tt=k.distanceTo(J);b.setFromUnitVectors(re,se.subVectors(J,k).normalize()),N.compose(C.addVectors(k,J).multiplyScalar(.5),b,O.set(.16,.16,tt)),Gr.setMatrixAt(Ze,N)}),ht.add(Gr);let qi=$([[_n+3.4,8,In-12],[_n+3.4,8,Os+12],[_n-3.4,8,Os+12],[_n-3.4,8,In-12]]),Mo=$([[In-12,14,Dt+3.4],[140,14,Dt+3.4],[170,1.55,Dt+3.4],[198,1.55,Dt+3.4],[201.4,1.55,Dt],[198,1.55,Dt-3.4],[170,1.55,Dt-3.4],[140,14,Dt-3.4],[In-12,14,Dt-3.4]]),zs=F?30:64,hr=F?24:50,Bs=zs+hr,ur=yt([["body",[0,.75,0],[1.9,1.1,4.2],null],["cab",[0,1.55,-.3],[1.6,.6,2.1],"#1a1638"],["head",[0,.75,2.12],[1.5,.22,.1],W(4.5,4.2,3.6),!0],["tail",[0,.8,-2.12],[1.5,.22,.1],W(3.4,.2,.3),!0]],Bs),fs=[];for(let u=0;u<Bs;u++){let S=u<zs,R=S?qi:Mo,X=S?zs:hr,Q=S?u:u-zs,xe=P()<.16;fs.push({pa:R,d:(Q+P()*.45)/X*R.len,sc:xe?1.5:1,sp:S?24:20}),ur.paint("body",u,oe(xe?[t("#ffd23f"),t("#f4f0ff"),t("#2ee6a6")]:ee))}let Bn=sn.metro,On=Bn.y,Hn=$(nt(Bn.x0,Bn.x1,Bn.z0,Bn.z1,Bn.r,On,6)),Yi=[],Hs=[];for(let u=0;u<Hn.len;u+=6){Vt(Hn,u+3);let S=Math.cos(ge.yaw),R=Math.sin(ge.yaw);Yi.push(I(ge.x,On-1,ge.z,7.8,.9,6.4,"#5a5480",ge.yaw));for(let X of[-2.65,-1.15,1.15,2.65])Yi.push(I(ge.x+X*S,On-.1,ge.z-X*R,.22,.22,6.4,"#c8c4dc",ge.yaw));Hs.push(I(ge.x+3.95*S,On-.95,ge.z-3.95*R,.18,.26,6.4,W(3.2,.5,2),ge.yaw),I(ge.x-3.95*S,On-.95,ge.z+3.95*R,.18,.26,6.4,W(.5,2.2,3.4),ge.yaw))}for(let u=0;u<Hn.len;u+=18)Vt(Hn,u),!(ge.x>60&&Math.abs(ge.z-h)<7)&&(Yi.push(I(ge.x,0,ge.z,1.6,On-1.8,1.6,"#8a84a8",ge.yaw),I(ge.x,On-2,ge.z,7,1,1.8,"#8a84a8",ge.yaw)),Ue.push([ge.x,ge.z,1.3]));let ds=[W(3.4,.5,1.8),W(.5,2.2,3.4),W(3.4,2.6,.5),W(2.2,.6,3.4)];[[-11,Bn.z0,Math.PI/2],[Bn.x1,-20,0],[-11,Bn.z1,Math.PI/2],[Bn.x0,0,0]].forEach(([u,S,R],X)=>{let Q=Math.cos(R),xe=Math.sin(R);for(let Ze of[-5.6,5.6])Yi.push(I(u+Ze*Q,On-1.2,S-Ze*xe,3.4,1.2,26,"#bdb6e0",R));Yi.push(I(u,On+3.4,S,14.6,.5,24,"#8f86b8",R));for(let Ze of[-6.6,6.6])for(let tt of[-10,0,10])Yi.push(I(u+Ze*Q+tt*xe,On,S-Ze*xe+tt*Q,.3,3.4,.3,"#8a84a8",R));for(let Ze of[-7.3,7.3])Hs.push(I(u+Ze*Q,On+3.4,S-Ze*xe,.25,.5,24,ds[X],R))}),n(Yi),je(Hs);let Zi=5,ks=yt([["body",[0,1.7,0],[2.8,2.6,7.2],"#e8e6f4"],["roof",[0,3.15,0],[2.4,.4,6.8],"#a8a4c4"],["win",[0,2.15,0],[2.9,.7,6.4],W(2.6,2.1,1.5),!0],["stripe",[0,1.05,0],[2.9,.28,7],null,!0]],Zi*2);for(let u=0;u<Zi*2;u++)ks.paint("stripe",u,u<Zi?W(3.4,.5,1.8):W(.5,2.2,3.4));let Fn=sn.isle,ps=[],ms=[],gs=[];for(let u=-Fn.r+1;u<Fn.r;u+=2){let S=Math.sqrt(Fn.r*Fn.r-u*u);ps.push(I(Fn.x,-1.4,Fn.z+u,S*2,2.2,2.05,"#e8cc98")),S>6&&ps.push(I(Fn.x-.5,.8,Fn.z+u,(S-4.5)*2,.6,2.05,"#2fa86a"))}for(let u=0;u<8;u++){let S=u/8*Xi+.3,R=Fn.x+Math.cos(S)*25,X=Fn.z+Math.sin(S)*24;if(R<Fn.x-12&&Math.abs(X-Dt)<16)continue;let Q=oe(_t),xe=Math.PI/2-S;ms.push(I(R,1.4,X,11,3.6,8,"#f4f2fb",xe),I(R-Math.cos(S)*1.2,5,X-Math.sin(S)*1.2,7,3.2,6,Q,xe)),Ge.push(I(R+Math.cos(S)*7.5,1.42,X+Math.sin(S)*7.5,6,.16,3,W(.16,.9,1.3),xe)),ke(R+Math.cos(S+1.1)*8,X+Math.sin(S+1.1)*8,.9,1.4),F||ke(R+Math.cos(S-1.1)*8,X+Math.sin(S-1.1)*8,.8,1.4)}for(let u of[-.7,0,.7]){let S=Math.PI/2-u,R=Fn.x+Math.cos(u)*45,X=Fn.z+Math.sin(u)*45,Q=-Math.sin(u)*3.2,xe=Math.cos(u)*3.2;ps.push(I(R,-.2,X,2.2,.6,12,"#9a6a48",S)),gs.push(I(R+Q,-.4,X+xe,2.8,1.8,9,"#f4f2fb",S),I(R+Q,1.4,X+xe,2,1.2,4.4,"#2a2648",S))}for(let[u,S,R]of[[246,-30,7],[236,-152,9],[178,236,6]]){for(let X=-R+1;X<R;X+=2){let Q=Math.sqrt(R*R-X*X);ps.push(I(u,-1.4,S+X,Q*2,2.1,2.05,"#e8cc98"))}ke(u+1,S,.9,.7),R>7&&ke(u-2,S+2,.7,.7)}n(ps),n(ms,!0),n(gs);let pi=new zn;e.add(pi);let Ha=[I(0,-3,0,16,9,90,"#f4f2fb"),I(0,1.8,0,16.2,.8,90.2,"#2f3fe4"),I(0,-3,47,11,9,5,"#f4f2fb"),I(0,-3,51,6,8.6,3,"#f4f2fb")];for(let u=0;u<6;u++)Ha.push(I(0,6+u*2.8,-5-u*2,14.4-u*1.3,2.8,72-u*9,u%2?"#e8e6f4":"#fbfaff"));Ha.push(I(0,22.8,-26,5,8,7,"#c8324a"),I(0,22.8,18,11,2.6,6,"#e8e6f4")),lt(Ha,pi);let ka=[I(0,30.8,-26,5.2,.5,7.2,W(3.4,1,.6))];for(let u=0;u<6;u++){let S=14.4-u*1.3,R=72-u*9,X=-5-u*2,Q=6+u*2.8;for(let xe of[-1,1])ka.push(I(xe*(S/2+.06),Q+1,X,.1,.55,R-3,W(2.6,2,1.3)),I(xe*(S/2+.1),Q+2.6,X,.18,.18,R,u%2?W(3.2,.5,1.8):W(.5,2.2,3.4)))}for(let u of[-1,1])ka.push(I(u*8.06,-.6,0,.1,.5,84,W(2.4,1.9,1.2)));je(ka,pi);let kn=0,fr=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#ff8a4a","#c8a8ff","#f4f0ff"].map(t),dr=[];for(let u=-o+12.8;u<o-4;u+=9)for(let S of[58.4,64.4]){if(Math.abs(u-h)<7||Math.abs(u+40)<6||Math.abs(u-52)<6||P()<.3)continue;let R=u+(P()-.5)*1.5,X=oe(fr);dr.push(I(S,0,R,.2,2.8,.2,"#f4f0ff"),I(S,2.6,R,2.8,.3,2.8,X),I(S,2.9,R,1.5,.3,1.5,X),I(S+1.7,0,R+.3,1.1,.06,2.1,oe(fr)))}for(let u of[-57.5,-21.5,14.5,59.5]){let R=oe(_t);for(let X of[-.9,.9])for(let Q of[-.9,.9])dr.push(I(66.6+X,0,u+Q,.3,2.8,.3,"#f4f0ff"));dr.push(I(66.6,2.8,u,2.6,2,2.6,R),I(66.6,4.8,u,3.2,.3,3.2,"#ff4f6e"),I(66.6+1.3,4.8,u,.12,2.4,.12,"#f4f0ff"),I(66.6+1.8,6.5,u,1,.6,.08,"#ff4f6e"))}for(let u of[-40,52])dr.push(I(62,0,u-4,.2,2.6,.2,"#f4f0ff"),I(62,0,u+4,.2,2.6,.2,"#f4f0ff"),I(62,1.8,u,.06,.8,8,"#e8e4f4"));n(dr);let Wr=yt([["hull",[0,.45,0],[1.1,.6,2.6],null],["seat",[0,.9,-.3],[.6,.35,1.2],"#1a1638"],["rider",[0,1.5,-.1],[.5,.9,.4],null],["head",[0,2.15,-.1],[.36,.36,.36],"#f0c9a0"]],4),Xr=[[150,-48,12,18,.32,0],[158,-30,10,14,.38,2],[150,44,13,16,.3,4],[160,62,9,12,.36,1]];Xr.forEach((u,S)=>{Wr.paint("hull",S,oe(fr)),Wr.paint("rider",S,oe(fr))});let qr=yt([["hull",[0,.5,0],[2.4,1.2,6.6],"#f4f2fb"],["cab",[0,1.5,-.6],[1.8,1,2.2],"#2a2648"]],1),xs=yt([["c1",[-2.6,-.5,0],[2.4,.4,2.6],"#ff4f9e"],["c2",[0,0,0],[3,.4,2.6],"#ffd23f"],["c3",[2.6,-.5,0],[2.4,.4,2.6],"#5fc8ff"],["man",[0,-4.6,0],[.5,1,.4],"#2a2648"]],1),Yr=new an(s(),new Ut({color:new De(.8,.8,.9)}),2);Yr.frustumCulled=!1,e.add(Yr);let _s=[];{for(let S=0;S<=16;S++){let R=-300+S/16*360;_s.push([88,30,R])}for(let S=1;S<16;S++){let R=Math.PI-S/16*Math.PI;_s.push([128+Math.cos(R)*40,30,60+Math.sin(R)*40])}for(let S=0;S<=16;S++)_s.push([168,30,60-S/16*360]);for(let S=1;S<16;S++){let R=-S/16*Math.PI;_s.push([128+Math.cos(R)*40,30,-300+Math.sin(R)*40])}}let ri=$(_s),Va=yt([["body",[0,0,0],[1,1,6.4],"#f4f2fb"],["wing",[0,.3,.6],[10,.22,1.5],"#ff4f9e"],["stab",[0,.5,-2.9],[3,.18,.9],"#ff4f9e"],["fin",[0,1.1,-2.9],[.16,1.3,1],"#ff4f9e"],["prop",[0,0,3.3],[1.8,1.8,.06],W(.5,.5,.6),!0],["nav",[0,-.6,0],[.3,.3,.3],W(5,.4,.4),!0]],1),Ri=ot(1024,236),Ga=Ri.tex,wt=new Ut({map:Ga,toneMapped:!1,color:new De(1.15,1.15,1.15)}),$n=new vt(new ii(26,6),wt),Vs=new vt(new ii(26,6),wt);e.add($n),e.add(Vs);let Ji=null,pr=null;function Zr(){let u=Ri.g,S=Ji;if(u.fillStyle="#ff4f9e",u.fillRect(0,0,1024,236),u.fillStyle="#fff6fb",u.fillRect(10,10,1004,216),!S){u.fillStyle="#2a1270",u.font="900 92px Inter, sans-serif",u.textAlign="center",u.fillText("VICE \xB7 THE TRENCHES",512,150),Ga.needsUpdate=!0;return}u.save(),u.beginPath(),u.arc(118,118,88,0,Xi),u.clip(),pr?u.drawImage(pr,30,30,176,176):H(u,118,118,88,S.symbol,S.mint),u.restore(),u.textAlign="left",u.fillStyle="#ff2f8e",u.font="900 34px Inter, sans-serif",u.fillText("#1 TRENDING ON PUMP.FUN",232,68),u.fillStyle="#1a0a50",u.font="900 112px Inter, sans-serif",u.fillText(Fe(u,"$"+S.symbol,540),226,186),u.textAlign="right",u.fillStyle=(S.chg||0)>=0?"#10a070":"#e0306a",u.font="900 64px Inter, sans-serif",u.fillText(S.chg==null?"":(S.chg>0?"+":"")+S.chg.toFixed(0)+"%",1e3,120),u.fillStyle="#5a4a90",u.font="800 28px Inter, sans-serif",u.fillText(S.tf?"in "+S.tf:"",1e3,172),Ga.needsUpdate=!0}Zr();function Jr(u){if(!u)return;let S=Ji&&Ji.mint===u.mint;S&&Ji.chg===u.chg||(Ji=u,$n.userData=Vs.userData={kind:"coin",key:u.mint,coin:u},S||(pr=null,M(u.iconUrl,R=>{Ji&&Ji.mint===u.mint&&(pr=R,Zr())})),Zr())}let mr=Yr,jn=ot(256,256),Yt=jn.g;{let u=Yt.createRadialGradient(128,128,6,128,128,128);u.addColorStop(0,"rgba(255,244,252,1)"),u.addColorStop(.33,"rgba(255,232,248,1)"),u.addColorStop(.37,"rgba(255,170,224,.42)"),u.addColorStop(.6,"rgba(190,120,255,.14)"),u.addColorStop(1,"rgba(120,80,255,0)"),Yt.fillStyle=u,Yt.fillRect(0,0,256,256);for(let[S,R,X]of[[112,108,9],[146,134,7],[118,150,5],[140,100,4]])Yt.fillStyle="rgba(232,196,236,.5)",Yt.beginPath(),Yt.arc(S,R,X,0,Xi),Yt.fill();jn.tex.needsUpdate=!0}let ai=new Si(new ui({map:jn.tex,transparent:!0,depthWrite:!1,toneMapped:!1,color:new De(1.7,1.6,1.7)}));ai.userData.keep=!0,ai.position.copy(Le(.82,.3,-.49).normalize().multiplyScalar(2100)),ai.scale.setScalar(360),ai.renderOrder=-1,e.add(ai);let Gs=[],gr=["#6a4a9a","#7a5aa8","#5a3a8a","#8a6ab8"].map(t);for(let u=0;u<(F?8:18);u++){let S=P()*Xi,R=280+P()*700,X=Math.cos(S)*R,Q=Math.sin(S)*R,xe=160+P()*90,Ze=7+Math.floor(P()*6);for(let tt=0;tt<Ze;tt++)Gs.push({x:X+(P()-.5)*40,y:xe+(P()-.5)*6,z:Q+(P()-.5)*22,w:10+P()*14,h:3+P()*3,d:8+P()*10,c:oe(gr)})}let An=new an(s(),new Xt({emissive:new De("#2a1450"),transparent:!0,opacity:.6,depthWrite:!1}),Gs.length);An.frustumCulled=!1,e.add(An),Gs.forEach((u,S)=>An.setColorAt(S,u.c));let Fi=new vt(s(),new Ut({color:new De(4,3.8,4.4),toneMapped:!1,transparent:!0,opacity:0,depthWrite:!1}));e.add(Fi);let vs=6,Ki=0,Kr=new U,$t=new U,vn=u=>-o+u*a-2,Eo=[],So=[],xr=[];for(let u=1;u<l;u++)for(let S=1;S<=l;S++){let R=vn(u),X=vn(S);R>c-3||(Eo.push(I(R+2.5,0,X+2.5,.26,6,.26,"#2a2648"),I(R+1.9,5.85,X+1.9,1.5,.16,.16,"#2a2648",-Math.PI/4),I(R-2.5,0,X-2.5,.22,4.4,.22,"#1a1830"),I(R-2.5,4.2,X-2.5,.7,1.1,.7,"#141226")),So.push(I(R+1.35,5.62,X+1.35,.9,.24,.9,W(3.6,2.4,1.2))),xr.push([R-2.5,X-2.5,P()*10]))}let _r=[];for(let u of f)u.big&&_r.push(I(u.x+u.w/2-.4,u.y,u.z+u.d/2-.4,.45,.45,.45,W(4,.3,.35)),I(u.x-u.w/2+.4,u.y,u.z-u.d/2+.4,.45,.45,.45,W(4,.3,.35)));for(let[u,S,R]of p)_r.push(I(u,S,R,.5,.5,.5,W(4,.3,.35)));let $r=f.filter(u=>!u.big&&u.y>=8&&u.x<c-14),$i=[],Ws=[];for(let u=0;u<Math.min(F?18:40,$r.length);u++){let S=$r[Math.floor(P()*$r.length)],R=P()<.5?1:-1,X=3+P()*4,Q=2.4+P()*2;P()<.5?$i.push(I(S.x+R*(S.w/2+.3),Q,S.z+(P()-.5)*(S.d-3),.3,X,1,oe(Ht))):$i.push(I(S.x+(P()-.5)*(S.w-3),Q,S.z+R*(S.d/2+.3),1,X,.3,oe(Ht)))}for(let u of $r)if(P()<.12){let S=u.x+(P()-.5)*(u.w-4),R=u.z+(P()-.5)*(u.d-4);for(let X of[-.8,.8])for(let Q of[-.8,.8])Ws.push(I(S+X,u.y,R+Q,.25,1.6,.25,"#5a3a28"));Ws.push(I(S,u.y+1.6,R,2.4,2.6,2.4,"#8a5a3a"),I(S,u.y+4.2,R,1.6,.6,1.6,"#6a4630"))}n(Eo),n(Ws),je(So);let Xs=je(xr.map(([u,S])=>I(u,5.3,S,.55,.14,.55,W(.3,3,1))),e),vr=je(_r,e),Wa=je($i),bo=$i.map(u=>u.c.clone());je(Ge);let ji=x.x,mi=x.z,oi=ji-1.6,Qn=mi+1.6,Qi=ji+4.6,ys=mi-4.6,jr=22,Ot=66,fn=[I(ji,0,mi,13.4,.1,13.4,"#6a5040")];for(let u of[-1,1])fn.push(I(ji+u*6.7,0,mi,.15,1.4,13.4,"#ff8a3a"),I(ji,0,mi+u*6.7,13.4,1.4,.15,"#ff8a3a"));for(let u=0;u<3;u++)fn.push(I(Qi-.2,u*.7,mi+4.4,3,.6,3,"#a8a2c4"));fn.push(I(Qi,0,ys,1.6,Ot,1.6,"#ffd23f"));for(let u=4;u<Ot;u+=4)fn.push(I(Qi,u,ys,1.8,.3,1.8,"#e0b020"));n(fn);let Qt=[];for(let u=0;u<jr;u++){let S=u*2.6;Qt.push(I(oi,S+2.1,Qn,9.4,.5,9.4,"#b8b2d4"),I(oi,S,Qn,3,2.1,3,"#9a94b8"));for(let R of[-1,1])for(let X of[-1,1])Qt.push(I(oi+R*4.2,S,Qn+X*4.2,.5,2.1,.5,"#8a84a8"))}let ln=n(Qt,!1,!1),bn=3,gi=0,gt=0,es=-1;ln.count=bn*6;let Ci=new vt(s(),new Ut({color:new De(4,3.4,2.2),toneMapped:!1}));Ci.scale.set(9.6,.25,.25),e.add(Ci);let Ms=new zn;Ms.position.set(Qi,Ot,ys),e.add(Ms);let Qr=new Xt({color:"#ffd23f"}),qs=new Xt({color:"#8a84a8"}),yr=new Xt({color:"#2a2648"}),Pi=(u,S,R,X,Q,xe,Ze)=>{let tt=new vt(s(),u);return tt.scale.set(S,R,X),tt.position.set(Q,xe,Ze),Ms.add(tt),tt};Pi(Qr,30,1.2,1.2,9,1.2,0),Pi(Qr,9,1,1,-8.5,1.2,0),Pi(qs,3,2.6,2.4,-11.5,.6,0),Pi(yr,2.4,2.4,2.4,0,-.6,1.6),Pi(Qr,.8,6,.8,0,4.2,0);let ea=Pi(yr,1.6,.7,1.6,10,.3,0),wo=Pi(yr,.12,1,.12,10,-5,0),ts=Pi(qs,1.2,.8,1.2,10,-10,0),ns=Pi(new Xt({color:"#b8b2d4"}),3,.6,3,10,-11,0),Mr=new vt(s(),new Ut({color:new De(5,.3,.3),toneMapped:!1}));Mr.scale.setScalar(.5),Mr.position.set(23.8,1.9,0),Ms.add(Mr);let To=(u,S)=>Math.atan2(-(S-ys),u-Qi),Er=[Qi-.2,mi+4.4],Ys=To(Er[0],Er[1]),Sr=Math.hypot(Er[0]-Qi,Er[1]-ys),m=To(oi,Qn),_=Math.hypot(oi-Qi,Qn-ys),T=ot(512,220),z=-9,Z=new Si(new ui({map:T.tex,transparent:!0}));Z.position.set(ji+3.8,8.5,mi+4.6),Z.scale.set(7.6,3.25,1),e.add(Z);function V(){let u=T.g;u.clearRect(0,0,512,220),u.fillStyle="rgba(10,5,32,.92)",L(u,6,6,500,208,28),u.fill(),u.strokeStyle="#ffd23f",u.lineWidth=5,L(u,6,6,500,208,28),u.stroke(),u.textAlign="center",u.fillStyle="#ffd23f",u.font="900 24px Inter, sans-serif",u.fillText(es>=0?"TOPPED OUT \xB7 A NEW ONE STARTS":"VICE TOWER \xB7 1 FLOOR PER LAUNCH",256,54),u.fillStyle="#fff",u.font="900 76px Inter, sans-serif",u.fillText(gt.toLocaleString("en-US"),256,138),u.fillStyle="rgba(220,214,255,.85)",u.font="800 22px Inter, sans-serif",u.fillText("pump.fun launches since you arrived",256,182),T.tex.needsUpdate=!0}V();function Y(){gi++,gt++,performance.now()-z>700&&(z=performance.now(),V())}let Pe=d.position,ze=0,B=0,ce=0,ve=!1;function Xe(u,S){de.by.strobe.m.material.color.setScalar(Math.sin(S*9)>.7?1:.04),de.by.bcn.m.material.color.setScalar(Math.sin(S*3.1)>.2?1:.05);for(let ie=0;ie<2;ie++){let ye=Math.min(.99999,Math.max(0,((S*34/Qe+ie*.5)%1+1)%1));ut.getPointAt(ye,k),ut.getTangentAt(ye,J);let et=Math.atan2(J.x,J.z),xt=-Math.asin(Math.max(-1,Math.min(1,J.y))),Ct=et-$e[ie];Ct=Math.atan2(Math.sin(Ct),Math.cos(Ct)),$e[ie]=et,It[ie]+=(Math.max(-.6,Math.min(.6,-Ct/Math.max(u,.001)*.9))-It[ie])*Math.min(1,u*3),de.set(5+ie,k.x,Math.max(0,k.y),k.z,et,xt,It[ie])}if(Zt.length&&S-Gt>7){let ie=K.find(ye=>!At.some(et=>et.slot===ye));if(ie!=null){let ye=Zt.shift();At.push({t:ye,slot:ie,s:0,v:0,sp:hn(ye)}),Gt=S}}for(let ie=At.length-1;ie>=0;ie--){let ye=At[ie];ye.v=Math.min(62,ye.v+6.5*u),ye.s+=ye.v*u;let et=Math.max(0,ye.s-170),xt=he.x0+22+ye.s,Ct=Math.min(320,et*.22);de.set(ye.slot,xt,Ct,he.z,Math.PI/2,-Math.min(.21,et*.006)),ye.sp.position.set(xt,Ct+10,he.z);let cn=Math.max(.42,Math.min(3.2,Pe.distanceTo(ye.sp.position)/90));ye.sp.scale.set(10.8*cn,3.86*cn,1),xt>1150&&(de.hide(ye.slot),e.remove(ye.sp),ye.sp.material.map.dispose(),ye.sp.material.dispose(),At.splice(ie,1))}de.flush();{let ie=Math.floor(S*14)%9;for(let ye=0;ye<7;ye++)kt.setColorAt(ye,Re.setScalar(ye===6-ie?6:.04));kt.instanceColor.needsUpdate=!0}for(let ie=0;ie<ct;ie++){let ye=ne[ie],[et,xt,Ct]=mn((S+ie*4.5)%18);N.compose(C.set(et,28.8,ye),b.identity(),O.set(3.4,1.6,4.4)),Lt.setMatrixAt(ie,N);let cn=28,li=xt+.5;N.compose(C.set(et,(cn+li)/2,ye),b,O.set(.14,Math.max(.01,cn-li),.14)),St.setMatrixAt(ie,N),N.compose(C.set(et,xt+.25,ye),b,O.set(2.9,.5,6.3)),bt.setMatrixAt(ie,N),Ct?N.compose(C.set(et,xt-1.29,ye),b,O.set(2.5,2.58,6.05)):N.copy(Me),qt.setMatrixAt(ie,N)}Lt.instanceMatrix.needsUpdate=St.instanceMatrix.needsUpdate=bt.instanceMatrix.needsUpdate=qt.instanceMatrix.needsUpdate=!0;for(let ie=0;ie<Kt;ie++)Vt(Zn,S*8+ie/Kt*Zn.len),mt.set(ie,ge.x,.6,ge.z,ge.yaw);mt.flush();for(let ie=0;ie<2;ie++){let ye=S*.09+ie*Math.PI,et=124+Math.cos(ye)*14,xt=-220+Math.sin(ye)*52,Ct=Math.atan2(-Math.sin(ye)*14,Math.cos(ye)*52);Ni.set(ie,et,.1+Math.sin(S*1.6+ie)*.12,xt,Ct),Math.random()<u*6&&v(C.set(et-Math.sin(Ct)*3.6,.5,xt-Math.cos(Ct)*3.6),se.set((Math.random()-.5)*1.4,.6,(Math.random()-.5)*1.4),[2.2,2.4,2.8],1,.3,2.5)}Ni.flush();for(let ie=0;ie<Bs;ie++){let ye=fs[ie];ye.d+=ye.sp*u,Vt(ye.pa,ye.d),ur.set(ie,ge.x,ge.y,ge.z,ge.yaw,ge.pitch,0,ye.sc)}ur.flush();{let ie=S*15,ye=-S*15+Hn.len/2;for(let et=0;et<Zi;et++){Vt(Hn,ie-et*7.7);let xt=Math.cos(ge.yaw),Ct=Math.sin(ge.yaw);ks.set(et,ge.x+1.9*xt,On-.1,ge.z-1.9*Ct,ge.yaw),Vt(Hn,ye+et*7.7),xt=Math.cos(ge.yaw),Ct=Math.sin(ge.yaw),ks.set(Zi+et,ge.x-1.9*xt,On-.1,ge.z+1.9*Ct,ge.yaw+Math.PI)}ks.flush()}Xr.forEach(([ie,ye,et,xt,Ct,cn],li)=>{let Es=S*Ct+cn,Xa=ie+et*Math.sin(Es),qa=ye+xt*Math.sin(2*Es),Ao=et*Ct*Math.cos(Es),zf=2*xt*Ct*Math.cos(2*Es),ql=Math.atan2(Ao,zf);Wr.set(li,Xa,.1+Math.abs(Math.sin(S*5+li))*.12,qa,ql,-.05,Math.max(-.4,Math.min(.4,-Math.sin(2*Es)*.4))),Math.random()<u*12&&v(C.set(Xa-Math.sin(ql)*1.4,.45,qa-Math.cos(ql)*1.4),se.set((Math.random()-.5)*1.6,.9+Math.random()*.6,(Math.random()-.5)*1.6),[2.4,2.6,3],.8,.26,2.6)}),Wr.flush();{let ie=S*.06,ye=186+Math.sin(ie)*10,et=-10+Math.sin(ie*2)*70,xt=Math.cos(ie)*10,Ct=Math.cos(ie*2)*140,cn=Math.atan2(xt,Ct),li=Math.sin(cn),Es=Math.cos(cn);qr.set(0,ye,.1,et,cn),qr.flush();let Xa=ye-li*26,qa=24+Math.sin(S*.7)*1.2,Ao=et-Es*26;xs.set(0,Xa,qa,Ao,cn,0,Math.sin(S*.9)*.08),xs.flush(),k.set(ye-li*3,1.4,et-Es*3),J.set(Xa,qa-4,Ao),b.setFromUnitVectors(re,se.subVectors(J,k).normalize()),N.compose(C.addVectors(k,J).multiplyScalar(.5),b,O.set(.07,.07,k.distanceTo(J))),Yr.setMatrixAt(0,N),Math.random()<u*8&&v(C.set(ye-li*3.4,.5,et-Es*3.4),se.set((Math.random()-.5)*1.4,.7,(Math.random()-.5)*1.4),[2.2,2.4,2.8],1,.3,2.5)}{let ie=S*16;Vt(ri,ie);let ye=ge.x,et=ge.z,xt=ge.yaw;Va.set(0,ye,30+Math.sin(S*.8)*.6,et,xt,0,0),Va.flush(),Vt(ri,ie-27,He);let Ct=29.4+Math.sin(S*.8-.4)*.6;$n.position.set(He.x,Ct,He.z),$n.rotation.set(0,He.yaw-Math.PI/2,Math.sin(S*2.2)*.03),Vs.position.copy($n.position),Vs.rotation.set(0,He.yaw+Math.PI/2,-Math.sin(S*2.2)*.03),Vt(ri,ie-14,He),k.set(ye-Math.sin(xt)*3.2,30,et-Math.cos(xt)*3.2),J.set(He.x,Ct+.4,He.z),b.setFromUnitVectors(re,se.subVectors(J,k).normalize()),N.compose(C.addVectors(k,J).multiplyScalar(.5),b,O.set(.06,.06,k.distanceTo(J))),mr.setMatrixAt(1,N),mr.instanceMatrix.needsUpdate=!0}{let ie=-26*Math.sin(kn),ye=420*Math.cos(kn);kn+=u*6/Math.max(1,Math.hypot(ie,ye));let et=300+26*Math.cos(kn),xt=420*Math.sin(kn),Ct=Math.atan2(ie,ye);pi.position.set(et,Math.sin(S*.5)*.15,xt),pi.rotation.y=Ct,Math.random()<u*10&&v(C.set(et-Math.sin(Ct)*46+(Math.random()-.5)*8,.6,xt-Math.cos(Ct)*46),se.set((Math.random()-.5)*2,.8,(Math.random()-.5)*2),[2.2,2.4,2.8],1.4,.45,2)}if((ze=(ze+1)%2)===0){let ie=S*2.1;cs.forEach((ye,et)=>{let xt=Math.max(0,Math.sin(ye.a*2-ie))**6*.9;N.compose(C.set(ye.x,ye.y+.5+xt,ye.z),b.identity(),O.set(.55,.9,.55)),Nn.setMatrixAt(et,N)}),Nn.instanceMatrix.needsUpdate=!0}for(let ie=0;ie<xr.length;ie++){let ye=(S+xr[ie][2])%10;Xs.setColorAt(ie,ye<4.2?Re.setRGB(.3,3.4,1.1):ye<5?Re.setRGB(3.6,2.4,.3):Re.setRGB(3.6,.3,.35))}Xs.instanceColor.needsUpdate=!0,vr.material.color.setScalar(Math.sin(S*2.6)>.35?1:.07);for(let ie=0;ie<$i.length;ie+=5){let ye=(S*1.7+ie*.37)%7,et=ye>3.1&&ye<3.2||ye>3.35&&ye<3.5?.15:1;Wa.setColorAt(ie,Re.copy(bo[ie]).multiplyScalar(et))}Wa.instanceColor.needsUpdate=!0;for(let ie=0;ie<Mt;ie++){let[ye,et,xt]=Ae[ie];for(let Ct=0;Ct<dt;Ct++){let cn=(S*.15+Ct/dt+ie*.37)%1,li=(.9+cn*3.4)*(cn>.85?(1-cn)/.15:1);N.compose(C.set(ye+cn*8,et+.8+cn*16,xt+cn*2.5),b.setFromEuler(ae.set(cn*2,ie+cn,0)),O.setScalar(Math.max(.01,li))),pt.setMatrixAt(ie*dt+Ct,N)}}if(pt.instanceMatrix.needsUpdate=!0,Gs.forEach((ie,ye)=>{ie.x+=u*3,ie.x>1e3&&(ie.x-=2e3),N.compose(C.set(ie.x,ie.y,ie.z),b.identity(),O.set(ie.w,ie.h,ie.d)),An.setMatrixAt(ye,N)}),An.instanceMatrix.needsUpdate=!0,vs-=u,vs<=0){vs=9+Math.random()*12,Ki=1;let ie=Math.random()*Xi;$t.set(Math.cos(ie)*1500,420+Math.random()*200,Math.sin(ie)*1500),Kr.set(Math.cos(ie+2)*900,-160,Math.sin(ie+2)*900)}for(Ki>0?(Ki=Math.max(0,Ki-u*1.6),$t.addScaledVector(Kr,u),Fi.position.copy($t),b.setFromUnitVectors(re,se.copy(Kr).normalize()),Fi.quaternion.copy(b),Fi.scale.set(1.4,1.4,70),Fi.material.opacity=Ki,Fi.visible=!0):Fi.visible=!1,B+=u*(F?14:30);B>=1;)B--,v(C.set(fe.x+(Math.random()-.5)*.4,2.2,fe.z+(Math.random()-.5)*.4),se.set((Math.random()-.5)*2.4,11+Math.random()*4,(Math.random()-.5)*2.4),[1.3,2.2,3.2],1.6,.3,.4);ce+=u;let R=ce%9,X=bn*2.6,Q=Math.max(X,4)+6,xe=Ys,Ze=Sr,tt=Q,at=!1;if(R<1.6)tt=Q+(2.4-Q)*Wt(R/1.6);else if(R<2.1)tt=2.4,at=R>1.85;else if(R<3.6)tt=2.4+(Q-2.4)*Wt((R-2.1)/1.5),at=!0;else if(R<5.6){let ie=Wt((R-3.6)/2);xe=Ys+(m-Ys)*ie,Ze=Sr+(_-Sr)*ie,at=!0}else if(R<6.6)xe=m,Ze=_,tt=Q+(X+.55-Q)*Wt(R-5.6),at=!0;else if(R<7)xe=m,Ze=_,tt=X+.55,at=R<6.8;else if(R<8)xe=m,Ze=_,tt=X+.55+(Q-X-.55)*Wt(R-7);else{let ie=Wt(R-8);xe=m+(Ys-m)*ie,Ze=_+(Sr-_)*ie}if(R>=6.8&&R<7&&!ve&&(ve=!0,es<0&&gi>0)){let ie=Math.min(gi,3);gi-=ie,bn=Math.min(jr,bn+ie),ln.count=bn*6;for(let ye=0;ye<26;ye++)v(C.set(oi+(Math.random()-.5)*8,bn*2.6+1,Qn+(Math.random()-.5)*8),se.set((Math.random()-.5)*6,3+Math.random()*5,(Math.random()-.5)*6),[3.6,2.6,.5],1,.4,1.6);if(bn>=jr){es=S,V();for(let ye=0;ye<120;ye++){let et=Math.random()*Xi,xt=Math.acos(2*Math.random()-1),Ct=14+Math.random()*8;v(C.set(oi,bn*2.6+4,Qn),se.set(Math.sin(xt)*Math.cos(et)*Ct,Math.abs(Math.cos(xt))*Ct+4,Math.sin(xt)*Math.sin(et)*Ct),ye%3?[3.6,2.6,.5]:[3.4,.6,2],1.8,.7,1.4)}}}R<6.8&&(ve=!1),es>=0&&S-es>7&&(es=-1,bn=3,ln.count=bn*6,V());let Tt=Ot-tt;Ms.rotation.y=xe,ea.position.x=Ze,wo.position.set(Ze,-(Tt-1)/2,0),wo.scale.y=Math.max(.1,Tt-1),ts.position.set(Ze,-Tt+.6,0),ns.position.set(Ze,-Tt-.2,0),ns.visible=at,Ci.position.set(oi,X+.4,Qn),Mr.visible=Math.sin(S*3)>0}return{step:Xe,takeoff:pn,setBanner:Jr,setArena:Xl,launched:Y,shots:{site:()=>[Le(ji+34,62,mi-52),Le(oi,Math.max(12,bn*2.6*.55),Qn)],airport:()=>[Le(-232,30,-214),Le(-350,6,-280)],arena:()=>[Le(We.x+44,66,We.z+64),Le(We.x,4,We.z)],port:()=>[Le(130,46,-122),Le(52,8,-222)],bridge:()=>[Le(26,36,176),Le(108,22,122)],beach:()=>{let u=$n.position,S=u.x<128;return[Le(u.x+(S?-46:-40),38,u.z+(S?-30:30)),Le(u.x,27,u.z)]}},glowG:ht,tower:()=>({x:oi,y:bn*2.6,z:Qn}),bannerPos:()=>$n.position,posts:Ue,pickables:()=>{let u=[$n,Vs,Ti];for(let S of At)u.push(S.sp);return u}}}var ls=(i,e,t)=>Math.max(e,Math.min(t,i)),Gl=(i,e,t)=>{let n=ls((t-i)/(e-i),0,1);return n*n*(3-2*n)},jx=(i,e,t)=>{let n=e-i;return n=Math.atan2(Math.sin(n),Math.cos(n)),i+n*t};function Of(i){let{scene:e,cam:t,canvas:n,target:s,HALF:r,PITCH:o,BLK:a,BEACH_X:l,zones:c,homeLot:h,WHEEL:f,helis:p,cars:x,more:y,mobile:v,hotMint:g}=i,d=new Us(1,1,1),L=new zn;e.add(L);let M=K=>new Xt({color:K}),H=(K,de,pe)=>new Ut({color:new De(K,de,pe),toneMapped:!1}),P=(K,de,pe,ut,Qe,$e,It)=>{let At=new vt(d,K);return At.scale.set(de,pe,ut),At.position.set(Qe,$e,It),L.add(At),At},F=M("#ff2f8e"),N=M("#160c3a");P(F,2.3,.62,4.8,0,.72,0),P(F,2.1,.26,1.5,0,1.12,1.35),P(N,1.92,.62,2.2,0,1.3,-.35),P(F,1.98,.12,2.1,0,1.66,-.35),P(M("#1a1030"),2.3,.12,.5,0,1.3,-2.3),P(M("#1a1030"),.14,.4,.3,.8,1.06,-2.3),P(M("#1a1030"),.14,.4,.3,-.8,1.06,-2.3);for(let[K,de]of[[1.13,1.55],[-1.13,1.55],[1.13,-1.55],[-1.13,-1.55]])P(M("#0c0a14"),.42,.78,.8,K,.39,de);P(H(4.6,4.3,3.8),.52,.18,.08,.72,.84,2.42),P(H(4.6,4.3,3.8),.52,.18,.08,-.72,.84,2.42),P(H(4,.3,.55),1.9,.14,.08,0,.92,-2.42);let le=(K,de,pe)=>{let ut=document.createElement("canvas");ut.width=ut.height=128;let Qe=ut.getContext("2d"),$e=Qe.createRadialGradient(64,64,4,64,64,64);$e.addColorStop(0,`rgba(${K},${de},${pe},1)`),$e.addColorStop(.45,`rgba(${K},${de},${pe},.35)`),$e.addColorStop(1,`rgba(${K},${de},${pe},0)`),Qe.fillStyle=$e,Qe.fillRect(0,0,128,128);let It=new si(ut);return It.colorSpace=Jt,It},b=(K,de,pe,ut,Qe)=>{let $e=new vt(new ii(de,pe).rotateX(-Math.PI/2),new Ut({map:K,transparent:!0,depthWrite:!1,blending:yi,toneMapped:!1,color:new De(Qe,Qe,Qe)}));return $e.position.set(0,.08,ut),$e.renderOrder=2,L.add($e),$e};b(le(255,60,200),5,7.6,0,1.5);let C=b(le(255,236,200),8,15,10.5,.9),O={x:-80,z:7,yaw:Math.PI/2,v:0,steer:0};function ae(){L.position.set(O.x,0,O.z),L.rotation.set(0,O.yaw,0),L.rotateZ(-O.steer*ls(O.v/40,-1,1)*.07)}let[Re,k]=h,J=[[-423,-293,-213,-195],[-268,-256,-210,-198],[-242,-210,-214,-196],[-487,-433,-224,-200],[-504,-480,-240,-232],[-422,-298,-247,-220],[-248,-232,182,194],[-98,-54,158,194]];function se(K,de){for(let[$e,It,At]of y.posts)if((K-$e)*(K-$e)+(de-It)*(de-It)<At*At)return!1;if(Math.hypot(K,de)>560||K>l+13.2||K>-40&&K<84&&de>-292&&de<-148)return!1;if(Math.abs(K)<=r&&Math.abs(de)<=r){if(K>l+2.2||Math.abs(K-Re)<7&&Math.abs(de-k)<7)return!0;let $e=((K+r)%o+o)%o,It=((de+r)%o+o)%o;return $e>=a-.15||It>=a-.15}if(K>l+2.2||Math.abs(K)<r+26&&Math.abs(de)<r+26)return!0;for(let[$e,It,At,Zt]of J)if(K>$e&&K<It&&de>At&&de<Zt)return!1;let pe=((K+2)%36+36)%36,ut=((de+2)%36+36)%36;if(pe>=31.6||ut>=31.6)return!0;let Qe=c.get(Math.floor((K+2)/36),Math.floor((de+2)/36));return Qe===zt.lot||Qe===zt.ring||Qe===zt.hwy||Qe===zt.park||Qe===zt.golf||Qe===zt.air}let _e=(K,de,pe,ut,Qe)=>se(K,de)&&se(K+pe*2.2*Qe,de+ut*2.2*Qe)&&se(K+ut*1.1,de-pe*1.1)&&se(K-ut*1.1,de+pe*1.1),ue=Re-9,re=Re+9,Me=["streets","hot","drops","graduates","pulse","whales","safehouse","harbor","trending","x","roam"],Ce=[[[-86,7],[-34,7]],[[-11,7],[-11,-21]],[[-11,-29],[-4,-29]],[[25,-29],[25,-112],[-184,-112],[-184,-280],[-222,-280]],[[-286,-280],[-286,-184],[-148,-184],[-148,26]],[[-148,32],[-100,32],[-100,25],[-29,25]],[[ue,25],[ue,k],[Re-2,k]],[[re,k],[re,7],[64.5,7]],[[64.5,18]],[[64.5,28]],[[64.5,46]]],I=[],W=[],oe=[],Le=0;for(let K of Ce){let de=Le;for(let pe of K)I.length&&(Le+=Math.hypot(pe[0]-I[I.length-1][0],pe[1]-I[I.length-1][1])),I.push(pe);W.push(Le),oe.push(Le-de)}let ge=[0];for(let K=1;K<I.length;K++)ge.push(ge[K-1]+Math.hypot(I[K][0]-I[K-1][0],I[K][1]-I[K-1][1]));function He(K,de){K=ls(K,0,Le);let pe=1;for(;pe<I.length-1&&ge[pe]<K;)pe++;let ut=I[pe-1],Qe=I[pe],$e=ge[pe]-ge[pe-1]||1,It=ls((K-ge[pe-1])/$e,0,1);return de[0]=ut[0]+(Qe[0]-ut[0])*It,de[1]=ut[1]+(Qe[1]-ut[1])*It,de}let ht=[0,0],je=[0,0],lt=K=>(He(K-2.5,ht),He(K+2.5,je),Math.atan2(je[0]-ht[0],je[1]-ht[1])),yt=y.tower,$=new U,Vt={hot:()=>ke&&ke.pos?$.set(ke.pos[0],1.2,ke.pos[1]):null,drops:()=>{let K=yt();return $.set(K.x,Math.max(10,K.y*.7),K.z)},graduates:()=>$.set(-430,9,-280),pulse:()=>$.set(-178,18,32),whales:()=>p[0]?$.copy(p[0].g.position):null,safehouse:()=>$.set(Re,2,k),harbor:()=>$.set(l+46,3,-6),trending:()=>$.copy(y.bannerPos()),x:()=>$.set(f.x,17,f.z)},nt=new U,ot=new U,Fe=new U,Ht=new U,_t=new U,A=new U,E=new U,ee=new U;function Te(K,de,pe,ut,Qe,$e=12,It=5.2){let At=Math.sin(pe),Zt=Math.cos(pe);ut.set(K-At*$e,It,de-Zt*$e),Qe.set(K+At*14,2.2,de+Zt*14)}let Ee={streets:"chase",hot:"front",drops:"road",graduates:"poi",pulse:"pulse",whales:"up",safehouse:"road",harbor:"beach",trending:"beach",x:"beach",roam:"chase"};function be(K,de,pe,ut,Qe,$e){let It=Me[K],At=Ee[It]||"chase",Zt=Vt[It],Gt=Zt&&Zt(),hn=Math.sin(ut),pn=Math.cos(ut),xn=pn,w=-hn;if(At==="chase"||!Gt&&At!=="pulse")return Te(de,pe,ut,Qe,$e);if(At==="front"){let Ye=t.aspect<.8,ct=Ye?12:8,it=Ye?2.2:1.4;Qe.set(de-hn*ct+xn*it,Ye?4.6:3.9,pe-pn*ct+w*it),$e.set(de+hn*7+xn*it,2.6,pe+pn*7+w*it);return}if(At==="road"){Qe.set(de-hn*12,8.5,pe-pn*12),$e.set(de+(Gt.x-de)*.5,2+(Gt.y-2)*.5,pe+(Gt.z-pe)*.5);return}if(At==="up"){let Ye=t.aspect<.8?0:6;Qe.set(de-hn*7,2.2,pe-pn*7),$e.set(de+hn*24-xn*Ye,11,pe+pn*24-w*Ye);return}if(At==="pulse"){Qe.set(de+7,8,pe-9),$e.set(-174,15,32);return}if(At==="beach"){Qe.set(l+2.8,Gt.y>20?13:22,pe+(Gt.z>pe?-9:9)),$e.set(de+(Gt.x-de)*.6,1.5+(Gt.y-1.5)*.6,pe+(Gt.z-pe)*.6);return}let q=Gt.x-de,j=Gt.z-pe,ne=Math.hypot(q,j)||1;q/=ne,j/=ne;let te=13+Math.min(10,ne*.06),Be=5+Math.min(16,Math.max(0,Gt.y-6)*.4);Qe.set(de-q*te-j*4,Be,pe-j*te+q*4),$e.set(de+(Gt.x-de)*.55,2+(Gt.y-2)*.55,pe+(Gt.z-pe)*.55)}let Ge=[0,0];function Ue(K){let de=Me.length;K=ls(K,0,de-1);let pe=Math.floor(K),ut=Math.min(de-1,pe+1),Qe=K-pe,$e=Gl(.12,.88,Qe),It=W[pe]+(W[ut]-W[pe])*$e;return He(It,Ge),{i:pe,j:ut,f:Qe,d:It,x:Ge[0],z:Ge[1],yaw:lt(It)}}function Ne(K){let de=Ue(K);return O.x=de.x,O.z=de.z,O.yaw=de.yaw,ae(),be(K,de.x,de.z,de.yaw,E,ee),[E.clone(),ee.clone()]}let ke=null,st=null,me=!1;function Pt(K,de){me=!0;let pe=Ue(K),ut=pe.d!==O.d;O.v=ut&&de>0?ls(Math.abs(pe.d-(O.d??pe.d))/de,0,400):0,O.d=pe.d,O.x=pe.x,O.z=pe.z,O.yaw=jx(O.yaw,pe.yaw,1-Math.exp(-de*9)),O.steer=0,ae();let Qe=Math.round(ls(K,0,Me.length-1)),$e=Math.abs(K-Qe)<.55,It=$e&&{hot:"hot",drops:"new",graduates:"migrated"}[Me[Qe]]||null;if(It!==st&&(st=It,ke=null),st&&(!ke||!ke.coin||st==="hot"&&g&&g()&&ke.coin.mint!==g()))ke=D(st);else if(st==="new"&&ke&&ke.coin){let j=D("new");j&&j!==ke&&(j.coin.created||0)>(ke.coin.created||0)&&(ke=j)}let At=1-Gl(0,.3,pe.f),Zt=Gl(.7,1,pe.f),Gt=Math.max(0,1-At-Zt);be(pe.i,pe.x,pe.z,O.yaw,nt,ot),be(pe.j,pe.x,pe.z,O.yaw,Fe,Ht);let hn=ls((oe[pe.j]-150)*.42,0,230)*Math.sin(Math.PI*Gl(.1,.9,pe.f));Te(pe.x,pe.z,O.yaw,_t,A,12+hn*.55,5.2+hn),hn>1&&A.lerp($.set(pe.x,0,pe.z),Math.min(1,hn/50)),E.set(0,0,0).addScaledVector(nt,At).addScaledVector(Fe,Zt).addScaledVector(_t,Gt),ee.set(0,0,0).addScaledVector(ot,At).addScaledVector(Ht,Zt).addScaledVector(A,Gt);let pn=j=>Ee[Me[j]]||"chase",xn=(pn(pe.i)==="up"?At:0)+(pn(pe.j)==="up"?Zt:0),w=(pn(pe.i)==="chase"?At:0)+(pn(pe.j)==="chase"?Zt:0)+Gt;t.aspect<.8&&(E.y+=(4+2*w)*(1-xn),ee.lerp($.set(pe.x,-6-3*w,pe.z),(.55+.07*w)*(1-xn)));let q=1-Math.exp(-de*3.4);t.position.lerp(E,q),s.lerp(ee,q),kt(46,de)}function D(K){let de=K==="hot"&&g&&g();if(de){let Qe=x.find($e=>$e.coin&&!$e.mine&&$e.coin.mint===de);if(Qe)return Qe}let pe=null,ut=-1/0;for(let Qe of x){if(!Qe.coin||Qe.police||Qe.mine)continue;let $e=Qe.coin,It=K==="hot"?$e.cat!=="new"?$e.heat||0:-1:K==="new"?$e.cat==="new"?$e.created||0:-1/0:$e.cat==="migrated"?$e.grad||0:-1/0;It>ut&&(ut=It,pe=Qe)}return ut===-1/0?null:pe}function Se(K,de){if(!me||K!==ke||!st)return null;let pe=Math.sin(O.yaw),ut=Math.cos(O.yaw),Qe=ut,$e=-pe;return[O.x+Qe*2.9+pe*.5,O.z+$e*2.9+ut*.5,O.yaw-Math.PI/2,Math.abs(O.v||0)]}let Ae={},we={x:0,y:0,on:!1},Ve=null,Mt=0,dt=0,pt=-9,fe=()=>{let K=document.activeElement;return K&&/INPUT|TEXTAREA|SELECT/.test(K.tagName)},G=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space"]);addEventListener("keydown",K=>{fe()||K.metaKey||K.ctrlKey||G.has(K.code)&&(Ae[K.code]=!0,Ie&&K.code!=="ShiftLeft"&&K.code!=="ShiftRight"&&K.preventDefault(),he&&/^Key[WASD]$/.test(K.code)&&he())}),addEventListener("keyup",K=>{Ae[K.code]=!1}),addEventListener("blur",()=>{for(let K in Ae)Ae[K]=!1}),n.addEventListener("pointerdown",K=>{!Ie||K.pointerType!=="mouse"||(Ve=[K.clientX,K.clientY])}),addEventListener("pointermove",K=>{Ve&&(Mt-=(K.clientX-Ve[0])*.006,dt=ls(dt+(K.clientY-Ve[1])*.004,-.35,.9),Ve=[K.clientX,K.clientY],pt=performance.now())}),addEventListener("pointerup",()=>{Ve=null});let Ie=!1,he=null,qe=document.createElement("div");qe.className="joy",qe.innerHTML="<i></i>",document.body.appendChild(qe);let Ke=qe.firstChild;qe.addEventListener("pointerdown",K=>{we.on=!0;try{qe.setPointerCapture(K.pointerId)}catch{}ft(K),K.preventDefault()}),qe.addEventListener("pointermove",K=>{we.on&&ft(K)});let Et=()=>{we.on=!1,we.x=we.y=0,Ke.style.transform=""};qe.addEventListener("pointerup",Et),qe.addEventListener("pointercancel",Et);function ft(K){let de=qe.getBoundingClientRect(),pe=de.width/2;if(pe<4)return;let ut=(K.clientX-de.left-pe)/pe,Qe=(K.clientY-de.top-pe)/pe,$e=Math.hypot(ut,Qe);$e>1&&(ut/=$e,Qe/=$e),we.x=ut,we.y=Qe,Ke.style.transform=`translate(${ut*pe*.55}px,${Qe*pe*.55}px)`,he&&he()}function kt(K,de){let pe=t.fov+(K-t.fov)*Math.min(1,de*3);Math.abs(pe-t.fov)>.01&&(t.fov=pe,t.updateProjectionMatrix())}function on(K){let de=Ae.KeyW||Ae.ArrowUp||we.y<-.22,pe=Ae.KeyS||Ae.ArrowDown||we.y>.4,ut=Ae.ShiftLeft||Ae.ShiftRight,Qe=(Ae.KeyA||Ae.ArrowLeft?1:0)-(Ae.KeyD||Ae.ArrowRight?1:0);we.on&&(Qe=-we.x);let $e=ut?58:36,It=ut?36:22;de?O.v+=(O.v<0?42:It)*K:pe?O.v-=(O.v>0?46:14)*K:O.v-=Math.sign(O.v)*Math.min(Math.abs(O.v),10*K),O.v>$e&&(O.v=Math.max($e,O.v-30*K)),O.v=ls(O.v,-13,60),Ae.Space&&(O.v*=Math.max(0,1-K*3)),isFinite(Qe)||(Qe=0),O.steer+=(Qe-O.steer)*Math.min(1,K*8),isFinite(O.yaw)||(O.yaw=0),isFinite(O.v)||(O.v=0),O.yaw+=O.steer*K*2.2*Math.min(1,Math.abs(O.v)/9)*Math.sign(O.v||1)*(1-Math.min(.5,Math.abs(O.v)/120));let At=Math.sin(O.yaw),Zt=Math.cos(O.yaw),Gt=O.x+At*O.v*K,hn=O.z+Zt*O.v*K,pn=Math.sign(O.v)||1;_e(Gt,hn,At,Zt,pn)?(O.x=Gt,O.z=hn):_e(Gt,O.z,At,Zt,pn)?(O.x=Gt,O.v*=1-K*2):_e(O.x,hn,At,Zt,pn)?(O.z=hn,O.v*=1-K*2):O.v*=-.2,ae(),!Ve&&performance.now()-pt>1600&&(Mt*=1-Math.min(1,K*2),dt*=1-Math.min(1,K*2));let xn=Math.abs(O.v),w=O.yaw+Mt,q=11.5+xn*.07,j=4.4+xn*.025+dt*9;E.set(O.x-Math.sin(w)*q*Math.cos(dt*.6),j,O.z-Math.cos(w)*q*Math.cos(dt*.6)),ee.set(O.x+At*7,1.9,O.z+Zt*7);let ne=1-Math.exp(-K*6);t.position.lerp(E,ne),s.lerp(ee,ne),kt(52+xn*.3,K),C.material.color.setScalar(.9+Math.min(.5,xn*.01))}return{story:Pt,free:on,shot:Ne,pinPos:Se,pose:ae,S:O,names:Me,place(K){let de=Ue(K);O.x=de.x,O.z=de.z,O.yaw=de.yaw,O.v=0,ae()},setActive(K,de){Ie=K,he=de||null,K&&(me=!1,st=null,ke=null),qe.classList.toggle("on",K&&(matchMedia("(pointer:coarse)").matches||v)),K||Et()},chasePose(K,de){Te(O.x,O.z,O.yaw,K,de)},open:se}}var lr=Math.PI*2;function Qx(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}var Ui=9,Di=14,Ff=4,fi=Di+Ff,Mn=Ui*fi/2,tn=Mn-fi*1.4,e_=`
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
}`;function Y_(i,e={}){let t=matchMedia("(pointer:coarse)").matches||innerWidth<760,n=new uo({canvas:i,antialias:!1,powerPreference:"high-performance"});n.toneMapping=vo,n.toneMappingExposure=1.05,n.outputColorSpace=Jt;let s=Math.min(devicePixelRatio||1,t?1.25:1.5),r=new yl,o=new De("#4a2a8a"),a={uFog:{value:o},uFogD:{value:.0031},uTime:{value:0},uFlash:{value:0},uMood:{value:.5}},l=new Wn(42,1,.5,5200),c=Qx(20261119),h=new U(-.45,.75,.5).normalize();r.add(new vt(new po(2600,32,16),new gn({side:qn,depthWrite:!1,uniforms:{uTime:a.uTime,uFlash:a.uFlash,uMood:a.uMood},vertexShader:Rh,fragmentShader:s_})));let f=Df(Mn,tn),p=new vt(new ii(5e3,5e3,1,1).rotateX(-Math.PI/2),new gn({uniforms:{...a,uPitch:{value:fi},uBlk:{value:Di},uHalf:{value:Mn},uBeach:{value:tn},uZone:{value:f.tex},uRw:{value:new en(sn.rw.x0,sn.rw.x1,sn.rw.z,sn.rw.hw)},uTwz:{value:sn.twz},uApron:{value:new en(sn.apron.x0,sn.apron.x1,sn.apron.z0,sn.apron.z1)},uField:{value:new en(sn.field.x,sn.field.z,sn.field.hx,sn.field.hz)},uPortR:{value:new en(sn.port.x0,sn.port.x1,sn.port.z0,sn.port.z1)}},vertexShader:Rh,fragmentShader:n_}));r.add(p);let x=new vt(new ii(2600,5e3).rotateX(-Math.PI/2).translate(tn+14+1300,.35,0),new gn({uniforms:a,vertexShader:Rh,fragmentShader:i_}));r.add(x);let y=m=>new gn({uniforms:{...a,uSun:{value:h},uWin:{value:m?1:0}},vertexShader:e_,fragmentShader:t_}),v=()=>new Us(1,1,1),g=[],d=e.gate&&!e.reduced?0:99;function L(m,_=!1,T=!0){let z=v(),Z=new Float32Array(m.length),V=new an(z,y(_),m.length);T&&g.push({m:V,list:m});let Y=new Ft,Pe=new Tn,ze=new U,B=new U,ce=new os;return m.forEach((ve,Xe)=>{ze.set(ve.x,ve.y+ve.h/2,ve.z),B.set(ve.w,ve.h,ve.d),Pe.setFromEuler(ce.set(ve.rx||0,ve.ry||0,ve.rz||0)),Y.compose(ze,Pe,B),V.setMatrixAt(Xe,Y),V.setColorAt(Xe,ve.c),Z[Xe]=c()}),z.setAttribute("aSeed",new Or(Z,1)),V.instanceMatrix.needsUpdate=!0,V.instanceColor.needsUpdate=!0,V.frustumCulled=!1,r.add(V),V}let M=m=>new De(m),H=["#ff9ec9","#9ff0d0","#c8a8ff","#ffc9a0","#a8d8ff","#fff0a8"].map(M),P=["#2a2f7a","#3a2a8a","#28407a","#4a2f8f","#232a66"].map(M),F=["#8f86b8","#a49ccb","#7a72a8","#b3a9d6"].map(M),N=[],le=[],b=[],C=[],O=[],ae=null,Re=m=>-Mn+m*fi+Di/2;for(let m=0;m<Ui;m++)for(let _=0;_<Ui;_++){let T=Re(m),z=Re(_);if(T>tn-2)continue;if(m===4&&_===2){ae={x:T,z};continue}let Z=Math.hypot(T,z)/Mn,V=T>tn-fi-2;if(!V&&c()<.08){b.push([T,z]);continue}let Y=V?2:c()<.45?1:4,Pe=Y===1?[[0,0,Di-2,Di-2]]:Y===2?[[0,-3.5,Di-3,6],[0,3.5,Di-3,6]]:[[-3.5,-3.5,6,6],[3.5,-3.5,6,6],[-3.5,3.5,6,6],[3.5,3.5,6,6]];for(let[ze,B,ce,ve]of Pe){let Xe=Math.max(3,Math.round(ce-c()*2)),Rt=Math.max(3,Math.round(ve-c()*2)),u=V?5+Math.round(c()*5):Z<.35?22+Math.round(c()*30):Z<.65?9+Math.round(c()*14):4+Math.round(c()*7),S=V?H[Math.floor(c()*H.length)]:u>20?P[Math.floor(c()*P.length)]:c()<.5?F[Math.floor(c()*F.length)]:H[Math.floor(c()*H.length)],R=T+ze,X=z+B;if(N.push({x:R,y:0,z:X,w:Xe,d:Rt,h:u,c:S}),u>22&&(N.push({x:R,y:u,z:X,w:Math.max(2,Xe-2),d:Math.max(2,Rt-2),h:Math.round(3+c()*6),c:S}),c()<.6)){let Q=7+c()*6;le.push({x:R,y:u+3,z:X,w:.4,d:.4,h:Q,c:M("#c8c0e8")}),O.push([R,u+3+Q,X])}if(c()<.55&&le.push({x:R+(c()-.5)*(Xe-2),y:u,z:X+(c()-.5)*(Rt-2),w:1.6,d:1.2,h:1,c:M("#5a5280")}),C.push({x:R,y:u,z:X,w:Xe,d:Rt,big:u>20}),V)for(let Q of[-1,1])le.push({x:R-Xe/2-.02,y:2+(Q+1)*1.6,z:X,w:.3,d:Rt*.8,h:.35,c:M(Q>0?"#ff4f9e":"#5fd8ff"),neon:!0})}}L(N,!0);let k=le.filter(m=>m.neon),J=le.filter(m=>!m.neon);L(J);let se=new an(v(),new Ut({toneMapped:!1}),k.length);{let m=se,_=new Ft;k.forEach((T,z)=>{_.compose(new U(T.x,T.y,T.z),new Tn,new U(T.w,T.h,T.d)),m.setMatrixAt(z,_),m.setColorAt(z,T.c.clone().multiplyScalar(3))}),r.add(m)}let _e=[];function ue(m,_,T=1){let z=Math.round(7+c()*4),Z=(c()-.5)*.25;for(let Pe=0;Pe<z;Pe++)_e.push({x:m+Z*Pe*Pe*.08,y:Pe*.9*T,z:_,w:.7*T,d:.7*T,h:.9*T,c:M(Pe%2?"#8a5a3a":"#7a4e30")});let V=m+Z*z*z*.08,Y=z*.9*T;for(let Pe=0;Pe<6;Pe++){let ze=Pe/6*lr+c()*.4;for(let B=1;B<=5;B++)_e.push({x:V+Math.cos(ze)*B*.8*T,y:Y+(B<3?.3:-(B-2)*.55)*T,z:_+Math.sin(ze)*B*.8*T,w:.75*T,d:.75*T,h:.35*T,c:M(B%2?"#2fbf6e":"#26a85e")})}_e.push({x:V,y:Y-.3,z:_,w:1.1*T,d:1.1*T,h:.8*T,c:M("#2fbf6e")})}for(let m=-Mn+6;m<Mn;m+=9)ue(tn+5+c()*2,m+c()*3),c()<.6&&ue(tn+10+c()*3,m+4);let re=b.slice().sort((m,_)=>Math.hypot(m[0]-30,m[1]-30)-Math.hypot(_[0]-30,_[1]-30))[0]||[tn-30,30];for(let m of b){if(m===re)continue;let[_,T]=m;ue(_-3,T-2),ue(_+3,T+3),ue(_+2,T-4,.8)}for(let m=-3;m<=3;m++)ue(-Mn-8,m*20+4);L(_e);let Me=[];for(let m=0;m<26;m++){let _=Math.PI*(.55+m/25*.95),T=640+c()*260,z=Math.cos(_)*T,Z=Math.sin(_)*T*1.1,V=70+c()*110,Y=50+c()*130;for(let Pe=0;Pe<5;Pe++){let ze=1-Pe/5;Me.push({x:z,y:Y*Pe/5,z:Z,w:V*ze+10,d:V*ze*.8+10,h:Y/5+.5,c:M(Pe>3?"#4a3c86":"#2c2160")})}}L(Me,!1,!1);let Ce=34,I=new U(tn+60,21,Ce),W=[];for(let m=tn+10;m<=tn+74;m+=2)W.push({x:m,y:1.4,z:Ce,w:2.02,d:9,h:.5,c:M(m%4?"#9a6a48":"#8a5c3c")});for(let m=tn+16;m<=tn+74;m+=8)for(let _ of[-4,4])W.push({x:m,y:-1,z:Ce+_,w:.7,d:.7,h:2.5,c:M("#5a3a28")});for(let m of[-4.4,4.4])for(let _=tn+10;_<=tn+74;_+=4)W.push({x:_,y:1.9,z:Ce+m,w:.25,d:.25,h:1.1,c:M("#e8e0f4")});for(let m of[-3,3])W.push({x:I.x-4,y:1.9,z:I.z+m*1.6,w:1,d:1,h:18,c:M("#d8d0ec"),ry:0}),W.push({x:I.x+4,y:1.9,z:I.z+m*1.6,w:1,d:1,h:18,c:M("#d8d0ec")});L(W);let oe=new zn,Le=new zn;oe.position.copy(I),r.add(oe),oe.add(Le);let ge=56,He=new an(v(),new Ut({toneMapped:!1}),ge);He.frustumCulled=!1,Le.add(He);{let m=new Ft,_=new Tn;for(let T=0;T<ge;T++){let z=T/ge*lr;_.setFromAxisAngle(new U(0,0,1),z),m.compose(new U(Math.cos(z)*15,Math.sin(z)*15,0),_,new U(.7,1.8,.7)),He.setMatrixAt(T,m),He.setColorAt(T,new De(1,1,1))}}let ht=new Xt({color:"#cfc6ee"});for(let m=0;m<8;m++){let _=new vt(v(),ht);_.scale.set(30,.35,.35),_.rotation.z=m/8*Math.PI,Le.add(_)}let je=new vt(v(),new Ut({color:new De(3,1.2,2.4),toneMapped:!1}));je.scale.set(2.2,2.2,3),Le.add(je);let lt=[],yt=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#c8a8ff","#ff8a4a"];for(let m=0;m<12;m++){let _=new vt(v(),new Xt({color:yt[m%yt.length]}));_.scale.set(2,2.2,2.4),oe.add(_),lt.push(_)}oe.rotation.y=Math.PI/2;let $=new U(tn+26,0,Mn+70),Vt=[];for(let m=0;m<9;m++)Vt.push({x:$.x,y:m*2.6,z:$.z,w:5-m*.25,d:5-m*.25,h:2.6,c:M(m%2?"#ff4f6e":"#f4f0ff")});Vt.push({x:$.x,y:23.4,z:$.z,w:3.4,d:3.4,h:2.4,c:M("#2a2060")}),L(Vt,!1,!1);let nt=new vt(v(),new Ut({color:new De(4,3.6,2.4),toneMapped:!1}));nt.scale.set(2.2,1.6,2.2),nt.position.set($.x,24.6,$.z),r.add(nt);let ot=new vt(new rr(9,260,24,1,!0).rotateZ(-Math.PI/2).translate(130,0,0),new Ut({color:new De(1,.92,.7),transparent:!0,opacity:.07,blending:yi,depthWrite:!1,side:Xn}));ot.position.set($.x,24.6,$.z),r.add(ot);let Fe=m=>-Mn+m*fi-Ff/2;function Ht(){let m=1+Math.floor(c()*(Ui-2)),_=1+Math.floor(c()*(Ui-2)),T=Math.min(Ui,m+1+Math.floor(c()*3)),z=Math.min(Ui,_+1+Math.floor(c()*3)),Z=[[Fe(m),Fe(_)],[Fe(T),Fe(_)],[Fe(T),Fe(z)],[Fe(m),Fe(z)]].map(([Pe,ze])=>[Math.min(Pe,tn-1),ze]);c()<.5&&Z.reverse();let V=[],Y=0;for(let Pe=0;Pe<4;Pe++){let ze=Z[Pe],B=Z[(Pe+1)%4],ce=Math.hypot(B[0]-ze[0],B[1]-ze[1])||1;V.push({a:ze,b:B,l:ce,at:Y}),Y+=ce}return{segs:V,len:Y}}function _t(m,_,T){_=(_%m.len+m.len)%m.len;for(let z of m.segs)if(_<=z.at+z.l){let Z=(_-z.at)/z.l,V=(z.b[0]-z.a[0])/z.l,Y=(z.b[1]-z.a[1])/z.l;return[z.a[0]+(z.b[0]-z.a[0])*Z-Y*T,z.a[1]+(z.b[1]-z.a[1])*Z+V*T,Math.atan2(V,Y)]}return[m.segs[0].a[0],m.segs[0].a[1],0]}let A=t?44:76,E=6,ee=[["body",[0,.55,0],[1.1,.6,2.2]],["cab",[0,1.05,-.15],[1,.45,1.2]],["w1",[.5,.25,.7],[.25,.5,.5]],["w2",[-.5,.25,.7],[.25,.5,.5]],["w3",[.5,.25,-.7],[.25,.5,.5]],["w4",[-.5,.25,-.7],[.25,.5,.5]]],Te={};for(let[m]of ee){let _=new an(v(),m==="body"?new Xt:new Xt({color:m==="cab"?"#1a1638":"#0c0a14"}),A);_.frustumCulled=!1,r.add(_),Te[m]=_}let Ee=new an(v(),new Ut({toneMapped:!1}),A*4);Ee.frustumCulled=!1,r.add(Ee);let be=[];for(let m=0;m<A;m++)be.push({r:Ht(),d:c()*400,sp:6+c()*6,side:1,coin:null,police:m>=A-E,color:M(["#e8e4f4","#ffcf4a","#ff7aa8","#7ad8ff","#a8ff9e","#ff9a5a"][Math.floor(c()*6)])});let Ge={cars:be},Ue=new Map;function Ne(m,_){if(!m)return;let T=Ue.get(m);if(T){T.im?_(T.im):T.cbs.push(_);return}T={im:null,cbs:[_],tries:0},Ue.set(m,T);let z=()=>{let Z=new Image;Z.crossOrigin="anonymous",Z.referrerPolicy="no-referrer",Z.onload=()=>{T.im=Z;for(let V of T.cbs.splice(0))V(Z)},Z.onerror=()=>{++T.tries<2&&setTimeout(z,1e4)},Z.src=T.tries?m+(m.includes("?")?"&":"?")+"r="+Date.now()%1e5:m};z()}let ke=m=>{let _=0;m=String(m||"");for(let T=0;T<m.length;T++)_=_*31+m.charCodeAt(T)>>>0;return _%360};function st(m,_,T,z,Z,V){let Y=ke(V||Z),Pe=m.createLinearGradient(_-z,T-z,_+z,T+z);Pe.addColorStop(0,`hsl(${Y},80%,62%)`),Pe.addColorStop(1,`hsl(${(Y+48)%360},72%,38%)`),m.fillStyle=Pe,m.fillRect(_-z,T-z,z*2,z*2),m.fillStyle="#fff",m.font=`900 ${Math.round(z*.8)}px Inter, sans-serif`,m.textAlign="center",m.textBaseline="middle",m.fillText(String(Z||"?").slice(0,2).toUpperCase(),_,T+z*.05),m.textBaseline="alphabetic"}let me=new Map;function Pt(m,_,T,z,Z){let V=document.createElement("canvas");V.width=256,V.height=160;let Y=V.getContext("2d"),Pe=ce=>{Y.clearRect(0,0,256,160),Y.fillStyle="rgba(12,6,36,.82)",D(Y,28,98,200,42,21),Y.fill(),Y.fillStyle="#fff",Y.font="900 26px Inter, sans-serif",Y.textAlign="center",Y.fillText("$"+m.symbol.slice(0,9),128,129),Y.beginPath(),Y.arc(128,50,44,0,lr),Y.fillStyle=z?"#ffd23f":Z==="migrated"?"#5fc8ff":T?"#2ee6a6":"#ff4f9e",Y.fill(),Y.save(),Y.beginPath(),Y.arc(128,50,38,0,lr),Y.clip(),ce?Y.drawImage(ce,90,12,76,76):st(Y,128,50,38,m.symbol,m.mint),Y.restore(),Y.textAlign="center";for(let ve=0;ve<5;ve++){let Xe=6+ve*3;Y.fillStyle=ve<_?["#ffd23f","#ffb13f","#ff8a4a","#ff5f7a","#ff4f9e"][ve]:"rgba(255,255,255,.25)",D(Y,104+ve*10,158-Xe,7,Xe,2),Y.fill()}z?(Y.fillStyle="#ff4f9e",D(Y,160,4,66,28,14),Y.fill(),Y.fillStyle="#fff",Y.font="900 18px Inter, sans-serif",Y.fillText("NEW",193,25)):Z==="migrated"&&(Y.fillStyle="#2f8fd8",D(Y,150,4,100,28,14),Y.fill(),Y.fillStyle="#fff",Y.font="900 16px Inter, sans-serif",Y.fillText("MIGRATED",200,24)),ze.needsUpdate=!0},ze=new si(V);ze.colorSpace=Jt,Pe(null),Ne(m.iconUrl,Pe);let B=new Si(new ui({map:ze,depthTest:!0,transparent:!0}));return B.scale.set(6.4,4,1),B.renderOrder=5,B}function D(m,_,T,z,Z,V){m.beginPath(),m.moveTo(_+V,T),m.arcTo(_+z,T,_+z,T+Z,V),m.arcTo(_+z,T+Z,_,T+Z,V),m.arcTo(_,T+Z,_,T,V),m.arcTo(_,T,_+z,T,V),m.closePath()}let Se=t?70:110,Ae=10,we=Se+Ae,Ve=new Ft().makeScale(0,0,0),Mt=document.createElement("canvas");Mt.width=Mt.height=2048;let dt=Mt.getContext("2d"),pt=new si(Mt);pt.colorSpace=Jt,pt.generateMipmaps=!1,pt.minFilter=ci;let fe=!1,G=Array.from({length:256},(m,_)=>_);function Ie(m,_,T){let z=m%16*128,Z=Math.floor(m/16)*128;dt.clearRect(z,Z,128,128),_?(dt.fillStyle="#120a30",dt.fillRect(z,Z,128,128),dt.drawImage(_,z+5,Z+5,118,118)):st(dt,z+64,Z+64,64,T.symbol,T.mint),fe=!0}let he=v(),qe=new Or(new Float32Array(we*2),2);he.setAttribute("aCell",qe);let Ke=new Xt({map:pt});Ke.onBeforeCompile=m=>{m.vertexShader=m.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
attribute vec2 aCell;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = (vMapUv + aCell) / 16.0;`)};let Et=(m,_,T)=>{let z=new an(m,_,we);z.frustumCulled=!1;for(let Z=0;Z<we;Z++)z.setMatrixAt(Z,Ve),T&&z.setColorAt(Z,M("#ffffff"));return r.add(z),z},ft={head:Et(he,Ke),body:Et(v(),new Xt,1),armL:Et(v(),new Xt,1),armR:Et(v(),new Xt,1),legL:Et(v(),new Xt({color:"#1a1638"})),legR:Et(v(),new Xt({color:"#1a1638"})),ring:Et(v(),new Ut({toneMapped:!1,transparent:!0,opacity:.55,depthWrite:!1}),1)},kt=Array.from({length:we},(m,_)=>({k:_,coin:null,mine:_>=Se,pos:null,yaw:0,d:0,sp:1,L:Di-1,x0:0,z0:0,ph:c()*6.28,scale:1,cell:-1,by:6})),on=new Map,K=m=>{let _=0;for(let T=0;T<m.length;T++)_=_*31+m.charCodeAt(T)>>>0;return _},de=[];for(let m=0;m<Ui;m++)for(let _=0;_<Ui;_++)-Mn+m*fi+Di>tn+1||de.push([m,_]);function pe(m,_){m.cell<0&&(m.cell=G.shift()),Ie(m.cell,null,_),qe.setXY(m.k,m.cell%16,15-Math.floor(m.cell/16)),qe.needsUpdate=!0;let T=m.cell,z=_.mint;m.icon=_.iconUrl||"",Ne(_.iconUrl,Z=>{m.coin&&m.coin.mint===z&&m.cell===T&&Ie(T,Z,_)})}function ut(m){m.cell>=0&&(G.push(m.cell),m.cell=-1),m.coin=null}function Qe(m,_){let T=Math.min(Fe(m),tn-1),z=Math.min(Fe(m+1),tn-1),Z=Fe(_),V=Fe(_+1),Y=[[T,Z],[z,Z],[z,V],[T,V]],Pe=[],ze=0;for(let B=0;B<4;B++){let ce=Y[B],ve=Y[(B+1)%4],Xe=Math.hypot(ve[0]-ce[0],ve[1]-ce[1])||1;Pe.push({a:ce,b:ve,l:Xe,at:ze}),ze+=Xe}return{segs:Pe,len:ze}}let $e=null,It=null;function At(m){let _=m.slice(0,Se),T=new Set(_.map(V=>V.mint));for(let[V,Y]of on)T.has(V)||(ut(Y),on.delete(V));for(let[V,Y]of me)!T.has(V)&&!(Y.car&&Y.car.mine)&&(r.remove(Y.sp),Y.sp.material.map.dispose(),Y.sp.material.dispose(),me.delete(V));let z=kt.filter(V=>!V.mine&&!V.coin);for(let V of _){let Y=on.get(V.mint),Pe=!1;if(!Y){if(Y=z.shift(),!Y)break;on.set(V.mint,Y),Pe=!0;let B=K(V.mint),[ce,ve]=de[B%de.length];Y.bi=ce,Y.bj=ve,Y.x0=-Mn+ce*fi+.5,Y.z0=-Mn+ve*fi+.5,Y.d=(B>>>8)%52,Y.dir=B&1?1:-1,Y.spawn=gt,Y.fx=gt>4&&(V.isNew||V.cat==="migrated")?V.cat==="migrated"?1:0:null,Y.coin=V,pe(Y,V)}Y.coin=V,Y.icon!==(V.iconUrl||"")&&pe(Y,V),Y.sp=(1.1+(V.heat||0)*2.8)*Y.dir,Y.scale=.92+(V.heat||0)*.48;let ze=me.get(V.mint);(!ze||ze.up!==V.up||ze.stars!==V.stars||ze.isNew!==!!V.isNew||ze.cat!==V.cat||ze.icon!==(V.iconUrl||""))&&(ze&&(r.remove(ze.sp),ze.sp.material.map.dispose()),ze={sp:Pt(V,V.stars,V.up,!!V.isNew,V.cat),up:V.up,stars:V.stars,isNew:!!V.isNew,cat:V.cat,icon:V.iconUrl||"",born:ze?ze.born:gt},ze.sp.userData={kind:"coin",key:V.mint},r.add(ze.sp),me.set(V.mint,ze)),ze.car=Y}Xl(_.filter(V=>V.cat!=="new")),wi(_.filter(V=>V.cat==="hot"&&V.chg!=null).sort((V,Y)=>(Y.heat||0)-(V.heat||0))[0]||null);let Z=kt.filter(V=>V.coin&&!V.mine&&!V.coin.isNew&&V.coin.chg!=null&&V.coin.chg<-3).sort((V,Y)=>V.coin.chg-Y.coin.chg)[0]||null;Z!==$e&&($e=Z,It=Z?{r:Qe(Z.bi,Z.bj),d:0}:null),be.filter(V=>V.police).forEach((V,Y)=>{V.chase=Y<3?It:null,V.gap=4+Y*7}),Gt=Z?Z.coin:null}let Zt=m=>on.get(m)||null,Gt=null,hn=[],pn={new:M("#ffd23f"),migrated:M("#5fc8ff"),up:M("#2ee6a6"),dn:M("#ff4f9e")},xn={new:new De(3.4,2.5,.5),migrated:new De(.6,2.2,3.6),up:new De(.4,3.2,1.8),dn:new De(3.4,.5,1.7)},w=new Ft,q=new Ft,j=new Ft,ne=new Ft,te=new U,Be=new U,Ye=new Tn,ct=new os;function it(m,_,T,z,Z,V,Y,Pe,ze,B){q.makeTranslation(T,z,Z),j.makeRotationX(V),ne.makeTranslation(0,Y,0),Be.set(Pe,ze,B),Ot.copy(w).multiply(q).multiply(j).multiply(ne).scale(Be),m.setMatrixAt(_,Ot)}function Lt(m){It&&(It.d+=11*m);for(let _ of kt){let T=_.k,z=_.coin;if(!z){for(let Q of Object.values(ft))Q.setMatrixAt(T,Ve);_.pos=null;continue}let Z,V,Y,Pe=!0,ze=!1,B=1,ce=$t.pinPos(_,gt);if(ce)Z=ce[0],V=ce[1],Y=ce[2],Pe=ce[3]>1.5,ze=!Pe,B=Math.min(3,1+ce[3]/8);else if(_.mine)Z=_.gx,V=_.gz,Y=_.gyaw,Pe=!1;else{let Q=_.L*4;_.d=((_.d+_.sp*m)%Q+Q)%Q;let xe=Math.floor(_.d/_.L),Ze=_.d-xe*_.L;Z=xe===0?_.x0+Ze:xe===1?_.x0+_.L:xe===2?_.x0+_.L-Ze:_.x0,V=xe===0?_.z0:xe===1?_.z0+Ze:xe===2?_.z0+_.L:_.z0+_.L-Ze,Y=[Math.PI/2,0,-Math.PI/2,Math.PI][xe]+(_.sp<0?Math.PI:0)}let ve=0,Xe=(gt-(_.spawn||-9))/.9;Xe<1?ve=16*(1-Xe)*(1-Xe):_.fx!=null&&(hn.push([Z,V,_.fx]),_.fx=null);let Rt=_.scale,u=(5.2+Math.abs(_.sp)*1.5)*B,S=Pe?Math.sin(gt*u+_.ph)*.62:0,R=Pe?Math.abs(Math.cos(gt*u+_.ph))*.12:Math.sin(gt*2.2+_.ph)*.03;w.compose(te.set(Z,ve+R,V),Ye.setFromEuler(ct.set(0,Y,0)),Be.set(Rt,Rt,Rt)),it(ft.legL,T,-.32,1.1,0,S,-.55,.42,1.1,.46),it(ft.legR,T,.32,1.1,0,-S,-.55,.42,1.1,.46),it(ft.body,T,0,1.66,0,0,0,1.2,1.12,.72),it(ft.armL,T,-.79,2.12,0,-S*.9,-.5,.34,1,.38),it(ft.armR,T,.79,2.12,0,ze?-2.75+Math.sin(gt*9+_.ph)*.35:S*.9,-.5,.34,1,.38),it(ft.head,T,0,2.84,0,Math.sin(gt*1.7+_.ph)*.06,0,1.28,1.28,1.28);let X=z.cat==="new"||z.isNew?"new":z.cat==="migrated"?"migrated":z.up?"up":"dn";if(ft.body.setColorAt(T,pn[X]),ft.armL.setColorAt(T,pn[X]),ft.armR.setColorAt(T,pn[X]),Ot.compose(te.set(Z,.05,V),Ye.identity(),Be.set(2.3*Rt,.04,2.3*Rt)),ft.ring.setMatrixAt(T,ve>.5?Ve:Ot),ft.ring.setColorAt(T,xn[X]),_.pos=[Z,V],_.yaw=Y,_.by=ve+3.6*Rt+(ce?1.3:2.4),!_.mine&&z.s5m){for(_.pb=(_.pb||0)+m*Math.min(3,(z.s5m.numBuys||0)/300),_.ps=(_.ps||0)+m*Math.min(3,(z.s5m.numSells||0)/300);_.pb>=1;)_.pb--,pi(Qt.set(Z,3.2*Rt,V),ds.set((c()-.5)*2,4+c()*2.5,(c()-.5)*2),[.3,3,1.7],.9,.34,2);for(;_.ps>=1;)_.ps--,pi(Qt.set(Z,3.2*Rt,V),ds.set((c()-.5)*2,3+c()*2,(c()-.5)*2),[3.2,.45,1.6],.9,.34,2)}}for(let _ of Object.values(ft))_.instanceMatrix.needsUpdate=!0,_.instanceColor&&(_.instanceColor.needsUpdate=!0);fe&&qs%20===0&&(fe=!1,pt.needsUpdate=!0)}let St=t?140:320,bt=[],qt=new an(v(),new Xt,St),Wt=new an(v(),new Xt({color:"#f0c9a0"}),St);qt.frustumCulled=Wt.frustumCulled=!1,r.add(qt),r.add(Wt);let mn=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#ffffff","#8a3fe2","#ff8a4a","#1a1638"].map(M),Zn=["#f0c9a0","#c98e62","#8a5a3a","#ffdcc0"].map(M);for(let m=0;m<St;m++){let _=Math.floor(c()*Ui),T=Math.floor(c()*Ui),z=-Mn+_*fi+.5,Z=-Mn+T*fi+.5,V=Di-1;if(z>tn-2){m--;continue}bt.push({x0:z,z0:Z,L:V,d:c()*V*4,sp:(c()<.5?-1:1)*(.9+c()*.9),ph:c()*6.3}),qt.setColorAt(bt.length-1,mn[Math.floor(c()*mn.length)]),Wt.setColorAt(bt.length-1,Zn[Math.floor(c()*Zn.length)])}qt.instanceColor.needsUpdate=!0,Wt.instanceColor.needsUpdate=!0;function Kt(m){bt.forEach((_,T)=>{_.d=((_.d+_.sp*m)%(_.L*4)+_.L*4)%(_.L*4);let z=Math.floor(_.d/_.L),Z=_.d-z*_.L,V=z===0?_.x0+Z:z===1?_.x0+_.L:z===2?_.x0+_.L-Z:_.x0,Y=z===0?_.z0:z===1?_.z0+Z:z===2?_.z0+_.L:_.z0+_.L-Z,Pe=Math.abs(Math.sin(gt*7+_.ph))*.08,ze=(z%2?0:Math.PI/2)+(_.sp<0?Math.PI:0);fn.setFromEuler(bn.set(0,ze,Math.sin(gt*7+_.ph)*.06)),Qt.set(V,.62+Pe,Y),ln.set(.42,.82,.3),Ot.compose(Qt,fn,ln),qt.setMatrixAt(T,Ot),Qt.set(V,1.24+Pe,Y),ln.set(.34,.34,.34),Ot.compose(Qt,fn,ln),Wt.setMatrixAt(T,Ot)}),qt.instanceMatrix.needsUpdate=!0,Wt.instanceMatrix.needsUpdate=!0}let mt=new zn;r.add(mt);{let m=new Xt({color:"#e8e2f8"}),_=new Xt({color:"#2a2060"});[[4,4],[7.5,7],[9,8.4],[9,8.4],[7.5,7],[4.5,4.2]].forEach(([Z,V],Y)=>{let Pe=new vt(v(),m);Pe.scale.set(5.2,V,Z),Pe.position.x=-12.5+Y*5,mt.add(Pe)});for(let[Z,V]of[[4,0],[0,4],[0,-4]]){let Y=new vt(v(),_);Y.scale.set(4,Z?4:.4,V?4:.4),Y.position.set(-14,Z*.9,V*.9),mt.add(Y)}let T=new vt(v(),_);T.scale.set(7,1.8,2.6),T.position.set(1,-5,0),mt.add(T);let z=new vt(v(),new Ut({color:new De(4,.4,1.6),toneMapped:!1}));z.scale.setScalar(.8),z.position.set(15.6,0,0),mt.add(z),mt.userData.tip=z}let Ni=document.createElement("canvas");Ni.width=512,Ni.height=160;let We=Ni.getContext("2d"),Jn=new si(Ni);Jn.colorSpace=Jt;let cs=new Ut({map:Jn,toneMapped:!1,color:new De(1.6,1.6,1.6)});for(let m of[4.32,-4.32]){let _=new vt(new ii(16,5),cs);_.position.set(1,.4,m),_.rotation.y=m>0?0:Math.PI,mt.add(_)}let En=null,Oi=null;function un(){We.fillStyle="#0a0520",We.fillRect(0,0,512,160);let m=En;if(We.fillStyle="#ff4f9e",We.fillRect(0,0,512,8),We.fillRect(0,152,512,8),!m){We.fillStyle="#fff",We.font="900 44px Inter, sans-serif",We.textAlign="center",We.fillText("THE TRENCHES",256,96),Jn.needsUpdate=!0;return}We.save(),We.beginPath(),We.arc(80,80,52,0,lr),We.clip(),Oi?We.drawImage(Oi,28,28,104,104):st(We,80,80,52,m.symbol,m.mint),We.restore(),We.textAlign="left",We.fillStyle="#ffd23f",We.font="900 22px Inter, sans-serif",We.fillText("#1 HOT RIGHT NOW",152,50),We.fillStyle="#fff",We.font="900 52px Inter, sans-serif";let _="$"+m.symbol;for(;We.measureText(_).width>340&&_.length>3;)_=_.slice(0,-2)+"\u2026";We.fillText(_,152,104),We.fillStyle=(m.chg||0)>=0?"#2ee6a6":"#ff4f9e",We.font="800 28px Inter, sans-serif",We.fillText(m.chg==null?"":(m.chg>0?"+":"")+m.chg.toFixed(1)+"% in 5 min",152,140),Jn.needsUpdate=!0}un();function wi(m){if(!m||En&&En.mint===m.mint&&En.chg===m.chg)return;let _=En&&En.mint===m.mint;if(En=m,!_){Oi=null;let T=m.mint;Ne(m.iconUrl,z=>{En&&En.mint===T&&(Oi=z,un())})}un()}let Nn=[],Ln={new:["#ffd23f","#2a1270"],migrated:["#5fc8ff","#062a4a"],bond:["#ff4f9e","#fff"],x:["#ffffff","#120a30"],hot:["#2ee6a6","#04261a"]};function rt(m){let _=document.createElement("canvas");_.width=560,_.height=210;let T=_.getContext("2d"),[z]=Ln[m.kind]||Ln.x,Z=Y=>{T.clearRect(0,0,560,210),T.fillStyle="rgba(10,5,32,.94)",D(T,6,6,548,150,40),T.fill(),T.beginPath(),T.moveTo(250,150),T.lineTo(280,196),T.lineTo(312,150),T.closePath(),T.fill(),T.strokeStyle=z,T.lineWidth=6,D(T,6,6,548,150,40),T.stroke(),T.save(),T.beginPath(),T.arc(84,81,50,0,lr),T.clip(),Y?T.drawImage(Y,34,31,100,100):m.mint?st(T,84,81,50,m.mark,m.mint):(T.fillStyle=z,T.fillRect(34,31,100,100),T.fillStyle="#120a30",T.font="900 44px Inter, sans-serif",T.textAlign="center",T.fillText(m.mark||"?",84,97)),T.restore(),T.textAlign="left",T.fillStyle=z,T.font="900 24px Inter, sans-serif",T.fillText(m.kicker.toUpperCase(),156,58),T.fillStyle="#fff",T.font="900 40px Inter, sans-serif";let Pe=m.title;for(;T.measureText(Pe).width>380&&Pe.length>3;)Pe=Pe.slice(0,-2)+"\u2026";if(T.fillText(Pe,156,104),m.sub){T.fillStyle="rgba(220,210,255,.85)",T.font="700 24px Inter, sans-serif";let ze=m.sub;for(;T.measureText(ze).width>380&&ze.length>3;)ze=ze.slice(0,-2)+"\u2026";T.fillText(ze,156,138)}V.needsUpdate=!0},V=new si(_);return V.colorSpace=Jt,Z(null),Ne(m.iconUrl,Z),V}function kr(m){for(;Nn.length>=(t?3:5);){let Z=Nn.shift();r.remove(Z.sp),Z.sp.material.map.dispose(),Z.sp.material.dispose()}let _=new Si(new ui({map:rt(m),transparent:!0,depthTest:!1}));_.renderOrder=8,_.userData=m.mint?{kind:"coin",key:m.mint}:{kind:"bubble",key:m.title};let T=m.mint?Zt(m.mint):null,z=m.at||(()=>{let Z=C[Math.floor(c()*C.length)];return[Z.x,Z.z,Z.y+14]})();r.add(_),Nn.push({sp:_,car:T,x:z[0],z:z[1],y:z[2]||12,t:0,life:m.life||6.5})}let hs=t?16:30,Sn=[],Vr=[["hull",[0,.45,0],[2.4,.9,5.6],"#efeaff"],["trim",[0,.95,0],[2.5,.18,5.7],"#2f3fe4"],["deck",[0,1.35,-.9],[1.7,.8,2.2],"#241a5c"],["mast",[0,3.3,.7],[.24,4.4,.24],"#cfc6ee"],["sail",[0,3.5,1.35],[.14,3.4,1.9],"#ffffff"]],di={};for(let[m,,,_]of Vr){let T=new an(v(),new Xt({color:_}),hs);T.frustumCulled=!1,T.count=0,r.add(T),di[m]=T}di.sail.material=new Ut({toneMapped:!1});function Oa(m){let _=document.createElement("canvas");_.width=256,_.height=92;let T=_.getContext("2d");T.fillStyle="rgba(8,18,48,.86)",D(T,6,8,244,76,22),T.fill(),T.strokeStyle="rgba(95,200,255,.8)",T.lineWidth=3,D(T,6,8,244,76,22),T.stroke(),T.fillStyle="#fff",T.font="900 30px Inter, sans-serif",T.textAlign="left",T.fillText(m.name.slice(0,8),22,52);let z=m.chg==null?"\u2014":(m.chg>0?"+":"")+m.chg.toFixed(1)+"%";T.textAlign="right",T.fillStyle=m.chg>=0?"#2ee6a6":"#ff4f9e",T.font="800 26px Inter, sans-serif",T.fillText(z,234,52),T.fillStyle="rgba(160,220,255,.85)",T.font="800 13px Inter, sans-serif",T.textAlign="left",T.fillText("PERP \xB7 "+(m.oi>=1e9?(m.oi/1e9).toFixed(1)+"B":(m.oi/1e6).toFixed(0)+"M")+" OI",22,74);let Z=new si(_);Z.colorSpace=Jt;let V=new Si(new ui({map:Z,transparent:!0,depthTest:!0}));return V.renderOrder=5,V.userData={kind:"perp",key:m.name},V}function Wl(m){let _=m.filter(Z=>Z&&Z.oi>0).sort((Z,V)=>V.oi-Z.oi).slice(0,hs);if(Sn.length&&_.length===Sn.length&&_.every(Z=>Sn.some(V=>V.p.name===Z.name))){for(let Z of _){let V=Sn.find(Pe=>Pe.p.name===Z.name);V.p=Z;let Y=Oa(Z);V.sp.material.map.dispose(),V.sp.material.map=Y.material.map,V.sp.material.needsUpdate=!0,Y.material.dispose()}return}for(let Z of Sn)r.remove(Z.sp),Z.sp.material.map.dispose(),Z.sp.material.dispose();Sn.length=0;let T=t?2:3,z=Math.ceil(hs/T);_.forEach((Z,V)=>{let Y=V%T,Pe=Math.floor(V/T),ze=Y%2?-1:1,B=.75+.6*Math.min(1,Math.max(0,Math.log10(Z.oi/1e6)/3));Sn.push({p:Z,x:tn+30+Y*15,dir:ze,sz:B,sp:Oa(Z),ph:c()*6.28,d:Pe/z*2*(2*Mn-12)+c()*4,pos:null,wake:0})});for(let Z of Sn)r.add(Z.sp);for(let Z in di)di[Z].count=Sn.length}let Ti=[],Ds=[];for(let m of C.filter(_=>_.big).sort((_,T)=>T.y-_.y)){if(Ti.length>=5)break;Ti.every(_=>Math.hypot(_.x-m.x,_.z-m.z)>30)&&Ti.push(m)}function Fa(m,_){let T=document.createElement("canvas");T.width=384,T.height=176;let z=T.getContext("2d"),Z=z.createLinearGradient(0,0,384,176);Z.addColorStop(0,"#2f3fe4"),Z.addColorStop(.5,"#8a3fe2"),Z.addColorStop(1,"#ff4f9e");let V=Pe=>{z.clearRect(0,0,384,176),z.fillStyle=Z,D(z,4,4,376,168,26),z.fill(),z.fillStyle="rgba(10,5,32,.88)",D(z,12,12,360,152,20),z.fill(),z.save(),z.beginPath(),z.arc(88,88,52,0,lr),z.clip(),Pe?z.drawImage(Pe,36,36,104,104):st(z,88,88,52,m.symbol,m.mint),z.restore(),z.textAlign="left",z.fillStyle="#ffd23f",z.font="900 20px Inter, sans-serif",z.fillText("#"+_+" ON THE STREETS",160,58),z.fillStyle="#fff",z.font="900 44px Inter, sans-serif",z.fillText("$"+m.symbol.slice(0,8),160,106);let ze=m.mcap||0;z.fillStyle="rgba(220,210,255,.9)",z.font="800 22px Inter, sans-serif",z.fillText((ze>=1e9?"$"+(ze/1e9).toFixed(2)+"B":"$"+(ze/1e6).toFixed(1)+"M")+" cap",160,140),Y.needsUpdate=!0},Y=new si(T);return Y.colorSpace=Jt,V(null),Ne(m.iconUrl,V),Y}function Xl(m){m.filter(T=>!T.isNew&&T.mcap).sort((T,z)=>z.mcap-T.mcap).slice(0,Ti.length).forEach((T,z)=>{let Z=Ds[z];if(Z&&Z.mint===T.mint&&Z.icon===(T.iconUrl||"")){Z.coin=T,Z.sp.userData.coin=T;return}if(!Z){Z=Ds[z]={sp:new Si(new ui({transparent:!0,depthTest:!0}))},Z.sp.renderOrder=4;let V=Ti[z];Z.sp.position.set(V.x,V.y+10,V.z),Z.sp.scale.set(17,7.8,1),r.add(Z.sp)}Z.sp.material.map&&Z.sp.material.map.dispose(),Z.sp.material.map=Fa(T,z+1),Z.sp.material.needsUpdate=!0,Z.mint=T.mint,Z.icon=T.iconUrl||"",Z.coin=T,Z.sp.userData={kind:"bill",key:T.mint,coin:T}})}let za=Ae,_n=[],Dt=new vt(new fo(3.4,3.4,140,24,1,!0).translate(0,70,0),new Ut({color:new De(1.6,.45,1.1),transparent:!0,opacity:.14,blending:yi,depthWrite:!1,side:Xn}));Dt.position.set(re[0],0,re[1]),Dt.visible=!1,r.add(Dt);let Kn=(()=>{let m=document.createElement("canvas");m.width=320,m.height=120;let _=m.getContext("2d");_.fillStyle="rgba(10,5,32,.9)",D(_,6,8,308,104,26),_.fill(),_.strokeStyle="#ff4f9e",_.lineWidth=4,D(_,6,8,308,104,26),_.stroke(),_.fillStyle="#ff9ec9",_.font="900 16px Inter, sans-serif",_.textAlign="center",_.fillText("YOUR SAFEHOUSE",160,44),_.fillStyle="#fff",_.font="900 25px Inter, sans-serif",_.fillText("Connect to park your bag",160,82);let T=new si(m);T.colorSpace=Jt;let z=new Si(new ui({map:T,transparent:!0}));return z.position.set(re[0],7,re[1]),z.scale.set(10,3.75,1),z.userData={kind:"safehouse",key:"home"},r.add(z),z})();function cr(m){for(let z of _n)r.remove(z.sp),z.sp.material.map.dispose(),z.sp.material.dispose();for(let z of kt)z.mine&&ut(z);_n.length=0;let _=(m||[]).slice(0,za),T=kt.filter(z=>z.mine);_.forEach((z,Z)=>{let V=re[0]-5.2+Z%5*2.6,Y=re[1]-2.5+Math.floor(Z/5)*5,Pe=T[Z],ze={mint:z.mint,symbol:z.sym||"?",iconUrl:z.iconUrl||"",up:(z.ch||0)>=0,cat:"mine"},B=Pt(ze,0,ze.up,!1);Pe.coin=ze,Pe.gx=V,Pe.gz=Y,Pe.gyaw=-Math.PI/2,Pe.scale=.9,Pe.spawn=-9,Pe.fx=null,pe(Pe,ze),B.userData={kind:"mine",key:z.mint,row:z},B.position.set(V,3.6*.9+1.7,Y),B.scale.set(4.2,2.6,1),r.add(B),_n.push({r:z,x:V,z:Y,sp:B})}),Dt.visible=_n.length>0,Kn.visible=!_n.length}let us=C.filter(m=>m.big),Ai=[];for(let m=0;m<Math.min(6,us.length);m++){let _=us[Math.floor(c()*us.length)];Ai.push({x:_.x+(c()-.5)*(_.w-2),y:_.y+(_.big,0),z:_.z+(c()-.5)*(_.d-2)})}for(let m of Ai){let _=new xo("#ff7a3a",60,40,1.6);_.position.set(m.x,m.y+3,m.z),r.add(_),m.light=_}let Ns=Ai.length*10,In=new an(v(),new Ut({toneMapped:!1}),Ns);In.frustumCulled=!1,r.add(In);let Os=t?160:320,Fs=new an(v(),new Xt({color:"#3a2a5a",transparent:!0,opacity:.82}),Os);Fs.frustumCulled=!1,r.add(Fs);let Ba=Array.from({length:Os},(m,_)=>({f:Ai[_%Ai.length],t:c()*9,life:7+c()*3,ox:(c()-.5)*2,oz:(c()-.5)*2,s:.8+c()*.8})),Gr=160,qi=new an(v(),new Ut({toneMapped:!1}),Gr);qi.frustumCulled=!1,r.add(qi);let Mo=Array.from({length:Gr},()=>({t:9,p:new U,v:new U,c:new De})),zs=new xo("#ffd0a0",0,120,1.4);r.add(zs);let hr=new vt(new po(1,16,12),new Ut({color:new De(6,3.6,1.8),transparent:!0,opacity:0,toneMapped:!1}));r.add(hr);let Bs=new vt(new bl(1,.08,6,48).rotateX(Math.PI/2),new Ut({color:new De(3,2,2.6),transparent:!0,opacity:0,toneMapped:!1}));r.add(Bs);let ur=2,fs=9,Bn=new U,On=t?700:1600,Hn=new an(v(),new Ut({toneMapped:!1}),On);Hn.frustumCulled=!1,r.add(Hn);let Yi=Array.from({length:On},()=>({t:9,life:1,p:new U,v:new U,c:new De,s:.4,drag:1})),Hs=[[.3,3.4,2.1],[3.6,2.6,.5],[3.2,3.2,3.4],[3.6,.9,2.4],[1,1.8,3.8]],ds=new U,Zi=[],ks=0,Fn=3.4,ps=8+c()*6,ms=9,gs=.5;function pi(m,_,T,z,Z,V){let Y=Yi[ks];ks=(ks+1)%On,Y.t=0,Y.life=z,Y.p.copy(m),Y.v.copy(_),Y.c.setRGB(T[0],T[1],T[2]),Y.s=Z,Y.drag=V}function Ha(){let m=kt.filter(T=>T.coin&&!T.mine&&T.coin.up&&T.pos);if(!m.length)return;m.sort((T,z)=>(z.coin.chg||0)-(T.coin.chg||0));let _=m[Math.floor(c()*c()*Math.min(m.length,10))];Zi.push({p:new U(_.pos[0],2.5,_.pos[1]),v:new U((c()-.5)*4,36+c()*14,(c()-.5)*4),t:0,fuse:1.2+c()*.5,col:c()<.6?0:Math.floor(c()*Hs.length)})}function ka(){let m=C[Math.floor(c()*C.length)];Bn.set(m.x,m.y+1,m.z),fs=0;let _=0;for(let T of Mo){if(_>40)break;T.t>2.5&&(T.t=0,T.p.copy(Bn),T.v.set((c()-.5)*22,8+c()*18,(c()-.5)*22),T.c.setRGB(3,1.2+c(),.3+c()*.4),_++)}}let kn=[],fr=new U,dr=new Ut({color:new De(.7,.75,1),transparent:!0,opacity:.1,blending:yi,depthWrite:!1,side:Xn});for(let m=0;m<3;m++){let _=new zn,T=new Xt({color:"#16123a"}),z=new vt(v(),T);z.scale.set(2.4,1.6,4),_.add(z);let Z=new vt(v(),T);Z.scale.set(.6,.6,4),Z.position.set(0,.3,-3.6),_.add(Z);let V=new vt(v(),new Ut({color:"#0c0a1e"}));V.scale.set(9,.12,.5),V.position.y=1.1,_.add(V);let Y=new vt(new rr(9,60,24,1,!0).translate(0,-30,0),dr);Y.position.y=-.6,_.add(Y);let Pe=new vt(v(),new Ut({color:new De(4,.3,.4),toneMapped:!1}));Pe.scale.setScalar(.35),Pe.position.set(0,-.9,-1.6),_.add(Pe),r.add(_),kn.push({g:_,rot:V,cone:Y,red:Pe,r:30+m*18,h:46+m*9,spd:.12+m*.05,ph:m*2.1})}function Wr(m){kn.forEach((_,T)=>{let z=m[T];if(_.sp&&(_.g.remove(_.sp),_.sp.material.map.dispose(),_.sp.material.dispose(),_.sp=null),!z)return;let Z=document.createElement("canvas");Z.width=300,Z.height=106;let V=Z.getContext("2d");V.fillStyle="rgba(10,5,32,.9)",D(V,6,8,288,90,22),V.fill(),V.strokeStyle="rgba(255,210,63,.9)",V.lineWidth=3,D(V,6,8,288,90,22),V.stroke(),V.fillStyle="#ffd23f",V.font="900 14px Inter, sans-serif",V.textAlign="left",V.fillText("PUMP.FUN WHALE",22,33),z.sol!=null&&(V.textAlign="right",V.fillStyle="rgba(220,214,255,.9)",V.font="800 15px Inter, sans-serif",V.fillText(Math.round(z.sol).toLocaleString("en-US")+" SOL",278,33)),V.textAlign="left",V.fillStyle="#fff",V.font="900 28px Inter, sans-serif",V.fillText(String(z.n||"").slice(0,14),22,65);let Y=z.last;if(Y){V.fillStyle=Y.side==="buy"?"#2ee6a6":"#ff4f9e",V.font="800 15px Inter, sans-serif";let ze=(Y.side==="buy"?"Bought $":"Sold $")+(Y.sym||"\u2026")+" \xB7 "+(+Y.sol||0).toFixed(1)+" SOL";for(;V.measureText(ze).width>256&&ze.length>4;)ze=ze.slice(0,-2)+"\u2026";V.fillText(ze,22,88)}let Pe=new si(Z);Pe.colorSpace=Jt,_.sp=new Si(new ui({map:Pe,transparent:!0,depthTest:!1})),_.sp.renderOrder=6,_.sp.position.set(0,4.4,0),_.sp.scale.set(8.6,3.04,1),_.sp.userData={kind:"whale",key:z.a,whale:z},_.g.add(_.sp)})}let Xr=[];for(let m=0;m<5;m++){let _=us[m*7%Math.max(1,us.length)]||{x:0,y:30,z:0},T=new vt(new rr(6,220,20,1,!0).rotateX(Math.PI).translate(0,110,0),new Ut({color:new De(.9,.85,1),transparent:!0,opacity:.06,blending:yi,depthWrite:!1,side:Xn}));T.position.set(_.x,_.y+1,_.z),r.add(T),Xr.push({cone:T,ph:m*1.3,sp:.25+m*.06})}let qr=t?500:1100,xs=new an(v(),new Ut({color:new De(.55,.62,1.1),transparent:!0,opacity:.32,depthWrite:!1}),qr);xs.frustumCulled=!1,xs.count=0,r.add(xs);let Yr=Array.from({length:qr},()=>({x:(c()-.5)*170,y:c()*80,z:(c()-.5)*170,v:55+c()*25})),_s=0,ri=Nf({scene:r,col:M,voxMesh:L,boxGeo:v,U:a,mobile:t,HALF:Mn,PITCH:fi,BLK:Di,NB:Ui,BEACH_X:tn,PIER_Z:Ce,WHEEL:I,roofs:C,ants:O,site:ae,zones:f,spark:pi,seaMat:x.material,cam:l,rr:D,loadIcon:Ne,mono:st});r.add(new Tl("#8a8aff","#3a1a4a",1.5));let Va=new Rl("#ffd0f0",1.5);Va.position.copy(h).multiplyScalar(100),r.add(Va),r.fog=null;let Ri=new Bl(n);Ri.addPass(new Hl(r,l));let Ga=new Na(new Je(256,256),t?.38:.45,.42,.92);Ri.addPass(Ga),Ri.addPass(new kl);let wt=new Nl(l,i);wt.enableDamping=!0,wt.dampingFactor=.06,wt.minDistance=25,wt.maxDistance=260,wt.maxPolarAngle=1.32,wt.minPolarAngle=.35,wt.target.set(0,4,0),wt.autoRotate=!0,wt.autoRotateSpeed=.35,wt.enablePan=!0,wt.screenSpacePanning=!1;let $n=.0031,Vs=new U(98,56,118),Ji=new U(0,4,0),pr=new U,Zr=new U,Jr=Vs.clone(),mr=Ji.clone(),jn=!!e.gate,Yt=jn?"gate":"drive",ai=0,Gs=0,gr=0,An=null,Fi=$n,vs=0,Ki=[],Kr=null,$t=Of({scene:r,cam:l,canvas:i,target:wt.target,HALF:Mn,PITCH:fi,BLK:Di,BEACH_X:tn,zones:f,homeLot:re,WHEEL:I,helis:kn,cars:kt,more:ri,mobile:t,hotMint:()=>Kr});wt.enabled=!1,wt.autoRotate=!1,jn?a.uFogD.value=.0018:($t.place(0),$t.chasePose(l.position,wt.target),$t.setActive(!0)),wt.addEventListener("start",()=>{gr=0,wt.autoRotate=!1,ai=0,a.uFogD.value=$n});let vn=(m,_,T)=>new U(m,_,T),Eo=()=>kt.filter(m=>m.coin&&!m.mine&&m.pos&&m.coin.cat!=="new").sort((m,_)=>(_.coin.heat||0)-(m.coin.heat||0))[0],So={streets:()=>[vn(66+Math.sin(gt*.08)*8,36,76),vn(8,2,10)],hot:()=>{let m=Eo();return m?[vn(m.pos[0]+26,24,m.pos[1]+28),vn(m.pos[0],2,m.pos[1])]:So.streets()},drops:()=>[vn(-58+Math.sin(gt*.1)*6,62,18),vn(-4,2,-30)],migrated:()=>[vn(-78,60,64),vn(0,26,0)],harbor:()=>[vn(tn-16,27,48),vn(tn+44,0,-6)],pier:()=>[vn(tn+14+Math.sin(gt*.1)*4,12,Ce+50),vn(I.x,15,I.z)],whales:()=>{let m=kn[0]?kn[0].g.position:vn(0,50,0);return[vn(m.x+24,m.y+3,m.z+24),vn(m.x,m.y-3,m.z)]},safehouse:()=>[vn(re[0]+26,21,re[1]+30),vn(re[0],2,re[1])],mood:()=>[vn(-180+Math.sin(gt*.05)*20,128,-150),vn(0,0,0)],roam:()=>[Vs.clone(),Ji.clone()],...ri.shots},xr=m=>$t.shot(m);function _r(m,_){pr.copy(l.position),Zr.copy(wt.target),Jr.copy(m),mr.copy(_),Fi=a.uFogD.value,e.reduced?(l.position.copy(m),wt.target.copy(_),a.uFogD.value=$n,ai=0):(ai=1,Gs=0),gr=0}function $r(){if(jn)if(jn=!1,Ki.length){Yt="story",wt.enabled=!1,$t.setActive(!1,e.onWheel);let[m,_]=xr(Math.round(vs));_r(m,_)}else Xs(!0)}let $i=new U,Ws=new U;function Xs(m){Yt="drive",wt.enabled=!1,wt.autoRotate=!1,An=null,$t.setActive(!0),m&&($t.chasePose($i,Ws),_r($i.clone(),Ws.clone()))}function vr(){Yt="map",wt.enabled=!0,$t.setActive(!1);let m=$t.S;_r(new U(m.x+46,62,m.z+58),new U(m.x,2,m.z))}addEventListener("keydown",m=>{m.code!=="KeyV"||m.metaKey||m.ctrlKey||/INPUT|TEXTAREA|SELECT/.test((document.activeElement||{}).tagName||"")||(Yt==="drive"?vr():Yt==="map"&&Xs(!1))});function Wa(){let m=i.clientWidth||innerWidth,_=i.clientHeight||innerHeight;n.setPixelRatio(s),n.setSize(m,_,!1),Ri.setPixelRatio(s),Ri.setSize(m,_),l.aspect=m/_,l.fov=m/_<.8?58:42,l.updateProjectionMatrix()}Wa(),addEventListener("resize",Wa);try{t||(Ri.renderTarget1.samples=4,Ri.renderTarget2.samples=4)}catch{}let bo=new Pl,ji=new Je,mi=null,oi=null,Qn=null,Qi=()=>{let m=[];for(let _ of me.values())m.push(_.sp);for(let _ of Sn)m.push(_.sp);for(let _ of Ds)m.push(_.sp);for(let _ of _n)m.push(_.sp);for(let _ of Nn)m.push(_.sp);Kn.visible&&m.push(Kn);for(let _ of kn)_.sp&&m.push(_.sp);for(let _ of ri.pickables())m.push(_);return m};function ys(m,_){let T=i.getBoundingClientRect();ji.set((m-T.left)/T.width*2-1,-(_-T.top)/T.height*2+1),bo.setFromCamera(ji,l);let z=bo.intersectObjects(Qi(),!1);return z.length?z[0].object.userData:null}function jr(m){if(!m)return null;if(m.kind==="coin"){let _=me.get(m.key);return _&&_.car&&_.car.coin?{kind:"coin",coin:_.car.coin}:m.coin?{kind:"coin",coin:m.coin}:null}if(m.kind==="bill")return{kind:"coin",coin:me.get(m.key)&&me.get(m.key).car&&me.get(m.key).car.coin||m.coin};if(m.kind==="perp"){let _=Sn.find(T=>T.p.name===m.key);return _?{kind:"perp",perp:_.p}:null}return m.kind==="whale"?{kind:"whale",whale:m.whale}:m.kind==="mine"?{kind:"mine",row:m.row}:m.kind==="safehouse"?{kind:"safehouse"}:(m.kind==="bubble",null)}i.addEventListener("pointermove",m=>{if(m.pointerType&&m.pointerType!=="mouse")return;let _=ys(m.clientX,m.clientY),T=_?_.kind+":"+_.key:null,z=jr(_);mi=z&&z.kind==="coin"?z.coin.mint:null,T!==oi&&(oi=T,i.style.cursor=T?"pointer":"grab"),e.onHover&&e.onHover(z,m.clientX,m.clientY)}),i.addEventListener("pointerdown",m=>{Qn=[m.clientX,m.clientY]}),i.addEventListener("pointerup",m=>{if(!Qn||Math.hypot(m.clientX-Qn[0],m.clientY-Qn[1])>8)return;let _=jr(ys(m.clientX,m.clientY));if(_&&_.kind==="coin"){let T=me.get(_.coin.mint);An=T&&T.car?T.car:null,wt.autoRotate=!1}else _&&_.kind==="perp"?(An=Sn.find(T=>T.p.name===_.perp.name)||null,wt.autoRotate=!1):An=null;e.onPick&&e.onPick(_)});let Ot=new Ft,fn=new Tn,Qt=new U,ln=new U,bn=new os,gi=new De,gt=0,es=performance.now(),Ci=0,Ms=!1,Qr=!1,qs=0,yr=!1,Pi=!1;function ea(m){gt+=m,a.uTime.value=gt,qs++;let _=0;for(be.forEach((B,ce)=>{B.d+=B.sp*m,B.police&&B.chase&&(B.r=B.chase.r,B.d=B.chase.d-B.gap);let[ve,Xe,Rt]=_t(B.r,B.d,1);fn.setFromEuler(bn.set(0,Rt,0));let u=Math.sin(Rt),S=Math.cos(Rt);for(let[X,Q,xe]of ee)Qt.set(ve+Q[0]*S+Q[2]*u,Q[1],Xe-Q[0]*u+Q[2]*S),ln.set(...xe),Ot.compose(Qt,fn,ln),Te[X].setMatrixAt(ce,Ot);B.police?gi.set(Math.sin(gt*10+ce)>0?"#1a1a2e":"#f4f4ff"):gi.copy(B.color),Te.body.setColorAt(ce,gi);let R=B.police?[[.3,1.35,-.1,Math.sin(gt*12+ce)>0?[5,.3,.4]:[.3,.5,5]],[-.3,1.35,-.1,Math.sin(gt*12+ce)>0?[.3,.5,5]:[5,.3,.4]]]:[[.35,.6,1.12,[4,3.8,3.2]],[-.35,.6,1.12,[4,3.8,3.2]],[.38,.6,-1.12,[3,.2,.25]],[-.38,.6,-1.12,[3,.2,.25]]];for(let[X,Q,xe,Ze]of R)Qt.set(ve+X*S+xe*u,Q,Xe-X*u+xe*S),ln.set(.28,.16,.1),Ot.compose(Qt,fn,ln),Ee.setMatrixAt(_,Ot),Ee.setColorAt(_,gi.setRGB(...Ze)),_++;B.pos=[ve,Xe]});_<A*4;_++)Ot.makeScale(0,0,0),Ee.setMatrixAt(_,Ot);Lt(m);for(let B of Object.values(Te))B.instanceMatrix.needsUpdate=!0;Te.body.instanceColor.needsUpdate=!0,Ee.instanceMatrix.needsUpdate=!0,Ee.instanceColor.needsUpdate=!0;let T=Yt==="story"||Yt==="drive";for(let[B,ce]of me){if(!ce.car||!ce.car.pos)continue;let ve=Math.min(1,(gt-ce.born)*2);ce.sp.position.set(ce.car.pos[0],ce.car.by+.2*Math.sin(gt*2+ce.car.ph),ce.car.pos[1]);let Xe=1,Rt=1;if(T){let u=l.position.distanceTo(ce.sp.position),S=$t.pinPos(ce.car,gt)!=null;Xe=S?Math.max(.62,Math.min(1,(u-3)/22)):Math.max(.22,Math.min(1,(u-3)/30)),Rt=S?1:Math.max(0,Math.min(1,(u-5)/7))}ce.sp.material.opacity=Rt,ce.sp.scale.set(6.4*ve*Xe*(mi===B?1.25:1),4*ve*Xe*(mi===B?1.25:1),1)}Sn.forEach((B,ce)=>{B.d+=m*1.6;let ve=2*Mn-12,Xe=(B.d+(B.dir<0?ve:0))%(2*ve)/ve,Rt=Xe<=1,u=-Mn+6+(Rt?Xe:2-Xe)*ve,S=B.x+Math.sin(gt*.3+B.ph)*1.5,R=.25+Math.sin(gt*1.6+B.ph)*.18,X=Rt?0:Math.PI;fn.setFromEuler(bn.set(Math.sin(gt*1.3+B.ph)*.05,X,Math.sin(gt*1.1+B.ph)*.06));let Q=Math.sin(X),xe=Math.cos(X);for(let[tt,at,Tt]of Vr)Qt.set(S+at[2]*Q*B.sz,R+at[1]*B.sz,u+at[2]*xe*B.sz),ln.set(Tt[0]*B.sz,Tt[1]*B.sz,Tt[2]*B.sz),Ot.compose(Qt,fn,ln),di[tt].setMatrixAt(ce,Ot);di.sail.setColorAt(ce,gi.setRGB(...B.p.chg>=0?[.14,1.2,.72]:[1.35,.2,.66])),B.sp.position.set(S,7.6*B.sz+.3,u);let Ze=oi==="perp:"+B.p.name?1.2:1;for(B.sp.scale.set(6.6*Ze,2.4*Ze,1),B.pos=[S,u],B.wake+=m*7;B.wake>=1;)B.wake--,pi(Qt.set(S-Q*2.8*B.sz+(c()-.5),.5,u-xe*2.8*B.sz),ds.set((c()-.5)*1.5,.6+c()*.6,(c()-.5)*1.5),[2.2,2.4,2.8],.9+c()*.4,.3,2.5)});for(let B in di)di[B].instanceMatrix.needsUpdate=!0;for(di.sail.instanceColor&&(di.sail.instanceColor.needsUpdate=!0);hn.length;){let[B,ce,ve]=hn.pop(),Xe=ve?[.8,2.4,3.8]:[3.6,2.6,.5];for(let Rt=0;Rt<(ve?90:40);Rt++)pi(Qt.set(B,3,ce),ds.set((c()-.5)*(ve?22:14),6+c()*(ve?18:10),(c()-.5)*(ve?22:14)),Rt%4?Xe:[3.4,3.4,3.6],1.1+c()*.7,ve?.6:.45,1.6)}let z=0;Ai.forEach((B,ce)=>{for(let ve=0;ve<10;ve++){let Xe=.5+.9*Math.abs(Math.sin(gt*(6+ve)+ve*1.7+ce));Qt.set(B.x+(ve*37%5-2)*.45,B.y+Xe*.5+ve%3*.3,B.z+(ve*13%5-2)*.45),ln.set(.7,Xe,.7),Ot.compose(Qt,fn.identity(),ln),In.setMatrixAt(z,Ot),In.setColorAt(z,gi.setRGB(4,1.2+ve%3*.6,.2)),z++}B.light.intensity=45+25*Math.sin(gt*13+ce)}),In.instanceMatrix.needsUpdate=!0,In.instanceColor.needsUpdate=!0,Ba.forEach((B,ce)=>{B.t+=m,B.t>B.life&&(B.t=0);let ve=B.t/B.life,Xe=(B.s+ve*3.2)*(ve<.1?ve*10:ve>.85?(1-ve)/.15:1);Qt.set(B.f.x+B.ox+ve*ve*16,B.f.y+2+ve*34,B.f.z+B.oz+ve*3),ln.setScalar(Math.max(.001,Xe)),fn.setFromEuler(bn.set(ve*2+ce,ve*3,0)),Ot.compose(Qt,fn,ln),Fs.setMatrixAt(ce,Ot)}),Fs.instanceMatrix.needsUpdate=!0,ur-=m,ur<=0&&d>2.6&&(ka(),ur=(2.6+c()*3)*(.45+gs*1.3)),fs+=m;let Z=Math.max(0,1-fs/.9);zs.position.copy(Bn),zs.intensity=Z*900,hr.position.copy(Bn),hr.scale.setScalar(1+fs*9),hr.material.opacity=Z,Bs.position.copy(Bn),Bs.scale.setScalar(1+fs*22),Bs.material.opacity=Math.max(0,1-fs/1.1)*.45,Mo.forEach((B,ce)=>{if(B.t+=m,B.t>2.5){Ot.makeScale(0,0,0),qi.setMatrixAt(ce,Ot);return}B.v.y-=26*m,B.p.addScaledVector(B.v,m),B.p.y<.2&&(B.p.y=.2,B.v.multiplyScalar(.4),B.v.y=Math.abs(B.v.y)*.3);let ve=.45*(1-B.t/2.5);Ot.compose(B.p,fn.setFromEuler(bn.set(B.t*7,B.t*5,0)),ln.setScalar(ve)),qi.setMatrixAt(ce,Ot),qi.setColorAt(ce,B.c)}),qi.instanceMatrix.needsUpdate=!0,qi.instanceColor&&(qi.instanceColor.needsUpdate=!0),Fn-=m,Fn<=0&&(Ha(),Fn=(1.5+c()*2.2)*(1.6-gs*1.1));for(let B=Zi.length-1;B>=0;B--){let ce=Zi[B];if(ce.t+=m,ce.v.y-=9*m,ce.p.addScaledVector(ce.v,m),pi(ce.p,ds.set((c()-.5)*1.5,-2-c()*2,(c()-.5)*1.5),[3,2.4,1.4],.45+c()*.3,.26,2.5),ce.t>=ce.fuse){let ve=Hs[ce.col],Xe=Hs[(ce.col+2)%Hs.length],Rt=t?60:110,u=19+c()*8;for(let S=0;S<Rt;S++){let R=c()*Math.PI*2,X=Math.acos(2*c()-1),Q=u*(.75+c()*.3);ds.set(Math.sin(X)*Math.cos(R)*Q,Math.cos(X)*Q,Math.sin(X)*Math.sin(R)*Q),pi(ce.p,ds,S%5===0?Xe:ve,1.6+c()*.9,.85+c()*.4,1.5)}Zi.splice(B,1)}}Yi.forEach((B,ce)=>{if(B.t>=B.life){B.t<50&&(B.t=99,Ot.makeScale(0,0,0),Hn.setMatrixAt(ce,Ot));return}B.t+=m,B.v.y-=7*m,B.v.multiplyScalar(Math.max(0,1-B.drag*m)),B.p.addScaledVector(B.v,m);let ve=Math.max(0,1-B.t/B.life),Xe=ve*ve*(Math.sin(gt*40+ce)>-.6?1:.3);Ot.compose(B.p,fn.identity(),ln.setScalar(B.s*(.4+.6*ve))),Hn.setMatrixAt(ce,Ot),Hn.setColorAt(ce,gi.setRGB(B.c.r*Xe,B.c.g*Xe,B.c.b*Xe))}),Hn.instanceMatrix.needsUpdate=!0,Hn.instanceColor&&(Hn.instanceColor.needsUpdate=!0),_s+=(Math.max(0,Math.min(1,(.38-gs)/.22))-_s)*Math.min(1,m*.5),a.uMood.value+=(gs-a.uMood.value)*Math.min(1,m*.4);let V=e.reduced?0:Math.floor(qr*_s);if(xs.count=V,V){let B=wt.target.x,ce=wt.target.z;for(let ve=0;ve<V;ve++){let Xe=Yr[ve];Xe.y-=Xe.v*m,Xe.y<0&&(Xe.y+=80,Xe.x=(c()-.5)*170,Xe.z=(c()-.5)*170),Qt.set(B+Xe.x,Xe.y,ce+Xe.z),ln.set(.07,1.6,.07),Ot.compose(Qt,fn.set(.08,0,.04,1).normalize(),ln),xs.setMatrixAt(ve,Ot)}xs.instanceMatrix.needsUpdate=!0}ps-=m,ps<=0&&(ms=0,ps=(9+c()*9)*(.5+gs*1.1)),ms+=m,a.uFlash.value=e.reduced?0:ms<.07?.5:ms<.14?.08:ms<.22?.38:Math.max(0,.38-(ms-.22)*1.6),d<99&&wo(m),ri.step(m,gt),ri.glowG.visible=d>2.2;let Y=d>2.6;se.visible=d>1.6,In.visible=Fs.visible=Y;for(let B of Xr)B.cone.visible=Y;for(let B of Ds)B.sp.visible=Y;Le.rotation.z=gt*.16,lt.forEach((B,ce)=>{let ve=ce/lt.length*lr+gt*.16;B.position.set(Math.cos(ve)*15,Math.sin(ve)*15-1.8,0)});{let B=Math.floor(gt*9);for(let ce=0;ce<ge;ce++){let ve=(ce+B)%8;He.setColorAt(ce,gi.setRGB(...ve<2?[3,.5,1.8]:ve<4?[.5,2,3.2]:ve<6?[3.2,2.6,.6]:[1.4,.6,3]))}He.instanceColor.needsUpdate=!0}ot.rotation.y=gt*.55,Kt(m);{let B=gt*.045;mt.position.set(Math.cos(B)*118,74+Math.sin(gt*.3)*2,Math.sin(B)*118),mt.rotation.y=-B-Math.PI/2,mt.userData.tip.visible=Math.sin(gt*5)>0}for(let B=Nn.length-1;B>=0;B--){let ce=Nn[B];ce.t+=m;let ve=ce.t/ce.life;if(ve>=1){r.remove(ce.sp),ce.sp.material.map.dispose(),ce.sp.material.dispose(),Nn.splice(B,1);continue}let Xe=Math.min(1,ce.t/.38),Rt=1+2.70158*Math.pow(Xe-1,3)+1.70158*Math.pow(Xe-1,2),u=ve>.84?(1-ve)/.16:1,S=ce.car&&ce.car.pos?ce.car.pos[0]:ce.x,R=ce.car&&ce.car.pos?ce.car.pos[1]:ce.z,X=(ce.car?8:ce.y)+ce.t*.45;ce.sp.position.set(S,X,R);let Q=l.position.distanceTo(ce.sp.position),xe=Math.max(.32,Math.min(2.6,Q/95))*Rt;ce.sp.scale.set(10.8*xe,4.05*xe,1),ce.sp.material.opacity=u}{let B=a.uMood.value,ce=Math.min(1,Math.max(0,(B-.25)/.25)),ve=Math.min(1,Math.max(0,(B-.6)/.25))*.6,Xe=.62+.38*ce,Rt=.12+.19*ce,u=.3+.32*ce;Xe+=(1-Xe)*ve,Rt+=(.55-Rt)*ve,u+=(.5-u)*ve;let S=[.068,.023,.25];o.setRGB(S[0]+(Math.pow(Xe,2.2)*.7-S[0])*.42,S[1]+(Math.pow(Rt,2.2)*.7-S[1])*.42,S[2]+(Math.pow(u,2.2)*.7-S[2])*.42)}let Pe=$t.names.indexOf("whales"),ze=Yt==="story"&&Ki.length&&Pe>=0?Math.max(0,Math.min(1,1.6-Math.abs(vs-Pe)*2)):0;kn.forEach((B,ce)=>{let ve=gt*B.spd+B.ph;B.g.position.set(Math.cos(ve)*B.r,B.h+Math.sin(gt*1.3+B.ph)*1.5,Math.sin(ve)*B.r);let Xe=-ve;if(B.hk=(B.hk||0)+((ce<2?ze:0)-(B.hk||0))*(1-Math.exp(-m*1.3)),B.hk>.002){let Rt=$t.S,u=Math.sin(Rt.yaw),S=Math.cos(Rt.yaw),R=l.aspect<.8,X=ce?30:14,Q=R?ce?-.3:.3:ce?-1.8:1.6,xe=B.hk*B.hk*(3-2*B.hk);fr.set(Rt.x+u*X+S*Q,(ce?14.3:11)+Math.sin(gt*1.3+B.ph)*.6,Rt.z+S*X-u*Q),B.g.position.lerp(fr,xe);let Ze=Rt.yaw+Math.PI+(ce?.35:-.3);Xe+=(((Ze-Xe)%6.2832+9.4248)%6.2832-3.1416)*xe}if(B.sp){let Rt=1-(l.aspect<.8?.4:0)*(B.hk>.002?B.hk*B.hk*(3-2*B.hk):0);B.sp.scale.set(8.6*Rt,3.04*Rt,1)}B.g.rotation.y=Xe,B.rot.rotation.y=gt*30,B.cone.rotation.z=Math.sin(gt*.7+B.ph)*.35*(1-(B.hk||0)*.8),B.red.visible=Math.sin(gt*6+B.ph)>0});for(let B of Xr)B.cone.rotation.set(Math.sin(gt*B.sp+B.ph)*.5,0,Math.cos(gt*B.sp*.8+B.ph)*.5);if(jn){let B=gt*.04+.9;l.position.set(Math.cos(B)*228,138,Math.sin(B)*228),wt.target.set(0,4,-10)}else if(ai>0){Gs+=m;let B=Math.min(1,Gs/3.4),ce=B<.5?4*B*B*B:1-Math.pow(-2*B+2,3)/2;if(Yt==="story"){let[ve,Xe]=xr(Math.round(vs));Jr.lerp(ve,.1),mr.lerp(Xe,.1)}else Yt==="drive"&&($t.chasePose($i,Ws),Jr.lerp($i,.1),mr.lerp(Ws,.1));l.position.lerpVectors(pr,Jr,ce),wt.target.lerpVectors(Zr,mr,ce),a.uFogD.value=Fi+($n-Fi)*ce,B>=1&&(ai=0)}else Yt==="story"&&Ki.length?$t.story(vs,m):Yt==="drive"?$t.free(m):An&&An.pos?wt.target.lerp(Qt.set(An.pos[0],2,An.pos[1]),.08):(gr+=m,gr>18&&!e.reduced?To(m):gr>10&&!wt.autoRotate&&(wt.autoRotate=!0));Yt==="map"&&!ai?wt.update():l.lookAt(wt.target),e.onFrame&&qs%3===0&&e.onFrame({cars:be,coins:kt,boats:Sn,helis:kn,garage:_n.length,cam:l,controls:wt,half:Mn,beach:tn,pitch:fi,me:$t.S,mode:Yt})}function wo(m){d+=m;let _=!0;for(let{m:T,list:z}of g){let Z=!1;for(let V=0;V<z.length;V++){let Y=z[V];Y.rd==null&&(Y.rd=.15+Math.hypot(Y.x,Y.z)/300*2.2+c()*.35);let Pe=Math.min(1,Math.max(0,(d-Y.rd)/.75));if(Pe<1&&(_=!1),Y.rk===Pe)continue;Y.rk=Pe,Z=!0;let ze=Pe>=1?1:1+2.70158*Math.pow(Pe-1,3)+1.70158*Math.pow(Pe-1,2),B=Math.max(.001,ze);Qt.set(Y.x,(Y.y+Y.h/2)*B,Y.z),ln.set(Y.w,Y.h*B,Y.d),fn.setFromEuler(bn.set(Y.rx||0,Y.ry||0,Y.rz||0)),Ot.compose(Qt,fn,ln),T.setMatrixAt(V,Ot)}Z&&(T.instanceMatrix.needsUpdate=!0)}_&&(d=99)}let ts=new U,ns=new U,Mr=0;function To(m){wt.autoRotate=!1,Mr+=m;let _=Math.floor(Mr/9)%10,T=gt*.07;if(_>=5){let[Z,V]=ri.shots[["airport","port","arena","bridge","site"][_-5]](),Y=1-Math.exp(-m*.9);wt.target.lerp(V,Y),l.position.lerp(Z,Y*.8);return}if(_===1){let Z=kt.filter(V=>V.coin&&!V.mine&&V.pos&&!V.coin.isNew).sort((V,Y)=>(Y.coin.heat||0)-(V.coin.heat||0))[0];Z?(ts.set(Z.pos[0],2,Z.pos[1]),ns.set(Math.cos(T)*30,17,Math.sin(T)*30)):(ts.set(0,6,0),ns.set(Math.cos(T)*150,85,Math.sin(T)*150))}else _===2?(ts.set(tn+38,3,Math.sin(gt*.08)*55),ns.set(-62,32,46)):_===3?(ts.set(I.x,15,I.z),ns.set(-34+Math.sin(T)*10,-2,44)):_===4&&kn[0]?(ts.copy(kn[0].g.position),ns.set(Math.cos(T)*38,10,Math.sin(T)*38)):(ts.set(0,6,0),ns.set(Math.cos(T)*150,85,Math.sin(T)*150));let z=1-Math.exp(-m*.9);wt.target.lerp(ts,z),l.position.lerp(ns.add(ts),z*.8)}function Er(m){if(Ci=0,Ms)return;let _=Math.max(0,Math.min(.05,(m-es)/1e3));es=m,!Qr||qs%2===0?(ea(e.reduced?_*.3:_),Ri.render()):qs++,Ci=requestAnimationFrame(Er)}let Ys=()=>{!Ci&&!Ms&&(es=performance.now(),Ci=requestAnimationFrame(Er))};document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(Ci),Ci=0):Ys()}),ea(0),Ys();let Sr={setCoins:At,setPerps:Wl,setWhales:Wr,setGarage:cr,home:()=>re,setMood(m){gs=Math.max(0,Math.min(1,m))},chased:()=>Gt,follow(m){let _=me.get(m);_&&(Yt==="drive"&&vr(),An=_.car,wt.autoRotate=!1)},followPerp(m){let _=Sn.find(T=>T.p.name===m);_&&(Yt==="drive"&&vr(),An=_,wt.autoRotate=!1)},unfollow(){An=null},pause(m){Ms=m,m?(cancelAnimationFrame(Ci),Ci=0):Ys()},slow(m){Qr=m},enter:$r,entered:()=>!jn,bubble:kr,setStory(m){Ki=m.slice()},story(m){vs=m,!jn&&Yt!=="story"&&(Yt="story",wt.enabled=!1,An=null,$t.setActive(!1,e.onWheel))},roam(){jn||Yt==="drive"||Xs(!1)},mode:()=>Yt,overview(){jn||(An=null,vr())},toggleMap(){Yt==="drive"?vr():Yt==="map"&&Xs(!1)},skip(){jn=!1,ai=0,a.uFogD.value=$n,$t.place(0),$t.chasePose(l.position,wt.target),Xs(!1),d=99;for(let{m,list:_}of g)_.forEach((T,z)=>{Qt.set(T.x,T.y+T.h/2,T.z),ln.set(T.w,T.h,T.d),fn.setFromEuler(bn.set(T.rx||0,T.ry||0,T.rz||0)),Ot.compose(Qt,fn,ln),m.setMatrixAt(z,Ot)}),m.instanceMatrix.needsUpdate=!0},shot(m,_=1/30){let T=Math.round(m/_);for(let z=0;z<T;z++)ea(_);yr&&r.traverse(z=>{z.isSprite&&!z.userData.keep&&(z.visible=!1)}),(yr||Pi)&&(Fs.visible=!1),Ri.render()},quiet(m){yr=!!m},nosmoke(m){Pi=!!m},cam:()=>[l.position.toArray(),wt.target.toArray()],adv(m,_=1/30){let T=Math.round(m/_);for(let z=0;z<T;z++)ea(_)},info:()=>({calls:n.info.render.calls,tris:n.info.render.triangles}),car:()=>({x:$t.S.x,z:$t.S.z,yaw:$t.S.yaw,v:$t.S.v,mode:Yt}),canDrive:(m,_)=>$t.open(m,_),launched:m=>ri.launched(m),takeoff:m=>ri.takeoff(m),setBanner:m=>ri.setBanner(m),setArena:m=>{Kr=m&&m.hot?m.hot.mint:null,ri.setArena(m)},view(m,_){jn=!1,Yt="map",wt.enabled=!0,$t.setActive(!1),ai=0,a.uFogD.value=$n,l.position.set(...m),wt.target.set(..._),wt.update()}};return window.__bloxWorld=Sr,Sr}export{Y_ as startWorld};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
