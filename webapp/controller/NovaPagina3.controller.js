sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",

], function(Controller, Fragment) {
    "use strict";

    return Controller.extend("locadora.sap.projetolocadorafiori.controller.NovaPagina3", {
        onNavBack: function() {
            window.history.go(-1);
        },

        onConfig: function(oEvent){
            var oButton1 = oEvent.getSource(),
            oView = this.getView();

            if (!this._pDialogConfig) {
                 this._pDialogConfig = Fragment.load({
                    id: oView.getId(),
                    name: "locadora.sap.projetolocadorafiori.view4.Config",
                    controller: this
                }).then(function(oDialog){
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }

            this._pDialogConfig.then(function(oDialog){
                oDialog.open();
            }.bind(this));
        },

        onVoltar3: function(){
            this._pDialogConfig.then(function(oDialog){
                oDialog.close();
            }.bind(this));
        },

        SwitchMode: function() {
            var sCurrentTheme = sap.ui.getCore().getConfiguration().getTheme();
            var sNewTheme = (sCurrentTheme === "sap_horizon_dark") ? "sap_horizon" : "sap_horizon_dark";
            this.applyTheme(sNewTheme);
            },
        
            applyTheme: function(sTheme) {
             var oCore = sap.ui.getCore();
             oCore.applyTheme(sTheme);

        },

    });
});