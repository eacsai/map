/**/_jsload2&&_jsload2('copyrightctrl', 'z.extend($b.prototype,{tf:function(){this.M&&this.Fe(this.M)},initialize:function(a){Ub.prototype.initialize.call(this,a);this.Ea();this.Pn();this.fa(a);return this.P},fa:function(a){var b=this;a.addEventListener("load",function(){b.Pn()});a.addEventListener("moveend",function(){b.Pn()});a.addEventListener("zoomend",function(){b.Pn()});a.addEventListener("maptypechange",function(){b.P&&(b.P.style.color=b.M.va().cm())})},Ea:function(){Ub.prototype.Ea.call(this);z.R.eb(this.P,"BMap_cpyCtrl");var a= this.P.style;a.cursor="default";a.whiteSpace="nowrap";a.MozUserSelect="none";a.color=this.M.va().cm();a.background="none";a.font="11px/15px "+H.fontFamily;Ub.prototype.fr.call(this)},Pn:function(){if(this.M&&this.P&&0!=this.bc.length)for(var a=0,b=this.bc.length;a<b;a++){this.M.ka();var c=this.M.Ib({x:0,y:0}),e=this.M.Ib({x:this.M.width,y:this.M.height}),c=new hb(c,e);if(this.bc[a].bounds&&c.Ds(this.bc[a].bounds)==s){if(this.P)for(e=0;e<this.P.children.length;e++)if(this.P.children[e].getAttribute("_cid")== this.bc[a].id&&"none"!=this.P.children[e].style.display){this.P.children[e].style.display="none";return}}else if(this.P){for(var c=t,e=0,f=this.P.children.length;e<f;e++)if(this.P.children[e].getAttribute("_cid")==this.bc[a].id){c=p;this.P.children[e].style.display="inline";this.P.children[e].innerHTML!=this.bc[a].content&&(this.P.children[e].innerHTML=this.bc[a].content);break}c||this.nq(this.bc[a])}}},Nv:function(a){if(a&&Za(a.id)&&!isNaN(a.id)){var b={bounds:s,content:""},c;for(c in a)b[c]=a[c]; if(a=this.Wl(a.id))for(var e in b)a[e]=b[e];else this.bc.push(b);this.Pn()}},Wl:function(a){for(var b=0,c=this.bc.length;b<c;b++)if(this.bc[b].id==a)return this.bc[b]},OC:x("bc"),hE:function(a){for(var b,c=0,e=this.bc.length;c<e;c++)this.bc[c].id==a&&(b=this.bc.splice(c,1),c--,e=this.bc.length);(a=this.Zc(a))&&a.parentNode&&a.parentNode.removeChild(a);this.Pn();return b},nq:function(a){this.P&&(this.P.innerHTML+="<span _cid=\'"+a.id+"\'>"+a.content+"</span>")},Zc:function(a){var b=Ub.prototype.Zc.call(this); if(Hb(a)){if(b)for(var c=0,e=b.children.length;c<e;c++)if(b.children[c].getAttribute("_cid")==a)return b.children[c]}else return b}});U(Tf,{addCopyright:Tf.Nv,removeCopyright:Tf.hE,getCopyright:Tf.Wl,getCopyrightCollection:Tf.OC}); ');
