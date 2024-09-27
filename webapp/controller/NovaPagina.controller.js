sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/m/Dialog",
	"sap/m/Button",
    "sap/m/MessageBox",
    "sap/m/Text",
    "sap/m/Select",
    "sap/m/SelectList",
    "sap/m/StandardListItem",
    "sap/m/Label",
    "sap/m/Input",
    "sap/ui/layout/VerticalLayout",
    "sap/ui/layout/HorizontalLayout",
    "sap/ui/layout/GridData",
    "sap/m/RadioButton",
    "sap/m/RadioButtonGroup",
    "sap/m/MessageToast",
    "sap/ui/core/Item",

], function(Controller, JSONModel, Fragment, Dialog, Button, MessageBox, Text, Select, SelectList, StandardListItem, Label, Input, VerticalLayout, HorizontalLayout, GridData, RadioButton, RadioButtonGroup, Item, MessageToast) {
    "use strict";

    return Controller.extend("locadora.sap.projetolocadorafiori.controller.NovaPagina", {
        onInit: function() {
            this.getView().addStyleClass("fullScreenPage");
            this.applyTheme("sap_horizon_dark");
        },

        onConfig: function(oEvent){
            var oButton1 = oEvent.getSource(),
            oView = this.getView();

            if (!this._pDialogConfig) {
                 this._pDialogConfig = Fragment.load({
                    id: oView.getId(),
                    name: "locadora.sap.projetolocadorafiori.view2.Config",
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

        onVoltar2: function(){
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

        onNavBack: function() {
            window.history.go(-1);
        },

        tileXbox: function(oEvent){
            var aData;
            var oButton1 = oEvent.getSource(),
            oView = this.getView();

            if (!this._pDialogXbox) {
                this._pDialogXbox = Fragment.load({
                    id: oView.getId(),
                    name: "locadora.sap.projetolocadorafiori.view2.DialogXbox",
                    controller: this
                }).then(function(oDialog){
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }

            aData = [
                { name: "Halo Infinite", price: "R$ 199,90", releaseDate: "2021-12-08" },
                { name: "Forza Horizon 5", price: "R$ 249,90", releaseDate: "2021-11-09" },
                { name: "Gears 5", price: "R$ 199,90", releaseDate: "2019-09-10" },
                { name: "Ori and the Will of the Wisps", price: "R$ 149,90", releaseDate: "2020-03-11" },
                { name: "Sea of Thieves", price: "R$ 179,90", releaseDate: "2018-03-20" },
                { name: "State of Decay 2", price: "R$ 149,90", releaseDate: "2018-05-22" },
                { name: "Forza Motorsport 7", price: "R$ 249,90", releaseDate: "2017-10-03" },
                { name: "The Medium", price: "R$ 139,90", releaseDate: "2021-01-28" },
                { name: "Grounded", price: "R$ 99,90", releaseDate: "2022-09-27" },
                { name: "Fable (Próximo)", price: "A definir", releaseDate: "A definir" },
            ];

            var oTable = this.byId("XboxTable");
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData(aData);
            oTable.setModel(oModel);
            oTable.bindItems("/", new sap.m.ColumnListItem({
                cells: [
                    new sap.m.Text({ text: "{name}" }),
                    new sap.m.Text({ text: "{price}" }),
                    new sap.m.Text({ text: "{releaseDate}" })
                ]
            }));

            this._pDialogXbox.then(function(oDialog){
                oDialog.open();
            }.bind(this));

        },

        onDialogXboxClose: function() {
            this.byId("dialogXbox").close();
        },

        tilePS5: function(oEvent){
            var aData;
            var oButton1 = oEvent.getSource(),
            oView = this.getView();

            if (!this._pDialogPS5) {
                this._pDialogPS5 = Fragment.load({
                    id: oView.getId(),
                    name: "locadora.sap.projetolocadorafiori.view2.DialogPS5",
                    controller: this
                }).then(function(oDialog){
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }

            aData = [
                { name: "Spider-Man: Miles Morales", price: "R$ 249,90", releaseDate: "2020-11-12" },
                { name: "The Last of Us Part II", price: "R$ 299,90", releaseDate: "2020-06-19" },
                { name: "Ghost of Tsushima", price: "R$ 299,90", releaseDate: "2020-07-17" },
                { name: "Returnal", price: "R$ 349,90", releaseDate: "2021-04-30" },
                { name: "Gran Turismo 7", price: "R$ 349,90", releaseDate: "2022-03-04" },
                { name: "Ratchet & Clank: Rift Apart", price: "R$ 349,90", releaseDate: "2021-06-11" },
                { name: "Demon's Souls", price: "R$ 299,90", releaseDate: "2020-11-12" },
                { name: "Horizon Forbidden West", price: "R$ 349,90", releaseDate: "2022-02-18" },
                { name: "Sackboy: A Big Adventure", price: "R$ 299,90", releaseDate: "2020-11-12" },
                { name: "God of War: Ragnarok", price: "R$ 349,90", releaseDate: "2022-11-09" }
            ];

            var oTable = this.byId("PS5Table");
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData(aData);
            oTable.setModel(oModel);
            oTable.bindItems("/", new sap.m.ColumnListItem({
                cells: [
                    new sap.m.Text({ text: "{name}" }),
                    new sap.m.Text({ text: "{price}" }),
                    new sap.m.Text({ text: "{releaseDate}" })
                ]
            }));

            this._pDialogPS5.then(function(oDialog){
                oDialog.open();
            }.bind(this));

        },

        onDialogPS5Close: function() {
            this.byId("dialogPS5").close();
        },

        tileNintendo: function(oEvent){
            var aData;
            var oButton1 = oEvent.getSource(),
            oView = this.getView();

            if (!this._pDialogNintendo) {
                this._pDialogNintendo = Fragment.load({
                    id: oView.getId(),
                    name: "locadora.sap.projetolocadorafiori.view2.DialogNintendo",
                    controller: this
                }).then(function(oDialog){
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }

            aData = [
                { name: "The Legend of Zelda: Breath of the Wild", price: "R$ 299,90", releaseDate: "2017-03-03" },
                { name: "Super Mario Odyssey", price: "R$ 249,90", releaseDate: "2017-10-27" },
                { name: "Mario Kart 8 Deluxe", price: "R$ 249,90", releaseDate: "2017-04-28" },
                { name: "Splatoon 2", price: "R$ 249,90", releaseDate: "2017-07-21" },
                { name: "Animal Crossing: New Horizons", price: "R$ 299,90", releaseDate: "2020-03-20" },
                { name: "Super Smash Bros. Ultimate", price: "R$ 299,90", releaseDate: "2018-12-07" },
                { name: "Fire Emblem: Three Houses", price: "R$ 249,90", releaseDate: "2019-07-26" },
                { name: "Pokémon Sword and Shield", price: "R$ 299,90", releaseDate: "2019-11-15" },
                { name: "Luigi's Mansion 3", price: "R$ 299,90", releaseDate: "2019-10-31" },
                { name: "Xenoblade Chronicles 2", price: "R$ 249,90", releaseDate: "2017-12-01" }
            ];

            var oTable = this.byId("NintendoTable");
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData(aData);
            oTable.setModel(oModel);
            oTable.bindItems("/", new sap.m.ColumnListItem({
                cells: [
                    new sap.m.Text({ text: "{name}" }),
                    new sap.m.Text({ text: "{price}" }),
                    new sap.m.Text({ text: "{releaseDate}" })
                ]
            }));

            this._pDialogNintendo.then(function(oDialog){
                oDialog.open();
            }.bind(this));

        },

        onDialogNintendoClose: function() {
            this.byId("dialogNintendo").close();
        },

        tileSteam: function(oEvent){
            var aData;
            var oButton1 = oEvent.getSource(),
            oView = this.getView();

            if (!this._pDialogSteam) {
                this._pDialogSteam = Fragment.load({
                    id: oView.getId(),
                    name: "locadora.sap.projetolocadorafiori.view2.DialogSteam",
                    controller: this
                }).then(function(oDialog){
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }

            aData = [
                { name: "Counter-Strike: Global Offensive (CS:GO)", price: "Gratuito", releaseDate: "2012-08-21" },
                { name: "Dota 2", price: "Gratuito", releaseDate: "2013-07-09" },
                { name: "PUBG: Battlegrounds", price: "R$ 74,99", releaseDate: "2017-12-20" },
                { name: "Apex Legends", price: "Gratuito", releaseDate: "2019-02-04" },
                { name: "Grand Theft Auto V (GTA V)", price: "R$ 99,99", releaseDate: "2015-04-14" },
                { name: "Rust", price: "R$ 104,99", releaseDate: "2018-02-08" },
                { name: "Team Fortress 2", price: "Gratuito", releaseDate: "2007-10-10" },
                { name: "ARK: Survival Evolved", price: "R$ 93,99", releaseDate: "2017-08-29" },
                { name: "Destiny 2", price: "Gratuito", releaseDate: "2019-10-01" },
                { name: "Rainbow Six Siege", price: "R$ 79,99", releaseDate: "2015-12-01" }
            ];

            var oTable = this.byId("SteamTable");
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData(aData);
            oTable.setModel(oModel);
            oTable.bindItems("/", new sap.m.ColumnListItem({
                cells: [
                    new sap.m.Text({ text: "{name}" }),
                    new sap.m.Text({ text: "{price}" }),
                    new sap.m.Text({ text: "{releaseDate}" })
                ]
            }));

            this._pDialogSteam.then(function(oDialog){
                oDialog.open();
            }.bind(this));

        },

        onDialogSteamClose: function() {
            this.byId("dialogSteam").close();
        },

        pressInsta: function() {
            window.open("https://www.instagram.com/", "_blank");
        },

        pressFace: function() {
            window.open("https://www.facebook.com/", "_blank");
        },

        pressX: function() {
            window.open("https://www.twitter.com/", "_blank");
        },

        onNewsPress1: function(oEvent) {
            window.open("https://www.adrenaline.com.br/games/marvels-wolverine-tem-dois-novos-clipes-vazados-na-internet/", "_blank");
        },

        onNewsPress2: function(oEvent) {
            window.open("https://www.tudocelular.com/tech/noticias/n224881/black-myth-wukong-benchmark-teste-85-mil-jogadores.html#:~:text=Black%20Myth%3A%20Wukong%20atinge%20marca%20de%2010%20milh%C3%B5es%20de%20unidades%20vendidas,-25%20Agosto%202024&text=Ap%C3%B3s%20termos%20conferido%20por%20aqui,oficial%20do%20jogo%20no%20Twitter.", "_blank");
        },

        onNewsPress3: function(oEvent) {
            window.open("https://draft5.gg/noticia/live-sa-cq-rmr-das-americas-major-de-xangai", "_blank");
        },

        onNewsPress4: function(oEvent) {
            window.open("https://maisesports.com.br/lol-inspirado-no-valorant-riot-altera-sistema-de-receita-das-franquias/", "_blank");
        },

        tile1: function() {
            MessageBox.information("oi");
        },

        tile2: function() {

        },

        tile3: function() {

        },

        tile4: function() {

        },

        tile5: function() {

        },

        tile6: function() {

        },

        tile7: function() {

        }
        
    });
});