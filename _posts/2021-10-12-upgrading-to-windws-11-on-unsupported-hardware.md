---
title: Upgrading from Windows 10 to Windows 11 on unsupported hardware
layout: post
permalink: /upgrading-to-windws-11-on-unsupported-hardware/
description: Upgrading Skylake-S based Workstation from stable Windows 10 to Windows 11 final release
image: windows-11-upgraded
imagedescription: Windows 11 on Skylake-S based Workstation
categories:
  - Technology
---
Well, this might seem to be weird, but, yes, I'm that guy which will test software even of hardware isn't officially supported on latest revision.

Let me explain situation: I'm currently running Windows 11 Pro on my recent (somewhat recent) purchase of HP Z240 Tower Workstation.  
Reasons to buy workstation was simple: my laptop (good old Toshiba C850-1JG) just did't wanted to start after regular maintenance, it was motherboard issue, so I went on search to buy realtive cheap desktop which can be upgraded or heck even had some dedicated GPU from brands like HP, Dell or others. Choice to buy this workstation was simple - pricing for it was super cheap, even cheaper then Intel 4gen based HP's with more RAM, SSD already in it and some kind of cheap graphics card like GTX750 Ti or something in that range (price was about 100€, other machines were over that price, but when I saw specs I went, well, ugradeable with more RAM, SSD and maybe some GPU later on, I will buy it).  

Now here are specifications of workstation (which was partially upgraded from purchase, spent like 20€ in upgrades, some parts had already in backup from laptop like 480GB SSD which is now 2 and half years old):  
CPU: Intel Xeon E3-1225 V5  
RAM: 12GB DDR4 (1x4GB 2133MHz + 1x8GB 2400MHz@2133MHz)  
GPU: Intel HD Graphics P530  
SSD: Crucial BX500 480GB  
HDD: Western Digital WD5000AZLX-60K2TA0 500GB  
HDD2: Western Digital Green 1TB  
Optical: HP HLDS DVD-ROM  
PSU: 280W 80+ Gold HP OEM  
WiFi Adapter: Tp-Link Archer T2U Nano AC600 USB Adapter  
Case: HP Z240 Tower (OEM)  

You might get idea, well, this is decent machine, what gives except CPU that you can't officially upgrade to Windows 11, even with notification about unsuported CPU - here is reason: when I bought machine on back it said this: TPM is disabled and product key which I got is for Windows 7 Pro OA China which mandates that TPM can't be enabled no matter what. Yup, I got machine from some company which got it, as second hand rig, and person said that they upgraded to new machines and they gave it to them, so I was buyer which paid how much he wanted for a rig.  

For that reason I couldn't find or even edit UEFI BIOS to enable TPM 1.2 (and upgrade chipset to 2.0 using firmware update when this machine supports it, thanks HP Suport site) and couldn't have officially Windows 11 on this rig. Speaking of it, one laptop is officially upgraded to Windows 11 Education, and that is sister's one which is running Zen+ based APU (Ryzen 3 3200U to be precise, pretty decent laptop for price which I paid for it 2 years ago, brand new from store).

So, how the freaking (quack) did you upgraded from Windows 10 to Windows 11 you all might said. For that I will say, simple, found this news on [Ghacks website](https://www.ghacks.net/2021/09/27/mediacreationtool-bat-download-windows-11-isos-and-bypass-system-compatibility-checks/){:rel="noopener noreferrer"}{:target="blank"} and [GitHub page](https://github.com/AveYo/MediaCreationTool.bat){:rel="noopener noreferrer"}{:target="blank"} of project, used it to create then latest build of Windows 11 with Skip TPM and CPU check batch runned up, mounted created ISO image trough Windows 10, and started auto.bat file which did upgrade process.

It was seamless, it took like 45 minutes from start of upgrade to final desktop. And even kept all of settings of mine, and licences for apps which I would need to deactivate, and later on reactivate if I did fresh install.

Overall, machine is running as seamless as it can for hardware that is inside, no major issues and finaly, it works with official RTM build which is on day of writing this post 22000.194.  

Cover image is screenshot which I created for sharing with people who didn't believed me that even 3.5 years old workstation hardware don't support Windows 11.
