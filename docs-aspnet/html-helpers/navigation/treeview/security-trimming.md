---
title: Security Trimming
page_title: Security Trimming
description: "Use the built-in security trimming functionality of the Telerik UI TreeView HtmlHelper for ASP.NET MVC."
previous_url: /helpers/navigation/treeview/security-trimming
slug: securitytrimmings_treeviewhelper_aspnetmvc
position: 7
---

# Security Trimming

The Telerik UI TreeView has a built-in security trimming functionality which is enabled by default.

If the URL to which the TreeView item points is not authorized, the item is hidden.

Security trimming depends on the [ASP.NET MVC Authorization](http://www.asp.net/mvc/tutorials/mvc-music-store/mvc-music-store-part-7). Every `action` method which is decorated with [`AuthorizeAttribute`](http://msdn.microsoft.com/en-us/library/system.web.mvc.authorizeattribute.aspx) checks whether the user is authorized and allows or forbids the request. For more information, refer to the article on [ASP.NET MVC Authorization](http://weblogs.asp.net/jgalloway/archive/2011/04/28/looking-at-how-asp-net-mvc-authorize-interacts-with-asp-net-forms-authorization.aspx).

The TreeView hides an item if the [`OnAuthorization`](http://msdn.microsoft.com/en-us/library/system.web.mvc.authorizeattribute.onauthorization.aspx) method returns
[`HttpUnauthorizedResult`](http://msdn.microsoft.com/en-us/library/system.web.mvc.httpunauthorizedresult.aspx).

For more information on using a custom `AuthorizeAttribute`, refer to [this article](https://github.com/telerik/kendo-examples-asp-net-mvc/tree/master/kendo-menu-with-custom-authorization-attribute).

## See Also

* [Basic Usage of the TreeView HtmlHelper for ASP.NET MVC (Demo)](https://demos.telerik.com/aspnet-mvc/treeview/index)
* [TreeViewBuilder Server-Side API](https://docs.telerik.com/aspnet-mvc/api/Kendo.Mvc.UI.Fluent/TreeViewBuilder)
* [TreeView Server-Side API](/api/treeview)
