---
title: Appearance
page_title: jQuery TextArea Documentation | TextArea Appearance
description: "Learn how to apply different styling options to the TextArea widget."
slug: textarea_appearance
position: 3
---

# TextArea Appearance

> As of Kendo UI R1 2022, the TextArea widget uses brand new rendering.

In this article you will find information about the new rendering of the Kendo UI TextArea.

For additional information regarding the decision behind these changes, visit the [Rendering Components]({% slug components_rendering_overview %}) article.

For a live example, visit the [Appearance Demo of the TextArea](https://demos.telerik.com/kendo-ui/textarea/appearance).

## Options

The Kendo UI TextArea supports the following styling options:

- [`size`](#size)—configures the overall size of the component.
- [`rounded`](#rounded)—configures the border radius of the component.
- [`fillMode`](#fillmode)—configures how the color is applied to the component.
- [`overflow`](#overflow)—configures the overflow behavior of the element.
- [`resize`](#resize)—configures how the resizing of the element is applied.

### Size

The `size` option controls how big or small the rendered `textarea` looks. The structure of the class is `k-input-{size}`.

The following values are available for the [`size`](/api/javascript/ui/textarea/configuration/size) option:

- `sm`—small size
- `md`—medium size
- `lg`—large size

The following example demonstrates how to configure the `size` of the component through the widget configuration:

```dojo
<textarea id="description"></textarea>
<script>
$("#description").kendoTextArea({
    size: "medium"
});
</script>
```

The default size value is `medium` and it is applied to the wrapping span element through the `k-input-md` class.

```html
<span class="k-textarea k-input k-input-md">
</span>
```

### Rounded

The `rounded` option controls how much border radius is applied to the rendered `textarea`. The structure of the class is `k-rounded-{size}`.

The following values are available for the [`rounded`](/api/javascript/ui/textarea/configuration/rounded) option:

- `sm`—small border radius
- `md`—medium border radius
- `lg`—large border radius
- `full`—largest border radius

The following example demonstrates how to configure the `rounded` of the component through the widget configuration:

```dojo
<textarea id="description"></textarea>
<script>
$("#description").kendoTextArea({
    rounded: "medium"
});
</script>
```

The default rounded value is `medium` and it is applied to the wrapping span element through the `k-rounded-md` class.

```html
<span class="k-textarea k-input k-rounded-md">
</span>
```

### FillMode

The `fillMode` option controls the way the color is applied to the rendered `textarea`. The structure of the class is `k-input-{fillMode}`.

The following values are available for the [`fillMode`](/api/javascript/ui/textarea/configuration/fillmode) option:

- `solid`
- `flat`
- `outline`

The following example demonstrates how to configure the `fillMode` of the component through the widget configuration:

```dojo
<textarea id="description"></textarea>
<script>
$("#description").kendoTextArea({
    fillMode: "solid"
});
</script>
```

The default fillMode value is `solid` and it is applied to the wrapping span element through the `k-input-solid` class.

```html
<span class="k-textarea k-input k-input-solid">
</span>
```

### Overflow

The `overflow` option controls the overflow behavior of the rendered `textarea`. The structure of the class is `k-overflow-{overflow}`.

The following values are available for the [`overflow`](/api/javascript/ui/textarea/configuration/overflow) option:

- `auto`
- `hidden`
- `visible`
- `scroll`
- `clip`

The following example demonstrates how to configure the `overflow` of the component through the widget configuration:

```dojo
<textarea id="description"></textarea>
<script>
$("#description").kendoTextArea({
    overflow: "auto"
});
</script>
```

The default overflow value is `auto` and it is applied to the textarea element through the `k-overflow-auto` class.

```html
<textarea class="k-input-inner k-overflow-auto" placeholder="..."></textarea>
```

### Resize

The `resize` option controls the resizing behavior of the rendered `textarea`. The structure of the class is `k-resize-{resize}`.

The following values are available for the [`resize`](/api/javascript/ui/textarea/configuration/resize) option:

- `both`
- `horizontal`
- `vertical`
- `none`

The following example demonstrates how to configure the `resize` of the component through the widget configuration:

```dojo
<textarea id="description"></textarea>
<script>
$("#description").kendoTextArea({
    resize: "none"
});
</script>
```

The default resize value is `none` and it is applied to the wrapping span element through the `k-resize-none` class.

```html
<span class="k-textarea k-input k-resize-none">
</span>
```

## Old vs New Rendering

The old rendering of the component consisted of a wrapping `span` element with the `k-textarea` class and a child `textarea` element with the `k-textbox` class.

```html
<span class="k-textarea">
    <textarea class='k-textbox'></textarea>
</span>
```

The new rendering of the component also consists of a wrapping `span` element that has a child `textarea` element:

- The `span` element controls the overall appearance of the widget and has the following class structure:

  ```html
  <span class="k-textarea k-input k-input-md k-rounded-md k-input-solid">
  </span>
  ```

- The `textarea` element controls the appearance of the textarea itself and has the following class structure:

  ```html
  <textarea class="k-input-inner k-overflow-hidden k-resize-both" placeholder="..."></textarea>
  ```

The following example demonstrates how to configure the appearance of the component through the widget configuration:

```dojo
<textarea id="description"></textarea>
<script>
$("#description").kendoTextArea({
    size: "medium",
    rounded: "medium",
    fillMode: "solid",
    resize: "both",
    overflow: "hidden"
});
</script>
```

The full rendering of the component has the following HTML structure:

```html
<span class="k-textarea k-input k-input-md k-rounded-md k-input-solid">
    <textarea class="k-input-inner k-overflow-hidden k-resize-both" placeholder="...">...</textarea>
</span>
```

## Visual Backwards Compatibility

In order to achieve the same look and feel as the old rendering, the element references must be updated. Visit the [CSS Classes Migration]({% slug components_rendering_overview %}#css-classes-migration) and [JQuery Selectors Migration]({% slug components_rendering_overview %}#jquery-selectors-migration) sections of the [Styling Overview]({% slug components_rendering_overview %}) article for additional information.

> The new styling and rendering supports only the [default options](#options) when you use a LESS theme.

Previously, a reference to the textarea element was obtainable through the `k-textbox` class.

```javascript
$(".k-textbox") // Returns a reference to the textarea element in the old rendering.
```

With the new rendering, the textarea element must be targeted by using the `k-input-inner` class.

```javascript
$(".k-input-inner") // Returns a reference to the textarea element in the new rendering.
```

## See Also

* [Rendering Overview Article]({% slug components_rendering_overview %})
* [Appearance Demo of the TextArea](https://demos.telerik.com/kendo-ui/textarea/appearance)
* [JavaScript API Reference of the TextArea](/api/javascript/ui/textarea)