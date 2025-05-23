import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../public/pages/home.component.vue';
import AssignmentPage from '../transportation/pages/assignments.component.vue';
import NotFoundPage from '../public/pages/page-not-found.component.vue';

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomePage },
    { path: '/transportation/assignments/new', component: AssignmentPage },
    { path: '/:pathMatch(.*)*', component: NotFoundPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
