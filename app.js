import { createApp } from 'vue';

const exercises = [/* ... */];
const quotes = [/* ... */];

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
    computed: { /* ... */ },
    methods: {
        filterExercises() { /* ... */ },
        getExerciseTranslation(exerciseName) { /* ... */ },
        addExercise(exercise) {
            this.currentWorkout.exercises.push({
                ...exercise,
                sets: [{
                    weight: 0,
                    reps: 0,
                    rpe: 5,
                    id: Date.now()  // Añadimos un identificador único
                }]
            });
            this.searchExercise = '';
            this.filteredExercises = [];
        },
        removeExercise(index) {
            this.currentWorkout.exercises.splice(index, 1);
        },
        addSet(exercise) { /* ... */ },
        removeSet(exercise, setId) {
            exercise.sets = exercise.sets.filter(set => set.id !== setId);
        },
        calculateRM(set, fatigeFactor, exercise) { /* ... */ },
        calculateFatigue(set, exercise) { /* ... */ },
        saveWorkout() { /* ... */ },
        changeLanguage(lang) { /* ... */ },
        setActiveSection(section) { /* ... */ },
        deleteWorkout(index) { /* ... */ },
        addNewUser() { /* ... */ },
        switchUser(user) { /* ... */ },
        startEditUser() { /* ... */ },
        saveUserEdit() { /* ... */ },
        cancelEditUser() { /* ... */ },
        downloadExerciseData(exercise) { /* ... */ },
        rotateQuotes() { /* ... */ },
        startQuoteRotation() { /* ... */ },
    },
    mounted() { /* ... */ }
});

app.mount('#app');
