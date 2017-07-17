!function(D){"use strict";var j="ht",e=D[j],V=e.Default,P=Math,B=P.PI,t=2*B,n=P.sin,K=P.cos,d=P.atan2,W=P.sqrt,Z=P.max,f=P.floor,Q=(P.round,P.ceil),M=P.abs,L=e.Shape,I=e.Edge,o=e.List,J=e.Style,G=e.graph,g=V.getInternal(),X=g.ui(),z=null,a="__segmentLengths",p="__lineTotalLength",$="__linePoints",m="__distance0",U="flow.count",S="flow.step",x="flow.element.max",F="flow.element.count",i="flow.element.min",C="flow.element.space",R="flow.element.autorotate",A="flow.element.background",Y="flow.element.shadow.max",s="flow.element.shadow.min",O="flow.element.shadow.begincolor",q="flow.element.shadow.endcolor",v="flow.element.shadow.visible",w="flow.element.image",k="flow",y="prototype",r=G.GraphView[y],T=e.Data[y],l=X.DataUI[y],E=X.ShapeUI[y],c=X.EdgeUI[y],H=e.DataModel[y],_=E._80o,N=c._80o,u=H.prepareRemove,h=c._79o,b=E._79o,al=r.setDataModel,Td=function(J){return document.createElement(J)};r.calculatePointLength=function(H,P,B){var Z=this,C=Z.getDataUI(H);B==z&&(B=.1);var T=Ri(C),i=[];if(T){for(var n=T.length,Q=0;n>Q;Q++){var d=T[Q];d._as&&(d=d._as);for(var M=d[0],Y=1;Y<d.length;Y++)i.push([M,d[Y]]),M=d[Y]}for(var g=[],Q=0;Q<i.length;Q++){var k=Pr(i[Q][0],i[Q][1],P);g.push(k)}var x=g.slice(0);x.sort(function($,v){return $.z>v.z?1:$.z<v.z?-1:0});var L=x[0];if(L.z<B){for(var m=g.indexOf(L),F=0,Q=0;m>=Q;Q++)F+=m>Q?V.getDistance(i[Q][0],i[Q][1]):V.getDistance(i[Q][0],L);return F}}},V.calculatePointLength=function(D,C,O,t){t==z&&(t=.1);var H=Ri(z,D,C),C=[];if(H){for(var K=H.length,U=0;K>U;U++){var F=H[U];F._as&&(F=F._as);for(var b=F[0],G=1;G<F.length;G++)C.push([b,F[G]]),b=F[G]}for(var u=[],U=0;U<C.length;U++){var P=Pr(C[U][0],C[U][1],O);u.push(P)}var o=u.slice(0);o.sort(function(D,m){return D.z>m.z?1:D.z<m.z?-1:0});var M=o[0];if(M.z<t){for(var f=u.indexOf(M),r=0,U=0;f>=U;U++)r+=f>U?V.getDistance(C[U][0],C[U][1]):V.getDistance(C[U][0],M);return r}}},r.calculateClosestPoint=function(c,Q){var W=this,C=W.getDataUI(c),R=Ri(C),D=[];if(R){for(var k=R.length,h=0;k>h;h++){var B=R[h];B._as&&(B=B._as);for(var n=B[0],N=1;N<B.length;N++)D.push([n,B[N]]),n=B[N]}for(var b=[],h=0;h<D.length;h++){var P=Pr(D[h][0],D[h][1],Q);b.push(P)}return b.sort(function(s,S){return s.z>S.z?1:s.z<S.z?-1:0}),b[0]}},V.calculateClosestPoint=function(H,l,w){var p=Ri(z,H,l),l=[];if(p){for(var U=p.length,q=0;U>q;q++){var h=p[q];h._as&&(h=h._as);for(var x=h[0],S=1;S<h.length;S++)l.push([x,h[S]]),x=h[S]}for(var F=[],q=0;q<l.length;q++){var I=Pr(l[q][0],l[q][1],w);F.push(I)}return F.sort(function(g,k){return g.z>k.z?1:g.z<k.z?-1:0}),F[0]}},r.getPercentAngle=function(t,P){var J=this,p=J.getDataUI(t),q=t.getRotation?t.getRotation():0,V=Ri(p);if(V)if(0===P){var D=V[0][0],M=V[0][1];q+=d(M.y-D.y,M.x-D.x)}else if(100===P){V=V[V.length-1];var D=V[V.length-2],M=V[V.length-1];q+=d(M.y-D.y,M.x-D.x)}else{for(var C=0,g=[],h=V.length,w=0;h>w;w++){var l=V[w],v=ej(l);C+=v,g.push(v)}for(var r=C*P/100,z=Wc(r,g),O=0,a=0;z>a;a++)O+=g[a];r-=O;for(var e=ok(V[z],r),f=V[z],R=0,Z=0,c=0;c<f.length-1;c++){var n=f[c],G=f[c+1],B=G.x-n.x,I=G.y-n.y,F=W(B*B+I*I);if(R+=F,R>r){Z=c;break}}var y=f[Z];q+=d(e.y-y.y,e.x-y.x)}return q},V.getPercentAngle=function(T,L,v){var q=0,C=Ri(z,T,L);if(C)if(0===v){var R=C[0][0],M=C[0][1];q+=d(M.y-R.y,M.x-R.x)}else if(100===v){C=C[C.length-1];var R=C[C.length-2],M=C[C.length-1];q+=d(M.y-R.y,M.x-R.x)}else{for(var I=0,O=[],K=C.length,n=0;K>n;n++){var X=C[n],i=ej(X);I+=i,O.push(i)}for(var H=I*v/100,y=Wc(H,O),U=0,o=0;y>o;o++)U+=O[o];H-=U;for(var A=ok(C[y],H),Z=C[y],l=0,Y=0,e=0;e<Z.length-1;e++){var h=Z[e],E=Z[e+1],s=E.x-h.x,r=E.y-h.y,B=W(s*s+r*r);if(l+=B,l>H){Y=e;break}}var p=Z[Y];q+=d(A.y-p.y,A.x-p.x)}return q},r.calculateLength=function(a){var l=this,n=l.getDataUI(a),m=Ri(n),Q=0;if(m)if(Array.isArray(m[0]))for(var g=m.length,X=0;g>X;X++){var V=m[X],H=ej(V);Q+=H}else Q=ej(m);return Q},V.calculateLength=function(s,g){var s=Ri(z,s,g),_=0;if(s)if(Array.isArray(s[0]))for(var o=s.length,n=0;o>n;n++){var T=s[n],I=ej(T);_+=I}else _=ej(s);return _};var Pr=V.calculateClosestPointOnLine=function(h,u,C){var I=h.x,k=h.y,J=u.x,T=u.y,R=C.x,r=C.y,F={},X=J-I,D=T-k,Q=Math.sqrt(X*X+D*D),t=X/Q,x=D/Q,n=(-I+R)*t+(-k+r)*x;return F.x=I+n*t,F.y=k+n*x,Bk(F,h,u)||(F.x=Math.abs(F.x-h.x)<Math.abs(F.x-u.x)?h.x:u.x,F.y=Math.abs(F.y-h.y)<Math.abs(F.y-u.y)?h.y:u.y),X=R-F.x,D=r-F.y,F.z=Math.sqrt(X*X+D*D),F},Bk=function(q,p,i){return q.x>=Math.min(p.x,i.x)&&q.x<=Math.max(p.x,i.x)&&q.y>=Math.min(p.y,i.y)&&q.y<=Math.max(p.y,i.y)},ej=function(C){for(var h=0,X=C.length-1,i=0;X>i;i++){var j=C[i],B=C[i+1],M=B.x-j.x,V=B.y-j.y,w=W(M*M+V*V);h+=w}return h},ok=function(S,g){for(var v=0,J=0,c=0,f=S.length-1,U=0;f>U;U++){var G=S[U],D=S[U+1],P=D.x-G.x,Q=D.y-G.y;if(c=W(P*P+Q*Q),v+=c,v>g){v-=c,J=U;break}}var F=S[J],L=S[J+1],T=d(L.y-F.y,L.x-F.x),E=g-v,Q=n(T)*E,P=K(T)*E;return{x:F.x+P,y:F.y+Q}},tm=function(Z,N,p,P){var O=K(P),o=n(P),Q=O*N-o*p,e=o*N+O*p;return Z?{x:Z.x+Q,y:Z.y+e}:{x:Q,y:e}},Sc=function(q,s){q[a]=q[p]=q[$]=s[m]=z},oo=function(x,z,W,r,X,A){var _,f,g,s,S,V,w,k,J,q,d,H=[];if(M(r)>t&&(r=t),S=Q(M(r)/(B/4)),_=r/S,f=-_,g=-W,S>0){V=x+K(W)*X,w=z+n(-W)*A,H.push({x:V,y:w});for(var h=0;S>h;h++)g+=f,s=g-f/2,k=x+K(g)*X,J=z+n(g)*A,q=x+K(s)*(X/K(f/2)),d=z+n(s)*(A/K(f/2)),H.push({x:q,y:d}),H.push({x:k,y:J})}return H},Ri=function(b,V,w){if(V==z){var G=b._data;if(G instanceof L){if(V=G.getPoints(),w=G.getSegments(),(!w||0===w.size())&&V){w=new e.List([1]);for(var n=1;n<V.size();n++)w.add(2)}}else if(G instanceof I){var X=b._78o;if(X){var f=X.type,$=X.points,p=X.segments,B=X._4O;if(!f||$){var S=X.sourcePoint,K=S.x,E=S.y,O=X.targetPoint,R=O.x,s=O.y;if(f)p?(V=new o({x:K,y:E}),V.addAll($),V.add({x:R,y:s}),w=new o(p._as)):(V=new o({x:K,y:E}),w=new o([1]),$.each(function(Z){V.add(Z),w.add(2)}),V.add({x:R,y:s}),w.add(2));else if(X.looped){V=new o(oo(K,E,0,t,X.radius,X.radius)),w=new o([1]);for(var n=0;n<(V.size()-1)/2;n++)w.add(3)}else V=new o,X.center?(V.add({x:X.c1.x,y:X.c1.y}),V.add({x:K,y:E}),V.add({x:R,y:s}),V.add({x:X.c2.x,y:X.c2.y}),w=new o([1,2,2,2])):(V.add({x:K,y:E}),V.add({x:R,y:s}),w=new o([1,2]))}else if(B)if(V=new o(B.points._as),B.segments)w=new o(B.segments._as);else{w=new o([1]);for(var n=1;n<B.points.size();n++)w.add(2)}}}}if(V){if(Array.isArray(V)&&(V=new o(V)),"number"==typeof V.get(0)){for(var i=new e.List,n=0;n<V.size();n+=2)i.add({x:V.get(n),y:V.get(n+1)});V=i}if(!w){w=[];for(var n=0;n<V.size();n++)0===n?w.push(1):w.push(2)}Array.isArray(w)&&(w=new o(w));for(var A=g.toPointsArray(V._as,w._as,50),H=A.length,M=[],n=0;H>n;n++){var c=A[n];c.length>1&&M.push(c)}return M}},hj=function(U){var l=U._data,B=Ri(U);if(B){l.s("flow.reverse")&&(B.reverse(),B.forEach(function(U){U.reverse()}));for(var o=0,E=[],b=B.length,K=0;b>K;K++){var c=B[K],g=ej(c);o+=g,E.push(g)}if(l[a]=E,l[p]=o,l[$]=B,l instanceof I){var D=V.unionPoint(B),w=D.x+D.width/2,h=D.y+D.height/2;l.$10e={x:w,y:h}}nb(U,!0)}},nb=(V.getPercentPositionOnPoints=function(C,O,l){if(C){var P=Ri(z,C,O);if(P){var g;if(0===l)g=P[0][0];else if(100===l)P=P[P.length-1],g=P[P.length-1];else{for(var Q=0,Y=[],i=P.length,v=0;i>v;v++){var m=P[v],y=ej(m);Q+=y,Y.push(y)}for(var E=Q*l/100,V=Wc(E,Y),$=0,Z=0;V>Z;Z++)$+=Y[Z];E-=$,g=ok(P[V],E)}return g}}},r.getPercentPosition=function(d,A){var h=this,T=h.getDataUI(d),B=Ri(T);if(B){var c;if(0===A)c=B[0][0];else if(100===A)B=B[B.length-1],c=B[B.length-1];else{for(var p=0,P=[],y=B.length,z=0;y>z;z++){var C=B[z],t=ej(C);p+=t,P.push(t)}for(var J=p*A/100,b=Wc(J,P),u=0,S=0;b>S;S++)u+=P[S];J-=u,c=ok(B[b],J)}return c}},function(X,q){var M=X._data,Z=M[p],P=M.s(U),e=M.s(S),$=0,o=M[a],t=M.s(x),d=M.s(i),y=M.s(F),Q=(t-d)/(y-1),k=[];if(o){if(1===y)k.push(t);else if(2===y)k.push(t),k.push(d);else{if(!(y>2))return;k.push(t);for(var O=y-2;O>0;O--)k.push(d+Q*O);k.push(d)}var I=0,T=0;k.forEach(function(D){y-1>I&&(T+=M.getFlowElementSpace(D)),I++}),T+=(t+d)/2,$=(Z-P*T+T)/P;var u=X[m];for(null==u&&(u=0),q||(u+=e);u>Z+T;){var R=X._overCount;R?R++:R=1,R>=P&&(R=null),X._overCount=R,M.s("flow.autoreverse")?R?u-=$+T:(u=0,M.s("flow.reverse",!M.s("flow.reverse"))):u-=$+T}X[m]=u}}),bd=function(i){var X=i.data,e=this.dm();if(X&&"add"===i.kind){var v=e.$3e;v&&X.s(k)&&v.indexOf(X)<0&&v.push(X)}"clear"===i.kind&&(e.$3e=[])},_p=function(n){var $=n.property,X=n.data,G=n.newValue,H=this.dm().$3e;if(H&&"s:flow"===$)if(G)H.indexOf(X)<0&&H.push(X);else for(var I=H.length,m=0;I>m;m++)if(H[m]===X){H.splice(m,1);break}},Wc=Wc=function(g,E){for(var x=0,X=E.length,S=0;X>S;S++){var n=E[S];if(x+=n,x>g)return S}return Math.min(S,X-1)},Fr=function(A){var V=this,c=V._data,e=c[p],B=c[a],t=c[$],v=c.s(U),Q=0,n=V[m],K=c.s(x),l=c.s(i),H=c.s(F),y=c.s(s),N=c.s(Y),T=c.s(R),O=(N-y)/(H-1),h=(K-l)/(H-1),D=c.getRotation?c.getRotation():0,L=c.getPosition?c.p():c.$10e,w=[],q=[];if(n!=z){if(1===H)w.push(K);else if(2===H)w.push(K),w.push(l);else{if(!(H>2))return;w.push(K);for(var f=H-2;f>0;f--)w.push(l+h*f);w.push(l)}if(1===H)q.push(N);else if(2===H)q.push(N),q.push(y);else{if(!(H>2))return;q.push(N);for(var f=H-2;f>0;f--)q.push(y+O*f);q.push(y)}var S=0,Z=0;w.forEach(function(D){H-1>S&&(Z+=c.getFlowElementSpace(D)),S++}),Z+=(K+l)/2,Q=(e-v*Z+Z)/v,A.save();for(var f=0;v>f;f++){var r=n,o=0,E=V._overCount,b=0;c.s("flow.autoreverse")&&E&&E>v-(f+1)||(r-=f*(Q+Z),S=0,w.forEach(function(l){var F=r-o;if(F>=0&&e>F){var f=!0,v=Wc(F,B);b=0;for(var M=0;v>M;M++)b+=B[M];if(F-=b,f){var Y=ok(t[v],F),P=D;if(T){for(var u=t[v],j=0,C=0,y=0;y<u.length-1;y++){var N=u[y],G=u[y+1],E=G.x-N.x,k=G.y-N.y,Z=W(E*E+k*k);if(j+=Z,j>F){C=y;break}}var I=u[C];P+=d(Y.y-I.y,Y.x-I.x)}D&&(Y=tm(L,Y.x-L.x,Y.y-L.y,D)),V.$5e(A,Y,l,q[S],P)}}o+=c.getFlowElementSpace(w[S]),S++}))}A.restore()}},Vo=function(){var Z=this,r=Z._data,L=r.s(x),i=!1,N=z;if(Z._6I||(i=!0),N=r instanceof I?h.call(Z):b.call(Z),r.s(k)&&i){var X=r.s(Y),S=r.s(v);S&&X>L&&(L=X),L>0&&V.grow(N,Q(L/2)),hj(Z)}return!r.s(k)&&i&&Sc(r,Z),N};T.getFlowElementSpace=function(){return this.s(C)},E._79o=Vo,c._79o=Vo,J[x]==z&&(J[x]=7),J[i]==z&&(J[i]=0),J[U]==z&&(J[U]=1),J[S]==z&&(J[S]=3),J[F]==z&&(J[F]=10),J[C]==z&&(J[C]=3.5),J[R]==z&&(J[R]=!1),J[A]==z&&(J[A]="rgba(255, 255, 114, 0.4)"),J[O]==z&&(J[O]="rgba(255, 255, 0, 0.3)"),J[q]==z&&(J[q]="rgba(255, 255, 0, 0)"),J[v]==z&&(J[v]=1),J[Y]==z&&(J[Y]=22),J[s]==z&&(J[s]=4),H.prepareRemove=function(V){u.call(this,V);var w=V._dataModel,N=w.$3e;if(N)for(var R=N.length,d=0;R>d;d++)if(N[d]===V){N.splice(d,1);break}},r.setDataModel=function(J){var v=this,S=v._dataModel;if(S!==J){S&&(S.umm(bd,v),S.umd(_p,v),S.$3e=[]),J.mm(bd,v),J.md(_p,v);var P=J.$3e=[];J.each(function(I){I.s(k)&&P.indexOf(I)<0&&P.push(I)}),al.call(v,J)}},r.setFlowInterval=function(c){var p=this,Q=p.$11e;p.$11e=c,p.fp("flowInterval",Q,c),p.$7e!=z&&(clearInterval(p.$7e),delete p.$7e,p.enableFlow(c))},r.getFlowInterval=function(){return this.$11e},r.$9e=function(){var k,T,M,n=this,l=n.tx(),I=n.ty(),c=n.getZoom(),y=n.getWidth(),R=n.getHeight(),K={x:-l/c,y:-I/c,width:y/c,height:R/c},e=n.dm().$3e,F=n._56I,v=new o;if(e.forEach(function(s){F[s.getId()]&&(k=n.getDataUI(s),k&&(M=k._79o(),M&&v.add(M)))}),0!==v.size()&&(v.each(function(s){V.intersectsRect(K,s)&&(T=V.unionRect(T,s))}),T&&(T&&(V.grow(T,Z(1,1/c)),T.x=f(T.x*c)/c,T.y=f(T.y*c)/c,T.width=Q(T.width*c)/c,T.height=Q(T.height*c)/c,T=V.intersection(K,T)),T))){var U=n._canvas.getContext("2d");U.save(),U.lineCap=V.lineCap,U.lineJoin=V.lineJoin,g.translateAndScale(U,l,I,c),U.beginPath(),U.rect(T.x,T.y,T.width,T.height),U.clip(),U.clearRect(T.x,T.y,T.width,T.height),n.$6e(U,T),U.restore()}},r.$6e=function(n,_){var P,F,G=this;G._93db(n),G.each(function(q){G._56I[q._id]&&(P=G.getDataUI(q),P&&(F=P._79o(),(!_||V.intersectsRect(_,F))&&P._42(n)))}),G._92db(n)},r.enableFlow=function(o){var q=this,a=q.dm(),C=a.$3e;q.$7e==z&&(C.forEach(function(x){var p=q.getDataUI(x);hj(p)}),q.$7e=setInterval(function(){a.$3e.forEach(function(I){nb(q.getDataUI(I))}),q.$9e()},o||q.$11e||50))},r.disableFlow=function(){var J=this;clearInterval(J.$7e),delete J.$7e;var M=J.dm().$3e;M&&J.$9e()},l.$5e=function(h,F,k,W,r){var x=this,p=x._data,C=x.gv,E=p.s(A),Q=p.s(O),D=p.s(q),X=p.s(v),G=C.$8e,s=p.s(w);if(G==z&&(G=C.$8e={}),h.beginPath(),s!=z){var y=V.getImage(s),b=k/2;h.translate(F.x,F.y),h.rotate(r),h.translate(-F.x,-F.y),V.drawImage(h,y,F.x-b,F.y-b,k,k,p),h.translate(F.x,F.y),h.rotate(-r),h.translate(-F.x,-F.y)}else h.fillStyle=E,h.arc(F.x,F.y,k/2,0,t,!0),h.fill();if(X){var K=22,c=K+"_"+Q+"_"+D,j=G[c];if(j==z){var S=Td("canvas");g.setCanvas(S,K,K);var H=S.getContext("2d"),M=K/2,d=M,P=M;g.translateAndScale(H,0,0,1),H.beginPath();var i=H.createRadialGradient(d,P,0,d,d,M);i.addColorStop(0,Q),i.addColorStop(1,D),H.fillStyle=i,H.arc(d,P,M,0,t,!0),H.fill(),j=G[c]=S}var b=W/2;V.drawImage(h,j,F.x-b,F.y-b,W,W,p)}},c._80o=function(X){N.call(this,X);var I=this,p=I._data,e=I.gv;p.s(k)&&e.$7e!=z&&Fr.call(I,X)},E._80o=function(m){_.call(this,m);var n=this,N=n._data,F=n.gv;N.s(k)&&F.$7e!=z&&Fr.call(n,m)}}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:this,Object);