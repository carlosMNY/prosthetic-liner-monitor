import java.util.Scanner;

public class MonitoreoLiner {

    public static String obtenerDiagnostico(double temp) {
        if (temp < 30.0) {
            return "ERROR: Lectura fuera de rango real. Revisa el sensor.";
        } else if (temp >= 30.0 && temp < 34.5) {
            return "ALERTA: Temperatura baja. Posible falta de circulación (Isquemia).";
        } else if (temp >= 34.5 && temp <= 37.2) {
            return "NORMAL: El muñón está en una temperatura saludable.";
        } else if (temp > 37.2 && temp <= 38.0) {
            return "PRECAUCIÓN: Calor detectado. Revisa si hay roces o presión excesiva.";
        } else if (temp > 38.0 && temp <= 39.5) {
            return "PELIGRO: Inflamación clara. Riesgo de formación de úlcera. ¡Quita el liner!";
        } else {
            return "EMERGENCIA: Infección grave detectada. Acuda al médico de inmediato.";
        }
    }

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.println("----- SISTEMA DE DIAGNÓSTICO DEL LINER -----");
        
        try {
            // Captura de datos personales
            System.out.print("Nombre del paciente: ");
            String nombre = teclado.nextLine();

            System.out.print("Edad: ");
            int edad = teclado.nextInt();
            teclado.nextLine(); // Limpiar el buffer después de leer un número

            System.out.print("Sexo: ");
            String sexo = teclado.nextLine();

            // Captura de temperatura
            System.out.print("Ingrese la temperatura actual del muñón (°C): ");
            double temperatura = teclado.nextDouble();
            
            // Resultado
            String resultado = obtenerDiagnostico(temperatura);
            
            System.out.println("\n================ REPORTE ================");
            System.out.println("PACIENTE: " + nombre);
            System.out.println("EDAD: " + edad + " años");
            System.out.println("SEXO: " + sexo);
            System.out.println("TEMPERATURA: " + temperatura + "°C");
            System.out.println("DIAGNÓSTICO: " + resultado);
            System.out.println("=========================================");
            
        } catch (Exception e) {
            System.out.println("Error: Asegúrate de ingresar los datos correctamente.");
        }
        
        teclado.close();
    }
}