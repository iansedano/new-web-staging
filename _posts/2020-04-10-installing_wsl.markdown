---
layout: post
title:  Setting up WSL on Windows 10
date: 2020-04-10
description: Installing WSL on windows
tags: linux windows tutorial programming
---

_(These instructions are now most likely out of date)_

This is a quick guide in getting set up with WSL (Windows Subsystem for Linux). There are many tutorials out there but in my case it was slightly different. So I putting this out there for anyone who might have use of it.

Why would you want WSL?
* To use Linux tools without having to have a virtual machine or dual boot. I commonly use these on WSL and not windows:
	* Jekyll (because it works)
	* Git (because SSH)
	* Pyspread (with GUI!)
	* Grep
	* This is a growing list.


## Fresh Install

### Making sure you have the right version of Windows

While you can install WSL on previous builds, WSL2 is really what you want to go for. I found so many weird bugs in WSL1 while WSL2, just works.

**This will probably not be needed in a few months, when WSL2 will be packaged with Windows as standard.**

Check your version of windows by pressing <kbd>Win</kbd> + <kbd>R</kbd> then type `winver` in the box.

<img src="https://www.dropbox.com/s/a3oicv3ivpkif61/winver.png?raw=1" class="post-img">

You need at least this version of Windows to be able to use WSL2, and for that, when I installed this (2020-04-10) you needed to be on the **windows insider program**, found in:

> settings > update & security

I chose the "slow" version of the insider program.

This may take a while to update, so be sure to check your `winver` before proceeding any further.

I was previously on a 18XX build and WSL2, though it would install without issues, would not activate properly.


### Enable WSL

**This will probably not be needed in a few months, when WSL2 will be packaged with Windows as standard.**

Hit the Start button in the taskbar and type "Turn Windows features on or off" - this is also accessible via the Control Panel. 

* Enable Windows Subsystem for Linux.
* Enable Virtual Machine Platform (Note, this may break any virtual machines you have).

Once this is done 
Download and Install Ubuntu for Windows from Microsoft store.

**DO NOT MODIFY LINUX FILES FROM WINDOWS!!**  

I can't recommend installing Visual Studio Code enough. There is a plugin that enables connection to WSL, and once you are connected to the WSL through VS code, things work very well.

Then once WSL is installed, download the WSL2 package from Microsoft or Google it to find the latest package. Install that and then upgrade your distro from Powershell.

Check your distros:

```
wsl -l -v
```

Then:

```
wsl --set-version <disto-name> 2
```

### MobaXterm - to run Graphical Linux Apps

IF you want to run graphical apps from WSL you will need an X-server.

Download, install free version of [MobaXterm](https://mobaxterm.mobatek.net/).

Always run MobaXterm before firing up your WSL, and in top righthand corner it should say "X-server running".

#### Set the DISPLAY in WSL

You will need to config WSL to send the display to windows.

run `nano ~/.bashrc` then add this to bottom of file `export DISPLAY=:0` 

to apply `source ~/.bashrc`

The above `source ~/.bashrc` command should be added to the profile so that it runs every time you start WSL.



## If you installed it but its not working properly

I had already installed WSL2 but started getting these errors when installing different packages:

```
The following signatures couldn't be verified because the public key is not available: NO_PUBKEY 8C718D3B5072E1F5

gpg: keyserver receive failed: No dirmngr

gpg: can't connect to the agent: IPC connect call failed
```

---
<br>
Even though I had installed the WSL2 update, it had not in fact *activated*, this was because my Windows build was too old. See instructions above for how to get a newer build of windows.

**You can check your WSL version by running this command in ubuntu**:

```bash
$ [ $(grep -oE 'gcc version ([0-9]+)' /proc/version | awk '{print $3}') -gt 5 ] && \ echo "WSL2" || echo "WSL1"
```

(This command only seems to work in WSL 1.)

Alternatively this command: `wsl -l -v` will not be recognized in WSL1.

Upgrade windows, then find the WSL2 installer package with Google and install it.

after which `wsl -l -v` should work in Powershell and show that you have version 1 of WSL, or no distro installed.

```
PS> wsl -l -v
  NAME      STATE           VERSION
* Ubuntu    Running         2
PS>
```

Ensure you have Ubuntu installed via the Windows Store and then to convert your existing distro to WSL 2:

```bash
wsl --set-version <disto-name> 2
```

#### possible issue with paths

When I got Ubuntu up and running it would throw an error complaining about my path.

This is because Linux doesn't accept spaces in its paths, but Windows does, and WSL inherits its paths from Windows.

To fix this I went into `regedit`, navigated to:

`HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment\Path`

and put quotations around any paths with spaces.

I would recommend getting familiar with your .bashrc and .bash_profile files (always edit these from within WSL!) as many of the issues I have encountered seem to stem from this getting messed up or not being configured properly.

---

Good luck! If you get through it I am sure you will enjoy WSL! For me it is far more practical than other Linux solutions for Windows users, being far more practical than VMs, dual-booting, Cygwin or Git Bash (ymmv).
