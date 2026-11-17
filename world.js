var Ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cu=0,Zl=1,hu=2;var bh=1,uu=2,jn=3,Si=0,Qt=1,hn=2;var Hn=0,Rs=1,ti=2,Jl=3,Kl=4,fu=5,Bi=100,du=101,pu=102,$l=103,jl=104,mu=200,gu=201,_u=202,xu=203,Bo=204,zo=205,vu=206,yu=207,Mu=208,Su=209,bu=210,Eu=211,Tu=212,wu=213,Au=214,Ru=0,Cu=1,Pu=2,ia=3,Lu=4,Iu=5,Uu=6,Du=7,Sl=0,Nu=1,Ou=2,yi=0,bl=1,El=2,Tl=3,yr=4,Fu=5,wl=6;var Eh=300,Ls=301,Is=302,Ho=303,ko=304,Pa=306,Vo=1e3,Pn=1001,Go=1002,ln=1003,Ql=1004;var ro=1005;var yn=1006,Bu=1007;var cr=1008;var Mi=1009,zu=1010,Hu=1011,Al=1012,Th=1013,xi=1014,vi=1015,Un=1016,wh=1017,Ah=1018,ki=1020,ku=1021,Ln=1023,Vu=1024,Gu=1025,Vi=1026,Us=1027,Wu=1028,Rh=1029,Xu=1030,Ch=1031,Ph=1033,ao=33776,oo=33777,lo=33778,co=33779,ec=35840,tc=35841,nc=35842,ic=35843,Lh=36196,sc=37492,rc=37496,ac=37808,oc=37809,lc=37810,cc=37811,hc=37812,uc=37813,fc=37814,dc=37815,pc=37816,mc=37817,gc=37818,_c=37819,xc=37820,vc=37821,ho=36492,yc=36494,Mc=36495,qu=36283,Sc=36284,bc=36285,Ec=36286;var sa=2300,ra=2301,uo=2302,Tc=2400,wc=2401,Ac=2402;var Ih=3e3,Gi=3001,Yu=3200,Zu=3201,Uh=0,Ju=1,Mn="",St="srgb",ni="srgb-linear",Rl="display-p3",La="display-p3-linear",aa="linear",xt="srgb",oa="rec709",la="p3";var rs=7680;var Rc=519,Ku=512,$u=513,ju=514,Dh=515,Qu=516,ef=517,tf=518,nf=519,Wo=35044;var Cc="300 es",Xo=1035,Qn=2e3,ca=2001,kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pc=1234567,rr=Math.PI/180,hr=180/Math.PI;function ei(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function $t(i,e,t){return Math.max(e,Math.min(t,i))}function Cl(i,e){return(i%e+e)%e}function sf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function rf(i,e,t){return i!==e?(t-i)/(e-i):0}function ar(i,e,t){return(1-t)*i+t*e}function af(i,e,t,n){return ar(i,e,1-Math.exp(-t*n))}function of(i,e=1){return e-Math.abs(Cl(i,e*2)-e)}function lf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function cf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function hf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function uf(i,e){return i+Math.random()*(e-i)}function ff(i){return i*(.5-Math.random())}function df(i){i!==void 0&&(Pc=i);let e=Pc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pf(i){return i*rr}function mf(i){return i*hr}function qo(i){return(i&i-1)===0&&i!==0}function gf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ha(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _f(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),d=o((e-n)/2),m=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*f,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*f,a*l);break;case"ZXZ":i.set(c*f,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*_,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*_,a*l);break;case"ZYZ":i.set(c*_,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Nh={DEG2RAD:rr,RAD2DEG:hr,generateUUID:ei,clamp:$t,euclideanModulo:Cl,mapLinear:sf,inverseLerp:rf,lerp:ar,damp:af,pingpong:of,smoothstep:lf,smootherstep:cf,randInt:hf,randFloat:uf,randFloatSpread:ff,seededRandom:df,degToRad:pf,radToDeg:mf,isPowerOfTwo:qo,ceilPowerOfTwo:gf,floorPowerOfTwo:ha,setQuaternionFromProperEuler:_f,normalize:ft,denormalize:zn},Te=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rt=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],m=n[5],_=n[8],x=s[0],p=s[3],u=s[6],w=s[1],M=s[4],U=s[7],O=s[2],D=s[5],P=s[8];return r[0]=o*x+a*w+c*O,r[3]=o*p+a*M+c*D,r[6]=o*u+a*U+c*P,r[1]=l*x+h*w+f*O,r[4]=l*p+h*M+f*D,r[7]=l*u+h*U+f*P,r[2]=d*x+m*w+_*O,r[5]=d*p+m*M+_*D,r[8]=d*u+m*U+_*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,d=a*c-h*r,m=l*r-o*c,_=t*f+n*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return e[0]=f*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fo.makeScale(e,t)),this}rotate(e){return this.premultiply(fo.makeRotation(-e)),this}translate(e,t){return this.premultiply(fo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fo=new rt;function Oh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ua(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xf(){let i=ua("canvas");return i.style.display="block",i}var Lc={};function or(i){i in Lc||(Lc[i]=!0,console.warn(i))}var Ic=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uc=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pr={[ni]:{transfer:aa,primaries:oa,toReference:i=>i,fromReference:i=>i},[St]:{transfer:xt,primaries:oa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[La]:{transfer:aa,primaries:la,toReference:i=>i.applyMatrix3(Uc),fromReference:i=>i.applyMatrix3(Ic)},[Rl]:{transfer:xt,primaries:la,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Uc),fromReference:i=>i.applyMatrix3(Ic).convertLinearToSRGB()}},vf=new Set([ni,La]),ut={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!vf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Pr[e].toReference,s=Pr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Pr[i].primaries},getTransfer:function(i){return i===Mn?aa:Pr[i].transfer}};function Cs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function po(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var as,fa=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{as===void 0&&(as=ua("canvas")),as.width=e.width,as.height=e.height;let n=as.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=as}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ua("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Cs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cs(t[n]/255)*255):t[n]=Cs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},yf=0,da=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=ei(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(mo(s[o].image)):r.push(mo(s[o]))}else r=mo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Mf=0,Sn=class i extends kn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Pn,s=Pn,r=yn,o=cr,a=Ln,c=Mi,l=i.DEFAULT_ANISOTROPY,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=ei(),this.name="",this.source=new da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Gi?St:Mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vo:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vo:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===St?Gi:Ih}set encoding(e){or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Gi?St:Mn}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Eh;Sn.DEFAULT_ANISOTROPY=1;var wt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],m=c[5],_=c[9],x=c[2],p=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,U=(m+1)/2,O=(u+1)/2,D=(h+d)/4,P=(f+x)/4,j=(_+p)/4;return M>U&&M>O?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=D/n,r=P/n):U>O?U<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(U),n=D/s,r=j/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=P/r,s=j/r),this.set(n,s,r,t),this}let w=Math.sqrt((p-_)*(p-_)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(p-_)/w,this.y=(f-x)/w,this.z=(d-h)/w,this.w=Math.acos((l+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yo=class extends kn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(or("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Gi?St:Mn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new da(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends Yo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},pa=class extends Sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zo=class extends Sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var en=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],d=r[o+0],m=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(f!==x||c!==d||l!==m||h!==_){let p=1-a,u=c*d+l*m+h*_+f*x,w=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){let O=Math.sqrt(M),D=Math.atan2(O,u*w);p=Math.sin(p*D)/O,a=Math.sin(a*D)/O}let U=a*w;if(c=c*p+d*U,l=l*p+m*U,h=h*p+_*U,f=f*p+x*U,p===1-a){let O=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=O,l*=O,h*=O,f*=O}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[o],d=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+h*f+c*m-l*d,e[t+1]=c*_+h*d+l*f-a*m,e[t+2]=l*_+h*m+a*d-c*f,e[t+3]=h*_-a*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(r/2),d=c(n/2),m=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=d*h*f+l*m*_,this._y=l*m*f-d*h*_,this._z=l*h*_+d*m*f,this._w=l*h*f-d*m*_;break;case"YXZ":this._x=d*h*f+l*m*_,this._y=l*m*f-d*h*_,this._z=l*h*_-d*m*f,this._w=l*h*f+d*m*_;break;case"ZXY":this._x=d*h*f-l*m*_,this._y=l*m*f+d*h*_,this._z=l*h*_+d*m*f,this._w=l*h*f-d*m*_;break;case"ZYX":this._x=d*h*f-l*m*_,this._y=l*m*f+d*h*_,this._z=l*h*_-d*m*f,this._w=l*h*f+d*m*_;break;case"YZX":this._x=d*h*f+l*m*_,this._y=l*m*f+d*h*_,this._z=l*h*_-d*m*f,this._w=l*h*f-d*m*_;break;case"XZY":this._x=d*h*f-l*m*_,this._y=l*m*f-d*h*_,this._z=l*h*_+d*m*f,this._w=l*h*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>f){let m=2*Math.sqrt(1+n-a-f);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>f){let m=2*Math.sqrt(1+a-n-f);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+f-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+c*l+o*f-a*h,this.y=n+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return go.copy(this).projectOnVector(e),this.sub(go)}reflect(e){return this.sub(go.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},go=new L,Dc=new en,ii=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(e.matrixWorld),this.union(Lr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),Ir.subVectors(this.max,Js),os.subVectors(e.a,Js),ls.subVectors(e.b,Js),cs.subVectors(e.c,Js),di.subVectors(ls,os),pi.subVectors(cs,ls),Ui.subVectors(os,cs);let t=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Ui.z,Ui.y,di.z,0,-di.x,pi.z,0,-pi.x,Ui.z,0,-Ui.x,-di.y,di.x,0,-pi.y,pi.x,0,-Ui.y,Ui.x,0];return!_o(t,os,ls,cs,Ir)||(t=[1,0,0,0,1,0,0,0,1],!_o(t,os,ls,cs,Ir))?!1:(Ur.crossVectors(di,pi),t=[Ur.x,Ur.y,Ur.z],_o(t,os,ls,cs,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Yn=[new L,new L,new L,new L,new L,new L,new L,new L],wn=new L,Lr=new ii,os=new L,ls=new L,cs=new L,di=new L,pi=new L,Ui=new L,Js=new L,Ir=new L,Ur=new L,Di=new L;function _o(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Di.fromArray(i,r);let a=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),c=e.dot(Di),l=t.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Sf=new ii,Ks=new L,xo=new L,Wi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Sf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);let t=Ks.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(xo)),this.expandByPoint(Ks.copy(e.center).sub(xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zn=new L,vo=new L,Dr=new L,mi=new L,yo=new L,Nr=new L,Mo=new L,Ds=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){vo.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(vo);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Dr),a=mi.dot(this.direction),c=-mi.dot(Dr),l=mi.lengthSq(),h=Math.abs(1-o*o),f,d,m,_;if(h>0)if(f=o*c-a,d=o*a-c,_=r*h,f>=0)if(d>=-_)if(d<=_){let x=1/h;f*=x,d*=x,m=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d<=-_?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l):d<=_?(f=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(vo).addScaledVector(Dr,d),m}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);let n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,s,r){yo.subVectors(t,e),Nr.subVectors(n,e),Mo.crossVectors(yo,Nr);let o=this.direction.dot(Mo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);let c=a*this.direction.dot(Nr.crossVectors(mi,Nr));if(c<0)return null;let l=a*this.direction.dot(yo.cross(mi));if(l<0||c+l>o)return null;let h=-a*mi.dot(Mo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dt=class i{constructor(e,t,n,s,r,o,a,c,l,h,f,d,m,_,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,f,d,m,_,x,p)}set(e,t,n,s,r,o,a,c,l,h,f,d,m,_,x,p){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/hs.setFromMatrixColumn(e,0).length(),r=1/hs.setFromMatrixColumn(e,1).length(),o=1/hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*h,m=o*f,_=a*h,x=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=m+_*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,m=c*f,_=l*h,x=l*f;t[0]=d+x*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-_,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,m=c*f,_=l*h,x=l*f;t[0]=d-x*a,t[4]=-o*f,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,m=o*f,_=a*h,x=a*f;t[0]=c*h,t[4]=_*l-m,t[8]=d*l+x,t[1]=c*f,t[5]=x*l+d,t[9]=m*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,m=o*l,_=a*c,x=a*l;t[0]=c*h,t[4]=x-d*f,t[8]=_*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*f+_,t[10]=d-x*f}else if(e.order==="XZY"){let d=o*c,m=o*l,_=a*c,x=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+x,t[5]=o*h,t[9]=m*f-_,t[2]=_*f-m,t[6]=a*h,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bf,e,Ef)}lookAt(e,t,n){let s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),gi.crossVectors(n,fn),gi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),gi.crossVectors(n,fn)),gi.normalize(),Or.crossVectors(fn,gi),s[0]=gi.x,s[4]=Or.x,s[8]=fn.x,s[1]=gi.y,s[5]=Or.y,s[9]=fn.y,s[2]=gi.z,s[6]=Or.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],m=n[13],_=n[2],x=n[6],p=n[10],u=n[14],w=n[3],M=n[7],U=n[11],O=n[15],D=s[0],P=s[4],j=s[8],S=s[12],R=s[1],Y=s[5],Q=s[9],de=s[13],N=s[2],k=s[6],Z=s[10],se=s[14],te=s[3],ee=s[7],oe=s[11],ce=s[15];return r[0]=o*D+a*R+c*N+l*te,r[4]=o*P+a*Y+c*k+l*ee,r[8]=o*j+a*Q+c*Z+l*oe,r[12]=o*S+a*de+c*se+l*ce,r[1]=h*D+f*R+d*N+m*te,r[5]=h*P+f*Y+d*k+m*ee,r[9]=h*j+f*Q+d*Z+m*oe,r[13]=h*S+f*de+d*se+m*ce,r[2]=_*D+x*R+p*N+u*te,r[6]=_*P+x*Y+p*k+u*ee,r[10]=_*j+x*Q+p*Z+u*oe,r[14]=_*S+x*de+p*se+u*ce,r[3]=w*D+M*R+U*N+O*te,r[7]=w*P+M*Y+U*k+O*ee,r[11]=w*j+M*Q+U*Z+O*oe,r[15]=w*S+M*de+U*se+O*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],m=e[14],_=e[3],x=e[7],p=e[11],u=e[15];return _*(+r*c*f-s*l*f-r*a*d+n*l*d+s*a*m-n*c*m)+x*(+t*c*m-t*l*d+r*o*d-s*o*m+s*l*h-r*c*h)+p*(+t*l*f-t*a*m-r*o*f+n*o*m+r*a*h-n*l*h)+u*(-s*a*h-t*c*f+t*a*d+s*o*f-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],m=e[11],_=e[12],x=e[13],p=e[14],u=e[15],w=f*p*l-x*d*l+x*c*m-a*p*m-f*c*u+a*d*u,M=_*d*l-h*p*l-_*c*m+o*p*m+h*c*u-o*d*u,U=h*x*l-_*f*l+_*a*m-o*x*m-h*a*u+o*f*u,O=_*f*c-h*x*c-_*a*d+o*x*d+h*a*p-o*f*p,D=t*w+n*M+s*U+r*O;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/D;return e[0]=w*P,e[1]=(x*d*r-f*p*r-x*s*m+n*p*m+f*s*u-n*d*u)*P,e[2]=(a*p*r-x*c*r+x*s*l-n*p*l-a*s*u+n*c*u)*P,e[3]=(f*c*r-a*d*r-f*s*l+n*d*l+a*s*m-n*c*m)*P,e[4]=M*P,e[5]=(h*p*r-_*d*r+_*s*m-t*p*m-h*s*u+t*d*u)*P,e[6]=(_*c*r-o*p*r-_*s*l+t*p*l+o*s*u-t*c*u)*P,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*m+t*c*m)*P,e[8]=U*P,e[9]=(_*f*r-h*x*r-_*n*m+t*x*m+h*n*u-t*f*u)*P,e[10]=(o*x*r-_*a*r+_*n*l-t*x*l-o*n*u+t*a*u)*P,e[11]=(h*a*r-o*f*r-h*n*l+t*f*l+o*n*m-t*a*m)*P,e[12]=O*P,e[13]=(h*x*s-_*f*s+_*n*d-t*x*d-h*n*p+t*f*p)*P,e[14]=(_*a*s-o*x*s-_*n*c+t*x*c+o*n*p-t*a*p)*P,e[15]=(o*f*s-h*a*s+h*n*c-t*f*c-o*n*d+t*a*d)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,f=a+a,d=r*l,m=r*h,_=r*f,x=o*h,p=o*f,u=a*f,w=c*l,M=c*h,U=c*f,O=n.x,D=n.y,P=n.z;return s[0]=(1-(x+u))*O,s[1]=(m+U)*O,s[2]=(_-M)*O,s[3]=0,s[4]=(m-U)*D,s[5]=(1-(d+u))*D,s[6]=(p+w)*D,s[7]=0,s[8]=(_+M)*P,s[9]=(p-w)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=hs.set(s[0],s[1],s[2]).length(),o=hs.set(s[4],s[5],s[6]).length(),a=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],An.copy(this);let l=1/r,h=1/o,f=1/a;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,t.setFromRotationMatrix(An),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Qn){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),m,_;if(a===Qn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ca)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Qn){let c=this.elements,l=1/(t-e),h=1/(n-s),f=1/(o-r),d=(t+e)*l,m=(n+s)*h,_,x;if(a===Qn)_=(o+r)*f,x=-2*f;else if(a===ca)_=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},hs=new L,An=new dt,bf=new L(0,0,0),Ef=new L(1,1,1),gi=new L,Or=new L,fn=new L,Nc=new dt,Oc=new en,Xi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oc.setFromEuler(this),this.setFromQuaternion(Oc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xi.DEFAULT_ORDER="XYZ";var ur=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tf=0,Fc=new L,us=new en,Jn=new dt,Fr=new L,$s=new L,wf=new L,Af=new en,Bc=new L(1,0,0),zc=new L(0,1,0),Hc=new L(0,0,1),Rf={type:"added"},Cf={type:"removed"},tn=class i extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Xi,n=new en,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new rt}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Bc,e)}rotateY(e){return this.rotateOnAxis(zc,e)}rotateZ(e){return this.rotateOnAxis(Hc,e)}translateOnAxis(e,t){return Fc.copy(e).applyQuaternion(this.quaternion),this.position.add(Fc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bc,e)}translateY(e){return this.translateOnAxis(zc,e)}translateZ(e){return this.translateOnAxis(Hc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fr.copy(e):Fr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt($s,Fr,this.up):Jn.lookAt(Fr,$s,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),us.setFromRotationMatrix(Jn),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Rf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,wf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Af,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};tn.DEFAULT_UP=new L(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new L,Kn=new L,So=new L,$n=new L,fs=new L,ds=new L,kc=new L,bo=new L,Eo=new L,To=new L,Br=!1,Hi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Rn.subVectors(e,t),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Rn.subVectors(s,t),Kn.subVectors(n,t),So.subVectors(e,t);let o=Rn.dot(Rn),a=Rn.dot(Kn),c=Rn.dot(So),l=Kn.dot(Kn),h=Kn.dot(So),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,m=(l*c-a*h)*d,_=(o*h-a*c)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getUV(e,t,n,s,r,o,a,c){return Br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Br=!0),this.getInterpolation(e,t,n,s,r,o,a,c)}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$n.x),c.addScaledVector(o,$n.y),c.addScaledVector(a,$n.z),c)}static isFrontFacing(e,t,n,s){return Rn.subVectors(n,t),Kn.subVectors(e,t),Rn.cross(Kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Rn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Br=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;fs.subVectors(s,n),ds.subVectors(r,n),bo.subVectors(e,n);let c=fs.dot(bo),l=ds.dot(bo);if(c<=0&&l<=0)return t.copy(n);Eo.subVectors(e,s);let h=fs.dot(Eo),f=ds.dot(Eo);if(h>=0&&f<=h)return t.copy(s);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(fs,o);To.subVectors(e,r);let m=fs.dot(To),_=ds.dot(To);if(_>=0&&m<=_)return t.copy(r);let x=m*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(ds,a);let p=h*_-m*f;if(p<=0&&f-h>=0&&m-_>=0)return kc.subVectors(r,s),a=(f-h)/(f-h+(m-_)),t.copy(s).addScaledVector(kc,a);let u=1/(p+x+d);return o=x*u,a=d*u,t.copy(n).addScaledVector(fs,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},zr={h:0,s:0,l:0};function wo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=Cl(e,1),t=$t(t,0,1),n=$t(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=wo(o,r,e+1/3),this.g=wo(o,r,e),this.b=wo(o,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=Fh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return ut.fromWorkingColorSpace(Kt.copy(this),e),Math.round($t(Kt.r*255,0,255))*65536+Math.round($t(Kt.g*255,0,255))*256+Math.round($t(Kt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Kt.copy(this),t);let n=Kt.r,s=Kt.g,r=Kt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=St){ut.fromWorkingColorSpace(Kt.copy(this),e);let t=Kt.r,n=Kt.g,s=Kt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(zr);let n=ar(_i.h,zr.h,t),s=ar(_i.s,zr.s,t),r=ar(_i.l,zr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new Re;Re.NAMES=Fh;var Pf=0,bi=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=Rs,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bo,this.blendDst=zo,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bo&&(n.blendSrc=this.blendSrc),this.blendDst!==zo&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ia&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},vt=class extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ot=new L,Hr=new Te,un=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wo&&(e.usage=this.usage),e}};var ma=class extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ga=class extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var It=class extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Lf=0,vn=new dt,Ao=new tn,ps=new L,dn=new ii,js=new ii,Wt=new L,pn=class i extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oh(e)?ga:ma)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return Ao.lookAt(e),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(dn.min,js.min),dn.expandByPoint(Wt),Wt.addVectors(dn.max,js.max),dn.expandByPoint(Wt)):(dn.expandByPoint(js.min),dn.expandByPoint(js.max))}dn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Wt.fromBufferAttribute(a,l),c&&(ps.fromBufferAttribute(e,l),Wt.add(ps)),s=Math.max(s,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let R=0;R<a;R++)l[R]=new L,h[R]=new L;let f=new L,d=new L,m=new L,_=new Te,x=new Te,p=new Te,u=new L,w=new L;function M(R,Y,Q){f.fromArray(s,R*3),d.fromArray(s,Y*3),m.fromArray(s,Q*3),_.fromArray(o,R*2),x.fromArray(o,Y*2),p.fromArray(o,Q*2),d.sub(f),m.sub(f),x.sub(_),p.sub(_);let de=1/(x.x*p.y-p.x*x.y);isFinite(de)&&(u.copy(d).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(de),w.copy(m).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar(de),l[R].add(u),l[Y].add(u),l[Q].add(u),h[R].add(w),h[Y].add(w),h[Q].add(w))}let U=this.groups;U.length===0&&(U=[{start:0,count:n.length}]);for(let R=0,Y=U.length;R<Y;++R){let Q=U[R],de=Q.start,N=Q.count;for(let k=de,Z=de+N;k<Z;k+=3)M(n[k+0],n[k+1],n[k+2])}let O=new L,D=new L,P=new L,j=new L;function S(R){P.fromArray(r,R*3),j.copy(P);let Y=l[R];O.copy(Y),O.sub(P.multiplyScalar(P.dot(Y))).normalize(),D.crossVectors(j,Y);let de=D.dot(h[R])<0?-1:1;c[R*4]=O.x,c[R*4+1]=O.y,c[R*4+2]=O.z,c[R*4+3]=de}for(let R=0,Y=U.length;R<Y;++R){let Q=U[R],de=Q.start,N=Q.count;for(let k=de,Z=de+N;k<Z;k+=3)S(n[k+0]),S(n[k+1]),S(n[k+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,f=new L;if(e)for(let d=0,m=e.count;d<m;d+=3){let _=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,f=a.normalized,d=new l.constructor(c.length*h),m=0,_=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?m=c[x]*a.data.stride+a.offset:m=c[x]*h;for(let u=0;u<h;u++)d[_++]=l[m++]}return new un(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let d=l[h],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let m=l[f];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vc=new dt,Ni=new Ds,kr=new Wi,Gc=new L,ms=new L,gs=new L,_s=new L,Ro=new L,Vr=new L,Gr=new Te,Wr=new Te,Xr=new Te,Wc=new L,Xc=new L,qc=new L,qr=new L,Yr=new L,ot=class extends tn{constructor(e=new pn,t=new vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Vr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(Ro.fromBufferAttribute(f,e),o?Vr.addScaledVector(Ro,h):Vr.addScaledVector(Ro.sub(t),h))}t.add(Vr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(r),Ni.copy(e.ray).recast(e.near),!(kr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(kr,Gc)===null||Ni.origin.distanceToSquared(Gc)>(e.far-e.near)**2))&&(Vc.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(Vc),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){let p=d[_],u=o[p.materialIndex],w=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let U=w,O=M;U<O;U+=3){let D=a.getX(U),P=a.getX(U+1),j=a.getX(U+2);s=Zr(this,u,e,n,l,h,f,D,P,j),s&&(s.faceIndex=Math.floor(U/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){let w=a.getX(p),M=a.getX(p+1),U=a.getX(p+2);s=Zr(this,o,e,n,l,h,f,w,M,U),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){let p=d[_],u=o[p.materialIndex],w=Math.max(p.start,m.start),M=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let U=w,O=M;U<O;U+=3){let D=U,P=U+1,j=U+2;s=Zr(this,u,e,n,l,h,f,D,P,j),s&&(s.faceIndex=Math.floor(U/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){let w=p,M=p+1,U=p+2;s=Zr(this,o,e,n,l,h,f,w,M,U),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function If(i,e,t,n,s,r,o,a){let c;if(e.side===Qt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Si,a),c===null)return null;Yr.copy(a),Yr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Yr);return l<t.near||l>t.far?null:{distance:l,point:Yr.clone(),object:i}}function Zr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ms),i.getVertexPosition(c,gs),i.getVertexPosition(l,_s);let h=If(i,e,t,n,ms,gs,_s,qr);if(h){s&&(Gr.fromBufferAttribute(s,a),Wr.fromBufferAttribute(s,c),Xr.fromBufferAttribute(s,l),h.uv=Hi.getInterpolation(qr,ms,gs,_s,Gr,Wr,Xr,new Te)),r&&(Gr.fromBufferAttribute(r,a),Wr.fromBufferAttribute(r,c),Xr.fromBufferAttribute(r,l),h.uv1=Hi.getInterpolation(qr,ms,gs,_s,Gr,Wr,Xr,new Te),h.uv2=h.uv1),o&&(Wc.fromBufferAttribute(o,a),Xc.fromBufferAttribute(o,c),qc.fromBufferAttribute(o,l),h.normal=Hi.getInterpolation(qr,ms,gs,_s,Wc,Xc,qc,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new L,materialIndex:0};Hi.getNormal(ms,gs,_s,f.normal),h.face=f}return h}var qi=class i extends pn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],d=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(f,2));function _(x,p,u,w,M,U,O,D,P,j,S){let R=U/P,Y=O/j,Q=U/2,de=O/2,N=D/2,k=P+1,Z=j+1,se=0,te=0,ee=new L;for(let oe=0;oe<Z;oe++){let ce=oe*Y-de;for(let ve=0;ve<k;ve++){let J=ve*R-Q;ee[x]=J*w,ee[p]=ce*M,ee[u]=N,l.push(ee.x,ee.y,ee.z),ee[x]=0,ee[p]=0,ee[u]=D>0?1:-1,h.push(ee.x,ee.y,ee.z),f.push(ve/P),f.push(1-oe/j),se+=1}}for(let oe=0;oe<j;oe++)for(let ce=0;ce<P;ce++){let ve=d+ce+k*oe,J=d+ce+k*(oe+1),ae=d+(ce+1)+k*(oe+1),Se=d+(ce+1)+k*oe;c.push(ve,J,Se),c.push(J,ae,Se),te+=6}a.addGroup(m,te,S),m+=te,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ns(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function on(i){let e={};for(let t=0;t<i.length;t++){let n=Ns(i[t]);for(let s in n)e[s]=n[s]}return e}function Uf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bh(i){return i.getRenderTarget()===null?i.outputColorSpace:ut.workingColorSpace}var Ei={clone:Ns,merge:on},Df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rt=class extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Df,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=Uf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},_a=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},jt=class extends _a{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xs=-90,vs=1,Jo=class extends tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(xs,vs,e,t);s.layers=this.layers,this.add(s);let r=new jt(xs,vs,e,t);r.layers=this.layers,this.add(r);let o=new jt(xs,vs,e,t);o.layers=this.layers,this.add(o);let a=new jt(xs,vs,e,t);a.layers=this.layers,this.add(a);let c=new jt(xs,vs,e,t);c.layers=this.layers,this.add(c);let l=new jt(xs,vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,d,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},xa=class extends Sn{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ls,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ko=class extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(or("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Gi?St:Mn),this.texture=new xa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qi(5,5,5),r=new Rt({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:Hn});r.uniforms.tEquirect.value=t;let o=new ot(s,r),a=t.minFilter;return t.minFilter===cr&&(t.minFilter=yn),new Jo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Co=new L,Of=new L,Ff=new rt,Cn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Co.subVectors(n,t).cross(Of.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Co),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ff.getNormalMatrix(e),s=this.coplanarPoint(Co).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Oi=new Wi,Jr=new L,fr=class{constructor(e=new Cn,t=new Cn,n=new Cn,s=new Cn,r=new Cn,o=new Cn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],f=s[6],d=s[7],m=s[8],_=s[9],x=s[10],p=s[11],u=s[12],w=s[13],M=s[14],U=s[15];if(n[0].setComponents(c-r,d-l,p-m,U-u).normalize(),n[1].setComponents(c+r,d+l,p+m,U+u).normalize(),n[2].setComponents(c+o,d+h,p+_,U+w).normalize(),n[3].setComponents(c-o,d-h,p-_,U-w).normalize(),n[4].setComponents(c-a,d-f,p-x,U-M).normalize(),t===Qn)n[5].setComponents(c+a,d+f,p+x,U+M).normalize();else if(t===ca)n[5].setComponents(a,f,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Jr.x=s.normal.x>0?e.max.x:e.min.x,Jr.y=s.normal.y>0?e.max.y:e.min.y,Jr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Bf(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let f=l.array,d=l.usage,m=f.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,f,d),l.onUploadCallback();let x;if(f instanceof Float32Array)x=i.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=i.SHORT;else if(f instanceof Uint32Array)x=i.UNSIGNED_INT;else if(f instanceof Int32Array)x=i.INT;else if(f instanceof Int8Array)x=i.BYTE;else if(f instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,f){let d=h.array,m=h._updateRange,_=h.updateRanges;if(i.bindBuffer(f,l),m.count===-1&&_.length===0&&i.bufferSubData(f,0,d),_.length!==0){for(let x=0,p=_.length;x<p;x++){let u=_[x];t?i.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d,u.start,u.count):i.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let f=n.get(l);if(f===void 0)n.set(l,s(l,h));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,l,h),f.version=l.version}}return{get:o,remove:a,update:c}}var Yi=class i extends pn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=e/a,d=t/c,m=[],_=[],x=[],p=[];for(let u=0;u<h;u++){let w=u*d-o;for(let M=0;M<l;M++){let U=M*f-r;_.push(U,-w,0),x.push(0,0,1),p.push(M/a),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let w=0;w<a;w++){let M=w+l*u,U=w+l*(u+1),O=w+1+l*(u+1),D=w+1+l*u;m.push(M,U,D),m.push(U,O,D)}this.setIndex(m),this.setAttribute("position",new It(_,3)),this.setAttribute("normal",new It(x,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hf=`#ifdef USE_ALPHAHASH
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
#endif`,kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xf=`#ifdef USE_AOMAP
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
#endif`,qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yf=`#ifdef USE_BATCHING
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
#endif`,Zf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jf=`#ifdef USE_IRIDESCENCE
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
#endif`,Qf=`#ifdef USE_BUMPMAP
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
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ld=`#define PI 3.141592653589793
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
} // validated`,cd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hd=`vec3 transformedNormal = objectNormal;
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
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,md="gl_FragColor = linearToOutputTexel( gl_FragColor );",gd=`
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
}`,_d=`#ifdef USE_ENVMAP
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
#endif`,xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vd=`#ifdef USE_ENVMAP
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
#endif`,yd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
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
#endif`,Sd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wd=`#ifdef USE_GRADIENTMAP
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
}`,Ad=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ld=`uniform bool receiveShadow;
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
#endif`,Id=`#ifdef USE_ENVMAP
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
#endif`,Ud=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fd=`PhysicalMaterial material;
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
#endif`,Bd=`struct PhysicalMaterial {
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
}`,zd=`
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
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
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
#endif`,kd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jd=`#if defined( USE_POINTS_UV )
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
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$d=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qd=`#ifdef USE_MORPHNORMALS
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
#endif`,ep=`#ifdef USE_MORPHTARGETS
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
#endif`,tp=`#ifdef USE_MORPHTARGETS
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
#endif`,np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,op=`#ifdef USE_NORMALMAP
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
#endif`,lp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bp=`float getShadowMask() {
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
}`,Ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ap=`#ifdef USE_SKINNING
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
#endif`,Rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ip=`#ifdef USE_TRANSMISSION
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
#endif`,Up=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zp=`uniform sampler2D t2D;
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`#include <common>
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
}`,Xp=`#if DEPTH_PACKING == 3200
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
}`,qp=`#define DISTANCE
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
}`,Yp=`#define DISTANCE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`uniform float scale;
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
}`,$p=`uniform vec3 diffuse;
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
}`,jp=`#include <common>
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
}`,Qp=`uniform vec3 diffuse;
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
}`,em=`#define LAMBERT
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
}`,tm=`#define LAMBERT
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
}`,nm=`#define MATCAP
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
}`,im=`#define MATCAP
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
}`,sm=`#define NORMAL
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
}`,rm=`#define NORMAL
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
}`,am=`#define PHONG
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
}`,om=`#define PHONG
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
}`,lm=`#define STANDARD
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
}`,cm=`#define STANDARD
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
}`,hm=`#define TOON
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
}`,um=`#define TOON
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
}`,fm=`uniform float size;
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
}`,dm=`uniform vec3 diffuse;
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
}`,pm=`#include <common>
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
}`,mm=`uniform vec3 color;
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
}`,gm=`uniform float rotation;
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
}`,_m=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:zf,alphahash_pars_fragment:Hf,alphamap_fragment:kf,alphamap_pars_fragment:Vf,alphatest_fragment:Gf,alphatest_pars_fragment:Wf,aomap_fragment:Xf,aomap_pars_fragment:qf,batching_pars_vertex:Yf,batching_vertex:Zf,begin_vertex:Jf,beginnormal_vertex:Kf,bsdfs:$f,iridescence_fragment:jf,bumpmap_pars_fragment:Qf,clipping_planes_fragment:ed,clipping_planes_pars_fragment:td,clipping_planes_pars_vertex:nd,clipping_planes_vertex:id,color_fragment:sd,color_pars_fragment:rd,color_pars_vertex:ad,color_vertex:od,common:ld,cube_uv_reflection_fragment:cd,defaultnormal_vertex:hd,displacementmap_pars_vertex:ud,displacementmap_vertex:fd,emissivemap_fragment:dd,emissivemap_pars_fragment:pd,colorspace_fragment:md,colorspace_pars_fragment:gd,envmap_fragment:_d,envmap_common_pars_fragment:xd,envmap_pars_fragment:vd,envmap_pars_vertex:yd,envmap_physical_pars_fragment:Id,envmap_vertex:Md,fog_vertex:Sd,fog_pars_vertex:bd,fog_fragment:Ed,fog_pars_fragment:Td,gradientmap_pars_fragment:wd,lightmap_fragment:Ad,lightmap_pars_fragment:Rd,lights_lambert_fragment:Cd,lights_lambert_pars_fragment:Pd,lights_pars_begin:Ld,lights_toon_fragment:Ud,lights_toon_pars_fragment:Dd,lights_phong_fragment:Nd,lights_phong_pars_fragment:Od,lights_physical_fragment:Fd,lights_physical_pars_fragment:Bd,lights_fragment_begin:zd,lights_fragment_maps:Hd,lights_fragment_end:kd,logdepthbuf_fragment:Vd,logdepthbuf_pars_fragment:Gd,logdepthbuf_pars_vertex:Wd,logdepthbuf_vertex:Xd,map_fragment:qd,map_pars_fragment:Yd,map_particle_fragment:Zd,map_particle_pars_fragment:Jd,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:$d,morphcolor_vertex:jd,morphnormal_vertex:Qd,morphtarget_pars_vertex:ep,morphtarget_vertex:tp,normal_fragment_begin:np,normal_fragment_maps:ip,normal_pars_fragment:sp,normal_pars_vertex:rp,normal_vertex:ap,normalmap_pars_fragment:op,clearcoat_normal_fragment_begin:lp,clearcoat_normal_fragment_maps:cp,clearcoat_pars_fragment:hp,iridescence_pars_fragment:up,opaque_fragment:fp,packing:dp,premultiplied_alpha_fragment:pp,project_vertex:mp,dithering_fragment:gp,dithering_pars_fragment:_p,roughnessmap_fragment:xp,roughnessmap_pars_fragment:vp,shadowmap_pars_fragment:yp,shadowmap_pars_vertex:Mp,shadowmap_vertex:Sp,shadowmask_pars_fragment:bp,skinbase_vertex:Ep,skinning_pars_vertex:Tp,skinning_vertex:wp,skinnormal_vertex:Ap,specularmap_fragment:Rp,specularmap_pars_fragment:Cp,tonemapping_fragment:Pp,tonemapping_pars_fragment:Lp,transmission_fragment:Ip,transmission_pars_fragment:Up,uv_pars_fragment:Dp,uv_pars_vertex:Np,uv_vertex:Op,worldpos_vertex:Fp,background_vert:Bp,background_frag:zp,backgroundCube_vert:Hp,backgroundCube_frag:kp,cube_vert:Vp,cube_frag:Gp,depth_vert:Wp,depth_frag:Xp,distanceRGBA_vert:qp,distanceRGBA_frag:Yp,equirect_vert:Zp,equirect_frag:Jp,linedashed_vert:Kp,linedashed_frag:$p,meshbasic_vert:jp,meshbasic_frag:Qp,meshlambert_vert:em,meshlambert_frag:tm,meshmatcap_vert:nm,meshmatcap_frag:im,meshnormal_vert:sm,meshnormal_frag:rm,meshphong_vert:am,meshphong_frag:om,meshphysical_vert:lm,meshphysical_frag:cm,meshtoon_vert:hm,meshtoon_frag:um,points_vert:fm,points_frag:dm,shadow_vert:pm,shadow_frag:mm,sprite_vert:gm,sprite_frag:_m},xe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Bn={basic:{uniforms:on([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:on([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Re(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:on([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:on([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:on([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Re(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:on([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:on([xe.points,xe.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:on([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:on([xe.common,xe.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:on([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:on([xe.sprite,xe.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:on([xe.common,xe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:on([xe.lights,xe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Bn.physical={uniforms:on([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var Kr={r:0,b:0,g:0};function xm(i,e,t,n,s,r,o){let a=new Re(0),c=r===!0?0:1,l,h,f=null,d=0,m=null;function _(p,u){let w=!1,M=u.isScene===!0?u.background:null;M&&M.isTexture&&(M=(u.backgroundBlurriness>0?t:e).get(M)),M===null?x(a,c):M&&M.isColor&&(x(M,1),w=!0);let U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Pa)?(h===void 0&&(h=new ot(new qi(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:Ns(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,D,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=ut.getTransfer(M.colorSpace)!==xt,(f!==M||d!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=M,d=M.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ot(new Yi(2,2),new Rt({name:"BackgroundMaterial",uniforms:Ns(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=ut.getTransfer(M.colorSpace)!==xt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=M,d=M.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,u){p.getRGB(Kr,Bh(i)),n.buffers.color.setClear(Kr.r,Kr.g,Kr.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),c=u,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(a,c)},render:_}}function vm(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null),l=c,h=!1;function f(N,k,Z,se,te){let ee=!1;if(o){let oe=x(se,Z,k);l!==oe&&(l=oe,m(l.object)),ee=u(N,se,Z,te),ee&&w(N,se,Z,te)}else{let oe=k.wireframe===!0;(l.geometry!==se.id||l.program!==Z.id||l.wireframe!==oe)&&(l.geometry=se.id,l.program=Z.id,l.wireframe=oe,ee=!0)}te!==null&&t.update(te,i.ELEMENT_ARRAY_BUFFER),(ee||h)&&(h=!1,j(N,k,Z,se),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(N){return n.isWebGL2?i.bindVertexArray(N):r.bindVertexArrayOES(N)}function _(N){return n.isWebGL2?i.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function x(N,k,Z){let se=Z.wireframe===!0,te=a[N.id];te===void 0&&(te={},a[N.id]=te);let ee=te[k.id];ee===void 0&&(ee={},te[k.id]=ee);let oe=ee[se];return oe===void 0&&(oe=p(d()),ee[se]=oe),oe}function p(N){let k=[],Z=[],se=[];for(let te=0;te<s;te++)k[te]=0,Z[te]=0,se[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Z,attributeDivisors:se,object:N,attributes:{},index:null}}function u(N,k,Z,se){let te=l.attributes,ee=k.attributes,oe=0,ce=Z.getAttributes();for(let ve in ce)if(ce[ve].location>=0){let ae=te[ve],Se=ee[ve];if(Se===void 0&&(ve==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),ve==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor)),ae===void 0||ae.attribute!==Se||Se&&ae.data!==Se.data)return!0;oe++}return l.attributesNum!==oe||l.index!==se}function w(N,k,Z,se){let te={},ee=k.attributes,oe=0,ce=Z.getAttributes();for(let ve in ce)if(ce[ve].location>=0){let ae=ee[ve];ae===void 0&&(ve==="instanceMatrix"&&N.instanceMatrix&&(ae=N.instanceMatrix),ve==="instanceColor"&&N.instanceColor&&(ae=N.instanceColor));let Se={};Se.attribute=ae,ae&&ae.data&&(Se.data=ae.data),te[ve]=Se,oe++}l.attributes=te,l.attributesNum=oe,l.index=se}function M(){let N=l.newAttributes;for(let k=0,Z=N.length;k<Z;k++)N[k]=0}function U(N){O(N,0)}function O(N,k){let Z=l.newAttributes,se=l.enabledAttributes,te=l.attributeDivisors;Z[N]=1,se[N]===0&&(i.enableVertexAttribArray(N),se[N]=1),te[N]!==k&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,k),te[N]=k)}function D(){let N=l.newAttributes,k=l.enabledAttributes;for(let Z=0,se=k.length;Z<se;Z++)k[Z]!==N[Z]&&(i.disableVertexAttribArray(Z),k[Z]=0)}function P(N,k,Z,se,te,ee,oe){oe===!0?i.vertexAttribIPointer(N,k,Z,te,ee):i.vertexAttribPointer(N,k,Z,se,te,ee)}function j(N,k,Z,se){if(n.isWebGL2===!1&&(N.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();let te=se.attributes,ee=Z.getAttributes(),oe=k.defaultAttributeValues;for(let ce in ee){let ve=ee[ce];if(ve.location>=0){let J=te[ce];if(J===void 0&&(ce==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),ce==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),J!==void 0){let ae=J.normalized,Se=J.itemSize,Ae=t.get(J);if(Ae===void 0)continue;let Pe=Ae.buffer,Ve=Ae.type,Ge=Ae.bytesPerElement,Be=n.isWebGL2===!0&&(Ve===i.INT||Ve===i.UNSIGNED_INT||J.gpuType===Th);if(J.isInterleavedBufferAttribute){let Xe=J.data,W=Xe.stride,Ct=J.offset;if(Xe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<ve.locationSize;Ue++)O(ve.location+Ue,Xe.meshPerAttribute);N.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let Ue=0;Ue<ve.locationSize;Ue++)U(ve.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let Ue=0;Ue<ve.locationSize;Ue++)P(ve.location+Ue,Se/ve.locationSize,Ve,ae,W*Ge,(Ct+Se/ve.locationSize*Ue)*Ge,Be)}else{if(J.isInstancedBufferAttribute){for(let Xe=0;Xe<ve.locationSize;Xe++)O(ve.location+Xe,J.meshPerAttribute);N.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Xe=0;Xe<ve.locationSize;Xe++)U(ve.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let Xe=0;Xe<ve.locationSize;Xe++)P(ve.location+Xe,Se/ve.locationSize,Ve,ae,Se*Ge,Se/ve.locationSize*Xe*Ge,Be)}}else if(oe!==void 0){let ae=oe[ce];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(ve.location,ae);break;case 3:i.vertexAttrib3fv(ve.location,ae);break;case 4:i.vertexAttrib4fv(ve.location,ae);break;default:i.vertexAttrib1fv(ve.location,ae)}}}}D()}function S(){Q();for(let N in a){let k=a[N];for(let Z in k){let se=k[Z];for(let te in se)_(se[te].object),delete se[te];delete k[Z]}delete a[N]}}function R(N){if(a[N.id]===void 0)return;let k=a[N.id];for(let Z in k){let se=k[Z];for(let te in se)_(se[te].object),delete se[te];delete k[Z]}delete a[N.id]}function Y(N){for(let k in a){let Z=a[k];if(Z[N.id]===void 0)continue;let se=Z[N.id];for(let te in se)_(se[te].object),delete se[te];delete Z[N.id]}}function Q(){de(),h=!0,l!==c&&(l=c,m(l.object))}function de(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:Q,resetDefaultState:de,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:Y,initAttributes:M,enableAttribute:U,disableUnusedAttributes:D}}function ym(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,f){i.drawArrays(r,h,f),t.update(f,r,1)}function c(h,f,d){if(d===0)return;let m,_;if(s)m=i,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,h,f,d),t.update(f,r,d)}function l(h,f,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d;_++)this.render(h[_],f[_]);else{m.multiDrawArraysWEBGL(r,h,0,f,0,d);let _=0;for(let x=0;x<d;x++)_+=f[x];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Mm(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,U=o||e.has("OES_texture_float"),O=M&&U,D=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:w,vertexTextures:M,floatFragmentTextures:U,floatVertexTextures:O,maxSamples:D}}function Sm(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Cn,a=new rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||n!==0||s;return s=d,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,m){let _=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!s||_===null||_.length===0||r&&!p)r?h(null):l();else{let w=r?0:n,M=w*4,U=u.clippingState||null;c.value=U,U=h(_,d,M,m);for(let O=0;O!==M;++O)U[O]=t[O];u.clippingState=U,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,m,_){let x=f!==null?f.length:0,p=null;if(x!==0){if(p=c.value,_!==!0||p===null){let u=m+x*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<u)&&(p=new Float32Array(u));for(let M=0,U=m;M!==x;++M,U+=4)o.copy(f[M]).applyMatrix4(w,a),o.normal.toArray(p,U),p[U+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function bm(i){let e=new WeakMap;function t(o,a){return a===Ho?o.mapping=Ls:a===ko&&(o.mapping=Is),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ho||a===ko)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ko(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Os=class extends _a{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ws=4,Yc=[.125,.215,.35,.446,.526,.582],zi=20,Po=new Os,Zc=new Re,Lo=null,Io=0,Uo=0,Fi=(1+Math.sqrt(5))/2,ys=1/Fi,Jc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Fi,ys),new L(0,Fi,-ys),new L(ys,0,Fi),new L(-ys,0,Fi),new L(Fi,ys,0),new L(-Fi,ys,0)],va=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Lo=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lo,Io,Uo),e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ls||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lo=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Un,format:Ln,colorSpace:ni,depthBuffer:!1},s=Kc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kc(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Em(r)),this._blurMaterial=Tm(r,e,t)}return s}_compileMaterial(e){let t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,Po)}_sceneToCubeUV(e,t,n,s){let a=new jt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Zc),h.toneMapping=yi,h.autoClear=!1;let m=new vt({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),_=new ot(new qi,m),x=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Zc),x=!0);for(let u=0;u<6;u++){let w=u%3;w===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):w===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));let M=this._cubeSize;$r(s,w*M,u>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ls||e.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;$r(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Po)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Jc[(s-1)%Jc.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new ot(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*zi-1),x=r/_,p=isFinite(r)?1+Math.floor(h*x):zi;p>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zi}`);let u=[],w=0;for(let P=0;P<zi;++P){let j=P/x,S=Math.exp(-j*j/2);u.push(S),P===0?w+=S:P<p&&(w+=2*S)}for(let P=0;P<u.length;P++)u[P]=u[P]/w;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;let U=this._sizeLods[s],O=3*U*(s>M-ws?s-M+ws:0),D=4*(this._cubeSize-U);$r(t,O,D,3*U,2*U),c.setRenderTarget(t),c.render(f,Po)}};function Em(i){let e=[],t=[],n=[],s=i,r=i-ws+1+Yc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ws?c=Yc[o-i+ws-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,_=6,x=3,p=2,u=1,w=new Float32Array(x*_*m),M=new Float32Array(p*_*m),U=new Float32Array(u*_*m);for(let D=0;D<m;D++){let P=D%3*2/3-1,j=D>2?0:-1,S=[P,j,0,P+2/3,j,0,P+2/3,j+1,0,P,j,0,P+2/3,j+1,0,P,j+1,0];w.set(S,x*_*D),M.set(d,p*_*D);let R=[D,D,D,D,D,D];U.set(R,u*_*D)}let O=new pn;O.setAttribute("position",new un(w,x)),O.setAttribute("uv",new un(M,p)),O.setAttribute("faceIndex",new un(U,u)),e.push(O),s>ws&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Kc(i,e,t){let n=new cn(i,e,t);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Tm(i,e,t){let n=new Float32Array(zi),s=new L(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function $c(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function jc(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Pl(){return`

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
	`}function wm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ho||c===ko,h=c===Ls||c===Is;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new va(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(l&&f&&f.height>0||h&&f&&s(f)){t===null&&(t=new va(i));let d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Am(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Rm(i,e,t,n){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);for(let _ in d.morphAttributes){let x=d.morphAttributes[_];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}d.removeEventListener("dispose",o),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(f){let d=f.attributes;for(let _ in d)e.update(d[_],i.ARRAY_BUFFER);let m=f.morphAttributes;for(let _ in m){let x=m[_];for(let p=0,u=x.length;p<u;p++)e.update(x[p],i.ARRAY_BUFFER)}}function l(f){let d=[],m=f.index,_=f.attributes.position,x=0;if(m!==null){let w=m.array;x=m.version;for(let M=0,U=w.length;M<U;M+=3){let O=w[M+0],D=w[M+1],P=w[M+2];d.push(O,D,D,P,P,O)}}else if(_!==void 0){let w=_.array;x=_.version;for(let M=0,U=w.length/3-1;M<U;M+=3){let O=M+0,D=M+1,P=M+2;d.push(O,D,D,P,P,O)}}else return;let p=new(Oh(d)?ga:ma)(d,1);p.version=x;let u=r.get(f);u&&e.remove(u),r.set(f,p)}function h(f){let d=r.get(f);if(d){let m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function Cm(i,e,t,n){let s=n.isWebGL2,r;function o(m){r=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,_){i.drawElements(r,_,a,m*c),t.update(_,r,1)}function f(m,_,x){if(x===0)return;let p,u;if(s)p=i,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,_,a,m*c,x),t.update(_,r,x)}function d(m,_,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<x;u++)this.render(m[u]/c,_[u]);else{p.multiDrawElementsWEBGL(r,_,0,a,m,0,x);let u=0;for(let w=0;w<x;w++)u+=_[w];t.update(u,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function Pm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Lm(i,e){return i[0]-e[0]}function Im(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Um(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new wt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,f){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0,x=r.get(h);if(x===void 0||x.count!==_){let N=function(){Q.dispose(),r.delete(h),h.removeEventListener("dispose",N)};x!==void 0&&x.texture.dispose();let w=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,U=h.morphAttributes.color!==void 0,O=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],P=h.morphAttributes.color||[],j=0;w===!0&&(j=1),M===!0&&(j=2),U===!0&&(j=3);let S=h.attributes.position.count*j,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let Y=new Float32Array(S*R*4*_),Q=new pa(Y,S,R,_);Q.type=vi,Q.needsUpdate=!0;let de=j*4;for(let k=0;k<_;k++){let Z=O[k],se=D[k],te=P[k],ee=S*R*4*k;for(let oe=0;oe<Z.count;oe++){let ce=oe*de;w===!0&&(o.fromBufferAttribute(Z,oe),Y[ee+ce+0]=o.x,Y[ee+ce+1]=o.y,Y[ee+ce+2]=o.z,Y[ee+ce+3]=0),M===!0&&(o.fromBufferAttribute(se,oe),Y[ee+ce+4]=o.x,Y[ee+ce+5]=o.y,Y[ee+ce+6]=o.z,Y[ee+ce+7]=0),U===!0&&(o.fromBufferAttribute(te,oe),Y[ee+ce+8]=o.x,Y[ee+ce+9]=o.y,Y[ee+ce+10]=o.z,Y[ee+ce+11]=te.itemSize===4?o.w:1)}}x={count:_,texture:Q,size:new Te(S,R)},r.set(h,x),h.addEventListener("dispose",N)}let p=0;for(let w=0;w<d.length;w++)p+=d[w];let u=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",u),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let m=d===void 0?0:d.length,_=n[h.id];if(_===void 0||_.length!==m){_=[];for(let M=0;M<m;M++)_[M]=[M,0];n[h.id]=_}for(let M=0;M<m;M++){let U=_[M];U[0]=M,U[1]=d[M]}_.sort(Im);for(let M=0;M<8;M++)M<m&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Lm);let x=h.morphAttributes.position,p=h.morphAttributes.normal,u=0;for(let M=0;M<8;M++){let U=a[M],O=U[0],D=U[1];O!==Number.MAX_SAFE_INTEGER&&D?(x&&h.getAttribute("morphTarget"+M)!==x[O]&&h.setAttribute("morphTarget"+M,x[O]),p&&h.getAttribute("morphNormal"+M)!==p[O]&&h.setAttribute("morphNormal"+M,p[O]),s[M]=D,u+=D):(x&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),p&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),s[M]=0)}let w=h.morphTargetsRelative?1:1-u;f.getUniforms().setValue(i,"morphTargetBaseInfluence",w),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Dm(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return f}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var ya=class extends Sn{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Vi,h!==Vi&&h!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vi&&(n=xi),n===void 0&&h===Us&&(n=ki),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ln,this.minFilter=c!==void 0?c:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Hh=new Sn,kh=new ya(1,1);kh.compareFunction=Dh;var Vh=new pa,Gh=new Zo,Wh=new xa,Qc=[],eh=[],th=new Float32Array(16),nh=new Float32Array(9),ih=new Float32Array(4);function Hs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Qc[s];if(r===void 0&&(r=new Float32Array(s),Qc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ia(i,e){let t=eh[e];t===void 0&&(t=new Int32Array(e),eh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Om(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function Fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function Bm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function zm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ht(t,n))return;ih.set(n),i.uniformMatrix2fv(this.addr,!1,ih),kt(t,n)}}function Hm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ht(t,n))return;nh.set(n),i.uniformMatrix3fv(this.addr,!1,nh),kt(t,n)}}function km(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ht(t,n))return;th.set(n),i.uniformMatrix4fv(this.addr,!1,th),kt(t,n)}}function Vm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function qm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function Zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function Km(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?kh:Hh;t.setTexture2D(e||r,s)}function $m(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Gh,s)}function jm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Wh,s)}function Qm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Vh,s)}function eg(i){switch(i){case 5126:return Nm;case 35664:return Om;case 35665:return Fm;case 35666:return Bm;case 35674:return zm;case 35675:return Hm;case 35676:return km;case 5124:case 35670:return Vm;case 35667:case 35671:return Gm;case 35668:case 35672:return Wm;case 35669:case 35673:return Xm;case 5125:return qm;case 36294:return Ym;case 36295:return Zm;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return jm;case 36289:case 36303:case 36311:case 36292:return Qm}}function tg(i,e){i.uniform1fv(this.addr,e)}function ng(i,e){let t=Hs(e,this.size,2);i.uniform2fv(this.addr,t)}function ig(i,e){let t=Hs(e,this.size,3);i.uniform3fv(this.addr,t)}function sg(i,e){let t=Hs(e,this.size,4);i.uniform4fv(this.addr,t)}function rg(i,e){let t=Hs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ag(i,e){let t=Hs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function og(i,e){let t=Hs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lg(i,e){i.uniform1iv(this.addr,e)}function cg(i,e){i.uniform2iv(this.addr,e)}function hg(i,e){i.uniform3iv(this.addr,e)}function ug(i,e){i.uniform4iv(this.addr,e)}function fg(i,e){i.uniform1uiv(this.addr,e)}function dg(i,e){i.uniform2uiv(this.addr,e)}function pg(i,e){i.uniform3uiv(this.addr,e)}function mg(i,e){i.uniform4uiv(this.addr,e)}function gg(i,e,t){let n=this.cache,s=e.length,r=Ia(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Hh,r[o])}function _g(i,e,t){let n=this.cache,s=e.length,r=Ia(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Gh,r[o])}function xg(i,e,t){let n=this.cache,s=e.length,r=Ia(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Wh,r[o])}function vg(i,e,t){let n=this.cache,s=e.length,r=Ia(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Vh,r[o])}function yg(i){switch(i){case 5126:return tg;case 35664:return ng;case 35665:return ig;case 35666:return sg;case 35674:return rg;case 35675:return ag;case 35676:return og;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return hg;case 35669:case 35673:return ug;case 5125:return fg;case 36294:return dg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return vg}}var $o=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=eg(t.type)}},jo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yg(t.type)}},Qo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Do=/(\w+)(\])?(\[|\.)?/g;function sh(i,e){i.seq.push(e),i.map[e.id]=e}function Mg(i,e,t){let n=i.name,s=n.length;for(Do.lastIndex=0;;){let r=Do.exec(n),o=Do.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){sh(t,l===void 0?new $o(a,i,e):new jo(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Qo(a),sh(t,f)),t=f}}}var Ps=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Mg(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function rh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Sg=37297,bg=0;function Eg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Tg(i){let e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(i),n;switch(e===t?n="":e===la&&t===oa?n="LinearDisplayP3ToLinearSRGB":e===oa&&t===la&&(n="LinearSRGBToLinearDisplayP3"),i){case ni:case La:return[n,"LinearTransferOETF"];case St:case Rl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ah(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Eg(i.getShaderSource(e),o)}else return s}function wg(i,e){let t=Tg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ag(i,e){let t;switch(e){case bl:t="Linear";break;case El:t="Reinhard";break;case Tl:t="OptimizedCineon";break;case yr:t="ACESFilmic";break;case wl:t="AgX";break;case Fu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Rg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(As).join(`
`)}function Cg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(As).join(`
`)}function Pg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function As(i){return i!==""}function oh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(i){return i.replace(Ig,Dg)}var Ug=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Dg(i,e){let t=nt[e];if(t===void 0){let n=Ug.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return el(t)}var Ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ch(i){return i.replace(Ng,Og)}function Og(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===uu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Bg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ls:case Is:e="ENVMAP_TYPE_CUBE";break;case Pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function Hg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sl:e="ENVMAP_BLENDING_MULTIPLY";break;case Nu:e="ENVMAP_BLENDING_MIX";break;case Ou:e="ENVMAP_BLENDING_ADD";break}return e}function kg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Vg(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Fg(t),l=Bg(t),h=zg(t),f=Hg(t),d=kg(t),m=t.isWebGL2?"":Rg(t),_=Cg(t),x=Pg(r),p=s.createProgram(),u,w,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(As).join(`
`),u.length>0&&(u+=`
`),w=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(As).join(`
`),w.length>0&&(w+=`
`)):(u=[hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),w=[m,hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?nt.tonemapping_pars_fragment:"",t.toneMapping!==yi?Ag("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,wg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),o=el(o),o=oh(o,t),o=lh(o,t),a=el(a),a=oh(a,t),a=lh(a,t),o=ch(o),a=ch(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,w=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);let U=M+u+o,O=M+w+a,D=rh(s,s.VERTEX_SHADER,U),P=rh(s,s.FRAGMENT_SHADER,O);s.attachShader(p,D),s.attachShader(p,P),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function j(Q){if(i.debug.checkShaderErrors){let de=s.getProgramInfoLog(p).trim(),N=s.getShaderInfoLog(D).trim(),k=s.getShaderInfoLog(P).trim(),Z=!0,se=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,D,P);else{let te=ah(s,D,"vertex"),ee=ah(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+de+`
`+te+`
`+ee)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(N===""||k==="")&&(se=!1);se&&(Q.diagnostics={runnable:Z,programLog:de,vertexShader:{log:N,prefix:u},fragmentShader:{log:k,prefix:w}})}s.deleteShader(D),s.deleteShader(P),S=new Ps(s,p),R=Lg(s,p)}let S;this.getUniforms=function(){return S===void 0&&j(this),S};let R;this.getAttributes=function(){return R===void 0&&j(this),R};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=s.getProgramParameter(p,Sg)),Y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bg++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=D,this.fragmentShader=P,this}var Gg=0,tl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new nl(e),t.set(e,n)),n}},nl=class{constructor(e){this.id=Gg++,this.code=e,this.usedTimes=0}};function Wg(i,e,t,n,s,r,o){let a=new ur,c=new tl,l=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function p(S,R,Y,Q,de){let N=Q.fog,k=de.geometry,Z=S.isMeshStandardMaterial?Q.environment:null,se=(S.isMeshStandardMaterial?t:e).get(S.envMap||Z),te=se&&se.mapping===Pa?se.image.height:null,ee=_[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let oe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ce=oe!==void 0?oe.length:0,ve=0;k.morphAttributes.position!==void 0&&(ve=1),k.morphAttributes.normal!==void 0&&(ve=2),k.morphAttributes.color!==void 0&&(ve=3);let J,ae,Se,Ae;if(ee){let Xt=Bn[ee];J=Xt.vertexShader,ae=Xt.fragmentShader}else J=S.vertexShader,ae=S.fragmentShader,c.update(S),Se=c.getVertexShaderID(S),Ae=c.getFragmentShaderID(S);let Pe=i.getRenderTarget(),Ve=de.isInstancedMesh===!0,Ge=de.isBatchedMesh===!0,Be=!!S.map,Xe=!!S.matcap,W=!!se,Ct=!!S.aoMap,Ue=!!S.lightMap,Oe=!!S.bumpMap,Ce=!!S.normalMap,pt=!!S.displacementMap,ke=!!S.emissiveMap,T=!!S.metalnessMap,v=!!S.roughnessMap,V=S.anisotropy>0,le=S.clearcoat>0,ie=S.iridescence>0,ue=S.sheen>0,Ee=S.transmission>0,ye=V&&!!S.anisotropyMap,_e=le&&!!S.clearcoatMap,De=le&&!!S.clearcoatNormalMap,Ye=le&&!!S.clearcoatRoughnessMap,he=ie&&!!S.iridescenceMap,at=ie&&!!S.iridescenceThicknessMap,C=ue&&!!S.sheenColorMap,re=ue&&!!S.sheenRoughnessMap,me=!!S.specularMap,fe=!!S.specularColorMap,we=!!S.specularIntensityMap,We=Ee&&!!S.transmissionMap,st=Ee&&!!S.thicknessMap,Ze=!!S.gradientMap,ge=!!S.alphaMap,I=S.alphaTest>0,pe=!!S.alphaHash,ne=!!S.extensions,Ne=!!k.attributes.uv1,Le=!!k.attributes.uv2,Qe=!!k.attributes.uv3,lt=yi;return S.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(lt=i.toneMapping),{isWebGL2:h,shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:J,fragmentShader:ae,defines:S.defines,customVertexShaderID:Se,customFragmentShaderID:Ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ge,instancing:Ve,instancingColor:Ve&&de.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Pe===null?i.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:ni,map:Be,matcap:Xe,envMap:W,envMapMode:W&&se.mapping,envMapCubeUVHeight:te,aoMap:Ct,lightMap:Ue,bumpMap:Oe,normalMap:Ce,displacementMap:d&&pt,emissiveMap:ke,normalMapObjectSpace:Ce&&S.normalMapType===Ju,normalMapTangentSpace:Ce&&S.normalMapType===Uh,metalnessMap:T,roughnessMap:v,anisotropy:V,anisotropyMap:ye,clearcoat:le,clearcoatMap:_e,clearcoatNormalMap:De,clearcoatRoughnessMap:Ye,iridescence:ie,iridescenceMap:he,iridescenceThicknessMap:at,sheen:ue,sheenColorMap:C,sheenRoughnessMap:re,specularMap:me,specularColorMap:fe,specularIntensityMap:we,transmission:Ee,transmissionMap:We,thicknessMap:st,gradientMap:Ze,opaque:S.transparent===!1&&S.blending===Rs,alphaMap:ge,alphaTest:I,alphaHash:pe,combine:S.combine,mapUv:Be&&x(S.map.channel),aoMapUv:Ct&&x(S.aoMap.channel),lightMapUv:Ue&&x(S.lightMap.channel),bumpMapUv:Oe&&x(S.bumpMap.channel),normalMapUv:Ce&&x(S.normalMap.channel),displacementMapUv:pt&&x(S.displacementMap.channel),emissiveMapUv:ke&&x(S.emissiveMap.channel),metalnessMapUv:T&&x(S.metalnessMap.channel),roughnessMapUv:v&&x(S.roughnessMap.channel),anisotropyMapUv:ye&&x(S.anisotropyMap.channel),clearcoatMapUv:_e&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:De&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:at&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:C&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:re&&x(S.sheenRoughnessMap.channel),specularMapUv:me&&x(S.specularMap.channel),specularColorMapUv:fe&&x(S.specularColorMap.channel),specularIntensityMapUv:we&&x(S.specularIntensityMap.channel),transmissionMapUv:We&&x(S.transmissionMap.channel),thicknessMapUv:st&&x(S.thicknessMap.channel),alphaMapUv:ge&&x(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ce||V),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Ne,vertexUv2s:Le,vertexUv3s:Qe,pointsUvs:de.isPoints===!0&&!!k.attributes.uv&&(Be||ge),fog:!!N,useFog:S.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:de.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ve,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:lt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Be&&S.map.isVideoTexture===!0&&ut.getTransfer(S.map.colorSpace)===xt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===hn,flipSided:S.side===Qt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ne&&S.extensions.derivatives===!0,extensionFragDepth:ne&&S.extensions.fragDepth===!0,extensionDrawBuffers:ne&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ne&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ne&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){let R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(let Y in S.defines)R.push(Y),R.push(S.defines[Y]);return S.isRawShaderMaterial===!1&&(w(R,S),M(R,S),R.push(i.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function w(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function M(S,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),S.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function U(S){let R=_[S.type],Y;if(R){let Q=Bn[R];Y=Ei.clone(Q.uniforms)}else Y=S.uniforms;return Y}function O(S,R){let Y;for(let Q=0,de=l.length;Q<de;Q++){let N=l[Q];if(N.cacheKey===R){Y=N,++Y.usedTimes;break}}return Y===void 0&&(Y=new Vg(i,R,S,r),l.push(Y)),Y}function D(S){if(--S.usedTimes===0){let R=l.indexOf(S);l[R]=l[l.length-1],l.pop(),S.destroy()}}function P(S){c.remove(S)}function j(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:U,acquireProgram:O,releaseProgram:D,releaseShaderCache:P,programs:l,dispose:j}}function Xg(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function qg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function uh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,d,m,_,x,p){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:x,group:p},i[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=x,u.group=p),e++,u}function a(f,d,m,_,x,p){let u=o(f,d,m,_,x,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):t.push(u)}function c(f,d,m,_,x,p){let u=o(f,d,m,_,x,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function l(f,d){t.length>1&&t.sort(f||qg),n.length>1&&n.sort(d||uh),s.length>1&&s.sort(d||uh)}function h(){for(let f=e,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Yg(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new fh,i.set(n,[o])):s>=r.length?(o=new fh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Re};break;case"SpotLight":t={position:new L,direction:new L,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Jg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Kg=0;function $g(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function jg(i,e){let t=new Zg,n=Jg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,o=new dt,a=new dt;function c(h,f){let d=0,m=0,_=0;for(let Q=0;Q<9;Q++)s.probe[Q].set(0,0,0);let x=0,p=0,u=0,w=0,M=0,U=0,O=0,D=0,P=0,j=0,S=0;h.sort($g);let R=f===!0?Math.PI:1;for(let Q=0,de=h.length;Q<de;Q++){let N=h[Q],k=N.color,Z=N.intensity,se=N.distance,te=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=k.r*Z*R,m+=k.g*Z*R,_+=k.b*Z*R;else if(N.isLightProbe){for(let ee=0;ee<9;ee++)s.probe[ee].addScaledVector(N.sh.coefficients[ee],Z);S++}else if(N.isDirectionalLight){let ee=t.get(N);if(ee.color.copy(N.color).multiplyScalar(N.intensity*R),N.castShadow){let oe=N.shadow,ce=n.get(N);ce.shadowBias=oe.bias,ce.shadowNormalBias=oe.normalBias,ce.shadowRadius=oe.radius,ce.shadowMapSize=oe.mapSize,s.directionalShadow[x]=ce,s.directionalShadowMap[x]=te,s.directionalShadowMatrix[x]=N.shadow.matrix,U++}s.directional[x]=ee,x++}else if(N.isSpotLight){let ee=t.get(N);ee.position.setFromMatrixPosition(N.matrixWorld),ee.color.copy(k).multiplyScalar(Z*R),ee.distance=se,ee.coneCos=Math.cos(N.angle),ee.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),ee.decay=N.decay,s.spot[u]=ee;let oe=N.shadow;if(N.map&&(s.spotLightMap[P]=N.map,P++,oe.updateMatrices(N),N.castShadow&&j++),s.spotLightMatrix[u]=oe.matrix,N.castShadow){let ce=n.get(N);ce.shadowBias=oe.bias,ce.shadowNormalBias=oe.normalBias,ce.shadowRadius=oe.radius,ce.shadowMapSize=oe.mapSize,s.spotShadow[u]=ce,s.spotShadowMap[u]=te,D++}u++}else if(N.isRectAreaLight){let ee=t.get(N);ee.color.copy(k).multiplyScalar(Z),ee.halfWidth.set(N.width*.5,0,0),ee.halfHeight.set(0,N.height*.5,0),s.rectArea[w]=ee,w++}else if(N.isPointLight){let ee=t.get(N);if(ee.color.copy(N.color).multiplyScalar(N.intensity*R),ee.distance=N.distance,ee.decay=N.decay,N.castShadow){let oe=N.shadow,ce=n.get(N);ce.shadowBias=oe.bias,ce.shadowNormalBias=oe.normalBias,ce.shadowRadius=oe.radius,ce.shadowMapSize=oe.mapSize,ce.shadowCameraNear=oe.camera.near,ce.shadowCameraFar=oe.camera.far,s.pointShadow[p]=ce,s.pointShadowMap[p]=te,s.pointShadowMatrix[p]=N.shadow.matrix,O++}s.point[p]=ee,p++}else if(N.isHemisphereLight){let ee=t.get(N);ee.skyColor.copy(N.color).multiplyScalar(Z*R),ee.groundColor.copy(N.groundColor).multiplyScalar(Z*R),s.hemi[M]=ee,M++}}w>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_FLOAT_1,s.rectAreaLTC2=xe.LTC_FLOAT_2):(s.rectAreaLTC1=xe.LTC_HALF_1,s.rectAreaLTC2=xe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_FLOAT_1,s.rectAreaLTC2=xe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_HALF_1,s.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=_;let Y=s.hash;(Y.directionalLength!==x||Y.pointLength!==p||Y.spotLength!==u||Y.rectAreaLength!==w||Y.hemiLength!==M||Y.numDirectionalShadows!==U||Y.numPointShadows!==O||Y.numSpotShadows!==D||Y.numSpotMaps!==P||Y.numLightProbes!==S)&&(s.directional.length=x,s.spot.length=u,s.rectArea.length=w,s.point.length=p,s.hemi.length=M,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+P-j,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=j,s.numLightProbes=S,Y.directionalLength=x,Y.pointLength=p,Y.spotLength=u,Y.rectAreaLength=w,Y.hemiLength=M,Y.numDirectionalShadows=U,Y.numPointShadows=O,Y.numSpotShadows=D,Y.numSpotMaps=P,Y.numLightProbes=S,s.version=Kg++)}function l(h,f){let d=0,m=0,_=0,x=0,p=0,u=f.matrixWorldInverse;for(let w=0,M=h.length;w<M;w++){let U=h[w];if(U.isDirectionalLight){let O=s.directional[d];O.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(u),d++}else if(U.isSpotLight){let O=s.spot[_];O.position.setFromMatrixPosition(U.matrixWorld),O.position.applyMatrix4(u),O.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(u),_++}else if(U.isRectAreaLight){let O=s.rectArea[x];O.position.setFromMatrixPosition(U.matrixWorld),O.position.applyMatrix4(u),a.identity(),o.copy(U.matrixWorld),o.premultiply(u),a.extractRotation(o),O.halfWidth.set(U.width*.5,0,0),O.halfHeight.set(0,U.height*.5,0),O.halfWidth.applyMatrix4(a),O.halfHeight.applyMatrix4(a),x++}else if(U.isPointLight){let O=s.point[m];O.position.setFromMatrixPosition(U.matrixWorld),O.position.applyMatrix4(u),m++}else if(U.isHemisphereLight){let O=s.hemi[p];O.direction.setFromMatrixPosition(U.matrixWorld),O.direction.transformDirection(u),p++}}}return{setup:c,setupView:l,state:s}}function dh(i,e){let t=new jg(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(f){n.push(f)}function a(f){s.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Qg(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new dh(i,e),t.set(r,[c])):o>=a.length?(c=new dh(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var il=class extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sl=class extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},e0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t0=`uniform sampler2D shadow_pass;
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
}`;function n0(i,e,t){let n=new fr,s=new Te,r=new Te,o=new wt,a=new il({depthPacking:Zu}),c=new sl,l={},h=t.maxTextureSize,f={[Si]:Qt,[Qt]:Si,[hn]:hn},d=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:e0,fragmentShader:t0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let _=new pn;_.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ot(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bh;let u=this.type;this.render=function(D,P,j){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;let S=i.getRenderTarget(),R=i.getActiveCubeFace(),Y=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(Hn),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);let de=u!==jn&&this.type===jn,N=u===jn&&this.type!==jn;for(let k=0,Z=D.length;k<Z;k++){let se=D[k],te=se.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;s.copy(te.mapSize);let ee=te.getFrameExtents();if(s.multiply(ee),r.copy(te.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,te.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,te.mapSize.y=r.y)),te.map===null||de===!0||N===!0){let ce=this.type!==jn?{minFilter:ln,magFilter:ln}:{};te.map!==null&&te.map.dispose(),te.map=new cn(s.x,s.y,ce),te.map.texture.name=se.name+".shadowMap",te.camera.updateProjectionMatrix()}i.setRenderTarget(te.map),i.clear();let oe=te.getViewportCount();for(let ce=0;ce<oe;ce++){let ve=te.getViewport(ce);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),Q.viewport(o),te.updateMatrices(se,ce),n=te.getFrustum(),U(P,j,te.camera,se,this.type)}te.isPointLightShadow!==!0&&this.type===jn&&w(te,j),te.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(S,R,Y)};function w(D,P){let j=e.update(x);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new cn(s.x,s.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(P,null,j,d,x,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(P,null,j,m,x,null)}function M(D,P,j,S){let R=null,Y=j.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(Y!==void 0)R=Y;else if(R=j.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let Q=R.uuid,de=P.uuid,N=l[Q];N===void 0&&(N={},l[Q]=N);let k=N[de];k===void 0&&(k=R.clone(),N[de]=k,P.addEventListener("dispose",O)),R=k}if(R.visible=P.visible,R.wireframe=P.wireframe,S===jn?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:f[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let Q=i.properties.get(R);Q.light=j}return R}function U(D,P,j,S,R){if(D.visible===!1)return;if(D.layers.test(P.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&R===jn)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,D.matrixWorld);let de=e.update(D),N=D.material;if(Array.isArray(N)){let k=de.groups;for(let Z=0,se=k.length;Z<se;Z++){let te=k[Z],ee=N[te.materialIndex];if(ee&&ee.visible){let oe=M(D,ee,S,R);D.onBeforeShadow(i,D,P,j,de,oe,te),i.renderBufferDirect(j,null,de,oe,D,te),D.onAfterShadow(i,D,P,j,de,oe,te)}}}else if(N.visible){let k=M(D,N,S,R);D.onBeforeShadow(i,D,P,j,de,k,null),i.renderBufferDirect(j,null,de,k,D,null),D.onAfterShadow(i,D,P,j,de,k,null)}}let Q=D.children;for(let de=0,N=Q.length;de<N;de++)U(Q[de],P,j,S,R)}function O(D){D.target.removeEventListener("dispose",O);for(let j in l){let S=l[j],R=D.target.uuid;R in S&&(S[R].dispose(),delete S[R])}}}function i0(i,e,t){let n=t.isWebGL2;function s(){let I=!1,pe=new wt,ne=null,Ne=new wt(0,0,0,0);return{setMask:function(Le){ne!==Le&&!I&&(i.colorMask(Le,Le,Le,Le),ne=Le)},setLocked:function(Le){I=Le},setClear:function(Le,Qe,lt,Pt,Xt){Xt===!0&&(Le*=Pt,Qe*=Pt,lt*=Pt),pe.set(Le,Qe,lt,Pt),Ne.equals(pe)===!1&&(i.clearColor(Le,Qe,lt,Pt),Ne.copy(pe))},reset:function(){I=!1,ne=null,Ne.set(-1,0,0,0)}}}function r(){let I=!1,pe=null,ne=null,Ne=null;return{setTest:function(Le){Le?Ge(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(Le){pe!==Le&&!I&&(i.depthMask(Le),pe=Le)},setFunc:function(Le){if(ne!==Le){switch(Le){case Ru:i.depthFunc(i.NEVER);break;case Cu:i.depthFunc(i.ALWAYS);break;case Pu:i.depthFunc(i.LESS);break;case ia:i.depthFunc(i.LEQUAL);break;case Lu:i.depthFunc(i.EQUAL);break;case Iu:i.depthFunc(i.GEQUAL);break;case Uu:i.depthFunc(i.GREATER);break;case Du:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=Le}},setLocked:function(Le){I=Le},setClear:function(Le){Ne!==Le&&(i.clearDepth(Le),Ne=Le)},reset:function(){I=!1,pe=null,ne=null,Ne=null}}}function o(){let I=!1,pe=null,ne=null,Ne=null,Le=null,Qe=null,lt=null,Pt=null,Xt=null;return{setTest:function(ct){I||(ct?Ge(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(ct){pe!==ct&&!I&&(i.stencilMask(ct),pe=ct)},setFunc:function(ct,Vt,gn){(ne!==ct||Ne!==Vt||Le!==gn)&&(i.stencilFunc(ct,Vt,gn),ne=ct,Ne=Vt,Le=gn)},setOp:function(ct,Vt,gn){(Qe!==ct||lt!==Vt||Pt!==gn)&&(i.stencilOp(ct,Vt,gn),Qe=ct,lt=Vt,Pt=gn)},setLocked:function(ct){I=ct},setClear:function(ct){Xt!==ct&&(i.clearStencil(ct),Xt=ct)},reset:function(){I=!1,pe=null,ne=null,Ne=null,Le=null,Qe=null,lt=null,Pt=null,Xt=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,f=new WeakMap,d={},m={},_=new WeakMap,x=[],p=null,u=!1,w=null,M=null,U=null,O=null,D=null,P=null,j=null,S=new Re(0,0,0),R=0,Y=!1,Q=null,de=null,N=null,k=null,Z=null,se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,ee=0,oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(oe)[1]),te=ee>=1):oe.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),te=ee>=2);let ce=null,ve={},J=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),Se=new wt().fromArray(J),Ae=new wt().fromArray(ae);function Pe(I,pe,ne,Ne){let Le=new Uint8Array(4),Qe=i.createTexture();i.bindTexture(I,Qe),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let lt=0;lt<ne;lt++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(pe,0,i.RGBA,1,1,Ne,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(pe+lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return Qe}let Ve={};Ve[i.TEXTURE_2D]=Pe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ve[i.TEXTURE_CUBE_MAP]=Pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ve[i.TEXTURE_2D_ARRAY]=Pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ve[i.TEXTURE_3D]=Pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ge(i.DEPTH_TEST),c.setFunc(ia),ke(!1),T(Zl),Ge(i.CULL_FACE),Ce(Hn);function Ge(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function Be(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Xe(I,pe){return m[I]!==pe?(i.bindFramebuffer(I,pe),m[I]=pe,n&&(I===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=pe),I===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=pe)),!0):!1}function W(I,pe){let ne=x,Ne=!1;if(I)if(ne=_.get(pe),ne===void 0&&(ne=[],_.set(pe,ne)),I.isWebGLMultipleRenderTargets){let Le=I.texture;if(ne.length!==Le.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let Qe=0,lt=Le.length;Qe<lt;Qe++)ne[Qe]=i.COLOR_ATTACHMENT0+Qe;ne.length=Le.length,Ne=!0}}else ne[0]!==i.COLOR_ATTACHMENT0&&(ne[0]=i.COLOR_ATTACHMENT0,Ne=!0);else ne[0]!==i.BACK&&(ne[0]=i.BACK,Ne=!0);Ne&&(t.isWebGL2?i.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function Ct(I){return p!==I?(i.useProgram(I),p=I,!0):!1}let Ue={[Bi]:i.FUNC_ADD,[du]:i.FUNC_SUBTRACT,[pu]:i.FUNC_REVERSE_SUBTRACT};if(n)Ue[$l]=i.MIN,Ue[jl]=i.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(Ue[$l]=I.MIN_EXT,Ue[jl]=I.MAX_EXT)}let Oe={[mu]:i.ZERO,[gu]:i.ONE,[_u]:i.SRC_COLOR,[Bo]:i.SRC_ALPHA,[bu]:i.SRC_ALPHA_SATURATE,[Mu]:i.DST_COLOR,[vu]:i.DST_ALPHA,[xu]:i.ONE_MINUS_SRC_COLOR,[zo]:i.ONE_MINUS_SRC_ALPHA,[Su]:i.ONE_MINUS_DST_COLOR,[yu]:i.ONE_MINUS_DST_ALPHA,[Eu]:i.CONSTANT_COLOR,[Tu]:i.ONE_MINUS_CONSTANT_COLOR,[wu]:i.CONSTANT_ALPHA,[Au]:i.ONE_MINUS_CONSTANT_ALPHA};function Ce(I,pe,ne,Ne,Le,Qe,lt,Pt,Xt,ct){if(I===Hn){u===!0&&(Be(i.BLEND),u=!1);return}if(u===!1&&(Ge(i.BLEND),u=!0),I!==fu){if(I!==w||ct!==Y){if((M!==Bi||D!==Bi)&&(i.blendEquation(i.FUNC_ADD),M=Bi,D=Bi),ct)switch(I){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ti:i.blendFunc(i.ONE,i.ONE);break;case Jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ti:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}U=null,O=null,P=null,j=null,S.set(0,0,0),R=0,w=I,Y=ct}return}Le=Le||pe,Qe=Qe||ne,lt=lt||Ne,(pe!==M||Le!==D)&&(i.blendEquationSeparate(Ue[pe],Ue[Le]),M=pe,D=Le),(ne!==U||Ne!==O||Qe!==P||lt!==j)&&(i.blendFuncSeparate(Oe[ne],Oe[Ne],Oe[Qe],Oe[lt]),U=ne,O=Ne,P=Qe,j=lt),(Pt.equals(S)===!1||Xt!==R)&&(i.blendColor(Pt.r,Pt.g,Pt.b,Xt),S.copy(Pt),R=Xt),w=I,Y=!1}function pt(I,pe){I.side===hn?Be(i.CULL_FACE):Ge(i.CULL_FACE);let ne=I.side===Qt;pe&&(ne=!ne),ke(ne),I.blending===Rs&&I.transparent===!1?Ce(Hn):Ce(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);let Ne=I.stencilWrite;l.setTest(Ne),Ne&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),V(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ge(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(I){Q!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),Q=I)}function T(I){I!==cu?(Ge(i.CULL_FACE),I!==de&&(I===Zl?i.cullFace(i.BACK):I===hu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),de=I}function v(I){I!==N&&(te&&i.lineWidth(I),N=I)}function V(I,pe,ne){I?(Ge(i.POLYGON_OFFSET_FILL),(k!==pe||Z!==ne)&&(i.polygonOffset(pe,ne),k=pe,Z=ne)):Be(i.POLYGON_OFFSET_FILL)}function le(I){I?Ge(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function ie(I){I===void 0&&(I=i.TEXTURE0+se-1),ce!==I&&(i.activeTexture(I),ce=I)}function ue(I,pe,ne){ne===void 0&&(ce===null?ne=i.TEXTURE0+se-1:ne=ce);let Ne=ve[ne];Ne===void 0&&(Ne={type:void 0,texture:void 0},ve[ne]=Ne),(Ne.type!==I||Ne.texture!==pe)&&(ce!==ne&&(i.activeTexture(ne),ce=ne),i.bindTexture(I,pe||Ve[I]),Ne.type=I,Ne.texture=pe)}function Ee(){let I=ve[ce];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ye(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ye(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function C(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(I){Se.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Se.copy(I))}function We(I){Ae.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Ae.copy(I))}function st(I,pe){let ne=f.get(pe);ne===void 0&&(ne=new WeakMap,f.set(pe,ne));let Ne=ne.get(I);Ne===void 0&&(Ne=i.getUniformBlockIndex(pe,I.name),ne.set(I,Ne))}function Ze(I,pe){let Ne=f.get(pe).get(I);h.get(pe)!==Ne&&(i.uniformBlockBinding(pe,Ne,I.__bindingPointIndex),h.set(pe,Ne))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ce=null,ve={},m={},_=new WeakMap,x=[],p=null,u=!1,w=null,M=null,U=null,O=null,D=null,P=null,j=null,S=new Re(0,0,0),R=0,Y=!1,Q=null,de=null,N=null,k=null,Z=null,Se.set(0,0,i.canvas.width,i.canvas.height),Ae.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ge,disable:Be,bindFramebuffer:Xe,drawBuffers:W,useProgram:Ct,setBlending:Ce,setMaterial:pt,setFlipSided:ke,setCullFace:T,setLineWidth:v,setPolygonOffset:V,setScissorTest:le,activeTexture:ie,bindTexture:ue,unbindTexture:Ee,compressedTexImage2D:ye,compressedTexImage3D:_e,texImage2D:me,texImage3D:fe,updateUBOMapping:st,uniformBlockBinding:Ze,texStorage2D:C,texStorage3D:re,texSubImage2D:De,texSubImage3D:Ye,compressedTexSubImage2D:he,compressedTexSubImage3D:at,scissor:we,viewport:We,reset:ge}}function s0(i,e,t,n,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,v){return m?new OffscreenCanvas(T,v):ua("canvas")}function x(T,v,V,le){let ie=1;if((T.width>le||T.height>le)&&(ie=le/Math.max(T.width,T.height)),ie<1||v===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let ue=v?ha:Math.floor,Ee=ue(ie*T.width),ye=ue(ie*T.height);f===void 0&&(f=_(Ee,ye));let _e=V?_(Ee,ye):f;return _e.width=Ee,_e.height=ye,_e.getContext("2d").drawImage(T,0,0,Ee,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Ee+"x"+ye+")."),_e}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function p(T){return qo(T.width)&&qo(T.height)}function u(T){return a?!1:T.wrapS!==Pn||T.wrapT!==Pn||T.minFilter!==ln&&T.minFilter!==yn}function w(T,v){return T.generateMipmaps&&v&&T.minFilter!==ln&&T.minFilter!==yn}function M(T){i.generateMipmap(T)}function U(T,v,V,le,ie=!1){if(a===!1)return v;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ue=v;if(v===i.RED&&(V===i.FLOAT&&(ue=i.R32F),V===i.HALF_FLOAT&&(ue=i.R16F),V===i.UNSIGNED_BYTE&&(ue=i.R8)),v===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(ue=i.R8UI),V===i.UNSIGNED_SHORT&&(ue=i.R16UI),V===i.UNSIGNED_INT&&(ue=i.R32UI),V===i.BYTE&&(ue=i.R8I),V===i.SHORT&&(ue=i.R16I),V===i.INT&&(ue=i.R32I)),v===i.RG&&(V===i.FLOAT&&(ue=i.RG32F),V===i.HALF_FLOAT&&(ue=i.RG16F),V===i.UNSIGNED_BYTE&&(ue=i.RG8)),v===i.RGBA){let Ee=ie?aa:ut.getTransfer(le);V===i.FLOAT&&(ue=i.RGBA32F),V===i.HALF_FLOAT&&(ue=i.RGBA16F),V===i.UNSIGNED_BYTE&&(ue=Ee===xt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(ue=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(ue=i.RGB5_A1)}return(ue===i.R16F||ue===i.R32F||ue===i.RG16F||ue===i.RG32F||ue===i.RGBA16F||ue===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function O(T,v,V){return w(T,V)===!0||T.isFramebufferTexture&&T.minFilter!==ln&&T.minFilter!==yn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function D(T){return T===ln||T===Ql||T===ro?i.NEAREST:i.LINEAR}function P(T){let v=T.target;v.removeEventListener("dispose",P),S(v),v.isVideoTexture&&h.delete(v)}function j(T){let v=T.target;v.removeEventListener("dispose",j),Y(v)}function S(T){let v=n.get(T);if(v.__webglInit===void 0)return;let V=T.source,le=d.get(V);if(le){let ie=le[v.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&R(T),Object.keys(le).length===0&&d.delete(V)}n.remove(T)}function R(T){let v=n.get(T);i.deleteTexture(v.__webglTexture);let V=T.source,le=d.get(V);delete le[v.__cacheKey],o.memory.textures--}function Y(T){let v=T.texture,V=n.get(T),le=n.get(v);if(le.__webglTexture!==void 0&&(i.deleteTexture(le.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(V.__webglFramebuffer[ie]))for(let ue=0;ue<V.__webglFramebuffer[ie].length;ue++)i.deleteFramebuffer(V.__webglFramebuffer[ie][ue]);else i.deleteFramebuffer(V.__webglFramebuffer[ie]);V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer[ie])}else{if(Array.isArray(V.__webglFramebuffer))for(let ie=0;ie<V.__webglFramebuffer.length;ie++)i.deleteFramebuffer(V.__webglFramebuffer[ie]);else i.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&i.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ie=0;ie<V.__webglColorRenderbuffer.length;ie++)V.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(V.__webglColorRenderbuffer[ie]);V.__webglDepthRenderbuffer&&i.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ie=0,ue=v.length;ie<ue;ie++){let Ee=n.get(v[ie]);Ee.__webglTexture&&(i.deleteTexture(Ee.__webglTexture),o.memory.textures--),n.remove(v[ie])}n.remove(v),n.remove(T)}let Q=0;function de(){Q=0}function N(){let T=Q;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),Q+=1,T}function k(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function Z(T,v){let V=n.get(T);if(T.isVideoTexture&&pt(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){let le=T.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(V,T,v);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+v)}function se(T,v){let V=n.get(T);if(T.version>0&&V.__version!==T.version){Se(V,T,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+v)}function te(T,v){let V=n.get(T);if(T.version>0&&V.__version!==T.version){Se(V,T,v);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+v)}function ee(T,v){let V=n.get(T);if(T.version>0&&V.__version!==T.version){Ae(V,T,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+v)}let oe={[Vo]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Go]:i.MIRRORED_REPEAT},ce={[ln]:i.NEAREST,[Ql]:i.NEAREST_MIPMAP_NEAREST,[ro]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[Bu]:i.LINEAR_MIPMAP_NEAREST,[cr]:i.LINEAR_MIPMAP_LINEAR},ve={[Ku]:i.NEVER,[nf]:i.ALWAYS,[$u]:i.LESS,[Dh]:i.LEQUAL,[ju]:i.EQUAL,[tf]:i.GEQUAL,[Qu]:i.GREATER,[ef]:i.NOTEQUAL};function J(T,v,V){if(V?(i.texParameteri(T,i.TEXTURE_WRAP_S,oe[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,oe[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,oe[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ce[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ce[v.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==Pn||v.wrapT!==Pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,D(v.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,D(v.minFilter)),v.minFilter!==ln&&v.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let le=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===ln||v.minFilter!==ro&&v.minFilter!==cr||v.type===vi&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Un&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(T,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function ae(T,v){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",P));let le=v.source,ie=d.get(le);ie===void 0&&(ie={},d.set(le,ie));let ue=k(v);if(ue!==T.__cacheKey){ie[ue]===void 0&&(ie[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ie[ue].usedTimes++;let Ee=ie[T.__cacheKey];Ee!==void 0&&(ie[T.__cacheKey].usedTimes--,Ee.usedTimes===0&&R(v)),T.__cacheKey=ue,T.__webglTexture=ie[ue].texture}return V}function Se(T,v,V){let le=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(le=i.TEXTURE_3D);let ie=ae(T,v),ue=v.source;t.bindTexture(le,T.__webglTexture,i.TEXTURE0+V);let Ee=n.get(ue);if(ue.version!==Ee.__version||ie===!0){t.activeTexture(i.TEXTURE0+V);let ye=ut.getPrimaries(ut.workingColorSpace),_e=v.colorSpace===Mn?null:ut.getPrimaries(v.colorSpace),De=v.colorSpace===Mn||ye===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let Ye=u(v)&&p(v.image)===!1,he=x(v.image,Ye,!1,s.maxTextureSize);he=ke(v,he);let at=p(he)||a,C=r.convert(v.format,v.colorSpace),re=r.convert(v.type),me=U(v.internalFormat,C,re,v.colorSpace,v.isVideoTexture);J(le,v,at);let fe,we=v.mipmaps,We=a&&v.isVideoTexture!==!0&&me!==Lh,st=Ee.__version===void 0||ie===!0,Ze=O(v,he,at);if(v.isDepthTexture)me=i.DEPTH_COMPONENT,a?v.type===vi?me=i.DEPTH_COMPONENT32F:v.type===xi?me=i.DEPTH_COMPONENT24:v.type===ki?me=i.DEPTH24_STENCIL8:me=i.DEPTH_COMPONENT16:v.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Vi&&me===i.DEPTH_COMPONENT&&v.type!==Al&&v.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=xi,re=r.convert(v.type)),v.format===Us&&me===i.DEPTH_COMPONENT&&(me=i.DEPTH_STENCIL,v.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ki,re=r.convert(v.type))),st&&(We?t.texStorage2D(i.TEXTURE_2D,1,me,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,me,he.width,he.height,0,C,re,null));else if(v.isDataTexture)if(we.length>0&&at){We&&st&&t.texStorage2D(i.TEXTURE_2D,Ze,me,we[0].width,we[0].height);for(let ge=0,I=we.length;ge<I;ge++)fe=we[ge],We?t.texSubImage2D(i.TEXTURE_2D,ge,0,0,fe.width,fe.height,C,re,fe.data):t.texImage2D(i.TEXTURE_2D,ge,me,fe.width,fe.height,0,C,re,fe.data);v.generateMipmaps=!1}else We?(st&&t.texStorage2D(i.TEXTURE_2D,Ze,me,he.width,he.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,C,re,he.data)):t.texImage2D(i.TEXTURE_2D,0,me,he.width,he.height,0,C,re,he.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){We&&st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,me,we[0].width,we[0].height,he.depth);for(let ge=0,I=we.length;ge<I;ge++)fe=we[ge],v.format!==Ln?C!==null?We?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,fe.width,fe.height,he.depth,C,fe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,me,fe.width,fe.height,he.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,fe.width,fe.height,he.depth,C,re,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,me,fe.width,fe.height,he.depth,0,C,re,fe.data)}else{We&&st&&t.texStorage2D(i.TEXTURE_2D,Ze,me,we[0].width,we[0].height);for(let ge=0,I=we.length;ge<I;ge++)fe=we[ge],v.format!==Ln?C!==null?We?t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,fe.width,fe.height,C,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,me,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage2D(i.TEXTURE_2D,ge,0,0,fe.width,fe.height,C,re,fe.data):t.texImage2D(i.TEXTURE_2D,ge,me,fe.width,fe.height,0,C,re,fe.data)}else if(v.isDataArrayTexture)We?(st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,me,he.width,he.height,he.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,C,re,he.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,he.width,he.height,he.depth,0,C,re,he.data);else if(v.isData3DTexture)We?(st&&t.texStorage3D(i.TEXTURE_3D,Ze,me,he.width,he.height,he.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,C,re,he.data)):t.texImage3D(i.TEXTURE_3D,0,me,he.width,he.height,he.depth,0,C,re,he.data);else if(v.isFramebufferTexture){if(st)if(We)t.texStorage2D(i.TEXTURE_2D,Ze,me,he.width,he.height);else{let ge=he.width,I=he.height;for(let pe=0;pe<Ze;pe++)t.texImage2D(i.TEXTURE_2D,pe,me,ge,I,0,C,re,null),ge>>=1,I>>=1}}else if(we.length>0&&at){We&&st&&t.texStorage2D(i.TEXTURE_2D,Ze,me,we[0].width,we[0].height);for(let ge=0,I=we.length;ge<I;ge++)fe=we[ge],We?t.texSubImage2D(i.TEXTURE_2D,ge,0,0,C,re,fe):t.texImage2D(i.TEXTURE_2D,ge,me,C,re,fe);v.generateMipmaps=!1}else We?(st&&t.texStorage2D(i.TEXTURE_2D,Ze,me,he.width,he.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,C,re,he)):t.texImage2D(i.TEXTURE_2D,0,me,C,re,he);w(v,at)&&M(le),Ee.__version=ue.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Ae(T,v,V){if(v.image.length!==6)return;let le=ae(T,v),ie=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+V);let ue=n.get(ie);if(ie.version!==ue.__version||le===!0){t.activeTexture(i.TEXTURE0+V);let Ee=ut.getPrimaries(ut.workingColorSpace),ye=v.colorSpace===Mn?null:ut.getPrimaries(v.colorSpace),_e=v.colorSpace===Mn||Ee===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let De=v.isCompressedTexture||v.image[0].isCompressedTexture,Ye=v.image[0]&&v.image[0].isDataTexture,he=[];for(let ge=0;ge<6;ge++)!De&&!Ye?he[ge]=x(v.image[ge],!1,!0,s.maxCubemapSize):he[ge]=Ye?v.image[ge].image:v.image[ge],he[ge]=ke(v,he[ge]);let at=he[0],C=p(at)||a,re=r.convert(v.format,v.colorSpace),me=r.convert(v.type),fe=U(v.internalFormat,re,me,v.colorSpace),we=a&&v.isVideoTexture!==!0,We=ue.__version===void 0||le===!0,st=O(v,at,C);J(i.TEXTURE_CUBE_MAP,v,C);let Ze;if(De){we&&We&&t.texStorage2D(i.TEXTURE_CUBE_MAP,st,fe,at.width,at.height);for(let ge=0;ge<6;ge++){Ze=he[ge].mipmaps;for(let I=0;I<Ze.length;I++){let pe=Ze[I];v.format!==Ln?re!==null?we?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I,0,0,pe.width,pe.height,re,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I,fe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I,0,0,pe.width,pe.height,re,me,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I,fe,pe.width,pe.height,0,re,me,pe.data)}}}else{Ze=v.mipmaps,we&&We&&(Ze.length>0&&st++,t.texStorage2D(i.TEXTURE_CUBE_MAP,st,fe,he[0].width,he[0].height));for(let ge=0;ge<6;ge++)if(Ye){we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,he[ge].width,he[ge].height,re,me,he[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,fe,he[ge].width,he[ge].height,0,re,me,he[ge].data);for(let I=0;I<Ze.length;I++){let ne=Ze[I].image[ge].image;we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I+1,0,0,ne.width,ne.height,re,me,ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I+1,fe,ne.width,ne.height,0,re,me,ne.data)}}else{we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,re,me,he[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,fe,re,me,he[ge]);for(let I=0;I<Ze.length;I++){let pe=Ze[I];we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I+1,0,0,re,me,pe.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I+1,fe,re,me,pe.image[ge])}}}w(v,C)&&M(i.TEXTURE_CUBE_MAP),ue.__version=ie.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Pe(T,v,V,le,ie,ue){let Ee=r.convert(V.format,V.colorSpace),ye=r.convert(V.type),_e=U(V.internalFormat,Ee,ye,V.colorSpace);if(!n.get(v).__hasExternalTextures){let Ye=Math.max(1,v.width>>ue),he=Math.max(1,v.height>>ue);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,ue,_e,Ye,he,v.depth,0,Ee,ye,null):t.texImage2D(ie,ue,_e,Ye,he,0,Ee,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ce(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,ie,n.get(V).__webglTexture,0,Oe(v)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,ie,n.get(V).__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(T,v,V){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer&&!v.stencilBuffer){let le=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(V||Ce(v)){let ie=v.depthTexture;ie&&ie.isDepthTexture&&(ie.type===vi?le=i.DEPTH_COMPONENT32F:ie.type===xi&&(le=i.DEPTH_COMPONENT24));let ue=Oe(v);Ce(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,le,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,le,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,le,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(v.depthBuffer&&v.stencilBuffer){let le=Oe(v);V&&Ce(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,i.DEPTH24_STENCIL8,v.width,v.height):Ce(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{let le=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ie=0;ie<le.length;ie++){let ue=le[ie],Ee=r.convert(ue.format,ue.colorSpace),ye=r.convert(ue.type),_e=U(ue.internalFormat,Ee,ye,ue.colorSpace),De=Oe(v);V&&Ce(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,De,_e,v.width,v.height):Ce(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De,_e,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,_e,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ge(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);let le=n.get(v.depthTexture).__webglTexture,ie=Oe(v);if(v.depthTexture.format===Vi)Ce(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(v.depthTexture.format===Us)Ce(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Be(T){let v=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ge(v.__webglFramebuffer,T)}else if(V){v.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[le]),v.__webglDepthbuffer[le]=i.createRenderbuffer(),Ve(v.__webglDepthbuffer[le],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Ve(v.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(T,v,V){let le=n.get(T);v!==void 0&&Pe(le.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Be(T)}function W(T){let v=T.texture,V=n.get(T),le=n.get(v);T.addEventListener("dispose",j),T.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=v.version,o.memory.textures++);let ie=T.isWebGLCubeRenderTarget===!0,ue=T.isWebGLMultipleRenderTargets===!0,Ee=p(T)||a;if(ie){V.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(a&&v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[ye]=[];for(let _e=0;_e<v.mipmaps.length;_e++)V.__webglFramebuffer[ye][_e]=i.createFramebuffer()}else V.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let ye=0;ye<v.mipmaps.length;ye++)V.__webglFramebuffer[ye]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ue)if(s.drawBuffers){let ye=T.texture;for(let _e=0,De=ye.length;_e<De;_e++){let Ye=n.get(ye[_e]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Ce(T)===!1){let ye=ue?v:[v];V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let _e=0;_e<ye.length;_e++){let De=ye[_e];V.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[_e]);let Ye=r.convert(De.format,De.colorSpace),he=r.convert(De.type),at=U(De.internalFormat,Ye,he,De.colorSpace,T.isXRRenderTarget===!0),C=Oe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,C,at,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,V.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Ve(V.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),J(i.TEXTURE_CUBE_MAP,v,Ee);for(let ye=0;ye<6;ye++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)Pe(V.__webglFramebuffer[ye][_e],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,_e);else Pe(V.__webglFramebuffer[ye],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);w(v,Ee)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){let ye=T.texture;for(let _e=0,De=ye.length;_e<De;_e++){let Ye=ye[_e],he=n.get(Ye);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),J(i.TEXTURE_2D,Ye,Ee),Pe(V.__webglFramebuffer,T,Ye,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,0),w(Ye,Ee)&&M(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ye=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,le.__webglTexture),J(ye,v,Ee),a&&v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)Pe(V.__webglFramebuffer[_e],T,v,i.COLOR_ATTACHMENT0,ye,_e);else Pe(V.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,ye,0);w(v,Ee)&&M(ye),t.unbindTexture()}T.depthBuffer&&Be(T)}function Ct(T){let v=p(T)||a,V=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let le=0,ie=V.length;le<ie;le++){let ue=V[le];if(w(ue,v)){let Ee=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ye=n.get(ue).__webglTexture;t.bindTexture(Ee,ye),M(Ee),t.unbindTexture()}}}function Ue(T){if(a&&T.samples>0&&Ce(T)===!1){let v=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],V=T.width,le=T.height,ie=i.COLOR_BUFFER_BIT,ue=[],Ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(T),_e=T.isWebGLMultipleRenderTargets===!0;if(_e)for(let De=0;De<v.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let De=0;De<v.length;De++){ue.push(i.COLOR_ATTACHMENT0+De),T.depthBuffer&&ue.push(Ee);let Ye=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Ye===!1&&(T.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),_e&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[De]),Ye===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ee]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ee])),_e){let he=n.get(v[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,V,le,0,0,V,le,ie,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let De=0;De<v.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,ye.__webglColorRenderbuffer[De]);let Ye=n.get(v[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function Oe(T){return Math.min(s.maxSamples,T.samples)}function Ce(T){let v=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function pt(T){let v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function ke(T,v){let V=T.colorSpace,le=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Xo||V!==ni&&V!==Mn&&(ut.getTransfer(V)===xt?a===!1?e.has("EXT_sRGB")===!0&&le===Ln?(T.format=Xo,T.minFilter=yn,T.generateMipmaps=!1):v=fa.sRGBToLinear(v):(le!==Ln||ie!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),v}this.allocateTextureUnit=N,this.resetTextureUnits=de,this.setTexture2D=Z,this.setTexture2DArray=se,this.setTexture3D=te,this.setTextureCube=ee,this.rebindTextures=Xe,this.setupRenderTarget=W,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Ce}function r0(i,e,t){let n=t.isWebGL2;function s(r,o=Mn){let a,c=ut.getTransfer(o);if(r===Mi)return i.UNSIGNED_BYTE;if(r===wh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ah)return i.UNSIGNED_SHORT_5_5_5_1;if(r===zu)return i.BYTE;if(r===Hu)return i.SHORT;if(r===Al)return i.UNSIGNED_SHORT;if(r===Th)return i.INT;if(r===xi)return i.UNSIGNED_INT;if(r===vi)return i.FLOAT;if(r===Un)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ku)return i.ALPHA;if(r===Ln)return i.RGBA;if(r===Vu)return i.LUMINANCE;if(r===Gu)return i.LUMINANCE_ALPHA;if(r===Vi)return i.DEPTH_COMPONENT;if(r===Us)return i.DEPTH_STENCIL;if(r===Xo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Wu)return i.RED;if(r===Rh)return i.RED_INTEGER;if(r===Xu)return i.RG;if(r===Ch)return i.RG_INTEGER;if(r===Ph)return i.RGBA_INTEGER;if(r===ao||r===oo||r===lo||r===co)if(c===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ao)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ao)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===oo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===lo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===co)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ec||r===tc||r===nc||r===ic)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ec)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===tc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===nc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ic)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===sc||r===rc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===sc)return c===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===rc)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ac||r===oc||r===lc||r===cc||r===hc||r===uc||r===fc||r===dc||r===pc||r===mc||r===gc||r===_c||r===xc||r===vc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ac)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===oc)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lc)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===cc)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hc)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===uc)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fc)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===dc)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pc)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mc)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gc)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_c)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xc)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vc)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ho||r===yc||r===Mc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ho)return c===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===yc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Mc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===qu||r===Sc||r===bc||r===Ec)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ho)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Sc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ec)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ki?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var rl=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},In=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},a0={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),u=this._getHandJoint(l,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,_=.005;l.inputState.pinching&&d>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(a0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new In;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},al=class extends kn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,d=null,m=null,_=null,x=t.getContextAttributes(),p=null,u=null,w=[],M=[],U=new Te,O=null,D=new jt;D.layers.enable(1),D.viewport=new wt;let P=new jt;P.layers.enable(2),P.viewport=new wt;let j=[D,P],S=new rl;S.layers.enable(1),S.layers.enable(2);let R=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=w[J];return ae===void 0&&(ae=new lr,w[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=w[J];return ae===void 0&&(ae=new lr,w[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=w[J];return ae===void 0&&(ae=new lr,w[J]=ae),ae.getHandSpace()};function Q(J){let ae=M.indexOf(J.inputSource);if(ae===-1)return;let Se=w[ae];Se!==void 0&&(Se.update(J.inputSource,J.frame,l||o),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function de(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",de),s.removeEventListener("inputsourceschange",N);for(let J=0;J<w.length;J++){let ae=M[J];ae!==null&&(M[J]=null,w[J].disconnect(ae))}R=null,Y=null,e.setRenderTarget(p),m=null,d=null,f=null,s=null,u=null,ve.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",de),s.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ae={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new cn(m.framebufferWidth,m.framebufferHeight,{format:Ln,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ae=null,Se=null,Ae=null;x.depth&&(Ae=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=x.stencil?Us:Vi,Se=x.stencil?ki:xi);let Pe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(Pe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),u=new cn(d.textureWidth,d.textureHeight,{format:Ln,type:Mi,depthTexture:new ya(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Ve=e.properties.get(u);Ve.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ve.setContext(s),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function N(J){for(let ae=0;ae<J.removed.length;ae++){let Se=J.removed[ae],Ae=M.indexOf(Se);Ae>=0&&(M[Ae]=null,w[Ae].disconnect(Se))}for(let ae=0;ae<J.added.length;ae++){let Se=J.added[ae],Ae=M.indexOf(Se);if(Ae===-1){for(let Ve=0;Ve<w.length;Ve++)if(Ve>=M.length){M.push(Se),Ae=Ve;break}else if(M[Ve]===null){M[Ve]=Se,Ae=Ve;break}if(Ae===-1)break}let Pe=w[Ae];Pe&&Pe.connect(Se)}}let k=new L,Z=new L;function se(J,ae,Se){k.setFromMatrixPosition(ae.matrixWorld),Z.setFromMatrixPosition(Se.matrixWorld);let Ae=k.distanceTo(Z),Pe=ae.projectionMatrix.elements,Ve=Se.projectionMatrix.elements,Ge=Pe[14]/(Pe[10]-1),Be=Pe[14]/(Pe[10]+1),Xe=(Pe[9]+1)/Pe[5],W=(Pe[9]-1)/Pe[5],Ct=(Pe[8]-1)/Pe[0],Ue=(Ve[8]+1)/Ve[0],Oe=Ge*Ct,Ce=Ge*Ue,pt=Ae/(-Ct+Ue),ke=pt*-Ct;ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ke),J.translateZ(pt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();let T=Ge+pt,v=Be+pt,V=Oe-ke,le=Ce+(Ae-ke),ie=Xe*Be/v*T,ue=W*Be/v*T;J.projectionMatrix.makePerspective(V,le,ie,ue,T,v),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function te(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;S.near=P.near=D.near=J.near,S.far=P.far=D.far=J.far,(R!==S.near||Y!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,Y=S.far);let ae=J.parent,Se=S.cameras;te(S,ae);for(let Ae=0;Ae<Se.length;Ae++)te(Se[Ae],ae);Se.length===2?se(S,D,P):S.projectionMatrix.copy(D.projectionMatrix),ee(J,S,ae)};function ee(J,ae,Se){Se===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=hr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)};let oe=null;function ce(J,ae){if(h=ae.getViewerPose(l||o),_=ae,h!==null){let Se=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let Ae=!1;Se.length!==S.cameras.length&&(S.cameras.length=0,Ae=!0);for(let Pe=0;Pe<Se.length;Pe++){let Ve=Se[Pe],Ge=null;if(m!==null)Ge=m.getViewport(Ve);else{let Xe=f.getViewSubImage(d,Ve);Ge=Xe.viewport,Pe===0&&(e.setRenderTargetTextures(u,Xe.colorTexture,d.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(u))}let Be=j[Pe];Be===void 0&&(Be=new jt,Be.layers.enable(Pe),Be.viewport=new wt,j[Pe]=Be),Be.matrix.fromArray(Ve.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ve.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Pe===0&&(S.matrix.copy(Be.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ae===!0&&S.cameras.push(Be)}}for(let Se=0;Se<w.length;Se++){let Ae=M[Se],Pe=w[Se];Ae!==null&&Pe!==void 0&&Pe.update(Ae,ae,l||o)}oe&&oe(J,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),_=null}let ve=new zh;ve.setAnimationLoop(ce),this.setAnimationLoop=function(J){oe=J},this.dispose=function(){}}};function o0(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Bh(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,w,M,U){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),f(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,U)):u.isMeshMatcapMaterial?(r(p,u),_(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),x(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?c(p,u,w,M):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Qt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Qt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let w=e.get(u).envMap;if(w&&(p.envMap.value=w,p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;let M=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*M,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,w,M){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*w,p.scale.value=M*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,w){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Qt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){let w=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function l0(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,M){let U=M.program;n.uniformBlockBinding(w,U)}function l(w,M){let U=s[w.id];U===void 0&&(_(w),U=h(w),s[w.id]=U,w.addEventListener("dispose",p));let O=M.program;n.updateUBOMapping(w,O);let D=e.render.frame;r[w.id]!==D&&(d(w),r[w.id]=D)}function h(w){let M=f();w.__bindingPointIndex=M;let U=i.createBuffer(),O=w.__size,D=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,U),i.bufferData(i.UNIFORM_BUFFER,O,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,U),U}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let M=s[w.id],U=w.uniforms,O=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let D=0,P=U.length;D<P;D++){let j=Array.isArray(U[D])?U[D]:[U[D]];for(let S=0,R=j.length;S<R;S++){let Y=j[S];if(m(Y,D,S,O)===!0){let Q=Y.__offset,de=Array.isArray(Y.value)?Y.value:[Y.value],N=0;for(let k=0;k<de.length;k++){let Z=de[k],se=x(Z);typeof Z=="number"||typeof Z=="boolean"?(Y.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,Q+N,Y.__data)):Z.isMatrix3?(Y.__data[0]=Z.elements[0],Y.__data[1]=Z.elements[1],Y.__data[2]=Z.elements[2],Y.__data[3]=0,Y.__data[4]=Z.elements[3],Y.__data[5]=Z.elements[4],Y.__data[6]=Z.elements[5],Y.__data[7]=0,Y.__data[8]=Z.elements[6],Y.__data[9]=Z.elements[7],Y.__data[10]=Z.elements[8],Y.__data[11]=0):(Z.toArray(Y.__data,N),N+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,Y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,M,U,O){let D=w.value,P=M+"_"+U;if(O[P]===void 0)return typeof D=="number"||typeof D=="boolean"?O[P]=D:O[P]=D.clone(),!0;{let j=O[P];if(typeof D=="number"||typeof D=="boolean"){if(j!==D)return O[P]=D,!0}else if(j.equals(D)===!1)return j.copy(D),!0}return!1}function _(w){let M=w.uniforms,U=0,O=16;for(let P=0,j=M.length;P<j;P++){let S=Array.isArray(M[P])?M[P]:[M[P]];for(let R=0,Y=S.length;R<Y;R++){let Q=S[R],de=Array.isArray(Q.value)?Q.value:[Q.value];for(let N=0,k=de.length;N<k;N++){let Z=de[N],se=x(Z),te=U%O;te!==0&&O-te<se.boundary&&(U+=O-te),Q.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=U,U+=se.storage}}}let D=U%O;return D>0&&(U+=O-D),w.__size=U,w.__cache={},this}function x(w){let M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function p(w){let M=w.target;M.removeEventListener("dispose",p);let U=o.indexOf(M.__bindingPointIndex);o.splice(U,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function u(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:u}}var dr=class{constructor(e={}){let{canvas:t=xf(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let m=new Uint32Array(4),_=new Int32Array(4),x=null,p=null,u=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this._useLegacyLights=!1,this.toneMapping=yi,this.toneMappingExposure=1;let M=this,U=!1,O=0,D=0,P=null,j=-1,S=null,R=new wt,Y=new wt,Q=null,de=new Re(0),N=0,k=t.width,Z=t.height,se=1,te=null,ee=null,oe=new wt(0,0,k,Z),ce=new wt(0,0,k,Z),ve=!1,J=new fr,ae=!1,Se=!1,Ae=null,Pe=new dt,Ve=new Te,Ge=new L,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return P===null?se:1}let W=n;function Ct(E,H){for(let G=0;G<E.length;G++){let q=E[G],X=t.getContext(q,H);if(X!==null)return X}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",pe,!1),W===null){let H=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&H.shift(),W=Ct(H,E),W===null)throw Ct(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ue,Oe,Ce,pt,ke,T,v,V,le,ie,ue,Ee,ye,_e,De,Ye,he,at,C,re,me,fe,we,We;function st(){Ue=new Am(W),Oe=new Mm(W,Ue,e),Ue.init(Oe),fe=new r0(W,Ue,Oe),Ce=new i0(W,Ue,Oe),pt=new Pm(W),ke=new Xg,T=new s0(W,Ue,Ce,ke,Oe,fe,pt),v=new bm(M),V=new wm(M),le=new Bf(W,Oe),we=new vm(W,Ue,le,Oe),ie=new Rm(W,le,pt,we),ue=new Dm(W,ie,le,pt),C=new Um(W,Oe,T),Ye=new Sm(ke),Ee=new Wg(M,v,V,Ue,Oe,we,Ye),ye=new o0(M,ke),_e=new Yg,De=new Qg(Ue,Oe),at=new xm(M,v,V,Ce,ue,d,c),he=new n0(M,ue,Oe),We=new l0(W,pt,Oe,Ce),re=new ym(W,Ue,pt,Oe),me=new Cm(W,Ue,pt,Oe),pt.programs=Ee.programs,M.capabilities=Oe,M.extensions=Ue,M.properties=ke,M.renderLists=_e,M.shadowMap=he,M.state=Ce,M.info=pt}st();let Ze=new al(M,W);this.xr=Ze,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let E=Ue.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ue.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(E){E!==void 0&&(se=E,this.setSize(k,Z,!1))},this.getSize=function(E){return E.set(k,Z)},this.setSize=function(E,H,G=!0){if(Ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,Z=H,t.width=Math.floor(E*se),t.height=Math.floor(H*se),G===!0&&(t.style.width=E+"px",t.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(k*se,Z*se).floor()},this.setDrawingBufferSize=function(E,H,G){k=E,Z=H,se=G,t.width=Math.floor(E*G),t.height=Math.floor(H*G),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(oe)},this.setViewport=function(E,H,G,q){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,H,G,q),Ce.viewport(R.copy(oe).multiplyScalar(se).floor())},this.getScissor=function(E){return E.copy(ce)},this.setScissor=function(E,H,G,q){E.isVector4?ce.set(E.x,E.y,E.z,E.w):ce.set(E,H,G,q),Ce.scissor(Y.copy(ce).multiplyScalar(se).floor())},this.getScissorTest=function(){return ve},this.setScissorTest=function(E){Ce.setScissorTest(ve=E)},this.setOpaqueSort=function(E){te=E},this.setTransparentSort=function(E){ee=E},this.getClearColor=function(E){return E.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(E=!0,H=!0,G=!0){let q=0;if(E){let X=!1;if(P!==null){let be=P.texture.format;X=be===Ph||be===Ch||be===Rh}if(X){let be=P.texture.type,Ie=be===Mi||be===xi||be===Al||be===ki||be===wh||be===Ah,Fe=at.getClearColor(),ze=at.getClearAlpha(),$e=Fe.r,He=Fe.g,qe=Fe.b;Ie?(m[0]=$e,m[1]=He,m[2]=qe,m[3]=ze,W.clearBufferuiv(W.COLOR,0,m)):(_[0]=$e,_[1]=He,_[2]=qe,_[3]=ze,W.clearBufferiv(W.COLOR,0,_))}else q|=W.COLOR_BUFFER_BIT}H&&(q|=W.DEPTH_BUFFER_BIT),G&&(q|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),_e.dispose(),De.dispose(),ke.dispose(),v.dispose(),V.dispose(),ue.dispose(),we.dispose(),We.dispose(),Ee.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",Xt),Ze.removeEventListener("sessionend",ct),Ae&&(Ae.dispose(),Ae=null),Vt.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let E=pt.autoReset,H=he.enabled,G=he.autoUpdate,q=he.needsUpdate,X=he.type;st(),pt.autoReset=E,he.enabled=H,he.autoUpdate=G,he.needsUpdate=q,he.type=X}function pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ne(E){let H=E.target;H.removeEventListener("dispose",ne),Ne(H)}function Ne(E){Le(E),ke.remove(E)}function Le(E){let H=ke.get(E).programs;H!==void 0&&(H.forEach(function(G){Ee.releaseProgram(G)}),E.isShaderMaterial&&Ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,G,q,X,be){H===null&&(H=Be);let Ie=X.isMesh&&X.matrixWorld.determinant()<0,Fe=Ri(E,H,G,q,X);Ce.setMaterial(q,Ie);let ze=G.index,$e=1;if(q.wireframe===!0){if(ze=ie.getWireframeAttribute(G),ze===void 0)return;$e=2}let He=G.drawRange,qe=G.attributes.position,mt=He.start*$e,rn=(He.start+He.count)*$e;be!==null&&(mt=Math.max(mt,be.start*$e),rn=Math.min(rn,(be.start+be.count)*$e)),ze!==null?(mt=Math.max(mt,0),rn=Math.min(rn,ze.count)):qe!=null&&(mt=Math.max(mt,0),rn=Math.min(rn,qe.count));let Lt=rn-mt;if(Lt<0||Lt===1/0)return;we.setup(X,q,Fe,G,ze);let Gt,yt=re;if(ze!==null&&(Gt=le.get(ze),yt=me,yt.setIndex(Gt)),X.isMesh)q.wireframe===!0?(Ce.setLineWidth(q.wireframeLinewidth*Xe()),yt.setMode(W.LINES)):yt.setMode(W.TRIANGLES);else if(X.isLine){let Je=q.linewidth;Je===void 0&&(Je=1),Ce.setLineWidth(Je*Xe()),X.isLineSegments?yt.setMode(W.LINES):X.isLineLoop?yt.setMode(W.LINE_LOOP):yt.setMode(W.LINE_STRIP)}else X.isPoints?yt.setMode(W.POINTS):X.isSprite&&yt.setMode(W.TRIANGLES);if(X.isBatchedMesh)yt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)yt.renderInstances(mt,Lt,X.count);else if(G.isInstancedBufferGeometry){let Je=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,oi=Math.min(G.instanceCount,Je);yt.renderInstances(mt,Lt,oi)}else yt.render(mt,Lt)};function Qe(E,H,G){E.transparent===!0&&E.side===hn&&E.forceSinglePass===!1?(E.side=Qt,E.needsUpdate=!0,sn(E,H,G),E.side=Si,E.needsUpdate=!0,sn(E,H,G),E.side=hn):sn(E,H,G)}this.compile=function(E,H,G=null){G===null&&(G=E),p=De.get(G),p.init(),w.push(p),G.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),E!==G&&E.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(M._useLegacyLights);let q=new Set;return E.traverse(function(X){let be=X.material;if(be)if(Array.isArray(be))for(let Ie=0;Ie<be.length;Ie++){let Fe=be[Ie];Qe(Fe,G,X),q.add(Fe)}else Qe(be,G,X),q.add(be)}),w.pop(),p=null,q},this.compileAsync=function(E,H,G=null){let q=this.compile(E,H,G);return new Promise(X=>{function be(){if(q.forEach(function(Ie){ke.get(Ie).currentProgram.isReady()&&q.delete(Ie)}),q.size===0){X(E);return}setTimeout(be,10)}Ue.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let lt=null;function Pt(E){lt&&lt(E)}function Xt(){Vt.stop()}function ct(){Vt.start()}let Vt=new zh;Vt.setAnimationLoop(Pt),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(E){lt=E,Ze.setAnimationLoop(E),E===null?Vt.stop():Vt.start()},Ze.addEventListener("sessionstart",Xt),Ze.addEventListener("sessionend",ct),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(H),H=Ze.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,H,P),p=De.get(E,w.length),p.init(),w.push(p),Pe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),J.setFromProjectionMatrix(Pe),Se=this.localClippingEnabled,ae=Ye.init(this.clippingPlanes,Se),x=_e.get(E,u.length),x.init(),u.push(x),gn(E,H,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(te,ee),this.info.render.frame++,ae===!0&&Ye.beginShadows();let G=p.state.shadowsArray;if(he.render(G,E,H),ae===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),at.render(x,E),p.setupLights(M._useLegacyLights),H.isArrayCamera){let q=H.cameras;for(let X=0,be=q.length;X<be;X++){let Ie=q[X];Sr(x,E,Ie,Ie.viewport)}}else Sr(x,E,H);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(M,E,H),we.resetDefaultState(),j=-1,S=null,w.pop(),w.length>0?p=w[w.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function gn(E,H,G,q){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||J.intersectsSprite(E)){q&&Ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pe);let Ie=ue.update(E),Fe=E.material;Fe.visible&&x.push(E,Ie,Fe,G,Ge.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||J.intersectsObject(E))){let Ie=ue.update(E),Fe=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ge.copy(E.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Ge.copy(Ie.boundingSphere.center)),Ge.applyMatrix4(E.matrixWorld).applyMatrix4(Pe)),Array.isArray(Fe)){let ze=Ie.groups;for(let $e=0,He=ze.length;$e<He;$e++){let qe=ze[$e],mt=Fe[qe.materialIndex];mt&&mt.visible&&x.push(E,Ie,mt,G,Ge.z,qe)}}else Fe.visible&&x.push(E,Ie,Fe,G,Ge.z,null)}}let be=E.children;for(let Ie=0,Fe=be.length;Ie<Fe;Ie++)gn(be[Ie],H,G,q)}function Sr(E,H,G,q){let X=E.opaque,be=E.transmissive,Ie=E.transparent;p.setupLightsView(G),ae===!0&&Ye.setGlobalState(M.clippingPlanes,G),be.length>0&&Vs(X,be,H,G),q&&Ce.viewport(R.copy(q)),X.length>0&&Ut(X,H,G),be.length>0&&Ut(be,H,G),Ie.length>0&&Ut(Ie,H,G),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Vs(E,H,G,q){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let be=Oe.isWebGL2;Ae===null&&(Ae=new cn(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")?Un:Mi,minFilter:cr,samples:be?4:0})),M.getDrawingBufferSize(Ve),be?Ae.setSize(Ve.x,Ve.y):Ae.setSize(ha(Ve.x),ha(Ve.y));let Ie=M.getRenderTarget();M.setRenderTarget(Ae),M.getClearColor(de),N=M.getClearAlpha(),N<1&&M.setClearColor(16777215,.5),M.clear();let Fe=M.toneMapping;M.toneMapping=yi,Ut(E,G,q),T.updateMultisampleRenderTarget(Ae),T.updateRenderTargetMipmap(Ae);let ze=!1;for(let $e=0,He=H.length;$e<He;$e++){let qe=H[$e],mt=qe.object,rn=qe.geometry,Lt=qe.material,Gt=qe.group;if(Lt.side===hn&&mt.layers.test(q.layers)){let yt=Lt.side;Lt.side=Qt,Lt.needsUpdate=!0,Gs(mt,G,q,rn,Lt,Gt),Lt.side=yt,Lt.needsUpdate=!0,ze=!0}}ze===!0&&(T.updateMultisampleRenderTarget(Ae),T.updateRenderTargetMipmap(Ae)),M.setRenderTarget(Ie),M.setClearColor(de,N),M.toneMapping=Fe}function Ut(E,H,G){let q=H.isScene===!0?H.overrideMaterial:null;for(let X=0,be=E.length;X<be;X++){let Ie=E[X],Fe=Ie.object,ze=Ie.geometry,$e=q===null?Ie.material:q,He=Ie.group;Fe.layers.test(G.layers)&&Gs(Fe,H,G,ze,$e,He)}}function Gs(E,H,G,q,X,be){E.onBeforeRender(M,H,G,q,X,be),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(M,H,G,q,E,be),X.transparent===!0&&X.side===hn&&X.forceSinglePass===!1?(X.side=Qt,X.needsUpdate=!0,M.renderBufferDirect(G,H,q,X,E,be),X.side=Si,X.needsUpdate=!0,M.renderBufferDirect(G,H,q,X,E,be),X.side=hn):M.renderBufferDirect(G,H,q,X,E,be),E.onAfterRender(M,H,G,q,X,be)}function sn(E,H,G){H.isScene!==!0&&(H=Be);let q=ke.get(E),X=p.state.lights,be=p.state.shadowsArray,Ie=X.state.version,Fe=Ee.getParameters(E,X.state,be,H,G),ze=Ee.getProgramCacheKey(Fe),$e=q.programs;q.environment=E.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(E.isMeshStandardMaterial?V:v).get(E.envMap||q.environment),$e===void 0&&(E.addEventListener("dispose",ne),$e=new Map,q.programs=$e);let He=$e.get(ze);if(He!==void 0){if(q.currentProgram===He&&q.lightsStateVersion===Ie)return br(E,Fe),He}else Fe.uniforms=Ee.getUniforms(E),E.onBuild(G,Fe,M),E.onBeforeCompile(Fe,M),He=Ee.acquireProgram(Fe,ze),$e.set(ze,He),q.uniforms=Fe.uniforms;let qe=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(qe.clippingPlanes=Ye.uniform),br(E,Fe),q.needsLights=ka(E),q.lightsStateVersion=Ie,q.needsLights&&(qe.ambientLightColor.value=X.state.ambient,qe.lightProbe.value=X.state.probe,qe.directionalLights.value=X.state.directional,qe.directionalLightShadows.value=X.state.directionalShadow,qe.spotLights.value=X.state.spot,qe.spotLightShadows.value=X.state.spotShadow,qe.rectAreaLights.value=X.state.rectArea,qe.ltc_1.value=X.state.rectAreaLTC1,qe.ltc_2.value=X.state.rectAreaLTC2,qe.pointLights.value=X.state.point,qe.pointLightShadows.value=X.state.pointShadow,qe.hemisphereLights.value=X.state.hemi,qe.directionalShadowMap.value=X.state.directionalShadowMap,qe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,qe.spotShadowMap.value=X.state.spotShadowMap,qe.spotLightMatrix.value=X.state.spotLightMatrix,qe.spotLightMap.value=X.state.spotLightMap,qe.pointShadowMap.value=X.state.pointShadowMap,qe.pointShadowMatrix.value=X.state.pointShadowMatrix),q.currentProgram=He,q.uniformsList=null,He}function Ws(E){if(E.uniformsList===null){let H=E.currentProgram.getUniforms();E.uniformsList=Ps.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function br(E,H){let G=ke.get(E);G.outputColorSpace=H.outputColorSpace,G.batching=H.batching,G.instancing=H.instancing,G.instancingColor=H.instancingColor,G.skinning=H.skinning,G.morphTargets=H.morphTargets,G.morphNormals=H.morphNormals,G.morphColors=H.morphColors,G.morphTargetsCount=H.morphTargetsCount,G.numClippingPlanes=H.numClippingPlanes,G.numIntersection=H.numClipIntersection,G.vertexAlphas=H.vertexAlphas,G.vertexTangents=H.vertexTangents,G.toneMapping=H.toneMapping}function Ri(E,H,G,q,X){H.isScene!==!0&&(H=Be),T.resetTextureUnits();let be=H.fog,Ie=q.isMeshStandardMaterial?H.environment:null,Fe=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ni,ze=(q.isMeshStandardMaterial?V:v).get(q.envMap||Ie),$e=q.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,He=!!G.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),qe=!!G.morphAttributes.position,mt=!!G.morphAttributes.normal,rn=!!G.morphAttributes.color,Lt=yi;q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Lt=M.toneMapping);let Gt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,yt=Gt!==void 0?Gt.length:0,Je=ke.get(q),oi=p.state.lights;if(ae===!0&&(Se===!0||E!==S)){let Dt=E===S&&q.id===j;Ye.setState(q,E,Dt)}let gt=!1;q.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==oi.state.version||Je.outputColorSpace!==Fe||X.isBatchedMesh&&Je.batching===!1||!X.isBatchedMesh&&Je.batching===!0||X.isInstancedMesh&&Je.instancing===!1||!X.isInstancedMesh&&Je.instancing===!0||X.isSkinnedMesh&&Je.skinning===!1||!X.isSkinnedMesh&&Je.skinning===!0||X.isInstancedMesh&&Je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Je.instancingColor===!1&&X.instanceColor!==null||Je.envMap!==ze||q.fog===!0&&Je.fog!==be||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ye.numPlanes||Je.numIntersection!==Ye.numIntersection)||Je.vertexAlphas!==$e||Je.vertexTangents!==He||Je.morphTargets!==qe||Je.morphNormals!==mt||Je.morphColors!==rn||Je.toneMapping!==Lt||Oe.isWebGL2===!0&&Je.morphTargetsCount!==yt)&&(gt=!0):(gt=!0,Je.__version=q.version);let bn=Je.currentProgram;gt===!0&&(bn=sn(q,H,X));let Wn=!1,En=!1,Ci=!1,bt=bn.getUniforms(),Nn=Je.uniforms;if(Ce.useProgram(bn.program)&&(Wn=!0,En=!0,Ci=!0),q.id!==j&&(j=q.id,En=!0),Wn||S!==E){bt.setValue(W,"projectionMatrix",E.projectionMatrix),bt.setValue(W,"viewMatrix",E.matrixWorldInverse);let Dt=bt.map.cameraPosition;Dt!==void 0&&Dt.setValue(W,Ge.setFromMatrixPosition(E.matrixWorld)),Oe.logarithmicDepthBuffer&&bt.setValue(W,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&bt.setValue(W,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,En=!0,Ci=!0)}if(X.isSkinnedMesh){bt.setOptional(W,X,"bindMatrix"),bt.setOptional(W,X,"bindMatrixInverse");let Dt=X.skeleton;Dt&&(Oe.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),bt.setValue(W,"boneTexture",Dt.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(bt.setOptional(W,X,"batchingTexture"),bt.setValue(W,"batchingTexture",X._matricesTexture,T));let li=G.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0&&Oe.isWebGL2===!0)&&C.update(X,G,bn),(En||Je.receiveShadow!==X.receiveShadow)&&(Je.receiveShadow=X.receiveShadow,bt.setValue(W,"receiveShadow",X.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Nn.envMap.value=ze,Nn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),En&&(bt.setValue(W,"toneMappingExposure",M.toneMappingExposure),Je.needsLights&&ji(Nn,Ci),be&&q.fog===!0&&ye.refreshFogUniforms(Nn,be),ye.refreshMaterialUniforms(Nn,q,se,Z,Ae),Ps.upload(W,Ws(Je),Nn,T)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ps.upload(W,Ws(Je),Nn,T),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&bt.setValue(W,"center",X.center),bt.setValue(W,"modelViewMatrix",X.modelViewMatrix),bt.setValue(W,"normalMatrix",X.normalMatrix),bt.setValue(W,"modelMatrix",X.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Dt=q.uniformsGroups;for(let ci=0,Xs=Dt.length;ci<Xs;ci++)if(Oe.isWebGL2){let Qi=Dt[ci];We.update(Qi,bn),We.bind(Qi,bn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bn}function ji(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function ka(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,H,G){ke.get(E.texture).__webglTexture=H,ke.get(E.depthTexture).__webglTexture=G;let q=ke.get(E);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=G===void 0,q.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,H){let G=ke.get(E);G.__webglFramebuffer=H,G.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,G=0){P=E,O=H,D=G;let q=!0,X=null,be=!1,Ie=!1;if(E){let ze=ke.get(E);ze.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(W.FRAMEBUFFER,null),q=!1):ze.__webglFramebuffer===void 0?T.setupRenderTarget(E):ze.__hasExternalTextures&&T.rebindTextures(E,ke.get(E.texture).__webglTexture,ke.get(E.depthTexture).__webglTexture);let $e=E.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ie=!0);let He=ke.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(He[H])?X=He[H][G]:X=He[H],be=!0):Oe.isWebGL2&&E.samples>0&&T.useMultisampledRTT(E)===!1?X=ke.get(E).__webglMultisampledFramebuffer:Array.isArray(He)?X=He[G]:X=He,R.copy(E.viewport),Y.copy(E.scissor),Q=E.scissorTest}else R.copy(oe).multiplyScalar(se).floor(),Y.copy(ce).multiplyScalar(se).floor(),Q=ve;if(Ce.bindFramebuffer(W.FRAMEBUFFER,X)&&Oe.drawBuffers&&q&&Ce.drawBuffers(E,X),Ce.viewport(R),Ce.scissor(Y),Ce.setScissorTest(Q),be){let ze=ke.get(E.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+H,ze.__webglTexture,G)}else if(Ie){let ze=ke.get(E.texture),$e=H||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,ze.__webglTexture,G||0,$e)}j=-1},this.readRenderTargetPixels=function(E,H,G,q,X,be,Ie){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe){Ce.bindFramebuffer(W.FRAMEBUFFER,Fe);try{let ze=E.texture,$e=ze.format,He=ze.type;if($e!==Ln&&fe.convert($e)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let qe=He===Un&&(Ue.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&Ue.has("EXT_color_buffer_float"));if(He!==Mi&&fe.convert(He)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===vi&&(Oe.isWebGL2||Ue.has("OES_texture_float")||Ue.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-q&&G>=0&&G<=E.height-X&&W.readPixels(H,G,q,X,fe.convert($e),fe.convert(He),be)}finally{let ze=P!==null?ke.get(P).__webglFramebuffer:null;Ce.bindFramebuffer(W.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(E,H,G=0){let q=Math.pow(2,-G),X=Math.floor(H.image.width*q),be=Math.floor(H.image.height*q);T.setTexture2D(H,0),W.copyTexSubImage2D(W.TEXTURE_2D,G,0,0,E.x,E.y,X,be),Ce.unbindTexture()},this.copyTextureToTexture=function(E,H,G,q=0){let X=H.image.width,be=H.image.height,Ie=fe.convert(G.format),Fe=fe.convert(G.type);T.setTexture2D(G,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,G.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,G.unpackAlignment),H.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,q,E.x,E.y,X,be,Ie,Fe,H.image.data):H.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,q,E.x,E.y,H.mipmaps[0].width,H.mipmaps[0].height,Ie,H.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,q,E.x,E.y,Ie,Fe,H.image),q===0&&G.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(E,H,G,q,X=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let be=E.max.x-E.min.x+1,Ie=E.max.y-E.min.y+1,Fe=E.max.z-E.min.z+1,ze=fe.convert(q.format),$e=fe.convert(q.type),He;if(q.isData3DTexture)T.setTexture3D(q,0),He=W.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)T.setTexture2DArray(q,0),He=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,q.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,q.unpackAlignment);let qe=W.getParameter(W.UNPACK_ROW_LENGTH),mt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),rn=W.getParameter(W.UNPACK_SKIP_PIXELS),Lt=W.getParameter(W.UNPACK_SKIP_ROWS),Gt=W.getParameter(W.UNPACK_SKIP_IMAGES),yt=G.isCompressedTexture?G.mipmaps[X]:G.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,yt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,yt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,E.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,E.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,E.min.z),G.isDataTexture||G.isData3DTexture?W.texSubImage3D(He,X,H.x,H.y,H.z,be,Ie,Fe,ze,$e,yt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(He,X,H.x,H.y,H.z,be,Ie,Fe,ze,yt.data)):W.texSubImage3D(He,X,H.x,H.y,H.z,be,Ie,Fe,ze,$e,yt),W.pixelStorei(W.UNPACK_ROW_LENGTH,qe),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,mt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,rn),W.pixelStorei(W.UNPACK_SKIP_ROWS,Lt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Gt),X===0&&q.generateMipmaps&&W.generateMipmap(He),Ce.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),Ce.unbindTexture()},this.resetState=function(){O=0,D=0,P=null,Ce.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Rl?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===La?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===St?Gi:Ih}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Gi?St:ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ol=class extends dr{};ol.prototype.isWebGL1Renderer=!0;var Ma=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},ll=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},an=new L,Sa=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vn=class extends bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ms,Qs=new L,Ss=new L,bs=new L,Es=new Te,er=new Te,Xh=new dt,jr=new L,tr=new L,Qr=new L,ph=new Te,No=new Te,mh=new Te,si=class extends tn{constructor(e=new Vn){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new pn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ll(t,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new Sa(n,3,0,!1)),Ms.setAttribute("uv",new Sa(n,2,3,!1))}this.geometry=Ms,this.material=e,this.center=new Te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),Xh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-bs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ea(jr.set(-.5,-.5,0),bs,o,Ss,s,r),ea(tr.set(.5,-.5,0),bs,o,Ss,s,r),ea(Qr.set(.5,.5,0),bs,o,Ss,s,r),ph.set(0,0),No.set(1,0),mh.set(1,1);let a=e.ray.intersectTriangle(jr,tr,Qr,!1,Qs);if(a===null&&(ea(tr.set(-.5,.5,0),bs,o,Ss,s,r),No.set(0,1),a=e.ray.intersectTriangle(jr,Qr,tr,!1,Qs),a===null))return;let c=e.ray.origin.distanceTo(Qs);c<e.near||c>e.far||t.push({distance:c,point:Qs.clone(),uv:Hi.getInterpolation(Qs,jr,tr,Qr,ph,No,mh,new Te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ea(i,e,t,n,s,r){Es.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(er.x=r*Es.x-s*Es.y,er.y=s*Es.x+r*Es.y):er.copy(Es),i.copy(e),i.x+=er.x,i.y+=er.y,i.applyMatrix4(Xh)}var Fs=class extends un{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ts=new dt,gh=new dt,ta=[],_h=new ii,c0=new dt,nr=new ot,ir=new Wi,Yt=class extends ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fs(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,c0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),_h.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(_h)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),ir.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),e.ray.intersectsSphere(ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),gh.multiplyMatrices(n,Ts),nr.matrixWorld=gh,nr.raycast(e,ta);for(let o=0,a=ta.length;o<a;o++){let c=ta[o];c.instanceId=r,c.object=this,t.push(c)}ta.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Gn=class extends Sn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pr=class i extends pn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],m=[],_=0,x=[],p=n/2,u=0;w(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new It(f,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(m,2));function w(){let U=new L,O=new L,D=0,P=(t-e)/n;for(let j=0;j<=r;j++){let S=[],R=j/r,Y=R*(t-e)+e;for(let Q=0;Q<=s;Q++){let de=Q/s,N=de*c+a,k=Math.sin(N),Z=Math.cos(N);O.x=Y*k,O.y=-R*n+p,O.z=Y*Z,f.push(O.x,O.y,O.z),U.set(k,P,Z).normalize(),d.push(U.x,U.y,U.z),m.push(de,1-R),S.push(_++)}x.push(S)}for(let j=0;j<s;j++)for(let S=0;S<r;S++){let R=x[S][j],Y=x[S+1][j],Q=x[S+1][j+1],de=x[S][j+1];h.push(R,Y,de),h.push(Y,Q,de),D+=6}l.addGroup(u,D,0),u+=D}function M(U){let O=_,D=new Te,P=new L,j=0,S=U===!0?e:t,R=U===!0?1:-1;for(let Q=1;Q<=s;Q++)f.push(0,p*R,0),d.push(0,R,0),m.push(.5,.5),_++;let Y=_;for(let Q=0;Q<=s;Q++){let N=Q/s*c+a,k=Math.cos(N),Z=Math.sin(N);P.x=S*Z,P.y=p*R,P.z=S*k,f.push(P.x,P.y,P.z),d.push(0,R,0),D.x=k*.5+.5,D.y=Z*.5*R+.5,m.push(D.x,D.y),_++}for(let Q=0;Q<s;Q++){let de=O+Q,N=Y+Q;U===!0?h.push(N,N+1,de):h.push(N+1,N,de),j+=3}l.addGroup(u,j,U===!0?1:2),u+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bs=class i extends pr{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var mr=class i extends pn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new L,d=new L,m=[],_=[],x=[],p=[];for(let u=0;u<=n;u++){let w=[],M=u/n,U=0;u===0&&o===0?U=.5/t:u===n&&c===Math.PI&&(U=-.5/t);for(let O=0;O<=t;O++){let D=O/t;f.x=-e*Math.cos(s+D*r)*Math.sin(o+M*a),f.y=e*Math.cos(o+M*a),f.z=e*Math.sin(s+D*r)*Math.sin(o+M*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),p.push(D+U,1-M),w.push(l++)}h.push(w)}for(let u=0;u<n;u++)for(let w=0;w<t;w++){let M=h[u][w+1],U=h[u][w],O=h[u+1][w],D=h[u+1][w+1];(u!==0||o>0)&&m.push(M,U,D),(u!==n-1||c<Math.PI)&&m.push(U,O,D)}this.setIndex(m),this.setAttribute("position",new It(_,3)),this.setAttribute("normal",new It(x,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ba=class i extends pn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new L,f=new L,d=new L;for(let m=0;m<=n;m++)for(let _=0;_<=s;_++){let x=_/s*r,p=m/n*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(x),f.y=(e+t*Math.cos(p))*Math.sin(x),f.z=t*Math.sin(p),a.push(f.x,f.y,f.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(f,h).normalize(),c.push(d.x,d.y,d.z),l.push(_/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=s;_++){let x=(s+1)*m+_-1,p=(s+1)*(m-1)+_-1,u=(s+1)*(m-1)+_,w=(s+1)*m+_;o.push(x,p,w),o.push(p,u,w)}this.setIndex(o),this.setAttribute("position",new It(a,3)),this.setAttribute("normal",new It(c,3)),this.setAttribute("uv",new It(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ea=class extends Rt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var nn=class extends bi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uh,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function na(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function h0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var zs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cl=class extends zs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tc,endingEnd:Tc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case wc:r=e,a=2*t-n;break;case Ac:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case wc:o=e,c=2*n-t;break;case Ac:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,_=(n-t)/(s-t),x=_*_,p=x*_,u=-d*p+2*d*x-d*_,w=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*_+1,M=(-1-m)*p+(1.5+m)*x+.5*_,U=m*p-m*x;for(let O=0;O!==a;++O)r[O]=u*o[h+O]+w*o[l+O]+M*o[c+O]+U*o[f+O];return r}},hl=class extends zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*f+o[c+d]*h;return r}},ul=class extends zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Dn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=na(t,this.TimeBufferType),this.values=na(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:na(e.times,Array),values:na(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case sa:t=this.InterpolantFactoryMethodDiscrete;break;case ra:t=this.InterpolantFactoryMethodLinear;break;case uo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sa;case this.InterpolantFactoryMethodLinear:return ra;case this.InterpolantFactoryMethodSmooth:return uo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&h0(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===uo,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*n,d=f-n,m=f+n;for(let _=0;_!==n;++_){let x=t[f+_];if(x!==t[d+_]||x!==t[m+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[f+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=ra;var Zi=class extends Dn{};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=sa;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends Dn{};fl.prototype.ValueTypeName="color";var dl=class extends Dn{};dl.prototype.ValueTypeName="number";var pl=class extends zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)en.slerpFlat(r,0,o,l-a,o,l,c);return r}},gr=class extends Dn{InterpolantFactoryMethodLinear(e){return new pl(this.times,this.values,this.getValueSize(),e)}};gr.prototype.ValueTypeName="quaternion";gr.prototype.DefaultInterpolation=ra;gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Dn{};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=sa;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends Dn{};ml.prototype.ValueTypeName="vector";var gl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){let m=l[f],_=l[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}},u0=new gl,_l=class{constructor(e){this.manager=e!==void 0?e:u0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};_l.DEFAULT_MATERIAL_NAME="__DEFAULT";var _r=class extends tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ta=class extends _r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Oo=new dt,xh=new L,vh=new L,wa=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(xh),vh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vh),t.updateMatrixWorld(),Oo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var yh=new dt,sr=new L,Fo=new L,xl=class extends wa{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),sr.setFromMatrixPosition(e.matrixWorld),n.position.copy(sr),Fo.copy(n.position),Fo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fo),n.updateMatrixWorld(),s.makeTranslation(-sr.x,-sr.y,-sr.z),yh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yh)}},xr=class extends _r{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},vl=class extends wa{constructor(){super(new Os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Aa=class extends _r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new vl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ra=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Mh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Mh(){return(typeof performance>"u"?Date:performance).now()}var Ll="\\[\\]\\.:\\/",f0=new RegExp("["+Ll+"]","g"),Il="[^"+Ll+"]",d0="[^"+Ll.replace("\\.","")+"]",p0=/((?:WC+[\/:])*)/.source.replace("WC",Il),m0=/(WCOD+)?/.source.replace("WCOD",d0),g0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Il),_0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Il),x0=new RegExp("^"+p0+m0+g0+_0+"$"),v0=["material","materials","bones","map"],yl=class{constructor(e,t,n){let s=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Tt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(f0,"")}static parseTrackName(e){let t=x0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);v0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=yl;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var P0=new Float32Array(1);var Ca=class{constructor(e,t,n=0,s=1/0){this.ray=new Ds(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ur,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ml(e,this,n,t),n.sort(Sh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ml(e[s],this,n,t);return n.sort(Sh),n}};function Sh(i,e){return i.distance-e.distance}function Ml(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Ml(s[r],e,t,!0)}}var vr=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var qh={type:"change"},Ul={type:"start"},Yh={type:"end"},Ua=new Ds,Zh=new Cn,M0=Math.cos(70*Nh.DEG2RAD),Da=class extends kn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN},this.touches={ONE:$i.ROTATE,TWO:$i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",ue),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ue),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(qh),n.update(),r=s.NONE},this.update=(function(){let C=new L,re=new en().setFromUnitVectors(e.up,new L(0,1,0)),me=re.clone().invert(),fe=new L,we=new en,We=new L,st=2*Math.PI;return function(ge=null){let I=n.object.position;C.copy(I).sub(n.target),C.applyQuaternion(re),a.setFromVector3(C),n.autoRotate&&r===s.NONE&&Y(S(ge)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let pe=n.minAzimuthAngle,ne=n.maxAzimuthAngle;isFinite(pe)&&isFinite(ne)&&(pe<-Math.PI?pe+=st:pe>Math.PI&&(pe-=st),ne<-Math.PI?ne+=st:ne>Math.PI&&(ne-=st),pe<=ne?a.theta=Math.max(pe,Math.min(ne,a.theta)):a.theta=a.theta>(pe+ne)/2?Math.max(pe,a.theta):Math.min(ne,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&D||n.object.isOrthographicCamera?a.radius=ee(a.radius):a.radius=ee(a.radius*l),C.setFromSpherical(a),C.applyQuaternion(me),I.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let Ne=!1;if(n.zoomToCursor&&D){let Le=null;if(n.object.isPerspectiveCamera){let Qe=C.length();Le=ee(Qe*l);let lt=Qe-Le;n.object.position.addScaledVector(U,lt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let Qe=new L(O.x,O.y,0);Qe.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ne=!0;let lt=new L(O.x,O.y,0);lt.unproject(n.object),n.object.position.sub(lt).add(Qe),n.object.updateMatrixWorld(),Le=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Le!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Le).add(n.object.position):(Ua.origin.copy(n.object.position),Ua.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ua.direction))<M0?e.lookAt(n.target):(Zh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ua.intersectPlane(Zh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ne=!0);return l=1,D=!1,Ne||fe.distanceToSquared(n.object.position)>o||8*(1-we.dot(n.object.quaternion))>o||We.distanceToSquared(n.target)>0?(n.dispatchEvent(qh),fe.copy(n.object.position),we.copy(n.object.quaternion),We.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",_e),n.domElement.removeEventListener("pointerdown",ke),n.domElement.removeEventListener("pointercancel",v),n.domElement.removeEventListener("wheel",ie),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",v),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ue),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new vr,c=new vr,l=1,h=new L,f=new Te,d=new Te,m=new Te,_=new Te,x=new Te,p=new Te,u=new Te,w=new Te,M=new Te,U=new L,O=new Te,D=!1,P=[],j={};function S(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function R(C){let re=Math.abs(C)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*re)}function Y(C){c.theta-=C}function Q(C){c.phi-=C}let de=(function(){let C=new L;return function(me,fe){C.setFromMatrixColumn(fe,0),C.multiplyScalar(-me),h.add(C)}})(),N=(function(){let C=new L;return function(me,fe){n.screenSpacePanning===!0?C.setFromMatrixColumn(fe,1):(C.setFromMatrixColumn(fe,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(me),h.add(C)}})(),k=(function(){let C=new L;return function(me,fe){let we=n.domElement;if(n.object.isPerspectiveCamera){let We=n.object.position;C.copy(We).sub(n.target);let st=C.length();st*=Math.tan(n.object.fov/2*Math.PI/180),de(2*me*st/we.clientHeight,n.object.matrix),N(2*fe*st/we.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(de(me*(n.object.right-n.object.left)/n.object.zoom/we.clientWidth,n.object.matrix),N(fe*(n.object.top-n.object.bottom)/n.object.zoom/we.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function Z(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function se(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function te(C,re){if(!n.zoomToCursor)return;D=!0;let me=n.domElement.getBoundingClientRect(),fe=C-me.left,we=re-me.top,We=me.width,st=me.height;O.x=fe/We*2-1,O.y=-(we/st)*2+1,U.set(O.x,O.y,1).unproject(n.object).sub(n.object.position).normalize()}function ee(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function oe(C){f.set(C.clientX,C.clientY)}function ce(C){te(C.clientX,C.clientX),u.set(C.clientX,C.clientY)}function ve(C){_.set(C.clientX,C.clientY)}function J(C){d.set(C.clientX,C.clientY),m.subVectors(d,f).multiplyScalar(n.rotateSpeed);let re=n.domElement;Y(2*Math.PI*m.x/re.clientHeight),Q(2*Math.PI*m.y/re.clientHeight),f.copy(d),n.update()}function ae(C){w.set(C.clientX,C.clientY),M.subVectors(w,u),M.y>0?Z(R(M.y)):M.y<0&&se(R(M.y)),u.copy(w),n.update()}function Se(C){x.set(C.clientX,C.clientY),p.subVectors(x,_).multiplyScalar(n.panSpeed),k(p.x,p.y),_.copy(x),n.update()}function Ae(C){te(C.clientX,C.clientY),C.deltaY<0?se(R(C.deltaY)):C.deltaY>0&&Z(R(C.deltaY)),n.update()}function Pe(C){let re=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?Q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),re=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?Q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),re=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),re=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),re=!0;break}re&&(C.preventDefault(),n.update())}function Ve(C){if(P.length===1)f.set(C.pageX,C.pageY);else{let re=at(C),me=.5*(C.pageX+re.x),fe=.5*(C.pageY+re.y);f.set(me,fe)}}function Ge(C){if(P.length===1)_.set(C.pageX,C.pageY);else{let re=at(C),me=.5*(C.pageX+re.x),fe=.5*(C.pageY+re.y);_.set(me,fe)}}function Be(C){let re=at(C),me=C.pageX-re.x,fe=C.pageY-re.y,we=Math.sqrt(me*me+fe*fe);u.set(0,we)}function Xe(C){n.enableZoom&&Be(C),n.enablePan&&Ge(C)}function W(C){n.enableZoom&&Be(C),n.enableRotate&&Ve(C)}function Ct(C){if(P.length==1)d.set(C.pageX,C.pageY);else{let me=at(C),fe=.5*(C.pageX+me.x),we=.5*(C.pageY+me.y);d.set(fe,we)}m.subVectors(d,f).multiplyScalar(n.rotateSpeed);let re=n.domElement;Y(2*Math.PI*m.x/re.clientHeight),Q(2*Math.PI*m.y/re.clientHeight),f.copy(d)}function Ue(C){if(P.length===1)x.set(C.pageX,C.pageY);else{let re=at(C),me=.5*(C.pageX+re.x),fe=.5*(C.pageY+re.y);x.set(me,fe)}p.subVectors(x,_).multiplyScalar(n.panSpeed),k(p.x,p.y),_.copy(x)}function Oe(C){let re=at(C),me=C.pageX-re.x,fe=C.pageY-re.y,we=Math.sqrt(me*me+fe*fe);w.set(0,we),M.set(0,Math.pow(w.y/u.y,n.zoomSpeed)),Z(M.y),u.copy(w);let We=(C.pageX+re.x)*.5,st=(C.pageY+re.y)*.5;te(We,st)}function Ce(C){n.enableZoom&&Oe(C),n.enablePan&&Ue(C)}function pt(C){n.enableZoom&&Oe(C),n.enableRotate&&Ct(C)}function ke(C){n.enabled!==!1&&(P.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",T),n.domElement.addEventListener("pointerup",v)),De(C),C.pointerType==="touch"?Ee(C):V(C))}function T(C){n.enabled!==!1&&(C.pointerType==="touch"?ye(C):le(C))}function v(C){Ye(C),P.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",v)),n.dispatchEvent(Yh),r=s.NONE}function V(C){let re;switch(C.button){case 0:re=n.mouseButtons.LEFT;break;case 1:re=n.mouseButtons.MIDDLE;break;case 2:re=n.mouseButtons.RIGHT;break;default:re=-1}switch(re){case Ki.DOLLY:if(n.enableZoom===!1)return;ce(C),r=s.DOLLY;break;case Ki.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;ve(C),r=s.PAN}else{if(n.enableRotate===!1)return;oe(C),r=s.ROTATE}break;case Ki.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;oe(C),r=s.ROTATE}else{if(n.enablePan===!1)return;ve(C),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ul)}function le(C){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;J(C);break;case s.DOLLY:if(n.enableZoom===!1)return;ae(C);break;case s.PAN:if(n.enablePan===!1)return;Se(C);break}}function ie(C){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(C.preventDefault(),n.dispatchEvent(Ul),Ae(C),n.dispatchEvent(Yh))}function ue(C){n.enabled===!1||n.enablePan===!1||Pe(C)}function Ee(C){switch(he(C),P.length){case 1:switch(n.touches.ONE){case $i.ROTATE:if(n.enableRotate===!1)return;Ve(C),r=s.TOUCH_ROTATE;break;case $i.PAN:if(n.enablePan===!1)return;Ge(C),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case $i.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Xe(C),r=s.TOUCH_DOLLY_PAN;break;case $i.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;W(C),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ul)}function ye(C){switch(he(C),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ct(C),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Ue(C),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(C),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pt(C),n.update();break;default:r=s.NONE}}function _e(C){n.enabled!==!1&&C.preventDefault()}function De(C){P.push(C.pointerId)}function Ye(C){delete j[C.pointerId];for(let re=0;re<P.length;re++)if(P[re]==C.pointerId){P.splice(re,1);return}}function he(C){let re=j[C.pointerId];re===void 0&&(re=new Te,j[C.pointerId]=re),re.set(C.pageX,C.pageY)}function at(C){let re=C.pointerId===P[0]?P[1]:P[0];return j[re]}n.domElement.addEventListener("contextmenu",_e),n.domElement.addEventListener("pointerdown",ke),n.domElement.addEventListener("pointercancel",v),n.domElement.addEventListener("wheel",ie,{passive:!1}),this.update()}};var Na={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var mn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},S0=new Os(-1,1,1,-1,0,1),Dl=class extends pn{constructor(){super(),this.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new It([0,2,0,0,2,0],2))}},b0=new Dl,Ti=class{constructor(e){this._mesh=new ot(b0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,S0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Oa=class extends mn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Rt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ei.clone(e.uniforms),this.material=new Rt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ti(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Mr=class extends mn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Fa=class extends mn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ba=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Te);this._width=n.width,this._height=n.height,t=new cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Oa(Na),this.copyPass.material.blending=Hn,this.clock=new Ra}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Mr!==void 0&&(o instanceof Mr?n=!0:o instanceof Fa&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var za=class extends mn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Jh={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ks=class i extends mn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Te(e.x,e.y):new Te(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new cn(r,o,{type:Un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let d=new cn(r,o,{type:Un});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let m=new cn(r,o,{type:Un});m.texture.name="UnrealBloomPass.v"+f,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=Jh;this.highPassUniforms=Ei.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Te(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Na;this.copyUniforms=Ei.clone(h.uniforms),this.blendMaterial=new Rt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ti,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new vt,this.fsQuad=new Ti(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Te(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Rt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Te(.5,.5)},direction:{value:new Te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Rt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ks.BlurDirectionX=new Te(1,0);ks.BlurDirectionY=new Te(0,1);var Kh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ha=class extends mn{constructor(){super();let e=Kh;this.uniforms=Ei.clone(e.uniforms),this.material=new Ea({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ti(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===El?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Tl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===yr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wl&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var wi=Math.PI*2;function E0(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}var ri=9,Ai=14,$h=4,ai=Ai+$h,Zt=ri*ai/2,At=Zt-ai*1.4,T0=`
attribute float aSeed; varying vec3 vW; varying vec3 vN; varying vec3 vC; varying float vS; varying float vTop; varying float vBot;
void main(){
  vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
  vW = w.xyz; vN = normalize(mat3(modelMatrix * instanceMatrix) * normal); vC = instanceColor; vS = aSeed;
  vTop = (modelMatrix * instanceMatrix * vec4(0.0, 0.5, 0.0, 1.0)).y; vBot = (modelMatrix * instanceMatrix * vec4(0.0, -0.5, 0.0, 1.0)).y;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,w0=`
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
}`,A0=`
uniform vec3 uFog; uniform float uFogD; uniform float uPitch; uniform float uBlk; uniform float uHalf; uniform float uBeach; uniform float uTime; uniform float uFlash;
varying vec3 vW;
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main(){
  vec2 p = vW.xz; vec2 id = floor(p), f = fract(p);
  float seam = smoothstep(0., .06, min(min(f.x, 1. - f.x), min(f.y, 1. - f.y)));
  vec2 q = mod(p + uHalf, uPitch);
  float road = step(uBlk, q.x) + step(uBlk, q.y);
  float side = (step(uBlk - 1., q.x) * step(q.x, uBlk) + step(uBlk - 1., q.y) * step(q.y, uBlk) + step(0., q.x) * step(q.x, 1.) + step(0., q.y) * step(q.y, 1.));
  float r = h21(id);
  vec3 col = mix(vec3(.16, .42, .3), vec3(.2, .5, .34), r);                              // grass blocks
  if (side > .5) col = mix(vec3(.55, .52, .62), vec3(.62, .6, .7), r);                   // kerb stones
  if (road > .5) {
    col = mix(vec3(.11, .1, .16), vec3(.14, .13, .2), r);
    float cx = abs(q.x - (uBlk + uPitch) * .5), cy = abs(q.y - (uBlk + uPitch) * .5);
    if (step(uBlk, q.x) > .5 && cx < .12 && fract(p.y * .25) < .5 && step(uBlk, q.y) < .5) col = vec3(.95, .78, .3);
    if (step(uBlk, q.y) > .5 && cy < .12 && fract(p.x * .25) < .5 && step(uBlk, q.x) < .5) col = vec3(.95, .78, .3);
  }
  if (abs(p.x) > uHalf || abs(p.y) > uHalf) { vec2 q2 = mod(p + 2., 36.); float rd = step(32., q2.x) + step(32., q2.y); col = rd > .5 ? mix(vec3(.12, .11, .18), vec3(.15, .14, .21), r) : mix(vec3(.15, .26, .24), vec3(.19, .31, .27), r); }
  if (p.x > uBeach) col = mix(vec3(.93, .78, .58), vec3(.98, .84, .64), r);              // sand
  col *= mix(.62, 1., seam); col = pow(col, vec3(2.2)) * (1. + uFlash * .7);
  float d = length(vW - cameraPosition), fo = 1. - exp(-uFogD * uFogD * d * d);
  gl_FragColor = vec4(mix(col * .78, uFog, fo), 1.);
}`,Nl="varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",R0=`
uniform vec3 uFog; uniform float uFogD; uniform float uTime; uniform float uFlash; varying vec3 vW;
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main(){
  vec2 id = floor(vW.xz * .5); float r = h21(id), w = .5 + .5 * sin(uTime * 1.3 + r * 6.28 + vW.x * .2);
  vec3 col = mix(vec3(.16, .2, .62), vec3(.32, .26, .78), w * .7);
  col += vec3(1., .5, .8) * pow(w, 12.) * .7;
  vec2 f = fract(vW.xz * .5); col *= mix(.8, 1., smoothstep(0., .05, min(min(f.x, 1. - f.x), min(f.y, 1. - f.y)))); col = pow(col, vec3(2.2)) * (1. + uFlash);
  float d = length(vW - cameraPosition), fo = 1. - exp(-uFogD * uFogD * d * d);
  gl_FragColor = vec4(mix(col, uFog, fo), 1.);
}`,C0=`
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
}`;function d_(i,e={}){let t=matchMedia("(pointer:coarse)").matches||innerWidth<760,n=new dr({canvas:i,antialias:!1,powerPreference:"high-performance"});n.toneMapping=yr,n.toneMappingExposure=1.05,n.outputColorSpace=St;let s=Math.min(devicePixelRatio||1,t?1.25:1.5),r=new Ma,o=new Re("#4a2a8a"),a={uFog:{value:o},uFogD:{value:.0031},uTime:{value:0},uFlash:{value:0},uMood:{value:.5}},c=new jt(42,1,.5,5200),l=E0(20261119),h=new L(-.45,.75,.5).normalize();r.add(new ot(new mr(2600,32,16),new Rt({side:Qt,depthWrite:!1,uniforms:{uTime:a.uTime,uFlash:a.uFlash,uMood:a.uMood},vertexShader:Nl,fragmentShader:C0})));let f=new ot(new Yi(5e3,5e3,1,1).rotateX(-Math.PI/2),new Rt({uniforms:{...a,uPitch:{value:ai},uBlk:{value:Ai},uHalf:{value:Zt},uBeach:{value:At}},vertexShader:Nl,fragmentShader:A0}));r.add(f);let d=new ot(new Yi(2600,5e3).rotateX(-Math.PI/2).translate(At+14+1300,.35,0),new Rt({uniforms:a,vertexShader:Nl,fragmentShader:R0}));r.add(d);let m=g=>new Rt({uniforms:{...a,uSun:{value:h},uWin:{value:g?1:0}},vertexShader:T0,fragmentShader:w0}),_=()=>new qi(1,1,1),x=[],p=e.gate&&!e.reduced?0:99;function u(g,b=!1,A=!0){let z=_(),$=new Float32Array(g.length),B=new Yt(z,m(b),g.length);A&&x.push({m:B,list:g});let y=new dt,F=new en,K=new L,Me=new L,Ke=new Xi;return g.forEach((je,tt)=>{K.set(je.x,je.y+je.h/2,je.z),Me.set(je.w,je.h,je.d),F.setFromEuler(Ke.set(0,je.ry||0,0)),y.compose(K,F,Me),B.setMatrixAt(tt,y),B.setColorAt(tt,je.c),$[tt]=l()}),z.setAttribute("aSeed",new Fs($,1)),B.instanceMatrix.needsUpdate=!0,B.instanceColor.needsUpdate=!0,B.frustumCulled=!1,r.add(B),B}let w=g=>new Re(g),M=["#ff9ec9","#9ff0d0","#c8a8ff","#ffc9a0","#a8d8ff","#fff0a8"].map(w),U=["#2a2f7a","#3a2a8a","#28407a","#4a2f8f","#232a66"].map(w),O=["#8f86b8","#a49ccb","#7a72a8","#b3a9d6"].map(w),D=[],P=[],j=[],S=[],R=g=>-Zt+g*ai+Ai/2;for(let g=0;g<ri;g++)for(let b=0;b<ri;b++){let A=R(g),z=R(b);if(A>At-2)continue;let $=Math.hypot(A,z)/Zt,B=A>At-ai-2;if(!B&&l()<.08){j.push([A,z]);continue}let y=B?2:l()<.45?1:4,F=y===1?[[0,0,Ai-2,Ai-2]]:y===2?[[0,-3.5,Ai-3,6],[0,3.5,Ai-3,6]]:[[-3.5,-3.5,6,6],[3.5,-3.5,6,6],[-3.5,3.5,6,6],[3.5,3.5,6,6]];for(let[K,Me,Ke,je]of F){let tt=Math.max(3,Math.round(Ke-l()*2)),Bt=Math.max(3,Math.round(je-l()*2)),Mt=B?5+Math.round(l()*5):$<.35?22+Math.round(l()*30):$<.65?9+Math.round(l()*14):4+Math.round(l()*7),zt=B?M[Math.floor(l()*M.length)]:Mt>20?U[Math.floor(l()*U.length)]:l()<.5?O[Math.floor(l()*O.length)]:M[Math.floor(l()*M.length)],qt=A+K,Tn=z+Me;if(D.push({x:qt,y:0,z:Tn,w:tt,d:Bt,h:Mt,c:zt}),Mt>22&&(D.push({x:qt,y:Mt,z:Tn,w:Math.max(2,tt-2),d:Math.max(2,Bt-2),h:Math.round(3+l()*6),c:zt}),l()<.6&&P.push({x:qt,y:Mt+3,z:Tn,w:.4,d:.4,h:7+l()*6,c:w("#c8c0e8")})),l()<.55&&P.push({x:qt+(l()-.5)*(tt-2),y:Mt,z:Tn+(l()-.5)*(Bt-2),w:1.6,d:1.2,h:1,c:w("#5a5280")}),S.push({x:qt,y:Mt,z:Tn,w:tt,d:Bt,big:Mt>20}),B)for(let Cr of[-1,1])P.push({x:qt-tt/2-.02,y:2+(Cr+1)*1.6,z:Tn,w:.3,d:Bt*.8,h:.35,c:w(Cr>0?"#ff4f9e":"#5fd8ff"),neon:!0})}}u(D,!0);let Y=P.filter(g=>g.neon),Q=P.filter(g=>!g.neon);u(Q);let de=new Yt(_(),new vt({toneMapped:!1}),Y.length);{let g=de,b=new dt;Y.forEach((A,z)=>{b.compose(new L(A.x,A.y,A.z),new en,new L(A.w,A.h,A.d)),g.setMatrixAt(z,b),g.setColorAt(z,A.c.clone().multiplyScalar(3))}),r.add(g)}let N=[];function k(g,b,A=1){let z=Math.round(7+l()*4),$=(l()-.5)*.25;for(let F=0;F<z;F++)N.push({x:g+$*F*F*.08,y:F*.9*A,z:b,w:.7*A,d:.7*A,h:.9*A,c:w(F%2?"#8a5a3a":"#7a4e30")});let B=g+$*z*z*.08,y=z*.9*A;for(let F=0;F<6;F++){let K=F/6*wi+l()*.4;for(let Me=1;Me<=5;Me++)N.push({x:B+Math.cos(K)*Me*.8*A,y:y+(Me<3?.3:-(Me-2)*.55)*A,z:b+Math.sin(K)*Me*.8*A,w:.75*A,d:.75*A,h:.35*A,c:w(Me%2?"#2fbf6e":"#26a85e")})}N.push({x:B,y:y-.3,z:b,w:1.1*A,d:1.1*A,h:.8*A,c:w("#2fbf6e")})}for(let g=-Zt+6;g<Zt;g+=9)k(At+5+l()*2,g+l()*3),l()<.6&&k(At+10+l()*3,g+4);let Z=j.slice().sort((g,b)=>Math.hypot(g[0]-30,g[1]-30)-Math.hypot(b[0]-30,b[1]-30))[0]||[At-30,30];for(let g of j){if(g===Z)continue;let[b,A]=g;k(b-3,A-2),k(b+3,A+3),k(b+2,A-4,.8)}for(let g=-3;g<=3;g++)k(-Zt-8,g*20+4);u(N);let se=[],te=[w("#5a5288"),w("#4a4478"),w("#6a5a94"),w("#3d3a6e"),w("#8a6a9a"),w("#2f3a70")];for(let g=-16;g<=16;g++)for(let b=-16;b<=16;b++){let A=g*36+14,z=b*36+14,$=Math.hypot(A,z);if(Math.abs(A)<Zt+26&&Math.abs(z)<Zt+26||A>At-30||$>590||l()<.12)continue;let B=1+Math.floor(l()*4),y=$/590;for(let F=0;F<B;F++){let K=6+Math.round(l()*8),Me=6+Math.round(l()*8),Ke=A+(l()-.5)*(30-K),je=z+(l()-.5)*(30-Me),tt=l()<.08+y*.1,Bt=tt?18+Math.round(l()*36):3+Math.round(l()*9);se.push({x:Ke,y:0,z:je,w:K,d:Me,h:Bt,c:te[Math.floor(l()*te.length)]})}}u(se,!0);let ee=[];for(let g=0;g<26;g++){let b=Math.PI*(.55+g/25*.95),A=640+l()*260,z=Math.cos(b)*A,$=Math.sin(b)*A*1.1,B=70+l()*110,y=50+l()*130;for(let F=0;F<5;F++){let K=1-F/5;ee.push({x:z,y:y*F/5,z:$,w:B*K+10,d:B*K*.8+10,h:y/5+.5,c:w(F>3?"#4a3c86":"#2c2160")})}}u(ee,!1,!1);let oe=34,ce=new L(At+60,21,oe),ve=[];for(let g=At+10;g<=At+74;g+=2)ve.push({x:g,y:1.4,z:oe,w:2.02,d:9,h:.5,c:w(g%4?"#9a6a48":"#8a5c3c")});for(let g=At+16;g<=At+74;g+=8)for(let b of[-4,4])ve.push({x:g,y:-1,z:oe+b,w:.7,d:.7,h:2.5,c:w("#5a3a28")});for(let g of[-4.4,4.4])for(let b=At+10;b<=At+74;b+=4)ve.push({x:b,y:1.9,z:oe+g,w:.25,d:.25,h:1.1,c:w("#e8e0f4")});for(let g of[-3,3])ve.push({x:ce.x-4,y:1.9,z:ce.z+g*1.6,w:1,d:1,h:18,c:w("#d8d0ec"),ry:0}),ve.push({x:ce.x+4,y:1.9,z:ce.z+g*1.6,w:1,d:1,h:18,c:w("#d8d0ec")});u(ve);let J=new In,ae=new In;J.position.copy(ce),r.add(J),J.add(ae);let Se=56,Ae=new Yt(_(),new vt({toneMapped:!1}),Se);Ae.frustumCulled=!1,ae.add(Ae);{let g=new dt,b=new en;for(let A=0;A<Se;A++){let z=A/Se*wi;b.setFromAxisAngle(new L(0,0,1),z),g.compose(new L(Math.cos(z)*15,Math.sin(z)*15,0),b,new L(.7,1.8,.7)),Ae.setMatrixAt(A,g),Ae.setColorAt(A,new Re(1,1,1))}}let Pe=new nn({color:"#cfc6ee"});for(let g=0;g<8;g++){let b=new ot(_(),Pe);b.scale.set(30,.35,.35),b.rotation.z=g/8*Math.PI,ae.add(b)}let Ve=new ot(_(),new vt({color:new Re(3,1.2,2.4),toneMapped:!1}));Ve.scale.set(2.2,2.2,3),ae.add(Ve);let Ge=[],Be=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#c8a8ff","#ff8a4a"];for(let g=0;g<12;g++){let b=new ot(_(),new nn({color:Be[g%Be.length]}));b.scale.set(2,2.2,2.4),J.add(b),Ge.push(b)}J.rotation.y=Math.PI/2;let Xe=new L(At+26,0,Zt+70),W=[];for(let g=0;g<9;g++)W.push({x:Xe.x,y:g*2.6,z:Xe.z,w:5-g*.25,d:5-g*.25,h:2.6,c:w(g%2?"#ff4f6e":"#f4f0ff")});W.push({x:Xe.x,y:23.4,z:Xe.z,w:3.4,d:3.4,h:2.4,c:w("#2a2060")}),u(W,!1,!1);let Ct=new ot(_(),new vt({color:new Re(4,3.6,2.4),toneMapped:!1}));Ct.scale.set(2.2,1.6,2.2),Ct.position.set(Xe.x,24.6,Xe.z),r.add(Ct);let Ue=new ot(new Bs(9,260,24,1,!0).rotateZ(-Math.PI/2).translate(130,0,0),new vt({color:new Re(1,.92,.7),transparent:!0,opacity:.07,blending:ti,depthWrite:!1,side:hn}));Ue.position.set(Xe.x,24.6,Xe.z),r.add(Ue);let Oe=g=>-Zt+g*ai-$h/2;function Ce(){let g=1+Math.floor(l()*(ri-2)),b=1+Math.floor(l()*(ri-2)),A=Math.min(ri,g+1+Math.floor(l()*3)),z=Math.min(ri,b+1+Math.floor(l()*3)),$=[[Oe(g),Oe(b)],[Oe(A),Oe(b)],[Oe(A),Oe(z)],[Oe(g),Oe(z)]].map(([F,K])=>[Math.min(F,At-1),K]);l()<.5&&$.reverse();let B=[],y=0;for(let F=0;F<4;F++){let K=$[F],Me=$[(F+1)%4],Ke=Math.hypot(Me[0]-K[0],Me[1]-K[1])||1;B.push({a:K,b:Me,l:Ke,at:y}),y+=Ke}return{segs:B,len:y}}function pt(g,b,A){b=(b%g.len+g.len)%g.len;for(let z of g.segs)if(b<=z.at+z.l){let $=(b-z.at)/z.l,B=(z.b[0]-z.a[0])/z.l,y=(z.b[1]-z.a[1])/z.l;return[z.a[0]+(z.b[0]-z.a[0])*$-y*A,z.a[1]+(z.b[1]-z.a[1])*$+B*A,Math.atan2(B,y)]}return[g.segs[0].a[0],g.segs[0].a[1],0]}let ke=t?70:120,T=6,v=[["body",[0,.55,0],[1.1,.6,2.2]],["cab",[0,1.05,-.15],[1,.45,1.2]],["w1",[.5,.25,.7],[.25,.5,.5]],["w2",[-.5,.25,.7],[.25,.5,.5]],["w3",[.5,.25,-.7],[.25,.5,.5]],["w4",[-.5,.25,-.7],[.25,.5,.5]]],V={};for(let[g]of v){let b=new Yt(_(),g==="body"?new nn:new nn({color:g==="cab"?"#1a1638":"#0c0a14"}),ke);b.frustumCulled=!1,r.add(b),V[g]=b}let le=new Yt(_(),new vt({toneMapped:!1}),ke*4);le.frustumCulled=!1,r.add(le);let ie=[];for(let g=0;g<ke;g++)ie.push({r:Ce(),d:l()*400,sp:6+l()*6,side:1,coin:null,police:g>=ke-T,color:w(["#e8e4f4","#ffcf4a","#ff7aa8","#7ad8ff","#a8ff9e","#ff9a5a"][Math.floor(l()*6)])});let ue={cars:ie},Ee=new Map;function ye(g,b,A,z,$){let B=document.createElement("canvas");B.width=256,B.height=160;let y=B.getContext("2d"),F=Ke=>{y.clearRect(0,0,256,160),y.fillStyle="rgba(12,6,36,.82)",_e(y,28,98,200,42,21),y.fill(),y.fillStyle="#fff",y.font="900 26px Inter, sans-serif",y.textAlign="center",y.fillText("$"+g.symbol.slice(0,9),128,129),y.beginPath(),y.arc(128,50,44,0,wi),y.fillStyle=z?"#ffd23f":$==="migrated"?"#5fc8ff":A?"#2ee6a6":"#ff4f9e",y.fill(),y.save(),y.beginPath(),y.arc(128,50,38,0,wi),y.clip(),Ke?y.drawImage(Ke,90,12,76,76):(y.fillStyle="#36209a",y.fillRect(90,12,76,76),y.fillStyle="#fff",y.font="900 30px Inter, sans-serif",y.fillText(g.symbol.slice(0,2),128,61)),y.restore();for(let je=0;je<5;je++){let tt=6+je*3;y.fillStyle=je<b?["#ffd23f","#ffb13f","#ff8a4a","#ff5f7a","#ff4f9e"][je]:"rgba(255,255,255,.25)",_e(y,104+je*10,158-tt,7,tt,2),y.fill()}z?(y.fillStyle="#ff4f9e",_e(y,160,4,66,28,14),y.fill(),y.fillStyle="#fff",y.font="900 18px Inter, sans-serif",y.fillText("NEW",193,25)):$==="migrated"&&(y.fillStyle="#2f8fd8",_e(y,150,4,100,28,14),y.fill(),y.fillStyle="#fff",y.font="900 16px Inter, sans-serif",y.fillText("MIGRATED",200,24)),K.needsUpdate=!0},K=new Gn(B);if(K.colorSpace=St,F(null),g.iconUrl){let Ke=new Image;Ke.crossOrigin="anonymous",Ke.referrerPolicy="no-referrer",Ke.onload=()=>F(Ke),Ke.src=g.iconUrl}let Me=new si(new Vn({map:K,depthTest:!0,transparent:!0}));return Me.scale.set(6.4,4,1),Me.renderOrder=5,Me}function _e(g,b,A,z,$,B){g.beginPath(),g.moveTo(b+B,A),g.arcTo(b+z,A,b+z,A+$,B),g.arcTo(b+z,A+$,b,A+$,B),g.arcTo(b,A+$,b,A,B),g.arcTo(b,A,b+z,A,B),g.closePath()}let De=new Map,Ye=ke-T-8;function he(g){let b=g.slice(0,Ye),A=new Set(b.map(B=>B.mint));for(let[B,y]of De)A.has(B)||(y.coin=null,De.delete(B));for(let[B,y]of Ee)A.has(B)||(r.remove(y.sp),y.sp.material.map.dispose(),y.sp.material.dispose(),Ee.delete(B));let z=ie.filter(B=>!B.police&&!B.coin);for(let B of b){let y=De.get(B.mint),F=!1;if(!y){if(y=z.shift(),!y)break;De.set(B.mint,y),F=!0}y.coin=B,y.sp=5+(B.heat||0)*12;let K=Ee.get(B.mint);(!K||K.up!==B.up||K.stars!==B.stars||K.isNew!==!!B.isNew||K.cat!==B.cat)&&(K&&(r.remove(K.sp),K.sp.material.map.dispose()),K={sp:ye(B,B.stars,B.up,!!B.isNew,B.cat),up:B.up,stars:B.stars,isNew:!!B.isNew,cat:B.cat,born:it},K.sp.userData={kind:"coin",key:B.mint},r.add(K.sp),Ee.set(B.mint,K)),F&&it>4&&y.pos&&(B.isNew||B.cat==="migrated")&&re.push([y.pos[0],y.pos[1],B.cat==="migrated"?1:0]),K.car=y}E(b.filter(B=>B.cat!=="new")),Xt(b.filter(B=>B.cat==="hot"&&B.chg!=null).sort((B,y)=>(y.heat||0)-(B.heat||0))[0]||null);let $=ie.filter(B=>B.coin&&!B.coin.isNew&&B.coin.chg!=null&&B.coin.chg<-3).sort((B,y)=>B.coin.chg-y.coin.chg)[0]||null;ie.filter(B=>B.police).forEach((B,y)=>{B.chase=y<3?$:null,B.gap=5+y*4.2}),C=$?$.coin:null}let at=g=>De.get(g)||null,C=null,re=[],me=t?140:320,fe=[],we=new Yt(_(),new nn,me),We=new Yt(_(),new nn({color:"#f0c9a0"}),me);we.frustumCulled=We.frustumCulled=!1,r.add(we),r.add(We);let st=["#ff4f9e","#5fc8ff","#ffd23f","#2ee6a6","#ffffff","#8a3fe2","#ff8a4a","#1a1638"].map(w),Ze=["#f0c9a0","#c98e62","#8a5a3a","#ffdcc0"].map(w);for(let g=0;g<me;g++){let b=Math.floor(l()*ri),A=Math.floor(l()*ri),z=-Zt+b*ai+.5,$=-Zt+A*ai+.5,B=Ai-1;if(z>At-2){g--;continue}fe.push({x0:z,z0:$,L:B,d:l()*B*4,sp:(l()<.5?-1:1)*(.9+l()*.9),ph:l()*6.3}),we.setColorAt(fe.length-1,st[Math.floor(l()*st.length)]),We.setColorAt(fe.length-1,Ze[Math.floor(l()*Ze.length)])}we.instanceColor.needsUpdate=!0,We.instanceColor.needsUpdate=!0;function ge(g){fe.forEach((b,A)=>{b.d=((b.d+b.sp*g)%(b.L*4)+b.L*4)%(b.L*4);let z=Math.floor(b.d/b.L),$=b.d-z*b.L,B=z===0?b.x0+$:z===1?b.x0+b.L:z===2?b.x0+b.L-$:b.x0,y=z===0?b.z0:z===1?b.z0+$:z===2?b.z0+b.L:b.z0+b.L-$,F=Math.abs(Math.sin(it*7+b.ph))*.08,K=(z%2?0:Math.PI/2)+(b.sp<0?Math.PI:0);Nt.setFromEuler(hi.set(0,K,Math.sin(it*7+b.ph)*.06)),_t.set(B,.62+F,y),Et.set(.42,.82,.3),ht.compose(_t,Nt,Et),we.setMatrixAt(A,ht),_t.set(B,1.24+F,y),Et.set(.34,.34,.34),ht.compose(_t,Nt,Et),We.setMatrixAt(A,ht)}),we.instanceMatrix.needsUpdate=!0,We.instanceMatrix.needsUpdate=!0}let I=new In;r.add(I);{let g=new nn({color:"#e8e2f8"}),b=new nn({color:"#2a2060"});[[4,4],[7.5,7],[9,8.4],[9,8.4],[7.5,7],[4.5,4.2]].forEach(([$,B],y)=>{let F=new ot(_(),g);F.scale.set(5.2,B,$),F.position.x=-12.5+y*5,I.add(F)});for(let[$,B]of[[4,0],[0,4],[0,-4]]){let y=new ot(_(),b);y.scale.set(4,$?4:.4,B?4:.4),y.position.set(-14,$*.9,B*.9),I.add(y)}let A=new ot(_(),b);A.scale.set(7,1.8,2.6),A.position.set(1,-5,0),I.add(A);let z=new ot(_(),new vt({color:new Re(4,.4,1.6),toneMapped:!1}));z.scale.setScalar(.8),z.position.set(15.6,0,0),I.add(z),I.userData.tip=z}let pe=document.createElement("canvas");pe.width=512,pe.height=160;let ne=pe.getContext("2d"),Ne=new Gn(pe);Ne.colorSpace=St;let Le=new vt({map:Ne,toneMapped:!1,color:new Re(1.6,1.6,1.6)});for(let g of[4.32,-4.32]){let b=new ot(new Yi(16,5),Le);b.position.set(1,.4,g),b.rotation.y=g>0?0:Math.PI,I.add(b)}let Qe=null,lt=null;function Pt(){ne.fillStyle="#0a0520",ne.fillRect(0,0,512,160);let g=Qe;if(ne.fillStyle="#ff4f9e",ne.fillRect(0,0,512,8),ne.fillRect(0,152,512,8),!g){ne.fillStyle="#fff",ne.font="900 44px Inter, sans-serif",ne.textAlign="center",ne.fillText("THE TRENCHES",256,96),Ne.needsUpdate=!0;return}ne.save(),ne.beginPath(),ne.arc(80,80,52,0,wi),ne.clip(),lt?ne.drawImage(lt,28,28,104,104):(ne.fillStyle="#36209a",ne.fillRect(28,28,104,104)),ne.restore(),ne.textAlign="left",ne.fillStyle="#ffd23f",ne.font="900 22px Inter, sans-serif",ne.fillText("#1 HOT RIGHT NOW",152,50),ne.fillStyle="#fff",ne.font="900 52px Inter, sans-serif";let b="$"+g.symbol;for(;ne.measureText(b).width>340&&b.length>3;)b=b.slice(0,-2)+"\u2026";ne.fillText(b,152,104),ne.fillStyle=(g.chg||0)>=0?"#2ee6a6":"#ff4f9e",ne.font="800 28px Inter, sans-serif",ne.fillText(g.chg==null?"":(g.chg>0?"+":"")+g.chg.toFixed(1)+"% in 5 min",152,140),Ne.needsUpdate=!0}Pt();function Xt(g){if(!g||Qe&&Qe.mint===g.mint&&Qe.chg===g.chg)return;let b=Qe&&Qe.mint===g.mint;if(Qe=g,!b&&(lt=null,g.iconUrl)){let A=new Image;A.crossOrigin="anonymous",A.referrerPolicy="no-referrer",A.onload=()=>{lt=A,Pt()},A.src=g.iconUrl}Pt()}let ct=[],Vt={new:["#ffd23f","#2a1270"],migrated:["#5fc8ff","#062a4a"],bond:["#ff4f9e","#fff"],x:["#ffffff","#120a30"],hot:["#2ee6a6","#04261a"]};function gn(g){let b=document.createElement("canvas");b.width=560,b.height=210;let A=b.getContext("2d"),[z]=Vt[g.kind]||Vt.x,$=y=>{A.clearRect(0,0,560,210),A.fillStyle="rgba(10,5,32,.94)",_e(A,6,6,548,150,40),A.fill(),A.beginPath(),A.moveTo(250,150),A.lineTo(280,196),A.lineTo(312,150),A.closePath(),A.fill(),A.strokeStyle=z,A.lineWidth=6,_e(A,6,6,548,150,40),A.stroke(),A.save(),A.beginPath(),A.arc(84,81,50,0,wi),A.clip(),y?A.drawImage(y,34,31,100,100):(A.fillStyle=z,A.fillRect(34,31,100,100),A.fillStyle="#120a30",A.font="900 44px Inter, sans-serif",A.textAlign="center",A.fillText(g.mark||"?",84,97)),A.restore(),A.textAlign="left",A.fillStyle=z,A.font="900 24px Inter, sans-serif",A.fillText(g.kicker.toUpperCase(),156,58),A.fillStyle="#fff",A.font="900 40px Inter, sans-serif";let F=g.title;for(;A.measureText(F).width>380&&F.length>3;)F=F.slice(0,-2)+"\u2026";if(A.fillText(F,156,104),g.sub){A.fillStyle="rgba(220,210,255,.85)",A.font="700 24px Inter, sans-serif";let K=g.sub;for(;A.measureText(K).width>380&&K.length>3;)K=K.slice(0,-2)+"\u2026";A.fillText(K,156,138)}B.needsUpdate=!0},B=new Gn(b);if(B.colorSpace=St,$(null),g.iconUrl){let y=new Image;y.crossOrigin="anonymous",y.referrerPolicy="no-referrer",y.onload=()=>$(y),y.src=g.iconUrl}return B}function Sr(g){for(;ct.length>=(t?3:5);){let $=ct.shift();r.remove($.sp),$.sp.material.map.dispose(),$.sp.material.dispose()}let b=new si(new Vn({map:gn(g),transparent:!0,depthTest:!1}));b.renderOrder=8,b.userData=g.mint?{kind:"coin",key:g.mint}:{kind:"bubble",key:g.title};let A=g.mint?at(g.mint):null,z=g.at||(()=>{let $=S[Math.floor(l()*S.length)];return[$.x,$.z,$.y+14]})();r.add(b),ct.push({sp:b,car:A,x:z[0],z:z[1],y:z[2]||12,t:0,life:g.life||6.5})}let Vs=t?16:30,Ut=[],Gs=[["hull",[0,.45,0],[2.4,.9,5.6],"#efeaff"],["trim",[0,.95,0],[2.5,.18,5.7],"#2f3fe4"],["deck",[0,1.35,-.9],[1.7,.8,2.2],"#241a5c"],["mast",[0,3.3,.7],[.24,4.4,.24],"#cfc6ee"],["sail",[0,3.5,1.35],[.14,3.4,1.9],"#ffffff"]],sn={};for(let[g,,,b]of Gs){let A=new Yt(_(),new nn({color:b}),Vs);A.frustumCulled=!1,A.count=0,r.add(A),sn[g]=A}sn.sail.material=new vt({toneMapped:!1});function Ws(g){let b=document.createElement("canvas");b.width=256,b.height=92;let A=b.getContext("2d");A.fillStyle="rgba(8,18,48,.86)",_e(A,6,8,244,76,22),A.fill(),A.strokeStyle="rgba(95,200,255,.8)",A.lineWidth=3,_e(A,6,8,244,76,22),A.stroke(),A.fillStyle="#fff",A.font="900 30px Inter, sans-serif",A.textAlign="left",A.fillText(g.name.slice(0,8),22,52);let z=g.chg==null?"\u2014":(g.chg>0?"+":"")+g.chg.toFixed(1)+"%";A.textAlign="right",A.fillStyle=g.chg>=0?"#2ee6a6":"#ff4f9e",A.font="800 26px Inter, sans-serif",A.fillText(z,234,52),A.fillStyle="rgba(160,220,255,.85)",A.font="800 13px Inter, sans-serif",A.textAlign="left",A.fillText("PERP \xB7 "+(g.oi>=1e9?(g.oi/1e9).toFixed(1)+"B":(g.oi/1e6).toFixed(0)+"M")+" OI",22,74);let $=new Gn(b);$.colorSpace=St;let B=new si(new Vn({map:$,transparent:!0,depthTest:!0}));return B.renderOrder=5,B.userData={kind:"perp",key:g.name},B}function br(g){let b=g.filter($=>$&&$.oi>0).sort(($,B)=>B.oi-$.oi).slice(0,Vs);if(Ut.length&&b.length===Ut.length&&b.every($=>Ut.some(B=>B.p.name===$.name))){for(let $ of b){let B=Ut.find(F=>F.p.name===$.name);B.p=$;let y=Ws($);B.sp.material.map.dispose(),B.sp.material.map=y.material.map,B.sp.material.needsUpdate=!0,y.material.dispose()}return}for(let $ of Ut)r.remove($.sp),$.sp.material.map.dispose(),$.sp.material.dispose();Ut.length=0;let A=t?2:3,z=Math.ceil(Vs/A);b.forEach(($,B)=>{let y=B%A,F=Math.floor(B/A),K=y%2?-1:1,Me=.75+.6*Math.min(1,Math.max(0,Math.log10($.oi/1e6)/3));Ut.push({p:$,x:At+30+y*15,dir:K,sz:Me,sp:Ws($),ph:l()*6.28,d:F/z*2*(2*Zt-12)+l()*4,pos:null,wake:0})});for(let $ of Ut)r.add($.sp);for(let $ in sn)sn[$].count=Ut.length}let Ri=[],ji=[];for(let g of S.filter(b=>b.big).sort((b,A)=>A.y-b.y)){if(Ri.length>=5)break;Ri.every(b=>Math.hypot(b.x-g.x,b.z-g.z)>30)&&Ri.push(g)}function ka(g,b){let A=document.createElement("canvas");A.width=384,A.height=176;let z=A.getContext("2d"),$=z.createLinearGradient(0,0,384,176);$.addColorStop(0,"#2f3fe4"),$.addColorStop(.5,"#8a3fe2"),$.addColorStop(1,"#ff4f9e");let B=F=>{z.clearRect(0,0,384,176),z.fillStyle=$,_e(z,4,4,376,168,26),z.fill(),z.fillStyle="rgba(10,5,32,.88)",_e(z,12,12,360,152,20),z.fill(),z.save(),z.beginPath(),z.arc(88,88,52,0,wi),z.clip(),F?z.drawImage(F,36,36,104,104):(z.fillStyle="#36209a",z.fillRect(36,36,104,104),z.fillStyle="#fff",z.font="900 40px Inter, sans-serif",z.textAlign="center",z.fillText(g.symbol.slice(0,2),88,102)),z.restore(),z.textAlign="left",z.fillStyle="#ffd23f",z.font="900 20px Inter, sans-serif",z.fillText("#"+b+" ON THE STREETS",160,58),z.fillStyle="#fff",z.font="900 44px Inter, sans-serif",z.fillText("$"+g.symbol.slice(0,8),160,106);let K=g.mcap||0;z.fillStyle="rgba(220,210,255,.9)",z.font="800 22px Inter, sans-serif",z.fillText((K>=1e9?"$"+(K/1e9).toFixed(2)+"B":"$"+(K/1e6).toFixed(1)+"M")+" cap",160,140),y.needsUpdate=!0},y=new Gn(A);if(y.colorSpace=St,B(null),g.iconUrl){let F=new Image;F.crossOrigin="anonymous",F.referrerPolicy="no-referrer",F.onload=()=>B(F),F.src=g.iconUrl}return y}function E(g){g.filter(A=>!A.isNew&&A.mcap).sort((A,z)=>z.mcap-A.mcap).slice(0,Ri.length).forEach((A,z)=>{let $=ji[z];if($&&$.mint===A.mint){$.coin=A,$.sp.userData.coin=A;return}if(!$){$=ji[z]={sp:new si(new Vn({transparent:!0,depthTest:!0}))},$.sp.renderOrder=4;let B=Ri[z];$.sp.position.set(B.x,B.y+10,B.z),$.sp.scale.set(17,7.8,1),r.add($.sp)}$.sp.material.map&&$.sp.material.map.dispose(),$.sp.material.map=ka(A,z+1),$.sp.material.needsUpdate=!0,$.mint=A.mint,$.coin=A,$.sp.userData={kind:"bill",key:A.mint,coin:A}})}let H=10,G=[],q={};for(let[g]of v){let b=new Yt(_(),g==="body"?new nn:new nn({color:g==="cab"?"#1a1638":"#0c0a14"}),H);b.frustumCulled=!1,b.count=0,r.add(b),q[g]=b}let X=new ot(new pr(3.4,3.4,140,24,1,!0).translate(0,70,0),new vt({color:new Re(1.6,.45,1.1),transparent:!0,opacity:.14,blending:ti,depthWrite:!1,side:hn}));X.position.set(Z[0],0,Z[1]),X.visible=!1,r.add(X);let be=(()=>{let g=document.createElement("canvas");g.width=320,g.height=120;let b=g.getContext("2d");b.fillStyle="rgba(10,5,32,.9)",_e(b,6,8,308,104,26),b.fill(),b.strokeStyle="#ff4f9e",b.lineWidth=4,_e(b,6,8,308,104,26),b.stroke(),b.fillStyle="#ff9ec9",b.font="900 16px Inter, sans-serif",b.textAlign="center",b.fillText("YOUR SAFEHOUSE",160,44),b.fillStyle="#fff",b.font="900 25px Inter, sans-serif",b.fillText("Connect to park your bag",160,82);let A=new Gn(g);A.colorSpace=St;let z=new si(new Vn({map:A,transparent:!0}));return z.position.set(Z[0],7,Z[1]),z.scale.set(10,3.75,1),z.userData={kind:"safehouse",key:"home"},r.add(z),z})();function Ie(g){for(let A of G)r.remove(A.sp),A.sp.material.map.dispose(),A.sp.material.dispose();G.length=0,(g||[]).slice(0,H).forEach((A,z)=>{let $=Z[0]-4.5+z%5*2.25,B=Z[1]-2.6+Math.floor(z/5)*5.2,y={mint:A.mint,symbol:A.sym||"?",iconUrl:A.iconUrl||""},F=ye(y,0,(A.ch||0)>=0,!1);F.userData={kind:"mine",key:A.mint,row:A},F.position.set($,3.6,B),F.scale.set(4.2,2.6,1),r.add(F),G.push({r:A,x:$,z:B,sp:F}),Nt.setFromEuler(hi.set(0,0,0));for(let[K,Me,Ke]of v)_t.set($+Me[0],Me[1],B+Me[2]),Et.set(...Ke),ht.compose(_t,Nt,Et),q[K].setMatrixAt(z,ht);q.body.setColorAt(z,Fn.set(["#ffd23f","#5fc8ff","#ff9ec9","#9ff0d0","#c8a8ff"][z%5]))});for(let A in q)q[A].count=G.length,q[A].instanceMatrix.needsUpdate=!0;q.body.instanceColor&&(q.body.instanceColor.needsUpdate=!0),X.visible=G.length>0,be.visible=!G.length}let Fe=S.filter(g=>g.big),ze=[];for(let g=0;g<Math.min(6,Fe.length);g++){let b=Fe[Math.floor(l()*Fe.length)];ze.push({x:b.x+(l()-.5)*(b.w-2),y:b.y+(b.big,0),z:b.z+(l()-.5)*(b.d-2)})}for(let g of ze){let b=new xr("#ff7a3a",60,40,1.6);b.position.set(g.x,g.y+3,g.z),r.add(b),g.light=b}let $e=ze.length*10,He=new Yt(_(),new vt({toneMapped:!1}),$e);He.frustumCulled=!1,r.add(He);let qe=t?160:320,mt=new Yt(_(),new nn({color:"#3a2a5a",transparent:!0,opacity:.82}),qe);mt.frustumCulled=!1,r.add(mt);let rn=Array.from({length:qe},(g,b)=>({f:ze[b%ze.length],t:l()*9,life:7+l()*3,ox:(l()-.5)*2,oz:(l()-.5)*2,s:.8+l()*.8})),Lt=160,Gt=new Yt(_(),new vt({toneMapped:!1}),Lt);Gt.frustumCulled=!1,r.add(Gt);let yt=Array.from({length:Lt},()=>({t:9,p:new L,v:new L,c:new Re})),Je=new xr("#ffd0a0",0,120,1.4);r.add(Je);let oi=new ot(new mr(1,16,12),new vt({color:new Re(6,3.6,1.8),transparent:!0,opacity:0,toneMapped:!1}));r.add(oi);let gt=new ot(new ba(1,.08,6,48).rotateX(Math.PI/2),new vt({color:new Re(3,2,2.6),transparent:!0,opacity:0,toneMapped:!1}));r.add(gt);let bn=2,Wn=9,En=new L,Ci=t?700:1600,bt=new Yt(_(),new vt({toneMapped:!1}),Ci);bt.frustumCulled=!1,r.add(bt);let Nn=Array.from({length:Ci},()=>({t:9,life:1,p:new L,v:new L,c:new Re,s:.4,drag:1})),li=[[.3,3.4,2.1],[3.6,2.6,.5],[3.2,3.2,3.4],[3.6,.9,2.4],[1,1.8,3.8]],Dt=new L,ci=[],Xs=0,Qi=3.4,Va=8+l()*6,es=9,ts=.5;function ns(g,b,A,z,$,B){let y=Nn[Xs];Xs=(Xs+1)%Ci,y.t=0,y.life=z,y.p.copy(g),y.v.copy(b),y.c.setRGB(A[0],A[1],A[2]),y.s=$,y.drag=B}function jh(){let g=ie.filter(A=>A.coin&&A.coin.up&&A.pos);if(!g.length)return;g.sort((A,z)=>(z.coin.chg||0)-(A.coin.chg||0));let b=g[Math.floor(l()*l()*Math.min(g.length,10))];ci.push({p:new L(b.pos[0],2.5,b.pos[1]),v:new L((l()-.5)*4,36+l()*14,(l()-.5)*4),t:0,fuse:1.2+l()*.5,col:l()<.6?0:Math.floor(l()*li.length)})}function Qh(){let g=S[Math.floor(l()*S.length)];En.set(g.x,g.y+1,g.z),Wn=0;let b=0;for(let A of yt){if(b>40)break;A.t>2.5&&(A.t=0,A.p.copy(En),A.v.set((l()-.5)*22,8+l()*18,(l()-.5)*22),A.c.setRGB(3,1.2+l(),.3+l()*.4),b++)}}let Xn=[],eu=new vt({color:new Re(.7,.75,1),transparent:!0,opacity:.1,blending:ti,depthWrite:!1,side:hn});for(let g=0;g<3;g++){let b=new In,A=new nn({color:"#16123a"}),z=new ot(_(),A);z.scale.set(2.4,1.6,4),b.add(z);let $=new ot(_(),A);$.scale.set(.6,.6,4),$.position.set(0,.3,-3.6),b.add($);let B=new ot(_(),new vt({color:"#0c0a1e"}));B.scale.set(9,.12,.5),B.position.y=1.1,b.add(B);let y=new ot(new Bs(9,60,24,1,!0).translate(0,-30,0),eu);y.position.y=-.6,b.add(y);let F=new ot(_(),new vt({color:new Re(4,.3,.4),toneMapped:!1}));F.scale.setScalar(.35),F.position.set(0,-.9,-1.6),b.add(F),r.add(b),Xn.push({g:b,rot:B,cone:y,red:F,r:30+g*18,h:46+g*9,sp:.12+g*.05,ph:g*2.1})}function tu(g){Xn.forEach((b,A)=>{let z=g[A];if(b.sp&&(b.g.remove(b.sp),b.sp.material.map.dispose(),b.sp.material.dispose(),b.sp=null),!z)return;let $=document.createElement("canvas");$.width=256,$.height=96;let B=$.getContext("2d");B.fillStyle="rgba(10,5,32,.88)",_e(B,6,8,244,80,22),B.fill(),B.strokeStyle="rgba(255,210,63,.85)",B.lineWidth=3,_e(B,6,8,244,80,22),B.stroke(),B.fillStyle="#ffd23f",B.font="900 14px Inter, sans-serif",B.textAlign="left",B.fillText("WHALE #"+(A+1)+" \xB7 TODAY",22,34),B.fillStyle="#fff",B.font="900 24px Inter, sans-serif",B.fillText((z.n||z.a.slice(0,6)+"\u2026"+z.a.slice(-4)).slice(0,14),22,62);let y=z.pnl||0;B.fillStyle=y>=0?"#2ee6a6":"#ff4f9e",B.font="800 17px Inter, sans-serif",B.fillText((y>=0?"+$":"-$")+(Math.abs(y)>=1e6?(Math.abs(y)/1e6).toFixed(2)+"M":(Math.abs(y)/1e3).toFixed(0)+"K")+" P&L",22,82);let F=new Gn($);F.colorSpace=St,b.sp=new si(new Vn({map:F,transparent:!0,depthTest:!1})),b.sp.renderOrder=6,b.sp.position.set(0,4.2,0),b.sp.scale.set(8,3,1),b.sp.userData={kind:"whale",key:z.a,whale:z},b.g.add(b.sp)})}let Ga=[];for(let g=0;g<5;g++){let b=Fe[g*7%Math.max(1,Fe.length)]||{x:0,y:30,z:0},A=new ot(new Bs(6,220,20,1,!0).rotateX(Math.PI).translate(0,110,0),new vt({color:new Re(.9,.85,1),transparent:!0,opacity:.06,blending:ti,depthWrite:!1,side:hn}));A.position.set(b.x,b.y+1,b.z),r.add(A),Ga.push({cone:A,ph:g*1.3,sp:.25+g*.06})}let Wa=t?500:1100,is=new Yt(_(),new vt({color:new Re(.55,.62,1.1),transparent:!0,opacity:.32,depthWrite:!1}),Wa);is.frustumCulled=!1,is.count=0,r.add(is);let nu=Array.from({length:Wa},()=>({x:(l()-.5)*170,y:l()*80,z:(l()-.5)*170,v:55+l()*25})),Xa=0;r.add(new Ta("#8a8aff","#3a1a4a",1.5));let Ol=new Aa("#ffd0f0",1.5);Ol.position.copy(h).multiplyScalar(100),r.add(Ol),r.fog=null;let qn=new Ba(n);qn.addPass(new za(r,c));let iu=new ks(new Te(256,256),t?.38:.45,.42,.92);qn.addPass(iu),qn.addPass(new Ha);let et=new Da(c,i);et.enableDamping=!0,et.dampingFactor=.06,et.minDistance=25,et.maxDistance=260,et.maxPolarAngle=1.32,et.minPolarAngle=.35,et.target.set(0,4,0),et.autoRotate=!0,et.autoRotateSpeed=.35,et.enablePan=!0,et.screenSpacePanning=!1;let qs=.0031,Pi=new L(98,56,118),ss=new L(0,4,0),Fl=new L,Bl=new L,qa=Pi.clone(),Ya=ss.clone(),On=!!e.gate,_n=On?"gate":"roam",Li=0,Za=0,Ys=0,xn=null,Ja=qs,Er=0,Zs=[];On?(et.enabled=!1,a.uFogD.value=.0018,et.autoRotate=!1):c.position.copy(Pi),et.addEventListener("start",()=>{Ys=0,et.autoRotate=!1,Li=0,a.uFogD.value=qs});let Ft=(g,b,A)=>new L(g,b,A),su=()=>ie.filter(g=>g.coin&&g.pos&&g.coin.cat!=="new").sort((g,b)=>(b.coin.heat||0)-(g.coin.heat||0))[0],Ka={streets:()=>[Ft(66+Math.sin(it*.08)*8,36,76),Ft(8,2,10)],hot:()=>{let g=su();return g?[Ft(g.pos[0]+21,15,g.pos[1]+21),Ft(g.pos[0],2,g.pos[1])]:Ka.streets()},drops:()=>[Ft(-58+Math.sin(it*.1)*6,62,18),Ft(-4,2,-30)],migrated:()=>[Ft(-78,60,64),Ft(0,26,0)],harbor:()=>[Ft(At-16,27,48),Ft(At+44,0,-6)],pier:()=>[Ft(At+14+Math.sin(it*.1)*4,12,oe+50),Ft(ce.x,15,ce.z)],whales:()=>{let g=Xn[0]?Xn[0].g.position:Ft(0,50,0);return[Ft(g.x+24,g.y+3,g.z+24),Ft(g.x,g.y-3,g.z)]},safehouse:()=>[Ft(Z[0]+26,21,Z[1]+30),Ft(Z[0],2,Z[1])],mood:()=>[Ft(-180+Math.sin(it*.05)*20,128,-150),Ft(0,0,0)],roam:()=>[Pi.clone(),ss.clone()]},Tr=g=>(Ka[Zs[g]]||Ka.roam)();function wr(g,b){Fl.copy(c.position),Bl.copy(et.target),qa.copy(g),Ya.copy(b),Ja=a.uFogD.value,e.reduced?(c.position.copy(g),et.target.copy(b),a.uFogD.value=qs,Li=0):(Li=1,Za=0),Ys=0}function ru(){if(On)if(On=!1,Zs.length){_n="story",et.enabled=!1;let[g,b]=Tr(Math.round(Er));wr(g,b)}else _n="roam",et.enabled=!0,wr(Pi,ss)}function zl(){let g=i.clientWidth||innerWidth,b=i.clientHeight||innerHeight;n.setPixelRatio(s),n.setSize(g,b,!1),qn.setPixelRatio(s),qn.setSize(g,b),c.aspect=g/b,c.fov=g/b<.8?58:42,c.updateProjectionMatrix()}zl(),addEventListener("resize",zl);try{t||(qn.renderTarget1.samples=4,qn.renderTarget2.samples=4)}catch{}let Hl=new Ca,kl=new Te,$a=null,ja=null,Ar=null,au=()=>{let g=[];for(let b of Ee.values())g.push(b.sp);for(let b of Ut)g.push(b.sp);for(let b of ji)g.push(b.sp);for(let b of G)g.push(b.sp);for(let b of ct)g.push(b.sp);be.visible&&g.push(be);for(let b of Xn)b.sp&&g.push(b.sp);return g};function Vl(g,b){let A=i.getBoundingClientRect();kl.set((g-A.left)/A.width*2-1,-(b-A.top)/A.height*2+1),Hl.setFromCamera(kl,c);let z=Hl.intersectObjects(au(),!1);return z.length?z[0].object.userData:null}function Gl(g){if(!g)return null;if(g.kind==="coin"){let b=Ee.get(g.key);return b&&b.car&&b.car.coin?{kind:"coin",coin:b.car.coin}:null}if(g.kind==="bill")return{kind:"coin",coin:Ee.get(g.key)&&Ee.get(g.key).car&&Ee.get(g.key).car.coin||g.coin};if(g.kind==="perp"){let b=Ut.find(A=>A.p.name===g.key);return b?{kind:"perp",perp:b.p}:null}return g.kind==="whale"?{kind:"whale",whale:g.whale}:g.kind==="mine"?{kind:"mine",row:g.row}:g.kind==="safehouse"?{kind:"safehouse"}:(g.kind==="bubble",null)}i.addEventListener("pointermove",g=>{if(g.pointerType&&g.pointerType!=="mouse")return;let b=Vl(g.clientX,g.clientY),A=b?b.kind+":"+b.key:null,z=Gl(b);$a=z&&z.kind==="coin"?z.coin.mint:null,A!==ja&&(ja=A,i.style.cursor=A?"pointer":"grab"),e.onHover&&e.onHover(z,g.clientX,g.clientY)}),i.addEventListener("pointerdown",g=>{Ar=[g.clientX,g.clientY]}),i.addEventListener("pointerup",g=>{if(!Ar||Math.hypot(g.clientX-Ar[0],g.clientY-Ar[1])>8)return;let b=Gl(Vl(g.clientX,g.clientY));if(b&&b.kind==="coin"){let A=Ee.get(b.coin.mint);xn=A&&A.car?A.car:null,et.autoRotate=!1}else b&&b.kind==="perp"?(xn=Ut.find(A=>A.p.name===b.perp.name)||null,et.autoRotate=!1):xn=null;e.onPick&&e.onPick(b)});let ht=new dt,Nt=new en,_t=new L,Et=new L,hi=new Xi,Fn=new Re,it=0,Qa=performance.now(),ui=0,eo=!1,Wl=!1,Rr=0;function to(g){it+=g,a.uTime.value=it,Rr++;let b=0;for(ie.forEach((y,F)=>{y.d+=y.sp*g,y.police&&y.chase&&(y.r=y.chase.r,y.d=y.chase.d-y.gap);let[K,Me,Ke]=pt(y.r,y.d,1);Nt.setFromEuler(hi.set(0,Ke,0));let je=Math.sin(Ke),tt=Math.cos(Ke);for(let[Mt,zt,qt]of v)_t.set(K+zt[0]*tt+zt[2]*je,zt[1],Me-zt[0]*je+zt[2]*tt),Et.set(...qt),ht.compose(_t,Nt,Et),V[Mt].setMatrixAt(F,ht);y.police?Fn.set(Math.sin(it*10+F)>0?"#1a1a2e":"#f4f4ff"):y.coin?Fn.set(y.coin.isNew?"#ffd23f":y.coin.cat==="migrated"?"#5fc8ff":y.coin.up?"#2ee6a6":"#ff4f9e"):Fn.copy(y.color),V.body.setColorAt(F,Fn);let Bt=y.police?[[.3,1.35,-.1,Math.sin(it*12+F)>0?[5,.3,.4]:[.3,.5,5]],[-.3,1.35,-.1,Math.sin(it*12+F)>0?[.3,.5,5]:[5,.3,.4]]]:[[.35,.6,1.12,[4,3.8,3.2]],[-.35,.6,1.12,[4,3.8,3.2]],[.38,.6,-1.12,[3,.2,.25]],[-.38,.6,-1.12,[3,.2,.25]]];for(let[Mt,zt,qt,Tn]of Bt)_t.set(K+Mt*tt+qt*je,zt,Me-Mt*je+qt*tt),Et.set(.28,.16,.1),ht.compose(_t,Nt,Et),le.setMatrixAt(b,ht),le.setColorAt(b,Fn.setRGB(...Tn)),b++;if(y.pos=[K,Me],y.coin&&y.coin.s5m){for(y.pb=(y.pb||0)+g*Math.min(3,(y.coin.s5m.numBuys||0)/300),y.ps=(y.ps||0)+g*Math.min(3,(y.coin.s5m.numSells||0)/300);y.pb>=1;)y.pb--,ns(_t.set(K,2.2,Me),Dt.set((l()-.5)*2,4+l()*2.5,(l()-.5)*2),[.3,3,1.7],.9,.34,2);for(;y.ps>=1;)y.ps--,ns(_t.set(K,2.2,Me),Dt.set((l()-.5)*2,3+l()*2,(l()-.5)*2),[3.2,.45,1.6],.9,.34,2)}});b<ke*4;b++)ht.makeScale(0,0,0),le.setMatrixAt(b,ht);for(let y of Object.values(V))y.instanceMatrix.needsUpdate=!0;V.body.instanceColor.needsUpdate=!0,le.instanceMatrix.needsUpdate=!0,le.instanceColor.needsUpdate=!0;for(let[y,F]of Ee){if(!F.car||!F.car.pos)continue;let K=Math.min(1,(it-F.born)*2);F.sp.position.set(F.car.pos[0],3.4+.25*Math.sin(it*2+F.car.d),F.car.pos[1]),F.sp.scale.set(6.4*K*($a===y?1.25:1),4*K*($a===y?1.25:1),1)}Ut.forEach((y,F)=>{y.d+=g*1.6;let K=2*Zt-12,Me=(y.d+(y.dir<0?K:0))%(2*K)/K,Ke=Me<=1,je=-Zt+6+(Ke?Me:2-Me)*K,tt=y.x+Math.sin(it*.3+y.ph)*1.5,Bt=.25+Math.sin(it*1.6+y.ph)*.18,Mt=Ke?0:Math.PI;Nt.setFromEuler(hi.set(Math.sin(it*1.3+y.ph)*.05,Mt,Math.sin(it*1.1+y.ph)*.06));let zt=Math.sin(Mt),qt=Math.cos(Mt);for(let[Cr,io,so]of Gs)_t.set(tt+io[2]*zt*y.sz,Bt+io[1]*y.sz,je+io[2]*qt*y.sz),Et.set(so[0]*y.sz,so[1]*y.sz,so[2]*y.sz),ht.compose(_t,Nt,Et),sn[Cr].setMatrixAt(F,ht);sn.sail.setColorAt(F,Fn.setRGB(...y.p.chg>=0?[.14,1.2,.72]:[1.35,.2,.66])),y.sp.position.set(tt,7.6*y.sz+.3,je);let Tn=ja==="perp:"+y.p.name?1.2:1;for(y.sp.scale.set(6.6*Tn,2.4*Tn,1),y.pos=[tt,je],y.wake+=g*7;y.wake>=1;)y.wake--,ns(_t.set(tt-zt*2.8*y.sz+(l()-.5),.5,je-qt*2.8*y.sz),Dt.set((l()-.5)*1.5,.6+l()*.6,(l()-.5)*1.5),[2.2,2.4,2.8],.9+l()*.4,.3,2.5)});for(let y in sn)sn[y].instanceMatrix.needsUpdate=!0;for(sn.sail.instanceColor&&(sn.sail.instanceColor.needsUpdate=!0);re.length;){let[y,F,K]=re.pop(),Me=K?[.8,2.4,3.8]:[3.6,2.6,.5];for(let Ke=0;Ke<(K?90:40);Ke++)ns(_t.set(y,3,F),Dt.set((l()-.5)*(K?22:14),6+l()*(K?18:10),(l()-.5)*(K?22:14)),Ke%4?Me:[3.4,3.4,3.6],1.1+l()*.7,K?.6:.45,1.6)}let A=0;ze.forEach((y,F)=>{for(let K=0;K<10;K++){let Me=.5+.9*Math.abs(Math.sin(it*(6+K)+K*1.7+F));_t.set(y.x+(K*37%5-2)*.45,y.y+Me*.5+K%3*.3,y.z+(K*13%5-2)*.45),Et.set(.7,Me,.7),ht.compose(_t,Nt.identity(),Et),He.setMatrixAt(A,ht),He.setColorAt(A,Fn.setRGB(4,1.2+K%3*.6,.2)),A++}y.light.intensity=45+25*Math.sin(it*13+F)}),He.instanceMatrix.needsUpdate=!0,He.instanceColor.needsUpdate=!0,rn.forEach((y,F)=>{y.t+=g,y.t>y.life&&(y.t=0);let K=y.t/y.life,Me=(y.s+K*3.2)*(K<.1?K*10:K>.85?(1-K)/.15:1);_t.set(y.f.x+y.ox+K*K*16,y.f.y+2+K*34,y.f.z+y.oz+K*3),Et.setScalar(Math.max(.001,Me)),Nt.setFromEuler(hi.set(K*2+F,K*3,0)),ht.compose(_t,Nt,Et),mt.setMatrixAt(F,ht)}),mt.instanceMatrix.needsUpdate=!0,bn-=g,bn<=0&&p>2.6&&(Qh(),bn=(2.6+l()*3)*(.45+ts*1.3)),Wn+=g;let z=Math.max(0,1-Wn/.9);Je.position.copy(En),Je.intensity=z*900,oi.position.copy(En),oi.scale.setScalar(1+Wn*9),oi.material.opacity=z,gt.position.copy(En),gt.scale.setScalar(1+Wn*22),gt.material.opacity=Math.max(0,1-Wn/1.1)*.45,yt.forEach((y,F)=>{if(y.t+=g,y.t>2.5){ht.makeScale(0,0,0),Gt.setMatrixAt(F,ht);return}y.v.y-=26*g,y.p.addScaledVector(y.v,g),y.p.y<.2&&(y.p.y=.2,y.v.multiplyScalar(.4),y.v.y=Math.abs(y.v.y)*.3);let K=.45*(1-y.t/2.5);ht.compose(y.p,Nt.setFromEuler(hi.set(y.t*7,y.t*5,0)),Et.setScalar(K)),Gt.setMatrixAt(F,ht),Gt.setColorAt(F,y.c)}),Gt.instanceMatrix.needsUpdate=!0,Gt.instanceColor&&(Gt.instanceColor.needsUpdate=!0),Qi-=g,Qi<=0&&(jh(),Qi=(1.5+l()*2.2)*(1.6-ts*1.1));for(let y=ci.length-1;y>=0;y--){let F=ci[y];if(F.t+=g,F.v.y-=9*g,F.p.addScaledVector(F.v,g),ns(F.p,Dt.set((l()-.5)*1.5,-2-l()*2,(l()-.5)*1.5),[3,2.4,1.4],.45+l()*.3,.26,2.5),F.t>=F.fuse){let K=li[F.col],Me=li[(F.col+2)%li.length],Ke=t?60:110,je=19+l()*8;for(let tt=0;tt<Ke;tt++){let Bt=l()*Math.PI*2,Mt=Math.acos(2*l()-1),zt=je*(.75+l()*.3);Dt.set(Math.sin(Mt)*Math.cos(Bt)*zt,Math.cos(Mt)*zt,Math.sin(Mt)*Math.sin(Bt)*zt),ns(F.p,Dt,tt%5===0?Me:K,1.6+l()*.9,.85+l()*.4,1.5)}ci.splice(y,1)}}Nn.forEach((y,F)=>{if(y.t>=y.life){y.t<50&&(y.t=99,ht.makeScale(0,0,0),bt.setMatrixAt(F,ht));return}y.t+=g,y.v.y-=7*g,y.v.multiplyScalar(Math.max(0,1-y.drag*g)),y.p.addScaledVector(y.v,g);let K=Math.max(0,1-y.t/y.life),Me=K*K*(Math.sin(it*40+F)>-.6?1:.3);ht.compose(y.p,Nt.identity(),Et.setScalar(y.s*(.4+.6*K))),bt.setMatrixAt(F,ht),bt.setColorAt(F,Fn.setRGB(y.c.r*Me,y.c.g*Me,y.c.b*Me))}),bt.instanceMatrix.needsUpdate=!0,bt.instanceColor&&(bt.instanceColor.needsUpdate=!0),Xa+=(Math.max(0,Math.min(1,(.38-ts)/.22))-Xa)*Math.min(1,g*.5),a.uMood.value+=(ts-a.uMood.value)*Math.min(1,g*.4);let $=e.reduced?0:Math.floor(Wa*Xa);if(is.count=$,$){let y=et.target.x,F=et.target.z;for(let K=0;K<$;K++){let Me=nu[K];Me.y-=Me.v*g,Me.y<0&&(Me.y+=80,Me.x=(l()-.5)*170,Me.z=(l()-.5)*170),_t.set(y+Me.x,Me.y,F+Me.z),Et.set(.07,1.6,.07),ht.compose(_t,Nt.set(.08,0,.04,1).normalize(),Et),is.setMatrixAt(K,ht)}is.instanceMatrix.needsUpdate=!0}Va-=g,Va<=0&&(es=0,Va=(9+l()*9)*(.5+ts*1.1)),es+=g,a.uFlash.value=e.reduced?0:es<.07?.5:es<.14?.08:es<.22?.38:Math.max(0,.38-(es-.22)*1.6),p<99&&ou(g);let B=p>2.6;de.visible=p>1.6,He.visible=mt.visible=B;for(let y of Ga)y.cone.visible=B;for(let y of ji)y.sp.visible=B;ae.rotation.z=it*.16,Ge.forEach((y,F)=>{let K=F/Ge.length*wi+it*.16;y.position.set(Math.cos(K)*15,Math.sin(K)*15-1.8,0)});{let y=Math.floor(it*9);for(let F=0;F<Se;F++){let K=(F+y)%8;Ae.setColorAt(F,Fn.setRGB(...K<2?[3,.5,1.8]:K<4?[.5,2,3.2]:K<6?[3.2,2.6,.6]:[1.4,.6,3]))}Ae.instanceColor.needsUpdate=!0}Ue.rotation.y=it*.55,ge(g);{let y=it*.045;I.position.set(Math.cos(y)*118,74+Math.sin(it*.3)*2,Math.sin(y)*118),I.rotation.y=-y-Math.PI/2,I.userData.tip.visible=Math.sin(it*5)>0}for(let y=ct.length-1;y>=0;y--){let F=ct[y];F.t+=g;let K=F.t/F.life;if(K>=1){r.remove(F.sp),F.sp.material.map.dispose(),F.sp.material.dispose(),ct.splice(y,1);continue}let Me=Math.min(1,F.t/.38),Ke=1+2.70158*Math.pow(Me-1,3)+1.70158*Math.pow(Me-1,2),je=K>.84?(1-K)/.16:1,tt=F.car&&F.car.pos?F.car.pos[0]:F.x,Bt=F.car&&F.car.pos?F.car.pos[1]:F.z,Mt=(F.car?8:F.y)+F.t*.45;F.sp.position.set(tt,Mt,Bt);let zt=c.position.distanceTo(F.sp.position),qt=Math.max(.32,Math.min(2.6,zt/95))*Ke;F.sp.scale.set(10.8*qt,4.05*qt,1),F.sp.material.opacity=je}{let y=a.uMood.value,F=Math.min(1,Math.max(0,(y-.25)/.25)),K=Math.min(1,Math.max(0,(y-.6)/.25))*.6,Me=.62+.38*F,Ke=.12+.19*F,je=.3+.32*F;Me+=(1-Me)*K,Ke+=(.55-Ke)*K,je+=(.5-je)*K;let tt=[.068,.023,.25];o.setRGB(tt[0]+(Math.pow(Me,2.2)*.7-tt[0])*.42,tt[1]+(Math.pow(Ke,2.2)*.7-tt[1])*.42,tt[2]+(Math.pow(je,2.2)*.7-tt[2])*.42)}for(let y of Xn){let F=it*y.sp+y.ph;y.g.position.set(Math.cos(F)*y.r,y.h+Math.sin(it*1.3+y.ph)*1.5,Math.sin(F)*y.r),y.g.rotation.y=-F,y.rot.rotation.y=it*30,y.cone.rotation.z=Math.sin(it*.7+y.ph)*.35,y.red.visible=Math.sin(it*6+y.ph)>0}for(let y of Ga)y.cone.rotation.set(Math.sin(it*y.sp+y.ph)*.5,0,Math.cos(it*y.sp*.8+y.ph)*.5);if(On){let y=it*.04+.9;c.position.set(Math.cos(y)*228,138,Math.sin(y)*228),et.target.set(0,4,-10)}else if(Li>0){Za+=g;let y=Math.min(1,Za/3.4),F=y<.5?4*y*y*y:1-Math.pow(-2*y+2,3)/2;if(_n==="story"){let[K,Me]=Tr(Math.round(Er));qa.lerp(K,.1),Ya.lerp(Me,.1)}c.position.lerpVectors(Fl,qa,F),et.target.lerpVectors(Bl,Ya,F),a.uFogD.value=Ja+(qs-Ja)*F,y>=1&&(Li=0)}else if(_n==="story"&&Zs.length){let y=Zs.length,F=Math.max(0,Math.min(y-1,Er)),K=Math.floor(F),Me=Math.min(y-1,K+1),Ke=F-K,je=Ke*Ke*(3-2*Ke),tt=Tr(K),Bt=Tr(Me),Mt=1-Math.exp(-g*2.4);c.position.lerp(tt[0].lerp(Bt[0],je),Mt),et.target.lerp(tt[1].lerp(Bt[1],je),Mt)}else xn&&xn.pos?et.target.lerp(_t.set(xn.pos[0],2,xn.pos[1]),.08):(Ys+=g,Ys>18&&!e.reduced?lu(g):Ys>10&&!et.autoRotate&&(et.autoRotate=!0));_n==="roam"&&!Li?et.update():c.lookAt(et.target),e.onFrame&&Rr%3===0&&e.onFrame({cars:ie,boats:Ut,helis:Xn,garage:G.length,cam:c,controls:et,half:Zt,beach:At,pitch:ai})}function ou(g){p+=g;let b=!0;for(let{m:A,list:z}of x){let $=!1;for(let B=0;B<z.length;B++){let y=z[B];y.rd==null&&(y.rd=.15+Math.hypot(y.x,y.z)/300*2.2+l()*.35);let F=Math.min(1,Math.max(0,(p-y.rd)/.75));if(F<1&&(b=!1),y.rk===F)continue;y.rk=F,$=!0;let K=F>=1?1:1+2.70158*Math.pow(F-1,3)+1.70158*Math.pow(F-1,2),Me=Math.max(.001,K);_t.set(y.x,(y.y+y.h/2)*Me,y.z),Et.set(y.w,y.h*Me,y.d),Nt.setFromEuler(hi.set(0,y.ry||0,0)),ht.compose(_t,Nt,Et),A.setMatrixAt(B,ht)}$&&(A.instanceMatrix.needsUpdate=!0)}b&&(p=99)}let fi=new L,Ii=new L,Xl=0;function lu(g){et.autoRotate=!1,Xl+=g;let b=Math.floor(Xl/9)%5,A=it*.07;if(b===1){let $=ie.filter(B=>B.coin&&B.pos&&!B.coin.isNew).sort((B,y)=>(y.coin.heat||0)-(B.coin.heat||0))[0];$?(fi.set($.pos[0],2,$.pos[1]),Ii.set(Math.cos(A)*30,17,Math.sin(A)*30)):(fi.set(0,6,0),Ii.set(Math.cos(A)*150,85,Math.sin(A)*150))}else b===2?(fi.set(At+38,3,Math.sin(it*.08)*55),Ii.set(-62,32,46)):b===3?(fi.set(ce.x,15,ce.z),Ii.set(-34+Math.sin(A)*10,-2,44)):b===4&&Xn[0]?(fi.copy(Xn[0].g.position),Ii.set(Math.cos(A)*38,10,Math.sin(A)*38)):(fi.set(0,6,0),Ii.set(Math.cos(A)*150,85,Math.sin(A)*150));let z=1-Math.exp(-g*.9);et.target.lerp(fi,z),c.position.lerp(Ii.add(fi),z*.8)}function ql(g){if(ui=0,eo)return;let b=Math.min(.05,(g-Qa)/1e3);Qa=g,!Wl||Rr%2===0?(to(e.reduced?b*.3:b),qn.render()):Rr++,ui=requestAnimationFrame(ql)}let no=()=>{!ui&&!eo&&(Qa=performance.now(),ui=requestAnimationFrame(ql))};document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(ui),ui=0):no()}),to(0),no();let Yl={setCoins:he,setPerps:br,setWhales:tu,setGarage:Ie,home:()=>Z,setMood(g){ts=Math.max(0,Math.min(1,g))},chased:()=>C,follow(g){let b=Ee.get(g);b&&(xn=b.car,et.autoRotate=!1)},followPerp(g){let b=Ut.find(A=>A.p.name===g);b&&(xn=b,et.autoRotate=!1)},unfollow(){xn=null},pause(g){eo=g,g?(cancelAnimationFrame(ui),ui=0):no()},slow(g){Wl=g},enter:ru,entered:()=>!On,bubble:Sr,setStory(g){Zs=g.slice()},story(g){Er=g,!On&&_n!=="story"&&(_n="story",et.enabled=!1,xn=null)},roam(){On||_n==="roam"||(_n="roam",et.enabled=!0,wr(Pi,ss))},mode:()=>_n,overview(){On||_n!=="roam"||(xn=null,wr(Pi,ss))},skip(){On=!1,_n="roam",et.enabled=!0,Li=0,a.uFogD.value=qs,c.position.copy(Pi),et.target.copy(ss),p=99;for(let{m:g,list:b}of x)b.forEach((A,z)=>{_t.set(A.x,A.y+A.h/2,A.z),Et.set(A.w,A.h,A.d),Nt.setFromEuler(hi.set(0,A.ry||0,0)),ht.compose(_t,Nt,Et),g.setMatrixAt(z,ht)}),g.instanceMatrix.needsUpdate=!0},shot(g){let b=Math.round(g*30);for(let A=0;A<b;A++)to(1/30);qn.render()}};return window.__bloxWorld=Yl,Yl}export{d_ as startWorld};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
