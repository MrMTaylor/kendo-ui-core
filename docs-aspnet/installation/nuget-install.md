---
title: Installing with NuGet
page_title: Installing with NuGet
description: "Get started with Telerik UI for ASP.NET Core and install the NuGet packages of the helpers."
previous_url: /getting-started/nuget-install, /getting-started/installation/nuget-install
slug: nuget_install_aspnetmvc6_aspnetmvc
position: 3
---

# Installing with NuGet

This article describes how to configure and use the Telerik NuGet feed. 

[NuGet](https://www.nuget.org) is a popular .NET package manager. Telerik maintains a NuGet Feed with official UI for ASP.NET Core releases and service packs. These packages are available for registered users.

## Setup the Telerik NuGet Feed

Our NuGet feed allows you instant access to various Telerik and Kendo packages that you can install in your project. Before you can use the Telerik NuGet Feed as a **Package source**, you must configure your machine by utilizing any of the following methods:

* [Use the NuGet Package Manager tool in Visual Studio](#setup-with-the-nuget-package-manager).

* [Use NuGet CLI](#setup-with-nuget-cli).

* [Edit `nuget.config` file](#setup-with-nugetconfig).

* [Use the **Progress Control Panel** application](#setup-with-the-progress-control-panel-application).

* [Use the Telerik UI for ASP.NET Core trial installer](#setup-with-the-trial-installer).

>The legacy https://nuget.telerik.com/nuget server is now deprecated. Make sure to switch to the new https://nuget.telerik.com/v3/index.json server, which is faster, lighter, and reduces the number of requests from your NuGet client.

### Setup with the NuGet Package Manager

The following video demonstrates how to add the Telerik NuGet feed through the NuGet Package Manager tool in Visual Studio.

<iframe width="560" height="315" src="https://www.youtube.com/embed/dJo1Ij4CcIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

1. Open Visual Studio.

1. Go to **Tools > NuGet Package Manager > Package Manager Settings**, select Package Manager Sources, and then click the **+** button.

1. Add a **Name** for the Telerik NuGet feed.

1. Add the **Source** URL: https://nuget.telerik.com/v3/index.json and click **OK**.

    ![Kendo UI resources](../getting-started-core/images/add-nuget-source.png)

You have successfully added the Telerik NuGet feed as a Package source. The steps below describe how to authenticate your local NuGet instance and how to display the available packages:

1. Create a new project or open an existing project.

1. Right-click on the solution in the **Solution Explorer** window.

1. Select **Manage NuGet Packages for Solution...**

	![Locating and opening the NuGet package manager menu](../getting-started-core/images/manage-nuget.png)

1. Select the Telerik NuGet **Package source** from the drop-down list.

1. Click on the **Browse** tab to see the available packages.

1. Enter your Telerik credentials in the Windows Authentication dialog.

1. You will see all packages that are licensed to your user account in the Visual Studio Package Manager.

### Setup with NuGet CLI

The following video demonstrates how to add the Telerik NuGet feed by using the NuGet CLI or directly editing the `nuget.config` file.

<iframe width="560" height="315" src="https://www.youtube.com/embed/c3m_BLMXNDk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

1. Download the [latest NuGet executable](https://dist.nuget.org/win-x86-commandline/latest/nuget.exe).
1. Open a command prompt and change the path to where the `nuget.exe` was downloaded. 
1. Execute the command:

    ```
        NuGet Sources Add -Name "telerik.com" -Source "https://nuget.telerik.com/v3/index.json" -UserName "your login email" -Password "your password"
    ```

>**Note**
>
>The above command stores a token in the `%AppData%\NuGet\NuGet.config` file. Your original credentials cannot be obtained from this token.

If you are unable to connect to the feed by using encrypted credentials, try the alternative approach of storing credentials in clear text:

    ```
        NuGet Sources Add -Name "telerik.com" -Source "https://nuget.telerik.com/v3/index.json" -UserName "your login email" -Password "your password" -StorePasswordInClearText
    ```

If you have already stored a token instead of storing the credentials as clear text, you could update the definition in the `%AppData%\NuGet\NuGet.config` file using the following command:

    ```
        NuGet Sources Update -Name "telerik.com" -Source "https://nuget.telerik.com/v3/index.json" -UserName "your login email" -Password "your password" -StorePasswordInClearText
    ```

### Setup with nuget.config

An alternative way to add the Telerik NuGet feed is to directly edit the `nuget.config` file. You can read more about it in the [Nuget Config File - Package Sources](https://docs.microsoft.com/en-us/nuget/reference/nuget-config-file#packagesources) article.

Make sure you are familiar with how such configurations work. The [Common NuGet Configurations](https://docs.microsoft.com/en-us/nuget/consume-packages/configuring-nuget-behavior#creating-a-new-config-file) article is a reference document you can use.

To use a `nuget.config` file for the Telerik feed, you need to:

1. Ensure you have the relevant config file: `%AppData%\NuGet\NuGet.Config`. You can create a new one by via the [dotnet new command](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new) by calling `dotnet new nugetconfig`.

2. Add the Telerik feed to it, and make sure to use plain-text credentials, because the .NET Core NuGet tooling does not fully support encrypted credentials. Here is an example of how your config file can look like:

    **nuget.config**
    
        <?xml version="1.0" encoding="utf-8"?>
        <configuration>
         <packageSources>
            <!--To inherit the global NuGet package sources remove the <clear/> line below -->
            <clear />
            <add key="nuget" value="https://api.nuget.org/v3/index.json" />
            <add key="telerik" value="https://nuget.telerik.com/v3/index.json" />
         </packageSources>
         <packageSourceCredentials>
            <telerik>
              <add key="Username" value="your telerik account email" />
              <add key="ClearTextPassword" value="your plain text password" />
           </telerik>
         </packageSourceCredentials>
        </configuration>


You could refer to [this video](https://youtu.be/c3m_BLMXNDk?t=129) for more details.

### Setup with the Progress Control Panel Application

If you have already purchased a commercial Telerik UI license, you can use the Progress Control Panel application to configure the Telerik NuGet. Refer to [this section](../getting-started/first-steps#add-the-telerik-nuget-feed-for-users-with-commercial-license) in the Getting Started article for more details.

### Setup with the Trial Installer

The UI for ASP.NET Core free trial installer package comes with an option that will automatically configure the Telerik NuGet feed for you. Refer to [this section](../getting-started/first-steps#add-the-telerik-nuget-feed-for-trial-license-users) in the Getting Started article for more details.

## Install the NuGet Packages

After setting up the source, install the packages either through the [Package Manager Console](http://docs.nuget.org/Consume/Package-Manager-Console) or through the [Package Manager Dialog](https://docs.nuget.org/consume/package-manager-dialog).

## List of Provided Packages

The NuGet feed provides the following packages related to UI for ASP.NET Core and UI for ASP.NET MVC:

- `Telerik.UI.for.AspNet.Core`&mdash;Telerik UI for ASP.NET Core Commercial.
- `Telerik.UI.for.AspNet.Core.Trial`&mdash;Telerik UI for ASP.NET Core Trial.
- `Telerik.UI.for.AspNet.Mvc5`&mdash;Telerik UI for ASP.NET MVC 5 Commercial.
- `Telerik.UI.for.AspNet.Mvc5.Trial`&mdash;Telerik UI for ASP.NET MVC 5 Trial.
- `Telerik.UI.for.AspNet.Mvc4`&mdash;Telerik UI for ASP.NET MVC 4 Commercial.
- `Telerik.UI.for.AspNet.Mvc4.Trial`&mdash;Telerik UI for ASP.NET MVC 4 Trial.
- `Telerik.UI.for.AspNet.Mvc3`&mdash;Telerik UI for ASP.NET MVC 3 Commercial.
- `Telerik.UI.for.AspNet.Mvc3.Trial`&mdash;Telerik UI for ASP.NET MVC 3 Trial.

For more information on the list of the provided Kendo UI packages, refer to the article on [installing Kendo UI for jQuery with NuGet](https://docs.telerik.com/kendo-ui/intro/installation/nuget-install).

## Troubleshooting

This section provides solutions for common issues you might encounter while using the Kendo UI NuGet feed.

### After changing my Telerik password, I get [Telerik Nuget] The V2 feed at '...' returned an unexpected status code '401 Logon failed.' error

After changing your Telerik password, you need to reset your credentials in the `NuGet.config` file. To do this, run the `NuGet Sources Update -Name "telerik.com" -Source "https://nuget.telerik.com/v3/index.json" -UserName "your login email" -Password "your new password"` command.

The password must contain only ASCII characters.

As an alternative, you can [reset your Telerik NuGet Feed credentials from the Windows Credentials Manager]({% slug reset-nuget-feed-credentials%}).

### The NuGet package takes too long to install or update on Visual Studio

* Disable the auto-sync in the `_references.js` file by modifying the following `/// <autosync enabled="false" />` line.
* You can also disconnect the project from the source control before running the Update Wizard.

## Next Steps

[Include the Kendo UI client-side resources in your project]({% slug copyclientresources_aspnetmvc6_aspnetmvc %})

[How to use data-bound Telerik UI controls in your code]({% slug jsonserialization_core %})

## Further Reading

You may find useful the following Microsoft articles on securing your NuGet feed setup and supply chain as general best practices:

* [Lock down your dependencies using configurable trust policies - Blog Post](https://devblogs.microsoft.com/nuget/lock-down-your-dependencies-using-configurable-trust-policies/)

* [How to Scan NuGet Packages for Security Vulnerabilities - Blog Post](https://devblogs.microsoft.com/nuget/how-to-scan-nuget-packages-for-security-vulnerabilities/)

* [Best practices for a secure software supply chain - MSDN docs](https://docs.microsoft.com/en-us/nuget/concepts/security-best-practices)

## See Also

* [Introduction to Telerik UI for ASP.NET Core]({% slug overview_aspnetmvc6_aspnetmvc %})
* [Including Client-Side Resources]({% slug copyclientresources_aspnetmvc6_aspnetmvc %})
* [Installing Telerik UI for ASP.NET Core with Bower]({% slug bowerpackage_core %})
* [Installing Telerik UI for ASP.NET Core by Using the CDN Services]({% slug cdnservices_core %})
* [Installing Telerik UI for ASP.NET Core with NPM]({% slug npmpackages_core %})
