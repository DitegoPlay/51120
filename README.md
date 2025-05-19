Las instrucciones de mi analizador son las siguentes, como primer instancia deben estar descargador todos los programas y archivos correspondientes para poder ejecutar todo 
de manera correspondiente, tanto como VS CODE, Node JS, Java y antlr4 en vs code.
Empezamos con las entradas validas. Para poder ejecutar cada de una de las entradas es necesario abrir el analizador en vs code, para esto es necesario ir a 'File' 
en la esquina superior izquierda y despues a 'open folder', y seleccionar la carpeta del analizador.
![Captura de pantalla 2025-05-19 003752](https://github.com/user-attachments/assets/88173c62-243a-40b1-bb83-57bf0f916a20)

Una vez abierta la carpeta debemos abrir el archivo 'SimpleLang.g4' y 'Imput.txt'.
![Captura de pantalla 2025-05-19 003852](https://github.com/user-attachments/assets/22d66ad8-93a3-4fbb-bde2-dec8d3e49149)

Despues de esto en el archivo 'Imput.txt' es en donde se colocaran las entradas para ver el correcto funcionamiento del analizador.
La primer entrada es la llamada 'Entrada valida 1', copiamos y pegamos la entrada en el archivo imput.txt y guardamos el cambio con 'Ctrl+S'.
Ahora probamos la generacion del arbol de derivaciones haciendo lo siguente. Vamos al icono en donde dice 'Run' y seleccionamos 'Start debugging' y veremos la generacion del arbol.
![Captura de pantalla 2025-05-19 004110](https://github.com/user-attachments/assets/9c60f5d4-8eea-4704-bdb5-23038de175fb)
![Captura de pantalla 2025-05-19 004150](https://github.com/user-attachments/assets/dee62d87-da9f-4862-93b9-5b603215d1e2)

Ahora para ver la tabla de lexemas y tokens lo que debemos hacer es abrir la terminar de comandos de windows con las teclas 'windows+R' y escribir el siguente codigo 'cd +'ruta de carpeta del analizador''.
Una vez ubicados en la ruta del analizador escribimos 'npm start' y esto abre la tabla de tokens y lexemas, en donde al final dice que la entrada es valida, por eso mismo en el arbol de derivación no teniamos errores.
![Captura de pantalla 2025-05-19 004254](https://github.com/user-attachments/assets/9821d5c7-aae6-4bd8-8eed-bb254de8d91f)

Ahora repetimos los mismos pasos para otra gramatica, para el caso de una de las entradas invalidas.
Ingresamos la entrada en el 'imput.txt' y y iniciamos el arbol de la manera ya mencionada y vemos que lo genera.
![Captura de pantalla 2025-05-19 004532](https://github.com/user-attachments/assets/d97e6d21-64b4-4eba-a912-ec2d61c7c7c2)

Ahi podemos ver como la gramatica es incorrecta, ya que en el arbol de derivaciones nos figuras partes en color rojo.
Tambinén vemos la tabla de tokens y lexemas y comprobamos que en la parte final nos dice que la entrada no es valida ya que faltan caracteres en la estructura del bucle.
![Captura de pantalla 2025-05-19 004636](https://github.com/user-attachments/assets/b8572ef5-314e-4a2e-be7a-c68729c6c573)

Eso seria todo. Gracias por leer. :)
