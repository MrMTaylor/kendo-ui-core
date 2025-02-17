---
title: Customize the Predefined Dialogs
page_title: Customize the Predefined Dialogs 
description: "Learn how to customize the predefined Kendo UI for jQuery Dialogs."
slug: overview_customizepredefineddialogs_widget
previous_url: /controls/layout/dialog/how-to/customize-predefined-dialogs 
tags: telerik, kendo, jquery, dialog, customize, predefined, dialogs 
component: dialog
type: how-to
res_type: kb
---

## Environment

<table>
 <tr>
  <td>Product</td>
  <td>Progress Kendo UI Dialog for jQuery</td>
 </tr>
 <tr>
  <td>Operating System</td>
  <td>Windows 10 64bit</td>
 </tr>
 <tr>
  <td>Visual Studio version</td>
  <td>Visual Studio 2017</td>
 </tr>
 <tr>
  <td>Preferred Language</td>
  <td>JavaScript</td>
 </tr>
</table>

## Description

How can I open [alert, prompt, and confirmation Kendo UI Dialogs]({%slug overview_kendoui_dialog_widget%}#predefined-dialogs)?

## Solution

The easiest way to achieve this behavior is to use the dedicated methods which are exposed through the Kendo UI API. However, this configuration enables you to change only the message without providing you the control over the Dialog itself&mdash;for example, over the title.

The following example demonstrates a possible way to implement your own methods that open customized instances of the alert, prompt, and confirmation Dialogs. This is achieved by using the [`kendo.ui.Alert`](/api/javascript/ui/alert), [`kendo.ui.Prompt`](/api/javascript/ui/prompt), and [`kendo.ui.Confirm`](/api/javascript/ui/confirm) configuration options.

````dojo
    <button id="alertBtn" >myalert</button>
    <button id="confirmBtn">myconfirm</button>
    <button id="promptBtn">myprompt</button>
    <script>
      $("#alertBtn").kendoButton({
        click: function () {
          window.myalert("This is a Kendo UI Alert message!");
        }
      });
      $("#confirmBtn").kendoButton({
        click: function () {
          window.myconfirm("Are you sure that you want to proceed?").then(function () {
            window.myalert("Operation done!");
          }, function () {
            window.myalert("You chose to Cancel action.");
          });
        }
      });
      $("#promptBtn").kendoButton({
        click:function () {
          window.myprompt("Please, enter a arbitrary value:", "any value").then(function (data) {
            window.myalert(kendo.format("The value that you entered is '{0}'", data));
          }, function () {
            window.myalert("Cancel entering value.");
          })
        }
      });
      function myalert(content){
        $("<div></div>").kendoAlert({
          title: "My Title",
          content: content,
          messages:{
            okText: "Ok"
          }
        }).data("kendoAlert").open();
      }
      function myconfirm(content){
        return $("<div></div>").kendoConfirm({
          title: "My Title",
          content: content
        }).data("kendoConfirm").open().result;
      }
      function myprompt(content, defaultValue){
        return $("<div></div>").kendoPrompt({
          title: "My Title",
          value: defaultValue,
          content: content
        }).data("kendoPrompt").open().result;
      }
    </script>
````

## See Also

* [Basic Usage of the Dialog (Demo)](https://demos.telerik.com/kendo-ui/dialog/index)
* [Using the API of the Dialog (Demo)](https://demos.telerik.com/kendo-ui/dialog/api)
* [JavaScript API Reference of the Dialog](/api/javascript/ui/dialog)
