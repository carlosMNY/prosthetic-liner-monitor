// Diagnostic Logic
function getDiagnosis(temperature) {
    if (temperature < 30) {
        return {
            level: 'ERROR',
            description: 'ERROR: Revisa el sensor',
            color: 'danger',
            fullMessage: 'La lectura está fuera del rango esperado. Por favor, revisa el sensor de temperatura.'
        };
    } else if (temperature >= 30 && temperature <= 34.4) {
        return {
            level: 'ALERTA',
            description: 'ALERTA: Posible falta de circulación (Isquemia)',
            color: 'alerta',
            fullMessage: 'Se detecta posible isquemia. La temperatura del muñón es baja, lo que puede indicar problemas de circulación. Se recomienda consultar con un especialista.'
        };
    } else if (temperature >= 34.5 && temperature <= 37.2) {
        return {
            level: 'NORMAL',
            description: 'NORMAL: El muñón está en una temperatura saludable',
            color: 'normal',
            fullMessage: 'La temperatura del muñón es normal. Se encuentra en un rango saludable.'
        };
    } else if (temperature >= 37.3 && temperature <= 38.0) {
        return {
            level: 'PRECAUCIÓN',
            description: 'PRECAUCIÓN: Revisa roces o presión excesiva',
            color: 'precaution',
            fullMessage: 'La temperatura está elevada. Verifica que el liner no cause roces o presión excesiva. Considera ajustar la prótesis.'
        };
    } else if (temperature >= 38.1 && temperature <= 39.5) {
        return {
            level: 'PELIGRO',
            description: 'PELIGRO: Riesgo de úlcera. ¡Quita el liner!',
            color: 'danger',
            fullMessage: 'ALERTA: Existe riesgo de úlcera en el muñón. Se recomienda remover el liner inmediatamente y consultar con un especialista.'
        };
    } else if (temperature > 39.5) {
        return {
            level: 'EMERGENCIA',
            description: 'EMERGENCIA: Infección grave. Acuda al médico',
            color: 'emergency',
            fullMessage: 'SITUACIÓN CRÍTICA: Posible infección grave. ¡ACUDA AL MÉDICO INMEDIATAMENTE! No continúe usando la prótesis sin supervisión médica.'
        };
    }
}

// Form Submission
document.getElementById('diagnosticForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const patientName = document.getElementById('patientName').value;
    const age = document.getElementById('age').value;
    const sex = document.getElementById('sex').value;
    const temperature = parseFloat(document.getElementById('temperature').value);

    // Validate temperature
    if (isNaN(temperature)) {
        alert('Por favor ingresa una temperatura válida');
        return;
    }

    // Get diagnosis
    const diagnosis = getDiagnosis(temperature);

    // Update report
    document.getElementById('reportPatient').textContent = patientName;
    document.getElementById('reportAge').textContent = age + ' años';
    document.getElementById('reportSex').textContent = sex;
    document.getElementById('reportTemp').textContent = temperature.toFixed(1) + '°C';

    // Create diagnosis element
    const diagnosisDiv = document.getElementById('reportDiagnosis');
    diagnosisDiv.className = `report-diagnosis diagnosis-${diagnosis.color}`;
    diagnosisDiv.innerHTML = `
        <h4>${diagnosis.level}</h4>
        <p>${diagnosis.fullMessage}</p>
    `;

    // Show report section
    document.getElementById('reportSection').classList.remove('hidden');

    // Scroll to report
    setTimeout(() => {
        document.getElementById('reportSection').scrollIntoView({ behavior: 'smooth' });
    }, 100);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

console.log('MonitoreoLiner - Diagnostic Tool Loaded Successfully');