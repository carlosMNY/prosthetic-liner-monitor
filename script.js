// Función para diagnosticar la temperatura
function diagnosticarTemperatura() {
    const temperatureInput = document.getElementById('temperature').value;
    
    // Validación
    if (temperatureInput === '' || temperatureInput === null) {
        alert('Por favor, ingresa una temperatura válida');
        return;
    }

    const temperature = parseFloat(temperatureInput);

    // Validar rango razonable
    if (isNaN(temperature) || temperature < -50 || temperature > 100) {
        alert('Por favor, ingresa una temperatura entre -50°C y 100°C');
        return;
    }

    // Realizar diagnóstico
    const diagnosis = realizarDiagnostico(temperature);

    // Mostrar resultados
    mostrarResultados(temperature, diagnosis);
}

// Función para realizar el diagnóstico
function realizarDiagnostico(temperature) {
    let status = '';
    let statusColor = '';
    let statusIcon = '';
    let diagnosisText = '';
    let recommendations = [];

    // Rango crítico bajo: < 31°C
    if (temperature < 31) {
        status = 'CRÍTICO - TEMPERATURA BAJA';
        statusColor = 'danger';
        statusIcon = '❌';
        diagnosisText = `La temperatura de ${temperature}°C es demasiado baja. El revestimiento podría estar comprometido. Esto puede indicar problemas de circulación o desprendimiento del revestimiento.`;
        recommendations = [
            'Revisar inmediatamente la integridad del revestimiento',
            'Verificar la circulación sanguínea del muñón',
            'Consultar con el especialista de forma urgente',
            'No usar la prótesis hasta resolver el problema',
            'Considerar ajustes en el revestimiento'
        ];
    }
    // Rango de precaución bajo: 31°C - 33°C
    else if (temperature >= 31 && temperature < 34) {
        status = '⚠️ PRECAUCIÓN - TEMPERATURA BAJA';
        statusColor = 'warning';
        statusIcon = '⚠️';
        diagnosisText = `La temperatura de ${temperature}°C está por debajo del rango óptimo. El revestimiento requiere atención especial. Podría indicar una ligera disminución de la circulación.`;
        recommendations = [
            'Monitorear la temperatura regularmente',
            'Revisar el ajuste del revestimiento',
            'Verificar que no haya desplazamiento',
            'Consultar con el especialista si persiste',
            'Aumentar la actividad física gradualmente'
        ];
    }
    // Rango óptimo: 34°C - 37°C
    else if (temperature >= 34 && temperature <= 37) {
        status = '✅ ÓPTIMO';
        statusColor = 'optimal';
        statusIcon = '✅';
        diagnosisText = `La temperatura de ${temperature}°C es perfecta. El revestimiento funciona correctamente y la circulación del muñón es adecuada.`;
        recommendations = [
            'Continuar con el uso normal de la prótesis',
            'Mantener el monitoreo regular',
            'Seguir con el programa de higiene establecido',
            'Realizar ejercicios de acondicionamiento',
            'Próxima revisión en fecha programada'
        ];
    }
    // Rango de precaución alto: 37°C - 40°C
    else if (temperature > 37 && temperature <= 40) {
        status = '⚠️ PRECAUCIÓN - TEMPERATURA ALTA';
        statusColor = 'warning';
        statusIcon = '⚠️';
        diagnosisText = `La temperatura de ${temperature}°C está ligeramente elevada. El revestimiento podría estar ajustado demasiado o podría haber inflamación leve.`;
        recommendations = [
            'Aumentar el tiempo de descanso con la prótesis',
            'Revisar el ajuste del revestimiento',
            'Verificar que no haya irritación de piel',
            'Aplicar compresas frías si es necesario',
            'Consultar especialista si la temperatura aumenta'
        ];
    }
    // Rango crítico alto: > 40°C
    else if (temperature > 40) {
        status = 'CRÍTICO - TEMPERATURA ALTA';
        statusColor = 'danger';
        statusIcon = '🔴';
        diagnosisText = `La temperatura de ${temperature}°C es peligrosamente alta. Existe riesgo de inflamación severa, infección o quemadura del tejido. Requiere atención inmediata.`;
        recommendations = [
            'DETENER el uso de la prótesis inmediatamente',
            'Aplicar compresas frías al muñón',
            'Elevar el muñón para reducir inflamación',
            'Contactar al especialista de forma urgente',
            'Buscar atención médica si hay dolor intenso',
            'Revisar completamente el revestimiento antes de usar'
        ];
    }

    return {
        status: status,
        statusColor: statusColor,
        statusIcon: statusIcon,
        diagnosisText: diagnosisText,
        recommendations: recommendations
    };
}

// Función para mostrar resultados
function mostrarResultados(temperature, diagnosis) {
    // Mostrar la sección de resultados
    document.getElementById('resultsSection').style.display = 'block';

    // Actualizar temperatura mostrada
    document.getElementById('displayTemp').textContent = `${temperature}°C`;

    // Actualizar diagnóstico
    document.getElementById('diagnosisText').textContent = diagnosis.diagnosisText;

    // Actualizar ícono de estado
    const statusIcon = document.getElementById('statusIcon');
    statusIcon.textContent = diagnosis.statusIcon;

    // Actualizar recomendaciones
    const recommendationsList = document.getElementById('recommendationsList');
    recommendationsList.innerHTML = '';
    diagnosis.recommendations.forEach(rec => {
        const li = document.createElement('li');
        li.textContent = rec;
        recommendationsList.appendChild(li);
    });

    // Actualizar badge de estado
    const statusBadge = document.getElementById('statusBadge');
    statusBadge.className = `status-badge ${diagnosis.statusColor}`;
    statusBadge.textContent = diagnosis.status;

    // Scroll suave hacia los resultados
    const resultsSection = document.getElementById('resultsSection');
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Función para limpiar resultados
function limpiarResultados() {
    document.getElementById('temperature').value = '';
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('temperature').focus();
}

// Event listeners
document.getElementById('diagnoseBtn').addEventListener('click', diagnosticarTemperatura);

// Permitir diagnosticar con Enter
document.getElementById('temperature').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        diagnosticarTemperatura();
    }
});

// Enfocar en el input al cargar la página
window.addEventListener('load', function() {
    document.getElementById('temperature').focus();
});
