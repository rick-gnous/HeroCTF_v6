+++
title = 'More RAM for fr33'
date = 2022-09-13T12:14:17+02:00
draft = false
+++

## How to download 15Go of RAM 

Hello my little rascal, today I'm revealing to the world what kingstom and Corsair **DO NOT want you to know** !!!!!! \
\
What is this blog about you ask? \
Download more RAM does exactly what it says on the tin.\
My tips gives you the ability to 'download more RAM' at no cost !!! \
Just folow the step and upgrade you system performance ! \
Your speed will be improved instantly! \
\
This isn't a scam, there isn't any virus, it's not a joke. \
\
**Pre requirement**:
* linux machine


Follow this step by step ( do not hesitate to copy-paste to go quicker ) : 


This is 100% safe


Open a terminal ( *CTRL+ALT+T* in most cases )

Log in root account

```bash
$ sudo su -
$ cd home
$ DIR="$HOME/RAM"
$ echo "INSTALLING MORE RAM in $DIR"
$ mkdir $DIR
$ cd $DIR
$ for i in {1..15}; do dd if=/dev/urandom of="${i}_out_of_15_GB" bs=1M count=1024; done
```

Now you have 15 more Giga of RAM availlable

Your welcome

xoxo

