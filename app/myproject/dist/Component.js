sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","com/sap/myproject/model/models"],function(e,t,i){"use strict";return e.extend("com.sap.myproject.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});