# Java Arguments


### **Java 8:**
`-Xms8g -Xmx8g -XX:+UseG1GC -Dsun.rmi.dgc.server.gcInterval=2147483646 -XX:+UnlockExperimentalVMOptions -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -XX:MaxGCPauseMillis=50 -XX:G1HeapRegionSize=32M`

Make sure to set `-Xms` and `Xmx` to your minimum and maximum RAM allocation. When using 6gb or 8gb of RAM you can set the min/max to the same i.e. `-Xms6g -Xmx6g` or `-Xms8g -Xmx8g`


<br/><br/>




### **Java 14+:**
`-XX:+UnlockExperimentalVMOptions -XX:+UseZGC`

## [**Main Page**](/modpack-dev)