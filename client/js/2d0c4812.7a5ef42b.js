(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0c4812"],{"3ab0":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{staticClass:"bg-light"},[i("q-layout-header",[i("q-toolbar",{staticClass:"q-py-none",attrs:{color:"teal-11"}},[i("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu",color:"pink-12"},on:{click:t.ToogleSidebar}}),i("q-toolbar-title",{staticClass:"text-pink-4",attrs:{shrink:""}},[i("span",[t._v(t._s(t.$NodePackage.productName))])]),i("q-toolbar-title")],1)],1),i("q-layout-drawer",{attrs:{side:"left",mini:t.leftDrawer.showMini,width:200},model:{value:t.leftDrawer.show,callback:function(e){t.$set(t.leftDrawer,"show",e)},expression:"leftDrawer.show"}},[i("q-scroll-area",{staticClass:"fit"},[i("q-list",{staticStyle:{padding:"0"},attrs:{highlight:"","no-border":""}},[i("q-item",{attrs:{to:"/"}},[i("q-item-side",{attrs:{icon:"home",color:"pink-11"}}),i("q-item-main",{attrs:{label:"Home"}})],1),i("q-item",{attrs:{to:"/products"}},[i("q-item-side",{attrs:{icon:"child_friendly",color:"pink-11"}}),i("q-item-main",{attrs:{label:"Inventory"}})],1)],1)],1)],1),i("q-page-container",[i("router-view")],1)],1)},o=[];a._withStripped=!0;var r={name:"LayoutIndex",data:function(){return{envDev:!1,leftDrawer:{show:!0,showMini:!1}}},methods:{ToogleSidebar:function(){this.$q.platform.is.mobile?this.leftDrawer.show=!this.leftDrawer.show:this.leftDrawer.showMini=!this.leftDrawer.showMini}}},s=r,l=i("2877"),n=Object(l["a"])(s,a,o,!1,null,null,null);n.options.__file="index.vue";e["default"]=n.exports}}]);