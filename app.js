import { createApp } from 'vue';

const exercises = [
    { name: "Shoulder Press", fatigeFactor: 40 },
    { name: "Bench Press", fatigeFactor: 40 },
    { name: "Skull Crusher", fatigeFactor: 50 },
    { name: "Dumbbell Bench Press", fatigeFactor: 40 },
    { name: "Pull Up", fatigeFactor: 40 },
    { name: "Barbell Row", fatigeFactor: 40 },
    { name: "Landmine Row", fatigeFactor: 50 },
    { name: "Dumbbell Row", fatigeFactor: 50 },
    { name: "Back Squat", fatigeFactor: 30 },
    { name: "Front Squat", fatigeFactor: 30 },
    { name: "Landmine Squat", fatigeFactor: 40 },
    { name: "Deadlift", fatigeFactor: 30 },
    { name: "Romanian Deadlift", fatigeFactor: 30 },
    { name: "Lateral Raises", fatigeFactor: 50 },
    { name: "Biceps Curl", fatigeFactor: 50 },
    { name: "Overhead Elbow Extension", fatigeFactor: 50 },
    { name: "Heel Elevated Squat", fatigeFactor: 40 },
    { name: "Incline Bench Press", fatigeFactor: 40 },
    { name: "Dumbbell Incline Bench Press", fatigeFactor: 40 }
];

const quotes = [
    "La calidad del movimiento es más importante que la cantidad de peso. - NSCA (National Strength and Conditioning Association)",
    "La sobrecarga progresiva es clave: aumenta gradualmente la intensidad para ganar fuerza. - Principio de Sobrecarga (Zatsiorsky, 1995)",
    "El rango completo de movimiento mejora la movilidad y el desarrollo muscular. - Schoenfeld, 2010",
    "No entrenes hasta el fallo en cada serie; optimiza la fatiga para una mejor recuperación. - Helms et al., 2016",
    "La fuerza se construye en la fase excéntrica: controla la bajada para mejores resultados. - McMahon et al., 2014",
    "La consistencia supera a la intensidad; el progreso viene con el tiempo. - Ericsson et al., 1993 (Deliberate Practice Theory)",
    "Entrena la mente como entrenas el cuerpo: la autoconfianza mejora el rendimiento. - Bandura, 1997 (Teoría de la Autoeficacia)",
    "Visualiza el éxito antes de cada levantamiento: la imagen mental mejora la ejecución. - Feltz & Landers, 1983",
    "Reformula la fatiga como una señal de crecimiento, no de debilidad. - Noakes, 2012 (Central Governor Theory)",
    "Cree en tu entrenamiento, confía en el proceso y el progreso llegará. - Carol Dweck, 2006 (Mindset Theory)",
    "El crecimiento muscular ocurre durante el descanso, no solo en el entrenamiento. - Schoenfeld, 2013",
    "Duerme al menos 7-9 horas: la falta de sueño reduce fuerza y recuperación. - Fullagar et al., 2015",
    "La variabilidad en el entrenamiento previene el estancamiento y reduce el riesgo de lesiones. - Periodización Deportiva (Bompa & Haff, 2009)",
    "La recuperación activa acelera la eliminación del lactato y reduce la fatiga. - Dupont et al., 2004",
    "La nutrición post-entrenamiento es clave: proteínas y carbohidratos optimizan la recuperación. - Tarnopolsky, 2008"
];

