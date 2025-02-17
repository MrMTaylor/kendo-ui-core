---
title: Layout
page_title: Layout
description: "Learn how to configure the layout of the Telerik UI RadioGroup for {{ site.framework }}."
slug: htmlhelpers_radiogroup_aspnetcore_layout
position: 3
---

# Layout

The RadioGroup supports two types of [`layout`](/api/javascript/ui/radiogroup/configuration/layout) - "horizontal" and "vertical". By default the radio buttons are rendered vertically.

The following example shows how to set the RadioGroup layout:

```HtmlHelper
    @(Html.Kendo().RadioGroup()
        .Name("radiogroup")        
        .BindTo(new[] { "English", "German", "Italian", "Russian", "Spanish" })
        .Layout("vertical")
        .Value("Italian")
    ) 
```
{% if site.core %}
```TagHelper
    <kendo-radiogroup name="radiogroup"
        radio-name="radiogroup"        
        layout="RadioGroupLayout.Horizontal"
        bind-to="Model.Items">
    </kendo-radiogroup>
```
{% endif %}

## See Also

* [Server-Side API](/api/radiogroup)
