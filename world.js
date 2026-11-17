var gr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Df=0,vh=1,Nf=2;var Zu=1,Ff=2,ds=3,Fs=0,zn=1,On=2;var Ji=0,Jr=1,Pi=2,yh=3,Mh=4,Of=5,ar=100,zf=101,Bf=102,Sh=103,Eh=104,Hf=200,kf=201,Vf=202,Gf=203,uc=204,fc=205,Wf=206,Xf=207,qf=208,Yf=209,Zf=210,Jf=211,Kf=212,$f=213,jf=214,Qf=0,ed=1,td=2,Lo=3,nd=4,id=5,sd=6,rd=7,Kc=0,ad=1,od=2,Ds=0,$c=1,jc=2,Qc=3,Za=4,ld=5,eh=6;var Ju=300,jr=301,Qr=302,dc=303,pc=304,ol=306,mc=1e3,Ci=1001,gc=1002,vn=1003,bh=1004;var Pl=1005;var mi=1006,cd=1007;var Oa=1008;var Ns=1009,hd=1010,ud=1011,th=1012,Ku=1013,Ls=1014,Us=1015,Ii=1016,$u=1017,ju=1018,cr=1020,fd=1021,ri=1023,dd=1024,pd=1025,hr=1026,ea=1027,md=1028,Qu=1029,gd=1030,ef=1031,tf=1033,Il=33776,Ll=33777,Ul=33778,Dl=33779,wh=35840,Th=35841,Ah=35842,Rh=35843,nf=36196,Ch=37492,Ph=37496,Ih=37808,Lh=37809,Uh=37810,Dh=37811,Nh=37812,Fh=37813,Oh=37814,zh=37815,Bh=37816,Hh=37817,kh=37818,Vh=37819,Gh=37820,Wh=37821,Nl=36492,Xh=36494,qh=36495,xd=36283,Yh=36284,Zh=36285,Jh=36286;var Uo=2300,Do=2301,Fl=2302,Kh=2400,$h=2401,jh=2402;var sf=3e3,ur=3001,_d=3200,vd=3201,rf=0,yd=1,gi="",Xt="srgb",gs="srgb-linear",nh="display-p3",ll="display-p3-linear",No="linear",Zt="srgb",Fo="rec709",Oo="p3";var Tr=7680;var Qh=519,Md=512,Sd=513,Ed=514,af=515,bd=516,wd=517,Td=518,Ad=519,xc=35044;var eu="300 es",_c=1035,ps=2e3,zo=2001,Ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tu=1234567,Ua=Math.PI/180,za=180/Math.PI;function ms(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]).toLowerCase()}function bn(i,e,t){return Math.max(e,Math.min(t,i))}function ih(i,e){return(i%e+e)%e}function Rd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Cd(i,e,t){return i!==e?(t-i)/(e-i):0}function Da(i,e,t){return(1-t)*i+t*e}function Pd(i,e,t,n){return Da(i,e,1-Math.exp(-t*n))}function Id(i,e=1){return e-Math.abs(ih(i,e*2)-e)}function Ld(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ud(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Dd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Nd(i,e){return i+Math.random()*(e-i)}function Fd(i){return i*(.5-Math.random())}function Od(i){i!==void 0&&(tu=i);let e=tu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zd(i){return i*Ua}function Bd(i){return i*za}function vc(i){return(i&i-1)===0&&i!==0}function Hd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kd(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),p=o((e-n)/2),m=r((n-e)/2),v=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*p,a*l);break;case"YZY":i.set(c*p,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*p,a*h,a*l);break;case"XZX":i.set(a*h,c*v,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*v,a*l);break;case"ZYZ":i.set(c*v,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var of={DEG2RAD:Ua,RAD2DEG:za,generateUUID:ms,clamp:bn,euclideanModulo:ih,mapLinear:Rd,inverseLerp:Cd,lerp:Da,damp:Pd,pingpong:Id,smoothstep:Ld,smootherstep:Ud,randInt:Dd,randFloat:Nd,randFloatSpread:Fd,seededRandom:Od,degToRad:zd,radToDeg:Bd,isPowerOfTwo:vc,ceilPowerOfTwo:Hd,floorPowerOfTwo:Bo,setQuaternionFromProperEuler:kd,normalize:Wt,denormalize:Zi},ze=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},wt=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],m=n[5],v=n[8],_=s[0],g=s[3],f=s[6],L=s[1],y=s[4],z=s[7],P=s[2],O=s[5],N=s[8];return r[0]=o*_+a*L+c*P,r[3]=o*g+a*y+c*O,r[6]=o*f+a*z+c*N,r[1]=l*_+h*L+u*P,r[4]=l*g+h*y+u*O,r[7]=l*f+h*z+u*N,r[2]=p*_+m*L+v*P,r[5]=p*g+m*y+v*O,r[8]=p*f+m*z+v*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,p=a*c-h*r,m=l*r-o*c,v=t*u+n*p+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/v;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=p*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ol.makeScale(e,t)),this}rotate(e){return this.premultiply(Ol.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ol=new wt;function lf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ho(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vd(){let i=Ho("canvas");return i.style.display="block",i}var nu={};function Na(i){i in nu||(nu[i]=!0,console.warn(i))}var iu=new wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),su=new wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),io={[gs]:{transfer:No,primaries:Fo,toReference:i=>i,fromReference:i=>i},[Xt]:{transfer:Zt,primaries:Fo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ll]:{transfer:No,primaries:Oo,toReference:i=>i.applyMatrix3(su),fromReference:i=>i.applyMatrix3(iu)},[nh]:{transfer:Zt,primaries:Oo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(su),fromReference:i=>i.applyMatrix3(iu).convertLinearToSRGB()}},Gd=new Set([gs,ll]),Bt={enabled:!0,_workingColorSpace:gs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Gd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=io[e].toReference,s=io[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return io[i].primaries},getTransfer:function(i){return i===gi?No:io[i].transfer}};function Kr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ar,ko=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ar===void 0&&(Ar=Ho("canvas")),Ar.width=e.width,Ar.height=e.height;let n=Ar.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ho("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Kr(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kr(t[n]/255)*255):t[n]=Kr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Wd=0,Vo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=ms(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bl(s[o].image)):r.push(Bl(s[o]))}else r=Bl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Bl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ko.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Xd=0,ai=class i extends Ki{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ci,s=Ci,r=mi,o=Oa,a=ri,c=Ns,l=i.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=ms(),this.name="",this.source=new Vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ur?Xt:gi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mc:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mc:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xt?ur:sf}set encoding(e){Na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ur?Xt:gi}};ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=Ju;ai.DEFAULT_ANISOTROPY=1;var Ht=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],p=c[1],m=c[5],v=c[9],_=c[2],g=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(v+g)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,z=(m+1)/2,P=(f+1)/2,O=(h+p)/4,N=(u+_)/4,le=(v+g)/4;return y>z&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=O/n,r=N/n):z>P?z<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(z),n=O/s,r=le/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=N/r,s=le/r),this.set(n,s,r,t),this}let L=Math.sqrt((g-v)*(g-v)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(L)<.001&&(L=1),this.x=(g-v)/L,this.y=(u-_)/L,this.z=(p-h)/L,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yc=class extends Ki{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Na("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ur?Xt:gi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ai(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Vo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qn=class extends yc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Go=class extends ai{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mc=class extends ai{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],p=r[o+0],m=r[o+1],v=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(u!==_||c!==p||l!==m||h!==v){let g=1-a,f=c*p+l*m+h*v+u*_,L=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let P=Math.sqrt(y),O=Math.atan2(P,f*L);g=Math.sin(g*O)/P,a=Math.sin(a*O)/P}let z=a*L;if(c=c*g+p*z,l=l*g+m*z,h=h*g+v*z,u=u*g+_*z,g===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],p=r[o+1],m=r[o+2],v=r[o+3];return e[t]=a*v+h*u+c*m-l*p,e[t+1]=c*v+h*p+l*u-a*m,e[t+2]=l*v+h*m+a*p-c*u,e[t+3]=h*v-a*u-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),p=c(n/2),m=c(s/2),v=c(r/2);switch(o){case"XYZ":this._x=p*h*u+l*m*v,this._y=l*m*u-p*h*v,this._z=l*h*v+p*m*u,this._w=l*h*u-p*m*v;break;case"YXZ":this._x=p*h*u+l*m*v,this._y=l*m*u-p*h*v,this._z=l*h*v-p*m*u,this._w=l*h*u+p*m*v;break;case"ZXY":this._x=p*h*u-l*m*v,this._y=l*m*u+p*h*v,this._z=l*h*v+p*m*u,this._w=l*h*u-p*m*v;break;case"ZYX":this._x=p*h*u-l*m*v,this._y=l*m*u+p*h*v,this._z=l*h*v-p*m*u,this._w=l*h*u+p*m*v;break;case"YZX":this._x=p*h*u+l*m*v,this._y=l*m*u+p*h*v,this._z=l*h*v-p*m*u,this._w=l*h*u-p*m*v;break;case"XZY":this._x=p*h*u-l*m*v,this._y=l*m*u-p*h*v,this._z=l*h*v+p*m*u,this._w=l*h*u+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],p=n+a+u;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ru.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hl.copy(this).projectOnVector(e),this.sub(Hl)}reflect(e){return this.sub(Hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hl=new F,ru=new yn,xs=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wi):wi.fromBufferAttribute(r,o),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),so.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(e.matrixWorld),this.union(so)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),ro.subVectors(this.max,Ea),Rr.subVectors(e.a,Ea),Cr.subVectors(e.b,Ea),Pr.subVectors(e.c,Ea),As.subVectors(Cr,Rr),Rs.subVectors(Pr,Cr),tr.subVectors(Rr,Pr);let t=[0,-As.z,As.y,0,-Rs.z,Rs.y,0,-tr.z,tr.y,As.z,0,-As.x,Rs.z,0,-Rs.x,tr.z,0,-tr.x,-As.y,As.x,0,-Rs.y,Rs.x,0,-tr.y,tr.x,0];return!kl(t,Rr,Cr,Pr,ro)||(t=[1,0,0,0,1,0,0,0,1],!kl(t,Rr,Cr,Pr,ro))?!1:(ao.crossVectors(As,Rs),t=[ao.x,ao.y,ao.z],kl(t,Rr,Cr,Pr,ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ls[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ls[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ls[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ls[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ls[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ls[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ls[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ls[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ls),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ls=[new F,new F,new F,new F,new F,new F,new F,new F],wi=new F,so=new xs,Rr=new F,Cr=new F,Pr=new F,As=new F,Rs=new F,tr=new F,Ea=new F,ro=new F,ao=new F,nr=new F;function kl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){nr.fromArray(i,r);let a=s.x*Math.abs(nr.x)+s.y*Math.abs(nr.y)+s.z*Math.abs(nr.z),c=e.dot(nr),l=t.dot(nr),h=n.dot(nr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var qd=new xs,ba=new F,Vl=new F,fr=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):qd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ba.subVectors(e,this.center);let t=ba.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ba,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ba.copy(e.center).add(Vl)),this.expandByPoint(ba.copy(e.center).sub(Vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},cs=new F,Gl=new F,oo=new F,Cs=new F,Wl=new F,lo=new F,Xl=new F,ta=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=cs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cs.copy(this.origin).addScaledVector(this.direction,t),cs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Gl.copy(e).add(t).multiplyScalar(.5),oo.copy(t).sub(e).normalize(),Cs.copy(this.origin).sub(Gl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(oo),a=Cs.dot(this.direction),c=-Cs.dot(oo),l=Cs.lengthSq(),h=Math.abs(1-o*o),u,p,m,v;if(h>0)if(u=o*c-a,p=o*a-c,v=r*h,u>=0)if(p>=-v)if(p<=v){let _=1/h;u*=_,p*=_,m=u*(u+o*p+2*a)+p*(o*u+p+2*c)+l}else p=r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*c)+l;else p<=-v?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+p*(p+2*c)+l):p<=v?(u=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+p*(p+2*c)+l);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Gl).addScaledVector(oo,p),m}intersectSphere(e,t){cs.subVectors(e.center,this.origin);let n=cs.dot(this.direction),s=cs.dot(cs)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,cs)!==null}intersectTriangle(e,t,n,s,r){Wl.subVectors(t,e),lo.subVectors(n,e),Xl.crossVectors(Wl,lo);let o=this.direction.dot(Xl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cs.subVectors(this.origin,e);let c=a*this.direction.dot(lo.crossVectors(Cs,lo));if(c<0)return null;let l=a*this.direction.dot(Wl.cross(Cs));if(l<0||c+l>o)return null;let h=-a*Cs.dot(Xl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ut=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,p,m,v,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,p,m,v,_,g)}set(e,t,n,s,r,o,a,c,l,h,u,p,m,v,_,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=p,f[3]=m,f[7]=v,f[11]=_,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ir.setFromMatrixColumn(e,0).length(),r=1/Ir.setFromMatrixColumn(e,1).length(),o=1/Ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let p=o*h,m=o*u,v=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+v*l,t[5]=p-_*l,t[9]=-a*c,t[2]=_-p*l,t[6]=v+m*l,t[10]=o*c}else if(e.order==="YXZ"){let p=c*h,m=c*u,v=l*h,_=l*u;t[0]=p+_*a,t[4]=v*a-m,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-v,t[6]=_+p*a,t[10]=o*c}else if(e.order==="ZXY"){let p=c*h,m=c*u,v=l*h,_=l*u;t[0]=p-_*a,t[4]=-o*u,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*h,t[9]=_-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let p=o*h,m=o*u,v=a*h,_=a*u;t[0]=c*h,t[4]=v*l-m,t[8]=p*l+_,t[1]=c*u,t[5]=_*l+p,t[9]=m*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let p=o*c,m=o*l,v=a*c,_=a*l;t[0]=c*h,t[4]=_-p*u,t[8]=v*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*u+v,t[10]=p-_*u}else if(e.order==="XZY"){let p=o*c,m=o*l,v=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=p*u+_,t[5]=o*h,t[9]=m*u-v,t[2]=v*u-m,t[6]=a*h,t[10]=_*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yd,e,Zd)}lookAt(e,t,n){let s=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ps.crossVectors(n,ii),Ps.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ps.crossVectors(n,ii)),Ps.normalize(),co.crossVectors(ii,Ps),s[0]=Ps.x,s[4]=co.x,s[8]=ii.x,s[1]=Ps.y,s[5]=co.y,s[9]=ii.y,s[2]=Ps.z,s[6]=co.z,s[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],m=n[13],v=n[2],_=n[6],g=n[10],f=n[14],L=n[3],y=n[7],z=n[11],P=n[15],O=s[0],N=s[4],le=s[8],E=s[12],C=s[1],J=s[5],oe=s[9],Me=s[13],B=s[2],q=s[6],ne=s[10],me=s[14],he=s[3],se=s[7],_e=s[11],ye=s[15];return r[0]=o*O+a*C+c*B+l*he,r[4]=o*N+a*J+c*q+l*se,r[8]=o*le+a*oe+c*ne+l*_e,r[12]=o*E+a*Me+c*me+l*ye,r[1]=h*O+u*C+p*B+m*he,r[5]=h*N+u*J+p*q+m*se,r[9]=h*le+u*oe+p*ne+m*_e,r[13]=h*E+u*Me+p*me+m*ye,r[2]=v*O+_*C+g*B+f*he,r[6]=v*N+_*J+g*q+f*se,r[10]=v*le+_*oe+g*ne+f*_e,r[14]=v*E+_*Me+g*me+f*ye,r[3]=L*O+y*C+z*B+P*he,r[7]=L*N+y*J+z*q+P*se,r[11]=L*le+y*oe+z*ne+P*_e,r[15]=L*E+y*Me+z*me+P*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],p=e[10],m=e[14],v=e[3],_=e[7],g=e[11],f=e[15];return v*(+r*c*u-s*l*u-r*a*p+n*l*p+s*a*m-n*c*m)+_*(+t*c*m-t*l*p+r*o*p-s*o*m+s*l*h-r*c*h)+g*(+t*l*u-t*a*m-r*o*u+n*o*m+r*a*h-n*l*h)+f*(-s*a*h-t*c*u+t*a*p+s*o*u-n*o*p+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],p=e[10],m=e[11],v=e[12],_=e[13],g=e[14],f=e[15],L=u*g*l-_*p*l+_*c*m-a*g*m-u*c*f+a*p*f,y=v*p*l-h*g*l-v*c*m+o*g*m+h*c*f-o*p*f,z=h*_*l-v*u*l+v*a*m-o*_*m-h*a*f+o*u*f,P=v*u*c-h*_*c-v*a*p+o*_*p+h*a*g-o*u*g,O=t*L+n*y+s*z+r*P;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/O;return e[0]=L*N,e[1]=(_*p*r-u*g*r-_*s*m+n*g*m+u*s*f-n*p*f)*N,e[2]=(a*g*r-_*c*r+_*s*l-n*g*l-a*s*f+n*c*f)*N,e[3]=(u*c*r-a*p*r-u*s*l+n*p*l+a*s*m-n*c*m)*N,e[4]=y*N,e[5]=(h*g*r-v*p*r+v*s*m-t*g*m-h*s*f+t*p*f)*N,e[6]=(v*c*r-o*g*r-v*s*l+t*g*l+o*s*f-t*c*f)*N,e[7]=(o*p*r-h*c*r+h*s*l-t*p*l-o*s*m+t*c*m)*N,e[8]=z*N,e[9]=(v*u*r-h*_*r-v*n*m+t*_*m+h*n*f-t*u*f)*N,e[10]=(o*_*r-v*a*r+v*n*l-t*_*l-o*n*f+t*a*f)*N,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*m-t*a*m)*N,e[12]=P*N,e[13]=(h*_*s-v*u*s+v*n*p-t*_*p-h*n*g+t*u*g)*N,e[14]=(v*a*s-o*_*s-v*n*c+t*_*c+o*n*g-t*a*g)*N,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*p+t*a*p)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,p=r*l,m=r*h,v=r*u,_=o*h,g=o*u,f=a*u,L=c*l,y=c*h,z=c*u,P=n.x,O=n.y,N=n.z;return s[0]=(1-(_+f))*P,s[1]=(m+z)*P,s[2]=(v-y)*P,s[3]=0,s[4]=(m-z)*O,s[5]=(1-(p+f))*O,s[6]=(g+L)*O,s[7]=0,s[8]=(v+y)*N,s[9]=(g-L)*N,s[10]=(1-(p+_))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ir.set(s[0],s[1],s[2]).length(),o=Ir.set(s[4],s[5],s[6]).length(),a=Ir.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ti.copy(this);let l=1/r,h=1/o,u=1/a;return Ti.elements[0]*=l,Ti.elements[1]*=l,Ti.elements[2]*=l,Ti.elements[4]*=h,Ti.elements[5]*=h,Ti.elements[6]*=h,Ti.elements[8]*=u,Ti.elements[9]*=u,Ti.elements[10]*=u,t.setFromRotationMatrix(Ti),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ps){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),m,v;if(a===ps)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===zo)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ps){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),p=(t+e)*l,m=(n+s)*h,v,_;if(a===ps)v=(o+r)*u,_=-2*u;else if(a===zo)v=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ir=new F,Ti=new Ut,Yd=new F(0,0,0),Zd=new F(1,1,1),Ps=new F,co=new F,ii=new F,au=new Ut,ou=new yn,_s=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(bn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(bn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-bn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(bn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-bn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(au,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ou.setFromEuler(this),this.setFromQuaternion(ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_s.DEFAULT_ORDER="XYZ";var Ba=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Jd=0,lu=new F,Lr=new yn,hs=new Ut,ho=new F,wa=new F,Kd=new F,$d=new yn,cu=new F(1,0,0),hu=new F(0,1,0),uu=new F(0,0,1),jd={type:"added"},Qd={type:"removed"},Bn=class i extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new _s,n=new yn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ut},normalMatrix:{value:new wt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(cu,e)}rotateY(e){return this.rotateOnAxis(hu,e)}rotateZ(e){return this.rotateOnAxis(uu,e)}translateOnAxis(e,t){return lu.copy(e).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cu,e)}translateY(e){return this.translateOnAxis(hu,e)}translateZ(e){return this.translateOnAxis(uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ho.copy(e):ho.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hs.lookAt(wa,ho,this.up):hs.lookAt(ho,wa,this.up),this.quaternion.setFromRotationMatrix(hs),s&&(hs.extractRotation(s.matrixWorld),Lr.setFromRotationMatrix(hs),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qd)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hs.multiply(e.parent.matrixWorld)),e.applyMatrix4(hs),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,Kd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,$d,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),p=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Bn.DEFAULT_UP=new F(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ai=new F,us=new F,ql=new F,fs=new F,Ur=new F,Dr=new F,fu=new F,Yl=new F,Zl=new F,Jl=new F,uo=!1,lr=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ai.subVectors(e,t),s.cross(Ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ai.subVectors(s,t),us.subVectors(n,t),ql.subVectors(e,t);let o=Ai.dot(Ai),a=Ai.dot(us),c=Ai.dot(ql),l=us.dot(us),h=us.dot(ql),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,m=(l*c-a*h)*p,v=(o*h-a*c)*p;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fs)===null?!1:fs.x>=0&&fs.y>=0&&fs.x+fs.y<=1}static getUV(e,t,n,s,r,o,a,c){return uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),uo=!0),this.getInterpolation(e,t,n,s,r,o,a,c)}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,fs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fs.x),c.addScaledVector(o,fs.y),c.addScaledVector(a,fs.z),c)}static isFrontFacing(e,t,n,s){return Ai.subVectors(n,t),us.subVectors(e,t),Ai.cross(us).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),us.subVectors(this.a,this.b),Ai.cross(us).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),uo=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ur.subVectors(s,n),Dr.subVectors(r,n),Yl.subVectors(e,n);let c=Ur.dot(Yl),l=Dr.dot(Yl);if(c<=0&&l<=0)return t.copy(n);Zl.subVectors(e,s);let h=Ur.dot(Zl),u=Dr.dot(Zl);if(h>=0&&u<=h)return t.copy(s);let p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ur,o);Jl.subVectors(e,r);let m=Ur.dot(Jl),v=Dr.dot(Jl);if(v>=0&&m<=v)return t.copy(r);let _=m*l-c*v;if(_<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(n).addScaledVector(Dr,a);let g=h*v-m*u;if(g<=0&&u-h>=0&&m-v>=0)return fu.subVectors(r,s),a=(u-h)/(u-h+(m-v)),t.copy(s).addScaledVector(fu,a);let f=1/(g+_+p);return o=_*f,a=p*f,t.copy(n).addScaledVector(Ur,o).addScaledVector(Dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Is={h:0,s:0,l:0},fo={h:0,s:0,l:0};function Kl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Bt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Bt.workingColorSpace){if(e=ih(e,1),t=bn(t,0,1),n=bn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Kl(o,r,e+1/3),this.g=Kl(o,r,e),this.b=Kl(o,r,e-1/3)}return Bt.toWorkingColorSpace(this,s),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let n=cf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}copyLinearToSRGB(e){return this.r=zl(e.r),this.g=zl(e.g),this.b=zl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Bt.fromWorkingColorSpace(Nn.copy(this),e),Math.round(bn(Nn.r*255,0,255))*65536+Math.round(bn(Nn.g*255,0,255))*256+Math.round(bn(Nn.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.fromWorkingColorSpace(Nn.copy(this),t);let n=Nn.r,s=Nn.g,r=Nn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Bt.workingColorSpace){return Bt.fromWorkingColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=Xt){Bt.fromWorkingColorSpace(Nn.copy(this),e);let t=Nn.r,n=Nn.g,s=Nn.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Is),this.setHSL(Is.h+e,Is.s+t,Is.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Is),e.getHSL(fo);let n=Da(Is.h,fo.h,t),s=Da(Is.s,fo.s,t),r=Da(Is.l,fo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nn=new Ue;Ue.NAMES=cf;var ep=0,Os=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=Jr,this.side=Fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=fc,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(n.blending=this.blending),this.side!==Fs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uc&&(n.blendSrc=this.blendSrc),this.blendDst!==fc&&(n.blendDst=this.blendDst),this.blendEquation!==ar&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Tt=class extends Os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var gn=new F,po=new ze,Jn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Us,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)po.fromBufferAttribute(this,t),po.applyMatrix3(e),this.setXY(t,po.x,po.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix3(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),s=Wt(s,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xc&&(e.usage=this.usage),e}};var Wo=class extends Jn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Xo=class extends Jn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var pn=class extends Jn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var tp=0,pi=new Ut,$l=new Bn,Nr=new F,si=new xs,Ta=new xs,En=new F,oi=class i extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lf(e)?Xo:Wo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new wt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,n){return pi.makeTranslation(e,t,n),this.applyMatrix4(pi),this}scale(e,t,n){return pi.makeScale(e,t,n),this.applyMatrix4(pi),this}lookAt(e){return $l.lookAt(e),$l.updateMatrix(),this.applyMatrix4($l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new pn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];si.setFromBufferAttribute(r),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ta.setFromBufferAttribute(a),this.morphTargetsRelative?(En.addVectors(si.min,Ta.min),si.expandByPoint(En),En.addVectors(si.max,Ta.max),si.expandByPoint(En)):(si.expandByPoint(Ta.min),si.expandByPoint(Ta.max))}si.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)En.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(En));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)En.fromBufferAttribute(a,l),c&&(Nr.fromBufferAttribute(e,l),En.add(Nr)),s=Math.max(s,n.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let C=0;C<a;C++)l[C]=new F,h[C]=new F;let u=new F,p=new F,m=new F,v=new ze,_=new ze,g=new ze,f=new F,L=new F;function y(C,J,oe){u.fromArray(s,C*3),p.fromArray(s,J*3),m.fromArray(s,oe*3),v.fromArray(o,C*2),_.fromArray(o,J*2),g.fromArray(o,oe*2),p.sub(u),m.sub(u),_.sub(v),g.sub(v);let Me=1/(_.x*g.y-g.x*_.y);isFinite(Me)&&(f.copy(p).multiplyScalar(g.y).addScaledVector(m,-_.y).multiplyScalar(Me),L.copy(m).multiplyScalar(_.x).addScaledVector(p,-g.x).multiplyScalar(Me),l[C].add(f),l[J].add(f),l[oe].add(f),h[C].add(L),h[J].add(L),h[oe].add(L))}let z=this.groups;z.length===0&&(z=[{start:0,count:n.length}]);for(let C=0,J=z.length;C<J;++C){let oe=z[C],Me=oe.start,B=oe.count;for(let q=Me,ne=Me+B;q<ne;q+=3)y(n[q+0],n[q+1],n[q+2])}let P=new F,O=new F,N=new F,le=new F;function E(C){N.fromArray(r,C*3),le.copy(N);let J=l[C];P.copy(J),P.sub(N.multiplyScalar(N.dot(J))).normalize(),O.crossVectors(le,J);let Me=O.dot(h[C])<0?-1:1;c[C*4]=P.x,c[C*4+1]=P.y,c[C*4+2]=P.z,c[C*4+3]=Me}for(let C=0,J=z.length;C<J;++C){let oe=z[C],Me=oe.start,B=oe.count;for(let q=Me,ne=Me+B;q<ne;q+=3)E(n[q+0]),E(n[q+1]),E(n[q+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new F,r=new F,o=new F,a=new F,c=new F,l=new F,h=new F,u=new F;if(e)for(let p=0,m=e.count;p<m;p+=3){let v=e.getX(p+0),_=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(c.length*h),m=0,v=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let f=0;f<h;f++)p[v++]=l[m++]}return new Jn(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let p=l[h],m=e(p,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){let m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},du=new Ut,ir=new ta,mo=new fr,pu=new F,Fr=new F,Or=new F,zr=new F,jl=new F,go=new F,xo=new ze,_o=new ze,vo=new ze,mu=new F,gu=new F,xu=new F,yo=new F,Mo=new F,ft=class extends Bn{constructor(e=new oi,t=new Tt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){go.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(jl.fromBufferAttribute(u,e),o?go.addScaledVector(jl,h):go.addScaledVector(jl.sub(t),h))}t.add(go)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(r),ir.copy(e.ray).recast(e.near),!(mo.containsPoint(ir.origin)===!1&&(ir.intersectSphere(mo,pu)===null||ir.origin.distanceToSquared(pu)>(e.far-e.near)**2))&&(du.copy(r).invert(),ir.copy(e.ray).applyMatrix4(du),!(n.boundingBox!==null&&ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ir)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=p.length;v<_;v++){let g=p[v],f=o[g.materialIndex],L=Math.max(g.start,m.start),y=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let z=L,P=y;z<P;z+=3){let O=a.getX(z),N=a.getX(z+1),le=a.getX(z+2);s=So(this,f,e,n,l,h,u,O,N,le),s&&(s.faceIndex=Math.floor(z/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let v=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let g=v,f=_;g<f;g+=3){let L=a.getX(g),y=a.getX(g+1),z=a.getX(g+2);s=So(this,o,e,n,l,h,u,L,y,z),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,_=p.length;v<_;v++){let g=p[v],f=o[g.materialIndex],L=Math.max(g.start,m.start),y=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let z=L,P=y;z<P;z+=3){let O=z,N=z+1,le=z+2;s=So(this,f,e,n,l,h,u,O,N,le),s&&(s.faceIndex=Math.floor(z/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let v=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let g=v,f=_;g<f;g+=3){let L=g,y=g+1,z=g+2;s=So(this,o,e,n,l,h,u,L,y,z),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function np(i,e,t,n,s,r,o,a){let c;if(e.side===zn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Fs,a),c===null)return null;Mo.copy(a),Mo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Mo);return l<t.near||l>t.far?null:{distance:l,point:Mo.clone(),object:i}}function So(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Fr),i.getVertexPosition(c,Or),i.getVertexPosition(l,zr);let h=np(i,e,t,n,Fr,Or,zr,yo);if(h){s&&(xo.fromBufferAttribute(s,a),_o.fromBufferAttribute(s,c),vo.fromBufferAttribute(s,l),h.uv=lr.getInterpolation(yo,Fr,Or,zr,xo,_o,vo,new ze)),r&&(xo.fromBufferAttribute(r,a),_o.fromBufferAttribute(r,c),vo.fromBufferAttribute(r,l),h.uv1=lr.getInterpolation(yo,Fr,Or,zr,xo,_o,vo,new ze),h.uv2=h.uv1),o&&(mu.fromBufferAttribute(o,a),gu.fromBufferAttribute(o,c),xu.fromBufferAttribute(o,l),h.normal=lr.getInterpolation(yo,Fr,Or,zr,mu,gu,xu,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new F,materialIndex:0};lr.getNormal(Fr,Or,zr,u.normal),h.face=u}return h}var dr=class i extends oi{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],p=0,m=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,s,o,2),v("x","z","y",1,-1,e,n,-t,s,o,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new pn(l,3)),this.setAttribute("normal",new pn(h,3)),this.setAttribute("uv",new pn(u,2));function v(_,g,f,L,y,z,P,O,N,le,E){let C=z/N,J=P/le,oe=z/2,Me=P/2,B=O/2,q=N+1,ne=le+1,me=0,he=0,se=new F;for(let _e=0;_e<ne;_e++){let ye=_e*J-Me;for(let U=0;U<q;U++){let k=U*C-oe;se[_]=k*L,se[g]=ye*y,se[f]=B,l.push(se.x,se.y,se.z),se[_]=0,se[g]=0,se[f]=O>0?1:-1,h.push(se.x,se.y,se.z),u.push(U/N),u.push(1-_e/le),me+=1}}for(let _e=0;_e<le;_e++)for(let ye=0;ye<N;ye++){let U=p+ye+q*_e,k=p+ye+q*(_e+1),ae=p+(ye+1)+q*(_e+1),be=p+(ye+1)+q*_e;c.push(U,k,be),c.push(k,ae,be),he+=6}a.addGroup(m,he,E),m+=he,p+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function na(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Wn(i){let e={};for(let t=0;t<i.length;t++){let n=na(i[t]);for(let s in n)e[s]=n[s]}return e}function ip(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hf(i){return i.getRenderTarget()===null?i.outputColorSpace:Bt.workingColorSpace}var Bs={clone:na,merge:Wn},sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends Os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sp,this.fragmentShader=rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=ip(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},qo=class extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=ps}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fn=class extends qo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=za*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return za*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ua*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Br=-90,Hr=1,Sc=class extends Bn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fn(Br,Hr,e,t);s.layers=this.layers,this.add(s);let r=new Fn(Br,Hr,e,t);r.layers=this.layers,this.add(r);let o=new Fn(Br,Hr,e,t);o.layers=this.layers,this.add(o);let a=new Fn(Br,Hr,e,t);a.layers=this.layers,this.add(a);let c=new Fn(Br,Hr,e,t);c.layers=this.layers,this.add(c);let l=new Fn(Br,Hr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ps)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,p,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},Yo=class extends ai{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:jr,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ec=class extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Na("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ur?Xt:gi),this.texture=new Yo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dr(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:na(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:Ji});r.uniforms.tEquirect.value=t;let o=new ft(s,r),a=t.minFilter;return t.minFilter===Oa&&(t.minFilter=mi),new Sc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ql=new F,ap=new F,op=new wt,Ri=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ql.subVectors(n,t).cross(ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ql),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||op.getNormalMatrix(e),s=this.coplanarPoint(Ql).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},sr=new fr,Eo=new F,Ha=class{constructor(e=new Ri,t=new Ri,n=new Ri,s=new Ri,r=new Ri,o=new Ri){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ps){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],p=s[7],m=s[8],v=s[9],_=s[10],g=s[11],f=s[12],L=s[13],y=s[14],z=s[15];if(n[0].setComponents(c-r,p-l,g-m,z-f).normalize(),n[1].setComponents(c+r,p+l,g+m,z+f).normalize(),n[2].setComponents(c+o,p+h,g+v,z+L).normalize(),n[3].setComponents(c-o,p-h,g-v,z-L).normalize(),n[4].setComponents(c-a,p-u,g-_,z-y).normalize(),t===ps)n[5].setComponents(c+a,p+u,g+_,z+y).normalize();else if(t===zo)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Eo.x=s.normal.x>0?e.max.x:e.min.x,Eo.y=s.normal.y>0?e.max.y:e.min.y,Eo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function uf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function lp(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,p=l.usage,m=u.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,u,p),l.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:v,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,u){let p=h.array,m=h._updateRange,v=h.updateRanges;if(i.bindBuffer(u,l),m.count===-1&&v.length===0&&i.bufferSubData(u,0,p),v.length!==0){for(let _=0,g=v.length;_<g;_++){let f=v[_];t?i.bufferSubData(u,f.start*p.BYTES_PER_ELEMENT,p,f.start,f.count):i.bufferSubData(u,f.start*p.BYTES_PER_ELEMENT,p.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let p=n.get(l);(!p||p.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var li=class i extends oi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,p=t/c,m=[],v=[],_=[],g=[];for(let f=0;f<h;f++){let L=f*p-o;for(let y=0;y<l;y++){let z=y*u-r;v.push(z,-L,0),_.push(0,0,1),g.push(y/a),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let L=0;L<a;L++){let y=L+l*f,z=L+l*(f+1),P=L+1+l*(f+1),O=L+1+l*f;m.push(y,z,O),m.push(z,P,O)}this.setIndex(m),this.setAttribute("position",new pn(v,3)),this.setAttribute("normal",new pn(_,3)),this.setAttribute("uv",new pn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hp=`#ifdef USE_ALPHAHASH
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
#endif`,up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mp=`#ifdef USE_AOMAP
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
#endif`,gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xp=`#ifdef USE_BATCHING
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
#endif`,_p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ep=`#ifdef USE_BUMPMAP
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lp=`#define PI 3.141592653589793
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
} // validated`,Up=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dp=`vec3 transformedNormal = objectNormal;
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
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hp=`
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
}`,kp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kp=`#ifdef USE_GRADIENTMAP
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
}`,$p=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tm=`uniform bool receiveShadow;
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
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,om=`PhysicalMaterial material;
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
#endif`,lm=`struct PhysicalMaterial {
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
}`,cm=`
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
#endif`,hm=`#if defined( RE_IndirectDiffuse )
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
#endif`,um=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vm=`#if defined( USE_POINTS_UV )
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
#endif`,ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Em=`#ifdef USE_MORPHNORMALS
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
#endif`,bm=`#ifdef USE_MORPHTARGETS
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
#endif`,wm=`#ifdef USE_MORPHTARGETS
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
#endif`,Tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Im=`#ifdef USE_NORMALMAP
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
#endif`,Lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Om=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ym=`float getShadowMask() {
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
}`,Zm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jm=`#ifdef USE_SKINNING
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
#endif`,Km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$m=`#ifdef USE_SKINNING
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
#endif`,jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ng=`#ifdef USE_TRANSMISSION
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
#endif`,ig=`#ifdef USE_TRANSMISSION
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cg=`uniform sampler2D t2D;
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`#include <common>
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
}`,mg=`#if DEPTH_PACKING == 3200
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
}`,gg=`#define DISTANCE
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
}`,xg=`#define DISTANCE
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`uniform float scale;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,Sg=`#include <common>
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
}`,Eg=`uniform vec3 diffuse;
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
}`,bg=`#define LAMBERT
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
}`,wg=`#define LAMBERT
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
}`,Tg=`#define MATCAP
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
}`,Ag=`#define MATCAP
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
}`,Rg=`#define NORMAL
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
}`,Cg=`#define NORMAL
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
}`,Pg=`#define PHONG
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
}`,Ig=`#define PHONG
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
}`,Lg=`#define STANDARD
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
}`,Ug=`#define STANDARD
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
}`,Dg=`#define TOON
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
}`,Ng=`#define TOON
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
}`,Fg=`uniform float size;
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
}`,Og=`uniform vec3 diffuse;
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
}`,zg=`#include <common>
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
}`,Bg=`uniform vec3 color;
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
}`,Hg=`uniform float rotation;
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
}`,kg=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:cp,alphahash_pars_fragment:hp,alphamap_fragment:up,alphamap_pars_fragment:fp,alphatest_fragment:dp,alphatest_pars_fragment:pp,aomap_fragment:mp,aomap_pars_fragment:gp,batching_pars_vertex:xp,batching_vertex:_p,begin_vertex:vp,beginnormal_vertex:yp,bsdfs:Mp,iridescence_fragment:Sp,bumpmap_pars_fragment:Ep,clipping_planes_fragment:bp,clipping_planes_pars_fragment:wp,clipping_planes_pars_vertex:Tp,clipping_planes_vertex:Ap,color_fragment:Rp,color_pars_fragment:Cp,color_pars_vertex:Pp,color_vertex:Ip,common:Lp,cube_uv_reflection_fragment:Up,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Np,displacementmap_vertex:Fp,emissivemap_fragment:Op,emissivemap_pars_fragment:zp,colorspace_fragment:Bp,colorspace_pars_fragment:Hp,envmap_fragment:kp,envmap_common_pars_fragment:Vp,envmap_pars_fragment:Gp,envmap_pars_vertex:Wp,envmap_physical_pars_fragment:nm,envmap_vertex:Xp,fog_vertex:qp,fog_pars_vertex:Yp,fog_fragment:Zp,fog_pars_fragment:Jp,gradientmap_pars_fragment:Kp,lightmap_fragment:$p,lightmap_pars_fragment:jp,lights_lambert_fragment:Qp,lights_lambert_pars_fragment:em,lights_pars_begin:tm,lights_toon_fragment:im,lights_toon_pars_fragment:sm,lights_phong_fragment:rm,lights_phong_pars_fragment:am,lights_physical_fragment:om,lights_physical_pars_fragment:lm,lights_fragment_begin:cm,lights_fragment_maps:hm,lights_fragment_end:um,logdepthbuf_fragment:fm,logdepthbuf_pars_fragment:dm,logdepthbuf_pars_vertex:pm,logdepthbuf_vertex:mm,map_fragment:gm,map_pars_fragment:xm,map_particle_fragment:_m,map_particle_pars_fragment:vm,metalnessmap_fragment:ym,metalnessmap_pars_fragment:Mm,morphcolor_vertex:Sm,morphnormal_vertex:Em,morphtarget_pars_vertex:bm,morphtarget_vertex:wm,normal_fragment_begin:Tm,normal_fragment_maps:Am,normal_pars_fragment:Rm,normal_pars_vertex:Cm,normal_vertex:Pm,normalmap_pars_fragment:Im,clearcoat_normal_fragment_begin:Lm,clearcoat_normal_fragment_maps:Um,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Nm,opaque_fragment:Fm,packing:Om,premultiplied_alpha_fragment:zm,project_vertex:Bm,dithering_fragment:Hm,dithering_pars_fragment:km,roughnessmap_fragment:Vm,roughnessmap_pars_fragment:Gm,shadowmap_pars_fragment:Wm,shadowmap_pars_vertex:Xm,shadowmap_vertex:qm,shadowmask_pars_fragment:Ym,skinbase_vertex:Zm,skinning_pars_vertex:Jm,skinning_vertex:Km,skinnormal_vertex:$m,specularmap_fragment:jm,specularmap_pars_fragment:Qm,tonemapping_fragment:eg,tonemapping_pars_fragment:tg,transmission_fragment:ng,transmission_pars_fragment:ig,uv_pars_fragment:sg,uv_pars_vertex:rg,uv_vertex:ag,worldpos_vertex:og,background_vert:lg,background_frag:cg,backgroundCube_vert:hg,backgroundCube_frag:ug,cube_vert:fg,cube_frag:dg,depth_vert:pg,depth_frag:mg,distanceRGBA_vert:gg,distanceRGBA_frag:xg,equirect_vert:_g,equirect_frag:vg,linedashed_vert:yg,linedashed_frag:Mg,meshbasic_vert:Sg,meshbasic_frag:Eg,meshlambert_vert:bg,meshlambert_frag:wg,meshmatcap_vert:Tg,meshmatcap_frag:Ag,meshnormal_vert:Rg,meshnormal_frag:Cg,meshphong_vert:Pg,meshphong_frag:Ig,meshphysical_vert:Lg,meshphysical_frag:Ug,meshtoon_vert:Dg,meshtoon_frag:Ng,points_vert:Fg,points_frag:Og,shadow_vert:zg,shadow_frag:Bg,sprite_vert:Hg,sprite_frag:kg},Ce={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},Yi={basic:{uniforms:Wn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Wn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Wn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Wn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Wn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Wn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Wn([Ce.points,Ce.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Wn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Wn([Ce.common,Ce.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Wn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Wn([Ce.sprite,Ce.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:Wn([Ce.common,Ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:Wn([Ce.lights,Ce.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};Yi.physical={uniforms:Wn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};var bo={r:0,b:0,g:0};function Vg(i,e,t,n,s,r,o){let a=new Ue(0),c=r===!0?0:1,l,h,u=null,p=0,m=null;function v(g,f){let L=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y===null?_(a,c):y&&y.isColor&&(_(y,1),L=!0);let z=i.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,o):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||L)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ol)?(h===void 0&&(h=new ft(new dr(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:na(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,O,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Bt.getTransfer(y.colorSpace)!==Zt,(u!==y||p!==y.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,p=y.version,m=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ft(new li(2,2),new ln({name:"BackgroundMaterial",uniforms:na(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Fs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Bt.getTransfer(y.colorSpace)!==Zt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||p!==y.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,p=y.version,m=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,f){g.getRGB(bo,hf(i)),n.buffers.color.setClear(bo.r,bo.g,bo.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(g,f=1){a.set(g),c=f,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,_(a,c)},render:v}}function Gg(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=g(null),l=c,h=!1;function u(B,q,ne,me,he){let se=!1;if(o){let _e=_(me,ne,q);l!==_e&&(l=_e,m(l.object)),se=f(B,me,ne,he),se&&L(B,me,ne,he)}else{let _e=q.wireframe===!0;(l.geometry!==me.id||l.program!==ne.id||l.wireframe!==_e)&&(l.geometry=me.id,l.program=ne.id,l.wireframe=_e,se=!0)}he!==null&&t.update(he,i.ELEMENT_ARRAY_BUFFER),(se||h)&&(h=!1,le(B,q,ne,me),he!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(he).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(B){return n.isWebGL2?i.bindVertexArray(B):r.bindVertexArrayOES(B)}function v(B){return n.isWebGL2?i.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function _(B,q,ne){let me=ne.wireframe===!0,he=a[B.id];he===void 0&&(he={},a[B.id]=he);let se=he[q.id];se===void 0&&(se={},he[q.id]=se);let _e=se[me];return _e===void 0&&(_e=g(p()),se[me]=_e),_e}function g(B){let q=[],ne=[],me=[];for(let he=0;he<s;he++)q[he]=0,ne[he]=0,me[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ne,attributeDivisors:me,object:B,attributes:{},index:null}}function f(B,q,ne,me){let he=l.attributes,se=q.attributes,_e=0,ye=ne.getAttributes();for(let U in ye)if(ye[U].location>=0){let ae=he[U],be=se[U];if(be===void 0&&(U==="instanceMatrix"&&B.instanceMatrix&&(be=B.instanceMatrix),U==="instanceColor"&&B.instanceColor&&(be=B.instanceColor)),ae===void 0||ae.attribute!==be||be&&ae.data!==be.data)return!0;_e++}return l.attributesNum!==_e||l.index!==me}function L(B,q,ne,me){let he={},se=q.attributes,_e=0,ye=ne.getAttributes();for(let U in ye)if(ye[U].location>=0){let ae=se[U];ae===void 0&&(U==="instanceMatrix"&&B.instanceMatrix&&(ae=B.instanceMatrix),U==="instanceColor"&&B.instanceColor&&(ae=B.instanceColor));let be={};be.attribute=ae,ae&&ae.data&&(be.data=ae.data),he[U]=be,_e++}l.attributes=he,l.attributesNum=_e,l.index=me}function y(){let B=l.newAttributes;for(let q=0,ne=B.length;q<ne;q++)B[q]=0}function z(B){P(B,0)}function P(B,q){let ne=l.newAttributes,me=l.enabledAttributes,he=l.attributeDivisors;ne[B]=1,me[B]===0&&(i.enableVertexAttribArray(B),me[B]=1),he[B]!==q&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,q),he[B]=q)}function O(){let B=l.newAttributes,q=l.enabledAttributes;for(let ne=0,me=q.length;ne<me;ne++)q[ne]!==B[ne]&&(i.disableVertexAttribArray(ne),q[ne]=0)}function N(B,q,ne,me,he,se,_e){_e===!0?i.vertexAttribIPointer(B,q,ne,he,se):i.vertexAttribPointer(B,q,ne,me,he,se)}function le(B,q,ne,me){if(n.isWebGL2===!1&&(B.isInstancedMesh||me.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let he=me.attributes,se=ne.getAttributes(),_e=q.defaultAttributeValues;for(let ye in se){let U=se[ye];if(U.location>=0){let k=he[ye];if(k===void 0&&(ye==="instanceMatrix"&&B.instanceMatrix&&(k=B.instanceMatrix),ye==="instanceColor"&&B.instanceColor&&(k=B.instanceColor)),k!==void 0){let ae=k.normalized,be=k.itemSize,xe=t.get(k);if(xe===void 0)continue;let De=xe.buffer,nt=xe.type,We=xe.bytesPerElement,$e=n.isWebGL2===!0&&(nt===i.INT||nt===i.UNSIGNED_INT||k.gpuType===Ku);if(k.isInterleavedBufferAttribute){let ht=k.data,Z=ht.stride,Dt=k.offset;if(ht.isInstancedInterleavedBuffer){for(let Ye=0;Ye<U.locationSize;Ye++)P(U.location+Ye,ht.meshPerAttribute);B.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ye=0;Ye<U.locationSize;Ye++)z(U.location+Ye);i.bindBuffer(i.ARRAY_BUFFER,De);for(let Ye=0;Ye<U.locationSize;Ye++)N(U.location+Ye,be/U.locationSize,nt,ae,Z*We,(Dt+be/U.locationSize*Ye)*We,$e)}else{if(k.isInstancedBufferAttribute){for(let ht=0;ht<U.locationSize;ht++)P(U.location+ht,k.meshPerAttribute);B.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ht=0;ht<U.locationSize;ht++)z(U.location+ht);i.bindBuffer(i.ARRAY_BUFFER,De);for(let ht=0;ht<U.locationSize;ht++)N(U.location+ht,be/U.locationSize,nt,ae,be*We,be/U.locationSize*ht*We,$e)}}else if(_e!==void 0){let ae=_e[ye];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(U.location,ae);break;case 3:i.vertexAttrib3fv(U.location,ae);break;case 4:i.vertexAttrib4fv(U.location,ae);break;default:i.vertexAttrib1fv(U.location,ae)}}}}O()}function E(){oe();for(let B in a){let q=a[B];for(let ne in q){let me=q[ne];for(let he in me)v(me[he].object),delete me[he];delete q[ne]}delete a[B]}}function C(B){if(a[B.id]===void 0)return;let q=a[B.id];for(let ne in q){let me=q[ne];for(let he in me)v(me[he].object),delete me[he];delete q[ne]}delete a[B.id]}function J(B){for(let q in a){let ne=a[q];if(ne[B.id]===void 0)continue;let me=ne[B.id];for(let he in me)v(me[he].object),delete me[he];delete ne[B.id]}}function oe(){Me(),h=!0,l!==c&&(l=c,m(l.object))}function Me(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:oe,resetDefaultState:Me,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfProgram:J,initAttributes:y,enableAttribute:z,disableUnusedAttributes:O}}function Wg(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,p){if(p===0)return;let m,v;if(s)m=i,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](r,h,u,p),t.update(u,r,p)}function l(h,u,p){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<p;v++)this.render(h[v],u[v]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,p);let v=0;for(let _=0;_<p;_++)v+=u[_];t.update(v,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Xg(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),L=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,z=o||e.has("OES_texture_float"),P=y&&z,O=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:g,maxVaryings:f,maxFragmentUniforms:L,vertexTextures:y,floatFragmentTextures:z,floatVertexTextures:P,maxSamples:O}}function qg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ri,a=new wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let m=u.length!==0||p||n!==0||s;return s=p,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,m){let v=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!s||v===null||v.length===0||r&&!g)r?h(null):l();else{let L=r?0:n,y=L*4,z=f.clippingState||null;c.value=z,z=h(v,p,y,m);for(let P=0;P!==y;++P)z[P]=t[P];f.clippingState=z,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=L}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,m,v){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,v!==!0||g===null){let f=m+_*4,L=p.matrixWorldInverse;a.getNormalMatrix(L),(g===null||g.length<f)&&(g=new Float32Array(f));for(let y=0,z=m;y!==_;++y,z+=4)o.copy(u[y]).applyMatrix4(L,a),o.normal.toArray(g,z),g[z+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Yg(i){let e=new WeakMap;function t(o,a){return a===dc?o.mapping=jr:a===pc&&(o.mapping=Qr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===dc||a===pc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ec(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ia=class extends qo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yr=4,_u=[.125,.215,.35,.446,.526,.582],or=20,ec=new ia,vu=new Ue,tc=null,nc=0,ic=0,rr=(1+Math.sqrt(5))/2,kr=1/rr,yu=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,rr,kr),new F(0,rr,-kr),new F(kr,0,rr),new F(-kr,0,rr),new F(rr,kr,0),new F(-rr,kr,0)],Zo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tc,nc,ic),e.scissorTest=!1,wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jr||e.mapping===Qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:Ii,format:ri,colorSpace:gs,depthBuffer:!1},s=Mu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zg(r)),this._blurMaterial=Jg(r,e,t)}return s}_compileMaterial(e){let t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,ec)}_sceneToCubeUV(e,t,n,s){let a=new Fn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(vu),h.toneMapping=Ds,h.autoClear=!1;let m=new Tt({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),v=new ft(new dr,m),_=!1,g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,_=!0):(m.color.copy(vu),_=!0);for(let f=0;f<6;f++){let L=f%3;L===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):L===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let y=this._cubeSize;wo(s,L*y,f>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===jr||e.mapping===Qr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;wo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ec)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=yu[(s-1)%yu.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ft(this._lodPlanes[s],l),p=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*or-1),_=r/v,g=isFinite(r)?1+Math.floor(h*_):or;g>or&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${or}`);let f=[],L=0;for(let N=0;N<or;++N){let le=N/_,E=Math.exp(-le*le/2);f.push(E),N===0?L+=E:N<g&&(L+=2*E)}for(let N=0;N<f.length;N++)f[N]=f[N]/L;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:y}=this;p.dTheta.value=v,p.mipInt.value=y-n;let z=this._sizeLods[s],P=3*z*(s>y-Yr?s-y+Yr:0),O=4*(this._cubeSize-z);wo(t,P,O,3*z,2*z),c.setRenderTarget(t),c.render(u,ec)}};function Zg(i){let e=[],t=[],n=[],s=i,r=i-Yr+1+_u.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Yr?c=_u[o-i+Yr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,_=3,g=2,f=1,L=new Float32Array(_*v*m),y=new Float32Array(g*v*m),z=new Float32Array(f*v*m);for(let O=0;O<m;O++){let N=O%3*2/3-1,le=O>2?0:-1,E=[N,le,0,N+2/3,le,0,N+2/3,le+1,0,N,le,0,N+2/3,le+1,0,N,le+1,0];L.set(E,_*v*O),y.set(p,g*v*O);let C=[O,O,O,O,O,O];z.set(C,f*v*O)}let P=new oi;P.setAttribute("position",new Jn(L,_)),P.setAttribute("uv",new Jn(y,g)),P.setAttribute("faceIndex",new Jn(z,f)),e.push(P),s>Yr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mu(i,e,t){let n=new qn(i,e,t);return n.texture.mapping=ol,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Jg(i,e,t){let n=new Float32Array(or),s=new F(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sh(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Su(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Eu(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function sh(){return`

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
	`}function Kg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===dc||c===pc,h=c===jr||c===Qr;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Zo(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Zo(i));let p=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $g(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function jg(i,e,t,n){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&e.remove(p.index);for(let v in p.attributes)e.remove(p.attributes[v]);for(let v in p.morphAttributes){let _=p.morphAttributes[v];for(let g=0,f=_.length;g<f;g++)e.remove(_[g])}p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function c(u){let p=u.attributes;for(let v in p)e.update(p[v],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let v in m){let _=m[v];for(let g=0,f=_.length;g<f;g++)e.update(_[g],i.ARRAY_BUFFER)}}function l(u){let p=[],m=u.index,v=u.attributes.position,_=0;if(m!==null){let L=m.array;_=m.version;for(let y=0,z=L.length;y<z;y+=3){let P=L[y+0],O=L[y+1],N=L[y+2];p.push(P,O,O,N,N,P)}}else if(v!==void 0){let L=v.array;_=v.version;for(let y=0,z=L.length/3-1;y<z;y+=3){let P=y+0,O=y+1,N=y+2;p.push(P,O,O,N,N,P)}}else return;let g=new(lf(p)?Xo:Wo)(p,1);g.version=_;let f=r.get(u);f&&e.remove(f),r.set(u,g)}function h(u){let p=r.get(u);if(p){let m=u.index;m!==null&&p.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Qg(i,e,t,n){let s=n.isWebGL2,r;function o(m){r=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,v){i.drawElements(r,v,a,m*c),t.update(v,r,1)}function u(m,v,_){if(_===0)return;let g,f;if(s)g=i,f="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[f](r,v,a,m*c,_),t.update(v,r,_)}function p(m,v,_){if(_===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<_;f++)this.render(m[f]/c,v[f]);else{g.multiDrawElementsWEBGL(r,v,0,a,m,0,_);let f=0;for(let L=0;L<_;L++)f+=v[L];t.update(f,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=p}function e0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function t0(i,e){return i[0]-e[0]}function n0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function i0(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new Ht,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let p=l.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=m!==void 0?m.length:0,_=r.get(h);if(_===void 0||_.count!==v){let B=function(){oe.dispose(),r.delete(h),h.removeEventListener("dispose",B)};_!==void 0&&_.texture.dispose();let L=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,z=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],N=h.morphAttributes.color||[],le=0;L===!0&&(le=1),y===!0&&(le=2),z===!0&&(le=3);let E=h.attributes.position.count*le,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let J=new Float32Array(E*C*4*v),oe=new Go(J,E,C,v);oe.type=Us,oe.needsUpdate=!0;let Me=le*4;for(let q=0;q<v;q++){let ne=P[q],me=O[q],he=N[q],se=E*C*4*q;for(let _e=0;_e<ne.count;_e++){let ye=_e*Me;L===!0&&(o.fromBufferAttribute(ne,_e),J[se+ye+0]=o.x,J[se+ye+1]=o.y,J[se+ye+2]=o.z,J[se+ye+3]=0),y===!0&&(o.fromBufferAttribute(me,_e),J[se+ye+4]=o.x,J[se+ye+5]=o.y,J[se+ye+6]=o.z,J[se+ye+7]=0),z===!0&&(o.fromBufferAttribute(he,_e),J[se+ye+8]=o.x,J[se+ye+9]=o.y,J[se+ye+10]=o.z,J[se+ye+11]=he.itemSize===4?o.w:1)}}_={count:v,texture:oe,size:new ze(E,C)},r.set(h,_),h.addEventListener("dispose",B)}let g=0;for(let L=0;L<p.length;L++)g+=p[L];let f=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",p),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let m=p===void 0?0:p.length,v=n[h.id];if(v===void 0||v.length!==m){v=[];for(let y=0;y<m;y++)v[y]=[y,0];n[h.id]=v}for(let y=0;y<m;y++){let z=v[y];z[0]=y,z[1]=p[y]}v.sort(n0);for(let y=0;y<8;y++)y<m&&v[y][1]?(a[y][0]=v[y][0],a[y][1]=v[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(t0);let _=h.morphAttributes.position,g=h.morphAttributes.normal,f=0;for(let y=0;y<8;y++){let z=a[y],P=z[0],O=z[1];P!==Number.MAX_SAFE_INTEGER&&O?(_&&h.getAttribute("morphTarget"+y)!==_[P]&&h.setAttribute("morphTarget"+y,_[P]),g&&h.getAttribute("morphNormal"+y)!==g[P]&&h.setAttribute("morphNormal"+y,g[P]),s[y]=O,f+=O):(_&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),g&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let L=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",L),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function s0(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Jo=class extends ai{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:hr,h!==hr&&h!==ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hr&&(n=Ls),n===void 0&&h===ea&&(n=cr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:vn,this.minFilter=c!==void 0?c:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ff=new ai,df=new Jo(1,1);df.compareFunction=af;var pf=new Go,mf=new Mc,gf=new Yo,bu=[],wu=[],Tu=new Float32Array(16),Au=new Float32Array(9),Ru=new Float32Array(4);function aa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=bu[s];if(r===void 0&&(r=new Float32Array(s),bu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Mn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function cl(i,e){let t=wu[e];t===void 0&&(t=new Int32Array(e),wu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function r0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function a0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;i.uniform2fv(this.addr,e),Sn(t,e)}}function o0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mn(t,e))return;i.uniform3fv(this.addr,e),Sn(t,e)}}function l0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;i.uniform4fv(this.addr,e),Sn(t,e)}}function c0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Sn(t,e)}else{if(Mn(t,n))return;Ru.set(n),i.uniformMatrix2fv(this.addr,!1,Ru),Sn(t,n)}}function h0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Sn(t,e)}else{if(Mn(t,n))return;Au.set(n),i.uniformMatrix3fv(this.addr,!1,Au),Sn(t,n)}}function u0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Sn(t,e)}else{if(Mn(t,n))return;Tu.set(n),i.uniformMatrix4fv(this.addr,!1,Tu),Sn(t,n)}}function f0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function d0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;i.uniform2iv(this.addr,e),Sn(t,e)}}function p0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;i.uniform3iv(this.addr,e),Sn(t,e)}}function m0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;i.uniform4iv(this.addr,e),Sn(t,e)}}function g0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function x0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;i.uniform2uiv(this.addr,e),Sn(t,e)}}function _0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;i.uniform3uiv(this.addr,e),Sn(t,e)}}function v0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;i.uniform4uiv(this.addr,e),Sn(t,e)}}function y0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?df:ff;t.setTexture2D(e||r,s)}function M0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||mf,s)}function S0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||gf,s)}function E0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||pf,s)}function b0(i){switch(i){case 5126:return r0;case 35664:return a0;case 35665:return o0;case 35666:return l0;case 35674:return c0;case 35675:return h0;case 35676:return u0;case 5124:case 35670:return f0;case 35667:case 35671:return d0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return x0;case 36295:return _0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return E0}}function w0(i,e){i.uniform1fv(this.addr,e)}function T0(i,e){let t=aa(e,this.size,2);i.uniform2fv(this.addr,t)}function A0(i,e){let t=aa(e,this.size,3);i.uniform3fv(this.addr,t)}function R0(i,e){let t=aa(e,this.size,4);i.uniform4fv(this.addr,t)}function C0(i,e){let t=aa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function P0(i,e){let t=aa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function I0(i,e){let t=aa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function L0(i,e){i.uniform1iv(this.addr,e)}function U0(i,e){i.uniform2iv(this.addr,e)}function D0(i,e){i.uniform3iv(this.addr,e)}function N0(i,e){i.uniform4iv(this.addr,e)}function F0(i,e){i.uniform1uiv(this.addr,e)}function O0(i,e){i.uniform2uiv(this.addr,e)}function z0(i,e){i.uniform3uiv(this.addr,e)}function B0(i,e){i.uniform4uiv(this.addr,e)}function H0(i,e,t){let n=this.cache,s=e.length,r=cl(t,s);Mn(n,r)||(i.uniform1iv(this.addr,r),Sn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ff,r[o])}function k0(i,e,t){let n=this.cache,s=e.length,r=cl(t,s);Mn(n,r)||(i.uniform1iv(this.addr,r),Sn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||mf,r[o])}function V0(i,e,t){let n=this.cache,s=e.length,r=cl(t,s);Mn(n,r)||(i.uniform1iv(this.addr,r),Sn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||gf,r[o])}function G0(i,e,t){let n=this.cache,s=e.length,r=cl(t,s);Mn(n,r)||(i.uniform1iv(this.addr,r),Sn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||pf,r[o])}function W0(i){switch(i){case 5126:return w0;case 35664:return T0;case 35665:return A0;case 35666:return R0;case 35674:return C0;case 35675:return P0;case 35676:return I0;case 5124:case 35670:return L0;case 35667:case 35671:return U0;case 35668:case 35672:return D0;case 35669:case 35673:return N0;case 5125:return F0;case 36294:return O0;case 36295:return z0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return G0}}var bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=b0(t.type)}},wc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=W0(t.type)}},Tc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},sc=/(\w+)(\])?(\[|\.)?/g;function Cu(i,e){i.seq.push(e),i.map[e.id]=e}function X0(i,e,t){let n=i.name,s=n.length;for(sc.lastIndex=0;;){let r=sc.exec(n),o=sc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Cu(t,l===void 0?new bc(a,i,e):new wc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Tc(a),Cu(t,u)),t=u}}}var $r=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);X0(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Pu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var q0=37297,Y0=0;function Z0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function J0(i){let e=Bt.getPrimaries(Bt.workingColorSpace),t=Bt.getPrimaries(i),n;switch(e===t?n="":e===Oo&&t===Fo?n="LinearDisplayP3ToLinearSRGB":e===Fo&&t===Oo&&(n="LinearSRGBToLinearDisplayP3"),i){case gs:case ll:return[n,"LinearTransferOETF"];case Xt:case nh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Iu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Z0(i.getShaderSource(e),o)}else return s}function K0(i,e){let t=J0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function $0(i,e){let t;switch(e){case $c:t="Linear";break;case jc:t="Reinhard";break;case Qc:t="OptimizedCineon";break;case Za:t="ACESFilmic";break;case eh:t="AgX";break;case ld:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function j0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zr).join(`
`)}function Q0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Zr).join(`
`)}function ex(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Zr(i){return i!==""}function Lu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(i){return i.replace(nx,sx)}var ix=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sx(i,e){let t=Et[e];if(t===void 0){let n=ix.get(e);if(n!==void 0)t=Et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ac(t)}var rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(i){return i.replace(rx,ax)}function ax(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ox(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ff?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ds&&(e="SHADOWMAP_TYPE_VSM"),e}function lx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case jr:case Qr:e="ENVMAP_TYPE_CUBE";break;case ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qr:e="ENVMAP_MODE_REFRACTION";break}return e}function hx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Kc:e="ENVMAP_BLENDING_MULTIPLY";break;case ad:e="ENVMAP_BLENDING_MIX";break;case od:e="ENVMAP_BLENDING_ADD";break}return e}function ux(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function fx(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=ox(t),l=lx(t),h=cx(t),u=hx(t),p=ux(t),m=t.isWebGL2?"":j0(t),v=Q0(t),_=ex(r),g=s.createProgram(),f,L,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zr).join(`
`),f.length>0&&(f+=`
`),L=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zr).join(`
`),L.length>0&&(L+=`
`)):(f=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),L=[m,Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ds?"#define TONE_MAPPING":"",t.toneMapping!==Ds?Et.tonemapping_pars_fragment:"",t.toneMapping!==Ds?$0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,K0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zr).join(`
`)),o=Ac(o),o=Lu(o,t),o=Uu(o,t),a=Ac(a),a=Lu(a,t),a=Uu(a,t),o=Du(o),a=Du(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,L=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+L);let z=y+f+o,P=y+L+a,O=Pu(s,s.VERTEX_SHADER,z),N=Pu(s,s.FRAGMENT_SHADER,P);s.attachShader(g,O),s.attachShader(g,N),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function le(oe){if(i.debug.checkShaderErrors){let Me=s.getProgramInfoLog(g).trim(),B=s.getShaderInfoLog(O).trim(),q=s.getShaderInfoLog(N).trim(),ne=!0,me=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,O,N);else{let he=Iu(s,O,"vertex"),se=Iu(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+Me+`
`+he+`
`+se)}else Me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Me):(B===""||q==="")&&(me=!1);me&&(oe.diagnostics={runnable:ne,programLog:Me,vertexShader:{log:B,prefix:f},fragmentShader:{log:q,prefix:L}})}s.deleteShader(O),s.deleteShader(N),E=new $r(s,g),C=tx(s,g)}let E;this.getUniforms=function(){return E===void 0&&le(this),E};let C;this.getAttributes=function(){return C===void 0&&le(this),C};let J=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=s.getProgramParameter(g,q0)),J},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=O,this.fragmentShader=N,this}var dx=0,Rc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cc(e),t.set(e,n)),n}},Cc=class{constructor(e){this.id=dx++,this.code=e,this.usedTimes=0}};function px(i,e,t,n,s,r,o){let a=new Ba,c=new Rc,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function g(E,C,J,oe,Me){let B=oe.fog,q=Me.geometry,ne=E.isMeshStandardMaterial?oe.environment:null,me=(E.isMeshStandardMaterial?t:e).get(E.envMap||ne),he=me&&me.mapping===ol?me.image.height:null,se=v[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let _e=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ye=_e!==void 0?_e.length:0,U=0;q.morphAttributes.position!==void 0&&(U=1),q.morphAttributes.normal!==void 0&&(U=2),q.morphAttributes.color!==void 0&&(U=3);let k,ae,be,xe;if(se){let cn=Yi[se];k=cn.vertexShader,ae=cn.fragmentShader}else k=E.vertexShader,ae=E.fragmentShader,c.update(E),be=c.getVertexShaderID(E),xe=c.getFragmentShaderID(E);let De=i.getRenderTarget(),nt=Me.isInstancedMesh===!0,We=Me.isBatchedMesh===!0,$e=!!E.map,ht=!!E.matcap,Z=!!me,Dt=!!E.aoMap,Ye=!!E.lightMap,je=!!E.bumpMap,Oe=!!E.normalMap,Nt=!!E.displacementMap,st=!!E.emissiveMap,A=!!E.metalnessMap,M=!!E.roughnessMap,K=E.anisotropy>0,ve=E.clearcoat>0,ge=E.iridescence>0,pe=E.sheen>0,Be=E.transmission>0,Ae=K&&!!E.anisotropyMap,Le=ve&&!!E.clearcoatMap,Qe=ve&&!!E.clearcoatNormalMap,it=ve&&!!E.clearcoatRoughnessMap,ue=ge&&!!E.iridescenceMap,Mt=ge&&!!E.iridescenceThicknessMap,D=pe&&!!E.sheenColorMap,fe=pe&&!!E.sheenRoughnessMap,Re=!!E.specularMap,Se=!!E.specularColorMap,Xe=!!E.specularIntensityMap,gt=Be&&!!E.transmissionMap,_t=Be&&!!E.thicknessMap,Pe=!!E.gradientMap,we=!!E.alphaMap,H=E.alphaTest>0,ce=!!E.alphaHash,Te=!!E.extensions,Ze=!!q.attributes.uv1,ke=!!q.attributes.uv2,rt=!!q.attributes.uv3,bt=Ds;return E.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(bt=i.toneMapping),{isWebGL2:h,shaderID:se,shaderType:E.type,shaderName:E.name,vertexShader:k,fragmentShader:ae,defines:E.defines,customVertexShaderID:be,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:We,instancing:nt,instancingColor:nt&&Me.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:De===null?i.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:gs,map:$e,matcap:ht,envMap:Z,envMapMode:Z&&me.mapping,envMapCubeUVHeight:he,aoMap:Dt,lightMap:Ye,bumpMap:je,normalMap:Oe,displacementMap:p&&Nt,emissiveMap:st,normalMapObjectSpace:Oe&&E.normalMapType===yd,normalMapTangentSpace:Oe&&E.normalMapType===rf,metalnessMap:A,roughnessMap:M,anisotropy:K,anisotropyMap:Ae,clearcoat:ve,clearcoatMap:Le,clearcoatNormalMap:Qe,clearcoatRoughnessMap:it,iridescence:ge,iridescenceMap:ue,iridescenceThicknessMap:Mt,sheen:pe,sheenColorMap:D,sheenRoughnessMap:fe,specularMap:Re,specularColorMap:Se,specularIntensityMap:Xe,transmission:Be,transmissionMap:gt,thicknessMap:_t,gradientMap:Pe,opaque:E.transparent===!1&&E.blending===Jr,alphaMap:we,alphaTest:H,alphaHash:ce,combine:E.combine,mapUv:$e&&_(E.map.channel),aoMapUv:Dt&&_(E.aoMap.channel),lightMapUv:Ye&&_(E.lightMap.channel),bumpMapUv:je&&_(E.bumpMap.channel),normalMapUv:Oe&&_(E.normalMap.channel),displacementMapUv:Nt&&_(E.displacementMap.channel),emissiveMapUv:st&&_(E.emissiveMap.channel),metalnessMapUv:A&&_(E.metalnessMap.channel),roughnessMapUv:M&&_(E.roughnessMap.channel),anisotropyMapUv:Ae&&_(E.anisotropyMap.channel),clearcoatMapUv:Le&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:D&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(E.sheenRoughnessMap.channel),specularMapUv:Re&&_(E.specularMap.channel),specularColorMapUv:Se&&_(E.specularColorMap.channel),specularIntensityMapUv:Xe&&_(E.specularIntensityMap.channel),transmissionMapUv:gt&&_(E.transmissionMap.channel),thicknessMapUv:_t&&_(E.thicknessMap.channel),alphaMapUv:we&&_(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Oe||K),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:Ze,vertexUv2s:ke,vertexUv3s:rt,pointsUvs:Me.isPoints===!0&&!!q.attributes.uv&&($e||we),fog:!!B,useFog:E.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Me.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:U,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&J.length>0,shadowMapType:i.shadowMap.type,toneMapping:bt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:$e&&E.map.isVideoTexture===!0&&Bt.getTransfer(E.map.colorSpace)===Zt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===On,flipSided:E.side===zn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Te&&E.extensions.derivatives===!0,extensionFragDepth:Te&&E.extensions.fragDepth===!0,extensionDrawBuffers:Te&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Te&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Te&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){let C=[];if(E.shaderID?C.push(E.shaderID):(C.push(E.customVertexShaderID),C.push(E.customFragmentShaderID)),E.defines!==void 0)for(let J in E.defines)C.push(J),C.push(E.defines[J]);return E.isRawShaderMaterial===!1&&(L(C,E),y(C,E),C.push(i.outputColorSpace)),C.push(E.customProgramCacheKey),C.join()}function L(E,C){E.push(C.precision),E.push(C.outputColorSpace),E.push(C.envMapMode),E.push(C.envMapCubeUVHeight),E.push(C.mapUv),E.push(C.alphaMapUv),E.push(C.lightMapUv),E.push(C.aoMapUv),E.push(C.bumpMapUv),E.push(C.normalMapUv),E.push(C.displacementMapUv),E.push(C.emissiveMapUv),E.push(C.metalnessMapUv),E.push(C.roughnessMapUv),E.push(C.anisotropyMapUv),E.push(C.clearcoatMapUv),E.push(C.clearcoatNormalMapUv),E.push(C.clearcoatRoughnessMapUv),E.push(C.iridescenceMapUv),E.push(C.iridescenceThicknessMapUv),E.push(C.sheenColorMapUv),E.push(C.sheenRoughnessMapUv),E.push(C.specularMapUv),E.push(C.specularColorMapUv),E.push(C.specularIntensityMapUv),E.push(C.transmissionMapUv),E.push(C.thicknessMapUv),E.push(C.combine),E.push(C.fogExp2),E.push(C.sizeAttenuation),E.push(C.morphTargetsCount),E.push(C.morphAttributeCount),E.push(C.numDirLights),E.push(C.numPointLights),E.push(C.numSpotLights),E.push(C.numSpotLightMaps),E.push(C.numHemiLights),E.push(C.numRectAreaLights),E.push(C.numDirLightShadows),E.push(C.numPointLightShadows),E.push(C.numSpotLightShadows),E.push(C.numSpotLightShadowsWithMaps),E.push(C.numLightProbes),E.push(C.shadowMapType),E.push(C.toneMapping),E.push(C.numClippingPlanes),E.push(C.numClipIntersection),E.push(C.depthPacking)}function y(E,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),E.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function z(E){let C=v[E.type],J;if(C){let oe=Yi[C];J=Bs.clone(oe.uniforms)}else J=E.uniforms;return J}function P(E,C){let J;for(let oe=0,Me=l.length;oe<Me;oe++){let B=l[oe];if(B.cacheKey===C){J=B,++J.usedTimes;break}}return J===void 0&&(J=new fx(i,C,E,r),l.push(J)),J}function O(E){if(--E.usedTimes===0){let C=l.indexOf(E);l[C]=l[l.length-1],l.pop(),E.destroy()}}function N(E){c.remove(E)}function le(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:z,acquireProgram:P,releaseProgram:O,releaseShaderCache:N,programs:l,dispose:le}}function mx(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function gx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Fu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ou(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,p,m,v,_,g){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:p,material:m,groupOrder:v,renderOrder:u.renderOrder,z:_,group:g},i[e]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=m,f.groupOrder=v,f.renderOrder=u.renderOrder,f.z=_,f.group=g),e++,f}function a(u,p,m,v,_,g){let f=o(u,p,m,v,_,g);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function c(u,p,m,v,_,g){let f=o(u,p,m,v,_,g);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,p){t.length>1&&t.sort(u||gx),n.length>1&&n.sort(p||Fu),s.length>1&&s.sort(p||Fu)}function h(){for(let u=e,p=i.length;u<p;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function xx(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Ou,i.set(n,[o])):s>=r.length?(o=new Ou,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function _x(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ue};break;case"SpotLight":t={position:new F,direction:new F,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function vx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var yx=0;function Mx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Sx(i,e){let t=new _x,n=vx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,o=new Ut,a=new Ut;function c(h,u){let p=0,m=0,v=0;for(let oe=0;oe<9;oe++)s.probe[oe].set(0,0,0);let _=0,g=0,f=0,L=0,y=0,z=0,P=0,O=0,N=0,le=0,E=0;h.sort(Mx);let C=u===!0?Math.PI:1;for(let oe=0,Me=h.length;oe<Me;oe++){let B=h[oe],q=B.color,ne=B.intensity,me=B.distance,he=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=q.r*ne*C,m+=q.g*ne*C,v+=q.b*ne*C;else if(B.isLightProbe){for(let se=0;se<9;se++)s.probe[se].addScaledVector(B.sh.coefficients[se],ne);E++}else if(B.isDirectionalLight){let se=t.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity*C),B.castShadow){let _e=B.shadow,ye=n.get(B);ye.shadowBias=_e.bias,ye.shadowNormalBias=_e.normalBias,ye.shadowRadius=_e.radius,ye.shadowMapSize=_e.mapSize,s.directionalShadow[_]=ye,s.directionalShadowMap[_]=he,s.directionalShadowMatrix[_]=B.shadow.matrix,z++}s.directional[_]=se,_++}else if(B.isSpotLight){let se=t.get(B);se.position.setFromMatrixPosition(B.matrixWorld),se.color.copy(q).multiplyScalar(ne*C),se.distance=me,se.coneCos=Math.cos(B.angle),se.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),se.decay=B.decay,s.spot[f]=se;let _e=B.shadow;if(B.map&&(s.spotLightMap[N]=B.map,N++,_e.updateMatrices(B),B.castShadow&&le++),s.spotLightMatrix[f]=_e.matrix,B.castShadow){let ye=n.get(B);ye.shadowBias=_e.bias,ye.shadowNormalBias=_e.normalBias,ye.shadowRadius=_e.radius,ye.shadowMapSize=_e.mapSize,s.spotShadow[f]=ye,s.spotShadowMap[f]=he,O++}f++}else if(B.isRectAreaLight){let se=t.get(B);se.color.copy(q).multiplyScalar(ne),se.halfWidth.set(B.width*.5,0,0),se.halfHeight.set(0,B.height*.5,0),s.rectArea[L]=se,L++}else if(B.isPointLight){let se=t.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity*C),se.distance=B.distance,se.decay=B.decay,B.castShadow){let _e=B.shadow,ye=n.get(B);ye.shadowBias=_e.bias,ye.shadowNormalBias=_e.normalBias,ye.shadowRadius=_e.radius,ye.shadowMapSize=_e.mapSize,ye.shadowCameraNear=_e.camera.near,ye.shadowCameraFar=_e.camera.far,s.pointShadow[g]=ye,s.pointShadowMap[g]=he,s.pointShadowMatrix[g]=B.shadow.matrix,P++}s.point[g]=se,g++}else if(B.isHemisphereLight){let se=t.get(B);se.skyColor.copy(B.color).multiplyScalar(ne*C),se.groundColor.copy(B.groundColor).multiplyScalar(ne*C),s.hemi[y]=se,y++}}L>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_FLOAT_1,s.rectAreaLTC2=Ce.LTC_FLOAT_2):(s.rectAreaLTC1=Ce.LTC_HALF_1,s.rectAreaLTC2=Ce.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_FLOAT_1,s.rectAreaLTC2=Ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_HALF_1,s.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=v;let J=s.hash;(J.directionalLength!==_||J.pointLength!==g||J.spotLength!==f||J.rectAreaLength!==L||J.hemiLength!==y||J.numDirectionalShadows!==z||J.numPointShadows!==P||J.numSpotShadows!==O||J.numSpotMaps!==N||J.numLightProbes!==E)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=L,s.point.length=g,s.hemi.length=y,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=O,s.spotShadowMap.length=O,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=O+N-le,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=le,s.numLightProbes=E,J.directionalLength=_,J.pointLength=g,J.spotLength=f,J.rectAreaLength=L,J.hemiLength=y,J.numDirectionalShadows=z,J.numPointShadows=P,J.numSpotShadows=O,J.numSpotMaps=N,J.numLightProbes=E,s.version=yx++)}function l(h,u){let p=0,m=0,v=0,_=0,g=0,f=u.matrixWorldInverse;for(let L=0,y=h.length;L<y;L++){let z=h[L];if(z.isDirectionalLight){let P=s.directional[p];P.direction.setFromMatrixPosition(z.matrixWorld),r.setFromMatrixPosition(z.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),p++}else if(z.isSpotLight){let P=s.spot[v];P.position.setFromMatrixPosition(z.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(z.matrixWorld),r.setFromMatrixPosition(z.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),v++}else if(z.isRectAreaLight){let P=s.rectArea[_];P.position.setFromMatrixPosition(z.matrixWorld),P.position.applyMatrix4(f),a.identity(),o.copy(z.matrixWorld),o.premultiply(f),a.extractRotation(o),P.halfWidth.set(z.width*.5,0,0),P.halfHeight.set(0,z.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(z.isPointLight){let P=s.point[m];P.position.setFromMatrixPosition(z.matrixWorld),P.position.applyMatrix4(f),m++}else if(z.isHemisphereLight){let P=s.hemi[g];P.direction.setFromMatrixPosition(z.matrixWorld),P.direction.transformDirection(f),g++}}}return{setup:c,setupView:l,state:s}}function zu(i,e){let t=new Sx(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Ex(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new zu(i,e),t.set(r,[c])):o>=a.length?(c=new zu(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var Pc=class extends Os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ic=class extends Os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wx=`uniform sampler2D shadow_pass;
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
}`;function Tx(i,e,t){let n=new Ha,s=new ze,r=new ze,o=new Ht,a=new Pc({depthPacking:vd}),c=new Ic,l={},h=t.maxTextureSize,u={[Fs]:zn,[zn]:Fs,[On]:On},p=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:bx,fragmentShader:wx}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let v=new oi;v.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ft(v,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zu;let f=this.type;this.render=function(O,N,le){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||O.length===0)return;let E=i.getRenderTarget(),C=i.getActiveCubeFace(),J=i.getActiveMipmapLevel(),oe=i.state;oe.setBlending(Ji),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);let Me=f!==ds&&this.type===ds,B=f===ds&&this.type!==ds;for(let q=0,ne=O.length;q<ne;q++){let me=O[q],he=me.shadow;if(he===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(he.autoUpdate===!1&&he.needsUpdate===!1)continue;s.copy(he.mapSize);let se=he.getFrameExtents();if(s.multiply(se),r.copy(he.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,he.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,he.mapSize.y=r.y)),he.map===null||Me===!0||B===!0){let ye=this.type!==ds?{minFilter:vn,magFilter:vn}:{};he.map!==null&&he.map.dispose(),he.map=new qn(s.x,s.y,ye),he.map.texture.name=me.name+".shadowMap",he.camera.updateProjectionMatrix()}i.setRenderTarget(he.map),i.clear();let _e=he.getViewportCount();for(let ye=0;ye<_e;ye++){let U=he.getViewport(ye);o.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),oe.viewport(o),he.updateMatrices(me,ye),n=he.getFrustum(),z(N,le,he.camera,me,this.type)}he.isPointLightShadow!==!0&&this.type===ds&&L(he,le),he.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(E,C,J)};function L(O,N){let le=e.update(_);p.defines.VSM_SAMPLES!==O.blurSamples&&(p.defines.VSM_SAMPLES=O.blurSamples,m.defines.VSM_SAMPLES=O.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new qn(s.x,s.y)),p.uniforms.shadow_pass.value=O.map.texture,p.uniforms.resolution.value=O.mapSize,p.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(N,null,le,p,_,null),m.uniforms.shadow_pass.value=O.mapPass.texture,m.uniforms.resolution.value=O.mapSize,m.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(N,null,le,m,_,null)}function y(O,N,le,E){let C=null,J=le.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(J!==void 0)C=J;else if(C=le.isPointLight===!0?c:a,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let oe=C.uuid,Me=N.uuid,B=l[oe];B===void 0&&(B={},l[oe]=B);let q=B[Me];q===void 0&&(q=C.clone(),B[Me]=q,N.addEventListener("dispose",P)),C=q}if(C.visible=N.visible,C.wireframe=N.wireframe,E===ds?C.side=N.shadowSide!==null?N.shadowSide:N.side:C.side=N.shadowSide!==null?N.shadowSide:u[N.side],C.alphaMap=N.alphaMap,C.alphaTest=N.alphaTest,C.map=N.map,C.clipShadows=N.clipShadows,C.clippingPlanes=N.clippingPlanes,C.clipIntersection=N.clipIntersection,C.displacementMap=N.displacementMap,C.displacementScale=N.displacementScale,C.displacementBias=N.displacementBias,C.wireframeLinewidth=N.wireframeLinewidth,C.linewidth=N.linewidth,le.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let oe=i.properties.get(C);oe.light=le}return C}function z(O,N,le,E,C){if(O.visible===!1)return;if(O.layers.test(N.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===ds)&&(!O.frustumCulled||n.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,O.matrixWorld);let Me=e.update(O),B=O.material;if(Array.isArray(B)){let q=Me.groups;for(let ne=0,me=q.length;ne<me;ne++){let he=q[ne],se=B[he.materialIndex];if(se&&se.visible){let _e=y(O,se,E,C);O.onBeforeShadow(i,O,N,le,Me,_e,he),i.renderBufferDirect(le,null,Me,_e,O,he),O.onAfterShadow(i,O,N,le,Me,_e,he)}}}else if(B.visible){let q=y(O,B,E,C);O.onBeforeShadow(i,O,N,le,Me,q,null),i.renderBufferDirect(le,null,Me,q,O,null),O.onAfterShadow(i,O,N,le,Me,q,null)}}let oe=O.children;for(let Me=0,B=oe.length;Me<B;Me++)z(oe[Me],N,le,E,C)}function P(O){O.target.removeEventListener("dispose",P);for(let le in l){let E=l[le],C=O.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function Ax(i,e,t){let n=t.isWebGL2;function s(){let H=!1,ce=new Ht,Te=null,Ze=new Ht(0,0,0,0);return{setMask:function(ke){Te!==ke&&!H&&(i.colorMask(ke,ke,ke,ke),Te=ke)},setLocked:function(ke){H=ke},setClear:function(ke,rt,bt,at,cn){cn===!0&&(ke*=at,rt*=at,bt*=at),ce.set(ke,rt,bt,at),Ze.equals(ce)===!1&&(i.clearColor(ke,rt,bt,at),Ze.copy(ce))},reset:function(){H=!1,Te=null,Ze.set(-1,0,0,0)}}}function r(){let H=!1,ce=null,Te=null,Ze=null;return{setTest:function(ke){ke?We(i.DEPTH_TEST):$e(i.DEPTH_TEST)},setMask:function(ke){ce!==ke&&!H&&(i.depthMask(ke),ce=ke)},setFunc:function(ke){if(Te!==ke){switch(ke){case Qf:i.depthFunc(i.NEVER);break;case ed:i.depthFunc(i.ALWAYS);break;case td:i.depthFunc(i.LESS);break;case Lo:i.depthFunc(i.LEQUAL);break;case nd:i.depthFunc(i.EQUAL);break;case id:i.depthFunc(i.GEQUAL);break;case sd:i.depthFunc(i.GREATER);break;case rd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=ke}},setLocked:function(ke){H=ke},setClear:function(ke){Ze!==ke&&(i.clearDepth(ke),Ze=ke)},reset:function(){H=!1,ce=null,Te=null,Ze=null}}}function o(){let H=!1,ce=null,Te=null,Ze=null,ke=null,rt=null,bt=null,at=null,cn=null;return{setTest:function(At){H||(At?We(i.STENCIL_TEST):$e(i.STENCIL_TEST))},setMask:function(At){ce!==At&&!H&&(i.stencilMask(At),ce=At)},setFunc:function(At,kt,mn){(Te!==At||Ze!==kt||ke!==mn)&&(i.stencilFunc(At,kt,mn),Te=At,Ze=kt,ke=mn)},setOp:function(At,kt,mn){(rt!==At||bt!==kt||at!==mn)&&(i.stencilOp(At,kt,mn),rt=At,bt=kt,at=mn)},setLocked:function(At){H=At},setClear:function(At){cn!==At&&(i.clearStencil(At),cn=At)},reset:function(){H=!1,ce=null,Te=null,Ze=null,ke=null,rt=null,bt=null,at=null,cn=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,p={},m={},v=new WeakMap,_=[],g=null,f=!1,L=null,y=null,z=null,P=null,O=null,N=null,le=null,E=new Ue(0,0,0),C=0,J=!1,oe=null,Me=null,B=null,q=null,ne=null,me=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),he=!1,se=0,_e=i.getParameter(i.VERSION);_e.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(_e)[1]),he=se>=1):_e.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),he=se>=2);let ye=null,U={},k=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),be=new Ht().fromArray(k),xe=new Ht().fromArray(ae);function De(H,ce,Te,Ze){let ke=new Uint8Array(4),rt=i.createTexture();i.bindTexture(H,rt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let bt=0;bt<Te;bt++)n&&(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)?i.texImage3D(ce,0,i.RGBA,1,1,Ze,0,i.RGBA,i.UNSIGNED_BYTE,ke):i.texImage2D(ce+bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ke);return rt}let nt={};nt[i.TEXTURE_2D]=De(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=De(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(nt[i.TEXTURE_2D_ARRAY]=De(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=De(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),We(i.DEPTH_TEST),c.setFunc(Lo),st(!1),A(vh),We(i.CULL_FACE),Oe(Ji);function We(H){p[H]!==!0&&(i.enable(H),p[H]=!0)}function $e(H){p[H]!==!1&&(i.disable(H),p[H]=!1)}function ht(H,ce){return m[H]!==ce?(i.bindFramebuffer(H,ce),m[H]=ce,n&&(H===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ce),H===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ce)),!0):!1}function Z(H,ce){let Te=_,Ze=!1;if(H)if(Te=v.get(ce),Te===void 0&&(Te=[],v.set(ce,Te)),H.isWebGLMultipleRenderTargets){let ke=H.texture;if(Te.length!==ke.length||Te[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,bt=ke.length;rt<bt;rt++)Te[rt]=i.COLOR_ATTACHMENT0+rt;Te.length=ke.length,Ze=!0}}else Te[0]!==i.COLOR_ATTACHMENT0&&(Te[0]=i.COLOR_ATTACHMENT0,Ze=!0);else Te[0]!==i.BACK&&(Te[0]=i.BACK,Ze=!0);Ze&&(t.isWebGL2?i.drawBuffers(Te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Te))}function Dt(H){return g!==H?(i.useProgram(H),g=H,!0):!1}let Ye={[ar]:i.FUNC_ADD,[zf]:i.FUNC_SUBTRACT,[Bf]:i.FUNC_REVERSE_SUBTRACT};if(n)Ye[Sh]=i.MIN,Ye[Eh]=i.MAX;else{let H=e.get("EXT_blend_minmax");H!==null&&(Ye[Sh]=H.MIN_EXT,Ye[Eh]=H.MAX_EXT)}let je={[Hf]:i.ZERO,[kf]:i.ONE,[Vf]:i.SRC_COLOR,[uc]:i.SRC_ALPHA,[Zf]:i.SRC_ALPHA_SATURATE,[qf]:i.DST_COLOR,[Wf]:i.DST_ALPHA,[Gf]:i.ONE_MINUS_SRC_COLOR,[fc]:i.ONE_MINUS_SRC_ALPHA,[Yf]:i.ONE_MINUS_DST_COLOR,[Xf]:i.ONE_MINUS_DST_ALPHA,[Jf]:i.CONSTANT_COLOR,[Kf]:i.ONE_MINUS_CONSTANT_COLOR,[$f]:i.CONSTANT_ALPHA,[jf]:i.ONE_MINUS_CONSTANT_ALPHA};function Oe(H,ce,Te,Ze,ke,rt,bt,at,cn,At){if(H===Ji){f===!0&&($e(i.BLEND),f=!1);return}if(f===!1&&(We(i.BLEND),f=!0),H!==Of){if(H!==L||At!==J){if((y!==ar||O!==ar)&&(i.blendEquation(i.FUNC_ADD),y=ar,O=ar),At)switch(H){case Jr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pi:i.blendFunc(i.ONE,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}z=null,P=null,N=null,le=null,E.set(0,0,0),C=0,L=H,J=At}return}ke=ke||ce,rt=rt||Te,bt=bt||Ze,(ce!==y||ke!==O)&&(i.blendEquationSeparate(Ye[ce],Ye[ke]),y=ce,O=ke),(Te!==z||Ze!==P||rt!==N||bt!==le)&&(i.blendFuncSeparate(je[Te],je[Ze],je[rt],je[bt]),z=Te,P=Ze,N=rt,le=bt),(at.equals(E)===!1||cn!==C)&&(i.blendColor(at.r,at.g,at.b,cn),E.copy(at),C=cn),L=H,J=!1}function Nt(H,ce){H.side===On?$e(i.CULL_FACE):We(i.CULL_FACE);let Te=H.side===zn;ce&&(Te=!Te),st(Te),H.blending===Jr&&H.transparent===!1?Oe(Ji):Oe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),a.setMask(H.colorWrite);let Ze=H.stencilWrite;l.setTest(Ze),Ze&&(l.setMask(H.stencilWriteMask),l.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),l.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),K(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?We(i.SAMPLE_ALPHA_TO_COVERAGE):$e(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(H){oe!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),oe=H)}function A(H){H!==Df?(We(i.CULL_FACE),H!==Me&&(H===vh?i.cullFace(i.BACK):H===Nf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$e(i.CULL_FACE),Me=H}function M(H){H!==B&&(he&&i.lineWidth(H),B=H)}function K(H,ce,Te){H?(We(i.POLYGON_OFFSET_FILL),(q!==ce||ne!==Te)&&(i.polygonOffset(ce,Te),q=ce,ne=Te)):$e(i.POLYGON_OFFSET_FILL)}function ve(H){H?We(i.SCISSOR_TEST):$e(i.SCISSOR_TEST)}function ge(H){H===void 0&&(H=i.TEXTURE0+me-1),ye!==H&&(i.activeTexture(H),ye=H)}function pe(H,ce,Te){Te===void 0&&(ye===null?Te=i.TEXTURE0+me-1:Te=ye);let Ze=U[Te];Ze===void 0&&(Ze={type:void 0,texture:void 0},U[Te]=Ze),(Ze.type!==H||Ze.texture!==ce)&&(ye!==Te&&(i.activeTexture(Te),ye=Te),i.bindTexture(H,ce||nt[H]),Ze.type=H,Ze.texture=ce)}function Be(){let H=U[ye];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Qe(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function it(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function D(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xe(H){be.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),be.copy(H))}function gt(H){xe.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),xe.copy(H))}function _t(H,ce){let Te=u.get(ce);Te===void 0&&(Te=new WeakMap,u.set(ce,Te));let Ze=Te.get(H);Ze===void 0&&(Ze=i.getUniformBlockIndex(ce,H.name),Te.set(H,Ze))}function Pe(H,ce){let Ze=u.get(ce).get(H);h.get(ce)!==Ze&&(i.uniformBlockBinding(ce,Ze,H.__bindingPointIndex),h.set(ce,Ze))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ye=null,U={},m={},v=new WeakMap,_=[],g=null,f=!1,L=null,y=null,z=null,P=null,O=null,N=null,le=null,E=new Ue(0,0,0),C=0,J=!1,oe=null,Me=null,B=null,q=null,ne=null,be.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:We,disable:$e,bindFramebuffer:ht,drawBuffers:Z,useProgram:Dt,setBlending:Oe,setMaterial:Nt,setFlipSided:st,setCullFace:A,setLineWidth:M,setPolygonOffset:K,setScissorTest:ve,activeTexture:ge,bindTexture:pe,unbindTexture:Be,compressedTexImage2D:Ae,compressedTexImage3D:Le,texImage2D:Re,texImage3D:Se,updateUBOMapping:_t,uniformBlockBinding:Pe,texStorage2D:D,texStorage3D:fe,texSubImage2D:Qe,texSubImage3D:it,compressedTexSubImage2D:ue,compressedTexSubImage3D:Mt,scissor:Xe,viewport:gt,reset:we}}function Rx(i,e,t,n,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,M){return m?new OffscreenCanvas(A,M):Ho("canvas")}function _(A,M,K,ve){let ge=1;if((A.width>ve||A.height>ve)&&(ge=ve/Math.max(A.width,A.height)),ge<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let pe=M?Bo:Math.floor,Be=pe(ge*A.width),Ae=pe(ge*A.height);u===void 0&&(u=v(Be,Ae));let Le=K?v(Be,Ae):u;return Le.width=Be,Le.height=Ae,Le.getContext("2d").drawImage(A,0,0,Be,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Be+"x"+Ae+")."),Le}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function g(A){return vc(A.width)&&vc(A.height)}function f(A){return a?!1:A.wrapS!==Ci||A.wrapT!==Ci||A.minFilter!==vn&&A.minFilter!==mi}function L(A,M){return A.generateMipmaps&&M&&A.minFilter!==vn&&A.minFilter!==mi}function y(A){i.generateMipmap(A)}function z(A,M,K,ve,ge=!1){if(a===!1)return M;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pe=M;if(M===i.RED&&(K===i.FLOAT&&(pe=i.R32F),K===i.HALF_FLOAT&&(pe=i.R16F),K===i.UNSIGNED_BYTE&&(pe=i.R8)),M===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(pe=i.R8UI),K===i.UNSIGNED_SHORT&&(pe=i.R16UI),K===i.UNSIGNED_INT&&(pe=i.R32UI),K===i.BYTE&&(pe=i.R8I),K===i.SHORT&&(pe=i.R16I),K===i.INT&&(pe=i.R32I)),M===i.RG&&(K===i.FLOAT&&(pe=i.RG32F),K===i.HALF_FLOAT&&(pe=i.RG16F),K===i.UNSIGNED_BYTE&&(pe=i.RG8)),M===i.RGBA){let Be=ge?No:Bt.getTransfer(ve);K===i.FLOAT&&(pe=i.RGBA32F),K===i.HALF_FLOAT&&(pe=i.RGBA16F),K===i.UNSIGNED_BYTE&&(pe=Be===Zt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(pe=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(pe=i.RGB5_A1)}return(pe===i.R16F||pe===i.R32F||pe===i.RG16F||pe===i.RG32F||pe===i.RGBA16F||pe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function P(A,M,K){return L(A,K)===!0||A.isFramebufferTexture&&A.minFilter!==vn&&A.minFilter!==mi?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function O(A){return A===vn||A===bh||A===Pl?i.NEAREST:i.LINEAR}function N(A){let M=A.target;M.removeEventListener("dispose",N),E(M),M.isVideoTexture&&h.delete(M)}function le(A){let M=A.target;M.removeEventListener("dispose",le),J(M)}function E(A){let M=n.get(A);if(M.__webglInit===void 0)return;let K=A.source,ve=p.get(K);if(ve){let ge=ve[M.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&C(A),Object.keys(ve).length===0&&p.delete(K)}n.remove(A)}function C(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let K=A.source,ve=p.get(K);delete ve[M.__cacheKey],o.memory.textures--}function J(A){let M=A.texture,K=n.get(A),ve=n.get(M);if(ve.__webglTexture!==void 0&&(i.deleteTexture(ve.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(K.__webglFramebuffer[ge]))for(let pe=0;pe<K.__webglFramebuffer[ge].length;pe++)i.deleteFramebuffer(K.__webglFramebuffer[ge][pe]);else i.deleteFramebuffer(K.__webglFramebuffer[ge]);K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer[ge])}else{if(Array.isArray(K.__webglFramebuffer))for(let ge=0;ge<K.__webglFramebuffer.length;ge++)i.deleteFramebuffer(K.__webglFramebuffer[ge]);else i.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&i.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let ge=0;ge<K.__webglColorRenderbuffer.length;ge++)K.__webglColorRenderbuffer[ge]&&i.deleteRenderbuffer(K.__webglColorRenderbuffer[ge]);K.__webglDepthRenderbuffer&&i.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ge=0,pe=M.length;ge<pe;ge++){let Be=n.get(M[ge]);Be.__webglTexture&&(i.deleteTexture(Be.__webglTexture),o.memory.textures--),n.remove(M[ge])}n.remove(M),n.remove(A)}let oe=0;function Me(){oe=0}function B(){let A=oe;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),oe+=1,A}function q(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function ne(A,M){let K=n.get(A);if(A.isVideoTexture&&Nt(A),A.isRenderTargetTexture===!1&&A.version>0&&K.__version!==A.version){let ve=A.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(K,A,M);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+M)}function me(A,M){let K=n.get(A);if(A.version>0&&K.__version!==A.version){be(K,A,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+M)}function he(A,M){let K=n.get(A);if(A.version>0&&K.__version!==A.version){be(K,A,M);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+M)}function se(A,M){let K=n.get(A);if(A.version>0&&K.__version!==A.version){xe(K,A,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+M)}let _e={[mc]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[gc]:i.MIRRORED_REPEAT},ye={[vn]:i.NEAREST,[bh]:i.NEAREST_MIPMAP_NEAREST,[Pl]:i.NEAREST_MIPMAP_LINEAR,[mi]:i.LINEAR,[cd]:i.LINEAR_MIPMAP_NEAREST,[Oa]:i.LINEAR_MIPMAP_LINEAR},U={[Md]:i.NEVER,[Ad]:i.ALWAYS,[Sd]:i.LESS,[af]:i.LEQUAL,[Ed]:i.EQUAL,[Td]:i.GEQUAL,[bd]:i.GREATER,[wd]:i.NOTEQUAL};function k(A,M,K){if(K?(i.texParameteri(A,i.TEXTURE_WRAP_S,_e[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,_e[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,_e[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ye[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ye[M.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==Ci||M.wrapT!==Ci)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,O(M.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,O(M.minFilter)),M.minFilter!==vn&&M.minFilter!==mi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ve=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===vn||M.minFilter!==Pl&&M.minFilter!==Oa||M.type===Us&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Ii&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(A,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function ae(A,M){let K=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",N));let ve=M.source,ge=p.get(ve);ge===void 0&&(ge={},p.set(ve,ge));let pe=q(M);if(pe!==A.__cacheKey){ge[pe]===void 0&&(ge[pe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),ge[pe].usedTimes++;let Be=ge[A.__cacheKey];Be!==void 0&&(ge[A.__cacheKey].usedTimes--,Be.usedTimes===0&&C(M)),A.__cacheKey=pe,A.__webglTexture=ge[pe].texture}return K}function be(A,M,K){let ve=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ve=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ve=i.TEXTURE_3D);let ge=ae(A,M),pe=M.source;t.bindTexture(ve,A.__webglTexture,i.TEXTURE0+K);let Be=n.get(pe);if(pe.version!==Be.__version||ge===!0){t.activeTexture(i.TEXTURE0+K);let Ae=Bt.getPrimaries(Bt.workingColorSpace),Le=M.colorSpace===gi?null:Bt.getPrimaries(M.colorSpace),Qe=M.colorSpace===gi||Ae===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let it=f(M)&&g(M.image)===!1,ue=_(M.image,it,!1,s.maxTextureSize);ue=st(M,ue);let Mt=g(ue)||a,D=r.convert(M.format,M.colorSpace),fe=r.convert(M.type),Re=z(M.internalFormat,D,fe,M.colorSpace,M.isVideoTexture);k(ve,M,Mt);let Se,Xe=M.mipmaps,gt=a&&M.isVideoTexture!==!0&&Re!==nf,_t=Be.__version===void 0||ge===!0,Pe=P(M,ue,Mt);if(M.isDepthTexture)Re=i.DEPTH_COMPONENT,a?M.type===Us?Re=i.DEPTH_COMPONENT32F:M.type===Ls?Re=i.DEPTH_COMPONENT24:M.type===cr?Re=i.DEPTH24_STENCIL8:Re=i.DEPTH_COMPONENT16:M.type===Us&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===hr&&Re===i.DEPTH_COMPONENT&&M.type!==th&&M.type!==Ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ls,fe=r.convert(M.type)),M.format===ea&&Re===i.DEPTH_COMPONENT&&(Re=i.DEPTH_STENCIL,M.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=cr,fe=r.convert(M.type))),_t&&(gt?t.texStorage2D(i.TEXTURE_2D,1,Re,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Re,ue.width,ue.height,0,D,fe,null));else if(M.isDataTexture)if(Xe.length>0&&Mt){gt&&_t&&t.texStorage2D(i.TEXTURE_2D,Pe,Re,Xe[0].width,Xe[0].height);for(let we=0,H=Xe.length;we<H;we++)Se=Xe[we],gt?t.texSubImage2D(i.TEXTURE_2D,we,0,0,Se.width,Se.height,D,fe,Se.data):t.texImage2D(i.TEXTURE_2D,we,Re,Se.width,Se.height,0,D,fe,Se.data);M.generateMipmaps=!1}else gt?(_t&&t.texStorage2D(i.TEXTURE_2D,Pe,Re,ue.width,ue.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,D,fe,ue.data)):t.texImage2D(i.TEXTURE_2D,0,Re,ue.width,ue.height,0,D,fe,ue.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){gt&&_t&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Re,Xe[0].width,Xe[0].height,ue.depth);for(let we=0,H=Xe.length;we<H;we++)Se=Xe[we],M.format!==ri?D!==null?gt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,Se.width,Se.height,ue.depth,D,Se.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,we,Re,Se.width,Se.height,ue.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,Se.width,Se.height,ue.depth,D,fe,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,we,Re,Se.width,Se.height,ue.depth,0,D,fe,Se.data)}else{gt&&_t&&t.texStorage2D(i.TEXTURE_2D,Pe,Re,Xe[0].width,Xe[0].height);for(let we=0,H=Xe.length;we<H;we++)Se=Xe[we],M.format!==ri?D!==null?gt?t.compressedTexSubImage2D(i.TEXTURE_2D,we,0,0,Se.width,Se.height,D,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,we,Re,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?t.texSubImage2D(i.TEXTURE_2D,we,0,0,Se.width,Se.height,D,fe,Se.data):t.texImage2D(i.TEXTURE_2D,we,Re,Se.width,Se.height,0,D,fe,Se.data)}else if(M.isDataArrayTexture)gt?(_t&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Re,ue.width,ue.height,ue.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,D,fe,ue.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,ue.width,ue.height,ue.depth,0,D,fe,ue.data);else if(M.isData3DTexture)gt?(_t&&t.texStorage3D(i.TEXTURE_3D,Pe,Re,ue.width,ue.height,ue.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,D,fe,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Re,ue.width,ue.height,ue.depth,0,D,fe,ue.data);else if(M.isFramebufferTexture){if(_t)if(gt)t.texStorage2D(i.TEXTURE_2D,Pe,Re,ue.width,ue.height);else{let we=ue.width,H=ue.height;for(let ce=0;ce<Pe;ce++)t.texImage2D(i.TEXTURE_2D,ce,Re,we,H,0,D,fe,null),we>>=1,H>>=1}}else if(Xe.length>0&&Mt){gt&&_t&&t.texStorage2D(i.TEXTURE_2D,Pe,Re,Xe[0].width,Xe[0].height);for(let we=0,H=Xe.length;we<H;we++)Se=Xe[we],gt?t.texSubImage2D(i.TEXTURE_2D,we,0,0,D,fe,Se):t.texImage2D(i.TEXTURE_2D,we,Re,D,fe,Se);M.generateMipmaps=!1}else gt?(_t&&t.texStorage2D(i.TEXTURE_2D,Pe,Re,ue.width,ue.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,D,fe,ue)):t.texImage2D(i.TEXTURE_2D,0,Re,D,fe,ue);L(M,Mt)&&y(ve),Be.__version=pe.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function xe(A,M,K){if(M.image.length!==6)return;let ve=ae(A,M),ge=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+K);let pe=n.get(ge);if(ge.version!==pe.__version||ve===!0){t.activeTexture(i.TEXTURE0+K);let Be=Bt.getPrimaries(Bt.workingColorSpace),Ae=M.colorSpace===gi?null:Bt.getPrimaries(M.colorSpace),Le=M.colorSpace===gi||Be===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Qe=M.isCompressedTexture||M.image[0].isCompressedTexture,it=M.image[0]&&M.image[0].isDataTexture,ue=[];for(let we=0;we<6;we++)!Qe&&!it?ue[we]=_(M.image[we],!1,!0,s.maxCubemapSize):ue[we]=it?M.image[we].image:M.image[we],ue[we]=st(M,ue[we]);let Mt=ue[0],D=g(Mt)||a,fe=r.convert(M.format,M.colorSpace),Re=r.convert(M.type),Se=z(M.internalFormat,fe,Re,M.colorSpace),Xe=a&&M.isVideoTexture!==!0,gt=pe.__version===void 0||ve===!0,_t=P(M,Mt,D);k(i.TEXTURE_CUBE_MAP,M,D);let Pe;if(Qe){Xe&&gt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Se,Mt.width,Mt.height);for(let we=0;we<6;we++){Pe=ue[we].mipmaps;for(let H=0;H<Pe.length;H++){let ce=Pe[H];M.format!==ri?fe!==null?Xe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H,0,0,ce.width,ce.height,fe,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H,Se,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H,0,0,ce.width,ce.height,fe,Re,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H,Se,ce.width,ce.height,0,fe,Re,ce.data)}}}else{Pe=M.mipmaps,Xe&&gt&&(Pe.length>0&&_t++,t.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Se,ue[0].width,ue[0].height));for(let we=0;we<6;we++)if(it){Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ue[we].width,ue[we].height,fe,Re,ue[we].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Se,ue[we].width,ue[we].height,0,fe,Re,ue[we].data);for(let H=0;H<Pe.length;H++){let Te=Pe[H].image[we].image;Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H+1,0,0,Te.width,Te.height,fe,Re,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H+1,Se,Te.width,Te.height,0,fe,Re,Te.data)}}else{Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,fe,Re,ue[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Se,fe,Re,ue[we]);for(let H=0;H<Pe.length;H++){let ce=Pe[H];Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H+1,0,0,fe,Re,ce.image[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H+1,Se,fe,Re,ce.image[we])}}}L(M,D)&&y(i.TEXTURE_CUBE_MAP),pe.__version=ge.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function De(A,M,K,ve,ge,pe){let Be=r.convert(K.format,K.colorSpace),Ae=r.convert(K.type),Le=z(K.internalFormat,Be,Ae,K.colorSpace);if(!n.get(M).__hasExternalTextures){let it=Math.max(1,M.width>>pe),ue=Math.max(1,M.height>>pe);ge===i.TEXTURE_3D||ge===i.TEXTURE_2D_ARRAY?t.texImage3D(ge,pe,Le,it,ue,M.depth,0,Be,Ae,null):t.texImage2D(ge,pe,Le,it,ue,0,Be,Ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Oe(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,ge,n.get(K).__webglTexture,0,je(M)):(ge===i.TEXTURE_2D||ge>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ve,ge,n.get(K).__webglTexture,pe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(A,M,K){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let ve=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(K||Oe(M)){let ge=M.depthTexture;ge&&ge.isDepthTexture&&(ge.type===Us?ve=i.DEPTH_COMPONENT32F:ge.type===Ls&&(ve=i.DEPTH_COMPONENT24));let pe=je(M);Oe(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,ve,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,ve,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,ve,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){let ve=je(M);K&&Oe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,i.DEPTH24_STENCIL8,M.width,M.height):Oe(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let ve=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ge=0;ge<ve.length;ge++){let pe=ve[ge],Be=r.convert(pe.format,pe.colorSpace),Ae=r.convert(pe.type),Le=z(pe.internalFormat,Be,Ae,pe.colorSpace),Qe=je(M);K&&Oe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Le,M.width,M.height):Oe(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe,Le,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Le,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function We(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ne(M.depthTexture,0);let ve=n.get(M.depthTexture).__webglTexture,ge=je(M);if(M.depthTexture.format===hr)Oe(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ve,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ve,0);else if(M.depthTexture.format===ea)Oe(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ve,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function $e(A){let M=n.get(A),K=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");We(M.__webglFramebuffer,A)}else if(K){M.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ve]),M.__webglDepthbuffer[ve]=i.createRenderbuffer(),nt(M.__webglDepthbuffer[ve],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),nt(M.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(A,M,K){let ve=n.get(A);M!==void 0&&De(ve.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&$e(A)}function Z(A){let M=A.texture,K=n.get(A),ve=n.get(M);A.addEventListener("dispose",le),A.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture()),ve.__version=M.version,o.memory.textures++);let ge=A.isWebGLCubeRenderTarget===!0,pe=A.isWebGLMultipleRenderTargets===!0,Be=g(A)||a;if(ge){K.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(a&&M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[Ae]=[];for(let Le=0;Le<M.mipmaps.length;Le++)K.__webglFramebuffer[Ae][Le]=i.createFramebuffer()}else K.__webglFramebuffer[Ae]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ae=0;Ae<M.mipmaps.length;Ae++)K.__webglFramebuffer[Ae]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(pe)if(s.drawBuffers){let Ae=A.texture;for(let Le=0,Qe=Ae.length;Le<Qe;Le++){let it=n.get(Ae[Le]);it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Oe(A)===!1){let Ae=pe?M:[M];K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Le=0;Le<Ae.length;Le++){let Qe=Ae[Le];K.__webglColorRenderbuffer[Le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Le]);let it=r.convert(Qe.format,Qe.colorSpace),ue=r.convert(Qe.type),Mt=z(Qe.internalFormat,it,ue,Qe.colorSpace,A.isXRRenderTarget===!0),D=je(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,D,Mt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,K.__webglColorRenderbuffer[Le])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(K.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,ve.__webglTexture),k(i.TEXTURE_CUBE_MAP,M,Be);for(let Ae=0;Ae<6;Ae++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let Le=0;Le<M.mipmaps.length;Le++)De(K.__webglFramebuffer[Ae][Le],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Le);else De(K.__webglFramebuffer[Ae],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);L(M,Be)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){let Ae=A.texture;for(let Le=0,Qe=Ae.length;Le<Qe;Le++){let it=Ae[Le],ue=n.get(it);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),k(i.TEXTURE_2D,it,Be),De(K.__webglFramebuffer,A,it,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,0),L(it,Be)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let Ae=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?Ae=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ae,ve.__webglTexture),k(Ae,M,Be),a&&M.mipmaps&&M.mipmaps.length>0)for(let Le=0;Le<M.mipmaps.length;Le++)De(K.__webglFramebuffer[Le],A,M,i.COLOR_ATTACHMENT0,Ae,Le);else De(K.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,Ae,0);L(M,Be)&&y(Ae),t.unbindTexture()}A.depthBuffer&&$e(A)}function Dt(A){let M=g(A)||a,K=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ve=0,ge=K.length;ve<ge;ve++){let pe=K[ve];if(L(pe,M)){let Be=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ae=n.get(pe).__webglTexture;t.bindTexture(Be,Ae),y(Be),t.unbindTexture()}}}function Ye(A){if(a&&A.samples>0&&Oe(A)===!1){let M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],K=A.width,ve=A.height,ge=i.COLOR_BUFFER_BIT,pe=[],Be=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(A),Le=A.isWebGLMultipleRenderTargets===!0;if(Le)for(let Qe=0;Qe<M.length;Qe++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Qe=0;Qe<M.length;Qe++){pe.push(i.COLOR_ATTACHMENT0+Qe),A.depthBuffer&&pe.push(Be);let it=Ae.__ignoreDepthValues!==void 0?Ae.__ignoreDepthValues:!1;if(it===!1&&(A.depthBuffer&&(ge|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ge|=i.STENCIL_BUFFER_BIT)),Le&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Qe]),it===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Be]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Be])),Le){let ue=n.get(M[Qe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,K,ve,0,0,K,ve,ge,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Le)for(let Qe=0;Qe<M.length;Qe++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Qe]);let it=n.get(M[Qe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.TEXTURE_2D,it,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}}function je(A){return Math.min(s.maxSamples,A.samples)}function Oe(A){let M=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Nt(A){let M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function st(A,M){let K=A.colorSpace,ve=A.format,ge=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===_c||K!==gs&&K!==gi&&(Bt.getTransfer(K)===Zt?a===!1?e.has("EXT_sRGB")===!0&&ve===ri?(A.format=_c,A.minFilter=mi,A.generateMipmaps=!1):M=ko.sRGBToLinear(M):(ve!==ri||ge!==Ns)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),M}this.allocateTextureUnit=B,this.resetTextureUnits=Me,this.setTexture2D=ne,this.setTexture2DArray=me,this.setTexture3D=he,this.setTextureCube=se,this.rebindTextures=ht,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Oe}function Cx(i,e,t){let n=t.isWebGL2;function s(r,o=gi){let a,c=Bt.getTransfer(o);if(r===Ns)return i.UNSIGNED_BYTE;if(r===$u)return i.UNSIGNED_SHORT_4_4_4_4;if(r===ju)return i.UNSIGNED_SHORT_5_5_5_1;if(r===hd)return i.BYTE;if(r===ud)return i.SHORT;if(r===th)return i.UNSIGNED_SHORT;if(r===Ku)return i.INT;if(r===Ls)return i.UNSIGNED_INT;if(r===Us)return i.FLOAT;if(r===Ii)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===fd)return i.ALPHA;if(r===ri)return i.RGBA;if(r===dd)return i.LUMINANCE;if(r===pd)return i.LUMINANCE_ALPHA;if(r===hr)return i.DEPTH_COMPONENT;if(r===ea)return i.DEPTH_STENCIL;if(r===_c)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===md)return i.RED;if(r===Qu)return i.RED_INTEGER;if(r===gd)return i.RG;if(r===ef)return i.RG_INTEGER;if(r===tf)return i.RGBA_INTEGER;if(r===Il||r===Ll||r===Ul||r===Dl)if(c===Zt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Il)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ll)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ul)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Il)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ll)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ul)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wh||r===Th||r===Ah||r===Rh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===wh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Th)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ah)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===nf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ch||r===Ph)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ch)return c===Zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ph)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ih||r===Lh||r===Uh||r===Dh||r===Nh||r===Fh||r===Oh||r===zh||r===Bh||r===Hh||r===kh||r===Vh||r===Gh||r===Wh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ih)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Lh)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Uh)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dh)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nh)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fh)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Oh)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zh)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bh)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hh)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kh)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vh)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gh)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wh)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nl||r===Xh||r===qh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Nl)return c===Zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===xd||r===Yh||r===Zh||r===Jh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Nl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Yh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===cr?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Lc=class extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Xn=class extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Px={type:"move"},Fa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),f=this._getHandJoint(l,_);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,v=.005;l.inputState.pinching&&p>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Px)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Uc=class extends Ki{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,p=null,m=null,v=null,_=t.getContextAttributes(),g=null,f=null,L=[],y=[],z=new ze,P=null,O=new Fn;O.layers.enable(1),O.viewport=new Ht;let N=new Fn;N.layers.enable(2),N.viewport=new Ht;let le=[O,N],E=new Lc;E.layers.enable(1),E.layers.enable(2);let C=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ae=L[k];return ae===void 0&&(ae=new Fa,L[k]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(k){let ae=L[k];return ae===void 0&&(ae=new Fa,L[k]=ae),ae.getGripSpace()},this.getHand=function(k){let ae=L[k];return ae===void 0&&(ae=new Fa,L[k]=ae),ae.getHandSpace()};function oe(k){let ae=y.indexOf(k.inputSource);if(ae===-1)return;let be=L[ae];be!==void 0&&(be.update(k.inputSource,k.frame,l||o),be.dispatchEvent({type:k.type,data:k.inputSource}))}function Me(){s.removeEventListener("select",oe),s.removeEventListener("selectstart",oe),s.removeEventListener("selectend",oe),s.removeEventListener("squeeze",oe),s.removeEventListener("squeezestart",oe),s.removeEventListener("squeezeend",oe),s.removeEventListener("end",Me),s.removeEventListener("inputsourceschange",B);for(let k=0;k<L.length;k++){let ae=y[k];ae!==null&&(y[k]=null,L[k].disconnect(ae))}C=null,J=null,e.setRenderTarget(g),m=null,p=null,u=null,s=null,f=null,U.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",oe),s.addEventListener("selectstart",oe),s.addEventListener("selectend",oe),s.addEventListener("squeeze",oe),s.addEventListener("squeezestart",oe),s.addEventListener("squeezeend",oe),s.addEventListener("end",Me),s.addEventListener("inputsourceschange",B),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(z),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ae={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new qn(m.framebufferWidth,m.framebufferHeight,{format:ri,type:Ns,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ae=null,be=null,xe=null;_.depth&&(xe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=_.stencil?ea:hr,be=_.stencil?cr:Ls);let De={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=new XRWebGLBinding(s,t),p=u.createProjectionLayer(De),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),f=new qn(p.textureWidth,p.textureHeight,{format:ri,type:Ns,depthTexture:new Jo(p.textureWidth,p.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let nt=e.properties.get(f);nt.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),U.setContext(s),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function B(k){for(let ae=0;ae<k.removed.length;ae++){let be=k.removed[ae],xe=y.indexOf(be);xe>=0&&(y[xe]=null,L[xe].disconnect(be))}for(let ae=0;ae<k.added.length;ae++){let be=k.added[ae],xe=y.indexOf(be);if(xe===-1){for(let nt=0;nt<L.length;nt++)if(nt>=y.length){y.push(be),xe=nt;break}else if(y[nt]===null){y[nt]=be,xe=nt;break}if(xe===-1)break}let De=L[xe];De&&De.connect(be)}}let q=new F,ne=new F;function me(k,ae,be){q.setFromMatrixPosition(ae.matrixWorld),ne.setFromMatrixPosition(be.matrixWorld);let xe=q.distanceTo(ne),De=ae.projectionMatrix.elements,nt=be.projectionMatrix.elements,We=De[14]/(De[10]-1),$e=De[14]/(De[10]+1),ht=(De[9]+1)/De[5],Z=(De[9]-1)/De[5],Dt=(De[8]-1)/De[0],Ye=(nt[8]+1)/nt[0],je=We*Dt,Oe=We*Ye,Nt=xe/(-Dt+Ye),st=Nt*-Dt;ae.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(st),k.translateZ(Nt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let A=We+Nt,M=$e+Nt,K=je-st,ve=Oe+(xe-st),ge=ht*$e/M*A,pe=Z*$e/M*A;k.projectionMatrix.makePerspective(K,ve,ge,pe,A,M),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function he(k,ae){ae===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ae.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;E.near=N.near=O.near=k.near,E.far=N.far=O.far=k.far,(C!==E.near||J!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,J=E.far);let ae=k.parent,be=E.cameras;he(E,ae);for(let xe=0;xe<be.length;xe++)he(be[xe],ae);be.length===2?me(E,O,N):E.projectionMatrix.copy(O.projectionMatrix),se(k,E,ae)};function se(k,ae,be){be===null?k.matrix.copy(ae.matrixWorld):(k.matrix.copy(be.matrixWorld),k.matrix.invert(),k.matrix.multiply(ae.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ae.projectionMatrix),k.projectionMatrixInverse.copy(ae.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=za*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(k){c=k,p!==null&&(p.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let _e=null;function ye(k,ae){if(h=ae.getViewerPose(l||o),v=ae,h!==null){let be=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let xe=!1;be.length!==E.cameras.length&&(E.cameras.length=0,xe=!0);for(let De=0;De<be.length;De++){let nt=be[De],We=null;if(m!==null)We=m.getViewport(nt);else{let ht=u.getViewSubImage(p,nt);We=ht.viewport,De===0&&(e.setRenderTargetTextures(f,ht.colorTexture,p.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(f))}let $e=le[De];$e===void 0&&($e=new Fn,$e.layers.enable(De),$e.viewport=new Ht,le[De]=$e),$e.matrix.fromArray(nt.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(nt.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(We.x,We.y,We.width,We.height),De===0&&(E.matrix.copy($e.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),xe===!0&&E.cameras.push($e)}}for(let be=0;be<L.length;be++){let xe=y[be],De=L[be];xe!==null&&De!==void 0&&De.update(xe,ae,l||o)}_e&&_e(k,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),v=null}let U=new uf;U.setAnimationLoop(ye),this.setAnimationLoop=function(k){_e=k},this.dispose=function(){}}};function Ix(i,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,hf(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,L,y,z){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),p(g,f),f.isMeshPhysicalMaterial&&m(g,f,z)):f.isMeshMatcapMaterial?(r(g,f),v(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),_(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?c(g,f,L,y):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===zn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===zn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let L=e.get(f).envMap;if(L&&(g.envMap.value=L,g.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap){g.lightMap.value=f.lightMap;let y=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=f.lightMapIntensity*y,t(f.lightMap,g.lightMapTransform)}f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,L,y){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*L,g.scale.value=y*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function p(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),e.get(f).envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function m(g,f,L){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zn&&g.clearcoatNormalScale.value.negate())),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=L.texture,g.transmissionSamplerSize.value.set(L.width,L.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function _(g,f){let L=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(L.matrixWorld),g.nearDistance.value=L.shadow.camera.near,g.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lx(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(L,y){let z=y.program;n.uniformBlockBinding(L,z)}function l(L,y){let z=s[L.id];z===void 0&&(v(L),z=h(L),s[L.id]=z,L.addEventListener("dispose",g));let P=y.program;n.updateUBOMapping(L,P);let O=e.render.frame;r[L.id]!==O&&(p(L),r[L.id]=O)}function h(L){let y=u();L.__bindingPointIndex=y;let z=i.createBuffer(),P=L.__size,O=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,z),i.bufferData(i.UNIFORM_BUFFER,P,O),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,z),z}function u(){for(let L=0;L<a;L++)if(o.indexOf(L)===-1)return o.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(L){let y=s[L.id],z=L.uniforms,P=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let O=0,N=z.length;O<N;O++){let le=Array.isArray(z[O])?z[O]:[z[O]];for(let E=0,C=le.length;E<C;E++){let J=le[E];if(m(J,O,E,P)===!0){let oe=J.__offset,Me=Array.isArray(J.value)?J.value:[J.value],B=0;for(let q=0;q<Me.length;q++){let ne=Me[q],me=_(ne);typeof ne=="number"||typeof ne=="boolean"?(J.__data[0]=ne,i.bufferSubData(i.UNIFORM_BUFFER,oe+B,J.__data)):ne.isMatrix3?(J.__data[0]=ne.elements[0],J.__data[1]=ne.elements[1],J.__data[2]=ne.elements[2],J.__data[3]=0,J.__data[4]=ne.elements[3],J.__data[5]=ne.elements[4],J.__data[6]=ne.elements[5],J.__data[7]=0,J.__data[8]=ne.elements[6],J.__data[9]=ne.elements[7],J.__data[10]=ne.elements[8],J.__data[11]=0):(ne.toArray(J.__data,B),B+=me.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,oe,J.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(L,y,z,P){let O=L.value,N=y+"_"+z;if(P[N]===void 0)return typeof O=="number"||typeof O=="boolean"?P[N]=O:P[N]=O.clone(),!0;{let le=P[N];if(typeof O=="number"||typeof O=="boolean"){if(le!==O)return P[N]=O,!0}else if(le.equals(O)===!1)return le.copy(O),!0}return!1}function v(L){let y=L.uniforms,z=0,P=16;for(let N=0,le=y.length;N<le;N++){let E=Array.isArray(y[N])?y[N]:[y[N]];for(let C=0,J=E.length;C<J;C++){let oe=E[C],Me=Array.isArray(oe.value)?oe.value:[oe.value];for(let B=0,q=Me.length;B<q;B++){let ne=Me[B],me=_(ne),he=z%P;he!==0&&P-he<me.boundary&&(z+=P-he),oe.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=z,z+=me.storage}}}let O=z%P;return O>0&&(z+=P-O),L.__size=z,L.__cache={},this}function _(L){let y={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(y.boundary=4,y.storage=4):L.isVector2?(y.boundary=8,y.storage=8):L.isVector3||L.isColor?(y.boundary=16,y.storage=12):L.isVector4?(y.boundary=16,y.storage=16):L.isMatrix3?(y.boundary=48,y.storage=48):L.isMatrix4?(y.boundary=64,y.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),y}function g(L){let y=L.target;y.removeEventListener("dispose",g);let z=o.indexOf(y.__bindingPointIndex);o.splice(z,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(let L in s)i.deleteBuffer(s[L]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var ka=class{constructor(e={}){let{canvas:t=Vd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;let m=new Uint32Array(4),v=new Int32Array(4),_=null,g=null,f=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this._useLegacyLights=!1,this.toneMapping=Ds,this.toneMappingExposure=1;let y=this,z=!1,P=0,O=0,N=null,le=-1,E=null,C=new Ht,J=new Ht,oe=null,Me=new Ue(0),B=0,q=t.width,ne=t.height,me=1,he=null,se=null,_e=new Ht(0,0,q,ne),ye=new Ht(0,0,q,ne),U=!1,k=new Ha,ae=!1,be=!1,xe=null,De=new Ut,nt=new ze,We=new F,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return N===null?me:1}let Z=n;function Dt(w,X){for(let $=0;$<w.length;$++){let te=w[$],Q=t.getContext(te,X);if(Q!==null)return Q}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",ce,!1),Z===null){let X=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&X.shift(),Z=Dt(X,w),Z===null)throw Dt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ye,je,Oe,Nt,st,A,M,K,ve,ge,pe,Be,Ae,Le,Qe,it,ue,Mt,D,fe,Re,Se,Xe,gt;function _t(){Ye=new $g(Z),je=new Xg(Z,Ye,e),Ye.init(je),Se=new Cx(Z,Ye,je),Oe=new Ax(Z,Ye,je),Nt=new e0(Z),st=new mx,A=new Rx(Z,Ye,Oe,st,je,Se,Nt),M=new Yg(y),K=new Kg(y),ve=new lp(Z,je),Xe=new Gg(Z,Ye,ve,je),ge=new jg(Z,ve,Nt,Xe),pe=new s0(Z,ge,ve,Nt),D=new i0(Z,je,A),it=new qg(st),Be=new px(y,M,K,Ye,je,Xe,it),Ae=new Ix(y,st),Le=new xx,Qe=new Ex(Ye,je),Mt=new Vg(y,M,K,Oe,pe,p,c),ue=new Tx(y,pe,je),gt=new Lx(Z,Nt,je,Oe),fe=new Wg(Z,Ye,Nt,je),Re=new Qg(Z,Ye,Nt,je),Nt.programs=Be.programs,y.capabilities=je,y.extensions=Ye,y.properties=st,y.renderLists=Le,y.shadowMap=ue,y.state=Oe,y.info=Nt}_t();let Pe=new Uc(y,Z);this.xr=Pe,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let w=Ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(w){w!==void 0&&(me=w,this.setSize(q,ne,!1))},this.getSize=function(w){return w.set(q,ne)},this.setSize=function(w,X,$=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,ne=X,t.width=Math.floor(w*me),t.height=Math.floor(X*me),$===!0&&(t.style.width=w+"px",t.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(q*me,ne*me).floor()},this.setDrawingBufferSize=function(w,X,$){q=w,ne=X,me=$,t.width=Math.floor(w*$),t.height=Math.floor(X*$),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(_e)},this.setViewport=function(w,X,$,te){w.isVector4?_e.set(w.x,w.y,w.z,w.w):_e.set(w,X,$,te),Oe.viewport(C.copy(_e).multiplyScalar(me).floor())},this.getScissor=function(w){return w.copy(ye)},this.setScissor=function(w,X,$,te){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,X,$,te),Oe.scissor(J.copy(ye).multiplyScalar(me).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(w){Oe.setScissorTest(U=w)},this.setOpaqueSort=function(w){he=w},this.setTransparentSort=function(w){se=w},this.getClearColor=function(w){return w.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(w=!0,X=!0,$=!0){let te=0;if(w){let Q=!1;if(N!==null){let Ne=N.texture.format;Q=Ne===tf||Ne===ef||Ne===Qu}if(Q){let Ne=N.texture.type,Ve=Ne===Ns||Ne===Ls||Ne===th||Ne===cr||Ne===$u||Ne===ju,Ge=Mt.getClearColor(),Je=Mt.getClearAlpha(),dt=Ge.r,ot=Ge.g,pt=Ge.b;Ve?(m[0]=dt,m[1]=ot,m[2]=pt,m[3]=Je,Z.clearBufferuiv(Z.COLOR,0,m)):(v[0]=dt,v[1]=ot,v[2]=pt,v[3]=Je,Z.clearBufferiv(Z.COLOR,0,v))}else te|=Z.COLOR_BUFFER_BIT}X&&(te|=Z.DEPTH_BUFFER_BIT),$&&(te|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Le.dispose(),Qe.dispose(),st.dispose(),M.dispose(),K.dispose(),pe.dispose(),Xe.dispose(),gt.dispose(),Be.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",cn),Pe.removeEventListener("sessionend",At),xe&&(xe.dispose(),xe=null),kt.stop()};function we(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;let w=Nt.autoReset,X=ue.enabled,$=ue.autoUpdate,te=ue.needsUpdate,Q=ue.type;_t(),Nt.autoReset=w,ue.enabled=X,ue.autoUpdate=$,ue.needsUpdate=te,ue.type=Q}function ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Te(w){let X=w.target;X.removeEventListener("dispose",Te),Ze(X)}function Ze(w){ke(w),st.remove(w)}function ke(w){let X=st.get(w).programs;X!==void 0&&(X.forEach(function($){Be.releaseProgram($)}),w.isShaderMaterial&&Be.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,$,te,Q,Ne){X===null&&(X=$e);let Ve=Q.isMesh&&Q.matrixWorld.determinant()<0,Ge=xn(w,X,$,te,Q);Oe.setMaterial(te,Ve);let Je=$.index,dt=1;if(te.wireframe===!0){if(Je=ge.getWireframeAttribute($),Je===void 0)return;dt=2}let ot=$.drawRange,pt=$.attributes.position,St=ot.start*dt,hn=(ot.start+ot.count)*dt;Ne!==null&&(St=Math.max(St,Ne.start*dt),hn=Math.min(hn,(Ne.start+Ne.count)*dt)),Je!==null?(St=Math.max(St,0),hn=Math.min(hn,Je.count)):pt!=null&&(St=Math.max(St,0),hn=Math.min(hn,pt.count));let an=hn-St;if(an<0||an===1/0)return;Xe.setup(Q,te,Ge,$,Je);let un,Ot=fe;if(Je!==null&&(un=ve.get(Je),Ot=Re,Ot.setIndex(un)),Q.isMesh)te.wireframe===!0?(Oe.setLineWidth(te.wireframeLinewidth*ht()),Ot.setMode(Z.LINES)):Ot.setMode(Z.TRIANGLES);else if(Q.isLine){let mt=te.linewidth;mt===void 0&&(mt=1),Oe.setLineWidth(mt*ht()),Q.isLineSegments?Ot.setMode(Z.LINES):Q.isLineLoop?Ot.setMode(Z.LINE_LOOP):Ot.setMode(Z.LINE_STRIP)}else Q.isPoints?Ot.setMode(Z.POINTS):Q.isSprite&&Ot.setMode(Z.TRIANGLES);if(Q.isBatchedMesh)Ot.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)Ot.renderInstances(St,an,Q.count);else if($.isInstancedBufferGeometry){let mt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,nn=Math.min($.instanceCount,mt);Ot.renderInstances(St,an,nn)}else Ot.render(St,an)};function rt(w,X,$){w.transparent===!0&&w.side===On&&w.forceSinglePass===!1?(w.side=zn,w.needsUpdate=!0,jn(w,X,$),w.side=Fs,w.needsUpdate=!0,jn(w,X,$),w.side=On):jn(w,X,$)}this.compile=function(w,X,$=null){$===null&&($=w),g=Qe.get($),g.init(),L.push(g),$.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),w!==$&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),g.setupLights(y._useLegacyLights);let te=new Set;return w.traverse(function(Q){let Ne=Q.material;if(Ne)if(Array.isArray(Ne))for(let Ve=0;Ve<Ne.length;Ve++){let Ge=Ne[Ve];rt(Ge,$,Q),te.add(Ge)}else rt(Ne,$,Q),te.add(Ne)}),L.pop(),g=null,te},this.compileAsync=function(w,X,$=null){let te=this.compile(w,X,$);return new Promise(Q=>{function Ne(){if(te.forEach(function(Ve){st.get(Ve).currentProgram.isReady()&&te.delete(Ve)}),te.size===0){Q(w);return}setTimeout(Ne,10)}Ye.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let bt=null;function at(w){bt&&bt(w)}function cn(){kt.stop()}function At(){kt.start()}let kt=new uf;kt.setAnimationLoop(at),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(w){bt=w,Pe.setAnimationLoop(w),w===null?kt.stop():kt.start()},Pe.addEventListener("sessionstart",cn),Pe.addEventListener("sessionend",At),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(X),X=Pe.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,X,N),g=Qe.get(w,L.length),g.init(),L.push(g),De.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),k.setFromProjectionMatrix(De),be=this.localClippingEnabled,ae=it.init(this.clippingPlanes,be),_=Le.get(w,f.length),_.init(),f.push(_),mn(w,X,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(he,se),this.info.render.frame++,ae===!0&&it.beginShadows();let $=g.state.shadowsArray;if(ue.render($,w,X),ae===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset(),Mt.render(_,w),g.setupLights(y._useLegacyLights),X.isArrayCamera){let te=X.cameras;for(let Q=0,Ne=te.length;Q<Ne;Q++){let Ve=te[Q];ys(_,w,Ve,Ve.viewport)}}else ys(_,w,X);N!==null&&(A.updateMultisampleRenderTarget(N),A.updateRenderTargetMipmap(N)),w.isScene===!0&&w.onAfterRender(y,w,X),Xe.resetDefaultState(),le=-1,E=null,L.pop(),L.length>0?g=L[L.length-1]:g=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function mn(w,X,$,te){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||k.intersectsSprite(w)){te&&We.setFromMatrixPosition(w.matrixWorld).applyMatrix4(De);let Ve=pe.update(w),Ge=w.material;Ge.visible&&_.push(w,Ve,Ge,$,We.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||k.intersectsObject(w))){let Ve=pe.update(w),Ge=w.material;if(te&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),We.copy(w.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),We.copy(Ve.boundingSphere.center)),We.applyMatrix4(w.matrixWorld).applyMatrix4(De)),Array.isArray(Ge)){let Je=Ve.groups;for(let dt=0,ot=Je.length;dt<ot;dt++){let pt=Je[dt],St=Ge[pt.materialIndex];St&&St.visible&&_.push(w,Ve,St,$,We.z,pt)}}else Ge.visible&&_.push(w,Ve,Ge,$,We.z,null)}}let Ne=w.children;for(let Ve=0,Ge=Ne.length;Ve<Ge;Ve++)mn(Ne[Ve],X,$,te)}function ys(w,X,$,te){let Q=w.opaque,Ne=w.transmissive,Ve=w.transparent;g.setupLightsView($),ae===!0&&it.setGlobalState(y.clippingPlanes,$),Ne.length>0&&_r(Q,Ne,X,$),te&&Oe.viewport(C.copy(te)),Q.length>0&&Pn(Q,X,$),Ne.length>0&&Pn(Ne,X,$),Ve.length>0&&Pn(Ve,X,$),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function _r(w,X,$,te){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;let Ne=je.isWebGL2;xe===null&&(xe=new qn(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")?Ii:Ns,minFilter:Oa,samples:Ne?4:0})),y.getDrawingBufferSize(nt),Ne?xe.setSize(nt.x,nt.y):xe.setSize(Bo(nt.x),Bo(nt.y));let Ve=y.getRenderTarget();y.setRenderTarget(xe),y.getClearColor(Me),B=y.getClearAlpha(),B<1&&y.setClearColor(16777215,.5),y.clear();let Ge=y.toneMapping;y.toneMapping=Ds,Pn(w,$,te),A.updateMultisampleRenderTarget(xe),A.updateRenderTargetMipmap(xe);let Je=!1;for(let dt=0,ot=X.length;dt<ot;dt++){let pt=X[dt],St=pt.object,hn=pt.geometry,an=pt.material,un=pt.group;if(an.side===On&&St.layers.test(te.layers)){let Ot=an.side;an.side=zn,an.needsUpdate=!0,$n(St,$,te,hn,an,un),an.side=Ot,an.needsUpdate=!0,Je=!0}}Je===!0&&(A.updateMultisampleRenderTarget(xe),A.updateRenderTargetMipmap(xe)),y.setRenderTarget(Ve),y.setClearColor(Me,B),y.toneMapping=Ge}function Pn(w,X,$){let te=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,Ne=w.length;Q<Ne;Q++){let Ve=w[Q],Ge=Ve.object,Je=Ve.geometry,dt=te===null?Ve.material:te,ot=Ve.group;Ge.layers.test($.layers)&&$n(Ge,X,$,Je,dt,ot)}}function $n(w,X,$,te,Q,Ne){w.onBeforeRender(y,X,$,te,Q,Ne),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(y,X,$,te,w,Ne),Q.transparent===!0&&Q.side===On&&Q.forceSinglePass===!1?(Q.side=zn,Q.needsUpdate=!0,y.renderBufferDirect($,X,te,Q,w,Ne),Q.side=Fs,Q.needsUpdate=!0,y.renderBufferDirect($,X,te,Q,w,Ne),Q.side=On):y.renderBufferDirect($,X,te,Q,w,Ne),w.onAfterRender(y,X,$,te,Q,Ne)}function jn(w,X,$){X.isScene!==!0&&(X=$e);let te=st.get(w),Q=g.state.lights,Ne=g.state.shadowsArray,Ve=Q.state.version,Ge=Be.getParameters(w,Q.state,Ne,X,$),Je=Be.getProgramCacheKey(Ge),dt=te.programs;te.environment=w.isMeshStandardMaterial?X.environment:null,te.fog=X.fog,te.envMap=(w.isMeshStandardMaterial?K:M).get(w.envMap||te.environment),dt===void 0&&(w.addEventListener("dispose",Te),dt=new Map,te.programs=dt);let ot=dt.get(Je);if(ot!==void 0){if(te.currentProgram===ot&&te.lightsStateVersion===Ve)return Ms(w,Ge),ot}else Ge.uniforms=Be.getUniforms(w),w.onBuild($,Ge,y),w.onBeforeCompile(Ge,y),ot=Be.acquireProgram(Ge,Je),dt.set(Je,ot),te.uniforms=Ge.uniforms;let pt=te.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(pt.clippingPlanes=it.uniform),Ms(w,Ge),te.needsLights=In(w),te.lightsStateVersion=Ve,te.needsLights&&(pt.ambientLightColor.value=Q.state.ambient,pt.lightProbe.value=Q.state.probe,pt.directionalLights.value=Q.state.directional,pt.directionalLightShadows.value=Q.state.directionalShadow,pt.spotLights.value=Q.state.spot,pt.spotLightShadows.value=Q.state.spotShadow,pt.rectAreaLights.value=Q.state.rectArea,pt.ltc_1.value=Q.state.rectAreaLTC1,pt.ltc_2.value=Q.state.rectAreaLTC2,pt.pointLights.value=Q.state.point,pt.pointLightShadows.value=Q.state.pointShadow,pt.hemisphereLights.value=Q.state.hemi,pt.directionalShadowMap.value=Q.state.directionalShadowMap,pt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,pt.spotShadowMap.value=Q.state.spotShadowMap,pt.spotLightMatrix.value=Q.state.spotLightMatrix,pt.spotLightMap.value=Q.state.spotLightMap,pt.pointShadowMap.value=Q.state.pointShadowMap,pt.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.currentProgram=ot,te.uniformsList=null,ot}function Vs(w){if(w.uniformsList===null){let X=w.currentProgram.getUniforms();w.uniformsList=$r.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function Ms(w,X){let $=st.get(w);$.outputColorSpace=X.outputColorSpace,$.batching=X.batching,$.instancing=X.instancing,$.instancingColor=X.instancingColor,$.skinning=X.skinning,$.morphTargets=X.morphTargets,$.morphNormals=X.morphNormals,$.morphColors=X.morphColors,$.morphTargetsCount=X.morphTargetsCount,$.numClippingPlanes=X.numClippingPlanes,$.numIntersection=X.numClipIntersection,$.vertexAlphas=X.vertexAlphas,$.vertexTangents=X.vertexTangents,$.toneMapping=X.toneMapping}function xn(w,X,$,te,Q){X.isScene!==!0&&(X=$e),A.resetTextureUnits();let Ne=X.fog,Ve=te.isMeshStandardMaterial?X.environment:null,Ge=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:gs,Je=(te.isMeshStandardMaterial?K:M).get(te.envMap||Ve),dt=te.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ot=!!$.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),pt=!!$.morphAttributes.position,St=!!$.morphAttributes.normal,hn=!!$.morphAttributes.color,an=Ds;te.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(an=y.toneMapping);let un=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ot=un!==void 0?un.length:0,mt=st.get(te),nn=g.state.lights;if(ae===!0&&(be===!0||w!==E)){let Fe=w===E&&te.id===le;it.setState(te,w,Fe)}let Vt=!1;te.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==nn.state.version||mt.outputColorSpace!==Ge||Q.isBatchedMesh&&mt.batching===!1||!Q.isBatchedMesh&&mt.batching===!0||Q.isInstancedMesh&&mt.instancing===!1||!Q.isInstancedMesh&&mt.instancing===!0||Q.isSkinnedMesh&&mt.skinning===!1||!Q.isSkinnedMesh&&mt.skinning===!0||Q.isInstancedMesh&&mt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&mt.instancingColor===!1&&Q.instanceColor!==null||mt.envMap!==Je||te.fog===!0&&mt.fog!==Ne||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==it.numPlanes||mt.numIntersection!==it.numIntersection)||mt.vertexAlphas!==dt||mt.vertexTangents!==ot||mt.morphTargets!==pt||mt.morphNormals!==St||mt.morphColors!==hn||mt.toneMapping!==an||je.isWebGL2===!0&&mt.morphTargetsCount!==Ot)&&(Vt=!0):(Vt=!0,mt.__version=te.version);let fn=mt.currentProgram;Vt===!0&&(fn=jn(te,X,Q));let Di=!1,ui=!1,fi=!1,sn=fn.getUniforms(),wn=mt.uniforms;if(Oe.useProgram(fn.program)&&(Di=!0,ui=!0,fi=!0),te.id!==le&&(le=te.id,ui=!0),Di||E!==w){sn.setValue(Z,"projectionMatrix",w.projectionMatrix),sn.setValue(Z,"viewMatrix",w.matrixWorldInverse);let Fe=sn.map.cameraPosition;Fe!==void 0&&Fe.setValue(Z,We.setFromMatrixPosition(w.matrixWorld)),je.logarithmicDepthBuffer&&sn.setValue(Z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&sn.setValue(Z,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,ui=!0,fi=!0)}if(Q.isSkinnedMesh){sn.setOptional(Z,Q,"bindMatrix"),sn.setOptional(Z,Q,"bindMatrixInverse");let Fe=Q.skeleton;Fe&&(je.floatVertexTextures?(Fe.boneTexture===null&&Fe.computeBoneTexture(),sn.setValue(Z,"boneTexture",Fe.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(sn.setOptional(Z,Q,"batchingTexture"),sn.setValue(Z,"batchingTexture",Q._matricesTexture,A));let Qn=$.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0&&je.isWebGL2===!0)&&D.update(Q,$,fn),(ui||mt.receiveShadow!==Q.receiveShadow)&&(mt.receiveShadow=Q.receiveShadow,sn.setValue(Z,"receiveShadow",Q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(wn.envMap.value=Je,wn.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),ui&&(sn.setValue(Z,"toneMappingExposure",y.toneMappingExposure),mt.needsLights&&_i(wn,fi),Ne&&te.fog===!0&&Ae.refreshFogUniforms(wn,Ne),Ae.refreshMaterialUniforms(wn,te,me,ne,xe),$r.upload(Z,Vs(mt),wn,A)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&($r.upload(Z,Vs(mt),wn,A),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&sn.setValue(Z,"center",Q.center),sn.setValue(Z,"modelViewMatrix",Q.modelViewMatrix),sn.setValue(Z,"normalMatrix",Q.normalMatrix),sn.setValue(Z,"modelMatrix",Q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let Fe=te.uniformsGroups;for(let Ni=0,ei=Fe.length;Ni<ei;Ni++)if(je.isWebGL2){let Fi=Fe[Ni];gt.update(Fi,fn),gt.bind(Fi,fn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fn}function _i(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function In(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,X,$){st.get(w.texture).__webglTexture=X,st.get(w.depthTexture).__webglTexture=$;let te=st.get(w);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=$===void 0,te.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,X){let $=st.get(w);$.__webglFramebuffer=X,$.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(w,X=0,$=0){N=w,P=X,O=$;let te=!0,Q=null,Ne=!1,Ve=!1;if(w){let Je=st.get(w);Je.__useDefaultFramebuffer!==void 0?(Oe.bindFramebuffer(Z.FRAMEBUFFER,null),te=!1):Je.__webglFramebuffer===void 0?A.setupRenderTarget(w):Je.__hasExternalTextures&&A.rebindTextures(w,st.get(w.texture).__webglTexture,st.get(w.depthTexture).__webglTexture);let dt=w.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(Ve=!0);let ot=st.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ot[X])?Q=ot[X][$]:Q=ot[X],Ne=!0):je.isWebGL2&&w.samples>0&&A.useMultisampledRTT(w)===!1?Q=st.get(w).__webglMultisampledFramebuffer:Array.isArray(ot)?Q=ot[$]:Q=ot,C.copy(w.viewport),J.copy(w.scissor),oe=w.scissorTest}else C.copy(_e).multiplyScalar(me).floor(),J.copy(ye).multiplyScalar(me).floor(),oe=U;if(Oe.bindFramebuffer(Z.FRAMEBUFFER,Q)&&je.drawBuffers&&te&&Oe.drawBuffers(w,Q),Oe.viewport(C),Oe.scissor(J),Oe.setScissorTest(oe),Ne){let Je=st.get(w.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Je.__webglTexture,$)}else if(Ve){let Je=st.get(w.texture),dt=X||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Je.__webglTexture,$||0,dt)}le=-1},this.readRenderTargetPixels=function(w,X,$,te,Q,Ne,Ve){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=st.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ge=Ge[Ve]),Ge){Oe.bindFramebuffer(Z.FRAMEBUFFER,Ge);try{let Je=w.texture,dt=Je.format,ot=Je.type;if(dt!==ri&&Se.convert(dt)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let pt=ot===Ii&&(Ye.has("EXT_color_buffer_half_float")||je.isWebGL2&&Ye.has("EXT_color_buffer_float"));if(ot!==Ns&&Se.convert(ot)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ot===Us&&(je.isWebGL2||Ye.has("OES_texture_float")||Ye.has("WEBGL_color_buffer_float")))&&!pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-te&&$>=0&&$<=w.height-Q&&Z.readPixels(X,$,te,Q,Se.convert(dt),Se.convert(ot),Ne)}finally{let Je=N!==null?st.get(N).__webglFramebuffer:null;Oe.bindFramebuffer(Z.FRAMEBUFFER,Je)}}},this.copyFramebufferToTexture=function(w,X,$=0){let te=Math.pow(2,-$),Q=Math.floor(X.image.width*te),Ne=Math.floor(X.image.height*te);A.setTexture2D(X,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,$,0,0,w.x,w.y,Q,Ne),Oe.unbindTexture()},this.copyTextureToTexture=function(w,X,$,te=0){let Q=X.image.width,Ne=X.image.height,Ve=Se.convert($.format),Ge=Se.convert($.type);A.setTexture2D($,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,$.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,$.unpackAlignment),X.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,te,w.x,w.y,Q,Ne,Ve,Ge,X.image.data):X.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,te,w.x,w.y,X.mipmaps[0].width,X.mipmaps[0].height,Ve,X.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,te,w.x,w.y,Ve,Ge,X.image),te===0&&$.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),Oe.unbindTexture()},this.copyTextureToTexture3D=function(w,X,$,te,Q=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ne=w.max.x-w.min.x+1,Ve=w.max.y-w.min.y+1,Ge=w.max.z-w.min.z+1,Je=Se.convert(te.format),dt=Se.convert(te.type),ot;if(te.isData3DTexture)A.setTexture3D(te,0),ot=Z.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)A.setTexture2DArray(te,0),ot=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,te.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,te.unpackAlignment);let pt=Z.getParameter(Z.UNPACK_ROW_LENGTH),St=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),hn=Z.getParameter(Z.UNPACK_SKIP_PIXELS),an=Z.getParameter(Z.UNPACK_SKIP_ROWS),un=Z.getParameter(Z.UNPACK_SKIP_IMAGES),Ot=$.isCompressedTexture?$.mipmaps[Q]:$.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Ot.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Ot.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,w.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,w.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,w.min.z),$.isDataTexture||$.isData3DTexture?Z.texSubImage3D(ot,Q,X.x,X.y,X.z,Ne,Ve,Ge,Je,dt,Ot.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(ot,Q,X.x,X.y,X.z,Ne,Ve,Ge,Je,Ot.data)):Z.texSubImage3D(ot,Q,X.x,X.y,X.z,Ne,Ve,Ge,Je,dt,Ot),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,pt),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,St),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,hn),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,an),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,un),Q===0&&te.generateMipmaps&&Z.generateMipmap(ot),Oe.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Oe.unbindTexture()},this.resetState=function(){P=0,O=0,N=null,Oe.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ps}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===nh?"display-p3":"srgb",t.unpackColorSpace=Bt.workingColorSpace===ll?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xt?ur:sf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ur?Xt:gs}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Dc=class extends ka{};Dc.prototype.isWebGL1Renderer=!0;var Ko=class extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Nc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ms()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ms()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ms()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gn=new F,$o=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),s=Wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),s=Wt(s,this.array),r=Wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Jn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Kn=class extends Os{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vr,Aa=new F,Gr=new F,Wr=new F,Xr=new ze,Ra=new ze,xf=new Ut,To=new F,Ca=new F,Ao=new F,Bu=new ze,rc=new ze,Hu=new ze,ci=class extends Bn{constructor(e=new Kn){if(super(),this.isSprite=!0,this.type="Sprite",Vr===void 0){Vr=new oi;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nc(t,5);Vr.setIndex([0,1,2,0,2,3]),Vr.setAttribute("position",new $o(n,3,0,!1)),Vr.setAttribute("uv",new $o(n,2,3,!1))}this.geometry=Vr,this.material=e,this.center=new ze(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gr.setFromMatrixScale(this.matrixWorld),xf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gr.multiplyScalar(-Wr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ro(To.set(-.5,-.5,0),Wr,o,Gr,s,r),Ro(Ca.set(.5,-.5,0),Wr,o,Gr,s,r),Ro(Ao.set(.5,.5,0),Wr,o,Gr,s,r),Bu.set(0,0),rc.set(1,0),Hu.set(1,1);let a=e.ray.intersectTriangle(To,Ca,Ao,!1,Aa);if(a===null&&(Ro(Ca.set(-.5,.5,0),Wr,o,Gr,s,r),rc.set(0,1),a=e.ray.intersectTriangle(To,Ao,Ca,!1,Aa),a===null))return;let c=e.ray.origin.distanceTo(Aa);c<e.near||c>e.far||t.push({distance:c,point:Aa.clone(),uv:lr.getInterpolation(Aa,To,Ca,Ao,Bu,rc,Hu,new ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ro(i,e,t,n,s,r){Xr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ra.x=r*Xr.x-s*Xr.y,Ra.y=s*Xr.x+r*Xr.y):Ra.copy(Xr),i.copy(e),i.x+=Ra.x,i.y+=Ra.y,i.applyMatrix4(xf)}var jo=class extends ai{constructor(e=null,t=1,n=1,s,r,o,a,c,l=vn,h=vn,u,p){super(null,o,a,c,l,h,s,r,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sa=class extends Jn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qr=new Ut,ku=new Ut,Co=[],Vu=new xs,Ux=new Ut,Pa=new ft,Ia=new fr,Jt=class extends ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sa(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ux)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qr),Vu.copy(e.boundingBox).applyMatrix4(qr),this.boundingBox.union(Vu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qr),Ia.copy(e.boundingSphere).applyMatrix4(qr),this.boundingSphere.union(Ia)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ia.copy(this.boundingSphere),Ia.applyMatrix4(n),e.ray.intersectsSphere(Ia)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qr),ku.multiplyMatrices(n,qr),Pa.matrixWorld=ku,Pa.raycast(e,Co);for(let o=0,a=Co.length;o<a;o++){let c=Co[o];c.instanceId=r,c.object=this,t.push(c)}Co.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var xi=class extends ai{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fc=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,m=(o-h)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ze:new F);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new F,s=[],r=[],o=[],a=new F,c=new Ut;for(let m=0;m<=e;m++){let v=m/e;s[m]=this.getTangentAt(v,new F)}r[0]=new F,o[0]=new F;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let v=Math.acos(bn(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,v))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(bn(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let v=1;v<=e;v++)r[v].applyMatrix4(c.makeRotationAxis(s[v],m*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function rh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let p=(o-r)/l-(a-r)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;p*=h,m*=h,s(o,a,p,m)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Po=new F,ac=new rh,oc=new rh,lc=new rh,Qo=class extends Fc{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Po.subVectors(s[0],s[1]).add(s[0]),l=Po);let u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Po.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Po),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,v=Math.pow(l.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(p),m),g=Math.pow(p.distanceToSquared(h),m);_<1e-4&&(_=1),v<1e-4&&(v=_),g<1e-4&&(g=_),ac.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,v,_,g),oc.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,v,_,g),lc.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,v,_,g)}else this.curveType==="catmullrom"&&(ac.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),oc.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),lc.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return n.set(ac.calc(c),oc.calc(c),lc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var Va=class i extends oi{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],m=[],v=0,_=[],g=n/2,f=0;L(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new pn(u,3)),this.setAttribute("normal",new pn(p,3)),this.setAttribute("uv",new pn(m,2));function L(){let z=new F,P=new F,O=0,N=(t-e)/n;for(let le=0;le<=r;le++){let E=[],C=le/r,J=C*(t-e)+e;for(let oe=0;oe<=s;oe++){let Me=oe/s,B=Me*c+a,q=Math.sin(B),ne=Math.cos(B);P.x=J*q,P.y=-C*n+g,P.z=J*ne,u.push(P.x,P.y,P.z),z.set(q,N,ne).normalize(),p.push(z.x,z.y,z.z),m.push(Me,1-C),E.push(v++)}_.push(E)}for(let le=0;le<s;le++)for(let E=0;E<r;E++){let C=_[E][le],J=_[E+1][le],oe=_[E+1][le+1],Me=_[E][le+1];h.push(C,J,Me),h.push(J,oe,Me),O+=6}l.addGroup(f,O,0),f+=O}function y(z){let P=v,O=new ze,N=new F,le=0,E=z===!0?e:t,C=z===!0?1:-1;for(let oe=1;oe<=s;oe++)u.push(0,g*C,0),p.push(0,C,0),m.push(.5,.5),v++;let J=v;for(let oe=0;oe<=s;oe++){let B=oe/s*c+a,q=Math.cos(B),ne=Math.sin(B);N.x=E*ne,N.y=g*C,N.z=E*q,u.push(N.x,N.y,N.z),p.push(0,C,0),O.x=q*.5+.5,O.y=ne*.5*C+.5,m.push(O.x,O.y),v++}for(let oe=0;oe<s;oe++){let Me=P+oe,B=J+oe;z===!0?h.push(B,B+1,Me):h.push(B+1,B,Me),le+=3}l.addGroup(f,le,z===!0?1:2),f+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zs=class i extends Va{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ga=class i extends oi{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new F,p=new F,m=[],v=[],_=[],g=[];for(let f=0;f<=n;f++){let L=[],y=f/n,z=0;f===0&&o===0?z=.5/t:f===n&&c===Math.PI&&(z=-.5/t);for(let P=0;P<=t;P++){let O=P/t;u.x=-e*Math.cos(s+O*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+O*r)*Math.sin(o+y*a),v.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),g.push(O+z,1-y),L.push(l++)}h.push(L)}for(let f=0;f<n;f++)for(let L=0;L<t;L++){let y=h[f][L+1],z=h[f][L],P=h[f+1][L],O=h[f+1][L+1];(f!==0||o>0)&&m.push(y,z,O),(f!==n-1||c<Math.PI)&&m.push(z,P,O)}this.setIndex(m),this.setAttribute("position",new pn(v,3)),this.setAttribute("normal",new pn(_,3)),this.setAttribute("uv",new pn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var el=class i extends oi{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new F,u=new F,p=new F;for(let m=0;m<=n;m++)for(let v=0;v<=s;v++){let _=v/s*r,g=m/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(v/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let v=1;v<=s;v++){let _=(s+1)*m+v-1,g=(s+1)*(m-1)+v-1,f=(s+1)*(m-1)+v,L=(s+1)*m+v;o.push(_,g,L),o.push(g,f,L)}this.setIndex(o),this.setAttribute("position",new pn(a,3)),this.setAttribute("normal",new pn(c,3)),this.setAttribute("uv",new pn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var tl=class extends ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Kt=class extends Os{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rf,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Io(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Dx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ra=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Oc=class extends ra{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kh,endingEnd:Kh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $h:r=e,a=2*t-n;break;case jh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $h:o=e,c=2*n-t;break;case jh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,m=this._weightNext,v=(n-t)/(s-t),_=v*v,g=_*v,f=-p*g+2*p*_-p*v,L=(1+p)*g+(-1.5-2*p)*_+(-.5+p)*v+1,y=(-1-m)*g+(1.5+m)*_+.5*v,z=m*g-m*_;for(let P=0;P!==a;++P)r[P]=f*o[h+P]+L*o[l+P]+y*o[c+P]+z*o[u+P];return r}},zc=class extends ra{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let p=0;p!==a;++p)r[p]=o[l+p]*u+o[c+p]*h;return r}},Bc=class extends ra{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Li=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Io(t,this.TimeBufferType),this.values=Io(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Io(e.times,Array),values:Io(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Uo:t=this.InterpolantFactoryMethodDiscrete;break;case Do:t=this.InterpolantFactoryMethodLinear;break;case Fl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uo;case this.InterpolantFactoryMethodLinear:return Do;case this.InterpolantFactoryMethodSmooth:return Fl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Dx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,p=u-n,m=u+n;for(let v=0;v!==n;++v){let _=t[u+v];if(_!==t[p+v]||_!==t[m+v]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,p=o*n;for(let m=0;m!==n;++m)t[p+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Li.prototype.TimeBufferType=Float32Array;Li.prototype.ValueBufferType=Float32Array;Li.prototype.DefaultInterpolation=Do;var pr=class extends Li{};pr.prototype.ValueTypeName="bool";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=Uo;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Hc=class extends Li{};Hc.prototype.ValueTypeName="color";var kc=class extends Li{};kc.prototype.ValueTypeName="number";var Vc=class extends ra{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)yn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Wa=class extends Li{InterpolantFactoryMethodLinear(e){return new Vc(this.times,this.values,this.getValueSize(),e)}};Wa.prototype.ValueTypeName="quaternion";Wa.prototype.DefaultInterpolation=Do;Wa.prototype.InterpolantFactoryMethodSmooth=void 0;var mr=class extends Li{};mr.prototype.ValueTypeName="string";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=Uo;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends Li{};Gc.prototype.ValueTypeName="vector";var Wc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){let m=l[u],v=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null}}},Nx=new Wc,Xc=class{constructor(e){this.manager=e!==void 0?e:Nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Xc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xa=class extends Bn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},nl=class extends Xa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},cc=new Ut,Gu=new F,Wu=new F,il=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ha,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Gu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gu),Wu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wu),t.updateMatrixWorld(),cc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Xu=new Ut,La=new F,hc=new F,qc=class extends il{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new Ht(2,1,1,1),new Ht(0,1,1,1),new Ht(3,1,1,1),new Ht(1,1,1,1),new Ht(3,0,1,1),new Ht(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),La.setFromMatrixPosition(e.matrixWorld),n.position.copy(La),hc.copy(n.position),hc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(hc),n.updateMatrixWorld(),s.makeTranslation(-La.x,-La.y,-La.z),Xu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xu)}},qa=class extends Xa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Yc=class extends il{constructor(){super(new ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sl=class extends Xa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new Yc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var rl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=qu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function qu(){return(typeof performance>"u"?Date:performance).now()}var ah="\\[\\]\\.:\\/",Fx=new RegExp("["+ah+"]","g"),oh="[^"+ah+"]",Ox="[^"+ah.replace("\\.","")+"]",zx=/((?:WC+[\/:])*)/.source.replace("WC",oh),Bx=/(WCOD+)?/.source.replace("WCOD",Ox),Hx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oh),kx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oh),Vx=new RegExp("^"+zx+Bx+Hx+kx+"$"),Gx=["material","materials","bones","map"],Zc=class{constructor(e,t,n){let s=n||rn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fx,"")}static parseTrackName(e){let t=Vx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rn.Composite=Zc;rn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rn.prototype.GetterByBindingType=[rn.prototype._getValue_direct,rn.prototype._getValue_array,rn.prototype._getValue_arrayElement,rn.prototype._getValue_toArray];rn.prototype.SetterByBindingTypeAndVersioning=[[rn.prototype._setValue_direct,rn.prototype._setValue_direct_setNeedsUpdate,rn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_array,rn.prototype._setValue_array_setNeedsUpdate,rn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_arrayElement,rn.prototype._setValue_arrayElement_setNeedsUpdate,rn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_fromArray,rn.prototype._setValue_fromArray_setNeedsUpdate,rn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var e_=new Float32Array(1);var al=class{constructor(e,t,n=0,s=1/0){this.ray=new ta(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ba,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Jc(e,this,n,t),n.sort(Yu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Jc(e[s],this,n,t);return n.sort(Yu),n}};function Yu(i,e){return i.distance-e.distance}function Jc(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Jc(s[r],e,t,!0)}}var Ya=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(bn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var vf={type:"change"},lh={type:"start"},yf={type:"end"},hl=new ta,Mf=new Ri,Wx=Math.cos(70*of.DEG2RAD),ul=class extends Ki{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gr.ROTATE,MIDDLE:gr.DOLLY,RIGHT:gr.PAN},this.touches={ONE:xr.ROTATE,TWO:xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",pe),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",pe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(vf),n.update(),r=s.NONE},this.update=(function(){let D=new F,fe=new yn().setFromUnitVectors(e.up,new F(0,1,0)),Re=fe.clone().invert(),Se=new F,Xe=new yn,gt=new F,_t=2*Math.PI;return function(we=null){let H=n.object.position;D.copy(H).sub(n.target),D.applyQuaternion(fe),a.setFromVector3(D),n.autoRotate&&r===s.NONE&&J(E(we)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let ce=n.minAzimuthAngle,Te=n.maxAzimuthAngle;isFinite(ce)&&isFinite(Te)&&(ce<-Math.PI?ce+=_t:ce>Math.PI&&(ce-=_t),Te<-Math.PI?Te+=_t:Te>Math.PI&&(Te-=_t),ce<=Te?a.theta=Math.max(ce,Math.min(Te,a.theta)):a.theta=a.theta>(ce+Te)/2?Math.max(ce,a.theta):Math.min(Te,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&O||n.object.isOrthographicCamera?a.radius=se(a.radius):a.radius=se(a.radius*l),D.setFromSpherical(a),D.applyQuaternion(Re),H.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let Ze=!1;if(n.zoomToCursor&&O){let ke=null;if(n.object.isPerspectiveCamera){let rt=D.length();ke=se(rt*l);let bt=rt-ke;n.object.position.addScaledVector(z,bt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let rt=new F(P.x,P.y,0);rt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ze=!0;let bt=new F(P.x,P.y,0);bt.unproject(n.object),n.object.position.sub(bt).add(rt),n.object.updateMatrixWorld(),ke=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ke!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ke).add(n.object.position):(hl.origin.copy(n.object.position),hl.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(hl.direction))<Wx?e.lookAt(n.target):(Mf.setFromNormalAndCoplanarPoint(n.object.up,n.target),hl.intersectPlane(Mf,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ze=!0);return l=1,O=!1,Ze||Se.distanceToSquared(n.object.position)>o||8*(1-Xe.dot(n.object.quaternion))>o||gt.distanceToSquared(n.target)>0?(n.dispatchEvent(vf),Se.copy(n.object.position),Xe.copy(n.object.quaternion),gt.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Le),n.domElement.removeEventListener("pointerdown",st),n.domElement.removeEventListener("pointercancel",M),n.domElement.removeEventListener("wheel",ge),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",M),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",pe),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new Ya,c=new Ya,l=1,h=new F,u=new ze,p=new ze,m=new ze,v=new ze,_=new ze,g=new ze,f=new ze,L=new ze,y=new ze,z=new F,P=new ze,O=!1,N=[],le={};function E(D){return D!==null?2*Math.PI/60*n.autoRotateSpeed*D:2*Math.PI/60/60*n.autoRotateSpeed}function C(D){let fe=Math.abs(D)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*fe)}function J(D){c.theta-=D}function oe(D){c.phi-=D}let Me=(function(){let D=new F;return function(Re,Se){D.setFromMatrixColumn(Se,0),D.multiplyScalar(-Re),h.add(D)}})(),B=(function(){let D=new F;return function(Re,Se){n.screenSpacePanning===!0?D.setFromMatrixColumn(Se,1):(D.setFromMatrixColumn(Se,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(Re),h.add(D)}})(),q=(function(){let D=new F;return function(Re,Se){let Xe=n.domElement;if(n.object.isPerspectiveCamera){let gt=n.object.position;D.copy(gt).sub(n.target);let _t=D.length();_t*=Math.tan(n.object.fov/2*Math.PI/180),Me(2*Re*_t/Xe.clientHeight,n.object.matrix),B(2*Se*_t/Xe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Me(Re*(n.object.right-n.object.left)/n.object.zoom/Xe.clientWidth,n.object.matrix),B(Se*(n.object.top-n.object.bottom)/n.object.zoom/Xe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function ne(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function me(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function he(D,fe){if(!n.zoomToCursor)return;O=!0;let Re=n.domElement.getBoundingClientRect(),Se=D-Re.left,Xe=fe-Re.top,gt=Re.width,_t=Re.height;P.x=Se/gt*2-1,P.y=-(Xe/_t)*2+1,z.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function se(D){return Math.max(n.minDistance,Math.min(n.maxDistance,D))}function _e(D){u.set(D.clientX,D.clientY)}function ye(D){he(D.clientX,D.clientX),f.set(D.clientX,D.clientY)}function U(D){v.set(D.clientX,D.clientY)}function k(D){p.set(D.clientX,D.clientY),m.subVectors(p,u).multiplyScalar(n.rotateSpeed);let fe=n.domElement;J(2*Math.PI*m.x/fe.clientHeight),oe(2*Math.PI*m.y/fe.clientHeight),u.copy(p),n.update()}function ae(D){L.set(D.clientX,D.clientY),y.subVectors(L,f),y.y>0?ne(C(y.y)):y.y<0&&me(C(y.y)),f.copy(L),n.update()}function be(D){_.set(D.clientX,D.clientY),g.subVectors(_,v).multiplyScalar(n.panSpeed),q(g.x,g.y),v.copy(_),n.update()}function xe(D){he(D.clientX,D.clientY),D.deltaY<0?me(C(D.deltaY)):D.deltaY>0&&ne(C(D.deltaY)),n.update()}function De(D){let fe=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?oe(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,n.keyPanSpeed),fe=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?oe(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,-n.keyPanSpeed),fe=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(n.keyPanSpeed,0),fe=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(-n.keyPanSpeed,0),fe=!0;break}fe&&(D.preventDefault(),n.update())}function nt(D){if(N.length===1)u.set(D.pageX,D.pageY);else{let fe=Mt(D),Re=.5*(D.pageX+fe.x),Se=.5*(D.pageY+fe.y);u.set(Re,Se)}}function We(D){if(N.length===1)v.set(D.pageX,D.pageY);else{let fe=Mt(D),Re=.5*(D.pageX+fe.x),Se=.5*(D.pageY+fe.y);v.set(Re,Se)}}function $e(D){let fe=Mt(D),Re=D.pageX-fe.x,Se=D.pageY-fe.y,Xe=Math.sqrt(Re*Re+Se*Se);f.set(0,Xe)}function ht(D){n.enableZoom&&$e(D),n.enablePan&&We(D)}function Z(D){n.enableZoom&&$e(D),n.enableRotate&&nt(D)}function Dt(D){if(N.length==1)p.set(D.pageX,D.pageY);else{let Re=Mt(D),Se=.5*(D.pageX+Re.x),Xe=.5*(D.pageY+Re.y);p.set(Se,Xe)}m.subVectors(p,u).multiplyScalar(n.rotateSpeed);let fe=n.domElement;J(2*Math.PI*m.x/fe.clientHeight),oe(2*Math.PI*m.y/fe.clientHeight),u.copy(p)}function Ye(D){if(N.length===1)_.set(D.pageX,D.pageY);else{let fe=Mt(D),Re=.5*(D.pageX+fe.x),Se=.5*(D.pageY+fe.y);_.set(Re,Se)}g.subVectors(_,v).multiplyScalar(n.panSpeed),q(g.x,g.y),v.copy(_)}function je(D){let fe=Mt(D),Re=D.pageX-fe.x,Se=D.pageY-fe.y,Xe=Math.sqrt(Re*Re+Se*Se);L.set(0,Xe),y.set(0,Math.pow(L.y/f.y,n.zoomSpeed)),ne(y.y),f.copy(L);let gt=(D.pageX+fe.x)*.5,_t=(D.pageY+fe.y)*.5;he(gt,_t)}function Oe(D){n.enableZoom&&je(D),n.enablePan&&Ye(D)}function Nt(D){n.enableZoom&&je(D),n.enableRotate&&Dt(D)}function st(D){n.enabled!==!1&&(N.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",M)),Qe(D),D.pointerType==="touch"?Be(D):K(D))}function A(D){n.enabled!==!1&&(D.pointerType==="touch"?Ae(D):ve(D))}function M(D){it(D),N.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",M)),n.dispatchEvent(yf),r=s.NONE}function K(D){let fe;switch(D.button){case 0:fe=n.mouseButtons.LEFT;break;case 1:fe=n.mouseButtons.MIDDLE;break;case 2:fe=n.mouseButtons.RIGHT;break;default:fe=-1}switch(fe){case gr.DOLLY:if(n.enableZoom===!1)return;ye(D),r=s.DOLLY;break;case gr.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;U(D),r=s.PAN}else{if(n.enableRotate===!1)return;_e(D),r=s.ROTATE}break;case gr.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;_e(D),r=s.ROTATE}else{if(n.enablePan===!1)return;U(D),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(lh)}function ve(D){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;k(D);break;case s.DOLLY:if(n.enableZoom===!1)return;ae(D);break;case s.PAN:if(n.enablePan===!1)return;be(D);break}}function ge(D){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(D.preventDefault(),n.dispatchEvent(lh),xe(D),n.dispatchEvent(yf))}function pe(D){n.enabled===!1||n.enablePan===!1||De(D)}function Be(D){switch(ue(D),N.length){case 1:switch(n.touches.ONE){case xr.ROTATE:if(n.enableRotate===!1)return;nt(D),r=s.TOUCH_ROTATE;break;case xr.PAN:if(n.enablePan===!1)return;We(D),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case xr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ht(D),r=s.TOUCH_DOLLY_PAN;break;case xr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Z(D),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(lh)}function Ae(D){switch(ue(D),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Dt(D),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Ye(D),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Oe(D),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Nt(D),n.update();break;default:r=s.NONE}}function Le(D){n.enabled!==!1&&D.preventDefault()}function Qe(D){N.push(D.pointerId)}function it(D){delete le[D.pointerId];for(let fe=0;fe<N.length;fe++)if(N[fe]==D.pointerId){N.splice(fe,1);return}}function ue(D){let fe=le[D.pointerId];fe===void 0&&(fe=new ze,le[D.pointerId]=fe),fe.set(D.pageX,D.pageY)}function Mt(D){let fe=D.pointerId===N[0]?N[1]:N[0];return le[fe]}n.domElement.addEventListener("contextmenu",Le),n.domElement.addEventListener("pointerdown",st),n.domElement.addEventListener("pointercancel",M),n.domElement.addEventListener("wheel",ge,{passive:!1}),this.update()}};var fl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var hi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Xx=new ia(-1,1,1,-1,0,1),ch=class extends oi{constructor(){super(),this.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pn([0,2,0,0,2,0],2))}},qx=new ch,Hs=class{constructor(e){this._mesh=new ft(qx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var dl=class extends hi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ln?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Bs.clone(e.uniforms),this.material=new ln({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Hs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ja=class extends hi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},pl=class extends hi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ml=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ze);this._width=n.width,this._height=n.height,t=new qn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ii}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new dl(fl),this.copyPass.material.blending=Ji,this.clock=new rl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ja!==void 0&&(o instanceof Ja?n=!0:o instanceof pl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var gl=class extends hi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ue}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Sf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var oa=class i extends hi{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ze(e.x,e.y):new ze(256,256),this.clearColor=new Ue(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new qn(r,o,{type:Ii}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let p=new qn(r,o,{type:Ii});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let m=new qn(r,o,{type:Ii});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=Sf;this.highPassUniforms=Bs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ln({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ze(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=fl;this.copyUniforms=Bs.clone(h.uniforms),this.blendMaterial=new ln({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Pi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ue,this.oldClearAlpha=1,this.basic=new Tt,this.fsQuad=new Hs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ze(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ln({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ze(.5,.5)},direction:{value:new ze(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new ln({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};oa.BlurDirectionX=new ze(1,0);oa.BlurDirectionY=new ze(0,1);var Ef={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var xl=class extends hi{constructor(){super();let e=Ef;this.uniforms=Bs.clone(e.uniforms),this.material=new tl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Hs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Bt.getTransfer(this._outputColorSpace)===Zt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$c?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Qc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Za?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===eh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ui=Math.PI*2;function bf(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}var Ft={lot:0,res:1,apt:2,ind:3,mall:4,park:5,golf:6,air:7,port:8,arena:9,hwy:10,ring:11},qt={rw:{x0:-492,x1:-196,z:-280,hw:9},twz:-253,apron:{x0:-440,x1:-276,z0:-249,z1:-212},field:{x:-220,z:32,hx:19,hz:12},port:{x0:-40,x1:84,z0:-292,z1:-148},lake:{x:-76,z:176,w:40,d:32},hwyX:-132,hwyZ:122,isle:{x:208,z:128,r:40},metro:{x0:-96,x1:74,z0:-96,z1:96,r:16,y:12}},_l=i=>i*36+14;function wf(i,e){let t=bf(4242),n=33,s=new Uint8Array(n*n*4),r=new Set,o=(h,u,p)=>{if(Math.abs(h)>16||Math.abs(u)>16)return;let m=((u+16)*n+h+16)*4;s[m]=p,s[m+3]=255},a=(h,u)=>Math.abs(h)>16||Math.abs(u)>16?0:s[((u+16)*n+h+16)*4],c=(h,u,p,m,v)=>{for(let _=h;_<=u;_++)for(let g=p;g<=m;g++)o(_,g,v),r.add(_+","+g)};c(-14,-6,-9,-6,Ft.air),c(-1,1,-8,-5,Ft.port),c(-7,-6,0,1,Ft.arena),c(-9,-7,5,7,Ft.golf),c(-3,-2,4,5,Ft.park),c(-5,-5,-2,-2,Ft.mall),c(-10,-10,2,2,Ft.mall),c(-1,-1,8,8,Ft.mall);for(let h=-16;h<=16;h++)r.has("-4,"+h)||c(-4,-4,h,h,Ft.hwy),h<=1&&!r.has(h+",3")&&c(h,h,3,3,Ft.hwy);for(let h=-16;h<=16;h++)for(let u=-16;u<=16;u++){if(r.has(h+","+u))continue;let p=_l(h),m=_l(u),v=Math.hypot(p,m);if(Math.abs(p)<i+26&&Math.abs(m)<i+26){o(h,u,Ft.ring);continue}if(p>e+12||v>600){o(h,u,Ft.lot);continue}let _=t(),g=u<=-5||h<=-10,f=u>=4;o(h,u,g?_<.3?Ft.ind:_<.66?Ft.res:_<.8?Ft.apt:_<.9?Ft.park:Ft.lot:f?_<.58?Ft.res:_<.74?Ft.apt:_<.88?Ft.park:Ft.lot:_<.38?Ft.apt:_<.78?Ft.res:_<.9?Ft.park:Ft.lot)}let l=new jo(s,n,n,ri);return l.magFilter=l.minFilter=vn,l.needsUpdate=!0,{tex:l,get:a}}function Tf(i){let{scene:e,col:t,voxMesh:n,boxGeo:s,mobile:r,HALF:o,PITCH:a,NB:c,BEACH_X:l,PIER_Z:h,roofs:u,ants:p,site:m,zones:v,spark:_,seaMat:g,cam:f,rr:L,loadIcon:y,mono:z}=i,P=bf(9137),O=r,N=new Ut,le=new Ut,E=new yn,C=new F,J=new F,oe=new _s(0,0,0,"YXZ"),Me=new Ue,B=new F,q=new F,ne=new F,me=new F(0,1,0),he=new F(0,-1,0),se=new F(0,0,1),_e=new Ut().makeScale(0,0,0),ye=new Ue(1,1,1),U=(d,R,I,Y,re,Ee,Ke,qe,et,yt)=>({x:d,y:R,z:I,w:Y,h:re,d:Ee,c:typeof Ke=="string"?t(Ke):Ke,ry:qe,rx:et,rz:yt}),k=(d,R,I)=>new Ue(d,R,I),ae=d=>d[Math.floor(P()*d.length)],be=(d,R,I)=>new F(d,R,I),xe={x:0,y:0,z:0,yaw:0,pitch:0},De={x:0,y:0,z:0,yaw:0,pitch:0},nt=new Xn;e.add(nt);function We(d,R=nt){let I=new Jt(s(),new Tt({toneMapped:!1}),Math.max(1,d.length));return d.forEach((Y,re)=>{E.setFromEuler(oe.set(Y.rx||0,Y.ry||0,Y.rz||0)),N.compose(C.set(Y.x,Y.y+Y.h/2,Y.z),E,J.set(Y.w,Y.h,Y.d)),I.setMatrixAt(re,N),I.setColorAt(re,Y.c)}),I.count=d.length,I.frustumCulled=!1,R.add(I),I}function $e(d,R){let I=new Jt(s(),new Kt,Math.max(1,d.length));return d.forEach((Y,re)=>{E.setFromEuler(oe.set(Y.rx||0,Y.ry||0,Y.rz||0)),N.compose(C.set(Y.x,Y.y+Y.h/2,Y.z),E,J.set(Y.w,Y.h,Y.d)),I.setMatrixAt(re,N),I.setColorAt(re,Y.c)}),I.count=d.length,I.frustumCulled=!1,R.add(I),I}function ht(d,R){let I=d.map(([re,Ee,Ke,qe,et])=>{let yt=!et&&typeof qe=="string",ee=new Jt(s(),et?new Tt({toneMapped:!1}):new Kt(yt?{color:qe}:{}),R);ee.frustumCulled=!1,e.add(ee);for(let de=0;de<R;de++)ee.setMatrixAt(de,_e),yt||ee.setColorAt(de,et&&qe?qe:ye);return{k:re,m:ee,L:new Ut().compose(new F(...Ee),new yn,new F(...Ke))}}),Y=Object.fromEntries(I.map(re=>[re.k,re]));return{by:Y,set(re,Ee,Ke,qe,et=0,yt=0,ee=0,de=1){E.setFromEuler(oe.set(yt,et,ee)),N.compose(C.set(Ee,Ke,qe),E,J.set(de,de,de));for(let He of I)le.multiplyMatrices(N,He.L),He.m.setMatrixAt(re,le)},hide(re){for(let Ee of I)Ee.m.setMatrixAt(re,_e)},paint(re,Ee,Ke){Y[re].m.setColorAt(Ee,Ke)},flush(){for(let re of I)re.m.instanceMatrix.needsUpdate=!0,re.m.instanceColor&&(re.m.instanceColor.needsUpdate=!0)}}}function Z(d){let R=[],I=0;for(let Y=0;Y<d.length;Y++){let re=d[Y],Ee=d[(Y+1)%d.length],Ke=Math.hypot(Ee[0]-re[0],Ee[1]-re[1],Ee[2]-re[2])||.001;R.push({a:re,b:Ee,l:Ke,at:I}),I+=Ke}return{seg:R,len:I}}function Dt(d,R,I=xe){R=(R%d.len+d.len)%d.len;let Y=0,re=d.seg.length-1;for(;Y<re;){let ee=Y+re+1>>1;d.seg[ee].at<=R?Y=ee:re=ee-1}let Ee=d.seg[Y],Ke=(R-Ee.at)/Ee.l,qe=Ee.b[0]-Ee.a[0],et=Ee.b[1]-Ee.a[1],yt=Ee.b[2]-Ee.a[2];return I.x=Ee.a[0]+qe*Ke,I.y=Ee.a[1]+et*Ke,I.z=Ee.a[2]+yt*Ke,I.yaw=Math.atan2(qe,yt),I.pitch=-Math.atan2(et,Math.hypot(qe,yt)),I}function Ye(d,R,I,Y,re,Ee,Ke=6){let qe=[],et=(yt,ee,de)=>{for(let He=0;He<=Ke;He++){let tt=de+He/Ke*Math.PI/2;qe.push([yt+Math.cos(tt)*re,Ee,ee+Math.sin(tt)*re])}};return et(R-re,I+re,-Math.PI/2),et(R-re,Y-re,0),et(d+re,Y-re,Math.PI/2),et(d+re,I+re,Math.PI),qe}let je=(d,R)=>{let I=document.createElement("canvas");I.width=d,I.height=R;let Y=I.getContext("2d"),re=new xi(I);return re.colorSpace=Xt,{c:I,g:Y,tex:re}},Oe=(d,R,I)=>{for(;d.measureText(R).width>I&&R.length>3;)R=R.slice(0,-2)+"\u2026";return R},Nt=[k(3.4,.5,1.8),k(.5,2.2,3.4),k(3.4,2.6,.5),k(2.2,.6,3.4),k(.5,3.2,1.6)],st=["#ffd6e8","#d8fff0","#e8dcff","#ffe6cc","#d6ecff","#fff6d6","#f4f0ff","#ffc9a0"].map(t),A=["#5a5288","#4a4478","#6a5a94","#3d3a6e","#8a6a9a","#2f3a70","#8f86b8","#a49ccb"].map(t),M=["#6a6a8a","#58607e","#7a7290","#4e5a74","#8a8296"].map(t),K=["#ffd23f","#5fc8ff","#ff9ec9","#9ff0d0","#c8a8ff","#f4f0ff","#ff6a5a","#2a2a44"].map(t),ve=["#2fa86a","#26985e","#38b874","#2c8f5a"].map(t),ge=[],pe=[],Be=[];function Ae(d,R,I=1,Y=0){let re=ae(ve);ge.push(U(d,Y,R,.7*I,2.2*I,.7*I,"#6a4630"),U(d,Y+2*I,R,3.4*I,1.7*I,3.4*I,re),U(d,Y+3.6*I,R,2.4*I,1.3*I,2.4*I,re),U(d,Y+4.8*I,R,1.2*I,.9*I,1.2*I,re))}function Le(d,R,I=1,Y=0){let re=Math.round(7+P()*4),Ee=(P()-.5)*.25;for(let et=0;et<re;et++)pe.push(U(d+Ee*et*et*.08,Y+et*.9*I,R,.7*I,.9*I,.7*I,et%2?"#8a5a3a":"#7a4e30"));let Ke=d+Ee*re*re*.08,qe=Y+re*.9*I;for(let et=0;et<6;et++){let yt=et/6*Ui+P()*.4;for(let ee=1;ee<=5;ee++)pe.push(U(Ke+Math.cos(yt)*ee*.8*I,qe+(ee<3?.3:-(ee-2)*.55)*I,R+Math.sin(yt)*ee*.8*I,.75*I,.35*I,.75*I,ee%2?"#2fbf6e":"#26a85e"))}pe.push(U(Ke,qe-.3,R,1.1*I,.8*I,1.1*I,"#2fbf6e"))}let Qe=[],it=[],ue=[],Mt=[],D=[],fe=[],Re=O?430:600,Se=l-6;for(let d=-16;d<=16;d++)for(let R=-16;R<=16;R++){let I=v.get(d,R),Y=_l(d),re=_l(R),Ee=Math.hypot(Y,re);if(Ee>Re)continue;let Ke=Math.min(1,Ee/600);if(I===Ft.res)for(let qe of[-10,0,10])for(let et of[-10,0,10]){if(P()<.14)continue;let yt=Y+qe+(P()-.5)*1.4,ee=re+et+(P()-.5)*1.4;if(yt>Se)continue;let de=4.6+P()*2.2,He=4.6+P()*2.2,tt=P()<.32?5.4:3.2,xt=ae(st);Qe.push(U(yt,0,ee,de,tt,He,xt)),P()<.3&&Qe.push(U(yt+(P()-.5),tt,ee+(P()-.5),de*.5,1.2,He*.5,xt)),P()<.42?Mt.push(U(yt+(P()<.5?1:-1)*(de/2+1.5),0,ee+(P()-.5)*2,2.2,.14,3,k(.16,.85,1.2))):P()<.55&&Ae(yt+(P()<.5?1:-1)*(de/2+1.7),ee+(P()-.5)*3,.65+P()*.3)}else if(I===Ft.apt){let qe=2+Math.floor(P()*3),et=[[-8,-8],[8,-8],[-8,8],[8,8]].sort(()=>P()-.5).slice(0,qe);for(let[yt,ee]of et){let de=Y+yt,He=re+ee;if(de>Se-2)continue;let tt=7+Math.round(P()*5),xt=7+Math.round(P()*5),jt=9+Math.round(P()*(12+Ke*26)),Zn=ae(A);it.push(U(de,0,He,tt,jt,xt,Zn)),jt>18&&P()<.5&&it.push(U(de,jt,He,tt-2,2+Math.round(P()*4),xt-2,Zn)),P()<.3&&Be.push(U(de,jt+.05,He-xt/2+.9,tt-1.6,.3,.3,ae(Nt)))}P()<.5&&Ae(Y+(P()-.5)*6,re+(P()-.5)*6)}else if(I===Ft.ind){let qe=P()<.55;for(let et of qe?[-7.5,7.5]:[0]){let yt=22+Math.round(P()*6),ee=qe?10:18,de=5+Math.round(P()*4),He=ae(M);ue.push(U(Y,0,re+et,yt,de,ee,He));for(let tt=-yt/2+3;tt<yt/2-2;tt+=4)ue.push(U(Y+tt,de,re+et,1.2,.45,ee-2,"#c8c4dc"))}if(P()<.55){let et=Y+12,yt=re+(qe?0:11),ee=15+Math.round(P()*10);ue.push(U(et,0,yt,2,ee,2,"#8a3a4a"),U(et,ee-3,yt,2.3,1,2.3,"#f0eaff")),fe.push([et,ee,yt]),Be.push(U(et,ee,yt,.5,.4,.5,k(4,.3,.3)))}}else if(I===Ft.mall){let qe=ae(st);it.push(U(Y-2,0,re-7,24,7,14,qe),U(Y-2,7,re-7,12,2,8,qe)),Be.push(U(Y-2,4.4,re+.12,20,.6,.2,ae(Nt)));for(let et=0;et<3;et++)for(let yt=0;yt<8;yt++)P()<.7&&D.push(U(Y-12.5+yt*3.2,0,re+4+et*4.4,1.5,1.1,3,ae(K)))}else if(I===Ft.park){if(d>=-3&&d<=-2&&R>=4&&R<=5)continue;for(let qe=0;qe<(O?4:8);qe++)Ae(Y+(P()-.5)*26,re+(P()-.5)*26,.8+P()*.5)}else if(I===Ft.lot)Y<Se&&P()<.3&&Ae(Y+(P()-.5)*20,re+(P()-.5)*20);else if(I===Ft.hwy&&P()<.5){let qe=Y+(P()-.5)*24,et=re+(P()-.5)*24;Math.abs(qe-qt.hwyX)>10&&Math.abs(et-qt.hwyZ)>10&&qe<Se&&Ae(qe,et,.9)}}n(Qe,!0),n(it,!0),n(ue,!0),n(D),We(Mt);let Xe=Math.min(O?12:28,fe.length),gt=5,_t=new Jt(s(),new Kt({color:"#5a4a7a",transparent:!0,opacity:.5,depthWrite:!1}),Math.max(1,Xe*gt));_t.frustumCulled=!1,e.add(_t);let Pe=qt.lake,we=new ft(new li(Pe.w,Pe.d).rotateX(-Math.PI/2),g);we.position.set(Pe.x,.22,Pe.z),e.add(we);let H=[U(Pe.x,0,Pe.z-Pe.d/2-.6,Pe.w+2.4,.5,1.2,"#d8d2f0"),U(Pe.x,0,Pe.z+Pe.d/2+.6,Pe.w+2.4,.5,1.2,"#d8d2f0"),U(Pe.x-Pe.w/2-.6,0,Pe.z,1.2,.5,Pe.d,"#d8d2f0"),U(Pe.x+Pe.w/2+.6,0,Pe.z,1.2,.5,Pe.d,"#d8d2f0"),U(Pe.x,0,Pe.z,3.4,.9,3.4,"#e8e4f4"),U(Pe.x,.9,Pe.z,1.2,1.4,1.2,"#e8e4f4")];for(let d=0;d<(O?14:30);d++){let R=-108+P()*64,I=144+P()*64;Math.abs(R-Pe.x)<Pe.w/2+3&&Math.abs(I-Pe.z)<Pe.d/2+3||Ae(R,I,.8+P()*.6)}n(H),Be.push(U(Pe.x,.95,Pe.z,3.6,.1,3.6,k(.6,1.8,2.6)));let ce=qt.rw,Te=qt.twz,Ze=[],ke=[];Ze.push(U(-358,0,-204,128,9,16,"#c9c3e8"),U(-358,9,-204,120,2.2,12,"#4a3a8a"));for(let d=0;d<6;d++)Ze.push(U(-262,d*4.5,-204,5.6-d*.3,4.5,5.6-d*.3,d%2?"#d8d2f0":"#bdb6e0"));Ze.push(U(-262,27,-204,9,4.6,9,"#2c3c96"),U(-262,31.6,-204,10,.9,10,"#e8e2f8"),U(-226,0,-205,30,7,16,"#7a72a8"));for(let d=0;d<5;d++)ke.push(U(-413+d*25,4.4,-217,2.4,2.4,10,"#bdb6e0"));for(let d of[-474,-446])ke.push(U(d,0,-212,24,10,22,"#8f86b8"),U(d,10,-212,18,3,22,"#a49ccb"),U(d,13,-212,10,2,22,"#b3a9d6"));for(let d=0;d<3;d++)ke.push(U(-500+d*8,0,-236,6,5,6,"#e8e4f4"));n(Ze,!0),n(ke);let rt=[];for(let d=ce.x0+4;d<=ce.x1-4;d+=12)for(let R of[-1,1])rt.push(U(d,0,ce.z+R*(ce.hw+.4),.5,.35,.5,k(3.4,3.2,2.8)));for(let d=-3;d<=3;d++)rt.push(U(ce.x0+1,0,ce.z+d*2.4,.5,.35,.5,k(.4,3.6,1)),U(ce.x1-1,0,ce.z+d*2.4,.5,.35,.5,k(3.6,.4,.4)));for(let d=ce.x0+20;d<=ce.x1-20;d+=16)for(let R of[-1,1])rt.push(U(d,0,Te+R*4.6,.4,.3,.4,k(.5,1,4)));rt.push(U(-262,32.5,-204,.8,.8,.8,k(.5,4,1.4)),U(-358,11.2,-204,116,.3,.2,k(.5,2.2,3.4))),We(rt);let bt=We(Array.from({length:7},(d,R)=>U(ce.x0-14-R*11,0,ce.z,.9,.5,.9,k(5,5,5.5)))),at=O?8:10,cn=O?[7]:[7,8,9],At=ht([["body",[0,2.4,0],[2.6,2.6,21],"#f4f2fb"],["nose",[0,2.25,11.4],[2,2,1.8],"#f4f2fb"],["wing",[0,1.9,-.5],[21,.4,4.2],"#d8d4ea"],["stab",[0,3.3,-9.4],[8.2,.35,2.2],"#d8d4ea"],["fin",[0,5.5,-9],[.45,4.4,3.4],null],["engL",[-4.8,1.15,.6],[1.5,1.5,3.2],"#a8a4c4"],["engR",[4.8,1.15,.6],[1.5,1.5,3.2],"#a8a4c4"],["win",[0,2.95,.6],[2.66,.42,15],k(3,2.4,1.5),!0],["navL",[-10.5,1.95,-.5],[.5,.5,.5],k(5,.3,.3),!0],["navR",[10.5,1.95,-.5],[.5,.5,.5],k(.3,5,.9),!0],["strobe",[0,7.9,-10.4],[.45,.45,.45],k(6,6,6),!0],["bcn",[0,.95,1.5],[.6,.3,.6],k(5,.4,.3),!0]],at),kt=["#ff4f9e","#5fc8ff","#ffd23f","#8a3fe2","#2ee6a6"].map(t);for(let d=0;d<at;d++)At.paint("fin",d,kt[d%kt.length]);for(let d=0;d<5;d++)At.set(d,-410+d*25,0,-234,0);let mn=new Qo([[-470,0,ce.z],[-330,0,ce.z],[-240,9,ce.z],[-120,36,ce.z],[10,62,ce.z-14],[100,80,ce.z-70],[80,96,ce.z-170],[-80,104,ce.z-200],[-420,104,ce.z-200],[-700,94,ce.z-170],[-820,74,ce.z-90],[-770,44,ce.z-10],[-660,22,ce.z],[-560,6,ce.z],[-500,0,ce.z]].map(d=>new F(...d)),!0,"centripetal");mn.arcLengthDivisions=800;let ys=mn.getLength(),_r=[0,0],Pn=[0,0],$n=[],jn=[],Vs=-99;function Ms(d){let{c:R,g:I,tex:Y}=je(560,200),re=Ke=>{I.clearRect(0,0,560,200),I.fillStyle="rgba(6,24,52,.94)",L(I,6,6,548,150,40),I.fill(),I.beginPath(),I.moveTo(250,150),I.lineTo(280,194),I.lineTo(312,150),I.closePath(),I.fill(),I.strokeStyle="#5fc8ff",I.lineWidth=6,L(I,6,6,548,150,40),I.stroke(),I.save(),I.beginPath(),I.arc(84,81,50,0,Ui),I.clip(),Ke?I.drawImage(Ke,34,31,100,100):z(I,84,81,50,d.symbol,d.mint),I.restore(),I.textAlign="left",I.fillStyle="#5fc8ff",I.font="900 23px Inter, sans-serif",I.fillText("MIGRATED \xB7 TAKING OFF",156,58),I.fillStyle="#fff",I.font="900 42px Inter, sans-serif",I.fillText(Oe(I,"$"+d.symbol,370),156,104),I.fillStyle="rgba(200,230,255,.85)",I.font="700 22px Inter, sans-serif",I.fillText("graduated to PumpSwap",156,136),Y.needsUpdate=!0};re(null),y(d.iconUrl,re);let Ee=new ci(new Kn({map:Y,transparent:!0,depthTest:!1}));return Ee.renderOrder=8,Ee.userData={kind:"coin",key:d.mint,coin:d},e.add(Ee),Ee}function xn(d){!d||!d.mint||!d.symbol||$n.some(R=>R.t.mint===d.mint)||jn.some(R=>R.mint===d.mint)||(jn.push(d),jn.length>6&&jn.shift())}let _i=["#c8324a","#2f6fd8","#2fa86a","#e8902f","#1fa8b8","#e8e4f4","#8a2f6a","#d8b030"].map(t),In=[U(64,-1.2,-220,36,1.8,140,"#8a86a0")],w=[];for(let d of[-36,-8,18])for(let R of[-286,-262,-238,-214,-190,-166])for(let I=0;I<4;I++)for(let Y=0;Y<6;Y++){if(O&&(I+Y)%2)continue;let re=P()<.12?0:1+Math.floor(P()*P()*4.2);for(let Ee=0;Ee<re;Ee++)w.push(U(d+3.2+I*6.4,Ee*2.62,R+1.35+Y*2.7,6.05,2.58,2.5,ae(_i)))}let X=89;for(let d of[-252,-186]){In.push(U(X,-2.4,d,13,7,58,"#24306a"),U(X,-.4,d,13.2,1.1,58.2,"#b02a40"),U(X,-2.4,d+30.5,8,7,3,"#24306a"),U(X,4.6,d-23,12,9,7,"#f0ecfa"),U(X,13.6,d-26,3,4.5,3,"#c8324a"));for(let R=0;R<5;R++)for(let I=0;I<7;I++){let Y=1+Math.floor(P()*3);for(let re=0;re<Y;re++)w.push(U(X+(R-2)*2.6,4.6+re*2.62,d-16+I*6.4,2.5,2.58,6.05,ae(_i)))}}let $=[-272,-238,-204,-170],te=[],Q=[];for(let d of $){for(let R of[66,78])for(let I of[-1,1])te.push(U(R,.6,d+I*5,1.2,29,1.2,"#d8324a"));for(let R of[-1,1])te.push(U(72,27.6,d+R*5,13.2,1.6,1.2,"#e8e4f4"));te.push(U(82,29.6,d,50,1.8,3.6,"#e8e4f4"),U(63,31.4,d,6,3.2,5,"#d8324a"),U(66,31.4,d,1.2,12,1.2,"#d8324a"),U(86,37.15,d,41.8,.5,.5,"#e8e4f4",0,0,-.291)),Q.push(U(66,43.4,d,.7,.6,.7,k(5,.3,.3)),U(106.6,29.8,d,.6,.6,.6,k(5,.3,.3)))}let Ne=[];for(let d of[-22,4,30])for(let R of[-266,-218,-170])In.push(U(d,0,R,1,24,1,"#8a84a8")),Ne.push(U(d,24,R,3.4,.8,3.4,k(3.4,3,2.4)));n(In,!0),n(w),n(te),We(Q),We(Ne);let Ve=$.length,Ge=d=>{let R=new Jt(s(),new Kt(d?{color:d}:{}),Ve);return R.frustumCulled=!1,e.add(R),R},Je=Ge("#3a3654"),dt=Ge("#1a1638"),ot=Ge("#ffd23f"),pt=Ge(null);for(let d=0;d<Ve;d++)pt.setColorAt(d,_i[d*3%_i.length]);let St=d=>d<.5?2*d*d:1-Math.pow(-2*d+2,2)/2;function hn(d){let R=X+2.6,I=70,Y=26,re=12.6,Ee=3.2;return d<3?[R,Y+(re-Y)*St(d/3),0]:d<4?[R,re,d>3.5]:d<7?[R,re+(Y-re)*St((d-4)/3),1]:d<10?[R+(I-R)*St((d-7)/3),Y,1]:d<13?[I,Y+(Ee-Y)*St((d-10)/3),1]:d<14?[I,Ee,d<13.5]:d<16?[I,Ee+(Y-Ee)*St((d-14)/2),0]:[I+(R-I)*St((d-16)/2),Y,0]}let an=Z(Ye(50,60,-286,-154,4,.6,4)),un=6,Ot=ht([["cab",[0,1.3,2.7],[2.3,2,1.8],"#ffd23f"],["chas",[0,.55,-.6],[2.1,.5,6.8],"#3a3654"],["box",[0,2.1,-1.1],[2.5,2.58,6],null],["lt",[0,1.1,3.62],[1.8,.25,.1],k(4,3.8,3.2),!0]],un);for(let d=0;d<un;d++)Ot.paint("box",d,_i[(d*5+1)%_i.length]);let mt=ht([["hull",[0,.5,0],[3.2,1.4,7.4],"#e8e4f4"],["cab",[0,1.9,-.6],[2.2,1.4,2.8],"#c8324a"],["lt",[0,2.8,-.6],[.4,.4,.4],k(4,3.6,2),!0]],2),nn=qt.field,Vt=[],fn=[],Di=[],ui=[],fi=64;for(let d=0;d<fi;d++){let R=(d+.5)/fi*Ui,I=Math.cos(R),Y=Math.sin(R),re=d%16===0||d%16===15;for(let Ee=0;Ee<7;Ee++){if(re&&Ee<5)continue;let Ke=25+Ee*2.3,qe=18+Ee*2.3,et=nn.x+I*Ke,yt=nn.z+Y*qe,ee=Math.atan2(qe*I,Ke*Y),de=Math.hypot(Ke*Y,qe*I)*Ui/fi+.3,He=Ee===6?13:1+Ee*1.5;if(Vt.push(U(et,0,yt,de,He,2.4,Ee===6?"#e8e4f4":Math.floor(d/4)%2?"#ff4f9e":"#3a5ae0",ee)),Ee<6&&!re)for(let tt of O?[0]:[-.25,.25])fn.push({x:et+Math.cos(ee)*de*tt,y:He,z:yt-Math.sin(ee)*de*tt,a:R})}}for(let[d,R]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let I=nn.x+d*36,Y=nn.z+R*28;Di.push(U(I,0,Y,1.4,36,1.4,"#c8c0e8")),ui.push(U(I-d*.6,36,Y-R*.6,5,2.6,1.2,k(2.1,2.1,2),Math.atan2(-d,-R)));let re=new ft(new zs(9,1,20,1,!0).translate(0,-.5,0),new Tt({color:new Ue(.8,.85,1),transparent:!0,opacity:.06,blending:Pi,depthWrite:!1,side:On}));B.set(I,37,Y),q.set(nn.x-d*6,0,nn.z-R*4);let Ee=B.distanceTo(q);re.position.copy(B),re.scale.set(1,Ee,1),re.quaternion.setFromUnitVectors(he,ne.subVectors(q,B).normalize()),nt.add(re)}for(let d of[-1,1])Di.push(U(nn.x+d*23.5,10,nn.z,1,9,15,"#1a1638"));Di.push(U(nn.x+41.2,13,nn.z,1,13,24,"#1a1638")),n(Vt,!0),n(Di),We(ui);let sn=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#ffffff","#8a3fe2","#ff8a4a"].map(t),wn=new Jt(s(),new Kt,fn.length);wn.frustumCulled=!1,e.add(wn),fn.forEach((d,R)=>wn.setColorAt(R,sn[R%sn.length]));let Qn=je(1024,512),Fe=Qn.g,Ni=Qn.tex,ei=null,Fi=null,Ss=null,Oi=-9,Gs=new Tt({map:Ni,toneMapped:!1,color:new Ue(1.25,1.25,1.25)}),la=[];for(let d of[-1,1]){let R=new ft(new li(14,7),Gs);R.position.set(nn.x+d*22.9,14.5,nn.z),R.rotation.y=d>0?-Math.PI/2:Math.PI/2,e.add(R),la.push(R)}let zi=new ft(new li(23,11.5),Gs);zi.position.set(nn.x+41.8,19.5,nn.z),zi.rotation.y=Math.PI/2,e.add(zi),zi.userData={kind:"arena"};function Ws(d,R,I,Y,re){Fe.fillStyle="rgba(255,255,255,.06)",L(Fe,d,R,296,168,22),Fe.fill(),Fe.fillStyle=re,Fe.fillRect(d+22,R+22,34,6),Fe.fillStyle="rgba(220,214,255,.8)",Fe.font="800 23px Inter, sans-serif",Fe.textAlign="left",Fe.fillText(I,d+22,R+60),Fe.fillStyle="#fff",Fe.font="900 76px Inter, sans-serif",Fe.fillText(Y,d+20,R+140)}function Bi(){let d=ei||{};Fe.fillStyle="#07041a",Fe.fillRect(0,0,1024,512);let R=Fe.createLinearGradient(0,0,1024,0);R.addColorStop(0,"#2f3fe4"),R.addColorStop(.5,"#8a3fe2"),R.addColorStop(1,"#ff4f9e"),Fe.fillStyle=R,Fe.fillRect(0,0,1024,70),Fe.fillStyle="#fff",Fe.font="900 34px Inter, sans-serif",Fe.textAlign="left",Fe.fillText("VICE ARENA",30,47),Fe.textAlign="right",Fe.font="800 24px Inter, sans-serif",Fe.fillText("\u25CF LIVE FROM PUMP.FUN",994,45),Ws(24,96,"NEW COINS / MIN",d.perMin==null?"\u2014":String(d.perMin),"#ffd23f"),Ws(364,96,"MIGRATED \xB7 YOU SAW",d.migrated==null?"\u2014":String(d.migrated),"#5fc8ff"),Ws(704,96,"MOOD",d.mood==null?"\u2014":Math.round(d.mood*100)+"%",d.mood!=null&&d.mood>=.5?"#2ee6a6":"#ff4f9e");let I=d.hot;Fe.fillStyle="rgba(255,255,255,.06)",L(Fe,24,290,976,196,26),Fe.fill(),I?(Fe.save(),Fe.beginPath(),Fe.arc(124,388,74,0,Ui),Fe.clip(),Fi?Fe.drawImage(Fi,50,314,148,148):z(Fe,124,388,74,I.symbol,I.mint),Fe.restore(),Fe.textAlign="left",Fe.fillStyle="#2ee6a6",Fe.font="900 26px Inter, sans-serif",Fe.fillText("#1 HOTTEST RIGHT NOW",226,352),Fe.fillStyle="#fff",Fe.font="900 78px Inter, sans-serif",Fe.fillText(Oe(Fe,"$"+I.symbol,520),222,432),Fe.textAlign="right",Fe.fillStyle=(I.chg||0)>=0?"#2ee6a6":"#ff4f9e",Fe.font="900 64px Inter, sans-serif",Fe.fillText(I.chg==null?"":(I.chg>0?"+":"")+I.chg.toFixed(1)+"%",976,420),Fe.fillStyle="rgba(220,214,255,.75)",Fe.font="800 22px Inter, sans-serif",Fe.fillText(I.tf?"in "+I.tf:"",976,458)):(Fe.textAlign="center",Fe.fillStyle="rgba(255,255,255,.7)",Fe.font="800 34px Inter, sans-serif",Fe.fillText("Waiting for the trenches\u2026",512,400)),Ni.needsUpdate=!0}Bi();function Es(d){ei=d;let R=d&&d.hot;R&&R.mint!==Ss&&(Ss=R.mint,Fi=null,y(R.iconUrl,I=>{Ss===R.mint&&(Fi=I,Bi())})),zi.userData=R?{kind:"coin",key:R.mint,coin:R}:{kind:"arena"},performance.now()-Oi>900&&(Oi=performance.now(),Bi())}let vi=[];for(let d=0;d<9;d++){let R=-318+P()*88,I=196+P()*80;vi.push(U(R,0,I,.2,4,.2,"#f4f0ff"),U(R+.6,3.1,I,1.2,.8,.1,d%2?"#ff4f6e":"#ffd23f"))}vi.push(U(-240,0,188,14,5,9,"#f4f0ff"),U(-240,5,188,15,.8,10,"#3a5ae0")),n(vi,!0);for(let d=0;d<(O?8:18);d++)Ae(-324+P()*100,180+P()*100,.9+P()*.5);let Hn=qt.hwyX,It=qt.hwyZ,dn=[],Xs=[],ca="#3a3654",Qi="#8a84a8",Hi="#c8c4dc",Tn=O?-460:-640,qs=O?460:640;for(let d=Tn;d<qs;d+=12)dn.push(U(Hn,7,d+6,15,1,12.1,ca),U(Hn-7.3,8,d+6,.4,.9,12.1,Hi),U(Hn+7.3,8,d+6,.4,.9,12.1,Hi),U(Hn,8,d+6,.5,.7,12.1,Hi));for(let d=Tn+6;d<qs;d+=24)Math.abs(d-It)<9||dn.push(U(Hn,0,d,2.2,7,2.2,Qi),U(Hn,6.2,d,12,.8,2.4,Qi));for(let d=Tn+18;d<qs;d+=36)dn.push(U(Hn,8,d,.3,6.5,.3,"#2a2648")),Xs.push(U(Hn,14.4,d,2.6,.3,.7,k(3.6,2.4,1.2)));for(let d=Tn;d<140;d+=12)dn.push(U(d+6,13,It,12.1,1,15,ca),U(d+6,14,It-7.3,12.1,.9,.4,Hi),U(d+6,14,It+7.3,12.1,.9,.4,Hi),U(d+6,14,It,12.1,.7,.5,Hi));for(let d=Tn+6;d<48;d+=24)Math.abs(d-Hn)<10||dn.push(U(d,0,It,2.2,13,2.2,Qi),U(d,12.2,It,2.4,.8,12,Qi));for(let d=Tn+18;d<140;d+=36)dn.push(U(d,14,It,.3,6.5,.3,"#2a2648")),Xs.push(U(d,20.4,It,.7,.3,2.6,k(3.6,2.4,1.2)));dn.push(U(155,6.75,It,32.5,1,15,ca,0,0,-.395),U(186,1.4,It,32,.12,12,"#2a2840"));for(let d of[56,92,128])dn.push(U(d,-1,It,3,14,7,Qi));let ha=[72,108],ti=[];for(let d of ha){for(let R of[-1,1])dn.push(U(d,-1,It+R*8.6,2.4,55,2.4,"#e8e4f4"));dn.push(U(d,11.4,It,2.4,1.6,19.6,"#e8e4f4"),U(d,40,It,2,1.4,19.6,"#e8e4f4"),U(d,52.6,It,2.4,1.6,19.6,"#e8e4f4")),Xs.push(U(d,54.2,It-8.6,.6,.6,.6,k(5,.3,.3)),U(d,54.2,It+8.6,.6,.6,.6,k(5,.3,.3)));for(let R of[-1,1])for(let I of[-1,1])for(let Y=1;Y<=4;Y++)ti.push([d,50-Y*1.8,It+R*8.6,d+I*Y*7.6,14.3,It+R*7.1])}Xs.push(U(94,13.15,It-7.7,92,.25,.25,k(.5,2.2,3.6)),U(94,13.15,It+7.7,92,.25,.25,k(.5,2.2,3.6)),U(94,12.7,It,92,.22,10,k(2.6,.5,1.8))),n(dn),We(Xs);let vr=new Jt(s(),new Tt({color:new Ue(1.5,1.45,1.8),toneMapped:!1}),ti.length);vr.frustumCulled=!1,ti.forEach(([d,R,I,Y,re,Ee],Ke)=>{B.set(d,R,I),q.set(Y,re,Ee);let qe=B.distanceTo(q);E.setFromUnitVectors(se,ne.subVectors(q,B).normalize()),N.compose(C.addVectors(B,q).multiplyScalar(.5),E,J.set(.16,.16,qe)),vr.setMatrixAt(Ke,N)}),nt.add(vr);let yi=Z([[Hn+3.4,8,Tn-12],[Hn+3.4,8,qs+12],[Hn-3.4,8,qs+12],[Hn-3.4,8,Tn-12]]),vl=Z([[Tn-12,14,It+3.4],[140,14,It+3.4],[170,1.55,It+3.4],[198,1.55,It+3.4],[201.4,1.55,It],[198,1.55,It-3.4],[170,1.55,It-3.4],[140,14,It-3.4],[Tn-12,14,It-3.4]]),lt=O?30:64,es=O?24:50,Mi=lt+es,ki=ht([["body",[0,.75,0],[1.9,1.1,4.2],null],["cab",[0,1.55,-.3],[1.6,.6,2.1],"#1a1638"],["head",[0,.75,2.12],[1.5,.22,.1],k(4.5,4.2,3.6),!0],["tail",[0,.8,-2.12],[1.5,.22,.1],k(3.4,.2,.3),!0]],Mi),ua=[];for(let d=0;d<Mi;d++){let R=d<lt,I=R?yi:vl,Y=R?lt:es,re=R?d:d-lt,Ee=P()<.16;ua.push({pa:I,d:(re+P()*.45)/Y*I.len,sc:Ee?1.5:1,sp:R?24:20}),ki.paint("body",d,ae(Ee?[t("#ffd23f"),t("#f4f0ff"),t("#2ee6a6")]:K))}let ni=qt.metro,An=ni.y,Si=Z(Ye(ni.x0,ni.x1,ni.z0,ni.z1,ni.r,An,6)),_n=[],Rn=[];for(let d=0;d<Si.len;d+=6){Dt(Si,d+3);let R=Math.cos(xe.yaw),I=Math.sin(xe.yaw);_n.push(U(xe.x,An-1,xe.z,7.8,.9,6.4,"#5a5480",xe.yaw));for(let Y of[-2.65,-1.15,1.15,2.65])_n.push(U(xe.x+Y*R,An-.1,xe.z-Y*I,.22,.22,6.4,"#c8c4dc",xe.yaw));Rn.push(U(xe.x+3.95*R,An-.95,xe.z-3.95*I,.18,.26,6.4,k(3.2,.5,2),xe.yaw),U(xe.x-3.95*R,An-.95,xe.z+3.95*I,.18,.26,6.4,k(.5,2.2,3.4),xe.yaw))}for(let d=0;d<Si.len;d+=18)Dt(Si,d),!(xe.x>60&&Math.abs(xe.z-h)<7)&&_n.push(U(xe.x,0,xe.z,1.6,An-1.8,1.6,"#8a84a8",xe.yaw),U(xe.x,An-2,xe.z,7,1,1.8,"#8a84a8",xe.yaw));let Vi=[k(3.4,.5,1.8),k(.5,2.2,3.4),k(3.4,2.6,.5),k(2.2,.6,3.4)];[[-11,ni.z0,Math.PI/2],[ni.x1,-20,0],[-11,ni.z1,Math.PI/2],[ni.x0,0,0]].forEach(([d,R,I],Y)=>{let re=Math.cos(I),Ee=Math.sin(I);for(let Ke of[-5.6,5.6])_n.push(U(d+Ke*re,An-1.2,R-Ke*Ee,3.4,1.2,26,"#bdb6e0",I));_n.push(U(d,An+3.4,R,14.6,.5,24,"#8f86b8",I));for(let Ke of[-6.6,6.6])for(let qe of[-10,0,10])_n.push(U(d+Ke*re+qe*Ee,An,R-Ke*Ee+qe*re,.3,3.4,.3,"#8a84a8",I));for(let Ke of[-7.3,7.3])Rn.push(U(d+Ke*re,An+3.4,R-Ke*Ee,.25,.5,24,Vi[Y],I))}),n(_n),We(Rn);let ts=5,Gi=ht([["body",[0,1.7,0],[2.8,2.6,7.2],"#e8e6f4"],["roof",[0,3.15,0],[2.4,.4,6.8],"#a8a4c4"],["win",[0,2.15,0],[2.9,.7,6.4],k(2.6,2.1,1.5),!0],["stripe",[0,1.05,0],[2.9,.28,7],null,!0]],ts*2);for(let d=0;d<ts*2;d++)Gi.paint("stripe",d,d<ts?k(3.4,.5,1.8):k(.5,2.2,3.4));let $t=qt.isle,ns=[],Ys=[],bs=[];for(let d=-$t.r+1;d<$t.r;d+=2){let R=Math.sqrt($t.r*$t.r-d*d);ns.push(U($t.x,-1.4,$t.z+d,R*2,2.2,2.05,"#e8cc98")),R>6&&ns.push(U($t.x-.5,.8,$t.z+d,(R-4.5)*2,.6,2.05,"#2fa86a"))}for(let d=0;d<8;d++){let R=d/8*Ui+.3,I=$t.x+Math.cos(R)*25,Y=$t.z+Math.sin(R)*24;if(I<$t.x-12&&Math.abs(Y-It)<16)continue;let re=ae(st),Ee=Math.PI/2-R;Ys.push(U(I,1.4,Y,11,3.6,8,"#f4f2fb",Ee),U(I-Math.cos(R)*1.2,5,Y-Math.sin(R)*1.2,7,3.2,6,re,Ee)),Be.push(U(I+Math.cos(R)*7.5,1.42,Y+Math.sin(R)*7.5,6,.16,3,k(.16,.9,1.3),Ee)),Le(I+Math.cos(R+1.1)*8,Y+Math.sin(R+1.1)*8,.9,1.4),O||Le(I+Math.cos(R-1.1)*8,Y+Math.sin(R-1.1)*8,.8,1.4)}for(let d of[-.7,0,.7]){let R=Math.PI/2-d,I=$t.x+Math.cos(d)*45,Y=$t.z+Math.sin(d)*45,re=-Math.sin(d)*3.2,Ee=Math.cos(d)*3.2;ns.push(U(I,-.2,Y,2.2,.6,12,"#9a6a48",R)),bs.push(U(I+re,-.4,Y+Ee,2.8,1.8,9,"#f4f2fb",R),U(I+re,1.4,Y+Ee,2,1.2,4.4,"#2a2648",R))}for(let[d,R,I]of[[246,-30,7],[236,-152,9],[178,236,6]]){for(let Y=-I+1;Y<I;Y+=2){let re=Math.sqrt(I*I-Y*Y);ns.push(U(d,-1.4,R+Y,re*2,2.1,2.05,"#e8cc98"))}Le(d+1,R,.9,.7),I>7&&Le(d-2,R+2,.7,.7)}n(ns),n(Ys,!0),n(bs);let Qt=new Xn;e.add(Qt);let fa=[U(0,-3,0,16,9,90,"#f4f2fb"),U(0,1.8,0,16.2,.8,90.2,"#2f3fe4"),U(0,-3,47,11,9,5,"#f4f2fb"),U(0,-3,51,6,8.6,3,"#f4f2fb")];for(let d=0;d<6;d++)fa.push(U(0,6+d*2.8,-5-d*2,14.4-d*1.3,2.8,72-d*9,d%2?"#e8e6f4":"#fbfaff"));fa.push(U(0,22.8,-26,5,8,7,"#c8324a"),U(0,22.8,18,11,2.6,6,"#e8e6f4")),$e(fa,Qt);let Zs=[U(0,30.8,-26,5.2,.5,7.2,k(3.4,1,.6))];for(let d=0;d<6;d++){let R=14.4-d*1.3,I=72-d*9,Y=-5-d*2,re=6+d*2.8;for(let Ee of[-1,1])Zs.push(U(Ee*(R/2+.06),re+1,Y,.1,.55,I-3,k(2.6,2,1.3)),U(Ee*(R/2+.1),re+2.6,Y,.18,.18,I,d%2?k(3.2,.5,1.8):k(.5,2.2,3.4)))}for(let d of[-1,1])Zs.push(U(d*8.06,-.6,0,.1,.5,84,k(2.4,1.9,1.2)));We(Zs,Qt);let Wi=0,is=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#ff8a4a","#c8a8ff","#f4f0ff"].map(t),Js=[];for(let d=-o+12.8;d<o-4;d+=9)for(let R of[58.4,64.4]){if(Math.abs(d-h)<7||Math.abs(d+40)<6||Math.abs(d-52)<6||P()<.3)continue;let I=d+(P()-.5)*1.5,Y=ae(is);Js.push(U(R,0,I,.2,2.8,.2,"#f4f0ff"),U(R,2.6,I,2.8,.3,2.8,Y),U(R,2.9,I,1.5,.3,1.5,Y),U(R+1.7,0,I+.3,1.1,.06,2.1,ae(is)))}for(let d of[-57.5,-21.5,14.5,59.5]){let I=ae(st);for(let Y of[-.9,.9])for(let re of[-.9,.9])Js.push(U(66.6+Y,0,d+re,.3,2.8,.3,"#f4f0ff"));Js.push(U(66.6,2.8,d,2.6,2,2.6,I),U(66.6,4.8,d,3.2,.3,3.2,"#ff4f6e"),U(66.6+1.3,4.8,d,.12,2.4,.12,"#f4f0ff"),U(66.6+1.8,6.5,d,1,.6,.08,"#ff4f6e"))}for(let d of[-40,52])Js.push(U(62,0,d-4,.2,2.6,.2,"#f4f0ff"),U(62,0,d+4,.2,2.6,.2,"#f4f0ff"),U(62,1.8,d,.06,.8,8,"#e8e4f4"));n(Js);let Ks=ht([["hull",[0,.45,0],[1.1,.6,2.6],null],["seat",[0,.9,-.3],[.6,.35,1.2],"#1a1638"],["rider",[0,1.5,-.1],[.5,.9,.4],null],["head",[0,2.15,-.1],[.36,.36,.36],"#f0c9a0"]],4),da=[[150,-48,12,18,.32,0],[158,-30,10,14,.38,2],[150,44,13,16,.3,4],[160,62,9,12,.36,1]];da.forEach((d,R)=>{Ks.paint("hull",R,ae(is)),Ks.paint("rider",R,ae(is))});let pa=ht([["hull",[0,.5,0],[2.4,1.2,6.6],"#f4f2fb"],["cab",[0,1.5,-.6],[1.8,1,2.2],"#2a2648"]],1),yr=ht([["c1",[-2.6,-.5,0],[2.4,.4,2.6],"#ff4f9e"],["c2",[0,0,0],[3,.4,2.6],"#ffd23f"],["c3",[2.6,-.5,0],[2.4,.4,2.6],"#5fc8ff"],["man",[0,-4.6,0],[.5,1,.4],"#2a2648"]],1),ws=new Jt(s(),new Tt({color:new Ue(.8,.8,.9)}),2);ws.frustumCulled=!1,e.add(ws);let Xi=[];{for(let R=0;R<=16;R++){let I=-300+R/16*360;Xi.push([88,30,I])}for(let R=1;R<16;R++){let I=Math.PI-R/16*Math.PI;Xi.push([128+Math.cos(I)*40,30,60+Math.sin(I)*40])}for(let R=0;R<=16;R++)Xi.push([168,30,60-R/16*360]);for(let R=1;R<16;R++){let I=-R/16*Math.PI;Xi.push([128+Math.cos(I)*40,30,-300+Math.sin(I)*40])}}let ma=Z(Xi),ga=ht([["body",[0,0,0],[1,1,6.4],"#f4f2fb"],["wing",[0,.3,.6],[10,.22,1.5],"#ff4f9e"],["stab",[0,.5,-2.9],[3,.18,.9],"#ff4f9e"],["fin",[0,1.1,-2.9],[.16,1.3,1],"#ff4f9e"],["prop",[0,0,3.3],[1.8,1.8,.06],k(.5,.5,.6),!0],["nav",[0,-.6,0],[.3,.3,.3],k(5,.4,.4),!0]],1),xa=je(1024,236),Ct=xa.tex,on=new Tt({map:Ct,toneMapped:!1,color:new Ue(1.15,1.15,1.15)}),Lt=new ft(new li(26,6),on),zt=new ft(new li(26,6),on);e.add(Lt),e.add(zt);let Ln=null,kn=null;function vt(){let d=xa.g,R=Ln;if(d.fillStyle="#ff4f9e",d.fillRect(0,0,1024,236),d.fillStyle="#fff6fb",d.fillRect(10,10,1004,216),!R){d.fillStyle="#2a1270",d.font="900 92px Inter, sans-serif",d.textAlign="center",d.fillText("VICE \xB7 THE TRENCHES",512,150),Ct.needsUpdate=!0;return}d.save(),d.beginPath(),d.arc(118,118,88,0,Ui),d.clip(),kn?d.drawImage(kn,30,30,176,176):z(d,118,118,88,R.symbol,R.mint),d.restore(),d.textAlign="left",d.fillStyle="#ff2f8e",d.font="900 34px Inter, sans-serif",d.fillText("#1 TRENDING ON PUMP.FUN",232,68),d.fillStyle="#1a0a50",d.font="900 112px Inter, sans-serif",d.fillText(Oe(d,"$"+R.symbol,540),226,186),d.textAlign="right",d.fillStyle=(R.chg||0)>=0?"#10a070":"#e0306a",d.font="900 64px Inter, sans-serif",d.fillText(R.chg==null?"":(R.chg>0?"+":"")+R.chg.toFixed(0)+"%",1e3,120),d.fillStyle="#5a4a90",d.font="800 28px Inter, sans-serif",d.fillText(R.tf?"in "+R.tf:"",1e3,172),Ct.needsUpdate=!0}vt();function _a(d){if(!d)return;let R=Ln&&Ln.mint===d.mint;R&&Ln.chg===d.chg||(Ln=d,Lt.userData=zt.userData={kind:"coin",key:d.mint,coin:d},R||(kn=null,y(d.iconUrl,I=>{Ln&&Ln.mint===d.mint&&(kn=I,vt())})),vt())}let Ei=ws,$s=je(256,256),qi=$s.g;{let d=qi.createRadialGradient(128,128,6,128,128,128);d.addColorStop(0,"rgba(255,244,252,1)"),d.addColorStop(.33,"rgba(255,232,248,1)"),d.addColorStop(.37,"rgba(255,170,224,.42)"),d.addColorStop(.6,"rgba(190,120,255,.14)"),d.addColorStop(1,"rgba(120,80,255,0)"),qi.fillStyle=d,qi.fillRect(0,0,256,256);for(let[R,I,Y]of[[112,108,9],[146,134,7],[118,150,5],[140,100,4]])qi.fillStyle="rgba(232,196,236,.5)",qi.beginPath(),qi.arc(R,I,Y,0,Ui),qi.fill();$s.tex.needsUpdate=!0}let ss=new ci(new Kn({map:$s.tex,transparent:!0,depthWrite:!1,toneMapped:!1,color:new Ue(1.7,1.6,1.7)}));ss.position.copy(be(.82,.3,-.49).normalize().multiplyScalar(2100)),ss.scale.setScalar(360),ss.renderOrder=-1,e.add(ss);let Ts=[],yl=["#6a4a9a","#7a5aa8","#5a3a8a","#8a6ab8"].map(t);for(let d=0;d<(O?8:18);d++){let R=P()*Ui,I=280+P()*700,Y=Math.cos(R)*I,re=Math.sin(R)*I,Ee=160+P()*90,Ke=7+Math.floor(P()*6);for(let qe=0;qe<Ke;qe++)Ts.push({x:Y+(P()-.5)*40,y:Ee+(P()-.5)*6,z:re+(P()-.5)*22,w:10+P()*14,h:3+P()*3,d:8+P()*10,c:ae(yl)})}let Yn=new Jt(s(),new Kt({emissive:new Ue("#2a1450"),transparent:!0,opacity:.6,depthWrite:!1}),Ts.length);Yn.frustumCulled=!1,e.add(Yn),Ts.forEach((d,R)=>Yn.setColorAt(R,d.c));let Vn=new ft(s(),new Tt({color:new Ue(4,3.8,4.4),toneMapped:!1,transparent:!0,opacity:0,depthWrite:!1}));e.add(Vn);let Mr=6,js=0,Sr=new F,Qs=new F,va=d=>-o+d*a-2,x=[],b=[],T=[];for(let d=1;d<c;d++)for(let R=1;R<=c;R++){let I=va(d),Y=va(R);I>l-3||(x.push(U(I+2.5,0,Y+2.5,.26,6,.26,"#2a2648"),U(I+1.9,5.85,Y+1.9,1.5,.16,.16,"#2a2648",-Math.PI/4),U(I-2.5,0,Y-2.5,.22,4.4,.22,"#1a1830"),U(I-2.5,4.2,Y-2.5,.7,1.1,.7,"#141226")),b.push(U(I+1.35,5.62,Y+1.35,.9,.24,.9,k(3.6,2.4,1.2))),T.push([I-2.5,Y-2.5,P()*10]))}let G=[];for(let d of u)d.big&&G.push(U(d.x+d.w/2-.4,d.y,d.z+d.d/2-.4,.45,.45,.45,k(4,.3,.35)),U(d.x-d.w/2+.4,d.y,d.z-d.d/2+.4,.45,.45,.45,k(4,.3,.35)));for(let[d,R,I]of p)G.push(U(d,R,I,.5,.5,.5,k(4,.3,.35)));let j=u.filter(d=>!d.big&&d.y>=8&&d.x<l-14),V=[],S=[];for(let d=0;d<Math.min(O?18:40,j.length);d++){let R=j[Math.floor(P()*j.length)],I=P()<.5?1:-1,Y=3+P()*4,re=2.4+P()*2;P()<.5?V.push(U(R.x+I*(R.w/2+.3),re,R.z+(P()-.5)*(R.d-3),.3,Y,1,ae(Nt))):V.push(U(R.x+(P()-.5)*(R.w-3),re,R.z+I*(R.d/2+.3),1,Y,.3,ae(Nt)))}for(let d of j)if(P()<.12){let R=d.x+(P()-.5)*(d.w-4),I=d.z+(P()-.5)*(d.d-4);for(let Y of[-.8,.8])for(let re of[-.8,.8])S.push(U(R+Y,d.y,I+re,.25,1.6,.25,"#5a3a28"));S.push(U(R,d.y+1.6,I,2.4,2.6,2.4,"#8a5a3a"),U(R,d.y+4.2,I,1.6,.6,1.6,"#6a4630"))}n(x),n(S),We(b);let W=We(T.map(([d,R])=>U(d,5.3,R,.55,.14,.55,k(.3,3,1))),e),ie=We(G,e),Ie=We(V),Pt=V.map(d=>d.c.clone());We(Be);let ct=m.x,ut=m.z,Yt=ct-1.6,Rt=ut+1.6,Gt=ct+4.6,en=ut-4.6,Un=22,di=66,rs=[U(ct,0,ut,13.4,.1,13.4,"#6a5040")];for(let d of[-1,1])rs.push(U(ct+d*6.7,0,ut,.15,1.4,13.4,"#ff8a3a"),U(ct,0,ut+d*6.7,13.4,1.4,.15,"#ff8a3a"));for(let d=0;d<3;d++)rs.push(U(Gt-.2,d*.7,ut+4.4,3,.6,3,"#a8a2c4"));rs.push(U(Gt,0,en,1.6,di,1.6,"#ffd23f"));for(let d=4;d<di;d+=4)rs.push(U(Gt,d,en,1.8,.3,1.8,"#e0b020"));n(rs);let er=[];for(let d=0;d<Un;d++){let R=d*2.6;er.push(U(Yt,R+2.1,Rt,9.4,.5,9.4,"#b8b2d4"),U(Yt,R,Rt,3,2.1,3,"#9a94b8"));for(let I of[-1,1])for(let Y of[-1,1])er.push(U(Yt+I*4.2,R,Rt+Y*4.2,.5,2.1,.5,"#8a84a8"))}let Ml=n(er,!1,!1),bi=3,Ka=0,uh=0,Er=-1;Ml.count=bi*6;let Sl=new ft(s(),new Tt({color:new Ue(4,3.4,2.2),toneMapped:!1}));Sl.scale.set(9.6,.25,.25),e.add(Sl);let ya=new Xn;ya.position.set(Gt,di,en),e.add(ya);let El=new Kt({color:"#ffd23f"}),fh=new Kt({color:"#8a84a8"}),bl=new Kt({color:"#2a2648"}),as=(d,R,I,Y,re,Ee,Ke)=>{let qe=new ft(s(),d);return qe.scale.set(R,I,Y),qe.position.set(re,Ee,Ke),ya.add(qe),qe};as(El,30,1.2,1.2,9,1.2,0),as(El,9,1,1,-8.5,1.2,0),as(fh,3,2.6,2.4,-11.5,.6,0),as(bl,2.4,2.4,2.4,0,-.6,1.6),as(El,.8,6,.8,0,4.2,0);let Rf=as(bl,1.6,.7,1.6,10,.3,0),dh=as(bl,.12,1,.12,10,-5,0),Cf=as(fh,1.2,.8,1.2,10,-10,0),ph=as(new Kt({color:"#b8b2d4"}),3,.6,3,10,-11,0),$a=new ft(s(),new Tt({color:new Ue(5,.3,.3),toneMapped:!1}));$a.scale.setScalar(.5),$a.position.set(23.8,1.9,0),ya.add($a);let mh=(d,R)=>Math.atan2(-(R-en),d-Gt),ja=[Gt-.2,ut+4.4],Qa=mh(ja[0],ja[1]),eo=Math.hypot(ja[0]-Gt,ja[1]-en),br=mh(Yt,Rt),wr=Math.hypot(Yt-Gt,Rt-en),wl=je(512,220),gh=-9,Tl=new ci(new Kn({map:wl.tex,transparent:!0}));Tl.position.set(ct,11,ut+8.5),Tl.scale.set(9.4,4,1),e.add(Tl);function to(){let d=wl.g;d.clearRect(0,0,512,220),d.fillStyle="rgba(10,5,32,.92)",L(d,6,6,500,208,28),d.fill(),d.strokeStyle="#ffd23f",d.lineWidth=5,L(d,6,6,500,208,28),d.stroke(),d.textAlign="center",d.fillStyle="#ffd23f",d.font="900 24px Inter, sans-serif",d.fillText(Er>=0?"TOPPED OUT \xB7 A NEW ONE STARTS":"VICE TOWER \xB7 1 FLOOR PER LAUNCH",256,54),d.fillStyle="#fff",d.font="900 76px Inter, sans-serif",d.fillText(uh.toLocaleString("en-US"),256,138),d.fillStyle="rgba(220,214,255,.85)",d.font="800 22px Inter, sans-serif",d.fillText("pump.fun launches since you arrived",256,182),wl.tex.needsUpdate=!0}to();function Pf(){Ka++,uh++,performance.now()-gh>700&&(gh=performance.now(),to())}let If=f.position,xh=0,Al=0,_h=0,Rl=!1;function Lf(d,R){At.by.strobe.m.material.color.setScalar(Math.sin(R*9)>.7?1:.04),At.by.bcn.m.material.color.setScalar(Math.sin(R*3.1)>.2?1:.05);for(let ee=0;ee<2;ee++){let de=Math.min(.99999,Math.max(0,((R*34/ys+ee*.5)%1+1)%1));mn.getPointAt(de,B),mn.getTangentAt(de,q);let He=Math.atan2(q.x,q.z),tt=-Math.asin(Math.max(-1,Math.min(1,q.y))),xt=He-_r[ee];xt=Math.atan2(Math.sin(xt),Math.cos(xt)),_r[ee]=He,Pn[ee]+=(Math.max(-.6,Math.min(.6,-xt/Math.max(d,.001)*.9))-Pn[ee])*Math.min(1,d*3),At.set(5+ee,B.x,Math.max(0,B.y),B.z,He,tt,Pn[ee])}if(jn.length&&R-Vs>7){let ee=cn.find(de=>!$n.some(He=>He.slot===de));if(ee!=null){let de=jn.shift();$n.push({t:de,slot:ee,s:0,v:0,sp:Ms(de)}),Vs=R}}for(let ee=$n.length-1;ee>=0;ee--){let de=$n[ee];de.v=Math.min(62,de.v+6.5*d),de.s+=de.v*d;let He=Math.max(0,de.s-170),tt=ce.x0+22+de.s,xt=Math.min(320,He*.22);At.set(de.slot,tt,xt,ce.z,Math.PI/2,-Math.min(.21,He*.006)),de.sp.position.set(tt,xt+10,ce.z);let jt=Math.max(.42,Math.min(3.2,If.distanceTo(de.sp.position)/90));de.sp.scale.set(10.8*jt,3.86*jt,1),tt>1150&&(At.hide(de.slot),e.remove(de.sp),de.sp.material.map.dispose(),de.sp.material.dispose(),$n.splice(ee,1))}At.flush();{let ee=Math.floor(R*14)%9;for(let de=0;de<7;de++)bt.setColorAt(de,Me.setScalar(de===6-ee?6:.04));bt.instanceColor.needsUpdate=!0}for(let ee=0;ee<Ve;ee++){let de=$[ee],[He,tt,xt]=hn((R+ee*4.5)%18);N.compose(C.set(He,28.8,de),E.identity(),J.set(3.4,1.6,4.4)),Je.setMatrixAt(ee,N);let jt=28,Zn=tt+.5;N.compose(C.set(He,(jt+Zn)/2,de),E,J.set(.14,Math.max(.01,jt-Zn),.14)),dt.setMatrixAt(ee,N),N.compose(C.set(He,tt+.25,de),E,J.set(2.9,.5,6.3)),ot.setMatrixAt(ee,N),xt?N.compose(C.set(He,tt-1.29,de),E,J.set(2.5,2.58,6.05)):N.copy(_e),pt.setMatrixAt(ee,N)}Je.instanceMatrix.needsUpdate=dt.instanceMatrix.needsUpdate=ot.instanceMatrix.needsUpdate=pt.instanceMatrix.needsUpdate=!0;for(let ee=0;ee<un;ee++)Dt(an,R*8+ee/un*an.len),Ot.set(ee,xe.x,.6,xe.z,xe.yaw);Ot.flush();for(let ee=0;ee<2;ee++){let de=R*.09+ee*Math.PI,He=124+Math.cos(de)*14,tt=-220+Math.sin(de)*52,xt=Math.atan2(-Math.sin(de)*14,Math.cos(de)*52);mt.set(ee,He,.1+Math.sin(R*1.6+ee)*.12,tt,xt),Math.random()<d*6&&_(C.set(He-Math.sin(xt)*3.6,.5,tt-Math.cos(xt)*3.6),ne.set((Math.random()-.5)*1.4,.6,(Math.random()-.5)*1.4),[2.2,2.4,2.8],1,.3,2.5)}mt.flush();for(let ee=0;ee<Mi;ee++){let de=ua[ee];de.d+=de.sp*d,Dt(de.pa,de.d),ki.set(ee,xe.x,xe.y,xe.z,xe.yaw,xe.pitch,0,de.sc)}ki.flush();{let ee=R*15,de=-R*15+Si.len/2;for(let He=0;He<ts;He++){Dt(Si,ee-He*7.7);let tt=Math.cos(xe.yaw),xt=Math.sin(xe.yaw);Gi.set(He,xe.x+1.9*tt,An-.1,xe.z-1.9*xt,xe.yaw),Dt(Si,de+He*7.7),tt=Math.cos(xe.yaw),xt=Math.sin(xe.yaw),Gi.set(ts+He,xe.x-1.9*tt,An-.1,xe.z+1.9*xt,xe.yaw+Math.PI)}Gi.flush()}da.forEach(([ee,de,He,tt,xt,jt],Zn)=>{let os=R*xt+jt,Ma=ee+He*Math.sin(os),Sa=de+tt*Math.sin(2*os),no=He*xt*Math.cos(os),Uf=2*tt*xt*Math.cos(2*os),Cl=Math.atan2(no,Uf);Ks.set(Zn,Ma,.1+Math.abs(Math.sin(R*5+Zn))*.12,Sa,Cl,-.05,Math.max(-.4,Math.min(.4,-Math.sin(2*os)*.4))),Math.random()<d*12&&_(C.set(Ma-Math.sin(Cl)*1.4,.45,Sa-Math.cos(Cl)*1.4),ne.set((Math.random()-.5)*1.6,.9+Math.random()*.6,(Math.random()-.5)*1.6),[2.4,2.6,3],.8,.26,2.6)}),Ks.flush();{let ee=R*.06,de=186+Math.sin(ee)*10,He=-10+Math.sin(ee*2)*70,tt=Math.cos(ee)*10,xt=Math.cos(ee*2)*140,jt=Math.atan2(tt,xt),Zn=Math.sin(jt),os=Math.cos(jt);pa.set(0,de,.1,He,jt),pa.flush();let Ma=de-Zn*26,Sa=24+Math.sin(R*.7)*1.2,no=He-os*26;yr.set(0,Ma,Sa,no,jt,0,Math.sin(R*.9)*.08),yr.flush(),B.set(de-Zn*3,1.4,He-os*3),q.set(Ma,Sa-4,no),E.setFromUnitVectors(se,ne.subVectors(q,B).normalize()),N.compose(C.addVectors(B,q).multiplyScalar(.5),E,J.set(.07,.07,B.distanceTo(q))),ws.setMatrixAt(0,N),Math.random()<d*8&&_(C.set(de-Zn*3.4,.5,He-os*3.4),ne.set((Math.random()-.5)*1.4,.7,(Math.random()-.5)*1.4),[2.2,2.4,2.8],1,.3,2.5)}{let ee=R*16;Dt(ma,ee);let de=xe.x,He=xe.z,tt=xe.yaw;ga.set(0,de,30+Math.sin(R*.8)*.6,He,tt,0,0),ga.flush(),Dt(ma,ee-27,De);let xt=29.4+Math.sin(R*.8-.4)*.6;Lt.position.set(De.x,xt,De.z),Lt.rotation.set(0,De.yaw-Math.PI/2,Math.sin(R*2.2)*.03),zt.position.copy(Lt.position),zt.rotation.set(0,De.yaw+Math.PI/2,-Math.sin(R*2.2)*.03),Dt(ma,ee-14,De),B.set(de-Math.sin(tt)*3.2,30,He-Math.cos(tt)*3.2),q.set(De.x,xt+.4,De.z),E.setFromUnitVectors(se,ne.subVectors(q,B).normalize()),N.compose(C.addVectors(B,q).multiplyScalar(.5),E,J.set(.06,.06,B.distanceTo(q))),Ei.setMatrixAt(1,N),Ei.instanceMatrix.needsUpdate=!0}{let ee=-26*Math.sin(Wi),de=420*Math.cos(Wi);Wi+=d*6/Math.max(1,Math.hypot(ee,de));let He=300+26*Math.cos(Wi),tt=420*Math.sin(Wi),xt=Math.atan2(ee,de);Qt.position.set(He,Math.sin(R*.5)*.15,tt),Qt.rotation.y=xt,Math.random()<d*10&&_(C.set(He-Math.sin(xt)*46+(Math.random()-.5)*8,.6,tt-Math.cos(xt)*46),ne.set((Math.random()-.5)*2,.8,(Math.random()-.5)*2),[2.2,2.4,2.8],1.4,.45,2)}if((xh=(xh+1)%2)===0){let ee=R*2.1;fn.forEach((de,He)=>{let tt=Math.max(0,Math.sin(de.a*2-ee))**6*.9;N.compose(C.set(de.x,de.y+.5+tt,de.z),E.identity(),J.set(.55,.9,.55)),wn.setMatrixAt(He,N)}),wn.instanceMatrix.needsUpdate=!0}for(let ee=0;ee<T.length;ee++){let de=(R+T[ee][2])%10;W.setColorAt(ee,de<4.2?Me.setRGB(.3,3.4,1.1):de<5?Me.setRGB(3.6,2.4,.3):Me.setRGB(3.6,.3,.35))}W.instanceColor.needsUpdate=!0,ie.material.color.setScalar(Math.sin(R*2.6)>.35?1:.07);for(let ee=0;ee<V.length;ee+=5){let de=(R*1.7+ee*.37)%7,He=de>3.1&&de<3.2||de>3.35&&de<3.5?.15:1;Ie.setColorAt(ee,Me.copy(Pt[ee]).multiplyScalar(He))}Ie.instanceColor.needsUpdate=!0;for(let ee=0;ee<Xe;ee++){let[de,He,tt]=fe[ee];for(let xt=0;xt<gt;xt++){let jt=(R*.15+xt/gt+ee*.37)%1,Zn=(.9+jt*3.4)*(jt>.85?(1-jt)/.15:1);N.compose(C.set(de+jt*8,He+.8+jt*16,tt+jt*2.5),E.setFromEuler(oe.set(jt*2,ee+jt,0)),J.setScalar(Math.max(.01,Zn))),_t.setMatrixAt(ee*gt+xt,N)}}if(_t.instanceMatrix.needsUpdate=!0,Ts.forEach((ee,de)=>{ee.x+=d*3,ee.x>1e3&&(ee.x-=2e3),N.compose(C.set(ee.x,ee.y,ee.z),E.identity(),J.set(ee.w,ee.h,ee.d)),Yn.setMatrixAt(de,N)}),Yn.instanceMatrix.needsUpdate=!0,Mr-=d,Mr<=0){Mr=9+Math.random()*12,js=1;let ee=Math.random()*Ui;Qs.set(Math.cos(ee)*1500,420+Math.random()*200,Math.sin(ee)*1500),Sr.set(Math.cos(ee+2)*900,-160,Math.sin(ee+2)*900)}for(js>0?(js=Math.max(0,js-d*1.6),Qs.addScaledVector(Sr,d),Vn.position.copy(Qs),E.setFromUnitVectors(se,ne.copy(Sr).normalize()),Vn.quaternion.copy(E),Vn.scale.set(1.4,1.4,70),Vn.material.opacity=js,Vn.visible=!0):Vn.visible=!1,Al+=d*(O?14:30);Al>=1;)Al--,_(C.set(Pe.x+(Math.random()-.5)*.4,2.2,Pe.z+(Math.random()-.5)*.4),ne.set((Math.random()-.5)*2.4,11+Math.random()*4,(Math.random()-.5)*2.4),[1.3,2.2,3.2],1.6,.3,.4);_h+=d;let I=_h%9,Y=bi*2.6,re=Math.max(Y,4)+6,Ee=Qa,Ke=eo,qe=re,et=!1;if(I<1.6)qe=re+(2.4-re)*St(I/1.6);else if(I<2.1)qe=2.4,et=I>1.85;else if(I<3.6)qe=2.4+(re-2.4)*St((I-2.1)/1.5),et=!0;else if(I<5.6){let ee=St((I-3.6)/2);Ee=Qa+(br-Qa)*ee,Ke=eo+(wr-eo)*ee,et=!0}else if(I<6.6)Ee=br,Ke=wr,qe=re+(Y+.55-re)*St(I-5.6),et=!0;else if(I<7)Ee=br,Ke=wr,qe=Y+.55,et=I<6.8;else if(I<8)Ee=br,Ke=wr,qe=Y+.55+(re-Y-.55)*St(I-7);else{let ee=St(I-8);Ee=br+(Qa-br)*ee,Ke=wr+(eo-wr)*ee}if(I>=6.8&&I<7&&!Rl&&(Rl=!0,Er<0&&Ka>0)){let ee=Math.min(Ka,3);Ka-=ee,bi=Math.min(Un,bi+ee),Ml.count=bi*6;for(let de=0;de<26;de++)_(C.set(Yt+(Math.random()-.5)*8,bi*2.6+1,Rt+(Math.random()-.5)*8),ne.set((Math.random()-.5)*6,3+Math.random()*5,(Math.random()-.5)*6),[3.6,2.6,.5],1,.4,1.6);if(bi>=Un){Er=R,to();for(let de=0;de<120;de++){let He=Math.random()*Ui,tt=Math.acos(2*Math.random()-1),xt=14+Math.random()*8;_(C.set(Yt,bi*2.6+4,Rt),ne.set(Math.sin(tt)*Math.cos(He)*xt,Math.abs(Math.cos(tt))*xt+4,Math.sin(tt)*Math.sin(He)*xt),de%3?[3.6,2.6,.5]:[3.4,.6,2],1.8,.7,1.4)}}}I<6.8&&(Rl=!1),Er>=0&&R-Er>7&&(Er=-1,bi=3,Ml.count=bi*6,to());let yt=di-qe;ya.rotation.y=Ee,Rf.position.x=Ke,dh.position.set(Ke,-(yt-1)/2,0),dh.scale.y=Math.max(.1,yt-1),Cf.position.set(Ke,-yt+.6,0),ph.position.set(Ke,-yt-.2,0),ph.visible=et,Sl.position.set(Yt,Y+.4,Rt),$a.visible=Math.sin(R*3)>0}return{step:Lf,takeoff:xn,setBanner:_a,setArena:Es,launched:Pf,shots:{site:()=>[be(ct+34,62,ut-52),be(Yt,Math.max(12,bi*2.6*.55),Rt)],airport:()=>[be(-232,30,-214),be(-350,6,-280)],arena:()=>[be(nn.x+44,66,nn.z+64),be(nn.x,4,nn.z)],port:()=>[be(130,46,-122),be(52,8,-222)],bridge:()=>[be(26,36,176),be(108,22,122)],beach:()=>{let d=Lt.position,R=d.x<128;return[be(d.x+(R?-46:-40),38,d.z+(R?-30:30)),be(d.x,27,d.z)]}},glowG:nt,pickables:()=>{let d=[Lt,zt,zi];for(let R of $n)d.push(R.sp);return d}}}var ks=Math.PI*2;function Yx(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}var $i=9,vs=14,Af=4,ji=vs+Af,Cn=$i*ji/2,tn=Cn-ji*1.4,Zx=`
attribute float aSeed; varying vec3 vW; varying vec3 vN; varying vec3 vC; varying float vS; varying float vTop; varying float vBot;
void main(){
  vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
  vW = w.xyz; vN = normalize(mat3(modelMatrix * instanceMatrix) * normal); vC = instanceColor; vS = aSeed;
  vTop = (modelMatrix * instanceMatrix * vec4(0.0, 0.5, 0.0, 1.0)).y; vBot = (modelMatrix * instanceMatrix * vec4(0.0, -0.5, 0.0, 1.0)).y;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,Jx=`
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
}`,Kx=`
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
}`,hh="varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",$x=`
uniform vec3 uFog; uniform float uFogD; uniform float uTime; uniform float uFlash; varying vec3 vW;
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main(){
  vec2 id = floor(vW.xz * .5); float r = h21(id), w = .5 + .5 * sin(uTime * 1.3 + r * 6.28 + vW.x * .2);
  vec3 col = mix(vec3(.16, .2, .62), vec3(.32, .26, .78), w * .7);
  col += vec3(1., .5, .8) * pow(w, 12.) * .7;
  vec2 f = fract(vW.xz * .5); col *= mix(.8, 1., smoothstep(0., .05, min(min(f.x, 1. - f.x), min(f.y, 1. - f.y)))); col = pow(col, vec3(2.2)) * (1. + uFlash);
  float d = length(vW - cameraPosition), fo = 1. - exp(-uFogD * uFogD * d * d);
  gl_FragColor = vec4(mix(col, uFog, fo), 1.);
}`,jx=`
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
}`;function B_(i,e={}){let t=matchMedia("(pointer:coarse)").matches||innerWidth<760,n=new ka({canvas:i,antialias:!1,powerPreference:"high-performance"});n.toneMapping=Za,n.toneMappingExposure=1.05,n.outputColorSpace=Xt;let s=Math.min(devicePixelRatio||1,t?1.25:1.5),r=new Ko,o=new Ue("#4a2a8a"),a={uFog:{value:o},uFogD:{value:.0031},uTime:{value:0},uFlash:{value:0},uMood:{value:.5}},c=new Fn(42,1,.5,5200),l=Yx(20261119),h=new F(-.45,.75,.5).normalize();r.add(new ft(new Ga(2600,32,16),new ln({side:zn,depthWrite:!1,uniforms:{uTime:a.uTime,uFlash:a.uFlash,uMood:a.uMood},vertexShader:hh,fragmentShader:jx})));let u=wf(Cn,tn),p=new ft(new li(5e3,5e3,1,1).rotateX(-Math.PI/2),new ln({uniforms:{...a,uPitch:{value:ji},uBlk:{value:vs},uHalf:{value:Cn},uBeach:{value:tn},uZone:{value:u.tex},uRw:{value:new Ht(qt.rw.x0,qt.rw.x1,qt.rw.z,qt.rw.hw)},uTwz:{value:qt.twz},uApron:{value:new Ht(qt.apron.x0,qt.apron.x1,qt.apron.z0,qt.apron.z1)},uField:{value:new Ht(qt.field.x,qt.field.z,qt.field.hx,qt.field.hz)},uPortR:{value:new Ht(qt.port.x0,qt.port.x1,qt.port.z0,qt.port.z1)}},vertexShader:hh,fragmentShader:Kx}));r.add(p);let m=new ft(new li(2600,5e3).rotateX(-Math.PI/2).translate(tn+14+1300,.35,0),new ln({uniforms:a,vertexShader:hh,fragmentShader:$x}));r.add(m);let v=x=>new ln({uniforms:{...a,uSun:{value:h},uWin:{value:x?1:0}},vertexShader:Zx,fragmentShader:Jx}),_=()=>new dr(1,1,1),g=[],f=e.gate&&!e.reduced?0:99;function L(x,b=!1,T=!0){let G=_(),j=new Float32Array(x.length),V=new Jt(G,v(b),x.length);T&&g.push({m:V,list:x});let S=new Ut,W=new yn,ie=new F,Ie=new F,Pt=new _s;return x.forEach((ct,ut)=>{ie.set(ct.x,ct.y+ct.h/2,ct.z),Ie.set(ct.w,ct.h,ct.d),W.setFromEuler(Pt.set(ct.rx||0,ct.ry||0,ct.rz||0)),S.compose(ie,W,Ie),V.setMatrixAt(ut,S),V.setColorAt(ut,ct.c),j[ut]=l()}),G.setAttribute("aSeed",new sa(j,1)),V.instanceMatrix.needsUpdate=!0,V.instanceColor.needsUpdate=!0,V.frustumCulled=!1,r.add(V),V}let y=x=>new Ue(x),z=["#ff9ec9","#9ff0d0","#c8a8ff","#ffc9a0","#a8d8ff","#fff0a8"].map(y),P=["#2a2f7a","#3a2a8a","#28407a","#4a2f8f","#232a66"].map(y),O=["#8f86b8","#a49ccb","#7a72a8","#b3a9d6"].map(y),N=[],le=[],E=[],C=[],J=[],oe=null,Me=x=>-Cn+x*ji+vs/2;for(let x=0;x<$i;x++)for(let b=0;b<$i;b++){let T=Me(x),G=Me(b);if(T>tn-2)continue;if(x===4&&b===2){oe={x:T,z:G};continue}let j=Math.hypot(T,G)/Cn,V=T>tn-ji-2;if(!V&&l()<.08){E.push([T,G]);continue}let S=V?2:l()<.45?1:4,W=S===1?[[0,0,vs-2,vs-2]]:S===2?[[0,-3.5,vs-3,6],[0,3.5,vs-3,6]]:[[-3.5,-3.5,6,6],[3.5,-3.5,6,6],[-3.5,3.5,6,6],[3.5,3.5,6,6]];for(let[ie,Ie,Pt,ct]of W){let ut=Math.max(3,Math.round(Pt-l()*2)),Yt=Math.max(3,Math.round(ct-l()*2)),Rt=V?5+Math.round(l()*5):j<.35?22+Math.round(l()*30):j<.65?9+Math.round(l()*14):4+Math.round(l()*7),Gt=V?z[Math.floor(l()*z.length)]:Rt>20?P[Math.floor(l()*P.length)]:l()<.5?O[Math.floor(l()*O.length)]:z[Math.floor(l()*z.length)],en=T+ie,Un=G+Ie;if(N.push({x:en,y:0,z:Un,w:ut,d:Yt,h:Rt,c:Gt}),Rt>22&&(N.push({x:en,y:Rt,z:Un,w:Math.max(2,ut-2),d:Math.max(2,Yt-2),h:Math.round(3+l()*6),c:Gt}),l()<.6)){let di=7+l()*6;le.push({x:en,y:Rt+3,z:Un,w:.4,d:.4,h:di,c:y("#c8c0e8")}),J.push([en,Rt+3+di,Un])}if(l()<.55&&le.push({x:en+(l()-.5)*(ut-2),y:Rt,z:Un+(l()-.5)*(Yt-2),w:1.6,d:1.2,h:1,c:y("#5a5280")}),C.push({x:en,y:Rt,z:Un,w:ut,d:Yt,big:Rt>20}),V)for(let di of[-1,1])le.push({x:en-ut/2-.02,y:2+(di+1)*1.6,z:Un,w:.3,d:Yt*.8,h:.35,c:y(di>0?"#ff4f9e":"#5fd8ff"),neon:!0})}}L(N,!0);let B=le.filter(x=>x.neon),q=le.filter(x=>!x.neon);L(q);let ne=new Jt(_(),new Tt({toneMapped:!1}),B.length);{let x=ne,b=new Ut;B.forEach((T,G)=>{b.compose(new F(T.x,T.y,T.z),new yn,new F(T.w,T.h,T.d)),x.setMatrixAt(G,b),x.setColorAt(G,T.c.clone().multiplyScalar(3))}),r.add(x)}let me=[];function he(x,b,T=1){let G=Math.round(7+l()*4),j=(l()-.5)*.25;for(let W=0;W<G;W++)me.push({x:x+j*W*W*.08,y:W*.9*T,z:b,w:.7*T,d:.7*T,h:.9*T,c:y(W%2?"#8a5a3a":"#7a4e30")});let V=x+j*G*G*.08,S=G*.9*T;for(let W=0;W<6;W++){let ie=W/6*ks+l()*.4;for(let Ie=1;Ie<=5;Ie++)me.push({x:V+Math.cos(ie)*Ie*.8*T,y:S+(Ie<3?.3:-(Ie-2)*.55)*T,z:b+Math.sin(ie)*Ie*.8*T,w:.75*T,d:.75*T,h:.35*T,c:y(Ie%2?"#2fbf6e":"#26a85e")})}me.push({x:V,y:S-.3,z:b,w:1.1*T,d:1.1*T,h:.8*T,c:y("#2fbf6e")})}for(let x=-Cn+6;x<Cn;x+=9)he(tn+5+l()*2,x+l()*3),l()<.6&&he(tn+10+l()*3,x+4);let se=E.slice().sort((x,b)=>Math.hypot(x[0]-30,x[1]-30)-Math.hypot(b[0]-30,b[1]-30))[0]||[tn-30,30];for(let x of E){if(x===se)continue;let[b,T]=x;he(b-3,T-2),he(b+3,T+3),he(b+2,T-4,.8)}for(let x=-3;x<=3;x++)he(-Cn-8,x*20+4);L(me);let _e=[];for(let x=0;x<26;x++){let b=Math.PI*(.55+x/25*.95),T=640+l()*260,G=Math.cos(b)*T,j=Math.sin(b)*T*1.1,V=70+l()*110,S=50+l()*130;for(let W=0;W<5;W++){let ie=1-W/5;_e.push({x:G,y:S*W/5,z:j,w:V*ie+10,d:V*ie*.8+10,h:S/5+.5,c:y(W>3?"#4a3c86":"#2c2160")})}}L(_e,!1,!1);let ye=34,U=new F(tn+60,21,ye),k=[];for(let x=tn+10;x<=tn+74;x+=2)k.push({x,y:1.4,z:ye,w:2.02,d:9,h:.5,c:y(x%4?"#9a6a48":"#8a5c3c")});for(let x=tn+16;x<=tn+74;x+=8)for(let b of[-4,4])k.push({x,y:-1,z:ye+b,w:.7,d:.7,h:2.5,c:y("#5a3a28")});for(let x of[-4.4,4.4])for(let b=tn+10;b<=tn+74;b+=4)k.push({x:b,y:1.9,z:ye+x,w:.25,d:.25,h:1.1,c:y("#e8e0f4")});for(let x of[-3,3])k.push({x:U.x-4,y:1.9,z:U.z+x*1.6,w:1,d:1,h:18,c:y("#d8d0ec"),ry:0}),k.push({x:U.x+4,y:1.9,z:U.z+x*1.6,w:1,d:1,h:18,c:y("#d8d0ec")});L(k);let ae=new Xn,be=new Xn;ae.position.copy(U),r.add(ae),ae.add(be);let xe=56,De=new Jt(_(),new Tt({toneMapped:!1}),xe);De.frustumCulled=!1,be.add(De);{let x=new Ut,b=new yn;for(let T=0;T<xe;T++){let G=T/xe*ks;b.setFromAxisAngle(new F(0,0,1),G),x.compose(new F(Math.cos(G)*15,Math.sin(G)*15,0),b,new F(.7,1.8,.7)),De.setMatrixAt(T,x),De.setColorAt(T,new Ue(1,1,1))}}let nt=new Kt({color:"#cfc6ee"});for(let x=0;x<8;x++){let b=new ft(_(),nt);b.scale.set(30,.35,.35),b.rotation.z=x/8*Math.PI,be.add(b)}let We=new ft(_(),new Tt({color:new Ue(3,1.2,2.4),toneMapped:!1}));We.scale.set(2.2,2.2,3),be.add(We);let $e=[],ht=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#c8a8ff","#ff8a4a"];for(let x=0;x<12;x++){let b=new ft(_(),new Kt({color:ht[x%ht.length]}));b.scale.set(2,2.2,2.4),ae.add(b),$e.push(b)}ae.rotation.y=Math.PI/2;let Z=new F(tn+26,0,Cn+70),Dt=[];for(let x=0;x<9;x++)Dt.push({x:Z.x,y:x*2.6,z:Z.z,w:5-x*.25,d:5-x*.25,h:2.6,c:y(x%2?"#ff4f6e":"#f4f0ff")});Dt.push({x:Z.x,y:23.4,z:Z.z,w:3.4,d:3.4,h:2.4,c:y("#2a2060")}),L(Dt,!1,!1);let Ye=new ft(_(),new Tt({color:new Ue(4,3.6,2.4),toneMapped:!1}));Ye.scale.set(2.2,1.6,2.2),Ye.position.set(Z.x,24.6,Z.z),r.add(Ye);let je=new ft(new zs(9,260,24,1,!0).rotateZ(-Math.PI/2).translate(130,0,0),new Tt({color:new Ue(1,.92,.7),transparent:!0,opacity:.07,blending:Pi,depthWrite:!1,side:On}));je.position.set(Z.x,24.6,Z.z),r.add(je);let Oe=x=>-Cn+x*ji-Af/2;function Nt(){let x=1+Math.floor(l()*($i-2)),b=1+Math.floor(l()*($i-2)),T=Math.min($i,x+1+Math.floor(l()*3)),G=Math.min($i,b+1+Math.floor(l()*3)),j=[[Oe(x),Oe(b)],[Oe(T),Oe(b)],[Oe(T),Oe(G)],[Oe(x),Oe(G)]].map(([W,ie])=>[Math.min(W,tn-1),ie]);l()<.5&&j.reverse();let V=[],S=0;for(let W=0;W<4;W++){let ie=j[W],Ie=j[(W+1)%4],Pt=Math.hypot(Ie[0]-ie[0],Ie[1]-ie[1])||1;V.push({a:ie,b:Ie,l:Pt,at:S}),S+=Pt}return{segs:V,len:S}}function st(x,b,T){b=(b%x.len+x.len)%x.len;for(let G of x.segs)if(b<=G.at+G.l){let j=(b-G.at)/G.l,V=(G.b[0]-G.a[0])/G.l,S=(G.b[1]-G.a[1])/G.l;return[G.a[0]+(G.b[0]-G.a[0])*j-S*T,G.a[1]+(G.b[1]-G.a[1])*j+V*T,Math.atan2(V,S)]}return[x.segs[0].a[0],x.segs[0].a[1],0]}let A=t?70:120,M=6,K=[["body",[0,.55,0],[1.1,.6,2.2]],["cab",[0,1.05,-.15],[1,.45,1.2]],["w1",[.5,.25,.7],[.25,.5,.5]],["w2",[-.5,.25,.7],[.25,.5,.5]],["w3",[.5,.25,-.7],[.25,.5,.5]],["w4",[-.5,.25,-.7],[.25,.5,.5]]],ve={};for(let[x]of K){let b=new Jt(_(),x==="body"?new Kt:new Kt({color:x==="cab"?"#1a1638":"#0c0a14"}),A);b.frustumCulled=!1,r.add(b),ve[x]=b}let ge=new Jt(_(),new Tt({toneMapped:!1}),A*4);ge.frustumCulled=!1,r.add(ge);let pe=[];for(let x=0;x<A;x++)pe.push({r:Nt(),d:l()*400,sp:6+l()*6,side:1,coin:null,police:x>=A-M,color:y(["#e8e4f4","#ffcf4a","#ff7aa8","#7ad8ff","#a8ff9e","#ff9a5a"][Math.floor(l()*6)])});let Be={cars:pe},Ae=new Map;function Le(x,b){if(!x)return;let T=Ae.get(x);if(T){T.im?b(T.im):T.cbs.push(b);return}T={im:null,cbs:[b],tries:0},Ae.set(x,T);let G=()=>{let j=new Image;j.crossOrigin="anonymous",j.referrerPolicy="no-referrer",j.onload=()=>{T.im=j;for(let V of T.cbs.splice(0))V(j)},j.onerror=()=>{++T.tries<2&&setTimeout(G,1e4)},j.src=T.tries?x+(x.includes("?")?"&":"?")+"r="+Date.now()%1e5:x};G()}let Qe=x=>{let b=0;x=String(x||"");for(let T=0;T<x.length;T++)b=b*31+x.charCodeAt(T)>>>0;return b%360};function it(x,b,T,G,j,V){let S=Qe(V||j),W=x.createLinearGradient(b-G,T-G,b+G,T+G);W.addColorStop(0,`hsl(${S},80%,62%)`),W.addColorStop(1,`hsl(${(S+48)%360},72%,38%)`),x.fillStyle=W,x.fillRect(b-G,T-G,G*2,G*2),x.fillStyle="#fff",x.font=`900 ${Math.round(G*.8)}px Inter, sans-serif`,x.textAlign="center",x.textBaseline="middle",x.fillText(String(j||"?").slice(0,2).toUpperCase(),b,T+G*.05),x.textBaseline="alphabetic"}let ue=new Map;function Mt(x,b,T,G,j){let V=document.createElement("canvas");V.width=256,V.height=160;let S=V.getContext("2d"),W=Pt=>{S.clearRect(0,0,256,160),S.fillStyle="rgba(12,6,36,.82)",D(S,28,98,200,42,21),S.fill(),S.fillStyle="#fff",S.font="900 26px Inter, sans-serif",S.textAlign="center",S.fillText("$"+x.symbol.slice(0,9),128,129),S.beginPath(),S.arc(128,50,44,0,ks),S.fillStyle=G?"#ffd23f":j==="migrated"?"#5fc8ff":T?"#2ee6a6":"#ff4f9e",S.fill(),S.save(),S.beginPath(),S.arc(128,50,38,0,ks),S.clip(),Pt?S.drawImage(Pt,90,12,76,76):it(S,128,50,38,x.symbol,x.mint),S.restore(),S.textAlign="center";for(let ct=0;ct<5;ct++){let ut=6+ct*3;S.fillStyle=ct<b?["#ffd23f","#ffb13f","#ff8a4a","#ff5f7a","#ff4f9e"][ct]:"rgba(255,255,255,.25)",D(S,104+ct*10,158-ut,7,ut,2),S.fill()}G?(S.fillStyle="#ff4f9e",D(S,160,4,66,28,14),S.fill(),S.fillStyle="#fff",S.font="900 18px Inter, sans-serif",S.fillText("NEW",193,25)):j==="migrated"&&(S.fillStyle="#2f8fd8",D(S,150,4,100,28,14),S.fill(),S.fillStyle="#fff",S.font="900 16px Inter, sans-serif",S.fillText("MIGRATED",200,24)),ie.needsUpdate=!0},ie=new xi(V);ie.colorSpace=Xt,W(null),Le(x.iconUrl,W);let Ie=new ci(new Kn({map:ie,depthTest:!0,transparent:!0}));return Ie.scale.set(6.4,4,1),Ie.renderOrder=5,Ie}function D(x,b,T,G,j,V){x.beginPath(),x.moveTo(b+V,T),x.arcTo(b+G,T,b+G,T+j,V),x.arcTo(b+G,T+j,b,T+j,V),x.arcTo(b,T+j,b,T,V),x.arcTo(b,T,b+G,T,V),x.closePath()}let fe=new Map,Re=A-M-8;function Se(x){let b=x.slice(0,Re),T=new Set(b.map(V=>V.mint));for(let[V,S]of fe)T.has(V)||(S.coin=null,fe.delete(V));for(let[V,S]of ue)T.has(V)||(r.remove(S.sp),S.sp.material.map.dispose(),S.sp.material.dispose(),ue.delete(V));let G=pe.filter(V=>!V.police&&!V.coin);for(let V of b){let S=fe.get(V.mint),W=!1;if(!S){if(S=G.shift(),!S)break;fe.set(V.mint,S),W=!0}S.coin=V,S.sp=5+(V.heat||0)*12;let ie=ue.get(V.mint);(!ie||ie.up!==V.up||ie.stars!==V.stars||ie.isNew!==!!V.isNew||ie.cat!==V.cat||ie.icon!==(V.iconUrl||""))&&(ie&&(r.remove(ie.sp),ie.sp.material.map.dispose()),ie={sp:Mt(V,V.stars,V.up,!!V.isNew,V.cat),up:V.up,stars:V.stars,isNew:!!V.isNew,cat:V.cat,icon:V.iconUrl||"",born:ie?ie.born:vt},ie.sp.userData={kind:"coin",key:V.mint},r.add(ie.sp),ue.set(V.mint,ie)),W&&vt>4&&S.pos&&(V.isNew||V.cat==="migrated")&&_t.push([S.pos[0],S.pos[1],V.cat==="migrated"?1:0]),ie.car=S}Ne(b.filter(V=>V.cat!=="new")),_r(b.filter(V=>V.cat==="hot"&&V.chg!=null).sort((V,S)=>(S.heat||0)-(V.heat||0))[0]||null);let j=pe.filter(V=>V.coin&&!V.coin.isNew&&V.coin.chg!=null&&V.coin.chg<-3).sort((V,S)=>V.coin.chg-S.coin.chg)[0]||null;pe.filter(V=>V.police).forEach((V,S)=>{V.chase=S<3?j:null,V.gap=5+S*4.2}),gt=j?j.coin:null}let Xe=x=>fe.get(x)||null,gt=null,_t=[],Pe=t?140:320,we=[],H=new Jt(_(),new Kt,Pe),ce=new Jt(_(),new Kt({color:"#f0c9a0"}),Pe);H.frustumCulled=ce.frustumCulled=!1,r.add(H),r.add(ce);let Te=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#ffffff","#8a3fe2","#ff8a4a","#1a1638"].map(y),Ze=["#f0c9a0","#c98e62","#8a5a3a","#ffdcc0"].map(y);for(let x=0;x<Pe;x++){let b=Math.floor(l()*$i),T=Math.floor(l()*$i),G=-Cn+b*ji+.5,j=-Cn+T*ji+.5,V=vs-1;if(G>tn-2){x--;continue}we.push({x0:G,z0:j,L:V,d:l()*V*4,sp:(l()<.5?-1:1)*(.9+l()*.9),ph:l()*6.3}),H.setColorAt(we.length-1,Te[Math.floor(l()*Te.length)]),ce.setColorAt(we.length-1,Ze[Math.floor(l()*Ze.length)])}H.instanceColor.needsUpdate=!0,ce.instanceColor.needsUpdate=!0;function ke(x){we.forEach((b,T)=>{b.d=((b.d+b.sp*x)%(b.L*4)+b.L*4)%(b.L*4);let G=Math.floor(b.d/b.L),j=b.d-G*b.L,V=G===0?b.x0+j:G===1?b.x0+b.L:G===2?b.x0+b.L-j:b.x0,S=G===0?b.z0:G===1?b.z0+j:G===2?b.z0+b.L:b.z0+b.L-j,W=Math.abs(Math.sin(vt*7+b.ph))*.08,ie=(G%2?0:Math.PI/2)+(b.sp<0?Math.PI:0);on.setFromEuler(Ln.set(0,ie,Math.sin(vt*7+b.ph)*.06)),Lt.set(V,.62+W,S),zt.set(.42,.82,.3),Ct.compose(Lt,on,zt),H.setMatrixAt(T,Ct),Lt.set(V,1.24+W,S),zt.set(.34,.34,.34),Ct.compose(Lt,on,zt),ce.setMatrixAt(T,Ct)}),H.instanceMatrix.needsUpdate=!0,ce.instanceMatrix.needsUpdate=!0}let rt=new Xn;r.add(rt);{let x=new Kt({color:"#e8e2f8"}),b=new Kt({color:"#2a2060"});[[4,4],[7.5,7],[9,8.4],[9,8.4],[7.5,7],[4.5,4.2]].forEach(([j,V],S)=>{let W=new ft(_(),x);W.scale.set(5.2,V,j),W.position.x=-12.5+S*5,rt.add(W)});for(let[j,V]of[[4,0],[0,4],[0,-4]]){let S=new ft(_(),b);S.scale.set(4,j?4:.4,V?4:.4),S.position.set(-14,j*.9,V*.9),rt.add(S)}let T=new ft(_(),b);T.scale.set(7,1.8,2.6),T.position.set(1,-5,0),rt.add(T);let G=new ft(_(),new Tt({color:new Ue(4,.4,1.6),toneMapped:!1}));G.scale.setScalar(.8),G.position.set(15.6,0,0),rt.add(G),rt.userData.tip=G}let bt=document.createElement("canvas");bt.width=512,bt.height=160;let at=bt.getContext("2d"),cn=new xi(bt);cn.colorSpace=Xt;let At=new Tt({map:cn,toneMapped:!1,color:new Ue(1.6,1.6,1.6)});for(let x of[4.32,-4.32]){let b=new ft(new li(16,5),At);b.position.set(1,.4,x),b.rotation.y=x>0?0:Math.PI,rt.add(b)}let kt=null,mn=null;function ys(){at.fillStyle="#0a0520",at.fillRect(0,0,512,160);let x=kt;if(at.fillStyle="#ff4f9e",at.fillRect(0,0,512,8),at.fillRect(0,152,512,8),!x){at.fillStyle="#fff",at.font="900 44px Inter, sans-serif",at.textAlign="center",at.fillText("THE TRENCHES",256,96),cn.needsUpdate=!0;return}at.save(),at.beginPath(),at.arc(80,80,52,0,ks),at.clip(),mn?at.drawImage(mn,28,28,104,104):it(at,80,80,52,x.symbol,x.mint),at.restore(),at.textAlign="left",at.fillStyle="#ffd23f",at.font="900 22px Inter, sans-serif",at.fillText("#1 HOT RIGHT NOW",152,50),at.fillStyle="#fff",at.font="900 52px Inter, sans-serif";let b="$"+x.symbol;for(;at.measureText(b).width>340&&b.length>3;)b=b.slice(0,-2)+"\u2026";at.fillText(b,152,104),at.fillStyle=(x.chg||0)>=0?"#2ee6a6":"#ff4f9e",at.font="800 28px Inter, sans-serif",at.fillText(x.chg==null?"":(x.chg>0?"+":"")+x.chg.toFixed(1)+"% in 5 min",152,140),cn.needsUpdate=!0}ys();function _r(x){if(!x||kt&&kt.mint===x.mint&&kt.chg===x.chg)return;let b=kt&&kt.mint===x.mint;if(kt=x,!b){mn=null;let T=x.mint;Le(x.iconUrl,G=>{kt&&kt.mint===T&&(mn=G,ys())})}ys()}let Pn=[],$n={new:["#ffd23f","#2a1270"],migrated:["#5fc8ff","#062a4a"],bond:["#ff4f9e","#fff"],x:["#ffffff","#120a30"],hot:["#2ee6a6","#04261a"]};function jn(x){let b=document.createElement("canvas");b.width=560,b.height=210;let T=b.getContext("2d"),[G]=$n[x.kind]||$n.x,j=S=>{T.clearRect(0,0,560,210),T.fillStyle="rgba(10,5,32,.94)",D(T,6,6,548,150,40),T.fill(),T.beginPath(),T.moveTo(250,150),T.lineTo(280,196),T.lineTo(312,150),T.closePath(),T.fill(),T.strokeStyle=G,T.lineWidth=6,D(T,6,6,548,150,40),T.stroke(),T.save(),T.beginPath(),T.arc(84,81,50,0,ks),T.clip(),S?T.drawImage(S,34,31,100,100):x.mint?it(T,84,81,50,x.mark,x.mint):(T.fillStyle=G,T.fillRect(34,31,100,100),T.fillStyle="#120a30",T.font="900 44px Inter, sans-serif",T.textAlign="center",T.fillText(x.mark||"?",84,97)),T.restore(),T.textAlign="left",T.fillStyle=G,T.font="900 24px Inter, sans-serif",T.fillText(x.kicker.toUpperCase(),156,58),T.fillStyle="#fff",T.font="900 40px Inter, sans-serif";let W=x.title;for(;T.measureText(W).width>380&&W.length>3;)W=W.slice(0,-2)+"\u2026";if(T.fillText(W,156,104),x.sub){T.fillStyle="rgba(220,210,255,.85)",T.font="700 24px Inter, sans-serif";let ie=x.sub;for(;T.measureText(ie).width>380&&ie.length>3;)ie=ie.slice(0,-2)+"\u2026";T.fillText(ie,156,138)}V.needsUpdate=!0},V=new xi(b);return V.colorSpace=Xt,j(null),Le(x.iconUrl,j),V}function Vs(x){for(;Pn.length>=(t?3:5);){let j=Pn.shift();r.remove(j.sp),j.sp.material.map.dispose(),j.sp.material.dispose()}let b=new ci(new Kn({map:jn(x),transparent:!0,depthTest:!1}));b.renderOrder=8,b.userData=x.mint?{kind:"coin",key:x.mint}:{kind:"bubble",key:x.title};let T=x.mint?Xe(x.mint):null,G=x.at||(()=>{let j=C[Math.floor(l()*C.length)];return[j.x,j.z,j.y+14]})();r.add(b),Pn.push({sp:b,car:T,x:G[0],z:G[1],y:G[2]||12,t:0,life:x.life||6.5})}let Ms=t?16:30,xn=[],_i=[["hull",[0,.45,0],[2.4,.9,5.6],"#efeaff"],["trim",[0,.95,0],[2.5,.18,5.7],"#2f3fe4"],["deck",[0,1.35,-.9],[1.7,.8,2.2],"#241a5c"],["mast",[0,3.3,.7],[.24,4.4,.24],"#cfc6ee"],["sail",[0,3.5,1.35],[.14,3.4,1.9],"#ffffff"]],In={};for(let[x,,,b]of _i){let T=new Jt(_(),new Kt({color:b}),Ms);T.frustumCulled=!1,T.count=0,r.add(T),In[x]=T}In.sail.material=new Tt({toneMapped:!1});function w(x){let b=document.createElement("canvas");b.width=256,b.height=92;let T=b.getContext("2d");T.fillStyle="rgba(8,18,48,.86)",D(T,6,8,244,76,22),T.fill(),T.strokeStyle="rgba(95,200,255,.8)",T.lineWidth=3,D(T,6,8,244,76,22),T.stroke(),T.fillStyle="#fff",T.font="900 30px Inter, sans-serif",T.textAlign="left",T.fillText(x.name.slice(0,8),22,52);let G=x.chg==null?"\u2014":(x.chg>0?"+":"")+x.chg.toFixed(1)+"%";T.textAlign="right",T.fillStyle=x.chg>=0?"#2ee6a6":"#ff4f9e",T.font="800 26px Inter, sans-serif",T.fillText(G,234,52),T.fillStyle="rgba(160,220,255,.85)",T.font="800 13px Inter, sans-serif",T.textAlign="left",T.fillText("PERP \xB7 "+(x.oi>=1e9?(x.oi/1e9).toFixed(1)+"B":(x.oi/1e6).toFixed(0)+"M")+" OI",22,74);let j=new xi(b);j.colorSpace=Xt;let V=new ci(new Kn({map:j,transparent:!0,depthTest:!0}));return V.renderOrder=5,V.userData={kind:"perp",key:x.name},V}function X(x){let b=x.filter(j=>j&&j.oi>0).sort((j,V)=>V.oi-j.oi).slice(0,Ms);if(xn.length&&b.length===xn.length&&b.every(j=>xn.some(V=>V.p.name===j.name))){for(let j of b){let V=xn.find(W=>W.p.name===j.name);V.p=j;let S=w(j);V.sp.material.map.dispose(),V.sp.material.map=S.material.map,V.sp.material.needsUpdate=!0,S.material.dispose()}return}for(let j of xn)r.remove(j.sp),j.sp.material.map.dispose(),j.sp.material.dispose();xn.length=0;let T=t?2:3,G=Math.ceil(Ms/T);b.forEach((j,V)=>{let S=V%T,W=Math.floor(V/T),ie=S%2?-1:1,Ie=.75+.6*Math.min(1,Math.max(0,Math.log10(j.oi/1e6)/3));xn.push({p:j,x:tn+30+S*15,dir:ie,sz:Ie,sp:w(j),ph:l()*6.28,d:W/G*2*(2*Cn-12)+l()*4,pos:null,wake:0})});for(let j of xn)r.add(j.sp);for(let j in In)In[j].count=xn.length}let $=[],te=[];for(let x of C.filter(b=>b.big).sort((b,T)=>T.y-b.y)){if($.length>=5)break;$.every(b=>Math.hypot(b.x-x.x,b.z-x.z)>30)&&$.push(x)}function Q(x,b){let T=document.createElement("canvas");T.width=384,T.height=176;let G=T.getContext("2d"),j=G.createLinearGradient(0,0,384,176);j.addColorStop(0,"#2f3fe4"),j.addColorStop(.5,"#8a3fe2"),j.addColorStop(1,"#ff4f9e");let V=W=>{G.clearRect(0,0,384,176),G.fillStyle=j,D(G,4,4,376,168,26),G.fill(),G.fillStyle="rgba(10,5,32,.88)",D(G,12,12,360,152,20),G.fill(),G.save(),G.beginPath(),G.arc(88,88,52,0,ks),G.clip(),W?G.drawImage(W,36,36,104,104):it(G,88,88,52,x.symbol,x.mint),G.restore(),G.textAlign="left",G.fillStyle="#ffd23f",G.font="900 20px Inter, sans-serif",G.fillText("#"+b+" ON THE STREETS",160,58),G.fillStyle="#fff",G.font="900 44px Inter, sans-serif",G.fillText("$"+x.symbol.slice(0,8),160,106);let ie=x.mcap||0;G.fillStyle="rgba(220,210,255,.9)",G.font="800 22px Inter, sans-serif",G.fillText((ie>=1e9?"$"+(ie/1e9).toFixed(2)+"B":"$"+(ie/1e6).toFixed(1)+"M")+" cap",160,140),S.needsUpdate=!0},S=new xi(T);return S.colorSpace=Xt,V(null),Le(x.iconUrl,V),S}function Ne(x){x.filter(T=>!T.isNew&&T.mcap).sort((T,G)=>G.mcap-T.mcap).slice(0,$.length).forEach((T,G)=>{let j=te[G];if(j&&j.mint===T.mint&&j.icon===(T.iconUrl||"")){j.coin=T,j.sp.userData.coin=T;return}if(!j){j=te[G]={sp:new ci(new Kn({transparent:!0,depthTest:!0}))},j.sp.renderOrder=4;let V=$[G];j.sp.position.set(V.x,V.y+10,V.z),j.sp.scale.set(17,7.8,1),r.add(j.sp)}j.sp.material.map&&j.sp.material.map.dispose(),j.sp.material.map=Q(T,G+1),j.sp.material.needsUpdate=!0,j.mint=T.mint,j.icon=T.iconUrl||"",j.coin=T,j.sp.userData={kind:"bill",key:T.mint,coin:T}})}let Ve=10,Ge=[],Je={};for(let[x]of K){let b=new Jt(_(),x==="body"?new Kt:new Kt({color:x==="cab"?"#1a1638":"#0c0a14"}),Ve);b.frustumCulled=!1,b.count=0,r.add(b),Je[x]=b}let dt=new ft(new Va(3.4,3.4,140,24,1,!0).translate(0,70,0),new Tt({color:new Ue(1.6,.45,1.1),transparent:!0,opacity:.14,blending:Pi,depthWrite:!1,side:On}));dt.position.set(se[0],0,se[1]),dt.visible=!1,r.add(dt);let ot=(()=>{let x=document.createElement("canvas");x.width=320,x.height=120;let b=x.getContext("2d");b.fillStyle="rgba(10,5,32,.9)",D(b,6,8,308,104,26),b.fill(),b.strokeStyle="#ff4f9e",b.lineWidth=4,D(b,6,8,308,104,26),b.stroke(),b.fillStyle="#ff9ec9",b.font="900 16px Inter, sans-serif",b.textAlign="center",b.fillText("YOUR SAFEHOUSE",160,44),b.fillStyle="#fff",b.font="900 25px Inter, sans-serif",b.fillText("Connect to park your bag",160,82);let T=new xi(x);T.colorSpace=Xt;let G=new ci(new Kn({map:T,transparent:!0}));return G.position.set(se[0],7,se[1]),G.scale.set(10,3.75,1),G.userData={kind:"safehouse",key:"home"},r.add(G),G})();function pt(x){for(let T of Ge)r.remove(T.sp),T.sp.material.map.dispose(),T.sp.material.dispose();Ge.length=0,(x||[]).slice(0,Ve).forEach((T,G)=>{let j=se[0]-4.5+G%5*2.25,V=se[1]-2.6+Math.floor(G/5)*5.2,S={mint:T.mint,symbol:T.sym||"?",iconUrl:T.iconUrl||""},W=Mt(S,0,(T.ch||0)>=0,!1);W.userData={kind:"mine",key:T.mint,row:T},W.position.set(j,3.6,V),W.scale.set(4.2,2.6,1),r.add(W),Ge.push({r:T,x:j,z:V,sp:W}),on.setFromEuler(Ln.set(0,0,0));for(let[ie,Ie,Pt]of K)Lt.set(j+Ie[0],Ie[1],V+Ie[2]),zt.set(...Pt),Ct.compose(Lt,on,zt),Je[ie].setMatrixAt(G,Ct);Je.body.setColorAt(G,kn.set(["#ffd23f","#5fc8ff","#ff9ec9","#9ff0d0","#c8a8ff"][G%5]))});for(let T in Je)Je[T].count=Ge.length,Je[T].instanceMatrix.needsUpdate=!0;Je.body.instanceColor&&(Je.body.instanceColor.needsUpdate=!0),dt.visible=Ge.length>0,ot.visible=!Ge.length}let St=C.filter(x=>x.big),hn=[];for(let x=0;x<Math.min(6,St.length);x++){let b=St[Math.floor(l()*St.length)];hn.push({x:b.x+(l()-.5)*(b.w-2),y:b.y+(b.big,0),z:b.z+(l()-.5)*(b.d-2)})}for(let x of hn){let b=new qa("#ff7a3a",60,40,1.6);b.position.set(x.x,x.y+3,x.z),r.add(b),x.light=b}let an=hn.length*10,un=new Jt(_(),new Tt({toneMapped:!1}),an);un.frustumCulled=!1,r.add(un);let Ot=t?160:320,mt=new Jt(_(),new Kt({color:"#3a2a5a",transparent:!0,opacity:.82}),Ot);mt.frustumCulled=!1,r.add(mt);let nn=Array.from({length:Ot},(x,b)=>({f:hn[b%hn.length],t:l()*9,life:7+l()*3,ox:(l()-.5)*2,oz:(l()-.5)*2,s:.8+l()*.8})),Vt=160,fn=new Jt(_(),new Tt({toneMapped:!1}),Vt);fn.frustumCulled=!1,r.add(fn);let Di=Array.from({length:Vt},()=>({t:9,p:new F,v:new F,c:new Ue})),ui=new qa("#ffd0a0",0,120,1.4);r.add(ui);let fi=new ft(new Ga(1,16,12),new Tt({color:new Ue(6,3.6,1.8),transparent:!0,opacity:0,toneMapped:!1}));r.add(fi);let sn=new ft(new el(1,.08,6,48).rotateX(Math.PI/2),new Tt({color:new Ue(3,2,2.6),transparent:!0,opacity:0,toneMapped:!1}));r.add(sn);let wn=2,Qn=9,Fe=new F,Ni=t?700:1600,ei=new Jt(_(),new Tt({toneMapped:!1}),Ni);ei.frustumCulled=!1,r.add(ei);let Fi=Array.from({length:Ni},()=>({t:9,life:1,p:new F,v:new F,c:new Ue,s:.4,drag:1})),Ss=[[.3,3.4,2.1],[3.6,2.6,.5],[3.2,3.2,3.4],[3.6,.9,2.4],[1,1.8,3.8]],Oi=new F,Gs=[],la=0,zi=3.4,Ws=8+l()*6,Bi=9,Es=.5;function vi(x,b,T,G,j,V){let S=Fi[la];la=(la+1)%Ni,S.t=0,S.life=G,S.p.copy(x),S.v.copy(b),S.c.setRGB(T[0],T[1],T[2]),S.s=j,S.drag=V}function Hn(){let x=pe.filter(T=>T.coin&&T.coin.up&&T.pos);if(!x.length)return;x.sort((T,G)=>(G.coin.chg||0)-(T.coin.chg||0));let b=x[Math.floor(l()*l()*Math.min(x.length,10))];Gs.push({p:new F(b.pos[0],2.5,b.pos[1]),v:new F((l()-.5)*4,36+l()*14,(l()-.5)*4),t:0,fuse:1.2+l()*.5,col:l()<.6?0:Math.floor(l()*Ss.length)})}function It(){let x=C[Math.floor(l()*C.length)];Fe.set(x.x,x.y+1,x.z),Qn=0;let b=0;for(let T of Di){if(b>40)break;T.t>2.5&&(T.t=0,T.p.copy(Fe),T.v.set((l()-.5)*22,8+l()*18,(l()-.5)*22),T.c.setRGB(3,1.2+l(),.3+l()*.4),b++)}}let dn=[],Xs=new Tt({color:new Ue(.7,.75,1),transparent:!0,opacity:.1,blending:Pi,depthWrite:!1,side:On});for(let x=0;x<3;x++){let b=new Xn,T=new Kt({color:"#16123a"}),G=new ft(_(),T);G.scale.set(2.4,1.6,4),b.add(G);let j=new ft(_(),T);j.scale.set(.6,.6,4),j.position.set(0,.3,-3.6),b.add(j);let V=new ft(_(),new Tt({color:"#0c0a1e"}));V.scale.set(9,.12,.5),V.position.y=1.1,b.add(V);let S=new ft(new zs(9,60,24,1,!0).translate(0,-30,0),Xs);S.position.y=-.6,b.add(S);let W=new ft(_(),new Tt({color:new Ue(4,.3,.4),toneMapped:!1}));W.scale.setScalar(.35),W.position.set(0,-.9,-1.6),b.add(W),r.add(b),dn.push({g:b,rot:V,cone:S,red:W,r:30+x*18,h:46+x*9,sp:.12+x*.05,ph:x*2.1})}function ca(x){dn.forEach((b,T)=>{let G=x[T];if(b.sp&&(b.g.remove(b.sp),b.sp.material.map.dispose(),b.sp.material.dispose(),b.sp=null),!G)return;let j=document.createElement("canvas");j.width=256,j.height=96;let V=j.getContext("2d");V.fillStyle="rgba(10,5,32,.88)",D(V,6,8,244,80,22),V.fill(),V.strokeStyle="rgba(255,210,63,.85)",V.lineWidth=3,D(V,6,8,244,80,22),V.stroke(),V.fillStyle="#ffd23f",V.font="900 14px Inter, sans-serif",V.textAlign="left",V.fillText("WHALE #"+(T+1)+" \xB7 TODAY",22,34),V.fillStyle="#fff",V.font="900 24px Inter, sans-serif",V.fillText((G.n||G.a.slice(0,6)+"\u2026"+G.a.slice(-4)).slice(0,14),22,62);let S=G.pnl||0;V.fillStyle=S>=0?"#2ee6a6":"#ff4f9e",V.font="800 17px Inter, sans-serif",V.fillText((S>=0?"+$":"-$")+(Math.abs(S)>=1e6?(Math.abs(S)/1e6).toFixed(2)+"M":(Math.abs(S)/1e3).toFixed(0)+"K")+" P&L",22,82);let W=new xi(j);W.colorSpace=Xt,b.sp=new ci(new Kn({map:W,transparent:!0,depthTest:!1})),b.sp.renderOrder=6,b.sp.position.set(0,4.2,0),b.sp.scale.set(8,3,1),b.sp.userData={kind:"whale",key:G.a,whale:G},b.g.add(b.sp)})}let Qi=[];for(let x=0;x<5;x++){let b=St[x*7%Math.max(1,St.length)]||{x:0,y:30,z:0},T=new ft(new zs(6,220,20,1,!0).rotateX(Math.PI).translate(0,110,0),new Tt({color:new Ue(.9,.85,1),transparent:!0,opacity:.06,blending:Pi,depthWrite:!1,side:On}));T.position.set(b.x,b.y+1,b.z),r.add(T),Qi.push({cone:T,ph:x*1.3,sp:.25+x*.06})}let Hi=t?500:1100,Tn=new Jt(_(),new Tt({color:new Ue(.55,.62,1.1),transparent:!0,opacity:.32,depthWrite:!1}),Hi);Tn.frustumCulled=!1,Tn.count=0,r.add(Tn);let qs=Array.from({length:Hi},()=>({x:(l()-.5)*170,y:l()*80,z:(l()-.5)*170,v:55+l()*25})),ha=0,ti=Tf({scene:r,col:y,voxMesh:L,boxGeo:_,U:a,mobile:t,HALF:Cn,PITCH:ji,BLK:vs,NB:$i,BEACH_X:tn,PIER_Z:ye,WHEEL:U,roofs:C,ants:J,site:oe,zones:u,spark:vi,seaMat:m.material,cam:c,rr:D,loadIcon:Le,mono:it});r.add(new nl("#8a8aff","#3a1a4a",1.5));let vr=new sl("#ffd0f0",1.5);vr.position.copy(h).multiplyScalar(100),r.add(vr),r.fog=null;let yi=new ml(n);yi.addPass(new gl(r,c));let vl=new oa(new ze(256,256),t?.38:.45,.42,.92);yi.addPass(vl),yi.addPass(new xl);let lt=new ul(c,i);lt.enableDamping=!0,lt.dampingFactor=.06,lt.minDistance=25,lt.maxDistance=260,lt.maxPolarAngle=1.32,lt.minPolarAngle=.35,lt.target.set(0,4,0),lt.autoRotate=!0,lt.autoRotateSpeed=.35,lt.enablePan=!0,lt.screenSpacePanning=!1;let es=.0031,Mi=new F(98,56,118),ki=new F(0,4,0),ua=new F,ni=new F,An=Mi.clone(),Si=ki.clone(),_n=!!e.gate,Rn=_n?"gate":"roam",Vi=0,ts=0,Gi=0,$t=null,ns=es,Ys=0,bs=[];_n?(lt.enabled=!1,a.uFogD.value=.0018,lt.autoRotate=!1):c.position.copy(Mi),lt.addEventListener("start",()=>{Gi=0,lt.autoRotate=!1,Vi=0,a.uFogD.value=es});let Qt=(x,b,T)=>new F(x,b,T),fa=()=>pe.filter(x=>x.coin&&x.pos&&x.coin.cat!=="new").sort((x,b)=>(b.coin.heat||0)-(x.coin.heat||0))[0],Zs={streets:()=>[Qt(66+Math.sin(vt*.08)*8,36,76),Qt(8,2,10)],hot:()=>{let x=fa();return x?[Qt(x.pos[0]+26,24,x.pos[1]+28),Qt(x.pos[0],2,x.pos[1])]:Zs.streets()},drops:()=>[Qt(-58+Math.sin(vt*.1)*6,62,18),Qt(-4,2,-30)],migrated:()=>[Qt(-78,60,64),Qt(0,26,0)],harbor:()=>[Qt(tn-16,27,48),Qt(tn+44,0,-6)],pier:()=>[Qt(tn+14+Math.sin(vt*.1)*4,12,ye+50),Qt(U.x,15,U.z)],whales:()=>{let x=dn[0]?dn[0].g.position:Qt(0,50,0);return[Qt(x.x+24,x.y+3,x.z+24),Qt(x.x,x.y-3,x.z)]},safehouse:()=>[Qt(se[0]+26,21,se[1]+30),Qt(se[0],2,se[1])],mood:()=>[Qt(-180+Math.sin(vt*.05)*20,128,-150),Qt(0,0,0)],roam:()=>[Mi.clone(),ki.clone()],...ti.shots},Wi=x=>(Zs[bs[x]]||Zs.roam)();function is(x,b){ua.copy(c.position),ni.copy(lt.target),An.copy(x),Si.copy(b),ns=a.uFogD.value,e.reduced?(c.position.copy(x),lt.target.copy(b),a.uFogD.value=es,Vi=0):(Vi=1,ts=0),Gi=0}function Js(){if(_n)if(_n=!1,bs.length){Rn="story",lt.enabled=!1;let[x,b]=Wi(Math.round(Ys));is(x,b)}else Rn="roam",lt.enabled=!0,is(Mi,ki)}function Ks(){let x=i.clientWidth||innerWidth,b=i.clientHeight||innerHeight;n.setPixelRatio(s),n.setSize(x,b,!1),yi.setPixelRatio(s),yi.setSize(x,b),c.aspect=x/b,c.fov=x/b<.8?58:42,c.updateProjectionMatrix()}Ks(),addEventListener("resize",Ks);try{t||(yi.renderTarget1.samples=4,yi.renderTarget2.samples=4)}catch{}let da=new al,pa=new ze,yr=null,ws=null,Xi=null,ma=()=>{let x=[];for(let b of ue.values())x.push(b.sp);for(let b of xn)x.push(b.sp);for(let b of te)x.push(b.sp);for(let b of Ge)x.push(b.sp);for(let b of Pn)x.push(b.sp);ot.visible&&x.push(ot);for(let b of dn)b.sp&&x.push(b.sp);for(let b of ti.pickables())x.push(b);return x};function ga(x,b){let T=i.getBoundingClientRect();pa.set((x-T.left)/T.width*2-1,-(b-T.top)/T.height*2+1),da.setFromCamera(pa,c);let G=da.intersectObjects(ma(),!1);return G.length?G[0].object.userData:null}function xa(x){if(!x)return null;if(x.kind==="coin"){let b=ue.get(x.key);return b&&b.car&&b.car.coin?{kind:"coin",coin:b.car.coin}:x.coin?{kind:"coin",coin:x.coin}:null}if(x.kind==="bill")return{kind:"coin",coin:ue.get(x.key)&&ue.get(x.key).car&&ue.get(x.key).car.coin||x.coin};if(x.kind==="perp"){let b=xn.find(T=>T.p.name===x.key);return b?{kind:"perp",perp:b.p}:null}return x.kind==="whale"?{kind:"whale",whale:x.whale}:x.kind==="mine"?{kind:"mine",row:x.row}:x.kind==="safehouse"?{kind:"safehouse"}:(x.kind==="bubble",null)}i.addEventListener("pointermove",x=>{if(x.pointerType&&x.pointerType!=="mouse")return;let b=ga(x.clientX,x.clientY),T=b?b.kind+":"+b.key:null,G=xa(b);yr=G&&G.kind==="coin"?G.coin.mint:null,T!==ws&&(ws=T,i.style.cursor=T?"pointer":"grab"),e.onHover&&e.onHover(G,x.clientX,x.clientY)}),i.addEventListener("pointerdown",x=>{Xi=[x.clientX,x.clientY]}),i.addEventListener("pointerup",x=>{if(!Xi||Math.hypot(x.clientX-Xi[0],x.clientY-Xi[1])>8)return;let b=xa(ga(x.clientX,x.clientY));if(b&&b.kind==="coin"){let T=ue.get(b.coin.mint);$t=T&&T.car?T.car:null,lt.autoRotate=!1}else b&&b.kind==="perp"?($t=xn.find(T=>T.p.name===b.perp.name)||null,lt.autoRotate=!1):$t=null;e.onPick&&e.onPick(b)});let Ct=new Ut,on=new yn,Lt=new F,zt=new F,Ln=new _s,kn=new Ue,vt=0,_a=performance.now(),Ei=0,$s=!1,qi=!1,ss=0;function Ts(x){vt+=x,a.uTime.value=vt,ss++;let b=0;for(pe.forEach((S,W)=>{S.d+=S.sp*x,S.police&&S.chase&&(S.r=S.chase.r,S.d=S.chase.d-S.gap);let[ie,Ie,Pt]=st(S.r,S.d,1);on.setFromEuler(Ln.set(0,Pt,0));let ct=Math.sin(Pt),ut=Math.cos(Pt);for(let[Rt,Gt,en]of K)Lt.set(ie+Gt[0]*ut+Gt[2]*ct,Gt[1],Ie-Gt[0]*ct+Gt[2]*ut),zt.set(...en),Ct.compose(Lt,on,zt),ve[Rt].setMatrixAt(W,Ct);S.police?kn.set(Math.sin(vt*10+W)>0?"#1a1a2e":"#f4f4ff"):S.coin?kn.set(S.coin.isNew?"#ffd23f":S.coin.cat==="migrated"?"#5fc8ff":S.coin.up?"#2ee6a6":"#ff4f9e"):kn.copy(S.color),ve.body.setColorAt(W,kn);let Yt=S.police?[[.3,1.35,-.1,Math.sin(vt*12+W)>0?[5,.3,.4]:[.3,.5,5]],[-.3,1.35,-.1,Math.sin(vt*12+W)>0?[.3,.5,5]:[5,.3,.4]]]:[[.35,.6,1.12,[4,3.8,3.2]],[-.35,.6,1.12,[4,3.8,3.2]],[.38,.6,-1.12,[3,.2,.25]],[-.38,.6,-1.12,[3,.2,.25]]];for(let[Rt,Gt,en,Un]of Yt)Lt.set(ie+Rt*ut+en*ct,Gt,Ie-Rt*ct+en*ut),zt.set(.28,.16,.1),Ct.compose(Lt,on,zt),ge.setMatrixAt(b,Ct),ge.setColorAt(b,kn.setRGB(...Un)),b++;if(S.pos=[ie,Ie],S.coin&&S.coin.s5m){for(S.pb=(S.pb||0)+x*Math.min(3,(S.coin.s5m.numBuys||0)/300),S.ps=(S.ps||0)+x*Math.min(3,(S.coin.s5m.numSells||0)/300);S.pb>=1;)S.pb--,vi(Lt.set(ie,2.2,Ie),Oi.set((l()-.5)*2,4+l()*2.5,(l()-.5)*2),[.3,3,1.7],.9,.34,2);for(;S.ps>=1;)S.ps--,vi(Lt.set(ie,2.2,Ie),Oi.set((l()-.5)*2,3+l()*2,(l()-.5)*2),[3.2,.45,1.6],.9,.34,2)}});b<A*4;b++)Ct.makeScale(0,0,0),ge.setMatrixAt(b,Ct);for(let S of Object.values(ve))S.instanceMatrix.needsUpdate=!0;ve.body.instanceColor.needsUpdate=!0,ge.instanceMatrix.needsUpdate=!0,ge.instanceColor.needsUpdate=!0;for(let[S,W]of ue){if(!W.car||!W.car.pos)continue;let ie=Math.min(1,(vt-W.born)*2);W.sp.position.set(W.car.pos[0],3.4+.25*Math.sin(vt*2+W.car.d),W.car.pos[1]),W.sp.scale.set(6.4*ie*(yr===S?1.25:1),4*ie*(yr===S?1.25:1),1)}xn.forEach((S,W)=>{S.d+=x*1.6;let ie=2*Cn-12,Ie=(S.d+(S.dir<0?ie:0))%(2*ie)/ie,Pt=Ie<=1,ct=-Cn+6+(Pt?Ie:2-Ie)*ie,ut=S.x+Math.sin(vt*.3+S.ph)*1.5,Yt=.25+Math.sin(vt*1.6+S.ph)*.18,Rt=Pt?0:Math.PI;on.setFromEuler(Ln.set(Math.sin(vt*1.3+S.ph)*.05,Rt,Math.sin(vt*1.1+S.ph)*.06));let Gt=Math.sin(Rt),en=Math.cos(Rt);for(let[di,rs,er]of _i)Lt.set(ut+rs[2]*Gt*S.sz,Yt+rs[1]*S.sz,ct+rs[2]*en*S.sz),zt.set(er[0]*S.sz,er[1]*S.sz,er[2]*S.sz),Ct.compose(Lt,on,zt),In[di].setMatrixAt(W,Ct);In.sail.setColorAt(W,kn.setRGB(...S.p.chg>=0?[.14,1.2,.72]:[1.35,.2,.66])),S.sp.position.set(ut,7.6*S.sz+.3,ct);let Un=ws==="perp:"+S.p.name?1.2:1;for(S.sp.scale.set(6.6*Un,2.4*Un,1),S.pos=[ut,ct],S.wake+=x*7;S.wake>=1;)S.wake--,vi(Lt.set(ut-Gt*2.8*S.sz+(l()-.5),.5,ct-en*2.8*S.sz),Oi.set((l()-.5)*1.5,.6+l()*.6,(l()-.5)*1.5),[2.2,2.4,2.8],.9+l()*.4,.3,2.5)});for(let S in In)In[S].instanceMatrix.needsUpdate=!0;for(In.sail.instanceColor&&(In.sail.instanceColor.needsUpdate=!0);_t.length;){let[S,W,ie]=_t.pop(),Ie=ie?[.8,2.4,3.8]:[3.6,2.6,.5];for(let Pt=0;Pt<(ie?90:40);Pt++)vi(Lt.set(S,3,W),Oi.set((l()-.5)*(ie?22:14),6+l()*(ie?18:10),(l()-.5)*(ie?22:14)),Pt%4?Ie:[3.4,3.4,3.6],1.1+l()*.7,ie?.6:.45,1.6)}let T=0;hn.forEach((S,W)=>{for(let ie=0;ie<10;ie++){let Ie=.5+.9*Math.abs(Math.sin(vt*(6+ie)+ie*1.7+W));Lt.set(S.x+(ie*37%5-2)*.45,S.y+Ie*.5+ie%3*.3,S.z+(ie*13%5-2)*.45),zt.set(.7,Ie,.7),Ct.compose(Lt,on.identity(),zt),un.setMatrixAt(T,Ct),un.setColorAt(T,kn.setRGB(4,1.2+ie%3*.6,.2)),T++}S.light.intensity=45+25*Math.sin(vt*13+W)}),un.instanceMatrix.needsUpdate=!0,un.instanceColor.needsUpdate=!0,nn.forEach((S,W)=>{S.t+=x,S.t>S.life&&(S.t=0);let ie=S.t/S.life,Ie=(S.s+ie*3.2)*(ie<.1?ie*10:ie>.85?(1-ie)/.15:1);Lt.set(S.f.x+S.ox+ie*ie*16,S.f.y+2+ie*34,S.f.z+S.oz+ie*3),zt.setScalar(Math.max(.001,Ie)),on.setFromEuler(Ln.set(ie*2+W,ie*3,0)),Ct.compose(Lt,on,zt),mt.setMatrixAt(W,Ct)}),mt.instanceMatrix.needsUpdate=!0,wn-=x,wn<=0&&f>2.6&&(It(),wn=(2.6+l()*3)*(.45+Es*1.3)),Qn+=x;let G=Math.max(0,1-Qn/.9);ui.position.copy(Fe),ui.intensity=G*900,fi.position.copy(Fe),fi.scale.setScalar(1+Qn*9),fi.material.opacity=G,sn.position.copy(Fe),sn.scale.setScalar(1+Qn*22),sn.material.opacity=Math.max(0,1-Qn/1.1)*.45,Di.forEach((S,W)=>{if(S.t+=x,S.t>2.5){Ct.makeScale(0,0,0),fn.setMatrixAt(W,Ct);return}S.v.y-=26*x,S.p.addScaledVector(S.v,x),S.p.y<.2&&(S.p.y=.2,S.v.multiplyScalar(.4),S.v.y=Math.abs(S.v.y)*.3);let ie=.45*(1-S.t/2.5);Ct.compose(S.p,on.setFromEuler(Ln.set(S.t*7,S.t*5,0)),zt.setScalar(ie)),fn.setMatrixAt(W,Ct),fn.setColorAt(W,S.c)}),fn.instanceMatrix.needsUpdate=!0,fn.instanceColor&&(fn.instanceColor.needsUpdate=!0),zi-=x,zi<=0&&(Hn(),zi=(1.5+l()*2.2)*(1.6-Es*1.1));for(let S=Gs.length-1;S>=0;S--){let W=Gs[S];if(W.t+=x,W.v.y-=9*x,W.p.addScaledVector(W.v,x),vi(W.p,Oi.set((l()-.5)*1.5,-2-l()*2,(l()-.5)*1.5),[3,2.4,1.4],.45+l()*.3,.26,2.5),W.t>=W.fuse){let ie=Ss[W.col],Ie=Ss[(W.col+2)%Ss.length],Pt=t?60:110,ct=19+l()*8;for(let ut=0;ut<Pt;ut++){let Yt=l()*Math.PI*2,Rt=Math.acos(2*l()-1),Gt=ct*(.75+l()*.3);Oi.set(Math.sin(Rt)*Math.cos(Yt)*Gt,Math.cos(Rt)*Gt,Math.sin(Rt)*Math.sin(Yt)*Gt),vi(W.p,Oi,ut%5===0?Ie:ie,1.6+l()*.9,.85+l()*.4,1.5)}Gs.splice(S,1)}}Fi.forEach((S,W)=>{if(S.t>=S.life){S.t<50&&(S.t=99,Ct.makeScale(0,0,0),ei.setMatrixAt(W,Ct));return}S.t+=x,S.v.y-=7*x,S.v.multiplyScalar(Math.max(0,1-S.drag*x)),S.p.addScaledVector(S.v,x);let ie=Math.max(0,1-S.t/S.life),Ie=ie*ie*(Math.sin(vt*40+W)>-.6?1:.3);Ct.compose(S.p,on.identity(),zt.setScalar(S.s*(.4+.6*ie))),ei.setMatrixAt(W,Ct),ei.setColorAt(W,kn.setRGB(S.c.r*Ie,S.c.g*Ie,S.c.b*Ie))}),ei.instanceMatrix.needsUpdate=!0,ei.instanceColor&&(ei.instanceColor.needsUpdate=!0),ha+=(Math.max(0,Math.min(1,(.38-Es)/.22))-ha)*Math.min(1,x*.5),a.uMood.value+=(Es-a.uMood.value)*Math.min(1,x*.4);let j=e.reduced?0:Math.floor(Hi*ha);if(Tn.count=j,j){let S=lt.target.x,W=lt.target.z;for(let ie=0;ie<j;ie++){let Ie=qs[ie];Ie.y-=Ie.v*x,Ie.y<0&&(Ie.y+=80,Ie.x=(l()-.5)*170,Ie.z=(l()-.5)*170),Lt.set(S+Ie.x,Ie.y,W+Ie.z),zt.set(.07,1.6,.07),Ct.compose(Lt,on.set(.08,0,.04,1).normalize(),zt),Tn.setMatrixAt(ie,Ct)}Tn.instanceMatrix.needsUpdate=!0}Ws-=x,Ws<=0&&(Bi=0,Ws=(9+l()*9)*(.5+Es*1.1)),Bi+=x,a.uFlash.value=e.reduced?0:Bi<.07?.5:Bi<.14?.08:Bi<.22?.38:Math.max(0,.38-(Bi-.22)*1.6),f<99&&yl(x),ti.step(x,vt),ti.glowG.visible=f>2.2;let V=f>2.6;ne.visible=f>1.6,un.visible=mt.visible=V;for(let S of Qi)S.cone.visible=V;for(let S of te)S.sp.visible=V;be.rotation.z=vt*.16,$e.forEach((S,W)=>{let ie=W/$e.length*ks+vt*.16;S.position.set(Math.cos(ie)*15,Math.sin(ie)*15-1.8,0)});{let S=Math.floor(vt*9);for(let W=0;W<xe;W++){let ie=(W+S)%8;De.setColorAt(W,kn.setRGB(...ie<2?[3,.5,1.8]:ie<4?[.5,2,3.2]:ie<6?[3.2,2.6,.6]:[1.4,.6,3]))}De.instanceColor.needsUpdate=!0}je.rotation.y=vt*.55,ke(x);{let S=vt*.045;rt.position.set(Math.cos(S)*118,74+Math.sin(vt*.3)*2,Math.sin(S)*118),rt.rotation.y=-S-Math.PI/2,rt.userData.tip.visible=Math.sin(vt*5)>0}for(let S=Pn.length-1;S>=0;S--){let W=Pn[S];W.t+=x;let ie=W.t/W.life;if(ie>=1){r.remove(W.sp),W.sp.material.map.dispose(),W.sp.material.dispose(),Pn.splice(S,1);continue}let Ie=Math.min(1,W.t/.38),Pt=1+2.70158*Math.pow(Ie-1,3)+1.70158*Math.pow(Ie-1,2),ct=ie>.84?(1-ie)/.16:1,ut=W.car&&W.car.pos?W.car.pos[0]:W.x,Yt=W.car&&W.car.pos?W.car.pos[1]:W.z,Rt=(W.car?8:W.y)+W.t*.45;W.sp.position.set(ut,Rt,Yt);let Gt=c.position.distanceTo(W.sp.position),en=Math.max(.32,Math.min(2.6,Gt/95))*Pt;W.sp.scale.set(10.8*en,4.05*en,1),W.sp.material.opacity=ct}{let S=a.uMood.value,W=Math.min(1,Math.max(0,(S-.25)/.25)),ie=Math.min(1,Math.max(0,(S-.6)/.25))*.6,Ie=.62+.38*W,Pt=.12+.19*W,ct=.3+.32*W;Ie+=(1-Ie)*ie,Pt+=(.55-Pt)*ie,ct+=(.5-ct)*ie;let ut=[.068,.023,.25];o.setRGB(ut[0]+(Math.pow(Ie,2.2)*.7-ut[0])*.42,ut[1]+(Math.pow(Pt,2.2)*.7-ut[1])*.42,ut[2]+(Math.pow(ct,2.2)*.7-ut[2])*.42)}for(let S of dn){let W=vt*S.sp+S.ph;S.g.position.set(Math.cos(W)*S.r,S.h+Math.sin(vt*1.3+S.ph)*1.5,Math.sin(W)*S.r),S.g.rotation.y=-W,S.rot.rotation.y=vt*30,S.cone.rotation.z=Math.sin(vt*.7+S.ph)*.35,S.red.visible=Math.sin(vt*6+S.ph)>0}for(let S of Qi)S.cone.rotation.set(Math.sin(vt*S.sp+S.ph)*.5,0,Math.cos(vt*S.sp*.8+S.ph)*.5);if(_n){let S=vt*.04+.9;c.position.set(Math.cos(S)*228,138,Math.sin(S)*228),lt.target.set(0,4,-10)}else if(Vi>0){ts+=x;let S=Math.min(1,ts/3.4),W=S<.5?4*S*S*S:1-Math.pow(-2*S+2,3)/2;if(Rn==="story"){let[ie,Ie]=Wi(Math.round(Ys));An.lerp(ie,.1),Si.lerp(Ie,.1)}c.position.lerpVectors(ua,An,W),lt.target.lerpVectors(ni,Si,W),a.uFogD.value=ns+(es-ns)*W,S>=1&&(Vi=0)}else if(Rn==="story"&&bs.length){let S=bs.length,W=Math.max(0,Math.min(S-1,Ys)),ie=Math.floor(W),Ie=Math.min(S-1,ie+1),Pt=W-ie,ct=Pt*Pt*(3-2*Pt),ut=Wi(ie),Yt=Wi(Ie),Rt=1-Math.exp(-x*2.4);c.position.lerp(ut[0].lerp(Yt[0],ct),Rt),lt.target.lerp(ut[1].lerp(Yt[1],ct),Rt)}else $t&&$t.pos?lt.target.lerp(Lt.set($t.pos[0],2,$t.pos[1]),.08):(Gi+=x,Gi>18&&!e.reduced?js(x):Gi>10&&!lt.autoRotate&&(lt.autoRotate=!0));Rn==="roam"&&!Vi?lt.update():c.lookAt(lt.target),e.onFrame&&ss%3===0&&e.onFrame({cars:pe,boats:xn,helis:dn,garage:Ge.length,cam:c,controls:lt,half:Cn,beach:tn,pitch:ji})}function yl(x){f+=x;let b=!0;for(let{m:T,list:G}of g){let j=!1;for(let V=0;V<G.length;V++){let S=G[V];S.rd==null&&(S.rd=.15+Math.hypot(S.x,S.z)/300*2.2+l()*.35);let W=Math.min(1,Math.max(0,(f-S.rd)/.75));if(W<1&&(b=!1),S.rk===W)continue;S.rk=W,j=!0;let ie=W>=1?1:1+2.70158*Math.pow(W-1,3)+1.70158*Math.pow(W-1,2),Ie=Math.max(.001,ie);Lt.set(S.x,(S.y+S.h/2)*Ie,S.z),zt.set(S.w,S.h*Ie,S.d),on.setFromEuler(Ln.set(S.rx||0,S.ry||0,S.rz||0)),Ct.compose(Lt,on,zt),T.setMatrixAt(V,Ct)}j&&(T.instanceMatrix.needsUpdate=!0)}b&&(f=99)}let Yn=new F,Vn=new F,Mr=0;function js(x){lt.autoRotate=!1,Mr+=x;let b=Math.floor(Mr/9)%10,T=vt*.07;if(b>=5){let[j,V]=ti.shots[["airport","port","arena","bridge","site"][b-5]](),S=1-Math.exp(-x*.9);lt.target.lerp(V,S),c.position.lerp(j,S*.8);return}if(b===1){let j=pe.filter(V=>V.coin&&V.pos&&!V.coin.isNew).sort((V,S)=>(S.coin.heat||0)-(V.coin.heat||0))[0];j?(Yn.set(j.pos[0],2,j.pos[1]),Vn.set(Math.cos(T)*30,17,Math.sin(T)*30)):(Yn.set(0,6,0),Vn.set(Math.cos(T)*150,85,Math.sin(T)*150))}else b===2?(Yn.set(tn+38,3,Math.sin(vt*.08)*55),Vn.set(-62,32,46)):b===3?(Yn.set(U.x,15,U.z),Vn.set(-34+Math.sin(T)*10,-2,44)):b===4&&dn[0]?(Yn.copy(dn[0].g.position),Vn.set(Math.cos(T)*38,10,Math.sin(T)*38)):(Yn.set(0,6,0),Vn.set(Math.cos(T)*150,85,Math.sin(T)*150));let G=1-Math.exp(-x*.9);lt.target.lerp(Yn,G),c.position.lerp(Vn.add(Yn),G*.8)}function Sr(x){if(Ei=0,$s)return;let b=Math.max(0,Math.min(.05,(x-_a)/1e3));_a=x,!qi||ss%2===0?(Ts(e.reduced?b*.3:b),yi.render()):ss++,Ei=requestAnimationFrame(Sr)}let Qs=()=>{!Ei&&!$s&&(_a=performance.now(),Ei=requestAnimationFrame(Sr))};document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(Ei),Ei=0):Qs()}),Ts(0),Qs();let va={setCoins:Se,setPerps:X,setWhales:ca,setGarage:pt,home:()=>se,setMood(x){Es=Math.max(0,Math.min(1,x))},chased:()=>gt,follow(x){let b=ue.get(x);b&&($t=b.car,lt.autoRotate=!1)},followPerp(x){let b=xn.find(T=>T.p.name===x);b&&($t=b,lt.autoRotate=!1)},unfollow(){$t=null},pause(x){$s=x,x?(cancelAnimationFrame(Ei),Ei=0):Qs()},slow(x){qi=x},enter:Js,entered:()=>!_n,bubble:Vs,setStory(x){bs=x.slice()},story(x){Ys=x,!_n&&Rn!=="story"&&(Rn="story",lt.enabled=!1,$t=null)},roam(){_n||Rn==="roam"||(Rn="roam",lt.enabled=!0,is(Mi,ki))},mode:()=>Rn,overview(){_n||Rn!=="roam"||($t=null,is(Mi,ki))},skip(){_n=!1,Rn="roam",lt.enabled=!0,Vi=0,a.uFogD.value=es,c.position.copy(Mi),lt.target.copy(ki),f=99;for(let{m:x,list:b}of g)b.forEach((T,G)=>{Lt.set(T.x,T.y+T.h/2,T.z),zt.set(T.w,T.h,T.d),on.setFromEuler(Ln.set(T.rx||0,T.ry||0,T.rz||0)),Ct.compose(Lt,on,zt),x.setMatrixAt(G,Ct)}),x.instanceMatrix.needsUpdate=!0},shot(x){let b=Math.round(x*30);for(let T=0;T<b;T++)Ts(1/30);yi.render()},info:()=>({calls:n.info.render.calls,tris:n.info.render.triangles}),launched:x=>ti.launched(x),takeoff:x=>ti.takeoff(x),setBanner:x=>ti.setBanner(x),setArena:x=>ti.setArena(x),view(x,b){_n=!1,Rn="roam",lt.enabled=!0,Vi=0,a.uFogD.value=es,c.position.set(...x),lt.target.set(...b),lt.update()}};return window.__bloxWorld=va,va}export{B_ as startWorld};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
