import { Routes } from "@angular/router";

export const routes: Routes = [
    { path: "", redirectTo: "screen/dashboard", pathMatch: "full" },
    { path: "index.jsp", redirectTo: "screen/dashboard" },
    {
        path: "screen/dashboard",
        loadChildren: () =>
            import("./features/dashboard/dashboard.routes").then(
                (m) => m.DASHBOARD_ROUTES
            ),
    },
    {
        path: "screen/datasource",
        loadComponent: () =>
            import("./features/coming-soon/coming-soon.component").then(
                (m) => m.ComingSoonComponent
            ),
    },
    {
        path: "screen/data-ingestion",
        loadComponent: () =>
            import("./features/coming-soon/coming-soon.component").then(
                (m) => m.ComingSoonComponent
            ),
    },
    {
        path: "screen/query-interface",
        loadComponent: () =>
            import("./features/coming-soon/coming-soon.component").then(
                (m) => m.ComingSoonComponent
            ),
    },
    {
        path: "screen/analytics",
        loadComponent: () =>
            import("./features/coming-soon/coming-soon.component").then(
                (m) => m.ComingSoonComponent
            ),
    },
    {
        path: "screen/api-access",
        loadComponent: () =>
            import("./features/coming-soon/coming-soon.component").then(
                (m) => m.ComingSoonComponent
            ),
    },
];