const translations = {
    en: {
        title: 'Gainz',
        newWorkout: 'New Workout',
        searchExercise: 'Search exercise...',
        weight: 'kg',
        reps: 'reps',
        rpe: 'RPE (1-10)',
        set: 'Set',
        addSet: 'Add Set',
        removeExercise: 'Remove Exercise',
        sessionNotes: 'Session notes...',
        saveWorkout: 'Save Workout',
        workoutHistory: 'Workout History',
        searchWorkouts: 'Search workouts...',
        fatigue: 'Fatigue',
        rm: 'RM',
        metrics: 'Metrics',
        maxRM: 'Max RM',
        averageRM: 'Average RM',
        totalSets: 'Total Sets',
        deleteWorkout: 'Delete Workout',
        confirmDelete: 'Are you sure you want to delete this workout?',
        editUserName: 'Edit Name',
        addUser: 'Add User',
        save: 'Save',
        cancel: 'Cancel',
        newUserName: 'New user name'
    },
    es: {
        title: 'Gainz',
        newWorkout: 'Nuevo Entrenamiento',
        searchExercise: 'Buscar ejercicio...',
        weight: 'kg',
        reps: 'reps',
        rpe: 'RPE (1-10)',
        set: 'Serie',
        addSet: 'Añadir Serie',
        removeExercise: 'Eliminar Ejercicio',
        sessionNotes: 'Notas de la sesión...',
        saveWorkout: 'Guardar Entrenamiento',
        workoutHistory: 'Historial de Entrenamientos',
        searchWorkouts: 'Buscar entrenamientos...',
        fatigue: 'Fatiga',
        rm: 'RM',
        metrics: 'Métricas',
        maxRM: 'RM Máximo',
        averageRM: 'RM Promedio',
        totalSets: 'Series Totales',
        deleteWorkout: 'Eliminar Entrenamiento',
        confirmDelete: '¿Estás seguro de que quieres eliminar este entrenamiento?',
        editUserName: 'Editar Nombre',
        addUser: 'Añadir Usuario',
        save: 'Guardar',
        cancel: 'Cancelar',
        newUserName: 'Nombre de nuevo usuario'
    },
    it: {
        title: 'Gainz',
        newWorkout: 'Nuovo Allenamento',
        searchExercise: 'Cerca esercizio...',
        weight: 'kg',
        reps: 'ripetizioni',
        rpe: 'RPE (1-10)',
        set: 'Serie',
        addSet: 'Aggiungi Serie',
        removeExercise: 'Rimuovi Esercizio',
        sessionNotes: 'Note della sessione...',
        saveWorkout: 'Salva Allenamento',
        workoutHistory: 'Cronologia Allenamenti',
        searchWorkouts: 'Cerca allenamenti...',
        fatigue: 'Fatica',
        rm: 'RM',
        metrics: 'Metriche',
        maxRM: 'RM Massimo',
        averageRM: 'RM Medio',
        totalSets: 'Serie Totali',
        deleteWorkout: 'Elimina Allenamento',
        confirmDelete: 'Sei sicuro di voler eliminare questo allenamento?',
        editUserName: 'Modifica Nome',
        addUser: 'Aggiungi Utente',
        save: 'Salva',
        cancel: 'Annulla',
        newUserName: 'Nome nuovo utente'
    },
    pt: {
        title: 'Gainz',
        newWorkout: 'Novo Treino',
        searchExercise: 'Procurar exercício...',
        weight: 'kg',
        reps: 'reps',
        rpe: 'RPE (1-10)',
        set: 'Série',
        addSet: 'Adicionar Série',
        removeExercise: 'Remover Exercício',
        sessionNotes: 'Notas da sessão...',
        saveWorkout: 'Salvar Treino',
        workoutHistory: 'Histórico de Treinos',
        searchWorkouts: 'Procurar treinos...',
        fatigue: 'Fadiga',
        rm: 'RM',
        metrics: 'Métricas',
        maxRM: 'RM Máximo',
        averageRM: 'RM Médio',
        totalSets: 'Séries Totais',
        deleteWorkout: 'Excluir Treino',
        confirmDelete: 'Tem certeza que deseja excluir este treino?',
        editUserName: 'Editar Nome',
        addUser: 'Adicionar Usuário',
        save: 'Salvar',
        cancel: 'Cancelar',
        newUserName: 'Nome do novo usuário'
    },
    fr: {
        title: 'Gainz',
        newWorkout: 'Nouvel Entraînement',
        searchExercise: 'Rechercher un exercice...',
        weight: 'kg',
        reps: 'répétitions',
        rpe: 'RPE (1-10)',
        set: 'Série',
        addSet: 'Ajouter une Série',
        removeExercise: 'Supprimer l\'Exercice',
        sessionNotes: 'Notes de séance...',
        saveWorkout: 'Sauvegarder l\'Entraînement',
        workoutHistory: 'Historique des Entraînements',
        searchWorkouts: 'Rechercher des entraînements...',
        fatigue: 'Fatigue',
        rm: 'RM',
        metrics: 'Métriques',
        maxRM: 'RM Maximum',
        averageRM: 'RM Moyen',
        totalSets: 'Séries Totales',
        deleteWorkout: 'Supprimer l\'Entraînement',
        confirmDelete: 'Êtes-vous sûr de vouloir supprimer cet entraînement ?',
        editUserName: 'Modifier le Nom',
        addUser: 'Ajouter Utilisateur',
        save: 'Sauvegarder',
        cancel: 'Annuler',
        newUserName: 'Nom du nouvel utilisateur'
    },
    de: {
        title: 'Gainz',
        newWorkout: 'Neues Training',
        searchExercise: 'Übung suchen...',
        weight: 'kg',
        reps: 'Wiederholungen',
        rpe: 'RPE (1-10)',
        set: 'Satz',
        addSet: 'Satz hinzufügen',
        removeExercise: 'Übung entfernen',
        sessionNotes: 'Trainingsnotizen...',
        saveWorkout: 'Training speichern',
        workoutHistory: 'Trainingshistorie',
        searchWorkouts: 'Trainings durchsuchen...',
        fatigue: 'Ermüdung',
        rm: 'RM',
        metrics: 'Metriken',
        maxRM: 'Max RM',
        averageRM: 'Durchschnitt RM',
        totalSets: 'Gesamtsätze',
        deleteWorkout: 'Training löschen',
        confirmDelete: 'Sind Sie sicher, dass Sie dieses Training löschen möchten?',
        editUserName: '!Namen Bearbeiten',
        addUser: 'Benutzer Hinzufügen',
        save: 'Speichern',
        cancel: 'Abbrechen',
        newUserName: 'Name des neuen Benutzers'
    }
};

