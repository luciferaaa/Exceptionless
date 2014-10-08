(function () {
    'use strict';

    angular.module('app.project', [
        'ui.router',

        'exceptionless.project',
        'exceptionless.projects',
        'exceptionless.stack',
        'exceptionless.stacks',
        'exceptionless.token',

        // Custom dialog dependencies
        'ui.bootstrap',
        'dialogs.main',
        'dialogs.default-translations'
    ])
    .config(function ($stateProvider) {
        $stateProvider.state('app.project', {
            abstract: true,
            url: '/project',
            template: '<ui-view/>'
        });

        $stateProvider.state('app.project.configure', {
            url: '/:id/configure',
            controller: 'Configure',
            controllerAs: 'vm',
            templateUrl: 'app/project/configure.tpl.html'
        });

        $stateProvider.state('app.project.dashboard', {
            url: '/dashboard',
            controller: 'Dashboard',
            controllerAs: 'vm',
            templateUrl: 'app/project/dashboard.tpl.html'
        });

        $stateProvider.state('app.project.frequent', {
            url: '/frequent',
            controller: 'Frequent',
            controllerAs: 'vm',
            templateUrl: 'app/project/frequent.tpl.html'
        });

        $stateProvider.state('app.project.list', {
            url: '/list',
            controller: 'List',
            controllerAs: 'vm',
            templateUrl: 'app/project/list.tpl.html'
        });

        $stateProvider.state('app.project.manage', {
            url: '/:id/manage',
            controller: 'Manage',
            controllerAs: 'vm',
            templateUrl: 'app/project/manage.tpl.html'
        });

        $stateProvider.state('app.project.new', {
            url: '/new',
            controller: 'New',
            controllerAs: 'vm',
            templateUrl: 'app/project/new.tpl.html'
        });

        $stateProvider.state('app.project.recent', {
            url: '/recent',
            controller: 'Recent',
            controllerAs: 'vm',
            templateUrl: 'app/project/recent.tpl.html'
        });
    });
}());