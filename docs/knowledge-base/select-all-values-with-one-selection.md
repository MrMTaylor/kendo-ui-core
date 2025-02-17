---
title: Select All MultiSelect Values with a Single Selection
page_title: Select All MultiSelect Values with a Single Selection
description: "Learn how to create a dataItem that holds an all- value that will select all the items in the Kendo UI MultiSelect widget."
previous_url: /controls/editors/multiselect/how-to/select-all-values-with-one-selection, /controls/editors/multiselect/how-to/selection/select-all-values-with-one-selection
slug: howto_select_allvalues_witha_single_selection_multiselect
tags: telerik, kendo, jquery, multiselect, select, all, values, with, single, one, selection
component: multiselect
type: how-to
res_type: kb
---

## Environment

<table>
 <tr>
  <td>Product</td>
  <td>Progress Kendo UI MultiSelect for jQuery</td>
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

How can I create a `dataItem` that holds an `all`-value, which selects all items in the Kendo UI MultiSelect widget?

## Solution

The following example demonstrates how to achieve the desired scenario.

```dojo
    <div id="example" role="application">
    <div class="demo-section k-header">
      <h2>Invite Attendees</h2>
      <label for="required">Required</label>
      <select id="required" multiple="multiple" data-placeholder="Select attendees...">
        <option>ALL</option>
        <option>Steven White</option>
        <option>Nancy King</option>
        <option>Nancy Davolio</option>
        <option>Robert Davolio</option>
        <option>Michael Leverling</option>
        <option>Andrew Callahan</option>
        <option>Michael Suyama</option>
        <option selected>Anne King</option>
        <option>Laura Peacock</option>
        <option>Robert Fuller</option>
        <option>Janet White</option>
        <option>Nancy Leverling</option>
        <option>Robert Buchanan</option>
        <option>Margaret Buchanan</option>
        <option selected>Andrew Fuller</option>
        <option>Anne Davolio</option>
        <option>Andrew Suyama</option>
        <option>Nige Buchanan</option>
        <option>Laura Fuller</option>
      </select>
    </div>
    <style scoped>
      .demo-section {
        width: 350px;
        min-height: 140px;
      }
      .demo-section h2 {
        font-weight: normal;
      }
      .demo-section label {
        display: inline-block;
        margin: 15px 0 5px 0;
      }
      .demo-section select {
        width: 350px;
      }
      #get {
        float: right;
        margin: 25px auto 0;
      }
    </style>
    <script>
      $(document).ready(function() {
        // create MultiSelect from select HTML element
        var required = $("#required").kendoMultiSelect({
          select: function(e) {
            var dataItem = this.dataSource.view()[e.item.index()];
            var values = this.value();

            if (dataItem.value === "ALL") {
                this.value(values.includes("ALL") ? "ALL" : "");
            } else if (values.indexOf("ALL") !== -1) {
              values = $.grep(values, function(value) {
                return value !== "ALL";
              });

              this.value(values.length === this.dataSource.view().length -1 ? "" : values);
            }
          }
        }).data("kendoMultiSelect");
      });
    </script>
  </div>
```

The following example demonstrates how to select all items by selecting the `ALL` item.

```dojo
    <div id="example" role="application">
      <div class="demo-section k-header">
        <h2>Invite Attendees</h2>
        <label for="required">Required</label>
        <select id="required" multiple="multiple" data-placeholder="Select attendees...">
          <option>ALL</option>
          <option>Steven White</option>
          <option>Nancy King</option>
          <option>Nancy Davolio</option>
          <option>Robert Davolio</option>
          <option>Michael Leverling</option>
          <option>Andrew Callahan</option>
          <option>Michael Suyama</option>
          <option selected>Anne King</option>
          <option>Laura Peacock</option>
          <option>Robert Fuller</option>
          <option>Janet White</option>
          <option>Nancy Leverling</option>
          <option>Robert Buchanan</option>
          <option>Margaret Buchanan</option>
          <option selected>Andrew Fuller</option>
          <option>Anne Davolio</option>
          <option>Andrew Suyama</option>
          <option>Nige Buchanan</option>
          <option>Laura Fuller</option>
        </select>
      </div>
      <style scoped>
        .demo-section {
          width: 350px;
          min-height: 140px;
        }
        .demo-section h2 {
          font-weight: normal;
        }
        .demo-section label {
          display: inline-block;
          margin: 15px 0 5px 0;
        }
        .demo-section select {
          width: 350px;
        }
        #get {
          float: right;
          margin: 25px auto 0;
        }
      </style>
      <script>
        $(document).ready(function() {
            // create MultiSelect from select HTML element
            function contains(value, values) {
                for (var idx = 0; idx < values.length; idx++) {
                if (values[idx] === value) {
                    return true;
                }
              }

              return false;
            }

            var required = $("#required").kendoMultiSelect({
              select: function(e) {
                var dataItemValue = this.dataSource.view()[e.item.index()].value;
                var values = this.value();

                if (dataItemValue !== "ALL" && contains(dataItemValue, values)) {
                    return;
                }

                if (dataItemValue === "ALL") {
                  values = [];
                } else if (values.indexOf("ALL") !== -1) {
                  values = $.grep(values, function(value) {
                    return value !== "ALL";
                  });
                }

                values.push(dataItemValue);
                this.value(values);
                this.trigger("change"); //notify others for the updated values

                e.preventDefault();
              }
            }).data("kendoMultiSelect");
        });
      </script>
    </div>
```

## See Also

* [MultiSelect JavaScript API Reference](/api/javascript/ui/multiselect)
* [How to Cascade from DropDownList]({% slug howto_cascade_froma_dropdownlist_multiselect %})
* [How to Filter Values in Widgets Sharing the Same Data]({% slug howto_filter_valuesin_widgetswith_shared_data_multiselect %})
* [How to Preselect Items Using MVVM Binding]({% slug howto_preselect_items_byusing_mvvm_binding_multiselect %})
* [How to Use MultiSelect with Bootstrap Modal Window]({% slug howto_use_multiselect_with_bootstrap_modal_window_multiselect %})
* [How to Wire Blur Event of the Filter Input]({% slug howto_wire_blur_event_ofthe_filtеr_input_multiselect %})