const exerciseTranslations = {
    en: {
        "Shoulder Press": "Shoulder Press",
        "Bench Press": "Bench Press", 
        "Skull Crusher": "Skull Crusher",
        "Dumbbell Bench Press": "Dumbbell Bench Press",
        "Pull Up": "Pull Up",
        "Barbell Row": "Barbell Row",
        "Landmine Row": "Landmine Row", 
        "Dumbbell Row": "Dumbbell Row",
        "Back Squat": "Back Squat",
        "Front Squat": "Front Squat",
        "Landmine Squat": "Landmine Squat",
        "Deadlift": "Deadlift",
        "Romanian Deadlift": "Romanian Deadlift",
        "Lateral Raises": "Lateral Raises",
        "Biceps Curl": "Biceps Curl",
        "Overhead Elbow Extension": "Overhead Elbow Extension",
        "Heel Elevated Squat": "Heel Elevated Squat",
        "Incline Bench Press": "Incline Bench Press",
        "Dumbbell Incline Bench Press": "Dumbbell Incline Bench Press"
    },
    es: {
        "Shoulder Press": "Press de Hombros",
        "Bench Press": "Press de Banca",
        "Skull Crusher": "Rompecráneos",
        "Dumbbell Bench Press": "Press de Banca con Mancuernas",
        "Pull Up": "Dominadas",
        "Barbell Row": "Remo con Barra",
        "Landmine Row": "Remo con Landmine",
        "Dumbbell Row": "Remo con Mancuernas",
        "Back Squat": "Sentadilla Trasera",
        "Front Squat": "Sentadilla Frontal",
        "Landmine Squat": "Sentadilla con Landmine",
        "Deadlift": "Peso Muerto",
        "Romanian Deadlift": "Peso Muerto Rumano",
        "Lateral Raises": "Elevaciones Laterales",
        "Biceps Curl": "Curl de Bíceps",
        "Overhead Elbow Extension": "Extensión de Codo por Encima",
        "Heel Elevated Squat": "Sentadilla con Talones Elevados",
        "Incline Bench Press": "Press de Banca Inclinado",
        "Dumbbell Incline Bench Press": "Press de Banca Inclinado con Mancuernas"
    }
}

