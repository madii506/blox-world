var xr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_r={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zf=0,Eh=1,Bf=2;var ju=1,Hf=2,ps=3,Gs=0,qn=1,Xn=2;var $i=0,ta=1,mi=2,bh=3,wh=4,kf=5,lr=100,Vf=101,Gf=102,Th=103,Ah=104,Wf=200,Xf=201,qf=202,Yf=203,mc=204,gc=205,Zf=206,Jf=207,Kf=208,$f=209,jf=210,Qf=211,ed=212,td=213,nd=214,id=0,sd=1,rd=2,Oo=3,ad=4,od=5,ld=6,cd=7,eh=0,hd=1,ud=2,ks=0,th=1,nh=2,ih=3,ja=4,fd=5,sh=6;var Qu=300,sa=301,ra=302,xc=303,_c=304,fl=306,vc=1e3,Bi=1001,yc=1002,An=1003,Rh=1004;var Dl=1005;var Ti=1006,dd=1007;var ka=1008;var Vs=1009,pd=1010,md=1011,rh=1012,ef=1013,Bs=1014,Hs=1015,Hi=1016,tf=1017,nf=1018,ur=1020,gd=1021,pi=1023,xd=1024,_d=1025,fr=1026,aa=1027,vd=1028,sf=1029,yd=1030,rf=1031,af=1033,Nl=33776,Fl=33777,Ol=33778,zl=33779,Ch=35840,Ph=35841,Ih=35842,Lh=35843,of=36196,Uh=37492,Dh=37496,Nh=37808,Fh=37809,Oh=37810,zh=37811,Bh=37812,Hh=37813,kh=37814,Vh=37815,Gh=37816,Wh=37817,Xh=37818,qh=37819,Yh=37820,Zh=37821,Bl=36492,Jh=36494,Kh=36495,Md=36283,$h=36284,jh=36285,Qh=36286;var zo=2300,Bo=2301,Hl=2302,eu=2400,tu=2401,nu=2402;var lf=3e3,dr=3001,Sd=3200,Ed=3201,cf=0,bd=1,Ai="",Kt="srgb",xs="srgb-linear",ah="display-p3",dl="display-p3-linear",Ho="linear",sn="srgb",ko="rec709",Vo="p3";var Lr=7680;var iu=519,wd=512,Td=513,Ad=514,hf=515,Rd=516,Cd=517,Pd=518,Id=519,Mc=35044;var su="300 es",Sc=1035,ms=2e3,Go=2001,ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ru=1234567,Oa=Math.PI/180,Va=180/Math.PI;function gs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vn[i&255]+Vn[i>>8&255]+Vn[i>>16&255]+Vn[i>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[t&63|128]+Vn[t>>8&255]+"-"+Vn[t>>16&255]+Vn[t>>24&255]+Vn[n&255]+Vn[n>>8&255]+Vn[n>>16&255]+Vn[n>>24&255]).toLowerCase()}function Nn(i,e,t){return Math.max(e,Math.min(t,i))}function oh(i,e){return(i%e+e)%e}function Ld(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ud(i,e,t){return i!==e?(t-i)/(e-i):0}function za(i,e,t){return(1-t)*i+t*e}function Dd(i,e,t,n){return za(i,e,1-Math.exp(-t*n))}function Nd(i,e=1){return e-Math.abs(oh(i,e*2)-e)}function Fd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Od(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function zd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Bd(i,e){return i+Math.random()*(e-i)}function Hd(i){return i*(.5-Math.random())}function kd(i){i!==void 0&&(ru=i);let e=ru+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vd(i){return i*Oa}function Gd(i){return i*Va}function Ec(i){return(i&i-1)===0&&i!==0}function Wd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xd(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),p=o((e-n)/2),m=r((n-e)/2),v=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*p,a*l);break;case"YZY":i.set(c*p,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*p,a*h,a*l);break;case"XZX":i.set(a*h,c*v,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*v,a*l);break;case"ZYZ":i.set(c*v,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var uf={DEG2RAD:Oa,RAD2DEG:Va,generateUUID:gs,clamp:Nn,euclideanModulo:oh,mapLinear:Ld,inverseLerp:Ud,lerp:za,damp:Dd,pingpong:Nd,smoothstep:Fd,smootherstep:Od,randInt:zd,randFloat:Bd,randFloatSpread:Hd,seededRandom:kd,degToRad:Vd,radToDeg:Gd,isPowerOfTwo:Ec,ceilPowerOfTwo:Wd,floorPowerOfTwo:Wo,setQuaternionFromProperEuler:Xd,normalize:tn,denormalize:Ki},ke=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],m=n[5],v=n[8],_=s[0],g=s[3],f=s[6],I=s[1],S=s[4],O=s[7],P=s[2],z=s[5],N=s[8];return r[0]=o*_+a*I+c*P,r[3]=o*g+a*S+c*z,r[6]=o*f+a*O+c*N,r[1]=l*_+h*I+u*P,r[4]=l*g+h*S+u*z,r[7]=l*f+h*O+u*N,r[2]=p*_+m*I+v*P,r[5]=p*g+m*S+v*z,r[8]=p*f+m*O+v*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,p=a*c-h*r,m=l*r-o*c,v=t*u+n*p+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/v;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=p*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kl.makeScale(e,t)),this}rotate(e){return this.premultiply(kl.makeRotation(-e)),this}translate(e,t){return this.premultiply(kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kl=new Bt;function ff(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qd(){let i=Xo("canvas");return i.style.display="block",i}var au={};function Ba(i){i in au||(au[i]=!0,console.warn(i))}var ou=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lu=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),lo={[xs]:{transfer:Ho,primaries:ko,toReference:i=>i,fromReference:i=>i},[Kt]:{transfer:sn,primaries:ko,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[dl]:{transfer:Ho,primaries:Vo,toReference:i=>i.applyMatrix3(lu),fromReference:i=>i.applyMatrix3(ou)},[ah]:{transfer:sn,primaries:Vo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(lu),fromReference:i=>i.applyMatrix3(ou).convertLinearToSRGB()}},Yd=new Set([xs,dl]),Jt={enabled:!0,_workingColorSpace:xs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Yd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=lo[e].toReference,s=lo[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return lo[i].primaries},getTransfer:function(i){return i===Ai?Ho:lo[i].transfer}};function na(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ur,qo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ur===void 0&&(Ur=Xo("canvas")),Ur.width=e.width,Ur.height=e.height;let n=Ur.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ur}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=na(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(na(t[n]/255)*255):t[n]=na(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Zd=0,Yo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=gs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gl(s[o].image)):r.push(Gl(s[o]))}else r=Gl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Gl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jd=0,gi=class i extends ji{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Bi,s=Bi,r=Ti,o=ka,a=pi,c=Vs,l=i.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=gs(),this.name="",this.source=new Yo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===dr?Kt:Ai),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vc:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vc:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Kt?dr:lf}set encoding(e){Ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===dr?Kt:Ai}};gi.DEFAULT_IMAGE=null;gi.DEFAULT_MAPPING=Qu;gi.DEFAULT_ANISOTROPY=1;var Qt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],p=c[1],m=c[5],v=c[9],_=c[2],g=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(v+g)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,O=(m+1)/2,P=(f+1)/2,z=(h+p)/4,N=(u+_)/4,ue=(v+g)/4;return S>O&&S>P?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=z/n,r=N/n):O>P?O<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(O),n=z/s,r=ue/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=N/r,s=ue/r),this.set(n,s,r,t),this}let I=Math.sqrt((g-v)*(g-v)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(I)<.001&&(I=1),this.x=(g-v)/I,this.y=(u-_)/I,this.z=(p-h)/I,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bc=class extends ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Ba("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===dr?Kt:Ai),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new gi(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Yo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends bc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Zo=class extends gi{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wc=class extends gi{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],p=r[o+0],m=r[o+1],v=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(u!==_||c!==p||l!==m||h!==v){let g=1-a,f=c*p+l*m+h*v+u*_,I=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){let P=Math.sqrt(S),z=Math.atan2(P,f*I);g=Math.sin(g*z)/P,a=Math.sin(a*z)/P}let O=a*I;if(c=c*g+p*O,l=l*g+m*O,h=h*g+v*O,u=u*g+_*O,g===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],p=r[o+1],m=r[o+2],v=r[o+3];return e[t]=a*v+h*u+c*m-l*p,e[t+1]=c*v+h*p+l*u-a*m,e[t+2]=l*v+h*m+a*p-c*u,e[t+3]=h*v-a*u-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),p=c(n/2),m=c(s/2),v=c(r/2);switch(o){case"XYZ":this._x=p*h*u+l*m*v,this._y=l*m*u-p*h*v,this._z=l*h*v+p*m*u,this._w=l*h*u-p*m*v;break;case"YXZ":this._x=p*h*u+l*m*v,this._y=l*m*u-p*h*v,this._z=l*h*v-p*m*u,this._w=l*h*u+p*m*v;break;case"ZXY":this._x=p*h*u-l*m*v,this._y=l*m*u+p*h*v,this._z=l*h*v+p*m*u,this._w=l*h*u-p*m*v;break;case"ZYX":this._x=p*h*u-l*m*v,this._y=l*m*u+p*h*v,this._z=l*h*v-p*m*u,this._w=l*h*u+p*m*v;break;case"YZX":this._x=p*h*u+l*m*v,this._y=l*m*u+p*h*v,this._z=l*h*v-p*m*u,this._w=l*h*u-p*m*v;break;case"XZY":this._x=p*h*u-l*m*v,this._y=l*m*u-p*h*v,this._z=l*h*v+p*m*u,this._w=l*h*u+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],p=n+a+u;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wl.copy(this).projectOnVector(e),this.sub(Wl)}reflect(e){return this.sub(Wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wl=new D,cu=new Rn,_s=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ni):Ni.fromBufferAttribute(r,o),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),ho.subVectors(this.max,Aa),Dr.subVectors(e.a,Aa),Nr.subVectors(e.b,Aa),Fr.subVectors(e.c,Aa),Ds.subVectors(Nr,Dr),Ns.subVectors(Fr,Nr),ir.subVectors(Dr,Fr);let t=[0,-Ds.z,Ds.y,0,-Ns.z,Ns.y,0,-ir.z,ir.y,Ds.z,0,-Ds.x,Ns.z,0,-Ns.x,ir.z,0,-ir.x,-Ds.y,Ds.x,0,-Ns.y,Ns.x,0,-ir.y,ir.x,0];return!Xl(t,Dr,Nr,Fr,ho)||(t=[1,0,0,0,1,0,0,0,1],!Xl(t,Dr,Nr,Fr,ho))?!1:(uo.crossVectors(Ds,Ns),t=[uo.x,uo.y,uo.z],Xl(t,Dr,Nr,Fr,ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},cs=[new D,new D,new D,new D,new D,new D,new D,new D],Ni=new D,co=new _s,Dr=new D,Nr=new D,Fr=new D,Ds=new D,Ns=new D,ir=new D,Aa=new D,ho=new D,uo=new D,sr=new D;function Xl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){sr.fromArray(i,r);let a=s.x*Math.abs(sr.x)+s.y*Math.abs(sr.y)+s.z*Math.abs(sr.z),c=e.dot(sr),l=t.dot(sr),h=n.dot(sr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Kd=new _s,Ra=new D,ql=new D,pr=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Kd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);let t=Ra.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ra,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(ql)),this.expandByPoint(Ra.copy(e.center).sub(ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hs=new D,Yl=new D,fo=new D,Fs=new D,Zl=new D,po=new D,Jl=new D,oa=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hs.copy(this.origin).addScaledVector(this.direction,t),hs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Yl.copy(e).add(t).multiplyScalar(.5),fo.copy(t).sub(e).normalize(),Fs.copy(this.origin).sub(Yl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(fo),a=Fs.dot(this.direction),c=-Fs.dot(fo),l=Fs.lengthSq(),h=Math.abs(1-o*o),u,p,m,v;if(h>0)if(u=o*c-a,p=o*a-c,v=r*h,u>=0)if(p>=-v)if(p<=v){let _=1/h;u*=_,p*=_,m=u*(u+o*p+2*a)+p*(o*u+p+2*c)+l}else p=r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*c)+l;else p<=-v?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+p*(p+2*c)+l):p<=v?(u=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+p*(p+2*c)+l);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Yl).addScaledVector(fo,p),m}intersectSphere(e,t){hs.subVectors(e.center,this.origin);let n=hs.dot(this.direction),s=hs.dot(hs)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hs)!==null}intersectTriangle(e,t,n,s,r){Zl.subVectors(t,e),po.subVectors(n,e),Jl.crossVectors(Zl,po);let o=this.direction.dot(Jl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fs.subVectors(this.origin,e);let c=a*this.direction.dot(po.crossVectors(Fs,po));if(c<0)return null;let l=a*this.direction.dot(Zl.cross(Fs));if(l<0||c+l>o)return null;let h=-a*Fs.dot(Jl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vt=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,p,m,v,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,p,m,v,_,g)}set(e,t,n,s,r,o,a,c,l,h,u,p,m,v,_,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=p,f[3]=m,f[7]=v,f[11]=_,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Or.setFromMatrixColumn(e,0).length(),r=1/Or.setFromMatrixColumn(e,1).length(),o=1/Or.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let p=o*h,m=o*u,v=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+v*l,t[5]=p-_*l,t[9]=-a*c,t[2]=_-p*l,t[6]=v+m*l,t[10]=o*c}else if(e.order==="YXZ"){let p=c*h,m=c*u,v=l*h,_=l*u;t[0]=p+_*a,t[4]=v*a-m,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-v,t[6]=_+p*a,t[10]=o*c}else if(e.order==="ZXY"){let p=c*h,m=c*u,v=l*h,_=l*u;t[0]=p-_*a,t[4]=-o*u,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*h,t[9]=_-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let p=o*h,m=o*u,v=a*h,_=a*u;t[0]=c*h,t[4]=v*l-m,t[8]=p*l+_,t[1]=c*u,t[5]=_*l+p,t[9]=m*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let p=o*c,m=o*l,v=a*c,_=a*l;t[0]=c*h,t[4]=_-p*u,t[8]=v*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*u+v,t[10]=p-_*u}else if(e.order==="XZY"){let p=o*c,m=o*l,v=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=p*u+_,t[5]=o*h,t[9]=m*u-v,t[2]=v*u-m,t[6]=a*h,t[10]=_*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($d,e,jd)}lookAt(e,t,n){let s=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),Os.crossVectors(n,fi),Os.lengthSq()===0&&(Math.abs(n.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),Os.crossVectors(n,fi)),Os.normalize(),mo.crossVectors(fi,Os),s[0]=Os.x,s[4]=mo.x,s[8]=fi.x,s[1]=Os.y,s[5]=mo.y,s[9]=fi.y,s[2]=Os.z,s[6]=mo.z,s[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],m=n[13],v=n[2],_=n[6],g=n[10],f=n[14],I=n[3],S=n[7],O=n[11],P=n[15],z=s[0],N=s[4],ue=s[8],w=s[12],y=s[1],J=s[5],ce=s[9],be=s[13],H=s[2],X=s[6],ie=s[10],ye=s[14],pe=s[3],se=s[7],Ee=s[11],xe=s[15];return r[0]=o*z+a*y+c*H+l*pe,r[4]=o*N+a*J+c*X+l*se,r[8]=o*ue+a*ce+c*ie+l*Ee,r[12]=o*w+a*be+c*ye+l*xe,r[1]=h*z+u*y+p*H+m*pe,r[5]=h*N+u*J+p*X+m*se,r[9]=h*ue+u*ce+p*ie+m*Ee,r[13]=h*w+u*be+p*ye+m*xe,r[2]=v*z+_*y+g*H+f*pe,r[6]=v*N+_*J+g*X+f*se,r[10]=v*ue+_*ce+g*ie+f*Ee,r[14]=v*w+_*be+g*ye+f*xe,r[3]=I*z+S*y+O*H+P*pe,r[7]=I*N+S*J+O*X+P*se,r[11]=I*ue+S*ce+O*ie+P*Ee,r[15]=I*w+S*be+O*ye+P*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],p=e[10],m=e[14],v=e[3],_=e[7],g=e[11],f=e[15];return v*(+r*c*u-s*l*u-r*a*p+n*l*p+s*a*m-n*c*m)+_*(+t*c*m-t*l*p+r*o*p-s*o*m+s*l*h-r*c*h)+g*(+t*l*u-t*a*m-r*o*u+n*o*m+r*a*h-n*l*h)+f*(-s*a*h-t*c*u+t*a*p+s*o*u-n*o*p+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],p=e[10],m=e[11],v=e[12],_=e[13],g=e[14],f=e[15],I=u*g*l-_*p*l+_*c*m-a*g*m-u*c*f+a*p*f,S=v*p*l-h*g*l-v*c*m+o*g*m+h*c*f-o*p*f,O=h*_*l-v*u*l+v*a*m-o*_*m-h*a*f+o*u*f,P=v*u*c-h*_*c-v*a*p+o*_*p+h*a*g-o*u*g,z=t*I+n*S+s*O+r*P;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/z;return e[0]=I*N,e[1]=(_*p*r-u*g*r-_*s*m+n*g*m+u*s*f-n*p*f)*N,e[2]=(a*g*r-_*c*r+_*s*l-n*g*l-a*s*f+n*c*f)*N,e[3]=(u*c*r-a*p*r-u*s*l+n*p*l+a*s*m-n*c*m)*N,e[4]=S*N,e[5]=(h*g*r-v*p*r+v*s*m-t*g*m-h*s*f+t*p*f)*N,e[6]=(v*c*r-o*g*r-v*s*l+t*g*l+o*s*f-t*c*f)*N,e[7]=(o*p*r-h*c*r+h*s*l-t*p*l-o*s*m+t*c*m)*N,e[8]=O*N,e[9]=(v*u*r-h*_*r-v*n*m+t*_*m+h*n*f-t*u*f)*N,e[10]=(o*_*r-v*a*r+v*n*l-t*_*l-o*n*f+t*a*f)*N,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*m-t*a*m)*N,e[12]=P*N,e[13]=(h*_*s-v*u*s+v*n*p-t*_*p-h*n*g+t*u*g)*N,e[14]=(v*a*s-o*_*s-v*n*c+t*_*c+o*n*g-t*a*g)*N,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*p+t*a*p)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,p=r*l,m=r*h,v=r*u,_=o*h,g=o*u,f=a*u,I=c*l,S=c*h,O=c*u,P=n.x,z=n.y,N=n.z;return s[0]=(1-(_+f))*P,s[1]=(m+O)*P,s[2]=(v-S)*P,s[3]=0,s[4]=(m-O)*z,s[5]=(1-(p+f))*z,s[6]=(g+I)*z,s[7]=0,s[8]=(v+S)*N,s[9]=(g-I)*N,s[10]=(1-(p+_))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Or.set(s[0],s[1],s[2]).length(),o=Or.set(s[4],s[5],s[6]).length(),a=Or.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Fi.copy(this);let l=1/r,h=1/o,u=1/a;return Fi.elements[0]*=l,Fi.elements[1]*=l,Fi.elements[2]*=l,Fi.elements[4]*=h,Fi.elements[5]*=h,Fi.elements[6]*=h,Fi.elements[8]*=u,Fi.elements[9]*=u,Fi.elements[10]*=u,t.setFromRotationMatrix(Fi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ms){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),m,v;if(a===ms)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Go)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ms){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),p=(t+e)*l,m=(n+s)*h,v,_;if(a===ms)v=(o+r)*u,_=-2*u;else if(a===Go)v=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Or=new D,Fi=new Vt,$d=new D(0,0,0),jd=new D(1,1,1),Os=new D,mo=new D,fi=new D,hu=new Vt,uu=new Rn,vs=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Nn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Nn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uu.setFromEuler(this),this.setFromQuaternion(uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vs.DEFAULT_ORDER="XYZ";var Ga=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Qd=0,fu=new D,zr=new Rn,us=new Vt,go=new D,Ca=new D,ep=new D,tp=new Rn,du=new D(1,0,0),pu=new D(0,1,0),mu=new D(0,0,1),np={type:"added"},ip={type:"removed"},Yn=class i extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new vs,n=new Rn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Bt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(du,e)}rotateY(e){return this.rotateOnAxis(pu,e)}rotateZ(e){return this.rotateOnAxis(mu,e)}translateOnAxis(e,t){return fu.copy(e).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(du,e)}translateY(e){return this.translateOnAxis(pu,e)}translateZ(e){return this.translateOnAxis(mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(us.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?go.copy(e):go.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?us.lookAt(Ca,go,this.up):us.lookAt(go,Ca,this.up),this.quaternion.setFromRotationMatrix(us),s&&(us.extractRotation(s.matrixWorld),zr.setFromRotationMatrix(us),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(np)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ip)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),us.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),us.multiply(e.parent.matrixWorld)),e.applyMatrix4(us),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,ep),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,tp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),p=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Yn.DEFAULT_UP=new D(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Oi=new D,fs=new D,Kl=new D,ds=new D,Br=new D,Hr=new D,gu=new D,$l=new D,jl=new D,Ql=new D,xo=!1,hr=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Oi.subVectors(e,t),s.cross(Oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Oi.subVectors(s,t),fs.subVectors(n,t),Kl.subVectors(e,t);let o=Oi.dot(Oi),a=Oi.dot(fs),c=Oi.dot(Kl),l=fs.dot(fs),h=fs.dot(Kl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,m=(l*c-a*h)*p,v=(o*h-a*c)*p;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ds)===null?!1:ds.x>=0&&ds.y>=0&&ds.x+ds.y<=1}static getUV(e,t,n,s,r,o,a,c){return xo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xo=!0),this.getInterpolation(e,t,n,s,r,o,a,c)}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ds)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ds.x),c.addScaledVector(o,ds.y),c.addScaledVector(a,ds.z),c)}static isFrontFacing(e,t,n,s){return Oi.subVectors(n,t),fs.subVectors(e,t),Oi.cross(fs).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),fs.subVectors(this.a,this.b),Oi.cross(fs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return xo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xo=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Br.subVectors(s,n),Hr.subVectors(r,n),$l.subVectors(e,n);let c=Br.dot($l),l=Hr.dot($l);if(c<=0&&l<=0)return t.copy(n);jl.subVectors(e,s);let h=Br.dot(jl),u=Hr.dot(jl);if(h>=0&&u<=h)return t.copy(s);let p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Br,o);Ql.subVectors(e,r);let m=Br.dot(Ql),v=Hr.dot(Ql);if(v>=0&&m<=v)return t.copy(r);let _=m*l-c*v;if(_<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(n).addScaledVector(Hr,a);let g=h*v-m*u;if(g<=0&&u-h>=0&&m-v>=0)return gu.subVectors(r,s),a=(u-h)/(u-h+(m-v)),t.copy(s).addScaledVector(gu,a);let f=1/(g+_+p);return o=_*f,a=p*f,t.copy(n).addScaledVector(Br,o).addScaledVector(Hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zs={h:0,s:0,l:0},_o={h:0,s:0,l:0};function ec(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Jt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Jt.workingColorSpace){if(e=oh(e,1),t=Nn(t,0,1),n=Nn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ec(o,r,e+1/3),this.g=ec(o,r,e),this.b=ec(o,r,e-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let n=df[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}copyLinearToSRGB(e){return this.r=Vl(e.r),this.g=Vl(e.g),this.b=Vl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Jt.fromWorkingColorSpace(Gn.copy(this),e),Math.round(Nn(Gn.r*255,0,255))*65536+Math.round(Nn(Gn.g*255,0,255))*256+Math.round(Nn(Gn.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Gn.copy(this),t);let n=Gn.r,s=Gn.g,r=Gn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Gn.copy(this),t),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Kt){Jt.fromWorkingColorSpace(Gn.copy(this),e);let t=Gn.r,n=Gn.g,s=Gn.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zs),this.setHSL(zs.h+e,zs.s+t,zs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zs),e.getHSL(_o);let n=za(zs.h,_o.h,t),s=za(zs.s,_o.s,t),r=za(zs.l,_o.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gn=new Ne;Ne.NAMES=df;var sp=0,Ws=class extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=ta,this.side=Gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ta&&(n.blending=this.blending),this.side!==Gs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mc&&(n.blendSrc=this.blendSrc),this.blendDst!==gc&&(n.blendDst=this.blendDst),this.blendEquation!==lr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==iu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ut=class extends Ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var bn=new D,vo=new ke,si=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Hs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vo.fromBufferAttribute(this,t),vo.applyMatrix3(e),this.setXY(t,vo.x,vo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix3(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mc&&(e.usage=this.usage),e}};var Jo=class extends si{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ko=class extends si{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Mn=class extends si{constructor(e,t,n){super(new Float32Array(e),t,n)}};var rp=0,wi=new Vt,tc=new Yn,kr=new D,di=new _s,Pa=new _s,Dn=new D,xi=class i extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ff(e)?Ko:Jo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,t,n){return wi.makeTranslation(e,t,n),this.applyMatrix4(wi),this}scale(e,t,n){return wi.makeScale(e,t,n),this.applyMatrix4(wi),this}lookAt(e){return tc.lookAt(e),tc.updateMatrix(),this.applyMatrix4(tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Mn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];di.setFromBufferAttribute(r),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Pa.setFromBufferAttribute(a),this.morphTargetsRelative?(Dn.addVectors(di.min,Pa.min),di.expandByPoint(Dn),Dn.addVectors(di.max,Pa.max),di.expandByPoint(Dn)):(di.expandByPoint(Pa.min),di.expandByPoint(Pa.max))}di.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Dn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Dn.fromBufferAttribute(a,l),c&&(kr.fromBufferAttribute(e,l),Dn.add(kr)),s=Math.max(s,n.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let y=0;y<a;y++)l[y]=new D,h[y]=new D;let u=new D,p=new D,m=new D,v=new ke,_=new ke,g=new ke,f=new D,I=new D;function S(y,J,ce){u.fromArray(s,y*3),p.fromArray(s,J*3),m.fromArray(s,ce*3),v.fromArray(o,y*2),_.fromArray(o,J*2),g.fromArray(o,ce*2),p.sub(u),m.sub(u),_.sub(v),g.sub(v);let be=1/(_.x*g.y-g.x*_.y);isFinite(be)&&(f.copy(p).multiplyScalar(g.y).addScaledVector(m,-_.y).multiplyScalar(be),I.copy(m).multiplyScalar(_.x).addScaledVector(p,-g.x).multiplyScalar(be),l[y].add(f),l[J].add(f),l[ce].add(f),h[y].add(I),h[J].add(I),h[ce].add(I))}let O=this.groups;O.length===0&&(O=[{start:0,count:n.length}]);for(let y=0,J=O.length;y<J;++y){let ce=O[y],be=ce.start,H=ce.count;for(let X=be,ie=be+H;X<ie;X+=3)S(n[X+0],n[X+1],n[X+2])}let P=new D,z=new D,N=new D,ue=new D;function w(y){N.fromArray(r,y*3),ue.copy(N);let J=l[y];P.copy(J),P.sub(N.multiplyScalar(N.dot(J))).normalize(),z.crossVectors(ue,J);let be=z.dot(h[y])<0?-1:1;c[y*4]=P.x,c[y*4+1]=P.y,c[y*4+2]=P.z,c[y*4+3]=be}for(let y=0,J=O.length;y<J;++y){let ce=O[y],be=ce.start,H=ce.count;for(let X=be,ie=be+H;X<ie;X+=3)w(n[X+0]),w(n[X+1]),w(n[X+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new si(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let p=0,m=e.count;p<m;p+=3){let v=e.getX(p+0),_=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dn.fromBufferAttribute(e,t),Dn.normalize(),e.setXYZ(t,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(c.length*h),m=0,v=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let f=0;f<h;f++)p[v++]=l[m++]}return new si(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let p=l[h],m=e(p,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){let m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xu=new Vt,rr=new oa,yo=new pr,_u=new D,Vr=new D,Gr=new D,Wr=new D,nc=new D,Mo=new D,So=new ke,Eo=new ke,bo=new ke,vu=new D,yu=new D,Mu=new D,wo=new D,To=new D,pt=class extends Yn{constructor(e=new xi,t=new Ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Mo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(nc.fromBufferAttribute(u,e),o?Mo.addScaledVector(nc,h):Mo.addScaledVector(nc.sub(t),h))}t.add(Mo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(r),rr.copy(e.ray).recast(e.near),!(yo.containsPoint(rr.origin)===!1&&(rr.intersectSphere(yo,_u)===null||rr.origin.distanceToSquared(_u)>(e.far-e.near)**2))&&(xu.copy(r).invert(),rr.copy(e.ray).applyMatrix4(xu),!(n.boundingBox!==null&&rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=p.length;v<_;v++){let g=p[v],f=o[g.materialIndex],I=Math.max(g.start,m.start),S=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let O=I,P=S;O<P;O+=3){let z=a.getX(O),N=a.getX(O+1),ue=a.getX(O+2);s=Ao(this,f,e,n,l,h,u,z,N,ue),s&&(s.faceIndex=Math.floor(O/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let v=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let g=v,f=_;g<f;g+=3){let I=a.getX(g),S=a.getX(g+1),O=a.getX(g+2);s=Ao(this,o,e,n,l,h,u,I,S,O),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,_=p.length;v<_;v++){let g=p[v],f=o[g.materialIndex],I=Math.max(g.start,m.start),S=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let O=I,P=S;O<P;O+=3){let z=O,N=O+1,ue=O+2;s=Ao(this,f,e,n,l,h,u,z,N,ue),s&&(s.faceIndex=Math.floor(O/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let v=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let g=v,f=_;g<f;g+=3){let I=g,S=g+1,O=g+2;s=Ao(this,o,e,n,l,h,u,I,S,O),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function ap(i,e,t,n,s,r,o,a){let c;if(e.side===qn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Gs,a),c===null)return null;To.copy(a),To.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(To);return l<t.near||l>t.far?null:{distance:l,point:To.clone(),object:i}}function Ao(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Vr),i.getVertexPosition(c,Gr),i.getVertexPosition(l,Wr);let h=ap(i,e,t,n,Vr,Gr,Wr,wo);if(h){s&&(So.fromBufferAttribute(s,a),Eo.fromBufferAttribute(s,c),bo.fromBufferAttribute(s,l),h.uv=hr.getInterpolation(wo,Vr,Gr,Wr,So,Eo,bo,new ke)),r&&(So.fromBufferAttribute(r,a),Eo.fromBufferAttribute(r,c),bo.fromBufferAttribute(r,l),h.uv1=hr.getInterpolation(wo,Vr,Gr,Wr,So,Eo,bo,new ke),h.uv2=h.uv1),o&&(vu.fromBufferAttribute(o,a),yu.fromBufferAttribute(o,c),Mu.fromBufferAttribute(o,l),h.normal=hr.getInterpolation(wo,Vr,Gr,Wr,vu,yu,Mu,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new D,materialIndex:0};hr.getNormal(Vr,Gr,Wr,u.normal),h.face=u}return h}var ys=class i extends xi{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],p=0,m=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,s,o,2),v("x","z","y",1,-1,e,n,-t,s,o,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Mn(l,3)),this.setAttribute("normal",new Mn(h,3)),this.setAttribute("uv",new Mn(u,2));function v(_,g,f,I,S,O,P,z,N,ue,w){let y=O/N,J=P/ue,ce=O/2,be=P/2,H=z/2,X=N+1,ie=ue+1,ye=0,pe=0,se=new D;for(let Ee=0;Ee<ie;Ee++){let xe=Ee*J-be;for(let U=0;U<X;U++){let k=U*y-ce;se[_]=k*I,se[g]=xe*S,se[f]=H,l.push(se.x,se.y,se.z),se[_]=0,se[g]=0,se[f]=z>0?1:-1,h.push(se.x,se.y,se.z),u.push(U/N),u.push(1-Ee/ue),ye+=1}}for(let Ee=0;Ee<ue;Ee++)for(let xe=0;xe<N;xe++){let U=p+xe+X*Ee,k=p+xe+X*(Ee+1),oe=p+(xe+1)+X*(Ee+1),Ce=p+(xe+1)+X*Ee;c.push(U,k,Ce),c.push(k,oe,Ce),pe+=6}a.addGroup(m,pe,w),m+=pe,p+=ye}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function la(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Kn(i){let e={};for(let t=0;t<i.length;t++){let n=la(i[t]);for(let s in n)e[s]=n[s]}return e}function op(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function pf(i){return i.getRenderTarget()===null?i.outputColorSpace:Jt.workingColorSpace}var qs={clone:la,merge:Kn},lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends Ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lp,this.fragmentShader=cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=la(e.uniforms),this.uniformsGroups=op(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},$o=class extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=ms}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wn=class extends $o{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Oa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xr=-90,qr=1,Tc=class extends Yn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wn(Xr,qr,e,t);s.layers=this.layers,this.add(s);let r=new Wn(Xr,qr,e,t);r.layers=this.layers,this.add(r);let o=new Wn(Xr,qr,e,t);o.layers=this.layers,this.add(o);let a=new Wn(Xr,qr,e,t);a.layers=this.layers,this.add(a);let c=new Wn(Xr,qr,e,t);c.layers=this.layers,this.add(c);let l=new Wn(Xr,qr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ms)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Go)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,p,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},jo=class extends gi{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:sa,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ac=class extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Ba("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===dr?Kt:Ai),this.texture=new jo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ys(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:la(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qn,blending:$i});r.uniforms.tEquirect.value=t;let o=new pt(s,r),a=t.minFilter;return t.minFilter===ka&&(t.minFilter=Ti),new Tc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},ic=new D,hp=new D,up=new Bt,zi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ic.subVectors(n,t).cross(hp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ic),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||up.getNormalMatrix(e),s=this.coplanarPoint(ic).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ar=new pr,Ro=new D,Wa=class{constructor(e=new zi,t=new zi,n=new zi,s=new zi,r=new zi,o=new zi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ms){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],p=s[7],m=s[8],v=s[9],_=s[10],g=s[11],f=s[12],I=s[13],S=s[14],O=s[15];if(n[0].setComponents(c-r,p-l,g-m,O-f).normalize(),n[1].setComponents(c+r,p+l,g+m,O+f).normalize(),n[2].setComponents(c+o,p+h,g+v,O+I).normalize(),n[3].setComponents(c-o,p-h,g-v,O-I).normalize(),n[4].setComponents(c-a,p-u,g-_,O-S).normalize(),t===ms)n[5].setComponents(c+a,p+u,g+_,O+S).normalize();else if(t===Go)n[5].setComponents(a,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ro.x=s.normal.x>0?e.max.x:e.min.x,Ro.y=s.normal.y>0?e.max.y:e.min.y,Ro.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function mf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function fp(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,p=l.usage,m=u.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,u,p),l.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:v,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,u){let p=h.array,m=h._updateRange,v=h.updateRanges;if(i.bindBuffer(u,l),m.count===-1&&v.length===0&&i.bufferSubData(u,0,p),v.length!==0){for(let _=0,g=v.length;_<g;_++){let f=v[_];t?i.bufferSubData(u,f.start*p.BYTES_PER_ELEMENT,p,f.start,f.count):i.bufferSubData(u,f.start*p.BYTES_PER_ELEMENT,p.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let p=n.get(l);(!p||p.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var jn=class i extends xi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,p=t/c,m=[],v=[],_=[],g=[];for(let f=0;f<h;f++){let I=f*p-o;for(let S=0;S<l;S++){let O=S*u-r;v.push(O,-I,0),_.push(0,0,1),g.push(S/a),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let I=0;I<a;I++){let S=I+l*f,O=I+l*(f+1),P=I+1+l*(f+1),z=I+1+l*f;m.push(S,O,z),m.push(O,P,z)}this.setIndex(m),this.setAttribute("position",new Mn(v,3)),this.setAttribute("normal",new Mn(_,3)),this.setAttribute("uv",new Mn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pp=`#ifdef USE_ALPHAHASH
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
#endif`,mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vp=`#ifdef USE_AOMAP
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
#endif`,yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mp=`#ifdef USE_BATCHING
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
#endif`,Ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ap=`#ifdef USE_BUMPMAP
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
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
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
} // validated`,Op=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zp=`vec3 transformedNormal = objectNormal;
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
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wp=`
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
}`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,em=`#ifdef USE_GRADIENTMAP
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
}`,tm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rm=`uniform bool receiveShadow;
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
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,um=`PhysicalMaterial material;
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
#endif`,fm=`struct PhysicalMaterial {
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
}`,dm=`
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mm=`#ifdef USE_MAP
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
#endif`,Em=`#if defined( USE_POINTS_UV )
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
#endif`,bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Am=`#ifdef USE_MORPHNORMALS
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
#endif`,Rm=`#ifdef USE_MORPHTARGETS
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
#endif`,Cm=`#ifdef USE_MORPHTARGETS
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
#endif`,Pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nm=`#ifdef USE_NORMALMAP
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
#endif`,Om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Km=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$m=`float getShadowMask() {
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
}`,jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qm=`#ifdef USE_SKINNING
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
#endif`,eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ag=`#ifdef USE_TRANSMISSION
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
#endif`,og=`#ifdef USE_TRANSMISSION
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dg=`uniform sampler2D t2D;
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`#include <common>
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
}`,vg=`#if DEPTH_PACKING == 3200
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
}`,yg=`#define DISTANCE
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
}`,Mg=`#define DISTANCE
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
}`,Eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`uniform float scale;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Rg=`#define LAMBERT
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
}`,Cg=`#define LAMBERT
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
}`,Pg=`#define MATCAP
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
}`,Lg=`#define NORMAL
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
}`,Ug=`#define NORMAL
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
}`,Dg=`#define PHONG
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
}`,Ng=`#define PHONG
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
}`,Og=`#define STANDARD
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
}`,zg=`#define TOON
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
}`,Bg=`#define TOON
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
}`,Hg=`uniform float size;
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
}`,kg=`uniform vec3 diffuse;
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
}`,Vg=`#include <common>
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
}`,Gg=`uniform vec3 color;
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
}`,Wg=`uniform float rotation;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:dp,alphahash_pars_fragment:pp,alphamap_fragment:mp,alphamap_pars_fragment:gp,alphatest_fragment:xp,alphatest_pars_fragment:_p,aomap_fragment:vp,aomap_pars_fragment:yp,batching_pars_vertex:Mp,batching_vertex:Sp,begin_vertex:Ep,beginnormal_vertex:bp,bsdfs:wp,iridescence_fragment:Tp,bumpmap_pars_fragment:Ap,clipping_planes_fragment:Rp,clipping_planes_pars_fragment:Cp,clipping_planes_pars_vertex:Pp,clipping_planes_vertex:Ip,color_fragment:Lp,color_pars_fragment:Up,color_pars_vertex:Dp,color_vertex:Np,common:Fp,cube_uv_reflection_fragment:Op,defaultnormal_vertex:zp,displacementmap_pars_vertex:Bp,displacementmap_vertex:Hp,emissivemap_fragment:kp,emissivemap_pars_fragment:Vp,colorspace_fragment:Gp,colorspace_pars_fragment:Wp,envmap_fragment:Xp,envmap_common_pars_fragment:qp,envmap_pars_fragment:Yp,envmap_pars_vertex:Zp,envmap_physical_pars_fragment:am,envmap_vertex:Jp,fog_vertex:Kp,fog_pars_vertex:$p,fog_fragment:jp,fog_pars_fragment:Qp,gradientmap_pars_fragment:em,lightmap_fragment:tm,lightmap_pars_fragment:nm,lights_lambert_fragment:im,lights_lambert_pars_fragment:sm,lights_pars_begin:rm,lights_toon_fragment:om,lights_toon_pars_fragment:lm,lights_phong_fragment:cm,lights_phong_pars_fragment:hm,lights_physical_fragment:um,lights_physical_pars_fragment:fm,lights_fragment_begin:dm,lights_fragment_maps:pm,lights_fragment_end:mm,logdepthbuf_fragment:gm,logdepthbuf_pars_fragment:xm,logdepthbuf_pars_vertex:_m,logdepthbuf_vertex:vm,map_fragment:ym,map_pars_fragment:Mm,map_particle_fragment:Sm,map_particle_pars_fragment:Em,metalnessmap_fragment:bm,metalnessmap_pars_fragment:wm,morphcolor_vertex:Tm,morphnormal_vertex:Am,morphtarget_pars_vertex:Rm,morphtarget_vertex:Cm,normal_fragment_begin:Pm,normal_fragment_maps:Im,normal_pars_fragment:Lm,normal_pars_vertex:Um,normal_vertex:Dm,normalmap_pars_fragment:Nm,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:Om,clearcoat_pars_fragment:zm,iridescence_pars_fragment:Bm,opaque_fragment:Hm,packing:km,premultiplied_alpha_fragment:Vm,project_vertex:Gm,dithering_fragment:Wm,dithering_pars_fragment:Xm,roughnessmap_fragment:qm,roughnessmap_pars_fragment:Ym,shadowmap_pars_fragment:Zm,shadowmap_pars_vertex:Jm,shadowmap_vertex:Km,shadowmask_pars_fragment:$m,skinbase_vertex:jm,skinning_pars_vertex:Qm,skinning_vertex:eg,skinnormal_vertex:tg,specularmap_fragment:ng,specularmap_pars_fragment:ig,tonemapping_fragment:sg,tonemapping_pars_fragment:rg,transmission_fragment:ag,transmission_pars_fragment:og,uv_pars_fragment:lg,uv_pars_vertex:cg,uv_vertex:hg,worldpos_vertex:ug,background_vert:fg,background_frag:dg,backgroundCube_vert:pg,backgroundCube_frag:mg,cube_vert:gg,cube_frag:xg,depth_vert:_g,depth_frag:vg,distanceRGBA_vert:yg,distanceRGBA_frag:Mg,equirect_vert:Sg,equirect_frag:Eg,linedashed_vert:bg,linedashed_frag:wg,meshbasic_vert:Tg,meshbasic_frag:Ag,meshlambert_vert:Rg,meshlambert_frag:Cg,meshmatcap_vert:Pg,meshmatcap_frag:Ig,meshnormal_vert:Lg,meshnormal_frag:Ug,meshphong_vert:Dg,meshphong_frag:Ng,meshphysical_vert:Fg,meshphysical_frag:Og,meshtoon_vert:zg,meshtoon_frag:Bg,points_vert:Hg,points_frag:kg,shadow_vert:Vg,shadow_frag:Gg,sprite_vert:Wg,sprite_frag:Xg},De={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Ji={basic:{uniforms:Kn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Kn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Kn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Kn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Kn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Kn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Kn([De.points,De.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Kn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Kn([De.common,De.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Kn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Kn([De.sprite,De.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Kn([De.common,De.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Kn([De.lights,De.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Ji.physical={uniforms:Kn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};var Co={r:0,b:0,g:0};function qg(i,e,t,n,s,r,o){let a=new Ne(0),c=r===!0?0:1,l,h,u=null,p=0,m=null;function v(g,f){let I=!1,S=f.isScene===!0?f.background:null;S&&S.isTexture&&(S=(f.backgroundBlurriness>0?t:e).get(S)),S===null?_(a,c):S&&S.isColor&&(_(S,1),I=!0);let O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||I)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===fl)?(h===void 0&&(h=new pt(new ys(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:la(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,z,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Jt.getTransfer(S.colorSpace)!==sn,(u!==S||p!==S.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,p=S.version,m=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new pt(new jn(2,2),new xn({name:"BackgroundMaterial",uniforms:la(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:Gs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(S.colorSpace)!==sn,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||p!==S.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,p=S.version,m=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,f){g.getRGB(Co,pf(i)),n.buffers.color.setClear(Co.r,Co.g,Co.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(g,f=1){a.set(g),c=f,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,_(a,c)},render:v}}function Yg(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=g(null),l=c,h=!1;function u(H,X,ie,ye,pe){let se=!1;if(o){let Ee=_(ye,ie,X);l!==Ee&&(l=Ee,m(l.object)),se=f(H,ye,ie,pe),se&&I(H,ye,ie,pe)}else{let Ee=X.wireframe===!0;(l.geometry!==ye.id||l.program!==ie.id||l.wireframe!==Ee)&&(l.geometry=ye.id,l.program=ie.id,l.wireframe=Ee,se=!0)}pe!==null&&t.update(pe,i.ELEMENT_ARRAY_BUFFER),(se||h)&&(h=!1,ue(H,X,ie,ye),pe!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(pe).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(H){return n.isWebGL2?i.bindVertexArray(H):r.bindVertexArrayOES(H)}function v(H){return n.isWebGL2?i.deleteVertexArray(H):r.deleteVertexArrayOES(H)}function _(H,X,ie){let ye=ie.wireframe===!0,pe=a[H.id];pe===void 0&&(pe={},a[H.id]=pe);let se=pe[X.id];se===void 0&&(se={},pe[X.id]=se);let Ee=se[ye];return Ee===void 0&&(Ee=g(p()),se[ye]=Ee),Ee}function g(H){let X=[],ie=[],ye=[];for(let pe=0;pe<s;pe++)X[pe]=0,ie[pe]=0,ye[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:ie,attributeDivisors:ye,object:H,attributes:{},index:null}}function f(H,X,ie,ye){let pe=l.attributes,se=X.attributes,Ee=0,xe=ie.getAttributes();for(let U in xe)if(xe[U].location>=0){let oe=pe[U],Ce=se[U];if(Ce===void 0&&(U==="instanceMatrix"&&H.instanceMatrix&&(Ce=H.instanceMatrix),U==="instanceColor"&&H.instanceColor&&(Ce=H.instanceColor)),oe===void 0||oe.attribute!==Ce||Ce&&oe.data!==Ce.data)return!0;Ee++}return l.attributesNum!==Ee||l.index!==ye}function I(H,X,ie,ye){let pe={},se=X.attributes,Ee=0,xe=ie.getAttributes();for(let U in xe)if(xe[U].location>=0){let oe=se[U];oe===void 0&&(U==="instanceMatrix"&&H.instanceMatrix&&(oe=H.instanceMatrix),U==="instanceColor"&&H.instanceColor&&(oe=H.instanceColor));let Ce={};Ce.attribute=oe,oe&&oe.data&&(Ce.data=oe.data),pe[U]=Ce,Ee++}l.attributes=pe,l.attributesNum=Ee,l.index=ye}function S(){let H=l.newAttributes;for(let X=0,ie=H.length;X<ie;X++)H[X]=0}function O(H){P(H,0)}function P(H,X){let ie=l.newAttributes,ye=l.enabledAttributes,pe=l.attributeDivisors;ie[H]=1,ye[H]===0&&(i.enableVertexAttribArray(H),ye[H]=1),pe[H]!==X&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,X),pe[H]=X)}function z(){let H=l.newAttributes,X=l.enabledAttributes;for(let ie=0,ye=X.length;ie<ye;ie++)X[ie]!==H[ie]&&(i.disableVertexAttribArray(ie),X[ie]=0)}function N(H,X,ie,ye,pe,se,Ee){Ee===!0?i.vertexAttribIPointer(H,X,ie,pe,se):i.vertexAttribPointer(H,X,ie,ye,pe,se)}function ue(H,X,ie,ye){if(n.isWebGL2===!1&&(H.isInstancedMesh||ye.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();let pe=ye.attributes,se=ie.getAttributes(),Ee=X.defaultAttributeValues;for(let xe in se){let U=se[xe];if(U.location>=0){let k=pe[xe];if(k===void 0&&(xe==="instanceMatrix"&&H.instanceMatrix&&(k=H.instanceMatrix),xe==="instanceColor"&&H.instanceColor&&(k=H.instanceColor)),k!==void 0){let oe=k.normalized,Ce=k.itemSize,ve=t.get(k);if(ve===void 0)continue;let Fe=ve.buffer,st=ve.type,qe=ve.bytesPerElement,it=n.isWebGL2===!0&&(st===i.INT||st===i.UNSIGNED_INT||k.gpuType===ef);if(k.isInterleavedBufferAttribute){let Qe=k.data,K=Qe.stride,Ht=k.offset;if(Qe.isInstancedInterleavedBuffer){for(let Ze=0;Ze<U.locationSize;Ze++)P(U.location+Ze,Qe.meshPerAttribute);H.isInstancedMesh!==!0&&ye._maxInstanceCount===void 0&&(ye._maxInstanceCount=Qe.meshPerAttribute*Qe.count)}else for(let Ze=0;Ze<U.locationSize;Ze++)O(U.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let Ze=0;Ze<U.locationSize;Ze++)N(U.location+Ze,Ce/U.locationSize,st,oe,K*qe,(Ht+Ce/U.locationSize*Ze)*qe,it)}else{if(k.isInstancedBufferAttribute){for(let Qe=0;Qe<U.locationSize;Qe++)P(U.location+Qe,k.meshPerAttribute);H.isInstancedMesh!==!0&&ye._maxInstanceCount===void 0&&(ye._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Qe=0;Qe<U.locationSize;Qe++)O(U.location+Qe);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let Qe=0;Qe<U.locationSize;Qe++)N(U.location+Qe,Ce/U.locationSize,st,oe,Ce*qe,Ce/U.locationSize*Qe*qe,it)}}else if(Ee!==void 0){let oe=Ee[xe];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(U.location,oe);break;case 3:i.vertexAttrib3fv(U.location,oe);break;case 4:i.vertexAttrib4fv(U.location,oe);break;default:i.vertexAttrib1fv(U.location,oe)}}}}z()}function w(){ce();for(let H in a){let X=a[H];for(let ie in X){let ye=X[ie];for(let pe in ye)v(ye[pe].object),delete ye[pe];delete X[ie]}delete a[H]}}function y(H){if(a[H.id]===void 0)return;let X=a[H.id];for(let ie in X){let ye=X[ie];for(let pe in ye)v(ye[pe].object),delete ye[pe];delete X[ie]}delete a[H.id]}function J(H){for(let X in a){let ie=a[X];if(ie[H.id]===void 0)continue;let ye=ie[H.id];for(let pe in ye)v(ye[pe].object),delete ye[pe];delete ie[H.id]}}function ce(){be(),h=!0,l!==c&&(l=c,m(l.object))}function be(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:ce,resetDefaultState:be,dispose:w,releaseStatesOfGeometry:y,releaseStatesOfProgram:J,initAttributes:S,enableAttribute:O,disableUnusedAttributes:z}}function Zg(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,p){if(p===0)return;let m,v;if(s)m=i,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](r,h,u,p),t.update(u,r,p)}function l(h,u,p){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<p;v++)this.render(h[v],u[v]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,p);let v=0;for(let _=0;_<p;_++)v+=u[_];t.update(v,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Jg(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),I=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,O=o||e.has("OES_texture_float"),P=S&&O,z=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:g,maxVaryings:f,maxFragmentUniforms:I,vertexTextures:S,floatFragmentTextures:O,floatVertexTextures:P,maxSamples:z}}function Kg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new zi,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let m=u.length!==0||p||n!==0||s;return s=p,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,m){let v=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!s||v===null||v.length===0||r&&!g)r?h(null):l();else{let I=r?0:n,S=I*4,O=f.clippingState||null;c.value=O,O=h(v,p,S,m);for(let P=0;P!==S;++P)O[P]=t[P];f.clippingState=O,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=I}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,m,v){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,v!==!0||g===null){let f=m+_*4,I=p.matrixWorldInverse;a.getNormalMatrix(I),(g===null||g.length<f)&&(g=new Float32Array(f));for(let S=0,O=m;S!==_;++S,O+=4)o.copy(u[S]).applyMatrix4(I,a),o.normal.toArray(g,O),g[O+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function $g(i){let e=new WeakMap;function t(o,a){return a===xc?o.mapping=sa:a===_c&&(o.mapping=ra),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===xc||a===_c)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ac(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ca=class extends $o{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qr=4,Su=[.125,.215,.35,.446,.526,.582],cr=20,sc=new ca,Eu=new Ne,rc=null,ac=0,oc=0,or=(1+Math.sqrt(5))/2,Yr=1/or,bu=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,or,Yr),new D(0,or,-Yr),new D(Yr,0,or),new D(-Yr,0,or),new D(or,Yr,0),new D(-or,Yr,0)],Qo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){rc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rc,ac,oc),e.scissorTest=!1,Po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sa||e.mapping===ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Hi,format:pi,colorSpace:xs,depthBuffer:!1},s=wu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jg(r)),this._blurMaterial=Qg(r,e,t)}return s}_compileMaterial(e){let t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,sc)}_sceneToCubeUV(e,t,n,s){let a=new Wn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Eu),h.toneMapping=ks,h.autoClear=!1;let m=new Ut({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),v=new pt(new ys,m),_=!1,g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,_=!0):(m.color.copy(Eu),_=!0);for(let f=0;f<6;f++){let I=f%3;I===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):I===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let S=this._cubeSize;Po(s,I*S,f>2?S:0,S,S),h.setRenderTarget(s),_&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===sa||e.mapping===ra;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Po(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,sc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=bu[(s-1)%bu.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new pt(this._lodPlanes[s],l),p=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*cr-1),_=r/v,g=isFinite(r)?1+Math.floor(h*_):cr;g>cr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cr}`);let f=[],I=0;for(let N=0;N<cr;++N){let ue=N/_,w=Math.exp(-ue*ue/2);f.push(w),N===0?I+=w:N<g&&(I+=2*w)}for(let N=0;N<f.length;N++)f[N]=f[N]/I;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:S}=this;p.dTheta.value=v,p.mipInt.value=S-n;let O=this._sizeLods[s],P=3*O*(s>S-Qr?s-S+Qr:0),z=4*(this._cubeSize-O);Po(t,P,z,3*O,2*O),c.setRenderTarget(t),c.render(u,sc)}};function jg(i){let e=[],t=[],n=[],s=i,r=i-Qr+1+Su.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Qr?c=Su[o-i+Qr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,_=3,g=2,f=1,I=new Float32Array(_*v*m),S=new Float32Array(g*v*m),O=new Float32Array(f*v*m);for(let z=0;z<m;z++){let N=z%3*2/3-1,ue=z>2?0:-1,w=[N,ue,0,N+2/3,ue,0,N+2/3,ue+1,0,N,ue,0,N+2/3,ue+1,0,N,ue+1,0];I.set(w,_*v*z),S.set(p,g*v*z);let y=[z,z,z,z,z,z];O.set(y,f*v*z)}let P=new xi;P.setAttribute("position",new si(I,_)),P.setAttribute("uv",new si(S,g)),P.setAttribute("faceIndex",new si(O,f)),e.push(P),s>Qr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wu(i,e,t){let n=new $n(i,e,t);return n.texture.mapping=fl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Po(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Qg(i,e,t){let n=new Float32Array(cr),s=new D(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lh(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Tu(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Au(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function lh(){return`

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
	`}function e0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===xc||c===_c,h=c===sa||c===ra;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Qo(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Qo(i));let p=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function t0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function n0(i,e,t,n){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&e.remove(p.index);for(let v in p.attributes)e.remove(p.attributes[v]);for(let v in p.morphAttributes){let _=p.morphAttributes[v];for(let g=0,f=_.length;g<f;g++)e.remove(_[g])}p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function c(u){let p=u.attributes;for(let v in p)e.update(p[v],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let v in m){let _=m[v];for(let g=0,f=_.length;g<f;g++)e.update(_[g],i.ARRAY_BUFFER)}}function l(u){let p=[],m=u.index,v=u.attributes.position,_=0;if(m!==null){let I=m.array;_=m.version;for(let S=0,O=I.length;S<O;S+=3){let P=I[S+0],z=I[S+1],N=I[S+2];p.push(P,z,z,N,N,P)}}else if(v!==void 0){let I=v.array;_=v.version;for(let S=0,O=I.length/3-1;S<O;S+=3){let P=S+0,z=S+1,N=S+2;p.push(P,z,z,N,N,P)}}else return;let g=new(ff(p)?Ko:Jo)(p,1);g.version=_;let f=r.get(u);f&&e.remove(f),r.set(u,g)}function h(u){let p=r.get(u);if(p){let m=u.index;m!==null&&p.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function i0(i,e,t,n){let s=n.isWebGL2,r;function o(m){r=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,v){i.drawElements(r,v,a,m*c),t.update(v,r,1)}function u(m,v,_){if(_===0)return;let g,f;if(s)g=i,f="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[f](r,v,a,m*c,_),t.update(v,r,_)}function p(m,v,_){if(_===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<_;f++)this.render(m[f]/c,v[f]);else{g.multiDrawElementsWEBGL(r,v,0,a,m,0,_);let f=0;for(let I=0;I<_;I++)f+=v[I];t.update(f,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=p}function s0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function r0(i,e){return i[0]-e[0]}function a0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function o0(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new Qt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let p=l.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=m!==void 0?m.length:0,_=r.get(h);if(_===void 0||_.count!==v){let H=function(){ce.dispose(),r.delete(h),h.removeEventListener("dispose",H)};_!==void 0&&_.texture.dispose();let I=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,O=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],N=h.morphAttributes.color||[],ue=0;I===!0&&(ue=1),S===!0&&(ue=2),O===!0&&(ue=3);let w=h.attributes.position.count*ue,y=1;w>e.maxTextureSize&&(y=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let J=new Float32Array(w*y*4*v),ce=new Zo(J,w,y,v);ce.type=Hs,ce.needsUpdate=!0;let be=ue*4;for(let X=0;X<v;X++){let ie=P[X],ye=z[X],pe=N[X],se=w*y*4*X;for(let Ee=0;Ee<ie.count;Ee++){let xe=Ee*be;I===!0&&(o.fromBufferAttribute(ie,Ee),J[se+xe+0]=o.x,J[se+xe+1]=o.y,J[se+xe+2]=o.z,J[se+xe+3]=0),S===!0&&(o.fromBufferAttribute(ye,Ee),J[se+xe+4]=o.x,J[se+xe+5]=o.y,J[se+xe+6]=o.z,J[se+xe+7]=0),O===!0&&(o.fromBufferAttribute(pe,Ee),J[se+xe+8]=o.x,J[se+xe+9]=o.y,J[se+xe+10]=o.z,J[se+xe+11]=pe.itemSize===4?o.w:1)}}_={count:v,texture:ce,size:new ke(w,y)},r.set(h,_),h.addEventListener("dispose",H)}let g=0;for(let I=0;I<p.length;I++)g+=p[I];let f=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",p),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let m=p===void 0?0:p.length,v=n[h.id];if(v===void 0||v.length!==m){v=[];for(let S=0;S<m;S++)v[S]=[S,0];n[h.id]=v}for(let S=0;S<m;S++){let O=v[S];O[0]=S,O[1]=p[S]}v.sort(a0);for(let S=0;S<8;S++)S<m&&v[S][1]?(a[S][0]=v[S][0],a[S][1]=v[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(r0);let _=h.morphAttributes.position,g=h.morphAttributes.normal,f=0;for(let S=0;S<8;S++){let O=a[S],P=O[0],z=O[1];P!==Number.MAX_SAFE_INTEGER&&z?(_&&h.getAttribute("morphTarget"+S)!==_[P]&&h.setAttribute("morphTarget"+S,_[P]),g&&h.getAttribute("morphNormal"+S)!==g[P]&&h.setAttribute("morphNormal"+S,g[P]),s[S]=z,f+=z):(_&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),g&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),s[S]=0)}let I=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",I),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function l0(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var el=class extends gi{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:fr,h!==fr&&h!==aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fr&&(n=Bs),n===void 0&&h===aa&&(n=ur),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:An,this.minFilter=c!==void 0?c:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},gf=new gi,xf=new el(1,1);xf.compareFunction=hf;var _f=new Zo,vf=new wc,yf=new jo,Ru=[],Cu=[],Pu=new Float32Array(16),Iu=new Float32Array(9),Lu=new Float32Array(4);function fa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ru[s];if(r===void 0&&(r=new Float32Array(s),Ru[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Cn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function pl(i,e){let t=Cu[e];t===void 0&&(t=new Int32Array(e),Cu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function c0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function h0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;i.uniform2fv(this.addr,e),Pn(t,e)}}function u0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Cn(t,e))return;i.uniform3fv(this.addr,e),Pn(t,e)}}function f0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;i.uniform4fv(this.addr,e),Pn(t,e)}}function d0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Cn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pn(t,e)}else{if(Cn(t,n))return;Lu.set(n),i.uniformMatrix2fv(this.addr,!1,Lu),Pn(t,n)}}function p0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Cn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pn(t,e)}else{if(Cn(t,n))return;Iu.set(n),i.uniformMatrix3fv(this.addr,!1,Iu),Pn(t,n)}}function m0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Cn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pn(t,e)}else{if(Cn(t,n))return;Pu.set(n),i.uniformMatrix4fv(this.addr,!1,Pu),Pn(t,n)}}function g0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function x0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;i.uniform2iv(this.addr,e),Pn(t,e)}}function _0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Cn(t,e))return;i.uniform3iv(this.addr,e),Pn(t,e)}}function v0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;i.uniform4iv(this.addr,e),Pn(t,e)}}function y0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function M0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;i.uniform2uiv(this.addr,e),Pn(t,e)}}function S0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Cn(t,e))return;i.uniform3uiv(this.addr,e),Pn(t,e)}}function E0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;i.uniform4uiv(this.addr,e),Pn(t,e)}}function b0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?xf:gf;t.setTexture2D(e||r,s)}function w0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||vf,s)}function T0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||yf,s)}function A0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_f,s)}function R0(i){switch(i){case 5126:return c0;case 35664:return h0;case 35665:return u0;case 35666:return f0;case 35674:return d0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return x0;case 35668:case 35672:return _0;case 35669:case 35673:return v0;case 5125:return y0;case 36294:return M0;case 36295:return S0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return A0}}function C0(i,e){i.uniform1fv(this.addr,e)}function P0(i,e){let t=fa(e,this.size,2);i.uniform2fv(this.addr,t)}function I0(i,e){let t=fa(e,this.size,3);i.uniform3fv(this.addr,t)}function L0(i,e){let t=fa(e,this.size,4);i.uniform4fv(this.addr,t)}function U0(i,e){let t=fa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function D0(i,e){let t=fa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function N0(i,e){let t=fa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function F0(i,e){i.uniform1iv(this.addr,e)}function O0(i,e){i.uniform2iv(this.addr,e)}function z0(i,e){i.uniform3iv(this.addr,e)}function B0(i,e){i.uniform4iv(this.addr,e)}function H0(i,e){i.uniform1uiv(this.addr,e)}function k0(i,e){i.uniform2uiv(this.addr,e)}function V0(i,e){i.uniform3uiv(this.addr,e)}function G0(i,e){i.uniform4uiv(this.addr,e)}function W0(i,e,t){let n=this.cache,s=e.length,r=pl(t,s);Cn(n,r)||(i.uniform1iv(this.addr,r),Pn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||gf,r[o])}function X0(i,e,t){let n=this.cache,s=e.length,r=pl(t,s);Cn(n,r)||(i.uniform1iv(this.addr,r),Pn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||vf,r[o])}function q0(i,e,t){let n=this.cache,s=e.length,r=pl(t,s);Cn(n,r)||(i.uniform1iv(this.addr,r),Pn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||yf,r[o])}function Y0(i,e,t){let n=this.cache,s=e.length,r=pl(t,s);Cn(n,r)||(i.uniform1iv(this.addr,r),Pn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||_f,r[o])}function Z0(i){switch(i){case 5126:return C0;case 35664:return P0;case 35665:return I0;case 35666:return L0;case 35674:return U0;case 35675:return D0;case 35676:return N0;case 5124:case 35670:return F0;case 35667:case 35671:return O0;case 35668:case 35672:return z0;case 35669:case 35673:return B0;case 5125:return H0;case 36294:return k0;case 36295:return V0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return Y0}}var Rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=R0(t.type)}},Cc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Z0(t.type)}},Pc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},lc=/(\w+)(\])?(\[|\.)?/g;function Uu(i,e){i.seq.push(e),i.map[e.id]=e}function J0(i,e,t){let n=i.name,s=n.length;for(lc.lastIndex=0;;){let r=lc.exec(n),o=lc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Uu(t,l===void 0?new Rc(a,i,e):new Cc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Pc(a),Uu(t,u)),t=u}}}var ia=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);J0(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Du(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var K0=37297,$0=0;function j0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Q0(i){let e=Jt.getPrimaries(Jt.workingColorSpace),t=Jt.getPrimaries(i),n;switch(e===t?n="":e===Vo&&t===ko?n="LinearDisplayP3ToLinearSRGB":e===ko&&t===Vo&&(n="LinearSRGBToLinearDisplayP3"),i){case xs:case dl:return[n,"LinearTransferOETF"];case Kt:case ah:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Nu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+j0(i.getShaderSource(e),o)}else return s}function ex(i,e){let t=Q0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function tx(i,e){let t;switch(e){case th:t="Linear";break;case nh:t="Reinhard";break;case ih:t="OptimizedCineon";break;case ja:t="ACESFilmic";break;case sh:t="AgX";break;case fd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ea).join(`
`)}function ix(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ea).join(`
`)}function sx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ea(i){return i!==""}function Fu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ou(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(i){return i.replace(ax,lx)}var ox=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lx(i,e){let t=Ft[e];if(t===void 0){let n=ox.get(e);if(n!==void 0)t=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ic(t)}var cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zu(i){return i.replace(cx,hx)}function hx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ux(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ju?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ps&&(e="SHADOWMAP_TYPE_VSM"),e}function fx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case sa:case ra:e="ENVMAP_TYPE_CUBE";break;case fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ra:e="ENVMAP_MODE_REFRACTION";break}return e}function px(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case eh:e="ENVMAP_BLENDING_MULTIPLY";break;case hd:e="ENVMAP_BLENDING_MIX";break;case ud:e="ENVMAP_BLENDING_ADD";break}return e}function mx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function gx(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=ux(t),l=fx(t),h=dx(t),u=px(t),p=mx(t),m=t.isWebGL2?"":nx(t),v=ix(t),_=sx(r),g=s.createProgram(),f,I,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ea).join(`
`),f.length>0&&(f+=`
`),I=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ea).join(`
`),I.length>0&&(I+=`
`)):(f=[Bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),I=[m,Bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ks?"#define TONE_MAPPING":"",t.toneMapping!==ks?Ft.tonemapping_pars_fragment:"",t.toneMapping!==ks?tx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,ex("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),o=Ic(o),o=Fu(o,t),o=Ou(o,t),a=Ic(a),a=Fu(a,t),a=Ou(a,t),o=zu(o),a=zu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,I=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+I);let O=S+f+o,P=S+I+a,z=Du(s,s.VERTEX_SHADER,O),N=Du(s,s.FRAGMENT_SHADER,P);s.attachShader(g,z),s.attachShader(g,N),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function ue(ce){if(i.debug.checkShaderErrors){let be=s.getProgramInfoLog(g).trim(),H=s.getShaderInfoLog(z).trim(),X=s.getShaderInfoLog(N).trim(),ie=!0,ye=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,z,N);else{let pe=Nu(s,z,"vertex"),se=Nu(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+be+`
`+pe+`
`+se)}else be!==""?console.warn("THREE.WebGLProgram: Program Info Log:",be):(H===""||X==="")&&(ye=!1);ye&&(ce.diagnostics={runnable:ie,programLog:be,vertexShader:{log:H,prefix:f},fragmentShader:{log:X,prefix:I}})}s.deleteShader(z),s.deleteShader(N),w=new ia(s,g),y=rx(s,g)}let w;this.getUniforms=function(){return w===void 0&&ue(this),w};let y;this.getAttributes=function(){return y===void 0&&ue(this),y};let J=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=s.getProgramParameter(g,K0)),J},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=z,this.fragmentShader=N,this}var xx=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uc(e),t.set(e,n)),n}},Uc=class{constructor(e){this.id=xx++,this.code=e,this.usedTimes=0}};function _x(i,e,t,n,s,r,o){let a=new Ga,c=new Lc,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return w===0?"uv":`uv${w}`}function g(w,y,J,ce,be){let H=ce.fog,X=be.geometry,ie=w.isMeshStandardMaterial?ce.environment:null,ye=(w.isMeshStandardMaterial?t:e).get(w.envMap||ie),pe=ye&&ye.mapping===fl?ye.image.height:null,se=v[w.type];w.precision!==null&&(m=s.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));let Ee=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,xe=Ee!==void 0?Ee.length:0,U=0;X.morphAttributes.position!==void 0&&(U=1),X.morphAttributes.normal!==void 0&&(U=2),X.morphAttributes.color!==void 0&&(U=3);let k,oe,Ce,ve;if(se){let Y=Ji[se];k=Y.vertexShader,oe=Y.fragmentShader}else k=w.vertexShader,oe=w.fragmentShader,c.update(w),Ce=c.getVertexShaderID(w),ve=c.getFragmentShaderID(w);let Fe=i.getRenderTarget(),st=be.isInstancedMesh===!0,qe=be.isBatchedMesh===!0,it=!!w.map,Qe=!!w.matcap,K=!!ye,Ht=!!w.aoMap,Ze=!!w.lightMap,tt=!!w.bumpMap,Oe=!!w.normalMap,kt=!!w.displacementMap,lt=!!w.emissiveMap,A=!!w.metalnessMap,M=!!w.roughnessMap,j=w.anisotropy>0,we=w.clearcoat>0,Me=w.iridescence>0,_e=w.sheen>0,Be=w.transmission>0,Le=j&&!!w.anisotropyMap,Ie=we&&!!w.clearcoatMap,Ye=we&&!!w.clearcoatNormalMap,at=we&&!!w.clearcoatRoughnessMap,ge=Me&&!!w.iridescenceMap,At=Me&&!!w.iridescenceThicknessMap,F=_e&&!!w.sheenColorMap,fe=_e&&!!w.sheenRoughnessMap,Ae=!!w.specularMap,Te=!!w.specularColorMap,Ve=!!w.specularIntensityMap,ut=Be&&!!w.transmissionMap,vt=Be&&!!w.thicknessMap,mt=!!w.gradientMap,me=!!w.alphaMap,B=w.alphaTest>0,Re=!!w.alphaHash,he=!!w.extensions,nt=!!X.attributes.uv1,Ge=!!X.attributes.uv2,ft=!!X.attributes.uv3,Rt=ks;return w.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(Rt=i.toneMapping),{isWebGL2:h,shaderID:se,shaderType:w.type,shaderName:w.name,vertexShader:k,fragmentShader:oe,defines:w.defines,customVertexShaderID:Ce,customFragmentShaderID:ve,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:qe,instancing:st,instancingColor:st&&be.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Fe===null?i.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:xs,map:it,matcap:Qe,envMap:K,envMapMode:K&&ye.mapping,envMapCubeUVHeight:pe,aoMap:Ht,lightMap:Ze,bumpMap:tt,normalMap:Oe,displacementMap:p&&kt,emissiveMap:lt,normalMapObjectSpace:Oe&&w.normalMapType===bd,normalMapTangentSpace:Oe&&w.normalMapType===cf,metalnessMap:A,roughnessMap:M,anisotropy:j,anisotropyMap:Le,clearcoat:we,clearcoatMap:Ie,clearcoatNormalMap:Ye,clearcoatRoughnessMap:at,iridescence:Me,iridescenceMap:ge,iridescenceThicknessMap:At,sheen:_e,sheenColorMap:F,sheenRoughnessMap:fe,specularMap:Ae,specularColorMap:Te,specularIntensityMap:Ve,transmission:Be,transmissionMap:ut,thicknessMap:vt,gradientMap:mt,opaque:w.transparent===!1&&w.blending===ta,alphaMap:me,alphaTest:B,alphaHash:Re,combine:w.combine,mapUv:it&&_(w.map.channel),aoMapUv:Ht&&_(w.aoMap.channel),lightMapUv:Ze&&_(w.lightMap.channel),bumpMapUv:tt&&_(w.bumpMap.channel),normalMapUv:Oe&&_(w.normalMap.channel),displacementMapUv:kt&&_(w.displacementMap.channel),emissiveMapUv:lt&&_(w.emissiveMap.channel),metalnessMapUv:A&&_(w.metalnessMap.channel),roughnessMapUv:M&&_(w.roughnessMap.channel),anisotropyMapUv:Le&&_(w.anisotropyMap.channel),clearcoatMapUv:Ie&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:At&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:F&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(w.sheenRoughnessMap.channel),specularMapUv:Ae&&_(w.specularMap.channel),specularColorMapUv:Te&&_(w.specularColorMap.channel),specularIntensityMapUv:Ve&&_(w.specularIntensityMap.channel),transmissionMapUv:ut&&_(w.transmissionMap.channel),thicknessMapUv:vt&&_(w.thicknessMap.channel),alphaMapUv:me&&_(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Oe||j),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:nt,vertexUv2s:Ge,vertexUv3s:ft,pointsUvs:be.isPoints===!0&&!!X.attributes.uv&&(it||me),fog:!!H,useFog:w.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:be.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:U,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&J.length>0,shadowMapType:i.shadowMap.type,toneMapping:Rt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:it&&w.map.isVideoTexture===!0&&Jt.getTransfer(w.map.colorSpace)===sn,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Xn,flipSided:w.side===qn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:he&&w.extensions.derivatives===!0,extensionFragDepth:he&&w.extensions.fragDepth===!0,extensionDrawBuffers:he&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&w.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function f(w){let y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(let J in w.defines)y.push(J),y.push(w.defines[J]);return w.isRawShaderMaterial===!1&&(I(y,w),S(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function I(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function S(w,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),w.push(a.mask)}function O(w){let y=v[w.type],J;if(y){let ce=Ji[y];J=qs.clone(ce.uniforms)}else J=w.uniforms;return J}function P(w,y){let J;for(let ce=0,be=l.length;ce<be;ce++){let H=l[ce];if(H.cacheKey===y){J=H,++J.usedTimes;break}}return J===void 0&&(J=new gx(i,y,w,r),l.push(J)),J}function z(w){if(--w.usedTimes===0){let y=l.indexOf(w);l[y]=l[l.length-1],l.pop(),w.destroy()}}function N(w){c.remove(w)}function ue(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:O,acquireProgram:P,releaseProgram:z,releaseShaderCache:N,programs:l,dispose:ue}}function vx(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function yx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Hu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ku(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,p,m,v,_,g){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:p,material:m,groupOrder:v,renderOrder:u.renderOrder,z:_,group:g},i[e]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=m,f.groupOrder=v,f.renderOrder=u.renderOrder,f.z=_,f.group=g),e++,f}function a(u,p,m,v,_,g){let f=o(u,p,m,v,_,g);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function c(u,p,m,v,_,g){let f=o(u,p,m,v,_,g);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,p){t.length>1&&t.sort(u||yx),n.length>1&&n.sort(p||Hu),s.length>1&&s.sort(p||Hu)}function h(){for(let u=e,p=i.length;u<p;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Mx(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new ku,i.set(n,[o])):s>=r.length?(o=new ku,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ne};break;case"SpotLight":t={position:new D,direction:new D,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Ex(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var bx=0;function wx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Tx(i,e){let t=new Sx,n=Ex(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new D);let r=new D,o=new Vt,a=new Vt;function c(h,u){let p=0,m=0,v=0;for(let ce=0;ce<9;ce++)s.probe[ce].set(0,0,0);let _=0,g=0,f=0,I=0,S=0,O=0,P=0,z=0,N=0,ue=0,w=0;h.sort(wx);let y=u===!0?Math.PI:1;for(let ce=0,be=h.length;ce<be;ce++){let H=h[ce],X=H.color,ie=H.intensity,ye=H.distance,pe=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)p+=X.r*ie*y,m+=X.g*ie*y,v+=X.b*ie*y;else if(H.isLightProbe){for(let se=0;se<9;se++)s.probe[se].addScaledVector(H.sh.coefficients[se],ie);w++}else if(H.isDirectionalLight){let se=t.get(H);if(se.color.copy(H.color).multiplyScalar(H.intensity*y),H.castShadow){let Ee=H.shadow,xe=n.get(H);xe.shadowBias=Ee.bias,xe.shadowNormalBias=Ee.normalBias,xe.shadowRadius=Ee.radius,xe.shadowMapSize=Ee.mapSize,s.directionalShadow[_]=xe,s.directionalShadowMap[_]=pe,s.directionalShadowMatrix[_]=H.shadow.matrix,O++}s.directional[_]=se,_++}else if(H.isSpotLight){let se=t.get(H);se.position.setFromMatrixPosition(H.matrixWorld),se.color.copy(X).multiplyScalar(ie*y),se.distance=ye,se.coneCos=Math.cos(H.angle),se.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),se.decay=H.decay,s.spot[f]=se;let Ee=H.shadow;if(H.map&&(s.spotLightMap[N]=H.map,N++,Ee.updateMatrices(H),H.castShadow&&ue++),s.spotLightMatrix[f]=Ee.matrix,H.castShadow){let xe=n.get(H);xe.shadowBias=Ee.bias,xe.shadowNormalBias=Ee.normalBias,xe.shadowRadius=Ee.radius,xe.shadowMapSize=Ee.mapSize,s.spotShadow[f]=xe,s.spotShadowMap[f]=pe,z++}f++}else if(H.isRectAreaLight){let se=t.get(H);se.color.copy(X).multiplyScalar(ie),se.halfWidth.set(H.width*.5,0,0),se.halfHeight.set(0,H.height*.5,0),s.rectArea[I]=se,I++}else if(H.isPointLight){let se=t.get(H);if(se.color.copy(H.color).multiplyScalar(H.intensity*y),se.distance=H.distance,se.decay=H.decay,H.castShadow){let Ee=H.shadow,xe=n.get(H);xe.shadowBias=Ee.bias,xe.shadowNormalBias=Ee.normalBias,xe.shadowRadius=Ee.radius,xe.shadowMapSize=Ee.mapSize,xe.shadowCameraNear=Ee.camera.near,xe.shadowCameraFar=Ee.camera.far,s.pointShadow[g]=xe,s.pointShadowMap[g]=pe,s.pointShadowMatrix[g]=H.shadow.matrix,P++}s.point[g]=se,g++}else if(H.isHemisphereLight){let se=t.get(H);se.skyColor.copy(H.color).multiplyScalar(ie*y),se.groundColor.copy(H.groundColor).multiplyScalar(ie*y),s.hemi[S]=se,S++}}I>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=v;let J=s.hash;(J.directionalLength!==_||J.pointLength!==g||J.spotLength!==f||J.rectAreaLength!==I||J.hemiLength!==S||J.numDirectionalShadows!==O||J.numPointShadows!==P||J.numSpotShadows!==z||J.numSpotMaps!==N||J.numLightProbes!==w)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=I,s.point.length=g,s.hemi.length=S,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=z,s.spotShadowMap.length=z,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=z+N-ue,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=ue,s.numLightProbes=w,J.directionalLength=_,J.pointLength=g,J.spotLength=f,J.rectAreaLength=I,J.hemiLength=S,J.numDirectionalShadows=O,J.numPointShadows=P,J.numSpotShadows=z,J.numSpotMaps=N,J.numLightProbes=w,s.version=bx++)}function l(h,u){let p=0,m=0,v=0,_=0,g=0,f=u.matrixWorldInverse;for(let I=0,S=h.length;I<S;I++){let O=h[I];if(O.isDirectionalLight){let P=s.directional[p];P.direction.setFromMatrixPosition(O.matrixWorld),r.setFromMatrixPosition(O.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),p++}else if(O.isSpotLight){let P=s.spot[v];P.position.setFromMatrixPosition(O.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(O.matrixWorld),r.setFromMatrixPosition(O.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),v++}else if(O.isRectAreaLight){let P=s.rectArea[_];P.position.setFromMatrixPosition(O.matrixWorld),P.position.applyMatrix4(f),a.identity(),o.copy(O.matrixWorld),o.premultiply(f),a.extractRotation(o),P.halfWidth.set(O.width*.5,0,0),P.halfHeight.set(0,O.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(O.isPointLight){let P=s.point[m];P.position.setFromMatrixPosition(O.matrixWorld),P.position.applyMatrix4(f),m++}else if(O.isHemisphereLight){let P=s.hemi[g];P.direction.setFromMatrixPosition(O.matrixWorld),P.direction.transformDirection(f),g++}}}return{setup:c,setupView:l,state:s}}function Vu(i,e){let t=new Tx(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Ax(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new Vu(i,e),t.set(r,[c])):o>=a.length?(c=new Vu(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var Dc=class extends Ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nc=class extends Ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cx=`uniform sampler2D shadow_pass;
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
}`;function Px(i,e,t){let n=new Wa,s=new ke,r=new ke,o=new Qt,a=new Dc({depthPacking:Ed}),c=new Nc,l={},h=t.maxTextureSize,u={[Gs]:qn,[qn]:Gs,[Xn]:Xn},p=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Rx,fragmentShader:Cx}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let v=new xi;v.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new pt(v,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ju;let f=this.type;this.render=function(z,N,ue){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||z.length===0)return;let w=i.getRenderTarget(),y=i.getActiveCubeFace(),J=i.getActiveMipmapLevel(),ce=i.state;ce.setBlending($i),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);let be=f!==ps&&this.type===ps,H=f===ps&&this.type!==ps;for(let X=0,ie=z.length;X<ie;X++){let ye=z[X],pe=ye.shadow;if(pe===void 0){console.warn("THREE.WebGLShadowMap:",ye,"has no shadow.");continue}if(pe.autoUpdate===!1&&pe.needsUpdate===!1)continue;s.copy(pe.mapSize);let se=pe.getFrameExtents();if(s.multiply(se),r.copy(pe.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,pe.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,pe.mapSize.y=r.y)),pe.map===null||be===!0||H===!0){let xe=this.type!==ps?{minFilter:An,magFilter:An}:{};pe.map!==null&&pe.map.dispose(),pe.map=new $n(s.x,s.y,xe),pe.map.texture.name=ye.name+".shadowMap",pe.camera.updateProjectionMatrix()}i.setRenderTarget(pe.map),i.clear();let Ee=pe.getViewportCount();for(let xe=0;xe<Ee;xe++){let U=pe.getViewport(xe);o.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),ce.viewport(o),pe.updateMatrices(ye,xe),n=pe.getFrustum(),O(N,ue,pe.camera,ye,this.type)}pe.isPointLightShadow!==!0&&this.type===ps&&I(pe,ue),pe.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(w,y,J)};function I(z,N){let ue=e.update(_);p.defines.VSM_SAMPLES!==z.blurSamples&&(p.defines.VSM_SAMPLES=z.blurSamples,m.defines.VSM_SAMPLES=z.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new $n(s.x,s.y)),p.uniforms.shadow_pass.value=z.map.texture,p.uniforms.resolution.value=z.mapSize,p.uniforms.radius.value=z.radius,i.setRenderTarget(z.mapPass),i.clear(),i.renderBufferDirect(N,null,ue,p,_,null),m.uniforms.shadow_pass.value=z.mapPass.texture,m.uniforms.resolution.value=z.mapSize,m.uniforms.radius.value=z.radius,i.setRenderTarget(z.map),i.clear(),i.renderBufferDirect(N,null,ue,m,_,null)}function S(z,N,ue,w){let y=null,J=ue.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(J!==void 0)y=J;else if(y=ue.isPointLight===!0?c:a,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let ce=y.uuid,be=N.uuid,H=l[ce];H===void 0&&(H={},l[ce]=H);let X=H[be];X===void 0&&(X=y.clone(),H[be]=X,N.addEventListener("dispose",P)),y=X}if(y.visible=N.visible,y.wireframe=N.wireframe,w===ps?y.side=N.shadowSide!==null?N.shadowSide:N.side:y.side=N.shadowSide!==null?N.shadowSide:u[N.side],y.alphaMap=N.alphaMap,y.alphaTest=N.alphaTest,y.map=N.map,y.clipShadows=N.clipShadows,y.clippingPlanes=N.clippingPlanes,y.clipIntersection=N.clipIntersection,y.displacementMap=N.displacementMap,y.displacementScale=N.displacementScale,y.displacementBias=N.displacementBias,y.wireframeLinewidth=N.wireframeLinewidth,y.linewidth=N.linewidth,ue.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let ce=i.properties.get(y);ce.light=ue}return y}function O(z,N,ue,w,y){if(z.visible===!1)return;if(z.layers.test(N.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&y===ps)&&(!z.frustumCulled||n.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,z.matrixWorld);let be=e.update(z),H=z.material;if(Array.isArray(H)){let X=be.groups;for(let ie=0,ye=X.length;ie<ye;ie++){let pe=X[ie],se=H[pe.materialIndex];if(se&&se.visible){let Ee=S(z,se,w,y);z.onBeforeShadow(i,z,N,ue,be,Ee,pe),i.renderBufferDirect(ue,null,be,Ee,z,pe),z.onAfterShadow(i,z,N,ue,be,Ee,pe)}}}else if(H.visible){let X=S(z,H,w,y);z.onBeforeShadow(i,z,N,ue,be,X,null),i.renderBufferDirect(ue,null,be,X,z,null),z.onAfterShadow(i,z,N,ue,be,X,null)}}let ce=z.children;for(let be=0,H=ce.length;be<H;be++)O(ce[be],N,ue,w,y)}function P(z){z.target.removeEventListener("dispose",P);for(let ue in l){let w=l[ue],y=z.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}function Ix(i,e,t){let n=t.isWebGL2;function s(){let B=!1,Re=new Qt,he=null,nt=new Qt(0,0,0,0);return{setMask:function(Ge){he!==Ge&&!B&&(i.colorMask(Ge,Ge,Ge,Ge),he=Ge)},setLocked:function(Ge){B=Ge},setClear:function(Ge,ft,Rt,dt,Y){Y===!0&&(Ge*=dt,ft*=dt,Rt*=dt),Re.set(Ge,ft,Rt,dt),nt.equals(Re)===!1&&(i.clearColor(Ge,ft,Rt,dt),nt.copy(Re))},reset:function(){B=!1,he=null,nt.set(-1,0,0,0)}}}function r(){let B=!1,Re=null,he=null,nt=null;return{setTest:function(Ge){Ge?qe(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(Ge){Re!==Ge&&!B&&(i.depthMask(Ge),Re=Ge)},setFunc:function(Ge){if(he!==Ge){switch(Ge){case id:i.depthFunc(i.NEVER);break;case sd:i.depthFunc(i.ALWAYS);break;case rd:i.depthFunc(i.LESS);break;case Oo:i.depthFunc(i.LEQUAL);break;case ad:i.depthFunc(i.EQUAL);break;case od:i.depthFunc(i.GEQUAL);break;case ld:i.depthFunc(i.GREATER);break;case cd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=Ge}},setLocked:function(Ge){B=Ge},setClear:function(Ge){nt!==Ge&&(i.clearDepth(Ge),nt=Ge)},reset:function(){B=!1,Re=null,he=null,nt=null}}}function o(){let B=!1,Re=null,he=null,nt=null,Ge=null,ft=null,Rt=null,dt=null,Y=null;return{setTest:function(de){B||(de?qe(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(de){Re!==de&&!B&&(i.stencilMask(de),Re=de)},setFunc:function(de,ae,We){(he!==de||nt!==ae||Ge!==We)&&(i.stencilFunc(de,ae,We),he=de,nt=ae,Ge=We)},setOp:function(de,ae,We){(ft!==de||Rt!==ae||dt!==We)&&(i.stencilOp(de,ae,We),ft=de,Rt=ae,dt=We)},setLocked:function(de){B=de},setClear:function(de){Y!==de&&(i.clearStencil(de),Y=de)},reset:function(){B=!1,Re=null,he=null,nt=null,Ge=null,ft=null,Rt=null,dt=null,Y=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,p={},m={},v=new WeakMap,_=[],g=null,f=!1,I=null,S=null,O=null,P=null,z=null,N=null,ue=null,w=new Ne(0,0,0),y=0,J=!1,ce=null,be=null,H=null,X=null,ie=null,ye=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),pe=!1,se=0,Ee=i.getParameter(i.VERSION);Ee.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Ee)[1]),pe=se>=1):Ee.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Ee)[1]),pe=se>=2);let xe=null,U={},k=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),Ce=new Qt().fromArray(k),ve=new Qt().fromArray(oe);function Fe(B,Re,he,nt){let Ge=new Uint8Array(4),ft=i.createTexture();i.bindTexture(B,ft),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<he;Rt++)n&&(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)?i.texImage3D(Re,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,Ge):i.texImage2D(Re+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ge);return ft}let st={};st[i.TEXTURE_2D]=Fe(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=Fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(st[i.TEXTURE_2D_ARRAY]=Fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=Fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),qe(i.DEPTH_TEST),c.setFunc(Oo),lt(!1),A(Eh),qe(i.CULL_FACE),Oe($i);function qe(B){p[B]!==!0&&(i.enable(B),p[B]=!0)}function it(B){p[B]!==!1&&(i.disable(B),p[B]=!1)}function Qe(B,Re){return m[B]!==Re?(i.bindFramebuffer(B,Re),m[B]=Re,n&&(B===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Re),B===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Re)),!0):!1}function K(B,Re){let he=_,nt=!1;if(B)if(he=v.get(Re),he===void 0&&(he=[],v.set(Re,he)),B.isWebGLMultipleRenderTargets){let Ge=B.texture;if(he.length!==Ge.length||he[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Rt=Ge.length;ft<Rt;ft++)he[ft]=i.COLOR_ATTACHMENT0+ft;he.length=Ge.length,nt=!0}}else he[0]!==i.COLOR_ATTACHMENT0&&(he[0]=i.COLOR_ATTACHMENT0,nt=!0);else he[0]!==i.BACK&&(he[0]=i.BACK,nt=!0);nt&&(t.isWebGL2?i.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Ht(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let Ze={[lr]:i.FUNC_ADD,[Vf]:i.FUNC_SUBTRACT,[Gf]:i.FUNC_REVERSE_SUBTRACT};if(n)Ze[Th]=i.MIN,Ze[Ah]=i.MAX;else{let B=e.get("EXT_blend_minmax");B!==null&&(Ze[Th]=B.MIN_EXT,Ze[Ah]=B.MAX_EXT)}let tt={[Wf]:i.ZERO,[Xf]:i.ONE,[qf]:i.SRC_COLOR,[mc]:i.SRC_ALPHA,[jf]:i.SRC_ALPHA_SATURATE,[Kf]:i.DST_COLOR,[Zf]:i.DST_ALPHA,[Yf]:i.ONE_MINUS_SRC_COLOR,[gc]:i.ONE_MINUS_SRC_ALPHA,[$f]:i.ONE_MINUS_DST_COLOR,[Jf]:i.ONE_MINUS_DST_ALPHA,[Qf]:i.CONSTANT_COLOR,[ed]:i.ONE_MINUS_CONSTANT_COLOR,[td]:i.CONSTANT_ALPHA,[nd]:i.ONE_MINUS_CONSTANT_ALPHA};function Oe(B,Re,he,nt,Ge,ft,Rt,dt,Y,de){if(B===$i){f===!0&&(it(i.BLEND),f=!1);return}if(f===!1&&(qe(i.BLEND),f=!0),B!==kf){if(B!==I||de!==J){if((S!==lr||z!==lr)&&(i.blendEquation(i.FUNC_ADD),S=lr,z=lr),de)switch(B){case ta:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mi:i.blendFunc(i.ONE,i.ONE);break;case bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ta:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}O=null,P=null,N=null,ue=null,w.set(0,0,0),y=0,I=B,J=de}return}Ge=Ge||Re,ft=ft||he,Rt=Rt||nt,(Re!==S||Ge!==z)&&(i.blendEquationSeparate(Ze[Re],Ze[Ge]),S=Re,z=Ge),(he!==O||nt!==P||ft!==N||Rt!==ue)&&(i.blendFuncSeparate(tt[he],tt[nt],tt[ft],tt[Rt]),O=he,P=nt,N=ft,ue=Rt),(dt.equals(w)===!1||Y!==y)&&(i.blendColor(dt.r,dt.g,dt.b,Y),w.copy(dt),y=Y),I=B,J=!1}function kt(B,Re){B.side===Xn?it(i.CULL_FACE):qe(i.CULL_FACE);let he=B.side===qn;Re&&(he=!he),lt(he),B.blending===ta&&B.transparent===!1?Oe($i):Oe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),a.setMask(B.colorWrite);let nt=B.stencilWrite;l.setTest(nt),nt&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),j(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?qe(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(B){ce!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),ce=B)}function A(B){B!==zf?(qe(i.CULL_FACE),B!==be&&(B===Eh?i.cullFace(i.BACK):B===Bf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),be=B}function M(B){B!==H&&(pe&&i.lineWidth(B),H=B)}function j(B,Re,he){B?(qe(i.POLYGON_OFFSET_FILL),(X!==Re||ie!==he)&&(i.polygonOffset(Re,he),X=Re,ie=he)):it(i.POLYGON_OFFSET_FILL)}function we(B){B?qe(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function Me(B){B===void 0&&(B=i.TEXTURE0+ye-1),xe!==B&&(i.activeTexture(B),xe=B)}function _e(B,Re,he){he===void 0&&(xe===null?he=i.TEXTURE0+ye-1:he=xe);let nt=U[he];nt===void 0&&(nt={type:void 0,texture:void 0},U[he]=nt),(nt.type!==B||nt.texture!==Re)&&(xe!==he&&(i.activeTexture(he),xe=he),i.bindTexture(B,Re||st[B]),nt.type=B,nt.texture=Re)}function Be(){let B=U[xe];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Le(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ye(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function at(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function F(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ve(B){Ce.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Ce.copy(B))}function ut(B){ve.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),ve.copy(B))}function vt(B,Re){let he=u.get(Re);he===void 0&&(he=new WeakMap,u.set(Re,he));let nt=he.get(B);nt===void 0&&(nt=i.getUniformBlockIndex(Re,B.name),he.set(B,nt))}function mt(B,Re){let nt=u.get(Re).get(B);h.get(Re)!==nt&&(i.uniformBlockBinding(Re,nt,B.__bindingPointIndex),h.set(Re,nt))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},xe=null,U={},m={},v=new WeakMap,_=[],g=null,f=!1,I=null,S=null,O=null,P=null,z=null,N=null,ue=null,w=new Ne(0,0,0),y=0,J=!1,ce=null,be=null,H=null,X=null,ie=null,Ce.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:qe,disable:it,bindFramebuffer:Qe,drawBuffers:K,useProgram:Ht,setBlending:Oe,setMaterial:kt,setFlipSided:lt,setCullFace:A,setLineWidth:M,setPolygonOffset:j,setScissorTest:we,activeTexture:Me,bindTexture:_e,unbindTexture:Be,compressedTexImage2D:Le,compressedTexImage3D:Ie,texImage2D:Ae,texImage3D:Te,updateUBOMapping:vt,uniformBlockBinding:mt,texStorage2D:F,texStorage3D:fe,texSubImage2D:Ye,texSubImage3D:at,compressedTexSubImage2D:ge,compressedTexSubImage3D:At,scissor:Ve,viewport:ut,reset:me}}function Lx(i,e,t,n,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,M){return m?new OffscreenCanvas(A,M):Xo("canvas")}function _(A,M,j,we){let Me=1;if((A.width>we||A.height>we)&&(Me=we/Math.max(A.width,A.height)),Me<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let _e=M?Wo:Math.floor,Be=_e(Me*A.width),Le=_e(Me*A.height);u===void 0&&(u=v(Be,Le));let Ie=j?v(Be,Le):u;return Ie.width=Be,Ie.height=Le,Ie.getContext("2d").drawImage(A,0,0,Be,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Be+"x"+Le+")."),Ie}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function g(A){return Ec(A.width)&&Ec(A.height)}function f(A){return a?!1:A.wrapS!==Bi||A.wrapT!==Bi||A.minFilter!==An&&A.minFilter!==Ti}function I(A,M){return A.generateMipmaps&&M&&A.minFilter!==An&&A.minFilter!==Ti}function S(A){i.generateMipmap(A)}function O(A,M,j,we,Me=!1){if(a===!1)return M;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let _e=M;if(M===i.RED&&(j===i.FLOAT&&(_e=i.R32F),j===i.HALF_FLOAT&&(_e=i.R16F),j===i.UNSIGNED_BYTE&&(_e=i.R8)),M===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(_e=i.R8UI),j===i.UNSIGNED_SHORT&&(_e=i.R16UI),j===i.UNSIGNED_INT&&(_e=i.R32UI),j===i.BYTE&&(_e=i.R8I),j===i.SHORT&&(_e=i.R16I),j===i.INT&&(_e=i.R32I)),M===i.RG&&(j===i.FLOAT&&(_e=i.RG32F),j===i.HALF_FLOAT&&(_e=i.RG16F),j===i.UNSIGNED_BYTE&&(_e=i.RG8)),M===i.RGBA){let Be=Me?Ho:Jt.getTransfer(we);j===i.FLOAT&&(_e=i.RGBA32F),j===i.HALF_FLOAT&&(_e=i.RGBA16F),j===i.UNSIGNED_BYTE&&(_e=Be===sn?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(_e=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(_e=i.RGB5_A1)}return(_e===i.R16F||_e===i.R32F||_e===i.RG16F||_e===i.RG32F||_e===i.RGBA16F||_e===i.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function P(A,M,j){return I(A,j)===!0||A.isFramebufferTexture&&A.minFilter!==An&&A.minFilter!==Ti?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function z(A){return A===An||A===Rh||A===Dl?i.NEAREST:i.LINEAR}function N(A){let M=A.target;M.removeEventListener("dispose",N),w(M),M.isVideoTexture&&h.delete(M)}function ue(A){let M=A.target;M.removeEventListener("dispose",ue),J(M)}function w(A){let M=n.get(A);if(M.__webglInit===void 0)return;let j=A.source,we=p.get(j);if(we){let Me=we[M.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&y(A),Object.keys(we).length===0&&p.delete(j)}n.remove(A)}function y(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let j=A.source,we=p.get(j);delete we[M.__cacheKey],o.memory.textures--}function J(A){let M=A.texture,j=n.get(A),we=n.get(M);if(we.__webglTexture!==void 0&&(i.deleteTexture(we.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++){if(Array.isArray(j.__webglFramebuffer[Me]))for(let _e=0;_e<j.__webglFramebuffer[Me].length;_e++)i.deleteFramebuffer(j.__webglFramebuffer[Me][_e]);else i.deleteFramebuffer(j.__webglFramebuffer[Me]);j.__webglDepthbuffer&&i.deleteRenderbuffer(j.__webglDepthbuffer[Me])}else{if(Array.isArray(j.__webglFramebuffer))for(let Me=0;Me<j.__webglFramebuffer.length;Me++)i.deleteFramebuffer(j.__webglFramebuffer[Me]);else i.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&i.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&i.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let Me=0;Me<j.__webglColorRenderbuffer.length;Me++)j.__webglColorRenderbuffer[Me]&&i.deleteRenderbuffer(j.__webglColorRenderbuffer[Me]);j.__webglDepthRenderbuffer&&i.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Me=0,_e=M.length;Me<_e;Me++){let Be=n.get(M[Me]);Be.__webglTexture&&(i.deleteTexture(Be.__webglTexture),o.memory.textures--),n.remove(M[Me])}n.remove(M),n.remove(A)}let ce=0;function be(){ce=0}function H(){let A=ce;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),ce+=1,A}function X(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function ie(A,M){let j=n.get(A);if(A.isVideoTexture&&kt(A),A.isRenderTargetTexture===!1&&A.version>0&&j.__version!==A.version){let we=A.image;if(we===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(we.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(j,A,M);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+M)}function ye(A,M){let j=n.get(A);if(A.version>0&&j.__version!==A.version){Ce(j,A,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+M)}function pe(A,M){let j=n.get(A);if(A.version>0&&j.__version!==A.version){Ce(j,A,M);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+M)}function se(A,M){let j=n.get(A);if(A.version>0&&j.__version!==A.version){ve(j,A,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+M)}let Ee={[vc]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[yc]:i.MIRRORED_REPEAT},xe={[An]:i.NEAREST,[Rh]:i.NEAREST_MIPMAP_NEAREST,[Dl]:i.NEAREST_MIPMAP_LINEAR,[Ti]:i.LINEAR,[dd]:i.LINEAR_MIPMAP_NEAREST,[ka]:i.LINEAR_MIPMAP_LINEAR},U={[wd]:i.NEVER,[Id]:i.ALWAYS,[Td]:i.LESS,[hf]:i.LEQUAL,[Ad]:i.EQUAL,[Pd]:i.GEQUAL,[Rd]:i.GREATER,[Cd]:i.NOTEQUAL};function k(A,M,j){if(j?(i.texParameteri(A,i.TEXTURE_WRAP_S,Ee[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ee[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ee[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,xe[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,xe[M.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==Bi||M.wrapT!==Bi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,z(M.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,z(M.minFilter)),M.minFilter!==An&&M.minFilter!==Ti&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let we=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===An||M.minFilter!==Dl&&M.minFilter!==ka||M.type===Hs&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Hi&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(A,we.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function oe(A,M){let j=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",N));let we=M.source,Me=p.get(we);Me===void 0&&(Me={},p.set(we,Me));let _e=X(M);if(_e!==A.__cacheKey){Me[_e]===void 0&&(Me[_e]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,j=!0),Me[_e].usedTimes++;let Be=Me[A.__cacheKey];Be!==void 0&&(Me[A.__cacheKey].usedTimes--,Be.usedTimes===0&&y(M)),A.__cacheKey=_e,A.__webglTexture=Me[_e].texture}return j}function Ce(A,M,j){let we=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(we=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(we=i.TEXTURE_3D);let Me=oe(A,M),_e=M.source;t.bindTexture(we,A.__webglTexture,i.TEXTURE0+j);let Be=n.get(_e);if(_e.version!==Be.__version||Me===!0){t.activeTexture(i.TEXTURE0+j);let Le=Jt.getPrimaries(Jt.workingColorSpace),Ie=M.colorSpace===Ai?null:Jt.getPrimaries(M.colorSpace),Ye=M.colorSpace===Ai||Le===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let at=f(M)&&g(M.image)===!1,ge=_(M.image,at,!1,s.maxTextureSize);ge=lt(M,ge);let At=g(ge)||a,F=r.convert(M.format,M.colorSpace),fe=r.convert(M.type),Ae=O(M.internalFormat,F,fe,M.colorSpace,M.isVideoTexture);k(we,M,At);let Te,Ve=M.mipmaps,ut=a&&M.isVideoTexture!==!0&&Ae!==of,vt=Be.__version===void 0||Me===!0,mt=P(M,ge,At);if(M.isDepthTexture)Ae=i.DEPTH_COMPONENT,a?M.type===Hs?Ae=i.DEPTH_COMPONENT32F:M.type===Bs?Ae=i.DEPTH_COMPONENT24:M.type===ur?Ae=i.DEPTH24_STENCIL8:Ae=i.DEPTH_COMPONENT16:M.type===Hs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===fr&&Ae===i.DEPTH_COMPONENT&&M.type!==rh&&M.type!==Bs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Bs,fe=r.convert(M.type)),M.format===aa&&Ae===i.DEPTH_COMPONENT&&(Ae=i.DEPTH_STENCIL,M.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ur,fe=r.convert(M.type))),vt&&(ut?t.texStorage2D(i.TEXTURE_2D,1,Ae,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,Ae,ge.width,ge.height,0,F,fe,null));else if(M.isDataTexture)if(Ve.length>0&&At){ut&&vt&&t.texStorage2D(i.TEXTURE_2D,mt,Ae,Ve[0].width,Ve[0].height);for(let me=0,B=Ve.length;me<B;me++)Te=Ve[me],ut?t.texSubImage2D(i.TEXTURE_2D,me,0,0,Te.width,Te.height,F,fe,Te.data):t.texImage2D(i.TEXTURE_2D,me,Ae,Te.width,Te.height,0,F,fe,Te.data);M.generateMipmaps=!1}else ut?(vt&&t.texStorage2D(i.TEXTURE_2D,mt,Ae,ge.width,ge.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge.width,ge.height,F,fe,ge.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,ge.width,ge.height,0,F,fe,ge.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ut&&vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Ae,Ve[0].width,Ve[0].height,ge.depth);for(let me=0,B=Ve.length;me<B;me++)Te=Ve[me],M.format!==pi?F!==null?ut?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Te.width,Te.height,ge.depth,F,Te.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,Ae,Te.width,Te.height,ge.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Te.width,Te.height,ge.depth,F,fe,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,Ae,Te.width,Te.height,ge.depth,0,F,fe,Te.data)}else{ut&&vt&&t.texStorage2D(i.TEXTURE_2D,mt,Ae,Ve[0].width,Ve[0].height);for(let me=0,B=Ve.length;me<B;me++)Te=Ve[me],M.format!==pi?F!==null?ut?t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,Te.width,Te.height,F,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,me,Ae,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage2D(i.TEXTURE_2D,me,0,0,Te.width,Te.height,F,fe,Te.data):t.texImage2D(i.TEXTURE_2D,me,Ae,Te.width,Te.height,0,F,fe,Te.data)}else if(M.isDataArrayTexture)ut?(vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Ae,ge.width,ge.height,ge.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,F,fe,ge.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,ge.width,ge.height,ge.depth,0,F,fe,ge.data);else if(M.isData3DTexture)ut?(vt&&t.texStorage3D(i.TEXTURE_3D,mt,Ae,ge.width,ge.height,ge.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,F,fe,ge.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,ge.width,ge.height,ge.depth,0,F,fe,ge.data);else if(M.isFramebufferTexture){if(vt)if(ut)t.texStorage2D(i.TEXTURE_2D,mt,Ae,ge.width,ge.height);else{let me=ge.width,B=ge.height;for(let Re=0;Re<mt;Re++)t.texImage2D(i.TEXTURE_2D,Re,Ae,me,B,0,F,fe,null),me>>=1,B>>=1}}else if(Ve.length>0&&At){ut&&vt&&t.texStorage2D(i.TEXTURE_2D,mt,Ae,Ve[0].width,Ve[0].height);for(let me=0,B=Ve.length;me<B;me++)Te=Ve[me],ut?t.texSubImage2D(i.TEXTURE_2D,me,0,0,F,fe,Te):t.texImage2D(i.TEXTURE_2D,me,Ae,F,fe,Te);M.generateMipmaps=!1}else ut?(vt&&t.texStorage2D(i.TEXTURE_2D,mt,Ae,ge.width,ge.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,F,fe,ge)):t.texImage2D(i.TEXTURE_2D,0,Ae,F,fe,ge);I(M,At)&&S(we),Be.__version=_e.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ve(A,M,j){if(M.image.length!==6)return;let we=oe(A,M),Me=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+j);let _e=n.get(Me);if(Me.version!==_e.__version||we===!0){t.activeTexture(i.TEXTURE0+j);let Be=Jt.getPrimaries(Jt.workingColorSpace),Le=M.colorSpace===Ai?null:Jt.getPrimaries(M.colorSpace),Ie=M.colorSpace===Ai||Be===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Ye=M.isCompressedTexture||M.image[0].isCompressedTexture,at=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let me=0;me<6;me++)!Ye&&!at?ge[me]=_(M.image[me],!1,!0,s.maxCubemapSize):ge[me]=at?M.image[me].image:M.image[me],ge[me]=lt(M,ge[me]);let At=ge[0],F=g(At)||a,fe=r.convert(M.format,M.colorSpace),Ae=r.convert(M.type),Te=O(M.internalFormat,fe,Ae,M.colorSpace),Ve=a&&M.isVideoTexture!==!0,ut=_e.__version===void 0||we===!0,vt=P(M,At,F);k(i.TEXTURE_CUBE_MAP,M,F);let mt;if(Ye){Ve&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Te,At.width,At.height);for(let me=0;me<6;me++){mt=ge[me].mipmaps;for(let B=0;B<mt.length;B++){let Re=mt[B];M.format!==pi?fe!==null?Ve?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,B,0,0,Re.width,Re.height,fe,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,B,Te,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,B,0,0,Re.width,Re.height,fe,Ae,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,B,Te,Re.width,Re.height,0,fe,Ae,Re.data)}}}else{mt=M.mipmaps,Ve&&ut&&(mt.length>0&&vt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Te,ge[0].width,ge[0].height));for(let me=0;me<6;me++)if(at){Ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ge[me].width,ge[me].height,fe,Ae,ge[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Te,ge[me].width,ge[me].height,0,fe,Ae,ge[me].data);for(let B=0;B<mt.length;B++){let he=mt[B].image[me].image;Ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,B+1,0,0,he.width,he.height,fe,Ae,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,B+1,Te,he.width,he.height,0,fe,Ae,he.data)}}else{Ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,fe,Ae,ge[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Te,fe,Ae,ge[me]);for(let B=0;B<mt.length;B++){let Re=mt[B];Ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,B+1,0,0,fe,Ae,Re.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,B+1,Te,fe,Ae,Re.image[me])}}}I(M,F)&&S(i.TEXTURE_CUBE_MAP),_e.__version=Me.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Fe(A,M,j,we,Me,_e){let Be=r.convert(j.format,j.colorSpace),Le=r.convert(j.type),Ie=O(j.internalFormat,Be,Le,j.colorSpace);if(!n.get(M).__hasExternalTextures){let at=Math.max(1,M.width>>_e),ge=Math.max(1,M.height>>_e);Me===i.TEXTURE_3D||Me===i.TEXTURE_2D_ARRAY?t.texImage3D(Me,_e,Ie,at,ge,M.depth,0,Be,Le,null):t.texImage2D(Me,_e,Ie,at,ge,0,Be,Le,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Oe(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,we,Me,n.get(j).__webglTexture,0,tt(M)):(Me===i.TEXTURE_2D||Me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,we,Me,n.get(j).__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(A,M,j){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let we=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(j||Oe(M)){let Me=M.depthTexture;Me&&Me.isDepthTexture&&(Me.type===Hs?we=i.DEPTH_COMPONENT32F:Me.type===Bs&&(we=i.DEPTH_COMPONENT24));let _e=tt(M);Oe(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,we,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,we,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,we,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){let we=tt(M);j&&Oe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,i.DEPTH24_STENCIL8,M.width,M.height):Oe(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let we=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Me=0;Me<we.length;Me++){let _e=we[Me],Be=r.convert(_e.format,_e.colorSpace),Le=r.convert(_e.type),Ie=O(_e.internalFormat,Be,Le,_e.colorSpace),Ye=tt(M);j&&Oe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,Ie,M.width,M.height):Oe(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,Ie,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qe(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ie(M.depthTexture,0);let we=n.get(M.depthTexture).__webglTexture,Me=tt(M);if(M.depthTexture.format===fr)Oe(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,we,0,Me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,we,0);else if(M.depthTexture.format===aa)Oe(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,we,0,Me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,we,0);else throw new Error("Unknown depthTexture format")}function it(A){let M=n.get(A),j=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");qe(M.__webglFramebuffer,A)}else if(j){M.__webglDepthbuffer=[];for(let we=0;we<6;we++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[we]),M.__webglDepthbuffer[we]=i.createRenderbuffer(),st(M.__webglDepthbuffer[we],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),st(M.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(A,M,j){let we=n.get(A);M!==void 0&&Fe(we.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&it(A)}function K(A){let M=A.texture,j=n.get(A),we=n.get(M);A.addEventListener("dispose",ue),A.isWebGLMultipleRenderTargets!==!0&&(we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture()),we.__version=M.version,o.memory.textures++);let Me=A.isWebGLCubeRenderTarget===!0,_e=A.isWebGLMultipleRenderTargets===!0,Be=g(A)||a;if(Me){j.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(a&&M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer[Le]=[];for(let Ie=0;Ie<M.mipmaps.length;Ie++)j.__webglFramebuffer[Le][Ie]=i.createFramebuffer()}else j.__webglFramebuffer[Le]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer=[];for(let Le=0;Le<M.mipmaps.length;Le++)j.__webglFramebuffer[Le]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(_e)if(s.drawBuffers){let Le=A.texture;for(let Ie=0,Ye=Le.length;Ie<Ye;Ie++){let at=n.get(Le[Ie]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Oe(A)===!1){let Le=_e?M:[M];j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Le.length;Ie++){let Ye=Le[Ie];j.__webglColorRenderbuffer[Ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[Ie]);let at=r.convert(Ye.format,Ye.colorSpace),ge=r.convert(Ye.type),At=O(Ye.internalFormat,at,ge,Ye.colorSpace,A.isXRRenderTarget===!0),F=tt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,F,At,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,j.__webglColorRenderbuffer[Ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),st(j.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Me){t.bindTexture(i.TEXTURE_CUBE_MAP,we.__webglTexture),k(i.TEXTURE_CUBE_MAP,M,Be);for(let Le=0;Le<6;Le++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let Ie=0;Ie<M.mipmaps.length;Ie++)Fe(j.__webglFramebuffer[Le][Ie],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ie);else Fe(j.__webglFramebuffer[Le],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);I(M,Be)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){let Le=A.texture;for(let Ie=0,Ye=Le.length;Ie<Ye;Ie++){let at=Le[Ie],ge=n.get(at);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),k(i.TEXTURE_2D,at,Be),Fe(j.__webglFramebuffer,A,at,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,0),I(at,Be)&&S(i.TEXTURE_2D)}t.unbindTexture()}else{let Le=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?Le=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Le,we.__webglTexture),k(Le,M,Be),a&&M.mipmaps&&M.mipmaps.length>0)for(let Ie=0;Ie<M.mipmaps.length;Ie++)Fe(j.__webglFramebuffer[Ie],A,M,i.COLOR_ATTACHMENT0,Le,Ie);else Fe(j.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,Le,0);I(M,Be)&&S(Le),t.unbindTexture()}A.depthBuffer&&it(A)}function Ht(A){let M=g(A)||a,j=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let we=0,Me=j.length;we<Me;we++){let _e=j[we];if(I(_e,M)){let Be=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Le=n.get(_e).__webglTexture;t.bindTexture(Be,Le),S(Be),t.unbindTexture()}}}function Ze(A){if(a&&A.samples>0&&Oe(A)===!1){let M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],j=A.width,we=A.height,Me=i.COLOR_BUFFER_BIT,_e=[],Be=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(A),Ie=A.isWebGLMultipleRenderTargets===!0;if(Ie)for(let Ye=0;Ye<M.length;Ye++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ye=0;Ye<M.length;Ye++){_e.push(i.COLOR_ATTACHMENT0+Ye),A.depthBuffer&&_e.push(Be);let at=Le.__ignoreDepthValues!==void 0?Le.__ignoreDepthValues:!1;if(at===!1&&(A.depthBuffer&&(Me|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Me|=i.STENCIL_BUFFER_BIT)),Ie&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ye]),at===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Be]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Be])),Ie){let ge=n.get(M[Ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ge,0)}i.blitFramebuffer(0,0,j,we,0,0,j,we,Me,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ie)for(let Ye=0;Ye<M.length;Ye++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ye]);let at=n.get(M[Ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,at,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}}function tt(A){return Math.min(s.maxSamples,A.samples)}function Oe(A){let M=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function kt(A){let M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function lt(A,M){let j=A.colorSpace,we=A.format,Me=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Sc||j!==xs&&j!==Ai&&(Jt.getTransfer(j)===sn?a===!1?e.has("EXT_sRGB")===!0&&we===pi?(A.format=Sc,A.minFilter=Ti,A.generateMipmaps=!1):M=qo.sRGBToLinear(M):(we!==pi||Me!==Vs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),M}this.allocateTextureUnit=H,this.resetTextureUnits=be,this.setTexture2D=ie,this.setTexture2DArray=ye,this.setTexture3D=pe,this.setTextureCube=se,this.rebindTextures=Qe,this.setupRenderTarget=K,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Oe}function Ux(i,e,t){let n=t.isWebGL2;function s(r,o=Ai){let a,c=Jt.getTransfer(o);if(r===Vs)return i.UNSIGNED_BYTE;if(r===tf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===nf)return i.UNSIGNED_SHORT_5_5_5_1;if(r===pd)return i.BYTE;if(r===md)return i.SHORT;if(r===rh)return i.UNSIGNED_SHORT;if(r===ef)return i.INT;if(r===Bs)return i.UNSIGNED_INT;if(r===Hs)return i.FLOAT;if(r===Hi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===gd)return i.ALPHA;if(r===pi)return i.RGBA;if(r===xd)return i.LUMINANCE;if(r===_d)return i.LUMINANCE_ALPHA;if(r===fr)return i.DEPTH_COMPONENT;if(r===aa)return i.DEPTH_STENCIL;if(r===Sc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===vd)return i.RED;if(r===sf)return i.RED_INTEGER;if(r===yd)return i.RG;if(r===rf)return i.RG_INTEGER;if(r===af)return i.RGBA_INTEGER;if(r===Nl||r===Fl||r===Ol||r===zl)if(c===sn)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Nl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ol)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Nl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ol)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ch||r===Ph||r===Ih||r===Lh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ch)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ph)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ih)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Lh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===of)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Uh||r===Dh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Uh)return c===sn?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Dh)return c===sn?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Nh||r===Fh||r===Oh||r===zh||r===Bh||r===Hh||r===kh||r===Vh||r===Gh||r===Wh||r===Xh||r===qh||r===Yh||r===Zh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Nh)return c===sn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fh)return c===sn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Oh)return c===sn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zh)return c===sn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Bh)return c===sn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hh)return c===sn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kh)return c===sn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vh)return c===sn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gh)return c===sn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wh)return c===sn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xh)return c===sn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qh)return c===sn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yh)return c===sn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zh)return c===sn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bl||r===Jh||r===Kh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Bl)return c===sn?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Kh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Md||r===$h||r===jh||r===Qh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Bl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===$h)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ur?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Fc=class extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},zn=class extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dx={type:"move"},Ha=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),f=this._getHandJoint(l,_);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,v=.005;l.inputState.pinching&&p>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Oc=class extends ji{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,p=null,m=null,v=null,_=t.getContextAttributes(),g=null,f=null,I=[],S=[],O=new ke,P=null,z=new Wn;z.layers.enable(1),z.viewport=new Qt;let N=new Wn;N.layers.enable(2),N.viewport=new Qt;let ue=[z,N],w=new Fc;w.layers.enable(1),w.layers.enable(2);let y=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let oe=I[k];return oe===void 0&&(oe=new Ha,I[k]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(k){let oe=I[k];return oe===void 0&&(oe=new Ha,I[k]=oe),oe.getGripSpace()},this.getHand=function(k){let oe=I[k];return oe===void 0&&(oe=new Ha,I[k]=oe),oe.getHandSpace()};function ce(k){let oe=S.indexOf(k.inputSource);if(oe===-1)return;let Ce=I[oe];Ce!==void 0&&(Ce.update(k.inputSource,k.frame,l||o),Ce.dispatchEvent({type:k.type,data:k.inputSource}))}function be(){s.removeEventListener("select",ce),s.removeEventListener("selectstart",ce),s.removeEventListener("selectend",ce),s.removeEventListener("squeeze",ce),s.removeEventListener("squeezestart",ce),s.removeEventListener("squeezeend",ce),s.removeEventListener("end",be),s.removeEventListener("inputsourceschange",H);for(let k=0;k<I.length;k++){let oe=S[k];oe!==null&&(S[k]=null,I[k].disconnect(oe))}y=null,J=null,e.setRenderTarget(g),m=null,p=null,u=null,s=null,f=null,U.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",ce),s.addEventListener("selectstart",ce),s.addEventListener("selectend",ce),s.addEventListener("squeeze",ce),s.addEventListener("squeezestart",ce),s.addEventListener("squeezeend",ce),s.addEventListener("end",be),s.addEventListener("inputsourceschange",H),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(O),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let oe={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new $n(m.framebufferWidth,m.framebufferHeight,{format:pi,type:Vs,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let oe=null,Ce=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=_.stencil?aa:fr,Ce=_.stencil?ur:Bs);let Fe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=new XRWebGLBinding(s,t),p=u.createProjectionLayer(Fe),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),f=new $n(p.textureWidth,p.textureHeight,{format:pi,type:Vs,depthTexture:new el(p.textureWidth,p.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let st=e.properties.get(f);st.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),U.setContext(s),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function H(k){for(let oe=0;oe<k.removed.length;oe++){let Ce=k.removed[oe],ve=S.indexOf(Ce);ve>=0&&(S[ve]=null,I[ve].disconnect(Ce))}for(let oe=0;oe<k.added.length;oe++){let Ce=k.added[oe],ve=S.indexOf(Ce);if(ve===-1){for(let st=0;st<I.length;st++)if(st>=S.length){S.push(Ce),ve=st;break}else if(S[st]===null){S[st]=Ce,ve=st;break}if(ve===-1)break}let Fe=I[ve];Fe&&Fe.connect(Ce)}}let X=new D,ie=new D;function ye(k,oe,Ce){X.setFromMatrixPosition(oe.matrixWorld),ie.setFromMatrixPosition(Ce.matrixWorld);let ve=X.distanceTo(ie),Fe=oe.projectionMatrix.elements,st=Ce.projectionMatrix.elements,qe=Fe[14]/(Fe[10]-1),it=Fe[14]/(Fe[10]+1),Qe=(Fe[9]+1)/Fe[5],K=(Fe[9]-1)/Fe[5],Ht=(Fe[8]-1)/Fe[0],Ze=(st[8]+1)/st[0],tt=qe*Ht,Oe=qe*Ze,kt=ve/(-Ht+Ze),lt=kt*-Ht;oe.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(lt),k.translateZ(kt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let A=qe+kt,M=it+kt,j=tt-lt,we=Oe+(ve-lt),Me=Qe*it/M*A,_e=K*it/M*A;k.projectionMatrix.makePerspective(j,we,Me,_e,A,M),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function pe(k,oe){oe===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(oe.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;w.near=N.near=z.near=k.near,w.far=N.far=z.far=k.far,(y!==w.near||J!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),y=w.near,J=w.far);let oe=k.parent,Ce=w.cameras;pe(w,oe);for(let ve=0;ve<Ce.length;ve++)pe(Ce[ve],oe);Ce.length===2?ye(w,z,N):w.projectionMatrix.copy(z.projectionMatrix),se(k,w,oe)};function se(k,oe,Ce){Ce===null?k.matrix.copy(oe.matrixWorld):(k.matrix.copy(Ce.matrixWorld),k.matrix.invert(),k.matrix.multiply(oe.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(oe.projectionMatrix),k.projectionMatrixInverse.copy(oe.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Va*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(k){c=k,p!==null&&(p.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let Ee=null;function xe(k,oe){if(h=oe.getViewerPose(l||o),v=oe,h!==null){let Ce=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let ve=!1;Ce.length!==w.cameras.length&&(w.cameras.length=0,ve=!0);for(let Fe=0;Fe<Ce.length;Fe++){let st=Ce[Fe],qe=null;if(m!==null)qe=m.getViewport(st);else{let Qe=u.getViewSubImage(p,st);qe=Qe.viewport,Fe===0&&(e.setRenderTargetTextures(f,Qe.colorTexture,p.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(f))}let it=ue[Fe];it===void 0&&(it=new Wn,it.layers.enable(Fe),it.viewport=new Qt,ue[Fe]=it),it.matrix.fromArray(st.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(st.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(qe.x,qe.y,qe.width,qe.height),Fe===0&&(w.matrix.copy(it.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ve===!0&&w.cameras.push(it)}}for(let Ce=0;Ce<I.length;Ce++){let ve=S[Ce],Fe=I[Ce];ve!==null&&Fe!==void 0&&Fe.update(ve,oe,l||o)}Ee&&Ee(k,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),v=null}let U=new mf;U.setAnimationLoop(xe),this.setAnimationLoop=function(k){Ee=k},this.dispose=function(){}}};function Nx(i,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,pf(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,I,S,O){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),p(g,f),f.isMeshPhysicalMaterial&&m(g,f,O)):f.isMeshMatcapMaterial?(r(g,f),v(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),_(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?c(g,f,I,S):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===qn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===qn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let I=e.get(f).envMap;if(I&&(g.envMap.value=I,g.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap){g.lightMap.value=f.lightMap;let S=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=f.lightMapIntensity*S,t(f.lightMap,g.lightMapTransform)}f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,I,S){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*I,g.scale.value=S*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function p(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),e.get(f).envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function m(g,f,I){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qn&&g.clearcoatNormalScale.value.negate())),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=I.texture,g.transmissionSamplerSize.value.set(I.width,I.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function _(g,f){let I=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(I.matrixWorld),g.nearDistance.value=I.shadow.camera.near,g.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fx(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(I,S){let O=S.program;n.uniformBlockBinding(I,O)}function l(I,S){let O=s[I.id];O===void 0&&(v(I),O=h(I),s[I.id]=O,I.addEventListener("dispose",g));let P=S.program;n.updateUBOMapping(I,P);let z=e.render.frame;r[I.id]!==z&&(p(I),r[I.id]=z)}function h(I){let S=u();I.__bindingPointIndex=S;let O=i.createBuffer(),P=I.__size,z=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,O),i.bufferData(i.UNIFORM_BUFFER,P,z),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,O),O}function u(){for(let I=0;I<a;I++)if(o.indexOf(I)===-1)return o.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(I){let S=s[I.id],O=I.uniforms,P=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let z=0,N=O.length;z<N;z++){let ue=Array.isArray(O[z])?O[z]:[O[z]];for(let w=0,y=ue.length;w<y;w++){let J=ue[w];if(m(J,z,w,P)===!0){let ce=J.__offset,be=Array.isArray(J.value)?J.value:[J.value],H=0;for(let X=0;X<be.length;X++){let ie=be[X],ye=_(ie);typeof ie=="number"||typeof ie=="boolean"?(J.__data[0]=ie,i.bufferSubData(i.UNIFORM_BUFFER,ce+H,J.__data)):ie.isMatrix3?(J.__data[0]=ie.elements[0],J.__data[1]=ie.elements[1],J.__data[2]=ie.elements[2],J.__data[3]=0,J.__data[4]=ie.elements[3],J.__data[5]=ie.elements[4],J.__data[6]=ie.elements[5],J.__data[7]=0,J.__data[8]=ie.elements[6],J.__data[9]=ie.elements[7],J.__data[10]=ie.elements[8],J.__data[11]=0):(ie.toArray(J.__data,H),H+=ye.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ce,J.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(I,S,O,P){let z=I.value,N=S+"_"+O;if(P[N]===void 0)return typeof z=="number"||typeof z=="boolean"?P[N]=z:P[N]=z.clone(),!0;{let ue=P[N];if(typeof z=="number"||typeof z=="boolean"){if(ue!==z)return P[N]=z,!0}else if(ue.equals(z)===!1)return ue.copy(z),!0}return!1}function v(I){let S=I.uniforms,O=0,P=16;for(let N=0,ue=S.length;N<ue;N++){let w=Array.isArray(S[N])?S[N]:[S[N]];for(let y=0,J=w.length;y<J;y++){let ce=w[y],be=Array.isArray(ce.value)?ce.value:[ce.value];for(let H=0,X=be.length;H<X;H++){let ie=be[H],ye=_(ie),pe=O%P;pe!==0&&P-pe<ye.boundary&&(O+=P-pe),ce.__data=new Float32Array(ye.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=O,O+=ye.storage}}}let z=O%P;return z>0&&(O+=P-z),I.__size=O,I.__cache={},this}function _(I){let S={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(S.boundary=4,S.storage=4):I.isVector2?(S.boundary=8,S.storage=8):I.isVector3||I.isColor?(S.boundary=16,S.storage=12):I.isVector4?(S.boundary=16,S.storage=16):I.isMatrix3?(S.boundary=48,S.storage=48):I.isMatrix4?(S.boundary=64,S.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),S}function g(I){let S=I.target;S.removeEventListener("dispose",g);let O=o.indexOf(S.__bindingPointIndex);o.splice(O,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(let I in s)i.deleteBuffer(s[I]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Xa=class{constructor(e={}){let{canvas:t=qd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;let m=new Uint32Array(4),v=new Int32Array(4),_=null,g=null,f=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this._useLegacyLights=!1,this.toneMapping=ks,this.toneMappingExposure=1;let S=this,O=!1,P=0,z=0,N=null,ue=-1,w=null,y=new Qt,J=new Qt,ce=null,be=new Ne(0),H=0,X=t.width,ie=t.height,ye=1,pe=null,se=null,Ee=new Qt(0,0,X,ie),xe=new Qt(0,0,X,ie),U=!1,k=new Wa,oe=!1,Ce=!1,ve=null,Fe=new Vt,st=new ke,qe=new D,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qe(){return N===null?ye:1}let K=n;function Ht(T,q){for(let $=0;$<T.length;$++){let ee=T[$],Q=t.getContext(ee,q);if(Q!==null)return Q}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",Re,!1),K===null){let q=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&q.shift(),K=Ht(q,T),K===null)throw Ht(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ze,tt,Oe,kt,lt,A,M,j,we,Me,_e,Be,Le,Ie,Ye,at,ge,At,F,fe,Ae,Te,Ve,ut;function vt(){Ze=new t0(K),tt=new Jg(K,Ze,e),Ze.init(tt),Te=new Ux(K,Ze,tt),Oe=new Ix(K,Ze,tt),kt=new s0(K),lt=new vx,A=new Lx(K,Ze,Oe,lt,tt,Te,kt),M=new $g(S),j=new e0(S),we=new fp(K,tt),Ve=new Yg(K,Ze,we,tt),Me=new n0(K,we,kt,Ve),_e=new l0(K,Me,we,kt),F=new o0(K,tt,A),at=new Kg(lt),Be=new _x(S,M,j,Ze,tt,Ve,at),Le=new Nx(S,lt),Ie=new Mx,Ye=new Ax(Ze,tt),At=new qg(S,M,j,Oe,_e,p,c),ge=new Px(S,_e,tt),ut=new Fx(K,kt,tt,Oe),fe=new Zg(K,Ze,kt,tt),Ae=new i0(K,Ze,kt,tt),kt.programs=Be.programs,S.capabilities=tt,S.extensions=Ze,S.properties=lt,S.renderLists=Ie,S.shadowMap=ge,S.state=Oe,S.info=kt}vt();let mt=new Oc(S,K);this.xr=mt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let T=Ze.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Ze.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(T){T!==void 0&&(ye=T,this.setSize(X,ie,!1))},this.getSize=function(T){return T.set(X,ie)},this.setSize=function(T,q,$=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,ie=q,t.width=Math.floor(T*ye),t.height=Math.floor(q*ye),$===!0&&(t.style.width=T+"px",t.style.height=q+"px"),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(X*ye,ie*ye).floor()},this.setDrawingBufferSize=function(T,q,$){X=T,ie=q,ye=$,t.width=Math.floor(T*$),t.height=Math.floor(q*$),this.setViewport(0,0,T,q)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(Ee)},this.setViewport=function(T,q,$,ee){T.isVector4?Ee.set(T.x,T.y,T.z,T.w):Ee.set(T,q,$,ee),Oe.viewport(y.copy(Ee).multiplyScalar(ye).floor())},this.getScissor=function(T){return T.copy(xe)},this.setScissor=function(T,q,$,ee){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,q,$,ee),Oe.scissor(J.copy(xe).multiplyScalar(ye).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(T){Oe.setScissorTest(U=T)},this.setOpaqueSort=function(T){pe=T},this.setTransparentSort=function(T){se=T},this.getClearColor=function(T){return T.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(T=!0,q=!0,$=!0){let ee=0;if(T){let Q=!1;if(N!==null){let ze=N.texture.format;Q=ze===af||ze===rf||ze===sf}if(Q){let ze=N.texture.type,Je=ze===Vs||ze===Bs||ze===rh||ze===ur||ze===tf||ze===nf,Ke=At.getClearColor(),et=At.getClearAlpha(),Mt=Ke.r,gt=Ke.g,wt=Ke.b;Je?(m[0]=Mt,m[1]=gt,m[2]=wt,m[3]=et,K.clearBufferuiv(K.COLOR,0,m)):(v[0]=Mt,v[1]=gt,v[2]=wt,v[3]=et,K.clearBufferiv(K.COLOR,0,v))}else ee|=K.COLOR_BUFFER_BIT}q&&(ee|=K.DEPTH_BUFFER_BIT),$&&(ee|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Ie.dispose(),Ye.dispose(),lt.dispose(),M.dispose(),j.dispose(),_e.dispose(),Ve.dispose(),ut.dispose(),Be.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Y),mt.removeEventListener("sessionend",de),ve&&(ve.dispose(),ve=null),ae.stop()};function me(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;let T=kt.autoReset,q=ge.enabled,$=ge.autoUpdate,ee=ge.needsUpdate,Q=ge.type;vt(),kt.autoReset=T,ge.enabled=q,ge.autoUpdate=$,ge.needsUpdate=ee,ge.type=Q}function Re(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function he(T){let q=T.target;q.removeEventListener("dispose",he),nt(q)}function nt(T){Ge(T),lt.remove(T)}function Ge(T){let q=lt.get(T).programs;q!==void 0&&(q.forEach(function($){Be.releaseProgram($)}),T.isShaderMaterial&&Be.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,$,ee,Q,ze){q===null&&(q=it);let Je=Q.isMesh&&Q.matrixWorld.determinant()<0,Ke=Xt(T,q,$,ee,Q);Oe.setMaterial(ee,Je);let et=$.index,Mt=1;if(ee.wireframe===!0){if(et=Me.getWireframeAttribute($),et===void 0)return;Mt=2}let gt=$.drawRange,wt=$.attributes.position,qt=gt.start*Mt,Gt=(gt.start+gt.count)*Mt;ze!==null&&(qt=Math.max(qt,ze.start*Mt),Gt=Math.min(Gt,(ze.start+ze.count)*Mt)),et!==null?(qt=Math.max(qt,0),Gt=Math.min(Gt,et.count)):wt!=null&&(qt=Math.max(qt,0),Gt=Math.min(Gt,wt.count));let _n=Gt-qt;if(_n<0||_n===1/0)return;Ve.setup(Q,ee,Ke,$,et);let Sn,Yt=fe;if(et!==null&&(Sn=we.get(et),Yt=Ae,Yt.setIndex(Sn)),Q.isMesh)ee.wireframe===!0?(Oe.setLineWidth(ee.wireframeLinewidth*Qe()),Yt.setMode(K.LINES)):Yt.setMode(K.TRIANGLES);else if(Q.isLine){let _t=ee.linewidth;_t===void 0&&(_t=1),Oe.setLineWidth(_t*Qe()),Q.isLineSegments?Yt.setMode(K.LINES):Q.isLineLoop?Yt.setMode(K.LINE_LOOP):Yt.setMode(K.LINE_STRIP)}else Q.isPoints?Yt.setMode(K.POINTS):Q.isSprite&&Yt.setMode(K.TRIANGLES);if(Q.isBatchedMesh)Yt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)Yt.renderInstances(qt,_n,Q.count);else if($.isInstancedBufferGeometry){let _t=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ms=Math.min($.instanceCount,_t);Yt.renderInstances(qt,_n,Ms)}else Yt.render(qt,_n)};function ft(T,q,$){T.transparent===!0&&T.side===Xn&&T.forceSinglePass===!1?(T.side=qn,T.needsUpdate=!0,Wt(T,q,$),T.side=Gs,T.needsUpdate=!0,Wt(T,q,$),T.side=Xn):Wt(T,q,$)}this.compile=function(T,q,$=null){$===null&&($=T),g=Ye.get($),g.init(),I.push(g),$.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),T!==$&&T.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),g.setupLights(S._useLegacyLights);let ee=new Set;return T.traverse(function(Q){let ze=Q.material;if(ze)if(Array.isArray(ze))for(let Je=0;Je<ze.length;Je++){let Ke=ze[Je];ft(Ke,$,Q),ee.add(Ke)}else ft(ze,$,Q),ee.add(ze)}),I.pop(),g=null,ee},this.compileAsync=function(T,q,$=null){let ee=this.compile(T,q,$);return new Promise(Q=>{function ze(){if(ee.forEach(function(Je){lt.get(Je).currentProgram.isReady()&&ee.delete(Je)}),ee.size===0){Q(T);return}setTimeout(ze,10)}Ze.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Rt=null;function dt(T){Rt&&Rt(T)}function Y(){ae.stop()}function de(){ae.start()}let ae=new mf;ae.setAnimationLoop(dt),typeof self<"u"&&ae.setContext(self),this.setAnimationLoop=function(T){Rt=T,mt.setAnimationLoop(T),T===null?ae.stop():ae.start()},mt.addEventListener("sessionstart",Y),mt.addEventListener("sessionend",de),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(q),q=mt.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,q,N),g=Ye.get(T,I.length),g.init(),I.push(g),Fe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),k.setFromProjectionMatrix(Fe),Ce=this.localClippingEnabled,oe=at.init(this.clippingPlanes,Ce),_=Ie.get(T,f.length),_.init(),f.push(_),We(T,q,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(pe,se),this.info.render.frame++,oe===!0&&at.beginShadows();let $=g.state.shadowsArray;if(ge.render($,T,q),oe===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset(),At.render(_,T),g.setupLights(S._useLegacyLights),q.isArrayCamera){let ee=q.cameras;for(let Q=0,ze=ee.length;Q<ze;Q++){let Je=ee[Q];He(_,T,Je,Je.viewport)}}else He(_,T,q);N!==null&&(A.updateMultisampleRenderTarget(N),A.updateRenderTargetMipmap(N)),T.isScene===!0&&T.onAfterRender(S,T,q),Ve.resetDefaultState(),ue=-1,w=null,I.pop(),I.length>0?g=I[I.length-1]:g=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function We(T,q,$,ee){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||k.intersectsSprite(T)){ee&&qe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Fe);let Je=_e.update(T),Ke=T.material;Ke.visible&&_.push(T,Je,Ke,$,qe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||k.intersectsObject(T))){let Je=_e.update(T),Ke=T.material;if(ee&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),qe.copy(T.boundingSphere.center)):(Je.boundingSphere===null&&Je.computeBoundingSphere(),qe.copy(Je.boundingSphere.center)),qe.applyMatrix4(T.matrixWorld).applyMatrix4(Fe)),Array.isArray(Ke)){let et=Je.groups;for(let Mt=0,gt=et.length;Mt<gt;Mt++){let wt=et[Mt],qt=Ke[wt.materialIndex];qt&&qt.visible&&_.push(T,Je,qt,$,qe.z,wt)}}else Ke.visible&&_.push(T,Je,Ke,$,qe.z,null)}}let ze=T.children;for(let Je=0,Ke=ze.length;Je<Ke;Je++)We(ze[Je],q,$,ee)}function He(T,q,$,ee){let Q=T.opaque,ze=T.transmissive,Je=T.transparent;g.setupLightsView($),oe===!0&&at.setGlobalState(S.clippingPlanes,$),ze.length>0&&ct(Q,ze,q,$),ee&&Oe.viewport(y.copy(ee)),Q.length>0&&yt(Q,q,$),ze.length>0&&yt(ze,q,$),Je.length>0&&yt(Je,q,$),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function ct(T,q,$,ee){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;let ze=tt.isWebGL2;ve===null&&(ve=new $n(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")?Hi:Vs,minFilter:ka,samples:ze?4:0})),S.getDrawingBufferSize(st),ze?ve.setSize(st.x,st.y):ve.setSize(Wo(st.x),Wo(st.y));let Je=S.getRenderTarget();S.setRenderTarget(ve),S.getClearColor(be),H=S.getClearAlpha(),H<1&&S.setClearColor(16777215,.5),S.clear();let Ke=S.toneMapping;S.toneMapping=ks,yt(T,$,ee),A.updateMultisampleRenderTarget(ve),A.updateRenderTargetMipmap(ve);let et=!1;for(let Mt=0,gt=q.length;Mt<gt;Mt++){let wt=q[Mt],qt=wt.object,Gt=wt.geometry,_n=wt.material,Sn=wt.group;if(_n.side===Xn&&qt.layers.test(ee.layers)){let Yt=_n.side;_n.side=qn,_n.needsUpdate=!0,Dt(qt,$,ee,Gt,_n,Sn),_n.side=Yt,_n.needsUpdate=!0,et=!0}}et===!0&&(A.updateMultisampleRenderTarget(ve),A.updateRenderTargetMipmap(ve)),S.setRenderTarget(Je),S.setClearColor(be,H),S.toneMapping=Ke}function yt(T,q,$){let ee=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,ze=T.length;Q<ze;Q++){let Je=T[Q],Ke=Je.object,et=Je.geometry,Mt=ee===null?Je.material:ee,gt=Je.group;Ke.layers.test($.layers)&&Dt(Ke,q,$,et,Mt,gt)}}function Dt(T,q,$,ee,Q,ze){T.onBeforeRender(S,q,$,ee,Q,ze),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Q.onBeforeRender(S,q,$,ee,T,ze),Q.transparent===!0&&Q.side===Xn&&Q.forceSinglePass===!1?(Q.side=qn,Q.needsUpdate=!0,S.renderBufferDirect($,q,ee,Q,T,ze),Q.side=Gs,Q.needsUpdate=!0,S.renderBufferDirect($,q,ee,Q,T,ze),Q.side=Xn):S.renderBufferDirect($,q,ee,Q,T,ze),T.onAfterRender(S,q,$,ee,Q,ze)}function Wt(T,q,$){q.isScene!==!0&&(q=it);let ee=lt.get(T),Q=g.state.lights,ze=g.state.shadowsArray,Je=Q.state.version,Ke=Be.getParameters(T,Q.state,ze,q,$),et=Be.getProgramCacheKey(Ke),Mt=ee.programs;ee.environment=T.isMeshStandardMaterial?q.environment:null,ee.fog=q.fog,ee.envMap=(T.isMeshStandardMaterial?j:M).get(T.envMap||ee.environment),Mt===void 0&&(T.addEventListener("dispose",he),Mt=new Map,ee.programs=Mt);let gt=Mt.get(et);if(gt!==void 0){if(ee.currentProgram===gt&&ee.lightsStateVersion===Je)return hn(T,Ke),gt}else Ke.uniforms=Be.getUniforms(T),T.onBuild($,Ke,S),T.onBeforeCompile(Ke,S),gt=Be.acquireProgram(Ke,et),Mt.set(et,gt),ee.uniforms=Ke.uniforms;let wt=ee.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(wt.clippingPlanes=at.uniform),hn(T,Ke),ee.needsLights=un(T),ee.lightsStateVersion=Je,ee.needsLights&&(wt.ambientLightColor.value=Q.state.ambient,wt.lightProbe.value=Q.state.probe,wt.directionalLights.value=Q.state.directional,wt.directionalLightShadows.value=Q.state.directionalShadow,wt.spotLights.value=Q.state.spot,wt.spotLightShadows.value=Q.state.spotShadow,wt.rectAreaLights.value=Q.state.rectArea,wt.ltc_1.value=Q.state.rectAreaLTC1,wt.ltc_2.value=Q.state.rectAreaLTC2,wt.pointLights.value=Q.state.point,wt.pointLightShadows.value=Q.state.pointShadow,wt.hemisphereLights.value=Q.state.hemi,wt.directionalShadowMap.value=Q.state.directionalShadowMap,wt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,wt.spotShadowMap.value=Q.state.spotShadowMap,wt.spotLightMatrix.value=Q.state.spotLightMatrix,wt.spotLightMap.value=Q.state.spotLightMap,wt.pointShadowMap.value=Q.state.pointShadowMap,wt.pointShadowMatrix.value=Q.state.pointShadowMatrix),ee.currentProgram=gt,ee.uniformsList=null,gt}function zt(T){if(T.uniformsList===null){let q=T.currentProgram.getUniforms();T.uniformsList=ia.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function hn(T,q){let $=lt.get(T);$.outputColorSpace=q.outputColorSpace,$.batching=q.batching,$.instancing=q.instancing,$.instancingColor=q.instancingColor,$.skinning=q.skinning,$.morphTargets=q.morphTargets,$.morphNormals=q.morphNormals,$.morphColors=q.morphColors,$.morphTargetsCount=q.morphTargetsCount,$.numClippingPlanes=q.numClippingPlanes,$.numIntersection=q.numClipIntersection,$.vertexAlphas=q.vertexAlphas,$.vertexTangents=q.vertexTangents,$.toneMapping=q.toneMapping}function Xt(T,q,$,ee,Q){q.isScene!==!0&&(q=it),A.resetTextureUnits();let ze=q.fog,Je=ee.isMeshStandardMaterial?q.environment:null,Ke=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:xs,et=(ee.isMeshStandardMaterial?j:M).get(ee.envMap||Je),Mt=ee.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,gt=!!$.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),wt=!!$.morphAttributes.position,qt=!!$.morphAttributes.normal,Gt=!!$.morphAttributes.color,_n=ks;ee.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(_n=S.toneMapping);let Sn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Yt=Sn!==void 0?Sn.length:0,_t=lt.get(ee),Ms=g.state.lights;if(oe===!0&&(Ce===!0||T!==w)){let yn=T===w&&ee.id===ue;at.setState(ee,T,yn)}let Ct=!1;ee.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==Ms.state.version||_t.outputColorSpace!==Ke||Q.isBatchedMesh&&_t.batching===!1||!Q.isBatchedMesh&&_t.batching===!0||Q.isInstancedMesh&&_t.instancing===!1||!Q.isInstancedMesh&&_t.instancing===!0||Q.isSkinnedMesh&&_t.skinning===!1||!Q.isSkinnedMesh&&_t.skinning===!0||Q.isInstancedMesh&&_t.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&_t.instancingColor===!1&&Q.instanceColor!==null||_t.envMap!==et||ee.fog===!0&&_t.fog!==ze||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==at.numPlanes||_t.numIntersection!==at.numIntersection)||_t.vertexAlphas!==Mt||_t.vertexTangents!==gt||_t.morphTargets!==wt||_t.morphNormals!==qt||_t.morphColors!==Gt||_t.toneMapping!==_n||tt.isWebGL2===!0&&_t.morphTargetsCount!==Yt)&&(Ct=!0):(Ct=!0,_t.__version=ee.version);let wn=_t.currentProgram;Ct===!0&&(wn=Wt(ee,q,Q));let Wi=!1,ei=!1,Ri=!1,fn=wn.getUniforms(),ti=_t.uniforms;if(Oe.useProgram(wn.program)&&(Wi=!0,ei=!0,Ri=!0),ee.id!==ue&&(ue=ee.id,ei=!0),Wi||w!==T){fn.setValue(K,"projectionMatrix",T.projectionMatrix),fn.setValue(K,"viewMatrix",T.matrixWorldInverse);let yn=fn.map.cameraPosition;yn!==void 0&&yn.setValue(K,qe.setFromMatrixPosition(T.matrixWorld)),tt.logarithmicDepthBuffer&&fn.setValue(K,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&fn.setValue(K,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,ei=!0,Ri=!0)}if(Q.isSkinnedMesh){fn.setOptional(K,Q,"bindMatrix"),fn.setOptional(K,Q,"bindMatrixInverse");let yn=Q.skeleton;yn&&(tt.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),fn.setValue(K,"boneTexture",yn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(fn.setOptional(K,Q,"batchingTexture"),fn.setValue(K,"batchingTexture",Q._matricesTexture,A));let Bn=$.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0&&tt.isWebGL2===!0)&&F.update(Q,$,wn),(ei||_t.receiveShadow!==Q.receiveShadow)&&(_t.receiveShadow=Q.receiveShadow,fn.setValue(K,"receiveShadow",Q.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(ti.envMap.value=et,ti.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),ei&&(fn.setValue(K,"toneMappingExposure",S.toneMappingExposure),_t.needsLights&&Qn(ti,Ri),ze&&ee.fog===!0&&Le.refreshFogUniforms(ti,ze),Le.refreshMaterialUniforms(ti,ee,ye,ie,ve),ia.upload(K,zt(_t),ti,A)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(ia.upload(K,zt(_t),ti,A),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&fn.setValue(K,"center",Q.center),fn.setValue(K,"modelViewMatrix",Q.modelViewMatrix),fn.setValue(K,"normalMatrix",Q.normalMatrix),fn.setValue(K,"modelMatrix",Q.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){let yn=ee.uniformsGroups;for(let $e=0,oi=yn.length;$e<oi;$e++)if(tt.isWebGL2){let Ss=yn[$e];ut.update(Ss,wn),ut.bind(Ss,wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wn}function Qn(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function un(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,q,$){lt.get(T.texture).__webglTexture=q,lt.get(T.depthTexture).__webglTexture=$;let ee=lt.get(T);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=$===void 0,ee.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,q){let $=lt.get(T);$.__webglFramebuffer=q,$.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(T,q=0,$=0){N=T,P=q,z=$;let ee=!0,Q=null,ze=!1,Je=!1;if(T){let et=lt.get(T);et.__useDefaultFramebuffer!==void 0?(Oe.bindFramebuffer(K.FRAMEBUFFER,null),ee=!1):et.__webglFramebuffer===void 0?A.setupRenderTarget(T):et.__hasExternalTextures&&A.rebindTextures(T,lt.get(T.texture).__webglTexture,lt.get(T.depthTexture).__webglTexture);let Mt=T.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(Je=!0);let gt=lt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(gt[q])?Q=gt[q][$]:Q=gt[q],ze=!0):tt.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?Q=lt.get(T).__webglMultisampledFramebuffer:Array.isArray(gt)?Q=gt[$]:Q=gt,y.copy(T.viewport),J.copy(T.scissor),ce=T.scissorTest}else y.copy(Ee).multiplyScalar(ye).floor(),J.copy(xe).multiplyScalar(ye).floor(),ce=U;if(Oe.bindFramebuffer(K.FRAMEBUFFER,Q)&&tt.drawBuffers&&ee&&Oe.drawBuffers(T,Q),Oe.viewport(y),Oe.scissor(J),Oe.setScissorTest(ce),ze){let et=lt.get(T.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+q,et.__webglTexture,$)}else if(Je){let et=lt.get(T.texture),Mt=q||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,et.__webglTexture,$||0,Mt)}ue=-1},this.readRenderTargetPixels=function(T,q,$,ee,Q,ze,Je){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=lt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Je!==void 0&&(Ke=Ke[Je]),Ke){Oe.bindFramebuffer(K.FRAMEBUFFER,Ke);try{let et=T.texture,Mt=et.format,gt=et.type;if(Mt!==pi&&Te.convert(Mt)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let wt=gt===Hi&&(Ze.has("EXT_color_buffer_half_float")||tt.isWebGL2&&Ze.has("EXT_color_buffer_float"));if(gt!==Vs&&Te.convert(gt)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(gt===Hs&&(tt.isWebGL2||Ze.has("OES_texture_float")||Ze.has("WEBGL_color_buffer_float")))&&!wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-ee&&$>=0&&$<=T.height-Q&&K.readPixels(q,$,ee,Q,Te.convert(Mt),Te.convert(gt),ze)}finally{let et=N!==null?lt.get(N).__webglFramebuffer:null;Oe.bindFramebuffer(K.FRAMEBUFFER,et)}}},this.copyFramebufferToTexture=function(T,q,$=0){let ee=Math.pow(2,-$),Q=Math.floor(q.image.width*ee),ze=Math.floor(q.image.height*ee);A.setTexture2D(q,0),K.copyTexSubImage2D(K.TEXTURE_2D,$,0,0,T.x,T.y,Q,ze),Oe.unbindTexture()},this.copyTextureToTexture=function(T,q,$,ee=0){let Q=q.image.width,ze=q.image.height,Je=Te.convert($.format),Ke=Te.convert($.type);A.setTexture2D($,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,$.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,$.unpackAlignment),q.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,ee,T.x,T.y,Q,ze,Je,Ke,q.image.data):q.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,ee,T.x,T.y,q.mipmaps[0].width,q.mipmaps[0].height,Je,q.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,ee,T.x,T.y,Je,Ke,q.image),ee===0&&$.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),Oe.unbindTexture()},this.copyTextureToTexture3D=function(T,q,$,ee,Q=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ze=T.max.x-T.min.x+1,Je=T.max.y-T.min.y+1,Ke=T.max.z-T.min.z+1,et=Te.convert(ee.format),Mt=Te.convert(ee.type),gt;if(ee.isData3DTexture)A.setTexture3D(ee,0),gt=K.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)A.setTexture2DArray(ee,0),gt=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,ee.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,ee.unpackAlignment);let wt=K.getParameter(K.UNPACK_ROW_LENGTH),qt=K.getParameter(K.UNPACK_IMAGE_HEIGHT),Gt=K.getParameter(K.UNPACK_SKIP_PIXELS),_n=K.getParameter(K.UNPACK_SKIP_ROWS),Sn=K.getParameter(K.UNPACK_SKIP_IMAGES),Yt=$.isCompressedTexture?$.mipmaps[Q]:$.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,Yt.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Yt.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,T.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,T.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,T.min.z),$.isDataTexture||$.isData3DTexture?K.texSubImage3D(gt,Q,q.x,q.y,q.z,ze,Je,Ke,et,Mt,Yt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(gt,Q,q.x,q.y,q.z,ze,Je,Ke,et,Yt.data)):K.texSubImage3D(gt,Q,q.x,q.y,q.z,ze,Je,Ke,et,Mt,Yt),K.pixelStorei(K.UNPACK_ROW_LENGTH,wt),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,qt),K.pixelStorei(K.UNPACK_SKIP_PIXELS,Gt),K.pixelStorei(K.UNPACK_SKIP_ROWS,_n),K.pixelStorei(K.UNPACK_SKIP_IMAGES,Sn),Q===0&&ee.generateMipmaps&&K.generateMipmap(gt),Oe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Oe.unbindTexture()},this.resetState=function(){P=0,z=0,N=null,Oe.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ms}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ah?"display-p3":"srgb",t.unpackColorSpace=Jt.workingColorSpace===dl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Kt?dr:lf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===dr?Kt:xs}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},zc=class extends Xa{};zc.prototype.isWebGL1Renderer=!0;var tl=class extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Bc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=gs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Jn=new D,nl=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.applyMatrix4(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.applyNormalMatrix(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.transformDirection(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ki(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new si(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ri=class extends Ws{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zr,Ia=new D,Jr=new D,Kr=new D,$r=new ke,La=new ke,Mf=new Vt,Io=new D,Ua=new D,Lo=new D,Gu=new ke,cc=new ke,Wu=new ke,_i=class extends Yn{constructor(e=new ri){if(super(),this.isSprite=!0,this.type="Sprite",Zr===void 0){Zr=new xi;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Bc(t,5);Zr.setIndex([0,1,2,0,2,3]),Zr.setAttribute("position",new nl(n,3,0,!1)),Zr.setAttribute("uv",new nl(n,2,3,!1))}this.geometry=Zr,this.material=e,this.center=new ke(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Jr.setFromMatrixScale(this.matrixWorld),Mf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Jr.multiplyScalar(-Kr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Uo(Io.set(-.5,-.5,0),Kr,o,Jr,s,r),Uo(Ua.set(.5,-.5,0),Kr,o,Jr,s,r),Uo(Lo.set(.5,.5,0),Kr,o,Jr,s,r),Gu.set(0,0),cc.set(1,0),Wu.set(1,1);let a=e.ray.intersectTriangle(Io,Ua,Lo,!1,Ia);if(a===null&&(Uo(Ua.set(-.5,.5,0),Kr,o,Jr,s,r),cc.set(0,1),a=e.ray.intersectTriangle(Io,Lo,Ua,!1,Ia),a===null))return;let c=e.ray.origin.distanceTo(Ia);c<e.near||c>e.far||t.push({distance:c,point:Ia.clone(),uv:hr.getInterpolation(Ia,Io,Ua,Lo,Gu,cc,Wu,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Uo(i,e,t,n,s,r){$r.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(La.x=r*$r.x-s*$r.y,La.y=s*$r.x+r*$r.y):La.copy($r),i.copy(e),i.x+=La.x,i.y+=La.y,i.applyMatrix4(Mf)}var il=class extends gi{constructor(e=null,t=1,n=1,s,r,o,a,c,l=An,h=An,u,p){super(null,o,a,c,l,h,s,r,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ha=class extends si{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},jr=new Vt,Xu=new Vt,Do=[],qu=new _s,Ox=new Vt,Da=new pt,Na=new pr,rn=class extends pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ha(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ox)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _s),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,jr),qu.copy(e.boundingBox).applyMatrix4(jr),this.boundingBox.union(qu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,jr),Na.copy(e.boundingSphere).applyMatrix4(jr),this.boundingSphere.union(Na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Da.geometry=this.geometry,Da.material=this.material,Da.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Na.copy(this.boundingSphere),Na.applyMatrix4(n),e.ray.intersectsSphere(Na)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,jr),Xu.multiplyMatrices(n,jr),Da.matrixWorld=Xu,Da.raycast(e,Do);for(let o=0,a=Do.length;o<a;o++){let c=Do[o];c.instanceId=r,c.object=this,t.push(c)}Do.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ha(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ai=class extends gi{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hc=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,m=(o-h)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ke:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new D,s=[],r=[],o=[],a=new D,c=new Vt;for(let m=0;m<=e;m++){let v=m/e;s[m]=this.getTangentAt(v,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let v=Math.acos(Nn(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,v))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Nn(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let v=1;v<=e;v++)r[v].applyMatrix4(c.makeRotationAxis(s[v],m*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function ch(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let p=(o-r)/l-(a-r)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;p*=h,m*=h,s(o,a,p,m)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var No=new D,hc=new ch,uc=new ch,fc=new ch,sl=class extends Hc{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(No.subVectors(s[0],s[1]).add(s[0]),l=No);let u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(No.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=No),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,v=Math.pow(l.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(p),m),g=Math.pow(p.distanceToSquared(h),m);_<1e-4&&(_=1),v<1e-4&&(v=_),g<1e-4&&(g=_),hc.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,v,_,g),uc.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,v,_,g),fc.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,v,_,g)}else this.curveType==="catmullrom"&&(hc.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),uc.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),fc.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return n.set(hc.calc(c),uc.calc(c),fc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var qa=class i extends xi{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],m=[],v=0,_=[],g=n/2,f=0;I(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Mn(u,3)),this.setAttribute("normal",new Mn(p,3)),this.setAttribute("uv",new Mn(m,2));function I(){let O=new D,P=new D,z=0,N=(t-e)/n;for(let ue=0;ue<=r;ue++){let w=[],y=ue/r,J=y*(t-e)+e;for(let ce=0;ce<=s;ce++){let be=ce/s,H=be*c+a,X=Math.sin(H),ie=Math.cos(H);P.x=J*X,P.y=-y*n+g,P.z=J*ie,u.push(P.x,P.y,P.z),O.set(X,N,ie).normalize(),p.push(O.x,O.y,O.z),m.push(be,1-y),w.push(v++)}_.push(w)}for(let ue=0;ue<s;ue++)for(let w=0;w<r;w++){let y=_[w][ue],J=_[w+1][ue],ce=_[w+1][ue+1],be=_[w][ue+1];h.push(y,J,be),h.push(J,ce,be),z+=6}l.addGroup(f,z,0),f+=z}function S(O){let P=v,z=new ke,N=new D,ue=0,w=O===!0?e:t,y=O===!0?1:-1;for(let ce=1;ce<=s;ce++)u.push(0,g*y,0),p.push(0,y,0),m.push(.5,.5),v++;let J=v;for(let ce=0;ce<=s;ce++){let H=ce/s*c+a,X=Math.cos(H),ie=Math.sin(H);N.x=w*ie,N.y=g*y,N.z=w*X,u.push(N.x,N.y,N.z),p.push(0,y,0),z.x=X*.5+.5,z.y=ie*.5*y+.5,m.push(z.x,z.y),v++}for(let ce=0;ce<s;ce++){let be=P+ce,H=J+ce;O===!0?h.push(H,H+1,be):h.push(H+1,H,be),ue+=3}l.addGroup(f,ue,O===!0?1:2),f+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xs=class i extends qa{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ya=class i extends xi{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,p=new D,m=[],v=[],_=[],g=[];for(let f=0;f<=n;f++){let I=[],S=f/n,O=0;f===0&&o===0?O=.5/t:f===n&&c===Math.PI&&(O=-.5/t);for(let P=0;P<=t;P++){let z=P/t;u.x=-e*Math.cos(s+z*r)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(s+z*r)*Math.sin(o+S*a),v.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),g.push(z+O,1-S),I.push(l++)}h.push(I)}for(let f=0;f<n;f++)for(let I=0;I<t;I++){let S=h[f][I+1],O=h[f][I],P=h[f+1][I],z=h[f+1][I+1];(f!==0||o>0)&&m.push(S,O,z),(f!==n-1||c<Math.PI)&&m.push(O,P,z)}this.setIndex(m),this.setAttribute("position",new Mn(v,3)),this.setAttribute("normal",new Mn(_,3)),this.setAttribute("uv",new Mn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var rl=class i extends xi{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new D,u=new D,p=new D;for(let m=0;m<=n;m++)for(let v=0;v<=s;v++){let _=v/s*r,g=m/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(v/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let v=1;v<=s;v++){let _=(s+1)*m+v-1,g=(s+1)*(m-1)+v-1,f=(s+1)*(m-1)+v,I=(s+1)*m+v;o.push(_,g,I),o.push(g,f,I)}this.setIndex(o),this.setAttribute("position",new Mn(a,3)),this.setAttribute("normal",new Mn(c,3)),this.setAttribute("uv",new Mn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var al=class extends xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var en=class extends Ws{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cf,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Fo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function zx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ua=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kc=class extends ua{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:eu,endingEnd:eu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case tu:r=e,a=2*t-n;break;case nu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case tu:o=e,c=2*n-t;break;case nu:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,m=this._weightNext,v=(n-t)/(s-t),_=v*v,g=_*v,f=-p*g+2*p*_-p*v,I=(1+p)*g+(-1.5-2*p)*_+(-.5+p)*v+1,S=(-1-m)*g+(1.5+m)*_+.5*v,O=m*g-m*_;for(let P=0;P!==a;++P)r[P]=f*o[h+P]+I*o[l+P]+S*o[c+P]+O*o[u+P];return r}},Vc=class extends ua{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let p=0;p!==a;++p)r[p]=o[l+p]*u+o[c+p]*h;return r}},Gc=class extends ua{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ki=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fo(t,this.TimeBufferType),this.values=Fo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fo(e.times,Array),values:Fo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zo:t=this.InterpolantFactoryMethodDiscrete;break;case Bo:t=this.InterpolantFactoryMethodLinear;break;case Hl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zo;case this.InterpolantFactoryMethodLinear:return Bo;case this.InterpolantFactoryMethodSmooth:return Hl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&zx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Hl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,p=u-n,m=u+n;for(let v=0;v!==n;++v){let _=t[u+v];if(_!==t[p+v]||_!==t[m+v]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,p=o*n;for(let m=0;m!==n;++m)t[p+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ki.prototype.TimeBufferType=Float32Array;ki.prototype.ValueBufferType=Float32Array;ki.prototype.DefaultInterpolation=Bo;var mr=class extends ki{};mr.prototype.ValueTypeName="bool";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=zo;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;var Wc=class extends ki{};Wc.prototype.ValueTypeName="color";var Xc=class extends ki{};Xc.prototype.ValueTypeName="number";var qc=class extends ua{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Rn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Za=class extends ki{InterpolantFactoryMethodLinear(e){return new qc(this.times,this.values,this.getValueSize(),e)}};Za.prototype.ValueTypeName="quaternion";Za.prototype.DefaultInterpolation=Bo;Za.prototype.InterpolantFactoryMethodSmooth=void 0;var gr=class extends ki{};gr.prototype.ValueTypeName="string";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=zo;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Yc=class extends ki{};Yc.prototype.ValueTypeName="vector";var Zc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){let m=l[u],v=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null}}},Bx=new Zc,Jc=class{constructor(e){this.manager=e!==void 0?e:Bx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Jc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ja=class extends Yn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ol=class extends Ja{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},dc=new Vt,Yu=new D,Zu=new D,ll=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wa,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Yu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yu),Zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zu),t.updateMatrixWorld(),dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ju=new Vt,Fa=new D,pc=new D,Kc=class extends ll{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Fa.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fa),pc.copy(n.position),pc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pc),n.updateMatrixWorld(),s.makeTranslation(-Fa.x,-Fa.y,-Fa.z),Ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju)}},Ka=class extends Ja{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Kc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},$c=class extends ll{constructor(){super(new ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cl=class extends Ja{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yn.DEFAULT_UP),this.updateMatrix(),this.target=new Yn,this.shadow=new $c}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var hl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ku(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Ku();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Ku(){return(typeof performance>"u"?Date:performance).now()}var hh="\\[\\]\\.:\\/",Hx=new RegExp("["+hh+"]","g"),uh="[^"+hh+"]",kx="[^"+hh.replace("\\.","")+"]",Vx=/((?:WC+[\/:])*)/.source.replace("WC",uh),Gx=/(WCOD+)?/.source.replace("WCOD",kx),Wx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uh),Xx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uh),qx=new RegExp("^"+Vx+Gx+Wx+Xx+"$"),Yx=["material","materials","bones","map"],jc=class{constructor(e,t,n){let s=n||gn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hx,"")}static parseTrackName(e){let t=qx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gn.Composite=jc;gn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gn.prototype.GetterByBindingType=[gn.prototype._getValue_direct,gn.prototype._getValue_array,gn.prototype._getValue_arrayElement,gn.prototype._getValue_toArray];gn.prototype.SetterByBindingTypeAndVersioning=[[gn.prototype._setValue_direct,gn.prototype._setValue_direct_setNeedsUpdate,gn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_array,gn.prototype._setValue_array_setNeedsUpdate,gn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_arrayElement,gn.prototype._setValue_arrayElement_setNeedsUpdate,gn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_fromArray,gn.prototype._setValue_fromArray_setNeedsUpdate,gn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var r_=new Float32Array(1);var ul=class{constructor(e,t,n=0,s=1/0){this.ray=new oa(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ga,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Qc(e,this,n,t),n.sort($u),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Qc(e[s],this,n,t);return n.sort($u),n}};function $u(i,e){return i.distance-e.distance}function Qc(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Qc(s[r],e,t,!0)}}var $a=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Nn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Sf={type:"change"},dh={type:"start"},Ef={type:"end"},ml=new oa,bf=new zi,Zx=Math.cos(70*uf.DEG2RAD),gl=class extends ji{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xr.ROTATE,MIDDLE:xr.DOLLY,RIGHT:xr.PAN},this.touches={ONE:_r.ROTATE,TWO:_r.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(F){F.addEventListener("keydown",_e),this._domElementKeyEvents=F},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_e),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Sf),n.update(),r=s.NONE},this.update=(function(){let F=new D,fe=new Rn().setFromUnitVectors(e.up,new D(0,1,0)),Ae=fe.clone().invert(),Te=new D,Ve=new Rn,ut=new D,vt=2*Math.PI;return function(me=null){let B=n.object.position;F.copy(B).sub(n.target),F.applyQuaternion(fe),a.setFromVector3(F),n.autoRotate&&r===s.NONE&&J(w(me)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Re=n.minAzimuthAngle,he=n.maxAzimuthAngle;isFinite(Re)&&isFinite(he)&&(Re<-Math.PI?Re+=vt:Re>Math.PI&&(Re-=vt),he<-Math.PI?he+=vt:he>Math.PI&&(he-=vt),Re<=he?a.theta=Math.max(Re,Math.min(he,a.theta)):a.theta=a.theta>(Re+he)/2?Math.max(Re,a.theta):Math.min(he,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&z||n.object.isOrthographicCamera?a.radius=se(a.radius):a.radius=se(a.radius*l),F.setFromSpherical(a),F.applyQuaternion(Ae),B.copy(n.target).add(F),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let nt=!1;if(n.zoomToCursor&&z){let Ge=null;if(n.object.isPerspectiveCamera){let ft=F.length();Ge=se(ft*l);let Rt=ft-Ge;n.object.position.addScaledVector(O,Rt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let ft=new D(P.x,P.y,0);ft.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),nt=!0;let Rt=new D(P.x,P.y,0);Rt.unproject(n.object),n.object.position.sub(Rt).add(ft),n.object.updateMatrixWorld(),Ge=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ge!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ge).add(n.object.position):(ml.origin.copy(n.object.position),ml.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ml.direction))<Zx?e.lookAt(n.target):(bf.setFromNormalAndCoplanarPoint(n.object.up,n.target),ml.intersectPlane(bf,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),nt=!0);return l=1,z=!1,nt||Te.distanceToSquared(n.object.position)>o||8*(1-Ve.dot(n.object.quaternion))>o||ut.distanceToSquared(n.target)>0?(n.dispatchEvent(Sf),Te.copy(n.object.position),Ve.copy(n.object.quaternion),ut.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ie),n.domElement.removeEventListener("pointerdown",lt),n.domElement.removeEventListener("pointercancel",M),n.domElement.removeEventListener("wheel",Me),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",M),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",_e),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new $a,c=new $a,l=1,h=new D,u=new ke,p=new ke,m=new ke,v=new ke,_=new ke,g=new ke,f=new ke,I=new ke,S=new ke,O=new D,P=new ke,z=!1,N=[],ue={};function w(F){return F!==null?2*Math.PI/60*n.autoRotateSpeed*F:2*Math.PI/60/60*n.autoRotateSpeed}function y(F){let fe=Math.abs(F)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*fe)}function J(F){c.theta-=F}function ce(F){c.phi-=F}let be=(function(){let F=new D;return function(Ae,Te){F.setFromMatrixColumn(Te,0),F.multiplyScalar(-Ae),h.add(F)}})(),H=(function(){let F=new D;return function(Ae,Te){n.screenSpacePanning===!0?F.setFromMatrixColumn(Te,1):(F.setFromMatrixColumn(Te,0),F.crossVectors(n.object.up,F)),F.multiplyScalar(Ae),h.add(F)}})(),X=(function(){let F=new D;return function(Ae,Te){let Ve=n.domElement;if(n.object.isPerspectiveCamera){let ut=n.object.position;F.copy(ut).sub(n.target);let vt=F.length();vt*=Math.tan(n.object.fov/2*Math.PI/180),be(2*Ae*vt/Ve.clientHeight,n.object.matrix),H(2*Te*vt/Ve.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(be(Ae*(n.object.right-n.object.left)/n.object.zoom/Ve.clientWidth,n.object.matrix),H(Te*(n.object.top-n.object.bottom)/n.object.zoom/Ve.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function ie(F){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ye(F){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function pe(F,fe){if(!n.zoomToCursor)return;z=!0;let Ae=n.domElement.getBoundingClientRect(),Te=F-Ae.left,Ve=fe-Ae.top,ut=Ae.width,vt=Ae.height;P.x=Te/ut*2-1,P.y=-(Ve/vt)*2+1,O.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function se(F){return Math.max(n.minDistance,Math.min(n.maxDistance,F))}function Ee(F){u.set(F.clientX,F.clientY)}function xe(F){pe(F.clientX,F.clientX),f.set(F.clientX,F.clientY)}function U(F){v.set(F.clientX,F.clientY)}function k(F){p.set(F.clientX,F.clientY),m.subVectors(p,u).multiplyScalar(n.rotateSpeed);let fe=n.domElement;J(2*Math.PI*m.x/fe.clientHeight),ce(2*Math.PI*m.y/fe.clientHeight),u.copy(p),n.update()}function oe(F){I.set(F.clientX,F.clientY),S.subVectors(I,f),S.y>0?ie(y(S.y)):S.y<0&&ye(y(S.y)),f.copy(I),n.update()}function Ce(F){_.set(F.clientX,F.clientY),g.subVectors(_,v).multiplyScalar(n.panSpeed),X(g.x,g.y),v.copy(_),n.update()}function ve(F){pe(F.clientX,F.clientY),F.deltaY<0?ye(y(F.deltaY)):F.deltaY>0&&ie(y(F.deltaY)),n.update()}function Fe(F){let fe=!1;switch(F.code){case n.keys.UP:F.ctrlKey||F.metaKey||F.shiftKey?ce(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(0,n.keyPanSpeed),fe=!0;break;case n.keys.BOTTOM:F.ctrlKey||F.metaKey||F.shiftKey?ce(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(0,-n.keyPanSpeed),fe=!0;break;case n.keys.LEFT:F.ctrlKey||F.metaKey||F.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(n.keyPanSpeed,0),fe=!0;break;case n.keys.RIGHT:F.ctrlKey||F.metaKey||F.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(-n.keyPanSpeed,0),fe=!0;break}fe&&(F.preventDefault(),n.update())}function st(F){if(N.length===1)u.set(F.pageX,F.pageY);else{let fe=At(F),Ae=.5*(F.pageX+fe.x),Te=.5*(F.pageY+fe.y);u.set(Ae,Te)}}function qe(F){if(N.length===1)v.set(F.pageX,F.pageY);else{let fe=At(F),Ae=.5*(F.pageX+fe.x),Te=.5*(F.pageY+fe.y);v.set(Ae,Te)}}function it(F){let fe=At(F),Ae=F.pageX-fe.x,Te=F.pageY-fe.y,Ve=Math.sqrt(Ae*Ae+Te*Te);f.set(0,Ve)}function Qe(F){n.enableZoom&&it(F),n.enablePan&&qe(F)}function K(F){n.enableZoom&&it(F),n.enableRotate&&st(F)}function Ht(F){if(N.length==1)p.set(F.pageX,F.pageY);else{let Ae=At(F),Te=.5*(F.pageX+Ae.x),Ve=.5*(F.pageY+Ae.y);p.set(Te,Ve)}m.subVectors(p,u).multiplyScalar(n.rotateSpeed);let fe=n.domElement;J(2*Math.PI*m.x/fe.clientHeight),ce(2*Math.PI*m.y/fe.clientHeight),u.copy(p)}function Ze(F){if(N.length===1)_.set(F.pageX,F.pageY);else{let fe=At(F),Ae=.5*(F.pageX+fe.x),Te=.5*(F.pageY+fe.y);_.set(Ae,Te)}g.subVectors(_,v).multiplyScalar(n.panSpeed),X(g.x,g.y),v.copy(_)}function tt(F){let fe=At(F),Ae=F.pageX-fe.x,Te=F.pageY-fe.y,Ve=Math.sqrt(Ae*Ae+Te*Te);I.set(0,Ve),S.set(0,Math.pow(I.y/f.y,n.zoomSpeed)),ie(S.y),f.copy(I);let ut=(F.pageX+fe.x)*.5,vt=(F.pageY+fe.y)*.5;pe(ut,vt)}function Oe(F){n.enableZoom&&tt(F),n.enablePan&&Ze(F)}function kt(F){n.enableZoom&&tt(F),n.enableRotate&&Ht(F)}function lt(F){n.enabled!==!1&&(N.length===0&&(n.domElement.setPointerCapture(F.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",M)),Ye(F),F.pointerType==="touch"?Be(F):j(F))}function A(F){n.enabled!==!1&&(F.pointerType==="touch"?Le(F):we(F))}function M(F){at(F),N.length===0&&(n.domElement.releasePointerCapture(F.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",M)),n.dispatchEvent(Ef),r=s.NONE}function j(F){let fe;switch(F.button){case 0:fe=n.mouseButtons.LEFT;break;case 1:fe=n.mouseButtons.MIDDLE;break;case 2:fe=n.mouseButtons.RIGHT;break;default:fe=-1}switch(fe){case xr.DOLLY:if(n.enableZoom===!1)return;xe(F),r=s.DOLLY;break;case xr.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enablePan===!1)return;U(F),r=s.PAN}else{if(n.enableRotate===!1)return;Ee(F),r=s.ROTATE}break;case xr.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enableRotate===!1)return;Ee(F),r=s.ROTATE}else{if(n.enablePan===!1)return;U(F),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(dh)}function we(F){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;k(F);break;case s.DOLLY:if(n.enableZoom===!1)return;oe(F);break;case s.PAN:if(n.enablePan===!1)return;Ce(F);break}}function Me(F){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(F.preventDefault(),n.dispatchEvent(dh),ve(F),n.dispatchEvent(Ef))}function _e(F){n.enabled===!1||n.enablePan===!1||Fe(F)}function Be(F){switch(ge(F),N.length){case 1:switch(n.touches.ONE){case _r.ROTATE:if(n.enableRotate===!1)return;st(F),r=s.TOUCH_ROTATE;break;case _r.PAN:if(n.enablePan===!1)return;qe(F),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case _r.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Qe(F),r=s.TOUCH_DOLLY_PAN;break;case _r.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;K(F),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(dh)}function Le(F){switch(ge(F),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ht(F),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Ze(F),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Oe(F),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;kt(F),n.update();break;default:r=s.NONE}}function Ie(F){n.enabled!==!1&&F.preventDefault()}function Ye(F){N.push(F.pointerId)}function at(F){delete ue[F.pointerId];for(let fe=0;fe<N.length;fe++)if(N[fe]==F.pointerId){N.splice(fe,1);return}}function ge(F){let fe=ue[F.pointerId];fe===void 0&&(fe=new ke,ue[F.pointerId]=fe),fe.set(F.pageX,F.pageY)}function At(F){let fe=F.pointerId===N[0]?N[1]:N[0];return ue[fe]}n.domElement.addEventListener("contextmenu",Ie),n.domElement.addEventListener("pointerdown",lt),n.domElement.addEventListener("pointercancel",M),n.domElement.addEventListener("wheel",Me,{passive:!1}),this.update()}};var xl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var vi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Jx=new ca(-1,1,1,-1,0,1),ph=class extends xi{constructor(){super(),this.setAttribute("position",new Mn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Mn([0,2,0,0,2,0],2))}},Kx=new ph,Ys=class{constructor(e){this._mesh=new pt(Kx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var _l=class extends vi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof xn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qs.clone(e.uniforms),this.material=new xn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ys(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Qa=class extends vi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},vl=class extends vi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var yl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ke);this._width=n.width,this._height=n.height,t=new $n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _l(xl),this.copyPass.material.blending=$i,this.clock=new hl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Qa!==void 0&&(o instanceof Qa?n=!0:o instanceof vl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ml=class extends vi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var wf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var da=class i extends vi{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ke(e.x,e.y):new ke(256,256),this.clearColor=new Ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new $n(r,o,{type:Hi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let p=new $n(r,o,{type:Hi});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let m=new $n(r,o,{type:Hi});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=wf;this.highPassUniforms=qs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ke(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=xl;this.copyUniforms=qs.clone(h.uniforms),this.blendMaterial=new xn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:mi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ne,this.oldClearAlpha=1,this.basic=new Ut,this.fsQuad=new Ys(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ke(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new xn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ke(.5,.5)},direction:{value:new ke(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};da.BlurDirectionX=new ke(1,0);da.BlurDirectionY=new ke(0,1);var Tf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Sl=class extends vi{constructor(){super();let e=Tf;this.uniforms=qs.clone(e.uniforms),this.material=new al({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ys(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Jt.getTransfer(this._outputColorSpace)===sn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===th?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ih?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ja?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===sh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Vi=Math.PI*2;function Af(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}var Ot={lot:0,res:1,apt:2,ind:3,mall:4,park:5,golf:6,air:7,port:8,arena:9,hwy:10,ring:11},nn={rw:{x0:-492,x1:-196,z:-280,hw:9},twz:-253,apron:{x0:-440,x1:-276,z0:-249,z1:-212},field:{x:-220,z:32,hx:19,hz:12},port:{x0:-40,x1:84,z0:-292,z1:-148},lake:{x:-76,z:176,w:40,d:32},hwyX:-132,hwyZ:122,isle:{x:208,z:128,r:40},metro:{x0:-96,x1:74,z0:-96,z1:96,r:16,y:12}},El=i=>i*36+14;function Rf(i,e){let t=Af(4242),n=33,s=new Uint8Array(n*n*4),r=new Set,o=(h,u,p)=>{if(Math.abs(h)>16||Math.abs(u)>16)return;let m=((u+16)*n+h+16)*4;s[m]=p,s[m+3]=255},a=(h,u)=>Math.abs(h)>16||Math.abs(u)>16?0:s[((u+16)*n+h+16)*4],c=(h,u,p,m,v)=>{for(let _=h;_<=u;_++)for(let g=p;g<=m;g++)o(_,g,v),r.add(_+","+g)};c(-14,-6,-9,-6,Ot.air),c(-1,1,-8,-5,Ot.port),c(-7,-6,0,1,Ot.arena),c(-9,-7,5,7,Ot.golf),c(-3,-2,4,5,Ot.park),c(-5,-5,-2,-2,Ot.mall),c(-10,-10,2,2,Ot.mall),c(-1,-1,8,8,Ot.mall);for(let h=-16;h<=16;h++)r.has("-4,"+h)||c(-4,-4,h,h,Ot.hwy),h<=1&&!r.has(h+",3")&&c(h,h,3,3,Ot.hwy);for(let h=-16;h<=16;h++)for(let u=-16;u<=16;u++){if(r.has(h+","+u))continue;let p=El(h),m=El(u),v=Math.hypot(p,m);if(Math.abs(p)<i+26&&Math.abs(m)<i+26){o(h,u,Ot.ring);continue}if(p>e+12||v>600){o(h,u,Ot.lot);continue}let _=t(),g=u<=-5||h<=-10,f=u>=4;o(h,u,g?_<.3?Ot.ind:_<.66?Ot.res:_<.8?Ot.apt:_<.9?Ot.park:Ot.lot:f?_<.58?Ot.res:_<.74?Ot.apt:_<.88?Ot.park:Ot.lot:_<.38?Ot.apt:_<.78?Ot.res:_<.9?Ot.park:Ot.lot)}let l=new il(s,n,n,pi);return l.magFilter=l.minFilter=An,l.needsUpdate=!0,{tex:l,get:a}}function Cf(i){let{scene:e,col:t,voxMesh:n,boxGeo:s,mobile:r,HALF:o,PITCH:a,NB:c,BEACH_X:l,PIER_Z:h,roofs:u,ants:p,site:m,zones:v,spark:_,seaMat:g,cam:f,rr:I,loadIcon:S,mono:O}=i,P=Af(9137),z=r,N=new Vt,ue=new Vt,w=new Rn,y=new D,J=new D,ce=new vs(0,0,0,"YXZ"),be=new Ne,H=new D,X=new D,ie=new D,ye=new D(0,1,0),pe=new D(0,-1,0),se=new D(0,0,1),Ee=new Vt().makeScale(0,0,0),xe=new Ne(1,1,1),U=(d,C,L,Z,le,Pe,rt,je,ot,Pt)=>({x:d,y:C,z:L,w:Z,h:le,d:Pe,c:typeof rt=="string"?t(rt):rt,ry:je,rx:ot,rz:Pt}),k=(d,C,L)=>new Ne(d,C,L),oe=d=>d[Math.floor(P()*d.length)],Ce=(d,C,L)=>new D(d,C,L),ve={x:0,y:0,z:0,yaw:0,pitch:0},Fe={x:0,y:0,z:0,yaw:0,pitch:0},st=new zn;e.add(st);function qe(d,C=st){let L=new rn(s(),new Ut({toneMapped:!1}),Math.max(1,d.length));return d.forEach((Z,le)=>{w.setFromEuler(ce.set(Z.rx||0,Z.ry||0,Z.rz||0)),N.compose(y.set(Z.x,Z.y+Z.h/2,Z.z),w,J.set(Z.w,Z.h,Z.d)),L.setMatrixAt(le,N),L.setColorAt(le,Z.c)}),L.count=d.length,L.frustumCulled=!1,C.add(L),L}function it(d,C){let L=new rn(s(),new en,Math.max(1,d.length));return d.forEach((Z,le)=>{w.setFromEuler(ce.set(Z.rx||0,Z.ry||0,Z.rz||0)),N.compose(y.set(Z.x,Z.y+Z.h/2,Z.z),w,J.set(Z.w,Z.h,Z.d)),L.setMatrixAt(le,N),L.setColorAt(le,Z.c)}),L.count=d.length,L.frustumCulled=!1,C.add(L),L}function Qe(d,C){let L=d.map(([le,Pe,rt,je,ot])=>{let Pt=!ot&&typeof je=="string",te=new rn(s(),ot?new Ut({toneMapped:!1}):new en(Pt?{color:je}:{}),C);te.frustumCulled=!1,e.add(te);for(let Se=0;Se<C;Se++)te.setMatrixAt(Se,Ee),Pt||te.setColorAt(Se,ot&&je?je:xe);return{k:le,m:te,L:new Vt().compose(new D(...Pe),new Rn,new D(...rt))}}),Z=Object.fromEntries(L.map(le=>[le.k,le]));return{by:Z,set(le,Pe,rt,je,ot=0,Pt=0,te=0,Se=1){w.setFromEuler(ce.set(Pt,ot,te)),N.compose(y.set(Pe,rt,je),w,J.set(Se,Se,Se));for(let Xe of L)ue.multiplyMatrices(N,Xe.L),Xe.m.setMatrixAt(le,ue)},hide(le){for(let Pe of L)Pe.m.setMatrixAt(le,Ee)},paint(le,Pe,rt){Z[le].m.setColorAt(Pe,rt)},flush(){for(let le of L)le.m.instanceMatrix.needsUpdate=!0,le.m.instanceColor&&(le.m.instanceColor.needsUpdate=!0)}}}function K(d){let C=[],L=0;for(let Z=0;Z<d.length;Z++){let le=d[Z],Pe=d[(Z+1)%d.length],rt=Math.hypot(Pe[0]-le[0],Pe[1]-le[1],Pe[2]-le[2])||.001;C.push({a:le,b:Pe,l:rt,at:L}),L+=rt}return{seg:C,len:L}}function Ht(d,C,L=ve){C=(C%d.len+d.len)%d.len;let Z=0,le=d.seg.length-1;for(;Z<le;){let te=Z+le+1>>1;d.seg[te].at<=C?Z=te:le=te-1}let Pe=d.seg[Z],rt=(C-Pe.at)/Pe.l,je=Pe.b[0]-Pe.a[0],ot=Pe.b[1]-Pe.a[1],Pt=Pe.b[2]-Pe.a[2];return L.x=Pe.a[0]+je*rt,L.y=Pe.a[1]+ot*rt,L.z=Pe.a[2]+Pt*rt,L.yaw=Math.atan2(je,Pt),L.pitch=-Math.atan2(ot,Math.hypot(je,Pt)),L}function Ze(d,C,L,Z,le,Pe,rt=6){let je=[],ot=(Pt,te,Se)=>{for(let Xe=0;Xe<=rt;Xe++){let ht=Se+Xe/rt*Math.PI/2;je.push([Pt+Math.cos(ht)*le,Pe,te+Math.sin(ht)*le])}};return ot(C-le,L+le,-Math.PI/2),ot(C-le,Z-le,0),ot(d+le,Z-le,Math.PI/2),ot(d+le,L+le,Math.PI),je}let tt=(d,C)=>{let L=document.createElement("canvas");L.width=d,L.height=C;let Z=L.getContext("2d"),le=new ai(L);return le.colorSpace=Kt,{c:L,g:Z,tex:le}},Oe=(d,C,L)=>{for(;d.measureText(C).width>L&&C.length>3;)C=C.slice(0,-2)+"\u2026";return C},kt=[k(3.4,.5,1.8),k(.5,2.2,3.4),k(3.4,2.6,.5),k(2.2,.6,3.4),k(.5,3.2,1.6)],lt=["#ffd6e8","#d8fff0","#e8dcff","#ffe6cc","#d6ecff","#fff6d6","#f4f0ff","#ffc9a0"].map(t),A=["#5a5288","#4a4478","#6a5a94","#3d3a6e","#8a6a9a","#2f3a70","#8f86b8","#a49ccb"].map(t),M=["#6a6a8a","#58607e","#7a7290","#4e5a74","#8a8296"].map(t),j=["#ffd23f","#5fc8ff","#ff9ec9","#9ff0d0","#c8a8ff","#f4f0ff","#ff6a5a","#2a2a44"].map(t),we=["#2fa86a","#26985e","#38b874","#2c8f5a"].map(t),Me=[],_e=[],Be=[],Le=[];function Ie(d,C,L=1,Z=0){let le=oe(we);Me.push(U(d,Z,C,.7*L,2.2*L,.7*L,"#6a4630"),U(d,Z+2*L,C,3.4*L,1.7*L,3.4*L,le),U(d,Z+3.6*L,C,2.4*L,1.3*L,2.4*L,le),U(d,Z+4.8*L,C,1.2*L,.9*L,1.2*L,le))}function Ye(d,C,L=1,Z=0){let le=Math.round(7+P()*4),Pe=(P()-.5)*.25;for(let ot=0;ot<le;ot++)_e.push(U(d+Pe*ot*ot*.08,Z+ot*.9*L,C,.7*L,.9*L,.7*L,ot%2?"#8a5a3a":"#7a4e30"));let rt=d+Pe*le*le*.08,je=Z+le*.9*L;for(let ot=0;ot<6;ot++){let Pt=ot/6*Vi+P()*.4;for(let te=1;te<=5;te++)_e.push(U(rt+Math.cos(Pt)*te*.8*L,je+(te<3?.3:-(te-2)*.55)*L,C+Math.sin(Pt)*te*.8*L,.75*L,.35*L,.75*L,te%2?"#2fbf6e":"#26a85e"))}_e.push(U(rt,je-.3,C,1.1*L,.8*L,1.1*L,"#2fbf6e"))}let at=[],ge=[],At=[],F=[],fe=[],Ae=[],Te=z?430:600,Ve=l-6;for(let d=-16;d<=16;d++)for(let C=-16;C<=16;C++){let L=v.get(d,C),Z=El(d),le=El(C),Pe=Math.hypot(Z,le);if(Pe>Te)continue;let rt=Math.min(1,Pe/600);if(L===Ot.res)for(let je of[-10,0,10])for(let ot of[-10,0,10]){if(P()<.14)continue;let Pt=Z+je+(P()-.5)*1.4,te=le+ot+(P()-.5)*1.4;if(Pt>Ve)continue;let Se=4.6+P()*2.2,Xe=4.6+P()*2.2,ht=P()<.32?5.4:3.2,Tt=oe(lt);at.push(U(Pt,0,te,Se,ht,Xe,Tt)),P()<.3&&at.push(U(Pt+(P()-.5),ht,te+(P()-.5),Se*.5,1.2,Xe*.5,Tt)),P()<.42?F.push(U(Pt+(P()<.5?1:-1)*(Se/2+1.5),0,te+(P()-.5)*2,2.2,.14,3,k(.16,.85,1.2))):P()<.55&&Ie(Pt+(P()<.5?1:-1)*(Se/2+1.7),te+(P()-.5)*3,.65+P()*.3)}else if(L===Ot.apt){let je=2+Math.floor(P()*3),ot=[[-8,-8],[8,-8],[-8,8],[8,8]].sort(()=>P()-.5).slice(0,je);for(let[Pt,te]of ot){let Se=Z+Pt,Xe=le+te;if(Se>Ve-2)continue;let ht=7+Math.round(P()*5),Tt=7+Math.round(P()*5),ln=9+Math.round(P()*(12+rt*26)),ii=oe(A);ge.push(U(Se,0,Xe,ht,ln,Tt,ii)),ln>18&&P()<.5&&ge.push(U(Se,ln,Xe,ht-2,2+Math.round(P()*4),Tt-2,ii)),P()<.3&&Be.push(U(Se,ln+.05,Xe-Tt/2+.9,ht-1.6,.3,.3,oe(kt)))}P()<.5&&Ie(Z+(P()-.5)*6,le+(P()-.5)*6)}else if(L===Ot.ind){let je=P()<.55;for(let ot of je?[-7.5,7.5]:[0]){let Pt=22+Math.round(P()*6),te=je?10:18,Se=5+Math.round(P()*4),Xe=oe(M);At.push(U(Z,0,le+ot,Pt,Se,te,Xe));for(let ht=-Pt/2+3;ht<Pt/2-2;ht+=4)At.push(U(Z+ht,Se,le+ot,1.2,.45,te-2,"#c8c4dc"))}if(P()<.55){let ot=Z+12,Pt=le+(je?0:11),te=15+Math.round(P()*10);At.push(U(ot,0,Pt,2,te,2,"#8a3a4a"),U(ot,te-3,Pt,2.3,1,2.3,"#f0eaff")),Ae.push([ot,te,Pt]),Be.push(U(ot,te,Pt,.5,.4,.5,k(4,.3,.3)))}}else if(L===Ot.mall){let je=oe(lt);ge.push(U(Z-2,0,le-7,24,7,14,je),U(Z-2,7,le-7,12,2,8,je)),Be.push(U(Z-2,4.4,le+.12,20,.6,.2,oe(kt)));for(let ot=0;ot<3;ot++)for(let Pt=0;Pt<8;Pt++)P()<.7&&fe.push(U(Z-12.5+Pt*3.2,0,le+4+ot*4.4,1.5,1.1,3,oe(j)))}else if(L===Ot.park){if(d>=-3&&d<=-2&&C>=4&&C<=5)continue;for(let je=0;je<(z?4:8);je++)Ie(Z+(P()-.5)*26,le+(P()-.5)*26,.8+P()*.5)}else if(L===Ot.lot)Z<Ve&&P()<.3&&Ie(Z+(P()-.5)*20,le+(P()-.5)*20);else if(L===Ot.hwy&&P()<.5){let je=Z+(P()-.5)*24,ot=le+(P()-.5)*24;Math.abs(je-nn.hwyX)>10&&Math.abs(ot-nn.hwyZ)>10&&je<Ve&&Ie(je,ot,.9)}}n(at,!0),n(ge,!0),n(At,!0),n(fe),qe(F);let ut=Math.min(z?12:28,Ae.length),vt=5,mt=new rn(s(),new en({color:"#5a4a7a",transparent:!0,opacity:.5,depthWrite:!1}),Math.max(1,ut*vt));mt.frustumCulled=!1,e.add(mt);let me=nn.lake,B=new pt(new jn(me.w,me.d).rotateX(-Math.PI/2),g);B.position.set(me.x,.22,me.z),e.add(B);let Re=[U(me.x,0,me.z-me.d/2-.6,me.w+2.4,.5,1.2,"#d8d2f0"),U(me.x,0,me.z+me.d/2+.6,me.w+2.4,.5,1.2,"#d8d2f0"),U(me.x-me.w/2-.6,0,me.z,1.2,.5,me.d,"#d8d2f0"),U(me.x+me.w/2+.6,0,me.z,1.2,.5,me.d,"#d8d2f0"),U(me.x,0,me.z,3.4,.9,3.4,"#e8e4f4"),U(me.x,.9,me.z,1.2,1.4,1.2,"#e8e4f4")];for(let d=0;d<(z?14:30);d++){let C=-108+P()*64,L=144+P()*64;Math.abs(C-me.x)<me.w/2+3&&Math.abs(L-me.z)<me.d/2+3||Ie(C,L,.8+P()*.6)}n(Re),Be.push(U(me.x,.95,me.z,3.6,.1,3.6,k(.6,1.8,2.6)));let he=nn.rw,nt=nn.twz,Ge=[],ft=[];Ge.push(U(-358,0,-204,128,9,16,"#c9c3e8"),U(-358,9,-204,120,2.2,12,"#4a3a8a"));for(let d=0;d<6;d++)Ge.push(U(-262,d*4.5,-204,5.6-d*.3,4.5,5.6-d*.3,d%2?"#d8d2f0":"#bdb6e0"));Ge.push(U(-262,27,-204,9,4.6,9,"#2c3c96"),U(-262,31.6,-204,10,.9,10,"#e8e2f8"),U(-226,0,-205,30,7,16,"#7a72a8"));for(let d=0;d<5;d++)ft.push(U(-413+d*25,4.4,-217,2.4,2.4,10,"#bdb6e0"));for(let d of[-474,-446])ft.push(U(d,0,-212,24,10,22,"#8f86b8"),U(d,10,-212,18,3,22,"#a49ccb"),U(d,13,-212,10,2,22,"#b3a9d6"));for(let d=0;d<3;d++)ft.push(U(-500+d*8,0,-236,6,5,6,"#e8e4f4"));n(Ge,!0),n(ft);let Rt=[];for(let d=he.x0+4;d<=he.x1-4;d+=12)for(let C of[-1,1])Rt.push(U(d,0,he.z+C*(he.hw+.4),.5,.35,.5,k(3.4,3.2,2.8)));for(let d=-3;d<=3;d++)Rt.push(U(he.x0+1,0,he.z+d*2.4,.5,.35,.5,k(.4,3.6,1)),U(he.x1-1,0,he.z+d*2.4,.5,.35,.5,k(3.6,.4,.4)));for(let d=he.x0+20;d<=he.x1-20;d+=16)for(let C of[-1,1])Rt.push(U(d,0,nt+C*4.6,.4,.3,.4,k(.5,1,4)));Rt.push(U(-262,32.5,-204,.8,.8,.8,k(.5,4,1.4)),U(-358,11.2,-204,116,.3,.2,k(.5,2.2,3.4))),qe(Rt);let dt=qe(Array.from({length:7},(d,C)=>U(he.x0-14-C*11,0,he.z,.9,.5,.9,k(5,5,5.5)))),Y=z?8:10,de=z?[7]:[7,8,9],ae=Qe([["body",[0,2.4,0],[2.6,2.6,21],"#f4f2fb"],["nose",[0,2.25,11.4],[2,2,1.8],"#f4f2fb"],["wing",[0,1.9,-.5],[21,.4,4.2],"#d8d4ea"],["stab",[0,3.3,-9.4],[8.2,.35,2.2],"#d8d4ea"],["fin",[0,5.5,-9],[.45,4.4,3.4],null],["engL",[-4.8,1.15,.6],[1.5,1.5,3.2],"#a8a4c4"],["engR",[4.8,1.15,.6],[1.5,1.5,3.2],"#a8a4c4"],["win",[0,2.95,.6],[2.66,.42,15],k(3,2.4,1.5),!0],["navL",[-10.5,1.95,-.5],[.5,.5,.5],k(5,.3,.3),!0],["navR",[10.5,1.95,-.5],[.5,.5,.5],k(.3,5,.9),!0],["strobe",[0,7.9,-10.4],[.45,.45,.45],k(6,6,6),!0],["bcn",[0,.95,1.5],[.6,.3,.6],k(5,.4,.3),!0]],Y),We=["#ff4f9e","#5fc8ff","#ffd23f","#8a3fe2","#2ee6a6"].map(t);for(let d=0;d<Y;d++)ae.paint("fin",d,We[d%We.length]);for(let d=0;d<5;d++)ae.set(d,-410+d*25,0,-234,0);let He=new sl([[-470,0,he.z],[-330,0,he.z],[-240,9,he.z],[-120,36,he.z],[10,62,he.z-14],[100,80,he.z-70],[80,96,he.z-170],[-80,104,he.z-200],[-420,104,he.z-200],[-700,94,he.z-170],[-820,74,he.z-90],[-770,44,he.z-10],[-660,22,he.z],[-560,6,he.z],[-500,0,he.z]].map(d=>new D(...d)),!0,"centripetal");He.arcLengthDivisions=800;let ct=He.getLength(),yt=[0,0],Dt=[0,0],Wt=[],zt=[],hn=-99;function Xt(d){let{c:C,g:L,tex:Z}=tt(560,200),le=rt=>{L.clearRect(0,0,560,200),L.fillStyle="rgba(6,24,52,.94)",I(L,6,6,548,150,40),L.fill(),L.beginPath(),L.moveTo(250,150),L.lineTo(280,194),L.lineTo(312,150),L.closePath(),L.fill(),L.strokeStyle="#5fc8ff",L.lineWidth=6,I(L,6,6,548,150,40),L.stroke(),L.save(),L.beginPath(),L.arc(84,81,50,0,Vi),L.clip(),rt?L.drawImage(rt,34,31,100,100):O(L,84,81,50,d.symbol,d.mint),L.restore(),L.textAlign="left",L.fillStyle="#5fc8ff",L.font="900 23px Inter, sans-serif",L.fillText("MIGRATED \xB7 TAKING OFF",156,58),L.fillStyle="#fff",L.font="900 42px Inter, sans-serif",L.fillText(Oe(L,"$"+d.symbol,370),156,104),L.fillStyle="rgba(200,230,255,.85)",L.font="700 22px Inter, sans-serif",L.fillText("graduated to PumpSwap",156,136),Z.needsUpdate=!0};le(null),S(d.iconUrl,le);let Pe=new _i(new ri({map:Z,transparent:!0,depthTest:!1}));return Pe.renderOrder=8,Pe.userData={kind:"coin",key:d.mint,coin:d},e.add(Pe),Pe}function Qn(d){!d||!d.mint||!d.symbol||Wt.some(C=>C.t.mint===d.mint)||zt.some(C=>C.mint===d.mint)||(zt.push(d),zt.length>6&&zt.shift())}let un=["#c8324a","#2f6fd8","#2fa86a","#e8902f","#1fa8b8","#e8e4f4","#8a2f6a","#d8b030"].map(t),T=[U(64,-1.2,-220,36,1.8,140,"#8a86a0")],q=[];for(let d of[-36,-8,18])for(let C of[-286,-262,-238,-214,-190,-166])for(let L=0;L<4;L++)for(let Z=0;Z<6;Z++){if(z&&(L+Z)%2)continue;let le=P()<.12?0:1+Math.floor(P()*P()*4.2);for(let Pe=0;Pe<le;Pe++)q.push(U(d+3.2+L*6.4,Pe*2.62,C+1.35+Z*2.7,6.05,2.58,2.5,oe(un)))}let $=89;for(let d of[-252,-186]){T.push(U($,-2.4,d,13,7,58,"#24306a"),U($,-.4,d,13.2,1.1,58.2,"#b02a40"),U($,-2.4,d+30.5,8,7,3,"#24306a"),U($,4.6,d-23,12,9,7,"#f0ecfa"),U($,13.6,d-26,3,4.5,3,"#c8324a"));for(let C=0;C<5;C++)for(let L=0;L<7;L++){let Z=1+Math.floor(P()*3);for(let le=0;le<Z;le++)q.push(U($+(C-2)*2.6,4.6+le*2.62,d-16+L*6.4,2.5,2.58,6.05,oe(un)))}}let ee=[-272,-238,-204,-170],Q=[],ze=[];for(let d of ee){for(let C of[66,78])for(let L of[-1,1])Q.push(U(C,.6,d+L*5,1.2,29,1.2,"#d8324a"));for(let C of[-1,1])Q.push(U(72,27.6,d+C*5,13.2,1.6,1.2,"#e8e4f4"));Q.push(U(82,29.6,d,50,1.8,3.6,"#e8e4f4"),U(63,31.4,d,6,3.2,5,"#d8324a"),U(66,31.4,d,1.2,12,1.2,"#d8324a"),U(86,37.15,d,41.8,.5,.5,"#e8e4f4",0,0,-.291)),ze.push(U(66,43.4,d,.7,.6,.7,k(5,.3,.3)),U(106.6,29.8,d,.6,.6,.6,k(5,.3,.3)))}let Je=[];for(let d of[-22,4,30])for(let C of[-266,-218,-170])T.push(U(d,0,C,1,24,1,"#8a84a8")),Je.push(U(d,24,C,3.4,.8,3.4,k(3.4,3,2.4)));n(T,!0),n(q),n(Q),qe(ze),qe(Je);let Ke=ee.length,et=d=>{let C=new rn(s(),new en(d?{color:d}:{}),Ke);return C.frustumCulled=!1,e.add(C),C},Mt=et("#3a3654"),gt=et("#1a1638"),wt=et("#ffd23f"),qt=et(null);for(let d=0;d<Ke;d++)qt.setColorAt(d,un[d*3%un.length]);let Gt=d=>d<.5?2*d*d:1-Math.pow(-2*d+2,2)/2;function _n(d){let C=$+2.6,L=70,Z=26,le=12.6,Pe=3.2;return d<3?[C,Z+(le-Z)*Gt(d/3),0]:d<4?[C,le,d>3.5]:d<7?[C,le+(Z-le)*Gt((d-4)/3),1]:d<10?[C+(L-C)*Gt((d-7)/3),Z,1]:d<13?[L,Z+(Pe-Z)*Gt((d-10)/3),1]:d<14?[L,Pe,d<13.5]:d<16?[L,Pe+(Z-Pe)*Gt((d-14)/2),0]:[L+(C-L)*Gt((d-16)/2),Z,0]}let Sn=K(Ze(50,60,-286,-154,4,.6,4)),Yt=6,_t=Qe([["cab",[0,1.3,2.7],[2.3,2,1.8],"#ffd23f"],["chas",[0,.55,-.6],[2.1,.5,6.8],"#3a3654"],["box",[0,2.1,-1.1],[2.5,2.58,6],null],["lt",[0,1.1,3.62],[1.8,.25,.1],k(4,3.8,3.2),!0]],Yt);for(let d=0;d<Yt;d++)_t.paint("box",d,un[(d*5+1)%un.length]);let Ms=Qe([["hull",[0,.5,0],[3.2,1.4,7.4],"#e8e4f4"],["cab",[0,1.9,-.6],[2.2,1.4,2.8],"#c8324a"],["lt",[0,2.8,-.6],[.4,.4,.4],k(4,3.6,2),!0]],2),Ct=nn.field,wn=[],Wi=[],ei=[],Ri=[],fn=64;for(let d=0;d<fn;d++){let C=(d+.5)/fn*Vi,L=Math.cos(C),Z=Math.sin(C),le=d%16===0||d%16===15;for(let Pe=0;Pe<7;Pe++){if(le&&Pe<5)continue;let rt=25+Pe*2.3,je=18+Pe*2.3,ot=Ct.x+L*rt,Pt=Ct.z+Z*je,te=Math.atan2(je*L,rt*Z),Se=Math.hypot(rt*Z,je*L)*Vi/fn+.3,Xe=Pe===6?13:1+Pe*1.5;if(wn.push(U(ot,0,Pt,Se,Xe,2.4,Pe===6?"#e8e4f4":Math.floor(d/4)%2?"#ff4f9e":"#3a5ae0",te)),Pe<6&&!le)for(let ht of z?[0]:[-.25,.25])Wi.push({x:ot+Math.cos(te)*Se*ht,y:Xe,z:Pt-Math.sin(te)*Se*ht,a:C})}}for(let[d,C]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let L=Ct.x+d*36,Z=Ct.z+C*28;ei.push(U(L,0,Z,1.4,36,1.4,"#c8c0e8")),Ri.push(U(L-d*.6,36,Z-C*.6,5,2.6,1.2,k(2.1,2.1,2),Math.atan2(-d,-C)));let le=new pt(new Xs(9,1,20,1,!0).translate(0,-.5,0),new Ut({color:new Ne(.8,.85,1),transparent:!0,opacity:.06,blending:mi,depthWrite:!1,side:Xn}));H.set(L,37,Z),X.set(Ct.x-d*6,0,Ct.z-C*4);let Pe=H.distanceTo(X);le.position.copy(H),le.scale.set(1,Pe,1),le.quaternion.setFromUnitVectors(pe,ie.subVectors(X,H).normalize()),st.add(le)}for(let d of[-1,1])ei.push(U(Ct.x+d*23.5,10,Ct.z,1,9,15,"#1a1638"));ei.push(U(Ct.x+41.2,13,Ct.z,1,13,24,"#1a1638")),n(wn,!0),n(ei),qe(Ri);let ti=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#ffffff","#8a3fe2","#ff8a4a"].map(t),Bn=new rn(s(),new en,Wi.length);Bn.frustumCulled=!1,e.add(Bn),Wi.forEach((d,C)=>Bn.setColorAt(C,ti[C%ti.length]));let yn=tt(1024,512),$e=yn.g,oi=yn.tex,Ss=null,ns=null,Ci=null,Js=-9,vr=new Ut({map:oi,toneMapped:!1,color:new Ne(1.25,1.25,1.25)}),pa=[];for(let d of[-1,1]){let C=new pt(new jn(14,7),vr);C.position.set(Ct.x+d*22.9,14.5,Ct.z),C.rotation.y=d>0?-Math.PI/2:Math.PI/2,e.add(C),pa.push(C)}let Xi=new pt(new jn(23,11.5),vr);Xi.position.set(Ct.x+41.8,19.5,Ct.z),Xi.rotation.y=Math.PI/2,e.add(Xi),Xi.userData={kind:"arena"};function qi(d,C,L,Z,le){$e.fillStyle="rgba(255,255,255,.06)",I($e,d,C,296,168,22),$e.fill(),$e.fillStyle=le,$e.fillRect(d+22,C+22,34,6),$e.fillStyle="rgba(220,214,255,.8)",$e.font="800 23px Inter, sans-serif",$e.textAlign="left",$e.fillText(L,d+22,C+60),$e.fillStyle="#fff",$e.font="900 76px Inter, sans-serif",$e.fillText(Z,d+20,C+140)}function Yi(){let d=Ss||{};$e.fillStyle="#07041a",$e.fillRect(0,0,1024,512);let C=$e.createLinearGradient(0,0,1024,0);C.addColorStop(0,"#2f3fe4"),C.addColorStop(.5,"#8a3fe2"),C.addColorStop(1,"#ff4f9e"),$e.fillStyle=C,$e.fillRect(0,0,1024,70),$e.fillStyle="#fff",$e.font="900 34px Inter, sans-serif",$e.textAlign="left",$e.fillText("VICE ARENA",30,47),$e.textAlign="right",$e.font="800 24px Inter, sans-serif",$e.fillText("\u25CF LIVE FROM PUMP.FUN",994,45),qi(24,96,"NEW COINS / MIN",d.perMin==null?"\u2014":String(d.perMin),"#ffd23f"),qi(364,96,"MIGRATED \xB7 YOU SAW",d.migrated==null?"\u2014":String(d.migrated),"#5fc8ff"),qi(704,96,"MOOD",d.mood==null?"\u2014":Math.round(d.mood*100)+"%",d.mood!=null&&d.mood>=.5?"#2ee6a6":"#ff4f9e");let L=d.hot;$e.fillStyle="rgba(255,255,255,.06)",I($e,24,290,976,196,26),$e.fill(),L?($e.save(),$e.beginPath(),$e.arc(124,388,74,0,Vi),$e.clip(),ns?$e.drawImage(ns,50,314,148,148):O($e,124,388,74,L.symbol,L.mint),$e.restore(),$e.textAlign="left",$e.fillStyle="#2ee6a6",$e.font="900 26px Inter, sans-serif",$e.fillText("#1 HOTTEST RIGHT NOW",226,352),$e.fillStyle="#fff",$e.font="900 78px Inter, sans-serif",$e.fillText(Oe($e,"$"+L.symbol,520),222,432),$e.textAlign="right",$e.fillStyle=(L.chg||0)>=0?"#2ee6a6":"#ff4f9e",$e.font="900 64px Inter, sans-serif",$e.fillText(L.chg==null?"":(L.chg>0?"+":"")+L.chg.toFixed(1)+"%",976,420),$e.fillStyle="rgba(220,214,255,.75)",$e.font="800 22px Inter, sans-serif",$e.fillText(L.tf?"in "+L.tf:"",976,458)):($e.textAlign="center",$e.fillStyle="rgba(255,255,255,.7)",$e.font="800 34px Inter, sans-serif",$e.fillText("Waiting for the trenches\u2026",512,400)),oi.needsUpdate=!0}Yi();function is(d){Ss=d;let C=d&&d.hot;C&&C.mint!==Ci&&(Ci=C.mint,ns=null,S(C.iconUrl,L=>{Ci===C.mint&&(ns=L,Yi())})),Xi.userData=C?{kind:"coin",key:C.mint,coin:C}:{kind:"arena"},performance.now()-Js>900&&(Js=performance.now(),Yi())}let ma=[];for(let d=0;d<9;d++){let C=-318+P()*88,L=196+P()*80;ma.push(U(C,0,L,.2,4,.2,"#f4f0ff"),U(C+.6,3.1,L,1.2,.8,.1,d%2?"#ff4f6e":"#ffd23f"))}ma.push(U(-240,0,188,14,5,9,"#f4f0ff"),U(-240,5,188,15,.8,10,"#3a5ae0")),n(ma,!0);for(let d=0;d<(z?8:18);d++)Ie(-324+P()*100,180+P()*100,.9+P()*.5);let Hn=nn.hwyX,St=nn.hwyZ,li=[],Ks=[],$s="#3a3654",ss="#8a84a8",ci="#c8c4dc",yi=z?-460:-640,rs=z?460:640;for(let d=yi;d<rs;d+=12)li.push(U(Hn,7,d+6,15,1,12.1,$s),U(Hn-7.3,8,d+6,.4,.9,12.1,ci),U(Hn+7.3,8,d+6,.4,.9,12.1,ci),U(Hn,8,d+6,.5,.7,12.1,ci));for(let d=yi+6;d<rs;d+=24)Math.abs(d-St)<9||(li.push(U(Hn,0,d,2.2,7,2.2,ss),U(Hn,6.2,d,12,.8,2.4,ss)),Le.push([Hn,d,1.7]));for(let d=yi+18;d<rs;d+=36)li.push(U(Hn,8,d,.3,6.5,.3,"#2a2648")),Ks.push(U(Hn,14.4,d,2.6,.3,.7,k(3.6,2.4,1.2)));for(let d=yi;d<140;d+=12)li.push(U(d+6,13,St,12.1,1,15,$s),U(d+6,14,St-7.3,12.1,.9,.4,ci),U(d+6,14,St+7.3,12.1,.9,.4,ci),U(d+6,14,St,12.1,.7,.5,ci));for(let d=yi+6;d<48;d+=24)Math.abs(d-Hn)<10||(li.push(U(d,0,St,2.2,13,2.2,ss),U(d,12.2,St,2.4,.8,12,ss)),Le.push([d,St,1.7]));for(let d=yi+18;d<140;d+=36)li.push(U(d,14,St,.3,6.5,.3,"#2a2648")),Ks.push(U(d,20.4,St,.7,.3,2.6,k(3.6,2.4,1.2)));li.push(U(155,6.75,St,32.5,1,15,$s,0,0,-.395),U(186,1.4,St,32,.12,12,"#2a2840"));for(let d of[56,92,128])li.push(U(d,-1,St,3,14,7,ss)),Le.push([d,St-2,2.4],[d,St+2,2.4]);let Mi=[72,108],yr=[];for(let d of Mi){for(let C of[-1,1])li.push(U(d,-1,St+C*8.6,2.4,55,2.4,"#e8e4f4"));li.push(U(d,11.4,St,2.4,1.6,19.6,"#e8e4f4"),U(d,40,St,2,1.4,19.6,"#e8e4f4"),U(d,52.6,St,2.4,1.6,19.6,"#e8e4f4")),Ks.push(U(d,54.2,St-8.6,.6,.6,.6,k(5,.3,.3)),U(d,54.2,St+8.6,.6,.6,.6,k(5,.3,.3)));for(let C of[-1,1])for(let L of[-1,1])for(let Z=1;Z<=4;Z++)yr.push([d,50-Z*1.8,St+C*8.6,d+L*Z*7.6,14.3,St+C*7.1])}Ks.push(U(94,13.15,St-7.7,92,.25,.25,k(.5,2.2,3.6)),U(94,13.15,St+7.7,92,.25,.25,k(.5,2.2,3.6)),U(94,12.7,St,92,.22,10,k(2.6,.5,1.8))),n(li),qe(Ks);let hi=new rn(s(),new Ut({color:new Ne(1.5,1.45,1.8),toneMapped:!1}),yr.length);hi.frustumCulled=!1,yr.forEach(([d,C,L,Z,le,Pe],rt)=>{H.set(d,C,L),X.set(Z,le,Pe);let je=H.distanceTo(X);w.setFromUnitVectors(se,ie.subVectors(X,H).normalize()),N.compose(y.addVectors(H,X).multiplyScalar(.5),w,J.set(.16,.16,je)),hi.setMatrixAt(rt,N)}),st.add(hi);let wl=K([[Hn+3.4,8,yi-12],[Hn+3.4,8,rs+12],[Hn-3.4,8,rs+12],[Hn-3.4,8,yi-12]]),Et=K([[yi-12,14,St+3.4],[140,14,St+3.4],[170,1.55,St+3.4],[198,1.55,St+3.4],[201.4,1.55,St],[198,1.55,St-3.4],[170,1.55,St-3.4],[140,14,St-3.4],[yi-12,14,St-3.4]]),Pi=z?30:64,ga=z?24:50,Mr=Pi+ga,Sr=Qe([["body",[0,.75,0],[1.9,1.1,4.2],null],["cab",[0,1.55,-.3],[1.6,.6,2.1],"#1a1638"],["head",[0,.75,2.12],[1.5,.22,.1],k(4.5,4.2,3.6),!0],["tail",[0,.8,-2.12],[1.5,.22,.1],k(3.4,.2,.3),!0]],Mr),xa=[];for(let d=0;d<Mr;d++){let C=d<Pi,L=C?wl:Et,Z=C?Pi:ga,le=C?d:d-Pi,Pe=P()<.16;xa.push({pa:L,d:(le+P()*.45)/Z*L.len,sc:Pe?1.5:1,sp:C?24:20}),Sr.paint("body",d,oe(Pe?[t("#ffd23f"),t("#f4f0ff"),t("#2ee6a6")]:j))}let Zn=nn.metro,In=Zn.y,Tn=K(Ze(Zn.x0,Zn.x1,Zn.z0,Zn.z1,Zn.r,In,6)),$t=[],Si=[];for(let d=0;d<Tn.len;d+=6){Ht(Tn,d+3);let C=Math.cos(ve.yaw),L=Math.sin(ve.yaw);$t.push(U(ve.x,In-1,ve.z,7.8,.9,6.4,"#5a5480",ve.yaw));for(let Z of[-2.65,-1.15,1.15,2.65])$t.push(U(ve.x+Z*C,In-.1,ve.z-Z*L,.22,.22,6.4,"#c8c4dc",ve.yaw));Si.push(U(ve.x+3.95*C,In-.95,ve.z-3.95*L,.18,.26,6.4,k(3.2,.5,2),ve.yaw),U(ve.x-3.95*C,In-.95,ve.z+3.95*L,.18,.26,6.4,k(.5,2.2,3.4),ve.yaw))}for(let d=0;d<Tn.len;d+=18)Ht(Tn,d),!(ve.x>60&&Math.abs(ve.z-h)<7)&&($t.push(U(ve.x,0,ve.z,1.6,In-1.8,1.6,"#8a84a8",ve.yaw),U(ve.x,In-2,ve.z,7,1,1.8,"#8a84a8",ve.yaw)),Le.push([ve.x,ve.z,1.3]));let _a=[k(3.4,.5,1.8),k(.5,2.2,3.4),k(3.4,2.6,.5),k(2.2,.6,3.4)];[[-11,Zn.z0,Math.PI/2],[Zn.x1,-20,0],[-11,Zn.z1,Math.PI/2],[Zn.x0,0,0]].forEach(([d,C,L],Z)=>{let le=Math.cos(L),Pe=Math.sin(L);for(let rt of[-5.6,5.6])$t.push(U(d+rt*le,In-1.2,C-rt*Pe,3.4,1.2,26,"#bdb6e0",L));$t.push(U(d,In+3.4,C,14.6,.5,24,"#8f86b8",L));for(let rt of[-6.6,6.6])for(let je of[-10,0,10])$t.push(U(d+rt*le+je*Pe,In,C-rt*Pe+je*le,.3,3.4,.3,"#8a84a8",L));for(let rt of[-7.3,7.3])Si.push(U(d+rt*le,In+3.4,C-rt*Pe,.25,.5,24,_a[Z],L))}),n($t),qe(Si);let Ii=5,Ln=Qe([["body",[0,1.7,0],[2.8,2.6,7.2],"#e8e6f4"],["roof",[0,3.15,0],[2.4,.4,6.8],"#a8a4c4"],["win",[0,2.15,0],[2.9,.7,6.4],k(2.6,2.1,1.5),!0],["stripe",[0,1.05,0],[2.9,.28,7],null,!0]],Ii*2);for(let d=0;d<Ii*2;d++)Ln.paint("stripe",d,d<Ii?k(3.4,.5,1.8):k(.5,2.2,3.4));let On=nn.isle,Zi=[],Er=[],an=[];for(let d=-On.r+1;d<On.r;d+=2){let C=Math.sqrt(On.r*On.r-d*d);Zi.push(U(On.x,-1.4,On.z+d,C*2,2.2,2.05,"#e8cc98")),C>6&&Zi.push(U(On.x-.5,.8,On.z+d,(C-4.5)*2,.6,2.05,"#2fa86a"))}for(let d=0;d<8;d++){let C=d/8*Vi+.3,L=On.x+Math.cos(C)*25,Z=On.z+Math.sin(C)*24;if(L<On.x-12&&Math.abs(Z-St)<16)continue;let le=oe(lt),Pe=Math.PI/2-C;Er.push(U(L,1.4,Z,11,3.6,8,"#f4f2fb",Pe),U(L-Math.cos(C)*1.2,5,Z-Math.sin(C)*1.2,7,3.2,6,le,Pe)),Be.push(U(L+Math.cos(C)*7.5,1.42,Z+Math.sin(C)*7.5,6,.16,3,k(.16,.9,1.3),Pe)),Ye(L+Math.cos(C+1.1)*8,Z+Math.sin(C+1.1)*8,.9,1.4),z||Ye(L+Math.cos(C-1.1)*8,Z+Math.sin(C-1.1)*8,.8,1.4)}for(let d of[-.7,0,.7]){let C=Math.PI/2-d,L=On.x+Math.cos(d)*45,Z=On.z+Math.sin(d)*45,le=-Math.sin(d)*3.2,Pe=Math.cos(d)*3.2;Zi.push(U(L,-.2,Z,2.2,.6,12,"#9a6a48",C)),an.push(U(L+le,-.4,Z+Pe,2.8,1.8,9,"#f4f2fb",C),U(L+le,1.4,Z+Pe,2,1.2,4.4,"#2a2648",C))}for(let[d,C,L]of[[246,-30,7],[236,-152,9],[178,236,6]]){for(let Z=-L+1;Z<L;Z+=2){let le=Math.sqrt(L*L-Z*Z);Zi.push(U(d,-1.4,C+Z,le*2,2.1,2.05,"#e8cc98"))}Ye(d+1,C,.9,.7),L>7&&Ye(d-2,C+2,.7,.7)}n(Zi),n(Er,!0),n(an);let dn=new zn;e.add(dn);let va=[U(0,-3,0,16,9,90,"#f4f2fb"),U(0,1.8,0,16.2,.8,90.2,"#2f3fe4"),U(0,-3,47,11,9,5,"#f4f2fb"),U(0,-3,51,6,8.6,3,"#f4f2fb")];for(let d=0;d<6;d++)va.push(U(0,6+d*2.8,-5-d*2,14.4-d*1.3,2.8,72-d*9,d%2?"#e8e6f4":"#fbfaff"));va.push(U(0,22.8,-26,5,8,7,"#c8324a"),U(0,22.8,18,11,2.6,6,"#e8e6f4")),it(va,dn);let ya=[U(0,30.8,-26,5.2,.5,7.2,k(3.4,1,.6))];for(let d=0;d<6;d++){let C=14.4-d*1.3,L=72-d*9,Z=-5-d*2,le=6+d*2.8;for(let Pe of[-1,1])ya.push(U(Pe*(C/2+.06),le+1,Z,.1,.55,L-3,k(2.6,2,1.3)),U(Pe*(C/2+.1),le+2.6,Z,.18,.18,L,d%2?k(3.2,.5,1.8):k(.5,2.2,3.4)))}for(let d of[-1,1])ya.push(U(d*8.06,-.6,0,.1,.5,84,k(2.4,1.9,1.2)));qe(ya,dn);let Es=0,bs=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#ff8a4a","#c8a8ff","#f4f0ff"].map(t),js=[];for(let d=-o+12.8;d<o-4;d+=9)for(let C of[58.4,64.4]){if(Math.abs(d-h)<7||Math.abs(d+40)<6||Math.abs(d-52)<6||P()<.3)continue;let L=d+(P()-.5)*1.5,Z=oe(bs);js.push(U(C,0,L,.2,2.8,.2,"#f4f0ff"),U(C,2.6,L,2.8,.3,2.8,Z),U(C,2.9,L,1.5,.3,1.5,Z),U(C+1.7,0,L+.3,1.1,.06,2.1,oe(bs)))}for(let d of[-57.5,-21.5,14.5,59.5]){let L=oe(lt);for(let Z of[-.9,.9])for(let le of[-.9,.9])js.push(U(66.6+Z,0,d+le,.3,2.8,.3,"#f4f0ff"));js.push(U(66.6,2.8,d,2.6,2,2.6,L),U(66.6,4.8,d,3.2,.3,3.2,"#ff4f6e"),U(66.6+1.3,4.8,d,.12,2.4,.12,"#f4f0ff"),U(66.6+1.8,6.5,d,1,.6,.08,"#ff4f6e"))}for(let d of[-40,52])js.push(U(62,0,d-4,.2,2.6,.2,"#f4f0ff"),U(62,0,d+4,.2,2.6,.2,"#f4f0ff"),U(62,1.8,d,.06,.8,8,"#e8e4f4"));n(js);let as=Qe([["hull",[0,.45,0],[1.1,.6,2.6],null],["seat",[0,.9,-.3],[.6,.35,1.2],"#1a1638"],["rider",[0,1.5,-.1],[.5,.9,.4],null],["head",[0,2.15,-.1],[.36,.36,.36],"#f0c9a0"]],4),Qs=[[150,-48,12,18,.32,0],[158,-30,10,14,.38,2],[150,44,13,16,.3,4],[160,62,9,12,.36,1]];Qs.forEach((d,C)=>{as.paint("hull",C,oe(bs)),as.paint("rider",C,oe(bs))});let ws=Qe([["hull",[0,.5,0],[2.4,1.2,6.6],"#f4f2fb"],["cab",[0,1.5,-.6],[1.8,1,2.2],"#2a2648"]],1),Ts=Qe([["c1",[-2.6,-.5,0],[2.4,.4,2.6],"#ff4f9e"],["c2",[0,0,0],[3,.4,2.6],"#ffd23f"],["c3",[2.6,-.5,0],[2.4,.4,2.6],"#5fc8ff"],["man",[0,-4.6,0],[.5,1,.4],"#2a2648"]],1),er=new rn(s(),new Ut({color:new Ne(.8,.8,.9)}),2);er.frustumCulled=!1,e.add(er);let As=[];{for(let C=0;C<=16;C++){let L=-300+C/16*360;As.push([88,30,L])}for(let C=1;C<16;C++){let L=Math.PI-C/16*Math.PI;As.push([128+Math.cos(L)*40,30,60+Math.sin(L)*40])}for(let C=0;C<=16;C++)As.push([168,30,60-C/16*360]);for(let C=1;C<16;C++){let L=-C/16*Math.PI;As.push([128+Math.cos(L)*40,30,-300+Math.sin(L)*40])}}let br=K(As),wr=Qe([["body",[0,0,0],[1,1,6.4],"#f4f2fb"],["wing",[0,.3,.6],[10,.22,1.5],"#ff4f9e"],["stab",[0,.5,-2.9],[3,.18,.9],"#ff4f9e"],["fin",[0,1.1,-2.9],[.16,1.3,1],"#ff4f9e"],["prop",[0,0,3.3],[1.8,1.8,.06],k(.5,.5,.6),!0],["nav",[0,-.6,0],[.3,.3,.3],k(5,.4,.4),!0]],1),Tr=tt(1024,236),Rs=Tr.tex,eo=new Ut({map:Rs,toneMapped:!1,color:new Ne(1.15,1.15,1.15)}),Li=new pt(new jn(26,6),eo),Cs=new pt(new jn(26,6),eo);e.add(Li),e.add(Cs);let Nt=null,pn=null;function Zt(){let d=Tr.g,C=Nt;if(d.fillStyle="#ff4f9e",d.fillRect(0,0,1024,236),d.fillStyle="#fff6fb",d.fillRect(10,10,1004,216),!C){d.fillStyle="#2a1270",d.font="900 92px Inter, sans-serif",d.textAlign="center",d.fillText("VICE \xB7 THE TRENCHES",512,150),Rs.needsUpdate=!0;return}d.save(),d.beginPath(),d.arc(118,118,88,0,Vi),d.clip(),pn?d.drawImage(pn,30,30,176,176):O(d,118,118,88,C.symbol,C.mint),d.restore(),d.textAlign="left",d.fillStyle="#ff2f8e",d.font="900 34px Inter, sans-serif",d.fillText("#1 TRENDING ON PUMP.FUN",232,68),d.fillStyle="#1a0a50",d.font="900 112px Inter, sans-serif",d.fillText(Oe(d,"$"+C.symbol,540),226,186),d.textAlign="right",d.fillStyle=(C.chg||0)>=0?"#10a070":"#e0306a",d.font="900 64px Inter, sans-serif",d.fillText(C.chg==null?"":(C.chg>0?"+":"")+C.chg.toFixed(0)+"%",1e3,120),d.fillStyle="#5a4a90",d.font="800 28px Inter, sans-serif",d.fillText(C.tf?"in "+C.tf:"",1e3,172),Rs.needsUpdate=!0}Zt();function on(d){if(!d)return;let C=Nt&&Nt.mint===d.mint;C&&Nt.chg===d.chg||(Nt=d,Li.userData=Cs.userData={kind:"coin",key:d.mint,coin:d},C||(pn=null,S(d.iconUrl,L=>{Nt&&Nt.mint===d.mint&&(pn=L,Zt())})),Zt())}let Ui=er,ni=tt(256,256),xt=ni.g;{let d=xt.createRadialGradient(128,128,6,128,128,128);d.addColorStop(0,"rgba(255,244,252,1)"),d.addColorStop(.33,"rgba(255,232,248,1)"),d.addColorStop(.37,"rgba(255,170,224,.42)"),d.addColorStop(.6,"rgba(190,120,255,.14)"),d.addColorStop(1,"rgba(120,80,255,0)"),xt.fillStyle=d,xt.fillRect(0,0,256,256);for(let[C,L,Z]of[[112,108,9],[146,134,7],[118,150,5],[140,100,4]])xt.fillStyle="rgba(232,196,236,.5)",xt.beginPath(),xt.arc(C,L,Z,0,Vi),xt.fill();ni.tex.needsUpdate=!0}let Ps=new _i(new ri({map:ni.tex,transparent:!0,depthWrite:!1,toneMapped:!1,color:new Ne(1.7,1.6,1.7)}));Ps.position.copy(Ce(.82,.3,-.49).normalize().multiplyScalar(2100)),Ps.scale.setScalar(360),Ps.renderOrder=-1,e.add(Ps);let ui=[],Ma=["#6a4a9a","#7a5aa8","#5a3a8a","#8a6ab8"].map(t);for(let d=0;d<(z?8:18);d++){let C=P()*Vi,L=280+P()*700,Z=Math.cos(C)*L,le=Math.sin(C)*L,Pe=160+P()*90,rt=7+Math.floor(P()*6);for(let je=0;je<rt;je++)ui.push({x:Z+(P()-.5)*40,y:Pe+(P()-.5)*6,z:le+(P()-.5)*22,w:10+P()*14,h:3+P()*3,d:8+P()*10,c:oe(Ma)})}let Is=new rn(s(),new en({emissive:new Ne("#2a1450"),transparent:!0,opacity:.6,depthWrite:!1}),ui.length);Is.frustumCulled=!1,e.add(Is),ui.forEach((d,C)=>Is.setColorAt(C,d.c));let Ei=new pt(s(),new Ut({color:new Ne(4,3.8,4.4),toneMapped:!1,transparent:!0,opacity:0,depthWrite:!1}));e.add(Ei);let tr=6,nr=0,bi=new D,Di=new D,Sa=d=>-o+d*a-2,to=[],Ea=[],Ls=[];for(let d=1;d<c;d++)for(let C=1;C<=c;C++){let L=Sa(d),Z=Sa(C);L>l-3||(to.push(U(L+2.5,0,Z+2.5,.26,6,.26,"#2a2648"),U(L+1.9,5.85,Z+1.9,1.5,.16,.16,"#2a2648",-Math.PI/4),U(L-2.5,0,Z-2.5,.22,4.4,.22,"#1a1830"),U(L-2.5,4.2,Z-2.5,.7,1.1,.7,"#141226")),Ea.push(U(L+1.35,5.62,Z+1.35,.9,.24,.9,k(3.6,2.4,1.2))),Ls.push([L-2.5,Z-2.5,P()*10]))}let Ar=[];for(let d of u)d.big&&Ar.push(U(d.x+d.w/2-.4,d.y,d.z+d.d/2-.4,.45,.45,.45,k(4,.3,.35)),U(d.x-d.w/2+.4,d.y,d.z-d.d/2+.4,.45,.45,.45,k(4,.3,.35)));for(let[d,C,L]of p)Ar.push(U(d,C,L,.5,.5,.5,k(4,.3,.35)));let x=u.filter(d=>!d.big&&d.y>=8&&d.x<l-14),b=[],R=[];for(let d=0;d<Math.min(z?18:40,x.length);d++){let C=x[Math.floor(P()*x.length)],L=P()<.5?1:-1,Z=3+P()*4,le=2.4+P()*2;P()<.5?b.push(U(C.x+L*(C.w/2+.3),le,C.z+(P()-.5)*(C.d-3),.3,Z,1,oe(kt))):b.push(U(C.x+(P()-.5)*(C.w-3),le,C.z+L*(C.d/2+.3),1,Z,.3,oe(kt)))}for(let d of x)if(P()<.12){let C=d.x+(P()-.5)*(d.w-4),L=d.z+(P()-.5)*(d.d-4);for(let Z of[-.8,.8])for(let le of[-.8,.8])R.push(U(C+Z,d.y,L+le,.25,1.6,.25,"#5a3a28"));R.push(U(C,d.y+1.6,L,2.4,2.6,2.4,"#8a5a3a"),U(C,d.y+4.2,L,1.6,.6,1.6,"#6a4630"))}n(to),n(R),qe(Ea);let G=qe(Ls.map(([d,C])=>U(d,5.3,C,.55,.14,.55,k(.3,3,1))),e),ne=qe(Ar,e),V=qe(b),E=b.map(d=>d.c.clone());qe(Be);let W=m.x,re=m.z,Ue=W-1.6,Lt=re+1.6,bt=W+4.6,It=re-4.6,Un=22,jt=66,mn=[U(W,0,re,13.4,.1,13.4,"#6a5040")];for(let d of[-1,1])mn.push(U(W+d*6.7,0,re,.15,1.4,13.4,"#ff8a3a"),U(W,0,re+d*6.7,13.4,1.4,.15,"#ff8a3a"));for(let d=0;d<3;d++)mn.push(U(bt-.2,d*.7,re+4.4,3,.6,3,"#a8a2c4"));mn.push(U(bt,0,It,1.6,jt,1.6,"#ffd23f"));for(let d=4;d<jt;d+=4)mn.push(U(bt,d,It,1.8,.3,1.8,"#e0b020"));n(mn);let vn=[];for(let d=0;d<Un;d++){let C=d*2.6;vn.push(U(Ue,C+2.1,Lt,9.4,.5,9.4,"#b8b2d4"),U(Ue,C,Lt,3,2.1,3,"#9a94b8"));for(let L of[-1,1])for(let Z of[-1,1])vn.push(U(Ue+L*4.2,C,Lt+Z*4.2,.5,2.1,.5,"#8a84a8"))}let kn=n(vn,!1,!1),En=3,Us=0,Rr=0,Cr=-1;kn.count=En*6;let Tl=new pt(s(),new Ut({color:new Ne(4,3.4,2.2),toneMapped:!1}));Tl.scale.set(9.6,.25,.25),e.add(Tl);let ba=new zn;ba.position.set(bt,jt,It),e.add(ba);let Al=new en({color:"#ffd23f"}),gh=new en({color:"#8a84a8"}),Rl=new en({color:"#2a2648"}),os=(d,C,L,Z,le,Pe,rt)=>{let je=new pt(s(),d);return je.scale.set(C,L,Z),je.position.set(le,Pe,rt),ba.add(je),je};os(Al,30,1.2,1.2,9,1.2,0),os(Al,9,1,1,-8.5,1.2,0),os(gh,3,2.6,2.4,-11.5,.6,0),os(Rl,2.4,2.4,2.4,0,-.6,1.6),os(Al,.8,6,.8,0,4.2,0);let Lf=os(Rl,1.6,.7,1.6,10,.3,0),xh=os(Rl,.12,1,.12,10,-5,0),Uf=os(gh,1.2,.8,1.2,10,-10,0),_h=os(new en({color:"#b8b2d4"}),3,.6,3,10,-11,0),no=new pt(s(),new Ut({color:new Ne(5,.3,.3),toneMapped:!1}));no.scale.setScalar(.5),no.position.set(23.8,1.9,0),ba.add(no);let vh=(d,C)=>Math.atan2(-(C-It),d-bt),io=[bt-.2,re+4.4],so=vh(io[0],io[1]),ro=Math.hypot(io[0]-bt,io[1]-It),Pr=vh(Ue,Lt),Ir=Math.hypot(Ue-bt,Lt-It),Cl=tt(512,220),yh=-9,Pl=new _i(new ri({map:Cl.tex,transparent:!0}));Pl.position.set(W+3.8,8.5,re+4.6),Pl.scale.set(7.6,3.25,1),e.add(Pl);function ao(){let d=Cl.g;d.clearRect(0,0,512,220),d.fillStyle="rgba(10,5,32,.92)",I(d,6,6,500,208,28),d.fill(),d.strokeStyle="#ffd23f",d.lineWidth=5,I(d,6,6,500,208,28),d.stroke(),d.textAlign="center",d.fillStyle="#ffd23f",d.font="900 24px Inter, sans-serif",d.fillText(Cr>=0?"TOPPED OUT \xB7 A NEW ONE STARTS":"VICE TOWER \xB7 1 FLOOR PER LAUNCH",256,54),d.fillStyle="#fff",d.font="900 76px Inter, sans-serif",d.fillText(Rr.toLocaleString("en-US"),256,138),d.fillStyle="rgba(220,214,255,.85)",d.font="800 22px Inter, sans-serif",d.fillText("pump.fun launches since you arrived",256,182),Cl.tex.needsUpdate=!0}ao();function Df(){Us++,Rr++,performance.now()-yh>700&&(yh=performance.now(),ao())}let Nf=f.position,Mh=0,Il=0,Sh=0,Ll=!1;function Ff(d,C){ae.by.strobe.m.material.color.setScalar(Math.sin(C*9)>.7?1:.04),ae.by.bcn.m.material.color.setScalar(Math.sin(C*3.1)>.2?1:.05);for(let te=0;te<2;te++){let Se=Math.min(.99999,Math.max(0,((C*34/ct+te*.5)%1+1)%1));He.getPointAt(Se,H),He.getTangentAt(Se,X);let Xe=Math.atan2(X.x,X.z),ht=-Math.asin(Math.max(-1,Math.min(1,X.y))),Tt=Xe-yt[te];Tt=Math.atan2(Math.sin(Tt),Math.cos(Tt)),yt[te]=Xe,Dt[te]+=(Math.max(-.6,Math.min(.6,-Tt/Math.max(d,.001)*.9))-Dt[te])*Math.min(1,d*3),ae.set(5+te,H.x,Math.max(0,H.y),H.z,Xe,ht,Dt[te])}if(zt.length&&C-hn>7){let te=de.find(Se=>!Wt.some(Xe=>Xe.slot===Se));if(te!=null){let Se=zt.shift();Wt.push({t:Se,slot:te,s:0,v:0,sp:Xt(Se)}),hn=C}}for(let te=Wt.length-1;te>=0;te--){let Se=Wt[te];Se.v=Math.min(62,Se.v+6.5*d),Se.s+=Se.v*d;let Xe=Math.max(0,Se.s-170),ht=he.x0+22+Se.s,Tt=Math.min(320,Xe*.22);ae.set(Se.slot,ht,Tt,he.z,Math.PI/2,-Math.min(.21,Xe*.006)),Se.sp.position.set(ht,Tt+10,he.z);let ln=Math.max(.42,Math.min(3.2,Nf.distanceTo(Se.sp.position)/90));Se.sp.scale.set(10.8*ln,3.86*ln,1),ht>1150&&(ae.hide(Se.slot),e.remove(Se.sp),Se.sp.material.map.dispose(),Se.sp.material.dispose(),Wt.splice(te,1))}ae.flush();{let te=Math.floor(C*14)%9;for(let Se=0;Se<7;Se++)dt.setColorAt(Se,be.setScalar(Se===6-te?6:.04));dt.instanceColor.needsUpdate=!0}for(let te=0;te<Ke;te++){let Se=ee[te],[Xe,ht,Tt]=_n((C+te*4.5)%18);N.compose(y.set(Xe,28.8,Se),w.identity(),J.set(3.4,1.6,4.4)),Mt.setMatrixAt(te,N);let ln=28,ii=ht+.5;N.compose(y.set(Xe,(ln+ii)/2,Se),w,J.set(.14,Math.max(.01,ln-ii),.14)),gt.setMatrixAt(te,N),N.compose(y.set(Xe,ht+.25,Se),w,J.set(2.9,.5,6.3)),wt.setMatrixAt(te,N),Tt?N.compose(y.set(Xe,ht-1.29,Se),w,J.set(2.5,2.58,6.05)):N.copy(Ee),qt.setMatrixAt(te,N)}Mt.instanceMatrix.needsUpdate=gt.instanceMatrix.needsUpdate=wt.instanceMatrix.needsUpdate=qt.instanceMatrix.needsUpdate=!0;for(let te=0;te<Yt;te++)Ht(Sn,C*8+te/Yt*Sn.len),_t.set(te,ve.x,.6,ve.z,ve.yaw);_t.flush();for(let te=0;te<2;te++){let Se=C*.09+te*Math.PI,Xe=124+Math.cos(Se)*14,ht=-220+Math.sin(Se)*52,Tt=Math.atan2(-Math.sin(Se)*14,Math.cos(Se)*52);Ms.set(te,Xe,.1+Math.sin(C*1.6+te)*.12,ht,Tt),Math.random()<d*6&&_(y.set(Xe-Math.sin(Tt)*3.6,.5,ht-Math.cos(Tt)*3.6),ie.set((Math.random()-.5)*1.4,.6,(Math.random()-.5)*1.4),[2.2,2.4,2.8],1,.3,2.5)}Ms.flush();for(let te=0;te<Mr;te++){let Se=xa[te];Se.d+=Se.sp*d,Ht(Se.pa,Se.d),Sr.set(te,ve.x,ve.y,ve.z,ve.yaw,ve.pitch,0,Se.sc)}Sr.flush();{let te=C*15,Se=-C*15+Tn.len/2;for(let Xe=0;Xe<Ii;Xe++){Ht(Tn,te-Xe*7.7);let ht=Math.cos(ve.yaw),Tt=Math.sin(ve.yaw);Ln.set(Xe,ve.x+1.9*ht,In-.1,ve.z-1.9*Tt,ve.yaw),Ht(Tn,Se+Xe*7.7),ht=Math.cos(ve.yaw),Tt=Math.sin(ve.yaw),Ln.set(Ii+Xe,ve.x-1.9*ht,In-.1,ve.z+1.9*Tt,ve.yaw+Math.PI)}Ln.flush()}Qs.forEach(([te,Se,Xe,ht,Tt,ln],ii)=>{let ls=C*Tt+ln,wa=te+Xe*Math.sin(ls),Ta=Se+ht*Math.sin(2*ls),oo=Xe*Tt*Math.cos(ls),Of=2*ht*Tt*Math.cos(2*ls),Ul=Math.atan2(oo,Of);as.set(ii,wa,.1+Math.abs(Math.sin(C*5+ii))*.12,Ta,Ul,-.05,Math.max(-.4,Math.min(.4,-Math.sin(2*ls)*.4))),Math.random()<d*12&&_(y.set(wa-Math.sin(Ul)*1.4,.45,Ta-Math.cos(Ul)*1.4),ie.set((Math.random()-.5)*1.6,.9+Math.random()*.6,(Math.random()-.5)*1.6),[2.4,2.6,3],.8,.26,2.6)}),as.flush();{let te=C*.06,Se=186+Math.sin(te)*10,Xe=-10+Math.sin(te*2)*70,ht=Math.cos(te)*10,Tt=Math.cos(te*2)*140,ln=Math.atan2(ht,Tt),ii=Math.sin(ln),ls=Math.cos(ln);ws.set(0,Se,.1,Xe,ln),ws.flush();let wa=Se-ii*26,Ta=24+Math.sin(C*.7)*1.2,oo=Xe-ls*26;Ts.set(0,wa,Ta,oo,ln,0,Math.sin(C*.9)*.08),Ts.flush(),H.set(Se-ii*3,1.4,Xe-ls*3),X.set(wa,Ta-4,oo),w.setFromUnitVectors(se,ie.subVectors(X,H).normalize()),N.compose(y.addVectors(H,X).multiplyScalar(.5),w,J.set(.07,.07,H.distanceTo(X))),er.setMatrixAt(0,N),Math.random()<d*8&&_(y.set(Se-ii*3.4,.5,Xe-ls*3.4),ie.set((Math.random()-.5)*1.4,.7,(Math.random()-.5)*1.4),[2.2,2.4,2.8],1,.3,2.5)}{let te=C*16;Ht(br,te);let Se=ve.x,Xe=ve.z,ht=ve.yaw;wr.set(0,Se,30+Math.sin(C*.8)*.6,Xe,ht,0,0),wr.flush(),Ht(br,te-27,Fe);let Tt=29.4+Math.sin(C*.8-.4)*.6;Li.position.set(Fe.x,Tt,Fe.z),Li.rotation.set(0,Fe.yaw-Math.PI/2,Math.sin(C*2.2)*.03),Cs.position.copy(Li.position),Cs.rotation.set(0,Fe.yaw+Math.PI/2,-Math.sin(C*2.2)*.03),Ht(br,te-14,Fe),H.set(Se-Math.sin(ht)*3.2,30,Xe-Math.cos(ht)*3.2),X.set(Fe.x,Tt+.4,Fe.z),w.setFromUnitVectors(se,ie.subVectors(X,H).normalize()),N.compose(y.addVectors(H,X).multiplyScalar(.5),w,J.set(.06,.06,H.distanceTo(X))),Ui.setMatrixAt(1,N),Ui.instanceMatrix.needsUpdate=!0}{let te=-26*Math.sin(Es),Se=420*Math.cos(Es);Es+=d*6/Math.max(1,Math.hypot(te,Se));let Xe=300+26*Math.cos(Es),ht=420*Math.sin(Es),Tt=Math.atan2(te,Se);dn.position.set(Xe,Math.sin(C*.5)*.15,ht),dn.rotation.y=Tt,Math.random()<d*10&&_(y.set(Xe-Math.sin(Tt)*46+(Math.random()-.5)*8,.6,ht-Math.cos(Tt)*46),ie.set((Math.random()-.5)*2,.8,(Math.random()-.5)*2),[2.2,2.4,2.8],1.4,.45,2)}if((Mh=(Mh+1)%2)===0){let te=C*2.1;Wi.forEach((Se,Xe)=>{let ht=Math.max(0,Math.sin(Se.a*2-te))**6*.9;N.compose(y.set(Se.x,Se.y+.5+ht,Se.z),w.identity(),J.set(.55,.9,.55)),Bn.setMatrixAt(Xe,N)}),Bn.instanceMatrix.needsUpdate=!0}for(let te=0;te<Ls.length;te++){let Se=(C+Ls[te][2])%10;G.setColorAt(te,Se<4.2?be.setRGB(.3,3.4,1.1):Se<5?be.setRGB(3.6,2.4,.3):be.setRGB(3.6,.3,.35))}G.instanceColor.needsUpdate=!0,ne.material.color.setScalar(Math.sin(C*2.6)>.35?1:.07);for(let te=0;te<b.length;te+=5){let Se=(C*1.7+te*.37)%7,Xe=Se>3.1&&Se<3.2||Se>3.35&&Se<3.5?.15:1;V.setColorAt(te,be.copy(E[te]).multiplyScalar(Xe))}V.instanceColor.needsUpdate=!0;for(let te=0;te<ut;te++){let[Se,Xe,ht]=Ae[te];for(let Tt=0;Tt<vt;Tt++){let ln=(C*.15+Tt/vt+te*.37)%1,ii=(.9+ln*3.4)*(ln>.85?(1-ln)/.15:1);N.compose(y.set(Se+ln*8,Xe+.8+ln*16,ht+ln*2.5),w.setFromEuler(ce.set(ln*2,te+ln,0)),J.setScalar(Math.max(.01,ii))),mt.setMatrixAt(te*vt+Tt,N)}}if(mt.instanceMatrix.needsUpdate=!0,ui.forEach((te,Se)=>{te.x+=d*3,te.x>1e3&&(te.x-=2e3),N.compose(y.set(te.x,te.y,te.z),w.identity(),J.set(te.w,te.h,te.d)),Is.setMatrixAt(Se,N)}),Is.instanceMatrix.needsUpdate=!0,tr-=d,tr<=0){tr=9+Math.random()*12,nr=1;let te=Math.random()*Vi;Di.set(Math.cos(te)*1500,420+Math.random()*200,Math.sin(te)*1500),bi.set(Math.cos(te+2)*900,-160,Math.sin(te+2)*900)}for(nr>0?(nr=Math.max(0,nr-d*1.6),Di.addScaledVector(bi,d),Ei.position.copy(Di),w.setFromUnitVectors(se,ie.copy(bi).normalize()),Ei.quaternion.copy(w),Ei.scale.set(1.4,1.4,70),Ei.material.opacity=nr,Ei.visible=!0):Ei.visible=!1,Il+=d*(z?14:30);Il>=1;)Il--,_(y.set(me.x+(Math.random()-.5)*.4,2.2,me.z+(Math.random()-.5)*.4),ie.set((Math.random()-.5)*2.4,11+Math.random()*4,(Math.random()-.5)*2.4),[1.3,2.2,3.2],1.6,.3,.4);Sh+=d;let L=Sh%9,Z=En*2.6,le=Math.max(Z,4)+6,Pe=so,rt=ro,je=le,ot=!1;if(L<1.6)je=le+(2.4-le)*Gt(L/1.6);else if(L<2.1)je=2.4,ot=L>1.85;else if(L<3.6)je=2.4+(le-2.4)*Gt((L-2.1)/1.5),ot=!0;else if(L<5.6){let te=Gt((L-3.6)/2);Pe=so+(Pr-so)*te,rt=ro+(Ir-ro)*te,ot=!0}else if(L<6.6)Pe=Pr,rt=Ir,je=le+(Z+.55-le)*Gt(L-5.6),ot=!0;else if(L<7)Pe=Pr,rt=Ir,je=Z+.55,ot=L<6.8;else if(L<8)Pe=Pr,rt=Ir,je=Z+.55+(le-Z-.55)*Gt(L-7);else{let te=Gt(L-8);Pe=Pr+(so-Pr)*te,rt=Ir+(ro-Ir)*te}if(L>=6.8&&L<7&&!Ll&&(Ll=!0,Cr<0&&Us>0)){let te=Math.min(Us,3);Us-=te,En=Math.min(Un,En+te),kn.count=En*6;for(let Se=0;Se<26;Se++)_(y.set(Ue+(Math.random()-.5)*8,En*2.6+1,Lt+(Math.random()-.5)*8),ie.set((Math.random()-.5)*6,3+Math.random()*5,(Math.random()-.5)*6),[3.6,2.6,.5],1,.4,1.6);if(En>=Un){Cr=C,ao();for(let Se=0;Se<120;Se++){let Xe=Math.random()*Vi,ht=Math.acos(2*Math.random()-1),Tt=14+Math.random()*8;_(y.set(Ue,En*2.6+4,Lt),ie.set(Math.sin(ht)*Math.cos(Xe)*Tt,Math.abs(Math.cos(ht))*Tt+4,Math.sin(ht)*Math.sin(Xe)*Tt),Se%3?[3.6,2.6,.5]:[3.4,.6,2],1.8,.7,1.4)}}}L<6.8&&(Ll=!1),Cr>=0&&C-Cr>7&&(Cr=-1,En=3,kn.count=En*6,ao());let Pt=jt-je;ba.rotation.y=Pe,Lf.position.x=rt,xh.position.set(rt,-(Pt-1)/2,0),xh.scale.y=Math.max(.1,Pt-1),Uf.position.set(rt,-Pt+.6,0),_h.position.set(rt,-Pt-.2,0),_h.visible=ot,Tl.position.set(Ue,Z+.4,Lt),no.visible=Math.sin(C*3)>0}return{step:Ff,takeoff:Qn,setBanner:on,setArena:is,launched:Df,shots:{site:()=>[Ce(W+34,62,re-52),Ce(Ue,Math.max(12,En*2.6*.55),Lt)],airport:()=>[Ce(-232,30,-214),Ce(-350,6,-280)],arena:()=>[Ce(Ct.x+44,66,Ct.z+64),Ce(Ct.x,4,Ct.z)],port:()=>[Ce(130,46,-122),Ce(52,8,-222)],bridge:()=>[Ce(26,36,176),Ce(108,22,122)],beach:()=>{let d=Li.position,C=d.x<128;return[Ce(d.x+(C?-46:-40),38,d.z+(C?-30:30)),Ce(d.x,27,d.z)]}},glowG:st,tower:()=>({x:Ue,y:En*2.6,z:Lt}),bannerPos:()=>Li.position,posts:Le,pickables:()=>{let d=[Li,Cs,Xi];for(let C of Wt)d.push(C.sp);return d}}}var Qi=(i,e,t)=>Math.max(e,Math.min(t,i)),bl=(i,e,t)=>{let n=Qi((t-i)/(e-i),0,1);return n*n*(3-2*n)},$x=(i,e,t)=>{let n=e-i;return n=Math.atan2(Math.sin(n),Math.cos(n)),i+n*t};function Pf(i){let{scene:e,cam:t,canvas:n,target:s,HALF:r,PITCH:o,BLK:a,BEACH_X:c,zones:l,homeLot:h,WHEEL:u,helis:p,cars:m,more:v,mobile:_}=i,g=new ys(1,1,1),f=new zn;e.add(f);let I=Y=>new en({color:Y}),S=(Y,de,ae)=>new Ut({color:new Ne(Y,de,ae),toneMapped:!1}),O=(Y,de,ae,We,He,ct,yt)=>{let Dt=new pt(g,Y);return Dt.scale.set(de,ae,We),Dt.position.set(He,ct,yt),f.add(Dt),Dt},P=I("#ff2f8e"),z=I("#160c3a");O(P,2.3,.62,4.8,0,.72,0),O(P,2.1,.26,1.5,0,1.12,1.35),O(z,1.92,.62,2.2,0,1.3,-.35),O(P,1.98,.12,2.1,0,1.66,-.35),O(I("#1a1030"),2.3,.12,.5,0,1.3,-2.3),O(I("#1a1030"),.14,.4,.3,.8,1.06,-2.3),O(I("#1a1030"),.14,.4,.3,-.8,1.06,-2.3);for(let[Y,de]of[[1.13,1.55],[-1.13,1.55],[1.13,-1.55],[-1.13,-1.55]])O(I("#0c0a14"),.42,.78,.8,Y,.39,de);O(S(4.6,4.3,3.8),.52,.18,.08,.72,.84,2.42),O(S(4.6,4.3,3.8),.52,.18,.08,-.72,.84,2.42),O(S(4,.3,.55),1.9,.14,.08,0,.92,-2.42);let N=(Y,de,ae)=>{let We=document.createElement("canvas");We.width=We.height=128;let He=We.getContext("2d"),ct=He.createRadialGradient(64,64,4,64,64,64);ct.addColorStop(0,`rgba(${Y},${de},${ae},1)`),ct.addColorStop(.45,`rgba(${Y},${de},${ae},.35)`),ct.addColorStop(1,`rgba(${Y},${de},${ae},0)`),He.fillStyle=ct,He.fillRect(0,0,128,128);let yt=new ai(We);return yt.colorSpace=Kt,yt},ue=(Y,de,ae,We,He)=>{let ct=new pt(new jn(de,ae).rotateX(-Math.PI/2),new Ut({map:Y,transparent:!0,depthWrite:!1,blending:mi,toneMapped:!1,color:new Ne(He,He,He)}));return ct.position.set(0,.08,We),ct.renderOrder=2,f.add(ct),ct};ue(N(255,60,200),5,7.6,0,1.5);let w=ue(N(255,236,200),8,15,10.5,.9),y={x:-80,z:7,yaw:Math.PI/2,v:0,steer:0};function J(){f.position.set(y.x,0,y.z),f.rotation.set(0,y.yaw,0),f.rotateZ(-y.steer*Qi(y.v/40,-1,1)*.07)}let[ce,be]=h,H=[[-423,-293,-213,-195],[-268,-256,-210,-198],[-242,-210,-214,-196],[-487,-433,-224,-200],[-504,-480,-240,-232],[-422,-298,-247,-220],[-248,-232,182,194],[-98,-54,158,194]];function X(Y,de){for(let[ct,yt,Dt]of v.posts)if((Y-ct)*(Y-ct)+(de-yt)*(de-yt)<Dt*Dt)return!1;if(Math.hypot(Y,de)>560||Y>c+13.2||Y>-40&&Y<84&&de>-292&&de<-148)return!1;if(Math.abs(Y)<=r&&Math.abs(de)<=r){if(Y>c+2.2||Math.abs(Y-ce)<7&&Math.abs(de-be)<7)return!0;let ct=((Y+r)%o+o)%o,yt=((de+r)%o+o)%o;return ct>=a-.15||yt>=a-.15}if(Y>c+2.2||Math.abs(Y)<r+26&&Math.abs(de)<r+26)return!0;for(let[ct,yt,Dt,Wt]of H)if(Y>ct&&Y<yt&&de>Dt&&de<Wt)return!1;let ae=((Y+2)%36+36)%36,We=((de+2)%36+36)%36;if(ae>=31.6||We>=31.6)return!0;let He=l.get(Math.floor((Y+2)/36),Math.floor((de+2)/36));return He===Ot.lot||He===Ot.ring||He===Ot.hwy||He===Ot.park||He===Ot.golf||He===Ot.air}let ie=(Y,de,ae,We,He)=>X(Y,de)&&X(Y+ae*2.2*He,de+We*2.2*He)&&X(Y+We*1.1,de-ae*1.1)&&X(Y-We*1.1,de+ae*1.1),ye=ce-9,pe=ce+9,se=["streets","hot","drops","graduates","pulse","whales","safehouse","harbor","trending","x","roam"],Ee=[[[-86,7],[-34,7]],[[-11,7],[-11,-18]],[[-11,-29],[-4,-29]],[[25,-29],[25,-112],[-184,-112],[-184,-280],[-222,-280]],[[-286,-280],[-286,-184],[-148,-184],[-148,26]],[[-148,32],[-100,32],[-100,25],[-29,25]],[[ye,25],[ye,be],[ce-2,be]],[[pe,be],[pe,7],[64.5,7]],[[64.5,18]],[[64.5,28]],[[64.5,46]]],xe=[],U=[],k=[],oe=0;for(let Y of Ee){let de=oe;for(let ae of Y)xe.length&&(oe+=Math.hypot(ae[0]-xe[xe.length-1][0],ae[1]-xe[xe.length-1][1])),xe.push(ae);U.push(oe),k.push(oe-de)}let Ce=[0];for(let Y=1;Y<xe.length;Y++)Ce.push(Ce[Y-1]+Math.hypot(xe[Y][0]-xe[Y-1][0],xe[Y][1]-xe[Y-1][1]));function ve(Y,de){Y=Qi(Y,0,oe);let ae=1;for(;ae<xe.length-1&&Ce[ae]<Y;)ae++;let We=xe[ae-1],He=xe[ae],ct=Ce[ae]-Ce[ae-1]||1,yt=Qi((Y-Ce[ae-1])/ct,0,1);return de[0]=We[0]+(He[0]-We[0])*yt,de[1]=We[1]+(He[1]-We[1])*yt,de}let Fe=[0,0],st=[0,0],qe=Y=>(ve(Y-2.5,Fe),ve(Y+2.5,st),Math.atan2(st[0]-Fe[0],st[1]-Fe[1])),it=v.tower,Qe=new D,K={hot:()=>Ie&&Ie.pos?Qe.set(Ie.pos[0],1.2,Ie.pos[1]):null,drops:()=>{let Y=it();return Qe.set(Y.x,Math.max(10,Y.y*.7),Y.z)},graduates:()=>Qe.set(-430,9,-280),pulse:()=>Qe.set(-178,18,32),whales:()=>p[0]?Qe.copy(p[0].g.position):null,safehouse:()=>Qe.set(ce,2,be),harbor:()=>Qe.set(c+46,3,-6),trending:()=>Qe.copy(v.bannerPos()),x:()=>Qe.set(u.x,17,u.z)},Ht=new D,Ze=new D,tt=new D,Oe=new D,kt=new D,lt=new D,A=new D,M=new D;function j(Y,de,ae,We,He,ct=12,yt=5.2){let Dt=Math.sin(ae),Wt=Math.cos(ae);We.set(Y-Dt*ct,yt,de-Wt*ct),He.set(Y+Dt*14,2.2,de+Wt*14)}let we={streets:"chase",hot:"front",drops:"road",graduates:"poi",pulse:"pulse",whales:"up",safehouse:"road",harbor:"beach",trending:"beach",x:"beach",roam:"chase"};function Me(Y,de,ae,We,He,ct){let yt=se[Y],Dt=we[yt]||"chase",Wt=K[yt],zt=Wt&&Wt(),hn=Math.sin(We),Xt=Math.cos(We),Qn=Xt,un=-hn;if(Dt==="chase"||!zt&&Dt!=="pulse")return j(de,ae,We,He,ct);if(Dt==="front"){He.set(de-hn*10+Qn*1.4,4.6,ae-Xt*10+un*1.4),ct.set(de+hn*7+Qn*1.4,1.4,ae+Xt*7+un*1.4);return}if(Dt==="road"){He.set(de-hn*12,8.5,ae-Xt*12),ct.set(de+(zt.x-de)*.5,2+(zt.y-2)*.5,ae+(zt.z-ae)*.5);return}if(Dt==="up"){He.set(de-hn*9,2.4,ae-Xt*9),ct.set(zt.x,zt.y,zt.z);return}if(Dt==="pulse"){He.set(de+7,8,ae-9),ct.set(-174,15,32);return}if(Dt==="beach"){He.set(c+2.8,zt.y>20?13:22,ae+(zt.z>ae?-9:9)),ct.set(de+(zt.x-de)*.6,1.5+(zt.y-1.5)*.6,ae+(zt.z-ae)*.6);return}let T=zt.x-de,q=zt.z-ae,$=Math.hypot(T,q)||1;T/=$,q/=$;let ee=13+Math.min(10,$*.06),Q=5+Math.min(16,Math.max(0,zt.y-6)*.4);He.set(de-T*ee-q*4,Q,ae-q*ee+T*4),ct.set(de+(zt.x-de)*.55,2+(zt.y-2)*.55,ae+(zt.z-ae)*.55)}let _e=[0,0];function Be(Y){let de=se.length;Y=Qi(Y,0,de-1);let ae=Math.floor(Y),We=Math.min(de-1,ae+1),He=Y-ae,ct=bl(.12,.88,He),yt=U[ae]+(U[We]-U[ae])*ct;return ve(yt,_e),{i:ae,j:We,f:He,d:yt,x:_e[0],z:_e[1],yaw:qe(yt)}}function Le(Y){let de=Be(Y);return y.x=de.x,y.z=de.z,y.yaw=de.yaw,J(),Me(Y,de.x,de.z,de.yaw,A,M),[A.clone(),M.clone()]}let Ie=null,Ye=null,at=!1;function ge(Y,de){at=!0;let ae=Be(Y),We=ae.d!==y.d;y.v=We&&de>0?Qi(Math.abs(ae.d-(y.d??ae.d))/de,0,400):0,y.d=ae.d,y.x=ae.x,y.z=ae.z,y.yaw=$x(y.yaw,ae.yaw,1-Math.exp(-de*9)),y.steer=0,J();let He=Math.round(Qi(Y,0,se.length-1)),ct=Math.abs(Y-He)<.55,yt=ct&&{hot:"hot",drops:"new",graduates:"migrated"}[se[He]]||null;yt!==Ye&&(Ye=yt,Ie=null),Ye&&(!Ie||!Ie.coin)&&(Ie=At(Ye));let Dt=1-bl(0,.3,ae.f),Wt=bl(.7,1,ae.f),zt=Math.max(0,1-Dt-Wt);Me(ae.i,ae.x,ae.z,y.yaw,Ht,Ze),Me(ae.j,ae.x,ae.z,y.yaw,tt,Oe);let hn=Qi((k[ae.j]-150)*.42,0,230)*Math.sin(Math.PI*bl(.1,.9,ae.f));j(ae.x,ae.z,y.yaw,kt,lt,12+hn*.55,5.2+hn),hn>1&&lt.lerp(Qe.set(ae.x,0,ae.z),Math.min(1,hn/50)),A.set(0,0,0).addScaledVector(Ht,Dt).addScaledVector(tt,Wt).addScaledVector(kt,zt),M.set(0,0,0).addScaledVector(Ze,Dt).addScaledVector(Oe,Wt).addScaledVector(lt,zt),t.aspect<.8&&(A.y+=4,M.lerp(Qe.set(ae.x,-6,ae.z),.55));let Xt=1-Math.exp(-de*3.4);t.position.lerp(A,Xt),s.lerp(M,Xt),Rt(46,de)}function At(Y){let de=null,ae=-1/0;for(let We of m){if(!We.coin||We.police)continue;let He=We.coin,ct=Y==="hot"?He.cat!=="new"?He.heat||0:-1:Y==="new"?He.cat==="new"?He.created||0:-1/0:He.cat==="migrated"?He.grad||0:-1/0;ct>ae&&(ae=ct,de=We)}return ae===-1/0?null:de}function F(Y,de){if(!at||Y!==Ie||!Ye)return null;let ae=Math.sin(y.yaw),We=Math.cos(y.yaw),He=-We,ct=ae,yt=1.6+Math.sin(de*.9)*.7;return[y.x-He*2.6+ae*yt,y.z-ct*2.6+We*yt,y.yaw]}let fe={},Ae={x:0,y:0,on:!1},Te=null,Ve=0,ut=0,vt=-9,mt=()=>{let Y=document.activeElement;return Y&&/INPUT|TEXTAREA|SELECT/.test(Y.tagName)},me=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space"]);addEventListener("keydown",Y=>{mt()||Y.metaKey||Y.ctrlKey||me.has(Y.code)&&(fe[Y.code]=!0,B&&Y.code!=="ShiftLeft"&&Y.code!=="ShiftRight"&&Y.preventDefault(),Re&&/^Key[WASD]$/.test(Y.code)&&Re())}),addEventListener("keyup",Y=>{fe[Y.code]=!1}),addEventListener("blur",()=>{for(let Y in fe)fe[Y]=!1}),n.addEventListener("pointerdown",Y=>{!B||Y.pointerType!=="mouse"||(Te=[Y.clientX,Y.clientY])}),addEventListener("pointermove",Y=>{Te&&(Ve-=(Y.clientX-Te[0])*.006,ut=Qi(ut+(Y.clientY-Te[1])*.004,-.35,.9),Te=[Y.clientX,Y.clientY],vt=performance.now())}),addEventListener("pointerup",()=>{Te=null});let B=!1,Re=null,he=document.createElement("div");he.className="joy",he.innerHTML="<i></i>",document.body.appendChild(he);let nt=he.firstChild;he.addEventListener("pointerdown",Y=>{Ae.on=!0;try{he.setPointerCapture(Y.pointerId)}catch{}ft(Y),Y.preventDefault()}),he.addEventListener("pointermove",Y=>{Ae.on&&ft(Y)});let Ge=()=>{Ae.on=!1,Ae.x=Ae.y=0,nt.style.transform=""};he.addEventListener("pointerup",Ge),he.addEventListener("pointercancel",Ge);function ft(Y){let de=he.getBoundingClientRect(),ae=de.width/2;if(ae<4)return;let We=(Y.clientX-de.left-ae)/ae,He=(Y.clientY-de.top-ae)/ae,ct=Math.hypot(We,He);ct>1&&(We/=ct,He/=ct),Ae.x=We,Ae.y=He,nt.style.transform=`translate(${We*ae*.55}px,${He*ae*.55}px)`,Re&&Re()}function Rt(Y,de){let ae=t.fov+(Y-t.fov)*Math.min(1,de*3);Math.abs(ae-t.fov)>.01&&(t.fov=ae,t.updateProjectionMatrix())}function dt(Y){let de=fe.KeyW||fe.ArrowUp||Ae.y<-.22,ae=fe.KeyS||fe.ArrowDown||Ae.y>.4,We=fe.ShiftLeft||fe.ShiftRight,He=(fe.KeyA||fe.ArrowLeft?1:0)-(fe.KeyD||fe.ArrowRight?1:0);Ae.on&&(He=-Ae.x);let ct=We?58:36,yt=We?36:22;de?y.v+=(y.v<0?42:yt)*Y:ae?y.v-=(y.v>0?46:14)*Y:y.v-=Math.sign(y.v)*Math.min(Math.abs(y.v),10*Y),y.v>ct&&(y.v=Math.max(ct,y.v-30*Y)),y.v=Qi(y.v,-13,60),fe.Space&&(y.v*=Math.max(0,1-Y*3)),isFinite(He)||(He=0),y.steer+=(He-y.steer)*Math.min(1,Y*8),isFinite(y.yaw)||(y.yaw=0),isFinite(y.v)||(y.v=0),y.yaw+=y.steer*Y*2.2*Math.min(1,Math.abs(y.v)/9)*Math.sign(y.v||1)*(1-Math.min(.5,Math.abs(y.v)/120));let Dt=Math.sin(y.yaw),Wt=Math.cos(y.yaw),zt=y.x+Dt*y.v*Y,hn=y.z+Wt*y.v*Y,Xt=Math.sign(y.v)||1;ie(zt,hn,Dt,Wt,Xt)?(y.x=zt,y.z=hn):ie(zt,y.z,Dt,Wt,Xt)?(y.x=zt,y.v*=1-Y*2):ie(y.x,hn,Dt,Wt,Xt)?(y.z=hn,y.v*=1-Y*2):y.v*=-.2,J(),!Te&&performance.now()-vt>1600&&(Ve*=1-Math.min(1,Y*2),ut*=1-Math.min(1,Y*2));let Qn=Math.abs(y.v),un=y.yaw+Ve,T=11.5+Qn*.07,q=4.4+Qn*.025+ut*9;A.set(y.x-Math.sin(un)*T*Math.cos(ut*.6),q,y.z-Math.cos(un)*T*Math.cos(ut*.6)),M.set(y.x+Dt*7,1.9,y.z+Wt*7);let $=1-Math.exp(-Y*6);t.position.lerp(A,$),s.lerp(M,$),Rt(52+Qn*.3,Y),w.material.color.setScalar(.9+Math.min(.5,Qn*.01))}return{story:ge,free:dt,shot:Le,pinPos:F,pose:J,S:y,names:se,place(Y){let de=Be(Y);y.x=de.x,y.z=de.z,y.yaw=de.yaw,y.v=0,J()},setActive(Y,de){B=Y,Re=de||null,Y&&(at=!1,Ye=null,Ie=null),he.classList.toggle("on",Y&&(matchMedia("(pointer:coarse)").matches||_)),Y||Ge()},chasePose(Y,de){j(y.x,y.z,y.yaw,Y,de)},open:X}}var Zs=Math.PI*2;function jx(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}var es=9,ts=14,If=4,Gi=ts+If,Fn=es*Gi/2,cn=Fn-Gi*1.4,Qx=`
attribute float aSeed; varying vec3 vW; varying vec3 vN; varying vec3 vC; varying float vS; varying float vTop; varying float vBot;
void main(){
  vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
  vW = w.xyz; vN = normalize(mat3(modelMatrix * instanceMatrix) * normal); vC = instanceColor; vS = aSeed;
  vTop = (modelMatrix * instanceMatrix * vec4(0.0, 0.5, 0.0, 1.0)).y; vBot = (modelMatrix * instanceMatrix * vec4(0.0, -0.5, 0.0, 1.0)).y;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,e_=`
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
}`,t_=`
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
}`,mh="varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",n_=`
uniform vec3 uFog; uniform float uFogD; uniform float uTime; uniform float uFlash; varying vec3 vW;
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main(){
  vec2 id = floor(vW.xz * .5); float r = h21(id), w = .5 + .5 * sin(uTime * 1.3 + r * 6.28 + vW.x * .2);
  vec3 col = mix(vec3(.16, .2, .62), vec3(.32, .26, .78), w * .7);
  col += vec3(1., .5, .8) * pow(w, 12.) * .7;
  vec2 f = fract(vW.xz * .5); col *= mix(.8, 1., smoothstep(0., .05, min(min(f.x, 1. - f.x), min(f.y, 1. - f.y)))); col = pow(col, vec3(2.2)) * (1. + uFlash);
  float d = length(vW - cameraPosition), fo = 1. - exp(-uFogD * uFogD * d * d);
  gl_FragColor = vec4(mix(col, uFog, fo), 1.);
}`,i_=`
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
}`;function Y_(i,e={}){let t=matchMedia("(pointer:coarse)").matches||innerWidth<760,n=new Xa({canvas:i,antialias:!1,powerPreference:"high-performance"});n.toneMapping=ja,n.toneMappingExposure=1.05,n.outputColorSpace=Kt;let s=Math.min(devicePixelRatio||1,t?1.25:1.5),r=new tl,o=new Ne("#4a2a8a"),a={uFog:{value:o},uFogD:{value:.0031},uTime:{value:0},uFlash:{value:0},uMood:{value:.5}},c=new Wn(42,1,.5,5200),l=jx(20261119),h=new D(-.45,.75,.5).normalize();r.add(new pt(new Ya(2600,32,16),new xn({side:qn,depthWrite:!1,uniforms:{uTime:a.uTime,uFlash:a.uFlash,uMood:a.uMood},vertexShader:mh,fragmentShader:i_})));let u=Rf(Fn,cn),p=new pt(new jn(5e3,5e3,1,1).rotateX(-Math.PI/2),new xn({uniforms:{...a,uPitch:{value:Gi},uBlk:{value:ts},uHalf:{value:Fn},uBeach:{value:cn},uZone:{value:u.tex},uRw:{value:new Qt(nn.rw.x0,nn.rw.x1,nn.rw.z,nn.rw.hw)},uTwz:{value:nn.twz},uApron:{value:new Qt(nn.apron.x0,nn.apron.x1,nn.apron.z0,nn.apron.z1)},uField:{value:new Qt(nn.field.x,nn.field.z,nn.field.hx,nn.field.hz)},uPortR:{value:new Qt(nn.port.x0,nn.port.x1,nn.port.z0,nn.port.z1)}},vertexShader:mh,fragmentShader:t_}));r.add(p);let m=new pt(new jn(2600,5e3).rotateX(-Math.PI/2).translate(cn+14+1300,.35,0),new xn({uniforms:a,vertexShader:mh,fragmentShader:n_}));r.add(m);let v=x=>new xn({uniforms:{...a,uSun:{value:h},uWin:{value:x?1:0}},vertexShader:Qx,fragmentShader:e_}),_=()=>new ys(1,1,1),g=[],f=e.gate&&!e.reduced?0:99;function I(x,b=!1,R=!0){let G=_(),ne=new Float32Array(x.length),V=new rn(G,v(b),x.length);R&&g.push({m:V,list:x});let E=new Vt,W=new Rn,re=new D,Ue=new D,Lt=new vs;return x.forEach((bt,It)=>{re.set(bt.x,bt.y+bt.h/2,bt.z),Ue.set(bt.w,bt.h,bt.d),W.setFromEuler(Lt.set(bt.rx||0,bt.ry||0,bt.rz||0)),E.compose(re,W,Ue),V.setMatrixAt(It,E),V.setColorAt(It,bt.c),ne[It]=l()}),G.setAttribute("aSeed",new ha(ne,1)),V.instanceMatrix.needsUpdate=!0,V.instanceColor.needsUpdate=!0,V.frustumCulled=!1,r.add(V),V}let S=x=>new Ne(x),O=["#ff9ec9","#9ff0d0","#c8a8ff","#ffc9a0","#a8d8ff","#fff0a8"].map(S),P=["#2a2f7a","#3a2a8a","#28407a","#4a2f8f","#232a66"].map(S),z=["#8f86b8","#a49ccb","#7a72a8","#b3a9d6"].map(S),N=[],ue=[],w=[],y=[],J=[],ce=null,be=x=>-Fn+x*Gi+ts/2;for(let x=0;x<es;x++)for(let b=0;b<es;b++){let R=be(x),G=be(b);if(R>cn-2)continue;if(x===4&&b===2){ce={x:R,z:G};continue}let ne=Math.hypot(R,G)/Fn,V=R>cn-Gi-2;if(!V&&l()<.08){w.push([R,G]);continue}let E=V?2:l()<.45?1:4,W=E===1?[[0,0,ts-2,ts-2]]:E===2?[[0,-3.5,ts-3,6],[0,3.5,ts-3,6]]:[[-3.5,-3.5,6,6],[3.5,-3.5,6,6],[-3.5,3.5,6,6],[3.5,3.5,6,6]];for(let[re,Ue,Lt,bt]of W){let It=Math.max(3,Math.round(Lt-l()*2)),Un=Math.max(3,Math.round(bt-l()*2)),jt=V?5+Math.round(l()*5):ne<.35?22+Math.round(l()*30):ne<.65?9+Math.round(l()*14):4+Math.round(l()*7),mn=V?O[Math.floor(l()*O.length)]:jt>20?P[Math.floor(l()*P.length)]:l()<.5?z[Math.floor(l()*z.length)]:O[Math.floor(l()*O.length)],vn=R+re,kn=G+Ue;if(N.push({x:vn,y:0,z:kn,w:It,d:Un,h:jt,c:mn}),jt>22&&(N.push({x:vn,y:jt,z:kn,w:Math.max(2,It-2),d:Math.max(2,Un-2),h:Math.round(3+l()*6),c:mn}),l()<.6)){let En=7+l()*6;ue.push({x:vn,y:jt+3,z:kn,w:.4,d:.4,h:En,c:S("#c8c0e8")}),J.push([vn,jt+3+En,kn])}if(l()<.55&&ue.push({x:vn+(l()-.5)*(It-2),y:jt,z:kn+(l()-.5)*(Un-2),w:1.6,d:1.2,h:1,c:S("#5a5280")}),y.push({x:vn,y:jt,z:kn,w:It,d:Un,big:jt>20}),V)for(let En of[-1,1])ue.push({x:vn-It/2-.02,y:2+(En+1)*1.6,z:kn,w:.3,d:Un*.8,h:.35,c:S(En>0?"#ff4f9e":"#5fd8ff"),neon:!0})}}I(N,!0);let H=ue.filter(x=>x.neon),X=ue.filter(x=>!x.neon);I(X);let ie=new rn(_(),new Ut({toneMapped:!1}),H.length);{let x=ie,b=new Vt;H.forEach((R,G)=>{b.compose(new D(R.x,R.y,R.z),new Rn,new D(R.w,R.h,R.d)),x.setMatrixAt(G,b),x.setColorAt(G,R.c.clone().multiplyScalar(3))}),r.add(x)}let ye=[];function pe(x,b,R=1){let G=Math.round(7+l()*4),ne=(l()-.5)*.25;for(let W=0;W<G;W++)ye.push({x:x+ne*W*W*.08,y:W*.9*R,z:b,w:.7*R,d:.7*R,h:.9*R,c:S(W%2?"#8a5a3a":"#7a4e30")});let V=x+ne*G*G*.08,E=G*.9*R;for(let W=0;W<6;W++){let re=W/6*Zs+l()*.4;for(let Ue=1;Ue<=5;Ue++)ye.push({x:V+Math.cos(re)*Ue*.8*R,y:E+(Ue<3?.3:-(Ue-2)*.55)*R,z:b+Math.sin(re)*Ue*.8*R,w:.75*R,d:.75*R,h:.35*R,c:S(Ue%2?"#2fbf6e":"#26a85e")})}ye.push({x:V,y:E-.3,z:b,w:1.1*R,d:1.1*R,h:.8*R,c:S("#2fbf6e")})}for(let x=-Fn+6;x<Fn;x+=9)pe(cn+5+l()*2,x+l()*3),l()<.6&&pe(cn+10+l()*3,x+4);let se=w.slice().sort((x,b)=>Math.hypot(x[0]-30,x[1]-30)-Math.hypot(b[0]-30,b[1]-30))[0]||[cn-30,30];for(let x of w){if(x===se)continue;let[b,R]=x;pe(b-3,R-2),pe(b+3,R+3),pe(b+2,R-4,.8)}for(let x=-3;x<=3;x++)pe(-Fn-8,x*20+4);I(ye);let Ee=[];for(let x=0;x<26;x++){let b=Math.PI*(.55+x/25*.95),R=640+l()*260,G=Math.cos(b)*R,ne=Math.sin(b)*R*1.1,V=70+l()*110,E=50+l()*130;for(let W=0;W<5;W++){let re=1-W/5;Ee.push({x:G,y:E*W/5,z:ne,w:V*re+10,d:V*re*.8+10,h:E/5+.5,c:S(W>3?"#4a3c86":"#2c2160")})}}I(Ee,!1,!1);let xe=34,U=new D(cn+60,21,xe),k=[];for(let x=cn+10;x<=cn+74;x+=2)k.push({x,y:1.4,z:xe,w:2.02,d:9,h:.5,c:S(x%4?"#9a6a48":"#8a5c3c")});for(let x=cn+16;x<=cn+74;x+=8)for(let b of[-4,4])k.push({x,y:-1,z:xe+b,w:.7,d:.7,h:2.5,c:S("#5a3a28")});for(let x of[-4.4,4.4])for(let b=cn+10;b<=cn+74;b+=4)k.push({x:b,y:1.9,z:xe+x,w:.25,d:.25,h:1.1,c:S("#e8e0f4")});for(let x of[-3,3])k.push({x:U.x-4,y:1.9,z:U.z+x*1.6,w:1,d:1,h:18,c:S("#d8d0ec"),ry:0}),k.push({x:U.x+4,y:1.9,z:U.z+x*1.6,w:1,d:1,h:18,c:S("#d8d0ec")});I(k);let oe=new zn,Ce=new zn;oe.position.copy(U),r.add(oe),oe.add(Ce);let ve=56,Fe=new rn(_(),new Ut({toneMapped:!1}),ve);Fe.frustumCulled=!1,Ce.add(Fe);{let x=new Vt,b=new Rn;for(let R=0;R<ve;R++){let G=R/ve*Zs;b.setFromAxisAngle(new D(0,0,1),G),x.compose(new D(Math.cos(G)*15,Math.sin(G)*15,0),b,new D(.7,1.8,.7)),Fe.setMatrixAt(R,x),Fe.setColorAt(R,new Ne(1,1,1))}}let st=new en({color:"#cfc6ee"});for(let x=0;x<8;x++){let b=new pt(_(),st);b.scale.set(30,.35,.35),b.rotation.z=x/8*Math.PI,Ce.add(b)}let qe=new pt(_(),new Ut({color:new Ne(3,1.2,2.4),toneMapped:!1}));qe.scale.set(2.2,2.2,3),Ce.add(qe);let it=[],Qe=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#c8a8ff","#ff8a4a"];for(let x=0;x<12;x++){let b=new pt(_(),new en({color:Qe[x%Qe.length]}));b.scale.set(2,2.2,2.4),oe.add(b),it.push(b)}oe.rotation.y=Math.PI/2;let K=new D(cn+26,0,Fn+70),Ht=[];for(let x=0;x<9;x++)Ht.push({x:K.x,y:x*2.6,z:K.z,w:5-x*.25,d:5-x*.25,h:2.6,c:S(x%2?"#ff4f6e":"#f4f0ff")});Ht.push({x:K.x,y:23.4,z:K.z,w:3.4,d:3.4,h:2.4,c:S("#2a2060")}),I(Ht,!1,!1);let Ze=new pt(_(),new Ut({color:new Ne(4,3.6,2.4),toneMapped:!1}));Ze.scale.set(2.2,1.6,2.2),Ze.position.set(K.x,24.6,K.z),r.add(Ze);let tt=new pt(new Xs(9,260,24,1,!0).rotateZ(-Math.PI/2).translate(130,0,0),new Ut({color:new Ne(1,.92,.7),transparent:!0,opacity:.07,blending:mi,depthWrite:!1,side:Xn}));tt.position.set(K.x,24.6,K.z),r.add(tt);let Oe=x=>-Fn+x*Gi-If/2;function kt(){let x=1+Math.floor(l()*(es-2)),b=1+Math.floor(l()*(es-2)),R=Math.min(es,x+1+Math.floor(l()*3)),G=Math.min(es,b+1+Math.floor(l()*3)),ne=[[Oe(x),Oe(b)],[Oe(R),Oe(b)],[Oe(R),Oe(G)],[Oe(x),Oe(G)]].map(([W,re])=>[Math.min(W,cn-1),re]);l()<.5&&ne.reverse();let V=[],E=0;for(let W=0;W<4;W++){let re=ne[W],Ue=ne[(W+1)%4],Lt=Math.hypot(Ue[0]-re[0],Ue[1]-re[1])||1;V.push({a:re,b:Ue,l:Lt,at:E}),E+=Lt}return{segs:V,len:E}}function lt(x,b,R){b=(b%x.len+x.len)%x.len;for(let G of x.segs)if(b<=G.at+G.l){let ne=(b-G.at)/G.l,V=(G.b[0]-G.a[0])/G.l,E=(G.b[1]-G.a[1])/G.l;return[G.a[0]+(G.b[0]-G.a[0])*ne-E*R,G.a[1]+(G.b[1]-G.a[1])*ne+V*R,Math.atan2(V,E)]}return[x.segs[0].a[0],x.segs[0].a[1],0]}let A=t?70:120,M=6,j=[["body",[0,.55,0],[1.1,.6,2.2]],["cab",[0,1.05,-.15],[1,.45,1.2]],["w1",[.5,.25,.7],[.25,.5,.5]],["w2",[-.5,.25,.7],[.25,.5,.5]],["w3",[.5,.25,-.7],[.25,.5,.5]],["w4",[-.5,.25,-.7],[.25,.5,.5]]],we={};for(let[x]of j){let b=new rn(_(),x==="body"?new en:new en({color:x==="cab"?"#1a1638":"#0c0a14"}),A);b.frustumCulled=!1,r.add(b),we[x]=b}let Me=new rn(_(),new Ut({toneMapped:!1}),A*4);Me.frustumCulled=!1,r.add(Me);let _e=[];for(let x=0;x<A;x++)_e.push({r:kt(),d:l()*400,sp:6+l()*6,side:1,coin:null,police:x>=A-M,color:S(["#e8e4f4","#ffcf4a","#ff7aa8","#7ad8ff","#a8ff9e","#ff9a5a"][Math.floor(l()*6)])});let Be={cars:_e},Le=new Map;function Ie(x,b){if(!x)return;let R=Le.get(x);if(R){R.im?b(R.im):R.cbs.push(b);return}R={im:null,cbs:[b],tries:0},Le.set(x,R);let G=()=>{let ne=new Image;ne.crossOrigin="anonymous",ne.referrerPolicy="no-referrer",ne.onload=()=>{R.im=ne;for(let V of R.cbs.splice(0))V(ne)},ne.onerror=()=>{++R.tries<2&&setTimeout(G,1e4)},ne.src=R.tries?x+(x.includes("?")?"&":"?")+"r="+Date.now()%1e5:x};G()}let Ye=x=>{let b=0;x=String(x||"");for(let R=0;R<x.length;R++)b=b*31+x.charCodeAt(R)>>>0;return b%360};function at(x,b,R,G,ne,V){let E=Ye(V||ne),W=x.createLinearGradient(b-G,R-G,b+G,R+G);W.addColorStop(0,`hsl(${E},80%,62%)`),W.addColorStop(1,`hsl(${(E+48)%360},72%,38%)`),x.fillStyle=W,x.fillRect(b-G,R-G,G*2,G*2),x.fillStyle="#fff",x.font=`900 ${Math.round(G*.8)}px Inter, sans-serif`,x.textAlign="center",x.textBaseline="middle",x.fillText(String(ne||"?").slice(0,2).toUpperCase(),b,R+G*.05),x.textBaseline="alphabetic"}let ge=new Map;function At(x,b,R,G,ne){let V=document.createElement("canvas");V.width=256,V.height=160;let E=V.getContext("2d"),W=Lt=>{E.clearRect(0,0,256,160),E.fillStyle="rgba(12,6,36,.82)",F(E,28,98,200,42,21),E.fill(),E.fillStyle="#fff",E.font="900 26px Inter, sans-serif",E.textAlign="center",E.fillText("$"+x.symbol.slice(0,9),128,129),E.beginPath(),E.arc(128,50,44,0,Zs),E.fillStyle=G?"#ffd23f":ne==="migrated"?"#5fc8ff":R?"#2ee6a6":"#ff4f9e",E.fill(),E.save(),E.beginPath(),E.arc(128,50,38,0,Zs),E.clip(),Lt?E.drawImage(Lt,90,12,76,76):at(E,128,50,38,x.symbol,x.mint),E.restore(),E.textAlign="center";for(let bt=0;bt<5;bt++){let It=6+bt*3;E.fillStyle=bt<b?["#ffd23f","#ffb13f","#ff8a4a","#ff5f7a","#ff4f9e"][bt]:"rgba(255,255,255,.25)",F(E,104+bt*10,158-It,7,It,2),E.fill()}G?(E.fillStyle="#ff4f9e",F(E,160,4,66,28,14),E.fill(),E.fillStyle="#fff",E.font="900 18px Inter, sans-serif",E.fillText("NEW",193,25)):ne==="migrated"&&(E.fillStyle="#2f8fd8",F(E,150,4,100,28,14),E.fill(),E.fillStyle="#fff",E.font="900 16px Inter, sans-serif",E.fillText("MIGRATED",200,24)),re.needsUpdate=!0},re=new ai(V);re.colorSpace=Kt,W(null),Ie(x.iconUrl,W);let Ue=new _i(new ri({map:re,depthTest:!0,transparent:!0}));return Ue.scale.set(6.4,4,1),Ue.renderOrder=5,Ue}function F(x,b,R,G,ne,V){x.beginPath(),x.moveTo(b+V,R),x.arcTo(b+G,R,b+G,R+ne,V),x.arcTo(b+G,R+ne,b,R+ne,V),x.arcTo(b,R+ne,b,R,V),x.arcTo(b,R,b+G,R,V),x.closePath()}let fe=new Map,Ae=A-M-8;function Te(x){let b=x.slice(0,Ae),R=new Set(b.map(V=>V.mint));for(let[V,E]of fe)R.has(V)||(E.coin=null,fe.delete(V));for(let[V,E]of ge)R.has(V)||(r.remove(E.sp),E.sp.material.map.dispose(),E.sp.material.dispose(),ge.delete(V));let G=_e.filter(V=>!V.police&&!V.coin);for(let V of b){let E=fe.get(V.mint),W=!1;if(!E){if(E=G.shift(),!E)break;fe.set(V.mint,E),W=!0}E.coin=V,E.sp=5+(V.heat||0)*12;let re=ge.get(V.mint);(!re||re.up!==V.up||re.stars!==V.stars||re.isNew!==!!V.isNew||re.cat!==V.cat||re.icon!==(V.iconUrl||""))&&(re&&(r.remove(re.sp),re.sp.material.map.dispose()),re={sp:At(V,V.stars,V.up,!!V.isNew,V.cat),up:V.up,stars:V.stars,isNew:!!V.isNew,cat:V.cat,icon:V.iconUrl||"",born:re?re.born:xt},re.sp.userData={kind:"coin",key:V.mint},r.add(re.sp),ge.set(V.mint,re)),W&&xt>4&&E.pos&&(V.isNew||V.cat==="migrated")&&vt.push([E.pos[0],E.pos[1],V.cat==="migrated"?1:0]),re.car=E}ze(b.filter(V=>V.cat!=="new")),ct(b.filter(V=>V.cat==="hot"&&V.chg!=null).sort((V,E)=>(E.heat||0)-(V.heat||0))[0]||null);let ne=_e.filter(V=>V.coin&&!V.coin.isNew&&V.coin.chg!=null&&V.coin.chg<-3).sort((V,E)=>V.coin.chg-E.coin.chg)[0]||null;_e.filter(V=>V.police).forEach((V,E)=>{V.chase=E<3?ne:null,V.gap=5+E*4.2}),ut=ne?ne.coin:null}let Ve=x=>fe.get(x)||null,ut=null,vt=[],mt=t?140:320,me=[],B=new rn(_(),new en,mt),Re=new rn(_(),new en({color:"#f0c9a0"}),mt);B.frustumCulled=Re.frustumCulled=!1,r.add(B),r.add(Re);let he=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#ffffff","#8a3fe2","#ff8a4a","#1a1638"].map(S),nt=["#f0c9a0","#c98e62","#8a5a3a","#ffdcc0"].map(S);for(let x=0;x<mt;x++){let b=Math.floor(l()*es),R=Math.floor(l()*es),G=-Fn+b*Gi+.5,ne=-Fn+R*Gi+.5,V=ts-1;if(G>cn-2){x--;continue}me.push({x0:G,z0:ne,L:V,d:l()*V*4,sp:(l()<.5?-1:1)*(.9+l()*.9),ph:l()*6.3}),B.setColorAt(me.length-1,he[Math.floor(l()*he.length)]),Re.setColorAt(me.length-1,nt[Math.floor(l()*nt.length)])}B.instanceColor.needsUpdate=!0,Re.instanceColor.needsUpdate=!0;function Ge(x){me.forEach((b,R)=>{b.d=((b.d+b.sp*x)%(b.L*4)+b.L*4)%(b.L*4);let G=Math.floor(b.d/b.L),ne=b.d-G*b.L,V=G===0?b.x0+ne:G===1?b.x0+b.L:G===2?b.x0+b.L-ne:b.x0,E=G===0?b.z0:G===1?b.z0+ne:G===2?b.z0+b.L:b.z0+b.L-ne,W=Math.abs(Math.sin(xt*7+b.ph))*.08,re=(G%2?0:Math.PI/2)+(b.sp<0?Math.PI:0);pn.setFromEuler(Ui.set(0,re,Math.sin(xt*7+b.ph)*.06)),Zt.set(V,.62+W,E),on.set(.42,.82,.3),Nt.compose(Zt,pn,on),B.setMatrixAt(R,Nt),Zt.set(V,1.24+W,E),on.set(.34,.34,.34),Nt.compose(Zt,pn,on),Re.setMatrixAt(R,Nt)}),B.instanceMatrix.needsUpdate=!0,Re.instanceMatrix.needsUpdate=!0}let ft=new zn;r.add(ft);{let x=new en({color:"#e8e2f8"}),b=new en({color:"#2a2060"});[[4,4],[7.5,7],[9,8.4],[9,8.4],[7.5,7],[4.5,4.2]].forEach(([ne,V],E)=>{let W=new pt(_(),x);W.scale.set(5.2,V,ne),W.position.x=-12.5+E*5,ft.add(W)});for(let[ne,V]of[[4,0],[0,4],[0,-4]]){let E=new pt(_(),b);E.scale.set(4,ne?4:.4,V?4:.4),E.position.set(-14,ne*.9,V*.9),ft.add(E)}let R=new pt(_(),b);R.scale.set(7,1.8,2.6),R.position.set(1,-5,0),ft.add(R);let G=new pt(_(),new Ut({color:new Ne(4,.4,1.6),toneMapped:!1}));G.scale.setScalar(.8),G.position.set(15.6,0,0),ft.add(G),ft.userData.tip=G}let Rt=document.createElement("canvas");Rt.width=512,Rt.height=160;let dt=Rt.getContext("2d"),Y=new ai(Rt);Y.colorSpace=Kt;let de=new Ut({map:Y,toneMapped:!1,color:new Ne(1.6,1.6,1.6)});for(let x of[4.32,-4.32]){let b=new pt(new jn(16,5),de);b.position.set(1,.4,x),b.rotation.y=x>0?0:Math.PI,ft.add(b)}let ae=null,We=null;function He(){dt.fillStyle="#0a0520",dt.fillRect(0,0,512,160);let x=ae;if(dt.fillStyle="#ff4f9e",dt.fillRect(0,0,512,8),dt.fillRect(0,152,512,8),!x){dt.fillStyle="#fff",dt.font="900 44px Inter, sans-serif",dt.textAlign="center",dt.fillText("THE TRENCHES",256,96),Y.needsUpdate=!0;return}dt.save(),dt.beginPath(),dt.arc(80,80,52,0,Zs),dt.clip(),We?dt.drawImage(We,28,28,104,104):at(dt,80,80,52,x.symbol,x.mint),dt.restore(),dt.textAlign="left",dt.fillStyle="#ffd23f",dt.font="900 22px Inter, sans-serif",dt.fillText("#1 HOT RIGHT NOW",152,50),dt.fillStyle="#fff",dt.font="900 52px Inter, sans-serif";let b="$"+x.symbol;for(;dt.measureText(b).width>340&&b.length>3;)b=b.slice(0,-2)+"\u2026";dt.fillText(b,152,104),dt.fillStyle=(x.chg||0)>=0?"#2ee6a6":"#ff4f9e",dt.font="800 28px Inter, sans-serif",dt.fillText(x.chg==null?"":(x.chg>0?"+":"")+x.chg.toFixed(1)+"% in 5 min",152,140),Y.needsUpdate=!0}He();function ct(x){if(!x||ae&&ae.mint===x.mint&&ae.chg===x.chg)return;let b=ae&&ae.mint===x.mint;if(ae=x,!b){We=null;let R=x.mint;Ie(x.iconUrl,G=>{ae&&ae.mint===R&&(We=G,He())})}He()}let yt=[],Dt={new:["#ffd23f","#2a1270"],migrated:["#5fc8ff","#062a4a"],bond:["#ff4f9e","#fff"],x:["#ffffff","#120a30"],hot:["#2ee6a6","#04261a"]};function Wt(x){let b=document.createElement("canvas");b.width=560,b.height=210;let R=b.getContext("2d"),[G]=Dt[x.kind]||Dt.x,ne=E=>{R.clearRect(0,0,560,210),R.fillStyle="rgba(10,5,32,.94)",F(R,6,6,548,150,40),R.fill(),R.beginPath(),R.moveTo(250,150),R.lineTo(280,196),R.lineTo(312,150),R.closePath(),R.fill(),R.strokeStyle=G,R.lineWidth=6,F(R,6,6,548,150,40),R.stroke(),R.save(),R.beginPath(),R.arc(84,81,50,0,Zs),R.clip(),E?R.drawImage(E,34,31,100,100):x.mint?at(R,84,81,50,x.mark,x.mint):(R.fillStyle=G,R.fillRect(34,31,100,100),R.fillStyle="#120a30",R.font="900 44px Inter, sans-serif",R.textAlign="center",R.fillText(x.mark||"?",84,97)),R.restore(),R.textAlign="left",R.fillStyle=G,R.font="900 24px Inter, sans-serif",R.fillText(x.kicker.toUpperCase(),156,58),R.fillStyle="#fff",R.font="900 40px Inter, sans-serif";let W=x.title;for(;R.measureText(W).width>380&&W.length>3;)W=W.slice(0,-2)+"\u2026";if(R.fillText(W,156,104),x.sub){R.fillStyle="rgba(220,210,255,.85)",R.font="700 24px Inter, sans-serif";let re=x.sub;for(;R.measureText(re).width>380&&re.length>3;)re=re.slice(0,-2)+"\u2026";R.fillText(re,156,138)}V.needsUpdate=!0},V=new ai(b);return V.colorSpace=Kt,ne(null),Ie(x.iconUrl,ne),V}function zt(x){for(;yt.length>=(t?3:5);){let ne=yt.shift();r.remove(ne.sp),ne.sp.material.map.dispose(),ne.sp.material.dispose()}let b=new _i(new ri({map:Wt(x),transparent:!0,depthTest:!1}));b.renderOrder=8,b.userData=x.mint?{kind:"coin",key:x.mint}:{kind:"bubble",key:x.title};let R=x.mint?Ve(x.mint):null,G=x.at||(()=>{let ne=y[Math.floor(l()*y.length)];return[ne.x,ne.z,ne.y+14]})();r.add(b),yt.push({sp:b,car:R,x:G[0],z:G[1],y:G[2]||12,t:0,life:x.life||6.5})}let hn=t?16:30,Xt=[],Qn=[["hull",[0,.45,0],[2.4,.9,5.6],"#efeaff"],["trim",[0,.95,0],[2.5,.18,5.7],"#2f3fe4"],["deck",[0,1.35,-.9],[1.7,.8,2.2],"#241a5c"],["mast",[0,3.3,.7],[.24,4.4,.24],"#cfc6ee"],["sail",[0,3.5,1.35],[.14,3.4,1.9],"#ffffff"]],un={};for(let[x,,,b]of Qn){let R=new rn(_(),new en({color:b}),hn);R.frustumCulled=!1,R.count=0,r.add(R),un[x]=R}un.sail.material=new Ut({toneMapped:!1});function T(x){let b=document.createElement("canvas");b.width=256,b.height=92;let R=b.getContext("2d");R.fillStyle="rgba(8,18,48,.86)",F(R,6,8,244,76,22),R.fill(),R.strokeStyle="rgba(95,200,255,.8)",R.lineWidth=3,F(R,6,8,244,76,22),R.stroke(),R.fillStyle="#fff",R.font="900 30px Inter, sans-serif",R.textAlign="left",R.fillText(x.name.slice(0,8),22,52);let G=x.chg==null?"\u2014":(x.chg>0?"+":"")+x.chg.toFixed(1)+"%";R.textAlign="right",R.fillStyle=x.chg>=0?"#2ee6a6":"#ff4f9e",R.font="800 26px Inter, sans-serif",R.fillText(G,234,52),R.fillStyle="rgba(160,220,255,.85)",R.font="800 13px Inter, sans-serif",R.textAlign="left",R.fillText("PERP \xB7 "+(x.oi>=1e9?(x.oi/1e9).toFixed(1)+"B":(x.oi/1e6).toFixed(0)+"M")+" OI",22,74);let ne=new ai(b);ne.colorSpace=Kt;let V=new _i(new ri({map:ne,transparent:!0,depthTest:!0}));return V.renderOrder=5,V.userData={kind:"perp",key:x.name},V}function q(x){let b=x.filter(ne=>ne&&ne.oi>0).sort((ne,V)=>V.oi-ne.oi).slice(0,hn);if(Xt.length&&b.length===Xt.length&&b.every(ne=>Xt.some(V=>V.p.name===ne.name))){for(let ne of b){let V=Xt.find(W=>W.p.name===ne.name);V.p=ne;let E=T(ne);V.sp.material.map.dispose(),V.sp.material.map=E.material.map,V.sp.material.needsUpdate=!0,E.material.dispose()}return}for(let ne of Xt)r.remove(ne.sp),ne.sp.material.map.dispose(),ne.sp.material.dispose();Xt.length=0;let R=t?2:3,G=Math.ceil(hn/R);b.forEach((ne,V)=>{let E=V%R,W=Math.floor(V/R),re=E%2?-1:1,Ue=.75+.6*Math.min(1,Math.max(0,Math.log10(ne.oi/1e6)/3));Xt.push({p:ne,x:cn+30+E*15,dir:re,sz:Ue,sp:T(ne),ph:l()*6.28,d:W/G*2*(2*Fn-12)+l()*4,pos:null,wake:0})});for(let ne of Xt)r.add(ne.sp);for(let ne in un)un[ne].count=Xt.length}let $=[],ee=[];for(let x of y.filter(b=>b.big).sort((b,R)=>R.y-b.y)){if($.length>=5)break;$.every(b=>Math.hypot(b.x-x.x,b.z-x.z)>30)&&$.push(x)}function Q(x,b){let R=document.createElement("canvas");R.width=384,R.height=176;let G=R.getContext("2d"),ne=G.createLinearGradient(0,0,384,176);ne.addColorStop(0,"#2f3fe4"),ne.addColorStop(.5,"#8a3fe2"),ne.addColorStop(1,"#ff4f9e");let V=W=>{G.clearRect(0,0,384,176),G.fillStyle=ne,F(G,4,4,376,168,26),G.fill(),G.fillStyle="rgba(10,5,32,.88)",F(G,12,12,360,152,20),G.fill(),G.save(),G.beginPath(),G.arc(88,88,52,0,Zs),G.clip(),W?G.drawImage(W,36,36,104,104):at(G,88,88,52,x.symbol,x.mint),G.restore(),G.textAlign="left",G.fillStyle="#ffd23f",G.font="900 20px Inter, sans-serif",G.fillText("#"+b+" ON THE STREETS",160,58),G.fillStyle="#fff",G.font="900 44px Inter, sans-serif",G.fillText("$"+x.symbol.slice(0,8),160,106);let re=x.mcap||0;G.fillStyle="rgba(220,210,255,.9)",G.font="800 22px Inter, sans-serif",G.fillText((re>=1e9?"$"+(re/1e9).toFixed(2)+"B":"$"+(re/1e6).toFixed(1)+"M")+" cap",160,140),E.needsUpdate=!0},E=new ai(R);return E.colorSpace=Kt,V(null),Ie(x.iconUrl,V),E}function ze(x){x.filter(R=>!R.isNew&&R.mcap).sort((R,G)=>G.mcap-R.mcap).slice(0,$.length).forEach((R,G)=>{let ne=ee[G];if(ne&&ne.mint===R.mint&&ne.icon===(R.iconUrl||"")){ne.coin=R,ne.sp.userData.coin=R;return}if(!ne){ne=ee[G]={sp:new _i(new ri({transparent:!0,depthTest:!0}))},ne.sp.renderOrder=4;let V=$[G];ne.sp.position.set(V.x,V.y+10,V.z),ne.sp.scale.set(17,7.8,1),r.add(ne.sp)}ne.sp.material.map&&ne.sp.material.map.dispose(),ne.sp.material.map=Q(R,G+1),ne.sp.material.needsUpdate=!0,ne.mint=R.mint,ne.icon=R.iconUrl||"",ne.coin=R,ne.sp.userData={kind:"bill",key:R.mint,coin:R}})}let Je=10,Ke=[],et={};for(let[x]of j){let b=new rn(_(),x==="body"?new en:new en({color:x==="cab"?"#1a1638":"#0c0a14"}),Je);b.frustumCulled=!1,b.count=0,r.add(b),et[x]=b}let Mt=new pt(new qa(3.4,3.4,140,24,1,!0).translate(0,70,0),new Ut({color:new Ne(1.6,.45,1.1),transparent:!0,opacity:.14,blending:mi,depthWrite:!1,side:Xn}));Mt.position.set(se[0],0,se[1]),Mt.visible=!1,r.add(Mt);let gt=(()=>{let x=document.createElement("canvas");x.width=320,x.height=120;let b=x.getContext("2d");b.fillStyle="rgba(10,5,32,.9)",F(b,6,8,308,104,26),b.fill(),b.strokeStyle="#ff4f9e",b.lineWidth=4,F(b,6,8,308,104,26),b.stroke(),b.fillStyle="#ff9ec9",b.font="900 16px Inter, sans-serif",b.textAlign="center",b.fillText("YOUR SAFEHOUSE",160,44),b.fillStyle="#fff",b.font="900 25px Inter, sans-serif",b.fillText("Connect to park your bag",160,82);let R=new ai(x);R.colorSpace=Kt;let G=new _i(new ri({map:R,transparent:!0}));return G.position.set(se[0],7,se[1]),G.scale.set(10,3.75,1),G.userData={kind:"safehouse",key:"home"},r.add(G),G})();function wt(x){for(let R of Ke)r.remove(R.sp),R.sp.material.map.dispose(),R.sp.material.dispose();Ke.length=0,(x||[]).slice(0,Je).forEach((R,G)=>{let ne=se[0]-4.5+G%5*2.25,V=se[1]-2.6+Math.floor(G/5)*5.2,E={mint:R.mint,symbol:R.sym||"?",iconUrl:R.iconUrl||""},W=At(E,0,(R.ch||0)>=0,!1);W.userData={kind:"mine",key:R.mint,row:R},W.position.set(ne,3.6,V),W.scale.set(4.2,2.6,1),r.add(W),Ke.push({r:R,x:ne,z:V,sp:W}),pn.setFromEuler(Ui.set(0,0,0));for(let[re,Ue,Lt]of j)Zt.set(ne+Ue[0],Ue[1],V+Ue[2]),on.set(...Lt),Nt.compose(Zt,pn,on),et[re].setMatrixAt(G,Nt);et.body.setColorAt(G,ni.set(["#ffd23f","#5fc8ff","#ff9ec9","#9ff0d0","#c8a8ff"][G%5]))});for(let R in et)et[R].count=Ke.length,et[R].instanceMatrix.needsUpdate=!0;et.body.instanceColor&&(et.body.instanceColor.needsUpdate=!0),Mt.visible=Ke.length>0,gt.visible=!Ke.length}let qt=y.filter(x=>x.big),Gt=[];for(let x=0;x<Math.min(6,qt.length);x++){let b=qt[Math.floor(l()*qt.length)];Gt.push({x:b.x+(l()-.5)*(b.w-2),y:b.y+(b.big,0),z:b.z+(l()-.5)*(b.d-2)})}for(let x of Gt){let b=new Ka("#ff7a3a",60,40,1.6);b.position.set(x.x,x.y+3,x.z),r.add(b),x.light=b}let _n=Gt.length*10,Sn=new rn(_(),new Ut({toneMapped:!1}),_n);Sn.frustumCulled=!1,r.add(Sn);let Yt=t?160:320,_t=new rn(_(),new en({color:"#3a2a5a",transparent:!0,opacity:.82}),Yt);_t.frustumCulled=!1,r.add(_t);let Ms=Array.from({length:Yt},(x,b)=>({f:Gt[b%Gt.length],t:l()*9,life:7+l()*3,ox:(l()-.5)*2,oz:(l()-.5)*2,s:.8+l()*.8})),Ct=160,wn=new rn(_(),new Ut({toneMapped:!1}),Ct);wn.frustumCulled=!1,r.add(wn);let Wi=Array.from({length:Ct},()=>({t:9,p:new D,v:new D,c:new Ne})),ei=new Ka("#ffd0a0",0,120,1.4);r.add(ei);let Ri=new pt(new Ya(1,16,12),new Ut({color:new Ne(6,3.6,1.8),transparent:!0,opacity:0,toneMapped:!1}));r.add(Ri);let fn=new pt(new rl(1,.08,6,48).rotateX(Math.PI/2),new Ut({color:new Ne(3,2,2.6),transparent:!0,opacity:0,toneMapped:!1}));r.add(fn);let ti=2,Bn=9,yn=new D,$e=t?700:1600,oi=new rn(_(),new Ut({toneMapped:!1}),$e);oi.frustumCulled=!1,r.add(oi);let Ss=Array.from({length:$e},()=>({t:9,life:1,p:new D,v:new D,c:new Ne,s:.4,drag:1})),ns=[[.3,3.4,2.1],[3.6,2.6,.5],[3.2,3.2,3.4],[3.6,.9,2.4],[1,1.8,3.8]],Ci=new D,Js=[],vr=0,pa=3.4,Xi=8+l()*6,qi=9,Yi=.5;function is(x,b,R,G,ne,V){let E=Ss[vr];vr=(vr+1)%$e,E.t=0,E.life=G,E.p.copy(x),E.v.copy(b),E.c.setRGB(R[0],R[1],R[2]),E.s=ne,E.drag=V}function ma(){let x=_e.filter(R=>R.coin&&R.coin.up&&R.pos);if(!x.length)return;x.sort((R,G)=>(G.coin.chg||0)-(R.coin.chg||0));let b=x[Math.floor(l()*l()*Math.min(x.length,10))];Js.push({p:new D(b.pos[0],2.5,b.pos[1]),v:new D((l()-.5)*4,36+l()*14,(l()-.5)*4),t:0,fuse:1.2+l()*.5,col:l()<.6?0:Math.floor(l()*ns.length)})}function Hn(){let x=y[Math.floor(l()*y.length)];yn.set(x.x,x.y+1,x.z),Bn=0;let b=0;for(let R of Wi){if(b>40)break;R.t>2.5&&(R.t=0,R.p.copy(yn),R.v.set((l()-.5)*22,8+l()*18,(l()-.5)*22),R.c.setRGB(3,1.2+l(),.3+l()*.4),b++)}}let St=[],li=new Ut({color:new Ne(.7,.75,1),transparent:!0,opacity:.1,blending:mi,depthWrite:!1,side:Xn});for(let x=0;x<3;x++){let b=new zn,R=new en({color:"#16123a"}),G=new pt(_(),R);G.scale.set(2.4,1.6,4),b.add(G);let ne=new pt(_(),R);ne.scale.set(.6,.6,4),ne.position.set(0,.3,-3.6),b.add(ne);let V=new pt(_(),new Ut({color:"#0c0a1e"}));V.scale.set(9,.12,.5),V.position.y=1.1,b.add(V);let E=new pt(new Xs(9,60,24,1,!0).translate(0,-30,0),li);E.position.y=-.6,b.add(E);let W=new pt(_(),new Ut({color:new Ne(4,.3,.4),toneMapped:!1}));W.scale.setScalar(.35),W.position.set(0,-.9,-1.6),b.add(W),r.add(b),St.push({g:b,rot:V,cone:E,red:W,r:30+x*18,h:46+x*9,sp:.12+x*.05,ph:x*2.1})}function Ks(x){St.forEach((b,R)=>{let G=x[R];if(b.sp&&(b.g.remove(b.sp),b.sp.material.map.dispose(),b.sp.material.dispose(),b.sp=null),!G)return;let ne=document.createElement("canvas");ne.width=256,ne.height=96;let V=ne.getContext("2d");V.fillStyle="rgba(10,5,32,.88)",F(V,6,8,244,80,22),V.fill(),V.strokeStyle="rgba(255,210,63,.85)",V.lineWidth=3,F(V,6,8,244,80,22),V.stroke(),V.fillStyle="#ffd23f",V.font="900 14px Inter, sans-serif",V.textAlign="left",V.fillText("WHALE #"+(R+1)+" \xB7 TODAY",22,34),V.fillStyle="#fff",V.font="900 24px Inter, sans-serif",V.fillText((G.n||G.a.slice(0,6)+"\u2026"+G.a.slice(-4)).slice(0,14),22,62);let E=G.pnl||0;V.fillStyle=E>=0?"#2ee6a6":"#ff4f9e",V.font="800 17px Inter, sans-serif",V.fillText((E>=0?"+$":"-$")+(Math.abs(E)>=1e6?(Math.abs(E)/1e6).toFixed(2)+"M":(Math.abs(E)/1e3).toFixed(0)+"K")+" P&L",22,82);let W=new ai(ne);W.colorSpace=Kt,b.sp=new _i(new ri({map:W,transparent:!0,depthTest:!1})),b.sp.renderOrder=6,b.sp.position.set(0,4.2,0),b.sp.scale.set(8,3,1),b.sp.userData={kind:"whale",key:G.a,whale:G},b.g.add(b.sp)})}let $s=[];for(let x=0;x<5;x++){let b=qt[x*7%Math.max(1,qt.length)]||{x:0,y:30,z:0},R=new pt(new Xs(6,220,20,1,!0).rotateX(Math.PI).translate(0,110,0),new Ut({color:new Ne(.9,.85,1),transparent:!0,opacity:.06,blending:mi,depthWrite:!1,side:Xn}));R.position.set(b.x,b.y+1,b.z),r.add(R),$s.push({cone:R,ph:x*1.3,sp:.25+x*.06})}let ss=t?500:1100,ci=new rn(_(),new Ut({color:new Ne(.55,.62,1.1),transparent:!0,opacity:.32,depthWrite:!1}),ss);ci.frustumCulled=!1,ci.count=0,r.add(ci);let yi=Array.from({length:ss},()=>({x:(l()-.5)*170,y:l()*80,z:(l()-.5)*170,v:55+l()*25})),rs=0,Mi=Cf({scene:r,col:S,voxMesh:I,boxGeo:_,U:a,mobile:t,HALF:Fn,PITCH:Gi,BLK:ts,NB:es,BEACH_X:cn,PIER_Z:xe,WHEEL:U,roofs:y,ants:J,site:ce,zones:u,spark:is,seaMat:m.material,cam:c,rr:F,loadIcon:Ie,mono:at});r.add(new ol("#8a8aff","#3a1a4a",1.5));let yr=new cl("#ffd0f0",1.5);yr.position.copy(h).multiplyScalar(100),r.add(yr),r.fog=null;let hi=new yl(n);hi.addPass(new Ml(r,c));let wl=new da(new ke(256,256),t?.38:.45,.42,.92);hi.addPass(wl),hi.addPass(new Sl);let Et=new gl(c,i);Et.enableDamping=!0,Et.dampingFactor=.06,Et.minDistance=25,Et.maxDistance=260,Et.maxPolarAngle=1.32,Et.minPolarAngle=.35,Et.target.set(0,4,0),Et.autoRotate=!0,Et.autoRotateSpeed=.35,Et.enablePan=!0,Et.screenSpacePanning=!1;let Pi=.0031,ga=new D(98,56,118),Mr=new D(0,4,0),Sr=new D,xa=new D,Zn=ga.clone(),In=Mr.clone(),Tn=!!e.gate,$t=Tn?"gate":"drive",Si=0,_a=0,Ii=0,Ln=null,On=Pi,Zi=0,Er=[],an=Pf({scene:r,cam:c,canvas:i,target:Et.target,HALF:Fn,PITCH:Gi,BLK:ts,BEACH_X:cn,zones:u,homeLot:se,WHEEL:U,helis:St,cars:_e,more:Mi,mobile:t});Et.enabled=!1,Et.autoRotate=!1,Tn?a.uFogD.value=.0018:(an.place(0),an.chasePose(c.position,Et.target),an.setActive(!0)),Et.addEventListener("start",()=>{Ii=0,Et.autoRotate=!1,Si=0,a.uFogD.value=Pi});let dn=(x,b,R)=>new D(x,b,R),va=()=>_e.filter(x=>x.coin&&x.pos&&x.coin.cat!=="new").sort((x,b)=>(b.coin.heat||0)-(x.coin.heat||0))[0],ya={streets:()=>[dn(66+Math.sin(xt*.08)*8,36,76),dn(8,2,10)],hot:()=>{let x=va();return x?[dn(x.pos[0]+26,24,x.pos[1]+28),dn(x.pos[0],2,x.pos[1])]:ya.streets()},drops:()=>[dn(-58+Math.sin(xt*.1)*6,62,18),dn(-4,2,-30)],migrated:()=>[dn(-78,60,64),dn(0,26,0)],harbor:()=>[dn(cn-16,27,48),dn(cn+44,0,-6)],pier:()=>[dn(cn+14+Math.sin(xt*.1)*4,12,xe+50),dn(U.x,15,U.z)],whales:()=>{let x=St[0]?St[0].g.position:dn(0,50,0);return[dn(x.x+24,x.y+3,x.z+24),dn(x.x,x.y-3,x.z)]},safehouse:()=>[dn(se[0]+26,21,se[1]+30),dn(se[0],2,se[1])],mood:()=>[dn(-180+Math.sin(xt*.05)*20,128,-150),dn(0,0,0)],roam:()=>[ga.clone(),Mr.clone()],...Mi.shots},Es=x=>an.shot(x);function bs(x,b){Sr.copy(c.position),xa.copy(Et.target),Zn.copy(x),In.copy(b),On=a.uFogD.value,e.reduced?(c.position.copy(x),Et.target.copy(b),a.uFogD.value=Pi,Si=0):(Si=1,_a=0),Ii=0}function js(){if(Tn)if(Tn=!1,Er.length){$t="story",Et.enabled=!1,an.setActive(!1,e.onWheel);let[x,b]=Es(Math.round(Zi));bs(x,b)}else ws(!0)}let as=new D,Qs=new D;function ws(x){$t="drive",Et.enabled=!1,Et.autoRotate=!1,Ln=null,an.setActive(!0),x&&(an.chasePose(as,Qs),bs(as.clone(),Qs.clone()))}function Ts(){$t="map",Et.enabled=!0,an.setActive(!1);let x=an.S;bs(new D(x.x+46,62,x.z+58),new D(x.x,2,x.z))}addEventListener("keydown",x=>{x.code!=="KeyV"||x.metaKey||x.ctrlKey||/INPUT|TEXTAREA|SELECT/.test((document.activeElement||{}).tagName||"")||($t==="drive"?Ts():$t==="map"&&ws(!1))});function er(){let x=i.clientWidth||innerWidth,b=i.clientHeight||innerHeight;n.setPixelRatio(s),n.setSize(x,b,!1),hi.setPixelRatio(s),hi.setSize(x,b),c.aspect=x/b,c.fov=x/b<.8?58:42,c.updateProjectionMatrix()}er(),addEventListener("resize",er);try{t||(hi.renderTarget1.samples=4,hi.renderTarget2.samples=4)}catch{}let As=new ul,br=new ke,wr=null,Tr=null,Rs=null,eo=()=>{let x=[];for(let b of ge.values())x.push(b.sp);for(let b of Xt)x.push(b.sp);for(let b of ee)x.push(b.sp);for(let b of Ke)x.push(b.sp);for(let b of yt)x.push(b.sp);gt.visible&&x.push(gt);for(let b of St)b.sp&&x.push(b.sp);for(let b of Mi.pickables())x.push(b);return x};function Li(x,b){let R=i.getBoundingClientRect();br.set((x-R.left)/R.width*2-1,-(b-R.top)/R.height*2+1),As.setFromCamera(br,c);let G=As.intersectObjects(eo(),!1);return G.length?G[0].object.userData:null}function Cs(x){if(!x)return null;if(x.kind==="coin"){let b=ge.get(x.key);return b&&b.car&&b.car.coin?{kind:"coin",coin:b.car.coin}:x.coin?{kind:"coin",coin:x.coin}:null}if(x.kind==="bill")return{kind:"coin",coin:ge.get(x.key)&&ge.get(x.key).car&&ge.get(x.key).car.coin||x.coin};if(x.kind==="perp"){let b=Xt.find(R=>R.p.name===x.key);return b?{kind:"perp",perp:b.p}:null}return x.kind==="whale"?{kind:"whale",whale:x.whale}:x.kind==="mine"?{kind:"mine",row:x.row}:x.kind==="safehouse"?{kind:"safehouse"}:(x.kind==="bubble",null)}i.addEventListener("pointermove",x=>{if(x.pointerType&&x.pointerType!=="mouse")return;let b=Li(x.clientX,x.clientY),R=b?b.kind+":"+b.key:null,G=Cs(b);wr=G&&G.kind==="coin"?G.coin.mint:null,R!==Tr&&(Tr=R,i.style.cursor=R?"pointer":"grab"),e.onHover&&e.onHover(G,x.clientX,x.clientY)}),i.addEventListener("pointerdown",x=>{Rs=[x.clientX,x.clientY]}),i.addEventListener("pointerup",x=>{if(!Rs||Math.hypot(x.clientX-Rs[0],x.clientY-Rs[1])>8)return;let b=Cs(Li(x.clientX,x.clientY));if(b&&b.kind==="coin"){let R=ge.get(b.coin.mint);Ln=R&&R.car?R.car:null,Et.autoRotate=!1}else b&&b.kind==="perp"?(Ln=Xt.find(R=>R.p.name===b.perp.name)||null,Et.autoRotate=!1):Ln=null;e.onPick&&e.onPick(b)});let Nt=new Vt,pn=new Rn,Zt=new D,on=new D,Ui=new vs,ni=new Ne,xt=0,Ps=performance.now(),ui=0,Ma=!1,Is=!1,Ei=0;function tr(x){xt+=x,a.uTime.value=xt,Ei++;let b=0;for(_e.forEach((E,W)=>{E.d+=E.sp*x,E.police&&E.chase&&(E.r=E.chase.r,E.d=E.chase.d-E.gap);let[re,Ue,Lt]=an.pinPos(E,xt)||lt(E.r,E.d,1);pn.setFromEuler(Ui.set(0,Lt,0));let bt=Math.sin(Lt),It=Math.cos(Lt);for(let[jt,mn,vn]of j)Zt.set(re+mn[0]*It+mn[2]*bt,mn[1],Ue-mn[0]*bt+mn[2]*It),on.set(...vn),Nt.compose(Zt,pn,on),we[jt].setMatrixAt(W,Nt);E.police?ni.set(Math.sin(xt*10+W)>0?"#1a1a2e":"#f4f4ff"):E.coin?ni.set(E.coin.isNew?"#ffd23f":E.coin.cat==="migrated"?"#5fc8ff":E.coin.up?"#2ee6a6":"#ff4f9e"):ni.copy(E.color),we.body.setColorAt(W,ni);let Un=E.police?[[.3,1.35,-.1,Math.sin(xt*12+W)>0?[5,.3,.4]:[.3,.5,5]],[-.3,1.35,-.1,Math.sin(xt*12+W)>0?[.3,.5,5]:[5,.3,.4]]]:[[.35,.6,1.12,[4,3.8,3.2]],[-.35,.6,1.12,[4,3.8,3.2]],[.38,.6,-1.12,[3,.2,.25]],[-.38,.6,-1.12,[3,.2,.25]]];for(let[jt,mn,vn,kn]of Un)Zt.set(re+jt*It+vn*bt,mn,Ue-jt*bt+vn*It),on.set(.28,.16,.1),Nt.compose(Zt,pn,on),Me.setMatrixAt(b,Nt),Me.setColorAt(b,ni.setRGB(...kn)),b++;if(E.pos=[re,Ue],E.coin&&E.coin.s5m){for(E.pb=(E.pb||0)+x*Math.min(3,(E.coin.s5m.numBuys||0)/300),E.ps=(E.ps||0)+x*Math.min(3,(E.coin.s5m.numSells||0)/300);E.pb>=1;)E.pb--,is(Zt.set(re,2.2,Ue),Ci.set((l()-.5)*2,4+l()*2.5,(l()-.5)*2),[.3,3,1.7],.9,.34,2);for(;E.ps>=1;)E.ps--,is(Zt.set(re,2.2,Ue),Ci.set((l()-.5)*2,3+l()*2,(l()-.5)*2),[3.2,.45,1.6],.9,.34,2)}});b<A*4;b++)Nt.makeScale(0,0,0),Me.setMatrixAt(b,Nt);for(let E of Object.values(we))E.instanceMatrix.needsUpdate=!0;we.body.instanceColor.needsUpdate=!0,Me.instanceMatrix.needsUpdate=!0,Me.instanceColor.needsUpdate=!0;for(let[E,W]of ge){if(!W.car||!W.car.pos)continue;let re=Math.min(1,(xt-W.born)*2);W.sp.position.set(W.car.pos[0],3.4+.25*Math.sin(xt*2+W.car.d),W.car.pos[1]),W.sp.scale.set(6.4*re*(wr===E?1.25:1),4*re*(wr===E?1.25:1),1)}Xt.forEach((E,W)=>{E.d+=x*1.6;let re=2*Fn-12,Ue=(E.d+(E.dir<0?re:0))%(2*re)/re,Lt=Ue<=1,bt=-Fn+6+(Lt?Ue:2-Ue)*re,It=E.x+Math.sin(xt*.3+E.ph)*1.5,Un=.25+Math.sin(xt*1.6+E.ph)*.18,jt=Lt?0:Math.PI;pn.setFromEuler(Ui.set(Math.sin(xt*1.3+E.ph)*.05,jt,Math.sin(xt*1.1+E.ph)*.06));let mn=Math.sin(jt),vn=Math.cos(jt);for(let[En,Us,Rr]of Qn)Zt.set(It+Us[2]*mn*E.sz,Un+Us[1]*E.sz,bt+Us[2]*vn*E.sz),on.set(Rr[0]*E.sz,Rr[1]*E.sz,Rr[2]*E.sz),Nt.compose(Zt,pn,on),un[En].setMatrixAt(W,Nt);un.sail.setColorAt(W,ni.setRGB(...E.p.chg>=0?[.14,1.2,.72]:[1.35,.2,.66])),E.sp.position.set(It,7.6*E.sz+.3,bt);let kn=Tr==="perp:"+E.p.name?1.2:1;for(E.sp.scale.set(6.6*kn,2.4*kn,1),E.pos=[It,bt],E.wake+=x*7;E.wake>=1;)E.wake--,is(Zt.set(It-mn*2.8*E.sz+(l()-.5),.5,bt-vn*2.8*E.sz),Ci.set((l()-.5)*1.5,.6+l()*.6,(l()-.5)*1.5),[2.2,2.4,2.8],.9+l()*.4,.3,2.5)});for(let E in un)un[E].instanceMatrix.needsUpdate=!0;for(un.sail.instanceColor&&(un.sail.instanceColor.needsUpdate=!0);vt.length;){let[E,W,re]=vt.pop(),Ue=re?[.8,2.4,3.8]:[3.6,2.6,.5];for(let Lt=0;Lt<(re?90:40);Lt++)is(Zt.set(E,3,W),Ci.set((l()-.5)*(re?22:14),6+l()*(re?18:10),(l()-.5)*(re?22:14)),Lt%4?Ue:[3.4,3.4,3.6],1.1+l()*.7,re?.6:.45,1.6)}let R=0;Gt.forEach((E,W)=>{for(let re=0;re<10;re++){let Ue=.5+.9*Math.abs(Math.sin(xt*(6+re)+re*1.7+W));Zt.set(E.x+(re*37%5-2)*.45,E.y+Ue*.5+re%3*.3,E.z+(re*13%5-2)*.45),on.set(.7,Ue,.7),Nt.compose(Zt,pn.identity(),on),Sn.setMatrixAt(R,Nt),Sn.setColorAt(R,ni.setRGB(4,1.2+re%3*.6,.2)),R++}E.light.intensity=45+25*Math.sin(xt*13+W)}),Sn.instanceMatrix.needsUpdate=!0,Sn.instanceColor.needsUpdate=!0,Ms.forEach((E,W)=>{E.t+=x,E.t>E.life&&(E.t=0);let re=E.t/E.life,Ue=(E.s+re*3.2)*(re<.1?re*10:re>.85?(1-re)/.15:1);Zt.set(E.f.x+E.ox+re*re*16,E.f.y+2+re*34,E.f.z+E.oz+re*3),on.setScalar(Math.max(.001,Ue)),pn.setFromEuler(Ui.set(re*2+W,re*3,0)),Nt.compose(Zt,pn,on),_t.setMatrixAt(W,Nt)}),_t.instanceMatrix.needsUpdate=!0,ti-=x,ti<=0&&f>2.6&&(Hn(),ti=(2.6+l()*3)*(.45+Yi*1.3)),Bn+=x;let G=Math.max(0,1-Bn/.9);ei.position.copy(yn),ei.intensity=G*900,Ri.position.copy(yn),Ri.scale.setScalar(1+Bn*9),Ri.material.opacity=G,fn.position.copy(yn),fn.scale.setScalar(1+Bn*22),fn.material.opacity=Math.max(0,1-Bn/1.1)*.45,Wi.forEach((E,W)=>{if(E.t+=x,E.t>2.5){Nt.makeScale(0,0,0),wn.setMatrixAt(W,Nt);return}E.v.y-=26*x,E.p.addScaledVector(E.v,x),E.p.y<.2&&(E.p.y=.2,E.v.multiplyScalar(.4),E.v.y=Math.abs(E.v.y)*.3);let re=.45*(1-E.t/2.5);Nt.compose(E.p,pn.setFromEuler(Ui.set(E.t*7,E.t*5,0)),on.setScalar(re)),wn.setMatrixAt(W,Nt),wn.setColorAt(W,E.c)}),wn.instanceMatrix.needsUpdate=!0,wn.instanceColor&&(wn.instanceColor.needsUpdate=!0),pa-=x,pa<=0&&(ma(),pa=(1.5+l()*2.2)*(1.6-Yi*1.1));for(let E=Js.length-1;E>=0;E--){let W=Js[E];if(W.t+=x,W.v.y-=9*x,W.p.addScaledVector(W.v,x),is(W.p,Ci.set((l()-.5)*1.5,-2-l()*2,(l()-.5)*1.5),[3,2.4,1.4],.45+l()*.3,.26,2.5),W.t>=W.fuse){let re=ns[W.col],Ue=ns[(W.col+2)%ns.length],Lt=t?60:110,bt=19+l()*8;for(let It=0;It<Lt;It++){let Un=l()*Math.PI*2,jt=Math.acos(2*l()-1),mn=bt*(.75+l()*.3);Ci.set(Math.sin(jt)*Math.cos(Un)*mn,Math.cos(jt)*mn,Math.sin(jt)*Math.sin(Un)*mn),is(W.p,Ci,It%5===0?Ue:re,1.6+l()*.9,.85+l()*.4,1.5)}Js.splice(E,1)}}Ss.forEach((E,W)=>{if(E.t>=E.life){E.t<50&&(E.t=99,Nt.makeScale(0,0,0),oi.setMatrixAt(W,Nt));return}E.t+=x,E.v.y-=7*x,E.v.multiplyScalar(Math.max(0,1-E.drag*x)),E.p.addScaledVector(E.v,x);let re=Math.max(0,1-E.t/E.life),Ue=re*re*(Math.sin(xt*40+W)>-.6?1:.3);Nt.compose(E.p,pn.identity(),on.setScalar(E.s*(.4+.6*re))),oi.setMatrixAt(W,Nt),oi.setColorAt(W,ni.setRGB(E.c.r*Ue,E.c.g*Ue,E.c.b*Ue))}),oi.instanceMatrix.needsUpdate=!0,oi.instanceColor&&(oi.instanceColor.needsUpdate=!0),rs+=(Math.max(0,Math.min(1,(.38-Yi)/.22))-rs)*Math.min(1,x*.5),a.uMood.value+=(Yi-a.uMood.value)*Math.min(1,x*.4);let ne=e.reduced?0:Math.floor(ss*rs);if(ci.count=ne,ne){let E=Et.target.x,W=Et.target.z;for(let re=0;re<ne;re++){let Ue=yi[re];Ue.y-=Ue.v*x,Ue.y<0&&(Ue.y+=80,Ue.x=(l()-.5)*170,Ue.z=(l()-.5)*170),Zt.set(E+Ue.x,Ue.y,W+Ue.z),on.set(.07,1.6,.07),Nt.compose(Zt,pn.set(.08,0,.04,1).normalize(),on),ci.setMatrixAt(re,Nt)}ci.instanceMatrix.needsUpdate=!0}Xi-=x,Xi<=0&&(qi=0,Xi=(9+l()*9)*(.5+Yi*1.1)),qi+=x,a.uFlash.value=e.reduced?0:qi<.07?.5:qi<.14?.08:qi<.22?.38:Math.max(0,.38-(qi-.22)*1.6),f<99&&nr(x),Mi.step(x,xt),Mi.glowG.visible=f>2.2;let V=f>2.6;ie.visible=f>1.6,Sn.visible=_t.visible=V;for(let E of $s)E.cone.visible=V;for(let E of ee)E.sp.visible=V;Ce.rotation.z=xt*.16,it.forEach((E,W)=>{let re=W/it.length*Zs+xt*.16;E.position.set(Math.cos(re)*15,Math.sin(re)*15-1.8,0)});{let E=Math.floor(xt*9);for(let W=0;W<ve;W++){let re=(W+E)%8;Fe.setColorAt(W,ni.setRGB(...re<2?[3,.5,1.8]:re<4?[.5,2,3.2]:re<6?[3.2,2.6,.6]:[1.4,.6,3]))}Fe.instanceColor.needsUpdate=!0}tt.rotation.y=xt*.55,Ge(x);{let E=xt*.045;ft.position.set(Math.cos(E)*118,74+Math.sin(xt*.3)*2,Math.sin(E)*118),ft.rotation.y=-E-Math.PI/2,ft.userData.tip.visible=Math.sin(xt*5)>0}for(let E=yt.length-1;E>=0;E--){let W=yt[E];W.t+=x;let re=W.t/W.life;if(re>=1){r.remove(W.sp),W.sp.material.map.dispose(),W.sp.material.dispose(),yt.splice(E,1);continue}let Ue=Math.min(1,W.t/.38),Lt=1+2.70158*Math.pow(Ue-1,3)+1.70158*Math.pow(Ue-1,2),bt=re>.84?(1-re)/.16:1,It=W.car&&W.car.pos?W.car.pos[0]:W.x,Un=W.car&&W.car.pos?W.car.pos[1]:W.z,jt=(W.car?8:W.y)+W.t*.45;W.sp.position.set(It,jt,Un);let mn=c.position.distanceTo(W.sp.position),vn=Math.max(.32,Math.min(2.6,mn/95))*Lt;W.sp.scale.set(10.8*vn,4.05*vn,1),W.sp.material.opacity=bt}{let E=a.uMood.value,W=Math.min(1,Math.max(0,(E-.25)/.25)),re=Math.min(1,Math.max(0,(E-.6)/.25))*.6,Ue=.62+.38*W,Lt=.12+.19*W,bt=.3+.32*W;Ue+=(1-Ue)*re,Lt+=(.55-Lt)*re,bt+=(.5-bt)*re;let It=[.068,.023,.25];o.setRGB(It[0]+(Math.pow(Ue,2.2)*.7-It[0])*.42,It[1]+(Math.pow(Lt,2.2)*.7-It[1])*.42,It[2]+(Math.pow(bt,2.2)*.7-It[2])*.42)}for(let E of St){let W=xt*E.sp+E.ph;E.g.position.set(Math.cos(W)*E.r,E.h+Math.sin(xt*1.3+E.ph)*1.5,Math.sin(W)*E.r),E.g.rotation.y=-W,E.rot.rotation.y=xt*30,E.cone.rotation.z=Math.sin(xt*.7+E.ph)*.35,E.red.visible=Math.sin(xt*6+E.ph)>0}for(let E of $s)E.cone.rotation.set(Math.sin(xt*E.sp+E.ph)*.5,0,Math.cos(xt*E.sp*.8+E.ph)*.5);if(Tn){let E=xt*.04+.9;c.position.set(Math.cos(E)*228,138,Math.sin(E)*228),Et.target.set(0,4,-10)}else if(Si>0){_a+=x;let E=Math.min(1,_a/3.4),W=E<.5?4*E*E*E:1-Math.pow(-2*E+2,3)/2;if($t==="story"){let[re,Ue]=Es(Math.round(Zi));Zn.lerp(re,.1),In.lerp(Ue,.1)}else $t==="drive"&&(an.chasePose(as,Qs),Zn.lerp(as,.1),In.lerp(Qs,.1));c.position.lerpVectors(Sr,Zn,W),Et.target.lerpVectors(xa,In,W),a.uFogD.value=On+(Pi-On)*W,E>=1&&(Si=0)}else $t==="story"&&Er.length?an.story(Zi,x):$t==="drive"?an.free(x):Ln&&Ln.pos?Et.target.lerp(Zt.set(Ln.pos[0],2,Ln.pos[1]),.08):(Ii+=x,Ii>18&&!e.reduced?to(x):Ii>10&&!Et.autoRotate&&(Et.autoRotate=!0));$t==="map"&&!Si?Et.update():c.lookAt(Et.target),e.onFrame&&Ei%3===0&&e.onFrame({cars:_e,boats:Xt,helis:St,garage:Ke.length,cam:c,controls:Et,half:Fn,beach:cn,pitch:Gi,me:an.S,mode:$t})}function nr(x){f+=x;let b=!0;for(let{m:R,list:G}of g){let ne=!1;for(let V=0;V<G.length;V++){let E=G[V];E.rd==null&&(E.rd=.15+Math.hypot(E.x,E.z)/300*2.2+l()*.35);let W=Math.min(1,Math.max(0,(f-E.rd)/.75));if(W<1&&(b=!1),E.rk===W)continue;E.rk=W,ne=!0;let re=W>=1?1:1+2.70158*Math.pow(W-1,3)+1.70158*Math.pow(W-1,2),Ue=Math.max(.001,re);Zt.set(E.x,(E.y+E.h/2)*Ue,E.z),on.set(E.w,E.h*Ue,E.d),pn.setFromEuler(Ui.set(E.rx||0,E.ry||0,E.rz||0)),Nt.compose(Zt,pn,on),R.setMatrixAt(V,Nt)}ne&&(R.instanceMatrix.needsUpdate=!0)}b&&(f=99)}let bi=new D,Di=new D,Sa=0;function to(x){Et.autoRotate=!1,Sa+=x;let b=Math.floor(Sa/9)%10,R=xt*.07;if(b>=5){let[ne,V]=Mi.shots[["airport","port","arena","bridge","site"][b-5]](),E=1-Math.exp(-x*.9);Et.target.lerp(V,E),c.position.lerp(ne,E*.8);return}if(b===1){let ne=_e.filter(V=>V.coin&&V.pos&&!V.coin.isNew).sort((V,E)=>(E.coin.heat||0)-(V.coin.heat||0))[0];ne?(bi.set(ne.pos[0],2,ne.pos[1]),Di.set(Math.cos(R)*30,17,Math.sin(R)*30)):(bi.set(0,6,0),Di.set(Math.cos(R)*150,85,Math.sin(R)*150))}else b===2?(bi.set(cn+38,3,Math.sin(xt*.08)*55),Di.set(-62,32,46)):b===3?(bi.set(U.x,15,U.z),Di.set(-34+Math.sin(R)*10,-2,44)):b===4&&St[0]?(bi.copy(St[0].g.position),Di.set(Math.cos(R)*38,10,Math.sin(R)*38)):(bi.set(0,6,0),Di.set(Math.cos(R)*150,85,Math.sin(R)*150));let G=1-Math.exp(-x*.9);Et.target.lerp(bi,G),c.position.lerp(Di.add(bi),G*.8)}function Ea(x){if(ui=0,Ma)return;let b=Math.max(0,Math.min(.05,(x-Ps)/1e3));Ps=x,!Is||Ei%2===0?(tr(e.reduced?b*.3:b),hi.render()):Ei++,ui=requestAnimationFrame(Ea)}let Ls=()=>{!ui&&!Ma&&(Ps=performance.now(),ui=requestAnimationFrame(Ea))};document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(ui),ui=0):Ls()}),tr(0),Ls();let Ar={setCoins:Te,setPerps:q,setWhales:Ks,setGarage:wt,home:()=>se,setMood(x){Yi=Math.max(0,Math.min(1,x))},chased:()=>ut,follow(x){let b=ge.get(x);b&&($t==="drive"&&Ts(),Ln=b.car,Et.autoRotate=!1)},followPerp(x){let b=Xt.find(R=>R.p.name===x);b&&($t==="drive"&&Ts(),Ln=b,Et.autoRotate=!1)},unfollow(){Ln=null},pause(x){Ma=x,x?(cancelAnimationFrame(ui),ui=0):Ls()},slow(x){Is=x},enter:js,entered:()=>!Tn,bubble:zt,setStory(x){Er=x.slice()},story(x){Zi=x,!Tn&&$t!=="story"&&($t="story",Et.enabled=!1,Ln=null,an.setActive(!1,e.onWheel))},roam(){Tn||$t==="drive"||ws(!1)},mode:()=>$t,overview(){Tn||(Ln=null,Ts())},toggleMap(){$t==="drive"?Ts():$t==="map"&&ws(!1)},skip(){Tn=!1,Si=0,a.uFogD.value=Pi,an.place(0),an.chasePose(c.position,Et.target),ws(!1),f=99;for(let{m:x,list:b}of g)b.forEach((R,G)=>{Zt.set(R.x,R.y+R.h/2,R.z),on.set(R.w,R.h,R.d),pn.setFromEuler(Ui.set(R.rx||0,R.ry||0,R.rz||0)),Nt.compose(Zt,pn,on),x.setMatrixAt(G,Nt)}),x.instanceMatrix.needsUpdate=!0},shot(x){let b=Math.round(x*30);for(let R=0;R<b;R++)tr(1/30);hi.render()},info:()=>({calls:n.info.render.calls,tris:n.info.render.triangles}),car:()=>({x:an.S.x,z:an.S.z,yaw:an.S.yaw,v:an.S.v,mode:$t}),canDrive:(x,b)=>an.open(x,b),launched:x=>Mi.launched(x),takeoff:x=>Mi.takeoff(x),setBanner:x=>Mi.setBanner(x),setArena:x=>Mi.setArena(x),view(x,b){Tn=!1,$t="map",Et.enabled=!0,an.setActive(!1),Si=0,a.uFogD.value=Pi,c.position.set(...x),Et.target.set(...b),Et.update()}};return window.__bloxWorld=Ar,Ar}export{Y_ as startWorld};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
