sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("com.sap.myproject.controller.View1", {
        onInit: function () {

        },
        onSave: function () {
            debugger
            let oModel = this.getOwnerComponent().getModel();

            const oproductID = this.getView().byId("productID").getValue();
            const oproductName = this.getView().byId("productName").getValue();
            const oquantity = this.getView().byId("quantity").getValue();
            const oCreatedBy = this.getView().byId("createdBy").getValue();

            let data = {
                "ProductID": oproductID,
                "ProductName": oproductName,
                "Quantity": oquantity,
                "CreatedBy": oCreatedBy
            };
            // let data = {
            //     "ProductID": 123,
            //     "ProductName": "Hardcoded Product",
            //     "Quantity": 5,
            //     "CreatedBy": "John Doe"
            // };

            oModel.create("/Products", data, {
                success: function (res) {
                    MessageBox.success("Submit successfully");
                    console.log("done", res);
                },
                error: function (err) {
                    MessageBox.error("ERROR");
                    console.error("Error in Submit:", err);
                }
            });
        },
        onCancel: function () {
            this.getView().byId("productID").setValue("");
            this.getView().byId("productName").setValue("");
            this.getView().byId("quantity").setValue("");
            this.getView().byId("createdBy").setValue("");
        }
    });
});
