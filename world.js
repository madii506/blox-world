var zr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bf=0,Ch=1,Hf=2;var rf=1,kf=2,Ls=3,cr=0,$n=1,Kn=2;var rs=0,_a=1,Ei=2,Ph=3,Lh=4,Vf=5,Rr=100,Gf=101,Wf=102,Ih=103,Uh=104,Xf=200,qf=201,Yf=202,Zf=203,Rc=204,Cc=205,Jf=206,Kf=207,$f=208,jf=209,Qf=210,ed=211,td=212,nd=213,id=214,sd=0,rd=1,ad=2,tl=3,od=4,ld=5,cd=6,hd=7,dh=0,ud=1,fd=2,or=0,ph=1,mh=2,gh=3,xo=4,dd=5,xh=6;var af=300,Ma=301,Ea=302,Pc=303,Lc=304,Pl=306,Ic=1e3,Yi=1001,Uc=1002,Cn=1003,Dh=1004;var Yl=1005;var fi=1006,pd=1007;var ro=1008;var lr=1009,md=1010,gd=1011,_h=1012,of=1013,rr=1014,ar=1015,Zi=1016,lf=1017,cf=1018,Lr=1020,xd=1021,Mi=1023,_d=1024,vd=1025,Ir=1026,Sa=1027,yd=1028,hf=1029,Md=1030,uf=1031,ff=1033,Zl=33776,Jl=33777,Kl=33778,$l=33779,Nh=35840,Oh=35841,Fh=35842,zh=35843,df=36196,Bh=37492,Hh=37496,kh=37808,Vh=37809,Gh=37810,Wh=37811,Xh=37812,qh=37813,Yh=37814,Zh=37815,Jh=37816,Kh=37817,$h=37818,jh=37819,Qh=37820,eu=37821,jl=36492,tu=36494,nu=36495,Ed=36283,iu=36284,su=36285,ru=36286;var nl=2300,il=2301,Ql=2302,au=2400,ou=2401,lu=2402;var pf=3e3,Ur=3001,Sd=3200,bd=3201,mf=0,wd=1,Di="",Zt="srgb",Ds="srgb-linear",vh="display-p3",Ll="display-p3-linear",sl="linear",an="srgb",rl="rec709",al="p3";var Jr=7680;var cu=519,Td=512,Ad=513,Rd=514,gf=515,Cd=516,Pd=517,Ld=518,Id=519,Dc=35044;var hu="300 es",Nc=1035,Is=2e3,ol=2001,as=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uu=1234567,to=Math.PI/180,ao=180/Math.PI;function Us(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yn[i&255]+Yn[i>>8&255]+Yn[i>>16&255]+Yn[i>>24&255]+"-"+Yn[e&255]+Yn[e>>8&255]+"-"+Yn[e>>16&15|64]+Yn[e>>24&255]+"-"+Yn[t&63|128]+Yn[t>>8&255]+"-"+Yn[t>>16&255]+Yn[t>>24&255]+Yn[n&255]+Yn[n>>8&255]+Yn[n>>16&255]+Yn[n>>24&255]).toLowerCase()}function Fn(i,e,t){return Math.max(e,Math.min(t,i))}function yh(i,e){return(i%e+e)%e}function Ud(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Dd(i,e,t){return i!==e?(t-i)/(e-i):0}function no(i,e,t){return(1-t)*i+t*e}function Nd(i,e,t,n){return no(i,e,1-Math.exp(-t*n))}function Od(i,e=1){return e-Math.abs(yh(i,e*2)-e)}function Fd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function zd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Bd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Hd(i,e){return i+Math.random()*(e-i)}function kd(i){return i*(.5-Math.random())}function Vd(i){i!==void 0&&(uu=i);let e=uu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gd(i){return i*to}function Wd(i){return i*ao}function Oc(i){return(i&i-1)===0&&i!==0}function Xd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ll(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qd(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),p=o((e-n)/2),x=r((n-e)/2),y=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*p,a*l);break;case"YZY":i.set(c*p,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*p,a*h,a*l);break;case"XZX":i.set(a*h,c*y,c*x,a*l);break;case"YXY":i.set(c*x,a*h,c*y,a*l);break;case"ZYZ":i.set(c*y,c*x,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ss(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xf={DEG2RAD:to,RAD2DEG:ao,generateUUID:Us,clamp:Fn,euclideanModulo:yh,mapLinear:Ud,inverseLerp:Dd,lerp:no,damp:Nd,pingpong:Od,smoothstep:Fd,smootherstep:zd,randInt:Bd,randFloat:Hd,randFloatSpread:kd,seededRandom:Vd,degToRad:Gd,radToDeg:Wd,isPowerOfTwo:Oc,ceilPowerOfTwo:Xd,floorPowerOfTwo:ll,setQuaternionFromProperEuler:qd,normalize:tn,denormalize:ss},Xe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],x=n[5],y=n[8],v=s[0],g=s[3],d=s[6],L=s[1],M=s[4],H=s[7],C=s[2],z=s[5],O=s[8];return r[0]=o*v+a*L+c*C,r[3]=o*g+a*M+c*z,r[6]=o*d+a*H+c*O,r[1]=l*v+h*L+u*C,r[4]=l*g+h*M+u*z,r[7]=l*d+h*H+u*O,r[2]=p*v+x*L+y*C,r[5]=p*g+x*M+y*z,r[8]=p*d+x*H+y*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,p=a*c-h*r,x=l*r-o*c,y=t*u+n*p+s*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/y;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=p*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=x*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ec.makeScale(e,t)),this}rotate(e){return this.premultiply(ec.makeRotation(-e)),this}translate(e,t){return this.premultiply(ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ec=new Bt;function _f(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function cl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yd(){let i=cl("canvas");return i.style.display="block",i}var fu={};function io(i){i in fu||(fu[i]=!0,console.warn(i))}var du=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pu=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ao={[Ds]:{transfer:sl,primaries:rl,toReference:i=>i,fromReference:i=>i},[Zt]:{transfer:an,primaries:rl,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ll]:{transfer:sl,primaries:al,toReference:i=>i.applyMatrix3(pu),fromReference:i=>i.applyMatrix3(du)},[vh]:{transfer:an,primaries:al,toReference:i=>i.convertSRGBToLinear().applyMatrix3(pu),fromReference:i=>i.applyMatrix3(du).convertLinearToSRGB()}},Zd=new Set([Ds,Ll]),Kt={enabled:!0,_workingColorSpace:Ds,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Zd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Ao[e].toReference,s=Ao[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ao[i].primaries},getTransfer:function(i){return i===Di?sl:Ao[i].transfer}};function va(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Kr,hl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Kr===void 0&&(Kr=cl("canvas")),Kr.width=e.width,Kr.height=e.height;let n=Kr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Kr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=cl("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=va(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(va(t[n]/255)*255):t[n]=va(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jd=0,ul=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Us(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nc(s[o].image)):r.push(nc(s[o]))}else r=nc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Kd=0,Si=class i extends as{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Yi,s=Yi,r=fi,o=ro,a=Mi,c=lr,l=i.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Us(),this.name="",this.source=new ul(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ur?Zt:Di),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==af)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ic:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case Uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ic:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case Uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Zt?Ur:pf}set encoding(e){io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ur?Zt:Di}};Si.DEFAULT_IMAGE=null;Si.DEFAULT_MAPPING=af;Si.DEFAULT_ANISOTROPY=1;var jt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],p=c[1],x=c[5],y=c[9],v=c[2],g=c[6],d=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-v)<.01&&Math.abs(y-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+v)<.1&&Math.abs(y+g)<.1&&Math.abs(l+x+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,H=(x+1)/2,C=(d+1)/2,z=(h+p)/4,O=(u+v)/4,ce=(y+g)/4;return M>H&&M>C?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=z/n,r=O/n):H>C?H<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(H),n=z/s,r=ce/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=O/r,s=ce/r),this.set(n,s,r,t),this}let L=Math.sqrt((g-y)*(g-y)+(u-v)*(u-v)+(p-h)*(p-h));return Math.abs(L)<.001&&(L=1),this.x=(g-y)/L,this.y=(u-v)/L,this.z=(p-h)/L,this.w=Math.acos((l+x+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fc=class extends as{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(io("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ur?Zt:Di),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Si(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ul(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends Fc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fl=class extends Si{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zc=class extends Si{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],p=r[o+0],x=r[o+1],y=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=x,e[t+2]=y,e[t+3]=v;return}if(u!==v||c!==p||l!==x||h!==y){let g=1-a,d=c*p+l*x+h*y+u*v,L=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let C=Math.sqrt(M),z=Math.atan2(C,d*L);g=Math.sin(g*z)/C,a=Math.sin(a*z)/C}let H=a*L;if(c=c*g+p*H,l=l*g+x*H,h=h*g+y*H,u=u*g+v*H,g===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],p=r[o+1],x=r[o+2],y=r[o+3];return e[t]=a*y+h*u+c*x-l*p,e[t+1]=c*y+h*p+l*u-a*x,e[t+2]=l*y+h*x+a*p-c*u,e[t+3]=h*y-a*u-c*p-l*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),p=c(n/2),x=c(s/2),y=c(r/2);switch(o){case"XYZ":this._x=p*h*u+l*x*y,this._y=l*x*u-p*h*y,this._z=l*h*y+p*x*u,this._w=l*h*u-p*x*y;break;case"YXZ":this._x=p*h*u+l*x*y,this._y=l*x*u-p*h*y,this._z=l*h*y-p*x*u,this._w=l*h*u+p*x*y;break;case"ZXY":this._x=p*h*u-l*x*y,this._y=l*x*u+p*h*y,this._z=l*h*y+p*x*u,this._w=l*h*u-p*x*y;break;case"ZYX":this._x=p*h*u-l*x*y,this._y=l*x*u+p*h*y,this._z=l*h*y-p*x*u,this._w=l*h*u+p*x*y;break;case"YZX":this._x=p*h*u+l*x*y,this._y=l*x*u+p*h*y,this._z=l*h*y-p*x*u,this._w=l*h*u-p*x*y;break;case"XZY":this._x=p*h*u-l*x*y,this._y=l*x*u-p*h*y,this._z=l*h*y+p*x*u,this._w=l*h*u+p*x*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],p=n+a+u;if(p>0){let x=.5/Math.sqrt(p+1);this._w=.25/x,this._x=(h-c)*x,this._y=(r-l)*x,this._z=(o-s)*x}else if(n>a&&n>u){let x=2*Math.sqrt(1+n-a-u);this._w=(h-c)/x,this._x=.25*x,this._y=(s+o)/x,this._z=(r+l)/x}else if(a>u){let x=2*Math.sqrt(1+a-n-u);this._w=(r-l)/x,this._x=(s+o)/x,this._y=.25*x,this._z=(c+h)/x}else{let x=2*Math.sqrt(1+u-n-a);this._w=(o-s)/x,this._x=(r+l)/x,this._y=(c+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let x=1-t;return this._w=x*o+t*this._w,this._x=x*n+t*this._x,this._y=x*s+t*this._y,this._z=x*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ic=new D,mu=new Rn,Ns=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gi):Gi.fromBufferAttribute(r,o),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ro.copy(n.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xa),Co.subVectors(this.max,Xa),$r.subVectors(e.a,Xa),jr.subVectors(e.b,Xa),Qr.subVectors(e.c,Xa),er.subVectors(jr,$r),tr.subVectors(Qr,jr),Sr.subVectors($r,Qr);let t=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Sr.z,Sr.y,er.z,0,-er.x,tr.z,0,-tr.x,Sr.z,0,-Sr.x,-er.y,er.x,0,-tr.y,tr.x,0,-Sr.y,Sr.x,0];return!sc(t,$r,jr,Qr,Co)||(t=[1,0,0,0,1,0,0,0,1],!sc(t,$r,jr,Qr,Co))?!1:(Po.crossVectors(er,tr),t=[Po.x,Po.y,Po.z],sc(t,$r,jr,Qr,Co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ts),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ts=[new D,new D,new D,new D,new D,new D,new D,new D],Gi=new D,Ro=new Ns,$r=new D,jr=new D,Qr=new D,er=new D,tr=new D,Sr=new D,Xa=new D,Co=new D,Po=new D,br=new D;function sc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){br.fromArray(i,r);let a=s.x*Math.abs(br.x)+s.y*Math.abs(br.y)+s.z*Math.abs(br.z),c=e.dot(br),l=t.dot(br),h=n.dot(br);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var $d=new Ns,qa=new D,rc=new D,Dr=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):$d.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qa.subVectors(e,this.center);let t=qa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(qa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qa.copy(e.center).add(rc)),this.expandByPoint(qa.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},As=new D,ac=new D,Lo=new D,nr=new D,oc=new D,Io=new D,lc=new D,ba=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,As)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=As.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(As.copy(this.origin).addScaledVector(this.direction,t),As.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ac.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),nr.copy(this.origin).sub(ac);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Lo),a=nr.dot(this.direction),c=-nr.dot(Lo),l=nr.lengthSq(),h=Math.abs(1-o*o),u,p,x,y;if(h>0)if(u=o*c-a,p=o*a-c,y=r*h,u>=0)if(p>=-y)if(p<=y){let v=1/h;u*=v,p*=v,x=u*(u+o*p+2*a)+p*(o*u+p+2*c)+l}else p=r,u=Math.max(0,-(o*p+a)),x=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(o*p+a)),x=-u*u+p*(p+2*c)+l;else p<=-y?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-c),r),x=-u*u+p*(p+2*c)+l):p<=y?(u=0,p=Math.min(Math.max(-r,-c),r),x=p*(p+2*c)+l):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-c),r),x=-u*u+p*(p+2*c)+l);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),x=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ac).addScaledVector(Lo,p),x}intersectSphere(e,t){As.subVectors(e.center,this.origin);let n=As.dot(this.direction),s=As.dot(As)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,As)!==null}intersectTriangle(e,t,n,s,r){oc.subVectors(t,e),Io.subVectors(n,e),lc.crossVectors(oc,Io);let o=this.direction.dot(lc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;nr.subVectors(this.origin,e);let c=a*this.direction.dot(Io.crossVectors(nr,Io));if(c<0)return null;let l=a*this.direction.dot(oc.cross(nr));if(l<0||c+l>o)return null;let h=-a*nr.dot(lc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ot=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,p,x,y,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,p,x,y,v,g)}set(e,t,n,s,r,o,a,c,l,h,u,p,x,y,v,g){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=p,d[3]=x,d[7]=y,d[11]=v,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ea.setFromMatrixColumn(e,0).length(),r=1/ea.setFromMatrixColumn(e,1).length(),o=1/ea.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let p=o*h,x=o*u,y=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=x+y*l,t[5]=p-v*l,t[9]=-a*c,t[2]=v-p*l,t[6]=y+x*l,t[10]=o*c}else if(e.order==="YXZ"){let p=c*h,x=c*u,y=l*h,v=l*u;t[0]=p+v*a,t[4]=y*a-x,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=x*a-y,t[6]=v+p*a,t[10]=o*c}else if(e.order==="ZXY"){let p=c*h,x=c*u,y=l*h,v=l*u;t[0]=p-v*a,t[4]=-o*u,t[8]=y+x*a,t[1]=x+y*a,t[5]=o*h,t[9]=v-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let p=o*h,x=o*u,y=a*h,v=a*u;t[0]=c*h,t[4]=y*l-x,t[8]=p*l+v,t[1]=c*u,t[5]=v*l+p,t[9]=x*l-y,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let p=o*c,x=o*l,y=a*c,v=a*l;t[0]=c*h,t[4]=v-p*u,t[8]=y*u+x,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=x*u+y,t[10]=p-v*u}else if(e.order==="XZY"){let p=o*c,x=o*l,y=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=p*u+v,t[5]=o*h,t[9]=x*u-y,t[2]=y*u-x,t[6]=a*h,t[10]=v*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jd,e,Qd)}lookAt(e,t,n){let s=this.elements;return vi.subVectors(e,t),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),ir.crossVectors(n,vi),ir.lengthSq()===0&&(Math.abs(n.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),ir.crossVectors(n,vi)),ir.normalize(),Uo.crossVectors(vi,ir),s[0]=ir.x,s[4]=Uo.x,s[8]=vi.x,s[1]=ir.y,s[5]=Uo.y,s[9]=vi.y,s[2]=ir.z,s[6]=Uo.z,s[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],x=n[13],y=n[2],v=n[6],g=n[10],d=n[14],L=n[3],M=n[7],H=n[11],C=n[15],z=s[0],O=s[4],ce=s[8],S=s[12],R=s[1],F=s[5],oe=s[9],Ae=s[13],k=s[2],Z=s[6],se=s[10],_e=s[14],ue=s[3],re=s[7],Me=s[11],Re=s[15];return r[0]=o*z+a*R+c*k+l*ue,r[4]=o*O+a*F+c*Z+l*re,r[8]=o*ce+a*oe+c*se+l*Me,r[12]=o*S+a*Ae+c*_e+l*Re,r[1]=h*z+u*R+p*k+x*ue,r[5]=h*O+u*F+p*Z+x*re,r[9]=h*ce+u*oe+p*se+x*Me,r[13]=h*S+u*Ae+p*_e+x*Re,r[2]=y*z+v*R+g*k+d*ue,r[6]=y*O+v*F+g*Z+d*re,r[10]=y*ce+v*oe+g*se+d*Me,r[14]=y*S+v*Ae+g*_e+d*Re,r[3]=L*z+M*R+H*k+C*ue,r[7]=L*O+M*F+H*Z+C*re,r[11]=L*ce+M*oe+H*se+C*Me,r[15]=L*S+M*Ae+H*_e+C*Re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],p=e[10],x=e[14],y=e[3],v=e[7],g=e[11],d=e[15];return y*(+r*c*u-s*l*u-r*a*p+n*l*p+s*a*x-n*c*x)+v*(+t*c*x-t*l*p+r*o*p-s*o*x+s*l*h-r*c*h)+g*(+t*l*u-t*a*x-r*o*u+n*o*x+r*a*h-n*l*h)+d*(-s*a*h-t*c*u+t*a*p+s*o*u-n*o*p+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],p=e[10],x=e[11],y=e[12],v=e[13],g=e[14],d=e[15],L=u*g*l-v*p*l+v*c*x-a*g*x-u*c*d+a*p*d,M=y*p*l-h*g*l-y*c*x+o*g*x+h*c*d-o*p*d,H=h*v*l-y*u*l+y*a*x-o*v*x-h*a*d+o*u*d,C=y*u*c-h*v*c-y*a*p+o*v*p+h*a*g-o*u*g,z=t*L+n*M+s*H+r*C;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/z;return e[0]=L*O,e[1]=(v*p*r-u*g*r-v*s*x+n*g*x+u*s*d-n*p*d)*O,e[2]=(a*g*r-v*c*r+v*s*l-n*g*l-a*s*d+n*c*d)*O,e[3]=(u*c*r-a*p*r-u*s*l+n*p*l+a*s*x-n*c*x)*O,e[4]=M*O,e[5]=(h*g*r-y*p*r+y*s*x-t*g*x-h*s*d+t*p*d)*O,e[6]=(y*c*r-o*g*r-y*s*l+t*g*l+o*s*d-t*c*d)*O,e[7]=(o*p*r-h*c*r+h*s*l-t*p*l-o*s*x+t*c*x)*O,e[8]=H*O,e[9]=(y*u*r-h*v*r-y*n*x+t*v*x+h*n*d-t*u*d)*O,e[10]=(o*v*r-y*a*r+y*n*l-t*v*l-o*n*d+t*a*d)*O,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*x-t*a*x)*O,e[12]=C*O,e[13]=(h*v*s-y*u*s+y*n*p-t*v*p-h*n*g+t*u*g)*O,e[14]=(y*a*s-o*v*s-y*n*c+t*v*c+o*n*g-t*a*g)*O,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*p+t*a*p)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,p=r*l,x=r*h,y=r*u,v=o*h,g=o*u,d=a*u,L=c*l,M=c*h,H=c*u,C=n.x,z=n.y,O=n.z;return s[0]=(1-(v+d))*C,s[1]=(x+H)*C,s[2]=(y-M)*C,s[3]=0,s[4]=(x-H)*z,s[5]=(1-(p+d))*z,s[6]=(g+L)*z,s[7]=0,s[8]=(y+M)*O,s[9]=(g-L)*O,s[10]=(1-(p+v))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ea.set(s[0],s[1],s[2]).length(),o=ea.set(s[4],s[5],s[6]).length(),a=ea.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Wi.copy(this);let l=1/r,h=1/o,u=1/a;return Wi.elements[0]*=l,Wi.elements[1]*=l,Wi.elements[2]*=l,Wi.elements[4]*=h,Wi.elements[5]*=h,Wi.elements[6]*=h,Wi.elements[8]*=u,Wi.elements[9]*=u,Wi.elements[10]*=u,t.setFromRotationMatrix(Wi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Is){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),x,y;if(a===Is)x=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===ol)x=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Is){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),p=(t+e)*l,x=(n+s)*h,y,v;if(a===Is)y=(o+r)*u,v=-2*u;else if(a===ol)y=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-x,c[2]=0,c[6]=0,c[10]=v,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ea=new D,Wi=new Ot,jd=new D(0,0,0),Qd=new D(1,1,1),ir=new D,Uo=new D,vi=new D,gu=new Ot,xu=new Rn,os=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(Fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Fn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,x),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,x),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Fn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,x),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Fn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,x));break;case"XZY":this._z=Math.asin(-Fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xu.setFromEuler(this),this.setFromQuaternion(xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};os.DEFAULT_ORDER="XYZ";var oo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ep=0,_u=new D,ta=new Rn,Rs=new Ot,Do=new D,Ya=new D,tp=new D,np=new Rn,vu=new D(1,0,0),yu=new D(0,1,0),Mu=new D(0,0,1),ip={type:"added"},sp={type:"removed"},jn=class i extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new os,n=new Rn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ot},normalMatrix:{value:new Bt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.multiply(ta),this}rotateOnWorldAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.premultiply(ta),this}rotateX(e){return this.rotateOnAxis(vu,e)}rotateY(e){return this.rotateOnAxis(yu,e)}rotateZ(e){return this.rotateOnAxis(Mu,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vu,e)}translateY(e){return this.translateOnAxis(yu,e)}translateZ(e){return this.translateOnAxis(Mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Do.copy(e):Do.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rs.lookAt(Ya,Do,this.up):Rs.lookAt(Do,Ya,this.up),this.quaternion.setFromRotationMatrix(Rs),s&&(Rs.extractRotation(s.matrixWorld),ta.setFromRotationMatrix(Rs),this.quaternion.premultiply(ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ip)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rs.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rs),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,e,tp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),p=o(e.skeletons),x=o(e.animations),y=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),x.length>0&&(n.animations=x),y.length>0&&(n.nodes=y)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};jn.DEFAULT_UP=new D(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xi=new D,Cs=new D,cc=new D,Ps=new D,na=new D,ia=new D,Eu=new D,hc=new D,uc=new D,fc=new D,No=!1,Pr=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Xi.subVectors(e,t),s.cross(Xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Xi.subVectors(s,t),Cs.subVectors(n,t),cc.subVectors(e,t);let o=Xi.dot(Xi),a=Xi.dot(Cs),c=Xi.dot(cc),l=Cs.dot(Cs),h=Cs.dot(cc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,x=(l*c-a*h)*p,y=(o*h-a*c)*p;return r.set(1-x-y,y,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ps)===null?!1:Ps.x>=0&&Ps.y>=0&&Ps.x+Ps.y<=1}static getUV(e,t,n,s,r,o,a,c){return No===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),No=!0),this.getInterpolation(e,t,n,s,r,o,a,c)}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ps)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ps.x),c.addScaledVector(o,Ps.y),c.addScaledVector(a,Ps.z),c)}static isFrontFacing(e,t,n,s){return Xi.subVectors(n,t),Cs.subVectors(e,t),Xi.cross(Cs).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xi.subVectors(this.c,this.b),Cs.subVectors(this.a,this.b),Xi.cross(Cs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return No===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),No=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;na.subVectors(s,n),ia.subVectors(r,n),hc.subVectors(e,n);let c=na.dot(hc),l=ia.dot(hc);if(c<=0&&l<=0)return t.copy(n);uc.subVectors(e,s);let h=na.dot(uc),u=ia.dot(uc);if(h>=0&&u<=h)return t.copy(s);let p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(na,o);fc.subVectors(e,r);let x=na.dot(fc),y=ia.dot(fc);if(y>=0&&x<=y)return t.copy(r);let v=x*l-c*y;if(v<=0&&l>=0&&y<=0)return a=l/(l-y),t.copy(n).addScaledVector(ia,a);let g=h*y-x*u;if(g<=0&&u-h>=0&&x-y>=0)return Eu.subVectors(r,s),a=(u-h)/(u-h+(x-y)),t.copy(s).addScaledVector(Eu,a);let d=1/(g+v+p);return o=v*d,a=p*d,t.copy(n).addScaledVector(na,o).addScaledVector(ia,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function dc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Kt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Kt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Kt.workingColorSpace){if(e=yh(e,1),t=Fn(t,0,1),n=Fn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=dc(o,r,e+1/3),this.g=dc(o,r,e),this.b=dc(o,r,e-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(e,t=Zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){let n=vf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}copyLinearToSRGB(e){return this.r=tc(e.r),this.g=tc(e.g),this.b=tc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return Kt.fromWorkingColorSpace(Zn.copy(this),e),Math.round(Fn(Zn.r*255,0,255))*65536+Math.round(Fn(Zn.g*255,0,255))*256+Math.round(Fn(Zn.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Zn.copy(this),t);let n=Zn.r,s=Zn.g,r=Zn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Zn.copy(this),t),e.r=Zn.r,e.g=Zn.g,e.b=Zn.b,e}getStyle(e=Zt){Kt.fromWorkingColorSpace(Zn.copy(this),e);let t=Zn.r,n=Zn.g,s=Zn.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+t,sr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(sr),e.getHSL(Oo);let n=no(sr.h,Oo.h,t),s=no(sr.s,Oo.s,t),r=no(sr.l,Oo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zn=new Ue;Ue.NAMES=vf;var rp=0,hr=class extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=_a,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Cc,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=tl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_a&&(n.blending=this.blending),this.side!==cr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rc&&(n.blendSrc=this.blendSrc),this.blendDst!==Cc&&(n.blendDst=this.blendDst),this.blendEquation!==Rr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==tl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ut=class extends hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var An=new D,Fo=new Xe,di=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fo.fromBufferAttribute(this,t),Fo.applyMatrix3(e),this.setXY(t,Fo.x,Fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix3(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ss(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dc&&(e.usage=this.usage),e}};var dl=class extends di{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var pl=class extends di{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var En=class extends di{constructor(e,t,n){super(new Float32Array(e),t,n)}};var ap=0,Ui=new Ot,pc=new jn,sa=new D,yi=new Ns,Za=new Ns,On=new D,bi=class i extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_f(e)?pl:dl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ui.makeRotationFromQuaternion(e),this.applyMatrix4(Ui),this}rotateX(e){return Ui.makeRotationX(e),this.applyMatrix4(Ui),this}rotateY(e){return Ui.makeRotationY(e),this.applyMatrix4(Ui),this}rotateZ(e){return Ui.makeRotationZ(e),this.applyMatrix4(Ui),this}translate(e,t,n){return Ui.makeTranslation(e,t,n),this.applyMatrix4(Ui),this}scale(e,t,n){return Ui.makeScale(e,t,n),this.applyMatrix4(Ui),this}lookAt(e){return pc.lookAt(e),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sa).negate(),this.translate(sa.x,sa.y,sa.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new En(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];yi.setFromBufferAttribute(r),this.morphTargetsRelative?(On.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(On),On.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(On)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Za.setFromBufferAttribute(a),this.morphTargetsRelative?(On.addVectors(yi.min,Za.min),yi.expandByPoint(On),On.addVectors(yi.max,Za.max),yi.expandByPoint(On)):(yi.expandByPoint(Za.min),yi.expandByPoint(Za.max))}yi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)On.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(On));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)On.fromBufferAttribute(a,l),c&&(sa.fromBufferAttribute(e,l),On.add(sa)),s=Math.max(s,n.distanceToSquared(On))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let R=0;R<a;R++)l[R]=new D,h[R]=new D;let u=new D,p=new D,x=new D,y=new Xe,v=new Xe,g=new Xe,d=new D,L=new D;function M(R,F,oe){u.fromArray(s,R*3),p.fromArray(s,F*3),x.fromArray(s,oe*3),y.fromArray(o,R*2),v.fromArray(o,F*2),g.fromArray(o,oe*2),p.sub(u),x.sub(u),v.sub(y),g.sub(y);let Ae=1/(v.x*g.y-g.x*v.y);isFinite(Ae)&&(d.copy(p).multiplyScalar(g.y).addScaledVector(x,-v.y).multiplyScalar(Ae),L.copy(x).multiplyScalar(v.x).addScaledVector(p,-g.x).multiplyScalar(Ae),l[R].add(d),l[F].add(d),l[oe].add(d),h[R].add(L),h[F].add(L),h[oe].add(L))}let H=this.groups;H.length===0&&(H=[{start:0,count:n.length}]);for(let R=0,F=H.length;R<F;++R){let oe=H[R],Ae=oe.start,k=oe.count;for(let Z=Ae,se=Ae+k;Z<se;Z+=3)M(n[Z+0],n[Z+1],n[Z+2])}let C=new D,z=new D,O=new D,ce=new D;function S(R){O.fromArray(r,R*3),ce.copy(O);let F=l[R];C.copy(F),C.sub(O.multiplyScalar(O.dot(F))).normalize(),z.crossVectors(ce,F);let Ae=z.dot(h[R])<0?-1:1;c[R*4]=C.x,c[R*4+1]=C.y,c[R*4+2]=C.z,c[R*4+3]=Ae}for(let R=0,F=H.length;R<F;++R){let oe=H[R],Ae=oe.start,k=oe.count;for(let Z=Ae,se=Ae+k;Z<se;Z+=3)S(n[Z+0]),S(n[Z+1]),S(n[Z+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new di(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,x=n.count;p<x;p++)n.setXYZ(p,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let p=0,x=e.count;p<x;p+=3){let y=e.getX(p+0),v=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,y),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let p=0,x=t.count;p<x;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)On.fromBufferAttribute(e,t),On.normalize(),e.setXYZ(t,On.x,On.y,On.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(c.length*h),x=0,y=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?x=c[v]*a.data.stride+a.offset:x=c[v]*h;for(let d=0;d<h;d++)p[y++]=l[x++]}return new di(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let p=l[h],x=e(p,n);c.push(x)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){let x=l[u];h.push(x.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let p=0,x=u.length;p<x;p++)h.push(u[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Su=new Ot,wr=new ba,zo=new Dr,bu=new D,ra=new D,aa=new D,oa=new D,mc=new D,Bo=new D,Ho=new Xe,ko=new Xe,Vo=new Xe,wu=new D,Tu=new D,Au=new D,Go=new D,Wo=new D,_t=class extends jn{constructor(e=new bi,t=new Ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Bo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(mc.fromBufferAttribute(u,e),o?Bo.addScaledVector(mc,h):Bo.addScaledVector(mc.sub(t),h))}t.add(Bo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(r),wr.copy(e.ray).recast(e.near),!(zo.containsPoint(wr.origin)===!1&&(wr.intersectSphere(zo,bu)===null||wr.origin.distanceToSquared(bu)>(e.far-e.near)**2))&&(Su.copy(r).invert(),wr.copy(e.ray).applyMatrix4(Su),!(n.boundingBox!==null&&wr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,x=r.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,v=p.length;y<v;y++){let g=p[y],d=o[g.materialIndex],L=Math.max(g.start,x.start),M=Math.min(a.count,Math.min(g.start+g.count,x.start+x.count));for(let H=L,C=M;H<C;H+=3){let z=a.getX(H),O=a.getX(H+1),ce=a.getX(H+2);s=Xo(this,d,e,n,l,h,u,z,O,ce),s&&(s.faceIndex=Math.floor(H/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,x.start),v=Math.min(a.count,x.start+x.count);for(let g=y,d=v;g<d;g+=3){let L=a.getX(g),M=a.getX(g+1),H=a.getX(g+2);s=Xo(this,o,e,n,l,h,u,L,M,H),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let y=0,v=p.length;y<v;y++){let g=p[y],d=o[g.materialIndex],L=Math.max(g.start,x.start),M=Math.min(c.count,Math.min(g.start+g.count,x.start+x.count));for(let H=L,C=M;H<C;H+=3){let z=H,O=H+1,ce=H+2;s=Xo(this,d,e,n,l,h,u,z,O,ce),s&&(s.faceIndex=Math.floor(H/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,x.start),v=Math.min(c.count,x.start+x.count);for(let g=y,d=v;g<d;g+=3){let L=g,M=g+1,H=g+2;s=Xo(this,o,e,n,l,h,u,L,M,H),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function op(i,e,t,n,s,r,o,a){let c;if(e.side===$n?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===cr,a),c===null)return null;Wo.copy(a),Wo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Wo);return l<t.near||l>t.far?null:{distance:l,point:Wo.clone(),object:i}}function Xo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ra),i.getVertexPosition(c,aa),i.getVertexPosition(l,oa);let h=op(i,e,t,n,ra,aa,oa,Go);if(h){s&&(Ho.fromBufferAttribute(s,a),ko.fromBufferAttribute(s,c),Vo.fromBufferAttribute(s,l),h.uv=Pr.getInterpolation(Go,ra,aa,oa,Ho,ko,Vo,new Xe)),r&&(Ho.fromBufferAttribute(r,a),ko.fromBufferAttribute(r,c),Vo.fromBufferAttribute(r,l),h.uv1=Pr.getInterpolation(Go,ra,aa,oa,Ho,ko,Vo,new Xe),h.uv2=h.uv1),o&&(wu.fromBufferAttribute(o,a),Tu.fromBufferAttribute(o,c),Au.fromBufferAttribute(o,l),h.normal=Pr.getInterpolation(Go,ra,aa,oa,wu,Tu,Au,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new D,materialIndex:0};Pr.getNormal(ra,aa,oa,u.normal),h.face=u}return h}var Os=class i extends bi{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],p=0,x=0;y("z","y","x",-1,-1,n,t,e,o,r,0),y("z","y","x",1,-1,n,t,-e,o,r,1),y("x","z","y",1,1,e,n,t,s,o,2),y("x","z","y",1,-1,e,n,-t,s,o,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new En(l,3)),this.setAttribute("normal",new En(h,3)),this.setAttribute("uv",new En(u,2));function y(v,g,d,L,M,H,C,z,O,ce,S){let R=H/O,F=C/ce,oe=H/2,Ae=C/2,k=z/2,Z=O+1,se=ce+1,_e=0,ue=0,re=new D;for(let Me=0;Me<se;Me++){let Re=Me*F-Ae;for(let I=0;I<Z;I++){let W=I*R-oe;re[v]=W*L,re[g]=Re*M,re[d]=k,l.push(re.x,re.y,re.z),re[v]=0,re[g]=0,re[d]=z>0?1:-1,h.push(re.x,re.y,re.z),u.push(I/O),u.push(1-Me/ce),_e+=1}}for(let Me=0;Me<ce;Me++)for(let Re=0;Re<O;Re++){let I=p+Re+Z*Me,W=p+Re+Z*(Me+1),le=p+(Re+1)+Z*(Me+1),Ce=p+(Re+1)+Z*Me;c.push(I,W,Ce),c.push(W,le,Ce),ue+=6}a.addGroup(x,ue,S),x+=ue,p+=_e}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function wa(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function ai(i){let e={};for(let t=0;t<i.length;t++){let n=wa(i[t]);for(let s in n)e[s]=n[s]}return e}function lp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yf(i){return i.getRenderTarget()===null?i.outputColorSpace:Kt.workingColorSpace}var fr={clone:wa,merge:ai},cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cp,this.fragmentShader=hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wa(e.uniforms),this.uniformsGroups=lp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ml=class extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Is}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Jn=class extends ml{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(to*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},la=-90,ca=1,Bc=class extends jn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Jn(la,ca,e,t);s.layers=this.layers,this.add(s);let r=new Jn(la,ca,e,t);r.layers=this.layers,this.add(r);let o=new Jn(la,ca,e,t);o.layers=this.layers,this.add(o);let a=new Jn(la,ca,e,t);a.layers=this.layers,this.add(a);let c=new Jn(la,ca,e,t);c.layers=this.layers,this.add(c);let l=new Jn(la,ca,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Is)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ol)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,p,x),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},gl=class extends Si{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ma,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hc=class extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(io("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ur?Zt:Di),this.texture=new gl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Os(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:wa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$n,blending:rs});r.uniforms.tEquirect.value=t;let o=new _t(s,r),a=t.minFilter;return t.minFilter===ro&&(t.minFilter=fi),new Bc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},gc=new D,up=new D,fp=new Bt,qi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=gc.subVectors(n,t).cross(up.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(gc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||fp.getNormalMatrix(e),s=this.coplanarPoint(gc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Tr=new Dr,qo=new D,lo=class{constructor(e=new qi,t=new qi,n=new qi,s=new qi,r=new qi,o=new qi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Is){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],p=s[7],x=s[8],y=s[9],v=s[10],g=s[11],d=s[12],L=s[13],M=s[14],H=s[15];if(n[0].setComponents(c-r,p-l,g-x,H-d).normalize(),n[1].setComponents(c+r,p+l,g+x,H+d).normalize(),n[2].setComponents(c+o,p+h,g+y,H+L).normalize(),n[3].setComponents(c-o,p-h,g-y,H-L).normalize(),n[4].setComponents(c-a,p-u,g-v,H-M).normalize(),t===Is)n[5].setComponents(c+a,p+u,g+v,H+M).normalize();else if(t===ol)n[5].setComponents(a,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(qo.x=s.normal.x>0?e.max.x:e.min.x,qo.y=s.normal.y>0?e.max.y:e.min.y,qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Mf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function dp(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,p=l.usage,x=u.byteLength,y=i.createBuffer();i.bindBuffer(h,y),i.bufferData(h,u,p),l.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:y,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:x}}function r(l,h,u){let p=h.array,x=h._updateRange,y=h.updateRanges;if(i.bindBuffer(u,l),x.count===-1&&y.length===0&&i.bufferSubData(u,0,p),y.length!==0){for(let v=0,g=y.length;v<g;v++){let d=y[v];t?i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}x.count!==-1&&(t?i.bufferSubData(u,x.offset*p.BYTES_PER_ELEMENT,p,x.offset,x.count):i.bufferSubData(u,x.offset*p.BYTES_PER_ELEMENT,p.subarray(x.offset,x.offset+x.count)),x.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let p=n.get(l);(!p||p.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var li=class i extends bi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,p=t/c,x=[],y=[],v=[],g=[];for(let d=0;d<h;d++){let L=d*p-o;for(let M=0;M<l;M++){let H=M*u-r;y.push(H,-L,0),v.push(0,0,1),g.push(M/a),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let L=0;L<a;L++){let M=L+l*d,H=L+l*(d+1),C=L+1+l*(d+1),z=L+1+l*d;x.push(M,H,z),x.push(H,C,z)}this.setIndex(x),this.setAttribute("position",new En(y,3)),this.setAttribute("normal",new En(v,3)),this.setAttribute("uv",new En(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},pp=`#ifdef USE_ALPHAHASH
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
}`,Nt={alphahash_fragment:pp,alphahash_pars_fragment:mp,alphamap_fragment:gp,alphamap_pars_fragment:xp,alphatest_fragment:_p,alphatest_pars_fragment:vp,aomap_fragment:yp,aomap_pars_fragment:Mp,batching_pars_vertex:Ep,batching_vertex:Sp,begin_vertex:bp,beginnormal_vertex:wp,bsdfs:Tp,iridescence_fragment:Ap,bumpmap_pars_fragment:Rp,clipping_planes_fragment:Cp,clipping_planes_pars_fragment:Pp,clipping_planes_pars_vertex:Lp,clipping_planes_vertex:Ip,color_fragment:Up,color_pars_fragment:Dp,color_pars_vertex:Np,color_vertex:Op,common:Fp,cube_uv_reflection_fragment:zp,defaultnormal_vertex:Bp,displacementmap_pars_vertex:Hp,displacementmap_vertex:kp,emissivemap_fragment:Vp,emissivemap_pars_fragment:Gp,colorspace_fragment:Wp,colorspace_pars_fragment:Xp,envmap_fragment:qp,envmap_common_pars_fragment:Yp,envmap_pars_fragment:Zp,envmap_pars_vertex:Jp,envmap_physical_pars_fragment:om,envmap_vertex:Kp,fog_vertex:$p,fog_pars_vertex:jp,fog_fragment:Qp,fog_pars_fragment:em,gradientmap_pars_fragment:tm,lightmap_fragment:nm,lightmap_pars_fragment:im,lights_lambert_fragment:sm,lights_lambert_pars_fragment:rm,lights_pars_begin:am,lights_toon_fragment:lm,lights_toon_pars_fragment:cm,lights_phong_fragment:hm,lights_phong_pars_fragment:um,lights_physical_fragment:fm,lights_physical_pars_fragment:dm,lights_fragment_begin:pm,lights_fragment_maps:mm,lights_fragment_end:gm,logdepthbuf_fragment:xm,logdepthbuf_pars_fragment:_m,logdepthbuf_pars_vertex:vm,logdepthbuf_vertex:ym,map_fragment:Mm,map_pars_fragment:Em,map_particle_fragment:Sm,map_particle_pars_fragment:bm,metalnessmap_fragment:wm,metalnessmap_pars_fragment:Tm,morphcolor_vertex:Am,morphnormal_vertex:Rm,morphtarget_pars_vertex:Cm,morphtarget_vertex:Pm,normal_fragment_begin:Lm,normal_fragment_maps:Im,normal_pars_fragment:Um,normal_pars_vertex:Dm,normal_vertex:Nm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:zm,clearcoat_pars_fragment:Bm,iridescence_pars_fragment:Hm,opaque_fragment:km,packing:Vm,premultiplied_alpha_fragment:Gm,project_vertex:Wm,dithering_fragment:Xm,dithering_pars_fragment:qm,roughnessmap_fragment:Ym,roughnessmap_pars_fragment:Zm,shadowmap_pars_fragment:Jm,shadowmap_pars_vertex:Km,shadowmap_vertex:$m,shadowmask_pars_fragment:jm,skinbase_vertex:Qm,skinning_pars_vertex:eg,skinning_vertex:tg,skinnormal_vertex:ng,specularmap_fragment:ig,specularmap_pars_fragment:sg,tonemapping_fragment:rg,tonemapping_pars_fragment:ag,transmission_fragment:og,transmission_pars_fragment:lg,uv_pars_fragment:cg,uv_pars_vertex:hg,uv_vertex:ug,worldpos_vertex:fg,background_vert:dg,background_frag:pg,backgroundCube_vert:mg,backgroundCube_frag:gg,cube_vert:xg,cube_frag:_g,depth_vert:vg,depth_frag:yg,distanceRGBA_vert:Mg,distanceRGBA_frag:Eg,equirect_vert:Sg,equirect_frag:bg,linedashed_vert:wg,linedashed_frag:Tg,meshbasic_vert:Ag,meshbasic_frag:Rg,meshlambert_vert:Cg,meshlambert_frag:Pg,meshmatcap_vert:Lg,meshmatcap_frag:Ig,meshnormal_vert:Ug,meshnormal_frag:Dg,meshphong_vert:Ng,meshphong_frag:Og,meshphysical_vert:Fg,meshphysical_frag:zg,meshtoon_vert:Bg,meshtoon_frag:Hg,points_vert:kg,points_frag:Vg,shadow_vert:Gg,shadow_frag:Wg,sprite_vert:Xg,sprite_frag:qg},Ne={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},is={basic:{uniforms:ai([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:ai([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:ai([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:ai([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:ai([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:ai([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:ai([Ne.points,Ne.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:ai([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:ai([Ne.common,Ne.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:ai([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:ai([Ne.sprite,Ne.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:ai([Ne.common,Ne.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:ai([Ne.lights,Ne.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};is.physical={uniforms:ai([is.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var Yo={r:0,b:0,g:0};function Yg(i,e,t,n,s,r,o){let a=new Ue(0),c=r===!0?0:1,l,h,u=null,p=0,x=null;function y(g,d){let L=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?t:e).get(M)),M===null?v(a,c):M&&M.isColor&&(v(M,1),L=!0);let H=i.xr.getEnvironmentBlendMode();H==="additive"?n.buffers.color.setClear(0,0,0,1,o):H==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||L)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Pl)?(h===void 0&&(h=new _t(new Os(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:wa(is.backgroundCube.uniforms),vertexShader:is.backgroundCube.vertexShader,fragmentShader:is.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,z,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Kt.getTransfer(M.colorSpace)!==an,(u!==M||p!==M.version||x!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,p=M.version,x=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new _t(new li(2,2),new vn({name:"BackgroundMaterial",uniforms:wa(is.background.uniforms),vertexShader:is.background.vertexShader,fragmentShader:is.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(M.colorSpace)!==an,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||p!==M.version||x!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,p=M.version,x=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function v(g,d){g.getRGB(Yo,yf(i)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(g,d=1){a.set(g),c=d,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,v(a,c)},render:y}}function Zg(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=g(null),l=c,h=!1;function u(k,Z,se,_e,ue){let re=!1;if(o){let Me=v(_e,se,Z);l!==Me&&(l=Me,x(l.object)),re=d(k,_e,se,ue),re&&L(k,_e,se,ue)}else{let Me=Z.wireframe===!0;(l.geometry!==_e.id||l.program!==se.id||l.wireframe!==Me)&&(l.geometry=_e.id,l.program=se.id,l.wireframe=Me,re=!0)}ue!==null&&t.update(ue,i.ELEMENT_ARRAY_BUFFER),(re||h)&&(h=!1,ce(k,Z,se,_e),ue!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ue).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function x(k){return n.isWebGL2?i.bindVertexArray(k):r.bindVertexArrayOES(k)}function y(k){return n.isWebGL2?i.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function v(k,Z,se){let _e=se.wireframe===!0,ue=a[k.id];ue===void 0&&(ue={},a[k.id]=ue);let re=ue[Z.id];re===void 0&&(re={},ue[Z.id]=re);let Me=re[_e];return Me===void 0&&(Me=g(p()),re[_e]=Me),Me}function g(k){let Z=[],se=[],_e=[];for(let ue=0;ue<s;ue++)Z[ue]=0,se[ue]=0,_e[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:se,attributeDivisors:_e,object:k,attributes:{},index:null}}function d(k,Z,se,_e){let ue=l.attributes,re=Z.attributes,Me=0,Re=se.getAttributes();for(let I in Re)if(Re[I].location>=0){let le=ue[I],Ce=re[I];if(Ce===void 0&&(I==="instanceMatrix"&&k.instanceMatrix&&(Ce=k.instanceMatrix),I==="instanceColor"&&k.instanceColor&&(Ce=k.instanceColor)),le===void 0||le.attribute!==Ce||Ce&&le.data!==Ce.data)return!0;Me++}return l.attributesNum!==Me||l.index!==_e}function L(k,Z,se,_e){let ue={},re=Z.attributes,Me=0,Re=se.getAttributes();for(let I in Re)if(Re[I].location>=0){let le=re[I];le===void 0&&(I==="instanceMatrix"&&k.instanceMatrix&&(le=k.instanceMatrix),I==="instanceColor"&&k.instanceColor&&(le=k.instanceColor));let Ce={};Ce.attribute=le,le&&le.data&&(Ce.data=le.data),ue[I]=Ce,Me++}l.attributes=ue,l.attributesNum=Me,l.index=_e}function M(){let k=l.newAttributes;for(let Z=0,se=k.length;Z<se;Z++)k[Z]=0}function H(k){C(k,0)}function C(k,Z){let se=l.newAttributes,_e=l.enabledAttributes,ue=l.attributeDivisors;se[k]=1,_e[k]===0&&(i.enableVertexAttribArray(k),_e[k]=1),ue[k]!==Z&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,Z),ue[k]=Z)}function z(){let k=l.newAttributes,Z=l.enabledAttributes;for(let se=0,_e=Z.length;se<_e;se++)Z[se]!==k[se]&&(i.disableVertexAttribArray(se),Z[se]=0)}function O(k,Z,se,_e,ue,re,Me){Me===!0?i.vertexAttribIPointer(k,Z,se,ue,re):i.vertexAttribPointer(k,Z,se,_e,ue,re)}function ce(k,Z,se,_e){if(n.isWebGL2===!1&&(k.isInstancedMesh||_e.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();let ue=_e.attributes,re=se.getAttributes(),Me=Z.defaultAttributeValues;for(let Re in re){let I=re[Re];if(I.location>=0){let W=ue[Re];if(W===void 0&&(Re==="instanceMatrix"&&k.instanceMatrix&&(W=k.instanceMatrix),Re==="instanceColor"&&k.instanceColor&&(W=k.instanceColor)),W!==void 0){let le=W.normalized,Ce=W.itemSize,xe=t.get(W);if(xe===void 0)continue;let ze=xe.buffer,at=xe.type,Ze=xe.bytesPerElement,it=n.isWebGL2===!0&&(at===i.INT||at===i.UNSIGNED_INT||W.gpuType===of);if(W.isInterleavedBufferAttribute){let vt=W.data,j=vt.stride,Gt=W.offset;if(vt.isInstancedInterleavedBuffer){for(let $e=0;$e<I.locationSize;$e++)C(I.location+$e,vt.meshPerAttribute);k.isInstancedMesh!==!0&&_e._maxInstanceCount===void 0&&(_e._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let $e=0;$e<I.locationSize;$e++)H(I.location+$e);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let $e=0;$e<I.locationSize;$e++)O(I.location+$e,Ce/I.locationSize,at,le,j*Ze,(Gt+Ce/I.locationSize*$e)*Ze,it)}else{if(W.isInstancedBufferAttribute){for(let vt=0;vt<I.locationSize;vt++)C(I.location+vt,W.meshPerAttribute);k.isInstancedMesh!==!0&&_e._maxInstanceCount===void 0&&(_e._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let vt=0;vt<I.locationSize;vt++)H(I.location+vt);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let vt=0;vt<I.locationSize;vt++)O(I.location+vt,Ce/I.locationSize,at,le,Ce*Ze,Ce/I.locationSize*vt*Ze,it)}}else if(Me!==void 0){let le=Me[Re];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(I.location,le);break;case 3:i.vertexAttrib3fv(I.location,le);break;case 4:i.vertexAttrib4fv(I.location,le);break;default:i.vertexAttrib1fv(I.location,le)}}}}z()}function S(){oe();for(let k in a){let Z=a[k];for(let se in Z){let _e=Z[se];for(let ue in _e)y(_e[ue].object),delete _e[ue];delete Z[se]}delete a[k]}}function R(k){if(a[k.id]===void 0)return;let Z=a[k.id];for(let se in Z){let _e=Z[se];for(let ue in _e)y(_e[ue].object),delete _e[ue];delete Z[se]}delete a[k.id]}function F(k){for(let Z in a){let se=a[Z];if(se[k.id]===void 0)continue;let _e=se[k.id];for(let ue in _e)y(_e[ue].object),delete _e[ue];delete se[k.id]}}function oe(){Ae(),h=!0,l!==c&&(l=c,x(l.object))}function Ae(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:oe,resetDefaultState:Ae,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:H,disableUnusedAttributes:z}}function Jg(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,p){if(p===0)return;let x,y;if(s)x=i,y="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](r,h,u,p),t.update(u,r,p)}function l(h,u,p){if(p===0)return;let x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<p;y++)this.render(h[y],u[y]);else{x.multiDrawArraysWEBGL(r,h,0,u,0,p);let y=0;for(let v=0;v<p;v++)y+=u[v];t.update(y,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Kg(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let O=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),L=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,H=o||e.has("OES_texture_float"),C=M&&H,z=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:L,vertexTextures:M,floatFragmentTextures:H,floatVertexTextures:C,maxSamples:z}}function $g(i){let e=this,t=null,n=0,s=!1,r=!1,o=new qi,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let x=u.length!==0||p||n!==0||s;return s=p,n=u.length,x},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,x){let y=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,d=i.get(u);if(!s||y===null||y.length===0||r&&!g)r?h(null):l();else{let L=r?0:n,M=L*4,H=d.clippingState||null;c.value=H,H=h(y,p,M,x);for(let C=0;C!==M;++C)H[C]=t[C];d.clippingState=H,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=L}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,x,y){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=c.value,y!==!0||g===null){let d=x+v*4,L=p.matrixWorldInverse;a.getNormalMatrix(L),(g===null||g.length<d)&&(g=new Float32Array(d));for(let M=0,H=x;M!==v;++M,H+=4)o.copy(u[M]).applyMatrix4(L,a),o.normal.toArray(g,H),g[H+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function jg(i){let e=new WeakMap;function t(o,a){return a===Pc?o.mapping=Ma:a===Lc&&(o.mapping=Ea),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Pc||a===Lc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Hc(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ta=class extends ml{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ga=4,Ru=[.125,.215,.35,.446,.526,.582],Cr=20,xc=new Ta,Cu=new Ue,_c=null,vc=0,yc=0,Ar=(1+Math.sqrt(5))/2,ha=1/Ar,Pu=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ar,ha),new D(0,Ar,-ha),new D(ha,0,Ar),new D(-ha,0,Ar),new D(Ar,ha,0),new D(-Ar,ha,0)],xl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,vc,yc),e.scissorTest=!1,Zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ma||e.mapping===Ea?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:Zi,format:Mi,colorSpace:Ds,depthBuffer:!1},s=Lu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qg(r)),this._blurMaterial=e0(r,e,t)}return s}_compileMaterial(e){let t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,xc)}_sceneToCubeUV(e,t,n,s){let a=new Jn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Cu),h.toneMapping=or,h.autoClear=!1;let x=new Ut({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),y=new _t(new Os,x),v=!1,g=e.background;g?g.isColor&&(x.color.copy(g),e.background=null,v=!0):(x.color.copy(Cu),v=!0);for(let d=0;d<6;d++){let L=d%3;L===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):L===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let M=this._cubeSize;Zo(s,L*M,d>2?M:0,M,M),h.setRenderTarget(s),v&&h.render(y,a),h.render(e,a)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ma||e.mapping===Ea;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Zo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,xc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Pu[(s-1)%Pu.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new _t(this._lodPlanes[s],l),p=l.uniforms,x=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*x):2*Math.PI/(2*Cr-1),v=r/y,g=isFinite(r)?1+Math.floor(h*v):Cr;g>Cr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Cr}`);let d=[],L=0;for(let O=0;O<Cr;++O){let ce=O/v,S=Math.exp(-ce*ce/2);d.push(S),O===0?L+=S:O<g&&(L+=2*S)}for(let O=0;O<d.length;O++)d[O]=d[O]/L;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:M}=this;p.dTheta.value=y,p.mipInt.value=M-n;let H=this._sizeLods[s],C=3*H*(s>M-ga?s-M+ga:0),z=4*(this._cubeSize-H);Zo(t,C,z,3*H,2*H),c.setRenderTarget(t),c.render(u,xc)}};function Qg(i){let e=[],t=[],n=[],s=i,r=i-ga+1+Ru.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ga?c=Ru[o-i+ga-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],x=6,y=6,v=3,g=2,d=1,L=new Float32Array(v*y*x),M=new Float32Array(g*y*x),H=new Float32Array(d*y*x);for(let z=0;z<x;z++){let O=z%3*2/3-1,ce=z>2?0:-1,S=[O,ce,0,O+2/3,ce,0,O+2/3,ce+1,0,O,ce,0,O+2/3,ce+1,0,O,ce+1,0];L.set(S,v*y*z),M.set(p,g*y*z);let R=[z,z,z,z,z,z];H.set(R,d*y*z)}let C=new bi;C.setAttribute("position",new di(L,v)),C.setAttribute("uv",new di(M,g)),C.setAttribute("faceIndex",new di(H,d)),e.push(C),s>ga&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lu(i,e,t){let n=new oi(i,e,t);return n.texture.mapping=Pl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function e0(i,e,t){let n=new Float32Array(Cr),s=new D(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Iu(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Uu(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

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
	`}function t0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Pc||c===Lc,h=c===Ma||c===Ea;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new xl(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new xl(i));let p=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function n0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function i0(i,e,t,n){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&e.remove(p.index);for(let y in p.attributes)e.remove(p.attributes[y]);for(let y in p.morphAttributes){let v=p.morphAttributes[y];for(let g=0,d=v.length;g<d;g++)e.remove(v[g])}p.removeEventListener("dispose",o),delete s[p.id];let x=r.get(p);x&&(e.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function c(u){let p=u.attributes;for(let y in p)e.update(p[y],i.ARRAY_BUFFER);let x=u.morphAttributes;for(let y in x){let v=x[y];for(let g=0,d=v.length;g<d;g++)e.update(v[g],i.ARRAY_BUFFER)}}function l(u){let p=[],x=u.index,y=u.attributes.position,v=0;if(x!==null){let L=x.array;v=x.version;for(let M=0,H=L.length;M<H;M+=3){let C=L[M+0],z=L[M+1],O=L[M+2];p.push(C,z,z,O,O,C)}}else if(y!==void 0){let L=y.array;v=y.version;for(let M=0,H=L.length/3-1;M<H;M+=3){let C=M+0,z=M+1,O=M+2;p.push(C,z,z,O,O,C)}}else return;let g=new(_f(p)?pl:dl)(p,1);g.version=v;let d=r.get(u);d&&e.remove(d),r.set(u,g)}function h(u){let p=r.get(u);if(p){let x=u.index;x!==null&&p.version<x.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function s0(i,e,t,n){let s=n.isWebGL2,r;function o(x){r=x}let a,c;function l(x){a=x.type,c=x.bytesPerElement}function h(x,y){i.drawElements(r,y,a,x*c),t.update(y,r,1)}function u(x,y,v){if(v===0)return;let g,d;if(s)g=i,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](r,y,a,x*c,v),t.update(y,r,v)}function p(x,y,v){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<v;d++)this.render(x[d]/c,y[d]);else{g.multiDrawElementsWEBGL(r,y,0,a,x,0,v);let d=0;for(let L=0;L<v;L++)d+=y[L];t.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=p}function r0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function a0(i,e){return i[0]-e[0]}function o0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function l0(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new jt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let p=l.morphTargetInfluences;if(e.isWebGL2===!0){let x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=x!==void 0?x.length:0,v=r.get(h);if(v===void 0||v.count!==y){let k=function(){oe.dispose(),r.delete(h),h.removeEventListener("dispose",k)};v!==void 0&&v.texture.dispose();let L=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,H=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],O=h.morphAttributes.color||[],ce=0;L===!0&&(ce=1),M===!0&&(ce=2),H===!0&&(ce=3);let S=h.attributes.position.count*ce,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let F=new Float32Array(S*R*4*y),oe=new fl(F,S,R,y);oe.type=ar,oe.needsUpdate=!0;let Ae=ce*4;for(let Z=0;Z<y;Z++){let se=C[Z],_e=z[Z],ue=O[Z],re=S*R*4*Z;for(let Me=0;Me<se.count;Me++){let Re=Me*Ae;L===!0&&(o.fromBufferAttribute(se,Me),F[re+Re+0]=o.x,F[re+Re+1]=o.y,F[re+Re+2]=o.z,F[re+Re+3]=0),M===!0&&(o.fromBufferAttribute(_e,Me),F[re+Re+4]=o.x,F[re+Re+5]=o.y,F[re+Re+6]=o.z,F[re+Re+7]=0),H===!0&&(o.fromBufferAttribute(ue,Me),F[re+Re+8]=o.x,F[re+Re+9]=o.y,F[re+Re+10]=o.z,F[re+Re+11]=ue.itemSize===4?o.w:1)}}v={count:y,texture:oe,size:new Xe(S,R)},r.set(h,v),h.addEventListener("dispose",k)}let g=0;for(let L=0;L<p.length;L++)g+=p[L];let d=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",p),u.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let x=p===void 0?0:p.length,y=n[h.id];if(y===void 0||y.length!==x){y=[];for(let M=0;M<x;M++)y[M]=[M,0];n[h.id]=y}for(let M=0;M<x;M++){let H=y[M];H[0]=M,H[1]=p[M]}y.sort(o0);for(let M=0;M<8;M++)M<x&&y[M][1]?(a[M][0]=y[M][0],a[M][1]=y[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(a0);let v=h.morphAttributes.position,g=h.morphAttributes.normal,d=0;for(let M=0;M<8;M++){let H=a[M],C=H[0],z=H[1];C!==Number.MAX_SAFE_INTEGER&&z?(v&&h.getAttribute("morphTarget"+M)!==v[C]&&h.setAttribute("morphTarget"+M,v[C]),g&&h.getAttribute("morphNormal"+M)!==g[C]&&h.setAttribute("morphNormal"+M,g[C]),s[M]=z,d+=z):(v&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),g&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),s[M]=0)}let L=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",L),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function c0(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var _l=class extends Si{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Ir,h!==Ir&&h!==Sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ir&&(n=rr),n===void 0&&h===Sa&&(n=Lr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Cn,this.minFilter=c!==void 0?c:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ef=new Si,Sf=new _l(1,1);Sf.compareFunction=gf;var bf=new fl,wf=new zc,Tf=new gl,Du=[],Nu=[],Ou=new Float32Array(16),Fu=new Float32Array(9),zu=new Float32Array(4);function Ra(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Du[s];if(r===void 0&&(r=new Float32Array(s),Du[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Pn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Il(i,e){let t=Nu[e];t===void 0&&(t=new Int32Array(e),Nu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function h0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function u0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;i.uniform2fv(this.addr,e),Ln(t,e)}}function f0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pn(t,e))return;i.uniform3fv(this.addr,e),Ln(t,e)}}function d0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;i.uniform4fv(this.addr,e),Ln(t,e)}}function p0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ln(t,e)}else{if(Pn(t,n))return;zu.set(n),i.uniformMatrix2fv(this.addr,!1,zu),Ln(t,n)}}function m0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ln(t,e)}else{if(Pn(t,n))return;Fu.set(n),i.uniformMatrix3fv(this.addr,!1,Fu),Ln(t,n)}}function g0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ln(t,e)}else{if(Pn(t,n))return;Ou.set(n),i.uniformMatrix4fv(this.addr,!1,Ou),Ln(t,n)}}function x0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;i.uniform2iv(this.addr,e),Ln(t,e)}}function v0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pn(t,e))return;i.uniform3iv(this.addr,e),Ln(t,e)}}function y0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;i.uniform4iv(this.addr,e),Ln(t,e)}}function M0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function E0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;i.uniform2uiv(this.addr,e),Ln(t,e)}}function S0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pn(t,e))return;i.uniform3uiv(this.addr,e),Ln(t,e)}}function b0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;i.uniform4uiv(this.addr,e),Ln(t,e)}}function w0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Sf:Ef;t.setTexture2D(e||r,s)}function T0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wf,s)}function A0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Tf,s)}function R0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bf,s)}function C0(i){switch(i){case 5126:return h0;case 35664:return u0;case 35665:return f0;case 35666:return d0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return x0;case 35667:case 35671:return _0;case 35668:case 35672:return v0;case 35669:case 35673:return y0;case 5125:return M0;case 36294:return E0;case 36295:return S0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return R0}}function P0(i,e){i.uniform1fv(this.addr,e)}function L0(i,e){let t=Ra(e,this.size,2);i.uniform2fv(this.addr,t)}function I0(i,e){let t=Ra(e,this.size,3);i.uniform3fv(this.addr,t)}function U0(i,e){let t=Ra(e,this.size,4);i.uniform4fv(this.addr,t)}function D0(i,e){let t=Ra(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function N0(i,e){let t=Ra(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function O0(i,e){let t=Ra(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function F0(i,e){i.uniform1iv(this.addr,e)}function z0(i,e){i.uniform2iv(this.addr,e)}function B0(i,e){i.uniform3iv(this.addr,e)}function H0(i,e){i.uniform4iv(this.addr,e)}function k0(i,e){i.uniform1uiv(this.addr,e)}function V0(i,e){i.uniform2uiv(this.addr,e)}function G0(i,e){i.uniform3uiv(this.addr,e)}function W0(i,e){i.uniform4uiv(this.addr,e)}function X0(i,e,t){let n=this.cache,s=e.length,r=Il(t,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ef,r[o])}function q0(i,e,t){let n=this.cache,s=e.length,r=Il(t,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||wf,r[o])}function Y0(i,e,t){let n=this.cache,s=e.length,r=Il(t,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Tf,r[o])}function Z0(i,e,t){let n=this.cache,s=e.length,r=Il(t,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||bf,r[o])}function J0(i){switch(i){case 5126:return P0;case 35664:return L0;case 35665:return I0;case 35666:return U0;case 35674:return D0;case 35675:return N0;case 35676:return O0;case 5124:case 35670:return F0;case 35667:case 35671:return z0;case 35668:case 35672:return B0;case 35669:case 35673:return H0;case 5125:return k0;case 36294:return V0;case 36295:return G0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return Z0}}var kc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=C0(t.type)}},Vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J0(t.type)}},Gc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Mc=/(\w+)(\])?(\[|\.)?/g;function Bu(i,e){i.seq.push(e),i.map[e.id]=e}function K0(i,e,t){let n=i.name,s=n.length;for(Mc.lastIndex=0;;){let r=Mc.exec(n),o=Mc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Bu(t,l===void 0?new kc(a,i,e):new Vc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Gc(a),Bu(t,u)),t=u}}}var ya=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);K0(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Hu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var $0=37297,j0=0;function Q0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function ex(i){let e=Kt.getPrimaries(Kt.workingColorSpace),t=Kt.getPrimaries(i),n;switch(e===t?n="":e===al&&t===rl?n="LinearDisplayP3ToLinearSRGB":e===rl&&t===al&&(n="LinearSRGBToLinearDisplayP3"),i){case Ds:case Ll:return[n,"LinearTransferOETF"];case Zt:case vh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ku(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Q0(i.getShaderSource(e),o)}else return s}function tx(i,e){let t=ex(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function nx(i,e){let t;switch(e){case ph:t="Linear";break;case mh:t="Reinhard";break;case gh:t="OptimizedCineon";break;case xo:t="ACESFilmic";break;case xh:t="AgX";break;case dd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ix(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xa).join(`
`)}function sx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xa).join(`
`)}function rx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ax(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function xa(i){return i!==""}function Vu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(i){return i.replace(ox,cx)}var lx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cx(i,e){let t=Nt[e];if(t===void 0){let n=lx.get(e);if(n!==void 0)t=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wc(t)}var hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wu(i){return i.replace(hx,ux)}function ux(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ls&&(e="SHADOWMAP_TYPE_VSM"),e}function dx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ma:case Ea:e="ENVMAP_TYPE_CUBE";break;case Pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function px(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ea:e="ENVMAP_MODE_REFRACTION";break}return e}function mx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dh:e="ENVMAP_BLENDING_MULTIPLY";break;case ud:e="ENVMAP_BLENDING_MIX";break;case fd:e="ENVMAP_BLENDING_ADD";break}return e}function gx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function xx(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=fx(t),l=dx(t),h=px(t),u=mx(t),p=gx(t),x=t.isWebGL2?"":ix(t),y=sx(t),v=rx(r),g=s.createProgram(),d,L,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(xa).join(`
`),d.length>0&&(d+=`
`),L=[x,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(xa).join(`
`),L.length>0&&(L+=`
`)):(d=[Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),L=[x,Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?Nt.tonemapping_pars_fragment:"",t.toneMapping!==or?nx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,tx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),o=Wc(o),o=Vu(o,t),o=Gu(o,t),a=Wc(a),a=Vu(a,t),a=Gu(a,t),o=Wu(o),a=Wu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,L=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+L);let H=M+d+o,C=M+L+a,z=Hu(s,s.VERTEX_SHADER,H),O=Hu(s,s.FRAGMENT_SHADER,C);s.attachShader(g,z),s.attachShader(g,O),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function ce(oe){if(i.debug.checkShaderErrors){let Ae=s.getProgramInfoLog(g).trim(),k=s.getShaderInfoLog(z).trim(),Z=s.getShaderInfoLog(O).trim(),se=!0,_e=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,z,O);else{let ue=ku(s,z,"vertex"),re=ku(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+Ae+`
`+ue+`
`+re)}else Ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Ae):(k===""||Z==="")&&(_e=!1);_e&&(oe.diagnostics={runnable:se,programLog:Ae,vertexShader:{log:k,prefix:d},fragmentShader:{log:Z,prefix:L}})}s.deleteShader(z),s.deleteShader(O),S=new ya(s,g),R=ax(s,g)}let S;this.getUniforms=function(){return S===void 0&&ce(this),S};let R;this.getAttributes=function(){return R===void 0&&ce(this),R};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(g,$0)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=z,this.fragmentShader=O,this}var _x=0,Xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qc(e),t.set(e,n)),n}},qc=class{constructor(e){this.id=_x++,this.code=e,this.usedTimes=0}};function vx(i,e,t,n,s,r,o){let a=new oo,c=new Xc,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,p=s.vertexTextures,x=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function g(S,R,F,oe,Ae){let k=oe.fog,Z=Ae.geometry,se=S.isMeshStandardMaterial?oe.environment:null,_e=(S.isMeshStandardMaterial?t:e).get(S.envMap||se),ue=_e&&_e.mapping===Pl?_e.image.height:null,re=y[S.type];S.precision!==null&&(x=s.getMaxPrecision(S.precision),x!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",x,"instead."));let Me=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Re=Me!==void 0?Me.length:0,I=0;Z.morphAttributes.position!==void 0&&(I=1),Z.morphAttributes.normal!==void 0&&(I=2),Z.morphAttributes.color!==void 0&&(I=3);let W,le,Ce,xe;if(re){let ln=is[re];W=ln.vertexShader,le=ln.fragmentShader}else W=S.vertexShader,le=S.fragmentShader,c.update(S),Ce=c.getVertexShaderID(S),xe=c.getFragmentShaderID(S);let ze=i.getRenderTarget(),at=Ae.isInstancedMesh===!0,Ze=Ae.isBatchedMesh===!0,it=!!S.map,vt=!!S.matcap,j=!!_e,Gt=!!S.aoMap,$e=!!S.lightMap,nt=!!S.bumpMap,Oe=!!S.normalMap,Ht=!!S.displacementMap,xt=!!S.emissiveMap,A=!!S.metalnessMap,E=!!S.roughnessMap,ee=S.anisotropy>0,we=S.clearcoat>0,Ee=S.iridescence>0,Se=S.sheen>0,ke=S.transmission>0,Ie=ee&&!!S.anisotropyMap,De=we&&!!S.clearcoatMap,Ge=we&&!!S.clearcoatNormalMap,et=we&&!!S.clearcoatRoughnessMap,de=Ee&&!!S.iridescenceMap,Tt=Ee&&!!S.iridescenceThicknessMap,N=Se&&!!S.sheenColorMap,ye=Se&&!!S.sheenRoughnessMap,Te=!!S.specularMap,be=!!S.specularColorMap,Be=!!S.specularIntensityMap,yt=ke&&!!S.transmissionMap,dt=ke&&!!S.thicknessMap,pt=!!S.gradientMap,fe=!!S.alphaMap,G=S.alphaTest>0,Pe=!!S.alphaHash,he=!!S.extensions,We=!!Z.attributes.uv1,qe=!!Z.attributes.uv2,Mt=!!Z.attributes.uv3,ht=or;return S.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(ht=i.toneMapping),{isWebGL2:h,shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:W,fragmentShader:le,defines:S.defines,customVertexShaderID:Ce,customFragmentShaderID:xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:x,batching:Ze,instancing:at,instancingColor:at&&Ae.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ze===null?i.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:Ds,map:it,matcap:vt,envMap:j,envMapMode:j&&_e.mapping,envMapCubeUVHeight:ue,aoMap:Gt,lightMap:$e,bumpMap:nt,normalMap:Oe,displacementMap:p&&Ht,emissiveMap:xt,normalMapObjectSpace:Oe&&S.normalMapType===wd,normalMapTangentSpace:Oe&&S.normalMapType===mf,metalnessMap:A,roughnessMap:E,anisotropy:ee,anisotropyMap:Ie,clearcoat:we,clearcoatMap:De,clearcoatNormalMap:Ge,clearcoatRoughnessMap:et,iridescence:Ee,iridescenceMap:de,iridescenceThicknessMap:Tt,sheen:Se,sheenColorMap:N,sheenRoughnessMap:ye,specularMap:Te,specularColorMap:be,specularIntensityMap:Be,transmission:ke,transmissionMap:yt,thicknessMap:dt,gradientMap:pt,opaque:S.transparent===!1&&S.blending===_a,alphaMap:fe,alphaTest:G,alphaHash:Pe,combine:S.combine,mapUv:it&&v(S.map.channel),aoMapUv:Gt&&v(S.aoMap.channel),lightMapUv:$e&&v(S.lightMap.channel),bumpMapUv:nt&&v(S.bumpMap.channel),normalMapUv:Oe&&v(S.normalMap.channel),displacementMapUv:Ht&&v(S.displacementMap.channel),emissiveMapUv:xt&&v(S.emissiveMap.channel),metalnessMapUv:A&&v(S.metalnessMap.channel),roughnessMapUv:E&&v(S.roughnessMap.channel),anisotropyMapUv:Ie&&v(S.anisotropyMap.channel),clearcoatMapUv:De&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:N&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(S.sheenRoughnessMap.channel),specularMapUv:Te&&v(S.specularMap.channel),specularColorMapUv:be&&v(S.specularColorMap.channel),specularIntensityMapUv:Be&&v(S.specularIntensityMap.channel),transmissionMapUv:yt&&v(S.transmissionMap.channel),thicknessMapUv:dt&&v(S.thicknessMap.channel),alphaMapUv:fe&&v(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Oe||ee),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,vertexUv1s:We,vertexUv2s:qe,vertexUv3s:Mt,pointsUvs:Ae.isPoints===!0&&!!Z.attributes.uv&&(it||fe),fog:!!k,useFog:S.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Ae.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:I,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:ht,useLegacyLights:i._useLegacyLights,decodeVideoTexture:it&&S.map.isVideoTexture===!0&&Kt.getTransfer(S.map.colorSpace)===an,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Kn,flipSided:S.side===$n,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:he&&S.extensions.derivatives===!0,extensionFragDepth:he&&S.extensions.fragDepth===!0,extensionDrawBuffers:he&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){let R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(let F in S.defines)R.push(F),R.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(L(R,S),M(R,S),R.push(i.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function L(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function M(S,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),S.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function H(S){let R=y[S.type],F;if(R){let oe=is[R];F=fr.clone(oe.uniforms)}else F=S.uniforms;return F}function C(S,R){let F;for(let oe=0,Ae=l.length;oe<Ae;oe++){let k=l[oe];if(k.cacheKey===R){F=k,++F.usedTimes;break}}return F===void 0&&(F=new xx(i,R,S,r),l.push(F)),F}function z(S){if(--S.usedTimes===0){let R=l.indexOf(S);l[R]=l[l.length-1],l.pop(),S.destroy()}}function O(S){c.remove(S)}function ce(){c.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:H,acquireProgram:C,releaseProgram:z,releaseShaderCache:O,programs:l,dispose:ce}}function yx(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Mx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function qu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,p,x,y,v,g){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:p,material:x,groupOrder:y,renderOrder:u.renderOrder,z:v,group:g},i[e]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=x,d.groupOrder=y,d.renderOrder=u.renderOrder,d.z=v,d.group=g),e++,d}function a(u,p,x,y,v,g){let d=o(u,p,x,y,v,g);x.transmission>0?n.push(d):x.transparent===!0?s.push(d):t.push(d)}function c(u,p,x,y,v,g){let d=o(u,p,x,y,v,g);x.transmission>0?n.unshift(d):x.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,p){t.length>1&&t.sort(u||Mx),n.length>1&&n.sort(p||qu),s.length>1&&s.sort(p||qu)}function h(){for(let u=e,p=i.length;u<p;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Ex(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Yu,i.set(n,[o])):s>=r.length?(o=new Yu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ue};break;case"SpotLight":t={position:new D,direction:new D,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function bx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var wx=0;function Tx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ax(i,e){let t=new Sx,n=bx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new D);let r=new D,o=new Ot,a=new Ot;function c(h,u){let p=0,x=0,y=0;for(let oe=0;oe<9;oe++)s.probe[oe].set(0,0,0);let v=0,g=0,d=0,L=0,M=0,H=0,C=0,z=0,O=0,ce=0,S=0;h.sort(Tx);let R=u===!0?Math.PI:1;for(let oe=0,Ae=h.length;oe<Ae;oe++){let k=h[oe],Z=k.color,se=k.intensity,_e=k.distance,ue=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)p+=Z.r*se*R,x+=Z.g*se*R,y+=Z.b*se*R;else if(k.isLightProbe){for(let re=0;re<9;re++)s.probe[re].addScaledVector(k.sh.coefficients[re],se);S++}else if(k.isDirectionalLight){let re=t.get(k);if(re.color.copy(k.color).multiplyScalar(k.intensity*R),k.castShadow){let Me=k.shadow,Re=n.get(k);Re.shadowBias=Me.bias,Re.shadowNormalBias=Me.normalBias,Re.shadowRadius=Me.radius,Re.shadowMapSize=Me.mapSize,s.directionalShadow[v]=Re,s.directionalShadowMap[v]=ue,s.directionalShadowMatrix[v]=k.shadow.matrix,H++}s.directional[v]=re,v++}else if(k.isSpotLight){let re=t.get(k);re.position.setFromMatrixPosition(k.matrixWorld),re.color.copy(Z).multiplyScalar(se*R),re.distance=_e,re.coneCos=Math.cos(k.angle),re.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),re.decay=k.decay,s.spot[d]=re;let Me=k.shadow;if(k.map&&(s.spotLightMap[O]=k.map,O++,Me.updateMatrices(k),k.castShadow&&ce++),s.spotLightMatrix[d]=Me.matrix,k.castShadow){let Re=n.get(k);Re.shadowBias=Me.bias,Re.shadowNormalBias=Me.normalBias,Re.shadowRadius=Me.radius,Re.shadowMapSize=Me.mapSize,s.spotShadow[d]=Re,s.spotShadowMap[d]=ue,z++}d++}else if(k.isRectAreaLight){let re=t.get(k);re.color.copy(Z).multiplyScalar(se),re.halfWidth.set(k.width*.5,0,0),re.halfHeight.set(0,k.height*.5,0),s.rectArea[L]=re,L++}else if(k.isPointLight){let re=t.get(k);if(re.color.copy(k.color).multiplyScalar(k.intensity*R),re.distance=k.distance,re.decay=k.decay,k.castShadow){let Me=k.shadow,Re=n.get(k);Re.shadowBias=Me.bias,Re.shadowNormalBias=Me.normalBias,Re.shadowRadius=Me.radius,Re.shadowMapSize=Me.mapSize,Re.shadowCameraNear=Me.camera.near,Re.shadowCameraFar=Me.camera.far,s.pointShadow[g]=Re,s.pointShadowMap[g]=ue,s.pointShadowMatrix[g]=k.shadow.matrix,C++}s.point[g]=re,g++}else if(k.isHemisphereLight){let re=t.get(k);re.skyColor.copy(k.color).multiplyScalar(se*R),re.groundColor.copy(k.groundColor).multiplyScalar(se*R),s.hemi[M]=re,M++}}L>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ne.LTC_FLOAT_1,s.rectAreaLTC2=Ne.LTC_FLOAT_2):(s.rectAreaLTC1=Ne.LTC_HALF_1,s.rectAreaLTC2=Ne.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ne.LTC_FLOAT_1,s.rectAreaLTC2=Ne.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ne.LTC_HALF_1,s.rectAreaLTC2=Ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=x,s.ambient[2]=y;let F=s.hash;(F.directionalLength!==v||F.pointLength!==g||F.spotLength!==d||F.rectAreaLength!==L||F.hemiLength!==M||F.numDirectionalShadows!==H||F.numPointShadows!==C||F.numSpotShadows!==z||F.numSpotMaps!==O||F.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=d,s.rectArea.length=L,s.point.length=g,s.hemi.length=M,s.directionalShadow.length=H,s.directionalShadowMap.length=H,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=z,s.spotShadowMap.length=z,s.directionalShadowMatrix.length=H,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=z+O-ce,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=ce,s.numLightProbes=S,F.directionalLength=v,F.pointLength=g,F.spotLength=d,F.rectAreaLength=L,F.hemiLength=M,F.numDirectionalShadows=H,F.numPointShadows=C,F.numSpotShadows=z,F.numSpotMaps=O,F.numLightProbes=S,s.version=wx++)}function l(h,u){let p=0,x=0,y=0,v=0,g=0,d=u.matrixWorldInverse;for(let L=0,M=h.length;L<M;L++){let H=h[L];if(H.isDirectionalLight){let C=s.directional[p];C.direction.setFromMatrixPosition(H.matrixWorld),r.setFromMatrixPosition(H.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),p++}else if(H.isSpotLight){let C=s.spot[y];C.position.setFromMatrixPosition(H.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(H.matrixWorld),r.setFromMatrixPosition(H.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),y++}else if(H.isRectAreaLight){let C=s.rectArea[v];C.position.setFromMatrixPosition(H.matrixWorld),C.position.applyMatrix4(d),a.identity(),o.copy(H.matrixWorld),o.premultiply(d),a.extractRotation(o),C.halfWidth.set(H.width*.5,0,0),C.halfHeight.set(0,H.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),v++}else if(H.isPointLight){let C=s.point[x];C.position.setFromMatrixPosition(H.matrixWorld),C.position.applyMatrix4(d),x++}else if(H.isHemisphereLight){let C=s.hemi[g];C.direction.setFromMatrixPosition(H.matrixWorld),C.direction.transformDirection(d),g++}}}return{setup:c,setupView:l,state:s}}function Zu(i,e){let t=new Ax(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Rx(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new Zu(i,e),t.set(r,[c])):o>=a.length?(c=new Zu(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var Yc=class extends hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zc=class extends hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Cx=`void main() {
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
}`;function Lx(i,e,t){let n=new lo,s=new Xe,r=new Xe,o=new jt,a=new Yc({depthPacking:bd}),c=new Zc,l={},h=t.maxTextureSize,u={[cr]:$n,[$n]:cr,[Kn]:Kn},p=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Cx,fragmentShader:Px}),x=p.clone();x.defines.HORIZONTAL_PASS=1;let y=new bi;y.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new _t(y,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rf;let d=this.type;this.render=function(z,O,ce){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||z.length===0)return;let S=i.getRenderTarget(),R=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),oe=i.state;oe.setBlending(rs),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);let Ae=d!==Ls&&this.type===Ls,k=d===Ls&&this.type!==Ls;for(let Z=0,se=z.length;Z<se;Z++){let _e=z[Z],ue=_e.shadow;if(ue===void 0){console.warn("THREE.WebGLShadowMap:",_e,"has no shadow.");continue}if(ue.autoUpdate===!1&&ue.needsUpdate===!1)continue;s.copy(ue.mapSize);let re=ue.getFrameExtents();if(s.multiply(re),r.copy(ue.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,ue.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,ue.mapSize.y=r.y)),ue.map===null||Ae===!0||k===!0){let Re=this.type!==Ls?{minFilter:Cn,magFilter:Cn}:{};ue.map!==null&&ue.map.dispose(),ue.map=new oi(s.x,s.y,Re),ue.map.texture.name=_e.name+".shadowMap",ue.camera.updateProjectionMatrix()}i.setRenderTarget(ue.map),i.clear();let Me=ue.getViewportCount();for(let Re=0;Re<Me;Re++){let I=ue.getViewport(Re);o.set(r.x*I.x,r.y*I.y,r.x*I.z,r.y*I.w),oe.viewport(o),ue.updateMatrices(_e,Re),n=ue.getFrustum(),H(O,ce,ue.camera,_e,this.type)}ue.isPointLightShadow!==!0&&this.type===Ls&&L(ue,ce),ue.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(S,R,F)};function L(z,O){let ce=e.update(v);p.defines.VSM_SAMPLES!==z.blurSamples&&(p.defines.VSM_SAMPLES=z.blurSamples,x.defines.VSM_SAMPLES=z.blurSamples,p.needsUpdate=!0,x.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new oi(s.x,s.y)),p.uniforms.shadow_pass.value=z.map.texture,p.uniforms.resolution.value=z.mapSize,p.uniforms.radius.value=z.radius,i.setRenderTarget(z.mapPass),i.clear(),i.renderBufferDirect(O,null,ce,p,v,null),x.uniforms.shadow_pass.value=z.mapPass.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,i.setRenderTarget(z.map),i.clear(),i.renderBufferDirect(O,null,ce,x,v,null)}function M(z,O,ce,S){let R=null,F=ce.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(F!==void 0)R=F;else if(R=ce.isPointLight===!0?c:a,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){let oe=R.uuid,Ae=O.uuid,k=l[oe];k===void 0&&(k={},l[oe]=k);let Z=k[Ae];Z===void 0&&(Z=R.clone(),k[Ae]=Z,O.addEventListener("dispose",C)),R=Z}if(R.visible=O.visible,R.wireframe=O.wireframe,S===Ls?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:u[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,ce.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let oe=i.properties.get(R);oe.light=ce}return R}function H(z,O,ce,S,R){if(z.visible===!1)return;if(z.layers.test(O.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===Ls)&&(!z.frustumCulled||n.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,z.matrixWorld);let Ae=e.update(z),k=z.material;if(Array.isArray(k)){let Z=Ae.groups;for(let se=0,_e=Z.length;se<_e;se++){let ue=Z[se],re=k[ue.materialIndex];if(re&&re.visible){let Me=M(z,re,S,R);z.onBeforeShadow(i,z,O,ce,Ae,Me,ue),i.renderBufferDirect(ce,null,Ae,Me,z,ue),z.onAfterShadow(i,z,O,ce,Ae,Me,ue)}}}else if(k.visible){let Z=M(z,k,S,R);z.onBeforeShadow(i,z,O,ce,Ae,Z,null),i.renderBufferDirect(ce,null,Ae,Z,z,null),z.onAfterShadow(i,z,O,ce,Ae,Z,null)}}let oe=z.children;for(let Ae=0,k=oe.length;Ae<k;Ae++)H(oe[Ae],O,ce,S,R)}function C(z){z.target.removeEventListener("dispose",C);for(let ce in l){let S=l[ce],R=z.target.uuid;R in S&&(S[R].dispose(),delete S[R])}}}function Ix(i,e,t){let n=t.isWebGL2;function s(){let G=!1,Pe=new jt,he=null,We=new jt(0,0,0,0);return{setMask:function(qe){he!==qe&&!G&&(i.colorMask(qe,qe,qe,qe),he=qe)},setLocked:function(qe){G=qe},setClear:function(qe,Mt,ht,kt,ln){ln===!0&&(qe*=kt,Mt*=kt,ht*=kt),Pe.set(qe,Mt,ht,kt),We.equals(Pe)===!1&&(i.clearColor(qe,Mt,ht,kt),We.copy(Pe))},reset:function(){G=!1,he=null,We.set(-1,0,0,0)}}}function r(){let G=!1,Pe=null,he=null,We=null;return{setTest:function(qe){qe?Ze(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(qe){Pe!==qe&&!G&&(i.depthMask(qe),Pe=qe)},setFunc:function(qe){if(he!==qe){switch(qe){case sd:i.depthFunc(i.NEVER);break;case rd:i.depthFunc(i.ALWAYS);break;case ad:i.depthFunc(i.LESS);break;case tl:i.depthFunc(i.LEQUAL);break;case od:i.depthFunc(i.EQUAL);break;case ld:i.depthFunc(i.GEQUAL);break;case cd:i.depthFunc(i.GREATER);break;case hd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=qe}},setLocked:function(qe){G=qe},setClear:function(qe){We!==qe&&(i.clearDepth(qe),We=qe)},reset:function(){G=!1,Pe=null,he=null,We=null}}}function o(){let G=!1,Pe=null,he=null,We=null,qe=null,Mt=null,ht=null,kt=null,ln=null;return{setTest:function(J){G||(J?Ze(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(J){Pe!==J&&!G&&(i.stencilMask(J),Pe=J)},setFunc:function(J,pe,ge){(he!==J||We!==pe||qe!==ge)&&(i.stencilFunc(J,pe,ge),he=J,We=pe,qe=ge)},setOp:function(J,pe,ge){(Mt!==J||ht!==pe||kt!==ge)&&(i.stencilOp(J,pe,ge),Mt=J,ht=pe,kt=ge)},setLocked:function(J){G=J},setClear:function(J){ln!==J&&(i.clearStencil(J),ln=J)},reset:function(){G=!1,Pe=null,he=null,We=null,qe=null,Mt=null,ht=null,kt=null,ln=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,p={},x={},y=new WeakMap,v=[],g=null,d=!1,L=null,M=null,H=null,C=null,z=null,O=null,ce=null,S=new Ue(0,0,0),R=0,F=!1,oe=null,Ae=null,k=null,Z=null,se=null,_e=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ue=!1,re=0,Me=i.getParameter(i.VERSION);Me.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Me)[1]),ue=re>=1):Me.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Me)[1]),ue=re>=2);let Re=null,I={},W=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),Ce=new jt().fromArray(W),xe=new jt().fromArray(le);function ze(G,Pe,he,We){let qe=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(G,Mt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ht=0;ht<he;ht++)n&&(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)?i.texImage3D(Pe,0,i.RGBA,1,1,We,0,i.RGBA,i.UNSIGNED_BYTE,qe):i.texImage2D(Pe+ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,qe);return Mt}let at={};at[i.TEXTURE_2D]=ze(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(at[i.TEXTURE_2D_ARRAY]=ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ze(i.DEPTH_TEST),c.setFunc(tl),xt(!1),A(Ch),Ze(i.CULL_FACE),Oe(rs);function Ze(G){p[G]!==!0&&(i.enable(G),p[G]=!0)}function it(G){p[G]!==!1&&(i.disable(G),p[G]=!1)}function vt(G,Pe){return x[G]!==Pe?(i.bindFramebuffer(G,Pe),x[G]=Pe,n&&(G===i.DRAW_FRAMEBUFFER&&(x[i.FRAMEBUFFER]=Pe),G===i.FRAMEBUFFER&&(x[i.DRAW_FRAMEBUFFER]=Pe)),!0):!1}function j(G,Pe){let he=v,We=!1;if(G)if(he=y.get(Pe),he===void 0&&(he=[],y.set(Pe,he)),G.isWebGLMultipleRenderTargets){let qe=G.texture;if(he.length!==qe.length||he[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,ht=qe.length;Mt<ht;Mt++)he[Mt]=i.COLOR_ATTACHMENT0+Mt;he.length=qe.length,We=!0}}else he[0]!==i.COLOR_ATTACHMENT0&&(he[0]=i.COLOR_ATTACHMENT0,We=!0);else he[0]!==i.BACK&&(he[0]=i.BACK,We=!0);We&&(t.isWebGL2?i.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Gt(G){return g!==G?(i.useProgram(G),g=G,!0):!1}let $e={[Rr]:i.FUNC_ADD,[Gf]:i.FUNC_SUBTRACT,[Wf]:i.FUNC_REVERSE_SUBTRACT};if(n)$e[Ih]=i.MIN,$e[Uh]=i.MAX;else{let G=e.get("EXT_blend_minmax");G!==null&&($e[Ih]=G.MIN_EXT,$e[Uh]=G.MAX_EXT)}let nt={[Xf]:i.ZERO,[qf]:i.ONE,[Yf]:i.SRC_COLOR,[Rc]:i.SRC_ALPHA,[Qf]:i.SRC_ALPHA_SATURATE,[$f]:i.DST_COLOR,[Jf]:i.DST_ALPHA,[Zf]:i.ONE_MINUS_SRC_COLOR,[Cc]:i.ONE_MINUS_SRC_ALPHA,[jf]:i.ONE_MINUS_DST_COLOR,[Kf]:i.ONE_MINUS_DST_ALPHA,[ed]:i.CONSTANT_COLOR,[td]:i.ONE_MINUS_CONSTANT_COLOR,[nd]:i.CONSTANT_ALPHA,[id]:i.ONE_MINUS_CONSTANT_ALPHA};function Oe(G,Pe,he,We,qe,Mt,ht,kt,ln,J){if(G===rs){d===!0&&(it(i.BLEND),d=!1);return}if(d===!1&&(Ze(i.BLEND),d=!0),G!==Vf){if(G!==L||J!==F){if((M!==Rr||z!==Rr)&&(i.blendEquation(i.FUNC_ADD),M=Rr,z=Rr),J)switch(G){case _a:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ei:i.blendFunc(i.ONE,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case _a:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ei:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}H=null,C=null,O=null,ce=null,S.set(0,0,0),R=0,L=G,F=J}return}qe=qe||Pe,Mt=Mt||he,ht=ht||We,(Pe!==M||qe!==z)&&(i.blendEquationSeparate($e[Pe],$e[qe]),M=Pe,z=qe),(he!==H||We!==C||Mt!==O||ht!==ce)&&(i.blendFuncSeparate(nt[he],nt[We],nt[Mt],nt[ht]),H=he,C=We,O=Mt,ce=ht),(kt.equals(S)===!1||ln!==R)&&(i.blendColor(kt.r,kt.g,kt.b,ln),S.copy(kt),R=ln),L=G,F=!1}function Ht(G,Pe){G.side===Kn?it(i.CULL_FACE):Ze(i.CULL_FACE);let he=G.side===$n;Pe&&(he=!he),xt(he),G.blending===_a&&G.transparent===!1?Oe(rs):Oe(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);let We=G.stencilWrite;l.setTest(We),We&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ee(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Ze(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(G){oe!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),oe=G)}function A(G){G!==Bf?(Ze(i.CULL_FACE),G!==Ae&&(G===Ch?i.cullFace(i.BACK):G===Hf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),Ae=G}function E(G){G!==k&&(ue&&i.lineWidth(G),k=G)}function ee(G,Pe,he){G?(Ze(i.POLYGON_OFFSET_FILL),(Z!==Pe||se!==he)&&(i.polygonOffset(Pe,he),Z=Pe,se=he)):it(i.POLYGON_OFFSET_FILL)}function we(G){G?Ze(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function Ee(G){G===void 0&&(G=i.TEXTURE0+_e-1),Re!==G&&(i.activeTexture(G),Re=G)}function Se(G,Pe,he){he===void 0&&(Re===null?he=i.TEXTURE0+_e-1:he=Re);let We=I[he];We===void 0&&(We={type:void 0,texture:void 0},I[he]=We),(We.type!==G||We.texture!==Pe)&&(Re!==he&&(i.activeTexture(he),Re=he),i.bindTexture(G,Pe||at[G]),We.type=G,We.texture=Pe)}function ke(){let G=I[Re];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function N(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(G){Ce.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Ce.copy(G))}function yt(G){xe.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),xe.copy(G))}function dt(G,Pe){let he=u.get(Pe);he===void 0&&(he=new WeakMap,u.set(Pe,he));let We=he.get(G);We===void 0&&(We=i.getUniformBlockIndex(Pe,G.name),he.set(G,We))}function pt(G,Pe){let We=u.get(Pe).get(G);h.get(Pe)!==We&&(i.uniformBlockBinding(Pe,We,G.__bindingPointIndex),h.set(Pe,We))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},Re=null,I={},x={},y=new WeakMap,v=[],g=null,d=!1,L=null,M=null,H=null,C=null,z=null,O=null,ce=null,S=new Ue(0,0,0),R=0,F=!1,oe=null,Ae=null,k=null,Z=null,se=null,Ce.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ze,disable:it,bindFramebuffer:vt,drawBuffers:j,useProgram:Gt,setBlending:Oe,setMaterial:Ht,setFlipSided:xt,setCullFace:A,setLineWidth:E,setPolygonOffset:ee,setScissorTest:we,activeTexture:Ee,bindTexture:Se,unbindTexture:ke,compressedTexImage2D:Ie,compressedTexImage3D:De,texImage2D:Te,texImage3D:be,updateUBOMapping:dt,uniformBlockBinding:pt,texStorage2D:N,texStorage3D:ye,texSubImage2D:Ge,texSubImage3D:et,compressedTexSubImage2D:de,compressedTexSubImage3D:Tt,scissor:Be,viewport:yt,reset:fe}}function Ux(i,e,t,n,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,p=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,E){return x?new OffscreenCanvas(A,E):cl("canvas")}function v(A,E,ee,we){let Ee=1;if((A.width>we||A.height>we)&&(Ee=we/Math.max(A.width,A.height)),Ee<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let Se=E?ll:Math.floor,ke=Se(Ee*A.width),Ie=Se(Ee*A.height);u===void 0&&(u=y(ke,Ie));let De=ee?y(ke,Ie):u;return De.width=ke,De.height=Ie,De.getContext("2d").drawImage(A,0,0,ke,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ke+"x"+Ie+")."),De}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function g(A){return Oc(A.width)&&Oc(A.height)}function d(A){return a?!1:A.wrapS!==Yi||A.wrapT!==Yi||A.minFilter!==Cn&&A.minFilter!==fi}function L(A,E){return A.generateMipmaps&&E&&A.minFilter!==Cn&&A.minFilter!==fi}function M(A){i.generateMipmap(A)}function H(A,E,ee,we,Ee=!1){if(a===!1)return E;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Se=E;if(E===i.RED&&(ee===i.FLOAT&&(Se=i.R32F),ee===i.HALF_FLOAT&&(Se=i.R16F),ee===i.UNSIGNED_BYTE&&(Se=i.R8)),E===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(Se=i.R8UI),ee===i.UNSIGNED_SHORT&&(Se=i.R16UI),ee===i.UNSIGNED_INT&&(Se=i.R32UI),ee===i.BYTE&&(Se=i.R8I),ee===i.SHORT&&(Se=i.R16I),ee===i.INT&&(Se=i.R32I)),E===i.RG&&(ee===i.FLOAT&&(Se=i.RG32F),ee===i.HALF_FLOAT&&(Se=i.RG16F),ee===i.UNSIGNED_BYTE&&(Se=i.RG8)),E===i.RGBA){let ke=Ee?sl:Kt.getTransfer(we);ee===i.FLOAT&&(Se=i.RGBA32F),ee===i.HALF_FLOAT&&(Se=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(Se=ke===an?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(Se=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(Se=i.RGB5_A1)}return(Se===i.R16F||Se===i.R32F||Se===i.RG16F||Se===i.RG32F||Se===i.RGBA16F||Se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function C(A,E,ee){return L(A,ee)===!0||A.isFramebufferTexture&&A.minFilter!==Cn&&A.minFilter!==fi?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function z(A){return A===Cn||A===Dh||A===Yl?i.NEAREST:i.LINEAR}function O(A){let E=A.target;E.removeEventListener("dispose",O),S(E),E.isVideoTexture&&h.delete(E)}function ce(A){let E=A.target;E.removeEventListener("dispose",ce),F(E)}function S(A){let E=n.get(A);if(E.__webglInit===void 0)return;let ee=A.source,we=p.get(ee);if(we){let Ee=we[E.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&R(A),Object.keys(we).length===0&&p.delete(ee)}n.remove(A)}function R(A){let E=n.get(A);i.deleteTexture(E.__webglTexture);let ee=A.source,we=p.get(ee);delete we[E.__cacheKey],o.memory.textures--}function F(A){let E=A.texture,ee=n.get(A),we=n.get(E);if(we.__webglTexture!==void 0&&(i.deleteTexture(we.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++){if(Array.isArray(ee.__webglFramebuffer[Ee]))for(let Se=0;Se<ee.__webglFramebuffer[Ee].length;Se++)i.deleteFramebuffer(ee.__webglFramebuffer[Ee][Se]);else i.deleteFramebuffer(ee.__webglFramebuffer[Ee]);ee.__webglDepthbuffer&&i.deleteRenderbuffer(ee.__webglDepthbuffer[Ee])}else{if(Array.isArray(ee.__webglFramebuffer))for(let Ee=0;Ee<ee.__webglFramebuffer.length;Ee++)i.deleteFramebuffer(ee.__webglFramebuffer[Ee]);else i.deleteFramebuffer(ee.__webglFramebuffer);if(ee.__webglDepthbuffer&&i.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&i.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let Ee=0;Ee<ee.__webglColorRenderbuffer.length;Ee++)ee.__webglColorRenderbuffer[Ee]&&i.deleteRenderbuffer(ee.__webglColorRenderbuffer[Ee]);ee.__webglDepthRenderbuffer&&i.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Ee=0,Se=E.length;Ee<Se;Ee++){let ke=n.get(E[Ee]);ke.__webglTexture&&(i.deleteTexture(ke.__webglTexture),o.memory.textures--),n.remove(E[Ee])}n.remove(E),n.remove(A)}let oe=0;function Ae(){oe=0}function k(){let A=oe;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),oe+=1,A}function Z(A){let E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function se(A,E){let ee=n.get(A);if(A.isVideoTexture&&Ht(A),A.isRenderTargetTexture===!1&&A.version>0&&ee.__version!==A.version){let we=A.image;if(we===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(we.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(ee,A,E);return}}t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+E)}function _e(A,E){let ee=n.get(A);if(A.version>0&&ee.__version!==A.version){Ce(ee,A,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+E)}function ue(A,E){let ee=n.get(A);if(A.version>0&&ee.__version!==A.version){Ce(ee,A,E);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+E)}function re(A,E){let ee=n.get(A);if(A.version>0&&ee.__version!==A.version){xe(ee,A,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+E)}let Me={[Ic]:i.REPEAT,[Yi]:i.CLAMP_TO_EDGE,[Uc]:i.MIRRORED_REPEAT},Re={[Cn]:i.NEAREST,[Dh]:i.NEAREST_MIPMAP_NEAREST,[Yl]:i.NEAREST_MIPMAP_LINEAR,[fi]:i.LINEAR,[pd]:i.LINEAR_MIPMAP_NEAREST,[ro]:i.LINEAR_MIPMAP_LINEAR},I={[Td]:i.NEVER,[Id]:i.ALWAYS,[Ad]:i.LESS,[gf]:i.LEQUAL,[Rd]:i.EQUAL,[Ld]:i.GEQUAL,[Cd]:i.GREATER,[Pd]:i.NOTEQUAL};function W(A,E,ee){if(ee?(i.texParameteri(A,i.TEXTURE_WRAP_S,Me[E.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Me[E.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Me[E.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Re[E.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Re[E.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Yi||E.wrapT!==Yi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,z(E.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,z(E.minFilter)),E.minFilter!==Cn&&E.minFilter!==fi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let we=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Cn||E.minFilter!==Yl&&E.minFilter!==ro||E.type===ar&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Zi&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(A,we.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function le(A,E){let ee=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",O));let we=E.source,Ee=p.get(we);Ee===void 0&&(Ee={},p.set(we,Ee));let Se=Z(E);if(Se!==A.__cacheKey){Ee[Se]===void 0&&(Ee[Se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,ee=!0),Ee[Se].usedTimes++;let ke=Ee[A.__cacheKey];ke!==void 0&&(Ee[A.__cacheKey].usedTimes--,ke.usedTimes===0&&R(E)),A.__cacheKey=Se,A.__webglTexture=Ee[Se].texture}return ee}function Ce(A,E,ee){let we=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(we=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(we=i.TEXTURE_3D);let Ee=le(A,E),Se=E.source;t.bindTexture(we,A.__webglTexture,i.TEXTURE0+ee);let ke=n.get(Se);if(Se.version!==ke.__version||Ee===!0){t.activeTexture(i.TEXTURE0+ee);let Ie=Kt.getPrimaries(Kt.workingColorSpace),De=E.colorSpace===Di?null:Kt.getPrimaries(E.colorSpace),Ge=E.colorSpace===Di||Ie===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let et=d(E)&&g(E.image)===!1,de=v(E.image,et,!1,s.maxTextureSize);de=xt(E,de);let Tt=g(de)||a,N=r.convert(E.format,E.colorSpace),ye=r.convert(E.type),Te=H(E.internalFormat,N,ye,E.colorSpace,E.isVideoTexture);W(we,E,Tt);let be,Be=E.mipmaps,yt=a&&E.isVideoTexture!==!0&&Te!==df,dt=ke.__version===void 0||Ee===!0,pt=C(E,de,Tt);if(E.isDepthTexture)Te=i.DEPTH_COMPONENT,a?E.type===ar?Te=i.DEPTH_COMPONENT32F:E.type===rr?Te=i.DEPTH_COMPONENT24:E.type===Lr?Te=i.DEPTH24_STENCIL8:Te=i.DEPTH_COMPONENT16:E.type===ar&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ir&&Te===i.DEPTH_COMPONENT&&E.type!==_h&&E.type!==rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=rr,ye=r.convert(E.type)),E.format===Sa&&Te===i.DEPTH_COMPONENT&&(Te=i.DEPTH_STENCIL,E.type!==Lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Lr,ye=r.convert(E.type))),dt&&(yt?t.texStorage2D(i.TEXTURE_2D,1,Te,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Te,de.width,de.height,0,N,ye,null));else if(E.isDataTexture)if(Be.length>0&&Tt){yt&&dt&&t.texStorage2D(i.TEXTURE_2D,pt,Te,Be[0].width,Be[0].height);for(let fe=0,G=Be.length;fe<G;fe++)be=Be[fe],yt?t.texSubImage2D(i.TEXTURE_2D,fe,0,0,be.width,be.height,N,ye,be.data):t.texImage2D(i.TEXTURE_2D,fe,Te,be.width,be.height,0,N,ye,be.data);E.generateMipmaps=!1}else yt?(dt&&t.texStorage2D(i.TEXTURE_2D,pt,Te,de.width,de.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,N,ye,de.data)):t.texImage2D(i.TEXTURE_2D,0,Te,de.width,de.height,0,N,ye,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){yt&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Te,Be[0].width,Be[0].height,de.depth);for(let fe=0,G=Be.length;fe<G;fe++)be=Be[fe],E.format!==Mi?N!==null?yt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,be.width,be.height,de.depth,N,be.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,Te,be.width,be.height,de.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,be.width,be.height,de.depth,N,ye,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,Te,be.width,be.height,de.depth,0,N,ye,be.data)}else{yt&&dt&&t.texStorage2D(i.TEXTURE_2D,pt,Te,Be[0].width,Be[0].height);for(let fe=0,G=Be.length;fe<G;fe++)be=Be[fe],E.format!==Mi?N!==null?yt?t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,be.width,be.height,N,be.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,Te,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?t.texSubImage2D(i.TEXTURE_2D,fe,0,0,be.width,be.height,N,ye,be.data):t.texImage2D(i.TEXTURE_2D,fe,Te,be.width,be.height,0,N,ye,be.data)}else if(E.isDataArrayTexture)yt?(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Te,de.width,de.height,de.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,N,ye,de.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,de.width,de.height,de.depth,0,N,ye,de.data);else if(E.isData3DTexture)yt?(dt&&t.texStorage3D(i.TEXTURE_3D,pt,Te,de.width,de.height,de.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,N,ye,de.data)):t.texImage3D(i.TEXTURE_3D,0,Te,de.width,de.height,de.depth,0,N,ye,de.data);else if(E.isFramebufferTexture){if(dt)if(yt)t.texStorage2D(i.TEXTURE_2D,pt,Te,de.width,de.height);else{let fe=de.width,G=de.height;for(let Pe=0;Pe<pt;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Te,fe,G,0,N,ye,null),fe>>=1,G>>=1}}else if(Be.length>0&&Tt){yt&&dt&&t.texStorage2D(i.TEXTURE_2D,pt,Te,Be[0].width,Be[0].height);for(let fe=0,G=Be.length;fe<G;fe++)be=Be[fe],yt?t.texSubImage2D(i.TEXTURE_2D,fe,0,0,N,ye,be):t.texImage2D(i.TEXTURE_2D,fe,Te,N,ye,be);E.generateMipmaps=!1}else yt?(dt&&t.texStorage2D(i.TEXTURE_2D,pt,Te,de.width,de.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,N,ye,de)):t.texImage2D(i.TEXTURE_2D,0,Te,N,ye,de);L(E,Tt)&&M(we),ke.__version=Se.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function xe(A,E,ee){if(E.image.length!==6)return;let we=le(A,E),Ee=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+ee);let Se=n.get(Ee);if(Ee.version!==Se.__version||we===!0){t.activeTexture(i.TEXTURE0+ee);let ke=Kt.getPrimaries(Kt.workingColorSpace),Ie=E.colorSpace===Di?null:Kt.getPrimaries(E.colorSpace),De=E.colorSpace===Di||ke===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let Ge=E.isCompressedTexture||E.image[0].isCompressedTexture,et=E.image[0]&&E.image[0].isDataTexture,de=[];for(let fe=0;fe<6;fe++)!Ge&&!et?de[fe]=v(E.image[fe],!1,!0,s.maxCubemapSize):de[fe]=et?E.image[fe].image:E.image[fe],de[fe]=xt(E,de[fe]);let Tt=de[0],N=g(Tt)||a,ye=r.convert(E.format,E.colorSpace),Te=r.convert(E.type),be=H(E.internalFormat,ye,Te,E.colorSpace),Be=a&&E.isVideoTexture!==!0,yt=Se.__version===void 0||we===!0,dt=C(E,Tt,N);W(i.TEXTURE_CUBE_MAP,E,N);let pt;if(Ge){Be&&yt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,dt,be,Tt.width,Tt.height);for(let fe=0;fe<6;fe++){pt=de[fe].mipmaps;for(let G=0;G<pt.length;G++){let Pe=pt[G];E.format!==Mi?ye!==null?Be?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G,0,0,Pe.width,Pe.height,ye,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G,be,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G,0,0,Pe.width,Pe.height,ye,Te,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G,be,Pe.width,Pe.height,0,ye,Te,Pe.data)}}}else{pt=E.mipmaps,Be&&yt&&(pt.length>0&&dt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,dt,be,de[0].width,de[0].height));for(let fe=0;fe<6;fe++)if(et){Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,de[fe].width,de[fe].height,ye,Te,de[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,be,de[fe].width,de[fe].height,0,ye,Te,de[fe].data);for(let G=0;G<pt.length;G++){let he=pt[G].image[fe].image;Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G+1,0,0,he.width,he.height,ye,Te,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G+1,be,he.width,he.height,0,ye,Te,he.data)}}else{Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ye,Te,de[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,be,ye,Te,de[fe]);for(let G=0;G<pt.length;G++){let Pe=pt[G];Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G+1,0,0,ye,Te,Pe.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,G+1,be,ye,Te,Pe.image[fe])}}}L(E,N)&&M(i.TEXTURE_CUBE_MAP),Se.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ze(A,E,ee,we,Ee,Se){let ke=r.convert(ee.format,ee.colorSpace),Ie=r.convert(ee.type),De=H(ee.internalFormat,ke,Ie,ee.colorSpace);if(!n.get(E).__hasExternalTextures){let et=Math.max(1,E.width>>Se),de=Math.max(1,E.height>>Se);Ee===i.TEXTURE_3D||Ee===i.TEXTURE_2D_ARRAY?t.texImage3D(Ee,Se,De,et,de,E.depth,0,ke,Ie,null):t.texImage2D(Ee,Se,De,et,de,0,ke,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Oe(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,we,Ee,n.get(ee).__webglTexture,0,nt(E)):(Ee===i.TEXTURE_2D||Ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,we,Ee,n.get(ee).__webglTexture,Se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(A,E,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let we=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(ee||Oe(E)){let Ee=E.depthTexture;Ee&&Ee.isDepthTexture&&(Ee.type===ar?we=i.DEPTH_COMPONENT32F:Ee.type===rr&&(we=i.DEPTH_COMPONENT24));let Se=nt(E);Oe(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,we,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,we,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,we,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){let we=nt(E);ee&&Oe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,i.DEPTH24_STENCIL8,E.width,E.height):Oe(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let we=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Ee=0;Ee<we.length;Ee++){let Se=we[Ee],ke=r.convert(Se.format,Se.colorSpace),Ie=r.convert(Se.type),De=H(Se.internalFormat,ke,Ie,Se.colorSpace),Ge=nt(E);ee&&Oe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,De,E.width,E.height):Oe(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge,De,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,De,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ze(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),se(E.depthTexture,0);let we=n.get(E.depthTexture).__webglTexture,Ee=nt(E);if(E.depthTexture.format===Ir)Oe(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,we,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,we,0);else if(E.depthTexture.format===Sa)Oe(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,we,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,we,0);else throw new Error("Unknown depthTexture format")}function it(A){let E=n.get(A),ee=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Ze(E.__webglFramebuffer,A)}else if(ee){E.__webglDepthbuffer=[];for(let we=0;we<6;we++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[we]),E.__webglDepthbuffer[we]=i.createRenderbuffer(),at(E.__webglDepthbuffer[we],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),at(E.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(A,E,ee){let we=n.get(A);E!==void 0&&ze(we.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&it(A)}function j(A){let E=A.texture,ee=n.get(A),we=n.get(E);A.addEventListener("dispose",ce),A.isWebGLMultipleRenderTargets!==!0&&(we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture()),we.__version=E.version,o.memory.textures++);let Ee=A.isWebGLCubeRenderTarget===!0,Se=A.isWebGLMultipleRenderTargets===!0,ke=g(A)||a;if(Ee){ee.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(a&&E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer[Ie]=[];for(let De=0;De<E.mipmaps.length;De++)ee.__webglFramebuffer[Ie][De]=i.createFramebuffer()}else ee.__webglFramebuffer[Ie]=i.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ie=0;Ie<E.mipmaps.length;Ie++)ee.__webglFramebuffer[Ie]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(Se)if(s.drawBuffers){let Ie=A.texture;for(let De=0,Ge=Ie.length;De<Ge;De++){let et=n.get(Ie[De]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Oe(A)===!1){let Ie=Se?E:[E];ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let De=0;De<Ie.length;De++){let Ge=Ie[De];ee.__webglColorRenderbuffer[De]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[De]);let et=r.convert(Ge.format,Ge.colorSpace),de=r.convert(Ge.type),Tt=H(Ge.internalFormat,et,de,Ge.colorSpace,A.isXRRenderTarget===!0),N=nt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,N,Tt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,ee.__webglColorRenderbuffer[De])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),at(ee.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(i.TEXTURE_CUBE_MAP,we.__webglTexture),W(i.TEXTURE_CUBE_MAP,E,ke);for(let Ie=0;Ie<6;Ie++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let De=0;De<E.mipmaps.length;De++)ze(ee.__webglFramebuffer[Ie][De],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,De);else ze(ee.__webglFramebuffer[Ie],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);L(E,ke)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){let Ie=A.texture;for(let De=0,Ge=Ie.length;De<Ge;De++){let et=Ie[De],de=n.get(et);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),W(i.TEXTURE_2D,et,ke),ze(ee.__webglFramebuffer,A,et,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,0),L(et,ke)&&M(i.TEXTURE_2D)}t.unbindTexture()}else{let Ie=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?Ie=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ie,we.__webglTexture),W(Ie,E,ke),a&&E.mipmaps&&E.mipmaps.length>0)for(let De=0;De<E.mipmaps.length;De++)ze(ee.__webglFramebuffer[De],A,E,i.COLOR_ATTACHMENT0,Ie,De);else ze(ee.__webglFramebuffer,A,E,i.COLOR_ATTACHMENT0,Ie,0);L(E,ke)&&M(Ie),t.unbindTexture()}A.depthBuffer&&it(A)}function Gt(A){let E=g(A)||a,ee=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let we=0,Ee=ee.length;we<Ee;we++){let Se=ee[we];if(L(Se,E)){let ke=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ie=n.get(Se).__webglTexture;t.bindTexture(ke,Ie),M(ke),t.unbindTexture()}}}function $e(A){if(a&&A.samples>0&&Oe(A)===!1){let E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],ee=A.width,we=A.height,Ee=i.COLOR_BUFFER_BIT,Se=[],ke=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(A),De=A.isWebGLMultipleRenderTargets===!0;if(De)for(let Ge=0;Ge<E.length;Ge++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ge=0;Ge<E.length;Ge++){Se.push(i.COLOR_ATTACHMENT0+Ge),A.depthBuffer&&Se.push(ke);let et=Ie.__ignoreDepthValues!==void 0?Ie.__ignoreDepthValues:!1;if(et===!1&&(A.depthBuffer&&(Ee|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Ee|=i.STENCIL_BUFFER_BIT)),De&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ge]),et===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ke]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ke])),De){let de=n.get(E[Ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,ee,we,0,0,ee,we,Ee,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),De)for(let Ge=0;Ge<E.length;Ge++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ge]);let et=n.get(E[Ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}}function nt(A){return Math.min(s.maxSamples,A.samples)}function Oe(A){let E=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ht(A){let E=o.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function xt(A,E){let ee=A.colorSpace,we=A.format,Ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Nc||ee!==Ds&&ee!==Di&&(Kt.getTransfer(ee)===an?a===!1?e.has("EXT_sRGB")===!0&&we===Mi?(A.format=Nc,A.minFilter=fi,A.generateMipmaps=!1):E=hl.sRGBToLinear(E):(we!==Mi||Ee!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),E}this.allocateTextureUnit=k,this.resetTextureUnits=Ae,this.setTexture2D=se,this.setTexture2DArray=_e,this.setTexture3D=ue,this.setTextureCube=re,this.rebindTextures=vt,this.setupRenderTarget=j,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=Oe}function Dx(i,e,t){let n=t.isWebGL2;function s(r,o=Di){let a,c=Kt.getTransfer(o);if(r===lr)return i.UNSIGNED_BYTE;if(r===lf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===cf)return i.UNSIGNED_SHORT_5_5_5_1;if(r===md)return i.BYTE;if(r===gd)return i.SHORT;if(r===_h)return i.UNSIGNED_SHORT;if(r===of)return i.INT;if(r===rr)return i.UNSIGNED_INT;if(r===ar)return i.FLOAT;if(r===Zi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===xd)return i.ALPHA;if(r===Mi)return i.RGBA;if(r===_d)return i.LUMINANCE;if(r===vd)return i.LUMINANCE_ALPHA;if(r===Ir)return i.DEPTH_COMPONENT;if(r===Sa)return i.DEPTH_STENCIL;if(r===Nc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===yd)return i.RED;if(r===hf)return i.RED_INTEGER;if(r===Md)return i.RG;if(r===uf)return i.RG_INTEGER;if(r===ff)return i.RGBA_INTEGER;if(r===Zl||r===Jl||r===Kl||r===$l)if(c===an)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Zl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Kl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$l)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Zl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Kl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$l)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Nh||r===Oh||r===Fh||r===zh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Nh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Oh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===zh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===df)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Bh||r===Hh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Bh)return c===an?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Hh)return c===an?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===kh||r===Vh||r===Gh||r===Wh||r===Xh||r===qh||r===Yh||r===Zh||r===Jh||r===Kh||r===$h||r===jh||r===Qh||r===eu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===kh)return c===an?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vh)return c===an?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gh)return c===an?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wh)return c===an?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xh)return c===an?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qh)return c===an?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Yh)return c===an?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zh)return c===an?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jh)return c===an?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kh)return c===an?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$h)return c===an?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jh)return c===an?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qh)return c===an?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===eu)return c===an?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jl||r===tu||r===nu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===jl)return c===an?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===tu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ed||r===iu||r===su||r===ru)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===jl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===iu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===su)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ru)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Lr?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Jc=class extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},kn=class extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nx={type:"move"},so=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),d=this._getHandJoint(l,v);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),x=.02,y=.005;l.inputState.pinching&&p>x+y?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=x-y&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Kc=class extends as{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,p=null,x=null,y=null,v=t.getContextAttributes(),g=null,d=null,L=[],M=[],H=new Xe,C=null,z=new Jn;z.layers.enable(1),z.viewport=new jt;let O=new Jn;O.layers.enable(2),O.viewport=new jt;let ce=[z,O],S=new Jc;S.layers.enable(1),S.layers.enable(2);let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let le=L[W];return le===void 0&&(le=new so,L[W]=le),le.getTargetRaySpace()},this.getControllerGrip=function(W){let le=L[W];return le===void 0&&(le=new so,L[W]=le),le.getGripSpace()},this.getHand=function(W){let le=L[W];return le===void 0&&(le=new so,L[W]=le),le.getHandSpace()};function oe(W){let le=M.indexOf(W.inputSource);if(le===-1)return;let Ce=L[le];Ce!==void 0&&(Ce.update(W.inputSource,W.frame,l||o),Ce.dispatchEvent({type:W.type,data:W.inputSource}))}function Ae(){s.removeEventListener("select",oe),s.removeEventListener("selectstart",oe),s.removeEventListener("selectend",oe),s.removeEventListener("squeeze",oe),s.removeEventListener("squeezestart",oe),s.removeEventListener("squeezeend",oe),s.removeEventListener("end",Ae),s.removeEventListener("inputsourceschange",k);for(let W=0;W<L.length;W++){let le=M[W];le!==null&&(M[W]=null,L[W].disconnect(le))}R=null,F=null,e.setRenderTarget(g),x=null,p=null,u=null,s=null,d=null,I.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(H.width,H.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return p!==null?p:x},this.getBinding=function(){return u},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",oe),s.addEventListener("selectstart",oe),s.addEventListener("selectend",oe),s.addEventListener("squeeze",oe),s.addEventListener("squeezestart",oe),s.addEventListener("squeezeend",oe),s.addEventListener("end",Ae),s.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(H),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let le={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),d=new oi(x.framebufferWidth,x.framebufferHeight,{format:Mi,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let le=null,Ce=null,xe=null;v.depth&&(xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=v.stencil?Sa:Ir,Ce=v.stencil?Lr:rr);let ze={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=new XRWebGLBinding(s,t),p=u.createProjectionLayer(ze),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new oi(p.textureWidth,p.textureHeight,{format:Mi,type:lr,depthTexture:new _l(p.textureWidth,p.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let at=e.properties.get(d);at.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),I.setContext(s),I.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function k(W){for(let le=0;le<W.removed.length;le++){let Ce=W.removed[le],xe=M.indexOf(Ce);xe>=0&&(M[xe]=null,L[xe].disconnect(Ce))}for(let le=0;le<W.added.length;le++){let Ce=W.added[le],xe=M.indexOf(Ce);if(xe===-1){for(let at=0;at<L.length;at++)if(at>=M.length){M.push(Ce),xe=at;break}else if(M[at]===null){M[at]=Ce,xe=at;break}if(xe===-1)break}let ze=L[xe];ze&&ze.connect(Ce)}}let Z=new D,se=new D;function _e(W,le,Ce){Z.setFromMatrixPosition(le.matrixWorld),se.setFromMatrixPosition(Ce.matrixWorld);let xe=Z.distanceTo(se),ze=le.projectionMatrix.elements,at=Ce.projectionMatrix.elements,Ze=ze[14]/(ze[10]-1),it=ze[14]/(ze[10]+1),vt=(ze[9]+1)/ze[5],j=(ze[9]-1)/ze[5],Gt=(ze[8]-1)/ze[0],$e=(at[8]+1)/at[0],nt=Ze*Gt,Oe=Ze*$e,Ht=xe/(-Gt+$e),xt=Ht*-Gt;le.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(xt),W.translateZ(Ht),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let A=Ze+Ht,E=it+Ht,ee=nt-xt,we=Oe+(xe-xt),Ee=vt*it/E*A,Se=j*it/E*A;W.projectionMatrix.makePerspective(ee,we,Ee,Se,A,E),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ue(W,le){le===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(le.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;S.near=O.near=z.near=W.near,S.far=O.far=z.far=W.far,(R!==S.near||F!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,F=S.far);let le=W.parent,Ce=S.cameras;ue(S,le);for(let xe=0;xe<Ce.length;xe++)ue(Ce[xe],le);Ce.length===2?_e(S,z,O):S.projectionMatrix.copy(z.projectionMatrix),re(W,S,le)};function re(W,le,Ce){Ce===null?W.matrix.copy(le.matrixWorld):(W.matrix.copy(Ce.matrixWorld),W.matrix.invert(),W.matrix.multiply(le.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(le.projectionMatrix),W.projectionMatrixInverse.copy(le.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ao*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&x===null))return c},this.setFoveation=function(W){c=W,p!==null&&(p.fixedFoveation=W),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=W)};let Me=null;function Re(W,le){if(h=le.getViewerPose(l||o),y=le,h!==null){let Ce=h.views;x!==null&&(e.setRenderTargetFramebuffer(d,x.framebuffer),e.setRenderTarget(d));let xe=!1;Ce.length!==S.cameras.length&&(S.cameras.length=0,xe=!0);for(let ze=0;ze<Ce.length;ze++){let at=Ce[ze],Ze=null;if(x!==null)Ze=x.getViewport(at);else{let vt=u.getViewSubImage(p,at);Ze=vt.viewport,ze===0&&(e.setRenderTargetTextures(d,vt.colorTexture,p.ignoreDepthValues?void 0:vt.depthStencilTexture),e.setRenderTarget(d))}let it=ce[ze];it===void 0&&(it=new Jn,it.layers.enable(ze),it.viewport=new jt,ce[ze]=it),it.matrix.fromArray(at.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(at.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),ze===0&&(S.matrix.copy(it.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),xe===!0&&S.cameras.push(it)}}for(let Ce=0;Ce<L.length;Ce++){let xe=M[Ce],ze=L[Ce];xe!==null&&ze!==void 0&&ze.update(xe,le,l||o)}Me&&Me(W,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),y=null}let I=new Mf;I.setAnimationLoop(Re),this.setAnimationLoop=function(W){Me=W},this.dispose=function(){}}};function Ox(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,yf(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,L,M,H){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),u(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d)):d.isMeshStandardMaterial?(r(g,d),p(g,d),d.isMeshPhysicalMaterial&&x(g,d,H)):d.isMeshMatcapMaterial?(r(g,d),y(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),v(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?c(g,d,L,M):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===$n&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===$n&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let L=e.get(d).envMap;if(L&&(g.envMap.value=L,g.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;let M=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*M,t(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,L,M){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*L,g.scale.value=M*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function p(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function x(g,d,L){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===$n&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=L.texture,g.transmissionSamplerSize.value.set(L.width,L.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,d){d.matcap&&(g.matcap.value=d.matcap)}function v(g,d){let L=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(L.matrixWorld),g.nearDistance.value=L.shadow.camera.near,g.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fx(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(L,M){let H=M.program;n.uniformBlockBinding(L,H)}function l(L,M){let H=s[L.id];H===void 0&&(y(L),H=h(L),s[L.id]=H,L.addEventListener("dispose",g));let C=M.program;n.updateUBOMapping(L,C);let z=e.render.frame;r[L.id]!==z&&(p(L),r[L.id]=z)}function h(L){let M=u();L.__bindingPointIndex=M;let H=i.createBuffer(),C=L.__size,z=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,H),i.bufferData(i.UNIFORM_BUFFER,C,z),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,H),H}function u(){for(let L=0;L<a;L++)if(o.indexOf(L)===-1)return o.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(L){let M=s[L.id],H=L.uniforms,C=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let z=0,O=H.length;z<O;z++){let ce=Array.isArray(H[z])?H[z]:[H[z]];for(let S=0,R=ce.length;S<R;S++){let F=ce[S];if(x(F,z,S,C)===!0){let oe=F.__offset,Ae=Array.isArray(F.value)?F.value:[F.value],k=0;for(let Z=0;Z<Ae.length;Z++){let se=Ae[Z],_e=v(se);typeof se=="number"||typeof se=="boolean"?(F.__data[0]=se,i.bufferSubData(i.UNIFORM_BUFFER,oe+k,F.__data)):se.isMatrix3?(F.__data[0]=se.elements[0],F.__data[1]=se.elements[1],F.__data[2]=se.elements[2],F.__data[3]=0,F.__data[4]=se.elements[3],F.__data[5]=se.elements[4],F.__data[6]=se.elements[5],F.__data[7]=0,F.__data[8]=se.elements[6],F.__data[9]=se.elements[7],F.__data[10]=se.elements[8],F.__data[11]=0):(se.toArray(F.__data,k),k+=_e.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,oe,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(L,M,H,C){let z=L.value,O=M+"_"+H;if(C[O]===void 0)return typeof z=="number"||typeof z=="boolean"?C[O]=z:C[O]=z.clone(),!0;{let ce=C[O];if(typeof z=="number"||typeof z=="boolean"){if(ce!==z)return C[O]=z,!0}else if(ce.equals(z)===!1)return ce.copy(z),!0}return!1}function y(L){let M=L.uniforms,H=0,C=16;for(let O=0,ce=M.length;O<ce;O++){let S=Array.isArray(M[O])?M[O]:[M[O]];for(let R=0,F=S.length;R<F;R++){let oe=S[R],Ae=Array.isArray(oe.value)?oe.value:[oe.value];for(let k=0,Z=Ae.length;k<Z;k++){let se=Ae[k],_e=v(se),ue=H%C;ue!==0&&C-ue<_e.boundary&&(H+=C-ue),oe.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=H,H+=_e.storage}}}let z=H%C;return z>0&&(H+=C-z),L.__size=H,L.__cache={},this}function v(L){let M={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(M.boundary=4,M.storage=4):L.isVector2?(M.boundary=8,M.storage=8):L.isVector3||L.isColor?(M.boundary=16,M.storage=12):L.isVector4?(M.boundary=16,M.storage=16):L.isMatrix3?(M.boundary=48,M.storage=48):L.isMatrix4?(M.boundary=64,M.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),M}function g(L){let M=L.target;M.removeEventListener("dispose",g);let H=o.indexOf(M.__bindingPointIndex);o.splice(H,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(let L in s)i.deleteBuffer(s[L]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var co=class{constructor(e={}){let{canvas:t=Yd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;let x=new Uint32Array(4),y=new Int32Array(4),v=null,g=null,d=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this._useLegacyLights=!1,this.toneMapping=or,this.toneMappingExposure=1;let M=this,H=!1,C=0,z=0,O=null,ce=-1,S=null,R=new jt,F=new jt,oe=null,Ae=new Ue(0),k=0,Z=t.width,se=t.height,_e=1,ue=null,re=null,Me=new jt(0,0,Z,se),Re=new jt(0,0,Z,se),I=!1,W=new lo,le=!1,Ce=!1,xe=null,ze=new Ot,at=new Xe,Ze=new D,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function vt(){return O===null?_e:1}let j=n;function Gt(w,Y){for(let Q=0;Q<w.length;Q++){let ne=w[Q],te=t.getContext(ne,Y);if(te!==null)return te}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),j===null){let Y=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&Y.shift(),j=Gt(Y,w),j===null)throw Gt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let $e,nt,Oe,Ht,xt,A,E,ee,we,Ee,Se,ke,Ie,De,Ge,et,de,Tt,N,ye,Te,be,Be,yt;function dt(){$e=new n0(j),nt=new Kg(j,$e,e),$e.init(nt),be=new Dx(j,$e,nt),Oe=new Ix(j,$e,nt),Ht=new r0(j),xt=new yx,A=new Ux(j,$e,Oe,xt,nt,be,Ht),E=new jg(M),ee=new t0(M),we=new dp(j,nt),Be=new Zg(j,$e,we,nt),Ee=new i0(j,we,Ht,Be),Se=new c0(j,Ee,we,Ht),N=new l0(j,nt,A),et=new $g(xt),ke=new vx(M,E,ee,$e,nt,Be,et),Ie=new Ox(M,xt),De=new Ex,Ge=new Rx($e,nt),Tt=new Yg(M,E,ee,Oe,Se,p,c),de=new Lx(M,Se,nt),yt=new Fx(j,Ht,nt,Oe),ye=new Jg(j,$e,Ht,nt),Te=new s0(j,$e,Ht,nt),Ht.programs=ke.programs,M.capabilities=nt,M.extensions=$e,M.properties=xt,M.renderLists=De,M.shadowMap=de,M.state=Oe,M.info=Ht}dt();let pt=new Kc(M,j);this.xr=pt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let w=$e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=$e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(w){w!==void 0&&(_e=w,this.setSize(Z,se,!1))},this.getSize=function(w){return w.set(Z,se)},this.setSize=function(w,Y,Q=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,se=Y,t.width=Math.floor(w*_e),t.height=Math.floor(Y*_e),Q===!0&&(t.style.width=w+"px",t.style.height=Y+"px"),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(Z*_e,se*_e).floor()},this.setDrawingBufferSize=function(w,Y,Q){Z=w,se=Y,_e=Q,t.width=Math.floor(w*Q),t.height=Math.floor(Y*Q),this.setViewport(0,0,w,Y)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(Me)},this.setViewport=function(w,Y,Q,ne){w.isVector4?Me.set(w.x,w.y,w.z,w.w):Me.set(w,Y,Q,ne),Oe.viewport(R.copy(Me).multiplyScalar(_e).floor())},this.getScissor=function(w){return w.copy(Re)},this.setScissor=function(w,Y,Q,ne){w.isVector4?Re.set(w.x,w.y,w.z,w.w):Re.set(w,Y,Q,ne),Oe.scissor(F.copy(Re).multiplyScalar(_e).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(w){Oe.setScissorTest(I=w)},this.setOpaqueSort=function(w){ue=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(w=!0,Y=!0,Q=!0){let ne=0;if(w){let te=!1;if(O!==null){let Fe=O.texture.format;te=Fe===ff||Fe===uf||Fe===hf}if(te){let Fe=O.texture.type,je=Fe===lr||Fe===rr||Fe===_h||Fe===Lr||Fe===lf||Fe===cf,ut=Tt.getClearColor(),st=Tt.getClearAlpha(),Ct=ut.r,Et=ut.g,St=ut.b;je?(x[0]=Ct,x[1]=Et,x[2]=St,x[3]=st,j.clearBufferuiv(j.COLOR,0,x)):(y[0]=Ct,y[1]=Et,y[2]=St,y[3]=st,j.clearBufferiv(j.COLOR,0,y))}else ne|=j.COLOR_BUFFER_BIT}Y&&(ne|=j.DEPTH_BUFFER_BIT),Q&&(ne|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),De.dispose(),Ge.dispose(),xt.dispose(),E.dispose(),ee.dispose(),Se.dispose(),Be.dispose(),yt.dispose(),ke.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",ln),pt.removeEventListener("sessionend",J),xe&&(xe.dispose(),xe=null),pe.stop()};function fe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;let w=Ht.autoReset,Y=de.enabled,Q=de.autoUpdate,ne=de.needsUpdate,te=de.type;dt(),Ht.autoReset=w,de.enabled=Y,de.autoUpdate=Q,de.needsUpdate=ne,de.type=te}function Pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function he(w){let Y=w.target;Y.removeEventListener("dispose",he),We(Y)}function We(w){qe(w),xt.remove(w)}function qe(w){let Y=xt.get(w).programs;Y!==void 0&&(Y.forEach(function(Q){ke.releaseProgram(Q)}),w.isShaderMaterial&&ke.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,Q,ne,te,Fe){Y===null&&(Y=it);let je=te.isMesh&&te.matrixWorld.determinant()<0,ut=mn(w,Y,Q,ne,te);Oe.setMaterial(ne,je);let st=Q.index,Ct=1;if(ne.wireframe===!0){if(st=Ee.getWireframeAttribute(Q),st===void 0)return;Ct=2}let Et=Q.drawRange,St=Q.attributes.position,qt=Et.start*Ct,Wt=(Et.start+Et.count)*Ct;Fe!==null&&(qt=Math.max(qt,Fe.start*Ct),Wt=Math.min(Wt,(Fe.start+Fe.count)*Ct)),st!==null?(qt=Math.max(qt,0),Wt=Math.min(Wt,st.count)):St!=null&&(qt=Math.max(qt,0),Wt=Math.min(Wt,St.count));let gn=Wt-qt;if(gn<0||gn===1/0)return;Be.setup(te,ne,ut,Q,st);let Qn,Jt=ye;if(st!==null&&(Qn=we.get(st),Jt=Te,Jt.setIndex(Qn)),te.isMesh)ne.wireframe===!0?(Oe.setLineWidth(ne.wireframeLinewidth*vt()),Jt.setMode(j.LINES)):Jt.setMode(j.TRIANGLES);else if(te.isLine){let mt=ne.linewidth;mt===void 0&&(mt=1),Oe.setLineWidth(mt*vt()),te.isLineSegments?Jt.setMode(j.LINES):te.isLineLoop?Jt.setMode(j.LINE_LOOP):Jt.setMode(j.LINE_STRIP)}else te.isPoints?Jt.setMode(j.POINTS):te.isSprite&&Jt.setMode(j.TRIANGLES);if(te.isBatchedMesh)Jt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else if(te.isInstancedMesh)Jt.renderInstances(qt,gn,te.count);else if(Q.isInstancedBufferGeometry){let mt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Fi=Math.min(Q.instanceCount,mt);Jt.renderInstances(qt,gn,Fi)}else Jt.render(qt,gn)};function Mt(w,Y,Q){w.transparent===!0&&w.side===Kn&&w.forceSinglePass===!1?(w.side=$n,w.needsUpdate=!0,At(w,Y,Q),w.side=cr,w.needsUpdate=!0,At(w,Y,Q),w.side=Kn):At(w,Y,Q)}this.compile=function(w,Y,Q=null){Q===null&&(Q=w),g=Ge.get(Q),g.init(),L.push(g),Q.traverseVisible(function(te){te.isLight&&te.layers.test(Y.layers)&&(g.pushLight(te),te.castShadow&&g.pushShadow(te))}),w!==Q&&w.traverseVisible(function(te){te.isLight&&te.layers.test(Y.layers)&&(g.pushLight(te),te.castShadow&&g.pushShadow(te))}),g.setupLights(M._useLegacyLights);let ne=new Set;return w.traverse(function(te){let Fe=te.material;if(Fe)if(Array.isArray(Fe))for(let je=0;je<Fe.length;je++){let ut=Fe[je];Mt(ut,Q,te),ne.add(ut)}else Mt(Fe,Q,te),ne.add(Fe)}),L.pop(),g=null,ne},this.compileAsync=function(w,Y,Q=null){let ne=this.compile(w,Y,Q);return new Promise(te=>{function Fe(){if(ne.forEach(function(je){xt.get(je).currentProgram.isReady()&&ne.delete(je)}),ne.size===0){te(w);return}setTimeout(Fe,10)}$e.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let ht=null;function kt(w){ht&&ht(w)}function ln(){pe.stop()}function J(){pe.start()}let pe=new Mf;pe.setAnimationLoop(kt),typeof self<"u"&&pe.setContext(self),this.setAnimationLoop=function(w){ht=w,pt.setAnimationLoop(w),w===null?pe.stop():pe.start()},pt.addEventListener("sessionstart",ln),pt.addEventListener("sessionend",J),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(Y),Y=pt.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,Y,O),g=Ge.get(w,L.length),g.init(),L.push(g),ze.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),W.setFromProjectionMatrix(ze),Ce=this.localClippingEnabled,le=et.init(this.clippingPlanes,Ce),v=De.get(w,d.length),v.init(),d.push(v),ge(w,Y,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(ue,re),this.info.render.frame++,le===!0&&et.beginShadows();let Q=g.state.shadowsArray;if(de.render(Q,w,Y),le===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset(),Tt.render(v,w),g.setupLights(M._useLegacyLights),Y.isArrayCamera){let ne=Y.cameras;for(let te=0,Fe=ne.length;te<Fe;te++){let je=ne[te];ot(v,w,je,je.viewport)}}else ot(v,w,Y);O!==null&&(A.updateMultisampleRenderTarget(O),A.updateRenderTargetMipmap(O)),w.isScene===!0&&w.onAfterRender(M,w,Y),Be.resetDefaultState(),ce=-1,S=null,L.pop(),L.length>0?g=L[L.length-1]:g=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function ge(w,Y,Q,ne){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){ne&&Ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ze);let je=Se.update(w),ut=w.material;ut.visible&&v.push(w,je,ut,Q,Ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||W.intersectsObject(w))){let je=Se.update(w),ut=w.material;if(ne&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ze.copy(w.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),Ze.copy(je.boundingSphere.center)),Ze.applyMatrix4(w.matrixWorld).applyMatrix4(ze)),Array.isArray(ut)){let st=je.groups;for(let Ct=0,Et=st.length;Ct<Et;Ct++){let St=st[Ct],qt=ut[St.materialIndex];qt&&qt.visible&&v.push(w,je,qt,Q,Ze.z,St)}}else ut.visible&&v.push(w,je,ut,Q,Ze.z,null)}}let Fe=w.children;for(let je=0,ut=Fe.length;je<ut;je++)ge(Fe[je],Y,Q,ne)}function ot(w,Y,Q,ne){let te=w.opaque,Fe=w.transmissive,je=w.transparent;g.setupLightsView(Q),le===!0&&et.setGlobalState(M.clippingPlanes,Q),Fe.length>0&&Je(te,Fe,Y,Q),ne&&Oe.viewport(R.copy(ne)),te.length>0&&Ye(te,Y,Q),Fe.length>0&&Ye(Fe,Y,Q),je.length>0&&Ye(je,Y,Q),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function Je(w,Y,Q,ne){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;let Fe=nt.isWebGL2;xe===null&&(xe=new oi(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")?Zi:lr,minFilter:ro,samples:Fe?4:0})),M.getDrawingBufferSize(at),Fe?xe.setSize(at.x,at.y):xe.setSize(ll(at.x),ll(at.y));let je=M.getRenderTarget();M.setRenderTarget(xe),M.getClearColor(Ae),k=M.getClearAlpha(),k<1&&M.setClearColor(16777215,.5),M.clear();let ut=M.toneMapping;M.toneMapping=or,Ye(w,Q,ne),A.updateMultisampleRenderTarget(xe),A.updateRenderTargetMipmap(xe);let st=!1;for(let Ct=0,Et=Y.length;Ct<Et;Ct++){let St=Y[Ct],qt=St.object,Wt=St.geometry,gn=St.material,Qn=St.group;if(gn.side===Kn&&qt.layers.test(ne.layers)){let Jt=gn.side;gn.side=$n,gn.needsUpdate=!0,Lt(qt,Q,ne,Wt,gn,Qn),gn.side=Jt,gn.needsUpdate=!0,st=!0}}st===!0&&(A.updateMultisampleRenderTarget(xe),A.updateRenderTargetMipmap(xe)),M.setRenderTarget(je),M.setClearColor(Ae,k),M.toneMapping=ut}function Ye(w,Y,Q){let ne=Y.isScene===!0?Y.overrideMaterial:null;for(let te=0,Fe=w.length;te<Fe;te++){let je=w[te],ut=je.object,st=je.geometry,Ct=ne===null?je.material:ne,Et=je.group;ut.layers.test(Q.layers)&&Lt(ut,Y,Q,st,Ct,Et)}}function Lt(w,Y,Q,ne,te,Fe){w.onBeforeRender(M,Y,Q,ne,te,Fe),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),te.onBeforeRender(M,Y,Q,ne,w,Fe),te.transparent===!0&&te.side===Kn&&te.forceSinglePass===!1?(te.side=$n,te.needsUpdate=!0,M.renderBufferDirect(Q,Y,ne,te,w,Fe),te.side=cr,te.needsUpdate=!0,M.renderBufferDirect(Q,Y,ne,te,w,Fe),te.side=Kn):M.renderBufferDirect(Q,Y,ne,te,w,Fe),w.onAfterRender(M,Y,Q,ne,te,Fe)}function At(w,Y,Q){Y.isScene!==!0&&(Y=it);let ne=xt.get(w),te=g.state.lights,Fe=g.state.shadowsArray,je=te.state.version,ut=ke.getParameters(w,te.state,Fe,Y,Q),st=ke.getProgramCacheKey(ut),Ct=ne.programs;ne.environment=w.isMeshStandardMaterial?Y.environment:null,ne.fog=Y.fog,ne.envMap=(w.isMeshStandardMaterial?ee:E).get(w.envMap||ne.environment),Ct===void 0&&(w.addEventListener("dispose",he),Ct=new Map,ne.programs=Ct);let Et=Ct.get(st);if(Et!==void 0){if(ne.currentProgram===Et&&ne.lightsStateVersion===je)return Vt(w,ut),Et}else ut.uniforms=ke.getUniforms(w),w.onBuild(Q,ut,M),w.onBeforeCompile(ut,M),Et=ke.acquireProgram(ut,st),Ct.set(st,Et),ne.uniforms=ut.uniforms;let St=ne.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(St.clippingPlanes=et.uniform),Vt(w,ut),ne.needsLights=In(w),ne.lightsStateVersion=je,ne.needsLights&&(St.ambientLightColor.value=te.state.ambient,St.lightProbe.value=te.state.probe,St.directionalLights.value=te.state.directional,St.directionalLightShadows.value=te.state.directionalShadow,St.spotLights.value=te.state.spot,St.spotLightShadows.value=te.state.spotShadow,St.rectAreaLights.value=te.state.rectArea,St.ltc_1.value=te.state.rectAreaLTC1,St.ltc_2.value=te.state.rectAreaLTC2,St.pointLights.value=te.state.point,St.pointLightShadows.value=te.state.pointShadow,St.hemisphereLights.value=te.state.hemi,St.directionalShadowMap.value=te.state.directionalShadowMap,St.directionalShadowMatrix.value=te.state.directionalShadowMatrix,St.spotShadowMap.value=te.state.spotShadowMap,St.spotLightMatrix.value=te.state.spotLightMatrix,St.spotLightMap.value=te.state.spotLightMap,St.pointShadowMap.value=te.state.pointShadowMap,St.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.currentProgram=Et,ne.uniformsList=null,Et}function $t(w){if(w.uniformsList===null){let Y=w.currentProgram.getUniforms();w.uniformsList=ya.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function Vt(w,Y){let Q=xt.get(w);Q.outputColorSpace=Y.outputColorSpace,Q.batching=Y.batching,Q.instancing=Y.instancing,Q.instancingColor=Y.instancingColor,Q.skinning=Y.skinning,Q.morphTargets=Y.morphTargets,Q.morphNormals=Y.morphNormals,Q.morphColors=Y.morphColors,Q.morphTargetsCount=Y.morphTargetsCount,Q.numClippingPlanes=Y.numClippingPlanes,Q.numIntersection=Y.numClipIntersection,Q.vertexAlphas=Y.vertexAlphas,Q.vertexTangents=Y.vertexTangents,Q.toneMapping=Y.toneMapping}function mn(w,Y,Q,ne,te){Y.isScene!==!0&&(Y=it),A.resetTextureUnits();let Fe=Y.fog,je=ne.isMeshStandardMaterial?Y.environment:null,ut=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ds,st=(ne.isMeshStandardMaterial?ee:E).get(ne.envMap||je),Ct=ne.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Et=!!Q.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),St=!!Q.morphAttributes.position,qt=!!Q.morphAttributes.normal,Wt=!!Q.morphAttributes.color,gn=or;ne.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(gn=M.toneMapping);let Qn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Jt=Qn!==void 0?Qn.length:0,mt=xt.get(ne),Fi=g.state.lights;if(le===!0&&(Ce===!0||w!==S)){let Un=w===S&&ne.id===ce;et.setState(ne,w,Un)}let Ve=!1;ne.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==Fi.state.version||mt.outputColorSpace!==ut||te.isBatchedMesh&&mt.batching===!1||!te.isBatchedMesh&&mt.batching===!0||te.isInstancedMesh&&mt.instancing===!1||!te.isInstancedMesh&&mt.instancing===!0||te.isSkinnedMesh&&mt.skinning===!1||!te.isSkinnedMesh&&mt.skinning===!0||te.isInstancedMesh&&mt.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&mt.instancingColor===!1&&te.instanceColor!==null||mt.envMap!==st||ne.fog===!0&&mt.fog!==Fe||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==et.numPlanes||mt.numIntersection!==et.numIntersection)||mt.vertexAlphas!==Ct||mt.vertexTangents!==Et||mt.morphTargets!==St||mt.morphNormals!==qt||mt.morphColors!==Wt||mt.toneMapping!==gn||nt.isWebGL2===!0&&mt.morphTargetsCount!==Jt)&&(Ve=!0):(Ve=!0,mt.__version=ne.version);let ei=mt.currentProgram;Ve===!0&&(ei=At(ne,Y,te));let cs=!1,wn=!1,zi=!1,fn=ei.getUniforms(),Ai=mt.uniforms;if(Oe.useProgram(ei.program)&&(cs=!0,wn=!0,zi=!0),ne.id!==ce&&(ce=ne.id,wn=!0),cs||S!==w){fn.setValue(j,"projectionMatrix",w.projectionMatrix),fn.setValue(j,"viewMatrix",w.matrixWorldInverse);let Un=fn.map.cameraPosition;Un!==void 0&&Un.setValue(j,Ze.setFromMatrixPosition(w.matrixWorld)),nt.logarithmicDepthBuffer&&fn.setValue(j,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&fn.setValue(j,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,wn=!0,zi=!0)}if(te.isSkinnedMesh){fn.setOptional(j,te,"bindMatrix"),fn.setOptional(j,te,"bindMatrixInverse");let Un=te.skeleton;Un&&(nt.floatVertexTextures?(Un.boneTexture===null&&Un.computeBoneTexture(),fn.setValue(j,"boneTexture",Un.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}te.isBatchedMesh&&(fn.setOptional(j,te,"batchingTexture"),fn.setValue(j,"batchingTexture",te._matricesTexture,A));let zn=Q.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0&&nt.isWebGL2===!0)&&N.update(te,Q,ei),(wn||mt.receiveShadow!==te.receiveShadow)&&(mt.receiveShadow=te.receiveShadow,fn.setValue(j,"receiveShadow",te.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Ai.envMap.value=st,Ai.flipEnvMap.value=st.isCubeTexture&&st.isRenderTargetTexture===!1?-1:1),wn&&(fn.setValue(j,"toneMappingExposure",M.toneMappingExposure),mt.needsLights&&bn(Ai,zi),Fe&&ne.fog===!0&&Ie.refreshFogUniforms(Ai,Fe),Ie.refreshMaterialUniforms(Ai,ne,_e,se,xe),ya.upload(j,$t(mt),Ai,A)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(ya.upload(j,$t(mt),Ai,A),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&fn.setValue(j,"center",te.center),fn.setValue(j,"modelViewMatrix",te.modelViewMatrix),fn.setValue(j,"normalMatrix",te.normalMatrix),fn.setValue(j,"modelMatrix",te.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){let Un=ne.uniformsGroups;for(let tt=0,Hr=Un.length;tt<Hr;tt++)if(nt.isWebGL2){let hs=Un[tt];yt.update(hs,ei),yt.bind(hs,ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ei}function bn(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function In(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(w,Y,Q){xt.get(w.texture).__webglTexture=Y,xt.get(w.depthTexture).__webglTexture=Q;let ne=xt.get(w);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=Q===void 0,ne.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,Y){let Q=xt.get(w);Q.__webglFramebuffer=Y,Q.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(w,Y=0,Q=0){O=w,C=Y,z=Q;let ne=!0,te=null,Fe=!1,je=!1;if(w){let st=xt.get(w);st.__useDefaultFramebuffer!==void 0?(Oe.bindFramebuffer(j.FRAMEBUFFER,null),ne=!1):st.__webglFramebuffer===void 0?A.setupRenderTarget(w):st.__hasExternalTextures&&A.rebindTextures(w,xt.get(w.texture).__webglTexture,xt.get(w.depthTexture).__webglTexture);let Ct=w.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(je=!0);let Et=xt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Et[Y])?te=Et[Y][Q]:te=Et[Y],Fe=!0):nt.isWebGL2&&w.samples>0&&A.useMultisampledRTT(w)===!1?te=xt.get(w).__webglMultisampledFramebuffer:Array.isArray(Et)?te=Et[Q]:te=Et,R.copy(w.viewport),F.copy(w.scissor),oe=w.scissorTest}else R.copy(Me).multiplyScalar(_e).floor(),F.copy(Re).multiplyScalar(_e).floor(),oe=I;if(Oe.bindFramebuffer(j.FRAMEBUFFER,te)&&nt.drawBuffers&&ne&&Oe.drawBuffers(w,te),Oe.viewport(R),Oe.scissor(F),Oe.setScissorTest(oe),Fe){let st=xt.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Y,st.__webglTexture,Q)}else if(je){let st=xt.get(w.texture),Ct=Y||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,st.__webglTexture,Q||0,Ct)}ce=-1},this.readRenderTargetPixels=function(w,Y,Q,ne,te,Fe,je){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=xt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&je!==void 0&&(ut=ut[je]),ut){Oe.bindFramebuffer(j.FRAMEBUFFER,ut);try{let st=w.texture,Ct=st.format,Et=st.type;if(Ct!==Mi&&be.convert(Ct)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let St=Et===Zi&&($e.has("EXT_color_buffer_half_float")||nt.isWebGL2&&$e.has("EXT_color_buffer_float"));if(Et!==lr&&be.convert(Et)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Et===ar&&(nt.isWebGL2||$e.has("OES_texture_float")||$e.has("WEBGL_color_buffer_float")))&&!St){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-ne&&Q>=0&&Q<=w.height-te&&j.readPixels(Y,Q,ne,te,be.convert(Ct),be.convert(Et),Fe)}finally{let st=O!==null?xt.get(O).__webglFramebuffer:null;Oe.bindFramebuffer(j.FRAMEBUFFER,st)}}},this.copyFramebufferToTexture=function(w,Y,Q=0){let ne=Math.pow(2,-Q),te=Math.floor(Y.image.width*ne),Fe=Math.floor(Y.image.height*ne);A.setTexture2D(Y,0),j.copyTexSubImage2D(j.TEXTURE_2D,Q,0,0,w.x,w.y,te,Fe),Oe.unbindTexture()},this.copyTextureToTexture=function(w,Y,Q,ne=0){let te=Y.image.width,Fe=Y.image.height,je=be.convert(Q.format),ut=be.convert(Q.type);A.setTexture2D(Q,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Q.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,Q.unpackAlignment),Y.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,ne,w.x,w.y,te,Fe,je,ut,Y.image.data):Y.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,ne,w.x,w.y,Y.mipmaps[0].width,Y.mipmaps[0].height,je,Y.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,ne,w.x,w.y,je,ut,Y.image),ne===0&&Q.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),Oe.unbindTexture()},this.copyTextureToTexture3D=function(w,Y,Q,ne,te=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Fe=w.max.x-w.min.x+1,je=w.max.y-w.min.y+1,ut=w.max.z-w.min.z+1,st=be.convert(ne.format),Ct=be.convert(ne.type),Et;if(ne.isData3DTexture)A.setTexture3D(ne,0),Et=j.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)A.setTexture2DArray(ne,0),Et=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,ne.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,ne.unpackAlignment);let St=j.getParameter(j.UNPACK_ROW_LENGTH),qt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Wt=j.getParameter(j.UNPACK_SKIP_PIXELS),gn=j.getParameter(j.UNPACK_SKIP_ROWS),Qn=j.getParameter(j.UNPACK_SKIP_IMAGES),Jt=Q.isCompressedTexture?Q.mipmaps[te]:Q.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,Jt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Jt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,w.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,w.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,w.min.z),Q.isDataTexture||Q.isData3DTexture?j.texSubImage3D(Et,te,Y.x,Y.y,Y.z,Fe,je,ut,st,Ct,Jt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Et,te,Y.x,Y.y,Y.z,Fe,je,ut,st,Jt.data)):j.texSubImage3D(Et,te,Y.x,Y.y,Y.z,Fe,je,ut,st,Ct,Jt),j.pixelStorei(j.UNPACK_ROW_LENGTH,St),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,qt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Wt),j.pixelStorei(j.UNPACK_SKIP_ROWS,gn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Qn),te===0&&ne.generateMipmaps&&j.generateMipmap(Et),Oe.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Oe.unbindTexture()},this.resetState=function(){C=0,z=0,O=null,Oe.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Is}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===vh?"display-p3":"srgb",t.unpackColorSpace=Kt.workingColorSpace===Ll?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Zt?Ur:pf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ur?Zt:Ds}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},$c=class extends co{};$c.prototype.isWebGL1Renderer=!0;var vl=class extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},jc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Us()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Us()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Us()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ri=new D,yl=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ri.fromBufferAttribute(this,t),ri.applyMatrix4(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ri.fromBufferAttribute(this,t),ri.applyNormalMatrix(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ri.fromBufferAttribute(this,t),ri.transformDirection(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ss(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ss(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ss(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ss(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new di(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},pi=class extends hr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ua,Ja=new D,fa=new D,da=new D,pa=new Xe,Ka=new Xe,Af=new Ot,Jo=new D,$a=new D,Ko=new D,Ju=new Xe,Ec=new Xe,Ku=new Xe,wi=class extends jn{constructor(e=new pi){if(super(),this.isSprite=!0,this.type="Sprite",ua===void 0){ua=new bi;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jc(t,5);ua.setIndex([0,1,2,0,2,3]),ua.setAttribute("position",new yl(n,3,0,!1)),ua.setAttribute("uv",new yl(n,2,3,!1))}this.geometry=ua,this.material=e,this.center=new Xe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fa.setFromMatrixScale(this.matrixWorld),Af.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),da.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fa.multiplyScalar(-da.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;$o(Jo.set(-.5,-.5,0),da,o,fa,s,r),$o($a.set(.5,-.5,0),da,o,fa,s,r),$o(Ko.set(.5,.5,0),da,o,fa,s,r),Ju.set(0,0),Ec.set(1,0),Ku.set(1,1);let a=e.ray.intersectTriangle(Jo,$a,Ko,!1,Ja);if(a===null&&($o($a.set(-.5,.5,0),da,o,fa,s,r),Ec.set(0,1),a=e.ray.intersectTriangle(Jo,Ko,$a,!1,Ja),a===null))return;let c=e.ray.origin.distanceTo(Ja);c<e.near||c>e.far||t.push({distance:c,point:Ja.clone(),uv:Pr.getInterpolation(Ja,Jo,$a,Ko,Ju,Ec,Ku,new Xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function $o(i,e,t,n,s,r){pa.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ka.x=r*pa.x-s*pa.y,Ka.y=s*pa.x+r*pa.y):Ka.copy(pa),i.copy(e),i.x+=Ka.x,i.y+=Ka.y,i.applyMatrix4(Af)}var Ml=class extends Si{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Cn,h=Cn,u,p){super(null,o,a,c,l,h,s,r,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nr=class extends di{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ma=new Ot,$u=new Ot,jo=[],ju=new Ns,zx=new Ot,ja=new _t,Qa=new Dr,on=class extends _t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ns),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ma),ju.copy(e.boundingBox).applyMatrix4(ma),this.boundingBox.union(ju)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ma),Qa.copy(e.boundingSphere).applyMatrix4(ma),this.boundingSphere.union(Qa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ja.geometry=this.geometry,ja.material=this.material,ja.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qa.copy(this.boundingSphere),Qa.applyMatrix4(n),e.ray.intersectsSphere(Qa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ma),$u.multiplyMatrices(n,ma),ja.matrixWorld=$u,ja.raycast(e,jo);for(let o=0,a=jo.length;o<a;o++){let c=jo[o];c.instanceId=r,c.object=this,t.push(c)}jo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Nr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ci=class extends Si{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qc=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,x=(o-h)/p;return(s+x)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Xe:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new D,s=[],r=[],o=[],a=new D,c=new Ot;for(let x=0;x<=e;x++){let y=x/e;s[x]=this.getTangentAt(y,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let x=1;x<=e;x++){if(r[x]=r[x-1].clone(),o[x]=o[x-1].clone(),a.crossVectors(s[x-1],s[x]),a.length()>Number.EPSILON){a.normalize();let y=Math.acos(Fn(s[x-1].dot(s[x]),-1,1));r[x].applyMatrix4(c.makeRotationAxis(a,y))}o[x].crossVectors(s[x],r[x])}if(t===!0){let x=Math.acos(Fn(r[0].dot(r[e]),-1,1));x/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(x=-x);for(let y=1;y<=e;y++)r[y].applyMatrix4(c.makeRotationAxis(s[y],x*y)),o[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Eh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let p=(o-r)/l-(a-r)/(l+h)+(a-o)/h,x=(a-o)/h-(c-o)/(h+u)+(c-a)/u;p*=h,x*=h,s(o,a,p,x)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Qo=new D,Sc=new Eh,bc=new Eh,wc=new Eh,El=class extends Qc{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Qo.subVectors(s[0],s[1]).add(s[0]),l=Qo);let u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Qo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qo),this.curveType==="centripetal"||this.curveType==="chordal"){let x=this.curveType==="chordal"?.5:.25,y=Math.pow(l.distanceToSquared(u),x),v=Math.pow(u.distanceToSquared(p),x),g=Math.pow(p.distanceToSquared(h),x);v<1e-4&&(v=1),y<1e-4&&(y=v),g<1e-4&&(g=v),Sc.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,y,v,g),bc.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,y,v,g),wc.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,y,v,g)}else this.curveType==="catmullrom"&&(Sc.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),bc.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),wc.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return n.set(Sc.calc(c),bc.calc(c),wc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var ho=class i extends bi{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],x=[],y=0,v=[],g=n/2,d=0;L(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new En(u,3)),this.setAttribute("normal",new En(p,3)),this.setAttribute("uv",new En(x,2));function L(){let H=new D,C=new D,z=0,O=(t-e)/n;for(let ce=0;ce<=r;ce++){let S=[],R=ce/r,F=R*(t-e)+e;for(let oe=0;oe<=s;oe++){let Ae=oe/s,k=Ae*c+a,Z=Math.sin(k),se=Math.cos(k);C.x=F*Z,C.y=-R*n+g,C.z=F*se,u.push(C.x,C.y,C.z),H.set(Z,O,se).normalize(),p.push(H.x,H.y,H.z),x.push(Ae,1-R),S.push(y++)}v.push(S)}for(let ce=0;ce<s;ce++)for(let S=0;S<r;S++){let R=v[S][ce],F=v[S+1][ce],oe=v[S+1][ce+1],Ae=v[S][ce+1];h.push(R,F,Ae),h.push(F,oe,Ae),z+=6}l.addGroup(d,z,0),d+=z}function M(H){let C=y,z=new Xe,O=new D,ce=0,S=H===!0?e:t,R=H===!0?1:-1;for(let oe=1;oe<=s;oe++)u.push(0,g*R,0),p.push(0,R,0),x.push(.5,.5),y++;let F=y;for(let oe=0;oe<=s;oe++){let k=oe/s*c+a,Z=Math.cos(k),se=Math.sin(k);O.x=S*se,O.y=g*R,O.z=S*Z,u.push(O.x,O.y,O.z),p.push(0,R,0),z.x=Z*.5+.5,z.y=se*.5*R+.5,x.push(z.x,z.y),y++}for(let oe=0;oe<s;oe++){let Ae=C+oe,k=F+oe;H===!0?h.push(k,k+1,Ae):h.push(k+1,k,Ae),ce+=3}l.addGroup(d,ce,H===!0?1:2),d+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ur=class i extends ho{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var uo=class i extends bi{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,p=new D,x=[],y=[],v=[],g=[];for(let d=0;d<=n;d++){let L=[],M=d/n,H=0;d===0&&o===0?H=.5/t:d===n&&c===Math.PI&&(H=-.5/t);for(let C=0;C<=t;C++){let z=C/t;u.x=-e*Math.cos(s+z*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+z*r)*Math.sin(o+M*a),y.push(u.x,u.y,u.z),p.copy(u).normalize(),v.push(p.x,p.y,p.z),g.push(z+H,1-M),L.push(l++)}h.push(L)}for(let d=0;d<n;d++)for(let L=0;L<t;L++){let M=h[d][L+1],H=h[d][L],C=h[d+1][L],z=h[d+1][L+1];(d!==0||o>0)&&x.push(M,H,z),(d!==n-1||c<Math.PI)&&x.push(H,C,z)}this.setIndex(x),this.setAttribute("position",new En(y,3)),this.setAttribute("normal",new En(v,3)),this.setAttribute("uv",new En(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Sl=class i extends bi{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new D,u=new D,p=new D;for(let x=0;x<=n;x++)for(let y=0;y<=s;y++){let v=y/s*r,g=x/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(y/s),l.push(x/n)}for(let x=1;x<=n;x++)for(let y=1;y<=s;y++){let v=(s+1)*x+y-1,g=(s+1)*(x-1)+y-1,d=(s+1)*(x-1)+y,L=(s+1)*x+y;o.push(v,g,L),o.push(g,d,L)}this.setIndex(o),this.setAttribute("position",new En(a,3)),this.setAttribute("normal",new En(c,3)),this.setAttribute("uv",new En(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var bl=class extends vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Xt=class extends hr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mf,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function el(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Bx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Aa=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},eh=class extends Aa{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:au,endingEnd:au}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ou:r=e,a=2*t-n;break;case lu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ou:o=e,c=2*n-t;break;case lu:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,x=this._weightNext,y=(n-t)/(s-t),v=y*y,g=v*y,d=-p*g+2*p*v-p*y,L=(1+p)*g+(-1.5-2*p)*v+(-.5+p)*y+1,M=(-1-x)*g+(1.5+x)*v+.5*y,H=x*g-x*v;for(let C=0;C!==a;++C)r[C]=d*o[h+C]+L*o[l+C]+M*o[c+C]+H*o[u+C];return r}},th=class extends Aa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let p=0;p!==a;++p)r[p]=o[l+p]*u+o[c+p]*h;return r}},nh=class extends Aa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ji=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=el(t,this.TimeBufferType),this.values=el(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:el(e.times,Array),values:el(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nl:t=this.InterpolantFactoryMethodDiscrete;break;case il:t=this.InterpolantFactoryMethodLinear;break;case Ql:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nl;case this.InterpolantFactoryMethodLinear:return il;case this.InterpolantFactoryMethodSmooth:return Ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Bx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ql,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,p=u-n,x=u+n;for(let y=0;y!==n;++y){let v=t[u+y];if(v!==t[p+y]||v!==t[x+y]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,p=o*n;for(let x=0;x!==n;++x)t[p+x]=t[u+x]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ji.prototype.TimeBufferType=Float32Array;Ji.prototype.ValueBufferType=Float32Array;Ji.prototype.DefaultInterpolation=il;var Or=class extends Ji{};Or.prototype.ValueTypeName="bool";Or.prototype.ValueBufferType=Array;Or.prototype.DefaultInterpolation=nl;Or.prototype.InterpolantFactoryMethodLinear=void 0;Or.prototype.InterpolantFactoryMethodSmooth=void 0;var ih=class extends Ji{};ih.prototype.ValueTypeName="color";var sh=class extends Ji{};sh.prototype.ValueTypeName="number";var rh=class extends Aa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Rn.slerpFlat(r,0,o,l-a,o,l,c);return r}},fo=class extends Ji{InterpolantFactoryMethodLinear(e){return new rh(this.times,this.values,this.getValueSize(),e)}};fo.prototype.ValueTypeName="quaternion";fo.prototype.DefaultInterpolation=il;fo.prototype.InterpolantFactoryMethodSmooth=void 0;var Fr=class extends Ji{};Fr.prototype.ValueTypeName="string";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=nl;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var ah=class extends Ji{};ah.prototype.ValueTypeName="vector";var oh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){let x=l[u],y=l[u+1];if(x.global&&(x.lastIndex=0),x.test(h))return y}return null}}},Hx=new oh,lh=class{constructor(e){this.manager=e!==void 0?e:Hx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};lh.DEFAULT_MATERIAL_NAME="__DEFAULT";var po=class extends jn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},wl=class extends po{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Tc=new Ot,Qu=new D,ef=new D,Tl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Qu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qu),ef.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ef),t.updateMatrixWorld(),Tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var tf=new Ot,eo=new D,Ac=new D,ch=class extends Tl{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),eo.setFromMatrixPosition(e.matrixWorld),n.position.copy(eo),Ac.copy(n.position),Ac.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ac),n.updateMatrixWorld(),s.makeTranslation(-eo.x,-eo.y,-eo.z),tf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tf)}},mo=class extends po{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ch}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},hh=class extends Tl{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Al=class extends po{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jn.DEFAULT_UP),this.updateMatrix(),this.target=new jn,this.shadow=new hh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Rl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=nf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function nf(){return(typeof performance>"u"?Date:performance).now()}var Sh="\\[\\]\\.:\\/",kx=new RegExp("["+Sh+"]","g"),bh="[^"+Sh+"]",Vx="[^"+Sh.replace("\\.","")+"]",Gx=/((?:WC+[\/:])*)/.source.replace("WC",bh),Wx=/(WCOD+)?/.source.replace("WCOD",Vx),Xx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bh),qx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bh),Yx=new RegExp("^"+Gx+Wx+Xx+qx+"$"),Zx=["material","materials","bones","map"],uh=class{constructor(e,t,n){let s=n||pn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},pn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kx,"")}static parseTrackName(e){let t=Yx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Zx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pn.Composite=uh;pn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pn.prototype.GetterByBindingType=[pn.prototype._getValue_direct,pn.prototype._getValue_array,pn.prototype._getValue_arrayElement,pn.prototype._getValue_toArray];pn.prototype.SetterByBindingTypeAndVersioning=[[pn.prototype._setValue_direct,pn.prototype._setValue_direct_setNeedsUpdate,pn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_array,pn.prototype._setValue_array_setNeedsUpdate,pn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_arrayElement,pn.prototype._setValue_arrayElement_setNeedsUpdate,pn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_fromArray,pn.prototype._setValue_fromArray_setNeedsUpdate,pn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var r_=new Float32Array(1);var Cl=class{constructor(e,t,n=0,s=1/0){this.ray=new ba(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new oo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return fh(e,this,n,t),n.sort(sf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)fh(e[s],this,n,t);return n.sort(sf),n}};function sf(i,e){return i.distance-e.distance}function fh(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)fh(s[r],e,t,!0)}}var go=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Fn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Rf={type:"change"},Th={type:"start"},Cf={type:"end"},Ul=new ba,Pf=new qi,Jx=Math.cos(70*xf.DEG2RAD),Dl=class extends as{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zr.ROTATE,MIDDLE:zr.DOLLY,RIGHT:zr.PAN},this.touches={ONE:Br.ROTATE,TWO:Br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",Se),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Se),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Rf),n.update(),r=s.NONE},this.update=(function(){let N=new D,ye=new Rn().setFromUnitVectors(e.up,new D(0,1,0)),Te=ye.clone().invert(),be=new D,Be=new Rn,yt=new D,dt=2*Math.PI;return function(fe=null){let G=n.object.position;N.copy(G).sub(n.target),N.applyQuaternion(ye),a.setFromVector3(N),n.autoRotate&&r===s.NONE&&F(S(fe)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Pe=n.minAzimuthAngle,he=n.maxAzimuthAngle;isFinite(Pe)&&isFinite(he)&&(Pe<-Math.PI?Pe+=dt:Pe>Math.PI&&(Pe-=dt),he<-Math.PI?he+=dt:he>Math.PI&&(he-=dt),Pe<=he?a.theta=Math.max(Pe,Math.min(he,a.theta)):a.theta=a.theta>(Pe+he)/2?Math.max(Pe,a.theta):Math.min(he,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&z||n.object.isOrthographicCamera?a.radius=re(a.radius):a.radius=re(a.radius*l),N.setFromSpherical(a),N.applyQuaternion(Te),G.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let We=!1;if(n.zoomToCursor&&z){let qe=null;if(n.object.isPerspectiveCamera){let Mt=N.length();qe=re(Mt*l);let ht=Mt-qe;n.object.position.addScaledVector(H,ht),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let Mt=new D(C.x,C.y,0);Mt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),We=!0;let ht=new D(C.x,C.y,0);ht.unproject(n.object),n.object.position.sub(ht).add(Mt),n.object.updateMatrixWorld(),qe=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;qe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(qe).add(n.object.position):(Ul.origin.copy(n.object.position),Ul.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ul.direction))<Jx?e.lookAt(n.target):(Pf.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ul.intersectPlane(Pf,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),We=!0);return l=1,z=!1,We||be.distanceToSquared(n.object.position)>o||8*(1-Be.dot(n.object.quaternion))>o||yt.distanceToSquared(n.target)>0?(n.dispatchEvent(Rf),be.copy(n.object.position),Be.copy(n.object.quaternion),yt.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",De),n.domElement.removeEventListener("pointerdown",xt),n.domElement.removeEventListener("pointercancel",E),n.domElement.removeEventListener("wheel",Ee),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",E),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Se),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new go,c=new go,l=1,h=new D,u=new Xe,p=new Xe,x=new Xe,y=new Xe,v=new Xe,g=new Xe,d=new Xe,L=new Xe,M=new Xe,H=new D,C=new Xe,z=!1,O=[],ce={};function S(N){return N!==null?2*Math.PI/60*n.autoRotateSpeed*N:2*Math.PI/60/60*n.autoRotateSpeed}function R(N){let ye=Math.abs(N)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*ye)}function F(N){c.theta-=N}function oe(N){c.phi-=N}let Ae=(function(){let N=new D;return function(Te,be){N.setFromMatrixColumn(be,0),N.multiplyScalar(-Te),h.add(N)}})(),k=(function(){let N=new D;return function(Te,be){n.screenSpacePanning===!0?N.setFromMatrixColumn(be,1):(N.setFromMatrixColumn(be,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(Te),h.add(N)}})(),Z=(function(){let N=new D;return function(Te,be){let Be=n.domElement;if(n.object.isPerspectiveCamera){let yt=n.object.position;N.copy(yt).sub(n.target);let dt=N.length();dt*=Math.tan(n.object.fov/2*Math.PI/180),Ae(2*Te*dt/Be.clientHeight,n.object.matrix),k(2*be*dt/Be.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Ae(Te*(n.object.right-n.object.left)/n.object.zoom/Be.clientWidth,n.object.matrix),k(be*(n.object.top-n.object.bottom)/n.object.zoom/Be.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function se(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function _e(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ue(N,ye){if(!n.zoomToCursor)return;z=!0;let Te=n.domElement.getBoundingClientRect(),be=N-Te.left,Be=ye-Te.top,yt=Te.width,dt=Te.height;C.x=be/yt*2-1,C.y=-(Be/dt)*2+1,H.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function re(N){return Math.max(n.minDistance,Math.min(n.maxDistance,N))}function Me(N){u.set(N.clientX,N.clientY)}function Re(N){ue(N.clientX,N.clientX),d.set(N.clientX,N.clientY)}function I(N){y.set(N.clientX,N.clientY)}function W(N){p.set(N.clientX,N.clientY),x.subVectors(p,u).multiplyScalar(n.rotateSpeed);let ye=n.domElement;F(2*Math.PI*x.x/ye.clientHeight),oe(2*Math.PI*x.y/ye.clientHeight),u.copy(p),n.update()}function le(N){L.set(N.clientX,N.clientY),M.subVectors(L,d),M.y>0?se(R(M.y)):M.y<0&&_e(R(M.y)),d.copy(L),n.update()}function Ce(N){v.set(N.clientX,N.clientY),g.subVectors(v,y).multiplyScalar(n.panSpeed),Z(g.x,g.y),y.copy(v),n.update()}function xe(N){ue(N.clientX,N.clientY),N.deltaY<0?_e(R(N.deltaY)):N.deltaY>0&&se(R(N.deltaY)),n.update()}function ze(N){let ye=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?oe(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(0,n.keyPanSpeed),ye=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?oe(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(0,-n.keyPanSpeed),ye=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(n.keyPanSpeed,0),ye=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(-n.keyPanSpeed,0),ye=!0;break}ye&&(N.preventDefault(),n.update())}function at(N){if(O.length===1)u.set(N.pageX,N.pageY);else{let ye=Tt(N),Te=.5*(N.pageX+ye.x),be=.5*(N.pageY+ye.y);u.set(Te,be)}}function Ze(N){if(O.length===1)y.set(N.pageX,N.pageY);else{let ye=Tt(N),Te=.5*(N.pageX+ye.x),be=.5*(N.pageY+ye.y);y.set(Te,be)}}function it(N){let ye=Tt(N),Te=N.pageX-ye.x,be=N.pageY-ye.y,Be=Math.sqrt(Te*Te+be*be);d.set(0,Be)}function vt(N){n.enableZoom&&it(N),n.enablePan&&Ze(N)}function j(N){n.enableZoom&&it(N),n.enableRotate&&at(N)}function Gt(N){if(O.length==1)p.set(N.pageX,N.pageY);else{let Te=Tt(N),be=.5*(N.pageX+Te.x),Be=.5*(N.pageY+Te.y);p.set(be,Be)}x.subVectors(p,u).multiplyScalar(n.rotateSpeed);let ye=n.domElement;F(2*Math.PI*x.x/ye.clientHeight),oe(2*Math.PI*x.y/ye.clientHeight),u.copy(p)}function $e(N){if(O.length===1)v.set(N.pageX,N.pageY);else{let ye=Tt(N),Te=.5*(N.pageX+ye.x),be=.5*(N.pageY+ye.y);v.set(Te,be)}g.subVectors(v,y).multiplyScalar(n.panSpeed),Z(g.x,g.y),y.copy(v)}function nt(N){let ye=Tt(N),Te=N.pageX-ye.x,be=N.pageY-ye.y,Be=Math.sqrt(Te*Te+be*be);L.set(0,Be),M.set(0,Math.pow(L.y/d.y,n.zoomSpeed)),se(M.y),d.copy(L);let yt=(N.pageX+ye.x)*.5,dt=(N.pageY+ye.y)*.5;ue(yt,dt)}function Oe(N){n.enableZoom&&nt(N),n.enablePan&&$e(N)}function Ht(N){n.enableZoom&&nt(N),n.enableRotate&&Gt(N)}function xt(N){n.enabled!==!1&&(O.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",E)),Ge(N),N.pointerType==="touch"?ke(N):ee(N))}function A(N){n.enabled!==!1&&(N.pointerType==="touch"?Ie(N):we(N))}function E(N){et(N),O.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",E)),n.dispatchEvent(Cf),r=s.NONE}function ee(N){let ye;switch(N.button){case 0:ye=n.mouseButtons.LEFT;break;case 1:ye=n.mouseButtons.MIDDLE;break;case 2:ye=n.mouseButtons.RIGHT;break;default:ye=-1}switch(ye){case zr.DOLLY:if(n.enableZoom===!1)return;Re(N),r=s.DOLLY;break;case zr.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;I(N),r=s.PAN}else{if(n.enableRotate===!1)return;Me(N),r=s.ROTATE}break;case zr.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;Me(N),r=s.ROTATE}else{if(n.enablePan===!1)return;I(N),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Th)}function we(N){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;W(N);break;case s.DOLLY:if(n.enableZoom===!1)return;le(N);break;case s.PAN:if(n.enablePan===!1)return;Ce(N);break}}function Ee(N){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(N.preventDefault(),n.dispatchEvent(Th),xe(N),n.dispatchEvent(Cf))}function Se(N){n.enabled===!1||n.enablePan===!1||ze(N)}function ke(N){switch(de(N),O.length){case 1:switch(n.touches.ONE){case Br.ROTATE:if(n.enableRotate===!1)return;at(N),r=s.TOUCH_ROTATE;break;case Br.PAN:if(n.enablePan===!1)return;Ze(N),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Br.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;vt(N),r=s.TOUCH_DOLLY_PAN;break;case Br.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;j(N),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Th)}function Ie(N){switch(de(N),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Gt(N),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;$e(N),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Oe(N),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ht(N),n.update();break;default:r=s.NONE}}function De(N){n.enabled!==!1&&N.preventDefault()}function Ge(N){O.push(N.pointerId)}function et(N){delete ce[N.pointerId];for(let ye=0;ye<O.length;ye++)if(O[ye]==N.pointerId){O.splice(ye,1);return}}function de(N){let ye=ce[N.pointerId];ye===void 0&&(ye=new Xe,ce[N.pointerId]=ye),ye.set(N.pageX,N.pageY)}function Tt(N){let ye=N.pointerId===O[0]?O[1]:O[0];return ce[ye]}n.domElement.addEventListener("contextmenu",De),n.domElement.addEventListener("pointerdown",xt),n.domElement.addEventListener("pointercancel",E),n.domElement.addEventListener("wheel",Ee,{passive:!1}),this.update()}};var Nl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ti=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Kx=new Ta(-1,1,1,-1,0,1),Ah=class extends bi{constructor(){super(),this.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new En([0,2,0,0,2,0],2))}},$x=new Ah,dr=class{constructor(e){this._mesh=new _t($x,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Kx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ol=class extends Ti{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof vn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fr.clone(e.uniforms),this.material=new vn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new dr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var _o=class extends Ti{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Fl=class extends Ti{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var zl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Xe);this._width=n.width,this._height=n.height,t=new oi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ol(Nl),this.copyPass.material.blending=rs,this.clock=new Rl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}_o!==void 0&&(o instanceof _o?n=!0:o instanceof Fl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Bl=class extends Ti{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ue}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Lf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ca=class i extends Ti{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Xe(e.x,e.y):new Xe(256,256),this.clearColor=new Ue(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new oi(r,o,{type:Zi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let p=new oi(r,o,{type:Zi});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let x=new oi(r,o,{type:Zi});x.texture.name="UnrealBloomPass.v"+u,x.texture.generateMipmaps=!1,this.renderTargetsVertical.push(x),r=Math.round(r/2),o=Math.round(o/2)}let a=Lf;this.highPassUniforms=fr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Xe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Nl;this.copyUniforms=fr.clone(h.uniforms),this.blendMaterial=new vn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ei,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ue,this.oldClearAlpha=1,this.basic=new Ut,this.fsQuad=new dr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Xe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new vn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Xe(.5,.5)},direction:{value:new Xe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new vn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ca.BlurDirectionX=new Xe(1,0);Ca.BlurDirectionY=new Xe(0,1);var If={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Hl=class extends Ti{constructor(){super();let e=If;this.uniforms=fr.clone(e.uniforms),this.material=new bl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new dr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Kt.getTransfer(this._outputColorSpace)===an&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ph?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===mh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===gh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ki=Math.PI*2;function Uf(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}var Ft={lot:0,res:1,apt:2,ind:3,mall:4,park:5,golf:6,air:7,port:8,arena:9,hwy:10,ring:11},nn={rw:{x0:-492,x1:-196,z:-280,hw:9},twz:-253,apron:{x0:-440,x1:-276,z0:-249,z1:-212},field:{x:-220,z:32,hx:19,hz:12},port:{x0:-40,x1:84,z0:-292,z1:-148},lake:{x:-76,z:176,w:40,d:32},hwyX:-132,hwyZ:122,isle:{x:208,z:128,r:40},metro:{x0:-96,x1:74,z0:-96,z1:96,r:16,y:12}},kl=i=>i*36+14;function Df(i,e){let t=Uf(4242),n=33,s=new Uint8Array(n*n*4),r=new Set,o=(h,u,p)=>{if(Math.abs(h)>16||Math.abs(u)>16)return;let x=((u+16)*n+h+16)*4;s[x]=p,s[x+3]=255},a=(h,u)=>Math.abs(h)>16||Math.abs(u)>16?0:s[((u+16)*n+h+16)*4],c=(h,u,p,x,y)=>{for(let v=h;v<=u;v++)for(let g=p;g<=x;g++)o(v,g,y),r.add(v+","+g)};c(-14,-6,-9,-6,Ft.air),c(-1,1,-8,-5,Ft.port),c(-7,-6,0,1,Ft.arena),c(-9,-7,5,7,Ft.golf),c(-3,-2,4,5,Ft.park),c(-5,-5,-2,-2,Ft.mall),c(-10,-10,2,2,Ft.mall),c(-1,-1,8,8,Ft.mall);for(let h=-16;h<=16;h++)r.has("-4,"+h)||c(-4,-4,h,h,Ft.hwy),h<=1&&!r.has(h+",3")&&c(h,h,3,3,Ft.hwy);for(let h=-16;h<=16;h++)for(let u=-16;u<=16;u++){if(r.has(h+","+u))continue;let p=kl(h),x=kl(u),y=Math.hypot(p,x);if(Math.abs(p)<i+26&&Math.abs(x)<i+26){o(h,u,Ft.ring);continue}if(p>e+12||y>600){o(h,u,Ft.lot);continue}let v=t(),g=u<=-5||h<=-10,d=u>=4;o(h,u,g?v<.3?Ft.ind:v<.66?Ft.res:v<.8?Ft.apt:v<.9?Ft.park:Ft.lot:d?v<.58?Ft.res:v<.74?Ft.apt:v<.88?Ft.park:Ft.lot:v<.38?Ft.apt:v<.78?Ft.res:v<.9?Ft.park:Ft.lot)}let l=new Ml(s,n,n,Mi);return l.magFilter=l.minFilter=Cn,l.needsUpdate=!0,{tex:l,get:a}}function Nf(i){let{scene:e,col:t,voxMesh:n,boxGeo:s,mobile:r,HALF:o,PITCH:a,NB:c,BEACH_X:l,PIER_Z:h,roofs:u,ants:p,site:x,zones:y,spark:v,seaMat:g,cam:d,rr:L,loadIcon:M,mono:H}=i,C=Uf(9137),z=r,O=new Ot,ce=new Ot,S=new Rn,R=new D,F=new D,oe=new os(0,0,0,"YXZ"),Ae=new Ue,k=new D,Z=new D,se=new D,_e=new D(0,1,0),ue=new D(0,-1,0),re=new D(0,0,1),Me=new Ot().makeScale(0,0,0),Re=new Ue(1,1,1),I=(f,T,P,$,ae,Le,lt,Qe,ct,Pt)=>({x:f,y:T,z:P,w:$,h:ae,d:Le,c:typeof lt=="string"?t(lt):lt,ry:Qe,rx:ct,rz:Pt}),W=(f,T,P)=>new Ue(f,T,P),le=f=>f[Math.floor(C()*f.length)],Ce=(f,T,P)=>new D(f,T,P),xe={x:0,y:0,z:0,yaw:0,pitch:0},ze={x:0,y:0,z:0,yaw:0,pitch:0},at=new kn;e.add(at);function Ze(f,T=at){let P=new on(s(),new Ut({toneMapped:!1}),Math.max(1,f.length));return f.forEach(($,ae)=>{S.setFromEuler(oe.set($.rx||0,$.ry||0,$.rz||0)),O.compose(R.set($.x,$.y+$.h/2,$.z),S,F.set($.w,$.h,$.d)),P.setMatrixAt(ae,O),P.setColorAt(ae,$.c)}),P.count=f.length,P.frustumCulled=!1,T.add(P),P}function it(f,T){let P=new on(s(),new Xt,Math.max(1,f.length));return f.forEach(($,ae)=>{S.setFromEuler(oe.set($.rx||0,$.ry||0,$.rz||0)),O.compose(R.set($.x,$.y+$.h/2,$.z),S,F.set($.w,$.h,$.d)),P.setMatrixAt(ae,O),P.setColorAt(ae,$.c)}),P.count=f.length,P.frustumCulled=!1,T.add(P),P}function vt(f,T){let P=f.map(([ae,Le,lt,Qe,ct])=>{let Pt=!ct&&typeof Qe=="string",ie=new on(s(),ct?new Ut({toneMapped:!1}):new Xt(Pt?{color:Qe}:{}),T);ie.frustumCulled=!1,e.add(ie);for(let ve=0;ve<T;ve++)ie.setMatrixAt(ve,Me),Pt||ie.setColorAt(ve,ct&&Qe?Qe:Re);return{k:ae,m:ie,L:new Ot().compose(new D(...Le),new Rn,new D(...lt))}}),$=Object.fromEntries(P.map(ae=>[ae.k,ae]));return{by:$,set(ae,Le,lt,Qe,ct=0,Pt=0,ie=0,ve=1){S.setFromEuler(oe.set(Pt,ct,ie)),O.compose(R.set(Le,lt,Qe),S,F.set(ve,ve,ve));for(let Ke of P)ce.multiplyMatrices(O,Ke.L),Ke.m.setMatrixAt(ae,ce)},hide(ae){for(let Le of P)Le.m.setMatrixAt(ae,Me)},paint(ae,Le,lt){$[ae].m.setColorAt(Le,lt)},flush(){for(let ae of P)ae.m.instanceMatrix.needsUpdate=!0,ae.m.instanceColor&&(ae.m.instanceColor.needsUpdate=!0)}}}function j(f){let T=[],P=0;for(let $=0;$<f.length;$++){let ae=f[$],Le=f[($+1)%f.length],lt=Math.hypot(Le[0]-ae[0],Le[1]-ae[1],Le[2]-ae[2])||.001;T.push({a:ae,b:Le,l:lt,at:P}),P+=lt}return{seg:T,len:P}}function Gt(f,T,P=xe){T=(T%f.len+f.len)%f.len;let $=0,ae=f.seg.length-1;for(;$<ae;){let ie=$+ae+1>>1;f.seg[ie].at<=T?$=ie:ae=ie-1}let Le=f.seg[$],lt=(T-Le.at)/Le.l,Qe=Le.b[0]-Le.a[0],ct=Le.b[1]-Le.a[1],Pt=Le.b[2]-Le.a[2];return P.x=Le.a[0]+Qe*lt,P.y=Le.a[1]+ct*lt,P.z=Le.a[2]+Pt*lt,P.yaw=Math.atan2(Qe,Pt),P.pitch=-Math.atan2(ct,Math.hypot(Qe,Pt)),P}function $e(f,T,P,$,ae,Le,lt=6){let Qe=[],ct=(Pt,ie,ve)=>{for(let Ke=0;Ke<=lt;Ke++){let gt=ve+Ke/lt*Math.PI/2;Qe.push([Pt+Math.cos(gt)*ae,Le,ie+Math.sin(gt)*ae])}};return ct(T-ae,P+ae,-Math.PI/2),ct(T-ae,$-ae,0),ct(f+ae,$-ae,Math.PI/2),ct(f+ae,P+ae,Math.PI),Qe}let nt=(f,T)=>{let P=document.createElement("canvas");P.width=f,P.height=T;let $=P.getContext("2d"),ae=new ci(P);return ae.colorSpace=Zt,{c:P,g:$,tex:ae}},Oe=(f,T,P)=>{for(;f.measureText(T).width>P&&T.length>3;)T=T.slice(0,-2)+"\u2026";return T},Ht=[W(3.4,.5,1.8),W(.5,2.2,3.4),W(3.4,2.6,.5),W(2.2,.6,3.4),W(.5,3.2,1.6)],xt=["#ffd6e8","#d8fff0","#e8dcff","#ffe6cc","#d6ecff","#fff6d6","#f4f0ff","#ffc9a0"].map(t),A=["#5a5288","#4a4478","#6a5a94","#3d3a6e","#8a6a9a","#2f3a70","#8f86b8","#a49ccb"].map(t),E=["#6a6a8a","#58607e","#7a7290","#4e5a74","#8a8296"].map(t),ee=["#ffd23f","#5fc8ff","#ff9ec9","#9ff0d0","#c8a8ff","#f4f0ff","#ff6a5a","#2a2a44"].map(t),we=["#2fa86a","#26985e","#38b874","#2c8f5a"].map(t),Ee=[],Se=[],ke=[],Ie=[];function De(f,T,P=1,$=0){let ae=le(we);Ee.push(I(f,$,T,.7*P,2.2*P,.7*P,"#6a4630"),I(f,$+2*P,T,3.4*P,1.7*P,3.4*P,ae),I(f,$+3.6*P,T,2.4*P,1.3*P,2.4*P,ae),I(f,$+4.8*P,T,1.2*P,.9*P,1.2*P,ae))}function Ge(f,T,P=1,$=0){let ae=Math.round(7+C()*4),Le=(C()-.5)*.25;for(let ct=0;ct<ae;ct++)Se.push(I(f+Le*ct*ct*.08,$+ct*.9*P,T,.7*P,.9*P,.7*P,ct%2?"#8a5a3a":"#7a4e30"));let lt=f+Le*ae*ae*.08,Qe=$+ae*.9*P;for(let ct=0;ct<6;ct++){let Pt=ct/6*Ki+C()*.4;for(let ie=1;ie<=5;ie++)Se.push(I(lt+Math.cos(Pt)*ie*.8*P,Qe+(ie<3?.3:-(ie-2)*.55)*P,T+Math.sin(Pt)*ie*.8*P,.75*P,.35*P,.75*P,ie%2?"#2fbf6e":"#26a85e"))}Se.push(I(lt,Qe-.3,T,1.1*P,.8*P,1.1*P,"#2fbf6e"))}let et=[],de=[],Tt=[],N=[],ye=[],Te=[],be=z?430:600,Be=l-6;for(let f=-16;f<=16;f++)for(let T=-16;T<=16;T++){let P=y.get(f,T),$=kl(f),ae=kl(T),Le=Math.hypot($,ae);if(Le>be)continue;let lt=Math.min(1,Le/600);if(P===Ft.res)for(let Qe of[-10,0,10])for(let ct of[-10,0,10]){if(C()<.14)continue;let Pt=$+Qe+(C()-.5)*1.4,ie=ae+ct+(C()-.5)*1.4;if(Pt>Be)continue;let ve=4.6+C()*2.2,Ke=4.6+C()*2.2,gt=C()<.32?5.4:3.2,wt=le(xt);et.push(I(Pt,0,ie,ve,gt,Ke,wt)),C()<.3&&et.push(I(Pt+(C()-.5),gt,ie+(C()-.5),ve*.5,1.2,Ke*.5,wt)),C()<.42?N.push(I(Pt+(C()<.5?1:-1)*(ve/2+1.5),0,ie+(C()-.5)*2,2.2,.14,3,W(.16,.85,1.2))):C()<.55&&De(Pt+(C()<.5?1:-1)*(ve/2+1.7),ie+(C()-.5)*3,.65+C()*.3)}else if(P===Ft.apt){let Qe=2+Math.floor(C()*3),ct=[[-8,-8],[8,-8],[-8,8],[8,8]].sort(()=>C()-.5).slice(0,Qe);for(let[Pt,ie]of ct){let ve=$+Pt,Ke=ae+ie;if(ve>Be-2)continue;let gt=7+Math.round(C()*5),wt=7+Math.round(C()*5),hn=9+Math.round(C()*(12+lt*26)),ui=le(A);de.push(I(ve,0,Ke,gt,hn,wt,ui)),hn>18&&C()<.5&&de.push(I(ve,hn,Ke,gt-2,2+Math.round(C()*4),wt-2,ui)),C()<.3&&ke.push(I(ve,hn+.05,Ke-wt/2+.9,gt-1.6,.3,.3,le(Ht)))}C()<.5&&De($+(C()-.5)*6,ae+(C()-.5)*6)}else if(P===Ft.ind){let Qe=C()<.55;for(let ct of Qe?[-7.5,7.5]:[0]){let Pt=22+Math.round(C()*6),ie=Qe?10:18,ve=5+Math.round(C()*4),Ke=le(E);Tt.push(I($,0,ae+ct,Pt,ve,ie,Ke));for(let gt=-Pt/2+3;gt<Pt/2-2;gt+=4)Tt.push(I($+gt,ve,ae+ct,1.2,.45,ie-2,"#c8c4dc"))}if(C()<.55){let ct=$+12,Pt=ae+(Qe?0:11),ie=15+Math.round(C()*10);Tt.push(I(ct,0,Pt,2,ie,2,"#8a3a4a"),I(ct,ie-3,Pt,2.3,1,2.3,"#f0eaff")),Te.push([ct,ie,Pt]),ke.push(I(ct,ie,Pt,.5,.4,.5,W(4,.3,.3)))}}else if(P===Ft.mall){let Qe=le(xt);de.push(I($-2,0,ae-7,24,7,14,Qe),I($-2,7,ae-7,12,2,8,Qe)),ke.push(I($-2,4.4,ae+.12,20,.6,.2,le(Ht)));for(let ct=0;ct<3;ct++)for(let Pt=0;Pt<8;Pt++)C()<.7&&ye.push(I($-12.5+Pt*3.2,0,ae+4+ct*4.4,1.5,1.1,3,le(ee)))}else if(P===Ft.park){if(f>=-3&&f<=-2&&T>=4&&T<=5)continue;for(let Qe=0;Qe<(z?4:8);Qe++)De($+(C()-.5)*26,ae+(C()-.5)*26,.8+C()*.5)}else if(P===Ft.lot)$<Be&&C()<.3&&De($+(C()-.5)*20,ae+(C()-.5)*20);else if(P===Ft.hwy&&C()<.5){let Qe=$+(C()-.5)*24,ct=ae+(C()-.5)*24;Math.abs(Qe-nn.hwyX)>10&&Math.abs(ct-nn.hwyZ)>10&&Qe<Be&&De(Qe,ct,.9)}}n(et,!0),n(de,!0),n(Tt,!0),n(ye),Ze(N);let yt=Math.min(z?12:28,Te.length),dt=5,pt=new on(s(),new Xt({color:"#5a4a7a",transparent:!0,opacity:.5,depthWrite:!1}),Math.max(1,yt*dt));pt.frustumCulled=!1,e.add(pt);let fe=nn.lake,G=new _t(new li(fe.w,fe.d).rotateX(-Math.PI/2),g);G.position.set(fe.x,.22,fe.z),e.add(G);let Pe=[I(fe.x,0,fe.z-fe.d/2-.6,fe.w+2.4,.5,1.2,"#d8d2f0"),I(fe.x,0,fe.z+fe.d/2+.6,fe.w+2.4,.5,1.2,"#d8d2f0"),I(fe.x-fe.w/2-.6,0,fe.z,1.2,.5,fe.d,"#d8d2f0"),I(fe.x+fe.w/2+.6,0,fe.z,1.2,.5,fe.d,"#d8d2f0"),I(fe.x,0,fe.z,3.4,.9,3.4,"#e8e4f4"),I(fe.x,.9,fe.z,1.2,1.4,1.2,"#e8e4f4")];for(let f=0;f<(z?14:30);f++){let T=-108+C()*64,P=144+C()*64;Math.abs(T-fe.x)<fe.w/2+3&&Math.abs(P-fe.z)<fe.d/2+3||De(T,P,.8+C()*.6)}n(Pe),ke.push(I(fe.x,.95,fe.z,3.6,.1,3.6,W(.6,1.8,2.6)));let he=nn.rw,We=nn.twz,qe=[],Mt=[];qe.push(I(-358,0,-204,128,9,16,"#c9c3e8"),I(-358,9,-204,120,2.2,12,"#4a3a8a"));for(let f=0;f<6;f++)qe.push(I(-262,f*4.5,-204,5.6-f*.3,4.5,5.6-f*.3,f%2?"#d8d2f0":"#bdb6e0"));qe.push(I(-262,27,-204,9,4.6,9,"#2c3c96"),I(-262,31.6,-204,10,.9,10,"#e8e2f8"),I(-226,0,-205,30,7,16,"#7a72a8"));for(let f=0;f<5;f++)Mt.push(I(-413+f*25,4.4,-217,2.4,2.4,10,"#bdb6e0"));for(let f of[-474,-446])Mt.push(I(f,0,-212,24,10,22,"#8f86b8"),I(f,10,-212,18,3,22,"#a49ccb"),I(f,13,-212,10,2,22,"#b3a9d6"));for(let f=0;f<3;f++)Mt.push(I(-500+f*8,0,-236,6,5,6,"#e8e4f4"));n(qe,!0),n(Mt);let ht=[];for(let f=he.x0+4;f<=he.x1-4;f+=12)for(let T of[-1,1])ht.push(I(f,0,he.z+T*(he.hw+.4),.5,.35,.5,W(3.4,3.2,2.8)));for(let f=-3;f<=3;f++)ht.push(I(he.x0+1,0,he.z+f*2.4,.5,.35,.5,W(.4,3.6,1)),I(he.x1-1,0,he.z+f*2.4,.5,.35,.5,W(3.6,.4,.4)));for(let f=he.x0+20;f<=he.x1-20;f+=16)for(let T of[-1,1])ht.push(I(f,0,We+T*4.6,.4,.3,.4,W(.5,1,4)));ht.push(I(-262,32.5,-204,.8,.8,.8,W(.5,4,1.4)),I(-358,11.2,-204,116,.3,.2,W(.5,2.2,3.4))),Ze(ht);let kt=Ze(Array.from({length:7},(f,T)=>I(he.x0-14-T*11,0,he.z,.9,.5,.9,W(5,5,5.5)))),ln=z?8:10,J=z?[7]:[7,8,9],pe=vt([["body",[0,2.4,0],[2.6,2.6,21],"#f4f2fb"],["nose",[0,2.25,11.4],[2,2,1.8],"#f4f2fb"],["wing",[0,1.9,-.5],[21,.4,4.2],"#d8d4ea"],["stab",[0,3.3,-9.4],[8.2,.35,2.2],"#d8d4ea"],["fin",[0,5.5,-9],[.45,4.4,3.4],null],["engL",[-4.8,1.15,.6],[1.5,1.5,3.2],"#a8a4c4"],["engR",[4.8,1.15,.6],[1.5,1.5,3.2],"#a8a4c4"],["win",[0,2.95,.6],[2.66,.42,15],W(3,2.4,1.5),!0],["navL",[-10.5,1.95,-.5],[.5,.5,.5],W(5,.3,.3),!0],["navR",[10.5,1.95,-.5],[.5,.5,.5],W(.3,5,.9),!0],["strobe",[0,7.9,-10.4],[.45,.45,.45],W(6,6,6),!0],["bcn",[0,.95,1.5],[.6,.3,.6],W(5,.4,.3),!0]],ln),ge=["#ff4f9e","#5fc8ff","#ffd23f","#8a3fe2","#2ee6a6"].map(t);for(let f=0;f<ln;f++)pe.paint("fin",f,ge[f%ge.length]);for(let f=0;f<5;f++)pe.set(f,-410+f*25,0,-234,0);let ot=new El([[-470,0,he.z],[-330,0,he.z],[-240,9,he.z],[-120,36,he.z],[10,62,he.z-14],[100,80,he.z-70],[80,96,he.z-170],[-80,104,he.z-200],[-420,104,he.z-200],[-700,94,he.z-170],[-820,74,he.z-90],[-770,44,he.z-10],[-660,22,he.z],[-560,6,he.z],[-500,0,he.z]].map(f=>new D(...f)),!0,"centripetal");ot.arcLengthDivisions=800;let Je=ot.getLength(),Ye=[0,0],Lt=[0,0],At=[],$t=[],Vt=-99;function mn(f){let{c:T,g:P,tex:$}=nt(560,200),ae=lt=>{P.clearRect(0,0,560,200),P.fillStyle="rgba(6,24,52,.94)",L(P,6,6,548,150,40),P.fill(),P.beginPath(),P.moveTo(250,150),P.lineTo(280,194),P.lineTo(312,150),P.closePath(),P.fill(),P.strokeStyle="#5fc8ff",P.lineWidth=6,L(P,6,6,548,150,40),P.stroke(),P.save(),P.beginPath(),P.arc(84,81,50,0,Ki),P.clip(),lt?P.drawImage(lt,34,31,100,100):H(P,84,81,50,f.symbol,f.mint),P.restore(),P.textAlign="left",P.fillStyle="#5fc8ff",P.font="900 23px Inter, sans-serif",P.fillText("MIGRATED \xB7 TAKING OFF",156,58),P.fillStyle="#fff",P.font="900 42px Inter, sans-serif",P.fillText(Oe(P,"$"+f.symbol,370),156,104),P.fillStyle="rgba(200,230,255,.85)",P.font="700 22px Inter, sans-serif",P.fillText("graduated to PumpSwap",156,136),$.needsUpdate=!0};ae(null),M(f.iconUrl,ae);let Le=new wi(new pi({map:$,transparent:!0,depthTest:!1}));return Le.renderOrder=8,Le.userData={kind:"coin",key:f.mint,coin:f},e.add(Le),Le}function bn(f){!f||!f.mint||!f.symbol||At.some(T=>T.t.mint===f.mint)||$t.some(T=>T.mint===f.mint)||($t.push(f),$t.length>6&&$t.shift())}let In=["#c8324a","#2f6fd8","#2fa86a","#e8902f","#1fa8b8","#e8e4f4","#8a2f6a","#d8b030"].map(t),w=[I(64,-1.2,-220,36,1.8,140,"#8a86a0")],Y=[];for(let f of[-36,-8,18])for(let T of[-286,-262,-238,-214,-190,-166])for(let P=0;P<4;P++)for(let $=0;$<6;$++){if(z&&(P+$)%2)continue;let ae=C()<.12?0:1+Math.floor(C()*C()*4.2);for(let Le=0;Le<ae;Le++)Y.push(I(f+3.2+P*6.4,Le*2.62,T+1.35+$*2.7,6.05,2.58,2.5,le(In)))}let Q=89;for(let f of[-252,-186]){w.push(I(Q,-2.4,f,13,7,58,"#24306a"),I(Q,-.4,f,13.2,1.1,58.2,"#b02a40"),I(Q,-2.4,f+30.5,8,7,3,"#24306a"),I(Q,4.6,f-23,12,9,7,"#f0ecfa"),I(Q,13.6,f-26,3,4.5,3,"#c8324a"));for(let T=0;T<5;T++)for(let P=0;P<7;P++){let $=1+Math.floor(C()*3);for(let ae=0;ae<$;ae++)Y.push(I(Q+(T-2)*2.6,4.6+ae*2.62,f-16+P*6.4,2.5,2.58,6.05,le(In)))}}let ne=[-272,-238,-204,-170],te=[],Fe=[];for(let f of ne){for(let T of[66,78])for(let P of[-1,1])te.push(I(T,.6,f+P*5,1.2,29,1.2,"#d8324a"));for(let T of[-1,1])te.push(I(72,27.6,f+T*5,13.2,1.6,1.2,"#e8e4f4"));te.push(I(82,29.6,f,50,1.8,3.6,"#e8e4f4"),I(63,31.4,f,6,3.2,5,"#d8324a"),I(66,31.4,f,1.2,12,1.2,"#d8324a"),I(86,37.15,f,41.8,.5,.5,"#e8e4f4",0,0,-.291)),Fe.push(I(66,43.4,f,.7,.6,.7,W(5,.3,.3)),I(106.6,29.8,f,.6,.6,.6,W(5,.3,.3)))}let je=[];for(let f of[-22,4,30])for(let T of[-266,-218,-170])w.push(I(f,0,T,1,24,1,"#8a84a8")),je.push(I(f,24,T,3.4,.8,3.4,W(3.4,3,2.4)));n(w,!0),n(Y),n(te),Ze(Fe),Ze(je);let ut=ne.length,st=f=>{let T=new on(s(),new Xt(f?{color:f}:{}),ut);return T.frustumCulled=!1,e.add(T),T},Ct=st("#3a3654"),Et=st("#1a1638"),St=st("#ffd23f"),qt=st(null);for(let f=0;f<ut;f++)qt.setColorAt(f,In[f*3%In.length]);let Wt=f=>f<.5?2*f*f:1-Math.pow(-2*f+2,2)/2;function gn(f){let T=Q+2.6,P=70,$=26,ae=12.6,Le=3.2;return f<3?[T,$+(ae-$)*Wt(f/3),0]:f<4?[T,ae,f>3.5]:f<7?[T,ae+($-ae)*Wt((f-4)/3),1]:f<10?[T+(P-T)*Wt((f-7)/3),$,1]:f<13?[P,$+(Le-$)*Wt((f-10)/3),1]:f<14?[P,Le,f<13.5]:f<16?[P,Le+($-Le)*Wt((f-14)/2),0]:[P+(T-P)*Wt((f-16)/2),$,0]}let Qn=j($e(50,60,-286,-154,4,.6,4)),Jt=6,mt=vt([["cab",[0,1.3,2.7],[2.3,2,1.8],"#ffd23f"],["chas",[0,.55,-.6],[2.1,.5,6.8],"#3a3654"],["box",[0,2.1,-1.1],[2.5,2.58,6],null],["lt",[0,1.1,3.62],[1.8,.25,.1],W(4,3.8,3.2),!0]],Jt);for(let f=0;f<Jt;f++)mt.paint("box",f,In[(f*5+1)%In.length]);let Fi=vt([["hull",[0,.5,0],[3.2,1.4,7.4],"#e8e4f4"],["cab",[0,1.9,-.6],[2.2,1.4,2.8],"#c8324a"],["lt",[0,2.8,-.6],[.4,.4,.4],W(4,3.6,2),!0]],2),Ve=nn.field,ei=[],cs=[],wn=[],zi=[],fn=64;for(let f=0;f<fn;f++){let T=(f+.5)/fn*Ki,P=Math.cos(T),$=Math.sin(T),ae=f%16===0||f%16===15;for(let Le=0;Le<7;Le++){if(ae&&Le<5)continue;let lt=25+Le*2.3,Qe=18+Le*2.3,ct=Ve.x+P*lt,Pt=Ve.z+$*Qe,ie=Math.atan2(Qe*P,lt*$),ve=Math.hypot(lt*$,Qe*P)*Ki/fn+.3,Ke=Le===6?13:1+Le*1.5;if(ei.push(I(ct,0,Pt,ve,Ke,2.4,Le===6?"#e8e4f4":Math.floor(f/4)%2?"#ff4f9e":"#3a5ae0",ie)),Le<6&&!ae)for(let gt of z?[0]:[-.25,.25])cs.push({x:ct+Math.cos(ie)*ve*gt,y:Ke,z:Pt-Math.sin(ie)*ve*gt,a:T})}}for(let[f,T]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let P=Ve.x+f*36,$=Ve.z+T*28;wn.push(I(P,0,$,1.4,36,1.4,"#c8c0e8")),zi.push(I(P-f*.6,36,$-T*.6,5,2.6,1.2,W(2.1,2.1,2),Math.atan2(-f,-T)));let ae=new _t(new ur(9,1,20,1,!0).translate(0,-.5,0),new Ut({color:new Ue(.8,.85,1),transparent:!0,opacity:.06,blending:Ei,depthWrite:!1,side:Kn}));k.set(P,37,$),Z.set(Ve.x-f*6,0,Ve.z-T*4);let Le=k.distanceTo(Z);ae.position.copy(k),ae.scale.set(1,Le,1),ae.quaternion.setFromUnitVectors(ue,se.subVectors(Z,k).normalize()),at.add(ae)}for(let f of[-1,1])wn.push(I(Ve.x+f*23.5,10,Ve.z,1,9,15,"#1a1638"));wn.push(I(Ve.x+41.2,13,Ve.z,1,13,24,"#1a1638")),n(ei,!0),n(wn),Ze(zi);let Ai=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#ffffff","#8a3fe2","#ff8a4a"].map(t),zn=new on(s(),new Xt,cs.length);zn.frustumCulled=!1,e.add(zn),cs.forEach((f,T)=>zn.setColorAt(T,Ai[T%Ai.length]));let Un=nt(1024,512),tt=Un.g,Hr=Un.tex,hs=null,Tn=null,kr=null,gi=-9,Pa=new Ut({map:Hr,toneMapped:!1,color:new Ue(1.25,1.25,1.25)}),Gl=[];for(let f of[-1,1]){let T=new _t(new li(14,7),Pa);T.position.set(Ve.x+f*22.9,14.5,Ve.z),T.rotation.y=f>0?-Math.PI/2:Math.PI/2,e.add(T),Gl.push(T)}let Ri=new _t(new li(23,11.5),Pa);Ri.position.set(Ve.x+41.8,19.5,Ve.z),Ri.rotation.y=Math.PI/2,e.add(Ri),Ri.userData={kind:"arena"};function Fs(f,T,P,$,ae){tt.fillStyle="rgba(255,255,255,.06)",L(tt,f,T,296,168,22),tt.fill(),tt.fillStyle=ae,tt.fillRect(f+22,T+22,34,6),tt.fillStyle="rgba(220,214,255,.8)",tt.font="800 23px Inter, sans-serif",tt.textAlign="left",tt.fillText(P,f+22,T+60),tt.fillStyle="#fff",tt.font="900 76px Inter, sans-serif",tt.fillText($,f+20,T+140)}function La(){let f=hs||{};tt.fillStyle="#07041a",tt.fillRect(0,0,1024,512);let T=tt.createLinearGradient(0,0,1024,0);T.addColorStop(0,"#2f3fe4"),T.addColorStop(.5,"#8a3fe2"),T.addColorStop(1,"#ff4f9e"),tt.fillStyle=T,tt.fillRect(0,0,1024,70),tt.fillStyle="#fff",tt.font="900 34px Inter, sans-serif",tt.textAlign="left",tt.fillText("VICE ARENA",30,47),tt.textAlign="right",tt.font="800 24px Inter, sans-serif",tt.fillText("\u25CF LIVE FROM PUMP.FUN",994,45),Fs(24,96,"NEW COINS / MIN",f.perMin==null?"\u2014":String(f.perMin),"#ffd23f"),Fs(364,96,"MIGRATED \xB7 YOU SAW",f.migrated==null?"\u2014":String(f.migrated),"#5fc8ff"),Fs(704,96,"MOOD",f.mood==null?"\u2014":Math.round(f.mood*100)+"%",f.mood!=null&&f.mood>=.5?"#2ee6a6":"#ff4f9e");let P=f.hot;tt.fillStyle="rgba(255,255,255,.06)",L(tt,24,290,976,196,26),tt.fill(),P?(tt.save(),tt.beginPath(),tt.arc(124,388,74,0,Ki),tt.clip(),Tn?tt.drawImage(Tn,50,314,148,148):H(tt,124,388,74,P.symbol,P.mint),tt.restore(),tt.textAlign="left",tt.fillStyle="#2ee6a6",tt.font="900 26px Inter, sans-serif",tt.fillText("#1 HOTTEST RIGHT NOW",226,352),tt.fillStyle="#fff",tt.font="900 78px Inter, sans-serif",tt.fillText(Oe(tt,"$"+P.symbol,520),222,432),tt.textAlign="right",tt.fillStyle=(P.chg||0)>=0?"#2ee6a6":"#ff4f9e",tt.font="900 64px Inter, sans-serif",tt.fillText(P.chg==null?"":(P.chg>0?"+":"")+P.chg.toFixed(1)+"%",976,420),tt.fillStyle="rgba(220,214,255,.75)",tt.font="800 22px Inter, sans-serif",tt.fillText(P.tf?"in "+P.tf:"",976,458)):(tt.textAlign="center",tt.fillStyle="rgba(255,255,255,.7)",tt.font="800 34px Inter, sans-serif",tt.fillText("Waiting for the trenches\u2026",512,400)),Hr.needsUpdate=!0}La();function Wl(f){hs=f;let T=f&&f.hot;T&&T.mint!==kr&&(kr=T.mint,Tn=null,M(T.iconUrl,P=>{kr===T.mint&&(Tn=P,La())})),Ri.userData=T?{kind:"coin",key:T.mint,coin:T}:{kind:"arena"},performance.now()-gi>900&&(gi=performance.now(),La())}let Ia=[];for(let f=0;f<9;f++){let T=-318+C()*88,P=196+C()*80;Ia.push(I(T,0,P,.2,4,.2,"#f4f0ff"),I(T+.6,3.1,P,1.2,.8,.1,f%2?"#ff4f6e":"#ffd23f"))}Ia.push(I(-240,0,188,14,5,9,"#f4f0ff"),I(-240,5,188,15,.8,10,"#3a5ae0")),n(Ia,!0);for(let f=0;f<(z?8:18);f++)De(-324+C()*100,180+C()*100,.9+C()*.5);let yn=nn.hwyX,Dt=nn.hwyZ,ti=[],mr=[],us="#3a3654",Ci="#8a84a8",zs="#c8c4dc",Dn=z?-460:-640,Bs=z?460:640;for(let f=Dn;f<Bs;f+=12)ti.push(I(yn,7,f+6,15,1,12.1,us),I(yn-7.3,8,f+6,.4,.9,12.1,zs),I(yn+7.3,8,f+6,.4,.9,12.1,zs),I(yn,8,f+6,.5,.7,12.1,zs));for(let f=Dn+6;f<Bs;f+=24)Math.abs(f-Dt)<9||(ti.push(I(yn,0,f,2.2,7,2.2,Ci),I(yn,6.2,f,12,.8,2.4,Ci)),Ie.push([yn,f,1.7]));for(let f=Dn+18;f<Bs;f+=36)ti.push(I(yn,8,f,.3,6.5,.3,"#2a2648")),mr.push(I(yn,14.4,f,2.6,.3,.7,W(3.6,2.4,1.2)));for(let f=Dn;f<140;f+=12)ti.push(I(f+6,13,Dt,12.1,1,15,us),I(f+6,14,Dt-7.3,12.1,.9,.4,zs),I(f+6,14,Dt+7.3,12.1,.9,.4,zs),I(f+6,14,Dt,12.1,.7,.5,zs));for(let f=Dn+6;f<48;f+=24)Math.abs(f-yn)<10||(ti.push(I(f,0,Dt,2.2,13,2.2,Ci),I(f,12.2,Dt,2.4,.8,12,Ci)),Ie.push([f,Dt,1.7]));for(let f=Dn+18;f<140;f+=36)ti.push(I(f,14,Dt,.3,6.5,.3,"#2a2648")),mr.push(I(f,20.4,Dt,.7,.3,2.6,W(3.6,2.4,1.2)));ti.push(I(155,6.75,Dt,32.5,1,15,us,0,0,-.395),I(186,1.4,Dt,32,.12,12,"#2a2840"));for(let f of[56,92,128])ti.push(I(f,-1,Dt,3,14,7,Ci)),Ie.push([f,Dt-2,2.4],[f,Dt+2,2.4]);let gr=[72,108],Ua=[];for(let f of gr){for(let T of[-1,1])ti.push(I(f,-1,Dt+T*8.6,2.4,55,2.4,"#e8e4f4"));ti.push(I(f,11.4,Dt,2.4,1.6,19.6,"#e8e4f4"),I(f,40,Dt,2,1.4,19.6,"#e8e4f4"),I(f,52.6,Dt,2.4,1.6,19.6,"#e8e4f4")),mr.push(I(f,54.2,Dt-8.6,.6,.6,.6,W(5,.3,.3)),I(f,54.2,Dt+8.6,.6,.6,.6,W(5,.3,.3)));for(let T of[-1,1])for(let P of[-1,1])for(let $=1;$<=4;$++)Ua.push([f,50-$*1.8,Dt+T*8.6,f+P*$*7.6,14.3,Dt+T*7.1])}mr.push(I(94,13.15,Dt-7.7,92,.25,.25,W(.5,2.2,3.6)),I(94,13.15,Dt+7.7,92,.25,.25,W(.5,2.2,3.6)),I(94,12.7,Dt,92,.22,10,W(2.6,.5,1.8))),n(ti),Ze(mr);let Vr=new on(s(),new Ut({color:new Ue(1.5,1.45,1.8),toneMapped:!1}),Ua.length);Vr.frustumCulled=!1,Ua.forEach(([f,T,P,$,ae,Le],lt)=>{k.set(f,T,P),Z.set($,ae,Le);let Qe=k.distanceTo(Z);S.setFromUnitVectors(re,se.subVectors(Z,k).normalize()),O.compose(R.addVectors(k,Z).multiplyScalar(.5),S,F.set(.16,.16,Qe)),Vr.setMatrixAt(lt,O)}),at.add(Vr);let $i=j([[yn+3.4,8,Dn-12],[yn+3.4,8,Bs+12],[yn-3.4,8,Bs+12],[yn-3.4,8,Dn-12]]),vo=j([[Dn-12,14,Dt+3.4],[140,14,Dt+3.4],[170,1.55,Dt+3.4],[198,1.55,Dt+3.4],[201.4,1.55,Dt],[198,1.55,Dt-3.4],[170,1.55,Dt-3.4],[140,14,Dt-3.4],[Dn-12,14,Dt-3.4]]),Hs=z?30:64,xr=z?24:50,ks=Hs+xr,_r=vt([["body",[0,.75,0],[1.9,1.1,4.2],null],["cab",[0,1.55,-.3],[1.6,.6,2.1],"#1a1638"],["head",[0,.75,2.12],[1.5,.22,.1],W(4.5,4.2,3.6),!0],["tail",[0,.8,-2.12],[1.5,.22,.1],W(3.4,.2,.3),!0]],ks),fs=[];for(let f=0;f<ks;f++){let T=f<Hs,P=T?$i:vo,$=T?Hs:xr,ae=T?f:f-Hs,Le=C()<.16;fs.push({pa:P,d:(ae+C()*.45)/$*P.len,sc:Le?1.5:1,sp:T?24:20}),_r.paint("body",f,le(Le?[t("#ffd23f"),t("#f4f0ff"),t("#2ee6a6")]:ee))}let Vn=nn.metro,Bn=Vn.y,Gn=j($e(Vn.x0,Vn.x1,Vn.z0,Vn.z1,Vn.r,Bn,6)),ji=[],Vs=[];for(let f=0;f<Gn.len;f+=6){Gt(Gn,f+3);let T=Math.cos(xe.yaw),P=Math.sin(xe.yaw);ji.push(I(xe.x,Bn-1,xe.z,7.8,.9,6.4,"#5a5480",xe.yaw));for(let $ of[-2.65,-1.15,1.15,2.65])ji.push(I(xe.x+$*T,Bn-.1,xe.z-$*P,.22,.22,6.4,"#c8c4dc",xe.yaw));Vs.push(I(xe.x+3.95*T,Bn-.95,xe.z-3.95*P,.18,.26,6.4,W(3.2,.5,2),xe.yaw),I(xe.x-3.95*T,Bn-.95,xe.z+3.95*P,.18,.26,6.4,W(.5,2.2,3.4),xe.yaw))}for(let f=0;f<Gn.len;f+=18)Gt(Gn,f),!(xe.x>60&&Math.abs(xe.z-h)<7)&&(ji.push(I(xe.x,0,xe.z,1.6,Bn-1.8,1.6,"#8a84a8",xe.yaw),I(xe.x,Bn-2,xe.z,7,1,1.8,"#8a84a8",xe.yaw)),Ie.push([xe.x,xe.z,1.3]));let ds=[W(3.4,.5,1.8),W(.5,2.2,3.4),W(3.4,2.6,.5),W(2.2,.6,3.4)];[[-11,Vn.z0,Math.PI/2],[Vn.x1,-20,0],[-11,Vn.z1,Math.PI/2],[Vn.x0,0,0]].forEach(([f,T,P],$)=>{let ae=Math.cos(P),Le=Math.sin(P);for(let lt of[-5.6,5.6])ji.push(I(f+lt*ae,Bn-1.2,T-lt*Le,3.4,1.2,26,"#bdb6e0",P));ji.push(I(f,Bn+3.4,T,14.6,.5,24,"#8f86b8",P));for(let lt of[-6.6,6.6])for(let Qe of[-10,0,10])ji.push(I(f+lt*ae+Qe*Le,Bn,T-lt*Le+Qe*ae,.3,3.4,.3,"#8a84a8",P));for(let lt of[-7.3,7.3])Vs.push(I(f+lt*ae,Bn+3.4,T-lt*Le,.25,.5,24,ds[$],P))}),n(ji),Ze(Vs);let Qi=5,Gs=vt([["body",[0,1.7,0],[2.8,2.6,7.2],"#e8e6f4"],["roof",[0,3.15,0],[2.4,.4,6.8],"#a8a4c4"],["win",[0,2.15,0],[2.9,.7,6.4],W(2.6,2.1,1.5),!0],["stripe",[0,1.05,0],[2.9,.28,7],null,!0]],Qi*2);for(let f=0;f<Qi*2;f++)Gs.paint("stripe",f,f<Qi?W(3.4,.5,1.8):W(.5,2.2,3.4));let Hn=nn.isle,ps=[],ms=[],gs=[];for(let f=-Hn.r+1;f<Hn.r;f+=2){let T=Math.sqrt(Hn.r*Hn.r-f*f);ps.push(I(Hn.x,-1.4,Hn.z+f,T*2,2.2,2.05,"#e8cc98")),T>6&&ps.push(I(Hn.x-.5,.8,Hn.z+f,(T-4.5)*2,.6,2.05,"#2fa86a"))}for(let f=0;f<8;f++){let T=f/8*Ki+.3,P=Hn.x+Math.cos(T)*25,$=Hn.z+Math.sin(T)*24;if(P<Hn.x-12&&Math.abs($-Dt)<16)continue;let ae=le(xt),Le=Math.PI/2-T;ms.push(I(P,1.4,$,11,3.6,8,"#f4f2fb",Le),I(P-Math.cos(T)*1.2,5,$-Math.sin(T)*1.2,7,3.2,6,ae,Le)),ke.push(I(P+Math.cos(T)*7.5,1.42,$+Math.sin(T)*7.5,6,.16,3,W(.16,.9,1.3),Le)),Ge(P+Math.cos(T+1.1)*8,$+Math.sin(T+1.1)*8,.9,1.4),z||Ge(P+Math.cos(T-1.1)*8,$+Math.sin(T-1.1)*8,.8,1.4)}for(let f of[-.7,0,.7]){let T=Math.PI/2-f,P=Hn.x+Math.cos(f)*45,$=Hn.z+Math.sin(f)*45,ae=-Math.sin(f)*3.2,Le=Math.cos(f)*3.2;ps.push(I(P,-.2,$,2.2,.6,12,"#9a6a48",T)),gs.push(I(P+ae,-.4,$+Le,2.8,1.8,9,"#f4f2fb",T),I(P+ae,1.4,$+Le,2,1.2,4.4,"#2a2648",T))}for(let[f,T,P]of[[246,-30,7],[236,-152,9],[178,236,6]]){for(let $=-P+1;$<P;$+=2){let ae=Math.sqrt(P*P-$*$);ps.push(I(f,-1.4,T+$,ae*2,2.1,2.05,"#e8cc98"))}Ge(f+1,T,.9,.7),P>7&&Ge(f-2,T+2,.7,.7)}n(ps),n(ms,!0),n(gs);let xi=new kn;e.add(xi);let Da=[I(0,-3,0,16,9,90,"#f4f2fb"),I(0,1.8,0,16.2,.8,90.2,"#2f3fe4"),I(0,-3,47,11,9,5,"#f4f2fb"),I(0,-3,51,6,8.6,3,"#f4f2fb")];for(let f=0;f<6;f++)Da.push(I(0,6+f*2.8,-5-f*2,14.4-f*1.3,2.8,72-f*9,f%2?"#e8e6f4":"#fbfaff"));Da.push(I(0,22.8,-26,5,8,7,"#c8324a"),I(0,22.8,18,11,2.6,6,"#e8e6f4")),it(Da,xi);let Na=[I(0,30.8,-26,5.2,.5,7.2,W(3.4,1,.6))];for(let f=0;f<6;f++){let T=14.4-f*1.3,P=72-f*9,$=-5-f*2,ae=6+f*2.8;for(let Le of[-1,1])Na.push(I(Le*(T/2+.06),ae+1,$,.1,.55,P-3,W(2.6,2,1.3)),I(Le*(T/2+.1),ae+2.6,$,.18,.18,P,f%2?W(3.2,.5,1.8):W(.5,2.2,3.4)))}for(let f of[-1,1])Na.push(I(f*8.06,-.6,0,.1,.5,84,W(2.4,1.9,1.2)));Ze(Na,xi);let Wn=0,Gr=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#ff8a4a","#c8a8ff","#f4f0ff"].map(t),vr=[];for(let f=-o+12.8;f<o-4;f+=9)for(let T of[58.4,64.4]){if(Math.abs(f-h)<7||Math.abs(f+40)<6||Math.abs(f-52)<6||C()<.3)continue;let P=f+(C()-.5)*1.5,$=le(Gr);vr.push(I(T,0,P,.2,2.8,.2,"#f4f0ff"),I(T,2.6,P,2.8,.3,2.8,$),I(T,2.9,P,1.5,.3,1.5,$),I(T+1.7,0,P+.3,1.1,.06,2.1,le(Gr)))}for(let f of[-57.5,-21.5,14.5,59.5]){let P=le(xt);for(let $ of[-.9,.9])for(let ae of[-.9,.9])vr.push(I(66.6+$,0,f+ae,.3,2.8,.3,"#f4f0ff"));vr.push(I(66.6,2.8,f,2.6,2,2.6,P),I(66.6,4.8,f,3.2,.3,3.2,"#ff4f6e"),I(66.6+1.3,4.8,f,.12,2.4,.12,"#f4f0ff"),I(66.6+1.8,6.5,f,1,.6,.08,"#ff4f6e"))}for(let f of[-40,52])vr.push(I(62,0,f-4,.2,2.6,.2,"#f4f0ff"),I(62,0,f+4,.2,2.6,.2,"#f4f0ff"),I(62,1.8,f,.06,.8,8,"#e8e4f4"));n(vr);let Ws=vt([["hull",[0,.45,0],[1.1,.6,2.6],null],["seat",[0,.9,-.3],[.6,.35,1.2],"#1a1638"],["rider",[0,1.5,-.1],[.5,.9,.4],null],["head",[0,2.15,-.1],[.36,.36,.36],"#f0c9a0"]],4),Wr=[[150,-48,12,18,.32,0],[158,-30,10,14,.38,2],[150,44,13,16,.3,4],[160,62,9,12,.36,1]];Wr.forEach((f,T)=>{Ws.paint("hull",T,le(Gr)),Ws.paint("rider",T,le(Gr))});let xs=vt([["hull",[0,.5,0],[2.4,1.2,6.6],"#f4f2fb"],["cab",[0,1.5,-.6],[1.8,1,2.2],"#2a2648"]],1),yo=vt([["c1",[-2.6,-.5,0],[2.4,.4,2.6],"#ff4f9e"],["c2",[0,0,0],[3,.4,2.6],"#ffd23f"],["c3",[2.6,-.5,0],[2.4,.4,2.6],"#5fc8ff"],["man",[0,-4.6,0],[.5,1,.4],"#2a2648"]],1),Xs=new on(s(),new Ut({color:new Ue(.8,.8,.9)}),2);Xs.frustumCulled=!1,e.add(Xs);let Xn=[];{for(let T=0;T<=16;T++){let P=-300+T/16*360;Xn.push([88,30,P])}for(let T=1;T<16;T++){let P=Math.PI-T/16*Math.PI;Xn.push([128+Math.cos(P)*40,30,60+Math.sin(P)*40])}for(let T=0;T<=16;T++)Xn.push([168,30,60-T/16*360]);for(let T=1;T<16;T++){let P=-T/16*Math.PI;Xn.push([128+Math.cos(P)*40,30,-300+Math.sin(P)*40])}}let Xr=j(Xn),Pi=vt([["body",[0,0,0],[1,1,6.4],"#f4f2fb"],["wing",[0,.3,.6],[10,.22,1.5],"#ff4f9e"],["stab",[0,.5,-2.9],[3,.18,.9],"#ff4f9e"],["fin",[0,1.1,-2.9],[.16,1.3,1],"#ff4f9e"],["prop",[0,0,3.3],[1.8,1.8,.06],W(.5,.5,.6),!0],["nav",[0,-.6,0],[.3,.3,.3],W(5,.4,.4),!0]],1),Mo=nt(1024,236),bt=Mo.tex,_s=new Ut({map:bt,toneMapped:!1,color:new Ue(1.15,1.15,1.15)}),Bi=new _t(new li(26,6),_s),qs=new _t(new li(26,6),_s);e.add(Bi),e.add(qs);let es=null,yr=null;function Ys(){let f=Mo.g,T=es;if(f.fillStyle="#ff4f9e",f.fillRect(0,0,1024,236),f.fillStyle="#fff6fb",f.fillRect(10,10,1004,216),!T){f.fillStyle="#2a1270",f.font="900 92px Inter, sans-serif",f.textAlign="center",f.fillText("VICE \xB7 THE TRENCHES",512,150),bt.needsUpdate=!0;return}f.save(),f.beginPath(),f.arc(118,118,88,0,Ki),f.clip(),yr?f.drawImage(yr,30,30,176,176):H(f,118,118,88,T.symbol,T.mint),f.restore(),f.textAlign="left",f.fillStyle="#ff2f8e",f.font="900 34px Inter, sans-serif",f.fillText("#1 TRENDING ON PUMP.FUN",232,68),f.fillStyle="#1a0a50",f.font="900 112px Inter, sans-serif",f.fillText(Oe(f,"$"+T.symbol,540),226,186),f.textAlign="right",f.fillStyle=(T.chg||0)>=0?"#10a070":"#e0306a",f.font="900 64px Inter, sans-serif",f.fillText(T.chg==null?"":(T.chg>0?"+":"")+T.chg.toFixed(0)+"%",1e3,120),f.fillStyle="#5a4a90",f.font="800 28px Inter, sans-serif",f.fillText(T.tf?"in "+T.tf:"",1e3,172),bt.needsUpdate=!0}Ys();function qr(f){if(!f)return;let T=es&&es.mint===f.mint;T&&es.chg===f.chg||(es=f,Bi.userData=qs.userData={kind:"coin",key:f.mint,coin:f},T||(yr=null,M(f.iconUrl,P=>{es&&es.mint===f.mint&&(yr=P,Ys())})),Ys())}let hi=Xs,sn=nt(256,256),qn=sn.g;{let f=qn.createRadialGradient(128,128,6,128,128,128);f.addColorStop(0,"rgba(255,244,252,1)"),f.addColorStop(.33,"rgba(255,232,248,1)"),f.addColorStop(.37,"rgba(255,170,224,.42)"),f.addColorStop(.6,"rgba(190,120,255,.14)"),f.addColorStop(1,"rgba(120,80,255,0)"),qn.fillStyle=f,qn.fillRect(0,0,256,256);for(let[T,P,$]of[[112,108,9],[146,134,7],[118,150,5],[140,100,4]])qn.fillStyle="rgba(232,196,236,.5)",qn.beginPath(),qn.arc(T,P,$,0,Ki),qn.fill();sn.tex.needsUpdate=!0}let Zs=new wi(new pi({map:sn.tex,transparent:!0,depthWrite:!1,toneMapped:!1,color:new Ue(1.7,1.6,1.7)}));Zs.position.copy(Ce(.82,.3,-.49).normalize().multiplyScalar(2100)),Zs.scale.setScalar(360),Zs.renderOrder=-1,e.add(Zs);let ts=[],ni=["#6a4a9a","#7a5aa8","#5a3a8a","#8a6ab8"].map(t);for(let f=0;f<(z?8:18);f++){let T=C()*Ki,P=280+C()*700,$=Math.cos(T)*P,ae=Math.sin(T)*P,Le=160+C()*90,lt=7+Math.floor(C()*6);for(let Qe=0;Qe<lt;Qe++)ts.push({x:$+(C()-.5)*40,y:Le+(C()-.5)*6,z:ae+(C()-.5)*22,w:10+C()*14,h:3+C()*3,d:8+C()*10,c:le(ni)})}let vs=new on(s(),new Xt({emissive:new Ue("#2a1450"),transparent:!0,opacity:.6,depthWrite:!1}),ts.length);vs.frustumCulled=!1,e.add(vs),ts.forEach((f,T)=>vs.setColorAt(T,f.c));let Li=new _t(s(),new Ut({color:new Ue(4,3.8,4.4),toneMapped:!1,transparent:!0,opacity:0,depthWrite:!1}));e.add(Li);let Mr=6,Js=0,en=new D,xn=new D,Eo=f=>-o+f*a-2,So=[],Oa=[],Ks=[];for(let f=1;f<c;f++)for(let T=1;T<=c;T++){let P=Eo(f),$=Eo(T);P>l-3||(So.push(I(P+2.5,0,$+2.5,.26,6,.26,"#2a2648"),I(P+1.9,5.85,$+1.9,1.5,.16,.16,"#2a2648",-Math.PI/4),I(P-2.5,0,$-2.5,.22,4.4,.22,"#1a1830"),I(P-2.5,4.2,$-2.5,.7,1.1,.7,"#141226")),Oa.push(I(P+1.35,5.62,$+1.35,.9,.24,.9,W(3.6,2.4,1.2))),Ks.push([P-2.5,$-2.5,C()*10]))}let Fa=[];for(let f of u)f.big&&Fa.push(I(f.x+f.w/2-.4,f.y,f.z+f.d/2-.4,.45,.45,.45,W(4,.3,.35)),I(f.x-f.w/2+.4,f.y,f.z-f.d/2+.4,.45,.45,.45,W(4,.3,.35)));for(let[f,T,P]of p)Fa.push(I(f,T,P,.5,.5,.5,W(4,.3,.35)));let ys=u.filter(f=>!f.big&&f.y>=8&&f.x<l-14),ns=[],Ms=[];for(let f=0;f<Math.min(z?18:40,ys.length);f++){let T=ys[Math.floor(C()*ys.length)],P=C()<.5?1:-1,$=3+C()*4,ae=2.4+C()*2;C()<.5?ns.push(I(T.x+P*(T.w/2+.3),ae,T.z+(C()-.5)*(T.d-3),.3,$,1,le(Ht))):ns.push(I(T.x+(C()-.5)*(T.w-3),ae,T.z+P*(T.d/2+.3),1,$,.3,le(Ht)))}for(let f of ys)if(C()<.12){let T=f.x+(C()-.5)*(f.w-4),P=f.z+(C()-.5)*(f.d-4);for(let $ of[-.8,.8])for(let ae of[-.8,.8])Ms.push(I(T+$,f.y,P+ae,.25,1.6,.25,"#5a3a28"));Ms.push(I(T,f.y+1.6,P,2.4,2.6,2.4,"#8a5a3a"),I(T,f.y+4.2,P,1.6,.6,1.6,"#6a4630"))}n(So),n(Ms),Ze(Oa);let $s=Ze(Ks.map(([f,T])=>I(f,5.3,T,.55,.14,.55,W(.3,3,1))),e),bo=Ze(Fa,e),za=Ze(ns),wo=ns.map(f=>f.c.clone());Ze(ke);let Hi=x.x,_i=x.z,ii=Hi-1.6,Ii=_i+1.6,ki=Hi+4.6,Es=_i-4.6,zt=22,_n=66,Yt=[I(Hi,0,_i,13.4,.1,13.4,"#6a5040")];for(let f of[-1,1])Yt.push(I(Hi+f*6.7,0,_i,.15,1.4,13.4,"#ff8a3a"),I(Hi,0,_i+f*6.7,13.4,1.4,.15,"#ff8a3a"));for(let f=0;f<3;f++)Yt.push(I(ki-.2,f*.7,_i+4.4,3,.6,3,"#a8a2c4"));Yt.push(I(ki,0,Es,1.6,_n,1.6,"#ffd23f"));for(let f=4;f<_n;f+=4)Yt.push(I(ki,f,Es,1.8,.3,1.8,"#e0b020"));n(Yt);let cn=[];for(let f=0;f<zt;f++){let T=f*2.6;cn.push(I(ii,T+2.1,Ii,9.4,.5,9.4,"#b8b2d4"),I(ii,T,Ii,3,2.1,3,"#9a94b8"));for(let P of[-1,1])for(let $ of[-1,1])cn.push(I(ii+P*4.2,T,Ii+$*4.2,.5,2.1,.5,"#8a84a8"))}let Vi=n(cn,!1,!1),Mn=3,ft=0,Yr=0,si=-1;Vi.count=Mn*6;let Er=new _t(s(),new Ut({color:new Ue(4,3.4,2.2),toneMapped:!1}));Er.scale.set(9.6,.25,.25),e.add(Er);let js=new kn;js.position.set(ki,_n,Es),e.add(js);let Ss=new Xt({color:"#ffd23f"}),Zr=new Xt({color:"#8a84a8"}),Ba=new Xt({color:"#2a2648"}),Nn=(f,T,P,$,ae,Le,lt)=>{let Qe=new _t(s(),f);return Qe.scale.set(T,P,$),Qe.position.set(ae,Le,lt),js.add(Qe),Qe};Nn(Ss,30,1.2,1.2,9,1.2,0),Nn(Ss,9,1,1,-8.5,1.2,0),Nn(Zr,3,2.6,2.4,-11.5,.6,0),Nn(Ba,2.4,2.4,2.4,0,-.6,1.6),Nn(Ss,.8,6,.8,0,4.2,0);let bs=Nn(Ba,1.6,.7,1.6,10,.3,0),Ha=Nn(Ba,.12,1,.12,10,-5,0),Xl=Nn(Zr,1.2,.8,1.2,10,-10,0),ka=Nn(new Xt({color:"#b8b2d4"}),3,.6,3,10,-11,0),Qs=new _t(s(),new Ut({color:new Ue(5,.3,.3),toneMapped:!1}));Qs.scale.setScalar(.5),Qs.position.set(23.8,1.9,0),js.add(Qs);let Va=(f,T)=>Math.atan2(-(T-Es),f-ki),m=[ki-.2,_i+4.4],_=Va(m[0],m[1]),b=Math.hypot(m[0]-ki,m[1]-Es),B=Va(ii,Ii),X=Math.hypot(ii-ki,Ii-Es),V=nt(512,220),q=-9,U=new wi(new pi({map:V.tex,transparent:!0}));U.position.set(Hi+3.8,8.5,_i+4.6),U.scale.set(7.6,3.25,1),e.add(U);function K(){let f=V.g;f.clearRect(0,0,512,220),f.fillStyle="rgba(10,5,32,.92)",L(f,6,6,500,208,28),f.fill(),f.strokeStyle="#ffd23f",f.lineWidth=5,L(f,6,6,500,208,28),f.stroke(),f.textAlign="center",f.fillStyle="#ffd23f",f.font="900 24px Inter, sans-serif",f.fillText(si>=0?"TOPPED OUT \xB7 A NEW ONE STARTS":"VICE TOWER \xB7 1 FLOOR PER LAUNCH",256,54),f.fillStyle="#fff",f.font="900 76px Inter, sans-serif",f.fillText(Yr.toLocaleString("en-US"),256,138),f.fillStyle="rgba(220,214,255,.85)",f.font="800 22px Inter, sans-serif",f.fillText("pump.fun launches since you arrived",256,182),V.tex.needsUpdate=!0}K();function me(){ft++,Yr++,performance.now()-q>700&&(q=performance.now(),K())}let He=d.position,rt=0,Rt=0,It=0,un=!1;function dn(f,T){pe.by.strobe.m.material.color.setScalar(Math.sin(T*9)>.7?1:.04),pe.by.bcn.m.material.color.setScalar(Math.sin(T*3.1)>.2?1:.05);for(let ie=0;ie<2;ie++){let ve=Math.min(.99999,Math.max(0,((T*34/Je+ie*.5)%1+1)%1));ot.getPointAt(ve,k),ot.getTangentAt(ve,Z);let Ke=Math.atan2(Z.x,Z.z),gt=-Math.asin(Math.max(-1,Math.min(1,Z.y))),wt=Ke-Ye[ie];wt=Math.atan2(Math.sin(wt),Math.cos(wt)),Ye[ie]=Ke,Lt[ie]+=(Math.max(-.6,Math.min(.6,-wt/Math.max(f,.001)*.9))-Lt[ie])*Math.min(1,f*3),pe.set(5+ie,k.x,Math.max(0,k.y),k.z,Ke,gt,Lt[ie])}if($t.length&&T-Vt>7){let ie=J.find(ve=>!At.some(Ke=>Ke.slot===ve));if(ie!=null){let ve=$t.shift();At.push({t:ve,slot:ie,s:0,v:0,sp:mn(ve)}),Vt=T}}for(let ie=At.length-1;ie>=0;ie--){let ve=At[ie];ve.v=Math.min(62,ve.v+6.5*f),ve.s+=ve.v*f;let Ke=Math.max(0,ve.s-170),gt=he.x0+22+ve.s,wt=Math.min(320,Ke*.22);pe.set(ve.slot,gt,wt,he.z,Math.PI/2,-Math.min(.21,Ke*.006)),ve.sp.position.set(gt,wt+10,he.z);let hn=Math.max(.42,Math.min(3.2,He.distanceTo(ve.sp.position)/90));ve.sp.scale.set(10.8*hn,3.86*hn,1),gt>1150&&(pe.hide(ve.slot),e.remove(ve.sp),ve.sp.material.map.dispose(),ve.sp.material.dispose(),At.splice(ie,1))}pe.flush();{let ie=Math.floor(T*14)%9;for(let ve=0;ve<7;ve++)kt.setColorAt(ve,Ae.setScalar(ve===6-ie?6:.04));kt.instanceColor.needsUpdate=!0}for(let ie=0;ie<ut;ie++){let ve=ne[ie],[Ke,gt,wt]=gn((T+ie*4.5)%18);O.compose(R.set(Ke,28.8,ve),S.identity(),F.set(3.4,1.6,4.4)),Ct.setMatrixAt(ie,O);let hn=28,ui=gt+.5;O.compose(R.set(Ke,(hn+ui)/2,ve),S,F.set(.14,Math.max(.01,hn-ui),.14)),Et.setMatrixAt(ie,O),O.compose(R.set(Ke,gt+.25,ve),S,F.set(2.9,.5,6.3)),St.setMatrixAt(ie,O),wt?O.compose(R.set(Ke,gt-1.29,ve),S,F.set(2.5,2.58,6.05)):O.copy(Me),qt.setMatrixAt(ie,O)}Ct.instanceMatrix.needsUpdate=Et.instanceMatrix.needsUpdate=St.instanceMatrix.needsUpdate=qt.instanceMatrix.needsUpdate=!0;for(let ie=0;ie<Jt;ie++)Gt(Qn,T*8+ie/Jt*Qn.len),mt.set(ie,xe.x,.6,xe.z,xe.yaw);mt.flush();for(let ie=0;ie<2;ie++){let ve=T*.09+ie*Math.PI,Ke=124+Math.cos(ve)*14,gt=-220+Math.sin(ve)*52,wt=Math.atan2(-Math.sin(ve)*14,Math.cos(ve)*52);Fi.set(ie,Ke,.1+Math.sin(T*1.6+ie)*.12,gt,wt),Math.random()<f*6&&v(R.set(Ke-Math.sin(wt)*3.6,.5,gt-Math.cos(wt)*3.6),se.set((Math.random()-.5)*1.4,.6,(Math.random()-.5)*1.4),[2.2,2.4,2.8],1,.3,2.5)}Fi.flush();for(let ie=0;ie<ks;ie++){let ve=fs[ie];ve.d+=ve.sp*f,Gt(ve.pa,ve.d),_r.set(ie,xe.x,xe.y,xe.z,xe.yaw,xe.pitch,0,ve.sc)}_r.flush();{let ie=T*15,ve=-T*15+Gn.len/2;for(let Ke=0;Ke<Qi;Ke++){Gt(Gn,ie-Ke*7.7);let gt=Math.cos(xe.yaw),wt=Math.sin(xe.yaw);Gs.set(Ke,xe.x+1.9*gt,Bn-.1,xe.z-1.9*wt,xe.yaw),Gt(Gn,ve+Ke*7.7),gt=Math.cos(xe.yaw),wt=Math.sin(xe.yaw),Gs.set(Qi+Ke,xe.x-1.9*gt,Bn-.1,xe.z+1.9*wt,xe.yaw+Math.PI)}Gs.flush()}Wr.forEach(([ie,ve,Ke,gt,wt,hn],ui)=>{let ws=T*wt+hn,Ga=ie+Ke*Math.sin(ws),Wa=ve+gt*Math.sin(2*ws),To=Ke*wt*Math.cos(ws),zf=2*gt*wt*Math.cos(2*ws),ql=Math.atan2(To,zf);Ws.set(ui,Ga,.1+Math.abs(Math.sin(T*5+ui))*.12,Wa,ql,-.05,Math.max(-.4,Math.min(.4,-Math.sin(2*ws)*.4))),Math.random()<f*12&&v(R.set(Ga-Math.sin(ql)*1.4,.45,Wa-Math.cos(ql)*1.4),se.set((Math.random()-.5)*1.6,.9+Math.random()*.6,(Math.random()-.5)*1.6),[2.4,2.6,3],.8,.26,2.6)}),Ws.flush();{let ie=T*.06,ve=186+Math.sin(ie)*10,Ke=-10+Math.sin(ie*2)*70,gt=Math.cos(ie)*10,wt=Math.cos(ie*2)*140,hn=Math.atan2(gt,wt),ui=Math.sin(hn),ws=Math.cos(hn);xs.set(0,ve,.1,Ke,hn),xs.flush();let Ga=ve-ui*26,Wa=24+Math.sin(T*.7)*1.2,To=Ke-ws*26;yo.set(0,Ga,Wa,To,hn,0,Math.sin(T*.9)*.08),yo.flush(),k.set(ve-ui*3,1.4,Ke-ws*3),Z.set(Ga,Wa-4,To),S.setFromUnitVectors(re,se.subVectors(Z,k).normalize()),O.compose(R.addVectors(k,Z).multiplyScalar(.5),S,F.set(.07,.07,k.distanceTo(Z))),Xs.setMatrixAt(0,O),Math.random()<f*8&&v(R.set(ve-ui*3.4,.5,Ke-ws*3.4),se.set((Math.random()-.5)*1.4,.7,(Math.random()-.5)*1.4),[2.2,2.4,2.8],1,.3,2.5)}{let ie=T*16;Gt(Xr,ie);let ve=xe.x,Ke=xe.z,gt=xe.yaw;Pi.set(0,ve,30+Math.sin(T*.8)*.6,Ke,gt,0,0),Pi.flush(),Gt(Xr,ie-27,ze);let wt=29.4+Math.sin(T*.8-.4)*.6;Bi.position.set(ze.x,wt,ze.z),Bi.rotation.set(0,ze.yaw-Math.PI/2,Math.sin(T*2.2)*.03),qs.position.copy(Bi.position),qs.rotation.set(0,ze.yaw+Math.PI/2,-Math.sin(T*2.2)*.03),Gt(Xr,ie-14,ze),k.set(ve-Math.sin(gt)*3.2,30,Ke-Math.cos(gt)*3.2),Z.set(ze.x,wt+.4,ze.z),S.setFromUnitVectors(re,se.subVectors(Z,k).normalize()),O.compose(R.addVectors(k,Z).multiplyScalar(.5),S,F.set(.06,.06,k.distanceTo(Z))),hi.setMatrixAt(1,O),hi.instanceMatrix.needsUpdate=!0}{let ie=-26*Math.sin(Wn),ve=420*Math.cos(Wn);Wn+=f*6/Math.max(1,Math.hypot(ie,ve));let Ke=300+26*Math.cos(Wn),gt=420*Math.sin(Wn),wt=Math.atan2(ie,ve);xi.position.set(Ke,Math.sin(T*.5)*.15,gt),xi.rotation.y=wt,Math.random()<f*10&&v(R.set(Ke-Math.sin(wt)*46+(Math.random()-.5)*8,.6,gt-Math.cos(wt)*46),se.set((Math.random()-.5)*2,.8,(Math.random()-.5)*2),[2.2,2.4,2.8],1.4,.45,2)}if((rt=(rt+1)%2)===0){let ie=T*2.1;cs.forEach((ve,Ke)=>{let gt=Math.max(0,Math.sin(ve.a*2-ie))**6*.9;O.compose(R.set(ve.x,ve.y+.5+gt,ve.z),S.identity(),F.set(.55,.9,.55)),zn.setMatrixAt(Ke,O)}),zn.instanceMatrix.needsUpdate=!0}for(let ie=0;ie<Ks.length;ie++){let ve=(T+Ks[ie][2])%10;$s.setColorAt(ie,ve<4.2?Ae.setRGB(.3,3.4,1.1):ve<5?Ae.setRGB(3.6,2.4,.3):Ae.setRGB(3.6,.3,.35))}$s.instanceColor.needsUpdate=!0,bo.material.color.setScalar(Math.sin(T*2.6)>.35?1:.07);for(let ie=0;ie<ns.length;ie+=5){let ve=(T*1.7+ie*.37)%7,Ke=ve>3.1&&ve<3.2||ve>3.35&&ve<3.5?.15:1;za.setColorAt(ie,Ae.copy(wo[ie]).multiplyScalar(Ke))}za.instanceColor.needsUpdate=!0;for(let ie=0;ie<yt;ie++){let[ve,Ke,gt]=Te[ie];for(let wt=0;wt<dt;wt++){let hn=(T*.15+wt/dt+ie*.37)%1,ui=(.9+hn*3.4)*(hn>.85?(1-hn)/.15:1);O.compose(R.set(ve+hn*8,Ke+.8+hn*16,gt+hn*2.5),S.setFromEuler(oe.set(hn*2,ie+hn,0)),F.setScalar(Math.max(.01,ui))),pt.setMatrixAt(ie*dt+wt,O)}}if(pt.instanceMatrix.needsUpdate=!0,ts.forEach((ie,ve)=>{ie.x+=f*3,ie.x>1e3&&(ie.x-=2e3),O.compose(R.set(ie.x,ie.y,ie.z),S.identity(),F.set(ie.w,ie.h,ie.d)),vs.setMatrixAt(ve,O)}),vs.instanceMatrix.needsUpdate=!0,Mr-=f,Mr<=0){Mr=9+Math.random()*12,Js=1;let ie=Math.random()*Ki;xn.set(Math.cos(ie)*1500,420+Math.random()*200,Math.sin(ie)*1500),en.set(Math.cos(ie+2)*900,-160,Math.sin(ie+2)*900)}for(Js>0?(Js=Math.max(0,Js-f*1.6),xn.addScaledVector(en,f),Li.position.copy(xn),S.setFromUnitVectors(re,se.copy(en).normalize()),Li.quaternion.copy(S),Li.scale.set(1.4,1.4,70),Li.material.opacity=Js,Li.visible=!0):Li.visible=!1,Rt+=f*(z?14:30);Rt>=1;)Rt--,v(R.set(fe.x+(Math.random()-.5)*.4,2.2,fe.z+(Math.random()-.5)*.4),se.set((Math.random()-.5)*2.4,11+Math.random()*4,(Math.random()-.5)*2.4),[1.3,2.2,3.2],1.6,.3,.4);It+=f;let P=It%9,$=Mn*2.6,ae=Math.max($,4)+6,Le=_,lt=b,Qe=ae,ct=!1;if(P<1.6)Qe=ae+(2.4-ae)*Wt(P/1.6);else if(P<2.1)Qe=2.4,ct=P>1.85;else if(P<3.6)Qe=2.4+(ae-2.4)*Wt((P-2.1)/1.5),ct=!0;else if(P<5.6){let ie=Wt((P-3.6)/2);Le=_+(B-_)*ie,lt=b+(X-b)*ie,ct=!0}else if(P<6.6)Le=B,lt=X,Qe=ae+($+.55-ae)*Wt(P-5.6),ct=!0;else if(P<7)Le=B,lt=X,Qe=$+.55,ct=P<6.8;else if(P<8)Le=B,lt=X,Qe=$+.55+(ae-$-.55)*Wt(P-7);else{let ie=Wt(P-8);Le=B+(_-B)*ie,lt=X+(b-X)*ie}if(P>=6.8&&P<7&&!un&&(un=!0,si<0&&ft>0)){let ie=Math.min(ft,3);ft-=ie,Mn=Math.min(zt,Mn+ie),Vi.count=Mn*6;for(let ve=0;ve<26;ve++)v(R.set(ii+(Math.random()-.5)*8,Mn*2.6+1,Ii+(Math.random()-.5)*8),se.set((Math.random()-.5)*6,3+Math.random()*5,(Math.random()-.5)*6),[3.6,2.6,.5],1,.4,1.6);if(Mn>=zt){si=T,K();for(let ve=0;ve<120;ve++){let Ke=Math.random()*Ki,gt=Math.acos(2*Math.random()-1),wt=14+Math.random()*8;v(R.set(ii,Mn*2.6+4,Ii),se.set(Math.sin(gt)*Math.cos(Ke)*wt,Math.abs(Math.cos(gt))*wt+4,Math.sin(gt)*Math.sin(Ke)*wt),ve%3?[3.6,2.6,.5]:[3.4,.6,2],1.8,.7,1.4)}}}P<6.8&&(un=!1),si>=0&&T-si>7&&(si=-1,Mn=3,Vi.count=Mn*6,K());let Pt=_n-Qe;js.rotation.y=Le,bs.position.x=lt,Ha.position.set(lt,-(Pt-1)/2,0),Ha.scale.y=Math.max(.1,Pt-1),Xl.position.set(lt,-Pt+.6,0),ka.position.set(lt,-Pt-.2,0),ka.visible=ct,Er.position.set(ii,$+.4,Ii),Qs.visible=Math.sin(T*3)>0}return{step:dn,takeoff:bn,setBanner:qr,setArena:Wl,launched:me,shots:{site:()=>[Ce(Hi+34,62,_i-52),Ce(ii,Math.max(12,Mn*2.6*.55),Ii)],airport:()=>[Ce(-232,30,-214),Ce(-350,6,-280)],arena:()=>[Ce(Ve.x+44,66,Ve.z+64),Ce(Ve.x,4,Ve.z)],port:()=>[Ce(130,46,-122),Ce(52,8,-222)],bridge:()=>[Ce(26,36,176),Ce(108,22,122)],beach:()=>{let f=Bi.position,T=f.x<128;return[Ce(f.x+(T?-46:-40),38,f.z+(T?-30:30)),Ce(f.x,27,f.z)]}},glowG:at,tower:()=>({x:ii,y:Mn*2.6,z:Ii}),bannerPos:()=>Bi.position,posts:Ie,pickables:()=>{let f=[Bi,qs,Ri];for(let T of At)f.push(T.sp);return f}}}var ls=(i,e,t)=>Math.max(e,Math.min(t,i)),Vl=(i,e,t)=>{let n=ls((t-i)/(e-i),0,1);return n*n*(3-2*n)},jx=(i,e,t)=>{let n=e-i;return n=Math.atan2(Math.sin(n),Math.cos(n)),i+n*t};function Of(i){let{scene:e,cam:t,canvas:n,target:s,HALF:r,PITCH:o,BLK:a,BEACH_X:c,zones:l,homeLot:h,WHEEL:u,helis:p,cars:x,more:y,mobile:v,hotMint:g}=i,d=new Os(1,1,1),L=new kn;e.add(L);let M=J=>new Xt({color:J}),H=(J,pe,ge)=>new Ut({color:new Ue(J,pe,ge),toneMapped:!1}),C=(J,pe,ge,ot,Je,Ye,Lt)=>{let At=new _t(d,J);return At.scale.set(pe,ge,ot),At.position.set(Je,Ye,Lt),L.add(At),At},z=M("#ff2f8e"),O=M("#160c3a");C(z,2.3,.62,4.8,0,.72,0),C(z,2.1,.26,1.5,0,1.12,1.35),C(O,1.92,.62,2.2,0,1.3,-.35),C(z,1.98,.12,2.1,0,1.66,-.35),C(M("#1a1030"),2.3,.12,.5,0,1.3,-2.3),C(M("#1a1030"),.14,.4,.3,.8,1.06,-2.3),C(M("#1a1030"),.14,.4,.3,-.8,1.06,-2.3);for(let[J,pe]of[[1.13,1.55],[-1.13,1.55],[1.13,-1.55],[-1.13,-1.55]])C(M("#0c0a14"),.42,.78,.8,J,.39,pe);C(H(4.6,4.3,3.8),.52,.18,.08,.72,.84,2.42),C(H(4.6,4.3,3.8),.52,.18,.08,-.72,.84,2.42),C(H(4,.3,.55),1.9,.14,.08,0,.92,-2.42);let ce=(J,pe,ge)=>{let ot=document.createElement("canvas");ot.width=ot.height=128;let Je=ot.getContext("2d"),Ye=Je.createRadialGradient(64,64,4,64,64,64);Ye.addColorStop(0,`rgba(${J},${pe},${ge},1)`),Ye.addColorStop(.45,`rgba(${J},${pe},${ge},.35)`),Ye.addColorStop(1,`rgba(${J},${pe},${ge},0)`),Je.fillStyle=Ye,Je.fillRect(0,0,128,128);let Lt=new ci(ot);return Lt.colorSpace=Zt,Lt},S=(J,pe,ge,ot,Je)=>{let Ye=new _t(new li(pe,ge).rotateX(-Math.PI/2),new Ut({map:J,transparent:!0,depthWrite:!1,blending:Ei,toneMapped:!1,color:new Ue(Je,Je,Je)}));return Ye.position.set(0,.08,ot),Ye.renderOrder=2,L.add(Ye),Ye};S(ce(255,60,200),5,7.6,0,1.5);let R=S(ce(255,236,200),8,15,10.5,.9),F={x:-80,z:7,yaw:Math.PI/2,v:0,steer:0};function oe(){L.position.set(F.x,0,F.z),L.rotation.set(0,F.yaw,0),L.rotateZ(-F.steer*ls(F.v/40,-1,1)*.07)}let[Ae,k]=h,Z=[[-423,-293,-213,-195],[-268,-256,-210,-198],[-242,-210,-214,-196],[-487,-433,-224,-200],[-504,-480,-240,-232],[-422,-298,-247,-220],[-248,-232,182,194],[-98,-54,158,194]];function se(J,pe){for(let[Ye,Lt,At]of y.posts)if((J-Ye)*(J-Ye)+(pe-Lt)*(pe-Lt)<At*At)return!1;if(Math.hypot(J,pe)>560||J>c+13.2||J>-40&&J<84&&pe>-292&&pe<-148)return!1;if(Math.abs(J)<=r&&Math.abs(pe)<=r){if(J>c+2.2||Math.abs(J-Ae)<7&&Math.abs(pe-k)<7)return!0;let Ye=((J+r)%o+o)%o,Lt=((pe+r)%o+o)%o;return Ye>=a-.15||Lt>=a-.15}if(J>c+2.2||Math.abs(J)<r+26&&Math.abs(pe)<r+26)return!0;for(let[Ye,Lt,At,$t]of Z)if(J>Ye&&J<Lt&&pe>At&&pe<$t)return!1;let ge=((J+2)%36+36)%36,ot=((pe+2)%36+36)%36;if(ge>=31.6||ot>=31.6)return!0;let Je=l.get(Math.floor((J+2)/36),Math.floor((pe+2)/36));return Je===Ft.lot||Je===Ft.ring||Je===Ft.hwy||Je===Ft.park||Je===Ft.golf||Je===Ft.air}let _e=(J,pe,ge,ot,Je)=>se(J,pe)&&se(J+ge*2.2*Je,pe+ot*2.2*Je)&&se(J+ot*1.1,pe-ge*1.1)&&se(J-ot*1.1,pe+ge*1.1),ue=Ae-9,re=Ae+9,Me=["streets","hot","drops","graduates","pulse","whales","safehouse","harbor","trending","x","roam"],Re=[[[-86,7],[-34,7]],[[-11,7],[-11,-21]],[[-11,-29],[-4,-29]],[[25,-29],[25,-112],[-184,-112],[-184,-280],[-222,-280]],[[-286,-280],[-286,-184],[-148,-184],[-148,26]],[[-148,32],[-100,32],[-100,25],[-29,25]],[[ue,25],[ue,k],[Ae-2,k]],[[re,k],[re,7],[64.5,7]],[[64.5,18]],[[64.5,28]],[[64.5,46]]],I=[],W=[],le=[],Ce=0;for(let J of Re){let pe=Ce;for(let ge of J)I.length&&(Ce+=Math.hypot(ge[0]-I[I.length-1][0],ge[1]-I[I.length-1][1])),I.push(ge);W.push(Ce),le.push(Ce-pe)}let xe=[0];for(let J=1;J<I.length;J++)xe.push(xe[J-1]+Math.hypot(I[J][0]-I[J-1][0],I[J][1]-I[J-1][1]));function ze(J,pe){J=ls(J,0,Ce);let ge=1;for(;ge<I.length-1&&xe[ge]<J;)ge++;let ot=I[ge-1],Je=I[ge],Ye=xe[ge]-xe[ge-1]||1,Lt=ls((J-xe[ge-1])/Ye,0,1);return pe[0]=ot[0]+(Je[0]-ot[0])*Lt,pe[1]=ot[1]+(Je[1]-ot[1])*Lt,pe}let at=[0,0],Ze=[0,0],it=J=>(ze(J-2.5,at),ze(J+2.5,Ze),Math.atan2(Ze[0]-at[0],Ze[1]-at[1])),vt=y.tower,j=new D,Gt={hot:()=>Ge&&Ge.pos?j.set(Ge.pos[0],1.2,Ge.pos[1]):null,drops:()=>{let J=vt();return j.set(J.x,Math.max(10,J.y*.7),J.z)},graduates:()=>j.set(-430,9,-280),pulse:()=>j.set(-178,18,32),whales:()=>p[0]?j.copy(p[0].g.position):null,safehouse:()=>j.set(Ae,2,k),harbor:()=>j.set(c+46,3,-6),trending:()=>j.copy(y.bannerPos()),x:()=>j.set(u.x,17,u.z)},$e=new D,nt=new D,Oe=new D,Ht=new D,xt=new D,A=new D,E=new D,ee=new D;function we(J,pe,ge,ot,Je,Ye=12,Lt=5.2){let At=Math.sin(ge),$t=Math.cos(ge);ot.set(J-At*Ye,Lt,pe-$t*Ye),Je.set(J+At*14,2.2,pe+$t*14)}let Ee={streets:"chase",hot:"front",drops:"road",graduates:"poi",pulse:"pulse",whales:"up",safehouse:"road",harbor:"beach",trending:"beach",x:"beach",roam:"chase"};function Se(J,pe,ge,ot,Je,Ye){let Lt=Me[J],At=Ee[Lt]||"chase",$t=Gt[Lt],Vt=$t&&$t(),mn=Math.sin(ot),bn=Math.cos(ot),In=bn,w=-mn;if(At==="chase"||!Vt&&At!=="pulse")return we(pe,ge,ot,Je,Ye);if(At==="front"){Je.set(pe-mn*8+In*1.4,3.9,ge-bn*8+w*1.4),Ye.set(pe+mn*7+In*1.4,2.6,ge+bn*7+w*1.4);return}if(At==="road"){Je.set(pe-mn*12,8.5,ge-bn*12),Ye.set(pe+(Vt.x-pe)*.5,2+(Vt.y-2)*.5,ge+(Vt.z-ge)*.5);return}if(At==="up"){Je.set(pe-mn*9,2.4,ge-bn*9),Ye.set(Vt.x,Vt.y,Vt.z);return}if(At==="pulse"){Je.set(pe+7,8,ge-9),Ye.set(-174,15,32);return}if(At==="beach"){Je.set(c+2.8,Vt.y>20?13:22,ge+(Vt.z>ge?-9:9)),Ye.set(pe+(Vt.x-pe)*.6,1.5+(Vt.y-1.5)*.6,ge+(Vt.z-ge)*.6);return}let Y=Vt.x-pe,Q=Vt.z-ge,ne=Math.hypot(Y,Q)||1;Y/=ne,Q/=ne;let te=13+Math.min(10,ne*.06),Fe=5+Math.min(16,Math.max(0,Vt.y-6)*.4);Je.set(pe-Y*te-Q*4,Fe,ge-Q*te+Y*4),Ye.set(pe+(Vt.x-pe)*.55,2+(Vt.y-2)*.55,ge+(Vt.z-ge)*.55)}let ke=[0,0];function Ie(J){let pe=Me.length;J=ls(J,0,pe-1);let ge=Math.floor(J),ot=Math.min(pe-1,ge+1),Je=J-ge,Ye=Vl(.12,.88,Je),Lt=W[ge]+(W[ot]-W[ge])*Ye;return ze(Lt,ke),{i:ge,j:ot,f:Je,d:Lt,x:ke[0],z:ke[1],yaw:it(Lt)}}function De(J){let pe=Ie(J);return F.x=pe.x,F.z=pe.z,F.yaw=pe.yaw,oe(),Se(J,pe.x,pe.z,pe.yaw,E,ee),[E.clone(),ee.clone()]}let Ge=null,et=null,de=!1;function Tt(J,pe){de=!0;let ge=Ie(J),ot=ge.d!==F.d;F.v=ot&&pe>0?ls(Math.abs(ge.d-(F.d??ge.d))/pe,0,400):0,F.d=ge.d,F.x=ge.x,F.z=ge.z,F.yaw=jx(F.yaw,ge.yaw,1-Math.exp(-pe*9)),F.steer=0,oe();let Je=Math.round(ls(J,0,Me.length-1)),Ye=Math.abs(J-Je)<.55,Lt=Ye&&{hot:"hot",drops:"new",graduates:"migrated"}[Me[Je]]||null;Lt!==et&&(et=Lt,Ge=null),et&&(!Ge||!Ge.coin||et==="hot"&&g&&g()&&Ge.coin.mint!==g())&&(Ge=N(et));let At=1-Vl(0,.3,ge.f),$t=Vl(.7,1,ge.f),Vt=Math.max(0,1-At-$t);Se(ge.i,ge.x,ge.z,F.yaw,$e,nt),Se(ge.j,ge.x,ge.z,F.yaw,Oe,Ht);let mn=ls((le[ge.j]-150)*.42,0,230)*Math.sin(Math.PI*Vl(.1,.9,ge.f));we(ge.x,ge.z,F.yaw,xt,A,12+mn*.55,5.2+mn),mn>1&&A.lerp(j.set(ge.x,0,ge.z),Math.min(1,mn/50)),E.set(0,0,0).addScaledVector($e,At).addScaledVector(Oe,$t).addScaledVector(xt,Vt),ee.set(0,0,0).addScaledVector(nt,At).addScaledVector(Ht,$t).addScaledVector(A,Vt),t.aspect<.8&&(E.y+=4,ee.lerp(j.set(ge.x,-6,ge.z),.55));let bn=1-Math.exp(-pe*3.4);t.position.lerp(E,bn),s.lerp(ee,bn),kt(46,pe)}function N(J){let pe=J==="hot"&&g&&g();if(pe){let Je=x.find(Ye=>Ye.coin&&!Ye.mine&&Ye.coin.mint===pe);if(Je)return Je}let ge=null,ot=-1/0;for(let Je of x){if(!Je.coin||Je.police||Je.mine)continue;let Ye=Je.coin,Lt=J==="hot"?Ye.cat!=="new"?Ye.heat||0:-1:J==="new"?Ye.cat==="new"?Ye.created||0:-1/0:Ye.cat==="migrated"?Ye.grad||0:-1/0;Lt>ot&&(ot=Lt,ge=Je)}return ot===-1/0?null:ge}function ye(J,pe){if(!de||J!==Ge||!et)return null;let ge=Math.sin(F.yaw),ot=Math.cos(F.yaw),Je=ot,Ye=-ge;return[F.x+Je*2.9+ge*.5,F.z+Ye*2.9+ot*.5,F.yaw-Math.PI/2,Math.abs(F.v||0)]}let Te={},be={x:0,y:0,on:!1},Be=null,yt=0,dt=0,pt=-9,fe=()=>{let J=document.activeElement;return J&&/INPUT|TEXTAREA|SELECT/.test(J.tagName)},G=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space"]);addEventListener("keydown",J=>{fe()||J.metaKey||J.ctrlKey||G.has(J.code)&&(Te[J.code]=!0,Pe&&J.code!=="ShiftLeft"&&J.code!=="ShiftRight"&&J.preventDefault(),he&&/^Key[WASD]$/.test(J.code)&&he())}),addEventListener("keyup",J=>{Te[J.code]=!1}),addEventListener("blur",()=>{for(let J in Te)Te[J]=!1}),n.addEventListener("pointerdown",J=>{!Pe||J.pointerType!=="mouse"||(Be=[J.clientX,J.clientY])}),addEventListener("pointermove",J=>{Be&&(yt-=(J.clientX-Be[0])*.006,dt=ls(dt+(J.clientY-Be[1])*.004,-.35,.9),Be=[J.clientX,J.clientY],pt=performance.now())}),addEventListener("pointerup",()=>{Be=null});let Pe=!1,he=null,We=document.createElement("div");We.className="joy",We.innerHTML="<i></i>",document.body.appendChild(We);let qe=We.firstChild;We.addEventListener("pointerdown",J=>{be.on=!0;try{We.setPointerCapture(J.pointerId)}catch{}ht(J),J.preventDefault()}),We.addEventListener("pointermove",J=>{be.on&&ht(J)});let Mt=()=>{be.on=!1,be.x=be.y=0,qe.style.transform=""};We.addEventListener("pointerup",Mt),We.addEventListener("pointercancel",Mt);function ht(J){let pe=We.getBoundingClientRect(),ge=pe.width/2;if(ge<4)return;let ot=(J.clientX-pe.left-ge)/ge,Je=(J.clientY-pe.top-ge)/ge,Ye=Math.hypot(ot,Je);Ye>1&&(ot/=Ye,Je/=Ye),be.x=ot,be.y=Je,qe.style.transform=`translate(${ot*ge*.55}px,${Je*ge*.55}px)`,he&&he()}function kt(J,pe){let ge=t.fov+(J-t.fov)*Math.min(1,pe*3);Math.abs(ge-t.fov)>.01&&(t.fov=ge,t.updateProjectionMatrix())}function ln(J){let pe=Te.KeyW||Te.ArrowUp||be.y<-.22,ge=Te.KeyS||Te.ArrowDown||be.y>.4,ot=Te.ShiftLeft||Te.ShiftRight,Je=(Te.KeyA||Te.ArrowLeft?1:0)-(Te.KeyD||Te.ArrowRight?1:0);be.on&&(Je=-be.x);let Ye=ot?58:36,Lt=ot?36:22;pe?F.v+=(F.v<0?42:Lt)*J:ge?F.v-=(F.v>0?46:14)*J:F.v-=Math.sign(F.v)*Math.min(Math.abs(F.v),10*J),F.v>Ye&&(F.v=Math.max(Ye,F.v-30*J)),F.v=ls(F.v,-13,60),Te.Space&&(F.v*=Math.max(0,1-J*3)),isFinite(Je)||(Je=0),F.steer+=(Je-F.steer)*Math.min(1,J*8),isFinite(F.yaw)||(F.yaw=0),isFinite(F.v)||(F.v=0),F.yaw+=F.steer*J*2.2*Math.min(1,Math.abs(F.v)/9)*Math.sign(F.v||1)*(1-Math.min(.5,Math.abs(F.v)/120));let At=Math.sin(F.yaw),$t=Math.cos(F.yaw),Vt=F.x+At*F.v*J,mn=F.z+$t*F.v*J,bn=Math.sign(F.v)||1;_e(Vt,mn,At,$t,bn)?(F.x=Vt,F.z=mn):_e(Vt,F.z,At,$t,bn)?(F.x=Vt,F.v*=1-J*2):_e(F.x,mn,At,$t,bn)?(F.z=mn,F.v*=1-J*2):F.v*=-.2,oe(),!Be&&performance.now()-pt>1600&&(yt*=1-Math.min(1,J*2),dt*=1-Math.min(1,J*2));let In=Math.abs(F.v),w=F.yaw+yt,Y=11.5+In*.07,Q=4.4+In*.025+dt*9;E.set(F.x-Math.sin(w)*Y*Math.cos(dt*.6),Q,F.z-Math.cos(w)*Y*Math.cos(dt*.6)),ee.set(F.x+At*7,1.9,F.z+$t*7);let ne=1-Math.exp(-J*6);t.position.lerp(E,ne),s.lerp(ee,ne),kt(52+In*.3,J),R.material.color.setScalar(.9+Math.min(.5,In*.01))}return{story:Tt,free:ln,shot:De,pinPos:ye,pose:oe,S:F,names:Me,place(J){let pe=Ie(J);F.x=pe.x,F.z=pe.z,F.yaw=pe.yaw,F.v=0,oe()},setActive(J,pe){Pe=J,he=pe||null,J&&(de=!1,et=null,Ge=null),We.classList.toggle("on",J&&(matchMedia("(pointer:coarse)").matches||v)),J||Mt()},chasePose(J,pe){we(F.x,F.z,F.yaw,J,pe)},open:se}}var pr=Math.PI*2;function Qx(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}var Ni=9,Oi=14,Ff=4,mi=Oi+Ff,Sn=Ni*mi/2,Qt=Sn-mi*1.4,e_=`
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
}`;function Y_(i,e={}){let t=matchMedia("(pointer:coarse)").matches||innerWidth<760,n=new co({canvas:i,antialias:!1,powerPreference:"high-performance"});n.toneMapping=xo,n.toneMappingExposure=1.05,n.outputColorSpace=Zt;let s=Math.min(devicePixelRatio||1,t?1.25:1.5),r=new vl,o=new Ue("#4a2a8a"),a={uFog:{value:o},uFogD:{value:.0031},uTime:{value:0},uFlash:{value:0},uMood:{value:.5}},c=new Jn(42,1,.5,5200),l=Qx(20261119),h=new D(-.45,.75,.5).normalize();r.add(new _t(new uo(2600,32,16),new vn({side:$n,depthWrite:!1,uniforms:{uTime:a.uTime,uFlash:a.uFlash,uMood:a.uMood},vertexShader:Rh,fragmentShader:s_})));let u=Df(Sn,Qt),p=new _t(new li(5e3,5e3,1,1).rotateX(-Math.PI/2),new vn({uniforms:{...a,uPitch:{value:mi},uBlk:{value:Oi},uHalf:{value:Sn},uBeach:{value:Qt},uZone:{value:u.tex},uRw:{value:new jt(nn.rw.x0,nn.rw.x1,nn.rw.z,nn.rw.hw)},uTwz:{value:nn.twz},uApron:{value:new jt(nn.apron.x0,nn.apron.x1,nn.apron.z0,nn.apron.z1)},uField:{value:new jt(nn.field.x,nn.field.z,nn.field.hx,nn.field.hz)},uPortR:{value:new jt(nn.port.x0,nn.port.x1,nn.port.z0,nn.port.z1)}},vertexShader:Rh,fragmentShader:n_}));r.add(p);let x=new _t(new li(2600,5e3).rotateX(-Math.PI/2).translate(Qt+14+1300,.35,0),new vn({uniforms:a,vertexShader:Rh,fragmentShader:i_}));r.add(x);let y=m=>new vn({uniforms:{...a,uSun:{value:h},uWin:{value:m?1:0}},vertexShader:e_,fragmentShader:t_}),v=()=>new Os(1,1,1),g=[],d=e.gate&&!e.reduced?0:99;function L(m,_=!1,b=!0){let B=v(),X=new Float32Array(m.length),V=new on(B,y(_),m.length);b&&g.push({m:V,list:m});let q=new Ot,U=new Rn,K=new D,me=new D,He=new os;return m.forEach((rt,Rt)=>{K.set(rt.x,rt.y+rt.h/2,rt.z),me.set(rt.w,rt.h,rt.d),U.setFromEuler(He.set(rt.rx||0,rt.ry||0,rt.rz||0)),q.compose(K,U,me),V.setMatrixAt(Rt,q),V.setColorAt(Rt,rt.c),X[Rt]=l()}),B.setAttribute("aSeed",new Nr(X,1)),V.instanceMatrix.needsUpdate=!0,V.instanceColor.needsUpdate=!0,V.frustumCulled=!1,r.add(V),V}let M=m=>new Ue(m),H=["#ff9ec9","#9ff0d0","#c8a8ff","#ffc9a0","#a8d8ff","#fff0a8"].map(M),C=["#2a2f7a","#3a2a8a","#28407a","#4a2f8f","#232a66"].map(M),z=["#8f86b8","#a49ccb","#7a72a8","#b3a9d6"].map(M),O=[],ce=[],S=[],R=[],F=[],oe=null,Ae=m=>-Sn+m*mi+Oi/2;for(let m=0;m<Ni;m++)for(let _=0;_<Ni;_++){let b=Ae(m),B=Ae(_);if(b>Qt-2)continue;if(m===4&&_===2){oe={x:b,z:B};continue}let X=Math.hypot(b,B)/Sn,V=b>Qt-mi-2;if(!V&&l()<.08){S.push([b,B]);continue}let q=V?2:l()<.45?1:4,U=q===1?[[0,0,Oi-2,Oi-2]]:q===2?[[0,-3.5,Oi-3,6],[0,3.5,Oi-3,6]]:[[-3.5,-3.5,6,6],[3.5,-3.5,6,6],[-3.5,3.5,6,6],[3.5,3.5,6,6]];for(let[K,me,He,rt]of U){let Rt=Math.max(3,Math.round(He-l()*2)),It=Math.max(3,Math.round(rt-l()*2)),un=V?5+Math.round(l()*5):X<.35?22+Math.round(l()*30):X<.65?9+Math.round(l()*14):4+Math.round(l()*7),dn=V?H[Math.floor(l()*H.length)]:un>20?C[Math.floor(l()*C.length)]:l()<.5?z[Math.floor(l()*z.length)]:H[Math.floor(l()*H.length)],rn=b+K,f=B+me;if(O.push({x:rn,y:0,z:f,w:Rt,d:It,h:un,c:dn}),un>22&&(O.push({x:rn,y:un,z:f,w:Math.max(2,Rt-2),d:Math.max(2,It-2),h:Math.round(3+l()*6),c:dn}),l()<.6)){let T=7+l()*6;ce.push({x:rn,y:un+3,z:f,w:.4,d:.4,h:T,c:M("#c8c0e8")}),F.push([rn,un+3+T,f])}if(l()<.55&&ce.push({x:rn+(l()-.5)*(Rt-2),y:un,z:f+(l()-.5)*(It-2),w:1.6,d:1.2,h:1,c:M("#5a5280")}),R.push({x:rn,y:un,z:f,w:Rt,d:It,big:un>20}),V)for(let T of[-1,1])ce.push({x:rn-Rt/2-.02,y:2+(T+1)*1.6,z:f,w:.3,d:It*.8,h:.35,c:M(T>0?"#ff4f9e":"#5fd8ff"),neon:!0})}}L(O,!0);let k=ce.filter(m=>m.neon),Z=ce.filter(m=>!m.neon);L(Z);let se=new on(v(),new Ut({toneMapped:!1}),k.length);{let m=se,_=new Ot;k.forEach((b,B)=>{_.compose(new D(b.x,b.y,b.z),new Rn,new D(b.w,b.h,b.d)),m.setMatrixAt(B,_),m.setColorAt(B,b.c.clone().multiplyScalar(3))}),r.add(m)}let _e=[];function ue(m,_,b=1){let B=Math.round(7+l()*4),X=(l()-.5)*.25;for(let U=0;U<B;U++)_e.push({x:m+X*U*U*.08,y:U*.9*b,z:_,w:.7*b,d:.7*b,h:.9*b,c:M(U%2?"#8a5a3a":"#7a4e30")});let V=m+X*B*B*.08,q=B*.9*b;for(let U=0;U<6;U++){let K=U/6*pr+l()*.4;for(let me=1;me<=5;me++)_e.push({x:V+Math.cos(K)*me*.8*b,y:q+(me<3?.3:-(me-2)*.55)*b,z:_+Math.sin(K)*me*.8*b,w:.75*b,d:.75*b,h:.35*b,c:M(me%2?"#2fbf6e":"#26a85e")})}_e.push({x:V,y:q-.3,z:_,w:1.1*b,d:1.1*b,h:.8*b,c:M("#2fbf6e")})}for(let m=-Sn+6;m<Sn;m+=9)ue(Qt+5+l()*2,m+l()*3),l()<.6&&ue(Qt+10+l()*3,m+4);let re=S.slice().sort((m,_)=>Math.hypot(m[0]-30,m[1]-30)-Math.hypot(_[0]-30,_[1]-30))[0]||[Qt-30,30];for(let m of S){if(m===re)continue;let[_,b]=m;ue(_-3,b-2),ue(_+3,b+3),ue(_+2,b-4,.8)}for(let m=-3;m<=3;m++)ue(-Sn-8,m*20+4);L(_e);let Me=[];for(let m=0;m<26;m++){let _=Math.PI*(.55+m/25*.95),b=640+l()*260,B=Math.cos(_)*b,X=Math.sin(_)*b*1.1,V=70+l()*110,q=50+l()*130;for(let U=0;U<5;U++){let K=1-U/5;Me.push({x:B,y:q*U/5,z:X,w:V*K+10,d:V*K*.8+10,h:q/5+.5,c:M(U>3?"#4a3c86":"#2c2160")})}}L(Me,!1,!1);let Re=34,I=new D(Qt+60,21,Re),W=[];for(let m=Qt+10;m<=Qt+74;m+=2)W.push({x:m,y:1.4,z:Re,w:2.02,d:9,h:.5,c:M(m%4?"#9a6a48":"#8a5c3c")});for(let m=Qt+16;m<=Qt+74;m+=8)for(let _ of[-4,4])W.push({x:m,y:-1,z:Re+_,w:.7,d:.7,h:2.5,c:M("#5a3a28")});for(let m of[-4.4,4.4])for(let _=Qt+10;_<=Qt+74;_+=4)W.push({x:_,y:1.9,z:Re+m,w:.25,d:.25,h:1.1,c:M("#e8e0f4")});for(let m of[-3,3])W.push({x:I.x-4,y:1.9,z:I.z+m*1.6,w:1,d:1,h:18,c:M("#d8d0ec"),ry:0}),W.push({x:I.x+4,y:1.9,z:I.z+m*1.6,w:1,d:1,h:18,c:M("#d8d0ec")});L(W);let le=new kn,Ce=new kn;le.position.copy(I),r.add(le),le.add(Ce);let xe=56,ze=new on(v(),new Ut({toneMapped:!1}),xe);ze.frustumCulled=!1,Ce.add(ze);{let m=new Ot,_=new Rn;for(let b=0;b<xe;b++){let B=b/xe*pr;_.setFromAxisAngle(new D(0,0,1),B),m.compose(new D(Math.cos(B)*15,Math.sin(B)*15,0),_,new D(.7,1.8,.7)),ze.setMatrixAt(b,m),ze.setColorAt(b,new Ue(1,1,1))}}let at=new Xt({color:"#cfc6ee"});for(let m=0;m<8;m++){let _=new _t(v(),at);_.scale.set(30,.35,.35),_.rotation.z=m/8*Math.PI,Ce.add(_)}let Ze=new _t(v(),new Ut({color:new Ue(3,1.2,2.4),toneMapped:!1}));Ze.scale.set(2.2,2.2,3),Ce.add(Ze);let it=[],vt=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#c8a8ff","#ff8a4a"];for(let m=0;m<12;m++){let _=new _t(v(),new Xt({color:vt[m%vt.length]}));_.scale.set(2,2.2,2.4),le.add(_),it.push(_)}le.rotation.y=Math.PI/2;let j=new D(Qt+26,0,Sn+70),Gt=[];for(let m=0;m<9;m++)Gt.push({x:j.x,y:m*2.6,z:j.z,w:5-m*.25,d:5-m*.25,h:2.6,c:M(m%2?"#ff4f6e":"#f4f0ff")});Gt.push({x:j.x,y:23.4,z:j.z,w:3.4,d:3.4,h:2.4,c:M("#2a2060")}),L(Gt,!1,!1);let $e=new _t(v(),new Ut({color:new Ue(4,3.6,2.4),toneMapped:!1}));$e.scale.set(2.2,1.6,2.2),$e.position.set(j.x,24.6,j.z),r.add($e);let nt=new _t(new ur(9,260,24,1,!0).rotateZ(-Math.PI/2).translate(130,0,0),new Ut({color:new Ue(1,.92,.7),transparent:!0,opacity:.07,blending:Ei,depthWrite:!1,side:Kn}));nt.position.set(j.x,24.6,j.z),r.add(nt);let Oe=m=>-Sn+m*mi-Ff/2;function Ht(){let m=1+Math.floor(l()*(Ni-2)),_=1+Math.floor(l()*(Ni-2)),b=Math.min(Ni,m+1+Math.floor(l()*3)),B=Math.min(Ni,_+1+Math.floor(l()*3)),X=[[Oe(m),Oe(_)],[Oe(b),Oe(_)],[Oe(b),Oe(B)],[Oe(m),Oe(B)]].map(([U,K])=>[Math.min(U,Qt-1),K]);l()<.5&&X.reverse();let V=[],q=0;for(let U=0;U<4;U++){let K=X[U],me=X[(U+1)%4],He=Math.hypot(me[0]-K[0],me[1]-K[1])||1;V.push({a:K,b:me,l:He,at:q}),q+=He}return{segs:V,len:q}}function xt(m,_,b){_=(_%m.len+m.len)%m.len;for(let B of m.segs)if(_<=B.at+B.l){let X=(_-B.at)/B.l,V=(B.b[0]-B.a[0])/B.l,q=(B.b[1]-B.a[1])/B.l;return[B.a[0]+(B.b[0]-B.a[0])*X-q*b,B.a[1]+(B.b[1]-B.a[1])*X+V*b,Math.atan2(V,q)]}return[m.segs[0].a[0],m.segs[0].a[1],0]}let A=t?44:76,E=6,ee=[["body",[0,.55,0],[1.1,.6,2.2]],["cab",[0,1.05,-.15],[1,.45,1.2]],["w1",[.5,.25,.7],[.25,.5,.5]],["w2",[-.5,.25,.7],[.25,.5,.5]],["w3",[.5,.25,-.7],[.25,.5,.5]],["w4",[-.5,.25,-.7],[.25,.5,.5]]],we={};for(let[m]of ee){let _=new on(v(),m==="body"?new Xt:new Xt({color:m==="cab"?"#1a1638":"#0c0a14"}),A);_.frustumCulled=!1,r.add(_),we[m]=_}let Ee=new on(v(),new Ut({toneMapped:!1}),A*4);Ee.frustumCulled=!1,r.add(Ee);let Se=[];for(let m=0;m<A;m++)Se.push({r:Ht(),d:l()*400,sp:6+l()*6,side:1,coin:null,police:m>=A-E,color:M(["#e8e4f4","#ffcf4a","#ff7aa8","#7ad8ff","#a8ff9e","#ff9a5a"][Math.floor(l()*6)])});let ke={cars:Se},Ie=new Map;function De(m,_){if(!m)return;let b=Ie.get(m);if(b){b.im?_(b.im):b.cbs.push(_);return}b={im:null,cbs:[_],tries:0},Ie.set(m,b);let B=()=>{let X=new Image;X.crossOrigin="anonymous",X.referrerPolicy="no-referrer",X.onload=()=>{b.im=X;for(let V of b.cbs.splice(0))V(X)},X.onerror=()=>{++b.tries<2&&setTimeout(B,1e4)},X.src=b.tries?m+(m.includes("?")?"&":"?")+"r="+Date.now()%1e5:m};B()}let Ge=m=>{let _=0;m=String(m||"");for(let b=0;b<m.length;b++)_=_*31+m.charCodeAt(b)>>>0;return _%360};function et(m,_,b,B,X,V){let q=Ge(V||X),U=m.createLinearGradient(_-B,b-B,_+B,b+B);U.addColorStop(0,`hsl(${q},80%,62%)`),U.addColorStop(1,`hsl(${(q+48)%360},72%,38%)`),m.fillStyle=U,m.fillRect(_-B,b-B,B*2,B*2),m.fillStyle="#fff",m.font=`900 ${Math.round(B*.8)}px Inter, sans-serif`,m.textAlign="center",m.textBaseline="middle",m.fillText(String(X||"?").slice(0,2).toUpperCase(),_,b+B*.05),m.textBaseline="alphabetic"}let de=new Map;function Tt(m,_,b,B,X){let V=document.createElement("canvas");V.width=256,V.height=160;let q=V.getContext("2d"),U=He=>{q.clearRect(0,0,256,160),q.fillStyle="rgba(12,6,36,.82)",N(q,28,98,200,42,21),q.fill(),q.fillStyle="#fff",q.font="900 26px Inter, sans-serif",q.textAlign="center",q.fillText("$"+m.symbol.slice(0,9),128,129),q.beginPath(),q.arc(128,50,44,0,pr),q.fillStyle=B?"#ffd23f":X==="migrated"?"#5fc8ff":b?"#2ee6a6":"#ff4f9e",q.fill(),q.save(),q.beginPath(),q.arc(128,50,38,0,pr),q.clip(),He?q.drawImage(He,90,12,76,76):et(q,128,50,38,m.symbol,m.mint),q.restore(),q.textAlign="center";for(let rt=0;rt<5;rt++){let Rt=6+rt*3;q.fillStyle=rt<_?["#ffd23f","#ffb13f","#ff8a4a","#ff5f7a","#ff4f9e"][rt]:"rgba(255,255,255,.25)",N(q,104+rt*10,158-Rt,7,Rt,2),q.fill()}B?(q.fillStyle="#ff4f9e",N(q,160,4,66,28,14),q.fill(),q.fillStyle="#fff",q.font="900 18px Inter, sans-serif",q.fillText("NEW",193,25)):X==="migrated"&&(q.fillStyle="#2f8fd8",N(q,150,4,100,28,14),q.fill(),q.fillStyle="#fff",q.font="900 16px Inter, sans-serif",q.fillText("MIGRATED",200,24)),K.needsUpdate=!0},K=new ci(V);K.colorSpace=Zt,U(null),De(m.iconUrl,U);let me=new wi(new pi({map:K,depthTest:!0,transparent:!0}));return me.scale.set(6.4,4,1),me.renderOrder=5,me}function N(m,_,b,B,X,V){m.beginPath(),m.moveTo(_+V,b),m.arcTo(_+B,b,_+B,b+X,V),m.arcTo(_+B,b+X,_,b+X,V),m.arcTo(_,b+X,_,b,V),m.arcTo(_,b,_+B,b,V),m.closePath()}let ye=t?70:110,Te=10,be=ye+Te,Be=new Ot().makeScale(0,0,0),yt=document.createElement("canvas");yt.width=yt.height=2048;let dt=yt.getContext("2d"),pt=new ci(yt);pt.colorSpace=Zt,pt.generateMipmaps=!1,pt.minFilter=fi;let fe=!1,G=Array.from({length:256},(m,_)=>_);function Pe(m,_,b){let B=m%16*128,X=Math.floor(m/16)*128;dt.clearRect(B,X,128,128),_?(dt.fillStyle="#120a30",dt.fillRect(B,X,128,128),dt.drawImage(_,B+5,X+5,118,118)):et(dt,B+64,X+64,64,b.symbol,b.mint),fe=!0}let he=v(),We=new Nr(new Float32Array(be*2),2);he.setAttribute("aCell",We);let qe=new Xt({map:pt});qe.onBeforeCompile=m=>{m.vertexShader=m.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
attribute vec2 aCell;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = (vMapUv + aCell) / 16.0;`)};let Mt=(m,_,b)=>{let B=new on(m,_,be);B.frustumCulled=!1;for(let X=0;X<be;X++)B.setMatrixAt(X,Be),b&&B.setColorAt(X,M("#ffffff"));return r.add(B),B},ht={head:Mt(he,qe),body:Mt(v(),new Xt,1),armL:Mt(v(),new Xt,1),armR:Mt(v(),new Xt,1),legL:Mt(v(),new Xt({color:"#1a1638"})),legR:Mt(v(),new Xt({color:"#1a1638"})),ring:Mt(v(),new Ut({toneMapped:!1,transparent:!0,opacity:.55,depthWrite:!1}),1)},kt=Array.from({length:be},(m,_)=>({k:_,coin:null,mine:_>=ye,pos:null,yaw:0,d:0,sp:1,L:Oi-1,x0:0,z0:0,ph:l()*6.28,scale:1,cell:-1,by:6})),ln=new Map,J=m=>{let _=0;for(let b=0;b<m.length;b++)_=_*31+m.charCodeAt(b)>>>0;return _},pe=[];for(let m=0;m<Ni;m++)for(let _=0;_<Ni;_++)-Sn+m*mi+Oi>Qt+1||pe.push([m,_]);function ge(m,_){m.cell<0&&(m.cell=G.shift()),Pe(m.cell,null,_),We.setXY(m.k,m.cell%16,15-Math.floor(m.cell/16)),We.needsUpdate=!0;let b=m.cell,B=_.mint;m.icon=_.iconUrl||"",De(_.iconUrl,X=>{m.coin&&m.coin.mint===B&&m.cell===b&&Pe(b,X,_)})}function ot(m){m.cell>=0&&(G.push(m.cell),m.cell=-1),m.coin=null}function Je(m,_){let b=Math.min(Oe(m),Qt-1),B=Math.min(Oe(m+1),Qt-1),X=Oe(_),V=Oe(_+1),q=[[b,X],[B,X],[B,V],[b,V]],U=[],K=0;for(let me=0;me<4;me++){let He=q[me],rt=q[(me+1)%4],Rt=Math.hypot(rt[0]-He[0],rt[1]-He[1])||1;U.push({a:He,b:rt,l:Rt,at:K}),K+=Rt}return{segs:U,len:K}}let Ye=null,Lt=null;function At(m){let _=m.slice(0,ye),b=new Set(_.map(V=>V.mint));for(let[V,q]of ln)b.has(V)||(ot(q),ln.delete(V));for(let[V,q]of de)!b.has(V)&&!(q.car&&q.car.mine)&&(r.remove(q.sp),q.sp.material.map.dispose(),q.sp.material.dispose(),de.delete(V));let B=kt.filter(V=>!V.mine&&!V.coin);for(let V of _){let q=ln.get(V.mint),U=!1;if(!q){if(q=B.shift(),!q)break;ln.set(V.mint,q),U=!0;let me=J(V.mint),[He,rt]=pe[me%pe.length];q.bi=He,q.bj=rt,q.x0=-Sn+He*mi+.5,q.z0=-Sn+rt*mi+.5,q.d=(me>>>8)%52,q.dir=me&1?1:-1,q.spawn=ft,q.fx=ft>4&&(V.isNew||V.cat==="migrated")?V.cat==="migrated"?1:0:null,q.coin=V,ge(q,V)}q.coin=V,q.icon!==(V.iconUrl||"")&&ge(q,V),q.sp=(1.1+(V.heat||0)*2.8)*q.dir,q.scale=.92+(V.heat||0)*.48;let K=de.get(V.mint);(!K||K.up!==V.up||K.stars!==V.stars||K.isNew!==!!V.isNew||K.cat!==V.cat||K.icon!==(V.iconUrl||""))&&(K&&(r.remove(K.sp),K.sp.material.map.dispose()),K={sp:Tt(V,V.stars,V.up,!!V.isNew,V.cat),up:V.up,stars:V.stars,isNew:!!V.isNew,cat:V.cat,icon:V.iconUrl||"",born:K?K.born:ft},K.sp.userData={kind:"coin",key:V.mint},r.add(K.sp),de.set(V.mint,K)),K.car=q}Wl(_.filter(V=>V.cat!=="new")),Ai(_.filter(V=>V.cat==="hot"&&V.chg!=null).sort((V,q)=>(q.heat||0)-(V.heat||0))[0]||null);let X=kt.filter(V=>V.coin&&!V.mine&&!V.coin.isNew&&V.coin.chg!=null&&V.coin.chg<-3).sort((V,q)=>V.coin.chg-q.coin.chg)[0]||null;X!==Ye&&(Ye=X,Lt=X?{r:Je(X.bi,X.bj),d:0}:null),Se.filter(V=>V.police).forEach((V,q)=>{V.chase=q<3?Lt:null,V.gap=4+q*7}),Vt=X?X.coin:null}let $t=m=>ln.get(m)||null,Vt=null,mn=[],bn={new:M("#ffd23f"),migrated:M("#5fc8ff"),up:M("#2ee6a6"),dn:M("#ff4f9e")},In={new:new Ue(3.4,2.5,.5),migrated:new Ue(.6,2.2,3.6),up:new Ue(.4,3.2,1.8),dn:new Ue(3.4,.5,1.7)},w=new Ot,Y=new Ot,Q=new Ot,ne=new Ot,te=new D,Fe=new D,je=new Rn,ut=new os;function st(m,_,b,B,X,V,q,U,K,me){Y.makeTranslation(b,B,X),Q.makeRotationX(V),ne.makeTranslation(0,q,0),Fe.set(U,K,me),zt.copy(w).multiply(Y).multiply(Q).multiply(ne).scale(Fe),m.setMatrixAt(_,zt)}function Ct(m){Lt&&(Lt.d+=11*m);for(let _ of kt){let b=_.k,B=_.coin;if(!B){for(let T of Object.values(ht))T.setMatrixAt(b,Be);_.pos=null;continue}let X,V,q,U=!0,K=!1,me=1,He=en.pinPos(_,ft);if(He)X=He[0],V=He[1],q=He[2],U=He[3]>1.5,K=!U,me=Math.min(3,1+He[3]/8);else if(_.mine)X=_.gx,V=_.gz,q=_.gyaw,U=!1;else{let T=_.L*4;_.d=((_.d+_.sp*m)%T+T)%T;let P=Math.floor(_.d/_.L),$=_.d-P*_.L;X=P===0?_.x0+$:P===1?_.x0+_.L:P===2?_.x0+_.L-$:_.x0,V=P===0?_.z0:P===1?_.z0+$:P===2?_.z0+_.L:_.z0+_.L-$,q=[Math.PI/2,0,-Math.PI/2,Math.PI][P]+(_.sp<0?Math.PI:0)}let rt=0,Rt=(ft-(_.spawn||-9))/.9;Rt<1?rt=16*(1-Rt)*(1-Rt):_.fx!=null&&(mn.push([X,V,_.fx]),_.fx=null);let It=_.scale,un=(5.2+Math.abs(_.sp)*1.5)*me,dn=U?Math.sin(ft*un+_.ph)*.62:0,rn=U?Math.abs(Math.cos(ft*un+_.ph))*.12:Math.sin(ft*2.2+_.ph)*.03;w.compose(te.set(X,rt+rn,V),je.setFromEuler(ut.set(0,q,0)),Fe.set(It,It,It)),st(ht.legL,b,-.32,1.1,0,dn,-.55,.42,1.1,.46),st(ht.legR,b,.32,1.1,0,-dn,-.55,.42,1.1,.46),st(ht.body,b,0,1.66,0,0,0,1.2,1.12,.72),st(ht.armL,b,-.79,2.12,0,-dn*.9,-.5,.34,1,.38),st(ht.armR,b,.79,2.12,0,K?-2.75+Math.sin(ft*9+_.ph)*.35:dn*.9,-.5,.34,1,.38),st(ht.head,b,0,2.84,0,Math.sin(ft*1.7+_.ph)*.06,0,1.28,1.28,1.28);let f=B.cat==="new"||B.isNew?"new":B.cat==="migrated"?"migrated":B.up?"up":"dn";if(ht.body.setColorAt(b,bn[f]),ht.armL.setColorAt(b,bn[f]),ht.armR.setColorAt(b,bn[f]),zt.compose(te.set(X,.05,V),je.identity(),Fe.set(2.3*It,.04,2.3*It)),ht.ring.setMatrixAt(b,rt>.5?Be:zt),ht.ring.setColorAt(b,In[f]),_.pos=[X,V],_.yaw=q,_.by=rt+3.6*It+(He?1.3:2.4),!_.mine&&B.s5m){for(_.pb=(_.pb||0)+m*Math.min(3,(B.s5m.numBuys||0)/300),_.ps=(_.ps||0)+m*Math.min(3,(B.s5m.numSells||0)/300);_.pb>=1;)_.pb--,xi(Yt.set(X,3.2*It,V),ds.set((l()-.5)*2,4+l()*2.5,(l()-.5)*2),[.3,3,1.7],.9,.34,2);for(;_.ps>=1;)_.ps--,xi(Yt.set(X,3.2*It,V),ds.set((l()-.5)*2,3+l()*2,(l()-.5)*2),[3.2,.45,1.6],.9,.34,2)}}for(let _ of Object.values(ht))_.instanceMatrix.needsUpdate=!0,_.instanceColor&&(_.instanceColor.needsUpdate=!0);fe&&Ss%20===0&&(fe=!1,pt.needsUpdate=!0)}let Et=t?140:320,St=[],qt=new on(v(),new Xt,Et),Wt=new on(v(),new Xt({color:"#f0c9a0"}),Et);qt.frustumCulled=Wt.frustumCulled=!1,r.add(qt),r.add(Wt);let gn=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#ffffff","#8a3fe2","#ff8a4a","#1a1638"].map(M),Qn=["#f0c9a0","#c98e62","#8a5a3a","#ffdcc0"].map(M);for(let m=0;m<Et;m++){let _=Math.floor(l()*Ni),b=Math.floor(l()*Ni),B=-Sn+_*mi+.5,X=-Sn+b*mi+.5,V=Oi-1;if(B>Qt-2){m--;continue}St.push({x0:B,z0:X,L:V,d:l()*V*4,sp:(l()<.5?-1:1)*(.9+l()*.9),ph:l()*6.3}),qt.setColorAt(St.length-1,gn[Math.floor(l()*gn.length)]),Wt.setColorAt(St.length-1,Qn[Math.floor(l()*Qn.length)])}qt.instanceColor.needsUpdate=!0,Wt.instanceColor.needsUpdate=!0;function Jt(m){St.forEach((_,b)=>{_.d=((_.d+_.sp*m)%(_.L*4)+_.L*4)%(_.L*4);let B=Math.floor(_.d/_.L),X=_.d-B*_.L,V=B===0?_.x0+X:B===1?_.x0+_.L:B===2?_.x0+_.L-X:_.x0,q=B===0?_.z0:B===1?_.z0+X:B===2?_.z0+_.L:_.z0+_.L-X,U=Math.abs(Math.sin(ft*7+_.ph))*.08,K=(B%2?0:Math.PI/2)+(_.sp<0?Math.PI:0);_n.setFromEuler(Vi.set(0,K,Math.sin(ft*7+_.ph)*.06)),Yt.set(V,.62+U,q),cn.set(.42,.82,.3),zt.compose(Yt,_n,cn),qt.setMatrixAt(b,zt),Yt.set(V,1.24+U,q),cn.set(.34,.34,.34),zt.compose(Yt,_n,cn),Wt.setMatrixAt(b,zt)}),qt.instanceMatrix.needsUpdate=!0,Wt.instanceMatrix.needsUpdate=!0}let mt=new kn;r.add(mt);{let m=new Xt({color:"#e8e2f8"}),_=new Xt({color:"#2a2060"});[[4,4],[7.5,7],[9,8.4],[9,8.4],[7.5,7],[4.5,4.2]].forEach(([X,V],q)=>{let U=new _t(v(),m);U.scale.set(5.2,V,X),U.position.x=-12.5+q*5,mt.add(U)});for(let[X,V]of[[4,0],[0,4],[0,-4]]){let q=new _t(v(),_);q.scale.set(4,X?4:.4,V?4:.4),q.position.set(-14,X*.9,V*.9),mt.add(q)}let b=new _t(v(),_);b.scale.set(7,1.8,2.6),b.position.set(1,-5,0),mt.add(b);let B=new _t(v(),new Ut({color:new Ue(4,.4,1.6),toneMapped:!1}));B.scale.setScalar(.8),B.position.set(15.6,0,0),mt.add(B),mt.userData.tip=B}let Fi=document.createElement("canvas");Fi.width=512,Fi.height=160;let Ve=Fi.getContext("2d"),ei=new ci(Fi);ei.colorSpace=Zt;let cs=new Ut({map:ei,toneMapped:!1,color:new Ue(1.6,1.6,1.6)});for(let m of[4.32,-4.32]){let _=new _t(new li(16,5),cs);_.position.set(1,.4,m),_.rotation.y=m>0?0:Math.PI,mt.add(_)}let wn=null,zi=null;function fn(){Ve.fillStyle="#0a0520",Ve.fillRect(0,0,512,160);let m=wn;if(Ve.fillStyle="#ff4f9e",Ve.fillRect(0,0,512,8),Ve.fillRect(0,152,512,8),!m){Ve.fillStyle="#fff",Ve.font="900 44px Inter, sans-serif",Ve.textAlign="center",Ve.fillText("THE TRENCHES",256,96),ei.needsUpdate=!0;return}Ve.save(),Ve.beginPath(),Ve.arc(80,80,52,0,pr),Ve.clip(),zi?Ve.drawImage(zi,28,28,104,104):et(Ve,80,80,52,m.symbol,m.mint),Ve.restore(),Ve.textAlign="left",Ve.fillStyle="#ffd23f",Ve.font="900 22px Inter, sans-serif",Ve.fillText("#1 HOT RIGHT NOW",152,50),Ve.fillStyle="#fff",Ve.font="900 52px Inter, sans-serif";let _="$"+m.symbol;for(;Ve.measureText(_).width>340&&_.length>3;)_=_.slice(0,-2)+"\u2026";Ve.fillText(_,152,104),Ve.fillStyle=(m.chg||0)>=0?"#2ee6a6":"#ff4f9e",Ve.font="800 28px Inter, sans-serif",Ve.fillText(m.chg==null?"":(m.chg>0?"+":"")+m.chg.toFixed(1)+"% in 5 min",152,140),ei.needsUpdate=!0}fn();function Ai(m){if(!m||wn&&wn.mint===m.mint&&wn.chg===m.chg)return;let _=wn&&wn.mint===m.mint;if(wn=m,!_){zi=null;let b=m.mint;De(m.iconUrl,B=>{wn&&wn.mint===b&&(zi=B,fn())})}fn()}let zn=[],Un={new:["#ffd23f","#2a1270"],migrated:["#5fc8ff","#062a4a"],bond:["#ff4f9e","#fff"],x:["#ffffff","#120a30"],hot:["#2ee6a6","#04261a"]};function tt(m){let _=document.createElement("canvas");_.width=560,_.height=210;let b=_.getContext("2d"),[B]=Un[m.kind]||Un.x,X=q=>{b.clearRect(0,0,560,210),b.fillStyle="rgba(10,5,32,.94)",N(b,6,6,548,150,40),b.fill(),b.beginPath(),b.moveTo(250,150),b.lineTo(280,196),b.lineTo(312,150),b.closePath(),b.fill(),b.strokeStyle=B,b.lineWidth=6,N(b,6,6,548,150,40),b.stroke(),b.save(),b.beginPath(),b.arc(84,81,50,0,pr),b.clip(),q?b.drawImage(q,34,31,100,100):m.mint?et(b,84,81,50,m.mark,m.mint):(b.fillStyle=B,b.fillRect(34,31,100,100),b.fillStyle="#120a30",b.font="900 44px Inter, sans-serif",b.textAlign="center",b.fillText(m.mark||"?",84,97)),b.restore(),b.textAlign="left",b.fillStyle=B,b.font="900 24px Inter, sans-serif",b.fillText(m.kicker.toUpperCase(),156,58),b.fillStyle="#fff",b.font="900 40px Inter, sans-serif";let U=m.title;for(;b.measureText(U).width>380&&U.length>3;)U=U.slice(0,-2)+"\u2026";if(b.fillText(U,156,104),m.sub){b.fillStyle="rgba(220,210,255,.85)",b.font="700 24px Inter, sans-serif";let K=m.sub;for(;b.measureText(K).width>380&&K.length>3;)K=K.slice(0,-2)+"\u2026";b.fillText(K,156,138)}V.needsUpdate=!0},V=new ci(_);return V.colorSpace=Zt,X(null),De(m.iconUrl,X),V}function Hr(m){for(;zn.length>=(t?3:5);){let X=zn.shift();r.remove(X.sp),X.sp.material.map.dispose(),X.sp.material.dispose()}let _=new wi(new pi({map:tt(m),transparent:!0,depthTest:!1}));_.renderOrder=8,_.userData=m.mint?{kind:"coin",key:m.mint}:{kind:"bubble",key:m.title};let b=m.mint?$t(m.mint):null,B=m.at||(()=>{let X=R[Math.floor(l()*R.length)];return[X.x,X.z,X.y+14]})();r.add(_),zn.push({sp:_,car:b,x:B[0],z:B[1],y:B[2]||12,t:0,life:m.life||6.5})}let hs=t?16:30,Tn=[],kr=[["hull",[0,.45,0],[2.4,.9,5.6],"#efeaff"],["trim",[0,.95,0],[2.5,.18,5.7],"#2f3fe4"],["deck",[0,1.35,-.9],[1.7,.8,2.2],"#241a5c"],["mast",[0,3.3,.7],[.24,4.4,.24],"#cfc6ee"],["sail",[0,3.5,1.35],[.14,3.4,1.9],"#ffffff"]],gi={};for(let[m,,,_]of kr){let b=new on(v(),new Xt({color:_}),hs);b.frustumCulled=!1,b.count=0,r.add(b),gi[m]=b}gi.sail.material=new Ut({toneMapped:!1});function Pa(m){let _=document.createElement("canvas");_.width=256,_.height=92;let b=_.getContext("2d");b.fillStyle="rgba(8,18,48,.86)",N(b,6,8,244,76,22),b.fill(),b.strokeStyle="rgba(95,200,255,.8)",b.lineWidth=3,N(b,6,8,244,76,22),b.stroke(),b.fillStyle="#fff",b.font="900 30px Inter, sans-serif",b.textAlign="left",b.fillText(m.name.slice(0,8),22,52);let B=m.chg==null?"\u2014":(m.chg>0?"+":"")+m.chg.toFixed(1)+"%";b.textAlign="right",b.fillStyle=m.chg>=0?"#2ee6a6":"#ff4f9e",b.font="800 26px Inter, sans-serif",b.fillText(B,234,52),b.fillStyle="rgba(160,220,255,.85)",b.font="800 13px Inter, sans-serif",b.textAlign="left",b.fillText("PERP \xB7 "+(m.oi>=1e9?(m.oi/1e9).toFixed(1)+"B":(m.oi/1e6).toFixed(0)+"M")+" OI",22,74);let X=new ci(_);X.colorSpace=Zt;let V=new wi(new pi({map:X,transparent:!0,depthTest:!0}));return V.renderOrder=5,V.userData={kind:"perp",key:m.name},V}function Gl(m){let _=m.filter(X=>X&&X.oi>0).sort((X,V)=>V.oi-X.oi).slice(0,hs);if(Tn.length&&_.length===Tn.length&&_.every(X=>Tn.some(V=>V.p.name===X.name))){for(let X of _){let V=Tn.find(U=>U.p.name===X.name);V.p=X;let q=Pa(X);V.sp.material.map.dispose(),V.sp.material.map=q.material.map,V.sp.material.needsUpdate=!0,q.material.dispose()}return}for(let X of Tn)r.remove(X.sp),X.sp.material.map.dispose(),X.sp.material.dispose();Tn.length=0;let b=t?2:3,B=Math.ceil(hs/b);_.forEach((X,V)=>{let q=V%b,U=Math.floor(V/b),K=q%2?-1:1,me=.75+.6*Math.min(1,Math.max(0,Math.log10(X.oi/1e6)/3));Tn.push({p:X,x:Qt+30+q*15,dir:K,sz:me,sp:Pa(X),ph:l()*6.28,d:U/B*2*(2*Sn-12)+l()*4,pos:null,wake:0})});for(let X of Tn)r.add(X.sp);for(let X in gi)gi[X].count=Tn.length}let Ri=[],Fs=[];for(let m of R.filter(_=>_.big).sort((_,b)=>b.y-_.y)){if(Ri.length>=5)break;Ri.every(_=>Math.hypot(_.x-m.x,_.z-m.z)>30)&&Ri.push(m)}function La(m,_){let b=document.createElement("canvas");b.width=384,b.height=176;let B=b.getContext("2d"),X=B.createLinearGradient(0,0,384,176);X.addColorStop(0,"#2f3fe4"),X.addColorStop(.5,"#8a3fe2"),X.addColorStop(1,"#ff4f9e");let V=U=>{B.clearRect(0,0,384,176),B.fillStyle=X,N(B,4,4,376,168,26),B.fill(),B.fillStyle="rgba(10,5,32,.88)",N(B,12,12,360,152,20),B.fill(),B.save(),B.beginPath(),B.arc(88,88,52,0,pr),B.clip(),U?B.drawImage(U,36,36,104,104):et(B,88,88,52,m.symbol,m.mint),B.restore(),B.textAlign="left",B.fillStyle="#ffd23f",B.font="900 20px Inter, sans-serif",B.fillText("#"+_+" ON THE STREETS",160,58),B.fillStyle="#fff",B.font="900 44px Inter, sans-serif",B.fillText("$"+m.symbol.slice(0,8),160,106);let K=m.mcap||0;B.fillStyle="rgba(220,210,255,.9)",B.font="800 22px Inter, sans-serif",B.fillText((K>=1e9?"$"+(K/1e9).toFixed(2)+"B":"$"+(K/1e6).toFixed(1)+"M")+" cap",160,140),q.needsUpdate=!0},q=new ci(b);return q.colorSpace=Zt,V(null),De(m.iconUrl,V),q}function Wl(m){m.filter(b=>!b.isNew&&b.mcap).sort((b,B)=>B.mcap-b.mcap).slice(0,Ri.length).forEach((b,B)=>{let X=Fs[B];if(X&&X.mint===b.mint&&X.icon===(b.iconUrl||"")){X.coin=b,X.sp.userData.coin=b;return}if(!X){X=Fs[B]={sp:new wi(new pi({transparent:!0,depthTest:!0}))},X.sp.renderOrder=4;let V=Ri[B];X.sp.position.set(V.x,V.y+10,V.z),X.sp.scale.set(17,7.8,1),r.add(X.sp)}X.sp.material.map&&X.sp.material.map.dispose(),X.sp.material.map=La(b,B+1),X.sp.material.needsUpdate=!0,X.mint=b.mint,X.icon=b.iconUrl||"",X.coin=b,X.sp.userData={kind:"bill",key:b.mint,coin:b}})}let Ia=Te,yn=[],Dt=new _t(new ho(3.4,3.4,140,24,1,!0).translate(0,70,0),new Ut({color:new Ue(1.6,.45,1.1),transparent:!0,opacity:.14,blending:Ei,depthWrite:!1,side:Kn}));Dt.position.set(re[0],0,re[1]),Dt.visible=!1,r.add(Dt);let ti=(()=>{let m=document.createElement("canvas");m.width=320,m.height=120;let _=m.getContext("2d");_.fillStyle="rgba(10,5,32,.9)",N(_,6,8,308,104,26),_.fill(),_.strokeStyle="#ff4f9e",_.lineWidth=4,N(_,6,8,308,104,26),_.stroke(),_.fillStyle="#ff9ec9",_.font="900 16px Inter, sans-serif",_.textAlign="center",_.fillText("YOUR SAFEHOUSE",160,44),_.fillStyle="#fff",_.font="900 25px Inter, sans-serif",_.fillText("Connect to park your bag",160,82);let b=new ci(m);b.colorSpace=Zt;let B=new wi(new pi({map:b,transparent:!0}));return B.position.set(re[0],7,re[1]),B.scale.set(10,3.75,1),B.userData={kind:"safehouse",key:"home"},r.add(B),B})();function mr(m){for(let B of yn)r.remove(B.sp),B.sp.material.map.dispose(),B.sp.material.dispose();for(let B of kt)B.mine&&ot(B);yn.length=0;let _=(m||[]).slice(0,Ia),b=kt.filter(B=>B.mine);_.forEach((B,X)=>{let V=re[0]-5.2+X%5*2.6,q=re[1]-2.5+Math.floor(X/5)*5,U=b[X],K={mint:B.mint,symbol:B.sym||"?",iconUrl:B.iconUrl||"",up:(B.ch||0)>=0,cat:"mine"},me=Tt(K,0,K.up,!1);U.coin=K,U.gx=V,U.gz=q,U.gyaw=-Math.PI/2,U.scale=.9,U.spawn=-9,U.fx=null,ge(U,K),me.userData={kind:"mine",key:B.mint,row:B},me.position.set(V,3.6*.9+1.7,q),me.scale.set(4.2,2.6,1),r.add(me),yn.push({r:B,x:V,z:q,sp:me})}),Dt.visible=yn.length>0,ti.visible=!yn.length}let us=R.filter(m=>m.big),Ci=[];for(let m=0;m<Math.min(6,us.length);m++){let _=us[Math.floor(l()*us.length)];Ci.push({x:_.x+(l()-.5)*(_.w-2),y:_.y+(_.big,0),z:_.z+(l()-.5)*(_.d-2)})}for(let m of Ci){let _=new mo("#ff7a3a",60,40,1.6);_.position.set(m.x,m.y+3,m.z),r.add(_),m.light=_}let zs=Ci.length*10,Dn=new on(v(),new Ut({toneMapped:!1}),zs);Dn.frustumCulled=!1,r.add(Dn);let Bs=t?160:320,gr=new on(v(),new Xt({color:"#3a2a5a",transparent:!0,opacity:.82}),Bs);gr.frustumCulled=!1,r.add(gr);let Ua=Array.from({length:Bs},(m,_)=>({f:Ci[_%Ci.length],t:l()*9,life:7+l()*3,ox:(l()-.5)*2,oz:(l()-.5)*2,s:.8+l()*.8})),Vr=160,$i=new on(v(),new Ut({toneMapped:!1}),Vr);$i.frustumCulled=!1,r.add($i);let vo=Array.from({length:Vr},()=>({t:9,p:new D,v:new D,c:new Ue})),Hs=new mo("#ffd0a0",0,120,1.4);r.add(Hs);let xr=new _t(new uo(1,16,12),new Ut({color:new Ue(6,3.6,1.8),transparent:!0,opacity:0,toneMapped:!1}));r.add(xr);let ks=new _t(new Sl(1,.08,6,48).rotateX(Math.PI/2),new Ut({color:new Ue(3,2,2.6),transparent:!0,opacity:0,toneMapped:!1}));r.add(ks);let _r=2,fs=9,Vn=new D,Bn=t?700:1600,Gn=new on(v(),new Ut({toneMapped:!1}),Bn);Gn.frustumCulled=!1,r.add(Gn);let ji=Array.from({length:Bn},()=>({t:9,life:1,p:new D,v:new D,c:new Ue,s:.4,drag:1})),Vs=[[.3,3.4,2.1],[3.6,2.6,.5],[3.2,3.2,3.4],[3.6,.9,2.4],[1,1.8,3.8]],ds=new D,Qi=[],Gs=0,Hn=3.4,ps=8+l()*6,ms=9,gs=.5;function xi(m,_,b,B,X,V){let q=ji[Gs];Gs=(Gs+1)%Bn,q.t=0,q.life=B,q.p.copy(m),q.v.copy(_),q.c.setRGB(b[0],b[1],b[2]),q.s=X,q.drag=V}function Da(){let m=kt.filter(b=>b.coin&&!b.mine&&b.coin.up&&b.pos);if(!m.length)return;m.sort((b,B)=>(B.coin.chg||0)-(b.coin.chg||0));let _=m[Math.floor(l()*l()*Math.min(m.length,10))];Qi.push({p:new D(_.pos[0],2.5,_.pos[1]),v:new D((l()-.5)*4,36+l()*14,(l()-.5)*4),t:0,fuse:1.2+l()*.5,col:l()<.6?0:Math.floor(l()*Vs.length)})}function Na(){let m=R[Math.floor(l()*R.length)];Vn.set(m.x,m.y+1,m.z),fs=0;let _=0;for(let b of vo){if(_>40)break;b.t>2.5&&(b.t=0,b.p.copy(Vn),b.v.set((l()-.5)*22,8+l()*18,(l()-.5)*22),b.c.setRGB(3,1.2+l(),.3+l()*.4),_++)}}let Wn=[],Gr=new Ut({color:new Ue(.7,.75,1),transparent:!0,opacity:.1,blending:Ei,depthWrite:!1,side:Kn});for(let m=0;m<3;m++){let _=new kn,b=new Xt({color:"#16123a"}),B=new _t(v(),b);B.scale.set(2.4,1.6,4),_.add(B);let X=new _t(v(),b);X.scale.set(.6,.6,4),X.position.set(0,.3,-3.6),_.add(X);let V=new _t(v(),new Ut({color:"#0c0a1e"}));V.scale.set(9,.12,.5),V.position.y=1.1,_.add(V);let q=new _t(new ur(9,60,24,1,!0).translate(0,-30,0),Gr);q.position.y=-.6,_.add(q);let U=new _t(v(),new Ut({color:new Ue(4,.3,.4),toneMapped:!1}));U.scale.setScalar(.35),U.position.set(0,-.9,-1.6),_.add(U),r.add(_),Wn.push({g:_,rot:V,cone:q,red:U,r:30+m*18,h:46+m*9,spd:.12+m*.05,ph:m*2.1})}function vr(m){Wn.forEach((_,b)=>{let B=m[b];if(_.sp&&(_.g.remove(_.sp),_.sp.material.map.dispose(),_.sp.material.dispose(),_.sp=null),!B)return;let X=document.createElement("canvas");X.width=300,X.height=106;let V=X.getContext("2d");V.fillStyle="rgba(10,5,32,.9)",N(V,6,8,288,90,22),V.fill(),V.strokeStyle="rgba(255,210,63,.9)",V.lineWidth=3,N(V,6,8,288,90,22),V.stroke(),V.fillStyle="#ffd23f",V.font="900 14px Inter, sans-serif",V.textAlign="left",V.fillText("PUMP.FUN WHALE",22,33),B.sol!=null&&(V.textAlign="right",V.fillStyle="rgba(220,214,255,.9)",V.font="800 15px Inter, sans-serif",V.fillText(Math.round(B.sol).toLocaleString("en-US")+" SOL",278,33)),V.textAlign="left",V.fillStyle="#fff",V.font="900 28px Inter, sans-serif",V.fillText(String(B.n||"").slice(0,14),22,65);let q=B.last;if(q){V.fillStyle=q.side==="buy"?"#2ee6a6":"#ff4f9e",V.font="800 15px Inter, sans-serif";let K=(q.side==="buy"?"Bought $":"Sold $")+(q.sym||"\u2026")+" \xB7 "+(+q.sol||0).toFixed(1)+" SOL";for(;V.measureText(K).width>256&&K.length>4;)K=K.slice(0,-2)+"\u2026";V.fillText(K,22,88)}let U=new ci(X);U.colorSpace=Zt,_.sp=new wi(new pi({map:U,transparent:!0,depthTest:!1})),_.sp.renderOrder=6,_.sp.position.set(0,4.4,0),_.sp.scale.set(8.6,3.04,1),_.sp.userData={kind:"whale",key:B.a,whale:B},_.g.add(_.sp)})}let Ws=[];for(let m=0;m<5;m++){let _=us[m*7%Math.max(1,us.length)]||{x:0,y:30,z:0},b=new _t(new ur(6,220,20,1,!0).rotateX(Math.PI).translate(0,110,0),new Ut({color:new Ue(.9,.85,1),transparent:!0,opacity:.06,blending:Ei,depthWrite:!1,side:Kn}));b.position.set(_.x,_.y+1,_.z),r.add(b),Ws.push({cone:b,ph:m*1.3,sp:.25+m*.06})}let Wr=t?500:1100,xs=new on(v(),new Ut({color:new Ue(.55,.62,1.1),transparent:!0,opacity:.32,depthWrite:!1}),Wr);xs.frustumCulled=!1,xs.count=0,r.add(xs);let yo=Array.from({length:Wr},()=>({x:(l()-.5)*170,y:l()*80,z:(l()-.5)*170,v:55+l()*25})),Xs=0,Xn=Nf({scene:r,col:M,voxMesh:L,boxGeo:v,U:a,mobile:t,HALF:Sn,PITCH:mi,BLK:Oi,NB:Ni,BEACH_X:Qt,PIER_Z:Re,WHEEL:I,roofs:R,ants:F,site:oe,zones:u,spark:xi,seaMat:x.material,cam:c,rr:N,loadIcon:De,mono:et});r.add(new wl("#8a8aff","#3a1a4a",1.5));let Xr=new Al("#ffd0f0",1.5);Xr.position.copy(h).multiplyScalar(100),r.add(Xr),r.fog=null;let Pi=new zl(n);Pi.addPass(new Bl(r,c));let Mo=new Ca(new Xe(256,256),t?.38:.45,.42,.92);Pi.addPass(Mo),Pi.addPass(new Hl);let bt=new Dl(c,i);bt.enableDamping=!0,bt.dampingFactor=.06,bt.minDistance=25,bt.maxDistance=260,bt.maxPolarAngle=1.32,bt.minPolarAngle=.35,bt.target.set(0,4,0),bt.autoRotate=!0,bt.autoRotateSpeed=.35,bt.enablePan=!0,bt.screenSpacePanning=!1;let _s=.0031,Bi=new D(98,56,118),qs=new D(0,4,0),es=new D,yr=new D,Ys=Bi.clone(),qr=qs.clone(),hi=!!e.gate,sn=hi?"gate":"drive",qn=0,Zs=0,ts=0,ni=null,vs=_s,Li=0,Mr=[],Js=null,en=Of({scene:r,cam:c,canvas:i,target:bt.target,HALF:Sn,PITCH:mi,BLK:Oi,BEACH_X:Qt,zones:u,homeLot:re,WHEEL:I,helis:Wn,cars:kt,more:Xn,mobile:t,hotMint:()=>Js});bt.enabled=!1,bt.autoRotate=!1,hi?a.uFogD.value=.0018:(en.place(0),en.chasePose(c.position,bt.target),en.setActive(!0)),bt.addEventListener("start",()=>{ts=0,bt.autoRotate=!1,qn=0,a.uFogD.value=_s});let xn=(m,_,b)=>new D(m,_,b),Eo=()=>kt.filter(m=>m.coin&&!m.mine&&m.pos&&m.coin.cat!=="new").sort((m,_)=>(_.coin.heat||0)-(m.coin.heat||0))[0],So={streets:()=>[xn(66+Math.sin(ft*.08)*8,36,76),xn(8,2,10)],hot:()=>{let m=Eo();return m?[xn(m.pos[0]+26,24,m.pos[1]+28),xn(m.pos[0],2,m.pos[1])]:So.streets()},drops:()=>[xn(-58+Math.sin(ft*.1)*6,62,18),xn(-4,2,-30)],migrated:()=>[xn(-78,60,64),xn(0,26,0)],harbor:()=>[xn(Qt-16,27,48),xn(Qt+44,0,-6)],pier:()=>[xn(Qt+14+Math.sin(ft*.1)*4,12,Re+50),xn(I.x,15,I.z)],whales:()=>{let m=Wn[0]?Wn[0].g.position:xn(0,50,0);return[xn(m.x+24,m.y+3,m.z+24),xn(m.x,m.y-3,m.z)]},safehouse:()=>[xn(re[0]+26,21,re[1]+30),xn(re[0],2,re[1])],mood:()=>[xn(-180+Math.sin(ft*.05)*20,128,-150),xn(0,0,0)],roam:()=>[Bi.clone(),qs.clone()],...Xn.shots},Oa=m=>en.shot(m);function Ks(m,_){es.copy(c.position),yr.copy(bt.target),Ys.copy(m),qr.copy(_),vs=a.uFogD.value,e.reduced?(c.position.copy(m),bt.target.copy(_),a.uFogD.value=_s,qn=0):(qn=1,Zs=0),ts=0}function Fa(){if(hi)if(hi=!1,Mr.length){sn="story",bt.enabled=!1,en.setActive(!1,e.onWheel);let[m,_]=Oa(Math.round(Li));Ks(m,_)}else Ms(!0)}let ys=new D,ns=new D;function Ms(m){sn="drive",bt.enabled=!1,bt.autoRotate=!1,ni=null,en.setActive(!0),m&&(en.chasePose(ys,ns),Ks(ys.clone(),ns.clone()))}function $s(){sn="map",bt.enabled=!0,en.setActive(!1);let m=en.S;Ks(new D(m.x+46,62,m.z+58),new D(m.x,2,m.z))}addEventListener("keydown",m=>{m.code!=="KeyV"||m.metaKey||m.ctrlKey||/INPUT|TEXTAREA|SELECT/.test((document.activeElement||{}).tagName||"")||(sn==="drive"?$s():sn==="map"&&Ms(!1))});function bo(){let m=i.clientWidth||innerWidth,_=i.clientHeight||innerHeight;n.setPixelRatio(s),n.setSize(m,_,!1),Pi.setPixelRatio(s),Pi.setSize(m,_),c.aspect=m/_,c.fov=m/_<.8?58:42,c.updateProjectionMatrix()}bo(),addEventListener("resize",bo);try{t||(Pi.renderTarget1.samples=4,Pi.renderTarget2.samples=4)}catch{}let za=new Cl,wo=new Xe,Hi=null,_i=null,ii=null,Ii=()=>{let m=[];for(let _ of de.values())m.push(_.sp);for(let _ of Tn)m.push(_.sp);for(let _ of Fs)m.push(_.sp);for(let _ of yn)m.push(_.sp);for(let _ of zn)m.push(_.sp);ti.visible&&m.push(ti);for(let _ of Wn)_.sp&&m.push(_.sp);for(let _ of Xn.pickables())m.push(_);return m};function ki(m,_){let b=i.getBoundingClientRect();wo.set((m-b.left)/b.width*2-1,-(_-b.top)/b.height*2+1),za.setFromCamera(wo,c);let B=za.intersectObjects(Ii(),!1);return B.length?B[0].object.userData:null}function Es(m){if(!m)return null;if(m.kind==="coin"){let _=de.get(m.key);return _&&_.car&&_.car.coin?{kind:"coin",coin:_.car.coin}:m.coin?{kind:"coin",coin:m.coin}:null}if(m.kind==="bill")return{kind:"coin",coin:de.get(m.key)&&de.get(m.key).car&&de.get(m.key).car.coin||m.coin};if(m.kind==="perp"){let _=Tn.find(b=>b.p.name===m.key);return _?{kind:"perp",perp:_.p}:null}return m.kind==="whale"?{kind:"whale",whale:m.whale}:m.kind==="mine"?{kind:"mine",row:m.row}:m.kind==="safehouse"?{kind:"safehouse"}:(m.kind==="bubble",null)}i.addEventListener("pointermove",m=>{if(m.pointerType&&m.pointerType!=="mouse")return;let _=ki(m.clientX,m.clientY),b=_?_.kind+":"+_.key:null,B=Es(_);Hi=B&&B.kind==="coin"?B.coin.mint:null,b!==_i&&(_i=b,i.style.cursor=b?"pointer":"grab"),e.onHover&&e.onHover(B,m.clientX,m.clientY)}),i.addEventListener("pointerdown",m=>{ii=[m.clientX,m.clientY]}),i.addEventListener("pointerup",m=>{if(!ii||Math.hypot(m.clientX-ii[0],m.clientY-ii[1])>8)return;let _=Es(ki(m.clientX,m.clientY));if(_&&_.kind==="coin"){let b=de.get(_.coin.mint);ni=b&&b.car?b.car:null,bt.autoRotate=!1}else _&&_.kind==="perp"?(ni=Tn.find(b=>b.p.name===_.perp.name)||null,bt.autoRotate=!1):ni=null;e.onPick&&e.onPick(_)});let zt=new Ot,_n=new Rn,Yt=new D,cn=new D,Vi=new os,Mn=new Ue,ft=0,Yr=performance.now(),si=0,Er=!1,js=!1,Ss=0;function Zr(m){ft+=m,a.uTime.value=ft,Ss++;let _=0;for(Se.forEach((U,K)=>{U.d+=U.sp*m,U.police&&U.chase&&(U.r=U.chase.r,U.d=U.chase.d-U.gap);let[me,He,rt]=xt(U.r,U.d,1);_n.setFromEuler(Vi.set(0,rt,0));let Rt=Math.sin(rt),It=Math.cos(rt);for(let[dn,rn,f]of ee)Yt.set(me+rn[0]*It+rn[2]*Rt,rn[1],He-rn[0]*Rt+rn[2]*It),cn.set(...f),zt.compose(Yt,_n,cn),we[dn].setMatrixAt(K,zt);U.police?Mn.set(Math.sin(ft*10+K)>0?"#1a1a2e":"#f4f4ff"):Mn.copy(U.color),we.body.setColorAt(K,Mn);let un=U.police?[[.3,1.35,-.1,Math.sin(ft*12+K)>0?[5,.3,.4]:[.3,.5,5]],[-.3,1.35,-.1,Math.sin(ft*12+K)>0?[.3,.5,5]:[5,.3,.4]]]:[[.35,.6,1.12,[4,3.8,3.2]],[-.35,.6,1.12,[4,3.8,3.2]],[.38,.6,-1.12,[3,.2,.25]],[-.38,.6,-1.12,[3,.2,.25]]];for(let[dn,rn,f,T]of un)Yt.set(me+dn*It+f*Rt,rn,He-dn*Rt+f*It),cn.set(.28,.16,.1),zt.compose(Yt,_n,cn),Ee.setMatrixAt(_,zt),Ee.setColorAt(_,Mn.setRGB(...T)),_++;U.pos=[me,He]});_<A*4;_++)zt.makeScale(0,0,0),Ee.setMatrixAt(_,zt);Ct(m);for(let U of Object.values(we))U.instanceMatrix.needsUpdate=!0;we.body.instanceColor.needsUpdate=!0,Ee.instanceMatrix.needsUpdate=!0,Ee.instanceColor.needsUpdate=!0;let b=sn==="story"||sn==="drive";for(let[U,K]of de){if(!K.car||!K.car.pos)continue;let me=Math.min(1,(ft-K.born)*2);K.sp.position.set(K.car.pos[0],K.car.by+.2*Math.sin(ft*2+K.car.ph),K.car.pos[1]);let He=1,rt=1;if(b){let Rt=c.position.distanceTo(K.sp.position),It=en.pinPos(K.car,ft)!=null;He=It?Math.max(.62,Math.min(1,(Rt-3)/22)):Math.max(.22,Math.min(1,(Rt-3)/30)),rt=It?1:Math.max(0,Math.min(1,(Rt-5)/7))}K.sp.material.opacity=rt,K.sp.scale.set(6.4*me*He*(Hi===U?1.25:1),4*me*He*(Hi===U?1.25:1),1)}Tn.forEach((U,K)=>{U.d+=m*1.6;let me=2*Sn-12,He=(U.d+(U.dir<0?me:0))%(2*me)/me,rt=He<=1,Rt=-Sn+6+(rt?He:2-He)*me,It=U.x+Math.sin(ft*.3+U.ph)*1.5,un=.25+Math.sin(ft*1.6+U.ph)*.18,dn=rt?0:Math.PI;_n.setFromEuler(Vi.set(Math.sin(ft*1.3+U.ph)*.05,dn,Math.sin(ft*1.1+U.ph)*.06));let rn=Math.sin(dn),f=Math.cos(dn);for(let[P,$,ae]of kr)Yt.set(It+$[2]*rn*U.sz,un+$[1]*U.sz,Rt+$[2]*f*U.sz),cn.set(ae[0]*U.sz,ae[1]*U.sz,ae[2]*U.sz),zt.compose(Yt,_n,cn),gi[P].setMatrixAt(K,zt);gi.sail.setColorAt(K,Mn.setRGB(...U.p.chg>=0?[.14,1.2,.72]:[1.35,.2,.66])),U.sp.position.set(It,7.6*U.sz+.3,Rt);let T=_i==="perp:"+U.p.name?1.2:1;for(U.sp.scale.set(6.6*T,2.4*T,1),U.pos=[It,Rt],U.wake+=m*7;U.wake>=1;)U.wake--,xi(Yt.set(It-rn*2.8*U.sz+(l()-.5),.5,Rt-f*2.8*U.sz),ds.set((l()-.5)*1.5,.6+l()*.6,(l()-.5)*1.5),[2.2,2.4,2.8],.9+l()*.4,.3,2.5)});for(let U in gi)gi[U].instanceMatrix.needsUpdate=!0;for(gi.sail.instanceColor&&(gi.sail.instanceColor.needsUpdate=!0);mn.length;){let[U,K,me]=mn.pop(),He=me?[.8,2.4,3.8]:[3.6,2.6,.5];for(let rt=0;rt<(me?90:40);rt++)xi(Yt.set(U,3,K),ds.set((l()-.5)*(me?22:14),6+l()*(me?18:10),(l()-.5)*(me?22:14)),rt%4?He:[3.4,3.4,3.6],1.1+l()*.7,me?.6:.45,1.6)}let B=0;Ci.forEach((U,K)=>{for(let me=0;me<10;me++){let He=.5+.9*Math.abs(Math.sin(ft*(6+me)+me*1.7+K));Yt.set(U.x+(me*37%5-2)*.45,U.y+He*.5+me%3*.3,U.z+(me*13%5-2)*.45),cn.set(.7,He,.7),zt.compose(Yt,_n.identity(),cn),Dn.setMatrixAt(B,zt),Dn.setColorAt(B,Mn.setRGB(4,1.2+me%3*.6,.2)),B++}U.light.intensity=45+25*Math.sin(ft*13+K)}),Dn.instanceMatrix.needsUpdate=!0,Dn.instanceColor.needsUpdate=!0,Ua.forEach((U,K)=>{U.t+=m,U.t>U.life&&(U.t=0);let me=U.t/U.life,He=(U.s+me*3.2)*(me<.1?me*10:me>.85?(1-me)/.15:1);Yt.set(U.f.x+U.ox+me*me*16,U.f.y+2+me*34,U.f.z+U.oz+me*3),cn.setScalar(Math.max(.001,He)),_n.setFromEuler(Vi.set(me*2+K,me*3,0)),zt.compose(Yt,_n,cn),gr.setMatrixAt(K,zt)}),gr.instanceMatrix.needsUpdate=!0,_r-=m,_r<=0&&d>2.6&&(Na(),_r=(2.6+l()*3)*(.45+gs*1.3)),fs+=m;let X=Math.max(0,1-fs/.9);Hs.position.copy(Vn),Hs.intensity=X*900,xr.position.copy(Vn),xr.scale.setScalar(1+fs*9),xr.material.opacity=X,ks.position.copy(Vn),ks.scale.setScalar(1+fs*22),ks.material.opacity=Math.max(0,1-fs/1.1)*.45,vo.forEach((U,K)=>{if(U.t+=m,U.t>2.5){zt.makeScale(0,0,0),$i.setMatrixAt(K,zt);return}U.v.y-=26*m,U.p.addScaledVector(U.v,m),U.p.y<.2&&(U.p.y=.2,U.v.multiplyScalar(.4),U.v.y=Math.abs(U.v.y)*.3);let me=.45*(1-U.t/2.5);zt.compose(U.p,_n.setFromEuler(Vi.set(U.t*7,U.t*5,0)),cn.setScalar(me)),$i.setMatrixAt(K,zt),$i.setColorAt(K,U.c)}),$i.instanceMatrix.needsUpdate=!0,$i.instanceColor&&($i.instanceColor.needsUpdate=!0),Hn-=m,Hn<=0&&(Da(),Hn=(1.5+l()*2.2)*(1.6-gs*1.1));for(let U=Qi.length-1;U>=0;U--){let K=Qi[U];if(K.t+=m,K.v.y-=9*m,K.p.addScaledVector(K.v,m),xi(K.p,ds.set((l()-.5)*1.5,-2-l()*2,(l()-.5)*1.5),[3,2.4,1.4],.45+l()*.3,.26,2.5),K.t>=K.fuse){let me=Vs[K.col],He=Vs[(K.col+2)%Vs.length],rt=t?60:110,Rt=19+l()*8;for(let It=0;It<rt;It++){let un=l()*Math.PI*2,dn=Math.acos(2*l()-1),rn=Rt*(.75+l()*.3);ds.set(Math.sin(dn)*Math.cos(un)*rn,Math.cos(dn)*rn,Math.sin(dn)*Math.sin(un)*rn),xi(K.p,ds,It%5===0?He:me,1.6+l()*.9,.85+l()*.4,1.5)}Qi.splice(U,1)}}ji.forEach((U,K)=>{if(U.t>=U.life){U.t<50&&(U.t=99,zt.makeScale(0,0,0),Gn.setMatrixAt(K,zt));return}U.t+=m,U.v.y-=7*m,U.v.multiplyScalar(Math.max(0,1-U.drag*m)),U.p.addScaledVector(U.v,m);let me=Math.max(0,1-U.t/U.life),He=me*me*(Math.sin(ft*40+K)>-.6?1:.3);zt.compose(U.p,_n.identity(),cn.setScalar(U.s*(.4+.6*me))),Gn.setMatrixAt(K,zt),Gn.setColorAt(K,Mn.setRGB(U.c.r*He,U.c.g*He,U.c.b*He))}),Gn.instanceMatrix.needsUpdate=!0,Gn.instanceColor&&(Gn.instanceColor.needsUpdate=!0),Xs+=(Math.max(0,Math.min(1,(.38-gs)/.22))-Xs)*Math.min(1,m*.5),a.uMood.value+=(gs-a.uMood.value)*Math.min(1,m*.4);let V=e.reduced?0:Math.floor(Wr*Xs);if(xs.count=V,V){let U=bt.target.x,K=bt.target.z;for(let me=0;me<V;me++){let He=yo[me];He.y-=He.v*m,He.y<0&&(He.y+=80,He.x=(l()-.5)*170,He.z=(l()-.5)*170),Yt.set(U+He.x,He.y,K+He.z),cn.set(.07,1.6,.07),zt.compose(Yt,_n.set(.08,0,.04,1).normalize(),cn),xs.setMatrixAt(me,zt)}xs.instanceMatrix.needsUpdate=!0}ps-=m,ps<=0&&(ms=0,ps=(9+l()*9)*(.5+gs*1.1)),ms+=m,a.uFlash.value=e.reduced?0:ms<.07?.5:ms<.14?.08:ms<.22?.38:Math.max(0,.38-(ms-.22)*1.6),d<99&&Ba(m),Xn.step(m,ft),Xn.glowG.visible=d>2.2;let q=d>2.6;se.visible=d>1.6,Dn.visible=gr.visible=q;for(let U of Ws)U.cone.visible=q;for(let U of Fs)U.sp.visible=q;Ce.rotation.z=ft*.16,it.forEach((U,K)=>{let me=K/it.length*pr+ft*.16;U.position.set(Math.cos(me)*15,Math.sin(me)*15-1.8,0)});{let U=Math.floor(ft*9);for(let K=0;K<xe;K++){let me=(K+U)%8;ze.setColorAt(K,Mn.setRGB(...me<2?[3,.5,1.8]:me<4?[.5,2,3.2]:me<6?[3.2,2.6,.6]:[1.4,.6,3]))}ze.instanceColor.needsUpdate=!0}nt.rotation.y=ft*.55,Jt(m);{let U=ft*.045;mt.position.set(Math.cos(U)*118,74+Math.sin(ft*.3)*2,Math.sin(U)*118),mt.rotation.y=-U-Math.PI/2,mt.userData.tip.visible=Math.sin(ft*5)>0}for(let U=zn.length-1;U>=0;U--){let K=zn[U];K.t+=m;let me=K.t/K.life;if(me>=1){r.remove(K.sp),K.sp.material.map.dispose(),K.sp.material.dispose(),zn.splice(U,1);continue}let He=Math.min(1,K.t/.38),rt=1+2.70158*Math.pow(He-1,3)+1.70158*Math.pow(He-1,2),Rt=me>.84?(1-me)/.16:1,It=K.car&&K.car.pos?K.car.pos[0]:K.x,un=K.car&&K.car.pos?K.car.pos[1]:K.z,dn=(K.car?8:K.y)+K.t*.45;K.sp.position.set(It,dn,un);let rn=c.position.distanceTo(K.sp.position),f=Math.max(.32,Math.min(2.6,rn/95))*rt;K.sp.scale.set(10.8*f,4.05*f,1),K.sp.material.opacity=Rt}{let U=a.uMood.value,K=Math.min(1,Math.max(0,(U-.25)/.25)),me=Math.min(1,Math.max(0,(U-.6)/.25))*.6,He=.62+.38*K,rt=.12+.19*K,Rt=.3+.32*K;He+=(1-He)*me,rt+=(.55-rt)*me,Rt+=(.5-Rt)*me;let It=[.068,.023,.25];o.setRGB(It[0]+(Math.pow(He,2.2)*.7-It[0])*.42,It[1]+(Math.pow(rt,2.2)*.7-It[1])*.42,It[2]+(Math.pow(Rt,2.2)*.7-It[2])*.42)}for(let U of Wn){let K=ft*U.spd+U.ph;U.g.position.set(Math.cos(K)*U.r,U.h+Math.sin(ft*1.3+U.ph)*1.5,Math.sin(K)*U.r),U.g.rotation.y=-K,U.rot.rotation.y=ft*30,U.cone.rotation.z=Math.sin(ft*.7+U.ph)*.35,U.red.visible=Math.sin(ft*6+U.ph)>0}for(let U of Ws)U.cone.rotation.set(Math.sin(ft*U.sp+U.ph)*.5,0,Math.cos(ft*U.sp*.8+U.ph)*.5);if(hi){let U=ft*.04+.9;c.position.set(Math.cos(U)*228,138,Math.sin(U)*228),bt.target.set(0,4,-10)}else if(qn>0){Zs+=m;let U=Math.min(1,Zs/3.4),K=U<.5?4*U*U*U:1-Math.pow(-2*U+2,3)/2;if(sn==="story"){let[me,He]=Oa(Math.round(Li));Ys.lerp(me,.1),qr.lerp(He,.1)}else sn==="drive"&&(en.chasePose(ys,ns),Ys.lerp(ys,.1),qr.lerp(ns,.1));c.position.lerpVectors(es,Ys,K),bt.target.lerpVectors(yr,qr,K),a.uFogD.value=vs+(_s-vs)*K,U>=1&&(qn=0)}else sn==="story"&&Mr.length?en.story(Li,m):sn==="drive"?en.free(m):ni&&ni.pos?bt.target.lerp(Yt.set(ni.pos[0],2,ni.pos[1]),.08):(ts+=m,ts>18&&!e.reduced?Xl(m):ts>10&&!bt.autoRotate&&(bt.autoRotate=!0));sn==="map"&&!qn?bt.update():c.lookAt(bt.target),e.onFrame&&Ss%3===0&&e.onFrame({cars:Se,coins:kt,boats:Tn,helis:Wn,garage:yn.length,cam:c,controls:bt,half:Sn,beach:Qt,pitch:mi,me:en.S,mode:sn})}function Ba(m){d+=m;let _=!0;for(let{m:b,list:B}of g){let X=!1;for(let V=0;V<B.length;V++){let q=B[V];q.rd==null&&(q.rd=.15+Math.hypot(q.x,q.z)/300*2.2+l()*.35);let U=Math.min(1,Math.max(0,(d-q.rd)/.75));if(U<1&&(_=!1),q.rk===U)continue;q.rk=U,X=!0;let K=U>=1?1:1+2.70158*Math.pow(U-1,3)+1.70158*Math.pow(U-1,2),me=Math.max(.001,K);Yt.set(q.x,(q.y+q.h/2)*me,q.z),cn.set(q.w,q.h*me,q.d),_n.setFromEuler(Vi.set(q.rx||0,q.ry||0,q.rz||0)),zt.compose(Yt,_n,cn),b.setMatrixAt(V,zt)}X&&(b.instanceMatrix.needsUpdate=!0)}_&&(d=99)}let Nn=new D,bs=new D,Ha=0;function Xl(m){bt.autoRotate=!1,Ha+=m;let _=Math.floor(Ha/9)%10,b=ft*.07;if(_>=5){let[X,V]=Xn.shots[["airport","port","arena","bridge","site"][_-5]](),q=1-Math.exp(-m*.9);bt.target.lerp(V,q),c.position.lerp(X,q*.8);return}if(_===1){let X=kt.filter(V=>V.coin&&!V.mine&&V.pos&&!V.coin.isNew).sort((V,q)=>(q.coin.heat||0)-(V.coin.heat||0))[0];X?(Nn.set(X.pos[0],2,X.pos[1]),bs.set(Math.cos(b)*30,17,Math.sin(b)*30)):(Nn.set(0,6,0),bs.set(Math.cos(b)*150,85,Math.sin(b)*150))}else _===2?(Nn.set(Qt+38,3,Math.sin(ft*.08)*55),bs.set(-62,32,46)):_===3?(Nn.set(I.x,15,I.z),bs.set(-34+Math.sin(b)*10,-2,44)):_===4&&Wn[0]?(Nn.copy(Wn[0].g.position),bs.set(Math.cos(b)*38,10,Math.sin(b)*38)):(Nn.set(0,6,0),bs.set(Math.cos(b)*150,85,Math.sin(b)*150));let B=1-Math.exp(-m*.9);bt.target.lerp(Nn,B),c.position.lerp(bs.add(Nn),B*.8)}function ka(m){if(si=0,Er)return;let _=Math.max(0,Math.min(.05,(m-Yr)/1e3));Yr=m,!js||Ss%2===0?(Zr(e.reduced?_*.3:_),Pi.render()):Ss++,si=requestAnimationFrame(ka)}let Qs=()=>{!si&&!Er&&(Yr=performance.now(),si=requestAnimationFrame(ka))};document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(si),si=0):Qs()}),Zr(0),Qs();let Va={setCoins:At,setPerps:Gl,setWhales:vr,setGarage:mr,home:()=>re,setMood(m){gs=Math.max(0,Math.min(1,m))},chased:()=>Vt,follow(m){let _=de.get(m);_&&(sn==="drive"&&$s(),ni=_.car,bt.autoRotate=!1)},followPerp(m){let _=Tn.find(b=>b.p.name===m);_&&(sn==="drive"&&$s(),ni=_,bt.autoRotate=!1)},unfollow(){ni=null},pause(m){Er=m,m?(cancelAnimationFrame(si),si=0):Qs()},slow(m){js=m},enter:Fa,entered:()=>!hi,bubble:Hr,setStory(m){Mr=m.slice()},story(m){Li=m,!hi&&sn!=="story"&&(sn="story",bt.enabled=!1,ni=null,en.setActive(!1,e.onWheel))},roam(){hi||sn==="drive"||Ms(!1)},mode:()=>sn,overview(){hi||(ni=null,$s())},toggleMap(){sn==="drive"?$s():sn==="map"&&Ms(!1)},skip(){hi=!1,qn=0,a.uFogD.value=_s,en.place(0),en.chasePose(c.position,bt.target),Ms(!1),d=99;for(let{m,list:_}of g)_.forEach((b,B)=>{Yt.set(b.x,b.y+b.h/2,b.z),cn.set(b.w,b.h,b.d),_n.setFromEuler(Vi.set(b.rx||0,b.ry||0,b.rz||0)),zt.compose(Yt,_n,cn),m.setMatrixAt(B,zt)}),m.instanceMatrix.needsUpdate=!0},shot(m){let _=Math.round(m*30);for(let b=0;b<_;b++)Zr(1/30);Pi.render()},info:()=>({calls:n.info.render.calls,tris:n.info.render.triangles}),car:()=>({x:en.S.x,z:en.S.z,yaw:en.S.yaw,v:en.S.v,mode:sn}),canDrive:(m,_)=>en.open(m,_),launched:m=>Xn.launched(m),takeoff:m=>Xn.takeoff(m),setBanner:m=>Xn.setBanner(m),setArena:m=>{Js=m&&m.hot?m.hot.mint:null,Xn.setArena(m)},view(m,_){hi=!1,sn="map",bt.enabled=!0,en.setActive(!1),qn=0,a.uFogD.value=_s,c.position.set(...m),bt.target.set(..._),bt.update()}};return window.__bloxWorld=Va,Va}export{Y_ as startWorld};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
