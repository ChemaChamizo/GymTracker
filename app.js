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
    "La calidad del movimiento es más importante que la cantidad de peso. - NSCA",
    "La sobrecarga progresiva es clave: aumenta gradualmente la intensidad para ganar fuerza.",
    "El rango completo de movimiento mejora la movilidad y el desarrollo muscular.",
    "No entrenes hasta el fallo en cada serie; optimiza la fatiga para una mejor recuperación.",
    "La fuerza se construye en la fase excéntrica: controla la bajada para mejores resultados.",
    "La consistencia supera a la intensidad; el progreso viene con el tiempo.",
    "Entrena la mente como entrenas el cuerpo: la autoconfianza mejora el rendimiento.",
    "Visualiza el éxito antes de cada levantamiento: la imagen mental mejora la ejecución.",
    "Reformula la fatiga como una señal de crecimiento, no de debilidad.",
    "Cree en tu entrenamiento, confía en el proceso y el progreso llegará."
];

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
                        const rm = this.calculateRM(set, exercise.fatigeFactor, exercise);
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
                ...exercise.sets.map(set => this.calculateRM(set, exercise.fatigeFactor, exercise)),
                0
            );
            
            exercise.sets.push({
                weight: 0,
                reps: 0,
                rpe: 5,
                highestRM: highestRM  
            });
        },
        calculateRM(set, fatigeFactor, exercise) {
            if (!set.weight || !set.reps || !set.rpe) return 0;

            // Estimación inicial con Epley
            let rm = set.weight * (1 + set.reps / 30);

            // Obtener el RPE máximo previo en la sesión para este ejercicio
            let maxRPE = Math.max(...exercise.sets.map(s => s.rpe), set.rpe);

            // Ajuste de fatiga intra sesión
            let fatigueAdjustment = 1 - ((maxRPE - set.rpe) / fatigeFactor);
            fatigueAdjustment = Math.max(0.8, fatigueAdjustment); // Limitar impacto de fatiga (mínimo 80%)

            return Math.round(rm * fatigueAdjustment);
        },
        calculateFatigue(set, exercise) {
            const currentRM = this.calculateRM(set, exercise.fatigeFactor, exercise);
            const highestRM = Math.max(
                ...exercise.sets.map(s => this.calculateRM(s, exercise.fatigeFactor, exercise))
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
                                rm: this.calculateRM(set, ex.fatigeFactor, ex)
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
