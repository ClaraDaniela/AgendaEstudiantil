ℹ️ Este proyecto fue creado usando el siguiente comando

```Bash
npm init
```

, y luego se fueron instalando las distintas dependencias.

```Bash
npm i express sequelize sqlite3 cors joi
npm i -D sequelize-cli nodemon
```

### Comandos necesarios para instalar y ejecutar la Api:

Principalmente, para poder usarla, hay que descargarla desde el repositorio de git. Se abre el git bash desde el directorio donde la queremos descargar, y se ejecuta el comando:

```git clone ```

Una vez que la tenemos clonada, hay que verificar si tenemos las dependencias necesarias para utilizarla. Hay que asegurarse de que tenemos Node.js y npm (Node Package Manager) instalados en tu máquina, con los siguientes comandos lo sabremos:

```node -v```

```npm -v```

Luego, si no se las tiene, se instala Node.js y se ejecuta este comando:

```npm install```

Una vez instaladas las dependencias, vamos a ejecutar la api, se le puede asignar un puerto, o sino por defecto usara el puerto 3000:

```PORT=3001 npm run dev```

O en su defecto:

```npm run dev```

## :file_folder: Estructura de directorios

Breve descripción de qué se puede encontrar en cada uno de los directorios del proyecto:

```shell
├── data            
└── src
    ├── config           
    └── controllers       
    └── middlewares       
    └── models         
    └── routes            
    └── schemas          
```

#### Data Directory (data/):
Se utilizo el ORM sequelize y sqlite3, esta carpeta contiene archivos de la base de datos.

#### Controllers Directory (controllers/):
Contiene la lógica de negocio para manejar las solicitudes entrantes y devolver respuestas. Aquí es donde se define qué hacer cuando se recibe una solicitud HTTP para diferentes rutas.

#### Middlewares Directory (middlewares/):
Contiene funciones que se ejecutan antes de que las solicitudes lleguen a los controladores. Pueden usarse para validaciones, autenticación, registro de actividades, etc.

#### Routes Directory (routes/):
Define las rutas de la API y asocia cada ruta con su controlador correspondiente. Básicamente, especifica qué controlador manejará cada solicitud de ruta.

#### Schemas Directory (schemas/):
Define los esquemas de validación de datos utilizando bibliotecas como Joi. Se usa en los middlewares de validación para asegurar que los datos entrantes cumplan con los formatos esperados.

#### Package.json:
Archivo de configuración de npm que lista las dependencias del proyecto y scripts para tareas comunes.

#### index.js:
Archivo principal que inicia el servidor Express, carga middlewares globales, y configura las rutas.

## Para iniciar primero ejecutamos

npm init -y

## instalamos express

npm install express

## Nodemon

npm install --save-dev nodemon

## instalamos cors

npm install cors

## Ejecutamos el servidor
npm run dev

# endpoint de ejemplo

{
  "nombre": "Matemática I",
  "anioDeCarrera": 2,
  "anio": "2025",
  "horario": "Lunes 08:00 - 12:00",
  "modalidad": "Presencial",
  "correlativas": [""],
  "notas": {
    "parcial1": 7,
    "parcial2": 8,
    "final": null
  },
  "eventos": [
    {
      "tipo": "Parcial",
      "numero": 1,
      "temasAEstudiar": "Funciones, límites",
      "estado": "En curso",
      "fechaEntrega": "2025-06-10"
    },
    {
      "tipo": "Trabajo Práctico",
      "numero": 2,
      "temasAEstudiar": "Proyecto de integración",
      "estado": "Pendiente",
      "fechaEntrega": "2025-05-15"
    }
  ]
}




