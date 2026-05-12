# Sistema de Monitoreo de Liner Protésico

## Descripción

**MonitoreoLiner** es una aplicación de diagnóstico para monitorear la temperatura del muñón en usuarios de prótesis con liner. El sistema analiza las lecturas de temperatura y proporciona recomendaciones de salud basadas en rangos clínicos.

## Características

- ✅ Captura de datos del paciente (nombre, edad, sexo)
- 🌡️ Lectura de temperatura del muñón en Celsius
- 📊 Análisis diagnóstico automático en 6 niveles de severidad
- 📋 Reporte formateado con conclusiones médicas
- 🛡️ Manejo de errores robusto

## Rangos de Temperatura y Diagnósticos

| Rango (°C) | Diagnóstico | Recomendación |
|-----------|-------------|---------------|
| < 30 | ERROR | Revisa el sensor |
| 30 - 34.4 | ALERTA | Posible falta de circulación (Isquemia) |
| 34.5 - 37.2 | NORMAL | Temperatura saludable |
| 37.3 - 38.0 | PRECAUCIÓN | Revisa roces o presión excesiva |
| 38.1 - 39.5 | PELIGRO | Riesgo de úlcera. ¡Quita el liner! |
| > 39.5 | EMERGENCIA | Infección grave. Acuda al médico |

## Requisitos

- Java 8 o superior
- IDE Java (NetBeans, Eclipse, IntelliJ) o compilador de línea de comandos

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/carlosMNY/prosthetic-liner-monitor.git
cd prosthetic-liner-monitor
```

2. Compila el código:
```bash
javac MonitoreoLiner.java
```

## Uso

Ejecuta el programa:
```bash
java MonitoreoLiner
```

### Ejemplo de Ejecución

```
----- SISTEMA DE DIAGNÓSTICO DEL LINER -----
Nombre del paciente: Juan Pérez
Edad: 45
Sexo: Masculino
Ingrese la temperatura actual del muñón (°C): 36.5

================ REPORTE ================
PACIENTE: Juan Pérez
EDAD: 45 años
SEXO: Masculino
TEMPERATURA: 36.5°C
DIAGNÓSTICO: NORMAL: El muñón está en una temperatura saludable.
=========================================
```

## Estructura del Código

### Método Principal

**`obtenerDiagnostico(double temp)`**
- Entrada: Temperatura en Celsius
- Salida: String con diagnóstico y recomendación médica
- Utiliza rangos condicionales para clasificar el estado

### Método Main

- Interfaz de usuario por línea de comandos
- Captura de datos personales y temperatura
- Generación de reporte formateado
- Manejo de excepciones para entrada inválida

## Consideraciones Médicas

⚠️ **Nota Importante:** Este sistema es una herramienta de apoyo diagnóstico y no reemplaza la evaluación médica profesional. Siempre consulta con un especialista en prótesis ante resultados preocupantes.

## Futuras Mejoras

- 📱 Interfaz gráfica (GUI) con Swing o JavaFX
- 💾 Almacenamiento de historial de temperaturas
- 📈 Gráficos de tendencias de temperatura
- 🔔 Notificaciones automáticas para alertas
- 🌐 API REST para integración con sistemas médicos
- 📱 Aplicación móvil

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## Autor

Carlos MNY

## Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Contacto

Para preguntas o sugerencias, contacta al autor a través de GitHub.