const app = createApp({
    data() {
        return {
            quotes: quotes,
            currentQuoteIndex: 0,
            isQuoteVisible: true,
            currentWorkout: {
                date: new Date().toISOString().split('T')[0],
                exercises: [],
                notes: ''
            },
            searchExercise: '',
            searchHistory: '',
            searchMetrics: '',
            workouts: [],
            filteredExercises: [],
            currentLanguage: 'en',
            activeSection: 'workout',
            users: ['Default User'],
            currentUser: 'Default User',
            isEditingUser: false,
            newUserName: '',
            userWorkouts: {},
            exerciseTranslations
        }
    },
    computed: {
        filteredWorkouts() {
            const userWorkouts = this.userWorkouts[this.currentUser] || [];
            return userWorkouts.filter(workout => {
                const searchLower = this.searchHistory.toLowerCase();
                return workout.date.includes(searchLower) ||
                    workout.exercises.some(ex => ex.name.toLowerCase().includes(searchLower));
            });
        },
        exerciseMetrics() {
            const metrics = {};
            const userWorkouts = this.userWorkouts[this.currentUser] || [];
            
            userWorkouts.forEach(workout => {
                const date = workout.date;
                workout.exercises.forEach(exercise => {
                    if (!metrics[exercise.name]) {
                        metrics[exercise.name] = {
                            name: exercise.name,
                            maxRM: 0,
                            totalSets: 0,
                            averageRM: 0,
                            allRMs: []
                        };
                    }
                    
                    exercise.sets.forEach(set => {
                        const rm = this.calculateRM(set, exercise.fatigeFactor);
                        metrics[exercise.name].totalSets++;
                        metrics[exercise.name].allRMs.push(rm);
                        metrics[exercise.name].maxRM = Math.max(metrics[exercise.name].maxRM, rm);
                    });
                    
                    metrics[exercise.name].averageRM = Math.round(
                        metrics[exercise.name].allRMs.reduce((a, b) => a + b, 0) / 
                        metrics[exercise.name].allRMs.length
                    );
                });
            });
            
            return Object.values(metrics).filter(metric => 
                metric.name.toLowerCase().includes(this.searchMetrics.toLowerCase())
            );
        },
        translatedExercises() {
            return exercises.map(ex => ({
                ...ex,
                displayName: this.getExerciseTranslation(ex.name)
            }));
        },
        t() {
            return (key) => translations[this.currentLanguage][key];
        }
    },
    methods: {
        filterExercises() {
            const search = this.searchExercise.toLowerCase();
            this.filteredExercises = this.translatedExercises.filter(ex => 
                this.getExerciseTranslation(ex.name).toLowerCase().includes(search)
            );
        },
        getExerciseTranslation(exerciseName) {
            const translations = this.exerciseTranslations[this.currentLanguage];
            return translations?.[exerciseName] || exerciseName;
        },
        addExercise(exercise) {
            this.currentWorkout.exercises.push({
                ...exercise,
                sets: [{
                    weight: 0,
                    reps: 0,
                    rpe: 5
                }]
            });
            this.searchExercise = '';
            this.filteredExercises = [];
        },
        removeExercise(index) {
            this.currentWorkout.exercises.splice(index, 1);
        },
        addSet(exercise) {
            const highestRM = Math.max(
                ...exercise.sets.map(set => this.calculateRM(set, exercise.fatigeFactor)),
                0
            );
            
            exercise.sets.push({
                weight: 0,
                reps: 0,
                rpe: 5,
                highestRM: highestRM  
            });
        },
        calculateRM(set, fatigeFactor) {
            if (!set.weight || !set.reps || !set.rpe) return 0;
            return Math.round(set.weight * (1 + (10 - set.rpe) / fatigeFactor));
        },
        calculateFatigue(set, exercise) {
            const currentRM = this.calculateRM(set, exercise.fatigeFactor);
            const highestRM = Math.max(
                ...exercise.sets.map(s => this.calculateRM(s, exercise.fatigeFactor))
            );
            
            if (highestRM === 0 || currentRM === highestRM) return 0;
            
            return Math.round((highestRM - currentRM) / highestRM * 100);
        },
        saveWorkout() {
            if (this.currentWorkout.exercises.length === 0) {
                alert('Please add at least one exercise');
                return;
            }
            
            if (!this.userWorkouts[this.currentUser]) {
                this.userWorkouts[this.currentUser] = [];
            }
            
            this.userWorkouts[this.currentUser].unshift({...this.currentWorkout});
            
            localStorage.setItem('userWorkouts', JSON.stringify(this.userWorkouts));
            
            this.currentWorkout = {
                date: new Date().toISOString().split('T')[0],
                exercises: [],
                notes: ''
            };
        },
        changeLanguage(lang) {
            this.currentLanguage = lang;
            localStorage.setItem('language', lang);
        },
        setActiveSection(section) {
            this.activeSection = section;
        },
        deleteWorkout(index) {
            if (confirm(this.t('confirmDelete'))) {
                this.userWorkouts[this.currentUser].splice(index, 1);
                localStorage.setItem('userWorkouts', JSON.stringify(this.userWorkouts));
            }
        },
        addNewUser() {
            if (this.newUserName && !this.users.includes(this.newUserName)) {
                this.users.push(this.newUserName);
                localStorage.setItem('users', JSON.stringify(this.users));
                this.newUserName = '';
            }
        },
        switchUser(user) {
            this.currentUser = user;
            localStorage.setItem('currentUser', user);
        },
        startEditUser() {
            this.isEditingUser = true;
            this.newUserName = this.currentUser;
        },
        saveUserEdit() {
            if (this.newUserName && this.newUserName !== this.currentUser) {
                const index = this.users.indexOf(this.currentUser);
                if (index !== -1) {
                    // Update the user name in the list
                    this.users[index] = this.newUserName;
                    
                    // Transfer workouts to the new username
                    if (this.userWorkouts[this.currentUser]) {
                        this.userWorkouts[this.newUserName] = this.userWorkouts[this.currentUser];
                        delete this.userWorkouts[this.currentUser];
                    }
                    
                    // Update current user
                    this.currentUser = this.newUserName;
                    
                    // Save changes
                    localStorage.setItem('users', JSON.stringify(this.users));
                    localStorage.setItem('userWorkouts', JSON.stringify(this.userWorkouts));
                    localStorage.setItem('currentUser', this.currentUser);
                }
            }
            this.isEditingUser = false;
            this.newUserName = '';
        },
        cancelEditUser() {
            this.isEditingUser = false;
            this.newUserName = '';
        },
        downloadExerciseData(exercise) {
            const userWorkouts = this.userWorkouts[this.currentUser] || [];
            const exerciseData = [];
            
            // Collect all data for this exercise
            userWorkouts.forEach(workout => {
                const date = workout.date;
                workout.exercises.forEach(ex => {
                    if (ex.name === exercise.name) {
                        ex.sets.forEach(set => {
                            exerciseData.push({
                                date: date,
                                weight: set.weight,
                                reps: set.reps,
                                rpe: set.rpe,
                                rm: this.calculateRM(set, ex.fatigeFactor)
                            });
                        });
                    }
                });
            });
            
            // Sort by date
            exerciseData.sort((a, b) => new Date(a.date) - new Date(b.date));
            
            // Create CSV content
            let csvContent = "Date,Weight (kg),Reps,RPE,Calculated RM (kg)\n";
            exerciseData.forEach(data => {
                csvContent += `${data.date},${data.weight},${data.reps},${data.rpe},${data.rm}\n`;
            });
            
            // Create a visualization URL for Google Sheets
            const chartTitle = `${exercise.name} - Progress Over Time`;
            const chartData = encodeURIComponent(exerciseData.map(d => `[new Date("${d.date}"),${d.rm}]`).join(','));
            
            const visualizationUrl = "https://docs.google.com/spreadsheets/d/1eTzYPL7LT9XMIzyiLyWkRMWNgZ7DoQSqZMV4JGkaQZ4/edit?usp=sharing" +
                  `&tq=INSERT INTO A (C,D) VALUES (${chartData})` +
                  `&title=${encodeURIComponent(chartTitle)}`;
            
            // Add visualization URL to CSV
            csvContent += "\n\nVisualize your data with Google Sheets:\n";
            csvContent += visualizationUrl;
            
            // Create and download the file
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.setAttribute('href', url);
            link.setAttribute('download', `${exercise.name}_data.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },
        rotateQuotes() {
            this.isQuoteVisible = false;
            
            setTimeout(() => {
                this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
                this.isQuoteVisible = true;
            }, 5000);
        },
        startQuoteRotation() {
            setInterval(this.rotateQuotes, 15000); // 10s visible + 5s fade
        },
    },
    mounted() {
        const savedUsers = localStorage.getItem('users');
        if (savedUsers) {
            this.users = JSON.parse(savedUsers);
        }
        
        const savedCurrentUser = localStorage.getItem('currentUser');
        if (savedCurrentUser && this.users.includes(savedCurrentUser)) {
            this.currentUser = savedCurrentUser;
        }
        
        const savedUserWorkouts = localStorage.getItem('userWorkouts');
        if (savedUserWorkouts) {
            this.userWorkouts = JSON.parse(savedUserWorkouts);
        }
        
        // For backward compatibility - migrate old workouts to the default user
        const savedWorkouts = localStorage.getItem('workouts');
        if (savedWorkouts) {
            const workouts = JSON.parse(savedWorkouts);
            if (workouts.length > 0) {
                if (!this.userWorkouts['Default User']) {
                    this.userWorkouts['Default User'] = [];
                }
                this.userWorkouts['Default User'] = workouts;
                localStorage.setItem('userWorkouts', JSON.stringify(this.userWorkouts));
                // Remove old storage
                localStorage.removeItem('workouts');
            }
        }
        
        const savedLang = localStorage.getItem('language');
        if (savedLang) {
            this.currentLanguage = savedLang;
        }
        this.startQuoteRotation();
    }
});

app.mount('#app');