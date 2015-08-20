YA3C (Yet Another 3D Controller)
================================

(**Note ::** This is a work in progress, and was developed over a weekend as a proof of concept. Please pardon the ugly code !! Please refer to the end of this document for the original source of the 3D model that was hacked to work with this proof of concept controller)     

This project aims to let users use their regular smartphone as a 3D controller to manipulate 3D objects. The project boasts to be a completely web based solution; and the final end users of the project do not need to install anything separately to be able to use this project. All they need is an updated browser to render the 3D model, and a smartphone (with a gyroscope, but most modern day mid range smartphones have gyroscopes) and and updated browser to control the 3D model.

Dependencies
------------
* Python + Virtualenv
  * Can be installed by following instructions here : https://virtualenv.pypa.io/en/latest/installation.html
  * MacOSx should have python installed by default, and `pip install virtualenv` should install virtualenv
* Redis
  * Redis can be installed by following instructions here : http://jasdeep.ca/2012/05/installing-redis-on-mac-os-x/
  * If you are on MacOSX and you use homebrew, then you can simply do a `brew install redis`

Installation
------------
```bash
#Start the redis-server in one tab on the terminal and keep it running for the entire process
redis-server
#Change to a separate tab on the terminal
git clone https://github.com/spMohanty/YA3C.git
cd YA3C
virtualenv env
source env/bin/activate
pip install -r requirements.txt
python app.py
```

Usage
-------
* After running `python app.py`, you should have the app running on port 5000 by default.
* Point your laptop/cellphone 's browser to `HTTP://YOUR-IP-ADDRESS:5000`   
* You should find two options :
  * **Heart Renderer** : Open this on the laptop or any other device where you want to see the heart rendered
  * **Heart Receiver** : Open this link on your smartphone 

* Now you should be able to control the 3D model on the laptop screen using the cellphone   
(Note : Your cellphone and the device used for rendering the model should be in the same local network for realtime responsiveness.   
Nevertheless it does work over the internet if both the devices can connect to the server hosting the app. More optimisations soon to follow)

TO DO
----
* Implement Pairing Mechanism to let multiple devices control multiple channels at the same time
* Add documentation on how to use YA3C on your already existing webgl project
* Add more cool demos
* Host on a public server (there will be a bit of a lag depending on the bandwidth of your connection, but still looks promising from initial experiments)
* Test the project by hosting it on a raspberry pi clubbed to a custom wifi-access point with its own internal DNS. The result : Join the wifi network and start playing with all 3D models available on the network

Author
-------
S.P. Mohanty <sp.mohanty@cern.ch> 

Source of the 3D Model
-----------------------
The 3D Model of the heart has been used from : http://heart3d.encephalostudios.com/ThreeJStest/index.html
